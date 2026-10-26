import {architecturalPhoto} from './architectural-imagery.mjs';
export function heroDemo(photo) {
 return `<div class="activation-demo"><div class="demo-screen" id="activation-video">${architecturalPhoto('touchless-entry',true,false)}<button type="button" class="demo-play" data-play-demo aria-controls="activation-video"><span class="play-symbol" aria-hidden="true">▶</span><span>See a wave open a door<small>Play manufacturer video</small></span></button></div><p class="demo-caption">Watch: <a href="https://vimeo.com/680211481#t=2m49s">Norton Rixson / ASSA ABLOY demonstration ↗</a>. Manufacturer demonstration; player loads on request.</p><noscript><p><a class="text-link" href="https://vimeo.com/680211481#t=2m49s">Watch the door demonstration on Vimeo ↗</a></p></noscript></div>`;
}
