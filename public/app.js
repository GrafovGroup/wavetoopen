const french=document.documentElement.lang==='fr-CA';
const t=value=>french?(window.WTO_FR?.[value]??value):value;
const quotePath=french?'/fr/soumission/':'/quote/';
// Keep the same service/city and section when changing languages, without persisting personal data.
const languageLink=document.querySelector('.language-link');
if(languageLink){const target=new URL(languageLink.href);target.search=location.search;target.hash=location.hash;languageLink.href=target.href;languageLink.addEventListener('click',event=>{if(document.querySelector('#quote-form')?.dataset.dirty==='true'&&!window.confirm(t('Changing language will leave your unsent entries behind. Save a copy first if needed. Continue?')))event.preventDefault()})}
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#primary-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=t(open?'Close':'Menu');nav.classList.toggle('is-open',open);document.body.classList.toggle('menu-open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('.nav details[open]').forEach(d=>d.open=false);if(menu?.getAttribute('aria-expanded')==='true'){menu.click();menu.focus()}}});
document.addEventListener('click',e=>{if(!e.target.closest('.nav'))document.querySelectorAll('.nav details[open]').forEach(d=>d.open=false)});
document.querySelectorAll('.nav details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.nav details').forEach(other=>{if(other!==d)other.open=false})}));
const params=new URLSearchParams(location.search);const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const search=document.querySelector('#market-search'),service=document.querySelector('#market-service');
if(search){search.value=params.get('city')||'';if([...service.options].some(o=>o.value===params.get('service')))service.value=params.get('service');const update=()=>{let count=0;document.querySelectorAll('.market-card').forEach(card=>{card.hidden=!normalize(card.dataset.search).includes(normalize(search.value));if(!card.hidden)count++;const q=new URLSearchParams({city:card.dataset.city});if(service.value)q.set('service',service.value);card.querySelector('.market-enquiry').href=quotePath+'?'+q});document.querySelector('#market-count').textContent=`${count} ${t(count===1?'city guide':'city guides')}`;document.querySelector('#no-markets').hidden=count>0;document.querySelector('#no-markets a').href=quotePath+'?'+new URLSearchParams({city:search.value,service:service.value})};search.addEventListener('input',update);service.addEventListener('change',update);update()}
const form=document.querySelector('#quote-form');
if(form){
form.addEventListener('input',event=>{form.dataset.dirty='true';event.target.setCustomValidity?.('')});
form.addEventListener('change',event=>{form.dataset.dirty='true';event.target.setCustomValidity?.('')});
form.addEventListener('invalid',event=>{if(!french)return;const el=event.target;let message=el.validity.valueMissing?(el.type==='checkbox'?'Please agree before sending your enquiry.':'Please complete this field.'):el.validity.typeMismatch&&el.type==='email'?'Please enter a valid email address.':'Please check this value.';el.setCustomValidity(t(message))},true);
const details=form.querySelector('#project-details');
const serviceTypes={
 'wave-to-open-installation':'New installation','automatic-door-operators':'New installation','accessible-door-openers':'New installation',
 'touchless-retrofits':'Retrofit','push-to-wave-upgrades':'Retrofit','universal-washrooms':'Accessible washroom','wave-to-lock':'Accessible washroom',
 'automatic-door-repair':'Repair','multi-location-rollouts':'Multi-location rollout','access-control-integration':'Not sure','locking-integration':'Not sure','unsure':'Not sure'
};
const defaultServices={'New installation':'wave-to-open-installation','Retrofit':'touchless-retrofits','Accessible washroom':'universal-washrooms','Repair':'automatic-door-repair','Multi-location rollout':'multi-location-rollouts','Not sure':'unsure'};
for(const k of ['city','service','projectType','application']){const el=form.elements[k],value=params.get(k);if(value&&el&&(el.tagName!=='SELECT'||[...el.options].some(o=>o.value===value)))el.value=value.slice(0,100)}
const requestParam=['quote','assessment','service'].includes(params.get('request'))?params.get('request'):'quote';
if(!form.elements.projectType.value)form.elements.projectType.value=requestParam==='service'?'Repair':serviceTypes[form.elements.service.value]||(form.elements.application.value==='Washroom'?'Accessible washroom':'');
if(!form.elements.service.value)form.elements.service.value=defaultServices[form.elements.projectType.value]||'';
let requestChosen=false;form.elements.request.addEventListener('change',()=>{requestChosen=true});
const updateRequest=()=>{if(requestChosen)return;form.elements.request.value=form.elements.projectType.value==='Repair'?'service':form.elements.request.value==='assessment'||requestParam==='assessment'?'assessment':'quote'};
form.elements.request.value=requestParam;
const quoteCopy={
 'New installation':['Plan your new door installation.','Tell us where you need powered, touchless access. We’ll help define the opening and equipment.','Describe the entrance or internal door you want to make automatic.'],
 'Retrofit':['Let’s improve your existing doors.','Share your location and the change you need. Equipment details and photos can follow.','For example: replace our lobby push buttons with touchless sensors.'],
 'Repair':['Tell us what’s happening with your door.','Start with the location and a contact. You can add symptoms and equipment photos below.','What happens when you try the door? Include when the problem started, if known.'],
 'Accessible washroom':['Plan your washroom door system.','Tell us where the washroom is and how to reach you. Add privacy or assistance requirements if you know them.','Describe the entry, privacy or assistance functions you need.'],
 'Multi-location rollout':['Bring your properties into one plan.','Start with a representative location and contact. You can add your site list under project details.','Which properties or openings would you like to prioritize?'],
 'Not sure':['Tell us what you need your door to do.','You don’t need a product name. Share the location and we’ll help identify the next step.','Describe the difficulty you want to solve, in your own words.']
};
const updateDetails=()=>{
 const type=form.elements.projectType.value;
 const copy=quoteCopy[type]||['Let’s start with your door.','Tell us where the project is and how to reach you. We’ll help with the details.','For example: our lobby door has a push button and we’d like to make it touchless.'];
 const heading=document.querySelector('#quote-title'),intro=document.querySelector('#quote-intro');if(heading)heading.textContent=t(copy[0]);if(intro)intro.textContent=t(copy[1]);form.elements.needs.placeholder=t(copy[2]);
 const washroom=type==='Accessible washroom'||['universal-washrooms','wave-to-lock'].includes(form.elements.service.value)||form.elements.application.value==='Washroom';
 for(const [id,relevant] of [['washroom-fields',washroom],['portfolio-fields',type==='Multi-location rollout']]){
  const group=form.querySelector('#'+id);group.hidden=!relevant;group.disabled=!relevant;
 }
};
form.elements.projectType.addEventListener('change',()=>{form.elements.service.value=defaultServices[form.elements.projectType.value]||'';updateRequest();updateDetails()});
form.elements.service.addEventListener('change',()=>{const type=serviceTypes[form.elements.service.value];if(type)form.elements.projectType.value=type;updateRequest();updateDetails()});
form.elements.application.addEventListener('change',updateDetails);updateRequest();updateDetails();
const revealAttachmentLink=()=>{if(location.hash==='#upload-section'){details.open=true;requestAnimationFrame(()=>document.querySelector('#upload-section').scrollIntoView({block:'start'}))}};
revealAttachmentLink();window.addEventListener('hashchange',revealAttachmentLink);
form.addEventListener('invalid',e=>{if(details.contains(e.target))details.open=true},true);
const status=document.querySelector('#form-status');const show=(message,error=false)=>{status.className='status '+(error?'error':'success');status.textContent=message;status.focus()};
let sending=false;const withoutFilesButton=document.querySelector('#send-without-files');
const submitEnquiry=async(withoutAttachments=false)=>{
 if(sending||!form.reportValidity())return;
 const button=form.querySelector('[type="submit"]');sending=true;button.disabled=true;withoutFilesButton.disabled=true;button.textContent=t('Sending enquiry…');status.className='status';status.textContent=t('Sending your project details…');
 form.querySelectorAll('[aria-invalid="true"]').forEach(el=>el.removeAttribute('aria-invalid'));
 try{
  const payload=new FormData(form),files=withoutAttachments?[]:[...form.elements.attachments.files];
  if(files.length>3||files.some(f=>f.size>2*1024*1024))throw new Error(t('Choose up to 3 files, no larger than 2 MB each.'));
  if(files.some(f=>!['image/jpeg','image/png','application/pdf'].includes(f.type)))throw new Error(t('Choose JPEG, PNG or PDF files.'));
  if(!files.length)payload.delete('attachments');
  if(withoutAttachments)payload.set('attachment_note',t('Visitor chose to send this enquiry without the selected attachments. Please arrange photo or drawing sharing when responding.'));
  const response=await fetch(form.action,{method:'POST',headers:{Accept:'application/json'},body:payload,signal:AbortSignal.timeout(30000)});
  const result=await response.json().catch(()=>null);
  if(!response.ok||result?.ok!==true){
   const errors=Array.isArray(result?.errors)?result.errors:[];
   for(const error of errors){const field=form.elements.namedItem(error.field);if(field instanceof HTMLElement){field.setAttribute('aria-invalid','true');if(details.contains(field))details.open=true}}
   const deliveryError=errors.map(error=>error.message).filter(Boolean).join(' ')||result?.error||'We could not confirm delivery.';
   if(/File Uploads Not Permitted/i.test(deliveryError)){withoutFilesButton.hidden=false;throw new Error(t('The delivery service could not accept files. You can send the enquiry without attachments using the option below, and arrange photo sharing when we respond.'))}
   throw new Error(french?t('We could not confirm delivery.'):deliveryError);
  }
  window.dispatchEvent(new CustomEvent('wavetoopen:conversion',{detail:{event:'quote_accepted',request:form.elements.request.value,projectType:form.elements.projectType.value}}));
  withoutFilesButton.hidden=true;
  form.dataset.dirty='false';show(t('Thank you. Your enquiry has been accepted for delivery.')+(withoutAttachments?t(' Attachments were not sent.'):'')+t(' We’ll review your details and contact you about the next step. Keep a copy for your records. This does not confirm a booking or price.'));
 }catch(err){show((err.name==='TimeoutError'?t('Delivery could not be confirmed before the connection timed out.'):(french&&!Object.values(window.WTO_FR||{}).includes(err.message)?t('We could not confirm delivery.'):err.message))+t(' Your entries are still here. Save a copy, retry later, or call (833) 696-9996.'),true)}
 finally{sending=false;button.disabled=false;withoutFilesButton.disabled=false;button.innerHTML=t('Send enquiry')+' <span aria-hidden="true">↗</span>'}
};
form.addEventListener('submit',e=>{e.preventDefault();submitEnquiry()});
withoutFilesButton.addEventListener('click',()=>submitEnquiry(true));
document.querySelector('#download-enquiry').addEventListener('click',()=>{const fields=Object.fromEntries(new FormData(form));const titles={projectType:'Project type',buildingType:'Building type',address:'Address',pushButton:'Existing push button',electricLock:'Existing electric lock',washrooms:'Washroom count',locations:'Location count',completionDate:'Desired completion date',portfolio:'Portfolio details',company:'Company',name:'Contact',email:'Email',phone:'Phone',city:'City',postal:'Postal code',service:'Service',application:'Application',doorType:'Door type',operator:'Existing operator',doors:'Door count',timeline:'Timeline',request:'Request type',needs:'Project needs'};const display=k=>{const el=form.elements[k];return !fields[k]?t('Not provided'):el?.tagName==='SELECT'?el.selectedOptions[0].textContent:fields[k]};const body=t('WaveToOpen.ca — enquiry copy\nSaved on your device. This file is not a delivery receipt.\n\n')+Object.entries(titles).map(([k,label])=>t(label)+': '+display(k)).join('\n')+t('\nAttachments (files not included in this text copy): ')+[...form.elements.attachments.files].map(f=>f.name).join(', ');const blob=new Blob([body],{type:'text/plain;charset=utf-8'}),objectURL=URL.createObjectURL(blob);const a=document.createElement('a');a.href=objectURL;a.download=french?'wavetoopen-demande.txt':'wavetoopen-enquiry.txt';a.click();setTimeout(()=>URL.revokeObjectURL(objectURL),1000)});
}
window.matchMedia('(min-width:851px)').addEventListener('change',event=>{if(event.matches&&menu?.getAttribute('aria-expanded')==='true')menu.click()});

document.addEventListener('click',event=>{const a=event.target.closest('a');if(a?.getAttribute('href')?.startsWith('tel:'))window.dispatchEvent(new CustomEvent('wavetoopen:conversion',{detail:{event:'phone_click'}}))});

// Deep links reveal the relevant technical section without hiding it from no-script visitors.
const revealServiceSection=()=>{let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const target=id?document.getElementById(id):null;if(target?.matches('.service-disclosure')){target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}))}};
revealServiceSection();window.addEventListener('hashchange',revealServiceSection);

document.querySelector('[data-play-demo]')?.addEventListener('click',()=>{
 const screen=document.querySelector('#activation-video'),frame=document.createElement('iframe');
 frame.src='https://player.vimeo.com/video/680211481?autoplay=1&dnt=1#t=2m49s';
 frame.title=t('Norton Rixson / ASSA ABLOY wave-to-open manufacturer demonstration');
 frame.allow='autoplay; fullscreen; picture-in-picture';frame.allowFullscreen=true;
 frame.referrerPolicy='strict-origin-when-cross-origin';
 screen.replaceChildren(frame);screen.classList.add('is-playing');frame.focus();
 document.querySelector('.demo-caption').innerHTML=t('Manufacturer training doorway · ')+'<a href="https://vimeo.com/680211481#t=2m49s">'+t('Norton Rixson / ASSA ABLOY on Vimeo ↗')+'</a>'+t('. Equipment example; suitability depends on your opening.');
});
