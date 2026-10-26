import {rfqOptions} from './forms.mjs';
import {services} from './content.mjs';
export function validate(raw){const data={};for(const k of ['company','name','email','phone','city','postal','service','application','doorType','operator','doors','timeline','request','needs','consent','website','projectType','buildingType','address','pushButton','electricLock','washrooms','locations','completionDate','portfolio'])data[k]=typeof raw[k]==='string'?raw[k].trim():'';
const errors={};for(const k of ['projectType'])if(!data[k])errors[k]='This field is required.';for(const [k,options] of Object.entries(rfqOptions))if(data[k]&&!options.includes(data[k]))errors[k]='Select a valid option.';for(const k of ['washrooms','locations'])if(data[k]&&(!/^[0-9]+$/.test(data[k])||Number(data[k])<1||Number(data[k])>10000))errors[k]='Enter a whole number from 1 to 10,000.';if(data.completionDate&&(!/^\d{4}-\d{2}-\d{2}$/.test(data.completionDate)||Number.isNaN(Date.parse(data.completionDate))||new Date(data.completionDate).toISOString().slice(0,10)!==data.completionDate))errors.completionDate='Enter a valid date.';for(const k of ['name','email','city'])if(!data[k])errors[k]='This field is required.';
for(const [k,max] of Object.entries({company:150,name:100,email:254,phone:40,city:100,postal:7,needs:4000,address:250,portfolio:2000}))if(data[k].length>max)errors[k]='This entry is too long.';
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))errors.email='Enter a valid email address.';
if(data.postal&&!/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(data.postal))errors.postal='Enter a Canadian postal code such as A1A 1A1.';
if(data.doors&&(!/^[0-9]+$/.test(data.doors)||Number(data.doors)<1||Number(data.doors)>10000))errors.doors='Enter a whole number from 1 to 10,000.';

const allowed={service:[...services.map(s=>s.slug),'unsure'],application:['Entrance / vestibule','Internal circulation','Washroom','Multiple applications','Not sure'],doorType:['Single swing door','Pair of swing doors','Sliding door','Mixed door types','Not sure'],operator:['Yes','No','Some doors have operators','Not sure'],timeline:['As soon as practical','Within 1–3 months','Within 3–6 months','Planning / budgeting','Other'],request:['quote','assessment','service']};for(const [k,values] of Object.entries(allowed))if(data[k]&&!values.includes(data[k]))errors[k]='Select a valid option.';
if(data.consent!=='yes')errors.consent='Consent is required to send this enquiry.';return {data,errors};}
export async function handleQuote(request,env={},deliver=fetch){const json=(status,body)=>new Response(JSON.stringify(body),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
if(request.method!=='POST')return json(405,{ok:false,message:'Use the enquiry form to submit a request.'});
const incomingOrigin=request.headers.get('origin');if(incomingOrigin&&incomingOrigin!==new URL(request.url).origin)return json(403,{ok:false,message:'This request could not be verified. Please use the website enquiry form.'});
const multipart=request.headers.get('content-type')?.includes('multipart/form-data');
const limit=multipart?7*1024*1024:20000;
if(Number(request.headers.get('content-length')||0)>limit)return json(413,{ok:false,message:'The enquiry is too large.'});
let raw,attachments=[];try{
 const bytes=await request.arrayBuffer();if(bytes.byteLength>limit)return json(413,{ok:false,message:'The enquiry is too large.'});
 if(multipart){
  const form=await new Response(bytes,{headers:{'content-type':request.headers.get('content-type')}}).formData();raw=Object.fromEntries(form);
  const files=form.getAll('attachments').filter(f=>typeof f!=='string'&&f.name&&f.size);
  if(files.length>3)return json(422,{ok:false,message:'Attach up to 3 files.'});
  for(const file of files){
   if(file.size>2*1024*1024)return json(422,{ok:false,message:'Each attachment must be 2 MB or smaller.'});
   const buffer=Buffer.from(await file.arrayBuffer());
   const mime=buffer.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10]))?'image/png':buffer[0]===255&&buffer[1]===216&&buffer[2]===255?'image/jpeg':buffer.subarray(0,5).toString()==='%PDF-'?'application/pdf':null;
   const extension=mime==='image/png'?/\.png$/i:mime==='image/jpeg'?/\.jpe?g$/i:/\.pdf$/i;
   if(!mime||!extension.test(file.name)||(file.type&&file.type!==mime))return json(422,{ok:false,message:'Attachments must be genuine JPEG, PNG or PDF files with a matching filename.'});
   attachments.push({name:file.name.split(/[\\/]/).at(-1).replace(/[^a-zA-Z0-9._ -]/g,'_').slice(0,120),contentType:mime,size:file.size,contentBase64:buffer.toString('base64')});
  }
 }else{const text=new TextDecoder().decode(bytes);raw=request.headers.get('content-type')?.includes('application/json')?JSON.parse(text):Object.fromEntries(new URLSearchParams(text))}
 if(!raw||typeof raw!=='object'||Array.isArray(raw))throw Error();
}catch{return json(400,{ok:false,message:'The enquiry could not be read. Please try again.'})}
const {data,errors}=validate(raw);if(data.website)return json(400,{ok:false,message:'The enquiry could not be verified.'});if(Object.keys(errors).length)return json(422,{ok:false,message:Object.entries(errors).map(([k,v])=>`${k}: ${v}`).join(' '),errors});
if(!env.QUOTE_WEBHOOK_URL)return json(503,{ok:false,message:'Online enquiry delivery is unavailable right now.'});let endpoint;try{endpoint=new URL(env.QUOTE_WEBHOOK_URL);if(endpoint.protocol!=='https:'&&!(env.ALLOW_LOCAL_TEST_DELIVERY==='true'&&['127.0.0.1','localhost'].includes(endpoint.hostname)))throw Error();}catch{return json(503,{ok:false,message:'Online enquiry delivery is unavailable right now.'})}
const reference='WTO-'+crypto.randomUUID().slice(0,8).toUpperCase();delete data.website;try{const result=await deliver(endpoint.href,{method:'POST',headers:{'Content-Type':'application/json',...(env.QUOTE_WEBHOOK_TOKEN?{'Authorization':'Bearer '+env.QUOTE_WEBHOOK_TOKEN}:{})},body:JSON.stringify({reference,receivedAt:new Date().toISOString(),source:'WaveToOpen.ca',enquiry:data,attachments,qualification:{queue:data.projectType==='Multi-location rollout'?'national-accounts':data.request==='service'||data.projectType==='Repair'?'service':data.projectType==='Accessible washroom'||data.application==='Washroom'?'washrooms':'projects',language:'en-CA'}}),signal:AbortSignal.timeout(10000),redirect:'error'});if(!result.ok)throw Error();return json(200,{ok:true,reference});}catch{return json(502,{ok:false,message:'We could not confirm delivery of your enquiry.'})}}
