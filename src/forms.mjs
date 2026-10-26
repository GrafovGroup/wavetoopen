import {services,markets} from './content.mjs';
export const rfqOptions={projectType:['New installation','Retrofit','Repair','Accessible washroom','Multi-location rollout','Not sure'],buildingType:['Healthcare / long-term care','Office / commercial building','Retail / banking','Managed residential property','Restaurant / hospitality','Education','Government / public facility','Industrial','Other'],pushButton:['Yes','No','Some doors','Not sure'],electricLock:['Yes','No','Some doors','Not sure']};
const field=(id,label,type='text',attrs='')=>`<div class="field"><label for="${id}">${label}</label><input id="${id}" name="${id}" type="${type}" ${attrs}></div>`;
const select=(id,label,options,required=false)=>`<div class="field"><label for="${id}">${label}</label><select id="${id}" name="${id}" ${required?'required':''}><option value="">Select an option</option>${options.map(o=>`<option value="${Array.isArray(o)?o[0]:o}">${Array.isArray(o)?o[1]:o}</option>`).join('')}</select></div>`;
export function quoteForm(){return `<form class="quote-form" id="quote-form" method="post" enctype="multipart/form-data" action="https://formspree.io/f/xrpgdwzz">
<input type="hidden" name="_subject" value="WaveToOpen project enquiry">
<p class="small muted form-intro">Start with the basics. Fields marked * are required.</p>
<fieldset><legend>Your project</legend><div class="form-fields">
${select('projectType','What can we help with? *',[['New installation','New door installation'],['Retrofit','Upgrade existing doors'],['Accessible washroom','Washroom door system'],['Repair','Door repair'],['Multi-location rollout','Multiple properties'],['Not sure','Help me choose']],true)}
${field('city','Project city / municipality *','text','required maxlength="100" autocomplete="address-level2" list="cities"')}
<datalist id="cities">${markets.map(([c])=>`<option value="${c}"></option>`).join('')}</datalist>
</div></fieldset>
<fieldset><legend>How can we reach you?</legend><div class="form-fields">
${field('name','Your name *','text','required maxlength="100" autocomplete="name"')}
${field('email','Email *','email','required maxlength="254" autocomplete="email"')}
${field('phone','Phone (optional)','tel','maxlength="40" autocomplete="tel"')}
<div class="field full"><label for="needs">Anything you’d like us to know? (optional)</label><textarea id="needs" name="needs" maxlength="4000" placeholder="For example: our lobby door has a push button and we’d like to make it touchless."></textarea></div>
</div></fieldset>
<details class="optional-details" id="project-details"><summary>Add photos or project details <span>Optional</span></summary><div class="optional-content">
<p class="small muted">Share what you know. You can leave the rest blank.</p>
<div class="field" id="upload-section"><label for="attachments">Photos or project drawings</label><input id="attachments" name="attachments" type="file" accept="image/jpeg,image/png,application/pdf,.jpg,.jpeg,.png,.pdf" multiple aria-describedby="upload-help"><p class="hint" id="upload-help">Up to 3 JPEG, PNG or PDF files, 2 MB each. Show the door and controls. Leave out people, access codes and confidential details. Files are sent with your enquiry, not published.</p></div>
<fieldset><legend>Building & timing</legend><div class="form-fields">
${select('request','What would you like to arrange?',[['quote','Project quote'],['assessment','Site assessment'],['service','Repair / service enquiry']])}
${field('company','Company / organization','text','maxlength="150" autocomplete="organization"')}
${select('buildingType','Building type',rfqOptions.buildingType)}
${field('postal','Postal code','text','maxlength="7" autocomplete="postal-code" placeholder="A1A 1A1"')}
${field('address','Project address','text','maxlength="250" autocomplete="street-address"')}
${select('timeline','Target timing',['As soon as practical','Within 1–3 months','Within 3–6 months','Planning / budgeting','Other'])}
${field('completionDate','Desired completion date','date')}
</div></fieldset>
<fieldset><legend>Door & equipment</legend><div class="form-fields">
${select('service','Specific service',[...services.map(s=>[s.slug,s.name]),['unsure','Help me choose']])}
${select('application','Door location',['Entrance / vestibule','Internal circulation','Washroom','Multiple applications','Not sure'])}
${select('doorType','Door type',['Single swing door','Pair of swing doors','Sliding door','Mixed door types','Not sure'])}
${select('operator','Existing automatic operator?',['Yes','No','Some doors have operators','Not sure'])}
${select('pushButton','Existing push button?',rfqOptions.pushButton)}
${field('doors','Approximate number of doors','number','min="1" max="10000" step="1" inputmode="numeric"')}
</div></fieldset>
<fieldset id="washroom-fields"><legend>Washroom details</legend><div class="form-fields">
${field('washrooms','Number of washrooms','number','min="1" max="10000" step="1"')}
${select('electricLock','Existing electric lock?',rfqOptions.electricLock)}
</div></fieldset>
<fieldset id="portfolio-fields"><legend>Multiple properties</legend><div class="form-fields">
${field('locations','Number of locations','number','min="1" max="10000" step="1"')}
<div class="field full"><label for="portfolio">Other cities / portfolio scope</label><textarea id="portfolio" name="portfolio" maxlength="2000" placeholder="Cities, approximate doors per site and rollout priorities."></textarea></div>
</div></fieldset></div></details>
<div class="hp" aria-hidden="true"><label for="website">Leave this empty</label><input id="website" name="_gotcha" tabindex="-1" autocomplete="off"></div>
<label class="checkbox"><input type="checkbox" name="consent" value="yes" required><span>I agree to the use of my details and any attachments to respond to this enquiry, as described in the <a href="/privacy/">privacy notice</a>. *</span></label>
<div id="form-status" class="status" role="status" tabindex="-1" aria-live="polite"></div>
<button class="btn outline file-fallback" id="send-without-files" type="button" hidden>Send without attachments ↗</button>
<div class="actions"><button class="btn" type="submit">Send enquiry <span aria-hidden="true">↗</span></button><button class="save-copy" type="button" id="download-enquiry">Save a copy ↓</button></div>
<p class="small muted">We’ll review your request and contact you about the next step. A submission does not confirm a booking, price or emergency attendance.</p>
<noscript><p class="notice">You can submit without JavaScript. Use your browser’s Back button to return if delivery is unavailable.</p></noscript></form>`}
