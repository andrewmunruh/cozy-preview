(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const ey="modulepreload",ty=function(e){return"/cozy-preview/"+e},Wp={},p=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(n.map(l=>{if(l=ty(l),l in Wp)return;Wp[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ey,c||(f.as="script"),f.crossOrigin="",f.href=l,r&&f.setAttribute("nonce",r),document.head.appendChild(f),c)return new Promise((h,u)=>{f.addEventListener("load",h),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return o.then(a=>{for(const r of a||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},ny="4e5dc080ffe3",dc="cozy-sw-killed";let Vp=!1;async function sy(e){try{const t=new AbortController,n=setTimeout(()=>t.abort(),4e3),s=await fetch(e+"sw-switch.json?t="+Date.now(),{cache:"no-store",signal:t.signal});if(clearTimeout(n),!s.ok)return!1;const o=await s.json();return!!o&&o.sw==="off"}catch{return!1}}async function oy(e){const t=location.origin+e,n=e==="/kids-house-game/";try{for(const s of await navigator.serviceWorker.getRegistrations())(s.scope===t||s.scope.startsWith(t))&&await s.unregister()}catch{}try{if("caches"in self)for(const s of await caches.keys())(n&&s==="cozy-v1"||s.startsWith("cozy:"+e+":"))&&await caches.delete(s)}catch{}}async function iy(e){if(!("serviceWorker"in navigator))return;const t=navigator.serviceWorker;if(await sy(e.base)){await oy(e.base);let o=!1;try{o=sessionStorage.getItem(dc)==="1",sessionStorage.setItem(dc,"1")}catch{o=!0}t.controller&&!o&&location.reload();return}try{sessionStorage.removeItem(dc)}catch{}t.addEventListener("message",o=>{const i=o.data;i&&i.type==="cozy-sw"&&typeof i.build=="string"&&!i.build.startsWith("__")&&i.build!==ny&&!Vp&&(Vp=!0,ay(e))}),t.addEventListener("controllerchange",()=>{try{t.controller?.postMessage({type:"cozy-build?"})}catch{}});let n;try{n=await t.register(e.base+"sw.js")}catch{return}try{t.controller?.postMessage({type:"cozy-build?"})}catch{}let s=Date.now();document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"||Date.now()-s<10*6e4||(s=Date.now(),n?.update().catch(()=>{}))})}function ay(e){const t=()=>location.reload(),n=()=>{if(e.safeNow&&!e.safeNow()){setTimeout(n,2e3);return}(e.showNote??ry)(t)};n()}function ry(e){if(document.querySelector(".updateNote"))return;const t=document.createElement("div");t.className="toast grownNotice updateNote",t.setAttribute("role","status"),t.innerHTML='<span>New stuff! Tap to refresh</span><button type="button">Refresh</button>',t.addEventListener("click",e),(document.getElementById("toastLane")??document.body).appendChild(t)}const ly=150;function cy(e,t,n){const s=n.gap??ly,o=Math.max(n.minY,Math.min(n.maxY,e.y)),i=r=>Math.max(n.minX,Math.min(n.maxX,r)),a=r=>t.every(l=>Math.abs(l.x-r)>=s||Math.abs(l.y-o)>=s*.6);for(let r=0;r<=12;r++)for(const l of r?[1,-1]:[1]){const c=i(e.x+l*r*s*.6);if(a(c))return{x:c,y:o}}return{x:i(e.x),y:o}}const sa="#5a3d5c",ie=(e=4)=>`stroke="${sa}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,fc=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],qn=1e3,Fn=700,pc="M 30 660 C 150 640, 200 540, 330 545 S 540 650, 690 600 S 925 470, 850 375 S 640 330, 520 355 S 270 385, 250 285 S 330 145, 480 150 S 700 200, 790 150",as={x:115,y:170},mn={x:880,y:120},wn={x:600,y:480},rs={x:400,y:260},f0=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="22" rx="20" ry="6" fill="#000" opacity=".1"/><rect x="-5" y="2" width="10" height="20" rx="4" fill="#c99366" ${ie(3)}/><circle cx="0" cy="-10" r="20" fill="${s}" ${ie(3)}/><circle cx="-12" cy="-2" r="12" fill="${s}" ${ie(3)}/><circle cx="12" cy="-3" r="13" fill="${s}" ${ie(3)}/><circle cx="-5" cy="-16" r="5" fill="#fff" opacity=".35"/></g>`,qs=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})" fill="#fff"><ellipse cx="0" cy="10" rx="46" ry="22"/><ellipse cx="-36" cy="16" rx="28" ry="16"/><ellipse cx="38" cy="14" rx="30" ry="18"/><ellipse cx="10" cy="2" rx="24" ry="18"/></g>`,Hi=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">${[0,72,144,216,288].map(o=>`<circle cx="${(Math.cos(o*Math.PI/180)*8).toFixed(1)}" cy="${(Math.sin(o*Math.PI/180)*8).toFixed(1)}" r="6.5" fill="${n}" ${ie(2)}/>`).join("")}<circle r="4.5" fill="#ffd43b" ${ie(2)}/></g>`,ls=(e,t,n)=>`<g transform="translate(${e} ${t})">${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*4}" cy="${Math.sin(s*Math.PI/180)*4}" r="3.6" fill="${n}"/>`).join("")}<circle r="2.6" fill="#ffd43b"/></g>`;function dy(){return`<svg class="mapBg" viewBox="0 0 ${qn} ${Fn}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${qn}" height="${Fn}" rx="34" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="160" cy="420" rx="150" ry="90"/><ellipse cx="760" cy="250" rx="170" ry="70"/><ellipse cx="480" cy="640" rx="140" ry="50"/><ellipse cx="930" cy="600" rx="90" ry="110"/></g>
  <g fill="#93d78e" opacity=".7"><ellipse cx="420" cy="260" rx="70" ry="30"/><ellipse cx="80" cy="560" rx="60" ry="26"/><ellipse cx="700" cy="420" rx="50" ry="22"/></g>
  <!-- pond -->
  <ellipse cx="120" cy="470" rx="72" ry="40" fill="#8ecae6" ${ie()}/><ellipse cx="108" cy="462" rx="42" ry="16" fill="#bde6f7"/><path d="M150 480 q8 -6 16 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <!-- side paths to the park and the ranch -->
  <path d="M250 285 Q190 250 150 215" fill="none" stroke="${sa}" stroke-width="30" stroke-linecap="round"/><path d="M250 285 Q190 250 150 215" fill="none" stroke="#f2dcb8" stroke-width="22" stroke-linecap="round"/>
  <!-- the street -->
  <path d="${pc}" fill="none" stroke="${sa}" stroke-width="58" stroke-linecap="round"/>
  <path id="mapRoad" d="${pc}" fill="none" stroke="#f2dcb8" stroke-width="48" stroke-linecap="round"/>
  <path d="${pc}" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="18 16" stroke-linecap="round" opacity=".9"/>
  <!-- town square -->
  <g transform="translate(${wn.x} ${wn.y})"><circle r="74" fill="#f7e6c8" ${ie()}/><circle r="74" fill="none" stroke="#e6cfa6" stroke-width="10" stroke-dasharray="10 12" transform="scale(.82)"/>
    <circle r="30" fill="#bde6f7" ${ie()}/><circle r="13" fill="#fff6e6" ${ie(3)}/><path d="M0 -13 Q-8 -32 -16 -20 M0 -13 Q8 -32 16 -20 M0 -13 V-34" fill="none" stroke="#74c0fc" stroke-width="4" stroke-linecap="round"/>
    ${ls(-52,-40,"#ff8fab")}${ls(54,-38,"#b197fc")}${ls(-56,40,"#ffd43b")}${ls(52,44,"#ff8fab")}</g>
  ${[[60,330,"#ff8fab"],[300,470,"#b197fc"],[430,560,"#ffd43b"],[760,520,"#ff8fab"],[950,260,"#b197fc"],[600,260,"#ffd43b"],[380,90,"#ff8fab"],[40,120,"#b197fc"],[960,420,"#ffd43b"],[840,640,"#b197fc"],[210,620,"#ff8fab"]].map(([e,t,n])=>ls(+e,+t,String(n))+ls(+e+14,+t+8,String(n))).join("")}
  </svg>`}function Up(e,t,n=qn,s=Fn){const o=[];let i=7;const a=()=>(i=(i*9301+49297)%233280)/233280;for(let r=0;r<260&&o.length<34;r++){const l=30+a()*(n-60),c=40+a()*(s-70);t(l,c)||e.some(d=>Math.hypot(d.x-l,d.y-c)<d.r)||(e.push({x:l,y:c,r:46}),o.push(f0(l,c,.75+a()*.45,["#5cc985","#4fbf7a","#78d39a"][r%3])))}return`<svg class="mapTrees" viewBox="0 0 ${n} ${s}" xmlns="http://www.w3.org/2000/svg">${o.join("")}</svg>`}function fy(e,t){const n=e/2,s=`M ${n} 36 C ${n-36} ${t*.28}, ${n+28} ${t*.48}, ${n-8} ${t*.68} S ${n+18} ${t*.86}, ${n} ${t-28}`;return`<svg class="mapBg" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="${t}" rx="28" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="${e*.22}" cy="${t*.22}" rx="90" ry="48"/><ellipse cx="${e*.78}" cy="${t*.42}" rx="80" ry="40"/><ellipse cx="${e*.3}" cy="${t*.72}" rx="100" ry="46"/></g>
  <ellipse cx="78" cy="${t*.58}" rx="46" ry="28" fill="#8ecae6" ${ie()}/><ellipse cx="70" cy="${t*.56}" rx="24" ry="10" fill="#bde6f7"/>
  <path d="${s}" fill="none" stroke="${sa}" stroke-width="44" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#f2dcb8" stroke-width="34" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" stroke-linecap="round" opacity=".9"/>
  ${[[40,250,"#ff8fab"],[500,280,"#b197fc"],[70,520,"#ffd43b"],[490,640,"#ff8fab"],[50,860,"#74c0fc"],[500,980,"#ffd43b"]].map(([o,i,a])=>ls(+o,+i,String(a))+ls(+o+16,+i+10,String(a))).join("")}
  </svg>`}const py=(e,t,n=1,s="#4fbf7a")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="10" rx="28" ry="8" fill="#000" opacity=".08"/><circle cx="-14" cy="-2" r="16" fill="${s}" ${ie(3)}/><circle cx="14" cy="0" r="18" fill="${s}" ${ie(3)}/><circle cx="0" cy="-12" r="14" fill="${s}" ${ie(3)}/><circle cx="-4" cy="-16" r="4" fill="#fff" opacity=".28"/></g>`,hy=(e,t,n="#ff8fab")=>`<g transform="translate(${e} ${t})"><ellipse cx="-7" cy="-2" rx="8" ry="5" fill="${n}" ${ie(2)} transform="rotate(-24)"/><ellipse cx="7" cy="-2" rx="8" ry="5" fill="${n}" ${ie(2)} transform="rotate(24)"/><ellipse cx="-6" cy="4" rx="6" ry="4" fill="#b197fc" ${ie(1.6)} transform="rotate(18)"/><ellipse cx="6" cy="4" rx="6" ry="4" fill="#b197fc" ${ie(1.6)} transform="rotate(-18)"/><path d="M0 -6 V8" ${ie(2)}/></g>`;function uy(e,t,n){const s=e/2,o=(f,h,u)=>h>t*.4&&h<t-28&&Math.abs(f-s)>52&&!n.some(y=>Math.hypot(y.x-f,y.y-h)<y.r+u),i=[.07,.15,.22,.78,.85,.93],a=[.46,.54,.62,.7,.78,.86,.93],r=["#ff8fab","#b197fc","#ffd43b","#74c0fc","#69db7c"],l=[];let c=0;a.forEach((f,h)=>{i.forEach((u,y)=>{const g=Math.round(e*u+((h+y)%2?8:-6)),v=Math.round(t*f);if((h+y)%3===0){if(!o(g,v,34))return;l.push(py(g,v,.85+y%2*.15,["#4fbf7a","#5cc985","#3dae6a"][(h+y)%3]))}else{if(!o(g,v,18))return;const w=r[(h*2+y)%r.length];l.push(Hi(g,v,w,.85)),(h+y)%2===0&&o(g+18,v+12,14)&&l.push(Hi(g+18,v+12,r[(h+y+2)%r.length],.7))}c++})});const d=[[e*.2,t*.5],[e*.8,t*.66],[e*.18,t*.84]];for(const[f,h]of d)o(f,h,16)&&l.push(hy(Math.round(f),Math.round(h),c%2?"#ffd43b":"#ff8fab"));return`<svg class="mapMeadowFill" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">${l.join("")}</svg>`}const gy=`<svg class="mapSkyArt" viewBox="0 0 900 200" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
  ${qs(280,28,1.05)}${qs(430,8,.8)}${qs(560,36,.95)}
  ${qs(250,88,.75)}${qs(390,108,1.05)}${qs(540,96,.85)}${qs(640,78,.7)}
  <g fill="none" stroke-linecap="round">
    ${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M300 ${118+t*6} A70 48 0 0 1 430 ${112+t*6}" stroke="${e}" stroke-width="5"/>`).join("")}
  </g>
</svg>`,my=`<svg class="mapMeadowArt" viewBox="0 0 900 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <path d="M0 108 C 90 62 170 118 280 84 C 390 50 470 112 590 78 C 700 48 790 100 900 72 V 220 H0 Z" fill="#c9f2c4"/>
  <path d="M0 148 C 130 108 250 168 400 132 C 540 100 680 168 900 128 V 260 H0 Z" fill="#9be39a"/>
  <path d="M0 200 C 160 168 320 230 500 196 C 660 168 780 220 900 190 V 320 H0 Z" fill="#7dce78"/>
  <g stroke="#c99366" stroke-width="7" stroke-linecap="round">
    <path d="M16 168 H884"/><path d="M16 194 H884"/>
    ${Array.from({length:17},(e,t)=>`<path d="M${28+t*52} 146 V218"/>`).join("")}
  </g>
  <g stroke="#fff6e6" stroke-width="3" stroke-linecap="round" opacity=".9">
    <path d="M16 164 H884"/><path d="M16 190 H884"/>
  </g>
  ${[[48,188,"#ff8fab",.85],[120,176,"#ffd43b",.7],[200,198,"#b197fc",.9],[280,172,"#ff8fab",.75],[360,204,"#74c0fc",.8],[450,178,"#ffd43b",.85],[530,200,"#ff8fab",.75],[620,174,"#b197fc",.8],[700,196,"#69db7c",.7],[790,180,"#ffd43b",.85]].map(([e,t,n,s])=>Hi(+e,+t,String(n),+s)).join("")}
  ${[[80,248,"#ff8fab"],[160,268,"#b197fc"],[250,242,"#ffd43b"],[340,274,"#ff8fab"],[430,250,"#74c0fc"],[520,270,"#b197fc"],[610,246,"#ffd43b"],[700,272,"#ff8fab"],[790,252,"#69db7c"]].map(([e,t,n])=>Hi(+e,+t,String(n),1.05)).join("")}
  ${[[110,304,"#ffd43b"],[230,292,"#ff8fab"],[360,308,"#b197fc"],[490,294,"#74c0fc"],[620,306,"#ff8fab"],[750,296,"#ffd43b"]].map(([e,t,n])=>Hi(+e,+t,String(n),.9)).join("")}
</svg>`,Qp=`<svg viewBox="0 0 200 170"><ellipse class="parkLawn" cx="100" cy="100" rx="94" ry="62" fill="#7fd68a" ${ie()}/>
  <ellipse cx="62" cy="120" rx="30" ry="14" fill="#8ecae6" ${ie(3)}/>
  <path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" stroke="#ff6b6b" stroke-width="7" stroke-linecap="round"/><path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" ${ie(2)}/>
  <path d="M112 62 V100 M134 62 V100" ${ie(2.5)}/><rect x="104" y="98" width="16" height="7" rx="3" fill="#ffd43b" ${ie(2.5)}/><rect x="126" y="98" width="16" height="7" rx="3" fill="#74c0fc" ${ie(2.5)}/>
  ${f0(40,66,1)}
  <path d="M150 128 L176 88 H186 L162 132 Z" fill="#b197fc" ${ie(3)}/><path d="M178 88 V132" ${ie(4)}/>
</svg>`,Np=`<svg viewBox="0 0 220 180"><ellipse class="ranchGrass" cx="110" cy="132" rx="104" ry="44" fill="#a6e3a0" ${ie()}/>
  ${fc.map((e,t)=>`<path d="M${20+t*7} 120 A${90-t*7} ${84-t*7} 0 0 1 ${200-t*7} 120" fill="none" stroke="${e}" stroke-width="7"/>`).join("")}
  <path d="M60 140 V82 L80 58 H140 L160 82 V140 Z" fill="#ef5b5b" ${ie(4)}/>
  <path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${sa}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  ${fc.map((e,t)=>`<path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${e}" stroke-width="1.3" transform="translate(0 ${-3+t*1.2})"/>`).join("")}
  <rect x="88" y="100" width="44" height="40" rx="3" fill="#d94848" ${ie(3)}/><path d="M88 100 L132 140 M132 100 L88 140" stroke="#fff6e6" stroke-width="3"/>
  <rect x="94" y="70" width="32" height="18" rx="4" fill="#fff6e6" ${ie(3)}/>
  <path d="M10 150 H52 M168 150 H212 M14 140 V158 M30 140 V158 M46 140 V158 M174 140 V158 M190 140 V158 M206 140 V158" stroke="#fff6e6" stroke-width="5" stroke-linecap="round"/><path d="M10 150 H52 M168 150 H212" ${ie(1.5)}/>
  <g transform="translate(178 122) scale(.42)"><ellipse cx="0" cy="0" rx="34" ry="18" fill="#fff" ${ie(5)}/><path d="M24 -8 L40 -34 L54 -26 L36 2 Z" fill="#fff" ${ie(5)}/>${fc.slice(0,4).map((e,t)=>`<path d="M38 ${-34+t*5} q-14 4 -20 14" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round"/>`).join("")}<path d="M-20 14 V34 M20 14 V34" ${ie(6)}/></g>
</svg>`,qp=`<svg viewBox="0 0 190 156">
  <ellipse cx="95" cy="118" rx="88" ry="32" fill="#ffd0e6" ${ie()}/>
  <path d="M28 108 V62 L95 28 L162 62 V108 Z" fill="#fff0f6" ${ie(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="#ff6b9a" ${ie(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="none" stroke="#ffd43b" stroke-width="3" stroke-dasharray="6 5"/>
  <rect x="78" y="78" width="34" height="30" rx="4" fill="#ff8ec8" ${ie(3)}/>
  <path d="M95 86 C90 80 82 82 86 90 C90 96 95 100 95 100 C95 100 100 96 104 90 C108 82 100 80 95 86 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  <rect x="42" y="74" width="22" height="16" rx="3" fill="#66d9e8" ${ie(2)}/><rect x="126" y="74" width="22" height="16" rx="3" fill="#d0bfff" ${ie(2)}/>
  ${[36,52,68,84,100,116,132,148].map((e,t)=>`<circle class="clubBulb" cx="${e}" cy="58" r="3.2" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" ${ie(1.4)}/>`).join("")}
  <circle cx="154" cy="48" r="3" fill="#fff" opacity=".9"/><circle cx="40" cy="44" r="2.4" fill="#fff" opacity=".85"/>
</svg>`,cf=`<svg viewBox="0 0 48 48"><path d="M6 12 L17 8 L31 13 L42 9 V36 L31 40 L17 35 L6 39 Z" fill="#fff3b0" ${ie(3)}/><path d="M17 8 V35 M31 13 V40" ${ie(2.5)}/><path d="M9 30 Q16 22 22 27 T38 18" fill="none" stroke="#ff8fab" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="36" cy="18" r="4" fill="#ff6b6b" ${ie(2)}/></svg>`,df=e=>e.indexOf("data-chibi")>=0?e.replace('viewBox="0 0 200 320"','viewBox="24 0 152 168"'):e.replace('viewBox="0 0 100 160"','viewBox="14 2 72 74"'),p0=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),yy={piano:"keys",keyboard:"keys",stove:"stove","yard-swing":"swing","cc-macrame-swing":"swing","little-slide":"slide",aquarium:"water","cc-cottage-aquarium":"water",fish:"water","pink-fountain":"water","lily-pond":"water",birdbath:"water","doll-house":"dollhouse"};function ff(e){return yy[p0(e)]??null}const wy=e=>p0(e)==="rubber-ducky",Fs={play:110,listen:260,stir:140,swing:70,slide:90,look:200,kneel:120},Fp=9e3;function by(e,t,n,s,o={}){const i=ff(e);if(!i)return null;switch(i){case"keys":return o.keysPlaying?.has(t)?!s&&n<=Fs.play?{kind:"play",d:n}:n<=Fs.listen?{kind:"listen",d:n+40}:null:null;case"stove":return!s&&o.opened?.has(t)&&n<=Fs.stir?{kind:"stir",d:n}:null;case"swing":return!s&&n<=Fs.swing?{kind:"swing",d:n}:null;case"slide":return!s&&n<=Fs.slide?{kind:"slide",d:n}:null;case"water":return n<=Fs.look?{kind:"look",d:n+20}:null;case"dollhouse":return!s&&n<=Fs.kneel?{kind:"kneel",d:n}:null}}const bl=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),vy={"cute-speaker":"stereo","cc-record-player":"stereo","retro-radio":"stereo","music-box":"musicbox",tv:"tv",fireplace:"fire","brick-fireplace":"fire","wc-woodstove":"fire",woodstove:"fire","wc-stone-hearth":"fire","fire-pit":"fire"};function gs(e){return vy[bl(e)]??null}function h0(e){return gs(e)!==null}function pf(e){const t=bl(e);return t==="ball"||t==="beach-ball"||t==="balloon"?"bounce":t==="teddy"||/plush/.test(t)?"hug":null}const jn=e=>/(^|-)tub$/.test(bl(e)),ni=e=>/fridge$/.test(bl(e)),ky={stereo:220,musicbox:160,tv:280,fire:230},nd=70,u0=130,_y=.4,$y=6,jp=2e4,Be=900,xy=["stereo","tv","fire","musicbox"];function My(e,t){let n=2166136261;const s=e+"|"+t;for(let o=0;o<s.length;o++)n^=s.charCodeAt(o),n=Math.imul(n,16777619);return(n>>>0)%1e3/1e3}const hc=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5);function Ly(e,t,n={}){const s=new Map,o=[...t].sort((r,l)=>r.id<l.id?-1:r.id>l.id?1:0),i=e.filter(r=>r.on&&gs(r.kind)&&!(gs(r.kind)==="musicbox"&&n.musicBoxDone?.has(r.id))),a=[];for(const r of o){if(r.lying)continue;let l=null;for(const c of xy){for(const d of i){if(gs(d.kind)!==c)continue;const f=hc(r,d);if(f>ky[c]||r.seated&&c!=="tv"&&c!=="musicbox")continue;const h=c==="stereo"?"dance":c==="tv"?"watch":c==="fire"?"warm":"sway";(!l||f<l.d||f===l.d&&d.id<l.it.id)&&(l={c:r,it:d,d:f,kind:h})}if(l)break}if(!l)for(const c of e){const d=by(c.kind,c.id,hc(r,c),!!r.seated,{...n,opened:n.opened??n.fridgesOpen});if(d&&(!l||d.d<l.d||d.d===l.d&&c.id<l.it.id)&&(l={c:r,it:c,d:d.d,kind:d.kind}),r.seated)continue;const f=pf(c.kind);let h=null,u=hc(r,c);f&&u<=nd?h=f:ni(c.kind)&&n.fridgesOpen?.has(c.id)&&u<=u0?h="nibble":jn(c.kind)&&Math.abs(r.x-c.x)<=(c.w??240)*_y&&Math.abs(r.y-c.y)<=40&&(h="bathe"),h&&(!l||u<l.d||u===l.d&&c.id<l.it.id)&&(l={c:r,it:c,d:u,kind:h})}l&&a.push(l)}a.sort((r,l)=>r.d-l.d||(r.c.id<l.c.id?-1:1));for(const r of a.slice(0,$y))s.set(r.c.id,{kind:r.kind,item:r.it.id,phase:My(r.it.id,r.c.id),face:r.it.x<r.c.x?-1:1});return s}function ro(e,t,n){return-((n+e*t)%t)}const kt=e=>"preview:"+e,Ey=400,vl=["#ffe0c4","#f6d2b5","#f1c27d","#e0ac69","#c9956c","#c68642","#a86b3c","#8d5524","#5c3a1e","#3d2914"],kl=["#2b1d16","#5b3a29","#a0522d","#f4d58d","#ff8fab","#8ecae6","#b388d6","#ff9f43","#1d1416","#c8602a","#7a4b32","#f7f1e8"],hf=["#5a321c","#3f9b52","#3d7ec4","#c48a3a","#7b4fb8"],Ht=["#ff7aa8","#ffd166","#5aa9e6","#80ed99","#c9a0dc","#ff9f68","#ffffff","#5a3d5c","#ff8f7a","#7ec8c3","#f7f3ee","#f4a3c8","#6b8e4e","#e8d5b5","#ef6b6b","#3d4a6b"],_l=["short","bob","buns","topbun","pixie","long","wavy","puffs","afro","curlybob","coily","boxbraids","braids","sidebraid","crown","pony","sidepony","pigtails","lowbun","locs","halfup","bangs","sidebangs","wavybob"],$l=["classic","stripes","hoodie","sweater","tank","puff","ruffle","button","jersey","cardigan","bib","raincoat"],xl=["pants","jeans","shorts","skirt","tutu","leggings","overalls","joggers"],Ml=["","twirl","sundress","party","pinafore","jumper","ballet","nightgown","raindress"],Ll=["classic","sneakers","lightup","boots","rainboots","sandals","maryjanes","slippers"],El=["round","big","sleepy","sparkle","soft","bright"],Vo=["glasses","square","sunnies","bow","bigbow","headband","flower","cap","beanie","sunhat","catears","earmuffs"],Sy=new Set(_l),Ty=new Set($l),Py=new Set(xl),Ay=new Set(Ml),Ry=new Set(Ll),Cy=new Set(El),Iy=new Set(Vo),Oy=new Set(["short","pixie","coily","afro","bangs"]),By=new Set(["buns","puffs"]),zy=new Set(["topbun","lowbun"]),Dy={hair:"buns",hairC:"#5b3a29",skin:"#f1c27d",eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"pants",bottomC:"#5aa9e6",dress:"",dressC:"#ff7aa8",shoes:"classic",shoesC:"#5a3d5c",accC:"#ffd166"};function Hy(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Po(e,t){return typeof e=="string"&&t.has(e)}function An(e,t){if(typeof e!="string")return null;const n=e.trim().toLowerCase();for(let s=0;s<t.length;s++)if(t[s]===n)return t[s];return null}function xa(e){if(!Hy(e))return null;let t=0;try{t=JSON.stringify(e).length}catch{return null}if(t>Ey)return null;const n={v:1};Po(e.hair,Sy)&&(n.hair=e.hair);const s=An(e.hairC,kl);s&&(n.hairC=s);const o=An(e.skin,vl);o&&(n.skin=o),Po(e.eyes,Cy)&&(n.eyes=e.eyes);const i=An(e.eyeC,hf);i&&(n.eyeC=i),(e.freckles===!0||e.freckles===!1)&&(n.freckles=e.freckles),(e.blush===!0||e.blush===!1)&&(n.blush=e.blush),Po(e.top,Ty)&&(n.top=e.top);const a=An(e.topC,Ht);a&&(n.topC=a),Po(e.bottom,Py)&&(n.bottom=e.bottom);const r=An(e.bottomC,Ht);r&&(n.bottomC=r),Po(e.dress,Ay)&&(n.dress=e.dress);const l=An(e.dressC,Ht);l&&(n.dressC=l),Po(e.shoes,Ry)&&(n.shoes=e.shoes);const c=An(e.shoesC,Ht);if(c&&(n.shoesC=c),Array.isArray(e.acc)){const f=[];for(let h=0;h<e.acc.length&&f.length<2;h++){const u=e.acc[h];typeof u=="string"&&Iy.has(u)&&f.indexOf(u)<0&&f.push(u)}n.acc=f}const d=An(e.accC,Ht);return d&&(n.accC=d),n}function Os(e){const t=Dy,n=e??{};return{v:1,hair:n.hair??t.hair,hairC:n.hairC??t.hairC,skin:n.skin??t.skin,eyes:n.eyes??t.eyes,eyeC:n.eyeC??t.eyeC,freckles:n.freckles??t.freckles,blush:n.blush??t.blush,top:n.top??t.top,topC:n.topC??t.topC,bottom:n.bottom??t.bottom,bottomC:n.bottomC??t.bottomC,dress:n.dress??t.dress,dressC:n.dressC??t.dressC,shoes:n.shoes??t.shoes,shoesC:n.shoesC??t.shoesC,acc:n.acc?n.acc.slice():[],accC:n.accC??t.accC}}function Zp(e){const t=/^#([0-9a-f]{6})$/i.exec(e.trim());if(!t){const s=/^#([0-9a-f]{3})$/i.exec(e.trim());return s?[parseInt(s[1][0]+s[1][0],16),parseInt(s[1][1]+s[1][1],16),parseInt(s[1][2]+s[1][2],16)]:null}const n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function Qa(e,t){const n=An(e,t);if(n)return n;const s=Zp(e);if(!s)return t[0];let o=t[0],i=1e12;for(let a=0;a<t.length;a++){const r=Zp(t[a]);if(!r)continue;const l=(s[0]-r[0])*(s[0]-r[0])+(s[1]-r[1])*(s[1]-r[1])+(s[2]-r[2])*(s[2]-r[2]);l<i&&(i=l,o=t[a])}return o}function Wy(e){return Oy.has(e)?0:By.has(e)?2:zy.has(e)?3:1}function Vy(e){for(let t=0;t<e.length;t++){const n=e[t];if(n==="glasses"||n==="square"||n==="sunnies")return 2}for(let t=0;t<e.length;t++){const n=e[t];if(n==="cap"||n==="beanie"||n==="sunhat")return 3}for(let t=0;t<e.length;t++){const n=e[t];if(n==="bow"||n==="bigbow")return 1}return 0}function Sl(e){const t=Os(e),n=t.dress!=="";return{skin:t.skin,hair:t.hairC,hairStyle:Wy(t.hair),shirt:n?t.dressC:t.topC,pants:n?t.dressC:t.bottomC,acc:Vy(t.acc)}}const Uy=["short","bob","buns","topbun"];function oa(e){const t=typeof e.hairStyle=="number"&&e.hairStyle>=0&&e.hairStyle<=3?Math.round(e.hairStyle):0,n=e.acc===1?["bow"]:e.acc===2?["glasses"]:e.acc===3?["cap"]:[],s=Qa(String(e.shirt??""),Ht);return{v:1,hair:Uy[t],hairC:Qa(String(e.hair??""),kl),skin:Qa(String(e.skin??""),vl),eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:s,bottom:"pants",bottomC:Qa(String(e.pants??""),Ht),dress:"",dressC:s,shoes:"classic",shoesC:"#5a3d5c",acc:n,accC:"#ffd166"}}function ia(e){const t=xa(e)??{},n=Os(t);return{...Sl(n),look2:n}}const Qy=new Set(["glasses","square","sunnies"]),Ny=new Set(["bow","bigbow","flower","headband"]),qy=new Set(["cap","beanie","sunhat","catears","earmuffs"]);function Br(e){return Qy.has(e)?"face":Ny.has(e)?"bow":qy.has(e)?"hat":"other"}function ot(e,t){return t[Math.floor(e()*t.length)]}function Tl(e=Math.random){const t=e()<.38,n=e();let s=[];if(n<.22)s=[];else if(n<.68)s=[ot(e,Vo)];else{const o=ot(e,Vo),i=Vo.filter(a=>Br(a)!==Br(o));s=[o,ot(e,i)]}return{v:1,hair:ot(e,_l),hairC:ot(e,kl),skin:ot(e,vl),eyes:ot(e,El),eyeC:ot(e,hf),freckles:e()<.4,blush:e()<.85,top:ot(e,$l),topC:ot(e,Ht),bottom:ot(e,xl),bottomC:ot(e,Ht),dress:t?ot(e,Ml.filter(o=>o!=="")):"",dressC:ot(e,Ht),shoes:ot(e,Ll),shoesC:ot(e,Ht),acc:s,accC:ot(e,Ht)}}function Fy(e,t=Math.random){const n=e.characters[0];if(!n)return e;const s=Tl(t),o=Sl(s),i=e.characters.slice();return i[0]={...n,...o,look2:s},{...e,characters:i}}function g0(e){const t=e.characters[0];if(!t||t.look2)return e;const n=e.characters.slice();return n[0]={...t,look2:{...oa(t),eyes:"sparkle"}},{...e,characters:n}}function jy(e){const t=[e.skin,e.hair,e.hairStyle,e.shirt,e.pants,e.acc,e.look2?JSON.stringify(e.look2):""].join("|");return e.costume?t+"|cos:"+e.costume:t}const Gp={m:10,d:24},Yp={m:11,d:2},zr={yellow:"#ffd166",denim:"#4f7fb8",rose:"#f28fb0",mint:"#7fd8b8"},Zy=["helper-yellow","helper-denim","helper-rose","helper-mint","witch","cat","ghost","skeleton","bat"],Gy=new Set(Zy),Kp={helper:"Yellow Helper",witch:"Witch hat",cat:"Black cat",ghost:"Ghost sheet",skeleton:"Bone PJs",bat:"Bat cape"};function Eo(e){return typeof e=="string"&&Gy.has(e)?e:null}function Yy(e=new Date){const t=e.getMonth()+1,n=e.getDate();return t===Gp.m?n>=Gp.d:t===Yp.m?n<=Yp.d:!1}function Ky(){const e=typeof globalThis<"u"?globalThis:{};if(typeof e.__costumeDate=="string"){const t=new Date(e.__costumeDate+"T12:00:00");if(!isNaN(+t))return t}return new Date}function Pl(){return Yy(Ky())}function Xy(e){if(!e||e.costume==null)return null;const t=Eo(e.costume);return t&&Pl()?t:null}const Ma=3600,fo=470,Zn=590,so=["goat","sheep","piglet","chicks","bunny","cow"],Jy=[1085,1215,1345,1470,1600,1735],ew=520,uf=1900,gf=[600,800,1e3,1200,1400,1600],sd=435,tw=["Chestnut","Snowy","Midnight","Sunny","Rainbow"],m0=[2470,2600,2730,2860,2990],po=540,nw=["pet","carrot","apple","hay"],od=6,sw=e=>3175+e*68,ow=8e4,id=20,iw=1500,y0=["egg","carrot","flower"],aw={egg:"ranch-egg",carrot:"ranch-carrot",flower:"ranch-bouquet"},rw=()=>({egg:0,carrot:0,flower:0}),lw=(e,t,n)=>Number.isInteger(e)&&e>=t&&e<=n?e:null;function mf(e){const t=rw();if(!e||typeof e!="object")return t;for(const n of y0)t[n]=lw(e[n],0,id)??0;return t}function yf(e){const t=Array(od).fill(null);if(Array.isArray(e))for(let n=0;n<od;n++){const s=e[n];if(!s||s.seed!=="carrot"&&s.seed!=="flower")continue;const o=Number(s.at),i=Number(s.wet);Number.isFinite(o)&&Number.isFinite(i)&&(t[n]={seed:s.seed,at:o,wet:i})}return t}function Al(e,t){if(!e||!e.wet)return 0;const n=(t-e.wet)/ow;return n>=1?3:n>=.4?2:1}function ad(e,t,n,s,o=0){const i=e.slice(),a={...t};switch(n.op){case"plant":return i[n.i]?"taken":(i[n.i]={seed:n.seed,at:s,wet:0},{plots:i,basket:a,garden:!0});case"water":{const r=i[n.i];return r?r.wet?"wet":(i[n.i]={...r,wet:s},{plots:i,basket:a,garden:!0}):"empty"}case"pick":{const r=i[n.i];return r?Al(r,s)<3?"notReady":a[r.seed]>=id?"full":(a[r.seed]++,i[n.i]=null,{plots:i,basket:a,garden:!0,got:r.seed}):"empty"}case"egg":return s-o<iw?"slow":a.egg>=id?"full":(a.egg++,{plots:i,basket:a,garden:!1,got:"egg"});case"use":return a.carrot<=0?"none":(a.carrot--,{plots:i,basket:a,garden:!1});case"take":return a[n.kind]<=0?"none":(a[n.kind]--,{plots:i,basket:a,garden:!1})}}const ds=80,cw=30*24*60*60*1e3,dw=5,w0=6,ns=["#ffd6e8","#fff3b0","#d8f5e8","#e6d6ff","#d6efff"],fw=/^m[A-Za-z0-9]{4,40}$/,pw=/^[A-Za-z0-9:_\/.-]{1,80}$/;function uc(e,t=Date.now()){const n=Math.floor((t-e)/864e5);return n<=0?"today":n===1?"yesterday":n<7?"a few days ago":"a while ago"}function hw(e,t=Date.now()){const n=e?.letters;if(!Array.isArray(n))return null;const s=[];for(const i of n.slice(-30*2)){if(!i||typeof i!="object")continue;const a=i;if(typeof a.id!="string"||!fw.test(a.id)||typeof a.from!="string")continue;const r=a.from.normalize("NFC").replace(/\s+/g," ").trim();if(!r||r.length>24||typeof a.fromPid!="string"||!pw.test(a.fromPid)||typeof a.text!="string"||a.text.length>ds||typeof a.at!="number"||!Number.isFinite(a.at)||t-a.at>cw||a.at>t+864e5||!Number.isInteger(a.color)||a.color<0||a.color>=dw||!Number.isInteger(a.sticker)||a.sticker<0||a.sticker>=w0)continue;const l=a.text.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(l.length>ds)continue;const c={id:a.id,from:r,fromPid:a.fromPid,text:l,color:a.color,sticker:a.sticker,at:a.at};a.read===!0&&(c.read=!0),s.push(c)}const o=s.slice(-30);return o.length?{letters:o}:null}function wf(e){return e?.letters.filter(t=>!t.read&&t.text).length??0}const uw=/^[A-Za-z0-9:_\/.-]{1,80}$/,b0=/crib|bassinet|high-?chair|cat-bed|pet-bed|dog-bed|kennel|tulip|flower|toadstool|mobile/,gc={bed:{head:{x:.24,y:.42},pillow:{x:.1,y:.27,w:.22,h:.18},mattress:{x:.36,y:.34,w:.36,h:.16},clip:"starter"},"wooden-bed":{head:{x:.22,y:.53},pillow:{x:.12,y:.36,w:.24,h:.18},mattress:{x:.38,y:.46,w:.32,h:.16},clip:"wooden"},"checker-bed":{head:{x:.16,y:.45},pillow:{x:.08,y:.26,w:.22,h:.22},mattress:{x:.38,y:.4,w:.32,h:.16},clip:"checker"},"bunk-bed":{head:{x:.11,y:.62},pillow:{x:.05,y:.52,w:.18,h:.14},mattress:{x:.22,y:.56,w:.36,h:.14},clip:"bunk"},"canopy-bed":{head:{x:.38,y:.52},pillow:{x:.28,y:.46,w:.24,h:.14},mattress:{x:.48,y:.48,w:.28,h:.16},clip:"canopy"},"cc-heart-bed":{head:{x:.22,y:.67},pillow:{x:.12,y:.58,w:.26,h:.16},mattress:{x:.36,y:.64,w:.36,h:.16},clip:"heart"},"cc-canopy-daybed":{head:{x:.37,y:.58},pillow:{x:.26,y:.5,w:.26,h:.16},mattress:{x:.48,y:.54,w:.3,h:.16},clip:"daybed"},"wc-plaid-bed":{head:{x:.24,y:.26},pillow:{x:.08,y:.14,w:.3,h:.2},mattress:{x:.36,y:.18,w:.3,h:.18},clip:"wooden"}},gw=["bed","pack:wooden-bed","pack:checker-bed","pack:bunk-bed","pack:canopy-bed","pack:cc-heart-bed","pack:cc-canopy-daybed","pack:wc-plaid-bed"];function v0(e){return e==="bed"||/bunk/.test(e)||/daybed/.test(e)?!0:/(^|[-_:])bed$/.test(e)}function mw(){return gw.slice()}function Rl(e){const t=String(e||"").toLowerCase();if(!t||b0.test(t)||!v0(t))return null;const n=t.replace(/^pack:/,"");return gc[n]||gc[t]||gc.bed}const yw={head:{x:55.0733,y:59.7445},chest:{x:60,y:114},hip:{x:60,y:138},classic:{x:60,y:52.8}},Xp=48,Jp=138.24;function k0(e,t){const n=-90*Math.PI/180,s=Math.cos(n),o=Math.sin(n),i=e-Xp,a=t-Jp,r=Xp+s*i-o*a,l=Jp+o*i+s*a;return{x:r-60,y:l-192}}function Dr(e,t){const n=yw[e],s=k0(n.x,n.y);return{x:t?-s.x:s.x,y:s.y}}const eh=120,mc=192,ww=.26;function bw(e,t,n,s,o=1){const i=o>0?o:1;if(n==="lie"&&s){const r=-t*i+210.24,l=-e*i+186.24;return{x:-eh*i/2+r,y:-mc*i+l}}if(n==="lie"){const r=k0(e,t);return{x:r.x*i,y:r.y*i}}const a=n==="sit"?ww*mc*i:0;return{x:(e-eh/2)*i,y:(t-mc)*i+a}}function vw(e,t,n,s,o){const i=Rl(e);if(!i||t<1||n<1)return null;const a=Dr("head",!1),r=(i.head.x-.5)*t-a.x,l=(i.head.y-1)*n-a.y,c=Dr(s,o);return{x:.5+((o?-r:r)+c.x)/t,y:1+(l+c.y)/n}}function Jn(e){const t=String(e||"").toLowerCase();return!t||b0.test(t)?null:v0(t)?{pose:"lie",spots:[{dx:0,dy:0}]}:/sofa|couch|loveseat/.test(t)?{pose:"sit",spots:[{dx:-.18,dy:-.33},{dx:.18,dy:-.33}]}:/armchair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/bench|window-seat/.test(t)?{pose:"sit",spots:[{dx:-.22,dy:-.3},{dx:.22,dy:-.3}]}:/ottoman/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/stool|rocker/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.38}]}:/chair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.48}]}:null}function _0(e){const t=Jn(e.kind);if(!t)return[];const n=e.scale||1,s=t.pose==="lie"?Rl(e.kind):null;if(s){const o=e.w*n,i=e.h*n,a=Dr("head",!1),r=(s.head.x-.5)*o-a.x,l=(s.head.y-1)*i-a.y;return[{x:e.x+(e.flip?-r:r),y:e.footY+l,pose:"lie",n:0}]}return t.spots.map((o,i)=>{const a=o.dx*e.w*n,r=o.dy*e.h*n,l=i===1?1:0;return{x:e.x+(e.flip?-a:a),y:e.footY+r,pose:t.pose,n:l}})}function Uo(e){const t=(r,l)=>({x:r,y:l,seat:null,toast:null,moved:!0});if(e.mode!=="play")return t(e.releaseX,e.releaseY);const n=e.piece;if(!n)return e.via==="drag"?t(e.releaseX,e.releaseY):{x:e.releaseX,y:e.releaseY,seat:null,toast:null,moved:!1};if(e.via==="tap"&&e.alreadyOn===n.id)return t(n.x,n.footY);const s=new Set(e.occupied.filter(r=>r.item===n.id).map(r=>r.n)),o=_0(n).filter(r=>!s.has(r.n));if(!o.length)return e.via==="tap"?{x:e.releaseX,y:e.releaseY,seat:null,toast:"Someone is already there!",moved:!1}:t(e.releaseX,e.releaseY);let i=o[0],a=1/0;for(const r of o){const l=(r.x-e.releaseX)**2+(r.y-e.releaseY)**2;l<a&&(i=r,a=l)}return{x:i.x,y:i.y,seat:{item:n.id,pose:i.pose,n:i.n},toast:null,moved:!0}}const kw={sofa:260,armchair:150,bed:300,chair:100,stool:90,rocker:190,"yard-bench":140,"bar-stool":52.8,"bunk-bed":294,"canopy-bed":294,"cc-bubble-chair":142,"cc-canopy-daybed":276,"cc-dryer-chair":164,"cc-heart-bed":236,"cc-mani-chair":188,"cc-mushroom-stool":112,"cc-scallop-loveseat":248,"checker-bed":196,"cloud-sofa":212,"comfy-armchair":161.7,"cream-sofa":234.6,"egg-chair":126,"fancy-sofa":234.6,"gaming-chair":101.4,"lattice-bench":147,"puffy-stool":46.9,"rocking-chair":137.2,"salon-chair":111.8,"swivel-stool":46.2,"waiting-bench":166.6,"wash-chair":186.2,"wood-armchair":127.4,"wood-stool":46.2,"wooden-bed":235.2};function xn(e){const t=String(e||"").toLowerCase().replace(/^pack:/,"");return kw[t]??320}const si=540;function ho(e,t,n,s=2400){const o=Math.max(0,t)/2+70,i=40;let a=n<e-8?-1:1,r=e+a*o;return(r<i||r>s-i)&&(a=-a,r=e+a*o),r<i&&(r=i),r>s-i&&(r=s-i),{x:r,y:si}}function bf(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.item!="string"||!uw.test(t.item)||t.pose!=="sit"&&t.pose!=="lie"||t.n!==0&&t.n!==1?null:{item:t.item,pose:t.pose,n:t.n}}function rd(e,t){if(!e)return null;const n=bf(e);return!n||!t?.some(s=>s&&s.id===n.item)?null:n}const lo=["sleepy","hungry","playful","clean"],_w=1,$w=4*6e4,xw=2*6e4,Mw=75e3;function Lw(e,t){return e.characters.some(n=>_f(n))?$w:t===0?Mw:xw}const vf=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),Ew=/^(cake|juice|cupcake|cookie|apple|pie|pizza|donut|sandwich|milk|bread|fruit|.*-cake|.*-pie|.*cookies?)$/,fn=e=>Ew.test(vf(e)),Zo=e=>!!pf(e)||vf(e)==="rubber-ducky";function kf(e){if(!e||typeof e!="object")return null;const t={};for(const n of lo){const s=e[n];if(typeof s!="number"||!Number.isFinite(s))continue;const o=Math.max(0,Math.min(3,Math.round(s)));o<3&&(t[n]=o)}return Object.keys(t).length?t:null}function uo(e,t){const n=e?.needs?.[t];return typeof n=="number"?Math.max(0,Math.min(3,n)):3}function _f(e){let t=null,n=_w+1;for(const s of lo){const o=uo(e,s);o<n&&(n=o,t=s)}return t}function $0(e,t){if(t)return{...e,needs:t};if(!("needs"in e))return e;const{needs:n,...s}=e;return s}const yc=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5),th=(e,t)=>!!(e.held.left&&t(e.held.left.kind)||e.held.right&&t(e.held.right.kind)),Sw=e=>xn(e.kind)*(e.scale||1)*(e.size||1);function $f(e,t,n){const s=e.rooms[t.room]?.items??[];switch(n){case"sleepy":return t.seat?.pose==="lie"&&s.some(o=>o.id===t.seat.item);case"clean":return s.some(o=>jn(o.kind)&&Math.abs(t.x-o.x)<=Math.max(60,Sw(o)*.45)&&Math.abs(t.y-o.y)<=60);case"hungry":return th(t,fn)||s.some(o=>ni(o.kind)&&yc(t,o)<=u0+30||fn(o.kind)&&yc(t,o)<=nd+40);case"playful":return th(t,Zo)||s.some(o=>Zo(o.kind)&&yc(t,o)<=nd+40)}}function Tw(e,t){return lo.filter(n=>uo(t,n)<3&&$f(e,t,n))}function Pw(e,t,n){const s=e.characters.find(a=>a.id===t);if(!s||uo(s,n)>=3||!$f(e,s,n))return e;const o={...s.needs??{}};delete o[n];const i=$0(s,kf(o));return{...e,characters:e.characters.map(a=>a.id===t?i:a)}}function Aw(e,t,n){const s=e.characters.find(a=>a.id===t),o=uo(s,n);if(!s||o<=0)return e;const i=$0(s,kf({...s.needs??{},[n]:o-1}));return{...e,characters:e.characters.map(a=>a.id===t?i:a)}}function Rw(e,t){const n=Object.values(e.rooms).flatMap(c=>c?.items??[]),s={sleepy:n.some(c=>/bed$|^bed|sofa|couch/.test(vf(c.kind))),hungry:n.some(c=>ni(c.kind)||fn(c.kind)),playful:n.some(c=>Zo(c.kind)),clean:n.some(c=>jn(c.kind))},o=c=>c[(t%c.length+c.length)%c.length],i=[];for(const c of[...e.characters].sort((d,f)=>d.id<f.id?-1:1)){const d=!!_f(c);for(const f of lo)if(s[f]){const h=uo(c,f);h>0&&i.push({id:c.id,need:f,l:h,wish:d})}}if(!i.length)return null;const a=i.filter(c=>!c.wish);if(a.length){const c=a.filter(f=>f.l<3),d=c.length?o(c):o(a);return{id:d.id,need:d.need}}const r=Math.max(...i.map(c=>c.l)),l=o(i.filter(c=>c.l===r));return{id:l.id,need:l.need}}const ld=45e3,Cw=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],nh=/^[A-Za-z0-9:_\/.-]{1,80}$/,Iw=/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u,sh=["feed","burp","change","rock"];function go(e){const t=String(e||"").toLowerCase();return!t||/mobile/.test(t)?null:/bassinet/.test(t)?"bassinet":t==="crib"||/(^|[-_:])crib$/.test(t)?"crib":null}function Ow(e){return e===2?"Cozy":"Happy"}function Bw(e){return e+1}function zw(e){return Cw.indexOf(e)>=0}function Dw(e){const t=typeof e=="number"&&Number.isFinite(e)?Math.round(e):2;return t<=2?2:t>=4?4:3}function x0(e){if(!e||typeof e!="object")return;const t=e,n={};let s=!1;for(let o=0;o<sh.length;o++){const i=sh[o],a=t[i];typeof a=="number"&&Number.isFinite(a)&&(n[i]=a,s=!0)}return s?n:void 0}function pn(e){const t={name:e.name,mood:e.mood,spot:e.spot,x:e.x,y:e.y,room:e.room,since:e.since};(e.spot==="crib"||e.spot==="bassinet")&&e.bed&&(t.bed=e.bed),e.spot==="mat"&&e.seat&&(t.seat=e.seat),e.spot==="arms"&&e.holder&&(t.holder=e.holder);const n=x0(e.at);return n&&(t.at=n),t}function xf(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Hw(e,t){if(!e||typeof e!="object")return null;const n=e,s=String(n.name??"").normalize("NFC").replace(/\s+/g," ").trim();if(!Iw.test(s)||(s.match(/\d/g)||[]).length>2)return null;let o=n.spot==="crib"||n.spot==="bassinet"||n.spot==="arms"||n.spot==="mat"?n.spot:"mat";const i=zw(n.room)?n.room:"nursery",a=typeof n.x=="number"&&Number.isFinite(n.x)?Math.max(0,Math.min(2400,n.x)):700,r=typeof n.y=="number"&&Number.isFinite(n.y)?Math.max(0,Math.min(600,n.y)):540,l=typeof n.since=="number"&&Number.isFinite(n.since)?n.since:0,c=Dw(n.mood);let d=typeof n.bed=="string"&&nh.test(n.bed)?n.bed:void 0,f=bf(n.seat)??void 0,h=typeof n.holder=="string"&&nh.test(n.holder)?n.holder:void 0;if(t){const u=t[i]?.items??[];if(o==="crib"||o==="bassinet"){let y=!1;for(let g=0;g<u.length;g++){const v=u[g];v&&v.id===d&&go(String(v.kind||""))===o&&(y=!0)}y||(o="mat",d=void 0)}if(f){let y=!1;for(let g=0;g<u.length;g++)u[g]&&u[g].id===f.item&&(y=!0);y||(f=void 0)}}return o!=="crib"&&o!=="bassinet"&&(d=void 0),o!=="mat"&&(f=void 0),o!=="arms"&&(h=void 0),o==="arms"&&!h&&(o="mat"),pn({name:s,mood:c,spot:o,bed:d,seat:f,holder:h,x:a,y:r,room:i,at:x0(n.at),since:l})}function Ww(e,t){const n=e.nursery?.items??[];for(let s=0;s<n.length;s++){const o=n[s];if(!o||!o.id||go(String(o.kind||""))!=="crib")continue;const i=typeof o.x=="number"&&Number.isFinite(o.x)?o.x:1170,a=typeof o.y=="number"&&Number.isFinite(o.y)?o.y:480;return pn({name:"Bean",mood:2,spot:"crib",bed:o.id,x:i,y:a,room:"nursery",since:t})}return pn({name:"Bean",mood:2,spot:"mat",x:700,y:540,room:"nursery",since:t})}function Vw(e,t,n){const s=Math.min(4,e.mood+1);return pn({...e,mood:s,at:{...e.at||{},[t]:n},since:n})}function Uw(e,t){if(!e.since){const i=pn({...e,since:t});return xf(i,e)?null:i}if(e.mood<=2)return null;const n=Math.floor((t-e.since)/ld);if(n<1)return null;const s=Math.min(n,e.mood-2),o=e.mood-s;return pn({...e,mood:o,since:e.since+s*ld})}function cd(e,t,n,s,o){const i=pn(t?{...e,spot:"arms",holder:t,room:n,x:s,y:o,bed:void 0,seat:void 0}:{...e,spot:"mat",room:n,x:s,y:o,bed:void 0,seat:void 0,holder:void 0});return xf(i,e)?e:i}function Qw(e,t,n,s){let o=t.spot==="crib"||t.spot==="bassinet"?t.spot:"mat",i,a;if(o==="crib"||o==="bassinet"){let l=!1;for(let c=0;c<n.length;c++){const d=n[c];d&&d.id===t.bed&&go(d.kind)===o&&(l=!0)}l&&t.bed?i=t.bed:o="mat"}if(o==="mat"&&t.seat){let l=null;for(let f=0;f<n.length;f++)n[f]&&n[f].id===t.seat.item&&(l=n[f]);const c=l?Jn(l.kind):null;let d=!1;for(let f=0;f<s.length;f++)s[f].item===t.seat.item&&s[f].n===t.seat.n&&(d=!0);l&&c&&c.pose===t.seat.pose&&!d&&(a=t.seat)}const r=pn({...e,spot:o,room:t.room,x:t.x,y:t.y,bed:i,seat:a,holder:void 0});return xf(r,e)?e:r}function Nw(e,t,n,s){const o=e.spot==="mat"&&e.seat?.item===t,i=!!n&&(e.spot==="crib"||e.spot==="bassinet")&&e.bed===t;return!o&&!i?e:pn({...e,spot:"mat",x:s?s.x:e.x,y:s?s.y:si,bed:void 0,seat:void 0,holder:void 0})}function M0(e,t){const n=t.scale||1,s=t.w*n,o=t.h*n,i=go(e);let a=i==="bassinet"?0:-.02*s;const r=i==="bassinet"?-.52*o:-.46*o;return t.flip&&(a=-a),{x:t.x+a,y:t.footY+r}}function qw(e){const t=(o,i)=>({x:o,y:i,spot:"mat",bed:null,seat:null});if(e.mode!=="play"||!e.piece)return t(e.releaseX,e.releaseY);const n=go(e.piece.kind);if(n){const o=M0(e.piece.kind,e.piece);return{x:o.x,y:o.y,spot:n,bed:e.piece.id,seat:null}}const s=Uo({mode:"play",via:"drag",releaseX:e.releaseX,releaseY:e.releaseY,piece:e.piece,occupied:e.occupied});return s.seat?{x:s.x,y:s.y,spot:"mat",bed:null,seat:s.seat}:t(e.releaseX,e.releaseY)}function Fw(e,t=2400){const s=t-40>40?t-40:40;let o=e;return o>=40||(o=40),o>s&&(o=s),{x:o,y:si}}function jw(e,t){return!e||e.spot!=="mat"||!e.seat||e.room!==t?null:{item:e.seat.item,n:e.seat.n}}const aa=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Zw=["living","bedroom","kitchen","salon","nursery","bathroom"],L0=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],At=2400,Wn=600,E0=1e3,oi=(At-E0)/2,Qn=[.75,.875,1,1.25,1.5];function Gn(e){if(typeof e!="number"||!Number.isFinite(e))return 1;let t=1,n=1/0;for(const s of Qn){const o=Math.abs(e-s);o<n&&(n=o,t=s)}return t}function Ge(e){return(e?.scale||1)*Gn(e?.size)}function S0(e,t){const n=Gn(t);if(n===1){if(e.size==null)return e;const{size:s,...o}=e;return o}return e.size===n?e:{...e,size:n}}const ii=8,Gw=4,Yw=5,Kw=/^[A-Za-z0-9:_\/.-]{1,80}$/;function Mf(e){const t=e?.dogKennel;if(!t||typeof t!="object"||typeof t.item!="string"||!Kw.test(t.item))return null;const n=e.rooms;if(!n)return null;for(const s of Object.values(n))if(s?.items?.some(o=>o&&o.id===t.item&&o.kind==="kennel"))return{item:t.item};return null}function Xw(e,t){return Mf({dogKennel:{item:t},rooms:e.rooms})!==null}const J=(e,t,n,s,o=1)=>({id:e+"-"+s,kind:e,x:t+oi,y:n,flip:!1,z:s,scale:o});function Nn(){return{version:3,houseId:"local",currentRoom:"living",rooms:{living:{wallpaper:"#ffd6e0",floor:"#e8b98a",pattern:1,items:[J("sofa",470,470,1),J("lamp",230,470,2),J("plant",760,480,3),J("rug",480,530,0),J("picture",470,200,4),J("cat",600,520,5),J("window",-350,230,6),J("armchair",-300,480,7),J("bookshelf",1250,470,8),J("tree",1500,480,9),J("clock",1100,170,10)]},bedroom:{wallpaper:"#d9ccff",floor:"#f2d0a4",pattern:2,items:[J("bed",450,480,1),J("window",750,230,2),J("teddy",330,500,3),J("stars",300,180,4),J("tub",1350,480,5),J("lamp",-250,470,6),J("flowers",-150,500,7)]},salon:{wallpaper:"#ffe0f0",floor:"#f6d6ff",pattern:2,items:[J("rug",470,540,0),J("mirror",470,150,1),J("vanity",470,480,2),J("perfume",400,345,3),J("polish",450,345,4),J("hairdryer",560,340,5),J("stool",470,545,6),J("lamp",200,470,7),J("flowers",780,480,8),J("picture",780,200,9),J("chair",-250,490,10),J("mirror",-250,170,11),J("plant",1300,480,12)]},kitchen:{wallpaper:"#cdf3dc",floor:"#ffe7a8",pattern:3,items:[J("fridge",200,470,1),J("table",520,500,2),J("cake",520,395,3),J("stove",800,470,4),J("chair",380,500,5),J("chair",660,500,6),J("juice",470,395,7),J("plant",-300,480,8),J("fish",1300,480,9)]},nursery:{wallpaper:"#d6f3ff",floor:"#f3ddc4",pattern:1,items:[J("cloud-rug",480,545,0),J("crib",470,480,1),J("crib-mobile",470,155,2),J("rocker",780,490,3)]},bathroom:{wallpaper:"#d4f4fb",floor:"#f7e7d4",pattern:3,items:[J("bath-mat",180,560,0),J("shower-curtain",-40,520,1),J("soaking-tub",160,500,2),J("rubber-ducky",300,545,3),J("bath-toilet",480,500,4),J("sink-vanity",700,500,5),J("bath-mirror",700,175,6),J("towel-bar",940,200,7)]},backyard:{wallpaper:"#c5ecff",floor:"#b6e3a8",pattern:0,items:[{id:"yard-bench-1",kind:"yard-bench",x:1122,y:372,flip:!1,z:1,scale:1},{id:"tulip-bed-2",kind:"tulip-bed",x:946,y:580,flip:!1,z:2,scale:1}]}},characters:[Es({id:"c1",skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6",room:"living",x:330+oi,y:540})],soundOn:!0,dogKennel:null}}function Es(e){return{skin:"#f1c27d",hair:"#5b3a29",hairStyle:0,shirt:"#ff7aa8",pants:"#5aa9e6",size:"kid",acc:0,room:"living",x:At/2,y:540,flip:!1,held:{left:null,right:null},...e}}const js=(e,t,n)=>Math.max(t,Math.min(n,e)),ui=e=>e.items.reduce((t,n)=>Math.max(t,n.z),0),Jw=e=>e.items.reduce((t,n)=>Math.min(t,n.z),0);function Na(e,t,n){return{...e,characters:e.characters.map(s=>s.id===t?n(s):s)}}function eb(e,t,n){const s=e.baby;if(!t||!s||s.spot!=="arms"||s.holder!==t.id||n===s.room)return e;const o=t.room===s.room?t.x:s.x,i=t.room===s.room?t.y:si,a=cd(s,null,s.room,o,i);return!a||a===s?e:{...e,baby:a}}function ra(e){if(!e.seat)return e;const{seat:t,...n}=e;return n}let Hr=null;function T0(){const e=Hr;return Hr=null,e}function qa(e,t,n,s){if(!e.baby)return e;const o=s?ho(s.x,xn(s.kind)*Ge(s),e.baby.x):null,i=Nw(e.baby,t,n,o);return i===e.baby?e:{...e,baby:i}}function Fa(e,t,n){n&&(Hr={id:t,x:n.x,kind:n.kind,scale:Ge(n)});let s=!1;const o=e.characters.map(i=>{if(i.seat?.item!==t)return i;if(s=!0,!n)return ra(i);const a=ho(n.x,xn(n.kind)*Ge(n),i.x),{seat:r,...l}=i;return{...l,x:a.x,y:a.y}});return s?{...e,characters:o}:e}function tb(e,t,n,s){if(!s){const i=rd(e.seat,t);return i?e.seat===i?e:{...e,seat:i}:ra(e)}const o=rd(n,t);return o?{...e,seat:o}:ra(e)}function it(e,t,n){const s=e.rooms[t];if(!s)return e;const o=n(s);return o===s?e:{...e,rooms:{...e.rooms,[t]:o}}}function nb(e){const t=new Set;let n=!1;const s=e.map(o=>{if(!t.has(o.id))return t.add(o.id),o;n=!0;const i=String(o.id).replace(/-d\d+$/,"").replace(/[^A-Za-z0-9:_/.-]/g,"").slice(0,72)||"item";let a=2,r=(i+"-d"+a).slice(0,80);for(;t.has(r);)a+=1,r=(i+"-d"+a).slice(0,80);return t.add(r),{...o,id:r}});return n?s:e}function sb(e){let t=!1;const n={...e.rooms};for(const s of aa){const o=e.rooms[s];if(!o||!Array.isArray(o.items))continue;const i=nb(o.items);i!==o.items&&(n[s]={...o,items:i},t=!0)}return t?{...e,rooms:n}:e}function P0(e){if(!e||!e.rooms)return e;const t=Nn().rooms,n=e.rooms;let s=!1;for(const i of aa){const a=n[i];(!a||typeof a!="object"||!Array.isArray(a.items))&&(s=!0)}const o=s?(()=>{const i={...n};for(const a of aa){const r=n[a];(!r||typeof r!="object"||!Array.isArray(r.items))&&(i[a]=t[a])}return{...e,rooms:i}})():e;return sb(o)}function Wi(e,t){switch(Hr=null,t.type){case"room/switch":return e.rooms[t.room]?{...e,currentRoom:t.room}:e;case"item/add":return it(e,t.room,n=>n.items.length>=80||n.items.some(s=>s.id===t.item.id)?n:{...n,items:[...n.items,{...t.item,z:ui(n)+1}]});case"item/move":{const n=e.rooms[t.room]?.items.find(o=>o.id===t.id)??null,s=it(e,t.room,o=>({...o,items:o.items.map(i=>i.id===t.id?{...i,x:js(t.x,0,At),y:js(t.y,40,Wn)}:i)}));return t.stand?qa(Fa(s,t.id,n),t.id,!1,n):s}case"item/flip":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return qa(Fa(it(e,t.room,s=>({...s,items:s.items.map(o=>o.id===t.id?{...o,flip:!o.flip}:o)})),t.id,n),t.id,!1,n)}case"item/size":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||Gn(n.size)===Gn(t.size)?e:it(e,t.room,s=>({...s,items:s.items.map(o=>o.id===t.id?S0(o,t.size):o)}))}case"item/power":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||!h0(n.kind)||!!n.on==!!t.on?e:it(e,t.room,s=>({...s,items:s.items.map(o=>{if(o.id!==t.id)return o;if(t.on)return{...o,on:!0};const{on:i,...a}=o;return a})}))}case"item/front":return it(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:ui(n)+1}:s)}));case"item/back":return it(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:Jw(n)-1}:s)}));case"item/delete":{const n=e.rooms[t.room]?.items.find(a=>a.id===t.id)??null,s=n?.kind==="kennel",o=Fa(it(e,t.room,a=>({...a,items:a.items.filter(r=>r.id!==t.id)})),t.id,n),i=s&&e.dogKennel?.item===t.id?{...o,dogKennel:null}:o;return qa(i,t.id,!0,n)}case"room/wallpaper":return it(e,t.room,n=>({...n,wallpaper:t.color}));case"room/floor":return it(e,t.room,n=>({...n,floor:t.color}));case"room/pattern":return it(e,t.room,n=>({...n,pattern:t.pattern,wallTile:null}));case"room/wallTile":return it(e,t.room,n=>({...n,wallTile:t.tile}));case"room/floorTile":return it(e,t.room,n=>({...n,floorTile:t.tile}));case"char/add":return e.characters.length>=ii||e.characters.some(n=>n.id===t.char.id)?e:{...e,characters:[...e.characters,t.char]};case"char/update":return Na(e,t.id,n=>{const{look2:s,costume:o,...i}=t.patch,a={...n,...i};if("look2"in t.patch&&(s?a.look2=s:delete a.look2),"costume"in t.patch){const r=Eo(o);r?a.costume=r:delete a.costume}return a});case"char/move":{if(!e.rooms[t.room])return e;const n=e.characters.find(o=>o.id===t.id),s=Na(e,t.id,o=>{const i={...o,room:t.room,x:js(t.x,0,At),y:js(t.y,60,Wn)};return tb(i,e.rooms[t.room].items,t.seat,"seat"in t)});return eb(s,n,t.room)}case"char/delete":{const n=e.characters.find(o=>o.id===t.id);if(!n)return e;let s={...e,characters:e.characters.filter(o=>o.id!==t.id)};if(["left","right"].forEach((o,i)=>{const a=n.held[o];a&&(s=it(s,n.room,r=>({...r,items:[...r.items,{...a,x:n.x+(i?40:-40),y:n.y,z:ui(r)+1}]})))}),s.baby?.spot==="arms"&&s.baby.holder===t.id){const o=cd(s.baby,null,s.baby.room,s.baby.x,s.baby.y);o&&o!==s.baby&&(s={...s,baby:o})}return s}case"char/hold":{const n=e.characters.find(r=>r.id===t.id),s=e.rooms[t.room]?.items.find(r=>r.id===t.itemId);if(!n||!s||n.held[t.hand]||n.room!==t.room)return e;const o=Fa(it(e,t.room,r=>({...r,items:r.items.filter(l=>l.id!==t.itemId)})),t.itemId,s),i=Na(o,t.id,r=>({...r,held:{...r.held,[t.hand]:s}})),a=s.kind==="kennel"&&e.dogKennel?.item===t.itemId?{...i,dogKennel:null}:i;return qa(a,t.itemId,!0,s)}case"char/release":{const n=e.characters.find(i=>i.id===t.id),s=n?.held[t.hand];if(!n||!s)return e;const o=Na(e,t.id,i=>({...i,held:{...i.held,[t.hand]:null}}));return it(o,n.room,i=>({...i,items:[...i.items,{...s,x:js(t.x,0,At),y:js(t.y,40,Wn),z:ui(i)+1}]}))}case"cat/set":return{...e,cat:t.cat};case"cat/move":return e.cat&&e.rooms[t.room]?{...e,cat:{...e.cat,room:t.room,x:js(t.x,100,At-100)}}:e;case"dog/set":return{...e,dog:t.dog};case"dog/kennel":return t.item===null?e.dogKennel?{...e,dogKennel:null}:e:!Xw(e,t.item)||e.dogKennel?.item===t.item?e:{...e,dogKennel:{item:t.item}};case"ranch/op":{const n=t.op;if(n.op==="take"){const i=e.rooms[n.room];if(i&&i.items.some(a=>a.id===n.id))return e}const s=ad(yf(e.garden),mf(e.basket),t.op,t.now,e.lastEgg??0);if(typeof s=="string")return e;let o={...e,garden:s.plots,basket:s.basket,lastEgg:t.op.op==="egg"?t.now:e.lastEgg};if(t.op.op==="take"&&o.rooms[t.op.room]){const i=t.op;o=it(o,i.room,a=>a.items.length>=80?a:{...a,items:[...a.items,{id:i.id,kind:aw[i.kind],x:i.x,y:560,flip:!1,z:ui(a)+1,scale:1}]})}return o}case"settings/sound":return{...e,soundOn:t.on};case"game/reset":return g0(Nn());case"baby/meet":return e.baby?e:{...e,baby:Ww(e.rooms,t.now)};case"baby/name":return!e.baby||!t.name||t.name===e.baby.name?e:{...e,baby:pn({...e.baby,name:t.name})};case"baby/care":{if(!e.baby)return e;const n=Vw(e.baby,t.care,t.now);return n===e.baby?e:{...e,baby:n}}case"baby/hold":{if(!e.baby)return e;const n=cd(e.baby,t.holder,t.room,t.x,t.y);return!n||n===e.baby?e:{...e,baby:n}}case"baby/place":{if(!e.baby||!e.rooms[t.room])return e;const n=e.characters.filter(o=>o.room===t.room&&o.seat).map(o=>({item:o.seat.item,n:o.seat.n})),s=Qw(e.baby,t,e.rooms[t.room].items,n);return s===e.baby?e:{...e,baby:s}}case"baby/ease":{if(!e.baby)return e;const n=Uw(e.baby,t.now);return n?{...e,baby:n}:e}case"need/meet":return Pw(e,t.id,t.need);case"need/drift":return Aw(e,t.id,t.need)}}const ja=kt("cozy-house"),ob=kt("cozy-house-v1");function Lf(e){if(!e||typeof e!="object"||!e.rooms)return Nn();let t=e;if(t.version===1){const f=u=>(Number(u)||0)+oi,h={};for(const[u,y]of Object.entries(t.rooms))h[u]={...y,items:(y.items??[]).map(g=>({...g,x:f(g.x)}))};t={...t,version:2,rooms:h,character:{...t.character,x:f(t.character?.x)}}}if(t.version===2){const f=t.character??{};t={...t,version:3,characters:[Es({...f,id:"c1",size:"kid",acc:0,held:{left:null,right:null}})]},delete t.character}if(t.version!==3)return Nn();const n=Nn(),s=(Array.isArray(t.characters)?t.characters:[]).slice(0,ii).map((f,h)=>{const u=f?.look2,y=Es({...f,id:String(f.id??"c"+(h+1)),held:{left:f.held?.left??null,right:f.held?.right??null}});if(delete y.look2,u!=null){const v=xa(u);v&&(y.look2=v)}if("costume"in y){const v=Eo(y.costume);v?y.costume=v:delete y.costume}delete y.needs;const g=kf(f?.needs);return g&&(y.needs=g),y}),o=P0({...n,...t,rooms:{...n.rooms,...t.rooms},characters:s}),i=oh(o),a=Mf(i),r=a===o.dogKennel?o:{...o,dogKennel:a},l=hw(r.mailbox);let c=i===o?r:{...r,characters:i.characters};if(l)c={...c,mailbox:l};else if(c.mailbox){const{mailbox:f,...h}=c;c=h}const d=Hw(c.baby,c.rooms);if(d)c={...c,baby:d};else if("baby"in c){const{baby:f,...h}=c;c=h}return oh(ib(c))}function oh(e){let t=!1;const n=e.characters.map(s=>{const o=rd(bf(s.seat),e.rooms[s.room]?.items);return o?s.seat?.item===o.item&&s.seat.pose===o.pose&&s.seat.n===o.n?s:{...s,seat:o}:s.seat?(t=!0,ra(s)):s});return!t&&n.every((s,o)=>s===e.characters[o])?e:{...e,characters:n}}function ib(e){const t=e.currentRoom,n=L0.includes(t),s=a=>aa.includes(a);let o=!1;const i=e.characters.map(a=>{const r=a.room;return!s(r)||!n&&r===t?(o=!0,{...a,room:"living"}):a});return n&&!o?e:{...e,currentRoom:n?e.currentRoom:"living",characters:i}}const Zs=kt("cozy-house-bak"),gi=kt("cozy-house-corrupt-"),ab=20,rb=2,lb=5;function Za(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&t.rooms&&(t.version===1||t.version===2||t.version===3)?Lf(t):null}catch{return null}}const ih=e=>!!e&&(e.name==="QuotaExceededError"||e.name==="NS_ERROR_DOM_QUOTA_REACHED"||e.code===22||e.code===1014);function A0(){let e,t=!1,n=null,s=!1,o=null;try{o=localStorage.getItem(ja)??localStorage.getItem(ob)}catch{o=null}let i=!1,a=()=>{i=!0},r=!1;const l=()=>{if(!r)return!0;try{for(let $=0;$<localStorage.length;$++){const M=localStorage.key($);if(M&&M.startsWith(gi)&&localStorage.getItem(M)===o)return r=!1,!0}localStorage.setItem(gi+Date.now(),o),r=!1;try{const $=[];for(let M=0;M<localStorage.length;M++){const z=localStorage.key(M);z&&z.startsWith(gi)&&$.push(z)}$.sort((M,z)=>Number(M.slice(gi.length))-Number(z.slice(gi.length))),$.slice(0,Math.max(0,$.length-rb)).forEach(M=>localStorage.removeItem(M))}catch{}return!0}catch($){return ih($)&&a(),!1}},c=o!==null?Za(o):null;if(o!==null&&c){e=c,s=!0;try{localStorage.getItem(Zs)!==o&&localStorage.setItem(Zs,o)}catch{}}else if(o!==null){r=o.trim()!=="",l();let $=null;try{$=localStorage.getItem(Zs)}catch{}const M=$?Za($):null;if(M){if(e=M,s=!0,n="restored",l())try{localStorage.setItem(ja,$)}catch{}}else e=Nn(),n="unreadable"}else if((()=>{try{return localStorage.getItem(Zs)}catch{return null}})()!==null&&Za(localStorage.getItem(Zs))){const $=localStorage.getItem(Zs);e=Za($),s=!0,n="restored";try{localStorage.setItem(ja,$)}catch{}}else t=!0,e=Nn(),typeof navigator<"u"&&(e=navigator.webdriver?g0(e):Fy(e));const d=[],f=[],h=$=>{n=$,f.forEach(M=>M($))};let u,y,g=!1,v=0,w=0;a=()=>{i||(i=!0,h("full"))};const m=()=>{if(clearTimeout(u),u=void 0,!!g){if(!l()){_();return}try{const $=JSON.stringify(e);if(localStorage.setItem(ja,$),g=!1,clearTimeout(y),y=void 0,w=0,s&&++v%ab===0)try{localStorage.setItem(Zs,$)}catch{}}catch($){ih($)&&a(),_()}}},b=()=>{g&&m()};function _(){clearTimeout(y),y=void 0,!(++w>lb)&&(y=window.setTimeout(()=>{y=void 0,m()},5e3))}const P=()=>{w=0,b()};return typeof window<"u"&&(document.addEventListener("visibilitychange",P),window.addEventListener("pagehide",b),window.addEventListener("beforeunload",b)),{get:()=>e,subscribe($){d.push($)},dispatch($){e=Wi(e,$),d.forEach(M=>M(e,$)),g=!0,w=0,clearTimeout(u),u=window.setTimeout(m,250)},flush:b,trouble:()=>n,fullAtStart:i,onTrouble($){f.push($)},born:t}}const cb=Object.freeze(Object.defineProperty({__proto__:null,CAT_COATS:Gw,DOG_BREEDS:Yw,ITEM_SIZE_STEPS:Qn,MAX_CHARS:ii,ROOM_H:Wn,ROOM_IDS:aa,ROOM_W:At,SCENE_ROOMS:L0,TAB_ROOMS:Zw,V1_OFFSET:oi,V1_ROOM_W:E0,applyItemSize:S0,createStore:A0,drawnScale:Ge,ensureRooms:P0,initialState:Nn,itemSizeOf:Gn,migrate:Lf,newCharacter:Es,reduce:Wi,standChar:ra,takeClearedFurniture:T0,validKennel:Mf},Symbol.toStringTag,{value:"Module"})),ms=256,ys=192,Ef=["#ffffff","#5a3d5c","#ff6b6b","#ff8fab","#ffa94d","#ffd43b","#69db7c","#2f9e44","#4dabf7","#1c5fb8","#b388d6","#7048b6","#c9905a","#7a4b2a","#ced4da","#212529"],dd=8e3,Vi=12,R0=["wood","plum","gold","rainbow"],db=/^a[0-9a-z]{6,24}$/,fb=/^P1[A-Za-z0-9+/]+={0,2}$/;function Sf(e){return typeof e!="string"||e.length<4||e.length>dd||!fb.test(e)||(e.length-2)%4!==0?null:e}function C0(e){return typeof e=="string"&&db.test(e)?e:null}function pb(e){const t=[];let n=0;for(;n<e.length;){const s=e[n]&15;let o=1;for(;n+o<e.length&&(e[n+o]&15)===s&&o<2056;)o++;if(o<=8)t.push(o-1<<4|s);else{const i=o-9;t.push(128|i>>8<<4|s,i&255)}n+=o}return Uint8Array.from(t)}function hb(e,t=ms*ys){const n=new Uint8Array(t);let s=0;for(let o=0;o<e.length&&s<t;o++){const i=e[o];let a;if(i<128)a=(i>>4)+1;else{if(o+1>=e.length)break;a=((i>>4&7)<<8|e[++o])+9}const r=Math.min(t,s+a);n.fill(i&15,s,r),s=r}return n}const Ti="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function ub(e){let t="";for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],i=e[n+2];t+=Ti[s>>2]+Ti[(s&3)<<4|(o??0)>>4]+(o===void 0?"=":Ti[(o&15)<<2|(i??0)>>6])+(i===void 0?"=":Ti[i&63])}return t}function gb(e){const t=e.replace(/=+$/,""),n=[];let s=0,o=0;for(const i of t){const a=Ti.indexOf(i);if(a<0)break;s=s<<6|a,o+=6,o>=8&&(o-=8,n.push(s>>o&255))}return Uint8Array.from(n)}const wc=e=>"P1"+ub(pb(e));function I0(e){return!e||!Sf(e)?new Uint8Array(ms*ys):hb(gb(e.slice(2)))}function fd(e,t){for(let n=e.length-1;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}const O0=4,ah=7,mb=30;function yb(){const e=[];let t=0;for(let n=0;n<O0;n++){e.push({id:t++,c:n,v:0});for(let s=1;s<=9;s++)for(let o=0;o<2;o++)e.push({id:t++,c:n,v:s});for(const s of["skip","rev","d2"])for(let o=0;o<2;o++)e.push({id:t++,c:n,v:s})}for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"wild"});for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"w4"});return e}const pd=e=>e.discard[e.discard.length-1],mi=(e,t)=>t.c===4||t.c===e.color||t.v===pd(e).v&&pd(e).c!==4,ss=(e,t,n=1)=>{const s=e.hands.length;return((t+e.dir*n)%s+s)%s};function hd(e,t,n,s){const o=[];for(let i=0;i<n&&e.hands[t].length<mb;i++){if(!e.deck.length){const r=e.discard.pop();if(e.deck=fd(e.discard.map(l=>l),s),e.discard=[r],!e.deck.length)break}const a=e.deck.pop();e.hands[t].push(a),o.push(a)}return e.hands[t].length>1&&(e.slay[t]=!1),o}function wb(e,t){if(e.owe!==null&&e.hands[e.owe]?.length===1&&!e.slay[e.owe]){const n=e.owe;return e.owe=null,{victim:n,vdrew:hd(e,n,2,t).length}}return e.owe=null,{}}const rh=e=>{const t=[0,0,0,0];return e.forEach(n=>{n.c<4&&t[n.c]++}),t.indexOf(Math.max(...t))},bb={id:"slay",name:"Slay",minPlayers:2,maxPlayers:6,setup(e,t){const n=fd(yb(),t),s=Array.from({length:e},()=>n.splice(-ah,ah));let o=n.length-1;for(;typeof n[o].v!="number";)o--;const i=n.splice(o,1)[0];return{deck:n,discard:[i],hands:s,color:i.c,turn:Math.floor(t()*e),dir:1,drawn:null,slay:s.map(()=>!1),owe:null,winner:null,ev:{n:0,p:-1,k:"start",card:i}}},cleanMove(e){return!e||typeof e!="object"?null:e.k==="play"&&Number.isInteger(e.id)&&e.id>=0&&e.id<108?{k:"play",id:e.id,...Number.isInteger(e.color)&&e.color>=0&&e.color<O0?{color:e.color}:{}}:e.k==="draw"||e.k==="pass"||e.k==="slay"?{k:e.k}:null},legal(e,t,n){if(e.winner!==null)return!1;if(n.k==="slay")return e.hands[t].length<=2&&!e.slay[t];if(t!==e.turn)return!1;if(n.k==="draw")return e.drawn===null;if(n.k==="pass")return e.drawn!==null;const s=e.hands[t].find(o=>o.id===n.id);return!s||e.drawn!==null&&s.id!==e.drawn||s.c===4&&n.color===void 0?!1:mi(e,s)},apply(e,t,n,s){const o=e.ev.n+1;if(n.k==="slay")return e.slay[t]=!0,e.owe===t&&(e.owe=null),e.ev={n:o,p:t,k:"slay"},e;const i=wb(e,s);if(n.k==="draw"){const d=hd(e,t,1,s),f=d[0];if(f&&mi(e,f))e.drawn=f.id,e.ev={n:o,p:t,k:"draw",drew:1,...i};else{if(e.drawn=null,e.ev={n:o,p:t,k:"draw",drew:d.length,...i},e.stuck=d.length?0:(e.stuck??0)+1,(e.stuck??0)>=e.hands.length){const h=Math.min(...e.hands.map(u=>u.length));return e.winner=e.hands.findIndex(u=>u.length===h),e.turn=-1,e}e.turn=ss(e,t)}return e}if(n.k==="pass")return e.drawn=null,e.turn=ss(e,t),e.ev={n:o,p:t,k:"pass",...i},e;e.stuck=0;const a=e.hands[t],r=a.splice(a.findIndex(d=>d.id===n.id),1)[0];e.discard.push(r),e.drawn=null,e.color=r.c===4?n.color:r.c;const l={n:o,p:t,k:"play",card:r,color:e.color,...i};if(!a.length)return e.winner=t,e.turn=-1,e.ev=l,e;a.length===1&&!e.slay[t]&&(e.owe=t);const c=e.hands.length===2;if(r.v==="rev")e.dir=e.dir===1?-1:1,e.turn=c?t:ss(e,t);else if(r.v==="skip")l.skipped=ss(e,t),e.turn=ss(e,t,2);else if(r.v==="d2"||r.v==="w4"){const d=ss(e,t);l.skipped=d;const f=r.v==="d2"?2:4;l.drew=hd(e,d,f,s).length,e.turn=ss(e,t,2)}else e.turn=ss(e,t);return e.ev=l,e},turn:e=>e.winner!==null?-1:e.turn,winner:e=>e.winner,view(e,t){return{top:pd(e),color:e.color,turn:e.winner!==null?-1:e.turn,dir:e.dir,deck:e.deck.length,counts:e.hands.map(n=>n.length),slay:e.slay,winner:e.winner,ev:e.ev,...t!==null&&e.hands[t]?{hand:e.hands[t],drawn:t===e.turn?e.drawn:null}:{}}},autoMove(e,t){if(t!==e.turn)return null;if(e.drawn!==null){const s=e.hands[t].find(o=>o.id===e.drawn);return s&&mi(e,s)?{k:"play",id:s.id,...s.c===4?{color:rh(e.hands[t])}:{}}:{k:"pass"}}const n=e.hands[t].find(s=>mi(e,s)&&s.c!==4)??e.hands[t].find(s=>mi(e,s));return n?{k:"play",id:n.id,...n.c===4?{color:rh(e.hands[t])}:{}}:{k:"draw"}},removePlayer(e,t,n){if(e.hands.length<=2)return null;const s=e.turn===t;return e.deck.unshift(...e.hands[t]),fd(e.deck,n),e.hands.splice(t,1),e.slay.splice(t,1),e.owe===t?e.owe=null:e.owe!==null&&e.owe>t&&e.owe--,e.turn>t&&e.turn--,s&&(e.drawn=null,e.dir===-1?e.turn=((t-1)%e.hands.length+e.hands.length)%e.hands.length:e.turn=t%e.hands.length),e.ev={n:e.ev.n+1,p:t,k:"left"},e}},ud=7,vr=6,vb=(e,t,n)=>{const s=e[t][n];for(const[o,i]of[[1,0],[0,1],[1,1],[1,-1]]){const a=[[t,n]];for(const r of[1,-1])for(let l=1;l<4;l++){const c=t+o*l*r,d=n+i*l*r;if(c<0||c>=ud||d<0||d>=vr||e[c][d]!==s)break;a.push([c,d])}if(a.length>=4)return a}return null},kb={id:"four",name:"Four in a Row",minPlayers:2,maxPlayers:2,setup:(e,t)=>({b:Array.from({length:ud},()=>[]),turn:t()<.5?0:1,winner:null,draw:!1,line:null,last:null,n:0}),cleanMove:e=>e&&Number.isInteger(e.col)&&e.col>=0&&e.col<ud?{col:e.col}:null,legal:(e,t,n)=>e.winner===null&&!e.draw&&t===e.turn&&e.b[n.col].length<vr,apply(e,t,n){e.b[n.col].push(t);const s=e.b[n.col].length-1;e.last={col:n.col,row:s,p:t},e.n++;const o=vb(e.b,n.col,s);return o?(e.winner=t,e.line=o,e.turn=-1):e.b.every(i=>i.length>=vr)?(e.draw=!0,e.turn=-1):e.turn=1-t,e},turn:e=>e.turn,winner:e=>e.winner,view:e=>e,autoMove:(e,t)=>{if(t!==e.turn)return null;const s=[3,2,4,1,5,0,6].find(o=>e.b[o].length<vr);return s===void 0?null:{col:s}},removePlayer:()=>null},B0={slay:bb,four:kb},La=2600,mo=[{game:"slay",seats:6,x:720},{game:"four",seats:2,x:1500},{game:"slay",seats:4,x:2150}],_b=2e4,$b="winter",xb="Winter Cheer",Mb={[$b]:xb},Lb=["pack:wc-holiday-tree","pack:wc-gingerbread","pack:wc-gingerbread-village","pack:wc-bauble-garland","pack:wc-stocking-row","pack:wc-cane-lamp","pack:wc-star-topper","pack:wc-poinsettia","pack:wc-holly","pack:wc-nutcracker","pack:wc-reindeer","pack:wc-sleigh-planter"],Eb=["Berry Wreath","Birch Log Basket","Cabin Picture","Cabin Planks","Candy Cane Lamp","Candy Stripe","Cinnamon Roll Tray","Cocoa Cart","Cocoa Pot","Cookie Oven","Cookie Plate","Cozy Red Plaid","Cozy Sock Hamper","Decorated Holiday Tree","Frosted Pine","Frosty Bookcase","Frosty Dots","Fur-Trim Bench","Gingerbread Cottage","Gingerbread Village","Holly Sprig","Ice Skates","Ice-Blue Wardrobe","Knit Pom Rug","Knit Stocking Row","Knit-Blanket Armchair","LED Candle Trio","Lantern","Log Bench","Marshmallow Jar","Mint Pine Sprigs","Mitten Ottoman","Mittens on a Line","Mug Tree Shelf","Mug of Cocoa","Nutcracker Friend","Penguin Plush","Penguin Plush Chair","Peppermint Counter","Peppermint Swirl Rug","Peppermint Tiles","Pinecone Garland","Pinecone Side Table","Plaid Cabin Sofa","Poinsettia Pot","Polar Bear Plush","Red Plaid Quilt Bed","Reindeer Plush","Ribbon Bauble Garland","Sled Coffee Table","Sleigh Planter","Snow Globe","Snow Knit Carpet","Snow-Globe Lamp","Snowflake Mobile","Snowflake Nightstand","Snowflake Sky","Snowman Buddy","Snowshoes","Snowy Window Art","Snowy Window Seat","Star Tree Topper","Stone Hearth Fireplace","Twinkle Light String","Twinkle-Light Floor Lamp","Winter Cheer","Woodstove","Wrapped Present Stack"],z0="halloween",Sb="Spooky Cute",Tb={[z0]:Sb},Pb=!1;function Ab(e=new Date){const t=e.getMonth(),n=e.getDate();return t===9&&n>=24||t===10&&n<=2}function D0(e=new Date,t=Pb){return t||Ab(e)}const Rb=["pack:hw-cauldron","pack:hw-cat-statue","pack:hw-witch-hat"],Cb=["Autumn Leaf Garland","Black Cat Statue","Bubbly Cauldron","Friendly Sheet Ghost","Harvest Hay Bale","Heart and Moon Pumpkin","Moon and Stars Window Cling","Moonbeam Lantern","Spooky Cute","Starry Glow Pumpkin","Starry Witch Hat","Treat Bowl"],Ib=["A-Frame Swing","Acorn Friend","Alarm Clock","Apple","Apple Tree","Arc Floor Lamp","Arc Lamp","Arched Mirror","Arched Shelf","Armchair","Autumn Wreath","Baby Blocks","Baby Bottle","Bakery Shelf","Ball","Balloons","Bananas","Bar Stool","Bassinet","Bath Mat","Bath Mirror","Bath Stool","Bathtub","Beach Ball","Bean Bag","Bed","Berry Basket","Big Leaf Plant","Big Monitor","Big Wardrobe","Birdbath","Birdhouse","Birdie","Blanket Basket","Blocks","Boba Buddy","Book Stack","Books","Bookshelf","Box Stack","Bread","Brush & Comb","Bubble Aquarium","Bubble Bath","Bubble Chair","Bubble-Gum Rug","Bubbly Fountain","Bubbly Plant","Bud Vase","Bulletin Board","Bunk Bed","Bunny","Bunny Plush","Bunny Slippers","Butterfly Bush","Cactus","Cactus Buddy","Cada's Mouse","Cake","Candle Jar","Canopy Bed","Canopy Daybed","Cat Bed","Cat Tower","Caterpillar Plush","Chair","Changing Table","Checker Rug","Checkered Bed","Chick","Chloe's Star Lamp","Clock","Clothes Rail","Clothesline","Cloud Beanbag","Cloud Lamp","Cloud Rug","Cloud Shelf","Cocoa Doll","Cocoa Mug","Coffee Table","Comfy Chair","Cookie Jar","Cooking Pot","Cottage Heart Pouf","Cottage Heart Rug","Counter","Cozy Fireplace","Cozy Lights","Cozy Mug","Cozy Nightstand","Cozy Reading Nook","Cozy Snake Plant","Cozy Teapot","Cream Jars","Cream Sofa","Crib","Crib Mobile","Cubby Shelf","Cube Shelf","Cupcake","Cupcake Stand","Curtains","Curvy Yellow Desk","Cute Keyboard","Cute Speaker","Daisy Pot","Daisy Rug","Desk","Desk Lamp","Desk Mic","Dino Plushie","Dish Cabinet","Dish Rack","Dog Kennel","Doll House","Donut","Dresser","Droplet Buddy","Egg Pan","Fairy-Light Garland","Fairy-Light Shelf","Fan","Fancy Sofa","Fiddle-Leaf Fig","Fig Tree","Fire Pit","Fireplace","Fish Bowl","Fish Tank","Floor Cushion","Flower Cart","Flower Floor Lamp","Flower Kettle","Flower Lamp","Flowers","Foot Spa","Fresh Egg","Fridge","Frog Plush","Fruit Bowl","Game Controller","Gaming Chair","Garden Bench","Garden Carrot","Garden Gnome","Glass Cabinet","Globe","Globe Pendants","Glossy Hair Dryer","Glow Mirror","Gold Floor Mirror","Guinea Pig","Hair Dryer","Hair-Dryer Chair","Hair-Wash Chair","Hammock","Hamster House","Hamster Pal","Hanging Lamp","Hanging Lantern","Hanging Plant","Hanging Vine Planter","Happy Fridge","Headphones","Heart Headboard Bed","Heart Pouf","Heart Rug","Heart Wall Clock","Heart Wall Light","Heart-Leaf Plant","Hedge Row","Herb Box","High Chair","Honey Doll","Ice Cream","Jewelry Box","Juice","Kettle","Kitchen Counter","Knit Cushion","Ladder Shelf","Lamp","Landscape Art","Lattice Bench","Laundry Hamper","Lava Lamp","Lemon Tree","Lemonade Cart","Lemonade Cup","Lighted Vanity","Lilac Curtain","Lily Pond","Little Rocking Horse","Little Slide","Little Sprout","Lotion Bottles","Macaron Jar","Macrame Swing Chair","Mani-Pedi Chair","Manicure Table","Microwave","Milk","Milk & Cookies","Mini Fridge","Mini Greenhouse","Mini Tree","Mint Fridge","Mint Pebble Rug","Mirror","Mixer","Moon and Stars","Moon Night-Light","Moving Box","Mushroom Stool","Music Box","Nail Dryer","Nail Polish","Nail Polish Rack","Night Light","Nightstand","Nursery Cloud Rug","Nursery Dresser","Nursery Lamp","Pancakes","Pantry","Paper Lantern","Pastel Range","Pastel Wardrobe","Patio Lights","Patio Umbrella","Pendant Lamp","Perfume","Perfume Bottle","Perfume Tray","Pet Bowl","Petal Coffee Table","Phone on a Stand","Piano","Picket Gate","Picnic Basket","Picnic Blanket","Picnic Table","Picture","Piggy Bank","Pillow","Pin Board","Pink Vanity","Pinwheel","Pizza","Plant","Plant Stand","Plant Wall","Play Mat","Play Tent","Polish Bottle","Popcorn","Pothos Plant","Pouf","Puffy Cloud Sofa","Puffy Stool","Puppy","Quinn's Cookie Pup","Radio","Rain Barrel","Rainbow Art","Rainbow Rug","Ranch Flowers","Rattle","Reagan's Frame","Reception Desk","Record Player","Ribbon Mirror","Ribbon Tray","Rice Cooker","Ring Light","Robot","Rocker","Rocking Chair","Rocking Horse","Rose Doll","Round Breakfast Table","Round Side Table","Round Woven Rug","Rubber Ducky","Rug","Runner Rug","Salon Chair","Sandbox","Scallop Curtains","Scalloped Loveseat","Seesaw","Shelf","Shower Curtain","Sink","Sink Vanity","Sloane's Rainbow Snail","Snake Plant","Soaking Tub","Soap Dish","Sofa","Sparkle Wall Light","Spice Rack","Splash Pool","Spray Bottle","Sprinkler","Stacking Rings","Star Dresser","Star Lamp","Star Mobile","Stars","Stepping Stones","Sticker Board","Story Pillow","Stove","String Lights","Striped Runner","Succulents","Sun Lounger","Sunny Art","Sunny Bean Bag","Sunny Cloud Rug","Sunny Shelf","Swing Chair","Swivel Stool","Table","Tassel Rug","Teapot","Teapot Set","Teddy","Tiered Tray","Toadstool Light","Toaster","Toilet","Towel Bar","Towel Cart","Towel Stack","Toy Bin","Toy Car","Toy cat","Toy Chest","Toy Train","Trailing Plant Shelf","Tulip Bed","Tulip Vase","Turtle","TV","TV Stand","Unicorn Plushie","Utensil Rail","Vanity","Vanity Stool","Vegetable Patch","Vlog Camera","Wagon","Waiting Bench","Wall Shelf","Wardrobe","Water-Drop Lamp","Watermelon","Wavy Floor Lamp","Window","Window Seat","Wood Armchair","Wood Bookshelf","Wood Coffee Table","Wood Desk","Wood Dresser","Wood Stool","Wood Wall Clock","Wooden Bed","Yard Sign",...Eb,...Cb],Ob=4,Tf=16,Wr=e=>String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,""),Bb=e=>e.length>=Ob&&e.length<=Tf&&/^[A-Z0-9]+$/.test(e),zb=12,Db=["Cada","Chloe","Quinn","Reagan","Sloane"],Hb=460,Wb=320,lh=["Sunny Bunny","Bubbly Panda","Sparkle Kitty","Happy Hippo","Cozy Koala","Jolly Jelly","Zippy Fox","Dreamy Deer","Giggly Goose","Peachy Pup","Minty Mouse","Rainbow Duck","Cuddly Cub","Starry Owl","Bouncy Frog","Lucky Lamb","Snuggly Seal","Twinkle Tiger","Berry Bear","Cloudy Llama","Pebble Penguin","Honey Hedgehog","Marshmallow Moose","Cupcake Cat"],Ui=["Hi!","Come over!","I love your house!","Let's play!","Follow me!","Look at this!","Want a snack?","Nice!","Yes!","No thanks","Hehe","Be right back","Bye!","Let's decorate!","Wanna race?","So cute!"],H0=["👋","😀","😂","😍","😮","😢","🎉","⭐","❤️","👍","🍕","🐱","🌈","🎶","💤","✨"],Pf=60,Vb={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i","+":"t"},bc=["fuck","fuk","fck","shit","sht","bitch","btch","bastard","asshole","ass","dick","cock","pussy","cunt","whore","slut","damn","crap","piss","fag","faggot","retard","nigger","nigga","porn","sex","sexy","nude","naked","boob","boobs","penis","vagina","kill","suicide","stupid","idiot","dumb","hate","loser","shutup","wtf","stfu","gtfo","bs"],Ub=["zero","oh","one","two","three","four","five","six","seven","eight","nine","ten"],Qb=[/\bmy\s+(real\s+)?(full\s+|last\s+|sur)?name\s+is\b/i,/\bi\s*live\s+(at|on|in)\b/i,/\bmy\s+(address|addy|phone|number|cell|email|e-mail|school|password|pass|insta|snap|tiktok|discord)\b/i,/\b(password|passcode|zip\s*code|postcode)\b/i,/\b(snapchat|instagram|tiktok|discord|whatsapp|kik|telegram|facebook|messenger|youtube\.com)\b/i],Nb=/(https?:|www\.|\b[a-z0-9-]+\s*(\.|\(dot\)|\sdot\s)\s*(com|net|org|io|co|me|ly|gg|tv|app|xyz|us|uk|ca|de|link|site|info)\b)/i,qb=/\S+\s*(@|\(at\)|\sat\s)\s*\S+\s*(\.|\sdot\s)\s*\w{2,}/i,Fb=/@\w/,jb=/\b\d{1,6}\s+([a-z]+\s+){0,3}(street|st|road|rd|avenue|ave|lane|ln|drive|dr|court|ct|blvd|boulevard|way|place|pl|circle|cir|terrace|parkway|pkwy|highway|hwy|apt|apartment|unit)\b/i;function Zb(e,t=Pf){if(typeof e!="string")return{ok:!1,reason:"empty"};const n=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(!n)return{ok:!1,reason:"empty"};if(n.length>t)return{ok:!1,reason:"long"};if(Nb.test(n))return{ok:!1,reason:"link"};if(qb.test(n)||Fb.test(n))return{ok:!1,reason:"contact"};if((n.match(/\d/g)??[]).length>=5||/\d[\d\s().\-]{4,}\d/.test(n)||jb.test(n))return{ok:!1,reason:"contact"};const o=n.toLowerCase().split(/[^a-z]+/).filter(Boolean);let i=0;for(const c of o)if(i=Ub.includes(c)?i+1:0,i>=4)return{ok:!1,reason:"contact"};if(Qb.some(c=>c.test(n)))return{ok:!1,reason:"personal"};const a=n.toLowerCase().replace(/[0-9@$!+]/g,c=>Vb[c]??c),r=a.split(/[^a-z]+/).filter(Boolean),l=a.replace(/[^a-z]/g,"").replace(/(.)\1{2,}/g,"$1$1");return r.some(c=>bc.includes(c)||bc.includes(c.replace(/(.)\1+/g,"$1")))||bc.filter(c=>c.length>=5).some(c=>l.includes(c))?{ok:!1,reason:"words"}:{ok:!0,text:n}}const Gb={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t",8:"b","@":"a",$:"s","!":"i","+":"t",v:"u","|":"k","<":"k","#":"h"};function Yb(e){return/^f+u+c+k+$/.test(e)||/^f+u+k+$/.test(e)||/^f+c+k+$/.test(e)||/^s+h+i+t+$/.test(e)||/^s+h+t+$/.test(e)||/^b+i+t+c+h+$/.test(e)||/^b+t+c+h+$/.test(e)||/^a+s+h+o+l+e+$/.test(e)||/^d+u+m+b+a+s+$/.test(e)||/^n+i+g{2,}e+r+$/.test(e)||/^n+i+g{2,}a+$/.test(e)||/^f+a+g+$/.test(e)||/^f+a+g+o+t+$/.test(e)||/^r+e+t+a+r+d+$/.test(e)||/^k+y+s+$/.test(e)}function Kb(e){return/^c+u+n+t+$/.test(e)||/^a+h+o+l+e+$/.test(e)||/^k+i+k+e+$/.test(e)||/^c+h+i+n+k+$/.test(e)||/^s+p+i+c+$/.test(e)||/^c+o{2,}n+$/.test(e)||/^w+e+t+b+a+c+k+$/.test(e)||/^t+r+a+n+y+$/.test(e)||/^t+r+a+n+i+$/.test(e)||/^d+y+k+e+$/.test(e)||/^b+e+a+n+e+r+$/.test(e)||/^g+o{2,}k+$/.test(e)||/^r+a+g+h+e+a+d+$/.test(e)||/^t+o+w+e+l+h+e+a+d+$/.test(e)||/^h+e+i+l+h+i+t+l+e+r+$/.test(e)}const Xb=new Set(["spicy","spices","spicing","spicey","spicier","spiciest","cocky","chinking","spicer","gooky","slutty","twatt"]);function Jb(e,t){if(!/^[a-z]+$/.test(e)||t&&Xb.has(e))return!1;const n=[e],s=["ing","in","ers","er","ed","es","y","s"];for(let o=0;o<s.length;o++){const i=s[o];e.endsWith(i)&&e.length>i.length+2&&n.push(e.slice(0,-i.length))}for(let o=0;o<n.length;o++)if(Yb(n[o])||t&&Kb(n[o]))return!0;return!1}function ev(e){if(!e.includes("*"))return[e];const t=e.split("*").length-1,n=e.replace(/\*/g,""),s=n?[n]:[];if(t<1||t>3)return s;const o=e.split(""),i=[];for(let r=0;r<o.length;r++)o[r]==="*"&&i.push(r);const a=r=>{if(r===i.length){s.push(o.join(""));return}for(let l=97;l<=122;l++)o[i[r]]=String.fromCharCode(l),a(r+1)};return a(0),s}const ch=["mother","sonofa","horse","bull","dip"],dh=["face","head","you"];function Qo(e,t){const n=e.replace(/ph(?=u+c+k)/g,"f").replace(/ph(?=u+k)/g,"f");if(Jb(n,t)||/^w+t+f+$/.test(n)||/^s+t+f+u+$/.test(n))return!0;for(let s=0;s<ch.length;s++){const o=ch[s];if(n.startsWith(o)&&n.length>o.length+2&&Qo(n.slice(o.length),t))return!0}for(let s=0;s<dh.length;s++){const o=tv(n,dh[s]);if(o&&Qo(o,t))return!0}return!!(n.length>4&&n.endsWith("s")&&!n.endsWith("ss")&&Qo(n.slice(0,-1),t))}function tv(e,t){let n=e.length;for(let s=t.length-1;s>=0;s--){const o=t[s];if(n===0||e[n-1]!==o)return null;for(;n>0&&e[n-1]===o;)n--}return n<=2?null:e.slice(0,n)}function Vr(e){let t="";for(let n=0;n<e.length;n++)t+=Gb[e[n]]??e[n];return t}const nv={ѕ:"s",һ:"h",с:"c",а:"a",е:"e",о:"o",р:"p",і:"i",х:"x",у:"y",к:"k"};function sv(e){const n=e.replace(/[\u00ad\u0336\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").normalize("NFKC").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase();let s="";for(let o=0;o<n.length;o++)s+=nv[n[o]]??n[o];return s}const ov=new Set(["it","its","it's","is","as","a","i","uh","oh","so","he","she","hi","um","umm","hmm","hm","ah","eh","er","ow","ha","hey","yo","ok","yeah","yes","no","nah","wow","ho","ooh","ahh","uhh","ohh"]);function la(e){return e>="a"&&e<="z"||e>="0"&&e<="9"||"@$!+*v|#<".includes(e)}function fh(e,t){let n=t;for(;n<e.length&&e[n]==="!";)n++;if(n>=e.length||!la(e[n])||e[n]==="!")return null;const s=e[n];let o=n+1;for(;o<e.length&&e[o]==="!";)o++;return o<e.length&&la(e[o])?null:{ch:s,end:o}}function iv(e,t){const n=e.length,s=" .-_~";let o=0;for(;o<n;){if(o>0&&la(e[o-1])){o++;continue}const i=fh(e,o);if(!i){o++;continue}const a=[i.ch];let r=i.end;for(;r<n&&s.includes(e[r]);){const l=fh(e,r+1);if(!l)break;a.push(l.ch),r=l.end}if(a.length>=2){const l=Vr(a.join("")).replace(/\*/g,"");if(Qo(l,t))return!0}o=Math.max(o+1,r)}return!1}function yo(e){return e.replace(/^!+/,"").replace(/!+$/,"")}function Ur(e){return Vr(yo(e)).replace(/\*/g,"")}function W0(e){return/[0-9@$!+*|#<]/.test(yo(e))}function av(e){return yo(e).length===1}function rv(e){const t=yo(e);return t.length<2||W0(e)?!1:/^sh+$/.test(t)||ov.has(t)}function lv(e){let t="space";for(let n=0;n<e.length;n++){const s=e[n];if(!(s===" "||s==="	"||s===`
`||s==="\r")){if(s==="-"){t="hyphen";continue}return"punct"}}return t}function cv(e){const t=[];let n=0,s="";for(;n<e.length;){if(!la(e[n])){s+=e[n],n++;continue}let o=n+1;for(;o<e.length&&la(e[o]);)o++;t.push({text:e.slice(n,o),gap:t.length===0?"start":lv(s)}),s="",n=o}return t}function dv(e){const t=[Vr(e)];if(e.charAt(0)==="!"||e.charAt(e.length-1)==="!"){const n=e.replace(/^!+/,"").replace(/!+$/,"");n&&n!==e&&t.push(Vr(n))}return t}function fv(e){for(let t=0;t<e.length;t++){if(!/^k+i+l+$/.test(e[t]))continue;const n=e[t+1]||"",s=e[t+2]||"";if(/^y+o+u+r+s+e+l+f+$/.test(n)||/^u+r+s+e+l+f+$/.test(n)||/^u+r+$/.test(n)&&/^s+e+l+f+$/.test(s))return!0}return!1}function pv(e,t,n){if(yo(e[n].text)!=="coon")return!1;const s=n>0?t[n-1]:"",o=t[n+1]||"";return s==="maine"||o==="cat"}function hv(e,t,n){return n===t+1&&e[n].gap==="space"&&/^a+$/.test(Ur(e[t].text))&&/^h+o+l+e+$/.test(Ur(e[n].text))}function uv(e,t,n){return yo(e[n].text)!=="dyke"?!1:n>0&&yo(e[n-1].text)==="van"}function gv(e){for(let t=0;t<e.length-1;t++)if(/^h+e+i+l+$/.test(e[t])&&/^h+i+t+l+e+r+$/.test(e[t+1]))return!0;return!1}function mv(e,t=!0){const n=sv(e);if(iv(n,t))return!0;const s=cv(n),o=s.map(a=>dv(a.text)),i=s.map(a=>Ur(a.text));if(fv(i)||t&&gv(i))return!0;for(let a=0;a<o.length;a++)if(!(t&&(pv(s,i,a)||uv(s,i,a))))for(let r=0;r<o[a].length;r++){const l=ev(o[a][r]);for(let c=0;c<l.length;c++)if(Qo(l[c].replace(/\*/g,""),t))return!0}for(let a=0;a<s.length;a++){let r="",l=0,c=!1,d=!1;for(let f=a;f<s.length&&f<a+8;f++){if(f>a){const h=s[f].gap,u=s[f-1].text;if(h==="punct"||h==="start"||u.endsWith("!")||s[f].text.startsWith("!")||h!=="space"&&h!=="hyphen")break}if(r+=Ur(s[f].text),av(s[f].text)&&l++,rv(s[f].text)&&(c=!0),W0(s[f].text)&&(d=!0),f!==a&&!(c&&l<2&&!d)&&Qo(r,t)){if(t&&hv(s,a,f))break;return!0}}}return!1}function V0(e,t,n,s=!1){if(typeof e!="string")return{ok:!1,reason:"empty"};const o=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return o?o.length>t?{ok:!1,reason:"long"}:mv(o,!s)?{ok:!1,reason:n}:{ok:!0,text:o}:{ok:!1,reason:"empty"}}function yv(e,t=Pf){return V0(e,t,"words")}const Cl={long:"That is a bit long!",link:"No links, please!",contact:"Keep numbers and contact info secret!",personal:"Keep personal info secret!",words:"Let's use kind words!",mail:"Oops, try different words!",empty:""},U0={};for(const e of["АA","аa","ВB","вb","ЕE","еe","КK","кk","МM","мm","НH","нh","ОO","оo","РP","рp","СC","сc","ТT","тt","УY","уy","ХX","хx","ІI","іi","ЈJ","јj","ЅS","ѕs","ЁE","ёe","ЇI","їi","ΑA","ΕE","ΖZ","ΗH","ΙI","ΚK","ΜM","ΝN","ΟO","ΡP","ΤT","ΥY","ΧX","αa","εe","ζz","ιi","κk","νv","οo","ρp","τt","υu","χx"])U0[e[0]]=e[1];function wv(e){let t="";for(const n of e)t+=U0[n]??n;return t}function bv(e){return wv(String(e).normalize("NFKC")).replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff\p{M}]/gu,"").replace(/[\p{Extended_Pictographic}\p{S}\p{P}]+/gu,"").replace(/\s+/g," ").trim()}function vv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(()=>{const e=[...new Set(Ib.map(t=>bv(t)).filter(t=>t.length>=2))].sort((t,n)=>n.length-t.length);return new RegExp(`(^|[^A-Za-z])(?:${e.map(vv).join("|")})(?![A-Za-z])`,"gi")})();const ph=(e,t,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(t,Math.min(n,e)):null,kv=(e,t,n=80)=>typeof e=="string"&&e.length<=n&&t.test(e)?e:null,_v=/^#[0-9a-fA-F]{3,8}$/,$v=["little","kid","adult"];function xv(e){if(!e||typeof e!="object")return null;const t={};for(const n of["skin","hair","shirt","pants"])if(n in e){const s=kv(e[n],_v,9);if(!s)return null;t[n]=s}if("hairStyle"in e){const n=ph(e.hairStyle,0,3);if(n===null)return null;t.hairStyle=Math.round(n)}if("acc"in e){const n=ph(e.acc,0,3);if(n===null)return null;t.acc=Math.round(n)}if("size"in e){if(!$v.includes(e.size))return null;t.size=e.size}if("flip"in e){if(typeof e.flip!="boolean")return null;t.flip=e.flip}return"look2"in e&&(t.look2=xa(e.look2)??null),"costume"in e&&(t.costume=Eo(e.costume)),Object.keys(t).length?t:null}function Ea(e){const t=Es({id:"x"}),n=xv({skin:e?.skin,hair:e?.hair,hairStyle:e?.hairStyle,shirt:e?.shirt,pants:e?.pants,size:e?.size,acc:e?.acc})??{},s=i=>n[i]??t[i],o={skin:s("skin"),hair:s("hair"),hairStyle:s("hairStyle"),shirt:s("shirt"),pants:s("pants"),size:s("size"),acc:s("acc")};if(e&&typeof e=="object"&&"look2"in e){const i=xa(e.look2);i&&(o.look2=i)}if(e&&typeof e=="object"&&"costume"in e){const i=Eo(e.costume);o.costume=i??""}return o}const hh=4,Mv=["Mittens","Luna","Biscuit","Pumpkin","Whiskers","Mochi","Pepper","Noodle","Ginger","Socks"],Lv=["Buddy","Coco","Max","Daisy","Peanut","Rocket","Bella","Waffles","Scout","Honey"];function Q0(e){const t=String(e??"").normalize("NFC").replace(/\s+/g," ").trim();return!/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u.test(t)||(t.match(/\d/g)??[]).length>2?null:Zb(t).ok?t:null}function Ev(e,t=[]){return V0(e,ds,"mail")}function N0(e){return typeof e.freeMail=="boolean"?e.freeMail:e.freeChat}const Af=2900,gd=[{kind:"swing",x:430,y:500},{kind:"swing",x:570,y:500},{kind:"blanket",x:1730,y:548},{kind:"blanket",x:1850,y:548},{kind:"bench",x:2025,y:512},{kind:"bench",x:2105,y:512},{kind:"bench",x:2225,y:512},{kind:"bench",x:2305,y:512}],ve={top:{x:905,y:330},bottom:{x:1110,y:545},ladder:850},mt={x0:2440,x1:2840,y0:470,y1:585},Sv=(e,t)=>e.where===t.where&&(e.where!=="house"||e.houseId===t.houseId&&e.room===t.room),Tv=(e,t)=>Sv(e,t)&&Math.abs(e.x-t.x)<=Hb&&Math.abs(e.y-t.y)<=Wb;function Ga(e){try{return Lf(e)}catch{return e}}const md=kt("cozy-hood"),Go=()=>{try{return JSON.parse(localStorage.getItem(md)??"null")}catch{return null}},Vn=e=>{try{e?localStorage.setItem(md,JSON.stringify(e)):localStorage.removeItem(md)}catch{}};function Il(){const e=new URLSearchParams(location.search).get("hood");return e?e.replace(/\/$/,""):"https://cozy-hood-preview.andrewmunruh.workers.dev".replace(/\/$/,"")}async function Pv(e){const t=await fetch(e+"/api/create",{method:"POST"});if(!t.ok)throw new Error("create failed "+t.status);return t.json()}async function Av(e,t){const n=await fetch(`${e}/api/hood/${encodeURIComponent(t)}`);if(n.status===429)return{slow:!0};if(!n.ok)throw new Error("lookup failed");return n.json()}const yi=e=>e===void 0?"u":JSON.stringify(e,(t,n)=>n&&typeof n=="object"&&!Array.isArray(n)?Object.fromEntries(Object.keys(n).sort().map(s=>[s,n[s]])):n);function uh(e,t){if(t.type.startsWith("item/")&&t.type!=="item/add"&&"id"in t&&"room"in t)return yi(e.rooms[t.room]?.items.find(n=>n.id===t.id)??null);if(t.type.startsWith("room/")&&t.type!=="room/switch"&&"room"in t){const n=e.rooms[t.room];return yi(n?[n.wallpaper,n.floor,n.pattern,n.wallTile??null,n.floorTile??null]:null)}if(t.type==="cat/move"||t.type==="cat/set")return yi(e.cat??null);if(t.type==="dog/set")return yi(e.dog??null);if((t.type==="char/update"||t.type==="char/move"||t.type==="char/delete"||t.type==="char/hold"||t.type==="char/release")&&"id"in t)return yi(e.characters.find(n=>n.id===t.id)??null)}const Rv=new Set(["dog/kennel","baby/meet","baby/name"]),Cv=1e4,Iv=1e4,Ov=5e3,Bv=3e3,gh=e=>e.type==="item/move"?"im:"+e.id:e.type==="char/move"?"cm:"+e.id:e.type==="item/size"?"is:"+("id"in e?e.id:""):null;class Ol{constructor(t){this.cfg=t,this.ws=null,this.pid="",this.settings={freeChat:!0},this.players=new Map,this.houses=new Map,this.presence=new Map,this.status="offline",this.speaksSit=!1,this.speaksBaby=!1,this.speaksAmb=!1,this.speaksArt=!1,this.speaksNeeds=!1,this.replaced=!1,this.ranch={plots:[],skew:0},this.tables=new Map,this.handlers=new Map,this.cid=1,this.flushT=0,this.presT=0,this.lastPres=null,this.presDirty=!1,this.closedByUs=!1,this.retry=0,this.retryT=0,this.epoch=0,this.stableT=0,this.outbox=[],this.saidAt=new WeakMap,this.speaksHb=!1,this.lastRx=0,this.hbT=0,this.hbWaitT=0,this.hbMissed=0,this.hiddenAt=0,this.wakeOn=!1,this.resent={again:0,dropped:0},this.wake=n=>{if(n.type==="visibilitychange"&&document.visibilityState==="hidden"){this.hiddenAt=Date.now();return}if(this.closedByUs||this.replaced||!this.cfg.token)return;const s=this.hiddenAt?Date.now()-this.hiddenAt:0;if(this.hiddenAt=0,this.status==="offline"){this.retry=0,this.connect();return}if(this.status==="online"){if(this.speaksHb){this.hbWaitT&&(clearTimeout(this.hbWaitT),this.hbWaitT=0),this.probe(Bv);return}(n.type==="online"||n.type==="pageshow"&&n.persisted||s>3e3)&&this.dropDead()}}}on(t,n){(this.handlers.get(t)??this.handlers.set(t,[]).get(t)).push(n)}emit(t,...n){this.handlers.get(t)?.forEach(s=>s(...n))}send(t){return this.ws?.readyState!==WebSocket.OPEN?!1:(this.ws.send(JSON.stringify(t)),!0)}reliable(t){this.send(t)||(t.t==="lock"?this.outbox=this.outbox.filter(n=>!(n.t==="lock"&&n.houseId===t.houseId)):(t.t==="look"||t.t==="dog")&&(this.outbox=this.outbox.filter(n=>n.t!==t.t)),(t.t==="say"||t.t==="fx")&&this.saidAt.set(t,Date.now()),this.outbox.push(t),this.outbox.length>8&&this.outbox.splice(0,this.outbox.length-8))}flushOutbox(){if(this.ws?.readyState!==WebSocket.OPEN||!this.outbox.length)return;const t=this.outbox;this.outbox=[];const n=Date.now();for(const s of t){const o=this.saidAt.get(s);o!==void 0&&n-o>Cv||this.send(s)||this.outbox.push(s)}}scheduleRetry(){if(this.closedByUs||this.replaced||!this.cfg.token||this.retryT)return;const t=this.epoch,n=Math.min(15e3,400*2**Math.min(this.retry,6));this.retry++,this.retryT=window.setTimeout(()=>{this.retryT=0,!(t!==this.epoch||this.closedByUs||this.replaced||!this.cfg.token)&&this.connect()},n)}armStable(){this.stableT&&clearTimeout(this.stableT),this.stableT=window.setTimeout(()=>{this.stableT=0,this.retry=0},1e4)}clearStable(){this.stableT&&(clearTimeout(this.stableT),this.stableT=0)}stopHb(){clearInterval(this.hbT),this.hbT=0,this.hbMissed=0,this.hbWaitT&&(clearTimeout(this.hbWaitT),this.hbWaitT=0)}startHb(){this.stopHb(),this.speaksHb&&(this.hbT=window.setInterval(()=>this.probe(Ov),Iv))}probe(t){if(!this.speaksHb||this.status!=="online"||this.hbWaitT)return;const n=Date.now();this.send({t:"ping"})&&(this.hbWaitT=window.setTimeout(()=>{if(this.hbWaitT=0,this.status==="online"){if(this.lastRx>=n){this.hbMissed=0;return}++this.hbMissed>=2?(this.hbMissed=0,this.dropDead()):this.probe(t)}},t))}dropDead(){const t=this.ws;if(t){t.onclose=null,t.onmessage=null,t.onopen=null;try{t.close()}catch{}this.ws=null,this.clearStable(),this.stopHb(),this.status="offline",this.emit("status",this.status),this.retry=0,this.scheduleRetry()}}listenWake(t){if(t===this.wakeOn||typeof document>"u")return;this.wakeOn=t;const n=t?"addEventListener":"removeEventListener";document[n]("visibilitychange",this.wake),window[n]("pageshow",this.wake),window[n]("online",this.wake)}connect(t){this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.closedByUs=!1,this.replaced=!1,this.status="connecting",this.emit("status",this.status),this.stopHb(),this.listenWake(!0);const n=this.ws;return new Promise(s=>{let o=!1;const i=r=>{o||(o=!0,s(r))},a=new WebSocket(this.cfg.url.replace(/^http/,"ws")+"/ws/"+encodeURIComponent(this.cfg.id??this.cfg.code));if(this.ws=a,n&&n!==a)try{n.close()}catch{}a.onopen=()=>{t&&!this.cfg.token?this.send({t:"join",...t,v:hh,pet:1,mail:1,sit:1,fit:1,baby:1,amb:1,halloween:1,cos:1,needs:1,art:1,hb:1}):this.cfg.token?this.send({t:"hello",token:this.cfg.token,v:hh,pet:1,mail:1,sit:1,fit:1,baby:1,amb:1,halloween:1,cos:1,needs:1,art:1,hb:1}):i("notoken")},a.onmessage=r=>{this.lastRx=Date.now(),this.hbMissed=0;const l=JSON.parse(r.data);this.handle(l),l.t==="welcome"&&(this.armStable(),i("ok")),l.t==="error"&&i(l.code+(l.msg?":"+l.msg:"")),l.t==="removed"&&i("removed")},a.onclose=r=>{if(this.ws===a){if(this.clearStable(),this.ws=null,this.status="offline",this.stopHb(),i("closed"),r.code===4e3){this.replaced=!0,this.emit("status",this.status),this.emit("replaced");return}this.emit("status",this.status),this.scheduleRetry()}},a.onerror=()=>{}})}close(){this.closedByUs=!0,this.replaced=!1,this.epoch++,this.outbox=[],this.clearStable(),this.stopHb(),this.listenWake(!1),this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.presT&&(clearTimeout(this.presT),this.presT=0);try{this.ws?.close()}catch{}this.ws=null,this.status="offline",clearInterval(this.flushT)}handle(t){switch(t.t){case"joined":this.cfg.token=t.token,this.cfg.pid=t.pid,Vn(this.cfg);break;case"welcome":this.pid=t.pid,this.settings=t.settings,this.status="online",this.speaksSit=t.sit===1,this.speaksBaby=t.baby===1,this.speaksAmb=t.amb===1,this.speaksArt=t.art===1,this.speaksNeeds=t.needs===1,this.speaksHb=t.hb===1,this.players=new Map(t.players.map(n=>[n.pid,n]));{const n=this.houses;this.houses=new Map;for(const s of t.houses){const{state:o,...i}=s,a=n.get(s.id),r=Ga(o);this.houses.set(s.id,{meta:i,confirmed:r,pending:a?this.carry(r,a.pending):[],view:null})}}this.presence=new Map(Object.entries(t.presence)),this.presence.delete(this.pid),t.ranch&&(this.ranch={plots:t.ranch.plots,skew:t.ranch.now-Date.now()});{const n=new Map;for(const s of t.tables??[])n.set(s.tb,this.stampTable(s));this.tables=n}clearInterval(this.flushT),this.flushT=window.setInterval(()=>this.flush(),60),this.lastPres&&(this.presDirty=!0),this.flushPres(),this.flushOutbox(),this.startHb(),this.emit("welcome"),this.emit("status",this.status);break;case"act":{const n=this.houses.get(t.houseId);if(!n)return;const s=t.action,o=s.id&&s.room?n.confirmed.rooms[s.room]?.items.find(a=>a.id===s.id):void 0;n.confirmed=Wi(Ga(n.confirmed),t.action);const i=t.by===this.pid&&n.pending[0]?.cid===t.cid;i&&n.pending.shift(),n.view=null,i||this.emit("act",t.houseId,t.action,t.by,o?.kind??"");break}case"nack":{const n=this.houses.get(t.houseId);if(!n)return;const s=n.pending.find(o=>o.cid===t.cid)?.action??null;n.pending=n.pending.filter(o=>o.cid!==t.cid),t.state&&(n.confirmed=Ga(t.state)),n.view=null,this.emit("reset",t.houseId,t.reason,s);break}case"pres":t.pid!==this.pid&&(t.p?this.presence.set(t.pid,t.p):this.presence.delete(t.pid),this.emit("pres",t.pid));break;case"players":this.players=new Map(t.players.map(n=>[n.pid,n])),this.emit("players");break;case"house":{const{state:n,...s}=t.house;this.houses.set(s.id,{meta:s,confirmed:Ga(n),pending:[],view:null}),this.emit("houses");break}case"houseMeta":{const n=this.houses.get(t.meta.id);n&&(n.meta=t.meta,this.emit("houses"),this.emit("houseMeta",t.meta.id));break}case"houseGone":this.houses.delete(t.houseId),this.emit("houses"),this.emit("houseGone",t.houseId);break;case"settings":this.settings=t.settings,this.emit("settings");break;case"bubble":this.emit("bubble",t.pid,t.b);break;case"fx":this.emit("fx",t.pid,t.fx);break;case"knocked":this.emit("knocked",t.houseId,t.name);break;case"ranch":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch");break;case"ranchFail":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch"),this.emit("ranchFail",t.reason);break;case"noride":this.emit("noride",t.ride);break;case"table":{const n=this.stampTable(t.table);this.tables.set(n.tb,n),this.emit("table",n);break}case"tblFail":this.emit("tblFail",t.tb,t.reason);break;case"sayFail":this.emit("sayFail",t.reason);break;case"mailbox":{const n=this.houses.get(t.houseId);if(!n)return;if(t.mailbox?.letters?.length)n.confirmed={...n.confirmed,mailbox:t.mailbox};else{const{mailbox:s,...o}=n.confirmed;n.confirmed=o}n.view=null,this.emit("mailbox",t.houseId);break}case"mailFail":this.emit("mailFail",t.reason);break;case"art":this.emit("art",t.houseId,t.arts);break;case"artFail":this.emit("artFail",t.houseId,t.id,t.reason);break;case"parentInfo":this.emit("parentInfo",t);break;case"error":this.emit("error",t.code),t.code==="badtoken"&&(this.cfg.token=void 0,this.cfg.pid=void 0,Vn(this.cfg));break;case"pong":break;case"removed":this.closedByUs=!0,this.emit("removed");break}}stampTable(t){const n=this.tables.get(t.tb),s=n&&n.away===t.away&&n.receivedAt?n.receivedAt:Date.now();return{...t,receivedAt:s}}carry(t,n){const s=[];let o=t;for(const i of n){const a=uh(o,i.action);let r;if(a!==void 0&&i.base!==void 0&&i.base!==null?r=a===i.base:r=!i.sent||Rv.has(i.action.type),i.sent&&(r?this.resent.again++:this.resent.dropped++),!!r){s.push({cid:this.cid++,action:i.action,sent:!1,base:i.base});try{o=Wi(o,i.action)}catch{}}}return s}view(t){const n=this.houses.get(t);return n?n.view??=n.pending.reduce((s,o)=>Wi(s,o.action),n.confirmed):null}myHouseId(){return this.players.get(this.pid)?.houseId??""}canEdit(t){const n=this.houses.get(t);return!!n&&(!n.meta.locked||n.meta.ownerId===this.pid)}dispatch(t,n){const s=this.houses.get(t);if(!s)return;const o=gh(n),i=s.pending[s.pending.length-1];if(o&&i&&!i.sent&&gh(i.action)===o)i.action=n;else{const a=this.view(t);s.pending.push({cid:this.cid++,action:n,sent:!1,base:a?uh(a,n)??null:null})}s.view=null}flush(){for(const[t,n]of this.houses)for(const s of n.pending)!s.sent&&this.send({t:"act",houseId:t,cid:s.cid,action:s.action})&&(s.sent=!0);this.flushPres()}setPresence(t){this.lastPres=t,this.presDirty=!0,this.presT||this.flushPres()}flushPres(){if(!(!this.presDirty||!this.lastPres)){if(!this.send({t:"pres",p:this.lastPres})){!this.closedByUs&&!this.presT&&(this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90));return}this.presDirty=!1,this.presT&&clearTimeout(this.presT),this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90)}}myPresence(){return this.lastPres}say(t){this.reliable({t:"say",b:t})}lock(t,n){this.reliable({t:"lock",houseId:t,locked:n})}setLook(t){this.reliable({t:"look",look:t});const n=this.players.get(this.pid);n&&(n.look=t)}setDog(t){this.reliable({t:"dog",dog:t});const n=this.players.get(this.pid);n&&(n.dog=t)}fx(t){this.reliable({t:"fx",fx:t})}knock(t){this.send({t:"knock",houseId:t})}ranchOp(t){this.reliable({t:"ranch",o:t})}tbl(t){this.reliable({t:"tbl",...t})}saveArt(t,n,s){return this.send({t:"art",op:"save",houseId:t,id:n,data:s})}getArt(t,n){return this.send({t:"art",op:"get",houseId:t,ids:n})}sendMail(t,n,s,o){this.reliable({t:"mail",op:"send",houseId:t,text:n,color:s,sticker:o})}readMail(t,n){this.reliable({t:"mail",op:"read",houseId:t,id:n})}dropMail(t,n){this.reliable({t:"mail",op:"drop",houseId:t,id:n})}now(){return Date.now()+this.ranch.skew}parent(t){this.cfg.parentKey&&this.reliable({t:"parent",key:this.cfg.parentKey,...t})}}function zv(e,t,n,s="living"){let o=s;const i=[],a=()=>({...e.view(t),currentRoom:o,soundOn:n.get()}),r=l=>{if(e.houses.has(t)){const c=a();i.forEach(d=>d(c,l))}};return e.on("act",(l,c)=>{l===t&&r(c)}),e.on("reset",l=>{l===t&&r({type:"game/reset"})}),{houseId:t,get:a,subscribe(l){i.push(l)},dispatch(l){if(l.type==="room/switch")o=l.room;else if(l.type==="settings/sound")n.set(l.on);else{if(l.type==="game/reset")return;if(!e.canEdit(t)||l.type.startsWith("baby/")&&!e.speaksBaby||l.type==="item/power"&&!e.speaksAmb||l.type.startsWith("need/")&&!e.speaksNeeds)return;e.dispatch(t,l)}r(l)}}}const rt="#5a3d5c",pe=`stroke="${rt}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,yd=[{name:"Tabby",body:"#ffb26b",stripe:"#e8893a",belly:"#ffe3c4"},{name:"Smokey",body:"#b9b6c9",stripe:"#8f8ba3",belly:"#ecebf3"},{name:"Tuxedo",body:"#4f4660",stripe:"",belly:"#ffffff"},{name:"Calico",body:"#fff6ec",stripe:"",belly:"#fff6ec"}],wd=[{name:"Pup",body:"#f2d0a4",ear:"#b07d54",snout:"#fbe7cc"},{name:"Poodle",body:"#fff0f6",ear:"#ffc8dd",snout:"#fff7fb"},{name:"Dachshund",body:"#c07a45",ear:"#7d4a26",snout:"#d99a68"},{name:"Golden",body:"#f4b860",ear:"#e09a3e",snout:"#fbd9a0"},{name:"Spotty",body:"#ffffff",ear:"#4a3f52",snout:"#ffffff"}],Dv=(e,t,n,s=!1)=>s?`<path d="M${e-3} ${n} q3 3 6 0 M${t-3} ${n} q3 3 6 0" fill="none" ${pe} stroke-width="2.5"/>`:`<circle cx="${e}" cy="${n}" r="2.8" fill="${rt}"/><circle cx="${t}" cy="${n}" r="2.8" fill="${rt}"/><circle cx="${e+.9}" cy="${n-.9}" r=".9" fill="#fff"/><circle cx="${t+.9}" cy="${n-.9}" r=".9" fill="#fff"/>`,bd=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9bb5" opacity=".75"/>`;function Yo(e,t="stand"){const n=yd[e]??yd[0],s="#ffb3c6",o=(i,a,r,l)=>`
    <path d="M${i-13} ${a-8} L${i-10} ${a-25} L${i-1} ${a-13} Z" fill="${n.body}" ${pe}/><path d="M${i-10.5} ${a-11} L${i-9.5} ${a-20} L${i-4} ${a-13} Z" fill="${s}"/>
    <path d="M${i+1} ${a-13} L${i+11} ${a-26} L${i+13} ${a-7} Z" fill="${e===3?"#f4a259":n.body}" ${pe}/><path d="M${i+4} ${a-13} L${i+10} ${a-21} L${i+11} ${a-11} Z" fill="${s}"/>
    <circle cx="${i}" cy="${a}" r="${r}" fill="${n.body}" ${pe}/>
    ${e===3?`<path d="M${i+2} ${a-r+1} a${r} ${r} 0 0 1 ${r-3} ${r-2} q-6 2 -${r-3} -${r-3}z" fill="#f4a259"/>`:""}
    ${e===2?`<ellipse cx="${i+2}" cy="${a+7}" rx="9" ry="7" fill="#fff"/>`:""}
    ${n.stripe?`<path d="M${i-4} ${a-r+2} v5 M${i+2} ${a-r+1} v6 M${i+8} ${a-r+3} v4" ${pe} stroke="${n.stripe}" stroke-width="2.5"/>`:""}
    ${Dv(i-4,i+7,a,l)}
    <path d="M${i+3} ${a+4} l-2.5 -2 h5 z" fill="#ff8fab"/><path d="M${i+.5} ${a+6} q2.5 2.5 5 0" fill="none" ${pe} stroke-width="2"/>
    ${bd(i-8,a+5)}${bd(i+12,a+5)}
    <path d="M${i+r-2} ${a+3} l9 -2 M${i+r-2} ${a+6} l9 2" ${pe} stroke-width="1.6"/>`;return t==="nap"?`<svg viewBox="0 0 120 100" class="catsvg nap">
    <g class="breathe"><path class="tail" d="M28 84 Q22 96 64 94" fill="none" stroke="${rt}" stroke-width="11" stroke-linecap="round"/><path d="M28 84 Q22 96 64 94" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="58" cy="76" rx="36" ry="18" fill="${n.body}" ${pe}/>
    ${e===3?'<ellipse cx="44" cy="72" rx="12" ry="8" fill="#f4a259"/><ellipse cx="66" cy="70" rx="9" ry="6" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M44 62 q3 6 0 12 M56 61 q3 6 0 12 M68 62 q3 6 0 11" fill="none" ${pe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    ${o(90,76,15,!0)}</g></svg>`:t==="sit"?`<svg viewBox="0 0 120 100" class="catsvg sit">
    <path class="tail" d="M50 92 Q18 96 24 70" fill="none" stroke="${rt}" stroke-width="11" stroke-linecap="round"/><path class="tail" d="M50 92 Q18 96 24 70" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="64" cy="70" rx="20" ry="25" fill="${n.body}" ${pe}/>
    <ellipse cx="70" cy="74" rx="10" ry="15" fill="${n.belly}"/>
    ${e===3?'<ellipse cx="54" cy="66" rx="9" ry="12" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M50 60 q5 2 4 8 M49 72 q5 2 4 8" fill="none" ${pe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    <rect x="62" y="74" width="9" height="21" rx="4.5" fill="${n.body}" ${pe}/><rect x="74" y="74" width="9" height="21" rx="4.5" fill="${n.body}" ${pe}/>
    ${e===2?'<ellipse cx="66.5" cy="93" rx="4" ry="2.5" fill="#fff"/><ellipse cx="78.5" cy="93" rx="4" ry="2.5" fill="#fff"/>':""}
    ${o(72,36,17,!1)}</svg>`:`<svg viewBox="0 0 120 100" class="catsvg stand">
    <path class="tail" d="M32 58 Q8 54 12 26" fill="none" stroke="${rt}" stroke-width="11" stroke-linecap="round"/><path class="tail" d="M32 58 Q8 54 12 26" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <rect class="leg b" x="34" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${pe}/><rect class="leg a" x="74" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${pe}/>
    <ellipse cx="58" cy="58" rx="32" ry="17" fill="${n.body}" ${pe}/>
    <ellipse cx="64" cy="66" rx="20" ry="7" fill="${n.belly}"/>
    ${e===3?'<ellipse cx="46" cy="52" rx="12" ry="9" fill="#f4a259"/><ellipse cx="68" cy="50" rx="9" ry="7" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M44 43 q3 6 0 12 M56 42 q3 6 0 12 M68 43 q3 6 0 11" fill="none" ${pe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    <rect class="leg a" x="44" y="64" width="9" height="30" rx="4.5" fill="${n.body}" ${pe}/><rect class="leg b" x="84" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${pe}/>
    ${e===2?'<ellipse cx="48.5" cy="92" rx="4" ry="2.5" fill="#fff"/><ellipse cx="88.5" cy="92" rx="4" ry="2.5" fill="#fff"/>':""}
    ${o(90,40,17,!1)}</svg>`}function ca(e,t="stand"){const n=wd[e]??wd[0],s=t==="sleep",o=e===2,i=e===1,a=e===3,r=e===4,l=o?66:58,c=o?70:62,d=94-c,f=o?102:92,h=o?50:40,u=(_,P)=>i?`<rect class="leg ${P}" x="${_+2}" y="${c}" width="6" height="${d}" rx="3" fill="${n.body}" ${pe}/><circle class="leg ${P}" cx="${_+5}" cy="91" r="6" fill="${n.body}" ${pe}/>`:`<rect class="leg ${P}" x="${_}" y="${c}" width="10" height="${d}" rx="5" fill="${n.body}" ${pe}/>`,y=i?`<circle cx="44" cy="58" r="15" fill="${n.body}" ${pe}/><circle cx="70" cy="56" r="17" fill="${n.body}" ${pe}/><ellipse cx="57" cy="58" rx="22" ry="12" fill="${n.body}"/>`:`<ellipse cx="${o?62:58}" cy="${l}" rx="${o?42:32}" ry="${o?13:17}" fill="${n.body}" ${pe}/>`,g=r?`<circle cx="46" cy="54" r="5" fill="${rt}"/><circle cx="64" cy="62" r="4" fill="${rt}"/><circle cx="72" cy="50" r="3.5" fill="${rt}"/><circle cx="38" cy="64" r="3" fill="${rt}"/>`:"",v=i?`<g class="tail"><path d="M30 52 L22 38" ${pe}/><circle cx="21" cy="34" r="7" fill="${n.body}" ${pe}/></g>`:a?`<path class="tail" d="M30 52 Q10 50 14 30 Q20 40 30 46" fill="${n.body}" ${pe}/>`:`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${rt}" stroke-width="9" stroke-linecap="round"/>`,w=!i&&!a?`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`:"",m=`
    ${i?`<circle cx="${f-2}" cy="${h-16}" r="10" fill="${n.body}" ${pe}/>`:""}
    <circle cx="${f}" cy="${h}" r="17" fill="${n.body}" ${pe}/>
    ${r?`<circle cx="${f-6}" cy="${h-8}" r="4" fill="${rt}"/>`:""}
    <ellipse cx="${f+13}" cy="${h+7}" rx="11" ry="8" fill="${n.snout}" ${pe}/>
    <circle cx="${f+22}" cy="${h+4}" r="4" fill="${rt}"/>
    <path d="M${f+14} ${h+12} q4 3 8 0" fill="none" ${pe} stroke-width="2"/>
    ${s?"":`<path class="tongue" d="M${f+16} ${h+13} q2 7 6 0" fill="#ff8fab" ${pe} stroke-width="2"/>`}
    ${s?`<path d="M${f+2} ${h-4} q3 3 6 0" fill="none" ${pe} stroke-width="2.4"/>`:`<circle cx="${f+5}" cy="${h-3}" r="3" fill="${rt}"/><circle cx="${f+6}" cy="${h-4}" r="1" fill="#fff"/>`}
    ${bd(f+2,h+8)}
    ${i?`<circle cx="${f-9}" cy="${h+8}" r="9" fill="${n.ear}" ${pe}/>`:`<ellipse class="ear" cx="${f-9}" cy="${h+4}" rx="7" ry="${a||o?14:12}" fill="${n.ear}" ${pe} transform="rotate(12 ${f-9} ${h+4})"/>`}
    <path d="M${f-12} ${h+14} q10 6 20 2" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round"/><circle cx="${f-1}" cy="${h+19}" r="3" fill="#ffd166" ${pe} stroke-width="1.5"/>`,b=i?`<g class="tail"><path d="M42 86 L28 80" ${pe}/><circle cx="25" cy="78" r="7" fill="${n.body}" ${pe}/></g>`:`<path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${rt}" stroke-width="9" stroke-linecap="round"/><path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`;return t==="sit"||t==="sleep"?`<svg viewBox="0 0 130 100" class="dogsvg ${s?"sleep":"sit"}">${b}
    <ellipse cx="60" cy="70" rx="22" ry="24" fill="${n.body}" ${pe}/>${r?`<circle cx="54" cy="66" r="5" fill="${rt}"/><circle cx="64" cy="80" r="4" fill="${rt}"/>`:""}
    ${u(62,"a")}${u(74,"b")}<g transform="translate(-22 -2)">${m}</g></svg>`:`<svg viewBox="0 0 130 100" class="dogsvg stand">${v}${w}
    ${u(o?30:34,"b")}${u(o?82:72,"a")}
    ${y}${g}
    ${u(o?42:46,"a")}${u(o?94:84,"b")}
    ${m}</svg>`}const q0=e=>{let t=2166136261;for(const n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},Js=(e,t)=>{let n=(e^Math.imul(t,2654435761))>>>0;return n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),n^=n>>>16,(n>>>0)/4294967296},mh=18,Hv={1:.35,2:.6};function Wv(e,t,n){return e-t*Hv[n]}function Vv(e,t){const s=Math.floor(t/1e3/2.8);return Js(q0(e||"pup"),s)<.62?"rest":"peek"}function Uv(e,t,n,s,o=!1){const i=q0(e.name+":"+e.coat+":"+e.room+":"+Math.round(e.x)+(n?":t"+Math.round(n.x):"")),a=t/1e3,r=Math.floor(a/mh),l=a-r*mh;if(!n){const w=V=>Math.max(160,Math.min(2240,e.x+(Js(i,V)-.5)*760)),m=w(r-1);let b=w(r);const _=Js(i+7,r),P=_<.45?"nap":_<.75?"sit":"groom",$=!!(s&&P==="nap"&&Js(i+13,r)<.72);$&&s&&(b=Math.max(160,Math.min(2240,s.x)));const M=Math.abs(b-m),z=Math.min(5,M/110);return l<z&&!o?{x:m+(b-m)*(l/z),mood:"walk",flip:b<m,perch:0,curl:0}:{x:b,mood:P,flip:b<m,perch:0,curl:$?1:0}}const c=Math.max(160,Math.min(2240,n.x)),d=Js(i+5,r)<.45?2:1,f=Math.max(160,Math.min(2240,c+(Js(i,r)-.5)*420)),h=Math.abs(c-f),u=Math.min(4.2,Math.max(.6,h/160)),y=c<f;if(l<u&&!o)return{x:f+(c-f)*(l/u),mood:"walk",flip:y,perch:0,curl:0};const g=Js(i+11,r),v=g<.34?"nap":g<.67?"sit":"play";return{x:c,mood:v,flip:y,perch:d,curl:0}}const Qr="#5a3d5c",He=`stroke="${Qr}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,Bo=[`<svg viewBox="0 0 48 48"><path d="M24 40 C16 32 6 26 10 16 C14 8 24 12 24 20 C24 12 34 8 38 16 C42 26 32 32 24 40 Z" fill="#ff6b9a" ${He}/></svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l5 12 13 1 -10 8 3 13 -11 -7 -11 7 3 -13 -10 -8 13 -1z" fill="#ffd166" ${He}/></svg>`,`<svg viewBox="0 0 48 48"><circle cx="24" cy="22" r="6" fill="#ff8fab" ${He}/>${[0,60,120,180,240,300].map(e=>`<circle cx="${24+Math.cos(e*Math.PI/180)*12}" cy="${22+Math.sin(e*Math.PI/180)*12}" r="5" fill="#ffd166" ${He}/>`).join("")}<path d="M24 34 V44" ${He}/></svg>`,`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="14" ry="10" fill="#ffb26b" ${He}/><circle cx="34" cy="20" r="8" fill="#ffc46b" ${He}/><path d="M28 14 L30 6 L36 14" fill="#ffb26b" ${He}/><circle cx="32" cy="19" r="1.4" fill="${Qr}"/><circle cx="37" cy="19" r="1.4" fill="${Qr}"/></svg>`,`<svg viewBox="0 0 48 48">${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M8 ${30-t*4} Q24 ${10-t*3} 40 ${30-t*4}" fill="none" stroke="${e}" stroke-width="4"/>`).join("")}</svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l3 10 10 1 -8 6 3 10 -8 -5 -8 5 3 -10 -8 -6 10 -1z" fill="#fff3b0" ${He}/><circle cx="12" cy="34" r="3" fill="#ff8fab" ${He}/><circle cx="36" cy="36" r="2.4" fill="#bde0fe" ${He}/></svg>`];function yh(e){const t=e?`<g class="flag"><path d="M30 16 V6" ${He}/><path d="M30 6 H42 L38 11 L42 16 H30 Z" fill="#ff6b6b" ${He}/></g>`:`<g class="flag"><path d="M18 28 H28" ${He}/><path d="M18 22 H28 L25 25 L28 28 H18 Z" fill="#ffd166" ${He}/></g>`;return`<svg viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="68" rx="18" ry="3" fill="#000" opacity=".12"/>
    <rect x="30" y="40" width="5" height="26" rx="2" fill="#c99366" ${He}/>
    <path d="M8 40 V22 Q8 8 32 8 Q56 8 56 22 V40 Z" fill="#8ecae6" ${He}/>
    <path d="M8 28 H56" ${He}/>
    <rect x="14" y="32" width="36" height="16" rx="4" fill="#fff6e6" ${He}/>
    <circle cx="32" cy="40" r="3" fill="${Qr}"/>
    ${t}
  </svg>`}function Qv(e,t=[]){const n=Ev(e,t);return n.ok?{ok:!0,text:n.text}:{ok:!1,msg:n.reason==="empty"?"Write a little note!":Cl[n.reason]||"Oops, try different words!"}}const Nv={...Cl,empty:"Write a little note!",slow:"Let's wait a moment!",full:"This mailbox is full!",notyours:"That's her mailbox. Only she can open it 💌",nohouse:"That house is not on the street.",gone:"That letter is already gone.",toobig:"The mailbox is too full!",presetsOnly:"Typing is off. Pick a phrase!",unread:"She still has your letters! Wait until she reads them."};function qv(e){return Nv[e]||"Let's try that again!"}function Fv(e){let t="",n="",s=!1,o="",i=0,a=0,r=-1,l="",c="";const d=()=>document.getElementById("mailCue");d()?.addEventListener("click",()=>{e.openOwn()});function f(){t="",n="",document.getElementById("mailSheet")?.remove()}function h(){let w=document.getElementById("mailSheet");return w||(w=document.createElement("div"),w.id="mailSheet",w.className="sheet mailSheet",w.innerHTML='<div class="card" id="mailCard"></div>',document.body.appendChild(w),w.addEventListener("click",m=>{const b=m.target;if(b===w||b.closest('[data-m="close"]')){f();return}y(b)}),w.addEventListener("input",m=>{const b=m.target;if(b.id!=="mailText")return;const _=document.getElementById("mailCount");_&&(_.textContent=`${b.value.length}/${ds}`)})),w}function u(){if(!t)return;const w=h().querySelector("#mailText")?.value??"",m=e.mine(t),b=e.lettersOf(t),_=e.houseName(t),P=h().querySelector("#mailCard");if(n&&m&&!s){const M=b.find(z=>z.id===n);if(M&&M.text){g(M);return}n=""}if(s||!m){const M=e.freeType(),z=o?`Reply to ${e.houseName(o)||"your friend"}`:m?"Leave a letter":`Letter for ${_}`,V=M?`<textarea id="mailText" class="mailBox" maxlength="${ds}" placeholder="Hi! Come play!"></textarea>
        <div class="mailCount" id="mailCount">0/${ds}</div>`:`<h3>Phrase</h3><div class="phrases mailPhrases">${Ui.map((F,oe)=>`<button type="button" data-phrase="${oe}" class="${oe===r?"on":""}">${xt(F)}</button>`).join("")}</div>`;P.innerHTML=`<button class="close" data-m="close">✕</button><h2>${xt(z)}</h2>
        <p class="hint">${M?"A short note. Your name goes on it for you.":"Pick a phrase. Your name goes on it for you."}</p>
        ${V}
        <h3>Paper</h3><div class="mailRow">${ns.map((F,oe)=>`<button class="swatch ${oe===i?"on":""}" data-color="${oe}" style="background:${F}" aria-label="Paper ${oe+1}"></button>`).join("")}</div>
        <h3>Sticker</h3><div class="mailRow">${Bo.slice(0,w0).map((F,oe)=>`<button class="stick ${oe===a?"on":""}" data-sticker="${oe}" aria-label="Sticker ${oe+1}">${F}</button>`).join("")}</div>
        ${l?`<p class="mailErr" id="mailErr">${xt(l)}</p>`:""}
        <button class="mailSend" id="mailSend" type="button">Send</button>
        ${m&&b.length?'<button class="mailRow" data-act="back" type="button" style="margin-top:8px">Back to my mail</button>':""}`;const U=h().querySelector("#mailText");if(U&&w){U.value=w;const F=document.getElementById("mailCount");F&&(F.textContent=`${w.length}/${ds}`)}return}const $=b.length?b.slice().reverse().map(M=>M.text?`<button type="button" class="letter ${M.read?"":"fresh"}" data-letter="${xt(M.id)}" style="background:${ns[M.color]??ns[0]}">
        <span class="sticker">${Bo[M.sticker]??Bo[0]}</span>
        <span class="who">${xt(M.from)}</span><span class="when">${xt(uc(M.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${He}/><path d="M4 8 L40 24 L76 8" fill="${ns[M.color]??"#fff"}" ${He}/></svg>
      </button>`:`<div class="letter" style="background:${ns[M.color]??ns[0]}"><span class="who">Your letter</span><span class="when">${xt(uc(M.at))}</span><span class="statusChip ${M.read?"read":""}">${M.read?"Read":"Delivered"}</span></div>`).join(""):'<p class="hint">No letters yet. Your flag pops up when one arrives!</p>';P.innerHTML=`<button class="close" data-m="close">✕</button><h2>${xt(_)} mailbox</h2>${$}
      <div class="mailRow"><button type="button" data-act="write">Write a letter</button></div>
      ${l?`<p class="mailErr">${xt(l)}</p>`:""}`}function y(w){const m=w.closest(".mailPhrases [data-phrase]");if(m){r=+m.dataset.phrase,l="",u();return}const b=w.closest("[data-color]");if(b){i=+b.dataset.color,u();return}const _=w.closest("[data-sticker]");if(_){a=+_.dataset.sticker,u();return}if(w.closest("#mailSend"))return v();const P=w.closest("[data-act]")?.dataset.act;if(P==="write"){s=!0,o="",n="",l="",u();return}if(P==="back"){s=!1,o="",n="",l="",u();return}if(P==="reply"){const U=e.houseOf(w.closest("[data-from]")?.dataset.from??"");if(!U){e.toast("They are not on the street anymore.");return}o=U,s=!0,n="",l="",t=U,u();return}if(P==="drop"){const U=w.closest("[data-id]")?.dataset.id??"";if(c!==U){c=U,e.toast("Tap again to throw it away");return}c="",e.drop(t,U);return}const $=w.closest("[data-letter]");if(!$)return;const M=$.dataset.letter,V=e.lettersOf(t).find(U=>U.id===M);V&&(!e.mine(t)||!V.text||(V.read||e.read(t,M),n=M,g(V)))}function g(w){const m=jv(w.text),b=h().querySelector("#mailCard");b.innerHTML=`<button class="close" data-m="close">✕</button>
      <div class="letter open read" style="background:${ns[w.color]??ns[0]}" data-id="${xt(w.id)}" data-from="${xt(w.fromPid)}">
        <span class="sticker">${Bo[w.sticker]??Bo[0]}</span>
        <span class="who">${xt(w.from)}</span><span class="when">${xt(uc(w.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${He}/><path class="flap" d="M4 8 L40 24 L76 8" fill="#fff" ${He}/></svg>
        <p class="words">${xt(m??"")}</p>
        <span class="mailRow"><button type="button" data-act="reply">Reply</button><button type="button" class="throw" data-act="drop">${c===w.id?"Tap again":"Throw away"}</button></span>
      </div>
      <button type="button" data-act="back">All my mail</button>
      ${l?`<p class="mailErr">${xt(l)}</p>`:""}`}function v(){let w="";if(e.freeType()){const b=h().querySelector("#mailText")?.value??"",_=Qv(b);if(!_.ok){l=_.msg,u();const P=h().querySelector("#mailText");P&&(P.value=b);return}w=_.text}else{if(r<0||r>=Ui.length){l="Pick a phrase!",u();return}w=Ui[r]}const m=o||t;l="",e.send(m,w,i,a),e.toast("On its way!"),e.mine(m)?(s=!1,o="",t=m,u()):f()}return{open(w,m,b,_){t=w,n="",s=!b,o="",l="",c="",i=0,a=0,r=-1,u()},fail(w){l=qv(w),t?u():e.toast(l)},refresh(){t&&u()},syncCue(w){d()?.classList.toggle("show",w)}}}function jv(e){if(!e)return null;const t=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return!t||t.length>ds?null:t}function xt(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const F0=()=>kt("cozy-play");function Zv(){try{return localStorage.getItem(F0())==="play"?"play":"decorate"}catch{return"decorate"}}function Gv(e){try{localStorage.setItem(F0(),e)}catch{}}function Yv(e){return e==="kennel"?"kennel":e==="cat-tower"?"tower":e==="yard-swing"?"swing":e==="lamp"||/(^|:)lamp|starlamp|light/.test(e)?"lamp":e==="fridge"||e==="stove"||e==="vanity"||e==="bookshelf"||e==="window"||e==="mirror"||e==="tv"||/fridge|stove|cabinet|drawer|vanity/.test(e)?"open":Jn(e)?"sit":"wiggle"}const Kv='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 22 V12 a3 3 0 0 1 6 0 V22" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M24 22 V10 a3 3 0 0 1 6 0 V24" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M30 24 V14 a3 3 0 0 1 6 0 V26" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M14 22 V16 a3 3 0 0 0-6 0 V28 c0 8 6 14 16 14 h4 c8 0 12-5 12-12 V26" fill="#ffe0b8" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M34 8 l1.2 3 3 .4 -2.2 2 .6 3 -2.6-1.6 -2.6 1.6 .6-3 -2.2-2 3-.4z" fill="#ffd166" stroke="#5a3d5c" stroke-width="1.4"/></svg>',Xv='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34 L22 22 L30 30 L18 42 Q10 42 10 34 Z" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M22 22 L32 12 L38 18 L28 28 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 12 L36 6 L42 12 L38 18" fill="#c9a0dc" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M14 36 h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M8 14 l2 1 M40 34 l2 2 M8 40 l3 -1" stroke="#5a3d5c" stroke-width="2" stroke-linecap="round"/></svg>';function Jv(e,t){let n="decorate";const s=e.querySelector("#modePlay"),o=e.querySelector("#modeDecorate");s.querySelector(".modeIco").innerHTML=Kv,o.querySelector(".modeIco").innerHTML=Xv;const i=()=>{const c=n==="play";document.body.classList.toggle("mode-play",c),s.classList.toggle("on",c),o.classList.toggle("on",!c),s.setAttribute("aria-pressed",c?"true":"false"),o.setAttribute("aria-pressed",c?"false":"true")},a=(c,d)=>{n=c,d&&Gv(c),i(),t.onChange?.()};e.addEventListener("pointerdown",c=>c.stopPropagation()),e.addEventListener("click",c=>{const d=c.target.closest("[data-mode]");if(!d)return;const f=d.dataset.mode==="play"?"play":"decorate";a(f,t.ownHouse())}),i();let r=!1;return{mode:()=>n,isPlay:()=>n==="play",sync(c){a(c?Zv():"play",!1)},hint:()=>{if(r||!document.body.classList.contains("phone"))return;const c=kt("cozy-mode-hint");try{if(localStorage.getItem(c)){r=!0;return}}catch{r=!0;return}r=!0;const d=document.createElement("p");d.className="modeHint",d.textContent="Play: tap things! Decorate: move things!",e.appendChild(d);let f=!1;const h=()=>{if(!f){f=!0,d.remove(),window.removeEventListener("pointerdown",h);try{localStorage.setItem(c,"1")}catch{}}};window.setTimeout(h,2800),d.addEventListener("click",h),window.addEventListener("pointerdown",h)}}}const j0=e=>String(e||"").replace(/^pack:/,"").toLowerCase();function da(e){return/(^|-)table$/.test(j0(e))}function wh(e){const t=Jn(e);return!t||t.pose!=="sit"?!1:/chair|stool/.test(j0(e))}const e4=320,t4=180,vd=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y);function n4(e,t,n,s){if(s&&da(s.kind))return s;const o=e.filter(c=>da(c.kind));let i=null,a=1/0;const r=s&&fn(s.kind)?s:{x:t,y:n},l=s&&fn(s.kind)?t4:0;for(const c of o){const d=Math.max(l,xn(c.kind)*.55+40),f=vd(r,c);f<=d&&f<a&&(i=c,a=f)}return i}function s4(e,t,n,s){if(s&&jn(s.kind))return s;for(const o of e){if(!jn(o.kind))continue;const i=xn(o.kind);if(Math.abs(t-o.x)<=Math.max(60,i*.45)&&Math.abs(n-o.y)<=80)return o}return null}function o4(e,t,n,s){const o=xn(e.kind),i=ho(e.x,o,t,s),a=[i];if(n>1){const r=ho(e.x,o,e.x+(e.x-i.x),s);a.push({x:r.x,y:r.y})}return a}function Bl(e){const t=e.roomW??2400,{releaseX:n,releaseY:s,hit:o,items:i,occupied:a,held:r,seatPiece:l}=e,c=r.filter(w=>fn(w.kind));if(o&&wh(o.kind)){const w=l(o);if(w){const m=Uo({mode:"play",via:"drag",releaseX:n,releaseY:s,piece:w,occupied:a});if(m.seat)return{x:m.x,y:m.y,seat:m.seat,releases:[]}}}const d=s4(i,n,s,o),f=n4(i,n,s,o),h=!!(o&&Jn(o.kind)?.pose==="lie"),u=d||(h?o:null),y=[];if(u&&c.length){const w=o4(u,n,c.length,t);for(let m=0;m<c.length;m++){const b=w[Math.min(m,w.length-1)];y.push({hand:c[m].hand,x:b.x,y:b.y||si})}}if(d)return{x:d.x,y:d.y+8,seat:null,releases:y};if(f){let w=null,m=1/0;for(const _ of i){if(!wh(_.kind)||vd(_,f)>e4)continue;const P=l(_);if(!P)continue;const $=Uo({mode:"play",via:"drag",releaseX:n,releaseY:s,piece:P,occupied:a});if(!$.seat)continue;const M=vd(_,{x:n,y:s});M<m&&(m=M,w={x:$.x,y:$.y,seat:$.seat})}if(w)return{...w,releases:y};const b=ho(f.x,xn(f.kind),n,t);return{x:b.x,y:b.y,seat:null,releases:y}}const g=o?l(o):null,v=Uo({mode:"play",via:"drag",releaseX:n,releaseY:s,piece:g,occupied:a});return{x:v.x,y:v.y,seat:v.seat,releases:y}}const Z0=new Map;let G0=!1;function Yn(){return G0}function i4(e){G0=e}function Kn(e){return Z0.get(e)}function a4(e,t){Z0.set(e,t)}const Y0=!0;let Pi=null;function Rf(){return Pi??Y0}function r4(e){const t=new URLSearchParams(e.replace(/^\?/,"")).get("art");t==="v1"?Pi=!1:t==="v2"?Pi=!0:Pi=null;const n=Pi??Y0;return i4(n),n}const Ss=[600,1800,4500],l4=e=>new Promise(t=>setTimeout(t,e));async function K0(e,t=Ss){let n;for(let s=0;;s++){try{return await e()}catch(o){n=o}if(s>=t.length)break;await l4(t[s])}throw n}function c4(e,t=Ss){const n=Number(e.dataset.tries||"0");if(n>=t.length)return!1;const s=e.getAttribute("src");return s?(e.dataset.tries=String(n+1),setTimeout(()=>{!e.isConnected||e.getAttribute("src")!==s||(e.removeAttribute("src"),e.setAttribute("src",s))},t[n]),!0):!1}async function Bs(e,t=Ss){try{return await K0(e,t)}catch(n){throw f4(),n}}let bh=!1,vh=!1;function d4(){bh||typeof window>"u"||(bh=!0,window.addEventListener("vite:preloadError",e=>{}))}function f4(){if(vh||typeof document>"u"||(vh=!0,document.getElementById("artRetryNote")))return;const e=document.createElement("div");e.id="artRetryNote",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.textContent="Some pictures could not load. You can still play!";const t=document.createElement("button");t.type="button",t.className="artRetryNoteOk",t.textContent="OK",t.addEventListener("click",()=>e.remove()),e.appendChild(t);const n=()=>{(document.body||document.documentElement).appendChild(e)};document.body?n():document.addEventListener("DOMContentLoaded",n,{once:!0})}const Nr=Object.assign({"../../assets/art/any/armchair.webp":()=>p(()=>import("./armchair-DNUcj0LU.js"),[]).then(e=>e.default),"../../assets/art/any/ball.webp":()=>p(()=>import("./ball-CLPa09gM.js"),[]).then(e=>e.default),"../../assets/art/any/balloon.webp":()=>p(()=>import("./balloon-DUDI6dkT.js"),[]).then(e=>e.default),"../../assets/art/any/bookshelf.webp":()=>p(()=>import("./bookshelf-Cc9ub96u.js"),[]).then(e=>e.default),"../../assets/art/any/chair.webp":()=>p(()=>import("./chair-CF6WU_Hk.js"),[]).then(e=>e.default),"../../assets/art/any/clock.webp":()=>p(()=>import("./clock-fvC-SFdk.js"),[]).then(e=>e.default),"../../assets/art/any/lamp.webp":()=>p(()=>import("./lamp-lkxZMSWs.js"),[]).then(e=>e.default),"../../assets/art/any/picture.webp":()=>p(()=>import("./picture-CnQHfmcC.js"),[]).then(e=>e.default),"../../assets/art/any/plant.webp":()=>p(()=>import("./plant-CsffKA5j.js"),[]).then(e=>e.default),"../../assets/art/any/rug.webp":()=>p(()=>Promise.resolve().then(()=>NE),void 0).then(e=>e.default),"../../assets/art/any/sofa.webp":()=>p(()=>import("./sofa-6tZenqTj.js"),[]).then(e=>e.default),"../../assets/art/any/table.webp":()=>p(()=>import("./table-Du-POmgi.js"),[]).then(e=>e.default),"../../assets/art/any/tv.webp":()=>p(()=>import("./tv-BKQjbyQq.js"),[]).then(e=>e.default),"../../assets/art/any/window.webp":()=>p(()=>Promise.resolve().then(()=>e9),void 0).then(e=>e.default),"../../assets/art/backyard/beach-ball.webp":()=>p(()=>import("./beach-ball-C2DPMVE1.js"),[]).then(e=>e.default),"../../assets/art/backyard/birdbath.webp":()=>p(()=>import("./birdbath-DDDcDsdu.js"),[]).then(e=>e.default),"../../assets/art/backyard/birdhouse.webp":()=>p(()=>import("./birdhouse-CESGhgYG.js"),[]).then(e=>e.default),"../../assets/art/backyard/butterfly-bush.webp":()=>p(()=>import("./butterfly-bush-_zoxtB6t.js"),[]).then(e=>e.default),"../../assets/art/backyard/garden-gnome.webp":()=>p(()=>import("./garden-gnome-6WYwIojF.js"),[]).then(e=>e.default),"../../assets/art/backyard/hammock.webp":()=>p(()=>import("./hammock-CKbEyd70.js"),[]).then(e=>e.default),"../../assets/art/backyard/hedge-row.webp":()=>p(()=>import("./hedge-row-BWgMAPBC.js"),[]).then(e=>e.default),"../../assets/art/backyard/lemonade-cart.webp":()=>p(()=>import("./lemonade-cart-CKZ-MF9v.js"),[]).then(e=>e.default),"../../assets/art/backyard/lemonade-cup.webp":()=>p(()=>import("./lemonade-cup-DQrobp0e.js"),[]).then(e=>e.default),"../../assets/art/backyard/lily-pond.webp":()=>p(()=>import("./lily-pond-Bc4ljnyH.js"),[]).then(e=>e.default),"../../assets/art/backyard/little-slide.webp":()=>p(()=>import("./little-slide-CE81KiKR.js"),[]).then(e=>e.default),"../../assets/art/backyard/patio-lights.webp":()=>p(()=>import("./patio-lights-DBzxlerO.js"),[]).then(e=>e.default),"../../assets/art/backyard/patio-umbrella.webp":()=>p(()=>import("./patio-umbrella-BGJn0_g4.js"),[]).then(e=>e.default),"../../assets/art/backyard/picket-gate.webp":()=>p(()=>import("./picket-gate-DtT9Ltmx.js"),[]).then(e=>e.default),"../../assets/art/backyard/picnic-blanket.webp":()=>p(()=>import("./picnic-blanket-Cum9u0Qx.js"),[]).then(e=>e.default),"../../assets/art/backyard/picnic-table.webp":()=>p(()=>import("./picnic-table-rJl55Ed4.js"),[]).then(e=>e.default),"../../assets/art/backyard/pinwheel.webp":()=>p(()=>import("./pinwheel-CkkOwA13.js"),[]).then(e=>e.default),"../../assets/art/backyard/rain-barrel.webp":()=>p(()=>import("./rain-barrel-EuVOc5Ol.js"),[]).then(e=>e.default),"../../assets/art/backyard/sandbox.webp":()=>p(()=>import("./sandbox-jDqkRU9w.js"),[]).then(e=>e.default),"../../assets/art/backyard/seesaw.webp":()=>p(()=>import("./seesaw-B-Q9duGe.js"),[]).then(e=>e.default),"../../assets/art/backyard/splash-pool.webp":()=>p(()=>import("./splash-pool-CjDapJIs.js"),[]).then(e=>e.default),"../../assets/art/backyard/sprinkler.webp":()=>p(()=>import("./sprinkler-Bp29GZWA.js"),[]).then(e=>e.default),"../../assets/art/backyard/stepping-stones.webp":()=>p(()=>import("./stepping-stones-JF0sP-Iz.js"),[]).then(e=>e.default),"../../assets/art/backyard/sun-lounger.webp":()=>p(()=>import("./sun-lounger-TvBeC8KK.js"),[]).then(e=>e.default),"../../assets/art/backyard/toadstool-light.webp":()=>p(()=>import("./toadstool-light-Cydg5J6b.js"),[]).then(e=>e.default),"../../assets/art/backyard/tulip-bed.webp":()=>p(()=>import("./tulip-bed-j8_T6ExB.js"),[]).then(e=>e.default),"../../assets/art/backyard/veggie-patch.webp":()=>p(()=>import("./veggie-patch-DCJtjvzA.js"),[]).then(e=>e.default),"../../assets/art/backyard/wagon.webp":()=>p(()=>import("./wagon-BZm3ewer.js"),[]).then(e=>e.default),"../../assets/art/backyard/yard-bench.webp":()=>p(()=>import("./yard-bench-Cv1ni_vO.js"),[]).then(e=>e.default),"../../assets/art/backyard/yard-swing.webp":()=>p(()=>import("./yard-swing-BJGg_b84.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mat.webp":()=>p(()=>import("./bath-mat-CGqMmSpc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mirror.webp":()=>p(()=>import("./bath-mirror-0G_LD9ek.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-stool.webp":()=>p(()=>import("./bath-stool-Cxq0W4Pr.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-toilet.webp":()=>p(()=>import("./bath-toilet-D3I7IIUo.js"),[]).then(e=>e.default),"../../assets/art/bathroom/laundry-hamper.webp":()=>p(()=>import("./laundry-hamper-BkR0Wz0-.js"),[]).then(e=>e.default),"../../assets/art/bathroom/rubber-ducky.webp":()=>p(()=>import("./rubber-ducky-B3u_V1zb.js"),[]).then(e=>e.default),"../../assets/art/bathroom/shower-curtain.webp":()=>p(()=>import("./shower-curtain-CfLothKE.js"),[]).then(e=>e.default),"../../assets/art/bathroom/sink-vanity.webp":()=>p(()=>import("./sink-vanity-avyqYHvc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soaking-tub.webp":()=>p(()=>import("./soaking-tub-C4H_s4uu.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soap-dish.webp":()=>p(()=>import("./soap-dish-Dp5i3rho.js"),[]).then(e=>e.default),"../../assets/art/bathroom/towel-bar.webp":()=>p(()=>import("./towel-bar-B_pk-phm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/bed.webp":()=>p(()=>import("./bed-Cl9DoI6l.js"),[]).then(e=>e.default),"../../assets/art/bedroom/mirror.webp":()=>p(()=>import("./mirror-BmFhe6_i.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~alarm-clock.webp":()=>p(()=>import("./pack~alarm-clock-DsMqTNwb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bedtime-snack.webp":()=>p(()=>import("./pack~bedtime-snack-CwkMDndV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-monitor.webp":()=>p(()=>import("./pack~big-monitor-D9xBH6Uo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-wardrobe.webp":()=>p(()=>import("./pack~big-wardrobe-HcZmD6rX.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~book-stack.webp":()=>p(()=>import("./pack~book-stack-BRgispDw.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bubble-bath.webp":()=>p(()=>import("./pack~bubble-bath-COKGg9Dp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunk-bed.webp":()=>p(()=>import("./pack~bunk-bed-DlPI8ODZ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunny-slippers.webp":()=>p(()=>import("./pack~bunny-slippers-l0Ai2DZM.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~canopy-bed.webp":()=>p(()=>import("./pack~canopy-bed-CnOUh6Bv.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cat-bed.webp":()=>p(()=>import("./pack~cat-bed-jijdjakI.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~caterpillar-plush.webp":()=>p(()=>import("./pack~caterpillar-plush-C0OwOmuR.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-canopy-daybed.webp":()=>p(()=>import("./pack~cc-canopy-daybed-DydxR9An.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-beanbag.webp":()=>p(()=>import("./pack~cc-cloud-beanbag-BBONqsoo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-lamp.webp":()=>p(()=>import("./pack~cc-cloud-lamp-BmZ472wV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-fairy-garland.webp":()=>p(()=>import("./pack~cc-fairy-garland-BHwDj5iz.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-heart-bed.webp":()=>p(()=>import("./pack~cc-heart-bed-C77MyR5W.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-jewel-box.webp":()=>p(()=>import("./pack~cc-jewel-box-sQHP3Cwa.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-reading-nook.webp":()=>p(()=>import("./pack~cc-reading-nook-CsNeycvH.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-star-dresser.webp":()=>p(()=>import("./pack~cc-star-dresser-DA2R4QIn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-window-seat.webp":()=>p(()=>import("./pack~cc-window-seat-C48Rguem.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~checker-bed.webp":()=>p(()=>import("./pack~checker-bed-DRGxzSHq.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~clothes-rail.webp":()=>p(()=>import("./pack~clothes-rail-C3j6Nz76.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-rug.webp":()=>p(()=>import("./pack~cloud-rug-DojbAFjK.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-shelf.webp":()=>p(()=>import("./pack~cloud-shelf-AnKv1aGf.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cork-board.webp":()=>p(()=>import("./pack~cork-board-DfnUAUG4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~curvy-desk.webp":()=>p(()=>import("./pack~curvy-desk-BYWcXROd.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~daisy-pot.webp":()=>p(()=>import("./pack~daisy-pot-B0c7zAXE.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk-mic.webp":()=>p(()=>import("./pack~desk-mic-rqXd4kwj.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk.webp":()=>p(()=>import("./pack~desk-CCYyeXW4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dino-plush.webp":()=>p(()=>import("./pack~dino-plush-DkHbQcgG.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~doll-house.webp":()=>p(()=>import("./pack~doll-house-YDCKziqJ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dresser.webp":()=>p(()=>import("./pack~dresser-C6nwNjAN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~egg-chair.webp":()=>p(()=>import("./pack~egg-chair-DU7fUuJW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~floor-fan.webp":()=>p(()=>import("./pack~floor-fan-BLpz7F62.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~frog-plush.webp":()=>p(()=>import("./pack~frog-plush-H14K3f0H.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~game-controller.webp":()=>p(()=>import("./pack~game-controller-D3oYYAQ-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~gaming-chair.webp":()=>p(()=>import("./pack~gaming-chair-ZBwgVPrD.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~guinea-pig.webp":()=>p(()=>import("./pack~guinea-pig-DPIqea0G.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-cage.webp":()=>p(()=>import("./pack~hamster-cage-B96Cssh7.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-pet.webp":()=>p(()=>import("./pack~hamster-pet-Cvf204rb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~headphones.webp":()=>p(()=>import("./pack~headphones-CQB9V8aN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~heart-rug.webp":()=>p(()=>import("./pack~heart-rug-Bv8hxzxL.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~keyboard.webp":()=>p(()=>import("./pack~keyboard-DeZ4vIwp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~lava-lamp.webp":()=>p(()=>import("./pack~lava-lamp-CHXJUd92.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~moon-night-light.webp":()=>p(()=>import("./pack~moon-night-light-BM_Yu-aW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~nightstand.webp":()=>p(()=>import("./pack~nightstand-Coz5lz4g.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~paper-lantern.webp":()=>p(()=>import("./pack~paper-lantern-KLCCw2t-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~pastel-wardrobe.webp":()=>p(()=>import("./pack~pastel-wardrobe-BGo5v24q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~phone-stand.webp":()=>p(()=>import("./pack~phone-stand-DkITkIic.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~piggy-bank.webp":()=>p(()=>import("./pack~piggy-bank-BvruDXQr.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~plant-stand.webp":()=>p(()=>import("./pack~plant-stand-PN6YMQ3-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~play-tent.webp":()=>p(()=>import("./pack~play-tent-CAn9y4lt.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~star-mobile.webp":()=>p(()=>import("./pack~star-mobile-C65pHL5x.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-chest.webp":()=>p(()=>import("./pack~toy-chest-CCoXCM2Q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-robot.webp":()=>p(()=>import("./pack~toy-robot-C4w9ruxo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-train.webp":()=>p(()=>import("./pack~toy-train-CCY6v45R.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~unicorn-plush.webp":()=>p(()=>import("./pack~unicorn-plush-BQM30sq1.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~vlog-camera.webp":()=>p(()=>import("./pack~vlog-camera-fqu7FuU4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wardrobe.webp":()=>p(()=>import("./pack~wardrobe-I04Doflm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-dresser.webp":()=>p(()=>import("./pack~wh-dresser-AB8z2u9d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-nightstand.webp":()=>p(()=>import("./pack~wh-nightstand-CNei9R8d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wood-desk.webp":()=>p(()=>import("./pack~wood-desk-BovaaQew.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wooden-bed.webp":()=>p(()=>import("./pack~wooden-bed-DRuaOxAn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/stars.webp":()=>p(()=>import("./stars-B-_1Uhi4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/story-pillow.webp":()=>p(()=>import("./story-pillow-C53joZXs.js"),[]).then(e=>e.default),"../../assets/art/bedroom/teddy.webp":()=>p(()=>import("./teddy-BfWdCSac.js"),[]).then(e=>e.default),"../../assets/art/bedroom/tub.webp":()=>p(()=>import("./tub-jBZNDbL2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bakery-shelf.webp":()=>p(()=>import("./pack~cc-bakery-shelf-DxlB9xOk.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-breakfast-table.webp":()=>p(()=>import("./pack~cc-breakfast-table-D2YPezZT.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bubble-chair.webp":()=>p(()=>import("./pack~cc-bubble-chair-DKb4WvKy.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-cupcake-stand.webp":()=>p(()=>import("./pack~cc-cupcake-stand-DmYK-4Hu.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-dryer-chair.webp":()=>p(()=>import("./pack~cc-dryer-chair-DmzzPwrg.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-flower-kettle.webp":()=>p(()=>import("./pack~cc-flower-kettle-DnNFg1vb.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-light-vanity.webp":()=>p(()=>import("./pack~cc-light-vanity-C4kTfQ4w.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-macaron-jar.webp":()=>p(()=>import("./pack~cc-macaron-jar-C4jd-6MZ.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mani-chair.webp":()=>p(()=>import("./pack~cc-mani-chair-B1M7wSax.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mint-fridge.webp":()=>p(()=>import("./pack~cc-mint-fridge-CYM93gwH.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-pastel-range.webp":()=>p(()=>import("./pack~cc-pastel-range-BaKvL1x2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-perfume-tray.webp":()=>p(()=>import("./pack~cc-perfume-tray-C9m1uuTm.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-ribbon-mirror.webp":()=>p(()=>import("./pack~cc-ribbon-mirror-CP3Id1P-.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-teapot-set.webp":()=>p(()=>import("./pack~cc-teapot-set-Sh3-x8eW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~arched-shelf.webp":()=>p(()=>import("./pack~arched-shelf-ZP2zbvbL.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~blob-rug.webp":()=>p(()=>import("./pack~blob-rug-Du4wSYaf.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bubbly-plant.webp":()=>p(()=>import("./pack~bubbly-plant-DOKimOCX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bud-vase.webp":()=>p(()=>import("./pack~bud-vase-DRTVK3rW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~comb-brush.webp":()=>p(()=>import("./pack~comb-brush-CpdahK7E.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~cream-jars.webp":()=>p(()=>import("./pack~cream-jars-DoeDfhN_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~drop-lamp.webp":()=>p(()=>import("./pack~drop-lamp-B0mzhGoX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~droplet-buddy.webp":()=>p(()=>import("./pack~droplet-buddy-OBcFFQmI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~fancy-sofa.webp":()=>p(()=>import("./pack~fancy-sofa-DSJSLwz5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~flower-cart.webp":()=>p(()=>import("./pack~flower-cart-B48k2LJX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~foot-spa.webp":()=>p(()=>import("./pack~foot-spa-5A9PVZa7.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~globe-pendants.webp":()=>p(()=>import("./pack~globe-pendants-DXxO-0g2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~glow-mirror.webp":()=>p(()=>import("./pack~glow-mirror-trAPPG0M.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~gold-floor-mirror.webp":()=>p(()=>import("./pack~gold-floor-mirror-Bo5QJcuJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~hair-dryer.webp":()=>p(()=>import("./pack~hair-dryer-DBGDeUp2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-plant.webp":()=>p(()=>import("./pack~heart-plant-CdQWzJHX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-pouf.webp":()=>p(()=>import("./pack~heart-pouf-C0i-NFoI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lilac-curtain.webp":()=>p(()=>import("./pack~lilac-curtain-ByvXUGIT.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lotion-trio.webp":()=>p(()=>import("./pack~lotion-trio-BIg_qrq8.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~mani-lamp.webp":()=>p(()=>import("./pack~mani-lamp-Dv5eyP_r.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~nail-table.webp":()=>p(()=>import("./pack~nail-table-Ca5Z7Wb-.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pebble-rug.webp":()=>p(()=>import("./pack~pebble-rug-DcjYEmIt.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~perfume-bottle.webp":()=>p(()=>import("./pack~perfume-bottle-DxCufYl9.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-fountain.webp":()=>p(()=>import("./pack~pink-fountain-CFCu_fWX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-vanity.webp":()=>p(()=>import("./pack~pink-vanity-BaqHZ_Qs.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-bottle.webp":()=>p(()=>import("./pack~polish-bottle-B2ILiK2Y.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-rack.webp":()=>p(()=>import("./pack~polish-rack-Ba4IBkd5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~reception-desk.webp":()=>p(()=>import("./pack~reception-desk-ChKYb2Ag.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~salon-chair.webp":()=>p(()=>import("./pack~salon-chair-DX6P6E4d.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~scent-candle.webp":()=>p(()=>import("./pack~scent-candle-BZ7OX3YS.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~spray-bottle.webp":()=>p(()=>import("./pack~spray-bottle-Df4-NEdU.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~star-wall-sign.webp":()=>p(()=>import("./pack~star-wall-sign-10ikD7wM.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~swivel-stool.webp":()=>p(()=>import("./pack~swivel-stool-DSUqmRKW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~tiered-tray.webp":()=>p(()=>import("./pack~tiered-tray-2DKLkfK_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-cart.webp":()=>p(()=>import("./pack~towel-cart-ZvOFIu7o.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-stack.webp":()=>p(()=>import("./pack~towel-stack-EDHTj1IJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~vine-planter.webp":()=>p(()=>import("./pack~vine-planter-CBs6XXFi.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~waiting-bench.webp":()=>p(()=>import("./pack~waiting-bench-C-tKIfsJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~wash-chair.webp":()=>p(()=>import("./pack~wash-chair-eJoH6ils.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-candy-bowl.webp":()=>p(()=>import("./pack~hw-candy-bowl-z7nlp1GY.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-cat-statue.webp":()=>p(()=>import("./pack~hw-cat-statue-BDFCmmG-.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-cauldron.webp":()=>p(()=>import("./pack~hw-cauldron-Bw8zZxns.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-ghost-sheet.webp":()=>p(()=>import("./pack~hw-ghost-sheet-uEC5s3ZV.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-hay-bale.webp":()=>p(()=>import("./pack~hw-hay-bale-rPzEkMiW.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-heart-pumpkin.webp":()=>p(()=>import("./pack~hw-heart-pumpkin-D7K9zgfF.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-leaf-garland.webp":()=>p(()=>import("./pack~hw-leaf-garland-DY2NNYlc.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-moon-cling.webp":()=>p(()=>import("./pack~hw-moon-cling-K8zIYhfb.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-moon-lantern.webp":()=>p(()=>import("./pack~hw-moon-lantern-C3hMi0Ts.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-star-pumpkin.webp":()=>p(()=>import("./pack~hw-star-pumpkin-CwkPeGsR.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-witch-hat.webp":()=>p(()=>import("./pack~hw-witch-hat-YRGsDi94.js"),[]).then(e=>e.default),"../../assets/art/kitchen/apple.webp":()=>p(()=>import("./apple-BDa0Ipjl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/berry-basket.webp":()=>p(()=>import("./berry-basket-z1Rm1ypn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/cake.webp":()=>p(()=>import("./cake-CDrRxmjT.js"),[]).then(e=>e.default),"../../assets/art/kitchen/donut.webp":()=>p(()=>import("./donut-DBMhrMrO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/fridge.webp":()=>p(()=>import("./fridge-DC5W3m5V.js"),[]).then(e=>e.default),"../../assets/art/kitchen/juice.webp":()=>p(()=>import("./juice-BHz3g6Oh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bananas.webp":()=>p(()=>import("./pack~bananas-CGvoV_mG.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bar-stool.webp":()=>p(()=>import("./pack~bar-stool-kZw0EBoe.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bread-loaf.webp":()=>p(()=>import("./pack~bread-loaf-C2hAdBjQ.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~chick.webp":()=>p(()=>import("./pack~chick-DFs7qQ4S.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~china-hutch.webp":()=>p(()=>import("./pack~china-hutch-BrAJJu-B.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cocoa-mug.webp":()=>p(()=>import("./pack~cocoa-mug-C6QGwvvz.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cookie-jar.webp":()=>p(()=>import("./pack~cookie-jar-CFA4F-rC.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cooking-pot.webp":()=>p(()=>import("./pack~cooking-pot-CqkD438y.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cupcake.webp":()=>p(()=>import("./pack~cupcake-CaukIYeh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~dish-rack.webp":()=>p(()=>import("./pack~dish-rack-fSH4Nxjb.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~fruit-bowl.webp":()=>p(()=>import("./pack~fruit-bowl-BHMKWhLB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~frying-pan.webp":()=>p(()=>import("./pack~frying-pan-CpIkYvtj.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~happy-fridge.webp":()=>p(()=>import("./pack~happy-fridge-C0JgsuQs.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~herb-box.webp":()=>p(()=>import("./pack~herb-box-BPkYhHVn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~high-chair.webp":()=>p(()=>import("./pack~high-chair-CwJcZkT4.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~ice-cream.webp":()=>p(()=>import("./pack~ice-cream-Bvngp9VY.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kettle.webp":()=>p(()=>import("./pack~kettle-BbInY_9a.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-counter.webp":()=>p(()=>import("./pack~kitchen-counter-JZQyi4vS.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-sink.webp":()=>p(()=>import("./pack~kitchen-sink-DNNgCqX_.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~lemon-tree.webp":()=>p(()=>import("./pack~lemon-tree-DB7EFLYH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~microwave.webp":()=>p(()=>import("./pack~microwave-CEveiPpI.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~milk-bottle.webp":()=>p(()=>import("./pack~milk-bottle-CUQviIWU.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pancakes.webp":()=>p(()=>import("./pack~pancakes-B3g8r9_b.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pantry-shelf.webp":()=>p(()=>import("./pack~pantry-shelf-CBvTqzJO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pendant-lamp.webp":()=>p(()=>import("./pack~pendant-lamp-863t-y_9.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pet-bowl.webp":()=>p(()=>import("./pack~pet-bowl-BVx7MJ3n.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~rice-cooker.webp":()=>p(()=>import("./pack~rice-cooker-CR0R_fMt.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~runner-rug.webp":()=>p(()=>import("./pack~runner-rug-khpV9koB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~spice-rack.webp":()=>p(()=>import("./pack~spice-rack-Bb2fECLl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~stand-mixer.webp":()=>p(()=>import("./pack~stand-mixer-Cc12hcA3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~teapot.webp":()=>p(()=>import("./pack~teapot-DbGmGSk-.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~toaster.webp":()=>p(()=>import("./pack~toaster-C7Q5keZK.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~utensil-rail.webp":()=>p(()=>import("./pack~utensil-rail-5WZRpD_3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~watermelon-slice.webp":()=>p(()=>import("./pack~watermelon-slice-C52sVm4c.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pizza.webp":()=>p(()=>import("./pizza-D-Cud-mH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/stove.webp":()=>p(()=>import("./stove-D_-V6Kzg.js"),[]).then(e=>e.default),"../../assets/art/living/_pop~cada-mouse.webp":()=>p(()=>Promise.resolve().then(()=>z4),void 0).then(e=>e.default),"../../assets/art/living/_pop~quinn-pup.webp":()=>p(()=>Promise.resolve().then(()=>D4),void 0).then(e=>e.default),"../../assets/art/living/_pop~sloane-snail.webp":()=>p(()=>Promise.resolve().then(()=>H4),void 0).then(e=>e.default),"../../assets/art/living/bunny.webp":()=>p(()=>import("./bunny-CObFAG48.js"),[]).then(e=>e.default),"../../assets/art/living/cactus.webp":()=>p(()=>import("./cactus-ZhSDibna.js"),[]).then(e=>e.default),"../../assets/art/living/cat-tower.webp":()=>p(()=>import("./cat-tower-D8zuZTAN.js"),[]).then(e=>e.default),"../../assets/art/living/cat.webp":()=>p(()=>import("./cat-D3BztbTL.js"),[]).then(e=>e.default),"../../assets/art/living/dog.webp":()=>p(()=>import("./dog-CaRYped2.js"),[]).then(e=>e.default),"../../assets/art/living/egg~cada-mouse.webp":()=>p(()=>import("./egg~cada-mouse-qwyybszI.js"),[]).then(e=>e.default),"../../assets/art/living/egg~chloe-starlamp.webp":()=>p(()=>import("./egg~chloe-starlamp-CdRast8x.js"),[]).then(e=>e.default),"../../assets/art/living/egg~quinn-pup.webp":()=>p(()=>import("./egg~quinn-pup-CJe2EZ7X.js"),[]).then(e=>e.default),"../../assets/art/living/egg~reagan-frame.webp":()=>p(()=>import("./egg~reagan-frame-ldfvmD0a.js"),[]).then(e=>e.default),"../../assets/art/living/egg~sloane-snail.webp":()=>p(()=>import("./egg~sloane-snail-r5qvwW98.js"),[]).then(e=>e.default),"../../assets/art/living/fish.webp":()=>p(()=>import("./fish-maRwHAJ7.js"),[]).then(e=>e.default),"../../assets/art/living/floor-cushion.webp":()=>p(()=>import("./floor-cushion-xmeTGRs4.js"),[]).then(e=>e.default),"../../assets/art/living/flowers.webp":()=>p(()=>import("./flowers-CRQe1ixJ.js"),[]).then(e=>e.default),"../../assets/art/living/kennel.webp":()=>p(()=>import("./kennel-5tTNQe8j.js"),[]).then(e=>e.default),"../../assets/art/living/pack~acorn-friend.webp":()=>p(()=>import("./pack~acorn-friend-DRuBUVCM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~aquarium.webp":()=>p(()=>import("./pack~aquarium-YU79BMEH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~arc-floor-lamp.webp":()=>p(()=>import("./pack~arc-floor-lamp-DXBWn_jm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bean-bag.webp":()=>p(()=>Promise.resolve().then(()=>qE),void 0).then(e=>e.default),"../../assets/art/living/pack~bird-cage.webp":()=>p(()=>import("./pack~bird-cage-BG5Oo83y.js"),[]).then(e=>e.default),"../../assets/art/living/pack~blanket-basket.webp":()=>p(()=>import("./pack~blanket-basket-D9HUE-PH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~box-stack.webp":()=>p(()=>import("./pack~box-stack-DlrNN9pK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~brick-fireplace.webp":()=>p(()=>import("./pack~brick-fireplace-WBAkEMcM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~building-blocks.webp":()=>p(()=>import("./pack~building-blocks-B9tOTAc-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bulletin-board.webp":()=>p(()=>import("./pack~bulletin-board-BanI9ESo.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cactus-buddy.webp":()=>p(()=>import("./pack~cactus-buddy-XIo1SKh4.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-cottage-aquarium.webp":()=>p(()=>import("./pack~cc-cottage-aquarium-BEaUEbqv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-fairy-shelf.webp":()=>p(()=>import("./pack~cc-fairy-shelf-Dm4QJ5ID.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-flower-lamp.webp":()=>p(()=>import("./pack~cc-flower-lamp-69A_4yj-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-clock.webp":()=>p(()=>import("./pack~cc-heart-clock-BG6oca1G.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-pouf.webp":()=>p(()=>import("./pack~cc-heart-pouf-ryX-n2Mr.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-rug.webp":()=>p(()=>import("./pack~cc-heart-rug-Cv9FadVw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-macrame-swing.webp":()=>p(()=>import("./pack~cc-macrame-swing-CaIFr-gR.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-mushroom-stool.webp":()=>p(()=>import("./pack~cc-mushroom-stool-D7K_Q0GF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-petal-table.webp":()=>p(()=>import("./pack~cc-petal-table-C9vJSQzw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-plant-wall.webp":()=>p(()=>import("./pack~cc-plant-wall-DF5W5IvZ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-record-player.webp":()=>p(()=>import("./pack~cc-record-player-PdVEHYb8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-curtains.webp":()=>p(()=>import("./pack~cc-scallop-curtains-Vt3j-c2C.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-loveseat.webp":()=>p(()=>import("./pack~cc-scallop-loveseat-D_1065-V.js"),[]).then(e=>e.default),"../../assets/art/living/pack~checker-rug.webp":()=>p(()=>import("./pack~checker-rug-Wy0CMZSF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cloud-sofa.webp":()=>p(()=>import("./pack~cloud-sofa-DpVszcfk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~coffee-table.webp":()=>p(()=>import("./pack~coffee-table-K_hB0tW1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~comfy-armchair.webp":()=>p(()=>import("./pack~comfy-armchair-DnTSpyVq.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cream-sofa.webp":()=>p(()=>import("./pack~cream-sofa-uxsQUYph.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cubby-shelf.webp":()=>p(()=>import("./pack~cubby-shelf-B9YB2weQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cube-shelf.webp":()=>p(()=>import("./pack~cube-shelf-Do0yoJlP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cute-speaker.webp":()=>p(()=>import("./pack~cute-speaker-CENJbaPd.js"),[]).then(e=>e.default),"../../assets/art/living/pack~daisy-rug.webp":()=>p(()=>import("./pack~daisy-rug-CDZ68mcS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~desk-lamp.webp":()=>p(()=>import("./pack~desk-lamp-luSxwyT9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fiddle-leaf-fig.webp":()=>p(()=>import("./pack~fiddle-leaf-fig-COblJUVe.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fireplace.webp":()=>p(()=>import("./pack~fireplace-BvqJ4MHf.js"),[]).then(e=>e.default),"../../assets/art/living/pack~flower-lamp.webp":()=>p(()=>import("./pack~flower-lamp-CJJ-dlUk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~glass-cabinet.webp":()=>p(()=>import("./pack~glass-cabinet-SVsj9HQm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~globe.webp":()=>p(()=>import("./pack~globe-Dzwb85OX.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-lantern.webp":()=>p(()=>import("./pack~hanging-lantern-ja5xkGId.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-planter.webp":()=>p(()=>import("./pack~hanging-planter-1gi5Hm9x.js"),[]).then(e=>e.default),"../../assets/art/living/pack~heart-light.webp":()=>p(()=>import("./pack~heart-light-DC4iBLQP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~knit-cushion.webp":()=>p(()=>import("./pack~knit-cushion-Cc4lRuF-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ladder-shelf.webp":()=>p(()=>import("./pack~ladder-shelf-CaRkqiRJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~landscape-art.webp":()=>p(()=>import("./pack~landscape-art-BKlaJPEw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~lattice-bench.webp":()=>p(()=>import("./pack~lattice-bench-B9WpfEX6.js"),[]).then(e=>e.default),"../../assets/art/living/pack~leaf-wreath.webp":()=>p(()=>import("./pack~leaf-wreath-uVfnSIfS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~monstera-plant.webp":()=>p(()=>import("./pack~monstera-plant-B_coetMK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~moving-box.webp":()=>p(()=>import("./pack~moving-box-DHeeeIdL.js"),[]).then(e=>e.default),"../../assets/art/living/pack~piano.webp":()=>p(()=>import("./pack~piano-Yyj5R1RA.js"),[]).then(e=>e.default),"../../assets/art/living/pack~popcorn.webp":()=>p(()=>import("./pack~popcorn-BuLbtFAV.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pothos-plant.webp":()=>p(()=>import("./pack~pothos-plant-DzlDgqg0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pouf.webp":()=>p(()=>import("./pack~pouf-BTaH4suE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~puffy-stool.webp":()=>p(()=>import("./pack~puffy-stool-B-6LB9NQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-rug.webp":()=>p(()=>import("./pack~rainbow-rug-EDbn-dZ1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-wall-art.webp":()=>p(()=>import("./pack~rainbow-wall-art-BK2LQVaU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~retro-radio.webp":()=>p(()=>import("./pack~retro-radio-WYNMXhqc.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ring-light.webp":()=>p(()=>import("./pack~ring-light-B6vjhEQO.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-chair.webp":()=>p(()=>import("./pack~rocking-chair-CQ0WHDK5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-horse.webp":()=>p(()=>import("./pack~rocking-horse-C6dNjXKJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~round-rug.webp":()=>p(()=>import("./pack~round-rug-BZ0FhUPv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~side-table-round.webp":()=>p(()=>import("./pack~side-table-round-DoF65A6c.js"),[]).then(e=>e.default),"../../assets/art/living/pack~snake-plant.webp":()=>p(()=>import("./pack~snake-plant-BmYEkWGH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sprout-pot.webp":()=>p(()=>import("./pack~sprout-pot-DiXUsL4M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~star-lamp.webp":()=>p(()=>import("./pack~star-lamp-6-4l-lps.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sticker-board.webp":()=>p(()=>import("./pack~sticker-board-Crwbck5M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~string-lights.webp":()=>p(()=>import("./pack~string-lights-Cas7h1DK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~stripe-runner.webp":()=>p(()=>import("./pack~stripe-runner-CuXUhFNW.js"),[]).then(e=>e.default),"../../assets/art/living/pack~succulent-trio.webp":()=>p(()=>import("./pack~succulent-trio-Do8O7eY8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sunny-art.webp":()=>p(()=>import("./pack~sunny-art-h82-3Sd5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-bean-bag.webp":()=>p(()=>Promise.resolve().then(()=>FE),void 0).then(e=>e.default),"../../assets/art/living/pack~sv-cloud-rug.webp":()=>p(()=>import("./pack~sv-cloud-rug-DmAgh1BY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-wall-shelf.webp":()=>p(()=>import("./pack~sv-wall-shelf-CcIezwct.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tassel-rug.webp":()=>p(()=>import("./pack~tassel-rug-DZANcJOt.js"),[]).then(e=>e.default),"../../assets/art/living/pack~throw-pillow.webp":()=>p(()=>import("./pack~throw-pillow-CO9pMMz-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~toy-car.webp":()=>p(()=>import("./pack~toy-car-VuveyeLU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~trailing-plant.webp":()=>p(()=>import("./pack~trailing-plant-ejZgP7bb.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tulip-vase.webp":()=>p(()=>import("./pack~tulip-vase-CcpvFlG9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~turtle.webp":()=>p(()=>import("./pack~turtle-Bn1sANuv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tv-stand.webp":()=>p(()=>import("./pack~tv-stand-CnWFCgTD.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-clock.webp":()=>p(()=>import("./pack~wall-clock-BhhKLuq0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-shelf.webp":()=>p(()=>import("./pack~wall-shelf-1JASyKwJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wavy-floor-lamp.webp":()=>p(()=>import("./pack~wavy-floor-lamp-B53r_e3m.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-arc-floor-lamp.webp":()=>p(()=>import("./pack~wh-arc-floor-lamp-BXaC16sM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-book-stack.webp":()=>p(()=>import("./pack~wh-book-stack-t51h0scM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-fiddle-leaf-fig.webp":()=>p(()=>import("./pack~wh-fiddle-leaf-fig-BIG8VejE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-pendant-lamp.webp":()=>p(()=>import("./pack~wh-pendant-lamp-E0Vxk-T2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-snake-plant.webp":()=>p(()=>import("./pack~wh-snake-plant-BhAMe7Q2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-string-lights.webp":()=>p(()=>import("./pack~wh-string-lights-DQyga6dY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-armchair.webp":()=>p(()=>import("./pack~wood-armchair-FBkbAvXv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-bookshelf.webp":()=>p(()=>import("./pack~wood-bookshelf-DPZ9BD1s.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-coffee-table.webp":()=>p(()=>import("./pack~wood-coffee-table-wKKy_41i.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-stool.webp":()=>p(()=>import("./pack~wood-stool-Bp9UA7Rn.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-bouquet.webp":()=>p(()=>import("./ranch-bouquet-Ds6Pxbb7.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-carrot.webp":()=>p(()=>import("./ranch-carrot-DEktCamx.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-egg.webp":()=>p(()=>import("./ranch-egg-DANU-mnz.js"),[]).then(e=>e.default),"../../assets/art/living/tree.webp":()=>p(()=>import("./tree-BEoke6pN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-bottle.webp":()=>p(()=>import("./baby-bottle-eH02ZpRF.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-shelf.webp":()=>p(()=>import("./baby-shelf-BnBA4LnN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby.webp":()=>p(()=>import("./baby-G3Mhmbzp.js"),[]).then(e=>e.default),"../../assets/art/nursery/bassinet.webp":()=>p(()=>import("./bassinet-Dcb727Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/blocks.webp":()=>p(()=>import("./blocks-C_dNzrHE.js"),[]).then(e=>e.default),"../../assets/art/nursery/bunny-plush.webp":()=>p(()=>import("./bunny-plush-CReNy0hM.js"),[]).then(e=>e.default),"../../assets/art/nursery/changing-table.webp":()=>p(()=>import("./changing-table-8B47rw6t.js"),[]).then(e=>e.default),"../../assets/art/nursery/cloud-rug.webp":()=>p(()=>import("./cloud-rug-CnOFLK5B.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib-mobile.webp":()=>p(()=>import("./crib-mobile-C5s-3ue5.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib.webp":()=>p(()=>import("./crib-CGm5_7n1.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-cocoa.webp":()=>p(()=>import("./doll-cocoa-BpjP2qgw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-honey.webp":()=>p(()=>import("./doll-honey-DFaB2lOw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-rose.webp":()=>p(()=>import("./doll-rose-BRjLLFSK.js"),[]).then(e=>e.default),"../../assets/art/nursery/moon-art.webp":()=>p(()=>import("./moon-art-D58c34zl.js"),[]).then(e=>e.default),"../../assets/art/nursery/music-box.webp":()=>p(()=>import("./music-box-BFejHRIi.js"),[]).then(e=>e.default),"../../assets/art/nursery/night-light.webp":()=>p(()=>import("./night-light-CE5H5B5n.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-curtains.webp":()=>p(()=>import("./nursery-curtains-B23Kt1ZB.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-dresser.webp":()=>p(()=>import("./nursery-dresser-C2NMk5Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-lamp.webp":()=>p(()=>import("./nursery-lamp-kB1hvqKc.js"),[]).then(e=>e.default),"../../assets/art/nursery/play-mat.webp":()=>p(()=>import("./play-mat-BiJMY-uv.js"),[]).then(e=>e.default),"../../assets/art/nursery/rattle.webp":()=>p(()=>import("./rattle-D2HX4sEW.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocker.webp":()=>p(()=>import("./rocker-BI-azLzU.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocking-horse.webp":()=>p(()=>import("./rocking-horse-DqsQLxfe.js"),[]).then(e=>e.default),"../../assets/art/nursery/stacking-rings.webp":()=>p(()=>import("./stacking-rings-CDdBQ47A.js"),[]).then(e=>e.default),"../../assets/art/nursery/toy-bin.webp":()=>p(()=>import("./toy-bin-alXY-1yk.js"),[]).then(e=>e.default),"../../assets/art/pets/cat-calico-nap.webp":()=>p(()=>Promise.resolve().then(()=>V5),void 0).then(e=>e.default),"../../assets/art/pets/cat-calico-sit.webp":()=>p(()=>Promise.resolve().then(()=>U5),void 0).then(e=>e.default),"../../assets/art/pets/cat-calico-stand.webp":()=>p(()=>Promise.resolve().then(()=>Q5),void 0).then(e=>e.default),"../../assets/art/pets/cat-smokey-nap.webp":()=>p(()=>Promise.resolve().then(()=>N5),void 0).then(e=>e.default),"../../assets/art/pets/cat-smokey-sit.webp":()=>p(()=>Promise.resolve().then(()=>q5),void 0).then(e=>e.default),"../../assets/art/pets/cat-smokey-stand.webp":()=>p(()=>Promise.resolve().then(()=>F5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tabby-nap.webp":()=>p(()=>Promise.resolve().then(()=>j5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tabby-sit.webp":()=>p(()=>Promise.resolve().then(()=>Z5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tabby-stand.webp":()=>p(()=>Promise.resolve().then(()=>G5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tuxedo-nap.webp":()=>p(()=>Promise.resolve().then(()=>Y5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tuxedo-sit.webp":()=>p(()=>Promise.resolve().then(()=>K5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tuxedo-stand.webp":()=>p(()=>Promise.resolve().then(()=>X5),void 0).then(e=>e.default),"../../assets/art/pets/dog-dachshund-sit.webp":()=>p(()=>Promise.resolve().then(()=>J5),void 0).then(e=>e.default),"../../assets/art/pets/dog-dachshund-sleep.webp":()=>p(()=>Promise.resolve().then(()=>eM),void 0).then(e=>e.default),"../../assets/art/pets/dog-dachshund-stand.webp":()=>p(()=>Promise.resolve().then(()=>tM),void 0).then(e=>e.default),"../../assets/art/pets/dog-golden-sit.webp":()=>p(()=>Promise.resolve().then(()=>nM),void 0).then(e=>e.default),"../../assets/art/pets/dog-golden-sleep.webp":()=>p(()=>Promise.resolve().then(()=>sM),void 0).then(e=>e.default),"../../assets/art/pets/dog-golden-stand.webp":()=>p(()=>Promise.resolve().then(()=>oM),void 0).then(e=>e.default),"../../assets/art/pets/dog-poodle-sit.webp":()=>p(()=>Promise.resolve().then(()=>iM),void 0).then(e=>e.default),"../../assets/art/pets/dog-poodle-sleep.webp":()=>p(()=>Promise.resolve().then(()=>aM),void 0).then(e=>e.default),"../../assets/art/pets/dog-poodle-stand.webp":()=>p(()=>Promise.resolve().then(()=>rM),void 0).then(e=>e.default),"../../assets/art/pets/dog-pup-sit.webp":()=>p(()=>Promise.resolve().then(()=>lM),void 0).then(e=>e.default),"../../assets/art/pets/dog-pup-sleep.webp":()=>p(()=>Promise.resolve().then(()=>cM),void 0).then(e=>e.default),"../../assets/art/pets/dog-pup-stand.webp":()=>p(()=>Promise.resolve().then(()=>dM),void 0).then(e=>e.default),"../../assets/art/pets/dog-spotty-sit.webp":()=>p(()=>Promise.resolve().then(()=>fM),void 0).then(e=>e.default),"../../assets/art/pets/dog-spotty-sleep.webp":()=>p(()=>Promise.resolve().then(()=>pM),void 0).then(e=>e.default),"../../assets/art/pets/dog-spotty-stand.webp":()=>p(()=>Promise.resolve().then(()=>hM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-bunny.webp":()=>p(()=>Promise.resolve().then(()=>uM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-cow.webp":()=>p(()=>Promise.resolve().then(()=>gM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-goat.webp":()=>p(()=>Promise.resolve().then(()=>mM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-piglet.webp":()=>p(()=>Promise.resolve().then(()=>yM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-sheep.webp":()=>p(()=>Promise.resolve().then(()=>wM),void 0).then(e=>e.default),"../../assets/art/ranch/apple-tree.webp":()=>p(()=>Promise.resolve().then(()=>bM),void 0).then(e=>e.default),"../../assets/art/ranch/basket.webp":()=>p(()=>Promise.resolve().then(()=>vM),void 0).then(e=>e.default),"../../assets/art/ranch/hen-house.webp":()=>p(()=>Promise.resolve().then(()=>kM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-chestnut-bare.webp":()=>p(()=>Promise.resolve().then(()=>_M),void 0).then(e=>e.default),"../../assets/art/ranch/horse-chestnut-saddle.webp":()=>p(()=>Promise.resolve().then(()=>$M),void 0).then(e=>e.default),"../../assets/art/ranch/horse-midnight-bare.webp":()=>p(()=>Promise.resolve().then(()=>xM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-midnight-saddle.webp":()=>p(()=>Promise.resolve().then(()=>MM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-rainbow-bare.webp":()=>p(()=>Promise.resolve().then(()=>LM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-rainbow-saddle.webp":()=>p(()=>Promise.resolve().then(()=>EM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-snowy-bare.webp":()=>p(()=>Promise.resolve().then(()=>SM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-snowy-saddle.webp":()=>p(()=>Promise.resolve().then(()=>TM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-sunny-bare.webp":()=>p(()=>Promise.resolve().then(()=>PM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-sunny-saddle.webp":()=>p(()=>Promise.resolve().then(()=>AM),void 0).then(e=>e.default),"../../assets/art/ranch/tractor.webp":()=>p(()=>Promise.resolve().then(()=>RM),void 0).then(e=>e.default),"../../assets/art/salon/hairdryer.webp":()=>p(()=>import("./hairdryer-T-lQmTcl.js"),[]).then(e=>e.default),"../../assets/art/salon/perfume.webp":()=>p(()=>import("./perfume-DfvRZm2S.js"),[]).then(e=>e.default),"../../assets/art/salon/polish.webp":()=>p(()=>import("./polish-CXaer2Bw.js"),[]).then(e=>e.default),"../../assets/art/salon/ribbon-tray.webp":()=>p(()=>import("./ribbon-tray-CTIaqA2-.js"),[]).then(e=>e.default),"../../assets/art/salon/stool.webp":()=>p(()=>import("./stool-CUwUwak6.js"),[]).then(e=>e.default),"../../assets/art/salon/vanity.webp":()=>p(()=>import("./vanity-BVbX2a77.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~arched-mirror.webp":()=>p(()=>import("./pack~arched-mirror-sCVjVNZ2.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~boba-cup.webp":()=>p(()=>import("./pack~boba-cup-BpOopnbk.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~mini-fridge.webp":()=>p(()=>import("./pack~mini-fridge-Bz5tI6Y7.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~apple-tree.webp":()=>p(()=>import("./pack~apple-tree-C3QlGloI.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~cozy-mug.webp":()=>p(()=>import("./pack~cozy-mug-BnfHOl91.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~fire-pit.webp":()=>p(()=>import("./pack~fire-pit-CRZJkqqE.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~mini-greenhouse.webp":()=>p(()=>import("./pack~mini-greenhouse-Br8akUdc.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~picnic-basket.webp":()=>p(()=>import("./pack~picnic-basket-COs0Y3zn.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~sale-sign.webp":()=>p(()=>import("./pack~sale-sign-BseEiyKa.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-kitchen-counter.webp":()=>p(()=>import("./pack~wh-kitchen-counter-CxgMV92B.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-teapot.webp":()=>p(()=>import("./pack~wh-teapot-ApJalB1d.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-bauble-garland.webp":()=>p(()=>import("./pack~wc-bauble-garland-BS872JcY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-berry-wreath.webp":()=>p(()=>import("./pack~wc-berry-wreath-DVV9MTc6.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-birch-basket.webp":()=>p(()=>import("./pack~wc-birch-basket-BG8oUtxN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cabin-picture.webp":()=>p(()=>import("./pack~wc-cabin-picture-D8rQKKtK.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-candle-trio.webp":()=>p(()=>import("./pack~wc-candle-trio-B31yzqPC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cane-lamp.webp":()=>p(()=>import("./pack~wc-cane-lamp-UTO0nZql.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cinnamon-tray.webp":()=>p(()=>import("./pack~wc-cinnamon-tray-Cf5bYwPY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-cart.webp":()=>p(()=>import("./pack~wc-cocoa-cart-BrV30F2C.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-mug.webp":()=>p(()=>import("./pack~wc-cocoa-mug-CuYF_PaO.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-pot.webp":()=>p(()=>import("./pack~wc-cocoa-pot-DQ72uD3S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-oven.webp":()=>p(()=>import("./pack~wc-cookie-oven-BjGR4uSY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-plate.webp":()=>p(()=>import("./pack~wc-cookie-plate-BL4xbKJ8.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frost-bookcase.webp":()=>p(()=>import("./pack~wc-frost-bookcase-ZuAQpRxg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frosted-pine.webp":()=>p(()=>import("./pack~wc-frosted-pine-BXtEGG7O.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-fur-bench.webp":()=>p(()=>import("./pack~wc-fur-bench-DxlUyCxG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread-village.webp":()=>p(()=>import("./pack~wc-gingerbread-village-BSiu2hp-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread.webp":()=>p(()=>import("./pack~wc-gingerbread-BRxJDmPf.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-globe-lamp.webp":()=>p(()=>import("./pack~wc-globe-lamp-D7wlZ9-V.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holiday-tree.webp":()=>p(()=>import("./pack~wc-holiday-tree-DyKJPhVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holly.webp":()=>p(()=>import("./pack~wc-holly-EcLJkkKT.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-skates.webp":()=>p(()=>import("./pack~wc-ice-skates-DgS-2YH3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-wardrobe.webp":()=>p(()=>import("./pack~wc-ice-wardrobe-D3zrHXz4.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-knit-armchair.webp":()=>p(()=>import("./pack~wc-knit-armchair-BmhTXUUC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-lantern.webp":()=>p(()=>import("./pack~wc-lantern-ph0Ia33S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-log-bench.webp":()=>p(()=>import("./pack~wc-log-bench-D3yNeXrb.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-marshmallow-jar.webp":()=>p(()=>import("./pack~wc-marshmallow-jar-D5Ztz0iN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-line.webp":()=>p(()=>import("./pack~wc-mitten-line-Ci3Kmp5r.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-ottoman.webp":()=>p(()=>import("./pack~wc-mitten-ottoman-DB5mhikk.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mug-shelf.webp":()=>p(()=>import("./pack~wc-mug-shelf-CCpd1wVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-nutcracker.webp":()=>p(()=>import("./pack~wc-nutcracker-CgbCT2qv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-chair.webp":()=>p(()=>import("./pack~wc-penguin-chair-vB1NvNe-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-plush.webp":()=>p(()=>import("./pack~wc-penguin-plush-C-Ne4Dxi.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-counter.webp":()=>p(()=>import("./pack~wc-peppermint-counter-BTPfnOd_.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-rug.webp":()=>p(()=>import("./pack~wc-peppermint-rug-CGd8vlnV.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-garland.webp":()=>p(()=>import("./pack~wc-pinecone-garland-DMA6H6aW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-table.webp":()=>p(()=>import("./pack~wc-pinecone-table-CcVoxsAa.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-bed.webp":()=>p(()=>import("./pack~wc-plaid-bed-D_HMoB7K.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-sofa.webp":()=>p(()=>import("./pack~wc-plaid-sofa-DOYDgV7y.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-poinsettia.webp":()=>p(()=>import("./pack~wc-poinsettia-Duqpulvr.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-polar-plush.webp":()=>p(()=>import("./pack~wc-polar-plush-Bzs7ScmG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pom-rug.webp":()=>p(()=>import("./pack~wc-pom-rug-Bs5AyRsW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-present-stack.webp":()=>p(()=>import("./pack~wc-present-stack-CNmQKSu2.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-reindeer.webp":()=>p(()=>import("./pack~wc-reindeer-DwfFEqVn.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sled-table.webp":()=>p(()=>import("./pack~wc-sled-table-De30wycC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sleigh-planter.webp":()=>p(()=>import("./pack~wc-sleigh-planter-CRfX9J_0.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-globe.webp":()=>p(()=>import("./pack~wc-snow-globe-BQQApiF3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-mobile.webp":()=>p(()=>import("./pack~wc-snow-mobile-wJ-9gloW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-nightstand.webp":()=>p(()=>import("./pack~wc-snow-nightstand-CBsj30cl.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-window.webp":()=>p(()=>import("./pack~wc-snow-window-D3bSRYDd.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowman.webp":()=>p(()=>import("./pack~wc-snowman-BekK-aTM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowshoes.webp":()=>p(()=>import("./pack~wc-snowshoes-CrVHwfcR.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sock-hamper.webp":()=>p(()=>import("./pack~wc-sock-hamper-DkaXaCbw.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-star-topper.webp":()=>p(()=>import("./pack~wc-star-topper-B-l5aKYW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stocking-row.webp":()=>p(()=>import("./pack~wc-stocking-row-C4vslf6n.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stone-hearth.webp":()=>p(()=>import("./pack~wc-stone-hearth-4EAifiID.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-lamp.webp":()=>p(()=>import("./pack~wc-twinkle-lamp--9BNC_tg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-string.webp":()=>p(()=>import("./pack~wc-twinkle-string-jHZReebI.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-window-seat.webp":()=>p(()=>import("./pack~wc-window-seat-CuMHYvCM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-woodstove.webp":()=>p(()=>import("./pack~wc-woodstove-BH7aoOI1.js"),[]).then(e=>e.default)});function Cf(e){const t=e.split("/").pop()||"";if(t.length<6||t.slice(-5).toLowerCase()!==".webp")return null;const n=decodeURIComponent(t.slice(0,-5)).replace(/~/g,":");return!n||n.startsWith("_")?null:n}const X0=new Set;for(const e in Nr){const t=Cf(e);t&&X0.add(t)}function p4(e){return X0.has(e)}const vc=new Map;function h4(e){for(const t in Nr)if(Cf(t)===e)return Nr[t]}const u4=6e4,kc=new Map;function g4(e){const t=vc.get(e);if(t)return t;const n=kc.get(e);if(n!==void 0&&Date.now()-n<u4)return Promise.resolve(null);const s=h4(e);if(!s)return Promise.resolve(null);const o=Bs(s).then(i=>(kc.delete(e),a4(e,i),e)).catch(()=>(vc.delete(e),kc.set(e,Date.now()),null));return vc.set(e,o),o}function zl(e){const t=[...new Set(e)];return Promise.all(t.map(g4)).then(n=>n.filter(s=>s!==null))}function m4(){const e=[];for(const t in Nr){const n=Cf(t);n&&e.push(n)}return zl(e)}function y4(e,t=[]){return r4(e)?zl(t):Promise.resolve([])}const Dl=Object.freeze(Object.defineProperty({__proto__:null,boot:y4,hasArt:p4,loadAllArt:m4,loadArtKinds:zl},Symbol.toStringTag,{value:"Module"})),Le="#5a3d5c",Ye=`stroke="${Le}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,Ya=[{body:"#ffd6e0",roof:"#ff7aa8",door:"#8fd3ff",trim:"#fff6e6"},{body:"#d9f2ff",roof:"#5aa9e6",door:"#ffd166",trim:"#ffffff"},{body:"#e3f9d9",roof:"#5cc985",door:"#ff9f68",trim:"#fffbe6"},{body:"#fff1b8",roof:"#ff9f43",door:"#c9a0dc",trim:"#ffffff"},{body:"#eadcff",roof:"#9b7bd8",door:"#80ed99",trim:"#fff6fb"},{body:"#ffe0c7",roof:"#e07a5f",door:"#5fb0d8",trim:"#fffaf0"},{body:"#d8f5ef",roof:"#2fb3a3",door:"#ff8fab",trim:"#ffffff"},{body:"#fde2f3",roof:"#e879c6",door:"#ffd166",trim:"#fff"}];function qr(e,t={}){const n=Ya[(e%Ya.length+Ya.length)%Ya.length],s=e%2===1,o=t.lit?"#fff3b0":"#cfe8ff",i=s?`<path d="M22 138 Q22 36 160 30 Q298 36 298 138 Z" fill="${n.roof}" ${Ye}/><path d="M60 110 Q70 60 120 50" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`:`<path d="M14 140 L160 26 L306 140 Z" fill="${n.roof}" ${Ye}/><path d="M70 110 L140 56" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`;return`<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="160" cy="294" rx="150" ry="8" fill="#000" opacity=".12"/>
  <rect x="${s?232:220}" y="${s?36:44}" width="30" height="56" rx="6" fill="${n.trim}" ${Ye}/>
  <rect x="44" y="124" width="232" height="168" rx="20" fill="${n.body}" ${Ye}/>
  ${i}
  <g class="houseWin" fill="${o}"><circle cx="160" cy="${s?92:98}" r="18" ${Ye}/><rect x="62" y="160" width="62" height="58" rx="18" ${Ye}/><rect x="196" y="160" width="62" height="58" rx="18" ${Ye}/></g>
  <path d="M160 ${s?74:80} V${s?110:116} M142 ${s?92:98} H178" ${Ye}/>
  <path d="M93 160 V218 M62 189 H124" ${Ye}/><path d="M227 160 V218 M196 189 H258" ${Ye}/>
  <rect x="56" y="216" width="74" height="16" rx="8" fill="${n.trim}" ${Ye}/><rect x="190" y="216" width="74" height="16" rx="8" fill="${n.trim}" ${Ye}/>
  <circle cx="72" cy="212" r="7" fill="#ff8fab" ${Ye}/><circle cx="92" cy="208" r="7" fill="#ffd166" ${Ye}/><circle cx="112" cy="212" r="7" fill="#ff8fab" ${Ye}/>
  <circle cx="208" cy="212" r="7" fill="#c9a0dc" ${Ye}/><circle cx="228" cy="208" r="7" fill="#80ed99" ${Ye}/><circle cx="248" cy="212" r="7" fill="#c9a0dc" ${Ye}/>
  <path d="M132 292 V226 Q132 196 160 196 Q188 196 188 226 V292 Z" fill="${n.door}" ${Ye}/>
  <circle cx="176" cy="250" r="5" fill="${Le}"/><path d="M146 222 Q160 212 174 222" stroke="#fff" stroke-width="5" fill="none" opacity=".6" stroke-linecap="round"/>
  <rect x="118" y="286" width="84" height="10" rx="5" fill="${n.trim}" ${Ye}/>
</svg>`}const Dt={street:`<svg viewBox="0 0 48 48"><circle cx="16" cy="15" r="7" fill="#ffd166" stroke="${Le}" stroke-width="3"/><circle cx="32" cy="15" r="7" fill="#ff8fab" stroke="${Le}" stroke-width="3"/><circle cx="13.5" cy="14.5" r="1.2" fill="${Le}"/><circle cx="18.5" cy="14.5" r="1.2" fill="${Le}"/><circle cx="29.5" cy="14.5" r="1.2" fill="${Le}"/><circle cx="34.5" cy="14.5" r="1.2" fill="${Le}"/><path d="M13 18 q3 2.2 6 0 M29 18 q3 2.2 6 0" fill="none" stroke="${Le}" stroke-width="1.6" stroke-linecap="round"/><path d="M8 40 Q16 28 24 33 Q32 38 40 28" fill="none" stroke="#5cc985" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="36" r="2.2" fill="#fff" stroke="${Le}" stroke-width="1.5"/><circle cx="32" cy="32" r="2.2" fill="#fff" stroke="${Le}" stroke-width="1.5"/></svg>`,home:`<svg viewBox="0 0 48 48"><path d="M8 22 L24 8 L40 22 V40 H8 Z" fill="#ffd166" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><path d="M20 40 V28 H28 V40" fill="#fff" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="20" r="2.4" fill="${Le}"/></svg>`,lockOn:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q33 7 33 16 V22" fill="none" stroke="${Le}" stroke-width="4"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#ffd166" stroke="${Le}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${Le}"/></svg>`,lockOff:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q31 7 32.5 13" fill="none" stroke="${Le}" stroke-width="4" stroke-linecap="round"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#b6f0a8" stroke="${Le}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${Le}"/></svg>`,chat:`<svg viewBox="0 0 48 48"><path d="M8 12 Q8 6 14 6 H34 Q40 6 40 12 V26 Q40 32 34 32 H22 L13 40 V32 Q8 32 8 26 Z" fill="#fff3b0" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><circle cx="17" cy="19" r="2.5" fill="${Le}"/><circle cx="24" cy="19" r="2.5" fill="${Le}"/><circle cx="31" cy="19" r="2.5" fill="${Le}"/></svg>`,shield:`<svg viewBox="0 0 48 48"><path d="M24 5 L39 11 V23 Q39 36 24 43 Q9 36 9 23 V11 Z" fill="#c9a0dc" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><path d="M17 24 L22 29 L31 19" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,solo:`<svg viewBox="0 0 48 48"><path d="M8 24 L24 9 L40 24 V41 H8 Z" fill="#ffd166" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><rect x="19" y="28" width="10" height="13" rx="4" fill="#fff" stroke="${Le}" stroke-width="2.5"/><path d="M33 7 l2 4 4 .5 -3 3 .7 4 -3.7-2 -3.7 2 .7-4 -3-3 4-.5z" fill="#ff8fab" stroke="${Le}" stroke-width="1.5"/></svg>`};function j(e,t=2600){const n=document.createElement("div");n.className="toast",n.textContent=e,(document.getElementById("toastLane")??document.body).appendChild(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+400)}function J0(e){document.querySelector(".grownNotice")?.remove();const t=document.createElement("div");t.className="toast grownNotice",t.setAttribute("role","status"),t.innerHTML='<b>For grown-ups</b><span></span><button type="button">OK</button>',t.querySelector("span").textContent=e,t.querySelector("button").addEventListener("click",()=>{t.classList.add("out"),setTimeout(()=>t.remove(),400)}),(document.getElementById("toastLane")??document.body).appendChild(t)}function eg(){return new Promise(e=>{let t=0,n=0,s="",o=0;const i=document.createElement("div");i.className="sheet adult",i.innerHTML='<div class="card adultCard"></div>',document.body.appendChild(i);const a=i.firstElementChild,r=()=>{t=6+Math.floor(Math.random()*4),n=3+Math.floor(Math.random()*7),s="",l()},l=()=>{a.innerHTML=`<button class="close" data-k="x">✕</button><h2>Grown-ups only</h2><p class="q" data-q="${t*n}">What is ${t} × ${n}?</p>
        <div class="ans">${s||"&nbsp;"}</div>
        <div class="pad">${[1,2,3,4,5,6,7,8,9,"⌫",0,"OK"].map(d=>`<button data-k="${d}">${d}</button>`).join("")}</div>`},c=d=>{i.remove(),e(d)};a.addEventListener("click",d=>{const f=d.target.closest("[data-k]")?.dataset.k;if(f){if(f==="x")return c(!1);if(f==="⌫")s=s.slice(0,-1);else if(f==="OK"){if(+s===t*n)return c(!0);if(++o>=3)return c(!1);a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),400),r();return}else s.length<3&&(s+=f);l()}}),i.addEventListener("click",d=>{d.target===i&&c(!1)}),r()})}const tg=new Set,_c=new Set,ng=[];let kh=!1;function sg(){kh||typeof document>"u"||(kh=!0,document.addEventListener("visibilitychange",()=>{if(document.hidden)for(const e of tg)e.state==="running"&&(_c.add(e),e.suspend().catch(()=>{}));else{for(const e of _c)e.resume().catch(()=>{});_c.clear();for(const e of ng)try{e()}catch{}}}))}function If(e){return sg(),tg.add(e),e}function og(e){sg(),ng.push(e)}let Sn=null,Of=!0;const w4=e=>{Of=e};function be(e,t,n="sine",s=0,o=.15){if(Of)try{Sn??=If(new(window.AudioContext||window.webkitAudioContext)),Sn.state==="suspended"&&Sn.resume().catch(()=>{});const i=Sn.createOscillator(),a=Sn.createGain(),r=Sn.currentTime,l=Math.max(40,e*(.94+Math.random()*.12));i.type=n,i.frequency.setValueAtTime(l,r),s&&i.frequency.exponentialRampToValueAtTime(Math.max(40,l*s),r+t);const c=Math.min(.02,Math.max(.008,t*.22));if(a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,o),r+c),a.gain.exponentialRampToValueAtTime(.001,r+Math.max(t,c+.02)),n==="square"||n==="sawtooth"){const d=Sn.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(1400,r),d.Q.setValueAtTime(.7,r),i.connect(d).connect(a).connect(Sn.destination)}else i.connect(a).connect(Sn.destination);i.start(r),i.stop(r+t+.02)}catch{}}const C={pick:()=>be(520,.12,"sine",1.6),drop:()=>{be(380,.1,"triangle",.7),setTimeout(()=>be(620,.08,"sine"),60)},pop:()=>be(800,.15,"square",.3,.08),click:()=>be(660,.07,"triangle"),swish:()=>be(300,.25,"sine",2.5,.1),meow:()=>{be(700,.12,"triangle",1.3,.1),setTimeout(()=>be(900,.22,"triangle",.6,.1),110)},purr:()=>[0,90,180,270,360].forEach(e=>setTimeout(()=>be(70,.09,"sawtooth",1,.05),e)),woof:()=>{be(260,.09,"square",.6,.09),setTimeout(()=>be(220,.12,"square",.5,.09),130)},spin:()=>be(400,.35,"sine",2.2,.08),boing:()=>be(200,.3,"sine",3,.1),splash:()=>[0,50,110].forEach((e,t)=>setTimeout(()=>be(900-t*200,.12,"triangle",.4,.06),e)),moo:()=>{be(160,.5,"sawtooth",.8,.07),setTimeout(()=>be(140,.45,"sawtooth",.85,.06),380)},baa:()=>[0,90,180].forEach(e=>setTimeout(()=>be(420,.1,"sawtooth",.95,.05),e)),bleat:()=>[0,70,140,210].forEach(e=>setTimeout(()=>be(520,.07,"square",1.05,.04),e)),oink:()=>{be(300,.12,"square",.6,.07),setTimeout(()=>be(330,.12,"square",.55,.07),160)},peep:()=>[0,120,240].forEach((e,t)=>setTimeout(()=>be(1800+t*150,.07,"sine",1.2,.08),e)),squeak:()=>be(1400,.1,"sine",1.5,.08),neigh:()=>{be(700,.5,"sawtooth",.6,.05),[0,60,120,180,240].forEach(e=>setTimeout(()=>be(620-e,.06,"triangle",1,.04),300+e))},honk:()=>{be(330,.18,"square",1,.07),setTimeout(()=>be(330,.25,"square",1,.07),230)},munch:()=>[0,110,220,330].forEach(e=>setTimeout(()=>be(180+Math.random()*60,.05,"square",.6,.05),e)),cluck:()=>[0,100,180].forEach((e,t)=>setTimeout(()=>be(600+t*80,.06,"square",.8,.05),e)),plant:()=>{be(260,.1,"triangle",.6),setTimeout(()=>be(520,.1,"sine"),90)},water:()=>[0,60,120,180,240].forEach((e,t)=>setTimeout(()=>be(1200-t*120,.08,"sine",.7,.05),e)),pickup:()=>[660,880,990].forEach((e,t)=>setTimeout(()=>be(e,.1,"triangle"),t*60)),sparkle:()=>[880,1100,1320].forEach((e,t)=>setTimeout(()=>be(e,.12),t*70))},_h=new Map;function b4(e,t){const n=(e?"s":"o")+(t?"f":"n"),s=_h.get(n);if(s)return s;const a=`<svg viewBox="0 0 200 260" aria-hidden="true">
    <ellipse cx="100" cy="248" rx="70" ry="8" fill="#000" opacity=".12"/>
    <path d="M40 148 Q26 228 100 238 Q174 228 160 148 Q146 190 100 200 Q54 190 40 148 Z" fill="${t?"#fff6fb":"#ffc2d4"}" stroke="#5a3d5c" stroke-width="6" stroke-linejoin="round"/>
    <path d="M52 178 Q100 198 148 178" fill="none" stroke="#9ad7f5" stroke-width="12" stroke-linecap="round"/>
    <circle cx="100" cy="92" r="58" fill="#f3c7a0" stroke="#5a3d5c" stroke-width="6"/>
    <path d="M76 50 Q66 16 100 38 Q114 8 130 46 Q112 28 100 40 Q88 30 76 50 Z" fill="#8d5524" stroke="#5a3d5c" stroke-width="6" stroke-linejoin="round"/>
    ${e?'<path d="M72 96 Q84 90 96 96" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round"/><path d="M104 96 Q116 90 128 96" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round"/>':'<circle cx="82" cy="96" r="7" fill="#5a3d5c"/><circle cx="118" cy="96" r="7" fill="#5a3d5c"/><circle cx="84" cy="93" r="2.4" fill="#fff"/><circle cx="120" cy="93" r="2.4" fill="#fff"/>'}
    <path d="M86 118 Q100 130 114 118" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="64" cy="112" rx="12" ry="7" fill="#ff9bb5" opacity=".8"/>
    <ellipse cx="136" cy="112" rx="12" ry="7" fill="#ff9bb5" opacity=".8"/>
    <circle cx="152" cy="168" r="12" fill="#f3c7a0" stroke="#5a3d5c" stroke-width="5"/>
  </svg>`;return _h.set(n,a),a}const Qi="#5a3d5c";function Hl(e){return e&&/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():"#f1c27d"}const Ka={x:60,y:118,w:56,h:40};function v4(e,t,n){return n==="lie"&&e==="over"?null:t&&n==="lie"?{d:"M72 172 C36 200 40 228 88 220",sleeve:"M72 172 C52 186 44 196 42 204",hx:88,hy:220}:t&&n==="sit"?e==="under"?{d:"M72 172 C40 190 46 220 108 228",sleeve:"M72 172 C56 178 46 184 42 188",hx:108,hy:228}:{d:"M128 172 C154 192 150 214 118 208",sleeve:"M128 172 C142 180 148 186 150 190",hx:118,hy:208}:t?e==="under"?{d:"M72 172 C40 196 48 222 112 214",sleeve:"M72 172 C56 178 46 184 42 188",hx:112,hy:214}:{d:"M128 172 C158 180 154 200 124 196",sleeve:"M128 172 C144 178 150 184 154 188",hx:124,hy:196}:n==="lie"?{d:"M22 84 C10 112 14 136 46 130",sleeve:"",hx:46,hy:130}:e==="under"?{d:"M22 84 C14 104 12 128 44 130",sleeve:"",hx:44,hy:130}:{d:"M78 84 C90 98 86 118 64 114",sleeve:"",hx:64,hy:114}}function k4(e,t,n){const s=`M${e-8} ${t-1} Q${e-9} ${t-11} ${e} ${t-11} Q${e+9} ${t-11} ${e+9} ${t} Q${e+9} ${t+9} ${e} ${t+10} Q${e-9} ${t+9} ${e-8} ${t-1} Z`,o=`<ellipse cx="${e+8}" cy="${t-2}" rx="3.2" ry="5" fill="${n}" stroke="${Qi}" stroke-width="3.4" transform="rotate(-24 ${e+8} ${t-2})"/>`;return`<path class="cradle-hand" data-cx="${e}" data-cy="${t}" d="${s}" fill="${n}" stroke="${Qi}" stroke-width="3.9"/>${o}`}function Sa(e,t,n,s,o){const i=v4(e,t,s);if(!i)return"";const a=Hl(n),r=o&&/^#[0-9a-fA-F]{6}$/.test(o)?o.toLowerCase():"",l='fill="none" stroke-linecap="round" stroke-linejoin="round"',c=t?16:12,d=t?20.2:15.5;let f=`<path d="${i.d}" ${l} stroke="${Qi}" stroke-width="${d}"/><path d="${i.d}" ${l} stroke="${a}" stroke-width="${c}"/>`;t&&i.sleeve&&r&&(f+=`<path d="${i.sleeve}" ${l} stroke="${Qi}" stroke-width="29"/><path d="${i.sleeve}" ${l} stroke="${r}" stroke-width="22"/>`);const h=t?k4(i.hx,i.hy,a):`<circle class="cradle-hand" data-cx="${i.hx}" data-cy="${i.hy}" cx="${i.hx}" cy="${i.hy}" r="7" fill="${a}" stroke="${Qi}" stroke-width="3.5"/>`;return`<g class="arm cradle">${f}${h}</g>`}const Xa=110,wi=148,$h=80,xh=57,_4=60,$4=133,x4=42,M4=30,L4=60,E4=129,Ja=["feed","burp","change","rock"],$c=["Bean","Pip","Mochi","Bunny","Dot","Sunny"];function S4(e){let t=null,n=null,s=null,o=!1,i=Number.NaN,a=0,r=0,l=!1,c=!1;const d=typeof navigator<"u"&&!!navigator.webdriver;function f(I,B,te,W,N){I.style.left=(B-W/2)/At*100+"%",I.style.top=(te-N)/Wn*100+"%",I.style.width=W/At*100+"%",I.style.height=N/Wn*100+"%"}function h(I){const B=I.scale&&I.scale>0?I.scale:1,te=I.pose==="sit"||I.pose==="lie"?I.pose:null,W=I.chibi&&I.pose!=="sit"&&I.pose!=="lie",N=W?Ka.x:I.chibi?L4:_4,G=W?Ka.y:I.chibi?E4:$4,ge=W?Ka.w:I.chibi?x4:$h,Pe=W?Ka.h:I.chibi?M4:xh,_e=bw(N,G,te,!!I.lieFlip,B),Fe=te==="lie"?_e.x:I.flip?-_e.x:_e.x,H=ge*B,Q=Pe*B;return{x:I.x+Fe,y:I.y+_e.y+Q/2,w:H,h:Q}}function u(I,B){let te=null,W=0;for(let N=0;N<Ja.length;N++){const G=Ja[N],ge=I.at?.[G]??0;ge>0&&B-ge>=0&&B-ge<1100&&ge>=W&&(te=G,W=ge)}return te}function y(I){if(I.mood<=2||!e.canSend()){window.clearTimeout(a),i=Number.NaN;return}if(i===I.since)return;window.clearTimeout(a),i=I.since;const B=Math.max(0,I.since+ld-e.clock());a=window.setTimeout(()=>{i=Number.NaN;const te=e.get().baby;!te||te.mood<=2||!e.canSend()||e.dispatch({type:"baby/ease",now:e.clock()})},B)}function g(I,B){window.clearTimeout(r);let te=0;for(let W=0;W<Ja.length;W++){const N=I.at?.[Ja[W]]??0;B-N>=0&&B-N<1100&&N>te&&(te=N)}te&&(r=window.setTimeout(()=>Ie(),Math.max(0,1100-(B-te))))}function v(I,B){if(typeof document.elementsFromPoint!="function")return null;const te=document.elementsFromPoint(I,B),W=e.get(),N=W.rooms[W.currentRoom]?.items??[];for(let G=0;G<te.length;G++){const ge=te[G];if(!ge||typeof ge.closest!="function"||ge.closest(".baby, .babyCare, .babyMeet"))continue;const Pe=ge.closest(".item");if(!Pe)continue;const _e=Pe.dataset.id||"";for(let Fe=0;Fe<N.length;Fe++){const H=N[Fe];if(H.id===_e&&(go(H.kind)||e.box(H)))return H}}return null}function w(I){I.addEventListener("pointerdown",B=>{if(B.button!==0)return;const te=e.get().baby;if(!te)return;if(B.preventDefault(),B.stopPropagation(),te.spot==="arms"&&te.holder&&te.holder!==e.holderId()&&e.holderHere(te.holder)){j("Someone is cuddling!");return}if(!e.editable()){e.locked();return}if(!e.canSend())return;const W=e.owner(),N=W,G=B.clientX,ge=B.clientY,Pe=B.pointerId;let _e=!1;const Fe=Q=>{if(Q.pointerId!==Pe||(Math.hypot(Q.clientX-G,Q.clientY-ge)>6&&(_e=!0),!N||!_e))return;o=!0;const st=e.toRoom(Q.clientX,Q.clientY);f(I,st.x,st.y,Xa,wi)},H=Q=>{if(Q.pointerId!==Pe)return;window.removeEventListener("pointermove",Fe),window.removeEventListener("pointerup",H),window.removeEventListener("pointercancel",H);const st=o&&_e&&N;if(o=!1,Q.type==="pointercancel"){Ie();return}if(st){const $t=document.elementFromPoint(Q.clientX,Q.clientY)?.closest(".tab[data-room]");if($t&&$t.dataset.room){const hi=$t.dataset.room,J2=e.toRoom(Q.clientX,Q.clientY),Hp=Fw(J2.x,At);hi!==e.get().currentRoom&&e.dispatch({type:"room/switch",room:hi}),e.dispatch({type:"baby/place",room:hi,x:Hp.x,y:Hp.y,spot:"mat",bed:null,seat:null,now:e.clock()}),C.drop();return}const Qs=e.toRoom(Q.clientX,Q.clientY),un=v(Q.clientX,Q.clientY),cc=un?e.box(un):null,Ns=qw({mode:e.play()?"play":"decorate",releaseX:Math.max(0,Math.min(At,Qs.x)),releaseY:Math.max(0,Math.min(Wn,Qs.y)),piece:cc,occupied:e.occupied()});e.dispatch({type:"baby/place",room:e.get().currentRoom,x:Ns.x,y:Ns.y,spot:Ns.spot,bed:Ns.bed,seat:Ns.seat,now:e.clock()}),C.drop();return}if(_e){Ie();return}const ut=e.get().baby;if(!ut)return;if(ut.spot==="arms"&&ut.holder===e.holderId()){const $t=e.toRoom(Q.clientX,Q.clientY);e.dispatch({type:"baby/hold",holder:null,room:e.get().currentRoom,x:Math.max(0,Math.min(At,$t.x)),y:Math.max(40,Math.min(Wn,$t.y)),now:e.clock()}),C.drop();return}const je=e.holderSpot(),De=je?h(je):null,Ae=De?De.x:ut.x,_t=De?Math.max(40,De.y):ut.y;e.dispatch({type:"baby/hold",holder:e.holderId(),room:e.get().currentRoom,x:Ae,y:_t,now:e.clock()}),C.pick()};window.addEventListener("pointermove",Fe),window.addEventListener("pointerup",H),window.addEventListener("pointercancel",H)})}function m(){return t&&t.isConnected||(t=document.createElement("div"),t.className="baby",t.dataset.baby="1",t.innerHTML='<div class="hit"></div><div class="babySpin"><div class="babyRock"><div class="babyInner"></div></div></div><div class="babyZzz" hidden>z z z</div><div class="babyBurp" hidden><i></i></div>',e.layer.appendChild(t),w(t)),t}function b(I,B){const te=I.querySelector(".babyWord");te&&(te.textContent=Ow(B));const W=I.querySelectorAll(".babyBlossom"),N=Bw(B);for(let ge=0;ge<W.length;ge++)W[ge].classList.toggle("on",ge<N);const G=I.querySelector(".babyMeter");G&&(G.dataset.mood=String(B))}function _(I){const B=Q0(I);if(!B){j("Try another name!");return}const te=e.get().baby;!te||te.name===B||(e.dispatch({type:"baby/name",name:B}),C.click())}function P(I){n=document.createElement("div"),n.className="babyCare",n.dataset.babyCare="1";const B=[];for(let N=0;N<5;N++)B.push('<i class="babyBlossom"></i>');const te=[];for(let N=0;N<$c.length;N++)te.push(`<button type="button" data-preset="${$c[N]}">${$c[N]}</button>`);n.innerHTML=`<p class="babyWord"></p><span class="babyMeter"><span class="babyBlossoms">${B.join("")}</span></span>
      <button type="button" data-care="feed">Bottle</button>
      <button type="button" data-care="burp">Burp</button>
      <button type="button" data-care="change">Diaper</button>
      <button type="button" data-care="rock">Rock</button>
      <button type="button" data-baby-name-open>Name</button>
      <div class="babyNames" hidden>
        <input type="text" maxlength="14" autocomplete="off" enterkeyhint="done" aria-label="Baby name" value="">
        ${te.join("")}
      </div>`,b(n,I.mood),n.addEventListener("pointerdown",N=>N.stopPropagation()),n.addEventListener("click",N=>{const G=N.target,ge=G.closest("[data-care]");if(ge&&ge.dataset.care){if(!e.editable()){e.locked();return}if(!e.canSend())return;const _e=ge.dataset.care;e.dispatch({type:"baby/care",care:_e,now:e.clock()}),_e==="rock"?C.purr():_e==="feed"?C.sparkle():C.click();return}if(G.closest("[data-baby-name-open]")){if(!e.owner())return;c=!c;const _e=n?.querySelector(".babyNames");_e&&(_e.hidden=!c);const Fe=n?.querySelector("input");c&&Fe&&(Fe.value=e.get().baby?.name??"",Fe.focus());return}const Pe=G.closest("[data-preset]");if(Pe&&e.owner()){_(Pe.dataset.preset||"");return}}),n.querySelector("input")?.addEventListener("keydown",N=>{N.key==="Enter"&&(N.preventDefault(),_(N.target.value))}),e.stageWrap.appendChild(n)}function $(I,B){if(!e.play()){M();return}const te=n&&document.activeElement&&n.contains(document.activeElement);if((!n||!n.isConnected)&&P(I),!n)return;n.hidden=!1,b(n,I.mood);const W=n.querySelector("[data-baby-name-open]");W&&(W.hidden=!B);const N=n.querySelector(".babyNames");N&&(N.hidden=!B||!c);const G=n.querySelector("input");G&&!te&&(G.value=I.name),z()}function M(){c=!1,n&&(n.remove(),n=null),z()}function z(){const I=!!(n&&n.isConnected&&!n.hidden),B=document.body.classList.contains("baby-card");document.body.classList.toggle("baby-card",I),B!==I&&window.dispatchEvent(new Event("resize"))}function V(I){if(!I||d){s&&(s.remove(),s=null);return}if(s&&s.isConnected){s.hidden=!1;return}s=document.createElement("button"),s.type="button",s.className="babyMeet",s.textContent="Meet the baby",s.addEventListener("pointerdown",B=>B.stopPropagation()),s.addEventListener("click",()=>{if(!e.editable()){e.locked();return}!e.canSend()||e.get().baby||(e.dispatch({type:"baby/meet",now:e.clock()}),C.sparkle())}),e.stageWrap.appendChild(s)}function U(){const I=e.get().rooms.nursery?.items??[];for(let B=0;B<I.length;B++)if(go(I[B].kind)==="crib")return!0;return!1}function F(I,B){I.classList.remove("baby-lie","baby-lie-r","baby-cradle","cradle-lie","flipped");const te=e.get().currentRoom;if((B.spot==="crib"||B.spot==="bassinet")&&B.bed){const W=e.get().rooms[B.room]?.items.find(G=>G.id===B.bed)??null,N=W?e.box(W):null;if(W&&N){const G=M0(W.kind,N);f(I,G.x,G.y+wi/2,Xa,wi),I.style.zIndex=String(1e3+W.z+1),I.classList.add("baby-lie"),W.flip&&I.classList.add("baby-lie-r");return}}if(B.spot==="arms"){const W=B.holder?e.holderSpot(B.holder):null,N=W?h(W):null,G=N?N.x:B.x,ge=N?N.y:B.y,Pe=N?N.w:$h,_e=N?N.h:xh;f(I,G,ge,Pe,_e),I.style.zIndex=String(5e3+Math.round(W?W.y:B.y)+2),I.classList.add("baby-cradle"),I.style.setProperty("--spin-w",(_e/Pe*100).toFixed(4)+"%"),I.style.setProperty("--spin-h",(Pe/_e*100).toFixed(4)+"%"),W&&W.pose==="lie"&&I.classList.add("cradle-lie"),W&&(W.pose==="lie"?W.lieFlip:W.flip)&&I.classList.add("flipped");return}if(B.spot==="mat"&&B.seat){const W=e.seatAt(te,B.seat,B);f(I,W.x,W.y,Xa,wi);const N=e.get().rooms[te]?.items.find(G=>G.id===B.seat?.item);I.style.zIndex=String(1e3+(N?.z??0)+1),B.seat.pose==="lie"&&(I.classList.add("baby-lie"),N?.flip&&I.classList.add("baby-lie-r"));return}f(I,B.x,B.y,Xa,wi),I.style.zIndex=String(5e3+Math.round(B.y))}function oe(I){if(I.spot!=="arms"||!I.holder)return!1;const B=e.get().characters.find(te=>te.id===I.holder);return!!B&&B.room!==I.room}function we(I){o||!oe(I)||!e.canSend()||!e.editable()||e.dispatch({type:"baby/hold",holder:null,room:I.room,x:I.x,y:si,now:e.clock()})}function Ke(I){if(o||oe(I)||I.spot!=="arms"||I.holder!==e.holderId()||!e.canSend()||!e.editable())return;const B=e.holderSpot();if(!B)return;const te=e.get().currentRoom;if(I.room===te)return;const W=h(B);e.dispatch({type:"baby/hold",holder:I.holder,room:te,x:W.x,y:Math.max(40,W.y),now:e.clock()})}function Ie(){const I=e.get(),B=I.baby,te=!!B&&B.spot==="arms"&&!!B.holder&&!!e.holderSpot(B.holder),W=!!B&&B.spot==="arms"&&B.holder===e.holderId()&&!!e.holderSpot(),N=!!(B&&e.inHouse()&&(B.room===I.currentRoom||te||W));if(!B||!N){t&&(t.remove(),t=null),o=!1,M(),window.clearTimeout(a),i=Number.NaN;const Ae=!d&&!B&&e.inHouse()&&e.owner()&&e.editable()&&e.canSend()&&I.currentRoom==="nursery"&&U();V(Ae);return}V(!1),Yn()&&!Kn("baby")&&!l&&(l=!0,zl(["baby"]).then(()=>Ie()));const G=m(),ge=e.clock(),Pe=u(B,ge),_e=Pe==="rock",Fe=Pe==="change",H=!_e&&!Fe&&Yn()?Kn("baby"):"",Q=G.querySelector(".babyInner"),st=(H||"svg")+(_e?"s":"")+(Fe?"f":"");Q&&G.dataset.look!==st&&(Q.innerHTML=H?`<img class="artimg" alt="" draggable="false" src="${H}">`:b4(_e,Fe),G.dataset.look=st),G.dataset.babySpot=B.spot,G.dataset.babyMood=String(B.mood),G.dataset.babyName=B.name,G.classList.toggle("is-feed",Pe==="feed"),G.classList.toggle("is-burp",Pe==="burp"),G.classList.toggle("is-change",Pe==="change"),G.classList.toggle("is-rock",Pe==="rock");const ut=G.querySelector(".babyZzz"),je=G.querySelector(".babyBurp"),De=(B.spot==="crib"||B.spot==="bassinet")&&!Pe;ut&&(ut.hidden=!De),je&&(je.hidden=Pe!=="burp"),o&&G.isConnected||F(G,B),$(B,e.owner()),y(B),g(B,ge),we(B),Ke(B)}return{render:Ie}}const T4={hip:0,head:3,armL:26,armR:-22,legL:-76,legR:76,legLLift:8,legRLift:8},P4={hip:0,head:-8,armL:18,armR:-12,legL:-4,legR:6,legLLift:0,legRLift:0};function Wl(e){return e==="sit"?T4:e==="lie"?P4:null}const tt="#5a3d5c",le=(e=4)=>`stroke="${tt}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,Bf=600,sn=250,Gs=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})">
  <rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${le()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${le()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${le()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${le()}/>
  <circle cx="-18" cy="-78" r="9" fill="#fff" opacity=".35"/></g>`,A4=(e,t,n)=>`<g transform="translate(${e} ${t})"><path d="M0 0 V-16" ${le(3)}/>${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*6}" cy="${-20+Math.sin(s*Math.PI/180)*6}" r="5" fill="${n}" ${le(2)}/>`).join("")}<circle cx="0" cy="-20" r="4" fill="#ffd166" ${le(2)}/></g>`,Mh=e=>`<g transform="translate(${e} 0)">
  <rect x="-80" y="452" width="160" height="12" rx="6" fill="#ff9f68" ${le()}/><rect x="-80" y="470" width="160" height="12" rx="6" fill="#ff9f68" ${le()}/>
  <rect x="-70" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${le(3)}/><rect x="60" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${le(3)}/>
  <rect x="-86" y="490" width="172" height="14" rx="7" fill="#ffb385" ${le()}/></g>`;function R4(){const e=Af,t=Array.from({length:Math.floor((mt.x1-mt.x0+40)/34)},(n,s)=>`<path d="M${mt.x0-20+s*34} 470 V428 l8 -10 l8 10 V470 Z" fill="#fff6e6" ${le(3)}/>`).join("");return`<svg class="parkScene" viewBox="0 0 ${e} ${Bf}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="pkSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#eaf7ff"/></linearGradient>
  <pattern id="pkCheck" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#fff"/><rect width="15" height="15" fill="#ff8fab"/><rect x="15" y="15" width="15" height="15" fill="#ff8fab"/></pattern></defs>
  <rect width="${e}" height="440" fill="url(#pkSky)"/>
  ${[180,900,1600,2300].map((n,s)=>`<g transform="translate(${n} ${70+s%2*30})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <circle cx="${e-220}" cy="90" r="46" fill="#ffe066" ${le(4)}/>
  <path d="M-50 360 Q500 220 1100 340 T2300 330 T${e+100} 350 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#9fe0aa"/><path d="M0 410 H${e}" ${le(4)}/>
  <path d="M0 560 Q700 520 1400 565 T${e} 545 V600 H0 Z" fill="#f6e3c3" opacity=".9"/>
  ${Gs(260,390,.9)}${Gs(720,380,1.05,"#4fbf7a")}${Gs(1230,385,.8)}${Gs(1640,380,1,"#4fbf7a")}${Gs(1990,388,.85)}${Gs(2380,380,.95)}${Gs(2860,390,.9,"#4fbf7a")}
  ${[[300,470,"#ff8fab"],[690,455,"#c9a0dc"],[1210,470,"#ffd166"],[1960,450,"#8ecae6"],[2390,470,"#ff8fab"],[1580,590,"#c9a0dc"],[140,585,"#ffd166"]].map(([n,s,o])=>A4(+n,+s,String(o))).join("")}
  <!-- gate back to the street -->
  <g><rect x="40" y="300" width="22" height="200" rx="6" fill="#c99366" ${le()}/><rect x="168" y="300" width="22" height="200" rx="6" fill="#c99366" ${le()}/>
    <path d="M30 312 Q115 240 200 312" fill="none" stroke="${tt}" stroke-width="16" stroke-linecap="round"/><path d="M30 312 Q115 240 200 312" fill="none" stroke="#ff9f68" stroke-width="9" stroke-linecap="round"/>
    <rect x="62" y="252" width="106" height="36" rx="12" fill="#fff6e6" ${le(3)}/><text x="115" y="278" text-anchor="middle" font-size="22" font-weight="900" fill="${tt}" font-family="Nunito, system-ui, sans-serif">PARK</text></g>
  <!-- swing set (seats are separate so they can swing) -->
  <g><path d="M350 ${sn} L310 500 M350 ${sn} L390 500 M650 ${sn} L610 500 M650 ${sn} L690 500" stroke="${tt}" stroke-width="14" stroke-linecap="round"/>
    <path d="M350 ${sn} L310 500 M350 ${sn} L390 500 M650 ${sn} L610 500 M650 ${sn} L690 500" stroke="#8ecae6" stroke-width="7" stroke-linecap="round"/>
    <rect x="330" y="${sn-10}" width="340" height="20" rx="10" fill="#ff8fab" ${le()}/></g>
  <!-- slide -->
  <g><path d="M${ve.ladder-20} 560 V${ve.top.y} M${ve.ladder+30} 560 V${ve.top.y}" stroke="${tt}" stroke-width="12" stroke-linecap="round"/>
    <path d="M${ve.ladder-20} 560 V${ve.top.y} M${ve.ladder+30} 560 V${ve.top.y}" stroke="#c9a0dc" stroke-width="6" stroke-linecap="round"/>
    ${[380,420,460,500,540].map(n=>`<path d="M${ve.ladder-20} ${n} H${ve.ladder+30}" ${le(5)}/>`).join("")}
    <rect x="${ve.ladder-30}" y="${ve.top.y-14}" width="100" height="18" rx="8" fill="#ffd166" ${le()}/>
    <path d="M${ve.ladder+60} ${ve.top.y-10} C 1000 ${ve.top.y} 1010 520 ${ve.bottom.x+40} 548 L${ve.bottom.x+40} 572 C 990 548 975 ${ve.top.y+30} ${ve.ladder+60} ${ve.top.y+14} Z" fill="#ffd166" ${le()}/>
    <path d="M${ve.ladder+70} ${ve.top.y-2} C 990 ${ve.top.y+8} 1000 525 ${ve.bottom.x+30} 552" fill="none" stroke="#fff3b0" stroke-width="6" stroke-linecap="round"/></g>
  <!-- splash pond -->
  <g class="pondArt"><ellipse cx="1420" cy="515" rx="185" ry="52" fill="#8ecae6" ${le()}/><ellipse cx="1420" cy="510" rx="150" ry="36" fill="#b5e3f5"/>
    <ellipse cx="1340" cy="520" rx="24" ry="9" fill="#80ed99" ${le(3)}/><ellipse cx="1500" cy="505" rx="20" ry="8" fill="#80ed99" ${le(3)}/>
    <g transform="translate(1440 500)"><ellipse cx="0" cy="0" rx="20" ry="12" fill="#ffd166" ${le(3)}/><circle cx="16" cy="-12" r="9" fill="#ffd166" ${le(3)}/><path d="M24 -12 l8 2 l-8 3 z" fill="#ff9f68" ${le(2)}/><circle cx="18" cy="-14" r="1.8" fill="${tt}"/></g></g>
  <!-- picnic blanket -->
  <g><path d="M1670 530 L1910 530 L1940 580 L1640 580 Z" fill="url(#pkCheck)" ${le()}/>
    <g transform="translate(1915 520)"><rect x="-26" y="-20" width="52" height="32" rx="8" fill="#e6b88a" ${le(3)}/><path d="M-18 -20 Q0 -46 18 -20" fill="none" ${le(4)}/><circle cx="-10" cy="-24" r="7" fill="#ff6b6b" ${le(2)}/></g></g>
  ${Mh(2065)}${Mh(2265)}
  <!-- dog area -->
  <g>${t}<path d="M${mt.x0-20} 440 H${mt.x1+20}" ${le(3)}/>
    <g transform="translate(${mt.x0+10} 380)"><rect x="-6" y="0" width="12" height="70" fill="#c99366" ${le(3)}/><rect x="-55" y="-34" width="110" height="38" rx="10" fill="#fff6e6" ${le(3)}/>
      <text x="0" y="-8" text-anchor="middle" font-size="20" font-weight="900" fill="${tt}" font-family="Nunito, system-ui, sans-serif">DOGS 🐾</text></g>
    <g transform="translate(${mt.x1-30} 470)"><path d="M-50 0 V-60 L0 -100 L50 -60 V0 Z" fill="#ff8fab" ${le()}/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="${tt}" stroke-width="14" stroke-linecap="round"/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="#c9a0dc" stroke-width="8" stroke-linecap="round"/><path d="M-20 0 V-30 a20 20 0 0 1 40 0 V0 Z" fill="#5a3d5c"/></g>
    <g transform="translate(${mt.x0+120} 500)"><rect x="-12" y="-30" width="24" height="34" rx="8" fill="#ff6b6b" ${le(3)}/><rect x="-18" y="-18" width="36" height="8" rx="4" fill="#ff6b6b" ${le(3)}/><circle cx="0" cy="-32" r="10" fill="#ff6b6b" ${le(3)}/></g></g>
  </svg>`}const C4=`<svg viewBox="0 0 60 240" preserveAspectRatio="none"><path d="M10 0 V222 M50 0 V222" stroke="${tt}" stroke-width="4"/><rect x="0" y="216" width="60" height="14" rx="6" fill="#ff9f68" ${le(3)}/></svg>`,I4=`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#ffd166" ${le(3)}/><path d="M6 16 Q20 24 34 16 M8 27 Q20 19 32 27" fill="none" stroke="#fff" stroke-width="3"/></svg>`,O4=`<svg viewBox="0 0 48 48"><rect x="20" y="28" width="8" height="14" rx="3" fill="#c99366" stroke="${tt}" stroke-width="3"/><circle cx="24" cy="20" r="13" fill="#5cc985" stroke="${tt}" stroke-width="3"/><circle cx="19" cy="16" r="3" fill="#fff" opacity=".5"/></svg>`,ig=`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="31" rx="10" ry="8" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="13" cy="20" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="20" cy="13" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="28" cy="13" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="35" cy="20" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/></svg>`,B4=`<svg viewBox="0 0 48 48"><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="${tt}" stroke-width="4" stroke-linecap="round"/><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="#ff9f68" stroke-width="2"/><path d="M16 40 V26 M24 40 V22 M32 40 V26" stroke="${tt}" stroke-width="3" stroke-linecap="round"/></svg>`,ag="/cozy-preview/assets/_pop~cada-mouse-DI1-rdPA.webp",z4=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"})),rg="/cozy-preview/assets/_pop~quinn-pup-BNjRkBlA.webp",D4=Object.freeze(Object.defineProperty({__proto__:null,default:rg},Symbol.toStringTag,{value:"Module"})),lg="/cozy-preview/assets/_pop~sloane-snail-B9PsYK5P.webp",H4=Object.freeze(Object.defineProperty({__proto__:null,default:lg},Symbol.toStringTag,{value:"Module"})),an="#5a3d5c",Ee=`stroke="${an}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,er='<ellipse cx="50" cy="97" rx="34" ry="3" fill="#000" opacity=".12"/>',W4=`<svg viewBox="0 0 40 30"><path d="M4 30 V16 Q4 2 20 2 Q36 2 36 16 V30 Z" fill="#3b2a3d" ${Ee}/><circle cx="14" cy="18" r="1.6" fill="#fff" opacity=".8"/><circle cx="22" cy="18" r="1.6" fill="#fff" opacity=".8"/></svg>`,V4=`<svg viewBox="0 0 48 30"><path d="M4 27 Q10 22 22 23 L42 23 Q46 27 42 28 H6 Z" fill="#cdeccf" ${Ee}/><circle cx="26" cy="15" r="11" fill="#ffb3c6" ${Ee}/><path d="M26 15 m-5 0 a5 5 0 1 1 5 5" fill="none" ${Ee}/><path d="M8 23 L5 13 M12 23 L12 13" ${Ee}/></svg>`,U4=`<svg viewBox="0 0 30 30"><path d="M15 2 l3.6 8 8.4 1 -6.3 5.8 1.8 8.4 -7.5 -4.4 -7.5 4.4 1.8 -8.4 L3 11 l8.4 -1z" fill="#fff3b0" ${Ee}/></svg>`,Q4=`<svg viewBox="0 0 30 22"><ellipse cx="15" cy="13" rx="13" ry="8" fill="#e6b88a" ${Ee}/><circle cx="10" cy="11" r="1.8" fill="${an}"/><circle cx="18" cy="14" r="1.8" fill="${an}"/><circle cx="16" cy="9" r="1.5" fill="${an}"/></svg>`,N4=`<svg viewBox="0 0 30 28"><path d="M15 26 C3 18 1 10 6 5 C10 1 14 4 15 7 C16 4 20 1 24 5 C29 10 27 18 15 26 Z" fill="#ffc8dd" ${Ee}/></svg>`,Fr=[{name:"Cada",room:"living",x:150,y:382,w:40,h:30,taps:3,spot:W4,hello:"Squeak! Hi Cada!",item:{kind:"egg:cada-mouse",name:"Cada's Mouse",cat:"secrets",w:80,holdable:!0,svg:`${er}<path d="M78 74 Q96 68 92 52" stroke="#ff9bb5" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="28" ry="18" fill="#d6d6e8" ${Ee}/><circle cx="28" cy="40" r="13" fill="#d6d6e8" ${Ee}/><circle cx="62" cy="38" r="13" fill="#d6d6e8" ${Ee}/><circle cx="28" cy="40" r="7" fill="#ffc8dd"/><circle cx="62" cy="38" r="7" fill="#ffc8dd"/><circle cx="45" cy="56" r="20" fill="#e4e4f2" ${Ee}/><text x="50" y="96" font-size="11" font-weight="900" text-anchor="middle" fill="${an}">C</text>`}},{name:"Sloane",room:"living",x:2290,y:383,w:48,h:30,taps:3,spot:V4,hello:"Hi Sloane! ✨",item:{kind:"egg:sloane-snail",name:"Sloane's Rainbow Snail",cat:"secrets",w:110,holdable:!0,svg:`${er}<path d="M6 92 Q14 80 36 82 L84 82 Q94 90 84 94 H10 Z" fill="#cdeccf" ${Ee}/><circle cx="56" cy="52" r="32" fill="#ff8fab" ${Ee}/><circle cx="56" cy="52" r="24" fill="#ffd166"/><circle cx="56" cy="52" r="17" fill="#80ed99"/><circle cx="56" cy="52" r="10" fill="#8ecae6"/><circle cx="56" cy="52" r="4" fill="#c9a0dc"/><circle cx="56" cy="52" r="32" fill="none" ${Ee}/><path d="M14 82 L8 60 M24 82 L24 60" ${Ee}/><circle cx="8" cy="58" r="4" fill="${an}"/><circle cx="24" cy="58" r="4" fill="${an}"/>`}},{name:"Chloe",room:"bedroom",x:2230,y:92,w:30,h:30,taps:5,spot:U4,item:{kind:"egg:chloe-starlamp",name:"Chloe's Star Lamp",cat:"secrets",w:100,holdable:!0,svg:`${er}<circle cx="50" cy="38" r="34" fill="#fff3b0" opacity=".6"/><path d="M50 6 l8 17 19 2.5 -14 13 4 19 -17 -9.5 -17 9.5 4 -19 -14 -13 19 -2.5z" fill="#ffd166" ${Ee}/><rect x="46" y="66" width="8" height="22" rx="4" fill="#c9a0dc" ${Ee}/><ellipse cx="50" cy="90" rx="22" ry="6" fill="#b388d6" ${Ee}/><text x="50" y="93" font-size="8" font-weight="900" text-anchor="middle" fill="#fff">CHLOE</text>`}},{name:"Quinn",room:"kitchen",x:80,y:588,w:30,h:22,taps:4,spot:Q4,hello:"Woof! Hi Quinn!",item:{kind:"egg:quinn-pup",name:"Quinn's Cookie Pup",cat:"secrets",w:110,holdable:!0,svg:`${er}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#e6b88a" ${Ee}/><circle cx="50" cy="44" r="27" fill="#f2d0a4" ${Ee}/><ellipse cx="24" cy="46" rx="10" ry="17" fill="#b07d54" ${Ee}/><ellipse cx="76" cy="46" rx="10" ry="17" fill="#b07d54" ${Ee}/><circle cx="84" cy="80" r="10" fill="#e6b88a" ${Ee}/><circle cx="81" cy="78" r="1.8" fill="${an}"/><circle cx="87" cy="82" r="1.8" fill="${an}"/><text x="50" y="30" font-size="10" font-weight="900" text-anchor="middle" fill="${an}">Q</text>`}},{name:"Reagan",room:"salon",x:2300,y:352,w:30,h:28,taps:5,spot:N4,item:{kind:"egg:reagan-frame",name:"Reagan's Frame",cat:"secrets",w:120,wall:!0,svg:`<rect x="8" y="10" width="84" height="84" rx="16" fill="#ff8fab" ${Ee}/><rect x="18" y="20" width="64" height="64" rx="10" fill="#fff3f7" ${Ee}/><text x="50" y="72" font-size="52" font-weight="900" text-anchor="middle" fill="#e879c6" stroke="${an}" stroke-width="2.5">R</text><circle cx="14" cy="16" r="6" fill="#ffd166" ${Ee}/><circle cx="86" cy="88" r="6" fill="#ffd166" ${Ee}/><path d="M76 24 l2 4 4 .5 -3 3 .7 4 -3.7 -2 -3.7 2 .7 -4 -3 -3 4 -.5z" fill="#ffd166"/>`}}],q4=Fr.map(e=>({...e.item,rooms:["any"],secret:e.name})),cg=kt("cozy-secrets"),Vl=()=>{try{return new Set(JSON.parse(localStorage.getItem(cg)??"[]"))}catch{return new Set}},F4=e=>{try{localStorage.setItem(cg,JSON.stringify([...e]))}catch{}};function j4(e){const t=document.createElement("div");t.className="eggs",e.world.appendChild(t);const n=new Map;for(const o of Fr){const i=document.createElement("div");i.className="eggspot",i.dataset.egg=o.name,i.style.left=(o.x-o.w/2)/e.roomW*100+"%",i.style.top=(o.y-o.h)/e.roomH*100+"%",i.style.width=o.w/e.roomW*100+"%",i.style.height=o.h/e.roomH*100+"%",i.innerHTML=o.spot,t.appendChild(i),i.addEventListener("pointerdown",a=>a.stopPropagation()),i.addEventListener("click",a=>{a.stopPropagation();const r=Date.now(),l=n.get(o.name)??{n:0,t:0};if(l.n=r-l.t<1500?l.n+1:1,l.t=r,n.set(o.name,l),i.classList.remove("poke"),i.offsetWidth,i.classList.add("poke"),e.tap(),l.n<o.taps)return;l.n=0;const c=Vl(),d=!c.has(o.name);c.add(o.name),F4(c),Z4(o,i),e.sparkle(),e.onFound(o.name,d)})}const s=()=>{const o=e.currentRoom();t.querySelectorAll(".eggspot").forEach(i=>{i.style.display=Fr.find(a=>a.name===i.dataset.egg).room===o?"":"none"})};return s(),{update:s}}const Lh=Object.assign({"../assets/art/living/_pop~cada-mouse.webp":ag,"../assets/art/living/_pop~quinn-pup.webp":rg,"../assets/art/living/_pop~sloane-snail.webp":lg}),dg={};for(const e in Lh)dg["egg:"+e.split("_pop~").pop().slice(0,-5)]=Lh[e];function Z4(e,t){if(e.hello){const s=document.createElement("div");s.className="eggpop";const o=Rf()?dg[e.item.kind]:void 0;if(s.innerHTML=`<div class="eggcritter"><svg viewBox="0 0 100 100">${e.item.svg}</svg></div><div class="bubble">${e.hello}</div>`,o){const i=s.querySelector(".eggcritter"),a=i.innerHTML,r=new Image;r.alt="",r.className="eggpic",r.onerror=()=>{i.innerHTML=a},r.src=o,i.replaceChildren(r)}t.appendChild(s),setTimeout(()=>s.remove(),3200)}const n=document.createElement("div");n.className="eggbanner",n.innerHTML=`<span class="sp">✨</span><span class="nm">${[...e.name].map((s,o)=>`<i style="animation-delay:${o*70}ms">${s}</i>`).join("")}</span><span class="sp">✨</span>`,document.body.appendChild(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3100),fg()}function fg(e=70){const t=["#ff8fab","#ffd166","#8ecae6","#80ed99","#c9a0dc","#ff9f68"],n=document.createElement("div");n.className="confetti",document.body.appendChild(n);for(let s=0;s<e;s++){const o=document.createElement("i");o.style.left=Math.random()*100+"vw",o.style.background=t[s%t.length],o.style.animationDelay=Math.random()*.5+"s",o.style.animationDuration=1.6+Math.random()*1.2+"s",o.style.setProperty("--r",Math.random()*720-360+"deg"),o.style.setProperty("--dx",Math.random()*160-80+"px"),s%3===0&&(o.style.borderRadius="50%"),n.appendChild(o)}setTimeout(()=>n.remove(),3600)}const G4=`[
  {
    "type": "item",
    "slug": "comfy-armchair",
    "name": "Comfy Chair",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "svg": "living/comfy-armchair.svg",
    "widthUnits": 161.7,
    "heightUnits": 162.5,
    "gameW": 161.7,
    "viewBox": [
      1.0,
      2.5,
      98.0,
      98.5
    ]
  },
  {
    "type": "item",
    "slug": "daisy-rug",
    "name": "Daisy Rug",
    "room": "living",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "svg": "living/daisy-rug.svg",
    "widthUnits": 306.0,
    "heightUnits": 108.0,
    "gameW": 306.0,
    "viewBox": [
      -1.0,
      64.0,
      102.0,
      36.0
    ]
  },
  {
    "type": "item",
    "slug": "monstera-plant",
    "name": "Big Leaf Plant",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "svg": "living/monstera-plant.svg",
    "widthUnits": 158.2,
    "heightUnits": 145.6,
    "gameW": 158.2,
    "viewBox": [
      -6.5,
      -3.0,
      113.0,
      104.0
    ]
  },
  {
    "type": "item",
    "slug": "canopy-bed",
    "name": "Canopy Bed",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "svg": "bedroom/canopy-bed.svg",
    "widthUnits": 294.0,
    "heightUnits": 294.0,
    "gameW": 294.0,
    "viewBox": [
      1.0,
      3.0,
      98.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "cat-bed",
    "name": "Cat Bed",
    "room": "bedroom",
    "category": "pets",
    "tag": "pet",
    "size": "medium",
    "svg": "bedroom/cat-bed.svg",
    "widthUnits": 112.8,
    "heightUnits": 91.2,
    "gameW": 112.8,
    "viewBox": [
      3.0,
      25.0,
      94.0,
      76.0
    ]
  },
  {
    "type": "item",
    "slug": "moon-night-light",
    "name": "Moon Night-Light",
    "room": "bedroom",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "svg": "bedroom/moon-night-light.svg",
    "widthUnits": 57.7,
    "heightUnits": 70.0,
    "gameW": 57.7,
    "holdable": true,
    "viewBox": [
      7.0,
      1.0,
      82.5,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "dino-plush",
    "name": "Dino Plushie",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "svg": "bedroom/dino-plush.svg",
    "widthUnits": 78.3,
    "heightUnits": 90.9,
    "gameW": 78.3,
    "holdable": true,
    "viewBox": [
      11.0,
      0.0,
      87.0,
      101.0
    ]
  },
  {
    "type": "item",
    "slug": "happy-fridge",
    "name": "Happy Fridge",
    "room": "kitchen",
    "category": "furniture",
    "tag": "appliance",
    "size": "large",
    "svg": "kitchen/happy-fridge.svg",
    "widthUnits": 132.6,
    "heightUnits": 170.0,
    "gameW": 132.6,
    "viewBox": [
      11.0,
      1.0,
      78.0,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "toaster",
    "name": "Toaster",
    "room": "kitchen",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "kitchen/toaster.svg",
    "widthUnits": 70.4,
    "heightUnits": 73.6,
    "gameW": 70.4,
    "holdable": true,
    "viewBox": [
      9.0,
      9.0,
      88.0,
      92.0
    ]
  },
  {
    "type": "item",
    "slug": "fruit-bowl",
    "name": "Fruit Bowl",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/fruit-bowl.svg",
    "widthUnits": 75.2,
    "heightUnits": 70.0,
    "gameW": 75.2,
    "holdable": true,
    "viewBox": [
      3.0,
      13.5,
      94.0,
      87.5
    ]
  },
  {
    "type": "item",
    "slug": "coffee-table",
    "name": "Coffee Table",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "living/coffee-table.svg",
    "widthUnits": 159.8,
    "heightUnits": 102.0,
    "gameW": 159.8,
    "viewBox": [
      3.0,
      41.0,
      94.0,
      60.0
    ]
  },
  {
    "type": "item",
    "slug": "bean-bag",
    "name": "Bean Bag",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "living/bean-bag.svg",
    "widthUnits": 112.8,
    "heightUnits": 87.6,
    "gameW": 112.8,
    "viewBox": [
      3.0,
      28.0,
      94.0,
      73.0
    ]
  },
  {
    "type": "item",
    "slug": "pouf",
    "name": "Pouf",
    "room": "living",
    "category": "furniture",
    "tag": "seating",
    "size": "small",
    "svg": "living/pouf.svg",
    "widthUnits": 62.4,
    "heightUnits": 52.0,
    "gameW": 62.4,
    "viewBox": [
      11.0,
      36.0,
      78.0,
      65.0
    ]
  },
  {
    "type": "item",
    "slug": "rocking-chair",
    "name": "Rocking Chair",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "living/rocking-chair.svg",
    "widthUnits": 137.2,
    "heightUnits": 136.5,
    "gameW": 137.2,
    "viewBox": [
      1.0,
      3.5,
      98.0,
      97.5
    ]
  },
  {
    "type": "item",
    "slug": "cubby-shelf",
    "name": "Cubby Shelf",
    "room": "living",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "living/cubby-shelf.svg",
    "widthUnits": 159.8,
    "heightUnits": 125.8,
    "gameW": 159.8,
    "viewBox": [
      3.0,
      27.0,
      94.0,
      74.0
    ]
  },
  {
    "type": "item",
    "slug": "piano",
    "name": "Piano",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "living/piano.svg",
    "widthUnits": 186.2,
    "heightUnits": 174.8,
    "gameW": 186.2,
    "viewBox": [
      1.0,
      9.0,
      98.0,
      92.0
    ]
  },
  {
    "type": "item",
    "slug": "fireplace",
    "name": "Fireplace",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "svg": "living/fireplace.svg",
    "widthUnits": 204.0,
    "heightUnits": 180.0,
    "gameW": 204.0,
    "viewBox": [
      -1.0,
      11.0,
      102.0,
      90.0
    ]
  },
  {
    "type": "item",
    "slug": "tv-stand",
    "name": "TV Stand",
    "room": "living",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "living/tv-stand.svg",
    "widthUnits": 176.4,
    "heightUnits": 90.0,
    "gameW": 176.4,
    "viewBox": [
      1.0,
      51.0,
      98.0,
      50.0
    ]
  },
  {
    "type": "item",
    "slug": "arc-floor-lamp",
    "name": "Arc Lamp",
    "room": "living",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "svg": "living/arc-floor-lamp.svg",
    "widthUnits": 135.0,
    "heightUnits": 146.2,
    "gameW": 135.0,
    "viewBox": [
      3.0,
      3.5,
      90.0,
      97.5
    ]
  },
  {
    "type": "item",
    "slug": "string-lights",
    "name": "String Lights",
    "room": "living",
    "category": "decor",
    "tag": "lighting",
    "size": "large",
    "svg": "living/string-lights.svg",
    "widthUnits": 262.6,
    "heightUnits": 68.9,
    "gameW": 262.6,
    "wall": true,
    "viewBox": [
      -0.5,
      17.5,
      101.0,
      26.5
    ]
  },
  {
    "type": "item",
    "slug": "tassel-rug",
    "name": "Tassel Rug",
    "room": "living",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "svg": "living/tassel-rug.svg",
    "widthUnits": 294.0,
    "heightUnits": 100.5,
    "gameW": 294.0,
    "viewBox": [
      1.0,
      67.0,
      98.0,
      33.5
    ]
  },
  {
    "type": "item",
    "slug": "rainbow-rug",
    "name": "Rainbow Rug",
    "room": "living",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "svg": "living/rainbow-rug.svg",
    "widthUnits": 254.8,
    "heightUnits": 66.3,
    "gameW": 254.8,
    "viewBox": [
      1.0,
      68.5,
      98.0,
      25.5
    ]
  },
  {
    "type": "item",
    "slug": "rainbow-wall-art",
    "name": "Rainbow Art",
    "room": "living",
    "category": "decor",
    "tag": "wall-art",
    "size": "medium",
    "svg": "living/rainbow-wall-art.svg",
    "widthUnits": 130.2,
    "heightUnits": 67.2,
    "gameW": 130.2,
    "wall": true,
    "viewBox": [
      -3.5,
      27.0,
      108.5,
      56.0
    ]
  },
  {
    "type": "item",
    "slug": "wall-shelf",
    "name": "Wall Shelf",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "svg": "living/wall-shelf.svg",
    "widthUnits": 156.8,
    "heightUnits": 100.0,
    "gameW": 156.8,
    "wall": true,
    "viewBox": [
      1.0,
      14.5,
      98.0,
      62.5
    ]
  },
  {
    "type": "item",
    "slug": "globe",
    "name": "Globe",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "living/globe.svg",
    "widthUnits": 49.7,
    "heightUnits": 63.7,
    "gameW": 49.7,
    "holdable": true,
    "viewBox": [
      9.0,
      10.0,
      71.0,
      91.0
    ]
  },
  {
    "type": "item",
    "slug": "tulip-vase",
    "name": "Tulip Vase",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "svg": "living/tulip-vase.svg",
    "widthUnits": 44.8,
    "heightUnits": 76.4,
    "gameW": 44.8,
    "holdable": true,
    "viewBox": [
      22.0,
      5.5,
      56.0,
      95.5
    ]
  },
  {
    "type": "item",
    "slug": "fiddle-leaf-fig",
    "name": "Fig Tree",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "large",
    "svg": "living/fiddle-leaf-fig.svg",
    "widthUnits": 118.8,
    "heightUnits": 195.7,
    "gameW": 118.8,
    "viewBox": [
      18.5,
      -2.0,
      62.5,
      103.0
    ]
  },
  {
    "type": "item",
    "slug": "hanging-planter",
    "name": "Hanging Plant",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "svg": "living/hanging-planter.svg",
    "widthUnits": 67.0,
    "heightUnits": 98.0,
    "gameW": 67.0,
    "wall": true,
    "viewBox": [
      17.0,
      -2.5,
      67.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "snake-plant",
    "name": "Snake Plant",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "svg": "living/snake-plant.svg",
    "widthUnits": 68.2,
    "heightUnits": 103.4,
    "gameW": 68.2,
    "viewBox": [
      19.0,
      7.0,
      62.0,
      94.0
    ]
  },
  {
    "type": "item",
    "slug": "succulent-trio",
    "name": "Succulents",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "svg": "living/succulent-trio.svg",
    "widthUnits": 81.0,
    "heightUnits": 66.2,
    "gameW": 81.0,
    "holdable": true,
    "viewBox": [
      5.0,
      27.5,
      90.0,
      73.5
    ]
  },
  {
    "type": "item",
    "slug": "throw-pillow",
    "name": "Pillow",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "living/throw-pillow.svg",
    "widthUnits": 53.4,
    "heightUnits": 52.2,
    "gameW": 53.4,
    "holdable": true,
    "viewBox": [
      5.5,
      14.0,
      89.0,
      87.0
    ]
  },
  {
    "type": "item",
    "slug": "blanket-basket",
    "name": "Blanket Basket",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "living/blanket-basket.svg",
    "widthUnits": 77.4,
    "heightUnits": 72.9,
    "gameW": 77.4,
    "viewBox": [
      7.0,
      20.0,
      86.0,
      81.0
    ]
  },
  {
    "type": "item",
    "slug": "building-blocks",
    "name": "Blocks",
    "room": "living",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "svg": "living/building-blocks.svg",
    "widthUnits": 69.0,
    "heightUnits": 63.0,
    "gameW": 69.0,
    "holdable": true,
    "viewBox": [
      5.0,
      17.0,
      92.0,
      84.0
    ]
  },
  {
    "type": "item",
    "slug": "toy-car",
    "name": "Toy Car",
    "room": "living",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "svg": "living/toy-car.svg",
    "widthUnits": 65.8,
    "heightUnits": 54.6,
    "gameW": 65.8,
    "holdable": true,
    "viewBox": [
      3.0,
      23.0,
      94.0,
      78.0
    ]
  },
  {
    "type": "item",
    "slug": "rocking-horse",
    "name": "Rocking Horse",
    "room": "living",
    "category": "decor",
    "tag": "toy",
    "size": "medium",
    "svg": "living/rocking-horse.svg",
    "widthUnits": 128.7,
    "heightUnits": 127.4,
    "gameW": 128.7,
    "viewBox": [
      0.5,
      3.0,
      99.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "popcorn",
    "name": "Popcorn",
    "room": "living",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "living/popcorn.svg",
    "widthUnits": 41.8,
    "heightUnits": 50.9,
    "gameW": 41.8,
    "holdable": true,
    "viewBox": [
      12.0,
      8.5,
      76.0,
      92.5
    ]
  },
  {
    "type": "item",
    "slug": "bird-cage",
    "name": "Birdie",
    "room": "living",
    "category": "pets",
    "tag": "pet",
    "size": "medium",
    "svg": "living/bird-cage.svg",
    "widthUnits": 99.0,
    "heightUnits": 111.7,
    "gameW": 99.0,
    "viewBox": [
      5.0,
      -0.5,
      90.0,
      101.5
    ]
  },
  {
    "type": "item",
    "slug": "turtle",
    "name": "Turtle",
    "room": "living",
    "category": "pets",
    "tag": "pet",
    "size": "small",
    "svg": "living/turtle.svg",
    "widthUnits": 67.9,
    "heightUnits": 46.2,
    "gameW": 67.9,
    "holdable": true,
    "viewBox": [
      1.0,
      35.0,
      97.0,
      66.0
    ]
  },
  {
    "type": "item",
    "slug": "aquarium",
    "name": "Fish Tank",
    "room": "living",
    "category": "pets",
    "tag": "pet",
    "size": "medium",
    "svg": "living/aquarium.svg",
    "widthUnits": 163.2,
    "heightUnits": 134.4,
    "gameW": 163.2,
    "viewBox": [
      -1.0,
      17.0,
      102.0,
      84.0
    ]
  },
  {
    "type": "item",
    "slug": "bunk-bed",
    "name": "Bunk Bed",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "svg": "bedroom/bunk-bed.svg",
    "widthUnits": 294.0,
    "heightUnits": 300.0,
    "gameW": 294.0,
    "viewBox": [
      1.0,
      1.0,
      98.0,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "dresser",
    "name": "Dresser",
    "room": "bedroom",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "bedroom/dresser.svg",
    "widthUnits": 141.0,
    "heightUnits": 126.0,
    "gameW": 141.0,
    "viewBox": [
      3.0,
      17.0,
      94.0,
      84.0
    ]
  },
  {
    "type": "item",
    "slug": "nightstand",
    "name": "Nightstand",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "svg": "bedroom/nightstand.svg",
    "widthUnits": 69.7,
    "heightUnits": 59.5,
    "gameW": 69.7,
    "viewBox": [
      9.0,
      31.0,
      82.0,
      70.0
    ]
  },
  {
    "type": "item",
    "slug": "wardrobe",
    "name": "Wardrobe",
    "room": "bedroom",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "bedroom/wardrobe.svg",
    "widthUnits": 150.5,
    "heightUnits": 178.5,
    "gameW": 150.5,
    "viewBox": [
      7.0,
      -1.0,
      86.0,
      102.0
    ]
  },
  {
    "type": "item",
    "slug": "desk",
    "name": "Desk",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "bedroom/desk.svg",
    "widthUnits": 166.6,
    "heightUnits": 166.6,
    "gameW": 166.6,
    "viewBox": [
      1.0,
      3.0,
      98.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "toy-chest",
    "name": "Toy Chest",
    "room": "bedroom",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "bedroom/toy-chest.svg",
    "widthUnits": 126.0,
    "heightUnits": 114.8,
    "gameW": 126.0,
    "viewBox": [
      5.0,
      19.0,
      90.0,
      82.0
    ]
  },
  {
    "type": "item",
    "slug": "play-tent",
    "name": "Play Tent",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "large",
    "svg": "bedroom/play-tent.svg",
    "widthUnits": 180.0,
    "heightUnits": 200.0,
    "gameW": 180.0,
    "viewBox": [
      5.0,
      1.0,
      90.0,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "egg-chair",
    "name": "Swing Chair",
    "room": "bedroom",
    "category": "furniture",
    "tag": "seating",
    "size": "medium",
    "svg": "bedroom/egg-chair.svg",
    "widthUnits": 126.0,
    "heightUnits": 154.5,
    "gameW": 126.0,
    "viewBox": [
      9.0,
      -2.0,
      84.0,
      103.0
    ]
  },
  {
    "type": "item",
    "slug": "alarm-clock",
    "name": "Alarm Clock",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "bedroom/alarm-clock.svg",
    "widthUnits": 40.7,
    "heightUnits": 51.2,
    "gameW": 40.7,
    "holdable": true,
    "viewBox": [
      13.0,
      8.0,
      74.0,
      93.0
    ]
  },
  {
    "type": "item",
    "slug": "lava-lamp",
    "name": "Lava Lamp",
    "room": "bedroom",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "svg": "bedroom/lava-lamp.svg",
    "widthUnits": 33.0,
    "heightUnits": 50.0,
    "gameW": 33.0,
    "holdable": true,
    "viewBox": [
      17.0,
      1.0,
      66.0,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "paper-lantern",
    "name": "Paper Lantern",
    "room": "bedroom",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "svg": "bedroom/paper-lantern.svg",
    "widthUnits": 91.8,
    "heightUnits": 98.5,
    "gameW": 91.8,
    "wall": true,
    "viewBox": [
      -1.0,
      -2.5,
      102.0,
      109.5
    ]
  },
  {
    "type": "item",
    "slug": "heart-rug",
    "name": "Heart Rug",
    "room": "bedroom",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "svg": "bedroom/heart-rug.svg",
    "widthUnits": 217.8,
    "heightUnits": 77.0,
    "gameW": 217.8,
    "viewBox": [
      0.5,
      65.0,
      99.0,
      35.0
    ]
  },
  {
    "type": "item",
    "slug": "cloud-rug",
    "name": "Cloud Rug",
    "room": "bedroom",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "svg": "bedroom/cloud-rug.svg",
    "widthUnits": 258.7,
    "heightUnits": 98.8,
    "gameW": 258.7,
    "viewBox": [
      1.5,
      63.0,
      99.5,
      38.0
    ]
  },
  {
    "type": "item",
    "slug": "cloud-shelf",
    "name": "Cloud Shelf",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "svg": "bedroom/cloud-shelf.svg",
    "widthUnits": 118.2,
    "heightUnits": 60.6,
    "gameW": 118.2,
    "wall": true,
    "viewBox": [
      0.5,
      20.5,
      98.5,
      50.5
    ]
  },
  {
    "type": "item",
    "slug": "star-mobile",
    "name": "Star Mobile",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "svg": "bedroom/star-mobile.svg",
    "widthUnits": 102.3,
    "heightUnits": 105.1,
    "gameW": 102.3,
    "wall": true,
    "viewBox": [
      3.5,
      -2.5,
      93.0,
      95.5
    ]
  },
  {
    "type": "item",
    "slug": "cork-board",
    "name": "Pin Board",
    "room": "bedroom",
    "category": "decor",
    "tag": "wall-art",
    "size": "medium",
    "svg": "bedroom/cork-board.svg",
    "widthUnits": 127.4,
    "heightUnits": 98.8,
    "gameW": 127.4,
    "wall": true,
    "viewBox": [
      1.0,
      11.0,
      98.0,
      76.0
    ]
  },
  {
    "type": "item",
    "slug": "bunny-slippers",
    "name": "Bunny Slippers",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "bedroom/bunny-slippers.svg",
    "widthUnits": 54.0,
    "heightUnits": 45.6,
    "gameW": 54.0,
    "holdable": true,
    "viewBox": [
      5.0,
      25.0,
      90.0,
      76.0
    ]
  },
  {
    "type": "item",
    "slug": "book-stack",
    "name": "Books",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "bedroom/book-stack.svg",
    "widthUnits": 47.3,
    "heightUnits": 38.5,
    "gameW": 47.3,
    "holdable": true,
    "viewBox": [
      7.0,
      31.0,
      86.0,
      70.0
    ]
  },
  {
    "type": "item",
    "slug": "piggy-bank",
    "name": "Piggy Bank",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "svg": "bedroom/piggy-bank.svg",
    "widthUnits": 52.8,
    "heightUnits": 51.6,
    "gameW": 52.8,
    "holdable": true,
    "viewBox": [
      9.0,
      15.0,
      88.0,
      86.0
    ]
  },
  {
    "type": "item",
    "slug": "doll-house",
    "name": "Doll House",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "medium",
    "svg": "bedroom/doll-house.svg",
    "widthUnits": 109.2,
    "heightUnits": 131.6,
    "gameW": 109.2,
    "viewBox": [
      11.0,
      7.0,
      78.0,
      94.0
    ]
  },
  {
    "type": "item",
    "slug": "toy-robot",
    "name": "Robot",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "svg": "bedroom/toy-robot.svg",
    "widthUnits": 60.2,
    "heightUnits": 72.4,
    "gameW": 60.2,
    "holdable": true,
    "viewBox": [
      7.0,
      -2.5,
      86.0,
      103.5
    ]
  },
  {
    "type": "item",
    "slug": "unicorn-plush",
    "name": "Unicorn Plushie",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "svg": "bedroom/unicorn-plush.svg",
    "widthUnits": 66.3,
    "heightUnits": 90.1,
    "gameW": 66.3,
    "holdable": true,
    "viewBox": [
      11.0,
      -5.0,
      78.0,
      106.0
    ]
  },
  {
    "type": "item",
    "slug": "toy-train",
    "name": "Toy Train",
    "room": "bedroom",
    "category": "decor",
    "tag": "toy",
    "size": "medium",
    "svg": "bedroom/toy-train.svg",
    "widthUnits": 114.4,
    "heightUnits": 115.0,
    "gameW": 114.4,
    "viewBox": [
      1.0,
      -3.5,
      104.0,
      104.5
    ]
  },
  {
    "type": "item",
    "slug": "plant-stand",
    "name": "Plant Stand",
    "room": "bedroom",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "svg": "bedroom/plant-stand.svg",
    "widthUnits": 78.1,
    "heightUnits": 107.8,
    "gameW": 78.1,
    "viewBox": [
      14.5,
      3.0,
      71.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "daisy-pot",
    "name": "Daisy Pot",
    "room": "bedroom",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "svg": "bedroom/daisy-pot.svg",
    "widthUnits": 37.7,
    "heightUnits": 57.2,
    "gameW": 37.7,
    "holdable": true,
    "viewBox": [
      21.0,
      13.0,
      58.0,
      88.0
    ]
  },
  {
    "type": "item",
    "slug": "hamster-cage",
    "name": "Hamster House",
    "room": "bedroom",
    "category": "pets",
    "tag": "pet",
    "size": "medium",
    "svg": "bedroom/hamster-cage.svg",
    "widthUnits": 112.8,
    "heightUnits": 119.4,
    "gameW": 112.8,
    "viewBox": [
      3.0,
      1.5,
      94.0,
      99.5
    ]
  },
  {
    "type": "item",
    "slug": "guinea-pig",
    "name": "Guinea Pig",
    "room": "bedroom",
    "category": "pets",
    "tag": "pet",
    "size": "small",
    "svg": "bedroom/guinea-pig.svg",
    "widthUnits": 51.6,
    "heightUnits": 41.7,
    "gameW": 51.6,
    "holdable": true,
    "viewBox": [
      9.0,
      31.5,
      86.0,
      69.5
    ]
  },
  {
    "type": "item",
    "slug": "kitchen-counter",
    "name": "Counter",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "kitchen/kitchen-counter.svg",
    "widthUnits": 166.6,
    "heightUnits": 146.2,
    "gameW": 166.6,
    "viewBox": [
      1.0,
      15.0,
      98.0,
      86.0
    ]
  },
  {
    "type": "item",
    "slug": "kitchen-sink",
    "name": "Sink",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "svg": "kitchen/kitchen-sink.svg",
    "widthUnits": 166.6,
    "heightUnits": 162.3,
    "gameW": 166.6,
    "viewBox": [
      1.0,
      5.5,
      98.0,
      95.5
    ]
  },
  {
    "type": "item",
    "slug": "bar-stool",
    "name": "Bar Stool",
    "room": "kitchen",
    "category": "furniture",
    "tag": "seating",
    "size": "small",
    "svg": "kitchen/bar-stool.svg",
    "widthUnits": 52.8,
    "heightUnits": 68.8,
    "gameW": 52.8,
    "viewBox": [
      17.0,
      15.0,
      66.0,
      86.0
    ]
  },
  {
    "type": "item",
    "slug": "high-chair",
    "name": "High Chair",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "svg": "kitchen/high-chair.svg",
    "widthUnits": 88.0,
    "heightUnits": 99.0,
    "gameW": 88.0,
    "viewBox": [
      7.0,
      11.0,
      80.0,
      90.0
    ]
  },
  {
    "type": "item",
    "slug": "china-hutch",
    "name": "Dish Cabinet",
    "room": "kitchen",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "kitchen/china-hutch.svg",
    "widthUnits": 164.5,
    "heightUnits": 171.5,
    "gameW": 164.5,
    "viewBox": [
      3.0,
      3.0,
      94.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "pantry-shelf",
    "name": "Pantry",
    "room": "kitchen",
    "category": "furniture",
    "tag": "storage",
    "size": "medium",
    "svg": "kitchen/pantry-shelf.svg",
    "widthUnits": 137.6,
    "heightUnits": 153.6,
    "gameW": 137.6,
    "viewBox": [
      7.0,
      5.0,
      86.0,
      96.0
    ]
  },
  {
    "type": "item",
    "slug": "microwave",
    "name": "Microwave",
    "room": "kitchen",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "kitchen/microwave.svg",
    "widthUnits": 89.3,
    "heightUnits": 70.3,
    "gameW": 89.3,
    "viewBox": [
      3.0,
      27.0,
      94.0,
      74.0
    ]
  },
  {
    "type": "item",
    "slug": "kettle",
    "name": "Kettle",
    "room": "kitchen",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "kitchen/kettle.svg",
    "widthUnits": 49.2,
    "heightUnits": 56.4,
    "gameW": 49.2,
    "holdable": true,
    "viewBox": [
      15.0,
      7.0,
      82.0,
      94.0
    ]
  },
  {
    "type": "item",
    "slug": "rice-cooker",
    "name": "Rice Cooker",
    "room": "kitchen",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "kitchen/rice-cooker.svg",
    "widthUnits": 55.9,
    "heightUnits": 53.0,
    "gameW": 55.9,
    "holdable": true,
    "viewBox": [
      7.0,
      19.5,
      86.0,
      81.5
    ]
  },
  {
    "type": "item",
    "slug": "stand-mixer",
    "name": "Mixer",
    "room": "kitchen",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "kitchen/stand-mixer.svg",
    "widthUnits": 64.5,
    "heightUnits": 67.5,
    "gameW": 64.5,
    "viewBox": [
      7.0,
      11.0,
      86.0,
      90.0
    ]
  },
  {
    "type": "item",
    "slug": "pendant-lamp",
    "name": "Hanging Lamp",
    "room": "kitchen",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "svg": "kitchen/pendant-lamp.svg",
    "widthUnits": 78.0,
    "heightUnits": 103.5,
    "gameW": 78.0,
    "wall": true,
    "viewBox": [
      11.0,
      -2.5,
      78.0,
      103.5
    ]
  },
  {
    "type": "item",
    "slug": "runner-rug",
    "name": "Runner Rug",
    "room": "kitchen",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "svg": "kitchen/runner-rug.svg",
    "widthUnits": 207.2,
    "heightUnits": 105.0,
    "gameW": 207.2,
    "viewBox": [
      13.0,
      63.0,
      74.0,
      37.5
    ]
  },
  {
    "type": "item",
    "slug": "utensil-rail",
    "name": "Utensil Rail",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "svg": "kitchen/utensil-rail.svg",
    "widthUnits": 127.4,
    "heightUnits": 94.2,
    "gameW": 127.4,
    "wall": true,
    "viewBox": [
      1.0,
      7.0,
      98.0,
      72.5
    ]
  },
  {
    "type": "item",
    "slug": "spice-rack",
    "name": "Spice Rack",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "svg": "kitchen/spice-rack.svg",
    "widthUnits": 107.8,
    "heightUnits": 56.7,
    "gameW": 107.8,
    "wall": true,
    "viewBox": [
      1.0,
      25.5,
      98.0,
      51.5
    ]
  },
  {
    "type": "item",
    "slug": "cookie-jar",
    "name": "Cookie Jar",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/cookie-jar.svg",
    "widthUnits": 43.8,
    "heightUnits": 54.0,
    "gameW": 43.8,
    "holdable": true,
    "viewBox": [
      13.5,
      11.0,
      73.0,
      90.0
    ]
  },
  {
    "type": "item",
    "slug": "teapot",
    "name": "Teapot",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "kitchen/teapot.svg",
    "widthUnits": 55.5,
    "heightUnits": 43.8,
    "gameW": 55.5,
    "holdable": true,
    "viewBox": [
      5.0,
      28.0,
      92.5,
      73.0
    ]
  },
  {
    "type": "item",
    "slug": "cocoa-mug",
    "name": "Cocoa Mug",
    "room": "kitchen",
    "category": "food",
    "tag": "drink",
    "size": "small",
    "svg": "kitchen/cocoa-mug.svg",
    "widthUnits": 33.8,
    "heightUnits": 36.6,
    "gameW": 33.8,
    "holdable": true,
    "viewBox": [
      15.0,
      9.5,
      84.5,
      91.5
    ]
  },
  {
    "type": "item",
    "slug": "cooking-pot",
    "name": "Cooking Pot",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "kitchen/cooking-pot.svg",
    "widthUnits": 73.5,
    "heightUnits": 66.0,
    "gameW": 73.5,
    "holdable": true,
    "viewBox": [
      1.0,
      13.0,
      98.0,
      88.0
    ]
  },
  {
    "type": "item",
    "slug": "frying-pan",
    "name": "Egg Pan",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "kitchen/frying-pan.svg",
    "widthUnits": 80.4,
    "heightUnits": 40.4,
    "gameW": 80.4,
    "holdable": true,
    "viewBox": [
      3.0,
      50.5,
      100.5,
      50.5
    ]
  },
  {
    "type": "item",
    "slug": "herb-box",
    "name": "Herb Box",
    "room": "kitchen",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "svg": "kitchen/herb-box.svg",
    "widthUnits": 110.0,
    "heightUnits": 83.6,
    "gameW": 110.0,
    "viewBox": [
      0.0,
      25.0,
      100.0,
      76.0
    ]
  },
  {
    "type": "item",
    "slug": "lemon-tree",
    "name": "Lemon Tree",
    "room": "kitchen",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "svg": "kitchen/lemon-tree.svg",
    "widthUnits": 79.8,
    "heightUnits": 120.0,
    "gameW": 79.8,
    "viewBox": [
      18.0,
      1.0,
      66.5,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "bananas",
    "name": "Bananas",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/bananas.svg",
    "widthUnits": 44.5,
    "heightUnits": 42.5,
    "gameW": 44.5,
    "holdable": true,
    "viewBox": [
      14.0,
      17.0,
      89.0,
      85.0
    ]
  },
  {
    "type": "item",
    "slug": "watermelon-slice",
    "name": "Watermelon",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/watermelon-slice.svg",
    "widthUnits": 45.0,
    "heightUnits": 34.0,
    "gameW": 45.0,
    "holdable": true,
    "viewBox": [
      5.0,
      33.0,
      90.0,
      68.0
    ]
  },
  {
    "type": "item",
    "slug": "pancakes",
    "name": "Pancakes",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/pancakes.svg",
    "widthUnits": 56.4,
    "heightUnits": 47.1,
    "gameW": 56.4,
    "holdable": true,
    "viewBox": [
      3.0,
      22.5,
      94.0,
      78.5
    ]
  },
  {
    "type": "item",
    "slug": "ice-cream",
    "name": "Ice Cream",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/ice-cream.svg",
    "widthUnits": 18.4,
    "heightUnits": 39.8,
    "gameW": 18.4,
    "holdable": true,
    "viewBox": [
      27.0,
      -0.5,
      46.0,
      99.5
    ]
  },
  {
    "type": "item",
    "slug": "milk-bottle",
    "name": "Milk",
    "room": "kitchen",
    "category": "food",
    "tag": "drink",
    "size": "small",
    "svg": "kitchen/milk-bottle.svg",
    "widthUnits": 23.2,
    "heightUnits": 37.6,
    "gameW": 23.2,
    "holdable": true,
    "viewBox": [
      21.0,
      7.0,
      58.0,
      94.0
    ]
  },
  {
    "type": "item",
    "slug": "bread-loaf",
    "name": "Bread",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/bread-loaf.svg",
    "widthUnits": 48.4,
    "heightUnits": 44.0,
    "gameW": 48.4,
    "holdable": true,
    "viewBox": [
      6.0,
      21.0,
      88.0,
      80.0
    ]
  },
  {
    "type": "item",
    "slug": "cupcake",
    "name": "Cupcake",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "kitchen/cupcake.svg",
    "widthUnits": 32.9,
    "heightUnits": 44.8,
    "gameW": 32.9,
    "holdable": true,
    "viewBox": [
      13.5,
      1.5,
      73.0,
      99.5
    ]
  },
  {
    "type": "item",
    "slug": "dish-rack",
    "name": "Dish Rack",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "svg": "kitchen/dish-rack.svg",
    "widthUnits": 76.5,
    "heightUnits": 67.6,
    "gameW": 76.5,
    "viewBox": [
      5.0,
      21.5,
      90.0,
      79.5
    ]
  },
  {
    "type": "item",
    "slug": "pet-bowl",
    "name": "Pet Bowl",
    "room": "kitchen",
    "category": "pets",
    "tag": "pet",
    "size": "small",
    "svg": "kitchen/pet-bowl.svg",
    "widthUnits": 49.5,
    "heightUnits": 34.4,
    "gameW": 49.5,
    "holdable": true,
    "viewBox": [
      5.0,
      38.5,
      90.0,
      62.5
    ]
  },
  {
    "type": "item",
    "slug": "chick",
    "name": "Chick",
    "room": "kitchen",
    "category": "pets",
    "tag": "pet",
    "size": "small",
    "svg": "kitchen/chick.svg",
    "widthUnits": 37.4,
    "heightUnits": 37.6,
    "gameW": 37.4,
    "holdable": true,
    "viewBox": [
      8.5,
      17.5,
      83.0,
      83.5
    ]
  },
  {
    "type": "item",
    "slug": "retro-radio",
    "name": "Radio",
    "room": "living",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "living/retro-radio.svg",
    "widthUnits": 63.0,
    "heightUnits": 70.0,
    "gameW": 63.0,
    "holdable": true,
    "viewBox": [
      5.0,
      1.0,
      90.0,
      100.0
    ]
  },
  {
    "type": "item",
    "slug": "floor-fan",
    "name": "Fan",
    "room": "bedroom",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "svg": "bedroom/floor-fan.svg",
    "widthUnits": 52.8,
    "heightUnits": 78.4,
    "gameW": 52.8,
    "viewBox": [
      17.0,
      3.0,
      66.0,
      98.0
    ]
  },
  {
    "type": "item",
    "slug": "bedtime-snack",
    "name": "Milk & Cookies",
    "room": "bedroom",
    "category": "food",
    "tag": "food",
    "size": "small",
    "svg": "bedroom/bedtime-snack.svg",
    "widthUnits": 56.4,
    "heightUnits": 44.4,
    "gameW": 56.4,
    "holdable": true,
    "viewBox": [
      3.0,
      27.0,
      94.0,
      74.0
    ]
  },
  {
    "slug": "wood-bookshelf",
    "room": "any",
    "name": "Wood Bookshelf",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 124.0,
    "designW": 200,
    "widthUnits": 124.0,
    "heightUnits": 200.0,
    "viewBox": [
      19.0,
      1.0,
      62.0,
      100.0
    ],
    "svg": "packs/welcome-home/wood-bookshelf.svg"
  },
  {
    "slug": "lattice-bench",
    "room": "living",
    "name": "Lattice Bench",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 147.0,
    "designW": 150,
    "widthUnits": 147.0,
    "heightUnits": 135.0,
    "viewBox": [
      1.0,
      11.0,
      98.0,
      90.0
    ],
    "svg": "packs/welcome-home/lattice-bench.svg"
  },
  {
    "slug": "wood-coffee-table",
    "room": "living",
    "name": "Wood Coffee Table",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "gameW": 171.0,
    "designW": 190,
    "widthUnits": 171.0,
    "heightUnits": 121.6,
    "viewBox": [
      5.0,
      37.0,
      90.0,
      64.0
    ],
    "svg": "packs/welcome-home/wood-coffee-table.svg"
  },
  {
    "slug": "wood-desk",
    "room": "bedroom",
    "name": "Wood Desk",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 150.4,
    "designW": 160,
    "widthUnits": 150.4,
    "heightUnits": 137.6,
    "viewBox": [
      3.0,
      15.0,
      94.0,
      86.0
    ],
    "svg": "packs/welcome-home/wood-desk.svg"
  },
  {
    "slug": "big-wardrobe",
    "room": "bedroom",
    "name": "Big Wardrobe",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 154.0,
    "designW": 220,
    "widthUnits": 154.0,
    "heightUnits": 220.0,
    "viewBox": [
      15.0,
      1.0,
      70.0,
      100.0
    ],
    "svg": "packs/welcome-home/big-wardrobe.svg"
  },
  {
    "slug": "glass-cabinet",
    "room": "living",
    "name": "Glass Cabinet",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 118.8,
    "designW": 180,
    "widthUnits": 118.8,
    "heightUnits": 180.0,
    "viewBox": [
      17.0,
      1.0,
      66.0,
      100.0
    ],
    "svg": "packs/welcome-home/glass-cabinet.svg"
  },
  {
    "slug": "ladder-shelf",
    "room": "any",
    "name": "Ladder Shelf",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 87.0,
    "designW": 150,
    "widthUnits": 87.0,
    "heightUnits": 151.5,
    "viewBox": [
      21.0,
      0.0,
      58.0,
      101.0
    ],
    "svg": "packs/welcome-home/ladder-shelf.svg"
  },
  {
    "slug": "moving-box",
    "room": "living",
    "name": "Moving Box",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 88.2,
    "designW": 90,
    "widthUnits": 88.2,
    "heightUnits": 73.8,
    "viewBox": [
      1.0,
      19.0,
      98.0,
      82.0
    ],
    "svg": "packs/welcome-home/moving-box.svg",
    "holdable": true
  },
  {
    "slug": "box-stack",
    "room": "living",
    "name": "Box Stack",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 128.8,
    "designW": 140,
    "widthUnits": 128.8,
    "heightUnits": 114.8,
    "viewBox": [
      5.0,
      19.0,
      92.0,
      82.0
    ],
    "svg": "packs/welcome-home/box-stack.svg"
  },
  {
    "slug": "wh-fiddle-leaf-fig",
    "room": "any",
    "name": "Fiddle-Leaf Fig",
    "type": "item",
    "pack": "welcome-home",
    "category": "plants",
    "tag": "plant",
    "size": "large",
    "gameW": 75.0,
    "designW": 150,
    "widthUnits": 75.0,
    "heightUnits": 158.2,
    "viewBox": [
      25.0,
      -4.5,
      50.0,
      105.5
    ],
    "svg": "packs/welcome-home/wh-fiddle-leaf-fig.svg"
  },
  {
    "slug": "apple-tree",
    "room": "backyard",
    "name": "Apple Tree",
    "type": "item",
    "pack": "welcome-home",
    "category": "plants",
    "tag": "plant",
    "size": "large",
    "gameW": 187.2,
    "designW": 240,
    "widthUnits": 187.2,
    "heightUnits": 235.2,
    "viewBox": [
      11.0,
      3.0,
      78.0,
      98.0
    ],
    "svg": "packs/welcome-home/apple-tree.svg"
  },
  {
    "slug": "mini-greenhouse",
    "room": "backyard",
    "name": "Mini Greenhouse",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 156.0,
    "designW": 200,
    "widthUnits": 156.0,
    "heightUnits": 188.0,
    "viewBox": [
      11.0,
      7.0,
      78.0,
      94.0
    ],
    "svg": "packs/welcome-home/mini-greenhouse.svg"
  },
  {
    "slug": "brick-fireplace",
    "room": "living",
    "name": "Cozy Fireplace",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 156.8,
    "designW": 160,
    "widthUnits": 156.8,
    "heightUnits": 150.4,
    "viewBox": [
      1.0,
      7.0,
      98.0,
      94.0
    ],
    "svg": "packs/welcome-home/brick-fireplace.svg"
  },
  {
    "slug": "wh-string-lights",
    "room": "any",
    "name": "Cozy Lights",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "gameW": 222.2,
    "designW": 220,
    "widthUnits": 222.2,
    "heightUnits": 58.3,
    "viewBox": [
      -0.5,
      7.5,
      101.0,
      26.5
    ],
    "svg": "packs/welcome-home/wh-string-lights.svg",
    "holdable": true
  },
  {
    "slug": "wh-pendant-lamp",
    "room": "any",
    "name": "Pendant Lamp",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 54.0,
    "designW": 100,
    "widthUnits": 54.0,
    "heightUnits": 107.5,
    "viewBox": [
      23.0,
      -0.5,
      54.0,
      107.5
    ],
    "svg": "packs/welcome-home/wh-pendant-lamp.svg"
  },
  {
    "slug": "wh-arc-floor-lamp",
    "room": "any",
    "name": "Arc Floor Lamp",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "lighting",
    "size": "large",
    "gameW": 105.0,
    "designW": 150,
    "widthUnits": 105.0,
    "heightUnits": 141.8,
    "viewBox": [
      29.0,
      6.5,
      70.0,
      94.5
    ],
    "svg": "packs/welcome-home/wh-arc-floor-lamp.svg"
  },
  {
    "slug": "cream-sofa",
    "room": "living",
    "name": "Cream Sofa",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 234.6,
    "designW": 230,
    "widthUnits": 234.6,
    "heightUnits": 188.6,
    "viewBox": [
      -1.0,
      19.0,
      102.0,
      82.0
    ],
    "svg": "packs/welcome-home/cream-sofa.svg"
  },
  {
    "slug": "wooden-bed",
    "room": "bedroom",
    "name": "Wooden Bed",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 235.2,
    "designW": 240,
    "widthUnits": 235.2,
    "heightUnits": 192.0,
    "viewBox": [
      1.0,
      21.0,
      98.0,
      80.0
    ],
    "svg": "packs/welcome-home/wooden-bed.svg"
  },
  {
    "slug": "bulletin-board",
    "room": "any",
    "name": "Bulletin Board",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 131.6,
    "designW": 140,
    "widthUnits": 131.6,
    "heightUnits": 92.4,
    "viewBox": [
      3.0,
      7.0,
      94.0,
      66.0
    ],
    "svg": "packs/welcome-home/bulletin-board.svg",
    "holdable": true
  },
  {
    "slug": "landscape-art",
    "room": "any",
    "name": "Landscape Art",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 103.2,
    "designW": 120,
    "widthUnits": 103.2,
    "heightUnits": 84.0,
    "viewBox": [
      7.0,
      7.0,
      86.0,
      70.0
    ],
    "svg": "packs/welcome-home/landscape-art.svg",
    "holdable": true
  },
  {
    "slug": "sale-sign",
    "room": "backyard",
    "name": "Yard Sign",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 63.8,
    "designW": 110,
    "widthUnits": 63.8,
    "heightUnits": 103.4,
    "viewBox": [
      25.0,
      7.0,
      58.0,
      94.0
    ],
    "svg": "packs/welcome-home/sale-sign.svg"
  },
  {
    "slug": "fire-pit",
    "room": "backyard",
    "name": "Fire Pit",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "gameW": 126.0,
    "designW": 140,
    "widthUnits": 126.0,
    "heightUnits": 106.4,
    "viewBox": [
      5.0,
      25.0,
      90.0,
      76.0
    ],
    "svg": "packs/welcome-home/fire-pit.svg"
  },
  {
    "slug": "hanging-lantern",
    "room": "any",
    "name": "Hanging Lantern",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 39.6,
    "designW": 60,
    "widthUnits": 39.6,
    "heightUnits": 54.9,
    "viewBox": [
      17.0,
      -0.5,
      66.0,
      91.5
    ],
    "svg": "packs/welcome-home/hanging-lantern.svg"
  },
  {
    "slug": "round-rug",
    "room": "any",
    "name": "Round Woven Rug",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "gameW": 244.8,
    "designW": 240,
    "widthUnits": 244.8,
    "heightUnits": 86.4,
    "viewBox": [
      -1.0,
      62.0,
      102.0,
      36.0
    ],
    "svg": "packs/welcome-home/round-rug.svg"
  },
  {
    "slug": "stripe-runner",
    "room": "any",
    "name": "Striped Runner",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "gameW": 235.2,
    "designW": 240,
    "widthUnits": 235.2,
    "heightUnits": 64.8,
    "viewBox": [
      1.0,
      69.0,
      98.0,
      27.0
    ],
    "svg": "packs/welcome-home/stripe-runner.svg"
  },
  {
    "slug": "wood-armchair",
    "room": "living",
    "name": "Wood Armchair",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 127.4,
    "designW": 130,
    "widthUnits": 127.4,
    "heightUnits": 117.0,
    "viewBox": [
      1.0,
      11.0,
      98.0,
      90.0
    ],
    "svg": "packs/welcome-home/wood-armchair.svg"
  },
  {
    "slug": "wh-nightstand",
    "room": "bedroom",
    "name": "Cozy Nightstand",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "gameW": 74.0,
    "designW": 100,
    "widthUnits": 74.0,
    "heightUnits": 90.0,
    "viewBox": [
      13.0,
      11.0,
      74.0,
      90.0
    ],
    "svg": "packs/welcome-home/wh-nightstand.svg"
  },
  {
    "slug": "wh-kitchen-counter",
    "room": "kitchen",
    "name": "Kitchen Counter",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "appliance",
    "size": "large",
    "gameW": 166.6,
    "designW": 170,
    "widthUnits": 166.6,
    "heightUnits": 155.5,
    "viewBox": [
      1.0,
      9.5,
      98.0,
      91.5
    ],
    "svg": "packs/welcome-home/wh-kitchen-counter.svg"
  },
  {
    "slug": "wood-stool",
    "room": "living",
    "name": "Wood Stool",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "gameW": 46.2,
    "designW": 70,
    "widthUnits": 46.2,
    "heightUnits": 47.6,
    "viewBox": [
      17.0,
      33.0,
      66.0,
      68.0
    ],
    "svg": "packs/welcome-home/wood-stool.svg"
  },
  {
    "slug": "wh-dresser",
    "room": "bedroom",
    "name": "Wood Dresser",
    "type": "item",
    "pack": "welcome-home",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 146.2,
    "designW": 170,
    "widthUnits": 146.2,
    "heightUnits": 158.1,
    "viewBox": [
      7.0,
      8.0,
      86.0,
      93.0
    ],
    "svg": "packs/welcome-home/wh-dresser.svg"
  },
  {
    "slug": "wh-snake-plant",
    "room": "any",
    "name": "Cozy Snake Plant",
    "type": "item",
    "pack": "welcome-home",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "gameW": 50.0,
    "designW": 90,
    "widthUnits": 50.0,
    "heightUnits": 87.8,
    "viewBox": [
      20.5,
      3.5,
      55.5,
      97.5
    ],
    "svg": "packs/welcome-home/wh-snake-plant.svg"
  },
  {
    "slug": "sprout-pot",
    "room": "any",
    "name": "Little Sprout",
    "type": "item",
    "pack": "welcome-home",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "gameW": 27.6,
    "designW": 60,
    "widthUnits": 27.6,
    "heightUnits": 44.7,
    "viewBox": [
      27.0,
      26.5,
      46.0,
      74.5
    ],
    "svg": "packs/welcome-home/sprout-pot.svg",
    "holdable": true
  },
  {
    "slug": "trailing-plant",
    "room": "any",
    "name": "Trailing Plant Shelf",
    "type": "item",
    "pack": "welcome-home",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "gameW": 94.6,
    "designW": 110,
    "widthUnits": 94.6,
    "heightUnits": 97.4,
    "viewBox": [
      7.0,
      9.0,
      86.0,
      88.5
    ],
    "svg": "packs/welcome-home/trailing-plant.svg",
    "holdable": true
  },
  {
    "slug": "acorn-friend",
    "room": "living",
    "name": "Acorn Friend",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 26.4,
    "designW": 40,
    "widthUnits": 26.4,
    "heightUnits": 36.0,
    "viewBox": [
      17.0,
      11.0,
      66.0,
      90.0
    ],
    "svg": "packs/welcome-home/acorn-friend.svg",
    "holdable": true
  },
  {
    "slug": "wh-teapot",
    "room": "kitchen",
    "name": "Cozy Teapot",
    "type": "item",
    "pack": "welcome-home",
    "category": "food",
    "tag": "food",
    "size": "small",
    "gameW": 60.2,
    "designW": 70,
    "widthUnits": 60.2,
    "heightUnits": 54.6,
    "viewBox": [
      7.5,
      23.0,
      86.0,
      78.0
    ],
    "svg": "packs/welcome-home/wh-teapot.svg",
    "holdable": true
  },
  {
    "slug": "cozy-mug",
    "room": "kitchen",
    "name": "Cozy Mug",
    "type": "item",
    "pack": "welcome-home",
    "category": "food",
    "tag": "food",
    "size": "small",
    "gameW": 28.4,
    "designW": 40,
    "widthUnits": 28.4,
    "heightUnits": 36.6,
    "viewBox": [
      19.0,
      9.5,
      71.0,
      91.5
    ],
    "svg": "packs/welcome-home/cozy-mug.svg",
    "holdable": true
  },
  {
    "slug": "wh-book-stack",
    "room": "any",
    "name": "Book Stack",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 49.2,
    "designW": 60,
    "widthUnits": 49.2,
    "heightUnits": 44.4,
    "viewBox": [
      9.0,
      27.0,
      82.0,
      74.0
    ],
    "svg": "packs/welcome-home/wh-book-stack.svg",
    "holdable": true
  },
  {
    "slug": "knit-cushion",
    "room": "any",
    "name": "Knit Cushion",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 46.8,
    "designW": 60,
    "widthUnits": 46.8,
    "heightUnits": 44.4,
    "viewBox": [
      11.0,
      27.0,
      78.0,
      74.0
    ],
    "svg": "packs/welcome-home/knit-cushion.svg",
    "holdable": true
  },
  {
    "slug": "picnic-basket",
    "room": "backyard",
    "name": "Picnic Basket",
    "type": "item",
    "pack": "welcome-home",
    "category": "food",
    "tag": "food",
    "size": "small",
    "gameW": 60.2,
    "designW": 70,
    "widthUnits": 60.2,
    "heightUnits": 59.1,
    "viewBox": [
      7.0,
      16.5,
      86.0,
      84.5
    ],
    "svg": "packs/welcome-home/picnic-basket.svg",
    "holdable": true
  },
  {
    "slug": "leaf-wreath",
    "room": "any",
    "name": "Autumn Wreath",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 96.0,
    "designW": 80,
    "widthUnits": 96.0,
    "heightUnits": 96.0,
    "viewBox": [
      -10.0,
      -10.0,
      120.0,
      120.0
    ],
    "svg": "packs/welcome-home/leaf-wreath.svg"
  },
  {
    "slug": "wall-clock",
    "room": "any",
    "name": "Wood Wall Clock",
    "type": "item",
    "pack": "welcome-home",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 60.2,
    "designW": 70,
    "widthUnits": 60.2,
    "heightUnits": 60.2,
    "viewBox": [
      7.0,
      7.0,
      86.0,
      86.0
    ],
    "svg": "packs/welcome-home/wall-clock.svg",
    "holdable": true
  },
  {
    "slug": "ring-light",
    "room": "any",
    "name": "Ring Light",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "lighting",
    "size": "large",
    "gameW": 105.4,
    "designW": 170,
    "widthUnits": 105.4,
    "heightUnits": 173.4,
    "viewBox": [
      19.0,
      -1.0,
      62.0,
      102.0
    ],
    "svg": "packs/sunny-vibes/ring-light.svg"
  },
  {
    "slug": "phone-stand",
    "room": "bedroom",
    "name": "Phone on a Stand",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 27.0,
    "designW": 50,
    "widthUnits": 27.0,
    "heightUnits": 45.0,
    "viewBox": [
      23.0,
      11.0,
      54.0,
      90.0
    ],
    "svg": "packs/sunny-vibes/phone-stand.svg",
    "holdable": true
  },
  {
    "slug": "gaming-chair",
    "room": "bedroom",
    "name": "Gaming Chair",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 101.4,
    "designW": 130,
    "widthUnits": 101.4,
    "heightUnits": 130.0,
    "viewBox": [
      11.0,
      1.0,
      78.0,
      100.0
    ],
    "svg": "packs/sunny-vibes/gaming-chair.svg"
  },
  {
    "slug": "curvy-desk",
    "room": "bedroom",
    "name": "Curvy Yellow Desk",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 180.0,
    "designW": 200,
    "widthUnits": 180.0,
    "heightUnits": 168.0,
    "viewBox": [
      5.0,
      17.0,
      90.0,
      84.0
    ],
    "svg": "packs/sunny-vibes/curvy-desk.svg"
  },
  {
    "slug": "cloud-sofa",
    "room": "living",
    "name": "Puffy Cloud Sofa",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 212.0,
    "designW": 200,
    "widthUnits": 212.0,
    "heightUnits": 168.0,
    "viewBox": [
      -3.5,
      17.0,
      106.0,
      84.0
    ],
    "svg": "packs/sunny-vibes/cloud-sofa.svg"
  },
  {
    "slug": "arched-mirror",
    "room": "salon",
    "name": "Arched Mirror",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 112.0,
    "designW": 160,
    "widthUnits": 112.0,
    "heightUnits": 160.0,
    "viewBox": [
      15.0,
      1.0,
      70.0,
      100.0
    ],
    "svg": "packs/sunny-vibes/arched-mirror.svg"
  },
  {
    "slug": "clothes-rail",
    "room": "bedroom",
    "name": "Clothes Rail",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 135.0,
    "designW": 150,
    "widthUnits": 135.0,
    "heightUnits": 138.0,
    "viewBox": [
      5.0,
      9.0,
      90.0,
      92.0
    ],
    "svg": "packs/sunny-vibes/clothes-rail.svg"
  },
  {
    "slug": "cube-shelf",
    "room": "any",
    "name": "Cube Shelf",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 106.6,
    "designW": 130,
    "widthUnits": 106.6,
    "heightUnits": 122.2,
    "viewBox": [
      9.0,
      7.0,
      82.0,
      94.0
    ],
    "svg": "packs/sunny-vibes/cube-shelf.svg"
  },
  {
    "slug": "big-monitor",
    "room": "bedroom",
    "name": "Big Monitor",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "appliance",
    "size": "medium",
    "gameW": 103.4,
    "designW": 110,
    "widthUnits": 103.4,
    "heightUnits": 107.8,
    "viewBox": [
      3.0,
      3.0,
      94.0,
      98.0
    ],
    "svg": "packs/sunny-vibes/big-monitor.svg"
  },
  {
    "slug": "keyboard",
    "room": "bedroom",
    "name": "Cute Keyboard",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "gameW": 65.8,
    "designW": 70,
    "widthUnits": 65.8,
    "heightUnits": 32.2,
    "viewBox": [
      3.0,
      55.0,
      94.0,
      46.0
    ],
    "svg": "packs/sunny-vibes/keyboard.svg",
    "holdable": true
  },
  {
    "slug": "vlog-camera",
    "room": "bedroom",
    "name": "Vlog Camera",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 51.6,
    "designW": 60,
    "widthUnits": 51.6,
    "heightUnits": 46.8,
    "viewBox": [
      9.0,
      23.0,
      86.0,
      78.0
    ],
    "svg": "packs/sunny-vibes/vlog-camera.svg",
    "holdable": true
  },
  {
    "slug": "desk-mic",
    "room": "bedroom",
    "name": "Desk Mic",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 27.0,
    "designW": 50,
    "widthUnits": 27.0,
    "heightUnits": 47.0,
    "viewBox": [
      23.0,
      7.0,
      54.0,
      94.0
    ],
    "svg": "packs/sunny-vibes/desk-mic.svg",
    "holdable": true
  },
  {
    "slug": "star-lamp",
    "room": "any",
    "name": "Star Lamp",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "gameW": 82.0,
    "designW": 100,
    "widthUnits": 82.0,
    "heightUnits": 102.0,
    "viewBox": [
      9.0,
      -1.0,
      82.0,
      102.0
    ],
    "svg": "packs/sunny-vibes/star-lamp.svg"
  },
  {
    "slug": "flower-lamp",
    "room": "any",
    "name": "Flower Lamp",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 48.0,
    "designW": 80,
    "widthUnits": 48.0,
    "heightUnits": 77.6,
    "viewBox": [
      20.0,
      4.0,
      60.0,
      97.0
    ],
    "svg": "packs/sunny-vibes/flower-lamp.svg"
  },
  {
    "slug": "boba-cup",
    "room": "kitchen",
    "name": "Boba Buddy",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "food",
    "tag": "food",
    "size": "small",
    "gameW": 26.4,
    "designW": 40,
    "widthUnits": 26.4,
    "heightUnits": 41.4,
    "viewBox": [
      17.0,
      -2.5,
      66.0,
      103.5
    ],
    "svg": "packs/sunny-vibes/boba-cup.svg",
    "holdable": true
  },
  {
    "slug": "mini-fridge",
    "room": "kitchen",
    "name": "Mini Fridge",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "appliance",
    "size": "medium",
    "gameW": 77.0,
    "designW": 110,
    "widthUnits": 77.0,
    "heightUnits": 88.0,
    "viewBox": [
      15.0,
      21.0,
      70.0,
      80.0
    ],
    "svg": "packs/sunny-vibes/mini-fridge.svg"
  },
  {
    "slug": "bubble-bath",
    "room": "bedroom",
    "name": "Bubble Bath",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 166.6,
    "designW": 170,
    "widthUnits": 166.6,
    "heightUnits": 156.4,
    "viewBox": [
      1.0,
      9.0,
      98.0,
      92.0
    ],
    "svg": "packs/sunny-vibes/bubble-bath.svg"
  },
  {
    "slug": "checker-rug",
    "room": "any",
    "name": "Checker Rug",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "gameW": 244.8,
    "designW": 240,
    "widthUnits": 244.8,
    "heightUnits": 86.4,
    "viewBox": [
      -1.0,
      62.0,
      102.0,
      36.0
    ],
    "svg": "packs/sunny-vibes/checker-rug.svg"
  },
  {
    "slug": "sv-cloud-rug",
    "room": "any",
    "name": "Sunny Cloud Rug",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "gameW": 224.4,
    "designW": 220,
    "widthUnits": 224.4,
    "heightUnits": 83.6,
    "viewBox": [
      -1.0,
      61.0,
      102.0,
      38.0
    ],
    "svg": "packs/sunny-vibes/sv-cloud-rug.svg"
  },
  {
    "slug": "caterpillar-plush",
    "room": "bedroom",
    "name": "Caterpillar Plush",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 94.0,
    "designW": 100,
    "widthUnits": 94.0,
    "heightUnits": 74.0,
    "viewBox": [
      0.0,
      27.0,
      94.0,
      74.0
    ],
    "svg": "packs/sunny-vibes/caterpillar-plush.svg",
    "holdable": true
  },
  {
    "slug": "frog-plush",
    "room": "bedroom",
    "name": "Frog Plush",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 44.4,
    "designW": 60,
    "widthUnits": 44.4,
    "heightUnits": 45.0,
    "viewBox": [
      13.0,
      26.0,
      74.0,
      75.0
    ],
    "svg": "packs/sunny-vibes/frog-plush.svg",
    "holdable": true
  },
  {
    "slug": "hamster-pet",
    "room": "bedroom",
    "name": "Hamster Pal",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "pets",
    "tag": "pet",
    "size": "small",
    "gameW": 39.0,
    "designW": 50,
    "widthUnits": 39.0,
    "heightUnits": 41.0,
    "viewBox": [
      11.0,
      19.0,
      78.0,
      82.0
    ],
    "svg": "packs/sunny-vibes/hamster-pet.svg",
    "holdable": true
  },
  {
    "slug": "sunny-art",
    "room": "any",
    "name": "Sunny Art",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 77.4,
    "designW": 90,
    "widthUnits": 77.4,
    "heightUnits": 84.6,
    "viewBox": [
      7.0,
      3.0,
      86.0,
      94.0
    ],
    "svg": "packs/sunny-vibes/sunny-art.svg",
    "holdable": true
  },
  {
    "slug": "pothos-plant",
    "room": "any",
    "name": "Pothos Plant",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "gameW": 48.6,
    "designW": 90,
    "widthUnits": 48.6,
    "heightUnits": 62.6,
    "viewBox": [
      23.0,
      31.5,
      54.0,
      69.5
    ],
    "svg": "packs/sunny-vibes/pothos-plant.svg"
  },
  {
    "slug": "cactus-buddy",
    "room": "any",
    "name": "Cactus Buddy",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "gameW": 33.0,
    "designW": 50,
    "widthUnits": 33.0,
    "heightUnits": 46.5,
    "viewBox": [
      17.0,
      8.0,
      66.0,
      93.0
    ],
    "svg": "packs/sunny-vibes/cactus-buddy.svg",
    "holdable": true
  },
  {
    "slug": "checker-bed",
    "room": "bedroom",
    "name": "Checkered Bed",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 196.0,
    "designW": 200,
    "widthUnits": 196.0,
    "heightUnits": 144.0,
    "viewBox": [
      1.0,
      29.0,
      98.0,
      72.0
    ],
    "svg": "packs/sunny-vibes/checker-bed.svg"
  },
  {
    "slug": "puffy-stool",
    "room": "living",
    "name": "Puffy Stool",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "gameW": 46.9,
    "designW": 70,
    "widthUnits": 46.9,
    "heightUnits": 52.8,
    "viewBox": [
      16.0,
      25.5,
      67.0,
      75.5
    ],
    "svg": "packs/sunny-vibes/puffy-stool.svg"
  },
  {
    "slug": "sv-wall-shelf",
    "room": "any",
    "name": "Sunny Shelf",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 122.2,
    "designW": 130,
    "widthUnits": 122.2,
    "heightUnits": 56.6,
    "viewBox": [
      3.0,
      33.0,
      94.0,
      43.5
    ],
    "svg": "packs/sunny-vibes/sv-wall-shelf.svg"
  },
  {
    "slug": "headphones",
    "room": "bedroom",
    "name": "Headphones",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 43.0,
    "designW": 50,
    "widthUnits": 43.0,
    "heightUnits": 36.8,
    "viewBox": [
      7.0,
      11.5,
      86.0,
      73.5
    ],
    "svg": "packs/sunny-vibes/headphones.svg",
    "holdable": true
  },
  {
    "slug": "game-controller",
    "room": "bedroom",
    "name": "Game Controller",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 45.5,
    "designW": 50,
    "widthUnits": 45.5,
    "heightUnits": 36.0,
    "viewBox": [
      4.5,
      29.0,
      91.0,
      72.0
    ],
    "svg": "packs/sunny-vibes/game-controller.svg",
    "holdable": true
  },
  {
    "slug": "heart-light",
    "room": "any",
    "name": "Heart Wall Light",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 60.2,
    "designW": 70,
    "widthUnits": 60.2,
    "heightUnits": 60.2,
    "viewBox": [
      7.0,
      7.0,
      86.0,
      86.0
    ],
    "svg": "packs/sunny-vibes/heart-light.svg"
  },
  {
    "slug": "sv-bean-bag",
    "room": "living",
    "name": "Sunny Bean Bag",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "gameW": 114.4,
    "designW": 130,
    "widthUnits": 114.4,
    "heightUnits": 98.2,
    "viewBox": [
      5.5,
      25.5,
      88.0,
      75.5
    ],
    "svg": "packs/sunny-vibes/sv-bean-bag.svg"
  },
  {
    "slug": "cute-speaker",
    "room": "living",
    "name": "Cute Speaker",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "gameW": 29.0,
    "designW": 50,
    "widthUnits": 29.0,
    "heightUnits": 45.0,
    "viewBox": [
      21.0,
      11.0,
      58.0,
      90.0
    ],
    "svg": "packs/sunny-vibes/cute-speaker.svg",
    "holdable": true
  },
  {
    "slug": "wavy-floor-lamp",
    "room": "any",
    "name": "Wavy Floor Lamp",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "lighting",
    "size": "large",
    "gameW": 45.0,
    "designW": 90,
    "widthUnits": 45.0,
    "heightUnits": 86.4,
    "viewBox": [
      25.0,
      5.0,
      50.0,
      96.0
    ],
    "svg": "packs/sunny-vibes/wavy-floor-lamp.svg"
  },
  {
    "slug": "pastel-wardrobe",
    "room": "bedroom",
    "name": "Pastel Wardrobe",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 132.0,
    "designW": 200,
    "widthUnits": 132.0,
    "heightUnits": 200.0,
    "viewBox": [
      17.0,
      1.0,
      66.0,
      100.0
    ],
    "svg": "packs/sunny-vibes/pastel-wardrobe.svg"
  },
  {
    "slug": "desk-lamp",
    "room": "any",
    "name": "Desk Lamp",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 43.2,
    "designW": 60,
    "widthUnits": 43.2,
    "heightUnits": 51.6,
    "viewBox": [
      15.0,
      15.0,
      72.0,
      86.0
    ],
    "svg": "packs/sunny-vibes/desk-lamp.svg",
    "holdable": true
  },
  {
    "slug": "side-table-round",
    "room": "living",
    "name": "Round Side Table",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "gameW": 68.8,
    "designW": 80,
    "widthUnits": 68.8,
    "heightUnits": 64.0,
    "viewBox": [
      7.0,
      21.0,
      86.0,
      80.0
    ],
    "svg": "packs/sunny-vibes/side-table-round.svg"
  },
  {
    "slug": "sticker-board",
    "room": "any",
    "name": "Sticker Board",
    "type": "item",
    "pack": "sunny-vibes",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 103.4,
    "designW": 110,
    "widthUnits": 103.4,
    "heightUnits": 77.0,
    "viewBox": [
      3.0,
      7.0,
      94.0,
      70.0
    ],
    "svg": "packs/sunny-vibes/sticker-board.svg",
    "holdable": true
  },
  {
    "slug": "salon-chair",
    "name": "Salon Chair",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 111.8,
    "designW": 130,
    "widthUnits": 111.8,
    "heightUnits": 127.4,
    "viewBox": [
      7.0,
      3.0,
      86.0,
      98.0
    ],
    "svg": "packs/glossy/salon-chair.svg"
  },
  {
    "slug": "wash-chair",
    "name": "Hair-Wash Chair",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 186.2,
    "designW": 190,
    "widthUnits": 186.2,
    "heightUnits": 174.8,
    "viewBox": [
      1.0,
      9.0,
      98.0,
      92.0
    ],
    "svg": "packs/glossy/wash-chair.svg"
  },
  {
    "slug": "glow-mirror",
    "name": "Glow Mirror",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "gameW": 103.4,
    "designW": 110,
    "widthUnits": 103.4,
    "heightUnits": 103.4,
    "viewBox": [
      3.0,
      -1.0,
      94.0,
      94.0
    ],
    "svg": "packs/glossy/glow-mirror.svg"
  },
  {
    "slug": "pink-vanity",
    "name": "Pink Vanity",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 159.8,
    "designW": 170,
    "widthUnits": 159.8,
    "heightUnits": 166.6,
    "viewBox": [
      3.0,
      3.0,
      94.0,
      98.0
    ],
    "svg": "packs/glossy/pink-vanity.svg"
  },
  {
    "slug": "polish-rack",
    "name": "Nail Polish Rack",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "gameW": 99.0,
    "designW": 110,
    "widthUnits": 99.0,
    "heightUnits": 103.4,
    "viewBox": [
      5.0,
      3.0,
      90.0,
      94.0
    ],
    "svg": "packs/glossy/polish-rack.svg"
  },
  {
    "slug": "polish-bottle",
    "name": "Polish Bottle",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 18.6,
    "designW": 30,
    "widthUnits": 18.6,
    "heightUnits": 29.4,
    "viewBox": [
      19.0,
      3.0,
      62.0,
      98.0
    ],
    "svg": "packs/glossy/polish-bottle.svg",
    "holdable": true
  },
  {
    "slug": "cream-jars",
    "name": "Cream Jars",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 47.0,
    "designW": 50,
    "widthUnits": 47.0,
    "heightUnits": 31.0,
    "viewBox": [
      3.0,
      39.0,
      94.0,
      62.0
    ],
    "svg": "packs/glossy/cream-jars.svg",
    "holdable": true
  },
  {
    "slug": "lotion-trio",
    "name": "Lotion Bottles",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 49.2,
    "designW": 60,
    "widthUnits": 49.2,
    "heightUnits": 43.2,
    "viewBox": [
      9.0,
      29.0,
      82.0,
      72.0
    ],
    "svg": "packs/glossy/lotion-trio.svg"
  },
  {
    "slug": "hair-dryer",
    "name": "Glossy Hair Dryer",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 42.0,
    "designW": 50,
    "widthUnits": 42.0,
    "heightUnits": 40.0,
    "viewBox": [
      9.0,
      15.0,
      84.0,
      80.0
    ],
    "svg": "packs/glossy/hair-dryer.svg",
    "holdable": true
  },
  {
    "slug": "towel-cart",
    "name": "Towel Cart",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "gameW": 93.6,
    "designW": 120,
    "widthUnits": 93.6,
    "heightUnits": 112.8,
    "viewBox": [
      11.0,
      7.0,
      78.0,
      94.0
    ],
    "svg": "packs/glossy/towel-cart.svg"
  },
  {
    "slug": "nail-table",
    "name": "Manicure Table",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 169.2,
    "designW": 180,
    "widthUnits": 169.2,
    "heightUnits": 140.4,
    "viewBox": [
      3.0,
      23.0,
      94.0,
      78.0
    ],
    "svg": "packs/glossy/nail-table.svg"
  },
  {
    "slug": "arched-shelf",
    "name": "Arched Shelf",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 98.6,
    "designW": 170,
    "widthUnits": 98.6,
    "heightUnits": 170.0,
    "viewBox": [
      21.0,
      1.0,
      58.0,
      100.0
    ],
    "svg": "packs/glossy/arched-shelf.svg"
  },
  {
    "slug": "pink-fountain",
    "name": "Bubbly Fountain",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "gameW": 126.0,
    "designW": 140,
    "widthUnits": 126.0,
    "heightUnits": 131.6,
    "viewBox": [
      5.0,
      7.0,
      90.0,
      94.0
    ],
    "svg": "packs/glossy/pink-fountain.svg"
  },
  {
    "slug": "fancy-sofa",
    "name": "Fancy Sofa",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 234.6,
    "designW": 230,
    "widthUnits": 234.6,
    "heightUnits": 202.4,
    "viewBox": [
      -1.0,
      13.0,
      102.0,
      88.0
    ],
    "svg": "packs/glossy/fancy-sofa.svg"
  },
  {
    "slug": "lilac-curtain",
    "name": "Lilac Curtain",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "gameW": 176.4,
    "designW": 180,
    "widthUnits": 176.4,
    "heightUnits": 172.8,
    "viewBox": [
      1.0,
      1.0,
      98.0,
      96.0
    ],
    "svg": "packs/glossy/lilac-curtain.svg"
  },
  {
    "slug": "reception-desk",
    "name": "Reception Desk",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 186.2,
    "designW": 190,
    "widthUnits": 186.2,
    "heightUnits": 163.4,
    "viewBox": [
      1.0,
      15.0,
      98.0,
      86.0
    ],
    "svg": "packs/glossy/reception-desk.svg"
  },
  {
    "slug": "bubbly-plant",
    "name": "Bubbly Plant",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "gameW": 53.1,
    "designW": 90,
    "widthUnits": 53.1,
    "heightUnits": 81.0,
    "viewBox": [
      20.0,
      11.0,
      59.0,
      90.0
    ],
    "svg": "packs/glossy/bubbly-plant.svg"
  },
  {
    "slug": "vine-planter",
    "name": "Hanging Vine Planter",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "gameW": 56.7,
    "designW": 90,
    "widthUnits": 56.7,
    "heightUnits": 99.9,
    "viewBox": [
      18.5,
      -0.5,
      63.0,
      111.0
    ],
    "svg": "packs/glossy/vine-planter.svg"
  },
  {
    "slug": "droplet-buddy",
    "name": "Droplet Buddy",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 32.0,
    "designW": 50,
    "widthUnits": 32.0,
    "heightUnits": 49.0,
    "viewBox": [
      18.0,
      3.0,
      64.0,
      98.0
    ],
    "svg": "packs/glossy/droplet-buddy.svg",
    "holdable": true
  },
  {
    "slug": "flower-cart",
    "name": "Flower Cart",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 173.4,
    "designW": 170,
    "widthUnits": 173.4,
    "heightUnits": 153.0,
    "viewBox": [
      -1.0,
      11.0,
      102.0,
      90.0
    ],
    "svg": "packs/glossy/flower-cart.svg"
  },
  {
    "slug": "globe-pendants",
    "name": "Globe Pendants",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "gameW": 92.4,
    "designW": 110,
    "widthUnits": 92.4,
    "heightUnits": 84.2,
    "viewBox": [
      8.0,
      -0.5,
      84.0,
      76.5
    ],
    "svg": "packs/glossy/globe-pendants.svg"
  },
  {
    "slug": "drop-lamp",
    "name": "Water-Drop Lamp",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 32.4,
    "designW": 60,
    "widthUnits": 32.4,
    "heightUnits": 58.5,
    "viewBox": [
      23.0,
      -0.5,
      54.0,
      97.5
    ],
    "svg": "packs/glossy/drop-lamp.svg"
  },
  {
    "slug": "gold-floor-mirror",
    "name": "Gold Floor Mirror",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 52.2,
    "designW": 90,
    "widthUnits": 52.2,
    "heightUnits": 90.0,
    "viewBox": [
      21.0,
      1.0,
      58.0,
      100.0
    ],
    "svg": "packs/glossy/gold-floor-mirror.svg"
  },
  {
    "slug": "heart-pouf",
    "name": "Heart Pouf",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "gameW": 58.4,
    "designW": 80,
    "widthUnits": 58.4,
    "heightUnits": 62.0,
    "viewBox": [
      13.5,
      23.5,
      73.0,
      77.5
    ],
    "svg": "packs/glossy/heart-pouf.svg"
  },
  {
    "slug": "swivel-stool",
    "name": "Swivel Stool",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "gameW": 46.2,
    "designW": 70,
    "widthUnits": 46.2,
    "heightUnits": 51.8,
    "viewBox": [
      17.0,
      27.0,
      66.0,
      74.0
    ],
    "svg": "packs/glossy/swivel-stool.svg"
  },
  {
    "slug": "spray-bottle",
    "name": "Spray Bottle",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 26.4,
    "designW": 40,
    "widthUnits": 26.4,
    "heightUnits": 37.6,
    "viewBox": [
      19.0,
      7.0,
      66.0,
      94.0
    ],
    "svg": "packs/glossy/spray-bottle.svg",
    "holdable": true
  },
  {
    "slug": "comb-brush",
    "name": "Brush & Comb",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "toy",
    "size": "small",
    "gameW": 36.2,
    "designW": 50,
    "widthUnits": 36.2,
    "heightUnits": 44.5,
    "viewBox": [
      11.0,
      10.0,
      72.5,
      89.0
    ],
    "svg": "packs/glossy/comb-brush.svg",
    "holdable": true
  },
  {
    "slug": "towel-stack",
    "name": "Towel Stack",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 49.2,
    "designW": 60,
    "widthUnits": 49.2,
    "heightUnits": 43.2,
    "viewBox": [
      9.0,
      29.0,
      82.0,
      72.0
    ],
    "svg": "packs/glossy/towel-stack.svg",
    "holdable": true
  },
  {
    "slug": "blob-rug",
    "name": "Bubble-Gum Rug",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "gameW": 224.4,
    "designW": 240,
    "widthUnits": 224.4,
    "heightUnits": 92.4,
    "viewBox": [
      3.0,
      59.5,
      93.5,
      38.5
    ],
    "svg": "packs/glossy/blob-rug.svg"
  },
  {
    "slug": "pebble-rug",
    "name": "Mint Pebble Rug",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "rug",
    "size": "medium",
    "gameW": 156.8,
    "designW": 160,
    "widthUnits": 156.8,
    "heightUnits": 57.6,
    "viewBox": [
      1.0,
      62.0,
      98.0,
      36.0
    ],
    "svg": "packs/glossy/pebble-rug.svg"
  },
  {
    "slug": "heart-plant",
    "name": "Heart-Leaf Plant",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "gameW": 34.2,
    "designW": 60,
    "widthUnits": 34.2,
    "heightUnits": 54.3,
    "viewBox": [
      21.5,
      10.5,
      57.0,
      90.5
    ],
    "svg": "packs/glossy/heart-plant.svg",
    "holdable": true
  },
  {
    "slug": "bud-vase",
    "name": "Bud Vase",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 21.6,
    "designW": 40,
    "widthUnits": 21.6,
    "heightUnits": 39.6,
    "viewBox": [
      23.0,
      2.0,
      54.0,
      99.0
    ],
    "svg": "packs/glossy/bud-vase.svg",
    "holdable": true
  },
  {
    "slug": "perfume-bottle",
    "name": "Perfume Bottle",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 27.6,
    "designW": 40,
    "widthUnits": 27.6,
    "heightUnits": 37.2,
    "viewBox": [
      15.5,
      8.0,
      69.0,
      93.0
    ],
    "svg": "packs/glossy/perfume-bottle.svg",
    "holdable": true
  },
  {
    "slug": "scent-candle",
    "name": "Candle Jar",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 24.8,
    "designW": 40,
    "widthUnits": 24.8,
    "heightUnits": 38.2,
    "viewBox": [
      19.0,
      5.5,
      62.0,
      95.5
    ],
    "svg": "packs/glossy/scent-candle.svg",
    "holdable": true
  },
  {
    "slug": "foot-spa",
    "name": "Foot Spa",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "appliance",
    "size": "medium",
    "gameW": 84.6,
    "designW": 90,
    "widthUnits": 84.6,
    "heightUnits": 62.1,
    "viewBox": [
      3.0,
      32.0,
      94.0,
      69.0
    ],
    "svg": "packs/glossy/foot-spa.svg"
  },
  {
    "slug": "mani-lamp",
    "name": "Nail Dryer",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "appliance",
    "size": "small",
    "gameW": 54.0,
    "designW": 60,
    "widthUnits": 54.0,
    "heightUnits": 44.4,
    "viewBox": [
      5.0,
      27.0,
      90.0,
      74.0
    ],
    "svg": "packs/glossy/mani-lamp.svg",
    "holdable": true
  },
  {
    "slug": "tiered-tray",
    "name": "Tiered Tray",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "gameW": 46.8,
    "designW": 60,
    "widthUnits": 46.8,
    "heightUnits": 60.0,
    "viewBox": [
      11.0,
      1.0,
      78.0,
      100.0
    ],
    "svg": "packs/glossy/tiered-tray.svg",
    "holdable": true
  },
  {
    "slug": "star-wall-sign",
    "name": "Sparkle Wall Light",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "gameW": 76.0,
    "designW": 80,
    "widthUnits": 76.0,
    "heightUnits": 76.0,
    "viewBox": [
      2.5,
      2.5,
      95.0,
      95.0
    ],
    "svg": "packs/glossy/star-wall-sign.svg"
  },
  {
    "slug": "waiting-bench",
    "name": "Waiting Bench",
    "type": "item",
    "pack": "glossy",
    "room": "salon",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "gameW": 166.6,
    "designW": 170,
    "widthUnits": 166.6,
    "heightUnits": 108.8,
    "viewBox": [
      1.0,
      37.0,
      98.0,
      64.0
    ],
    "svg": "packs/glossy/waiting-bench.svg"
  },
  {
    "type": "item",
    "slug": "cc-scallop-loveseat",
    "name": "Scalloped Loveseat",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-scallop-loveseat.svg",
    "widthUnits": 96,
    "heightUnits": 82,
    "gameW": 248,
    "viewBox": [
      2,
      18,
      96,
      82
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-heart-pouf",
    "name": "Cottage Heart Pouf",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-heart-pouf.svg",
    "widthUnits": 80,
    "heightUnits": 72,
    "gameW": 124,
    "viewBox": [
      10,
      28,
      80,
      72
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-flower-lamp",
    "name": "Flower Floor Lamp",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-flower-lamp.svg",
    "widthUnits": 56,
    "heightUnits": 98,
    "gameW": 86,
    "viewBox": [
      22,
      2,
      56,
      98
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-petal-table",
    "name": "Petal Coffee Table",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-petal-table.svg",
    "widthUnits": 96,
    "heightUnits": 72,
    "gameW": 196,
    "viewBox": [
      2,
      28,
      96,
      72
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-heart-rug",
    "name": "Cottage Heart Rug",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-heart-rug.svg",
    "widthUnits": 100,
    "heightUnits": 68,
    "gameW": 250,
    "viewBox": [
      0,
      30,
      100,
      68
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-record-player",
    "name": "Record Player",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-record-player.svg",
    "widthUnits": 88,
    "heightUnits": 78,
    "gameW": 148,
    "viewBox": [
      6,
      22,
      88,
      78
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-macrame-swing",
    "name": "Macrame Swing Chair",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-macrame-swing.svg",
    "widthUnits": 84,
    "heightUnits": 98,
    "gameW": 168,
    "viewBox": [
      8,
      2,
      84,
      98
    ],
    "room": "living"
  },
  {
    "type": "item",
    "slug": "cc-fairy-shelf",
    "name": "Fairy-Light Shelf",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-fairy-shelf.svg",
    "widthUnits": 92,
    "heightUnits": 70,
    "gameW": 176,
    "viewBox": [
      4,
      16,
      92,
      70
    ],
    "room": "living",
    "wall": true,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-canopy-daybed",
    "name": "Canopy Daybed",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-canopy-daybed.svg",
    "widthUnits": 96,
    "heightUnits": 98,
    "gameW": 276,
    "viewBox": [
      2,
      2,
      96,
      98
    ],
    "room": "bedroom"
  },
  {
    "type": "item",
    "slug": "cc-star-dresser",
    "name": "Star Dresser",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-star-dresser.svg",
    "widthUnits": 76,
    "heightUnits": 92,
    "gameW": 156,
    "viewBox": [
      12,
      8,
      76,
      92
    ],
    "room": "bedroom"
  },
  {
    "type": "item",
    "slug": "cc-heart-bed",
    "name": "Heart Headboard Bed",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-heart-bed.svg",
    "widthUnits": 96,
    "heightUnits": 96,
    "gameW": 236,
    "viewBox": [
      2,
      4,
      96,
      96
    ],
    "room": "bedroom"
  },
  {
    "type": "item",
    "slug": "cc-fairy-garland",
    "name": "Fairy-Light Garland",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-fairy-garland.svg",
    "widthUnits": 100,
    "heightUnits": 48,
    "gameW": 210,
    "viewBox": [
      0,
      8,
      100,
      48
    ],
    "room": "bedroom",
    "wall": true,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-cloud-beanbag",
    "name": "Cloud Beanbag",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-cloud-beanbag.svg",
    "widthUnits": 92,
    "heightUnits": 74,
    "gameW": 156,
    "viewBox": [
      4,
      26,
      92,
      74
    ],
    "room": "bedroom"
  },
  {
    "type": "item",
    "slug": "cc-jewel-box",
    "name": "Jewelry Box",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "cottage",
    "svg": "packs/cottage/cc-jewel-box.svg",
    "widthUnits": 68,
    "heightUnits": 80,
    "gameW": 72,
    "viewBox": [
      16,
      18,
      68,
      80
    ],
    "room": "bedroom",
    "holdable": true
  },
  {
    "type": "item",
    "slug": "cc-cloud-lamp",
    "name": "Cloud Lamp",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "cottage",
    "svg": "packs/cottage/cc-cloud-lamp.svg",
    "widthUnits": 64,
    "heightUnits": 94,
    "gameW": 74,
    "viewBox": [
      18,
      6,
      64,
      94
    ],
    "room": "bedroom",
    "holdable": true
  },
  {
    "type": "item",
    "slug": "cc-window-seat",
    "name": "Window Seat",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-window-seat.svg",
    "widthUnits": 92,
    "heightUnits": 94,
    "gameW": 214,
    "viewBox": [
      4,
      6,
      92,
      94
    ],
    "room": "bedroom"
  },
  {
    "type": "item",
    "slug": "cc-pastel-range",
    "name": "Pastel Range",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-pastel-range.svg",
    "widthUnits": 88,
    "heightUnits": 88,
    "gameW": 172,
    "viewBox": [
      6,
      12,
      88,
      88
    ],
    "room": "kitchen"
  },
  {
    "type": "item",
    "slug": "cc-mint-fridge",
    "name": "Mint Fridge",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-mint-fridge.svg",
    "widthUnits": 68,
    "heightUnits": 96,
    "gameW": 132,
    "viewBox": [
      16,
      4,
      68,
      96
    ],
    "room": "kitchen"
  },
  {
    "type": "item",
    "slug": "cc-cupcake-stand",
    "name": "Cupcake Stand",
    "category": "food",
    "tag": "food",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-cupcake-stand.svg",
    "widthUnits": 76,
    "heightUnits": 90,
    "gameW": 128,
    "viewBox": [
      12,
      10,
      76,
      90
    ],
    "room": "kitchen",
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-teapot-set",
    "name": "Teapot Set",
    "category": "food",
    "tag": "food",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-teapot-set.svg",
    "widthUnits": 92,
    "heightUnits": 72,
    "gameW": 150,
    "viewBox": [
      4,
      28,
      92,
      72
    ],
    "room": "kitchen",
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-bakery-shelf",
    "name": "Bakery Shelf",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-bakery-shelf.svg",
    "widthUnits": 84,
    "heightUnits": 94,
    "gameW": 156,
    "viewBox": [
      8,
      6,
      84,
      94
    ],
    "room": "kitchen"
  },
  {
    "type": "item",
    "slug": "cc-breakfast-table",
    "name": "Round Breakfast Table",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-breakfast-table.svg",
    "widthUnits": 92,
    "heightUnits": 78,
    "gameW": 186,
    "viewBox": [
      4,
      22,
      92,
      78
    ],
    "room": "kitchen"
  },
  {
    "type": "item",
    "slug": "cc-macaron-jar",
    "name": "Macaron Jar",
    "category": "food",
    "tag": "food",
    "size": "small",
    "pack": "cottage",
    "svg": "packs/cottage/cc-macaron-jar.svg",
    "widthUnits": 56,
    "heightUnits": 92,
    "gameW": 64,
    "viewBox": [
      22,
      8,
      56,
      92
    ],
    "room": "kitchen",
    "holdable": true
  },
  {
    "type": "item",
    "slug": "cc-flower-kettle",
    "name": "Flower Kettle",
    "category": "food",
    "tag": "food",
    "size": "small",
    "pack": "cottage",
    "svg": "packs/cottage/cc-flower-kettle.svg",
    "widthUnits": 76,
    "heightUnits": 84,
    "gameW": 78,
    "viewBox": [
      12,
      16,
      76,
      84
    ],
    "room": "kitchen",
    "holdable": true
  },
  {
    "type": "item",
    "slug": "cc-light-vanity",
    "name": "Lighted Vanity",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-light-vanity.svg",
    "widthUnits": 92,
    "heightUnits": 98,
    "gameW": 196,
    "viewBox": [
      4,
      2,
      92,
      98
    ],
    "room": "salon"
  },
  {
    "type": "item",
    "slug": "cc-bubble-chair",
    "name": "Bubble Chair",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-bubble-chair.svg",
    "widthUnits": 84,
    "heightUnits": 92,
    "gameW": 142,
    "viewBox": [
      8,
      8,
      84,
      92
    ],
    "room": "salon"
  },
  {
    "type": "item",
    "slug": "cc-mani-chair",
    "name": "Mani-Pedi Chair",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-mani-chair.svg",
    "widthUnits": 96,
    "heightUnits": 84,
    "gameW": 188,
    "viewBox": [
      2,
      16,
      96,
      84
    ],
    "room": "salon"
  },
  {
    "type": "item",
    "slug": "cc-ribbon-mirror",
    "name": "Ribbon Mirror",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-ribbon-mirror.svg",
    "widthUnits": 68,
    "heightUnits": 94,
    "gameW": 112,
    "viewBox": [
      16,
      4,
      68,
      94
    ],
    "room": "salon",
    "wall": true,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-perfume-tray",
    "name": "Perfume Tray",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "cottage",
    "svg": "packs/cottage/cc-perfume-tray.svg",
    "widthUnits": 92,
    "heightUnits": 62,
    "gameW": 108,
    "viewBox": [
      4,
      36,
      92,
      62
    ],
    "room": "salon",
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-dryer-chair",
    "name": "Hair-Dryer Chair",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-dryer-chair.svg",
    "widthUnits": 88,
    "heightUnits": 96,
    "gameW": 164,
    "viewBox": [
      6,
      4,
      88,
      96
    ],
    "room": "salon"
  },
  {
    "type": "item",
    "slug": "cc-heart-clock",
    "room": "any",
    "name": "Heart Wall Clock",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "cottage",
    "svg": "packs/cottage/cc-heart-clock.svg",
    "widthUnits": 72,
    "heightUnits": 82,
    "gameW": 84,
    "viewBox": [
      14,
      10,
      72,
      82
    ],
    "wall": true,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-scallop-curtains",
    "room": "any",
    "name": "Scallop Curtains",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-scallop-curtains.svg",
    "widthUnits": 96,
    "heightUnits": 94,
    "gameW": 196,
    "viewBox": [
      2,
      4,
      96,
      94
    ],
    "wall": true,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-mushroom-stool",
    "room": "living",
    "name": "Mushroom Stool",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-mushroom-stool.svg",
    "widthUnits": 80,
    "heightUnits": 84,
    "gameW": 112,
    "viewBox": [
      10,
      16,
      80,
      84
    ]
  },
  {
    "type": "item",
    "slug": "cc-plant-wall",
    "room": "any",
    "name": "Plant Wall",
    "category": "plants",
    "tag": "plants",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-plant-wall.svg",
    "widthUnits": 92,
    "heightUnits": 90,
    "gameW": 176,
    "viewBox": [
      4,
      6,
      92,
      90
    ],
    "wall": true,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "cc-cottage-aquarium",
    "room": "living",
    "name": "Bubble Aquarium",
    "category": "pets",
    "tag": "pets",
    "size": "medium",
    "pack": "cottage",
    "svg": "packs/cottage/cc-cottage-aquarium.svg",
    "widthUnits": 84,
    "heightUnits": 90,
    "gameW": 136,
    "viewBox": [
      8,
      10,
      84,
      90
    ]
  },
  {
    "type": "item",
    "slug": "cc-reading-nook",
    "room": "bedroom",
    "name": "Cozy Reading Nook",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "cottage",
    "svg": "packs/cottage/cc-reading-nook.svg",
    "widthUnits": 92,
    "heightUnits": 96,
    "gameW": 210,
    "viewBox": [
      4,
      4,
      92,
      96
    ]
  },
  {
    "type": "item",
    "slug": "wc-knit-armchair",
    "name": "Knit-Blanket Armchair",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-knit-armchair.webp",
    "widthUnits": 720,
    "heightUnits": 667,
    "gameW": 156,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-plaid-sofa",
    "name": "Plaid Cabin Sofa",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-plaid-sofa.webp",
    "widthUnits": 720,
    "heightUnits": 313,
    "gameW": 235,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-stone-hearth",
    "name": "Stone Hearth Fireplace",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-stone-hearth.webp",
    "widthUnits": 720,
    "heightUnits": 624,
    "gameW": 204,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-woodstove",
    "name": "Woodstove",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-woodstove.webp",
    "widthUnits": 359,
    "heightUnits": 720,
    "gameW": 140,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-sled-table",
    "name": "Sled Coffee Table",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-sled-table.webp",
    "widthUnits": 693,
    "heightUnits": 351,
    "gameW": 210,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-log-bench",
    "name": "Log Bench",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-log-bench.webp",
    "widthUnits": 720,
    "heightUnits": 268,
    "gameW": 210,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-window-seat",
    "name": "Snowy Window Seat",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-window-seat.webp",
    "widthUnits": 564,
    "heightUnits": 628,
    "gameW": 214,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-pinecone-table",
    "name": "Pinecone Side Table",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-pinecone-table.webp",
    "widthUnits": 536,
    "heightUnits": 720,
    "gameW": 108,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-mitten-ottoman",
    "name": "Mitten Ottoman",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-mitten-ottoman.webp",
    "widthUnits": 643,
    "heightUnits": 720,
    "gameW": 130,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-birch-basket",
    "name": "Birch Log Basket",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-birch-basket.webp",
    "widthUnits": 596,
    "heightUnits": 720,
    "gameW": 140,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-frosted-pine",
    "name": "Frosted Pine",
    "room": "living",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-frosted-pine.webp",
    "widthUnits": 419,
    "heightUnits": 720,
    "gameW": 150,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-twinkle-lamp",
    "name": "Twinkle-Light Floor Lamp",
    "room": "living",
    "category": "furniture",
    "tag": "lighting",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-twinkle-lamp.webp",
    "widthUnits": 263,
    "heightUnits": 720,
    "gameW": 96,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-holiday-tree",
    "name": "Decorated Holiday Tree",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-holiday-tree.webp",
    "widthUnits": 470,
    "heightUnits": 720,
    "gameW": 180,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-plaid-bed",
    "name": "Red Plaid Quilt Bed",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-plaid-bed.webp",
    "widthUnits": 720,
    "heightUnits": 570,
    "gameW": 290,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-ice-wardrobe",
    "name": "Ice-Blue Wardrobe",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-ice-wardrobe.webp",
    "widthUnits": 449,
    "heightUnits": 720,
    "gameW": 168,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-snow-nightstand",
    "name": "Snowflake Nightstand",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-snow-nightstand.webp",
    "widthUnits": 720,
    "heightUnits": 607,
    "gameW": 112,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-fur-bench",
    "name": "Fur-Trim Bench",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-fur-bench.webp",
    "widthUnits": 720,
    "heightUnits": 258,
    "gameW": 190,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-frost-bookcase",
    "name": "Frosty Bookcase",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-frost-bookcase.webp",
    "widthUnits": 533,
    "heightUnits": 720,
    "gameW": 170,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-globe-lamp",
    "name": "Snow-Globe Lamp",
    "room": "bedroom",
    "category": "furniture",
    "tag": "lighting",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-globe-lamp.webp",
    "widthUnits": 438,
    "heightUnits": 720,
    "gameW": 96,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-penguin-chair",
    "name": "Penguin Plush Chair",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-penguin-chair.webp",
    "widthUnits": 662,
    "heightUnits": 720,
    "gameW": 140,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-sock-hamper",
    "name": "Cozy Sock Hamper",
    "room": "bedroom",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-sock-hamper.webp",
    "widthUnits": 500,
    "heightUnits": 720,
    "gameW": 130,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-cocoa-cart",
    "name": "Cocoa Cart",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-cocoa-cart.webp",
    "widthUnits": 720,
    "heightUnits": 670,
    "gameW": 170,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-peppermint-counter",
    "name": "Peppermint Counter",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-peppermint-counter.webp",
    "widthUnits": 720,
    "heightUnits": 293,
    "gameW": 250,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-cookie-oven",
    "name": "Cookie Oven",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-cookie-oven.webp",
    "widthUnits": 627,
    "heightUnits": 720,
    "gameW": 168,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-mug-shelf",
    "name": "Mug Tree Shelf",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-mug-shelf.webp",
    "widthUnits": 720,
    "heightUnits": 283,
    "gameW": 150,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-gingerbread",
    "name": "Gingerbread Cottage",
    "room": "kitchen",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-gingerbread.webp",
    "widthUnits": 693,
    "heightUnits": 720,
    "gameW": 160,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-cookie-plate",
    "name": "Cookie Plate",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-cookie-plate.webp",
    "widthUnits": 720,
    "heightUnits": 528,
    "gameW": 120,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-marshmallow-jar",
    "name": "Marshmallow Jar",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-marshmallow-jar.webp",
    "widthUnits": 478,
    "heightUnits": 720,
    "gameW": 86,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-cocoa-pot",
    "name": "Cocoa Pot",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-cocoa-pot.webp",
    "widthUnits": 676,
    "heightUnits": 720,
    "gameW": 100,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-cinnamon-tray",
    "name": "Cinnamon Roll Tray",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-cinnamon-tray.webp",
    "widthUnits": 150,
    "heightUnits": 45,
    "gameW": 150,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-snowman",
    "name": "Snowman Buddy",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-snowman.webp",
    "widthUnits": 474,
    "heightUnits": 720,
    "gameW": 100,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-snow-globe",
    "name": "Snow Globe",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-snow-globe.webp",
    "widthUnits": 549,
    "heightUnits": 720,
    "gameW": 110,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-cocoa-mug",
    "name": "Mug of Cocoa",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-cocoa-mug.webp",
    "widthUnits": 720,
    "heightUnits": 675,
    "gameW": 78,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-mitten-line",
    "name": "Mittens on a Line",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-mitten-line.webp",
    "widthUnits": 720,
    "heightUnits": 406,
    "gameW": 170,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-ice-skates",
    "name": "Ice Skates",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-ice-skates.webp",
    "widthUnits": 100,
    "heightUnits": 100,
    "gameW": 100,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-snowshoes",
    "name": "Snowshoes",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-snowshoes.webp",
    "widthUnits": 453,
    "heightUnits": 720,
    "gameW": 110,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-pinecone-garland",
    "name": "Pinecone Garland",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-pinecone-garland.webp",
    "widthUnits": 720,
    "heightUnits": 192,
    "gameW": 180,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-berry-wreath",
    "name": "Berry Wreath",
    "room": "any",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-berry-wreath.webp",
    "widthUnits": 676,
    "heightUnits": 720,
    "gameW": 96,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-twinkle-string",
    "name": "Twinkle Light String",
    "room": "any",
    "category": "decor",
    "tag": "lighting",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-twinkle-string.webp",
    "widthUnits": 720,
    "heightUnits": 144,
    "gameW": 180,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-lantern",
    "name": "Lantern",
    "room": "any",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-lantern.webp",
    "widthUnits": 327,
    "heightUnits": 720,
    "gameW": 84,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-candle-trio",
    "name": "LED Candle Trio",
    "room": "living",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-candle-trio.webp",
    "widthUnits": 700,
    "heightUnits": 648,
    "gameW": 100,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-snow-mobile",
    "name": "Snowflake Mobile",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-snow-mobile.webp",
    "widthUnits": 441,
    "heightUnits": 720,
    "gameW": 120,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-polar-plush",
    "name": "Polar Bear Plush",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-polar-plush.webp",
    "widthUnits": 570,
    "heightUnits": 720,
    "gameW": 96,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-penguin-plush",
    "name": "Penguin Plush",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-penguin-plush.webp",
    "widthUnits": 508,
    "heightUnits": 720,
    "gameW": 90,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-peppermint-rug",
    "name": "Peppermint Swirl Rug",
    "room": "any",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-peppermint-rug.webp",
    "widthUnits": 720,
    "heightUnits": 492,
    "gameW": 250,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-pom-rug",
    "name": "Knit Pom Rug",
    "room": "any",
    "category": "decor",
    "tag": "rug",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-pom-rug.webp",
    "widthUnits": 720,
    "heightUnits": 399,
    "gameW": 240,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-cabin-picture",
    "name": "Cabin Picture",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-cabin-picture.webp",
    "widthUnits": 720,
    "heightUnits": 615,
    "gameW": 110,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-snow-window",
    "name": "Snowy Window Art",
    "room": "any",
    "category": "decor",
    "tag": "lighting",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-snow-window.webp",
    "widthUnits": 657,
    "heightUnits": 720,
    "gameW": 140,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-present-stack",
    "name": "Wrapped Present Stack",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-present-stack.webp",
    "widthUnits": 492,
    "heightUnits": 720,
    "gameW": 110,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-bauble-garland",
    "name": "Ribbon Bauble Garland",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-bauble-garland.webp",
    "widthUnits": 720,
    "heightUnits": 204,
    "gameW": 180,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-stocking-row",
    "name": "Knit Stocking Row",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "large",
    "pack": "winter",
    "png": "packs/winter/wc-stocking-row.webp",
    "widthUnits": 720,
    "heightUnits": 538,
    "gameW": 170,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-cane-lamp",
    "name": "Candy Cane Lamp",
    "room": "any",
    "category": "decor",
    "tag": "lighting",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-cane-lamp.webp",
    "widthUnits": 90,
    "heightUnits": 234,
    "gameW": 90,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-star-topper",
    "name": "Star Tree Topper",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-star-topper.webp",
    "widthUnits": 545,
    "heightUnits": 720,
    "gameW": 80,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-poinsettia",
    "name": "Poinsettia Pot",
    "room": "any",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-poinsettia.webp",
    "widthUnits": 626,
    "heightUnits": 720,
    "gameW": 110,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-holly",
    "name": "Holly Sprig",
    "room": "any",
    "category": "plants",
    "tag": "plant",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-holly.webp",
    "widthUnits": 720,
    "heightUnits": 719,
    "gameW": 100,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "wc-nutcracker",
    "name": "Nutcracker Friend",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "winter",
    "png": "packs/winter/wc-nutcracker.webp",
    "widthUnits": 222,
    "heightUnits": 720,
    "gameW": 80,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-reindeer",
    "name": "Reindeer Plush",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-reindeer.webp",
    "widthUnits": 427,
    "heightUnits": 720,
    "gameW": 96,
    "holdable": true
  },
  {
    "type": "item",
    "slug": "wc-sleigh-planter",
    "name": "Sleigh Planter",
    "room": "any",
    "category": "plants",
    "tag": "plant",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-sleigh-planter.webp",
    "widthUnits": 720,
    "heightUnits": 612,
    "gameW": 160,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "wc-gingerbread-village",
    "name": "Gingerbread Village",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "winter",
    "png": "packs/winter/wc-gingerbread-village.webp",
    "widthUnits": 720,
    "heightUnits": 298,
    "gameW": 156,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-star-pumpkin",
    "name": "Starry Glow Pumpkin",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-star-pumpkin.webp",
    "widthUnits": 680,
    "heightUnits": 720,
    "gameW": 54,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-heart-pumpkin",
    "name": "Heart and Moon Pumpkin",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-heart-pumpkin.webp",
    "widthUnits": 720,
    "heightUnits": 714,
    "gameW": 54,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-moon-lantern",
    "name": "Moonbeam Lantern",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-moon-lantern.webp",
    "widthUnits": 357,
    "heightUnits": 720,
    "gameW": 44,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-witch-hat",
    "name": "Starry Witch Hat",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-witch-hat.webp",
    "widthUnits": 720,
    "heightUnits": 703,
    "gameW": 56,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-cauldron",
    "name": "Bubbly Cauldron",
    "room": "kitchen",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "halloween",
    "png": "packs/halloween/hw-cauldron.webp",
    "widthUnits": 675,
    "heightUnits": 720,
    "gameW": 70,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-hay-bale",
    "name": "Harvest Hay Bale",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "medium",
    "pack": "halloween",
    "png": "packs/halloween/hw-hay-bale.webp",
    "widthUnits": 720,
    "heightUnits": 627,
    "gameW": 96,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-ghost-sheet",
    "name": "Friendly Sheet Ghost",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-ghost-sheet.webp",
    "widthUnits": 564,
    "heightUnits": 720,
    "gameW": 54,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-cat-statue",
    "name": "Black Cat Statue",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-cat-statue.webp",
    "widthUnits": 336,
    "heightUnits": 720,
    "gameW": 44,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-candy-bowl",
    "name": "Treat Bowl",
    "room": "kitchen",
    "category": "food",
    "tag": "food",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-candy-bowl.webp",
    "widthUnits": 720,
    "heightUnits": 641,
    "gameW": 56,
    "holdable": false
  },
  {
    "type": "item",
    "slug": "hw-leaf-garland",
    "name": "Autumn Leaf Garland",
    "room": "living",
    "category": "decor",
    "tag": "decor",
    "size": "medium",
    "pack": "halloween",
    "png": "packs/halloween/hw-leaf-garland.webp",
    "widthUnits": 720,
    "heightUnits": 221,
    "gameW": 150,
    "holdable": false,
    "wall": true
  },
  {
    "type": "item",
    "slug": "hw-moon-cling",
    "name": "Moon and Stars Window Cling",
    "room": "bedroom",
    "category": "decor",
    "tag": "decor",
    "size": "small",
    "pack": "halloween",
    "png": "packs/halloween/hw-moon-cling.webp",
    "widthUnits": 678,
    "heightUnits": 720,
    "gameW": 60,
    "holdable": false,
    "wall": true
  }
]
`,Y4=`[
  {
    "slug": "leafy-cream",
    "name": "Leafy Cream",
    "type": "wallpaper",
    "pack": "welcome-home",
    "svg": "welcome-home/leafy-cream.svg"
  },
  {
    "slug": "orange-gingham",
    "name": "Orange Gingham",
    "type": "wallpaper",
    "pack": "welcome-home",
    "svg": "welcome-home/orange-gingham.svg"
  },
  {
    "slug": "wood-panel",
    "name": "Wood Panel",
    "type": "wallpaper",
    "pack": "welcome-home",
    "svg": "welcome-home/wood-panel.svg"
  },
  {
    "slug": "wood-planks",
    "name": "Wood Planks",
    "type": "floor",
    "pack": "welcome-home",
    "svg": "welcome-home/wood-planks.svg"
  },
  {
    "slug": "terracotta-tiles",
    "name": "Terracotta Tiles",
    "type": "floor",
    "pack": "welcome-home",
    "svg": "welcome-home/terracotta-tiles.svg"
  },
  {
    "slug": "sunny-stars",
    "name": "Sunny Stars",
    "type": "wallpaper",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/sunny-stars.svg"
  },
  {
    "slug": "mint-checks",
    "name": "Mint Checks",
    "type": "wallpaper",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/mint-checks.svg"
  },
  {
    "slug": "sky-clouds",
    "name": "Sky Clouds",
    "type": "wallpaper",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/sky-clouds.svg"
  },
  {
    "slug": "butter-check-floor",
    "name": "Butter Check Floor",
    "type": "floor",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/butter-check-floor.svg"
  },
  {
    "slug": "sky-tiles",
    "name": "Sky Tiles",
    "type": "floor",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/sky-tiles.svg"
  },
  {
    "slug": "pink-hearts",
    "name": "Pink Hearts",
    "type": "wallpaper",
    "pack": "glossy",
    "svg": "glossy/pink-hearts.svg"
  },
  {
    "slug": "lilac-stripes",
    "name": "Lilac Stripes",
    "type": "wallpaper",
    "pack": "glossy",
    "svg": "glossy/lilac-stripes.svg"
  },
  {
    "slug": "mint-bubbles",
    "name": "Mint Bubbles",
    "type": "wallpaper",
    "pack": "glossy",
    "svg": "glossy/mint-bubbles.svg"
  },
  {
    "slug": "pink-check-floor",
    "name": "Pink Check Floor",
    "type": "floor",
    "pack": "glossy",
    "svg": "glossy/pink-check-floor.svg"
  },
  {
    "slug": "lilac-terrazzo",
    "name": "Lilac Terrazzo",
    "type": "floor",
    "pack": "glossy",
    "svg": "glossy/lilac-terrazzo.svg"
  },
  {
    "slug": "cloud-sky",
    "name": "Cloud Sky",
    "type": "wallpaper",
    "pack": "nursery",
    "svg": "nursery/cloud-sky.svg"
  },
  {
    "slug": "tiny-hearts",
    "name": "Tiny Hearts",
    "type": "wallpaper",
    "pack": "nursery",
    "svg": "nursery/tiny-hearts.svg"
  },
  {
    "slug": "star-sprinkle",
    "name": "Star Sprinkle",
    "type": "wallpaper",
    "pack": "nursery",
    "svg": "nursery/star-sprinkle.svg"
  },
  {
    "slug": "soft-carpet",
    "name": "Soft Carpet",
    "type": "floor",
    "pack": "nursery",
    "svg": "nursery/soft-carpet.svg"
  },
  {
    "slug": "pastel-planks",
    "name": "Pastel Planks",
    "type": "floor",
    "pack": "nursery",
    "svg": "nursery/pastel-planks.svg"
  },
  {
    "slug": "cc-lilac-gingham",
    "name": "Lilac Gingham",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-lilac-gingham.svg"
  },
  {
    "slug": "cc-peach-scallops",
    "name": "Peach Scallops",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-peach-scallops.svg"
  },
  {
    "slug": "cc-mint-florals",
    "name": "Mint Florals",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-mint-florals.svg"
  },
  {
    "slug": "cc-pink-plaid",
    "name": "Pink Plaid",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-pink-plaid.svg"
  },
  {
    "slug": "cc-butter-polka",
    "name": "Butter Polka",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-butter-polka.svg"
  },
  {
    "slug": "cc-lavender-lattice",
    "name": "Lavender Lattice",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-lavender-lattice.svg"
  },
  {
    "slug": "cc-rose-herringbone",
    "name": "Rose Herringbone",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-rose-herringbone.svg"
  },
  {
    "slug": "cc-cream-hex",
    "name": "Cream Hex Tiles",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-cream-hex.svg"
  },
  {
    "slug": "cc-rag-planks",
    "name": "Pastel Rag Rug",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-rag-planks.svg"
  },
  {
    "slug": "cc-mint-checks",
    "name": "Mint Gingham Floor",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-mint-checks.svg"
  },
  {
    "slug": "wc-snowflake-sky",
    "name": "Snowflake Sky",
    "type": "wallpaper",
    "pack": "winter",
    "png": "winter/wc-snowflake-sky.webp"
  },
  {
    "slug": "wc-mint-pine",
    "name": "Mint Pine Sprigs",
    "type": "wallpaper",
    "pack": "winter",
    "png": "winter/wc-mint-pine.webp"
  },
  {
    "slug": "wc-candy-stripe",
    "name": "Candy Stripe",
    "type": "wallpaper",
    "pack": "winter",
    "png": "winter/wc-candy-stripe.webp"
  },
  {
    "slug": "wc-red-plaid",
    "name": "Cozy Red Plaid",
    "type": "wallpaper",
    "pack": "winter",
    "png": "winter/wc-red-plaid.webp"
  },
  {
    "slug": "wc-frosty-dots",
    "name": "Frosty Dots",
    "type": "wallpaper",
    "pack": "winter",
    "png": "winter/wc-frosty-dots.webp"
  },
  {
    "slug": "wc-cabin-planks",
    "name": "Cabin Planks",
    "type": "floor",
    "pack": "winter",
    "png": "winter/wc-cabin-planks.webp"
  },
  {
    "slug": "wc-snow-knit",
    "name": "Snow Knit Carpet",
    "type": "floor",
    "pack": "winter",
    "png": "winter/wc-snow-knit.webp"
  },
  {
    "slug": "wc-peppermint-tiles",
    "name": "Peppermint Tiles",
    "type": "floor",
    "pack": "winter",
    "png": "winter/wc-peppermint-tiles.webp"
  }
]
`,K4="/cozy-preview/assets/alarm-clock-BCd1-e86.svg",X4="/cozy-preview/assets/bedtime-snack-BoNDQqOK.svg",J4="/cozy-preview/assets/book-stack-upnp1NwG.svg",e6="/cozy-preview/assets/bunk-bed-YZiRWNFR.svg",t6="/cozy-preview/assets/bunny-slippers-PNucIc_Q.svg",n6="/cozy-preview/assets/canopy-bed-BwWkRhe2.svg",s6="/cozy-preview/assets/cat-bed-B8ULFbHc.svg",o6="/cozy-preview/assets/cloud-rug-CFl6aZc5.svg",i6="/cozy-preview/assets/cloud-shelf-DF5b_IoZ.svg",a6="/cozy-preview/assets/cork-board-Bj5OuLbv.svg",r6="/cozy-preview/assets/daisy-pot-Cy8SrSS6.svg",l6="/cozy-preview/assets/desk-2rRtV3Vk.svg",c6="/cozy-preview/assets/dino-plush-Dq_qccf0.svg",d6="/cozy-preview/assets/doll-house-BrC3RiST.svg",f6="/cozy-preview/assets/dresser-__9TGuYc.svg",p6="/cozy-preview/assets/egg-chair-CtiaqWNQ.svg",h6="/cozy-preview/assets/floor-fan-Dt9SIAmB.svg",u6="/cozy-preview/assets/guinea-pig-CwLeNU_S.svg",g6="/cozy-preview/assets/hamster-cage-lQ6r7saV.svg",m6="/cozy-preview/assets/heart-rug-CBDvH6Q6.svg",y6="/cozy-preview/assets/lava-lamp-DEuHvlco.svg",w6="/cozy-preview/assets/moon-night-light-CAKsjYZv.svg",b6="/cozy-preview/assets/nightstand-Bgsh0YUi.svg",v6="/cozy-preview/assets/paper-lantern-CErOGyrT.svg",k6="/cozy-preview/assets/piggy-bank-DsHrmOcp.svg",_6="/cozy-preview/assets/plant-stand-DDyIDaL0.svg",$6="/cozy-preview/assets/play-tent-Bsawe52j.svg",x6="/cozy-preview/assets/star-mobile-DzOGs-Jo.svg",M6="/cozy-preview/assets/toy-chest-6iPrDiZH.svg",L6="/cozy-preview/assets/toy-robot-OaCEwmDT.svg",E6="/cozy-preview/assets/toy-train-D5GqAnpy.svg",S6="/cozy-preview/assets/unicorn-plush-C0W1eEs9.svg",T6="/cozy-preview/assets/wardrobe-Dn492IK0.svg",P6="/cozy-preview/assets/bananas-aPQwdEVo.svg",A6="/cozy-preview/assets/bar-stool-DWxhX1Ah.svg",R6="/cozy-preview/assets/bread-loaf-C9cEAYcl.svg",C6="/cozy-preview/assets/chick-BTEVfgqU.svg",I6="/cozy-preview/assets/china-hutch-BTmMY6rg.svg",O6="/cozy-preview/assets/cocoa-mug-CraNCc9b.svg",B6="/cozy-preview/assets/cookie-jar-ripj0oyT.svg",z6="/cozy-preview/assets/cooking-pot-BWtfOm9f.svg",D6="/cozy-preview/assets/cupcake-DFCw42xb.svg",H6="/cozy-preview/assets/dish-rack-BpVmmU6k.svg",W6="/cozy-preview/assets/fruit-bowl-Dw9lsB3B.svg",V6="/cozy-preview/assets/frying-pan-CTBY6MC_.svg",U6="/cozy-preview/assets/happy-fridge-D7ENuEJs.svg",Q6="/cozy-preview/assets/herb-box-CdRxefnV.svg",N6="/cozy-preview/assets/high-chair-BQtLYlq4.svg",q6="/cozy-preview/assets/ice-cream-DydSyNXx.svg",F6="/cozy-preview/assets/kettle-D1nuAiG_.svg",j6="/cozy-preview/assets/kitchen-counter-C8sTAZ-V.svg",Z6="/cozy-preview/assets/kitchen-sink-CYjDcd1n.svg",G6="/cozy-preview/assets/lemon-tree-CZz-Vy3P.svg",Y6="/cozy-preview/assets/microwave-lopm-FCT.svg",K6="/cozy-preview/assets/milk-bottle-DxcUA6XT.svg",X6="/cozy-preview/assets/pancakes-CLqxnc5R.svg",J6="/cozy-preview/assets/pantry-shelf-Azdxpmzd.svg",ek="/cozy-preview/assets/pendant-lamp-fZv6y1p0.svg",tk="/cozy-preview/assets/pet-bowl-ETL_EOAP.svg",nk="/cozy-preview/assets/rice-cooker-JX0L4bi2.svg",sk="/cozy-preview/assets/runner-rug-BbUgZFy4.svg",ok="/cozy-preview/assets/spice-rack-D9kAw-vT.svg",ik="/cozy-preview/assets/stand-mixer-CZrLn00l.svg",ak="/cozy-preview/assets/teapot-CtPOJzEm.svg",rk="/cozy-preview/assets/toaster-CNk0hJDw.svg",lk="/cozy-preview/assets/utensil-rail-B0QkGP3A.svg",ck="/cozy-preview/assets/watermelon-slice-VzvgalD5.svg",dk="/cozy-preview/assets/aquarium-BlhJ9UCr.svg",fk="/cozy-preview/assets/arc-floor-lamp-DL5cEVzq.svg",pk="/cozy-preview/assets/bean-bag-CauyDuZQ.svg",hk="/cozy-preview/assets/bird-cage-xqeVahX7.svg",uk="/cozy-preview/assets/blanket-basket-B4LREUo9.svg",gk="/cozy-preview/assets/building-blocks-DbtoodPT.svg",mk="/cozy-preview/assets/coffee-table-ZYO2ApH6.svg",yk="/cozy-preview/assets/comfy-armchair-tjNYbfgO.svg",wk="/cozy-preview/assets/cubby-shelf-CLzTUpiz.svg",bk="/cozy-preview/assets/daisy-rug-CvOlxjsu.svg",vk="/cozy-preview/assets/fiddle-leaf-fig-DiUNW4Q_.svg",kk="/cozy-preview/assets/fireplace-CqxIMN3Z.svg",_k="/cozy-preview/assets/globe-DN0sih3W.svg",$k="/cozy-preview/assets/hanging-planter-M9IHqztp.svg",xk="/cozy-preview/assets/monstera-plant-CLmuB_RM.svg",Mk="/cozy-preview/assets/piano-Y0KQ4rD2.svg",Lk="/cozy-preview/assets/popcorn-BD2d8sUH.svg",Ek="/cozy-preview/assets/pouf-as0li8On.svg",Sk="/cozy-preview/assets/rainbow-rug-C5ZVauOA.svg",Tk="/cozy-preview/assets/rainbow-wall-art-CCXUPPen.svg",Pk="/cozy-preview/assets/retro-radio-B3T98xMQ.svg",Ak="/cozy-preview/assets/rocking-chair-BgoIQu5H.svg",Rk="/cozy-preview/assets/rocking-horse-1WLLV43R.svg",Ck="/cozy-preview/assets/snake-plant-BGDwPcMj.svg",Ik="/cozy-preview/assets/string-lights-DGC0Ni2I.svg",Ok="/cozy-preview/assets/succulent-trio-uPD-ljlL.svg",Bk="/cozy-preview/assets/tassel-rug-DolXtxfQ.svg",zk="/cozy-preview/assets/throw-pillow-qWyWQ9cT.svg",Dk="/cozy-preview/assets/toy-car-CTJy5H4V.svg",Hk="/cozy-preview/assets/tulip-vase-o2vjI1Hg.svg",Wk="/cozy-preview/assets/turtle-B9Y6NDSv.svg",Vk="/cozy-preview/assets/tv-stand-CcLHFc1J.svg",Uk="/cozy-preview/assets/wall-shelf-CCWuZ6Xl.svg",Qk="/cozy-preview/assets/cc-bakery-shelf-BxdhLTTC.svg",Nk="/cozy-preview/assets/cc-breakfast-table-DwaO0eFy.svg",qk="/cozy-preview/assets/cc-bubble-chair-DncHA7F-.svg",Fk="/cozy-preview/assets/cc-canopy-daybed-CVbt6QDr.svg",jk="/cozy-preview/assets/cc-cloud-beanbag-SM0m-3qY.svg",Zk="/cozy-preview/assets/cc-cloud-lamp-BWwxoCux.svg",Gk="/cozy-preview/assets/cc-cottage-aquarium-iY2D26Vq.svg",Yk="/cozy-preview/assets/cc-cupcake-stand-B08kdXZL.svg",Kk="/cozy-preview/assets/cc-dryer-chair-DQmosxUz.svg",Xk="/cozy-preview/assets/cc-fairy-garland-BncKvkRL.svg",Jk="/cozy-preview/assets/cc-fairy-shelf-CE6x7J1w.svg",e_="/cozy-preview/assets/cc-flower-kettle-ZTbAh26L.svg",t_="/cozy-preview/assets/cc-flower-lamp-CS2T2S89.svg",n_="/cozy-preview/assets/cc-heart-bed-76-z9nJg.svg",s_="/cozy-preview/assets/cc-heart-clock-ByixSFru.svg",o_="/cozy-preview/assets/cc-heart-pouf-DH5J2s2J.svg",i_="/cozy-preview/assets/cc-heart-rug-Jwmh-m0j.svg",a_="/cozy-preview/assets/cc-jewel-box-qMbIQmo4.svg",r_="/cozy-preview/assets/cc-light-vanity-DD4uQJ_7.svg",l_="/cozy-preview/assets/cc-macaron-jar-A0sT-Lvj.svg",c_="/cozy-preview/assets/cc-macrame-swing-qIcoPp0o.svg",d_="/cozy-preview/assets/cc-mani-chair-7AWb60tv.svg",f_="/cozy-preview/assets/cc-mint-fridge-Cc87e_gW.svg",p_="/cozy-preview/assets/cc-mushroom-stool-B9-y9WNf.svg",h_="/cozy-preview/assets/cc-pastel-range-D6cjzJTl.svg",u_="/cozy-preview/assets/cc-perfume-tray-DN4chcIn.svg",g_="/cozy-preview/assets/cc-petal-table-QrNho7KH.svg",m_="/cozy-preview/assets/cc-plant-wall-BMii8_kR.svg",y_="/cozy-preview/assets/cc-reading-nook-wiDgasP8.svg",w_="/cozy-preview/assets/cc-record-player-BoxZhHLy.svg",b_="/cozy-preview/assets/cc-ribbon-mirror-DiCje_iy.svg",v_="/cozy-preview/assets/cc-scallop-curtains-Bzhy2peV.svg",k_="/cozy-preview/assets/cc-scallop-loveseat-Dfi7dg3b.svg",__="/cozy-preview/assets/cc-star-dresser-2wqSnsip.svg",$_="/cozy-preview/assets/cc-teapot-set-DnZlJvn7.svg",x_="/cozy-preview/assets/cc-window-seat-BCOise4Z.svg",M_="/cozy-preview/assets/arched-shelf-XtiqRVaT.svg",L_="/cozy-preview/assets/blob-rug-Deh5k10s.svg",E_="/cozy-preview/assets/bubbly-plant-CFTOJd5Y.svg",S_="/cozy-preview/assets/bud-vase-Dup4WQ5y.svg",T_="/cozy-preview/assets/comb-brush-oPJeQv0v.svg",P_="/cozy-preview/assets/cream-jars-D6bxrnJR.svg",A_="/cozy-preview/assets/drop-lamp-CJg63ZKz.svg",R_="/cozy-preview/assets/droplet-buddy-DTpHggFh.svg",C_="/cozy-preview/assets/fancy-sofa-kq2L0ob5.svg",I_="/cozy-preview/assets/flower-cart-BWgfg0s_.svg",O_="/cozy-preview/assets/foot-spa-DdA5_fj_.svg",B_="/cozy-preview/assets/globe-pendants-DNV5WnAO.svg",z_="/cozy-preview/assets/glow-mirror-C_dTGwQc.svg",D_="/cozy-preview/assets/gold-floor-mirror-jfPQepmr.svg",H_="/cozy-preview/assets/hair-dryer-CAkhCf7J.svg",W_="/cozy-preview/assets/heart-plant-fSU4uLVy.svg",V_="/cozy-preview/assets/heart-pouf-BMVPBVKJ.svg",U_="/cozy-preview/assets/lilac-curtain-D_mFsZKu.svg",Q_="/cozy-preview/assets/lotion-trio-D3lKwvho.svg",N_="/cozy-preview/assets/mani-lamp-B4SmvhvS.svg",q_="/cozy-preview/assets/nail-table-C3FitmuG.svg",F_="/cozy-preview/assets/pebble-rug-DHBZUggl.svg",j_="/cozy-preview/assets/perfume-bottle-BcNXSWTW.svg",Z_="/cozy-preview/assets/pink-fountain-DQ3CIetr.svg",G_="/cozy-preview/assets/pink-vanity-qE3SwdD6.svg",Y_="/cozy-preview/assets/polish-bottle-VWed8EQ-.svg",K_="/cozy-preview/assets/polish-rack-8Ph2n2nM.svg",X_="/cozy-preview/assets/reception-desk-D4Gevx64.svg",J_="/cozy-preview/assets/salon-chair-Wj2sOSW8.svg",e8="/cozy-preview/assets/scent-candle-BEUE-6Uv.svg",t8="/cozy-preview/assets/spray-bottle-Bc8iuceJ.svg",n8="/cozy-preview/assets/star-wall-sign-DvenTqvU.svg",s8="/cozy-preview/assets/swivel-stool-P-Egqq_Z.svg",o8="/cozy-preview/assets/tiered-tray-DLnZTsUF.svg",i8="/cozy-preview/assets/towel-cart-DJmR97UL.svg",a8="/cozy-preview/assets/towel-stack-C1qplZ4T.svg",r8="/cozy-preview/assets/vine-planter-Duhx9OMZ.svg",l8="/cozy-preview/assets/waiting-bench-BQuoXbE3.svg",c8="/cozy-preview/assets/wash-chair-sdgNnj79.svg",d8="/cozy-preview/assets/hw-candy-bowl-CD02D5Zj.webp",f8="/cozy-preview/assets/hw-cat-statue-DeCc_3q0.webp",p8="/cozy-preview/assets/hw-cauldron-Dct8_uZ8.webp",h8="/cozy-preview/assets/hw-ghost-sheet-kZF5Oxdt.webp",u8="/cozy-preview/assets/hw-hay-bale-BqFYl-D_.webp",g8="/cozy-preview/assets/hw-heart-pumpkin-B-0-0OAK.webp",m8="/cozy-preview/assets/hw-leaf-garland-DN-y_jMP.webp",y8="/cozy-preview/assets/hw-moon-cling-p5ei0N89.webp",w8="/cozy-preview/assets/hw-moon-lantern-ByPteKOL.webp",b8="/cozy-preview/assets/hw-star-pumpkin-Bxq_OX8C.webp",v8="/cozy-preview/assets/hw-witch-hat-BmuOG13B.webp",k8="/cozy-preview/assets/arched-mirror-ClJgTBd9.svg",_8="/cozy-preview/assets/big-monitor-jx5PnUa_.svg",$8="/cozy-preview/assets/boba-cup-CwUerXNm.svg",x8="/cozy-preview/assets/bubble-bath-8VwrkImA.svg",M8="/cozy-preview/assets/cactus-buddy-D3uacuVA.svg",L8="/cozy-preview/assets/caterpillar-plush-BhR8Pydf.svg",E8="/cozy-preview/assets/checker-bed-mtuxfPje.svg",S8="/cozy-preview/assets/checker-rug-CmSO3Y4j.svg",T8="/cozy-preview/assets/clothes-rail-BY-f9coz.svg",P8="/cozy-preview/assets/cloud-sofa-CZS1Y5s-.svg",A8="/cozy-preview/assets/cube-shelf-DoI0tLGL.svg",R8="/cozy-preview/assets/curvy-desk-eWCvec1f.svg",C8="/cozy-preview/assets/cute-speaker-DrVF9uns.svg",I8="/cozy-preview/assets/desk-lamp-C-VtrE1V.svg",O8="/cozy-preview/assets/desk-mic-BqYzh6ma.svg",B8="/cozy-preview/assets/flower-lamp-Dpz6tQ2x.svg",z8="/cozy-preview/assets/frog-plush-BhkTrE24.svg",D8="/cozy-preview/assets/game-controller-6gvwykQG.svg",H8="/cozy-preview/assets/gaming-chair-BCyGMzy0.svg",W8="/cozy-preview/assets/hamster-pet-LBcghoJj.svg",V8="/cozy-preview/assets/headphones-Cjjqt_92.svg",U8="/cozy-preview/assets/heart-light-DfDwRHju.svg",Q8="/cozy-preview/assets/keyboard-Cbtwvtj1.svg",N8="/cozy-preview/assets/mini-fridge-qdNm4NKf.svg",q8="/cozy-preview/assets/pastel-wardrobe-BubkWAN2.svg",F8="/cozy-preview/assets/phone-stand-VLW-DsK-.svg",j8="/cozy-preview/assets/pothos-plant-C1I15M9a.svg",Z8="/cozy-preview/assets/puffy-stool-CwjoblCa.svg",G8="/cozy-preview/assets/ring-light-CdxNAXA6.svg",Y8="/cozy-preview/assets/side-table-round-rCsBU0YO.svg",K8="/cozy-preview/assets/star-lamp-CHKQnzvB.svg",X8="/cozy-preview/assets/sticker-board-LUm1_I_P.svg",J8="/cozy-preview/assets/sunny-art-C25M7k02.svg",e$="/cozy-preview/assets/sv-bean-bag-DdsCYd4e.svg",t$="/cozy-preview/assets/sv-cloud-rug-BvczSj77.svg",n$="/cozy-preview/assets/sv-wall-shelf-BtJLzNMg.svg",s$="/cozy-preview/assets/vlog-camera-CBd28A7P.svg",o$="/cozy-preview/assets/wavy-floor-lamp-Iy8llzr8.svg",i$="/cozy-preview/assets/acorn-friend-BsLiZ2Z_.svg",a$="/cozy-preview/assets/apple-tree-DGIUIjY1.svg",r$="/cozy-preview/assets/big-wardrobe-BnfnkPXl.svg",l$="/cozy-preview/assets/box-stack-ji13G2mP.svg",c$="/cozy-preview/assets/brick-fireplace-BGCbiSK5.svg",d$="/cozy-preview/assets/bulletin-board-DqA69wQH.svg",f$="/cozy-preview/assets/cozy-mug-CFJEPRKb.svg",p$="/cozy-preview/assets/cream-sofa-CB4EWIDp.svg",h$="/cozy-preview/assets/fire-pit-DTyRokIj.svg",u$="/cozy-preview/assets/glass-cabinet-BCHExP4F.svg",g$="/cozy-preview/assets/hanging-lantern-DZbXB8L1.svg",m$="/cozy-preview/assets/knit-cushion-DUewI6rR.svg",y$="/cozy-preview/assets/ladder-shelf-DXYDmQiE.svg",w$="/cozy-preview/assets/landscape-art-CdCqCPL2.svg",b$="/cozy-preview/assets/lattice-bench-D3zCZTQp.svg",v$="/cozy-preview/assets/leaf-wreath-DUjq1MWh.svg",k$="/cozy-preview/assets/mini-greenhouse-CGE5F9A_.svg",_$="/cozy-preview/assets/moving-box-CZXbXcJO.svg",$$="/cozy-preview/assets/picnic-basket-D72DCNRY.svg",x$="/cozy-preview/assets/round-rug-D8ePosbv.svg",M$="/cozy-preview/assets/sale-sign-CXWpgQt5.svg",L$="/cozy-preview/assets/sprout-pot-BbXk09mS.svg",E$="/cozy-preview/assets/stripe-runner-ClycKEW5.svg",S$="/cozy-preview/assets/trailing-plant-NbG7dy8O.svg",T$="/cozy-preview/assets/wall-clock-CDC1o6eG.svg",P$="/cozy-preview/assets/wh-arc-floor-lamp-BKVes2Fd.svg",A$="/cozy-preview/assets/wh-book-stack-DjDFey2h.svg",R$="/cozy-preview/assets/wh-dresser-Y-jnNt5q.svg",C$="/cozy-preview/assets/wh-fiddle-leaf-fig-B0-kGmHI.svg",I$="/cozy-preview/assets/wh-kitchen-counter-BtBenu6u.svg",O$="/cozy-preview/assets/wh-nightstand-DPUoV5aO.svg",B$="/cozy-preview/assets/wh-pendant-lamp-DBg4p7hi.svg",z$="/cozy-preview/assets/wh-snake-plant-Cj3bHF25.svg",D$="/cozy-preview/assets/wh-string-lights-C3JVBkgW.svg",H$="/cozy-preview/assets/wh-teapot-kevlW5hN.svg",W$="/cozy-preview/assets/wood-armchair-DNVhKBWe.svg",V$="/cozy-preview/assets/wood-bookshelf-CvT7GAuI.svg",U$="/cozy-preview/assets/wood-coffee-table-CuAR_7Kr.svg",Q$="/cozy-preview/assets/wood-desk-DPCJq_XQ.svg",N$="/cozy-preview/assets/wood-stool-CV7YeZwC.svg",q$="/cozy-preview/assets/wooden-bed-Qj-sf8yq.svg",F$="/cozy-preview/assets/wc-bauble-garland-PlBim-j0.webp",j$="/cozy-preview/assets/wc-berry-wreath-BtfH1PGe.webp",Z$="/cozy-preview/assets/wc-birch-basket-vRxqyB3J.webp",G$="/cozy-preview/assets/wc-cabin-picture-B-lavF1R.webp",Y$="/cozy-preview/assets/wc-candle-trio-CjQ7YYcj.webp",K$="/cozy-preview/assets/wc-cane-lamp-OhwvqNa-.webp",X$="/cozy-preview/assets/wc-cinnamon-tray-CxLrtplK.webp",J$="/cozy-preview/assets/wc-cocoa-cart-BkMzGgs0.webp",e3="/cozy-preview/assets/wc-cocoa-mug-qa2xzTYd.webp",t3="/cozy-preview/assets/wc-cocoa-pot-bLgiaNKD.webp",n3="/cozy-preview/assets/wc-cookie-oven-D2Ud1EPt.webp",s3="/cozy-preview/assets/wc-cookie-plate-RhDZYroJ.webp",o3="/cozy-preview/assets/wc-frost-bookcase-BMd6DAXH.webp",i3="/cozy-preview/assets/wc-frosted-pine-BupMG4GK.webp",a3="/cozy-preview/assets/wc-fur-bench-B1nXjHAR.webp",r3="/cozy-preview/assets/wc-gingerbread-village-8pOXPPCY.webp",l3="/cozy-preview/assets/wc-gingerbread-PGlclkJ_.webp",c3="/cozy-preview/assets/wc-globe-lamp-DUCVl_3A.webp",d3="/cozy-preview/assets/wc-holiday-tree-CO0SBlqY.webp",f3="/cozy-preview/assets/wc-holly-CD8teo0a.webp",p3="/cozy-preview/assets/wc-ice-skates-D49y8YK1.webp",h3="/cozy-preview/assets/wc-ice-wardrobe-Dliflqpp.webp",u3="/cozy-preview/assets/wc-knit-armchair-84rhSw_8.webp",g3="/cozy-preview/assets/wc-lantern-81B3e5fN.webp",m3="/cozy-preview/assets/wc-log-bench-qQ1zT34_.webp",y3="/cozy-preview/assets/wc-marshmallow-jar-DeWRr-zf.webp",w3="/cozy-preview/assets/wc-mitten-line-sg-sweCl.webp",b3="/cozy-preview/assets/wc-mitten-ottoman-H5qkjso6.webp",v3="/cozy-preview/assets/wc-mug-shelf-DlWrwZYo.webp",k3="/cozy-preview/assets/wc-nutcracker-BGZe5tYy.webp",_3="/cozy-preview/assets/wc-penguin-chair-CDM1eIxo.webp",$3="/cozy-preview/assets/wc-penguin-plush-C8B27KcB.webp",x3="/cozy-preview/assets/wc-peppermint-counter-CPl6TA0h.webp",M3="/cozy-preview/assets/wc-peppermint-rug-3nakY_gB.webp",L3="/cozy-preview/assets/wc-pinecone-garland-s7ZWASw2.webp",E3="/cozy-preview/assets/wc-pinecone-table-DlJvjB-2.webp",S3="/cozy-preview/assets/wc-plaid-bed-eAhWKZdO.webp",T3="/cozy-preview/assets/wc-plaid-sofa-kvF30vEn.webp",P3="/cozy-preview/assets/wc-poinsettia-C-S-MDMu.webp",A3="/cozy-preview/assets/wc-polar-plush-BUVRTt7t.webp",R3="/cozy-preview/assets/wc-pom-rug-B-JF-heA.webp",C3="/cozy-preview/assets/wc-present-stack-Do2pEHLF.webp",I3="/cozy-preview/assets/wc-reindeer-CbKEp6CE.webp",O3="/cozy-preview/assets/wc-sled-table-Bd2cST9J.webp",B3="/cozy-preview/assets/wc-sleigh-planter-Bfcxvgbk.webp",z3="/cozy-preview/assets/wc-snow-globe-BcGMsnmh.webp",D3="/cozy-preview/assets/wc-snow-mobile-F06-kuT7.webp",H3="/cozy-preview/assets/wc-snow-nightstand-D6RhLncP.webp",W3="/cozy-preview/assets/wc-snow-window-dOxdYTSk.webp",V3="/cozy-preview/assets/wc-snowman-gxLBKnIO.webp",U3="/cozy-preview/assets/wc-snowshoes-CZcMT0Qx.webp",Q3="/cozy-preview/assets/wc-sock-hamper-mesU3CG3.webp",N3="/cozy-preview/assets/wc-star-topper-c4tXfpV6.webp",q3="/cozy-preview/assets/wc-stocking-row-Dz0-4wTi.webp",F3="/cozy-preview/assets/wc-stone-hearth-1blXXfiH.webp",j3="/cozy-preview/assets/wc-twinkle-lamp-CYcQjW3A.webp",Z3="/cozy-preview/assets/wc-twinkle-string-Olg29poj.webp",G3="/cozy-preview/assets/wc-window-seat-B7CwlRjl.webp",Y3="/cozy-preview/assets/wc-woodstove-Cf0xJFnD.webp",K3="/cozy-preview/assets/cc-butter-polka-CmiHLPHI.svg",X3="/cozy-preview/assets/cc-cream-hex-Bkf3o84Z.svg",J3="/cozy-preview/assets/cc-lavender-lattice-DhxILx5n.svg",ex="/cozy-preview/assets/cc-lilac-gingham-C-WPjvD8.svg",tx="/cozy-preview/assets/cc-mint-checks-BKmyOLlr.svg",nx="/cozy-preview/assets/cc-mint-florals-Dz8qRBHw.svg",sx="/cozy-preview/assets/cc-peach-scallops-GPn_mXbS.svg",ox="/cozy-preview/assets/cc-pink-plaid-VgppBwax.svg",ix="/cozy-preview/assets/cc-rag-planks-C5Hombhc.svg",ax="/cozy-preview/assets/cc-rose-herringbone-CQRix6_f.svg",rx="/cozy-preview/assets/lilac-stripes-yb9DhjTf.svg",lx="/cozy-preview/assets/lilac-terrazzo-8CaN2qhK.svg",cx="/cozy-preview/assets/mint-bubbles-BIQM5a2P.svg",dx="/cozy-preview/assets/pink-check-floor-Cy9k3Fal.svg",fx="/cozy-preview/assets/pink-hearts-BpVCT-98.svg",px="/cozy-preview/assets/cloud-sky-CbZL0zcC.svg",hx="/cozy-preview/assets/pastel-planks-BAcEss7w.svg",ux="/cozy-preview/assets/soft-carpet-BSwTSDW1.svg",gx="/cozy-preview/assets/star-sprinkle-5bH7qjW0.svg",mx="/cozy-preview/assets/tiny-hearts-C-RHlg1h.svg",yx="/cozy-preview/assets/butter-check-floor-C8HdmZ0P.svg",wx="/cozy-preview/assets/mint-checks-rWbOdhfH.svg",bx="/cozy-preview/assets/sky-clouds-DUJlygwI.svg",vx="/cozy-preview/assets/sky-tiles-xxuodD5m.svg",kx="/cozy-preview/assets/sunny-stars-C6fsFX70.svg",_x="/cozy-preview/assets/leafy-cream-WIcyLI1T.svg",$x="/cozy-preview/assets/orange-gingham-CVNizWBt.svg",xx="/cozy-preview/assets/terracotta-tiles-j3yOSRI7.svg",Mx="/cozy-preview/assets/wood-panel-Dob8WRpW.svg",Lx="/cozy-preview/assets/wood-planks-4TUYjAkF.svg",Ex="/cozy-preview/assets/wc-cabin-planks-Icu9n6YO.webp",Sx="/cozy-preview/assets/wc-candy-stripe-cOBsT1Xj.webp",Tx="/cozy-preview/assets/wc-frosty-dots-DmQgGwJW.webp",Px="/cozy-preview/assets/wc-mint-pine-5FYK_dVo.webp",Ax="/cozy-preview/assets/wc-peppermint-tiles-ChaNg2gF.webp",Rx="/cozy-preview/assets/wc-red-plaid-CcQ3BMhN.webp",Cx="/cozy-preview/assets/wc-snow-knit-DEFXSv74.webp",Ix="/cozy-preview/assets/wc-snowflake-sky-DrRAdoDP.webp",Eh={small:80,medium:150,large:260},Ox={"welcome-home":"Welcome Home","sunny-vibes":"Sunny Vibes",glossy:"Glossy",cottage:"Cozy Cottage",...Mb,...Tb},pg=e=>Ox[e]??e.replace(/[-_]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Bx=Object.assign({"../assets/items/manifest.json":G4,"../assets/patterns/manifest.json":Y4}),Sh=Object.assign({"../assets/items/bedroom/alarm-clock.svg":K4,"../assets/items/bedroom/bedtime-snack.svg":X4,"../assets/items/bedroom/book-stack.svg":J4,"../assets/items/bedroom/bunk-bed.svg":e6,"../assets/items/bedroom/bunny-slippers.svg":t6,"../assets/items/bedroom/canopy-bed.svg":n6,"../assets/items/bedroom/cat-bed.svg":s6,"../assets/items/bedroom/cloud-rug.svg":o6,"../assets/items/bedroom/cloud-shelf.svg":i6,"../assets/items/bedroom/cork-board.svg":a6,"../assets/items/bedroom/daisy-pot.svg":r6,"../assets/items/bedroom/desk.svg":l6,"../assets/items/bedroom/dino-plush.svg":c6,"../assets/items/bedroom/doll-house.svg":d6,"../assets/items/bedroom/dresser.svg":f6,"../assets/items/bedroom/egg-chair.svg":p6,"../assets/items/bedroom/floor-fan.svg":h6,"../assets/items/bedroom/guinea-pig.svg":u6,"../assets/items/bedroom/hamster-cage.svg":g6,"../assets/items/bedroom/heart-rug.svg":m6,"../assets/items/bedroom/lava-lamp.svg":y6,"../assets/items/bedroom/moon-night-light.svg":w6,"../assets/items/bedroom/nightstand.svg":b6,"../assets/items/bedroom/paper-lantern.svg":v6,"../assets/items/bedroom/piggy-bank.svg":k6,"../assets/items/bedroom/plant-stand.svg":_6,"../assets/items/bedroom/play-tent.svg":$6,"../assets/items/bedroom/star-mobile.svg":x6,"../assets/items/bedroom/toy-chest.svg":M6,"../assets/items/bedroom/toy-robot.svg":L6,"../assets/items/bedroom/toy-train.svg":E6,"../assets/items/bedroom/unicorn-plush.svg":S6,"../assets/items/bedroom/wardrobe.svg":T6,"../assets/items/kitchen/bananas.svg":P6,"../assets/items/kitchen/bar-stool.svg":A6,"../assets/items/kitchen/bread-loaf.svg":R6,"../assets/items/kitchen/chick.svg":C6,"../assets/items/kitchen/china-hutch.svg":I6,"../assets/items/kitchen/cocoa-mug.svg":O6,"../assets/items/kitchen/cookie-jar.svg":B6,"../assets/items/kitchen/cooking-pot.svg":z6,"../assets/items/kitchen/cupcake.svg":D6,"../assets/items/kitchen/dish-rack.svg":H6,"../assets/items/kitchen/fruit-bowl.svg":W6,"../assets/items/kitchen/frying-pan.svg":V6,"../assets/items/kitchen/happy-fridge.svg":U6,"../assets/items/kitchen/herb-box.svg":Q6,"../assets/items/kitchen/high-chair.svg":N6,"../assets/items/kitchen/ice-cream.svg":q6,"../assets/items/kitchen/kettle.svg":F6,"../assets/items/kitchen/kitchen-counter.svg":j6,"../assets/items/kitchen/kitchen-sink.svg":Z6,"../assets/items/kitchen/lemon-tree.svg":G6,"../assets/items/kitchen/microwave.svg":Y6,"../assets/items/kitchen/milk-bottle.svg":K6,"../assets/items/kitchen/pancakes.svg":X6,"../assets/items/kitchen/pantry-shelf.svg":J6,"../assets/items/kitchen/pendant-lamp.svg":ek,"../assets/items/kitchen/pet-bowl.svg":tk,"../assets/items/kitchen/rice-cooker.svg":nk,"../assets/items/kitchen/runner-rug.svg":sk,"../assets/items/kitchen/spice-rack.svg":ok,"../assets/items/kitchen/stand-mixer.svg":ik,"../assets/items/kitchen/teapot.svg":ak,"../assets/items/kitchen/toaster.svg":rk,"../assets/items/kitchen/utensil-rail.svg":lk,"../assets/items/kitchen/watermelon-slice.svg":ck,"../assets/items/living/aquarium.svg":dk,"../assets/items/living/arc-floor-lamp.svg":fk,"../assets/items/living/bean-bag.svg":pk,"../assets/items/living/bird-cage.svg":hk,"../assets/items/living/blanket-basket.svg":uk,"../assets/items/living/building-blocks.svg":gk,"../assets/items/living/coffee-table.svg":mk,"../assets/items/living/comfy-armchair.svg":yk,"../assets/items/living/cubby-shelf.svg":wk,"../assets/items/living/daisy-rug.svg":bk,"../assets/items/living/fiddle-leaf-fig.svg":vk,"../assets/items/living/fireplace.svg":kk,"../assets/items/living/globe.svg":_k,"../assets/items/living/hanging-planter.svg":$k,"../assets/items/living/monstera-plant.svg":xk,"../assets/items/living/piano.svg":Mk,"../assets/items/living/popcorn.svg":Lk,"../assets/items/living/pouf.svg":Ek,"../assets/items/living/rainbow-rug.svg":Sk,"../assets/items/living/rainbow-wall-art.svg":Tk,"../assets/items/living/retro-radio.svg":Pk,"../assets/items/living/rocking-chair.svg":Ak,"../assets/items/living/rocking-horse.svg":Rk,"../assets/items/living/snake-plant.svg":Ck,"../assets/items/living/string-lights.svg":Ik,"../assets/items/living/succulent-trio.svg":Ok,"../assets/items/living/tassel-rug.svg":Bk,"../assets/items/living/throw-pillow.svg":zk,"../assets/items/living/toy-car.svg":Dk,"../assets/items/living/tulip-vase.svg":Hk,"../assets/items/living/turtle.svg":Wk,"../assets/items/living/tv-stand.svg":Vk,"../assets/items/living/wall-shelf.svg":Uk,"../assets/items/packs/cottage/cc-bakery-shelf.svg":Qk,"../assets/items/packs/cottage/cc-breakfast-table.svg":Nk,"../assets/items/packs/cottage/cc-bubble-chair.svg":qk,"../assets/items/packs/cottage/cc-canopy-daybed.svg":Fk,"../assets/items/packs/cottage/cc-cloud-beanbag.svg":jk,"../assets/items/packs/cottage/cc-cloud-lamp.svg":Zk,"../assets/items/packs/cottage/cc-cottage-aquarium.svg":Gk,"../assets/items/packs/cottage/cc-cupcake-stand.svg":Yk,"../assets/items/packs/cottage/cc-dryer-chair.svg":Kk,"../assets/items/packs/cottage/cc-fairy-garland.svg":Xk,"../assets/items/packs/cottage/cc-fairy-shelf.svg":Jk,"../assets/items/packs/cottage/cc-flower-kettle.svg":e_,"../assets/items/packs/cottage/cc-flower-lamp.svg":t_,"../assets/items/packs/cottage/cc-heart-bed.svg":n_,"../assets/items/packs/cottage/cc-heart-clock.svg":s_,"../assets/items/packs/cottage/cc-heart-pouf.svg":o_,"../assets/items/packs/cottage/cc-heart-rug.svg":i_,"../assets/items/packs/cottage/cc-jewel-box.svg":a_,"../assets/items/packs/cottage/cc-light-vanity.svg":r_,"../assets/items/packs/cottage/cc-macaron-jar.svg":l_,"../assets/items/packs/cottage/cc-macrame-swing.svg":c_,"../assets/items/packs/cottage/cc-mani-chair.svg":d_,"../assets/items/packs/cottage/cc-mint-fridge.svg":f_,"../assets/items/packs/cottage/cc-mushroom-stool.svg":p_,"../assets/items/packs/cottage/cc-pastel-range.svg":h_,"../assets/items/packs/cottage/cc-perfume-tray.svg":u_,"../assets/items/packs/cottage/cc-petal-table.svg":g_,"../assets/items/packs/cottage/cc-plant-wall.svg":m_,"../assets/items/packs/cottage/cc-reading-nook.svg":y_,"../assets/items/packs/cottage/cc-record-player.svg":w_,"../assets/items/packs/cottage/cc-ribbon-mirror.svg":b_,"../assets/items/packs/cottage/cc-scallop-curtains.svg":v_,"../assets/items/packs/cottage/cc-scallop-loveseat.svg":k_,"../assets/items/packs/cottage/cc-star-dresser.svg":__,"../assets/items/packs/cottage/cc-teapot-set.svg":$_,"../assets/items/packs/cottage/cc-window-seat.svg":x_,"../assets/items/packs/glossy/arched-shelf.svg":M_,"../assets/items/packs/glossy/blob-rug.svg":L_,"../assets/items/packs/glossy/bubbly-plant.svg":E_,"../assets/items/packs/glossy/bud-vase.svg":S_,"../assets/items/packs/glossy/comb-brush.svg":T_,"../assets/items/packs/glossy/cream-jars.svg":P_,"../assets/items/packs/glossy/drop-lamp.svg":A_,"../assets/items/packs/glossy/droplet-buddy.svg":R_,"../assets/items/packs/glossy/fancy-sofa.svg":C_,"../assets/items/packs/glossy/flower-cart.svg":I_,"../assets/items/packs/glossy/foot-spa.svg":O_,"../assets/items/packs/glossy/globe-pendants.svg":B_,"../assets/items/packs/glossy/glow-mirror.svg":z_,"../assets/items/packs/glossy/gold-floor-mirror.svg":D_,"../assets/items/packs/glossy/hair-dryer.svg":H_,"../assets/items/packs/glossy/heart-plant.svg":W_,"../assets/items/packs/glossy/heart-pouf.svg":V_,"../assets/items/packs/glossy/lilac-curtain.svg":U_,"../assets/items/packs/glossy/lotion-trio.svg":Q_,"../assets/items/packs/glossy/mani-lamp.svg":N_,"../assets/items/packs/glossy/nail-table.svg":q_,"../assets/items/packs/glossy/pebble-rug.svg":F_,"../assets/items/packs/glossy/perfume-bottle.svg":j_,"../assets/items/packs/glossy/pink-fountain.svg":Z_,"../assets/items/packs/glossy/pink-vanity.svg":G_,"../assets/items/packs/glossy/polish-bottle.svg":Y_,"../assets/items/packs/glossy/polish-rack.svg":K_,"../assets/items/packs/glossy/reception-desk.svg":X_,"../assets/items/packs/glossy/salon-chair.svg":J_,"../assets/items/packs/glossy/scent-candle.svg":e8,"../assets/items/packs/glossy/spray-bottle.svg":t8,"../assets/items/packs/glossy/star-wall-sign.svg":n8,"../assets/items/packs/glossy/swivel-stool.svg":s8,"../assets/items/packs/glossy/tiered-tray.svg":o8,"../assets/items/packs/glossy/towel-cart.svg":i8,"../assets/items/packs/glossy/towel-stack.svg":a8,"../assets/items/packs/glossy/vine-planter.svg":r8,"../assets/items/packs/glossy/waiting-bench.svg":l8,"../assets/items/packs/glossy/wash-chair.svg":c8,"../assets/items/packs/halloween/hw-candy-bowl.webp":d8,"../assets/items/packs/halloween/hw-cat-statue.webp":f8,"../assets/items/packs/halloween/hw-cauldron.webp":p8,"../assets/items/packs/halloween/hw-ghost-sheet.webp":h8,"../assets/items/packs/halloween/hw-hay-bale.webp":u8,"../assets/items/packs/halloween/hw-heart-pumpkin.webp":g8,"../assets/items/packs/halloween/hw-leaf-garland.webp":m8,"../assets/items/packs/halloween/hw-moon-cling.webp":y8,"../assets/items/packs/halloween/hw-moon-lantern.webp":w8,"../assets/items/packs/halloween/hw-star-pumpkin.webp":b8,"../assets/items/packs/halloween/hw-witch-hat.webp":v8,"../assets/items/packs/sunny-vibes/arched-mirror.svg":k8,"../assets/items/packs/sunny-vibes/big-monitor.svg":_8,"../assets/items/packs/sunny-vibes/boba-cup.svg":$8,"../assets/items/packs/sunny-vibes/bubble-bath.svg":x8,"../assets/items/packs/sunny-vibes/cactus-buddy.svg":M8,"../assets/items/packs/sunny-vibes/caterpillar-plush.svg":L8,"../assets/items/packs/sunny-vibes/checker-bed.svg":E8,"../assets/items/packs/sunny-vibes/checker-rug.svg":S8,"../assets/items/packs/sunny-vibes/clothes-rail.svg":T8,"../assets/items/packs/sunny-vibes/cloud-sofa.svg":P8,"../assets/items/packs/sunny-vibes/cube-shelf.svg":A8,"../assets/items/packs/sunny-vibes/curvy-desk.svg":R8,"../assets/items/packs/sunny-vibes/cute-speaker.svg":C8,"../assets/items/packs/sunny-vibes/desk-lamp.svg":I8,"../assets/items/packs/sunny-vibes/desk-mic.svg":O8,"../assets/items/packs/sunny-vibes/flower-lamp.svg":B8,"../assets/items/packs/sunny-vibes/frog-plush.svg":z8,"../assets/items/packs/sunny-vibes/game-controller.svg":D8,"../assets/items/packs/sunny-vibes/gaming-chair.svg":H8,"../assets/items/packs/sunny-vibes/hamster-pet.svg":W8,"../assets/items/packs/sunny-vibes/headphones.svg":V8,"../assets/items/packs/sunny-vibes/heart-light.svg":U8,"../assets/items/packs/sunny-vibes/keyboard.svg":Q8,"../assets/items/packs/sunny-vibes/mini-fridge.svg":N8,"../assets/items/packs/sunny-vibes/pastel-wardrobe.svg":q8,"../assets/items/packs/sunny-vibes/phone-stand.svg":F8,"../assets/items/packs/sunny-vibes/pothos-plant.svg":j8,"../assets/items/packs/sunny-vibes/puffy-stool.svg":Z8,"../assets/items/packs/sunny-vibes/ring-light.svg":G8,"../assets/items/packs/sunny-vibes/side-table-round.svg":Y8,"../assets/items/packs/sunny-vibes/star-lamp.svg":K8,"../assets/items/packs/sunny-vibes/sticker-board.svg":X8,"../assets/items/packs/sunny-vibes/sunny-art.svg":J8,"../assets/items/packs/sunny-vibes/sv-bean-bag.svg":e$,"../assets/items/packs/sunny-vibes/sv-cloud-rug.svg":t$,"../assets/items/packs/sunny-vibes/sv-wall-shelf.svg":n$,"../assets/items/packs/sunny-vibes/vlog-camera.svg":s$,"../assets/items/packs/sunny-vibes/wavy-floor-lamp.svg":o$,"../assets/items/packs/welcome-home/acorn-friend.svg":i$,"../assets/items/packs/welcome-home/apple-tree.svg":a$,"../assets/items/packs/welcome-home/big-wardrobe.svg":r$,"../assets/items/packs/welcome-home/box-stack.svg":l$,"../assets/items/packs/welcome-home/brick-fireplace.svg":c$,"../assets/items/packs/welcome-home/bulletin-board.svg":d$,"../assets/items/packs/welcome-home/cozy-mug.svg":f$,"../assets/items/packs/welcome-home/cream-sofa.svg":p$,"../assets/items/packs/welcome-home/fire-pit.svg":h$,"../assets/items/packs/welcome-home/glass-cabinet.svg":u$,"../assets/items/packs/welcome-home/hanging-lantern.svg":g$,"../assets/items/packs/welcome-home/knit-cushion.svg":m$,"../assets/items/packs/welcome-home/ladder-shelf.svg":y$,"../assets/items/packs/welcome-home/landscape-art.svg":w$,"../assets/items/packs/welcome-home/lattice-bench.svg":b$,"../assets/items/packs/welcome-home/leaf-wreath.svg":v$,"../assets/items/packs/welcome-home/mini-greenhouse.svg":k$,"../assets/items/packs/welcome-home/moving-box.svg":_$,"../assets/items/packs/welcome-home/picnic-basket.svg":$$,"../assets/items/packs/welcome-home/round-rug.svg":x$,"../assets/items/packs/welcome-home/sale-sign.svg":M$,"../assets/items/packs/welcome-home/sprout-pot.svg":L$,"../assets/items/packs/welcome-home/stripe-runner.svg":E$,"../assets/items/packs/welcome-home/trailing-plant.svg":S$,"../assets/items/packs/welcome-home/wall-clock.svg":T$,"../assets/items/packs/welcome-home/wh-arc-floor-lamp.svg":P$,"../assets/items/packs/welcome-home/wh-book-stack.svg":A$,"../assets/items/packs/welcome-home/wh-dresser.svg":R$,"../assets/items/packs/welcome-home/wh-fiddle-leaf-fig.svg":C$,"../assets/items/packs/welcome-home/wh-kitchen-counter.svg":I$,"../assets/items/packs/welcome-home/wh-nightstand.svg":O$,"../assets/items/packs/welcome-home/wh-pendant-lamp.svg":B$,"../assets/items/packs/welcome-home/wh-snake-plant.svg":z$,"../assets/items/packs/welcome-home/wh-string-lights.svg":D$,"../assets/items/packs/welcome-home/wh-teapot.svg":H$,"../assets/items/packs/welcome-home/wood-armchair.svg":W$,"../assets/items/packs/welcome-home/wood-bookshelf.svg":V$,"../assets/items/packs/welcome-home/wood-coffee-table.svg":U$,"../assets/items/packs/welcome-home/wood-desk.svg":Q$,"../assets/items/packs/welcome-home/wood-stool.svg":N$,"../assets/items/packs/welcome-home/wooden-bed.svg":q$,"../assets/items/packs/winter/wc-bauble-garland.webp":F$,"../assets/items/packs/winter/wc-berry-wreath.webp":j$,"../assets/items/packs/winter/wc-birch-basket.webp":Z$,"../assets/items/packs/winter/wc-cabin-picture.webp":G$,"../assets/items/packs/winter/wc-candle-trio.webp":Y$,"../assets/items/packs/winter/wc-cane-lamp.webp":K$,"../assets/items/packs/winter/wc-cinnamon-tray.webp":X$,"../assets/items/packs/winter/wc-cocoa-cart.webp":J$,"../assets/items/packs/winter/wc-cocoa-mug.webp":e3,"../assets/items/packs/winter/wc-cocoa-pot.webp":t3,"../assets/items/packs/winter/wc-cookie-oven.webp":n3,"../assets/items/packs/winter/wc-cookie-plate.webp":s3,"../assets/items/packs/winter/wc-frost-bookcase.webp":o3,"../assets/items/packs/winter/wc-frosted-pine.webp":i3,"../assets/items/packs/winter/wc-fur-bench.webp":a3,"../assets/items/packs/winter/wc-gingerbread-village.webp":r3,"../assets/items/packs/winter/wc-gingerbread.webp":l3,"../assets/items/packs/winter/wc-globe-lamp.webp":c3,"../assets/items/packs/winter/wc-holiday-tree.webp":d3,"../assets/items/packs/winter/wc-holly.webp":f3,"../assets/items/packs/winter/wc-ice-skates.webp":p3,"../assets/items/packs/winter/wc-ice-wardrobe.webp":h3,"../assets/items/packs/winter/wc-knit-armchair.webp":u3,"../assets/items/packs/winter/wc-lantern.webp":g3,"../assets/items/packs/winter/wc-log-bench.webp":m3,"../assets/items/packs/winter/wc-marshmallow-jar.webp":y3,"../assets/items/packs/winter/wc-mitten-line.webp":w3,"../assets/items/packs/winter/wc-mitten-ottoman.webp":b3,"../assets/items/packs/winter/wc-mug-shelf.webp":v3,"../assets/items/packs/winter/wc-nutcracker.webp":k3,"../assets/items/packs/winter/wc-penguin-chair.webp":_3,"../assets/items/packs/winter/wc-penguin-plush.webp":$3,"../assets/items/packs/winter/wc-peppermint-counter.webp":x3,"../assets/items/packs/winter/wc-peppermint-rug.webp":M3,"../assets/items/packs/winter/wc-pinecone-garland.webp":L3,"../assets/items/packs/winter/wc-pinecone-table.webp":E3,"../assets/items/packs/winter/wc-plaid-bed.webp":S3,"../assets/items/packs/winter/wc-plaid-sofa.webp":T3,"../assets/items/packs/winter/wc-poinsettia.webp":P3,"../assets/items/packs/winter/wc-polar-plush.webp":A3,"../assets/items/packs/winter/wc-pom-rug.webp":R3,"../assets/items/packs/winter/wc-present-stack.webp":C3,"../assets/items/packs/winter/wc-reindeer.webp":I3,"../assets/items/packs/winter/wc-sled-table.webp":O3,"../assets/items/packs/winter/wc-sleigh-planter.webp":B3,"../assets/items/packs/winter/wc-snow-globe.webp":z3,"../assets/items/packs/winter/wc-snow-mobile.webp":D3,"../assets/items/packs/winter/wc-snow-nightstand.webp":H3,"../assets/items/packs/winter/wc-snow-window.webp":W3,"../assets/items/packs/winter/wc-snowman.webp":V3,"../assets/items/packs/winter/wc-snowshoes.webp":U3,"../assets/items/packs/winter/wc-sock-hamper.webp":Q3,"../assets/items/packs/winter/wc-star-topper.webp":N3,"../assets/items/packs/winter/wc-stocking-row.webp":q3,"../assets/items/packs/winter/wc-stone-hearth.webp":F3,"../assets/items/packs/winter/wc-twinkle-lamp.webp":j3,"../assets/items/packs/winter/wc-twinkle-string.webp":Z3,"../assets/items/packs/winter/wc-window-seat.webp":G3,"../assets/items/packs/winter/wc-woodstove.webp":Y3}),Th=Object.assign({"../assets/patterns/cottage/cc-butter-polka.svg":K3,"../assets/patterns/cottage/cc-cream-hex.svg":X3,"../assets/patterns/cottage/cc-lavender-lattice.svg":J3,"../assets/patterns/cottage/cc-lilac-gingham.svg":ex,"../assets/patterns/cottage/cc-mint-checks.svg":tx,"../assets/patterns/cottage/cc-mint-florals.svg":nx,"../assets/patterns/cottage/cc-peach-scallops.svg":sx,"../assets/patterns/cottage/cc-pink-plaid.svg":ox,"../assets/patterns/cottage/cc-rag-planks.svg":ix,"../assets/patterns/cottage/cc-rose-herringbone.svg":ax,"../assets/patterns/glossy/lilac-stripes.svg":rx,"../assets/patterns/glossy/lilac-terrazzo.svg":lx,"../assets/patterns/glossy/mint-bubbles.svg":cx,"../assets/patterns/glossy/pink-check-floor.svg":dx,"../assets/patterns/glossy/pink-hearts.svg":fx,"../assets/patterns/nursery/cloud-sky.svg":px,"../assets/patterns/nursery/pastel-planks.svg":hx,"../assets/patterns/nursery/soft-carpet.svg":ux,"../assets/patterns/nursery/star-sprinkle.svg":gx,"../assets/patterns/nursery/tiny-hearts.svg":mx,"../assets/patterns/sunny-vibes/butter-check-floor.svg":yx,"../assets/patterns/sunny-vibes/mint-checks.svg":wx,"../assets/patterns/sunny-vibes/sky-clouds.svg":bx,"../assets/patterns/sunny-vibes/sky-tiles.svg":vx,"../assets/patterns/sunny-vibes/sunny-stars.svg":kx,"../assets/patterns/welcome-home/leafy-cream.svg":_x,"../assets/patterns/welcome-home/orange-gingham.svg":$x,"../assets/patterns/welcome-home/terracotta-tiles.svg":xx,"../assets/patterns/welcome-home/wood-panel.svg":Mx,"../assets/patterns/welcome-home/wood-planks.svg":Lx,"../assets/patterns/winter/wc-cabin-planks.webp":Ex,"../assets/patterns/winter/wc-candy-stripe.webp":Sx,"../assets/patterns/winter/wc-frosty-dots.webp":Tx,"../assets/patterns/winter/wc-mint-pine.webp":Px,"../assets/patterns/winter/wc-peppermint-tiles.webp":Ax,"../assets/patterns/winter/wc-red-plaid.webp":Rx,"../assets/patterns/winter/wc-snow-knit.webp":Cx,"../assets/patterns/winter/wc-snowflake-sky.webp":Ix});function zx(e,t){if(!e||!e.trim())return[];try{const n=JSON.parse(e);return(Array.isArray(n)?n:[...Array.isArray(n?.items)?n.items:[],...Array.isArray(n?.patterns)?n.patterns:[]]).filter(o=>o&&typeof o.slug=="string"&&o.slug.trim())}catch(n){return console.warn(`[packs] ${t} is not valid JSON; ignoring`,n),[]}}const hg=Object.entries(Bx).flatMap(([e,t])=>zx(t,e)),Dx=["svg","png","webp","SVG","PNG","WEBP"];function ug(e,t,n,s){for(const i of Dx){const a=e[`../assets/${t}/${n}/${s}.${i}`];if(a)return a}const o=Object.keys(e).find(i=>i.split("/").pop().replace(/\.\w+$/,"")===s);return o?e[o]:void 0}const Ph={furniture:"furniture",appliance:"furniture",appliances:"furniture",seating:"furniture",storage:"furniture",bed:"furniture",table:"furniture",decor:"decor",rug:"decor",rugs:"decor",lighting:"decor",light:"decor",lamp:"decor",toy:"decor",toys:"decor","wall-art":"decor",art:"decor",beauty:"decor",plant:"plants",plants:"plants",flower:"plants",flowers:"plants",food:"food",drink:"food",drinks:"food",snack:"food",pet:"pets",pets:"pets",animal:"pets",animals:"pets"};function Hx(e){const t=typeof e=="string"?e.trim().toLowerCase():"";return Ph[t]??Ph[t.replace(/s$/,"")]??"decor"}const No=(e,t)=>typeof e=="string"&&e.trim()?e.trim().toLowerCase():t,gg=e=>["wallpaper","floor"].includes(No(e.type,"")),Ah=new Set,Wx=hg.filter(e=>!gg(e)).flatMap(e=>{const t=No(e.room,"any"),n=e.slug.trim();if(Ah.has(n))return[];Ah.add(n);const o=[e.svg,e.png].filter(u=>typeof u=="string").map(u=>Sh["../assets/items/"+u.replace(/^\.?\//,"")]).find(Boolean)??ug(Sh,"items",t,n);if(!o)return console.warn(`[packs] no image for items/${t}/${n}`),[];const i=No(e.pack,""),a=No(e.size,"medium"),r=Hx(e.category),l=typeof e.gameW=="number"&&e.gameW>20&&e.gameW<800?e.gameW:Eh[a]??Eh.medium,c=typeof e.widthUnits=="number"&&typeof e.heightUnits=="number"&&e.widthUnits>0&&e.heightUnits>0?e.heightUnits/e.widthUnits:1,d=Math.round(l*Math.min(4,Math.max(.2,c))),f=typeof e.holdable=="boolean"?e.holdable:a!=="large"&&r!=="furniture",h=e.tag==="lighting"||/lamp|light|lantern|candle/i.test(n);return[{kind:`pack:${n}`,name:e.name||n,cat:r,rooms:[t],w:l,h:d,wall:e.wall===!0||void 0,svg:"",img:o,pack:i||void 0,holdable:f,light:h||void 0}]}),kd=hg.filter(gg).flatMap(e=>{const t=No(e.pack,"extra"),n=e.slug.trim(),o=[e.svg,e.png].filter(i=>typeof i=="string").map(i=>Th["../assets/patterns/"+i.replace(/^\.?\//,"")]).find(Boolean)??ug(Th,"patterns",t,n);return o?[{id:`${t}/${n}`,name:e.name||n,pack:t,kind:No(e.type,"wallpaper"),url:o}]:(console.warn(`[packs] no image for patterns/${t}/${n}`),[])}),Rh=Object.fromEntries(kd.map(e=>[e.id,e])),On="#5a3d5c",D=`stroke="${On}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,mg=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="2.4" fill="${On}"/><circle cx="${t}" cy="${n}" r="2.4" fill="${On}"/><circle cx="${e+.8}" cy="${n-.8}" r=".8" fill="#fff"/><circle cx="${t+.8}" cy="${n-.8}" r=".8" fill="#fff"/>`,yg=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/><ellipse cx="${t}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/>`,at='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>';function xc(e,t,n){return`${at}<ellipse cx="50" cy="78" rx="28" ry="16" fill="${t}" ${D}/><path d="M24 62 Q50 48 76 62 V78 Q50 92 24 78 Z" fill="${t}" ${D}/>
    <circle cx="50" cy="40" r="18" fill="${e}" ${D}/>${mg(43,57,40)}${yg(38,62,48)}<path d="M46 50 q4 3 8 0" fill="none" ${D}/>
    <path d="M38 26 Q50 16 62 26" fill="${n}" ${D}/><circle cx="50" cy="24" r="3" fill="${n}" ${D}/>`}const wg=[{kind:"crib",name:"Crib",cat:"furniture",w:260,svg:`${at}<rect x="8" y="28" width="84" height="58" rx="10" fill="#fff" ${D}/><path d="M8 42 H92 M20 28 V86 M36 28 V86 M50 28 V86 M64 28 V86 M80 28 V86" ${D}/><rect x="6" y="22" width="88" height="12" rx="6" fill="#9ad7f5" ${D}/><rect x="14" y="48" width="72" height="16" rx="6" fill="#ffe0ec"/><ellipse cx="32" cy="56" rx="8" ry="5" fill="#fff" ${D}/><ellipse cx="50" cy="56" rx="8" ry="5" fill="#c9e7ff" ${D}/>`},{kind:"bassinet",name:"Bassinet",cat:"furniture",w:170,svg:`${at}<path d="M18 78 Q8 78 10 64 L22 36 H78 L90 64 Q92 78 82 78 Z" fill="#fff" ${D}/><ellipse cx="50" cy="36" rx="32" ry="10" fill="#fff" ${D}/><path d="M22 40 Q50 52 78 40" fill="#ffe0ec" ${D}/><ellipse cx="50" cy="44" rx="16" ry="7" fill="#fff"/><path d="M30 78 L22 94 M70 78 L78 94" ${D}/><ellipse cx="50" cy="90" rx="28" ry="4" fill="none" ${D}/><path d="M14 22 Q50 4 86 22" fill="none" stroke="#9ad7f5" stroke-width="6" stroke-linecap="round"/>`},{kind:"rocker",name:"Rocker",cat:"furniture",w:190,svg:`${at}<path d="M16 88 Q50 98 84 88" fill="none" ${D}/><path d="M28 84 Q50 74 72 84" fill="#c9a0dc" ${D}/><rect x="30" y="28" width="40" height="36" rx="12" fill="#e4ccf2" ${D}/><path d="M22 48 Q18 70 30 80 H70 Q82 70 78 48 Z" fill="#f6e6ff" ${D}/><rect x="36" y="58" width="28" height="12" rx="6" fill="#ffc8dd" ${D}/><circle cx="50" cy="40" r="6" fill="#fff" opacity=".7"/>`},{kind:"changing-table",name:"Changing Table",cat:"furniture",w:230,svg:`${at}<rect x="8" y="36" width="84" height="16" rx="8" fill="#fff" ${D}/><rect x="14" y="40" width="72" height="8" rx="4" fill="#ffd6e8"/><rect x="16" y="52" width="28" height="32" rx="6" fill="#bde0fe" ${D}/><rect x="56" y="52" width="28" height="32" rx="6" fill="#c9f0d8" ${D}/><path d="M22 60 H38 M22 68 H38 M62 60 H78 M62 68 H78" ${D}/><rect x="18" y="84" width="8" height="10" rx="2" fill="${On}"/><rect x="74" y="84" width="8" height="10" rx="2" fill="${On}"/><rect x="34" y="22" width="18" height="12" rx="3" fill="#ffe0ec" ${D}/><rect x="54" y="24" width="16" height="10" rx="3" fill="#fff6d8" ${D}/>`},{kind:"toy-bin",name:"Toy Bin",cat:"furniture",w:150,svg:`${at}<path d="M14 40 H86 L78 90 H22 Z" fill="#ffd166" ${D}/><rect x="10" y="32" width="80" height="14" rx="7" fill="#ffe08a" ${D}/><circle cx="36" cy="58" r="8" fill="#ff8fab" ${D}/><rect x="50" y="50" width="16" height="16" rx="3" fill="#8ecae6" ${D}/><circle cx="62" cy="70" r="6" fill="#90e0a8" ${D}/>`},{kind:"baby-shelf",name:"Bookshelf",cat:"furniture",w:150,svg:`${at}<rect x="14" y="8" width="72" height="84" rx="8" fill="#f3d2b5" ${D}/><path d="M14 36 H86 M14 64 H86" ${D}/><rect x="22" y="14" width="8" height="18" rx="2" fill="#ff8fab" ${D}/><rect x="32" y="18" width="8" height="14" rx="2" fill="#8ecae6" ${D}/><rect x="44" y="14" width="8" height="18" rx="2" fill="#ffd166" ${D}/><rect x="58" y="16" width="8" height="16" rx="2" fill="#90e0a8" ${D}/><circle cx="34" cy="50" r="7" fill="#ffadad" ${D}/><rect x="50" y="44" width="18" height="14" rx="3" fill="#c9a0dc" ${D}/><ellipse cx="40" cy="78" rx="14" ry="8" fill="#fff" ${D}/>`},{kind:"doll-rose",name:"Rose Doll",cat:"decor",w:80,svg:xc("#f6d3b0","#ffc2d4","#ff8fab")},{kind:"doll-honey",name:"Honey Doll",cat:"decor",w:80,svg:xc("#e0ac69","#cdeffd","#ffd166")},{kind:"doll-cocoa",name:"Cocoa Doll",cat:"decor",w:80,svg:xc("#8d5524","#d8f3dc","#c9a0dc")},{kind:"crib-mobile",name:"Crib Mobile",cat:"decor",w:150,wall:!0,svg:`<path d="M50 6 V22" ${D}/><ellipse cx="50" cy="28" rx="28" ry="8" fill="#fff" ${D}/><path d="M28 32 V48 M50 36 V58 M72 32 V48" ${D}/><circle cx="28" cy="56" r="8" fill="#ffd166" ${D}/><circle cx="50" cy="68" r="9" fill="#ff8fab" ${D}/><path d="M72 56 l6 4 -6 4 -6 -4 z" fill="#8ecae6" ${D}/><circle cx="28" cy="54" r="2" fill="#fff"/><circle cx="50" cy="66" r="2" fill="#fff"/>`},{kind:"night-light",name:"Night Light",cat:"decor",w:70,svg:`${at}<circle cx="50" cy="46" r="22" fill="#fff6c8" ${D}/><circle cx="50" cy="46" r="12" fill="#ffe08a"/><path d="M50 18 V10 M30 26 L24 20 M70 26 L76 20 M24 46 H14 M86 46 H76" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/><rect x="40" y="70" width="20" height="16" rx="4" fill="#c9a0dc" ${D}/><circle cx="50" cy="78" r="3" fill="#ff8fab"/>`},{kind:"bunny-plush",name:"Bunny Plush",cat:"decor",w:90,svg:`${at}<ellipse cx="34" cy="28" rx="8" ry="18" fill="#fff" ${D}/><ellipse cx="66" cy="28" rx="8" ry="18" fill="#fff" ${D}/><ellipse cx="34" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="66" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="50" cy="74" rx="26" ry="18" fill="#fff" ${D}/><circle cx="50" cy="50" r="20" fill="#fff" ${D}/>${mg(43,57,50)}<path d="M47 58 l3 3 3 -3" fill="none" ${D}/>${yg(38,62,58)}`},{kind:"stacking-rings",name:"Stacking Rings",cat:"decor",w:70,svg:`${at}<ellipse cx="50" cy="86" rx="26" ry="7" fill="#ff8fab" ${D}/><ellipse cx="50" cy="74" rx="20" ry="6" fill="#ffd166" ${D}/><ellipse cx="50" cy="64" rx="15" ry="5" fill="#8ecae6" ${D}/><ellipse cx="50" cy="56" rx="10" ry="4" fill="#90e0a8" ${D}/><rect x="46" y="28" width="8" height="40" rx="4" fill="#c9a0dc" ${D}/><circle cx="50" cy="24" r="7" fill="#ffb3c6" ${D}/>`},{kind:"rattle",name:"Rattle",cat:"decor",w:60,svg:`${at}<circle cx="38" cy="40" r="20" fill="#ffd166" ${D}/><circle cx="32" cy="34" r="5" fill="#fff" opacity=".7"/><rect x="50" y="52" width="10" height="28" rx="5" fill="#ff8fab" ${D} transform="rotate(-20 55 66)"/><circle cx="68" cy="82" r="8" fill="#8ecae6" ${D}/>`},{kind:"baby-bottle",name:"Baby Bottle",cat:"food",w:55,svg:`${at}<rect x="36" y="8" width="28" height="12" rx="4" fill="#c9a0dc" ${D}/><rect x="42" y="18" width="16" height="8" fill="#fff" ${D}/><path d="M30 30 H70 L66 88 Q50 96 34 88 Z" fill="#e7f6ff" ${D}/><path d="M32 48 H68 L66 80 Q50 88 34 80 Z" fill="#fff" opacity=".85"/><rect x="34" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="46" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="58" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/>`},{kind:"blocks",name:"Baby Blocks",cat:"decor",w:90,svg:`${at}<rect x="14" y="58" width="28" height="28" rx="4" fill="#ff8fab" ${D}/><rect x="40" y="46" width="28" height="28" rx="4" fill="#ffd166" ${D}/><rect x="28" y="28" width="26" height="26" rx="4" fill="#8ecae6" ${D}/><path d="M20 72 H36 M48 60 H62 M34 42 H48" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"rocking-horse",name:"Little Rocking Horse",cat:"decor",w:180,svg:`${at}<path d="M12 86 Q50 98 88 82" fill="none" ${D}/><ellipse cx="48" cy="62" rx="26" ry="14" fill="#e6b88a" ${D}/><path d="M62 58 L84 40 Q92 36 90 48 L74 64 Z" fill="#f0d0b0" ${D}/><circle cx="82" cy="42" r="3" fill="${On}"/><path d="M70 36 L76 24 L84 34" fill="#ff8fab" ${D}/><rect x="36" y="48" width="16" height="8" rx="3" fill="#c9a0dc" ${D}/><path d="M30 70 L22 84 M58 72 L66 86" ${D}/>`},{kind:"music-box",name:"Music Box",cat:"decor",w:80,svg:`${at}<rect x="22" y="40" width="56" height="46" rx="8" fill="#f6d6ff" ${D}/><path d="M22 40 L50 22 L78 40" fill="#e4ccf2" ${D}/><circle cx="50" cy="64" r="10" fill="#fff" ${D}/><path d="M50 58 V70 M44 64 H56" ${D}/><circle cx="50" cy="30" r="4" fill="#ffd166" ${D}/>`},{kind:"cloud-rug",name:"Nursery Cloud Rug",cat:"decor",w:340,svg:`<ellipse cx="50" cy="78" rx="46" ry="16" fill="#e7f6ff" ${D}/><circle cx="28" cy="70" r="16" fill="#f4fbff" ${D}/><circle cx="50" cy="62" r="18" fill="#fff" ${D}/><circle cx="72" cy="70" r="16" fill="#f4fbff" ${D}/><ellipse cx="50" cy="78" rx="30" ry="8" fill="#d6f0ff"/>`},{kind:"play-mat",name:"Play Mat",cat:"decor",w:300,svg:`<rect x="6" y="62" width="88" height="30" rx="14" fill="#ffe0ec" ${D}/><path d="M50 70 C42 62 30 64 34 74 C38 82 50 88 50 88 C50 88 62 82 66 74 C70 64 58 62 50 70 Z" fill="#ff8fab" ${D}/><circle cx="22" cy="76" r="5" fill="#ffd166" ${D}/><circle cx="78" cy="76" r="5" fill="#8ecae6" ${D}/>`},{kind:"moon-art",name:"Moon and Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M58 18 A28 28 0 1 0 58 78 A18 18 0 1 1 58 18 Z" fill="#fff3b0" ${D}/><path d="M22 30 l3 7 7 1 -5 5 1 7 -6 -4 -6 4 1 -7 -5 -5 7 -1 z" fill="#ffd166" ${D}/><path d="M78 58 l2 5 5 1 -4 4 1 5 -4 -3 -4 3 1 -5 -4 -4 5 -1 z" fill="#c9e7ff" ${D}/>`},{kind:"nursery-dresser",name:"Nursery Dresser",cat:"furniture",w:170,svg:`${at}<rect x="14" y="22" width="72" height="68" rx="8" fill="#f6e2c4" ${D}/><path d="M14 44 H86 M14 66 H86" ${D}/><circle cx="50" cy="34" r="3" fill="${On}"/><circle cx="50" cy="55" r="3" fill="${On}"/><circle cx="50" cy="76" r="3" fill="${On}"/><rect x="30" y="10" width="18" height="12" rx="3" fill="#ffc2d4" ${D}/><rect x="52" y="12" width="16" height="10" rx="3" fill="#c9e7ff" ${D}/>`},{kind:"nursery-lamp",name:"Nursery Lamp",cat:"decor",w:80,svg:`${at}<path d="M28 42 L36 12 H64 L72 42 Z" fill="#fff6c8" ${D}/><rect x="46" y="42" width="8" height="40" rx="4" fill="#c9a0dc" ${D}/><ellipse cx="50" cy="88" rx="20" ry="6" fill="#b388d6" ${D}/><circle cx="46" cy="24" r="3" fill="#fff" opacity=".85"/><path d="M34 20 q6 -8 4 -2" fill="none" stroke="#ffd166" stroke-width="2"/>`},{kind:"nursery-curtains",name:"Curtains",cat:"decor",w:180,wall:!0,svg:`<rect x="16" y="10" width="68" height="50" rx="6" fill="#cfefff" ${D}/><path d="M50 10 V60 M16 34 H84" ${D}/><path d="M8 8 Q18 28 10 92" fill="#ffd6e8" ${D}/><path d="M92 8 Q82 28 90 92" fill="#ffd6e8" ${D}/><rect x="6" y="6" width="88" height="8" rx="3" fill="#f3d2b5" ${D}/>`}],ct="#5a3d5c",x=(e=3.5)=>`stroke="${ct}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function xe(e,t,n){const s=Math.round(t*.62);return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="3.4" fill="${ct}" opacity=".08"/><ellipse cx="${e}" cy="${(n+1.2).toFixed(1)}" rx="${s}" ry="1.55" fill="${ct}" opacity=".12"/>`}function re(e,t=2.2){return`<path d="${e}" fill="none" stroke="#fff" stroke-width="${t}" stroke-linecap="round" opacity=".75"/>`}function pt(e,t=1.15){return`<path d="${e}" fill="none" stroke="${ct}" stroke-width="${t}" stroke-linecap="round" opacity=".2"/>`}function zf(e,t,n=".7"){return`<radialGradient id="${e}" cx="40%" cy="40%" r="60%"><stop offset="0" stop-color="${t}" stop-opacity="${n}"/><stop offset="1" stop-color="${t}" stop-opacity="0"/></radialGradient>`}function Df(e,t,n){return`<linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${n}"/></linearGradient>`}function Vx(){return typeof location>"u"?!1:/(?:^|[?&])yard=1(?:&|$)/.test(location.search)}function _d(){return typeof location>"u"?"":new URLSearchParams(location.search).get("shot")||""}const Ux={v:1,hair:"pigtails",hairC:"#a0522d",skin:"#f6d2b5",eyes:"big",eyeC:"#5a321c",freckles:!0,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"skirt",bottomC:"#c9a0dc",dress:"sundress",dressC:"#ff8fab",shoes:"maryjanes",shoesC:"#ffd166",acc:["bow"],accC:"#ff7aa8"},Qx=()=>ia(Ux),$d=864,xd={x:1084,y:578,flip:!0},ws={x:1184,y:255},Ch={x:1146,y:578},Md={x:940,y:540,flip:!0},jr=1160,bg={x:824,y:398,w:96,h:230},vg={x:996,y:372,w:82,h:196},Nx=[{kind:"yard-swing",x:1266,y:580,scale:132/280},{kind:"lemonade-cart",x:1254,y:471},{kind:"sandbox",x:940,y:482},{kind:"picnic-blanket",x:939,y:420}];function Me(e){return{kind:e.kind,name:e.name,cat:e.cat,w:e.w,h:e.h,vb:e.vb,wall:e.wall,holdable:e.holdable??!1,rooms:["backyard"],svg:e.svg}}const qx=Me({kind:"yard-swing",name:"A-Frame Swing",cat:"furniture",w:280,h:215,vb:"0 0 130 100",svg:`${xe(65,54,96)}
    <path d="M34 18 L50 18 L20 94 H4 Z" fill="#f3d2aa" ${x()}/>
    <path d="M42 24 L50 18 L18 70 H28 Z" fill="#d4a373"/>
    <path d="M80 18 L96 18 L126 94 H110 Z" fill="#e7c49a" ${x()}/>
    <path d="M108 22 L96 18 L126 94 H118 Z" fill="#c99366"/>
    ${pt("M16 50 l8 28 M112 48 l8 30")}
    <rect x="22" y="6" width="86" height="14" rx="2" fill="#f6e0c4" ${x()}/>
    <rect x="86" y="9" width="18" height="8" rx="1" fill="#d4a373"/>
    <rect x="28" y="16" width="74" height="4" fill="#e7c49a"/>
    ${re("M28 10 h30")}
    <g class="swingSeat">
      <rect x="48" y="74" width="34" height="7" rx="1" fill="#f3d2aa" ${x(2.2)}/>
      <rect x="72" y="76" width="8" height="4" fill="#d4a373"/>
      <path d="M54 20 V78 M76 20 V78" fill="none" ${x(2.2)}/>
      ${re("M52 76 h14")}
    </g>`}),Fx=Me({kind:"sandbox",name:"Sandbox",cat:"furniture",w:120,h:54,vb:"0 0 160 72",svg:`${xe(80,64,68)}
    <path d="M108 38 L146 26 L146 52 L108 64 Z" fill="#e7c49a" ${x()}/>
    <path d="M126 36 L142 28 L142 48 L126 56 Z" fill="#c99366"/>
    <path d="M12 40 H108 V64 H12 Z" fill="#f3d2aa" ${x()}/>
    <path d="M12 40 L36 18 L146 18 L108 40 Z" fill="#f6e0c4" ${x()}/>
    <path d="M112 20 L142 20 L108 38 L90 38 Z" fill="#d4a373"/>
    <path d="M34 36 L52 24 L122 24 L100 36 Z" fill="#ffe08a" ${x(2.2)}/>
    <path d="M98 26 L118 26 L100 34 L86 34 Z" fill="#f0c36a"/>
    ${pt("M48 30 q8 2 6 5 M68 28 q10 2 8 6 M58 34 h16")}
    <path d="M76 30 L100 36 L94 48 L70 42 Z" fill="#d7e6f2" ${x(2.2)}/>
    <path d="M88 34 L98 38 L94 44 L84 40 Z" fill="#b7c9d6"/>
    <path d="M52 8 L64 4 L90 34 L78 38 Z" fill="#f0d2b0" ${x()}/>
    <path d="M64 8 L72 6 L90 32 L82 34 Z" fill="#d4a373"/>
    <path d="M46 2 H66 V9 H46 Z" fill="#c99366" ${x(2)}/>
    ${re("M18 44 h26")}
    ${re("M44 22 h22")}`}),jx=Me({kind:"little-slide",name:"Little Slide",cat:"furniture",w:150,h:188,vb:"0 0 110 140",svg:`${xe(56,44,134)}
    <path d="M50 34 H72 C94 36 102 56 98 82 L92 122 H70 L76 84 C78 60 72 46 52 44 Z" fill="#ffb3c6" ${x()}/>
    <path d="M72 38 C94 42 104 62 100 86 L94 122 H86 L92 86 C94 64 86 48 72 46 Z" fill="#e45d88"/>
    <rect x="14" y="34" width="8" height="96" rx="2" fill="#f3d2aa" ${x()}/>
    <rect x="36" y="34" width="8" height="96" rx="2" fill="#e7c49a" ${x()}/>
    <rect x="40" y="40" width="3" height="84" fill="#c99366"/>
    <rect x="14" y="52" width="30" height="5" rx="1" fill="#f6e0c4" ${x(2.2)}/>
    <rect x="14" y="70" width="30" height="5" rx="1" fill="#f6e0c4" ${x(2.2)}/>
    <rect x="14" y="88" width="30" height="5" rx="1" fill="#f6e0c4" ${x(2.2)}/>
    <rect x="14" y="106" width="30" height="5" rx="1" fill="#f6e0c4" ${x(2.2)}/>
    <rect x="6" y="18" width="56" height="22" rx="3" fill="#f3d2aa" ${x()}/>
    <rect x="6" y="34" width="56" height="6" fill="#d4a373"/>
    <path d="M48 20 H62 V40 H48 Z" fill="#c99366"/>
    ${re("M12 24 h22")}
    <rect x="12" y="6" width="5" height="16" rx="1" fill="#f0d2b0" ${x(2.2)}/>
    <rect x="40" y="6" width="5" height="16" rx="1" fill="#e7c49a" ${x(2.2)}/>
    <path d="M14 8 H43" fill="none" ${x(2.2)}/>
    <rect x="80" y="116" width="7" height="16" rx="1" fill="#f3d2aa" ${x(2)}/>
    ${re("M58 42 C74 48 86 66 86 88")}
    ${pt("M80 64 q4 16 2 28")}`}),Zx=Me({kind:"yard-bench",name:"Garden Bench",cat:"furniture",w:140,h:100,vb:"0 0 140 100",svg:`${xe(70,58,96)}
    <rect x="10" y="8" width="12" height="86" rx="2" fill="#f3d2aa" ${x()}/>
    <rect x="118" y="8" width="12" height="86" rx="2" fill="#e7c49a" ${x()}/>
    <rect x="124" y="12" width="5" height="76" fill="#c99366"/>
    <rect x="28" y="52" width="10" height="42" rx="2" fill="#f0d2b0" ${x()}/>
    <rect x="102" y="52" width="10" height="42" rx="2" fill="#d4a373" ${x()}/>
    <rect x="108" y="56" width="3" height="32" fill="#c99366"/>
    <rect x="18" y="10" width="104" height="8" rx="1" fill="#f6e0c4" ${x(2.2)}/>
    <rect x="18" y="20" width="104" height="8" rx="1" fill="#f3d2aa" ${x(2.2)}/>
    <rect x="18" y="30" width="104" height="8" rx="1" fill="#f3d2aa" ${x(2.2)}/>
    <rect x="18" y="40" width="104" height="8" rx="1" fill="#e7c49a" ${x(2.2)}/>
    <rect x="18" y="48" width="104" height="7" rx="1" fill="#f6e0c4" ${x(2.2)}/>
    <rect x="18" y="57" width="104" height="7" rx="1" fill="#f3d2aa" ${x(2.2)}/>
    <rect x="18" y="66" width="104" height="7" rx="1" fill="#e7c49a" ${x(2.2)}/>
    <rect x="108" y="12" width="10" height="5" fill="#d4a373"/>
    <rect x="108" y="22" width="10" height="5" fill="#c99366"/>
    <rect x="108" y="50" width="10" height="4" fill="#d4a373"/>
    <rect x="108" y="68" width="10" height="4" fill="#c99366"/>
    <path d="M10 46 H40 V56 H10 Z" fill="#f6e0c4" ${x()}/>
    <path d="M100 46 H130 V56 H100 Z" fill="#e7c49a" ${x()}/>
    <path d="M116 48 H128 V54 H116 Z" fill="#c99366"/>
    ${re("M22 13 h28")}
    ${re("M14 48 h16")}
    ${pt("M36 24 h48 M36 34 h44 M34 52 h52 M34 62 h46")}`}),Gx=Me({kind:"lemonade-cart",name:"Lemonade Cart",cat:"furniture",w:108,h:121,vb:"0 0 100 112",svg:`${xe(50,40,106)}
    <circle cx="30" cy="96" r="11" fill="${ct}" ${x(2.2)}/><circle cx="30" cy="96" r="4.5" fill="#ffd166"/>
    <circle cx="72" cy="96" r="11" fill="${ct}" ${x(2.2)}/><circle cx="72" cy="96" r="4.5" fill="#ffd166"/>
    <rect x="18" y="92" width="66" height="5" rx="2" fill="#c99366" ${x(2)}/>
    <rect x="16" y="46" width="68" height="46" rx="3" fill="#fff6ea" ${x()}/>
    <rect x="66" y="50" width="14" height="38" fill="#f0d2a4"/>
    ${pt("M28 56 v28 M42 56 v28 M56 56 v28")}
    ${re("M20 52 v16")}
    <rect x="12" y="38" width="76" height="12" rx="2" fill="#ffe08a" ${x()}/>
    <rect x="66" y="40" width="18" height="8" fill="#f0c45c"/>
    <path d="M14 40 L22 14 H80 L88 40 Z" fill="#ff8fab" ${x()}/>
    <path d="M34 16 L38 40 H50 L46 15 Z" fill="#fff4f7"/>
    <path d="M58 15 L62 40 H74 L70 15 Z" fill="#fff4f7"/>
    <path d="M72 16 H80 L88 40 H76 Z" fill="#e45d88"/>
    ${re("M26 20 h18")}
    <path d="M28 52 H44 L42 72 H30 Z" fill="#fff" ${x(2)}/>
    <path d="M30 58 H42 L41 72 H31 Z" fill="#ffe566"/>
    <path d="M28 54 L22 58 L28 62 Z" fill="#fff" ${x(2)}/>
    <path d="M44 56 Q52 60 44 70" fill="none" ${x(2)}/>
    <path d="M56 60 H68 L66 72 H58 Z" fill="#fff" ${x(2)}/>
    <path d="M58 64 H66 L65 72 H59 Z" fill="#ffe566"/>
    <circle cx="78" cy="64" r="7" fill="#ffe566" ${x(2)}/>
    <path d="M78 58 v12 M72 64 h12" fill="none" stroke="#e0a83a" stroke-width="1.3"/>`}),Yx=Me({kind:"sun-lounger",name:"Sun Lounger",cat:"furniture",w:168,h:86,vb:"0 0 170 90",svg:`${xe(86,68,84)}
    <path d="M16 66 H28 L32 82 H12 Z" fill="#f3d2aa" ${x()}/>
    <path d="M126 64 H140 L146 82 H120 Z" fill="#d4a373" ${x()}/>
    <path d="M136 68 H142 L146 80 H138 Z" fill="#c99366"/>
    <path d="M12 52 H156 V64 H12 Z" fill="#f3d2aa" ${x()}/>
    <path d="M122 54 H154 V62 H122 Z" fill="#d4a373"/>
    <path d="M28 34 H36 L42 52 H32 Z" fill="#e7c49a" ${x()}/>
    <path d="M50 44 H150 L154 58 H54 Z" fill="#ffd4e2" ${x()}/>
    <path d="M128 48 H150 L154 58 H132 Z" fill="#e888a8"/>
    <path d="M18 6 L60 48 L48 58 L8 16 Z" fill="#ffb3c6" ${x()}/>
    <path d="M38 34 L54 48 L48 56 L30 42 Z" fill="#e45d88"/>
    <ellipse cx="22" cy="14" rx="11" ry="7" fill="#fff" ${x(2.2)}/>
    <path d="M22 8 H30 A7 7 0 0 1 30 20 H22 Z" fill="#ffd0e0"/>
    ${re("M22 12 L50 40")}
    ${pt("M26 22 L52 46")}`}),Kx=Me({kind:"splash-pool",name:"Splash Pool",cat:"furniture",w:176,h:96,vb:"0 0 170 96",svg:`<defs>${Df("ydpoolW","#f3fbff","#7ec8e3")}</defs>
    ${xe(85,72,90)}
    <ellipse cx="85" cy="58" rx="74" ry="28" fill="#8ecae6" ${x()}/>
    <path d="M22 52 Q40 34 78 40" fill="none" stroke="#ff8fab" stroke-width="16" stroke-linecap="round"/>
    <path d="M100 36 Q138 38 152 58" fill="none" stroke="#ffd166" stroke-width="14" stroke-linecap="round"/>
    <path d="M18 66 C22 82 50 90 85 90 C120 90 152 82 154 66 C148 78 120 84 85 84 C50 84 24 78 18 66 Z" fill="#5aa9c6"/>
    <ellipse cx="85" cy="54" rx="48" ry="16" fill="url(#ydpoolW)" ${x(2.2)}/>
    ${re("M36 50 q20 -10 36 0")}
    <circle cx="128" cy="48" r="4" fill="#fff" ${x(1.6)}/>
    <circle cx="128" cy="48" r="1.6" fill="#8ecae6"/>
    <path d="M70 46 q3 -8 1 0 M96 42 q4 -9 1 1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`}),Xx=Me({kind:"picket-gate",name:"Picket Gate",cat:"furniture",w:110,h:150,vb:"0 0 100 136",svg:`${xe(50,38,130)}
    <rect x="6" y="16" width="12" height="110" rx="2" fill="#f7fff8" ${x()}/>
    <rect x="82" y="16" width="12" height="110" rx="2" fill="#e7f6ea" ${x()}/>
    <rect x="88" y="20" width="5" height="100" fill="#c5e0c8"/>
    <rect x="4" y="40" width="16" height="6" rx="1" fill="#c99366" ${x(2)}/>
    <rect x="4" y="96" width="16" height="6" rx="1" fill="#c99366" ${x(2)}/>
    <rect x="16" y="38" width="68" height="8" rx="2" fill="#fff" ${x(2.2)}/>
    <rect x="16" y="86" width="68" height="8" rx="2" fill="#fff" ${x(2.2)}/>
    <path d="M20 90 L28 98 L80 46 L72 38 Z" fill="#f7fff8" ${x(2.2)}/>
    <path d="M26 30 L32 14 L38 30 V112 H26 Z" fill="#fff" ${x(2.2)}/>
    <path d="M44 30 L50 14 L56 30 V112 H44 Z" fill="#f7fff8" ${x(2.2)}/>
    <path d="M62 30 L68 14 L74 30 V112 H62 Z" fill="#e7f6ea" ${x(2.2)}/>
    <path d="M68 22 L74 16 L74 108 H68 Z" fill="#c5e0c8"/>
    ${re("M28 36 v20")}
    <rect x="74" y="60" width="16" height="5" rx="1" fill="#c99366" ${x(2)}/>
    <circle cx="86" cy="62" r="2.6" fill="#ffd166" ${x(1.8)}/>`});function Jx(){let e="";for(let t=0;t<6;t++)for(let n=0;n<13;n++)(t+n)%2===0&&(e+=`<rect x="${n*15-6}" y="${t*10}" width="15" height="10" fill="#ff8fab"/>`);return e}const e5=Me({kind:"picnic-blanket",name:"Picnic Blanket",cat:"decor",w:110,h:36,vb:"0 0 180 59",svg:`<defs><clipPath id="ydging"><path d="M22 20 L156 12 L174 44 L36 52 Z"/></clipPath></defs>
    ${xe(96,74,54)}
    <path d="M22 20 L156 12 L174 44 L36 52 Z" fill="#fff0f5" ${x()}/>
    <g clip-path="url(#ydging)">${Jx()}</g>
    <path d="M148 14 L170 42 L160 46 L138 18 Z" fill="#e45d88"/>
    <path d="M96 30 L128 26 L134 42 L100 46 Z" fill="#f3d2aa" ${x(2)}/>
    <path d="M120 28 L128 26 L134 42 L126 43 Z" fill="#c99366"/>
    <path d="M104 30 Q114 14 126 28" fill="none" ${x(2.2)}/>
    ${pt("M104 34 h22 M104 38 h24",1)}
    ${re("M34 26 l28 -3")}`});function bi(e,t,n,s){return`<path d="M${e-1.5} ${t+16} H${e+1.5} V${t+40} H${e-1.5} Z" fill="#3d9a68"/>
    <path d="M${e} ${t+24} C${e-16} ${t+18} ${e-14} ${t+36} ${e-1} ${t+34}" fill="#74c69d" ${x(1.6)}/>
    <path d="M${e} ${t+22} C${e+16} ${t+16} ${e+12} ${t+36} ${e+1} ${t+32}" fill="#52b788"/>
    <path d="M${e} ${t+18} C${e-10} ${t+8} ${e-8} ${t} ${e} ${t+6} C${e+8} ${t} ${e+10} ${t+8} ${e} ${t+18} Z" fill="${n}" ${x(1.8)}/>
    <path d="M${e+1} ${t+6} C${e+7} ${t+4} ${e+8} ${t+13} ${e+1} ${t+15} Z" fill="${s}"/>`}const t5=Me({kind:"tulip-bed",name:"Tulip Bed",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`${xe(70,56,86)}
    <path d="M10 56 H130 L120 82 H20 Z" fill="#f0d2b0" ${x()}/>
    <path d="M96 58 H126 L118 78 H92 Z" fill="#d4a373"/>
    <path d="M16 56 Q70 42 124 56 Q70 64 16 56 Z" fill="#c4a484" ${x(2.2)}/>
    ${re("M22 60 h24")}
    ${bi(32,16,"#ff8fab","#e45d88")}
    ${bi(54,8,"#ffd166","#e0a83a")}
    ${bi(76,4,"#ff7096","#e04578")}
    ${bi(98,12,"#fff","#ffd0e0")}
    ${bi(118,18,"#c9a0dc","#b388d6")}`}),n5=Me({kind:"birdbath",name:"Birdbath",cat:"decor",w:84,h:126,vb:"0 0 80 120",svg:`<defs>${Df("ydbathW","#f3fbff","#8ecae6")}</defs>
    ${xe(40,28,114)}
    <ellipse cx="40" cy="106" rx="20" ry="7" fill="#e7eef2" ${x()}/>
    <path d="M30 46 H50 C56 70 58 86 52 104 H28 C22 86 24 70 30 46 Z" fill="#f4f7f8" ${x()}/>
    <path d="M42 52 H50 C54 72 54 88 50 100 H44 Z" fill="#c5d0d6"/>
    ${re("M33 62 v22")}
    <ellipse cx="40" cy="40" rx="32" ry="13" fill="#f7fafb" ${x()}/>
    <path d="M40 28 C66 28 72 38 72 42 C72 52 58 54 40 54 C60 54 68 48 68 42 C68 36 58 32 40 34 Z" fill="#d5dee4"/>
    <ellipse cx="40" cy="38" rx="22" ry="7" fill="url(#ydbathW)" ${x(2.2)}/>
    ${re("M22 36 q10 -4 18 0")}
    <path d="M48 30 L40 24 L42 34 Z" fill="#f0c45c" ${x(1.6)}/>
    <ellipse cx="56" cy="28" rx="11" ry="6" fill="#ffd166" ${x(1.8)}/>
    <circle cx="66" cy="24" r="4.5" fill="#ffe08a" ${x(1.6)}/>
    <path d="M70 24 L77 26 L70 28 Z" fill="#e07a3f"/>
    <circle cx="67" cy="23" r="1" fill="${ct}"/>
    <path d="M54 32 V40 M60 32 V40" fill="none" stroke="#c99366" stroke-width="1.4" stroke-linecap="round"/>`}),s5=Me({kind:"lily-pond",name:"Lily Pond",cat:"decor",w:170,h:90,vb:"0 0 170 90",svg:`<defs>${Df("ydpondW","#eaf6ff","#5aa9e6")}</defs>
    ${xe(85,70,84)}
    <ellipse cx="85" cy="54" rx="74" ry="28" fill="#c4a484" ${x()}/>
    <path d="M85 30 C142 32 158 48 158 56 C158 72 126 82 85 82 C124 80 150 68 150 56 C150 44 126 36 85 36 Z" fill="#a88462"/>
    <ellipse cx="85" cy="52" rx="62" ry="20" fill="url(#ydpondW)" ${x(2.2)}/>
    ${re("M40 46 q24 -8 42 2")}
    <path fill="#95d5b2" ${x(2)} fill-rule="evenodd" d="M58 54 m-16 0 a16 7 0 1 0 32 0 a16 7 0 1 0 -32 0 M58 50 L72 54 L58 58 Z"/>
    <path d="M66 50 L74 54 L66 56 Z" fill="#3d9a68"/>
    <path fill="#74c69d" ${x(2)} fill-rule="evenodd" d="M112 48 m-18 0 a18 8 0 1 0 36 0 a18 8 0 1 0 -36 0 M112 42 L128 48 L112 54 Z"/>
    <path d="M40 58 q-4 -16 2 -22 q6 8 2 16" fill="#52b788" ${x(1.6)}/>
    <path d="M108 40 l2 -8 l4 6 l4 -7 l2 8 l-4 3 z" fill="#ff8fab" ${x(1.6)}/>
    <path d="M112 36 l3 -6 l2 5 l3 -5 l1 6 z" fill="#fff" ${x(1.4)}/>
    <circle cx="112" cy="40" r="2.4" fill="#ffd166"/>`});function vi(e,t,n,s,o=10){return`<path d="M${e} ${t-o-8} V${t-o}" fill="none" ${x(2.2)}/>
    <rect x="${e-4}" y="${t-o-2}" width="8" height="5" rx="1" fill="#c99366" ${x(1.8)}/>
    <circle cx="${e}" cy="${t}" r="${o}" fill="${n}" ${x()}/>
    <path d="M${e+1} ${t-o+3} H${e+o-1} V${t+o-3} H${e+2} Z" fill="${s}"/>
    ${re(`M${e-o+3} ${t-2} q2 -3 4 0`)}`}const o5=Me({kind:"patio-lights",name:"Patio Lights",cat:"decor",w:190,h:70,vb:"0 0 180 70",wall:!0,svg:`<path d="M8 12 Q50 32 90 12 Q130 32 172 14" fill="none" ${x()}/>
    ${vi(28,40,"#fff6c8","#f0c45c")}
    ${vi(64,46,"#ffc2d4","#e45d88")}
    ${vi(100,36,"#fff1c2","#f0c45c")}
    ${vi(136,46,"#c9f1ff","#7eb4dc")}
    ${vi(164,34,"#ffd0e8","#e888a8",8)}`}),i5=Me({kind:"toadstool-light",name:"Toadstool Light",cat:"decor",w:70,h:84,vb:"0 0 80 96",svg:`<defs>${zf("ydtoadG","#ffe7a0",".9")}</defs>
    ${xe(40,26,90)}
    <ellipse cx="40" cy="70" rx="18" ry="8" fill="url(#ydtoadG)"/>
    <path d="M32 58 H48 L52 84 H28 Z" fill="#fff7f8" ${x()}/>
    <path d="M42 60 H48 L50 82 H43 Z" fill="#f0d8cc"/>
    <path d="M6 58 Q40 8 74 58 Q40 74 6 58 Z" fill="#ff8fab" ${x()}/>
    <path d="M44 22 Q66 16 72 54 Q52 66 44 52 Z" fill="#e45d88"/>
    ${re("M18 48 q16 -12 26 -2")}
    <circle cx="26" cy="48" r="5" fill="#fff" ${x(2)}/>
    <circle cx="44" cy="40" r="6" fill="#fff" ${x(2)}/>
    <circle cx="36" cy="56" r="3.5" fill="#fff" ${x(2)}/>
    <path d="M22 52 h6 M40 46 h8" fill="none" stroke="#ffd0e0" stroke-width="1.2" stroke-linecap="round"/>`}),a5=Me({kind:"stepping-stones",name:"Stepping Stones",cat:"decor",w:160,h:64,vb:"0 0 160 70",svg:`${xe(80,66,64)}
    <path d="M8 40 L24 28 L50 32 L54 50 L30 58 L10 52 Z" fill="#f7f4ef" ${x()}/>
    <path d="M34 36 L50 32 L54 50 L36 54 Z" fill="#d9d3cc"/>
    <path d="M56 44 L78 32 L108 36 L112 56 L80 64 L58 58 Z" fill="#f4f1ec" ${x()}/>
    <path d="M86 40 L108 36 L112 56 L90 58 Z" fill="#d4cdc4"/>
    <path d="M110 30 L128 20 L154 28 L150 48 L124 52 L108 42 Z" fill="#e7e2dc" ${x()}/>
    <path d="M132 26 L152 28 L148 46 L130 44 Z" fill="#d0c9c2"/>
    ${re("M16 38 q8 -4 14 0")}
    ${pt("M22 44 h12 M72 48 h16 M124 36 h12")}`}),r5=Me({kind:"pinwheel",name:"Pinwheel",cat:"decor",w:56,h:90,vb:"0 0 70 100",holdable:!0,svg:`${xe(35,16,96)}
    <rect x="31" y="44" width="6" height="50" rx="2" fill="#c99366" ${x()}/>
    <rect x="34" y="48" width="3" height="42" fill="#c99366"/>
    <path d="M34 40 L34 8 Q54 16 48 36 Z" fill="#ff8fab" ${x(2.2)}/>
    <path d="M42 18 Q50 28 36 34 Z" fill="#e45d88"/>
    <path d="M34 40 L62 32 Q58 54 40 50 Z" fill="#ffd166" ${x(2.2)}/>
    <path d="M54 38 Q58 48 42 46 Z" fill="#e0a83a"/>
    <path d="M34 40 L34 72 Q14 64 20 44 Z" fill="#8ecae6" ${x(2.2)}/>
    <path d="M26 58 Q16 50 32 46 Z" fill="#5aa9d6"/>
    <path d="M34 40 L6 48 Q12 26 28 30 Z" fill="#c9a0dc" ${x(2.2)}/>
    <path d="M16 36 Q14 28 28 34 Z" fill="#b388d6"/>
    <circle cx="34" cy="40" r="5" fill="#fff" ${x(2.2)}/>
    <circle cx="34" cy="40" r="1.8" fill="${ct}"/>`}),l5=Me({kind:"rain-barrel",name:"Rain Barrel",cat:"decor",w:86,h:108,vb:"0 0 80 110",svg:`${xe(40,30,104)}
    <path d="M22 30 C12 48 12 78 22 98 H58 C68 78 68 48 58 30 Z" fill="#8ecae6" ${x()}/>
    <path d="M46 34 C58 48 60 76 54 96 H58 C66 76 66 50 56 32 Z" fill="#5aa9c6"/>
    ${pt("M28 40 v48 M36 36 v54 M44 38 v50")}
    ${re("M24 42 v24")}
    <ellipse cx="40" cy="30" rx="20" ry="8" fill="#bde0fe" ${x()}/>
    <ellipse cx="46" cy="30" rx="10" ry="5" fill="#7eb4dc"/>
    <path d="M16 48 H64" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <path d="M14 74 H66" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <rect x="56" y="78" width="14" height="7" rx="2" fill="#d7ecff" ${x(2)}/>
    <path d="M70 81 h6" fill="none" ${x(2)}/>
    <path d="M34 18 q6 -8 12 0" fill="none" stroke="#7eb4dc" stroke-width="2.2" stroke-linecap="round"/>`}),c5=Me({kind:"butterfly-bush",name:"Butterfly Bush",cat:"plants",w:120,h:130,vb:"0 0 100 120",svg:`${xe(50,40,114)}
    <ellipse cx="32" cy="86" rx="22" ry="18" fill="#95d5b2" ${x(2.2)}/>
    <ellipse cx="70" cy="84" rx="24" ry="20" fill="#3d9a68" ${x(2.2)}/>
    <ellipse cx="50" cy="78" rx="36" ry="28" fill="#74c69d" ${x()}/>
    <path d="M18 90 Q50 108 84 88 Q68 100 50 102 Q30 100 18 90 Z" fill="#3d9a68"/>
    ${re("M24 68 q14 -8 26 2")}
    ${pt("M28 80 q4 6 0 10 M46 72 q5 8 0 12 M66 78 q4 6 0 10")}
    <path d="M30 62 C28 44 32 26 35 24 C39 28 40 46 38 62 Z" fill="#c9a0dc" ${x(1.8)}/>
    <circle cx="33" cy="36" r="2.2" fill="#f7ecff"/><circle cx="36" cy="46" r="2.2" fill="#b388d6"/><circle cx="33" cy="54" r="2" fill="#f7ecff"/>
    <path d="M46 58 C44 36 50 14 53 12 C57 16 58 40 54 58 Z" fill="#b388d6" ${x(1.8)}/>
    <circle cx="50" cy="28" r="2.4" fill="#f7ecff"/><circle cx="53" cy="40" r="2.4" fill="#c9a0dc"/><circle cx="50" cy="50" r="2.2" fill="#f7ecff"/>
    <path d="M62 60 C62 42 68 28 71 26 C75 30 76 46 72 60 Z" fill="#a78bfa" ${x(1.8)}/>
    <circle cx="67" cy="38" r="2.2" fill="#f7ecff"/><circle cx="70" cy="48" r="2" fill="#c9a0dc"/>
    <path d="M14 26 C4 14 2 24 10 32 C14 36 18 32 18 28 Z" fill="#ff8fab" ${x(1.6)}/>
    <path d="M20 24 C30 12 34 24 26 34 C22 38 20 30 20 26 Z" fill="#c9a0dc" ${x(1.6)}/>
    <path d="M12 30 C6 36 6 46 14 46 C18 44 20 36 18 30 Z" fill="#ffd166" ${x(1.6)}/>
    <path d="M22 30 C30 36 32 46 24 48 C20 44 18 36 20 30 Z" fill="#8ecae6" ${x(1.6)}/>
    <ellipse cx="18" cy="32" rx="2" ry="7" fill="${ct}"/>
    <path d="M16 26 Q12 18 10 14 M20 26 Q24 18 28 14" fill="none" stroke="${ct}" stroke-width="1.3" stroke-linecap="round"/>`}),d5=Me({kind:"hedge-row",name:"Hedge Row",cat:"plants",w:190,h:96,vb:"0 0 180 96",svg:`${xe(90,78,90)}
    <path d="M16 84 C28 70 40 62 52 66 C62 52 78 50 90 62 C102 50 118 52 128 66 C140 58 156 64 164 74 L164 86 L16 86 Z" fill="#2f7d52"/>
    <path d="M10 82 L10 60 C10 50 18 46 26 50 C32 34 46 32 54 48 C60 30 76 28 84 46 C92 28 108 28 116 46 C124 30 140 32 148 48 C156 36 166 42 170 54 L170 82 Z" fill="#74c69d" ${x()}/>
    <path d="M148 46 C160 38 170 50 170 70 L170 82 L140 82 L146 58 Z" fill="#52b788"/>
    <path d="M22 64 C40 54 58 58 70 50 C84 60 100 48 116 56 C128 48 146 56 158 64" fill="none" stroke="#95d5b2" stroke-width="6" stroke-linecap="round" opacity=".85"/>
    <path d="M14 68 C48 78 132 76 166 66 L168 82 L12 82 Z" fill="#3d9a68"/>
    ${pt("M28 58 q3 5 0 8 M48 54 q3 6 0 9 M70 52 q3 6 1 9 M94 52 q3 6 0 10 M118 54 q3 6 0 9 M142 56 q3 5 0 8")}
    ${re("M18 58 q10 -4 16 1")}
    ${re("M58 42 q12 -4 16 2")}`}),f5=Me({kind:"lemonade-cup",name:"Lemonade Cup",cat:"food",w:52,h:70,vb:"0 0 70 90",holdable:!0,svg:`${xe(35,22,84)}
    <path d="M18 32 H52 L46 76 H24 Z" fill="#fff" ${x()}/>
    <path d="M40 34 H50 L46 74 H40 Z" fill="#f0e6d8"/>
    <path d="M20 44 H50 L46 76 H24 Z" fill="#ffe566"/>
    <path d="M40 46 H48 L46 74 H40 Z" fill="#f0c45c"/>
    <ellipse cx="35" cy="44" rx="15" ry="6" fill="#fff3a0" ${x(2)}/>
    <ellipse cx="35" cy="32" rx="17" ry="7" fill="#fff" ${x()}/>
    <path d="M40 42 L48 16 H58" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="20" cy="30" r="8" fill="#ffe566" ${x(1.8)}/>
    <path d="M20 23 v14 M14 30 h12" fill="none" stroke="#fff" stroke-width="1.4"/>
    <path d="M16 26 q4 4 8 0 M16 34 q4 -4 8 0" fill="none" stroke="#e0a83a" stroke-width="1.2"/>
    ${re("M24 38 v14")}`}),kg=520,p5=Me({kind:"picnic-table",name:"Picnic Table",cat:"furniture",w:360,h:220,vb:"0 0 160 100",svg:`${xe(80,68,96)}
    <rect x="18" y="62" width="124" height="10" rx="2" fill="#e7c49a" ${x()}/>
    <rect x="118" y="64" width="20" height="7" fill="#c99366"/>
    <rect x="28" y="70" width="8" height="24" rx="1" fill="#f3d2aa" ${x(2)}/>
    <rect x="124" y="70" width="8" height="24" rx="1" fill="#d4a373" ${x(2)}/>
    <rect x="8" y="78" width="40" height="8" rx="2" fill="#f6e0c4" ${x(2)}/>
    <rect x="112" y="78" width="40" height="8" rx="2" fill="#e7c49a" ${x(2)}/>
    <rect x="22" y="36" width="116" height="14" rx="2" fill="#f6e0c4" ${x()}/>
    <rect x="110" y="38" width="24" height="10" fill="#d4a373"/>
    <rect x="36" y="48" width="8" height="18" fill="#f3d2aa" ${x(2)}/>
    <rect x="116" y="48" width="8" height="18" fill="#d4a373" ${x(2)}/>
    ${re("M28 40 h36")}
    ${pt("M40 42 h50 M34 66 h70")}`}),h5=Me({kind:"seesaw",name:"Seesaw",cat:"furniture",w:200,h:80,vb:"0 0 180 80",svg:`${xe(90,74,76)}
    <path d="M78 58 H102 L96 74 H84 Z" fill="#f3d2aa" ${x()}/>
    <path d="M94 60 H100 L96 72 H92 Z" fill="#c99366"/>
    <rect x="10" y="40" width="160" height="12" rx="3" fill="#ffd166" ${x()} transform="rotate(-8 90 46)"/>
    <rect x="130" y="28" width="28" height="8" fill="#e0a83a"/>
    <rect x="16" y="34" width="28" height="10" rx="2" fill="#ff8fab" ${x(2)}/>
    <rect x="136" y="22" width="28" height="10" rx="2" fill="#8ecae6" ${x(2)}/>
    ${re("M24 44 h40")}`}),u5=Me({kind:"wagon",name:"Wagon",cat:"furniture",w:130,h:90,vb:"0 0 130 90",svg:`${xe(64,50,86)}
    <circle cx="36" cy="74" r="12" fill="${ct}" ${x(2)}/><circle cx="36" cy="74" r="5" fill="#ffd166"/>
    <circle cx="96" cy="74" r="12" fill="${ct}" ${x(2)}/><circle cx="96" cy="74" r="5" fill="#ffd166"/>
    <path d="M22 40 H108 L100 68 H30 Z" fill="#e45d88" ${x()}/>
    <path d="M86 42 H106 L100 66 H84 Z" fill="#c93b68"/>
    <rect x="28" y="28" width="76" height="14" rx="3" fill="#ff8fab" ${x()}/>
    <path d="M108 36 H122 L118 58" fill="none" ${x(2.4)}/>
    ${re("M32 46 h28")}
    ${pt("M40 54 h40")}`}),g5=Me({kind:"birdhouse",name:"Birdhouse",cat:"decor",w:70,h:120,vb:"0 0 80 130",svg:`${xe(40,22,124)}
    <rect x="34" y="70" width="12" height="50" rx="2" fill="#d4a373" ${x()}/>
    <rect x="40" y="74" width="5" height="42" fill="#c99366"/>
    <path d="M12 62 L40 28 L68 62 Z" fill="#e45d88" ${x()}/>
    <path d="M40 32 L66 60 H52 Z" fill="#c93b68"/>
    <rect x="18" y="60" width="44" height="36" rx="3" fill="#f6e0c4" ${x()}/>
    <rect x="48" y="64" width="10" height="28" fill="#e7c49a"/>
    <circle cx="40" cy="76" r="7" fill="#5a3d5c"/>
    <rect x="36" y="86" width="14" height="4" rx="1" fill="#d4a373" ${x(1.6)}/>
    ${re("M22 66 h12")}`}),m5=Me({kind:"sprinkler",name:"Sprinkler",cat:"decor",w:80,h:70,vb:"0 0 100 80",svg:`${xe(50,28,76)}
    <ellipse cx="50" cy="66" rx="22" ry="8" fill="#74c69d" ${x()}/>
    <rect x="44" y="40" width="12" height="26" rx="3" fill="#8ecae6" ${x()}/>
    <circle cx="50" cy="36" r="8" fill="#ffd166" ${x()}/>
    <path d="M50 28 C30 16 18 20 12 10" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 28 C70 14 84 18 90 8" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 26 C40 8 58 4 50 2" fill="none" stroke="#c9ecff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="12" cy="10" r="2.2" fill="#c9ecff"/><circle cx="90" cy="8" r="2.2" fill="#c9ecff"/><circle cx="50" cy="2" r="2.2" fill="#fff"/>
    ${re("M46 44 v10")}`}),y5=Me({kind:"beach-ball",name:"Beach Ball",cat:"decor",w:70,h:70,vb:"0 0 80 80",svg:`${xe(40,26,76)}
    <circle cx="40" cy="40" r="28" fill="#fff" ${x()}/>
    <path d="M40 12 A28 28 0 0 1 66 32 L40 40 Z" fill="#ff8fab"/>
    <path d="M66 48 A28 28 0 0 1 40 68 L40 40 Z" fill="#ffd166"/>
    <path d="M24 64 A28 28 0 0 1 14 36 L40 40 Z" fill="#8ecae6"/>
    <path d="M18 28 A28 28 0 0 1 40 12 L40 40 Z" fill="#b7e4c7"/>
    <circle cx="40" cy="40" r="5" fill="#fff" ${x(2)}/>
    ${re("M28 24 q6 -4 10 2")}`}),w5=Me({kind:"patio-umbrella",name:"Patio Umbrella",cat:"furniture",w:150,h:180,vb:"0 0 120 150",svg:`${xe(60,36,144)}
    <path d="M10 58 Q60 18 110 58 L98 64 Q60 32 22 64 Z" fill="#ffb3c6" ${x()}/>
    <path d="M60 22 L108 56 L96 62 Z" fill="#e45d88"/>
    <path d="M28 40 Q44 30 60 36 Q76 28 96 42" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <rect x="56" y="58" width="8" height="78" rx="2" fill="#f3d2aa" ${x()}/>
    <rect x="60" y="62" width="3" height="70" fill="#d4a373"/>
    <rect x="40" y="128" width="40" height="8" rx="2" fill="#e7c49a" ${x(2)}/>
    ${re("M24 50 q16 -8 24 0")}`}),b5=Me({kind:"veggie-patch",name:"Vegetable Patch",cat:"plants",w:150,h:80,vb:"0 0 150 80",svg:`${xe(75,62,76)}
    <rect x="8" y="28" width="134" height="44" rx="4" fill="#c99366" ${x()}/>
    <rect x="16" y="34" width="118" height="32" fill="#8d6e4c"/>
    <path d="M36 48 C36 36 48 34 48 46 C48 34 60 36 58 48 Z" fill="#74c69d" ${x(2)}/>
    <path d="M78 50 C78 38 90 36 90 48 C90 36 102 38 100 50 Z" fill="#52b788" ${x(2)}/>
    <path d="M112 52 L120 30 L128 52 Z" fill="#ff922b" ${x(2)}/>
    <path d="M118 32 Q124 22 130 28" fill="none" stroke="#2f7d52" stroke-width="2" stroke-linecap="round"/>
    ${re("M18 36 h24")}`}),v5=Me({kind:"hammock",name:"Hammock",cat:"furniture",w:190,h:110,vb:"0 0 170 100",svg:`${xe(85,70,96)}
    <rect x="8" y="18" width="10" height="74" rx="2" fill="#d4a373" ${x()}/>
    <rect x="152" y="18" width="10" height="74" rx="2" fill="#c99366" ${x()}/>
    <path d="M18 28 Q85 78 152 28" fill="none" stroke="#5a3d5c" stroke-width="2"/>
    <path d="M18 36 Q85 88 152 36 L152 48 Q85 96 18 48 Z" fill="#8ecae6" ${x()}/>
    <path d="M120 40 Q140 62 150 44 L150 54 Q136 74 112 52 Z" fill="#5fb0d8"/>
    ${re("M36 46 q24 10 30 4")}
    ${pt("M40 58 q30 16 50 4")}`}),k5=Me({kind:"garden-gnome",name:"Garden Gnome",cat:"decor",w:64,h:100,vb:"0 0 70 110",svg:`${xe(35,22,104)}
    <path d="M18 78 H52 L48 100 H22 Z" fill="#3d7ec4" ${x()}/>
    <path d="M40 80 H50 L48 98 H42 Z" fill="#2c5f96"/>
    <circle cx="35" cy="62" r="16" fill="#f6d2b5" ${x()}/>
    <path d="M20 66 Q35 78 50 66 Q46 74 35 76 Q24 74 20 66 Z" fill="#fff"/>
    <circle cx="29" cy="60" r="2" fill="${ct}"/><circle cx="41" cy="60" r="2" fill="${ct}"/>
    <path d="M16 52 L35 18 L54 52 Z" fill="#e45d88" ${x()}/>
    <path d="M35 22 L52 50 H42 Z" fill="#c93b68"/>
    <ellipse cx="35" cy="52" rx="16" ry="4" fill="#ff8fab" ${x(2)}/>
    ${re("M22 40 l8 -8")}`}),Ta=[qx,Fx,jx,Zx,Gx,Yx,Kx,Xx,e5,t5,n5,s5,o5,i5,a5,r5,l5,c5,d5,f5,p5,h5,u5,g5,m5,y5,w5,b5,v5,k5];function _5(e,t){for(const n of Ta)t[n.kind]||(e.push(n),t[n.kind]=n)}function Mc(e,t,n){return`<g>
    <ellipse cx="${e-22*n}" cy="${t}" rx="${26*n}" ry="${14*n}" fill="#fff"/>
    <ellipse cx="${e+18*n}" cy="${t-2*n}" rx="${30*n}" ry="${16*n}" fill="#fff"/>
    <ellipse cx="${e}" cy="${t+4*n}" rx="${34*n}" ry="${13*n}" fill="#fff"/>
  </g>`}function $5(e,t,n,s,o){const a=l=>`<rect x="${e-2}" y="${l}" width="${t-e+12+4}" height="8" rx="3" fill="#fff" ${x(2.2)}/><rect x="${(t-40).toFixed(1)}" y="${l+1}" width="30" height="6" rx="2" fill="#d5ead8"/>`;let r=a(n+26)+a(s-28);for(let l=e;l<=t;l+=o)r+=`<path d="M${l} ${n+12} L${l+12/2} ${n} L${l+12} ${n+12} V${s} H${l} Z" fill="#f7fff8" ${x(2.2)}/>`,r+=`<path d="M${(l+12*.58).toFixed(1)} ${n+10} H${l+12-1} V${s-4} H${(l+12*.58).toFixed(1)} Z" fill="#d5ead8"/>`,r+=`<path d="M${l+2} ${n+18} v22" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".75" fill="none"/>`;return r}function x5(e,t){const s=150+46*t,o=372-s;return`<g id="yardTree">
    <rect x="${e-14*t}" y="${s}" width="${28*t}" height="${o}" rx="${6*t}" fill="#e7b98a" ${x()}/>
    <rect x="${e+4*t}" y="${s+8*t}" width="${8*t}" height="${o-16*t}" fill="#c99366"/>
    ${pt(`M${e-4*t} ${s+28*t} v${36*t}`)}
    ${re(`M${e-8*t} ${s+16*t} v${22*t}`)}
    <ellipse cx="${e+8*t}" cy="${150+18*t}" rx="${78*t}" ry="${46*t}" fill="#2f7d52"/>
    <ellipse cx="${e-48*t}" cy="${150+10*t}" rx="${36*t}" ry="${30*t}" fill="#245e3e"/>
    <ellipse cx="${e-34*t}" cy="${150+16*t}" rx="${42*t}" ry="${34*t}" fill="#95d5b2" ${x(2.2)}/>
    <ellipse cx="${e}" cy="150" rx="${68*t}" ry="${50*t}" fill="#74c69d" ${x()}/>
    <ellipse cx="${e+40*t}" cy="${150+8*t}" rx="${40*t}" ry="${36*t}" fill="#3d9a68" ${x(2.2)}/>
    <ellipse cx="${e-8*t}" cy="${150-6*t}" rx="${28*t}" ry="${20*t}" fill="#b7e4c7" opacity=".95"/>
    ${pt(`M${e-20*t} ${150+8*t} q${8*t} ${6*t} 0 ${12*t} M${e+10*t} ${150-4*t} q${8*t} ${6*t} 2 ${12*t} M${e+28*t} ${150+12*t} q${6*t} ${5*t} 0 ${10*t}`)}
    ${re(`M${e-36*t} ${150-18*t} q${16*t} -8 ${28*t} 2`)}
  </g>`}function M5(){return`<svg class="yardWorld" viewBox="0 0 2400 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ydsky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6eb6e8"/>
        <stop offset=".48" stop-color="#c5e6fb"/>
        <stop offset="1" stop-color="#fff3df"/>
      </linearGradient>
      ${zf("ydsun","#ffe566",".55")}
    </defs>
    <rect width="2400" height="430" fill="url(#ydsky)"/>
    <circle id="ydSunGlow" cx="1180" cy="68" r="62" fill="url(#ydsun)"/>
    <circle id="ydSun" cx="1180" cy="68" r="30" fill="#ffe566"/>
    <circle cx="1170" cy="58" r="8" fill="#fff" opacity=".8"/>
    ${Mc(980,96,1.05)}${Mc(1320,78,.85)}${Mc(1500,120,.7)}
    <rect y="360" width="2400" height="240" fill="#c6ef9a"/>
    <rect y="360" width="2400" height="28" fill="#e7f8c8"/>
    <rect y="520" width="2400" height="80" fill="#9ed67a"/>
    <path d="M1040 470 q30 -12 16 -6 M1200 510 q28 -12 14 -4 M1360 548 q24 -10 12 -4" fill="none" stroke="#3d9a68" stroke-width="1.2" stroke-linecap="round" opacity=".22"/>
    ${$5(846,2118,258,372,24)}
    ${x5(1184,.8)}
    <path d="M840 120 H1076 L1054 152 H862 Z" fill="#ffb3c6" ${x()}/>
    <path d="M960 126 H1064 L1046 148 H976 Z" fill="#e45d88"/>
    ${re("M876 132 h56")}
    <rect x="864" y="150" width="196" height="222" rx="4" fill="#fff6ea" ${x()}/>
    <rect x="1044" y="156" width="12" height="210" fill="#f0dcc4"/>
    ${pt("M880 174 H1000 M880 202 H1000 M880 230 H990 M880 294 H1000 M880 334 H980")}
    <rect x="884" y="180" width="44" height="36" rx="4" fill="#c9ecff" ${x(2.2)}/>
    <rect x="912" y="184" width="12" height="28" fill="#8ecae6"/>
    <path d="M906 180 V216 M884 198 H928" fill="none" ${x(2.2)}/>
    ${re("M890 188 h12")}
  </svg>`}function L5(e,t,n,s,o){const i=(600-t)/600*100,a=(n/2400*100).toFixed(3),r=(s/600*100).toFixed(3);return o==="right"?`right:${((2400-(e+n/2))/2400*100).toFixed(3)}%;bottom:${i.toFixed(3)}%;width:${a}%;height:${r}%`:`left:${((e-n/2)/2400*100).toFixed(3)}%;bottom:${i.toFixed(3)}%;width:${a}%;height:${r}%`}function E5(){return`<svg class="doorArt" viewBox="0 0 100 230">
    <rect x="4" y="2" width="92" height="226" rx="3" fill="#f3d2aa" ${x()}/>
    <rect x="76" y="6" width="16" height="218" fill="#d4a373"/>
    <rect x="14" y="12" width="72" height="206" rx="2" fill="#f6e9ff" ${x(2.2)}/>
    <rect x="70" y="16" width="12" height="198" fill="#d4b4e6"/>
    <rect x="24" y="22" width="52" height="42" rx="3" fill="#c9ecff" ${x(2.2)}/>
    <rect x="60" y="26" width="12" height="34" fill="#8ecae6"/>
    <path d="M50 22 V64 M24 43 H76" fill="none" ${x(2.2)}/>
    ${re("M28 28 h18")}
    <rect x="24" y="76" width="52" height="56" rx="3" fill="#f7ecff" ${x(2.2)}/>
    <rect x="62" y="80" width="10" height="48" fill="#e0c8f0"/>
    ${re("M28 84 v22")}
    <rect x="24" y="144" width="52" height="56" rx="3" fill="#f7ecff" ${x(2.2)}/>
    <rect x="62" y="148" width="10" height="48" fill="#e0c8f0"/>
    <circle cx="64" cy="126" r="4.2" fill="#ffd166" ${x(2.2)}/>
    <rect x="10" y="214" width="80" height="10" rx="2" fill="#e7c49a" ${x(2.2)}/>
  </svg>`}function S5(e){const t=e==="living"?bg:vg,n=e==="living"?"backyard":"living",s=e==="living"?"Backyard":"Back inside",o=e==="yard"?"right":"left";return`<button type="button" class="yardDoor" data-yard-go="${n}" aria-label="${s}" style="${L5(t.x,t.y,t.w,t.h,o)}">${E5()}<span class="yardHintLabel"><span>${s}</span></span></button>`}function Hf(e,t){const n=e.replace(/[&<>]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[s]);return`<figure class="ysCard"><div class="ysArt">${t}</div><figcaption>${n}</figcaption></figure>`}function T5(){return`<div class="yardSheet" data-yard-sheet="1"><h1>Backyard pieces</h1><div class="ysGrid">${Ta.map(t=>Hf(t.name,Qt(t))).join("")}</div></div>`}function P5(e,t){return Hf(e,`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${t}</svg>`)}function A5(){const e=(r,l)=>xe(r,l,96.4),t=`
    ${e(50,40)}
    <path d="M18 58 V30 Q18 18 32 18 H68 Q82 18 82 30 V58 Z" fill="#ffb7cc" ${x()}/>
    <path d="M56 24 H76 Q80 24 80 32 V52 H56 Z" fill="#e888a8"/>
    <circle cx="34" cy="38" r="3.4" fill="#ff8fab" ${x(2)}/><circle cx="33" cy="37" r="1.1" fill="#fff"/>
    <circle cx="50" cy="36" r="3.4" fill="#ff8fab" ${x(2)}/><circle cx="49" cy="35" r="1.1" fill="#fff"/>
    <circle cx="66" cy="38" r="3.4" fill="#e45d88" ${x(2)}/><circle cx="65" cy="37" r="1.1" fill="#fff"/>
    <rect x="4" y="44" width="20" height="38" rx="10" fill="#ff7096" ${x()}/>
    <ellipse cx="14" cy="44" rx="12" ry="9" fill="#ff9ab6" ${x()}/>
    <ellipse cx="9" cy="41" rx="4" ry="2.4" fill="#fff" opacity=".7"/>
    <rect x="76" y="44" width="20" height="38" rx="10" fill="#e04878" ${x()}/>
    <ellipse cx="86" cy="44" rx="12" ry="9" fill="#e45d88" ${x()}/>
    <rect x="20" y="64" width="60" height="16" rx="6" fill="#ff8fab" ${x()}/>
    <rect x="22" y="56" width="28" height="22" rx="7" fill="#ffe0ea" ${x(2.4)}/>
    <rect x="50" y="56" width="28" height="22" rx="7" fill="#ffc2d4" ${x(2.4)}/>
    <rect x="66" y="58" width="10" height="18" rx="4" fill="#e888a8"/>
    <path d="M26 60 h20 M54 60 h16 M26 74 h20 M54 74 h16" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M50 58 v18" fill="none" stroke="#e45d88" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="26" y="46" width="20" height="16" rx="5" fill="#fff" ${x(2.2)}/>
    <path d="M33 52 c-2.2 -3.2 -6.4 -.4 -3.4 2.6 c1 1.2 3.4 2.6 3.4 2.6 c0 0 2.4 -1.4 3.4 -2.6 c3 -3 -1.2 -5.8 -3.4 -2.6 z" fill="#ff8fab"/>
    <path d="M41 56 c-1.4 -2 -4.2 0 -2.2 1.8 c.7 .8 2.2 1.6 2.2 1.6 c0 0 1.5 -.8 2.2 -1.6 c2 -1.8 -.8 -3.8 -2.2 -1.8 z" fill="#7eb4dc"/>
    <rect x="16" y="84" width="7" height="10" rx="2" fill="${ct}"/>
    <rect x="77" y="84" width="7" height="10" rx="2" fill="${ct}"/>`,n=`
    <defs>${zf("a2lamp-glow","#ffd56a",".95")}</defs>
    ${e(50,22)}
    <path d="M34 8 L42 8 L37 40 L24 40 Z" fill="#fff6d4"/>
    <path d="M42 8 L50 8 L50 40 L37 40 Z" fill="#ffe08a"/>
    <path d="M50 8 L58 8 L63 40 L50 40 Z" fill="#f0c45c"/>
    <path d="M58 8 L66 8 L76 40 L63 40 Z" fill="#e0a83a"/>
    <path d="M24 40 L34 8 H66 L76 40 Z" fill="none" ${x()}/>
    <path d="M42 8 L37 40 M50 8 V40 M58 8 L63 40" fill="none" stroke="${ct}" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="36" rx="20" ry="10" fill="url(#a2lamp-glow)"/>
    <rect x="46" y="40" width="8" height="42" rx="3" fill="#e4ccf2" ${x()}/>
    <rect x="50" y="44" width="4" height="34" rx="2" fill="#c49ad4"/>
    <ellipse cx="50" cy="88" rx="20" ry="6" fill="#d4b4e6" ${x()}/>
    <ellipse cx="60" cy="90" rx="8" ry="3" fill="#b888c8"/>
    <ellipse cx="42" cy="86" rx="6" ry="2" fill="#fff" opacity=".55"/>`,s=`
    ${e(50,30)}
    <ellipse cx="30" cy="40" rx="14" ry="22" fill="#b7ebc8" ${x()} transform="rotate(-30 30 40)"/>
    <path d="M34 28 C30 40 32 52 44 58" fill="#52b078"/>
    <ellipse cx="72" cy="42" rx="13" ry="20" fill="#3d9a68" ${x()} transform="rotate(26 72 42)"/>
    <path d="M50 66 C40 44 42 18 50 6 C58 18 60 44 50 66 Z" fill="#d8f6e4" ${x()}/>
    <path d="M54 18 C60 32 58 48 50 58 C56 44 58 28 54 18 Z" fill="#52b078"/>
    <path d="M50 14 V52" fill="none" stroke="#2f7a52" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>
    <path d="M40 60 C34 50 24 48 22 38 C32 44 38 54 42 64 Z" fill="#74c69d" ${x(2.2)}/>
    <path d="M28 64 H74 L68 94 H34 Z" fill="#e8845a" ${x()}/>
    <path d="M58 66 H72 L68 92 H60 Z" fill="#c45c38"/>
    <rect x="22" y="58" width="58" height="10" rx="4" fill="#f0a078" ${x()}/>
    <rect x="56" y="60" width="20" height="6" rx="3" fill="#d47848"/>
    <ellipse cx="50" cy="65" rx="20" ry="3" fill="#a86a42" opacity=".4"/>
    <path d="M28 62 h14" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".65"/>`,o=Object.fromEntries(Ta.map(r=>[r.kind,r])),i=(r,l,c)=>P5(r,l)+Hf(o[c].name,Qt(o[c]));return`<div class="yardSheet yardCompare" data-yard-compare="1"><h1>House style and the yard</h1><p class="ysNote">Sofa, lamp, and plant are the approved refresh. Swing, cart, and birdbath use the same light.</p><div class="ysPair">${i("Sofa",t,"yard-swing")+i("Lamp",n,"lemonade-cart")+i("Plant",s,"birdbath")}</div></div>`}const Ai="#5a3d5c",K=`stroke="${Ai}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,kr='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>',_g=[{kind:"soaking-tub",name:"Soaking Tub",cat:"furniture",w:250,h:200,vb:"0 0 120 96",svg:`<ellipse cx="60" cy="92" rx="48" ry="3.2" fill="#000" opacity=".12"/><rect x="18" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${K}/><rect x="92" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${K}/><path d="M14 58 Q8 58 10 46 L22 28 H98 L110 46 Q112 58 106 58 Z" fill="#fff" ${K}/><ellipse cx="60" cy="30" rx="44" ry="14" fill="#fff" ${K}/><ellipse cx="60" cy="32" rx="34" ry="9" fill="#d7f3ff"/><path d="M28 34 Q60 42 92 34" fill="none" stroke="#b9e6f8" stroke-width="4"/><rect x="96" y="8" width="8" height="22" rx="4" fill="#f7d27a" ${K}/><path d="M100 28 Q112 34 104 44" fill="none" ${K}/><circle cx="104" cy="46" r="3.2" fill="#a8d4ea" ${K}/><ellipse cx="46" cy="30" rx="8" ry="3" fill="#fff" opacity=".7"/>`},{kind:"bath-toilet",name:"Toilet",cat:"furniture",w:120,h:160,vb:"0 0 100 134",svg:`<ellipse cx="50" cy="128" rx="34" ry="4" fill="#000" opacity=".12"/><rect x="28" y="8" width="44" height="36" rx="8" fill="#fff" ${K}/><rect x="34" y="16" width="32" height="16" rx="4" fill="#e7f6ff"/><rect x="46" y="42" width="8" height="10" fill="#f4f7fb" ${K}/><ellipse cx="50" cy="78" rx="36" ry="22" fill="#fff" ${K}/><ellipse cx="50" cy="74" rx="24" ry="14" fill="#d7f3ff" ${K}/><path d="M18 70 Q50 58 82 70" fill="#fff" ${K}/><rect x="40" y="96" width="20" height="24" rx="4" fill="#f7f4ef" ${K}/>`},{kind:"sink-vanity",name:"Sink Vanity",cat:"furniture",w:210,h:190,vb:"0 0 110 100",svg:`<ellipse cx="55" cy="96" rx="46" ry="3.2" fill="#000" opacity=".12"/><rect x="10" y="48" width="90" height="42" rx="8" fill="#f6e2c4" ${K}/><path d="M55 48 V90" ${K}/><circle cx="28" cy="70" r="3" fill="${Ai}"/><circle cx="82" cy="70" r="3" fill="${Ai}"/><rect x="16" y="90" width="8" height="6" rx="2" fill="${Ai}"/><rect x="86" y="90" width="8" height="6" rx="2" fill="${Ai}"/><ellipse cx="55" cy="44" rx="40" ry="12" fill="#fff" ${K}/><ellipse cx="55" cy="44" rx="26" ry="7" fill="#d7f3ff"/><rect x="50" y="10" width="10" height="28" rx="4" fill="#f7d27a" ${K}/><path d="M55 36 Q70 40 66 48" fill="none" ${K}/><rect x="8" y="40" width="94" height="8" rx="3" fill="#f3d2b5" ${K}/>`},{kind:"bath-mirror",name:"Bath Mirror",cat:"decor",w:120,h:160,wall:!0,vb:"0 0 90 120",svg:`<path d="M45 8 C70 8 82 28 82 58 C82 92 68 112 45 112 C22 112 8 92 8 58 C8 28 20 8 45 8 Z" fill="#f7d27a" ${K}/><ellipse cx="45" cy="60" rx="26" ry="40" fill="#d7f4ff" ${K}/><path d="M30 36 l8 -8 M28 52 l18 -16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="38" y="2" width="14" height="8" rx="3" fill="#f28fa6" ${K}/>`},{kind:"towel-bar",name:"Towel Bar",cat:"decor",w:170,h:116,wall:!0,vb:"0 0 150 102",svg:`<rect x="10" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${K}/><rect x="130" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${K}/><rect x="14" y="16" width="122" height="8" rx="4" fill="#c98d55" ${K}/><path d="M26 24 H124 V70 Q75 100 26 70 Z" fill="#f7d7e4" ${K}/><path d="M75 24 V88" stroke="#f28fa6" stroke-width="3"/><path d="M40 36 H110" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"bath-mat",name:"Bath Mat",cat:"decor",w:230,h:120,vb:"0 0 160 84",svg:`<ellipse cx="80" cy="78" rx="70" ry="5" fill="#000" opacity=".1"/><rect x="12" y="22" width="136" height="48" rx="18" fill="#f28fa6" ${K}/><rect x="24" y="32" width="112" height="28" rx="12" fill="#f7d7e4"/><path d="M40 46 H120 M40 54 H120" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`},{kind:"rubber-ducky",name:"Rubber Ducky",cat:"decor",w:80,svg:`${kr}<ellipse cx="48" cy="68" rx="30" ry="26" fill="#f7d27a" ${K}/><circle cx="68" cy="40" r="18" fill="#ffe9a8" ${K}/><path d="M82 38 H98 Q102 44 92 48 H82 Z" fill="#f28fa6" ${K}/><ellipse cx="36" cy="74" rx="12" ry="8" fill="#f3c15a"/>`},{kind:"shower-curtain",name:"Shower Curtain",cat:"decor",w:150,h:260,holdable:!1,vb:"0 0 90 156",svg:`<rect x="8" y="8" width="74" height="8" rx="3" fill="#c98d55" ${K}/><circle cx="22" cy="16" r="3" fill="#f7d27a" ${K}/><circle cx="40" cy="16" r="3" fill="#f7d27a" ${K}/><circle cx="58" cy="16" r="3" fill="#f7d27a" ${K}/><circle cx="72" cy="16" r="3" fill="#f7d27a" ${K}/><path d="M12 18 Q8 80 16 146 H40 Q30 80 36 18 Z" fill="#d7f4ff" ${K}/><path d="M36 18 Q34 80 46 146 H74 Q84 80 78 18 Z" fill="#f7d7e4" ${K}/><path d="M24 40 Q18 70 26 100 M58 40 Q66 70 58 110" fill="none" stroke="#fff" stroke-width="3" opacity=".65"/>`},{kind:"soap-dish",name:"Soap Dish",cat:"decor",w:90,svg:`${kr}<ellipse cx="50" cy="78" rx="34" ry="12" fill="#fff" ${K}/><ellipse cx="50" cy="74" rx="26" ry="7" fill="#e7f6ff"/><rect x="28" y="48" width="44" height="22" rx="8" fill="#f7d7e4" ${K}/><path d="M36 56 H64" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"laundry-hamper",name:"Laundry Hamper",cat:"furniture",w:140,h:160,vb:"0 0 100 114",svg:`<ellipse cx="50" cy="108" rx="36" ry="4" fill="#000" opacity=".12"/><path d="M18 40 H82 L74 100 H26 Z" fill="#b9a0dc" ${K}/><path d="M24 58 H76 M26 74 H74" stroke="#fff" stroke-width="3" opacity=".55"/><ellipse cx="50" cy="40" rx="34" ry="10" fill="#c9b6e8" ${K}/><path d="M22 36 Q50 18 78 36" fill="#f7d7e4" ${K}/><path d="M40 28 Q50 40 62 26" fill="none" stroke="#f28fa6" stroke-width="4" stroke-linecap="round"/>`},{kind:"bath-stool",name:"Bath Stool",cat:"furniture",w:110,svg:`${kr}<ellipse cx="50" cy="58" rx="36" ry="12" fill="#f6e2c4" ${K}/><ellipse cx="50" cy="54" rx="28" ry="7" fill="#fff6ea"/><path d="M22 64 L16 92 M78 64 L84 92 M36 66 L34 92 M64 66 L66 92" ${K}/><path d="M18 90 H34 M66 90 H84" ${K}/>`}],R5=[{kind:"floor-cushion",name:"Floor Cushion",cat:"decor",w:150,h:136,vb:"0 0 130 118",svg:`<ellipse cx="65" cy="112" rx="50" ry="4" fill="#000" opacity=".12"/><ellipse cx="65" cy="68" rx="52" ry="40" fill="#f28fa6" ${K}/><ellipse cx="65" cy="58" rx="40" ry="24" fill="#f7d7e4"/><path d="M38 64 Q65 82 92 64" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"story-pillow",name:"Story Pillow",cat:"decor",w:120,h:100,vb:"0 0 110 92",svg:`<ellipse cx="55" cy="86" rx="40" ry="4" fill="#000" opacity=".12"/><rect x="14" y="28" width="82" height="52" rx="18" fill="#a8d4ea" ${K}/><path d="M55 40 l6 12 13 2 -10 8 2 13 -11 -7 -11 7 2 -13 -10 -8 13 -2 z" fill="#f7d27a" ${K}/>`},{kind:"berry-basket",name:"Berry Basket",cat:"food",w:100,svg:`${kr}<path d="M22 48 H78 L70 88 H30 Z" fill="#f3d2b5" ${K}/><path d="M30 58 H70 M32 70 H68 M34 80 H66" ${K}/><circle cx="40" cy="40" r="10" fill="#f28fa6" ${K}/><circle cx="58" cy="36" r="10" fill="#c94b6a" ${K}/><circle cx="70" cy="48" r="8" fill="#b9a0dc" ${K}/><path d="M34 36 Q40 28 46 36" fill="none" stroke="#7dce8a" stroke-width="3"/>`},{kind:"ribbon-tray",name:"Ribbon Tray",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`<ellipse cx="70" cy="84" rx="52" ry="4" fill="#000" opacity=".12"/><rect x="16" y="40" width="108" height="36" rx="12" fill="#fff" ${K}/><rect x="22" y="46" width="96" height="22" rx="8" fill="#f7d7e4"/><rect x="36" y="28" width="16" height="22" rx="5" fill="#a8d4ea" ${K}/><rect x="58" y="22" width="14" height="28" rx="5" fill="#f7d27a" ${K}/><path d="M96 24 Q110 16 112 32 Q100 28 104 40 Q92 34 96 24 Z" fill="#f28fa6" ${K}/>`}],Oe="#5a3d5c",T=`stroke="${Oe}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Ao=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="3" fill="${Oe}"/><circle cx="${t}" cy="${n}" r="3" fill="${Oe}"/><circle cx="${e+1}" cy="${n-1}" r="1" fill="#fff"/><circle cx="${t+1}" cy="${n-1}" r="1" fill="#fff"/>`,tr=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/><ellipse cx="${t}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/>`,Re='<ellipse cx="50" cy="97" rx="38" ry="3" fill="#000" opacity=".12"/>',En=[{kind:"sofa",name:"Sofa",cat:"furniture",w:260,svg:`${Re}<rect x="6" y="40" width="88" height="40" rx="16" fill="#ff8fab" ${T}/><rect x="16" y="28" width="68" height="30" rx="12" fill="#ffb3c6" ${T}/><rect x="2" y="48" width="18" height="38" rx="9" fill="#ff7096" ${T}/><rect x="80" y="48" width="18" height="38" rx="9" fill="#ff7096" ${T}/><rect x="20" y="60" width="60" height="18" rx="8" fill="#ffc2d1" ${T}/><rect x="14" y="86" width="6" height="10" rx="2" fill="${Oe}"/><rect x="80" y="86" width="6" height="10" rx="2" fill="${Oe}"/>`},{kind:"armchair",name:"Armchair",cat:"furniture",w:150,svg:`${Re}<rect x="18" y="20" width="64" height="50" rx="20" fill="#8ecae6" ${T}/><rect x="6" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${T}/><rect x="72" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${T}/><rect x="24" y="58" width="52" height="24" rx="10" fill="#b8e0f2" ${T}/><rect x="20" y="86" width="6" height="10" rx="2" fill="${Oe}"/><rect x="74" y="86" width="6" height="10" rx="2" fill="${Oe}"/>`},{kind:"bed",name:"Bed",cat:"furniture",w:300,svg:`${Re}<rect x="4" y="22" width="18" height="72" rx="8" fill="#c99366" ${T}/><rect x="80" y="44" width="16" height="50" rx="7" fill="#c99366" ${T}/><rect x="14" y="54" width="76" height="30" rx="10" fill="#fff" ${T}/><rect x="40" y="50" width="54" height="36" rx="12" fill="#a78bfa" ${T}/><circle cx="56" cy="64" r="3" fill="#fff"/><circle cx="72" cy="72" r="3" fill="#fff"/><circle cx="84" cy="60" r="3" fill="#fff"/><rect x="18" y="42" width="24" height="16" rx="8" fill="#fde2e4" ${T}/>`},{kind:"table",name:"Table",cat:"furniture",w:200,svg:`${Re}<rect x="4" y="30" width="92" height="14" rx="7" fill="#f4a261" ${T}/><rect x="14" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${T}/><rect x="76" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${T}/><path d="M8 40 h84" stroke="#fff" stroke-width="2" opacity=".5"/>`},{kind:"chair",name:"Chair",cat:"furniture",w:100,svg:`${Re}<rect x="22" y="6" width="56" height="50" rx="14" fill="#90e0a8" ${T}/><rect x="16" y="52" width="68" height="14" rx="7" fill="#5cc985" ${T}/><rect x="22" y="64" width="9" height="32" rx="4" fill="#5cc985" ${T}/><rect x="69" y="64" width="9" height="32" rx="4" fill="#5cc985" ${T}/><circle cx="50" cy="30" r="8" fill="#fff" opacity=".6"/>`},{kind:"lamp",name:"Lamp",cat:"furniture",w:90,svg:`${Re}<path d="M24 40 L34 6 H66 L76 40 Z" fill="#ffd166" ${T}/><rect x="46" y="40" width="8" height="48" rx="4" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="92" rx="22" ry="6" fill="#b388d6" ${T}/><circle cx="44" cy="20" r="3" fill="#fff" opacity=".8"/>`},{kind:"fridge",name:"Fridge",cat:"furniture",w:150,svg:`${Re}<rect x="16" y="4" width="68" height="90" rx="14" fill="#bde0fe" ${T}/><path d="M16 38 H84" ${T}/><rect x="70" y="14" width="5" height="16" rx="2" fill="${Oe}"/><rect x="70" y="46" width="5" height="22" rx="2" fill="${Oe}"/><circle cx="32" cy="22" r="5" fill="#ff8fab" ${T}/><rect x="28" y="54" width="12" height="12" rx="3" fill="#ffd166" ${T}/>`},{kind:"stove",name:"Stove",cat:"furniture",w:170,svg:`${Re}<rect x="8" y="26" width="84" height="68" rx="12" fill="#ffadad" ${T}/><rect x="8" y="18" width="84" height="14" rx="6" fill="#ffd6a5" ${T}/><rect x="20" y="46" width="60" height="36" rx="8" fill="#5a3d5c" opacity=".85"/><rect x="26" y="52" width="48" height="8" rx="4" fill="#fff" opacity=".25"/><circle cx="22" cy="38" r="3" fill="${Oe}"/><circle cx="36" cy="38" r="3" fill="${Oe}"/><circle cx="78" cy="38" r="3" fill="${Oe}"/>`},{kind:"bookshelf",name:"Shelf",cat:"furniture",w:170,svg:`${Re}<rect x="10" y="4" width="80" height="90" rx="10" fill="#d4a373" ${T}/><path d="M10 34 H90 M10 64 H90" ${T}/><rect x="18" y="12" width="8" height="22" rx="2" fill="#ff8fab" ${T}/><rect x="28" y="16" width="8" height="18" rx="2" fill="#8ecae6" ${T}/><rect x="38" y="12" width="8" height="22" rx="2" fill="#ffd166" ${T}/><rect x="60" y="42" width="8" height="22" rx="2" fill="#90e0a8" ${T}/><rect x="70" y="46" width="8" height="18" rx="2" fill="#c9a0dc" ${T}/><circle cx="34" cy="80" r="8" fill="#ffadad" ${T}/>`},{kind:"tub",name:"Bathtub",cat:"furniture",w:240,svg:`${Re}<circle cx="30" cy="40" r="7" fill="#bde0fe" ${T}/><circle cx="44" cy="34" r="9" fill="#e0f2ff" ${T}/><circle cx="60" cy="40" r="7" fill="#bde0fe" ${T}/><path d="M4 48 H96 V62 Q96 90 70 90 H30 Q4 90 4 62 Z" fill="#fff" ${T}/><rect x="2" y="44" width="96" height="10" rx="5" fill="#ffc8dd" ${T}/><rect x="22" y="88" width="8" height="8" rx="2" fill="${Oe}"/><rect x="70" y="88" width="8" height="8" rx="2" fill="${Oe}"/>`},{kind:"rug",name:"Rug",cat:"decor",w:320,svg:`<ellipse cx="50" cy="82" rx="48" ry="14" fill="#ffc8dd" ${T}/><ellipse cx="50" cy="82" rx="34" ry="9" fill="#bde0fe" ${T}/><ellipse cx="50" cy="82" rx="18" ry="4.5" fill="#fff" ${T}/>`},{kind:"picture",name:"Picture",cat:"decor",w:130,wall:!0,svg:`<rect x="10" y="20" width="80" height="64" rx="8" fill="#ffd166" ${T}/><rect x="18" y="28" width="64" height="48" rx="4" fill="#bde0fe"/><circle cx="66" cy="40" r="7" fill="#fff3b0"/><path d="M18 76 L38 50 L52 64 L62 54 L82 76 Z" fill="#90e0a8" ${T}/>`},{kind:"window",name:"Window",cat:"decor",w:180,wall:!0,svg:`<rect class="winGlass" x="12" y="8" width="76" height="76" rx="38" fill="#a2d2ff" ${T}/><g class="winDay"><circle cx="34" cy="32" r="8" fill="#fff" opacity=".7"/></g><g class="winNight"><circle cx="62" cy="28" r="7" fill="#fff6d8"/><circle cx="28" cy="24" r="1.4" fill="#fff"/><circle cx="44" cy="20" r="1.1" fill="#fff"/><circle cx="70" cy="42" r="1.2" fill="#fff"/><circle cx="36" cy="46" r="1" fill="#fff"/></g><path d="M50 8 V84 M12 50 H88" ${T}/><path d="M4 8 Q20 40 10 90 M96 8 Q80 40 90 90" stroke="#ff8fab" stroke-width="9" fill="none" stroke-linecap="round"/>`},{kind:"clock",name:"Clock",cat:"decor",w:90,wall:!0,svg:`<circle cx="50" cy="50" r="38" fill="#fff" ${T}/><circle cx="50" cy="50" r="30" fill="#fff3b0"/><path d="M50 50 V28 M50 50 L64 58" ${T}/><circle cx="50" cy="50" r="3" fill="${Oe}"/>${tr(30,70,66)}`},{kind:"stars",name:"Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M30 20 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2z" fill="#ffd166" ${T}/><path d="M70 40 l4 8 9 1 -6 6 1 9 -8 -4 -8 4 1 -9 -6 -6 9 -1z" fill="#ffadad" ${T}/><path d="M40 66 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="#a2d2ff" ${T}/>`},{kind:"balloon",name:"Balloons",cat:"decor",w:110,svg:`<path d="M38 52 Q44 74 50 96 M64 46 Q58 72 50 96" stroke="${Oe}" stroke-width="2" fill="none"/><ellipse cx="36" cy="32" rx="18" ry="22" fill="#ff8fab" ${T}/><ellipse cx="66" cy="28" rx="18" ry="22" fill="#a2d2ff" ${T}/><ellipse cx="30" cy="24" rx="4" ry="7" fill="#fff" opacity=".6"/>`},{kind:"teddy",name:"Teddy",cat:"decor",w:100,svg:`${Re}<circle cx="26" cy="22" r="10" fill="#d4a373" ${T}/><circle cx="74" cy="22" r="10" fill="#d4a373" ${T}/><ellipse cx="50" cy="72" rx="28" ry="24" fill="#d4a373" ${T}/><circle cx="50" cy="38" r="26" fill="#e6b88a" ${T}/>${Ao(40,60,36)}<ellipse cx="50" cy="48" rx="8" ry="6" fill="#fff3e0"/><circle cx="50" cy="46" r="2.5" fill="${Oe}"/>${tr(32,68,46)}`},{kind:"ball",name:"Ball",cat:"decor",w:70,svg:`${Re}<circle cx="50" cy="58" r="36" fill="#ffd166" ${T}/><path d="M18 46 Q50 66 82 46 M26 82 Q50 60 74 82" stroke="#ff7096" stroke-width="7" fill="none"/>`},{kind:"tv",name:"TV",cat:"decor",w:170,svg:`${Re}<rect x="6" y="14" width="88" height="62" rx="14" fill="#c9a0dc" ${T}/><rect x="16" y="22" width="68" height="46" rx="8" fill="#a2d2ff"/><path d="M30 6 L44 14 M70 6 L56 14" ${T}/><rect x="36" y="78" width="28" height="16" rx="4" fill="#b388d6" ${T}/>${Ao(42,58,42)}<path d="M44 52 q6 5 12 0" ${T} fill="none"/>`},{kind:"plant",name:"Plant",cat:"plants",w:110,svg:`${Re}<ellipse cx="34" cy="38" rx="12" ry="26" fill="#74c69d" ${T} transform="rotate(-25 34 38)"/><ellipse cx="66" cy="38" rx="12" ry="26" fill="#52b788" ${T} transform="rotate(25 66 38)"/><ellipse cx="50" cy="30" rx="12" ry="28" fill="#95d5b2" ${T}/><path d="M24 62 H76 L70 94 H30 Z" fill="#ff9f68" ${T}/><rect x="20" y="58" width="60" height="10" rx="5" fill="#ffb385" ${T}/>`},{kind:"cactus",name:"Cactus",cat:"plants",w:80,svg:`${Re}<rect x="36" y="12" width="28" height="64" rx="14" fill="#80ed99" ${T}/><path d="M36 50 H24 a8 8 0 0 1 -8 -8 V34" fill="none" stroke="${Oe}" stroke-width="3.5"/><rect x="12" y="26" width="12" height="22" rx="6" fill="#80ed99" ${T}/><circle cx="50" cy="12" r="6" fill="#ff8fab" ${T}/>${Ao(44,56,40)}<path d="M28 74 H72 L66 96 H34 Z" fill="#c9a0dc" ${T}/>`},{kind:"flowers",name:"Flowers",cat:"plants",w:90,svg:`${Re}<path d="M50 70 V30 M50 60 Q30 50 30 30 M50 60 Q70 50 70 30" stroke="#52b788" stroke-width="4" fill="none"/><circle cx="50" cy="26" r="10" fill="#ff8fab" ${T}/><circle cx="30" cy="28" r="9" fill="#ffd166" ${T}/><circle cx="70" cy="28" r="9" fill="#a2d2ff" ${T}/><circle cx="50" cy="26" r="3" fill="#fff"/><path d="M32 66 H68 L62 96 H38 Z" fill="#a2d2ff" ${T}/>`},{kind:"tree",name:"Mini Tree",cat:"plants",w:140,svg:`${Re}<rect x="44" y="54" width="12" height="30" rx="4" fill="#b07d54" ${T}/><circle cx="50" cy="36" r="30" fill="#52b788" ${T}/><circle cx="38" cy="30" r="5" fill="#ff8fab"/><circle cx="62" cy="40" r="5" fill="#ff8fab"/><circle cx="52" cy="22" r="5" fill="#ff8fab"/><path d="M28 80 H72 L66 96 H34 Z" fill="#ffd166" ${T}/>`},{kind:"cake",name:"Cake",cat:"food",w:100,svg:`<rect x="16" y="50" width="68" height="40" rx="10" fill="#ffc8dd" ${T}/><path d="M16 58 q8 10 17 0 q8 10 17 0 q8 10 17 0 q8 10 17 0" fill="#fff" ${T}/><rect x="46" y="28" width="8" height="22" rx="3" fill="#a2d2ff" ${T}/><path d="M50 14 q6 8 0 12 q-6 -4 0 -12" fill="#ffd166" ${T}/><ellipse cx="50" cy="92" rx="40" ry="5" fill="#fff" ${T}/>`},{kind:"apple",name:"Apple",cat:"food",w:60,svg:`<path d="M50 30 C20 18 8 50 22 74 C32 92 44 90 50 86 C56 90 68 92 78 74 C92 50 80 18 50 30 Z" fill="#ff6b6b" ${T}/><path d="M50 30 Q52 16 58 10" ${T} fill="none"/><ellipse cx="64" cy="18" rx="9" ry="5" fill="#80ed99" ${T} transform="rotate(-20 64 18)"/><ellipse cx="34" cy="46" rx="5" ry="9" fill="#fff" opacity=".5"/>`},{kind:"donut",name:"Donut",cat:"food",w:70,svg:`<circle cx="50" cy="58" r="36" fill="#e9c46a" ${T}/><path d="M18 52 Q20 26 50 24 Q80 26 82 52 Q76 62 66 56 Q56 66 46 58 Q34 66 24 58 Z" fill="#ff8fab" ${T}/><circle cx="50" cy="52" r="10" fill="#fff" ${T}/><rect x="30" y="36" width="6" height="3" rx="1.5" fill="#a2d2ff" transform="rotate(30 33 37)"/><rect x="64" y="38" width="6" height="3" rx="1.5" fill="#ffd166"/><rect x="56" y="30" width="6" height="3" rx="1.5" fill="#80ed99" transform="rotate(-30 59 31)"/>`},{kind:"pizza",name:"Pizza",cat:"food",w:80,svg:`<path d="M10 20 Q50 6 90 20 L50 94 Z" fill="#ffd166" ${T}/><path d="M10 20 Q50 6 90 20 L86 28 Q50 16 14 28 Z" fill="#e9a96a" ${T}/><circle cx="42" cy="38" r="7" fill="#ff6b6b" ${T}/><circle cx="62" cy="44" r="6" fill="#ff6b6b" ${T}/><circle cx="50" cy="62" r="6" fill="#ff6b6b" ${T}/>`},{kind:"juice",name:"Juice",cat:"food",w:55,svg:`<path d="M24 26 H76 L70 92 H30 Z" fill="#fff" ${T}/><path d="M27 44 H73 L70 92 H30 Z" fill="#ffb347"/><path d="M24 26 H76 L70 92 H30 Z" fill="none" ${T}/><path d="M58 30 L66 4" stroke="#ff8fab" stroke-width="6" stroke-linecap="round"/><circle cx="40" cy="60" r="4" fill="#fff" opacity=".6"/>`},{kind:"cat",name:"Toy cat",cat:"pets",w:110,svg:`${Re}<path d="M78 80 Q98 70 90 50" stroke="#ffb347" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="30" ry="20" fill="#ffb347" ${T}/><path d="M22 30 L26 8 L40 22 M78 30 L74 8 L60 22" fill="#ffb347" ${T}/><circle cx="50" cy="42" r="28" fill="#ffc46b" ${T}/>${Ao(40,60,40)}<path d="M46 50 q4 4 8 0" ${T} fill="none"/>${tr(32,68,50)}`},{kind:"dog",name:"Puppy",cat:"pets",w:120,svg:`${Re}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#f5ebe0" ${T}/><circle cx="50" cy="42" r="28" fill="#fff" ${T}/><ellipse cx="22" cy="44" rx="10" ry="18" fill="#b07d54" ${T}/><ellipse cx="78" cy="44" rx="10" ry="18" fill="#b07d54" ${T}/><circle cx="60" cy="34" r="8" fill="#e6b88a" opacity=".7"/>${Ao(40,60,40)}<ellipse cx="50" cy="52" rx="5" ry="4" fill="${Oe}"/><path d="M50 56 v6" ${T}/>`},{kind:"bunny",name:"Bunny",cat:"pets",w:90,svg:`${Re}<ellipse cx="36" cy="22" rx="8" ry="20" fill="#fff" ${T}/><ellipse cx="64" cy="22" rx="8" ry="20" fill="#fff" ${T}/><ellipse cx="36" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="64" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="50" cy="76" rx="28" ry="20" fill="#fff" ${T}/><circle cx="50" cy="52" r="22" fill="#fff" ${T}/>${Ao(42,58,50)}<path d="M47 58 l3 3 3 -3" ${T} fill="none"/>${tr(36,64,58)}`},{kind:"fish",name:"Fish Bowl",cat:"pets",w:100,svg:`${Re}<circle cx="50" cy="54" r="40" fill="#cdeffd" ${T}/><path d="M14 46 H86" stroke="#8ecae6" stroke-width="3"/><path d="M60 64 l14 -8 v16 z" fill="#ff9f68" ${T}/><ellipse cx="46" cy="64" rx="16" ry="11" fill="#ffb347" ${T}/><circle cx="40" cy="62" r="2.5" fill="${Oe}"/><circle cx="32" cy="38" r="3" fill="#fff" opacity=".8"/><rect x="24" y="10" width="52" height="8" rx="4" fill="#cdeffd" ${T}/>`},{kind:"kennel",name:"Dog Kennel",cat:"pets",w:210,h:175,holdable:!1,vb:"0 0 120 100",svg:`<ellipse cx="60" cy="97" rx="48" ry="3.2" fill="#000" opacity=".12"/><path d="M14 50 L60 12 L106 50 Z" fill="#ff8fab" ${T}/><path d="M28 46 L60 22 L92 46 Z" fill="#ffd6e4"/><rect x="20" y="46" width="80" height="50" rx="10" fill="#fff6ea" ${T}/><path d="M20 56 H100" stroke="#ffc2d4" stroke-width="7"/><path d="M34 96 V58 Q60 36 86 58 V96 Z" fill="#f3e4ff" ${T}/><path d="M40 96 V64 Q60 46 80 64 V96 Z" fill="#ffe8c7"/><circle cx="86" cy="64" r="8" fill="#bde0fe" ${T}/><circle cx="84" cy="62" r="2.2" fill="#fff" opacity=".9"/><path d="M28 62 l2.4 2.4 2.4-2.4 2.4 2.4 2.4-2.4-2.4-2.4-2.4 2.4z" fill="#ff8fab" ${T}/><circle cx="30" cy="90" r="3.2" fill="#fff" ${T}/><rect x="32" y="88.4" width="14" height="3.4" rx="1.7" fill="#fff" ${T}/><circle cx="48" cy="90" r="3.2" fill="#fff" ${T}/>`},{kind:"cat-tower",name:"Cat Tower",cat:"pets",w:150,h:225,holdable:!1,vb:"0 0 100 150",svg:`<ellipse cx="50" cy="146" rx="36" ry="3.4" fill="#000" opacity=".12"/><rect x="44" y="30" width="12" height="104" rx="6" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="136" rx="34" ry="10" fill="#ffc8dd" ${T}/><ellipse cx="50" cy="132" rx="26" ry="6" fill="#fff6ea"/><ellipse cx="50" cy="102" rx="30" ry="8" fill="#bde0fe" ${T}/><ellipse cx="50" cy="98" rx="22" ry="4" fill="#fff" opacity=".8"/><ellipse cx="50" cy="64" rx="28" ry="8" fill="#ffd166" ${T}/><ellipse cx="50" cy="60" rx="20" ry="4" fill="#fff6d0"/><circle cx="50" cy="22" r="8" fill="#ff8fab" ${T}/><circle cx="47" cy="19" r="2.2" fill="#fff" opacity=".75"/><g class="dangle"><circle cx="22" cy="126" r="8" fill="#ffb3c6" ${T}/><path d="M22 126 q12 5 7 16" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/></g><circle cx="80" cy="92" r="3.4" fill="#ffd166" ${T}/>`},{kind:"vanity",name:"Vanity",cat:"furniture",w:230,svg:`${Re}<ellipse cx="50" cy="26" rx="24" ry="22" fill="#fff" ${T}/><ellipse cx="50" cy="26" rx="18" ry="16" fill="#cdeffd"/><path d="M38 18 l6 -6 M42 26 l10 -10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="12" r="3" fill="#ffd166" ${T}/><circle cx="74" cy="12" r="3" fill="#ffd166" ${T}/><rect x="6" y="48" width="88" height="14" rx="7" fill="#ffc8dd" ${T}/><rect x="10" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${T}/><rect x="62" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${T}/><circle cx="24" cy="75" r="3" fill="${Oe}"/><circle cx="76" cy="75" r="3" fill="${Oe}"/><rect x="12" y="90" width="6" height="7" rx="2" fill="${Oe}"/><rect x="82" y="90" width="6" height="7" rx="2" fill="${Oe}"/>`},{kind:"stool",name:"Vanity Stool",cat:"furniture",w:90,svg:`${Re}<ellipse cx="50" cy="48" rx="34" ry="14" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="44" rx="28" ry="9" fill="#e4ccf2"/><path d="M28 58 L22 94 M72 58 L78 94 M50 62 V94" ${T}/><ellipse cx="50" cy="78" rx="22" ry="4" fill="none" ${T}/>`},{kind:"perfume",name:"Perfume",cat:"decor",w:50,svg:`<rect x="40" y="8" width="20" height="14" rx="5" fill="#ffd166" ${T}/><rect x="46" y="20" width="8" height="10" fill="#fff" ${T}/><path d="M20 50 Q20 30 50 30 Q80 30 80 50 V80 Q80 94 66 94 H34 Q20 94 20 80 Z" fill="#ff8fab" ${T}/><ellipse cx="36" cy="52" rx="5" ry="10" fill="#fff" opacity=".6"/><path d="M50 56 l4 8 8 1 -6 6 2 8 -8 -4 -8 4 2 -8 -6 -6 8 -1z" fill="#fff" opacity=".8"/>`},{kind:"polish",name:"Nail Polish",cat:"decor",w:40,svg:`<rect x="38" y="4" width="24" height="40" rx="8" fill="${Oe}"/><path d="M24 54 Q24 42 36 42 H64 Q76 42 76 54 V84 Q76 96 64 96 H36 Q24 96 24 84 Z" fill="#b388d6" ${T}/><ellipse cx="38" cy="62" rx="5" ry="12" fill="#fff" opacity=".55"/>`},{kind:"hairdryer",name:"Hair Dryer",cat:"decor",w:90,svg:`<path d="M60 52 L70 92 Q70 96 64 96 H58 Q52 96 52 90 L46 56 Z" fill="#a2d2ff" ${T}/><rect x="6" y="20" width="62" height="40" rx="20" fill="#bde0fe" ${T}/><ellipse cx="82" cy="40" rx="12" ry="20" fill="#ffc8dd" ${T}/><ellipse cx="82" cy="40" rx="6" ry="11" fill="#fff" ${T}/><circle cx="24" cy="40" r="7" fill="#fff" opacity=".7"/>`},{kind:"mirror",name:"Mirror",cat:"decor",w:120,wall:!0,svg:`<path d="M50 6 C74 6 88 24 88 50 C88 76 72 94 50 94 C28 94 12 76 12 50 C12 24 26 6 50 6 Z" fill="#ffd166" ${T}/><ellipse cx="50" cy="50" rx="30" ry="36" fill="#e0f4ff" ${T}/><path d="M36 34 l10 -10 M36 46 l20 -20" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="6" r="6" fill="#ff8fab" ${T}/>`}],zs={sofa:["living"],armchair:["living"],lamp:["living","bedroom"],tv:["living"],rug:["living","bedroom"],picture:["living","bedroom"],bookshelf:["living","bedroom"],bed:["bedroom"],teddy:["bedroom"],stars:["bedroom"],tub:["bedroom"],balloon:["any"],clock:["any"],window:["any"],ball:["any"],vanity:["salon"],stool:["salon"],perfume:["salon"],polish:["salon"],hairdryer:["salon"],mirror:["salon","bedroom"],fridge:["kitchen"],stove:["kitchen"],table:["kitchen","living"],chair:["kitchen","living"]};for(const e of wg)zs[e.kind]=["nursery"];for(const e of Ta)zs[e.kind]=["backyard"];for(const e of _g)zs[e.kind]=["bathroom"];zs["floor-cushion"]=["living"];zs["story-pillow"]=["bedroom"];zs["berry-basket"]=["kitchen"];zs["ribbon-tray"]=["salon"];En.push(...wg,...Ta,..._g,...R5);for(const e of En)e.rooms=zs[e.kind]??(["food"].includes(e.cat)?["kitchen"]:["any"]);const C5=new Set(["rug","tv","tree"]);for(const e of En)e.holdable??=!e.wall&&e.cat!=="furniture"&&e.w<=150&&!C5.has(e.kind);const I5=[{kind:"ranch-egg",name:"Fresh Egg",cat:"ranch",w:50,holdable:!0,rooms:["any"],svg:`${Re}<path d="M50 30 C70 30 80 62 80 74 C80 90 66 96 50 96 C34 96 20 90 20 74 C20 62 30 30 50 30 Z" fill="#fff6e6" ${T}/><ellipse cx="40" cy="52" rx="6" ry="9" fill="#fff"/>`},{kind:"ranch-carrot",name:"Garden Carrot",cat:"ranch",w:70,holdable:!0,rooms:["any"],svg:`${Re}<path d="M30 40 L78 34 L40 96 Z" fill="#ff922b" ${T}/><path d="M44 50 l10 -2 M42 64 l8 -2 M44 78 l6 -1" ${T}/><path d="M72 36 Q80 14 92 14 M72 36 Q68 14 76 4 M72 36 Q90 30 96 36" fill="none" stroke="#40c057" stroke-width="7" stroke-linecap="round"/>`},{kind:"ranch-bouquet",name:"Ranch Flowers",cat:"ranch",w:80,holdable:!0,rooms:["any"],svg:`${Re}<path d="M50 94 L40 50 M50 94 L50 44 M50 94 L62 50" stroke="#40c057" stroke-width="5" stroke-linecap="round"/><path d="M36 78 L64 78 L56 96 L44 96 Z" fill="#c9a0dc" ${T}/>${[[38,40,"#ff8fab"],[50,30,"#ffd43b"],[64,40,"#74c0fc"],[44,52,"#ff922b"],[58,52,"#c9a0dc"]].map(([e,t,n])=>`<circle cx="${e}" cy="${t}" r="9" fill="${n}" ${T}/><circle cx="${e}" cy="${t}" r="3" fill="#fff3b0"/>`).join("")}`}];En.push(...Wx,...q4,...I5);const de=Object.fromEntries(En.map(e=>[e.kind,e])),Ni=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Xe=e=>e.h??e.w,Wf=e=>e.img?`<img class="packimg" src="${Ni(e.img)}" alt="${Ni(e.name)}" draggable="false" />`:`<svg viewBox="${e.vb??"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg">${e.svg}</svg>`,Qt=(e,t=!1)=>{const n=Yn()?Kn(e.kind):void 0;if(!n)return Wf(e);const s=t&&!e.wall?'<i class="artshade" aria-hidden="true"></i>':"",o=e.kind==="window"?'<i class="artnight" aria-hidden="true"></i>':"";return`${s}${o}<img class="packimg artimg" data-kind="${Ni(e.kind)}" src="${Ni(n)}" alt="${Ni(e.name)}" draggable="false" />`},O5='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="22" width="56" height="56" rx="14" fill="#fff6ea" stroke="#5a3d5c" stroke-width="4"/></svg>',B5=(e,t)=>e.img&&/\.webp(?:$|\?)/i.test(e.img)?O5:Wf(e);let Ih=!1;const z5='<svg class="imgmiss" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="20" y="20" width="60" height="60" rx="16" fill="#fff6ea" stroke="#5a3d5c" stroke-width="4" stroke-dasharray="9 7" opacity=".55"/></svg>',D5=e=>new Promise((t,n)=>{const s=new Image;s.onload=()=>t(),s.onerror=()=>n(new Error("image failed")),s.src=e});function H5(e,t,n,s){const[o,...i]=Ss;new Promise(a=>setTimeout(a,o)).then(()=>K0(()=>D5(n),i)).then(()=>{if(!e.isConnected||!Yn()||Kn(t.kind)!==n)return;const a=document.createElement("div");a.innerHTML=Qt(t,s),e.replaceWith(...Array.from(a.childNodes))},()=>{})}function W5(){Ih||typeof window>"u"||(Ih=!0,document.addEventListener("load",e=>{const t=e.target;t instanceof HTMLImageElement&&t.classList.contains("imgwait")&&t.classList.remove("imgwait")},!0),window.addEventListener("error",e=>{const t=e.target;if(!(t instanceof HTMLImageElement)||t.dataset.fell==="1")return;if(t.classList.contains("artimg")){const o=de[t.dataset.kind||""];if(!o)return;t.dataset.fell="1";const i=t.getAttribute("src")||"",a=!!t.parentElement?.querySelector(".artshade");t.parentElement?.querySelector(".artshade")?.remove(),t.parentElement?.querySelector(".artnight")?.remove();const r=document.createElement("div");r.innerHTML=Wf(o);const l=r.firstElementChild;l&&(t.replaceWith(l),i&&H5(l,o,i,a));return}if(!t.classList.contains("packimg"))return;if(c4(t)){t.classList.add("imgwait");return}t.dataset.fell="1";const n=document.createElement("div");n.innerHTML=z5;const s=n.firstElementChild;s&&t.replaceWith(s)},!0))}const $g="/cozy-preview/assets/cat-calico-nap-YtfdpbDg.webp",V5=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),xg="/cozy-preview/assets/cat-calico-sit-D1667wmu.webp",U5=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),Mg="/cozy-preview/assets/cat-calico-stand-3uEzEb3G.webp",Q5=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),Lg="/cozy-preview/assets/cat-smokey-nap-lOaTkxI0.webp",N5=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),Eg="/cozy-preview/assets/cat-smokey-sit-_C3gdGqG.webp",q5=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),Sg="/cozy-preview/assets/cat-smokey-stand-Cdf8P9_H.webp",F5=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),Tg="/cozy-preview/assets/cat-tabby-nap-B93Gst5Y.webp",j5=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),Pg="/cozy-preview/assets/cat-tabby-sit-Ww7lKHQz.webp",Z5=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),Ag="/cozy-preview/assets/cat-tabby-stand-DRgSjSXE.webp",G5=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),Rg="/cozy-preview/assets/cat-tuxedo-nap-BVE8WH2l.webp",Y5=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),Cg="/cozy-preview/assets/cat-tuxedo-sit-CDRf8L3Y.webp",K5=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),Ig="/cozy-preview/assets/cat-tuxedo-stand-D1hHQgPJ.webp",X5=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),Og="/cozy-preview/assets/dog-dachshund-sit-CSdaeXeM.webp",J5=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),Bg="/cozy-preview/assets/dog-dachshund-sleep-D51MuT-5.webp",eM=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),zg="/cozy-preview/assets/dog-dachshund-stand-CTaAEwG4.webp",tM=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),Dg="/cozy-preview/assets/dog-golden-sit-DFrpj82v.webp",nM=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),Hg="/cozy-preview/assets/dog-golden-sleep-CNdabQUH.webp",sM=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),Wg="/cozy-preview/assets/dog-golden-stand-4x9IvGBb.webp",oM=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),Vg="/cozy-preview/assets/dog-poodle-sit-C6jNzYen.webp",iM=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),Ug="/cozy-preview/assets/dog-poodle-sleep-BQs2iX06.webp",aM=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),Qg="/cozy-preview/assets/dog-poodle-stand-CLU8S245.webp",rM=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"})),Ng="/cozy-preview/assets/dog-pup-sit-Mv9ktTAi.webp",lM=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),qg="/cozy-preview/assets/dog-pup-sleep-M8R5iFqC.webp",cM=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),Fg="/cozy-preview/assets/dog-pup-stand-0TcMABgh.webp",dM=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),jg="/cozy-preview/assets/dog-spotty-sit-ogWfm1-x.webp",fM=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),Zg="/cozy-preview/assets/dog-spotty-sleep-d8a6Ckq3.webp",pM=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),Gg="/cozy-preview/assets/dog-spotty-stand-BR88_RXw.webp",hM=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),Yg="/cozy-preview/assets/animal-bunny-C8IjPVne.webp",uM=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),Kg="/cozy-preview/assets/animal-cow-BNE4y3fn.webp",gM=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),Xg="/cozy-preview/assets/animal-goat-BEXFo23D.webp",mM=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),Jg="/cozy-preview/assets/animal-piglet-CITF8sJ9.webp",yM=Object.freeze(Object.defineProperty({__proto__:null,default:Jg},Symbol.toStringTag,{value:"Module"})),em="/cozy-preview/assets/animal-sheep-DxcQ96U2.webp",wM=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),tm="/cozy-preview/assets/apple-tree-ztWRqXgk.webp",bM=Object.freeze(Object.defineProperty({__proto__:null,default:tm},Symbol.toStringTag,{value:"Module"})),nm="/cozy-preview/assets/basket-D0ZYb-9_.webp",vM=Object.freeze(Object.defineProperty({__proto__:null,default:nm},Symbol.toStringTag,{value:"Module"})),sm="/cozy-preview/assets/hen-house-BMb6vLOg.webp",kM=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),om="/cozy-preview/assets/horse-chestnut-bare-ClpQBHmC.webp",_M=Object.freeze(Object.defineProperty({__proto__:null,default:om},Symbol.toStringTag,{value:"Module"})),im="/cozy-preview/assets/horse-chestnut-saddle-DjGl6zGL.webp",$M=Object.freeze(Object.defineProperty({__proto__:null,default:im},Symbol.toStringTag,{value:"Module"})),am="/cozy-preview/assets/horse-midnight-bare-CN96wJg8.webp",xM=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),rm="/cozy-preview/assets/horse-midnight-saddle-Zoz0ZHm8.webp",MM=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"})),lm="/cozy-preview/assets/horse-rainbow-bare-oUM2b_lJ.webp",LM=Object.freeze(Object.defineProperty({__proto__:null,default:lm},Symbol.toStringTag,{value:"Module"})),cm="/cozy-preview/assets/horse-rainbow-saddle-B6LiByBH.webp",EM=Object.freeze(Object.defineProperty({__proto__:null,default:cm},Symbol.toStringTag,{value:"Module"})),dm="/cozy-preview/assets/horse-snowy-bare-DvYLjfaE.webp",SM=Object.freeze(Object.defineProperty({__proto__:null,default:dm},Symbol.toStringTag,{value:"Module"})),fm="/cozy-preview/assets/horse-snowy-saddle-K4Sm_Hpq.webp",TM=Object.freeze(Object.defineProperty({__proto__:null,default:fm},Symbol.toStringTag,{value:"Module"})),pm="/cozy-preview/assets/horse-sunny-bare-zPTIKgZH.webp",PM=Object.freeze(Object.defineProperty({__proto__:null,default:pm},Symbol.toStringTag,{value:"Module"})),hm="/cozy-preview/assets/horse-sunny-saddle-M4nhkGvO.webp",AM=Object.freeze(Object.defineProperty({__proto__:null,default:hm},Symbol.toStringTag,{value:"Module"})),um="/cozy-preview/assets/tractor-DSDXT0Gz.webp",RM=Object.freeze(Object.defineProperty({__proto__:null,default:um},Symbol.toStringTag,{value:"Module"})),CM={"cat-calico-stand":[1.018,1.009],"cat-smokey-sit":[1.063,1.063],"cat-smokey-stand":[1.032,1.009],"cat-tabby-stand":[1.027,1.009]},IM=CM;function gm(e){const t=IM[e];return t?` style="--fx:${t[0]};--fy:${t[1]}"`:""}const OM=Object.assign({"../../assets/art/pets/cat-calico-nap.webp":$g,"../../assets/art/pets/cat-calico-sit.webp":xg,"../../assets/art/pets/cat-calico-stand.webp":Mg,"../../assets/art/pets/cat-smokey-nap.webp":Lg,"../../assets/art/pets/cat-smokey-sit.webp":Eg,"../../assets/art/pets/cat-smokey-stand.webp":Sg,"../../assets/art/pets/cat-tabby-nap.webp":Tg,"../../assets/art/pets/cat-tabby-sit.webp":Pg,"../../assets/art/pets/cat-tabby-stand.webp":Ag,"../../assets/art/pets/cat-tuxedo-nap.webp":Rg,"../../assets/art/pets/cat-tuxedo-sit.webp":Cg,"../../assets/art/pets/cat-tuxedo-stand.webp":Ig,"../../assets/art/pets/dog-dachshund-sit.webp":Og,"../../assets/art/pets/dog-dachshund-sleep.webp":Bg,"../../assets/art/pets/dog-dachshund-stand.webp":zg,"../../assets/art/pets/dog-golden-sit.webp":Dg,"../../assets/art/pets/dog-golden-sleep.webp":Hg,"../../assets/art/pets/dog-golden-stand.webp":Wg,"../../assets/art/pets/dog-poodle-sit.webp":Vg,"../../assets/art/pets/dog-poodle-sleep.webp":Ug,"../../assets/art/pets/dog-poodle-stand.webp":Qg,"../../assets/art/pets/dog-pup-sit.webp":Ng,"../../assets/art/pets/dog-pup-sleep.webp":qg,"../../assets/art/pets/dog-pup-stand.webp":Fg,"../../assets/art/pets/dog-spotty-sit.webp":jg,"../../assets/art/pets/dog-spotty-sleep.webp":Zg,"../../assets/art/pets/dog-spotty-stand.webp":Gg}),BM=Object.assign({"../../assets/art/ranch/animal-bunny.webp":Yg,"../../assets/art/ranch/animal-cow.webp":Kg,"../../assets/art/ranch/animal-goat.webp":Xg,"../../assets/art/ranch/animal-piglet.webp":Jg,"../../assets/art/ranch/animal-sheep.webp":em,"../../assets/art/ranch/apple-tree.webp":tm,"../../assets/art/ranch/basket.webp":nm,"../../assets/art/ranch/hen-house.webp":sm,"../../assets/art/ranch/horse-chestnut-bare.webp":om,"../../assets/art/ranch/horse-chestnut-saddle.webp":im,"../../assets/art/ranch/horse-midnight-bare.webp":am,"../../assets/art/ranch/horse-midnight-saddle.webp":rm,"../../assets/art/ranch/horse-rainbow-bare.webp":lm,"../../assets/art/ranch/horse-rainbow-saddle.webp":cm,"../../assets/art/ranch/horse-snowy-bare.webp":dm,"../../assets/art/ranch/horse-snowy-saddle.webp":fm,"../../assets/art/ranch/horse-sunny-bare.webp":pm,"../../assets/art/ranch/horse-sunny-saddle.webp":hm,"../../assets/art/ranch/tractor.webp":um}),Vf=new Map;for(const[e,t]of Object.entries(OM)){const n=e.split("/").pop().replace(/\.webp$/i,"");Vf.set(n,t)}for(const[e,t]of Object.entries(BM)){const n=e.split("/").pop().replace(/\.webp$/i,"");Vf.set(n,t)}const Oh=["tabby","smokey","tuxedo","calico"],Bh=["pup","poodle","dachshund","golden","spotty"],zh=["goat","sheep","piglet","chicks","bunny","cow"],zM=new Set(["chicks"]),Dh=["chestnut","snowy","midnight","sunny","rainbow"];function Pa(e){return Rf()?Vf.get(e)??null:null}function Aa(e,t="artimg sprite",n=""){return`<img class="${t}" alt="" draggable="false"${n} src="${e}">`}function Ko(e,t,n){const o=`cat-${Oh[e]??Oh[0]}-${t}`,i=Pa(o);return i?Aa(i,"artimg sprite petsprite",gm(o)):n}function fa(e,t,n){const o=`dog-${Bh[e]??Bh[0]}-${t}`,i=Pa(o);return i?Aa(i,"artimg sprite petsprite",gm(o)):n}function Ld(e,t){const n=zh[e]??zh[0];if(zM.has(n))return t;const s=Pa(`animal-${n}`);return s?Aa(s,"artimg sprite ranchsprite"):t}function Uf(e,t,n){const s=Dh[e]??Dh[0],o=Pa(`horse-${s}-${t?"saddle":"bare"}`);return o?Aa(o,"artimg sprite ranchsprite horsesprite"):n}function qi(e,t){const n=Pa(e);return n?Aa(n,"artimg sprite ranchsprite"):t}const Hh=new WeakMap;function DM(e){const t=Hh.get(e);if(t)return t;if(!e.complete||!e.naturalWidth)return null;const n=document.createElement("canvas");n.width=e.naturalWidth,n.height=e.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0});if(!s)return null;try{s.drawImage(e,0,0)}catch{return null}const o=s.getImageData(0,0,n.width,n.height).data;return Hh.set(e,o),o}function HM(e,t,n){const s=e.getBoundingClientRect();if(s.width<1||s.height<1||!e.naturalWidth)return null;let o=(t-s.left)/s.width;const i=(n-s.top)/s.height;e.closest(".flipped")&&(o=1-o);const a=e.naturalWidth,r=e.naturalHeight,l=Math.min(s.width/a,s.height/r),c=a*l,d=r*l,f=(s.width-c)*.5,h=s.height-d,u=(o*s.width-f)/l,y=(i*s.height-h)/l;return u<0||y<0||u>=a||y>=r?null:{x:u,y}}function Qf(e,t,n){const s=DM(e),o=s&&HM(e,t,n);if(!s||!o)return!s;const i=Math.floor(o.x),r=(Math.floor(o.y)*e.naturalWidth+i)*4+3;return s[r]>24}function WM(e,t){const n=[];try{for(let s=0;s<12;s++){const o=document.elementFromPoint(e,t);if(!o)return null;const i=o.closest("img.artimg");if(i&&!Qf(i,e,t)){n.push(i),i.style.pointerEvents="none";continue}return o}return null}finally{for(let s=0;s<n.length;s++)n[s].style.pointerEvents=""}}const VM="var(--line)",UM=1.4,gt='fill="#3a1d3c" opacity=".14"',Ed='fill="#3a1d3c" opacity=".22"',Zt={l:[72,172],r:[128,172]},kn={l:[50,233],r:[150,233]},QM={l:[88,238],r:[112,238]};function O(e=3){return`stroke="${VM}" stroke-width="${(e*UM).toFixed(2)}" stroke-linejoin="round" stroke-linecap="round"`}function E(e){const n=(Math.round(e*10)/10).toFixed(1);return n.endsWith(".0")?n.slice(0,-2):n}function Sd(e,t,n,s,o){const i=o*Math.PI/180,a=e-n,r=t-s,l=Math.cos(i),c=Math.sin(i);return{x:n+a*l-r*c,y:s+a*c+r*l}}function Fi(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),o=(n>>16&255)*(1-t),i=(n>>8&255)*(1-t),a=(n&255)*(1-t);return"#"+s(o)+s(i)+s(a)}function Wh(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),o=n>>16&255,i=n>>8&255,a=n&255;return"#"+s(o+(255-o)*t)+s(i+(255-i)*t)+s(a+(255-a)*t)}function Td(e,t,n,s,o=0){const i=e[0],a=e[1],r=e[0]===t[0]&&e[1]===t[1]?t[0]+.01:t[0],l=t[1],c=r-i,d=l-a,f=Math.hypot(c,d)||1,h=-d/f,u=c/f,y=(i+r)/2+h*o,g=(a+l)/2+u*o,v=n/2,w=s/2,m=(v+w)/2*1.04,b=[i+h*v,a+u*v],_=[r+h*w,l+u*w],P=[r-h*w,l-u*w],$=[i-h*v,a-u*v];return`M${E(b[0])} ${E(b[1])} Q${E(y+h*m)} ${E(g+u*m)} ${E(_[0])} ${E(_[1])} A${E(w)} ${E(w)} 0 0 1 ${E(P[0])} ${E(P[1])} Q${E(y-h*m)} ${E(g-u*m)} ${E($[0])} ${E($[1])} A${E(v)} ${E(v)} 0 0 1 ${E(b[0])} ${E(b[1])} Z`}function Ul(e,t,n,s,o){const i=[],a=(t-e)/s;for(let r=0;r<s;r++){const l=e+r*a,c=l+a;i.push(`Q${E((l+c)/2)} ${E(n+o)} ${E(c)} ${E(n)}`)}return i.join(" ")}function Pd(e,t,n,s,o,i=0){const a=[];for(let r=0;r<s;r++){const l=i+2*Math.PI*r/s,c=i+2*Math.PI*(r+1)/s,d=(l+c)/2,f=e+n*Math.cos(l),h=t+n*Math.sin(l),u=e+n*Math.cos(c),y=t+n*Math.sin(c),g=e+(n+o)*Math.cos(d),v=t+(n+o)*Math.sin(d);r===0&&a.push(`M${E(f)} ${E(h)}`),a.push(`Q${E(g)} ${E(v)} ${E(u)} ${E(y)}`)}return a.join(" ")+" Z"}function Ts(e,t,n,s){const o=e==="arm"?Zt[t]:QM[t],i=e==="arm"?t==="l"?s.armL:s.armR:t==="l"?s.legL:s.legR,a=e==="leg"?t==="l"?s.legLLift:s.legRLift:0,r=i||a?` transform="translate(0 ${E(-a)}) rotate(${E(i)} ${o[0]} ${o[1]})"`:"",c=`<g class="${e} ${t}${e==="arm"?" hang":""}" style="transform-box:view-box;transform-origin:${o[0]}px ${o[1]}px">${n}</g>`;return r?`<g${r}>${c}</g>`:c}const bs="var(--line)";function Bn(e,t=.8,n=2.2){return e.map(s=>`<path d="${s}" fill="none" stroke="var(--hair-shade)" stroke-width="${n}" stroke-linecap="round" opacity="${t}"/>`).join("")}function Ri(e,t=.32){return e.map(n=>`<path d="${n}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity="${t}"/>`).join("")}function os(){return'<path d="M54 72 Q62 44 92 38 Q70 50 63 74 Z" fill="#fff" opacity=".45"/><path d="M60 64 Q70 48 86 42" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/><path d="M104 37 Q130 38 145 58 Q128 46 106 43 Z" fill="#fff" opacity=".3"/><circle cx="72" cy="50" r="2" fill="#fff" opacity=".85"/>'}function Ot(e,t,n){return n?`<path d="${e}" fill="url(#${t}h)"/>`:""}const Vh="M34 112 Q28 28 100 28 Q172 28 166 112 Q164 146 146 156 L54 156 Q36 146 34 112 Z";function qt(e,t){return`<path d="${Vh}" fill="var(--hair)" ${O(3.2)}/>${Ot(Vh,e,t)}`}function Lc(e,t,n,s,o,i,a=10){const r=Pd(e+2,t+3,n,12,7,s+.1),l=Pd(e,t,n-1,12,7,s);let c=`<path d="${r}" fill="var(--hair-shade)" ${O(3.2)}/><path d="${l}" fill="var(--hair)" ${O(3.2)}/>${Ot(l,o,i)}`;for(let d=0;d<a;d++){const f=d*2.5+s,h=(n-6)*Math.sqrt((d+.5)/a),u=e+h*Math.cos(f),y=t+h*Math.sin(f);c+=`<path d="M${E(u-4)} ${E(y+1)} q1 -5 4.5 -4.5 q3.5 1 2.5 4.5" fill="none" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>`,y<t-2&&u<e+6&&(c+=`<path d="M${E(u-2.5)} ${E(y-2.5)} q2 -2 3.5 -1" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>`)}return c+=`<ellipse cx="${E(e-10)}" cy="${E(t-12)}" rx="6" ry="3.4" fill="#fff" opacity=".55" transform="rotate(-35 ${E(e-10)} ${E(t-12)})"/>`,c+=`<path d="M${E(e-16)} ${E(t-6)} Q${E(e-6)} ${E(t-18)} ${E(e+4)} ${E(t-14)}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>`,c}function oo(e,t,n,s=6,o=[],i=7){let a=`<path d="M${e} ${t-6} V${n}" stroke="${bs}" stroke-width="${E(2*s+4.6)}" stroke-linecap="round"/><path d="M${e} ${t-6} V${n}" stroke="var(--hair)" stroke-width="${E(2*s)}" stroke-linecap="round"/>`,r=t,l=0;for(;r<n;){const c=l%2?1:-1;a+=`<path d="M${E(e-c)} ${E(r-4)} Q${E(e+c*s*1.05)} ${E(r-2)} ${E(e+c*s*.55)} ${E(r+4)} Q${E(e)} ${E(r+5.5)} ${E(e-c*1.4)} ${E(r+1)}" fill="none" stroke="var(--hair-shade)" stroke-width="1.7" stroke-linecap="round"/>`,c>0&&(a+=`<path d="M${E(e+1)} ${E(r-2)} q2.2 -.5 3 1.4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>`),r+=i,l++}for(let c=0;c<o.length;c++){const d=o[c];a+=`<rect x="${E(e-6.2)}" y="${d-4}" width="12.4" height="8" rx="2.6" fill="var(--acc)" stroke="${bs}" stroke-width="2"/><rect x="${E(e-4)}" y="${d-2.5}" width="2.6" height="4.5" rx="1" fill="#fff" opacity=".6"/>`}return a+=`<path d="M${e-4} ${n+2} q2 5 4 6 q2 -1 4 -6" fill="var(--hair)" stroke="${bs}" stroke-width="2"/>`,a}function Zr(e,t,n,s=5.5){let o=`<path d="M${e} ${t} V${n}" stroke="${bs}" stroke-width="${E(2*s+4)}" stroke-linecap="round"/><path d="M${e} ${t} V${n}" stroke="var(--hair)" stroke-width="${E(2*s)}" stroke-linecap="round"/>`;for(let i=t+8;i<n;i+=16)o+=`<path d="M${E(e-s*.7)} ${i} Q${e} ${i+5} ${E(e+s*.7)} ${i}" fill="none" stroke="var(--hair-shade)" stroke-width="1.6" opacity=".8"/>`;return o+=`<circle cx="${e}" cy="${n+3}" r="${E(s*.55)}" fill="var(--hair)" stroke="${bs}" stroke-width="2"/>`,o}function Ec(e,t,n,s){return`<path d="${e}" fill="var(--hair)" ${O(3)}/>${Ot(e,t,n)}${Bn(s)}${Ri(s.slice(0,2),.45)}`}function Ro(e,t,n){return`<ellipse cx="${e}" cy="${t}" rx="8" ry="5.5" fill="var(--acc)" ${O(2.4)} transform="rotate(${n} ${e} ${t})"/><ellipse cx="${e-1}" cy="${t-2}" rx="2.4" ry="1.3" fill="#fff" opacity=".6" transform="rotate(${n} ${e-1} ${t-2})"/>`}const is='<path d="M42 104 Q44 76 70 66 Q86 74 100 58 Q114 74 130 66 Q156 76 158 104" fill="none" stroke="#3a1d3c" stroke-width="9" opacity=".12"/>';function mm(e){return e==="puffs"||e==="coily"?"puffs":e==="afro"?"afro":e==="braids"?"braids":e==="boxbraids"?"box":e==="locs"?"locs":e==="sidebraid"?"sidebraid":e==="crown"?"crown":e==="pony"?"pony":e==="sidepony"?"sidepony":e==="pigtails"?"pigtails":e==="halfup"?"halfup":e==="buns"?"buns":e==="topbun"?"topbun":e==="lowbun"?"lowbun":e==="long"?"long":e==="wavy"||e==="wavybob"?e==="wavy"?"wavy":"bob":e==="bob"||e==="curlybob"||e==="sidebangs"?"bob":e==="pixie"?"pixie":(e==="bangs"||e==="short")&&e==="bangs"?"bangs":"short"}function NM(e,t,n){const s=mm(e);if(s==="puffs"){const o=e==="coily"?26:30;return Lc(48,52,o,0,t,n,12)+Lc(152,52,o,.3,t,n,12)+`<path d="M42 112 Q38 48 100 44 Q162 48 158 112 Q154 144 100 146 Q46 144 42 112 Z" fill="var(--hair)" ${O(3.2)}/>`+Ro(66,68,-35)+Ro(134,68,35)}if(s==="afro")return Lc(100,78,78,.2,t,n,14);if(s==="braids")return qt(t,n)+oo(34,108,230,5.4,[196])+oo(166,108,230,5.4,[196]);if(s==="box")return qt(t,n)+oo(30,110,228,5,[200],10)+oo(170,110,228,5,[200],10);if(s==="locs")return qt(t,n)+Zr(32,112,236)+Zr(168,112,236);if(s==="sidebraid")return qt(t,n);if(s==="pony"||s==="sidepony"||s==="halfup"){const o=s==="sidepony"?"M118 78 Q150 70 158 120 Q164 160 150 200 Q136 188 138 160 Q132 120 124 96 Z":"M126 40 Q178 28 180 92 Q184 132 168 168 Q160 196 174 220 Q148 212 145 182 Q140 156 152 124 Q160 90 132 64 Z",i=s==="halfup"?70:s==="sidepony"?86:44;return qt(t,n)+Ec(o,t,n,s==="sidepony"?["M130 96 Q150 120 146 160","M138 110 Q154 140 148 180"]:["M146 56 Q170 88 160 130","M156 66 Q176 100 166 140","M150 150 Q148 180 160 206"])+Ro(s==="sidepony"?124:128,i,s==="sidepony"?-20:25)}if(s==="pigtails")return qt(t,n)+Ec("M40 100 Q22 120 28 168 Q34 200 48 214 Q58 196 52 160 Q58 124 56 108 Z",t,n,["M40 120 Q32 150 40 184"])+Ec("M160 100 Q178 120 172 168 Q166 200 152 214 Q142 196 148 160 Q142 124 144 108 Z",t,n,["M160 120 Q168 150 160 184"])+Ro(52,96,20)+Ro(148,96,-20);if(s==="buns"){let o="";for(const i of[52,148])o+=`<circle cx="${i}" cy="44" r="24" fill="var(--hair)" ${O(3.2)}/>${n?`<circle cx="${i}" cy="44" r="24" fill="url(#${t}h)"/>`:""}`,o+=Bn([`M${i-14} 48 Q${i-14} 28 ${i} 26 Q${i+16} 30 ${i+14} 48`,`M${i-8} 54 Q${i+8} 56 ${i+12} 48`]),o+=`<path d="M${i-12} 34 Q${i-4} 24 ${i+4} 26" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>`;return o+qt(t,n)}if(s==="topbun")return`<circle cx="100" cy="30" r="26" fill="var(--hair)" ${O(3.2)}/>${n?`<circle cx="100" cy="30" r="26" fill="url(#${t}h)"/>`:""}<path d="M82 28 Q100 12 118 28" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/>${Bn(["M86 36 Q100 24 114 36","M90 42 Q100 34 110 42"])}${qt(t,n)}`;if(s==="lowbun")return qt(t,n)+`<circle cx="100" cy="168" r="22" fill="var(--hair)" ${O(3)}/>${n?`<circle cx="100" cy="168" r="22" fill="url(#${t}h)"/>`:""}${Ro(100,148,0)}`;if(s==="long"||s==="wavy"){const o=s==="wavy"?"M36 108 Q28 160 40 210 Q52 250 46 286 Q70 270 78 230 Q60 180 58 140 Q52 120 48 108 Z M164 108 Q172 160 160 210 Q148 250 154 286 Q130 270 122 230 Q140 180 142 140 Q148 120 152 108 Z":"M38 110 Q30 170 36 240 Q42 280 34 300 L70 292 Q64 240 66 180 Q62 140 56 112 Z M162 110 Q170 170 164 240 Q158 280 166 300 L130 292 Q136 240 134 180 Q138 140 144 112 Z";return`<path d="${o}" fill="var(--hair)" ${O(3)}/>${Ot(o,t,n)}${qt(t,n)}`}if(s==="bob"){const o=e==="curlybob"?"M30 120 Q24 170 48 196 Q70 210 100 206 Q130 210 152 196 Q176 170 170 120 Q150 150 100 156 Q50 150 30 120 Z":"M32 116 Q26 168 50 190 Q78 204 100 200 Q122 204 150 190 Q174 168 168 116 Q150 148 100 154 Q50 148 32 116 Z";return`<path d="${o}" fill="var(--hair)" ${O(3.2)}/>${Ot(o,t,n)}${qt(t,n)}`}return qt(t,n)}function qM(e,t,n){const s=mm(e),o='<path d="M100 34 V56" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>';if(s==="puffs"||s==="braids"||s==="box"||s==="locs"||s==="afro"||s==="bangs"){const a=s==="afro"?"M48 100 Q52 48 100 40 Q148 48 152 100 Q140 78 100 70 Q60 78 48 100 Z":s==="bangs"?"M40 108 Q36 40 100 34 Q164 40 160 108 L150 96 Q130 108 100 100 Q70 108 50 96 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q154 74 130 62 Q112 70 100 52 Q88 70 70 62 Q46 74 40 106 Z";let r=is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}${o}`;return r+=Bn(["M84 44 Q70 52 60 70","M116 44 Q130 52 140 70","M92 40 Q80 48 74 58","M108 40 Q120 48 126 58","M76 42 Q58 56 52 82","M124 42 Q142 56 148 82"]),r+=Ri(["M90 36 Q78 42 70 52","M112 36 Q124 42 132 52"]),s==="puffs"?(r+=`<path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="${bs}" stroke-width="7" stroke-linecap="round"/><path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`,r+=`<path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="${bs}" stroke-width="7" stroke-linecap="round"/><path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`):s==="braids"||s==="box"?(r+=oo(48,114,200,5,[156],s==="box"?10:7),r+=oo(152,114,200,5,[156],s==="box"?10:7)):s==="locs"&&(r+=Zr(46,116,210,4.6)+Zr(154,116,210,4.6)),r+os()}if(s==="sidebraid"){const a="M40 108 Q36 36 100 32 Q164 36 160 100 Q140 78 100 70 Q70 80 40 108 Z";return is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}${Bn(["M70 46 Q86 60 96 74","M120 44 Q136 58 146 74"])}${oo(150,100,210,5.6,[168],7)}${os()}`}if(s==="crown"){const a="M40 106 Q36 36 100 32 Q164 36 160 106 Q150 80 100 74 Q50 80 40 106 Z";let r="";for(let l=0;l<7;l++){const c=58+l*14;r+=`<path d="M${c} 58 Q${c+7} 46 ${c+14} 58" fill="none" stroke="var(--hair-shade)" stroke-width="3.2" stroke-linecap="round"/>`}return is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}${r}${os()}`}if(s==="pony"||s==="sidepony"||s==="halfup"||s==="pigtails"){const a=s==="sidepony"?"M40 108 Q34 36 100 32 Q166 34 160 108 Q150 86 120 78 Q90 90 60 74 Q48 90 40 108 Z":"M40 108 Q34 34 100 32 Q166 34 160 108 Q156 84 144 72 Q128 86 104 80 Q86 78 72 68 Q60 84 48 84 Q42 94 40 108 Z";let r=is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}`;return r+=`<path d="M40 104 Q36 120 44 132 Q46 116 50 106 Z" fill="var(--hair)" ${O(2.4)}/><path d="M160 104 Q164 120 156 132 Q154 116 150 106 Z" fill="var(--hair)" ${O(2.4)}/>`,r+=Bn(["M70 46 Q90 60 104 74","M128 46 Q140 60 146 74","M96 40 Q110 56 116 66"]),r+=Ri(["M76 42 Q92 52 100 62"]),r+os()}if(s==="buns"||s==="topbun"||s==="lowbun"){const a=s==="topbun"?"M44 108 Q40 50 100 46 Q160 50 156 108 Q148 82 100 74 Q52 82 44 108 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q152 80 138 70 Q126 80 112 76 Q104 82 100 74 Q96 82 88 76 Q74 80 62 70 Q48 80 40 106 Z";let r=is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}`;if(r+=Bn(["M80 42 Q72 56 68 68","M120 42 Q128 56 132 68","M100 36 Q98 56 100 70","M90 38 Q84 56 86 72","M110 38 Q116 56 114 72"]),r+=Ri(["M86 38 Q80 46 78 54","M114 38 Q120 46 122 54"]),s==="buns")for(const[l,c]of[[42,1],[158,-1]]){const d=`M${l} 100 q${-8*c} 14 ${-2*c} 24 q${5*c} 8 ${-1*c} 14`;r+=`<path d="${d}" fill="none" stroke="${bs}" stroke-width="7" stroke-linecap="round"/><path d="${d}" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`}return r+os()}if(s==="long"||s==="wavy"||s==="bob"){const a=e==="sidebangs"||e==="wavybob"?"M38 108 Q34 40 70 36 Q100 34 112 48 Q90 70 48 78 Q36 90 38 108 Z M112 48 Q140 36 164 50 Q166 100 150 108 Q130 80 112 70 Z":"M40 108 Q34 36 100 32 Q166 36 160 108 Q152 78 128 68 Q112 78 100 60 Q88 78 72 68 Q48 78 40 108 Z";return is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}${Bn(["M78 46 Q68 64 64 80","M122 46 Q132 64 136 80","M100 38 V64"])}${Ri(["M88 40 Q80 50 76 60"])}${os()}`}if(s==="pixie"){const a="M48 104 Q44 48 100 40 Q140 46 150 78 Q156 100 140 108 Q120 86 100 90 Q70 84 52 104 Z";return is+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${Ot(a,t,n)}${Bn(["M70 56 Q86 70 96 84","M118 52 Q132 66 138 82"])}${os()}`}const i="M46 106 Q42 46 100 38 Q158 46 154 106 Q140 80 100 76 Q60 80 46 106 Z";return is+`<path d="${i}" fill="var(--hair)" ${O(3.2)}/>${Ot(i,t,n)}${o}${os()}`}const Xo="var(--line)";function Nf(e){return Math.abs(e.legL)>=40||Math.abs(e.legR)>=40}function wo(e,t,n,s=[]){const o=s.map(i=>`<path d="${i}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/>`).join("");return(n?`<path d="${e}" fill="url(#${t}c)"/>`:"")+o}function Ad(e,t,n){const s=(n+7).toFixed(1);return`<path d="${e}" fill="none" stroke="${Xo}" stroke-width="${s}" stroke-linecap="round"/><path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`}function qf(e,t,n){return Ts("arm",e,t,n).replace('class="arm ','class="arm sleeve ')}function _r(e,t,n=!1){const[s,o]=Zt[e],i=e==="l"?-1:1;let a=Ad(`M${s} ${o} L${s+7*i} ${o+20}`,"var(--top)",22);return n&&(a+=`<path d="M${s+7*i-12} ${o+17} H${s+7*i+12}" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round" opacity=".9" transform="rotate(${-18*i} ${s+7*i} ${o+17})"/>`),qf(e,a,t)}function ji(e,t,n=!0){const[s,o]=Zt[e],[i,a]=kn[e],r=e==="l"?-1:1,l=(s+i)/2+6*r;let c=Ad(`M${s-2*r} ${o-2} Q${l} ${(o+a)/2-6} ${i-r} ${a-16}`,"var(--top)",21);return n&&(c+=Ad(`M${i-3*r} ${a-17} L${i-r} ${a-13}`,"var(--top-trim)",20)),qf(e,c,t)}function Rd(e,t,n=!1){const[s,o]=Zt[e],i=e==="l"?-1:1,a=s+4*i,r=o+8;let l=`<path d="${Pd(a,r,13,9,3.2)}" fill="var(--top)" ${O(2.8)}/>`;return l+=`<ellipse cx="${a-4*i}" cy="${r-5}" rx="5" ry="3" fill="#fff" opacity=".45"/>`,n&&(l+=`<path d="M${a-11} ${r+13} ${Ul(a-11,a+11,r+13,4,3)}" fill="none" stroke="#fff" stroke-width="2.4"/>`),qf(e,l,t)}function jt(e,t){return e("l",t)+e("r",t)}const Uh="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 228 Q100 236 64 228 Z";function Ys(e,t,n,s,o,i,a="",r=[],l=!1){const c=`<path d="${t}" fill="var(--top)" ${O(3)}/>${wo(t,s,o,r)}${a}`;return`<g class="shirt" data-hem="${i}">${l?c+n:n+c}</g>`}function FM(e,t,n,s,o){if(t.dress)return"";const i=t.top;if(i==="hoodie"){const l="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L139 230 Q100 240 61 230 Z",c=`<path d="M120 162 Q132 164 134 170 L139 230 Q128 233 123 233 Z" ${gt}/><path d="M72 172 Q76 164 86 163" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" opacity=".38"/><path d="M78 159 Q100 182 122 159 Q120 152 100 152 Q80 152 78 159 Z" fill="var(--top-trim)" ${O(2.8)}/><path d="M92 172 v18 M108 172 v18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="92" cy="191" r="2.6" fill="#fff" ${O(1.8)}/><circle cx="108" cy="191" r="2.6" fill="#fff" ${O(1.8)}/><path d="M78 202 H122 L127 222 H73 Z" fill="var(--top)" ${O(2.6)}/><path d="M78 202 H122 L124 210 H76 Z" ${gt}/><path d="M61 226 Q100 236 139 226 L139 234 Q100 244 61 234 Z" fill="var(--top-trim)" ${O(2.8)}/>`;return Ys(e,l,jt(ji,e),n,s,o,c,["M74 196 q-2 12 2 22","M126 190 q2 14 0 26"])}if(i==="stripes"||i==="jersey"){const l="M68 168 Q74 158 92 158 H108 Q126 158 132 168 L135 232 Q100 238 65 232 Z",c=`${n}st`,d=i==="jersey"?'<path d="M70 176 H130 L128 188 H72 Z" fill="var(--top-trim)"/><path d="M68 210 H132 L130 222 H70 Z" fill="var(--top-trim)"/>':[166,179,192,205,218,231].map(y=>`<rect x="60" y="${y}" width="80" height="6" fill="var(--top-trim)"/>`).join(""),f=i==="jersey"?'<path d="M86 160 L100 176 L114 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/>':'<path d="M84 159 Q100 172 116 159" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',h=s?`<path d="${l}" fill="url(#${n}c)"/>`:"";return`<g class="shirt" data-hem="${o}"><defs><clipPath id="${c}"><path d="${l}"/></clipPath></defs>${jt(y=>_r(y,e,!0),e)}<path d="${l}" fill="var(--top)"/><g clip-path="url(#${c})">${h}<path d="M118 160 L135 168 L138 236 H120 Z" ${gt}/>${d}</g><path d="${l}" fill="none" ${O(3)}/>${f}<path d="M78 198 q-2 12 1 24" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/><path d="M122 190 q2 14 0 28" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/></g>`}if(i==="sweater"||i==="cardigan"){const l=i==="cardigan"?"M68 168 Q74 158 92 158 H108 Q126 158 132 168 L134 232 H108 L100 210 L92 232 H66 Z":"M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 234 Q100 242 64 234 Z",c=`<path d="M118 166 L134 174 L136 230 Q120 236 112 228 Z" ${gt}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M64 226 Q100 236 136 226" fill="none" stroke="var(--top-trim)" stroke-width="6" stroke-linecap="round"/>`,d=i==="cardigan"?[186,202,218].map(f=>`<circle cx="100" cy="${f}" r="2.4" fill="var(--top-trim)" ${O(1.4)}/>`).join(""):"";return Ys(e,l,jt(ji,e),n,s,o,c+d,["M80 190 q-2 16 0 28","M120 188 q2 16 0 30"])}if(i==="tank"||i==="bib"){const l=i==="bib"?"M78 168 H122 L126 228 H74 Z":"M78 168 Q86 160 96 164 H104 Q114 160 122 168 L128 226 H72 Z",c=`<path d="M110 172 H126 L128 226 H114 Z" ${gt}/><path d="M82 176 Q84 168 92 166" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".35"/>`,d=i==="bib"?`${c}<path d="M86 150 L78 168 M114 150 L122 168" stroke="${Xo}" stroke-width="8" stroke-linecap="round"/><path d="M86 150 L78 168 M114 150 L122 168" stroke="var(--top)" stroke-width="4.5" stroke-linecap="round"/><rect x="90" y="176" width="20" height="16" rx="3" fill="var(--top-trim)" ${O(1.6)}/>`:`${c}<path d="M84 166 Q100 176 116 166" fill="none" stroke="var(--top-trim)" stroke-width="4"/>`;return Ys(e,l,"",n,s,o,d,["M88 190 q2 14 0 24"])}if(i==="puff"||i==="ruffle"){const l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L132 222 H68 Z",c=`<path d="M100 172 l-8 -5 v10 z M100 172 l8 -5 v10 z" fill="var(--top-trim)" ${O(1.8)}/><path d="M97 174 l-4 10 M103 174 l4 10" stroke="var(--top-trim)" stroke-width="2.6" stroke-linecap="round"/>`,d=(i==="ruffle"?`<path d="M68 166 Q74 178 82 166 Q90 180 100 166 Q110 180 118 166 Q126 180 132 166" fill="var(--top-trim)" ${O(2)}/>`:c)+`<path d="M118 162 Q128 164 130 170 L132 222 H120 Z" ${gt}/><path d="M74 176 Q76 168 84 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return Ys(e,l,jt(Rd,e),n,s,o,d,["M86 190 q2 10 0 20","M116 188 q-2 12 0 22"],!0)}if(i==="button"){const l=Uh,c=[180,196,212].map(f=>`<circle cx="100" cy="${f}" r="2.6" fill="#fff" ${O(1.6)}/>`).join(""),d=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${gt}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M100 164 V226" stroke="#fff" stroke-width="2" opacity=".7"/>${c}<path d="M82 160 Q100 172 118 160" fill="var(--top)" ${O(2.2)}/>`;return Ys(e,l,jt(f=>_r(f,e,!1),e),n,s,o,d,["M78 196 q-1 12 2 20"])}if(i==="raincoat"){const l="M62 168 Q70 156 92 156 H108 Q130 156 138 168 L146 240 Q100 252 54 240 Z",c=`<path d="M120 164 L142 176 L146 236 Q124 244 116 232 Z" ${gt}/><path d="M72 176 Q76 166 88 164" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M70 156 Q100 176 130 156" fill="none" stroke="var(--top-trim)" stroke-width="6"/><circle cx="100" cy="196" r="4" fill="var(--top-trim)" ${O(1.8)}/><path d="M78 214 H122" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round"/>`;return Ys(e,l,jt(ji,e),n,s,o,c,["M76 190 q-4 18 -2 36","M124 188 q4 18 2 36"])}const a=Uh,r=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${gt}/><path d="M84 160 Q100 172 116 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return Ys(e,a,jt(l=>_r(l,e,!1),e),n,s,o,r,["M78 196 q-2 12 1 22","M122 194 q2 14 -1 24"])}function Qh(e,t,n,s,o,i=!1,a=16){const r=e==="l"?88:112,l=e==="l"?-1:1,c=`M${r-a/2} 226 Q${r-a/2+l} ${n-20} ${r-a/2+2*l} ${n} H${r+a/2} Q${r+a/2} ${n-30} ${r+a/2-l} 226 Z`;let d=`<path d="${c}" fill="var(--bottom)" ${O(2.8)}/>`;return d+=wo(c,s,o,[`M${r-4*l} 240 Q${r} ${(226+n)/2} ${r+3*l} ${n-14}`]),e==="r"?d+=`<path d="M${r+1} 230 H${r+a/2} L${r+a/2} ${n} H${r+4} Z" ${gt}/>`:d+=`<path d="M${r-2} 238 Q${r-6} ${(226+n)/2} ${r-2} ${n-10}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".3"/>`,i&&(d+=`<path d="M${r-a/2-1} ${n-8} H${r+a/2+1} V${n+1} H${r-a/2-1} Z" fill="var(--bottom-trim)" ${O(2)}/>`),Ts("leg",e,d,t)}function jM(e,t,n,s){if(t.dress)return'<g data-layer="bottom"></g>';const o=t.bottom;if(Nf(e)&&(o==="skirt"||o==="tutu"||o==="overalls"))return`<g data-layer="bottom"><path class="skirt" d="${o==="tutu"?"M52 216 H148 L160 248 Q100 260 40 248 Z":"M62 218 H138 L152 252 Q100 264 48 252 Z"}" fill="var(--bottom)" ${O(3)}/></g>`;if(o==="skirt"){const h="M68 222 H132 L146 262 Q100 274 54 262 Z";return`<g data-layer="bottom"><path class="skirt" d="${h}" fill="var(--bottom)" ${O(3)}/>${wo(h,n,s,["M82 234 L76 258","M100 232 V266","M118 234 L126 258"])}<path d="M114 224 H132 L146 262 Q130 268 118 266 Z" ${gt}/><path d="M72 228 Q66 246 64 258" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".3"/><path d="M84 236 v10 M116 236 v10" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3" opacity=".55"/></g>`}if(o==="tutu")return'<g data-layer="bottom"></g>';if(o==="overalls"){const h="M66 220 H134 L139 264 H106 L100 254 L94 264 H61 Z";return`<g data-layer="bottom"><g class="leg" style="transform-box:view-box;transform-origin:100px 238px"><path d="${h}" fill="var(--bottom)" ${O(3)}/>${wo(h,n,s,["M78 232 Q74 248 72 260","M122 230 Q128 248 132 260"])}<path d="M118 222 H134 L139 264 H122 Z" ${gt}/><path d="M64 258 H95 M105 258 H138" stroke="var(--bottom-trim)" stroke-width="4"/></g></g>`}const a=o==="shorts"?256:292,r=o==="joggers"||o==="jeans",l=o==="leggings"?12:o==="shorts"?18:16,c=Qh("l",e,a,n,s,r,l)+Qh("r",e,a,n,s,r,l),d=o==="jeans"?'<path d="M88 232 V286 M112 232 V286" stroke="#c9a24a" stroke-width="1.4" stroke-dasharray="2 3" opacity=".7"/>':"";return`<g data-layer="bottom">${`<path d="M70 220 H130 V230 H70 Z" fill="var(--bottom)" ${O(2.4)}/>`}${c}${d}</g>`}function ZM(e,t,n,s){if(t.dress)return'<g data-layer="bottom-over"></g>';const o=t.bottom;if(o==="overalls"){const i="M78 180 H122 L124 228 H76 Z";return`<g data-layer="bottom-over"><path d="M80 176 L72 164 M120 176 L128 164" stroke="${Xo}" stroke-width="12" stroke-linecap="round"/><path d="M80 176 L72 164 M120 176 L128 164" stroke="var(--bottom)" stroke-width="7.5" stroke-linecap="round"/><path d="${i}" fill="var(--bottom)" ${O(3)}/>${wo(i,n,s,["M86 200 q14 6 28 0"])}<path d="M88 190 H112 V206 Q100 212 88 206 Z" fill="var(--bottom-trim)" ${O(2.4)}/><circle cx="82" cy="186" r="3.6" fill="#fff" ${O(2)}/><circle cx="118" cy="186" r="3.6" fill="#fff" ${O(2)}/><path d="M66 222 H134 L135 230 H65 Z" fill="var(--bottom)" ${O(3)}/><path d="M108 180 H122 L124 228 H110 Z" ${gt}/><path d="M82 182 v12" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/></g>`}if(o==="tutu"){if(Nf(e))return`<g data-layer="bottom-over"><path class="skirt" d="M58 220 H142 L154 246 Q100 256 46 246 Z" fill="var(--bottom)" ${O(2.4)}/></g>`;let i="";const a=[[266,50,150,8],[256,56,144,7],[246,64,136,6]];for(let l=0;l<a.length;l++){const[c,d,f,h]=a[l],u=`M${d+8} ${c-22} H${f-8} L${f} ${c} ${Ul(f,d,c,6,h)} Z`;i+=`<path class="skirt" d="${u}" fill="var(--bottom)" ${O(2.4)}/>`,i+=`<path d="M${f-20} ${c-16} L${f-6} ${c-2}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".2"/>`}const r="M66 214 H134 V224 H66 Z";return`<g data-layer="bottom-over">${i}<path d="${r}" fill="var(--bottom-trim)" ${O(2.6)}/>${wo(r,n,s)}</g>`}return'<g data-layer="bottom-over"></g>'}function Nh(e,t){return`<path d="M${e} ${t+2} c-3 -5 -9 -1 -5 3 l5 4 l5 -4 c4 -4 -2 -8 -5 -3z" fill="var(--top-trim)" opacity=".85"/>`}function GM(e,t,n,s,o){const i=t.dress;if(!i)return"";const a=`${n}dr`;let r="M72 210 H128 L150 268 Q100 282 50 268 Z",l="M72 168 Q78 158 94 158 H106 Q122 158 128 168 L130 214 H70 Z",c="",d=jt(y=>Rd(y,e,!0),e),f=!0;i==="sundress"?(r="M76 214 H124 L140 266 Q100 276 60 266 Z",c='<path d="M78 166 Q100 180 122 166" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',d="",f=!1):i==="party"?c=[[64,236],[86,228],[108,234],[130,242],[76,254],[100,250],[122,258],[92,188]].map(([g,v])=>Nh(g,v)).join("")+`<path d="M100 214 l-10 -6 v12 z M100 214 l10 -6 v12 z" fill="var(--top-trim)" ${O(1.8)}/><path d="M52 262 Q100 276 148 262" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="1 5" opacity=".85"/>`:i==="pinafore"?(l="M80 176 H120 L122 214 H78 Z",c='<path d="M86 158 L80 178 M114 158 L120 178" stroke="var(--top)" stroke-width="5" stroke-linecap="round"/>',d="",f=!1,r="M74 212 H126 L142 264 Q100 274 58 264 Z"):i==="jumper"?(c=`<path d="M84 160 Q100 174 116 160" fill="var(--top-trim)" ${O(2)}/>`,d=jt(y=>_r(y,e,!0),e),f=!1):i==="ballet"?(r="M78 214 H122 L132 250 Q100 258 68 250 Z",c=`<path d="M70 248 ${Ul(70,130,248,5,5)}" fill="none" stroke="#fff" stroke-width="2"/>`,d=jt(Rd,e)):i==="nightgown"?(r="M80 214 H120 L132 270 Q100 278 68 270 Z",c='<path d="M88 164 Q100 176 112 164" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>',d=jt(ji,e),f=!1):i==="raindress"?(r="M70 212 H130 L148 268 Q100 280 52 268 Z",c='<path d="M76 168 Q100 186 124 168" fill="none" stroke="var(--top-trim)" stroke-width="5"/><circle cx="100" cy="198" r="3.4" fill="var(--top-trim)"/>',d=jt(ji,e),f=!1):(r="M70 214 H130 L152 266 Q100 280 48 266 Z",l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L131 216 H69 Z",c=[[66,236],[86,228],[110,232],[132,240],[76,254],[100,248],[124,258],[56,260],[144,262],[96,266],[84,182],[114,190],[100,200]].map(([g,v])=>Nh(g,v)).join("")+`<path d="M112 214 H130 L152 266 Q138 271 128 272 Z" ${gt}/><path d="M118 162 L130 168 L131 216 H120 Z" ${gt}/><path d="M50 262 Q100 276 150 262" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round" opacity=".9"/><path d="M60 226 Q56 244 54 258" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".3"/><path d="M68 210 H132 V220 H68 Z" fill="var(--top-trim)" ${O(2.6)}/><path d="M100 215 l-13 -8 v16 z M100 215 l13 -8 v16 z" fill="var(--top-trim)" ${O(2.2)}/><circle cx="100" cy="215" r="3.6" fill="var(--top-trim)" ${O(2)}/><path d="M97 218 l-5 14 M103 218 l5 14" stroke="var(--top-trim)" stroke-width="3" stroke-linecap="round"/><path d="M80 158 Q78 172 94 170 Q99 166 100 162 Q101 166 106 170 Q122 172 120 158 Q100 164 80 158 Z" fill="#fff" ${O(2.4)}/>`),Nf(e)&&(r="M68 214 H132 L150 250 Q100 262 50 250 Z");const h=`${r} ${l}`,u=`<path class="skirt" d="${r}" fill="var(--top)" ${O(3)}/><path d="${l}" fill="var(--top)" ${O(3)}/><g clip-path="url(#${a})">${wo(h,n,s,["M80 226 Q74 248 70 266","M120 226 Q126 248 130 266"])}${c}</g>`;return`<g class="shirt" data-hem="${o}"><defs><clipPath id="${a}"><path d="${h}"/></clipPath></defs>${f?u+d:d+u}</g>`}function YM(e,t,n,s){const o=e==="l"?`<g transform="translate(${2*s} 0) scale(-1 1)">${n}</g>`:n;return Ts("leg",e,o,t)}function KM(e,t){const n=t.shoes;let s="";for(const o of["l","r"]){const i=o==="l"?87:113;let a="";if(n==="sneakers"||n==="lightup"){const r=n==="lightup"?`<circle cx="${i-4}" cy="292" r="2.2" fill="#ff8fab"/><circle cx="${i+4}" cy="296" r="2.2" fill="#8ecae6"/><circle cx="${i}" cy="300" r="2" fill="#ffd166"/>`:"";a=`<path d="M${i} 270 V286" fill="none" stroke="var(--sock)" stroke-width="16" stroke-linecap="round"/><path d="M${i-14} 296 Q${i-14} 284 ${i} 284 Q${i+14} 284 ${i+16} 296 Q${i+22} 298 ${i+22} 304 Q${i+22} 310 ${i+12} 310 H${i-14} Q${i-18} 310 ${i-16} 302 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-12} 304 H${i+18}" stroke="var(--shoe-trim)" stroke-width="3.5" stroke-linecap="round"/><path d="M${i-6} 290 l5 2 M${i-6} 295 l6 2" stroke="${Xo}" stroke-width="1.8" stroke-linecap="round"/>${r}`}else if(n==="boots"||n==="rainboots"){const r=n==="rainboots"?248:258,l=n==="boots"?[[-6,272],[5,268],[-2,284],[7,290],[-8,294]].map(([c,d])=>`<circle cx="${i+c}" cy="${d}" r="2.6" fill="#fff" opacity=".9"/>`).join(""):"";a=`<path d="M${i-14} ${r} H${i+14} V296 Q${i+22} 298 ${i+22} 304 Q${i+22} 310 ${i+10} 310 H${i-14} Q${i-18} 310 ${i-16} 302 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-16} ${r-4} H${i+16} V${r+8} H${i-16} Z" fill="var(--shoe)" ${O(2.6)}/>`+l+(n==="rainboots"?`<path d="M${i-12} ${r+16} H${i+12}" stroke="var(--shoe-trim)" stroke-width="4" stroke-linecap="round"/>`:`<path d="M${i-6} ${r+14} V292" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".45"/>`)}else n==="maryjanes"?a=`<path d="M${i} 266 V290" fill="none" stroke="var(--sock)" stroke-width="15" stroke-linecap="round"/><path d="M${i-12} 274 ${Ul(i-12,i+12,274,4,4)} L${i+12} 268 H${i-12} Z" fill="var(--sock)" ${O(2)}/><path d="M${i-13} 298 Q${i-13} 290 ${i} 290 Q${i+13} 290 ${i+14} 298 Q${i+20} 300 ${i+20} 304 Q${i+20} 309 ${i+8} 309 H${i-12} Q${i-16} 309 ${i-14} 302 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-10} 294 H${i+12}" stroke="${Xo}" stroke-width="2"/><circle cx="${i+8}" cy="294" r="2.2" fill="var(--acc)"/>`:n==="sandals"?a=`<path d="M${i-12} 298 Q${i-12} 286 ${i} 286 Q${i+12} 286 ${i+14} 296 Q${i+18} 298 ${i+18} 302 Q${i+18} 306 ${i+8} 306 H${i-12} Q${i-16} 306 ${i-14} 300 Z" fill="var(--skin)" ${O(2.4)}/><path d="M${i-14} 304 H${i+18}" stroke="var(--shoe)" stroke-width="5" stroke-linecap="round"/><path d="M${i-8} 292 H${i+10} M${i+2} 300 L${i+8} 290" stroke="var(--shoe)" stroke-width="4" stroke-linecap="round"/><circle cx="${i+2}" cy="293" r="3" fill="var(--shoe-trim)" ${O(1.4)}/>`:n==="slippers"?a=`<path d="M${i-14} 292 Q${i-14} 280 ${i} 278 Q${i+16} 280 ${i+18} 294 Q${i+22} 296 ${i+20} 304 H${i-14} Q${i-18} 304 ${i-16} 296 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-6} 286 q6 -4 12 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>`:a=`<ellipse cx="${i+2}" cy="304" rx="16" ry="7" fill="var(--shoe)" ${O(2.6)}/>`;s+=YM(o,e,a,i)}return`<g data-layer="shoes">${s}</g>`}const ym=new Set(["cap","beanie","sunhat"]),XM=new Set(["catears","earmuffs"]);function ai(e){return e==="afro"?28:e==="topbun"?20:e==="puffs"||e==="coily"?16:e==="buns"||e==="curlybob"?12:e==="long"||e==="wavy"||e==="wavybob"?8:0}function ki(e,t,n){if(!ym.has(t)&&!XM.has(t))return n;const s=ai(e);return s?`<g data-hat="${t}" transform="translate(0 ${E(-s)})">${n}</g>`:n}function JM(e,t,n){let s="";for(let l=0;l<n.length;l++)ym.has(n[l])&&(s=n[l]);if(!s)return"";const o=ai(t),i=(s==="beanie"?58:s==="cap"?64:62)-o,a=Math.min(70,i),r=t==="afro"||t==="puffs"||t==="coily"?92:78;return`<mask id="${e}hm" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" data-brim="${E(a)}"><rect x="-30" y="-50" width="260" height="420" fill="#fff"/><rect x="${E(100-r)}" y="-50" width="${E(r*2)}" height="${E(a+50)}" fill="#000"/></mask>`}function Sc(e,t,n){return`<g transform="translate(${e} ${t}) scale(${n})"><path d="M0 0 C-8 -14 -30 -14 -28 0 C-30 14 -8 14 0 0 Z" fill="var(--acc)" ${O(2.6)}/><path d="M0 0 C8 -14 30 -14 28 0 C30 14 8 14 0 0 Z" fill="var(--acc)" ${O(2.6)}/><rect x="-6" y="-7" width="12" height="14" rx="4" fill="var(--acc2)" ${O(2.2)}/></g>`}function eL(e){return`<g data-layer="accessory">${e.acc.map(n=>n==="glasses"?'<circle cx="76" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="124" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="76" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><circle cx="124" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3.2"/><path d="M58 108 L42 104 M142 108 L158 104" stroke="var(--frame)" stroke-width="3.2" stroke-linecap="round"/>':n==="square"?'<rect x="58" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><rect x="108" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><path d="M92 112 H108" stroke="var(--frame)" stroke-width="3.2"/>':n==="sunnies"?'<path d="M56 104 H94 Q96 122 76 122 Q56 122 56 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M106 104 H144 Q146 122 124 122 Q104 122 106 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3"/>':n==="bow"?Sc(100,78,.7):n==="bigbow"?Sc(100,70,1.15):n==="headband"?`<path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="${Xo}" stroke-width="12" stroke-linecap="round"/><path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round"/>${Sc(100,32,.85)}`:n==="flower"?`<g transform="translate(138 78)">${[0,60,120,180,240,300].map(s=>`<ellipse cx="0" cy="-8" rx="5" ry="8" fill="var(--acc)" ${O(1.6)} transform="rotate(${s})"/>`).join("")}<circle r="4.5" fill="var(--acc2)" ${O(1.6)}/></g>`:n==="cap"?ki(e.hair,"cap",`<path d="M54 64 Q56 20 100 16 Q144 20 146 64 Q128 54 100 56 Q72 54 54 64 Z" fill="var(--acc)" ${O(3)}/><path d="M48 56 Q100 66 152 56 L156 62 Q100 70 44 62 Z" fill="var(--acc)" ${O(3)}/><circle cx="100" cy="18" r="4.5" fill="#fff" ${O(2)}/>`):n==="beanie"?ki(e.hair,"beanie",`<path d="M50 66 Q48 14 100 8 Q152 14 150 66 Q128 56 100 58 Q72 56 50 66 Z" fill="var(--acc)" ${O(3)}/><path d="M50 58 H150" stroke="var(--acc2)" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="8" r="7" fill="var(--acc2)" ${O(2.4)}/>`):n==="sunhat"?ki(e.hair,"sunhat",`<path d="M66 56 Q68 22 100 18 Q132 22 134 56 Q118 48 100 50 Q82 48 66 56 Z" fill="var(--acc)" ${O(3)}/><path d="M18 56 Q100 68 182 56 Q170 64 100 66 Q30 64 18 56 Z" fill="var(--acc)" ${O(3)}/><path d="M72 46 Q100 38 128 46" fill="none" stroke="var(--acc2)" stroke-width="4"/>`):n==="catears"?ki(e.hair,"catears",`<path d="M58 62 L70 18 L86 60 Z" fill="var(--acc)" ${O(2.6)}/><path d="M114 60 L130 18 L142 62 Z" fill="var(--acc)" ${O(2.6)}/><path d="M64 54 L72 30 L80 52 Z" fill="var(--acc2)"/><path d="M120 52 L128 30 L136 54 Z" fill="var(--acc2)"/>`):n==="earmuffs"?ki(e.hair,"earmuffs",`<path d="M44 68 Q48 26 100 22 Q152 26 156 68" fill="none" stroke="var(--acc)" stroke-width="6"/><circle cx="34" cy="86" r="14" fill="var(--acc)" ${O(2.8)}/><circle cx="166" cy="86" r="14" fill="var(--acc)" ${O(2.8)}/><circle cx="34" cy="86" r="6" fill="var(--acc2)"/><circle cx="166" cy="86" r="6" fill="var(--acc2)"/>`):"").join("")}</g>`}const Gr="var(--line)",Cd="#f7f3ee",_i="#3d3150",nr="#f7f1e8",pa="#4a2f5e",Zi="#2f2433";function Ff(e,t,n){return`<path d="${e}" fill="none" stroke="${Gr}" stroke-width="${E(n+7)}" stroke-linecap="round"/><path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`}function tL(e){const[t,n]=Zt[e],[s,o]=kn[e],i=e==="l"?-1:1,a=(t+s)/2+6*i;return`M${t-2*i} ${n-2} Q${a} ${(n+o)/2-6} ${s-i} ${o-16}`}function wm(e,t,n){return["l","r"].map(s=>{const o=Ff(tL(s),e,21)+(n?n(s):"");return Ts("arm",s,o,t).replace('class="arm ','class="arm sleeve ')}).join("")}function bm(e,t,n){return["l","r"].map(s=>{const o=s==="l"?-1:1,i=s==="l"?88:112,a=Ff(`M${i} 238 L${i+o} 280`,e,24)+(n?n(s,i):"");return Ts("leg",s,a,t)}).join("")}const vm="M70 168 Q74 160 92 160 H108 Q126 160 130 168 L134 236 Q100 244 66 236 Z";function ri(e,t){return t.hip?`<g transform="rotate(${E(t.hip)} 100 238)">${e}</g>`:e}function nL(e,t){const n="#ffd166",s=`<path d="${vm}" fill="${n}" ${O(3)}/>`,o=`<path d="M78 188 H122 V232 H78 Z" fill="${e}" ${O(2.8)}/><path d="M88 200 H112 V216 Q100 220 88 216 Z" fill="none" stroke="#3a1d3c" stroke-width="2.4" opacity=".3" stroke-linejoin="round"/><path d="M74 166 L82 190 M126 166 L118 190" stroke="${Gr}" stroke-width="10" stroke-linecap="round"/><path d="M74 166 L82 190 M126 166 L118 190" stroke="${e}" stroke-width="5.5" stroke-linecap="round"/><circle cx="82" cy="192" r="4" fill="#c9ced6" ${O(1.6)}/><circle cx="118" cy="192" r="4" fill="#c9ced6" ${O(1.6)}/>`,i=`<path d="M66 228 H134 L136 248 Q100 256 64 248 Z" fill="${e}" ${O(3)}/>`,a=wm(n,t,l=>{const[c,d]=kn[l];return`<path d="M${c-9} ${d-12} h18" stroke="#3a1d3c" stroke-width="2" opacity=".25" stroke-linecap="round"/>`});return{back:"",over:bm(e,t,(l,c)=>`<path d="M${c-11} 276 h22" stroke="#3a1d3c" stroke-width="2.4" opacity=".25" stroke-linecap="round"/>`)+ri(a+s+i+o,t),head:"",sleeve:n}}function sL(e){const t=70-Math.min(10,ai(e)/2),n=`<path d="M38 ${t+10} Q100 ${t-8} 162 ${t+10}" fill="none" stroke="${Gr}" stroke-width="13" stroke-linecap="round"/><path d="M38 ${t+10} Q100 ${t-8} 162 ${t+10}" fill="none" stroke="#6b6f7a" stroke-width="7.5" stroke-linecap="round"/>`,s=o=>`<circle cx="${o}" cy="${t}" r="17" fill="#c9ced6" ${O(3)}/><circle cx="${o}" cy="${t}" r="10.5" fill="#bfe3f2" ${O(2)}/><path d="M${o-5} ${t-4} q3 -4 8 -3" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;return`<g data-costume-part="goggles">${n}${s(80)}${s(120)}<path d="M96 ${t} h8" stroke="${Gr}" stroke-width="5" stroke-linecap="round"/></g>`}function oL(e){const t=60-ai(e),n=Math.max(30,Math.min(56,t-4)),s=t-n;return`<g data-costume-part="witch-hat"><path d="M64 ${t-2} Q82 ${t-n*.45} 92 ${s+8} Q98 ${s-2} 114 ${s+4} Q104 ${s+10} 106 ${s+n*.4} L136 ${t-2} Z" fill="${pa}" ${O(3)}/><path d="M70 ${t-10} Q100 ${t-16} 130 ${t-10} L133 ${t-3} Q100 ${t-9} 67 ${t-3} Z" fill="#ff9f43" ${O(2.2)}/><path d="M24 ${t+2} Q100 ${t-16} 176 ${t+2} Q100 ${t+12} 24 ${t+2} Z" fill="${pa}" ${O(3)}/><path d="M118 ${t-24} l2.6 5.4 5.8 .8 -4.2 4 1 5.8 -5.2 -2.8 -5.2 2.8 1 -5.8 -4.2 -4 5.8 -.8 Z" fill="#ffd166" ${O(1.4)}/></g>`}function iL(e){const t=ai(e);return`<g data-costume-part="cat-ears" transform="translate(0 ${E(-t)})"><path d="M52 66 L64 20 L90 56 Z" fill="${Zi}" ${O(2.8)}/><path d="M110 56 L136 20 L148 66 Z" fill="${Zi}" ${O(2.8)}/><path d="M61 56 L66 34 L80 52 Z" fill="#f4a3c8"/><path d="M120 52 L134 34 L139 56 Z" fill="#f4a3c8"/><path d="M50 72 Q100 46 150 72" fill="none" stroke="${Zi}" stroke-width="6" stroke-linecap="round"/></g>`}function aL(e){return ri(`<g data-costume-part="cat-tail">${Ff("M118 232 Q156 240 162 206 Q166 178 182 172",Zi,11)}<circle cx="182" cy="172" r="6" fill="${Zi}"/></g>`,e)}function rL(e){const t=[30,50,70,90,110,130,150,170];let n="";for(let i=t.length-1;i>0;i--)n+=` Q${t[i]-10} ${i%2?276:266} ${t[i-1]} 262`;const s=`M64 166 Q70 154 100 152 Q130 154 136 166 Q164 196 170 262${n} Q36 196 64 166 Z`;return{back:"",over:ri(`<g data-costume-part="ghost-sheet"><path d="${s}" fill="${Cd}" ${O(3)}/><path d="M70 190 Q60 230 58 258 M130 190 Q140 230 142 258 M100 190 V250" fill="none" stroke="#3a1d3c" stroke-width="2.4" opacity=".12" stroke-linecap="round"/></g>`,e),head:"",sleeve:Cd,coversArms:!0}}function lL(e){const n=30-Math.min(16,ai(e));return`<g data-costume-part="ghost-hood"><path d="${`M30 112 Q28 ${n} 100 ${n} Q172 ${n} 170 112 Q172 150 150 170 Q100 182 50 170 Q28 150 30 112 Z`} M54 116 Q54 76 100 74 Q146 76 146 116 Q146 152 100 156 Q54 152 54 116 Z" fill="${Cd}" fill-rule="evenodd" ${O(3)}/><path d="M44 96 Q48 ${n+26} 84 ${n+12}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/></g>`}function cL(e){const t=`<path d="${vm}" fill="${_i}" ${O(3)}/>`,n=`<g data-costume-part="ribs" fill="none" stroke="${nr}" stroke-linecap="round"><path d="M100 172 V226" stroke-width="6"/>`+[184,198,212].map((r,l)=>`<path d="M${80+l*2} ${r} Q90 ${r-5} 100 ${r}  M${120-l*2} ${r} Q110 ${r-5} 100 ${r}" stroke-width="5.5"/>`).join("")+'<path d="M86 232 Q100 224 114 232" stroke-width="6"/></g>',s=(r,l,c,d)=>`<path d="M${E(r)} ${E(l)} L${E(c)} ${E(d)}" stroke="${nr}" stroke-width="5" stroke-linecap="round"/><circle cx="${E(r)}" cy="${E(l)}" r="4" fill="${nr}"/><circle cx="${E(c)}" cy="${E(d)}" r="4" fill="${nr}"/>`,o=wm(_i,e,r=>{const[l,c]=Zt[r],[d,f]=kn[r];return s(l+(d-l)*.2,c+(f-c)*.2,l+(d-l)*.72,c+(f-c)*.72)}),i=`<path d="M66 230 H134 L136 248 Q100 256 64 248 Z" fill="${_i}" ${O(3)}/>`;return{back:"",over:bm(_i,e,(r,l)=>s(l,246,l+(r==="l"?-1:1),274))+ri(o+i+t+n,e),head:"",sleeve:_i}}function dL(e){const t=n=>{const s=o=>E(100+n*o);return`M${s(20)} 166 Q${s(60)} 168 ${s(84)} 186 Q${s(90)} 220 ${s(80)} 256 Q${s(68)} 244 ${s(58)} 256 Q${s(48)} 242 ${s(36)} 254 Q${s(28)} 240 ${s(14)} 250 Z`};return ri(`<g data-costume-part="bat-cape"><path d="${t(-1)}" fill="${pa}" ${O(3)}/><path d="${t(1)}" fill="${pa}" ${O(3)}/><path d="M40 190 Q44 220 52 240 M160 190 Q156 220 148 240" fill="none" stroke="#fff" stroke-width="2.4" opacity=".18" stroke-linecap="round"/></g>`,e)}function fL(e){return ri(`<g data-costume-part="bat-collar"><path d="M78 164 Q72 152 82 146 L92 160 Z M122 164 Q128 152 118 146 L108 160 Z" fill="${pa}" ${O(2.4)}/><circle cx="100" cy="166" r="5" fill="#ff9f43" ${O(1.8)}/></g>`,e)}function km(e,t,n){const s={back:"",over:"",head:"",sleeve:null};if(e.indexOf("helper-")===0){const o=zr[e.slice(7)]??zr.yellow;return{...nL(o,t),head:sL(n)}}return e==="witch"?{...s,head:oL(n)}:e==="cat"?{...s,back:aL(t),head:iL(n)}:e==="ghost"?{...rL(t),head:lL(n)}:e==="skeleton"?cL(t):e==="bat"?{...s,back:dL(t),over:fL(t)}:s}const pL=[{hip:1.5,head:4,armL:3,armR:-2,legL:0,legR:-3,legLLift:0,legRLift:0},{hip:-2,head:-5,armL:1,armR:-7,legL:4,legR:0,legLLift:2,legRLift:0},{hip:0,head:3,armL:2,armR:-2,legL:0,legR:0,legLLift:0,legRLift:0},{hip:-1.5,head:-4,armL:4,armR:-1,legL:5,legR:0,legLLift:3,legRLift:0}],hL={puffs:0,afro:0,pony:1,sidepony:1,pigtails:1,halfup:1,braids:2,boxbraids:2,locs:2,sidebraid:2,crown:2,buns:3,topbun:3,lowbun:3};function jf(e){const t=e.hair||"buns";let n=hL[t];if(n===void 0){let s=0;for(let o=0;o<t.length;o++)s=(s+t.charCodeAt(o))%4;n=s}return pL[n]}function uL(e){const t=(n,s,o,i,a)=>{const r=Sd(n,s,o,i,a),l=Sd(r.x,r.y,100,238,e.hip);return{x:l.x/2,y:l.y/2}};return{left:t(kn.l[0],kn.l[1],Zt.l[0],Zt.l[1],e.armL),right:t(kn.r[0],kn.r[1],Zt.r[0],Zt.r[1],e.armR)}}function gL(e){const t=Sd(100,244,100,238,e.hip);return Math.round(t.y/2*10)/10}function Zf(e){const t=parseInt(e.slice(1),16);return(t>>16&255)+(t>>8&255)+(t&255)}function mL(e){const t=Fi(e,.32);return Zf(t)<80?"#5a3a2c":t}function yL(e){return Zf(e)<140?"#3b2340":Fi(e,.12)}let qh=0;function wL(){return qh+=1,"a"+qh.toString(36)}function cs(e,t){return t.hip?`<g transform="rotate(${E(t.hip)} 100 238)">${e}</g>`:e}function Co(e,t,n=!1){const s=t.head?`<g transform="rotate(${E(t.head)} 100 158)">${e}</g>`:e;return cs(`<g${n?' class="dollhead" data-dollhead="1"':' class="dollhead"'}>${s}</g>`,t)}function bL(e,t,n){let s=`<defs><radialGradient id="${e}b"><stop offset="0" style="stop-color:var(--blush)" stop-opacity=".62"/><stop offset=".55" style="stop-color:var(--blush)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--blush)" stop-opacity="0"/></radialGradient>`;return s+=`<radialGradient id="${e}s"><stop offset="0" stop-color="#3a1d3c" stop-opacity=".3"/><stop offset=".6" stop-color="#3a1d3c" stop-opacity=".12"/><stop offset="1" stop-color="#3a1d3c" stop-opacity="0"/></radialGradient>`,s+=`<radialGradient id="${e}k" cx=".42" cy=".36" r=".75"><stop offset=".55" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".16"/></radialGradient>`,t&&(s+=`<linearGradient id="${e}i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f1020" stop-opacity=".62"/><stop offset=".5" stop-color="#1f1020" stop-opacity=".05"/><stop offset=".62" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient>`,s+=`<linearGradient id="${e}c" gradientUnits="userSpaceOnUse" x1="58" y1="0" x2="146" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".26"/><stop offset=".32" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".2"/></linearGradient>`,s+=`<radialGradient id="${e}h" cx=".38" cy=".28" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".14"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1f1020" stop-opacity=".28"/></radialGradient>`),s+n+"</defs>"}function vL(e){const t=e==="l"?-1:1,n=Zt[e][0],s=Zt[e][1],o=kn[e][0],i=kn[e][1],a=o-t,r=i-7,l=-t;let c=`<path d="${Td([n,s],[a,r],18,13,-3*t)}" fill="var(--skin)" ${O(3)}/>`;return c+=`<path class="hand" d="M${E(o-8)} ${E(i-4)} Q${E(o-8)} ${E(i-10)} ${E(o)} ${E(i-10)} Q${E(o+8)} ${E(i-10)} ${E(o+8)} ${E(i-3)} Q${E(o+8.5)} ${E(i+9)} ${E(o)} ${E(i+9.5)} Q${E(o-8.5)} ${E(i+9)} ${E(o-8)} ${E(i-4)} Z" fill="var(--skin)" ${O(2.8)}/>`,c+=`<ellipse cx="${E(o+7*l)}" cy="${E(i-1)}" rx="3.4" ry="5" fill="var(--skin)" ${O(2.4)} transform="rotate(${-20*l} ${E(o+7*l)} ${E(i-1)})"/>`,c+=`<path d="M${E(o-3*l)} ${E(i+3)} v4 M${E(o+.5*l)} ${E(i+3.5)} v4" stroke="var(--line)" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>`,c+=`<ellipse cx="${E(o-3*l)}" cy="${E(i-5)}" rx="3" ry="1.8" fill="#fff" opacity=".35"/>`,c}function Fh(e){const t={rest:"",l:"",r:""},n=/<g class="arm sleeve (l|r) hang"[^>]*>/g,s=/<g[\s>]|<\/g>/g;let o=0,i;for(;i=n.exec(e);){const a=i[1];let r=1,l=-1,c;for(s.lastIndex=i.index+i[0].length;c=s.exec(e);)if(r+=c[0]==="</g>"?-1:1,r===0){l=c.index;break}if(l<0)break;t.rest+=e.slice(o,i.index),t[a]+=e.slice(i.index+i[0].length,l),o=l+4,n.lastIndex=o}return t.rest+=e.slice(o),t}function jh(e,t,n){const s=t?`<g class="arm sleeve ${e} hang">${t}</g>`:"";return Ts("arm",e,`<g class="hand">${vL(e)}</g>${s}`,n)}function Zh(e){const t=e==="l"?-1:1,n=e==="l"?88:112;let s=`<path d="${Td([n,234],[n+t,294],21,15,1.5*t)}" fill="var(--skin)" ${O(3)}/>`;return s+=`<path d="${Td([n+5*t,244],[n+5*t,290],6,4)}" ${gt}/>`,s+=`<ellipse cx="${E(n+.5*t)}" cy="268" rx="4.5" ry="2.6" fill="#3a1d3c" opacity=".12"/>`,s+=`<path d="M${n-4} 265 q4 -2.5 8 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".35"/>`,s}function Gh(e,t,n,s,o,i){const a=n?-1:1,r=o==="big"||o==="bright"?1.08:o==="soft"?.94:1,l=(w,m)=>`${E(e+w*r)} ${E(t+m*r)}`,c=13.5*r,d=17*r;let f="";if(i&&o!=="soft"){const w=[.35,.95,1.57,2.2,2.8];for(let m=0;m<w.length;m++){const b=w[m];f+=`<path d="M${E(e+5.5*Math.cos(b)*r)} ${E(t+(4+6.5*Math.sin(b))*r)} L${E(e+11.5*Math.cos(b)*r)} ${E(t+(2+14*Math.sin(b))*r)}" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity=".28"/>`}}const h=o==="soft"?2:2.6,u=o==="soft"?"":`<path d="M${l(-16*a,-8)} q${E(-6*a*r)} -2 ${E(-9*a*r)} ${E(-9*r)} M${l(-17*a,-2)} q${E(-6*a*r)} ${E(-.5*r)} ${E(-10*a*r)} ${E(-5*r)} M${l(-12*a,-15)} q${E(-3*a*r)} ${E(-4*r)} ${E(-4*a*r)} ${E(-9*r)}" fill="none" stroke="var(--lash)" stroke-width="2.2" stroke-linecap="round"/>`,y=o==="sparkle"||o==="bright"?`<path d="M${l(-9*a,-8)} l.7 1.6 1.6 .7 -1.6 .7 -.7 1.6 -.7 -1.6 -1.6 -.7 1.6 -.7 Z" fill="#fff" opacity=".9"/>`:"",g=i?`<ellipse cx="${e}" cy="${E(t+r)}" rx="${E(c)}" ry="${E(d)}" fill="url(#${s}i)"/>`:"",v=o==="sleepy"?`<path d="M${l(-17,-4)} Q${e} ${E(t+r)} ${l(17,-4)} L${l(18,-16)} Q${e} ${E(t-20*r)} ${l(-18,-16)} Z" fill="var(--skin)"/>`:"";return`<path d="M${l(-16,-2)} Q${l(-16,-20)} ${l(0,-20)} Q${l(16,-20)} ${l(16,-2)} Q${l(16,19)} ${l(0,19)} Q${l(-16,19)} ${l(-16,-2)} Z" fill="#fff"/><path d="M${l(-15,-4)} Q${e} ${E(t-21*r)} ${l(15,-4)} Q${e} ${E(t-14*r)} ${l(-15,-4)} Z" fill="#3a1d3c" opacity=".12"/><ellipse data-iris="1" cx="${e}" cy="${E(t+r)}" rx="${E(c)}" ry="${E(d)}" fill="var(--eye)"/>${g}${f}<ellipse cx="${e}" cy="${E(t+3*r)}" rx="${E(7*r)}" ry="${E(9*r)}" fill="#1f1020" opacity=".8"/><ellipse cx="${e}" cy="${E(t+r)}" rx="${E(11.3*r)}" ry="${E(14.8*r)}" fill="none" stroke="#fff" stroke-width="1" opacity=".22"/><ellipse cx="${e}" cy="${E(t+r)}" rx="${E(c)}" ry="${E(d)}" fill="none" stroke="#1f1020" stroke-width="2" opacity=".55"/><path d="M${l(-9,12)} Q${e} ${E(t+19.5*r)} ${l(9,12)} Q${e} ${E(t+15.5*r)} ${l(-9,12)} Z" fill="#fff" opacity=".5"/><ellipse cx="${E(e-6*a*r)}" cy="${E(t-6*r)}" rx="${E(5.8*r)}" ry="${E(6.8*r)}" fill="#fff" transform="rotate(${-15*a} ${E(e-6*a*r)} ${E(t-6*r)})"/><circle cx="${E(e+6*a*r)}" cy="${E(t+8*r)}" r="${E(2.8*r)}" fill="#fff"/><circle cx="${E(e-4*a*r)}" cy="${E(t+10*r)}" r="${E(1.3*r)}" fill="#fff" opacity=".85"/><path d="M${l(7*a,-10)} l${E(r)} ${E(2.4*r)} ${E(2.4*r)} ${E(r)} ${E(-2.4*r)} ${E(r)} ${E(-r)} ${E(2.4*r)} ${E(-r)} ${E(-2.4*r)} ${E(-2.4*r)} ${E(-r)} ${E(2.4*r)} ${E(-r)} Z" fill="#fff"/>`+y+v+`<path d="M${l(-17,-1)} Q${l(-16,-21)} ${l(0,-21)} Q${l(16,-21)} ${l(17,-3)} Q${l(14.5,-18.6)} ${l(0,-18.8)} Q${l(-14.5,-18.6)} ${l(-15.5,-1)} Z" fill="var(--lash)" stroke="var(--lash)" stroke-width="${h}" stroke-linejoin="round"/>`+u+`<path d="M${l(-11,-23)} Q${e} ${E(t-27*r)} ${l(11,-23)}" fill="none" stroke="var(--line)" stroke-width="1.3" stroke-linecap="round" opacity=".22"/><path d="M${l(-5,20.5)} Q${e} ${E(t+22*r)} ${l(5,20.5)}" fill="none" stroke="var(--lash)" stroke-width="1.3" stroke-linecap="round" opacity=".28"/>`}function kL(e,t,n,s=!1){const o=e.blush?`<ellipse cx="64" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><ellipse cx="136" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><path d="M60 133 l3 -3 M66 134 l3 -3 M132 133 l3 -3 M138 134 l3 -3" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>`:"";let i="";if(e.freckles){const a=[[58,132],[64,136],[70,131],[130,131],[136,136],[142,132]];for(let r=0;r<a.length;r++)i+=`<circle cx="${a[r][0]}" cy="${a[r][1]}" r="1.5" fill="var(--freckle)" opacity=".7"/>`}return o+i+'<path data-brow="l" d="M64 86 Q74 80 85 84" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/><path data-brow="r" d="M115 84 Q126 80 136 86" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/>'+Gh(76,112,!1,t,s?"sleepy":e.eyes,n)+Gh(124,112,!0,t,s?"sleepy":e.eyes,n)+'<path d="M98 131 q2 1.8 4 0" fill="none" stroke="var(--line)" stroke-width="2" stroke-linecap="round" opacity=".55"/><ellipse cx="101.5" cy="128.5" rx="1.6" ry="1" fill="#fff" opacity=".6"/><path d="M92 140 Q100 147.5 108 140" fill="none" stroke="var(--line)" stroke-width="2.8" stroke-linecap="round"/><path d="M96 142.6 Q100 145.4 104 142.6 Q100 144 96 142.6 Z" fill="#ff8fa8"/>'}function _L(e){const t="M40 102 Q38 38 100 38 Q162 38 160 102 Q160 140 132 153 Q116 160 100 160 Q84 160 68 153 Q40 140 40 102 Z";return`<ellipse cx="39" cy="114" rx="9" ry="11" fill="var(--skin)" ${O(3)}/><ellipse cx="161" cy="114" rx="9" ry="11" fill="var(--skin)" ${O(3)}/><ellipse cx="40" cy="115" rx="4" ry="6" ${Ed}/><ellipse cx="160" cy="115" rx="4" ry="6" ${Ed}/><path d="${t}" fill="var(--skin)" ${O(3.2)}/><path d="${t}" fill="url(#${e}k)"/>`}function $L(){return`<path d="M91 146 h18 v22 q-9 5 -18 0 Z" fill="var(--skin)" ${O(3)}/><path d="M91 150 h18 v9 q-9 6 -18 0 Z" ${Ed}/><path d="M70 168 Q74 160 92 160 H108 Q126 160 130 168 L134 236 Q100 244 66 236 Z" fill="var(--skin)" ${O(3)}/>`}function Id(e,t){const n=Os(e),s=t?.pose??jf(n),o=t?.rich!==!1,i=t?.uid??wL(),a=gL(s),r=n.shoesC,l=r.toLowerCase()==="#ffffff"?n.dress?n.dressC:n.topC:Wh(r,.28),c=n.dress?n.dressC:n.topC,d=Zf(c)>700?"#8fdcc0":Fi(c,.18),f=["--line:#5a3d5c",`--skin:${n.skin}`,`--hair:${n.hairC}`,`--hair-shade:${mL(n.hairC)}`,`--brow:${yL(n.hairC)}`,`--eye:${n.eyeC}`,"--lash:#3b2340","--blush:#ff6f91",`--freckle:${Fi(n.skin,.35)}`,`--top:${c}`,`--top-trim:${d}`,`--bottom:${n.dress?n.dressC:n.bottomC}`,`--bottom-trim:${Fi(n.dress?n.dressC:n.bottomC,.16)}`,`--shoe:${r}`,`--shoe-trim:${l}`,"--sock:#ffffff",`--acc:${n.accC}`,`--acc2:${Wh(n.accC,.18)}`,"--frame:#6e4a5e"].join(";"),h=Ts("leg","l",Zh("l"),s)+Ts("leg","r",Zh("r"),s),u=t?.poseName==="sit"||t?.poseName==="lie"?t.poseName:null,y=t?.costume?km(t.costume,s,n.hair):null,g=n.dress?GM(s,n,i,o,a):FM(s,n,i,o,a),v=Fh(g),w=y&&!y.coversArms?Fh(y.over):null,m=!!w&&(w.l||w.r),b=m?w:v,_=jh("l",b.l,s)+jh("r",b.r,s),P=!!y?.coversArms,$=`<g data-layer="body">${h}${cs($L()+(P?_:""),s)}${Co(_L(i),s,!0)}</g>`,M=v.rest,z=P?"":`<g data-layer="arms">${cs(_,s)}</g>`,V=`<g class="shadow"><ellipse cx="100" cy="308" rx="52" ry="9" fill="url(#${i}s)"/><ellipse cx="87" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/><ellipse cx="113" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/></g>`,U=JM(i,n.hair,n.acc),F=U?` mask="url(#${i}hm)"`:"",oe=[`<g data-layer="hair-back">${Co(`<g${F}>${NM(n.hair,i,o)}</g>`,s)}</g>`,$,KM(s,n),cs(jM(s,n,i,o),s),cs(M,s),cs(ZM(s,n,i,o),s),`<g data-layer="costume">${y?m?w.rest:y.over:""}</g>`,z,`<g data-layer="face">${Co(kL(n,i,o,t?.poseName==="lie"),s)}</g>`,`<g data-layer="hair-front">${Co(`<g${F}>${qM(n.hair,i,o)}</g>`,s)}</g>`,Co(eL(n),s)];t?.holding&&oe.splice(oe.findIndex(B=>B.indexOf('data-layer="face"')>=0),0,cs(Sa("under",!0,n.skin,u,y?.sleeve??c),s)),y&&(y.head&&oe.push(`<g data-layer="costume-head">${Co(y.head,s)}</g>`),y.back&&oe.splice(1,0,`<g data-layer="costume-back">${y.back}</g>`));const we=oe.filter(B=>B&&B!=='<g data-layer="costume"></g>').join(""),Ke=n.dress||n.top,Ie=t?.poseName?` data-pose="${t.poseName}"`:"",I=t?.costume?` data-costume="${t.costume}"`:"";return`<svg${Ie}${I} data-chibi="1" data-hair="${n.hair}" data-top="${Ke}" viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="${f}">${bL(i,o,U)}${V}${we}</svg>`}function Yh(e,t,n){const s=Os(e),o=Wl(t)??jf(s),i=t==="sit"||t==="lie"?t:null,a=(n?km(n,o,s.hair).sleeve:null)??(s.dress?s.dressC:s.topC);return`<svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">${cs(Sa("over",!0,s.skin,i,a),o)}</svg>`}function Yr(){try{return typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(&)")}catch{return!1}}function Ra(e,t,n){const s=!!(t&&t.look2);e.classList.toggle("chibi",s);const o=s&&Yr();e.classList.toggle("chibi-move",s&&(o||n)),e.classList.toggle("chibi-bob",s&&!o&&!n)}function _m(e){return e.look2?Xy(e):null}const lt="#5a3d5c",$e=`stroke="${lt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,xL=["little","kid","adult"],Ps={little:.78,kid:1,adult:1.28},Ci={left:{x:15,y:113},right:{x:85,y:113}};function Ql(e,t){return e.look2?uL(t??jf(e.look2)):t?{left:{x:22,y:96},right:{x:78,y:96}}:Ci}function $m(e,t){return e===1?`<path d="M62 16 L76 8 L76 26 Z M62 16 L50 6 L48 24 Z" fill="#ff7aa8" stroke="${lt}" stroke-width="3" stroke-linejoin="round"/><circle cx="62" cy="16" r="5" fill="#ffd166" stroke="${lt}" stroke-width="3"/>`:e===2?`<circle cx="40" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${lt}" stroke-width="3"/><circle cx="60" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${lt}" stroke-width="3"/><path d="M49 48 h2" stroke="${lt}" stroke-width="3"/>`:e===3?`<path d="M20 30 Q22 8 50 8 Q78 8 80 30 Z" fill="${t}" stroke="${lt}" stroke-width="3.5" stroke-linejoin="round"/><path d="M60 28 Q84 26 92 32 Q80 36 60 34 Z" fill="${t}" stroke="${lt}" stroke-width="3.5" stroke-linejoin="round"/><circle cx="50" cy="9" r="4" fill="#fff" stroke="${lt}" stroke-width="3"/>`:""}function Kr(e,t,n){return n?e===1?`<path d="M20 40 Q16 86 30 92 L70 92 Q84 86 80 40 Z" fill="${t}" ${$e}/>`:e===2?`<circle cx="18" cy="34" r="12" fill="${t}" ${$e}/><circle cx="82" cy="34" r="12" fill="${t}" ${$e}/>`:e===3?`<circle cx="50" cy="8" r="13" fill="${t}" ${$e}/>`:"":e===3?`<path d="M22 42 Q20 14 50 12 Q80 14 78 42 Q66 26 50 30 Q34 26 22 42 Z" fill="${t}" ${$e}/>`:`<path d="M21 46 Q18 12 50 12 Q82 12 79 46 Q72 30 58 28 Q50 36 36 30 Q26 34 21 46 Z" fill="${t}" ${$e}/>`}function Et(e,t,n){const s=Wl(t),o=_m(e);return o&&e.look2?Id(e.look2,{rich:Yr(),pose:s??void 0,poseName:t||void 0,holding:n,costume:o}):e.look2?Id(e.look2,{rich:Yr(),pose:s??void 0,poseName:t||void 0,holding:n}):t==="sit"||t==="lie"?ML(e,t,n):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
  <ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${Kr(e.hairStyle,e.hair,!0)}
  <rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${$e}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${$e}/>
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${lt}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${lt}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${$e} transform="rotate(12 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${$e} transform="rotate(-12 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${$e}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${$e}/>
  <circle cx="50" cy="44" r="30" fill="${e.skin}" ${$e}/>
  ${Kr(e.hairStyle,e.hair,!1)}
  <ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${lt}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${lt}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${$e} fill="none"/>
  ${$m(e.acc??0,e.shirt)}
  <circle class="hand hang" cx="${Ci.left.x}" cy="${Ci.left.y}" r="6" fill="${e.skin}" ${$e}/><circle class="hand hang" cx="${Ci.right.x}" cy="${Ci.right.y}" r="6" fill="${e.skin}" ${$e}/>
  ${n?Sa("under",!1,Hl(e.skin),null):""}
</svg>`}function xm(e,t){const n=t==="sit"||t==="lie"?t:null;if(n==="lie")return"";const s=_m(e);return s&&e.look2?Yh(e.look2,t,s):e.look2?Yh(e.look2,t):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${Sa("over",!1,Hl(e.skin),n)}</svg>`}function ML(e,t,n){const s=t==="sit"?`<rect class="leg" x="34" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${$e} transform="rotate(-68 40 112)"/>
  <rect class="leg" x="53" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${$e} transform="rotate(68 60 112)"/>`:`<rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${$e}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${$e}/>`,o=t==="lie"?`<path d="M34 48 Q40 52 46 48" fill="none" ${$e}/><path d="M54 48 Q60 52 66 48" fill="none" ${$e}/>`:`<ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${lt}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${lt}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>`,i=`<ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${Kr(e.hairStyle,e.hair,!0)}
  ${s}
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${lt}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${lt}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${$e} transform="rotate(28 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${$e} transform="rotate(-28 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${$e}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${$e}/>
  <g class="dollhead">
  <circle class="dollhead" data-dollhead="1" cx="50" cy="44" r="30" fill="${e.skin}" ${$e}/>
  ${Kr(e.hairStyle,e.hair,!1)}
  ${o}
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${$e} fill="none"/>
  ${$m(e.acc??0,e.shirt)}
  </g>
  <circle class="hand hang" cx="22" cy="96" r="6" fill="${e.skin}" ${$e}/><circle class="hand hang" cx="78" cy="96" r="6" fill="${e.skin}" ${$e}/>
  ${n?Sa("under",!1,Hl(e.skin),t):""}`;return`<svg data-pose="${t}" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${i}</svg>`}const Kh=[{id:"hair",name:"Hair"},{id:"face",name:"Face"},{id:"clothes",name:"Clothes"},{id:"shoes",name:"Shoes"},{id:"extras",name:"Extras"}],LL={id:"costume",name:"🎃 Costumes"};function EL(){return Pl()?[...Kh,LL]:Kh}function SL(e,t){const n=Eo(e),s=!!n&&n.startsWith("helper-"),o=Os(t),i=(c,d,f,h)=>`<button type="button" class="avCosTile${f?" on":""}" data-act="av-costume" data-v="${c}" aria-pressed="${f}"><span class="avCosPic">${Id(o,{uid:"cosT"+(h||"none"),rich:!1,costume:h||null})}</span><span class="avCosName">${d}</span></button>`,a=s?n:"helper-yellow",r=i("","No costume",!n,"")+i(a,Kp.helper,s,a)+["witch","cat","ghost","skeleton","bat"].map(c=>i(c,Kp[c],n===c,c)).join(""),l=Object.keys(zr).map(c=>`<button type="button" class="avSw${n==="helper-"+c?" on":""}" style="background:${zr[c]}" data-act="av-costume" data-v="helper-${c}" aria-label="${c} overalls"></button>`).join("");return`<h3>Costumes</h3><p class="avHint">Halloween dress-up! Tap one. Everyone in the room sees it.</p><div class="avCosGrid">${r}</div><h3>Helper overalls color</h3><div class="avColors avCosColors">${l}</div>`}const TL={short:"Short",pixie:"Pixie",coily:"Coily",afro:"Afro",bangs:"Bangs",bob:"Bob",wavybob:"Wavy bob",curlybob:"Curly bob",sidebangs:"Side bangs",long:"Long",wavy:"Wavy",braids:"Braids",boxbraids:"Box braids",locs:"Locs",sidebraid:"Side braid",crown:"Crown",pony:"Ponytail",sidepony:"Side pony",pigtails:"Pigtails",halfup:"Half-up",buns:"Buns",puffs:"Puffs",topbun:"Top bun",lowbun:"Low bun"},PL={classic:"Tee",stripes:"Stripes",hoodie:"Hoodie",sweater:"Sweater",tank:"Tank",puff:"Puff",ruffle:"Ruffle",button:"Buttons",jersey:"Jersey",cardigan:"Cardigan",bib:"Bib",raincoat:"Raincoat"},AL={pants:"Pants",jeans:"Jeans",shorts:"Shorts",skirt:"Skirt",tutu:"Tutu",leggings:"Leggings",overalls:"Overalls",joggers:"Joggers"},RL={"":"No dress",twirl:"Twirl",sundress:"Sundress",party:"Party",pinafore:"Pinafore",jumper:"Jumper",ballet:"Ballet",nightgown:"Nightgown",raindress:"Rain"},CL={classic:"Classic",sneakers:"Sneakers",lightup:"Light-up",boots:"Boots",rainboots:"Rain boots",sandals:"Sandals",maryjanes:"Mary Janes",slippers:"Slippers"},IL={round:"Round",big:"Big",sleepy:"Sleepy",sparkle:"Sparkle",soft:"Soft",bright:"Bright"},OL={glasses:"Glasses",square:"Square",sunnies:"Sunnies",bow:"Bow",bigbow:"Big bow",headband:"Headband",flower:"Flower",cap:"Cap",beanie:"Beanie",sunhat:"Sun hat",catears:"Cat ears",earmuffs:"Earmuffs"},BL={little:"Little",kid:"Kid",adult:"Grown-up"};let Rn="hair";function Tn(e,t,n,s){return`<button type="button" class="avOpt${s?" on":""}" data-act="${e}" data-v="${t}">${n}</button>`}function $r(e,t,n){return`<button type="button" class="avSw${n?" on":""}" style="background:${t}" data-act="${e}" data-v="${t}" aria-label="Color"></button>`}function Ks(e){return`<div class="avGrid">${e}</div>`}function $i(e,t){return`<div class="avColors">${Ht.map(n=>$r(e,n,n===t)).join("")}</div>`}function zL(e,t,n,s){const o=Os(e.look2),i=e.id==="__me";Rn==="costume"&&!Pl()&&(Rn="hair");const a=Rn==="costume"?SL(e.costume,e.look2):Rn==="hair"?`<h3>Style</h3>${Ks(_l.map(c=>Tn("av-hair",c,TL[c],o.hair===c)).join(""))}<h3>Color</h3><div class="avColors">${kl.map(c=>$r("av-hairC",c,o.hairC===c)).join("")}</div>`:Rn==="face"?`<h3>Skin</h3><div class="avColors">${vl.map(c=>$r("av-skin",c,o.skin===c)).join("")}</div><h3>Eyes</h3>${Ks(El.map(c=>Tn("av-eyes",c,IL[c],o.eyes===c)).join(""))}<h3>Eye color</h3><div class="avColors">${hf.map(c=>$r("av-eyeC",c,o.eyeC===c)).join("")}</div><div class="avToggles">${Tn("av-freckles",o.freckles?"0":"1","Freckles",o.freckles)}${Tn("av-blush",o.blush?"0":"1","Blush",o.blush)}</div>`:Rn==="clothes"?`<h3>Top</h3>${Ks($l.map(c=>Tn("av-top",c,PL[c],!o.dress&&o.top===c)).join(""))}${$i("av-topC",o.topC)}<h3>Bottom</h3>${Ks(xl.map(c=>Tn("av-bottom",c,AL[c],!o.dress&&o.bottom===c)).join(""))}${$i("av-bottomC",o.bottomC)}<h3>Dress</h3>${Ks(Ml.map(c=>Tn("av-dress",c,RL[c],o.dress===c)).join(""))}${$i("av-dressC",o.dressC)}`:Rn==="shoes"?`<h3>Shoes</h3>${Ks(Ll.map(c=>Tn("av-shoes",c,CL[c],o.shoes===c)).join(""))}${$i("av-shoesC",o.shoesC)}`:`<h3>Extras</h3><p class="avHint">Pick up to two</p>${Ks(Vo.map(c=>Tn("av-acc",c,OL[c],o.acc.indexOf(c)>=0)).join(""))}${$i("av-accC",o.accC)}`,r=xL.map(c=>`<button type="button" class="avOpt sz${c===e.size?" on":""}" data-act="size" data-v="${c}">${BL[c]}</button>`).join(""),l=i?'<div class="meNote">This is you!</div>':`<button type="button" class="del${n?" sure":""}" data-act="delc">${s}<span>${n?"Tap again":""}</span></button>`;return`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${t}<div class="dress avLook"><div class="avStageWrap"><div class="avStage chibi-move">${Et(e)}</div>${l}<div class="avSizes">${r}</div></div><div class="avSide"><div class="avTabs">${EL().map(c=>`<button type="button" class="avTab${c.id===Rn?" on":""}" data-act="av-tab" data-v="${c.id}">${c.name}</button>`).join("")}</div><div class="avPane">${a}</div><div class="avBar"><button type="button" class="avSurprise" data-act="av-surprise">🎲 Surprise me</button><button type="button" class="avDone" data-act="close">Done</button></div></div></div>`}function DL(e,t,n){if(t==="av-tab")return(n==="hair"||n==="face"||n==="clothes"||n==="shoes"||n==="extras"||n==="costume"&&Pl())&&(Rn=n),null;const s=Os(e);if(t==="av-hair"&&_l.indexOf(n)>=0)return{...s,hair:n};if(t==="av-hairC")return{...s,hairC:n};if(t==="av-skin")return{...s,skin:n};if(t==="av-eyes"&&El.indexOf(n)>=0)return{...s,eyes:n};if(t==="av-eyeC")return{...s,eyeC:n};if(t==="av-freckles")return{...s,freckles:n==="1"};if(t==="av-blush")return{...s,blush:n==="1"};if(t==="av-top"&&$l.indexOf(n)>=0)return{...s,top:n,dress:""};if(t==="av-topC")return{...s,topC:n};if(t==="av-bottom"&&xl.indexOf(n)>=0)return{...s,bottom:n,dress:""};if(t==="av-bottomC")return{...s,bottomC:n};if(t==="av-dress"&&Ml.indexOf(n)>=0)return{...s,dress:n};if(t==="av-dressC")return{...s,dressC:n};if(t==="av-shoes"&&Ll.indexOf(n)>=0)return{...s,shoes:n};if(t==="av-shoesC")return{...s,shoesC:n};if(t==="av-accC")return{...s,accC:n};if(t==="av-acc"&&Vo.indexOf(n)>=0){const o=n,i=s.acc.slice(),a=i.indexOf(o);if(a>=0)i.splice(a,1);else{const r=Br(o),l=i.filter(c=>Br(c)!==r);return l.push(o),{...s,acc:l.slice(0,2)}}return{...s,acc:i}}return null}function HL(){try{return typeof navigator<"u"&&navigator.webdriver&&!window.__forceAvatarIntro?!1:localStorage.getItem(kt("avatar-intro"))!=="1"}catch{return!1}}function WL(){try{localStorage.setItem(kt("avatar-intro"),"1")}catch{}}const xr="#5a3d5c";function Tc(e,t,n,s,o){return`<path class="${e}" d="${t}" fill="none" stroke="${xr}" stroke-width="${s}" stroke-linecap="round"/><path class="${e} cloth" d="${t}" fill="none" stroke="${n}" stroke-width="${o}" stroke-linecap="round"/>`}function VL(e){const t=Os(e),n=t.skin,s=t.dress!=="",o=s||t.bottom==="skirt"||t.bottom==="tutu",i=o?n:t.bottomC,a=t.shoesC,r=s||t.bottom==="skirt"||t.bottom==="tutu";let l="";if(r){const h=s?t.dressC:t.bottomC;l+=`<path class="dress" d="M75 46 L89 46 L91 53 L73 53 Z" fill="${h}" stroke="${xr}" stroke-width="1.1" stroke-linejoin="round"/>`}l+=Tc("thigh","M76 44 Q83 48 88 54",i,6.2,4.8),l+=`<circle class="knee" cx="88" cy="56" r="2.3" fill="${i}" stroke="${xr}" stroke-width="1.1"/>`;const c=t.shoes==="boots"||t.shoes==="rainboots";l+=Tc("shin",c?"M88 58 Q90 64 91 68":"M88 58 Q90 65 91 70",o?n:i,5.8,4.4),!c&&(t.shoes==="sneakers"||t.shoes==="maryjanes"||t.shoes==="lightup")&&(l+=Tc("shin","M90 66 Q90.6 68 91 70","#ffffff",5.4,4));const d=t.shoes==="sandals"?n:a,f=c?66:69;return l+=`<path class="shoe" d="M90 ${f} Q90 ${f-2} 94 ${f-2} Q99 ${f-2} 100 ${f+1} Q100 ${f+5} 95 ${f+5} Q90 ${f+5} 90 ${f+2} Z" fill="${d}" stroke="${xr}" stroke-width="1.1" stroke-linejoin="round"/>`,t.shoes==="sandals"&&(l+=`<path d="M90 ${f+5} L100 ${f+5}" stroke="${a}" stroke-width="1.3" stroke-linecap="round"/>`,l+=`<path d="M93 ${f} L97 ${f+3}" stroke="${a}" stroke-width="1.1" stroke-linecap="round"/>`),`<svg class="rideleg" viewBox="0 0 160 130">${l}</svg>`}let We=null,rn=null,co=null,vn=null,on=0,Gi=0;const Pc=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880],Xr=[[4,-1,5,4,2,-1,3,-1],[2,3,4,-1,3,2,0,-1],[5,-1,7,6,5,-1,4,-1],[3,2,1,-1,2,-1,0,-1]],Xh=[130.81,98,110,98];function Mm(){try{return We??=If(new(window.AudioContext||window.webkitAudioContext)),rn||(rn=We.createGain(),rn.gain.value=.5,rn.connect(We.destination)),We.state==="suspended"&&We.resume().catch(()=>{}),!0}catch{return!1}}function sr(e,t,n,s,o){if(!We||!rn)return;const i=We.createOscillator(),a=We.createGain();i.type=s,i.frequency.setValueAtTime(e,t),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(o,t+.03),a.gain.exponentialRampToValueAtTime(5e-4,t+n),i.connect(a).connect(rn),i.start(t),i.stop(t+n+.05)}function Lm(){if(!We||!co)return;if(document.hidden&&vn){clearInterval(vn),vn=null;return}if(!Of||document.hidden){on=We.currentTime+.1;return}const e=Be/2e3*(co==="musicbox"?1.35:1);for(on<We.currentTime&&(on=We.currentTime+.05);on<We.currentTime+.4;){const t=Math.floor(Gi/8)%Xr.length,n=Gi%8,s=Xr[t][n];co==="musicbox"?s>=0&&sr(Pc[Math.min(Pc.length-1,s+3)]*2,on,.9,"sine",.05):(s>=0&&sr(Pc[s],on,.5,"triangle",.045),n===0&&sr(Xh[t],on,1.6,"sine",.06),n===4&&sr(Xh[t]*1.5,on,1,"sine",.035)),Gi++,on+=e}}function Jh(e){if(e!==co){if(co=e,!co){if(vn&&(clearInterval(vn),vn=null),rn&&We){const t=rn.gain;t.cancelScheduledValues(We.currentTime),t.setValueAtTime(t.value,We.currentTime),t.linearRampToValueAtTime(1e-4,We.currentTime+.4)}return}!Mm()||!We||!rn||(rn.gain.cancelScheduledValues(We.currentTime),rn.gain.setValueAtTime(.5,We.currentTime+.42),Gi=Math.floor(Date.now()/(Be/2))%(Xr.length*8),on=We.currentTime+.45,vn||(vn=setInterval(Lm,120)))}}function UL(){Mm()}og(()=>{co&&We&&!vn&&(Gi=Math.floor(Date.now()/(Be/2))%(Xr.length*8),on=We.currentTime+.1,vn=setInterval(Lm,120))});const QL=2,NL=340,qL=380;function FL(e,t){const n=new Map;for(const[a,r]of t){if(r.kind!=="dance")continue;const l=e.find(c=>c.id===r.item);!l||!l.on||gs(l.kind)!=="stereo"||(n.get(r.item)??n.set(r.item,[]).get(r.item)).push(a)}let s=null;for(const a of[...n].sort((r,l)=>r[0]<l[0]?-1:1))a[1].length>=QL&&(!s||a[1].length>s[1].length)&&(s=a);if(!s)return null;const o=e.find(a=>a.id===s[0]),i=e.filter(a=>a.id!==o.id&&pf(a.kind)&&Math.hypot(a.x-o.x,(a.y-o.y)*1.5)<=NL).map(a=>a.id).sort();return{stereo:o.id,x:o.x,y:o.y,dancers:s[1].sort(),toys:i}}const jL="http://www.w3.org/1999/xhtml",eu=new Map;function Od(e){if(e.startsWith("data:"))return Promise.resolve(e);let t=eu.get(e);return t||(t=(async()=>{try{const n=new URL(e,location.href);if(n.origin!==location.origin)return"";const o=await(await fetch(n.href,{credentials:"same-origin"})).blob();return await new Promise(i=>{const a=new FileReader;a.onload=()=>i(String(a.result)),a.onerror=()=>i(""),a.readAsDataURL(o)})}catch{return""}})(),eu.set(e,t)),t}const Bd=/url\((['"]?)([^'")]+)\1\)/g;async function tu(e,t,n){const s=new Map;for(const i of e.matchAll(Bd)){const a=i[2];if(a.startsWith("data:")||a.startsWith("#"))continue;let r=a;try{r=new URL(a,t).href}catch{}s.set(a,r)}const o=new Map;return await Promise.all([...s].map(async([i,a])=>o.set(i,n(a)?await Od(a):""))),e.replace(Bd,(i,a,r)=>{if(r.startsWith("data:")||r.startsWith("#"))return i;const l=o.get(r);return l?`url("${l}")`:"none"})}const ZL=["transform","translate","rotate","scale","opacity","filter"];async function GL(e,t){const n=e.offsetWidth,s=e.offsetHeight,o=new Map;for(const _ of document.getAnimations()){const P=_.effect?.target;if(!P||!(e===P||e.contains(P))||_.effect.pseudoElement)continue;const $=getComputedStyle(P);o.set(P,ZL.map(M=>`${M}:${$.getPropertyValue(M)}`).join(";"))}const i=new Set,a=_=>{for(const P of _.matchAll(Bd))try{i.add(new URL(P[2],location.href).href)}catch{}},r=[e,...e.querySelectorAll("*")];for(const _ of r)a(getComputedStyle(_).backgroundImage),a(getComputedStyle(_,"::before").backgroundImage),a(getComputedStyle(_,"::after").backgroundImage);const l=e.cloneNode(!0),c=[l,...l.querySelectorAll("*")],d=[];r.forEach((_,P)=>{const $=c[P];if(!$)return;const M=o.get(_);M&&$.setAttribute("style",($.getAttribute("style")||"")+";"+M);const z=$.getAttribute("style");if(z&&z.includes("url(")&&d.push(tu(z,location.href,()=>!0).then(V=>$.setAttribute("style",V))),_ instanceof HTMLImageElement&&$ instanceof HTMLImageElement){const V=_.currentSrc||_.src;$.removeAttribute("srcset"),$.removeAttribute("loading"),d.push(Od(V).then(U=>{U?$.src=U:$.removeAttribute("src")}))}else if(_ instanceof HTMLCanvasElement)try{const V=document.createElement("img");V.src=_.toDataURL(),V.setAttribute("style",getComputedStyle(_).cssText||`width:${_.offsetWidth}px;height:${_.offsetHeight}px`),V.className=_.className,$.replaceWith(V)}catch{}else if(_ instanceof SVGImageElement){const V=_.href.baseVal;V&&d.push(Od(V).then(U=>{U&&$.setAttribute("href",U)}))}_.tagName==="BUTTON"&&_.classList.contains("nudge")&&$.setAttribute("style","display:none")}),l.style.transform="none",l.style.left="0",l.style.top="0",l.style.position="relative",l.style.margin="0";let f="";for(const _ of[...document.styleSheets])try{const P=[..._.cssRules].map($=>$.cssText).join(`
`);f+=await tu(P,_.href||location.href,$=>i.has($))}catch{}f=f.replace(/:root\b/g,".pbHtml")+`
*,*::before,*::after{animation:none!important;transition:none!important}`,await Promise.all(d);const h=document.documentElement,u=document.body,y=new XMLSerializer,g=`<div xmlns="${jL}" class="pbHtml ${h.className}" style="${nu(h.getAttribute("style")||"")};width:${n}px;height:${s}px;overflow:hidden"><style>${f.replace(/<\/style/gi,"<\\/style")}</style><body class="${nu(u.className)}" style="margin:0;width:${n}px;height:${s}px;overflow:hidden;background:transparent"><div id="app"><div class="stageWrap" style="position:relative;margin:0;padding:0;width:${n}px;height:${s}px;inset:auto;transform:none">`+y.serializeToString(l)+"</div></div></body></div>",v=`<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${s}" viewBox="0 0 ${n} ${s}"><foreignObject x="0" y="0" width="${n}" height="${s}">${g}</foreignObject></svg>`,w="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(v),m=document.createElement("canvas");m.width=Math.round(n*t),m.height=Math.round(s*t);const b=m.getContext("2d");try{const _=new Image;_.decoding="sync",_.src=w,await _.decode().catch(()=>new Promise(P=>{_.onload=P,_.onerror=P})),b.drawImage(_,0,0,m.width,m.height),await new Promise(P=>setTimeout(P,60)),b.clearRect(0,0,m.width,m.height),b.drawImage(_,0,0,m.width,m.height)}finally{}return m}const nu=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function YL(e,t=new Date,n=0){const s=e.width/600,o=Math.round(26*s),i=Math.round(64*s),a=document.createElement("canvas");a.width=e.width+o*2,a.height=e.height+o+i;const r=a.getContext("2d"),l=r.createLinearGradient(0,0,a.width,a.height);l.addColorStop(0,"#ffd6e8"),l.addColorStop(.5,"#fff1c9"),l.addColorStop(1,"#d9ecff"),r.fillStyle=l,Ac(r,0,0,a.width,a.height,30*s),r.fill(),r.lineWidth=5*s,r.strokeStyle="#5a3d5c",Ac(r,2.5*s,2.5*s,a.width-5*s,a.height-5*s,28*s),r.stroke(),r.save(),n>0&&(Ac(r,o,o,e.width,e.height,n),r.clip()),r.drawImage(e,o,o),r.restore();const c=["#ff7aa8","#ffd166","#7ec8ff","#b48cff","#8ee08e"];for(let d=0;d<26;d++){const h=d/26*a.width,u=d%2?o/2:a.height-i/2+(d%4-1.5)*8*s;r.fillStyle=c[d%5],r.beginPath(),r.arc(h+10*s,(d%2,u),4*s,0,Math.PI*2),r.fill()}return KL(r,o*1.2,a.height-i/2,14*s,"#ffd166"),XL(r,a.width-o*1.3,a.height-i/2,13*s,"#ff7aa8"),r.fillStyle="#5a3d5c",r.textAlign="center",r.textBaseline="middle",r.font=`800 ${Math.round(24*s)}px ui-rounded, "SF Pro Rounded", "Nunito", system-ui, sans-serif`,r.fillText("Our cozy house · "+t.toLocaleDateString(void 0,{month:"short",day:"numeric"}),a.width/2,a.height-i/2),a}function Ac(e,t,n,s,o,i){e.beginPath(),e.moveTo(t+i,n),e.arcTo(t+s,n,t+s,n+o,i),e.arcTo(t+s,n+o,t,n+o,i),e.arcTo(t,n+o,t,n,i),e.arcTo(t,n,t+s,n,i),e.closePath()}function KL(e,t,n,s,o){e.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?s*.45:s;e.lineTo(t+Math.cos(a)*r,n+Math.sin(a)*r)}e.closePath(),e.fillStyle=o,e.fill(),e.lineWidth=s/5,e.strokeStyle="#5a3d5c",e.stroke()}function XL(e,t,n,s,o){e.beginPath(),e.moveTo(t,n+s*.9),e.bezierCurveTo(t-s*1.6,n-s*.2,t-s*.6,n-s*1.3,t,n-s*.4),e.bezierCurveTo(t+s*.6,n-s*1.3,t+s*1.6,n-s*.2,t,n+s*.9),e.fillStyle=o,e.fill(),e.lineWidth=s/5,e.strokeStyle="#5a3d5c",e.stroke()}function JL(e,t){const n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect(),o=(u,y)=>u?(parseFloat(getComputedStyle(u).borderTopRightRadius)||0)*y:0,i=e.width/(n.width||1),a=e.height/(n.height||1),r=e.width/Math.max(1,t.offsetWidth);if(!s||!n.width)return{c:e,radius:o(t,r)};const l=Math.max(n.left,s.left,0),c=Math.max(n.top,s.top,0),d=Math.min(n.right,s.right,innerWidth),f=Math.min(n.bottom,s.bottom,innerHeight);if(d-l>=n.width-2&&f-c>=n.height-2)return{c:e,radius:o(t,r)};if(d<=l||f<=c)return{c:e,radius:o(t,r)};const h=document.createElement("canvas");return h.width=Math.round((d-l)*i),h.height=Math.round((f-c)*a),h.getContext("2d").drawImage(e,(l-n.left)*i,(c-n.top)*a,h.width,h.height,0,0,h.width,h.height),{c:h,radius:o(t.parentElement,i)}}const e7=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let Rc=!1;async function t7(e,t){if(!Rc){Rc=!0;try{const n=Math.min(2,Math.max(1,window.devicePixelRatio||1),1600/Math.max(1,e.offsetWidth)),s=GL(e,n),o=document.createElement("div");o.className="pbFlash"+(e7()?" soft":""),document.body.appendChild(o),t?.(),setTimeout(()=>o.remove(),700);const i=JL(await s,e),a=YL(i.c,new Date,i.radius),r=await new Promise(l=>a.toBlob(l,"image/png"));if(!r)return;n7(r)}catch(n){console.warn("photo booth",n)}finally{Rc=!1}}}function n7(e){document.querySelector(".pbCard")?.remove();const t=URL.createObjectURL(e),n="cozy-house-"+new Date().toISOString().slice(0,10)+".png",s=typeof File=="function"?new File([e],n,{type:"image/png"}):null,o=document.createElement("div");o.className="pbCard",o.setAttribute("role","dialog"),o.setAttribute("aria-label","Your photo"),o.innerHTML=`<div class="pbInner"><img class="pbImg" alt="Your photo" src="${t}"/><div class="pbBtns"><button type="button" class="pbSave">💾 Save</button><button type="button" class="pbClose">Close</button></div></div>`,document.body.appendChild(o);const i=()=>{o.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)};o.querySelector(".pbClose").addEventListener("click",i),o.addEventListener("click",a=>{a.target===o&&i()}),o.querySelector(".pbSave").addEventListener("click",async()=>{const a=navigator;if(s&&a.share&&a.canShare?.({files:[s]}))try{await a.share({files:[s]});return}catch(l){if(l?.name==="AbortError")return}const r=document.createElement("a");r.href=t,r.download=n,document.body.appendChild(r),r.click(),r.remove()})}const s7=/rug|lamp|light|plant|curtain|clock|window|lantern/;function o7(e){if(e.cat==="plants")return!0;const t=`${e.name} ${e.kind??""}`.toLowerCase();return s7.test(t)}const Em=new Set(["pack:ring-light","pack:desk-lamp",...Lb,...Rb]);function Sm(e,t=new Date){return e.pack===z0&&!D0(t)}function Tm(e){const t=e.rooms??[];return t.includes("backyard")&&!t.includes("any")}function i7(e,t){if(t==="nursery"&&e.kind&&Em.has(e.kind))return!1;if(t==="backyard")return Tm(e);if(t==="all"||!t)return!0;const n=e.rooms;return!n||n.length===0||n.includes(t)?!0:n.includes("any")?e.cat==="decor"||e.cat==="furniture"?o7(e):!0:!1}function a7(e,t,n,s,o){return e.secret&&!(o&&o.has(e.secret))||Sm(e)||!s&&n==="backyard"&&!Tm(e)||n==="nursery"&&e.kind&&Em.has(e.kind)?!1:t.startsWith("pack:")?e.pack===t.slice(5):e.cat!==t?!1:i7(e,s?"all":n)}const Pm="cozy-candy",su=["🍬","🍭","🍫","🍪","🧁","🍎"];function Am(e){try{const t=Number(e?.getItem(Pm)??0);return Number.isFinite(t)&&t>0?Math.min(9999,Math.floor(t)):0}catch{return 0}}function r7(e,t=Math.random()){const n=Math.min(9999,Am(e)+1);try{e?.setItem(Pm,String(n))}catch{}return{count:n,treat:su[Math.floor(Math.max(0,Math.min(.999,t))*su.length)]}}function Rm(e=new Date,t=typeof location<"u"?location.search:""){return/[?&]halloween=0\b/.test(t)?!1:/[?&]halloween=1\b/.test(t)||D0(e)}function l7(e){return`${String(e??"").replace(/[^\p{L}' -]/gu,"").replace(/\s+/g," ").trim().slice(0,30)||"A friend"} came trick-or-treating!`}const c7=200,d7=170,f7=210,p7=420,h7=70,Jr=12e3,u7=4200,g7=3,Cc=["wave","hop","heart"];function ha(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0)%1e4/1e4}const Ic=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5),m7=(e,t)=>e.id<t.id?-1:e.id>t.id?1:0;function y7(e,t,n,s){const o=ha(e+"|"+t+"|"+n)*Jr;return(s+o)%Jr<u7}function w7(e,t,n,s){const o=ha(e+"|"+t+"|"+n)*Jr,i=Math.floor((s+o)/Jr);return Cc[Math.floor(ha(e+t+n+i)*Cc.length)%Cc.length]}function b7(e,t,n,s,o){const i={pair:new Map,duet:new Map,nearBaby:new Map,babyCoo:!1,pets:new Map},a=[...t].sort(m7),r=new Set;for(const h of a){if(!h.dancingAt||r.has(h.id))continue;let u=null,y=1/0;for(const g of a){if(g===h||r.has(g.id)||g.dancingAt!==h.dancingAt)continue;const v=Ic(h,g);v<=d7&&v<y&&(y=v,u=g)}if(u){const g=ha(e+h.id+u.id);i.duet.set(h.id,{with:u.id,face:u.x<h.x?-1:1,phase:g}),i.duet.set(u.id,{with:h.id,face:h.x<u.x?-1:1,phase:g}),r.add(h.id),r.add(u.id)}}const l=a.filter(h=>!h.busy&&!h.lying),c=[];for(let h=0;h<l.length;h++)for(let u=h+1;u<l.length;u++){const y=Ic(l[h],l[u]);y<=c7&&c.push({a:l[h],b:l[u],d:y})}c.sort((h,u)=>h.d-u.d||(h.a.id+h.b.id<u.a.id+u.b.id?-1:1));const d=new Set;for(const{a:h,b:u}of c){if(i.pair.size>=g7*2)break;if(d.has(h.id)||d.has(u.id)||(d.add(h.id),d.add(u.id),!y7(e,h.id,u.id,o)))continue;let y=w7(e,h.id,u.id,o);y==="hop"&&(h.seated||u.seated)&&(y="wave");const g=ha(e+h.id+u.id);i.pair.set(h.id,{kind:y,with:u.id,face:u.x<h.x?-1:1,phase:g}),i.pair.set(u.id,{kind:y,with:h.id,face:h.x<u.x?-1:1,phase:(g+.18)%1})}if(s)for(const h of a)!h.lying&&Ic(h,s)<=f7&&(i.nearBaby.set(h.id,s.x<h.x?-1:1),i.babyCoo=!0);const f=a.filter(h=>h.seated||h.lying);for(const h of[...n].sort((u,y)=>u.key<y.key?-1:1)){let u=null,y=1/0;for(const m of f){const b=Math.abs(m.x-h.x);b<=p7&&b<y&&(y=b,u=m)}if(!u)continue;const g=h.x<=u.x?-1:1,v=[...i.pets.values()].some(m=>m.toward===u.id),w=u.x+g*h7*(v?1.9:1);i.pets.set(h.key,{toward:u.id,dx:Math.round(w-h.x)})}return i}const v7={play:Be,listen:Be*4,stir:Be*2,swing:Be*3,slide:Be*4,look:Be*5,kneel:Be*3},k7={play:"<span>♪</span><span>♩</span>",listen:"<span>♪</span>"},_7={keys:"<span>♪</span><span>♫</span><span>♩</span>",stove:'<span class="steam"></span><span class="steam"></span><span class="steam"></span>',water:'<span class="bub"></span><span class="bub"></span><span class="ripple"></span>',ducky:""},Yi=new Map;let Xs=null;function $7(e){try{Xs??=If(new(window.AudioContext||window.webkitAudioContext)),Xs.state==="suspended"&&Xs.resume().catch(()=>{});const t=Xs.currentTime+.02,n=[523.25,587.33,659.25,783.99,880,1046.5];for(let s=0;s<6;s++){const o=Xs.createOscillator(),i=Xs.createGain();o.type="triangle",o.frequency.value=n[(e+s*(s%2?2:3))%n.length];const a=t+s*.28;i.gain.setValueAtTime(0,a),i.gain.linearRampToValueAtTime(.06,a+.02),i.gain.exponentialRampToValueAtTime(8e-4,a+.6),o.connect(i).connect(Xs.destination),o.start(a),o.stop(a+.65)}}catch{}}function x7(e,t,n,s){if(ff(e)!=="keys")return!1;const o=Date.now();return(Yi.get(t)??0)>o?Yi.delete(t):(Yi.set(t,o+Fp),n&&$7(o%6),setTimeout(s,Fp+60)),s(),!0}function M7(e=Date.now()){const t=new Set;return Yi.forEach((n,s)=>{n>e?t.add(s):Yi.delete(s)}),t}function L7(e,t,n,s,o,i){const a=ff(e);if(a==="keys")return s.has(t)?"keys":null;if(a==="stove")return o.has(t)?"stove":null;if(a==="water"){for(const r of n.values())if(r.item===t&&r.kind==="look")return"water";return null}return wy(e)&&i?"ducky":null}const ou=["soc-wave","soc-hop","soc-heart","soc-l","soc-r","soc-duet","soc-baby"];let iu=new Map,Oc=new Set;const au=new Map;function E7(e,t){return{x:(e.offsetLeft+e.offsetWidth/2)/t,y:(e.offsetTop+e.offsetHeight)/t}}function S7(e,t){const n=e.layer.offsetWidth/e.roomW||1,s=[],o=new Map;e.layer.querySelectorAll(":scope > .pet").forEach((c,d)=>{if(c.classList.contains("lifted")||c.classList.contains("kenneled"))return;const f=c.classList.contains("pet-cat")?"cat":c.dataset.dog||"pet"+d;s.push({key:f,...E7(c,n)}),o.set(f,c)});const i=[];for(const[c,{d}]of e.dolls){const f=t.get(c);i.push({...d,id:c,busy:!!f,dancingAt:f?.kind==="dance"?f.item:void 0})}const a=b7(e.seed,i,s,e.baby,e.now),r=new Map;for(const c of i)for(const d of i)c!==d&&Math.hypot(c.x-d.x,(c.y-d.y)*1.5)<=200&&(r.get(c.id)??r.set(c.id,new Set).get(c.id)).add(d.id);for(const[c,d]of r)for(const f of d)!iu.get(c)?.has(f)&&Oc.has(c)&&Oc.has(f)&&au.set(c,e.now+1800);iu=r,Oc=new Set(i.map(c=>c.id));for(const[c,{el:d}]of e.dolls){const f=t.get(c),h=a.pair.get(c),u=a.duet.get(c),y=a.nearBaby.get(c),g=(au.get(c)??0)>e.now;let v="",w=0,m=0;if(u&&f)v="soc-duet",w=u.face,m=u.phase;else if(!f&&g){v="soc-wave";const P=[...r.get(c)??[]][0],$=P?e.dolls.get(P)?.d:void 0;w=$?$.x<e.dolls.get(c).d.x?-1:1:0}else!f&&h?(v="soc-"+h.kind,w=h.face,m=h.phase):!f&&y&&(v="soc-baby",w=y);const b=v+w;if(d.dataset.soc===b)continue;if(d.classList.remove(...ou),!v){delete d.dataset.soc;continue}d.dataset.soc=b,d.classList.add(v),w&&d.classList.add(w<0?"soc-l":"soc-r");const _=Be*2;d.style.setProperty("--soc-delay",ro(m,_,e.now)+"ms"),v==="soc-duet"&&d.style.setProperty("--amb-delay",ro(m,Be*2,e.now)+"ms")}for(const c of e.layer.querySelectorAll("[data-soc]"))c.dataset.id||c.dataset.pid,[...e.dolls.values()].some(d=>d.el===c)||(c.classList.remove(...ou),delete c.dataset.soc);for(const[c,d]of o){const f=a.pets.get(c),h=f&&!e.reduced||f?f.dx*n:0,u=parseFloat(d.dataset.socDx||"0");Math.abs(h-u)<1||(d.dataset.socDx=String(h),d.classList.toggle("soc-trot",Math.abs(h-u)>12&&!e.reduced),d.classList.toggle("soc-snug",!!f),d.style.translate=h?`${h.toFixed(1)}px 0`:"",Math.abs(h-u)>12&&setTimeout(()=>d.classList.remove("soc-trot"),1300))}const l=e.layer.querySelector(":scope > .baby");l&&l.classList.toggle("soc-coo",a.babyCoo)}function T7(e){return!!(e.held?.left&&fn(e.held.left.kind))||!!(e.held?.right&&fn(e.held.right.kind))}function Bc(e,t){const n=_f(t);return!n||t.seat?.pose==="lie"||$f(e,t,"clean")||T7(t)?null:n}function es(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function P7(e){!e||es()||(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),window.setTimeout(()=>e.classList.remove("wiggle"),480))}const A7=".round, .thing";function R7(){let e=null;const t=()=>{e?.classList.remove("pressing"),e=null};document.addEventListener("pointerdown",n=>{t();const s=n.target?.closest?.(A7);s&&(s.classList.add("pressing"),e=s)},{capture:!0,passive:!0});for(const n of["pointerup","pointercancel","dragstart","blur"])window.addEventListener(n,t,{capture:!0,passive:!0});document.addEventListener("pointerup",n=>{if(es())return;const s=n.target?.closest("button");s&&(s.classList.remove("spring"),s.offsetWidth,s.classList.add("spring"))},!0)}const Cm=kt("khg.showWishes"),or=()=>{try{return localStorage.getItem(Cm)!=="0"}catch{return!0}},C7={sleepy:'<svg viewBox="0 0 40 40"><rect x="5" y="20" width="30" height="10" rx="3" fill="#8fb8ff" stroke="#5b3d5c" stroke-width="2.5"/><rect x="7" y="15" width="10" height="7" rx="3" fill="#fff" stroke="#5b3d5c" stroke-width="2.5"/><path d="M6 30 V34 M34 30 V34" stroke="#5b3d5c" stroke-width="2.5" stroke-linecap="round"/><path d="M24 6 H31 L24 13 H31" fill="none" stroke="#5b3d5c" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/></svg>',hungry:'<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="12" fill="#ff6b6b" stroke="#5b3d5c" stroke-width="2.5"/><path d="M20 11 V6" stroke="#5b3d5c" stroke-width="2.5" stroke-linecap="round"/><path d="M21 9 Q28 4 31 9 Q26 13 21 9 Z" fill="#7bd389" stroke="#5b3d5c" stroke-width="2"/></svg>',playful:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="16" rx="10" ry="12" fill="#ffd166" stroke="#5b3d5c" stroke-width="2.5"/><path d="M18 28 L22 28 L20 31 Z" fill="#ffd166" stroke="#5b3d5c" stroke-width="2"/><path d="M20 31 Q16 34 20 37" fill="none" stroke="#5b3d5c" stroke-width="2" stroke-linecap="round"/></svg>',clean:'<svg viewBox="0 0 40 40"><circle cx="15" cy="23" r="9" fill="#bfe9ff" stroke="#5b3d5c" stroke-width="2.5"/><circle cx="27" cy="14" r="6" fill="#bfe9ff" stroke="#5b3d5c" stroke-width="2.5"/><circle cx="29" cy="29" r="4" fill="#bfe9ff" stroke="#5b3d5c" stroke-width="2"/><path d="M11 19 Q13 17 15 17" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>'},I7={sleepy:"wants a nap",hungry:"wants a snack",playful:"wants to play",clean:"wants a bath"},O7='<svg viewBox="0 0 48 48"><path d="M6 28 Q24 8 42 28" fill="none" stroke="#5b3d5c" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="30" rx="14" ry="11" fill="#fff" stroke="#5b3d5c" stroke-width="3"/><circle cx="20" cy="30" r="5" fill="#ffd166" stroke="#5b3d5c" stroke-width="2.5"/><circle cx="31" cy="24" r="3" fill="#fff" stroke="#5b3d5c" stroke-width="2"/></svg>',B7='<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="14" ry="11" fill="#eee" stroke="#5b3d5c" stroke-width="3"/><path d="M10 40 L38 18" stroke="#5b3d5c" stroke-width="3" stroke-linecap="round"/></svg>',Im=(e,t)=>e==="sleepy"?/(^|-|:)bed$|bunk-bed|canopy-bed/.test(t):e==="hungry"?ni(t):e==="clean"?jn(t):Zo(t);function z7(e,t,n){const s=e.rooms[t.room]?.items??[],o=r=>n==="sleepy"?/bed|crib|cot/.test(r):n==="hungry"?ni(r)||fn(r):n==="clean"?jn(r):Zo(r);let i=null,a=1/0;for(const r of s)if(o(r.kind)){const l=Math.abs(r.x-t.x);l<a&&(a=l,i=r.x)}return i}function D7(e,t){const n=o=>Im(t,o);if((e.rooms[e.currentRoom]?.items??[]).some(o=>n(o.kind)))return null;const s=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"];for(const o of s){if(o===e.currentRoom)continue;if((e.rooms[o]?.items??[]).some(a=>n(a.kind)))return o}return null}function H7(e){const t=new Map,n=new Map;let s=0,o=performance.now(),i=0,a=0;const r=document.createElement("button");r.type="button",r.className="menuRow",r.id="btnWishes",r.innerHTML='<span class="mIco" id="wishIco"></span><span class="mLabel">Show wishes</span>';const l=()=>{const g=or();r.querySelector("#wishIco").innerHTML=g?O7:B7,r.setAttribute("aria-label",g?"Wishes on":"Wishes off"),r.setAttribute("aria-pressed",String(g))};r.addEventListener("click",()=>{try{localStorage.setItem(Cm,or()?"0":"1")}catch{}l(),C.click(),h(),j(or()?"Wishes on":"Wishes off",1400)}),e.menuAfter?.insertAdjacentElement("afterend",r),l();function c(g){if(es()){g.classList.add("need-glow"),setTimeout(()=>g.classList.remove("need-glow"),900);return}const v=document.createElement("div");v.className="need-burst",v.setAttribute("aria-hidden","true");for(let m=0;m<7;m++){const b=document.createElement("i");b.className=m%2?"nb-heart":"nb-spark",b.style.setProperty("--a",m/7*360+15+"deg"),b.style.setProperty("--dl",m*40+"ms"),v.appendChild(b)}g.appendChild(v),setTimeout(()=>v.remove(),1400);const w=g.querySelector(":scope > .inner");w?.classList.remove("need-hop"),w?.offsetWidth,w?.classList.add("need-hop")}function d(g,v,w){const m=g.offsetWidth?g.getBoundingClientRect().width/g.offsetWidth:1;if(m>0&&Number.isFinite(m)&&v.style.setProperty("--nbs",m.toFixed(3)),!w){v.style.left="",v.style.bottom="";return}const b=g.querySelector(".inner svg .dollhead");if(!b)return;const _=g.getBoundingClientRect(),P=b.getBoundingClientRect();!_.width||!_.height||!P.width||(v.style.left=((P.left+P.width/2-_.left)/_.width*100).toFixed(1)+"%",v.style.bottom=((_.bottom-P.top)/_.height*100+4).toFixed(1)+"%")}function f(g){const v=g.querySelector(".inner svg .dollhead");if(!v)return;const w=g.getBoundingClientRect(),m=v.getBoundingClientRect();!w.width||!w.height||!m.width||(g.style.setProperty("--zx",((m.left+m.width*.7-w.left)/w.width*100).toFixed(1)+"%"),g.style.setProperty("--zy",((m.top-w.top)/w.height*100-14).toFixed(1)+"%"))}function h(){const g=e.get(),v=or();for(const b of e.layer.querySelectorAll(".char[data-cid]")){const _=g.characters.find(we=>we.id===b.dataset.cid);if(!_)continue;const P={sleepy:3,hungry:3,playful:3,clean:3};for(const we of lo)P[we]=uo(_,we);const $=t.get(_.id);$&&lo.some(we=>P[we]>$[we])&&(c(b),C.sparkle()),t.set(_.id,P);const M=Bc(g,_),z=!!_.seat&&_.seat.pose==="lie";b.classList.toggle("need-snooze",z),z?requestAnimationFrame(()=>f(b)):(b.style.removeProperty("--zx"),b.style.removeProperty("--zy")),b.classList.toggle("need-sleepy",M==="sleepy"&&!z);let V=b.querySelector(":scope > .need-bubble");if(!M||!v){if(V){V.classList.remove("show");const we=V;setTimeout(()=>{we.classList.contains("show")||we.remove()},450)}continue}V||(V=document.createElement("div"),V.className="need-bubble",V.innerHTML='<i class="nb-dot1"></i><i class="nb-dot2"></i><span class="nb-cloud"></span>',b.appendChild(V)),V.dataset.need!==M&&(V.dataset.need=M,V.querySelector(".nb-cloud").innerHTML=C7[M],V.setAttribute("role","img"),V.setAttribute("aria-label",I7[M]));const U=z7(g,_,M),F=U==null?0:Math.max(-1,Math.min(1,(U-_.x)/300));V.style.setProperty("--lean",String(Math.round(F*100)/100));const oe=V;requestAnimationFrame(()=>{d(b,oe,z),oe.classList.add("show")})}for(const b of t.keys())g.characters.some(_=>_.id===b)||t.delete(b);const w=new Set;if(v){for(const b of g.characters)if(b.room===g.currentRoom&&Bc(g,b)){for(const _ of lo)if(uo(b,_)<=1)for(const P of g.rooms[g.currentRoom]?.items??[])Im(_,P.kind)&&w.add(P.id)}}for(const b of e.layer.querySelectorAll(".item[data-id]"))b.classList.toggle("need-hint",w.has(b.dataset.id));const m=document.getElementById("tabs");if(m){const b=document.body.classList.contains("mode-play");let _=null;if(v&&b)for(const P of g.characters){if(P.room!==g.currentRoom)continue;const $=Bc(g,P);if($&&(_=D7(g,$),_))break}for(const P of m.querySelectorAll("[data-room]"))P.classList.toggle("need-elsewhere",!!_&&P.dataset.room===_)}e.afterPaint?.()}function u(){if(!e.speaks())return;const g=e.get(),v=Date.now();for(const w of g.characters)if(w.room===g.currentRoom)for(const m of Tw(g,w)){const b=w.id+"|"+m;v-(n.get(b)??0)<2500||(n.set(b,v),e.dispatch({type:"need/meet",id:w.id,need:m}))}}function y(g){const v=performance.now(),w=g??Math.min(v-o,5e3);if(o=v,g==null&&document.visibilityState!=="visible")return;if(!e.canDrift()||!e.speaks()){s=0;return}if(s+=w,s<Lw(e.get(),a))return;s=0,a++;const m=Rw(e.get(),i++);m&&e.dispatch({type:"need/drift",id:m.id,need:m.need})}e.subscribe(()=>{h(),setTimeout(u,0)}),e.layer.addEventListener("pointerup",g=>{g.target.closest?.(".char[data-cid]")&&(n.clear(),u())}),setInterval(()=>{document.hidden||(y(),h())},1e3),document.addEventListener("visibilitychange",()=>{o=performance.now()}),h(),new URLSearchParams(location.search).has("needsqa")&&(window.__needs={tick:g=>y(g),visible:()=>s,paint:h,care:u})}function W7(e){const t=e.scale;let n=0;e.overflowR>1&&e.overflowL>1?n=-e.overflowL:e.overflowR>1?n=e.overflowR:e.overflowL>1&&(n=-e.overflowL);const s=e.cam+n/t,o=Math.max(0,Math.min(e.maxCam,s)),i=s-o,a=e.nudgeX&&Math.abs(i)>.5?e.kidX-i:e.kidX;return{cam:o,kidX:a}}function V7(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function U7(e,t=3){const n=[...e].sort((l,c)=>l.x-c.x||l.id.localeCompare(c.id)),s=[],o=[],i=(l,c,d,f)=>d===void 0||f===void 0||l.y===void 0||l.h===void 0?l.lane===c:Math.abs(d-c*f-(l.y-l.lane*l.h))<(f+l.h)/2,a=(l,c,d,f,h)=>s.some(u=>i(u,d,f,h)&&Math.abs(u.x-l)<(u.w+c)/2+8),r=[];for(const l of n){let c=-1;for(let d=0;d<t;d++)if(!a(l.x,l.w,d,l.y,l.h)){c=d;break}c<0?r.push(l):(s.push({x:l.x,w:l.w,lane:c,y:l.y,h:l.h}),o.push({id:l.id,lane:c,initials:!1}))}for(const l of r){const c=Math.min(l.w,44);let d=0;for(let f=0;f<t;f++)if(!a(l.x,c,f,l.y,l.h)){d=f;break}s.push({x:l.x,w:c,lane:d,y:l.y,h:l.h}),o.push({id:l.id,lane:d,initials:!0})}return o}let Q7=0;function Om(e=document){const t=[...e.querySelectorAll(".nametag")].filter(o=>{const i=o.getBoundingClientRect();return i.width>2&&i.height>2});if(!t.length)return;const n=t.map(o=>{o.dataset.tagId||(o.dataset.tagId="tg"+(++Q7).toString(36)),o.dataset.full||(o.dataset.full=(o.textContent||"").trim()),o.classList.contains("is-initials")||(o.dataset.fullW=String(o.getBoundingClientRect().width));const i=o.getBoundingClientRect(),a=Number(o.dataset.fullW)||i.width,r=(parseFloat(getComputedStyle(o).fontSize)||16)*1.35,l=Number(o.style.getPropertyValue("--tag-lane"))||0;return{id:o.dataset.tagId,x:i.left+i.width/2,w:a,y:i.bottom+l*r,h:Math.max(r,i.height)}}),s=new Map(U7(n).map(o=>[o.id,o]));for(const o of t){const i=s.get(o.dataset.tagId||"");if(!i)continue;const a=o.dataset.full||"",r=i.initials?V7(a):a;o.textContent!==r&&(o.textContent=r),o.classList.toggle("is-initials",i.initials),o.style.setProperty("--tag-lane",String(i.lane))}}const zd=120,N7=300,q7=.25,F7=500;function j7(e){return!Number.isFinite(e)||e<=0?zd:Math.round(Math.min(N7,Math.max(zd,e)))}function Z7(e){return e.reduced||e.first||e.sinceResizeMs<F7||!(e.jumpFrac<=q7)?0:j7(e.avgGapMs*1.15)}let Bm=-1/0;if(typeof window<"u"){const e=()=>{Bm=performance.now()};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}function ru(e,t,n){if(!e)return NaN;const s=parseFloat(e),o=parseFloat(t);return!Number.isFinite(s)||!Number.isFinite(o)?NaN:e.endsWith("%")&&t.endsWith("%")?Math.abs(o-s)/100:e.endsWith("px")&&t.endsWith("px")&&n>0?Math.abs(o-s)/n:NaN}function Nl(e,t,n,s=performance.now()){if(!(e.style.left===t&&e.style.top===n)){if(e.classList.contains("other")){const o=Number(e.dataset.glideAt||0);e.dataset.glideAt=String(s);const i=o?Math.min(s-o,600):zd,r=(Number(e.dataset.glideGap||0)||i)*.5+i*.5;e.dataset.glideGap=String(r);const l=e.parentElement,c=Math.max(ru(e.style.left,t,l?.clientWidth??0),ru(e.style.top,n,l?.clientHeight??0)),d=Z7({first:!o||!e.style.left,jumpFrac:c,sinceResizeMs:s-Bm,reduced:es(),avgGapMs:r});e.style.transitionDuration=d+"ms",e.dataset.glideMs=String(d)}e.style.left=t,e.style.top=n}}function zm(e,t,n=t+"s"){return`${e} ${e===1?t:n}`}function G7(e,t){const n=t?.type??"";switch(e){case"locked":return"This house is locked 🔒 You can look around!";case"notyours":return n==="char/move"||n.startsWith("item/")?"That's hers to move 💛":"Only she can do that one 💛";case"cuddling":return"Someone is cuddling!";case"nohouse":return"That house isn't on the street anymore.";case"toobig":return"This house is super full! Put something away first.";default:return""}}function Y7(e,t,n){const s=n?"the "+n.toLowerCase():"something";return e?t.type==="item/move"?`${e} moved ${s}`:t.type==="item/delete"?`${e} put ${s} away`:"":""}function K7(e=5e3){const t=new Map;return(n,s=Date.now())=>{const o=t.get(n)??-1/0;if(s-o<e)return!1;if(t.set(n,s),t.size>64)for(const[i,a]of t)s-a>e&&t.delete(i);return!0}}const X7="Everyone's already playing! Ask a grown-up to add your name.",J7=e=>`${e} is already on the list 💛`,Dm="/cozy-preview/assets/window-CIKRGJz0.webp",e9=Object.freeze(Object.defineProperty({__proto__:null,default:Dm},Symbol.toStringTag,{value:"Module"})),Hm="#5a3d5c",Tt=`stroke="${Hm}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,t9={living:"#ff8fab",bedroom:"#c9a0dc",kitchen:"#8fd6a6",salon:"#f0a0d8",nursery:"#9ad7f5",bathroom:"#7ec8d6",backyard:"#80ed99"};function Wm(e){return e==="living"&&Yn()}function n9(e){if(Wm(e))return`<div class="sceneWin builtin-window painted" aria-hidden="true"><div class="pwin"><img class="artimg" alt="" draggable="false" src="${Dm}"><i class="artnight" aria-hidden="true"></i></div></div>`;const t=t9[e]??"#ffb3c6";return`<div class="sceneWin builtin-window" aria-hidden="true"><svg viewBox="0 0 160 180">
    <path d="M18 20 H142 V150 H18 Z" fill="#fff6ea" ${Tt}/>
    <path d="M28 30 H132 V118 H28 Z" fill="#b9e3ff" ${Tt}/>
    <path d="M80 30 V118 M28 74 H132" ${Tt} stroke-width="3"/>
    <circle cx="48" cy="52" r="10" fill="#fff" opacity=".85"/>
    <ellipse cx="108" cy="48" rx="16" ry="8" fill="#fff" opacity=".8"/>
    <path d="M40 118 Q58 96 70 118 Q90 100 112 118" fill="#7dce8a" stroke="${Hm}" stroke-width="3"/>
    <rect x="96" y="86" width="8" height="32" rx="3" fill="#6b4a32" ${Tt} stroke-width="2"/>
    <circle cx="100" cy="80" r="12" fill="#5cc985" ${Tt} stroke-width="2"/>
    <path d="M8 16 Q6 80 16 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <path d="M152 16 Q154 80 144 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <rect x="46" y="146" width="68" height="12" rx="4" fill="#ffe7c2" ${Tt}/>
  </svg></div>`}function s9(){return`<div class="sceneRug" aria-hidden="true"><svg viewBox="0 0 200 80">
    <ellipse cx="100" cy="48" rx="92" ry="24" fill="#ffc8dd" ${Tt}/>
    <ellipse cx="100" cy="48" rx="64" ry="15" fill="#bde0fe" ${Tt} stroke-width="3"/>
    <ellipse cx="100" cy="48" rx="28" ry="7" fill="#fff6ea"/>
  </svg></div>
  <div class="sceneLamp" aria-hidden="true"><svg viewBox="0 0 80 160">
    <path d="M18 52 L30 8 H50 L62 52 Z" fill="#ffd166" ${Tt}/>
    <rect x="36" y="52" width="8" height="78" rx="4" fill="#c9a0dc" ${Tt}/>
    <ellipse cx="40" cy="136" rx="26" ry="8" fill="#b388d6" ${Tt}/>
    <circle cx="34" cy="28" r="4" fill="#fff" opacity=".8"/>
  </svg></div>
  <div class="scenePlant" aria-hidden="true"><svg viewBox="0 0 90 140">
    <path d="M45 128 C45 90 18 78 20 48 C40 58 44 80 45 128" fill="#5cc985" ${Tt}/>
    <path d="M45 128 C45 92 74 70 78 40 C58 54 50 82 45 128" fill="#80ed99" ${Tt}/>
    <path d="M45 128 C40 96 28 88 22 70" fill="none" stroke="#3d9a62" stroke-width="3"/>
    <path d="M30 132 H62 L56 118 H36 Z" fill="#e07a5f" ${Tt}/>
    <ellipse cx="46" cy="126" rx="16" ry="5" fill="#c4634a"/>
  </svg></div>`}function o9(e,t){return t==="backyard"?[]:[{id:e("rug"),kind:"rug",x:1152,y:540,flip:!1,z:0,scale:1},{id:e("lamp"),kind:"lamp",x:804,y:470,flip:!1,z:0,scale:1},{id:e("plant"),kind:"plant",x:1584,y:480,flip:!1,z:0,scale:1}]}let eo="",Vm=null;function i9(e){Vm=e,eo=""}function a9(e,t,n){const s=Vm?.(t,n);if(s!=null){const r="custom|"+t;if(r===eo&&e.childElementCount)return;eo=r,e.innerHTML=s,e.dataset.room=t;return}if(t==="backyard"){const r="yard|"+t;if(r===eo&&e.childElementCount)return;eo=r,e.innerHTML="",e.dataset.room=t;return}const o=n.length===0,i=n.some(r=>/window|curtain/i.test(r.kind)),a=t+(o?"|e":"")+(i?"|w":"")+(Wm(t)?"|p":"");a===eo&&e.childElementCount||(eo=a,e.innerHTML=(i?"":n9(t))+(o?s9():""),e.dataset.room=t)}let lu=null;function r9(e,t){if(e==="backyard")return"backyard";lu??=Nn().rooms;const n=lu[e];return!n||t.wallTile||t.floorTile||t.wallpaper.toLowerCase()!==n.wallpaper.toLowerCase()||t.floor.toLowerCase()!==n.floor.toLowerCase()||t.pattern!==n.pattern?null:"room-"+e}const l9={backyard:{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},barn:{w:3800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,200]]},clubhouse:{w:5200,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200],[4800,400]]},park:{w:5800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200],[4800,1e3]]},ranch:{w:7200,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200],[4800,1200],[6e3,1200]]},"room-bathroom":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-bedroom":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-kitchen":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-living":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-nursery":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-salon":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]}},cu=Object.assign({"../../assets/art/scene/backyard.webp":()=>p(()=>import("./backyard-D2asoOn9.js"),[]).then(e=>e.default),"../../assets/art/scene/barn.webp":()=>p(()=>import("./barn-CuZvC5pF.js"),[]).then(e=>e.default),"../../assets/art/scene/clubhouse.webp":()=>p(()=>import("./clubhouse-BPTDFNMs.js"),[]).then(e=>e.default),"../../assets/art/scene/map-portrait.webp":()=>p(()=>import("./map-portrait-DlLRxJXt.js"),[]).then(e=>e.default),"../../assets/art/scene/map.webp":()=>p(()=>import("./map-rTezHo5N.js"),[]).then(e=>e.default),"../../assets/art/scene/park.webp":()=>p(()=>import("./park-BHxAan6S.js"),[]).then(e=>e.default),"../../assets/art/scene/ranch.webp":()=>p(()=>import("./ranch-lUp516wp.js"),[]).then(e=>e.default),"../../assets/art/scene/room-bathroom.webp":()=>p(()=>import("./room-bathroom-D55ZdJqE.js"),[]).then(e=>e.default),"../../assets/art/scene/room-bedroom.webp":()=>p(()=>import("./room-bedroom-BUdG8DSZ.js"),[]).then(e=>e.default),"../../assets/art/scene/room-kitchen.webp":()=>p(()=>import("./room-kitchen-DBSjodA7.js"),[]).then(e=>e.default),"../../assets/art/scene/room-living.webp":()=>p(()=>import("./room-living-DE0h2-6k.js"),[]).then(e=>e.default),"../../assets/art/scene/room-nursery.webp":()=>p(()=>import("./room-nursery-Xq68P00f.js"),[]).then(e=>e.default),"../../assets/art/scene/room-salon.webp":()=>p(()=>import("./room-salon-DK6UyyJC.js"),[]).then(e=>e.default)}),ql=new Map;for(const e in cu){const t=(e.split("/").pop()||"").replace(/\.webp$/i,"");t&&!t.startsWith("_")&&ql.set(t,cu[e])}const c9=Object.assign({"../../assets/art/scene-tiles/backyard/backyard.0.webp":()=>p(()=>import("./backyard.0-vsvuydUV.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/backyard/backyard.1.webp":()=>p(()=>import("./backyard.1-CAS5z9Jh.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/backyard/backyard.2.webp":()=>p(()=>import("./backyard.2-Br8_CM3g.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/backyard/backyard.3.webp":()=>p(()=>import("./backyard.3-CBHeMOam.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.0.webp":()=>p(()=>import("./barn.0-NJwiAFNA.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.1.webp":()=>p(()=>import("./barn.1-DpG1q0gS.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.2.webp":()=>p(()=>import("./barn.2-Cc-3kQT6.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.3.webp":()=>p(()=>import("./barn.3-CecwdRcc.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.0.webp":()=>p(()=>import("./clubhouse.0-Bx9PmmVV.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.1.webp":()=>p(()=>import("./clubhouse.1-hH_Crto4.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.2.webp":()=>p(()=>import("./clubhouse.2-DmL6_81q.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.3.webp":()=>p(()=>import("./clubhouse.3-veyA6bVc.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.4.webp":()=>p(()=>import("./clubhouse.4-C0LauP6s.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.0.webp":()=>p(()=>import("./park.0-Coxx2McE.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.1.webp":()=>p(()=>import("./park.1-MU99fsV6.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.2.webp":()=>p(()=>import("./park.2-qLtJICjB.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.3.webp":()=>p(()=>import("./park.3-DZvdAEim.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.4.webp":()=>p(()=>import("./park.4-BqUTtR_s.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.0.webp":()=>p(()=>import("./ranch.0-BRve-kIf.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.1.webp":()=>p(()=>import("./ranch.1-f1mNHEPE.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.2.webp":()=>p(()=>import("./ranch.2-BjoIr_81.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.3.webp":()=>p(()=>import("./ranch.3-BI44lmlJ.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.4.webp":()=>p(()=>import("./ranch.4-r2mDWPSr.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.5.webp":()=>p(()=>import("./ranch.5-BTYXedUa.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.0.webp":()=>p(()=>import("./room-bathroom.0-D7Me058j.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.1.webp":()=>p(()=>import("./room-bathroom.1-BgoIRGci.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.2.webp":()=>p(()=>import("./room-bathroom.2-GU-7hNDf.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.3.webp":()=>p(()=>import("./room-bathroom.3-Cq2ua7Jq.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.0.webp":()=>p(()=>import("./room-bedroom.0-BE6AcThX.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.1.webp":()=>p(()=>import("./room-bedroom.1-B_0pWH1X.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.2.webp":()=>p(()=>import("./room-bedroom.2-CxQOkOm6.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.3.webp":()=>p(()=>import("./room-bedroom.3-D69Y9gTh.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.0.webp":()=>p(()=>import("./room-kitchen.0-CvZReVWW.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.1.webp":()=>p(()=>import("./room-kitchen.1-DS1Xwodh.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.2.webp":()=>p(()=>import("./room-kitchen.2-D6u50UMl.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.3.webp":()=>p(()=>import("./room-kitchen.3-BMkCpIAJ.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.0.webp":()=>p(()=>import("./room-living.0-A8-tCX9S.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.1.webp":()=>p(()=>import("./room-living.1-CALTtDMd.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.2.webp":()=>p(()=>import("./room-living.2-Bxe0zxSt.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.3.webp":()=>p(()=>import("./room-living.3-CPHtx-6b.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.0.webp":()=>p(()=>import("./room-nursery.0-COAEwapA.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.1.webp":()=>p(()=>import("./room-nursery.1-BM5pQ-Bb.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.2.webp":()=>p(()=>import("./room-nursery.2-2L6O5qxr.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.3.webp":()=>p(()=>import("./room-nursery.3-Cp8CBs_W.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.0.webp":()=>p(()=>import("./room-salon.0-CNPvSncr.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.1.webp":()=>p(()=>import("./room-salon.1-ConvfJGm.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.2.webp":()=>p(()=>import("./room-salon.2-DSXEMGpE.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.3.webp":()=>p(()=>import("./room-salon.3-BwNOo_v-.js"),[]).then(e=>e.default)}),Jo=new Map;for(const[e,t]of Object.entries(l9)){const n=t.tiles.map(([s,o],i)=>({x:s,w:o,get:c9[`../../assets/art/scene-tiles/${e}/${e}.${i}.webp`]}));ql.has(e)&&n.length&&n.every(s=>!!s.get)&&Jo.set(e,{w:t.w,parts:n})}const du=!1;function d9(){try{const e=new URLSearchParams(location.search).get("tiles");return e==="1"?!1:e==="0"?!0:!du}catch{return!du}}function f9(){try{if(new URLSearchParams(location.search).get("art")==="v1")return!0}catch{}return!Rf()}const Cn=new Map,p9=24;function h9(e){let t=Cn.get(e);if(t)return t;const n=ql.get(e),s={state:"loading",p:null};for(s.p=Bs(n).then(o=>(s.state="ok",s.url=o,o)).catch(()=>(s.state="failed",Cn.get(e)===s&&Cn.delete(e),null)),Cn.set(e,s);Cn.size>p9;)Cn.delete(Cn.keys().next().value);return s}const Fl=new Set;function Ii(e,t){e.querySelectorAll(":scope > img.sceneArt").forEach(s=>{s.removeAttribute("src"),s.remove()}),Fl.delete(e),Pt.delete(e),Pt.size||Qm();const n=t??e.__sceneMark;n&&(n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt)}function Um(e){for(const t of[...Fl])t!==e&&(t.dataset.sceneWant="",Ii(t,null))}function bo(e,t,n=e){const s=t&&ql.has(t)&&!f9()?t:null;if(e.dataset.sceneWant=s??"",e.__sceneMark=n,!s){Ii(e,n);return}if(Um(e),Jo.has(s)&&!d9()){g9(e,s,n);return}Pt.has(e)&&Ii(e,n);const o=h9(s),i=l=>{if(e.dataset.sceneWant!==s)return;let c=e.querySelector(":scope > img.sceneArt");if(c&&c.getAttribute("src")===l&&!c.hidden){n.classList.add("sceneArtOn"),n.dataset.sceneArt=s;return}c||(c=document.createElement("img"),c.className="sceneArt",c.alt="",c.setAttribute("aria-hidden","true"),c.draggable=!1,c.decoding="async",e.prepend(c)),Fl.add(e);const d=c;if(d.getAttribute("src")===l){a(d);return}d.hidden=!0,n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt,d.src=l,d.decode().then(()=>{e.dataset.sceneWant===s&&d.isConnected&&d.getAttribute("src")===l&&a(d)},()=>{const f=Number(d.dataset.tries||"0");if(f<Ss.length&&e.dataset.sceneWant===s&&d.isConnected){d.dataset.tries=String(f+1),setTimeout(()=>{e.dataset.sceneWant===s&&d.isConnected&&d.getAttribute("src")===l&&(d.removeAttribute("src"),i(l))},Ss[f]);return}o.state="failed",Cn.get(s)===o&&Cn.delete(s),e.dataset.sceneWant===s&&Ii(e,n)})},a=l=>{l.hidden=!1,n.classList.add("sceneArtOn"),n.dataset.sceneArt=s};if(o.state==="ok"){i(o.url);return}if(o.state==="failed"){Ii(e,n);return}n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt;const r=e.querySelector(":scope > img.sceneArt");r&&(r.hidden=!0),o.p.then(l=>{l&&i(l)})}const Pt=new Map,fu=new Map;let Ki=0;function Qm(){Ki&&(clearInterval(Ki),Ki=0)}function u9(){Ki||(Ki=window.setInterval(()=>{if(!document.hidden)for(const e of Pt.keys())Gf(e)},200))}function g9(e,t,n){const s=Jo.get(t);let o=Pt.get(e);if(!o||o.scene!==t){e.querySelectorAll(":scope > img.sceneArt").forEach(a=>{a.removeAttribute("src"),a.remove()}),n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt;const i=s.parts.map((a,r)=>{const l=document.createElement("img");return l.className="sceneArt sceneTile",l.alt="",l.setAttribute("aria-hidden","true"),l.draggable=!1,l.decoding="async",l.dataset.tile=String(r),l.hidden=!0,l.style.left=a.x/s.w*100+"%",l.style.width=a.w/s.w*100+"%",l});e.prepend(...i),o={scene:t,mark:n,imgs:i,shown:!1},Pt.set(e,o)}Fl.add(e),u9(),Gf(e)}function Gf(e){const t=Pt.get(e);if(!t||e.dataset.sceneWant!==t.scene)return;const n=Jo.get(t.scene),s=e.getBoundingClientRect();if(s.width<2)return;const o=innerWidth,i=o*.25,a=[];t.imgs.forEach((r,l)=>{const c=n.parts[l],d=s.left+c.x/n.w*s.width,f=d+c.w/n.w*s.width,h=f>-i&&d<o+i;f>0&&d<o&&a.push(r),h&&!r.dataset.state&&m9(e,t,r,l)}),!t.shown&&a.length&&a.every(r=>r.dataset.state==="ok")&&(t.shown=!0,t.mark.classList.add("sceneArtOn"),t.mark.dataset.sceneArt=t.scene)}function m9(e,t,n,s){n.dataset.state="loading";const o=t.scene+"."+s,i=fu.get(o),a=i?Promise.resolve(i):Bs(()=>Jo.get(t.scene).parts[s].get()).then(c=>(fu.set(o,c),c)),r=(c,d=0)=>{Pt.get(e)!==t||!n.isConnected||(n.src=c,n.decode().then(()=>{Pt.get(e)!==t||!n.isConnected||n.dataset.state==="loading"&&(n.hidden=!1,n.dataset.state="ok",Gf(e))},()=>{if(!(Pt.get(e)!==t||!n.isConnected)){if(d<Ss.length){setTimeout(()=>{Pt.get(e)===t&&n.isConnected&&n.dataset.state==="loading"&&(n.removeAttribute("src"),r(c,d+1))},Ss[d]);return}l()}}))},l=()=>{Pt.get(e)===t&&(Pt.delete(e),Pt.size||Qm(),e.querySelectorAll(":scope > img.sceneTile").forEach(c=>{c.removeAttribute("src"),c.remove()}),Jo.delete(t.scene),bo(e,t.scene,t.mark))};a.then(c=>r(c),()=>l())}const Ve="#5a3d5c",A=(e=4)=>`stroke="${Ve}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,Ca=600,dn=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],bn=(e,t,n=3)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="${Ve}"/><circle cx="${e+1}" cy="${t-1}" r="${n/3}" fill="#fff"/>`,io=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="5" ry="3" fill="#ff9bb5" opacity=".75"/>`,y9=(e,t,n,s)=>dn.map((o,i)=>`<path d="M${e-n+i*s} ${t} A${n-i*s} ${n-i*s} 0 0 1 ${e+n-i*s} ${t}" fill="none" stroke="${o}" stroke-width="${s}"/>`).join(""),w9=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${A()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${A()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${A()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${A()}/></g>`,Dn=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-46" y="-50" width="92" height="50" rx="14" fill="#f5d27a" ${A()}/>
  <path d="M-30 -42 V-8 M0 -44 V-6 M30 -42 V-8" stroke="#d9a93f" stroke-width="4" stroke-linecap="round"/><path d="M-46 -26 H46" stroke="#c98a2e" stroke-width="5"/></g>`,b9=(e,t,n)=>{const s=Array.from({length:Math.floor((t-e)/70)+1},(o,i)=>`<rect x="${e+i*70-7}" y="${n-58}" width="14" height="64" rx="5" fill="#fff6e6" ${A(3)}/>`).join("");return`<rect x="${e}" y="${n-46}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${A(3)}/><rect x="${e}" y="${n-22}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${A(3)}/>${s}`};function v9(){const e=Ma;return`<svg class="parkScene ranchScene" viewBox="0 0 ${e} ${Ca}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="rcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c7e8ff"/><stop offset="1" stop-color="#fff4fb"/></linearGradient></defs>
  <rect width="${e}" height="440" fill="url(#rcSky)"/>
  <g opacity=".55">${y9(1900,430,620,26)}</g>
  ${[160,820,1500,2300,3e3].map((t,n)=>`<g transform="translate(${t} ${70+n%2*34})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <g transform="translate(${e-200} 92)"><circle r="48" fill="#ffe066" ${A()}/>${bn(-15,-6,4)}${bn(13,-6,4)}<path d="M-14 12 Q0 24 14 12" fill="none" ${A(3)}/>${io(-26,8)}${io(26,8)}</g>
  <path d="M-50 370 Q600 230 1300 350 T2600 330 T${e+100} 360 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#a6e3a0"/><path d="M0 410 H${e}" ${A()}/>
  <path d="M0 566 Q900 530 1800 570 T${e} 552 V600 H0 Z" fill="#f2dcb8" opacity=".9"/>
  ${w9(3560,400,.8,"#4fbf7a")}
  <!-- entrance gate with a rainbow arch -->
  <g class="ranchSign"><g class="ranchSignArt"><rect x="40" y="290" width="24" height="210" rx="6" fill="#c99366" ${A()}/><rect x="196" y="290" width="24" height="210" rx="6" fill="#c99366" ${A()}/>
    <path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${Ve}" stroke-width="44" stroke-linecap="round"/>
    ${dn.map((t,n)=>`<path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${t}" stroke-width="${36-n*6}" stroke-linecap="round"/>`).join("")}
    <rect x="22" y="250" width="216" height="40" rx="14" fill="#fff6e6" ${A(3)}/><text x="130" y="277" text-anchor="middle" font-size="19" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  <!-- red barn with rainbow trim and banner -->
  <g transform="translate(270 0)">
    <path d="M0 470 V250 L60 180 H270 L330 250 V470 Z" fill="#ef5b5b" ${A(5)}/>
    <path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${Ve}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    ${dn.map((t,n)=>`<path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${t}" stroke-width="3" transform="translate(0 ${-7+n*2.8})" stroke-linejoin="round"/>`).join("")}
    <rect x="115" y="215" width="100" height="56" rx="10" fill="#fff6e6" ${A(4)}/><path d="M115 215 L215 271 M215 215 L115 271" stroke="#ef5b5b" stroke-width="6"/>
    <rect x="95" y="330" width="140" height="140" rx="8" fill="#fff6e6" ${A(4)}/><rect x="108" y="342" width="56" height="128" fill="#d94848" ${A(3)}/><rect x="166" y="342" width="56" height="128" fill="#d94848" ${A(3)}/>
    <path d="M108 342 L164 470 M164 342 L108 470 M166 342 L222 470 M222 342 L166 470" stroke="#fff6e6" stroke-width="6"/>
    <g class="barnBanner" transform="translate(165 300)"><g class="ranchSignArt">${dn.map((t,n)=>`<rect x="${-120+n*40}" y="-16" width="40" height="30" fill="${t}"/>`).join("")}<rect x="-120" y="-16" width="240" height="30" fill="none" ${A(3)}/>
      <text x="0" y="6" text-anchor="middle" font-size="18" font-weight="900" fill="#fff" stroke="${Ve}" stroke-width="4" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  </g>
  ${Dn(640,560,.8)}${Dn(1950,470,.7)}${Dn(1880,470,.55)}${Dn(3115,470,.7)}${Dn(3115,425,.55)}
  <!-- the petting zoo moved into the barn: a sign by the barn door, sunflowers where the pen was -->
  ${Array.from({length:6},(t,n)=>{const s=1030+n*66,o=70+n%3*18;return`<g transform="translate(${s} 470)"><path d="M0 0 V-${o}" stroke="#40c057" stroke-width="6" stroke-linecap="round"/><ellipse cx="${n%2?9:-9}" cy="-${o/2}" rx="11" ry="5" fill="#69db7c" ${A(2.5)}/>${[0,45,90,135,180,225,270,315].map(i=>`<ellipse cx="${Math.cos(i*Math.PI/180)*14}" cy="${-o+Math.sin(i*Math.PI/180)*14}" rx="8" ry="5" transform="rotate(${i} ${Math.cos(i*Math.PI/180)*14} ${-o+Math.sin(i*Math.PI/180)*14})" fill="#ffd43b" ${A(2)}/>`).join("")}<circle cy="-${o}" r="10" fill="#a0522d" ${A(2.5)}/></g>`}).join("")}
  <!-- pond -->
  <ellipse cx="${Lt.x}" cy="${Lt.y}" rx="${Lt.rx}" ry="${Lt.ry}" fill="#8ecae6" ${A()}/><ellipse cx="${Lt.x-15}" cy="${Lt.y-6}" rx="70" ry="16" fill="#bde6f7"/>
  <!-- paddock fence + HORSES sign are their own depth layer (paddockFenceSVG) -->
  <!-- garden -->
  <rect x="3140" y="520" width="420" height="70" rx="20" fill="#b07d54" ${A()}/>
  <rect x="3260" y="430" width="160" height="40" rx="12" fill="#fff6e6" ${A(3)}/><text x="3340" y="458" text-anchor="middle" font-size="21" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">GARDEN</text>
  <path d="M3340 470 V500" ${A(5)}/>
  </svg>`}function k9(){return`<svg class="fenceLayer" viewBox="0 0 ${Ma} ${Ca}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  ${b9(2400,3080,470)}
  <rect x="2640" y="380" width="180" height="40" rx="12" fill="#fff6e6" ${A(3)}/><text x="2730" y="408" text-anchor="middle" font-size="21" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">HORSES</text>
  </svg>`}const Nm=[{name:"Goat",say:"Meh-eh-eh!",snd:"bleat"},{name:"Sheep",say:"Baa!",snd:"baa"},{name:"Piglet",say:"Oink oink!",snd:"oink"},{name:"Chicks",say:"Peep peep!",snd:"peep"},{name:"Bunny",say:"*wiggle wiggle*",snd:"squeak"},{name:"Cow",say:"Moooo!",snd:"moo"}],ir=(e,t,n,s=94)=>e.map((o,i)=>`<rect class="leg ${i%2?"b":"a"}" x="${o}" y="${t}" width="9" height="${s-t}" rx="4" fill="${n}" ${A(3)}/>`).join("");function Dd(e){switch(e){case 0:return`<svg viewBox="0 0 120 100">${ir([32,44,70,82],60,"#efe6dc")}<path class="tail" d="M24 50 l-8 -10" ${A(5)}/>
      <ellipse cx="58" cy="56" rx="34" ry="17" fill="#f4ede5" ${A()}/><g class="head"><path d="M86 30 l-6 -16 l10 10 Z M96 30 l2 -17 l5 13 Z" fill="#c9b8a8" ${A(3)}/>
      <ellipse cx="94" cy="40" rx="14" ry="16" fill="#f4ede5" ${A()}/><ellipse class="ear" cx="80" cy="36" rx="9" ry="4" fill="#e8d6c4" ${A(3)}/>${bn(98,36)}<path d="M98 56 q2 8 6 0" fill="#e8d6c4" ${A(3)}/>${io(102,46)}<circle cx="106" cy="44" r="2" fill="${Ve}"/></g></svg>`;case 1:return`<svg viewBox="0 0 120 100">${ir([36,48,70,80],62,"#5a4a5c")}
      ${[[40,50],[56,44],[72,48],[86,56],[70,64],[48,64],[34,60]].map(([t,n])=>`<circle cx="${t}" cy="${n}" r="15" fill="#fff" ${A(3)}/>`).join("")}<ellipse cx="60" cy="55" rx="30" ry="14" fill="#fff"/>
      <g class="head"><ellipse cx="96" cy="46" rx="13" ry="15" fill="#6b5a6e" ${A()}/><circle cx="92" cy="32" r="8" fill="#fff" ${A(3)}/><ellipse class="ear" cx="82" cy="44" rx="8" ry="4" fill="#6b5a6e" ${A(3)}/>
      <circle cx="99" cy="42" r="3.2" fill="#fff"/><circle cx="99.5" cy="42" r="1.8" fill="${Ve}"/>${io(102,52)}</g></svg>`;case 2:return`<svg viewBox="0 0 120 100">${ir([38,50,66,78],66,"#ffadc6")}<path class="tail" d="M28 54 q-10 -4 -6 -12 q6 0 2 8" fill="none" ${A(3)}/>
      <ellipse cx="58" cy="60" rx="32" ry="20" fill="#ffc2d4" ${A()}/><g class="head"><circle cx="90" cy="52" r="16" fill="#ffc2d4" ${A()}/><path d="M80 38 l2 -12 l9 8 Z" fill="#ffadc6" ${A(3)}/>
      <ellipse cx="104" cy="56" rx="7" ry="8" fill="#ff9bb8" ${A(3)}/><circle cx="102" cy="54" r="1.6" fill="${Ve}"/><circle cx="106" cy="57" r="1.6" fill="${Ve}"/>${bn(92,46)}${io(90,60)}</g></svg>`;case 3:return`<svg viewBox="0 0 120 100">${[[30,72,1],[62,66,1.15],[92,74,.95]].map(([t,n,s])=>`<g transform="translate(${t} ${n}) scale(${s})"><path d="M-4 16 v8 M4 16 v8" stroke="#ff9f43" stroke-width="3" stroke-linecap="round"/>
      <circle cx="0" cy="4" r="14" fill="#ffe066" ${A(3)}/><path d="M-8 2 q-6 4 0 8" fill="#ffd43b" ${A(2)}/><g class="head"><circle cx="5" cy="-8" r="9" fill="#ffe066" ${A(3)}/><path d="M13 -9 l7 2 l-7 3 Z" fill="#ff9f43" ${A(2)}/>${bn(7,-10,2.2)}</g></g>`).join("")}</svg>`;case 4:return`<svg viewBox="0 0 120 100"><circle class="tail" cx="30" cy="68" r="8" fill="#fff" ${A(3)}/><ellipse cx="56" cy="72" rx="28" ry="20" fill="#f6eef9" ${A()}/><ellipse cx="74" cy="90" rx="12" ry="5" fill="#f6eef9" ${A(3)}/>
      <g class="head"><ellipse class="ear" cx="78" cy="26" rx="7" ry="20" fill="#f6eef9" ${A(3)} transform="rotate(-12 78 26)"/><ellipse cx="78" cy="26" rx="3" ry="13" fill="#ffc2d4" transform="rotate(-12 78 26)"/>
      <ellipse cx="90" cy="28" rx="7" ry="20" fill="#f6eef9" ${A(3)} transform="rotate(10 90 28)"/><circle cx="86" cy="56" r="17" fill="#f6eef9" ${A()}/>${bn(92,52)}<circle cx="102" cy="58" r="2.5" fill="#ff8fab"/>${io(90,63)}</g></svg>`;default:return`<svg viewBox="0 0 120 100">${ir([30,42,72,84],62,"#fff")}<path class="tail" d="M20 50 q-6 14 0 26" fill="none" ${A(3)}/>
      <rect x="18" y="38" width="80" height="34" rx="16" fill="#fff" ${A()}/><path d="M30 40 q10 8 4 20 q-10 -2 -10 -14 Z M60 42 q14 2 10 18 q-12 4 -14 -8 Z" fill="${Ve}"/><ellipse cx="60" cy="74" rx="8" ry="5" fill="#ffadc6" ${A(2)}/>
      <g class="head"><path d="M90 24 l-8 -8 M108 24 l8 -8" stroke="#f5d27a" stroke-width="5" stroke-linecap="round"/><rect x="86" y="22" width="26" height="30" rx="12" fill="#fff" ${A()}/>
      <ellipse cx="100" cy="52" rx="14" ry="10" fill="#ffc2d4" ${A(3)}/><circle cx="95" cy="52" r="1.8" fill="${Ve}"/><circle cx="105" cy="52" r="1.8" fill="${Ve}"/>${bn(94,34)}${bn(106,34)}
      <ellipse class="ear" cx="82" cy="30" rx="7" ry="4" fill="#fff" ${A(3)}/></g></svg>`}}const Lt={x:2265,y:520,rx:110,ry:34},_9=476,el=[{name:"Chestnut",body:"#c97b45",mane:"#7a3f22",sock:"#fff6e6"},{name:"Snowy",body:"#fdf8f3",mane:"#d9cdc4",sock:"#e9ddd2"},{name:"Midnight",body:"#4a3f52",mane:"#2a2230",sock:"#6b5e74"},{name:"Sunny",body:"#f2c96b",mane:"#fff6e0",sock:"#fff6e0"},{name:"Rainbow Pony",body:"#fff0fa",mane:"rainbow",sock:"#ffd6ec"}];function Yf(e,t=!1){const n=el[e]??el[0],s=n.mane==="rainbow",o=s?dn.map((r,l)=>{const c=124-l*1.6,d=14+l*2.4;return`<path d="M${c.toFixed(1)} ${d.toFixed(1)} q-6.5 2 -4.5 ${6+l*.35}" fill="none" stroke="${r}" stroke-width="5.5" stroke-linecap="round"/>`}).join(""):`<path d="M106 20 q-14 6 -18 30 q8 -6 10 -2 q4 -12 14 -18 Z" fill="${n.mane}" ${A(3)}/>`,i=s?`<g class="tail">${dn.map((r,l)=>`<path d="M30 58 q-18 ${8+l*3} -14 ${36+l}" fill="none" stroke="${r}" stroke-width="6" stroke-linecap="round"/>`).join("")}</g>`:`<path class="tail" d="M30 56 q-20 10 -14 44 q10 -10 8 -20 q6 -10 10 -18 Z" fill="${n.mane}" ${A(3)}/>`,a=(r,l)=>`<g class="leg ${l}"><rect x="${r}" y="78" width="12" height="44" rx="5" fill="${n.body}" ${A(3)}/><rect x="${r}" y="110" width="12" height="12" rx="4" fill="${n.sock}" ${A(3)}/></g>`;return`<svg viewBox="0 0 160 130" class="horsesvg">${i}${a(40,"a")}${a(56,"b")}${a(96,"b")}${a(112,"a")}
    <ellipse cx="80" cy="68" rx="50" ry="24" fill="${n.body}" ${A()}/>
    ${t||s?`<path class="saddle" data-top="43" d="M64 46 q16 -6 32 0 l-2 22 q-14 4 -28 0 Z" fill="${s?"#b197fc":"#e8590c"}" ${A(3)}/>`:""}
    <g class="head"><path d="M108 66 L114 30 Q118 16 132 18 L148 36 Q152 46 142 48 L130 46 L128 70 Z" fill="${n.body}" ${A()}/>
    <path d="M114 22 l2 -14 l8 12 Z" fill="${n.body}" ${A(3)}/>${o}
    ${bn(130,30,3.4)}<circle cx="146" cy="42" r="2" fill="${Ve}"/>${io(136,40)}
    ${s?`<path d="M120 14 l4 -14 l4 14 Z" fill="#ffd43b" ${A(2)}/>`:""}</g>
    ${s?'<g fill="#fff" opacity=".9"><path d="M60 60 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z"/><path d="M92 74 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z"/></g>':""}</svg>`}const $9=`<svg viewBox="0 0 180 170"><path d="M10 70 L90 14 L170 70" fill="#ffa94d" ${A(5)}/>
  <rect x="24" y="66" width="132" height="84" rx="8" fill="#fff6e6" ${A()}/>${dn.map((e,t)=>`<rect x="${24+t*22}" y="66" width="22" height="10" fill="${e}"/>`).join("")}
  <rect x="24" y="66" width="132" height="10" fill="none" ${A(3)}/><circle cx="90" cy="108" r="22" fill="#5a3d5c"/>
  <path d="M60 150 l-12 16 M120 150 l12 16" ${A(5)}/>
  <g class="hen"><ellipse cx="90" cy="118" rx="20" ry="14" fill="#fff" ${A(3)}/><circle cx="104" cy="104" r="10" fill="#fff" ${A(3)}/><path d="M100 94 q3 -8 8 0" fill="#ff6b6b" ${A(2)}/>
  <path d="M113 104 l7 2 -7 3 Z" fill="#ffa94d" ${A(2)}/>${bn(106,102,2)}</g>
  <text x="90" y="54" text-anchor="middle" font-size="16" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">EGGS</text></svg>`,x9=`<svg viewBox="0 0 170 130"><rect x="80" y="30" width="54" height="50" rx="8" fill="#bde6f7" ${A()}/><rect x="74" y="24" width="66" height="10" rx="4" fill="#ff6b6b" ${A(3)}/>
  <rect x="20" y="62" width="130" height="34" rx="12" fill="#ff6b6b" ${A()}/><rect x="28" y="40" width="10" height="24" rx="3" fill="#868e96" ${A(3)}/>
  <circle cx="122" cy="98" r="28" fill="${Ve}"/><circle cx="122" cy="98" r="13" fill="#ffd43b" ${A(3)}/><circle cx="44" cy="106" r="18" fill="${Ve}"/><circle cx="44" cy="106" r="8" fill="#ffd43b" ${A(3)}/>
  <circle cx="26" cy="76" r="5" fill="#fff3b0" ${A(2)}/></svg>`,M9=`<svg viewBox="0 0 240 300"><rect x="104" y="160" width="32" height="140" rx="10" fill="#c99366" ${A()}/>
  <circle cx="120" cy="110" r="90" fill="#5cc985" ${A()}/><circle cx="62" cy="140" r="50" fill="#5cc985" ${A()}/><circle cx="180" cy="140" r="52" fill="#5cc985" ${A()}/>
  ${[[80,90],[150,70],[175,140],[100,150],[130,115],[60,140]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="11" fill="#ff6b6b" ${A(3)}/><path d="M${e} ${t-10} q2 -6 6 -7" fill="none" ${A(2)}/>`).join("")}</svg>`,pu=[[80,90],[150,70],[175,140],[100,150]],qm=`<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="14" fill="#ff6b6b" ${A(3)}/><path d="M20 10 q2 -6 6 -7" fill="none" ${A(2.5)}/><ellipse cx="27" cy="8" rx="5" ry="3" fill="#5cc985" ${A(2)}/><circle cx="14" cy="18" r="3" fill="#fff" opacity=".6"/></svg>`,jl=`<svg viewBox="0 0 40 40"><path d="M12 14 L32 10 L16 36 Z" fill="#ff922b" ${A(3)}/><path d="M18 18 l5 -1 M17 24 l4 -1" ${A(2)}/><path d="M30 10 q4 -8 8 -6 M30 10 q-2 -8 2 -10 M30 10 q6 -2 8 2" fill="none" stroke="#40c057" stroke-width="4" stroke-linecap="round"/></svg>`,L9=`<svg viewBox="0 0 40 40"><path d="M6 34 Q20 4 34 34 Z" fill="#f5d27a" ${A(3)}/><path d="M14 30 L18 14 M20 32 V10 M26 30 L22 14" stroke="#d9a93f" stroke-width="2.5" stroke-linecap="round"/></svg>`,ua=`<svg viewBox="0 0 40 40"><path d="M20 4 C30 4 34 20 34 26 C34 34 28 38 20 38 C12 38 6 34 6 26 C6 20 10 4 20 4 Z" fill="#fff6e6" ${A(3)}/><circle cx="15" cy="16" r="3" fill="#fff"/></svg>`,Kf=(e="#ff8fab")=>`<svg viewBox="0 0 40 40"><path d="M20 38 V20" stroke="#40c057" stroke-width="4" stroke-linecap="round"/>${[0,72,144,216,288].map(t=>`<circle cx="${20+Math.cos(t*Math.PI/180)*8}" cy="${14+Math.sin(t*Math.PI/180)*8}" r="7" fill="${e}" ${A(2.5)}/>`).join("")}<circle cx="20" cy="14" r="5" fill="#ffd43b" ${A(2)}/></svg>`,Fm={carrot:jl,apple:qm,hay:L9},E9=e=>`<svg viewBox="0 0 80 90"><g transform="translate(14 0) scale(1.3)">${Fm[e].replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g>
  <path d="M10 40 H70 L62 86 H18 Z" fill="${e==="carrot"?"#74c0fc":e==="apple"?"#ffa8c5":"#b2f2bb"}" ${A(4)}/><path d="M12 52 H68" stroke="#fff" stroke-width="4" opacity=".6"/></svg>`,S9=`<svg viewBox="0 0 60 50"><path d="M12 22 Q30 -6 48 22" fill="none" stroke="${Ve}" stroke-width="7" stroke-linecap="round"/><path d="M12 22 Q30 -6 48 22" fill="none" stroke="#e0a96d" stroke-width="3" stroke-linecap="round"/>
  <path d="M4 22 H56 L50 46 H10 Z" fill="#e0a96d" ${A(3.5)}/><path d="M12 30 H48 M14 38 H46" stroke="#b5793d" stroke-width="3"/></svg>`,hu=["#ff8fab","#c9a0dc","#ffd43b","#74c0fc","#ff922b"];function jm(e,t,n){const s=`<ellipse cx="35" cy="76" rx="30" ry="11" fill="${e?.wet?"#7a4b2e":"#9c6b46"}" ${A(3)}/>`;if(!e)return`<svg viewBox="0 0 70 90">${s}<path d="M20 74 q4 -3 8 0 M36 78 q4 -3 8 0" stroke="#b5875f" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;const o=hu[n%hu.length];let i="";t===0&&(i=`<circle cx="27" cy="72" r="3" fill="#f2dcb8" ${A(1.5)}/><circle cx="36" cy="75" r="3" fill="#f2dcb8" ${A(1.5)}/><circle cx="44" cy="71" r="3" fill="#f2dcb8" ${A(1.5)}/>`),t===1&&(i=`<path d="M35 72 V58" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="29" cy="57" rx="7" ry="4" fill="#69db7c" ${A(2)}/><ellipse cx="41" cy="55" rx="7" ry="4" fill="#69db7c" ${A(2)}/>`),t===2&&(i=`<path d="M35 72 V40 M35 60 Q22 54 20 42 M35 56 Q48 50 50 38" stroke="#40c057" stroke-width="4" fill="none" stroke-linecap="round"/>${e.seed==="flower"?`<circle cx="35" cy="38" r="7" fill="#b2f2bb" ${A(2)}/>`:""}`),t===3&&(i=e.seed==="carrot"?`<path d="M26 74 L44 72 L35 86 Z" fill="#ff922b" ${A(2.5)}/><path d="M35 72 Q24 50 22 38 M35 72 Q36 48 36 34 M35 72 Q46 50 50 40" stroke="#40c057" stroke-width="5" fill="none" stroke-linecap="round"/>`:`<path d="M35 72 V34" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="54" rx="8" ry="4" fill="#69db7c" ${A(2)}/>${[0,72,144,216,288].map(l=>`<circle cx="${35+Math.cos(l*Math.PI/180)*10}" cy="${28+Math.sin(l*Math.PI/180)*10}" r="8" fill="${o}" ${A(2.5)}/>`).join("")}<circle cx="35" cy="28" r="6" fill="#ffd43b" ${A(2)}/>`);const a=e.wet?"":`<g class="needWater"><path d="M56 18 q6 10 0 14 q-6 -4 0 -14 Z" fill="#74c0fc" ${A(2)}/></g>`,r=t===3?`<g class="ready"><path d="M58 20 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#ffd43b" ${A(1.5)}/></g>`:"";return`<svg viewBox="0 0 70 90">${s}${i}${a}${r}</svg>`}const T9=`<svg viewBox="0 0 48 48">${dn.map((e,t)=>`<path d="M${6+t*2.6} 38 A${18-t*2.6} ${18-t*2.6} 0 0 1 ${42-t*2.6} 38" fill="none" stroke="${e}" stroke-width="3"/>`).join("")}<path d="M4 38 H44" ${A(3)}/></svg>`,P9=`<svg viewBox="0 0 48 48"><path d="M10 34 Q24 22 38 34" fill="none" ${A(4)}/><path d="M24 30 V8 M16 16 L24 8 L32 16" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40 H40" ${A(4)}/></svg>`,A9=`<svg viewBox="0 0 200 320"><path d="M70 310 L84 120 H116 L130 310 Z" fill="#fff6e6" ${A(4)}/><path d="M78 200 H122 M74 260 H126" ${A(3)}/><rect x="88" y="262" width="24" height="48" rx="10" fill="#b197fc" ${A(3)}/>
  <path d="M78 124 L100 92 L122 124 Z" fill="#ff8fab" ${A(4)}/>
  <g class="sails" style="transform-origin:100px 110px">${[0,90,180,270].map(e=>`<g transform="rotate(${e} 100 110)"><path d="M100 110 L104 30 L126 30 L118 104 Z" fill="${["#ffd43b","#74c0fc","#ff8fab","#69db7c"][e/90]}" ${A(3)}/><path d="M108 40 H122 M107 58 H121 M106 76 H120" ${A(2)}/></g>`).join("")}<circle cx="100" cy="110" r="10" fill="#ffa94d" ${A(3)}/></g></svg>`,R9=["GOAT","SHEEP","PIGLET","CHICKS","BUNNY","COW"],C9=e=>`<g class="lantern" style="transform-origin:${e}px 146px"><path d="M${e} 146 V178" ${A(3)}/><circle cx="${e}" cy="204" r="34" fill="#fff3b0" opacity=".45"/>
  <path d="M${e-14} 182 H${e+14} L${e+11} 226 H${e-11} Z" fill="#ffe066" ${A(3)}/><rect x="${e-17}" y="176" width="34" height="8" rx="3" fill="#495057" ${A(2.5)}/><rect x="${e-15}" y="224" width="30" height="7" rx="3" fill="#495057" ${A(2.5)}/><ellipse cx="${e}" cy="205" rx="5" ry="9" fill="#ff922b"/></g>`;function I9(){const e=uf,t=Array.from({length:Math.ceil(e/64)},(o,i)=>`<path d="M${i*64} 146 V440" stroke="#d4895f" stroke-width="3"/>`).join(""),n=Array.from({length:Math.ceil(e/46)},(o,i)=>{const a=i*46,r=160+Math.sin(i/3.1)*8;return`<path d="M${a} ${r} L${a+40} ${r} L${a+20} ${r+30} Z" fill="${dn[i%6]}" ${A(2.5)}/>`}).join(""),s=gf.map((o,i)=>`<g><rect x="${o-96}" y="318" width="192" height="122" rx="6" fill="#f0c49a" ${A(4)}/>
    <path d="M${o-96} 350 H${o+96} M${o-96} 384 H${o+96} M${o-96} 412 H${o+96}" stroke="#d9a074" stroke-width="3"/><path d="M${o-96} 318 L${o+96} 440 M${o+96} 318 L${o-96} 440" stroke="#e0aa7e" stroke-width="7" opacity=".7"/>
    <rect x="${o-54}" y="284" width="108" height="30" rx="10" fill="#fff6e6" ${A(3)}/><text x="${o}" y="305" text-anchor="middle" font-size="17" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">${R9[i]}</text></g>`).join("");return`<svg class="parkScene ranchScene barnScene" viewBox="0 0 ${e} ${Ca}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="440" fill="#e8a87c"/>${t}
  <!-- hay loft -->
  <rect width="${e}" height="128" fill="#c98a5e"/>${Array.from({length:Math.ceil(e/64)},(o,i)=>`<path d="M${i*64+32} 0 V128" stroke="#b5764d" stroke-width="3"/>`).join("")}
  ${[120,260,420,980,1130,1290,1640,1790].map((o,i)=>Dn(o,126,i%3===1?.72:.85)).join("")}${[190,1060,1720].map(o=>Dn(o,82,.7)).join("")}
  <rect x="0" y="126" width="${e}" height="24" fill="#a8653a" ${A(4)}/>
  ${[0,1,2,3,4,5,6].map(o=>`<path d="M${120+o*280} 150 L${180+o*280} 210" stroke="#a8653a" stroke-width="12" stroke-linecap="round"/><path d="M${120+o*280} 150 L${180+o*280} 210" ${A(2)}/>`).join("")}
  <!-- ladder up to the loft -->
  <g transform="translate(1840 0)"><path d="M-22 150 L-30 440 M22 150 L30 440" stroke="#c99366" stroke-width="10" stroke-linecap="round"/>${[190,240,290,340,390].map(o=>`<path d="M${-22-(o-150)*.028} ${o} H${22+(o-150)*.028}" stroke="#c99366" stroke-width="8" stroke-linecap="round"/>`).join("")}</g>
  <!-- rainbow bunting + big rainbow banner -->
  <path d="M0 160 Q${e/2} 176 ${e} 160" fill="none" ${A(2)}/>${n}
  <g transform="translate(${e/2+60} 236)">${dn.map((o,i)=>`<rect x="${-180+i*60}" y="-26" width="60" height="44" fill="${o}"/>`).join("")}<rect x="-180" y="-26" width="360" height="44" rx="4" fill="none" ${A(4)}/>
    <path d="M-180 -26 L-200 -4 L-180 18 M180 -26 L200 -4 L180 18" fill="#ff8fab" ${A(3)}/>
    <text x="0" y="6" text-anchor="middle" font-size="26" font-weight="900" fill="#fff" stroke="${Ve}" stroke-width="5" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g>
  <!-- round windows with daylight -->
  ${[440,1720].map(o=>`<circle cx="${o}" cy="236" r="34" fill="#c7e8ff" ${A(4)}/><path d="M${o-34} 236 H${o+34} M${o} 202 V270" ${A(3)}/>`).join("")}
  ${s}
  <!-- the big door (back outside) -->
  <rect x="24" y="200" width="206" height="244" rx="10" fill="#b5703f" ${A(4)}/>
  <rect x="38" y="214" width="178" height="230" fill="#c7e8ff"/><path d="M38 360 Q120 330 216 352 V444 H38 Z" fill="#a6e3a0"/><circle cx="180" cy="250" r="16" fill="#ffe066"/>
  <path d="M38 214 H216 V444 M38 214 V444" fill="none" ${A(4)}/>
  <!-- straw floor -->
  <rect x="0" y="438" width="${e}" height="162" fill="#f2d58a"/><path d="M0 440 H${e}" ${A(4)}/>
  ${Array.from({length:70},(o,i)=>{const a=i*137%e,r=470+i*53%120;return`<path d="M${a} ${r} l${14+i%3*4} ${i%2?-4:4}" stroke="#d9a93f" stroke-width="3" stroke-linecap="round"/>`}).join("")}
  <!-- feed station -->
  <g transform="translate(356 0)"><rect x="-70" y="456" width="140" height="34" rx="12" fill="#fff6e6" ${A(3)}/><text x="0" y="480" text-anchor="middle" font-size="16" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">FOOD 🥕🍎🌾</text></g>
  ${Dn(1790,590,.8)}${Dn(1700,600,.65)}
  ${[290,660,1330,1590].map(C9).join("")}
  </svg>`}const ga=600,Gt="#5a3d5c",ce=(e=4)=>`stroke="${Gt}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function Ia(e){const t=mo[e].seats,n=t<=2?140:t===4?110:100,s=(t-1)/2;return Array.from({length:t},(o,i)=>({x:mo[e].x+(i-s)*n,y:558-Math.abs(i-s)*8}))}const uu=["#ff7eb3","#ffd43b","#66d9e8","#d0bfff","#fff"],nn=(e,t,n=1,s="#fff")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -9 L2.2 -2.4 L9 -2.2 L3.4 2.2 L5.4 9 L0 4.6 L-5.4 9 L-3.4 2.2 L-9 -2.2 L-2.2 -2.4 Z" fill="${s}" stroke="${Gt}" stroke-width="1.2" stroke-linejoin="round"/>`;function Hd(e,t,n,s){const o=`<path d="M36 ${t} Q ${e/2} ${t+n+8} ${e-36} ${t}" fill="none" stroke="${Gt}" stroke-width="3"/>`,i=Array.from({length:s},(a,r)=>{const l=s===1?.5:r/(s-1),c=48+l*(e-96),d=t+Math.sin(l*Math.PI)*n,f=uu[r%uu.length];return`<g class="bulb" style="animation-delay:-${r%8*.22}s"><line x1="${c}" y1="${d-16}" x2="${c}" y2="${d-6}" stroke="${Gt}" stroke-width="2"/><circle cx="${c}" cy="${d}" r="7.5" fill="${f}" ${ce(2)}/><circle cx="${c-2}" cy="${d-2}" r="2.2" fill="#fff" opacity=".85"/></g>`}).join("");return o+i}const xi=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">
  <ellipse cx="0" cy="22" rx="42" ry="12" fill="#000" opacity=".12"/>
  <path d="M-40 10 Q-48 -22 -10 -28 Q10 -46 34 -18 Q50 2 34 18 Q8 32 -24 20 Q-42 16 -40 10 Z" fill="${n}" ${ce(3)}/>
  <path d="M-18 -6 Q-4 -20 14 -4" fill="none" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/>
  <circle cx="16" cy="6" r="4" fill="#fff" opacity=".35"/>
</g>`,gu=(e,t,n)=>`<g transform="translate(${e} ${t})">
  <ellipse cx="0" cy="16" rx="28" ry="9" fill="#000" opacity=".12"/>
  <ellipse cx="0" cy="4" rx="30" ry="20" fill="${n}" ${ce(3)}/>
  <ellipse cx="-6" cy="-2" rx="12" ry="7" fill="#fff" opacity=".35"/>
  <path d="M0 -16 V-28" ${ce(3)}/><circle cy="-32" r="6" fill="#ffd43b" ${ce(2)}/>
</g>`;function Mi(e,t,n,s,o,i=""){return`<g class="photoFrame${i}" transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-40" y="-52" width="80" height="104" rx="6" fill="#fff" ${ce(3.5)}/>
    <rect x="-32" y="-44" width="64" height="72" rx="4" fill="${s}"/>
    ${o}
    <rect x="-10" y="-58" width="20" height="10" rx="2" fill="#ffe8a3" opacity=".85" transform="rotate(-8)"/>
  </g>`}function ar(e,t,n,s,o){return`<g transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-28" y="-34" width="56" height="68" rx="3" fill="#fff" ${ce(3)}/>
    <rect x="-22" y="-28" width="44" height="40" fill="${s}"/>
    ${o}
  </g>`}function rr(e,t,n,s){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="36" rx="26" ry="8" fill="#000" opacity=".12"/>
    <path d="M-18 36 L-12 -2 H12 L18 36 Z" fill="${n}" ${ce(3)}/>
    <ellipse cx="0" cy="0" rx="16" ry="6" fill="#c9a27a" ${ce(2)}/>
    <ellipse cx="-16" cy="-16" rx="16" ry="22" fill="${s}" ${ce(3)} transform="rotate(-18)"/>
    <ellipse cx="16" cy="-18" rx="16" ry="22" fill="${s}" ${ce(3)} transform="rotate(16)"/>
    <ellipse cx="0" cy="-28" rx="14" ry="20" fill="${s}" ${ce(3)}/>
    <circle cx="0" cy="-36" r="6" fill="#ff8ec8" ${ce(2)}/>
  </g>`}function O9(e,t){return`<g transform="translate(${e} ${t})">
    <ellipse cx="28" cy="118" rx="32" ry="8" fill="#000" opacity=".12"/>
    <rect width="56" height="118" rx="10" fill="#e7fbff" ${ce()}/>
    <rect y="52" width="56" height="8" fill="#d0f4ff" ${ce(2)}/>
    <rect x="44" y="18" width="6" height="22" rx="3" fill="#ffd43b" ${ce(2)}/>
    <rect x="44" y="70" width="6" height="28" rx="3" fill="#ffd43b" ${ce(2)}/>
    <rect x="8" y="12" width="28" height="22" rx="4" fill="#fff" ${ce(2)}/>
    <circle cx="16" cy="22" r="4" fill="#ff8ec8"/><circle cx="28" cy="24" r="3" fill="#ffd43b"/>
    <path d="M18 78 C14 72 8 74 12 82 C15 88 18 90 18 90 C18 90 21 88 24 82 C28 74 22 72 18 78 Z" fill="#ff4d94" ${ce(1.5)}/>
  </g>`}function B9(e,t,n){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="6" rx="34" ry="9" fill="#000" opacity=".1"/>
    <path d="M-46 -16 C-50 -86 -26 -108 0 -110 C26 -108 50 -86 46 -16 Z" fill="#fff6fb" ${ce()}/>
    <path d="M-32 -20 C-34 -74 -16 -90 0 -92 C16 -90 34 -74 32 -20 Z" fill="${n}"/>
    <ellipse cx="0" cy="-10" rx="40" ry="16" fill="${n}" ${ce()}/>
    <ellipse cx="-8" cy="-16" rx="14" ry="6" fill="#fff" opacity=".4"/>
    <path d="M-22 -2 L-26 16 M22 -2 L26 16" fill="none" stroke="${Gt}" stroke-width="4" stroke-linecap="round"/>
  </g>`}function z9(e){const t=mo[e],n=t.game==="four"?"Four":"Slay",s=t.game==="four"?"#7ad7ea":e===0?"#ff8ec8":"#e0b0ff",o=t.game==="four"?"#b8f2ff":e===0?"#ffd0e6":"#ead9ff",i=t.seats>=6?250:t.seats>=4?200:150;return`${Ia(e).map(r=>B9(r.x,r.y,o)).join("")}
  <g transform="translate(${t.x} 500)">
    <ellipse cx="0" cy="28" rx="${i+18}" ry="20" fill="#000" opacity=".1"/>
    <rect x="-18" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ce(3)}/>
    <rect x="4" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ce(3)}/>
    <ellipse cx="0" cy="-4" rx="${i}" ry="30" fill="${s}" stroke="#ffd43b" stroke-width="6"/>
    <ellipse cx="0" cy="-4" rx="${i-16}" ry="18" fill="none" stroke="#fff" stroke-width="3" opacity=".45"/>
    <ellipse cx="${-i*.25}" cy="-12" rx="${i*.35}" ry="8" fill="#fff" opacity=".28"/>
    <text x="0" y="4" text-anchor="middle" font-size="22" font-weight="900" fill="#fff" stroke="${Gt}" stroke-width="4" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${n}</text>
  </g>`}const Li=(e,t,n=1,s="#ff4d94")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 4 C-6 -4 -14 -2 -10 6 C-7 12 0 16 0 16 C0 16 7 12 10 6 C14 -2 6 -4 0 4 Z" fill="${s}" stroke="${Gt}" stroke-width="1.6" stroke-linejoin="round"/>`;function mu(e,t){const n=La,s=Math.max(1,Math.ceil(t));let o="";if(e==="top"){o=`<rect width="${n}" height="${s}" fill="#ffe0f2"/>`;for(let i=s-70,a=0;i>24;i-=150,a++)o+=Hd(n,i,a%2?22:16,a%2?26:20);for(let i=0;i<14;i++){const a=90+i*397%(n-180),r=20+i*131%Math.max(20,s-70);o+=nn(a,r,.55+i%3*.2,i%2?"#fff":"#ffd43b")}}else{o=`<defs><linearGradient id="grFloorExt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e089ab"/><stop offset="1" stop-color="#d27399"/></linearGradient></defs>
  <rect width="${n}" height="${s}" fill="url(#grFloorExt)"/>`;for(let i=46;i<s;i+=64)o+=`<rect y="${i}" width="${n}" height="3" fill="#fff" opacity=".18"/>`}return`<svg class="grExt grExt-${e}" viewBox="0 0 ${n} ${s}" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${o}</svg>`}function D9(){const e=La,t=[[120,200],[260,250],[640,210],[900,250],[1180,190],[1560,230],[1860,180],[2100,240],[2420,200],[2520,280]];return`<svg class="grScene" viewBox="0 0 ${e} ${ga}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grWall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe0f2"/><stop offset="0.45" stop-color="#f3d4ff"/><stop offset="0.78" stop-color="#e7f7ff"/><stop offset="1" stop-color="#fff1c9"/>
    </linearGradient>
    <linearGradient id="grFloor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f7b7d4"/><stop offset="1" stop-color="#e089ab"/>
    </linearGradient>
    <linearGradient id="grSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#c9f0ff"/><stop offset="1" stop-color="#ffe0f0"/>
    </linearGradient>
    <radialGradient id="disco" cx="38%" cy="32%" r="68%">
      <stop offset="0" stop-color="#fff"/><stop offset="0.4" stop-color="#ffe0f2"/><stop offset="1" stop-color="#d0bfff"/>
    </radialGradient>
  </defs>
  <rect width="${e}" height="${ga}" fill="url(#grWall)"/>
  <rect y="390" width="${e}" height="80" fill="#fff6fb" opacity=".45"/>
  ${Array.from({length:8},(n,s)=>`<rect x="${40+s*330}" y="400" width="280" height="62" rx="8" fill="none" stroke="#fff" stroke-width="3" opacity=".55"/>`).join("")}
  <rect y="468" width="${e}" height="132" fill="url(#grFloor)"/>
  <rect y="464" width="${e}" height="12" fill="#ffd43b" ${ce(3)}/>
  ${[720,1500,2150].map((n,s)=>`<ellipse cx="${n}" cy="548" rx="${s===1?210:280}" ry="42" fill="${s===1?"#d8f6ff":s===0?"#ffe0f0":"#f3e8ff"}" stroke="#fff" stroke-width="4" opacity=".8"/>`).join("")}
  ${Hd(e,28,22,28)}
  ${Hd(e,78,16,18)}
  ${t.map(([n,s],o)=>nn(n,s,.7+o%3*.28,o%2?"#fff":"#ffd43b")).join("")}

  <g transform="translate(1180 70)">
    <rect x="20" y="20" width="220" height="150" rx="16" fill="url(#grSky)" ${ce()}/>
    <path d="M20 70 H240 M130 20 V170" ${ce(3)}/>
    <circle cx="78" cy="48" r="14" fill="#ffd43b" ${ce(2)}/>
    <path d="M8 36 Q20 90 8 150" fill="#ff8ec8" ${ce(3)}/><path d="M252 36 Q240 90 252 150" fill="#d0bfff" ${ce(3)}/>
  </g>

  <g class="neonSign" transform="translate(560 168)">
    <g class="neonSignArt">
    <rect x="-228" y="-58" width="456" height="108" rx="28" fill="#2b1430" ${ce(5)}/>
    <rect class="neonRing" x="-214" y="-44" width="428" height="80" rx="22" fill="none" stroke="#ff4d94" stroke-width="4"/>
    <path d="M-150 8 C-162 -14 -186 -8 -174 12 C-166 26 -150 36 -150 36 C-150 36 -134 26 -126 12 C-114 -8 -138 -14 -150 8 Z" fill="#ff4d94" stroke="#ffd0ea" stroke-width="2"/>
    <text x="6" y="16" text-anchor="middle" font-size="40" font-weight="900" fill="#ff7eb3" stroke="#fff6fb" stroke-width="2" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">SLAY CLUB</text>
    </g>
  </g>

  ${Mi(500,340,-6,"#ffe0f0",`${Li(0,8,1.4)}${nn(-18,-16,.7,"#ffd43b")}${nn(18,-10,.55,"#66d9e8")}`," frameAtHead")}
  ${Mi(270,196,-8,"#ffe0f0",`${Li(0,8,1.4)}${nn(-18,-16,.7,"#ffd43b")}${nn(18,-10,.55,"#66d9e8")}`," framePhone")}
  ${Mi(980,240,5,"#e7fbff",`<ellipse cx="0" cy="6" rx="16" ry="12" fill="#fff" ${ce(2)}/><path d="M-6 6 Q0 -8 6 6" fill="none" stroke="${Gt}" stroke-width="2"/><path d="M0 18 V28 M-12 24 H12" ${ce(2)}/>`)}
  ${Mi(1680,255,-4,"#fff3c4",`${nn(0,2,1.5,"#ffd43b")}`)}
  ${Mi(2360,245,6,"#f3e8ff",`${Li(0,4,1.3,"#d0bfff")}`)}
  ${ar(400,300,8,"#fff0f6",Li(0,-4,1.1))}
  ${ar(820,310,-7,"#e7fbff",nn(0,-6,1,"#66d9e8"))}
  ${ar(1900,300,9,"#fff6e6",nn(0,-6,1,"#ffd43b"))}
  ${ar(2280,320,-8,"#ffe0f0",Li(0,-4,1))}

  <g class="disco" transform="translate(1288 36)">
    <line y1="0" y2="22" stroke="${Gt}" stroke-width="3"/>
    <circle cy="44" r="26" fill="url(#disco)" ${ce(3)}/>
    <path d="M-14 36 L0 56 L14 36 M-8 48 H8" fill="none" stroke="#fff" stroke-width="2.5"/>
    ${nn(-30,20,.45)}${nn(32,28,.4,"#ffd43b")}
  </g>

  <g transform="translate(86 292)">
    <rect width="78" height="168" rx="12" fill="#ff8ec8" ${ce()}/>
    <rect x="8" y="10" width="62" height="36" rx="8" fill="#fff6e6" ${ce(2)}/>
    <text x="39" y="34" text-anchor="middle" font-size="16" font-weight="900" fill="${Gt}" font-family="Nunito, ui-rounded, system-ui, sans-serif">MAP</text>
    <circle cx="62" cy="96" r="5" fill="#ffd43b" ${ce(2)}/>
    <rect x="22" y="118" width="34" height="8" rx="3" fill="#fff" opacity=".45"/>
  </g>

  ${rr(40,400,"#ffd43b","#8ce99a")}
  ${rr(1080,392,"#ff8ec8","#69db7c")}
  ${rr(1600,400,"#d0bfff","#8ce99a")}
  ${rr(2520,396,"#66d9e8","#69db7c")}
  ${O9(200,348)}
  <g transform="translate(2420 360)">
    <rect width="130" height="100" rx="14" fill="#fff6fb" ${ce()}/>
    <rect y="28" width="130" height="10" fill="#ffd0e6" ${ce(2)}/>
    <circle cx="28" cy="64" r="12" fill="#ffd43b" ${ce(2)}/><circle cx="64" cy="66" r="10" fill="#ff8ec8" ${ce(2)}/><rect x="86" y="52" width="28" height="22" rx="6" fill="#66d9e8" ${ce(2)}/>
    <text x="65" y="20" text-anchor="middle" font-size="13" font-weight="900" fill="${Gt}" font-family="Nunito, ui-rounded, system-ui, sans-serif">SNACKS</text>
  </g>

  ${xi(330,455,"#ff8ec8",1.05)}
  ${xi(1120,468,"#d0bfff")}
  ${xi(1360,470,"#8ce4f2",.9)}
  ${xi(1780,462,"#ffd43b")}
  ${gu(1480,500,"#ffb3d9")}
  ${gu(2e3,505,"#c9b3ff")}
  ${xi(2550,468,"#ff8ec8",.85)}

  ${mo.map((n,s)=>z9(s)).join("")}
  </svg>`}const H9=`<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="10" fill="#2b1430" stroke="${Gt}" stroke-width="3"/><path d="M24 32 C16 26 12 22 14 17 C16 13 21 14 24 18 C27 14 32 13 34 17 C36 22 32 26 24 32 Z" fill="#ff4d94" stroke="#ffd0ea" stroke-width="1.5"/><circle cx="10" cy="8" r="2.2" fill="#ffd43b"/><circle cx="24" cy="5" r="2.2" fill="#66d9e8"/><circle cx="38" cy="8" r="2.2" fill="#d0bfff"/></svg>`,q="#5a3d5c",W9=`<svg viewBox="0 0 120 100"><rect x="0" y="62" width="120" height="38" rx="14" fill="#9fe0aa" stroke="${q}" stroke-width="3"/>
  <path d="M18 70 L30 22 L42 70 M78 70 L90 22 L102 70" fill="none" stroke="#8ecae6" stroke-width="5" stroke-linecap="round"/><path d="M26 22 H94" stroke="#ff8fab" stroke-width="7" stroke-linecap="round"/>
  <path d="M50 22 V54 M66 22 V54" stroke="${q}" stroke-width="2.5"/><rect x="45" y="52" width="26" height="7" rx="3" fill="#ff9f68" stroke="${q}" stroke-width="2.5"/>
  <circle cx="104" cy="14" r="9" fill="#ffd166" stroke="${q}" stroke-width="3"/></svg>`,Zm=`<svg viewBox="0 0 120 100"><path d="M20 50 L60 16 L100 50" fill="#ff8fab" stroke="${q}" stroke-width="4" stroke-linejoin="round"/><rect x="28" y="48" width="64" height="44" rx="6" fill="#fff6e6" stroke="${q}" stroke-width="4"/>
  <rect x="52" y="64" width="16" height="28" rx="4" fill="#c9a0dc" stroke="${q}" stroke-width="3"/><rect x="34" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${q}" stroke-width="3"/><rect x="73" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${q}" stroke-width="3"/></svg>`,Xf=`<svg viewBox="0 0 120 100"><path d="M40 18 L24 28 L14 46 L30 52 L34 44 V88 H86 V44 L90 52 L106 46 L96 28 L80 18 Q60 34 40 18 Z" fill="#8ecae6" stroke="${q}" stroke-width="4" stroke-linejoin="round"/><circle cx="60" cy="58" r="7" fill="#fff3b0" stroke="${q}" stroke-width="3"/></svg>`,ke=e=>`<div class="wnArt">${e}</div>`,Gm=`<svg viewBox="0 0 120 100"><rect x="16" y="58" width="74" height="24" rx="10" fill="#fff" stroke="${q}" stroke-width="4"/><circle cx="32" cy="70" r="7" fill="#ff8fab" stroke="${q}" stroke-width="3"/><circle cx="52" cy="70" r="7" fill="#ffe066" stroke="${q}" stroke-width="3"/><circle cx="72" cy="70" r="7" fill="#8ecae6" stroke="${q}" stroke-width="3"/><path d="M86 46 l14 -16 8 8 -14 16z" fill="#ffd166" stroke="${q}" stroke-width="3" stroke-linejoin="round"/><rect x="78" y="44" width="12" height="24" rx="4" fill="#c9a0dc" stroke="${q}" stroke-width="3"/></svg>`,V9=`<svg viewBox="0 0 120 100">${dn.map((e,t)=>`<path d="M${12+t*6} 84 A${48-t*6} ${48-t*6} 0 0 1 ${108-t*6} 84" fill="none" stroke="${e}" stroke-width="6"/>`).join("")}
  <path d="M38 92 V62 L60 44 L82 62 V92 Z" fill="#ef5b5b" stroke="${q}" stroke-width="3.5" stroke-linejoin="round"/><rect x="52" y="70" width="16" height="22" fill="#fff6e6" stroke="${q}" stroke-width="3"/></svg>`,U9=`<svg viewBox="0 0 120 100"><g transform="translate(22 8) scale(1.9)">${ua.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g><g transform="translate(52 22) scale(1.4)">${ua.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g></svg>`,Ym=(e,t,n,s)=>`<g transform="translate(${t} ${n}) scale(${s})">${e.replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}</g>`,Q9=`<svg viewBox="0 0 120 100"><circle cx="60" cy="50" r="40" fill="#fff" stroke="${q}" stroke-width="4"/>${Ym(df(Et({skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6"})).replace('viewBox="14 2 72 74"','viewBox="0 0 100 160"'),26,12,.68)}<circle cx="60" cy="50" r="40" fill="none" stroke="#ff6b9a" stroke-width="5"/></svg>`,N9=`<svg viewBox="0 0 120 100"><rect x="8" y="28" width="104" height="64" rx="16" fill="#fff0f6" stroke="${q}" stroke-width="4"/><path d="M8 40 L60 12 L112 40" fill="#ff6b9a" stroke="${q}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M60 58 C52 48 40 50 46 60 C50 68 60 74 60 74 C60 74 70 68 74 60 C80 50 68 48 60 58 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  ${[18,34,50,66,82,98].map((e,t)=>`<circle cx="${e}" cy="24" r="4" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" stroke="${q}" stroke-width="1.5"/>`).join("")}</svg>`,q9=`<svg viewBox="0 0 120 100"><rect x="28" y="8" width="64" height="84" rx="12" fill="#fff" stroke="${q}" stroke-width="4"/><rect x="28" y="8" width="64" height="84" rx="12" fill="none" stroke="#ff7eb3" stroke-width="6"/><path d="M48 36 L54 24 L60 34 L68 20 L76 34 L82 24 L88 36 Z" fill="#ffd43b" stroke="${q}" stroke-width="2" stroke-linejoin="round"/><text x="60" y="78" text-anchor="middle" font-size="22" font-weight="900" fill="#ff4d94" font-family="Nunito, ui-rounded, system-ui, sans-serif">SLAY</text></svg>`,F9=`<svg viewBox="0 0 120 100"><rect x="10" y="16" width="100" height="72" rx="14" fill="#fff6fb" stroke="${q}" stroke-width="4"/>
  <path d="M36 58 C28 48 18 50 24 60 C28 68 36 74 36 74 C36 74 44 68 48 60 C54 50 44 48 36 58 Z" fill="#ff4d94" stroke="${q}" stroke-width="2"/>
  <path d="M78 28 L82 40 H94 L84 48 L88 60 L78 52 L68 60 L72 48 L62 40 H74 Z" fill="#66d9e8" stroke="${q}" stroke-width="2"/></svg>`,Km=`<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="22" rx="6" fill="#fff" stroke="${q}" stroke-width="3"/><path d="M6 26 H42 M14 18 V40 M22 18 V40 M30 18 V40 M36 18 V40" stroke="${q}" stroke-width="2.4"/><rect x="4" y="12" width="40" height="8" rx="4" fill="#9ad7f5" stroke="${q}" stroke-width="3"/><ellipse cx="20" cy="32" rx="5" ry="3" fill="#ffe0ec"/><ellipse cx="30" cy="32" rx="5" ry="3" fill="#c9e7ff"/></svg>`,j9=`<svg viewBox="0 0 120 100"><ellipse cx="60" cy="72" rx="50" ry="20" fill="#ffc2d4" stroke="${q}" stroke-width="4"/><ellipse cx="60" cy="72" rx="32" ry="11" fill="#fff" stroke="${q}" stroke-width="3"/><path d="M60 58 C50 46 36 48 42 60 C48 70 60 78 60 78 C60 78 72 70 78 60 C84 48 70 46 60 58 Z" fill="#ff4d94" stroke="${q}" stroke-width="3"/><path d="M22 40 Q28 28 36 36" fill="none" stroke="#7dce8a" stroke-width="4" stroke-linecap="round"/><circle cx="22" cy="38" r="5" fill="#ffd166" stroke="${q}" stroke-width="2"/></svg>`,Z9=`<svg viewBox="0 0 120 100"><path d="M16 50 L60 14 L104 50" fill="#ff8fab" stroke="${q}" stroke-width="4" stroke-linejoin="round"/><rect x="26" y="48" width="68" height="40" rx="10" fill="#fff6ea" stroke="${q}" stroke-width="4"/><path d="M42 88 V60 Q60 44 78 60 V88" fill="#ffe8c7" stroke="${q}" stroke-width="3"/><circle cx="82" cy="64" r="7" fill="#bde0fe" stroke="${q}" stroke-width="3"/><circle cx="80" cy="62" r="2" fill="#fff"/></svg>`,G9=`<svg viewBox="0 0 120 100"><rect x="28" y="38" width="64" height="42" rx="8" fill="#8ecae6" stroke="${q}" stroke-width="4"/><path d="M28 44 L60 68 L92 44" fill="none" stroke="${q}" stroke-width="4"/><path d="M76 30 V16" stroke="${q}" stroke-width="4" stroke-linecap="round"/><path d="M76 16 H96 L90 23 L96 30 H76 Z" fill="#ff6b6b" stroke="${q}" stroke-width="3"/></svg>`,Y9=`<svg viewBox="0 0 120 100"><rect x="8" y="32" width="48" height="40" rx="14" fill="#fff3b0" stroke="${q}" stroke-width="4"/><rect x="64" y="32" width="48" height="40" rx="14" fill="#fff" stroke="${q}" stroke-width="4"/><path d="M26 44 L40 52 L26 60 Z" fill="${q}"/><circle cx="88" cy="52" r="6" fill="#ff8fab" stroke="${q}" stroke-width="3"/></svg>`,K9=`<svg viewBox="0 0 120 100"><rect x="16" y="18" width="36" height="58" rx="6" fill="#fff" stroke="${q}" stroke-width="4"/><rect x="62" y="24" width="42" height="52" rx="6" fill="#e7f6ff" stroke="${q}" stroke-width="4"/><circle cx="34" cy="66" r="2.4" fill="${q}"/><circle cx="83" cy="66" r="2.4" fill="${q}"/></svg>`,Xm=`<svg viewBox="0 0 120 100"><rect x="28" y="16" width="64" height="72" rx="16" fill="#fff" stroke="${q}" stroke-width="4"/><path d="M40 36 H80 M40 52 H80 M40 68 H80" fill="none" stroke="${q}" stroke-width="5" stroke-linecap="round"/><circle cx="92" cy="24" r="12" fill="#ff6b9a" stroke="${q}" stroke-width="3"/><text x="92" y="29" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" font-family="Nunito, ui-rounded, system-ui, sans-serif">1</text></svg>`,X9=`<svg viewBox="0 0 120 100"><rect x="6" y="10" width="108" height="80" rx="18" fill="#2a2158" stroke="${q}" stroke-width="4"/><circle cx="34" cy="42" r="14" fill="#ffd166" stroke="${q}" stroke-width="3"/><path d="M78 28 a16 16 0 1 0 0 32 a12 12 0 1 1 0 -32z" fill="#fff6e4" stroke="${q}" stroke-width="3"/><circle cx="92" cy="30" r="2" fill="#fff"/><circle cx="70" cy="24" r="1.6" fill="#fff"/><circle cx="100" cy="48" r="1.6" fill="#fff"/></svg>`,J9=`<svg viewBox="0 0 120 100"><circle cx="60" cy="52" r="34" fill="#fff6e4" stroke="${q}" stroke-width="4"/><path d="M60 52 V32 M60 52 L76 60" stroke="${q}" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="52" r="3" fill="${q}"/><path d="M28 22 l4 6 M92 22 l-4 6" stroke="#ffb15c" stroke-width="4" stroke-linecap="round"/></svg>`,Jm=`<svg viewBox="0 0 120 100"><path d="M60 18 L72 46 H96 L78 62 L84 90 L60 74 L36 90 L42 62 L24 46 H48 Z" fill="#ffd166" stroke="${q}" stroke-width="4" stroke-linejoin="round"/><path d="M60 48 L28 92 H92 Z" fill="#2f6b4f" stroke="${q}" stroke-width="4" stroke-linejoin="round"/><rect x="52" y="88" width="16" height="8" rx="2" fill="#c44558" stroke="${q}" stroke-width="3"/></svg>`,e1=[{v:10,title:"Winter Cheer!",lines:[{art:ke(Jm),text:"The <b>Winter Cheer</b> pack is in your drawer!"}]},{v:9,title:"Everything's tidied into the Menu!",lines:[{art:ke(Xm),text:"Everything's tidied into the <b>Menu</b>!"},{art:ke(X9),text:"The world follows the <b>clock</b>: morning, day, golden evening, and night."},{art:ke(J9),text:"Tap the <b>sun</b> and the <b>moon</b>. <b>Auto</b> follows the clock."}]},{v:8,title:"Make your look!",lines:[{art:ke(G9),text:"Leave a <b>letter</b> in a friend's mailbox!"},{art:ke(Y9),text:"Tap <b>Play</b> or <b>Decorate</b>!"},{art:ke(Xf),text:"<b>Make your look!</b> New hair, clothes, and colors."},{art:ke(K9),text:"Update every iPad to see the <b>new outfits</b>!"}]},{v:7,title:"New Nursery!",lines:[{art:ke(Km),text:"A new <b>Nursery</b> room, with a <b>crib</b> and a rocker!"},{art:ke(j9),text:"The <b>Cozy Cottage</b> furniture pack is in your drawer!"},{art:ke(Z9),text:"A <b>dog kennel</b> and a <b>cat tower</b> for your pets!"}]},{v:6,title:"The clubhouse is open!",lines:[{art:ke(N9),text:"A glam <b>clubhouse</b> on the map!"},{art:ke(q9),text:"Play <b>Slay</b> with friends at a table!"},{art:ke(F9),text:"Line up <b>hearts</b> or <b>stars</b>!"}]},{v:5,title:"Your house looks even cozier!",lines:[{art:ke(Gm),text:"Wallpaper and floors show their <b>real patterns</b> when you paint!"},{art:ke(Ko(0,"sit",Yo(0,"sit"))),text:"Your cat is <b>big and cozy</b>, just like the toy cat."},{art:ke(Zm),text:"Tap <b>home</b> to come back from the map, the park, or the ranch."}]},{v:4,title:"A map of our neighborhood!",lines:[{art:ke(cf),text:"Tap the <b>map</b> to go anywhere!"},{art:ke(Q9),text:"Tap a friend's face to <b>find her</b>."},{art:ke(Ld(0,Dd(0))),text:"The petting zoo is inside the <b>barn</b> now!"}]},{v:3,title:"Rainbow Ranch is open!",lines:[{art:ke(V9),text:"Visit <b>Rainbow Ranch</b>!"},{art:ke(Ld(1,Dd(1))),text:"Pet and feed animals at the <b>petting zoo</b>."},{art:ke(Uf(4,!1,Yf(4))),text:"Ride <b>horses</b> and the <b>rainbow pony</b>!"},{art:ke(qi("basket",U9)),text:"Collect <b>eggs</b> from the hens."},{art:ke(`<svg viewBox="0 0 70 90">${Ym(jm({seed:"carrot",wet:1},3,0),0,0,1)}</svg>`),text:"Grow carrots and flowers in the <b>garden</b>."}]},{v:2,title:"What's new!",lines:[{art:ke(W9),text:"A new <b>park</b>! Swing, slide and splash with friends."},{art:ke(Ko(3,"sit",Yo(3,"sit"))),text:"Adopt a <b>cat</b>! She lives in your house."},{art:ke(fa(3,"stand",ca(3,"stand"))),text:"Adopt a <b>dog</b>! Take it to the park to play fetch."}]}],t1=e1[0].v,n1={v:t1,title:"Welcome to your cozy house!",lines:[{art:ke(Zm),text:"Drag furniture into your rooms."},{art:ke(Xf),text:"Dress up your friends."},{art:ke(Ko(0,"sit",Yo(0,"sit"))),text:"Adopt a pet from the Menu ☰!"}]},s1=kt("cozy-whatsnew"),eE=1;function tE(){try{const e=Number(localStorage.getItem(s1)),t=["cozy-house","cozy-house-v1","cozy-hood"].some(o=>localStorage.getItem(kt(o))!==null);if(!e&&!t)return{kind:"welcome",entries:[n1]};const n=e||eE,s=e1.filter(o=>o.v>n).slice(0,3);return s.length?{kind:"news",entries:s}:{kind:"none",entries:[]}}catch{return{kind:"none",entries:[]}}}function nE(){try{localStorage.setItem(s1,String(t1))}catch{}}function sE(e,t){const n=e==="welcome"?n1.title:t[0].title,s=t.flatMap(o=>o.lines).slice(0,5);return`<div class="wnBadge">${e==="welcome"?ig:t[0].v>=10?Jm:t[0].v>=9?Xm:t[0].v>=8?Xf:t[0].v>=7?Km:t[0].v>=6?H9:t[0].v>=5?Gm:t[0].v>=4?cf:t[0].v>=3?T9:O4}</div>
    <h2 class="wnTitle">${n}</h2>
    <div class="wnList ${s.length>3?"many":""}">${s.map((o,i)=>`<div class="wnLine" style="animation-delay:${.15+i*.18}s">${o.art}<p>${o.text}</p></div>`).join("")}</div>
    <button class="wnGo" id="wnGo">Let's play!</button>`}const o1="cozy-sky",Wd={tint:"#fff6e4",body:"#ffe9f0",pageA:"#ffe0ec",pageB:"#e6ddff",spot:"#fff6fa",fieldA:"#c9f2c7",fieldB:"#8fd18a",win:"#a2d2ff",win2:"#b9e3ff",house:"#fff3b0",mapTint:"#ffffff"},yu={tint:"#e7b4cc",body:"#f6dce8",pageA:"#ffd0e6",pageB:"#e6d2f8",spot:"#fff0f6",fieldA:"#f6d0e2",fieldB:"#dcc8f0",win:"#f6c6de",win2:"#e4d0f8",house:"#ffe0ee",mapTint:"#f3c4dc"},wu={tint:"#ffb38a",body:"#ffe4dc",pageA:"#ffe0d6",pageB:"#f0d8ea",spot:"#fff6ee",fieldA:"#d4eec4",fieldB:"#a3cb8a",win:"#ffc48a",win2:"#ffd4b0",house:"#ffc56a",mapTint:"#ffb38a"},zo={tint:"#2a2350",body:"#14182c",pageA:"#1c1748",pageB:"#101832",spot:"#2c2458",fieldA:"#1a2458",fieldB:"#0c1028",win:"#1a245c",win2:"#12183a",house:"#ffe9a0",mapTint:"#102044"},lr=[{m:0,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...zo},{m:5*60,opacity:.7,map:.78,glow:.95,stars:.95,glass:1,phase:"night",...zo},{m:5*60+35,opacity:.42,map:.34,glow:.55,stars:.42,glass:.8,phase:"dawn",...yu},{m:6*60+25,opacity:.14,map:.16,glow:.28,stars:.08,glass:.9,phase:"dawn",...yu},{m:7*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Wd},{m:16*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Wd},{m:17*60+5,opacity:.08,map:.1,glow:.4,stars:.02,glass:.55,phase:"golden",...wu},{m:18*60+10,opacity:.18,map:.2,glow:.62,stars:.06,glass:.82,phase:"golden",...wu},{m:19*60+5,opacity:.52,map:.68,glow:.9,stars:.55,glass:1,phase:"night",...zo},{m:20*60+10,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...zo},{m:24*60,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...zo}],oE={phase:"day",opacity:0,map:0,glow:0,stars:0,glass:0,...Wd},iE={phase:"night",opacity:.7,map:.78,glow:1,stars:1,glass:1,...zo};function bu(e){const t=e.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function tn(e,t,n){const s=bu(e),o=bu(t),i=a=>Math.round(s[a]+(o[a]-s[a])*n).toString(16).padStart(2,"0");return"#"+i(0)+i(1)+i(2)}const Ei=(e,t,n)=>e+(t-e)*n;function aE(e){const t=e.getHours()*60+e.getMinutes()+e.getSeconds()/60;let n=0;for(;n<lr.length-2&&t>=lr[n+1].m;)n++;const s=lr[n],o=lr[n+1],i=Math.max(1,o.m-s.m),a=Math.max(0,Math.min(1,(t-s.m)/i));return{phase:a<.5?s.phase:o.phase,opacity:Ei(s.opacity,o.opacity,a),map:Ei(s.map,o.map,a),glow:Ei(s.glow,o.glow,a),stars:Ei(s.stars,o.stars,a),glass:Ei(s.glass,o.glass,a),tint:tn(s.tint,o.tint,a),body:tn(s.body,o.body,a),pageA:tn(s.pageA,o.pageA,a),pageB:tn(s.pageB,o.pageB,a),spot:tn(s.spot,o.spot,a),fieldA:tn(s.fieldA,o.fieldA,a),fieldB:tn(s.fieldB,o.fieldB,a),win:tn(s.win,o.win,a),win2:tn(s.win2,o.win2,a),house:tn(s.house,o.house,a),mapTint:tn(s.mapTint,o.mapTint,a)}}function vu(e,t){return t==="day"?oE:t==="night"?iE:aE(e)}function rE(e){return e==="day"||e==="night"||e==="auto"}function lE(e,t=!1){return t?!0:e==="lamp"||e==="window"||e==="stars"||e==="tv"||/lamp|light|lantern|candle|string-lights|night-light/i.test(e)}function ku(){try{if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches)return!0}catch{}if(typeof navigator>"u")return!1;const e=navigator.hardwareConcurrency;if(typeof e=="number"&&e>0&&e<=2)return!0;const t=navigator.deviceMemory;return typeof t=="number"&&t>0&&t<=2}const _u={day:"night",night:"auto",auto:"day"},$u={day:"Day",night:"Night",auto:"Auto"},i1='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><g fill="none" stroke="#ffb15c" stroke-width="3" stroke-linecap="round"><path d="M24 7 V13 M24 35 V41 M7 24 H13 M35 24 H41 M12 12 L16 16 M32 32 L36 36 M36 12 L32 16 M16 32 L12 36"/></g></svg>',cE='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 8 a14 14 0 1 0 0 32 a11 11 0 1 1 0 -32z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="3"/><circle cx="14" cy="16" r="1.7" fill="#ffd166"/><circle cx="18" cy="28" r="1.2" fill="#fff"/><circle cx="11" cy="24" r="1" fill="#fff"/></svg>',dE='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="28" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M34 8 a9 9 0 1 0 0 18 a7 7 0 1 1 0 -18z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="2.5"/><circle cx="14" cy="16" r="1.3" fill="#ffd166"/></svg>',fE={day:i1,night:cE,auto:dE},pE="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)";function hE(){if(document.getElementById("skyInk"))return;const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.id="skyInk",e.setAttribute("aria-hidden","true"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.style.cssText="position:fixed;left:0;top:0;width:0;height:0;overflow:hidden;pointer-events:none",e.innerHTML=`
    <filter id="skyNightInk" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0.72 0 0 0 0.046  0 0.72 0 0 0.038  0 0 0.72 0 0.088  0 0 0 1 0"/></filter>
    <filter id="skyNightKid" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0.84 0 0 0 0.026  0 0.84 0 0 0.022  0 0 0.84 0 0.050  0 0 0 1 0"/></filter>
    <filter id="skyGoldInk" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0.82 0 0 0 0.180  0 0.82 0 0 0.126  0 0 0.82 0 0.097  0 0 0 1 0"/></filter>
    <filter id="skyGoldKid" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0.88 0 0 0 0.120  0 0.88 0 0 0.084  0 0 0.88 0 0.065  0 0 0 1 0"/></filter>`,document.body.appendChild(e);const t=document.createElement("style");t.id="skyInkCss",t.textContent=`
    html[data-sky="night"] #layer > .item:not(.is-light) > .inner,
    html[data-sky="night"] #layer > .pet > .inner,
    html[data-sky="night"] .scenery .sceneRug svg,
    html[data-sky="night"] .scenery .scenePlant svg,
    html[data-sky="night"] .scenery .sceneWin svg { filter: url("#skyNightInk"); }
    html[data-sky="night"] #layer > .char > .inner,
    html[data-sky="night"] #layer > .char > .hands { filter: url("#skyNightKid"); }
    html[data-sky="night"] #layer > .item.sel:not(.is-light) > .inner { filter: url("#skyNightInk") drop-shadow(0 0 0 #fff) drop-shadow(0 0 6px #fff) drop-shadow(0 0 3px #ffd166); }
    html[data-sky="night"] #layer > .item.lifted:not(.is-light) > .inner { filter: url("#skyNightInk") drop-shadow(0 14px 8px rgba(0,0,0,.18)); }
    html[data-sky="night"] #layer > .char.active > .inner { filter: url("#skyNightKid") drop-shadow(0 0 4px #fff) drop-shadow(0 0 2px #ffd166); }
    html[data-sky="night"] #layer > .char.hold-target > .inner { filter: url("#skyNightKid") drop-shadow(0 0 6px #fff) drop-shadow(0 0 8px #80ed99); }
    html[data-sky="golden"] #layer > .item:not(.is-light) > .inner,
    html[data-sky="golden"] #layer > .pet > .inner,
    html[data-sky="golden"] .scenery .sceneRug svg,
    html[data-sky="golden"] .scenery .scenePlant svg,
    html[data-sky="golden"] .scenery .sceneWin svg { filter: url("#skyGoldInk"); }
    html[data-sky="golden"] #layer > .char > .inner,
    html[data-sky="golden"] #layer > .char > .hands { filter: url("#skyGoldKid"); }
    html[data-sky="golden"] #layer > .item.sel:not(.is-light) > .inner { filter: url("#skyGoldInk") drop-shadow(0 0 0 #fff) drop-shadow(0 0 6px #fff) drop-shadow(0 0 3px #ffd166); }
    html[data-sky="golden"] #layer > .item.lifted:not(.is-light) > .inner { filter: url("#skyGoldInk") drop-shadow(0 14px 8px rgba(0,0,0,.18)); }
    html[data-sky="golden"] #layer > .char.active > .inner { filter: url("#skyGoldKid") drop-shadow(0 0 4px #fff) drop-shadow(0 0 2px #ffd166); }
    html[data-sky="golden"] #layer > .char.hold-target > .inner { filter: url("#skyGoldKid") drop-shadow(0 0 6px #fff) drop-shadow(0 0 8px #80ed99); }
  `,document.head.appendChild(t)}function uE(e){hE();const t=ku();let n=mE(),s=null,o=vu(new Date,n),i=0;e.innerHTML=`<button type="button" class="skyBtn" aria-label="Day. Tap for night.">${i1}</button>`;const a=e.querySelector("button"),r=u=>{o=u;const y=document.documentElement,g=Math.max(0,Math.min(1,u.glow));y.style.setProperty("--sky-opacity",u.opacity.toFixed(3)),y.style.setProperty("--sky-map-opacity",u.map.toFixed(3)),y.style.setProperty("--sky-glow",g.toFixed(3)),y.style.setProperty("--sky-stars",u.stars.toFixed(3)),y.style.setProperty("--sky-glass",u.glass.toFixed(3)),y.style.setProperty("--sky-tint",u.tint),y.style.setProperty("--sky-body",u.body),y.style.setProperty("--sky-page-a",u.pageA),y.style.setProperty("--sky-page-b",u.pageB),y.style.setProperty("--sky-spot",u.spot),y.style.setProperty("--sky-field-a",u.fieldA),y.style.setProperty("--sky-field-b",u.fieldB),y.style.setProperty("--sky-win",u.win),y.style.setProperty("--sky-win-2",u.win2),y.style.setProperty("--sky-house-win",u.house),y.style.setProperty("--sky-map-tint",u.mapTint),y.style.setProperty("--sky-glow-soft",`rgba(255, 186, 80, ${(g*.72).toFixed(3)})`),y.style.setProperty("--sky-glow-hot",`rgba(255, 220, 120, ${(g*.96).toFixed(3)})`),y.style.setProperty("--sky-glow-clear","rgba(255, 186, 80, 0)"),y.style.setProperty("--sky-glow-wash",`rgba(255, 170, 70, ${(g*.55).toFixed(3)})`),y.style.setProperty("--sky-glow-map",`rgba(255, 196, 110, ${(g*.7).toFixed(3)})`);const v=u.phase==="golden"?.24:u.phase==="dawn"?.22:0,w=u.phase==="golden"?"186, 110, 52":"140, 62, 18";y.style.setProperty("--sky-shadow",`rgba(${w}, ${v.toFixed(3)})`);const m=u.phase==="night"?.55:u.phase==="golden"?.08:u.phase==="dawn"?.16:0;y.style.setProperty("--sky-vig",`rgba(12, 10, 32, ${m.toFixed(3)})`);const b=u.phase==="golden"?"255, 196, 80":u.phase==="dawn"?"255, 214, 230":"255, 246, 214";y.style.setProperty("--sky-orb",`rgba(${b}, ${Math.min(1,u.glass).toFixed(3)})`),y.dataset.sky=u.phase,y.dataset.skyChoice=n,y.classList.toggle("sky-static",t),y.classList.toggle("sky-live",!t),a.innerHTML=fE[n],a.setAttribute("aria-label",`${$u[n]}. Tap for ${$u[_u[n]].toLowerCase()}.`)},l=()=>vu(s??new Date,n),c=()=>r(l()),d=()=>{i&&clearInterval(i),i=window.setInterval(()=>{!s&&!document.hidden&&c()},t?6e4:1e3)},f=u=>{n=u;try{localStorage.setItem(kt(o1),n)}catch{}c()};a.addEventListener("click",()=>f(_u[n])),document.documentElement.classList.toggle("sky-static",t),c(),d(),og(()=>{s||c()});const h=document.getElementById("mapWorld");h&&gE(h);try{matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",()=>{const y=ku();document.documentElement.classList.toggle("sky-static",y),document.documentElement.classList.toggle("sky-live",!y)})}catch{}try{matchMedia(pE).addEventListener?.("change",()=>Mr())}catch{}return window.addEventListener("resize",()=>Mr()),new MutationObserver(()=>Mr()).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{choice:()=>n,look:()=>o,setChoice(u){f(u)},freeze(u){s=u,c()}}}function Mr(){const e=document.getElementById("skyMount"),t=document.getElementById("menuDaySlot");e&&t&&e.parentElement!==t&&t.appendChild(e),t&&(t.hidden=!1),e&&(e.style.left="",e.style.top="")}function gE(e){const t=document.createElement("div");t.className="skyTint",t.setAttribute("aria-hidden","true");const n=document.createElement("div");n.className="skyLamps",n.setAttribute("aria-hidden","true");const s=document.createElement("div");s.className="skyBits",s.setAttribute("aria-hidden","true"),s.innerHTML='<i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i>';const o=()=>{e.contains(t)||e.appendChild(t),e.contains(n)||e.appendChild(n),e.contains(s)||e.appendChild(s)};o(),new MutationObserver(o).observe(e,{childList:!0})}function mE(){try{const e=localStorage.getItem(kt(o1));if(rE(e))return e}catch{}return"auto"}const a1=255,yE=12;class wE{constructor(t){this.w=ms,this.h=ys,this.undo=[],this.px=I0(t??null)}checkpoint(){this.undo.push(this.px.slice()),this.undo.length>yE&&this.undo.shift()}canUndo(){return this.undo.length>0}undoStep(){const t=this.undo.pop();return t?(this.px=t,!0):!1}apply(t){switch(t.k){case"line":this.line(t.x0,t.y0,t.x1,t.y1,t.r,t.c);break;case"fill":this.fill(t.x,t.y,t.c);break;case"stamp":this.stamp(t.mask,t.x,t.y);break;case"clear":this.px.fill(0);break}}dot(t,n,s,o){const i=Math.max(.5,s),a=i*i,r=Math.max(0,Math.floor(t-i)),l=Math.min(this.w-1,Math.ceil(t+i)),c=Math.max(0,Math.floor(n-i)),d=Math.min(this.h-1,Math.ceil(n+i));for(let f=c;f<=d;f++)for(let h=r;h<=l;h++){const u=h+.5-t,y=f+.5-n;u*u+y*y<=a&&(this.px[f*this.w+h]=o)}}line(t,n,s,o,i,a){const r=Math.hypot(s-t,o-n),l=Math.max(.5,i/2),c=Math.max(1,Math.ceil(r/l));for(let d=0;d<=c;d++)this.dot(t+(s-t)*d/c,n+(o-n)*d/c,i,a)}fill(t,n,s){const o=Math.floor(t),i=Math.floor(n);if(o<0||i<0||o>=this.w||i>=this.h)return;const{w:a,h:r,px:l}=this,c=l[i*a+o];if(c===s)return;const d=[o,i];for(;d.length;){const f=d.pop(),h=d.pop();let u=h;for(;u>0&&l[f*a+u-1]===c;)u--;let y=h;for(;y<a-1&&l[f*a+y+1]===c;)y++;for(let g=u;g<=y;g++)l[f*a+g]=s,f>0&&l[(f-1)*a+g]===c&&(g===u||l[(f-1)*a+g-1]!==c)&&d.push(g,f-1),f<r-1&&l[(f+1)*a+g]===c&&(g===u||l[(f+1)*a+g-1]!==c)&&d.push(g,f+1)}}stamp(t,n,s){const o=Math.round(n-t.w/2),i=Math.round(s-t.h/2);for(let a=0;a<t.h;a++)for(let r=0;r<t.w;r++){const l=t.px[a*t.w+r];if(l===a1)continue;const c=o+r,d=i+a;c>=0&&d>=0&&c<this.w&&d<this.h&&(this.px[d*this.w+c]=l)}}save(){let t=wc(this.px),n=this.px;for(let s=0;t.length>dd&&s<6;s++)n=bE(n,this.w,this.h,1<<s),t=wc(n);return t.length>dd&&(t=wc(vE(n,this.w,this.h,8))),t}}function bE(e,t,n,s){const o=e.slice();for(let i=0;i<n;i++){let a=0;for(;a<t;){const r=o[i*t+a];let l=1;for(;a+l<t&&o[i*t+a+l]===r;)l++;l<=s&&a>0&&o.fill(o[i*t+a-1],i*t+a,i*t+a+l),a+=l}}return o}function vE(e,t,n,s){const o=new Uint8Array(e.length);for(let i=0;i<n;i++)for(let a=0;a<t;a++)o[i*t+a]=e[Math.floor(i/s)*s*t+Math.floor(a/s)*s];return o}function kE(e,t,n,s){let o=0,i=1/0;return s.forEach((a,r)=>{const l=parseInt(a.slice(1,3),16),c=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16),f=(l-e)**2*2+(c-t)**2*4+(d-n)**2*3;f<i&&(i=f,o=r)}),o}const cr="#5a3d5c",vo=new Map,Vd=new Map,Ud=kt("cozy-art");function _E(){try{const e=JSON.parse(localStorage.getItem(Ud)??"{}");if(e&&typeof e=="object")for(const[t,n]of Object.entries(e))C0(t)&&Sf(n)&&vo.set(t,n)}catch{}}function $E(e,t,n){vo.set(e,t);let s={};try{s=JSON.parse(localStorage.getItem(Ud)??"{}")||{}}catch{s={}}s[e]=t;const o=Object.keys(s);if(o.length>Vi)for(const i of o)i!==e&&!n.has(i)&&Object.keys(s).length>Vi&&delete s[i];try{localStorage.setItem(Ud,JSON.stringify(s))}catch{}}function xE(e){return vo.has(e)}function r1(e,t){!C0(e)||!Sf(t)||vo.get(e)!==t&&(vo.set(e,t),Vd.delete(e))}function ME(e){return vo.get(e)??null}const LE=Ef.map(e=>[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]);function l1(e,t){const n=t.data;for(let s=0;s<e.length;s++){const o=LE[e[s]&15];n[s*4]=o[0],n[s*4+1]=o[1],n[s*4+2]=o[2],n[s*4+3]=255}}function c1(e){const t=Vd.get(e);if(t)return t;const n=vo.get(e);if(!n)return null;const s=document.createElement("canvas");s.width=ms,s.height=ys;const o=s.getContext("2d");if(!o)return null;const i=o.createImageData(ms,ys);l1(I0(n),i),o.putImageData(i,0,0);const a=s.toDataURL("image/png");return Vd.set(e,a),a}function tl(e,t,n=!0){const s=R0[e]??"wood",o=`stroke="${cr}" stroke-width="3" stroke-linejoin="round"`;let i="";s==="wood"?i=`<rect x="6" y="18" width="88" height="70" rx="6" fill="#c9905a" ${o}/><path d="M10 24 H90 M10 82 H90" stroke="#a86f3e" stroke-width="1.6" opacity=".7"/>`:s==="plum"?i=`<rect x="6" y="18" width="88" height="70" rx="8" fill="#9a6fc0" ${o}/><rect x="9" y="21" width="82" height="64" rx="6" fill="none" stroke="#d7c0ef" stroke-width="1.6"/>`:s==="gold"?i=`<rect x="6" y="18" width="88" height="70" rx="5" fill="#f2c14e" ${o}/>${[14,32,50,68,86].map(l=>`<circle cx="${l}" cy="21.5" r="1.6" fill="#fff3b0"/><circle cx="${l}" cy="84.5" r="1.6" fill="#fff3b0"/>`).join("")}`:i=`<rect x="6" y="18" width="88" height="70" rx="7" fill="#ff6b6b" ${o}/>${["#ffa94d","#ffd43b","#69db7c","#4dabf7","#b388d6"].map((l,c)=>`<rect x="${7.5+c*1.1}" y="${19.5+c*1.1}" width="${85-c*2.2}" height="${67-c*2.2}" rx="6" fill="none" stroke="${l}" stroke-width="1.3"/>`).join("")}`;const a=t?`<image href="${t}" x="13" y="25" width="74" height="55.5" preserveAspectRatio="none"/>`:'<rect x="13" y="25" width="74" height="55.5" fill="#fff6ea"/><circle cx="40" cy="50" r="5" fill="#ffc8dd"/><circle cx="55" cy="56" r="4" fill="#bde0fe"/><circle cx="62" cy="44" r="3.5" fill="#fff3b0"/>',r=n?`<path d="M38 18 L50 7 L62 18" fill="none" stroke="${cr}" stroke-width="2"/><circle cx="50" cy="7" r="2.4" fill="${cr}"/>`:"";return`<svg viewBox="${n?"0 0 100 100":"4 16 92 74"}" xmlns="http://www.w3.org/2000/svg">${r}${i}${a}<rect x="13" y="25" width="74" height="55.5" fill="none" stroke="${cr}" stroke-width="1.6"/></svg>`}const zc=[2,4,8,14],xu=[24,34,46,60],Mu={brush:'<svg viewBox="0 0 40 40"><path d="M26 6 L34 14 L18 30 L10 22 Z" fill="#ffd43b" stroke="#5a3d5c" stroke-width="2.5" stroke-linejoin="round"/><path d="M10 22 L18 30 Q12 36 5 35 Q4 28 10 22 Z" fill="#ff6b6b" stroke="#5a3d5c" stroke-width="2.5" stroke-linejoin="round"/></svg>',fill:'<svg viewBox="0 0 40 40"><path d="M7 15 L21 9 L27 23 L13 29 Z" fill="#fff" stroke="#5a3d5c" stroke-width="2.5" stroke-linejoin="round"/><path d="M7 15 Q14 19 21 9" fill="#4dabf7" stroke="#5a3d5c" stroke-width="2"/><path d="M8 16 Q3 24 6 34 Q12 34 11 27 Q10 22 8 16 Z" fill="#4dabf7" stroke="#5a3d5c" stroke-width="2" stroke-linejoin="round"/><path d="M27 23 Q31 14 21 9" fill="none" stroke="#5a3d5c" stroke-width="2"/></svg>',eraser:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><rect x="6" y="13" width="28" height="14" rx="3" fill="#ffc8dd" stroke="#5a3d5c" stroke-width="2.5"/><rect x="6" y="13" width="10" height="14" rx="3" fill="#fff" stroke="#5a3d5c" stroke-width="2.5"/></g><path d="M7 35 h4 M15 36 h3 M22 35 h2" stroke="#5a3d5c" stroke-width="2.5" stroke-linecap="round"/></svg>',stamp:'<svg viewBox="0 0 40 40"><path d="M20 33 C13 27 5 22 8 14 C11 7 20 10 20 16 C20 10 29 7 32 14 C35 22 27 27 20 33 Z" fill="#ff8fab" stroke="#5a3d5c" stroke-width="2.5"/></svg>'},EE='<svg viewBox="0 0 40 40"><path d="M14 10 L6 18 L14 26" fill="none" stroke="#5a3d5c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 18 H24 Q34 18 34 26 Q34 33 24 33 H18" fill="none" stroke="#5a3d5c" stroke-width="3.5" stroke-linecap="round"/></svg>',Lu={brush:"Brush",fill:"Fill",eraser:"Eraser",stamp:"Stamps"},SE=["White","Plum","Red","Pink","Orange","Yellow","Green","Dark green","Blue","Dark blue","Lilac","Purple","Tan","Brown","Gray","Black"],TE={wood:"Wood",plum:"Plum",gold:"Gold",rainbow:"Rainbow"},PE='<svg viewBox="0 0 40 40"><rect x="7" y="7" width="26" height="26" rx="5" fill="#fff" stroke="#5a3d5c" stroke-width="2.5"/><path d="M12 28 L28 12" stroke="#ff8fab" stroke-width="3" stroke-linecap="round"/><circle cx="31" cy="9" r="3" fill="#ffd43b"/></svg>',Eu=new Map;async function Su(e,t){const n=e.name+":"+t,s=Eu.get(n);if(s)return s;const o=e.svg.includes("xmlns")?e.svg:e.svg.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" '),i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(o);try{await i.decode()}catch{return null}const a=document.createElement("canvas");a.width=t,a.height=t;const r=a.getContext("2d",{willReadFrequently:!0});if(!r)return null;r.drawImage(i,0,0,t,t);const l=r.getImageData(0,0,t,t).data,c=new Uint8Array(t*t);for(let f=0;f<c.length;f++)c[f]=l[f*4+3]<140?a1:kE(l[f*4],l[f*4+1],l[f*4+2],Ef);const d={w:t,h:t,px:c};return Eu.set(n,d),d}let Si=null;function AE(e){if(Si)return;const t=new wE;let n="brush",s=2,o=1,i=0,a=0;const r=document.createElement("div");r.className="studio",r.setAttribute("role","dialog"),r.setAttribute("aria-label","Art Studio"),r.innerHTML=`<div class="stuCard">
    <div class="stuHead"><h2>Art Studio</h2><button type="button" class="stuX" aria-label="Close">✕</button></div>
    <div class="stuBody">
      <div class="stuPaper"><canvas width="${ms}" height="${ys}" aria-label="Drawing paper"></canvas></div>
      <div class="stuSide">
        <div class="stuTools">${Object.keys(Mu).map($=>`<button type="button" class="stuTool" data-tool="${$}" aria-label="${Lu[$]}" aria-pressed="false">${Mu[$]}<span>${Lu[$]}</span></button>`).join("")}
          <button type="button" class="stuTool stuUndo" aria-label="Undo">${EE}<span>Undo</span></button><button type="button" class="stuTool stuClear" aria-label="Clear">${PE}<span>Clear</span></button></div>
        <div class="stuGroup stuSizeGroup"><b>Size</b><div class="stuRow stuSizes">${zc.map(($,M)=>`<button type="button" class="stuSize" data-size="${M}" aria-label="Size ${M+1}" aria-pressed="false"><i style="width:${8+$*2}px;height:${8+$*2}px"></i></button>`).join("")}</div></div>
        <div class="stuGroup stuColorGroup"><b>Colors</b><div class="stuColors">${Ef.map(($,M)=>`<button type="button" class="stuColor" data-color="${M}" aria-label="${SE[M]??"Color "+(M+1)}" aria-pressed="false" style="background:${$}"></button>`).join("")}</div></div>
        <div class="stuGroup stuStampGroup"><b>Stamps</b><div class="stuStamps">${e.stamps.map(($,M)=>`<button type="button" class="stuStamp" data-stamp="${M}" aria-label="${$.name}" aria-pressed="false">${$.svg}</button>`).join("")}</div></div>
        <div class="stuGroup stuFrameGroup"><b>Frame</b><div class="stuRow stuFrames">${R0.map(($,M)=>`<button type="button" class="stuFrame" data-frame="${M}" aria-label="${TE[$]??$} frame" aria-pressed="false">${tl(M,null,!1)}</button>`).join("")}</div></div>
        <button type="button" class="stuHang">Hang it up!</button>
      </div>
    </div></div>
    <div class="stuAsk hidden" role="alertdialog" aria-label="Start over?"><div class="stuAskCard"><p>Start a new picture?</p><div class="stuAskRow"><button type="button" class="stuAskNo" aria-label="Keep my picture">Keep it</button><button type="button" class="stuAskYes" aria-label="Yes, clear it">Clear it</button></div></div></div>`,document.body.appendChild(r),Si=r;const l=r.querySelector("canvas"),c=l.getContext("2d"),d=c.createImageData(ms,ys),f=()=>{l1(t.px,d),c.putImageData(d,0,0)},h=()=>{r.querySelectorAll(".stuTool[data-tool]").forEach($=>$.classList.toggle("on",$.dataset.tool===n)),r.querySelectorAll(".stuSize").forEach($=>$.classList.toggle("on",Number($.dataset.size)===o)),r.querySelectorAll(".stuColor").forEach($=>$.classList.toggle("on",Number($.dataset.color)===s)),r.querySelectorAll(".stuStamp").forEach($=>$.classList.toggle("on",Number($.dataset.stamp)===i)),r.querySelectorAll(".stuFrame").forEach($=>$.classList.toggle("on",Number($.dataset.frame)===a)),r.querySelectorAll("[aria-pressed]").forEach($=>$.setAttribute("aria-pressed",String($.classList.contains("on")))),r.classList.toggle("stamping",n==="stamp"),t.canUndo()!==u&&g(),r.querySelector(".stuUndo").disabled=!t.canUndo()};let u=!1,y=0;function g(){u=t.canUndo(),clearTimeout(y),y=window.setTimeout(()=>{if(!Si)return;const $=t.canUndo()?l.toDataURL():null;r.querySelectorAll(".stuFrame").forEach(M=>{M.innerHTML=tl(Number(M.dataset.frame),$,!1)})},60)}const v=r.querySelector(".stuAsk");f(),h();const w=()=>{r.remove(),Si=null,e.onClose?.()};r.addEventListener("click",$=>{const M=$.target.closest("button");if(M){if(e.sfx?.click(),M.classList.contains("stuX")){w();return}if(M.classList.contains("stuAskNo")){v.classList.add("hidden");return}if(M.classList.contains("stuAskYes")){v.classList.add("hidden"),t.checkpoint(),t.apply({k:"clear"}),f(),h(),g();return}if(M.dataset.tool)n=M.dataset.tool;else if(M.dataset.size)o=Number(M.dataset.size);else if(M.dataset.color)s=Number(M.dataset.color),(n==="eraser"||n==="stamp")&&(n="brush");else if(M.dataset.stamp)i=Number(M.dataset.stamp),n="stamp";else if(M.dataset.frame)a=Number(M.dataset.frame);else if(M.classList.contains("stuUndo"))t.undoStep()&&(f(),g());else if(M.classList.contains("stuClear"))v.classList.remove("hidden"),v.querySelector(".stuAskNo").focus();else if(M.classList.contains("stuHang")){const z=t.save();w(),e.onSave(z,a);return}h()}});let m=-1,b=null;const _=$=>{const M=l.getBoundingClientRect();return{x:($.clientX-M.left)*ms/M.width,y:($.clientY-M.top)*ys/M.height}};l.addEventListener("pointerdown",$=>{if($.preventDefault(),m!==-1)return;const M=_($);if(n==="fill"){t.checkpoint(),t.apply({k:"fill",x:M.x,y:M.y,c:s}),f(),h(),g(),e.sfx?.pop?.();return}if(n==="stamp"){const z=e.stamps[i];if(!z)return;Su(z,xu[o]).then(V=>{!V||!Si||(t.checkpoint(),t.apply({k:"stamp",mask:V,x:M.x,y:M.y}),f(),h(),g(),e.sfx?.pop?.())});return}m=$.pointerId;try{l.setPointerCapture($.pointerId)}catch{}t.checkpoint(),b=M,t.apply({k:"line",x0:M.x,y0:M.y,x1:M.x,y1:M.y,r:zc[o],c:n==="eraser"?0:s}),f()}),l.addEventListener("pointermove",$=>{if($.pointerId!==m||!b)return;const M=typeof $.getCoalescedEvents=="function"?$.getCoalescedEvents():[];for(const z of M.length?M:[$]){const V=_(z);t.apply({k:"line",x0:b.x,y0:b.y,x1:V.x,y1:V.y,r:zc[o],c:n==="eraser"?0:s}),b=V}f()});const P=$=>{$.pointerId===m&&(m=-1,b=null,h(),g())};l.addEventListener("pointerup",P),l.addEventListener("pointercancel",P),e.stamps.slice(0,3).forEach($=>void Su($,xu[1]))}function RE(e){const t=document.createElement("div");t.className="paintZoom",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Painting"),t.innerHTML=`<div class="pzInner">${e}</div>`,t.addEventListener("pointerup",()=>t.remove()),document.body.appendChild(t)}const Do=[{name:"Pink",fill:"#ff7eb3",ink:"#9d174d"},{name:"Lilac",fill:"#c9b3ff",ink:"#5f3dc4"},{name:"Aqua",fill:"#66d9e8",ink:"#0b7285"},{name:"Gold",fill:"#ffd43b",ink:"#e67700"}],Mt="#5a3d5c",Dc=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Tu=e=>typeof e=="number"?e:{skip:10,rev:11,d2:12,wild:13,w4:14}[e]??0,Pu=e=>typeof e.v=="number"?String(e.v):e.v==="skip"?"✕":e.v==="rev"?"↻":e.v==="d2"?"+2":e.v==="w4"?"+4":"♛",CE=e=>e.v==="skip"?"Nope":e.v==="rev"?"Flip":e.v==="d2"?"+2":e.v==="wild"||e.v==="w4"?"Crown":"",to=(e,t,n=1,s="#ffd43b")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -6 L1.4 -1.4 L6 -1 L1.6 1.4 L3 6 L0 3 L-3 6 L-1.6 1.4 L-6 -1 L-1.4 -1.4 Z" fill="${s}" stroke="${Mt}" stroke-width="1" stroke-linejoin="round"/>`,Lr=(e,t,n=1)=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 1.2 C-2.2 -1.6 -5.2 -0.6 -3.6 2.2 C-2.4 4 0 5.2 0 5.2 C0 5.2 2.4 4 3.6 2.2 C5.2 -0.6 2.2 -1.6 0 1.2 Z" fill="#ff4d94" stroke="${Mt}" stroke-width="1"/>`;function IE(e){return e.v==="wild"||e.v==="w4"?`<g transform="translate(14 28)">
      <path d="M4 26 L10 8 L18 16 L24 2 L30 16 L38 8 L44 26 Z" fill="#ffd43b" stroke="${Mt}" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="4" y="26" width="40" height="8" rx="2" fill="#ffd43b" stroke="${Mt}" stroke-width="2.2"/>
      <circle cx="10" cy="8" r="2.4" fill="#ff7eb3"/><circle cx="24" cy="3" r="2.4" fill="#66d9e8"/><circle cx="38" cy="8" r="2.4" fill="#d0bfff"/>
      ${to(-2,0,.7)}${to(46,4,.65,"#fff")}${to(22,-4,.55,"#ff7eb3")}
    </g>${e.v==="w4"?`<text x="35" y="78" text-anchor="middle" font-size="16" font-weight="900" fill="${Mt}" font-family="Nunito, ui-rounded, system-ui, sans-serif">+4</text>`:""}`:e.v==="d2"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff" stroke="${Mt}" stroke-width="2.4"/>
      ${Lr(14,8,1.35)}${Lr(32,8,1.35)}
      <path d="M12 26 Q23 34 34 26" fill="none" stroke="${Mt}" stroke-width="2.4" stroke-linecap="round"/>
      ${Lr(40,22,.8)}
    </g>`:e.v==="rev"?`<g fill="none" stroke="${Mt}" stroke-width="3.2" stroke-linecap="round">
      <path d="M16 40 C42 22 54 52 34 60 C16 68 12 46 30 40"/>
      <path d="M14 38 L22 30 L24 42" stroke-linejoin="round"/>
    </g>${to(48,28,.85)}${to(20,62,.6,"#ff7eb3")}${to(50,58,.55,"#66d9e8")}`:e.v==="skip"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff6d8" stroke="${Mt}" stroke-width="2.4"/>
      <rect x="8" y="12" width="14" height="9" rx="3" fill="#2b1430"/><rect x="24" y="12" width="14" height="9" rx="3" fill="#2b1430"/>
      <path d="M22 16.5 H24 M5 14 H2 M41 14 H44" stroke="${Mt}" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 27 Q23 32 34 27" fill="none" stroke="${Mt}" stroke-width="2.2" stroke-linecap="round"/>
    </g>`:""}function Qd(e){const t=e.c===4,n=t?{fill:"#fff8ee",ink:Mt}:Do[e.c]??Do[0],s=typeof e.v=="number",o=CE(e),i=t?'<rect x="2" y="2" width="66" height="96" rx="13" fill="#fff8ee" stroke="#ff7eb3" stroke-width="4"/><rect x="5" y="5" width="60" height="90" rx="11" fill="none" stroke="#d0bfff" stroke-width="2"/><rect x="7.5" y="7.5" width="55" height="85" rx="9" fill="none" stroke="#66d9e8" stroke-width="1.6"/><rect x="9.5" y="9.5" width="51" height="81" rx="8" fill="none" stroke="#ffd43b" stroke-width="1.6"/>':`<rect x="2" y="2" width="66" height="96" rx="13" fill="${n.fill}" stroke="${Mt}" stroke-width="3"/><rect x="6" y="6" width="58" height="88" rx="10" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>`,a='<ellipse cx="24" cy="20" rx="16" ry="8" fill="#fff" opacity=".38"/>',r=`fill="${n.ink}" stroke="#fff" stroke-width="3" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif"`,l=`<text x="8" y="16" font-size="13" font-weight="900" ${r}>${Pu(e)}</text>`+(s?`<text x="62" y="94" font-size="13" font-weight="900" text-anchor="end" ${r}>${Pu(e)}</text>`:""),c=s?`<text x="35" y="68" text-anchor="middle" font-size="48" font-weight="900" fill="${n.ink}" stroke="#fff" stroke-width="6" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${e.v}</text>`:`${IE(e)}${o?`<text x="35" y="92" text-anchor="middle" font-size="12" font-weight="900" ${r}>${o}</text>`:""}`;return`<svg viewBox="0 0 70 100">${i}${a}${l}${c}</svg>`}const OE=[[18,28],[40,28],[29,46],[18,64],[40,64],[29,78]].map(([e,t])=>Lr(e,t,.9)).join(""),BE=`<svg viewBox="0 0 70 100"><rect x="2" y="2" width="66" height="96" rx="13" fill="#ff4d94" stroke="${Mt}" stroke-width="3"/>
  <rect x="7" y="7" width="56" height="86" rx="10" fill="none" stroke="#ffd43b" stroke-width="3"/>
  <rect x="11" y="11" width="48" height="78" rx="8" fill="#ff7eb3"/>
  ${OE}
  <circle cx="35" cy="50" r="14" fill="#fff6fb" stroke="${Mt}" stroke-width="2.4"/>
  ${to(35,50,1.15,"#ffd43b")}
</svg>`,d1=(e,t)=>{if(t.turn<0||t.drawn!=null&&e.id!==t.drawn)return!1;const n=t.top;return e.c===4||e.c===t.color||e.v===n.v&&n.c!==4};let Nd=null,Bt=null,Io=-1,Au=-1;function Ru(e,t){Nd=e;const n=t.table,s=n.view;if(!s||!s.top){e.innerHTML="";return}n.tb!==Au&&(Bt=null,Io=-1,Au=n.tb);const o=n.you,i=o!==null&&Array.isArray(s.hand)?s.hand.slice():[];Bt!==null&&!i.some(m=>m.id===Bt)&&(Bt=null);const a=s.ev;let r=null;if(a&&a.n!==Io&&Io>=0&&a.k==="play"&&a.card){const m=e.querySelector(`[data-card="${a.card.id}"]`)||e.querySelector(`[data-p="${a.p}"]`);m&&(r=m.getBoundingClientRect())}const c=n.phase==="play"&&s.turn>=0,d=c&&o!==null&&s.turn===o,f=o!==null&&i.length<=2&&i.length>0&&!s.slay?.[o]&&d,h=d&&s.drawn==null&&n.phase==="play",u=d&&s.drawn!=null&&n.phase==="play",y=i.sort((m,b)=>m.c-b.c||Tu(m.v)-Tu(b.v)),g=c?n.players[s.turn]:"",v=c?d?"Your turn!":`${Dc(t.name(g))}'s turn`:"",w=Do[s.color]??Do[0];if(e.innerHTML=`<div class="slayFelt">
    ${v?`<div class="whose ${d?"yours":""}" id="whoseTurn">${v}<span class="slayDir" aria-hidden="true">${s.dir===1?"→":"←"}</span></div>`:""}
    <div class="slayOpps">${n.players.map((m,b)=>b===o?"":`<div class="slayOpp ${s.turn===b?"isTurn":""}" data-p="${b}" data-count="${s.counts?.[b]??0}"><span class="chipFace">${t.face(m)}</span><b>${Dc(t.name(m))}</b><span class="cnt">${s.counts?.[b]??0}</span>${t.away(m)?'<i class="awayBadge">away</i>':""}${s.slay?.[b]?"<em>SLAY!</em>":""}</div>`).join("")}</div>
    <div class="slayPile">
      <button type="button" id="slayDeck" class="slayDeck" ${h?"":"disabled"} aria-label="Draw a card">${BE}<span>${s.deck??0}</span></button>
      <div id="slayDiscard" class="slayDiscard" data-top="${s.top.id}">${Qd(s.top)}</div>
      <div class="nowColor" data-color="${s.color}" style="background:${w.fill}" aria-label="${w.name}"></div>
    </div>
    ${o===null?'<p class="watching">You are watching</p>':""}
    ${Bt!==null?`<div id="crownPick" class="crownPick"><p>Pick a color for your Crown!</p><div class="crownRow">${Do.map((m,b)=>`<button type="button" data-color="${b}" aria-label="${m.name}" style="background:${m.fill}"><span>${m.name}</span></button>`).join("")}</div></div>`:""}
    <div id="slayHand" class="slayHand ${d?"isTurn":""}">${y.map(m=>{const b=d&&n.phase==="play"&&d1(m,s),_=b?"can":d?"dim":"wait",P=typeof m.v=="number"?Do[m.c].name+" "+m.v:m.v==="wild"?"Crown":m.v==="w4"?"Crown plus 4":m.v==="d2"?"plus 2":m.v==="rev"?"Flip":"Nope";return`<button type="button" class="slayCard ${_} ${m.id===s.drawn?"justDrew":""} ${m.id===Bt?"picked":""}" data-card="${m.id}" data-c="${m.c}" data-v="${m.v}" aria-label="${Dc(P)}" ${b?"":"disabled"}>${Qd(m)}</button>`}).join("")}</div>
    ${c&&o!==null?`<button type="button" id="slayCall" class="slayCall ${f?"ready":""}" ${f?"":"disabled"}>SLAY!</button>`:""}
    <button type="button" id="slayPass" class="slayPass ${u?"":"hidden"}" ${u?"":"disabled"}>Pass</button>
  </div>`,a&&a.n!==Io){const m=Io;if(Io=a.n,m>=0){if(a.k==="play"&&a.card){const b=e.querySelector("#slayDiscard");b&&zE(r,a.card,b.getBoundingClientRect()),a.card.v==="skip"?t.toast("Nope!"):a.card.v==="rev"?t.toast("Flip!"):a.card.v==="d2"?t.toast("+2!"):a.card.v==="w4"&&t.toast("Crown +4!"),t.sfx.swish()}a.vdrew&&t.toast("Forgot to say SLAY! Draw 2"),a.k==="slay"&&t.sfx.sparkle()}}}function zE(e,t,n){const s=document.createElement("div");s.className="flyCard",s.innerHTML=Qd(t);const o=e?.width||70,i=e?.height||100;Object.assign(s.style,{left:(e?.left??innerWidth/2)+"px",top:(e?.top??80)+"px",width:o+"px",height:i+"px"}),document.body.appendChild(s),requestAnimationFrame(()=>{s.style.left=n.left+"px",s.style.top=n.top+"px",s.style.width=Math.max(n.width,70)+"px",s.style.height=Math.max(n.height,96)+"px"}),setTimeout(()=>s.remove(),560)}const DE={id:"slay",render:Ru,handle(e,t){const n=t.table.view,s=t.table.you;if(!n||t.table.phase!=="play"||s===null)return!1;const o=n.hand??[];if(e.closest("#slayCall"))return o.length<=2&&o.length>0&&!n.slay?.[s]&&(t.move({k:"slay"}),t.sfx.sparkle()),!0;if(e.closest("#slayDeck"))return n.turn===s&&n.drawn==null&&(Bt=null,t.move({k:"draw"}),t.sfx.click()),!0;if(e.closest("#slayPass"))return n.turn===s&&n.drawn!=null&&(Bt=null,t.move({k:"pass"}),t.sfx.click()),!0;const i=e.closest("#crownPick [data-color]");if(i&&Bt!==null)return t.move({k:"play",id:Bt,color:+i.dataset.color}),Bt=null,t.sfx.sparkle(),!0;const a=e.closest("#slayHand [data-card]");if(!a||a.hasAttribute("disabled"))return!!a;const r=+a.dataset.card,l=o.find(c=>c.id===r);return!l||n.turn!==s||!d1(l,n)||(l.c===4?(Bt=r,t.sfx.pop(),Nd&&Ru(Nd,t)):(Bt=null,t.move({k:"play",id:r}),t.sfx.click())),!0}},f1="#5a3d5c",Cu=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),HE=`<svg viewBox="0 0 48 48"><path d="M24 42 C8 30 2 22 7 13 C11 6 20 8 24 16 C28 8 37 6 41 13 C46 22 40 30 24 42 Z" fill="#ff4d94" stroke="${f1}" stroke-width="3" stroke-linejoin="round"/><path d="M16 16 Q20 12 22 18" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>`,WE=`<svg viewBox="0 0 48 48"><path d="M24 3 L29 17 H44 L32 26 L37 42 L24 33 L11 42 L16 26 L4 17 H19 Z" fill="#66d9e8" stroke="${f1}" stroke-width="3" stroke-linejoin="round"/><path d="M24 12 L26 18 H22 Z" fill="#fff" opacity=".8"/></svg>`,VE={id:"four",render(e,t){const n=t.table,s=n.view;if(!s||!Array.isArray(s.b)){e.innerHTML="";return}const o=n.you,i=o!==null&&s.turn===o&&n.phase==="play",a=new Set((s.line??[]).map(([g,v])=>g+":"+v)),r=s.last;let l="";for(let g=0;g<7;g++){const v=s.b[g];let w="";for(let b=5;b>=0;b--){const _=b<v.length?v[b]:null,P=a.has(g+":"+b)?" hot":"",$=r&&r.col===g&&r.row===b?" just":"";w+=`<span class="fourCell${_===0?" heart":_===1?" star":""}${P}${$}">${_===0?HE:_===1?WE:""}</span>`}const m=i&&v.length<6;l+=`<button type="button" class="fourCol" data-col="${g}" ${m?"":"disabled"} aria-label="Drop in column ${g+1}">${w}<span class="dropHint">${m?"▼":""}</span></button>`}const c=n.phase==="play"&&s.turn>=0,d=c?n.players[s.turn]:"",f=c?i?"Your turn!":`${Cu(t.name(d))}'s turn`:"",h=o===0?"You are <b>pink hearts</b>":o===1?"You are <b>aqua stars</b>":"Pink hearts and aqua stars",u=g=>g===0?"♥":"★",y=n.players.map((g,v)=>`<div class="playerChip ${s.turn===v?"isTurn":""}"><span class="chipFace">${t.face(g)}</span><b>${Cu(t.name(g))} ${u(v)}</b>${t.away(g)?'<i class="awayBadge">away</i>':""}</div>`).join("");e.innerHTML=`<div class="fourPlay">
      ${f?`<div class="whose ${i?"yours":""}" id="whoseTurn">${f}</div>`:""}
      <div class="fourChips">${y}</div>
      <p class="fourLegend">${h}</p>
      <div class="fourBoard" id="fourBoard">${l}</div>
    </div>`},handle(e,t){const n=e.closest(".fourCol");if(!n)return!1;const s=t.table.view,o=t.table.you;if(n.hasAttribute("disabled")||!s||o===null||s.turn!==o||t.table.phase!=="play")return!0;const i=+n.dataset.col;return!Number.isInteger(i)||s.b[i].length>=6||(t.move({col:i}),t.sfx.click()),!0}},Iu={slay:DE,four:VE},dr=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),UE={notHere:"Come into the clubhouse first!",taken:"Someone is sitting there!",playing:"You are already in this game!",playingElsewhere:"Finish your other game first!",notHost:"Waiting for the host…",needMore:"Play with friends on your street",tooMany:"That table is full!",notPlaying:"The game has not started!",notPlayer:"Sit down to play!",illegal:"You can't play that!",notAway:"She is still here!",tooSoon:"Give her a moment!",notSeated:"You are not at this table!",noMove:"No move to play!"};function QE(e){const t=document.getElementById("tableOverlay");let n=null,s="",o=0;const i=w=>w.away==null?0:w.away+Math.max(0,Date.now()-(w.receivedAt??Date.now())),a=()=>{o&&(clearInterval(o),o=0)},r=w=>{const m=!!w&&w.phase==="play"&&w.away!=null&&n!==null;m&&!o&&(o=window.setInterval(()=>f(),1e3)),m||a()},l=()=>e.hood(),c=()=>{const w=l();return!w||n===null?null:w.tables.get(n)??null},d=w=>{const m=l();return{table:w,me:m.pid,name:b=>m.players.get(b)?.nickname??"friend",face:b=>{const _=m.players.get(b)?.look;return _?df(Et(_)):""},move:b=>m.tbl({op:"move",tb:w.tb,m:b}),away:b=>{if(b===m.pid)return!1;const _=m.players.get(b);if(_&&!_.online)return!0;const P=m.presence.get(b);return!P||P.where!=="gameroom"},toast:e.toast,sfx:e.sfx}};t.addEventListener("click",w=>{const m=w.target;if(m.closest("#tblBack")){u(),e.sfx.swish();return}if(m.closest("#tblLeave")){y();return}if(m.closest("#tblStart")){g();return}if(m.closest("#tblNudge")){v();return}const b=c();b&&Iu[b.game]?.handle(m,d(b))});function f(){const w=l(),m=c();if(!w||!m){t.classList.add("hidden"),t.innerHTML="",a();return}const b=B0[m.game],_=w.pid,P=m.seats.includes(_),$=m.seats.filter(Boolean).length,M=m.phase==="play"&&m.you!==null&&m.view&&m.view.turn===m.you,z=m.view?.winPid??null;let V="";if(m.phase==="over"){const I=z?w.players.get(z)?.nickname??"Friend":"";m.game==="slay"?V=z?z===_?"You slayed!":`${dr(I)} slayed!`:"It's a tie!":V=m.view?.draw||!z?"It's a tie!":z===_?"You got four!":`${dr(I)} got four!`;const B=m.tb+":"+m.seq;z===_&&s!==B&&(s=B,e.confetti(),e.sfx.sparkle())}const U=i(m),F=m.phase==="play"&&P&&U>=_b&&m.you!==null&&!!m.view&&m.view.turn!==m.you&&m.view.turn>=0,oe=m.phase!=="play"&&m.host===_&&$>=b.minPlayers&&$<=b.maxPlayers,we=P&&m.phase==="lobby"&&m.host!==_&&$>=b.minPlayers,Ke=P&&m.phase==="lobby"&&$<b.minPlayers;t.classList.remove("hidden"),t.dataset.tb=String(m.tb),t.dataset.phase=m.phase,t.dataset.game=m.game,t.dataset.you=m.you===null?"":String(m.you),t.innerHTML=`<div class="tblCard ${M?"yourTurn":""} game-${m.game}">
      <div class="tblTop"><h2>${dr(b.name)}</h2><div class="seatDots">${m.seats.map(I=>`<i class="${I?"on":""} ${I===_?"me":""}"></i>`).join("")}</div></div>
      ${V?`<div class="winWrap"><div class="winBanner" id="winBanner">${V}</div></div>`:""}
      <div id="tblStage"></div>
      <div class="tblBar">
        ${oe?'<button type="button" id="tblStart">Start</button>':""}
        ${we?'<p class="tblWait">Waiting for the host…</p>':""}
        ${F?'<button type="button" id="tblNudge">Play for her</button>':""}
        <button type="button" id="tblBack">Back to room</button>
        <button type="button" id="tblLeave">Leave table</button>
      </div>
      ${Ke?'<p class="tblWait" id="needFriend">Play with friends on your street</p>':""}
    </div>`;const Ie=t.querySelector("#tblStage");m.phase==="lobby"||!m.view?Ie.innerHTML=h(m,w,_):Iu[m.game]?.render(Ie,d(m)),r(m)}function h(w,m,b){return`<div class="lobby">${w.seats.map((_,P)=>`<div class="lobbySeat ${_?"filled":""} ${_===b?"me":""}">
      <span>${P+1}</span><b>${_?dr(m.players.get(_)?.nickname??"friend"):"Empty"}</b>
      ${_&&_===w.host?"<i>host</i>":""}${_===b?"<i>you</i>":""}
    </div>`).join("")}</div>`}function u(){n=null,a(),t.classList.add("hidden"),t.innerHTML=""}function y(){const w=l(),m=c();w&&m&&m.seats.includes(w.pid)&&w.tbl({op:"leave",tb:m.tb}),e.sfx.click(),u()}function g(){const w=l(),m=c();w&&m&&(w.tbl({op:"start",tb:m.tb}),e.sfx.sparkle())}function v(){const w=l(),m=c();w&&m&&(w.tbl({op:"nudge",tb:m.tb}),e.sfx.click())}return{open(w){n=w,f()},close:u,refresh:f,fail(w,m){e.toast(UE[m]||"Try that again!"),e.sfx.pop(),n===w&&f()},isOpen:()=>n}}const p1="/cozy-preview/assets/rug-zTS04c1f.webp",NE=Object.freeze(Object.defineProperty({__proto__:null,default:p1},Symbol.toStringTag,{value:"Module"})),h1="/cozy-preview/assets/pack~bean-bag-m3eBc9mA.webp",qE=Object.freeze(Object.defineProperty({__proto__:null,default:h1},Symbol.toStringTag,{value:"Module"})),u1="/cozy-preview/assets/pack~sv-bean-bag-TrtltuSt.webp",FE=Object.freeze(Object.defineProperty({__proto__:null,default:u1},Symbol.toStringTag,{value:"Module"})),jE=120,ZE=192,GE=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);let ae=null,vs=null,zn=null,Ou=!1;const g1=1200,Ds=()=>{const e=document.getElementById("gameroom"),t=e?.clientHeight||600,n=e?.clientWidth||1e3;return Math.min(t/ga,n/g1)},Er=()=>vs;function li(){const e=ae?.hood();if(!e)return null;for(const[t,n]of e.tables){const s=n.seats.indexOf(e.pid);if(s>=0){const o=Ia(Number(t))[s];return{tb:Number(t),seat:s,x:o.x,y:o.y}}}return null}function YE(){const e=ae?.hood();if(!e)return!1;for(const[t,n]of e.players)if(t!==e.pid&&n.online)return!0;return!1}function KE(e){if(ae=e,vs=QE({hood:e.hood,toast:e.toast,confetti:()=>fg(),sfx:e.sfx}),Ou)return vs;Ou=!0;const t=document.getElementById("grWorld");return t.addEventListener("click",JE),t.addEventListener("pointerdown",n=>{n.target.closest(".grChair, .grTable, .grDoor, .pet")&&n.stopPropagation()}),vs}function Jf(){if(!ae)return;const e=Ds(),t=document.getElementById("grWorld"),n=l=>l*e+"px";t.style.width=La*e+"px",t.style.height=ga*e+"px",t.style.setProperty("--sc",String(e));const s=document.getElementById("gameroom"),o=(s?.clientHeight||0)-6-ga*e,i=o>1?Math.round(o*.55):0,a=o>1?Math.ceil(o-i)+6:0;t.style.marginTop=i?i+"px":"";let r='<div class="sceneArtHost" id="grSceneArt"></div>'+D9();i&&(r+=`<div class="grExtWrap" style="top:${-i}px;height:${i}px">${mu("top",i/e)}</div>`),s&&(s.style.background=i?"linear-gradient(180deg, #ffe0f2 0 50%, #d27399 50%)":""),a&&(r+=`<div class="grExtWrap" style="top:100%;height:${a}px">${mu("bottom",a/e)}${sS(e,a,s?.clientWidth||0)}</div>`),r+=`<button class="grDoor" data-gr="map" aria-label="Back to the map" style="left:${n(78)};top:${n(268)};width:${n(86)};height:${n(170)}"></button>`,mo.forEach((l,c)=>{const d=l.seats>=6?560:l.seats>=4?440:340;r+=`<button class="grTable" data-tb="${c}" aria-label="${B0[l.game].name} table" style="left:${n(l.x-d/2)};top:${n(456)};width:${n(d)};height:${n(70)}"></button>`,Ia(c).forEach((f,h)=>{const u=76*e,y=72*e,g=Math.max(u,44),v=Math.max(y,44),w=(f.x-38)*e-(g-u)/2,m=(f.y-16)*e-(v-y)/2;r+=`<button class="grChair" data-tb="${c}" data-seat="${h}" aria-label="Empty chair" style="left:${w}px;top:${m}px;width:${g}px;height:${v}px"></button>`})}),r+='<div class="savatars" id="gavatars"></div>',t.innerHTML=r,bo(document.getElementById("grSceneArt"),"clubhouse",t),Xi()}function Xi(){if(!ae||ae.view()!=="gameroom")return;const e=document.getElementById("gavatars");if(!e)return;const t=Ds(),n=new Set;for(const i of XE()){n.add(i.key);let a=e.querySelector(`.savatar[data-pid="${i.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(i.mine?"mine":"other"),a.dataset.pid=i.key,e.appendChild(a),i.mine&&nS(a));const r=JSON.stringify(i.look)+i.name+(i.away?":away":"");if(a.dataset.look!==r){const h=a.querySelector(".bubble");a.innerHTML=`<div class="inner">${Et(i.look)}</div>${i.name?`<div class="nametag">${GE(i.name)}${i.away?'<i class="awayBadge">away</i>':""}</div>`:""}`,h&&a.appendChild(h),a.dataset.look=r}const l=(Ps[i.look.size]??1)*t*.95,c=jE*l,d=ZE*l,f=i.seated?i.y-8:i.y;Nl(a,i.x*t-c/2+"px",f*t-d+"px"),a.style.width=c+"px",a.style.height=d+"px",a.style.zIndex=String(100+Math.round(i.y)),a.classList.toggle("flipped",i.flip),a.classList.toggle("away",i.away),a.classList.toggle("seated",i.seated),Ra(a,i.look,i.mine)}e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),ae.refreshNear();const s=ae.hood();document.querySelectorAll("#grWorld .grChair").forEach(i=>{const a=s?.tables.get(+i.dataset.tb)?.seats[+i.dataset.seat];i.classList.toggle("taken",!!a);const r=a?s.players.get(a)?.nickname:"";i.setAttribute("aria-label",r?r+" is sitting":"Empty chair")});const o=document.getElementById("grSolo");o&&o.classList.toggle("hidden",YE())}function XE(){const e=[],t=ae.hood();if(t){const n=new Map;for(const[a,r]of t.tables)r.seats.forEach((l,c)=>{l&&n.set(l,Ia(Number(a))[c])});const s=[...t.presence.entries()],o=ae.myPres();o&&s.push([t.pid,o]);const i=new Set;for(const[a,r]of s){if(r.where!=="gameroom")continue;const l=t.players.get(a);if(!l)continue;i.add(a);const c=n.get(a);e.push({key:a,look:l.look,name:l.nickname,x:c?.x??r.x,y:c?.y??r.y,flip:r.flip,mine:a===t.pid,away:!1,seated:!!c})}for(const[a,r]of n){if(i.has(a))continue;const l=t.players.get(a);l&&e.push({key:a,look:l.look,name:l.nickname,x:r.x,y:r.y,flip:!1,mine:!1,away:!0,seated:!0})}}else{const n=ae.solo();if(n?.where==="gameroom"){const s=ae.soloLook();e.push({key:"solo",look:s.look,name:"",x:n.x,y:n.y,flip:n.flip,mine:!0,away:!1,seated:!1})}}return e}function JE(e){if(!ae||ae.view()!=="gameroom")return;const t=e.target,n=t.closest(".savatar");if(n){const c=ae.hood(),d=n.dataset.pid;if(c&&d){for(const[f,h]of c.tables)if(h.seats.includes(d)){vs?.open(Number(f));return}}return}if(t.closest('[data-gr="map"]')){ae.goMap();return}const s=t.closest(".grChair");if(s){eS(+s.dataset.tb,+s.dataset.seat);return}const o=t.closest(".grTable");if(o){if(!ae.hood()){m1();return}vs?.open(+o.dataset.tb),ae.sfx.click();return}if(t.closest(".pet")||li())return;const i=document.getElementById("grWorld").getBoundingClientRect(),a=Ds(),r=(e.clientX-i.left)/a,l=(e.clientY-i.top)/a;l<430||(zn={x:Math.max(60,Math.min(La-60,r)),y:Math.max(470,Math.min(590,l))})}function eS(e,t){if(!ae)return;const n=ae.hood();if(!n){m1();return}const s=n.tables.get(e)?.seats[t];if(s&&s!==n.pid){ae.toast((n.players.get(s)?.nickname??"Someone")+" is sitting there!"),ae.sfx.pop(),vs?.open(e);return}zn=null,n.tbl({op:"sit",tb:e,seat:t});const o=Ia(e)[t];ae.setPres({where:"gameroom",x:o.x,y:Math.max(470,Math.min(590,o.y)),flip:!1}),vs?.open(e),ae.sfx.click()}function m1(){if(!ae)return;const e=document.getElementById("grSolo");e&&(e.classList.remove("hidden"),e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),ae.toast("Play with friends on your street"),ae.sfx.pop()}function tS(e){if(!ae||ae.view()!=="gameroom"||!zn)return;if(li()){zn=null;return}const t=ae.hood()?ae.myPres():ae.solo();if(!t||t.where!=="gameroom"){zn=null;return}const n=zn.x-t.x,s=zn.y-t.y,o=Math.hypot(n,s);if(o<4){zn=null;return}const i=Math.min(o,300*e),a={where:"gameroom",x:t.x+n/o*i,y:t.y+s/o*i,flip:Math.abs(n)>2?n<0:t.flip};ae.setPres(a);const r=Ds(),l=document.getElementById("grScroll"),c=a.x*r-l.scrollLeft;(c<l.clientWidth*.22||c>l.clientWidth*.78)&&(l.scrollLeft=a.x*r-l.clientWidth/2)}function nS(e){e.addEventListener("pointerdown",t=>{if(!ae||li())return;const n=ae.hood()?ae.myPres():ae.solo();if(!n||n.where!=="gameroom")return;t.preventDefault(),t.stopPropagation(),zn=null;const s=Ds(),o=document.getElementById("grWorld"),i=document.getElementById("grScroll"),a=w=>{const m=o.getBoundingClientRect();return{x:(w.clientX-m.left)/s,y:(w.clientY-m.top)/s}},r=a(t),l={x:n.x-r.x,y:n.y-r.y};let c=t,d=0,f=n.x,h=!1;const u=w=>{const m=ae.hood()?ae.myPres():ae.solo();if(!m||m.where!=="gameroom")return;const b=a(w),_=Math.max(60,Math.min(La-60,b.x+l.x)),P=Math.max(470,Math.min(590,b.y+l.y));if(!h&&Math.hypot(_-m.x,P-m.y)<6)return;h=!0;const $=Math.abs(_-f)>3?_<f:m.flip;Math.abs(_-f)>3&&(f=_),ae.setPres({where:"gameroom",x:_,y:P,flip:$})},y=()=>{const w=i.getBoundingClientRect(),m=c.clientX<w.left+70?-12:c.clientX>w.right-70?12:0;m&&h&&(i.scrollLeft+=m,u(c)),d=requestAnimationFrame(y)};d=requestAnimationFrame(y),e.classList.add("lifted"),ae.sfx.pick();const g=w=>{w.pointerId===t.pointerId&&(c=w,u(w))},v=w=>{w.pointerId===t.pointerId&&(cancelAnimationFrame(d),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",v),e.classList.remove("lifted"),h&&ae.sfx.drop())};window.addEventListener("pointermove",g),window.addEventListener("pointerup",v)})}function sS(e,t,n){if(t<120)return"";const s=n?Math.min(mo[0].x*e,n/2):mo[0].x*e,o=Math.min(560*e*1.2,t*1.7),i=o*306/960,a=Math.max(8,(t-i)*.45),r=o*.26,l=r*.78,c=(d,f,h,u,y=!1)=>`<img class="grDecor" src="${d}" alt="" aria-hidden="true" draggable="false" style="left:${f}px;top:${h}px;width:${u}px${y?";transform:scaleX(-1)":""}">`;return`<div class="grDecor grRug" aria-hidden="true" style="left:${s-o/2}px;top:${a}px;width:${o}px;height:${i}px"><img src="${p1}" alt="" draggable="false" style="width:${o}px;margin-top:${-o*634/960}px"></div>`+c(h1,s-o/2-r*.35,a+i*.45-l*.6,r)+c(u1,s+o/2-r*.65,a+i*.45-l*.6,r*1.02,!0)}let Sr=!1;const Oi=tE(),ee=A0();ee.born&&typeof navigator<"u"&&!navigator.webdriver&&!ee.get().baby&&ee.dispatch({type:"baby/meet",now:Date.now()});let Te=ee;const y1=[],Bu=new WeakSet;function w1(e){Bu.has(e)||(Bu.add(e),e.subscribe((t,n)=>{Te===e&&y1.forEach(s=>s(t,n))}))}w1(ee);const S={get:()=>Te.get(),dispatch(e){Te.dispatch(e)},subscribe:e=>{y1.push(e)}},he=At,Ce=Wn,ko=390;let Y=1e3;const _o=()=>Math.max(0,he-Y),Oa=375,qd=(e,t)=>e.wall?Math.min(t,Oa):e.kind==="picnic-table"?Math.min(t,kg):t,b1=12,Hs=(e,t)=>{if(e.wall)return t;let n=Math.min(t,Ce-b1);return e.kind==="picnic-table"&&(n=Math.min(n,kg)),n},Yt=120,It=192,ep=[{id:"living",name:"Living Room",color:"#ff8fab"},{id:"bedroom",name:"Bedroom",color:"#b388d6"},{id:"kitchen",name:"Kitchen",color:"#5cc985"},{id:"salon",name:"Salon",color:"#f0a0d8"},{id:"nursery",name:"Nursery",color:"#9ad7f5"},{id:"bathroom",name:"Bathroom",color:"#7ec8d6"}],v1=e=>ep.find(t=>t.id===e)?.color??"#ccc",tp=Vx();_5(En,de);const As=[{id:"__people",name:"People",icon:"",kind:"people"},...["furniture","decor","plants","food","pets"].map((e,t)=>({id:e,name:e,icon:["armchair","balloon","flowers","donut","cat"][t],kind:"cat"}))];As.push({id:"secrets",name:"Secrets",icon:"egg:chloe-starlamp",kind:"cat"});for(const e of En)As.some(t=>t.kind==="cat"&&t.id===e.cat)||As.push({id:e.cat,name:e.cat,icon:e.kind,kind:"cat"});for(const e of En)e.pack&&!Sm(e)&&!As.some(t=>t.id==="pack:"+e.pack)&&As.push({id:"pack:"+e.pack,name:pg(e.pack),icon:e.kind,kind:"pack"});const Hc=e=>En.filter(t=>a7(t,e,S.get().currentRoom,sp==="all",Vl())),oS=["#ffd6e0","#d9ccff","#cdf3dc","#cfe8ff","#fff1b8","#ffe0c7","#ffffff","#f6c1ff"],iS=["#e8b98a","#f2d0a4","#c99366","#ffe7a8","#bfe3d0","#d6d6f5","#ffc8dd","#9fb4c7"],Ft={paint:'<svg viewBox="0 0 48 48"><path d="M10 30 L28 12 L36 20 L18 38 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M28 12 L34 6 L42 14 L36 20" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><circle cx="12" cy="40" r="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/></svg>',shirt:'<svg viewBox="0 0 48 48"><path d="M16 8 L6 16 L11 24 L15 21 V42 H33 V21 L37 24 L42 16 L32 8 Q24 14 16 8 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',soundOn:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 17 Q37 24 32 31 M36 12 Q45 24 36 36" fill="none" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ddd" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M33 19 L43 29 M43 19 L33 29" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',flip:'<svg viewBox="0 0 48 48"><path d="M24 6 V42" stroke="#5a3d5c" stroke-width="3" stroke-dasharray="4 4"/><path d="M18 12 L6 36 H18 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M30 12 L42 36 H30 Z" fill="#fff" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',front:'<svg viewBox="0 0 48 48"><rect x="6" y="6" width="22" height="22" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="18" y="18" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',back:'<svg viewBox="0 0 48 48"><rect x="18" y="18" width="24" height="24" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="6" y="6" width="22" height="22" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',trash:'<svg viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="28" rx="5" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3"/><rect x="8" y="9" width="32" height="7" rx="3.5" fill="#ffadad" stroke="#5a3d5c" stroke-width="3"/><path d="M20 21 V35 M28 21 V35" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',smaller:'<svg viewBox="0 0 48 48"><rect x="16" y="16" width="16" height="16" rx="4" fill="#bde0fe" stroke="#5a3d5c" stroke-width="3"/><path d="M8 24 H14 M34 24 H40" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',bigger:'<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M24 6 V11 M24 37 V42 M6 24 H11 M37 24 H42" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>'},aS='<svg viewBox="0 0 48 48"><circle cx="17" cy="18" r="8" fill="#ffd166" stroke="#5b3d5c" stroke-width="3"/><circle cx="32" cy="20" r="7" fill="#ff8fab" stroke="#5b3d5c" stroke-width="3"/><path d="M5 42 Q6 28 17 28 Q28 28 29 42 Z" fill="#8ecae6" stroke="#5b3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M24 42 Q25 30 32 30 Q42 30 43 42 Z" fill="#c9a0dc" stroke="#5b3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',rS='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 15 H37 M11 24 H37 M11 33 H37" fill="none" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',lS='<svg class="mailGlyph" viewBox="0 0 48 48" aria-hidden="true"><g transform="translate(0 2)"><rect x="6" y="14" width="36" height="24" rx="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/><path d="M6 16 L24 30 L42 16" fill="none" stroke="#5a3d5c" stroke-width="3"/><path d="M34 12 V6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M34 6 H44 L40 10 L44 14 H34 Z" fill="#ff6b6b" stroke="#5a3d5c" stroke-width="2"/></g></svg>',k1='<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#fff3b0" stroke="#5a3d5c" stroke-width="3"/><path d="M24 15 V33 M15 24 H33" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',zu='<svg viewBox="0 0 40 40" width="28" height="28"><path d="M12 36 L18 8 M28 36 L22 8 M20 30 V38" stroke="#a86f3e" stroke-width="3" stroke-linecap="round"/><rect x="8" y="8" width="24" height="18" rx="3" fill="#fff" stroke="#5a3d5c" stroke-width="2.5"/><circle cx="16" cy="16" r="3" fill="#ff8fab"/><path d="M12 24 L20 17 L28 24" fill="#69db7c" stroke="#5a3d5c" stroke-width="1.5" stroke-linejoin="round"/></svg>',cS=document.getElementById("app");cS.innerHTML=`
<div class="top">
  <div class="tabs" id="tabs"></div>
  <div class="minimap" id="minimap" aria-label="Room map"><div class="mmWall" id="mmWall"></div><div class="mmFloor" id="mmFloor"></div><div id="mmDots"></div><div class="mmView" id="mmView"></div></div>
  <div class="streetTitle" id="streetTitle">Our Neighborhood</div>
  <div class="tools">
    <button class="round hoodOnly" id="btnChat" aria-label="Talk">${Dt.chat}<span class="badge" id="chatBadge"></span></button>
    <button class="round homeBtn" id="btnHome" aria-label="Home">${Dt.home}</button>
    <button class="round barnOnly" id="btnLeavePark" aria-label="Go outside">${B4}</button>
    <button class="round rideOnly" id="btnHopOff" aria-label="Hop off the horse">${P9}</button>
    <button class="round mapBtn" id="btnMap" aria-label="Map">${cf}<span class="badge" id="mapBadge"></span></button>
    <button class="round" id="btnMenu" aria-label="Menu" aria-expanded="false">${rS}<span class="badge" id="menuBadge"></span></button>
  </div>
</div>
<div class="menuPop hidden" id="menuPop">
  <div class="menuCard" role="dialog" aria-label="Menu">
    <button type="button" class="close" id="menuClose" aria-label="Close">✕</button>
    <p class="menuGroup">My stuff</p>
    <button type="button" class="menuRow photoRow" id="btnPhoto" aria-label="Take a photo"><span class="mIco">📸</span><span class="mLabel">Take a photo</span></button>
    <button type="button" class="menuRow" id="btnPets" aria-label="Pets"><span class="mIco">${ig}</span><span class="mLabel">Pets</span></button>
    <button type="button" class="menuRow" id="btnDress" aria-label="Characters"><span class="mIco">${Ft.shirt}</span><span class="mLabel">Characters</span></button>
    <button type="button" class="menuRow" id="btnStudio" aria-label="Art Studio"><span class="mIco">${zu}</span><span class="mLabel">Art Studio</span></button>
    <button type="button" class="menuRow" id="btnPaint" aria-label="Colors"><span class="mIco">${Ft.paint}</span><span class="mLabel">Wall &amp; floor colors</span></button>
    <button type="button" class="menuRow" id="secrets" aria-label="Surprises, 0 of 5"><span class="mIco secGift">🎁</span><span class="mLabel"><span class="secWord">Surprises </span><span class="secCount">0/5</span></span></button>
    <p class="menuGroup houseGroup">House</p>
    <button type="button" class="menuRow lockRow" id="btnLock" aria-label="Lock my house"><span class="mIco" id="lockIco">${Dt.lockOff}</span><span class="mLabel" id="lockLabel">Lock my house</span></button>
    <button type="button" class="menuRow mailRow" id="btnMail" aria-label="Mailbox"><span class="mIco">${lS}</span><span class="mLabel">Mailbox</span><span class="menuNew" id="mailNew"></span></button>
    <!-- Day / Night / Auto. The clock stays on Auto until she taps. -->
    <div id="menuDaySlot" class="menuSlot" hidden></div>
    <p class="menuGroup streetGroup">Street</p>
    <button type="button" class="menuRow grownRow" id="btnParent" aria-label="Grown-ups"><span class="mIco">${Dt.shield}</span><span class="mLabel">Grown-ups</span></button>
    <button type="button" class="menuRow soloLeave" id="btnSolo" aria-label="Play in my own house"><span class="mIco">${Dt.solo}</span><span class="mLabel">Play in my own house</span></button>
    <button type="button" class="menuRow friendRow" id="btnHood" aria-label="Friends"><span class="mIco">${Dt.street}</span><span class="mLabel">Friends</span></button>
    <p class="menuGroup">Settings</p>
    <button type="button" class="menuRow" id="btnSound" aria-label="Sound"><span class="mIco" id="soundIco"></span><span class="mLabel">Sound</span></button>
  </div>
</div>
<div class="stageWrap" id="stageWrap">
  <div class="stage" id="stage">
    <div class="world" id="world">
      <div class="wall" id="wall"></div><div class="floor" id="floor"></div><div class="baseboard"></div>
      <div class="sceneArtHost" id="sceneArt"></div>
      <div class="scenery" id="scenery"></div>
      <div class="partyFx" id="partyFx" aria-hidden="true"><i class="pl pl1"></i><i class="pl pl2"></i><i class="pl pl3"></i><i class="sp s1"></i><i class="sp s2"></i><i class="sp s3"></i><i class="sp s4"></i><i class="sp s5"></i><i class="sp s6"></i><i class="sp s7"></i><i class="sp s8"></i></div>
      <div class="layer" id="layer"></div>
      <div class="artGrip hidden" id="artGrip" role="button" aria-label="Drag to make the painting bigger or smaller"><span class="artGripDot"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M11 29 L29 11" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><path d="M9 19 L9 31 L21 31 Z M31 21 L31 9 L19 9 Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg></span></div>
      <div class="toolbar hidden" id="toolbar">
        <button data-a="smaller" aria-label="Smaller">${Ft.smaller}</button><button data-a="bigger" aria-label="Bigger">${Ft.bigger}</button><button data-a="flip" aria-label="Flip">${Ft.flip}</button><button data-a="front" aria-label="Bring forward">${Ft.front}</button><button data-a="back" aria-label="Send back">${Ft.back}</button><button data-a="delete" class="danger" aria-label="Put away">${Ft.trash}</button>
      </div>
    </div>
    <button class="nudge left" id="nudgeL" aria-label="Look left"><svg viewBox="0 0 40 40"><path d="M24 10 L14 20 L24 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="nudge right" id="nudgeR" aria-label="Look right"><svg viewBox="0 0 40 40"><path d="M16 10 L26 20 L16 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </div>
  <button type="button" class="artFab" id="artFab" aria-label="Art Studio: paint a picture">${zu}<span>Paint</span></button>
  <div class="bin" id="bin">${Ft.trash}</div>
  <div class="houseTag" id="houseTag"></div>
</div>
<div class="drawer">
  <div class="drawerBar" id="drawerBar">
    <div class="modeDock" id="modeDock">
      <div class="modeToggle" id="modeToggle">
        <button type="button" id="modePlay" data-mode="play" aria-label="Play" aria-pressed="false"><span class="modeIco"></span><span class="modeWord">Play</span></button>
        <button type="button" id="modeDecorate" data-mode="decorate" aria-label="Decorate" aria-pressed="true"><span class="modeIco"></span><span class="modeWord">Decorate</span></button>
      </div>
    </div>
    <div class="drawerTop">
      <div class="rooms" id="roomFilter"></div>
      <div class="cats" id="cats"></div>
    </div>
    <div class="chipCue" id="chipCue" aria-hidden="true">›</div>
  </div>
  <div class="shelf" id="shelf"></div>
</div>
<div class="street park ranch hidden" id="ranch"><div class="streetScroll" id="ranchScroll"><div class="parkWorld ranchWorld" id="ranchWorld"></div></div></div>
<button class="basketChip hidden" id="basketChip" aria-label="My basket"></button>
<div class="street park hidden" id="park"><div class="streetScroll" id="parkScroll"><div class="parkWorld" id="parkWorld"></div></div></div>
<div class="street grRoom hidden" id="gameroom"><div class="streetScroll" id="grScroll"><div class="parkWorld grWorld" id="grWorld"></div></div><div id="grSolo" class="grSolo hidden">Play with friends on your street</div></div>
<div id="tableOverlay" class="tableOverlay hidden"></div>
<div class="street mapView hidden" id="street"><div class="mapSky">${gy}</div><div class="mapMeadow">${my}</div><button class="mailCue" id="mailCue" type="button">You've got mail!</button><div class="mapWorld" id="mapWorld"></div></div>
<div class="chatTray hidden" id="chatTray"></div>
<div class="sheet hidden" id="sheet"><div class="card" id="card"></div></div>
<div class="fx" id="fx"></div>
<div id="toastLane"></div>
<div class="phoneNote" id="phoneNote"><div class="card"><h2>Turn sideways</h2><p>Turn your phone sideways for more room to play!</p><button class="phoneOk" id="phoneOk" type="button">OK!</button></div></div>
<div class="elsewhere hidden" id="elsewhere"><div class="card"><h2>You're playing on another screen</h2><p>This screen can rest. Your house is safe.</p><button class="playHere" id="elsewhereGo" type="button">Tap to play here!</button></div></div>
<div id="skyMount"></div>`;const L=e=>document.getElementById(e);document.body.classList.add("is-preview"),document.body.insertAdjacentHTML("beforeend",'<div class="previewRibbon">PREVIEW</div>');const Z=L("stage"),np=L("world"),X=L("layer"),ne=L("toolbar"),Tr=L("bin");let Ne=null,ze=S.get().characters[0]?.id??null,zt="furniture",sp="",Fd="",dS=Date.now()%1e5;const nl=e=>`${e}-${Date.now().toString(36)}${(++dS).toString(36)}${Math.random().toString(36).slice(2,5)}`,yt="__me";let k=null,R="house",qe=!1,ue="",sl=new Map,_1=!1,$1=()=>{};const Se=Jv(L("modeToggle"),{ownHouse:()=>!k||!ue||ue===k.myHouseId(),onChange:()=>{_1&&(di.matches?Cs():Ws()),$1()}}),Pr=Fv({send:(e,t,n,s)=>k?.sendMail(e,t,n,s),read:(e,t)=>k?.readMail(e,t),drop:(e,t)=>k?.dropMail(e,t),houseOf:e=>[...k?.players.values()??[]].find(t=>t.pid===e)?.houseId??"",houseName:e=>k?.houses.get(e)?.meta.name??"My House",lettersOf:e=>k?.houses.get(e)?.confirmed.mailbox?.letters??[],mine:e=>!!k&&k.houses.get(e)?.meta.ownerId===k.pid,toast:j,openOwn:()=>{const e=k?.myHouseId();e&&_p(e)},freeType:()=>!k||N0(k.settings)});Se.sync(!0);const fs=new Map,ma={};let se=oi,qo=0;const x1=new Set,op=()=>!x1.has(S.get().currentRoom),ci=()=>{x1.add(S.get().currentRoom)};_1=!0;let ya=null;const Zl=()=>{cancelAnimationFrame(qo),ya=null},ei=e=>Math.max(0,Math.min(_o(),e));function Je(e){se=ei(e),ma[S.get().currentRoom]=se,np.style.transform=`translate3d(${-se}px,0,0)`,L("nudgeL").classList.toggle("off",se<=1),L("nudgeR").classList.toggle("off",se>=_o()-1);const t=L("mmView");t.style.left=se/he*100+"%",t.style.width=Y/he*100+"%",Ne&&J1(S.get()),Wa(),Ha(),Un(),U1(),za()}function Gl(e){cancelAnimationFrame(qo),e=ei(e),ya=e;const t=()=>{const n=e-se;if(Math.abs(n)<.5){Je(e),ya=null;return}Je(se+n*.18),qo=requestAnimationFrame(t)};qo=requestAnimationFrame(t)}const dt=()=>Z.getBoundingClientRect().width/Y,fS="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)",di=window.matchMedia(fS);function pS(){const e=di.matches;document.body.classList.toggle("phone",e),document.body.classList.toggle("phone-portrait",e&&window.matchMedia("(orientation: portrait)").matches);const t=L("stageWrap");for(const n of[L("nudgeL"),L("nudgeR")]){const s=e?t:Z;n.parentElement!==s&&s.appendChild(n)}}function M1(){const e=document.querySelector(".top");if(!e)return;const t=e.getBoundingClientRect(),n=document.body.classList.contains("phone")?t.bottom:t.height;document.documentElement.style.setProperty("--chrome-h",Math.ceil(n)+"px"),L1()}function L1(){const e=document.querySelector(".top");if(!e)return;const t=Math.ceil(e.getBoundingClientRect().bottom+16)+"px",n=document.getElementById("mailCue");n&&(n.style.top=t);const s=document.getElementById("toastLane");s&&(s.style.top=t)}function hS(){const e=document.documentElement,t=document.getElementById("app");if(!(document.body.classList.contains("phone")&&!document.body.classList.contains("phone-portrait"))){t.style.top="",t.style.height="",t.style.bottom="",e.style.removeProperty("--vvh"),e.style.removeProperty("--vvt");return}const s=window.visualViewport,o=Math.round(s?s.height:window.innerHeight),i=Math.round(s?s.offsetTop:0);e.style.setProperty("--vvh",o+"px"),e.style.setProperty("--vvt",i+"px"),t.style.top=i+"px",t.style.height=o+"px",t.style.bottom="auto"}function Ws(){pS(),hS(),M1();const e=L("stageWrap"),t=document.body.classList.contains("phone"),n=e.clientWidth,s=e.clientHeight,o=Math.max(1,s-ap());if(t?s>n*.85:s>n*.95){const r=n/Math.max(1,s);Y=Math.round(Math.max(480,Math.min(860,Ce*r)))}else if(t){const r=n/Math.max(1,o);Y=Math.round(Math.max(480,Math.min(he,Ce*r)))}else Y=1e3;Y=ip(Y),Z.style.width=Y+"px",Z.style.height=Ce+"px";const a=Math.min(n/Y,o/Ce);if(R1(a),Z.style.setProperty("--yard-sc",String(a||1)),t&&Z.style.setProperty("--fit",String(dt())),E1(),se>_o())Je(se);else{const r=L("mmView");r.style.left=se/he*100+"%",r.style.width=Y/he*100+"%"}ft(),!t&&R==="house"&&op()&&zp(),!t&&R==="house"&&Rs(!1),$S(),R==="ranch"&&requestAnimationFrame(rf),R==="gameroom"&&requestAnimationFrame(Y2),pi(),t&&R==="ranch"&&kP(),S1(),Sr&&Se.hint(),rc(),Un()}function E1(){const e=L("stageWrap"),t=document.body.classList.contains("phone")&&R==="house";for(const n of[L("nudgeL"),L("nudgeR")]){if(!t||n.parentElement!==e){n.style.marginTop="",n.style.left="",n.style.right="",n.style.top="";continue}const s=Z.getBoundingClientRect(),o=e.getBoundingClientRect(),i=(s.top+s.bottom)/2-o.top;n.style.top=i+"px",n.style.marginTop=-n.offsetHeight/2+"px",n.style.left="",n.style.right=""}}function S1(){document.body.classList.remove("secrets-chrome"),L("secrets")?.classList.remove("compact")}function ft(e=0){if(!document.body.classList.contains("phone"))return;if(R==="house"){T1();return}const t=R==="park"?"parkScroll":R==="ranch"?"ranchScroll":R==="gameroom"?"grScroll":"";if(!t)return;const n=document.getElementById(t);if(!n||n.clientWidth<20){e<8&&requestAnimationFrame(()=>ft(e+1));return}const s=n.querySelector(".savatar.mine")??n.querySelector(".savatar");if(!s){e<8&&requestAnimationFrame(()=>ft(e+1));return}gS(n,[s,...s.querySelectorAll(".nametag")])&&e<8?requestAnimationFrame(()=>ft(e+1)):uS()}function uS(){lc()&&(R==="gameroom"&&G2([...document.querySelectorAll(".neonSignArt")],document.getElementById("grScroll")),R==="ranch"&&!qe&&(K2(),Dp()))}function gS(e,t){const s=e.getBoundingClientRect(),o=Math.min(s.right,window.innerWidth)-12,i=Math.max(s.left,0)+12;let a=0,r=0;for(const c of t){const d=c.getBoundingClientRect();d.width<2||d.height<2||(a=Math.max(a,d.right-o),r=Math.max(r,i-d.left))}if(a<=1&&r<=1)return!1;const l=e.scrollLeft;return a>1&&r>1?e.scrollLeft-=r:a>1?e.scrollLeft+=a:e.scrollLeft-=r,Math.abs(e.scrollLeft-l)>.5}function T1(){Rs(!1)}function Du(e){let t=0;for(const n of e){const s=de[n.kind];!s||s.wall||(t=Math.max(t,s.w*Ge(n)))}return t}function mS(){if(R!=="house"||!Se.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return 0;const e=S.get().rooms,t=S.get().currentRoom;let n=Du(e[t]?.items??[]);if(t==="backyard")for(const o of Object.keys(e))o!=="backyard"&&(n=Math.max(n,Du(e[o].items)));if(n<40)return 0;const s=document.body.classList.contains("phone-portrait")?1:.55;return Math.min(he,Math.ceil(n/s))}function ip(e){const t=mS();return t&&e<t?t:e}function yS(){const e=ip(Y);if(e<=Y+.5)return;Y=e,Z.style.width=Y+"px";const t=L("stageWrap"),n=Math.max(1,t.clientHeight-ap()),s=Math.min(t.clientWidth/Y,n/Ce);if(R1(s),document.body.classList.contains("phone")&&Z.style.setProperty("--fit",String(s)),se>_o())Je(se);else{const o=L("mmView");o.style.left=se/he*100+"%",o.style.width=Y/he*100+"%"}op()&&R==="house"&&!document.body.classList.contains("phone")&&zp()}let wa=null,ba=!1;function wS(){if(R!=="house"||!Se.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return null;const e=S.get();if(e.currentRoom==="backyard")return null;let t=null,n=wa;if(k&&Te!==ee){const a=ye();a&&a.where==="house"&&a.room===e.currentRoom&&(t=wt(e.currentRoom,Kt(k.pid,a),a).x,n||(n=Kt(k.pid,a)?.item??null))}if(t===null){const a=e.characters.find(r=>r.id===ze&&r.room===e.currentRoom)??e.characters.find(r=>r.room===e.currentRoom);if(!a)return null;t=wt(e.currentRoom,vt(a),a).x,n||(n=vt(a)?.item??null)}if(!n)return null;const s=e.rooms[e.currentRoom].items.find(a=>a.id===n),o=s&&de[s.kind];if(!s||!o)return null;const i=o.w*Ge(s)/2;return{minX:Math.min(t-100,s.x-i),maxX:Math.max(t+100,s.x+i)}}function Rs(e){if(R!=="house"||xo)return;if(S.get().currentRoom==="backyard"){Math.abs(se-$d)>.5&&Je($d),Un();return}if(ba)return;const t=wS();if(t){const v=t.maxX-t.minX;let w=se;v+20*2>Y?w=t.minX-20:(t.minX-20<w&&(w=t.minX-20),t.maxX+20>w+Y&&(w=t.maxX+20-Y)),w=Math.max(0,Math.min(_o(),w)),Math.abs(w-se)>.5&&Je(w),Un();return}const n=document.querySelector("#layer .char.avatar.mine")??document.querySelector("#layer .char");if(!n)return;const s=dt()||1,o=Z.getBoundingClientRect(),i=8;let a=Math.min(o.right,window.innerWidth)-i,r=Math.max(o.left,0)+i;for(const g of["nudgeL","nudgeR"]){const v=L(g);if(!v||v.classList.contains("off")||v.offsetParent===null)continue;const w=v.getBoundingClientRect();w.width<2||w.height<2||(g==="nudgeL"?r=Math.max(r,w.right+6):a=Math.min(a,w.left-6))}a-r<48&&(a=Math.min(o.right,window.innerWidth)-i,r=Math.max(o.left,0)+i);const l=[n,...n.querySelectorAll(".nametag")];let c=0,d=0,f=1/0,h=-1/0;for(const g of l){const v=g.getBoundingClientRect();v.width<2||v.height<2||(c=Math.max(c,v.right-a),d=Math.max(d,r-v.left),f=Math.min(f,v.left),h=Math.max(h,v.right))}if(document.body.classList.contains("phone-portrait")&&f<1/0){const g=(f+h)/2-(r+a)/2;if(Math.abs(g)>3){Je(se+g/s),Un();return}}const u=bS(n),y=W7({cam:se,maxCam:_o(),kidX:u,overflowL:d,overflowR:c,scale:s,nudgeX:e});Math.abs(y.cam-se)>.5&&Je(y.cam),e&&Math.abs(y.kidX-u)>.5&&vS(n,y.kidX),Un()}function bS(e){if(e.dataset.pid&&k){const t=e.dataset.pid===k.pid?ye():k.presence.get(e.dataset.pid);if(t&&t.where==="house")return t.x}return S.get().characters.find(t=>t.id===e.dataset.cid)?.x??0}function vS(e,t){if(e.dataset.pid&&k&&e.classList.contains("mine")){const o=ye();if(!o||o.where!=="house")return;nt({...o,x:t}),bt();return}const n=e.dataset.cid;if(!n)return;const s=S.get().characters.find(o=>o.id===n);s&&S.dispatch({type:"char/move",id:n,room:S.get().currentRoom,x:t,y:s.y})}const kS={living:"Living",bedroom:"Bed",kitchen:"Kitchen",salon:"Salon",nursery:"Nursery",bathroom:"Bath"};function P1(){const e=R==="house",t=document.body.classList.contains("phone-portrait"),n=e&&!Se.isPlay(),s=e&&Y+1<he,o=e&&(t?n:n||s);document.body.classList.toggle("show-minimap",o)}const _S='<svg class="tabIco" width="14" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M1.6 6 L8 1.4 L14.4 6 V10.8 H1.6 Z" fill="currentColor" stroke="#5b3d5c" stroke-width="1.4" stroke-linejoin="round"/><rect x="6.6" y="7" width="2.8" height="3.8" rx=".8" fill="#fff6ea" stroke="#5b3d5c" stroke-width="1"/></svg>';function A1(){return document.body.classList.contains("phone")}function $S(){const e=A1()?"c":"f";P1(),e!==Fd&&(Fd=e,W1(S.get()))}function Yl(){di.matches?Cs():Ws()}window.addEventListener("resize",Yl);window.addEventListener("resize",()=>requestAnimationFrame(dp));L("tabs").addEventListener("scroll",dp,{passive:!0});di.addEventListener("change",Yl);if(typeof ResizeObserver<"u"){let e="";new ResizeObserver(()=>{const t=L("stageWrap"),n=t.clientWidth+"x"+t.clientHeight;n!==e&&(e=n,Yl())}).observe(L("stageWrap"))}let Hu="",Wc=!1;function Wu(){const e=L("stageWrap"),t=document.querySelector(".top"),n=document.querySelector(".tools"),s=r=>r?r.clientWidth+"x"+r.clientHeight:"0",o=window.visualViewport,i=o?Math.round(o.offsetTop)+"x"+Math.round(o.height)+"x"+Math.round(o.width):"",a=document.body.classList.contains("baby-card")?"c":"";return i+" "+s(e)+" "+s(t)+" "+s(n)+a}function ap(){const e=document.body;if(!e.classList.contains("baby-card")||!e.classList.contains("phone")||e.classList.contains("phone-portrait"))return 0;const t=document.querySelector(".babyCare"),n=t&&!t.hidden?t.getBoundingClientRect().height:0;return Math.ceil(8+(n>8?n:72)+8)}function R1(e){const t=ap(),n=L("stageWrap").clientHeight;Z.style.left="",t>0?Z.style.top=t+Math.max(0,n-t)/2+"px":Z.style.top="",Z.style.transform=`translate(-50%,-50%) scale(${e})`}function C1(){const e=L("modeToggle"),t=document.querySelector(".tools"),n=document.getElementById("modeDock"),s=document.querySelector(".drawerTop"),o=document.getElementById("roomFilter");if(!e||!t||!n||!s||!o)return!1;const i=document.body.classList.contains("phone"),a=i&&!document.body.classList.contains("phone-portrait"),r=!i&&window.matchMedia("(min-width: 900px)").matches,l=a?t:i||r?n:s;n.hidden=!(i&&!a)&&!r,n.classList.toggle("wideDock",r);let c=!1;const d=r?n:s;return o.parentElement!==d&&(r?n.appendChild(o):s.insertBefore(o,s.firstChild),c=!0),(e.parentElement!==l||r&&n.firstChild!==e)&&(a?t.insertBefore(e,t.firstChild):i||r?n.insertBefore(e,n.firstChild):s.insertBefore(e,s.firstChild),c=!0),c}function xS(){if(S.get().currentRoom==="backyard"||!document.body.classList.contains("phone-portrait")||!document.body.classList.contains("mode-play")||R!=="house")return;const e=L("stageWrap"),t=e.clientWidth,n=e.clientHeight;if(t<20||n<20||!(n>t*.85))return;const s=Math.min(he,ip(Math.max(280,Math.min(860,Math.round(Ce*t/n)))));if(Math.abs(s-Y)<2)return;Y=s,Z.style.width=Y+"px",Z.style.height=Ce+"px";const o=Math.min(t/Y,n/Ce);if(Z.style.transform=`translate(-50%,-50%) scale(${o})`,Z.style.setProperty("--fit",String(dt())),se>_o())Je(se);else{const i=L("mmView");i.style.left=se/he*100+"%",i.style.width=Y/he*100+"%"}E1(),P1()}function Cs(){if(Wc||!di.matches)return;const e=C1(),t=Wu()+(document.body.classList.contains("mode-play")?"p":"d");if(!(!e&&t===Hu)){Wc=!0;try{Ws(),xS(),ft(),Hu=Wu()+(document.body.classList.contains("mode-play")?"p":"d")}finally{Wc=!1}}}if(typeof ResizeObserver<"u"){const e=new ResizeObserver(()=>Cs()),t=document.querySelector(".top");t&&e.observe(t),e.observe(L("stageWrap"));const n=document.querySelector(".tools");n&&e.observe(n)}window.visualViewport&&(window.visualViewport.addEventListener("resize",()=>Cs()),window.visualViewport.addEventListener("scroll",()=>Cs()));Z.addEventListener("scroll",()=>{Z.scrollLeft=0,Z.scrollTop=0});const Qe=(e,t)=>{const n=Z.getBoundingClientRect();return{x:(e-n.left)/n.width*Y+se,y:(t-n.top)/n.height*Ce}},jd=(e,t)=>{const n=Z.getBoundingClientRect();return e>n.left&&e<n.right&&t>n.top&&t<n.bottom},Vu=(e,t)=>{const n=Tr.getBoundingClientRect();return e>n.left-20&&e<n.right+20&&t>n.top-20&&t<n.bottom+20},fi=e=>Ps[e.size]??1,_n=new Map;function rp(){return!k||Te===ee?!0:k.houses.get(ue)?.meta.ownerId===k.pid}function Ba(e){const t=de[e.kind];return!t||!Jn(e.kind)?null:{id:e.id,kind:e.kind,x:e.x,footY:Hs(t,e.y),flip:!!e.flip,scale:Ge(e),w:t.w,h:Xe(t)}}function wt(e,t,n){if(!t)return n;const s=S.get().rooms[e]?.items.find(a=>a.id===t.item),o=s&&Ba(s);if(!o)return n;const i=_0(o).find(a=>a.n===t.n);return i?{x:i.x,y:i.y}:n}function $o(e,t,n=!1){const s=S.get(),o=[];for(const i of s.characters){if(i.id===e||i.room!==s.currentRoom)continue;const a=vt(i);a&&o.push({item:a.item,n:a.n})}if(!n){const i=jw(s.baby,s.currentRoom);i&&o.push(i)}if(k&&R==="house"){const i=(r,l)=>{if(r===t||l.where!=="house"||l.houseId!==ue||l.room!==s.currentRoom)return;const c=Kt(r,l);c&&o.push({item:c.item,n:c.n})};k.presence.forEach((r,l)=>i(l,r));const a=ye();a&&k.pid!==t&&i(k.pid,a)}return o}function I1(e,t){t?_n.set(e,t):_n.delete(e)}function Ji(e,t,n,s,o){const a=!k||Te===ee||!!k?.speaksSit;a?_n.delete("c:"+e):I1("c:"+e,o),a?S.dispatch({type:"char/move",id:e,room:t,x:n,y:s,seat:o}):S.dispatch({type:"char/move",id:e,room:t,x:n,y:s})}function va(e,t,n,s,o){const{seat:i,...a}=e;if(k&&!k.speaksSit){I1("p:"+k.pid,o?{item:o.id,pose:o.pose,n:o.n}:null),nt({...a,x:t,y:n,flip:s});return}k&&_n.delete("p:"+k.pid),nt(o?{...a,x:t,y:n,flip:s,seat:o}:{...a,x:t,y:n,flip:s})}function vt(e){return e.seat?e.seat:_n.get("c:"+e.id)??null}function Kt(e,t){return t.seat?{item:t.seat.id,pose:t.seat.pose,n:t.seat.n}:_n.get("p:"+e)??null}function ol(e,t){const n=S.get(),s=document.elementsFromPoint(e,t),o=new Set;for(let i=0;i<s.length;i++){const a=s[i];if(!a||!a.closest)continue;const r=a.closest(".item");if(!r)continue;const l=r.dataset.id;if(!l||o.has(l))continue;o.add(l);const c=n.rooms[n.currentRoom].items.find(d=>d.id===l);if(c&&Jn(c.kind))return c}return null}function O1(e,t){const n=S.get(),s=document.elementsFromPoint(e,t),o=new Set;for(let i=0;i<s.length;i++){const a=s[i];if(!a||!a.closest)continue;const r=a.closest(".item");if(!r)continue;const l=r.dataset.id;if(!l||o.has(l))continue;o.add(l);const c=n.rooms[n.currentRoom].items.find(d=>d.id===l);if(c)return c}return null}function MS(e){const t=[];for(const n of["left","right"]){const s=e.held[n];s&&fn(s.kind)&&t.push({hand:n,kind:s.kind})}return t}function lp(e,t,n,s){const o=S.get(),i=o.characters.find(r=>r.id===e);if(!i)return;const a=Bl({releaseX:t,releaseY:n,hit:s,items:o.rooms[o.currentRoom].items,occupied:$o(e),held:MS(i),seatPiece:r=>Ba(r)});for(const r of a.releases)S.dispatch({type:"char/release",id:e,hand:r.hand,x:r.x,y:r.y});Ji(e,o.currentRoom,a.x,a.y,a.seat)}function cp(e,t,n){const s=ye();if(!s||!k||s.where!=="house")return;const o=S.get(),i=Bl({releaseX:e,releaseY:t,hit:n,items:o.rooms[o.currentRoom].items,occupied:$o(void 0,k.pid),held:[],seatPiece:r=>Ba(r)}),a=i.seat?{id:i.seat.item,pose:i.seat.pose,n:i.seat.n}:null;va(s,i.x,i.y,s.flip,a)}function LS(e){const t=Rl(e);if(t)return"k-bed k-bed-"+t.clip;const n=e.toLowerCase();return/sofa|couch|loveseat/.test(n)?"k-sofa":/bench/.test(n)?"k-bench":/chair|stool|rocker/.test(n)?"k-chair":""}function ES(){const e=S.get(),t=new Map,n=(s,o)=>{const i=t.get(s);t.set(s,i===void 0?o:Math.max(i,o))};for(const s of e.characters){const o=s.room===e.currentRoom?vt(s):null;o&&n(o.item,o.n)}if(k&&R==="house"){const s=(i,a)=>{const r=a.where==="house"&&a.houseId===ue&&a.room===e.currentRoom?Kt(i,a):null;r&&n(r.item,r.n)};k.presence.forEach((i,a)=>s(a,i));const o=ye();o&&s(k.pid,o)}return t}function SS(e,t){const n=fi(e),s=Ql(e,Wl(vt(e)?.pose))[t];let o=s.x;e.flip&&(o=100-o);const i=wt(e.room,vt(e),e);return{x:i.x+(o-50)/100*Yt*n,y:i.y-It*n+s.y/160*It*n}}function B1(e){const t=S.get();let n=null;for(const s of t.characters){if(s.room!==t.currentRoom)continue;const o=fi(s),i=wt(s.room,vt(s),s),a=Math.abs(e.x-i.x)<Yt*o/2+25&&e.y>i.y-It*o-25&&e.y<i.y+20;for(const r of["left","right"]){if(s.held[r])continue;const l=SS(s,r),c=Math.hypot(e.x-l.x,e.y-l.y);(a||c<75)&&(!n||c<n.d)&&(n={c:s,hand:r,d:c})}}return n}const z1=["none","radial-gradient(circle, rgba(255,255,255,.55) 7px, transparent 8px)","repeating-linear-gradient(90deg, rgba(255,255,255,.4) 0 26px, transparent 26px 52px)","linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%), linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%)"],D1="repeating-linear-gradient(90deg, rgba(90,61,92,.08) 0 3px, transparent 3px 125px), linear-gradient(rgba(0,0,0,.06), transparent 50%)",Zd=e=>`url('${e.replace(/'/g,"%27")}')`;function H1(e){const t=e.rooms[e.currentRoom],n=L("wall"),s=L("floor"),o=t.wallTile?Rh[t.wallTile]:void 0;n.style.backgroundColor=t.wallpaper,o?(n.style.backgroundImage=Zd(o.url),n.style.backgroundSize="220px auto",n.style.backgroundPosition="0 0"):(n.style.backgroundImage=z1[t.pattern]??"none",n.style.backgroundSize=t.pattern===1?"44px 44px":t.pattern===3?"60px 60px":"auto",n.style.backgroundPosition=t.pattern===3?"0 0, 30px 30px":"0 0");const i=t.floorTile?Rh[t.floorTile]:void 0;s.style.backgroundColor=t.floor,s.style.backgroundImage=i?`${Zd(i.url)}, linear-gradient(rgba(0,0,0,.06), transparent 50%)`:D1,s.style.backgroundSize=i?"180px auto, auto":"auto",L("mmWall").style.background=t.wallpaper,L("mmFloor").style.background=t.floor,bo(L("sceneArt"),R==="house"?r9(e.currentRoom,t):null,Z),G1(e)}function il(e){const n=e.rooms[e.currentRoom].items.filter(o=>de[o.kind]).map(o=>{const i=de[o.kind];return`<i style="left:${o.x/he*100}%;top:${(Hs(i,o.y)-Xe(i)*Ge(o)/2)/Ce*100}%"></i>`}).join(""),s=e.characters.filter(o=>o.room===e.currentRoom).map(o=>{const i=wt(e.currentRoom,vt(o),o);return`<b style="left:${i.x/he*100}%;top:${(i.y-90)/Ce*100}%;background:${o.shirt}"></b>`}).join("");L("mmDots").innerHTML=n+s}function W1(e){const t=A1();Fd=t?"c":"f",document.body.classList.toggle("tabs-compact",t),L("tabs").innerHTML=ep.map(n=>{const s=t?kS[n.id]??n.name:n.name;return`<button class="tab ${e.currentRoom===n.id?"on":""}" data-room="${n.id}" style="--c:${n.color}" aria-label="${n.name}">${t?_S:""}${s}</button>`}).join(""),requestAnimationFrame(()=>{TS(),dp()})}function dp(){const e=document.getElementById("tabs");if(!e)return;const t=e.scrollWidth-e.clientWidth;e.classList.toggle("fadeL",t>2&&e.scrollLeft>2),e.classList.toggle("fadeR",t>2&&e.scrollLeft<t-2)}function TS(){const e=document.getElementById("tabs"),t=e?.querySelector(".tab.on");if(!e||!t||e.scrollWidth<=e.clientWidth+2)return;const n=t.offsetLeft-e.offsetLeft,s=n+t.offsetWidth;n<e.scrollLeft+24?e.scrollLeft=Math.max(0,n-24):s>e.scrollLeft+e.clientWidth-24&&(e.scrollLeft=s-e.clientWidth+24)}function Vs(e,t,n,s,o){Nl(e,(t-s/2)/he*100+"%",(n-o)/Ce*100+"%"),e.style.width=s/he*100+"%",e.style.height=o/Ce*100+"%"}const PS=10;function AS(e){const n=[e,...e.querySelectorAll("svg, img, canvas, .inner")].map(r=>r.getBoundingClientRect()).filter(r=>r.width>2&&r.height>2);if(!n.length)return e.getBoundingClientRect();const s=Math.min(...n.map(r=>r.left)),o=Math.max(...n.map(r=>r.right)),i=Math.min(...n.map(r=>r.top)),a=Math.max(...n.map(r=>r.bottom));return{left:s,right:o,top:i,bottom:a}}let fr=0,Gd=!1,pr=null;function RS(){return[...document.querySelectorAll("#layer .char.pose-sit, #layer .char.pose-lie, #layer .avatar.pose-sit, #layer .avatar.pose-lie")].map(e=>{const t=e.getBoundingClientRect();return`${t.left.toFixed(1)},${t.right.toFixed(1)}`}).join("|")}function CS(){const e=[...document.querySelectorAll("#layer .char img, #layer .avatar img")].filter(t=>!t.complete);return e.length?Promise.all(e.map(t=>new Promise(n=>{t.addEventListener("load",()=>n(),{once:!0}),t.addEventListener("error",()=>n(),{once:!0})}))).then(()=>{}):Promise.resolve()}function V1(e){e.querySelectorAll("img").forEach(t=>{t.complete||t.addEventListener("load",()=>za(),{once:!0})})}function za(){const e=++fr,t=()=>{if(e!==fr)return;let s="",o=0,i=0;const a=()=>{if(e!==fr)return;U1();const r=RS();o++,r===s?i++:(i=0,s=r),!(i>=2)&&(o>40||requestAnimationFrame(a))};requestAnimationFrame(a)};(document.fonts?.ready??Promise.resolve()).then(()=>CS()).then(()=>{e===fr&&requestAnimationFrame(()=>requestAnimationFrame(t))})}function IS(){if(pr)return;const e=()=>{Gd||za()};document.fonts?.ready?.then(e),window.addEventListener("resize",e),window.addEventListener("load",e),pr=new ResizeObserver(()=>e());try{pr.observe(Z),X&&pr.observe(X)}catch{}}function U1(){Gd=!0;try{OS()}finally{Gd=!1}}function OS(){const e=S.get(),t=e.currentRoom;for(const n of e.characters){if(n.room!==t)continue;const s=Wt.get(n.id),o=vt(n),i=o?.pose??null;if(!s||!i)continue;const a=fi(n);al(s,wt(t,o,n),Yt*a,It*a)}if(k&&Te!==ee&&R==="house"){const n=[...k.presence.entries()],s=ye();s&&n.push([k.pid,s]);for(const[o,i]of n){if(i.where!=="house"||i.houseId!==ue||i.room!==t)continue;const a=fs.get(o),r=Kt(o,i),l=r?.pose??null,c=k.players.get(o);if(!a||!l||!c)continue;const d=Ps[c.look.size]??1;al(a,wt(t,r,i),Yt*d,It*d)}}}function al(e,t,n,s){const o=Z.getBoundingClientRect();if(o.width<20)return;const i=dt()||1,a=PS,r=o.left+(0-se)*i,l=o.left+(he-se)*i,c=o.top,d=o.bottom;let f=t.x,h=t.y;for(let u=0;u<3;u++){const y=AS(e);let g=0,v=0;if(y.left<r+a&&(g+=r+a-y.left),y.right>l-a&&(g-=y.right-(l-a)),y.top<c+a&&(v+=c+a-y.top),y.bottom>d-a&&(v-=y.bottom-(d-a)),!g&&!v)return;f+=g/i,h+=v/i,Vs(e,f,h,n,s)}}function fp(e,t){let n=e.w*t,s=Xe(e)*t;if((e.kind==="kennel"||e.kind==="cat-tower")&&document.body.classList.contains("phone")){const o=Math.max(.2,dt()||1),i=44*he/(Math.max(1,Y)*o),a=44/o;n<i&&(n=i),s<a&&(s=a)}return{w:n,h:s}}function BS(e,t,n){const s=c1(t),o=t+":"+n+":"+(s?1:0);e.dataset.sig!==o&&(e.dataset.sig=o,e.innerHTML=`<div class="inner">${tl(n,s)}</div>`,s||zS(t))}const Vc=new Set;let Uc=0;const Qc=new Set;function zS(e){!k||Te===ee||Vc.has(e)||xE(e)||(Vc.add(e),Qc.add(e),Uc||(Uc=window.setTimeout(()=>{Uc=0;const t=[...Qc];Qc.clear(),k&&ue&&k.getArt(ue,t),t.forEach(n=>setTimeout(()=>Vc.delete(n),8e3))},60)))}function Q1(e){const t=new Set;for(const n of Object.values(e.rooms))for(const s of n?.items??[])s.art&&t.add(s.art);return t}const DS=[...["Heart","Star","Flower","Kitty","Rainbow","Sparkle"].map((e,t)=>({name:e,svg:Bo[t]})),...["dog","bunny","fish","flowers","balloon","cake"].filter(e=>de[e]).map(e=>({name:de[e].name,svg:`<svg viewBox="${de[e].vb??"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg">${de[e].svg}</svg>`}))];function N1(){if(R!=="house"){j("The Art Studio is at home. Pop inside to paint!");return}if(!ht()){j("Paint at home, or in a friend's open house!");return}AE({stamps:DS,sfx:C,onSave:(e,t)=>VS(e,t)})}const Uu=new Set;function HS(e){const t=L("artGrip"),n=Ne?e.rooms[e.currentRoom].items.find(l=>l.id===Ne):void 0,s=n&&X.querySelector(`.item[data-id="${n.id}"]`);if(Se.isPlay()||!n||n.kind!=="picture"||!n.art||!s||!ht()){t.classList.add("hidden");return}const o=s.getBoundingClientRect(),i=Math.min(o.width,o.height)>=120?14:0,a=Qe(o.right-i,o.bottom-i),r=Z.getBoundingClientRect().width/Math.max(1,Y)||1;t.style.left=a.x/he*100+"%",t.style.top=a.y/Ce*100+"%",t.style.width=t.style.height=64/r+"px",(t.classList.contains("hidden")||t.dataset.for!==n.id)&&(t.dataset.for=n.id,Uu.has(n.id)||(Uu.add(n.id),t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse"))),t.classList.remove("hidden")}L("artGrip").addEventListener("pointerdown",e=>{if(e.preventDefault(),e.stopPropagation(),!ht()||!Ne)return;const t=S.get().currentRoom,n=Ne,s=S.get().rooms[t].items.find(v=>v.id===n),o=X.querySelector(`.item[data-id="${n}"]`);if(!s||!o)return;const i=o.getBoundingClientRect(),a=i.left+i.width/2,r=i.top+i.height/2,l=i.width/2,c=i.height/2,d=Math.max(1,Math.hypot(l,c)),f=l/d,h=c/d,u=(v,w)=>(v-a)*f+(w-r)*h,y=Math.max(20,u(e.clientX,e.clientY)),g=Gn(s.size);L("artGrip").classList.remove("pulse"),L("artGrip").classList.add("active"),ne.classList.add("hidden"),ts(e,{edgeScroll:!1,onMove(v){const w=g*Math.max(0,u(v.clientX,v.clientY))/y;let m=Qn[0];for(const _ of Qn)Math.abs(_-w)<Math.abs(m-w)&&(m=_);const b=S.get().rooms[t].items.find(_=>_.id===n);b&&Gn(b.size)!==m&&(S.dispatch({type:"item/size",room:t,id:n,size:m}),C.click())},onUp(){L("artGrip").classList.remove("active"),j1(t,n),Rt(S.get())}})});L("artFab").addEventListener("click",()=>{C.click(),N1()});function q1(){L("artFab").classList.toggle("hidden",R!=="house"||!ht())}const Ar=new Map;function F1(e){const t=Z.getBoundingClientRect(),n=L("nudgeL").getBoundingClientRect(),s=L("nudgeR").getBoundingClientRect(),o=(c,d)=>c.width>0&&!d.classList.contains("off")&&getComputedStyle(d).visibility!=="hidden"&&getComputedStyle(d).display!=="none"&&+getComputedStyle(d).opacity>.05,i=o(n,L("nudgeL"))?n.right+10:t.left+6,a=o(s,L("nudgeR"))?s.left-10:t.right-6;let r=Qe(i,0).x+e,l=Qe(a,0).x-e;if(r=Math.max(e,r),l=Math.min(he-e,l),l<r){const c=(r+l)/2;r=l=Math.max(e,Math.min(he-e,c))}return{lo:r,hi:l}}function WS(){const e=de.picture,t=e.w/2,n=Xe(e),s=Math.min(Oa,200+n/2),o=s-n;let{lo:i,hi:a}=F1(t);const r=[];for(const f of document.querySelectorAll("#layer > :not(.char), #scenery > *")){const h=f.getBoundingClientRect();if(!h.width)continue;const u=Qe(h.left,h.top),y=Qe(h.right,h.bottom),g=f.classList.contains("yardDoor")?50:1;r.push({l:u.x,r:y.x,t:u.y,b:y.y,k:g})}const l=se+Y/2;i=Math.min(Math.max(i,l-Y*.3),a),a=Math.max(Math.min(a,l+Y*.3),i);let c=Math.max(i,Math.min(a,l)),d=1/0;for(let f=i;f<=a+.1;f+=Math.max(4,(a-i)/60)){let h=0;for(const y of r)h+=y.k*Math.max(0,Math.min(f+t+12,y.r)-Math.max(f-t-12,y.l))*Math.max(0,Math.min(s+12,y.b)-Math.max(o-12,y.t));const u=h*10+Math.abs(f-l);u<d&&(d=u,c=f)}return c}function j1(e,t){const n=S.get().rooms[e].items.find(h=>h.id===t);if(!n||n.kind!=="picture"||!n.art)return;const s=de.picture,o=Ge(n),i=s.w*o/2,a=Xe(s)*o,r=Z.getBoundingClientRect(),l=Qe(r.left,0).x,c=Qe(r.right,0).x;let d=n.x,f=Math.min(Oa,Math.max(a+16,n.y));if(d+i>l&&d-i<c){const{lo:h,hi:u}=F1(i);d=Math.max(h,Math.min(u,d));const y=X.querySelector(".yardDoor"),g=y?.getBoundingClientRect();if(g&&g.width){const v=Qe(g.left,g.top),w=Qe(g.right,g.bottom);if(d+i>v.x-8&&d-i<w.x+8&&f>v.y&&f-a<w.y){const m=v.x-8-i,b=w.x+8+i,_=$=>$>=h-.5&&$<=u+.5,P=[m,b].filter(_).sort(($,M)=>Math.abs($-d)-Math.abs(M-d));P.length&&(d=P[0])}}}(Math.abs(d-n.x)>.5||Math.abs(f-n.y)>.5)&&S.dispatch({type:"item/move",room:e,id:t,x:d,y:f})}function VS(e,t){const n="a"+Date.now().toString(36)+Math.random().toString(36).slice(2,8),s=S.get(),o=s.currentRoom;r1(n,e);const i=WS();if(k&&Te!==ee&&ue){Ar.set(n,{houseId:ue,room:o,frame:t,x:i}),k.saveArt(ue,n,e);return}$E(n,e,Q1(s)),Z1(o,n,t,i)}function Z1(e,t,n,s){const o=de.picture,i={id:nl("picture"),kind:"picture",x:s,y:Math.min(Oa,200+Xe(o)/2),flip:!1,z:0,scale:1,art:t,...n?{frame:n}:{}};S.dispatch({type:"item/add",room:e,item:i}),Ne=i.id,Rt(S.get());const a=X.querySelector(`.item[data-id="${i.id}"]`);et(a),Da(a),C.sparkle()}function Rt(e){const t=e.rooms[e.currentRoom],n=new Set;for(const s of t.items){const o=de[s.kind];if(!o)continue;n.add(s.id);let i=X.querySelector(`.item[data-id="${s.id}"]`);i||(i=document.createElement("div"),i.className="item",i.dataset.id=s.id,i.innerHTML=`<div class="inner">${Qt(o,!0)}</div>`,X.appendChild(i),i.addEventListener("pointerdown",l=>sT(i,l))),i.dataset.kind=s.kind,s.art&&BS(i,s.art,s.frame??0),i.classList.toggle("is-light",lE(s.kind,!!o.light));const a=fp(o,Ge(s));Vs(i,s.x,Hs(o,s.y),a.w,a.h);const r=1e3+s.z;if(i.style.zIndex=String(r),i.style.setProperty("--iz",String(r)),s.art){const l=X.querySelector(".yardDoor");l&&Yd(i.getBoundingClientRect(),l.getBoundingClientRect())&&(i.style.zIndex=String(Math.max(r,(parseInt(l.style.zIndex||"2",10)||2)+1)))}i.classList.toggle("flipped",s.flip),i.classList.toggle("sel",Ne===s.id)}X.querySelectorAll(".item").forEach(s=>{n.has(s.dataset.id)||s.remove()}),G1(e),qS(),Kl(),J1(e),il(e),q1(),$s()}function Kl(){const e=S.get(),t=ES(),n=new Set;t.forEach((s,o)=>{const i=e.rooms[e.currentRoom]?.items.find(h=>h.id===o),a=i&&de[i.kind],r=i&&LS(i.kind);if(!i||!a||!r)return;n.add(o);let l=X.querySelector(`.seatFront[data-id="${o}"]`);l||(l=document.createElement("div"),l.className="seatFront",l.dataset.id=o,X.appendChild(l));const c=X.querySelector(`.item[data-id="${o}"] .inner`),d=l.querySelector(".inner");(!d||c&&d.innerHTML!==c.innerHTML)&&(l.innerHTML=`<div class="inner">${c?c.innerHTML:Qt(a,!0)}</div>`),l.className="seatFront "+r+(i.flip?" flipped":"");const f=fp(a,Ge(i));Vs(l,i.x,Hs(a,i.y),f.w,f.h),l.style.zIndex=String(1e3+i.z+3)}),X.querySelectorAll(".seatFront").forEach(s=>{n.has(s.dataset.id||"")||s.remove()})}let xo=!1,Qu=0;function pp(e){performance.now()-Qu<80||(Qu=performance.now(),BP(e))}function US(e,t){const n=Z.querySelector(".yardDoor");if(!n)return null;const s=o=>{if(!o)return!1;const i=o.getBoundingClientRect();return i.width>2&&i.height>2&&e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom};return s(n.querySelector(".yardHintLabel"))||s(n.querySelector(".doorArt"))||s(n)?n:null}function QS(e){e.addEventListener("pointerdown",t=>{if(t.button!==0)return;t.stopPropagation();const n=e.dataset.yardGo==="backyard"?"backyard":"living",s=t.clientX,o=t.clientY,i=t.pointerId;xo=!0;const a=r=>{r.pointerId===i&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),xo=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-o)>14||(r.preventDefault(),r.stopPropagation(),pp(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)})}Z.addEventListener("pointerdown",e=>{if(e.button!==0)return;const t=US(e.clientX,e.clientY);if(!t||e.target instanceof Node&&t.contains(e.target)||e.target instanceof Element&&e.target.closest("#artGrip, #toolbar")||e.target instanceof Element&&e.target.closest('.item[data-kind="picture"][data-sig]'))return;e.stopPropagation(),e.preventDefault();const n=t.dataset.yardGo==="backyard"?"backyard":"living",s=e.clientX,o=e.clientY,i=e.pointerId;xo=!0;const a=r=>{r.pointerId===i&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),xo=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-o)>14||(r.preventDefault(),r.stopPropagation(),pp(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)},!0);function Yd(e,t){return e.width>2&&t.width>2&&e.left<t.right-1&&e.right>t.left+1&&e.top<t.bottom-1&&e.bottom>t.top+1}function Nc(e){const t=e.getBoundingClientRect();let n=0;X.querySelectorAll(".item").forEach(s=>{if(s.classList.contains("is-light"))return;const o=de[s.dataset.kind||""];if(!o||o.wall||!Yd(s.getBoundingClientRect(),t))return;const i=parseInt(s.style.zIndex||"0",10)||0;i>n&&(n=i)}),e.style.zIndex=n?String(n+2):"2",X.querySelectorAll(".item[data-sig]").forEach(s=>{Yd(s.getBoundingClientRect(),t)&&(s.style.zIndex=String(Math.max(parseInt(s.style.zIndex||"0",10)||0,parseInt(e.style.zIndex,10)+1)))})}function G1(e){const t=e.rooms[e.currentRoom];a9(L("scenery"),e.currentRoom,t.items),L("scenery").querySelectorAll(".yardDoor").forEach(o=>o.remove());const n=e.currentRoom==="living"?"backyard":e.currentRoom==="backyard"?"living":"",s=X.querySelector(".yardDoor");if(!n)X.querySelectorAll(".yardDoor").forEach(o=>o.remove());else if(!s||s.dataset.yardGo!==n){X.querySelectorAll(".yardDoor").forEach(i=>i.remove()),X.insertAdjacentHTML("beforeend",S5(n==="backyard"?"living":"yard"));const o=X.querySelector(".yardDoor");o&&QS(o)}Z.classList.toggle("room-yard",e.currentRoom==="backyard"),ul(),xo||Un()}const Wt=new Map;function NS(e){const t=fi(e),n=Yt*t,s=It*t,o=Ql(e,Wl(vt(e)?.pose)),i=e.look2?.85:1;return["left","right"].map(a=>{const r=e.held[a],l=r&&de[r.kind];if(!r||!l)return"";const c=Ge(r),d=Math.min(.7,120*t/Math.max(l.w,Xe(l))/c)*i,f=l.w*c*d,h=Xe(l)*c*d,u=o[a].x/100*n,y=o[a].y/160*s,g=Zo(r.kind)&&e.size!=="little"?.7:.62;return`<div class="held ${r.flip?"flipped":""}" data-hand="${a}" style="left:${(u-f/2)/n*100}%;top:${(y-h*g)/s*100}%;width:${f/n*100}%;height:${h/s*100}%"><div class="inner">${Qt(l)}</div></div>`}).join("")}function qS(){let e=X.querySelector("#skyPuddles");e||(e=document.createElement("div"),e.id="skyPuddles",e.className="skyPuddles"),X.appendChild(e);const t=[...X.querySelectorAll(".item.is-light")];for(;e.children.length>t.length;)e.lastElementChild.remove();for(;e.children.length<t.length;)e.appendChild(document.createElement("i"));t.forEach((n,s)=>{const o=e.children[s],i=parseFloat(n.style.left),a=parseFloat(n.style.top),r=parseFloat(n.style.width),l=parseFloat(n.style.height),c=n.dataset.kind==="window"||n.dataset.kind==="tv";o.style.left=i-.6*r+"%",o.style.top=a-(c?.38:.5)*l+"%",o.style.width=2.2*r+"%",o.style.height=2*l+"%",o.style.zIndex=String(parseInt(n.style.zIndex||"1000",10))})}let Xl=()=>{};function ea(e){const t=e.baby;return t&&t.spot==="arms"&&t.holder?t.holder:""}const ps=new Map;function Y1(e){for(const[t,n]of ps)t.indexOf(e+":")===0&&(n.remove(),ps.delete(t))}function K1(e,t){const n=e+":"+t,s=ps.get(n);s&&(s.remove(),ps.delete(n))}function X1(e,t,n,s,o){const i=e+":"+t;for(const[r,l]of ps)r.indexOf(e+":")===0&&r!==i&&(l.remove(),ps.delete(r));let a=ps.get(i);if((!a||!a.isConnected)&&(a=document.createElement("div"),a.className="cradle-front",a.dataset.for=t,a.innerHTML='<div class="inner"></div>',X.appendChild(a),ps.set(i,a)),a.dataset.arm!==s){const r=a.querySelector(".inner");r&&(r.innerHTML=s),a.dataset.arm=s}a.style.left=n.style.left,a.style.top=n.style.top,a.style.width=n.style.width,a.style.height=n.style.height,a.style.zIndex=String(5e3+Math.round(o)+4),a.classList.toggle("flipped",n.classList.contains("flipped")),a.classList.toggle("pose-sit",n.classList.contains("pose-sit")),a.classList.toggle("pose-lie",n.classList.contains("pose-lie")),a.classList.toggle("pose-lie-r",n.classList.contains("pose-lie-r"))}function ln(e){const t=e.characters.filter(n=>n.room===e.currentRoom);for(const[n,s]of Wt)t.some(o=>o.id===n)||(s.remove(),Wt.delete(n));for(const n of t){let s=Wt.get(n.id);s||(s=document.createElement("div"),s.className="char",s.dataset.cid=n.id,s.innerHTML='<div class="inner"></div><div class="hands"></div>',X.appendChild(s),Wt.set(n.id,s),aT(s));const o=vt(n),i=o?.pose??null,a=ea(e)===n.id,r=jy(n)+(i||"")+(a?"h":"");s.dataset.look!==r&&(s.querySelector(".inner").innerHTML=Et(n,i,a),s.dataset.look=r),s.classList.toggle("holding",a);const l=NS(n);s.dataset.held!==l&&(s.querySelector(".hands").innerHTML=l,s.dataset.held=l);const c=fi(n),d=wt(e.currentRoom,o,n);if(s.classList.toggle("flipped",n.flip),s.classList.toggle("pose-sit",i==="sit"),s.classList.toggle("pose-lie",i==="lie"),s.classList.toggle("pose-lie-r",i==="lie"&&!!e.rooms[e.currentRoom].items.find(h=>h.id===o?.item)?.flip),Vs(s,d.x,d.y,Yt*c,It*c),i&&(al(s,d,Yt*c,It*c),V1(s)),s.style.zIndex=String(o?1e3+(e.rooms[e.currentRoom].items.find(h=>h.id===o.item)?.z??0)+1+o.n:5e3+Math.round(n.y)),s.classList.toggle("active",n.id===ze),Ra(s,n,n.id===ze),s.classList.toggle("pose-swing",Vt?.id===n.id),a){const h=xm(n,i);h?X1("doll",n.id,s,h,d.y):K1("doll",n.id)}const f=Ql(n);s.style.setProperty("--hx-l",f.left.x+"%"),s.style.setProperty("--hx-r",f.right.x+"%")}t.some(n=>vt(n)?.pose)&&za(),(ea(e)===""||!t.some(n=>n.id===ea(e)))&&Y1("doll"),$s(),il(e),Xl(),Wa(),Ha()}function gn(){const e=Z.getBoundingClientRect(),t=e.width/Math.max(1,Y),n=6,o=document.body.classList.contains("phone")?1/Math.max(.2,t):1,i=ne.offsetWidth,a=ne.offsetHeight,r=parseFloat(ne.style.left)/100*he,l=parseFloat(ne.style.top)/100*Ce,c=ne.classList.contains("below"),d=r,f=c?l+a/2:l-a/2,h=o*i/2,u=o*a/2,y=_=>e.left+(n+_-se)*t,g=_=>e.top+(n+_)*t,v=y(d-h),w=y(d+h),m=g(f-u),b=g(f+u);return{left:v,right:w,top:m,bottom:b,width:w-v,height:b-m}}function FS(){const e=Z.getBoundingClientRect(),t=4;let n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t,o=Math.max(e.top,0)+t,i=Math.min(e.bottom,window.innerHeight)-t;for(const a of["nudgeL","nudgeR"]){const r=L(a);if(!r||r.classList.contains("off")||r.offsetParent===null)continue;const l=r.getBoundingClientRect();l.width<2||l.height<2||(a==="nudgeL"?n=Math.max(n,l.right+4):s=Math.min(s,l.left-4))}return s-n<48&&(n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t),{left:n,right:s,top:o,bottom:i}}function Pn(e,t){ne.style.left=e/he*100+"%",ne.style.top=t/Ce*100+"%"}function J1(e){HS(e);const t=Ne&&e.rooms[e.currentRoom].items.find(g=>g.id===Ne);if(Se.isPlay()||!t||!de[t.kind]){ne.classList.add("hidden"),ne.classList.remove("below"),ne.style.maxWidth="",L("artFab").classList.remove("tucked");return}L("artFab").classList.add("tucked");const n=de[t.kind],s=Hs(n,t.y),o=s-Xe(n)*Ge(t),i=t.kind==="picture"&&t.art?12+64/(Z.getBoundingClientRect().width/Math.max(1,Y)||1):12;ne.classList.remove("hidden"),ne.style.maxWidth="",ne.classList.remove("below"),Pn(t.x,o-i);const a=FS();gn().top<a.top&&(ne.classList.add("below"),Pn(t.x,s+i));let r=gn();const l=a.right-a.left;if(r.width>l-2&&l>60){const g=ne.offsetWidth*((l-8)/Math.max(1,r.width));ne.style.maxWidth=Math.max(76,g)+"px",!ne.classList.contains("below")&&gn().top<a.top&&(ne.classList.add("below"),Pn(t.x,s+i)),r=gn()}let c=0,d=0;if(r.left<a.left&&(c=a.left-r.left),r.right+c>a.right&&(c=a.right-r.right),r.width>a.right-a.left&&(c=(a.left+a.right)/2-(r.left+r.right)/2),r.top<a.top&&(d=a.top-r.top),r.bottom+d>a.bottom&&(d=a.bottom-r.bottom),Math.abs(c)>=.5||Math.abs(d)>=.5){const g=Z.getBoundingClientRect().width/Math.max(1,Y)||1,v=parseFloat(ne.style.left)/100*he+c/g,w=parseFloat(ne.style.top)/100*Ce+d/g;Pn(v,w)}if(t.kind==="picture"&&t.art){const g=X.querySelector(`.item[data-id="${t.id}"]`),v=L("artGrip"),w=(M,z)=>Math.max(0,Math.min(M.right,z.right)-Math.max(M.left,z.left))*Math.max(0,Math.min(M.bottom,z.bottom)-Math.max(M.top,z.top)),m=()=>v.classList.contains("hidden")?0:w(v.getBoundingClientRect(),ne.getBoundingClientRect()),b=()=>g?w(g.getBoundingClientRect(),ne.getBoundingClientRect())+8*m():0,_=b();if(_>0){const M={l:ne.style.left,t:ne.style.top,below:ne.classList.contains("below")};ne.classList.toggle("below",!M.below),Pn(t.x,M.below?o-i:s+i);const z=gn(),V=Z.getBoundingClientRect().width/Math.max(1,Y)||1;let U=0,F=0;z.left<a.left&&(U=a.left-z.left),z.right+U>a.right&&(U=a.right-z.right),z.top<a.top&&(F=a.top-z.top),z.bottom+F>a.bottom&&(F=a.bottom-z.bottom),(U||F)&&Pn(parseFloat(ne.style.left)/100*he+U/V,parseFloat(ne.style.top)/100*Ce+F/V),b()>=_&&(ne.style.left=M.l,ne.style.top=M.t,ne.classList.toggle("below",M.below))}if(m()>0){const M=v.getBoundingClientRect(),z=gn(),V=Z.getBoundingClientRect().width/Math.max(1,Y)||1,U=M.left-6-z.right,F=M.right+6-z.left,oe=z.left+U>=a.left,we=z.right+F<=a.right,Ke=oe&&(!we||-U<=F)?U:we?F:0;Ke&&Pn(parseFloat(ne.style.left)/100*he+Ke/V,parseFloat(ne.style.top)/100*Ce)}const P=()=>[...X.querySelectorAll(".char")].map(M=>{const z=M.getBoundingClientRect();return new DOMRect(z.left,z.top,z.width,z.height*.42)}),$=()=>{const M=gn(),z=new DOMRect(M.left,M.top,M.width,M.height);return P().reduce((V,U)=>V+w(U,z),0)};if($()>0){const M=Z.getBoundingClientRect().width/Math.max(1,Y)||1,z=()=>{const W=gn();return new DOMRect(W.left,W.top,W.width,W.height)},V=()=>v.classList.contains("hidden")?0:w(v.getBoundingClientRect(),z()),U=()=>g?w(g.getBoundingClientRect(),z()):0,F=()=>(V()>0?1e9:0)+$()*20+U(),oe=()=>({l:ne.style.left,t:ne.style.top,below:ne.classList.contains("below")}),we=W=>{ne.style.left=W.l,ne.style.top=W.t,ne.classList.toggle("below",W.below)},Ke=()=>{const W=gn();let N=0,G=0;W.left<a.left&&(N=a.left-W.left),W.right+N>a.right&&(N=a.right-W.right),W.top<a.top&&(G=a.top-W.top),W.bottom+G>a.bottom&&(G=a.bottom-W.bottom),(N||G)&&Pn(parseFloat(ne.style.left)/100*he+N/M,parseFloat(ne.style.top)/100*Ce+G/M)};let Ie=oe(),I=F();const B=(W,N)=>{ne.classList.toggle("below",W),Pn(t.x+N/M,W?s+i:o-i),Ke();const G=F();G<I-.5&&(I=G,Ie=oe())},te=gn();for(const W of[!Ie.below,Ie.below]){B(W,0);const N=Z.getBoundingClientRect().left+(6+t.x-se)*M,G=te.width/2;for(const ge of P())B(W,ge.left-8-G-N),B(W,ge.right+8+G-N)}we(Ie)}}const f=Gn(t.size),h=Qn.indexOf(f),u=ne.querySelector('[data-a="smaller"]'),y=ne.querySelector('[data-a="bigger"]');u&&(u.disabled=h<=0),y&&(y.disabled=h>=Qn.length-1)}function e2(e){const t=L("soundIco");t&&(t.innerHTML=e.soundOn?Ft.soundOn:Ft.soundOff),L("btnSound").setAttribute("aria-label",e.soundOn?"Sound on":"Sound off"),w4(e.soundOn)}function Mo(){const e=S.get();X.innerHTML="",Wt.clear(),W1(e),H1(e),Rt(e),ln(e),e2(e);const t=e.characters.find(o=>o.room===e.currentRoom),n=k&&ye(),s=n&&n.where==="house"?n.x:t?.x;Zl(),Je(ma[e.currentRoom]??ei(s!==void 0?j2(e,s,s-Y/2):oi)),ma[e.currentRoom]!==void 0&&op()&&R==="house"&&!document.body.classList.contains("phone")&&zp(),bt(),Mn(),document.body.classList.contains("phone")&&R==="house"&&requestAnimationFrame(()=>T1())}const Nu=200,jS=2,rl=[];let Kd=0,Rr=!1,qc=0;const Hn=new Map,ZS=60;function GS(e,t){for(Hn.delete(e),Hn.set(e,t);Hn.size>ZS;)Hn.delete(Hn.keys().next().value)}function YS(e){const t=Hn.get(e);return t&&(Hn.delete(e),Hn.set(e,t)),t}function Xd(e){const t=document.getElementById("shelf");if(!t)return!1;const n=t.getBoundingClientRect();if(n.width<2||n.height<2)return!1;const s=e.getBoundingClientRect();return s.right>n.left-Nu&&s.left<n.right+Nu&&s.bottom>n.top-8&&s.top<n.bottom+8}const KS=3,ll=new Map;function Jd(e,t){const n=(ll.get(t)||0)+1;if(ll.set(t,n),delete e.dataset.shelfq,n>=KS){delete e.dataset.artq;return}setTimeout(hp,300*n)}function Ho(){Kd--,!Rr&&t2()}function qu(e,t){const n=document.createElement("div");n.innerHTML=Qt(t);const s=n.querySelector("img.artimg");if(!s){delete e.dataset.artq,Ho();return}const o=ll.get(t.kind)||0;if(o>0){const l=s.getAttribute("src")||"";s.setAttribute("src",l+(l.indexOf("?")>=0?"&":"?")+"retry="+o)}let i=!1;const a=l=>{if(!i){if(i=!0,l){const c=Array.prototype.slice.call(n.childNodes);if(GS(t.kind,c),ll.delete(t.kind),e.isConnected&&e.dataset.artq==="1"){delete e.dataset.artq,e.innerHTML="";for(let d=0;d<c.length;d++)e.appendChild(c[d])}else{const d=document.querySelector(`#shelf button.thing[data-artq="1"][data-kind="${CSS.escape(t.kind)}"]`);if(d){delete d.dataset.artq,d.innerHTML="";for(let f=0;f<c.length;f++)d.appendChild(c[f])}}}else e.isConnected&&e.dataset.artq==="1"&&Jd(e,t.kind);Ho()}},r=()=>{typeof s.decode=="function"?s.decode().then(()=>a(!0),()=>a(!0)):a(!0)};s.onload=r,s.onerror=()=>a(!1),s.complete&&s.naturalWidth>0&&r()}function t2(){if(!Rr){for(Rr=!0;Kd<jS&&rl.length;){const e=rl.shift();if(!e||!e.isConnected||e.dataset.artq!=="1")continue;if(!Xd(e)){delete e.dataset.shelfq;continue}const t=e.dataset.kind||"",n=de[t];if(!n){delete e.dataset.artq;continue}if(Kd++,Kn(t)){qu(e,n);continue}Bs(()=>p(()=>Promise.resolve().then(()=>Dl),void 0)).then(s=>s.loadArtKinds([t])).then(()=>{if(!e.isConnected||e.dataset.artq!=="1"){Ho();return}if(!Kn(t)){Jd(e,t),Ho();return}if(!Xd(e)){delete e.dataset.shelfq,Ho();return}qu(e,n)},()=>{e.isConnected&&e.dataset.artq==="1"&&Jd(e,t),Ho()})}Rr=!1}}function XS(){const e=document.getElementById("shelf");if(!e||!Yn())return;const t=e.querySelectorAll('button.thing[data-artq="1"]');for(let n=0;n<t.length;n++){const s=t[n];s.dataset.shelfq!=="1"&&Xd(s)&&(s.dataset.shelfq="1",rl.push(s))}t2()}function hp(){qc||(qc=requestAnimationFrame(()=>{qc=0,XS()}))}function JS(){const e=document.getElementById("shelf");!e||e.dataset.artscroll==="1"||(e.dataset.artscroll="1",e.addEventListener("scroll",hp,{passive:!0}))}function n2(){const e=document.getElementById("shelf");if(!e||!Yn())return;const t=e.querySelectorAll("button.thing[data-kind]");for(let n=0;n<t.length;n++){const s=t[n],o=s.dataset.kind||"";s.querySelector("img.artimg")||!(Bp(o)||Kn(o))||(s.dataset.artq="1")}hp()}function s2(){if(zt==="__people"){Nt();return}n2(),i2()}const o2=()=>de["egg:chloe-starlamp"]?Qt(de["egg:chloe-starlamp"]):"🎁";function i2(){document.querySelectorAll("#cats .cat[data-cat]").forEach(e=>{if(e.querySelector("img.artimg"))return;const t=e.dataset.cat,n=As.find(i=>i.id===t);if(t==="secrets"){e.innerHTML=o2();return}const s=n&&n.kind!=="people"?de[n.icon]:void 0;if(!s||!Yn()||!Kn(s.kind))return;const o=n.kind==="pack"?e.querySelector(".packicon"):e;o&&(o.innerHTML=Qt(s))})}function eT(e){const t=T0();if(!k)return;const n=ye();if(!n||n.where!=="house"||!n.seat)return;let s="";if(e.type==="item/flip"||e.type==="item/delete")s=e.id;else if(e.type==="item/move"&&e.stand)s=e.id;else if(e.type==="char/hold")s=e.itemId;else return;if(!s||n.seat.id!==s||e.room!==n.room)return;const o=t&&t.id===s?t:null,i=o?xn(o.kind)*(o.scale||1):xn("bed"),a=ho(o?o.x:n.x,i,n.x);_n.delete("p:"+k.pid);const{seat:r,...l}=n;nt({...l,x:a.x,y:a.y})}S.subscribe((e,t)=>{switch(eT(t),t.type){case"room/switch":{const n=Z.classList.contains("room-yard");k&&Te!==ee&&fT(t.room),Mo(),Nt(),(t.room==="backyard"||n||Se.isPlay()&&Math.min(window.innerWidth,window.innerHeight)<500)&&Ws(),F2(t.room);break}case"item/add":Rt(e),yS(),CP();break;case"game/reset":Mo();break;case"room/wallpaper":case"room/floor":case"room/pattern":case"room/wallTile":case"room/floorTile":H1(e);break;case"char/update":case"char/move":t.type==="char/move"&&Vt&&!Bi&&t.id===Vt.id&&(Vt=null),ln(e),Kl(),ul(),R==="ranch"?Ls():R==="park"&&Lo();break;case"char/add":case"char/delete":case"char/hold":case"char/release":Rt(e),ln(e),bt(),zt==="__people"&&Nt();break;case"item/move":case"item/flip":case"item/delete":case"item/size":Rt(e),ln(e),bt();break;case"baby/meet":case"baby/name":case"baby/care":case"baby/hold":case"baby/place":case"baby/ease":ln(e),bt();break;case"settings/sound":e2(e);break;default:Rt(e)}});function et(e){if(!e)return;const t=e.querySelector(":scope > .inner")??e;t.classList.remove("bounce"),t.offsetWidth,t.classList.add("bounce")}function up(e,t,n=7){const s=L("fx"),o=["#ffd166","#ff8fab","#8ecae6","#80ed99","#c9a0dc"];for(let i=0;i<n;i++){const a=document.createElement("div");a.className="spark";const r=Math.PI*2*i/n+Math.random()*.5,l=40+Math.random()*30;a.style.left=e+"px",a.style.top=t+"px",a.style.background=o[i%o.length],a.style.setProperty("--dx",Math.cos(r)*l+"px"),a.style.setProperty("--dy",Math.sin(r)*l+"px"),s.appendChild(a),setTimeout(()=>a.remove(),650)}}const Da=e=>{const t=e?.getBoundingClientRect();t&&up(t.left+t.width/2,t.top+t.height/2)};function gp(e,t){up(e,t,10),C.pop()}function cl(e){Wt.forEach((t,n)=>{t.classList.toggle("hold-target",!!e&&e.c.id===n),t.dataset.hand=e&&e.c.id===n?e.hand:""})}function a2(e,t){S.dispatch({type:"char/hold",id:e.c.id,hand:e.hand,room:e.c.room,itemId:t}),Ne=null,Rt(S.get());const n=Wt.get(e.c.id);et(n),Da(n?.querySelector(`.held[data-hand="${e.hand}"]`)),C.sparkle()}const $n=new Map;let Xt=!1,dl=0;const mp=()=>[...$n.values()].reduce((e,t)=>e+t,0)/$n.size;Z.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&($n.set(e.pointerId,e.clientX),$n.size>=2&&(Xt=!0,dl=mp(),Zl(),ne.classList.add("hidden")))},!0);window.addEventListener("pointermove",e=>{if($n.has(e.pointerId)&&($n.set(e.pointerId,e.clientX),Xt&&$n.size>=2)){ci();const t=mp();Je(se-(t-dl)/dt()),dl=t}},!0);const r2=e=>{$n.delete(e.pointerId),$n.size<2&&Xt&&($n.size===0?Xt=!1:dl=mp())};window.addEventListener("pointerup",r2,!0);window.addEventListener("pointercancel",r2,!0);const Oo=80;function tT(e,t){const n=Z.getBoundingClientRect();return t<n.top-40||t>n.bottom+10?0:e<n.left+Oo?-Math.min(1,(n.left+Oo-e)/Oo)*16:e>n.right-Oo?Math.min(1,(e-(n.right-Oo))/Oo)*16:0}function ts(e,t){let n=e,s=0;const o=()=>{const r=Xt?0:tT(n.clientX,n.clientY);if(r){const l=se;Je(se+r),se!==l&&t.onMove(n)}s=requestAnimationFrame(o)};t.edgeScroll!==!1&&(s=requestAnimationFrame(o));const i=r=>{r.pointerId===e.pointerId&&(r.preventDefault(),n=r,Xt||t.onMove(r))},a=r=>{r.pointerId===e.pointerId&&(cancelAnimationFrame(s),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),t.onUp(r))};window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a)}function nT(e){return new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,button:e.button,buttons:e.buttons,isPrimary:e.isPrimary})}function sT(e,t){const n=t.target,s=n&&n.closest?n.closest("img.artimg"):null,o=S.get(),i=!!o.rooms[o.currentRoom]?.items.find(a=>a.id===e.dataset.id)?.art;if(s&&!i&&!Qf(s,t.clientX,t.clientY)){const a=WM(t.clientX,t.clientY),r=a?.closest(".item"),l=a?.closest(".char");r&&r!==e?(t.stopPropagation(),ef(r,t)):l&&(t.stopPropagation(),l.dispatchEvent(nT(t)));return}ef(e,t)}function oT(e,t){if(t.preventDefault(),t.stopPropagation(),Xt)return;const n=e.dataset.id,s=t.clientX,o=t.clientY;ts(t,{edgeScroll:!1,onMove(){},onUp(i){Math.hypot(i.clientX-s,i.clientY-o)>6||GT(e,n)}})}function ef(e,t,n=!1){if(t.preventDefault(),t.stopPropagation(),Xt)return;if(Se.isPlay()){oT(e,t);return}if(!ht()){Xn(e);return}const s=S.get(),o=s.currentRoom,i=e.dataset.id,a=s.rooms[o].items.find(h=>h.id===i);if(!a)return;const r=de[a.kind],l=Qe(t.clientX,t.clientY),c={x:a.x-l.x,y:Hs(r,a.y)-l.y};let d=n,f=null;Ne=i,S.dispatch({type:"item/front",room:o,id:i}),e.classList.add("lifted"),C.pick(),ts(t,{onMove(h){const u=Qe(h.clientX,h.clientY);Math.hypot(u.x-l.x,u.y-l.y)>6&&(d=!0),d&&(ne.classList.add("hidden"),Tr.classList.add("show")),Tr.classList.toggle("hot",Vu(h.clientX,h.clientY));const y=r.w*Ge(a)/2;S.dispatch({type:"item/move",room:o,id:i,x:Math.max(y*.6,Math.min(he-y*.6,u.x+c.x)),y:qd(r,u.y+c.y),...d?{stand:!0}:{}}),d&&ne.classList.add("hidden"),f=d&&r.holdable?B1(u):null,cl(f)},onUp(h){if(e.classList.remove("lifted"),Tr.classList.remove("show","hot"),cl(null),d&&Vu(h.clientX,h.clientY)){Ne=null,S.dispatch({type:"item/delete",room:o,id:i}),gp(h.clientX,h.clientY);return}if(d&&f){a2(f,i);return}d?(j1(o,i),C.drop(),et(e)):(C.click(),S2(i),P7(e)),Rt(S.get())}})}function iT(e,t,n){if(n.preventDefault(),n.stopPropagation(),Xt||Se.isPlay())return;const s=e.dataset.cid,o=t.dataset.hand,i=S.get().characters.find(d=>d.id===s),a=i?.held[o];if(!i||!a)return;const r=t.getBoundingClientRect(),l=Qe(r.left+r.width/2,r.bottom);S.dispatch({type:"char/release",id:s,hand:o,x:l.x,y:l.y});const c=X.querySelector(`.item[data-id="${a.id}"]`);c&&ef(c,n,!0)}function aT(e){e.addEventListener("pointerdown",t=>{const n=t.target.closest(".held"),s=n?.querySelector("img.artimg"),o=!!s&&!Qf(s,t.clientX,t.clientY);if(n&&!o){if(Se.isPlay()){t.preventDefault(),t.stopPropagation();return}if(!ht()){t.stopPropagation(),Xn(e);return}return iT(e,n,t)}if(t.preventDefault(),t.stopPropagation(),Xt||Se.isPlay()&&!rp())return;if(!ht()){Xn(e);return}Ne=null,Rt(S.get());const i=e.dataset.cid;ze=i;const a=S.get(),r=a.characters.find(u=>u.id===i);if(!r)return;const l=Qe(t.clientX,t.clientY),c=wt(a.currentRoom,vt(r),r),d={x:c.x-l.x,y:c.y-l.y};let f=c.x,h=!1;e.classList.add("lifted"),C.pick(),ln(S.get()),ba=!0,ts(t,{onMove(u){const y=Qe(u.clientX,u.clientY),g=y.x+d.x;if(Math.hypot(y.x-l.x,y.y-l.y)>6&&(h=!0),!h)return;const v=S.get().characters.find(m=>m.id===i);if(!v)return;if(Math.abs(g-f)>3){const m=g<f;m!==v.flip&&S.dispatch({type:"char/update",id:i,patch:{flip:m}}),f=g}const w=Math.max(ko+40,y.y+d.y);Ji(i,a.currentRoom,g,w,null),Se.isPlay()&&(wa=ol(u.clientX,u.clientY)?.id??null),document.querySelectorAll(".tab").forEach(m=>m.classList.remove("drop")),document.elementFromPoint(u.clientX,u.clientY)?.closest(".tab:not(.on)")?.classList.add("drop")},onUp(u){ba=!1,wa=null,e.classList.remove("lifted"),document.querySelectorAll(".tab").forEach(b=>b.classList.remove("drop"));const y=document.elementFromPoint(u.clientX,u.clientY)?.closest("[data-room]"),g=S.get().characters.find(b=>b.id===i);if(!h||!g){C.click();return}if(y&&y.dataset.room!==a.currentRoom){const b=y.getBoundingClientRect();up(b.left+b.width/2,b.top+b.height/2,9),C.swish(),Ji(i,y.dataset.room,g.x,g.y,null);return}const v=Qe(u.clientX,u.clientY),w=v.x+d.x,m=Math.max(ko+40,v.y+d.y);if(Se.isPlay()){const b=O1(u.clientX,u.clientY)??ol(u.clientX,u.clientY);lp(i,w,m,b)}else Ji(i,a.currentRoom,w,m,null);C.drop(),et(e),requestAnimationFrame(()=>Rs(!0))}})})}function rT(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Se.isPlay()){n.stopPropagation();return}if(!ht()){Xn(e);return}const s=document.createElement("div");s.className="ghost",s.innerHTML=Qt(t),document.body.appendChild(s);const o=Math.max(1,60/(Math.max(t.w,Xe(t))*dt())),i=t.w*dt()*o,a=Xe(t)*dt()*o;s.style.width=i+"px",s.style.height=a+"px";let r=null;const l=f=>{s.style.left=f.clientX-i/2+"px",s.style.top=f.clientY-a*.8+"px",r=t.holdable&&jd(f.clientX,f.clientY)?B1(Qe(f.clientX,f.clientY)):null,cl(r)};l(n),C.pick(),e.classList.add("pressed");const c=n.clientX,d=n.clientY;ts(n,{onMove:l,onUp(f){s.remove(),e.classList.remove("pressed"),cl(null);const h=S.get().currentRoom,u=Math.hypot(f.clientX-c,f.clientY-d)<8;let y,g;if(u)y=se+380+Math.random()*240,g=t.wall?Math.min(Oa,200+Xe(t)/2):qd(t,500+Math.random()*40);else if(jd(f.clientX,f.clientY)){const m=Qe(f.clientX,f.clientY);y=m.x,g=qd(t,m.y+Xe(t)*.2)}else return;const v={id:nl(t.kind.replace(/[^a-z0-9-]/gi,"")),kind:t.kind,x:y,y:g,flip:!1,z:0,scale:1};if(h!=="backyard"&&S.get().rooms[h].items.length===0){const m=o9(b=>nl(b),h);for(let b=0;b<m.length;b++)S.dispatch({type:"item/add",room:h,item:m[b]})}if(S.dispatch({type:"item/add",room:h,item:v}),!u&&r){a2(r,v.id);return}Ne=v.id,Rt(S.get());const w=X.querySelector(`.item[data-id="${v.id}"]`);et(w),Da(w),C.sparkle()}})})}function lT(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Se.isPlay())return;if(!ht()){Xn(e);return}const s=S.get().characters.find(h=>h.id===t);if(!s)return;const o=fi(s),i=Yt*o*dt(),a=It*o*dt(),r=document.createElement("div");r.className="ghost",r.innerHTML=Et(s),r.style.width=i+"px",r.style.height=a+"px",document.body.appendChild(r);const l=h=>{r.style.left=h.clientX-i/2+"px",r.style.top=h.clientY-a*.85+"px"},c=n.clientX,d=n.clientY;let f=!1;r.style.visibility="hidden",ts(n,{onMove(h){Math.hypot(h.clientX-c,h.clientY-d)>8&&(f=!0,r.style.visibility=""),l(h)},onUp(h){if(r.remove(),!f){C.click(),ze=t,ti("dress");return}if(!jd(h.clientX,h.clientY))return;const u=Qe(h.clientX,h.clientY),y=S.get().currentRoom;S.dispatch({type:"char/move",id:t,room:y,x:u.x,y:Math.max(ko+40,u.y+It*o*.15)}),ze=t,ln(S.get());const g=Wt.get(t);et(g),Da(g),C.sparkle()}})})}function l2(){if(!ht())return Xn(null),null;const e=S.get();if(e.characters.length>=ii)return null;const t=nl("c"),n=Tl();S.dispatch({type:"char/add",char:Es({id:t,...Sl(n),look2:n,room:e.currentRoom,x:se+300+Math.random()*400,y:520+Math.random()*40})}),ze=t,ln(S.get());const s=Wt.get(t);return et(s),Da(s),C.sparkle(),t}function cT(){return sp==="all"?"all":S.get().currentRoom}function Nt(){const e=S.get().currentRoom,t=cT(),n=ep.find(l=>l.id===e)?.name??"This room",s=t==="all";L("roomFilter").innerHTML=`<button class="rf ${s?"on":""}" data-rf="${s?"room":"all"}">${s?"Just "+n:"All rooms"}</button>`;const o=Hc("secrets").length>0,i=As.filter(l=>l.id!=="secrets"&&(l.kind==="people"||l.kind==="pack"&&e!=="backyard"||Hc(l.id).length));!(zt==="secrets"&&o)&&!i.some(l=>l.id===zt)&&(zt=i[1]?.id??"__people"),L("cats").innerHTML=i.map(l=>`<button class="cat ${l.kind} ${l.id===zt?"on":""}" data-cat="${l.id}" aria-label="${l.name}" title="${l.name}">${l.kind==="people"?aS:l.kind==="pack"?`<span class="packicon">${Qt(de[l.icon])}</span><span class="packname">${l.name}</span>`:Qt(de[l.icon])}</button>`).join("")+(o?`<button class="cat secretTab ${zt==="secrets"?"on":""}" data-cat="secrets" aria-label="Secrets" title="Secrets">${o2()}</button>`:"");const a=L("shelf");if(rl.length=0,a.innerHTML="",!ht()){a.innerHTML='<div class="empty locked">🔒 This house is look-only right now</div>';return}if(zt==="__people"){const l=S.get(),c=ks();if(c){const d=document.createElement("button");d.className="thing person me",d.setAttribute("aria-label","Me"),d.innerHTML=`<div class="face">${Et(c)}</div><span class="meStar">★</span>`,d.addEventListener("click",()=>{C.click(),ze=yt,ti("dress")}),a.appendChild(d)}for(const d of l.characters){const f=document.createElement("button");f.className="thing person",f.setAttribute("aria-label","Character"),f.innerHTML=`<div class="face">${Et(d)}</div><span class="where" style="background:${v1(d.room)}"></span>`,a.appendChild(f),lT(f,d.id)}if(l.characters.length<ii){const d=document.createElement("button");d.className="thing add",d.setAttribute("aria-label","New character"),d.innerHTML=k1,d.addEventListener("click",()=>{l2()&&(Nt(),ti("dress"))}),a.appendChild(d)}return}const r=Hc(zt);r.length||(a.innerHTML='<div class="empty">Nothing here yet!</div>');for(const l of r){const c=document.createElement("button");c.className="thing",c.setAttribute("aria-label",l.name),c.dataset.kind=l.kind;const d=Yn()&&Kn(l.kind)?YS(l.kind):void 0;if(d)for(let f=0;f<d.length;f++)c.appendChild(d[f]);else c.innerHTML=B5(l,Bp(l.kind));a.appendChild(c),rT(c,l)}a.scrollLeft=0,yp(),JS(),n2()}function yp(){const e=document.querySelector(".drawerTop"),t=document.getElementById("drawerBar");!e||!t||(t.classList.toggle("more",e.scrollWidth-e.clientWidth-e.scrollLeft>6),t.classList.toggle("back",e.scrollLeft>6))}document.querySelector(".drawerTop").addEventListener("scroll",yp,{passive:!0});window.addEventListener("resize",yp);IS();function dT(){const e=document.querySelector(".drawerTop");if(!e||e.dataset.packPan)return;e.dataset.packPan="1";let t=0,n=0,s=!1,o=-1;e.addEventListener("pointerdown",a=>{a.pointerType==="mouse"&&a.button!==0||(o=a.pointerId,t=a.clientX,n=e.scrollLeft,s=!1)}),e.addEventListener("pointermove",a=>{a.pointerId===o&&(Math.abs(a.clientX-t)>8||Math.abs(e.scrollLeft-n)>2)&&(s=!0)});const i=a=>{a.pointerId===o&&(o=-1,s||(e.scrollLeft=n))};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),e.addEventListener("click",a=>{s&&(a.preventDefault(),a.stopPropagation()),s=!1},!0)}dT();function Fu(e,t,n){return`<div class="sw">${e.map(s=>`<button class="dot ${s===t?"on":""}" style="background:${s}" data-act="${n}" data-v="${s}"></button>`).join("")}</div>`}let ka=null,Wo=!1;function c2(e){if(e===yt){const n=ks();if(!n||n.look2)return;In(yt,ia(oa(n)));return}const t=S.get().characters.find(n=>n.id===e);!t||t.look2||In(e,{...ia(oa(t)),size:t.size})}function yn(){const e=S.get(),t=L("card");if(ka==="paint"){t.classList.remove("avCard");const n=e.rooms[e.currentRoom],s=kd.filter(a=>a.kind==="wallpaper"),o=kd.filter(a=>a.kind==="floor"),i=(a,r,l,c)=>`<button class="dot pat tile ${a.id===r?"on":""}" data-act="${l}" data-v="${a.id}" title="${a.name} (${pg(a.pack)})" style="background-color:${c};background-image:${Zd(a.url)};background-size:48px auto"></button>`;t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Paint the room</h2>
      <h3>Walls</h3>${Fu(oS,n.wallpaper,"wall")}
      <h3>Wallpaper</h3><div class="sw">${z1.map((a,r)=>`<button class="dot pat ${!n.wallTile&&r===n.pattern?"on":""}" data-act="pat" data-v="${r}" style="background-color:${n.wallpaper};background-image:${a};background-size:${r===1?"16px 16px":r===3?"20px 20px":"auto"}"></button>`).join("")}${s.map(a=>i(a,n.wallTile,"wtile",n.wallpaper)).join("")}</div>
      <h3>Floor</h3>${Fu(iS,n.floor,"floor")}
      ${o.length?`<h3>Floor style</h3><div class="sw"><button class="dot pat ${n.floorTile?"":"on"}" data-act="ftile" data-v="" style="background-color:${n.floor};background-image:${D1}"></button>${o.map(a=>i(a,n.floorTile,"ftile",n.floor)).join("")}</div>`:""}`}else if(ka==="dress"){t.classList.add("avCard");let n=e,s=ks(),o=s?Es({id:yt,...s}):null,i=ze===yt&&o?o:n.characters.find(r=>r.id===ze)??o??n.characters[0];i&&!i.look2&&c2(i.id),n=S.get(),s=ks(),o=s?Es({id:yt,...s}):null,i=ze===yt&&o?o:n.characters.find(r=>r.id===ze)??o??n.characters[0];const a=`<div class="picker">${o?`<button class="pk me ${i?.id===yt?"on":""}" data-act="pickc" data-v="${yt}"><div class="face">${Et(o)}</div><span class="meStar">★</span></button>`:""}${n.characters.map(r=>`<button class="pk ${r.id===i?.id?"on":""}" data-act="pickc" data-v="${r.id}"><div class="face">${Et(r)}</div><span class="where" style="background:${v1(r.room)}"></span></button>`).join("")}${n.characters.length<ii?`<button class="pk add" data-act="newc">${k1}</button>`:""}</div>`;if(!i){t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${a}<div class="dress"><p class="hint">Tap + to make someone new!</p></div>`;return}ze=i.id,t.innerHTML=zL(i,a,Wo,Ft.trash)}}function ti(e){ka=e,Wo=!1,yn(),L("sheet").classList.remove("hidden"),C.swish()}L("sheet").addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(e.target===L("sheet")||t?.dataset.act==="close"){L("sheet").classList.add("hidden"),ka=null,C.click(),zt==="__people"&&Nt();return}if(!t)return;const n=S.get(),s=n.currentRoom,o=t.dataset.v,i=ze??"",a=t.dataset.act;if(a!=="delc"&&(Wo=!1),a&&a.indexOf("av-")===0){const r=i===yt?ks():S.get().characters.find(d=>d.id===i);if(a==="av-costume"){r&&!r.look2&&c2(i);const d=i===yt?ks():S.get().characters.find(f=>f.id===i);In(i,{costume:Eo(o)??null,...d?.look2?{look2:d.look2}:{},size:d?.size??"kid"}),C.sparkle(),yn(),et(document.querySelector(".avStage"));return}if(a==="av-surprise"){In(i,{...ia(Tl()),size:r?.size??"kid"}),C.sparkle(),yn(),et(document.querySelector(".avStage"));return}const l=r?.look2??oa(r??{}),c=DL(l,a,o??"");if(!c){C.click(),yn();return}In(i,{...ia(c),size:r?.size??"kid"}),C.sparkle(),yn(),et(document.querySelector(".avStage"));return}switch(a){case"wall":S.dispatch({type:"room/wallpaper",room:s,color:o});break;case"floor":S.dispatch({type:"room/floor",room:s,color:o});break;case"pat":S.dispatch({type:"room/pattern",room:s,pattern:+o});break;case"wtile":S.dispatch({type:"room/wallTile",room:s,tile:o});break;case"ftile":S.dispatch({type:"room/floorTile",room:s,tile:o||null});break;case"skin":case"hair":case"shirt":case"pants":In(i,{[a]:o});break;case"hs":In(i,{hairStyle:+o});break;case"acc":In(i,{acc:+o});break;case"size":{const r=i===yt?ks():S.get().characters.find(l=>l.id===i);In(i,{size:o,...r?.look2?{look2:r.look2}:{}}),ln(S.get());break}case"pickc":ze=o,ln(S.get()),C.click(),yn();return;case"newc":if(!l2())return;break;case"delc":if(i===yt||!ht())return;if(!Wo){Wo=!0,C.click(),yn();return}Wo=!1;{const l=Wt.get(i)?.getBoundingClientRect();S.dispatch({type:"char/delete",id:i}),l?gp(l.left+l.width/2,l.top+l.height/2):C.pop()}ze=S.get().characters[0]?.id??null,yn();return}C.sparkle(),yn(),et(document.querySelector(".preview"))});L("tabs").addEventListener("click",e=>{const t=e.target.closest("[data-room]");if(!t)return;const n=t.dataset.room;n!==S.get().currentRoom&&(Ne=null,C.swish(),Z.classList.remove("swap"),Z.offsetWidth,Z.classList.add("swap"),S.dispatch({type:"room/switch",room:n}))});L("cats").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");t&&(zt=t.dataset.cat,C.click(),Nt())});L("roomFilter").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");if(t){zt=t.dataset.cat,C.click(),Nt();return}const n=e.target.closest("[data-rf]");n&&(sp=n.dataset.rf==="all"?"all":"",C.click(),Nt())});ne.addEventListener("pointerdown",e=>e.stopPropagation());ne.addEventListener("click",e=>{const t=e.target.closest("[data-a]");if(!t||!Ne)return;if(!ht()){Xn(null);return}const n=S.get().currentRoom,s=Ne,o=X.querySelector(`.item[data-id="${s}"]`);switch(t.dataset.a){case"smaller":case"bigger":{const i=S.get().rooms[n].items.find(l=>l.id===s);if(!i)break;const a=Qn.indexOf(Gn(i.size)),r=t.dataset.a==="smaller"?a-1:a+1;if(r<0||r>=Qn.length)break;S.dispatch({type:"item/size",room:n,id:s,size:Qn[r]}),C.click(),et(o);break}case"flip":S.dispatch({type:"item/flip",room:n,id:s}),C.swish(),et(o);break;case"front":S.dispatch({type:"item/front",room:n,id:s}),C.click(),et(o);break;case"back":S.dispatch({type:"item/back",room:n,id:s}),C.click(),et(o);break;case"delete":{const i=o?.getBoundingClientRect();Ne=null,S.dispatch({type:"item/delete",room:n,id:s}),i&&gp(i.left+i.width/2,i.top+i.height/2);break}}});Z.addEventListener("pointerdown",e=>{if(e.target.closest(".nudge"))return;Zl();const t=e.clientX,n=se;let s=!1,o=0,i=e.clientX,a=performance.now();ts(e,{edgeScroll:!1,onMove(r){if(Math.abs(r.clientX-t)>6&&(s=!0),!s)return;const l=performance.now();o=(r.clientX-i)/Math.max(1,l-a),i=r.clientX,a=l,ci(),Je(n-(r.clientX-t)/dt())},onUp(){if(!s){Ne&&(Ne=null,Rt(S.get()));return}if(Xt)return;let r=-o*16/dt();const l=()=>{Math.abs(r)<.3||(Je(se+r),r*=.92,qo=requestAnimationFrame(l))};qo=requestAnimationFrame(l)}})});Z.addEventListener("wheel",e=>{e.preventDefault(),Zl(),ci(),Je(se+(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)/dt())},{passive:!1});L("nudgeL").addEventListener("pointerdown",e=>{e.stopPropagation(),C.swish(),ci(),Gl((ya??se)-Y*.6)});L("nudgeR").addEventListener("pointerdown",e=>{e.stopPropagation(),C.swish(),ci(),Gl((ya??se)+Y*.6)});const ju=L("minimap");ju.addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault();const t=n=>{ci();const s=ju.getBoundingClientRect();Gl((n.clientX-s.left)/s.width*he-Y/2)};t(e),C.click(),ts(e,{edgeScroll:!1,onMove:t,onUp(){}})});L("btnPaint").addEventListener("click",()=>{if(!ht())return Xn(null);ti("paint")});L("btnDress").addEventListener("click",()=>ti("dress"));L("btnSound").addEventListener("click",()=>{S.dispatch({type:"settings/sound",on:!S.get().soundOn}),C.click()});document.addEventListener("gesturestart",e=>e.preventDefault());document.addEventListener("contextmenu",e=>e.preventDefault());const wp=new Set;document.addEventListener("pointerdown",e=>{wp.add(e.pointerId)},!0);for(const e of["pointerup","pointercancel"])document.addEventListener(e,t=>{wp.delete(t.pointerId)},!0);iy({base:"/cozy-preview/",safeNow:()=>wp.size===0});window.__store=S;window.__shelfCache=()=>Hn.size;H7({get:()=>S.get(),dispatch:e=>S.dispatch(e),subscribe:e=>S.subscribe(e),canDrift:()=>R==="house"&&rp(),speaks:()=>!k||Te===ee||k.speaksNeeds,layer:X,menuAfter:L("btnSound"),afterPaint:()=>{Wa(),Ha()}});window.__items=Object.fromEntries(En.filter(e=>e.img).map(e=>[e.kind,{w:e.w,h:Xe(e),cat:e.cat,holdable:e.holdable,svg:e.img.includes(".svg")}]));window.__cam={get:()=>se,set:Je};window.__yieldNudges=Wa;window.__myPres=()=>ye();window.__playDropPolish=Bl;window.__takenSeats=$o;window.__applyPlayDrop=(e,t,n,s)=>{const o=S.get(),i=s?o.rooms[o.currentRoom].items.find(a=>a.id===s)??null:null;lp(e,t,n,i)};window.__applyAvatarPlayDrop=(e,t,n)=>{const s=S.get(),o=n?s.rooms[s.currentRoom].items.find(i=>i.id===n)??null:null;cp(e,t,o),bt()};window.__phoneShowKids=()=>ft();window.__avatar={richAvatars:Yr,randomLook2:Tl,look2FromLegacy:oa,legacyFromLook2:Sl,sanitizeLook2:xa,handsFor:Ql};window.__frameHouseKid=()=>Rs(!0);window.__layoutNameTags=()=>Om();window.__lie={bedArt:Rl,lieBedKinds:mw,lieOffset:Dr,lieSpot:vw,box(e){const t=de[e];return t?{w:t.w,h:Xe(t)}:null}};window.__paint=()=>{bt()};const me=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function ht(){return!k||Te===ee||k.canEdit(ue)}function Xn(e){C.pop();const t=L("houseTag");t.classList.add("show"),t.classList.remove("wiggle"),t.offsetWidth,t.classList.add("wiggle"),window.clearTimeout(fl),fl=window.setTimeout(()=>{R==="house"&&k&&!document.body.classList.contains("own-house")||t.classList.remove("show")},2e3),e&&(e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope")),j("🔒 Look-only house: ask the owner to unlock it!",1800)}const ye=()=>k?.myPresence()??null,ks=()=>k?k.players.get(k.pid)?.look??null:null;function In(e,t){if(e===yt){const n=ks();if(!n||!k)return;k.setLook(Ea({...n,...t})),bt(),R==="street"&&ta(),R==="park"&&Lo(),R==="ranch"&&Ls();return}S.dispatch({type:"char/update",id:e,patch:t})}function nt(e){k?.setPresence(e)}function bp(e,t,n){const s=[];return k?.presence.forEach((o,i)=>{i!==k.pid&&o.where==="house"&&o.houseId===e&&o.room===t&&s.push(o)}),cy(n,s,{minX:80,maxX:he-80,minY:ko+60,maxY:Ce-20})}function fT(e){const t=ye();if(t&&t.where==="house"){const n=t.houseId?bp(t.houseId,e,t):t;nt({...t,room:e,x:n.x,y:n.y})}}function d2(e){Te=e,w1(e),Ne=null,setTimeout(()=>X2.update());for(const t of Object.keys(ma))delete ma[t];ze=e===ee?e.get().characters[0]?.id??null:yt,Mo(),Nt()}function vp(e,t,n,s){return`<div class="inner">${Et(e,n,s)}</div><div class="nametag">${me(t)}</div>`}let Fc=!1;function pT(){if(Fc||!k||R!=="house")return;const e=k,t=ye();if(!t||t.where!=="house"||t.houseId!==ue)return;const n=Kt(e.pid,t);if(!n)return;let s=!1;if(e.presence.forEach((l,c)=>{if(c===e.pid||l.where!=="house"||l.houseId!==ue||l.room!==t.room)return;const d=Kt(c,l);d&&d.item===n.item&&d.n===n.n&&(s=!0)}),!s)return;const o=t.room&&S.get().rooms[t.room]?t.room:S.get().currentRoom,i=S.get().rooms[o]?.items??[],a=i.find(l=>da(l.kind)&&Math.hypot(l.x-t.x,l.y-t.y)<420)??i.find(l=>da(l.kind))??i.find(l=>l.id===n.item)??null,r=[...$o(void 0,e.pid),{item:n.item,n:n.n}];Fc=!0;try{const l=Bl({releaseX:t.x,releaseY:t.y,hit:a,items:i,occupied:r,held:[],seatPiece:h=>Ba(h)});let c=l.seat&&!(l.seat.item===n.item&&l.seat.n===n.n)?{id:l.seat.item,pose:l.seat.pose,n:l.seat.n}:null,d=l.x,f=l.y;if(!c){const h=i.find(y=>y.id===n.item),u=ho(h?.x??t.x,xn(h?.kind??"chair")*(h?.scale||1),t.x);d=u.x,f=u.y}va(t,d,f,t.flip,c),bt()}finally{Fc=!1}}function bt(){const e=new Set;if(k&&Te!==ee&&R==="house"){const n=S.get().currentRoom,s=[...k.presence.entries()],o=ye();o&&s.push([k.pid,o]);for(const[i,a]of s){const r=k.players.get(i);if(!r||a.where!=="house"||a.houseId!==ue||a.room!==n)continue;e.add(i);let l=fs.get(i);(!l||!l.isConnected)&&(l=document.createElement("div"),l.className="char avatar "+(i===k.pid?"mine":"other"),l.dataset.pid=i,X.appendChild(l),fs.set(i,l),i===k.pid?hT(l):l.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation()}));const c=r.look,d=Kt(i,a),f=d?.pose??null,h=ea(S.get())===i,u=JSON.stringify(c)+r.nickname+(f||"")+(h?"h":"");if(l.dataset.look!==u){const w=l.querySelector(".bubble");l.innerHTML=vp(c,r.nickname,f,h),w&&l.appendChild(w),l.dataset.look=u}l.classList.toggle("holding",h);const y=Ps[c.size]??1,g=wt(n,d,a),v=d&&S.get().rooms[n].items.find(w=>w.id===d.item);if(l.classList.toggle("flipped",a.flip),l.classList.toggle("pose-sit",f==="sit"),l.classList.toggle("pose-lie",f==="lie"),l.classList.toggle("pose-lie-r",f==="lie"&&!!v?.flip),Vs(l,g.x,g.y,Yt*y,It*y),f&&(al(l,g,Yt*y,It*y),V1(l)),l.style.zIndex=String(v?1e3+v.z+1+d.n:5e3+Math.round(a.y)),Ra(l,c,i===k.pid),h){const w=xm(c,f);w?X1("avatar",i,l,w,g.y):K1("avatar",i)}}}const t=ea(S.get());k&&R==="house"&&t&&e.has(t)||Y1("avatar");for(const[n,s]of fs)(!e.has(n)||!s.isConnected)&&(e.has(n)||s.remove(),fs.delete(n));Kl(),So(),Xl(),$s(),pT(),Wa(),Ha(),za()}function hT(e){e.addEventListener("pointerdown",t=>{if(t.preventDefault(),t.stopPropagation(),Xt||!k)return;const n=ye();if(!n||n.where!=="house")return;const s=Qe(t.clientX,t.clientY),o=wt(S.get().currentRoom,Kt(k.pid,n),n),i={x:o.x-s.x,y:o.y-s.y};let a=o.x,r=!1;e.classList.add("lifted"),C.pick(),ba=!0,ts(t,{onMove(l){const c=Qe(l.clientX,l.clientY),d=ye();if(!d||d.where!=="house"||(Math.hypot(c.x-s.x,c.y-s.y)>6&&(r=!0),!r))return;const f=Math.max(40,Math.min(he-40,c.x+i.x)),h=Math.max(ko+40,Math.min(Ce,c.y+i.y)),u=Math.abs(f-a)>3?f<a:d.flip;Math.abs(f-a)>3&&(a=f),va(d,f,h,u,null),bt(),il(S.get()),Se.isPlay()&&(wa=ol(l.clientX,l.clientY)?.id??null)},onUp(l){ba=!1,wa=null,e.classList.remove("lifted");const c=ye();if(!r||!c||c.where!=="house"){C.click();return}const d=Qe(l.clientX,l.clientY),f=Math.max(40,Math.min(he-40,d.x+i.x)),h=Math.max(ko+40,Math.min(Ce,d.y+i.y));if(Se.isPlay()){const u=O1(l.clientX,l.clientY)??ol(l.clientX,l.clientY);cp(f,h,u)}else va(c,f,h,c.flip,null);bt(),il(S.get()),C.drop(),et(e),requestAnimationFrame(()=>Rs(!0))}})})}function uT(e){return e.kind==="text"?e.v:(e.kind==="phrase"?Ui:H0)[e.v]??""}function Ha(){const e=document.body.classList.contains("phone")?".bubble":".bubble, .nametag, .need-bubble.show",t=document.querySelectorAll(e),n=Z.getBoundingClientRect();if(!n.width)return;const s=dt()||1,o=4;t.forEach(i=>{i.style.marginLeft="0px",i.style.marginTop="0px";const a=i.getBoundingClientRect();if(!a.width||!a.height)return;let r=0,l=0;a.width>=n.width-o*2||a.left<n.left+o?r=n.left+o-a.left:a.right>n.right-o&&(r=n.right-o-a.right),a.top<n.top+o?l=n.top+o-a.top:a.bottom>n.bottom-o&&(l=n.bottom-o-a.bottom),r&&(i.style.marginLeft=r/s+"px"),l&&(i.style.marginTop=l/s+"px")})}const pi=Ha,gT=230,mT=88;function hr(){if(document.body.classList.contains("phone")){L("nudgeL")?.classList.remove("yield"),L("nudgeR")?.classList.remove("yield");return}const e=dt()||1,t=L("layer")||X;for(const n of["nudgeL","nudgeR"]){const s=L(n);if(!s||s.classList.contains("off")||s.offsetParent===null){s?.classList.remove("yield");continue}const o=s.getBoundingClientRect(),i=s.classList.contains("yield")?(gT-mT)*e:0,a=o.top+i,r=o.bottom+i;let l=!1;for(const c of t.querySelectorAll(".char .inner, .need-bubble.show")){const d=c.getBoundingClientRect();if(!(d.width<2||d.height<2)&&d.left<o.right-2&&d.right>o.left+2&&d.top<r-2&&d.bottom>a+2){l=!0;break}}s.classList.toggle("yield",l)}}function Wa(){hr(),requestAnimationFrame(()=>{hr(),requestAnimationFrame(hr)}),window.setTimeout(hr,50)}function yT(e,t){const n=R==="street"?document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`):R==="park"?document.querySelector(`#pavatars .savatar[data-pid="${e}"]`):R==="ranch"?document.querySelector(`#ravatars .savatar[data-pid="${e}"]`):R==="gameroom"?document.querySelector(`#gavatars .savatar[data-pid="${e}"]`):fs.get(e),s=n?[n]:[];for(const o of s){o.querySelector(".bubble")?.remove();const i=document.createElement("div");i.className="bubble"+(t.kind==="emote"?" emote":""),i.textContent=uT(t),o.appendChild(i),pi(),setTimeout(()=>i.classList.add("out"),4600),setTimeout(()=>i.remove(),5e3)}e!==k?.pid&&C.click()}function Jl(){const e=ye();if(!k||!e)return 0;let t=0;return k.presence.forEach(n=>{Tv(e,n)&&t++}),t}function So(){const e=Jl();L("btnChat").classList.toggle("glow",e>0),ec();const t=document.getElementById("chatNear");t&&(t.textContent=e?`${e} friend${e>1?"s":""} nearby can hear you`:"Walk closer to a friend to talk!",L("chatTray").classList.toggle("nobody",!e))}function f2(){const e=L("chatTray");if(!k)return;const t=document.body.classList.contains("phone"),n=`<div class="phrases">${Ui.map((a,r)=>`<button data-phrase="${r}">${me(a)}</button>`).join("")}</div>`,s=k.settings.freeChat?`<form class="typed" id="chatForm"><input id="chatInput" maxlength="${Pf}" autocomplete="off" autocorrect="on" enterkeyhint="send" placeholder="Type a message…"/><button type="submit">Send</button></form><div class="chatWarn" id="chatWarn"></div>`:'<div class="presetsOnly">Picking from the bubbles above 💬</div>',o=t?'<button type="button" class="chatMore" data-chat="more">more</button>':"";e.innerHTML=`<div class="chatHead"><span id="chatNear"></span><button class="close" data-chat="close">✕</button></div>
    <div class="emotes">${H0.map((a,r)=>`<button data-emote="${r}">${a}</button>`).join("")}</div>
    ${o}
    <div class="chatExtra${t?" hidden":""}">${n}${s}</div>`,So(),document.getElementById("chatForm")?.addEventListener("submit",a=>{a.preventDefault();const r=L("chatInput"),l=yv(r.value);if(!l.ok){L("chatWarn").textContent=Cl[l.reason]??"",C.pop();return}if(!Jl()){j("Walk closer to a friend to talk!");return}k.say({kind:"text",v:l.text}),r.value="",L("chatWarn").textContent="",r.blur()})}L("chatTray").addEventListener("click",e=>{const t=e.target;if(!k)return;if(t.closest('[data-chat="close"]')){L("chatTray").classList.add("hidden");return}const n=t.closest('[data-chat="more"]');if(n){const i=L("chatTray").querySelector(".chatExtra");i?.classList.toggle("hidden"),n.textContent=i&&!i.classList.contains("hidden")?"less":"more";return}const s=t.closest("[data-emote]"),o=t.closest("[data-phrase]");if(!(!s&&!o)){if(!Jl()){j("Walk closer to a friend to talk!");return}k.say(s?{kind:"emote",v:+s.dataset.emote}:{kind:"phrase",v:+o.dataset.phrase}),C.click()}});L("btnChat").addEventListener("click",()=>{L("chatTray").classList.toggle("hidden")||(f2(),C.swish())});function Mn(){const e=document.body.classList,n=!!k&&Te!==ee&&R==="house"?k.houses.get(ue):void 0,s=!!n&&n.meta.ownerId===k.pid;if(e.toggle("mode-hood",!!k),e.toggle("view-street",R!=="house"),e.toggle("view-park",R==="park"),e.toggle("view-ranch",R==="ranch"),e.toggle("view-map",R==="street"),e.toggle("view-gameroom",R==="gameroom"),e.toggle("in-barn",R==="ranch"&&qe),e.toggle("mode-play",R==="house"&&Se.isPlay()),q1(),Op(),w2(),e.toggle("own-house",s),e.toggle("locked",!!n&&!ht()),e.toggle("has-hood",!!Il()),ec(),n){const o=k.players.get(n.meta.ownerId)?.nickname??"";L("houseTag").innerHTML=`${n.meta.locked?"🔒 ":""}<b>${me(n.meta.name)}</b>${s?" · yours":o?" · "+me(o):""}`;const i=L("lockIco");i&&(i.innerHTML=n.meta.locked?Dt.lockOn:Dt.lockOff);const a=n.meta.locked?"Unlock my house":"Lock my house";L("btnLock").setAttribute("aria-label",n.meta.locked?"Unlock my house":"Lock my house");const r=L("lockLabel");r&&(r.textContent=a)}So(),wT(),document.body.classList.contains("phone")&&M1()}let jc="",fl=0;function wT(){const e=L("houseTag"),t=!!k&&R==="house"&&!document.body.classList.contains("own-house");if(R!=="house"||!k){jc="",e.classList.remove("show");return}if(t){e.classList.add("show");return}const n=ue||"solo";jc!==n&&(jc=n,e.classList.add("show"),window.clearTimeout(fl),fl=window.setTimeout(()=>e.classList.remove("show"),2e3))}L("btnLock").addEventListener("click",()=>{const e=k?.houses.get(ue);!e||e.meta.ownerId!==k.pid||(k.lock(e.meta.id,!e.meta.locked),C.click(),j(e.meta.locked?"Unlocked: friends can decorate!":"Locked: friends can look but not change things"))});const St=new Map;let Zu="",tf=0,Ze={w:qn,h:Fn,portrait:!1};function bT(){return document.body.classList.contains("phone-portrait")?!0:document.body.classList.contains("phone")?!1:window.innerHeight>=window.innerWidth*1.25}function p2(){const e=L("street"),t=Ze.portrait&&!document.body.classList.contains("phone")?24:0,n=Math.max(1,e.clientWidth-t),s=Math.max(1,e.clientHeight-t);return Math.min(n/Ze.w,s/Ze.h)}function vT(e){const t=L("street"),n=L("mapWorld"),s=Ze.w*e,o=Ze.h*e;n.style.marginLeft=Math.max(0,Math.floor((t.clientWidth-s)/2))+"px",n.style.marginTop=Math.max(0,Math.floor((t.clientHeight-o)/2))+"px",t.scrollLeft=0,t.scrollTop=0,h2()}function h2(){const e=L("street"),t=L("mapWorld"),n=4,s=e.clientWidth-n,o=e.clientHeight-n,i=t.offsetLeft,a=t.offsetTop;t.querySelectorAll(".mapSign").forEach(r=>{r.style.transform="translateX(-50%)";const l=r.offsetWidth,c=r.offsetHeight,d=i+r.offsetLeft-l/2,f=a+r.offsetTop;let h=0,u=0;d<n&&(h=n-d),d+l+h>s&&(h-=d+l+h-s),f<n&&(u=n-f),f+c+u>o&&(u-=f+c+u-o),kT(r,h,u,i,a,n,s,o)})}function kT(e,t,n,s,o,i,a,r){const l=[...e.parentElement.querySelectorAll(".mapMail")],c=()=>{const f=e.offsetWidth,h=e.offsetHeight,u=s+e.offsetLeft-f/2+t,y=o+e.offsetTop+n;return{left:u,top:y,right:u+f,bottom:y+h,width:f,height:h}};for(let f=0;f<6;f++){const h=c(),u=l.find(_=>{const P=s+_.offsetLeft,$=o+_.offsetTop,M=P+_.offsetWidth,z=$+_.offsetHeight;return h.right>P+2&&h.left<M-2&&h.bottom>$+2&&h.top<z-2});if(!u)break;const y=s+u.offsetLeft,g=o+u.offsetTop,v=g+u.offsetHeight,w=c(),m=v+4-w.top,b=w.bottom-(g-4);w.top+m+w.height<=r?n+=m:w.top-b>=i?n-=b:t-=Math.min(w.right,y+u.offsetWidth)-Math.max(w.left,y)+6}const d=c();d.left<i&&(t+=i-d.left),d.right>a&&(t-=d.right-a),d.top<i&&(n+=i-d.top),d.bottom>r&&(n-=d.bottom-r),e.style.transform=Math.abs(t)>.5||Math.abs(n)>.5?`translate(calc(-50% + ${t.toFixed(1)}px), ${n.toFixed(1)}px)`:"translateX(-50%)"}document.fonts?.ready.then(()=>{R==="street"&&h2()});function _T(){return k?[...k.houses.values()].map(e=>e.meta).sort((e,t)=>e.slot-t.slot):[]}function $T(e){const s=Math.round(97.5),o=Math.max(1,Math.ceil(e/(e===1?1:2))),i=158,a=318,l=a+(o-1)*i+s/2+108,c=Math.max(1020,l+78),d=Math.max(l,Math.min(c-88,Math.round(c*.74))),f=e===1?[280]:[150,410],h=e===1?1:2,u=Array.from({length:e},(y,g)=>({x:f[g%h],y:a+Math.floor(g/h)*i}));return{w:560,h:c,hw:104,hh:s,houses:u,square:{x:280,y:d},park:{x:96,y:122},club:{x:280,y:116},ranch:{x:458,y:120}}}function Gu(e,t,n,s){return!e||e.mine||!Rm()?"":`<button class="mapKnock" data-knock="${e.id}" aria-label="Knock at ${me(e.name)} for a treat" style="left:${s(t)};top:${s(n)}"><span>🎃</span></button>`}const Yu=new Map;function u2(){const e=L("street");let t=document.getElementById("candyBucket");if(!Rm()){t?.remove();return}t||(t=document.createElement("div"),t.id="candyBucket",t.className="candyBucket",t.setAttribute("aria-live","polite"),e.appendChild(t));const n=Am(localStorage);t.innerHTML=`<span class="pail">🎃</span><b>${n}</b>`,t.setAttribute("aria-label",`${zm(n,"treat")} in your bucket`)}function xT(e){const{treat:t}=r7(localStorage);u2(),et(e),C.pop();const n=document.createElement("span");n.className="treatPop",n.textContent=t,e.appendChild(n),setTimeout(()=>n.remove(),900);const s=document.getElementById("candyBucket");s&&et(s),k&&k.knock(e.dataset.knock)}function ao(e=!1){if(R!=="street")return;const t=L("mapWorld"),n=_T(),s=k?n.map(h=>({id:h.id,name:h.name,style:h.style,locked:h.locked,mine:h.ownerId===k.pid,lit:!!k.players.get(h.ownerId)?.online})):tf?Array.from({length:tf},(h,u)=>({id:"fake"+u,name:["Reagan","Quinn","Chloe","Sloane","Cada","Emma","Olivia","Charlotte","Amelia","Sophia","Isabella","Mia"][u%12]+"'s House",style:u,locked:u===3,mine:u===0,lit:u%3!==1})):[null],o=bT()?$T(Math.max(1,s.length)):null;Ze=o?{w:o.w,h:o.h,portrait:!0}:{w:qn,h:Fn,portrait:!1},document.body.classList.toggle("map-tall",!!o&&!document.body.classList.contains("phone"));const i=p2(),a=(Ze.portrait?"P":"L")+Ze.w+"x"+Ze.h+":"+i.toFixed(3)+JSON.stringify(n)+(k?n.map(h=>(k.players.get(h.ownerId)?.online?1:0)+(Zc(h.id)?"u":"")).join("")+k.pid:"solo");if(!e&&a===Zu&&t.querySelector("#mapFaces")){ta();return}Zu=a,t.style.width=Ze.w*i+"px",t.style.height=Ze.h*i+"px",t.style.setProperty("--sc",String(i)),t.innerHTML=`<div class="mapClip">${o?fy(o.w,o.h):dy()}</div>`;const r=t.querySelector(".mapClip");bo(r,o?"map-portrait":"map");const l=h=>h*i+"px";St.clear();const c=s.length;let d="",f="";if(o){const{hw:h,hh:u}=o,y=34,g=40;s.forEach((b,_)=>{const P=o.houses[_]??o.houses[0],$=b?`house:${b.id}`:"home",M=b?b.name:"My House";St.set(b?"house:"+b.id:"home",{x:P.x,y:P.y-u/2-8});const z=!!(b&&Zc(b.id)),V=P.x<o.w/2,U=V?Math.max(4,P.x-h/2-y-8):Math.min(o.w-y-4,P.x+h/2+8),F=Math.max(4,Math.min(o.h-g-4,P.y-u*.42));d+=`<button class="mapSpot mapHouse ${b?.mine||!b?"mine":""}" data-go="${$}" aria-label="${me(M)}" style="left:${l(P.x-h/2)};top:${l(P.y-u/2)};width:${l(h)};height:${l(u)}">${qr(b?b.style:0,{lit:b?b.lit:!0})}${b?.locked?'<span class="lockBadge">🔒</span>':""}${b?.mine||!b?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${z?"up":""}" data-mail="${b?b.id:"home"}" aria-label="${me(M)} mailbox" style="left:${l(U)};top:${l(F)};width:${l(y)};height:${l(g)}">${yh(z)}</button>${Gu(b,V?P.x+h/2-30:P.x-h/2-10,P.y+u*.12,l)}`,f+=`<div class="mapSign ${b?.mine||!b?"mine":""}" style="left:${l(P.x)};top:${l(P.y+u/2+2)}">${me(M)}</div>`});const v=(b,_,P,$,M,z,V,U,F)=>{d+=`<button class="mapSpot ${b}" data-go="${_}" aria-label="${P}" style="left:${l(M-V/2)};top:${l(z-U/2)};width:${l(V)};height:${l(U)}">${$}</button>`,f+=`<div class="mapSign place" style="left:${l(M)};top:${l(z+F)}">${P==="The Park"?"Park":P==="Rainbow Ranch"?"Rainbow Ranch":"Clubhouse"}</div>`};v("mapPark","park","The Park",Qp,o.park.x,o.park.y,148,126,68),v("mapRanch","ranch","Rainbow Ranch",Np,o.ranch.x,o.ranch.y,156,128,72),v("mapClub","gameroom","The Clubhouse",qp,o.club.x,o.club.y,146,120,68),St.set("park",{x:o.park.x,y:o.park.y-78}),St.set("ranch",{x:o.ranch.x,y:o.ranch.y-80}),St.set("barn",{x:o.ranch.x,y:o.ranch.y+8}),St.set("gameroom",{x:o.club.x,y:o.club.y-74}),St.set("square",o.square);const w=[{x:o.park.x,y:o.park.y,r:90},{x:o.ranch.x,y:o.ranch.y,r:96},{x:o.club.x,y:o.club.y,r:88},{x:o.square.x,y:o.square.y,r:70},...o.houses.map(b=>({x:b.x,y:b.y,r:78}))],m=o.w/2;r.insertAdjacentHTML("beforeend",Up(w,(b,_)=>Math.abs(b-m)<34,o.w,o.h)+uy(o.w,o.h,w)+d+'<div class="mapFaces" id="mapFaces"></div>')}else{const h=t.querySelector("#mapRoad"),u=h.getTotalLength(),y=Array.from({length:160},(_,P)=>h.getPointAtLength(u*P/159)),g=(_,P)=>y.some($=>Math.hypot($.x-_,$.y-P)<50),v=nf(),w=c>8?80:94,m=w*300/320,b=g2(h,c,v);s.forEach((_,P)=>{const $=b[P],M=_?`house:${_.id}`:"home",z=_?_.name:"My House";St.set(_?"house:"+_.id:"home",{x:$.x,y:$.y-m/2-4});const V=!!(_&&Zc(_.id)),U=34,F=40,oe=14/i,we=Math.max(4,Math.min(qn-U-4,$.x+w/2+oe)),Ke=Math.max(4,Math.min(Fn-F-4,$.y-m*.22));d+=`<button class="mapSpot mapHouse ${_?.mine||!_?"mine":""}" data-go="${M}" aria-label="${me(z)}" style="left:${l($.x-w/2)};top:${l($.y-m/2)};width:${l(w)};height:${l(m)}">${qr(_?_.style:0,{lit:_?_.lit:!0})}${_?.locked?'<span class="lockBadge">🔒</span>':""}${_?.mine||!_?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${V?"up":""}" data-mail="${_?_.id:"home"}" aria-label="${me(z)} mailbox" style="left:${l(we)};top:${l(Ke)};width:${l(U)};height:${l(F)}">${yh(V)}</button>${Gu(_,Math.max(4,$.x-w/2-40/i),$.y-m*.05,l)}`,f+=`<div class="mapSign ${_?.mine||!_?"mine":""}" style="left:${l($.x)};top:${l($.y+m/2-2)}">${me(z)}</div>`}),d+=`<button class="mapSpot mapPark" data-go="park" aria-label="The Park" style="left:${l(as.x-100)};top:${l(as.y-85)};width:${l(200)};height:${l(170)}">${Qp}</button>`,f+=`<div class="mapSign place" style="left:${l(as.x)};top:${l(as.y+70)}">Park</div>`,d+=`<button class="mapSpot mapRanch" data-go="ranch" aria-label="Rainbow Ranch" style="left:${l(mn.x-110)};top:${l(mn.y-90)};width:${l(220)};height:${l(180)}">${Np}</button>`,f+=`<div class="mapSign place" style="left:${l(mn.x)};top:${l(mn.y+78)}">Rainbow Ranch</div>`,d+=`<button class="mapSpot mapClub" data-go="gameroom" aria-label="The Clubhouse" style="left:${l(rs.x-95)};top:${l(rs.y-78)};width:${l(190)};height:${l(156)}">${qp}</button>`,f+=`<div class="mapSign place" style="left:${l(rs.x)};top:${l(rs.y+82)}">Clubhouse</div>`,St.set("park",{x:as.x,y:as.y-60}),St.set("ranch",{x:mn.x-30,y:mn.y-60}),St.set("barn",{x:mn.x+10,y:mn.y+10}),St.set("gameroom",{x:rs.x,y:rs.y-52}),r.insertAdjacentHTML("beforeend",Up(v,g)+d+'<div class="mapFaces" id="mapFaces"></div>')}t.insertAdjacentHTML("beforeend",f),u2(),ta(),vT(i),ta()}const nf=()=>[{x:as.x,y:as.y,r:115},{x:mn.x,y:mn.y,r:125},{x:wn.x,y:wn.y,r:100},{x:rs.x,y:rs.y,r:90}];function g2(e,t,n){const s=e.getTotalLength(),o=[];for(let i=0;i<t;i++){const a=t===1?.2:.05+.75*i/(t-1),r=e.getPointAtLength(s*a),l=e.getPointAtLength(Math.min(s,s*a+3));let c=-(l.y-r.y),d=l.x-r.x;const f=Math.hypot(c,d)||1;c/=f,d/=f;const h=[1,-1].map(g=>({x:r.x+c*72*g,y:r.y+d*72*g})).map(g=>({...g,score:Math.min(...n.map(v=>Math.hypot(v.x-g.x,v.y-g.y)-v.r),g.x-50,qn-50-g.x,g.y-60,Fn-40-g.y)})),u=i%2?h:[h[1],h[0]],y=u[0].score>0||u[0].score>=u[1].score?u[0]:u[1];y.x=Math.max(60,Math.min(qn-60,y.x)),y.y=Math.max(62,Math.min(Fn-72,y.y)),n.push({x:y.x,y:y.y,r:70}),o.push({x:y.x,y:y.y})}return o}window.__mapFake=e=>{tf=e,ao(!0)};window.__mapLayout=e=>{const t=document.querySelector("#mapRoad");if(!t)return null;const n=g2(t,e,nf());let s=1e9,o=1e9,i=!0;return n.forEach((a,r)=>{n.forEach((l,c)=>{c>r&&(s=Math.min(s,Math.hypot(a.x-l.x,a.y-l.y)))}),nf().forEach(l=>{o=Math.min(o,Math.hypot(a.x-l.x,a.y-l.y)-l.r)}),(a.x<55||a.x>qn-55||a.y<60||a.y>Fn-70)&&(i=!1)}),{n:e,minHouse:s,minSpot:o,inside:i}};function m2(e){return e.where==="house"&&e.houseId?{kind:"house",houseId:e.houseId,room:e.room}:e.where==="park"||e.where==="ranch"||e.where==="barn"||e.where==="gameroom"?{kind:e.where}:{kind:"square"}}const MT=e=>e.kind==="house"?"house:"+e.houseId:e.kind;function ta(){const e=document.getElementById("mapFaces");if(!e||R!=="street")return;const t=p2(),n=new Set,s=[];if(k){const i=[...k.presence.entries()],a=ye();a&&i.push([k.pid,a]);for(const[r,l]of i){const c=k.players.get(r);c&&s.push({key:r,look:c.look,name:c.nickname,mine:r===k.pid,place:m2(l)})}}else{const i=ee.get().characters[0];i&&s.push({key:"solo",look:Ea(i),name:"You",mine:!0,place:{kind:"square"}})}const o=new Map;for(const i of s){const a=MT(i.place);o.has(a)||o.set(a,[]),o.get(a).push(i)}for(const[i,a]of o)a.sort((r,l)=>r.mine?-1:l.mine?1:r.name.localeCompare(l.name)),a.forEach((r,l)=>{let c,d;const f=St.get("square")??{x:wn.x,y:wn.y};if(i==="square")if(Ze.portrait){const w=Math.floor(l/3),m=l%3,b=Math.min(3,a.length-w*3);c=f.x+(m-(b-1)/2)*176,d=f.y+w*112}else if(a.length===1)c=wn.x,d=wn.y;else{const g=-Math.PI/2+l*(Math.PI*2/a.length);c=wn.x+Math.cos(g)*78,d=wn.y+Math.sin(g)*78}else{const g=St.get(i)??f,v=Ze.portrait?2:3,w=Ze.portrait?150:64,m=Math.floor(l/v),b=l%v,_=Math.min(v,a.length-m*v);c=g.x+(b-(_-1)/2)*w,d=g.y-m*(Ze.portrait?108:64)}Ze.portrait&&(c=Math.max(100,Math.min(Ze.w-100,c)),d=Math.max(48,Math.min(Ze.h-84,d))),{fx:c,fy:d}=ET(c,d,t),n.add(r.key);let h=e.querySelector(`.mapFace[data-pid="${r.key}"]`);h||(h=document.createElement("button"),h.className="mapFace "+(r.mine?"mine":"other"),h.dataset.pid=r.key,h.setAttribute("aria-label",r.mine?"You":r.name),e.appendChild(h));const u=JSON.stringify(r.look)+r.name;if(h.dataset.look!==u){const g=h.querySelector(".bubble");h.innerHTML=`<span class="face">${df(Et(r.look))}</span><span class="fname">${me(r.mine?"You":r.name)}</span>`,g&&h.appendChild(g),h.dataset.look=u}h.dataset.place=i;const y=Ze.portrait?62:46;h.style.left=(c-y/2)*t+"px",h.style.top=(d-y/2)*t+"px",h.style.width=h.style.height=y*t+"px"});e.querySelectorAll(".mapFace").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),So()}const LT=54;function ET(e,t,n){const s=document.querySelector("#mapWorld .mapFaces");if(!s)return{fx:e,fy:t};const o=s.getBoundingClientRect(),i=[...document.querySelectorAll("#mapWorld .mapMail, #mapWorld .mapKnock")].map(u=>u.getBoundingClientRect()).filter(u=>u.width>0).map(u=>({x:(u.left+u.width/2-o.left)/n,y:(u.top+u.height/2-o.top)/n})),a=LT/n,r=(u,y)=>!i.some(g=>Math.abs(g.x-u)<a&&Math.abs(g.y-y)<a);if(r(e,t))return{fx:e,fy:t};const l=a+.5,c=[e,...i.flatMap(u=>[u.x-l,u.x+l])],d=[t,...i.flatMap(u=>[u.y-l,u.y+l])];let f=null,h=1e9;for(const u of c)for(const y of d){if(u<24/n||u>Ze.w-24/n||y<24/n||y>Ze.h-24/n||!r(u,y))continue;const g=Math.hypot(u-e,y-t);g<h&&(h=g,f={fx:u,fy:y})}return f&&(e=f.fx,t=f.fy),{fx:e,fy:t}}function kp(){L("mapWorld").classList.remove("zoomIn")}function y2(e,t){kp(),C.swish(),ST(e)}function Va(e){es()||(e.classList.remove("sceneIn"),e.offsetWidth,e.classList.add("sceneIn"),setTimeout(()=>e.classList.remove("sceneIn"),260))}function ST(e){e.kind==="house"?v2(e.houseId,e.room):e.kind==="home"?b2():e.kind==="park"?DT():e.kind==="ranch"?$a(!1):e.kind==="barn"?$a(!0):e.kind==="gameroom"&&WT()}function TT(e){const t=k?.presence.get(e);if(!k||!t)return;const n=m2(t),s=k.players.get(e)?.nickname??"your friend";if(n.kind==="square"){j(`${s} is on the map too! 👋`),C.pop();return}document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`),y2(n),setTimeout(()=>{const o=ye();if(!o||!k)return;const i=t.x+(t.x>300?-110:110);if(n.kind==="house"&&o.where==="house")nt({...o,x:i,y:t.y}),bt(),Gl(i-Y/2);else if((n.kind==="park"||n.kind==="ranch"||n.kind==="barn")&&o.where===n.kind){cn({...o,x:i,y:Math.max(fo,Math.min(Zn,t.y)),flip:i>t.x});const a=n.kind==="park"?Us():hn(),r=L(n.kind==="park"?"parkScroll":"ranchScroll");requestAnimationFrame(()=>{r.scrollLeft=t.x*a-r.clientWidth/2,ft()})}else if(n.kind==="gameroom"&&o.where==="gameroom"){const a=li();a||cn({where:"gameroom",x:i,y:Math.max(fo,Math.min(Zn,t.y)),flip:i>t.x});const r=Ds(),l=L("grScroll"),c=a?.x??t.x;requestAnimationFrame(()=>{l.scrollLeft=c*r-l.clientWidth/2,ft()})}j(`You found ${s}! 💕`)},420)}function Zc(e){if(!k)return!1;const t=k.houses.get(e);return!!t&&t.meta.ownerId===k.pid&&wf(t.confirmed.mailbox)>0}let ur=0;function w2(){L1();const e=document.getElementById("mailCue"),t=k?.myHouseId()??"",n=k&&t?wf(k.houses.get(t)?.confirmed.mailbox):0;if(!k||R!=="street"||n<=0){n<=0&&(ur=0),e?.classList.remove("show");return}ur!==n&&(ur=n,e?.classList.add("show"),window.setTimeout(()=>{ur===n&&e?.classList.remove("show")},8e3))}function ec(){const e=k?.myHouseId()??"",t=k&&e?wf(k.houses.get(e)?.confirmed.mailbox):0,n=L("menuBadge");n.textContent=t>9?"9+":String(t),n.classList.toggle("on",t>0);const s=document.getElementById("mailNew");s&&(s.textContent=t>0?t===1?"1 new":t+" new":"",s.classList.toggle("on",t>0));const o=k?k.presence.size:0,i=L("mapBadge");i.textContent=o>9?"9+":String(o),i.classList.toggle("on",o>0),L("btnMap").setAttribute("aria-label",o>0?`Map, ${zm(o,"friend")} online`:"Map");const a=Jl(),r=L("chatBadge");r.textContent=a>9?"9+":String(a),r.classList.toggle("on",a>0)}function pl(e){e&&document.querySelectorAll(".toast").forEach(t=>t.remove()),L("menuPop").classList.toggle("hidden",!e),L("btnMenu").setAttribute("aria-expanded",e?"true":"false"),L("btnPhoto").classList.toggle("ok",R==="house"),e&&ec(),PT()}L("btnPhoto").addEventListener("click",()=>{pl(!1),requestAnimationFrame(()=>requestAnimationFrame(()=>{t7(Z,()=>C.click())}))});function PT(){const e=L("houseTag");if(e.style.top="",!e.classList.contains("show")||L("menuPop").classList.contains("hidden"))return;const t=document.querySelector(".menuCard");if(!t)return;const n=L("stageWrap").getBoundingClientRect(),s=t.getBoundingClientRect(),o=e.getBoundingClientRect();if(!(o.top<s.bottom-2&&o.bottom>s.top+2&&o.left<s.right-2&&o.right>s.left+2))return;const a=s.bottom-n.top+8;a+o.height<n.height-8?e.style.top=a+"px":e.style.top=Math.max(8,n.height-o.height-10)+"px"}L("btnMenu").addEventListener("click",()=>{pl(L("menuPop").classList.contains("hidden")),C.click()});L("menuPop").addEventListener("click",e=>{const t=e.target;if(t.id==="menuPop"||t.closest("#menuClose")){pl(!1);return}t.closest(".menuRow")&&pl(!1)});L("btnStudio").addEventListener("click",()=>N1());L("btnMail").addEventListener("click",()=>{const e=k?.myHouseId();e?_p(e):j("Join a street to send letters!")});L("secrets").addEventListener("click",()=>{if(R!=="house"){j("Surprises are hiding in your house!");return}Se.isPlay()&&L("modeDecorate").click(),zt="secrets",Nt(),j("Surprises are in your drawer!")});function _p(e){if(!k||e==="home"||!k.houses.has(e)){j("Join a street to send letters!");return}const t=k.houses.get(e);Pr.open(e,t.meta.name,t.meta.ownerId===k.pid,t.confirmed.mailbox?.letters??[]),C.click()}L("mapWorld").addEventListener("click",e=>{const t=e.target;if(R!=="street")return;const n=t.closest(".mapKnock");if(n){xT(n);return}const s=t.closest(".mapMail");if(s){_p(s.dataset.mail||"home");return}const o=t.closest(".mapFace");if(o){o.classList.contains("mine")?(et(o),C.pop(),j("That's you! Tap a place to go there")):TT(o.dataset.pid);return}const i=t.closest("[data-go]");if(!i)return;const a=i.dataset.go;y2(a.startsWith("house:")?{kind:"house",houseId:a.slice(6)}:{kind:a})});function To(){kp(),Um(),L("street").classList.add("hidden"),L("park").classList.add("hidden"),L("ranch").classList.add("hidden"),L("gameroom").classList.add("hidden"),Er()?.close(),L("chatTray").classList.add("hidden"),L("sheet").classList.add("hidden")}function Fo(){kp(),Ue=null,Ct=[],qe=!1,k?nt({where:"street",x:600,y:540,flip:!1}):Ut=null,To(),R="street",L("street").classList.remove("hidden"),L("streetTitle").textContent=k?"Our Neighborhood":"My Map",Mn(),ao(!0);const e=L("mapWorld");e.style.transformOrigin="50% 50%",e.classList.remove("zoomIn","mapIn"),es()||(e.offsetWidth,e.classList.add("mapIn")),C.swish()}function b2(){if(k){const e=k.myHouseId();e&&k.houses.has(e)&&v2(e);return}To(),R="house",Ut=null,Se.sync(!0),Mn(),Mo(),Va(L("stageWrap")),C.sparkle(),Cs()}function v2(e,t="living"){if(!k||!k.houses.has(e))return;ue=e,R="house",qe=!1,Se.sync(e===k.myHouseId());let n=sl.get(e);n||(n=zv(k,e,{get:()=>ee.get().soundOn,set:s=>ee.dispatch({type:"settings/sound",on:s})}),sl.set(e,n)),n.dispatch({type:"room/switch",room:t});{const s=bp(e,t,{x:900+Math.random()*300,y:540});nt({where:"house",houseId:e,room:t,x:s.x,y:s.y,flip:!1})}To(),d2(n),Va(L("stageWrap")),C.sparkle(),Cs()}function $p(){k?.close(),k=null,sl=new Map,R="house",ue="",Ut=null,Ue=null,Ct=[],qe=!1,L("elsewhere").classList.add("hidden"),To(),Se.sync(!0),d2(ee),Mn()}L("btnMap").addEventListener("click",()=>{if(R==="street"){C.pop();return}Fo()});L("btnHome").addEventListener("click",()=>{if(R==="house"&&(!k||ue===k.myHouseId())){C.pop();return}b2()});L("phoneOk").addEventListener("click",()=>{L("phoneNote").classList.add("hidden"),C.click()});L("elsewhereGo").addEventListener("click",()=>{C.click(),k?.connect()});L("btnSolo").addEventListener("click",()=>{$p(),j("Playing in your own house 🏠")});window.addEventListener("resize",()=>{R==="street"&&ao(!0),R==="park"&&Lp(),R==="ranch"&&Cp(),R==="gameroom"&&Jf(),ft()});function xp(e){k=e,sl=new Map,e.on("players",()=>{k===e&&(R==="street"?ao():R==="park"?Lo():R==="ranch"?(Ls(),Op()):R==="gameroom"?Xi():(bt(),Mn()),ka==="dress"&&yn())}),e.on("houses",()=>{k===e&&(R==="street"?ao():R==="house"&&!e.houses.has(ue)&&(j("That house is gone now"),Fo()))}),e.on("houseMeta",n=>{k!==e||n!==ue||R!=="house"||(Ne=null,Mn(),Rt(S.get()),Nt(),ht()||L("sheet").classList.add("hidden"))}),e.on("pres",()=>{k===e&&(R==="street"?ta():R==="park"?Lo():R==="ranch"?Ls():R==="gameroom"?Xi():bt())}),e.on("art",(n,s)=>{if(!(k!==e||!s||typeof s!="object")){for(const[o,i]of Object.entries(s)){r1(o,i);const a=Ar.get(o);a&&(Ar.delete(o),R==="house"&&a.houseId===ue&&Z1(a.room,o,a.frame,a.x))}R==="house"&&n===ue&&Rt(S.get())}}),e.on("artFail",(n,s,o)=>{k===e&&(Ar.delete(s),o==="full"?j("Your walls are full of art! Take one down to hang a new one."):o==="streetfull"?j("The street is full of art! Take one down to hang a new one."):o==="slow"?j("So much art! Wait a moment, then hang it again."):o==="locked"&&j("This house is closed right now. Paint at home!"))}),e.on("ranch",()=>{k===e&&R==="ranch"&&ac(!0)}),e.on("ranchFail",n=>{k===e&&of(n)}),e.on("noride",()=>{if(k!==e)return;const n=ye();if(n?.ride!==void 0){const{ride:s,...o}=n;nt(o),Ls()}j("Someone is riding that horse!")}),e.on("fx",(n,s)=>{k===e&&lP(n,s)}),e.on("bubble",(n,s)=>{k===e&&yT(n,s)}),e.on("knocked",(n,s)=>{if(k!==e)return;const o=Date.now();(Yu.get(s)??0)>o-2e4||(Yu.set(s,o),j(l7(s)))}),e.on("sayFail",n=>j(n==="presetsOnly"?"Typing is off. Pick a bubble!":Cl[n]||"Couldn't send that. Try again!")),e.on("mailbox",()=>{k===e&&(R==="street"&&ao(!0),w2(),Pr.refresh(),ec())}),e.on("mailFail",n=>{k===e&&Pr.fail(n)}),e.on("settings",()=>{k===e&&(L("chatTray").classList.contains("hidden")||f2(),Pr.refresh())}),e.on("removed",()=>{j("A grown-up took this iPad off the street");const n=e.cfg;Vn({url:n.url,code:n.code,id:n.id,parentKey:n.parentKey}),$p()}),e.on("status",n=>{k===e&&(document.body.classList.toggle("reconnecting",n!=="online"&&!e.replaced),(n==="online"||n==="connecting")&&L("elsewhere").classList.add("hidden"))}),e.on("replaced",()=>{k===e&&L("elsewhere").classList.remove("hidden")}),e.on("table",()=>{if(k===e){if(R==="gameroom"){const n=li(),s=ye();n&&s?.where==="gameroom"&&Math.hypot(s.x-n.x,s.y-n.y)>40&&nt({where:"gameroom",x:n.x,y:Math.max(fo,Math.min(Zn,n.y)),flip:s.flip}),Xi()}Er()?.refresh()}}),e.on("tblFail",(n,s)=>{k===e&&Er()?.fail(n,s)}),e.on("welcome",()=>{if(k===e)if(R==="street")ao(!0);else if(R==="park"||R==="ranch"){const n=ye();n&&nt(n),R==="park"?Lp():Cp(),ft()}else if(R==="gameroom"){const n=ye();n&&nt(n),Jf(),ft(),Er()?.refresh()}else e.houses.has(ue)?Mo():Fo()}),e.on("reset",(n,s,o)=>{if(k!==e)return;const i=G7(s,o);i&&j(i)});const t=K7(5e3);e.on("act",(n,s,o,i)=>{if(k!==e||R!=="house"||n!==ue||!o||o===e.pid||s.type!=="item/move"&&s.type!=="item/delete"||s.room!==S.get().currentRoom||!t(o+":"+s.id))return;const a=Y7(e.players.get(o)?.nickname??"",s,de[i]?.name??"");a&&j(a,2e3)}),Fo()}async function AT(){Mn();const e=Il(),t=Go();if(!e||!t?.token||t.url!==e)return;const n=new Ol(t),s=await n.connect();s==="ok"?xp(n):(n.close(),s!=="closed"&&j("Couldn't reach the street. Playing at home!"))}function Jt(e,t,n=""){const s=document.createElement("div");s.className="sheet hoodSheet "+n,s.innerHTML=`<div class="card">${e}</div>`,document.body.appendChild(s),C.swish();const o=()=>s.remove();return s.addEventListener("click",i=>{const a=i.target;if(a===s||a.closest('[data-m="close"]'))return o();t(a,o,s)}),{root:s,close:o}}const en='<button class="close" data-m="close">✕</button>';L("btnHood").addEventListener("click",()=>RT());function RT(){const e=Il();if(!e){Jt(`${en}<h2>Neighborhood</h2><p class="hint">The street isn't open yet. Ask a grown-up to set it up!</p>`,()=>{});return}const t=Go()?.url===e?Go():null;Jt(`${en}<h2>Neighborhood</h2><div class="bigBtns">
      ${t?.token?`<button class="big go" data-m="go">${Dt.street}<span>Go to my street</span></button>`:`<button class="big go" data-m="join">${Dt.street}<span>Join a friend's street</span></button>`}
      <button class="big grown" data-m="create">${Dt.shield}<span>${t?.parentKey?"Grown-ups":"Grown-ups: start a street"}</span></button></div>`,async(n,s)=>{const o=n.closest("[data-m]")?.dataset.m;if(o==="go"){s();const i=new Ol(t),a=await i.connect();a==="ok"?xp(i):(i.close(),j(a.startsWith("badtoken")?"Let's join again. Tap your name!":"Couldn't reach the street. Try again!"))}o==="join"&&(s(),na(e)),o==="create"&&(s(),await eg()&&(t?.parentKey?tc():CT(e)))})}async function CT(e){let t;try{t=await Pv(e)}catch{j("Couldn't create a street right now");return}Vn({url:e,code:t.code,id:t.id,parentKey:t.parentKey}),Jt(`${en}<h2>Your street is ready!</h2><p class="hint">Kids join with this code (you can pick your own on the grown-up screen):</p><div class="code" id="newCode">${t.code}</div>
    <p class="hint small">Grown-up key (keep it private; it opens the grown-up screen on another device):<br><b class="key" id="parentKey">${t.parentKey}</b></p>
    <div class="bigBtns"><button class="big grown" data-m="setup">${Dt.shield}<span>Add kids' names &amp; code</span></button>
    <button class="big go" data-m="joinhere">${Dt.street}<span>Join on this iPad</span></button></div>`,(n,s)=>{n.closest('[data-m="joinhere"]')&&(s(),Mp(e,t.code)),n.closest('[data-m="setup"]')&&(s(),tc())})}function na(e,t=""){const n=Jt(`${en}<h2>Join a street</h2><p class="hint">Type the code a grown-up gave you</p>
    <form id="codeForm" class="codeForm"><input id="codeInput" maxlength="${Tf}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="CODE"/><button type="submit" class="go">Next</button></form>
    <p class="err">${me(t)}</p>`,()=>{}),s=n.root.querySelector("#codeInput");setTimeout(()=>s.focus(),50),s.addEventListener("input",()=>{s.value=Wr(s.value)}),n.root.querySelector("#codeForm").addEventListener("submit",o=>{o.preventDefault();const i=Wr(s.value);if(!Bb(i)){n.close(),na(e,"Hmm, that code doesn't look right. Check it and try again!");return}n.close(),Mp(e,i)})}async function Mp(e,t,n=""){let s;try{s=await Av(e,t)}catch{na(e,"Couldn't reach the street. Try again!");return}if("slow"in s){na(e,"Too many tries. Ask a grown-up and try again in a few minutes.");return}if(!s.exists){na(e,"Hmm, we couldn't find that street. Check the code with a grown-up.");return}window.__lastLookupId=s.id,IT(e,t,s.id,s.roster,n)}function IT(e,t,n,s,o=""){if(s.length){Jt(`${en}<h2>Who are you?</h2>${o?`<p class="err">${me(o)}</p>`:s.every(i=>i.claimed)?`<p class="err" id="allSignedIn">${X7}</p>`:'<p class="hint">Tap your name</p>'}<div class="nicks roster">${s.map((i,a)=>`<button data-nick="${a}" ${i.claimed?"disabled":""}>${me(i.name)}${i.claimed?"<small>signed in</small>":""}</button>`).join("")}</div>
      <p class="hint small">Not on the list? Ask a grown-up to add your name.</p>`,(i,a)=>{const r=i.closest("[data-nick]");if(!r||r.disabled)return;a();const l=s[+r.dataset.nick];l.hasHouse?k2(e,t,n,l.name,void 0):Ku(e,t,n,l.name)},"wide");return}Jt(`${en}<h2>Pick your street name</h2>${o?`<p class="err">${me(o)}</p>`:""}<div class="nicks">${lh.map((i,a)=>`<button data-nick="${a}">${me(i)}</button>`).join("")}</div>`,(i,a)=>{const r=i.closest("[data-nick]");r&&(a(),Ku(e,t,n,lh[+r.dataset.nick]))},"wide")}function Ku(e,t,n,s){Jt(`${en}<h2>Hi, ${me(s)}!</h2><p class="hint">What should your house on the street be?</p>
    <div class="bigBtns"><button class="big go" data-m="bring">${qr(2)}<span>Bring my house</span></button>
    <button class="big" data-m="fresh">${qr(5)}<span>Start a new one</span></button></div>`,(o,i)=>{const a=o.closest("[data-m]")?.dataset.m;a&&(i(),k2(e,t,n,s,a==="bring"))})}function OT(e,t){const n=e.myHouseId();if(!n)return;let s=0;for(const o of Q1(t)){const i=ME(o);i&&s++<Vi&&e.saveArt(n,o,i)}s>Vi&&j(`Your first ${Vi} paintings came along. The rest stay safe on this iPad!`)}async function k2(e,t,n,s,o){const i=ee.get(),a=i.characters[0],r=Ea(a??{});let l;if(o&&(l=i,a)){const{reduce:y}=await Bs(()=>p(()=>Promise.resolve().then(()=>cb),void 0));l=y(i,{type:"char/delete",id:a.id})}const c=Go(),d={url:e,code:t,id:n,parentKey:c?.id===n||c?.code===t?c.parentKey:void 0},f=i.dog?{name:i.dog.name,breed:i.dog.breed}:null,h=new Ol(d),u=await h.connect({nickname:s,look:r,house:l,dog:f});if(u==="ok"){Vn(h.cfg),xp(h),j(`Welcome to the street, ${s}!`),l&&OT(h,l),HL()&&(WL(),ze=yt,ti("dress"));return}h.close(),u.startsWith("nickname")?Mp(e,t,u.endsWith("notOnList")?"That name is not on the list anymore.":"That name is already signed in on another iPad. Ask a grown-up!"):j(u==="full"?"That street is full right now. Try again later!":"Couldn't join right now. Try again in a minute!")}L("btnParent").addEventListener("click",async()=>{await eg()&&tc()});const BT={codeTaken:"That code is already used by another street. Try adding a number!",badCode:"Codes are 4–16 letters or numbers.",badName:"Use a first name only (letters).",rosterFull:`Up to ${zb} names.`,nameInUse:"Remove that player first.",codeFixed:"This street's code can't be changed."};async function tc(){const e=Go();if(!e)return;if(!e.parentKey){const l=Jt(`${en}<h2>Grown-up key</h2><p class="hint">Enter the key you got when the street was made</p><form id="keyForm" class="codeForm"><input id="keyInput" autocomplete="off" spellcheck="false"/><button class="go">OK</button></form>`,()=>{});l.root.querySelector("#keyForm").addEventListener("submit",c=>{c.preventDefault(),e.parentKey=l.root.querySelector("#keyInput").value.trim(),Vn(e),k&&(k.cfg.parentKey=e.parentKey),l.close(),tc()});return}let t=k;t||(t=new Ol({...e,token:void 0}),await t.connect());const n=t,s=l=>a.root.querySelector(l).value;let o=[];const i=l=>{const c=l.trim().replace(/\s+/g," "),d=o.find(f=>f.toLowerCase()===c.toLowerCase());if(d){j(J7(d));return}n.parent({op:"rosterAdd",name:l})},a=Jt(`${en}<h2>Grown-up screen</h2><div id="parentBody"><p class="hint">Loading…</p></div>`,async l=>{const c=l.closest("[data-p]");if(!c)return;const d=c.dataset.p;if(d==="free"&&n.parent({op:"freeChat",on:c.dataset.on!=="1"}),d==="freeMail"&&n.parent({op:"freeMail",on:c.dataset.on!=="1"}),d==="rename"&&n.parent({op:"rename",houseId:c.dataset.hid,name:s(`input[data-hid="${c.dataset.hid}"]`)}),d==="add"&&i(c.dataset.name??s("#rosterInput")),d==="unname"&&n.parent({op:"rosterRemove",name:c.dataset.name}),d==="unclaim"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent="Tap again";return}n.parent({op:"unclaim",name:c.dataset.name})}if(d==="setcode"&&n.parent({op:"setCode",code:s("#codeEdit")}),d==="remove"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent="Tap again to remove";return}n.parent({op:"remove",pid:c.dataset.pid})}if(d==="mailClear"||d==="mailClearAll"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent=d==="mailClearAll"?"Tap again to clear every mailbox":c.dataset.id?"Tap again":"Tap again to clear this mailbox";return}d==="mailClearAll"?n.parent({op:"mailClearAll"}):n.parent({op:"mailClear",houseId:c.dataset.hid,...c.dataset.id?{id:c.dataset.id}:{}})}if(d==="leave"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent="Tap again: forget this street here";return}Vn(null),a.close(),$p(),j("This iPad left the street")}},"wide parent");a.root.addEventListener("submit",l=>{l.preventDefault();const c=l.target.id;c==="rosterForm"&&i(s("#rosterInput")),c==="codeForm2"&&n.parent({op:"setCode",code:s("#codeEdit")})});const r=l=>{const c=new Date(l);return Number.isFinite(c.getTime())?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()]+" "+c.getDate()+", "+c.getFullYear():""};n.on("parentInfo",l=>{const c=a.root.querySelector("#parentBody");if(!c)return;const d=Go();d&&d.code!==l.code&&(d.code=l.code,Vn(d)),n.cfg.code=l.code;const f=l.roster??[];o=f.map(b=>b.name);const h=new Set(f.map(b=>b.name.toLowerCase())),u=Db.filter(b=>!h.has(b.toLowerCase())),y=f[0]?.name??"Reagan",g=Array.isArray(l.mail)?l.mail:[],v=g.some(b=>b.letters&&b.letters.length),w=N0(l.settings),m=g.map(b=>`<div class="pMailHouse"><div class="pMailName">${me(b.name||"House")}</div>${(b.letters||[]).slice().reverse().map(_=>`<div class="pLetter"><b>${me(_.from)}</b><span class="pWhen">${me(r(_.at))}</span><p>${me(_.text)}</p><button type="button" class="danger" data-p="mailClear" data-hid="${me(b.houseId)}" data-id="${me(_.id)}">Clear</button></div>`).join("")||'<p class="hint">No letters.</p>'}${(b.letters||[]).length?`<button type="button" class="danger" data-p="mailClear" data-hid="${me(b.houseId)}">Clear this mailbox</button>`:""}</div>`).join("");c.innerHTML=`${l.note?`<p class="err" id="pNote">${me(BT[l.note]??l.note)}</p>`:""}
      <div class="pRow"><div><div class="label">Invite code</div><div class="code small" id="pCode">${me(l.code)}</div></div>
        <div><div class="label">Free typing</div><button class="toggle ${l.settings.freeChat?"on":""}" data-p="free" data-on="${l.settings.freeChat?1:0}" id="pFree">${l.settings.freeChat?"On":"Off (presets only)"}</button><p class="hint small">Chat bubbles. Off means preset phrases only.</p></div>
        <div><div class="label">Let kids type their own letters</div><button class="toggle ${w?"on":""}" data-p="freeMail" data-on="${w?1:0}" id="pFreeMail">${w?"On":"Off (presets only)"}</button><p class="hint small">Letters only. Off means preset phrases only.</p></div></div>
      <div class="label">Letters</div><div id="parentMail">${m||'<p class="hint">No letters right now.</p>'}${v?'<button type="button" class="danger" data-p="mailClearAll" id="mailClearAll">Clear every mailbox</button>':""}</div>
      <form class="pAdd" id="codeForm2"><input id="codeEdit" maxlength="${Tf}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="e.g. ${me(Wr(y))}7"/><button data-p="setcode" type="button">Use this code</button></form>
      <p class="hint small">Tip: a word plus a number (like ${me(Wr(y))}7) is easy to remember and harder to guess. Not case-sensitive.</p>
      <div class="label">Kids' names (sign-in list)</div>
      <div class="roster">${f.map(b=>`<span class="rName ${b.claimed?"claimed":""}"><b>${me(b.name)}</b>${b.claimed?`<i>signed in</i><button data-p="unclaim" data-name="${me(b.name)}">Reset</button>`:b.hasHouse?"<i>not signed in</i>":`<button class="x" data-p="unname" data-name="${me(b.name)}" aria-label="Remove name">×</button>`}</span>`).join("")||'<p class="hint">No names yet: kids pick a fun nickname instead.</p>'}</div>
      <form class="pAdd" id="rosterForm"><input id="rosterInput" maxlength="20" autocomplete="off" placeholder="First name"/><button data-p="add" type="button">Add</button></form>
      ${u.length?`<div class="sugg">${u.map(b=>`<button data-p="add" data-name="${b}">+ ${b}</button>`).join("")}</div>`:""}
      <div class="label">Houses</div>${l.houses.map(b=>`<div class="pHouse"><input data-hid="${b.id}" value="${me(b.name)}" maxlength="24"/><button data-p="rename" data-hid="${b.id}">Rename</button></div>`).join("")||'<p class="hint">No houses yet.</p>'}
      <div class="label">Players</div>${l.players.map(b=>`<div class="pPlayer"><span class="dot ${b.online?"on":""}"></span>${me(b.nickname)}<button class="danger" data-p="remove" data-pid="${b.pid}">Remove</button></div>`).join("")||'<p class="hint">Nobody has joined yet.</p>'}
      <p class="hint small">Letters stay on the server for up to 30 days. They are filtered, and only a first name is stored. You can clear them here, or turn off “Let kids type their own letters” so new letters use preset phrases. Chat bubbles are only relayed to kids standing nearby and are not saved. No emails or last names. "Reset" signs a name out of its iPad so it can sign in again on another one (her house stays).</p>
      <button class="danger wideBtn" data-p="leave">Forget this street on this device</button>`}),n.on("error",l=>{l==="badkey"&&(j("That grown-up key didn't work"),e.parentKey=void 0,Vn(e),a.close())}),n.parent({op:"info"})}let Ut=null;function Us(){return L("park").clientHeight/Bf}const zT=()=>{const e=ee.get();return e.characters.find(t=>t.id===e.dog?.owner)??e.characters[0]},Ln=()=>k?ye():Ut;function cn(e){k?nt(e):Ut=e,R==="ranch"?Ls():R==="gameroom"?Xi():Lo()}function _s(e="park"){if(k){const n=[],s=[...k.presence.entries()],o=ye();o&&s.push([k.pid,o]);for(const[i,a]of s){const r=k.players.get(i);r&&a.where===e&&n.push({key:i,look:r.look,name:r.nickname,p:a,mine:i===k.pid,dog:r.dog??null})}return n}const t=zT();return Ut&&Ut.where===e?[{key:"solo",look:Ea(t??{}),name:"",p:Ut,mine:!0,dog:ee.get().dog??null}]:[]}function Lp(){const e=Us(),t=L("parkWorld"),n=s=>s*e+"px";t.style.width=Af*e+"px",t.style.height=Bf*e+"px",t.style.setProperty("--sc",String(e)),t.innerHTML=R4()+gd.map((s,o)=>s.kind==="swing"?`<div class="swing" data-swing="${o}" style="left:${n(s.x-30)};top:${n(sn)};width:${n(60)};height:${n(240)}">${C4}</div>`:"").join("")+gd.map((s,o)=>`<button class="pspot k-${s.kind}" data-spot="${o}" aria-label="${s.kind}" style="left:${n(s.x-50)};top:${n(s.y-(s.kind==="swing"?70:55))};width:${n(100)};height:${n(s.kind==="swing"?90:65)}"></button>`).join("")+`<button class="pspot slide" data-act="slide" aria-label="Slide" style="left:${n(ve.ladder-45)};top:${n(ve.top.y-30)};width:${n(130)};height:${n(560-ve.top.y+30)}"></button><button class="pspot pond" data-act="splash" aria-label="Pond" style="left:${n(1235)};top:${n(462)};width:${n(370)};height:${n(105)}"></button><button class="pspot gate" data-act="exit" aria-label="Back to the street" style="left:${n(25)};top:${n(240)};width:${n(180)};height:${n(260)}"></button><div class="ripples" id="ripples"></div><button class="ball" id="ball" aria-label="Ball">${I4}</button><div class="savatars" id="pavatars"></div>`,bo(t,"park"),hl(),Lo(),ft()}const Xu=2400;function Lo(){const e=document.getElementById("pavatars");if(!e||R!=="park")return;const t=Us(),n=new Set,s=new Set;for(const o of _s()){n.add(o.key);let i=e.querySelector(`.savatar[data-pid="${o.key}"]`);i||(i=document.createElement("div"),i.className="savatar "+(o.mine?"mine":"other"),i.dataset.pid=o.key,e.appendChild(i),o.mine&&_2(i));const a=JSON.stringify(o.look)+o.name;if(i.dataset.look!==a){const f=i.querySelector(".bubble");i.innerHTML=o.name?vp(o.look,o.name):`<div class="inner">${Et(o.look)}</div>`,f&&i.appendChild(f),i.dataset.look=a}const r=(Ps[o.look.size]??1)*t*.95,l=Yt*r,c=It*r;Nl(i,o.p.x*t-l/2+"px",o.p.y*t-c+"px"),i.style.width=l+"px",i.style.height=c+"px",i.style.zIndex=String(100+Math.round(o.p.y)),i.classList.toggle("flipped",o.p.flip),Ra(i,o.look,o.mine);const d=o.p.pose??"";i.dataset.pose!==d&&(i.classList.remove("pose-sit","pose-swing","pose-slide"),i.offsetWidth,d==="slide"&&(i.style.setProperty("--sx",(ve.top.x-ve.bottom.x)*t+"px"),i.style.setProperty("--sy",(ve.top.y-ve.bottom.y)*t+"px")),d&&i.classList.add("pose-"+d),i.dataset.pose=d),d==="swing"?(i.style.transformOrigin=`50% ${(sn-o.p.y)*t+c}px`,i.style.animationDelay=-(Date.now()%Xu)/1e3+"s",s.add(o.p.spot??-1)):(i.style.transformOrigin="",i.style.animationDelay="")}e.querySelectorAll(".savatar").forEach(o=>{n.has(o.dataset.pid)||o.remove()}),document.querySelectorAll("#parkWorld .swing").forEach(o=>{const i=s.has(+o.dataset.swing);i&&!o.classList.contains("swinging")&&(o.style.animationDelay=-(Date.now()%Xu)/1e3+"s"),o.classList.toggle("swinging",i)}),So()}function _2(e){e.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();const n=Ln();if(!n||n.where!=="park"&&n.where!=="ranch"&&n.where!=="barn")return;const s=n.where!=="park",o=n.where;Ct=[];const i=L(s?"ranchScroll":"parkScroll"),a=s?hn():Us(),r=o==="barn"?uf:s?Ma:Af,l=b=>{const _=L(s?"ranchWorld":"parkWorld").getBoundingClientRect();return{x:(b.clientX-_.left)/a,y:(b.clientY-_.top)/a}},c=l(t),d={x:n.x-c.x,y:n.y-c.y};let f=t,h=0,u=n.x,y=!1;const g=b=>{const _=l(b),P=Ln();if(!P)return;const $=Math.max(60,Math.min(r-60,_.x+d.x)),M=Math.max(470,Math.min(590,_.y+d.y));if(!y&&Math.hypot($-P.x,M-P.y)<6)return;y=!0;const z=Math.abs($-u)>3?$<u:P.flip;Math.abs($-u)>3&&(u=$),cn(o==="barn"?{where:"barn",x:$,y:M,flip:z}:s?{where:"ranch",x:$,y:M,flip:z,...P.ride!==void 0?{ride:P.ride}:{}}:{where:"park",x:$,y:M,flip:z})},v=()=>{const b=i.getBoundingClientRect(),_=f.clientX<b.left+70?-10:f.clientX>b.right-70?10:0;_&&y&&(i.scrollLeft+=_,g(f)),h=requestAnimationFrame(v)};h=requestAnimationFrame(v),e.classList.add("lifted"),C.pick();const w=b=>{b.pointerId===t.pointerId&&(f=b,g(b))},m=b=>{b.pointerId===t.pointerId&&(cancelAnimationFrame(h),window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",m),e.classList.remove("lifted"),C.drop())};window.addEventListener("pointermove",w),window.addEventListener("pointerup",m)})}L("parkWorld").addEventListener("pointerdown",e=>{e.target.closest(".pspot, .ball, .pet")&&e.stopPropagation()});L("parkWorld").addEventListener("click",e=>{const t=e.target,n=Ln();if(!n)return;if(t.closest("#ball")){Ue||C.boing(),VT();return}const s=t.closest("[data-spot]");if(s){const i=+s.dataset.spot,a=gd[i];if(n.spot===i&&n.pose){cn({where:"park",x:a.x,y:Math.min(590,a.y+40),flip:n.flip}),C.drop();return}if(_s().some(r=>!r.mine&&r.p.spot===i&&r.p.pose)){j("Someone is already there!"),C.pop();return}cn({where:"park",x:a.x,y:a.y,flip:n.flip,pose:a.kind==="swing"?"swing":"sit",spot:i}),a.kind==="swing"?C.boing():C.drop();return}const o=t.closest("[data-act]")?.dataset.act;if(o==="slide"&&(cn({where:"park",x:ve.bottom.x,y:ve.bottom.y,flip:!1,pose:"slide"}),C.swish(),setTimeout(()=>{const i=Ln();i?.pose==="slide"&&cn({where:"park",x:i.x,y:i.y,flip:i.flip})},1500)),o==="splash"){const i=L("parkWorld").getBoundingClientRect(),a=(e.clientX-i.left)/Us();$2(a),k?.fx({k:"splash",x:a})}o==="exit"&&x2()});function $2(e){const t=document.getElementById("ripples");if(!t||R!=="park")return;const n=Us();for(let s=0;s<2;s++){const o=document.createElement("div");o.className="ripple";const i=(120+s*70)*n;Object.assign(o.style,{left:e*n-i/2+"px",top:512*n-i*.18+"px",width:i+"px",height:i*.36+"px",animationDelay:s*.15+"s"}),t.appendChild(o),setTimeout(()=>o.remove(),1400)}for(let s=0;s<6;s++){const o=document.createElement("div");o.className="drop",Object.assign(o.style,{left:e*n+"px",top:505*n+"px"}),o.style.setProperty("--dx",(s-2.5)*14+"px"),t.appendChild(o),setTimeout(()=>o.remove(),900)}C.splash()}function DT(){To(),Ct=[],qe=!1,R="park",L("park").classList.remove("hidden"),Va(L("park"));const e={where:"park",x:290,y:548,flip:!1};k?nt(e):Ut=e,L("streetTitle").textContent="The Park",Mn(),Lp(),requestAnimationFrame(()=>{const t=L("parkScroll");t.scrollLeft=0,ft()}),C.sparkle()}function x2(){Fo()}function HT(){return lc()&&!document.body.classList.contains("phone")}function Ju(){return lc()?520:280}function WT(){To(),Ct=[],qe=!1,R="gameroom",L("gameroom").classList.remove("hidden");const e=li(),t=e?{where:"gameroom",x:e.x,y:Math.max(fo,Math.min(Zn,e.y)),flip:!1}:{where:"gameroom",x:Ju(),y:560,flip:!1};k?nt(t):Ut=t,L("streetTitle").textContent="The Clubhouse",Mn(),Jf(),requestAnimationFrame(()=>{const n=Ds(),s=L("grScroll"),o=e?.x??(HT()?g1/2:Ju());s.scrollLeft=Math.max(0,o*n-s.clientWidth/2),ft(),Y2()}),Va(L("gameroom")),C.sparkle()}L("btnLeavePark").addEventListener("click",()=>{R==="ranch"&&qe?$a(!1):x2()});let hs={x:2620,y:565},Ue=null;function hl(e=!1){const t=document.getElementById("ball");if(!t)return;const n=Us(),s=34*n;e||t.classList.remove("flying"),t.style.left=hs.x*n-s/2+"px",t.style.top=hs.y*n-s+"px",t.style.width=t.style.height=s+"px"}function VT(){if(Ue)return;const e=mt.x0+40+Math.random()*(mt.x1-mt.x0-80),t=mt.y0+25+Math.random()*(mt.y1-mt.y0-35);M2(k?k.pid:"solo",e,t),k?.fx({k:"ball",x:e,y:t})}function M2(e,t,n){if(R!=="park")return;const s=document.getElementById("ball");hs={x:t,y:n},Ue={thrower:e,phase:"fly",dog:null,until:performance.now()+12e3},s&&(s.classList.remove("flying"),s.offsetWidth,s.classList.add("flying"),hl(!0)),C.boing(),setTimeout(()=>{Ue?.phase==="fly"&&(Ue.phase="chase",document.getElementById("ball")?.classList.remove("flying"),us.size||(Ue=null))},650)}function UT(e){if(!k)return Ut;const t=e===k.pid?ye():k.presence.get(e);return t&&t.where==="park"?t:null}const us=new Map,Gc=e=>(t,n,s,o,i)=>{t.style.left=(n-o/2)*e+"px",t.style.top=(s-i)*e+"px",t.style.width=o*e+"px",t.style.height=i*e+"px"};function QT(){const e=[];if(R==="house"){const t=S.get(),n={box:X,place:Vs,z:s=>String(4e3+Math.round(s)),scale:1};if(k&&Te!==ee){const s=[...k.presence.entries()],o=ye();o&&s.push([k.pid,o]);for(const[i,a]of s){const r=k.players.get(i)?.dog;if(r&&a.where==="house"&&a.houseId===ue&&a.room===t.currentRoom){const l=wt(t.currentRoom,Kt(i,a),a);e.push({key:i,dog:r,x:l.x,y:l.y,flip:a.flip,...n})}}}else if(t.dog){const s=t.characters.find(o=>o.id===t.dog.owner)??t.characters[0];if(s&&s.room===t.currentRoom){const o=wt(s.room,vt(s),s);e.push({key:"solo",dog:t.dog,x:o.x,y:o.y,flip:s.flip,...n})}}}else if(R==="park"){const t=document.getElementById("pavatars");if(!t)return e;const n=Us();for(const s of _s())s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Gc(n),z:o=>String(Math.round(o)-200),scale:.95})}else if(R==="ranch"){const t=document.getElementById("ravatars");if(!t)return e;const n=hn();for(const s of _s(qe?"barn":"ranch"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Gc(n),z:o=>String(100+Math.round(o)),scale:.95,riding:s.p.ride!==void 0})}else if(R==="gameroom"){const t=document.getElementById("gavatars");if(!t)return e;const n=Ds();for(const s of _s("gameroom"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Gc(n),z:o=>String(Math.round(o)-200),scale:.95})}return e}let e0=performance.now();function NT(e,t){const n=new Set;for(const s of QT()){if(jT(s.key))continue;n.add(s.key);let o=us.get(s.key);const i=s.flip?1:-1,a=!s.riding&&R==="house"&&S.get().currentRoom==="backyard",r=s.riding?200:78;let l=a?Ch.x:s.x+i*r;s.riding?l=Math.max(50,Math.min(Ma-50,l)):R==="house"&&!a&&(l=R2(l,46));const c=a?Ch.y:Math.min(595,s.y+(s.riding?28:6));if(!o||o.box!==s.box||!o.el.isConnected){o?.el.remove();const _=document.createElement("div");_.className="pet pet-dog",_.dataset.dog=s.key,s.box.appendChild(_),qT(_,s.key),o={el:_,box:s.box,x:l,y:c,flip:s.flip,pose:"",look:"",idle:1,trickUntil:0,sitTrick:!1},us.set(s.key,o)}let d=l,f=c,h=s.riding?980:320;if(Ue&&e>Ue.until&&(Ue=null,hl()),Ue&&R==="park"){if(Ue.phase==="chase")d=hs.x,f=hs.y,h=950,Math.hypot(o.x-d,o.y-f)<28&&(Ue.phase="carry",Ue.dog=s.key,C.woof());else if(Ue.phase==="carry"&&Ue.dog===s.key){const _=UT(Ue.thrower)??{x:(mt.x0+mt.x1)/2,y:540};d=_.x+60,f=Math.min(590,_.y+6),h=750,hs={x:o.x+(o.flip?-40:40),y:o.y-30*s.scale},Math.hypot(o.x-d,o.y-f)<26&&(hs={x:_.x+70,y:Math.min(590,_.y+12)},Ue=null,Cr(o,"♥"),C.sparkle()),hl()}}const u=e<o.trickUntil,y=d-o.x,g=f-o.y,v=Math.hypot(y,g);let w=!1;if(v>(Ue?4:10)&&!u){const _=es()?v:Math.min(v,h*t);o.x+=y/v*_,o.y+=g/v*_,w=!0,Math.abs(y)>1.5&&(o.flip=y<0),o.idle=0}else o.idle+=t,!u&&o.idle>.3&&Math.abs(s.x-o.x)>4&&(o.flip=s.x<o.x);const m=u&&o.sitTrick?"sit":w?"stand":o.idle>.9?"sit":"stand",b=m+s.dog.breed;if(o.pose+o.look!==m+b){for(const _ of[...o.el.children])_.matches(".bubble, .kennelBtn")||_.remove();o.el.insertAdjacentHTML("afterbegin",`<div class="inner">${fa(s.dog.breed,m,ca(s.dog.breed,m))}</div>`),o.pose=m,o.look=b}o.el.dataset.name=s.dog.name,o.el.classList.toggle("walking",w),o.el.classList.toggle("flipped",o.flip),s.place(o.el,o.x,o.y,92*s.scale,71*s.scale),o.el.style.zIndex=s.z(o.y+1),P2(o.el,s.key,!1)}for(const[s,o]of us)n.has(s)||(o.el.remove(),us.delete(s))}function Cr(e,t){e.el.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.el.appendChild(n),pi(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const t0=new Map;function L2(e,t){const n=us.get(e);if(!n)return;const s=n.el.dataset.name??"";n.trickUntil=performance.now()+1400,n.sitTrick=t===0,n.el.classList.remove("spin","hop"),n.el.offsetWidth,t===0&&(Cr(n,`${s} sits! 🐾`),C.pop()),t===1&&(n.el.classList.add("spin"),Cr(n,"Wheee! ✨"),C.spin()),t===2&&(n.el.classList.add("hop"),Cr(n,"Woof! Woof!"),C.woof())}function qT(e,t){e.addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault()}),e.addEventListener("click",n=>{n.stopPropagation();const s=(t0.get(t)??0)%3;t0.set(t,s+1),L2(t,s),k&&k.fx({k:"trick",owner:t,v:s})})}function nc(e){const t=e?.dogKennel?.item;if(!t||!e)return null;for(const n of Object.values(e.rooms)){const s=n.items.find(o=>o.id===t&&o.kind==="kennel");if(s)return s}return null}function FT(e){if(e==="solo")return ee.get();if(!k)return null;const t=k.players.get(e)?.houseId;return t?k.view(t):null}function jT(e){return!!nc(FT(e))}function Ep(){if(k){const e=k.myHouseId();return e?k.view(e):null}return ee.get()}function E2(){if(R!=="house")return null;const e=S.get(),t=nc(e);if(!t||!e.rooms[e.currentRoom]?.items.some(n=>n.id===t.id))return null;if(k&&Te!==ee){const n=k.houses.get(ue)?.meta.ownerId,s=n?k.players.get(n)?.dog??null:null;return!n||!s?null:{key:n,dog:s,item:t}}return e.dog?{key:"solo",dog:e.dog,item:t}:null}function ZT(){const e=Ep();if(!e)return null;const t=gl()?S.get().currentRoom:null;let n=null,s=null;for(const[o,i]of Object.entries(e.rooms))for(const a of i.items)a.kind==="kennel"&&((!n||a.z>=n.z)&&(n=a),o===t&&(!s||a.z>=s.z)&&(s=a));return s??n}function gr(e){if(!Pp()){j("Adopt a dog first!");return}Di({type:"dog/kennel",item:e}),e?(C.pop(),j("Rest well, puppy!")):(C.woof(),j("Come on, puppy!"))}function Sp(e){if(!Pp()){j("Adopt a dog first!");return}const t=nc(Ep());if(e===void 0){if(t){gr(null);return}const n=ZT();if(!n){j("Put a dog kennel down first!");return}gr(n.id);return}t?.id===e?gr(null):gr(e)}function S2(e){const t=S.get(),n=t.rooms[t.currentRoom]?.items.find(s=>s.id===e);if(n){if(n.kind==="kennel"){gl()&&Sp(n.id);return}n.kind==="cat-tower"&&aP()}}function GT(e,t){const n=S.get(),s=n.rooms[n.currentRoom]?.items.find(i=>i.id===t);if(!s)return;if(s.art){C.click(),RE(tl(s.frame??0,c1(s.art),!1));return}const o=Yv(s.kind);if(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),C.click(),o==="kennel"||o==="tower"){S2(t);return}if(h0(s.kind)){UL();const i=!s.on;S.dispatch({type:"item/power",room:n.currentRoom,id:t,on:i}),i&&gs(s.kind)==="tv"&&JT(s),$s();return}if(!x7(s.kind,t,n.soundOn,$s)){if(o==="open"){e.classList.toggle("opened"),$s();return}if(o==="lamp"){e.classList.toggle("lamp-on");return}if(o==="sit"&&T2(s),o==="swing"&&eP(s),o!=="sit"&&(da(s.kind)||fn(s.kind)||jn(s.kind))){const i=S.get().currentRoom;if(k&&R==="house"){const a=ye();a&&a.where==="house"&&cp(s.x,s.y,s)}else{const a=S.get(),r=a.characters.find(l=>l.id===ze&&l.room===i)??a.characters.find(l=>l.room===i);r&&lp(r.id,s.x,s.y,s)}Rs(!1)}}}const n0={dance:Be*2,sway:Be*4,watch:Be*5,warm:Be*3,hug:Be*2,bounce:Be,bathe:Be*3,nibble:Be,...v7},YT={dance:"<span>♪</span><span>♫</span>",sway:"<span>♪</span>",hug:"<span>♥</span>",bathe:'<span class="bub"></span><span class="bub"></span><span class="bub"></span>',nibble:"<span>✦</span>",...k7},mr={stereo:"<span>♪</span><span>♫</span><span>♪</span>",musicbox:"<span>♪</span><span>♩</span>",tv:'<span class="glow"></span>',fire:'<span class="glow"></span><span class="ember"></span><span class="ember"></span>',tub:'<span class="bub"></span><span class="bub"></span><span class="bub"></span><span class="bub"></span>',fridge:'<span class="food">🍓</span><span class="food">🧁</span>',..._7},Yc=new Map;let Kc=0;setInterval(()=>{document.hidden||$s()},1e3);function $s(){Kc||(Kc=requestAnimationFrame(()=>{Kc=0,KT()}))}function no(e,t,n){let s=e.querySelector(":scope > .ambFx");if(!t){s?.remove();return}s||(s=document.createElement("i"),s.className="ambFx",s.setAttribute("aria-hidden","true"),e.appendChild(s)),s.dataset.k!==n&&(s.innerHTML=t,s.dataset.k=n,s.className="ambFx fx-"+n)}function s0(e,t,n){const s=t?t.kind+"|"+t.item:"",o=e.dataset.amb||"";if(o!==s){if(o&&e.classList.remove("amb-"+o.split("|")[0],"amb-l","amb-r"),o.startsWith("bathe|")&&!t&&(e.classList.add("amb-sparkle"),setTimeout(()=>e.classList.remove("amb-sparkle"),1200)),!t){delete e.dataset.amb,no(e,null,"");return}e.dataset.amb=s,e.style.setProperty("--amb-delay",ro(t.phase,n0[t.kind],n)+"ms"),e.style.setProperty("--amb-period",n0[t.kind]+"ms"),e.classList.add("amb-"+t.kind,t.face<0?"amb-l":"amb-r"),no(e,YT[t.kind]??null,t.kind)}}function KT(){const e=S.get(),t=e.rooms[e.currentRoom];if(R!=="house"||!t){Jh(null);return}const n=Date.now(),s=new Set;for(const g of t.items){if(gs(g.kind)!=="musicbox")continue;if(!g.on){Yc.delete(g.id);continue}const v=Yc.get(g.id)??(Yc.set(g.id,n),setTimeout($s,jp+60),n);n-v>=jp&&s.add(g.id)}const o=new Set;X.querySelectorAll(".item.opened").forEach(g=>{g.dataset.id&&o.add(g.dataset.id)});const i=t.items.map(g=>{const v=de[g.kind];return{id:g.id,kind:g.kind,x:g.x,y:g.y,on:!!g.on,w:v?fp(v,Ge(g)).w:200}}),a=[],r=new Map;for(const g of e.characters){const v=Wt.get(g.id);if(g.room!==e.currentRoom||!v||v.classList.contains("lifted"))continue;const w=vt(g)?.pose;a.push({id:g.id,x:g.x,y:g.y,seated:w==="sit",lying:w==="lie"}),r.set(g.id,v)}if(k&&Te!==ee){const g=[...k.presence.entries()],v=ye();v&&g.push([k.pid,v]);for(const[w,m]of g){const b=fs.get(w);if(!b||!b.isConnected||m.where!=="house"||m.houseId!==ue||m.room!==e.currentRoom||b.classList.contains("lifted"))continue;const _=Kt(w,m)?.pose;a.push({id:"p:"+w,x:m.x,y:m.y,seated:_==="sit",lying:_==="lie"}),r.set("p:"+w,b)}}const l=M7(n),c=Ly(i,a,{fridgesOpen:o,musicBoxDone:s,keysPlaying:l}),d=FL(i,c);if(d)for(const g of d.dancers){const v=c.get(g);v&&c.set(g,{...v,phase:0,face:v.face})}for(const g of[...Wt.values(),...fs.values()])[...r.values()].includes(g)||s0(g,void 0,n);r.forEach((g,v)=>s0(g,c.get(v),n));const f=new Set([...c.values()].filter(g=>g.kind==="bathe").map(g=>g.item));let h=null;for(const g of t.items){const v=X.querySelector(`.item[data-id="${g.id}"]`);if(!v)continue;const w=gs(g.kind),m=!!g.on&&!!w&&!s.has(g.id);if(v.classList.toggle("amb-on",m),m)v.dataset.amb=w,v.style.getPropertyValue("--amb-delay")||v.style.setProperty("--amb-delay",ro(0,Be,n)+"ms"),w==="stereo"?h="stereo":w==="musicbox"&&!h&&(h="musicbox"),no(v,mr[w],w);else if(jn(g.kind)&&f.has(g.id))no(v,mr.tub,"tub");else if(ni(g.kind)&&o.has(g.id))no(v,mr.fridge,"fridge");else{const b=L7(g.kind,g.id,c,l,o,f.size>0);v.classList.toggle("soc-ducky",b==="ducky"),b?no(v,mr[b]||null,b):(delete v.dataset.amb,no(v,null,""))}}XT(d,n),Jh(h);const u=new Map;for(const g of a)u.set(g.id,{el:r.get(g.id),d:g});const y=e.baby&&e.baby.room===e.currentRoom&&!e.baby.holder?{x:e.baby.x,y:e.baby.y}:null;S7({layer:X,roomW:At,seed:ue||"local",now:n,reduced:es(),dolls:u,baby:y},c)}let Xc="";function XT(e,t){const n=L("partyFx"),s=!!e&&R==="house";document.body.classList.toggle("party-on",s),n.classList.toggle("on",s),s?(n.style.setProperty("--px",e.x/he*100+"%"),Xc!==e.stereo&&(n.style.setProperty("--amb-delay",ro(0,Be,t)+"ms"),Xc=e.stereo)):Xc="";const o=new Set(s?e.toys:[]);X.querySelectorAll(".item").forEach(c=>{const d=o.has(c.dataset.id||"");d!==c.classList.contains("party-bounce")&&(c.classList.toggle("party-bounce",d),d&&c.style.setProperty("--amb-delay",ro(0,Be,t)+"ms"))});const i=s?X.querySelector(`.item[data-id="${e.stereo}"]`):null,a=np.getBoundingClientRect(),r=a.width?he/a.width:1,l=i?.getBoundingClientRect();X.querySelectorAll(".pet").forEach(c=>{let d=!1;if(l){const f=c.getBoundingClientRect();d=Math.hypot((f.left+f.width/2-l.left-l.width/2)*r,(f.bottom-l.bottom)*r*1.5)<=qL&&!c.classList.contains("leap")&&!c.classList.contains("curl")}d!==c.classList.contains("party-hop")&&(c.classList.toggle("party-hop",d),d&&c.style.setProperty("--amb-delay",ro(.5,Be*2,t)+"ms"))})}function JT(e){const t=S.get();if(k&&R==="house"){const s=ye();if(!s||s.where!=="house"||s.seat)return}else{const s=t.characters.find(o=>o.id===ze&&o.room===t.currentRoom)??t.characters.find(o=>o.room===t.currentRoom);if(!s||s.seat)return}const n=t.rooms[t.currentRoom].items.filter(s=>Jn(s.kind)?.pose==="sit"&&Math.abs(s.x-e.x)<520).sort((s,o)=>Math.abs(s.x-e.x)-Math.abs(o.x-e.x))[0];n&&T2(n)}let Vt=null,Bi=!1;function ul(){X.querySelectorAll(".item.swinging").forEach(e=>{(!Vt||e.dataset.id!==Vt.item)&&e.classList.remove("swinging")}),Vt&&X.querySelector(`.item[data-id="${Vt.item}"]`)?.classList.add("swinging")}function eP(e){const t=S.get(),n=t.characters.find(i=>i.id===ze&&i.room===t.currentRoom)??t.characters.find(i=>i.room===t.currentRoom);if(!n)return;if(Vt?.id===n.id&&Vt.item===e.id){Vt=null,Bi=!0,S.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x+70,y:Math.max(e.y,520)}),Bi=!1,ul();return}const s=de[e.kind],o=e.y-(s?Xe(s)*Ge(e)*.26:40);Vt={id:n.id,item:e.id},Bi=!0,S.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x,y:o}),Bi=!1,ul()}function T2(e){const t=Ba(e);if(!t)return;if(k&&R==="house"){const i=ye();if(!i||i.where!=="house")return;if(!k.speaksSit){const r="p:"+k.pid,l=_n.get(r)?.item===e.id,c=Math.max(ko+40,t.footY-8);l?_n.delete(r):_n.set(r,{item:e.id,pose:t&&Jn(e.kind).pose,n:0});const{seat:d,...f}=i;nt({...f,x:e.x,y:c,flip:!1}),bt();return}const a=Uo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:$o(void 0,k.pid),alreadyOn:i.seat?.id===e.id?e.id:null});if(a.toast){j(a.toast),C.pop();return}if(!a.moved)return;va(i,a.x,a.y,!1,a.seat?{id:a.seat.item,pose:a.seat.pose,n:a.seat.n}:null),bt(),Rs(!1);return}const n=S.get(),s=n.characters.find(i=>i.id===ze&&i.room===n.currentRoom)??n.characters.find(i=>i.room===n.currentRoom);if(!s)return;const o=Uo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:$o(s.id),alreadyOn:s.seat?.item===e.id?e.id:null});if(o.toast){j(o.toast),C.pop();return}o.moved&&(Ji(s.id,n.currentRoom,o.x,o.y,o.seat),Rs(!1))}function P2(e,t,n){const s=k?t===k.pid:t==="solo";let o=e.querySelector(".kennelBtn");if(!s){o?.remove();return}o||(o=document.createElement("button"),o.type="button",o.className="kennelBtn",o.addEventListener("pointerdown",i=>{i.stopPropagation(),i.preventDefault()}),o.addEventListener("click",i=>{i.stopPropagation(),i.preventDefault(),Sp()}),e.appendChild(o)),o.textContent=n?"Out":"Kennel",tP(o)}function tP(e){if(R!=="house"){e.style.left=e.style.right=e.style.top=e.style.bottom=e.style.transform="";return}const t=e.parentElement;if(!t)return;const n=Z.getBoundingClientRect().width/Z.offsetWidth||1,s=Z.getBoundingClientRect(),o=4,i={l:s.left+o,t:s.top+o,r:s.right-o,b:s.bottom-o},a=X.querySelector(".char")?.getBoundingClientRect(),r=X.querySelector('.item[data-kind="sofa"]')?.getBoundingClientRect(),l=[...X.querySelectorAll(".pet-cat, .item")].map(H=>H.getBoundingClientRect()).filter(H=>H.width>2&&H.height>2),c=(H,Q)=>!!Q&&H.left<Q.right-1&&H.right>Q.left+1&&H.top<Q.bottom-1&&H.bottom>Q.top+1,d=(H,Q)=>c(H,Q)?Math.max(0,Math.min(H.right,Q.right)-Math.max(H.left,Q.left))*Math.max(0,Math.min(H.bottom,Q.bottom)-Math.max(H.top,Q.top)):0,f=H=>{let Q=0;H.left<i.l&&(Q+=(i.l-H.left)*8),H.right>i.r&&(Q+=(H.right-i.r)*8),H.top<i.t&&(Q+=(i.t-H.top)*8),H.bottom>i.b&&(Q+=(H.bottom-i.b)*8),Q+=d(H,a)*4,Q+=d(H,r)*4;for(const st of l)Q+=d(H,st)*4;return Q},h=t.getBoundingClientRect(),u=!a||h.left+h.width/2<=a.left+a.width/2,y=H=>({left:H?"0px":"auto",right:H?"auto":"0px",top:"46%",bottom:"auto",transform:H?"translate(-108%, -50%)":"translate(108%, -50%)"}),g=[y(u),y(!u),{left:"50%",right:"auto",top:"0px",bottom:"auto",transform:"translate(-50%, -115%)"}];let v=g[0],w=1/0;for(const H of g){Object.assign(e.style,H);const Q=f(e.getBoundingClientRect());Q<w&&(w=Q,v=H)}Object.assign(e.style,v);let m=e.getBoundingClientRect(),b=0,_=0;m.left<i.l&&(b+=i.l-m.left),m.right>i.r&&(b-=m.right-i.r),m.top<i.t&&(_+=i.t-m.top),m.bottom>i.b&&(_-=m.bottom-i.b);const P=H=>{if(!H)return;const Q=()=>new DOMRect(m.left+b,m.top+_,m.width,m.height);if(!c(Q(),H))return;const st=Math.min(Q().bottom,H.bottom)-Math.max(Q().top,H.top),ut=H.bottom+4-Q().top,je=H.top-4-Q().bottom,De=un=>Q().top+un>=i.t&&Q().bottom+un<=i.b;if(st<m.height*.5&&De(ut)){_+=ut;return}if(st<m.height*.5&&De(je)){_+=je;return}const Ae=H.left-i.l,_t=i.r-H.right,$t=H===r?a:r,Qs=(un,cc)=>{if(!$t)return!1;const Ns=cc?un-m.width:un,hi=new DOMRect(Ns,Q().top,m.width,m.height);return c(hi,$t)};_t>=m.width+4&&!Qs(H.right+4,!1)?b+=H.right+4-Q().left:Ae>=m.width+4&&!Qs(H.left-4,!0)?b+=H.left-4-Q().right:De(ut)?_+=ut:De(je)&&(_+=je)};P(a),P(r);const $=t.querySelector(".inner")?.getBoundingClientRect(),M=$&&$.width>2?$:h,z=X.querySelector(".pet-cat")?.getBoundingClientRect(),V=X.querySelector('.item[data-kind="sandbox"]')?.getBoundingClientRect(),U=X.querySelector('.item[data-kind="yard-bench"]')?.getBoundingClientRect(),F=[...X.querySelectorAll('.item[data-kind="yard-swing"], .item[data-kind="picnic-blanket"], .item[data-kind="lemonade-cart"], .item[data-kind="tulip-bed"]')].map(H=>H.getBoundingClientRect()),oe=Z.querySelector(".yardDoor"),we=oe?[oe,oe.querySelector(".yardHintLabel"),oe.querySelector(".doorArt")].map(H=>H?.getBoundingClientRect()):[],Ke=document.getElementById("secrets"),Ie=Ke&&Ke.offsetParent?Ke.getBoundingClientRect():void 0,I=Ie&&Ie.width>2&&Ie.left<i.r&&Ie.right>i.l&&Ie.top<i.b&&Ie.bottom>i.t?Ie:void 0,B=I?new DOMRect(I.left-8,I.top-8,I.width+16,I.height+16):void 0,te=[a,r,z,V,U,B,...F,...we].filter(H=>!!H&&H.width>2&&H.height>2),W=new DOMRect(m.left+b,m.top+_,m.width,m.height),N=M.left+M.width/2,G=M.top+M.height/2,ge=H=>Math.hypot(H.left+H.width/2-N,H.top+H.height/2-G),Pe=H=>{const Q=Math.min(H.right,M.right)-Math.max(H.left,M.left),st=Math.min(H.bottom,M.bottom)-Math.max(H.top,M.top);return Q>1&&st>1},_e=H=>H.left>=i.l-.5&&H.right<=i.r+.5&&H.top>=i.t-.5&&H.bottom<=i.b+.5&&te.every(Q=>!c(H,Q))&&!Pe(H);let Fe=W;if(!_e(W)||ge(W)>150){const H=[],Q=(je,De)=>{let Ae=je,_t=De;Ae<i.l&&(Ae=i.l),_t<i.t&&(_t=i.t),Ae+m.width>i.r&&(Ae=Math.max(i.l,i.r-m.width)),_t+m.height>i.b&&(_t=Math.max(i.t,i.b-m.height)),H.push(new DOMRect(Ae,_t,m.width,m.height))};Q(M.left+(M.width-m.width)/2,M.top-m.height-8),Q(M.right-m.width,M.top-m.height-6),Q(M.left,M.top-m.height-6),a&&Q(a.right+6,M.top-m.height-8),U&&Q(U.left-m.width-6,U.top-m.height-6),a&&U&&Q(a.right+6,U.top-m.height-6),a&&(Q(a.left-12,a.top-m.height-8),Q(i.l,a.top-m.height-10),Q(a.left+(a.width-m.width)/2,a.top-m.height-8)),Q(i.r-m.width,M.top-m.height-6),Q(M.right+8,M.top+(M.height-m.height)/2),Q(M.left-m.width-8,M.top+(M.height-m.height)/2),Q(W.left,W.top);for(const je of[m.width*.65,m.width*1.05,88,120,155])for(let De=0;De<8;De++){const Ae=De*Math.PI/4;Q(N+Math.cos(Ae)*je-m.width/2,G+Math.sin(Ae)*je-m.height/2)}const st=je=>{let De=1/0,Ae=null;for(const _t of H){if(!_e(_t)||ge(_t)>je)continue;const $t=ge(_t);$t<De&&(De=$t,Ae=_t)}return Ae},ut=st(170)??st(360);if(ut)Fe=ut;else if(!_e(W)){let je=null,De=1/0;for(const Ae of H){if(Ae.left<i.l-.5||Ae.right>i.r+.5||Ae.top<i.t-.5||Ae.bottom>i.b+.5)continue;const $t=(Pe(Ae)?1e4:0)+te.reduce((Qs,un)=>Qs+d(Ae,un),0)+ge(Ae);$t<De&&(De=$t,je=Ae)}je&&(Fe=je)}}b+=Fe.left-W.left,_+=Fe.top-W.top,(b||_)&&(e.style.transform=`${e.style.transform} translate(${(b/n).toFixed(1)}px, ${(_/n).toFixed(1)}px)`)}function nP(e,t){e.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.appendChild(n),pi(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const zi=new Map;function sP(){const e=new Set,t=E2();if(t){e.add(t.key);const n=Vv(t.dog.name,Date.now()),s=de[t.item.kind],i=(s?Hs(s,t.item.y):Math.min(t.item.y,Ce-b1))-(n==="peek"?24:2);let a=zi.get(t.key);if(!a||!a.el.isConnected){a?.el.remove();const l=document.createElement("div");l.className="pet pet-dog kenneled",l.dataset.dog="kennel:"+t.key,X.appendChild(l),l.addEventListener("pointerdown",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),c.preventDefault())}),l.addEventListener("click",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),nP(l,`${l.dataset.name??"Puppy"} is resting`))}),a={el:l,pose:"",look:"",x:t.item.x,y:i},zi.set(t.key,a)}const r=n==="rest"?"sleep":"sit";if(a.pose!==r||a.look!==n+t.dog.breed){for(const l of[...a.el.children])l.matches(".bubble, .kennelBtn")||l.remove();a.el.insertAdjacentHTML("afterbegin",`<div class="inner">${fa(t.dog.breed,r,ca(t.dog.breed,r))}</div>${n==="rest"?'<div class="zzz"><b>Zzz</b><i>z</i><i>z</i><i>z</i></div>':""}`),a.pose=r,a.look=n+t.dog.breed}a.el.dataset.name=t.dog.name,a.el.classList.toggle("rest",n==="rest"),a.el.classList.toggle("peek",n==="peek"),a.x=t.item.x,a.y=i,Vs(a.el,t.item.x,i,100,77),a.el.style.zIndex=String(1e3+t.item.z+1),P2(a.el,t.key,!0)}for(const[n,s]of zi)e.has(n)||(s.el.remove(),zi.delete(n))}let fe=null,yr="",Jc=0,Tp=0,Ir={x:0,perch:0,leap:!1};const oP=562;function A2(e){return(e.rooms[e.currentRoom]?.items.filter(n=>n.kind==="cat-tower")??[]).reduce((n,s)=>!n||s.z>=n.z?s:n,null)}function o0(e){return e==="cat-bed"||e==="pet-bed"||e==="dog-bed"||e==="pack:cat-bed"||/(?:^|:)cat-bed$|(?:^|:)pet-bed$/.test(e)}function iP(e){const t=e.rooms[e.currentRoom]?.items??[],n=t.filter(a=>o0(a.kind)),s=t.filter(a=>a.kind==="bed"),o=(n.length?n:s).reduce((a,r)=>!a||r.z>=a.z?r:a,null);if(!o)return null;const i=de[o.kind];return{x:o.x,y:o.y,h:i?Xe(i)*Ge(o):80,pet:o0(o.kind)}}function aP(){const e=S.get();!e.cat||e.cat.room!==e.currentRoom||!A2(e)||(Tp=performance.now()+900,C.boing(),k?.fx({k:"leap"}))}function rP(){const e=S.get(),t=R==="house"?e.cat:null;if(!t||t.room!==e.currentRoom){fe&&(fe.remove(),fe=null,yr="",Jc=0);return}(!fe||!fe.isConnected)&&(fe=document.createElement("div"),fe.className="pet pet-cat",X.appendChild(fe),yr="",fe.addEventListener("pointerdown",$=>{$.stopPropagation(),$.preventDefault()}),fe.addEventListener("click",$=>{$.stopPropagation(),C2(),k&&k.fx({k:"purr"})}));const n=A2(e),s=n?null:iP(e),o=n?de[n.kind]:void 0,i=n&&o?Xe(o)*Ge(n):0,a=Uv(t,Date.now(),n?{x:n.x}:null,s?{x:s.x}:null,es()),r=!!n&&performance.now()<Tp,l=r?2:a.perch,c=r&&n?n.x:a.x,d=r?"play":a.mood,f=d==="walk"?"stand":d==="nap"?"nap":"sit",h=f+t.coat+(l?"p":"");if(h!==yr){const $=[...fe.querySelectorAll(".bubble, .heart")];fe.innerHTML=`<div class="inner">${Ko(t.coat,f,Yo(t.coat,f))}</div>${f==="nap"?'<div class="zzz"><i>z</i><i>z</i><i>z</i></div>':""}`;for(const M of $)fe.appendChild(M);yr=h}if(l>0&&Jc===0){fe.classList.add("hop");const $=fe;setTimeout(()=>$.classList.remove("hop"),420)}Jc=l,fe.dataset.name=t.name,fe.dataset.mood=d,fe.dataset.perch=String(l),fe.dataset.leap=r?"1":"0",fe.dataset.curl=a.curl?"1":"0",fe.classList.toggle("walking",d==="walk"),fe.classList.toggle("groom",d==="groom"),fe.classList.toggle("play",d==="play"&&!r),fe.classList.toggle("leap",r),fe.classList.toggle("flipped",a.flip),fe.classList.toggle("curl",a.curl===1),X.querySelectorAll(".item.toy-live").forEach($=>$.classList.remove("toy-live")),n&&d==="play"&&l&&!r&&X.querySelector(`.item[data-id="${n.id}"]`)?.classList.add("toy-live");const u=window.__pinCat,y=!!(u&&Number.isFinite(u.x)),g=y&&Number.isFinite(u.y)?u.y:oP,v=!y&&l&&n?Wv(n.y,i,l):!y&&a.curl&&s?s.y-s.h*(s.pet?.38:.2):g,w=e.currentRoom==="backyard"&&!l,m=!y&&l?92:w?115:128,b=!y&&l?110:w?135:150,_=y?u.x:e.currentRoom==="backyard"?ws.x:R2(c,b/2),P=!y&&e.currentRoom==="backyard"&&!l?ws.y:v;Vs(fe,_,P,b,m),fe.style.zIndex=String(4e3+Math.round(P)),Ir={x:_,perch:l,leap:r}}function R2(e,t){const n=S.get().currentRoom,s=n==="backyard"?vg:n==="living"?bg:null;if(!s)return e;const o=s.x-s.w/2-t-16,i=s.x+s.w/2+t+16;return e<=o||e>=i?e:e<s.x?o:i}function C2(){if(!fe)return;C.purr(),setTimeout(()=>C.meow(),250),fe.querySelector(".bubble")?.remove();const e=document.createElement("div");e.className="bubble petBubble",e.textContent=`${fe.dataset.name} purrs ♥`,fe.appendChild(e),pi(),setTimeout(()=>e.classList.add("out"),1500),setTimeout(()=>e.remove(),1900),fe.classList.remove("happy"),fe.offsetWidth,fe.classList.add("happy");for(let t=0;t<5;t++){const n=document.createElement("div");n.className="heart",n.textContent="♥",n.style.left=20+Math.random()*60+"%",n.style.animationDelay=t*.12+"s",n.style.color=["#ff6b9a","#ff8fab","#e879c6"][t%3],fe.appendChild(n),setTimeout(()=>n.remove(),1800)}}function lP(e,t){if(t.k==="zoo"||t.k==="apple"||t.k==="honk"||t.k==="hen"){LP(t);return}t.k==="trick"?L2(t.owner,t.v):t.k==="purr"?R==="house"&&C2():t.k==="leap"?R==="house"&&(Tp=performance.now()+900):t.k==="ball"?M2(e,t.x,t.y):t.k==="splash"&&$2(t.x)}function I2(e){const t=Math.min(.05,Math.max(0,(e-e0)/1e3));e0=e;try{NT(e,t),sP(),rP(),SP(e,t),tS(t),Om()}catch{}requestAnimationFrame(I2)}function cP(){return k?k.view(k.myHouseId())?.cat??null:ee.get().cat??null}function Pp(){return k?k.players.get(k.pid)?.dog??null:ee.get().dog??null}function Di(e){if(k){const t=k.myHouseId();t&&k.dispatch(t,e)}else ee.dispatch(e)}const gl=()=>R==="house"&&(!k||Te===ee||ue===k.myHouseId());function dP(e="cat"){const t=cP(),n=Pp(),s=ee.get().characters,o={tab:e,coat:t?.coat??0,catName:t?.name??"",breed:n?.breed??0,dogName:n?.name??"",owner:n?.owner??s[0]?.id,err:"",bye:!1},i=Jt("",(l,c)=>{const d=u=>l.closest(`[${u}]`)?.getAttribute(u);if(d("data-pt")){o.tab=d("data-pt"),o.err="",o.bye=!1,r();return}if(d("data-coat")!=null){o.coat=+d("data-coat"),C.click(),r();return}if(d("data-breed")!=null){o.breed=+d("data-breed"),C.click(),r();return}if(d("data-cname")){o.catName=d("data-cname"),C.click(),r();return}if(d("data-dname")){o.dogName=d("data-dname"),C.click(),r();return}if(d("data-owner")){o.owner=d("data-owner"),C.click(),r();return}const f=d("data-pa");if(!f)return;const h=(i.root.querySelector("#petName")?.value??"").trim();if(f==="adoptCat"||f==="adoptDog"){const u=h||(f==="adoptCat"?o.catName:o.dogName),y=Q0(u);if(!y){o.err=u?"Hmm, try a different name!":"Pick a name first!",C.pop(),r();return}if(f==="adoptCat"){const g=gl(),v={name:y,coat:o.coat,room:g?S.get().currentRoom:t?.room??"living",x:g?Math.max(200,Math.min(he-200,se+Y/2)):t?.x??1200};Di({type:"cat/set",cat:v}),C.meow(),c(),j(t?`${y} looks great! 🐱`:g?`${y} moved in! 🐱`:`${y} is waiting at your house! 🐱`)}else{const g=k?{name:y,breed:o.breed}:{name:y,breed:o.breed,owner:o.owner};k?(k.setDog(g),R==="park"&&Lo()):ee.dispatch({type:"dog/set",dog:g}),C.woof(),c(),j(n?`${y} looks great! 🐶`:`${y} is your new best friend! 🐶`)}return}if(f==="callCat"){Di({type:"cat/move",room:S.get().currentRoom,x:Math.max(200,Math.min(he-200,se+Y/2))}),C.meow(),c();return}if(f==="kennelDog"){Sp(),c();return}if(f==="bye"){if(!o.bye){o.bye=!0,r();return}o.tab==="cat"?Di({type:"cat/set",cat:null}):(Di({type:"dog/kennel",item:null}),k?k.setDog(null):ee.dispatch({type:"dog/set",dog:null}));const u=o.tab==="cat"?t?.name:n?.name;c(),j(`${u||"They"} went to live with a kind friend 💛`);return}},"wide pets"),a=i.root.querySelector(".card");function r(){const l=o.tab==="cat",c=l?t:n,d=l?Mv:Lv,f=l?o.catName:o.dogName,h=i.root.querySelector("#petName")?.value??"";a.innerHTML=`${en}<h2>Pets</h2>
      <div class="petTabs"><button data-pt="cat" class="${l?"on":""}">🐱 Cat</button><button data-pt="dog" class="${l?"":"on"}">🐶 Dog</button></div>
      <p class="hint small">${l?k?"Your cat lives in your house. Friends can see her when they visit!":"Your cat lives in your house. She naps, purrs, and plays!":k?"Your dog follows you everywhere: the street, friends' houses, and the park!":"Your dog follows you around the house and to the park!"}</p>
      <div class="petRow"><div class="petPreview">${l?Ko(o.coat,"sit",Yo(o.coat,"sit")):fa(o.breed,"stand",ca(o.breed,"stand"))}</div>
        <div class="swatches">${(l?yd:wd).map((u,y)=>`<button ${l?"data-coat":"data-breed"}="${y}" class="${y===(l?o.coat:o.breed)?"on":""}"><div>${l?Ko(y,"sit",Yo(y,"sit")):fa(y,"stand",ca(y,"stand"))}</div><span>${u.name}</span></button>`).join("")}</div></div>
      <div class="label">Name</div>
      <div class="nameChips">${d.map(u=>`<button ${l?"data-cname":"data-dname"}="${u}" class="${u===f?"on":""}">${u}</button>`).join("")}</div>
      <input id="petName" class="petName" maxlength="14" autocomplete="off" placeholder="…or type a name" value="${me(h)}"/>
      ${o.err?`<p class="err" id="petErr">${me(o.err)}</p>`:""}
      ${!l&&!k&&s.length>1?`<div class="label">Who does your dog follow?</div><div class="walkers">${s.map(u=>`<button data-owner="${u.id}" class="${u.id===o.owner?"on":""}">${Et(u)}</button>`).join("")}</div>`:""}
      <div class="petBtns"><button class="go" data-pa="${l?"adoptCat":"adoptDog"}" id="adoptBtn">${c?"Save":"Adopt! 💛"}</button>
        ${l&&t&&gl()?'<button data-pa="callCat" id="callCat">Here, kitty!</button>':""}
        ${!l&&n?`<button data-pa="kennelDog" id="kennelDog">${nc(Ep())?"Come, puppy!":"Kennel"}</button>`:""}
        ${c?`<button class="danger" data-pa="bye">${o.bye?"Tap again to say goodbye":"Find a new home"}</button>`:""}</div>`}r()}L("btnPets").addEventListener("click",()=>dP(R==="house"?"cat":"dog"));requestAnimationFrame(I2);window.__pets=()=>{const e=E2(),t=e?zi.get(e.key):void 0;return{dogs:[...us.keys()],dogPos:Object.fromEntries([...us].map(([n,s])=>[n,{x:Math.round(s.x),y:Math.round(s.y)}])),cat:fe?{mood:fe.dataset.mood,name:fe.dataset.name,perch:Ir.perch,x:Math.round(Ir.x),leap:Ir.leap,curl:fe.dataset.curl==="1"}:null,kennel:e&&t?{x:Math.round(t.x),y:Math.round(t.y),pose:t.pose,name:e.dog.name,item:e.item.id}:null,dogKennel:S.get().dogKennel??null,fetch:Ue?.phase??null,ball:hs,view:R}};function hn(){return L("ranch").clientHeight/Ca}let Ct=[];const _a=e=>String(100+Math.round(e)),O2=220,fP=O2*130/160,B2=156,pP=B2*130/160,hP=.6,uP=3.5,gP=3,i0=[46.3,46.3,48.7,49.7,53],mP=[0,0,0,0,0],yP=4,wP=16,sf=10,xs=new Map,Or=new Map;function ml(e,t,n=sf){const s=(e-Lt.x)/(Lt.rx+n),o=(t-Lt.y)/(Lt.ry+n);return s*s+o*o<1}function ed(e,t,n,s){for(let o=0;o<=18;o++){const i=o/18;if(ml(e+(n-e)*i,t+(s-t)*i))return!0}return!1}function yl(e,t){return{x:Math.max(70,Math.min(Rp()-70,e)),y:Math.max(fo,Math.min(Zn,t))}}function bP(e,t){const n=yl(t.x,t.y);if(ml(n.x,n.y,6))return null;if(!ed(e.x,e.y,n.x,n.y))return[n];const s=Lt.x-Lt.rx-sf-28,o=Lt.x+Lt.rx+sf+28;let i=null,a=1/0;for(const r of[fo+1,Zn-2]){const l=[];let c=e.x,d=e.y;const f=(v,w)=>{const m=yl(v,w);l.push(m),c=m.x,d=m.y};ed(c,d,c,r)&&f(c<Lt.x?s:o,d),Math.abs(d-r)>3&&f(c,r),Math.abs(c-n.x)>3&&f(n.x,r),l.push(n);let h=!0,u=e.x,y=e.y,g=0;for(const v of l){if(ed(u,y,v.x,v.y)||ml(v.x,v.y,4)){h=!1;break}g+=Math.hypot(v.x-u,v.y-y),u=v.x,y=v.y}h&&g<a&&(i=l,a=g)}return i}function z2(e,t){const n=Ln();if(!n)return;const s={x:Math.max(60,Math.min(Rp()-60,e)),y:Math.max(fo,Math.min(Zn,t))};if(n.ride!==void 0&&n.where==="ranch"){const o=bP(n,s);if(!o){j("The horse won't splash through the pond!"),C.pop();return}Ct=o}else Ct=[s]}function vP(e){if(e.look2)return VL(e.look2);const t=e.pants,n="#5a3d5c",s=(o,i,a,r)=>`<path class="${o}" d="${i}" fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/><path class="${o} cloth" d="${i}" fill="none" stroke="${t}" stroke-width="${r}" stroke-linecap="round"/>`;return`<svg class="rideleg" viewBox="0 0 160 130">${s("thigh","M66 56 L102 66",13,8)}${s("shin","M102 68 L106 104",12,7.2)}<circle class="knee" cx="102" cy="67" r="6.2" fill="${t}" stroke="${n}" stroke-width="3.5"/><ellipse class="shoe" cx="116" cy="106" rx="11" ry="5.2" fill="${n}"/></svg>`}function Ms(){return document.body.classList.contains("phone")&&document.body.classList.contains("phone-portrait")&&!qe}function sc(){if(!Ms())return m0.map((t,n)=>n);const e=[0,2,4];for(const t of _s("ranch")){const n=t.p.ride;n!==void 0&&e.indexOf(n)<0&&e.push(n)}return e}function Is(e){if(!Ms())return m0[e];const t=sc(),n=t.indexOf(e),s=t.length,o=n<0?0:n,i=Ap().w/2,a=2400+i+18,r=3080-i-18;return s<=1?Math.round((a+r)/2):Math.round(a+(r-a)*o/(s-1))}function Ap(){return Ms()?{w:131,h:106}:{w:150,h:122}}function wl(e,t,n){const s=hn(),{w:o,h:i}=Ap();e.style.left=(t-o/2)*s+"px",e.style.top=(n-i)*s+"px",e.style.width=o*s+"px",e.style.height=i*s+"px",e.style.zIndex=_a(n)}function kP(){if(R!=="ranch"||qe||!document.body.classList.contains("phone"))return;const e=new Set(sc());document.querySelectorAll("#ranchWorld .horse").forEach(t=>{const n=+t.dataset.horse;t.classList.toggle("stallOff",Ms()&&!e.has(n)),!(!e.has(n)||xs.has(n)||t.classList.contains("away"))&&wl(t,Is(n),po)})}function _P(e,t,n){if(xs.has(e)||Math.hypot(t-Is(e),n-po)<26)return;xs.set(e,{x:t,y:n});const s=document.querySelector(`#ranchWorld .horse[data-horse="${e}"]`);s&&(s.classList.add("trotting"),s.classList.remove("away"),s.classList.toggle("flipped",Is(e)<t),wl(s,t,n))}function $P(e,t,n){const s=n?-1:1;for(const o of[s*118,-s*118,s*160,-s*78])for(const i of[0,30,-26,48]){const a=yl(e+o,t+i);if(!(Math.hypot(a.x-e,a.y-t)<50)&&!ml(a.x,a.y,8))return a}return yl(e,t)}let a0=0,D2=0;const oc=()=>k?k.now():Date.now(),ic=()=>yf(k?k.ranch.plots:ee.get().garden),Ua=()=>mf(k?k.players.get(k.pid)?.basket:ee.get().basket),Rp=()=>qe?uf:Ma,H2=()=>qe?"barn":"ranch",W2=()=>{const e=new Map;for(const t of _s("ranch"))t.p.ride!==void 0&&e.set(t.p.ride,t);return e};function of(e){const t={taken:"A friend just planted there!",wet:"Already watered 💧",notReady:"Still growing! 🌱",full:"Your basket is full!",slow:"The hen is laying… try again!",none:"Your basket has none left",nohouse:"Go home to put it in your room"};t[e]&&(j(t[e]),C.pop())}function jo(e){if(k){const o=ad(ic(),Ua(),e,oc(),e.op==="egg"?a0:0);return typeof o=="string"?(of(o),!1):(e.op==="egg"&&(a0=Date.now()),k.ranchOp(e),!0)}const t=ee.get(),n=Date.now(),s=ad(yf(t.garden),mf(t.basket),e,n,t.lastEgg??0);return typeof s=="string"?(of(s),!1):(ee.dispatch({type:"ranch/op",op:e,now:n}),ac(!0),Op(),!0)}function $a(e=!1){const t=R==="ranch"&&qe&&!e;To(),L("ranch").classList.remove("hidden"),Ue=null,Ct=[],R="ranch",qe=e;const n=e?{where:"barn",x:170,y:560,flip:!1}:{where:"ranch",x:t?sd:130,y:t?520:565,flip:!1};k?nt(n):Ut=n,L("streetTitle").textContent=e?"The Barn":"Rainbow Ranch",Mn(),Cp(),requestAnimationFrame(()=>{const s=L("ranchScroll"),o=hn();s.scrollLeft=t?Math.max(0,sd*o-s.clientWidth/2):0,rf()}),setTimeout(rf,650),Va(L("ranch")),e?C.swish():C.sparkle()}L("btnHopOff").addEventListener("click",()=>V2());function Cp(){const e=hn(),t=L("ranchWorld"),n=o=>o*e+"px",s=(o,i,a,r)=>`left:${n(o-a/2)};top:${n(i-r)};width:${n(a)};height:${n(r)};z-index:${_a(i)}`;if(t.style.width=Rp()*e+"px",t.style.height=Ca*e+"px",t.style.setProperty("--sc",String(e)),qe){t.innerHTML=I9()+`<div class="sceneArtHost" id="ranchArt"></div><button class="rprop barnExit" data-r="exit" aria-label="Go outside" style="${s(127,444,206,244)}"><span class="exitHint"><span>Outside ☀️</span></span></button>`+so.map((o,i)=>`<button class="animal" data-animal="${i}" aria-label="${Nm[i].name}" style="${s(gf[i],ew+30,128,107)}">${Ld(i,Dd(i))}</button>`).join("")+[300,1244].map(o=>["carrot","apple","hay"].map((i,a)=>`<button class="bucket" data-feed="${i}" aria-label="${i} bucket" style="${s(o+a*56,592,54,62)}">${E9(i)}</button>`).join("")).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',bo(L("ranchArt"),"barn",t),Ls(),ft();return}t.innerHTML=v9()+'<div class="sceneArtHost" id="ranchArt"></div>'+k9().replace("<svg ",`<svg style="z-index:${_a(_9)}" `)+`<button class="rprop barnDoor" data-r="barn" aria-label="Go into the barn" style="${s(sd,472,150,150)}"><span class="doorHint"><span>Petting zoo inside! 🐐</span></span></button><button class="rprop windmill" data-r="mill" aria-label="Windmill" style="${s(1540,478,150,240)}">${A9}</button><button class="rprop henHouse" data-r="egg" aria-label="Hen house" style="${s(715,482,180,170)}">${qi("hen-house",$9)}</button><button class="rprop tractor" data-r="honk" aria-label="Tractor" style="${s(900,580,170,130)}">${qi("tractor",x9)}</button><button class="rprop appleTree" data-r="apple" aria-label="Apple tree" style="${s(2085,482,240,300)}">${qi("apple-tree",M9)}</button>`+tw.map((o,i)=>{const a=Ap();return`<button class="horse${Ms()&&sc().indexOf(i)<0?" stallOff":""}" data-horse="${i}" aria-label="${el[i].name} horse" style="${s(Is(i),po,a.w,a.h)}">${Uf(i,!1,Yf(i))}</button>`}).join("")+Array.from({length:od},(o,i)=>`<button class="plot" data-plot="${i}" aria-label="Garden plot" style="${s(sw(i),594,66,86)}"></button>`).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',bo(L("ranchArt"),"ranch",t),ac(!0),Ls(),ft()}const wr=[];function ac(e=!1){if(R!=="ranch"||qe)return;const t=ic(),n=oc();document.querySelectorAll("#ranchWorld .plot").forEach(s=>{const o=+s.dataset.plot,i=t[o]??null,a=Al(i,n),r=JSON.stringify(i)+a;!e&&wr[o]===r||(wr[o]!==void 0&&wr[o]!==r&&a>0&&(s.classList.remove("grow"),s.offsetWidth,s.classList.add("grow")),wr[o]=r,s.innerHTML=jm(i,a,o),s.dataset.stage=i?String(a):"empty")})}function Ls(){const e=document.getElementById("ravatars");if(!e||R!=="ranch")return;const t=hn(),n=new Set,s=new Set;let o=!1;for(const i of _s(H2())){n.add(i.key);let a=e.querySelector(`.savatar[data-pid="${i.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(i.mine?"mine":"other"),a.dataset.pid=i.key,e.appendChild(a),i.mine&&_2(a));const r=JSON.stringify(i.look)+i.name;if(a.dataset.look!==r){const u=a.querySelector(".bubble");a.innerHTML=i.name?vp(i.look,i.name):`<div class="inner">${Et(i.look)}</div>`,u&&a.appendChild(u),a.dataset.look=r,a.dataset.ride=""}const l=i.p.ride,c=(Ps[i.look.size]??1)*t*.95*(l!==void 0?hP:1),d=Yt*c,f=It*c;if(a.dataset.ride!==String(l??"")&&(a.querySelector(".mount")?.remove(),l!==void 0&&a.insertAdjacentHTML("afterbegin",`<div class="mount" data-mount="${l}">${Uf(l,!0,Yf(l,!0))}${vP(i.look)}</div>`),a.dataset.ride=String(l??"")),a.classList.toggle("riding",l!==void 0),l!==void 0){s.add(l),i.mine&&(o=!0),Or.set(l,{x:i.p.x,y:i.p.y});const u=Ms()?B2:O2,y=Ms()?pP:fP,g=u*t,v=y*t,w=a.querySelector(".mount"),m=!!w.querySelector("img.horsesprite");w.classList.toggle("painted",m),w.style.width=g+"px",w.style.height=v+"px";const b=l??0,_=m?mP[b]??0:0,P=(i.p.flip?-_:_)/160*g;w.style.left=(d-g)/2+P+"px",w.style.top=f-v+"px";const $=Number(a.querySelector(".shirt")?.getAttribute("data-hem")??126),M=m?i0[b]??i0[0]:Number(w.querySelector(".saddle")?.getAttribute("data-top")??43);w.dataset.saddleTop=String(M);const z=($+uP/2)/160*f,V=f-v+(M-gP/2)/130*v;a.style.setProperty("--lift",z-V+"px");const U=w.querySelector(".rideleg");U&&(U.style.left="0",U.style.top="0",U.style.width="100%",U.style.height="100%",m?(U.style.transformOrigin="48% 38%",U.style.transform=`translate(${yP/160*100}%, ${wP/130*100}%) rotate(22deg)`):(U.style.transformOrigin="",U.style.transform=""))}else a.style.removeProperty("--lift");const h=parseFloat(a.dataset.lx??"NaN");Number.isFinite(h)&&Math.abs(h-i.p.x)>2&&(a.classList.add("moving"),clearTimeout(+(a.dataset.mt??0)),a.dataset.mt=String(window.setTimeout(()=>a.classList.remove("moving"),260))),a.dataset.lx=String(i.p.x),Nl(a,i.p.x*t-d/2+"px",i.p.y*t-f+"px"),a.style.width=d+"px",a.style.height=f+"px",a.style.zIndex=_a(i.p.y),a.classList.toggle("flipped",i.p.flip),Ra(a,i.look,i.mine)}if(e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),document.body.classList.contains("phone")){const i=new Set(sc());document.querySelectorAll("#ranchWorld .horse").forEach(a=>{a.classList.toggle("stallOff",Ms()&&!i.has(+a.dataset.horse))})}document.querySelectorAll("#ranchWorld .horse").forEach(i=>{const a=+i.dataset.horse;s.has(a)?(i.classList.add("away"),xs.delete(a)):i.classList.remove("away")});for(const[i,a]of[...Or])s.has(i)||(_P(i,a.x,a.y),Or.delete(i));document.body.classList.toggle("riding",o),So()}function xP(e){const t=Ln();if(!t||t.where!=="ranch")return;const n=W2().get(e);if(n&&!n.mine){j("Someone is riding!"),C.pop();return}if(t.ride!==void 0){if(n?.mine||t.ride===e){V2();return}z2(Is(e),Math.min(Zn,po+8));return}Ct=[],xs.delete(e),cn({where:"ranch",x:Is(e),y:Math.min(Zn,po+8),flip:!1,ride:e}),C.neigh(),j(`You're riding ${el[e].name}! Tap the ground to gallop 🐴`)}function V2(){const e=Ln();if(!e||e.ride===void 0)return;const t=e.ride,{ride:n,...s}=e;Ct=[];const o=$P(s.x,s.y,s.flip);Or.set(t,{x:s.x,y:s.y}),cn({...s,x:o.x,y:o.y}),C.drop()}function Ip(e,t){const n=e<so.length?document.querySelector(`#ranchWorld .animal[data-animal="${e}"]`):document.querySelector(`#ranchWorld .horse[data-horse="${e-so.length}"]:not(.away)`)??document.querySelector(`#ravatars .mount[data-mount="${e-so.length}"]`);if(!n||R!=="ranch")return;const s=e>=so.length,o=s?{say:"Neigh! ♥",snd:"neigh"}:Nm[e];n.classList.remove("hop","munch"),n.offsetWidth,n.classList.add(t?"munch":"hop"),setTimeout(()=>n.classList.remove("hop","munch"),1400),n.querySelector(".abubble")?.remove();const i=document.createElement("div");i.className="bubble petBubble abubble",i.textContent=t?`Yum! Munch munch ${t===1?"🥕":t===2?"🍎":"🌾"}`:o.say,n.appendChild(i),pi(),setTimeout(()=>i.classList.add("out"),1400),setTimeout(()=>i.remove(),1800);for(let a=0;a<(t?6:4);a++){const r=document.createElement("div");r.className="heart",r.textContent="♥",r.style.left=15+Math.random()*70+"%",r.style.animationDelay=a*.12+"s",r.style.color=["#ff6b9a","#ff8fab","#e879c6","#b197fc"][a%4],n.appendChild(r),setTimeout(()=>r.remove(),1900)}C[o.snd]?.(),t&&setTimeout(()=>C.munch(),250)}function U2(){const e=document.querySelector("#ranchWorld .henHouse");e&&(e.classList.remove("lay"),e.offsetWidth,e.classList.add("lay"),C.cluck())}function MP(){const e=document.querySelector("#ranchWorld .henHouse"),t=L("basketChip");if(!e)return;const n=e.getBoundingClientRect(),s=t.getBoundingClientRect(),o=document.createElement("div");o.className="flyEgg",o.innerHTML=ua,document.body.appendChild(o),Object.assign(o.style,{left:n.left+n.width/2-18+"px",top:n.top+n.height*.6+"px"}),requestAnimationFrame(()=>{o.style.left=s.left+s.width/2-18+"px",o.style.top=s.top+"px",o.style.transform="scale(.6) rotate(200deg)"}),setTimeout(()=>{o.remove(),t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")},650)}function Q2(e){const t=document.getElementById("rfx");if(!t||R!=="ranch")return;const n=hn(),[s,o]=pu[e]??pu[0],i=1965+s,a=182+o,r=i+(e%2?26:-22),l=575+e*4,c=document.createElement("button");c.className="fallenApple",c.dataset.feed="apple",c.setAttribute("aria-label","Apple"),c.innerHTML=qm;const d=32*n;Object.assign(c.style,{width:d+"px",height:d+"px",left:i*n-d/2+"px",top:a*n-d/2+"px",zIndex:_a(l)}),t.appendChild(c),requestAnimationFrame(()=>{c.style.left=r*n-d/2+"px",c.style.top=l*n-d+"px",c.classList.add("fallen")});const f=document.querySelector("#ranchWorld .appleTree");f?.classList.remove("shake"),f?.offsetWidth,f?.classList.add("shake"),C.boing(),setTimeout(()=>c.remove(),12e3)}function N2(){const e=document.querySelector("#ranchWorld .tractor");e?.classList.remove("bounce"),e?.offsetWidth,e?.classList.add("bounce"),C.honk()}function LP(e){e.k==="zoo"?Ip(e.a,e.f):e.k==="apple"?Q2(e.v):e.k==="honk"?N2():e.k==="hen"&&U2()}function r0(e,t){const n=document.elementFromPoint(e,t);if(!n)return null;const s=n.closest("[data-animal]");if(s)return+s.dataset.animal;const o=n.closest(".horse:not(.away)");if(o)return so.length+ +o.dataset.horse;const i=n.closest(".savatar.riding");return i?.dataset.ride?so.length+ +i.dataset.ride:null}function af(e,t,n){e.preventDefault(),e.stopPropagation();const s=document.createElement("div");s.className="feedGhost",s.innerHTML=Fm[t],document.body.appendChild(s);const o=y=>{s.style.left=y.clientX-30+"px",s.style.top=y.clientY-50+"px"};o(e),C.pick();let i=0;const a=e.clientX,r=e.clientY;n instanceof HTMLElement&&(n.style.visibility="hidden");let l=e.clientX,c=0;const d=L("ranchScroll"),f=()=>{const y=d.getBoundingClientRect(),g=l<y.left+60?-12:l>y.right-60?12:0;g&&i>12&&R==="ranch"&&(d.scrollLeft+=g),c=requestAnimationFrame(f)};c=requestAnimationFrame(f);const h=y=>{if(y.pointerId!==e.pointerId)return;l=y.clientX,i=Math.max(i,Math.hypot(y.clientX-a,y.clientY-r)),o(y),document.querySelectorAll(".feedHover").forEach(v=>v.classList.remove("feedHover")),r0(y.clientX,y.clientY)!==null&&document.elementFromPoint(y.clientX,y.clientY)?.closest(".animal, .horse, .savatar")?.classList.add("feedHover")},u=y=>{if(y.pointerId!==e.pointerId)return;cancelAnimationFrame(c),window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",u),s.remove(),D2=Date.now(),document.querySelectorAll(".feedHover").forEach(w=>w.classList.remove("feedHover"));const g=r0(y.clientX,y.clientY);if(g===null){n instanceof HTMLElement&&(n.style.visibility=""),i<12?j("Drag the food onto an animal! 🥕"):C.drop();return}if(n==="basket"&&!jo({op:"use",kind:"carrot"}))return;n instanceof HTMLElement&&n.remove();const v=nw.indexOf(t);Ip(g,v),k?.fx({k:"zoo",a:g,f:v})};window.addEventListener("pointermove",h),window.addEventListener("pointerup",u)}L("ranchWorld").addEventListener("pointerdown",e=>{const t=e.target,n=t.closest(".bucket");if(n)return af(e,n.dataset.feed,"bucket");const s=t.closest(".fallenApple");if(s)return af(e,"apple",s);t.closest(".rprop, .animal, .horse, .plot, .pet")&&e.stopPropagation()});L("ranchWorld").addEventListener("click",e=>{const t=e.target;if(!Ln()||R!=="ranch"||Date.now()-D2<400)return;const s=t.closest("[data-animal]");if(s){const f=+s.dataset.animal;Ip(f,0),k?.fx({k:"zoo",a:f,f:0});return}const o=t.closest("[data-horse]");if(o){xP(+o.dataset.horse);return}const i=t.closest("[data-r]")?.dataset.r;if(i==="egg"){U2(),jo({op:"egg"})&&(MP(),C.pickup());return}if(i==="honk"){N2(),k?.fx({k:"honk"});return}if(i==="apple"){const f=Math.floor(Math.random()*4);Q2(f),k?.fx({k:"apple",v:f});return}if(i==="barn"){$a(!0);return}if(i==="exit"){$a(!1);return}if(i==="mill"){const f=t.closest(".windmill");f?.classList.remove("whirl"),f?.offsetWidth,f?.classList.add("whirl"),C.swish();return}const a=t.closest("[data-plot]");if(a){EP(+a.dataset.plot,a);return}if(t.closest(".bucket, .fallenApple, .savatar, .pet"))return;const r=L("ranchWorld").getBoundingClientRect(),l=hn(),c=(e.clientX-r.left)/l,d=(e.clientY-r.top)/l;d<400||z2(c,d)});function EP(e,t){const n=ic()[e]??null,s=Al(n,oc());if(document.querySelector(".seedPick")?.remove(),!n){const o=document.createElement("div");o.className="seedPick",o.innerHTML=`<button data-seed="carrot">${jl}<span>Carrot</span></button><button data-seed="flower">${Kf()}<span>Flower</span></button>`,t.parentElement.appendChild(o),o.style.left=t.offsetLeft+t.offsetWidth/2+"px",o.style.top=t.offsetTop-8+"px",o.addEventListener("pointerdown",i=>i.stopPropagation()),o.addEventListener("click",i=>{i.stopPropagation();const a=i.target.closest("[data-seed]")?.dataset.seed;o.remove(),a&&jo({op:"plant",i:e,seed:a})&&(C.plant(),j("Planted! Now tap it to water 💧"))}),setTimeout(()=>o.remove(),6e3);return}if(!n.wet){jo({op:"water",i:e})&&(C.water(),t.classList.remove("watering"),t.offsetWidth,t.classList.add("watering"));return}if(s<3){j("Still growing! 🌱"),C.pop();return}jo({op:"pick",i:e})&&(C.pickup(),j(n.seed==="carrot"?"A carrot for your basket! 🥕":"Pretty flowers for your basket! 🌸"))}let l0=0;function SP(e,t){if(R!=="ranch")return;const n=Date.now();if(document.querySelectorAll("#ranchWorld .animal").forEach(s=>{const o=+s.dataset.animal,i=hn(),a=n/5200+o*1.7,r=(qe?gf:Jy)[o]+Math.sin(a)*32;s.style.left=(r-s.offsetWidth/i/2)*i+"px",s.classList.toggle("flipped",Math.cos(a)<0),s.classList.toggle("walking",Math.abs(Math.cos(a))>.35)}),e-l0>1e3&&(l0=e,ac()),Ct.length){const s=Ln();if(!s||s.where!==H2())Ct=[];else{const o=Ct[0],i=s.ride!==void 0?720:300,a=o.x-s.x,r=o.y-s.y,l=Math.hypot(a,r);if(l<6)Ct.shift();else{const c=Math.min(l,i*t),d={...s,x:s.x+a/l*c,y:s.y+r/l*c,flip:Math.abs(a)>2?a<0:s.flip};cn(d);const f=hn(),h=L("ranchScroll"),u=d.x*f-h.scrollLeft;u>-40&&u<h.clientWidth+40&&(u<h.clientWidth*.2||u>h.clientWidth*.8)&&(h.scrollLeft=d.x*f-h.clientWidth/2)}}}for(const[s,o]of xs){const i=document.querySelector(`#ranchWorld .horse[data-horse="${s}"]`);if(!i||i.classList.contains("away")){xs.delete(s);continue}const a=Is(s)-o.x,r=po-o.y,l=Math.hypot(a,r);if(l<8){xs.delete(s),i.classList.remove("trotting","flipped"),wl(i,Is(s),po);continue}const c=Math.min(l,460*t);o.x+=a/l*c,o.y+=r/l*c,i.classList.add("trotting"),i.classList.toggle("flipped",a<0),wl(i,o.x,o.y)}}function Op(){const e=document.getElementById("basketChip");if(!e)return;const t=R==="house"&&(!k||Te===ee||ue===k.myHouseId()),n=Ua(),o=n.egg+n.carrot+n.flower>0&&(R==="ranch"||t);e.classList.toggle("hidden",!o),e.classList.toggle("inHouse",R==="house"),o&&(e.innerHTML=`<span class="bIcon">${qi("basket",S9)}</span><span class="bcount" data-kind="egg">${ua}<b>${n.egg}</b></span><span class="bcount" data-kind="carrot">${jl}<b>${n.carrot}</b></span><span class="bcount" data-kind="flower">${Kf()}<b>${n.flower}</b></span>`)}L("basketChip").addEventListener("pointerdown",e=>{e.target.closest('.bcount[data-kind="carrot"]')&&R==="ranch"&&Ua().carrot>0&&af(e,"carrot","basket")});L("basketChip").addEventListener("click",()=>TP());function TP(){const e=R==="house"&&(!k||Te===ee||ue===k.myHouseId()),t={egg:["Eggs",ua],carrot:["Carrots",jl],flower:["Flowers",Kf()]},n=Jt("",(o,i)=>{const a=o.closest("[data-take]")?.dataset.take;if(!a)return;if(!e){j("Take it home to put it in your room! 🏠");return}const r="r"+Math.random().toString(36).slice(2,10),l=Math.max(120,Math.min(he-120,se+Y/2+(Math.random()-.5)*300));jo({op:"take",kind:a,id:r,room:S.get().currentRoom,x:l})&&(C.drop(),i(),j("It's in your room! Drag it to a hand to carry it ✋"))},"basketSheet"),s=Ua();n.root.querySelector(".card").innerHTML=`${en}<h2>My Basket</h2><p class="hint small">${e?"Tap one to put it in your room.":"Collect eggs, carrots and flowers at Rainbow Ranch, then take them home!"}</p>
    <div class="basketRows">${y0.map(o=>`<button class="bRow" data-take="${o}" ${s[o]?"":"disabled"}>${t[o][1]}<b>${s[o]}</b><span>${t[o][0]}</span></button>`).join("")}</div>`}window.__ranch=()=>({view:R,inBarn:qe,plots:ic().map(e=>e?{seed:e.seed,stage:Al(e,oc()),wet:!!e.wet}:null),basket:Ua(),me:Ln(),ridden:[...W2().keys()]});function PP(){const e=()=>{const s=document.getElementById("phoneNote");if(s&&!s.classList.contains("hidden")&&getComputedStyle(s).display!=="none"){const o=()=>{Sr||!s.classList.contains("hidden")&&getComputedStyle(s).display!=="none"||(s.classList.add("hidden"),Sr=!0,window.removeEventListener("resize",o),Se.hint())};L("phoneOk").addEventListener("click",()=>setTimeout(o,0),{once:!0}),window.addEventListener("resize",o);return}Sr=!0,Se.hint()};if(Oi.kind==="none"){e();return}nE();const t=Jt(sE(Oi.kind,Oi.entries),(s,o)=>{s.closest("#wnGo")&&(C.sparkle(),o())},"whatsNew "+Oi.kind);t.root.querySelector(".card").insertAdjacentHTML("afterbegin",en);const n=new MutationObserver(()=>{t.root.isConnected||(n.disconnect(),e())});n.observe(document.body,{childList:!0})}setTimeout(PP,500);window.__whatsnew=Oi;window.__hood=()=>k;window.__hood_url=()=>Il();window.__ui=()=>({view:R,currentHouseId:ue,mode:k?"hood":"solo",play:Se.mode()});KE({hood:()=>k,view:()=>R,solo:()=>Ut,myPres:ye,setPres:cn,toast:j,refreshNear:So,sfx:C,goMap:Fo,soloLook:()=>{const e=ee.get();return{look:Ea(e.characters[0]??{}),dog:e.dog??null}}});function q2(e){const t=new Set;for(const n of Object.values(e.rooms))for(const s of n.items)t.add(s.kind);for(const n of e.characters)n.held.left&&t.add(n.held.left.kind),n.held.right&&t.add(n.held.right.kind);return e.baby&&t.add("baby"),[...t]}let br=null,Bp=()=>!1;function F2(e){return br||(br=Bs(()=>p(()=>Promise.resolve().then(()=>Dl),void 0)).then(t=>(Bp=t.hasArt,t.boot(location.search,q2(S.get())))).then(t=>{for(let n=0;n<t.length;n++)if(de[t[n]]){Mo();break}s2()}),br)}function AP(e){const t=new Set(e),n=S.get();let s=!1;for(const o of n.rooms[n.currentRoom].items){const i=de[o.kind];if(!t.has(o.kind)||!i||o.art)continue;const a=X.querySelector(`.item[data-id="${o.id}"] .inner`);!a||a.querySelector("img.artimg")||(a.innerHTML=Qt(i,!0),s=!0)}ln(n),Kl(),s&&s2()}let c0=null;function RP(){if(c0)return;const e=As.filter(t=>t.kind!=="people"&&t.icon&&de[t.icon]).map(t=>t.icon);c0=Bs(()=>p(()=>Promise.resolve().then(()=>Dl),void 0)).then(t=>t.loadArtKinds(e)).then(()=>i2(),()=>{})}for(const e of["cats","shelf"])document.getElementById(e)?.addEventListener("pointerdown",RP,{once:!0,passive:!0});function CP(){return Bs(()=>p(()=>Promise.resolve().then(()=>Dl),void 0)).then(e=>e.boot(location.search,q2(S.get()))).then(e=>{AP(e.filter(t=>!!de[t]))})}d4();W5();_E();R7();i9(e=>e==="backyard"?M5():null);L("scenery").addEventListener("click",e=>{const t=e.target.closest("[data-yard-go]");t&&pp(t.dataset.yardGo==="backyard"?"backyard":"living")});const IP=uE(L("skyMount"));window.__sky=IP;Xl=S4({layer:X,stageWrap:L("stageWrap"),get:()=>S.get(),dispatch:e=>S.dispatch(e),clock:()=>k&&Te!==ee?k.now():Date.now(),canSend:()=>!k||Te===ee||!!k.speaksBaby,owner:()=>rp(),inHouse:()=>R==="house",play:()=>Se.isPlay(),editable:()=>ht(),toRoom:Qe,box:e=>{const t=de[e.kind];return t?{id:e.id,kind:e.kind,x:e.x,footY:Hs(t,e.y),flip:!!e.flip,scale:Ge(e),w:t.w,h:Xe(t),z:e.z}:null},holderId:()=>k&&Te!==ee&&k.pid?k.pid:ze||S.get().characters[0]?.id||"c1",holderSpot:e=>{const t=S.get(),n=k&&Te!==ee&&k.pid?k.pid:ze||t.characters[0]?.id||"",s=e||n,o=(a,r,l,c,d,f)=>{const h=c?.pose==="sit"||c?.pose==="lie"?c.pose:null,u=h==="lie"?t.rooms[t.currentRoom]?.items.find(g=>g.id===c?.item):void 0,y=d&&/^#[0-9a-fA-F]{6}$/.test(d)?d:"#f1c27d";return{x:a.x,y:a.y,flip:r,scale:l>0?l:1,pose:h,lieFlip:!!(h==="lie"&&u?.flip),skin:y,chibi:!!f}},i=t.characters.find(a=>a.id===s&&a.room===t.currentRoom);if(i){const a=vt(i);return o(wt(t.currentRoom,a,i),i.flip,Ps[i.size]??1,a,i.look2&&i.look2.skin||i.skin,!!i.look2)}if(k&&R==="house"){const a=s===k.pid?ye():k.presence.get(s);if(a&&a.where==="house"&&a.houseId===ue&&a.room===t.currentRoom){const r=Kt(s,a),l=k.players.get(s)?.look,c=l?.size??"kid";return o(wt(t.currentRoom,r,a),a.flip,Ps[c]??1,r,l?.look2&&l.look2.skin||l?.skin||"#f1c27d",!!l?.look2)}}return null},holderHere:e=>{if(!e)return!1;if(S.get().characters.some(s=>s.id===e))return!0;if(!k||Te===ee)return!1;const n=e===k.pid?ye():k.presence.get(e);return!!(n&&n.where==="house"&&n.houseId===ue)},occupied:()=>$o(void 0,k?.pid,!0),locked:()=>Xn(null),seatAt:(e,t,n)=>wt(e,t,n)}).render;$1=()=>Xl();Mo();Nt();Ws();OP();Ws();rc();C1();Mr();di.matches?Cs():Ws();requestAnimationFrame(()=>{Ws(),rc(),Yl()});function OP(){if(!tp)return;const e=_d(),t=S.get().characters[0];if(!t)return;const n=e==="door";if(S.dispatch({type:"char/update",id:t.id,patch:{...Qx(),flip:n?Md.flip:xd.flip}}),S.dispatch({type:"cat/set",cat:{name:"Clover",coat:3,room:n?"living":"backyard",x:n?jr:ws.x}}),S.dispatch({type:"dog/set",dog:{name:"Sunny",breed:3,owner:t.id}}),!S.get().rooms.backyard.items.some(s=>s.kind==="yard-swing"))for(const s of Nx)S.dispatch({type:"item/add",room:"backyard",item:{id:"yp-"+s.kind,kind:s.kind,x:s.x,y:s.y,flip:!1,z:1,scale:s.scale??1}});if(e!=="sheet"){const s=n?Md:xd;S.dispatch({type:"char/move",id:t.id,room:n?"living":"backyard",x:s.x,y:s.y}),S.dispatch({type:"room/switch",room:n?"living":"backyard"})}window.__pinCat=n?{x:jr}:{x:ws.x,y:ws.y},e==="play"?L("modePlay").click():(e==="decorate"||e==="door")&&L("modeDecorate").click(),e==="sheet"&&document.body.insertAdjacentHTML("beforeend",T5()),e==="compare"&&document.body.insertAdjacentHTML("beforeend",A5()),document.body.dataset.yard="ready"}function BP(e){const t=S.get(),n=e==="backyard"?xd:Md;Vt=null;const s=t.characters.find(o=>o.id===ze&&o.room===t.currentRoom)??t.characters.find(o=>o.room===t.currentRoom);if(s&&(S.dispatch({type:"char/update",id:s.id,patch:{flip:n.flip}}),S.dispatch({type:"char/move",id:s.id,room:e,x:n.x,y:n.y})),tp&&t.cat&&(S.dispatch({type:"cat/move",room:e,x:e==="backyard"?ws.x:jr}),window.__pinCat=e==="backyard"?{x:ws.x,y:ws.y}:{x:jr}),S.dispatch({type:"room/switch",room:e}),k&&Te!==ee){const o=ye();if(o&&o.where==="house"){const i=o.houseId?bp(o.houseId,e,n):n;nt({...o,room:e,x:i.x,y:i.y,flip:n.flip})}}requestAnimationFrame(()=>rc())}function zp(){const e=S.get(),t=k&&ye(),n=t&&t.where==="house"?t.x:e.characters.find(o=>o.room===e.currentRoom)?.x;if(n===void 0)return;const s=j2(e,n,se);Math.abs(s-se)>.5&&Je(s)}function j2(e,t,n){if(Y>=1e3||document.body.classList.contains("phone")||e.currentRoom==="backyard")return n;n=ei(n);const s=90;let o=null;for(const i of e.rooms[e.currentRoom]?.items??[]){const a=de[i.kind];if(!a||a.wall)continue;const r=a.w*Ge(i),l=i.x-r/2,c=i.x+r/2;if(r<160||r>Y-2*s||!(l<n&&c>n||l<n+Y&&c>n+Y))continue;const f=ei(l<n?l-16:c+16-Y);t-s<f||t+s>f+Y||l<f-1||c>f+Y+1||(!o||r>o.w)&&(o={cam:f,w:r})}return e.currentRoom==="living"?zP(e,t,o?o.cam:n,s):o?o.cam:n}function zP(e,t,n,s){let a=(e.rooms.living?.items??[]).flatMap(r=>{const l=de[r.kind];if(!l||l.wall)return[];const c=l.w*Ge(r);return c>=60?[{l:r.x-c/2,r:r.x+c/2,w:c}]:[]}).filter(r=>r.r>n&&r.l<n+Y);if(!a.some(r=>r.l<n+8||r.r>n+Y-8))return n;for(a.sort((r,l)=>l.w-r.w);a.length;){const r=Math.max(Math.max(...a.map(c=>c.r))+8-Y,t+s-Y),l=Math.min(Math.min(...a.map(c=>c.l))-8,t-s);if(r<=l){const c=ei(Math.min(l,Math.max(r,n)));if(c>=r-1&&c<=l+1)return c}a=a.slice(0,-1)}return n}function rc(){if(S.get().currentRoom==="backyard"){Je($d),Un();return}if(!tp||_d()==="sheet"||_d()==="compare")return;const e=S.get().characters.find(t=>t.room===S.get().currentRoom);e&&Je(e.x-Y/2),Un()}function Un(){if(xo)return;const e=Z.getBoundingClientRect();if(e.width<20)return;const t=dt()||parseFloat(Z.style.getPropertyValue("--yard-sc"))||1;Z.style.setProperty("--yard-sc",String(t));const n=[...Z.querySelectorAll(".yardDoor")];for(const g of n){g.style.minWidth="",g.style.transform="";const v=g.querySelector(".yardHintLabel");if(!v)continue;v.style.transform="",v.style.translate="",v.style.visibility="";const w=v.querySelector("span");w&&(w.style.transform="");const m=Math.max(13,16/t);v.style.fontSize=m+"px",v.style.lineHeight="1";const b=38/t;v.style.height=b+"px";const _=3/t,P=Math.max(0,(b-_*2-m)/2);v.style.padding=`${P.toFixed(2)}px ${(14/t).toFixed(2)}px`}const s=n[0];if(!s)return;const o=s.querySelector(".doorArt"),i=s.querySelector(".yardHintLabel");s.style.transform="",i&&(i.style.translate="",i.style.visibility="");const a=o&&o.getBoundingClientRect().width>2?o.getBoundingClientRect():s.getBoundingClientRect(),r=Math.min(a.right,e.right)-Math.max(a.left,e.left),l=Math.min(a.bottom,e.bottom)-Math.max(a.top,e.top),c=r>Math.max(16,a.width*.3)&&l>20,f=Z.classList.contains("sceneArtOn")&&Se.isPlay();if(!c&&f){i&&(i.style.visibility="hidden"),Nc(s);return}i&&(i.style.visibility="");const h=6,u=()=>{const g=Z.getBoundingClientRect(),v=s.getBoundingClientRect(),w=o?.getBoundingClientRect(),m=i?.getBoundingClientRect(),b=[v,w,m].filter(z=>!!z&&z.width>2&&z.height>2),_=Math.min(...b.map(z=>z.top)),P=Math.max(...b.map(z=>z.bottom));let $=g.left+h,M=g.right-h;for(const z of["nudgeL","nudgeR"]){const V=L(z);if(!V||V.classList.contains("off")||V.offsetParent===null)continue;const U=V.getBoundingClientRect();if(U.width<2||U.height<2)continue;const F=we=>we.top<U.bottom-1&&we.bottom>U.top+1,oe=[v,w].some(we=>we&&we.width>2&&F(we));!oe&&(_>=U.bottom-1||P<=U.top+1)||(z==="nudgeL"&&oe?$=Math.max($,U.right+8):z==="nudgeR"&&oe&&(M=Math.min(M,U.left-8)))}return{leftLimit:$,rightLimit:M,doorR:v,artR:w,hintR:m}};if(!f){let g=0,v=0;for(;g++<4;){const{leftLimit:w,rightLimit:m,doorR:b,artR:_}=u();let P=0;const $=Math.min(b.left,_&&_.width>2?_.left:b.left),M=Math.max(b.right,_&&_.width>2?_.right:b.right);if($<w&&(P+=w-$),M+P>m&&(P-=M+P-m),Math.abs(P)<.5)break;v+=P,s.style.transform=`translate(${(v/t).toFixed(1)}px, 0)`}}if(!i){Nc(s);return}const y=i.querySelector("span");if(y){const g=document.createRange();g.selectNodeContents(y);const v=g.getBoundingClientRect(),w=i.getBoundingClientRect(),m=(w.top+w.bottom-(v.top+v.bottom))/2,b=y;v.height>2&&Math.abs(m)>=.1?b.style.transform=`translateY(${(m/t).toFixed(2)}px)`:b.style.transform=""}if(!f){const g=i.getBoundingClientRect(),v=Z.getBoundingClientRect();let w=0;if(S.get().currentRoom==="backyard"&&o){const m=o.getBoundingClientRect();m.width>2&&(w+=(m.left+m.right)/2-(g.left+g.right)/2)}g.left+w<v.left+h?w+=v.left+h-(g.left+w):g.right+w>v.right-h&&(w-=g.right+w-(v.right-h)),Math.abs(w)>.5?i.style.translate=`calc(-50% + ${(w/t).toFixed(1)}px) 0`:i.style.translate=""}Nc(s)}F2(S.get().currentRoom);const Z2=()=>{const e=Vl().size,t=Fr.length,n=L("secrets"),s=n.querySelector(".secCount");s&&(s.textContent=`${e}/${t}`),n.setAttribute("aria-label",`Surprises, ${e} of ${t}`),S1()};function lc(){return window.innerHeight>window.innerWidth+40}function G2(e,t){for(const F of e)F.style.transform="";if(!lc()||!e.length)return;const n=t&&t.clientWidth>20?t.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth};if(n.width<20)return;const s=8,o=Math.max(n.left,0)+s,i=Math.min(n.right,window.innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,window.innerHeight)-s,l=Math.max(40,i-o),c=Math.max(40,r-a),f=e.map(F=>F.getBoundingClientRect()).filter(F=>F.width>2&&F.height>2);if(!f.length)return;const h=Math.min(...f.map(F=>F.left)),u=Math.max(...f.map(F=>F.right)),y=Math.min(...f.map(F=>F.top)),g=Math.max(...f.map(F=>F.bottom)),v=Math.max(1,u-h),w=Math.max(1,g-y),m=Math.min(1,l/v,c/w);if(m>.995&&h>=o-1&&u<=i+1&&y>=a-1&&g<=r+1)return;const _=e[0].getScreenCTM(),P=_&&Math.hypot(_.a,_.b)||1,$=(h+u)/2,M=(y+g)/2,z=w*m,V=(o+i)/2,U=y>=a&&g<=r?M:Math.min(Math.max(M,a+z/2),r-z/2);for(const F of e){const oe=F.getBoundingClientRect(),we=(oe.left+oe.right)/2,Ke=(oe.top+oe.bottom)/2,Ie=V+(we-$)*m,I=U+(Ke-M)*m;F.style.transformBox="fill-box",F.style.transformOrigin="center",F.style.transform=`translate(${((Ie-we)/P).toFixed(2)}px, ${((I-Ke)/P).toFixed(2)}px) scale(${m.toFixed(3)})`}}function Y2(){if(R!=="gameroom")return;const e=document.getElementById("grScroll");G2([...document.querySelectorAll(".neonSignArt")],e)}function rf(){R!=="ranch"||qe||(document.querySelectorAll(".ranchSignArt").forEach(e=>{e.style.transform=""}),ft(),K2(),Dp())}function Dp(){if(R!=="ranch"||qe)return;const e=document.getElementById("ranchScroll");if(!e)return;const t=e.getBoundingClientRect();document.querySelectorAll(".ranchSignArt").forEach(n=>{const s=n.getBoundingClientRect(),o=Math.min(t.right,innerWidth),i=Math.max(0,t.left-s.left)+Math.max(0,s.right-o);n.style.visibility=s.width>20&&i<8?"visible":"hidden"})}L("ranchScroll").addEventListener("scroll",()=>{R==="ranch"&&!qe&&Dp()},{passive:!0});function K2(){const e=document.querySelector(".doorHint"),t=document.getElementById("ranchScroll");if(!e||!t)return;e.style.transform="translateX(-50%)";const n=t.getBoundingClientRect(),s=8,o=Math.max(n.left,0)+s,i=Math.min(n.right,innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,innerHeight)-s,l=e.getBoundingClientRect();let c=0;l.right>i&&(c-=l.right-i),l.left+c<o&&(c+=o-(l.left+c));let d=0;const f=t.querySelector(".savatar");if(f){const h=f.getBoundingClientRect(),y=f.querySelector(".nametag")?.getBoundingClientRect(),g=!!(y&&y.width>4&&y.height>4),v=g?Math.min(h.top,y.top):h.top,w=g?Math.min(h.left,y.left):h.left,m=g?Math.max(h.right,y.right):h.right,b=l.left+c;l.right+c>w-6&&b<m+6&&l.bottom+d>v-6&&l.top<h.top+h.height*.72&&(d+=v-48-(l.bottom+d))}if(l.top+d<a&&(d+=a-(l.top+d)),document.body.classList.contains("phone-portrait")){const h=document.querySelector(".ranchSign .ranchSignArt");if(h){const u=h.getBoundingClientRect(),y=l.left+c,g=l.right+c,v=l.top+d,w=l.bottom+d;if(u.width>20&&u.height>u.width*.7&&g>u.left+4&&y<u.right-4&&w>u.top+4&&v<u.bottom-4){let b=u.top-16-w;v+b<a&&(b+=a-(v+b));const P=f?.querySelector(".nametag")?.getBoundingClientRect(),$=w+b;!(P&&P.width>4&&P.height>4&&$>P.top-12&&g>P.left-6&&y<P.right+6)&&$<=r&&(d+=b)}}}(c||d)&&(e.style.transform=`translate(calc(-50% + ${c.toFixed(1)}px), ${d.toFixed(1)}px)`)}const X2=j4({world:np,roomW:he,roomH:Ce,currentRoom:()=>S.get().currentRoom,sparkle:()=>C.sparkle(),tap:()=>C.click(),onFound:(e,t)=>{if(Z2(),t){const n=L("secrets");n.classList.remove("pulse"),n.offsetWidth,n.classList.add("pulse"),setTimeout(()=>j("🎁 A secret surprise appeared in your drawer!"),1400),Nt()}}});S.subscribe((e,t)=>{(t.type==="room/switch"||t.type==="game/reset")&&X2.update()});Z2();window.__eggs=()=>({found:[...Vl()]});AT();const lf={restored:"The saved house had a hiccup, so we opened the last good copy.",unreadable:"We couldn't open the saved house, so we started a new one. The old one is kept safely on this iPad.",full:"This iPad is out of room, so new changes can't be saved yet. Your house is safe for now. To free space, delete old photos or apps in Settings › General › iPad Storage."},td=ee.trouble(),d0=[td?lf[td]:"",ee.fullAtStart&&td!=="full"?lf.full:""].filter(Boolean).join(" ");d0&&J0(d0);ee.onTrouble(e=>J0(lf[e]));
