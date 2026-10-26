const {chromium}=require('playwright');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch();
 const page=await browser.newPage({bypassCSP:true,viewport:{width:1440,height:1000}});
 const base='http://127.0.0.1:4317',endpoint='https://formspree.io/f/xrpgdwzz';
 let payload='',calls=0;
 await page.route(endpoint,route=>{calls++;payload=route.request().postDataBuffer().toString();return route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({ok:true})})});
 await page.goto(base+'/');assert.equal(await page.locator('.full-service-list').getAttribute('open'),null);await page.locator('.full-service-list > summary').focus();await page.keyboard.press('Enter');assert.equal(await page.locator('.full-service-list .link-row:visible').count(),11);
 const paths=[['New installation','wave-to-open-installation','quote'],['Retrofit','touchless-retrofits','quote'],['Accessible washroom','universal-washrooms','quote'],['Repair','automatic-door-repair','service']];
 for(let i=0;i<paths.length;i++){
  await page.goto(base+'/');await page.locator('.journey-card .btn').nth(i).click();await page.waitForLoadState('load');
  for(const [id,value] of [['projectType',paths[i][0]],['service',paths[i][1]],['request',paths[i][2]]])assert.equal(await page.locator('#'+id).inputValue(),value);
  assert.equal(await page.locator('#project-details').getAttribute('open'),null);
 }
 await page.goto(base+'/quote/');
 assert.equal(await page.locator('form [required]').count(),5);
 assert.equal(await page.locator('form :is(input,select,textarea):not([name=_gotcha]):visible').count(),7);
 await page.locator('#projectType').selectOption('Not sure');await page.locator('#city').fill('Whitehorse');await page.locator('#name').fill('Local Test');await page.locator('#email').fill('test@example.com');await page.locator('[name=consent]').check();
 await page.locator('[type=submit]').click();await page.waitForFunction(()=>document.querySelector('#form-status').textContent.includes('accepted for delivery'));
 assert.equal(calls,1);assert.ok(payload.includes('Whitehorse'));assert.ok(!payload.includes('name="washrooms"'));assert.ok(!payload.includes('name="portfolio"'));
 await page.locator('#projectType').selectOption('Accessible washroom');await page.locator('#project-details > summary').click();
 assert.equal(await page.locator('#washroom-fields').isVisible(),true);assert.equal(await page.locator('#portfolio-fields').isVisible(),false);
 await page.locator('#washrooms').fill('2');await page.locator('#projectType').selectOption('Multi-location rollout');
 assert.equal(await page.locator('#washroom-fields').isVisible(),false);assert.equal(await page.locator('#portfolio-fields').isVisible(),true);
 await page.locator('#locations').fill('3');await page.locator('#portfolio').fill('Local test only');await page.locator('[type=submit]').click();await page.waitForFunction(()=>!document.querySelector('[type=submit]').disabled);
 assert.ok(!payload.includes('name="washrooms"'));assert.ok(payload.includes('name="portfolio"'));
 await page.locator('#projectType').selectOption('Repair');assert.equal(await page.locator('#request').inputValue(),'service');assert.equal(await page.locator('#portfolio-fields').isVisible(),false);
 await page.locator('#doors').fill('0');await page.locator('#project-details > summary').click();const previous=calls;await page.locator('[type=submit]').click();assert.equal(calls,previous);assert.equal(await page.locator('#project-details').getAttribute('open'),'');
 await page.goto(base+'/quote/?city=Montr%C3%A9al&service=wave-to-lock#upload-section');assert.equal(await page.locator('#projectType').inputValue(),'Accessible washroom');assert.equal(await page.locator('#city').inputValue(),'Montréal');assert.equal(await page.locator('#attachments').isVisible(),true);
 await page.goto(base+'/quote/?request=assessment');await page.locator('#project-details > summary').click();assert.equal(await page.locator('#request').inputValue(),'assessment');
 await page.locator('#request').selectOption('quote');await page.locator('#service').selectOption('touchless-retrofits');await page.locator('#application').selectOption('Entrance / vestibule');assert.equal(await page.locator('#request').inputValue(),'quote');
 await page.locator('#request').selectOption('assessment');await page.locator('#application').selectOption('Washroom');assert.equal(await page.locator('#request').inputValue(),'assessment');
 let accessibility=[];
 for(const width of [390,561,900,1440]){
  await page.setViewportSize({width,height:900});
  for(const path of ['/','/quote/','/services/','/resources/']){
   await page.goto(base+path);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`Overflow at ${width}: ${path}`);
   if(path==='/quote/')assert.ok((await page.locator('#projectType').boundingBox()).y<620,'First field must be visible near the top');
   if(width===390||width===1440){await page.addScriptTag({content:fs.readFileSync('work/axe.min.js','utf8')});const result=await page.evaluate(()=>axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));accessibility.push({width,path,violations:result.violations});assert.deepEqual(result.violations.map(x=>x.id),[])}
  }
 }
 const nojs=await browser.newPage({javaScriptEnabled:false});await nojs.goto(base+'/quote/');await nojs.locator('#projectType').selectOption('New installation');await nojs.locator('#city').fill('Victoria');await nojs.locator('#name').fill('Local Test');await nojs.locator('#email').fill('test@example.com');await nojs.locator('[name=consent]').check();assert.equal(await nojs.locator('form').evaluate(form=>form.checkValidity()),true);assert.equal(await nojs.locator('form').getAttribute('action'),endpoint);
 for(const width of [390,1440]){await page.setViewportSize({width,height:900});for(const path of ['/','/quote/']){await page.goto(base+path);await page.screenshot({path:`outputs/journey-${path==='/'?'home':'quote'}-${width}.png`,fullPage:true})}}
 fs.writeFileSync('outputs/journey-checks.json',JSON.stringify({passed:true,liveSubmissionSent:false,checks:['All four homepage paths prefill enquiry','Five required fields; seven initially visible controls','Minimal enquiry accepted by local Formspree mock','Conditional fields excluded when irrelevant','Collapsed optional validation expands automatically','Photo deep links and accented city prefill retained','First form field in first mobile viewport','No-JavaScript minimal enquiry valid'],accessibility},null,2));
 await browser.close();console.log('Journey, conditional form and accessibility checks passed. No live submissions sent.');
})().catch(e=>{console.error(e);process.exit(1)});
