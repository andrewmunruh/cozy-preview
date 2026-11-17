(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const q2="modulepreload",j2=function(e){return"/cozy-preview/"+e},Cp={},p=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(n.map(l=>{if(l=j2(l),l in Cp)return;Cp[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":q2,c||(f.as="script"),f.crossOrigin="",f.href=l,r&&f.setAttribute("nonce",r),document.head.appendChild(f),c)return new Promise((h,u)=>{f.addEventListener("load",h),f.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return o.then(a=>{for(const r of a||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},F2="ea7ce388371d",ac="cozy-sw-killed";let Ip=!1;async function Z2(e){try{const t=new AbortController,n=setTimeout(()=>t.abort(),4e3),s=await fetch(e+"sw-switch.json?t="+Date.now(),{cache:"no-store",signal:t.signal});if(clearTimeout(n),!s.ok)return!1;const o=await s.json();return!!o&&o.sw==="off"}catch{return!1}}async function G2(e){const t=location.origin+e,n=e==="/kids-house-game/";try{for(const s of await navigator.serviceWorker.getRegistrations())(s.scope===t||s.scope.startsWith(t))&&await s.unregister()}catch{}try{if("caches"in self)for(const s of await caches.keys())(n&&s==="cozy-v1"||s.startsWith("cozy:"+e+":"))&&await caches.delete(s)}catch{}}async function Y2(e){if(!("serviceWorker"in navigator))return;const t=navigator.serviceWorker;if(await Z2(e.base)){await G2(e.base);let o=!1;try{o=sessionStorage.getItem(ac)==="1",sessionStorage.setItem(ac,"1")}catch{o=!0}t.controller&&!o&&location.reload();return}try{sessionStorage.removeItem(ac)}catch{}t.addEventListener("message",o=>{const i=o.data;i&&i.type==="cozy-sw"&&typeof i.build=="string"&&!i.build.startsWith("__")&&i.build!==F2&&!Ip&&(Ip=!0,K2(e))}),t.addEventListener("controllerchange",()=>{try{t.controller?.postMessage({type:"cozy-build?"})}catch{}});let n;try{n=await t.register(e.base+"sw.js")}catch{return}try{t.controller?.postMessage({type:"cozy-build?"})}catch{}let s=Date.now();document.addEventListener("visibilitychange",()=>{document.visibilityState!=="visible"||Date.now()-s<10*6e4||(s=Date.now(),n?.update().catch(()=>{}))})}function K2(e){const t=()=>location.reload(),n=()=>{if(e.safeNow&&!e.safeNow()){setTimeout(n,2e3);return}(e.showNote??X2)(t)};n()}function X2(e){if(document.querySelector(".updateNote"))return;const t=document.createElement("div");t.className="toast grownNotice updateNote",t.setAttribute("role","status"),t.innerHTML='<span>New stuff! Tap to refresh</span><button type="button">Refresh</button>',t.addEventListener("click",e),(document.getElementById("toastLane")??document.body).appendChild(t)}const J2=150;function ey(e,t,n){const s=n.gap??J2,o=Math.max(n.minY,Math.min(n.maxY,e.y)),i=r=>Math.max(n.minX,Math.min(n.maxX,r)),a=r=>t.every(l=>Math.abs(l.x-r)>=s||Math.abs(l.y-o)>=s*.6);for(let r=0;r<=12;r++)for(const l of r?[1,-1]:[1]){const c=i(e.x+l*r*s*.6);if(a(c))return{x:c,y:o}}return{x:i(e.x),y:o}}const sa="#5a3d5c",oe=(e=4)=>`stroke="${sa}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,rc=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],Un=1e3,Qn=700,lc="M 30 660 C 150 640, 200 540, 330 545 S 540 650, 690 600 S 925 470, 850 375 S 640 330, 520 355 S 270 385, 250 285 S 330 145, 480 150 S 700 200, 790 150",os={x:115,y:170},un={x:880,y:120},mn={x:600,y:480},is={x:400,y:260},i0=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="22" rx="20" ry="6" fill="#000" opacity=".1"/><rect x="-5" y="2" width="10" height="20" rx="4" fill="#c99366" ${oe(3)}/><circle cx="0" cy="-10" r="20" fill="${s}" ${oe(3)}/><circle cx="-12" cy="-2" r="12" fill="${s}" ${oe(3)}/><circle cx="12" cy="-3" r="13" fill="${s}" ${oe(3)}/><circle cx="-5" cy="-16" r="5" fill="#fff" opacity=".35"/></g>`,Vs=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})" fill="#fff"><ellipse cx="0" cy="10" rx="46" ry="22"/><ellipse cx="-36" cy="16" rx="28" ry="16"/><ellipse cx="38" cy="14" rx="30" ry="18"/><ellipse cx="10" cy="2" rx="24" ry="18"/></g>`,Hi=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">${[0,72,144,216,288].map(o=>`<circle cx="${(Math.cos(o*Math.PI/180)*8).toFixed(1)}" cy="${(Math.sin(o*Math.PI/180)*8).toFixed(1)}" r="6.5" fill="${n}" ${oe(2)}/>`).join("")}<circle r="4.5" fill="#ffd43b" ${oe(2)}/></g>`,as=(e,t,n)=>`<g transform="translate(${e} ${t})">${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*4}" cy="${Math.sin(s*Math.PI/180)*4}" r="3.6" fill="${n}"/>`).join("")}<circle r="2.6" fill="#ffd43b"/></g>`;function ty(){return`<svg class="mapBg" viewBox="0 0 ${Un} ${Qn}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${Un}" height="${Qn}" rx="34" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="160" cy="420" rx="150" ry="90"/><ellipse cx="760" cy="250" rx="170" ry="70"/><ellipse cx="480" cy="640" rx="140" ry="50"/><ellipse cx="930" cy="600" rx="90" ry="110"/></g>
  <g fill="#93d78e" opacity=".7"><ellipse cx="420" cy="260" rx="70" ry="30"/><ellipse cx="80" cy="560" rx="60" ry="26"/><ellipse cx="700" cy="420" rx="50" ry="22"/></g>
  <!-- pond -->
  <ellipse cx="120" cy="470" rx="72" ry="40" fill="#8ecae6" ${oe()}/><ellipse cx="108" cy="462" rx="42" ry="16" fill="#bde6f7"/><path d="M150 480 q8 -6 16 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <!-- side paths to the park and the ranch -->
  <path d="M250 285 Q190 250 150 215" fill="none" stroke="${sa}" stroke-width="30" stroke-linecap="round"/><path d="M250 285 Q190 250 150 215" fill="none" stroke="#f2dcb8" stroke-width="22" stroke-linecap="round"/>
  <!-- the street -->
  <path d="${lc}" fill="none" stroke="${sa}" stroke-width="58" stroke-linecap="round"/>
  <path id="mapRoad" d="${lc}" fill="none" stroke="#f2dcb8" stroke-width="48" stroke-linecap="round"/>
  <path d="${lc}" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="18 16" stroke-linecap="round" opacity=".9"/>
  <!-- town square -->
  <g transform="translate(${mn.x} ${mn.y})"><circle r="74" fill="#f7e6c8" ${oe()}/><circle r="74" fill="none" stroke="#e6cfa6" stroke-width="10" stroke-dasharray="10 12" transform="scale(.82)"/>
    <circle r="30" fill="#bde6f7" ${oe()}/><circle r="13" fill="#fff6e6" ${oe(3)}/><path d="M0 -13 Q-8 -32 -16 -20 M0 -13 Q8 -32 16 -20 M0 -13 V-34" fill="none" stroke="#74c0fc" stroke-width="4" stroke-linecap="round"/>
    ${as(-52,-40,"#ff8fab")}${as(54,-38,"#b197fc")}${as(-56,40,"#ffd43b")}${as(52,44,"#ff8fab")}</g>
  ${[[60,330,"#ff8fab"],[300,470,"#b197fc"],[430,560,"#ffd43b"],[760,520,"#ff8fab"],[950,260,"#b197fc"],[600,260,"#ffd43b"],[380,90,"#ff8fab"],[40,120,"#b197fc"],[960,420,"#ffd43b"],[840,640,"#b197fc"],[210,620,"#ff8fab"]].map(([e,t,n])=>as(+e,+t,String(n))+as(+e+14,+t+8,String(n))).join("")}
  </svg>`}function Op(e,t,n=Un,s=Qn){const o=[];let i=7;const a=()=>(i=(i*9301+49297)%233280)/233280;for(let r=0;r<260&&o.length<34;r++){const l=30+a()*(n-60),c=40+a()*(s-70);t(l,c)||e.some(d=>Math.hypot(d.x-l,d.y-c)<d.r)||(e.push({x:l,y:c,r:46}),o.push(i0(l,c,.75+a()*.45,["#5cc985","#4fbf7a","#78d39a"][r%3])))}return`<svg class="mapTrees" viewBox="0 0 ${n} ${s}" xmlns="http://www.w3.org/2000/svg">${o.join("")}</svg>`}function ny(e,t){const n=e/2,s=`M ${n} 36 C ${n-36} ${t*.28}, ${n+28} ${t*.48}, ${n-8} ${t*.68} S ${n+18} ${t*.86}, ${n} ${t-28}`;return`<svg class="mapBg" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="${t}" rx="28" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="${e*.22}" cy="${t*.22}" rx="90" ry="48"/><ellipse cx="${e*.78}" cy="${t*.42}" rx="80" ry="40"/><ellipse cx="${e*.3}" cy="${t*.72}" rx="100" ry="46"/></g>
  <ellipse cx="78" cy="${t*.58}" rx="46" ry="28" fill="#8ecae6" ${oe()}/><ellipse cx="70" cy="${t*.56}" rx="24" ry="10" fill="#bde6f7"/>
  <path d="${s}" fill="none" stroke="${sa}" stroke-width="44" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#f2dcb8" stroke-width="34" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" stroke-linecap="round" opacity=".9"/>
  ${[[40,250,"#ff8fab"],[500,280,"#b197fc"],[70,520,"#ffd43b"],[490,640,"#ff8fab"],[50,860,"#74c0fc"],[500,980,"#ffd43b"]].map(([o,i,a])=>as(+o,+i,String(a))+as(+o+16,+i+10,String(a))).join("")}
  </svg>`}const sy=(e,t,n=1,s="#4fbf7a")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="10" rx="28" ry="8" fill="#000" opacity=".08"/><circle cx="-14" cy="-2" r="16" fill="${s}" ${oe(3)}/><circle cx="14" cy="0" r="18" fill="${s}" ${oe(3)}/><circle cx="0" cy="-12" r="14" fill="${s}" ${oe(3)}/><circle cx="-4" cy="-16" r="4" fill="#fff" opacity=".28"/></g>`,oy=(e,t,n="#ff8fab")=>`<g transform="translate(${e} ${t})"><ellipse cx="-7" cy="-2" rx="8" ry="5" fill="${n}" ${oe(2)} transform="rotate(-24)"/><ellipse cx="7" cy="-2" rx="8" ry="5" fill="${n}" ${oe(2)} transform="rotate(24)"/><ellipse cx="-6" cy="4" rx="6" ry="4" fill="#b197fc" ${oe(1.6)} transform="rotate(18)"/><ellipse cx="6" cy="4" rx="6" ry="4" fill="#b197fc" ${oe(1.6)} transform="rotate(-18)"/><path d="M0 -6 V8" ${oe(2)}/></g>`;function iy(e,t,n){const s=e/2,o=(f,h,u)=>h>t*.4&&h<t-28&&Math.abs(f-s)>52&&!n.some(y=>Math.hypot(y.x-f,y.y-h)<y.r+u),i=[.07,.15,.22,.78,.85,.93],a=[.46,.54,.62,.7,.78,.86,.93],r=["#ff8fab","#b197fc","#ffd43b","#74c0fc","#69db7c"],l=[];let c=0;a.forEach((f,h)=>{i.forEach((u,y)=>{const m=Math.round(e*u+((h+y)%2?8:-6)),v=Math.round(t*f);if((h+y)%3===0){if(!o(m,v,34))return;l.push(sy(m,v,.85+y%2*.15,["#4fbf7a","#5cc985","#3dae6a"][(h+y)%3]))}else{if(!o(m,v,18))return;const w=r[(h*2+y)%r.length];l.push(Hi(m,v,w,.85)),(h+y)%2===0&&o(m+18,v+12,14)&&l.push(Hi(m+18,v+12,r[(h+y+2)%r.length],.7))}c++})});const d=[[e*.2,t*.5],[e*.8,t*.66],[e*.18,t*.84]];for(const[f,h]of d)o(f,h,16)&&l.push(oy(Math.round(f),Math.round(h),c%2?"#ffd43b":"#ff8fab"));return`<svg class="mapMeadowFill" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">${l.join("")}</svg>`}const ay=`<svg class="mapSkyArt" viewBox="0 0 900 200" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
  ${Vs(280,28,1.05)}${Vs(430,8,.8)}${Vs(560,36,.95)}
  ${Vs(250,88,.75)}${Vs(390,108,1.05)}${Vs(540,96,.85)}${Vs(640,78,.7)}
  <g fill="none" stroke-linecap="round">
    ${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M300 ${118+t*6} A70 48 0 0 1 430 ${112+t*6}" stroke="${e}" stroke-width="5"/>`).join("")}
  </g>
</svg>`,ry=`<svg class="mapMeadowArt" viewBox="0 0 900 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
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
</svg>`,Bp=`<svg viewBox="0 0 200 170"><ellipse class="parkLawn" cx="100" cy="100" rx="94" ry="62" fill="#7fd68a" ${oe()}/>
  <ellipse cx="62" cy="120" rx="30" ry="14" fill="#8ecae6" ${oe(3)}/>
  <path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" stroke="#ff6b6b" stroke-width="7" stroke-linecap="round"/><path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" ${oe(2)}/>
  <path d="M112 62 V100 M134 62 V100" ${oe(2.5)}/><rect x="104" y="98" width="16" height="7" rx="3" fill="#ffd43b" ${oe(2.5)}/><rect x="126" y="98" width="16" height="7" rx="3" fill="#74c0fc" ${oe(2.5)}/>
  ${i0(40,66,1)}
  <path d="M150 128 L176 88 H186 L162 132 Z" fill="#b197fc" ${oe(3)}/><path d="M178 88 V132" ${oe(4)}/>
</svg>`,zp=`<svg viewBox="0 0 220 180"><ellipse class="ranchGrass" cx="110" cy="132" rx="104" ry="44" fill="#a6e3a0" ${oe()}/>
  ${rc.map((e,t)=>`<path d="M${20+t*7} 120 A${90-t*7} ${84-t*7} 0 0 1 ${200-t*7} 120" fill="none" stroke="${e}" stroke-width="7"/>`).join("")}
  <path d="M60 140 V82 L80 58 H140 L160 82 V140 Z" fill="#ef5b5b" ${oe(4)}/>
  <path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${sa}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  ${rc.map((e,t)=>`<path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${e}" stroke-width="1.3" transform="translate(0 ${-3+t*1.2})"/>`).join("")}
  <rect x="88" y="100" width="44" height="40" rx="3" fill="#d94848" ${oe(3)}/><path d="M88 100 L132 140 M132 100 L88 140" stroke="#fff6e6" stroke-width="3"/>
  <rect x="94" y="70" width="32" height="18" rx="4" fill="#fff6e6" ${oe(3)}/>
  <path d="M10 150 H52 M168 150 H212 M14 140 V158 M30 140 V158 M46 140 V158 M174 140 V158 M190 140 V158 M206 140 V158" stroke="#fff6e6" stroke-width="5" stroke-linecap="round"/><path d="M10 150 H52 M168 150 H212" ${oe(1.5)}/>
  <g transform="translate(178 122) scale(.42)"><ellipse cx="0" cy="0" rx="34" ry="18" fill="#fff" ${oe(5)}/><path d="M24 -8 L40 -34 L54 -26 L36 2 Z" fill="#fff" ${oe(5)}/>${rc.slice(0,4).map((e,t)=>`<path d="M38 ${-34+t*5} q-14 4 -20 14" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round"/>`).join("")}<path d="M-20 14 V34 M20 14 V34" ${oe(6)}/></g>
</svg>`,Dp=`<svg viewBox="0 0 190 156">
  <ellipse cx="95" cy="118" rx="88" ry="32" fill="#ffd0e6" ${oe()}/>
  <path d="M28 108 V62 L95 28 L162 62 V108 Z" fill="#fff0f6" ${oe(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="#ff6b9a" ${oe(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="none" stroke="#ffd43b" stroke-width="3" stroke-dasharray="6 5"/>
  <rect x="78" y="78" width="34" height="30" rx="4" fill="#ff8ec8" ${oe(3)}/>
  <path d="M95 86 C90 80 82 82 86 90 C90 96 95 100 95 100 C95 100 100 96 104 90 C108 82 100 80 95 86 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  <rect x="42" y="74" width="22" height="16" rx="3" fill="#66d9e8" ${oe(2)}/><rect x="126" y="74" width="22" height="16" rx="3" fill="#d0bfff" ${oe(2)}/>
  ${[36,52,68,84,100,116,132,148].map((e,t)=>`<circle class="clubBulb" cx="${e}" cy="58" r="3.2" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" ${oe(1.4)}/>`).join("")}
  <circle cx="154" cy="48" r="3" fill="#fff" opacity=".9"/><circle cx="40" cy="44" r="2.4" fill="#fff" opacity=".85"/>
</svg>`,tf=`<svg viewBox="0 0 48 48"><path d="M6 12 L17 8 L31 13 L42 9 V36 L31 40 L17 35 L6 39 Z" fill="#fff3b0" ${oe(3)}/><path d="M17 8 V35 M31 13 V40" ${oe(2.5)}/><path d="M9 30 Q16 22 22 27 T38 18" fill="none" stroke="#ff8fab" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="36" cy="18" r="4" fill="#ff6b6b" ${oe(2)}/></svg>`,nf=e=>e.indexOf("data-chibi")>=0?e.replace('viewBox="0 0 200 320"','viewBox="24 0 152 168"'):e.replace('viewBox="0 0 100 160"','viewBox="14 2 72 74"'),a0=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),ly={piano:"keys",keyboard:"keys",stove:"stove","yard-swing":"swing","cc-macrame-swing":"swing","little-slide":"slide",aquarium:"water","cc-cottage-aquarium":"water",fish:"water","pink-fountain":"water","lily-pond":"water",birdbath:"water","doll-house":"dollhouse"};function sf(e){return ly[a0(e)]??null}const cy=e=>a0(e)==="rubber-ducky",Us={play:110,listen:260,stir:140,swing:70,slide:90,look:200,kneel:120},Hp=9e3;function dy(e,t,n,s,o={}){const i=sf(e);if(!i)return null;switch(i){case"keys":return o.keysPlaying?.has(t)?!s&&n<=Us.play?{kind:"play",d:n}:n<=Us.listen?{kind:"listen",d:n+40}:null:null;case"stove":return!s&&o.opened?.has(t)&&n<=Us.stir?{kind:"stir",d:n}:null;case"swing":return!s&&n<=Us.swing?{kind:"swing",d:n}:null;case"slide":return!s&&n<=Us.slide?{kind:"slide",d:n}:null;case"water":return n<=Us.look?{kind:"look",d:n+20}:null;case"dollhouse":return!s&&n<=Us.kneel?{kind:"kneel",d:n}:null}}const ul=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),fy={"cute-speaker":"stereo","cc-record-player":"stereo","retro-radio":"stereo","music-box":"musicbox",tv:"tv",fireplace:"fire","brick-fireplace":"fire","wc-woodstove":"fire",woodstove:"fire","wc-stone-hearth":"fire","fire-pit":"fire"};function hs(e){return fy[ul(e)]??null}function r0(e){return hs(e)!==null}function of(e){const t=ul(e);return t==="ball"||t==="beach-ball"||t==="balloon"?"bounce":t==="teddy"||/plush/.test(t)?"hug":null}const Nn=e=>/(^|-)tub$/.test(ul(e)),si=e=>/fridge$/.test(ul(e)),py={stereo:220,musicbox:160,tv:280,fire:230},Kc=70,l0=130,hy=.4,uy=6,Wp=2e4,Be=900,gy=["stereo","tv","fire","musicbox"];function my(e,t){let n=2166136261;const s=e+"|"+t;for(let o=0;o<s.length;o++)n^=s.charCodeAt(o),n=Math.imul(n,16777619);return(n>>>0)%1e3/1e3}const cc=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5);function yy(e,t,n={}){const s=new Map,o=[...t].sort((r,l)=>r.id<l.id?-1:r.id>l.id?1:0),i=e.filter(r=>r.on&&hs(r.kind)&&!(hs(r.kind)==="musicbox"&&n.musicBoxDone?.has(r.id))),a=[];for(const r of o){if(r.lying)continue;let l=null;for(const c of gy){for(const d of i){if(hs(d.kind)!==c)continue;const f=cc(r,d);if(f>py[c]||r.seated&&c!=="tv"&&c!=="musicbox")continue;const h=c==="stereo"?"dance":c==="tv"?"watch":c==="fire"?"warm":"sway";(!l||f<l.d||f===l.d&&d.id<l.it.id)&&(l={c:r,it:d,d:f,kind:h})}if(l)break}if(!l)for(const c of e){const d=dy(c.kind,c.id,cc(r,c),!!r.seated,{...n,opened:n.opened??n.fridgesOpen});if(d&&(!l||d.d<l.d||d.d===l.d&&c.id<l.it.id)&&(l={c:r,it:c,d:d.d,kind:d.kind}),r.seated)continue;const f=of(c.kind);let h=null,u=cc(r,c);f&&u<=Kc?h=f:si(c.kind)&&n.fridgesOpen?.has(c.id)&&u<=l0?h="nibble":Nn(c.kind)&&Math.abs(r.x-c.x)<=(c.w??240)*hy&&Math.abs(r.y-c.y)<=40&&(h="bathe"),h&&(!l||u<l.d||u===l.d&&c.id<l.it.id)&&(l={c:r,it:c,d:u,kind:h})}l&&a.push(l)}a.sort((r,l)=>r.d-l.d||(r.c.id<l.c.id?-1:1));for(const r of a.slice(0,uy))s.set(r.c.id,{kind:r.kind,item:r.it.id,phase:my(r.it.id,r.c.id),face:r.it.x<r.c.x?-1:1});return s}function oo(e,t,n){return-((n+e*t)%t)}const wt=e=>"preview:"+e,wy=400,gl=["#ffe0c4","#f6d2b5","#f1c27d","#e0ac69","#c9956c","#c68642","#a86b3c","#8d5524","#5c3a1e","#3d2914"],ml=["#2b1d16","#5b3a29","#a0522d","#f4d58d","#ff8fab","#8ecae6","#b388d6","#ff9f43","#1d1416","#c8602a","#7a4b32","#f7f1e8"],af=["#5a321c","#3f9b52","#3d7ec4","#c48a3a","#7b4fb8"],Dt=["#ff7aa8","#ffd166","#5aa9e6","#80ed99","#c9a0dc","#ff9f68","#ffffff","#5a3d5c","#ff8f7a","#7ec8c3","#f7f3ee","#f4a3c8","#6b8e4e","#e8d5b5","#ef6b6b","#3d4a6b"],yl=["short","bob","buns","topbun","pixie","long","wavy","puffs","afro","curlybob","coily","boxbraids","braids","sidebraid","crown","pony","sidepony","pigtails","lowbun","locs","halfup","bangs","sidebangs","wavybob"],wl=["classic","stripes","hoodie","sweater","tank","puff","ruffle","button","jersey","cardigan","bib","raincoat"],bl=["pants","jeans","shorts","skirt","tutu","leggings","overalls","joggers"],vl=["","twirl","sundress","party","pinafore","jumper","ballet","nightgown","raindress"],kl=["classic","sneakers","lightup","boots","rainboots","sandals","maryjanes","slippers"],_l=["round","big","sleepy","sparkle","soft","bright"],Ho=["glasses","square","sunnies","bow","bigbow","headband","flower","cap","beanie","sunhat","catears","earmuffs"],by=new Set(yl),vy=new Set(wl),ky=new Set(bl),_y=new Set(vl),$y=new Set(kl),xy=new Set(_l),My=new Set(Ho),Ly=new Set(["short","pixie","coily","afro","bangs"]),Ey=new Set(["buns","puffs"]),Sy=new Set(["topbun","lowbun"]),Ty={hair:"buns",hairC:"#5b3a29",skin:"#f1c27d",eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"pants",bottomC:"#5aa9e6",dress:"",dressC:"#ff7aa8",shoes:"classic",shoesC:"#5a3d5c",accC:"#ffd166"};function Py(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function So(e,t){return typeof e=="string"&&t.has(e)}function Tn(e,t){if(typeof e!="string")return null;const n=e.trim().toLowerCase();for(let s=0;s<t.length;s++)if(t[s]===n)return t[s];return null}function _a(e){if(!Py(e))return null;let t=0;try{t=JSON.stringify(e).length}catch{return null}if(t>wy)return null;const n={v:1};So(e.hair,by)&&(n.hair=e.hair);const s=Tn(e.hairC,ml);s&&(n.hairC=s);const o=Tn(e.skin,gl);o&&(n.skin=o),So(e.eyes,xy)&&(n.eyes=e.eyes);const i=Tn(e.eyeC,af);i&&(n.eyeC=i),(e.freckles===!0||e.freckles===!1)&&(n.freckles=e.freckles),(e.blush===!0||e.blush===!1)&&(n.blush=e.blush),So(e.top,vy)&&(n.top=e.top);const a=Tn(e.topC,Dt);a&&(n.topC=a),So(e.bottom,ky)&&(n.bottom=e.bottom);const r=Tn(e.bottomC,Dt);r&&(n.bottomC=r),So(e.dress,_y)&&(n.dress=e.dress);const l=Tn(e.dressC,Dt);l&&(n.dressC=l),So(e.shoes,$y)&&(n.shoes=e.shoes);const c=Tn(e.shoesC,Dt);if(c&&(n.shoesC=c),Array.isArray(e.acc)){const f=[];for(let h=0;h<e.acc.length&&f.length<2;h++){const u=e.acc[h];typeof u=="string"&&My.has(u)&&f.indexOf(u)<0&&f.push(u)}n.acc=f}const d=Tn(e.accC,Dt);return d&&(n.accC=d),n}function Rs(e){const t=Ty,n=e??{};return{v:1,hair:n.hair??t.hair,hairC:n.hairC??t.hairC,skin:n.skin??t.skin,eyes:n.eyes??t.eyes,eyeC:n.eyeC??t.eyeC,freckles:n.freckles??t.freckles,blush:n.blush??t.blush,top:n.top??t.top,topC:n.topC??t.topC,bottom:n.bottom??t.bottom,bottomC:n.bottomC??t.bottomC,dress:n.dress??t.dress,dressC:n.dressC??t.dressC,shoes:n.shoes??t.shoes,shoesC:n.shoesC??t.shoesC,acc:n.acc?n.acc.slice():[],accC:n.accC??t.accC}}function Vp(e){const t=/^#([0-9a-f]{6})$/i.exec(e.trim());if(!t){const s=/^#([0-9a-f]{3})$/i.exec(e.trim());return s?[parseInt(s[1][0]+s[1][0],16),parseInt(s[1][1]+s[1][1],16),parseInt(s[1][2]+s[1][2],16)]:null}const n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function Wa(e,t){const n=Tn(e,t);if(n)return n;const s=Vp(e);if(!s)return t[0];let o=t[0],i=1e12;for(let a=0;a<t.length;a++){const r=Vp(t[a]);if(!r)continue;const l=(s[0]-r[0])*(s[0]-r[0])+(s[1]-r[1])*(s[1]-r[1])+(s[2]-r[2])*(s[2]-r[2]);l<i&&(i=l,o=t[a])}return o}function Ay(e){return Ly.has(e)?0:Ey.has(e)?2:Sy.has(e)?3:1}function Ry(e){for(let t=0;t<e.length;t++){const n=e[t];if(n==="glasses"||n==="square"||n==="sunnies")return 2}for(let t=0;t<e.length;t++){const n=e[t];if(n==="cap"||n==="beanie"||n==="sunhat")return 3}for(let t=0;t<e.length;t++){const n=e[t];if(n==="bow"||n==="bigbow")return 1}return 0}function $l(e){const t=Rs(e),n=t.dress!=="";return{skin:t.skin,hair:t.hairC,hairStyle:Ay(t.hair),shirt:n?t.dressC:t.topC,pants:n?t.dressC:t.bottomC,acc:Ry(t.acc)}}const Cy=["short","bob","buns","topbun"];function oa(e){const t=typeof e.hairStyle=="number"&&e.hairStyle>=0&&e.hairStyle<=3?Math.round(e.hairStyle):0,n=e.acc===1?["bow"]:e.acc===2?["glasses"]:e.acc===3?["cap"]:[],s=Wa(String(e.shirt??""),Dt);return{v:1,hair:Cy[t],hairC:Wa(String(e.hair??""),ml),skin:Wa(String(e.skin??""),gl),eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:s,bottom:"pants",bottomC:Wa(String(e.pants??""),Dt),dress:"",dressC:s,shoes:"classic",shoesC:"#5a3d5c",acc:n,accC:"#ffd166"}}function ia(e){const t=_a(e)??{},n=Rs(t);return{...$l(n),look2:n}}const Iy=new Set(["glasses","square","sunnies"]),Oy=new Set(["bow","bigbow","flower","headband"]),By=new Set(["cap","beanie","sunhat","catears","earmuffs"]);function Ar(e){return Iy.has(e)?"face":Oy.has(e)?"bow":By.has(e)?"hat":"other"}function ot(e,t){return t[Math.floor(e()*t.length)]}function xl(e=Math.random){const t=e()<.38,n=e();let s=[];if(n<.22)s=[];else if(n<.68)s=[ot(e,Ho)];else{const o=ot(e,Ho),i=Ho.filter(a=>Ar(a)!==Ar(o));s=[o,ot(e,i)]}return{v:1,hair:ot(e,yl),hairC:ot(e,ml),skin:ot(e,gl),eyes:ot(e,_l),eyeC:ot(e,af),freckles:e()<.4,blush:e()<.85,top:ot(e,wl),topC:ot(e,Dt),bottom:ot(e,bl),bottomC:ot(e,Dt),dress:t?ot(e,vl.filter(o=>o!=="")):"",dressC:ot(e,Dt),shoes:ot(e,kl),shoesC:ot(e,Dt),acc:s,accC:ot(e,Dt)}}function zy(e,t=Math.random){const n=e.characters[0];if(!n)return e;const s=xl(t),o=$l(s),i=e.characters.slice();return i[0]={...n,...o,look2:s},{...e,characters:i}}function c0(e){const t=e.characters[0];if(!t||t.look2)return e;const n=e.characters.slice();return n[0]={...t,look2:{...oa(t),eyes:"sparkle"}},{...e,characters:n}}function Dy(e){const t=[e.skin,e.hair,e.hairStyle,e.shirt,e.pants,e.acc,e.look2?JSON.stringify(e.look2):""].join("|");return e.costume?t+"|cos:"+e.costume:t}const Up={m:10,d:24},Qp={m:11,d:2},Rr={yellow:"#ffd166",denim:"#4f7fb8",rose:"#f28fb0",mint:"#7fd8b8"},Hy=["helper-yellow","helper-denim","helper-rose","helper-mint","witch","cat","ghost","skeleton","bat"],Wy=new Set(Hy),Np={helper:"Yellow Helper",witch:"Witch hat",cat:"Black cat",ghost:"Ghost sheet",skeleton:"Bone PJs",bat:"Bat cape"};function $o(e){return typeof e=="string"&&Wy.has(e)?e:null}function Vy(e=new Date){const t=e.getMonth()+1,n=e.getDate();return t===Up.m?n>=Up.d:t===Qp.m?n<=Qp.d:!1}function Uy(){const e=typeof globalThis<"u"?globalThis:{};if(typeof e.__costumeDate=="string"){const t=new Date(e.__costumeDate+"T12:00:00");if(!isNaN(+t))return t}return new Date}function Ml(){return Vy(Uy())}function Qy(e){if(!e||e.costume==null)return null;const t=$o(e.costume);return t&&Ml()?t:null}const $a=3600,ro=470,qn=590,Js=["goat","sheep","piglet","chicks","bunny","cow"],Ny=[1085,1215,1345,1470,1600,1735],qy=520,rf=1900,lf=[600,800,1e3,1200,1400,1600],Xc=435,jy=["Chestnut","Snowy","Midnight","Sunny","Rainbow"],d0=[2470,2600,2730,2860,2990],lo=540,Fy=["pet","carrot","apple","hay"],Jc=6,Zy=e=>3175+e*68,Gy=8e4,ed=20,Yy=1500,f0=["egg","carrot","flower"],Ky={egg:"ranch-egg",carrot:"ranch-carrot",flower:"ranch-bouquet"},Xy=()=>({egg:0,carrot:0,flower:0}),Jy=(e,t,n)=>Number.isInteger(e)&&e>=t&&e<=n?e:null;function cf(e){const t=Xy();if(!e||typeof e!="object")return t;for(const n of f0)t[n]=Jy(e[n],0,ed)??0;return t}function df(e){const t=Array(Jc).fill(null);if(Array.isArray(e))for(let n=0;n<Jc;n++){const s=e[n];if(!s||s.seed!=="carrot"&&s.seed!=="flower")continue;const o=Number(s.at),i=Number(s.wet);Number.isFinite(o)&&Number.isFinite(i)&&(t[n]={seed:s.seed,at:o,wet:i})}return t}function Ll(e,t){if(!e||!e.wet)return 0;const n=(t-e.wet)/Gy;return n>=1?3:n>=.4?2:1}function td(e,t,n,s,o=0){const i=e.slice(),a={...t};switch(n.op){case"plant":return i[n.i]?"taken":(i[n.i]={seed:n.seed,at:s,wet:0},{plots:i,basket:a,garden:!0});case"water":{const r=i[n.i];return r?r.wet?"wet":(i[n.i]={...r,wet:s},{plots:i,basket:a,garden:!0}):"empty"}case"pick":{const r=i[n.i];return r?Ll(r,s)<3?"notReady":a[r.seed]>=ed?"full":(a[r.seed]++,i[n.i]=null,{plots:i,basket:a,garden:!0,got:r.seed}):"empty"}case"egg":return s-o<Yy?"slow":a.egg>=ed?"full":(a.egg++,{plots:i,basket:a,garden:!1,got:"egg"});case"use":return a.carrot<=0?"none":(a.carrot--,{plots:i,basket:a,garden:!1});case"take":return a[n.kind]<=0?"none":(a[n.kind]--,{plots:i,basket:a,garden:!1})}}const ls=80,ew=30*24*60*60*1e3,tw=5,p0=6,es=["#ffd6e8","#fff3b0","#d8f5e8","#e6d6ff","#d6efff"],nw=/^m[A-Za-z0-9]{4,40}$/,sw=/^[A-Za-z0-9:_\/.-]{1,80}$/;function dc(e,t=Date.now()){const n=Math.floor((t-e)/864e5);return n<=0?"today":n===1?"yesterday":n<7?"a few days ago":"a while ago"}function ow(e,t=Date.now()){const n=e?.letters;if(!Array.isArray(n))return null;const s=[];for(const i of n.slice(-30*2)){if(!i||typeof i!="object")continue;const a=i;if(typeof a.id!="string"||!nw.test(a.id)||typeof a.from!="string")continue;const r=a.from.normalize("NFC").replace(/\s+/g," ").trim();if(!r||r.length>24||typeof a.fromPid!="string"||!sw.test(a.fromPid)||typeof a.text!="string"||a.text.length>ls||typeof a.at!="number"||!Number.isFinite(a.at)||t-a.at>ew||a.at>t+864e5||!Number.isInteger(a.color)||a.color<0||a.color>=tw||!Number.isInteger(a.sticker)||a.sticker<0||a.sticker>=p0)continue;const l=a.text.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(l.length>ls)continue;const c={id:a.id,from:r,fromPid:a.fromPid,text:l,color:a.color,sticker:a.sticker,at:a.at};a.read===!0&&(c.read=!0),s.push(c)}const o=s.slice(-30);return o.length?{letters:o}:null}function ff(e){return e?.letters.filter(t=>!t.read&&t.text).length??0}const iw=/^[A-Za-z0-9:_\/.-]{1,80}$/,h0=/crib|bassinet|high-?chair|cat-bed|pet-bed|dog-bed|kennel|tulip|flower|toadstool|mobile/,fc={bed:{head:{x:.24,y:.42},pillow:{x:.1,y:.27,w:.22,h:.18},mattress:{x:.36,y:.34,w:.36,h:.16},clip:"starter"},"wooden-bed":{head:{x:.22,y:.53},pillow:{x:.12,y:.36,w:.24,h:.18},mattress:{x:.38,y:.46,w:.32,h:.16},clip:"wooden"},"checker-bed":{head:{x:.16,y:.45},pillow:{x:.08,y:.26,w:.22,h:.22},mattress:{x:.38,y:.4,w:.32,h:.16},clip:"checker"},"bunk-bed":{head:{x:.11,y:.62},pillow:{x:.05,y:.52,w:.18,h:.14},mattress:{x:.22,y:.56,w:.36,h:.14},clip:"bunk"},"canopy-bed":{head:{x:.38,y:.52},pillow:{x:.28,y:.46,w:.24,h:.14},mattress:{x:.48,y:.48,w:.28,h:.16},clip:"canopy"},"cc-heart-bed":{head:{x:.22,y:.67},pillow:{x:.12,y:.58,w:.26,h:.16},mattress:{x:.36,y:.64,w:.36,h:.16},clip:"heart"},"cc-canopy-daybed":{head:{x:.37,y:.58},pillow:{x:.26,y:.5,w:.26,h:.16},mattress:{x:.48,y:.54,w:.3,h:.16},clip:"daybed"},"wc-plaid-bed":{head:{x:.24,y:.26},pillow:{x:.08,y:.14,w:.3,h:.2},mattress:{x:.36,y:.18,w:.3,h:.18},clip:"wooden"}},aw=["bed","pack:wooden-bed","pack:checker-bed","pack:bunk-bed","pack:canopy-bed","pack:cc-heart-bed","pack:cc-canopy-daybed","pack:wc-plaid-bed"];function u0(e){return e==="bed"||/bunk/.test(e)||/daybed/.test(e)?!0:/(^|[-_:])bed$/.test(e)}function rw(){return aw.slice()}function El(e){const t=String(e||"").toLowerCase();if(!t||h0.test(t)||!u0(t))return null;const n=t.replace(/^pack:/,"");return fc[n]||fc[t]||fc.bed}const lw={head:{x:55.0733,y:59.7445},chest:{x:60,y:114},hip:{x:60,y:138},classic:{x:60,y:52.8}},qp=48,jp=138.24;function g0(e,t){const n=-90*Math.PI/180,s=Math.cos(n),o=Math.sin(n),i=e-qp,a=t-jp,r=qp+s*i-o*a,l=jp+o*i+s*a;return{x:r-60,y:l-192}}function Cr(e,t){const n=lw[e],s=g0(n.x,n.y);return{x:t?-s.x:s.x,y:s.y}}const Fp=120,pc=192,cw=.26;function dw(e,t,n,s,o=1){const i=o>0?o:1;if(n==="lie"&&s){const r=-t*i+210.24,l=-e*i+186.24;return{x:-Fp*i/2+r,y:-pc*i+l}}if(n==="lie"){const r=g0(e,t);return{x:r.x*i,y:r.y*i}}const a=n==="sit"?cw*pc*i:0;return{x:(e-Fp/2)*i,y:(t-pc)*i+a}}function fw(e,t,n,s,o){const i=El(e);if(!i||t<1||n<1)return null;const a=Cr("head",!1),r=(i.head.x-.5)*t-a.x,l=(i.head.y-1)*n-a.y,c=Cr(s,o);return{x:.5+((o?-r:r)+c.x)/t,y:1+(l+c.y)/n}}function Kn(e){const t=String(e||"").toLowerCase();return!t||h0.test(t)?null:u0(t)?{pose:"lie",spots:[{dx:0,dy:0}]}:/sofa|couch|loveseat/.test(t)?{pose:"sit",spots:[{dx:-.18,dy:-.33},{dx:.18,dy:-.33}]}:/armchair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/bench|window-seat/.test(t)?{pose:"sit",spots:[{dx:-.22,dy:-.3},{dx:.22,dy:-.3}]}:/ottoman/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/stool|rocker/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.38}]}:/chair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.48}]}:null}function m0(e){const t=Kn(e.kind);if(!t)return[];const n=e.scale||1,s=t.pose==="lie"?El(e.kind):null;if(s){const o=e.w*n,i=e.h*n,a=Cr("head",!1),r=(s.head.x-.5)*o-a.x,l=(s.head.y-1)*i-a.y;return[{x:e.x+(e.flip?-r:r),y:e.footY+l,pose:"lie",n:0}]}return t.spots.map((o,i)=>{const a=o.dx*e.w*n,r=o.dy*e.h*n,l=i===1?1:0;return{x:e.x+(e.flip?-a:a),y:e.footY+r,pose:t.pose,n:l}})}function Wo(e){const t=(r,l)=>({x:r,y:l,seat:null,toast:null,moved:!0});if(e.mode!=="play")return t(e.releaseX,e.releaseY);const n=e.piece;if(!n)return e.via==="drag"?t(e.releaseX,e.releaseY):{x:e.releaseX,y:e.releaseY,seat:null,toast:null,moved:!1};if(e.via==="tap"&&e.alreadyOn===n.id)return t(n.x,n.footY);const s=new Set(e.occupied.filter(r=>r.item===n.id).map(r=>r.n)),o=m0(n).filter(r=>!s.has(r.n));if(!o.length)return e.via==="tap"?{x:e.releaseX,y:e.releaseY,seat:null,toast:"Someone is already there!",moved:!1}:t(e.releaseX,e.releaseY);let i=o[0],a=1/0;for(const r of o){const l=(r.x-e.releaseX)**2+(r.y-e.releaseY)**2;l<a&&(i=r,a=l)}return{x:i.x,y:i.y,seat:{item:n.id,pose:i.pose,n:i.n},toast:null,moved:!0}}const pw={sofa:260,armchair:150,bed:300,chair:100,stool:90,rocker:190,"yard-bench":140,"bar-stool":52.8,"bunk-bed":294,"canopy-bed":294,"cc-bubble-chair":142,"cc-canopy-daybed":276,"cc-dryer-chair":164,"cc-heart-bed":236,"cc-mani-chair":188,"cc-mushroom-stool":112,"cc-scallop-loveseat":248,"checker-bed":196,"cloud-sofa":212,"comfy-armchair":161.7,"cream-sofa":234.6,"egg-chair":126,"fancy-sofa":234.6,"gaming-chair":101.4,"lattice-bench":147,"puffy-stool":46.9,"rocking-chair":137.2,"salon-chair":111.8,"swivel-stool":46.2,"waiting-bench":166.6,"wash-chair":186.2,"wood-armchair":127.4,"wood-stool":46.2,"wooden-bed":235.2};function jn(e){const t=String(e||"").toLowerCase().replace(/^pack:/,"");return pw[t]??320}const oi=540;function jo(e,t,n,s=2400){const o=Math.max(0,t)/2+70,i=40;let a=n<e-8?-1:1,r=e+a*o;return(r<i||r>s-i)&&(a=-a,r=e+a*o),r<i&&(r=i),r>s-i&&(r=s-i),{x:r,y:oi}}function pf(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.item!="string"||!iw.test(t.item)||t.pose!=="sit"&&t.pose!=="lie"||t.n!==0&&t.n!==1?null:{item:t.item,pose:t.pose,n:t.n}}function nd(e,t){if(!e)return null;const n=pf(e);return!n||!t?.some(s=>s&&s.id===n.item)?null:n}const io=["sleepy","hungry","playful","clean"],hw=1,uw=4*6e4,gw=2*6e4,mw=75e3;function yw(e,t){return e.characters.some(n=>gf(n))?uw:t===0?mw:gw}const hf=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),ww=/^(cake|juice|cupcake|cookie|apple|pie|pizza|donut|sandwich|milk|bread|fruit|.*-cake|.*-pie|.*cookies?)$/,ln=e=>ww.test(hf(e)),Fo=e=>!!of(e)||hf(e)==="rubber-ducky";function uf(e){if(!e||typeof e!="object")return null;const t={};for(const n of io){const s=e[n];if(typeof s!="number"||!Number.isFinite(s))continue;const o=Math.max(0,Math.min(3,Math.round(s)));o<3&&(t[n]=o)}return Object.keys(t).length?t:null}function co(e,t){const n=e?.needs?.[t];return typeof n=="number"?Math.max(0,Math.min(3,n)):3}function gf(e){let t=null,n=hw+1;for(const s of io){const o=co(e,s);o<n&&(n=o,t=s)}return t}function y0(e,t){if(t)return{...e,needs:t};if(!("needs"in e))return e;const{needs:n,...s}=e;return s}const hc=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5),Zp=(e,t)=>!!(e.held.left&&t(e.held.left.kind)||e.held.right&&t(e.held.right.kind)),bw=e=>jn(e.kind)*(e.scale||1)*(e.size||1);function mf(e,t,n){const s=e.rooms[t.room]?.items??[];switch(n){case"sleepy":return t.seat?.pose==="lie"&&s.some(o=>o.id===t.seat.item);case"clean":return s.some(o=>Nn(o.kind)&&Math.abs(t.x-o.x)<=Math.max(60,bw(o)*.45)&&Math.abs(t.y-o.y)<=60);case"hungry":return Zp(t,ln)||s.some(o=>si(o.kind)&&hc(t,o)<=l0+30||ln(o.kind)&&hc(t,o)<=Kc+40);case"playful":return Zp(t,Fo)||s.some(o=>Fo(o.kind)&&hc(t,o)<=Kc+40)}}function vw(e,t){return io.filter(n=>co(t,n)<3&&mf(e,t,n))}function kw(e,t,n){const s=e.characters.find(a=>a.id===t);if(!s||co(s,n)>=3||!mf(e,s,n))return e;const o={...s.needs??{}};delete o[n];const i=y0(s,uf(o));return{...e,characters:e.characters.map(a=>a.id===t?i:a)}}function _w(e,t,n){const s=e.characters.find(a=>a.id===t),o=co(s,n);if(!s||o<=0)return e;const i=y0(s,uf({...s.needs??{},[n]:o-1}));return{...e,characters:e.characters.map(a=>a.id===t?i:a)}}function $w(e,t){const n=Object.values(e.rooms).flatMap(c=>c?.items??[]),s={sleepy:n.some(c=>/bed$|^bed|sofa|couch/.test(hf(c.kind))),hungry:n.some(c=>si(c.kind)||ln(c.kind)),playful:n.some(c=>Fo(c.kind)),clean:n.some(c=>Nn(c.kind))},o=c=>c[(t%c.length+c.length)%c.length],i=[];for(const c of[...e.characters].sort((d,f)=>d.id<f.id?-1:1)){const d=!!gf(c);for(const f of io)if(s[f]){const h=co(c,f);h>0&&i.push({id:c.id,need:f,l:h,wish:d})}}if(!i.length)return null;const a=i.filter(c=>!c.wish);if(a.length){const c=a.filter(f=>f.l<3),d=c.length?o(c):o(a);return{id:d.id,need:d.need}}const r=Math.max(...i.map(c=>c.l)),l=o(i.filter(c=>c.l===r));return{id:l.id,need:l.need}}const sd=45e3,xw=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Gp=/^[A-Za-z0-9:_\/.-]{1,80}$/,Mw=/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u,Yp=["feed","burp","change","rock"];function fo(e){const t=String(e||"").toLowerCase();return!t||/mobile/.test(t)?null:/bassinet/.test(t)?"bassinet":t==="crib"||/(^|[-_:])crib$/.test(t)?"crib":null}function Lw(e){return e===2?"Cozy":"Happy"}function Ew(e){return e+1}function Sw(e){return xw.indexOf(e)>=0}function Tw(e){const t=typeof e=="number"&&Number.isFinite(e)?Math.round(e):2;return t<=2?2:t>=4?4:3}function w0(e){if(!e||typeof e!="object")return;const t=e,n={};let s=!1;for(let o=0;o<Yp.length;o++){const i=Yp[o],a=t[i];typeof a=="number"&&Number.isFinite(a)&&(n[i]=a,s=!0)}return s?n:void 0}function cn(e){const t={name:e.name,mood:e.mood,spot:e.spot,x:e.x,y:e.y,room:e.room,since:e.since};(e.spot==="crib"||e.spot==="bassinet")&&e.bed&&(t.bed=e.bed),e.spot==="mat"&&e.seat&&(t.seat=e.seat),e.spot==="arms"&&e.holder&&(t.holder=e.holder);const n=w0(e.at);return n&&(t.at=n),t}function yf(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Pw(e,t){if(!e||typeof e!="object")return null;const n=e,s=String(n.name??"").normalize("NFC").replace(/\s+/g," ").trim();if(!Mw.test(s)||(s.match(/\d/g)||[]).length>2)return null;let o=n.spot==="crib"||n.spot==="bassinet"||n.spot==="arms"||n.spot==="mat"?n.spot:"mat";const i=Sw(n.room)?n.room:"nursery",a=typeof n.x=="number"&&Number.isFinite(n.x)?Math.max(0,Math.min(2400,n.x)):700,r=typeof n.y=="number"&&Number.isFinite(n.y)?Math.max(0,Math.min(600,n.y)):540,l=typeof n.since=="number"&&Number.isFinite(n.since)?n.since:0,c=Tw(n.mood);let d=typeof n.bed=="string"&&Gp.test(n.bed)?n.bed:void 0,f=pf(n.seat)??void 0,h=typeof n.holder=="string"&&Gp.test(n.holder)?n.holder:void 0;if(t){const u=t[i]?.items??[];if(o==="crib"||o==="bassinet"){let y=!1;for(let m=0;m<u.length;m++){const v=u[m];v&&v.id===d&&fo(String(v.kind||""))===o&&(y=!0)}y||(o="mat",d=void 0)}if(f){let y=!1;for(let m=0;m<u.length;m++)u[m]&&u[m].id===f.item&&(y=!0);y||(f=void 0)}}return o!=="crib"&&o!=="bassinet"&&(d=void 0),o!=="mat"&&(f=void 0),o!=="arms"&&(h=void 0),o==="arms"&&!h&&(o="mat"),cn({name:s,mood:c,spot:o,bed:d,seat:f,holder:h,x:a,y:r,room:i,at:w0(n.at),since:l})}function Aw(e,t){const n=e.nursery?.items??[];for(let s=0;s<n.length;s++){const o=n[s];if(!o||!o.id||fo(String(o.kind||""))!=="crib")continue;const i=typeof o.x=="number"&&Number.isFinite(o.x)?o.x:1170,a=typeof o.y=="number"&&Number.isFinite(o.y)?o.y:480;return cn({name:"Bean",mood:2,spot:"crib",bed:o.id,x:i,y:a,room:"nursery",since:t})}return cn({name:"Bean",mood:2,spot:"mat",x:700,y:540,room:"nursery",since:t})}function Rw(e,t,n){const s=Math.min(4,e.mood+1);return cn({...e,mood:s,at:{...e.at||{},[t]:n},since:n})}function Cw(e,t){if(!e.since){const i=cn({...e,since:t});return yf(i,e)?null:i}if(e.mood<=2)return null;const n=Math.floor((t-e.since)/sd);if(n<1)return null;const s=Math.min(n,e.mood-2),o=e.mood-s;return cn({...e,mood:o,since:e.since+s*sd})}function od(e,t,n,s,o){const i=cn(t?{...e,spot:"arms",holder:t,room:n,x:s,y:o,bed:void 0,seat:void 0}:{...e,spot:"mat",room:n,x:s,y:o,bed:void 0,seat:void 0,holder:void 0});return yf(i,e)?e:i}function Iw(e,t,n,s){let o=t.spot==="crib"||t.spot==="bassinet"?t.spot:"mat",i,a;if(o==="crib"||o==="bassinet"){let l=!1;for(let c=0;c<n.length;c++){const d=n[c];d&&d.id===t.bed&&fo(d.kind)===o&&(l=!0)}l&&t.bed?i=t.bed:o="mat"}if(o==="mat"&&t.seat){let l=null;for(let f=0;f<n.length;f++)n[f]&&n[f].id===t.seat.item&&(l=n[f]);const c=l?Kn(l.kind):null;let d=!1;for(let f=0;f<s.length;f++)s[f].item===t.seat.item&&s[f].n===t.seat.n&&(d=!0);l&&c&&c.pose===t.seat.pose&&!d&&(a=t.seat)}const r=cn({...e,spot:o,room:t.room,x:t.x,y:t.y,bed:i,seat:a,holder:void 0});return yf(r,e)?e:r}function Ow(e,t,n,s){const o=e.spot==="mat"&&e.seat?.item===t,i=!!n&&(e.spot==="crib"||e.spot==="bassinet")&&e.bed===t;return!o&&!i?e:cn({...e,spot:"mat",x:s?s.x:e.x,y:s?s.y:oi,bed:void 0,seat:void 0,holder:void 0})}function b0(e,t){const n=t.scale||1,s=t.w*n,o=t.h*n,i=fo(e);let a=i==="bassinet"?0:-.02*s;const r=i==="bassinet"?-.52*o:-.46*o;return t.flip&&(a=-a),{x:t.x+a,y:t.footY+r}}function Bw(e){const t=(o,i)=>({x:o,y:i,spot:"mat",bed:null,seat:null});if(e.mode!=="play"||!e.piece)return t(e.releaseX,e.releaseY);const n=fo(e.piece.kind);if(n){const o=b0(e.piece.kind,e.piece);return{x:o.x,y:o.y,spot:n,bed:e.piece.id,seat:null}}const s=Wo({mode:"play",via:"drag",releaseX:e.releaseX,releaseY:e.releaseY,piece:e.piece,occupied:e.occupied});return s.seat?{x:s.x,y:s.y,spot:"mat",bed:null,seat:s.seat}:t(e.releaseX,e.releaseY)}function zw(e,t=2400){const s=t-40>40?t-40:40;let o=e;return o>=40||(o=40),o>s&&(o=s),{x:o,y:oi}}function Dw(e,t){return!e||e.spot!=="mat"||!e.seat||e.room!==t?null:{item:e.seat.item,n:e.seat.n}}const aa=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Hw=["living","bedroom","kitchen","salon","nursery","bathroom"],v0=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],St=2400,Dn=600,k0=1e3,ii=(St-k0)/2,Wn=[.75,.875,1,1.25,1.5];function Fn(e){if(typeof e!="number"||!Number.isFinite(e))return 1;let t=1,n=1/0;for(const s of Wn){const o=Math.abs(e-s);o<n&&(n=o,t=s)}return t}function Ge(e){return(e?.scale||1)*Fn(e?.size)}function _0(e,t){const n=Fn(t);if(n===1){if(e.size==null)return e;const{size:s,...o}=e;return o}return e.size===n?e:{...e,size:n}}const ai=8,Ww=4,Vw=5,Uw=/^[A-Za-z0-9:_\/.-]{1,80}$/;function wf(e){const t=e?.dogKennel;if(!t||typeof t!="object"||typeof t.item!="string"||!Uw.test(t.item))return null;const n=e.rooms;if(!n)return null;for(const s of Object.values(n))if(s?.items?.some(o=>o&&o.id===t.item&&o.kind==="kennel"))return{item:t.item};return null}function Qw(e,t){return wf({dogKennel:{item:t},rooms:e.rooms})!==null}const J=(e,t,n,s,o=1)=>({id:e+"-"+s,kind:e,x:t+ii,y:n,flip:!1,z:s,scale:o});function Vn(){return{version:3,houseId:"local",currentRoom:"living",rooms:{living:{wallpaper:"#ffd6e0",floor:"#e8b98a",pattern:1,items:[J("sofa",470,470,1),J("lamp",230,470,2),J("plant",760,480,3),J("rug",480,530,0),J("picture",470,200,4),J("cat",600,520,5),J("window",-350,230,6),J("armchair",-300,480,7),J("bookshelf",1250,470,8),J("tree",1500,480,9),J("clock",1100,170,10)]},bedroom:{wallpaper:"#d9ccff",floor:"#f2d0a4",pattern:2,items:[J("bed",450,480,1),J("window",750,230,2),J("teddy",330,500,3),J("stars",300,180,4),J("tub",1350,480,5),J("lamp",-250,470,6),J("flowers",-150,500,7)]},salon:{wallpaper:"#ffe0f0",floor:"#f6d6ff",pattern:2,items:[J("rug",470,540,0),J("mirror",470,150,1),J("vanity",470,480,2),J("perfume",400,345,3),J("polish",450,345,4),J("hairdryer",560,340,5),J("stool",470,545,6),J("lamp",200,470,7),J("flowers",780,480,8),J("picture",780,200,9),J("chair",-250,490,10),J("mirror",-250,170,11),J("plant",1300,480,12)]},kitchen:{wallpaper:"#cdf3dc",floor:"#ffe7a8",pattern:3,items:[J("fridge",200,470,1),J("table",520,500,2),J("cake",520,395,3),J("stove",800,470,4),J("chair",380,500,5),J("chair",660,500,6),J("juice",470,395,7),J("plant",-300,480,8),J("fish",1300,480,9)]},nursery:{wallpaper:"#d6f3ff",floor:"#f3ddc4",pattern:1,items:[J("cloud-rug",480,545,0),J("crib",470,480,1),J("crib-mobile",470,155,2),J("rocker",780,490,3)]},bathroom:{wallpaper:"#d4f4fb",floor:"#f7e7d4",pattern:3,items:[J("bath-mat",180,560,0),J("shower-curtain",-40,520,1),J("soaking-tub",160,500,2),J("rubber-ducky",300,545,3),J("bath-toilet",480,500,4),J("sink-vanity",700,500,5),J("bath-mirror",700,175,6),J("towel-bar",940,200,7)]},backyard:{wallpaper:"#c5ecff",floor:"#b6e3a8",pattern:0,items:[{id:"yard-bench-1",kind:"yard-bench",x:1122,y:372,flip:!1,z:1,scale:1},{id:"tulip-bed-2",kind:"tulip-bed",x:946,y:580,flip:!1,z:2,scale:1}]}},characters:[Ms({id:"c1",skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6",room:"living",x:330+ii,y:540})],soundOn:!0,dogKennel:null}}function Ms(e){return{skin:"#f1c27d",hair:"#5b3a29",hairStyle:0,shirt:"#ff7aa8",pants:"#5aa9e6",size:"kid",acc:0,room:"living",x:St/2,y:540,flip:!1,held:{left:null,right:null},...e}}const Qs=(e,t,n)=>Math.max(t,Math.min(n,e)),ui=e=>e.items.reduce((t,n)=>Math.max(t,n.z),0),Nw=e=>e.items.reduce((t,n)=>Math.min(t,n.z),0);function Va(e,t,n){return{...e,characters:e.characters.map(s=>s.id===t?n(s):s)}}function qw(e,t,n){const s=e.baby;if(!t||!s||s.spot!=="arms"||s.holder!==t.id||n===s.room)return e;const o=t.room===s.room?t.x:s.x,i=t.room===s.room?t.y:oi,a=od(s,null,s.room,o,i);return!a||a===s?e:{...e,baby:a}}function ra(e){if(!e.seat)return e;const{seat:t,...n}=e;return n}let Ir=null;function $0(){const e=Ir;return Ir=null,e}function Ua(e,t,n,s){if(!e.baby)return e;const o=s?jo(s.x,jn(s.kind)*Ge(s),e.baby.x):null,i=Ow(e.baby,t,n,o);return i===e.baby?e:{...e,baby:i}}function Qa(e,t,n){n&&(Ir={id:t,x:n.x,kind:n.kind,scale:Ge(n)});let s=!1;const o=e.characters.map(i=>{if(i.seat?.item!==t)return i;if(s=!0,!n)return ra(i);const a=jo(n.x,jn(n.kind)*Ge(n),i.x),{seat:r,...l}=i;return{...l,x:a.x,y:a.y}});return s?{...e,characters:o}:e}function jw(e,t,n,s){if(!s){const i=nd(e.seat,t);return i?e.seat===i?e:{...e,seat:i}:ra(e)}const o=nd(n,t);return o?{...e,seat:o}:ra(e)}function it(e,t,n){const s=e.rooms[t];if(!s)return e;const o=n(s);return o===s?e:{...e,rooms:{...e.rooms,[t]:o}}}function Fw(e){const t=new Set;let n=!1;const s=e.map(o=>{if(!t.has(o.id))return t.add(o.id),o;n=!0;const i=String(o.id).replace(/-d\d+$/,"").replace(/[^A-Za-z0-9:_/.-]/g,"").slice(0,72)||"item";let a=2,r=(i+"-d"+a).slice(0,80);for(;t.has(r);)a+=1,r=(i+"-d"+a).slice(0,80);return t.add(r),{...o,id:r}});return n?s:e}function Zw(e){let t=!1;const n={...e.rooms};for(const s of aa){const o=e.rooms[s];if(!o||!Array.isArray(o.items))continue;const i=Fw(o.items);i!==o.items&&(n[s]={...o,items:i},t=!0)}return t?{...e,rooms:n}:e}function x0(e){if(!e||!e.rooms)return e;const t=Vn().rooms,n=e.rooms;let s=!1;for(const i of aa){const a=n[i];(!a||typeof a!="object"||!Array.isArray(a.items))&&(s=!0)}const o=s?(()=>{const i={...n};for(const a of aa){const r=n[a];(!r||typeof r!="object"||!Array.isArray(r.items))&&(i[a]=t[a])}return{...e,rooms:i}})():e;return Zw(o)}function Wi(e,t){switch(Ir=null,t.type){case"room/switch":return e.rooms[t.room]?{...e,currentRoom:t.room}:e;case"item/add":return it(e,t.room,n=>n.items.length>=80||n.items.some(s=>s.id===t.item.id)?n:{...n,items:[...n.items,{...t.item,z:ui(n)+1}]});case"item/move":{const n=e.rooms[t.room]?.items.find(o=>o.id===t.id)??null,s=it(e,t.room,o=>({...o,items:o.items.map(i=>i.id===t.id?{...i,x:Qs(t.x,0,St),y:Qs(t.y,40,Dn)}:i)}));return t.stand?Ua(Qa(s,t.id,n),t.id,!1,n):s}case"item/flip":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return Ua(Qa(it(e,t.room,s=>({...s,items:s.items.map(o=>o.id===t.id?{...o,flip:!o.flip}:o)})),t.id,n),t.id,!1,n)}case"item/size":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||Fn(n.size)===Fn(t.size)?e:it(e,t.room,s=>({...s,items:s.items.map(o=>o.id===t.id?_0(o,t.size):o)}))}case"item/power":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||!r0(n.kind)||!!n.on==!!t.on?e:it(e,t.room,s=>({...s,items:s.items.map(o=>{if(o.id!==t.id)return o;if(t.on)return{...o,on:!0};const{on:i,...a}=o;return a})}))}case"item/front":return it(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:ui(n)+1}:s)}));case"item/back":return it(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:Nw(n)-1}:s)}));case"item/delete":{const n=e.rooms[t.room]?.items.find(a=>a.id===t.id)??null,s=n?.kind==="kennel",o=Qa(it(e,t.room,a=>({...a,items:a.items.filter(r=>r.id!==t.id)})),t.id,n),i=s&&e.dogKennel?.item===t.id?{...o,dogKennel:null}:o;return Ua(i,t.id,!0,n)}case"room/wallpaper":return it(e,t.room,n=>({...n,wallpaper:t.color}));case"room/floor":return it(e,t.room,n=>({...n,floor:t.color}));case"room/pattern":return it(e,t.room,n=>({...n,pattern:t.pattern,wallTile:null}));case"room/wallTile":return it(e,t.room,n=>({...n,wallTile:t.tile}));case"room/floorTile":return it(e,t.room,n=>({...n,floorTile:t.tile}));case"char/add":return e.characters.length>=ai||e.characters.some(n=>n.id===t.char.id)?e:{...e,characters:[...e.characters,t.char]};case"char/update":return Va(e,t.id,n=>{const{look2:s,costume:o,...i}=t.patch,a={...n,...i};if("look2"in t.patch&&(s?a.look2=s:delete a.look2),"costume"in t.patch){const r=$o(o);r?a.costume=r:delete a.costume}return a});case"char/move":{if(!e.rooms[t.room])return e;const n=e.characters.find(o=>o.id===t.id),s=Va(e,t.id,o=>{const i={...o,room:t.room,x:Qs(t.x,0,St),y:Qs(t.y,60,Dn)};return jw(i,e.rooms[t.room].items,t.seat,"seat"in t)});return qw(s,n,t.room)}case"char/delete":{const n=e.characters.find(o=>o.id===t.id);if(!n)return e;let s={...e,characters:e.characters.filter(o=>o.id!==t.id)};if(["left","right"].forEach((o,i)=>{const a=n.held[o];a&&(s=it(s,n.room,r=>({...r,items:[...r.items,{...a,x:n.x+(i?40:-40),y:n.y,z:ui(r)+1}]})))}),s.baby?.spot==="arms"&&s.baby.holder===t.id){const o=od(s.baby,null,s.baby.room,s.baby.x,s.baby.y);o&&o!==s.baby&&(s={...s,baby:o})}return s}case"char/hold":{const n=e.characters.find(r=>r.id===t.id),s=e.rooms[t.room]?.items.find(r=>r.id===t.itemId);if(!n||!s||n.held[t.hand]||n.room!==t.room)return e;const o=Qa(it(e,t.room,r=>({...r,items:r.items.filter(l=>l.id!==t.itemId)})),t.itemId,s),i=Va(o,t.id,r=>({...r,held:{...r.held,[t.hand]:s}})),a=s.kind==="kennel"&&e.dogKennel?.item===t.itemId?{...i,dogKennel:null}:i;return Ua(a,t.itemId,!0,s)}case"char/release":{const n=e.characters.find(i=>i.id===t.id),s=n?.held[t.hand];if(!n||!s)return e;const o=Va(e,t.id,i=>({...i,held:{...i.held,[t.hand]:null}}));return it(o,n.room,i=>({...i,items:[...i.items,{...s,x:Qs(t.x,0,St),y:Qs(t.y,40,Dn),z:ui(i)+1}]}))}case"cat/set":return{...e,cat:t.cat};case"cat/move":return e.cat&&e.rooms[t.room]?{...e,cat:{...e.cat,room:t.room,x:Qs(t.x,100,St-100)}}:e;case"dog/set":return{...e,dog:t.dog};case"dog/kennel":return t.item===null?e.dogKennel?{...e,dogKennel:null}:e:!Qw(e,t.item)||e.dogKennel?.item===t.item?e:{...e,dogKennel:{item:t.item}};case"ranch/op":{const n=t.op;if(n.op==="take"){const i=e.rooms[n.room];if(i&&i.items.some(a=>a.id===n.id))return e}const s=td(df(e.garden),cf(e.basket),t.op,t.now,e.lastEgg??0);if(typeof s=="string")return e;let o={...e,garden:s.plots,basket:s.basket,lastEgg:t.op.op==="egg"?t.now:e.lastEgg};if(t.op.op==="take"&&o.rooms[t.op.room]){const i=t.op;o=it(o,i.room,a=>a.items.length>=80?a:{...a,items:[...a.items,{id:i.id,kind:Ky[i.kind],x:i.x,y:560,flip:!1,z:ui(a)+1,scale:1}]})}return o}case"settings/sound":return{...e,soundOn:t.on};case"game/reset":return c0(Vn());case"baby/meet":return e.baby?e:{...e,baby:Aw(e.rooms,t.now)};case"baby/name":return!e.baby||!t.name||t.name===e.baby.name?e:{...e,baby:cn({...e.baby,name:t.name})};case"baby/care":{if(!e.baby)return e;const n=Rw(e.baby,t.care,t.now);return n===e.baby?e:{...e,baby:n}}case"baby/hold":{if(!e.baby)return e;const n=od(e.baby,t.holder,t.room,t.x,t.y);return!n||n===e.baby?e:{...e,baby:n}}case"baby/place":{if(!e.baby||!e.rooms[t.room])return e;const n=e.characters.filter(o=>o.room===t.room&&o.seat).map(o=>({item:o.seat.item,n:o.seat.n})),s=Iw(e.baby,t,e.rooms[t.room].items,n);return s===e.baby?e:{...e,baby:s}}case"baby/ease":{if(!e.baby)return e;const n=Cw(e.baby,t.now);return n?{...e,baby:n}:e}case"need/meet":return kw(e,t.id,t.need);case"need/drift":return _w(e,t.id,t.need)}}const Na=wt("cozy-house"),Gw=wt("cozy-house-v1");function bf(e){if(!e||typeof e!="object"||!e.rooms)return Vn();let t=e;if(t.version===1){const f=u=>(Number(u)||0)+ii,h={};for(const[u,y]of Object.entries(t.rooms))h[u]={...y,items:(y.items??[]).map(m=>({...m,x:f(m.x)}))};t={...t,version:2,rooms:h,character:{...t.character,x:f(t.character?.x)}}}if(t.version===2){const f=t.character??{};t={...t,version:3,characters:[Ms({...f,id:"c1",size:"kid",acc:0,held:{left:null,right:null}})]},delete t.character}if(t.version!==3)return Vn();const n=Vn(),s=(Array.isArray(t.characters)?t.characters:[]).slice(0,ai).map((f,h)=>{const u=f?.look2,y=Ms({...f,id:String(f.id??"c"+(h+1)),held:{left:f.held?.left??null,right:f.held?.right??null}});if(delete y.look2,u!=null){const v=_a(u);v&&(y.look2=v)}if("costume"in y){const v=$o(y.costume);v?y.costume=v:delete y.costume}delete y.needs;const m=uf(f?.needs);return m&&(y.needs=m),y}),o=x0({...n,...t,rooms:{...n.rooms,...t.rooms},characters:s}),i=Kp(o),a=wf(i),r=a===o.dogKennel?o:{...o,dogKennel:a},l=ow(r.mailbox);let c=i===o?r:{...r,characters:i.characters};if(l)c={...c,mailbox:l};else if(c.mailbox){const{mailbox:f,...h}=c;c=h}const d=Pw(c.baby,c.rooms);if(d)c={...c,baby:d};else if("baby"in c){const{baby:f,...h}=c;c=h}return Kp(Yw(c))}function Kp(e){let t=!1;const n=e.characters.map(s=>{const o=nd(pf(s.seat),e.rooms[s.room]?.items);return o?s.seat?.item===o.item&&s.seat.pose===o.pose&&s.seat.n===o.n?s:{...s,seat:o}:s.seat?(t=!0,ra(s)):s});return!t&&n.every((s,o)=>s===e.characters[o])?e:{...e,characters:n}}function Yw(e){const t=e.currentRoom,n=v0.includes(t),s=a=>aa.includes(a);let o=!1;const i=e.characters.map(a=>{const r=a.room;return!s(r)||!n&&r===t?(o=!0,{...a,room:"living"}):a});return n&&!o?e:{...e,currentRoom:n?e.currentRoom:"living",characters:i}}const Ns=wt("cozy-house-bak"),gi=wt("cozy-house-corrupt-"),Kw=20,Xw=2,Jw=5;function qa(e){try{const t=JSON.parse(e);return t&&typeof t=="object"&&t.rooms&&(t.version===1||t.version===2||t.version===3)?bf(t):null}catch{return null}}const Xp=e=>!!e&&(e.name==="QuotaExceededError"||e.name==="NS_ERROR_DOM_QUOTA_REACHED"||e.code===22||e.code===1014);function M0(){let e,t=!1,n=null,s=!1,o=null;try{o=localStorage.getItem(Na)??localStorage.getItem(Gw)}catch{o=null}let i=!1,a=()=>{i=!0},r=!1;const l=()=>{if(!r)return!0;try{for(let $=0;$<localStorage.length;$++){const x=localStorage.key($);if(x&&x.startsWith(gi)&&localStorage.getItem(x)===o)return r=!1,!0}localStorage.setItem(gi+Date.now(),o),r=!1;try{const $=[];for(let x=0;x<localStorage.length;x++){const D=localStorage.key(x);D&&D.startsWith(gi)&&$.push(D)}$.sort((x,D)=>Number(x.slice(gi.length))-Number(D.slice(gi.length))),$.slice(0,Math.max(0,$.length-Xw)).forEach(x=>localStorage.removeItem(x))}catch{}return!0}catch($){return Xp($)&&a(),!1}},c=o!==null?qa(o):null;if(o!==null&&c){e=c,s=!0;try{localStorage.getItem(Ns)!==o&&localStorage.setItem(Ns,o)}catch{}}else if(o!==null){r=o.trim()!=="",l();let $=null;try{$=localStorage.getItem(Ns)}catch{}const x=$?qa($):null;if(x){if(e=x,s=!0,n="restored",l())try{localStorage.setItem(Na,$)}catch{}}else e=Vn(),n="unreadable"}else if((()=>{try{return localStorage.getItem(Ns)}catch{return null}})()!==null&&qa(localStorage.getItem(Ns))){const $=localStorage.getItem(Ns);e=qa($),s=!0,n="restored";try{localStorage.setItem(Na,$)}catch{}}else t=!0,e=Vn(),typeof navigator<"u"&&(e=navigator.webdriver?c0(e):zy(e));const d=[],f=[],h=$=>{n=$,f.forEach(x=>x($))};let u,y,m=!1,v=0,w=0;a=()=>{i||(i=!0,h("full"))};const g=()=>{if(clearTimeout(u),u=void 0,!!m){if(!l()){_();return}try{const $=JSON.stringify(e);if(localStorage.setItem(Na,$),m=!1,clearTimeout(y),y=void 0,w=0,s&&++v%Kw===0)try{localStorage.setItem(Ns,$)}catch{}}catch($){Xp($)&&a(),_()}}},b=()=>{m&&g()};function _(){clearTimeout(y),y=void 0,!(++w>Jw)&&(y=window.setTimeout(()=>{y=void 0,g()},5e3))}const P=()=>{w=0,b()};return typeof window<"u"&&(document.addEventListener("visibilitychange",P),window.addEventListener("pagehide",b),window.addEventListener("beforeunload",b)),{get:()=>e,subscribe($){d.push($)},dispatch($){e=Wi(e,$),d.forEach(x=>x(e,$)),m=!0,w=0,clearTimeout(u),u=window.setTimeout(g,250)},flush:b,trouble:()=>n,fullAtStart:i,onTrouble($){f.push($)},born:t}}const eb=Object.freeze(Object.defineProperty({__proto__:null,CAT_COATS:Ww,DOG_BREEDS:Vw,ITEM_SIZE_STEPS:Wn,MAX_CHARS:ai,ROOM_H:Dn,ROOM_IDS:aa,ROOM_W:St,SCENE_ROOMS:v0,TAB_ROOMS:Hw,V1_OFFSET:ii,V1_ROOM_W:k0,applyItemSize:_0,createStore:M0,drawnScale:Ge,ensureRooms:x0,initialState:Vn,itemSizeOf:Fn,migrate:bf,newCharacter:Ms,reduce:Wi,standChar:ra,takeClearedFurniture:$0,validKennel:wf},Symbol.toStringTag,{value:"Module"})),us=256,gs=192,vf=["#ffffff","#5a3d5c","#ff6b6b","#ff8fab","#ffa94d","#ffd43b","#69db7c","#2f9e44","#4dabf7","#1c5fb8","#b388d6","#7048b6","#c9905a","#7a4b2a","#ced4da","#212529"],id=8e3,Vi=12,L0=["wood","plum","gold","rainbow"],tb=/^a[0-9a-z]{6,24}$/,nb=/^P1[A-Za-z0-9+/]+={0,2}$/;function kf(e){return typeof e!="string"||e.length<4||e.length>id||!nb.test(e)||(e.length-2)%4!==0?null:e}function E0(e){return typeof e=="string"&&tb.test(e)?e:null}function sb(e){const t=[];let n=0;for(;n<e.length;){const s=e[n]&15;let o=1;for(;n+o<e.length&&(e[n+o]&15)===s&&o<2056;)o++;if(o<=8)t.push(o-1<<4|s);else{const i=o-9;t.push(128|i>>8<<4|s,i&255)}n+=o}return Uint8Array.from(t)}function ob(e,t=us*gs){const n=new Uint8Array(t);let s=0;for(let o=0;o<e.length&&s<t;o++){const i=e[o];let a;if(i<128)a=(i>>4)+1;else{if(o+1>=e.length)break;a=((i>>4&7)<<8|e[++o])+9}const r=Math.min(t,s+a);n.fill(i&15,s,r),s=r}return n}const Ti="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function ib(e){let t="";for(let n=0;n<e.length;n+=3){const s=e[n],o=e[n+1],i=e[n+2];t+=Ti[s>>2]+Ti[(s&3)<<4|(o??0)>>4]+(o===void 0?"=":Ti[(o&15)<<2|(i??0)>>6])+(i===void 0?"=":Ti[i&63])}return t}function ab(e){const t=e.replace(/=+$/,""),n=[];let s=0,o=0;for(const i of t){const a=Ti.indexOf(i);if(a<0)break;s=s<<6|a,o+=6,o>=8&&(o-=8,n.push(s>>o&255))}return Uint8Array.from(n)}const uc=e=>"P1"+ib(sb(e));function S0(e){return!e||!kf(e)?new Uint8Array(us*gs):ob(ab(e.slice(2)))}function ad(e,t){for(let n=e.length-1;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}const T0=4,Jp=7,rb=30;function lb(){const e=[];let t=0;for(let n=0;n<T0;n++){e.push({id:t++,c:n,v:0});for(let s=1;s<=9;s++)for(let o=0;o<2;o++)e.push({id:t++,c:n,v:s});for(const s of["skip","rev","d2"])for(let o=0;o<2;o++)e.push({id:t++,c:n,v:s})}for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"wild"});for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"w4"});return e}const rd=e=>e.discard[e.discard.length-1],mi=(e,t)=>t.c===4||t.c===e.color||t.v===rd(e).v&&rd(e).c!==4,ts=(e,t,n=1)=>{const s=e.hands.length;return((t+e.dir*n)%s+s)%s};function ld(e,t,n,s){const o=[];for(let i=0;i<n&&e.hands[t].length<rb;i++){if(!e.deck.length){const r=e.discard.pop();if(e.deck=ad(e.discard.map(l=>l),s),e.discard=[r],!e.deck.length)break}const a=e.deck.pop();e.hands[t].push(a),o.push(a)}return e.hands[t].length>1&&(e.slay[t]=!1),o}function cb(e,t){if(e.owe!==null&&e.hands[e.owe]?.length===1&&!e.slay[e.owe]){const n=e.owe;return e.owe=null,{victim:n,vdrew:ld(e,n,2,t).length}}return e.owe=null,{}}const eh=e=>{const t=[0,0,0,0];return e.forEach(n=>{n.c<4&&t[n.c]++}),t.indexOf(Math.max(...t))},db={id:"slay",name:"Slay",minPlayers:2,maxPlayers:6,setup(e,t){const n=ad(lb(),t),s=Array.from({length:e},()=>n.splice(-Jp,Jp));let o=n.length-1;for(;typeof n[o].v!="number";)o--;const i=n.splice(o,1)[0];return{deck:n,discard:[i],hands:s,color:i.c,turn:Math.floor(t()*e),dir:1,drawn:null,slay:s.map(()=>!1),owe:null,winner:null,ev:{n:0,p:-1,k:"start",card:i}}},cleanMove(e){return!e||typeof e!="object"?null:e.k==="play"&&Number.isInteger(e.id)&&e.id>=0&&e.id<108?{k:"play",id:e.id,...Number.isInteger(e.color)&&e.color>=0&&e.color<T0?{color:e.color}:{}}:e.k==="draw"||e.k==="pass"||e.k==="slay"?{k:e.k}:null},legal(e,t,n){if(e.winner!==null)return!1;if(n.k==="slay")return e.hands[t].length<=2&&!e.slay[t];if(t!==e.turn)return!1;if(n.k==="draw")return e.drawn===null;if(n.k==="pass")return e.drawn!==null;const s=e.hands[t].find(o=>o.id===n.id);return!s||e.drawn!==null&&s.id!==e.drawn||s.c===4&&n.color===void 0?!1:mi(e,s)},apply(e,t,n,s){const o=e.ev.n+1;if(n.k==="slay")return e.slay[t]=!0,e.owe===t&&(e.owe=null),e.ev={n:o,p:t,k:"slay"},e;const i=cb(e,s);if(n.k==="draw"){const d=ld(e,t,1,s),f=d[0];if(f&&mi(e,f))e.drawn=f.id,e.ev={n:o,p:t,k:"draw",drew:1,...i};else{if(e.drawn=null,e.ev={n:o,p:t,k:"draw",drew:d.length,...i},e.stuck=d.length?0:(e.stuck??0)+1,(e.stuck??0)>=e.hands.length){const h=Math.min(...e.hands.map(u=>u.length));return e.winner=e.hands.findIndex(u=>u.length===h),e.turn=-1,e}e.turn=ts(e,t)}return e}if(n.k==="pass")return e.drawn=null,e.turn=ts(e,t),e.ev={n:o,p:t,k:"pass",...i},e;e.stuck=0;const a=e.hands[t],r=a.splice(a.findIndex(d=>d.id===n.id),1)[0];e.discard.push(r),e.drawn=null,e.color=r.c===4?n.color:r.c;const l={n:o,p:t,k:"play",card:r,color:e.color,...i};if(!a.length)return e.winner=t,e.turn=-1,e.ev=l,e;a.length===1&&!e.slay[t]&&(e.owe=t);const c=e.hands.length===2;if(r.v==="rev")e.dir=e.dir===1?-1:1,e.turn=c?t:ts(e,t);else if(r.v==="skip")l.skipped=ts(e,t),e.turn=ts(e,t,2);else if(r.v==="d2"||r.v==="w4"){const d=ts(e,t);l.skipped=d;const f=r.v==="d2"?2:4;l.drew=ld(e,d,f,s).length,e.turn=ts(e,t,2)}else e.turn=ts(e,t);return e.ev=l,e},turn:e=>e.winner!==null?-1:e.turn,winner:e=>e.winner,view(e,t){return{top:rd(e),color:e.color,turn:e.winner!==null?-1:e.turn,dir:e.dir,deck:e.deck.length,counts:e.hands.map(n=>n.length),slay:e.slay,winner:e.winner,ev:e.ev,...t!==null&&e.hands[t]?{hand:e.hands[t],drawn:t===e.turn?e.drawn:null}:{}}},autoMove(e,t){if(t!==e.turn)return null;if(e.drawn!==null){const s=e.hands[t].find(o=>o.id===e.drawn);return s&&mi(e,s)?{k:"play",id:s.id,...s.c===4?{color:eh(e.hands[t])}:{}}:{k:"pass"}}const n=e.hands[t].find(s=>mi(e,s)&&s.c!==4)??e.hands[t].find(s=>mi(e,s));return n?{k:"play",id:n.id,...n.c===4?{color:eh(e.hands[t])}:{}}:{k:"draw"}},removePlayer(e,t,n){if(e.hands.length<=2)return null;const s=e.turn===t;return e.deck.unshift(...e.hands[t]),ad(e.deck,n),e.hands.splice(t,1),e.slay.splice(t,1),e.owe===t?e.owe=null:e.owe!==null&&e.owe>t&&e.owe--,e.turn>t&&e.turn--,s&&(e.drawn=null,e.dir===-1?e.turn=((t-1)%e.hands.length+e.hands.length)%e.hands.length:e.turn=t%e.hands.length),e.ev={n:e.ev.n+1,p:t,k:"left"},e}},cd=7,gr=6,fb=(e,t,n)=>{const s=e[t][n];for(const[o,i]of[[1,0],[0,1],[1,1],[1,-1]]){const a=[[t,n]];for(const r of[1,-1])for(let l=1;l<4;l++){const c=t+o*l*r,d=n+i*l*r;if(c<0||c>=cd||d<0||d>=gr||e[c][d]!==s)break;a.push([c,d])}if(a.length>=4)return a}return null},pb={id:"four",name:"Four in a Row",minPlayers:2,maxPlayers:2,setup:(e,t)=>({b:Array.from({length:cd},()=>[]),turn:t()<.5?0:1,winner:null,draw:!1,line:null,last:null,n:0}),cleanMove:e=>e&&Number.isInteger(e.col)&&e.col>=0&&e.col<cd?{col:e.col}:null,legal:(e,t,n)=>e.winner===null&&!e.draw&&t===e.turn&&e.b[n.col].length<gr,apply(e,t,n){e.b[n.col].push(t);const s=e.b[n.col].length-1;e.last={col:n.col,row:s,p:t},e.n++;const o=fb(e.b,n.col,s);return o?(e.winner=t,e.line=o,e.turn=-1):e.b.every(i=>i.length>=gr)?(e.draw=!0,e.turn=-1):e.turn=1-t,e},turn:e=>e.turn,winner:e=>e.winner,view:e=>e,autoMove:(e,t)=>{if(t!==e.turn)return null;const s=[3,2,4,1,5,0,6].find(o=>e.b[o].length<gr);return s===void 0?null:{col:s}},removePlayer:()=>null},P0={slay:db,four:pb},xa=2600,po=[{game:"slay",seats:6,x:720},{game:"four",seats:2,x:1500},{game:"slay",seats:4,x:2150}],hb=2e4,ub="winter",gb="Winter Cheer",mb={[ub]:gb},yb=["pack:wc-holiday-tree","pack:wc-gingerbread","pack:wc-gingerbread-village","pack:wc-bauble-garland","pack:wc-stocking-row","pack:wc-cane-lamp","pack:wc-star-topper","pack:wc-poinsettia","pack:wc-holly","pack:wc-nutcracker","pack:wc-reindeer","pack:wc-sleigh-planter"],wb=["Berry Wreath","Birch Log Basket","Cabin Picture","Cabin Planks","Candy Cane Lamp","Candy Stripe","Cinnamon Roll Tray","Cocoa Cart","Cocoa Pot","Cookie Oven","Cookie Plate","Cozy Red Plaid","Cozy Sock Hamper","Decorated Holiday Tree","Frosted Pine","Frosty Bookcase","Frosty Dots","Fur-Trim Bench","Gingerbread Cottage","Gingerbread Village","Holly Sprig","Ice Skates","Ice-Blue Wardrobe","Knit Pom Rug","Knit Stocking Row","Knit-Blanket Armchair","LED Candle Trio","Lantern","Log Bench","Marshmallow Jar","Mint Pine Sprigs","Mitten Ottoman","Mittens on a Line","Mug Tree Shelf","Mug of Cocoa","Nutcracker Friend","Penguin Plush","Penguin Plush Chair","Peppermint Counter","Peppermint Swirl Rug","Peppermint Tiles","Pinecone Garland","Pinecone Side Table","Plaid Cabin Sofa","Poinsettia Pot","Polar Bear Plush","Red Plaid Quilt Bed","Reindeer Plush","Ribbon Bauble Garland","Sled Coffee Table","Sleigh Planter","Snow Globe","Snow Knit Carpet","Snow-Globe Lamp","Snowflake Mobile","Snowflake Nightstand","Snowflake Sky","Snowman Buddy","Snowshoes","Snowy Window Art","Snowy Window Seat","Star Tree Topper","Stone Hearth Fireplace","Twinkle Light String","Twinkle-Light Floor Lamp","Winter Cheer","Woodstove","Wrapped Present Stack"],A0="halloween",bb="Spooky Cute",vb={[A0]:bb},kb=!1;function _b(e=new Date){const t=e.getMonth(),n=e.getDate();return t===9&&n>=24||t===10&&n<=2}function R0(e=new Date,t=kb){return t||_b(e)}const $b=["pack:hw-cauldron","pack:hw-cat-statue","pack:hw-witch-hat"],xb=["Autumn Leaf Garland","Black Cat Statue","Bubbly Cauldron","Friendly Sheet Ghost","Harvest Hay Bale","Heart and Moon Pumpkin","Moon and Stars Window Cling","Moonbeam Lantern","Spooky Cute","Starry Glow Pumpkin","Starry Witch Hat","Treat Bowl"],Mb=["A-Frame Swing","Acorn Friend","Alarm Clock","Apple","Apple Tree","Arc Floor Lamp","Arc Lamp","Arched Mirror","Arched Shelf","Armchair","Autumn Wreath","Baby Blocks","Baby Bottle","Bakery Shelf","Ball","Balloons","Bananas","Bar Stool","Bassinet","Bath Mat","Bath Mirror","Bath Stool","Bathtub","Beach Ball","Bean Bag","Bed","Berry Basket","Big Leaf Plant","Big Monitor","Big Wardrobe","Birdbath","Birdhouse","Birdie","Blanket Basket","Blocks","Boba Buddy","Book Stack","Books","Bookshelf","Box Stack","Bread","Brush & Comb","Bubble Aquarium","Bubble Bath","Bubble Chair","Bubble-Gum Rug","Bubbly Fountain","Bubbly Plant","Bud Vase","Bulletin Board","Bunk Bed","Bunny","Bunny Plush","Bunny Slippers","Butterfly Bush","Cactus","Cactus Buddy","Cada's Mouse","Cake","Candle Jar","Canopy Bed","Canopy Daybed","Cat Bed","Cat Tower","Caterpillar Plush","Chair","Changing Table","Checker Rug","Checkered Bed","Chick","Chloe's Star Lamp","Clock","Clothes Rail","Clothesline","Cloud Beanbag","Cloud Lamp","Cloud Rug","Cloud Shelf","Cocoa Doll","Cocoa Mug","Coffee Table","Comfy Chair","Cookie Jar","Cooking Pot","Cottage Heart Pouf","Cottage Heart Rug","Counter","Cozy Fireplace","Cozy Lights","Cozy Mug","Cozy Nightstand","Cozy Reading Nook","Cozy Snake Plant","Cozy Teapot","Cream Jars","Cream Sofa","Crib","Crib Mobile","Cubby Shelf","Cube Shelf","Cupcake","Cupcake Stand","Curtains","Curvy Yellow Desk","Cute Keyboard","Cute Speaker","Daisy Pot","Daisy Rug","Desk","Desk Lamp","Desk Mic","Dino Plushie","Dish Cabinet","Dish Rack","Dog Kennel","Doll House","Donut","Dresser","Droplet Buddy","Egg Pan","Fairy-Light Garland","Fairy-Light Shelf","Fan","Fancy Sofa","Fiddle-Leaf Fig","Fig Tree","Fire Pit","Fireplace","Fish Bowl","Fish Tank","Floor Cushion","Flower Cart","Flower Floor Lamp","Flower Kettle","Flower Lamp","Flowers","Foot Spa","Fresh Egg","Fridge","Frog Plush","Fruit Bowl","Game Controller","Gaming Chair","Garden Bench","Garden Carrot","Garden Gnome","Glass Cabinet","Globe","Globe Pendants","Glossy Hair Dryer","Glow Mirror","Gold Floor Mirror","Guinea Pig","Hair Dryer","Hair-Dryer Chair","Hair-Wash Chair","Hammock","Hamster House","Hamster Pal","Hanging Lamp","Hanging Lantern","Hanging Plant","Hanging Vine Planter","Happy Fridge","Headphones","Heart Headboard Bed","Heart Pouf","Heart Rug","Heart Wall Clock","Heart Wall Light","Heart-Leaf Plant","Hedge Row","Herb Box","High Chair","Honey Doll","Ice Cream","Jewelry Box","Juice","Kettle","Kitchen Counter","Knit Cushion","Ladder Shelf","Lamp","Landscape Art","Lattice Bench","Laundry Hamper","Lava Lamp","Lemon Tree","Lemonade Cart","Lemonade Cup","Lighted Vanity","Lilac Curtain","Lily Pond","Little Rocking Horse","Little Slide","Little Sprout","Lotion Bottles","Macaron Jar","Macrame Swing Chair","Mani-Pedi Chair","Manicure Table","Microwave","Milk","Milk & Cookies","Mini Fridge","Mini Greenhouse","Mini Tree","Mint Fridge","Mint Pebble Rug","Mirror","Mixer","Moon and Stars","Moon Night-Light","Moving Box","Mushroom Stool","Music Box","Nail Dryer","Nail Polish","Nail Polish Rack","Night Light","Nightstand","Nursery Cloud Rug","Nursery Dresser","Nursery Lamp","Pancakes","Pantry","Paper Lantern","Pastel Range","Pastel Wardrobe","Patio Lights","Patio Umbrella","Pendant Lamp","Perfume","Perfume Bottle","Perfume Tray","Pet Bowl","Petal Coffee Table","Phone on a Stand","Piano","Picket Gate","Picnic Basket","Picnic Blanket","Picnic Table","Picture","Piggy Bank","Pillow","Pin Board","Pink Vanity","Pinwheel","Pizza","Plant","Plant Stand","Plant Wall","Play Mat","Play Tent","Polish Bottle","Popcorn","Pothos Plant","Pouf","Puffy Cloud Sofa","Puffy Stool","Puppy","Quinn's Cookie Pup","Radio","Rain Barrel","Rainbow Art","Rainbow Rug","Ranch Flowers","Rattle","Reagan's Frame","Reception Desk","Record Player","Ribbon Mirror","Ribbon Tray","Rice Cooker","Ring Light","Robot","Rocker","Rocking Chair","Rocking Horse","Rose Doll","Round Breakfast Table","Round Side Table","Round Woven Rug","Rubber Ducky","Rug","Runner Rug","Salon Chair","Sandbox","Scallop Curtains","Scalloped Loveseat","Seesaw","Shelf","Shower Curtain","Sink","Sink Vanity","Sloane's Rainbow Snail","Snake Plant","Soaking Tub","Soap Dish","Sofa","Sparkle Wall Light","Spice Rack","Splash Pool","Spray Bottle","Sprinkler","Stacking Rings","Star Dresser","Star Lamp","Star Mobile","Stars","Stepping Stones","Sticker Board","Story Pillow","Stove","String Lights","Striped Runner","Succulents","Sun Lounger","Sunny Art","Sunny Bean Bag","Sunny Cloud Rug","Sunny Shelf","Swing Chair","Swivel Stool","Table","Tassel Rug","Teapot","Teapot Set","Teddy","Tiered Tray","Toadstool Light","Toaster","Toilet","Towel Bar","Towel Cart","Towel Stack","Toy Bin","Toy Car","Toy cat","Toy Chest","Toy Train","Trailing Plant Shelf","Tulip Bed","Tulip Vase","Turtle","TV","TV Stand","Unicorn Plushie","Utensil Rail","Vanity","Vanity Stool","Vegetable Patch","Vlog Camera","Wagon","Waiting Bench","Wall Shelf","Wardrobe","Water-Drop Lamp","Watermelon","Wavy Floor Lamp","Window","Window Seat","Wood Armchair","Wood Bookshelf","Wood Coffee Table","Wood Desk","Wood Dresser","Wood Stool","Wood Wall Clock","Wooden Bed","Yard Sign",...wb,...xb],Lb=4,_f=16,Or=e=>String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,""),Eb=e=>e.length>=Lb&&e.length<=_f&&/^[A-Z0-9]+$/.test(e),Sb=12,Tb=["Cada","Chloe","Quinn","Reagan","Sloane"],Pb=460,Ab=320,th=["Sunny Bunny","Bubbly Panda","Sparkle Kitty","Happy Hippo","Cozy Koala","Jolly Jelly","Zippy Fox","Dreamy Deer","Giggly Goose","Peachy Pup","Minty Mouse","Rainbow Duck","Cuddly Cub","Starry Owl","Bouncy Frog","Lucky Lamb","Snuggly Seal","Twinkle Tiger","Berry Bear","Cloudy Llama","Pebble Penguin","Honey Hedgehog","Marshmallow Moose","Cupcake Cat"],Ui=["Hi!","Come over!","I love your house!","Let's play!","Follow me!","Look at this!","Want a snack?","Nice!","Yes!","No thanks","Hehe","Be right back","Bye!","Let's decorate!","Wanna race?","So cute!"],C0=["👋","😀","😂","😍","😮","😢","🎉","⭐","❤️","👍","🍕","🐱","🌈","🎶","💤","✨"],$f=60,Rb={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i","+":"t"},gc=["fuck","fuk","fck","shit","sht","bitch","btch","bastard","asshole","ass","dick","cock","pussy","cunt","whore","slut","damn","crap","piss","fag","faggot","retard","nigger","nigga","porn","sex","sexy","nude","naked","boob","boobs","penis","vagina","kill","suicide","stupid","idiot","dumb","hate","loser","shutup","wtf","stfu","gtfo","bs"],Cb=["zero","oh","one","two","three","four","five","six","seven","eight","nine","ten"],Ib=[/\bmy\s+(real\s+)?(full\s+|last\s+|sur)?name\s+is\b/i,/\bi\s*live\s+(at|on|in)\b/i,/\bmy\s+(address|addy|phone|number|cell|email|e-mail|school|password|pass|insta|snap|tiktok|discord)\b/i,/\b(password|passcode|zip\s*code|postcode)\b/i,/\b(snapchat|instagram|tiktok|discord|whatsapp|kik|telegram|facebook|messenger|youtube\.com)\b/i],Ob=/(https?:|www\.|\b[a-z0-9-]+\s*(\.|\(dot\)|\sdot\s)\s*(com|net|org|io|co|me|ly|gg|tv|app|xyz|us|uk|ca|de|link|site|info)\b)/i,Bb=/\S+\s*(@|\(at\)|\sat\s)\s*\S+\s*(\.|\sdot\s)\s*\w{2,}/i,zb=/@\w/,Db=/\b\d{1,6}\s+([a-z]+\s+){0,3}(street|st|road|rd|avenue|ave|lane|ln|drive|dr|court|ct|blvd|boulevard|way|place|pl|circle|cir|terrace|parkway|pkwy|highway|hwy|apt|apartment|unit)\b/i;function Hb(e,t=$f){if(typeof e!="string")return{ok:!1,reason:"empty"};const n=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(!n)return{ok:!1,reason:"empty"};if(n.length>t)return{ok:!1,reason:"long"};if(Ob.test(n))return{ok:!1,reason:"link"};if(Bb.test(n)||zb.test(n))return{ok:!1,reason:"contact"};if((n.match(/\d/g)??[]).length>=5||/\d[\d\s().\-]{4,}\d/.test(n)||Db.test(n))return{ok:!1,reason:"contact"};const o=n.toLowerCase().split(/[^a-z]+/).filter(Boolean);let i=0;for(const c of o)if(i=Cb.includes(c)?i+1:0,i>=4)return{ok:!1,reason:"contact"};if(Ib.some(c=>c.test(n)))return{ok:!1,reason:"personal"};const a=n.toLowerCase().replace(/[0-9@$!+]/g,c=>Rb[c]??c),r=a.split(/[^a-z]+/).filter(Boolean),l=a.replace(/[^a-z]/g,"").replace(/(.)\1{2,}/g,"$1$1");return r.some(c=>gc.includes(c)||gc.includes(c.replace(/(.)\1+/g,"$1")))||gc.filter(c=>c.length>=5).some(c=>l.includes(c))?{ok:!1,reason:"words"}:{ok:!0,text:n}}const Wb={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t",8:"b","@":"a",$:"s","!":"i","+":"t",v:"u","|":"k","<":"k","#":"h"};function Vb(e){return/^f+u+c+k+$/.test(e)||/^f+u+k+$/.test(e)||/^f+c+k+$/.test(e)||/^s+h+i+t+$/.test(e)||/^s+h+t+$/.test(e)||/^b+i+t+c+h+$/.test(e)||/^b+t+c+h+$/.test(e)||/^a+s+h+o+l+e+$/.test(e)||/^d+u+m+b+a+s+$/.test(e)||/^n+i+g{2,}e+r+$/.test(e)||/^n+i+g{2,}a+$/.test(e)||/^f+a+g+$/.test(e)||/^f+a+g+o+t+$/.test(e)||/^r+e+t+a+r+d+$/.test(e)||/^k+y+s+$/.test(e)}function Ub(e){return/^c+u+n+t+$/.test(e)||/^a+h+o+l+e+$/.test(e)||/^k+i+k+e+$/.test(e)||/^c+h+i+n+k+$/.test(e)||/^s+p+i+c+$/.test(e)||/^c+o{2,}n+$/.test(e)||/^w+e+t+b+a+c+k+$/.test(e)||/^t+r+a+n+y+$/.test(e)||/^t+r+a+n+i+$/.test(e)||/^d+y+k+e+$/.test(e)||/^b+e+a+n+e+r+$/.test(e)||/^g+o{2,}k+$/.test(e)||/^r+a+g+h+e+a+d+$/.test(e)||/^t+o+w+e+l+h+e+a+d+$/.test(e)||/^h+e+i+l+h+i+t+l+e+r+$/.test(e)}const Qb=new Set(["spicy","spices","spicing","spicey","spicier","spiciest","cocky","chinking","spicer","gooky","slutty","twatt"]);function Nb(e,t){if(!/^[a-z]+$/.test(e)||t&&Qb.has(e))return!1;const n=[e],s=["ing","in","ers","er","ed","es","y","s"];for(let o=0;o<s.length;o++){const i=s[o];e.endsWith(i)&&e.length>i.length+2&&n.push(e.slice(0,-i.length))}for(let o=0;o<n.length;o++)if(Vb(n[o])||t&&Ub(n[o]))return!0;return!1}function qb(e){if(!e.includes("*"))return[e];const t=e.split("*").length-1,n=e.replace(/\*/g,""),s=n?[n]:[];if(t<1||t>3)return s;const o=e.split(""),i=[];for(let r=0;r<o.length;r++)o[r]==="*"&&i.push(r);const a=r=>{if(r===i.length){s.push(o.join(""));return}for(let l=97;l<=122;l++)o[i[r]]=String.fromCharCode(l),a(r+1)};return a(0),s}const nh=["mother","sonofa","horse","bull","dip"],sh=["face","head","you"];function Vo(e,t){const n=e.replace(/ph(?=u+c+k)/g,"f").replace(/ph(?=u+k)/g,"f");if(Nb(n,t)||/^w+t+f+$/.test(n)||/^s+t+f+u+$/.test(n))return!0;for(let s=0;s<nh.length;s++){const o=nh[s];if(n.startsWith(o)&&n.length>o.length+2&&Vo(n.slice(o.length),t))return!0}for(let s=0;s<sh.length;s++){const o=jb(n,sh[s]);if(o&&Vo(o,t))return!0}return!!(n.length>4&&n.endsWith("s")&&!n.endsWith("ss")&&Vo(n.slice(0,-1),t))}function jb(e,t){let n=e.length;for(let s=t.length-1;s>=0;s--){const o=t[s];if(n===0||e[n-1]!==o)return null;for(;n>0&&e[n-1]===o;)n--}return n<=2?null:e.slice(0,n)}function Br(e){let t="";for(let n=0;n<e.length;n++)t+=Wb[e[n]]??e[n];return t}const Fb={ѕ:"s",һ:"h",с:"c",а:"a",е:"e",о:"o",р:"p",і:"i",х:"x",у:"y",к:"k"};function Zb(e){const n=e.replace(/[\u00ad\u0336\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").normalize("NFKC").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase();let s="";for(let o=0;o<n.length;o++)s+=Fb[n[o]]??n[o];return s}const Gb=new Set(["it","its","it's","is","as","a","i","uh","oh","so","he","she","hi","um","umm","hmm","hm","ah","eh","er","ow","ha","hey","yo","ok","yeah","yes","no","nah","wow","ho","ooh","ahh","uhh","ohh"]);function la(e){return e>="a"&&e<="z"||e>="0"&&e<="9"||"@$!+*v|#<".includes(e)}function oh(e,t){let n=t;for(;n<e.length&&e[n]==="!";)n++;if(n>=e.length||!la(e[n])||e[n]==="!")return null;const s=e[n];let o=n+1;for(;o<e.length&&e[o]==="!";)o++;return o<e.length&&la(e[o])?null:{ch:s,end:o}}function Yb(e,t){const n=e.length,s=" .-_~";let o=0;for(;o<n;){if(o>0&&la(e[o-1])){o++;continue}const i=oh(e,o);if(!i){o++;continue}const a=[i.ch];let r=i.end;for(;r<n&&s.includes(e[r]);){const l=oh(e,r+1);if(!l)break;a.push(l.ch),r=l.end}if(a.length>=2){const l=Br(a.join("")).replace(/\*/g,"");if(Vo(l,t))return!0}o=Math.max(o+1,r)}return!1}function ho(e){return e.replace(/^!+/,"").replace(/!+$/,"")}function zr(e){return Br(ho(e)).replace(/\*/g,"")}function I0(e){return/[0-9@$!+*|#<]/.test(ho(e))}function Kb(e){return ho(e).length===1}function Xb(e){const t=ho(e);return t.length<2||I0(e)?!1:/^sh+$/.test(t)||Gb.has(t)}function Jb(e){let t="space";for(let n=0;n<e.length;n++){const s=e[n];if(!(s===" "||s==="	"||s===`
`||s==="\r")){if(s==="-"){t="hyphen";continue}return"punct"}}return t}function ev(e){const t=[];let n=0,s="";for(;n<e.length;){if(!la(e[n])){s+=e[n],n++;continue}let o=n+1;for(;o<e.length&&la(e[o]);)o++;t.push({text:e.slice(n,o),gap:t.length===0?"start":Jb(s)}),s="",n=o}return t}function tv(e){const t=[Br(e)];if(e.charAt(0)==="!"||e.charAt(e.length-1)==="!"){const n=e.replace(/^!+/,"").replace(/!+$/,"");n&&n!==e&&t.push(Br(n))}return t}function nv(e){for(let t=0;t<e.length;t++){if(!/^k+i+l+$/.test(e[t]))continue;const n=e[t+1]||"",s=e[t+2]||"";if(/^y+o+u+r+s+e+l+f+$/.test(n)||/^u+r+s+e+l+f+$/.test(n)||/^u+r+$/.test(n)&&/^s+e+l+f+$/.test(s))return!0}return!1}function sv(e,t,n){if(ho(e[n].text)!=="coon")return!1;const s=n>0?t[n-1]:"",o=t[n+1]||"";return s==="maine"||o==="cat"}function ov(e,t,n){return n===t+1&&e[n].gap==="space"&&/^a+$/.test(zr(e[t].text))&&/^h+o+l+e+$/.test(zr(e[n].text))}function iv(e,t,n){return ho(e[n].text)!=="dyke"?!1:n>0&&ho(e[n-1].text)==="van"}function av(e){for(let t=0;t<e.length-1;t++)if(/^h+e+i+l+$/.test(e[t])&&/^h+i+t+l+e+r+$/.test(e[t+1]))return!0;return!1}function rv(e,t=!0){const n=Zb(e);if(Yb(n,t))return!0;const s=ev(n),o=s.map(a=>tv(a.text)),i=s.map(a=>zr(a.text));if(nv(i)||t&&av(i))return!0;for(let a=0;a<o.length;a++)if(!(t&&(sv(s,i,a)||iv(s,i,a))))for(let r=0;r<o[a].length;r++){const l=qb(o[a][r]);for(let c=0;c<l.length;c++)if(Vo(l[c].replace(/\*/g,""),t))return!0}for(let a=0;a<s.length;a++){let r="",l=0,c=!1,d=!1;for(let f=a;f<s.length&&f<a+8;f++){if(f>a){const h=s[f].gap,u=s[f-1].text;if(h==="punct"||h==="start"||u.endsWith("!")||s[f].text.startsWith("!")||h!=="space"&&h!=="hyphen")break}if(r+=zr(s[f].text),Kb(s[f].text)&&l++,Xb(s[f].text)&&(c=!0),I0(s[f].text)&&(d=!0),f!==a&&!(c&&l<2&&!d)&&Vo(r,t)){if(t&&ov(s,a,f))break;return!0}}}return!1}function O0(e,t,n,s=!1){if(typeof e!="string")return{ok:!1,reason:"empty"};const o=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return o?o.length>t?{ok:!1,reason:"long"}:rv(o,!s)?{ok:!1,reason:n}:{ok:!0,text:o}:{ok:!1,reason:"empty"}}function lv(e,t=$f){return O0(e,t,"words")}const Sl={long:"That is a bit long!",link:"No links, please!",contact:"Keep numbers and contact info secret!",personal:"Keep personal info secret!",words:"Let's use kind words!",mail:"Oops, try different words!",empty:""},B0={};for(const e of["АA","аa","ВB","вb","ЕE","еe","КK","кk","МM","мm","НH","нh","ОO","оo","РP","рp","СC","сc","ТT","тt","УY","уy","ХX","хx","ІI","іi","ЈJ","јj","ЅS","ѕs","ЁE","ёe","ЇI","їi","ΑA","ΕE","ΖZ","ΗH","ΙI","ΚK","ΜM","ΝN","ΟO","ΡP","ΤT","ΥY","ΧX","αa","εe","ζz","ιi","κk","νv","οo","ρp","τt","υu","χx"])B0[e[0]]=e[1];function cv(e){let t="";for(const n of e)t+=B0[n]??n;return t}function dv(e){return cv(String(e).normalize("NFKC")).replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff\p{M}]/gu,"").replace(/[\p{Extended_Pictographic}\p{S}\p{P}]+/gu,"").replace(/\s+/g," ").trim()}function fv(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(()=>{const e=[...new Set(Mb.map(t=>dv(t)).filter(t=>t.length>=2))].sort((t,n)=>n.length-t.length);return new RegExp(`(^|[^A-Za-z])(?:${e.map(fv).join("|")})(?![A-Za-z])`,"gi")})();const ih=(e,t,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(t,Math.min(n,e)):null,pv=(e,t,n=80)=>typeof e=="string"&&e.length<=n&&t.test(e)?e:null,hv=/^#[0-9a-fA-F]{3,8}$/,uv=["little","kid","adult"];function gv(e){if(!e||typeof e!="object")return null;const t={};for(const n of["skin","hair","shirt","pants"])if(n in e){const s=pv(e[n],hv,9);if(!s)return null;t[n]=s}if("hairStyle"in e){const n=ih(e.hairStyle,0,3);if(n===null)return null;t.hairStyle=Math.round(n)}if("acc"in e){const n=ih(e.acc,0,3);if(n===null)return null;t.acc=Math.round(n)}if("size"in e){if(!uv.includes(e.size))return null;t.size=e.size}if("flip"in e){if(typeof e.flip!="boolean")return null;t.flip=e.flip}return"look2"in e&&(t.look2=_a(e.look2)??null),"costume"in e&&(t.costume=$o(e.costume)),Object.keys(t).length?t:null}function Ma(e){const t=Ms({id:"x"}),n=gv({skin:e?.skin,hair:e?.hair,hairStyle:e?.hairStyle,shirt:e?.shirt,pants:e?.pants,size:e?.size,acc:e?.acc})??{},s=i=>n[i]??t[i],o={skin:s("skin"),hair:s("hair"),hairStyle:s("hairStyle"),shirt:s("shirt"),pants:s("pants"),size:s("size"),acc:s("acc")};if(e&&typeof e=="object"&&"look2"in e){const i=_a(e.look2);i&&(o.look2=i)}if(e&&typeof e=="object"&&"costume"in e){const i=$o(e.costume);o.costume=i??""}return o}const ah=4,mv=["Mittens","Luna","Biscuit","Pumpkin","Whiskers","Mochi","Pepper","Noodle","Ginger","Socks"],yv=["Buddy","Coco","Max","Daisy","Peanut","Rocket","Bella","Waffles","Scout","Honey"];function z0(e){const t=String(e??"").normalize("NFC").replace(/\s+/g," ").trim();return!/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u.test(t)||(t.match(/\d/g)??[]).length>2?null:Hb(t).ok?t:null}function wv(e,t=[]){return O0(e,ls,"mail")}function D0(e){return typeof e.freeMail=="boolean"?e.freeMail:e.freeChat}const xf=2900,dd=[{kind:"swing",x:430,y:500},{kind:"swing",x:570,y:500},{kind:"blanket",x:1730,y:548},{kind:"blanket",x:1850,y:548},{kind:"bench",x:2025,y:512},{kind:"bench",x:2105,y:512},{kind:"bench",x:2225,y:512},{kind:"bench",x:2305,y:512}],be={top:{x:905,y:330},bottom:{x:1110,y:545},ladder:850},gt={x0:2440,x1:2840,y0:470,y1:585},bv=(e,t)=>e.where===t.where&&(e.where!=="house"||e.houseId===t.houseId&&e.room===t.room),vv=(e,t)=>bv(e,t)&&Math.abs(e.x-t.x)<=Pb&&Math.abs(e.y-t.y)<=Ab;function ja(e){try{return bf(e)}catch{return e}}const fd=wt("cozy-hood"),Zo=()=>{try{return JSON.parse(localStorage.getItem(fd)??"null")}catch{return null}},Hn=e=>{try{e?localStorage.setItem(fd,JSON.stringify(e)):localStorage.removeItem(fd)}catch{}};function Tl(){const e=new URLSearchParams(location.search).get("hood");return e?e.replace(/\/$/,""):"https://cozy-hood-preview.andrewmunruh.workers.dev".replace(/\/$/,"")}async function kv(e){const t=await fetch(e+"/api/create",{method:"POST"});if(!t.ok)throw new Error("create failed "+t.status);return t.json()}async function _v(e,t){const n=await fetch(`${e}/api/hood/${encodeURIComponent(t)}`);if(n.status===429)return{slow:!0};if(!n.ok)throw new Error("lookup failed");return n.json()}const yi=e=>e===void 0?"u":JSON.stringify(e,(t,n)=>n&&typeof n=="object"&&!Array.isArray(n)?Object.fromEntries(Object.keys(n).sort().map(s=>[s,n[s]])):n);function rh(e,t){if(t.type.startsWith("item/")&&t.type!=="item/add"&&"id"in t&&"room"in t)return yi(e.rooms[t.room]?.items.find(n=>n.id===t.id)??null);if(t.type.startsWith("room/")&&t.type!=="room/switch"&&"room"in t){const n=e.rooms[t.room];return yi(n?[n.wallpaper,n.floor,n.pattern,n.wallTile??null,n.floorTile??null]:null)}if(t.type==="cat/move"||t.type==="cat/set")return yi(e.cat??null);if(t.type==="dog/set")return yi(e.dog??null);if((t.type==="char/update"||t.type==="char/move"||t.type==="char/delete"||t.type==="char/hold"||t.type==="char/release")&&"id"in t)return yi(e.characters.find(n=>n.id===t.id)??null)}const $v=new Set(["dog/kennel","baby/meet","baby/name"]),xv=1e4,Mv=1e4,Lv=5e3,Ev=3e3,lh=e=>e.type==="item/move"?"im:"+e.id:e.type==="char/move"?"cm:"+e.id:e.type==="item/size"?"is:"+("id"in e?e.id:""):null;class Pl{constructor(t){this.cfg=t,this.ws=null,this.pid="",this.settings={freeChat:!0},this.players=new Map,this.houses=new Map,this.presence=new Map,this.status="offline",this.speaksSit=!1,this.speaksBaby=!1,this.speaksAmb=!1,this.speaksArt=!1,this.speaksNeeds=!1,this.replaced=!1,this.ranch={plots:[],skew:0},this.tables=new Map,this.handlers=new Map,this.cid=1,this.flushT=0,this.presT=0,this.lastPres=null,this.presDirty=!1,this.closedByUs=!1,this.retry=0,this.retryT=0,this.epoch=0,this.stableT=0,this.outbox=[],this.saidAt=new WeakMap,this.speaksHb=!1,this.lastRx=0,this.hbT=0,this.hbWaitT=0,this.hbMissed=0,this.hiddenAt=0,this.wakeOn=!1,this.resent={again:0,dropped:0},this.wake=n=>{if(n.type==="visibilitychange"&&document.visibilityState==="hidden"){this.hiddenAt=Date.now();return}if(this.closedByUs||this.replaced||!this.cfg.token)return;const s=this.hiddenAt?Date.now()-this.hiddenAt:0;if(this.hiddenAt=0,this.status==="offline"){this.retry=0,this.connect();return}if(this.status==="online"){if(this.speaksHb){this.hbWaitT&&(clearTimeout(this.hbWaitT),this.hbWaitT=0),this.probe(Ev);return}(n.type==="online"||n.type==="pageshow"&&n.persisted||s>3e3)&&this.dropDead()}}}on(t,n){(this.handlers.get(t)??this.handlers.set(t,[]).get(t)).push(n)}emit(t,...n){this.handlers.get(t)?.forEach(s=>s(...n))}send(t){return this.ws?.readyState!==WebSocket.OPEN?!1:(this.ws.send(JSON.stringify(t)),!0)}reliable(t){this.send(t)||(t.t==="lock"?this.outbox=this.outbox.filter(n=>!(n.t==="lock"&&n.houseId===t.houseId)):(t.t==="look"||t.t==="dog")&&(this.outbox=this.outbox.filter(n=>n.t!==t.t)),(t.t==="say"||t.t==="fx")&&this.saidAt.set(t,Date.now()),this.outbox.push(t),this.outbox.length>8&&this.outbox.splice(0,this.outbox.length-8))}flushOutbox(){if(this.ws?.readyState!==WebSocket.OPEN||!this.outbox.length)return;const t=this.outbox;this.outbox=[];const n=Date.now();for(const s of t){const o=this.saidAt.get(s);o!==void 0&&n-o>xv||this.send(s)||this.outbox.push(s)}}scheduleRetry(){if(this.closedByUs||this.replaced||!this.cfg.token||this.retryT)return;const t=this.epoch,n=Math.min(15e3,400*2**Math.min(this.retry,6));this.retry++,this.retryT=window.setTimeout(()=>{this.retryT=0,!(t!==this.epoch||this.closedByUs||this.replaced||!this.cfg.token)&&this.connect()},n)}armStable(){this.stableT&&clearTimeout(this.stableT),this.stableT=window.setTimeout(()=>{this.stableT=0,this.retry=0},1e4)}clearStable(){this.stableT&&(clearTimeout(this.stableT),this.stableT=0)}stopHb(){clearInterval(this.hbT),this.hbT=0,this.hbMissed=0,this.hbWaitT&&(clearTimeout(this.hbWaitT),this.hbWaitT=0)}startHb(){this.stopHb(),this.speaksHb&&(this.hbT=window.setInterval(()=>this.probe(Lv),Mv))}probe(t){if(!this.speaksHb||this.status!=="online"||this.hbWaitT)return;const n=Date.now();this.send({t:"ping"})&&(this.hbWaitT=window.setTimeout(()=>{if(this.hbWaitT=0,this.status==="online"){if(this.lastRx>=n){this.hbMissed=0;return}++this.hbMissed>=2?(this.hbMissed=0,this.dropDead()):this.probe(t)}},t))}dropDead(){const t=this.ws;if(t){t.onclose=null,t.onmessage=null,t.onopen=null;try{t.close()}catch{}this.ws=null,this.clearStable(),this.stopHb(),this.status="offline",this.emit("status",this.status),this.retry=0,this.scheduleRetry()}}listenWake(t){if(t===this.wakeOn||typeof document>"u")return;this.wakeOn=t;const n=t?"addEventListener":"removeEventListener";document[n]("visibilitychange",this.wake),window[n]("pageshow",this.wake),window[n]("online",this.wake)}connect(t){this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.closedByUs=!1,this.replaced=!1,this.status="connecting",this.emit("status",this.status),this.stopHb(),this.listenWake(!0);const n=this.ws;return new Promise(s=>{let o=!1;const i=r=>{o||(o=!0,s(r))},a=new WebSocket(this.cfg.url.replace(/^http/,"ws")+"/ws/"+encodeURIComponent(this.cfg.id??this.cfg.code));if(this.ws=a,n&&n!==a)try{n.close()}catch{}a.onopen=()=>{t&&!this.cfg.token?this.send({t:"join",...t,v:ah,pet:1,mail:1,sit:1,fit:1,baby:1,amb:1,halloween:1,cos:1,needs:1,art:1,hb:1}):this.cfg.token?this.send({t:"hello",token:this.cfg.token,v:ah,pet:1,mail:1,sit:1,fit:1,baby:1,amb:1,halloween:1,cos:1,needs:1,art:1,hb:1}):i("notoken")},a.onmessage=r=>{this.lastRx=Date.now(),this.hbMissed=0;const l=JSON.parse(r.data);this.handle(l),l.t==="welcome"&&(this.armStable(),i("ok")),l.t==="error"&&i(l.code+(l.msg?":"+l.msg:"")),l.t==="removed"&&i("removed")},a.onclose=r=>{if(this.ws===a){if(this.clearStable(),this.ws=null,this.status="offline",this.stopHb(),i("closed"),r.code===4e3){this.replaced=!0,this.emit("status",this.status),this.emit("replaced");return}this.emit("status",this.status),this.scheduleRetry()}},a.onerror=()=>{}})}close(){this.closedByUs=!0,this.replaced=!1,this.epoch++,this.outbox=[],this.clearStable(),this.stopHb(),this.listenWake(!1),this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.presT&&(clearTimeout(this.presT),this.presT=0);try{this.ws?.close()}catch{}this.ws=null,this.status="offline",clearInterval(this.flushT)}handle(t){switch(t.t){case"joined":this.cfg.token=t.token,this.cfg.pid=t.pid,Hn(this.cfg);break;case"welcome":this.pid=t.pid,this.settings=t.settings,this.status="online",this.speaksSit=t.sit===1,this.speaksBaby=t.baby===1,this.speaksAmb=t.amb===1,this.speaksArt=t.art===1,this.speaksNeeds=t.needs===1,this.speaksHb=t.hb===1,this.players=new Map(t.players.map(n=>[n.pid,n]));{const n=this.houses;this.houses=new Map;for(const s of t.houses){const{state:o,...i}=s,a=n.get(s.id),r=ja(o);this.houses.set(s.id,{meta:i,confirmed:r,pending:a?this.carry(r,a.pending):[],view:null})}}this.presence=new Map(Object.entries(t.presence)),this.presence.delete(this.pid),t.ranch&&(this.ranch={plots:t.ranch.plots,skew:t.ranch.now-Date.now()});{const n=new Map;for(const s of t.tables??[])n.set(s.tb,this.stampTable(s));this.tables=n}clearInterval(this.flushT),this.flushT=window.setInterval(()=>this.flush(),60),this.lastPres&&(this.presDirty=!0),this.flushPres(),this.flushOutbox(),this.startHb(),this.emit("welcome"),this.emit("status",this.status);break;case"act":{const n=this.houses.get(t.houseId);if(!n)return;const s=t.action,o=s.id&&s.room?n.confirmed.rooms[s.room]?.items.find(a=>a.id===s.id):void 0;n.confirmed=Wi(ja(n.confirmed),t.action);const i=t.by===this.pid&&n.pending[0]?.cid===t.cid;i&&n.pending.shift(),n.view=null,i||this.emit("act",t.houseId,t.action,t.by,o?.kind??"");break}case"nack":{const n=this.houses.get(t.houseId);if(!n)return;const s=n.pending.find(o=>o.cid===t.cid)?.action??null;n.pending=n.pending.filter(o=>o.cid!==t.cid),t.state&&(n.confirmed=ja(t.state)),n.view=null,this.emit("reset",t.houseId,t.reason,s);break}case"pres":t.pid!==this.pid&&(t.p?this.presence.set(t.pid,t.p):this.presence.delete(t.pid),this.emit("pres",t.pid));break;case"players":this.players=new Map(t.players.map(n=>[n.pid,n])),this.emit("players");break;case"house":{const{state:n,...s}=t.house;this.houses.set(s.id,{meta:s,confirmed:ja(n),pending:[],view:null}),this.emit("houses");break}case"houseMeta":{const n=this.houses.get(t.meta.id);n&&(n.meta=t.meta,this.emit("houses"),this.emit("houseMeta",t.meta.id));break}case"houseGone":this.houses.delete(t.houseId),this.emit("houses"),this.emit("houseGone",t.houseId);break;case"settings":this.settings=t.settings,this.emit("settings");break;case"bubble":this.emit("bubble",t.pid,t.b);break;case"fx":this.emit("fx",t.pid,t.fx);break;case"knocked":this.emit("knocked",t.houseId,t.name);break;case"ranch":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch");break;case"ranchFail":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch"),this.emit("ranchFail",t.reason);break;case"noride":this.emit("noride",t.ride);break;case"table":{const n=this.stampTable(t.table);this.tables.set(n.tb,n),this.emit("table",n);break}case"tblFail":this.emit("tblFail",t.tb,t.reason);break;case"sayFail":this.emit("sayFail",t.reason);break;case"mailbox":{const n=this.houses.get(t.houseId);if(!n)return;if(t.mailbox?.letters?.length)n.confirmed={...n.confirmed,mailbox:t.mailbox};else{const{mailbox:s,...o}=n.confirmed;n.confirmed=o}n.view=null,this.emit("mailbox",t.houseId);break}case"mailFail":this.emit("mailFail",t.reason);break;case"art":this.emit("art",t.houseId,t.arts);break;case"artFail":this.emit("artFail",t.houseId,t.id,t.reason);break;case"parentInfo":this.emit("parentInfo",t);break;case"error":this.emit("error",t.code),t.code==="badtoken"&&(this.cfg.token=void 0,this.cfg.pid=void 0,Hn(this.cfg));break;case"pong":break;case"removed":this.closedByUs=!0,this.emit("removed");break}}stampTable(t){const n=this.tables.get(t.tb),s=n&&n.away===t.away&&n.receivedAt?n.receivedAt:Date.now();return{...t,receivedAt:s}}carry(t,n){const s=[];let o=t;for(const i of n){const a=rh(o,i.action);let r;if(a!==void 0&&i.base!==void 0&&i.base!==null?r=a===i.base:r=!i.sent||$v.has(i.action.type),i.sent&&(r?this.resent.again++:this.resent.dropped++),!!r){s.push({cid:this.cid++,action:i.action,sent:!1,base:i.base});try{o=Wi(o,i.action)}catch{}}}return s}view(t){const n=this.houses.get(t);return n?n.view??=n.pending.reduce((s,o)=>Wi(s,o.action),n.confirmed):null}myHouseId(){return this.players.get(this.pid)?.houseId??""}canEdit(t){const n=this.houses.get(t);return!!n&&(!n.meta.locked||n.meta.ownerId===this.pid)}dispatch(t,n){const s=this.houses.get(t);if(!s)return;const o=lh(n),i=s.pending[s.pending.length-1];if(o&&i&&!i.sent&&lh(i.action)===o)i.action=n;else{const a=this.view(t);s.pending.push({cid:this.cid++,action:n,sent:!1,base:a?rh(a,n)??null:null})}s.view=null}flush(){for(const[t,n]of this.houses)for(const s of n.pending)!s.sent&&this.send({t:"act",houseId:t,cid:s.cid,action:s.action})&&(s.sent=!0);this.flushPres()}setPresence(t){this.lastPres=t,this.presDirty=!0,this.presT||this.flushPres()}flushPres(){if(!(!this.presDirty||!this.lastPres)){if(!this.send({t:"pres",p:this.lastPres})){!this.closedByUs&&!this.presT&&(this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90));return}this.presDirty=!1,this.presT&&clearTimeout(this.presT),this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90)}}myPresence(){return this.lastPres}say(t){this.reliable({t:"say",b:t})}lock(t,n){this.reliable({t:"lock",houseId:t,locked:n})}setLook(t){this.reliable({t:"look",look:t});const n=this.players.get(this.pid);n&&(n.look=t)}setDog(t){this.reliable({t:"dog",dog:t});const n=this.players.get(this.pid);n&&(n.dog=t)}fx(t){this.reliable({t:"fx",fx:t})}knock(t){this.send({t:"knock",houseId:t})}ranchOp(t){this.reliable({t:"ranch",o:t})}tbl(t){this.reliable({t:"tbl",...t})}saveArt(t,n,s){return this.send({t:"art",op:"save",houseId:t,id:n,data:s})}getArt(t,n){return this.send({t:"art",op:"get",houseId:t,ids:n})}sendMail(t,n,s,o){this.reliable({t:"mail",op:"send",houseId:t,text:n,color:s,sticker:o})}readMail(t,n){this.reliable({t:"mail",op:"read",houseId:t,id:n})}dropMail(t,n){this.reliable({t:"mail",op:"drop",houseId:t,id:n})}now(){return Date.now()+this.ranch.skew}parent(t){this.cfg.parentKey&&this.reliable({t:"parent",key:this.cfg.parentKey,...t})}}function Sv(e,t,n,s="living"){let o=s;const i=[],a=()=>({...e.view(t),currentRoom:o,soundOn:n.get()}),r=l=>{if(e.houses.has(t)){const c=a();i.forEach(d=>d(c,l))}};return e.on("act",(l,c)=>{l===t&&r(c)}),e.on("reset",l=>{l===t&&r({type:"game/reset"})}),{houseId:t,get:a,subscribe(l){i.push(l)},dispatch(l){if(l.type==="room/switch")o=l.room;else if(l.type==="settings/sound")n.set(l.on);else{if(l.type==="game/reset")return;if(!e.canEdit(t)||l.type.startsWith("baby/")&&!e.speaksBaby||l.type==="item/power"&&!e.speaksAmb||l.type.startsWith("need/")&&!e.speaksNeeds)return;e.dispatch(t,l)}r(l)}}}const rt="#5a3d5c",pe=`stroke="${rt}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,pd=[{name:"Tabby",body:"#ffb26b",stripe:"#e8893a",belly:"#ffe3c4"},{name:"Smokey",body:"#b9b6c9",stripe:"#8f8ba3",belly:"#ecebf3"},{name:"Tuxedo",body:"#4f4660",stripe:"",belly:"#ffffff"},{name:"Calico",body:"#fff6ec",stripe:"",belly:"#fff6ec"}],hd=[{name:"Pup",body:"#f2d0a4",ear:"#b07d54",snout:"#fbe7cc"},{name:"Poodle",body:"#fff0f6",ear:"#ffc8dd",snout:"#fff7fb"},{name:"Dachshund",body:"#c07a45",ear:"#7d4a26",snout:"#d99a68"},{name:"Golden",body:"#f4b860",ear:"#e09a3e",snout:"#fbd9a0"},{name:"Spotty",body:"#ffffff",ear:"#4a3f52",snout:"#ffffff"}],Tv=(e,t,n,s=!1)=>s?`<path d="M${e-3} ${n} q3 3 6 0 M${t-3} ${n} q3 3 6 0" fill="none" ${pe} stroke-width="2.5"/>`:`<circle cx="${e}" cy="${n}" r="2.8" fill="${rt}"/><circle cx="${t}" cy="${n}" r="2.8" fill="${rt}"/><circle cx="${e+.9}" cy="${n-.9}" r=".9" fill="#fff"/><circle cx="${t+.9}" cy="${n-.9}" r=".9" fill="#fff"/>`,ud=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9bb5" opacity=".75"/>`;function Go(e,t="stand"){const n=pd[e]??pd[0],s="#ffb3c6",o=(i,a,r,l)=>`
    <path d="M${i-13} ${a-8} L${i-10} ${a-25} L${i-1} ${a-13} Z" fill="${n.body}" ${pe}/><path d="M${i-10.5} ${a-11} L${i-9.5} ${a-20} L${i-4} ${a-13} Z" fill="${s}"/>
    <path d="M${i+1} ${a-13} L${i+11} ${a-26} L${i+13} ${a-7} Z" fill="${e===3?"#f4a259":n.body}" ${pe}/><path d="M${i+4} ${a-13} L${i+10} ${a-21} L${i+11} ${a-11} Z" fill="${s}"/>
    <circle cx="${i}" cy="${a}" r="${r}" fill="${n.body}" ${pe}/>
    ${e===3?`<path d="M${i+2} ${a-r+1} a${r} ${r} 0 0 1 ${r-3} ${r-2} q-6 2 -${r-3} -${r-3}z" fill="#f4a259"/>`:""}
    ${e===2?`<ellipse cx="${i+2}" cy="${a+7}" rx="9" ry="7" fill="#fff"/>`:""}
    ${n.stripe?`<path d="M${i-4} ${a-r+2} v5 M${i+2} ${a-r+1} v6 M${i+8} ${a-r+3} v4" ${pe} stroke="${n.stripe}" stroke-width="2.5"/>`:""}
    ${Tv(i-4,i+7,a,l)}
    <path d="M${i+3} ${a+4} l-2.5 -2 h5 z" fill="#ff8fab"/><path d="M${i+.5} ${a+6} q2.5 2.5 5 0" fill="none" ${pe} stroke-width="2"/>
    ${ud(i-8,a+5)}${ud(i+12,a+5)}
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
    ${o(90,40,17,!1)}</svg>`}function ca(e,t="stand"){const n=hd[e]??hd[0],s=t==="sleep",o=e===2,i=e===1,a=e===3,r=e===4,l=o?66:58,c=o?70:62,d=94-c,f=o?102:92,h=o?50:40,u=(_,P)=>i?`<rect class="leg ${P}" x="${_+2}" y="${c}" width="6" height="${d}" rx="3" fill="${n.body}" ${pe}/><circle class="leg ${P}" cx="${_+5}" cy="91" r="6" fill="${n.body}" ${pe}/>`:`<rect class="leg ${P}" x="${_}" y="${c}" width="10" height="${d}" rx="5" fill="${n.body}" ${pe}/>`,y=i?`<circle cx="44" cy="58" r="15" fill="${n.body}" ${pe}/><circle cx="70" cy="56" r="17" fill="${n.body}" ${pe}/><ellipse cx="57" cy="58" rx="22" ry="12" fill="${n.body}"/>`:`<ellipse cx="${o?62:58}" cy="${l}" rx="${o?42:32}" ry="${o?13:17}" fill="${n.body}" ${pe}/>`,m=r?`<circle cx="46" cy="54" r="5" fill="${rt}"/><circle cx="64" cy="62" r="4" fill="${rt}"/><circle cx="72" cy="50" r="3.5" fill="${rt}"/><circle cx="38" cy="64" r="3" fill="${rt}"/>`:"",v=i?`<g class="tail"><path d="M30 52 L22 38" ${pe}/><circle cx="21" cy="34" r="7" fill="${n.body}" ${pe}/></g>`:a?`<path class="tail" d="M30 52 Q10 50 14 30 Q20 40 30 46" fill="${n.body}" ${pe}/>`:`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${rt}" stroke-width="9" stroke-linecap="round"/>`,w=!i&&!a?`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`:"",g=`
    ${i?`<circle cx="${f-2}" cy="${h-16}" r="10" fill="${n.body}" ${pe}/>`:""}
    <circle cx="${f}" cy="${h}" r="17" fill="${n.body}" ${pe}/>
    ${r?`<circle cx="${f-6}" cy="${h-8}" r="4" fill="${rt}"/>`:""}
    <ellipse cx="${f+13}" cy="${h+7}" rx="11" ry="8" fill="${n.snout}" ${pe}/>
    <circle cx="${f+22}" cy="${h+4}" r="4" fill="${rt}"/>
    <path d="M${f+14} ${h+12} q4 3 8 0" fill="none" ${pe} stroke-width="2"/>
    ${s?"":`<path class="tongue" d="M${f+16} ${h+13} q2 7 6 0" fill="#ff8fab" ${pe} stroke-width="2"/>`}
    ${s?`<path d="M${f+2} ${h-4} q3 3 6 0" fill="none" ${pe} stroke-width="2.4"/>`:`<circle cx="${f+5}" cy="${h-3}" r="3" fill="${rt}"/><circle cx="${f+6}" cy="${h-4}" r="1" fill="#fff"/>`}
    ${ud(f+2,h+8)}
    ${i?`<circle cx="${f-9}" cy="${h+8}" r="9" fill="${n.ear}" ${pe}/>`:`<ellipse class="ear" cx="${f-9}" cy="${h+4}" rx="7" ry="${a||o?14:12}" fill="${n.ear}" ${pe} transform="rotate(12 ${f-9} ${h+4})"/>`}
    <path d="M${f-12} ${h+14} q10 6 20 2" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round"/><circle cx="${f-1}" cy="${h+19}" r="3" fill="#ffd166" ${pe} stroke-width="1.5"/>`,b=i?`<g class="tail"><path d="M42 86 L28 80" ${pe}/><circle cx="25" cy="78" r="7" fill="${n.body}" ${pe}/></g>`:`<path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${rt}" stroke-width="9" stroke-linecap="round"/><path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`;return t==="sit"||t==="sleep"?`<svg viewBox="0 0 130 100" class="dogsvg ${s?"sleep":"sit"}">${b}
    <ellipse cx="60" cy="70" rx="22" ry="24" fill="${n.body}" ${pe}/>${r?`<circle cx="54" cy="66" r="5" fill="${rt}"/><circle cx="64" cy="80" r="4" fill="${rt}"/>`:""}
    ${u(62,"a")}${u(74,"b")}<g transform="translate(-22 -2)">${g}</g></svg>`:`<svg viewBox="0 0 130 100" class="dogsvg stand">${v}${w}
    ${u(o?30:34,"b")}${u(o?82:72,"a")}
    ${y}${m}
    ${u(o?42:46,"a")}${u(o?94:84,"b")}
    ${g}</svg>`}const H0=e=>{let t=2166136261;for(const n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},Gs=(e,t)=>{let n=(e^Math.imul(t,2654435761))>>>0;return n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),n^=n>>>16,(n>>>0)/4294967296},ch=18,Pv={1:.35,2:.6};function Av(e,t,n){return e-t*Pv[n]}function Rv(e,t){const s=Math.floor(t/1e3/2.8);return Gs(H0(e||"pup"),s)<.62?"rest":"peek"}function Cv(e,t,n,s,o=!1){const i=H0(e.name+":"+e.coat+":"+e.room+":"+Math.round(e.x)+(n?":t"+Math.round(n.x):"")),a=t/1e3,r=Math.floor(a/ch),l=a-r*ch;if(!n){const w=W=>Math.max(160,Math.min(2240,e.x+(Gs(i,W)-.5)*760)),g=w(r-1);let b=w(r);const _=Gs(i+7,r),P=_<.45?"nap":_<.75?"sit":"groom",$=!!(s&&P==="nap"&&Gs(i+13,r)<.72);$&&s&&(b=Math.max(160,Math.min(2240,s.x)));const x=Math.abs(b-g),D=Math.min(5,x/110);return l<D&&!o?{x:g+(b-g)*(l/D),mood:"walk",flip:b<g,perch:0,curl:0}:{x:b,mood:P,flip:b<g,perch:0,curl:$?1:0}}const c=Math.max(160,Math.min(2240,n.x)),d=Gs(i+5,r)<.45?2:1,f=Math.max(160,Math.min(2240,c+(Gs(i,r)-.5)*420)),h=Math.abs(c-f),u=Math.min(4.2,Math.max(.6,h/160)),y=c<f;if(l<u&&!o)return{x:f+(c-f)*(l/u),mood:"walk",flip:y,perch:0,curl:0};const m=Gs(i+11,r),v=m<.34?"nap":m<.67?"sit":"play";return{x:c,mood:v,flip:y,perch:d,curl:0}}const Dr="#5a3d5c",He=`stroke="${Dr}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,Io=[`<svg viewBox="0 0 48 48"><path d="M24 40 C16 32 6 26 10 16 C14 8 24 12 24 20 C24 12 34 8 38 16 C42 26 32 32 24 40 Z" fill="#ff6b9a" ${He}/></svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l5 12 13 1 -10 8 3 13 -11 -7 -11 7 3 -13 -10 -8 13 -1z" fill="#ffd166" ${He}/></svg>`,`<svg viewBox="0 0 48 48"><circle cx="24" cy="22" r="6" fill="#ff8fab" ${He}/>${[0,60,120,180,240,300].map(e=>`<circle cx="${24+Math.cos(e*Math.PI/180)*12}" cy="${22+Math.sin(e*Math.PI/180)*12}" r="5" fill="#ffd166" ${He}/>`).join("")}<path d="M24 34 V44" ${He}/></svg>`,`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="14" ry="10" fill="#ffb26b" ${He}/><circle cx="34" cy="20" r="8" fill="#ffc46b" ${He}/><path d="M28 14 L30 6 L36 14" fill="#ffb26b" ${He}/><circle cx="32" cy="19" r="1.4" fill="${Dr}"/><circle cx="37" cy="19" r="1.4" fill="${Dr}"/></svg>`,`<svg viewBox="0 0 48 48">${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M8 ${30-t*4} Q24 ${10-t*3} 40 ${30-t*4}" fill="none" stroke="${e}" stroke-width="4"/>`).join("")}</svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l3 10 10 1 -8 6 3 10 -8 -5 -8 5 3 -10 -8 -6 10 -1z" fill="#fff3b0" ${He}/><circle cx="12" cy="34" r="3" fill="#ff8fab" ${He}/><circle cx="36" cy="36" r="2.4" fill="#bde0fe" ${He}/></svg>`];function dh(e){const t=e?`<g class="flag"><path d="M30 16 V6" ${He}/><path d="M30 6 H42 L38 11 L42 16 H30 Z" fill="#ff6b6b" ${He}/></g>`:`<g class="flag"><path d="M18 28 H28" ${He}/><path d="M18 22 H28 L25 25 L28 28 H18 Z" fill="#ffd166" ${He}/></g>`;return`<svg viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="68" rx="18" ry="3" fill="#000" opacity=".12"/>
    <rect x="30" y="40" width="5" height="26" rx="2" fill="#c99366" ${He}/>
    <path d="M8 40 V22 Q8 8 32 8 Q56 8 56 22 V40 Z" fill="#8ecae6" ${He}/>
    <path d="M8 28 H56" ${He}/>
    <rect x="14" y="32" width="36" height="16" rx="4" fill="#fff6e6" ${He}/>
    <circle cx="32" cy="40" r="3" fill="${Dr}"/>
    ${t}
  </svg>`}function Iv(e,t=[]){const n=wv(e,t);return n.ok?{ok:!0,text:n.text}:{ok:!1,msg:n.reason==="empty"?"Write a little note!":Sl[n.reason]||"Oops, try different words!"}}const Ov={...Sl,empty:"Write a little note!",slow:"Let's wait a moment!",full:"This mailbox is full!",notyours:"That's her mailbox. Only she can open it 💌",nohouse:"That house is not on the street.",gone:"That letter is already gone.",toobig:"The mailbox is too full!",presetsOnly:"Typing is off. Pick a phrase!",unread:"She still has your letters! Wait until she reads them."};function Bv(e){return Ov[e]||"Let's try that again!"}function zv(e){let t="",n="",s=!1,o="",i=0,a=0,r=-1,l="",c="";const d=()=>document.getElementById("mailCue");d()?.addEventListener("click",()=>{e.openOwn()});function f(){t="",n="",document.getElementById("mailSheet")?.remove()}function h(){let w=document.getElementById("mailSheet");return w||(w=document.createElement("div"),w.id="mailSheet",w.className="sheet mailSheet",w.innerHTML='<div class="card" id="mailCard"></div>',document.body.appendChild(w),w.addEventListener("click",g=>{const b=g.target;if(b===w||b.closest('[data-m="close"]')){f();return}y(b)}),w.addEventListener("input",g=>{const b=g.target;if(b.id!=="mailText")return;const _=document.getElementById("mailCount");_&&(_.textContent=`${b.value.length}/${ls}`)})),w}function u(){if(!t)return;const w=h().querySelector("#mailText")?.value??"",g=e.mine(t),b=e.lettersOf(t),_=e.houseName(t),P=h().querySelector("#mailCard");if(n&&g&&!s){const x=b.find(D=>D.id===n);if(x&&x.text){m(x);return}n=""}if(s||!g){const x=e.freeType(),D=o?`Reply to ${e.houseName(o)||"your friend"}`:g?"Leave a letter":`Letter for ${_}`,W=x?`<textarea id="mailText" class="mailBox" maxlength="${ls}" placeholder="Hi! Come play!"></textarea>
        <div class="mailCount" id="mailCount">0/${ls}</div>`:`<h3>Phrase</h3><div class="phrases mailPhrases">${Ui.map((q,se)=>`<button type="button" data-phrase="${se}" class="${se===r?"on":""}">${kt(q)}</button>`).join("")}</div>`;P.innerHTML=`<button class="close" data-m="close">✕</button><h2>${kt(D)}</h2>
        <p class="hint">${x?"A short note. Your name goes on it for you.":"Pick a phrase. Your name goes on it for you."}</p>
        ${W}
        <h3>Paper</h3><div class="mailRow">${es.map((q,se)=>`<button class="swatch ${se===i?"on":""}" data-color="${se}" style="background:${q}" aria-label="Paper ${se+1}"></button>`).join("")}</div>
        <h3>Sticker</h3><div class="mailRow">${Io.slice(0,p0).map((q,se)=>`<button class="stick ${se===a?"on":""}" data-sticker="${se}" aria-label="Sticker ${se+1}">${q}</button>`).join("")}</div>
        ${l?`<p class="mailErr" id="mailErr">${kt(l)}</p>`:""}
        <button class="mailSend" id="mailSend" type="button">Send</button>
        ${g&&b.length?'<button class="mailRow" data-act="back" type="button" style="margin-top:8px">Back to my mail</button>':""}`;const Q=h().querySelector("#mailText");if(Q&&w){Q.value=w;const q=document.getElementById("mailCount");q&&(q.textContent=`${w.length}/${ls}`)}return}const $=b.length?b.slice().reverse().map(x=>x.text?`<button type="button" class="letter ${x.read?"":"fresh"}" data-letter="${kt(x.id)}" style="background:${es[x.color]??es[0]}">
        <span class="sticker">${Io[x.sticker]??Io[0]}</span>
        <span class="who">${kt(x.from)}</span><span class="when">${kt(dc(x.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${He}/><path d="M4 8 L40 24 L76 8" fill="${es[x.color]??"#fff"}" ${He}/></svg>
      </button>`:`<div class="letter" style="background:${es[x.color]??es[0]}"><span class="who">Your letter</span><span class="when">${kt(dc(x.at))}</span><span class="statusChip ${x.read?"read":""}">${x.read?"Read":"Delivered"}</span></div>`).join(""):'<p class="hint">No letters yet. Your flag pops up when one arrives!</p>';P.innerHTML=`<button class="close" data-m="close">✕</button><h2>${kt(_)} mailbox</h2>${$}
      <div class="mailRow"><button type="button" data-act="write">Write a letter</button></div>
      ${l?`<p class="mailErr">${kt(l)}</p>`:""}`}function y(w){const g=w.closest(".mailPhrases [data-phrase]");if(g){r=+g.dataset.phrase,l="",u();return}const b=w.closest("[data-color]");if(b){i=+b.dataset.color,u();return}const _=w.closest("[data-sticker]");if(_){a=+_.dataset.sticker,u();return}if(w.closest("#mailSend"))return v();const P=w.closest("[data-act]")?.dataset.act;if(P==="write"){s=!0,o="",n="",l="",u();return}if(P==="back"){s=!1,o="",n="",l="",u();return}if(P==="reply"){const Q=e.houseOf(w.closest("[data-from]")?.dataset.from??"");if(!Q){e.toast("They are not on the street anymore.");return}o=Q,s=!0,n="",l="",t=Q,u();return}if(P==="drop"){const Q=w.closest("[data-id]")?.dataset.id??"";if(c!==Q){c=Q,e.toast("Tap again to throw it away");return}c="",e.drop(t,Q);return}const $=w.closest("[data-letter]");if(!$)return;const x=$.dataset.letter,W=e.lettersOf(t).find(Q=>Q.id===x);W&&(!e.mine(t)||!W.text||(W.read||e.read(t,x),n=x,m(W)))}function m(w){const g=Dv(w.text),b=h().querySelector("#mailCard");b.innerHTML=`<button class="close" data-m="close">✕</button>
      <div class="letter open read" style="background:${es[w.color]??es[0]}" data-id="${kt(w.id)}" data-from="${kt(w.fromPid)}">
        <span class="sticker">${Io[w.sticker]??Io[0]}</span>
        <span class="who">${kt(w.from)}</span><span class="when">${kt(dc(w.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${He}/><path class="flap" d="M4 8 L40 24 L76 8" fill="#fff" ${He}/></svg>
        <p class="words">${kt(g??"")}</p>
        <span class="mailRow"><button type="button" data-act="reply">Reply</button><button type="button" class="throw" data-act="drop">${c===w.id?"Tap again":"Throw away"}</button></span>
      </div>
      <button type="button" data-act="back">All my mail</button>
      ${l?`<p class="mailErr">${kt(l)}</p>`:""}`}function v(){let w="";if(e.freeType()){const b=h().querySelector("#mailText")?.value??"",_=Iv(b);if(!_.ok){l=_.msg,u();const P=h().querySelector("#mailText");P&&(P.value=b);return}w=_.text}else{if(r<0||r>=Ui.length){l="Pick a phrase!",u();return}w=Ui[r]}const g=o||t;l="",e.send(g,w,i,a),e.toast("On its way!"),e.mine(g)?(s=!1,o="",t=g,u()):f()}return{open(w,g,b,_){t=w,n="",s=!b,o="",l="",c="",i=0,a=0,r=-1,u()},fail(w){l=Bv(w),t?u():e.toast(l)},refresh(){t&&u()},syncCue(w){d()?.classList.toggle("show",w)}}}function Dv(e){if(!e)return null;const t=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return!t||t.length>ls?null:t}function kt(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const W0=()=>wt("cozy-play");function Hv(){try{return localStorage.getItem(W0())==="play"?"play":"decorate"}catch{return"decorate"}}function Wv(e){try{localStorage.setItem(W0(),e)}catch{}}function Vv(e){return e==="kennel"?"kennel":e==="cat-tower"?"tower":e==="yard-swing"?"swing":e==="lamp"||/(^|:)lamp|starlamp|light/.test(e)?"lamp":e==="fridge"||e==="stove"||e==="vanity"||e==="bookshelf"||e==="window"||e==="mirror"||e==="tv"||/fridge|stove|cabinet|drawer|vanity/.test(e)?"open":Kn(e)?"sit":"wiggle"}const Uv='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 22 V12 a3 3 0 0 1 6 0 V22" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M24 22 V10 a3 3 0 0 1 6 0 V24" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M30 24 V14 a3 3 0 0 1 6 0 V26" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M14 22 V16 a3 3 0 0 0-6 0 V28 c0 8 6 14 16 14 h4 c8 0 12-5 12-12 V26" fill="#ffe0b8" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M34 8 l1.2 3 3 .4 -2.2 2 .6 3 -2.6-1.6 -2.6 1.6 .6-3 -2.2-2 3-.4z" fill="#ffd166" stroke="#5a3d5c" stroke-width="1.4"/></svg>',Qv='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34 L22 22 L30 30 L18 42 Q10 42 10 34 Z" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M22 22 L32 12 L38 18 L28 28 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 12 L36 6 L42 12 L38 18" fill="#c9a0dc" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M14 36 h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M8 14 l2 1 M40 34 l2 2 M8 40 l3 -1" stroke="#5a3d5c" stroke-width="2" stroke-linecap="round"/></svg>';function Nv(e,t){let n="decorate";const s=e.querySelector("#modePlay"),o=e.querySelector("#modeDecorate");s.querySelector(".modeIco").innerHTML=Uv,o.querySelector(".modeIco").innerHTML=Qv;const i=()=>{const c=n==="play";document.body.classList.toggle("mode-play",c),s.classList.toggle("on",c),o.classList.toggle("on",!c),s.setAttribute("aria-pressed",c?"true":"false"),o.setAttribute("aria-pressed",c?"false":"true")},a=(c,d)=>{n=c,d&&Wv(c),i(),t.onChange?.()};e.addEventListener("pointerdown",c=>c.stopPropagation()),e.addEventListener("click",c=>{const d=c.target.closest("[data-mode]");if(!d)return;const f=d.dataset.mode==="play"?"play":"decorate";a(f,t.ownHouse())}),i();let r=!1;return{mode:()=>n,isPlay:()=>n==="play",sync(c){a(c?Hv():"play",!1)},hint:()=>{if(r||!document.body.classList.contains("phone"))return;const c=wt("cozy-mode-hint");try{if(localStorage.getItem(c)){r=!0;return}}catch{r=!0;return}r=!0;const d=document.createElement("p");d.className="modeHint",d.textContent="Play: tap things! Decorate: move things!",e.appendChild(d);let f=!1;const h=()=>{if(!f){f=!0,d.remove(),window.removeEventListener("pointerdown",h);try{localStorage.setItem(c,"1")}catch{}}};window.setTimeout(h,2800),d.addEventListener("click",h),window.addEventListener("pointerdown",h)}}}const V0=e=>String(e||"").replace(/^pack:/,"").toLowerCase();function da(e){return/(^|-)table$/.test(V0(e))}function fh(e){const t=Kn(e);return!t||t.pose!=="sit"?!1:/chair|stool/.test(V0(e))}const qv=320,jv=180,gd=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y);function Fv(e,t,n,s){if(s&&da(s.kind))return s;const o=e.filter(c=>da(c.kind));let i=null,a=1/0;const r=s&&ln(s.kind)?s:{x:t,y:n},l=s&&ln(s.kind)?jv:0;for(const c of o){const d=Math.max(l,jn(c.kind)*.55+40),f=gd(r,c);f<=d&&f<a&&(i=c,a=f)}return i}function Zv(e,t,n,s){if(s&&Nn(s.kind))return s;for(const o of e){if(!Nn(o.kind))continue;const i=jn(o.kind);if(Math.abs(t-o.x)<=Math.max(60,i*.45)&&Math.abs(n-o.y)<=80)return o}return null}function Gv(e,t,n,s){const o=jn(e.kind),i=jo(e.x,o,t,s),a=[i];if(n>1){const r=jo(e.x,o,e.x+(e.x-i.x),s);a.push({x:r.x,y:r.y})}return a}function Mf(e){const t=e.roomW??2400,{releaseX:n,releaseY:s,hit:o,items:i,occupied:a,held:r,seatPiece:l}=e,c=r.filter(w=>ln(w.kind));if(o&&fh(o.kind)){const w=l(o);if(w){const g=Wo({mode:"play",via:"drag",releaseX:n,releaseY:s,piece:w,occupied:a});if(g.seat)return{x:g.x,y:g.y,seat:g.seat,releases:[]}}}const d=Zv(i,n,s,o),f=Fv(i,n,s,o),h=!!(o&&Kn(o.kind)?.pose==="lie"),u=d||(h?o:null),y=[];if(u&&c.length){const w=Gv(u,n,c.length,t);for(let g=0;g<c.length;g++){const b=w[Math.min(g,w.length-1)];y.push({hand:c[g].hand,x:b.x,y:b.y||oi})}}if(d)return{x:d.x,y:d.y+8,seat:null,releases:y};if(f){let w=null,g=1/0;for(const _ of i){if(!fh(_.kind)||gd(_,f)>qv)continue;const P=l(_);if(!P)continue;const $=Wo({mode:"play",via:"drag",releaseX:n,releaseY:s,piece:P,occupied:a});if(!$.seat)continue;const x=gd(_,{x:n,y:s});x<g&&(g=x,w={x:$.x,y:$.y,seat:$.seat})}if(w)return{...w,releases:y};const b=jo(f.x,jn(f.kind),n,t);return{x:b.x,y:b.y,seat:null,releases:y}}const m=o?l(o):null,v=Wo({mode:"play",via:"drag",releaseX:n,releaseY:s,piece:m,occupied:a});return{x:v.x,y:v.y,seat:v.seat,releases:y}}const U0=new Map;let Q0=!1;function Zn(){return Q0}function Yv(e){Q0=e}function Gn(e){return U0.get(e)}function Kv(e,t){U0.set(e,t)}const N0=!0;let Pi=null;function Lf(){return Pi??N0}function Xv(e){const t=new URLSearchParams(e.replace(/^\?/,"")).get("art");t==="v1"?Pi=!1:t==="v2"?Pi=!0:Pi=null;const n=Pi??N0;return Yv(n),n}const Ls=[600,1800,4500],Jv=e=>new Promise(t=>setTimeout(t,e));async function q0(e,t=Ls){let n;for(let s=0;;s++){try{return await e()}catch(o){n=o}if(s>=t.length)break;await Jv(t[s])}throw n}function e4(e,t=Ls){const n=Number(e.dataset.tries||"0");if(n>=t.length)return!1;const s=e.getAttribute("src");return s?(e.dataset.tries=String(n+1),setTimeout(()=>{!e.isConnected||e.getAttribute("src")!==s||(e.removeAttribute("src"),e.setAttribute("src",s))},t[n]),!0):!1}async function Cs(e,t=Ls){try{return await q0(e,t)}catch(n){throw n4(),n}}let ph=!1,hh=!1;function t4(){ph||typeof window>"u"||(ph=!0,window.addEventListener("vite:preloadError",e=>{}))}function n4(){if(hh||typeof document>"u"||(hh=!0,document.getElementById("artRetryNote")))return;const e=document.createElement("div");e.id="artRetryNote",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.textContent="Some pictures could not load. You can still play!";const t=document.createElement("button");t.type="button",t.className="artRetryNoteOk",t.textContent="OK",t.addEventListener("click",()=>e.remove()),e.appendChild(t);const n=()=>{(document.body||document.documentElement).appendChild(e)};document.body?n():document.addEventListener("DOMContentLoaded",n,{once:!0})}const Hr=Object.assign({"../../assets/art/any/armchair.webp":()=>p(()=>import("./armchair-DNUcj0LU.js"),[]).then(e=>e.default),"../../assets/art/any/ball.webp":()=>p(()=>import("./ball-CLPa09gM.js"),[]).then(e=>e.default),"../../assets/art/any/balloon.webp":()=>p(()=>import("./balloon-DUDI6dkT.js"),[]).then(e=>e.default),"../../assets/art/any/bookshelf.webp":()=>p(()=>import("./bookshelf-Cc9ub96u.js"),[]).then(e=>e.default),"../../assets/art/any/chair.webp":()=>p(()=>import("./chair-CF6WU_Hk.js"),[]).then(e=>e.default),"../../assets/art/any/clock.webp":()=>p(()=>import("./clock-fvC-SFdk.js"),[]).then(e=>e.default),"../../assets/art/any/lamp.webp":()=>p(()=>import("./lamp-lkxZMSWs.js"),[]).then(e=>e.default),"../../assets/art/any/picture.webp":()=>p(()=>import("./picture-CnQHfmcC.js"),[]).then(e=>e.default),"../../assets/art/any/plant.webp":()=>p(()=>import("./plant-CsffKA5j.js"),[]).then(e=>e.default),"../../assets/art/any/rug.webp":()=>p(()=>Promise.resolve().then(()=>OE),void 0).then(e=>e.default),"../../assets/art/any/sofa.webp":()=>p(()=>import("./sofa-6tZenqTj.js"),[]).then(e=>e.default),"../../assets/art/any/table.webp":()=>p(()=>import("./table-Du-POmgi.js"),[]).then(e=>e.default),"../../assets/art/any/tv.webp":()=>p(()=>import("./tv-BKQjbyQq.js"),[]).then(e=>e.default),"../../assets/art/any/window.webp":()=>p(()=>Promise.resolve().then(()=>q7),void 0).then(e=>e.default),"../../assets/art/backyard/beach-ball.webp":()=>p(()=>import("./beach-ball-C2DPMVE1.js"),[]).then(e=>e.default),"../../assets/art/backyard/birdbath.webp":()=>p(()=>import("./birdbath-DDDcDsdu.js"),[]).then(e=>e.default),"../../assets/art/backyard/birdhouse.webp":()=>p(()=>import("./birdhouse-CESGhgYG.js"),[]).then(e=>e.default),"../../assets/art/backyard/butterfly-bush.webp":()=>p(()=>import("./butterfly-bush-_zoxtB6t.js"),[]).then(e=>e.default),"../../assets/art/backyard/garden-gnome.webp":()=>p(()=>import("./garden-gnome-6WYwIojF.js"),[]).then(e=>e.default),"../../assets/art/backyard/hammock.webp":()=>p(()=>import("./hammock-CKbEyd70.js"),[]).then(e=>e.default),"../../assets/art/backyard/hedge-row.webp":()=>p(()=>import("./hedge-row-BWgMAPBC.js"),[]).then(e=>e.default),"../../assets/art/backyard/lemonade-cart.webp":()=>p(()=>import("./lemonade-cart-CKZ-MF9v.js"),[]).then(e=>e.default),"../../assets/art/backyard/lemonade-cup.webp":()=>p(()=>import("./lemonade-cup-DQrobp0e.js"),[]).then(e=>e.default),"../../assets/art/backyard/lily-pond.webp":()=>p(()=>import("./lily-pond-Bc4ljnyH.js"),[]).then(e=>e.default),"../../assets/art/backyard/little-slide.webp":()=>p(()=>import("./little-slide-CE81KiKR.js"),[]).then(e=>e.default),"../../assets/art/backyard/patio-lights.webp":()=>p(()=>import("./patio-lights-DBzxlerO.js"),[]).then(e=>e.default),"../../assets/art/backyard/patio-umbrella.webp":()=>p(()=>import("./patio-umbrella-BGJn0_g4.js"),[]).then(e=>e.default),"../../assets/art/backyard/picket-gate.webp":()=>p(()=>import("./picket-gate-DtT9Ltmx.js"),[]).then(e=>e.default),"../../assets/art/backyard/picnic-blanket.webp":()=>p(()=>import("./picnic-blanket-Cum9u0Qx.js"),[]).then(e=>e.default),"../../assets/art/backyard/picnic-table.webp":()=>p(()=>import("./picnic-table-rJl55Ed4.js"),[]).then(e=>e.default),"../../assets/art/backyard/pinwheel.webp":()=>p(()=>import("./pinwheel-CkkOwA13.js"),[]).then(e=>e.default),"../../assets/art/backyard/rain-barrel.webp":()=>p(()=>import("./rain-barrel-EuVOc5Ol.js"),[]).then(e=>e.default),"../../assets/art/backyard/sandbox.webp":()=>p(()=>import("./sandbox-jDqkRU9w.js"),[]).then(e=>e.default),"../../assets/art/backyard/seesaw.webp":()=>p(()=>import("./seesaw-B-Q9duGe.js"),[]).then(e=>e.default),"../../assets/art/backyard/splash-pool.webp":()=>p(()=>import("./splash-pool-CjDapJIs.js"),[]).then(e=>e.default),"../../assets/art/backyard/sprinkler.webp":()=>p(()=>import("./sprinkler-Bp29GZWA.js"),[]).then(e=>e.default),"../../assets/art/backyard/stepping-stones.webp":()=>p(()=>import("./stepping-stones-JF0sP-Iz.js"),[]).then(e=>e.default),"../../assets/art/backyard/sun-lounger.webp":()=>p(()=>import("./sun-lounger-TvBeC8KK.js"),[]).then(e=>e.default),"../../assets/art/backyard/toadstool-light.webp":()=>p(()=>import("./toadstool-light-Cydg5J6b.js"),[]).then(e=>e.default),"../../assets/art/backyard/tulip-bed.webp":()=>p(()=>import("./tulip-bed-j8_T6ExB.js"),[]).then(e=>e.default),"../../assets/art/backyard/veggie-patch.webp":()=>p(()=>import("./veggie-patch-DCJtjvzA.js"),[]).then(e=>e.default),"../../assets/art/backyard/wagon.webp":()=>p(()=>import("./wagon-BZm3ewer.js"),[]).then(e=>e.default),"../../assets/art/backyard/yard-bench.webp":()=>p(()=>import("./yard-bench-Cv1ni_vO.js"),[]).then(e=>e.default),"../../assets/art/backyard/yard-swing.webp":()=>p(()=>import("./yard-swing-BJGg_b84.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mat.webp":()=>p(()=>import("./bath-mat-CGqMmSpc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mirror.webp":()=>p(()=>import("./bath-mirror-0G_LD9ek.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-stool.webp":()=>p(()=>import("./bath-stool-Cxq0W4Pr.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-toilet.webp":()=>p(()=>import("./bath-toilet-D3I7IIUo.js"),[]).then(e=>e.default),"../../assets/art/bathroom/laundry-hamper.webp":()=>p(()=>import("./laundry-hamper-BkR0Wz0-.js"),[]).then(e=>e.default),"../../assets/art/bathroom/rubber-ducky.webp":()=>p(()=>import("./rubber-ducky-B3u_V1zb.js"),[]).then(e=>e.default),"../../assets/art/bathroom/shower-curtain.webp":()=>p(()=>import("./shower-curtain-CfLothKE.js"),[]).then(e=>e.default),"../../assets/art/bathroom/sink-vanity.webp":()=>p(()=>import("./sink-vanity-avyqYHvc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soaking-tub.webp":()=>p(()=>import("./soaking-tub-C4H_s4uu.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soap-dish.webp":()=>p(()=>import("./soap-dish-Dp5i3rho.js"),[]).then(e=>e.default),"../../assets/art/bathroom/towel-bar.webp":()=>p(()=>import("./towel-bar-B_pk-phm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/bed.webp":()=>p(()=>import("./bed-Cl9DoI6l.js"),[]).then(e=>e.default),"../../assets/art/bedroom/mirror.webp":()=>p(()=>import("./mirror-BmFhe6_i.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~alarm-clock.webp":()=>p(()=>import("./pack~alarm-clock-DsMqTNwb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bedtime-snack.webp":()=>p(()=>import("./pack~bedtime-snack-CwkMDndV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-monitor.webp":()=>p(()=>import("./pack~big-monitor-D9xBH6Uo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-wardrobe.webp":()=>p(()=>import("./pack~big-wardrobe-HcZmD6rX.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~book-stack.webp":()=>p(()=>import("./pack~book-stack-BRgispDw.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bubble-bath.webp":()=>p(()=>import("./pack~bubble-bath-COKGg9Dp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunk-bed.webp":()=>p(()=>import("./pack~bunk-bed-DlPI8ODZ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunny-slippers.webp":()=>p(()=>import("./pack~bunny-slippers-l0Ai2DZM.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~canopy-bed.webp":()=>p(()=>import("./pack~canopy-bed-CnOUh6Bv.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cat-bed.webp":()=>p(()=>import("./pack~cat-bed-jijdjakI.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~caterpillar-plush.webp":()=>p(()=>import("./pack~caterpillar-plush-C0OwOmuR.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-canopy-daybed.webp":()=>p(()=>import("./pack~cc-canopy-daybed-DydxR9An.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-beanbag.webp":()=>p(()=>import("./pack~cc-cloud-beanbag-BBONqsoo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-lamp.webp":()=>p(()=>import("./pack~cc-cloud-lamp-BmZ472wV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-fairy-garland.webp":()=>p(()=>import("./pack~cc-fairy-garland-BHwDj5iz.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-heart-bed.webp":()=>p(()=>import("./pack~cc-heart-bed-C77MyR5W.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-jewel-box.webp":()=>p(()=>import("./pack~cc-jewel-box-sQHP3Cwa.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-reading-nook.webp":()=>p(()=>import("./pack~cc-reading-nook-CsNeycvH.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-star-dresser.webp":()=>p(()=>import("./pack~cc-star-dresser-DA2R4QIn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-window-seat.webp":()=>p(()=>import("./pack~cc-window-seat-C48Rguem.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~checker-bed.webp":()=>p(()=>import("./pack~checker-bed-DRGxzSHq.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~clothes-rail.webp":()=>p(()=>import("./pack~clothes-rail-C3j6Nz76.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-rug.webp":()=>p(()=>import("./pack~cloud-rug-DojbAFjK.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-shelf.webp":()=>p(()=>import("./pack~cloud-shelf-AnKv1aGf.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cork-board.webp":()=>p(()=>import("./pack~cork-board-DfnUAUG4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~curvy-desk.webp":()=>p(()=>import("./pack~curvy-desk-BYWcXROd.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~daisy-pot.webp":()=>p(()=>import("./pack~daisy-pot-B0c7zAXE.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk-mic.webp":()=>p(()=>import("./pack~desk-mic-rqXd4kwj.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk.webp":()=>p(()=>import("./pack~desk-CCYyeXW4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dino-plush.webp":()=>p(()=>import("./pack~dino-plush-DkHbQcgG.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~doll-house.webp":()=>p(()=>import("./pack~doll-house-YDCKziqJ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dresser.webp":()=>p(()=>import("./pack~dresser-C6nwNjAN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~egg-chair.webp":()=>p(()=>import("./pack~egg-chair-DU7fUuJW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~floor-fan.webp":()=>p(()=>import("./pack~floor-fan-BLpz7F62.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~frog-plush.webp":()=>p(()=>import("./pack~frog-plush-H14K3f0H.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~game-controller.webp":()=>p(()=>import("./pack~game-controller-D3oYYAQ-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~gaming-chair.webp":()=>p(()=>import("./pack~gaming-chair-ZBwgVPrD.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~guinea-pig.webp":()=>p(()=>import("./pack~guinea-pig-DPIqea0G.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-cage.webp":()=>p(()=>import("./pack~hamster-cage-B96Cssh7.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-pet.webp":()=>p(()=>import("./pack~hamster-pet-Cvf204rb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~headphones.webp":()=>p(()=>import("./pack~headphones-CQB9V8aN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~heart-rug.webp":()=>p(()=>import("./pack~heart-rug-Bv8hxzxL.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~keyboard.webp":()=>p(()=>import("./pack~keyboard-DeZ4vIwp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~lava-lamp.webp":()=>p(()=>import("./pack~lava-lamp-CHXJUd92.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~moon-night-light.webp":()=>p(()=>import("./pack~moon-night-light-BM_Yu-aW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~nightstand.webp":()=>p(()=>import("./pack~nightstand-Coz5lz4g.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~paper-lantern.webp":()=>p(()=>import("./pack~paper-lantern-KLCCw2t-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~pastel-wardrobe.webp":()=>p(()=>import("./pack~pastel-wardrobe-BGo5v24q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~phone-stand.webp":()=>p(()=>import("./pack~phone-stand-DkITkIic.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~piggy-bank.webp":()=>p(()=>import("./pack~piggy-bank-BvruDXQr.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~plant-stand.webp":()=>p(()=>import("./pack~plant-stand-PN6YMQ3-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~play-tent.webp":()=>p(()=>import("./pack~play-tent-CAn9y4lt.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~star-mobile.webp":()=>p(()=>import("./pack~star-mobile-C65pHL5x.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-chest.webp":()=>p(()=>import("./pack~toy-chest-CCoXCM2Q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-robot.webp":()=>p(()=>import("./pack~toy-robot-C4w9ruxo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-train.webp":()=>p(()=>import("./pack~toy-train-CCY6v45R.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~unicorn-plush.webp":()=>p(()=>import("./pack~unicorn-plush-BQM30sq1.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~vlog-camera.webp":()=>p(()=>import("./pack~vlog-camera-fqu7FuU4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wardrobe.webp":()=>p(()=>import("./pack~wardrobe-I04Doflm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-dresser.webp":()=>p(()=>import("./pack~wh-dresser-AB8z2u9d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-nightstand.webp":()=>p(()=>import("./pack~wh-nightstand-CNei9R8d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wood-desk.webp":()=>p(()=>import("./pack~wood-desk-BovaaQew.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wooden-bed.webp":()=>p(()=>import("./pack~wooden-bed-DRuaOxAn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/stars.webp":()=>p(()=>import("./stars-B-_1Uhi4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/story-pillow.webp":()=>p(()=>import("./story-pillow-C53joZXs.js"),[]).then(e=>e.default),"../../assets/art/bedroom/teddy.webp":()=>p(()=>import("./teddy-BfWdCSac.js"),[]).then(e=>e.default),"../../assets/art/bedroom/tub.webp":()=>p(()=>import("./tub-jBZNDbL2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bakery-shelf.webp":()=>p(()=>import("./pack~cc-bakery-shelf-DxlB9xOk.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-breakfast-table.webp":()=>p(()=>import("./pack~cc-breakfast-table-D2YPezZT.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bubble-chair.webp":()=>p(()=>import("./pack~cc-bubble-chair-DKb4WvKy.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-cupcake-stand.webp":()=>p(()=>import("./pack~cc-cupcake-stand-DmYK-4Hu.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-dryer-chair.webp":()=>p(()=>import("./pack~cc-dryer-chair-DmzzPwrg.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-flower-kettle.webp":()=>p(()=>import("./pack~cc-flower-kettle-DnNFg1vb.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-light-vanity.webp":()=>p(()=>import("./pack~cc-light-vanity-C4kTfQ4w.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-macaron-jar.webp":()=>p(()=>import("./pack~cc-macaron-jar-C4jd-6MZ.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mani-chair.webp":()=>p(()=>import("./pack~cc-mani-chair-B1M7wSax.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mint-fridge.webp":()=>p(()=>import("./pack~cc-mint-fridge-CYM93gwH.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-pastel-range.webp":()=>p(()=>import("./pack~cc-pastel-range-BaKvL1x2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-perfume-tray.webp":()=>p(()=>import("./pack~cc-perfume-tray-C9m1uuTm.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-ribbon-mirror.webp":()=>p(()=>import("./pack~cc-ribbon-mirror-CP3Id1P-.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-teapot-set.webp":()=>p(()=>import("./pack~cc-teapot-set-Sh3-x8eW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~arched-shelf.webp":()=>p(()=>import("./pack~arched-shelf-ZP2zbvbL.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~blob-rug.webp":()=>p(()=>import("./pack~blob-rug-Du4wSYaf.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bubbly-plant.webp":()=>p(()=>import("./pack~bubbly-plant-DOKimOCX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bud-vase.webp":()=>p(()=>import("./pack~bud-vase-DRTVK3rW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~comb-brush.webp":()=>p(()=>import("./pack~comb-brush-CpdahK7E.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~cream-jars.webp":()=>p(()=>import("./pack~cream-jars-DoeDfhN_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~drop-lamp.webp":()=>p(()=>import("./pack~drop-lamp-B0mzhGoX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~droplet-buddy.webp":()=>p(()=>import("./pack~droplet-buddy-OBcFFQmI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~fancy-sofa.webp":()=>p(()=>import("./pack~fancy-sofa-DSJSLwz5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~flower-cart.webp":()=>p(()=>import("./pack~flower-cart-B48k2LJX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~foot-spa.webp":()=>p(()=>import("./pack~foot-spa-5A9PVZa7.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~globe-pendants.webp":()=>p(()=>import("./pack~globe-pendants-DXxO-0g2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~glow-mirror.webp":()=>p(()=>import("./pack~glow-mirror-trAPPG0M.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~gold-floor-mirror.webp":()=>p(()=>import("./pack~gold-floor-mirror-Bo5QJcuJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~hair-dryer.webp":()=>p(()=>import("./pack~hair-dryer-DBGDeUp2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-plant.webp":()=>p(()=>import("./pack~heart-plant-CdQWzJHX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-pouf.webp":()=>p(()=>import("./pack~heart-pouf-C0i-NFoI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lilac-curtain.webp":()=>p(()=>import("./pack~lilac-curtain-ByvXUGIT.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lotion-trio.webp":()=>p(()=>import("./pack~lotion-trio-BIg_qrq8.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~mani-lamp.webp":()=>p(()=>import("./pack~mani-lamp-Dv5eyP_r.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~nail-table.webp":()=>p(()=>import("./pack~nail-table-Ca5Z7Wb-.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pebble-rug.webp":()=>p(()=>import("./pack~pebble-rug-DcjYEmIt.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~perfume-bottle.webp":()=>p(()=>import("./pack~perfume-bottle-DxCufYl9.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-fountain.webp":()=>p(()=>import("./pack~pink-fountain-CFCu_fWX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-vanity.webp":()=>p(()=>import("./pack~pink-vanity-BaqHZ_Qs.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-bottle.webp":()=>p(()=>import("./pack~polish-bottle-B2ILiK2Y.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-rack.webp":()=>p(()=>import("./pack~polish-rack-Ba4IBkd5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~reception-desk.webp":()=>p(()=>import("./pack~reception-desk-ChKYb2Ag.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~salon-chair.webp":()=>p(()=>import("./pack~salon-chair-DX6P6E4d.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~scent-candle.webp":()=>p(()=>import("./pack~scent-candle-BZ7OX3YS.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~spray-bottle.webp":()=>p(()=>import("./pack~spray-bottle-Df4-NEdU.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~star-wall-sign.webp":()=>p(()=>import("./pack~star-wall-sign-10ikD7wM.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~swivel-stool.webp":()=>p(()=>import("./pack~swivel-stool-DSUqmRKW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~tiered-tray.webp":()=>p(()=>import("./pack~tiered-tray-2DKLkfK_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-cart.webp":()=>p(()=>import("./pack~towel-cart-ZvOFIu7o.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-stack.webp":()=>p(()=>import("./pack~towel-stack-EDHTj1IJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~vine-planter.webp":()=>p(()=>import("./pack~vine-planter-CBs6XXFi.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~waiting-bench.webp":()=>p(()=>import("./pack~waiting-bench-C-tKIfsJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~wash-chair.webp":()=>p(()=>import("./pack~wash-chair-eJoH6ils.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-candy-bowl.webp":()=>p(()=>import("./pack~hw-candy-bowl-z7nlp1GY.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-cat-statue.webp":()=>p(()=>import("./pack~hw-cat-statue-BDFCmmG-.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-cauldron.webp":()=>p(()=>import("./pack~hw-cauldron-Bw8zZxns.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-ghost-sheet.webp":()=>p(()=>import("./pack~hw-ghost-sheet-uEC5s3ZV.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-hay-bale.webp":()=>p(()=>import("./pack~hw-hay-bale-rPzEkMiW.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-heart-pumpkin.webp":()=>p(()=>import("./pack~hw-heart-pumpkin-D7K9zgfF.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-leaf-garland.webp":()=>p(()=>import("./pack~hw-leaf-garland-DY2NNYlc.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-moon-cling.webp":()=>p(()=>import("./pack~hw-moon-cling-K8zIYhfb.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-moon-lantern.webp":()=>p(()=>import("./pack~hw-moon-lantern-C3hMi0Ts.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-star-pumpkin.webp":()=>p(()=>import("./pack~hw-star-pumpkin-CwkPeGsR.js"),[]).then(e=>e.default),"../../assets/art/halloween/pack~hw-witch-hat.webp":()=>p(()=>import("./pack~hw-witch-hat-YRGsDi94.js"),[]).then(e=>e.default),"../../assets/art/kitchen/apple.webp":()=>p(()=>import("./apple-BDa0Ipjl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/berry-basket.webp":()=>p(()=>import("./berry-basket-z1Rm1ypn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/cake.webp":()=>p(()=>import("./cake-CDrRxmjT.js"),[]).then(e=>e.default),"../../assets/art/kitchen/donut.webp":()=>p(()=>import("./donut-DBMhrMrO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/fridge.webp":()=>p(()=>import("./fridge-DC5W3m5V.js"),[]).then(e=>e.default),"../../assets/art/kitchen/juice.webp":()=>p(()=>import("./juice-BHz3g6Oh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bananas.webp":()=>p(()=>import("./pack~bananas-CGvoV_mG.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bar-stool.webp":()=>p(()=>import("./pack~bar-stool-kZw0EBoe.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bread-loaf.webp":()=>p(()=>import("./pack~bread-loaf-C2hAdBjQ.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~chick.webp":()=>p(()=>import("./pack~chick-DFs7qQ4S.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~china-hutch.webp":()=>p(()=>import("./pack~china-hutch-BrAJJu-B.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cocoa-mug.webp":()=>p(()=>import("./pack~cocoa-mug-C6QGwvvz.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cookie-jar.webp":()=>p(()=>import("./pack~cookie-jar-CFA4F-rC.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cooking-pot.webp":()=>p(()=>import("./pack~cooking-pot-CqkD438y.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cupcake.webp":()=>p(()=>import("./pack~cupcake-CaukIYeh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~dish-rack.webp":()=>p(()=>import("./pack~dish-rack-fSH4Nxjb.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~fruit-bowl.webp":()=>p(()=>import("./pack~fruit-bowl-BHMKWhLB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~frying-pan.webp":()=>p(()=>import("./pack~frying-pan-CpIkYvtj.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~happy-fridge.webp":()=>p(()=>import("./pack~happy-fridge-C0JgsuQs.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~herb-box.webp":()=>p(()=>import("./pack~herb-box-BPkYhHVn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~high-chair.webp":()=>p(()=>import("./pack~high-chair-CwJcZkT4.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~ice-cream.webp":()=>p(()=>import("./pack~ice-cream-Bvngp9VY.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kettle.webp":()=>p(()=>import("./pack~kettle-BbInY_9a.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-counter.webp":()=>p(()=>import("./pack~kitchen-counter-JZQyi4vS.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-sink.webp":()=>p(()=>import("./pack~kitchen-sink-DNNgCqX_.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~lemon-tree.webp":()=>p(()=>import("./pack~lemon-tree-DB7EFLYH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~microwave.webp":()=>p(()=>import("./pack~microwave-CEveiPpI.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~milk-bottle.webp":()=>p(()=>import("./pack~milk-bottle-CUQviIWU.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pancakes.webp":()=>p(()=>import("./pack~pancakes-B3g8r9_b.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pantry-shelf.webp":()=>p(()=>import("./pack~pantry-shelf-CBvTqzJO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pendant-lamp.webp":()=>p(()=>import("./pack~pendant-lamp-863t-y_9.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pet-bowl.webp":()=>p(()=>import("./pack~pet-bowl-BVx7MJ3n.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~rice-cooker.webp":()=>p(()=>import("./pack~rice-cooker-CR0R_fMt.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~runner-rug.webp":()=>p(()=>import("./pack~runner-rug-khpV9koB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~spice-rack.webp":()=>p(()=>import("./pack~spice-rack-Bb2fECLl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~stand-mixer.webp":()=>p(()=>import("./pack~stand-mixer-Cc12hcA3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~teapot.webp":()=>p(()=>import("./pack~teapot-DbGmGSk-.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~toaster.webp":()=>p(()=>import("./pack~toaster-C7Q5keZK.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~utensil-rail.webp":()=>p(()=>import("./pack~utensil-rail-5WZRpD_3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~watermelon-slice.webp":()=>p(()=>import("./pack~watermelon-slice-C52sVm4c.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pizza.webp":()=>p(()=>import("./pizza-D-Cud-mH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/stove.webp":()=>p(()=>import("./stove-D_-V6Kzg.js"),[]).then(e=>e.default),"../../assets/art/living/_pop~cada-mouse.webp":()=>p(()=>Promise.resolve().then(()=>S4),void 0).then(e=>e.default),"../../assets/art/living/_pop~quinn-pup.webp":()=>p(()=>Promise.resolve().then(()=>T4),void 0).then(e=>e.default),"../../assets/art/living/_pop~sloane-snail.webp":()=>p(()=>Promise.resolve().then(()=>P4),void 0).then(e=>e.default),"../../assets/art/living/bunny.webp":()=>p(()=>import("./bunny-CObFAG48.js"),[]).then(e=>e.default),"../../assets/art/living/cactus.webp":()=>p(()=>import("./cactus-ZhSDibna.js"),[]).then(e=>e.default),"../../assets/art/living/cat-tower.webp":()=>p(()=>import("./cat-tower-D8zuZTAN.js"),[]).then(e=>e.default),"../../assets/art/living/cat.webp":()=>p(()=>import("./cat-D3BztbTL.js"),[]).then(e=>e.default),"../../assets/art/living/dog.webp":()=>p(()=>import("./dog-CaRYped2.js"),[]).then(e=>e.default),"../../assets/art/living/egg~cada-mouse.webp":()=>p(()=>import("./egg~cada-mouse-qwyybszI.js"),[]).then(e=>e.default),"../../assets/art/living/egg~chloe-starlamp.webp":()=>p(()=>import("./egg~chloe-starlamp-CdRast8x.js"),[]).then(e=>e.default),"../../assets/art/living/egg~quinn-pup.webp":()=>p(()=>import("./egg~quinn-pup-CJe2EZ7X.js"),[]).then(e=>e.default),"../../assets/art/living/egg~reagan-frame.webp":()=>p(()=>import("./egg~reagan-frame-ldfvmD0a.js"),[]).then(e=>e.default),"../../assets/art/living/egg~sloane-snail.webp":()=>p(()=>import("./egg~sloane-snail-r5qvwW98.js"),[]).then(e=>e.default),"../../assets/art/living/fish.webp":()=>p(()=>import("./fish-maRwHAJ7.js"),[]).then(e=>e.default),"../../assets/art/living/floor-cushion.webp":()=>p(()=>import("./floor-cushion-xmeTGRs4.js"),[]).then(e=>e.default),"../../assets/art/living/flowers.webp":()=>p(()=>import("./flowers-CRQe1ixJ.js"),[]).then(e=>e.default),"../../assets/art/living/kennel.webp":()=>p(()=>import("./kennel-5tTNQe8j.js"),[]).then(e=>e.default),"../../assets/art/living/pack~acorn-friend.webp":()=>p(()=>import("./pack~acorn-friend-DRuBUVCM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~aquarium.webp":()=>p(()=>import("./pack~aquarium-YU79BMEH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~arc-floor-lamp.webp":()=>p(()=>import("./pack~arc-floor-lamp-DXBWn_jm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bean-bag.webp":()=>p(()=>Promise.resolve().then(()=>BE),void 0).then(e=>e.default),"../../assets/art/living/pack~bird-cage.webp":()=>p(()=>import("./pack~bird-cage-BG5Oo83y.js"),[]).then(e=>e.default),"../../assets/art/living/pack~blanket-basket.webp":()=>p(()=>import("./pack~blanket-basket-D9HUE-PH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~box-stack.webp":()=>p(()=>import("./pack~box-stack-DlrNN9pK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~brick-fireplace.webp":()=>p(()=>import("./pack~brick-fireplace-WBAkEMcM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~building-blocks.webp":()=>p(()=>import("./pack~building-blocks-B9tOTAc-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bulletin-board.webp":()=>p(()=>import("./pack~bulletin-board-BanI9ESo.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cactus-buddy.webp":()=>p(()=>import("./pack~cactus-buddy-XIo1SKh4.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-cottage-aquarium.webp":()=>p(()=>import("./pack~cc-cottage-aquarium-BEaUEbqv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-fairy-shelf.webp":()=>p(()=>import("./pack~cc-fairy-shelf-Dm4QJ5ID.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-flower-lamp.webp":()=>p(()=>import("./pack~cc-flower-lamp-69A_4yj-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-clock.webp":()=>p(()=>import("./pack~cc-heart-clock-BG6oca1G.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-pouf.webp":()=>p(()=>import("./pack~cc-heart-pouf-ryX-n2Mr.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-rug.webp":()=>p(()=>import("./pack~cc-heart-rug-Cv9FadVw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-macrame-swing.webp":()=>p(()=>import("./pack~cc-macrame-swing-CaIFr-gR.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-mushroom-stool.webp":()=>p(()=>import("./pack~cc-mushroom-stool-D7K_Q0GF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-petal-table.webp":()=>p(()=>import("./pack~cc-petal-table-C9vJSQzw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-plant-wall.webp":()=>p(()=>import("./pack~cc-plant-wall-DF5W5IvZ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-record-player.webp":()=>p(()=>import("./pack~cc-record-player-PdVEHYb8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-curtains.webp":()=>p(()=>import("./pack~cc-scallop-curtains-Vt3j-c2C.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-loveseat.webp":()=>p(()=>import("./pack~cc-scallop-loveseat-D_1065-V.js"),[]).then(e=>e.default),"../../assets/art/living/pack~checker-rug.webp":()=>p(()=>import("./pack~checker-rug-Wy0CMZSF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cloud-sofa.webp":()=>p(()=>import("./pack~cloud-sofa-DpVszcfk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~coffee-table.webp":()=>p(()=>import("./pack~coffee-table-K_hB0tW1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~comfy-armchair.webp":()=>p(()=>import("./pack~comfy-armchair-DnTSpyVq.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cream-sofa.webp":()=>p(()=>import("./pack~cream-sofa-uxsQUYph.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cubby-shelf.webp":()=>p(()=>import("./pack~cubby-shelf-B9YB2weQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cube-shelf.webp":()=>p(()=>import("./pack~cube-shelf-Do0yoJlP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cute-speaker.webp":()=>p(()=>import("./pack~cute-speaker-CENJbaPd.js"),[]).then(e=>e.default),"../../assets/art/living/pack~daisy-rug.webp":()=>p(()=>import("./pack~daisy-rug-CDZ68mcS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~desk-lamp.webp":()=>p(()=>import("./pack~desk-lamp-luSxwyT9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fiddle-leaf-fig.webp":()=>p(()=>import("./pack~fiddle-leaf-fig-COblJUVe.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fireplace.webp":()=>p(()=>import("./pack~fireplace-BvqJ4MHf.js"),[]).then(e=>e.default),"../../assets/art/living/pack~flower-lamp.webp":()=>p(()=>import("./pack~flower-lamp-CJJ-dlUk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~glass-cabinet.webp":()=>p(()=>import("./pack~glass-cabinet-SVsj9HQm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~globe.webp":()=>p(()=>import("./pack~globe-Dzwb85OX.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-lantern.webp":()=>p(()=>import("./pack~hanging-lantern-ja5xkGId.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-planter.webp":()=>p(()=>import("./pack~hanging-planter-1gi5Hm9x.js"),[]).then(e=>e.default),"../../assets/art/living/pack~heart-light.webp":()=>p(()=>import("./pack~heart-light-DC4iBLQP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~knit-cushion.webp":()=>p(()=>import("./pack~knit-cushion-Cc4lRuF-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ladder-shelf.webp":()=>p(()=>import("./pack~ladder-shelf-CaRkqiRJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~landscape-art.webp":()=>p(()=>import("./pack~landscape-art-BKlaJPEw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~lattice-bench.webp":()=>p(()=>import("./pack~lattice-bench-B9WpfEX6.js"),[]).then(e=>e.default),"../../assets/art/living/pack~leaf-wreath.webp":()=>p(()=>import("./pack~leaf-wreath-uVfnSIfS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~monstera-plant.webp":()=>p(()=>import("./pack~monstera-plant-B_coetMK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~moving-box.webp":()=>p(()=>import("./pack~moving-box-DHeeeIdL.js"),[]).then(e=>e.default),"../../assets/art/living/pack~piano.webp":()=>p(()=>import("./pack~piano-Yyj5R1RA.js"),[]).then(e=>e.default),"../../assets/art/living/pack~popcorn.webp":()=>p(()=>import("./pack~popcorn-BuLbtFAV.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pothos-plant.webp":()=>p(()=>import("./pack~pothos-plant-DzlDgqg0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pouf.webp":()=>p(()=>import("./pack~pouf-BTaH4suE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~puffy-stool.webp":()=>p(()=>import("./pack~puffy-stool-B-6LB9NQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-rug.webp":()=>p(()=>import("./pack~rainbow-rug-EDbn-dZ1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-wall-art.webp":()=>p(()=>import("./pack~rainbow-wall-art-BK2LQVaU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~retro-radio.webp":()=>p(()=>import("./pack~retro-radio-WYNMXhqc.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ring-light.webp":()=>p(()=>import("./pack~ring-light-B6vjhEQO.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-chair.webp":()=>p(()=>import("./pack~rocking-chair-CQ0WHDK5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-horse.webp":()=>p(()=>import("./pack~rocking-horse-C6dNjXKJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~round-rug.webp":()=>p(()=>import("./pack~round-rug-BZ0FhUPv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~side-table-round.webp":()=>p(()=>import("./pack~side-table-round-DoF65A6c.js"),[]).then(e=>e.default),"../../assets/art/living/pack~snake-plant.webp":()=>p(()=>import("./pack~snake-plant-BmYEkWGH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sprout-pot.webp":()=>p(()=>import("./pack~sprout-pot-DiXUsL4M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~star-lamp.webp":()=>p(()=>import("./pack~star-lamp-6-4l-lps.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sticker-board.webp":()=>p(()=>import("./pack~sticker-board-Crwbck5M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~string-lights.webp":()=>p(()=>import("./pack~string-lights-Cas7h1DK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~stripe-runner.webp":()=>p(()=>import("./pack~stripe-runner-CuXUhFNW.js"),[]).then(e=>e.default),"../../assets/art/living/pack~succulent-trio.webp":()=>p(()=>import("./pack~succulent-trio-Do8O7eY8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sunny-art.webp":()=>p(()=>import("./pack~sunny-art-h82-3Sd5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-bean-bag.webp":()=>p(()=>Promise.resolve().then(()=>zE),void 0).then(e=>e.default),"../../assets/art/living/pack~sv-cloud-rug.webp":()=>p(()=>import("./pack~sv-cloud-rug-DmAgh1BY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-wall-shelf.webp":()=>p(()=>import("./pack~sv-wall-shelf-CcIezwct.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tassel-rug.webp":()=>p(()=>import("./pack~tassel-rug-DZANcJOt.js"),[]).then(e=>e.default),"../../assets/art/living/pack~throw-pillow.webp":()=>p(()=>import("./pack~throw-pillow-CO9pMMz-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~toy-car.webp":()=>p(()=>import("./pack~toy-car-VuveyeLU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~trailing-plant.webp":()=>p(()=>import("./pack~trailing-plant-ejZgP7bb.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tulip-vase.webp":()=>p(()=>import("./pack~tulip-vase-CcpvFlG9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~turtle.webp":()=>p(()=>import("./pack~turtle-Bn1sANuv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tv-stand.webp":()=>p(()=>import("./pack~tv-stand-CnWFCgTD.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-clock.webp":()=>p(()=>import("./pack~wall-clock-BhhKLuq0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-shelf.webp":()=>p(()=>import("./pack~wall-shelf-1JASyKwJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wavy-floor-lamp.webp":()=>p(()=>import("./pack~wavy-floor-lamp-B53r_e3m.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-arc-floor-lamp.webp":()=>p(()=>import("./pack~wh-arc-floor-lamp-BXaC16sM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-book-stack.webp":()=>p(()=>import("./pack~wh-book-stack-t51h0scM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-fiddle-leaf-fig.webp":()=>p(()=>import("./pack~wh-fiddle-leaf-fig-BIG8VejE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-pendant-lamp.webp":()=>p(()=>import("./pack~wh-pendant-lamp-E0Vxk-T2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-snake-plant.webp":()=>p(()=>import("./pack~wh-snake-plant-BhAMe7Q2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-string-lights.webp":()=>p(()=>import("./pack~wh-string-lights-DQyga6dY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-armchair.webp":()=>p(()=>import("./pack~wood-armchair-FBkbAvXv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-bookshelf.webp":()=>p(()=>import("./pack~wood-bookshelf-DPZ9BD1s.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-coffee-table.webp":()=>p(()=>import("./pack~wood-coffee-table-wKKy_41i.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-stool.webp":()=>p(()=>import("./pack~wood-stool-Bp9UA7Rn.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-bouquet.webp":()=>p(()=>import("./ranch-bouquet-Ds6Pxbb7.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-carrot.webp":()=>p(()=>import("./ranch-carrot-DEktCamx.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-egg.webp":()=>p(()=>import("./ranch-egg-DANU-mnz.js"),[]).then(e=>e.default),"../../assets/art/living/tree.webp":()=>p(()=>import("./tree-BEoke6pN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-bottle.webp":()=>p(()=>import("./baby-bottle-eH02ZpRF.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-shelf.webp":()=>p(()=>import("./baby-shelf-BnBA4LnN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby.webp":()=>p(()=>import("./baby-G3Mhmbzp.js"),[]).then(e=>e.default),"../../assets/art/nursery/bassinet.webp":()=>p(()=>import("./bassinet-Dcb727Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/blocks.webp":()=>p(()=>import("./blocks-C_dNzrHE.js"),[]).then(e=>e.default),"../../assets/art/nursery/bunny-plush.webp":()=>p(()=>import("./bunny-plush-CReNy0hM.js"),[]).then(e=>e.default),"../../assets/art/nursery/changing-table.webp":()=>p(()=>import("./changing-table-8B47rw6t.js"),[]).then(e=>e.default),"../../assets/art/nursery/cloud-rug.webp":()=>p(()=>import("./cloud-rug-CnOFLK5B.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib-mobile.webp":()=>p(()=>import("./crib-mobile-C5s-3ue5.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib.webp":()=>p(()=>import("./crib-CGm5_7n1.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-cocoa.webp":()=>p(()=>import("./doll-cocoa-BpjP2qgw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-honey.webp":()=>p(()=>import("./doll-honey-DFaB2lOw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-rose.webp":()=>p(()=>import("./doll-rose-BRjLLFSK.js"),[]).then(e=>e.default),"../../assets/art/nursery/moon-art.webp":()=>p(()=>import("./moon-art-D58c34zl.js"),[]).then(e=>e.default),"../../assets/art/nursery/music-box.webp":()=>p(()=>import("./music-box-BFejHRIi.js"),[]).then(e=>e.default),"../../assets/art/nursery/night-light.webp":()=>p(()=>import("./night-light-CE5H5B5n.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-curtains.webp":()=>p(()=>import("./nursery-curtains-B23Kt1ZB.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-dresser.webp":()=>p(()=>import("./nursery-dresser-C2NMk5Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-lamp.webp":()=>p(()=>import("./nursery-lamp-kB1hvqKc.js"),[]).then(e=>e.default),"../../assets/art/nursery/play-mat.webp":()=>p(()=>import("./play-mat-BiJMY-uv.js"),[]).then(e=>e.default),"../../assets/art/nursery/rattle.webp":()=>p(()=>import("./rattle-D2HX4sEW.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocker.webp":()=>p(()=>import("./rocker-BI-azLzU.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocking-horse.webp":()=>p(()=>import("./rocking-horse-DqsQLxfe.js"),[]).then(e=>e.default),"../../assets/art/nursery/stacking-rings.webp":()=>p(()=>import("./stacking-rings-CDdBQ47A.js"),[]).then(e=>e.default),"../../assets/art/nursery/toy-bin.webp":()=>p(()=>import("./toy-bin-alXY-1yk.js"),[]).then(e=>e.default),"../../assets/art/pets/cat-calico-nap.webp":()=>p(()=>Promise.resolve().then(()=>R5),void 0).then(e=>e.default),"../../assets/art/pets/cat-calico-sit.webp":()=>p(()=>Promise.resolve().then(()=>C5),void 0).then(e=>e.default),"../../assets/art/pets/cat-calico-stand.webp":()=>p(()=>Promise.resolve().then(()=>I5),void 0).then(e=>e.default),"../../assets/art/pets/cat-smokey-nap.webp":()=>p(()=>Promise.resolve().then(()=>O5),void 0).then(e=>e.default),"../../assets/art/pets/cat-smokey-sit.webp":()=>p(()=>Promise.resolve().then(()=>B5),void 0).then(e=>e.default),"../../assets/art/pets/cat-smokey-stand.webp":()=>p(()=>Promise.resolve().then(()=>z5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tabby-nap.webp":()=>p(()=>Promise.resolve().then(()=>D5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tabby-sit.webp":()=>p(()=>Promise.resolve().then(()=>H5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tabby-stand.webp":()=>p(()=>Promise.resolve().then(()=>W5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tuxedo-nap.webp":()=>p(()=>Promise.resolve().then(()=>V5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tuxedo-sit.webp":()=>p(()=>Promise.resolve().then(()=>U5),void 0).then(e=>e.default),"../../assets/art/pets/cat-tuxedo-stand.webp":()=>p(()=>Promise.resolve().then(()=>Q5),void 0).then(e=>e.default),"../../assets/art/pets/dog-dachshund-sit.webp":()=>p(()=>Promise.resolve().then(()=>N5),void 0).then(e=>e.default),"../../assets/art/pets/dog-dachshund-sleep.webp":()=>p(()=>Promise.resolve().then(()=>q5),void 0).then(e=>e.default),"../../assets/art/pets/dog-dachshund-stand.webp":()=>p(()=>Promise.resolve().then(()=>j5),void 0).then(e=>e.default),"../../assets/art/pets/dog-golden-sit.webp":()=>p(()=>Promise.resolve().then(()=>F5),void 0).then(e=>e.default),"../../assets/art/pets/dog-golden-sleep.webp":()=>p(()=>Promise.resolve().then(()=>Z5),void 0).then(e=>e.default),"../../assets/art/pets/dog-golden-stand.webp":()=>p(()=>Promise.resolve().then(()=>G5),void 0).then(e=>e.default),"../../assets/art/pets/dog-poodle-sit.webp":()=>p(()=>Promise.resolve().then(()=>Y5),void 0).then(e=>e.default),"../../assets/art/pets/dog-poodle-sleep.webp":()=>p(()=>Promise.resolve().then(()=>K5),void 0).then(e=>e.default),"../../assets/art/pets/dog-poodle-stand.webp":()=>p(()=>Promise.resolve().then(()=>X5),void 0).then(e=>e.default),"../../assets/art/pets/dog-pup-sit.webp":()=>p(()=>Promise.resolve().then(()=>J5),void 0).then(e=>e.default),"../../assets/art/pets/dog-pup-sleep.webp":()=>p(()=>Promise.resolve().then(()=>eM),void 0).then(e=>e.default),"../../assets/art/pets/dog-pup-stand.webp":()=>p(()=>Promise.resolve().then(()=>tM),void 0).then(e=>e.default),"../../assets/art/pets/dog-spotty-sit.webp":()=>p(()=>Promise.resolve().then(()=>nM),void 0).then(e=>e.default),"../../assets/art/pets/dog-spotty-sleep.webp":()=>p(()=>Promise.resolve().then(()=>sM),void 0).then(e=>e.default),"../../assets/art/pets/dog-spotty-stand.webp":()=>p(()=>Promise.resolve().then(()=>oM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-bunny.webp":()=>p(()=>Promise.resolve().then(()=>iM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-cow.webp":()=>p(()=>Promise.resolve().then(()=>aM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-goat.webp":()=>p(()=>Promise.resolve().then(()=>rM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-piglet.webp":()=>p(()=>Promise.resolve().then(()=>lM),void 0).then(e=>e.default),"../../assets/art/ranch/animal-sheep.webp":()=>p(()=>Promise.resolve().then(()=>cM),void 0).then(e=>e.default),"../../assets/art/ranch/apple-tree.webp":()=>p(()=>Promise.resolve().then(()=>dM),void 0).then(e=>e.default),"../../assets/art/ranch/basket.webp":()=>p(()=>Promise.resolve().then(()=>fM),void 0).then(e=>e.default),"../../assets/art/ranch/hen-house.webp":()=>p(()=>Promise.resolve().then(()=>pM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-chestnut-bare.webp":()=>p(()=>Promise.resolve().then(()=>hM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-chestnut-saddle.webp":()=>p(()=>Promise.resolve().then(()=>uM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-midnight-bare.webp":()=>p(()=>Promise.resolve().then(()=>gM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-midnight-saddle.webp":()=>p(()=>Promise.resolve().then(()=>mM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-rainbow-bare.webp":()=>p(()=>Promise.resolve().then(()=>yM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-rainbow-saddle.webp":()=>p(()=>Promise.resolve().then(()=>wM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-snowy-bare.webp":()=>p(()=>Promise.resolve().then(()=>bM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-snowy-saddle.webp":()=>p(()=>Promise.resolve().then(()=>vM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-sunny-bare.webp":()=>p(()=>Promise.resolve().then(()=>kM),void 0).then(e=>e.default),"../../assets/art/ranch/horse-sunny-saddle.webp":()=>p(()=>Promise.resolve().then(()=>_M),void 0).then(e=>e.default),"../../assets/art/ranch/tractor.webp":()=>p(()=>Promise.resolve().then(()=>$M),void 0).then(e=>e.default),"../../assets/art/salon/hairdryer.webp":()=>p(()=>import("./hairdryer-T-lQmTcl.js"),[]).then(e=>e.default),"../../assets/art/salon/perfume.webp":()=>p(()=>import("./perfume-DfvRZm2S.js"),[]).then(e=>e.default),"../../assets/art/salon/polish.webp":()=>p(()=>import("./polish-CXaer2Bw.js"),[]).then(e=>e.default),"../../assets/art/salon/ribbon-tray.webp":()=>p(()=>import("./ribbon-tray-CTIaqA2-.js"),[]).then(e=>e.default),"../../assets/art/salon/stool.webp":()=>p(()=>import("./stool-CUwUwak6.js"),[]).then(e=>e.default),"../../assets/art/salon/vanity.webp":()=>p(()=>import("./vanity-BVbX2a77.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~arched-mirror.webp":()=>p(()=>import("./pack~arched-mirror-sCVjVNZ2.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~boba-cup.webp":()=>p(()=>import("./pack~boba-cup-BpOopnbk.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~mini-fridge.webp":()=>p(()=>import("./pack~mini-fridge-Bz5tI6Y7.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~apple-tree.webp":()=>p(()=>import("./pack~apple-tree-C3QlGloI.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~cozy-mug.webp":()=>p(()=>import("./pack~cozy-mug-BnfHOl91.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~fire-pit.webp":()=>p(()=>import("./pack~fire-pit-CRZJkqqE.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~mini-greenhouse.webp":()=>p(()=>import("./pack~mini-greenhouse-Br8akUdc.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~picnic-basket.webp":()=>p(()=>import("./pack~picnic-basket-COs0Y3zn.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~sale-sign.webp":()=>p(()=>import("./pack~sale-sign-BseEiyKa.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-kitchen-counter.webp":()=>p(()=>import("./pack~wh-kitchen-counter-CxgMV92B.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-teapot.webp":()=>p(()=>import("./pack~wh-teapot-ApJalB1d.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-bauble-garland.webp":()=>p(()=>import("./pack~wc-bauble-garland-BS872JcY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-berry-wreath.webp":()=>p(()=>import("./pack~wc-berry-wreath-DVV9MTc6.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-birch-basket.webp":()=>p(()=>import("./pack~wc-birch-basket-BG8oUtxN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cabin-picture.webp":()=>p(()=>import("./pack~wc-cabin-picture-D8rQKKtK.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-candle-trio.webp":()=>p(()=>import("./pack~wc-candle-trio-B31yzqPC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cane-lamp.webp":()=>p(()=>import("./pack~wc-cane-lamp-UTO0nZql.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cinnamon-tray.webp":()=>p(()=>import("./pack~wc-cinnamon-tray-Cf5bYwPY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-cart.webp":()=>p(()=>import("./pack~wc-cocoa-cart-BrV30F2C.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-mug.webp":()=>p(()=>import("./pack~wc-cocoa-mug-CuYF_PaO.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-pot.webp":()=>p(()=>import("./pack~wc-cocoa-pot-DQ72uD3S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-oven.webp":()=>p(()=>import("./pack~wc-cookie-oven-BjGR4uSY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-plate.webp":()=>p(()=>import("./pack~wc-cookie-plate-BL4xbKJ8.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frost-bookcase.webp":()=>p(()=>import("./pack~wc-frost-bookcase-ZuAQpRxg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frosted-pine.webp":()=>p(()=>import("./pack~wc-frosted-pine-BXtEGG7O.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-fur-bench.webp":()=>p(()=>import("./pack~wc-fur-bench-DxlUyCxG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread-village.webp":()=>p(()=>import("./pack~wc-gingerbread-village-BSiu2hp-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread.webp":()=>p(()=>import("./pack~wc-gingerbread-BRxJDmPf.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-globe-lamp.webp":()=>p(()=>import("./pack~wc-globe-lamp-D7wlZ9-V.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holiday-tree.webp":()=>p(()=>import("./pack~wc-holiday-tree-DyKJPhVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holly.webp":()=>p(()=>import("./pack~wc-holly-EcLJkkKT.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-skates.webp":()=>p(()=>import("./pack~wc-ice-skates-DgS-2YH3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-wardrobe.webp":()=>p(()=>import("./pack~wc-ice-wardrobe-D3zrHXz4.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-knit-armchair.webp":()=>p(()=>import("./pack~wc-knit-armchair-BmhTXUUC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-lantern.webp":()=>p(()=>import("./pack~wc-lantern-ph0Ia33S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-log-bench.webp":()=>p(()=>import("./pack~wc-log-bench-D3yNeXrb.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-marshmallow-jar.webp":()=>p(()=>import("./pack~wc-marshmallow-jar-D5Ztz0iN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-line.webp":()=>p(()=>import("./pack~wc-mitten-line-Ci3Kmp5r.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-ottoman.webp":()=>p(()=>import("./pack~wc-mitten-ottoman-DB5mhikk.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mug-shelf.webp":()=>p(()=>import("./pack~wc-mug-shelf-CCpd1wVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-nutcracker.webp":()=>p(()=>import("./pack~wc-nutcracker-CgbCT2qv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-chair.webp":()=>p(()=>import("./pack~wc-penguin-chair-vB1NvNe-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-plush.webp":()=>p(()=>import("./pack~wc-penguin-plush-C-Ne4Dxi.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-counter.webp":()=>p(()=>import("./pack~wc-peppermint-counter-BTPfnOd_.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-rug.webp":()=>p(()=>import("./pack~wc-peppermint-rug-CGd8vlnV.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-garland.webp":()=>p(()=>import("./pack~wc-pinecone-garland-DMA6H6aW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-table.webp":()=>p(()=>import("./pack~wc-pinecone-table-CcVoxsAa.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-bed.webp":()=>p(()=>import("./pack~wc-plaid-bed-D_HMoB7K.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-sofa.webp":()=>p(()=>import("./pack~wc-plaid-sofa-DOYDgV7y.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-poinsettia.webp":()=>p(()=>import("./pack~wc-poinsettia-Duqpulvr.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-polar-plush.webp":()=>p(()=>import("./pack~wc-polar-plush-Bzs7ScmG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pom-rug.webp":()=>p(()=>import("./pack~wc-pom-rug-Bs5AyRsW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-present-stack.webp":()=>p(()=>import("./pack~wc-present-stack-CNmQKSu2.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-reindeer.webp":()=>p(()=>import("./pack~wc-reindeer-DwfFEqVn.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sled-table.webp":()=>p(()=>import("./pack~wc-sled-table-De30wycC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sleigh-planter.webp":()=>p(()=>import("./pack~wc-sleigh-planter-CRfX9J_0.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-globe.webp":()=>p(()=>import("./pack~wc-snow-globe-BQQApiF3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-mobile.webp":()=>p(()=>import("./pack~wc-snow-mobile-wJ-9gloW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-nightstand.webp":()=>p(()=>import("./pack~wc-snow-nightstand-CBsj30cl.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-window.webp":()=>p(()=>import("./pack~wc-snow-window-D3bSRYDd.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowman.webp":()=>p(()=>import("./pack~wc-snowman-BekK-aTM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowshoes.webp":()=>p(()=>import("./pack~wc-snowshoes-CrVHwfcR.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sock-hamper.webp":()=>p(()=>import("./pack~wc-sock-hamper-DkaXaCbw.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-star-topper.webp":()=>p(()=>import("./pack~wc-star-topper-B-l5aKYW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stocking-row.webp":()=>p(()=>import("./pack~wc-stocking-row-C4vslf6n.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stone-hearth.webp":()=>p(()=>import("./pack~wc-stone-hearth-4EAifiID.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-lamp.webp":()=>p(()=>import("./pack~wc-twinkle-lamp--9BNC_tg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-string.webp":()=>p(()=>import("./pack~wc-twinkle-string-jHZReebI.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-window-seat.webp":()=>p(()=>import("./pack~wc-window-seat-CuMHYvCM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-woodstove.webp":()=>p(()=>import("./pack~wc-woodstove-BH7aoOI1.js"),[]).then(e=>e.default)});function Ef(e){const t=e.split("/").pop()||"";if(t.length<6||t.slice(-5).toLowerCase()!==".webp")return null;const n=decodeURIComponent(t.slice(0,-5)).replace(/~/g,":");return!n||n.startsWith("_")?null:n}const j0=new Set;for(const e in Hr){const t=Ef(e);t&&j0.add(t)}function s4(e){return j0.has(e)}const mc=new Map;function o4(e){for(const t in Hr)if(Ef(t)===e)return Hr[t]}const i4=6e4,yc=new Map;function a4(e){const t=mc.get(e);if(t)return t;const n=yc.get(e);if(n!==void 0&&Date.now()-n<i4)return Promise.resolve(null);const s=o4(e);if(!s)return Promise.resolve(null);const o=Cs(s).then(i=>(yc.delete(e),Kv(e,i),e)).catch(()=>(mc.delete(e),yc.set(e,Date.now()),null));return mc.set(e,o),o}function Al(e){const t=[...new Set(e)];return Promise.all(t.map(a4)).then(n=>n.filter(s=>s!==null))}function r4(){const e=[];for(const t in Hr){const n=Ef(t);n&&e.push(n)}return Al(e)}function l4(e,t=[]){return Xv(e)?Al(t):Promise.resolve([])}const Rl=Object.freeze(Object.defineProperty({__proto__:null,boot:l4,hasArt:s4,loadAllArt:r4,loadArtKinds:Al},Symbol.toStringTag,{value:"Module"})),Le="#5a3d5c",Ye=`stroke="${Le}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,Fa=[{body:"#ffd6e0",roof:"#ff7aa8",door:"#8fd3ff",trim:"#fff6e6"},{body:"#d9f2ff",roof:"#5aa9e6",door:"#ffd166",trim:"#ffffff"},{body:"#e3f9d9",roof:"#5cc985",door:"#ff9f68",trim:"#fffbe6"},{body:"#fff1b8",roof:"#ff9f43",door:"#c9a0dc",trim:"#ffffff"},{body:"#eadcff",roof:"#9b7bd8",door:"#80ed99",trim:"#fff6fb"},{body:"#ffe0c7",roof:"#e07a5f",door:"#5fb0d8",trim:"#fffaf0"},{body:"#d8f5ef",roof:"#2fb3a3",door:"#ff8fab",trim:"#ffffff"},{body:"#fde2f3",roof:"#e879c6",door:"#ffd166",trim:"#fff"}];function Wr(e,t={}){const n=Fa[(e%Fa.length+Fa.length)%Fa.length],s=e%2===1,o=t.lit?"#fff3b0":"#cfe8ff",i=s?`<path d="M22 138 Q22 36 160 30 Q298 36 298 138 Z" fill="${n.roof}" ${Ye}/><path d="M60 110 Q70 60 120 50" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`:`<path d="M14 140 L160 26 L306 140 Z" fill="${n.roof}" ${Ye}/><path d="M70 110 L140 56" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`;return`<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg">
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
</svg>`}const zt={street:`<svg viewBox="0 0 48 48"><circle cx="16" cy="15" r="7" fill="#ffd166" stroke="${Le}" stroke-width="3"/><circle cx="32" cy="15" r="7" fill="#ff8fab" stroke="${Le}" stroke-width="3"/><circle cx="13.5" cy="14.5" r="1.2" fill="${Le}"/><circle cx="18.5" cy="14.5" r="1.2" fill="${Le}"/><circle cx="29.5" cy="14.5" r="1.2" fill="${Le}"/><circle cx="34.5" cy="14.5" r="1.2" fill="${Le}"/><path d="M13 18 q3 2.2 6 0 M29 18 q3 2.2 6 0" fill="none" stroke="${Le}" stroke-width="1.6" stroke-linecap="round"/><path d="M8 40 Q16 28 24 33 Q32 38 40 28" fill="none" stroke="#5cc985" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="36" r="2.2" fill="#fff" stroke="${Le}" stroke-width="1.5"/><circle cx="32" cy="32" r="2.2" fill="#fff" stroke="${Le}" stroke-width="1.5"/></svg>`,home:`<svg viewBox="0 0 48 48"><path d="M8 22 L24 8 L40 22 V40 H8 Z" fill="#ffd166" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><path d="M20 40 V28 H28 V40" fill="#fff" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="20" r="2.4" fill="${Le}"/></svg>`,lockOn:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q33 7 33 16 V22" fill="none" stroke="${Le}" stroke-width="4"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#ffd166" stroke="${Le}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${Le}"/></svg>`,lockOff:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q31 7 32.5 13" fill="none" stroke="${Le}" stroke-width="4" stroke-linecap="round"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#b6f0a8" stroke="${Le}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${Le}"/></svg>`,chat:`<svg viewBox="0 0 48 48"><path d="M8 12 Q8 6 14 6 H34 Q40 6 40 12 V26 Q40 32 34 32 H22 L13 40 V32 Q8 32 8 26 Z" fill="#fff3b0" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><circle cx="17" cy="19" r="2.5" fill="${Le}"/><circle cx="24" cy="19" r="2.5" fill="${Le}"/><circle cx="31" cy="19" r="2.5" fill="${Le}"/></svg>`,shield:`<svg viewBox="0 0 48 48"><path d="M24 5 L39 11 V23 Q39 36 24 43 Q9 36 9 23 V11 Z" fill="#c9a0dc" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><path d="M17 24 L22 29 L31 19" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,solo:`<svg viewBox="0 0 48 48"><path d="M8 24 L24 9 L40 24 V41 H8 Z" fill="#ffd166" stroke="${Le}" stroke-width="3" stroke-linejoin="round"/><rect x="19" y="28" width="10" height="13" rx="4" fill="#fff" stroke="${Le}" stroke-width="2.5"/><path d="M33 7 l2 4 4 .5 -3 3 .7 4 -3.7-2 -3.7 2 .7-4 -3-3 4-.5z" fill="#ff8fab" stroke="${Le}" stroke-width="1.5"/></svg>`};function F(e,t=2600){const n=document.createElement("div");n.className="toast",n.textContent=e,(document.getElementById("toastLane")??document.body).appendChild(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+400)}function F0(e){document.querySelector(".grownNotice")?.remove();const t=document.createElement("div");t.className="toast grownNotice",t.setAttribute("role","status"),t.innerHTML='<b>For grown-ups</b><span></span><button type="button">OK</button>',t.querySelector("span").textContent=e,t.querySelector("button").addEventListener("click",()=>{t.classList.add("out"),setTimeout(()=>t.remove(),400)}),(document.getElementById("toastLane")??document.body).appendChild(t)}function Z0(){return new Promise(e=>{let t=0,n=0,s="",o=0;const i=document.createElement("div");i.className="sheet adult",i.innerHTML='<div class="card adultCard"></div>',document.body.appendChild(i);const a=i.firstElementChild,r=()=>{t=6+Math.floor(Math.random()*4),n=3+Math.floor(Math.random()*7),s="",l()},l=()=>{a.innerHTML=`<button class="close" data-k="x">✕</button><h2>Grown-ups only</h2><p class="q" data-q="${t*n}">What is ${t} × ${n}?</p>
        <div class="ans">${s||"&nbsp;"}</div>
        <div class="pad">${[1,2,3,4,5,6,7,8,9,"⌫",0,"OK"].map(d=>`<button data-k="${d}">${d}</button>`).join("")}</div>`},c=d=>{i.remove(),e(d)};a.addEventListener("click",d=>{const f=d.target.closest("[data-k]")?.dataset.k;if(f){if(f==="x")return c(!1);if(f==="⌫")s=s.slice(0,-1);else if(f==="OK"){if(+s===t*n)return c(!0);if(++o>=3)return c(!1);a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),400),r();return}else s.length<3&&(s+=f);l()}}),i.addEventListener("click",d=>{d.target===i&&c(!1)}),r()})}const G0=new Set,wc=new Set,Y0=[];let uh=!1;function K0(){uh||typeof document>"u"||(uh=!0,document.addEventListener("visibilitychange",()=>{if(document.hidden)for(const e of G0)e.state==="running"&&(wc.add(e),e.suspend().catch(()=>{}));else{for(const e of wc)e.resume().catch(()=>{});wc.clear();for(const e of Y0)try{e()}catch{}}}))}function Sf(e){return K0(),G0.add(e),e}function X0(e){K0(),Y0.push(e)}let Ln=null,Tf=!0;const c4=e=>{Tf=e};function we(e,t,n="sine",s=0,o=.15){if(Tf)try{Ln??=Sf(new(window.AudioContext||window.webkitAudioContext)),Ln.state==="suspended"&&Ln.resume().catch(()=>{});const i=Ln.createOscillator(),a=Ln.createGain(),r=Ln.currentTime,l=Math.max(40,e*(.94+Math.random()*.12));i.type=n,i.frequency.setValueAtTime(l,r),s&&i.frequency.exponentialRampToValueAtTime(Math.max(40,l*s),r+t);const c=Math.min(.02,Math.max(.008,t*.22));if(a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,o),r+c),a.gain.exponentialRampToValueAtTime(.001,r+Math.max(t,c+.02)),n==="square"||n==="sawtooth"){const d=Ln.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(1400,r),d.Q.setValueAtTime(.7,r),i.connect(d).connect(a).connect(Ln.destination)}else i.connect(a).connect(Ln.destination);i.start(r),i.stop(r+t+.02)}catch{}}const C={pick:()=>we(520,.12,"sine",1.6),drop:()=>{we(380,.1,"triangle",.7),setTimeout(()=>we(620,.08,"sine"),60)},pop:()=>we(800,.15,"square",.3,.08),click:()=>we(660,.07,"triangle"),swish:()=>we(300,.25,"sine",2.5,.1),meow:()=>{we(700,.12,"triangle",1.3,.1),setTimeout(()=>we(900,.22,"triangle",.6,.1),110)},purr:()=>[0,90,180,270,360].forEach(e=>setTimeout(()=>we(70,.09,"sawtooth",1,.05),e)),woof:()=>{we(260,.09,"square",.6,.09),setTimeout(()=>we(220,.12,"square",.5,.09),130)},spin:()=>we(400,.35,"sine",2.2,.08),boing:()=>we(200,.3,"sine",3,.1),splash:()=>[0,50,110].forEach((e,t)=>setTimeout(()=>we(900-t*200,.12,"triangle",.4,.06),e)),moo:()=>{we(160,.5,"sawtooth",.8,.07),setTimeout(()=>we(140,.45,"sawtooth",.85,.06),380)},baa:()=>[0,90,180].forEach(e=>setTimeout(()=>we(420,.1,"sawtooth",.95,.05),e)),bleat:()=>[0,70,140,210].forEach(e=>setTimeout(()=>we(520,.07,"square",1.05,.04),e)),oink:()=>{we(300,.12,"square",.6,.07),setTimeout(()=>we(330,.12,"square",.55,.07),160)},peep:()=>[0,120,240].forEach((e,t)=>setTimeout(()=>we(1800+t*150,.07,"sine",1.2,.08),e)),squeak:()=>we(1400,.1,"sine",1.5,.08),neigh:()=>{we(700,.5,"sawtooth",.6,.05),[0,60,120,180,240].forEach(e=>setTimeout(()=>we(620-e,.06,"triangle",1,.04),300+e))},honk:()=>{we(330,.18,"square",1,.07),setTimeout(()=>we(330,.25,"square",1,.07),230)},munch:()=>[0,110,220,330].forEach(e=>setTimeout(()=>we(180+Math.random()*60,.05,"square",.6,.05),e)),cluck:()=>[0,100,180].forEach((e,t)=>setTimeout(()=>we(600+t*80,.06,"square",.8,.05),e)),plant:()=>{we(260,.1,"triangle",.6),setTimeout(()=>we(520,.1,"sine"),90)},water:()=>[0,60,120,180,240].forEach((e,t)=>setTimeout(()=>we(1200-t*120,.08,"sine",.7,.05),e)),pickup:()=>[660,880,990].forEach((e,t)=>setTimeout(()=>we(e,.1,"triangle"),t*60)),sparkle:()=>[880,1100,1320].forEach((e,t)=>setTimeout(()=>we(e,.12),t*70))},gh=new Map;function d4(e,t){const n=(e?"s":"o")+(t?"f":"n"),s=gh.get(n);if(s)return s;const a=`<svg viewBox="0 0 200 260" aria-hidden="true">
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
  </svg>`;return gh.set(n,a),a}const Qi="#5a3d5c";function Cl(e){return e&&/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():"#f1c27d"}const Za={x:60,y:118,w:56,h:40};function f4(e,t,n){return n==="lie"&&e==="over"?null:t&&n==="lie"?{d:"M72 172 C36 200 40 228 88 220",sleeve:"M72 172 C52 186 44 196 42 204",hx:88,hy:220}:t&&n==="sit"?e==="under"?{d:"M72 172 C40 190 46 220 108 228",sleeve:"M72 172 C56 178 46 184 42 188",hx:108,hy:228}:{d:"M128 172 C154 192 150 214 118 208",sleeve:"M128 172 C142 180 148 186 150 190",hx:118,hy:208}:t?e==="under"?{d:"M72 172 C40 196 48 222 112 214",sleeve:"M72 172 C56 178 46 184 42 188",hx:112,hy:214}:{d:"M128 172 C158 180 154 200 124 196",sleeve:"M128 172 C144 178 150 184 154 188",hx:124,hy:196}:n==="lie"?{d:"M22 84 C10 112 14 136 46 130",sleeve:"",hx:46,hy:130}:e==="under"?{d:"M22 84 C14 104 12 128 44 130",sleeve:"",hx:44,hy:130}:{d:"M78 84 C90 98 86 118 64 114",sleeve:"",hx:64,hy:114}}function p4(e,t,n){const s=`M${e-8} ${t-1} Q${e-9} ${t-11} ${e} ${t-11} Q${e+9} ${t-11} ${e+9} ${t} Q${e+9} ${t+9} ${e} ${t+10} Q${e-9} ${t+9} ${e-8} ${t-1} Z`,o=`<ellipse cx="${e+8}" cy="${t-2}" rx="3.2" ry="5" fill="${n}" stroke="${Qi}" stroke-width="3.4" transform="rotate(-24 ${e+8} ${t-2})"/>`;return`<path class="cradle-hand" data-cx="${e}" data-cy="${t}" d="${s}" fill="${n}" stroke="${Qi}" stroke-width="3.9"/>${o}`}function La(e,t,n,s,o){const i=f4(e,t,s);if(!i)return"";const a=Cl(n),r=o&&/^#[0-9a-fA-F]{6}$/.test(o)?o.toLowerCase():"",l='fill="none" stroke-linecap="round" stroke-linejoin="round"',c=t?16:12,d=t?20.2:15.5;let f=`<path d="${i.d}" ${l} stroke="${Qi}" stroke-width="${d}"/><path d="${i.d}" ${l} stroke="${a}" stroke-width="${c}"/>`;t&&i.sleeve&&r&&(f+=`<path d="${i.sleeve}" ${l} stroke="${Qi}" stroke-width="29"/><path d="${i.sleeve}" ${l} stroke="${r}" stroke-width="22"/>`);const h=t?p4(i.hx,i.hy,a):`<circle class="cradle-hand" data-cx="${i.hx}" data-cy="${i.hy}" cx="${i.hx}" cy="${i.hy}" r="7" fill="${a}" stroke="${Qi}" stroke-width="3.5"/>`;return`<g class="arm cradle">${f}${h}</g>`}const Ga=110,wi=148,mh=80,yh=57,h4=60,u4=133,g4=42,m4=30,y4=60,w4=129,Ya=["feed","burp","change","rock"],bc=["Bean","Pip","Mochi","Bunny","Dot","Sunny"];function b4(e){let t=null,n=null,s=null,o=!1,i=Number.NaN,a=0,r=0,l=!1,c=!1;const d=typeof navigator<"u"&&!!navigator.webdriver;function f(I,B,te,V,N){I.style.left=(B-V/2)/St*100+"%",I.style.top=(te-N)/Dn*100+"%",I.style.width=V/St*100+"%",I.style.height=N/Dn*100+"%"}function h(I){const B=I.scale&&I.scale>0?I.scale:1,te=I.pose==="sit"||I.pose==="lie"?I.pose:null,V=I.chibi&&I.pose!=="sit"&&I.pose!=="lie",N=V?Za.x:I.chibi?y4:h4,Z=V?Za.y:I.chibi?w4:u4,ue=V?Za.w:I.chibi?g4:mh,Te=V?Za.h:I.chibi?m4:yh,ke=dw(N,Z,te,!!I.lieFlip,B),je=te==="lie"?ke.x:I.flip?-ke.x:ke.x,H=ue*B,U=Te*B;return{x:I.x+je,y:I.y+ke.y+U/2,w:H,h:U}}function u(I,B){let te=null,V=0;for(let N=0;N<Ya.length;N++){const Z=Ya[N],ue=I.at?.[Z]??0;ue>0&&B-ue>=0&&B-ue<1100&&ue>=V&&(te=Z,V=ue)}return te}function y(I){if(I.mood<=2||!e.canSend()){window.clearTimeout(a),i=Number.NaN;return}if(i===I.since)return;window.clearTimeout(a),i=I.since;const B=Math.max(0,I.since+sd-e.clock());a=window.setTimeout(()=>{i=Number.NaN;const te=e.get().baby;!te||te.mood<=2||!e.canSend()||e.dispatch({type:"baby/ease",now:e.clock()})},B)}function m(I,B){window.clearTimeout(r);let te=0;for(let V=0;V<Ya.length;V++){const N=I.at?.[Ya[V]]??0;B-N>=0&&B-N<1100&&N>te&&(te=N)}te&&(r=window.setTimeout(()=>Ie(),Math.max(0,1100-(B-te))))}function v(I,B){if(typeof document.elementsFromPoint!="function")return null;const te=document.elementsFromPoint(I,B),V=e.get(),N=V.rooms[V.currentRoom]?.items??[];for(let Z=0;Z<te.length;Z++){const ue=te[Z];if(!ue||typeof ue.closest!="function"||ue.closest(".baby, .babyCare, .babyMeet"))continue;const Te=ue.closest(".item");if(!Te)continue;const ke=Te.dataset.id||"";for(let je=0;je<N.length;je++){const H=N[je];if(H.id===ke&&(fo(H.kind)||e.box(H)))return H}}return null}function w(I){I.addEventListener("pointerdown",B=>{if(B.button!==0)return;const te=e.get().baby;if(!te)return;if(B.preventDefault(),B.stopPropagation(),te.spot==="arms"&&te.holder&&te.holder!==e.holderId()&&e.holderHere(te.holder)){F("Someone is cuddling!");return}if(!e.editable()){e.locked();return}if(!e.canSend())return;const V=e.owner(),N=V,Z=B.clientX,ue=B.clientY,Te=B.pointerId;let ke=!1;const je=U=>{if(U.pointerId!==Te||(Math.hypot(U.clientX-Z,U.clientY-ue)>6&&(ke=!0),!N||!ke))return;o=!0;const st=e.toRoom(U.clientX,U.clientY);f(I,st.x,st.y,Ga,wi)},H=U=>{if(U.pointerId!==Te)return;window.removeEventListener("pointermove",je),window.removeEventListener("pointerup",H),window.removeEventListener("pointercancel",H);const st=o&&ke&&N;if(o=!1,U.type==="pointercancel"){Ie();return}if(st){const vt=document.elementFromPoint(U.clientX,U.clientY)?.closest(".tab[data-room]");if(vt&&vt.dataset.room){const hi=vt.dataset.room,N2=e.toRoom(U.clientX,U.clientY),Rp=zw(N2.x,St);hi!==e.get().currentRoom&&e.dispatch({type:"room/switch",room:hi}),e.dispatch({type:"baby/place",room:hi,x:Rp.x,y:Rp.y,spot:"mat",bed:null,seat:null,now:e.clock()}),C.drop();return}const Hs=e.toRoom(U.clientX,U.clientY),pn=v(U.clientX,U.clientY),ic=pn?e.box(pn):null,Ws=Bw({mode:e.play()?"play":"decorate",releaseX:Math.max(0,Math.min(St,Hs.x)),releaseY:Math.max(0,Math.min(Dn,Hs.y)),piece:ic,occupied:e.occupied()});e.dispatch({type:"baby/place",room:e.get().currentRoom,x:Ws.x,y:Ws.y,spot:Ws.spot,bed:Ws.bed,seat:Ws.seat,now:e.clock()}),C.drop();return}if(ke){Ie();return}const ht=e.get().baby;if(!ht)return;if(ht.spot==="arms"&&ht.holder===e.holderId()){const vt=e.toRoom(U.clientX,U.clientY);e.dispatch({type:"baby/hold",holder:null,room:e.get().currentRoom,x:Math.max(0,Math.min(St,vt.x)),y:Math.max(40,Math.min(Dn,vt.y)),now:e.clock()}),C.drop();return}const Fe=e.holderSpot(),De=Fe?h(Fe):null,Pe=De?De.x:ht.x,bt=De?Math.max(40,De.y):ht.y;e.dispatch({type:"baby/hold",holder:e.holderId(),room:e.get().currentRoom,x:Pe,y:bt,now:e.clock()}),C.pick()};window.addEventListener("pointermove",je),window.addEventListener("pointerup",H),window.addEventListener("pointercancel",H)})}function g(){return t&&t.isConnected||(t=document.createElement("div"),t.className="baby",t.dataset.baby="1",t.innerHTML='<div class="hit"></div><div class="babySpin"><div class="babyRock"><div class="babyInner"></div></div></div><div class="babyZzz" hidden>z z z</div><div class="babyBurp" hidden><i></i></div>',e.layer.appendChild(t),w(t)),t}function b(I,B){const te=I.querySelector(".babyWord");te&&(te.textContent=Lw(B));const V=I.querySelectorAll(".babyBlossom"),N=Ew(B);for(let ue=0;ue<V.length;ue++)V[ue].classList.toggle("on",ue<N);const Z=I.querySelector(".babyMeter");Z&&(Z.dataset.mood=String(B))}function _(I){const B=z0(I);if(!B){F("Try another name!");return}const te=e.get().baby;!te||te.name===B||(e.dispatch({type:"baby/name",name:B}),C.click())}function P(I){n=document.createElement("div"),n.className="babyCare",n.dataset.babyCare="1";const B=[];for(let N=0;N<5;N++)B.push('<i class="babyBlossom"></i>');const te=[];for(let N=0;N<bc.length;N++)te.push(`<button type="button" data-preset="${bc[N]}">${bc[N]}</button>`);n.innerHTML=`<p class="babyWord"></p><span class="babyMeter"><span class="babyBlossoms">${B.join("")}</span></span>
      <button type="button" data-care="feed">Bottle</button>
      <button type="button" data-care="burp">Burp</button>
      <button type="button" data-care="change">Diaper</button>
      <button type="button" data-care="rock">Rock</button>
      <button type="button" data-baby-name-open>Name</button>
      <div class="babyNames" hidden>
        <input type="text" maxlength="14" autocomplete="off" enterkeyhint="done" aria-label="Baby name" value="">
        ${te.join("")}
      </div>`,b(n,I.mood),n.addEventListener("pointerdown",N=>N.stopPropagation()),n.addEventListener("click",N=>{const Z=N.target,ue=Z.closest("[data-care]");if(ue&&ue.dataset.care){if(!e.editable()){e.locked();return}if(!e.canSend())return;const ke=ue.dataset.care;e.dispatch({type:"baby/care",care:ke,now:e.clock()}),ke==="rock"?C.purr():ke==="feed"?C.sparkle():C.click();return}if(Z.closest("[data-baby-name-open]")){if(!e.owner())return;c=!c;const ke=n?.querySelector(".babyNames");ke&&(ke.hidden=!c);const je=n?.querySelector("input");c&&je&&(je.value=e.get().baby?.name??"",je.focus());return}const Te=Z.closest("[data-preset]");if(Te&&e.owner()){_(Te.dataset.preset||"");return}}),n.querySelector("input")?.addEventListener("keydown",N=>{N.key==="Enter"&&(N.preventDefault(),_(N.target.value))}),e.stageWrap.appendChild(n)}function $(I,B){if(!e.play()){x();return}const te=n&&document.activeElement&&n.contains(document.activeElement);if((!n||!n.isConnected)&&P(I),!n)return;n.hidden=!1,b(n,I.mood);const V=n.querySelector("[data-baby-name-open]");V&&(V.hidden=!B);const N=n.querySelector(".babyNames");N&&(N.hidden=!B||!c);const Z=n.querySelector("input");Z&&!te&&(Z.value=I.name),D()}function x(){c=!1,n&&(n.remove(),n=null),D()}function D(){const I=!!(n&&n.isConnected&&!n.hidden),B=document.body.classList.contains("baby-card");document.body.classList.toggle("baby-card",I),B!==I&&window.dispatchEvent(new Event("resize"))}function W(I){if(!I||d){s&&(s.remove(),s=null);return}if(s&&s.isConnected){s.hidden=!1;return}s=document.createElement("button"),s.type="button",s.className="babyMeet",s.textContent="Meet the baby",s.addEventListener("pointerdown",B=>B.stopPropagation()),s.addEventListener("click",()=>{if(!e.editable()){e.locked();return}!e.canSend()||e.get().baby||(e.dispatch({type:"baby/meet",now:e.clock()}),C.sparkle())}),e.stageWrap.appendChild(s)}function Q(){const I=e.get().rooms.nursery?.items??[];for(let B=0;B<I.length;B++)if(fo(I[B].kind)==="crib")return!0;return!1}function q(I,B){I.classList.remove("baby-lie","baby-lie-r","baby-cradle","cradle-lie","flipped");const te=e.get().currentRoom;if((B.spot==="crib"||B.spot==="bassinet")&&B.bed){const V=e.get().rooms[B.room]?.items.find(Z=>Z.id===B.bed)??null,N=V?e.box(V):null;if(V&&N){const Z=b0(V.kind,N);f(I,Z.x,Z.y+wi/2,Ga,wi),I.style.zIndex=String(1e3+V.z+1),I.classList.add("baby-lie"),V.flip&&I.classList.add("baby-lie-r");return}}if(B.spot==="arms"){const V=B.holder?e.holderSpot(B.holder):null,N=V?h(V):null,Z=N?N.x:B.x,ue=N?N.y:B.y,Te=N?N.w:mh,ke=N?N.h:yh;f(I,Z,ue,Te,ke),I.style.zIndex=String(5e3+Math.round(V?V.y:B.y)+2),I.classList.add("baby-cradle"),I.style.setProperty("--spin-w",(ke/Te*100).toFixed(4)+"%"),I.style.setProperty("--spin-h",(Te/ke*100).toFixed(4)+"%"),V&&V.pose==="lie"&&I.classList.add("cradle-lie"),V&&(V.pose==="lie"?V.lieFlip:V.flip)&&I.classList.add("flipped");return}if(B.spot==="mat"&&B.seat){const V=e.seatAt(te,B.seat,B);f(I,V.x,V.y,Ga,wi);const N=e.get().rooms[te]?.items.find(Z=>Z.id===B.seat?.item);I.style.zIndex=String(1e3+(N?.z??0)+1),B.seat.pose==="lie"&&(I.classList.add("baby-lie"),N?.flip&&I.classList.add("baby-lie-r"));return}f(I,B.x,B.y,Ga,wi),I.style.zIndex=String(5e3+Math.round(B.y))}function se(I){if(I.spot!=="arms"||!I.holder)return!1;const B=e.get().characters.find(te=>te.id===I.holder);return!!B&&B.room!==I.room}function Me(I){o||!se(I)||!e.canSend()||!e.editable()||e.dispatch({type:"baby/hold",holder:null,room:I.room,x:I.x,y:oi,now:e.clock()})}function Ke(I){if(o||se(I)||I.spot!=="arms"||I.holder!==e.holderId()||!e.canSend()||!e.editable())return;const B=e.holderSpot();if(!B)return;const te=e.get().currentRoom;if(I.room===te)return;const V=h(B);e.dispatch({type:"baby/hold",holder:I.holder,room:te,x:V.x,y:Math.max(40,V.y),now:e.clock()})}function Ie(){const I=e.get(),B=I.baby,te=!!B&&B.spot==="arms"&&!!B.holder&&!!e.holderSpot(B.holder),V=!!B&&B.spot==="arms"&&B.holder===e.holderId()&&!!e.holderSpot(),N=!!(B&&e.inHouse()&&(B.room===I.currentRoom||te||V));if(!B||!N){t&&(t.remove(),t=null),o=!1,x(),window.clearTimeout(a),i=Number.NaN;const Pe=!d&&!B&&e.inHouse()&&e.owner()&&e.editable()&&e.canSend()&&I.currentRoom==="nursery"&&Q();W(Pe);return}W(!1),Zn()&&!Gn("baby")&&!l&&(l=!0,Al(["baby"]).then(()=>Ie()));const Z=g(),ue=e.clock(),Te=u(B,ue),ke=Te==="rock",je=Te==="change",H=!ke&&!je&&Zn()?Gn("baby"):"",U=Z.querySelector(".babyInner"),st=(H||"svg")+(ke?"s":"")+(je?"f":"");U&&Z.dataset.look!==st&&(U.innerHTML=H?`<img class="artimg" alt="" draggable="false" src="${H}">`:d4(ke,je),Z.dataset.look=st),Z.dataset.babySpot=B.spot,Z.dataset.babyMood=String(B.mood),Z.dataset.babyName=B.name,Z.classList.toggle("is-feed",Te==="feed"),Z.classList.toggle("is-burp",Te==="burp"),Z.classList.toggle("is-change",Te==="change"),Z.classList.toggle("is-rock",Te==="rock");const ht=Z.querySelector(".babyZzz"),Fe=Z.querySelector(".babyBurp"),De=(B.spot==="crib"||B.spot==="bassinet")&&!Te;ht&&(ht.hidden=!De),Fe&&(Fe.hidden=Te!=="burp"),o&&Z.isConnected||q(Z,B),$(B,e.owner()),y(B),m(B,ue),Me(B),Ke(B)}return{render:Ie}}const v4={hip:0,head:3,armL:26,armR:-22,legL:-76,legR:76,legLLift:8,legRLift:8},k4={hip:0,head:-8,armL:18,armR:-12,legL:-4,legR:6,legLLift:0,legRLift:0};function Il(e){return e==="sit"?v4:e==="lie"?k4:null}const tt="#5a3d5c",le=(e=4)=>`stroke="${tt}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,Pf=600,en=250,qs=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})">
  <rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${le()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${le()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${le()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${le()}/>
  <circle cx="-18" cy="-78" r="9" fill="#fff" opacity=".35"/></g>`,_4=(e,t,n)=>`<g transform="translate(${e} ${t})"><path d="M0 0 V-16" ${le(3)}/>${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*6}" cy="${-20+Math.sin(s*Math.PI/180)*6}" r="5" fill="${n}" ${le(2)}/>`).join("")}<circle cx="0" cy="-20" r="4" fill="#ffd166" ${le(2)}/></g>`,wh=e=>`<g transform="translate(${e} 0)">
  <rect x="-80" y="452" width="160" height="12" rx="6" fill="#ff9f68" ${le()}/><rect x="-80" y="470" width="160" height="12" rx="6" fill="#ff9f68" ${le()}/>
  <rect x="-70" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${le(3)}/><rect x="60" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${le(3)}/>
  <rect x="-86" y="490" width="172" height="14" rx="7" fill="#ffb385" ${le()}/></g>`;function $4(){const e=xf,t=Array.from({length:Math.floor((gt.x1-gt.x0+40)/34)},(n,s)=>`<path d="M${gt.x0-20+s*34} 470 V428 l8 -10 l8 10 V470 Z" fill="#fff6e6" ${le(3)}/>`).join("");return`<svg class="parkScene" viewBox="0 0 ${e} ${Pf}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="pkSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#eaf7ff"/></linearGradient>
  <pattern id="pkCheck" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#fff"/><rect width="15" height="15" fill="#ff8fab"/><rect x="15" y="15" width="15" height="15" fill="#ff8fab"/></pattern></defs>
  <rect width="${e}" height="440" fill="url(#pkSky)"/>
  ${[180,900,1600,2300].map((n,s)=>`<g transform="translate(${n} ${70+s%2*30})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <circle cx="${e-220}" cy="90" r="46" fill="#ffe066" ${le(4)}/>
  <path d="M-50 360 Q500 220 1100 340 T2300 330 T${e+100} 350 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#9fe0aa"/><path d="M0 410 H${e}" ${le(4)}/>
  <path d="M0 560 Q700 520 1400 565 T${e} 545 V600 H0 Z" fill="#f6e3c3" opacity=".9"/>
  ${qs(260,390,.9)}${qs(720,380,1.05,"#4fbf7a")}${qs(1230,385,.8)}${qs(1640,380,1,"#4fbf7a")}${qs(1990,388,.85)}${qs(2380,380,.95)}${qs(2860,390,.9,"#4fbf7a")}
  ${[[300,470,"#ff8fab"],[690,455,"#c9a0dc"],[1210,470,"#ffd166"],[1960,450,"#8ecae6"],[2390,470,"#ff8fab"],[1580,590,"#c9a0dc"],[140,585,"#ffd166"]].map(([n,s,o])=>_4(+n,+s,String(o))).join("")}
  <!-- gate back to the street -->
  <g><rect x="40" y="300" width="22" height="200" rx="6" fill="#c99366" ${le()}/><rect x="168" y="300" width="22" height="200" rx="6" fill="#c99366" ${le()}/>
    <path d="M30 312 Q115 240 200 312" fill="none" stroke="${tt}" stroke-width="16" stroke-linecap="round"/><path d="M30 312 Q115 240 200 312" fill="none" stroke="#ff9f68" stroke-width="9" stroke-linecap="round"/>
    <rect x="62" y="252" width="106" height="36" rx="12" fill="#fff6e6" ${le(3)}/><text x="115" y="278" text-anchor="middle" font-size="22" font-weight="900" fill="${tt}" font-family="Nunito, system-ui, sans-serif">PARK</text></g>
  <!-- swing set (seats are separate so they can swing) -->
  <g><path d="M350 ${en} L310 500 M350 ${en} L390 500 M650 ${en} L610 500 M650 ${en} L690 500" stroke="${tt}" stroke-width="14" stroke-linecap="round"/>
    <path d="M350 ${en} L310 500 M350 ${en} L390 500 M650 ${en} L610 500 M650 ${en} L690 500" stroke="#8ecae6" stroke-width="7" stroke-linecap="round"/>
    <rect x="330" y="${en-10}" width="340" height="20" rx="10" fill="#ff8fab" ${le()}/></g>
  <!-- slide -->
  <g><path d="M${be.ladder-20} 560 V${be.top.y} M${be.ladder+30} 560 V${be.top.y}" stroke="${tt}" stroke-width="12" stroke-linecap="round"/>
    <path d="M${be.ladder-20} 560 V${be.top.y} M${be.ladder+30} 560 V${be.top.y}" stroke="#c9a0dc" stroke-width="6" stroke-linecap="round"/>
    ${[380,420,460,500,540].map(n=>`<path d="M${be.ladder-20} ${n} H${be.ladder+30}" ${le(5)}/>`).join("")}
    <rect x="${be.ladder-30}" y="${be.top.y-14}" width="100" height="18" rx="8" fill="#ffd166" ${le()}/>
    <path d="M${be.ladder+60} ${be.top.y-10} C 1000 ${be.top.y} 1010 520 ${be.bottom.x+40} 548 L${be.bottom.x+40} 572 C 990 548 975 ${be.top.y+30} ${be.ladder+60} ${be.top.y+14} Z" fill="#ffd166" ${le()}/>
    <path d="M${be.ladder+70} ${be.top.y-2} C 990 ${be.top.y+8} 1000 525 ${be.bottom.x+30} 552" fill="none" stroke="#fff3b0" stroke-width="6" stroke-linecap="round"/></g>
  <!-- splash pond -->
  <g class="pondArt"><ellipse cx="1420" cy="515" rx="185" ry="52" fill="#8ecae6" ${le()}/><ellipse cx="1420" cy="510" rx="150" ry="36" fill="#b5e3f5"/>
    <ellipse cx="1340" cy="520" rx="24" ry="9" fill="#80ed99" ${le(3)}/><ellipse cx="1500" cy="505" rx="20" ry="8" fill="#80ed99" ${le(3)}/>
    <g transform="translate(1440 500)"><ellipse cx="0" cy="0" rx="20" ry="12" fill="#ffd166" ${le(3)}/><circle cx="16" cy="-12" r="9" fill="#ffd166" ${le(3)}/><path d="M24 -12 l8 2 l-8 3 z" fill="#ff9f68" ${le(2)}/><circle cx="18" cy="-14" r="1.8" fill="${tt}"/></g></g>
  <!-- picnic blanket -->
  <g><path d="M1670 530 L1910 530 L1940 580 L1640 580 Z" fill="url(#pkCheck)" ${le()}/>
    <g transform="translate(1915 520)"><rect x="-26" y="-20" width="52" height="32" rx="8" fill="#e6b88a" ${le(3)}/><path d="M-18 -20 Q0 -46 18 -20" fill="none" ${le(4)}/><circle cx="-10" cy="-24" r="7" fill="#ff6b6b" ${le(2)}/></g></g>
  ${wh(2065)}${wh(2265)}
  <!-- dog area -->
  <g>${t}<path d="M${gt.x0-20} 440 H${gt.x1+20}" ${le(3)}/>
    <g transform="translate(${gt.x0+10} 380)"><rect x="-6" y="0" width="12" height="70" fill="#c99366" ${le(3)}/><rect x="-55" y="-34" width="110" height="38" rx="10" fill="#fff6e6" ${le(3)}/>
      <text x="0" y="-8" text-anchor="middle" font-size="20" font-weight="900" fill="${tt}" font-family="Nunito, system-ui, sans-serif">DOGS 🐾</text></g>
    <g transform="translate(${gt.x1-30} 470)"><path d="M-50 0 V-60 L0 -100 L50 -60 V0 Z" fill="#ff8fab" ${le()}/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="${tt}" stroke-width="14" stroke-linecap="round"/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="#c9a0dc" stroke-width="8" stroke-linecap="round"/><path d="M-20 0 V-30 a20 20 0 0 1 40 0 V0 Z" fill="#5a3d5c"/></g>
    <g transform="translate(${gt.x0+120} 500)"><rect x="-12" y="-30" width="24" height="34" rx="8" fill="#ff6b6b" ${le(3)}/><rect x="-18" y="-18" width="36" height="8" rx="4" fill="#ff6b6b" ${le(3)}/><circle cx="0" cy="-32" r="10" fill="#ff6b6b" ${le(3)}/></g></g>
  </svg>`}const x4=`<svg viewBox="0 0 60 240" preserveAspectRatio="none"><path d="M10 0 V222 M50 0 V222" stroke="${tt}" stroke-width="4"/><rect x="0" y="216" width="60" height="14" rx="6" fill="#ff9f68" ${le(3)}/></svg>`,M4=`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#ffd166" ${le(3)}/><path d="M6 16 Q20 24 34 16 M8 27 Q20 19 32 27" fill="none" stroke="#fff" stroke-width="3"/></svg>`,L4=`<svg viewBox="0 0 48 48"><rect x="20" y="28" width="8" height="14" rx="3" fill="#c99366" stroke="${tt}" stroke-width="3"/><circle cx="24" cy="20" r="13" fill="#5cc985" stroke="${tt}" stroke-width="3"/><circle cx="19" cy="16" r="3" fill="#fff" opacity=".5"/></svg>`,J0=`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="31" rx="10" ry="8" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="13" cy="20" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="20" cy="13" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="28" cy="13" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/><circle cx="35" cy="20" r="4.5" fill="#ff8fab" stroke="${tt}" stroke-width="3"/></svg>`,E4=`<svg viewBox="0 0 48 48"><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="${tt}" stroke-width="4" stroke-linecap="round"/><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="#ff9f68" stroke-width="2"/><path d="M16 40 V26 M24 40 V22 M32 40 V26" stroke="${tt}" stroke-width="3" stroke-linecap="round"/></svg>`,eg="/cozy-preview/assets/_pop~cada-mouse-DI1-rdPA.webp",S4=Object.freeze(Object.defineProperty({__proto__:null,default:eg},Symbol.toStringTag,{value:"Module"})),tg="/cozy-preview/assets/_pop~quinn-pup-BNjRkBlA.webp",T4=Object.freeze(Object.defineProperty({__proto__:null,default:tg},Symbol.toStringTag,{value:"Module"})),ng="/cozy-preview/assets/_pop~sloane-snail-B9PsYK5P.webp",P4=Object.freeze(Object.defineProperty({__proto__:null,default:ng},Symbol.toStringTag,{value:"Module"})),nn="#5a3d5c",Ee=`stroke="${nn}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Ka='<ellipse cx="50" cy="97" rx="34" ry="3" fill="#000" opacity=".12"/>',A4=`<svg viewBox="0 0 40 30"><path d="M4 30 V16 Q4 2 20 2 Q36 2 36 16 V30 Z" fill="#3b2a3d" ${Ee}/><circle cx="14" cy="18" r="1.6" fill="#fff" opacity=".8"/><circle cx="22" cy="18" r="1.6" fill="#fff" opacity=".8"/></svg>`,R4=`<svg viewBox="0 0 48 30"><path d="M4 27 Q10 22 22 23 L42 23 Q46 27 42 28 H6 Z" fill="#cdeccf" ${Ee}/><circle cx="26" cy="15" r="11" fill="#ffb3c6" ${Ee}/><path d="M26 15 m-5 0 a5 5 0 1 1 5 5" fill="none" ${Ee}/><path d="M8 23 L5 13 M12 23 L12 13" ${Ee}/></svg>`,C4=`<svg viewBox="0 0 30 30"><path d="M15 2 l3.6 8 8.4 1 -6.3 5.8 1.8 8.4 -7.5 -4.4 -7.5 4.4 1.8 -8.4 L3 11 l8.4 -1z" fill="#fff3b0" ${Ee}/></svg>`,I4=`<svg viewBox="0 0 30 22"><ellipse cx="15" cy="13" rx="13" ry="8" fill="#e6b88a" ${Ee}/><circle cx="10" cy="11" r="1.8" fill="${nn}"/><circle cx="18" cy="14" r="1.8" fill="${nn}"/><circle cx="16" cy="9" r="1.5" fill="${nn}"/></svg>`,O4=`<svg viewBox="0 0 30 28"><path d="M15 26 C3 18 1 10 6 5 C10 1 14 4 15 7 C16 4 20 1 24 5 C29 10 27 18 15 26 Z" fill="#ffc8dd" ${Ee}/></svg>`,Vr=[{name:"Cada",room:"living",x:150,y:382,w:40,h:30,taps:3,spot:A4,hello:"Squeak! Hi Cada!",item:{kind:"egg:cada-mouse",name:"Cada's Mouse",cat:"secrets",w:80,holdable:!0,svg:`${Ka}<path d="M78 74 Q96 68 92 52" stroke="#ff9bb5" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="28" ry="18" fill="#d6d6e8" ${Ee}/><circle cx="28" cy="40" r="13" fill="#d6d6e8" ${Ee}/><circle cx="62" cy="38" r="13" fill="#d6d6e8" ${Ee}/><circle cx="28" cy="40" r="7" fill="#ffc8dd"/><circle cx="62" cy="38" r="7" fill="#ffc8dd"/><circle cx="45" cy="56" r="20" fill="#e4e4f2" ${Ee}/><text x="50" y="96" font-size="11" font-weight="900" text-anchor="middle" fill="${nn}">C</text>`}},{name:"Sloane",room:"living",x:2290,y:383,w:48,h:30,taps:3,spot:R4,hello:"Hi Sloane! ✨",item:{kind:"egg:sloane-snail",name:"Sloane's Rainbow Snail",cat:"secrets",w:110,holdable:!0,svg:`${Ka}<path d="M6 92 Q14 80 36 82 L84 82 Q94 90 84 94 H10 Z" fill="#cdeccf" ${Ee}/><circle cx="56" cy="52" r="32" fill="#ff8fab" ${Ee}/><circle cx="56" cy="52" r="24" fill="#ffd166"/><circle cx="56" cy="52" r="17" fill="#80ed99"/><circle cx="56" cy="52" r="10" fill="#8ecae6"/><circle cx="56" cy="52" r="4" fill="#c9a0dc"/><circle cx="56" cy="52" r="32" fill="none" ${Ee}/><path d="M14 82 L8 60 M24 82 L24 60" ${Ee}/><circle cx="8" cy="58" r="4" fill="${nn}"/><circle cx="24" cy="58" r="4" fill="${nn}"/>`}},{name:"Chloe",room:"bedroom",x:2230,y:92,w:30,h:30,taps:5,spot:C4,item:{kind:"egg:chloe-starlamp",name:"Chloe's Star Lamp",cat:"secrets",w:100,holdable:!0,svg:`${Ka}<circle cx="50" cy="38" r="34" fill="#fff3b0" opacity=".6"/><path d="M50 6 l8 17 19 2.5 -14 13 4 19 -17 -9.5 -17 9.5 4 -19 -14 -13 19 -2.5z" fill="#ffd166" ${Ee}/><rect x="46" y="66" width="8" height="22" rx="4" fill="#c9a0dc" ${Ee}/><ellipse cx="50" cy="90" rx="22" ry="6" fill="#b388d6" ${Ee}/><text x="50" y="93" font-size="8" font-weight="900" text-anchor="middle" fill="#fff">CHLOE</text>`}},{name:"Quinn",room:"kitchen",x:80,y:588,w:30,h:22,taps:4,spot:I4,hello:"Woof! Hi Quinn!",item:{kind:"egg:quinn-pup",name:"Quinn's Cookie Pup",cat:"secrets",w:110,holdable:!0,svg:`${Ka}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#e6b88a" ${Ee}/><circle cx="50" cy="44" r="27" fill="#f2d0a4" ${Ee}/><ellipse cx="24" cy="46" rx="10" ry="17" fill="#b07d54" ${Ee}/><ellipse cx="76" cy="46" rx="10" ry="17" fill="#b07d54" ${Ee}/><circle cx="84" cy="80" r="10" fill="#e6b88a" ${Ee}/><circle cx="81" cy="78" r="1.8" fill="${nn}"/><circle cx="87" cy="82" r="1.8" fill="${nn}"/><text x="50" y="30" font-size="10" font-weight="900" text-anchor="middle" fill="${nn}">Q</text>`}},{name:"Reagan",room:"salon",x:2300,y:352,w:30,h:28,taps:5,spot:O4,item:{kind:"egg:reagan-frame",name:"Reagan's Frame",cat:"secrets",w:120,wall:!0,svg:`<rect x="8" y="10" width="84" height="84" rx="16" fill="#ff8fab" ${Ee}/><rect x="18" y="20" width="64" height="64" rx="10" fill="#fff3f7" ${Ee}/><text x="50" y="72" font-size="52" font-weight="900" text-anchor="middle" fill="#e879c6" stroke="${nn}" stroke-width="2.5">R</text><circle cx="14" cy="16" r="6" fill="#ffd166" ${Ee}/><circle cx="86" cy="88" r="6" fill="#ffd166" ${Ee}/><path d="M76 24 l2 4 4 .5 -3 3 .7 4 -3.7 -2 -3.7 2 .7 -4 -3 -3 4 -.5z" fill="#ffd166"/>`}}],B4=Vr.map(e=>({...e.item,rooms:["any"],secret:e.name})),sg=wt("cozy-secrets"),Ol=()=>{try{return new Set(JSON.parse(localStorage.getItem(sg)??"[]"))}catch{return new Set}},z4=e=>{try{localStorage.setItem(sg,JSON.stringify([...e]))}catch{}};function D4(e){const t=document.createElement("div");t.className="eggs",e.world.appendChild(t);const n=new Map;for(const o of Vr){const i=document.createElement("div");i.className="eggspot",i.dataset.egg=o.name,i.style.left=(o.x-o.w/2)/e.roomW*100+"%",i.style.top=(o.y-o.h)/e.roomH*100+"%",i.style.width=o.w/e.roomW*100+"%",i.style.height=o.h/e.roomH*100+"%",i.innerHTML=o.spot,t.appendChild(i),i.addEventListener("pointerdown",a=>a.stopPropagation()),i.addEventListener("click",a=>{a.stopPropagation();const r=Date.now(),l=n.get(o.name)??{n:0,t:0};if(l.n=r-l.t<1500?l.n+1:1,l.t=r,n.set(o.name,l),i.classList.remove("poke"),i.offsetWidth,i.classList.add("poke"),e.tap(),l.n<o.taps)return;l.n=0;const c=Ol(),d=!c.has(o.name);c.add(o.name),z4(c),H4(o,i),e.sparkle(),e.onFound(o.name,d)})}const s=()=>{const o=e.currentRoom();t.querySelectorAll(".eggspot").forEach(i=>{i.style.display=Vr.find(a=>a.name===i.dataset.egg).room===o?"":"none"})};return s(),{update:s}}const bh=Object.assign({"../assets/art/living/_pop~cada-mouse.webp":eg,"../assets/art/living/_pop~quinn-pup.webp":tg,"../assets/art/living/_pop~sloane-snail.webp":ng}),og={};for(const e in bh)og["egg:"+e.split("_pop~").pop().slice(0,-5)]=bh[e];function H4(e,t){if(e.hello){const s=document.createElement("div");s.className="eggpop";const o=Lf()?og[e.item.kind]:void 0;if(s.innerHTML=`<div class="eggcritter"><svg viewBox="0 0 100 100">${e.item.svg}</svg></div><div class="bubble">${e.hello}</div>`,o){const i=s.querySelector(".eggcritter"),a=i.innerHTML,r=new Image;r.alt="",r.className="eggpic",r.onerror=()=>{i.innerHTML=a},r.src=o,i.replaceChildren(r)}t.appendChild(s),setTimeout(()=>s.remove(),3200)}const n=document.createElement("div");n.className="eggbanner",n.innerHTML=`<span class="sp">✨</span><span class="nm">${[...e.name].map((s,o)=>`<i style="animation-delay:${o*70}ms">${s}</i>`).join("")}</span><span class="sp">✨</span>`,document.body.appendChild(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3100),ig()}function ig(e=70){const t=["#ff8fab","#ffd166","#8ecae6","#80ed99","#c9a0dc","#ff9f68"],n=document.createElement("div");n.className="confetti",document.body.appendChild(n);for(let s=0;s<e;s++){const o=document.createElement("i");o.style.left=Math.random()*100+"vw",o.style.background=t[s%t.length],o.style.animationDelay=Math.random()*.5+"s",o.style.animationDuration=1.6+Math.random()*1.2+"s",o.style.setProperty("--r",Math.random()*720-360+"deg"),o.style.setProperty("--dx",Math.random()*160-80+"px"),s%3===0&&(o.style.borderRadius="50%"),n.appendChild(o)}setTimeout(()=>n.remove(),3600)}const W4=`[
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
`,V4=`[
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
`,U4="/cozy-preview/assets/alarm-clock-BCd1-e86.svg",Q4="/cozy-preview/assets/bedtime-snack-BoNDQqOK.svg",N4="/cozy-preview/assets/book-stack-upnp1NwG.svg",q4="/cozy-preview/assets/bunk-bed-YZiRWNFR.svg",j4="/cozy-preview/assets/bunny-slippers-PNucIc_Q.svg",F4="/cozy-preview/assets/canopy-bed-BwWkRhe2.svg",Z4="/cozy-preview/assets/cat-bed-B8ULFbHc.svg",G4="/cozy-preview/assets/cloud-rug-CFl6aZc5.svg",Y4="/cozy-preview/assets/cloud-shelf-DF5b_IoZ.svg",K4="/cozy-preview/assets/cork-board-Bj5OuLbv.svg",X4="/cozy-preview/assets/daisy-pot-Cy8SrSS6.svg",J4="/cozy-preview/assets/desk-2rRtV3Vk.svg",e6="/cozy-preview/assets/dino-plush-Dq_qccf0.svg",t6="/cozy-preview/assets/doll-house-BrC3RiST.svg",n6="/cozy-preview/assets/dresser-__9TGuYc.svg",s6="/cozy-preview/assets/egg-chair-CtiaqWNQ.svg",o6="/cozy-preview/assets/floor-fan-Dt9SIAmB.svg",i6="/cozy-preview/assets/guinea-pig-CwLeNU_S.svg",a6="/cozy-preview/assets/hamster-cage-lQ6r7saV.svg",r6="/cozy-preview/assets/heart-rug-CBDvH6Q6.svg",l6="/cozy-preview/assets/lava-lamp-DEuHvlco.svg",c6="/cozy-preview/assets/moon-night-light-CAKsjYZv.svg",d6="/cozy-preview/assets/nightstand-Bgsh0YUi.svg",f6="/cozy-preview/assets/paper-lantern-CErOGyrT.svg",p6="/cozy-preview/assets/piggy-bank-DsHrmOcp.svg",h6="/cozy-preview/assets/plant-stand-DDyIDaL0.svg",u6="/cozy-preview/assets/play-tent-Bsawe52j.svg",g6="/cozy-preview/assets/star-mobile-DzOGs-Jo.svg",m6="/cozy-preview/assets/toy-chest-6iPrDiZH.svg",y6="/cozy-preview/assets/toy-robot-OaCEwmDT.svg",w6="/cozy-preview/assets/toy-train-D5GqAnpy.svg",b6="/cozy-preview/assets/unicorn-plush-C0W1eEs9.svg",v6="/cozy-preview/assets/wardrobe-Dn492IK0.svg",k6="/cozy-preview/assets/bananas-aPQwdEVo.svg",_6="/cozy-preview/assets/bar-stool-DWxhX1Ah.svg",$6="/cozy-preview/assets/bread-loaf-C9cEAYcl.svg",x6="/cozy-preview/assets/chick-BTEVfgqU.svg",M6="/cozy-preview/assets/china-hutch-BTmMY6rg.svg",L6="/cozy-preview/assets/cocoa-mug-CraNCc9b.svg",E6="/cozy-preview/assets/cookie-jar-ripj0oyT.svg",S6="/cozy-preview/assets/cooking-pot-BWtfOm9f.svg",T6="/cozy-preview/assets/cupcake-DFCw42xb.svg",P6="/cozy-preview/assets/dish-rack-BpVmmU6k.svg",A6="/cozy-preview/assets/fruit-bowl-Dw9lsB3B.svg",R6="/cozy-preview/assets/frying-pan-CTBY6MC_.svg",C6="/cozy-preview/assets/happy-fridge-D7ENuEJs.svg",I6="/cozy-preview/assets/herb-box-CdRxefnV.svg",O6="/cozy-preview/assets/high-chair-BQtLYlq4.svg",B6="/cozy-preview/assets/ice-cream-DydSyNXx.svg",z6="/cozy-preview/assets/kettle-D1nuAiG_.svg",D6="/cozy-preview/assets/kitchen-counter-C8sTAZ-V.svg",H6="/cozy-preview/assets/kitchen-sink-CYjDcd1n.svg",W6="/cozy-preview/assets/lemon-tree-CZz-Vy3P.svg",V6="/cozy-preview/assets/microwave-lopm-FCT.svg",U6="/cozy-preview/assets/milk-bottle-DxcUA6XT.svg",Q6="/cozy-preview/assets/pancakes-CLqxnc5R.svg",N6="/cozy-preview/assets/pantry-shelf-Azdxpmzd.svg",q6="/cozy-preview/assets/pendant-lamp-fZv6y1p0.svg",j6="/cozy-preview/assets/pet-bowl-ETL_EOAP.svg",F6="/cozy-preview/assets/rice-cooker-JX0L4bi2.svg",Z6="/cozy-preview/assets/runner-rug-BbUgZFy4.svg",G6="/cozy-preview/assets/spice-rack-D9kAw-vT.svg",Y6="/cozy-preview/assets/stand-mixer-CZrLn00l.svg",K6="/cozy-preview/assets/teapot-CtPOJzEm.svg",X6="/cozy-preview/assets/toaster-CNk0hJDw.svg",J6="/cozy-preview/assets/utensil-rail-B0QkGP3A.svg",ek="/cozy-preview/assets/watermelon-slice-VzvgalD5.svg",tk="/cozy-preview/assets/aquarium-BlhJ9UCr.svg",nk="/cozy-preview/assets/arc-floor-lamp-DL5cEVzq.svg",sk="/cozy-preview/assets/bean-bag-CauyDuZQ.svg",ok="/cozy-preview/assets/bird-cage-xqeVahX7.svg",ik="/cozy-preview/assets/blanket-basket-B4LREUo9.svg",ak="/cozy-preview/assets/building-blocks-DbtoodPT.svg",rk="/cozy-preview/assets/coffee-table-ZYO2ApH6.svg",lk="/cozy-preview/assets/comfy-armchair-tjNYbfgO.svg",ck="/cozy-preview/assets/cubby-shelf-CLzTUpiz.svg",dk="/cozy-preview/assets/daisy-rug-CvOlxjsu.svg",fk="/cozy-preview/assets/fiddle-leaf-fig-DiUNW4Q_.svg",pk="/cozy-preview/assets/fireplace-CqxIMN3Z.svg",hk="/cozy-preview/assets/globe-DN0sih3W.svg",uk="/cozy-preview/assets/hanging-planter-M9IHqztp.svg",gk="/cozy-preview/assets/monstera-plant-CLmuB_RM.svg",mk="/cozy-preview/assets/piano-Y0KQ4rD2.svg",yk="/cozy-preview/assets/popcorn-BD2d8sUH.svg",wk="/cozy-preview/assets/pouf-as0li8On.svg",bk="/cozy-preview/assets/rainbow-rug-C5ZVauOA.svg",vk="/cozy-preview/assets/rainbow-wall-art-CCXUPPen.svg",kk="/cozy-preview/assets/retro-radio-B3T98xMQ.svg",_k="/cozy-preview/assets/rocking-chair-BgoIQu5H.svg",$k="/cozy-preview/assets/rocking-horse-1WLLV43R.svg",xk="/cozy-preview/assets/snake-plant-BGDwPcMj.svg",Mk="/cozy-preview/assets/string-lights-DGC0Ni2I.svg",Lk="/cozy-preview/assets/succulent-trio-uPD-ljlL.svg",Ek="/cozy-preview/assets/tassel-rug-DolXtxfQ.svg",Sk="/cozy-preview/assets/throw-pillow-qWyWQ9cT.svg",Tk="/cozy-preview/assets/toy-car-CTJy5H4V.svg",Pk="/cozy-preview/assets/tulip-vase-o2vjI1Hg.svg",Ak="/cozy-preview/assets/turtle-B9Y6NDSv.svg",Rk="/cozy-preview/assets/tv-stand-CcLHFc1J.svg",Ck="/cozy-preview/assets/wall-shelf-CCWuZ6Xl.svg",Ik="/cozy-preview/assets/cc-bakery-shelf-BxdhLTTC.svg",Ok="/cozy-preview/assets/cc-breakfast-table-DwaO0eFy.svg",Bk="/cozy-preview/assets/cc-bubble-chair-DncHA7F-.svg",zk="/cozy-preview/assets/cc-canopy-daybed-CVbt6QDr.svg",Dk="/cozy-preview/assets/cc-cloud-beanbag-SM0m-3qY.svg",Hk="/cozy-preview/assets/cc-cloud-lamp-BWwxoCux.svg",Wk="/cozy-preview/assets/cc-cottage-aquarium-iY2D26Vq.svg",Vk="/cozy-preview/assets/cc-cupcake-stand-B08kdXZL.svg",Uk="/cozy-preview/assets/cc-dryer-chair-DQmosxUz.svg",Qk="/cozy-preview/assets/cc-fairy-garland-BncKvkRL.svg",Nk="/cozy-preview/assets/cc-fairy-shelf-CE6x7J1w.svg",qk="/cozy-preview/assets/cc-flower-kettle-ZTbAh26L.svg",jk="/cozy-preview/assets/cc-flower-lamp-CS2T2S89.svg",Fk="/cozy-preview/assets/cc-heart-bed-76-z9nJg.svg",Zk="/cozy-preview/assets/cc-heart-clock-ByixSFru.svg",Gk="/cozy-preview/assets/cc-heart-pouf-DH5J2s2J.svg",Yk="/cozy-preview/assets/cc-heart-rug-Jwmh-m0j.svg",Kk="/cozy-preview/assets/cc-jewel-box-qMbIQmo4.svg",Xk="/cozy-preview/assets/cc-light-vanity-DD4uQJ_7.svg",Jk="/cozy-preview/assets/cc-macaron-jar-A0sT-Lvj.svg",e_="/cozy-preview/assets/cc-macrame-swing-qIcoPp0o.svg",t_="/cozy-preview/assets/cc-mani-chair-7AWb60tv.svg",n_="/cozy-preview/assets/cc-mint-fridge-Cc87e_gW.svg",s_="/cozy-preview/assets/cc-mushroom-stool-B9-y9WNf.svg",o_="/cozy-preview/assets/cc-pastel-range-D6cjzJTl.svg",i_="/cozy-preview/assets/cc-perfume-tray-DN4chcIn.svg",a_="/cozy-preview/assets/cc-petal-table-QrNho7KH.svg",r_="/cozy-preview/assets/cc-plant-wall-BMii8_kR.svg",l_="/cozy-preview/assets/cc-reading-nook-wiDgasP8.svg",c_="/cozy-preview/assets/cc-record-player-BoxZhHLy.svg",d_="/cozy-preview/assets/cc-ribbon-mirror-DiCje_iy.svg",f_="/cozy-preview/assets/cc-scallop-curtains-Bzhy2peV.svg",p_="/cozy-preview/assets/cc-scallop-loveseat-Dfi7dg3b.svg",h_="/cozy-preview/assets/cc-star-dresser-2wqSnsip.svg",u_="/cozy-preview/assets/cc-teapot-set-DnZlJvn7.svg",g_="/cozy-preview/assets/cc-window-seat-BCOise4Z.svg",m_="/cozy-preview/assets/arched-shelf-XtiqRVaT.svg",y_="/cozy-preview/assets/blob-rug-Deh5k10s.svg",w_="/cozy-preview/assets/bubbly-plant-CFTOJd5Y.svg",b_="/cozy-preview/assets/bud-vase-Dup4WQ5y.svg",v_="/cozy-preview/assets/comb-brush-oPJeQv0v.svg",k_="/cozy-preview/assets/cream-jars-D6bxrnJR.svg",__="/cozy-preview/assets/drop-lamp-CJg63ZKz.svg",$_="/cozy-preview/assets/droplet-buddy-DTpHggFh.svg",x_="/cozy-preview/assets/fancy-sofa-kq2L0ob5.svg",M_="/cozy-preview/assets/flower-cart-BWgfg0s_.svg",L_="/cozy-preview/assets/foot-spa-DdA5_fj_.svg",E_="/cozy-preview/assets/globe-pendants-DNV5WnAO.svg",S_="/cozy-preview/assets/glow-mirror-C_dTGwQc.svg",T_="/cozy-preview/assets/gold-floor-mirror-jfPQepmr.svg",P_="/cozy-preview/assets/hair-dryer-CAkhCf7J.svg",A_="/cozy-preview/assets/heart-plant-fSU4uLVy.svg",R_="/cozy-preview/assets/heart-pouf-BMVPBVKJ.svg",C_="/cozy-preview/assets/lilac-curtain-D_mFsZKu.svg",I_="/cozy-preview/assets/lotion-trio-D3lKwvho.svg",O_="/cozy-preview/assets/mani-lamp-B4SmvhvS.svg",B_="/cozy-preview/assets/nail-table-C3FitmuG.svg",z_="/cozy-preview/assets/pebble-rug-DHBZUggl.svg",D_="/cozy-preview/assets/perfume-bottle-BcNXSWTW.svg",H_="/cozy-preview/assets/pink-fountain-DQ3CIetr.svg",W_="/cozy-preview/assets/pink-vanity-qE3SwdD6.svg",V_="/cozy-preview/assets/polish-bottle-VWed8EQ-.svg",U_="/cozy-preview/assets/polish-rack-8Ph2n2nM.svg",Q_="/cozy-preview/assets/reception-desk-D4Gevx64.svg",N_="/cozy-preview/assets/salon-chair-Wj2sOSW8.svg",q_="/cozy-preview/assets/scent-candle-BEUE-6Uv.svg",j_="/cozy-preview/assets/spray-bottle-Bc8iuceJ.svg",F_="/cozy-preview/assets/star-wall-sign-DvenTqvU.svg",Z_="/cozy-preview/assets/swivel-stool-P-Egqq_Z.svg",G_="/cozy-preview/assets/tiered-tray-DLnZTsUF.svg",Y_="/cozy-preview/assets/towel-cart-DJmR97UL.svg",K_="/cozy-preview/assets/towel-stack-C1qplZ4T.svg",X_="/cozy-preview/assets/vine-planter-Duhx9OMZ.svg",J_="/cozy-preview/assets/waiting-bench-BQuoXbE3.svg",e8="/cozy-preview/assets/wash-chair-sdgNnj79.svg",t8="/cozy-preview/assets/hw-candy-bowl-CD02D5Zj.webp",n8="/cozy-preview/assets/hw-cat-statue-DeCc_3q0.webp",s8="/cozy-preview/assets/hw-cauldron-Dct8_uZ8.webp",o8="/cozy-preview/assets/hw-ghost-sheet-kZF5Oxdt.webp",i8="/cozy-preview/assets/hw-hay-bale-BqFYl-D_.webp",a8="/cozy-preview/assets/hw-heart-pumpkin-B-0-0OAK.webp",r8="/cozy-preview/assets/hw-leaf-garland-DN-y_jMP.webp",l8="/cozy-preview/assets/hw-moon-cling-p5ei0N89.webp",c8="/cozy-preview/assets/hw-moon-lantern-ByPteKOL.webp",d8="/cozy-preview/assets/hw-star-pumpkin-Bxq_OX8C.webp",f8="/cozy-preview/assets/hw-witch-hat-BmuOG13B.webp",p8="/cozy-preview/assets/arched-mirror-ClJgTBd9.svg",h8="/cozy-preview/assets/big-monitor-jx5PnUa_.svg",u8="/cozy-preview/assets/boba-cup-CwUerXNm.svg",g8="/cozy-preview/assets/bubble-bath-8VwrkImA.svg",m8="/cozy-preview/assets/cactus-buddy-D3uacuVA.svg",y8="/cozy-preview/assets/caterpillar-plush-BhR8Pydf.svg",w8="/cozy-preview/assets/checker-bed-mtuxfPje.svg",b8="/cozy-preview/assets/checker-rug-CmSO3Y4j.svg",v8="/cozy-preview/assets/clothes-rail-BY-f9coz.svg",k8="/cozy-preview/assets/cloud-sofa-CZS1Y5s-.svg",_8="/cozy-preview/assets/cube-shelf-DoI0tLGL.svg",$8="/cozy-preview/assets/curvy-desk-eWCvec1f.svg",x8="/cozy-preview/assets/cute-speaker-DrVF9uns.svg",M8="/cozy-preview/assets/desk-lamp-C-VtrE1V.svg",L8="/cozy-preview/assets/desk-mic-BqYzh6ma.svg",E8="/cozy-preview/assets/flower-lamp-Dpz6tQ2x.svg",S8="/cozy-preview/assets/frog-plush-BhkTrE24.svg",T8="/cozy-preview/assets/game-controller-6gvwykQG.svg",P8="/cozy-preview/assets/gaming-chair-BCyGMzy0.svg",A8="/cozy-preview/assets/hamster-pet-LBcghoJj.svg",R8="/cozy-preview/assets/headphones-Cjjqt_92.svg",C8="/cozy-preview/assets/heart-light-DfDwRHju.svg",I8="/cozy-preview/assets/keyboard-Cbtwvtj1.svg",O8="/cozy-preview/assets/mini-fridge-qdNm4NKf.svg",B8="/cozy-preview/assets/pastel-wardrobe-BubkWAN2.svg",z8="/cozy-preview/assets/phone-stand-VLW-DsK-.svg",D8="/cozy-preview/assets/pothos-plant-C1I15M9a.svg",H8="/cozy-preview/assets/puffy-stool-CwjoblCa.svg",W8="/cozy-preview/assets/ring-light-CdxNAXA6.svg",V8="/cozy-preview/assets/side-table-round-rCsBU0YO.svg",U8="/cozy-preview/assets/star-lamp-CHKQnzvB.svg",Q8="/cozy-preview/assets/sticker-board-LUm1_I_P.svg",N8="/cozy-preview/assets/sunny-art-C25M7k02.svg",q8="/cozy-preview/assets/sv-bean-bag-DdsCYd4e.svg",j8="/cozy-preview/assets/sv-cloud-rug-BvczSj77.svg",F8="/cozy-preview/assets/sv-wall-shelf-BtJLzNMg.svg",Z8="/cozy-preview/assets/vlog-camera-CBd28A7P.svg",G8="/cozy-preview/assets/wavy-floor-lamp-Iy8llzr8.svg",Y8="/cozy-preview/assets/acorn-friend-BsLiZ2Z_.svg",K8="/cozy-preview/assets/apple-tree-DGIUIjY1.svg",X8="/cozy-preview/assets/big-wardrobe-BnfnkPXl.svg",J8="/cozy-preview/assets/box-stack-ji13G2mP.svg",e$="/cozy-preview/assets/brick-fireplace-BGCbiSK5.svg",t$="/cozy-preview/assets/bulletin-board-DqA69wQH.svg",n$="/cozy-preview/assets/cozy-mug-CFJEPRKb.svg",s$="/cozy-preview/assets/cream-sofa-CB4EWIDp.svg",o$="/cozy-preview/assets/fire-pit-DTyRokIj.svg",i$="/cozy-preview/assets/glass-cabinet-BCHExP4F.svg",a$="/cozy-preview/assets/hanging-lantern-DZbXB8L1.svg",r$="/cozy-preview/assets/knit-cushion-DUewI6rR.svg",l$="/cozy-preview/assets/ladder-shelf-DXYDmQiE.svg",c$="/cozy-preview/assets/landscape-art-CdCqCPL2.svg",d$="/cozy-preview/assets/lattice-bench-D3zCZTQp.svg",f$="/cozy-preview/assets/leaf-wreath-DUjq1MWh.svg",p$="/cozy-preview/assets/mini-greenhouse-CGE5F9A_.svg",h$="/cozy-preview/assets/moving-box-CZXbXcJO.svg",u$="/cozy-preview/assets/picnic-basket-D72DCNRY.svg",g$="/cozy-preview/assets/round-rug-D8ePosbv.svg",m$="/cozy-preview/assets/sale-sign-CXWpgQt5.svg",y$="/cozy-preview/assets/sprout-pot-BbXk09mS.svg",w$="/cozy-preview/assets/stripe-runner-ClycKEW5.svg",b$="/cozy-preview/assets/trailing-plant-NbG7dy8O.svg",v$="/cozy-preview/assets/wall-clock-CDC1o6eG.svg",k$="/cozy-preview/assets/wh-arc-floor-lamp-BKVes2Fd.svg",_$="/cozy-preview/assets/wh-book-stack-DjDFey2h.svg",$$="/cozy-preview/assets/wh-dresser-Y-jnNt5q.svg",x$="/cozy-preview/assets/wh-fiddle-leaf-fig-B0-kGmHI.svg",M$="/cozy-preview/assets/wh-kitchen-counter-BtBenu6u.svg",L$="/cozy-preview/assets/wh-nightstand-DPUoV5aO.svg",E$="/cozy-preview/assets/wh-pendant-lamp-DBg4p7hi.svg",S$="/cozy-preview/assets/wh-snake-plant-Cj3bHF25.svg",T$="/cozy-preview/assets/wh-string-lights-C3JVBkgW.svg",P$="/cozy-preview/assets/wh-teapot-kevlW5hN.svg",A$="/cozy-preview/assets/wood-armchair-DNVhKBWe.svg",R$="/cozy-preview/assets/wood-bookshelf-CvT7GAuI.svg",C$="/cozy-preview/assets/wood-coffee-table-CuAR_7Kr.svg",I$="/cozy-preview/assets/wood-desk-DPCJq_XQ.svg",O$="/cozy-preview/assets/wood-stool-CV7YeZwC.svg",B$="/cozy-preview/assets/wooden-bed-Qj-sf8yq.svg",z$="/cozy-preview/assets/wc-bauble-garland-PlBim-j0.webp",D$="/cozy-preview/assets/wc-berry-wreath-BtfH1PGe.webp",H$="/cozy-preview/assets/wc-birch-basket-vRxqyB3J.webp",W$="/cozy-preview/assets/wc-cabin-picture-B-lavF1R.webp",V$="/cozy-preview/assets/wc-candle-trio-CjQ7YYcj.webp",U$="/cozy-preview/assets/wc-cane-lamp-OhwvqNa-.webp",Q$="/cozy-preview/assets/wc-cinnamon-tray-CxLrtplK.webp",N$="/cozy-preview/assets/wc-cocoa-cart-BkMzGgs0.webp",q$="/cozy-preview/assets/wc-cocoa-mug-qa2xzTYd.webp",j$="/cozy-preview/assets/wc-cocoa-pot-bLgiaNKD.webp",F$="/cozy-preview/assets/wc-cookie-oven-D2Ud1EPt.webp",Z$="/cozy-preview/assets/wc-cookie-plate-RhDZYroJ.webp",G$="/cozy-preview/assets/wc-frost-bookcase-BMd6DAXH.webp",Y$="/cozy-preview/assets/wc-frosted-pine-BupMG4GK.webp",K$="/cozy-preview/assets/wc-fur-bench-B1nXjHAR.webp",X$="/cozy-preview/assets/wc-gingerbread-village-8pOXPPCY.webp",J$="/cozy-preview/assets/wc-gingerbread-PGlclkJ_.webp",e3="/cozy-preview/assets/wc-globe-lamp-DUCVl_3A.webp",t3="/cozy-preview/assets/wc-holiday-tree-CO0SBlqY.webp",n3="/cozy-preview/assets/wc-holly-CD8teo0a.webp",s3="/cozy-preview/assets/wc-ice-skates-D49y8YK1.webp",o3="/cozy-preview/assets/wc-ice-wardrobe-Dliflqpp.webp",i3="/cozy-preview/assets/wc-knit-armchair-84rhSw_8.webp",a3="/cozy-preview/assets/wc-lantern-81B3e5fN.webp",r3="/cozy-preview/assets/wc-log-bench-qQ1zT34_.webp",l3="/cozy-preview/assets/wc-marshmallow-jar-DeWRr-zf.webp",c3="/cozy-preview/assets/wc-mitten-line-sg-sweCl.webp",d3="/cozy-preview/assets/wc-mitten-ottoman-H5qkjso6.webp",f3="/cozy-preview/assets/wc-mug-shelf-DlWrwZYo.webp",p3="/cozy-preview/assets/wc-nutcracker-BGZe5tYy.webp",h3="/cozy-preview/assets/wc-penguin-chair-CDM1eIxo.webp",u3="/cozy-preview/assets/wc-penguin-plush-C8B27KcB.webp",g3="/cozy-preview/assets/wc-peppermint-counter-CPl6TA0h.webp",m3="/cozy-preview/assets/wc-peppermint-rug-3nakY_gB.webp",y3="/cozy-preview/assets/wc-pinecone-garland-s7ZWASw2.webp",w3="/cozy-preview/assets/wc-pinecone-table-DlJvjB-2.webp",b3="/cozy-preview/assets/wc-plaid-bed-eAhWKZdO.webp",v3="/cozy-preview/assets/wc-plaid-sofa-kvF30vEn.webp",k3="/cozy-preview/assets/wc-poinsettia-C-S-MDMu.webp",_3="/cozy-preview/assets/wc-polar-plush-BUVRTt7t.webp",$3="/cozy-preview/assets/wc-pom-rug-B-JF-heA.webp",x3="/cozy-preview/assets/wc-present-stack-Do2pEHLF.webp",M3="/cozy-preview/assets/wc-reindeer-CbKEp6CE.webp",L3="/cozy-preview/assets/wc-sled-table-Bd2cST9J.webp",E3="/cozy-preview/assets/wc-sleigh-planter-Bfcxvgbk.webp",S3="/cozy-preview/assets/wc-snow-globe-BcGMsnmh.webp",T3="/cozy-preview/assets/wc-snow-mobile-F06-kuT7.webp",P3="/cozy-preview/assets/wc-snow-nightstand-D6RhLncP.webp",A3="/cozy-preview/assets/wc-snow-window-dOxdYTSk.webp",R3="/cozy-preview/assets/wc-snowman-gxLBKnIO.webp",C3="/cozy-preview/assets/wc-snowshoes-CZcMT0Qx.webp",I3="/cozy-preview/assets/wc-sock-hamper-mesU3CG3.webp",O3="/cozy-preview/assets/wc-star-topper-c4tXfpV6.webp",B3="/cozy-preview/assets/wc-stocking-row-Dz0-4wTi.webp",z3="/cozy-preview/assets/wc-stone-hearth-1blXXfiH.webp",D3="/cozy-preview/assets/wc-twinkle-lamp-CYcQjW3A.webp",H3="/cozy-preview/assets/wc-twinkle-string-Olg29poj.webp",W3="/cozy-preview/assets/wc-window-seat-B7CwlRjl.webp",V3="/cozy-preview/assets/wc-woodstove-Cf0xJFnD.webp",U3="/cozy-preview/assets/cc-butter-polka-CmiHLPHI.svg",Q3="/cozy-preview/assets/cc-cream-hex-Bkf3o84Z.svg",N3="/cozy-preview/assets/cc-lavender-lattice-DhxILx5n.svg",q3="/cozy-preview/assets/cc-lilac-gingham-C-WPjvD8.svg",j3="/cozy-preview/assets/cc-mint-checks-BKmyOLlr.svg",F3="/cozy-preview/assets/cc-mint-florals-Dz8qRBHw.svg",Z3="/cozy-preview/assets/cc-peach-scallops-GPn_mXbS.svg",G3="/cozy-preview/assets/cc-pink-plaid-VgppBwax.svg",Y3="/cozy-preview/assets/cc-rag-planks-C5Hombhc.svg",K3="/cozy-preview/assets/cc-rose-herringbone-CQRix6_f.svg",X3="/cozy-preview/assets/lilac-stripes-yb9DhjTf.svg",J3="/cozy-preview/assets/lilac-terrazzo-8CaN2qhK.svg",ex="/cozy-preview/assets/mint-bubbles-BIQM5a2P.svg",tx="/cozy-preview/assets/pink-check-floor-Cy9k3Fal.svg",nx="/cozy-preview/assets/pink-hearts-BpVCT-98.svg",sx="/cozy-preview/assets/cloud-sky-CbZL0zcC.svg",ox="/cozy-preview/assets/pastel-planks-BAcEss7w.svg",ix="/cozy-preview/assets/soft-carpet-BSwTSDW1.svg",ax="/cozy-preview/assets/star-sprinkle-5bH7qjW0.svg",rx="/cozy-preview/assets/tiny-hearts-C-RHlg1h.svg",lx="/cozy-preview/assets/butter-check-floor-C8HdmZ0P.svg",cx="/cozy-preview/assets/mint-checks-rWbOdhfH.svg",dx="/cozy-preview/assets/sky-clouds-DUJlygwI.svg",fx="/cozy-preview/assets/sky-tiles-xxuodD5m.svg",px="/cozy-preview/assets/sunny-stars-C6fsFX70.svg",hx="/cozy-preview/assets/leafy-cream-WIcyLI1T.svg",ux="/cozy-preview/assets/orange-gingham-CVNizWBt.svg",gx="/cozy-preview/assets/terracotta-tiles-j3yOSRI7.svg",mx="/cozy-preview/assets/wood-panel-Dob8WRpW.svg",yx="/cozy-preview/assets/wood-planks-4TUYjAkF.svg",wx="/cozy-preview/assets/wc-cabin-planks-Icu9n6YO.webp",bx="/cozy-preview/assets/wc-candy-stripe-cOBsT1Xj.webp",vx="/cozy-preview/assets/wc-frosty-dots-DmQgGwJW.webp",kx="/cozy-preview/assets/wc-mint-pine-5FYK_dVo.webp",_x="/cozy-preview/assets/wc-peppermint-tiles-ChaNg2gF.webp",$x="/cozy-preview/assets/wc-red-plaid-CcQ3BMhN.webp",xx="/cozy-preview/assets/wc-snow-knit-DEFXSv74.webp",Mx="/cozy-preview/assets/wc-snowflake-sky-DrRAdoDP.webp",vh={small:80,medium:150,large:260},Lx={"welcome-home":"Welcome Home","sunny-vibes":"Sunny Vibes",glossy:"Glossy",cottage:"Cozy Cottage",...mb,...vb},ag=e=>Lx[e]??e.replace(/[-_]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()),Ex=Object.assign({"../assets/items/manifest.json":W4,"../assets/patterns/manifest.json":V4}),kh=Object.assign({"../assets/items/bedroom/alarm-clock.svg":U4,"../assets/items/bedroom/bedtime-snack.svg":Q4,"../assets/items/bedroom/book-stack.svg":N4,"../assets/items/bedroom/bunk-bed.svg":q4,"../assets/items/bedroom/bunny-slippers.svg":j4,"../assets/items/bedroom/canopy-bed.svg":F4,"../assets/items/bedroom/cat-bed.svg":Z4,"../assets/items/bedroom/cloud-rug.svg":G4,"../assets/items/bedroom/cloud-shelf.svg":Y4,"../assets/items/bedroom/cork-board.svg":K4,"../assets/items/bedroom/daisy-pot.svg":X4,"../assets/items/bedroom/desk.svg":J4,"../assets/items/bedroom/dino-plush.svg":e6,"../assets/items/bedroom/doll-house.svg":t6,"../assets/items/bedroom/dresser.svg":n6,"../assets/items/bedroom/egg-chair.svg":s6,"../assets/items/bedroom/floor-fan.svg":o6,"../assets/items/bedroom/guinea-pig.svg":i6,"../assets/items/bedroom/hamster-cage.svg":a6,"../assets/items/bedroom/heart-rug.svg":r6,"../assets/items/bedroom/lava-lamp.svg":l6,"../assets/items/bedroom/moon-night-light.svg":c6,"../assets/items/bedroom/nightstand.svg":d6,"../assets/items/bedroom/paper-lantern.svg":f6,"../assets/items/bedroom/piggy-bank.svg":p6,"../assets/items/bedroom/plant-stand.svg":h6,"../assets/items/bedroom/play-tent.svg":u6,"../assets/items/bedroom/star-mobile.svg":g6,"../assets/items/bedroom/toy-chest.svg":m6,"../assets/items/bedroom/toy-robot.svg":y6,"../assets/items/bedroom/toy-train.svg":w6,"../assets/items/bedroom/unicorn-plush.svg":b6,"../assets/items/bedroom/wardrobe.svg":v6,"../assets/items/kitchen/bananas.svg":k6,"../assets/items/kitchen/bar-stool.svg":_6,"../assets/items/kitchen/bread-loaf.svg":$6,"../assets/items/kitchen/chick.svg":x6,"../assets/items/kitchen/china-hutch.svg":M6,"../assets/items/kitchen/cocoa-mug.svg":L6,"../assets/items/kitchen/cookie-jar.svg":E6,"../assets/items/kitchen/cooking-pot.svg":S6,"../assets/items/kitchen/cupcake.svg":T6,"../assets/items/kitchen/dish-rack.svg":P6,"../assets/items/kitchen/fruit-bowl.svg":A6,"../assets/items/kitchen/frying-pan.svg":R6,"../assets/items/kitchen/happy-fridge.svg":C6,"../assets/items/kitchen/herb-box.svg":I6,"../assets/items/kitchen/high-chair.svg":O6,"../assets/items/kitchen/ice-cream.svg":B6,"../assets/items/kitchen/kettle.svg":z6,"../assets/items/kitchen/kitchen-counter.svg":D6,"../assets/items/kitchen/kitchen-sink.svg":H6,"../assets/items/kitchen/lemon-tree.svg":W6,"../assets/items/kitchen/microwave.svg":V6,"../assets/items/kitchen/milk-bottle.svg":U6,"../assets/items/kitchen/pancakes.svg":Q6,"../assets/items/kitchen/pantry-shelf.svg":N6,"../assets/items/kitchen/pendant-lamp.svg":q6,"../assets/items/kitchen/pet-bowl.svg":j6,"../assets/items/kitchen/rice-cooker.svg":F6,"../assets/items/kitchen/runner-rug.svg":Z6,"../assets/items/kitchen/spice-rack.svg":G6,"../assets/items/kitchen/stand-mixer.svg":Y6,"../assets/items/kitchen/teapot.svg":K6,"../assets/items/kitchen/toaster.svg":X6,"../assets/items/kitchen/utensil-rail.svg":J6,"../assets/items/kitchen/watermelon-slice.svg":ek,"../assets/items/living/aquarium.svg":tk,"../assets/items/living/arc-floor-lamp.svg":nk,"../assets/items/living/bean-bag.svg":sk,"../assets/items/living/bird-cage.svg":ok,"../assets/items/living/blanket-basket.svg":ik,"../assets/items/living/building-blocks.svg":ak,"../assets/items/living/coffee-table.svg":rk,"../assets/items/living/comfy-armchair.svg":lk,"../assets/items/living/cubby-shelf.svg":ck,"../assets/items/living/daisy-rug.svg":dk,"../assets/items/living/fiddle-leaf-fig.svg":fk,"../assets/items/living/fireplace.svg":pk,"../assets/items/living/globe.svg":hk,"../assets/items/living/hanging-planter.svg":uk,"../assets/items/living/monstera-plant.svg":gk,"../assets/items/living/piano.svg":mk,"../assets/items/living/popcorn.svg":yk,"../assets/items/living/pouf.svg":wk,"../assets/items/living/rainbow-rug.svg":bk,"../assets/items/living/rainbow-wall-art.svg":vk,"../assets/items/living/retro-radio.svg":kk,"../assets/items/living/rocking-chair.svg":_k,"../assets/items/living/rocking-horse.svg":$k,"../assets/items/living/snake-plant.svg":xk,"../assets/items/living/string-lights.svg":Mk,"../assets/items/living/succulent-trio.svg":Lk,"../assets/items/living/tassel-rug.svg":Ek,"../assets/items/living/throw-pillow.svg":Sk,"../assets/items/living/toy-car.svg":Tk,"../assets/items/living/tulip-vase.svg":Pk,"../assets/items/living/turtle.svg":Ak,"../assets/items/living/tv-stand.svg":Rk,"../assets/items/living/wall-shelf.svg":Ck,"../assets/items/packs/cottage/cc-bakery-shelf.svg":Ik,"../assets/items/packs/cottage/cc-breakfast-table.svg":Ok,"../assets/items/packs/cottage/cc-bubble-chair.svg":Bk,"../assets/items/packs/cottage/cc-canopy-daybed.svg":zk,"../assets/items/packs/cottage/cc-cloud-beanbag.svg":Dk,"../assets/items/packs/cottage/cc-cloud-lamp.svg":Hk,"../assets/items/packs/cottage/cc-cottage-aquarium.svg":Wk,"../assets/items/packs/cottage/cc-cupcake-stand.svg":Vk,"../assets/items/packs/cottage/cc-dryer-chair.svg":Uk,"../assets/items/packs/cottage/cc-fairy-garland.svg":Qk,"../assets/items/packs/cottage/cc-fairy-shelf.svg":Nk,"../assets/items/packs/cottage/cc-flower-kettle.svg":qk,"../assets/items/packs/cottage/cc-flower-lamp.svg":jk,"../assets/items/packs/cottage/cc-heart-bed.svg":Fk,"../assets/items/packs/cottage/cc-heart-clock.svg":Zk,"../assets/items/packs/cottage/cc-heart-pouf.svg":Gk,"../assets/items/packs/cottage/cc-heart-rug.svg":Yk,"../assets/items/packs/cottage/cc-jewel-box.svg":Kk,"../assets/items/packs/cottage/cc-light-vanity.svg":Xk,"../assets/items/packs/cottage/cc-macaron-jar.svg":Jk,"../assets/items/packs/cottage/cc-macrame-swing.svg":e_,"../assets/items/packs/cottage/cc-mani-chair.svg":t_,"../assets/items/packs/cottage/cc-mint-fridge.svg":n_,"../assets/items/packs/cottage/cc-mushroom-stool.svg":s_,"../assets/items/packs/cottage/cc-pastel-range.svg":o_,"../assets/items/packs/cottage/cc-perfume-tray.svg":i_,"../assets/items/packs/cottage/cc-petal-table.svg":a_,"../assets/items/packs/cottage/cc-plant-wall.svg":r_,"../assets/items/packs/cottage/cc-reading-nook.svg":l_,"../assets/items/packs/cottage/cc-record-player.svg":c_,"../assets/items/packs/cottage/cc-ribbon-mirror.svg":d_,"../assets/items/packs/cottage/cc-scallop-curtains.svg":f_,"../assets/items/packs/cottage/cc-scallop-loveseat.svg":p_,"../assets/items/packs/cottage/cc-star-dresser.svg":h_,"../assets/items/packs/cottage/cc-teapot-set.svg":u_,"../assets/items/packs/cottage/cc-window-seat.svg":g_,"../assets/items/packs/glossy/arched-shelf.svg":m_,"../assets/items/packs/glossy/blob-rug.svg":y_,"../assets/items/packs/glossy/bubbly-plant.svg":w_,"../assets/items/packs/glossy/bud-vase.svg":b_,"../assets/items/packs/glossy/comb-brush.svg":v_,"../assets/items/packs/glossy/cream-jars.svg":k_,"../assets/items/packs/glossy/drop-lamp.svg":__,"../assets/items/packs/glossy/droplet-buddy.svg":$_,"../assets/items/packs/glossy/fancy-sofa.svg":x_,"../assets/items/packs/glossy/flower-cart.svg":M_,"../assets/items/packs/glossy/foot-spa.svg":L_,"../assets/items/packs/glossy/globe-pendants.svg":E_,"../assets/items/packs/glossy/glow-mirror.svg":S_,"../assets/items/packs/glossy/gold-floor-mirror.svg":T_,"../assets/items/packs/glossy/hair-dryer.svg":P_,"../assets/items/packs/glossy/heart-plant.svg":A_,"../assets/items/packs/glossy/heart-pouf.svg":R_,"../assets/items/packs/glossy/lilac-curtain.svg":C_,"../assets/items/packs/glossy/lotion-trio.svg":I_,"../assets/items/packs/glossy/mani-lamp.svg":O_,"../assets/items/packs/glossy/nail-table.svg":B_,"../assets/items/packs/glossy/pebble-rug.svg":z_,"../assets/items/packs/glossy/perfume-bottle.svg":D_,"../assets/items/packs/glossy/pink-fountain.svg":H_,"../assets/items/packs/glossy/pink-vanity.svg":W_,"../assets/items/packs/glossy/polish-bottle.svg":V_,"../assets/items/packs/glossy/polish-rack.svg":U_,"../assets/items/packs/glossy/reception-desk.svg":Q_,"../assets/items/packs/glossy/salon-chair.svg":N_,"../assets/items/packs/glossy/scent-candle.svg":q_,"../assets/items/packs/glossy/spray-bottle.svg":j_,"../assets/items/packs/glossy/star-wall-sign.svg":F_,"../assets/items/packs/glossy/swivel-stool.svg":Z_,"../assets/items/packs/glossy/tiered-tray.svg":G_,"../assets/items/packs/glossy/towel-cart.svg":Y_,"../assets/items/packs/glossy/towel-stack.svg":K_,"../assets/items/packs/glossy/vine-planter.svg":X_,"../assets/items/packs/glossy/waiting-bench.svg":J_,"../assets/items/packs/glossy/wash-chair.svg":e8,"../assets/items/packs/halloween/hw-candy-bowl.webp":t8,"../assets/items/packs/halloween/hw-cat-statue.webp":n8,"../assets/items/packs/halloween/hw-cauldron.webp":s8,"../assets/items/packs/halloween/hw-ghost-sheet.webp":o8,"../assets/items/packs/halloween/hw-hay-bale.webp":i8,"../assets/items/packs/halloween/hw-heart-pumpkin.webp":a8,"../assets/items/packs/halloween/hw-leaf-garland.webp":r8,"../assets/items/packs/halloween/hw-moon-cling.webp":l8,"../assets/items/packs/halloween/hw-moon-lantern.webp":c8,"../assets/items/packs/halloween/hw-star-pumpkin.webp":d8,"../assets/items/packs/halloween/hw-witch-hat.webp":f8,"../assets/items/packs/sunny-vibes/arched-mirror.svg":p8,"../assets/items/packs/sunny-vibes/big-monitor.svg":h8,"../assets/items/packs/sunny-vibes/boba-cup.svg":u8,"../assets/items/packs/sunny-vibes/bubble-bath.svg":g8,"../assets/items/packs/sunny-vibes/cactus-buddy.svg":m8,"../assets/items/packs/sunny-vibes/caterpillar-plush.svg":y8,"../assets/items/packs/sunny-vibes/checker-bed.svg":w8,"../assets/items/packs/sunny-vibes/checker-rug.svg":b8,"../assets/items/packs/sunny-vibes/clothes-rail.svg":v8,"../assets/items/packs/sunny-vibes/cloud-sofa.svg":k8,"../assets/items/packs/sunny-vibes/cube-shelf.svg":_8,"../assets/items/packs/sunny-vibes/curvy-desk.svg":$8,"../assets/items/packs/sunny-vibes/cute-speaker.svg":x8,"../assets/items/packs/sunny-vibes/desk-lamp.svg":M8,"../assets/items/packs/sunny-vibes/desk-mic.svg":L8,"../assets/items/packs/sunny-vibes/flower-lamp.svg":E8,"../assets/items/packs/sunny-vibes/frog-plush.svg":S8,"../assets/items/packs/sunny-vibes/game-controller.svg":T8,"../assets/items/packs/sunny-vibes/gaming-chair.svg":P8,"../assets/items/packs/sunny-vibes/hamster-pet.svg":A8,"../assets/items/packs/sunny-vibes/headphones.svg":R8,"../assets/items/packs/sunny-vibes/heart-light.svg":C8,"../assets/items/packs/sunny-vibes/keyboard.svg":I8,"../assets/items/packs/sunny-vibes/mini-fridge.svg":O8,"../assets/items/packs/sunny-vibes/pastel-wardrobe.svg":B8,"../assets/items/packs/sunny-vibes/phone-stand.svg":z8,"../assets/items/packs/sunny-vibes/pothos-plant.svg":D8,"../assets/items/packs/sunny-vibes/puffy-stool.svg":H8,"../assets/items/packs/sunny-vibes/ring-light.svg":W8,"../assets/items/packs/sunny-vibes/side-table-round.svg":V8,"../assets/items/packs/sunny-vibes/star-lamp.svg":U8,"../assets/items/packs/sunny-vibes/sticker-board.svg":Q8,"../assets/items/packs/sunny-vibes/sunny-art.svg":N8,"../assets/items/packs/sunny-vibes/sv-bean-bag.svg":q8,"../assets/items/packs/sunny-vibes/sv-cloud-rug.svg":j8,"../assets/items/packs/sunny-vibes/sv-wall-shelf.svg":F8,"../assets/items/packs/sunny-vibes/vlog-camera.svg":Z8,"../assets/items/packs/sunny-vibes/wavy-floor-lamp.svg":G8,"../assets/items/packs/welcome-home/acorn-friend.svg":Y8,"../assets/items/packs/welcome-home/apple-tree.svg":K8,"../assets/items/packs/welcome-home/big-wardrobe.svg":X8,"../assets/items/packs/welcome-home/box-stack.svg":J8,"../assets/items/packs/welcome-home/brick-fireplace.svg":e$,"../assets/items/packs/welcome-home/bulletin-board.svg":t$,"../assets/items/packs/welcome-home/cozy-mug.svg":n$,"../assets/items/packs/welcome-home/cream-sofa.svg":s$,"../assets/items/packs/welcome-home/fire-pit.svg":o$,"../assets/items/packs/welcome-home/glass-cabinet.svg":i$,"../assets/items/packs/welcome-home/hanging-lantern.svg":a$,"../assets/items/packs/welcome-home/knit-cushion.svg":r$,"../assets/items/packs/welcome-home/ladder-shelf.svg":l$,"../assets/items/packs/welcome-home/landscape-art.svg":c$,"../assets/items/packs/welcome-home/lattice-bench.svg":d$,"../assets/items/packs/welcome-home/leaf-wreath.svg":f$,"../assets/items/packs/welcome-home/mini-greenhouse.svg":p$,"../assets/items/packs/welcome-home/moving-box.svg":h$,"../assets/items/packs/welcome-home/picnic-basket.svg":u$,"../assets/items/packs/welcome-home/round-rug.svg":g$,"../assets/items/packs/welcome-home/sale-sign.svg":m$,"../assets/items/packs/welcome-home/sprout-pot.svg":y$,"../assets/items/packs/welcome-home/stripe-runner.svg":w$,"../assets/items/packs/welcome-home/trailing-plant.svg":b$,"../assets/items/packs/welcome-home/wall-clock.svg":v$,"../assets/items/packs/welcome-home/wh-arc-floor-lamp.svg":k$,"../assets/items/packs/welcome-home/wh-book-stack.svg":_$,"../assets/items/packs/welcome-home/wh-dresser.svg":$$,"../assets/items/packs/welcome-home/wh-fiddle-leaf-fig.svg":x$,"../assets/items/packs/welcome-home/wh-kitchen-counter.svg":M$,"../assets/items/packs/welcome-home/wh-nightstand.svg":L$,"../assets/items/packs/welcome-home/wh-pendant-lamp.svg":E$,"../assets/items/packs/welcome-home/wh-snake-plant.svg":S$,"../assets/items/packs/welcome-home/wh-string-lights.svg":T$,"../assets/items/packs/welcome-home/wh-teapot.svg":P$,"../assets/items/packs/welcome-home/wood-armchair.svg":A$,"../assets/items/packs/welcome-home/wood-bookshelf.svg":R$,"../assets/items/packs/welcome-home/wood-coffee-table.svg":C$,"../assets/items/packs/welcome-home/wood-desk.svg":I$,"../assets/items/packs/welcome-home/wood-stool.svg":O$,"../assets/items/packs/welcome-home/wooden-bed.svg":B$,"../assets/items/packs/winter/wc-bauble-garland.webp":z$,"../assets/items/packs/winter/wc-berry-wreath.webp":D$,"../assets/items/packs/winter/wc-birch-basket.webp":H$,"../assets/items/packs/winter/wc-cabin-picture.webp":W$,"../assets/items/packs/winter/wc-candle-trio.webp":V$,"../assets/items/packs/winter/wc-cane-lamp.webp":U$,"../assets/items/packs/winter/wc-cinnamon-tray.webp":Q$,"../assets/items/packs/winter/wc-cocoa-cart.webp":N$,"../assets/items/packs/winter/wc-cocoa-mug.webp":q$,"../assets/items/packs/winter/wc-cocoa-pot.webp":j$,"../assets/items/packs/winter/wc-cookie-oven.webp":F$,"../assets/items/packs/winter/wc-cookie-plate.webp":Z$,"../assets/items/packs/winter/wc-frost-bookcase.webp":G$,"../assets/items/packs/winter/wc-frosted-pine.webp":Y$,"../assets/items/packs/winter/wc-fur-bench.webp":K$,"../assets/items/packs/winter/wc-gingerbread-village.webp":X$,"../assets/items/packs/winter/wc-gingerbread.webp":J$,"../assets/items/packs/winter/wc-globe-lamp.webp":e3,"../assets/items/packs/winter/wc-holiday-tree.webp":t3,"../assets/items/packs/winter/wc-holly.webp":n3,"../assets/items/packs/winter/wc-ice-skates.webp":s3,"../assets/items/packs/winter/wc-ice-wardrobe.webp":o3,"../assets/items/packs/winter/wc-knit-armchair.webp":i3,"../assets/items/packs/winter/wc-lantern.webp":a3,"../assets/items/packs/winter/wc-log-bench.webp":r3,"../assets/items/packs/winter/wc-marshmallow-jar.webp":l3,"../assets/items/packs/winter/wc-mitten-line.webp":c3,"../assets/items/packs/winter/wc-mitten-ottoman.webp":d3,"../assets/items/packs/winter/wc-mug-shelf.webp":f3,"../assets/items/packs/winter/wc-nutcracker.webp":p3,"../assets/items/packs/winter/wc-penguin-chair.webp":h3,"../assets/items/packs/winter/wc-penguin-plush.webp":u3,"../assets/items/packs/winter/wc-peppermint-counter.webp":g3,"../assets/items/packs/winter/wc-peppermint-rug.webp":m3,"../assets/items/packs/winter/wc-pinecone-garland.webp":y3,"../assets/items/packs/winter/wc-pinecone-table.webp":w3,"../assets/items/packs/winter/wc-plaid-bed.webp":b3,"../assets/items/packs/winter/wc-plaid-sofa.webp":v3,"../assets/items/packs/winter/wc-poinsettia.webp":k3,"../assets/items/packs/winter/wc-polar-plush.webp":_3,"../assets/items/packs/winter/wc-pom-rug.webp":$3,"../assets/items/packs/winter/wc-present-stack.webp":x3,"../assets/items/packs/winter/wc-reindeer.webp":M3,"../assets/items/packs/winter/wc-sled-table.webp":L3,"../assets/items/packs/winter/wc-sleigh-planter.webp":E3,"../assets/items/packs/winter/wc-snow-globe.webp":S3,"../assets/items/packs/winter/wc-snow-mobile.webp":T3,"../assets/items/packs/winter/wc-snow-nightstand.webp":P3,"../assets/items/packs/winter/wc-snow-window.webp":A3,"../assets/items/packs/winter/wc-snowman.webp":R3,"../assets/items/packs/winter/wc-snowshoes.webp":C3,"../assets/items/packs/winter/wc-sock-hamper.webp":I3,"../assets/items/packs/winter/wc-star-topper.webp":O3,"../assets/items/packs/winter/wc-stocking-row.webp":B3,"../assets/items/packs/winter/wc-stone-hearth.webp":z3,"../assets/items/packs/winter/wc-twinkle-lamp.webp":D3,"../assets/items/packs/winter/wc-twinkle-string.webp":H3,"../assets/items/packs/winter/wc-window-seat.webp":W3,"../assets/items/packs/winter/wc-woodstove.webp":V3}),_h=Object.assign({"../assets/patterns/cottage/cc-butter-polka.svg":U3,"../assets/patterns/cottage/cc-cream-hex.svg":Q3,"../assets/patterns/cottage/cc-lavender-lattice.svg":N3,"../assets/patterns/cottage/cc-lilac-gingham.svg":q3,"../assets/patterns/cottage/cc-mint-checks.svg":j3,"../assets/patterns/cottage/cc-mint-florals.svg":F3,"../assets/patterns/cottage/cc-peach-scallops.svg":Z3,"../assets/patterns/cottage/cc-pink-plaid.svg":G3,"../assets/patterns/cottage/cc-rag-planks.svg":Y3,"../assets/patterns/cottage/cc-rose-herringbone.svg":K3,"../assets/patterns/glossy/lilac-stripes.svg":X3,"../assets/patterns/glossy/lilac-terrazzo.svg":J3,"../assets/patterns/glossy/mint-bubbles.svg":ex,"../assets/patterns/glossy/pink-check-floor.svg":tx,"../assets/patterns/glossy/pink-hearts.svg":nx,"../assets/patterns/nursery/cloud-sky.svg":sx,"../assets/patterns/nursery/pastel-planks.svg":ox,"../assets/patterns/nursery/soft-carpet.svg":ix,"../assets/patterns/nursery/star-sprinkle.svg":ax,"../assets/patterns/nursery/tiny-hearts.svg":rx,"../assets/patterns/sunny-vibes/butter-check-floor.svg":lx,"../assets/patterns/sunny-vibes/mint-checks.svg":cx,"../assets/patterns/sunny-vibes/sky-clouds.svg":dx,"../assets/patterns/sunny-vibes/sky-tiles.svg":fx,"../assets/patterns/sunny-vibes/sunny-stars.svg":px,"../assets/patterns/welcome-home/leafy-cream.svg":hx,"../assets/patterns/welcome-home/orange-gingham.svg":ux,"../assets/patterns/welcome-home/terracotta-tiles.svg":gx,"../assets/patterns/welcome-home/wood-panel.svg":mx,"../assets/patterns/welcome-home/wood-planks.svg":yx,"../assets/patterns/winter/wc-cabin-planks.webp":wx,"../assets/patterns/winter/wc-candy-stripe.webp":bx,"../assets/patterns/winter/wc-frosty-dots.webp":vx,"../assets/patterns/winter/wc-mint-pine.webp":kx,"../assets/patterns/winter/wc-peppermint-tiles.webp":_x,"../assets/patterns/winter/wc-red-plaid.webp":$x,"../assets/patterns/winter/wc-snow-knit.webp":xx,"../assets/patterns/winter/wc-snowflake-sky.webp":Mx});function Sx(e,t){if(!e||!e.trim())return[];try{const n=JSON.parse(e);return(Array.isArray(n)?n:[...Array.isArray(n?.items)?n.items:[],...Array.isArray(n?.patterns)?n.patterns:[]]).filter(o=>o&&typeof o.slug=="string"&&o.slug.trim())}catch(n){return console.warn(`[packs] ${t} is not valid JSON; ignoring`,n),[]}}const rg=Object.entries(Ex).flatMap(([e,t])=>Sx(t,e)),Tx=["svg","png","webp","SVG","PNG","WEBP"];function lg(e,t,n,s){for(const i of Tx){const a=e[`../assets/${t}/${n}/${s}.${i}`];if(a)return a}const o=Object.keys(e).find(i=>i.split("/").pop().replace(/\.\w+$/,"")===s);return o?e[o]:void 0}const $h={furniture:"furniture",appliance:"furniture",appliances:"furniture",seating:"furniture",storage:"furniture",bed:"furniture",table:"furniture",decor:"decor",rug:"decor",rugs:"decor",lighting:"decor",light:"decor",lamp:"decor",toy:"decor",toys:"decor","wall-art":"decor",art:"decor",beauty:"decor",plant:"plants",plants:"plants",flower:"plants",flowers:"plants",food:"food",drink:"food",drinks:"food",snack:"food",pet:"pets",pets:"pets",animal:"pets",animals:"pets"};function Px(e){const t=typeof e=="string"?e.trim().toLowerCase():"";return $h[t]??$h[t.replace(/s$/,"")]??"decor"}const Uo=(e,t)=>typeof e=="string"&&e.trim()?e.trim().toLowerCase():t,cg=e=>["wallpaper","floor"].includes(Uo(e.type,"")),xh=new Set,Ax=rg.filter(e=>!cg(e)).flatMap(e=>{const t=Uo(e.room,"any"),n=e.slug.trim();if(xh.has(n))return[];xh.add(n);const o=[e.svg,e.png].filter(u=>typeof u=="string").map(u=>kh["../assets/items/"+u.replace(/^\.?\//,"")]).find(Boolean)??lg(kh,"items",t,n);if(!o)return console.warn(`[packs] no image for items/${t}/${n}`),[];const i=Uo(e.pack,""),a=Uo(e.size,"medium"),r=Px(e.category),l=typeof e.gameW=="number"&&e.gameW>20&&e.gameW<800?e.gameW:vh[a]??vh.medium,c=typeof e.widthUnits=="number"&&typeof e.heightUnits=="number"&&e.widthUnits>0&&e.heightUnits>0?e.heightUnits/e.widthUnits:1,d=Math.round(l*Math.min(4,Math.max(.2,c))),f=typeof e.holdable=="boolean"?e.holdable:a!=="large"&&r!=="furniture",h=e.tag==="lighting"||/lamp|light|lantern|candle/i.test(n);return[{kind:`pack:${n}`,name:e.name||n,cat:r,rooms:[t],w:l,h:d,wall:e.wall===!0||void 0,svg:"",img:o,pack:i||void 0,holdable:f,light:h||void 0}]}),md=rg.filter(cg).flatMap(e=>{const t=Uo(e.pack,"extra"),n=e.slug.trim(),o=[e.svg,e.png].filter(i=>typeof i=="string").map(i=>_h["../assets/patterns/"+i.replace(/^\.?\//,"")]).find(Boolean)??lg(_h,"patterns",t,n);return o?[{id:`${t}/${n}`,name:e.name||n,pack:t,kind:Uo(e.type,"wallpaper"),url:o}]:(console.warn(`[packs] no image for patterns/${t}/${n}`),[])}),Mh=Object.fromEntries(md.map(e=>[e.id,e])),Cn="#5a3d5c",z=`stroke="${Cn}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,dg=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="2.4" fill="${Cn}"/><circle cx="${t}" cy="${n}" r="2.4" fill="${Cn}"/><circle cx="${e+.8}" cy="${n-.8}" r=".8" fill="#fff"/><circle cx="${t+.8}" cy="${n-.8}" r=".8" fill="#fff"/>`,fg=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/><ellipse cx="${t}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/>`,at='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>';function vc(e,t,n){return`${at}<ellipse cx="50" cy="78" rx="28" ry="16" fill="${t}" ${z}/><path d="M24 62 Q50 48 76 62 V78 Q50 92 24 78 Z" fill="${t}" ${z}/>
    <circle cx="50" cy="40" r="18" fill="${e}" ${z}/>${dg(43,57,40)}${fg(38,62,48)}<path d="M46 50 q4 3 8 0" fill="none" ${z}/>
    <path d="M38 26 Q50 16 62 26" fill="${n}" ${z}/><circle cx="50" cy="24" r="3" fill="${n}" ${z}/>`}const pg=[{kind:"crib",name:"Crib",cat:"furniture",w:260,svg:`${at}<rect x="8" y="28" width="84" height="58" rx="10" fill="#fff" ${z}/><path d="M8 42 H92 M20 28 V86 M36 28 V86 M50 28 V86 M64 28 V86 M80 28 V86" ${z}/><rect x="6" y="22" width="88" height="12" rx="6" fill="#9ad7f5" ${z}/><rect x="14" y="48" width="72" height="16" rx="6" fill="#ffe0ec"/><ellipse cx="32" cy="56" rx="8" ry="5" fill="#fff" ${z}/><ellipse cx="50" cy="56" rx="8" ry="5" fill="#c9e7ff" ${z}/>`},{kind:"bassinet",name:"Bassinet",cat:"furniture",w:170,svg:`${at}<path d="M18 78 Q8 78 10 64 L22 36 H78 L90 64 Q92 78 82 78 Z" fill="#fff" ${z}/><ellipse cx="50" cy="36" rx="32" ry="10" fill="#fff" ${z}/><path d="M22 40 Q50 52 78 40" fill="#ffe0ec" ${z}/><ellipse cx="50" cy="44" rx="16" ry="7" fill="#fff"/><path d="M30 78 L22 94 M70 78 L78 94" ${z}/><ellipse cx="50" cy="90" rx="28" ry="4" fill="none" ${z}/><path d="M14 22 Q50 4 86 22" fill="none" stroke="#9ad7f5" stroke-width="6" stroke-linecap="round"/>`},{kind:"rocker",name:"Rocker",cat:"furniture",w:190,svg:`${at}<path d="M16 88 Q50 98 84 88" fill="none" ${z}/><path d="M28 84 Q50 74 72 84" fill="#c9a0dc" ${z}/><rect x="30" y="28" width="40" height="36" rx="12" fill="#e4ccf2" ${z}/><path d="M22 48 Q18 70 30 80 H70 Q82 70 78 48 Z" fill="#f6e6ff" ${z}/><rect x="36" y="58" width="28" height="12" rx="6" fill="#ffc8dd" ${z}/><circle cx="50" cy="40" r="6" fill="#fff" opacity=".7"/>`},{kind:"changing-table",name:"Changing Table",cat:"furniture",w:230,svg:`${at}<rect x="8" y="36" width="84" height="16" rx="8" fill="#fff" ${z}/><rect x="14" y="40" width="72" height="8" rx="4" fill="#ffd6e8"/><rect x="16" y="52" width="28" height="32" rx="6" fill="#bde0fe" ${z}/><rect x="56" y="52" width="28" height="32" rx="6" fill="#c9f0d8" ${z}/><path d="M22 60 H38 M22 68 H38 M62 60 H78 M62 68 H78" ${z}/><rect x="18" y="84" width="8" height="10" rx="2" fill="${Cn}"/><rect x="74" y="84" width="8" height="10" rx="2" fill="${Cn}"/><rect x="34" y="22" width="18" height="12" rx="3" fill="#ffe0ec" ${z}/><rect x="54" y="24" width="16" height="10" rx="3" fill="#fff6d8" ${z}/>`},{kind:"toy-bin",name:"Toy Bin",cat:"furniture",w:150,svg:`${at}<path d="M14 40 H86 L78 90 H22 Z" fill="#ffd166" ${z}/><rect x="10" y="32" width="80" height="14" rx="7" fill="#ffe08a" ${z}/><circle cx="36" cy="58" r="8" fill="#ff8fab" ${z}/><rect x="50" y="50" width="16" height="16" rx="3" fill="#8ecae6" ${z}/><circle cx="62" cy="70" r="6" fill="#90e0a8" ${z}/>`},{kind:"baby-shelf",name:"Bookshelf",cat:"furniture",w:150,svg:`${at}<rect x="14" y="8" width="72" height="84" rx="8" fill="#f3d2b5" ${z}/><path d="M14 36 H86 M14 64 H86" ${z}/><rect x="22" y="14" width="8" height="18" rx="2" fill="#ff8fab" ${z}/><rect x="32" y="18" width="8" height="14" rx="2" fill="#8ecae6" ${z}/><rect x="44" y="14" width="8" height="18" rx="2" fill="#ffd166" ${z}/><rect x="58" y="16" width="8" height="16" rx="2" fill="#90e0a8" ${z}/><circle cx="34" cy="50" r="7" fill="#ffadad" ${z}/><rect x="50" y="44" width="18" height="14" rx="3" fill="#c9a0dc" ${z}/><ellipse cx="40" cy="78" rx="14" ry="8" fill="#fff" ${z}/>`},{kind:"doll-rose",name:"Rose Doll",cat:"decor",w:80,svg:vc("#f6d3b0","#ffc2d4","#ff8fab")},{kind:"doll-honey",name:"Honey Doll",cat:"decor",w:80,svg:vc("#e0ac69","#cdeffd","#ffd166")},{kind:"doll-cocoa",name:"Cocoa Doll",cat:"decor",w:80,svg:vc("#8d5524","#d8f3dc","#c9a0dc")},{kind:"crib-mobile",name:"Crib Mobile",cat:"decor",w:150,wall:!0,svg:`<path d="M50 6 V22" ${z}/><ellipse cx="50" cy="28" rx="28" ry="8" fill="#fff" ${z}/><path d="M28 32 V48 M50 36 V58 M72 32 V48" ${z}/><circle cx="28" cy="56" r="8" fill="#ffd166" ${z}/><circle cx="50" cy="68" r="9" fill="#ff8fab" ${z}/><path d="M72 56 l6 4 -6 4 -6 -4 z" fill="#8ecae6" ${z}/><circle cx="28" cy="54" r="2" fill="#fff"/><circle cx="50" cy="66" r="2" fill="#fff"/>`},{kind:"night-light",name:"Night Light",cat:"decor",w:70,svg:`${at}<circle cx="50" cy="46" r="22" fill="#fff6c8" ${z}/><circle cx="50" cy="46" r="12" fill="#ffe08a"/><path d="M50 18 V10 M30 26 L24 20 M70 26 L76 20 M24 46 H14 M86 46 H76" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/><rect x="40" y="70" width="20" height="16" rx="4" fill="#c9a0dc" ${z}/><circle cx="50" cy="78" r="3" fill="#ff8fab"/>`},{kind:"bunny-plush",name:"Bunny Plush",cat:"decor",w:90,svg:`${at}<ellipse cx="34" cy="28" rx="8" ry="18" fill="#fff" ${z}/><ellipse cx="66" cy="28" rx="8" ry="18" fill="#fff" ${z}/><ellipse cx="34" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="66" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="50" cy="74" rx="26" ry="18" fill="#fff" ${z}/><circle cx="50" cy="50" r="20" fill="#fff" ${z}/>${dg(43,57,50)}<path d="M47 58 l3 3 3 -3" fill="none" ${z}/>${fg(38,62,58)}`},{kind:"stacking-rings",name:"Stacking Rings",cat:"decor",w:70,svg:`${at}<ellipse cx="50" cy="86" rx="26" ry="7" fill="#ff8fab" ${z}/><ellipse cx="50" cy="74" rx="20" ry="6" fill="#ffd166" ${z}/><ellipse cx="50" cy="64" rx="15" ry="5" fill="#8ecae6" ${z}/><ellipse cx="50" cy="56" rx="10" ry="4" fill="#90e0a8" ${z}/><rect x="46" y="28" width="8" height="40" rx="4" fill="#c9a0dc" ${z}/><circle cx="50" cy="24" r="7" fill="#ffb3c6" ${z}/>`},{kind:"rattle",name:"Rattle",cat:"decor",w:60,svg:`${at}<circle cx="38" cy="40" r="20" fill="#ffd166" ${z}/><circle cx="32" cy="34" r="5" fill="#fff" opacity=".7"/><rect x="50" y="52" width="10" height="28" rx="5" fill="#ff8fab" ${z} transform="rotate(-20 55 66)"/><circle cx="68" cy="82" r="8" fill="#8ecae6" ${z}/>`},{kind:"baby-bottle",name:"Baby Bottle",cat:"food",w:55,svg:`${at}<rect x="36" y="8" width="28" height="12" rx="4" fill="#c9a0dc" ${z}/><rect x="42" y="18" width="16" height="8" fill="#fff" ${z}/><path d="M30 30 H70 L66 88 Q50 96 34 88 Z" fill="#e7f6ff" ${z}/><path d="M32 48 H68 L66 80 Q50 88 34 80 Z" fill="#fff" opacity=".85"/><rect x="34" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="46" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="58" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/>`},{kind:"blocks",name:"Baby Blocks",cat:"decor",w:90,svg:`${at}<rect x="14" y="58" width="28" height="28" rx="4" fill="#ff8fab" ${z}/><rect x="40" y="46" width="28" height="28" rx="4" fill="#ffd166" ${z}/><rect x="28" y="28" width="26" height="26" rx="4" fill="#8ecae6" ${z}/><path d="M20 72 H36 M48 60 H62 M34 42 H48" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"rocking-horse",name:"Little Rocking Horse",cat:"decor",w:180,svg:`${at}<path d="M12 86 Q50 98 88 82" fill="none" ${z}/><ellipse cx="48" cy="62" rx="26" ry="14" fill="#e6b88a" ${z}/><path d="M62 58 L84 40 Q92 36 90 48 L74 64 Z" fill="#f0d0b0" ${z}/><circle cx="82" cy="42" r="3" fill="${Cn}"/><path d="M70 36 L76 24 L84 34" fill="#ff8fab" ${z}/><rect x="36" y="48" width="16" height="8" rx="3" fill="#c9a0dc" ${z}/><path d="M30 70 L22 84 M58 72 L66 86" ${z}/>`},{kind:"music-box",name:"Music Box",cat:"decor",w:80,svg:`${at}<rect x="22" y="40" width="56" height="46" rx="8" fill="#f6d6ff" ${z}/><path d="M22 40 L50 22 L78 40" fill="#e4ccf2" ${z}/><circle cx="50" cy="64" r="10" fill="#fff" ${z}/><path d="M50 58 V70 M44 64 H56" ${z}/><circle cx="50" cy="30" r="4" fill="#ffd166" ${z}/>`},{kind:"cloud-rug",name:"Nursery Cloud Rug",cat:"decor",w:340,svg:`<ellipse cx="50" cy="78" rx="46" ry="16" fill="#e7f6ff" ${z}/><circle cx="28" cy="70" r="16" fill="#f4fbff" ${z}/><circle cx="50" cy="62" r="18" fill="#fff" ${z}/><circle cx="72" cy="70" r="16" fill="#f4fbff" ${z}/><ellipse cx="50" cy="78" rx="30" ry="8" fill="#d6f0ff"/>`},{kind:"play-mat",name:"Play Mat",cat:"decor",w:300,svg:`<rect x="6" y="62" width="88" height="30" rx="14" fill="#ffe0ec" ${z}/><path d="M50 70 C42 62 30 64 34 74 C38 82 50 88 50 88 C50 88 62 82 66 74 C70 64 58 62 50 70 Z" fill="#ff8fab" ${z}/><circle cx="22" cy="76" r="5" fill="#ffd166" ${z}/><circle cx="78" cy="76" r="5" fill="#8ecae6" ${z}/>`},{kind:"moon-art",name:"Moon and Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M58 18 A28 28 0 1 0 58 78 A18 18 0 1 1 58 18 Z" fill="#fff3b0" ${z}/><path d="M22 30 l3 7 7 1 -5 5 1 7 -6 -4 -6 4 1 -7 -5 -5 7 -1 z" fill="#ffd166" ${z}/><path d="M78 58 l2 5 5 1 -4 4 1 5 -4 -3 -4 3 1 -5 -4 -4 5 -1 z" fill="#c9e7ff" ${z}/>`},{kind:"nursery-dresser",name:"Nursery Dresser",cat:"furniture",w:170,svg:`${at}<rect x="14" y="22" width="72" height="68" rx="8" fill="#f6e2c4" ${z}/><path d="M14 44 H86 M14 66 H86" ${z}/><circle cx="50" cy="34" r="3" fill="${Cn}"/><circle cx="50" cy="55" r="3" fill="${Cn}"/><circle cx="50" cy="76" r="3" fill="${Cn}"/><rect x="30" y="10" width="18" height="12" rx="3" fill="#ffc2d4" ${z}/><rect x="52" y="12" width="16" height="10" rx="3" fill="#c9e7ff" ${z}/>`},{kind:"nursery-lamp",name:"Nursery Lamp",cat:"decor",w:80,svg:`${at}<path d="M28 42 L36 12 H64 L72 42 Z" fill="#fff6c8" ${z}/><rect x="46" y="42" width="8" height="40" rx="4" fill="#c9a0dc" ${z}/><ellipse cx="50" cy="88" rx="20" ry="6" fill="#b388d6" ${z}/><circle cx="46" cy="24" r="3" fill="#fff" opacity=".85"/><path d="M34 20 q6 -8 4 -2" fill="none" stroke="#ffd166" stroke-width="2"/>`},{kind:"nursery-curtains",name:"Curtains",cat:"decor",w:180,wall:!0,svg:`<rect x="16" y="10" width="68" height="50" rx="6" fill="#cfefff" ${z}/><path d="M50 10 V60 M16 34 H84" ${z}/><path d="M8 8 Q18 28 10 92" fill="#ffd6e8" ${z}/><path d="M92 8 Q82 28 90 92" fill="#ffd6e8" ${z}/><rect x="6" y="6" width="88" height="8" rx="3" fill="#f3d2b5" ${z}/>`}],ct="#5a3d5c",M=(e=3.5)=>`stroke="${ct}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function $e(e,t,n){const s=Math.round(t*.62);return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="3.4" fill="${ct}" opacity=".08"/><ellipse cx="${e}" cy="${(n+1.2).toFixed(1)}" rx="${s}" ry="1.55" fill="${ct}" opacity=".12"/>`}function re(e,t=2.2){return`<path d="${e}" fill="none" stroke="#fff" stroke-width="${t}" stroke-linecap="round" opacity=".75"/>`}function ft(e,t=1.15){return`<path d="${e}" fill="none" stroke="${ct}" stroke-width="${t}" stroke-linecap="round" opacity=".2"/>`}function Af(e,t,n=".7"){return`<radialGradient id="${e}" cx="40%" cy="40%" r="60%"><stop offset="0" stop-color="${t}" stop-opacity="${n}"/><stop offset="1" stop-color="${t}" stop-opacity="0"/></radialGradient>`}function Rf(e,t,n){return`<linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${n}"/></linearGradient>`}function Rx(){return typeof location>"u"?!1:/(?:^|[?&])yard=1(?:&|$)/.test(location.search)}function yd(){return typeof location>"u"?"":new URLSearchParams(location.search).get("shot")||""}const Cx={v:1,hair:"pigtails",hairC:"#a0522d",skin:"#f6d2b5",eyes:"big",eyeC:"#5a321c",freckles:!0,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"skirt",bottomC:"#c9a0dc",dress:"sundress",dressC:"#ff8fab",shoes:"maryjanes",shoesC:"#ffd166",acc:["bow"],accC:"#ff7aa8"},Ix=()=>ia(Cx),wd=864,bd={x:1084,y:578,flip:!0},ms={x:1184,y:255},Lh={x:1146,y:578},vd={x:940,y:540,flip:!0},Ur=1160,hg={x:824,y:398,w:96,h:230},ug={x:996,y:372,w:82,h:196},Ox=[{kind:"yard-swing",x:1266,y:580,scale:132/280},{kind:"lemonade-cart",x:1254,y:471},{kind:"sandbox",x:940,y:482},{kind:"picnic-blanket",x:939,y:420}];function xe(e){return{kind:e.kind,name:e.name,cat:e.cat,w:e.w,h:e.h,vb:e.vb,wall:e.wall,holdable:e.holdable??!1,rooms:["backyard"],svg:e.svg}}const Bx=xe({kind:"yard-swing",name:"A-Frame Swing",cat:"furniture",w:280,h:215,vb:"0 0 130 100",svg:`${$e(65,54,96)}
    <path d="M34 18 L50 18 L20 94 H4 Z" fill="#f3d2aa" ${M()}/>
    <path d="M42 24 L50 18 L18 70 H28 Z" fill="#d4a373"/>
    <path d="M80 18 L96 18 L126 94 H110 Z" fill="#e7c49a" ${M()}/>
    <path d="M108 22 L96 18 L126 94 H118 Z" fill="#c99366"/>
    ${ft("M16 50 l8 28 M112 48 l8 30")}
    <rect x="22" y="6" width="86" height="14" rx="2" fill="#f6e0c4" ${M()}/>
    <rect x="86" y="9" width="18" height="8" rx="1" fill="#d4a373"/>
    <rect x="28" y="16" width="74" height="4" fill="#e7c49a"/>
    ${re("M28 10 h30")}
    <g class="swingSeat">
      <rect x="48" y="74" width="34" height="7" rx="1" fill="#f3d2aa" ${M(2.2)}/>
      <rect x="72" y="76" width="8" height="4" fill="#d4a373"/>
      <path d="M54 20 V78 M76 20 V78" fill="none" ${M(2.2)}/>
      ${re("M52 76 h14")}
    </g>`}),zx=xe({kind:"sandbox",name:"Sandbox",cat:"furniture",w:120,h:54,vb:"0 0 160 72",svg:`${$e(80,64,68)}
    <path d="M108 38 L146 26 L146 52 L108 64 Z" fill="#e7c49a" ${M()}/>
    <path d="M126 36 L142 28 L142 48 L126 56 Z" fill="#c99366"/>
    <path d="M12 40 H108 V64 H12 Z" fill="#f3d2aa" ${M()}/>
    <path d="M12 40 L36 18 L146 18 L108 40 Z" fill="#f6e0c4" ${M()}/>
    <path d="M112 20 L142 20 L108 38 L90 38 Z" fill="#d4a373"/>
    <path d="M34 36 L52 24 L122 24 L100 36 Z" fill="#ffe08a" ${M(2.2)}/>
    <path d="M98 26 L118 26 L100 34 L86 34 Z" fill="#f0c36a"/>
    ${ft("M48 30 q8 2 6 5 M68 28 q10 2 8 6 M58 34 h16")}
    <path d="M76 30 L100 36 L94 48 L70 42 Z" fill="#d7e6f2" ${M(2.2)}/>
    <path d="M88 34 L98 38 L94 44 L84 40 Z" fill="#b7c9d6"/>
    <path d="M52 8 L64 4 L90 34 L78 38 Z" fill="#f0d2b0" ${M()}/>
    <path d="M64 8 L72 6 L90 32 L82 34 Z" fill="#d4a373"/>
    <path d="M46 2 H66 V9 H46 Z" fill="#c99366" ${M(2)}/>
    ${re("M18 44 h26")}
    ${re("M44 22 h22")}`}),Dx=xe({kind:"little-slide",name:"Little Slide",cat:"furniture",w:150,h:188,vb:"0 0 110 140",svg:`${$e(56,44,134)}
    <path d="M50 34 H72 C94 36 102 56 98 82 L92 122 H70 L76 84 C78 60 72 46 52 44 Z" fill="#ffb3c6" ${M()}/>
    <path d="M72 38 C94 42 104 62 100 86 L94 122 H86 L92 86 C94 64 86 48 72 46 Z" fill="#e45d88"/>
    <rect x="14" y="34" width="8" height="96" rx="2" fill="#f3d2aa" ${M()}/>
    <rect x="36" y="34" width="8" height="96" rx="2" fill="#e7c49a" ${M()}/>
    <rect x="40" y="40" width="3" height="84" fill="#c99366"/>
    <rect x="14" y="52" width="30" height="5" rx="1" fill="#f6e0c4" ${M(2.2)}/>
    <rect x="14" y="70" width="30" height="5" rx="1" fill="#f6e0c4" ${M(2.2)}/>
    <rect x="14" y="88" width="30" height="5" rx="1" fill="#f6e0c4" ${M(2.2)}/>
    <rect x="14" y="106" width="30" height="5" rx="1" fill="#f6e0c4" ${M(2.2)}/>
    <rect x="6" y="18" width="56" height="22" rx="3" fill="#f3d2aa" ${M()}/>
    <rect x="6" y="34" width="56" height="6" fill="#d4a373"/>
    <path d="M48 20 H62 V40 H48 Z" fill="#c99366"/>
    ${re("M12 24 h22")}
    <rect x="12" y="6" width="5" height="16" rx="1" fill="#f0d2b0" ${M(2.2)}/>
    <rect x="40" y="6" width="5" height="16" rx="1" fill="#e7c49a" ${M(2.2)}/>
    <path d="M14 8 H43" fill="none" ${M(2.2)}/>
    <rect x="80" y="116" width="7" height="16" rx="1" fill="#f3d2aa" ${M(2)}/>
    ${re("M58 42 C74 48 86 66 86 88")}
    ${ft("M80 64 q4 16 2 28")}`}),Hx=xe({kind:"yard-bench",name:"Garden Bench",cat:"furniture",w:140,h:100,vb:"0 0 140 100",svg:`${$e(70,58,96)}
    <rect x="10" y="8" width="12" height="86" rx="2" fill="#f3d2aa" ${M()}/>
    <rect x="118" y="8" width="12" height="86" rx="2" fill="#e7c49a" ${M()}/>
    <rect x="124" y="12" width="5" height="76" fill="#c99366"/>
    <rect x="28" y="52" width="10" height="42" rx="2" fill="#f0d2b0" ${M()}/>
    <rect x="102" y="52" width="10" height="42" rx="2" fill="#d4a373" ${M()}/>
    <rect x="108" y="56" width="3" height="32" fill="#c99366"/>
    <rect x="18" y="10" width="104" height="8" rx="1" fill="#f6e0c4" ${M(2.2)}/>
    <rect x="18" y="20" width="104" height="8" rx="1" fill="#f3d2aa" ${M(2.2)}/>
    <rect x="18" y="30" width="104" height="8" rx="1" fill="#f3d2aa" ${M(2.2)}/>
    <rect x="18" y="40" width="104" height="8" rx="1" fill="#e7c49a" ${M(2.2)}/>
    <rect x="18" y="48" width="104" height="7" rx="1" fill="#f6e0c4" ${M(2.2)}/>
    <rect x="18" y="57" width="104" height="7" rx="1" fill="#f3d2aa" ${M(2.2)}/>
    <rect x="18" y="66" width="104" height="7" rx="1" fill="#e7c49a" ${M(2.2)}/>
    <rect x="108" y="12" width="10" height="5" fill="#d4a373"/>
    <rect x="108" y="22" width="10" height="5" fill="#c99366"/>
    <rect x="108" y="50" width="10" height="4" fill="#d4a373"/>
    <rect x="108" y="68" width="10" height="4" fill="#c99366"/>
    <path d="M10 46 H40 V56 H10 Z" fill="#f6e0c4" ${M()}/>
    <path d="M100 46 H130 V56 H100 Z" fill="#e7c49a" ${M()}/>
    <path d="M116 48 H128 V54 H116 Z" fill="#c99366"/>
    ${re("M22 13 h28")}
    ${re("M14 48 h16")}
    ${ft("M36 24 h48 M36 34 h44 M34 52 h52 M34 62 h46")}`}),Wx=xe({kind:"lemonade-cart",name:"Lemonade Cart",cat:"furniture",w:108,h:121,vb:"0 0 100 112",svg:`${$e(50,40,106)}
    <circle cx="30" cy="96" r="11" fill="${ct}" ${M(2.2)}/><circle cx="30" cy="96" r="4.5" fill="#ffd166"/>
    <circle cx="72" cy="96" r="11" fill="${ct}" ${M(2.2)}/><circle cx="72" cy="96" r="4.5" fill="#ffd166"/>
    <rect x="18" y="92" width="66" height="5" rx="2" fill="#c99366" ${M(2)}/>
    <rect x="16" y="46" width="68" height="46" rx="3" fill="#fff6ea" ${M()}/>
    <rect x="66" y="50" width="14" height="38" fill="#f0d2a4"/>
    ${ft("M28 56 v28 M42 56 v28 M56 56 v28")}
    ${re("M20 52 v16")}
    <rect x="12" y="38" width="76" height="12" rx="2" fill="#ffe08a" ${M()}/>
    <rect x="66" y="40" width="18" height="8" fill="#f0c45c"/>
    <path d="M14 40 L22 14 H80 L88 40 Z" fill="#ff8fab" ${M()}/>
    <path d="M34 16 L38 40 H50 L46 15 Z" fill="#fff4f7"/>
    <path d="M58 15 L62 40 H74 L70 15 Z" fill="#fff4f7"/>
    <path d="M72 16 H80 L88 40 H76 Z" fill="#e45d88"/>
    ${re("M26 20 h18")}
    <path d="M28 52 H44 L42 72 H30 Z" fill="#fff" ${M(2)}/>
    <path d="M30 58 H42 L41 72 H31 Z" fill="#ffe566"/>
    <path d="M28 54 L22 58 L28 62 Z" fill="#fff" ${M(2)}/>
    <path d="M44 56 Q52 60 44 70" fill="none" ${M(2)}/>
    <path d="M56 60 H68 L66 72 H58 Z" fill="#fff" ${M(2)}/>
    <path d="M58 64 H66 L65 72 H59 Z" fill="#ffe566"/>
    <circle cx="78" cy="64" r="7" fill="#ffe566" ${M(2)}/>
    <path d="M78 58 v12 M72 64 h12" fill="none" stroke="#e0a83a" stroke-width="1.3"/>`}),Vx=xe({kind:"sun-lounger",name:"Sun Lounger",cat:"furniture",w:168,h:86,vb:"0 0 170 90",svg:`${$e(86,68,84)}
    <path d="M16 66 H28 L32 82 H12 Z" fill="#f3d2aa" ${M()}/>
    <path d="M126 64 H140 L146 82 H120 Z" fill="#d4a373" ${M()}/>
    <path d="M136 68 H142 L146 80 H138 Z" fill="#c99366"/>
    <path d="M12 52 H156 V64 H12 Z" fill="#f3d2aa" ${M()}/>
    <path d="M122 54 H154 V62 H122 Z" fill="#d4a373"/>
    <path d="M28 34 H36 L42 52 H32 Z" fill="#e7c49a" ${M()}/>
    <path d="M50 44 H150 L154 58 H54 Z" fill="#ffd4e2" ${M()}/>
    <path d="M128 48 H150 L154 58 H132 Z" fill="#e888a8"/>
    <path d="M18 6 L60 48 L48 58 L8 16 Z" fill="#ffb3c6" ${M()}/>
    <path d="M38 34 L54 48 L48 56 L30 42 Z" fill="#e45d88"/>
    <ellipse cx="22" cy="14" rx="11" ry="7" fill="#fff" ${M(2.2)}/>
    <path d="M22 8 H30 A7 7 0 0 1 30 20 H22 Z" fill="#ffd0e0"/>
    ${re("M22 12 L50 40")}
    ${ft("M26 22 L52 46")}`}),Ux=xe({kind:"splash-pool",name:"Splash Pool",cat:"furniture",w:176,h:96,vb:"0 0 170 96",svg:`<defs>${Rf("ydpoolW","#f3fbff","#7ec8e3")}</defs>
    ${$e(85,72,90)}
    <ellipse cx="85" cy="58" rx="74" ry="28" fill="#8ecae6" ${M()}/>
    <path d="M22 52 Q40 34 78 40" fill="none" stroke="#ff8fab" stroke-width="16" stroke-linecap="round"/>
    <path d="M100 36 Q138 38 152 58" fill="none" stroke="#ffd166" stroke-width="14" stroke-linecap="round"/>
    <path d="M18 66 C22 82 50 90 85 90 C120 90 152 82 154 66 C148 78 120 84 85 84 C50 84 24 78 18 66 Z" fill="#5aa9c6"/>
    <ellipse cx="85" cy="54" rx="48" ry="16" fill="url(#ydpoolW)" ${M(2.2)}/>
    ${re("M36 50 q20 -10 36 0")}
    <circle cx="128" cy="48" r="4" fill="#fff" ${M(1.6)}/>
    <circle cx="128" cy="48" r="1.6" fill="#8ecae6"/>
    <path d="M70 46 q3 -8 1 0 M96 42 q4 -9 1 1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`}),Qx=xe({kind:"picket-gate",name:"Picket Gate",cat:"furniture",w:110,h:150,vb:"0 0 100 136",svg:`${$e(50,38,130)}
    <rect x="6" y="16" width="12" height="110" rx="2" fill="#f7fff8" ${M()}/>
    <rect x="82" y="16" width="12" height="110" rx="2" fill="#e7f6ea" ${M()}/>
    <rect x="88" y="20" width="5" height="100" fill="#c5e0c8"/>
    <rect x="4" y="40" width="16" height="6" rx="1" fill="#c99366" ${M(2)}/>
    <rect x="4" y="96" width="16" height="6" rx="1" fill="#c99366" ${M(2)}/>
    <rect x="16" y="38" width="68" height="8" rx="2" fill="#fff" ${M(2.2)}/>
    <rect x="16" y="86" width="68" height="8" rx="2" fill="#fff" ${M(2.2)}/>
    <path d="M20 90 L28 98 L80 46 L72 38 Z" fill="#f7fff8" ${M(2.2)}/>
    <path d="M26 30 L32 14 L38 30 V112 H26 Z" fill="#fff" ${M(2.2)}/>
    <path d="M44 30 L50 14 L56 30 V112 H44 Z" fill="#f7fff8" ${M(2.2)}/>
    <path d="M62 30 L68 14 L74 30 V112 H62 Z" fill="#e7f6ea" ${M(2.2)}/>
    <path d="M68 22 L74 16 L74 108 H68 Z" fill="#c5e0c8"/>
    ${re("M28 36 v20")}
    <rect x="74" y="60" width="16" height="5" rx="1" fill="#c99366" ${M(2)}/>
    <circle cx="86" cy="62" r="2.6" fill="#ffd166" ${M(1.8)}/>`});function Nx(){let e="";for(let t=0;t<6;t++)for(let n=0;n<13;n++)(t+n)%2===0&&(e+=`<rect x="${n*15-6}" y="${t*10}" width="15" height="10" fill="#ff8fab"/>`);return e}const qx=xe({kind:"picnic-blanket",name:"Picnic Blanket",cat:"decor",w:110,h:36,vb:"0 0 180 59",svg:`<defs><clipPath id="ydging"><path d="M22 20 L156 12 L174 44 L36 52 Z"/></clipPath></defs>
    ${$e(96,74,54)}
    <path d="M22 20 L156 12 L174 44 L36 52 Z" fill="#fff0f5" ${M()}/>
    <g clip-path="url(#ydging)">${Nx()}</g>
    <path d="M148 14 L170 42 L160 46 L138 18 Z" fill="#e45d88"/>
    <path d="M96 30 L128 26 L134 42 L100 46 Z" fill="#f3d2aa" ${M(2)}/>
    <path d="M120 28 L128 26 L134 42 L126 43 Z" fill="#c99366"/>
    <path d="M104 30 Q114 14 126 28" fill="none" ${M(2.2)}/>
    ${ft("M104 34 h22 M104 38 h24",1)}
    ${re("M34 26 l28 -3")}`});function bi(e,t,n,s){return`<path d="M${e-1.5} ${t+16} H${e+1.5} V${t+40} H${e-1.5} Z" fill="#3d9a68"/>
    <path d="M${e} ${t+24} C${e-16} ${t+18} ${e-14} ${t+36} ${e-1} ${t+34}" fill="#74c69d" ${M(1.6)}/>
    <path d="M${e} ${t+22} C${e+16} ${t+16} ${e+12} ${t+36} ${e+1} ${t+32}" fill="#52b788"/>
    <path d="M${e} ${t+18} C${e-10} ${t+8} ${e-8} ${t} ${e} ${t+6} C${e+8} ${t} ${e+10} ${t+8} ${e} ${t+18} Z" fill="${n}" ${M(1.8)}/>
    <path d="M${e+1} ${t+6} C${e+7} ${t+4} ${e+8} ${t+13} ${e+1} ${t+15} Z" fill="${s}"/>`}const jx=xe({kind:"tulip-bed",name:"Tulip Bed",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`${$e(70,56,86)}
    <path d="M10 56 H130 L120 82 H20 Z" fill="#f0d2b0" ${M()}/>
    <path d="M96 58 H126 L118 78 H92 Z" fill="#d4a373"/>
    <path d="M16 56 Q70 42 124 56 Q70 64 16 56 Z" fill="#c4a484" ${M(2.2)}/>
    ${re("M22 60 h24")}
    ${bi(32,16,"#ff8fab","#e45d88")}
    ${bi(54,8,"#ffd166","#e0a83a")}
    ${bi(76,4,"#ff7096","#e04578")}
    ${bi(98,12,"#fff","#ffd0e0")}
    ${bi(118,18,"#c9a0dc","#b388d6")}`}),Fx=xe({kind:"birdbath",name:"Birdbath",cat:"decor",w:84,h:126,vb:"0 0 80 120",svg:`<defs>${Rf("ydbathW","#f3fbff","#8ecae6")}</defs>
    ${$e(40,28,114)}
    <ellipse cx="40" cy="106" rx="20" ry="7" fill="#e7eef2" ${M()}/>
    <path d="M30 46 H50 C56 70 58 86 52 104 H28 C22 86 24 70 30 46 Z" fill="#f4f7f8" ${M()}/>
    <path d="M42 52 H50 C54 72 54 88 50 100 H44 Z" fill="#c5d0d6"/>
    ${re("M33 62 v22")}
    <ellipse cx="40" cy="40" rx="32" ry="13" fill="#f7fafb" ${M()}/>
    <path d="M40 28 C66 28 72 38 72 42 C72 52 58 54 40 54 C60 54 68 48 68 42 C68 36 58 32 40 34 Z" fill="#d5dee4"/>
    <ellipse cx="40" cy="38" rx="22" ry="7" fill="url(#ydbathW)" ${M(2.2)}/>
    ${re("M22 36 q10 -4 18 0")}
    <path d="M48 30 L40 24 L42 34 Z" fill="#f0c45c" ${M(1.6)}/>
    <ellipse cx="56" cy="28" rx="11" ry="6" fill="#ffd166" ${M(1.8)}/>
    <circle cx="66" cy="24" r="4.5" fill="#ffe08a" ${M(1.6)}/>
    <path d="M70 24 L77 26 L70 28 Z" fill="#e07a3f"/>
    <circle cx="67" cy="23" r="1" fill="${ct}"/>
    <path d="M54 32 V40 M60 32 V40" fill="none" stroke="#c99366" stroke-width="1.4" stroke-linecap="round"/>`}),Zx=xe({kind:"lily-pond",name:"Lily Pond",cat:"decor",w:170,h:90,vb:"0 0 170 90",svg:`<defs>${Rf("ydpondW","#eaf6ff","#5aa9e6")}</defs>
    ${$e(85,70,84)}
    <ellipse cx="85" cy="54" rx="74" ry="28" fill="#c4a484" ${M()}/>
    <path d="M85 30 C142 32 158 48 158 56 C158 72 126 82 85 82 C124 80 150 68 150 56 C150 44 126 36 85 36 Z" fill="#a88462"/>
    <ellipse cx="85" cy="52" rx="62" ry="20" fill="url(#ydpondW)" ${M(2.2)}/>
    ${re("M40 46 q24 -8 42 2")}
    <path fill="#95d5b2" ${M(2)} fill-rule="evenodd" d="M58 54 m-16 0 a16 7 0 1 0 32 0 a16 7 0 1 0 -32 0 M58 50 L72 54 L58 58 Z"/>
    <path d="M66 50 L74 54 L66 56 Z" fill="#3d9a68"/>
    <path fill="#74c69d" ${M(2)} fill-rule="evenodd" d="M112 48 m-18 0 a18 8 0 1 0 36 0 a18 8 0 1 0 -36 0 M112 42 L128 48 L112 54 Z"/>
    <path d="M40 58 q-4 -16 2 -22 q6 8 2 16" fill="#52b788" ${M(1.6)}/>
    <path d="M108 40 l2 -8 l4 6 l4 -7 l2 8 l-4 3 z" fill="#ff8fab" ${M(1.6)}/>
    <path d="M112 36 l3 -6 l2 5 l3 -5 l1 6 z" fill="#fff" ${M(1.4)}/>
    <circle cx="112" cy="40" r="2.4" fill="#ffd166"/>`});function vi(e,t,n,s,o=10){return`<path d="M${e} ${t-o-8} V${t-o}" fill="none" ${M(2.2)}/>
    <rect x="${e-4}" y="${t-o-2}" width="8" height="5" rx="1" fill="#c99366" ${M(1.8)}/>
    <circle cx="${e}" cy="${t}" r="${o}" fill="${n}" ${M()}/>
    <path d="M${e+1} ${t-o+3} H${e+o-1} V${t+o-3} H${e+2} Z" fill="${s}"/>
    ${re(`M${e-o+3} ${t-2} q2 -3 4 0`)}`}const Gx=xe({kind:"patio-lights",name:"Patio Lights",cat:"decor",w:190,h:70,vb:"0 0 180 70",wall:!0,svg:`<path d="M8 12 Q50 32 90 12 Q130 32 172 14" fill="none" ${M()}/>
    ${vi(28,40,"#fff6c8","#f0c45c")}
    ${vi(64,46,"#ffc2d4","#e45d88")}
    ${vi(100,36,"#fff1c2","#f0c45c")}
    ${vi(136,46,"#c9f1ff","#7eb4dc")}
    ${vi(164,34,"#ffd0e8","#e888a8",8)}`}),Yx=xe({kind:"toadstool-light",name:"Toadstool Light",cat:"decor",w:70,h:84,vb:"0 0 80 96",svg:`<defs>${Af("ydtoadG","#ffe7a0",".9")}</defs>
    ${$e(40,26,90)}
    <ellipse cx="40" cy="70" rx="18" ry="8" fill="url(#ydtoadG)"/>
    <path d="M32 58 H48 L52 84 H28 Z" fill="#fff7f8" ${M()}/>
    <path d="M42 60 H48 L50 82 H43 Z" fill="#f0d8cc"/>
    <path d="M6 58 Q40 8 74 58 Q40 74 6 58 Z" fill="#ff8fab" ${M()}/>
    <path d="M44 22 Q66 16 72 54 Q52 66 44 52 Z" fill="#e45d88"/>
    ${re("M18 48 q16 -12 26 -2")}
    <circle cx="26" cy="48" r="5" fill="#fff" ${M(2)}/>
    <circle cx="44" cy="40" r="6" fill="#fff" ${M(2)}/>
    <circle cx="36" cy="56" r="3.5" fill="#fff" ${M(2)}/>
    <path d="M22 52 h6 M40 46 h8" fill="none" stroke="#ffd0e0" stroke-width="1.2" stroke-linecap="round"/>`}),Kx=xe({kind:"stepping-stones",name:"Stepping Stones",cat:"decor",w:160,h:64,vb:"0 0 160 70",svg:`${$e(80,66,64)}
    <path d="M8 40 L24 28 L50 32 L54 50 L30 58 L10 52 Z" fill="#f7f4ef" ${M()}/>
    <path d="M34 36 L50 32 L54 50 L36 54 Z" fill="#d9d3cc"/>
    <path d="M56 44 L78 32 L108 36 L112 56 L80 64 L58 58 Z" fill="#f4f1ec" ${M()}/>
    <path d="M86 40 L108 36 L112 56 L90 58 Z" fill="#d4cdc4"/>
    <path d="M110 30 L128 20 L154 28 L150 48 L124 52 L108 42 Z" fill="#e7e2dc" ${M()}/>
    <path d="M132 26 L152 28 L148 46 L130 44 Z" fill="#d0c9c2"/>
    ${re("M16 38 q8 -4 14 0")}
    ${ft("M22 44 h12 M72 48 h16 M124 36 h12")}`}),Xx=xe({kind:"pinwheel",name:"Pinwheel",cat:"decor",w:56,h:90,vb:"0 0 70 100",holdable:!0,svg:`${$e(35,16,96)}
    <rect x="31" y="44" width="6" height="50" rx="2" fill="#c99366" ${M()}/>
    <rect x="34" y="48" width="3" height="42" fill="#c99366"/>
    <path d="M34 40 L34 8 Q54 16 48 36 Z" fill="#ff8fab" ${M(2.2)}/>
    <path d="M42 18 Q50 28 36 34 Z" fill="#e45d88"/>
    <path d="M34 40 L62 32 Q58 54 40 50 Z" fill="#ffd166" ${M(2.2)}/>
    <path d="M54 38 Q58 48 42 46 Z" fill="#e0a83a"/>
    <path d="M34 40 L34 72 Q14 64 20 44 Z" fill="#8ecae6" ${M(2.2)}/>
    <path d="M26 58 Q16 50 32 46 Z" fill="#5aa9d6"/>
    <path d="M34 40 L6 48 Q12 26 28 30 Z" fill="#c9a0dc" ${M(2.2)}/>
    <path d="M16 36 Q14 28 28 34 Z" fill="#b388d6"/>
    <circle cx="34" cy="40" r="5" fill="#fff" ${M(2.2)}/>
    <circle cx="34" cy="40" r="1.8" fill="${ct}"/>`}),Jx=xe({kind:"rain-barrel",name:"Rain Barrel",cat:"decor",w:86,h:108,vb:"0 0 80 110",svg:`${$e(40,30,104)}
    <path d="M22 30 C12 48 12 78 22 98 H58 C68 78 68 48 58 30 Z" fill="#8ecae6" ${M()}/>
    <path d="M46 34 C58 48 60 76 54 96 H58 C66 76 66 50 56 32 Z" fill="#5aa9c6"/>
    ${ft("M28 40 v48 M36 36 v54 M44 38 v50")}
    ${re("M24 42 v24")}
    <ellipse cx="40" cy="30" rx="20" ry="8" fill="#bde0fe" ${M()}/>
    <ellipse cx="46" cy="30" rx="10" ry="5" fill="#7eb4dc"/>
    <path d="M16 48 H64" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <path d="M14 74 H66" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <rect x="56" y="78" width="14" height="7" rx="2" fill="#d7ecff" ${M(2)}/>
    <path d="M70 81 h6" fill="none" ${M(2)}/>
    <path d="M34 18 q6 -8 12 0" fill="none" stroke="#7eb4dc" stroke-width="2.2" stroke-linecap="round"/>`}),e5=xe({kind:"butterfly-bush",name:"Butterfly Bush",cat:"plants",w:120,h:130,vb:"0 0 100 120",svg:`${$e(50,40,114)}
    <ellipse cx="32" cy="86" rx="22" ry="18" fill="#95d5b2" ${M(2.2)}/>
    <ellipse cx="70" cy="84" rx="24" ry="20" fill="#3d9a68" ${M(2.2)}/>
    <ellipse cx="50" cy="78" rx="36" ry="28" fill="#74c69d" ${M()}/>
    <path d="M18 90 Q50 108 84 88 Q68 100 50 102 Q30 100 18 90 Z" fill="#3d9a68"/>
    ${re("M24 68 q14 -8 26 2")}
    ${ft("M28 80 q4 6 0 10 M46 72 q5 8 0 12 M66 78 q4 6 0 10")}
    <path d="M30 62 C28 44 32 26 35 24 C39 28 40 46 38 62 Z" fill="#c9a0dc" ${M(1.8)}/>
    <circle cx="33" cy="36" r="2.2" fill="#f7ecff"/><circle cx="36" cy="46" r="2.2" fill="#b388d6"/><circle cx="33" cy="54" r="2" fill="#f7ecff"/>
    <path d="M46 58 C44 36 50 14 53 12 C57 16 58 40 54 58 Z" fill="#b388d6" ${M(1.8)}/>
    <circle cx="50" cy="28" r="2.4" fill="#f7ecff"/><circle cx="53" cy="40" r="2.4" fill="#c9a0dc"/><circle cx="50" cy="50" r="2.2" fill="#f7ecff"/>
    <path d="M62 60 C62 42 68 28 71 26 C75 30 76 46 72 60 Z" fill="#a78bfa" ${M(1.8)}/>
    <circle cx="67" cy="38" r="2.2" fill="#f7ecff"/><circle cx="70" cy="48" r="2" fill="#c9a0dc"/>
    <path d="M14 26 C4 14 2 24 10 32 C14 36 18 32 18 28 Z" fill="#ff8fab" ${M(1.6)}/>
    <path d="M20 24 C30 12 34 24 26 34 C22 38 20 30 20 26 Z" fill="#c9a0dc" ${M(1.6)}/>
    <path d="M12 30 C6 36 6 46 14 46 C18 44 20 36 18 30 Z" fill="#ffd166" ${M(1.6)}/>
    <path d="M22 30 C30 36 32 46 24 48 C20 44 18 36 20 30 Z" fill="#8ecae6" ${M(1.6)}/>
    <ellipse cx="18" cy="32" rx="2" ry="7" fill="${ct}"/>
    <path d="M16 26 Q12 18 10 14 M20 26 Q24 18 28 14" fill="none" stroke="${ct}" stroke-width="1.3" stroke-linecap="round"/>`}),t5=xe({kind:"hedge-row",name:"Hedge Row",cat:"plants",w:190,h:96,vb:"0 0 180 96",svg:`${$e(90,78,90)}
    <path d="M16 84 C28 70 40 62 52 66 C62 52 78 50 90 62 C102 50 118 52 128 66 C140 58 156 64 164 74 L164 86 L16 86 Z" fill="#2f7d52"/>
    <path d="M10 82 L10 60 C10 50 18 46 26 50 C32 34 46 32 54 48 C60 30 76 28 84 46 C92 28 108 28 116 46 C124 30 140 32 148 48 C156 36 166 42 170 54 L170 82 Z" fill="#74c69d" ${M()}/>
    <path d="M148 46 C160 38 170 50 170 70 L170 82 L140 82 L146 58 Z" fill="#52b788"/>
    <path d="M22 64 C40 54 58 58 70 50 C84 60 100 48 116 56 C128 48 146 56 158 64" fill="none" stroke="#95d5b2" stroke-width="6" stroke-linecap="round" opacity=".85"/>
    <path d="M14 68 C48 78 132 76 166 66 L168 82 L12 82 Z" fill="#3d9a68"/>
    ${ft("M28 58 q3 5 0 8 M48 54 q3 6 0 9 M70 52 q3 6 1 9 M94 52 q3 6 0 10 M118 54 q3 6 0 9 M142 56 q3 5 0 8")}
    ${re("M18 58 q10 -4 16 1")}
    ${re("M58 42 q12 -4 16 2")}`}),n5=xe({kind:"lemonade-cup",name:"Lemonade Cup",cat:"food",w:52,h:70,vb:"0 0 70 90",holdable:!0,svg:`${$e(35,22,84)}
    <path d="M18 32 H52 L46 76 H24 Z" fill="#fff" ${M()}/>
    <path d="M40 34 H50 L46 74 H40 Z" fill="#f0e6d8"/>
    <path d="M20 44 H50 L46 76 H24 Z" fill="#ffe566"/>
    <path d="M40 46 H48 L46 74 H40 Z" fill="#f0c45c"/>
    <ellipse cx="35" cy="44" rx="15" ry="6" fill="#fff3a0" ${M(2)}/>
    <ellipse cx="35" cy="32" rx="17" ry="7" fill="#fff" ${M()}/>
    <path d="M40 42 L48 16 H58" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="20" cy="30" r="8" fill="#ffe566" ${M(1.8)}/>
    <path d="M20 23 v14 M14 30 h12" fill="none" stroke="#fff" stroke-width="1.4"/>
    <path d="M16 26 q4 4 8 0 M16 34 q4 -4 8 0" fill="none" stroke="#e0a83a" stroke-width="1.2"/>
    ${re("M24 38 v14")}`}),s5=xe({kind:"picnic-table",name:"Picnic Table",cat:"furniture",w:180,h:110,vb:"0 0 160 100",svg:`${$e(80,68,96)}
    <rect x="18" y="62" width="124" height="10" rx="2" fill="#e7c49a" ${M()}/>
    <rect x="118" y="64" width="20" height="7" fill="#c99366"/>
    <rect x="28" y="70" width="8" height="24" rx="1" fill="#f3d2aa" ${M(2)}/>
    <rect x="124" y="70" width="8" height="24" rx="1" fill="#d4a373" ${M(2)}/>
    <rect x="8" y="78" width="40" height="8" rx="2" fill="#f6e0c4" ${M(2)}/>
    <rect x="112" y="78" width="40" height="8" rx="2" fill="#e7c49a" ${M(2)}/>
    <rect x="22" y="36" width="116" height="14" rx="2" fill="#f6e0c4" ${M()}/>
    <rect x="110" y="38" width="24" height="10" fill="#d4a373"/>
    <rect x="36" y="48" width="8" height="18" fill="#f3d2aa" ${M(2)}/>
    <rect x="116" y="48" width="8" height="18" fill="#d4a373" ${M(2)}/>
    ${re("M28 40 h36")}
    ${ft("M40 42 h50 M34 66 h70")}`}),o5=xe({kind:"seesaw",name:"Seesaw",cat:"furniture",w:200,h:80,vb:"0 0 180 80",svg:`${$e(90,74,76)}
    <path d="M78 58 H102 L96 74 H84 Z" fill="#f3d2aa" ${M()}/>
    <path d="M94 60 H100 L96 72 H92 Z" fill="#c99366"/>
    <rect x="10" y="40" width="160" height="12" rx="3" fill="#ffd166" ${M()} transform="rotate(-8 90 46)"/>
    <rect x="130" y="28" width="28" height="8" fill="#e0a83a"/>
    <rect x="16" y="34" width="28" height="10" rx="2" fill="#ff8fab" ${M(2)}/>
    <rect x="136" y="22" width="28" height="10" rx="2" fill="#8ecae6" ${M(2)}/>
    ${re("M24 44 h40")}`}),i5=xe({kind:"wagon",name:"Wagon",cat:"furniture",w:130,h:90,vb:"0 0 130 90",svg:`${$e(64,50,86)}
    <circle cx="36" cy="74" r="12" fill="${ct}" ${M(2)}/><circle cx="36" cy="74" r="5" fill="#ffd166"/>
    <circle cx="96" cy="74" r="12" fill="${ct}" ${M(2)}/><circle cx="96" cy="74" r="5" fill="#ffd166"/>
    <path d="M22 40 H108 L100 68 H30 Z" fill="#e45d88" ${M()}/>
    <path d="M86 42 H106 L100 66 H84 Z" fill="#c93b68"/>
    <rect x="28" y="28" width="76" height="14" rx="3" fill="#ff8fab" ${M()}/>
    <path d="M108 36 H122 L118 58" fill="none" ${M(2.4)}/>
    ${re("M32 46 h28")}
    ${ft("M40 54 h40")}`}),a5=xe({kind:"birdhouse",name:"Birdhouse",cat:"decor",w:70,h:120,vb:"0 0 80 130",svg:`${$e(40,22,124)}
    <rect x="34" y="70" width="12" height="50" rx="2" fill="#d4a373" ${M()}/>
    <rect x="40" y="74" width="5" height="42" fill="#c99366"/>
    <path d="M12 62 L40 28 L68 62 Z" fill="#e45d88" ${M()}/>
    <path d="M40 32 L66 60 H52 Z" fill="#c93b68"/>
    <rect x="18" y="60" width="44" height="36" rx="3" fill="#f6e0c4" ${M()}/>
    <rect x="48" y="64" width="10" height="28" fill="#e7c49a"/>
    <circle cx="40" cy="76" r="7" fill="#5a3d5c"/>
    <rect x="36" y="86" width="14" height="4" rx="1" fill="#d4a373" ${M(1.6)}/>
    ${re("M22 66 h12")}`}),r5=xe({kind:"sprinkler",name:"Sprinkler",cat:"decor",w:80,h:70,vb:"0 0 100 80",svg:`${$e(50,28,76)}
    <ellipse cx="50" cy="66" rx="22" ry="8" fill="#74c69d" ${M()}/>
    <rect x="44" y="40" width="12" height="26" rx="3" fill="#8ecae6" ${M()}/>
    <circle cx="50" cy="36" r="8" fill="#ffd166" ${M()}/>
    <path d="M50 28 C30 16 18 20 12 10" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 28 C70 14 84 18 90 8" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 26 C40 8 58 4 50 2" fill="none" stroke="#c9ecff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="12" cy="10" r="2.2" fill="#c9ecff"/><circle cx="90" cy="8" r="2.2" fill="#c9ecff"/><circle cx="50" cy="2" r="2.2" fill="#fff"/>
    ${re("M46 44 v10")}`}),l5=xe({kind:"beach-ball",name:"Beach Ball",cat:"decor",w:70,h:70,vb:"0 0 80 80",svg:`${$e(40,26,76)}
    <circle cx="40" cy="40" r="28" fill="#fff" ${M()}/>
    <path d="M40 12 A28 28 0 0 1 66 32 L40 40 Z" fill="#ff8fab"/>
    <path d="M66 48 A28 28 0 0 1 40 68 L40 40 Z" fill="#ffd166"/>
    <path d="M24 64 A28 28 0 0 1 14 36 L40 40 Z" fill="#8ecae6"/>
    <path d="M18 28 A28 28 0 0 1 40 12 L40 40 Z" fill="#b7e4c7"/>
    <circle cx="40" cy="40" r="5" fill="#fff" ${M(2)}/>
    ${re("M28 24 q6 -4 10 2")}`}),c5=xe({kind:"patio-umbrella",name:"Patio Umbrella",cat:"furniture",w:150,h:180,vb:"0 0 120 150",svg:`${$e(60,36,144)}
    <path d="M10 58 Q60 18 110 58 L98 64 Q60 32 22 64 Z" fill="#ffb3c6" ${M()}/>
    <path d="M60 22 L108 56 L96 62 Z" fill="#e45d88"/>
    <path d="M28 40 Q44 30 60 36 Q76 28 96 42" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <rect x="56" y="58" width="8" height="78" rx="2" fill="#f3d2aa" ${M()}/>
    <rect x="60" y="62" width="3" height="70" fill="#d4a373"/>
    <rect x="40" y="128" width="40" height="8" rx="2" fill="#e7c49a" ${M(2)}/>
    ${re("M24 50 q16 -8 24 0")}`}),d5=xe({kind:"veggie-patch",name:"Vegetable Patch",cat:"plants",w:150,h:80,vb:"0 0 150 80",svg:`${$e(75,62,76)}
    <rect x="8" y="28" width="134" height="44" rx="4" fill="#c99366" ${M()}/>
    <rect x="16" y="34" width="118" height="32" fill="#8d6e4c"/>
    <path d="M36 48 C36 36 48 34 48 46 C48 34 60 36 58 48 Z" fill="#74c69d" ${M(2)}/>
    <path d="M78 50 C78 38 90 36 90 48 C90 36 102 38 100 50 Z" fill="#52b788" ${M(2)}/>
    <path d="M112 52 L120 30 L128 52 Z" fill="#ff922b" ${M(2)}/>
    <path d="M118 32 Q124 22 130 28" fill="none" stroke="#2f7d52" stroke-width="2" stroke-linecap="round"/>
    ${re("M18 36 h24")}`}),f5=xe({kind:"hammock",name:"Hammock",cat:"furniture",w:190,h:110,vb:"0 0 170 100",svg:`${$e(85,70,96)}
    <rect x="8" y="18" width="10" height="74" rx="2" fill="#d4a373" ${M()}/>
    <rect x="152" y="18" width="10" height="74" rx="2" fill="#c99366" ${M()}/>
    <path d="M18 28 Q85 78 152 28" fill="none" stroke="#5a3d5c" stroke-width="2"/>
    <path d="M18 36 Q85 88 152 36 L152 48 Q85 96 18 48 Z" fill="#8ecae6" ${M()}/>
    <path d="M120 40 Q140 62 150 44 L150 54 Q136 74 112 52 Z" fill="#5fb0d8"/>
    ${re("M36 46 q24 10 30 4")}
    ${ft("M40 58 q30 16 50 4")}`}),p5=xe({kind:"garden-gnome",name:"Garden Gnome",cat:"decor",w:64,h:100,vb:"0 0 70 110",svg:`${$e(35,22,104)}
    <path d="M18 78 H52 L48 100 H22 Z" fill="#3d7ec4" ${M()}/>
    <path d="M40 80 H50 L48 98 H42 Z" fill="#2c5f96"/>
    <circle cx="35" cy="62" r="16" fill="#f6d2b5" ${M()}/>
    <path d="M20 66 Q35 78 50 66 Q46 74 35 76 Q24 74 20 66 Z" fill="#fff"/>
    <circle cx="29" cy="60" r="2" fill="${ct}"/><circle cx="41" cy="60" r="2" fill="${ct}"/>
    <path d="M16 52 L35 18 L54 52 Z" fill="#e45d88" ${M()}/>
    <path d="M35 22 L52 50 H42 Z" fill="#c93b68"/>
    <ellipse cx="35" cy="52" rx="16" ry="4" fill="#ff8fab" ${M(2)}/>
    ${re("M22 40 l8 -8")}`}),Ea=[Bx,zx,Dx,Hx,Wx,Vx,Ux,Qx,qx,jx,Fx,Zx,Gx,Yx,Kx,Xx,Jx,e5,t5,n5,s5,o5,i5,a5,r5,l5,c5,d5,f5,p5];function h5(e,t){for(const n of Ea)t[n.kind]||(e.push(n),t[n.kind]=n)}function kc(e,t,n){return`<g>
    <ellipse cx="${e-22*n}" cy="${t}" rx="${26*n}" ry="${14*n}" fill="#fff"/>
    <ellipse cx="${e+18*n}" cy="${t-2*n}" rx="${30*n}" ry="${16*n}" fill="#fff"/>
    <ellipse cx="${e}" cy="${t+4*n}" rx="${34*n}" ry="${13*n}" fill="#fff"/>
  </g>`}function u5(e,t,n,s,o){const a=l=>`<rect x="${e-2}" y="${l}" width="${t-e+12+4}" height="8" rx="3" fill="#fff" ${M(2.2)}/><rect x="${(t-40).toFixed(1)}" y="${l+1}" width="30" height="6" rx="2" fill="#d5ead8"/>`;let r=a(n+26)+a(s-28);for(let l=e;l<=t;l+=o)r+=`<path d="M${l} ${n+12} L${l+12/2} ${n} L${l+12} ${n+12} V${s} H${l} Z" fill="#f7fff8" ${M(2.2)}/>`,r+=`<path d="M${(l+12*.58).toFixed(1)} ${n+10} H${l+12-1} V${s-4} H${(l+12*.58).toFixed(1)} Z" fill="#d5ead8"/>`,r+=`<path d="M${l+2} ${n+18} v22" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".75" fill="none"/>`;return r}function g5(e,t){const s=150+46*t,o=372-s;return`<g id="yardTree">
    <rect x="${e-14*t}" y="${s}" width="${28*t}" height="${o}" rx="${6*t}" fill="#e7b98a" ${M()}/>
    <rect x="${e+4*t}" y="${s+8*t}" width="${8*t}" height="${o-16*t}" fill="#c99366"/>
    ${ft(`M${e-4*t} ${s+28*t} v${36*t}`)}
    ${re(`M${e-8*t} ${s+16*t} v${22*t}`)}
    <ellipse cx="${e+8*t}" cy="${150+18*t}" rx="${78*t}" ry="${46*t}" fill="#2f7d52"/>
    <ellipse cx="${e-48*t}" cy="${150+10*t}" rx="${36*t}" ry="${30*t}" fill="#245e3e"/>
    <ellipse cx="${e-34*t}" cy="${150+16*t}" rx="${42*t}" ry="${34*t}" fill="#95d5b2" ${M(2.2)}/>
    <ellipse cx="${e}" cy="150" rx="${68*t}" ry="${50*t}" fill="#74c69d" ${M()}/>
    <ellipse cx="${e+40*t}" cy="${150+8*t}" rx="${40*t}" ry="${36*t}" fill="#3d9a68" ${M(2.2)}/>
    <ellipse cx="${e-8*t}" cy="${150-6*t}" rx="${28*t}" ry="${20*t}" fill="#b7e4c7" opacity=".95"/>
    ${ft(`M${e-20*t} ${150+8*t} q${8*t} ${6*t} 0 ${12*t} M${e+10*t} ${150-4*t} q${8*t} ${6*t} 2 ${12*t} M${e+28*t} ${150+12*t} q${6*t} ${5*t} 0 ${10*t}`)}
    ${re(`M${e-36*t} ${150-18*t} q${16*t} -8 ${28*t} 2`)}
  </g>`}function m5(){return`<svg class="yardWorld" viewBox="0 0 2400 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ydsky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6eb6e8"/>
        <stop offset=".48" stop-color="#c5e6fb"/>
        <stop offset="1" stop-color="#fff3df"/>
      </linearGradient>
      ${Af("ydsun","#ffe566",".55")}
    </defs>
    <rect width="2400" height="430" fill="url(#ydsky)"/>
    <circle id="ydSunGlow" cx="1180" cy="68" r="62" fill="url(#ydsun)"/>
    <circle id="ydSun" cx="1180" cy="68" r="30" fill="#ffe566"/>
    <circle cx="1170" cy="58" r="8" fill="#fff" opacity=".8"/>
    ${kc(980,96,1.05)}${kc(1320,78,.85)}${kc(1500,120,.7)}
    <rect y="360" width="2400" height="240" fill="#c6ef9a"/>
    <rect y="360" width="2400" height="28" fill="#e7f8c8"/>
    <rect y="520" width="2400" height="80" fill="#9ed67a"/>
    <path d="M1040 470 q30 -12 16 -6 M1200 510 q28 -12 14 -4 M1360 548 q24 -10 12 -4" fill="none" stroke="#3d9a68" stroke-width="1.2" stroke-linecap="round" opacity=".22"/>
    ${u5(846,2118,258,372,24)}
    ${g5(1184,.8)}
    <path d="M840 120 H1076 L1054 152 H862 Z" fill="#ffb3c6" ${M()}/>
    <path d="M960 126 H1064 L1046 148 H976 Z" fill="#e45d88"/>
    ${re("M876 132 h56")}
    <rect x="864" y="150" width="196" height="222" rx="4" fill="#fff6ea" ${M()}/>
    <rect x="1044" y="156" width="12" height="210" fill="#f0dcc4"/>
    ${ft("M880 174 H1000 M880 202 H1000 M880 230 H990 M880 294 H1000 M880 334 H980")}
    <rect x="884" y="180" width="44" height="36" rx="4" fill="#c9ecff" ${M(2.2)}/>
    <rect x="912" y="184" width="12" height="28" fill="#8ecae6"/>
    <path d="M906 180 V216 M884 198 H928" fill="none" ${M(2.2)}/>
    ${re("M890 188 h12")}
  </svg>`}function y5(e,t,n,s,o){const i=(600-t)/600*100,a=(n/2400*100).toFixed(3),r=(s/600*100).toFixed(3);return o==="right"?`right:${((2400-(e+n/2))/2400*100).toFixed(3)}%;bottom:${i.toFixed(3)}%;width:${a}%;height:${r}%`:`left:${((e-n/2)/2400*100).toFixed(3)}%;bottom:${i.toFixed(3)}%;width:${a}%;height:${r}%`}function w5(){return`<svg class="doorArt" viewBox="0 0 100 230">
    <rect x="4" y="2" width="92" height="226" rx="3" fill="#f3d2aa" ${M()}/>
    <rect x="76" y="6" width="16" height="218" fill="#d4a373"/>
    <rect x="14" y="12" width="72" height="206" rx="2" fill="#f6e9ff" ${M(2.2)}/>
    <rect x="70" y="16" width="12" height="198" fill="#d4b4e6"/>
    <rect x="24" y="22" width="52" height="42" rx="3" fill="#c9ecff" ${M(2.2)}/>
    <rect x="60" y="26" width="12" height="34" fill="#8ecae6"/>
    <path d="M50 22 V64 M24 43 H76" fill="none" ${M(2.2)}/>
    ${re("M28 28 h18")}
    <rect x="24" y="76" width="52" height="56" rx="3" fill="#f7ecff" ${M(2.2)}/>
    <rect x="62" y="80" width="10" height="48" fill="#e0c8f0"/>
    ${re("M28 84 v22")}
    <rect x="24" y="144" width="52" height="56" rx="3" fill="#f7ecff" ${M(2.2)}/>
    <rect x="62" y="148" width="10" height="48" fill="#e0c8f0"/>
    <circle cx="64" cy="126" r="4.2" fill="#ffd166" ${M(2.2)}/>
    <rect x="10" y="214" width="80" height="10" rx="2" fill="#e7c49a" ${M(2.2)}/>
  </svg>`}function b5(e){const t=e==="living"?hg:ug,n=e==="living"?"backyard":"living",s=e==="living"?"Backyard":"Back inside",o=e==="yard"?"right":"left";return`<button type="button" class="yardDoor" data-yard-go="${n}" aria-label="${s}" style="${y5(t.x,t.y,t.w,t.h,o)}">${w5()}<span class="yardHintLabel"><span>${s}</span></span></button>`}function Cf(e,t){const n=e.replace(/[&<>]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[s]);return`<figure class="ysCard"><div class="ysArt">${t}</div><figcaption>${n}</figcaption></figure>`}function v5(){return`<div class="yardSheet" data-yard-sheet="1"><h1>Backyard pieces</h1><div class="ysGrid">${Ea.map(t=>Cf(t.name,Vt(t))).join("")}</div></div>`}function k5(e,t){return Cf(e,`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${t}</svg>`)}function _5(){const e=(r,l)=>$e(r,l,96.4),t=`
    ${e(50,40)}
    <path d="M18 58 V30 Q18 18 32 18 H68 Q82 18 82 30 V58 Z" fill="#ffb7cc" ${M()}/>
    <path d="M56 24 H76 Q80 24 80 32 V52 H56 Z" fill="#e888a8"/>
    <circle cx="34" cy="38" r="3.4" fill="#ff8fab" ${M(2)}/><circle cx="33" cy="37" r="1.1" fill="#fff"/>
    <circle cx="50" cy="36" r="3.4" fill="#ff8fab" ${M(2)}/><circle cx="49" cy="35" r="1.1" fill="#fff"/>
    <circle cx="66" cy="38" r="3.4" fill="#e45d88" ${M(2)}/><circle cx="65" cy="37" r="1.1" fill="#fff"/>
    <rect x="4" y="44" width="20" height="38" rx="10" fill="#ff7096" ${M()}/>
    <ellipse cx="14" cy="44" rx="12" ry="9" fill="#ff9ab6" ${M()}/>
    <ellipse cx="9" cy="41" rx="4" ry="2.4" fill="#fff" opacity=".7"/>
    <rect x="76" y="44" width="20" height="38" rx="10" fill="#e04878" ${M()}/>
    <ellipse cx="86" cy="44" rx="12" ry="9" fill="#e45d88" ${M()}/>
    <rect x="20" y="64" width="60" height="16" rx="6" fill="#ff8fab" ${M()}/>
    <rect x="22" y="56" width="28" height="22" rx="7" fill="#ffe0ea" ${M(2.4)}/>
    <rect x="50" y="56" width="28" height="22" rx="7" fill="#ffc2d4" ${M(2.4)}/>
    <rect x="66" y="58" width="10" height="18" rx="4" fill="#e888a8"/>
    <path d="M26 60 h20 M54 60 h16 M26 74 h20 M54 74 h16" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M50 58 v18" fill="none" stroke="#e45d88" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="26" y="46" width="20" height="16" rx="5" fill="#fff" ${M(2.2)}/>
    <path d="M33 52 c-2.2 -3.2 -6.4 -.4 -3.4 2.6 c1 1.2 3.4 2.6 3.4 2.6 c0 0 2.4 -1.4 3.4 -2.6 c3 -3 -1.2 -5.8 -3.4 -2.6 z" fill="#ff8fab"/>
    <path d="M41 56 c-1.4 -2 -4.2 0 -2.2 1.8 c.7 .8 2.2 1.6 2.2 1.6 c0 0 1.5 -.8 2.2 -1.6 c2 -1.8 -.8 -3.8 -2.2 -1.8 z" fill="#7eb4dc"/>
    <rect x="16" y="84" width="7" height="10" rx="2" fill="${ct}"/>
    <rect x="77" y="84" width="7" height="10" rx="2" fill="${ct}"/>`,n=`
    <defs>${Af("a2lamp-glow","#ffd56a",".95")}</defs>
    ${e(50,22)}
    <path d="M34 8 L42 8 L37 40 L24 40 Z" fill="#fff6d4"/>
    <path d="M42 8 L50 8 L50 40 L37 40 Z" fill="#ffe08a"/>
    <path d="M50 8 L58 8 L63 40 L50 40 Z" fill="#f0c45c"/>
    <path d="M58 8 L66 8 L76 40 L63 40 Z" fill="#e0a83a"/>
    <path d="M24 40 L34 8 H66 L76 40 Z" fill="none" ${M()}/>
    <path d="M42 8 L37 40 M50 8 V40 M58 8 L63 40" fill="none" stroke="${ct}" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="36" rx="20" ry="10" fill="url(#a2lamp-glow)"/>
    <rect x="46" y="40" width="8" height="42" rx="3" fill="#e4ccf2" ${M()}/>
    <rect x="50" y="44" width="4" height="34" rx="2" fill="#c49ad4"/>
    <ellipse cx="50" cy="88" rx="20" ry="6" fill="#d4b4e6" ${M()}/>
    <ellipse cx="60" cy="90" rx="8" ry="3" fill="#b888c8"/>
    <ellipse cx="42" cy="86" rx="6" ry="2" fill="#fff" opacity=".55"/>`,s=`
    ${e(50,30)}
    <ellipse cx="30" cy="40" rx="14" ry="22" fill="#b7ebc8" ${M()} transform="rotate(-30 30 40)"/>
    <path d="M34 28 C30 40 32 52 44 58" fill="#52b078"/>
    <ellipse cx="72" cy="42" rx="13" ry="20" fill="#3d9a68" ${M()} transform="rotate(26 72 42)"/>
    <path d="M50 66 C40 44 42 18 50 6 C58 18 60 44 50 66 Z" fill="#d8f6e4" ${M()}/>
    <path d="M54 18 C60 32 58 48 50 58 C56 44 58 28 54 18 Z" fill="#52b078"/>
    <path d="M50 14 V52" fill="none" stroke="#2f7a52" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>
    <path d="M40 60 C34 50 24 48 22 38 C32 44 38 54 42 64 Z" fill="#74c69d" ${M(2.2)}/>
    <path d="M28 64 H74 L68 94 H34 Z" fill="#e8845a" ${M()}/>
    <path d="M58 66 H72 L68 92 H60 Z" fill="#c45c38"/>
    <rect x="22" y="58" width="58" height="10" rx="4" fill="#f0a078" ${M()}/>
    <rect x="56" y="60" width="20" height="6" rx="3" fill="#d47848"/>
    <ellipse cx="50" cy="65" rx="20" ry="3" fill="#a86a42" opacity=".4"/>
    <path d="M28 62 h14" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".65"/>`,o=Object.fromEntries(Ea.map(r=>[r.kind,r])),i=(r,l,c)=>k5(r,l)+Cf(o[c].name,Vt(o[c]));return`<div class="yardSheet yardCompare" data-yard-compare="1"><h1>House style and the yard</h1><p class="ysNote">Sofa, lamp, and plant are the approved refresh. Swing, cart, and birdbath use the same light.</p><div class="ysPair">${i("Sofa",t,"yard-swing")+i("Lamp",n,"lemonade-cart")+i("Plant",s,"birdbath")}</div></div>`}const Ai="#5a3d5c",K=`stroke="${Ai}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,mr='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>',gg=[{kind:"soaking-tub",name:"Soaking Tub",cat:"furniture",w:250,h:200,vb:"0 0 120 96",svg:`<ellipse cx="60" cy="92" rx="48" ry="3.2" fill="#000" opacity=".12"/><rect x="18" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${K}/><rect x="92" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${K}/><path d="M14 58 Q8 58 10 46 L22 28 H98 L110 46 Q112 58 106 58 Z" fill="#fff" ${K}/><ellipse cx="60" cy="30" rx="44" ry="14" fill="#fff" ${K}/><ellipse cx="60" cy="32" rx="34" ry="9" fill="#d7f3ff"/><path d="M28 34 Q60 42 92 34" fill="none" stroke="#b9e6f8" stroke-width="4"/><rect x="96" y="8" width="8" height="22" rx="4" fill="#f7d27a" ${K}/><path d="M100 28 Q112 34 104 44" fill="none" ${K}/><circle cx="104" cy="46" r="3.2" fill="#a8d4ea" ${K}/><ellipse cx="46" cy="30" rx="8" ry="3" fill="#fff" opacity=".7"/>`},{kind:"bath-toilet",name:"Toilet",cat:"furniture",w:120,h:160,vb:"0 0 100 134",svg:`<ellipse cx="50" cy="128" rx="34" ry="4" fill="#000" opacity=".12"/><rect x="28" y="8" width="44" height="36" rx="8" fill="#fff" ${K}/><rect x="34" y="16" width="32" height="16" rx="4" fill="#e7f6ff"/><rect x="46" y="42" width="8" height="10" fill="#f4f7fb" ${K}/><ellipse cx="50" cy="78" rx="36" ry="22" fill="#fff" ${K}/><ellipse cx="50" cy="74" rx="24" ry="14" fill="#d7f3ff" ${K}/><path d="M18 70 Q50 58 82 70" fill="#fff" ${K}/><rect x="40" y="96" width="20" height="24" rx="4" fill="#f7f4ef" ${K}/>`},{kind:"sink-vanity",name:"Sink Vanity",cat:"furniture",w:210,h:190,vb:"0 0 110 100",svg:`<ellipse cx="55" cy="96" rx="46" ry="3.2" fill="#000" opacity=".12"/><rect x="10" y="48" width="90" height="42" rx="8" fill="#f6e2c4" ${K}/><path d="M55 48 V90" ${K}/><circle cx="28" cy="70" r="3" fill="${Ai}"/><circle cx="82" cy="70" r="3" fill="${Ai}"/><rect x="16" y="90" width="8" height="6" rx="2" fill="${Ai}"/><rect x="86" y="90" width="8" height="6" rx="2" fill="${Ai}"/><ellipse cx="55" cy="44" rx="40" ry="12" fill="#fff" ${K}/><ellipse cx="55" cy="44" rx="26" ry="7" fill="#d7f3ff"/><rect x="50" y="10" width="10" height="28" rx="4" fill="#f7d27a" ${K}/><path d="M55 36 Q70 40 66 48" fill="none" ${K}/><rect x="8" y="40" width="94" height="8" rx="3" fill="#f3d2b5" ${K}/>`},{kind:"bath-mirror",name:"Bath Mirror",cat:"decor",w:120,h:160,wall:!0,vb:"0 0 90 120",svg:`<path d="M45 8 C70 8 82 28 82 58 C82 92 68 112 45 112 C22 112 8 92 8 58 C8 28 20 8 45 8 Z" fill="#f7d27a" ${K}/><ellipse cx="45" cy="60" rx="26" ry="40" fill="#d7f4ff" ${K}/><path d="M30 36 l8 -8 M28 52 l18 -16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="38" y="2" width="14" height="8" rx="3" fill="#f28fa6" ${K}/>`},{kind:"towel-bar",name:"Towel Bar",cat:"decor",w:170,h:116,wall:!0,vb:"0 0 150 102",svg:`<rect x="10" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${K}/><rect x="130" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${K}/><rect x="14" y="16" width="122" height="8" rx="4" fill="#c98d55" ${K}/><path d="M26 24 H124 V70 Q75 100 26 70 Z" fill="#f7d7e4" ${K}/><path d="M75 24 V88" stroke="#f28fa6" stroke-width="3"/><path d="M40 36 H110" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"bath-mat",name:"Bath Mat",cat:"decor",w:230,h:120,vb:"0 0 160 84",svg:`<ellipse cx="80" cy="78" rx="70" ry="5" fill="#000" opacity=".1"/><rect x="12" y="22" width="136" height="48" rx="18" fill="#f28fa6" ${K}/><rect x="24" y="32" width="112" height="28" rx="12" fill="#f7d7e4"/><path d="M40 46 H120 M40 54 H120" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`},{kind:"rubber-ducky",name:"Rubber Ducky",cat:"decor",w:80,svg:`${mr}<ellipse cx="48" cy="68" rx="30" ry="26" fill="#f7d27a" ${K}/><circle cx="68" cy="40" r="18" fill="#ffe9a8" ${K}/><path d="M82 38 H98 Q102 44 92 48 H82 Z" fill="#f28fa6" ${K}/><ellipse cx="36" cy="74" rx="12" ry="8" fill="#f3c15a"/>`},{kind:"shower-curtain",name:"Shower Curtain",cat:"decor",w:150,h:260,holdable:!1,vb:"0 0 90 156",svg:`<rect x="8" y="8" width="74" height="8" rx="3" fill="#c98d55" ${K}/><circle cx="22" cy="16" r="3" fill="#f7d27a" ${K}/><circle cx="40" cy="16" r="3" fill="#f7d27a" ${K}/><circle cx="58" cy="16" r="3" fill="#f7d27a" ${K}/><circle cx="72" cy="16" r="3" fill="#f7d27a" ${K}/><path d="M12 18 Q8 80 16 146 H40 Q30 80 36 18 Z" fill="#d7f4ff" ${K}/><path d="M36 18 Q34 80 46 146 H74 Q84 80 78 18 Z" fill="#f7d7e4" ${K}/><path d="M24 40 Q18 70 26 100 M58 40 Q66 70 58 110" fill="none" stroke="#fff" stroke-width="3" opacity=".65"/>`},{kind:"soap-dish",name:"Soap Dish",cat:"decor",w:90,svg:`${mr}<ellipse cx="50" cy="78" rx="34" ry="12" fill="#fff" ${K}/><ellipse cx="50" cy="74" rx="26" ry="7" fill="#e7f6ff"/><rect x="28" y="48" width="44" height="22" rx="8" fill="#f7d7e4" ${K}/><path d="M36 56 H64" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"laundry-hamper",name:"Laundry Hamper",cat:"furniture",w:140,h:160,vb:"0 0 100 114",svg:`<ellipse cx="50" cy="108" rx="36" ry="4" fill="#000" opacity=".12"/><path d="M18 40 H82 L74 100 H26 Z" fill="#b9a0dc" ${K}/><path d="M24 58 H76 M26 74 H74" stroke="#fff" stroke-width="3" opacity=".55"/><ellipse cx="50" cy="40" rx="34" ry="10" fill="#c9b6e8" ${K}/><path d="M22 36 Q50 18 78 36" fill="#f7d7e4" ${K}/><path d="M40 28 Q50 40 62 26" fill="none" stroke="#f28fa6" stroke-width="4" stroke-linecap="round"/>`},{kind:"bath-stool",name:"Bath Stool",cat:"furniture",w:110,svg:`${mr}<ellipse cx="50" cy="58" rx="36" ry="12" fill="#f6e2c4" ${K}/><ellipse cx="50" cy="54" rx="28" ry="7" fill="#fff6ea"/><path d="M22 64 L16 92 M78 64 L84 92 M36 66 L34 92 M64 66 L66 92" ${K}/><path d="M18 90 H34 M66 90 H84" ${K}/>`}],$5=[{kind:"floor-cushion",name:"Floor Cushion",cat:"decor",w:150,h:136,vb:"0 0 130 118",svg:`<ellipse cx="65" cy="112" rx="50" ry="4" fill="#000" opacity=".12"/><ellipse cx="65" cy="68" rx="52" ry="40" fill="#f28fa6" ${K}/><ellipse cx="65" cy="58" rx="40" ry="24" fill="#f7d7e4"/><path d="M38 64 Q65 82 92 64" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"story-pillow",name:"Story Pillow",cat:"decor",w:120,h:100,vb:"0 0 110 92",svg:`<ellipse cx="55" cy="86" rx="40" ry="4" fill="#000" opacity=".12"/><rect x="14" y="28" width="82" height="52" rx="18" fill="#a8d4ea" ${K}/><path d="M55 40 l6 12 13 2 -10 8 2 13 -11 -7 -11 7 2 -13 -10 -8 13 -2 z" fill="#f7d27a" ${K}/>`},{kind:"berry-basket",name:"Berry Basket",cat:"food",w:100,svg:`${mr}<path d="M22 48 H78 L70 88 H30 Z" fill="#f3d2b5" ${K}/><path d="M30 58 H70 M32 70 H68 M34 80 H66" ${K}/><circle cx="40" cy="40" r="10" fill="#f28fa6" ${K}/><circle cx="58" cy="36" r="10" fill="#c94b6a" ${K}/><circle cx="70" cy="48" r="8" fill="#b9a0dc" ${K}/><path d="M34 36 Q40 28 46 36" fill="none" stroke="#7dce8a" stroke-width="3"/>`},{kind:"ribbon-tray",name:"Ribbon Tray",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`<ellipse cx="70" cy="84" rx="52" ry="4" fill="#000" opacity=".12"/><rect x="16" y="40" width="108" height="36" rx="12" fill="#fff" ${K}/><rect x="22" y="46" width="96" height="22" rx="8" fill="#f7d7e4"/><rect x="36" y="28" width="16" height="22" rx="5" fill="#a8d4ea" ${K}/><rect x="58" y="22" width="14" height="28" rx="5" fill="#f7d27a" ${K}/><path d="M96 24 Q110 16 112 32 Q100 28 104 40 Q92 34 96 24 Z" fill="#f28fa6" ${K}/>`}],Oe="#5a3d5c",T=`stroke="${Oe}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,To=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="3" fill="${Oe}"/><circle cx="${t}" cy="${n}" r="3" fill="${Oe}"/><circle cx="${e+1}" cy="${n-1}" r="1" fill="#fff"/><circle cx="${t+1}" cy="${n-1}" r="1" fill="#fff"/>`,Xa=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/><ellipse cx="${t}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/>`,Ae='<ellipse cx="50" cy="97" rx="38" ry="3" fill="#000" opacity=".12"/>',Mn=[{kind:"sofa",name:"Sofa",cat:"furniture",w:260,svg:`${Ae}<rect x="6" y="40" width="88" height="40" rx="16" fill="#ff8fab" ${T}/><rect x="16" y="28" width="68" height="30" rx="12" fill="#ffb3c6" ${T}/><rect x="2" y="48" width="18" height="38" rx="9" fill="#ff7096" ${T}/><rect x="80" y="48" width="18" height="38" rx="9" fill="#ff7096" ${T}/><rect x="20" y="60" width="60" height="18" rx="8" fill="#ffc2d1" ${T}/><rect x="14" y="86" width="6" height="10" rx="2" fill="${Oe}"/><rect x="80" y="86" width="6" height="10" rx="2" fill="${Oe}"/>`},{kind:"armchair",name:"Armchair",cat:"furniture",w:150,svg:`${Ae}<rect x="18" y="20" width="64" height="50" rx="20" fill="#8ecae6" ${T}/><rect x="6" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${T}/><rect x="72" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${T}/><rect x="24" y="58" width="52" height="24" rx="10" fill="#b8e0f2" ${T}/><rect x="20" y="86" width="6" height="10" rx="2" fill="${Oe}"/><rect x="74" y="86" width="6" height="10" rx="2" fill="${Oe}"/>`},{kind:"bed",name:"Bed",cat:"furniture",w:300,svg:`${Ae}<rect x="4" y="22" width="18" height="72" rx="8" fill="#c99366" ${T}/><rect x="80" y="44" width="16" height="50" rx="7" fill="#c99366" ${T}/><rect x="14" y="54" width="76" height="30" rx="10" fill="#fff" ${T}/><rect x="40" y="50" width="54" height="36" rx="12" fill="#a78bfa" ${T}/><circle cx="56" cy="64" r="3" fill="#fff"/><circle cx="72" cy="72" r="3" fill="#fff"/><circle cx="84" cy="60" r="3" fill="#fff"/><rect x="18" y="42" width="24" height="16" rx="8" fill="#fde2e4" ${T}/>`},{kind:"table",name:"Table",cat:"furniture",w:200,svg:`${Ae}<rect x="4" y="30" width="92" height="14" rx="7" fill="#f4a261" ${T}/><rect x="14" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${T}/><rect x="76" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${T}/><path d="M8 40 h84" stroke="#fff" stroke-width="2" opacity=".5"/>`},{kind:"chair",name:"Chair",cat:"furniture",w:100,svg:`${Ae}<rect x="22" y="6" width="56" height="50" rx="14" fill="#90e0a8" ${T}/><rect x="16" y="52" width="68" height="14" rx="7" fill="#5cc985" ${T}/><rect x="22" y="64" width="9" height="32" rx="4" fill="#5cc985" ${T}/><rect x="69" y="64" width="9" height="32" rx="4" fill="#5cc985" ${T}/><circle cx="50" cy="30" r="8" fill="#fff" opacity=".6"/>`},{kind:"lamp",name:"Lamp",cat:"furniture",w:90,svg:`${Ae}<path d="M24 40 L34 6 H66 L76 40 Z" fill="#ffd166" ${T}/><rect x="46" y="40" width="8" height="48" rx="4" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="92" rx="22" ry="6" fill="#b388d6" ${T}/><circle cx="44" cy="20" r="3" fill="#fff" opacity=".8"/>`},{kind:"fridge",name:"Fridge",cat:"furniture",w:150,svg:`${Ae}<rect x="16" y="4" width="68" height="90" rx="14" fill="#bde0fe" ${T}/><path d="M16 38 H84" ${T}/><rect x="70" y="14" width="5" height="16" rx="2" fill="${Oe}"/><rect x="70" y="46" width="5" height="22" rx="2" fill="${Oe}"/><circle cx="32" cy="22" r="5" fill="#ff8fab" ${T}/><rect x="28" y="54" width="12" height="12" rx="3" fill="#ffd166" ${T}/>`},{kind:"stove",name:"Stove",cat:"furniture",w:170,svg:`${Ae}<rect x="8" y="26" width="84" height="68" rx="12" fill="#ffadad" ${T}/><rect x="8" y="18" width="84" height="14" rx="6" fill="#ffd6a5" ${T}/><rect x="20" y="46" width="60" height="36" rx="8" fill="#5a3d5c" opacity=".85"/><rect x="26" y="52" width="48" height="8" rx="4" fill="#fff" opacity=".25"/><circle cx="22" cy="38" r="3" fill="${Oe}"/><circle cx="36" cy="38" r="3" fill="${Oe}"/><circle cx="78" cy="38" r="3" fill="${Oe}"/>`},{kind:"bookshelf",name:"Shelf",cat:"furniture",w:170,svg:`${Ae}<rect x="10" y="4" width="80" height="90" rx="10" fill="#d4a373" ${T}/><path d="M10 34 H90 M10 64 H90" ${T}/><rect x="18" y="12" width="8" height="22" rx="2" fill="#ff8fab" ${T}/><rect x="28" y="16" width="8" height="18" rx="2" fill="#8ecae6" ${T}/><rect x="38" y="12" width="8" height="22" rx="2" fill="#ffd166" ${T}/><rect x="60" y="42" width="8" height="22" rx="2" fill="#90e0a8" ${T}/><rect x="70" y="46" width="8" height="18" rx="2" fill="#c9a0dc" ${T}/><circle cx="34" cy="80" r="8" fill="#ffadad" ${T}/>`},{kind:"tub",name:"Bathtub",cat:"furniture",w:240,svg:`${Ae}<circle cx="30" cy="40" r="7" fill="#bde0fe" ${T}/><circle cx="44" cy="34" r="9" fill="#e0f2ff" ${T}/><circle cx="60" cy="40" r="7" fill="#bde0fe" ${T}/><path d="M4 48 H96 V62 Q96 90 70 90 H30 Q4 90 4 62 Z" fill="#fff" ${T}/><rect x="2" y="44" width="96" height="10" rx="5" fill="#ffc8dd" ${T}/><rect x="22" y="88" width="8" height="8" rx="2" fill="${Oe}"/><rect x="70" y="88" width="8" height="8" rx="2" fill="${Oe}"/>`},{kind:"rug",name:"Rug",cat:"decor",w:320,svg:`<ellipse cx="50" cy="82" rx="48" ry="14" fill="#ffc8dd" ${T}/><ellipse cx="50" cy="82" rx="34" ry="9" fill="#bde0fe" ${T}/><ellipse cx="50" cy="82" rx="18" ry="4.5" fill="#fff" ${T}/>`},{kind:"picture",name:"Picture",cat:"decor",w:130,wall:!0,svg:`<rect x="10" y="20" width="80" height="64" rx="8" fill="#ffd166" ${T}/><rect x="18" y="28" width="64" height="48" rx="4" fill="#bde0fe"/><circle cx="66" cy="40" r="7" fill="#fff3b0"/><path d="M18 76 L38 50 L52 64 L62 54 L82 76 Z" fill="#90e0a8" ${T}/>`},{kind:"window",name:"Window",cat:"decor",w:180,wall:!0,svg:`<rect class="winGlass" x="12" y="8" width="76" height="76" rx="38" fill="#a2d2ff" ${T}/><g class="winDay"><circle cx="34" cy="32" r="8" fill="#fff" opacity=".7"/></g><g class="winNight"><circle cx="62" cy="28" r="7" fill="#fff6d8"/><circle cx="28" cy="24" r="1.4" fill="#fff"/><circle cx="44" cy="20" r="1.1" fill="#fff"/><circle cx="70" cy="42" r="1.2" fill="#fff"/><circle cx="36" cy="46" r="1" fill="#fff"/></g><path d="M50 8 V84 M12 50 H88" ${T}/><path d="M4 8 Q20 40 10 90 M96 8 Q80 40 90 90" stroke="#ff8fab" stroke-width="9" fill="none" stroke-linecap="round"/>`},{kind:"clock",name:"Clock",cat:"decor",w:90,wall:!0,svg:`<circle cx="50" cy="50" r="38" fill="#fff" ${T}/><circle cx="50" cy="50" r="30" fill="#fff3b0"/><path d="M50 50 V28 M50 50 L64 58" ${T}/><circle cx="50" cy="50" r="3" fill="${Oe}"/>${Xa(30,70,66)}`},{kind:"stars",name:"Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M30 20 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2z" fill="#ffd166" ${T}/><path d="M70 40 l4 8 9 1 -6 6 1 9 -8 -4 -8 4 1 -9 -6 -6 9 -1z" fill="#ffadad" ${T}/><path d="M40 66 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="#a2d2ff" ${T}/>`},{kind:"balloon",name:"Balloons",cat:"decor",w:110,svg:`<path d="M38 52 Q44 74 50 96 M64 46 Q58 72 50 96" stroke="${Oe}" stroke-width="2" fill="none"/><ellipse cx="36" cy="32" rx="18" ry="22" fill="#ff8fab" ${T}/><ellipse cx="66" cy="28" rx="18" ry="22" fill="#a2d2ff" ${T}/><ellipse cx="30" cy="24" rx="4" ry="7" fill="#fff" opacity=".6"/>`},{kind:"teddy",name:"Teddy",cat:"decor",w:100,svg:`${Ae}<circle cx="26" cy="22" r="10" fill="#d4a373" ${T}/><circle cx="74" cy="22" r="10" fill="#d4a373" ${T}/><ellipse cx="50" cy="72" rx="28" ry="24" fill="#d4a373" ${T}/><circle cx="50" cy="38" r="26" fill="#e6b88a" ${T}/>${To(40,60,36)}<ellipse cx="50" cy="48" rx="8" ry="6" fill="#fff3e0"/><circle cx="50" cy="46" r="2.5" fill="${Oe}"/>${Xa(32,68,46)}`},{kind:"ball",name:"Ball",cat:"decor",w:70,svg:`${Ae}<circle cx="50" cy="58" r="36" fill="#ffd166" ${T}/><path d="M18 46 Q50 66 82 46 M26 82 Q50 60 74 82" stroke="#ff7096" stroke-width="7" fill="none"/>`},{kind:"tv",name:"TV",cat:"decor",w:170,svg:`${Ae}<rect x="6" y="14" width="88" height="62" rx="14" fill="#c9a0dc" ${T}/><rect x="16" y="22" width="68" height="46" rx="8" fill="#a2d2ff"/><path d="M30 6 L44 14 M70 6 L56 14" ${T}/><rect x="36" y="78" width="28" height="16" rx="4" fill="#b388d6" ${T}/>${To(42,58,42)}<path d="M44 52 q6 5 12 0" ${T} fill="none"/>`},{kind:"plant",name:"Plant",cat:"plants",w:110,svg:`${Ae}<ellipse cx="34" cy="38" rx="12" ry="26" fill="#74c69d" ${T} transform="rotate(-25 34 38)"/><ellipse cx="66" cy="38" rx="12" ry="26" fill="#52b788" ${T} transform="rotate(25 66 38)"/><ellipse cx="50" cy="30" rx="12" ry="28" fill="#95d5b2" ${T}/><path d="M24 62 H76 L70 94 H30 Z" fill="#ff9f68" ${T}/><rect x="20" y="58" width="60" height="10" rx="5" fill="#ffb385" ${T}/>`},{kind:"cactus",name:"Cactus",cat:"plants",w:80,svg:`${Ae}<rect x="36" y="12" width="28" height="64" rx="14" fill="#80ed99" ${T}/><path d="M36 50 H24 a8 8 0 0 1 -8 -8 V34" fill="none" stroke="${Oe}" stroke-width="3.5"/><rect x="12" y="26" width="12" height="22" rx="6" fill="#80ed99" ${T}/><circle cx="50" cy="12" r="6" fill="#ff8fab" ${T}/>${To(44,56,40)}<path d="M28 74 H72 L66 96 H34 Z" fill="#c9a0dc" ${T}/>`},{kind:"flowers",name:"Flowers",cat:"plants",w:90,svg:`${Ae}<path d="M50 70 V30 M50 60 Q30 50 30 30 M50 60 Q70 50 70 30" stroke="#52b788" stroke-width="4" fill="none"/><circle cx="50" cy="26" r="10" fill="#ff8fab" ${T}/><circle cx="30" cy="28" r="9" fill="#ffd166" ${T}/><circle cx="70" cy="28" r="9" fill="#a2d2ff" ${T}/><circle cx="50" cy="26" r="3" fill="#fff"/><path d="M32 66 H68 L62 96 H38 Z" fill="#a2d2ff" ${T}/>`},{kind:"tree",name:"Mini Tree",cat:"plants",w:140,svg:`${Ae}<rect x="44" y="54" width="12" height="30" rx="4" fill="#b07d54" ${T}/><circle cx="50" cy="36" r="30" fill="#52b788" ${T}/><circle cx="38" cy="30" r="5" fill="#ff8fab"/><circle cx="62" cy="40" r="5" fill="#ff8fab"/><circle cx="52" cy="22" r="5" fill="#ff8fab"/><path d="M28 80 H72 L66 96 H34 Z" fill="#ffd166" ${T}/>`},{kind:"cake",name:"Cake",cat:"food",w:100,svg:`<rect x="16" y="50" width="68" height="40" rx="10" fill="#ffc8dd" ${T}/><path d="M16 58 q8 10 17 0 q8 10 17 0 q8 10 17 0 q8 10 17 0" fill="#fff" ${T}/><rect x="46" y="28" width="8" height="22" rx="3" fill="#a2d2ff" ${T}/><path d="M50 14 q6 8 0 12 q-6 -4 0 -12" fill="#ffd166" ${T}/><ellipse cx="50" cy="92" rx="40" ry="5" fill="#fff" ${T}/>`},{kind:"apple",name:"Apple",cat:"food",w:60,svg:`<path d="M50 30 C20 18 8 50 22 74 C32 92 44 90 50 86 C56 90 68 92 78 74 C92 50 80 18 50 30 Z" fill="#ff6b6b" ${T}/><path d="M50 30 Q52 16 58 10" ${T} fill="none"/><ellipse cx="64" cy="18" rx="9" ry="5" fill="#80ed99" ${T} transform="rotate(-20 64 18)"/><ellipse cx="34" cy="46" rx="5" ry="9" fill="#fff" opacity=".5"/>`},{kind:"donut",name:"Donut",cat:"food",w:70,svg:`<circle cx="50" cy="58" r="36" fill="#e9c46a" ${T}/><path d="M18 52 Q20 26 50 24 Q80 26 82 52 Q76 62 66 56 Q56 66 46 58 Q34 66 24 58 Z" fill="#ff8fab" ${T}/><circle cx="50" cy="52" r="10" fill="#fff" ${T}/><rect x="30" y="36" width="6" height="3" rx="1.5" fill="#a2d2ff" transform="rotate(30 33 37)"/><rect x="64" y="38" width="6" height="3" rx="1.5" fill="#ffd166"/><rect x="56" y="30" width="6" height="3" rx="1.5" fill="#80ed99" transform="rotate(-30 59 31)"/>`},{kind:"pizza",name:"Pizza",cat:"food",w:80,svg:`<path d="M10 20 Q50 6 90 20 L50 94 Z" fill="#ffd166" ${T}/><path d="M10 20 Q50 6 90 20 L86 28 Q50 16 14 28 Z" fill="#e9a96a" ${T}/><circle cx="42" cy="38" r="7" fill="#ff6b6b" ${T}/><circle cx="62" cy="44" r="6" fill="#ff6b6b" ${T}/><circle cx="50" cy="62" r="6" fill="#ff6b6b" ${T}/>`},{kind:"juice",name:"Juice",cat:"food",w:55,svg:`<path d="M24 26 H76 L70 92 H30 Z" fill="#fff" ${T}/><path d="M27 44 H73 L70 92 H30 Z" fill="#ffb347"/><path d="M24 26 H76 L70 92 H30 Z" fill="none" ${T}/><path d="M58 30 L66 4" stroke="#ff8fab" stroke-width="6" stroke-linecap="round"/><circle cx="40" cy="60" r="4" fill="#fff" opacity=".6"/>`},{kind:"cat",name:"Toy cat",cat:"pets",w:110,svg:`${Ae}<path d="M78 80 Q98 70 90 50" stroke="#ffb347" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="30" ry="20" fill="#ffb347" ${T}/><path d="M22 30 L26 8 L40 22 M78 30 L74 8 L60 22" fill="#ffb347" ${T}/><circle cx="50" cy="42" r="28" fill="#ffc46b" ${T}/>${To(40,60,40)}<path d="M46 50 q4 4 8 0" ${T} fill="none"/>${Xa(32,68,50)}`},{kind:"dog",name:"Puppy",cat:"pets",w:120,svg:`${Ae}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#f5ebe0" ${T}/><circle cx="50" cy="42" r="28" fill="#fff" ${T}/><ellipse cx="22" cy="44" rx="10" ry="18" fill="#b07d54" ${T}/><ellipse cx="78" cy="44" rx="10" ry="18" fill="#b07d54" ${T}/><circle cx="60" cy="34" r="8" fill="#e6b88a" opacity=".7"/>${To(40,60,40)}<ellipse cx="50" cy="52" rx="5" ry="4" fill="${Oe}"/><path d="M50 56 v6" ${T}/>`},{kind:"bunny",name:"Bunny",cat:"pets",w:90,svg:`${Ae}<ellipse cx="36" cy="22" rx="8" ry="20" fill="#fff" ${T}/><ellipse cx="64" cy="22" rx="8" ry="20" fill="#fff" ${T}/><ellipse cx="36" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="64" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="50" cy="76" rx="28" ry="20" fill="#fff" ${T}/><circle cx="50" cy="52" r="22" fill="#fff" ${T}/>${To(42,58,50)}<path d="M47 58 l3 3 3 -3" ${T} fill="none"/>${Xa(36,64,58)}`},{kind:"fish",name:"Fish Bowl",cat:"pets",w:100,svg:`${Ae}<circle cx="50" cy="54" r="40" fill="#cdeffd" ${T}/><path d="M14 46 H86" stroke="#8ecae6" stroke-width="3"/><path d="M60 64 l14 -8 v16 z" fill="#ff9f68" ${T}/><ellipse cx="46" cy="64" rx="16" ry="11" fill="#ffb347" ${T}/><circle cx="40" cy="62" r="2.5" fill="${Oe}"/><circle cx="32" cy="38" r="3" fill="#fff" opacity=".8"/><rect x="24" y="10" width="52" height="8" rx="4" fill="#cdeffd" ${T}/>`},{kind:"kennel",name:"Dog Kennel",cat:"pets",w:210,h:175,holdable:!1,vb:"0 0 120 100",svg:`<ellipse cx="60" cy="97" rx="48" ry="3.2" fill="#000" opacity=".12"/><path d="M14 50 L60 12 L106 50 Z" fill="#ff8fab" ${T}/><path d="M28 46 L60 22 L92 46 Z" fill="#ffd6e4"/><rect x="20" y="46" width="80" height="50" rx="10" fill="#fff6ea" ${T}/><path d="M20 56 H100" stroke="#ffc2d4" stroke-width="7"/><path d="M34 96 V58 Q60 36 86 58 V96 Z" fill="#f3e4ff" ${T}/><path d="M40 96 V64 Q60 46 80 64 V96 Z" fill="#ffe8c7"/><circle cx="86" cy="64" r="8" fill="#bde0fe" ${T}/><circle cx="84" cy="62" r="2.2" fill="#fff" opacity=".9"/><path d="M28 62 l2.4 2.4 2.4-2.4 2.4 2.4 2.4-2.4-2.4-2.4-2.4 2.4z" fill="#ff8fab" ${T}/><circle cx="30" cy="90" r="3.2" fill="#fff" ${T}/><rect x="32" y="88.4" width="14" height="3.4" rx="1.7" fill="#fff" ${T}/><circle cx="48" cy="90" r="3.2" fill="#fff" ${T}/>`},{kind:"cat-tower",name:"Cat Tower",cat:"pets",w:150,h:225,holdable:!1,vb:"0 0 100 150",svg:`<ellipse cx="50" cy="146" rx="36" ry="3.4" fill="#000" opacity=".12"/><rect x="44" y="30" width="12" height="104" rx="6" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="136" rx="34" ry="10" fill="#ffc8dd" ${T}/><ellipse cx="50" cy="132" rx="26" ry="6" fill="#fff6ea"/><ellipse cx="50" cy="102" rx="30" ry="8" fill="#bde0fe" ${T}/><ellipse cx="50" cy="98" rx="22" ry="4" fill="#fff" opacity=".8"/><ellipse cx="50" cy="64" rx="28" ry="8" fill="#ffd166" ${T}/><ellipse cx="50" cy="60" rx="20" ry="4" fill="#fff6d0"/><circle cx="50" cy="22" r="8" fill="#ff8fab" ${T}/><circle cx="47" cy="19" r="2.2" fill="#fff" opacity=".75"/><g class="dangle"><circle cx="22" cy="126" r="8" fill="#ffb3c6" ${T}/><path d="M22 126 q12 5 7 16" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/></g><circle cx="80" cy="92" r="3.4" fill="#ffd166" ${T}/>`},{kind:"vanity",name:"Vanity",cat:"furniture",w:230,svg:`${Ae}<ellipse cx="50" cy="26" rx="24" ry="22" fill="#fff" ${T}/><ellipse cx="50" cy="26" rx="18" ry="16" fill="#cdeffd"/><path d="M38 18 l6 -6 M42 26 l10 -10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="12" r="3" fill="#ffd166" ${T}/><circle cx="74" cy="12" r="3" fill="#ffd166" ${T}/><rect x="6" y="48" width="88" height="14" rx="7" fill="#ffc8dd" ${T}/><rect x="10" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${T}/><rect x="62" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${T}/><circle cx="24" cy="75" r="3" fill="${Oe}"/><circle cx="76" cy="75" r="3" fill="${Oe}"/><rect x="12" y="90" width="6" height="7" rx="2" fill="${Oe}"/><rect x="82" y="90" width="6" height="7" rx="2" fill="${Oe}"/>`},{kind:"stool",name:"Vanity Stool",cat:"furniture",w:90,svg:`${Ae}<ellipse cx="50" cy="48" rx="34" ry="14" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="44" rx="28" ry="9" fill="#e4ccf2"/><path d="M28 58 L22 94 M72 58 L78 94 M50 62 V94" ${T}/><ellipse cx="50" cy="78" rx="22" ry="4" fill="none" ${T}/>`},{kind:"perfume",name:"Perfume",cat:"decor",w:50,svg:`<rect x="40" y="8" width="20" height="14" rx="5" fill="#ffd166" ${T}/><rect x="46" y="20" width="8" height="10" fill="#fff" ${T}/><path d="M20 50 Q20 30 50 30 Q80 30 80 50 V80 Q80 94 66 94 H34 Q20 94 20 80 Z" fill="#ff8fab" ${T}/><ellipse cx="36" cy="52" rx="5" ry="10" fill="#fff" opacity=".6"/><path d="M50 56 l4 8 8 1 -6 6 2 8 -8 -4 -8 4 2 -8 -6 -6 8 -1z" fill="#fff" opacity=".8"/>`},{kind:"polish",name:"Nail Polish",cat:"decor",w:40,svg:`<rect x="38" y="4" width="24" height="40" rx="8" fill="${Oe}"/><path d="M24 54 Q24 42 36 42 H64 Q76 42 76 54 V84 Q76 96 64 96 H36 Q24 96 24 84 Z" fill="#b388d6" ${T}/><ellipse cx="38" cy="62" rx="5" ry="12" fill="#fff" opacity=".55"/>`},{kind:"hairdryer",name:"Hair Dryer",cat:"decor",w:90,svg:`<path d="M60 52 L70 92 Q70 96 64 96 H58 Q52 96 52 90 L46 56 Z" fill="#a2d2ff" ${T}/><rect x="6" y="20" width="62" height="40" rx="20" fill="#bde0fe" ${T}/><ellipse cx="82" cy="40" rx="12" ry="20" fill="#ffc8dd" ${T}/><ellipse cx="82" cy="40" rx="6" ry="11" fill="#fff" ${T}/><circle cx="24" cy="40" r="7" fill="#fff" opacity=".7"/>`},{kind:"mirror",name:"Mirror",cat:"decor",w:120,wall:!0,svg:`<path d="M50 6 C74 6 88 24 88 50 C88 76 72 94 50 94 C28 94 12 76 12 50 C12 24 26 6 50 6 Z" fill="#ffd166" ${T}/><ellipse cx="50" cy="50" rx="30" ry="36" fill="#e0f4ff" ${T}/><path d="M36 34 l10 -10 M36 46 l20 -20" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="6" r="6" fill="#ff8fab" ${T}/>`}],Is={sofa:["living"],armchair:["living"],lamp:["living","bedroom"],tv:["living"],rug:["living","bedroom"],picture:["living","bedroom"],bookshelf:["living","bedroom"],bed:["bedroom"],teddy:["bedroom"],stars:["bedroom"],tub:["bedroom"],balloon:["any"],clock:["any"],window:["any"],ball:["any"],vanity:["salon"],stool:["salon"],perfume:["salon"],polish:["salon"],hairdryer:["salon"],mirror:["salon","bedroom"],fridge:["kitchen"],stove:["kitchen"],table:["kitchen","living"],chair:["kitchen","living"]};for(const e of pg)Is[e.kind]=["nursery"];for(const e of Ea)Is[e.kind]=["backyard"];for(const e of gg)Is[e.kind]=["bathroom"];Is["floor-cushion"]=["living"];Is["story-pillow"]=["bedroom"];Is["berry-basket"]=["kitchen"];Is["ribbon-tray"]=["salon"];Mn.push(...pg,...Ea,...gg,...$5);for(const e of Mn)e.rooms=Is[e.kind]??(["food"].includes(e.cat)?["kitchen"]:["any"]);const x5=new Set(["rug","tv","tree"]);for(const e of Mn)e.holdable??=!e.wall&&e.cat!=="furniture"&&e.w<=150&&!x5.has(e.kind);const M5=[{kind:"ranch-egg",name:"Fresh Egg",cat:"ranch",w:50,holdable:!0,rooms:["any"],svg:`${Ae}<path d="M50 30 C70 30 80 62 80 74 C80 90 66 96 50 96 C34 96 20 90 20 74 C20 62 30 30 50 30 Z" fill="#fff6e6" ${T}/><ellipse cx="40" cy="52" rx="6" ry="9" fill="#fff"/>`},{kind:"ranch-carrot",name:"Garden Carrot",cat:"ranch",w:70,holdable:!0,rooms:["any"],svg:`${Ae}<path d="M30 40 L78 34 L40 96 Z" fill="#ff922b" ${T}/><path d="M44 50 l10 -2 M42 64 l8 -2 M44 78 l6 -1" ${T}/><path d="M72 36 Q80 14 92 14 M72 36 Q68 14 76 4 M72 36 Q90 30 96 36" fill="none" stroke="#40c057" stroke-width="7" stroke-linecap="round"/>`},{kind:"ranch-bouquet",name:"Ranch Flowers",cat:"ranch",w:80,holdable:!0,rooms:["any"],svg:`${Ae}<path d="M50 94 L40 50 M50 94 L50 44 M50 94 L62 50" stroke="#40c057" stroke-width="5" stroke-linecap="round"/><path d="M36 78 L64 78 L56 96 L44 96 Z" fill="#c9a0dc" ${T}/>${[[38,40,"#ff8fab"],[50,30,"#ffd43b"],[64,40,"#74c0fc"],[44,52,"#ff922b"],[58,52,"#c9a0dc"]].map(([e,t,n])=>`<circle cx="${e}" cy="${t}" r="9" fill="${n}" ${T}/><circle cx="${e}" cy="${t}" r="3" fill="#fff3b0"/>`).join("")}`}];Mn.push(...Ax,...B4,...M5);const de=Object.fromEntries(Mn.map(e=>[e.kind,e])),Ni=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Xe=e=>e.h??e.w,If=e=>e.img?`<img class="packimg" src="${Ni(e.img)}" alt="${Ni(e.name)}" draggable="false" />`:`<svg viewBox="${e.vb??"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg">${e.svg}</svg>`,Vt=(e,t=!1)=>{const n=Zn()?Gn(e.kind):void 0;if(!n)return If(e);const s=t&&!e.wall?'<i class="artshade" aria-hidden="true"></i>':"",o=e.kind==="window"?'<i class="artnight" aria-hidden="true"></i>':"";return`${s}${o}<img class="packimg artimg" data-kind="${Ni(e.kind)}" src="${Ni(n)}" alt="${Ni(e.name)}" draggable="false" />`},L5='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="22" width="56" height="56" rx="14" fill="#fff6ea" stroke="#5a3d5c" stroke-width="4"/></svg>',E5=(e,t)=>e.img&&/\.webp(?:$|\?)/i.test(e.img)?L5:If(e);let Eh=!1;const S5='<svg class="imgmiss" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="20" y="20" width="60" height="60" rx="16" fill="#fff6ea" stroke="#5a3d5c" stroke-width="4" stroke-dasharray="9 7" opacity=".55"/></svg>',T5=e=>new Promise((t,n)=>{const s=new Image;s.onload=()=>t(),s.onerror=()=>n(new Error("image failed")),s.src=e});function P5(e,t,n,s){const[o,...i]=Ls;new Promise(a=>setTimeout(a,o)).then(()=>q0(()=>T5(n),i)).then(()=>{if(!e.isConnected||!Zn()||Gn(t.kind)!==n)return;const a=document.createElement("div");a.innerHTML=Vt(t,s),e.replaceWith(...Array.from(a.childNodes))},()=>{})}function A5(){Eh||typeof window>"u"||(Eh=!0,document.addEventListener("load",e=>{const t=e.target;t instanceof HTMLImageElement&&t.classList.contains("imgwait")&&t.classList.remove("imgwait")},!0),window.addEventListener("error",e=>{const t=e.target;if(!(t instanceof HTMLImageElement)||t.dataset.fell==="1")return;if(t.classList.contains("artimg")){const o=de[t.dataset.kind||""];if(!o)return;t.dataset.fell="1";const i=t.getAttribute("src")||"",a=!!t.parentElement?.querySelector(".artshade");t.parentElement?.querySelector(".artshade")?.remove(),t.parentElement?.querySelector(".artnight")?.remove();const r=document.createElement("div");r.innerHTML=If(o);const l=r.firstElementChild;l&&(t.replaceWith(l),i&&P5(l,o,i,a));return}if(!t.classList.contains("packimg"))return;if(e4(t)){t.classList.add("imgwait");return}t.dataset.fell="1";const n=document.createElement("div");n.innerHTML=S5;const s=n.firstElementChild;s&&t.replaceWith(s)},!0))}const mg="/cozy-preview/assets/cat-calico-nap-YtfdpbDg.webp",R5=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),yg="/cozy-preview/assets/cat-calico-sit-D1667wmu.webp",C5=Object.freeze(Object.defineProperty({__proto__:null,default:yg},Symbol.toStringTag,{value:"Module"})),wg="/cozy-preview/assets/cat-calico-stand-3uEzEb3G.webp",I5=Object.freeze(Object.defineProperty({__proto__:null,default:wg},Symbol.toStringTag,{value:"Module"})),bg="/cozy-preview/assets/cat-smokey-nap-lOaTkxI0.webp",O5=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"})),vg="/cozy-preview/assets/cat-smokey-sit-_C3gdGqG.webp",B5=Object.freeze(Object.defineProperty({__proto__:null,default:vg},Symbol.toStringTag,{value:"Module"})),kg="/cozy-preview/assets/cat-smokey-stand-Cdf8P9_H.webp",z5=Object.freeze(Object.defineProperty({__proto__:null,default:kg},Symbol.toStringTag,{value:"Module"})),_g="/cozy-preview/assets/cat-tabby-nap-B93Gst5Y.webp",D5=Object.freeze(Object.defineProperty({__proto__:null,default:_g},Symbol.toStringTag,{value:"Module"})),$g="/cozy-preview/assets/cat-tabby-sit-Ww7lKHQz.webp",H5=Object.freeze(Object.defineProperty({__proto__:null,default:$g},Symbol.toStringTag,{value:"Module"})),xg="/cozy-preview/assets/cat-tabby-stand-DRgSjSXE.webp",W5=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"})),Mg="/cozy-preview/assets/cat-tuxedo-nap-BVE8WH2l.webp",V5=Object.freeze(Object.defineProperty({__proto__:null,default:Mg},Symbol.toStringTag,{value:"Module"})),Lg="/cozy-preview/assets/cat-tuxedo-sit-CDRf8L3Y.webp",U5=Object.freeze(Object.defineProperty({__proto__:null,default:Lg},Symbol.toStringTag,{value:"Module"})),Eg="/cozy-preview/assets/cat-tuxedo-stand-D1hHQgPJ.webp",Q5=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),Sg="/cozy-preview/assets/dog-dachshund-sit-CSdaeXeM.webp",N5=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"})),Tg="/cozy-preview/assets/dog-dachshund-sleep-D51MuT-5.webp",q5=Object.freeze(Object.defineProperty({__proto__:null,default:Tg},Symbol.toStringTag,{value:"Module"})),Pg="/cozy-preview/assets/dog-dachshund-stand-CTaAEwG4.webp",j5=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),Ag="/cozy-preview/assets/dog-golden-sit-DFrpj82v.webp",F5=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"})),Rg="/cozy-preview/assets/dog-golden-sleep-CNdabQUH.webp",Z5=Object.freeze(Object.defineProperty({__proto__:null,default:Rg},Symbol.toStringTag,{value:"Module"})),Cg="/cozy-preview/assets/dog-golden-stand-4x9IvGBb.webp",G5=Object.freeze(Object.defineProperty({__proto__:null,default:Cg},Symbol.toStringTag,{value:"Module"})),Ig="/cozy-preview/assets/dog-poodle-sit-C6jNzYen.webp",Y5=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"})),Og="/cozy-preview/assets/dog-poodle-sleep-BQs2iX06.webp",K5=Object.freeze(Object.defineProperty({__proto__:null,default:Og},Symbol.toStringTag,{value:"Module"})),Bg="/cozy-preview/assets/dog-poodle-stand-CLU8S245.webp",X5=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),zg="/cozy-preview/assets/dog-pup-sit-Mv9ktTAi.webp",J5=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),Dg="/cozy-preview/assets/dog-pup-sleep-M8R5iFqC.webp",eM=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),Hg="/cozy-preview/assets/dog-pup-stand-0TcMABgh.webp",tM=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),Wg="/cozy-preview/assets/dog-spotty-sit-ogWfm1-x.webp",nM=Object.freeze(Object.defineProperty({__proto__:null,default:Wg},Symbol.toStringTag,{value:"Module"})),Vg="/cozy-preview/assets/dog-spotty-sleep-d8a6Ckq3.webp",sM=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),Ug="/cozy-preview/assets/dog-spotty-stand-BR88_RXw.webp",oM=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),Qg="/cozy-preview/assets/animal-bunny-C8IjPVne.webp",iM=Object.freeze(Object.defineProperty({__proto__:null,default:Qg},Symbol.toStringTag,{value:"Module"})),Ng="/cozy-preview/assets/animal-cow-BNE4y3fn.webp",aM=Object.freeze(Object.defineProperty({__proto__:null,default:Ng},Symbol.toStringTag,{value:"Module"})),qg="/cozy-preview/assets/animal-goat-BEXFo23D.webp",rM=Object.freeze(Object.defineProperty({__proto__:null,default:qg},Symbol.toStringTag,{value:"Module"})),jg="/cozy-preview/assets/animal-piglet-CITF8sJ9.webp",lM=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),Fg="/cozy-preview/assets/animal-sheep-DxcQ96U2.webp",cM=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),Zg="/cozy-preview/assets/apple-tree-ztWRqXgk.webp",dM=Object.freeze(Object.defineProperty({__proto__:null,default:Zg},Symbol.toStringTag,{value:"Module"})),Gg="/cozy-preview/assets/basket-D0ZYb-9_.webp",fM=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),Yg="/cozy-preview/assets/hen-house-BMb6vLOg.webp",pM=Object.freeze(Object.defineProperty({__proto__:null,default:Yg},Symbol.toStringTag,{value:"Module"})),Kg="/cozy-preview/assets/horse-chestnut-bare-ClpQBHmC.webp",hM=Object.freeze(Object.defineProperty({__proto__:null,default:Kg},Symbol.toStringTag,{value:"Module"})),Xg="/cozy-preview/assets/horse-chestnut-saddle-DjGl6zGL.webp",uM=Object.freeze(Object.defineProperty({__proto__:null,default:Xg},Symbol.toStringTag,{value:"Module"})),Jg="/cozy-preview/assets/horse-midnight-bare-CN96wJg8.webp",gM=Object.freeze(Object.defineProperty({__proto__:null,default:Jg},Symbol.toStringTag,{value:"Module"})),em="/cozy-preview/assets/horse-midnight-saddle-Zoz0ZHm8.webp",mM=Object.freeze(Object.defineProperty({__proto__:null,default:em},Symbol.toStringTag,{value:"Module"})),tm="/cozy-preview/assets/horse-rainbow-bare-oUM2b_lJ.webp",yM=Object.freeze(Object.defineProperty({__proto__:null,default:tm},Symbol.toStringTag,{value:"Module"})),nm="/cozy-preview/assets/horse-rainbow-saddle-B6LiByBH.webp",wM=Object.freeze(Object.defineProperty({__proto__:null,default:nm},Symbol.toStringTag,{value:"Module"})),sm="/cozy-preview/assets/horse-snowy-bare-DvYLjfaE.webp",bM=Object.freeze(Object.defineProperty({__proto__:null,default:sm},Symbol.toStringTag,{value:"Module"})),om="/cozy-preview/assets/horse-snowy-saddle-K4Sm_Hpq.webp",vM=Object.freeze(Object.defineProperty({__proto__:null,default:om},Symbol.toStringTag,{value:"Module"})),im="/cozy-preview/assets/horse-sunny-bare-zPTIKgZH.webp",kM=Object.freeze(Object.defineProperty({__proto__:null,default:im},Symbol.toStringTag,{value:"Module"})),am="/cozy-preview/assets/horse-sunny-saddle-M4nhkGvO.webp",_M=Object.freeze(Object.defineProperty({__proto__:null,default:am},Symbol.toStringTag,{value:"Module"})),rm="/cozy-preview/assets/tractor-DSDXT0Gz.webp",$M=Object.freeze(Object.defineProperty({__proto__:null,default:rm},Symbol.toStringTag,{value:"Module"})),xM={"cat-calico-stand":[1.018,1.009],"cat-smokey-sit":[1.063,1.063],"cat-smokey-stand":[1.032,1.009],"cat-tabby-stand":[1.027,1.009]},MM=xM;function lm(e){const t=MM[e];return t?` style="--fx:${t[0]};--fy:${t[1]}"`:""}const LM=Object.assign({"../../assets/art/pets/cat-calico-nap.webp":mg,"../../assets/art/pets/cat-calico-sit.webp":yg,"../../assets/art/pets/cat-calico-stand.webp":wg,"../../assets/art/pets/cat-smokey-nap.webp":bg,"../../assets/art/pets/cat-smokey-sit.webp":vg,"../../assets/art/pets/cat-smokey-stand.webp":kg,"../../assets/art/pets/cat-tabby-nap.webp":_g,"../../assets/art/pets/cat-tabby-sit.webp":$g,"../../assets/art/pets/cat-tabby-stand.webp":xg,"../../assets/art/pets/cat-tuxedo-nap.webp":Mg,"../../assets/art/pets/cat-tuxedo-sit.webp":Lg,"../../assets/art/pets/cat-tuxedo-stand.webp":Eg,"../../assets/art/pets/dog-dachshund-sit.webp":Sg,"../../assets/art/pets/dog-dachshund-sleep.webp":Tg,"../../assets/art/pets/dog-dachshund-stand.webp":Pg,"../../assets/art/pets/dog-golden-sit.webp":Ag,"../../assets/art/pets/dog-golden-sleep.webp":Rg,"../../assets/art/pets/dog-golden-stand.webp":Cg,"../../assets/art/pets/dog-poodle-sit.webp":Ig,"../../assets/art/pets/dog-poodle-sleep.webp":Og,"../../assets/art/pets/dog-poodle-stand.webp":Bg,"../../assets/art/pets/dog-pup-sit.webp":zg,"../../assets/art/pets/dog-pup-sleep.webp":Dg,"../../assets/art/pets/dog-pup-stand.webp":Hg,"../../assets/art/pets/dog-spotty-sit.webp":Wg,"../../assets/art/pets/dog-spotty-sleep.webp":Vg,"../../assets/art/pets/dog-spotty-stand.webp":Ug}),EM=Object.assign({"../../assets/art/ranch/animal-bunny.webp":Qg,"../../assets/art/ranch/animal-cow.webp":Ng,"../../assets/art/ranch/animal-goat.webp":qg,"../../assets/art/ranch/animal-piglet.webp":jg,"../../assets/art/ranch/animal-sheep.webp":Fg,"../../assets/art/ranch/apple-tree.webp":Zg,"../../assets/art/ranch/basket.webp":Gg,"../../assets/art/ranch/hen-house.webp":Yg,"../../assets/art/ranch/horse-chestnut-bare.webp":Kg,"../../assets/art/ranch/horse-chestnut-saddle.webp":Xg,"../../assets/art/ranch/horse-midnight-bare.webp":Jg,"../../assets/art/ranch/horse-midnight-saddle.webp":em,"../../assets/art/ranch/horse-rainbow-bare.webp":tm,"../../assets/art/ranch/horse-rainbow-saddle.webp":nm,"../../assets/art/ranch/horse-snowy-bare.webp":sm,"../../assets/art/ranch/horse-snowy-saddle.webp":om,"../../assets/art/ranch/horse-sunny-bare.webp":im,"../../assets/art/ranch/horse-sunny-saddle.webp":am,"../../assets/art/ranch/tractor.webp":rm}),Of=new Map;for(const[e,t]of Object.entries(LM)){const n=e.split("/").pop().replace(/\.webp$/i,"");Of.set(n,t)}for(const[e,t]of Object.entries(EM)){const n=e.split("/").pop().replace(/\.webp$/i,"");Of.set(n,t)}const Sh=["tabby","smokey","tuxedo","calico"],Th=["pup","poodle","dachshund","golden","spotty"],Ph=["goat","sheep","piglet","chicks","bunny","cow"],SM=new Set(["chicks"]),Ah=["chestnut","snowy","midnight","sunny","rainbow"];function Sa(e){return Lf()?Of.get(e)??null:null}function Ta(e,t="artimg sprite",n=""){return`<img class="${t}" alt="" draggable="false"${n} src="${e}">`}function Yo(e,t,n){const o=`cat-${Sh[e]??Sh[0]}-${t}`,i=Sa(o);return i?Ta(i,"artimg sprite petsprite",lm(o)):n}function fa(e,t,n){const o=`dog-${Th[e]??Th[0]}-${t}`,i=Sa(o);return i?Ta(i,"artimg sprite petsprite",lm(o)):n}function kd(e,t){const n=Ph[e]??Ph[0];if(SM.has(n))return t;const s=Sa(`animal-${n}`);return s?Ta(s,"artimg sprite ranchsprite"):t}function Bf(e,t,n){const s=Ah[e]??Ah[0],o=Sa(`horse-${s}-${t?"saddle":"bare"}`);return o?Ta(o,"artimg sprite ranchsprite horsesprite"):n}function qi(e,t){const n=Sa(e);return n?Ta(n,"artimg sprite ranchsprite"):t}const Rh=new WeakMap;function TM(e){const t=Rh.get(e);if(t)return t;if(!e.complete||!e.naturalWidth)return null;const n=document.createElement("canvas");n.width=e.naturalWidth,n.height=e.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0});if(!s)return null;try{s.drawImage(e,0,0)}catch{return null}const o=s.getImageData(0,0,n.width,n.height).data;return Rh.set(e,o),o}function PM(e,t,n){const s=e.getBoundingClientRect();if(s.width<1||s.height<1||!e.naturalWidth)return null;let o=(t-s.left)/s.width;const i=(n-s.top)/s.height;e.closest(".flipped")&&(o=1-o);const a=e.naturalWidth,r=e.naturalHeight,l=Math.min(s.width/a,s.height/r),c=a*l,d=r*l,f=(s.width-c)*.5,h=s.height-d,u=(o*s.width-f)/l,y=(i*s.height-h)/l;return u<0||y<0||u>=a||y>=r?null:{x:u,y}}function zf(e,t,n){const s=TM(e),o=s&&PM(e,t,n);if(!s||!o)return!s;const i=Math.floor(o.x),r=(Math.floor(o.y)*e.naturalWidth+i)*4+3;return s[r]>24}function AM(e,t){const n=[];try{for(let s=0;s<12;s++){const o=document.elementFromPoint(e,t);if(!o)return null;const i=o.closest("img.artimg");if(i&&!zf(i,e,t)){n.push(i),i.style.pointerEvents="none";continue}return o}return null}finally{for(let s=0;s<n.length;s++)n[s].style.pointerEvents=""}}const RM="var(--line)",CM=1.4,ut='fill="#3a1d3c" opacity=".14"',_d='fill="#3a1d3c" opacity=".22"',jt={l:[72,172],r:[128,172]},bn={l:[50,233],r:[150,233]},IM={l:[88,238],r:[112,238]};function O(e=3){return`stroke="${RM}" stroke-width="${(e*CM).toFixed(2)}" stroke-linejoin="round" stroke-linecap="round"`}function E(e){const n=(Math.round(e*10)/10).toFixed(1);return n.endsWith(".0")?n.slice(0,-2):n}function $d(e,t,n,s,o){const i=o*Math.PI/180,a=e-n,r=t-s,l=Math.cos(i),c=Math.sin(i);return{x:n+a*l-r*c,y:s+a*c+r*l}}function ji(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),o=(n>>16&255)*(1-t),i=(n>>8&255)*(1-t),a=(n&255)*(1-t);return"#"+s(o)+s(i)+s(a)}function Ch(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),o=n>>16&255,i=n>>8&255,a=n&255;return"#"+s(o+(255-o)*t)+s(i+(255-i)*t)+s(a+(255-a)*t)}function xd(e,t,n,s,o=0){const i=e[0],a=e[1],r=e[0]===t[0]&&e[1]===t[1]?t[0]+.01:t[0],l=t[1],c=r-i,d=l-a,f=Math.hypot(c,d)||1,h=-d/f,u=c/f,y=(i+r)/2+h*o,m=(a+l)/2+u*o,v=n/2,w=s/2,g=(v+w)/2*1.04,b=[i+h*v,a+u*v],_=[r+h*w,l+u*w],P=[r-h*w,l-u*w],$=[i-h*v,a-u*v];return`M${E(b[0])} ${E(b[1])} Q${E(y+h*g)} ${E(m+u*g)} ${E(_[0])} ${E(_[1])} A${E(w)} ${E(w)} 0 0 1 ${E(P[0])} ${E(P[1])} Q${E(y-h*g)} ${E(m-u*g)} ${E($[0])} ${E($[1])} A${E(v)} ${E(v)} 0 0 1 ${E(b[0])} ${E(b[1])} Z`}function Bl(e,t,n,s,o){const i=[],a=(t-e)/s;for(let r=0;r<s;r++){const l=e+r*a,c=l+a;i.push(`Q${E((l+c)/2)} ${E(n+o)} ${E(c)} ${E(n)}`)}return i.join(" ")}function Md(e,t,n,s,o,i=0){const a=[];for(let r=0;r<s;r++){const l=i+2*Math.PI*r/s,c=i+2*Math.PI*(r+1)/s,d=(l+c)/2,f=e+n*Math.cos(l),h=t+n*Math.sin(l),u=e+n*Math.cos(c),y=t+n*Math.sin(c),m=e+(n+o)*Math.cos(d),v=t+(n+o)*Math.sin(d);r===0&&a.push(`M${E(f)} ${E(h)}`),a.push(`Q${E(m)} ${E(v)} ${E(u)} ${E(y)}`)}return a.join(" ")+" Z"}function Es(e,t,n,s){const o=e==="arm"?jt[t]:IM[t],i=e==="arm"?t==="l"?s.armL:s.armR:t==="l"?s.legL:s.legR,a=e==="leg"?t==="l"?s.legLLift:s.legRLift:0,r=i||a?` transform="translate(0 ${E(-a)}) rotate(${E(i)} ${o[0]} ${o[1]})"`:"",c=`<g class="${e} ${t}${e==="arm"?" hang":""}" style="transform-box:view-box;transform-origin:${o[0]}px ${o[1]}px">${n}</g>`;return r?`<g${r}>${c}</g>`:c}const ys="var(--line)";function In(e,t=.8,n=2.2){return e.map(s=>`<path d="${s}" fill="none" stroke="var(--hair-shade)" stroke-width="${n}" stroke-linecap="round" opacity="${t}"/>`).join("")}function Ri(e,t=.32){return e.map(n=>`<path d="${n}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity="${t}"/>`).join("")}function ns(){return'<path d="M54 72 Q62 44 92 38 Q70 50 63 74 Z" fill="#fff" opacity=".45"/><path d="M60 64 Q70 48 86 42" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/><path d="M104 37 Q130 38 145 58 Q128 46 106 43 Z" fill="#fff" opacity=".3"/><circle cx="72" cy="50" r="2" fill="#fff" opacity=".85"/>'}function It(e,t,n){return n?`<path d="${e}" fill="url(#${t}h)"/>`:""}const Ih="M34 112 Q28 28 100 28 Q172 28 166 112 Q164 146 146 156 L54 156 Q36 146 34 112 Z";function Qt(e,t){return`<path d="${Ih}" fill="var(--hair)" ${O(3.2)}/>${It(Ih,e,t)}`}function _c(e,t,n,s,o,i,a=10){const r=Md(e+2,t+3,n,12,7,s+.1),l=Md(e,t,n-1,12,7,s);let c=`<path d="${r}" fill="var(--hair-shade)" ${O(3.2)}/><path d="${l}" fill="var(--hair)" ${O(3.2)}/>${It(l,o,i)}`;for(let d=0;d<a;d++){const f=d*2.5+s,h=(n-6)*Math.sqrt((d+.5)/a),u=e+h*Math.cos(f),y=t+h*Math.sin(f);c+=`<path d="M${E(u-4)} ${E(y+1)} q1 -5 4.5 -4.5 q3.5 1 2.5 4.5" fill="none" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>`,y<t-2&&u<e+6&&(c+=`<path d="M${E(u-2.5)} ${E(y-2.5)} q2 -2 3.5 -1" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>`)}return c+=`<ellipse cx="${E(e-10)}" cy="${E(t-12)}" rx="6" ry="3.4" fill="#fff" opacity=".55" transform="rotate(-35 ${E(e-10)} ${E(t-12)})"/>`,c+=`<path d="M${E(e-16)} ${E(t-6)} Q${E(e-6)} ${E(t-18)} ${E(e+4)} ${E(t-14)}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>`,c}function eo(e,t,n,s=6,o=[],i=7){let a=`<path d="M${e} ${t-6} V${n}" stroke="${ys}" stroke-width="${E(2*s+4.6)}" stroke-linecap="round"/><path d="M${e} ${t-6} V${n}" stroke="var(--hair)" stroke-width="${E(2*s)}" stroke-linecap="round"/>`,r=t,l=0;for(;r<n;){const c=l%2?1:-1;a+=`<path d="M${E(e-c)} ${E(r-4)} Q${E(e+c*s*1.05)} ${E(r-2)} ${E(e+c*s*.55)} ${E(r+4)} Q${E(e)} ${E(r+5.5)} ${E(e-c*1.4)} ${E(r+1)}" fill="none" stroke="var(--hair-shade)" stroke-width="1.7" stroke-linecap="round"/>`,c>0&&(a+=`<path d="M${E(e+1)} ${E(r-2)} q2.2 -.5 3 1.4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>`),r+=i,l++}for(let c=0;c<o.length;c++){const d=o[c];a+=`<rect x="${E(e-6.2)}" y="${d-4}" width="12.4" height="8" rx="2.6" fill="var(--acc)" stroke="${ys}" stroke-width="2"/><rect x="${E(e-4)}" y="${d-2.5}" width="2.6" height="4.5" rx="1" fill="#fff" opacity=".6"/>`}return a+=`<path d="M${e-4} ${n+2} q2 5 4 6 q2 -1 4 -6" fill="var(--hair)" stroke="${ys}" stroke-width="2"/>`,a}function Qr(e,t,n,s=5.5){let o=`<path d="M${e} ${t} V${n}" stroke="${ys}" stroke-width="${E(2*s+4)}" stroke-linecap="round"/><path d="M${e} ${t} V${n}" stroke="var(--hair)" stroke-width="${E(2*s)}" stroke-linecap="round"/>`;for(let i=t+8;i<n;i+=16)o+=`<path d="M${E(e-s*.7)} ${i} Q${e} ${i+5} ${E(e+s*.7)} ${i}" fill="none" stroke="var(--hair-shade)" stroke-width="1.6" opacity=".8"/>`;return o+=`<circle cx="${e}" cy="${n+3}" r="${E(s*.55)}" fill="var(--hair)" stroke="${ys}" stroke-width="2"/>`,o}function $c(e,t,n,s){return`<path d="${e}" fill="var(--hair)" ${O(3)}/>${It(e,t,n)}${In(s)}${Ri(s.slice(0,2),.45)}`}function Po(e,t,n){return`<ellipse cx="${e}" cy="${t}" rx="8" ry="5.5" fill="var(--acc)" ${O(2.4)} transform="rotate(${n} ${e} ${t})"/><ellipse cx="${e-1}" cy="${t-2}" rx="2.4" ry="1.3" fill="#fff" opacity=".6" transform="rotate(${n} ${e-1} ${t-2})"/>`}const ss='<path d="M42 104 Q44 76 70 66 Q86 74 100 58 Q114 74 130 66 Q156 76 158 104" fill="none" stroke="#3a1d3c" stroke-width="9" opacity=".12"/>';function cm(e){return e==="puffs"||e==="coily"?"puffs":e==="afro"?"afro":e==="braids"?"braids":e==="boxbraids"?"box":e==="locs"?"locs":e==="sidebraid"?"sidebraid":e==="crown"?"crown":e==="pony"?"pony":e==="sidepony"?"sidepony":e==="pigtails"?"pigtails":e==="halfup"?"halfup":e==="buns"?"buns":e==="topbun"?"topbun":e==="lowbun"?"lowbun":e==="long"?"long":e==="wavy"||e==="wavybob"?e==="wavy"?"wavy":"bob":e==="bob"||e==="curlybob"||e==="sidebangs"?"bob":e==="pixie"?"pixie":(e==="bangs"||e==="short")&&e==="bangs"?"bangs":"short"}function OM(e,t,n){const s=cm(e);if(s==="puffs"){const o=e==="coily"?26:30;return _c(48,52,o,0,t,n,12)+_c(152,52,o,.3,t,n,12)+`<path d="M42 112 Q38 48 100 44 Q162 48 158 112 Q154 144 100 146 Q46 144 42 112 Z" fill="var(--hair)" ${O(3.2)}/>`+Po(66,68,-35)+Po(134,68,35)}if(s==="afro")return _c(100,78,78,.2,t,n,14);if(s==="braids")return Qt(t,n)+eo(34,108,230,5.4,[196])+eo(166,108,230,5.4,[196]);if(s==="box")return Qt(t,n)+eo(30,110,228,5,[200],10)+eo(170,110,228,5,[200],10);if(s==="locs")return Qt(t,n)+Qr(32,112,236)+Qr(168,112,236);if(s==="sidebraid")return Qt(t,n);if(s==="pony"||s==="sidepony"||s==="halfup"){const o=s==="sidepony"?"M118 78 Q150 70 158 120 Q164 160 150 200 Q136 188 138 160 Q132 120 124 96 Z":"M126 40 Q178 28 180 92 Q184 132 168 168 Q160 196 174 220 Q148 212 145 182 Q140 156 152 124 Q160 90 132 64 Z",i=s==="halfup"?70:s==="sidepony"?86:44;return Qt(t,n)+$c(o,t,n,s==="sidepony"?["M130 96 Q150 120 146 160","M138 110 Q154 140 148 180"]:["M146 56 Q170 88 160 130","M156 66 Q176 100 166 140","M150 150 Q148 180 160 206"])+Po(s==="sidepony"?124:128,i,s==="sidepony"?-20:25)}if(s==="pigtails")return Qt(t,n)+$c("M40 100 Q22 120 28 168 Q34 200 48 214 Q58 196 52 160 Q58 124 56 108 Z",t,n,["M40 120 Q32 150 40 184"])+$c("M160 100 Q178 120 172 168 Q166 200 152 214 Q142 196 148 160 Q142 124 144 108 Z",t,n,["M160 120 Q168 150 160 184"])+Po(52,96,20)+Po(148,96,-20);if(s==="buns"){let o="";for(const i of[52,148])o+=`<circle cx="${i}" cy="44" r="24" fill="var(--hair)" ${O(3.2)}/>${n?`<circle cx="${i}" cy="44" r="24" fill="url(#${t}h)"/>`:""}`,o+=In([`M${i-14} 48 Q${i-14} 28 ${i} 26 Q${i+16} 30 ${i+14} 48`,`M${i-8} 54 Q${i+8} 56 ${i+12} 48`]),o+=`<path d="M${i-12} 34 Q${i-4} 24 ${i+4} 26" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>`;return o+Qt(t,n)}if(s==="topbun")return`<circle cx="100" cy="30" r="26" fill="var(--hair)" ${O(3.2)}/>${n?`<circle cx="100" cy="30" r="26" fill="url(#${t}h)"/>`:""}<path d="M82 28 Q100 12 118 28" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/>${In(["M86 36 Q100 24 114 36","M90 42 Q100 34 110 42"])}${Qt(t,n)}`;if(s==="lowbun")return Qt(t,n)+`<circle cx="100" cy="168" r="22" fill="var(--hair)" ${O(3)}/>${n?`<circle cx="100" cy="168" r="22" fill="url(#${t}h)"/>`:""}${Po(100,148,0)}`;if(s==="long"||s==="wavy"){const o=s==="wavy"?"M36 108 Q28 160 40 210 Q52 250 46 286 Q70 270 78 230 Q60 180 58 140 Q52 120 48 108 Z M164 108 Q172 160 160 210 Q148 250 154 286 Q130 270 122 230 Q140 180 142 140 Q148 120 152 108 Z":"M38 110 Q30 170 36 240 Q42 280 34 300 L70 292 Q64 240 66 180 Q62 140 56 112 Z M162 110 Q170 170 164 240 Q158 280 166 300 L130 292 Q136 240 134 180 Q138 140 144 112 Z";return`<path d="${o}" fill="var(--hair)" ${O(3)}/>${It(o,t,n)}${Qt(t,n)}`}if(s==="bob"){const o=e==="curlybob"?"M30 120 Q24 170 48 196 Q70 210 100 206 Q130 210 152 196 Q176 170 170 120 Q150 150 100 156 Q50 150 30 120 Z":"M32 116 Q26 168 50 190 Q78 204 100 200 Q122 204 150 190 Q174 168 168 116 Q150 148 100 154 Q50 148 32 116 Z";return`<path d="${o}" fill="var(--hair)" ${O(3.2)}/>${It(o,t,n)}${Qt(t,n)}`}return Qt(t,n)}function BM(e,t,n){const s=cm(e),o='<path d="M100 34 V56" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>';if(s==="puffs"||s==="braids"||s==="box"||s==="locs"||s==="afro"||s==="bangs"){const a=s==="afro"?"M48 100 Q52 48 100 40 Q148 48 152 100 Q140 78 100 70 Q60 78 48 100 Z":s==="bangs"?"M40 108 Q36 40 100 34 Q164 40 160 108 L150 96 Q130 108 100 100 Q70 108 50 96 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q154 74 130 62 Q112 70 100 52 Q88 70 70 62 Q46 74 40 106 Z";let r=ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}${o}`;return r+=In(["M84 44 Q70 52 60 70","M116 44 Q130 52 140 70","M92 40 Q80 48 74 58","M108 40 Q120 48 126 58","M76 42 Q58 56 52 82","M124 42 Q142 56 148 82"]),r+=Ri(["M90 36 Q78 42 70 52","M112 36 Q124 42 132 52"]),s==="puffs"?(r+=`<path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="${ys}" stroke-width="7" stroke-linecap="round"/><path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`,r+=`<path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="${ys}" stroke-width="7" stroke-linecap="round"/><path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`):s==="braids"||s==="box"?(r+=eo(48,114,200,5,[156],s==="box"?10:7),r+=eo(152,114,200,5,[156],s==="box"?10:7)):s==="locs"&&(r+=Qr(46,116,210,4.6)+Qr(154,116,210,4.6)),r+ns()}if(s==="sidebraid"){const a="M40 108 Q36 36 100 32 Q164 36 160 100 Q140 78 100 70 Q70 80 40 108 Z";return ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}${In(["M70 46 Q86 60 96 74","M120 44 Q136 58 146 74"])}${eo(150,100,210,5.6,[168],7)}${ns()}`}if(s==="crown"){const a="M40 106 Q36 36 100 32 Q164 36 160 106 Q150 80 100 74 Q50 80 40 106 Z";let r="";for(let l=0;l<7;l++){const c=58+l*14;r+=`<path d="M${c} 58 Q${c+7} 46 ${c+14} 58" fill="none" stroke="var(--hair-shade)" stroke-width="3.2" stroke-linecap="round"/>`}return ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}${r}${ns()}`}if(s==="pony"||s==="sidepony"||s==="halfup"||s==="pigtails"){const a=s==="sidepony"?"M40 108 Q34 36 100 32 Q166 34 160 108 Q150 86 120 78 Q90 90 60 74 Q48 90 40 108 Z":"M40 108 Q34 34 100 32 Q166 34 160 108 Q156 84 144 72 Q128 86 104 80 Q86 78 72 68 Q60 84 48 84 Q42 94 40 108 Z";let r=ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}`;return r+=`<path d="M40 104 Q36 120 44 132 Q46 116 50 106 Z" fill="var(--hair)" ${O(2.4)}/><path d="M160 104 Q164 120 156 132 Q154 116 150 106 Z" fill="var(--hair)" ${O(2.4)}/>`,r+=In(["M70 46 Q90 60 104 74","M128 46 Q140 60 146 74","M96 40 Q110 56 116 66"]),r+=Ri(["M76 42 Q92 52 100 62"]),r+ns()}if(s==="buns"||s==="topbun"||s==="lowbun"){const a=s==="topbun"?"M44 108 Q40 50 100 46 Q160 50 156 108 Q148 82 100 74 Q52 82 44 108 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q152 80 138 70 Q126 80 112 76 Q104 82 100 74 Q96 82 88 76 Q74 80 62 70 Q48 80 40 106 Z";let r=ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}`;if(r+=In(["M80 42 Q72 56 68 68","M120 42 Q128 56 132 68","M100 36 Q98 56 100 70","M90 38 Q84 56 86 72","M110 38 Q116 56 114 72"]),r+=Ri(["M86 38 Q80 46 78 54","M114 38 Q120 46 122 54"]),s==="buns")for(const[l,c]of[[42,1],[158,-1]]){const d=`M${l} 100 q${-8*c} 14 ${-2*c} 24 q${5*c} 8 ${-1*c} 14`;r+=`<path d="${d}" fill="none" stroke="${ys}" stroke-width="7" stroke-linecap="round"/><path d="${d}" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`}return r+ns()}if(s==="long"||s==="wavy"||s==="bob"){const a=e==="sidebangs"||e==="wavybob"?"M38 108 Q34 40 70 36 Q100 34 112 48 Q90 70 48 78 Q36 90 38 108 Z M112 48 Q140 36 164 50 Q166 100 150 108 Q130 80 112 70 Z":"M40 108 Q34 36 100 32 Q166 36 160 108 Q152 78 128 68 Q112 78 100 60 Q88 78 72 68 Q48 78 40 108 Z";return ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}${In(["M78 46 Q68 64 64 80","M122 46 Q132 64 136 80","M100 38 V64"])}${Ri(["M88 40 Q80 50 76 60"])}${ns()}`}if(s==="pixie"){const a="M48 104 Q44 48 100 40 Q140 46 150 78 Q156 100 140 108 Q120 86 100 90 Q70 84 52 104 Z";return ss+`<path d="${a}" fill="var(--hair)" ${O(3.2)}/>${It(a,t,n)}${In(["M70 56 Q86 70 96 84","M118 52 Q132 66 138 82"])}${ns()}`}const i="M46 106 Q42 46 100 38 Q158 46 154 106 Q140 80 100 76 Q60 80 46 106 Z";return ss+`<path d="${i}" fill="var(--hair)" ${O(3.2)}/>${It(i,t,n)}${o}${ns()}`}const Ko="var(--line)";function Df(e){return Math.abs(e.legL)>=40||Math.abs(e.legR)>=40}function uo(e,t,n,s=[]){const o=s.map(i=>`<path d="${i}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/>`).join("");return(n?`<path d="${e}" fill="url(#${t}c)"/>`:"")+o}function Ld(e,t,n){const s=(n+7).toFixed(1);return`<path d="${e}" fill="none" stroke="${Ko}" stroke-width="${s}" stroke-linecap="round"/><path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`}function Hf(e,t,n){return Es("arm",e,t,n).replace('class="arm ','class="arm sleeve ')}function yr(e,t,n=!1){const[s,o]=jt[e],i=e==="l"?-1:1;let a=Ld(`M${s} ${o} L${s+7*i} ${o+20}`,"var(--top)",22);return n&&(a+=`<path d="M${s+7*i-12} ${o+17} H${s+7*i+12}" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round" opacity=".9" transform="rotate(${-18*i} ${s+7*i} ${o+17})"/>`),Hf(e,a,t)}function Fi(e,t,n=!0){const[s,o]=jt[e],[i,a]=bn[e],r=e==="l"?-1:1,l=(s+i)/2+6*r;let c=Ld(`M${s-2*r} ${o-2} Q${l} ${(o+a)/2-6} ${i-r} ${a-16}`,"var(--top)",21);return n&&(c+=Ld(`M${i-3*r} ${a-17} L${i-r} ${a-13}`,"var(--top-trim)",20)),Hf(e,c,t)}function Ed(e,t,n=!1){const[s,o]=jt[e],i=e==="l"?-1:1,a=s+4*i,r=o+8;let l=`<path d="${Md(a,r,13,9,3.2)}" fill="var(--top)" ${O(2.8)}/>`;return l+=`<ellipse cx="${a-4*i}" cy="${r-5}" rx="5" ry="3" fill="#fff" opacity=".45"/>`,n&&(l+=`<path d="M${a-11} ${r+13} ${Bl(a-11,a+11,r+13,4,3)}" fill="none" stroke="#fff" stroke-width="2.4"/>`),Hf(e,l,t)}function qt(e,t){return e("l",t)+e("r",t)}const Oh="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 228 Q100 236 64 228 Z";function js(e,t,n,s,o,i,a="",r=[],l=!1){const c=`<path d="${t}" fill="var(--top)" ${O(3)}/>${uo(t,s,o,r)}${a}`;return`<g class="shirt" data-hem="${i}">${l?c+n:n+c}</g>`}function zM(e,t,n,s,o){if(t.dress)return"";const i=t.top;if(i==="hoodie"){const l="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L139 230 Q100 240 61 230 Z",c=`<path d="M120 162 Q132 164 134 170 L139 230 Q128 233 123 233 Z" ${ut}/><path d="M72 172 Q76 164 86 163" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" opacity=".38"/><path d="M78 159 Q100 182 122 159 Q120 152 100 152 Q80 152 78 159 Z" fill="var(--top-trim)" ${O(2.8)}/><path d="M92 172 v18 M108 172 v18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="92" cy="191" r="2.6" fill="#fff" ${O(1.8)}/><circle cx="108" cy="191" r="2.6" fill="#fff" ${O(1.8)}/><path d="M78 202 H122 L127 222 H73 Z" fill="var(--top)" ${O(2.6)}/><path d="M78 202 H122 L124 210 H76 Z" ${ut}/><path d="M61 226 Q100 236 139 226 L139 234 Q100 244 61 234 Z" fill="var(--top-trim)" ${O(2.8)}/>`;return js(e,l,qt(Fi,e),n,s,o,c,["M74 196 q-2 12 2 22","M126 190 q2 14 0 26"])}if(i==="stripes"||i==="jersey"){const l="M68 168 Q74 158 92 158 H108 Q126 158 132 168 L135 232 Q100 238 65 232 Z",c=`${n}st`,d=i==="jersey"?'<path d="M70 176 H130 L128 188 H72 Z" fill="var(--top-trim)"/><path d="M68 210 H132 L130 222 H70 Z" fill="var(--top-trim)"/>':[166,179,192,205,218,231].map(y=>`<rect x="60" y="${y}" width="80" height="6" fill="var(--top-trim)"/>`).join(""),f=i==="jersey"?'<path d="M86 160 L100 176 L114 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/>':'<path d="M84 159 Q100 172 116 159" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',h=s?`<path d="${l}" fill="url(#${n}c)"/>`:"";return`<g class="shirt" data-hem="${o}"><defs><clipPath id="${c}"><path d="${l}"/></clipPath></defs>${qt(y=>yr(y,e,!0),e)}<path d="${l}" fill="var(--top)"/><g clip-path="url(#${c})">${h}<path d="M118 160 L135 168 L138 236 H120 Z" ${ut}/>${d}</g><path d="${l}" fill="none" ${O(3)}/>${f}<path d="M78 198 q-2 12 1 24" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/><path d="M122 190 q2 14 0 28" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/></g>`}if(i==="sweater"||i==="cardigan"){const l=i==="cardigan"?"M68 168 Q74 158 92 158 H108 Q126 158 132 168 L134 232 H108 L100 210 L92 232 H66 Z":"M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 234 Q100 242 64 234 Z",c=`<path d="M118 166 L134 174 L136 230 Q120 236 112 228 Z" ${ut}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M64 226 Q100 236 136 226" fill="none" stroke="var(--top-trim)" stroke-width="6" stroke-linecap="round"/>`,d=i==="cardigan"?[186,202,218].map(f=>`<circle cx="100" cy="${f}" r="2.4" fill="var(--top-trim)" ${O(1.4)}/>`).join(""):"";return js(e,l,qt(Fi,e),n,s,o,c+d,["M80 190 q-2 16 0 28","M120 188 q2 16 0 30"])}if(i==="tank"||i==="bib"){const l=i==="bib"?"M78 168 H122 L126 228 H74 Z":"M78 168 Q86 160 96 164 H104 Q114 160 122 168 L128 226 H72 Z",c=`<path d="M110 172 H126 L128 226 H114 Z" ${ut}/><path d="M82 176 Q84 168 92 166" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".35"/>`,d=i==="bib"?`${c}<path d="M86 150 L78 168 M114 150 L122 168" stroke="${Ko}" stroke-width="8" stroke-linecap="round"/><path d="M86 150 L78 168 M114 150 L122 168" stroke="var(--top)" stroke-width="4.5" stroke-linecap="round"/><rect x="90" y="176" width="20" height="16" rx="3" fill="var(--top-trim)" ${O(1.6)}/>`:`${c}<path d="M84 166 Q100 176 116 166" fill="none" stroke="var(--top-trim)" stroke-width="4"/>`;return js(e,l,"",n,s,o,d,["M88 190 q2 14 0 24"])}if(i==="puff"||i==="ruffle"){const l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L132 222 H68 Z",c=`<path d="M100 172 l-8 -5 v10 z M100 172 l8 -5 v10 z" fill="var(--top-trim)" ${O(1.8)}/><path d="M97 174 l-4 10 M103 174 l4 10" stroke="var(--top-trim)" stroke-width="2.6" stroke-linecap="round"/>`,d=(i==="ruffle"?`<path d="M68 166 Q74 178 82 166 Q90 180 100 166 Q110 180 118 166 Q126 180 132 166" fill="var(--top-trim)" ${O(2)}/>`:c)+`<path d="M118 162 Q128 164 130 170 L132 222 H120 Z" ${ut}/><path d="M74 176 Q76 168 84 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return js(e,l,qt(Ed,e),n,s,o,d,["M86 190 q2 10 0 20","M116 188 q-2 12 0 22"],!0)}if(i==="button"){const l=Oh,c=[180,196,212].map(f=>`<circle cx="100" cy="${f}" r="2.6" fill="#fff" ${O(1.6)}/>`).join(""),d=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${ut}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M100 164 V226" stroke="#fff" stroke-width="2" opacity=".7"/>${c}<path d="M82 160 Q100 172 118 160" fill="var(--top)" ${O(2.2)}/>`;return js(e,l,qt(f=>yr(f,e,!1),e),n,s,o,d,["M78 196 q-1 12 2 20"])}if(i==="raincoat"){const l="M62 168 Q70 156 92 156 H108 Q130 156 138 168 L146 240 Q100 252 54 240 Z",c=`<path d="M120 164 L142 176 L146 236 Q124 244 116 232 Z" ${ut}/><path d="M72 176 Q76 166 88 164" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M70 156 Q100 176 130 156" fill="none" stroke="var(--top-trim)" stroke-width="6"/><circle cx="100" cy="196" r="4" fill="var(--top-trim)" ${O(1.8)}/><path d="M78 214 H122" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round"/>`;return js(e,l,qt(Fi,e),n,s,o,c,["M76 190 q-4 18 -2 36","M124 188 q4 18 2 36"])}const a=Oh,r=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${ut}/><path d="M84 160 Q100 172 116 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return js(e,a,qt(l=>yr(l,e,!1),e),n,s,o,r,["M78 196 q-2 12 1 22","M122 194 q2 14 -1 24"])}function Bh(e,t,n,s,o,i=!1,a=16){const r=e==="l"?88:112,l=e==="l"?-1:1,c=`M${r-a/2} 226 Q${r-a/2+l} ${n-20} ${r-a/2+2*l} ${n} H${r+a/2} Q${r+a/2} ${n-30} ${r+a/2-l} 226 Z`;let d=`<path d="${c}" fill="var(--bottom)" ${O(2.8)}/>`;return d+=uo(c,s,o,[`M${r-4*l} 240 Q${r} ${(226+n)/2} ${r+3*l} ${n-14}`]),e==="r"?d+=`<path d="M${r+1} 230 H${r+a/2} L${r+a/2} ${n} H${r+4} Z" ${ut}/>`:d+=`<path d="M${r-2} 238 Q${r-6} ${(226+n)/2} ${r-2} ${n-10}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".3"/>`,i&&(d+=`<path d="M${r-a/2-1} ${n-8} H${r+a/2+1} V${n+1} H${r-a/2-1} Z" fill="var(--bottom-trim)" ${O(2)}/>`),Es("leg",e,d,t)}function DM(e,t,n,s){if(t.dress)return'<g data-layer="bottom"></g>';const o=t.bottom;if(Df(e)&&(o==="skirt"||o==="tutu"||o==="overalls"))return`<g data-layer="bottom"><path class="skirt" d="${o==="tutu"?"M52 216 H148 L160 248 Q100 260 40 248 Z":"M62 218 H138 L152 252 Q100 264 48 252 Z"}" fill="var(--bottom)" ${O(3)}/></g>`;if(o==="skirt"){const h="M68 222 H132 L146 262 Q100 274 54 262 Z";return`<g data-layer="bottom"><path class="skirt" d="${h}" fill="var(--bottom)" ${O(3)}/>${uo(h,n,s,["M82 234 L76 258","M100 232 V266","M118 234 L126 258"])}<path d="M114 224 H132 L146 262 Q130 268 118 266 Z" ${ut}/><path d="M72 228 Q66 246 64 258" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".3"/><path d="M84 236 v10 M116 236 v10" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3" opacity=".55"/></g>`}if(o==="tutu")return'<g data-layer="bottom"></g>';if(o==="overalls"){const h="M66 220 H134 L139 264 H106 L100 254 L94 264 H61 Z";return`<g data-layer="bottom"><g class="leg" style="transform-box:view-box;transform-origin:100px 238px"><path d="${h}" fill="var(--bottom)" ${O(3)}/>${uo(h,n,s,["M78 232 Q74 248 72 260","M122 230 Q128 248 132 260"])}<path d="M118 222 H134 L139 264 H122 Z" ${ut}/><path d="M64 258 H95 M105 258 H138" stroke="var(--bottom-trim)" stroke-width="4"/></g></g>`}const a=o==="shorts"?256:292,r=o==="joggers"||o==="jeans",l=o==="leggings"?12:o==="shorts"?18:16,c=Bh("l",e,a,n,s,r,l)+Bh("r",e,a,n,s,r,l),d=o==="jeans"?'<path d="M88 232 V286 M112 232 V286" stroke="#c9a24a" stroke-width="1.4" stroke-dasharray="2 3" opacity=".7"/>':"";return`<g data-layer="bottom">${`<path d="M70 220 H130 V230 H70 Z" fill="var(--bottom)" ${O(2.4)}/>`}${c}${d}</g>`}function HM(e,t,n,s){if(t.dress)return'<g data-layer="bottom-over"></g>';const o=t.bottom;if(o==="overalls"){const i="M78 180 H122 L124 228 H76 Z";return`<g data-layer="bottom-over"><path d="M80 176 L72 164 M120 176 L128 164" stroke="${Ko}" stroke-width="12" stroke-linecap="round"/><path d="M80 176 L72 164 M120 176 L128 164" stroke="var(--bottom)" stroke-width="7.5" stroke-linecap="round"/><path d="${i}" fill="var(--bottom)" ${O(3)}/>${uo(i,n,s,["M86 200 q14 6 28 0"])}<path d="M88 190 H112 V206 Q100 212 88 206 Z" fill="var(--bottom-trim)" ${O(2.4)}/><circle cx="82" cy="186" r="3.6" fill="#fff" ${O(2)}/><circle cx="118" cy="186" r="3.6" fill="#fff" ${O(2)}/><path d="M66 222 H134 L135 230 H65 Z" fill="var(--bottom)" ${O(3)}/><path d="M108 180 H122 L124 228 H110 Z" ${ut}/><path d="M82 182 v12" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/></g>`}if(o==="tutu"){if(Df(e))return`<g data-layer="bottom-over"><path class="skirt" d="M58 220 H142 L154 246 Q100 256 46 246 Z" fill="var(--bottom)" ${O(2.4)}/></g>`;let i="";const a=[[266,50,150,8],[256,56,144,7],[246,64,136,6]];for(let l=0;l<a.length;l++){const[c,d,f,h]=a[l],u=`M${d+8} ${c-22} H${f-8} L${f} ${c} ${Bl(f,d,c,6,h)} Z`;i+=`<path class="skirt" d="${u}" fill="var(--bottom)" ${O(2.4)}/>`,i+=`<path d="M${f-20} ${c-16} L${f-6} ${c-2}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".2"/>`}const r="M66 214 H134 V224 H66 Z";return`<g data-layer="bottom-over">${i}<path d="${r}" fill="var(--bottom-trim)" ${O(2.6)}/>${uo(r,n,s)}</g>`}return'<g data-layer="bottom-over"></g>'}function zh(e,t){return`<path d="M${e} ${t+2} c-3 -5 -9 -1 -5 3 l5 4 l5 -4 c4 -4 -2 -8 -5 -3z" fill="var(--top-trim)" opacity=".85"/>`}function WM(e,t,n,s,o){const i=t.dress;if(!i)return"";const a=`${n}dr`;let r="M72 210 H128 L150 268 Q100 282 50 268 Z",l="M72 168 Q78 158 94 158 H106 Q122 158 128 168 L130 214 H70 Z",c="",d=qt(y=>Ed(y,e,!0),e),f=!0;i==="sundress"?(r="M76 214 H124 L140 266 Q100 276 60 266 Z",c='<path d="M78 166 Q100 180 122 166" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',d="",f=!1):i==="party"?c=[[64,236],[86,228],[108,234],[130,242],[76,254],[100,250],[122,258],[92,188]].map(([m,v])=>zh(m,v)).join("")+`<path d="M100 214 l-10 -6 v12 z M100 214 l10 -6 v12 z" fill="var(--top-trim)" ${O(1.8)}/><path d="M52 262 Q100 276 148 262" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="1 5" opacity=".85"/>`:i==="pinafore"?(l="M80 176 H120 L122 214 H78 Z",c='<path d="M86 158 L80 178 M114 158 L120 178" stroke="var(--top)" stroke-width="5" stroke-linecap="round"/>',d="",f=!1,r="M74 212 H126 L142 264 Q100 274 58 264 Z"):i==="jumper"?(c=`<path d="M84 160 Q100 174 116 160" fill="var(--top-trim)" ${O(2)}/>`,d=qt(y=>yr(y,e,!0),e),f=!1):i==="ballet"?(r="M78 214 H122 L132 250 Q100 258 68 250 Z",c=`<path d="M70 248 ${Bl(70,130,248,5,5)}" fill="none" stroke="#fff" stroke-width="2"/>`,d=qt(Ed,e)):i==="nightgown"?(r="M80 214 H120 L132 270 Q100 278 68 270 Z",c='<path d="M88 164 Q100 176 112 164" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>',d=qt(Fi,e),f=!1):i==="raindress"?(r="M70 212 H130 L148 268 Q100 280 52 268 Z",c='<path d="M76 168 Q100 186 124 168" fill="none" stroke="var(--top-trim)" stroke-width="5"/><circle cx="100" cy="198" r="3.4" fill="var(--top-trim)"/>',d=qt(Fi,e),f=!1):(r="M70 214 H130 L152 266 Q100 280 48 266 Z",l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L131 216 H69 Z",c=[[66,236],[86,228],[110,232],[132,240],[76,254],[100,248],[124,258],[56,260],[144,262],[96,266],[84,182],[114,190],[100,200]].map(([m,v])=>zh(m,v)).join("")+`<path d="M112 214 H130 L152 266 Q138 271 128 272 Z" ${ut}/><path d="M118 162 L130 168 L131 216 H120 Z" ${ut}/><path d="M50 262 Q100 276 150 262" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round" opacity=".9"/><path d="M60 226 Q56 244 54 258" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".3"/><path d="M68 210 H132 V220 H68 Z" fill="var(--top-trim)" ${O(2.6)}/><path d="M100 215 l-13 -8 v16 z M100 215 l13 -8 v16 z" fill="var(--top-trim)" ${O(2.2)}/><circle cx="100" cy="215" r="3.6" fill="var(--top-trim)" ${O(2)}/><path d="M97 218 l-5 14 M103 218 l5 14" stroke="var(--top-trim)" stroke-width="3" stroke-linecap="round"/><path d="M80 158 Q78 172 94 170 Q99 166 100 162 Q101 166 106 170 Q122 172 120 158 Q100 164 80 158 Z" fill="#fff" ${O(2.4)}/>`),Df(e)&&(r="M68 214 H132 L150 250 Q100 262 50 250 Z");const h=`${r} ${l}`,u=`<path class="skirt" d="${r}" fill="var(--top)" ${O(3)}/><path d="${l}" fill="var(--top)" ${O(3)}/><g clip-path="url(#${a})">${uo(h,n,s,["M80 226 Q74 248 70 266","M120 226 Q126 248 130 266"])}${c}</g>`;return`<g class="shirt" data-hem="${o}"><defs><clipPath id="${a}"><path d="${h}"/></clipPath></defs>${f?u+d:d+u}</g>`}function VM(e,t,n,s){const o=e==="l"?`<g transform="translate(${2*s} 0) scale(-1 1)">${n}</g>`:n;return Es("leg",e,o,t)}function UM(e,t){const n=t.shoes;let s="";for(const o of["l","r"]){const i=o==="l"?87:113;let a="";if(n==="sneakers"||n==="lightup"){const r=n==="lightup"?`<circle cx="${i-4}" cy="292" r="2.2" fill="#ff8fab"/><circle cx="${i+4}" cy="296" r="2.2" fill="#8ecae6"/><circle cx="${i}" cy="300" r="2" fill="#ffd166"/>`:"";a=`<path d="M${i} 270 V286" fill="none" stroke="var(--sock)" stroke-width="16" stroke-linecap="round"/><path d="M${i-14} 296 Q${i-14} 284 ${i} 284 Q${i+14} 284 ${i+16} 296 Q${i+22} 298 ${i+22} 304 Q${i+22} 310 ${i+12} 310 H${i-14} Q${i-18} 310 ${i-16} 302 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-12} 304 H${i+18}" stroke="var(--shoe-trim)" stroke-width="3.5" stroke-linecap="round"/><path d="M${i-6} 290 l5 2 M${i-6} 295 l6 2" stroke="${Ko}" stroke-width="1.8" stroke-linecap="round"/>${r}`}else if(n==="boots"||n==="rainboots"){const r=n==="rainboots"?248:258,l=n==="boots"?[[-6,272],[5,268],[-2,284],[7,290],[-8,294]].map(([c,d])=>`<circle cx="${i+c}" cy="${d}" r="2.6" fill="#fff" opacity=".9"/>`).join(""):"";a=`<path d="M${i-14} ${r} H${i+14} V296 Q${i+22} 298 ${i+22} 304 Q${i+22} 310 ${i+10} 310 H${i-14} Q${i-18} 310 ${i-16} 302 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-16} ${r-4} H${i+16} V${r+8} H${i-16} Z" fill="var(--shoe)" ${O(2.6)}/>`+l+(n==="rainboots"?`<path d="M${i-12} ${r+16} H${i+12}" stroke="var(--shoe-trim)" stroke-width="4" stroke-linecap="round"/>`:`<path d="M${i-6} ${r+14} V292" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".45"/>`)}else n==="maryjanes"?a=`<path d="M${i} 266 V290" fill="none" stroke="var(--sock)" stroke-width="15" stroke-linecap="round"/><path d="M${i-12} 274 ${Bl(i-12,i+12,274,4,4)} L${i+12} 268 H${i-12} Z" fill="var(--sock)" ${O(2)}/><path d="M${i-13} 298 Q${i-13} 290 ${i} 290 Q${i+13} 290 ${i+14} 298 Q${i+20} 300 ${i+20} 304 Q${i+20} 309 ${i+8} 309 H${i-12} Q${i-16} 309 ${i-14} 302 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-10} 294 H${i+12}" stroke="${Ko}" stroke-width="2"/><circle cx="${i+8}" cy="294" r="2.2" fill="var(--acc)"/>`:n==="sandals"?a=`<path d="M${i-12} 298 Q${i-12} 286 ${i} 286 Q${i+12} 286 ${i+14} 296 Q${i+18} 298 ${i+18} 302 Q${i+18} 306 ${i+8} 306 H${i-12} Q${i-16} 306 ${i-14} 300 Z" fill="var(--skin)" ${O(2.4)}/><path d="M${i-14} 304 H${i+18}" stroke="var(--shoe)" stroke-width="5" stroke-linecap="round"/><path d="M${i-8} 292 H${i+10} M${i+2} 300 L${i+8} 290" stroke="var(--shoe)" stroke-width="4" stroke-linecap="round"/><circle cx="${i+2}" cy="293" r="3" fill="var(--shoe-trim)" ${O(1.4)}/>`:n==="slippers"?a=`<path d="M${i-14} 292 Q${i-14} 280 ${i} 278 Q${i+16} 280 ${i+18} 294 Q${i+22} 296 ${i+20} 304 H${i-14} Q${i-18} 304 ${i-16} 296 Z" fill="var(--shoe)" ${O(2.8)}/><path d="M${i-6} 286 q6 -4 12 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>`:a=`<ellipse cx="${i+2}" cy="304" rx="16" ry="7" fill="var(--shoe)" ${O(2.6)}/>`;s+=VM(o,e,a,i)}return`<g data-layer="shoes">${s}</g>`}const dm=new Set(["cap","beanie","sunhat"]),QM=new Set(["catears","earmuffs"]);function ri(e){return e==="afro"?28:e==="topbun"?20:e==="puffs"||e==="coily"?16:e==="buns"||e==="curlybob"?12:e==="long"||e==="wavy"||e==="wavybob"?8:0}function ki(e,t,n){if(!dm.has(t)&&!QM.has(t))return n;const s=ri(e);return s?`<g data-hat="${t}" transform="translate(0 ${E(-s)})">${n}</g>`:n}function NM(e,t,n){let s="";for(let l=0;l<n.length;l++)dm.has(n[l])&&(s=n[l]);if(!s)return"";const o=ri(t),i=(s==="beanie"?58:s==="cap"?64:62)-o,a=Math.min(70,i),r=t==="afro"||t==="puffs"||t==="coily"?92:78;return`<mask id="${e}hm" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" data-brim="${E(a)}"><rect x="-30" y="-50" width="260" height="420" fill="#fff"/><rect x="${E(100-r)}" y="-50" width="${E(r*2)}" height="${E(a+50)}" fill="#000"/></mask>`}function xc(e,t,n){return`<g transform="translate(${e} ${t}) scale(${n})"><path d="M0 0 C-8 -14 -30 -14 -28 0 C-30 14 -8 14 0 0 Z" fill="var(--acc)" ${O(2.6)}/><path d="M0 0 C8 -14 30 -14 28 0 C30 14 8 14 0 0 Z" fill="var(--acc)" ${O(2.6)}/><rect x="-6" y="-7" width="12" height="14" rx="4" fill="var(--acc2)" ${O(2.2)}/></g>`}function qM(e){return`<g data-layer="accessory">${e.acc.map(n=>n==="glasses"?'<circle cx="76" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="124" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="76" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><circle cx="124" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3.2"/><path d="M58 108 L42 104 M142 108 L158 104" stroke="var(--frame)" stroke-width="3.2" stroke-linecap="round"/>':n==="square"?'<rect x="58" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><rect x="108" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><path d="M92 112 H108" stroke="var(--frame)" stroke-width="3.2"/>':n==="sunnies"?'<path d="M56 104 H94 Q96 122 76 122 Q56 122 56 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M106 104 H144 Q146 122 124 122 Q104 122 106 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3"/>':n==="bow"?xc(100,78,.7):n==="bigbow"?xc(100,70,1.15):n==="headband"?`<path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="${Ko}" stroke-width="12" stroke-linecap="round"/><path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round"/>${xc(100,32,.85)}`:n==="flower"?`<g transform="translate(138 78)">${[0,60,120,180,240,300].map(s=>`<ellipse cx="0" cy="-8" rx="5" ry="8" fill="var(--acc)" ${O(1.6)} transform="rotate(${s})"/>`).join("")}<circle r="4.5" fill="var(--acc2)" ${O(1.6)}/></g>`:n==="cap"?ki(e.hair,"cap",`<path d="M54 64 Q56 20 100 16 Q144 20 146 64 Q128 54 100 56 Q72 54 54 64 Z" fill="var(--acc)" ${O(3)}/><path d="M48 56 Q100 66 152 56 L156 62 Q100 70 44 62 Z" fill="var(--acc)" ${O(3)}/><circle cx="100" cy="18" r="4.5" fill="#fff" ${O(2)}/>`):n==="beanie"?ki(e.hair,"beanie",`<path d="M50 66 Q48 14 100 8 Q152 14 150 66 Q128 56 100 58 Q72 56 50 66 Z" fill="var(--acc)" ${O(3)}/><path d="M50 58 H150" stroke="var(--acc2)" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="8" r="7" fill="var(--acc2)" ${O(2.4)}/>`):n==="sunhat"?ki(e.hair,"sunhat",`<path d="M66 56 Q68 22 100 18 Q132 22 134 56 Q118 48 100 50 Q82 48 66 56 Z" fill="var(--acc)" ${O(3)}/><path d="M18 56 Q100 68 182 56 Q170 64 100 66 Q30 64 18 56 Z" fill="var(--acc)" ${O(3)}/><path d="M72 46 Q100 38 128 46" fill="none" stroke="var(--acc2)" stroke-width="4"/>`):n==="catears"?ki(e.hair,"catears",`<path d="M58 62 L70 18 L86 60 Z" fill="var(--acc)" ${O(2.6)}/><path d="M114 60 L130 18 L142 62 Z" fill="var(--acc)" ${O(2.6)}/><path d="M64 54 L72 30 L80 52 Z" fill="var(--acc2)"/><path d="M120 52 L128 30 L136 54 Z" fill="var(--acc2)"/>`):n==="earmuffs"?ki(e.hair,"earmuffs",`<path d="M44 68 Q48 26 100 22 Q152 26 156 68" fill="none" stroke="var(--acc)" stroke-width="6"/><circle cx="34" cy="86" r="14" fill="var(--acc)" ${O(2.8)}/><circle cx="166" cy="86" r="14" fill="var(--acc)" ${O(2.8)}/><circle cx="34" cy="86" r="6" fill="var(--acc2)"/><circle cx="166" cy="86" r="6" fill="var(--acc2)"/>`):"").join("")}</g>`}const Nr="var(--line)",Sd="#f7f3ee",_i="#3d3150",Ja="#f7f1e8",pa="#4a2f5e",Zi="#2f2433";function Wf(e,t,n){return`<path d="${e}" fill="none" stroke="${Nr}" stroke-width="${E(n+7)}" stroke-linecap="round"/><path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`}function jM(e){const[t,n]=jt[e],[s,o]=bn[e],i=e==="l"?-1:1,a=(t+s)/2+6*i;return`M${t-2*i} ${n-2} Q${a} ${(n+o)/2-6} ${s-i} ${o-16}`}function fm(e,t,n){return["l","r"].map(s=>{const o=Wf(jM(s),e,21)+(n?n(s):"");return Es("arm",s,o,t).replace('class="arm ','class="arm sleeve ')}).join("")}function pm(e,t,n){return["l","r"].map(s=>{const o=s==="l"?-1:1,i=s==="l"?88:112,a=Wf(`M${i} 238 L${i+o} 280`,e,24)+(n?n(s,i):"");return Es("leg",s,a,t)}).join("")}const hm="M70 168 Q74 160 92 160 H108 Q126 160 130 168 L134 236 Q100 244 66 236 Z";function li(e,t){return t.hip?`<g transform="rotate(${E(t.hip)} 100 238)">${e}</g>`:e}function FM(e,t){const n="#ffd166",s=`<path d="${hm}" fill="${n}" ${O(3)}/>`,o=`<path d="M78 188 H122 V232 H78 Z" fill="${e}" ${O(2.8)}/><path d="M88 200 H112 V216 Q100 220 88 216 Z" fill="none" stroke="#3a1d3c" stroke-width="2.4" opacity=".3" stroke-linejoin="round"/><path d="M74 166 L82 190 M126 166 L118 190" stroke="${Nr}" stroke-width="10" stroke-linecap="round"/><path d="M74 166 L82 190 M126 166 L118 190" stroke="${e}" stroke-width="5.5" stroke-linecap="round"/><circle cx="82" cy="192" r="4" fill="#c9ced6" ${O(1.6)}/><circle cx="118" cy="192" r="4" fill="#c9ced6" ${O(1.6)}/>`,i=`<path d="M66 228 H134 L136 248 Q100 256 64 248 Z" fill="${e}" ${O(3)}/>`,a=fm(n,t,l=>{const[c,d]=bn[l];return`<path d="M${c-9} ${d-12} h18" stroke="#3a1d3c" stroke-width="2" opacity=".25" stroke-linecap="round"/>`});return{back:"",over:pm(e,t,(l,c)=>`<path d="M${c-11} 276 h22" stroke="#3a1d3c" stroke-width="2.4" opacity=".25" stroke-linecap="round"/>`)+li(a+s+i+o,t),head:"",sleeve:n}}function ZM(e){const t=70-Math.min(10,ri(e)/2),n=`<path d="M38 ${t+10} Q100 ${t-8} 162 ${t+10}" fill="none" stroke="${Nr}" stroke-width="13" stroke-linecap="round"/><path d="M38 ${t+10} Q100 ${t-8} 162 ${t+10}" fill="none" stroke="#6b6f7a" stroke-width="7.5" stroke-linecap="round"/>`,s=o=>`<circle cx="${o}" cy="${t}" r="17" fill="#c9ced6" ${O(3)}/><circle cx="${o}" cy="${t}" r="10.5" fill="#bfe3f2" ${O(2)}/><path d="M${o-5} ${t-4} q3 -4 8 -3" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;return`<g data-costume-part="goggles">${n}${s(80)}${s(120)}<path d="M96 ${t} h8" stroke="${Nr}" stroke-width="5" stroke-linecap="round"/></g>`}function GM(e){const t=60-ri(e),n=Math.max(30,Math.min(56,t-4)),s=t-n;return`<g data-costume-part="witch-hat"><path d="M64 ${t-2} Q82 ${t-n*.45} 92 ${s+8} Q98 ${s-2} 114 ${s+4} Q104 ${s+10} 106 ${s+n*.4} L136 ${t-2} Z" fill="${pa}" ${O(3)}/><path d="M70 ${t-10} Q100 ${t-16} 130 ${t-10} L133 ${t-3} Q100 ${t-9} 67 ${t-3} Z" fill="#ff9f43" ${O(2.2)}/><path d="M24 ${t+2} Q100 ${t-16} 176 ${t+2} Q100 ${t+12} 24 ${t+2} Z" fill="${pa}" ${O(3)}/><path d="M118 ${t-24} l2.6 5.4 5.8 .8 -4.2 4 1 5.8 -5.2 -2.8 -5.2 2.8 1 -5.8 -4.2 -4 5.8 -.8 Z" fill="#ffd166" ${O(1.4)}/></g>`}function YM(e){const t=ri(e);return`<g data-costume-part="cat-ears" transform="translate(0 ${E(-t)})"><path d="M52 66 L64 20 L90 56 Z" fill="${Zi}" ${O(2.8)}/><path d="M110 56 L136 20 L148 66 Z" fill="${Zi}" ${O(2.8)}/><path d="M61 56 L66 34 L80 52 Z" fill="#f4a3c8"/><path d="M120 52 L134 34 L139 56 Z" fill="#f4a3c8"/><path d="M50 72 Q100 46 150 72" fill="none" stroke="${Zi}" stroke-width="6" stroke-linecap="round"/></g>`}function KM(e){return li(`<g data-costume-part="cat-tail">${Wf("M118 232 Q156 240 162 206 Q166 178 182 172",Zi,11)}<circle cx="182" cy="172" r="6" fill="${Zi}"/></g>`,e)}function XM(e){const t=[30,50,70,90,110,130,150,170];let n="";for(let i=t.length-1;i>0;i--)n+=` Q${t[i]-10} ${i%2?276:266} ${t[i-1]} 262`;const s=`M64 166 Q70 154 100 152 Q130 154 136 166 Q164 196 170 262${n} Q36 196 64 166 Z`;return{back:"",over:li(`<g data-costume-part="ghost-sheet"><path d="${s}" fill="${Sd}" ${O(3)}/><path d="M70 190 Q60 230 58 258 M130 190 Q140 230 142 258 M100 190 V250" fill="none" stroke="#3a1d3c" stroke-width="2.4" opacity=".12" stroke-linecap="round"/></g>`,e),head:"",sleeve:Sd,coversArms:!0}}function JM(e){const n=30-Math.min(16,ri(e));return`<g data-costume-part="ghost-hood"><path d="${`M30 112 Q28 ${n} 100 ${n} Q172 ${n} 170 112 Q172 150 150 170 Q100 182 50 170 Q28 150 30 112 Z`} M54 116 Q54 76 100 74 Q146 76 146 116 Q146 152 100 156 Q54 152 54 116 Z" fill="${Sd}" fill-rule="evenodd" ${O(3)}/><path d="M44 96 Q48 ${n+26} 84 ${n+12}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/></g>`}function eL(e){const t=`<path d="${hm}" fill="${_i}" ${O(3)}/>`,n=`<g data-costume-part="ribs" fill="none" stroke="${Ja}" stroke-linecap="round"><path d="M100 172 V226" stroke-width="6"/>`+[184,198,212].map((r,l)=>`<path d="M${80+l*2} ${r} Q90 ${r-5} 100 ${r}  M${120-l*2} ${r} Q110 ${r-5} 100 ${r}" stroke-width="5.5"/>`).join("")+'<path d="M86 232 Q100 224 114 232" stroke-width="6"/></g>',s=(r,l,c,d)=>`<path d="M${E(r)} ${E(l)} L${E(c)} ${E(d)}" stroke="${Ja}" stroke-width="5" stroke-linecap="round"/><circle cx="${E(r)}" cy="${E(l)}" r="4" fill="${Ja}"/><circle cx="${E(c)}" cy="${E(d)}" r="4" fill="${Ja}"/>`,o=fm(_i,e,r=>{const[l,c]=jt[r],[d,f]=bn[r];return s(l+(d-l)*.2,c+(f-c)*.2,l+(d-l)*.72,c+(f-c)*.72)}),i=`<path d="M66 230 H134 L136 248 Q100 256 64 248 Z" fill="${_i}" ${O(3)}/>`;return{back:"",over:pm(_i,e,(r,l)=>s(l,246,l+(r==="l"?-1:1),274))+li(o+i+t+n,e),head:"",sleeve:_i}}function tL(e){const t=n=>{const s=o=>E(100+n*o);return`M${s(20)} 166 Q${s(60)} 168 ${s(84)} 186 Q${s(90)} 220 ${s(80)} 256 Q${s(68)} 244 ${s(58)} 256 Q${s(48)} 242 ${s(36)} 254 Q${s(28)} 240 ${s(14)} 250 Z`};return li(`<g data-costume-part="bat-cape"><path d="${t(-1)}" fill="${pa}" ${O(3)}/><path d="${t(1)}" fill="${pa}" ${O(3)}/><path d="M40 190 Q44 220 52 240 M160 190 Q156 220 148 240" fill="none" stroke="#fff" stroke-width="2.4" opacity=".18" stroke-linecap="round"/></g>`,e)}function nL(e){return li(`<g data-costume-part="bat-collar"><path d="M78 164 Q72 152 82 146 L92 160 Z M122 164 Q128 152 118 146 L108 160 Z" fill="${pa}" ${O(2.4)}/><circle cx="100" cy="166" r="5" fill="#ff9f43" ${O(1.8)}/></g>`,e)}function um(e,t,n){const s={back:"",over:"",head:"",sleeve:null};if(e.indexOf("helper-")===0){const o=Rr[e.slice(7)]??Rr.yellow;return{...FM(o,t),head:ZM(n)}}return e==="witch"?{...s,head:GM(n)}:e==="cat"?{...s,back:KM(t),head:YM(n)}:e==="ghost"?{...XM(t),head:JM(n)}:e==="skeleton"?eL(t):e==="bat"?{...s,back:tL(t),over:nL(t)}:s}const sL=[{hip:1.5,head:4,armL:3,armR:-2,legL:0,legR:-3,legLLift:0,legRLift:0},{hip:-2,head:-5,armL:1,armR:-7,legL:4,legR:0,legLLift:2,legRLift:0},{hip:0,head:3,armL:2,armR:-2,legL:0,legR:0,legLLift:0,legRLift:0},{hip:-1.5,head:-4,armL:4,armR:-1,legL:5,legR:0,legLLift:3,legRLift:0}],oL={puffs:0,afro:0,pony:1,sidepony:1,pigtails:1,halfup:1,braids:2,boxbraids:2,locs:2,sidebraid:2,crown:2,buns:3,topbun:3,lowbun:3};function Vf(e){const t=e.hair||"buns";let n=oL[t];if(n===void 0){let s=0;for(let o=0;o<t.length;o++)s=(s+t.charCodeAt(o))%4;n=s}return sL[n]}function iL(e){const t=(n,s,o,i,a)=>{const r=$d(n,s,o,i,a),l=$d(r.x,r.y,100,238,e.hip);return{x:l.x/2,y:l.y/2}};return{left:t(bn.l[0],bn.l[1],jt.l[0],jt.l[1],e.armL),right:t(bn.r[0],bn.r[1],jt.r[0],jt.r[1],e.armR)}}function aL(e){const t=$d(100,244,100,238,e.hip);return Math.round(t.y/2*10)/10}function Uf(e){const t=parseInt(e.slice(1),16);return(t>>16&255)+(t>>8&255)+(t&255)}function rL(e){const t=ji(e,.32);return Uf(t)<80?"#5a3a2c":t}function lL(e){return Uf(e)<140?"#3b2340":ji(e,.12)}let Dh=0;function cL(){return Dh+=1,"a"+Dh.toString(36)}function rs(e,t){return t.hip?`<g transform="rotate(${E(t.hip)} 100 238)">${e}</g>`:e}function Ao(e,t,n=!1){const s=t.head?`<g transform="rotate(${E(t.head)} 100 158)">${e}</g>`:e;return rs(`<g${n?' class="dollhead" data-dollhead="1"':' class="dollhead"'}>${s}</g>`,t)}function dL(e,t,n){let s=`<defs><radialGradient id="${e}b"><stop offset="0" style="stop-color:var(--blush)" stop-opacity=".62"/><stop offset=".55" style="stop-color:var(--blush)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--blush)" stop-opacity="0"/></radialGradient>`;return s+=`<radialGradient id="${e}s"><stop offset="0" stop-color="#3a1d3c" stop-opacity=".3"/><stop offset=".6" stop-color="#3a1d3c" stop-opacity=".12"/><stop offset="1" stop-color="#3a1d3c" stop-opacity="0"/></radialGradient>`,s+=`<radialGradient id="${e}k" cx=".42" cy=".36" r=".75"><stop offset=".55" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".16"/></radialGradient>`,t&&(s+=`<linearGradient id="${e}i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f1020" stop-opacity=".62"/><stop offset=".5" stop-color="#1f1020" stop-opacity=".05"/><stop offset=".62" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient>`,s+=`<linearGradient id="${e}c" gradientUnits="userSpaceOnUse" x1="58" y1="0" x2="146" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".26"/><stop offset=".32" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".2"/></linearGradient>`,s+=`<radialGradient id="${e}h" cx=".38" cy=".28" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".14"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1f1020" stop-opacity=".28"/></radialGradient>`),s+n+"</defs>"}function fL(e){const t=e==="l"?-1:1,n=jt[e][0],s=jt[e][1],o=bn[e][0],i=bn[e][1],a=o-t,r=i-7,l=-t;let c=`<path d="${xd([n,s],[a,r],18,13,-3*t)}" fill="var(--skin)" ${O(3)}/>`;return c+=`<path class="hand" d="M${E(o-8)} ${E(i-4)} Q${E(o-8)} ${E(i-10)} ${E(o)} ${E(i-10)} Q${E(o+8)} ${E(i-10)} ${E(o+8)} ${E(i-3)} Q${E(o+8.5)} ${E(i+9)} ${E(o)} ${E(i+9.5)} Q${E(o-8.5)} ${E(i+9)} ${E(o-8)} ${E(i-4)} Z" fill="var(--skin)" ${O(2.8)}/>`,c+=`<ellipse cx="${E(o+7*l)}" cy="${E(i-1)}" rx="3.4" ry="5" fill="var(--skin)" ${O(2.4)} transform="rotate(${-20*l} ${E(o+7*l)} ${E(i-1)})"/>`,c+=`<path d="M${E(o-3*l)} ${E(i+3)} v4 M${E(o+.5*l)} ${E(i+3.5)} v4" stroke="var(--line)" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>`,c+=`<ellipse cx="${E(o-3*l)}" cy="${E(i-5)}" rx="3" ry="1.8" fill="#fff" opacity=".35"/>`,c}function Hh(e){const t={rest:"",l:"",r:""},n=/<g class="arm sleeve (l|r) hang"[^>]*>/g,s=/<g[\s>]|<\/g>/g;let o=0,i;for(;i=n.exec(e);){const a=i[1];let r=1,l=-1,c;for(s.lastIndex=i.index+i[0].length;c=s.exec(e);)if(r+=c[0]==="</g>"?-1:1,r===0){l=c.index;break}if(l<0)break;t.rest+=e.slice(o,i.index),t[a]+=e.slice(i.index+i[0].length,l),o=l+4,n.lastIndex=o}return t.rest+=e.slice(o),t}function Wh(e,t,n){const s=t?`<g class="arm sleeve ${e} hang">${t}</g>`:"";return Es("arm",e,`<g class="hand">${fL(e)}</g>${s}`,n)}function Vh(e){const t=e==="l"?-1:1,n=e==="l"?88:112;let s=`<path d="${xd([n,234],[n+t,294],21,15,1.5*t)}" fill="var(--skin)" ${O(3)}/>`;return s+=`<path d="${xd([n+5*t,244],[n+5*t,290],6,4)}" ${ut}/>`,s+=`<ellipse cx="${E(n+.5*t)}" cy="268" rx="4.5" ry="2.6" fill="#3a1d3c" opacity=".12"/>`,s+=`<path d="M${n-4} 265 q4 -2.5 8 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".35"/>`,s}function Uh(e,t,n,s,o,i){const a=n?-1:1,r=o==="big"||o==="bright"?1.08:o==="soft"?.94:1,l=(w,g)=>`${E(e+w*r)} ${E(t+g*r)}`,c=13.5*r,d=17*r;let f="";if(i&&o!=="soft"){const w=[.35,.95,1.57,2.2,2.8];for(let g=0;g<w.length;g++){const b=w[g];f+=`<path d="M${E(e+5.5*Math.cos(b)*r)} ${E(t+(4+6.5*Math.sin(b))*r)} L${E(e+11.5*Math.cos(b)*r)} ${E(t+(2+14*Math.sin(b))*r)}" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity=".28"/>`}}const h=o==="soft"?2:2.6,u=o==="soft"?"":`<path d="M${l(-16*a,-8)} q${E(-6*a*r)} -2 ${E(-9*a*r)} ${E(-9*r)} M${l(-17*a,-2)} q${E(-6*a*r)} ${E(-.5*r)} ${E(-10*a*r)} ${E(-5*r)} M${l(-12*a,-15)} q${E(-3*a*r)} ${E(-4*r)} ${E(-4*a*r)} ${E(-9*r)}" fill="none" stroke="var(--lash)" stroke-width="2.2" stroke-linecap="round"/>`,y=o==="sparkle"||o==="bright"?`<path d="M${l(-9*a,-8)} l.7 1.6 1.6 .7 -1.6 .7 -.7 1.6 -.7 -1.6 -1.6 -.7 1.6 -.7 Z" fill="#fff" opacity=".9"/>`:"",m=i?`<ellipse cx="${e}" cy="${E(t+r)}" rx="${E(c)}" ry="${E(d)}" fill="url(#${s}i)"/>`:"",v=o==="sleepy"?`<path d="M${l(-17,-4)} Q${e} ${E(t+r)} ${l(17,-4)} L${l(18,-16)} Q${e} ${E(t-20*r)} ${l(-18,-16)} Z" fill="var(--skin)"/>`:"";return`<path d="M${l(-16,-2)} Q${l(-16,-20)} ${l(0,-20)} Q${l(16,-20)} ${l(16,-2)} Q${l(16,19)} ${l(0,19)} Q${l(-16,19)} ${l(-16,-2)} Z" fill="#fff"/><path d="M${l(-15,-4)} Q${e} ${E(t-21*r)} ${l(15,-4)} Q${e} ${E(t-14*r)} ${l(-15,-4)} Z" fill="#3a1d3c" opacity=".12"/><ellipse data-iris="1" cx="${e}" cy="${E(t+r)}" rx="${E(c)}" ry="${E(d)}" fill="var(--eye)"/>${m}${f}<ellipse cx="${e}" cy="${E(t+3*r)}" rx="${E(7*r)}" ry="${E(9*r)}" fill="#1f1020" opacity=".8"/><ellipse cx="${e}" cy="${E(t+r)}" rx="${E(11.3*r)}" ry="${E(14.8*r)}" fill="none" stroke="#fff" stroke-width="1" opacity=".22"/><ellipse cx="${e}" cy="${E(t+r)}" rx="${E(c)}" ry="${E(d)}" fill="none" stroke="#1f1020" stroke-width="2" opacity=".55"/><path d="M${l(-9,12)} Q${e} ${E(t+19.5*r)} ${l(9,12)} Q${e} ${E(t+15.5*r)} ${l(-9,12)} Z" fill="#fff" opacity=".5"/><ellipse cx="${E(e-6*a*r)}" cy="${E(t-6*r)}" rx="${E(5.8*r)}" ry="${E(6.8*r)}" fill="#fff" transform="rotate(${-15*a} ${E(e-6*a*r)} ${E(t-6*r)})"/><circle cx="${E(e+6*a*r)}" cy="${E(t+8*r)}" r="${E(2.8*r)}" fill="#fff"/><circle cx="${E(e-4*a*r)}" cy="${E(t+10*r)}" r="${E(1.3*r)}" fill="#fff" opacity=".85"/><path d="M${l(7*a,-10)} l${E(r)} ${E(2.4*r)} ${E(2.4*r)} ${E(r)} ${E(-2.4*r)} ${E(r)} ${E(-r)} ${E(2.4*r)} ${E(-r)} ${E(-2.4*r)} ${E(-2.4*r)} ${E(-r)} ${E(2.4*r)} ${E(-r)} Z" fill="#fff"/>`+y+v+`<path d="M${l(-17,-1)} Q${l(-16,-21)} ${l(0,-21)} Q${l(16,-21)} ${l(17,-3)} Q${l(14.5,-18.6)} ${l(0,-18.8)} Q${l(-14.5,-18.6)} ${l(-15.5,-1)} Z" fill="var(--lash)" stroke="var(--lash)" stroke-width="${h}" stroke-linejoin="round"/>`+u+`<path d="M${l(-11,-23)} Q${e} ${E(t-27*r)} ${l(11,-23)}" fill="none" stroke="var(--line)" stroke-width="1.3" stroke-linecap="round" opacity=".22"/><path d="M${l(-5,20.5)} Q${e} ${E(t+22*r)} ${l(5,20.5)}" fill="none" stroke="var(--lash)" stroke-width="1.3" stroke-linecap="round" opacity=".28"/>`}function pL(e,t,n,s=!1){const o=e.blush?`<ellipse cx="64" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><ellipse cx="136" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><path d="M60 133 l3 -3 M66 134 l3 -3 M132 133 l3 -3 M138 134 l3 -3" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>`:"";let i="";if(e.freckles){const a=[[58,132],[64,136],[70,131],[130,131],[136,136],[142,132]];for(let r=0;r<a.length;r++)i+=`<circle cx="${a[r][0]}" cy="${a[r][1]}" r="1.5" fill="var(--freckle)" opacity=".7"/>`}return o+i+'<path data-brow="l" d="M64 86 Q74 80 85 84" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/><path data-brow="r" d="M115 84 Q126 80 136 86" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/>'+Uh(76,112,!1,t,s?"sleepy":e.eyes,n)+Uh(124,112,!0,t,s?"sleepy":e.eyes,n)+'<path d="M98 131 q2 1.8 4 0" fill="none" stroke="var(--line)" stroke-width="2" stroke-linecap="round" opacity=".55"/><ellipse cx="101.5" cy="128.5" rx="1.6" ry="1" fill="#fff" opacity=".6"/><path d="M92 140 Q100 147.5 108 140" fill="none" stroke="var(--line)" stroke-width="2.8" stroke-linecap="round"/><path d="M96 142.6 Q100 145.4 104 142.6 Q100 144 96 142.6 Z" fill="#ff8fa8"/>'}function hL(e){const t="M40 102 Q38 38 100 38 Q162 38 160 102 Q160 140 132 153 Q116 160 100 160 Q84 160 68 153 Q40 140 40 102 Z";return`<ellipse cx="39" cy="114" rx="9" ry="11" fill="var(--skin)" ${O(3)}/><ellipse cx="161" cy="114" rx="9" ry="11" fill="var(--skin)" ${O(3)}/><ellipse cx="40" cy="115" rx="4" ry="6" ${_d}/><ellipse cx="160" cy="115" rx="4" ry="6" ${_d}/><path d="${t}" fill="var(--skin)" ${O(3.2)}/><path d="${t}" fill="url(#${e}k)"/>`}function uL(){return`<path d="M91 146 h18 v22 q-9 5 -18 0 Z" fill="var(--skin)" ${O(3)}/><path d="M91 150 h18 v9 q-9 6 -18 0 Z" ${_d}/><path d="M70 168 Q74 160 92 160 H108 Q126 160 130 168 L134 236 Q100 244 66 236 Z" fill="var(--skin)" ${O(3)}/>`}function Td(e,t){const n=Rs(e),s=t?.pose??Vf(n),o=t?.rich!==!1,i=t?.uid??cL(),a=aL(s),r=n.shoesC,l=r.toLowerCase()==="#ffffff"?n.dress?n.dressC:n.topC:Ch(r,.28),c=n.dress?n.dressC:n.topC,d=Uf(c)>700?"#8fdcc0":ji(c,.18),f=["--line:#5a3d5c",`--skin:${n.skin}`,`--hair:${n.hairC}`,`--hair-shade:${rL(n.hairC)}`,`--brow:${lL(n.hairC)}`,`--eye:${n.eyeC}`,"--lash:#3b2340","--blush:#ff6f91",`--freckle:${ji(n.skin,.35)}`,`--top:${c}`,`--top-trim:${d}`,`--bottom:${n.dress?n.dressC:n.bottomC}`,`--bottom-trim:${ji(n.dress?n.dressC:n.bottomC,.16)}`,`--shoe:${r}`,`--shoe-trim:${l}`,"--sock:#ffffff",`--acc:${n.accC}`,`--acc2:${Ch(n.accC,.18)}`,"--frame:#6e4a5e"].join(";"),h=Es("leg","l",Vh("l"),s)+Es("leg","r",Vh("r"),s),u=t?.poseName==="sit"||t?.poseName==="lie"?t.poseName:null,y=t?.costume?um(t.costume,s,n.hair):null,m=n.dress?WM(s,n,i,o,a):zM(s,n,i,o,a),v=Hh(m),w=y&&!y.coversArms?Hh(y.over):null,g=!!w&&(w.l||w.r),b=g?w:v,_=Wh("l",b.l,s)+Wh("r",b.r,s),P=!!y?.coversArms,$=`<g data-layer="body">${h}${rs(uL()+(P?_:""),s)}${Ao(hL(i),s,!0)}</g>`,x=v.rest,D=P?"":`<g data-layer="arms">${rs(_,s)}</g>`,W=`<g class="shadow"><ellipse cx="100" cy="308" rx="52" ry="9" fill="url(#${i}s)"/><ellipse cx="87" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/><ellipse cx="113" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/></g>`,Q=NM(i,n.hair,n.acc),q=Q?` mask="url(#${i}hm)"`:"",se=[`<g data-layer="hair-back">${Ao(`<g${q}>${OM(n.hair,i,o)}</g>`,s)}</g>`,$,UM(s,n),rs(DM(s,n,i,o),s),rs(x,s),rs(HM(s,n,i,o),s),`<g data-layer="costume">${y?g?w.rest:y.over:""}</g>`,D,`<g data-layer="face">${Ao(pL(n,i,o,t?.poseName==="lie"),s)}</g>`,`<g data-layer="hair-front">${Ao(`<g${q}>${BM(n.hair,i,o)}</g>`,s)}</g>`,Ao(qM(n),s)];t?.holding&&se.splice(se.findIndex(B=>B.indexOf('data-layer="face"')>=0),0,rs(La("under",!0,n.skin,u,y?.sleeve??c),s)),y&&(y.head&&se.push(`<g data-layer="costume-head">${Ao(y.head,s)}</g>`),y.back&&se.splice(1,0,`<g data-layer="costume-back">${y.back}</g>`));const Me=se.filter(B=>B&&B!=='<g data-layer="costume"></g>').join(""),Ke=n.dress||n.top,Ie=t?.poseName?` data-pose="${t.poseName}"`:"",I=t?.costume?` data-costume="${t.costume}"`:"";return`<svg${Ie}${I} data-chibi="1" data-hair="${n.hair}" data-top="${Ke}" viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="${f}">${dL(i,o,Q)}${W}${Me}</svg>`}function Qh(e,t,n){const s=Rs(e),o=Il(t)??Vf(s),i=t==="sit"||t==="lie"?t:null,a=(n?um(n,o,s.hair).sleeve:null)??(s.dress?s.dressC:s.topC);return`<svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">${rs(La("over",!0,s.skin,i,a),o)}</svg>`}function qr(){try{return typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(&)")}catch{return!1}}function Pa(e,t,n){const s=!!(t&&t.look2);e.classList.toggle("chibi",s);const o=s&&qr();e.classList.toggle("chibi-move",s&&(o||n)),e.classList.toggle("chibi-bob",s&&!o&&!n)}function gm(e){return e.look2?Qy(e):null}const lt="#5a3d5c",_e=`stroke="${lt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,gL=["little","kid","adult"],go={little:.78,kid:1,adult:1.28},Ci={left:{x:15,y:113},right:{x:85,y:113}};function zl(e,t){return e.look2?iL(t??Vf(e.look2)):t?{left:{x:22,y:96},right:{x:78,y:96}}:Ci}function mm(e,t){return e===1?`<path d="M62 16 L76 8 L76 26 Z M62 16 L50 6 L48 24 Z" fill="#ff7aa8" stroke="${lt}" stroke-width="3" stroke-linejoin="round"/><circle cx="62" cy="16" r="5" fill="#ffd166" stroke="${lt}" stroke-width="3"/>`:e===2?`<circle cx="40" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${lt}" stroke-width="3"/><circle cx="60" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${lt}" stroke-width="3"/><path d="M49 48 h2" stroke="${lt}" stroke-width="3"/>`:e===3?`<path d="M20 30 Q22 8 50 8 Q78 8 80 30 Z" fill="${t}" stroke="${lt}" stroke-width="3.5" stroke-linejoin="round"/><path d="M60 28 Q84 26 92 32 Q80 36 60 34 Z" fill="${t}" stroke="${lt}" stroke-width="3.5" stroke-linejoin="round"/><circle cx="50" cy="9" r="4" fill="#fff" stroke="${lt}" stroke-width="3"/>`:""}function jr(e,t,n){return n?e===1?`<path d="M20 40 Q16 86 30 92 L70 92 Q84 86 80 40 Z" fill="${t}" ${_e}/>`:e===2?`<circle cx="18" cy="34" r="12" fill="${t}" ${_e}/><circle cx="82" cy="34" r="12" fill="${t}" ${_e}/>`:e===3?`<circle cx="50" cy="8" r="13" fill="${t}" ${_e}/>`:"":e===3?`<path d="M22 42 Q20 14 50 12 Q80 14 78 42 Q66 26 50 30 Q34 26 22 42 Z" fill="${t}" ${_e}/>`:`<path d="M21 46 Q18 12 50 12 Q82 12 79 46 Q72 30 58 28 Q50 36 36 30 Q26 34 21 46 Z" fill="${t}" ${_e}/>`}function xt(e,t,n){const s=Il(t),o=gm(e);return o&&e.look2?Td(e.look2,{rich:qr(),pose:s??void 0,poseName:t||void 0,holding:n,costume:o}):e.look2?Td(e.look2,{rich:qr(),pose:s??void 0,poseName:t||void 0,holding:n}):t==="sit"||t==="lie"?mL(e,t,n):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
  <ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${jr(e.hairStyle,e.hair,!0)}
  <rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${_e}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${_e}/>
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${lt}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${lt}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${_e} transform="rotate(12 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${_e} transform="rotate(-12 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${_e}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${_e}/>
  <circle cx="50" cy="44" r="30" fill="${e.skin}" ${_e}/>
  ${jr(e.hairStyle,e.hair,!1)}
  <ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${lt}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${lt}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${_e} fill="none"/>
  ${mm(e.acc??0,e.shirt)}
  <circle class="hand hang" cx="${Ci.left.x}" cy="${Ci.left.y}" r="6" fill="${e.skin}" ${_e}/><circle class="hand hang" cx="${Ci.right.x}" cy="${Ci.right.y}" r="6" fill="${e.skin}" ${_e}/>
  ${n?La("under",!1,Cl(e.skin),null):""}
</svg>`}function ym(e,t){const n=t==="sit"||t==="lie"?t:null;if(n==="lie")return"";const s=gm(e);return s&&e.look2?Qh(e.look2,t,s):e.look2?Qh(e.look2,t):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${La("over",!1,Cl(e.skin),n)}</svg>`}function mL(e,t,n){const s=t==="sit"?`<rect class="leg" x="34" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${_e} transform="rotate(-68 40 112)"/>
  <rect class="leg" x="53" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${_e} transform="rotate(68 60 112)"/>`:`<rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${_e}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${_e}/>`,o=t==="lie"?`<path d="M34 48 Q40 52 46 48" fill="none" ${_e}/><path d="M54 48 Q60 52 66 48" fill="none" ${_e}/>`:`<ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${lt}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${lt}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>`,i=`<ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${jr(e.hairStyle,e.hair,!0)}
  ${s}
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${lt}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${lt}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${_e} transform="rotate(28 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${_e} transform="rotate(-28 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${_e}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${_e}/>
  <g class="dollhead">
  <circle class="dollhead" data-dollhead="1" cx="50" cy="44" r="30" fill="${e.skin}" ${_e}/>
  ${jr(e.hairStyle,e.hair,!1)}
  ${o}
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${_e} fill="none"/>
  ${mm(e.acc??0,e.shirt)}
  </g>
  <circle class="hand hang" cx="22" cy="96" r="6" fill="${e.skin}" ${_e}/><circle class="hand hang" cx="78" cy="96" r="6" fill="${e.skin}" ${_e}/>
  ${n?La("under",!1,Cl(e.skin),t):""}`;return`<svg data-pose="${t}" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${i}</svg>`}const Nh=[{id:"hair",name:"Hair"},{id:"face",name:"Face"},{id:"clothes",name:"Clothes"},{id:"shoes",name:"Shoes"},{id:"extras",name:"Extras"}],yL={id:"costume",name:"🎃 Costumes"};function wL(){return Ml()?[...Nh,yL]:Nh}function bL(e,t){const n=$o(e),s=!!n&&n.startsWith("helper-"),o=Rs(t),i=(c,d,f,h)=>`<button type="button" class="avCosTile${f?" on":""}" data-act="av-costume" data-v="${c}" aria-pressed="${f}"><span class="avCosPic">${Td(o,{uid:"cosT"+(h||"none"),rich:!1,costume:h||null})}</span><span class="avCosName">${d}</span></button>`,a=s?n:"helper-yellow",r=i("","No costume",!n,"")+i(a,Np.helper,s,a)+["witch","cat","ghost","skeleton","bat"].map(c=>i(c,Np[c],n===c,c)).join(""),l=Object.keys(Rr).map(c=>`<button type="button" class="avSw${n==="helper-"+c?" on":""}" style="background:${Rr[c]}" data-act="av-costume" data-v="helper-${c}" aria-label="${c} overalls"></button>`).join("");return`<h3>Costumes</h3><p class="avHint">Halloween dress-up! Tap one. Everyone in the room sees it.</p><div class="avCosGrid">${r}</div><h3>Helper overalls color</h3><div class="avColors avCosColors">${l}</div>`}const vL={short:"Short",pixie:"Pixie",coily:"Coily",afro:"Afro",bangs:"Bangs",bob:"Bob",wavybob:"Wavy bob",curlybob:"Curly bob",sidebangs:"Side bangs",long:"Long",wavy:"Wavy",braids:"Braids",boxbraids:"Box braids",locs:"Locs",sidebraid:"Side braid",crown:"Crown",pony:"Ponytail",sidepony:"Side pony",pigtails:"Pigtails",halfup:"Half-up",buns:"Buns",puffs:"Puffs",topbun:"Top bun",lowbun:"Low bun"},kL={classic:"Tee",stripes:"Stripes",hoodie:"Hoodie",sweater:"Sweater",tank:"Tank",puff:"Puff",ruffle:"Ruffle",button:"Buttons",jersey:"Jersey",cardigan:"Cardigan",bib:"Bib",raincoat:"Raincoat"},_L={pants:"Pants",jeans:"Jeans",shorts:"Shorts",skirt:"Skirt",tutu:"Tutu",leggings:"Leggings",overalls:"Overalls",joggers:"Joggers"},$L={"":"No dress",twirl:"Twirl",sundress:"Sundress",party:"Party",pinafore:"Pinafore",jumper:"Jumper",ballet:"Ballet",nightgown:"Nightgown",raindress:"Rain"},xL={classic:"Classic",sneakers:"Sneakers",lightup:"Light-up",boots:"Boots",rainboots:"Rain boots",sandals:"Sandals",maryjanes:"Mary Janes",slippers:"Slippers"},ML={round:"Round",big:"Big",sleepy:"Sleepy",sparkle:"Sparkle",soft:"Soft",bright:"Bright"},LL={glasses:"Glasses",square:"Square",sunnies:"Sunnies",bow:"Bow",bigbow:"Big bow",headband:"Headband",flower:"Flower",cap:"Cap",beanie:"Beanie",sunhat:"Sun hat",catears:"Cat ears",earmuffs:"Earmuffs"},EL={little:"Little",kid:"Kid",adult:"Grown-up"};let Pn="hair";function En(e,t,n,s){return`<button type="button" class="avOpt${s?" on":""}" data-act="${e}" data-v="${t}">${n}</button>`}function wr(e,t,n){return`<button type="button" class="avSw${n?" on":""}" style="background:${t}" data-act="${e}" data-v="${t}" aria-label="Color"></button>`}function Fs(e){return`<div class="avGrid">${e}</div>`}function $i(e,t){return`<div class="avColors">${Dt.map(n=>wr(e,n,n===t)).join("")}</div>`}function SL(e,t,n,s){const o=Rs(e.look2),i=e.id==="__me";Pn==="costume"&&!Ml()&&(Pn="hair");const a=Pn==="costume"?bL(e.costume,e.look2):Pn==="hair"?`<h3>Style</h3>${Fs(yl.map(c=>En("av-hair",c,vL[c],o.hair===c)).join(""))}<h3>Color</h3><div class="avColors">${ml.map(c=>wr("av-hairC",c,o.hairC===c)).join("")}</div>`:Pn==="face"?`<h3>Skin</h3><div class="avColors">${gl.map(c=>wr("av-skin",c,o.skin===c)).join("")}</div><h3>Eyes</h3>${Fs(_l.map(c=>En("av-eyes",c,ML[c],o.eyes===c)).join(""))}<h3>Eye color</h3><div class="avColors">${af.map(c=>wr("av-eyeC",c,o.eyeC===c)).join("")}</div><div class="avToggles">${En("av-freckles",o.freckles?"0":"1","Freckles",o.freckles)}${En("av-blush",o.blush?"0":"1","Blush",o.blush)}</div>`:Pn==="clothes"?`<h3>Top</h3>${Fs(wl.map(c=>En("av-top",c,kL[c],!o.dress&&o.top===c)).join(""))}${$i("av-topC",o.topC)}<h3>Bottom</h3>${Fs(bl.map(c=>En("av-bottom",c,_L[c],!o.dress&&o.bottom===c)).join(""))}${$i("av-bottomC",o.bottomC)}<h3>Dress</h3>${Fs(vl.map(c=>En("av-dress",c,$L[c],o.dress===c)).join(""))}${$i("av-dressC",o.dressC)}`:Pn==="shoes"?`<h3>Shoes</h3>${Fs(kl.map(c=>En("av-shoes",c,xL[c],o.shoes===c)).join(""))}${$i("av-shoesC",o.shoesC)}`:`<h3>Extras</h3><p class="avHint">Pick up to two</p>${Fs(Ho.map(c=>En("av-acc",c,LL[c],o.acc.indexOf(c)>=0)).join(""))}${$i("av-accC",o.accC)}`,r=gL.map(c=>`<button type="button" class="avOpt sz${c===e.size?" on":""}" data-act="size" data-v="${c}">${EL[c]}</button>`).join(""),l=i?'<div class="meNote">This is you!</div>':`<button type="button" class="del${n?" sure":""}" data-act="delc">${s}<span>${n?"Tap again":""}</span></button>`;return`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${t}<div class="dress avLook"><div class="avStageWrap"><div class="avStage chibi-move">${xt(e)}</div>${l}<div class="avSizes">${r}</div></div><div class="avSide"><div class="avTabs">${wL().map(c=>`<button type="button" class="avTab${c.id===Pn?" on":""}" data-act="av-tab" data-v="${c.id}">${c.name}</button>`).join("")}</div><div class="avPane">${a}</div><div class="avBar"><button type="button" class="avSurprise" data-act="av-surprise">🎲 Surprise me</button><button type="button" class="avDone" data-act="close">Done</button></div></div></div>`}function TL(e,t,n){if(t==="av-tab")return(n==="hair"||n==="face"||n==="clothes"||n==="shoes"||n==="extras"||n==="costume"&&Ml())&&(Pn=n),null;const s=Rs(e);if(t==="av-hair"&&yl.indexOf(n)>=0)return{...s,hair:n};if(t==="av-hairC")return{...s,hairC:n};if(t==="av-skin")return{...s,skin:n};if(t==="av-eyes"&&_l.indexOf(n)>=0)return{...s,eyes:n};if(t==="av-eyeC")return{...s,eyeC:n};if(t==="av-freckles")return{...s,freckles:n==="1"};if(t==="av-blush")return{...s,blush:n==="1"};if(t==="av-top"&&wl.indexOf(n)>=0)return{...s,top:n,dress:""};if(t==="av-topC")return{...s,topC:n};if(t==="av-bottom"&&bl.indexOf(n)>=0)return{...s,bottom:n,dress:""};if(t==="av-bottomC")return{...s,bottomC:n};if(t==="av-dress"&&vl.indexOf(n)>=0)return{...s,dress:n};if(t==="av-dressC")return{...s,dressC:n};if(t==="av-shoes"&&kl.indexOf(n)>=0)return{...s,shoes:n};if(t==="av-shoesC")return{...s,shoesC:n};if(t==="av-accC")return{...s,accC:n};if(t==="av-acc"&&Ho.indexOf(n)>=0){const o=n,i=s.acc.slice(),a=i.indexOf(o);if(a>=0)i.splice(a,1);else{const r=Ar(o),l=i.filter(c=>Ar(c)!==r);return l.push(o),{...s,acc:l.slice(0,2)}}return{...s,acc:i}}return null}function PL(){try{return typeof navigator<"u"&&navigator.webdriver&&!window.__forceAvatarIntro?!1:localStorage.getItem(wt("avatar-intro"))!=="1"}catch{return!1}}function AL(){try{localStorage.setItem(wt("avatar-intro"),"1")}catch{}}const br="#5a3d5c";function Mc(e,t,n,s,o){return`<path class="${e}" d="${t}" fill="none" stroke="${br}" stroke-width="${s}" stroke-linecap="round"/><path class="${e} cloth" d="${t}" fill="none" stroke="${n}" stroke-width="${o}" stroke-linecap="round"/>`}function RL(e){const t=Rs(e),n=t.skin,s=t.dress!=="",o=s||t.bottom==="skirt"||t.bottom==="tutu",i=o?n:t.bottomC,a=t.shoesC,r=s||t.bottom==="skirt"||t.bottom==="tutu";let l="";if(r){const h=s?t.dressC:t.bottomC;l+=`<path class="dress" d="M75 46 L89 46 L91 53 L73 53 Z" fill="${h}" stroke="${br}" stroke-width="1.1" stroke-linejoin="round"/>`}l+=Mc("thigh","M76 44 Q83 48 88 54",i,6.2,4.8),l+=`<circle class="knee" cx="88" cy="56" r="2.3" fill="${i}" stroke="${br}" stroke-width="1.1"/>`;const c=t.shoes==="boots"||t.shoes==="rainboots";l+=Mc("shin",c?"M88 58 Q90 64 91 68":"M88 58 Q90 65 91 70",o?n:i,5.8,4.4),!c&&(t.shoes==="sneakers"||t.shoes==="maryjanes"||t.shoes==="lightup")&&(l+=Mc("shin","M90 66 Q90.6 68 91 70","#ffffff",5.4,4));const d=t.shoes==="sandals"?n:a,f=c?66:69;return l+=`<path class="shoe" d="M90 ${f} Q90 ${f-2} 94 ${f-2} Q99 ${f-2} 100 ${f+1} Q100 ${f+5} 95 ${f+5} Q90 ${f+5} 90 ${f+2} Z" fill="${d}" stroke="${br}" stroke-width="1.1" stroke-linejoin="round"/>`,t.shoes==="sandals"&&(l+=`<path d="M90 ${f+5} L100 ${f+5}" stroke="${a}" stroke-width="1.3" stroke-linecap="round"/>`,l+=`<path d="M93 ${f} L97 ${f+3}" stroke="${a}" stroke-width="1.1" stroke-linecap="round"/>`),`<svg class="rideleg" viewBox="0 0 160 130">${l}</svg>`}let We=null,sn=null,ao=null,wn=null,tn=0,Gi=0;const Lc=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880],Fr=[[4,-1,5,4,2,-1,3,-1],[2,3,4,-1,3,2,0,-1],[5,-1,7,6,5,-1,4,-1],[3,2,1,-1,2,-1,0,-1]],qh=[130.81,98,110,98];function wm(){try{return We??=Sf(new(window.AudioContext||window.webkitAudioContext)),sn||(sn=We.createGain(),sn.gain.value=.5,sn.connect(We.destination)),We.state==="suspended"&&We.resume().catch(()=>{}),!0}catch{return!1}}function er(e,t,n,s,o){if(!We||!sn)return;const i=We.createOscillator(),a=We.createGain();i.type=s,i.frequency.setValueAtTime(e,t),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(o,t+.03),a.gain.exponentialRampToValueAtTime(5e-4,t+n),i.connect(a).connect(sn),i.start(t),i.stop(t+n+.05)}function bm(){if(!We||!ao)return;if(document.hidden&&wn){clearInterval(wn),wn=null;return}if(!Tf||document.hidden){tn=We.currentTime+.1;return}const e=Be/2e3*(ao==="musicbox"?1.35:1);for(tn<We.currentTime&&(tn=We.currentTime+.05);tn<We.currentTime+.4;){const t=Math.floor(Gi/8)%Fr.length,n=Gi%8,s=Fr[t][n];ao==="musicbox"?s>=0&&er(Lc[Math.min(Lc.length-1,s+3)]*2,tn,.9,"sine",.05):(s>=0&&er(Lc[s],tn,.5,"triangle",.045),n===0&&er(qh[t],tn,1.6,"sine",.06),n===4&&er(qh[t]*1.5,tn,1,"sine",.035)),Gi++,tn+=e}}function jh(e){if(e!==ao){if(ao=e,!ao){if(wn&&(clearInterval(wn),wn=null),sn&&We){const t=sn.gain;t.cancelScheduledValues(We.currentTime),t.setValueAtTime(t.value,We.currentTime),t.linearRampToValueAtTime(1e-4,We.currentTime+.4)}return}!wm()||!We||!sn||(sn.gain.cancelScheduledValues(We.currentTime),sn.gain.setValueAtTime(.5,We.currentTime+.42),Gi=Math.floor(Date.now()/(Be/2))%(Fr.length*8),tn=We.currentTime+.45,wn||(wn=setInterval(bm,120)))}}function CL(){wm()}X0(()=>{ao&&We&&!wn&&(Gi=Math.floor(Date.now()/(Be/2))%(Fr.length*8),tn=We.currentTime+.1,wn=setInterval(bm,120))});const IL=2,OL=340,BL=380;function zL(e,t){const n=new Map;for(const[a,r]of t){if(r.kind!=="dance")continue;const l=e.find(c=>c.id===r.item);!l||!l.on||hs(l.kind)!=="stereo"||(n.get(r.item)??n.set(r.item,[]).get(r.item)).push(a)}let s=null;for(const a of[...n].sort((r,l)=>r[0]<l[0]?-1:1))a[1].length>=IL&&(!s||a[1].length>s[1].length)&&(s=a);if(!s)return null;const o=e.find(a=>a.id===s[0]),i=e.filter(a=>a.id!==o.id&&of(a.kind)&&Math.hypot(a.x-o.x,(a.y-o.y)*1.5)<=OL).map(a=>a.id).sort();return{stereo:o.id,x:o.x,y:o.y,dancers:s[1].sort(),toys:i}}const DL="http://www.w3.org/1999/xhtml",Fh=new Map;function Pd(e){if(e.startsWith("data:"))return Promise.resolve(e);let t=Fh.get(e);return t||(t=(async()=>{try{const n=new URL(e,location.href);if(n.origin!==location.origin)return"";const o=await(await fetch(n.href,{credentials:"same-origin"})).blob();return await new Promise(i=>{const a=new FileReader;a.onload=()=>i(String(a.result)),a.onerror=()=>i(""),a.readAsDataURL(o)})}catch{return""}})(),Fh.set(e,t)),t}const Ad=/url\((['"]?)([^'")]+)\1\)/g;async function Zh(e,t,n){const s=new Map;for(const i of e.matchAll(Ad)){const a=i[2];if(a.startsWith("data:")||a.startsWith("#"))continue;let r=a;try{r=new URL(a,t).href}catch{}s.set(a,r)}const o=new Map;return await Promise.all([...s].map(async([i,a])=>o.set(i,n(a)?await Pd(a):""))),e.replace(Ad,(i,a,r)=>{if(r.startsWith("data:")||r.startsWith("#"))return i;const l=o.get(r);return l?`url("${l}")`:"none"})}const HL=["transform","translate","rotate","scale","opacity","filter"];async function WL(e,t){const n=e.offsetWidth,s=e.offsetHeight,o=new Map;for(const _ of document.getAnimations()){const P=_.effect?.target;if(!P||!(e===P||e.contains(P))||_.effect.pseudoElement)continue;const $=getComputedStyle(P);o.set(P,HL.map(x=>`${x}:${$.getPropertyValue(x)}`).join(";"))}const i=new Set,a=_=>{for(const P of _.matchAll(Ad))try{i.add(new URL(P[2],location.href).href)}catch{}},r=[e,...e.querySelectorAll("*")];for(const _ of r)a(getComputedStyle(_).backgroundImage),a(getComputedStyle(_,"::before").backgroundImage),a(getComputedStyle(_,"::after").backgroundImage);const l=e.cloneNode(!0),c=[l,...l.querySelectorAll("*")],d=[];r.forEach((_,P)=>{const $=c[P];if(!$)return;const x=o.get(_);x&&$.setAttribute("style",($.getAttribute("style")||"")+";"+x);const D=$.getAttribute("style");if(D&&D.includes("url(")&&d.push(Zh(D,location.href,()=>!0).then(W=>$.setAttribute("style",W))),_ instanceof HTMLImageElement&&$ instanceof HTMLImageElement){const W=_.currentSrc||_.src;$.removeAttribute("srcset"),$.removeAttribute("loading"),d.push(Pd(W).then(Q=>{Q?$.src=Q:$.removeAttribute("src")}))}else if(_ instanceof HTMLCanvasElement)try{const W=document.createElement("img");W.src=_.toDataURL(),W.setAttribute("style",getComputedStyle(_).cssText||`width:${_.offsetWidth}px;height:${_.offsetHeight}px`),W.className=_.className,$.replaceWith(W)}catch{}else if(_ instanceof SVGImageElement){const W=_.href.baseVal;W&&d.push(Pd(W).then(Q=>{Q&&$.setAttribute("href",Q)}))}_.tagName==="BUTTON"&&_.classList.contains("nudge")&&$.setAttribute("style","display:none")}),l.style.transform="none",l.style.left="0",l.style.top="0",l.style.position="relative",l.style.margin="0";let f="";for(const _ of[...document.styleSheets])try{const P=[..._.cssRules].map($=>$.cssText).join(`
`);f+=await Zh(P,_.href||location.href,$=>i.has($))}catch{}f=f.replace(/:root\b/g,".pbHtml")+`
*,*::before,*::after{animation:none!important;transition:none!important}`,await Promise.all(d);const h=document.documentElement,u=document.body,y=new XMLSerializer,m=`<div xmlns="${DL}" class="pbHtml ${h.className}" style="${Gh(h.getAttribute("style")||"")};width:${n}px;height:${s}px;overflow:hidden"><style>${f.replace(/<\/style/gi,"<\\/style")}</style><body class="${Gh(u.className)}" style="margin:0;width:${n}px;height:${s}px;overflow:hidden;background:transparent"><div id="app"><div class="stageWrap" style="position:relative;margin:0;padding:0;width:${n}px;height:${s}px;inset:auto;transform:none">`+y.serializeToString(l)+"</div></div></body></div>",v=`<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${s}" viewBox="0 0 ${n} ${s}"><foreignObject x="0" y="0" width="${n}" height="${s}">${m}</foreignObject></svg>`,w="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(v),g=document.createElement("canvas");g.width=Math.round(n*t),g.height=Math.round(s*t);const b=g.getContext("2d");try{const _=new Image;_.decoding="sync",_.src=w,await _.decode().catch(()=>new Promise(P=>{_.onload=P,_.onerror=P})),b.drawImage(_,0,0,g.width,g.height),await new Promise(P=>setTimeout(P,60)),b.clearRect(0,0,g.width,g.height),b.drawImage(_,0,0,g.width,g.height)}finally{}return g}const Gh=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");function VL(e,t=new Date,n=0){const s=e.width/600,o=Math.round(26*s),i=Math.round(64*s),a=document.createElement("canvas");a.width=e.width+o*2,a.height=e.height+o+i;const r=a.getContext("2d"),l=r.createLinearGradient(0,0,a.width,a.height);l.addColorStop(0,"#ffd6e8"),l.addColorStop(.5,"#fff1c9"),l.addColorStop(1,"#d9ecff"),r.fillStyle=l,Ec(r,0,0,a.width,a.height,30*s),r.fill(),r.lineWidth=5*s,r.strokeStyle="#5a3d5c",Ec(r,2.5*s,2.5*s,a.width-5*s,a.height-5*s,28*s),r.stroke(),r.save(),n>0&&(Ec(r,o,o,e.width,e.height,n),r.clip()),r.drawImage(e,o,o),r.restore();const c=["#ff7aa8","#ffd166","#7ec8ff","#b48cff","#8ee08e"];for(let d=0;d<26;d++){const h=d/26*a.width,u=d%2?o/2:a.height-i/2+(d%4-1.5)*8*s;r.fillStyle=c[d%5],r.beginPath(),r.arc(h+10*s,(d%2,u),4*s,0,Math.PI*2),r.fill()}return UL(r,o*1.2,a.height-i/2,14*s,"#ffd166"),QL(r,a.width-o*1.3,a.height-i/2,13*s,"#ff7aa8"),r.fillStyle="#5a3d5c",r.textAlign="center",r.textBaseline="middle",r.font=`800 ${Math.round(24*s)}px ui-rounded, "SF Pro Rounded", "Nunito", system-ui, sans-serif`,r.fillText("Our cozy house · "+t.toLocaleDateString(void 0,{month:"short",day:"numeric"}),a.width/2,a.height-i/2),a}function Ec(e,t,n,s,o,i){e.beginPath(),e.moveTo(t+i,n),e.arcTo(t+s,n,t+s,n+o,i),e.arcTo(t+s,n+o,t,n+o,i),e.arcTo(t,n+o,t,n,i),e.arcTo(t,n,t+s,n,i),e.closePath()}function UL(e,t,n,s,o){e.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,r=i%2?s*.45:s;e.lineTo(t+Math.cos(a)*r,n+Math.sin(a)*r)}e.closePath(),e.fillStyle=o,e.fill(),e.lineWidth=s/5,e.strokeStyle="#5a3d5c",e.stroke()}function QL(e,t,n,s,o){e.beginPath(),e.moveTo(t,n+s*.9),e.bezierCurveTo(t-s*1.6,n-s*.2,t-s*.6,n-s*1.3,t,n-s*.4),e.bezierCurveTo(t+s*.6,n-s*1.3,t+s*1.6,n-s*.2,t,n+s*.9),e.fillStyle=o,e.fill(),e.lineWidth=s/5,e.strokeStyle="#5a3d5c",e.stroke()}function NL(e,t){const n=t.getBoundingClientRect(),s=t.parentElement?.getBoundingClientRect(),o=(u,y)=>u?(parseFloat(getComputedStyle(u).borderTopRightRadius)||0)*y:0,i=e.width/(n.width||1),a=e.height/(n.height||1),r=e.width/Math.max(1,t.offsetWidth);if(!s||!n.width)return{c:e,radius:o(t,r)};const l=Math.max(n.left,s.left,0),c=Math.max(n.top,s.top,0),d=Math.min(n.right,s.right,innerWidth),f=Math.min(n.bottom,s.bottom,innerHeight);if(d-l>=n.width-2&&f-c>=n.height-2)return{c:e,radius:o(t,r)};if(d<=l||f<=c)return{c:e,radius:o(t,r)};const h=document.createElement("canvas");return h.width=Math.round((d-l)*i),h.height=Math.round((f-c)*a),h.getContext("2d").drawImage(e,(l-n.left)*i,(c-n.top)*a,h.width,h.height,0,0,h.width,h.height),{c:h,radius:o(t.parentElement,i)}}const qL=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;let Sc=!1;async function jL(e,t){if(!Sc){Sc=!0;try{const n=Math.min(2,Math.max(1,window.devicePixelRatio||1),1600/Math.max(1,e.offsetWidth)),s=WL(e,n),o=document.createElement("div");o.className="pbFlash"+(qL()?" soft":""),document.body.appendChild(o),t?.(),setTimeout(()=>o.remove(),700);const i=NL(await s,e),a=VL(i.c,new Date,i.radius),r=await new Promise(l=>a.toBlob(l,"image/png"));if(!r)return;FL(r)}catch(n){console.warn("photo booth",n)}finally{Sc=!1}}}function FL(e){document.querySelector(".pbCard")?.remove();const t=URL.createObjectURL(e),n="cozy-house-"+new Date().toISOString().slice(0,10)+".png",s=typeof File=="function"?new File([e],n,{type:"image/png"}):null,o=document.createElement("div");o.className="pbCard",o.setAttribute("role","dialog"),o.setAttribute("aria-label","Your photo"),o.innerHTML=`<div class="pbInner"><img class="pbImg" alt="Your photo" src="${t}"/><div class="pbBtns"><button type="button" class="pbSave">💾 Save</button><button type="button" class="pbClose">Close</button></div></div>`,document.body.appendChild(o);const i=()=>{o.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)};o.querySelector(".pbClose").addEventListener("click",i),o.addEventListener("click",a=>{a.target===o&&i()}),o.querySelector(".pbSave").addEventListener("click",async()=>{const a=navigator;if(s&&a.share&&a.canShare?.({files:[s]}))try{await a.share({files:[s]});return}catch(l){if(l?.name==="AbortError")return}const r=document.createElement("a");r.href=t,r.download=n,document.body.appendChild(r),r.click(),r.remove()})}const ZL=/rug|lamp|light|plant|curtain|clock|window|lantern/;function GL(e){if(e.cat==="plants")return!0;const t=`${e.name} ${e.kind??""}`.toLowerCase();return ZL.test(t)}const vm=new Set(["pack:ring-light","pack:desk-lamp",...yb,...$b]);function km(e,t=new Date){return e.pack===A0&&!R0(t)}function _m(e){const t=e.rooms??[];return t.includes("backyard")&&!t.includes("any")}function YL(e,t){if(t==="nursery"&&e.kind&&vm.has(e.kind))return!1;if(t==="backyard")return _m(e);if(t==="all"||!t)return!0;const n=e.rooms;return!n||n.length===0||n.includes(t)?!0:n.includes("any")?e.cat==="decor"||e.cat==="furniture"?GL(e):!0:!1}function KL(e,t,n,s,o){return e.secret&&!(o&&o.has(e.secret))||km(e)||!s&&n==="backyard"&&!_m(e)||n==="nursery"&&e.kind&&vm.has(e.kind)?!1:t.startsWith("pack:")?e.pack===t.slice(5):e.cat!==t?!1:YL(e,s?"all":n)}const $m="cozy-candy",Yh=["🍬","🍭","🍫","🍪","🧁","🍎"];function xm(e){try{const t=Number(e?.getItem($m)??0);return Number.isFinite(t)&&t>0?Math.min(9999,Math.floor(t)):0}catch{return 0}}function XL(e,t=Math.random()){const n=Math.min(9999,xm(e)+1);try{e?.setItem($m,String(n))}catch{}return{count:n,treat:Yh[Math.floor(Math.max(0,Math.min(.999,t))*Yh.length)]}}function Mm(e=new Date,t=typeof location<"u"?location.search:""){return/[?&]halloween=0\b/.test(t)?!1:/[?&]halloween=1\b/.test(t)||R0(e)}function JL(e){return`${String(e??"").replace(/[^\p{L}' -]/gu,"").replace(/\s+/g," ").trim().slice(0,30)||"A friend"} came trick-or-treating!`}const e7=200,t7=170,n7=210,s7=420,o7=70,Zr=12e3,i7=4200,a7=3,Tc=["wave","hop","heart"];function ha(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0)%1e4/1e4}const Pc=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5),r7=(e,t)=>e.id<t.id?-1:e.id>t.id?1:0;function l7(e,t,n,s){const o=ha(e+"|"+t+"|"+n)*Zr;return(s+o)%Zr<i7}function c7(e,t,n,s){const o=ha(e+"|"+t+"|"+n)*Zr,i=Math.floor((s+o)/Zr);return Tc[Math.floor(ha(e+t+n+i)*Tc.length)%Tc.length]}function d7(e,t,n,s,o){const i={pair:new Map,duet:new Map,nearBaby:new Map,babyCoo:!1,pets:new Map},a=[...t].sort(r7),r=new Set;for(const h of a){if(!h.dancingAt||r.has(h.id))continue;let u=null,y=1/0;for(const m of a){if(m===h||r.has(m.id)||m.dancingAt!==h.dancingAt)continue;const v=Pc(h,m);v<=t7&&v<y&&(y=v,u=m)}if(u){const m=ha(e+h.id+u.id);i.duet.set(h.id,{with:u.id,face:u.x<h.x?-1:1,phase:m}),i.duet.set(u.id,{with:h.id,face:h.x<u.x?-1:1,phase:m}),r.add(h.id),r.add(u.id)}}const l=a.filter(h=>!h.busy&&!h.lying),c=[];for(let h=0;h<l.length;h++)for(let u=h+1;u<l.length;u++){const y=Pc(l[h],l[u]);y<=e7&&c.push({a:l[h],b:l[u],d:y})}c.sort((h,u)=>h.d-u.d||(h.a.id+h.b.id<u.a.id+u.b.id?-1:1));const d=new Set;for(const{a:h,b:u}of c){if(i.pair.size>=a7*2)break;if(d.has(h.id)||d.has(u.id)||(d.add(h.id),d.add(u.id),!l7(e,h.id,u.id,o)))continue;let y=c7(e,h.id,u.id,o);y==="hop"&&(h.seated||u.seated)&&(y="wave");const m=ha(e+h.id+u.id);i.pair.set(h.id,{kind:y,with:u.id,face:u.x<h.x?-1:1,phase:m}),i.pair.set(u.id,{kind:y,with:h.id,face:h.x<u.x?-1:1,phase:(m+.18)%1})}if(s)for(const h of a)!h.lying&&Pc(h,s)<=n7&&(i.nearBaby.set(h.id,s.x<h.x?-1:1),i.babyCoo=!0);const f=a.filter(h=>h.seated||h.lying);for(const h of[...n].sort((u,y)=>u.key<y.key?-1:1)){let u=null,y=1/0;for(const g of f){const b=Math.abs(g.x-h.x);b<=s7&&b<y&&(y=b,u=g)}if(!u)continue;const m=h.x<=u.x?-1:1,v=[...i.pets.values()].some(g=>g.toward===u.id),w=u.x+m*o7*(v?1.9:1);i.pets.set(h.key,{toward:u.id,dx:Math.round(w-h.x)})}return i}const f7={play:Be,listen:Be*4,stir:Be*2,swing:Be*3,slide:Be*4,look:Be*5,kneel:Be*3},p7={play:"<span>♪</span><span>♩</span>",listen:"<span>♪</span>"},h7={keys:"<span>♪</span><span>♫</span><span>♩</span>",stove:'<span class="steam"></span><span class="steam"></span><span class="steam"></span>',water:'<span class="bub"></span><span class="bub"></span><span class="ripple"></span>',ducky:""},Yi=new Map;let Zs=null;function u7(e){try{Zs??=Sf(new(window.AudioContext||window.webkitAudioContext)),Zs.state==="suspended"&&Zs.resume().catch(()=>{});const t=Zs.currentTime+.02,n=[523.25,587.33,659.25,783.99,880,1046.5];for(let s=0;s<6;s++){const o=Zs.createOscillator(),i=Zs.createGain();o.type="triangle",o.frequency.value=n[(e+s*(s%2?2:3))%n.length];const a=t+s*.28;i.gain.setValueAtTime(0,a),i.gain.linearRampToValueAtTime(.06,a+.02),i.gain.exponentialRampToValueAtTime(8e-4,a+.6),o.connect(i).connect(Zs.destination),o.start(a),o.stop(a+.65)}}catch{}}function g7(e,t,n,s){if(sf(e)!=="keys")return!1;const o=Date.now();return(Yi.get(t)??0)>o?Yi.delete(t):(Yi.set(t,o+Hp),n&&u7(o%6),setTimeout(s,Hp+60)),s(),!0}function m7(e=Date.now()){const t=new Set;return Yi.forEach((n,s)=>{n>e?t.add(s):Yi.delete(s)}),t}function y7(e,t,n,s,o,i){const a=sf(e);if(a==="keys")return s.has(t)?"keys":null;if(a==="stove")return o.has(t)?"stove":null;if(a==="water"){for(const r of n.values())if(r.item===t&&r.kind==="look")return"water";return null}return cy(e)&&i?"ducky":null}const Kh=["soc-wave","soc-hop","soc-heart","soc-l","soc-r","soc-duet","soc-baby"];let Xh=new Map,Ac=new Set;const Jh=new Map;function w7(e,t){return{x:(e.offsetLeft+e.offsetWidth/2)/t,y:(e.offsetTop+e.offsetHeight)/t}}function b7(e,t){const n=e.layer.offsetWidth/e.roomW||1,s=[],o=new Map;e.layer.querySelectorAll(":scope > .pet").forEach((c,d)=>{if(c.classList.contains("lifted")||c.classList.contains("kenneled"))return;const f=c.classList.contains("pet-cat")?"cat":c.dataset.dog||"pet"+d;s.push({key:f,...w7(c,n)}),o.set(f,c)});const i=[];for(const[c,{d}]of e.dolls){const f=t.get(c);i.push({...d,id:c,busy:!!f,dancingAt:f?.kind==="dance"?f.item:void 0})}const a=d7(e.seed,i,s,e.baby,e.now),r=new Map;for(const c of i)for(const d of i)c!==d&&Math.hypot(c.x-d.x,(c.y-d.y)*1.5)<=200&&(r.get(c.id)??r.set(c.id,new Set).get(c.id)).add(d.id);for(const[c,d]of r)for(const f of d)!Xh.get(c)?.has(f)&&Ac.has(c)&&Ac.has(f)&&Jh.set(c,e.now+1800);Xh=r,Ac=new Set(i.map(c=>c.id));for(const[c,{el:d}]of e.dolls){const f=t.get(c),h=a.pair.get(c),u=a.duet.get(c),y=a.nearBaby.get(c),m=(Jh.get(c)??0)>e.now;let v="",w=0,g=0;if(u&&f)v="soc-duet",w=u.face,g=u.phase;else if(!f&&m){v="soc-wave";const P=[...r.get(c)??[]][0],$=P?e.dolls.get(P)?.d:void 0;w=$?$.x<e.dolls.get(c).d.x?-1:1:0}else!f&&h?(v="soc-"+h.kind,w=h.face,g=h.phase):!f&&y&&(v="soc-baby",w=y);const b=v+w;if(d.dataset.soc===b)continue;if(d.classList.remove(...Kh),!v){delete d.dataset.soc;continue}d.dataset.soc=b,d.classList.add(v),w&&d.classList.add(w<0?"soc-l":"soc-r");const _=Be*2;d.style.setProperty("--soc-delay",oo(g,_,e.now)+"ms"),v==="soc-duet"&&d.style.setProperty("--amb-delay",oo(g,Be*2,e.now)+"ms")}for(const c of e.layer.querySelectorAll("[data-soc]"))c.dataset.id||c.dataset.pid,[...e.dolls.values()].some(d=>d.el===c)||(c.classList.remove(...Kh),delete c.dataset.soc);for(const[c,d]of o){const f=a.pets.get(c),h=f&&!e.reduced||f?f.dx*n:0,u=parseFloat(d.dataset.socDx||"0");Math.abs(h-u)<1||(d.dataset.socDx=String(h),d.classList.toggle("soc-trot",Math.abs(h-u)>12&&!e.reduced),d.classList.toggle("soc-snug",!!f),d.style.translate=h?`${h.toFixed(1)}px 0`:"",Math.abs(h-u)>12&&setTimeout(()=>d.classList.remove("soc-trot"),1300))}const l=e.layer.querySelector(":scope > .baby");l&&l.classList.toggle("soc-coo",a.babyCoo)}function v7(e){return!!(e.held?.left&&ln(e.held.left.kind))||!!(e.held?.right&&ln(e.held.right.kind))}function Rc(e,t){const n=gf(t);return!n||t.seat?.pose==="lie"||mf(e,t,"clean")||v7(t)?null:n}function Xn(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function k7(e){!e||Xn()||(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),window.setTimeout(()=>e.classList.remove("wiggle"),480))}const _7=".round, .thing";function $7(){let e=null;const t=()=>{e?.classList.remove("pressing"),e=null};document.addEventListener("pointerdown",n=>{t();const s=n.target?.closest?.(_7);s&&(s.classList.add("pressing"),e=s)},{capture:!0,passive:!0});for(const n of["pointerup","pointercancel","dragstart","blur"])window.addEventListener(n,t,{capture:!0,passive:!0});document.addEventListener("pointerup",n=>{if(Xn())return;const s=n.target?.closest("button");s&&(s.classList.remove("spring"),s.offsetWidth,s.classList.add("spring"))},!0)}const Lm=wt("khg.showWishes"),tr=()=>{try{return localStorage.getItem(Lm)!=="0"}catch{return!0}},x7={sleepy:'<svg viewBox="0 0 40 40"><rect x="5" y="20" width="30" height="10" rx="3" fill="#8fb8ff" stroke="#5b3d5c" stroke-width="2.5"/><rect x="7" y="15" width="10" height="7" rx="3" fill="#fff" stroke="#5b3d5c" stroke-width="2.5"/><path d="M6 30 V34 M34 30 V34" stroke="#5b3d5c" stroke-width="2.5" stroke-linecap="round"/><path d="M24 6 H31 L24 13 H31" fill="none" stroke="#5b3d5c" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/></svg>',hungry:'<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="12" fill="#ff6b6b" stroke="#5b3d5c" stroke-width="2.5"/><path d="M20 11 V6" stroke="#5b3d5c" stroke-width="2.5" stroke-linecap="round"/><path d="M21 9 Q28 4 31 9 Q26 13 21 9 Z" fill="#7bd389" stroke="#5b3d5c" stroke-width="2"/></svg>',playful:'<svg viewBox="0 0 40 40"><ellipse cx="20" cy="16" rx="10" ry="12" fill="#ffd166" stroke="#5b3d5c" stroke-width="2.5"/><path d="M18 28 L22 28 L20 31 Z" fill="#ffd166" stroke="#5b3d5c" stroke-width="2"/><path d="M20 31 Q16 34 20 37" fill="none" stroke="#5b3d5c" stroke-width="2" stroke-linecap="round"/></svg>',clean:'<svg viewBox="0 0 40 40"><circle cx="15" cy="23" r="9" fill="#bfe9ff" stroke="#5b3d5c" stroke-width="2.5"/><circle cx="27" cy="14" r="6" fill="#bfe9ff" stroke="#5b3d5c" stroke-width="2.5"/><circle cx="29" cy="29" r="4" fill="#bfe9ff" stroke="#5b3d5c" stroke-width="2"/><path d="M11 19 Q13 17 15 17" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>'},M7={sleepy:"wants a nap",hungry:"wants a snack",playful:"wants to play",clean:"wants a bath"},L7='<svg viewBox="0 0 48 48"><path d="M6 28 Q24 8 42 28" fill="none" stroke="#5b3d5c" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="30" rx="14" ry="11" fill="#fff" stroke="#5b3d5c" stroke-width="3"/><circle cx="20" cy="30" r="5" fill="#ffd166" stroke="#5b3d5c" stroke-width="2.5"/><circle cx="31" cy="24" r="3" fill="#fff" stroke="#5b3d5c" stroke-width="2"/></svg>',E7='<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="14" ry="11" fill="#eee" stroke="#5b3d5c" stroke-width="3"/><path d="M10 40 L38 18" stroke="#5b3d5c" stroke-width="3" stroke-linecap="round"/></svg>',Em=(e,t)=>e==="sleepy"?/(^|-|:)bed$|bunk-bed|canopy-bed/.test(t):e==="hungry"?si(t):e==="clean"?Nn(t):Fo(t);function S7(e,t,n){const s=e.rooms[t.room]?.items??[],o=r=>n==="sleepy"?/bed|crib|cot/.test(r):n==="hungry"?si(r)||ln(r):n==="clean"?Nn(r):Fo(r);let i=null,a=1/0;for(const r of s)if(o(r.kind)){const l=Math.abs(r.x-t.x);l<a&&(a=l,i=r.x)}return i}function T7(e,t){const n=o=>Em(t,o);if((e.rooms[e.currentRoom]?.items??[]).some(o=>n(o.kind)))return null;const s=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"];for(const o of s){if(o===e.currentRoom)continue;if((e.rooms[o]?.items??[]).some(a=>n(a.kind)))return o}return null}function P7(e){const t=new Map,n=new Map;let s=0,o=performance.now(),i=0,a=0;const r=document.createElement("button");r.type="button",r.className="menuRow",r.id="btnWishes",r.innerHTML='<span class="mIco" id="wishIco"></span><span class="mLabel">Show wishes</span>';const l=()=>{const m=tr();r.querySelector("#wishIco").innerHTML=m?L7:E7,r.setAttribute("aria-label",m?"Wishes on":"Wishes off"),r.setAttribute("aria-pressed",String(m))};r.addEventListener("click",()=>{try{localStorage.setItem(Lm,tr()?"0":"1")}catch{}l(),C.click(),h(),F(tr()?"Wishes on":"Wishes off",1400)}),e.menuAfter?.insertAdjacentElement("afterend",r),l();function c(m){if(Xn()){m.classList.add("need-glow"),setTimeout(()=>m.classList.remove("need-glow"),900);return}const v=document.createElement("div");v.className="need-burst",v.setAttribute("aria-hidden","true");for(let g=0;g<7;g++){const b=document.createElement("i");b.className=g%2?"nb-heart":"nb-spark",b.style.setProperty("--a",g/7*360+15+"deg"),b.style.setProperty("--dl",g*40+"ms"),v.appendChild(b)}m.appendChild(v),setTimeout(()=>v.remove(),1400);const w=m.querySelector(":scope > .inner");w?.classList.remove("need-hop"),w?.offsetWidth,w?.classList.add("need-hop")}function d(m,v,w){const g=m.offsetWidth?m.getBoundingClientRect().width/m.offsetWidth:1;if(g>0&&Number.isFinite(g)&&v.style.setProperty("--nbs",g.toFixed(3)),!w){v.style.left="",v.style.bottom="";return}const b=m.querySelector(".inner svg .dollhead");if(!b)return;const _=m.getBoundingClientRect(),P=b.getBoundingClientRect();!_.width||!_.height||!P.width||(v.style.left=((P.left+P.width/2-_.left)/_.width*100).toFixed(1)+"%",v.style.bottom=((_.bottom-P.top)/_.height*100+4).toFixed(1)+"%")}function f(m){const v=m.querySelector(".inner svg .dollhead");if(!v)return;const w=m.getBoundingClientRect(),g=v.getBoundingClientRect();!w.width||!w.height||!g.width||(m.style.setProperty("--zx",((g.left+g.width*.7-w.left)/w.width*100).toFixed(1)+"%"),m.style.setProperty("--zy",((g.top-w.top)/w.height*100-14).toFixed(1)+"%"))}function h(){const m=e.get(),v=tr();for(const b of e.layer.querySelectorAll(".char[data-cid]")){const _=m.characters.find(Me=>Me.id===b.dataset.cid);if(!_)continue;const P={sleepy:3,hungry:3,playful:3,clean:3};for(const Me of io)P[Me]=co(_,Me);const $=t.get(_.id);$&&io.some(Me=>P[Me]>$[Me])&&(c(b),C.sparkle()),t.set(_.id,P);const x=Rc(m,_),D=!!_.seat&&_.seat.pose==="lie";b.classList.toggle("need-snooze",D),D?requestAnimationFrame(()=>f(b)):(b.style.removeProperty("--zx"),b.style.removeProperty("--zy")),b.classList.toggle("need-sleepy",x==="sleepy"&&!D);let W=b.querySelector(":scope > .need-bubble");if(!x||!v){if(W){W.classList.remove("show");const Me=W;setTimeout(()=>{Me.classList.contains("show")||Me.remove()},450)}continue}W||(W=document.createElement("div"),W.className="need-bubble",W.innerHTML='<i class="nb-dot1"></i><i class="nb-dot2"></i><span class="nb-cloud"></span>',b.appendChild(W)),W.dataset.need!==x&&(W.dataset.need=x,W.querySelector(".nb-cloud").innerHTML=x7[x],W.setAttribute("role","img"),W.setAttribute("aria-label",M7[x]));const Q=S7(m,_,x),q=Q==null?0:Math.max(-1,Math.min(1,(Q-_.x)/300));W.style.setProperty("--lean",String(Math.round(q*100)/100));const se=W;requestAnimationFrame(()=>{d(b,se,D),se.classList.add("show")})}for(const b of t.keys())m.characters.some(_=>_.id===b)||t.delete(b);const w=new Set;if(v){for(const b of m.characters)if(b.room===m.currentRoom&&Rc(m,b)){for(const _ of io)if(co(b,_)<=1)for(const P of m.rooms[m.currentRoom]?.items??[])Em(_,P.kind)&&w.add(P.id)}}for(const b of e.layer.querySelectorAll(".item[data-id]"))b.classList.toggle("need-hint",w.has(b.dataset.id));const g=document.getElementById("tabs");if(g){const b=document.body.classList.contains("mode-play");let _=null;if(v&&b)for(const P of m.characters){if(P.room!==m.currentRoom)continue;const $=Rc(m,P);if($&&(_=T7(m,$),_))break}for(const P of g.querySelectorAll("[data-room]"))P.classList.toggle("need-elsewhere",!!_&&P.dataset.room===_)}e.afterPaint?.()}function u(){if(!e.speaks())return;const m=e.get(),v=Date.now();for(const w of m.characters)if(w.room===m.currentRoom)for(const g of vw(m,w)){const b=w.id+"|"+g;v-(n.get(b)??0)<2500||(n.set(b,v),e.dispatch({type:"need/meet",id:w.id,need:g}))}}function y(m){const v=performance.now(),w=m??Math.min(v-o,5e3);if(o=v,m==null&&document.visibilityState!=="visible")return;if(!e.canDrift()||!e.speaks()){s=0;return}if(s+=w,s<yw(e.get(),a))return;s=0,a++;const g=$w(e.get(),i++);g&&e.dispatch({type:"need/drift",id:g.id,need:g.need})}e.subscribe(()=>{h(),setTimeout(u,0)}),e.layer.addEventListener("pointerup",m=>{m.target.closest?.(".char[data-cid]")&&(n.clear(),u())}),setInterval(()=>{document.hidden||(y(),h())},1e3),document.addEventListener("visibilitychange",()=>{o=performance.now()}),h(),new URLSearchParams(location.search).has("needsqa")&&(window.__needs={tick:m=>y(m),visible:()=>s,paint:h,care:u})}function A7(e){const t=e.scale;let n=0;e.overflowR>1&&e.overflowL>1?n=-e.overflowL:e.overflowR>1?n=e.overflowR:e.overflowL>1&&(n=-e.overflowL);const s=e.cam+n/t,o=Math.max(0,Math.min(e.maxCam,s)),i=s-o,a=e.nudgeX&&Math.abs(i)>.5?e.kidX-i:e.kidX;return{cam:o,kidX:a}}function R7(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function C7(e,t=3){const n=[...e].sort((l,c)=>l.x-c.x||l.id.localeCompare(c.id)),s=[],o=[],i=(l,c,d,f)=>d===void 0||f===void 0||l.y===void 0||l.h===void 0?l.lane===c:Math.abs(d-c*f-(l.y-l.lane*l.h))<(f+l.h)/2,a=(l,c,d,f,h)=>s.some(u=>i(u,d,f,h)&&Math.abs(u.x-l)<(u.w+c)/2+8),r=[];for(const l of n){let c=-1;for(let d=0;d<t;d++)if(!a(l.x,l.w,d,l.y,l.h)){c=d;break}c<0?r.push(l):(s.push({x:l.x,w:l.w,lane:c,y:l.y,h:l.h}),o.push({id:l.id,lane:c,initials:!1}))}for(const l of r){const c=Math.min(l.w,44);let d=0;for(let f=0;f<t;f++)if(!a(l.x,c,f,l.y,l.h)){d=f;break}s.push({x:l.x,w:c,lane:d,y:l.y,h:l.h}),o.push({id:l.id,lane:d,initials:!0})}return o}let I7=0;function Sm(e=document){const t=[...e.querySelectorAll(".nametag")].filter(o=>{const i=o.getBoundingClientRect();return i.width>2&&i.height>2});if(!t.length)return;const n=t.map(o=>{o.dataset.tagId||(o.dataset.tagId="tg"+(++I7).toString(36)),o.dataset.full||(o.dataset.full=(o.textContent||"").trim()),o.classList.contains("is-initials")||(o.dataset.fullW=String(o.getBoundingClientRect().width));const i=o.getBoundingClientRect(),a=Number(o.dataset.fullW)||i.width,r=(parseFloat(getComputedStyle(o).fontSize)||16)*1.35,l=Number(o.style.getPropertyValue("--tag-lane"))||0;return{id:o.dataset.tagId,x:i.left+i.width/2,w:a,y:i.bottom+l*r,h:Math.max(r,i.height)}}),s=new Map(C7(n).map(o=>[o.id,o]));for(const o of t){const i=s.get(o.dataset.tagId||"");if(!i)continue;const a=o.dataset.full||"",r=i.initials?R7(a):a;o.textContent!==r&&(o.textContent=r),o.classList.toggle("is-initials",i.initials),o.style.setProperty("--tag-lane",String(i.lane))}}const Rd=120,O7=300,B7=.25,z7=500;function D7(e){return!Number.isFinite(e)||e<=0?Rd:Math.round(Math.min(O7,Math.max(Rd,e)))}function H7(e){return e.reduced||e.first||e.sinceResizeMs<z7||!(e.jumpFrac<=B7)?0:D7(e.avgGapMs*1.15)}let Tm=-1/0;if(typeof window<"u"){const e=()=>{Tm=performance.now()};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}function eu(e,t,n){if(!e)return NaN;const s=parseFloat(e),o=parseFloat(t);return!Number.isFinite(s)||!Number.isFinite(o)?NaN:e.endsWith("%")&&t.endsWith("%")?Math.abs(o-s)/100:e.endsWith("px")&&t.endsWith("px")&&n>0?Math.abs(o-s)/n:NaN}function Dl(e,t,n,s=performance.now()){if(!(e.style.left===t&&e.style.top===n)){if(e.classList.contains("other")){const o=Number(e.dataset.glideAt||0);e.dataset.glideAt=String(s);const i=o?Math.min(s-o,600):Rd,r=(Number(e.dataset.glideGap||0)||i)*.5+i*.5;e.dataset.glideGap=String(r);const l=e.parentElement,c=Math.max(eu(e.style.left,t,l?.clientWidth??0),eu(e.style.top,n,l?.clientHeight??0)),d=H7({first:!o||!e.style.left,jumpFrac:c,sinceResizeMs:s-Tm,reduced:Xn(),avgGapMs:r});e.style.transitionDuration=d+"ms",e.dataset.glideMs=String(d)}e.style.left=t,e.style.top=n}}function Pm(e,t,n=t+"s"){return`${e} ${e===1?t:n}`}function W7(e,t){const n=t?.type??"";switch(e){case"locked":return"This house is locked 🔒 You can look around!";case"notyours":return n==="char/move"||n.startsWith("item/")?"That's hers to move 💛":"Only she can do that one 💛";case"cuddling":return"Someone is cuddling!";case"nohouse":return"That house isn't on the street anymore.";case"toobig":return"This house is super full! Put something away first.";default:return""}}function V7(e,t,n){const s=n?"the "+n.toLowerCase():"something";return e?t.type==="item/move"?`${e} moved ${s}`:t.type==="item/delete"?`${e} put ${s} away`:"":""}function U7(e=5e3){const t=new Map;return(n,s=Date.now())=>{const o=t.get(n)??-1/0;if(s-o<e)return!1;if(t.set(n,s),t.size>64)for(const[i,a]of t)s-a>e&&t.delete(i);return!0}}const Q7="Everyone's already playing! Ask a grown-up to add your name.",N7=e=>`${e} is already on the list 💛`,Am="/cozy-preview/assets/window-CIKRGJz0.webp",q7=Object.freeze(Object.defineProperty({__proto__:null,default:Am},Symbol.toStringTag,{value:"Module"})),Rm="#5a3d5c",Lt=`stroke="${Rm}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,j7={living:"#ff8fab",bedroom:"#c9a0dc",kitchen:"#8fd6a6",salon:"#f0a0d8",nursery:"#9ad7f5",bathroom:"#7ec8d6",backyard:"#80ed99"};function Cm(e){return e==="living"&&Zn()}function F7(e){if(Cm(e))return`<div class="sceneWin builtin-window painted" aria-hidden="true"><div class="pwin"><img class="artimg" alt="" draggable="false" src="${Am}"><i class="artnight" aria-hidden="true"></i></div></div>`;const t=j7[e]??"#ffb3c6";return`<div class="sceneWin builtin-window" aria-hidden="true"><svg viewBox="0 0 160 180">
    <path d="M18 20 H142 V150 H18 Z" fill="#fff6ea" ${Lt}/>
    <path d="M28 30 H132 V118 H28 Z" fill="#b9e3ff" ${Lt}/>
    <path d="M80 30 V118 M28 74 H132" ${Lt} stroke-width="3"/>
    <circle cx="48" cy="52" r="10" fill="#fff" opacity=".85"/>
    <ellipse cx="108" cy="48" rx="16" ry="8" fill="#fff" opacity=".8"/>
    <path d="M40 118 Q58 96 70 118 Q90 100 112 118" fill="#7dce8a" stroke="${Rm}" stroke-width="3"/>
    <rect x="96" y="86" width="8" height="32" rx="3" fill="#6b4a32" ${Lt} stroke-width="2"/>
    <circle cx="100" cy="80" r="12" fill="#5cc985" ${Lt} stroke-width="2"/>
    <path d="M8 16 Q6 80 16 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <path d="M152 16 Q154 80 144 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <rect x="46" y="146" width="68" height="12" rx="4" fill="#ffe7c2" ${Lt}/>
  </svg></div>`}function Z7(){return`<div class="sceneRug" aria-hidden="true"><svg viewBox="0 0 200 80">
    <ellipse cx="100" cy="48" rx="92" ry="24" fill="#ffc8dd" ${Lt}/>
    <ellipse cx="100" cy="48" rx="64" ry="15" fill="#bde0fe" ${Lt} stroke-width="3"/>
    <ellipse cx="100" cy="48" rx="28" ry="7" fill="#fff6ea"/>
  </svg></div>
  <div class="sceneLamp" aria-hidden="true"><svg viewBox="0 0 80 160">
    <path d="M18 52 L30 8 H50 L62 52 Z" fill="#ffd166" ${Lt}/>
    <rect x="36" y="52" width="8" height="78" rx="4" fill="#c9a0dc" ${Lt}/>
    <ellipse cx="40" cy="136" rx="26" ry="8" fill="#b388d6" ${Lt}/>
    <circle cx="34" cy="28" r="4" fill="#fff" opacity=".8"/>
  </svg></div>
  <div class="scenePlant" aria-hidden="true"><svg viewBox="0 0 90 140">
    <path d="M45 128 C45 90 18 78 20 48 C40 58 44 80 45 128" fill="#5cc985" ${Lt}/>
    <path d="M45 128 C45 92 74 70 78 40 C58 54 50 82 45 128" fill="#80ed99" ${Lt}/>
    <path d="M45 128 C40 96 28 88 22 70" fill="none" stroke="#3d9a62" stroke-width="3"/>
    <path d="M30 132 H62 L56 118 H36 Z" fill="#e07a5f" ${Lt}/>
    <ellipse cx="46" cy="126" rx="16" ry="5" fill="#c4634a"/>
  </svg></div>`}function G7(e,t){return t==="backyard"?[]:[{id:e("rug"),kind:"rug",x:1152,y:540,flip:!1,z:0,scale:1},{id:e("lamp"),kind:"lamp",x:804,y:470,flip:!1,z:0,scale:1},{id:e("plant"),kind:"plant",x:1584,y:480,flip:!1,z:0,scale:1}]}let Ys="",Im=null;function Y7(e){Im=e,Ys=""}function K7(e,t,n){const s=Im?.(t,n);if(s!=null){const r="custom|"+t;if(r===Ys&&e.childElementCount)return;Ys=r,e.innerHTML=s,e.dataset.room=t;return}if(t==="backyard"){const r="yard|"+t;if(r===Ys&&e.childElementCount)return;Ys=r,e.innerHTML="",e.dataset.room=t;return}const o=n.length===0,i=n.some(r=>/window|curtain/i.test(r.kind)),a=t+(o?"|e":"")+(i?"|w":"")+(Cm(t)?"|p":"");a===Ys&&e.childElementCount||(Ys=a,e.innerHTML=(i?"":F7(t))+(o?Z7():""),e.dataset.room=t)}let tu=null;function X7(e,t){if(e==="backyard")return"backyard";tu??=Vn().rooms;const n=tu[e];return!n||t.wallTile||t.floorTile||t.wallpaper.toLowerCase()!==n.wallpaper.toLowerCase()||t.floor.toLowerCase()!==n.floor.toLowerCase()||t.pattern!==n.pattern?null:"room-"+e}const J7={backyard:{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},barn:{w:3800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,200]]},clubhouse:{w:5200,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200],[4800,400]]},park:{w:5800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200],[4800,1e3]]},ranch:{w:7200,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200],[4800,1200],[6e3,1200]]},"room-bathroom":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-bedroom":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-kitchen":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-living":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-nursery":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]},"room-salon":{w:4800,h:1200,tiles:[[0,1200],[1200,1200],[2400,1200],[3600,1200]]}},nu=Object.assign({"../../assets/art/scene/backyard.webp":()=>p(()=>import("./backyard-D2asoOn9.js"),[]).then(e=>e.default),"../../assets/art/scene/barn.webp":()=>p(()=>import("./barn-CuZvC5pF.js"),[]).then(e=>e.default),"../../assets/art/scene/clubhouse.webp":()=>p(()=>import("./clubhouse-BPTDFNMs.js"),[]).then(e=>e.default),"../../assets/art/scene/map-portrait.webp":()=>p(()=>import("./map-portrait-DlLRxJXt.js"),[]).then(e=>e.default),"../../assets/art/scene/map.webp":()=>p(()=>import("./map-rTezHo5N.js"),[]).then(e=>e.default),"../../assets/art/scene/park.webp":()=>p(()=>import("./park-BHxAan6S.js"),[]).then(e=>e.default),"../../assets/art/scene/ranch.webp":()=>p(()=>import("./ranch-lUp516wp.js"),[]).then(e=>e.default),"../../assets/art/scene/room-bathroom.webp":()=>p(()=>import("./room-bathroom-D55ZdJqE.js"),[]).then(e=>e.default),"../../assets/art/scene/room-bedroom.webp":()=>p(()=>import("./room-bedroom-BUdG8DSZ.js"),[]).then(e=>e.default),"../../assets/art/scene/room-kitchen.webp":()=>p(()=>import("./room-kitchen-DBSjodA7.js"),[]).then(e=>e.default),"../../assets/art/scene/room-living.webp":()=>p(()=>import("./room-living-DE0h2-6k.js"),[]).then(e=>e.default),"../../assets/art/scene/room-nursery.webp":()=>p(()=>import("./room-nursery-Xq68P00f.js"),[]).then(e=>e.default),"../../assets/art/scene/room-salon.webp":()=>p(()=>import("./room-salon-DK6UyyJC.js"),[]).then(e=>e.default)}),Hl=new Map;for(const e in nu){const t=(e.split("/").pop()||"").replace(/\.webp$/i,"");t&&!t.startsWith("_")&&Hl.set(t,nu[e])}const e9=Object.assign({"../../assets/art/scene-tiles/backyard/backyard.0.webp":()=>p(()=>import("./backyard.0-vsvuydUV.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/backyard/backyard.1.webp":()=>p(()=>import("./backyard.1-CAS5z9Jh.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/backyard/backyard.2.webp":()=>p(()=>import("./backyard.2-Br8_CM3g.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/backyard/backyard.3.webp":()=>p(()=>import("./backyard.3-CBHeMOam.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.0.webp":()=>p(()=>import("./barn.0-NJwiAFNA.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.1.webp":()=>p(()=>import("./barn.1-DpG1q0gS.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.2.webp":()=>p(()=>import("./barn.2-Cc-3kQT6.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/barn/barn.3.webp":()=>p(()=>import("./barn.3-CecwdRcc.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.0.webp":()=>p(()=>import("./clubhouse.0-Bx9PmmVV.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.1.webp":()=>p(()=>import("./clubhouse.1-hH_Crto4.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.2.webp":()=>p(()=>import("./clubhouse.2-DmL6_81q.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.3.webp":()=>p(()=>import("./clubhouse.3-veyA6bVc.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/clubhouse/clubhouse.4.webp":()=>p(()=>import("./clubhouse.4-C0LauP6s.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.0.webp":()=>p(()=>import("./park.0-Coxx2McE.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.1.webp":()=>p(()=>import("./park.1-MU99fsV6.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.2.webp":()=>p(()=>import("./park.2-qLtJICjB.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.3.webp":()=>p(()=>import("./park.3-DZvdAEim.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/park/park.4.webp":()=>p(()=>import("./park.4-BqUTtR_s.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.0.webp":()=>p(()=>import("./ranch.0-BRve-kIf.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.1.webp":()=>p(()=>import("./ranch.1-f1mNHEPE.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.2.webp":()=>p(()=>import("./ranch.2-BjoIr_81.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.3.webp":()=>p(()=>import("./ranch.3-BI44lmlJ.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.4.webp":()=>p(()=>import("./ranch.4-r2mDWPSr.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/ranch/ranch.5.webp":()=>p(()=>import("./ranch.5-BTYXedUa.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.0.webp":()=>p(()=>import("./room-bathroom.0-D7Me058j.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.1.webp":()=>p(()=>import("./room-bathroom.1-BgoIRGci.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.2.webp":()=>p(()=>import("./room-bathroom.2-GU-7hNDf.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bathroom/room-bathroom.3.webp":()=>p(()=>import("./room-bathroom.3-Cq2ua7Jq.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.0.webp":()=>p(()=>import("./room-bedroom.0-BE6AcThX.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.1.webp":()=>p(()=>import("./room-bedroom.1-B_0pWH1X.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.2.webp":()=>p(()=>import("./room-bedroom.2-CxQOkOm6.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-bedroom/room-bedroom.3.webp":()=>p(()=>import("./room-bedroom.3-D69Y9gTh.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.0.webp":()=>p(()=>import("./room-kitchen.0-CvZReVWW.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.1.webp":()=>p(()=>import("./room-kitchen.1-DS1Xwodh.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.2.webp":()=>p(()=>import("./room-kitchen.2-D6u50UMl.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-kitchen/room-kitchen.3.webp":()=>p(()=>import("./room-kitchen.3-BMkCpIAJ.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.0.webp":()=>p(()=>import("./room-living.0-A8-tCX9S.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.1.webp":()=>p(()=>import("./room-living.1-CALTtDMd.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.2.webp":()=>p(()=>import("./room-living.2-Bxe0zxSt.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-living/room-living.3.webp":()=>p(()=>import("./room-living.3-CPHtx-6b.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.0.webp":()=>p(()=>import("./room-nursery.0-COAEwapA.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.1.webp":()=>p(()=>import("./room-nursery.1-BM5pQ-Bb.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.2.webp":()=>p(()=>import("./room-nursery.2-2L6O5qxr.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-nursery/room-nursery.3.webp":()=>p(()=>import("./room-nursery.3-Cp8CBs_W.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.0.webp":()=>p(()=>import("./room-salon.0-CNPvSncr.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.1.webp":()=>p(()=>import("./room-salon.1-ConvfJGm.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.2.webp":()=>p(()=>import("./room-salon.2-DSXEMGpE.js"),[]).then(e=>e.default),"../../assets/art/scene-tiles/room-salon/room-salon.3.webp":()=>p(()=>import("./room-salon.3-BwNOo_v-.js"),[]).then(e=>e.default)}),Xo=new Map;for(const[e,t]of Object.entries(J7)){const n=t.tiles.map(([s,o],i)=>({x:s,w:o,get:e9[`../../assets/art/scene-tiles/${e}/${e}.${i}.webp`]}));Hl.has(e)&&n.length&&n.every(s=>!!s.get)&&Xo.set(e,{w:t.w,parts:n})}const su=!1;function t9(){try{const e=new URLSearchParams(location.search).get("tiles");return e==="1"?!1:e==="0"?!0:!su}catch{return!su}}function n9(){try{if(new URLSearchParams(location.search).get("art")==="v1")return!0}catch{}return!Lf()}const An=new Map,s9=24;function o9(e){let t=An.get(e);if(t)return t;const n=Hl.get(e),s={state:"loading",p:null};for(s.p=Cs(n).then(o=>(s.state="ok",s.url=o,o)).catch(()=>(s.state="failed",An.get(e)===s&&An.delete(e),null)),An.set(e,s);An.size>s9;)An.delete(An.keys().next().value);return s}const Wl=new Set;function Ii(e,t){e.querySelectorAll(":scope > img.sceneArt").forEach(s=>{s.removeAttribute("src"),s.remove()}),Wl.delete(e),Et.delete(e),Et.size||Bm();const n=t??e.__sceneMark;n&&(n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt)}function Om(e){for(const t of[...Wl])t!==e&&(t.dataset.sceneWant="",Ii(t,null))}function mo(e,t,n=e){const s=t&&Hl.has(t)&&!n9()?t:null;if(e.dataset.sceneWant=s??"",e.__sceneMark=n,!s){Ii(e,n);return}if(Om(e),Xo.has(s)&&!t9()){a9(e,s,n);return}Et.has(e)&&Ii(e,n);const o=o9(s),i=l=>{if(e.dataset.sceneWant!==s)return;let c=e.querySelector(":scope > img.sceneArt");if(c&&c.getAttribute("src")===l&&!c.hidden){n.classList.add("sceneArtOn"),n.dataset.sceneArt=s;return}c||(c=document.createElement("img"),c.className="sceneArt",c.alt="",c.setAttribute("aria-hidden","true"),c.draggable=!1,c.decoding="async",e.prepend(c)),Wl.add(e);const d=c;if(d.getAttribute("src")===l){a(d);return}d.hidden=!0,n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt,d.src=l,d.decode().then(()=>{e.dataset.sceneWant===s&&d.isConnected&&d.getAttribute("src")===l&&a(d)},()=>{const f=Number(d.dataset.tries||"0");if(f<Ls.length&&e.dataset.sceneWant===s&&d.isConnected){d.dataset.tries=String(f+1),setTimeout(()=>{e.dataset.sceneWant===s&&d.isConnected&&d.getAttribute("src")===l&&(d.removeAttribute("src"),i(l))},Ls[f]);return}o.state="failed",An.get(s)===o&&An.delete(s),e.dataset.sceneWant===s&&Ii(e,n)})},a=l=>{l.hidden=!1,n.classList.add("sceneArtOn"),n.dataset.sceneArt=s};if(o.state==="ok"){i(o.url);return}if(o.state==="failed"){Ii(e,n);return}n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt;const r=e.querySelector(":scope > img.sceneArt");r&&(r.hidden=!0),o.p.then(l=>{l&&i(l)})}const Et=new Map,ou=new Map;let Ki=0;function Bm(){Ki&&(clearInterval(Ki),Ki=0)}function i9(){Ki||(Ki=window.setInterval(()=>{if(!document.hidden)for(const e of Et.keys())Qf(e)},200))}function a9(e,t,n){const s=Xo.get(t);let o=Et.get(e);if(!o||o.scene!==t){e.querySelectorAll(":scope > img.sceneArt").forEach(a=>{a.removeAttribute("src"),a.remove()}),n.classList.remove("sceneArtOn"),delete n.dataset.sceneArt;const i=s.parts.map((a,r)=>{const l=document.createElement("img");return l.className="sceneArt sceneTile",l.alt="",l.setAttribute("aria-hidden","true"),l.draggable=!1,l.decoding="async",l.dataset.tile=String(r),l.hidden=!0,l.style.left=a.x/s.w*100+"%",l.style.width=a.w/s.w*100+"%",l});e.prepend(...i),o={scene:t,mark:n,imgs:i,shown:!1},Et.set(e,o)}Wl.add(e),i9(),Qf(e)}function Qf(e){const t=Et.get(e);if(!t||e.dataset.sceneWant!==t.scene)return;const n=Xo.get(t.scene),s=e.getBoundingClientRect();if(s.width<2)return;const o=innerWidth,i=o*.25,a=[];t.imgs.forEach((r,l)=>{const c=n.parts[l],d=s.left+c.x/n.w*s.width,f=d+c.w/n.w*s.width,h=f>-i&&d<o+i;f>0&&d<o&&a.push(r),h&&!r.dataset.state&&r9(e,t,r,l)}),!t.shown&&a.length&&a.every(r=>r.dataset.state==="ok")&&(t.shown=!0,t.mark.classList.add("sceneArtOn"),t.mark.dataset.sceneArt=t.scene)}function r9(e,t,n,s){n.dataset.state="loading";const o=t.scene+"."+s,i=ou.get(o),a=i?Promise.resolve(i):Cs(()=>Xo.get(t.scene).parts[s].get()).then(c=>(ou.set(o,c),c)),r=(c,d=0)=>{Et.get(e)!==t||!n.isConnected||(n.src=c,n.decode().then(()=>{Et.get(e)!==t||!n.isConnected||n.dataset.state==="loading"&&(n.hidden=!1,n.dataset.state="ok",Qf(e))},()=>{if(!(Et.get(e)!==t||!n.isConnected)){if(d<Ls.length){setTimeout(()=>{Et.get(e)===t&&n.isConnected&&n.dataset.state==="loading"&&(n.removeAttribute("src"),r(c,d+1))},Ls[d]);return}l()}}))},l=()=>{Et.get(e)===t&&(Et.delete(e),Et.size||Bm(),e.querySelectorAll(":scope > img.sceneTile").forEach(c=>{c.removeAttribute("src"),c.remove()}),Xo.delete(t.scene),mo(e,t.scene,t.mark))};a.then(c=>r(c),()=>l())}const Ve="#5a3d5c",A=(e=4)=>`stroke="${Ve}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,Aa=600,rn=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],yn=(e,t,n=3)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="${Ve}"/><circle cx="${e+1}" cy="${t-1}" r="${n/3}" fill="#fff"/>`,to=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="5" ry="3" fill="#ff9bb5" opacity=".75"/>`,l9=(e,t,n,s)=>rn.map((o,i)=>`<path d="M${e-n+i*s} ${t} A${n-i*s} ${n-i*s} 0 0 1 ${e+n-i*s} ${t}" fill="none" stroke="${o}" stroke-width="${s}"/>`).join(""),c9=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${A()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${A()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${A()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${A()}/></g>`,Bn=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-46" y="-50" width="92" height="50" rx="14" fill="#f5d27a" ${A()}/>
  <path d="M-30 -42 V-8 M0 -44 V-6 M30 -42 V-8" stroke="#d9a93f" stroke-width="4" stroke-linecap="round"/><path d="M-46 -26 H46" stroke="#c98a2e" stroke-width="5"/></g>`,d9=(e,t,n)=>{const s=Array.from({length:Math.floor((t-e)/70)+1},(o,i)=>`<rect x="${e+i*70-7}" y="${n-58}" width="14" height="64" rx="5" fill="#fff6e6" ${A(3)}/>`).join("");return`<rect x="${e}" y="${n-46}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${A(3)}/><rect x="${e}" y="${n-22}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${A(3)}/>${s}`};function f9(){const e=$a;return`<svg class="parkScene ranchScene" viewBox="0 0 ${e} ${Aa}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="rcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c7e8ff"/><stop offset="1" stop-color="#fff4fb"/></linearGradient></defs>
  <rect width="${e}" height="440" fill="url(#rcSky)"/>
  <g opacity=".55">${l9(1900,430,620,26)}</g>
  ${[160,820,1500,2300,3e3].map((t,n)=>`<g transform="translate(${t} ${70+n%2*34})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <g transform="translate(${e-200} 92)"><circle r="48" fill="#ffe066" ${A()}/>${yn(-15,-6,4)}${yn(13,-6,4)}<path d="M-14 12 Q0 24 14 12" fill="none" ${A(3)}/>${to(-26,8)}${to(26,8)}</g>
  <path d="M-50 370 Q600 230 1300 350 T2600 330 T${e+100} 360 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#a6e3a0"/><path d="M0 410 H${e}" ${A()}/>
  <path d="M0 566 Q900 530 1800 570 T${e} 552 V600 H0 Z" fill="#f2dcb8" opacity=".9"/>
  ${c9(3560,400,.8,"#4fbf7a")}
  <!-- entrance gate with a rainbow arch -->
  <g class="ranchSign"><g class="ranchSignArt"><rect x="40" y="290" width="24" height="210" rx="6" fill="#c99366" ${A()}/><rect x="196" y="290" width="24" height="210" rx="6" fill="#c99366" ${A()}/>
    <path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${Ve}" stroke-width="44" stroke-linecap="round"/>
    ${rn.map((t,n)=>`<path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${t}" stroke-width="${36-n*6}" stroke-linecap="round"/>`).join("")}
    <rect x="22" y="250" width="216" height="40" rx="14" fill="#fff6e6" ${A(3)}/><text x="130" y="277" text-anchor="middle" font-size="19" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  <!-- red barn with rainbow trim and banner -->
  <g transform="translate(270 0)">
    <path d="M0 470 V250 L60 180 H270 L330 250 V470 Z" fill="#ef5b5b" ${A(5)}/>
    <path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${Ve}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    ${rn.map((t,n)=>`<path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${t}" stroke-width="3" transform="translate(0 ${-7+n*2.8})" stroke-linejoin="round"/>`).join("")}
    <rect x="115" y="215" width="100" height="56" rx="10" fill="#fff6e6" ${A(4)}/><path d="M115 215 L215 271 M215 215 L115 271" stroke="#ef5b5b" stroke-width="6"/>
    <rect x="95" y="330" width="140" height="140" rx="8" fill="#fff6e6" ${A(4)}/><rect x="108" y="342" width="56" height="128" fill="#d94848" ${A(3)}/><rect x="166" y="342" width="56" height="128" fill="#d94848" ${A(3)}/>
    <path d="M108 342 L164 470 M164 342 L108 470 M166 342 L222 470 M222 342 L166 470" stroke="#fff6e6" stroke-width="6"/>
    <g class="barnBanner" transform="translate(165 300)"><g class="ranchSignArt">${rn.map((t,n)=>`<rect x="${-120+n*40}" y="-16" width="40" height="30" fill="${t}"/>`).join("")}<rect x="-120" y="-16" width="240" height="30" fill="none" ${A(3)}/>
      <text x="0" y="6" text-anchor="middle" font-size="18" font-weight="900" fill="#fff" stroke="${Ve}" stroke-width="4" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  </g>
  ${Bn(640,560,.8)}${Bn(1950,470,.7)}${Bn(1880,470,.55)}${Bn(3115,470,.7)}${Bn(3115,425,.55)}
  <!-- the petting zoo moved into the barn: a sign by the barn door, sunflowers where the pen was -->
  ${Array.from({length:6},(t,n)=>{const s=1030+n*66,o=70+n%3*18;return`<g transform="translate(${s} 470)"><path d="M0 0 V-${o}" stroke="#40c057" stroke-width="6" stroke-linecap="round"/><ellipse cx="${n%2?9:-9}" cy="-${o/2}" rx="11" ry="5" fill="#69db7c" ${A(2.5)}/>${[0,45,90,135,180,225,270,315].map(i=>`<ellipse cx="${Math.cos(i*Math.PI/180)*14}" cy="${-o+Math.sin(i*Math.PI/180)*14}" rx="8" ry="5" transform="rotate(${i} ${Math.cos(i*Math.PI/180)*14} ${-o+Math.sin(i*Math.PI/180)*14})" fill="#ffd43b" ${A(2)}/>`).join("")}<circle cy="-${o}" r="10" fill="#a0522d" ${A(2.5)}/></g>`}).join("")}
  <!-- pond -->
  <ellipse cx="${$t.x}" cy="${$t.y}" rx="${$t.rx}" ry="${$t.ry}" fill="#8ecae6" ${A()}/><ellipse cx="${$t.x-15}" cy="${$t.y-6}" rx="70" ry="16" fill="#bde6f7"/>
  <!-- paddock fence + HORSES sign are their own depth layer (paddockFenceSVG) -->
  <!-- garden -->
  <rect x="3140" y="520" width="420" height="70" rx="20" fill="#b07d54" ${A()}/>
  <rect x="3260" y="430" width="160" height="40" rx="12" fill="#fff6e6" ${A(3)}/><text x="3340" y="458" text-anchor="middle" font-size="21" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">GARDEN</text>
  <path d="M3340 470 V500" ${A(5)}/>
  </svg>`}function p9(){return`<svg class="fenceLayer" viewBox="0 0 ${$a} ${Aa}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  ${d9(2400,3080,470)}
  <rect x="2640" y="380" width="180" height="40" rx="12" fill="#fff6e6" ${A(3)}/><text x="2730" y="408" text-anchor="middle" font-size="21" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">HORSES</text>
  </svg>`}const zm=[{name:"Goat",say:"Meh-eh-eh!",snd:"bleat"},{name:"Sheep",say:"Baa!",snd:"baa"},{name:"Piglet",say:"Oink oink!",snd:"oink"},{name:"Chicks",say:"Peep peep!",snd:"peep"},{name:"Bunny",say:"*wiggle wiggle*",snd:"squeak"},{name:"Cow",say:"Moooo!",snd:"moo"}],nr=(e,t,n,s=94)=>e.map((o,i)=>`<rect class="leg ${i%2?"b":"a"}" x="${o}" y="${t}" width="9" height="${s-t}" rx="4" fill="${n}" ${A(3)}/>`).join("");function Cd(e){switch(e){case 0:return`<svg viewBox="0 0 120 100">${nr([32,44,70,82],60,"#efe6dc")}<path class="tail" d="M24 50 l-8 -10" ${A(5)}/>
      <ellipse cx="58" cy="56" rx="34" ry="17" fill="#f4ede5" ${A()}/><g class="head"><path d="M86 30 l-6 -16 l10 10 Z M96 30 l2 -17 l5 13 Z" fill="#c9b8a8" ${A(3)}/>
      <ellipse cx="94" cy="40" rx="14" ry="16" fill="#f4ede5" ${A()}/><ellipse class="ear" cx="80" cy="36" rx="9" ry="4" fill="#e8d6c4" ${A(3)}/>${yn(98,36)}<path d="M98 56 q2 8 6 0" fill="#e8d6c4" ${A(3)}/>${to(102,46)}<circle cx="106" cy="44" r="2" fill="${Ve}"/></g></svg>`;case 1:return`<svg viewBox="0 0 120 100">${nr([36,48,70,80],62,"#5a4a5c")}
      ${[[40,50],[56,44],[72,48],[86,56],[70,64],[48,64],[34,60]].map(([t,n])=>`<circle cx="${t}" cy="${n}" r="15" fill="#fff" ${A(3)}/>`).join("")}<ellipse cx="60" cy="55" rx="30" ry="14" fill="#fff"/>
      <g class="head"><ellipse cx="96" cy="46" rx="13" ry="15" fill="#6b5a6e" ${A()}/><circle cx="92" cy="32" r="8" fill="#fff" ${A(3)}/><ellipse class="ear" cx="82" cy="44" rx="8" ry="4" fill="#6b5a6e" ${A(3)}/>
      <circle cx="99" cy="42" r="3.2" fill="#fff"/><circle cx="99.5" cy="42" r="1.8" fill="${Ve}"/>${to(102,52)}</g></svg>`;case 2:return`<svg viewBox="0 0 120 100">${nr([38,50,66,78],66,"#ffadc6")}<path class="tail" d="M28 54 q-10 -4 -6 -12 q6 0 2 8" fill="none" ${A(3)}/>
      <ellipse cx="58" cy="60" rx="32" ry="20" fill="#ffc2d4" ${A()}/><g class="head"><circle cx="90" cy="52" r="16" fill="#ffc2d4" ${A()}/><path d="M80 38 l2 -12 l9 8 Z" fill="#ffadc6" ${A(3)}/>
      <ellipse cx="104" cy="56" rx="7" ry="8" fill="#ff9bb8" ${A(3)}/><circle cx="102" cy="54" r="1.6" fill="${Ve}"/><circle cx="106" cy="57" r="1.6" fill="${Ve}"/>${yn(92,46)}${to(90,60)}</g></svg>`;case 3:return`<svg viewBox="0 0 120 100">${[[30,72,1],[62,66,1.15],[92,74,.95]].map(([t,n,s])=>`<g transform="translate(${t} ${n}) scale(${s})"><path d="M-4 16 v8 M4 16 v8" stroke="#ff9f43" stroke-width="3" stroke-linecap="round"/>
      <circle cx="0" cy="4" r="14" fill="#ffe066" ${A(3)}/><path d="M-8 2 q-6 4 0 8" fill="#ffd43b" ${A(2)}/><g class="head"><circle cx="5" cy="-8" r="9" fill="#ffe066" ${A(3)}/><path d="M13 -9 l7 2 l-7 3 Z" fill="#ff9f43" ${A(2)}/>${yn(7,-10,2.2)}</g></g>`).join("")}</svg>`;case 4:return`<svg viewBox="0 0 120 100"><circle class="tail" cx="30" cy="68" r="8" fill="#fff" ${A(3)}/><ellipse cx="56" cy="72" rx="28" ry="20" fill="#f6eef9" ${A()}/><ellipse cx="74" cy="90" rx="12" ry="5" fill="#f6eef9" ${A(3)}/>
      <g class="head"><ellipse class="ear" cx="78" cy="26" rx="7" ry="20" fill="#f6eef9" ${A(3)} transform="rotate(-12 78 26)"/><ellipse cx="78" cy="26" rx="3" ry="13" fill="#ffc2d4" transform="rotate(-12 78 26)"/>
      <ellipse cx="90" cy="28" rx="7" ry="20" fill="#f6eef9" ${A(3)} transform="rotate(10 90 28)"/><circle cx="86" cy="56" r="17" fill="#f6eef9" ${A()}/>${yn(92,52)}<circle cx="102" cy="58" r="2.5" fill="#ff8fab"/>${to(90,63)}</g></svg>`;default:return`<svg viewBox="0 0 120 100">${nr([30,42,72,84],62,"#fff")}<path class="tail" d="M20 50 q-6 14 0 26" fill="none" ${A(3)}/>
      <rect x="18" y="38" width="80" height="34" rx="16" fill="#fff" ${A()}/><path d="M30 40 q10 8 4 20 q-10 -2 -10 -14 Z M60 42 q14 2 10 18 q-12 4 -14 -8 Z" fill="${Ve}"/><ellipse cx="60" cy="74" rx="8" ry="5" fill="#ffadc6" ${A(2)}/>
      <g class="head"><path d="M90 24 l-8 -8 M108 24 l8 -8" stroke="#f5d27a" stroke-width="5" stroke-linecap="round"/><rect x="86" y="22" width="26" height="30" rx="12" fill="#fff" ${A()}/>
      <ellipse cx="100" cy="52" rx="14" ry="10" fill="#ffc2d4" ${A(3)}/><circle cx="95" cy="52" r="1.8" fill="${Ve}"/><circle cx="105" cy="52" r="1.8" fill="${Ve}"/>${yn(94,34)}${yn(106,34)}
      <ellipse class="ear" cx="82" cy="30" rx="7" ry="4" fill="#fff" ${A(3)}/></g></svg>`}}const $t={x:2265,y:520,rx:110,ry:34},h9=476,Gr=[{name:"Chestnut",body:"#c97b45",mane:"#7a3f22",sock:"#fff6e6"},{name:"Snowy",body:"#fdf8f3",mane:"#d9cdc4",sock:"#e9ddd2"},{name:"Midnight",body:"#4a3f52",mane:"#2a2230",sock:"#6b5e74"},{name:"Sunny",body:"#f2c96b",mane:"#fff6e0",sock:"#fff6e0"},{name:"Rainbow Pony",body:"#fff0fa",mane:"rainbow",sock:"#ffd6ec"}];function Nf(e,t=!1){const n=Gr[e]??Gr[0],s=n.mane==="rainbow",o=s?rn.map((r,l)=>{const c=124-l*1.6,d=14+l*2.4;return`<path d="M${c.toFixed(1)} ${d.toFixed(1)} q-6.5 2 -4.5 ${6+l*.35}" fill="none" stroke="${r}" stroke-width="5.5" stroke-linecap="round"/>`}).join(""):`<path d="M106 20 q-14 6 -18 30 q8 -6 10 -2 q4 -12 14 -18 Z" fill="${n.mane}" ${A(3)}/>`,i=s?`<g class="tail">${rn.map((r,l)=>`<path d="M30 58 q-18 ${8+l*3} -14 ${36+l}" fill="none" stroke="${r}" stroke-width="6" stroke-linecap="round"/>`).join("")}</g>`:`<path class="tail" d="M30 56 q-20 10 -14 44 q10 -10 8 -20 q6 -10 10 -18 Z" fill="${n.mane}" ${A(3)}/>`,a=(r,l)=>`<g class="leg ${l}"><rect x="${r}" y="78" width="12" height="44" rx="5" fill="${n.body}" ${A(3)}/><rect x="${r}" y="110" width="12" height="12" rx="4" fill="${n.sock}" ${A(3)}/></g>`;return`<svg viewBox="0 0 160 130" class="horsesvg">${i}${a(40,"a")}${a(56,"b")}${a(96,"b")}${a(112,"a")}
    <ellipse cx="80" cy="68" rx="50" ry="24" fill="${n.body}" ${A()}/>
    ${t||s?`<path class="saddle" data-top="43" d="M64 46 q16 -6 32 0 l-2 22 q-14 4 -28 0 Z" fill="${s?"#b197fc":"#e8590c"}" ${A(3)}/>`:""}
    <g class="head"><path d="M108 66 L114 30 Q118 16 132 18 L148 36 Q152 46 142 48 L130 46 L128 70 Z" fill="${n.body}" ${A()}/>
    <path d="M114 22 l2 -14 l8 12 Z" fill="${n.body}" ${A(3)}/>${o}
    ${yn(130,30,3.4)}<circle cx="146" cy="42" r="2" fill="${Ve}"/>${to(136,40)}
    ${s?`<path d="M120 14 l4 -14 l4 14 Z" fill="#ffd43b" ${A(2)}/>`:""}</g>
    ${s?'<g fill="#fff" opacity=".9"><path d="M60 60 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z"/><path d="M92 74 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z"/></g>':""}</svg>`}const u9=`<svg viewBox="0 0 180 170"><path d="M10 70 L90 14 L170 70" fill="#ffa94d" ${A(5)}/>
  <rect x="24" y="66" width="132" height="84" rx="8" fill="#fff6e6" ${A()}/>${rn.map((e,t)=>`<rect x="${24+t*22}" y="66" width="22" height="10" fill="${e}"/>`).join("")}
  <rect x="24" y="66" width="132" height="10" fill="none" ${A(3)}/><circle cx="90" cy="108" r="22" fill="#5a3d5c"/>
  <path d="M60 150 l-12 16 M120 150 l12 16" ${A(5)}/>
  <g class="hen"><ellipse cx="90" cy="118" rx="20" ry="14" fill="#fff" ${A(3)}/><circle cx="104" cy="104" r="10" fill="#fff" ${A(3)}/><path d="M100 94 q3 -8 8 0" fill="#ff6b6b" ${A(2)}/>
  <path d="M113 104 l7 2 -7 3 Z" fill="#ffa94d" ${A(2)}/>${yn(106,102,2)}</g>
  <text x="90" y="54" text-anchor="middle" font-size="16" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">EGGS</text></svg>`,g9=`<svg viewBox="0 0 170 130"><rect x="80" y="30" width="54" height="50" rx="8" fill="#bde6f7" ${A()}/><rect x="74" y="24" width="66" height="10" rx="4" fill="#ff6b6b" ${A(3)}/>
  <rect x="20" y="62" width="130" height="34" rx="12" fill="#ff6b6b" ${A()}/><rect x="28" y="40" width="10" height="24" rx="3" fill="#868e96" ${A(3)}/>
  <circle cx="122" cy="98" r="28" fill="${Ve}"/><circle cx="122" cy="98" r="13" fill="#ffd43b" ${A(3)}/><circle cx="44" cy="106" r="18" fill="${Ve}"/><circle cx="44" cy="106" r="8" fill="#ffd43b" ${A(3)}/>
  <circle cx="26" cy="76" r="5" fill="#fff3b0" ${A(2)}/></svg>`,m9=`<svg viewBox="0 0 240 300"><rect x="104" y="160" width="32" height="140" rx="10" fill="#c99366" ${A()}/>
  <circle cx="120" cy="110" r="90" fill="#5cc985" ${A()}/><circle cx="62" cy="140" r="50" fill="#5cc985" ${A()}/><circle cx="180" cy="140" r="52" fill="#5cc985" ${A()}/>
  ${[[80,90],[150,70],[175,140],[100,150],[130,115],[60,140]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="11" fill="#ff6b6b" ${A(3)}/><path d="M${e} ${t-10} q2 -6 6 -7" fill="none" ${A(2)}/>`).join("")}</svg>`,iu=[[80,90],[150,70],[175,140],[100,150]],Dm=`<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="14" fill="#ff6b6b" ${A(3)}/><path d="M20 10 q2 -6 6 -7" fill="none" ${A(2.5)}/><ellipse cx="27" cy="8" rx="5" ry="3" fill="#5cc985" ${A(2)}/><circle cx="14" cy="18" r="3" fill="#fff" opacity=".6"/></svg>`,Vl=`<svg viewBox="0 0 40 40"><path d="M12 14 L32 10 L16 36 Z" fill="#ff922b" ${A(3)}/><path d="M18 18 l5 -1 M17 24 l4 -1" ${A(2)}/><path d="M30 10 q4 -8 8 -6 M30 10 q-2 -8 2 -10 M30 10 q6 -2 8 2" fill="none" stroke="#40c057" stroke-width="4" stroke-linecap="round"/></svg>`,y9=`<svg viewBox="0 0 40 40"><path d="M6 34 Q20 4 34 34 Z" fill="#f5d27a" ${A(3)}/><path d="M14 30 L18 14 M20 32 V10 M26 30 L22 14" stroke="#d9a93f" stroke-width="2.5" stroke-linecap="round"/></svg>`,ua=`<svg viewBox="0 0 40 40"><path d="M20 4 C30 4 34 20 34 26 C34 34 28 38 20 38 C12 38 6 34 6 26 C6 20 10 4 20 4 Z" fill="#fff6e6" ${A(3)}/><circle cx="15" cy="16" r="3" fill="#fff"/></svg>`,qf=(e="#ff8fab")=>`<svg viewBox="0 0 40 40"><path d="M20 38 V20" stroke="#40c057" stroke-width="4" stroke-linecap="round"/>${[0,72,144,216,288].map(t=>`<circle cx="${20+Math.cos(t*Math.PI/180)*8}" cy="${14+Math.sin(t*Math.PI/180)*8}" r="7" fill="${e}" ${A(2.5)}/>`).join("")}<circle cx="20" cy="14" r="5" fill="#ffd43b" ${A(2)}/></svg>`,Hm={carrot:Vl,apple:Dm,hay:y9},w9=e=>`<svg viewBox="0 0 80 90"><g transform="translate(14 0) scale(1.3)">${Hm[e].replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g>
  <path d="M10 40 H70 L62 86 H18 Z" fill="${e==="carrot"?"#74c0fc":e==="apple"?"#ffa8c5":"#b2f2bb"}" ${A(4)}/><path d="M12 52 H68" stroke="#fff" stroke-width="4" opacity=".6"/></svg>`,b9=`<svg viewBox="0 0 60 50"><path d="M12 22 Q30 -6 48 22" fill="none" stroke="${Ve}" stroke-width="7" stroke-linecap="round"/><path d="M12 22 Q30 -6 48 22" fill="none" stroke="#e0a96d" stroke-width="3" stroke-linecap="round"/>
  <path d="M4 22 H56 L50 46 H10 Z" fill="#e0a96d" ${A(3.5)}/><path d="M12 30 H48 M14 38 H46" stroke="#b5793d" stroke-width="3"/></svg>`,au=["#ff8fab","#c9a0dc","#ffd43b","#74c0fc","#ff922b"];function Wm(e,t,n){const s=`<ellipse cx="35" cy="76" rx="30" ry="11" fill="${e?.wet?"#7a4b2e":"#9c6b46"}" ${A(3)}/>`;if(!e)return`<svg viewBox="0 0 70 90">${s}<path d="M20 74 q4 -3 8 0 M36 78 q4 -3 8 0" stroke="#b5875f" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;const o=au[n%au.length];let i="";t===0&&(i=`<circle cx="27" cy="72" r="3" fill="#f2dcb8" ${A(1.5)}/><circle cx="36" cy="75" r="3" fill="#f2dcb8" ${A(1.5)}/><circle cx="44" cy="71" r="3" fill="#f2dcb8" ${A(1.5)}/>`),t===1&&(i=`<path d="M35 72 V58" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="29" cy="57" rx="7" ry="4" fill="#69db7c" ${A(2)}/><ellipse cx="41" cy="55" rx="7" ry="4" fill="#69db7c" ${A(2)}/>`),t===2&&(i=`<path d="M35 72 V40 M35 60 Q22 54 20 42 M35 56 Q48 50 50 38" stroke="#40c057" stroke-width="4" fill="none" stroke-linecap="round"/>${e.seed==="flower"?`<circle cx="35" cy="38" r="7" fill="#b2f2bb" ${A(2)}/>`:""}`),t===3&&(i=e.seed==="carrot"?`<path d="M26 74 L44 72 L35 86 Z" fill="#ff922b" ${A(2.5)}/><path d="M35 72 Q24 50 22 38 M35 72 Q36 48 36 34 M35 72 Q46 50 50 40" stroke="#40c057" stroke-width="5" fill="none" stroke-linecap="round"/>`:`<path d="M35 72 V34" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="54" rx="8" ry="4" fill="#69db7c" ${A(2)}/>${[0,72,144,216,288].map(l=>`<circle cx="${35+Math.cos(l*Math.PI/180)*10}" cy="${28+Math.sin(l*Math.PI/180)*10}" r="8" fill="${o}" ${A(2.5)}/>`).join("")}<circle cx="35" cy="28" r="6" fill="#ffd43b" ${A(2)}/>`);const a=e.wet?"":`<g class="needWater"><path d="M56 18 q6 10 0 14 q-6 -4 0 -14 Z" fill="#74c0fc" ${A(2)}/></g>`,r=t===3?`<g class="ready"><path d="M58 20 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#ffd43b" ${A(1.5)}/></g>`:"";return`<svg viewBox="0 0 70 90">${s}${i}${a}${r}</svg>`}const v9=`<svg viewBox="0 0 48 48">${rn.map((e,t)=>`<path d="M${6+t*2.6} 38 A${18-t*2.6} ${18-t*2.6} 0 0 1 ${42-t*2.6} 38" fill="none" stroke="${e}" stroke-width="3"/>`).join("")}<path d="M4 38 H44" ${A(3)}/></svg>`,k9=`<svg viewBox="0 0 48 48"><path d="M10 34 Q24 22 38 34" fill="none" ${A(4)}/><path d="M24 30 V8 M16 16 L24 8 L32 16" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40 H40" ${A(4)}/></svg>`,_9=`<svg viewBox="0 0 200 320"><path d="M70 310 L84 120 H116 L130 310 Z" fill="#fff6e6" ${A(4)}/><path d="M78 200 H122 M74 260 H126" ${A(3)}/><rect x="88" y="262" width="24" height="48" rx="10" fill="#b197fc" ${A(3)}/>
  <path d="M78 124 L100 92 L122 124 Z" fill="#ff8fab" ${A(4)}/>
  <g class="sails" style="transform-origin:100px 110px">${[0,90,180,270].map(e=>`<g transform="rotate(${e} 100 110)"><path d="M100 110 L104 30 L126 30 L118 104 Z" fill="${["#ffd43b","#74c0fc","#ff8fab","#69db7c"][e/90]}" ${A(3)}/><path d="M108 40 H122 M107 58 H121 M106 76 H120" ${A(2)}/></g>`).join("")}<circle cx="100" cy="110" r="10" fill="#ffa94d" ${A(3)}/></g></svg>`,$9=["GOAT","SHEEP","PIGLET","CHICKS","BUNNY","COW"],x9=e=>`<g class="lantern" style="transform-origin:${e}px 146px"><path d="M${e} 146 V178" ${A(3)}/><circle cx="${e}" cy="204" r="34" fill="#fff3b0" opacity=".45"/>
  <path d="M${e-14} 182 H${e+14} L${e+11} 226 H${e-11} Z" fill="#ffe066" ${A(3)}/><rect x="${e-17}" y="176" width="34" height="8" rx="3" fill="#495057" ${A(2.5)}/><rect x="${e-15}" y="224" width="30" height="7" rx="3" fill="#495057" ${A(2.5)}/><ellipse cx="${e}" cy="205" rx="5" ry="9" fill="#ff922b"/></g>`;function M9(){const e=rf,t=Array.from({length:Math.ceil(e/64)},(o,i)=>`<path d="M${i*64} 146 V440" stroke="#d4895f" stroke-width="3"/>`).join(""),n=Array.from({length:Math.ceil(e/46)},(o,i)=>{const a=i*46,r=160+Math.sin(i/3.1)*8;return`<path d="M${a} ${r} L${a+40} ${r} L${a+20} ${r+30} Z" fill="${rn[i%6]}" ${A(2.5)}/>`}).join(""),s=lf.map((o,i)=>`<g><rect x="${o-96}" y="318" width="192" height="122" rx="6" fill="#f0c49a" ${A(4)}/>
    <path d="M${o-96} 350 H${o+96} M${o-96} 384 H${o+96} M${o-96} 412 H${o+96}" stroke="#d9a074" stroke-width="3"/><path d="M${o-96} 318 L${o+96} 440 M${o+96} 318 L${o-96} 440" stroke="#e0aa7e" stroke-width="7" opacity=".7"/>
    <rect x="${o-54}" y="284" width="108" height="30" rx="10" fill="#fff6e6" ${A(3)}/><text x="${o}" y="305" text-anchor="middle" font-size="17" font-weight="900" fill="${Ve}" font-family="Nunito, system-ui, sans-serif">${$9[i]}</text></g>`).join("");return`<svg class="parkScene ranchScene barnScene" viewBox="0 0 ${e} ${Aa}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="440" fill="#e8a87c"/>${t}
  <!-- hay loft -->
  <rect width="${e}" height="128" fill="#c98a5e"/>${Array.from({length:Math.ceil(e/64)},(o,i)=>`<path d="M${i*64+32} 0 V128" stroke="#b5764d" stroke-width="3"/>`).join("")}
  ${[120,260,420,980,1130,1290,1640,1790].map((o,i)=>Bn(o,126,i%3===1?.72:.85)).join("")}${[190,1060,1720].map(o=>Bn(o,82,.7)).join("")}
  <rect x="0" y="126" width="${e}" height="24" fill="#a8653a" ${A(4)}/>
  ${[0,1,2,3,4,5,6].map(o=>`<path d="M${120+o*280} 150 L${180+o*280} 210" stroke="#a8653a" stroke-width="12" stroke-linecap="round"/><path d="M${120+o*280} 150 L${180+o*280} 210" ${A(2)}/>`).join("")}
  <!-- ladder up to the loft -->
  <g transform="translate(1840 0)"><path d="M-22 150 L-30 440 M22 150 L30 440" stroke="#c99366" stroke-width="10" stroke-linecap="round"/>${[190,240,290,340,390].map(o=>`<path d="M${-22-(o-150)*.028} ${o} H${22+(o-150)*.028}" stroke="#c99366" stroke-width="8" stroke-linecap="round"/>`).join("")}</g>
  <!-- rainbow bunting + big rainbow banner -->
  <path d="M0 160 Q${e/2} 176 ${e} 160" fill="none" ${A(2)}/>${n}
  <g transform="translate(${e/2+60} 236)">${rn.map((o,i)=>`<rect x="${-180+i*60}" y="-26" width="60" height="44" fill="${o}"/>`).join("")}<rect x="-180" y="-26" width="360" height="44" rx="4" fill="none" ${A(4)}/>
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
  ${Bn(1790,590,.8)}${Bn(1700,600,.65)}
  ${[290,660,1330,1590].map(x9).join("")}
  </svg>`}const Jo=600,Ft="#5a3d5c",ce=(e=4)=>`stroke="${Ft}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function Ra(e){const t=po[e].seats,n=t<=2?140:t===4?110:100,s=(t-1)/2;return Array.from({length:t},(o,i)=>({x:po[e].x+(i-s)*n,y:558-Math.abs(i-s)*8}))}const ru=["#ff7eb3","#ffd43b","#66d9e8","#d0bfff","#fff"],Jt=(e,t,n=1,s="#fff")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -9 L2.2 -2.4 L9 -2.2 L3.4 2.2 L5.4 9 L0 4.6 L-5.4 9 L-3.4 2.2 L-9 -2.2 L-2.2 -2.4 Z" fill="${s}" stroke="${Ft}" stroke-width="1.2" stroke-linejoin="round"/>`;function Id(e,t,n,s){const o=`<path d="M36 ${t} Q ${e/2} ${t+n+8} ${e-36} ${t}" fill="none" stroke="${Ft}" stroke-width="3"/>`,i=Array.from({length:s},(a,r)=>{const l=s===1?.5:r/(s-1),c=48+l*(e-96),d=t+Math.sin(l*Math.PI)*n,f=ru[r%ru.length];return`<g class="bulb" style="animation-delay:-${r%8*.22}s"><line x1="${c}" y1="${d-16}" x2="${c}" y2="${d-6}" stroke="${Ft}" stroke-width="2"/><circle cx="${c}" cy="${d}" r="7.5" fill="${f}" ${ce(2)}/><circle cx="${c-2}" cy="${d-2}" r="2.2" fill="#fff" opacity=".85"/></g>`}).join("");return o+i}const xi=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">
  <ellipse cx="0" cy="22" rx="42" ry="12" fill="#000" opacity=".12"/>
  <path d="M-40 10 Q-48 -22 -10 -28 Q10 -46 34 -18 Q50 2 34 18 Q8 32 -24 20 Q-42 16 -40 10 Z" fill="${n}" ${ce(3)}/>
  <path d="M-18 -6 Q-4 -20 14 -4" fill="none" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/>
  <circle cx="16" cy="6" r="4" fill="#fff" opacity=".35"/>
</g>`,lu=(e,t,n)=>`<g transform="translate(${e} ${t})">
  <ellipse cx="0" cy="16" rx="28" ry="9" fill="#000" opacity=".12"/>
  <ellipse cx="0" cy="4" rx="30" ry="20" fill="${n}" ${ce(3)}/>
  <ellipse cx="-6" cy="-2" rx="12" ry="7" fill="#fff" opacity=".35"/>
  <path d="M0 -16 V-28" ${ce(3)}/><circle cy="-32" r="6" fill="#ffd43b" ${ce(2)}/>
</g>`;function Mi(e,t,n,s,o,i=""){return`<g class="photoFrame${i}" transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-40" y="-52" width="80" height="104" rx="6" fill="#fff" ${ce(3.5)}/>
    <rect x="-32" y="-44" width="64" height="72" rx="4" fill="${s}"/>
    ${o}
    <rect x="-10" y="-58" width="20" height="10" rx="2" fill="#ffe8a3" opacity=".85" transform="rotate(-8)"/>
  </g>`}function sr(e,t,n,s,o){return`<g transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-28" y="-34" width="56" height="68" rx="3" fill="#fff" ${ce(3)}/>
    <rect x="-22" y="-28" width="44" height="40" fill="${s}"/>
    ${o}
  </g>`}function or(e,t,n,s){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="36" rx="26" ry="8" fill="#000" opacity=".12"/>
    <path d="M-18 36 L-12 -2 H12 L18 36 Z" fill="${n}" ${ce(3)}/>
    <ellipse cx="0" cy="0" rx="16" ry="6" fill="#c9a27a" ${ce(2)}/>
    <ellipse cx="-16" cy="-16" rx="16" ry="22" fill="${s}" ${ce(3)} transform="rotate(-18)"/>
    <ellipse cx="16" cy="-18" rx="16" ry="22" fill="${s}" ${ce(3)} transform="rotate(16)"/>
    <ellipse cx="0" cy="-28" rx="14" ry="20" fill="${s}" ${ce(3)}/>
    <circle cx="0" cy="-36" r="6" fill="#ff8ec8" ${ce(2)}/>
  </g>`}function L9(e,t){return`<g transform="translate(${e} ${t})">
    <ellipse cx="28" cy="118" rx="32" ry="8" fill="#000" opacity=".12"/>
    <rect width="56" height="118" rx="10" fill="#e7fbff" ${ce()}/>
    <rect y="52" width="56" height="8" fill="#d0f4ff" ${ce(2)}/>
    <rect x="44" y="18" width="6" height="22" rx="3" fill="#ffd43b" ${ce(2)}/>
    <rect x="44" y="70" width="6" height="28" rx="3" fill="#ffd43b" ${ce(2)}/>
    <rect x="8" y="12" width="28" height="22" rx="4" fill="#fff" ${ce(2)}/>
    <circle cx="16" cy="22" r="4" fill="#ff8ec8"/><circle cx="28" cy="24" r="3" fill="#ffd43b"/>
    <path d="M18 78 C14 72 8 74 12 82 C15 88 18 90 18 90 C18 90 21 88 24 82 C28 74 22 72 18 78 Z" fill="#ff4d94" ${ce(1.5)}/>
  </g>`}function E9(e,t,n){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="6" rx="34" ry="9" fill="#000" opacity=".1"/>
    <path d="M-46 -16 C-50 -86 -26 -108 0 -110 C26 -108 50 -86 46 -16 Z" fill="#fff6fb" ${ce()}/>
    <path d="M-32 -20 C-34 -74 -16 -90 0 -92 C16 -90 34 -74 32 -20 Z" fill="${n}"/>
    <ellipse cx="0" cy="-10" rx="40" ry="16" fill="${n}" ${ce()}/>
    <ellipse cx="-8" cy="-16" rx="14" ry="6" fill="#fff" opacity=".4"/>
    <path d="M-22 -2 L-26 16 M22 -2 L26 16" fill="none" stroke="${Ft}" stroke-width="4" stroke-linecap="round"/>
  </g>`}function S9(e){const t=po[e],n=t.game==="four"?"Four":"Slay",s=t.game==="four"?"#7ad7ea":e===0?"#ff8ec8":"#e0b0ff",o=t.game==="four"?"#b8f2ff":e===0?"#ffd0e6":"#ead9ff",i=t.seats>=6?250:t.seats>=4?200:150;return`${Ra(e).map(r=>E9(r.x,r.y,o)).join("")}
  <g transform="translate(${t.x} 500)">
    <ellipse cx="0" cy="28" rx="${i+18}" ry="20" fill="#000" opacity=".1"/>
    <rect x="-18" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ce(3)}/>
    <rect x="4" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ce(3)}/>
    <ellipse cx="0" cy="-4" rx="${i}" ry="30" fill="${s}" stroke="#ffd43b" stroke-width="6"/>
    <ellipse cx="0" cy="-4" rx="${i-16}" ry="18" fill="none" stroke="#fff" stroke-width="3" opacity=".45"/>
    <ellipse cx="${-i*.25}" cy="-12" rx="${i*.35}" ry="8" fill="#fff" opacity=".28"/>
    <text x="0" y="4" text-anchor="middle" font-size="22" font-weight="900" fill="#fff" stroke="${Ft}" stroke-width="4" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${n}</text>
  </g>`}const Li=(e,t,n=1,s="#ff4d94")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 4 C-6 -4 -14 -2 -10 6 C-7 12 0 16 0 16 C0 16 7 12 10 6 C14 -2 6 -4 0 4 Z" fill="${s}" stroke="${Ft}" stroke-width="1.6" stroke-linejoin="round"/>`;function cu(e,t){const n=xa,s=Math.max(1,Math.ceil(t));let o="";if(e==="top"){o=`<rect width="${n}" height="${s}" fill="#ffe0f2"/>`;for(let i=s-70,a=0;i>24;i-=150,a++)o+=Id(n,i,a%2?22:16,a%2?26:20);for(let i=0;i<14;i++){const a=90+i*397%(n-180),r=20+i*131%Math.max(20,s-70);o+=Jt(a,r,.55+i%3*.2,i%2?"#fff":"#ffd43b")}}else{o=`<defs><linearGradient id="grFloorExt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e089ab"/><stop offset="1" stop-color="#d27399"/></linearGradient></defs>
  <rect width="${n}" height="${s}" fill="url(#grFloorExt)"/>`;for(let i=46;i<s;i+=64)o+=`<rect y="${i}" width="${n}" height="3" fill="#fff" opacity=".18"/>`}return`<svg class="grExt grExt-${e}" viewBox="0 0 ${n} ${s}" preserveAspectRatio="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${o}</svg>`}function T9(){const e=xa,t=[[120,200],[260,250],[640,210],[900,250],[1180,190],[1560,230],[1860,180],[2100,240],[2420,200],[2520,280]];return`<svg class="grScene" viewBox="0 0 ${e} ${Jo}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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
  <rect width="${e}" height="${Jo}" fill="url(#grWall)"/>
  <rect y="390" width="${e}" height="80" fill="#fff6fb" opacity=".45"/>
  ${Array.from({length:8},(n,s)=>`<rect x="${40+s*330}" y="400" width="280" height="62" rx="8" fill="none" stroke="#fff" stroke-width="3" opacity=".55"/>`).join("")}
  <rect y="468" width="${e}" height="132" fill="url(#grFloor)"/>
  <rect y="464" width="${e}" height="12" fill="#ffd43b" ${ce(3)}/>
  ${[720,1500,2150].map((n,s)=>`<ellipse cx="${n}" cy="548" rx="${s===1?210:280}" ry="42" fill="${s===1?"#d8f6ff":s===0?"#ffe0f0":"#f3e8ff"}" stroke="#fff" stroke-width="4" opacity=".8"/>`).join("")}
  ${Id(e,28,22,28)}
  ${Id(e,78,16,18)}
  ${t.map(([n,s],o)=>Jt(n,s,.7+o%3*.28,o%2?"#fff":"#ffd43b")).join("")}

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

  ${Mi(500,340,-6,"#ffe0f0",`${Li(0,8,1.4)}${Jt(-18,-16,.7,"#ffd43b")}${Jt(18,-10,.55,"#66d9e8")}`," frameAtHead")}
  ${Mi(270,196,-8,"#ffe0f0",`${Li(0,8,1.4)}${Jt(-18,-16,.7,"#ffd43b")}${Jt(18,-10,.55,"#66d9e8")}`," framePhone")}
  ${Mi(980,240,5,"#e7fbff",`<ellipse cx="0" cy="6" rx="16" ry="12" fill="#fff" ${ce(2)}/><path d="M-6 6 Q0 -8 6 6" fill="none" stroke="${Ft}" stroke-width="2"/><path d="M0 18 V28 M-12 24 H12" ${ce(2)}/>`)}
  ${Mi(1680,255,-4,"#fff3c4",`${Jt(0,2,1.5,"#ffd43b")}`)}
  ${Mi(2360,245,6,"#f3e8ff",`${Li(0,4,1.3,"#d0bfff")}`)}
  ${sr(400,300,8,"#fff0f6",Li(0,-4,1.1))}
  ${sr(820,310,-7,"#e7fbff",Jt(0,-6,1,"#66d9e8"))}
  ${sr(1900,300,9,"#fff6e6",Jt(0,-6,1,"#ffd43b"))}
  ${sr(2280,320,-8,"#ffe0f0",Li(0,-4,1))}

  <g class="disco" transform="translate(1288 36)">
    <line y1="0" y2="22" stroke="${Ft}" stroke-width="3"/>
    <circle cy="44" r="26" fill="url(#disco)" ${ce(3)}/>
    <path d="M-14 36 L0 56 L14 36 M-8 48 H8" fill="none" stroke="#fff" stroke-width="2.5"/>
    ${Jt(-30,20,.45)}${Jt(32,28,.4,"#ffd43b")}
  </g>

  <g transform="translate(86 292)">
    <rect width="78" height="168" rx="12" fill="#ff8ec8" ${ce()}/>
    <rect x="8" y="10" width="62" height="36" rx="8" fill="#fff6e6" ${ce(2)}/>
    <text x="39" y="34" text-anchor="middle" font-size="16" font-weight="900" fill="${Ft}" font-family="Nunito, ui-rounded, system-ui, sans-serif">MAP</text>
    <circle cx="62" cy="96" r="5" fill="#ffd43b" ${ce(2)}/>
    <rect x="22" y="118" width="34" height="8" rx="3" fill="#fff" opacity=".45"/>
  </g>

  ${or(40,400,"#ffd43b","#8ce99a")}
  ${or(1080,392,"#ff8ec8","#69db7c")}
  ${or(1600,400,"#d0bfff","#8ce99a")}
  ${or(2520,396,"#66d9e8","#69db7c")}
  ${L9(200,348)}
  <g transform="translate(2420 360)">
    <rect width="130" height="100" rx="14" fill="#fff6fb" ${ce()}/>
    <rect y="28" width="130" height="10" fill="#ffd0e6" ${ce(2)}/>
    <circle cx="28" cy="64" r="12" fill="#ffd43b" ${ce(2)}/><circle cx="64" cy="66" r="10" fill="#ff8ec8" ${ce(2)}/><rect x="86" y="52" width="28" height="22" rx="6" fill="#66d9e8" ${ce(2)}/>
    <text x="65" y="20" text-anchor="middle" font-size="13" font-weight="900" fill="${Ft}" font-family="Nunito, ui-rounded, system-ui, sans-serif">SNACKS</text>
  </g>

  ${xi(330,455,"#ff8ec8",1.05)}
  ${xi(1120,468,"#d0bfff")}
  ${xi(1360,470,"#8ce4f2",.9)}
  ${xi(1780,462,"#ffd43b")}
  ${lu(1480,500,"#ffb3d9")}
  ${lu(2e3,505,"#c9b3ff")}
  ${xi(2550,468,"#ff8ec8",.85)}

  ${po.map((n,s)=>S9(s)).join("")}
  </svg>`}const P9=`<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="10" fill="#2b1430" stroke="${Ft}" stroke-width="3"/><path d="M24 32 C16 26 12 22 14 17 C16 13 21 14 24 18 C27 14 32 13 34 17 C36 22 32 26 24 32 Z" fill="#ff4d94" stroke="#ffd0ea" stroke-width="1.5"/><circle cx="10" cy="8" r="2.2" fill="#ffd43b"/><circle cx="24" cy="5" r="2.2" fill="#66d9e8"/><circle cx="38" cy="8" r="2.2" fill="#d0bfff"/></svg>`,j="#5a3d5c",A9=`<svg viewBox="0 0 120 100"><rect x="0" y="62" width="120" height="38" rx="14" fill="#9fe0aa" stroke="${j}" stroke-width="3"/>
  <path d="M18 70 L30 22 L42 70 M78 70 L90 22 L102 70" fill="none" stroke="#8ecae6" stroke-width="5" stroke-linecap="round"/><path d="M26 22 H94" stroke="#ff8fab" stroke-width="7" stroke-linecap="round"/>
  <path d="M50 22 V54 M66 22 V54" stroke="${j}" stroke-width="2.5"/><rect x="45" y="52" width="26" height="7" rx="3" fill="#ff9f68" stroke="${j}" stroke-width="2.5"/>
  <circle cx="104" cy="14" r="9" fill="#ffd166" stroke="${j}" stroke-width="3"/></svg>`,Vm=`<svg viewBox="0 0 120 100"><path d="M20 50 L60 16 L100 50" fill="#ff8fab" stroke="${j}" stroke-width="4" stroke-linejoin="round"/><rect x="28" y="48" width="64" height="44" rx="6" fill="#fff6e6" stroke="${j}" stroke-width="4"/>
  <rect x="52" y="64" width="16" height="28" rx="4" fill="#c9a0dc" stroke="${j}" stroke-width="3"/><rect x="34" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${j}" stroke-width="3"/><rect x="73" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${j}" stroke-width="3"/></svg>`,jf=`<svg viewBox="0 0 120 100"><path d="M40 18 L24 28 L14 46 L30 52 L34 44 V88 H86 V44 L90 52 L106 46 L96 28 L80 18 Q60 34 40 18 Z" fill="#8ecae6" stroke="${j}" stroke-width="4" stroke-linejoin="round"/><circle cx="60" cy="58" r="7" fill="#fff3b0" stroke="${j}" stroke-width="3"/></svg>`,ve=e=>`<div class="wnArt">${e}</div>`,Um=`<svg viewBox="0 0 120 100"><rect x="16" y="58" width="74" height="24" rx="10" fill="#fff" stroke="${j}" stroke-width="4"/><circle cx="32" cy="70" r="7" fill="#ff8fab" stroke="${j}" stroke-width="3"/><circle cx="52" cy="70" r="7" fill="#ffe066" stroke="${j}" stroke-width="3"/><circle cx="72" cy="70" r="7" fill="#8ecae6" stroke="${j}" stroke-width="3"/><path d="M86 46 l14 -16 8 8 -14 16z" fill="#ffd166" stroke="${j}" stroke-width="3" stroke-linejoin="round"/><rect x="78" y="44" width="12" height="24" rx="4" fill="#c9a0dc" stroke="${j}" stroke-width="3"/></svg>`,R9=`<svg viewBox="0 0 120 100">${rn.map((e,t)=>`<path d="M${12+t*6} 84 A${48-t*6} ${48-t*6} 0 0 1 ${108-t*6} 84" fill="none" stroke="${e}" stroke-width="6"/>`).join("")}
  <path d="M38 92 V62 L60 44 L82 62 V92 Z" fill="#ef5b5b" stroke="${j}" stroke-width="3.5" stroke-linejoin="round"/><rect x="52" y="70" width="16" height="22" fill="#fff6e6" stroke="${j}" stroke-width="3"/></svg>`,C9=`<svg viewBox="0 0 120 100"><g transform="translate(22 8) scale(1.9)">${ua.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g><g transform="translate(52 22) scale(1.4)">${ua.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g></svg>`,Qm=(e,t,n,s)=>`<g transform="translate(${t} ${n}) scale(${s})">${e.replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}</g>`,I9=`<svg viewBox="0 0 120 100"><circle cx="60" cy="50" r="40" fill="#fff" stroke="${j}" stroke-width="4"/>${Qm(nf(xt({skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6"})).replace('viewBox="14 2 72 74"','viewBox="0 0 100 160"'),26,12,.68)}<circle cx="60" cy="50" r="40" fill="none" stroke="#ff6b9a" stroke-width="5"/></svg>`,O9=`<svg viewBox="0 0 120 100"><rect x="8" y="28" width="104" height="64" rx="16" fill="#fff0f6" stroke="${j}" stroke-width="4"/><path d="M8 40 L60 12 L112 40" fill="#ff6b9a" stroke="${j}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M60 58 C52 48 40 50 46 60 C50 68 60 74 60 74 C60 74 70 68 74 60 C80 50 68 48 60 58 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  ${[18,34,50,66,82,98].map((e,t)=>`<circle cx="${e}" cy="24" r="4" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" stroke="${j}" stroke-width="1.5"/>`).join("")}</svg>`,B9=`<svg viewBox="0 0 120 100"><rect x="28" y="8" width="64" height="84" rx="12" fill="#fff" stroke="${j}" stroke-width="4"/><rect x="28" y="8" width="64" height="84" rx="12" fill="none" stroke="#ff7eb3" stroke-width="6"/><path d="M48 36 L54 24 L60 34 L68 20 L76 34 L82 24 L88 36 Z" fill="#ffd43b" stroke="${j}" stroke-width="2" stroke-linejoin="round"/><text x="60" y="78" text-anchor="middle" font-size="22" font-weight="900" fill="#ff4d94" font-family="Nunito, ui-rounded, system-ui, sans-serif">SLAY</text></svg>`,z9=`<svg viewBox="0 0 120 100"><rect x="10" y="16" width="100" height="72" rx="14" fill="#fff6fb" stroke="${j}" stroke-width="4"/>
  <path d="M36 58 C28 48 18 50 24 60 C28 68 36 74 36 74 C36 74 44 68 48 60 C54 50 44 48 36 58 Z" fill="#ff4d94" stroke="${j}" stroke-width="2"/>
  <path d="M78 28 L82 40 H94 L84 48 L88 60 L78 52 L68 60 L72 48 L62 40 H74 Z" fill="#66d9e8" stroke="${j}" stroke-width="2"/></svg>`,Nm=`<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="22" rx="6" fill="#fff" stroke="${j}" stroke-width="3"/><path d="M6 26 H42 M14 18 V40 M22 18 V40 M30 18 V40 M36 18 V40" stroke="${j}" stroke-width="2.4"/><rect x="4" y="12" width="40" height="8" rx="4" fill="#9ad7f5" stroke="${j}" stroke-width="3"/><ellipse cx="20" cy="32" rx="5" ry="3" fill="#ffe0ec"/><ellipse cx="30" cy="32" rx="5" ry="3" fill="#c9e7ff"/></svg>`,D9=`<svg viewBox="0 0 120 100"><ellipse cx="60" cy="72" rx="50" ry="20" fill="#ffc2d4" stroke="${j}" stroke-width="4"/><ellipse cx="60" cy="72" rx="32" ry="11" fill="#fff" stroke="${j}" stroke-width="3"/><path d="M60 58 C50 46 36 48 42 60 C48 70 60 78 60 78 C60 78 72 70 78 60 C84 48 70 46 60 58 Z" fill="#ff4d94" stroke="${j}" stroke-width="3"/><path d="M22 40 Q28 28 36 36" fill="none" stroke="#7dce8a" stroke-width="4" stroke-linecap="round"/><circle cx="22" cy="38" r="5" fill="#ffd166" stroke="${j}" stroke-width="2"/></svg>`,H9=`<svg viewBox="0 0 120 100"><path d="M16 50 L60 14 L104 50" fill="#ff8fab" stroke="${j}" stroke-width="4" stroke-linejoin="round"/><rect x="26" y="48" width="68" height="40" rx="10" fill="#fff6ea" stroke="${j}" stroke-width="4"/><path d="M42 88 V60 Q60 44 78 60 V88" fill="#ffe8c7" stroke="${j}" stroke-width="3"/><circle cx="82" cy="64" r="7" fill="#bde0fe" stroke="${j}" stroke-width="3"/><circle cx="80" cy="62" r="2" fill="#fff"/></svg>`,W9=`<svg viewBox="0 0 120 100"><rect x="28" y="38" width="64" height="42" rx="8" fill="#8ecae6" stroke="${j}" stroke-width="4"/><path d="M28 44 L60 68 L92 44" fill="none" stroke="${j}" stroke-width="4"/><path d="M76 30 V16" stroke="${j}" stroke-width="4" stroke-linecap="round"/><path d="M76 16 H96 L90 23 L96 30 H76 Z" fill="#ff6b6b" stroke="${j}" stroke-width="3"/></svg>`,V9=`<svg viewBox="0 0 120 100"><rect x="8" y="32" width="48" height="40" rx="14" fill="#fff3b0" stroke="${j}" stroke-width="4"/><rect x="64" y="32" width="48" height="40" rx="14" fill="#fff" stroke="${j}" stroke-width="4"/><path d="M26 44 L40 52 L26 60 Z" fill="${j}"/><circle cx="88" cy="52" r="6" fill="#ff8fab" stroke="${j}" stroke-width="3"/></svg>`,U9=`<svg viewBox="0 0 120 100"><rect x="16" y="18" width="36" height="58" rx="6" fill="#fff" stroke="${j}" stroke-width="4"/><rect x="62" y="24" width="42" height="52" rx="6" fill="#e7f6ff" stroke="${j}" stroke-width="4"/><circle cx="34" cy="66" r="2.4" fill="${j}"/><circle cx="83" cy="66" r="2.4" fill="${j}"/></svg>`,qm=`<svg viewBox="0 0 120 100"><rect x="28" y="16" width="64" height="72" rx="16" fill="#fff" stroke="${j}" stroke-width="4"/><path d="M40 36 H80 M40 52 H80 M40 68 H80" fill="none" stroke="${j}" stroke-width="5" stroke-linecap="round"/><circle cx="92" cy="24" r="12" fill="#ff6b9a" stroke="${j}" stroke-width="3"/><text x="92" y="29" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" font-family="Nunito, ui-rounded, system-ui, sans-serif">1</text></svg>`,Q9=`<svg viewBox="0 0 120 100"><rect x="6" y="10" width="108" height="80" rx="18" fill="#2a2158" stroke="${j}" stroke-width="4"/><circle cx="34" cy="42" r="14" fill="#ffd166" stroke="${j}" stroke-width="3"/><path d="M78 28 a16 16 0 1 0 0 32 a12 12 0 1 1 0 -32z" fill="#fff6e4" stroke="${j}" stroke-width="3"/><circle cx="92" cy="30" r="2" fill="#fff"/><circle cx="70" cy="24" r="1.6" fill="#fff"/><circle cx="100" cy="48" r="1.6" fill="#fff"/></svg>`,N9=`<svg viewBox="0 0 120 100"><circle cx="60" cy="52" r="34" fill="#fff6e4" stroke="${j}" stroke-width="4"/><path d="M60 52 V32 M60 52 L76 60" stroke="${j}" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="52" r="3" fill="${j}"/><path d="M28 22 l4 6 M92 22 l-4 6" stroke="#ffb15c" stroke-width="4" stroke-linecap="round"/></svg>`,jm=`<svg viewBox="0 0 120 100"><path d="M60 18 L72 46 H96 L78 62 L84 90 L60 74 L36 90 L42 62 L24 46 H48 Z" fill="#ffd166" stroke="${j}" stroke-width="4" stroke-linejoin="round"/><path d="M60 48 L28 92 H92 Z" fill="#2f6b4f" stroke="${j}" stroke-width="4" stroke-linejoin="round"/><rect x="52" y="88" width="16" height="8" rx="2" fill="#c44558" stroke="${j}" stroke-width="3"/></svg>`,Fm=[{v:10,title:"Winter Cheer!",lines:[{art:ve(jm),text:"The <b>Winter Cheer</b> pack is in your drawer!"}]},{v:9,title:"Everything's tidied into the Menu!",lines:[{art:ve(qm),text:"Everything's tidied into the <b>Menu</b>!"},{art:ve(Q9),text:"The world follows the <b>clock</b>: morning, day, golden evening, and night."},{art:ve(N9),text:"Tap the <b>sun</b> and the <b>moon</b>. <b>Auto</b> follows the clock."}]},{v:8,title:"Make your look!",lines:[{art:ve(W9),text:"Leave a <b>letter</b> in a friend's mailbox!"},{art:ve(V9),text:"Tap <b>Play</b> or <b>Decorate</b>!"},{art:ve(jf),text:"<b>Make your look!</b> New hair, clothes, and colors."},{art:ve(U9),text:"Update every iPad to see the <b>new outfits</b>!"}]},{v:7,title:"New Nursery!",lines:[{art:ve(Nm),text:"A new <b>Nursery</b> room, with a <b>crib</b> and a rocker!"},{art:ve(D9),text:"The <b>Cozy Cottage</b> furniture pack is in your drawer!"},{art:ve(H9),text:"A <b>dog kennel</b> and a <b>cat tower</b> for your pets!"}]},{v:6,title:"The clubhouse is open!",lines:[{art:ve(O9),text:"A glam <b>clubhouse</b> on the map!"},{art:ve(B9),text:"Play <b>Slay</b> with friends at a table!"},{art:ve(z9),text:"Line up <b>hearts</b> or <b>stars</b>!"}]},{v:5,title:"Your house looks even cozier!",lines:[{art:ve(Um),text:"Wallpaper and floors show their <b>real patterns</b> when you paint!"},{art:ve(Yo(0,"sit",Go(0,"sit"))),text:"Your cat is <b>big and cozy</b>, just like the toy cat."},{art:ve(Vm),text:"Tap <b>home</b> to come back from the map, the park, or the ranch."}]},{v:4,title:"A map of our neighborhood!",lines:[{art:ve(tf),text:"Tap the <b>map</b> to go anywhere!"},{art:ve(I9),text:"Tap a friend's face to <b>find her</b>."},{art:ve(kd(0,Cd(0))),text:"The petting zoo is inside the <b>barn</b> now!"}]},{v:3,title:"Rainbow Ranch is open!",lines:[{art:ve(R9),text:"Visit <b>Rainbow Ranch</b>!"},{art:ve(kd(1,Cd(1))),text:"Pet and feed animals at the <b>petting zoo</b>."},{art:ve(Bf(4,!1,Nf(4))),text:"Ride <b>horses</b> and the <b>rainbow pony</b>!"},{art:ve(qi("basket",C9)),text:"Collect <b>eggs</b> from the hens."},{art:ve(`<svg viewBox="0 0 70 90">${Qm(Wm({seed:"carrot",wet:1},3,0),0,0,1)}</svg>`),text:"Grow carrots and flowers in the <b>garden</b>."}]},{v:2,title:"What's new!",lines:[{art:ve(A9),text:"A new <b>park</b>! Swing, slide and splash with friends."},{art:ve(Yo(3,"sit",Go(3,"sit"))),text:"Adopt a <b>cat</b>! She lives in your house."},{art:ve(fa(3,"stand",ca(3,"stand"))),text:"Adopt a <b>dog</b>! Take it to the park to play fetch."}]}],Zm=Fm[0].v,Gm={v:Zm,title:"Welcome to your cozy house!",lines:[{art:ve(Vm),text:"Drag furniture into your rooms."},{art:ve(jf),text:"Dress up your friends."},{art:ve(Yo(0,"sit",Go(0,"sit"))),text:"Adopt a pet from the Menu ☰!"}]},Ym=wt("cozy-whatsnew"),q9=1;function j9(){try{const e=Number(localStorage.getItem(Ym)),t=["cozy-house","cozy-house-v1","cozy-hood"].some(o=>localStorage.getItem(wt(o))!==null);if(!e&&!t)return{kind:"welcome",entries:[Gm]};const n=e||q9,s=Fm.filter(o=>o.v>n).slice(0,3);return s.length?{kind:"news",entries:s}:{kind:"none",entries:[]}}catch{return{kind:"none",entries:[]}}}function F9(){try{localStorage.setItem(Ym,String(Zm))}catch{}}function Z9(e,t){const n=e==="welcome"?Gm.title:t[0].title,s=t.flatMap(o=>o.lines).slice(0,5);return`<div class="wnBadge">${e==="welcome"?J0:t[0].v>=10?jm:t[0].v>=9?qm:t[0].v>=8?jf:t[0].v>=7?Nm:t[0].v>=6?P9:t[0].v>=5?Um:t[0].v>=4?tf:t[0].v>=3?v9:L4}</div>
    <h2 class="wnTitle">${n}</h2>
    <div class="wnList ${s.length>3?"many":""}">${s.map((o,i)=>`<div class="wnLine" style="animation-delay:${.15+i*.18}s">${o.art}<p>${o.text}</p></div>`).join("")}</div>
    <button class="wnGo" id="wnGo">Let's play!</button>`}const Km="cozy-sky",Od={tint:"#fff6e4",body:"#ffe9f0",pageA:"#ffe0ec",pageB:"#e6ddff",spot:"#fff6fa",fieldA:"#c9f2c7",fieldB:"#8fd18a",win:"#a2d2ff",win2:"#b9e3ff",house:"#fff3b0",mapTint:"#ffffff"},du={tint:"#e7b4cc",body:"#f6dce8",pageA:"#ffd0e6",pageB:"#e6d2f8",spot:"#fff0f6",fieldA:"#f6d0e2",fieldB:"#dcc8f0",win:"#f6c6de",win2:"#e4d0f8",house:"#ffe0ee",mapTint:"#f3c4dc"},fu={tint:"#ffb38a",body:"#ffe4dc",pageA:"#ffe0d6",pageB:"#f0d8ea",spot:"#fff6ee",fieldA:"#d4eec4",fieldB:"#a3cb8a",win:"#ffc48a",win2:"#ffd4b0",house:"#ffc56a",mapTint:"#ffb38a"},Oo={tint:"#2a2350",body:"#14182c",pageA:"#1c1748",pageB:"#101832",spot:"#2c2458",fieldA:"#1a2458",fieldB:"#0c1028",win:"#1a245c",win2:"#12183a",house:"#ffe9a0",mapTint:"#102044"},ir=[{m:0,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...Oo},{m:5*60,opacity:.7,map:.78,glow:.95,stars:.95,glass:1,phase:"night",...Oo},{m:5*60+35,opacity:.42,map:.34,glow:.55,stars:.42,glass:.8,phase:"dawn",...du},{m:6*60+25,opacity:.14,map:.16,glow:.28,stars:.08,glass:.9,phase:"dawn",...du},{m:7*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Od},{m:16*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Od},{m:17*60+5,opacity:.08,map:.1,glow:.4,stars:.02,glass:.55,phase:"golden",...fu},{m:18*60+10,opacity:.18,map:.2,glow:.62,stars:.06,glass:.82,phase:"golden",...fu},{m:19*60+5,opacity:.52,map:.68,glow:.9,stars:.55,glass:1,phase:"night",...Oo},{m:20*60+10,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...Oo},{m:24*60,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...Oo}],G9={phase:"day",opacity:0,map:0,glow:0,stars:0,glass:0,...Od},Y9={phase:"night",opacity:.7,map:.78,glow:1,stars:1,glass:1,...Oo};function pu(e){const t=e.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function Xt(e,t,n){const s=pu(e),o=pu(t),i=a=>Math.round(s[a]+(o[a]-s[a])*n).toString(16).padStart(2,"0");return"#"+i(0)+i(1)+i(2)}const Ei=(e,t,n)=>e+(t-e)*n;function K9(e){const t=e.getHours()*60+e.getMinutes()+e.getSeconds()/60;let n=0;for(;n<ir.length-2&&t>=ir[n+1].m;)n++;const s=ir[n],o=ir[n+1],i=Math.max(1,o.m-s.m),a=Math.max(0,Math.min(1,(t-s.m)/i));return{phase:a<.5?s.phase:o.phase,opacity:Ei(s.opacity,o.opacity,a),map:Ei(s.map,o.map,a),glow:Ei(s.glow,o.glow,a),stars:Ei(s.stars,o.stars,a),glass:Ei(s.glass,o.glass,a),tint:Xt(s.tint,o.tint,a),body:Xt(s.body,o.body,a),pageA:Xt(s.pageA,o.pageA,a),pageB:Xt(s.pageB,o.pageB,a),spot:Xt(s.spot,o.spot,a),fieldA:Xt(s.fieldA,o.fieldA,a),fieldB:Xt(s.fieldB,o.fieldB,a),win:Xt(s.win,o.win,a),win2:Xt(s.win2,o.win2,a),house:Xt(s.house,o.house,a),mapTint:Xt(s.mapTint,o.mapTint,a)}}function hu(e,t){return t==="day"?G9:t==="night"?Y9:K9(e)}function X9(e){return e==="day"||e==="night"||e==="auto"}function J9(e,t=!1){return t?!0:e==="lamp"||e==="window"||e==="stars"||e==="tv"||/lamp|light|lantern|candle|string-lights|night-light/i.test(e)}function uu(){try{if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches)return!0}catch{}if(typeof navigator>"u")return!1;const e=navigator.hardwareConcurrency;if(typeof e=="number"&&e>0&&e<=2)return!0;const t=navigator.deviceMemory;return typeof t=="number"&&t>0&&t<=2}const gu={day:"night",night:"auto",auto:"day"},mu={day:"Day",night:"Night",auto:"Auto"},Xm='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><g fill="none" stroke="#ffb15c" stroke-width="3" stroke-linecap="round"><path d="M24 7 V13 M24 35 V41 M7 24 H13 M35 24 H41 M12 12 L16 16 M32 32 L36 36 M36 12 L32 16 M16 32 L12 36"/></g></svg>',eE='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 8 a14 14 0 1 0 0 32 a11 11 0 1 1 0 -32z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="3"/><circle cx="14" cy="16" r="1.7" fill="#ffd166"/><circle cx="18" cy="28" r="1.2" fill="#fff"/><circle cx="11" cy="24" r="1" fill="#fff"/></svg>',tE='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="28" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M34 8 a9 9 0 1 0 0 18 a7 7 0 1 1 0 -18z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="2.5"/><circle cx="14" cy="16" r="1.3" fill="#ffd166"/></svg>',nE={day:Xm,night:eE,auto:tE},sE="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)";function oE(){if(document.getElementById("skyInk"))return;const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.id="skyInk",e.setAttribute("aria-hidden","true"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.style.cssText="position:fixed;left:0;top:0;width:0;height:0;overflow:hidden;pointer-events:none",e.innerHTML=`
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
  `,document.head.appendChild(t)}function iE(e){oE();const t=uu();let n=rE(),s=null,o=hu(new Date,n),i=0;e.innerHTML=`<button type="button" class="skyBtn" aria-label="Day. Tap for night.">${Xm}</button>`;const a=e.querySelector("button"),r=u=>{o=u;const y=document.documentElement,m=Math.max(0,Math.min(1,u.glow));y.style.setProperty("--sky-opacity",u.opacity.toFixed(3)),y.style.setProperty("--sky-map-opacity",u.map.toFixed(3)),y.style.setProperty("--sky-glow",m.toFixed(3)),y.style.setProperty("--sky-stars",u.stars.toFixed(3)),y.style.setProperty("--sky-glass",u.glass.toFixed(3)),y.style.setProperty("--sky-tint",u.tint),y.style.setProperty("--sky-body",u.body),y.style.setProperty("--sky-page-a",u.pageA),y.style.setProperty("--sky-page-b",u.pageB),y.style.setProperty("--sky-spot",u.spot),y.style.setProperty("--sky-field-a",u.fieldA),y.style.setProperty("--sky-field-b",u.fieldB),y.style.setProperty("--sky-win",u.win),y.style.setProperty("--sky-win-2",u.win2),y.style.setProperty("--sky-house-win",u.house),y.style.setProperty("--sky-map-tint",u.mapTint),y.style.setProperty("--sky-glow-soft",`rgba(255, 186, 80, ${(m*.72).toFixed(3)})`),y.style.setProperty("--sky-glow-hot",`rgba(255, 220, 120, ${(m*.96).toFixed(3)})`),y.style.setProperty("--sky-glow-clear","rgba(255, 186, 80, 0)"),y.style.setProperty("--sky-glow-wash",`rgba(255, 170, 70, ${(m*.55).toFixed(3)})`),y.style.setProperty("--sky-glow-map",`rgba(255, 196, 110, ${(m*.7).toFixed(3)})`);const v=u.phase==="golden"?.24:u.phase==="dawn"?.22:0,w=u.phase==="golden"?"186, 110, 52":"140, 62, 18";y.style.setProperty("--sky-shadow",`rgba(${w}, ${v.toFixed(3)})`);const g=u.phase==="night"?.55:u.phase==="golden"?.08:u.phase==="dawn"?.16:0;y.style.setProperty("--sky-vig",`rgba(12, 10, 32, ${g.toFixed(3)})`);const b=u.phase==="golden"?"255, 196, 80":u.phase==="dawn"?"255, 214, 230":"255, 246, 214";y.style.setProperty("--sky-orb",`rgba(${b}, ${Math.min(1,u.glass).toFixed(3)})`),y.dataset.sky=u.phase,y.dataset.skyChoice=n,y.classList.toggle("sky-static",t),y.classList.toggle("sky-live",!t),a.innerHTML=nE[n],a.setAttribute("aria-label",`${mu[n]}. Tap for ${mu[gu[n]].toLowerCase()}.`)},l=()=>hu(s??new Date,n),c=()=>r(l()),d=()=>{i&&clearInterval(i),i=window.setInterval(()=>{!s&&!document.hidden&&c()},t?6e4:1e3)},f=u=>{n=u;try{localStorage.setItem(wt(Km),n)}catch{}c()};a.addEventListener("click",()=>f(gu[n])),document.documentElement.classList.toggle("sky-static",t),c(),d(),X0(()=>{s||c()});const h=document.getElementById("mapWorld");h&&aE(h);try{matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",()=>{const y=uu();document.documentElement.classList.toggle("sky-static",y),document.documentElement.classList.toggle("sky-live",!y)})}catch{}try{matchMedia(sE).addEventListener?.("change",()=>vr())}catch{}return window.addEventListener("resize",()=>vr()),new MutationObserver(()=>vr()).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{choice:()=>n,look:()=>o,setChoice(u){f(u)},freeze(u){s=u,c()}}}function vr(){const e=document.getElementById("skyMount"),t=document.getElementById("menuDaySlot");e&&t&&e.parentElement!==t&&t.appendChild(e),t&&(t.hidden=!1),e&&(e.style.left="",e.style.top="")}function aE(e){const t=document.createElement("div");t.className="skyTint",t.setAttribute("aria-hidden","true");const n=document.createElement("div");n.className="skyLamps",n.setAttribute("aria-hidden","true");const s=document.createElement("div");s.className="skyBits",s.setAttribute("aria-hidden","true"),s.innerHTML='<i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i>';const o=()=>{e.contains(t)||e.appendChild(t),e.contains(n)||e.appendChild(n),e.contains(s)||e.appendChild(s)};o(),new MutationObserver(o).observe(e,{childList:!0})}function rE(){try{const e=localStorage.getItem(wt(Km));if(X9(e))return e}catch{}return"auto"}const Jm=255,lE=12;class cE{constructor(t){this.w=us,this.h=gs,this.undo=[],this.px=S0(t??null)}checkpoint(){this.undo.push(this.px.slice()),this.undo.length>lE&&this.undo.shift()}canUndo(){return this.undo.length>0}undoStep(){const t=this.undo.pop();return t?(this.px=t,!0):!1}apply(t){switch(t.k){case"line":this.line(t.x0,t.y0,t.x1,t.y1,t.r,t.c);break;case"fill":this.fill(t.x,t.y,t.c);break;case"stamp":this.stamp(t.mask,t.x,t.y);break;case"clear":this.px.fill(0);break}}dot(t,n,s,o){const i=Math.max(.5,s),a=i*i,r=Math.max(0,Math.floor(t-i)),l=Math.min(this.w-1,Math.ceil(t+i)),c=Math.max(0,Math.floor(n-i)),d=Math.min(this.h-1,Math.ceil(n+i));for(let f=c;f<=d;f++)for(let h=r;h<=l;h++){const u=h+.5-t,y=f+.5-n;u*u+y*y<=a&&(this.px[f*this.w+h]=o)}}line(t,n,s,o,i,a){const r=Math.hypot(s-t,o-n),l=Math.max(.5,i/2),c=Math.max(1,Math.ceil(r/l));for(let d=0;d<=c;d++)this.dot(t+(s-t)*d/c,n+(o-n)*d/c,i,a)}fill(t,n,s){const o=Math.floor(t),i=Math.floor(n);if(o<0||i<0||o>=this.w||i>=this.h)return;const{w:a,h:r,px:l}=this,c=l[i*a+o];if(c===s)return;const d=[o,i];for(;d.length;){const f=d.pop(),h=d.pop();let u=h;for(;u>0&&l[f*a+u-1]===c;)u--;let y=h;for(;y<a-1&&l[f*a+y+1]===c;)y++;for(let m=u;m<=y;m++)l[f*a+m]=s,f>0&&l[(f-1)*a+m]===c&&(m===u||l[(f-1)*a+m-1]!==c)&&d.push(m,f-1),f<r-1&&l[(f+1)*a+m]===c&&(m===u||l[(f+1)*a+m-1]!==c)&&d.push(m,f+1)}}stamp(t,n,s){const o=Math.round(n-t.w/2),i=Math.round(s-t.h/2);for(let a=0;a<t.h;a++)for(let r=0;r<t.w;r++){const l=t.px[a*t.w+r];if(l===Jm)continue;const c=o+r,d=i+a;c>=0&&d>=0&&c<this.w&&d<this.h&&(this.px[d*this.w+c]=l)}}save(){let t=uc(this.px),n=this.px;for(let s=0;t.length>id&&s<6;s++)n=dE(n,this.w,this.h,1<<s),t=uc(n);return t.length>id&&(t=uc(fE(n,this.w,this.h,8))),t}}function dE(e,t,n,s){const o=e.slice();for(let i=0;i<n;i++){let a=0;for(;a<t;){const r=o[i*t+a];let l=1;for(;a+l<t&&o[i*t+a+l]===r;)l++;l<=s&&a>0&&o.fill(o[i*t+a-1],i*t+a,i*t+a+l),a+=l}}return o}function fE(e,t,n,s){const o=new Uint8Array(e.length);for(let i=0;i<n;i++)for(let a=0;a<t;a++)o[i*t+a]=e[Math.floor(i/s)*s*t+Math.floor(a/s)*s];return o}function pE(e,t,n,s){let o=0,i=1/0;return s.forEach((a,r)=>{const l=parseInt(a.slice(1,3),16),c=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16),f=(l-e)**2*2+(c-t)**2*4+(d-n)**2*3;f<i&&(i=f,o=r)}),o}const ar="#5a3d5c",yo=new Map,Bd=new Map,zd=wt("cozy-art");function hE(){try{const e=JSON.parse(localStorage.getItem(zd)??"{}");if(e&&typeof e=="object")for(const[t,n]of Object.entries(e))E0(t)&&kf(n)&&yo.set(t,n)}catch{}}function uE(e,t,n){yo.set(e,t);let s={};try{s=JSON.parse(localStorage.getItem(zd)??"{}")||{}}catch{s={}}s[e]=t;const o=Object.keys(s);if(o.length>Vi)for(const i of o)i!==e&&!n.has(i)&&Object.keys(s).length>Vi&&delete s[i];try{localStorage.setItem(zd,JSON.stringify(s))}catch{}}function gE(e){return yo.has(e)}function e1(e,t){!E0(e)||!kf(t)||yo.get(e)!==t&&(yo.set(e,t),Bd.delete(e))}function mE(e){return yo.get(e)??null}const yE=vf.map(e=>[parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)]);function t1(e,t){const n=t.data;for(let s=0;s<e.length;s++){const o=yE[e[s]&15];n[s*4]=o[0],n[s*4+1]=o[1],n[s*4+2]=o[2],n[s*4+3]=255}}function n1(e){const t=Bd.get(e);if(t)return t;const n=yo.get(e);if(!n)return null;const s=document.createElement("canvas");s.width=us,s.height=gs;const o=s.getContext("2d");if(!o)return null;const i=o.createImageData(us,gs);t1(S0(n),i),o.putImageData(i,0,0);const a=s.toDataURL("image/png");return Bd.set(e,a),a}function Yr(e,t,n=!0){const s=L0[e]??"wood",o=`stroke="${ar}" stroke-width="3" stroke-linejoin="round"`;let i="";s==="wood"?i=`<rect x="6" y="18" width="88" height="70" rx="6" fill="#c9905a" ${o}/><path d="M10 24 H90 M10 82 H90" stroke="#a86f3e" stroke-width="1.6" opacity=".7"/>`:s==="plum"?i=`<rect x="6" y="18" width="88" height="70" rx="8" fill="#9a6fc0" ${o}/><rect x="9" y="21" width="82" height="64" rx="6" fill="none" stroke="#d7c0ef" stroke-width="1.6"/>`:s==="gold"?i=`<rect x="6" y="18" width="88" height="70" rx="5" fill="#f2c14e" ${o}/>${[14,32,50,68,86].map(l=>`<circle cx="${l}" cy="21.5" r="1.6" fill="#fff3b0"/><circle cx="${l}" cy="84.5" r="1.6" fill="#fff3b0"/>`).join("")}`:i=`<rect x="6" y="18" width="88" height="70" rx="7" fill="#ff6b6b" ${o}/>${["#ffa94d","#ffd43b","#69db7c","#4dabf7","#b388d6"].map((l,c)=>`<rect x="${7.5+c*1.1}" y="${19.5+c*1.1}" width="${85-c*2.2}" height="${67-c*2.2}" rx="6" fill="none" stroke="${l}" stroke-width="1.3"/>`).join("")}`;const a=t?`<image href="${t}" x="13" y="25" width="74" height="55.5" preserveAspectRatio="none"/>`:'<rect x="13" y="25" width="74" height="55.5" fill="#fff6ea"/><circle cx="40" cy="50" r="5" fill="#ffc8dd"/><circle cx="55" cy="56" r="4" fill="#bde0fe"/><circle cx="62" cy="44" r="3.5" fill="#fff3b0"/>',r=n?`<path d="M38 18 L50 7 L62 18" fill="none" stroke="${ar}" stroke-width="2"/><circle cx="50" cy="7" r="2.4" fill="${ar}"/>`:"";return`<svg viewBox="${n?"0 0 100 100":"4 16 92 74"}" xmlns="http://www.w3.org/2000/svg">${r}${i}${a}<rect x="13" y="25" width="74" height="55.5" fill="none" stroke="${ar}" stroke-width="1.6"/></svg>`}const Cc=[2,4,8,14],yu=[24,34,46,60],wu={brush:'<svg viewBox="0 0 40 40"><path d="M26 6 L34 14 L18 30 L10 22 Z" fill="#ffd43b" stroke="#5a3d5c" stroke-width="2.5" stroke-linejoin="round"/><path d="M10 22 L18 30 Q12 36 5 35 Q4 28 10 22 Z" fill="#ff6b6b" stroke="#5a3d5c" stroke-width="2.5" stroke-linejoin="round"/></svg>',fill:'<svg viewBox="0 0 40 40"><path d="M7 15 L21 9 L27 23 L13 29 Z" fill="#fff" stroke="#5a3d5c" stroke-width="2.5" stroke-linejoin="round"/><path d="M7 15 Q14 19 21 9" fill="#4dabf7" stroke="#5a3d5c" stroke-width="2"/><path d="M8 16 Q3 24 6 34 Q12 34 11 27 Q10 22 8 16 Z" fill="#4dabf7" stroke="#5a3d5c" stroke-width="2" stroke-linejoin="round"/><path d="M27 23 Q31 14 21 9" fill="none" stroke="#5a3d5c" stroke-width="2"/></svg>',eraser:'<svg viewBox="0 0 40 40"><g transform="rotate(-35 20 20)"><rect x="6" y="13" width="28" height="14" rx="3" fill="#ffc8dd" stroke="#5a3d5c" stroke-width="2.5"/><rect x="6" y="13" width="10" height="14" rx="3" fill="#fff" stroke="#5a3d5c" stroke-width="2.5"/></g><path d="M7 35 h4 M15 36 h3 M22 35 h2" stroke="#5a3d5c" stroke-width="2.5" stroke-linecap="round"/></svg>',stamp:'<svg viewBox="0 0 40 40"><path d="M20 33 C13 27 5 22 8 14 C11 7 20 10 20 16 C20 10 29 7 32 14 C35 22 27 27 20 33 Z" fill="#ff8fab" stroke="#5a3d5c" stroke-width="2.5"/></svg>'},wE='<svg viewBox="0 0 40 40"><path d="M14 10 L6 18 L14 26" fill="none" stroke="#5a3d5c" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 18 H24 Q34 18 34 26 Q34 33 24 33 H18" fill="none" stroke="#5a3d5c" stroke-width="3.5" stroke-linecap="round"/></svg>',bu={brush:"Brush",fill:"Fill",eraser:"Eraser",stamp:"Stamps"},bE=["White","Plum","Red","Pink","Orange","Yellow","Green","Dark green","Blue","Dark blue","Lilac","Purple","Tan","Brown","Gray","Black"],vE={wood:"Wood",plum:"Plum",gold:"Gold",rainbow:"Rainbow"},kE='<svg viewBox="0 0 40 40"><rect x="7" y="7" width="26" height="26" rx="5" fill="#fff" stroke="#5a3d5c" stroke-width="2.5"/><path d="M12 28 L28 12" stroke="#ff8fab" stroke-width="3" stroke-linecap="round"/><circle cx="31" cy="9" r="3" fill="#ffd43b"/></svg>',vu=new Map;async function ku(e,t){const n=e.name+":"+t,s=vu.get(n);if(s)return s;const o=e.svg.includes("xmlns")?e.svg:e.svg.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" '),i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(o);try{await i.decode()}catch{return null}const a=document.createElement("canvas");a.width=t,a.height=t;const r=a.getContext("2d",{willReadFrequently:!0});if(!r)return null;r.drawImage(i,0,0,t,t);const l=r.getImageData(0,0,t,t).data,c=new Uint8Array(t*t);for(let f=0;f<c.length;f++)c[f]=l[f*4+3]<140?Jm:pE(l[f*4],l[f*4+1],l[f*4+2],vf);const d={w:t,h:t,px:c};return vu.set(n,d),d}let Si=null;function _E(e){if(Si)return;const t=new cE;let n="brush",s=2,o=1,i=0,a=0;const r=document.createElement("div");r.className="studio",r.setAttribute("role","dialog"),r.setAttribute("aria-label","Art Studio"),r.innerHTML=`<div class="stuCard">
    <div class="stuHead"><h2>Art Studio</h2><button type="button" class="stuX" aria-label="Close">✕</button></div>
    <div class="stuBody">
      <div class="stuPaper"><canvas width="${us}" height="${gs}" aria-label="Drawing paper"></canvas></div>
      <div class="stuSide">
        <div class="stuTools">${Object.keys(wu).map($=>`<button type="button" class="stuTool" data-tool="${$}" aria-label="${bu[$]}" aria-pressed="false">${wu[$]}<span>${bu[$]}</span></button>`).join("")}
          <button type="button" class="stuTool stuUndo" aria-label="Undo">${wE}<span>Undo</span></button><button type="button" class="stuTool stuClear" aria-label="Clear">${kE}<span>Clear</span></button></div>
        <div class="stuGroup stuSizeGroup"><b>Size</b><div class="stuRow stuSizes">${Cc.map(($,x)=>`<button type="button" class="stuSize" data-size="${x}" aria-label="Size ${x+1}" aria-pressed="false"><i style="width:${8+$*2}px;height:${8+$*2}px"></i></button>`).join("")}</div></div>
        <div class="stuGroup stuColorGroup"><b>Colors</b><div class="stuColors">${vf.map(($,x)=>`<button type="button" class="stuColor" data-color="${x}" aria-label="${bE[x]??"Color "+(x+1)}" aria-pressed="false" style="background:${$}"></button>`).join("")}</div></div>
        <div class="stuGroup stuStampGroup"><b>Stamps</b><div class="stuStamps">${e.stamps.map(($,x)=>`<button type="button" class="stuStamp" data-stamp="${x}" aria-label="${$.name}" aria-pressed="false">${$.svg}</button>`).join("")}</div></div>
        <div class="stuGroup stuFrameGroup"><b>Frame</b><div class="stuRow stuFrames">${L0.map(($,x)=>`<button type="button" class="stuFrame" data-frame="${x}" aria-label="${vE[$]??$} frame" aria-pressed="false">${Yr(x,null,!1)}</button>`).join("")}</div></div>
        <button type="button" class="stuHang">Hang it up!</button>
      </div>
    </div></div>
    <div class="stuAsk hidden" role="alertdialog" aria-label="Start over?"><div class="stuAskCard"><p>Start a new picture?</p><div class="stuAskRow"><button type="button" class="stuAskNo" aria-label="Keep my picture">Keep it</button><button type="button" class="stuAskYes" aria-label="Yes, clear it">Clear it</button></div></div></div>`,document.body.appendChild(r),Si=r;const l=r.querySelector("canvas"),c=l.getContext("2d"),d=c.createImageData(us,gs),f=()=>{t1(t.px,d),c.putImageData(d,0,0)},h=()=>{r.querySelectorAll(".stuTool[data-tool]").forEach($=>$.classList.toggle("on",$.dataset.tool===n)),r.querySelectorAll(".stuSize").forEach($=>$.classList.toggle("on",Number($.dataset.size)===o)),r.querySelectorAll(".stuColor").forEach($=>$.classList.toggle("on",Number($.dataset.color)===s)),r.querySelectorAll(".stuStamp").forEach($=>$.classList.toggle("on",Number($.dataset.stamp)===i)),r.querySelectorAll(".stuFrame").forEach($=>$.classList.toggle("on",Number($.dataset.frame)===a)),r.querySelectorAll("[aria-pressed]").forEach($=>$.setAttribute("aria-pressed",String($.classList.contains("on")))),r.classList.toggle("stamping",n==="stamp"),t.canUndo()!==u&&m(),r.querySelector(".stuUndo").disabled=!t.canUndo()};let u=!1,y=0;function m(){u=t.canUndo(),clearTimeout(y),y=window.setTimeout(()=>{if(!Si)return;const $=t.canUndo()?l.toDataURL():null;r.querySelectorAll(".stuFrame").forEach(x=>{x.innerHTML=Yr(Number(x.dataset.frame),$,!1)})},60)}const v=r.querySelector(".stuAsk");f(),h();const w=()=>{r.remove(),Si=null,e.onClose?.()};r.addEventListener("click",$=>{const x=$.target.closest("button");if(x){if(e.sfx?.click(),x.classList.contains("stuX")){w();return}if(x.classList.contains("stuAskNo")){v.classList.add("hidden");return}if(x.classList.contains("stuAskYes")){v.classList.add("hidden"),t.checkpoint(),t.apply({k:"clear"}),f(),h(),m();return}if(x.dataset.tool)n=x.dataset.tool;else if(x.dataset.size)o=Number(x.dataset.size);else if(x.dataset.color)s=Number(x.dataset.color),(n==="eraser"||n==="stamp")&&(n="brush");else if(x.dataset.stamp)i=Number(x.dataset.stamp),n="stamp";else if(x.dataset.frame)a=Number(x.dataset.frame);else if(x.classList.contains("stuUndo"))t.undoStep()&&(f(),m());else if(x.classList.contains("stuClear"))v.classList.remove("hidden"),v.querySelector(".stuAskNo").focus();else if(x.classList.contains("stuHang")){const D=t.save();w(),e.onSave(D,a);return}h()}});let g=-1,b=null;const _=$=>{const x=l.getBoundingClientRect();return{x:($.clientX-x.left)*us/x.width,y:($.clientY-x.top)*gs/x.height}};l.addEventListener("pointerdown",$=>{if($.preventDefault(),g!==-1)return;const x=_($);if(n==="fill"){t.checkpoint(),t.apply({k:"fill",x:x.x,y:x.y,c:s}),f(),h(),m(),e.sfx?.pop?.();return}if(n==="stamp"){const D=e.stamps[i];if(!D)return;ku(D,yu[o]).then(W=>{!W||!Si||(t.checkpoint(),t.apply({k:"stamp",mask:W,x:x.x,y:x.y}),f(),h(),m(),e.sfx?.pop?.())});return}g=$.pointerId;try{l.setPointerCapture($.pointerId)}catch{}t.checkpoint(),b=x,t.apply({k:"line",x0:x.x,y0:x.y,x1:x.x,y1:x.y,r:Cc[o],c:n==="eraser"?0:s}),f()}),l.addEventListener("pointermove",$=>{if($.pointerId!==g||!b)return;const x=typeof $.getCoalescedEvents=="function"?$.getCoalescedEvents():[];for(const D of x.length?x:[$]){const W=_(D);t.apply({k:"line",x0:b.x,y0:b.y,x1:W.x,y1:W.y,r:Cc[o],c:n==="eraser"?0:s}),b=W}f()});const P=$=>{$.pointerId===g&&(g=-1,b=null,h(),m())};l.addEventListener("pointerup",P),l.addEventListener("pointercancel",P),e.stamps.slice(0,3).forEach($=>void ku($,yu[1]))}function $E(e){const t=document.createElement("div");t.className="paintZoom",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Painting"),t.innerHTML=`<div class="pzInner">${e}</div>`,t.addEventListener("pointerup",()=>t.remove()),document.body.appendChild(t)}const Bo=[{name:"Pink",fill:"#ff7eb3",ink:"#9d174d"},{name:"Lilac",fill:"#c9b3ff",ink:"#5f3dc4"},{name:"Aqua",fill:"#66d9e8",ink:"#0b7285"},{name:"Gold",fill:"#ffd43b",ink:"#e67700"}],_t="#5a3d5c",Ic=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),_u=e=>typeof e=="number"?e:{skip:10,rev:11,d2:12,wild:13,w4:14}[e]??0,$u=e=>typeof e.v=="number"?String(e.v):e.v==="skip"?"✕":e.v==="rev"?"↻":e.v==="d2"?"+2":e.v==="w4"?"+4":"♛",xE=e=>e.v==="skip"?"Nope":e.v==="rev"?"Flip":e.v==="d2"?"+2":e.v==="wild"||e.v==="w4"?"Crown":"",Ks=(e,t,n=1,s="#ffd43b")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -6 L1.4 -1.4 L6 -1 L1.6 1.4 L3 6 L0 3 L-3 6 L-1.6 1.4 L-6 -1 L-1.4 -1.4 Z" fill="${s}" stroke="${_t}" stroke-width="1" stroke-linejoin="round"/>`,kr=(e,t,n=1)=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 1.2 C-2.2 -1.6 -5.2 -0.6 -3.6 2.2 C-2.4 4 0 5.2 0 5.2 C0 5.2 2.4 4 3.6 2.2 C5.2 -0.6 2.2 -1.6 0 1.2 Z" fill="#ff4d94" stroke="${_t}" stroke-width="1"/>`;function ME(e){return e.v==="wild"||e.v==="w4"?`<g transform="translate(14 28)">
      <path d="M4 26 L10 8 L18 16 L24 2 L30 16 L38 8 L44 26 Z" fill="#ffd43b" stroke="${_t}" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="4" y="26" width="40" height="8" rx="2" fill="#ffd43b" stroke="${_t}" stroke-width="2.2"/>
      <circle cx="10" cy="8" r="2.4" fill="#ff7eb3"/><circle cx="24" cy="3" r="2.4" fill="#66d9e8"/><circle cx="38" cy="8" r="2.4" fill="#d0bfff"/>
      ${Ks(-2,0,.7)}${Ks(46,4,.65,"#fff")}${Ks(22,-4,.55,"#ff7eb3")}
    </g>${e.v==="w4"?`<text x="35" y="78" text-anchor="middle" font-size="16" font-weight="900" fill="${_t}" font-family="Nunito, ui-rounded, system-ui, sans-serif">+4</text>`:""}`:e.v==="d2"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff" stroke="${_t}" stroke-width="2.4"/>
      ${kr(14,8,1.35)}${kr(32,8,1.35)}
      <path d="M12 26 Q23 34 34 26" fill="none" stroke="${_t}" stroke-width="2.4" stroke-linecap="round"/>
      ${kr(40,22,.8)}
    </g>`:e.v==="rev"?`<g fill="none" stroke="${_t}" stroke-width="3.2" stroke-linecap="round">
      <path d="M16 40 C42 22 54 52 34 60 C16 68 12 46 30 40"/>
      <path d="M14 38 L22 30 L24 42" stroke-linejoin="round"/>
    </g>${Ks(48,28,.85)}${Ks(20,62,.6,"#ff7eb3")}${Ks(50,58,.55,"#66d9e8")}`:e.v==="skip"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff6d8" stroke="${_t}" stroke-width="2.4"/>
      <rect x="8" y="12" width="14" height="9" rx="3" fill="#2b1430"/><rect x="24" y="12" width="14" height="9" rx="3" fill="#2b1430"/>
      <path d="M22 16.5 H24 M5 14 H2 M41 14 H44" stroke="${_t}" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 27 Q23 32 34 27" fill="none" stroke="${_t}" stroke-width="2.2" stroke-linecap="round"/>
    </g>`:""}function Dd(e){const t=e.c===4,n=t?{fill:"#fff8ee",ink:_t}:Bo[e.c]??Bo[0],s=typeof e.v=="number",o=xE(e),i=t?'<rect x="2" y="2" width="66" height="96" rx="13" fill="#fff8ee" stroke="#ff7eb3" stroke-width="4"/><rect x="5" y="5" width="60" height="90" rx="11" fill="none" stroke="#d0bfff" stroke-width="2"/><rect x="7.5" y="7.5" width="55" height="85" rx="9" fill="none" stroke="#66d9e8" stroke-width="1.6"/><rect x="9.5" y="9.5" width="51" height="81" rx="8" fill="none" stroke="#ffd43b" stroke-width="1.6"/>':`<rect x="2" y="2" width="66" height="96" rx="13" fill="${n.fill}" stroke="${_t}" stroke-width="3"/><rect x="6" y="6" width="58" height="88" rx="10" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>`,a='<ellipse cx="24" cy="20" rx="16" ry="8" fill="#fff" opacity=".38"/>',r=`fill="${n.ink}" stroke="#fff" stroke-width="3" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif"`,l=`<text x="8" y="16" font-size="13" font-weight="900" ${r}>${$u(e)}</text>`+(s?`<text x="62" y="94" font-size="13" font-weight="900" text-anchor="end" ${r}>${$u(e)}</text>`:""),c=s?`<text x="35" y="68" text-anchor="middle" font-size="48" font-weight="900" fill="${n.ink}" stroke="#fff" stroke-width="6" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${e.v}</text>`:`${ME(e)}${o?`<text x="35" y="92" text-anchor="middle" font-size="12" font-weight="900" ${r}>${o}</text>`:""}`;return`<svg viewBox="0 0 70 100">${i}${a}${l}${c}</svg>`}const LE=[[18,28],[40,28],[29,46],[18,64],[40,64],[29,78]].map(([e,t])=>kr(e,t,.9)).join(""),EE=`<svg viewBox="0 0 70 100"><rect x="2" y="2" width="66" height="96" rx="13" fill="#ff4d94" stroke="${_t}" stroke-width="3"/>
  <rect x="7" y="7" width="56" height="86" rx="10" fill="none" stroke="#ffd43b" stroke-width="3"/>
  <rect x="11" y="11" width="48" height="78" rx="8" fill="#ff7eb3"/>
  ${LE}
  <circle cx="35" cy="50" r="14" fill="#fff6fb" stroke="${_t}" stroke-width="2.4"/>
  ${Ks(35,50,1.15,"#ffd43b")}
</svg>`,s1=(e,t)=>{if(t.turn<0||t.drawn!=null&&e.id!==t.drawn)return!1;const n=t.top;return e.c===4||e.c===t.color||e.v===n.v&&n.c!==4};let Hd=null,Ot=null,Ro=-1,xu=-1;function Mu(e,t){Hd=e;const n=t.table,s=n.view;if(!s||!s.top){e.innerHTML="";return}n.tb!==xu&&(Ot=null,Ro=-1,xu=n.tb);const o=n.you,i=o!==null&&Array.isArray(s.hand)?s.hand.slice():[];Ot!==null&&!i.some(g=>g.id===Ot)&&(Ot=null);const a=s.ev;let r=null;if(a&&a.n!==Ro&&Ro>=0&&a.k==="play"&&a.card){const g=e.querySelector(`[data-card="${a.card.id}"]`)||e.querySelector(`[data-p="${a.p}"]`);g&&(r=g.getBoundingClientRect())}const c=n.phase==="play"&&s.turn>=0,d=c&&o!==null&&s.turn===o,f=o!==null&&i.length<=2&&i.length>0&&!s.slay?.[o]&&d,h=d&&s.drawn==null&&n.phase==="play",u=d&&s.drawn!=null&&n.phase==="play",y=i.sort((g,b)=>g.c-b.c||_u(g.v)-_u(b.v)),m=c?n.players[s.turn]:"",v=c?d?"Your turn!":`${Ic(t.name(m))}'s turn`:"",w=Bo[s.color]??Bo[0];if(e.innerHTML=`<div class="slayFelt">
    ${v?`<div class="whose ${d?"yours":""}" id="whoseTurn">${v}<span class="slayDir" aria-hidden="true">${s.dir===1?"→":"←"}</span></div>`:""}
    <div class="slayOpps">${n.players.map((g,b)=>b===o?"":`<div class="slayOpp ${s.turn===b?"isTurn":""}" data-p="${b}" data-count="${s.counts?.[b]??0}"><span class="chipFace">${t.face(g)}</span><b>${Ic(t.name(g))}</b><span class="cnt">${s.counts?.[b]??0}</span>${t.away(g)?'<i class="awayBadge">away</i>':""}${s.slay?.[b]?"<em>SLAY!</em>":""}</div>`).join("")}</div>
    <div class="slayPile">
      <button type="button" id="slayDeck" class="slayDeck" ${h?"":"disabled"} aria-label="Draw a card">${EE}<span>${s.deck??0}</span></button>
      <div id="slayDiscard" class="slayDiscard" data-top="${s.top.id}">${Dd(s.top)}</div>
      <div class="nowColor" data-color="${s.color}" style="background:${w.fill}" aria-label="${w.name}"></div>
    </div>
    ${o===null?'<p class="watching">You are watching</p>':""}
    ${Ot!==null?`<div id="crownPick" class="crownPick"><p>Pick a color for your Crown!</p><div class="crownRow">${Bo.map((g,b)=>`<button type="button" data-color="${b}" aria-label="${g.name}" style="background:${g.fill}"><span>${g.name}</span></button>`).join("")}</div></div>`:""}
    <div id="slayHand" class="slayHand ${d?"isTurn":""}">${y.map(g=>{const b=d&&n.phase==="play"&&s1(g,s),_=b?"can":d?"dim":"wait",P=typeof g.v=="number"?Bo[g.c].name+" "+g.v:g.v==="wild"?"Crown":g.v==="w4"?"Crown plus 4":g.v==="d2"?"plus 2":g.v==="rev"?"Flip":"Nope";return`<button type="button" class="slayCard ${_} ${g.id===s.drawn?"justDrew":""} ${g.id===Ot?"picked":""}" data-card="${g.id}" data-c="${g.c}" data-v="${g.v}" aria-label="${Ic(P)}" ${b?"":"disabled"}>${Dd(g)}</button>`}).join("")}</div>
    ${c&&o!==null?`<button type="button" id="slayCall" class="slayCall ${f?"ready":""}" ${f?"":"disabled"}>SLAY!</button>`:""}
    <button type="button" id="slayPass" class="slayPass ${u?"":"hidden"}" ${u?"":"disabled"}>Pass</button>
  </div>`,a&&a.n!==Ro){const g=Ro;if(Ro=a.n,g>=0){if(a.k==="play"&&a.card){const b=e.querySelector("#slayDiscard");b&&SE(r,a.card,b.getBoundingClientRect()),a.card.v==="skip"?t.toast("Nope!"):a.card.v==="rev"?t.toast("Flip!"):a.card.v==="d2"?t.toast("+2!"):a.card.v==="w4"&&t.toast("Crown +4!"),t.sfx.swish()}a.vdrew&&t.toast("Forgot to say SLAY! Draw 2"),a.k==="slay"&&t.sfx.sparkle()}}}function SE(e,t,n){const s=document.createElement("div");s.className="flyCard",s.innerHTML=Dd(t);const o=e?.width||70,i=e?.height||100;Object.assign(s.style,{left:(e?.left??innerWidth/2)+"px",top:(e?.top??80)+"px",width:o+"px",height:i+"px"}),document.body.appendChild(s),requestAnimationFrame(()=>{s.style.left=n.left+"px",s.style.top=n.top+"px",s.style.width=Math.max(n.width,70)+"px",s.style.height=Math.max(n.height,96)+"px"}),setTimeout(()=>s.remove(),560)}const TE={id:"slay",render:Mu,handle(e,t){const n=t.table.view,s=t.table.you;if(!n||t.table.phase!=="play"||s===null)return!1;const o=n.hand??[];if(e.closest("#slayCall"))return o.length<=2&&o.length>0&&!n.slay?.[s]&&(t.move({k:"slay"}),t.sfx.sparkle()),!0;if(e.closest("#slayDeck"))return n.turn===s&&n.drawn==null&&(Ot=null,t.move({k:"draw"}),t.sfx.click()),!0;if(e.closest("#slayPass"))return n.turn===s&&n.drawn!=null&&(Ot=null,t.move({k:"pass"}),t.sfx.click()),!0;const i=e.closest("#crownPick [data-color]");if(i&&Ot!==null)return t.move({k:"play",id:Ot,color:+i.dataset.color}),Ot=null,t.sfx.sparkle(),!0;const a=e.closest("#slayHand [data-card]");if(!a||a.hasAttribute("disabled"))return!!a;const r=+a.dataset.card,l=o.find(c=>c.id===r);return!l||n.turn!==s||!s1(l,n)||(l.c===4?(Ot=r,t.sfx.pop(),Hd&&Mu(Hd,t)):(Ot=null,t.move({k:"play",id:r}),t.sfx.click())),!0}},o1="#5a3d5c",Lu=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),PE=`<svg viewBox="0 0 48 48"><path d="M24 42 C8 30 2 22 7 13 C11 6 20 8 24 16 C28 8 37 6 41 13 C46 22 40 30 24 42 Z" fill="#ff4d94" stroke="${o1}" stroke-width="3" stroke-linejoin="round"/><path d="M16 16 Q20 12 22 18" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>`,AE=`<svg viewBox="0 0 48 48"><path d="M24 3 L29 17 H44 L32 26 L37 42 L24 33 L11 42 L16 26 L4 17 H19 Z" fill="#66d9e8" stroke="${o1}" stroke-width="3" stroke-linejoin="round"/><path d="M24 12 L26 18 H22 Z" fill="#fff" opacity=".8"/></svg>`,RE={id:"four",render(e,t){const n=t.table,s=n.view;if(!s||!Array.isArray(s.b)){e.innerHTML="";return}const o=n.you,i=o!==null&&s.turn===o&&n.phase==="play",a=new Set((s.line??[]).map(([m,v])=>m+":"+v)),r=s.last;let l="";for(let m=0;m<7;m++){const v=s.b[m];let w="";for(let b=5;b>=0;b--){const _=b<v.length?v[b]:null,P=a.has(m+":"+b)?" hot":"",$=r&&r.col===m&&r.row===b?" just":"";w+=`<span class="fourCell${_===0?" heart":_===1?" star":""}${P}${$}">${_===0?PE:_===1?AE:""}</span>`}const g=i&&v.length<6;l+=`<button type="button" class="fourCol" data-col="${m}" ${g?"":"disabled"} aria-label="Drop in column ${m+1}">${w}<span class="dropHint">${g?"▼":""}</span></button>`}const c=n.phase==="play"&&s.turn>=0,d=c?n.players[s.turn]:"",f=c?i?"Your turn!":`${Lu(t.name(d))}'s turn`:"",h=o===0?"You are <b>pink hearts</b>":o===1?"You are <b>aqua stars</b>":"Pink hearts and aqua stars",u=m=>m===0?"♥":"★",y=n.players.map((m,v)=>`<div class="playerChip ${s.turn===v?"isTurn":""}"><span class="chipFace">${t.face(m)}</span><b>${Lu(t.name(m))} ${u(v)}</b>${t.away(m)?'<i class="awayBadge">away</i>':""}</div>`).join("");e.innerHTML=`<div class="fourPlay">
      ${f?`<div class="whose ${i?"yours":""}" id="whoseTurn">${f}</div>`:""}
      <div class="fourChips">${y}</div>
      <p class="fourLegend">${h}</p>
      <div class="fourBoard" id="fourBoard">${l}</div>
    </div>`},handle(e,t){const n=e.closest(".fourCol");if(!n)return!1;const s=t.table.view,o=t.table.you;if(n.hasAttribute("disabled")||!s||o===null||s.turn!==o||t.table.phase!=="play")return!0;const i=+n.dataset.col;return!Number.isInteger(i)||s.b[i].length>=6||(t.move({col:i}),t.sfx.click()),!0}},Eu={slay:TE,four:RE},rr=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),CE={notHere:"Come into the clubhouse first!",taken:"Someone is sitting there!",playing:"You are already in this game!",playingElsewhere:"Finish your other game first!",notHost:"Waiting for the host…",needMore:"Play with friends on your street",tooMany:"That table is full!",notPlaying:"The game has not started!",notPlayer:"Sit down to play!",illegal:"You can't play that!",notAway:"She is still here!",tooSoon:"Give her a moment!",notSeated:"You are not at this table!",noMove:"No move to play!"};function IE(e){const t=document.getElementById("tableOverlay");let n=null,s="",o=0;const i=w=>w.away==null?0:w.away+Math.max(0,Date.now()-(w.receivedAt??Date.now())),a=()=>{o&&(clearInterval(o),o=0)},r=w=>{const g=!!w&&w.phase==="play"&&w.away!=null&&n!==null;g&&!o&&(o=window.setInterval(()=>f(),1e3)),g||a()},l=()=>e.hood(),c=()=>{const w=l();return!w||n===null?null:w.tables.get(n)??null},d=w=>{const g=l();return{table:w,me:g.pid,name:b=>g.players.get(b)?.nickname??"friend",face:b=>{const _=g.players.get(b)?.look;return _?nf(xt(_)):""},move:b=>g.tbl({op:"move",tb:w.tb,m:b}),away:b=>{if(b===g.pid)return!1;const _=g.players.get(b);if(_&&!_.online)return!0;const P=g.presence.get(b);return!P||P.where!=="gameroom"},toast:e.toast,sfx:e.sfx}};t.addEventListener("click",w=>{const g=w.target;if(g.closest("#tblBack")){u(),e.sfx.swish();return}if(g.closest("#tblLeave")){y();return}if(g.closest("#tblStart")){m();return}if(g.closest("#tblNudge")){v();return}const b=c();b&&Eu[b.game]?.handle(g,d(b))});function f(){const w=l(),g=c();if(!w||!g){t.classList.add("hidden"),t.innerHTML="",a();return}const b=P0[g.game],_=w.pid,P=g.seats.includes(_),$=g.seats.filter(Boolean).length,x=g.phase==="play"&&g.you!==null&&g.view&&g.view.turn===g.you,D=g.view?.winPid??null;let W="";if(g.phase==="over"){const I=D?w.players.get(D)?.nickname??"Friend":"";g.game==="slay"?W=D?D===_?"You slayed!":`${rr(I)} slayed!`:"It's a tie!":W=g.view?.draw||!D?"It's a tie!":D===_?"You got four!":`${rr(I)} got four!`;const B=g.tb+":"+g.seq;D===_&&s!==B&&(s=B,e.confetti(),e.sfx.sparkle())}const Q=i(g),q=g.phase==="play"&&P&&Q>=hb&&g.you!==null&&!!g.view&&g.view.turn!==g.you&&g.view.turn>=0,se=g.phase!=="play"&&g.host===_&&$>=b.minPlayers&&$<=b.maxPlayers,Me=P&&g.phase==="lobby"&&g.host!==_&&$>=b.minPlayers,Ke=P&&g.phase==="lobby"&&$<b.minPlayers;t.classList.remove("hidden"),t.dataset.tb=String(g.tb),t.dataset.phase=g.phase,t.dataset.game=g.game,t.dataset.you=g.you===null?"":String(g.you),t.innerHTML=`<div class="tblCard ${x?"yourTurn":""} game-${g.game}">
      <div class="tblTop"><h2>${rr(b.name)}</h2><div class="seatDots">${g.seats.map(I=>`<i class="${I?"on":""} ${I===_?"me":""}"></i>`).join("")}</div></div>
      ${W?`<div class="winWrap"><div class="winBanner" id="winBanner">${W}</div></div>`:""}
      <div id="tblStage"></div>
      <div class="tblBar">
        ${se?'<button type="button" id="tblStart">Start</button>':""}
        ${Me?'<p class="tblWait">Waiting for the host…</p>':""}
        ${q?'<button type="button" id="tblNudge">Play for her</button>':""}
        <button type="button" id="tblBack">Back to room</button>
        <button type="button" id="tblLeave">Leave table</button>
      </div>
      ${Ke?'<p class="tblWait" id="needFriend">Play with friends on your street</p>':""}
    </div>`;const Ie=t.querySelector("#tblStage");g.phase==="lobby"||!g.view?Ie.innerHTML=h(g,w,_):Eu[g.game]?.render(Ie,d(g)),r(g)}function h(w,g,b){return`<div class="lobby">${w.seats.map((_,P)=>`<div class="lobbySeat ${_?"filled":""} ${_===b?"me":""}">
      <span>${P+1}</span><b>${_?rr(g.players.get(_)?.nickname??"friend"):"Empty"}</b>
      ${_&&_===w.host?"<i>host</i>":""}${_===b?"<i>you</i>":""}
    </div>`).join("")}</div>`}function u(){n=null,a(),t.classList.add("hidden"),t.innerHTML=""}function y(){const w=l(),g=c();w&&g&&g.seats.includes(w.pid)&&w.tbl({op:"leave",tb:g.tb}),e.sfx.click(),u()}function m(){const w=l(),g=c();w&&g&&(w.tbl({op:"start",tb:g.tb}),e.sfx.sparkle())}function v(){const w=l(),g=c();w&&g&&(w.tbl({op:"nudge",tb:g.tb}),e.sfx.click())}return{open(w){n=w,f()},close:u,refresh:f,fail(w,g){e.toast(CE[g]||"Try that again!"),e.sfx.pop(),n===w&&f()},isOpen:()=>n}}const i1="/cozy-preview/assets/rug-zTS04c1f.webp",OE=Object.freeze(Object.defineProperty({__proto__:null,default:i1},Symbol.toStringTag,{value:"Module"})),a1="/cozy-preview/assets/pack~bean-bag-m3eBc9mA.webp",BE=Object.freeze(Object.defineProperty({__proto__:null,default:a1},Symbol.toStringTag,{value:"Module"})),r1="/cozy-preview/assets/pack~sv-bean-bag-TrtltuSt.webp",zE=Object.freeze(Object.defineProperty({__proto__:null,default:r1},Symbol.toStringTag,{value:"Module"})),DE=120,HE=192,WE=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);let ae=null,ws=null,On=null,Su=!1;const l1=1020,VE=e=>!!e&&!document.body.classList.contains("phone")&&e.clientHeight>e.clientWidth+40,Os=()=>{const e=document.getElementById("gameroom"),t=e?.clientHeight||600;return VE(e)?Math.min(t/Jo,e.clientWidth/l1):t/Jo},_r=()=>ws;function ci(){const e=ae?.hood();if(!e)return null;for(const[t,n]of e.tables){const s=n.seats.indexOf(e.pid);if(s>=0){const o=Ra(Number(t))[s];return{tb:Number(t),seat:s,x:o.x,y:o.y}}}return null}function UE(){const e=ae?.hood();if(!e)return!1;for(const[t,n]of e.players)if(t!==e.pid&&n.online)return!0;return!1}function QE(e){if(ae=e,ws=IE({hood:e.hood,toast:e.toast,confetti:()=>ig(),sfx:e.sfx}),Su)return ws;Su=!0;const t=document.getElementById("grWorld");return t.addEventListener("click",qE),t.addEventListener("pointerdown",n=>{n.target.closest(".grChair, .grTable, .grDoor, .pet")&&n.stopPropagation()}),ws}function Ff(){if(!ae)return;const e=Os(),t=document.getElementById("grWorld"),n=l=>l*e+"px";t.style.width=xa*e+"px",t.style.height=Jo*e+"px",t.style.setProperty("--sc",String(e));const s=document.getElementById("gameroom"),o=(s?.clientHeight||0)-6-Jo*e,i=o>1?Math.round(o*.55):0,a=o>1?Math.ceil(o-i)+6:0;t.style.marginTop=i?i+"px":"";let r='<div class="sceneArtHost" id="grSceneArt"></div>'+T9();i&&(r+=`<div class="grExtWrap" style="top:${-i}px;height:${i}px">${cu("top",i/e)}</div>`),s&&(s.style.background=i?"linear-gradient(180deg, #ffe0f2 0 50%, #d27399 50%)":""),a&&(r+=`<div class="grExtWrap" style="top:100%;height:${a}px">${cu("bottom",a/e)}${GE(e,a,s?.clientWidth||0)}</div>`),r+=`<button class="grDoor" data-gr="map" aria-label="Back to the map" style="left:${n(78)};top:${n(268)};width:${n(86)};height:${n(170)}"></button>`,po.forEach((l,c)=>{const d=l.seats>=6?560:l.seats>=4?440:340;r+=`<button class="grTable" data-tb="${c}" aria-label="${P0[l.game].name} table" style="left:${n(l.x-d/2)};top:${n(456)};width:${n(d)};height:${n(70)}"></button>`,Ra(c).forEach((f,h)=>{const u=76*e,y=72*e,m=Math.max(u,44),v=Math.max(y,44),w=(f.x-38)*e-(m-u)/2,g=(f.y-16)*e-(v-y)/2;r+=`<button class="grChair" data-tb="${c}" data-seat="${h}" aria-label="Empty chair" style="left:${w}px;top:${g}px;width:${m}px;height:${v}px"></button>`})}),r+='<div class="savatars" id="gavatars"></div>',t.innerHTML=r,mo(document.getElementById("grSceneArt"),"clubhouse",t),Xi()}function Xi(){if(!ae||ae.view()!=="gameroom")return;const e=document.getElementById("gavatars");if(!e)return;const t=Os(),n=new Set;for(const i of NE()){n.add(i.key);let a=e.querySelector(`.savatar[data-pid="${i.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(i.mine?"mine":"other"),a.dataset.pid=i.key,e.appendChild(a),i.mine&&ZE(a));const r=JSON.stringify(i.look)+i.name+(i.away?":away":"");if(a.dataset.look!==r){const h=a.querySelector(".bubble");a.innerHTML=`<div class="inner">${xt(i.look)}</div>${i.name?`<div class="nametag">${WE(i.name)}${i.away?'<i class="awayBadge">away</i>':""}</div>`:""}`,h&&a.appendChild(h),a.dataset.look=r}const l=(go[i.look.size]??1)*t*.95,c=DE*l,d=HE*l,f=i.seated?i.y-8:i.y;Dl(a,i.x*t-c/2+"px",f*t-d+"px"),a.style.width=c+"px",a.style.height=d+"px",a.style.zIndex=String(100+Math.round(i.y)),a.classList.toggle("flipped",i.flip),a.classList.toggle("away",i.away),a.classList.toggle("seated",i.seated),Pa(a,i.look,i.mine)}e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),ae.refreshNear();const s=ae.hood();document.querySelectorAll("#grWorld .grChair").forEach(i=>{const a=s?.tables.get(+i.dataset.tb)?.seats[+i.dataset.seat];i.classList.toggle("taken",!!a);const r=a?s.players.get(a)?.nickname:"";i.setAttribute("aria-label",r?r+" is sitting":"Empty chair")});const o=document.getElementById("grSolo");o&&o.classList.toggle("hidden",UE())}function NE(){const e=[],t=ae.hood();if(t){const n=new Map;for(const[a,r]of t.tables)r.seats.forEach((l,c)=>{l&&n.set(l,Ra(Number(a))[c])});const s=[...t.presence.entries()],o=ae.myPres();o&&s.push([t.pid,o]);const i=new Set;for(const[a,r]of s){if(r.where!=="gameroom")continue;const l=t.players.get(a);if(!l)continue;i.add(a);const c=n.get(a);e.push({key:a,look:l.look,name:l.nickname,x:c?.x??r.x,y:c?.y??r.y,flip:r.flip,mine:a===t.pid,away:!1,seated:!!c})}for(const[a,r]of n){if(i.has(a))continue;const l=t.players.get(a);l&&e.push({key:a,look:l.look,name:l.nickname,x:r.x,y:r.y,flip:!1,mine:!1,away:!0,seated:!0})}}else{const n=ae.solo();if(n?.where==="gameroom"){const s=ae.soloLook();e.push({key:"solo",look:s.look,name:"",x:n.x,y:n.y,flip:n.flip,mine:!0,away:!1,seated:!1})}}return e}function qE(e){if(!ae||ae.view()!=="gameroom")return;const t=e.target,n=t.closest(".savatar");if(n){const c=ae.hood(),d=n.dataset.pid;if(c&&d){for(const[f,h]of c.tables)if(h.seats.includes(d)){ws?.open(Number(f));return}}return}if(t.closest('[data-gr="map"]')){ae.goMap();return}const s=t.closest(".grChair");if(s){jE(+s.dataset.tb,+s.dataset.seat);return}const o=t.closest(".grTable");if(o){if(!ae.hood()){c1();return}ws?.open(+o.dataset.tb),ae.sfx.click();return}if(t.closest(".pet")||ci())return;const i=document.getElementById("grWorld").getBoundingClientRect(),a=Os(),r=(e.clientX-i.left)/a,l=(e.clientY-i.top)/a;l<430||(On={x:Math.max(60,Math.min(xa-60,r)),y:Math.max(470,Math.min(590,l))})}function jE(e,t){if(!ae)return;const n=ae.hood();if(!n){c1();return}const s=n.tables.get(e)?.seats[t];if(s&&s!==n.pid){ae.toast((n.players.get(s)?.nickname??"Someone")+" is sitting there!"),ae.sfx.pop(),ws?.open(e);return}On=null,n.tbl({op:"sit",tb:e,seat:t});const o=Ra(e)[t];ae.setPres({where:"gameroom",x:o.x,y:Math.max(470,Math.min(590,o.y)),flip:!1}),ws?.open(e),ae.sfx.click()}function c1(){if(!ae)return;const e=document.getElementById("grSolo");e&&(e.classList.remove("hidden"),e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),ae.toast("Play with friends on your street"),ae.sfx.pop()}function FE(e){if(!ae||ae.view()!=="gameroom"||!On)return;if(ci()){On=null;return}const t=ae.hood()?ae.myPres():ae.solo();if(!t||t.where!=="gameroom"){On=null;return}const n=On.x-t.x,s=On.y-t.y,o=Math.hypot(n,s);if(o<4){On=null;return}const i=Math.min(o,300*e),a={where:"gameroom",x:t.x+n/o*i,y:t.y+s/o*i,flip:Math.abs(n)>2?n<0:t.flip};ae.setPres(a);const r=Os(),l=document.getElementById("grScroll"),c=a.x*r-l.scrollLeft;(c<l.clientWidth*.22||c>l.clientWidth*.78)&&(l.scrollLeft=a.x*r-l.clientWidth/2)}function ZE(e){e.addEventListener("pointerdown",t=>{if(!ae||ci())return;const n=ae.hood()?ae.myPres():ae.solo();if(!n||n.where!=="gameroom")return;t.preventDefault(),t.stopPropagation(),On=null;const s=Os(),o=document.getElementById("grWorld"),i=document.getElementById("grScroll"),a=w=>{const g=o.getBoundingClientRect();return{x:(w.clientX-g.left)/s,y:(w.clientY-g.top)/s}},r=a(t),l={x:n.x-r.x,y:n.y-r.y};let c=t,d=0,f=n.x,h=!1;const u=w=>{const g=ae.hood()?ae.myPres():ae.solo();if(!g||g.where!=="gameroom")return;const b=a(w),_=Math.max(60,Math.min(xa-60,b.x+l.x)),P=Math.max(470,Math.min(590,b.y+l.y));if(!h&&Math.hypot(_-g.x,P-g.y)<6)return;h=!0;const $=Math.abs(_-f)>3?_<f:g.flip;Math.abs(_-f)>3&&(f=_),ae.setPres({where:"gameroom",x:_,y:P,flip:$})},y=()=>{const w=i.getBoundingClientRect(),g=c.clientX<w.left+70?-12:c.clientX>w.right-70?12:0;g&&h&&(i.scrollLeft+=g,u(c)),d=requestAnimationFrame(y)};d=requestAnimationFrame(y),e.classList.add("lifted"),ae.sfx.pick();const m=w=>{w.pointerId===t.pointerId&&(c=w,u(w))},v=w=>{w.pointerId===t.pointerId&&(cancelAnimationFrame(d),window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",v),e.classList.remove("lifted"),h&&ae.sfx.drop())};window.addEventListener("pointermove",m),window.addEventListener("pointerup",v)})}function GE(e,t,n){if(t<120)return"";const s=n?Math.min(po[0].x*e,n/2):po[0].x*e,o=Math.min(560*e*1.2,t*1.7),i=o*306/960,a=Math.max(8,(t-i)*.45),r=o*.26,l=r*.78,c=(d,f,h,u,y=!1)=>`<img class="grDecor" src="${d}" alt="" aria-hidden="true" draggable="false" style="left:${f}px;top:${h}px;width:${u}px${y?";transform:scaleX(-1)":""}">`;return`<div class="grDecor grRug" aria-hidden="true" style="left:${s-o/2}px;top:${a}px;width:${o}px;height:${i}px"><img src="${i1}" alt="" draggable="false" style="width:${o}px;margin-top:${-o*634/960}px"></div>`+c(a1,s-o/2-r*.35,a+i*.45-l*.6,r)+c(r1,s+o/2-r*.65,a+i*.45-l*.6,r*1.02,!0)}let $r=!1;const Oi=j9(),ee=M0();ee.born&&typeof navigator<"u"&&!navigator.webdriver&&!ee.get().baby&&ee.dispatch({type:"baby/meet",now:Date.now()});let Re=ee;const d1=[],Tu=new WeakSet;function f1(e){Tu.has(e)||(Tu.add(e),e.subscribe((t,n)=>{Re===e&&d1.forEach(s=>s(t,n))}))}f1(ee);const S={get:()=>Re.get(),dispatch(e){Re.dispatch(e)},subscribe:e=>{d1.push(e)}},he=St,Ce=Dn,wo=390;let G=1e3;const bo=()=>Math.max(0,he-G),Ca=375,p1=(e,t)=>e.wall?Math.min(t,Ca):t,h1=12,xo=(e,t)=>e.wall?t:Math.min(t,Ce-h1),Bs=120,_n=192,Zf=[{id:"living",name:"Living Room",color:"#ff8fab"},{id:"bedroom",name:"Bedroom",color:"#b388d6"},{id:"kitchen",name:"Kitchen",color:"#5cc985"},{id:"salon",name:"Salon",color:"#f0a0d8"},{id:"nursery",name:"Nursery",color:"#9ad7f5"},{id:"bathroom",name:"Bathroom",color:"#7ec8d6"}],u1=e=>Zf.find(t=>t.id===e)?.color??"#ccc",Gf=Rx();h5(Mn,de);const Ss=[{id:"__people",name:"People",icon:"",kind:"people"},...["furniture","decor","plants","food","pets"].map((e,t)=>({id:e,name:e,icon:["armchair","balloon","flowers","donut","cat"][t],kind:"cat"}))];Ss.push({id:"secrets",name:"Secrets",icon:"egg:chloe-starlamp",kind:"cat"});for(const e of Mn)Ss.some(t=>t.kind==="cat"&&t.id===e.cat)||Ss.push({id:e.cat,name:e.cat,icon:e.kind,kind:"cat"});for(const e of Mn)e.pack&&!km(e)&&!Ss.some(t=>t.id==="pack:"+e.pack)&&Ss.push({id:"pack:"+e.pack,name:ag(e.pack),icon:e.kind,kind:"pack"});const Oc=e=>Mn.filter(t=>KL(t,e,S.get().currentRoom,Kf==="all",Ol())),YE=["#ffd6e0","#d9ccff","#cdf3dc","#cfe8ff","#fff1b8","#ffe0c7","#ffffff","#f6c1ff"],KE=["#e8b98a","#f2d0a4","#c99366","#ffe7a8","#bfe3d0","#d6d6f5","#ffc8dd","#9fb4c7"],Nt={paint:'<svg viewBox="0 0 48 48"><path d="M10 30 L28 12 L36 20 L18 38 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M28 12 L34 6 L42 14 L36 20" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><circle cx="12" cy="40" r="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/></svg>',shirt:'<svg viewBox="0 0 48 48"><path d="M16 8 L6 16 L11 24 L15 21 V42 H33 V21 L37 24 L42 16 L32 8 Q24 14 16 8 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',soundOn:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 17 Q37 24 32 31 M36 12 Q45 24 36 36" fill="none" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ddd" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M33 19 L43 29 M43 19 L33 29" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',flip:'<svg viewBox="0 0 48 48"><path d="M24 6 V42" stroke="#5a3d5c" stroke-width="3" stroke-dasharray="4 4"/><path d="M18 12 L6 36 H18 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M30 12 L42 36 H30 Z" fill="#fff" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',front:'<svg viewBox="0 0 48 48"><rect x="6" y="6" width="22" height="22" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="18" y="18" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',back:'<svg viewBox="0 0 48 48"><rect x="18" y="18" width="24" height="24" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="6" y="6" width="22" height="22" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',trash:'<svg viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="28" rx="5" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3"/><rect x="8" y="9" width="32" height="7" rx="3.5" fill="#ffadad" stroke="#5a3d5c" stroke-width="3"/><path d="M20 21 V35 M28 21 V35" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',smaller:'<svg viewBox="0 0 48 48"><rect x="16" y="16" width="16" height="16" rx="4" fill="#bde0fe" stroke="#5a3d5c" stroke-width="3"/><path d="M8 24 H14 M34 24 H40" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',bigger:'<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M24 6 V11 M24 37 V42 M6 24 H11 M37 24 H42" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>'},XE='<svg viewBox="0 0 48 48"><circle cx="17" cy="18" r="8" fill="#ffd166" stroke="#5b3d5c" stroke-width="3"/><circle cx="32" cy="20" r="7" fill="#ff8fab" stroke="#5b3d5c" stroke-width="3"/><path d="M5 42 Q6 28 17 28 Q28 28 29 42 Z" fill="#8ecae6" stroke="#5b3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M24 42 Q25 30 32 30 Q42 30 43 42 Z" fill="#c9a0dc" stroke="#5b3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',JE='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 15 H37 M11 24 H37 M11 33 H37" fill="none" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',eS='<svg class="mailGlyph" viewBox="0 0 48 48" aria-hidden="true"><g transform="translate(0 2)"><rect x="6" y="14" width="36" height="24" rx="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/><path d="M6 16 L24 30 L42 16" fill="none" stroke="#5a3d5c" stroke-width="3"/><path d="M34 12 V6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M34 6 H44 L40 10 L44 14 H34 Z" fill="#ff6b6b" stroke="#5a3d5c" stroke-width="2"/></g></svg>',g1='<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#fff3b0" stroke="#5a3d5c" stroke-width="3"/><path d="M24 15 V33 M15 24 H33" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',Pu='<svg viewBox="0 0 40 40" width="28" height="28"><path d="M12 36 L18 8 M28 36 L22 8 M20 30 V38" stroke="#a86f3e" stroke-width="3" stroke-linecap="round"/><rect x="8" y="8" width="24" height="18" rx="3" fill="#fff" stroke="#5a3d5c" stroke-width="2.5"/><circle cx="16" cy="16" r="3" fill="#ff8fab"/><path d="M12 24 L20 17 L28 24" fill="#69db7c" stroke="#5a3d5c" stroke-width="1.5" stroke-linejoin="round"/></svg>',tS=document.getElementById("app");tS.innerHTML=`
<div class="top">
  <div class="tabs" id="tabs"></div>
  <div class="minimap" id="minimap" aria-label="Room map"><div class="mmWall" id="mmWall"></div><div class="mmFloor" id="mmFloor"></div><div id="mmDots"></div><div class="mmView" id="mmView"></div></div>
  <div class="streetTitle" id="streetTitle">Our Neighborhood</div>
  <div class="tools">
    <button class="round hoodOnly" id="btnChat" aria-label="Talk">${zt.chat}<span class="badge" id="chatBadge"></span></button>
    <button class="round homeBtn" id="btnHome" aria-label="Home">${zt.home}</button>
    <button class="round barnOnly" id="btnLeavePark" aria-label="Go outside">${E4}</button>
    <button class="round rideOnly" id="btnHopOff" aria-label="Hop off the horse">${k9}</button>
    <button class="round mapBtn" id="btnMap" aria-label="Map">${tf}<span class="badge" id="mapBadge"></span></button>
    <button class="round" id="btnMenu" aria-label="Menu" aria-expanded="false">${JE}<span class="badge" id="menuBadge"></span></button>
  </div>
</div>
<div class="menuPop hidden" id="menuPop">
  <div class="menuCard" role="dialog" aria-label="Menu">
    <button type="button" class="close" id="menuClose" aria-label="Close">✕</button>
    <p class="menuGroup">My stuff</p>
    <button type="button" class="menuRow photoRow" id="btnPhoto" aria-label="Take a photo"><span class="mIco">📸</span><span class="mLabel">Take a photo</span></button>
    <button type="button" class="menuRow" id="btnPets" aria-label="Pets"><span class="mIco">${J0}</span><span class="mLabel">Pets</span></button>
    <button type="button" class="menuRow" id="btnDress" aria-label="Characters"><span class="mIco">${Nt.shirt}</span><span class="mLabel">Characters</span></button>
    <button type="button" class="menuRow" id="btnStudio" aria-label="Art Studio"><span class="mIco">${Pu}</span><span class="mLabel">Art Studio</span></button>
    <button type="button" class="menuRow" id="btnPaint" aria-label="Colors"><span class="mIco">${Nt.paint}</span><span class="mLabel">Wall &amp; floor colors</span></button>
    <button type="button" class="menuRow" id="secrets" aria-label="Surprises, 0 of 5"><span class="mIco secGift">🎁</span><span class="mLabel"><span class="secWord">Surprises </span><span class="secCount">0/5</span></span></button>
    <p class="menuGroup houseGroup">House</p>
    <button type="button" class="menuRow lockRow" id="btnLock" aria-label="Lock my house"><span class="mIco" id="lockIco">${zt.lockOff}</span><span class="mLabel" id="lockLabel">Lock my house</span></button>
    <button type="button" class="menuRow mailRow" id="btnMail" aria-label="Mailbox"><span class="mIco">${eS}</span><span class="mLabel">Mailbox</span><span class="menuNew" id="mailNew"></span></button>
    <!-- Day / Night / Auto. The clock stays on Auto until she taps. -->
    <div id="menuDaySlot" class="menuSlot" hidden></div>
    <p class="menuGroup streetGroup">Street</p>
    <button type="button" class="menuRow grownRow" id="btnParent" aria-label="Grown-ups"><span class="mIco">${zt.shield}</span><span class="mLabel">Grown-ups</span></button>
    <button type="button" class="menuRow soloLeave" id="btnSolo" aria-label="Play in my own house"><span class="mIco">${zt.solo}</span><span class="mLabel">Play in my own house</span></button>
    <button type="button" class="menuRow friendRow" id="btnHood" aria-label="Friends"><span class="mIco">${zt.street}</span><span class="mLabel">Friends</span></button>
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
        <button data-a="smaller" aria-label="Smaller">${Nt.smaller}</button><button data-a="bigger" aria-label="Bigger">${Nt.bigger}</button><button data-a="flip" aria-label="Flip">${Nt.flip}</button><button data-a="front" aria-label="Bring forward">${Nt.front}</button><button data-a="back" aria-label="Send back">${Nt.back}</button><button data-a="delete" class="danger" aria-label="Put away">${Nt.trash}</button>
      </div>
    </div>
    <button class="nudge left" id="nudgeL" aria-label="Look left"><svg viewBox="0 0 40 40"><path d="M24 10 L14 20 L24 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="nudge right" id="nudgeR" aria-label="Look right"><svg viewBox="0 0 40 40"><path d="M16 10 L26 20 L16 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </div>
  <button type="button" class="artFab" id="artFab" aria-label="Art Studio: paint a picture">${Pu}<span>Paint</span></button>
  <div class="bin" id="bin">${Nt.trash}</div>
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
<div class="street mapView hidden" id="street"><div class="mapSky">${ay}</div><div class="mapMeadow">${ry}</div><button class="mailCue" id="mailCue" type="button">You've got mail!</button><div class="mapWorld" id="mapWorld"></div></div>
<div class="chatTray hidden" id="chatTray"></div>
<div class="sheet hidden" id="sheet"><div class="card" id="card"></div></div>
<div class="fx" id="fx"></div>
<div id="toastLane"></div>
<div class="phoneNote" id="phoneNote"><div class="card"><h2>Turn sideways</h2><p>Turn your phone sideways for more room to play!</p><button class="phoneOk" id="phoneOk" type="button">OK!</button></div></div>
<div class="elsewhere hidden" id="elsewhere"><div class="card"><h2>You're playing on another screen</h2><p>This screen can rest. Your house is safe.</p><button class="playHere" id="elsewhereGo" type="button">Tap to play here!</button></div></div>
<div id="skyMount"></div>`;const L=e=>document.getElementById(e);document.body.classList.add("is-preview"),document.body.insertAdjacentHTML("beforeend",'<div class="previewRibbon">PREVIEW</div>');const Y=L("stage"),Yf=L("world"),X=L("layer"),ne=L("toolbar"),xr=L("bin");let Ne=null,ze=S.get().characters[0]?.id??null,Bt="furniture",Kf="",Wd="",nS=Date.now()%1e5;const Kr=e=>`${e}-${Date.now().toString(36)}${(++nS).toString(36)}${Math.random().toString(36).slice(2,5)}`,mt="__me";let k=null,R="house",qe=!1,me="",Xr=new Map,m1=!1,y1=()=>{};const Se=Nv(L("modeToggle"),{ownHouse:()=>!k||!me||me===k.myHouseId(),onChange:()=>{m1&&(fi.matches?Ps():zs()),y1()}}),Mr=zv({send:(e,t,n,s)=>k?.sendMail(e,t,n,s),read:(e,t)=>k?.readMail(e,t),drop:(e,t)=>k?.dropMail(e,t),houseOf:e=>[...k?.players.values()??[]].find(t=>t.pid===e)?.houseId??"",houseName:e=>k?.houses.get(e)?.meta.name??"My House",lettersOf:e=>k?.houses.get(e)?.confirmed.mailbox?.letters??[],mine:e=>!!k&&k.houses.get(e)?.meta.ownerId===k.pid,toast:F,openOwn:()=>{const e=k?.myHouseId();e&&gp(e)},freeType:()=>!k||D0(k.settings)});Se.sync(!0);const no=new Map,ga={};let ie=ii,Qo=0;const w1=new Set,Xf=()=>!w1.has(S.get().currentRoom),di=()=>{w1.add(S.get().currentRoom)};m1=!0;let ma=null;const Ul=()=>{cancelAnimationFrame(Qo),ma=null},ei=e=>Math.max(0,Math.min(bo(),e));function Je(e){ie=ei(e),ga[S.get().currentRoom]=ie,Yf.style.transform=`translate3d(${-ie}px,0,0)`,L("nudgeL").classList.toggle("off",ie<=1),L("nudgeR").classList.toggle("off",ie>=bo()-1);const t=L("mmView");t.style.left=ie/he*100+"%",t.style.width=G/he*100+"%",Ne&&N1(S.get()),za(),Ba()}function Ql(e){cancelAnimationFrame(Qo),e=ei(e),ma=e;const t=()=>{const n=e-ie;if(Math.abs(n)<.5){Je(e),ma=null;return}Je(ie+n*.18),Qo=requestAnimationFrame(t)};Qo=requestAnimationFrame(t)}const yt=()=>Y.getBoundingClientRect().width/G,sS="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)",fi=window.matchMedia(sS);function oS(){const e=fi.matches;document.body.classList.toggle("phone",e),document.body.classList.toggle("phone-portrait",e&&window.matchMedia("(orientation: portrait)").matches);const t=L("stageWrap");for(const n of[L("nudgeL"),L("nudgeR")]){const s=e?t:Y;n.parentElement!==s&&s.appendChild(n)}}function b1(){const e=document.querySelector(".top");if(!e)return;const t=e.getBoundingClientRect(),n=document.body.classList.contains("phone")?t.bottom:t.height;document.documentElement.style.setProperty("--chrome-h",Math.ceil(n)+"px"),v1()}function v1(){const e=document.querySelector(".top");if(!e)return;const t=Math.ceil(e.getBoundingClientRect().bottom+16)+"px",n=document.getElementById("mailCue");n&&(n.style.top=t);const s=document.getElementById("toastLane");s&&(s.style.top=t)}function iS(){const e=document.documentElement,t=document.getElementById("app");if(!(document.body.classList.contains("phone")&&!document.body.classList.contains("phone-portrait"))){t.style.top="",t.style.height="",t.style.bottom="",e.style.removeProperty("--vvh"),e.style.removeProperty("--vvt");return}const s=window.visualViewport,o=Math.round(s?s.height:window.innerHeight),i=Math.round(s?s.offsetTop:0);e.style.setProperty("--vvh",o+"px"),e.style.setProperty("--vvt",i+"px"),t.style.top=i+"px",t.style.height=o+"px",t.style.bottom="auto"}function zs(){oS(),iS(),b1();const e=L("stageWrap"),t=document.body.classList.contains("phone"),n=e.clientWidth,s=e.clientHeight,o=Math.max(1,s-ep());if(t?s>n*.85:s>n*.95){const r=n/Math.max(1,s);G=Math.round(Math.max(480,Math.min(860,Ce*r)))}else if(t){const r=n/Math.max(1,o);G=Math.round(Math.max(480,Math.min(he,Ce*r)))}else G=1e3;G=Jf(G),Y.style.width=G+"px",Y.style.height=Ce+"px";const a=Math.min(n/G,o/Ce);if(L1(a),Y.style.setProperty("--yard-sc",String(a||1)),t&&Y.style.setProperty("--fit",String(yt())),k1(),ie>bo())Je(ie);else{const r=L("mmView");r.style.left=ie/he*100+"%",r.style.width=G/he*100+"%"}dt(),!t&&R==="house"&&Xf()&&Pp(),!t&&R==="house"&&Ts(!1),gS(),R==="ranch"&&requestAnimationFrame(Jd),R==="gameroom"&&requestAnimationFrame(V2),pi(),t&&R==="ranch"&&rP(),_1(),$r&&Se.hint(),sc(),ps()}function k1(){const e=L("stageWrap"),t=document.body.classList.contains("phone")&&R==="house";for(const n of[L("nudgeL"),L("nudgeR")]){if(!t||n.parentElement!==e){n.style.marginTop="",n.style.left="",n.style.right="",n.style.top="";continue}const s=Y.getBoundingClientRect(),o=e.getBoundingClientRect(),i=(s.top+s.bottom)/2-o.top;n.style.top=i+"px",n.style.marginTop=-n.offsetHeight/2+"px",n.style.left="",n.style.right=""}}function _1(){document.body.classList.remove("secrets-chrome"),L("secrets")?.classList.remove("compact")}function dt(e=0){if(!document.body.classList.contains("phone"))return;if(R==="house"){$1();return}const t=R==="park"?"parkScroll":R==="ranch"?"ranchScroll":R==="gameroom"?"grScroll":"";if(!t)return;const n=document.getElementById(t);if(!n||n.clientWidth<20){e<8&&requestAnimationFrame(()=>dt(e+1));return}const s=n.querySelector(".savatar.mine")??n.querySelector(".savatar");if(!s){e<8&&requestAnimationFrame(()=>dt(e+1));return}rS(n,[s,...s.querySelectorAll(".nametag")])&&e<8?requestAnimationFrame(()=>dt(e+1)):aS()}function aS(){oc()&&(R==="gameroom"&&W2([...document.querySelectorAll(".neonSignArt")],document.getElementById("grScroll")),R==="ranch"&&!qe&&(U2(),Ap()))}function rS(e,t){const s=e.getBoundingClientRect(),o=Math.min(s.right,window.innerWidth)-12,i=Math.max(s.left,0)+12;let a=0,r=0;for(const c of t){const d=c.getBoundingClientRect();d.width<2||d.height<2||(a=Math.max(a,d.right-o),r=Math.max(r,i-d.left))}if(a<=1&&r<=1)return!1;const l=e.scrollLeft;return a>1&&r>1?e.scrollLeft-=r:a>1?e.scrollLeft+=a:e.scrollLeft-=r,Math.abs(e.scrollLeft-l)>.5}function $1(){Ts(!1)}function Au(e){let t=0;for(const n of e){const s=de[n.kind];!s||s.wall||(t=Math.max(t,s.w*Ge(n)))}return t}function lS(){if(R!=="house"||!Se.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return 0;const e=S.get().rooms,t=S.get().currentRoom;let n=Au(e[t]?.items??[]);if(t==="backyard")for(const o of Object.keys(e))o!=="backyard"&&(n=Math.max(n,Au(e[o].items)));if(n<40)return 0;const s=document.body.classList.contains("phone-portrait")?.7:.55;return Math.min(he,Math.ceil(n/s))}function Jf(e){const t=lS();return t&&e<t?t:e}function cS(){const e=Jf(G);if(e<=G+.5)return;G=e,Y.style.width=G+"px";const t=L("stageWrap"),n=Math.max(1,t.clientHeight-ep()),s=Math.min(t.clientWidth/G,n/Ce);if(L1(s),document.body.classList.contains("phone")&&Y.style.setProperty("--fit",String(s)),ie>bo())Je(ie);else{const o=L("mmView");o.style.left=ie/he*100+"%",o.style.width=G/he*100+"%"}Xf()&&R==="house"&&!document.body.classList.contains("phone")&&Pp()}let ya=null,wa=!1;function dS(){if(R!=="house"||!Se.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return null;const e=S.get();if(e.currentRoom==="backyard")return null;let t=null,n=ya;if(k&&Re!==ee){const a=ye();a&&a.where==="house"&&a.room===e.currentRoom&&(t=At(e.currentRoom,dn(k.pid,a),a).x,n||(n=dn(k.pid,a)?.item??null))}if(t===null){const a=e.characters.find(r=>r.id===ze&&r.room===e.currentRoom)??e.characters.find(r=>r.room===e.currentRoom);if(!a)return null;t=At(e.currentRoom,Ct(a),a).x,n||(n=Ct(a)?.item??null)}if(!n)return null;const s=e.rooms[e.currentRoom].items.find(a=>a.id===n),o=s&&de[s.kind];if(!s||!o)return null;const i=o.w*Ge(s)/2;return{minX:Math.min(t-100,s.x-i),maxX:Math.max(t+100,s.x+i)}}function Ts(e){if(R!=="house"||vo)return;if(S.get().currentRoom==="backyard"){Math.abs(ie-wd)>.5&&Je(wd),ps();return}if(wa)return;const t=dS();if(t){const v=t.maxX-t.minX;let w=ie;v+20*2>G?w=t.minX-20:(t.minX-20<w&&(w=t.minX-20),t.maxX+20>w+G&&(w=t.maxX+20-G)),w=Math.max(0,Math.min(bo(),w)),Math.abs(w-ie)>.5&&Je(w),ps();return}const n=document.querySelector("#layer .char.avatar.mine")??document.querySelector("#layer .char");if(!n)return;const s=yt()||1,o=Y.getBoundingClientRect(),i=8;let a=Math.min(o.right,window.innerWidth)-i,r=Math.max(o.left,0)+i;for(const m of["nudgeL","nudgeR"]){const v=L(m);if(!v||v.classList.contains("off")||v.offsetParent===null)continue;const w=v.getBoundingClientRect();w.width<2||w.height<2||(m==="nudgeL"?r=Math.max(r,w.right+6):a=Math.min(a,w.left-6))}a-r<48&&(a=Math.min(o.right,window.innerWidth)-i,r=Math.max(o.left,0)+i);const l=[n,...n.querySelectorAll(".nametag")];let c=0,d=0,f=1/0,h=-1/0;for(const m of l){const v=m.getBoundingClientRect();v.width<2||v.height<2||(c=Math.max(c,v.right-a),d=Math.max(d,r-v.left),f=Math.min(f,v.left),h=Math.max(h,v.right))}if(document.body.classList.contains("phone-portrait")&&f<1/0){const m=(f+h)/2-(r+a)/2;if(Math.abs(m)>3){Je(ie+m/s),ps();return}}const u=fS(n),y=A7({cam:ie,maxCam:bo(),kidX:u,overflowL:d,overflowR:c,scale:s,nudgeX:e});Math.abs(y.cam-ie)>.5&&Je(y.cam),e&&Math.abs(y.kidX-u)>.5&&pS(n,y.kidX),ps()}function fS(e){if(e.dataset.pid&&k){const t=e.dataset.pid===k.pid?ye():k.presence.get(e.dataset.pid);if(t&&t.where==="house")return t.x}return S.get().characters.find(t=>t.id===e.dataset.cid)?.x??0}function pS(e,t){if(e.dataset.pid&&k&&e.classList.contains("mine")){const o=ye();if(!o||o.where!=="house")return;nt({...o,x:t}),Rt();return}const n=e.dataset.cid;if(!n)return;const s=S.get().characters.find(o=>o.id===n);s&&S.dispatch({type:"char/move",id:n,room:S.get().currentRoom,x:t,y:s.y})}const hS={living:"Living",bedroom:"Bed",kitchen:"Kitchen",salon:"Salon",nursery:"Nursery",bathroom:"Bath"};function x1(){const e=R==="house",t=document.body.classList.contains("phone-portrait"),n=e&&!Se.isPlay(),s=e&&G+1<he,o=e&&(t?n:n||s);document.body.classList.toggle("show-minimap",o)}const uS='<svg class="tabIco" width="14" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M1.6 6 L8 1.4 L14.4 6 V10.8 H1.6 Z" fill="currentColor" stroke="#5b3d5c" stroke-width="1.4" stroke-linejoin="round"/><rect x="6.6" y="7" width="2.8" height="3.8" rx=".8" fill="#fff6ea" stroke="#5b3d5c" stroke-width="1"/></svg>';function M1(){return document.body.classList.contains("phone")}function gS(){const e=M1()?"c":"f";x1(),e!==Wd&&(Wd=e,I1(S.get()))}function Nl(){fi.matches?Ps():zs()}window.addEventListener("resize",Nl);window.addEventListener("resize",()=>requestAnimationFrame(sp));L("tabs").addEventListener("scroll",sp,{passive:!0});fi.addEventListener("change",Nl);if(typeof ResizeObserver<"u"){let e="";new ResizeObserver(()=>{const t=L("stageWrap"),n=t.clientWidth+"x"+t.clientHeight;n!==e&&(e=n,Nl())}).observe(L("stageWrap"))}let Ru="",Bc=!1;function Cu(){const e=L("stageWrap"),t=document.querySelector(".top"),n=document.querySelector(".tools"),s=r=>r?r.clientWidth+"x"+r.clientHeight:"0",o=window.visualViewport,i=o?Math.round(o.offsetTop)+"x"+Math.round(o.height)+"x"+Math.round(o.width):"",a=document.body.classList.contains("baby-card")?"c":"";return i+" "+s(e)+" "+s(t)+" "+s(n)+a}function ep(){const e=document.body;if(!e.classList.contains("baby-card")||!e.classList.contains("phone")||e.classList.contains("phone-portrait"))return 0;const t=document.querySelector(".babyCare"),n=t&&!t.hidden?t.getBoundingClientRect().height:0;return Math.ceil(8+(n>8?n:72)+8)}function L1(e){const t=ep(),n=L("stageWrap").clientHeight;Y.style.left="",t>0?Y.style.top=t+Math.max(0,n-t)/2+"px":Y.style.top="",Y.style.transform=`translate(-50%,-50%) scale(${e})`}function E1(){const e=L("modeToggle"),t=document.querySelector(".tools"),n=document.getElementById("modeDock"),s=document.querySelector(".drawerTop"),o=document.getElementById("roomFilter");if(!e||!t||!n||!s||!o)return!1;const i=document.body.classList.contains("phone"),a=i&&!document.body.classList.contains("phone-portrait"),r=!i&&window.matchMedia("(min-width: 900px)").matches,l=a?t:i||r?n:s;n.hidden=!(i&&!a)&&!r,n.classList.toggle("wideDock",r);let c=!1;const d=r?n:s;return o.parentElement!==d&&(r?n.appendChild(o):s.insertBefore(o,s.firstChild),c=!0),(e.parentElement!==l||r&&n.firstChild!==e)&&(a?t.insertBefore(e,t.firstChild):i||r?n.insertBefore(e,n.firstChild):s.insertBefore(e,s.firstChild),c=!0),c}function mS(){if(S.get().currentRoom==="backyard"||!document.body.classList.contains("phone-portrait")||!document.body.classList.contains("mode-play")||R!=="house")return;const e=L("stageWrap"),t=e.clientWidth,n=e.clientHeight;if(t<20||n<20||!(n>t*.85))return;const s=Math.min(he,Jf(Math.max(280,Math.min(860,Math.round(Ce*t/n)))));if(Math.abs(s-G)<2)return;G=s,Y.style.width=G+"px",Y.style.height=Ce+"px";const o=Math.min(t/G,n/Ce);if(Y.style.transform=`translate(-50%,-50%) scale(${o})`,Y.style.setProperty("--fit",String(yt())),ie>bo())Je(ie);else{const i=L("mmView");i.style.left=ie/he*100+"%",i.style.width=G/he*100+"%"}k1(),x1()}function Ps(){if(Bc||!fi.matches)return;const e=E1(),t=Cu()+(document.body.classList.contains("mode-play")?"p":"d");if(!(!e&&t===Ru)){Bc=!0;try{zs(),mS(),dt(),Ru=Cu()+(document.body.classList.contains("mode-play")?"p":"d")}finally{Bc=!1}}}if(typeof ResizeObserver<"u"){const e=new ResizeObserver(()=>Ps()),t=document.querySelector(".top");t&&e.observe(t),e.observe(L("stageWrap"));const n=document.querySelector(".tools");n&&e.observe(n)}window.visualViewport&&(window.visualViewport.addEventListener("resize",()=>Ps()),window.visualViewport.addEventListener("scroll",()=>Ps()));Y.addEventListener("scroll",()=>{Y.scrollLeft=0,Y.scrollTop=0});const Qe=(e,t)=>{const n=Y.getBoundingClientRect();return{x:(e-n.left)/n.width*G+ie,y:(t-n.top)/n.height*Ce}},Vd=(e,t)=>{const n=Y.getBoundingClientRect();return e>n.left&&e<n.right&&t>n.top&&t<n.bottom},Iu=(e,t)=>{const n=xr.getBoundingClientRect();return e>n.left-20&&e<n.right+20&&t>n.top-20&&t<n.bottom+20},Ia=e=>go[e.size]??1,vn=new Map;function tp(){return!k||Re===ee?!0:k.houses.get(me)?.meta.ownerId===k.pid}function ql(e){const t=de[e.kind];return!t||!Kn(e.kind)?null:{id:e.id,kind:e.kind,x:e.x,footY:xo(t,e.y),flip:!!e.flip,scale:Ge(e),w:t.w,h:Xe(t)}}function At(e,t,n){if(!t)return n;const s=S.get().rooms[e]?.items.find(a=>a.id===t.item),o=s&&ql(s);if(!o)return n;const i=m0(o).find(a=>a.n===t.n);return i?{x:i.x,y:i.y}:n}function ti(e,t,n=!1){const s=S.get(),o=[];for(const i of s.characters){if(i.id===e||i.room!==s.currentRoom)continue;const a=Ct(i);a&&o.push({item:a.item,n:a.n})}if(!n){const i=Dw(s.baby,s.currentRoom);i&&o.push(i)}if(k&&R==="house"){const i=(r,l)=>{if(r===t||l.where!=="house"||l.houseId!==me||l.room!==s.currentRoom)return;const c=dn(r,l);c&&o.push({item:c.item,n:c.n})};k.presence.forEach((r,l)=>i(l,r));const a=ye();a&&k.pid!==t&&i(k.pid,a)}return o}function S1(e,t){t?vn.set(e,t):vn.delete(e)}function Ji(e,t,n,s,o){const a=!k||Re===ee||!!k?.speaksSit;a?vn.delete("c:"+e):S1("c:"+e,o),a?S.dispatch({type:"char/move",id:e,room:t,x:n,y:s,seat:o}):S.dispatch({type:"char/move",id:e,room:t,x:n,y:s})}function Jr(e,t,n,s,o){const{seat:i,...a}=e;if(k&&!k.speaksSit){S1("p:"+k.pid,o?{item:o.id,pose:o.pose,n:o.n}:null),nt({...a,x:t,y:n,flip:s});return}k&&vn.delete("p:"+k.pid),nt(o?{...a,x:t,y:n,flip:s,seat:o}:{...a,x:t,y:n,flip:s})}function Ct(e){return e.seat?e.seat:vn.get("c:"+e.id)??null}function dn(e,t){return t.seat?{item:t.seat.id,pose:t.seat.pose,n:t.seat.n}:vn.get("p:"+e)??null}function el(e,t){const n=S.get(),s=document.elementsFromPoint(e,t),o=new Set;for(let i=0;i<s.length;i++){const a=s[i];if(!a||!a.closest)continue;const r=a.closest(".item");if(!r)continue;const l=r.dataset.id;if(!l||o.has(l))continue;o.add(l);const c=n.rooms[n.currentRoom].items.find(d=>d.id===l);if(c&&Kn(c.kind))return c}return null}function T1(e,t){const n=S.get(),s=document.elementsFromPoint(e,t),o=new Set;for(let i=0;i<s.length;i++){const a=s[i];if(!a||!a.closest)continue;const r=a.closest(".item");if(!r)continue;const l=r.dataset.id;if(!l||o.has(l))continue;o.add(l);const c=n.rooms[n.currentRoom].items.find(d=>d.id===l);if(c)return c}return null}function yS(e){const t=[];for(const n of["left","right"]){const s=e.held[n];s&&ln(s.kind)&&t.push({hand:n,kind:s.kind})}return t}function np(e,t,n,s){const o=S.get(),i=o.characters.find(r=>r.id===e);if(!i)return;const a=Mf({releaseX:t,releaseY:n,hit:s,items:o.rooms[o.currentRoom].items,occupied:ti(e),held:yS(i),seatPiece:r=>ql(r)});for(const r of a.releases)S.dispatch({type:"char/release",id:e,hand:r.hand,x:r.x,y:r.y});Ji(e,o.currentRoom,a.x,a.y,a.seat)}function jl(e,t,n){const s=ye();if(!s||!k||s.where!=="house")return;const o=S.get(),i=Mf({releaseX:e,releaseY:t,hit:n,items:o.rooms[o.currentRoom].items,occupied:ti(void 0,k.pid),held:[],seatPiece:r=>ql(r)}),a=i.seat?{id:i.seat.item,pose:i.seat.pose,n:i.seat.n}:null;Jr(s,i.x,i.y,s.flip,a)}function wS(e){const t=El(e);if(t)return"k-bed k-bed-"+t.clip;const n=e.toLowerCase();return/sofa|couch|loveseat/.test(n)?"k-sofa":/bench/.test(n)?"k-bench":/chair|stool|rocker/.test(n)?"k-chair":""}function bS(){const e=S.get(),t=new Map,n=(s,o)=>{const i=t.get(s);t.set(s,i===void 0?o:Math.max(i,o))};for(const s of e.characters){const o=s.room===e.currentRoom?Ct(s):null;o&&n(o.item,o.n)}if(k&&R==="house"){const s=(i,a)=>{const r=a.where==="house"&&a.houseId===me&&a.room===e.currentRoom?dn(i,a):null;r&&n(r.item,r.n)};k.presence.forEach((i,a)=>s(a,i));const o=ye();o&&s(k.pid,o)}return t}function vS(e,t){const n=Ia(e),s=zl(e,Il(Ct(e)?.pose))[t];let o=s.x;e.flip&&(o=100-o);const i=At(e.room,Ct(e),e);return{x:i.x+(o-50)/100*Bs*n,y:i.y-_n*n+s.y/160*_n*n}}function P1(e){const t=S.get();let n=null;for(const s of t.characters){if(s.room!==t.currentRoom)continue;const o=Ia(s),i=At(s.room,Ct(s),s),a=Math.abs(e.x-i.x)<Bs*o/2+25&&e.y>i.y-_n*o-25&&e.y<i.y+20;for(const r of["left","right"]){if(s.held[r])continue;const l=vS(s,r),c=Math.hypot(e.x-l.x,e.y-l.y);(a||c<75)&&(!n||c<n.d)&&(n={c:s,hand:r,d:c})}}return n}const A1=["none","radial-gradient(circle, rgba(255,255,255,.55) 7px, transparent 8px)","repeating-linear-gradient(90deg, rgba(255,255,255,.4) 0 26px, transparent 26px 52px)","linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%), linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%)"],R1="repeating-linear-gradient(90deg, rgba(90,61,92,.08) 0 3px, transparent 3px 125px), linear-gradient(rgba(0,0,0,.06), transparent 50%)",Ud=e=>`url('${e.replace(/'/g,"%27")}')`;function C1(e){const t=e.rooms[e.currentRoom],n=L("wall"),s=L("floor"),o=t.wallTile?Mh[t.wallTile]:void 0;n.style.backgroundColor=t.wallpaper,o?(n.style.backgroundImage=Ud(o.url),n.style.backgroundSize="220px auto",n.style.backgroundPosition="0 0"):(n.style.backgroundImage=A1[t.pattern]??"none",n.style.backgroundSize=t.pattern===1?"44px 44px":t.pattern===3?"60px 60px":"auto",n.style.backgroundPosition=t.pattern===3?"0 0, 30px 30px":"0 0");const i=t.floorTile?Mh[t.floorTile]:void 0;s.style.backgroundColor=t.floor,s.style.backgroundImage=i?`${Ud(i.url)}, linear-gradient(rgba(0,0,0,.06), transparent 50%)`:R1,s.style.backgroundSize=i?"180px auto, auto":"auto",L("mmWall").style.background=t.wallpaper,L("mmFloor").style.background=t.floor,mo(L("sceneArt"),R==="house"?X7(e.currentRoom,t):null,Y),W1(e)}function tl(e){const n=e.rooms[e.currentRoom].items.filter(o=>de[o.kind]).map(o=>{const i=de[o.kind];return`<i style="left:${o.x/he*100}%;top:${(xo(i,o.y)-Xe(i)*Ge(o)/2)/Ce*100}%"></i>`}).join(""),s=e.characters.filter(o=>o.room===e.currentRoom).map(o=>{const i=At(e.currentRoom,Ct(o),o);return`<b style="left:${i.x/he*100}%;top:${(i.y-90)/Ce*100}%;background:${o.shirt}"></b>`}).join("");L("mmDots").innerHTML=n+s}function I1(e){const t=M1();Wd=t?"c":"f",document.body.classList.toggle("tabs-compact",t),L("tabs").innerHTML=Zf.map(n=>{const s=t?hS[n.id]??n.name:n.name;return`<button class="tab ${e.currentRoom===n.id?"on":""}" data-room="${n.id}" style="--c:${n.color}" aria-label="${n.name}">${t?uS:""}${s}</button>`}).join(""),requestAnimationFrame(()=>{kS(),sp()})}function sp(){const e=document.getElementById("tabs");if(!e)return;const t=e.scrollWidth-e.clientWidth;e.classList.toggle("fadeL",t>2&&e.scrollLeft>2),e.classList.toggle("fadeR",t>2&&e.scrollLeft<t-2)}function kS(){const e=document.getElementById("tabs"),t=e?.querySelector(".tab.on");if(!e||!t||e.scrollWidth<=e.clientWidth+2)return;const n=t.offsetLeft-e.offsetLeft,s=n+t.offsetWidth;n<e.scrollLeft+24?e.scrollLeft=Math.max(0,n-24):s>e.scrollLeft+e.clientWidth-24&&(e.scrollLeft=s-e.clientWidth+24)}function Mo(e,t,n,s,o){Dl(e,(t-s/2)/he*100+"%",(n-o)/Ce*100+"%"),e.style.width=s/he*100+"%",e.style.height=o/Ce*100+"%"}function op(e,t){let n=e.w*t,s=Xe(e)*t;if((e.kind==="kennel"||e.kind==="cat-tower")&&document.body.classList.contains("phone")){const o=Math.max(.2,yt()||1),i=44*he/(Math.max(1,G)*o),a=44/o;n<i&&(n=i),s<a&&(s=a)}return{w:n,h:s}}function _S(e,t,n){const s=n1(t),o=t+":"+n+":"+(s?1:0);e.dataset.sig!==o&&(e.dataset.sig=o,e.innerHTML=`<div class="inner">${Yr(n,s)}</div>`,s||$S(t))}const zc=new Set;let Dc=0;const Hc=new Set;function $S(e){!k||Re===ee||zc.has(e)||gE(e)||(zc.add(e),Hc.add(e),Dc||(Dc=window.setTimeout(()=>{Dc=0;const t=[...Hc];Hc.clear(),k&&me&&k.getArt(me,t),t.forEach(n=>setTimeout(()=>zc.delete(n),8e3))},60)))}function O1(e){const t=new Set;for(const n of Object.values(e.rooms))for(const s of n?.items??[])s.art&&t.add(s.art);return t}const xS=[...["Heart","Star","Flower","Kitty","Rainbow","Sparkle"].map((e,t)=>({name:e,svg:Io[t]})),...["dog","bunny","fish","flowers","balloon","cake"].filter(e=>de[e]).map(e=>({name:de[e].name,svg:`<svg viewBox="${de[e].vb??"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg">${de[e].svg}</svg>`}))];function B1(){if(R!=="house"){F("The Art Studio is at home. Pop inside to paint!");return}if(!pt()){F("Paint at home, or in a friend's open house!");return}_E({stamps:xS,sfx:C,onSave:(e,t)=>SS(e,t)})}const Ou=new Set;function MS(e){const t=L("artGrip"),n=Ne?e.rooms[e.currentRoom].items.find(l=>l.id===Ne):void 0,s=n&&X.querySelector(`.item[data-id="${n.id}"]`);if(Se.isPlay()||!n||n.kind!=="picture"||!n.art||!s||!pt()){t.classList.add("hidden");return}const o=s.getBoundingClientRect(),i=Math.min(o.width,o.height)>=120?14:0,a=Qe(o.right-i,o.bottom-i),r=Y.getBoundingClientRect().width/Math.max(1,G)||1;t.style.left=a.x/he*100+"%",t.style.top=a.y/Ce*100+"%",t.style.width=t.style.height=64/r+"px",(t.classList.contains("hidden")||t.dataset.for!==n.id)&&(t.dataset.for=n.id,Ou.has(n.id)||(Ou.add(n.id),t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse"))),t.classList.remove("hidden")}L("artGrip").addEventListener("pointerdown",e=>{if(e.preventDefault(),e.stopPropagation(),!pt()||!Ne)return;const t=S.get().currentRoom,n=Ne,s=S.get().rooms[t].items.find(v=>v.id===n),o=X.querySelector(`.item[data-id="${n}"]`);if(!s||!o)return;const i=o.getBoundingClientRect(),a=i.left+i.width/2,r=i.top+i.height/2,l=i.width/2,c=i.height/2,d=Math.max(1,Math.hypot(l,c)),f=l/d,h=c/d,u=(v,w)=>(v-a)*f+(w-r)*h,y=Math.max(20,u(e.clientX,e.clientY)),m=Fn(s.size);L("artGrip").classList.remove("pulse"),L("artGrip").classList.add("active"),ne.classList.add("hidden"),Jn(e,{edgeScroll:!1,onMove(v){const w=m*Math.max(0,u(v.clientX,v.clientY))/y;let g=Wn[0];for(const _ of Wn)Math.abs(_-w)<Math.abs(g-w)&&(g=_);const b=S.get().rooms[t].items.find(_=>_.id===n);b&&Fn(b.size)!==g&&(S.dispatch({type:"item/size",room:t,id:n,size:g}),C.click())},onUp(){L("artGrip").classList.remove("active"),D1(t,n),Tt(S.get())}})});L("artFab").addEventListener("click",()=>{C.click(),B1()});function LS(){L("artFab").classList.toggle("hidden",R!=="house"||!pt())}const Lr=new Map;function z1(e){const t=Y.getBoundingClientRect(),n=L("nudgeL").getBoundingClientRect(),s=L("nudgeR").getBoundingClientRect(),o=(c,d)=>c.width>0&&!d.classList.contains("off")&&getComputedStyle(d).visibility!=="hidden"&&getComputedStyle(d).display!=="none"&&+getComputedStyle(d).opacity>.05,i=o(n,L("nudgeL"))?n.right+10:t.left+6,a=o(s,L("nudgeR"))?s.left-10:t.right-6;let r=Qe(i,0).x+e,l=Qe(a,0).x-e;if(r=Math.max(e,r),l=Math.min(he-e,l),l<r){const c=(r+l)/2;r=l=Math.max(e,Math.min(he-e,c))}return{lo:r,hi:l}}function ES(){const e=de.picture,t=e.w/2,n=Xe(e),s=Math.min(Ca,200+n/2),o=s-n;let{lo:i,hi:a}=z1(t);const r=[];for(const f of document.querySelectorAll("#layer > :not(.char), #scenery > *")){const h=f.getBoundingClientRect();if(!h.width)continue;const u=Qe(h.left,h.top),y=Qe(h.right,h.bottom),m=f.classList.contains("yardDoor")?50:1;r.push({l:u.x,r:y.x,t:u.y,b:y.y,k:m})}const l=ie+G/2;i=Math.min(Math.max(i,l-G*.3),a),a=Math.max(Math.min(a,l+G*.3),i);let c=Math.max(i,Math.min(a,l)),d=1/0;for(let f=i;f<=a+.1;f+=Math.max(4,(a-i)/60)){let h=0;for(const y of r)h+=y.k*Math.max(0,Math.min(f+t+12,y.r)-Math.max(f-t-12,y.l))*Math.max(0,Math.min(s+12,y.b)-Math.max(o-12,y.t));const u=h*10+Math.abs(f-l);u<d&&(d=u,c=f)}return c}function D1(e,t){const n=S.get().rooms[e].items.find(h=>h.id===t);if(!n||n.kind!=="picture"||!n.art)return;const s=de.picture,o=Ge(n),i=s.w*o/2,a=Xe(s)*o,r=Y.getBoundingClientRect(),l=Qe(r.left,0).x,c=Qe(r.right,0).x;let d=n.x,f=Math.min(Ca,Math.max(a+16,n.y));if(d+i>l&&d-i<c){const{lo:h,hi:u}=z1(i);d=Math.max(h,Math.min(u,d));const y=X.querySelector(".yardDoor"),m=y?.getBoundingClientRect();if(m&&m.width){const v=Qe(m.left,m.top),w=Qe(m.right,m.bottom);if(d+i>v.x-8&&d-i<w.x+8&&f>v.y&&f-a<w.y){const g=v.x-8-i,b=w.x+8+i,_=$=>$>=h-.5&&$<=u+.5,P=[g,b].filter(_).sort(($,x)=>Math.abs($-d)-Math.abs(x-d));P.length&&(d=P[0])}}}(Math.abs(d-n.x)>.5||Math.abs(f-n.y)>.5)&&S.dispatch({type:"item/move",room:e,id:t,x:d,y:f})}function SS(e,t){const n="a"+Date.now().toString(36)+Math.random().toString(36).slice(2,8),s=S.get(),o=s.currentRoom;e1(n,e);const i=ES();if(k&&Re!==ee&&me){Lr.set(n,{houseId:me,room:o,frame:t,x:i}),k.saveArt(me,n,e);return}uE(n,e,O1(s)),H1(o,n,t,i)}function H1(e,t,n,s){const o=de.picture,i={id:Kr("picture"),kind:"picture",x:s,y:Math.min(Ca,200+Xe(o)/2),flip:!1,z:0,scale:1,art:t,...n?{frame:n}:{}};S.dispatch({type:"item/add",room:e,item:i}),Ne=i.id,Tt(S.get());const a=X.querySelector(`.item[data-id="${i.id}"]`);et(a),Oa(a),C.sparkle()}function Tt(e){const t=e.rooms[e.currentRoom],n=new Set;for(const s of t.items){const o=de[s.kind];if(!o)continue;n.add(s.id);let i=X.querySelector(`.item[data-id="${s.id}"]`);i||(i=document.createElement("div"),i.className="item",i.dataset.id=s.id,i.innerHTML=`<div class="inner">${Vt(o,!0)}</div>`,X.appendChild(i),i.addEventListener("pointerdown",l=>NS(i,l))),i.dataset.kind=s.kind,s.art&&_S(i,s.art,s.frame??0),i.classList.toggle("is-light",J9(s.kind,!!o.light));const a=op(o,Ge(s));Mo(i,s.x,xo(o,s.y),a.w,a.h);const r=1e3+s.z;if(i.style.zIndex=String(r),i.style.setProperty("--iz",String(r)),s.art){const l=X.querySelector(".yardDoor");l&&Qd(i.getBoundingClientRect(),l.getBoundingClientRect())&&(i.style.zIndex=String(Math.max(r,(parseInt(l.style.zIndex||"2",10)||2)+1)))}i.classList.toggle("flipped",s.flip),i.classList.toggle("sel",Ne===s.id)}X.querySelectorAll(".item").forEach(s=>{n.has(s.dataset.id)||s.remove()}),W1(e),RS(),Fl(),N1(e),tl(e),LS(),ks()}function Fl(){const e=S.get(),t=bS(),n=new Set;t.forEach((s,o)=>{const i=e.rooms[e.currentRoom]?.items.find(h=>h.id===o),a=i&&de[i.kind],r=i&&wS(i.kind);if(!i||!a||!r)return;n.add(o);let l=X.querySelector(`.seatFront[data-id="${o}"]`);l||(l=document.createElement("div"),l.className="seatFront",l.dataset.id=o,X.appendChild(l));const c=X.querySelector(`.item[data-id="${o}"] .inner`),d=l.querySelector(".inner");(!d||c&&d.innerHTML!==c.innerHTML)&&(l.innerHTML=`<div class="inner">${c?c.innerHTML:Vt(a,!0)}</div>`),l.className="seatFront "+r+(i.flip?" flipped":"");const f=op(a,Ge(i));Mo(l,i.x,xo(a,i.y),f.w,f.h),l.style.zIndex=String(1e3+i.z+3)}),X.querySelectorAll(".seatFront").forEach(s=>{n.has(s.dataset.id||"")||s.remove()})}let vo=!1,Bu=0;function ip(e){performance.now()-Bu<80||(Bu=performance.now(),_P(e))}function TS(e,t){const n=Y.querySelector(".yardDoor");if(!n)return null;const s=o=>{if(!o)return!1;const i=o.getBoundingClientRect();return i.width>2&&i.height>2&&e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom};return s(n.querySelector(".yardHintLabel"))||s(n.querySelector(".doorArt"))||s(n)?n:null}function PS(e){e.addEventListener("pointerdown",t=>{if(t.button!==0)return;t.stopPropagation();const n=e.dataset.yardGo==="backyard"?"backyard":"living",s=t.clientX,o=t.clientY,i=t.pointerId;vo=!0;const a=r=>{r.pointerId===i&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),vo=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-o)>14||(r.preventDefault(),r.stopPropagation(),ip(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)})}Y.addEventListener("pointerdown",e=>{if(e.button!==0)return;const t=TS(e.clientX,e.clientY);if(!t||e.target instanceof Node&&t.contains(e.target)||e.target instanceof Element&&e.target.closest("#artGrip, #toolbar")||e.target instanceof Element&&e.target.closest('.item[data-kind="picture"][data-sig]'))return;e.stopPropagation(),e.preventDefault();const n=t.dataset.yardGo==="backyard"?"backyard":"living",s=e.clientX,o=e.clientY,i=e.pointerId;vo=!0;const a=r=>{r.pointerId===i&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),vo=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-o)>14||(r.preventDefault(),r.stopPropagation(),ip(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)},!0);function Qd(e,t){return e.width>2&&t.width>2&&e.left<t.right-1&&e.right>t.left+1&&e.top<t.bottom-1&&e.bottom>t.top+1}function zu(e){const t=e.getBoundingClientRect();let n=0;X.querySelectorAll(".item").forEach(s=>{if(s.classList.contains("is-light"))return;const o=de[s.dataset.kind||""];if(!o||o.wall||!Qd(s.getBoundingClientRect(),t))return;const i=parseInt(s.style.zIndex||"0",10)||0;i>n&&(n=i)}),e.style.zIndex=n?String(n+2):"2",X.querySelectorAll(".item[data-sig]").forEach(s=>{Qd(s.getBoundingClientRect(),t)&&(s.style.zIndex=String(Math.max(parseInt(s.style.zIndex||"0",10)||0,parseInt(e.style.zIndex,10)+1)))})}function W1(e){const t=e.rooms[e.currentRoom];K7(L("scenery"),e.currentRoom,t.items),L("scenery").querySelectorAll(".yardDoor").forEach(o=>o.remove());const n=e.currentRoom==="living"?"backyard":e.currentRoom==="backyard"?"living":"",s=X.querySelector(".yardDoor");if(!n)X.querySelectorAll(".yardDoor").forEach(o=>o.remove());else if(!s||s.dataset.yardGo!==n){X.querySelectorAll(".yardDoor").forEach(i=>i.remove()),X.insertAdjacentHTML("beforeend",b5(n==="backyard"?"living":"yard"));const o=X.querySelector(".yardDoor");o&&PS(o)}Y.classList.toggle("room-yard",e.currentRoom==="backyard"),cl(),vo||ps()}const Zt=new Map;function AS(e){const t=Ia(e),n=Bs*t,s=_n*t,o=zl(e,Il(Ct(e)?.pose)),i=e.look2?.85:1;return["left","right"].map(a=>{const r=e.held[a],l=r&&de[r.kind];if(!r||!l)return"";const c=Ge(r),d=Math.min(.7,120*t/Math.max(l.w,Xe(l))/c)*i,f=l.w*c*d,h=Xe(l)*c*d,u=o[a].x/100*n,y=o[a].y/160*s,m=Fo(r.kind)&&e.size!=="little"?.7:.62;return`<div class="held ${r.flip?"flipped":""}" data-hand="${a}" style="left:${(u-f/2)/n*100}%;top:${(y-h*m)/s*100}%;width:${f/n*100}%;height:${h/s*100}%"><div class="inner">${Vt(l)}</div></div>`}).join("")}function RS(){let e=X.querySelector("#skyPuddles");e||(e=document.createElement("div"),e.id="skyPuddles",e.className="skyPuddles"),X.appendChild(e);const t=[...X.querySelectorAll(".item.is-light")];for(;e.children.length>t.length;)e.lastElementChild.remove();for(;e.children.length<t.length;)e.appendChild(document.createElement("i"));t.forEach((n,s)=>{const o=e.children[s],i=parseFloat(n.style.left),a=parseFloat(n.style.top),r=parseFloat(n.style.width),l=parseFloat(n.style.height),c=n.dataset.kind==="window"||n.dataset.kind==="tv";o.style.left=i-.6*r+"%",o.style.top=a-(c?.38:.5)*l+"%",o.style.width=2.2*r+"%",o.style.height=2*l+"%",o.style.zIndex=String(parseInt(n.style.zIndex||"1000",10))})}let Zl=()=>{};function ea(e){const t=e.baby;return t&&t.spot==="arms"&&t.holder?t.holder:""}const cs=new Map;function V1(e){for(const[t,n]of cs)t.indexOf(e+":")===0&&(n.remove(),cs.delete(t))}function U1(e,t){const n=e+":"+t,s=cs.get(n);s&&(s.remove(),cs.delete(n))}function Q1(e,t,n,s,o){const i=e+":"+t;for(const[r,l]of cs)r.indexOf(e+":")===0&&r!==i&&(l.remove(),cs.delete(r));let a=cs.get(i);if((!a||!a.isConnected)&&(a=document.createElement("div"),a.className="cradle-front",a.dataset.for=t,a.innerHTML='<div class="inner"></div>',X.appendChild(a),cs.set(i,a)),a.dataset.arm!==s){const r=a.querySelector(".inner");r&&(r.innerHTML=s),a.dataset.arm=s}a.style.left=n.style.left,a.style.top=n.style.top,a.style.width=n.style.width,a.style.height=n.style.height,a.style.zIndex=String(5e3+Math.round(o)+4),a.classList.toggle("flipped",n.classList.contains("flipped")),a.classList.toggle("pose-sit",n.classList.contains("pose-sit")),a.classList.toggle("pose-lie",n.classList.contains("pose-lie")),a.classList.toggle("pose-lie-r",n.classList.contains("pose-lie-r"))}function on(e){const t=e.characters.filter(n=>n.room===e.currentRoom);for(const[n,s]of Zt)t.some(o=>o.id===n)||(s.remove(),Zt.delete(n));for(const n of t){let s=Zt.get(n.id);s||(s=document.createElement("div"),s.className="char",s.dataset.cid=n.id,s.innerHTML='<div class="inner"></div><div class="hands"></div>',X.appendChild(s),Zt.set(n.id,s),FS(s));const o=Ct(n),i=o?.pose??null,a=ea(e)===n.id,r=Dy(n)+(i||"")+(a?"h":"");s.dataset.look!==r&&(s.querySelector(".inner").innerHTML=xt(n,i,a),s.dataset.look=r),s.classList.toggle("holding",a);const l=AS(n);s.dataset.held!==l&&(s.querySelector(".hands").innerHTML=l,s.dataset.held=l);const c=Ia(n),d=At(e.currentRoom,o,n);if(Mo(s,d.x,d.y,Bs*c,_n*c),s.style.zIndex=String(o?1e3+(e.rooms[e.currentRoom].items.find(h=>h.id===o.item)?.z??0)+1+o.n:5e3+Math.round(n.y)),s.classList.toggle("flipped",n.flip),s.classList.toggle("pose-sit",i==="sit"),s.classList.toggle("pose-lie",i==="lie"),s.classList.toggle("pose-lie-r",i==="lie"&&!!e.rooms[e.currentRoom].items.find(h=>h.id===o?.item)?.flip),s.classList.toggle("active",n.id===ze),Pa(s,n,n.id===ze),s.classList.toggle("pose-swing",Ht?.id===n.id),a){const h=ym(n,i);h?Q1("doll",n.id,s,h,d.y):U1("doll",n.id)}const f=zl(n);s.style.setProperty("--hx-l",f.left.x+"%"),s.style.setProperty("--hx-r",f.right.x+"%")}(ea(e)===""||!t.some(n=>n.id===ea(e)))&&V1("doll"),ks(),tl(e),Zl(),za(),Ba()}function hn(){const e=Y.getBoundingClientRect(),t=e.width/Math.max(1,G),n=6,o=document.body.classList.contains("phone")?1/Math.max(.2,t):1,i=ne.offsetWidth,a=ne.offsetHeight,r=parseFloat(ne.style.left)/100*he,l=parseFloat(ne.style.top)/100*Ce,c=ne.classList.contains("below"),d=r,f=c?l+a/2:l-a/2,h=o*i/2,u=o*a/2,y=_=>e.left+(n+_-ie)*t,m=_=>e.top+(n+_)*t,v=y(d-h),w=y(d+h),g=m(f-u),b=m(f+u);return{left:v,right:w,top:g,bottom:b,width:w-v,height:b-g}}function CS(){const e=Y.getBoundingClientRect(),t=4;let n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t,o=Math.max(e.top,0)+t,i=Math.min(e.bottom,window.innerHeight)-t;for(const a of["nudgeL","nudgeR"]){const r=L(a);if(!r||r.classList.contains("off")||r.offsetParent===null)continue;const l=r.getBoundingClientRect();l.width<2||l.height<2||(a==="nudgeL"?n=Math.max(n,l.right+4):s=Math.min(s,l.left-4))}return s-n<48&&(n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t),{left:n,right:s,top:o,bottom:i}}function Sn(e,t){ne.style.left=e/he*100+"%",ne.style.top=t/Ce*100+"%"}function N1(e){MS(e);const t=Ne&&e.rooms[e.currentRoom].items.find(m=>m.id===Ne);if(Se.isPlay()||!t||!de[t.kind]){ne.classList.add("hidden"),ne.classList.remove("below"),ne.style.maxWidth="",L("artFab").classList.remove("tucked");return}L("artFab").classList.add("tucked");const n=de[t.kind],s=xo(n,t.y),o=s-Xe(n)*Ge(t),i=t.kind==="picture"&&t.art?12+64/(Y.getBoundingClientRect().width/Math.max(1,G)||1):12;ne.classList.remove("hidden"),ne.style.maxWidth="",ne.classList.remove("below"),Sn(t.x,o-i);const a=CS();hn().top<a.top&&(ne.classList.add("below"),Sn(t.x,s+i));let r=hn();const l=a.right-a.left;if(r.width>l-2&&l>60){const m=ne.offsetWidth*((l-8)/Math.max(1,r.width));ne.style.maxWidth=Math.max(76,m)+"px",!ne.classList.contains("below")&&hn().top<a.top&&(ne.classList.add("below"),Sn(t.x,s+i)),r=hn()}let c=0,d=0;if(r.left<a.left&&(c=a.left-r.left),r.right+c>a.right&&(c=a.right-r.right),r.width>a.right-a.left&&(c=(a.left+a.right)/2-(r.left+r.right)/2),r.top<a.top&&(d=a.top-r.top),r.bottom+d>a.bottom&&(d=a.bottom-r.bottom),Math.abs(c)>=.5||Math.abs(d)>=.5){const m=Y.getBoundingClientRect().width/Math.max(1,G)||1,v=parseFloat(ne.style.left)/100*he+c/m,w=parseFloat(ne.style.top)/100*Ce+d/m;Sn(v,w)}if(t.kind==="picture"&&t.art){const m=X.querySelector(`.item[data-id="${t.id}"]`),v=L("artGrip"),w=(x,D)=>Math.max(0,Math.min(x.right,D.right)-Math.max(x.left,D.left))*Math.max(0,Math.min(x.bottom,D.bottom)-Math.max(x.top,D.top)),g=()=>v.classList.contains("hidden")?0:w(v.getBoundingClientRect(),ne.getBoundingClientRect()),b=()=>m?w(m.getBoundingClientRect(),ne.getBoundingClientRect())+8*g():0,_=b();if(_>0){const x={l:ne.style.left,t:ne.style.top,below:ne.classList.contains("below")};ne.classList.toggle("below",!x.below),Sn(t.x,x.below?o-i:s+i);const D=hn(),W=Y.getBoundingClientRect().width/Math.max(1,G)||1;let Q=0,q=0;D.left<a.left&&(Q=a.left-D.left),D.right+Q>a.right&&(Q=a.right-D.right),D.top<a.top&&(q=a.top-D.top),D.bottom+q>a.bottom&&(q=a.bottom-D.bottom),(Q||q)&&Sn(parseFloat(ne.style.left)/100*he+Q/W,parseFloat(ne.style.top)/100*Ce+q/W),b()>=_&&(ne.style.left=x.l,ne.style.top=x.t,ne.classList.toggle("below",x.below))}if(g()>0){const x=v.getBoundingClientRect(),D=hn(),W=Y.getBoundingClientRect().width/Math.max(1,G)||1,Q=x.left-6-D.right,q=x.right+6-D.left,se=D.left+Q>=a.left,Me=D.right+q<=a.right,Ke=se&&(!Me||-Q<=q)?Q:Me?q:0;Ke&&Sn(parseFloat(ne.style.left)/100*he+Ke/W,parseFloat(ne.style.top)/100*Ce)}const P=()=>[...X.querySelectorAll(".char")].map(x=>{const D=x.getBoundingClientRect();return new DOMRect(D.left,D.top,D.width,D.height*.42)}),$=()=>{const x=hn(),D=new DOMRect(x.left,x.top,x.width,x.height);return P().reduce((W,Q)=>W+w(Q,D),0)};if($()>0){const x=Y.getBoundingClientRect().width/Math.max(1,G)||1,D=()=>{const V=hn();return new DOMRect(V.left,V.top,V.width,V.height)},W=()=>v.classList.contains("hidden")?0:w(v.getBoundingClientRect(),D()),Q=()=>m?w(m.getBoundingClientRect(),D()):0,q=()=>(W()>0?1e9:0)+$()*20+Q(),se=()=>({l:ne.style.left,t:ne.style.top,below:ne.classList.contains("below")}),Me=V=>{ne.style.left=V.l,ne.style.top=V.t,ne.classList.toggle("below",V.below)},Ke=()=>{const V=hn();let N=0,Z=0;V.left<a.left&&(N=a.left-V.left),V.right+N>a.right&&(N=a.right-V.right),V.top<a.top&&(Z=a.top-V.top),V.bottom+Z>a.bottom&&(Z=a.bottom-V.bottom),(N||Z)&&Sn(parseFloat(ne.style.left)/100*he+N/x,parseFloat(ne.style.top)/100*Ce+Z/x)};let Ie=se(),I=q();const B=(V,N)=>{ne.classList.toggle("below",V),Sn(t.x+N/x,V?s+i:o-i),Ke();const Z=q();Z<I-.5&&(I=Z,Ie=se())},te=hn();for(const V of[!Ie.below,Ie.below]){B(V,0);const N=Y.getBoundingClientRect().left+(6+t.x-ie)*x,Z=te.width/2;for(const ue of P())B(V,ue.left-8-Z-N),B(V,ue.right+8+Z-N)}Me(Ie)}}const f=Fn(t.size),h=Wn.indexOf(f),u=ne.querySelector('[data-a="smaller"]'),y=ne.querySelector('[data-a="bigger"]');u&&(u.disabled=h<=0),y&&(y.disabled=h>=Wn.length-1)}function q1(e){const t=L("soundIco");t&&(t.innerHTML=e.soundOn?Nt.soundOn:Nt.soundOff),L("btnSound").setAttribute("aria-label",e.soundOn?"Sound on":"Sound off"),c4(e.soundOn)}function ko(){const e=S.get();X.innerHTML="",Zt.clear(),I1(e),C1(e),Tt(e),on(e),q1(e);const t=e.characters.find(o=>o.room===e.currentRoom),n=k&&ye(),s=n&&n.where==="house"?n.x:t?.x;Ul(),Je(ga[e.currentRoom]??ei(s!==void 0?D2(e,s,s-G/2):ii)),ga[e.currentRoom]!==void 0&&Xf()&&R==="house"&&!document.body.classList.contains("phone")&&Pp(),Rt(),$n(),document.body.classList.contains("phone")&&R==="house"&&requestAnimationFrame(()=>$1())}const Du=200,IS=2,nl=[];let Nd=0,Er=!1,Wc=0;const zn=new Map,OS=60;function BS(e,t){for(zn.delete(e),zn.set(e,t);zn.size>OS;)zn.delete(zn.keys().next().value)}function zS(e){const t=zn.get(e);return t&&(zn.delete(e),zn.set(e,t)),t}function qd(e){const t=document.getElementById("shelf");if(!t)return!1;const n=t.getBoundingClientRect();if(n.width<2||n.height<2)return!1;const s=e.getBoundingClientRect();return s.right>n.left-Du&&s.left<n.right+Du&&s.bottom>n.top-8&&s.top<n.bottom+8}const DS=3,sl=new Map;function jd(e,t){const n=(sl.get(t)||0)+1;if(sl.set(t,n),delete e.dataset.shelfq,n>=DS){delete e.dataset.artq;return}setTimeout(ap,300*n)}function zo(){Nd--,!Er&&j1()}function Hu(e,t){const n=document.createElement("div");n.innerHTML=Vt(t);const s=n.querySelector("img.artimg");if(!s){delete e.dataset.artq,zo();return}const o=sl.get(t.kind)||0;if(o>0){const l=s.getAttribute("src")||"";s.setAttribute("src",l+(l.indexOf("?")>=0?"&":"?")+"retry="+o)}let i=!1;const a=l=>{if(!i){if(i=!0,l){const c=Array.prototype.slice.call(n.childNodes);if(BS(t.kind,c),sl.delete(t.kind),e.isConnected&&e.dataset.artq==="1"){delete e.dataset.artq,e.innerHTML="";for(let d=0;d<c.length;d++)e.appendChild(c[d])}else{const d=document.querySelector(`#shelf button.thing[data-artq="1"][data-kind="${CSS.escape(t.kind)}"]`);if(d){delete d.dataset.artq,d.innerHTML="";for(let f=0;f<c.length;f++)d.appendChild(c[f])}}}else e.isConnected&&e.dataset.artq==="1"&&jd(e,t.kind);zo()}},r=()=>{typeof s.decode=="function"?s.decode().then(()=>a(!0),()=>a(!0)):a(!0)};s.onload=r,s.onerror=()=>a(!1),s.complete&&s.naturalWidth>0&&r()}function j1(){if(!Er){for(Er=!0;Nd<IS&&nl.length;){const e=nl.shift();if(!e||!e.isConnected||e.dataset.artq!=="1")continue;if(!qd(e)){delete e.dataset.shelfq;continue}const t=e.dataset.kind||"",n=de[t];if(!n){delete e.dataset.artq;continue}if(Nd++,Gn(t)){Hu(e,n);continue}Cs(()=>p(()=>Promise.resolve().then(()=>Rl),void 0)).then(s=>s.loadArtKinds([t])).then(()=>{if(!e.isConnected||e.dataset.artq!=="1"){zo();return}if(!Gn(t)){jd(e,t),zo();return}if(!qd(e)){delete e.dataset.shelfq,zo();return}Hu(e,n)},()=>{e.isConnected&&e.dataset.artq==="1"&&jd(e,t),zo()})}Er=!1}}function HS(){const e=document.getElementById("shelf");if(!e||!Zn())return;const t=e.querySelectorAll('button.thing[data-artq="1"]');for(let n=0;n<t.length;n++){const s=t[n];s.dataset.shelfq!=="1"&&qd(s)&&(s.dataset.shelfq="1",nl.push(s))}j1()}function ap(){Wc||(Wc=requestAnimationFrame(()=>{Wc=0,HS()}))}function WS(){const e=document.getElementById("shelf");!e||e.dataset.artscroll==="1"||(e.dataset.artscroll="1",e.addEventListener("scroll",ap,{passive:!0}))}function F1(){const e=document.getElementById("shelf");if(!e||!Zn())return;const t=e.querySelectorAll("button.thing[data-kind]");for(let n=0;n<t.length;n++){const s=t[n],o=s.dataset.kind||"";s.querySelector("img.artimg")||!(Tp(o)||Gn(o))||(s.dataset.artq="1")}ap()}function Z1(){if(Bt==="__people"){Ut();return}F1(),Y1()}const G1=()=>de["egg:chloe-starlamp"]?Vt(de["egg:chloe-starlamp"]):"🎁";function Y1(){document.querySelectorAll("#cats .cat[data-cat]").forEach(e=>{if(e.querySelector("img.artimg"))return;const t=e.dataset.cat,n=Ss.find(i=>i.id===t);if(t==="secrets"){e.innerHTML=G1();return}const s=n&&n.kind!=="people"?de[n.icon]:void 0;if(!s||!Zn()||!Gn(s.kind))return;const o=n.kind==="pack"?e.querySelector(".packicon"):e;o&&(o.innerHTML=Vt(s))})}function VS(e){const t=$0();if(!k)return;const n=ye();if(!n||n.where!=="house"||!n.seat)return;let s="";if(e.type==="item/flip"||e.type==="item/delete")s=e.id;else if(e.type==="item/move"&&e.stand)s=e.id;else if(e.type==="char/hold")s=e.itemId;else return;if(!s||n.seat.id!==s||e.room!==n.room)return;const o=t&&t.id===s?t:null,i=o?jn(o.kind)*(o.scale||1):jn("bed"),a=jo(o?o.x:n.x,i,n.x);vn.delete("p:"+k.pid);const{seat:r,...l}=n;nt({...l,x:a.x,y:a.y})}S.subscribe((e,t)=>{switch(VS(t),t.type){case"room/switch":{const n=Y.classList.contains("room-yard");k&&Re!==ee&&KS(t.room),ko(),Ut(),(t.room==="backyard"||n||Se.isPlay()&&Math.min(window.innerWidth,window.innerHeight)<500)&&zs(),z2(t.room);break}case"item/add":Tt(e),cS(),bP();break;case"game/reset":ko();break;case"room/wallpaper":case"room/floor":case"room/pattern":case"room/wallTile":case"room/floorTile":C1(e);break;case"char/update":case"char/move":t.type==="char/move"&&Ht&&!Bi&&t.id===Ht.id&&(Ht=null),on(e),Fl(),cl(),R==="ranch"?xs():R==="park"&&_o();break;case"char/add":case"char/delete":case"char/hold":case"char/release":Tt(e),on(e),Rt(),Bt==="__people"&&Ut();break;case"item/move":case"item/flip":case"item/delete":case"item/size":Tt(e),on(e),Rt();break;case"baby/meet":case"baby/name":case"baby/care":case"baby/hold":case"baby/place":case"baby/ease":on(e),Rt();break;case"settings/sound":q1(e);break;default:Tt(e)}});function et(e){if(!e)return;const t=e.querySelector(":scope > .inner")??e;t.classList.remove("bounce"),t.offsetWidth,t.classList.add("bounce")}function rp(e,t,n=7){const s=L("fx"),o=["#ffd166","#ff8fab","#8ecae6","#80ed99","#c9a0dc"];for(let i=0;i<n;i++){const a=document.createElement("div");a.className="spark";const r=Math.PI*2*i/n+Math.random()*.5,l=40+Math.random()*30;a.style.left=e+"px",a.style.top=t+"px",a.style.background=o[i%o.length],a.style.setProperty("--dx",Math.cos(r)*l+"px"),a.style.setProperty("--dy",Math.sin(r)*l+"px"),s.appendChild(a),setTimeout(()=>a.remove(),650)}}const Oa=e=>{const t=e?.getBoundingClientRect();t&&rp(t.left+t.width/2,t.top+t.height/2)};function lp(e,t){rp(e,t,10),C.pop()}function ol(e){Zt.forEach((t,n)=>{t.classList.toggle("hold-target",!!e&&e.c.id===n),t.dataset.hand=e&&e.c.id===n?e.hand:""})}function K1(e,t){S.dispatch({type:"char/hold",id:e.c.id,hand:e.hand,room:e.c.room,itemId:t}),Ne=null,Tt(S.get());const n=Zt.get(e.c.id);et(n),Oa(n?.querySelector(`.held[data-hand="${e.hand}"]`)),C.sparkle()}const kn=new Map;let Gt=!1,il=0;const cp=()=>[...kn.values()].reduce((e,t)=>e+t,0)/kn.size;Y.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&(kn.set(e.pointerId,e.clientX),kn.size>=2&&(Gt=!0,il=cp(),Ul(),ne.classList.add("hidden")))},!0);window.addEventListener("pointermove",e=>{if(kn.has(e.pointerId)&&(kn.set(e.pointerId,e.clientX),Gt&&kn.size>=2)){di();const t=cp();Je(ie-(t-il)/yt()),il=t}},!0);const X1=e=>{kn.delete(e.pointerId),kn.size<2&&Gt&&(kn.size===0?Gt=!1:il=cp())};window.addEventListener("pointerup",X1,!0);window.addEventListener("pointercancel",X1,!0);const Co=80;function US(e,t){const n=Y.getBoundingClientRect();return t<n.top-40||t>n.bottom+10?0:e<n.left+Co?-Math.min(1,(n.left+Co-e)/Co)*16:e>n.right-Co?Math.min(1,(e-(n.right-Co))/Co)*16:0}function Jn(e,t){let n=e,s=0;const o=()=>{const r=Gt?0:US(n.clientX,n.clientY);if(r){const l=ie;Je(ie+r),ie!==l&&t.onMove(n)}s=requestAnimationFrame(o)};t.edgeScroll!==!1&&(s=requestAnimationFrame(o));const i=r=>{r.pointerId===e.pointerId&&(r.preventDefault(),n=r,Gt||t.onMove(r))},a=r=>{r.pointerId===e.pointerId&&(cancelAnimationFrame(s),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),t.onUp(r))};window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a)}function QS(e){return new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,button:e.button,buttons:e.buttons,isPrimary:e.isPrimary})}function NS(e,t){const n=t.target,s=n&&n.closest?n.closest("img.artimg"):null,o=S.get(),i=!!o.rooms[o.currentRoom]?.items.find(a=>a.id===e.dataset.id)?.art;if(s&&!i&&!zf(s,t.clientX,t.clientY)){const a=AM(t.clientX,t.clientY),r=a?.closest(".item"),l=a?.closest(".char");r&&r!==e?(t.stopPropagation(),Fd(r,t)):l&&(t.stopPropagation(),l.dispatchEvent(QS(t)));return}Fd(e,t)}function qS(e,t){if(t.preventDefault(),t.stopPropagation(),Gt)return;const n=e.dataset.id,s=t.clientX,o=t.clientY;Jn(t,{edgeScroll:!1,onMove(){},onUp(i){Math.hypot(i.clientX-s,i.clientY-o)>6||OT(e,n)}})}function Fd(e,t,n=!1){if(t.preventDefault(),t.stopPropagation(),Gt)return;if(Se.isPlay()){qS(e,t);return}if(!pt()){Yn(e);return}const s=S.get(),o=s.currentRoom,i=e.dataset.id,a=s.rooms[o].items.find(h=>h.id===i);if(!a)return;const r=de[a.kind],l=Qe(t.clientX,t.clientY),c={x:a.x-l.x,y:a.y-l.y};let d=n,f=null;Ne=i,S.dispatch({type:"item/front",room:o,id:i}),e.classList.add("lifted"),C.pick(),Jn(t,{onMove(h){const u=Qe(h.clientX,h.clientY);Math.hypot(u.x-l.x,u.y-l.y)>6&&(d=!0),d&&(ne.classList.add("hidden"),xr.classList.add("show")),xr.classList.toggle("hot",Iu(h.clientX,h.clientY));const y=r.w*Ge(a)/2;S.dispatch({type:"item/move",room:o,id:i,x:Math.max(y*.6,Math.min(he-y*.6,u.x+c.x)),y:p1(r,u.y+c.y),...d?{stand:!0}:{}}),d&&ne.classList.add("hidden"),f=d&&r.holdable?P1(u):null,ol(f)},onUp(h){if(e.classList.remove("lifted"),xr.classList.remove("show","hot"),ol(null),d&&Iu(h.clientX,h.clientY)){Ne=null,S.dispatch({type:"item/delete",room:o,id:i}),lp(h.clientX,h.clientY);return}if(d&&f){K1(f,i);return}d?(D1(o,i),C.drop(),et(e)):(C.click(),b2(i),k7(e)),Tt(S.get())}})}function jS(e,t,n){if(n.preventDefault(),n.stopPropagation(),Gt||Se.isPlay())return;const s=e.dataset.cid,o=t.dataset.hand,i=S.get().characters.find(d=>d.id===s),a=i?.held[o];if(!i||!a)return;const r=t.getBoundingClientRect(),l=Qe(r.left+r.width/2,r.bottom);S.dispatch({type:"char/release",id:s,hand:o,x:l.x,y:l.y});const c=X.querySelector(`.item[data-id="${a.id}"]`);c&&Fd(c,n,!0)}function FS(e){e.addEventListener("pointerdown",t=>{const n=t.target.closest(".held"),s=n?.querySelector("img.artimg"),o=!!s&&!zf(s,t.clientX,t.clientY);if(n&&!o){if(Se.isPlay()){t.preventDefault(),t.stopPropagation();return}if(!pt()){t.stopPropagation(),Yn(e);return}return jS(e,n,t)}if(t.preventDefault(),t.stopPropagation(),Gt||Se.isPlay()&&!tp())return;if(!pt()){Yn(e);return}Ne=null,Tt(S.get());const i=e.dataset.cid;ze=i;const a=S.get(),r=a.characters.find(u=>u.id===i);if(!r)return;const l=Qe(t.clientX,t.clientY),c=At(a.currentRoom,Ct(r),r),d={x:c.x-l.x,y:c.y-l.y};let f=c.x,h=!1;e.classList.add("lifted"),C.pick(),on(S.get()),wa=!0,Jn(t,{onMove(u){const y=Qe(u.clientX,u.clientY),m=y.x+d.x;if(Math.hypot(y.x-l.x,y.y-l.y)>6&&(h=!0),!h)return;const v=S.get().characters.find(g=>g.id===i);if(!v)return;if(Math.abs(m-f)>3){const g=m<f;g!==v.flip&&S.dispatch({type:"char/update",id:i,patch:{flip:g}}),f=m}const w=Math.max(wo+40,y.y+d.y);Ji(i,a.currentRoom,m,w,null),Se.isPlay()&&(ya=el(u.clientX,u.clientY)?.id??null),document.querySelectorAll(".tab").forEach(g=>g.classList.remove("drop")),document.elementFromPoint(u.clientX,u.clientY)?.closest(".tab:not(.on)")?.classList.add("drop")},onUp(u){wa=!1,ya=null,e.classList.remove("lifted"),document.querySelectorAll(".tab").forEach(b=>b.classList.remove("drop"));const y=document.elementFromPoint(u.clientX,u.clientY)?.closest("[data-room]"),m=S.get().characters.find(b=>b.id===i);if(!h||!m){C.click();return}if(y&&y.dataset.room!==a.currentRoom){const b=y.getBoundingClientRect();rp(b.left+b.width/2,b.top+b.height/2,9),C.swish(),Ji(i,y.dataset.room,m.x,m.y,null);return}const v=Qe(u.clientX,u.clientY),w=v.x+d.x,g=Math.max(wo+40,v.y+d.y);if(Se.isPlay()){const b=T1(u.clientX,u.clientY)??el(u.clientX,u.clientY);np(i,w,g,b)}else Ji(i,a.currentRoom,w,g,null);C.drop(),et(e),requestAnimationFrame(()=>Ts(!0))}})})}function ZS(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Se.isPlay()){n.stopPropagation();return}if(!pt()){Yn(e);return}const s=document.createElement("div");s.className="ghost",s.innerHTML=Vt(t),document.body.appendChild(s);const o=Math.max(1,60/(Math.max(t.w,Xe(t))*yt())),i=t.w*yt()*o,a=Xe(t)*yt()*o;s.style.width=i+"px",s.style.height=a+"px";let r=null;const l=f=>{s.style.left=f.clientX-i/2+"px",s.style.top=f.clientY-a*.8+"px",r=t.holdable&&Vd(f.clientX,f.clientY)?P1(Qe(f.clientX,f.clientY)):null,ol(r)};l(n),C.pick(),e.classList.add("pressed");const c=n.clientX,d=n.clientY;Jn(n,{onMove:l,onUp(f){s.remove(),e.classList.remove("pressed"),ol(null);const h=S.get().currentRoom,u=Math.hypot(f.clientX-c,f.clientY-d)<8;let y,m;if(u)y=ie+380+Math.random()*240,m=t.wall?Math.min(Ca,200+Xe(t)/2):500+Math.random()*40;else if(Vd(f.clientX,f.clientY)){const g=Qe(f.clientX,f.clientY);y=g.x,m=p1(t,g.y+Xe(t)*.2)}else return;const v={id:Kr(t.kind.replace(/[^a-z0-9-]/gi,"")),kind:t.kind,x:y,y:m,flip:!1,z:0,scale:1};if(h!=="backyard"&&S.get().rooms[h].items.length===0){const g=G7(b=>Kr(b),h);for(let b=0;b<g.length;b++)S.dispatch({type:"item/add",room:h,item:g[b]})}if(S.dispatch({type:"item/add",room:h,item:v}),!u&&r){K1(r,v.id);return}Ne=v.id,Tt(S.get());const w=X.querySelector(`.item[data-id="${v.id}"]`);et(w),Oa(w),C.sparkle()}})})}function GS(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Se.isPlay())return;if(!pt()){Yn(e);return}const s=S.get().characters.find(h=>h.id===t);if(!s)return;const o=Ia(s),i=Bs*o*yt(),a=_n*o*yt(),r=document.createElement("div");r.className="ghost",r.innerHTML=xt(s),r.style.width=i+"px",r.style.height=a+"px",document.body.appendChild(r);const l=h=>{r.style.left=h.clientX-i/2+"px",r.style.top=h.clientY-a*.85+"px"},c=n.clientX,d=n.clientY;let f=!1;r.style.visibility="hidden",Jn(n,{onMove(h){Math.hypot(h.clientX-c,h.clientY-d)>8&&(f=!0,r.style.visibility=""),l(h)},onUp(h){if(r.remove(),!f){C.click(),ze=t,ni("dress");return}if(!Vd(h.clientX,h.clientY))return;const u=Qe(h.clientX,h.clientY),y=S.get().currentRoom;S.dispatch({type:"char/move",id:t,room:y,x:u.x,y:Math.max(wo+40,u.y+_n*o*.15)}),ze=t,on(S.get());const m=Zt.get(t);et(m),Oa(m),C.sparkle()}})})}function J1(){if(!pt())return Yn(null),null;const e=S.get();if(e.characters.length>=ai)return null;const t=Kr("c"),n=xl();S.dispatch({type:"char/add",char:Ms({id:t,...$l(n),look2:n,room:e.currentRoom,x:ie+300+Math.random()*400,y:520+Math.random()*40})}),ze=t,on(S.get());const s=Zt.get(t);return et(s),Oa(s),C.sparkle(),t}function YS(){return Kf==="all"?"all":S.get().currentRoom}function Ut(){const e=S.get().currentRoom,t=YS(),n=Zf.find(l=>l.id===e)?.name??"This room",s=t==="all";L("roomFilter").innerHTML=`<button class="rf ${s?"on":""}" data-rf="${s?"room":"all"}">${s?"Just "+n:"All rooms"}</button>`;const o=Oc("secrets").length>0,i=Ss.filter(l=>l.id!=="secrets"&&(l.kind==="people"||l.kind==="pack"&&e!=="backyard"||Oc(l.id).length));!(Bt==="secrets"&&o)&&!i.some(l=>l.id===Bt)&&(Bt=i[1]?.id??"__people"),L("cats").innerHTML=i.map(l=>`<button class="cat ${l.kind} ${l.id===Bt?"on":""}" data-cat="${l.id}" aria-label="${l.name}" title="${l.name}">${l.kind==="people"?XE:l.kind==="pack"?`<span class="packicon">${Vt(de[l.icon])}</span><span class="packname">${l.name}</span>`:Vt(de[l.icon])}</button>`).join("")+(o?`<button class="cat secretTab ${Bt==="secrets"?"on":""}" data-cat="secrets" aria-label="Secrets" title="Secrets">${G1()}</button>`:"");const a=L("shelf");if(nl.length=0,a.innerHTML="",!pt()){a.innerHTML='<div class="empty locked">🔒 This house is look-only right now</div>';return}if(Bt==="__people"){const l=S.get(),c=bs();if(c){const d=document.createElement("button");d.className="thing person me",d.setAttribute("aria-label","Me"),d.innerHTML=`<div class="face">${xt(c)}</div><span class="meStar">★</span>`,d.addEventListener("click",()=>{C.click(),ze=mt,ni("dress")}),a.appendChild(d)}for(const d of l.characters){const f=document.createElement("button");f.className="thing person",f.setAttribute("aria-label","Character"),f.innerHTML=`<div class="face">${xt(d)}</div><span class="where" style="background:${u1(d.room)}"></span>`,a.appendChild(f),GS(f,d.id)}if(l.characters.length<ai){const d=document.createElement("button");d.className="thing add",d.setAttribute("aria-label","New character"),d.innerHTML=g1,d.addEventListener("click",()=>{J1()&&(Ut(),ni("dress"))}),a.appendChild(d)}return}const r=Oc(Bt);r.length||(a.innerHTML='<div class="empty">Nothing here yet!</div>');for(const l of r){const c=document.createElement("button");c.className="thing",c.setAttribute("aria-label",l.name),c.dataset.kind=l.kind;const d=Zn()&&Gn(l.kind)?zS(l.kind):void 0;if(d)for(let f=0;f<d.length;f++)c.appendChild(d[f]);else c.innerHTML=E5(l,Tp(l.kind));a.appendChild(c),ZS(c,l)}a.scrollLeft=0,dp(),WS(),F1()}function dp(){const e=document.querySelector(".drawerTop"),t=document.getElementById("drawerBar");!e||!t||(t.classList.toggle("more",e.scrollWidth-e.clientWidth-e.scrollLeft>6),t.classList.toggle("back",e.scrollLeft>6))}document.querySelector(".drawerTop").addEventListener("scroll",dp,{passive:!0});window.addEventListener("resize",dp);function Wu(e,t,n){return`<div class="sw">${e.map(s=>`<button class="dot ${s===t?"on":""}" style="background:${s}" data-act="${n}" data-v="${s}"></button>`).join("")}</div>`}let ba=null,Do=!1;function e2(e){if(e===mt){const n=bs();if(!n||n.look2)return;Rn(mt,ia(oa(n)));return}const t=S.get().characters.find(n=>n.id===e);!t||t.look2||Rn(e,{...ia(oa(t)),size:t.size})}function gn(){const e=S.get(),t=L("card");if(ba==="paint"){t.classList.remove("avCard");const n=e.rooms[e.currentRoom],s=md.filter(a=>a.kind==="wallpaper"),o=md.filter(a=>a.kind==="floor"),i=(a,r,l,c)=>`<button class="dot pat tile ${a.id===r?"on":""}" data-act="${l}" data-v="${a.id}" title="${a.name} (${ag(a.pack)})" style="background-color:${c};background-image:${Ud(a.url)};background-size:48px auto"></button>`;t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Paint the room</h2>
      <h3>Walls</h3>${Wu(YE,n.wallpaper,"wall")}
      <h3>Wallpaper</h3><div class="sw">${A1.map((a,r)=>`<button class="dot pat ${!n.wallTile&&r===n.pattern?"on":""}" data-act="pat" data-v="${r}" style="background-color:${n.wallpaper};background-image:${a};background-size:${r===1?"16px 16px":r===3?"20px 20px":"auto"}"></button>`).join("")}${s.map(a=>i(a,n.wallTile,"wtile",n.wallpaper)).join("")}</div>
      <h3>Floor</h3>${Wu(KE,n.floor,"floor")}
      ${o.length?`<h3>Floor style</h3><div class="sw"><button class="dot pat ${n.floorTile?"":"on"}" data-act="ftile" data-v="" style="background-color:${n.floor};background-image:${R1}"></button>${o.map(a=>i(a,n.floorTile,"ftile",n.floor)).join("")}</div>`:""}`}else if(ba==="dress"){t.classList.add("avCard");let n=e,s=bs(),o=s?Ms({id:mt,...s}):null,i=ze===mt&&o?o:n.characters.find(r=>r.id===ze)??o??n.characters[0];i&&!i.look2&&e2(i.id),n=S.get(),s=bs(),o=s?Ms({id:mt,...s}):null,i=ze===mt&&o?o:n.characters.find(r=>r.id===ze)??o??n.characters[0];const a=`<div class="picker">${o?`<button class="pk me ${i?.id===mt?"on":""}" data-act="pickc" data-v="${mt}"><div class="face">${xt(o)}</div><span class="meStar">★</span></button>`:""}${n.characters.map(r=>`<button class="pk ${r.id===i?.id?"on":""}" data-act="pickc" data-v="${r.id}"><div class="face">${xt(r)}</div><span class="where" style="background:${u1(r.room)}"></span></button>`).join("")}${n.characters.length<ai?`<button class="pk add" data-act="newc">${g1}</button>`:""}</div>`;if(!i){t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${a}<div class="dress"><p class="hint">Tap + to make someone new!</p></div>`;return}ze=i.id,t.innerHTML=SL(i,a,Do,Nt.trash)}}function ni(e){ba=e,Do=!1,gn(),L("sheet").classList.remove("hidden"),C.swish()}L("sheet").addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(e.target===L("sheet")||t?.dataset.act==="close"){L("sheet").classList.add("hidden"),ba=null,C.click(),Bt==="__people"&&Ut();return}if(!t)return;const n=S.get(),s=n.currentRoom,o=t.dataset.v,i=ze??"",a=t.dataset.act;if(a!=="delc"&&(Do=!1),a&&a.indexOf("av-")===0){const r=i===mt?bs():S.get().characters.find(d=>d.id===i);if(a==="av-costume"){r&&!r.look2&&e2(i);const d=i===mt?bs():S.get().characters.find(f=>f.id===i);Rn(i,{costume:$o(o)??null,...d?.look2?{look2:d.look2}:{},size:d?.size??"kid"}),C.sparkle(),gn(),et(document.querySelector(".avStage"));return}if(a==="av-surprise"){Rn(i,{...ia(xl()),size:r?.size??"kid"}),C.sparkle(),gn(),et(document.querySelector(".avStage"));return}const l=r?.look2??oa(r??{}),c=TL(l,a,o??"");if(!c){C.click(),gn();return}Rn(i,{...ia(c),size:r?.size??"kid"}),C.sparkle(),gn(),et(document.querySelector(".avStage"));return}switch(a){case"wall":S.dispatch({type:"room/wallpaper",room:s,color:o});break;case"floor":S.dispatch({type:"room/floor",room:s,color:o});break;case"pat":S.dispatch({type:"room/pattern",room:s,pattern:+o});break;case"wtile":S.dispatch({type:"room/wallTile",room:s,tile:o});break;case"ftile":S.dispatch({type:"room/floorTile",room:s,tile:o||null});break;case"skin":case"hair":case"shirt":case"pants":Rn(i,{[a]:o});break;case"hs":Rn(i,{hairStyle:+o});break;case"acc":Rn(i,{acc:+o});break;case"size":{const r=i===mt?bs():S.get().characters.find(l=>l.id===i);Rn(i,{size:o,...r?.look2?{look2:r.look2}:{}}),on(S.get());break}case"pickc":ze=o,on(S.get()),C.click(),gn();return;case"newc":if(!J1())return;break;case"delc":if(i===mt||!pt())return;if(!Do){Do=!0,C.click(),gn();return}Do=!1;{const l=Zt.get(i)?.getBoundingClientRect();S.dispatch({type:"char/delete",id:i}),l?lp(l.left+l.width/2,l.top+l.height/2):C.pop()}ze=S.get().characters[0]?.id??null,gn();return}C.sparkle(),gn(),et(document.querySelector(".preview"))});L("tabs").addEventListener("click",e=>{const t=e.target.closest("[data-room]");if(!t)return;const n=t.dataset.room;n!==S.get().currentRoom&&(Ne=null,C.swish(),Y.classList.remove("swap"),Y.offsetWidth,Y.classList.add("swap"),S.dispatch({type:"room/switch",room:n}))});L("cats").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");t&&(Bt=t.dataset.cat,C.click(),Ut())});L("roomFilter").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");if(t){Bt=t.dataset.cat,C.click(),Ut();return}const n=e.target.closest("[data-rf]");n&&(Kf=n.dataset.rf==="all"?"all":"",C.click(),Ut())});ne.addEventListener("pointerdown",e=>e.stopPropagation());ne.addEventListener("click",e=>{const t=e.target.closest("[data-a]");if(!t||!Ne)return;if(!pt()){Yn(null);return}const n=S.get().currentRoom,s=Ne,o=X.querySelector(`.item[data-id="${s}"]`);switch(t.dataset.a){case"smaller":case"bigger":{const i=S.get().rooms[n].items.find(l=>l.id===s);if(!i)break;const a=Wn.indexOf(Fn(i.size)),r=t.dataset.a==="smaller"?a-1:a+1;if(r<0||r>=Wn.length)break;S.dispatch({type:"item/size",room:n,id:s,size:Wn[r]}),C.click(),et(o);break}case"flip":S.dispatch({type:"item/flip",room:n,id:s}),C.swish(),et(o);break;case"front":S.dispatch({type:"item/front",room:n,id:s}),C.click(),et(o);break;case"back":S.dispatch({type:"item/back",room:n,id:s}),C.click(),et(o);break;case"delete":{const i=o?.getBoundingClientRect();Ne=null,S.dispatch({type:"item/delete",room:n,id:s}),i&&lp(i.left+i.width/2,i.top+i.height/2);break}}});Y.addEventListener("pointerdown",e=>{if(e.target.closest(".nudge"))return;Ul();const t=e.clientX,n=ie;let s=!1,o=0,i=e.clientX,a=performance.now();Jn(e,{edgeScroll:!1,onMove(r){if(Math.abs(r.clientX-t)>6&&(s=!0),!s)return;const l=performance.now();o=(r.clientX-i)/Math.max(1,l-a),i=r.clientX,a=l,di(),Je(n-(r.clientX-t)/yt())},onUp(){if(!s){Ne&&(Ne=null,Tt(S.get()));return}if(Gt)return;let r=-o*16/yt();const l=()=>{Math.abs(r)<.3||(Je(ie+r),r*=.92,Qo=requestAnimationFrame(l))};Qo=requestAnimationFrame(l)}})});Y.addEventListener("wheel",e=>{e.preventDefault(),Ul(),di(),Je(ie+(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)/yt())},{passive:!1});L("nudgeL").addEventListener("pointerdown",e=>{e.stopPropagation(),C.swish(),di(),Ql((ma??ie)-G*.6)});L("nudgeR").addEventListener("pointerdown",e=>{e.stopPropagation(),C.swish(),di(),Ql((ma??ie)+G*.6)});const Vu=L("minimap");Vu.addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault();const t=n=>{di();const s=Vu.getBoundingClientRect();Ql((n.clientX-s.left)/s.width*he-G/2)};t(e),C.click(),Jn(e,{edgeScroll:!1,onMove:t,onUp(){}})});L("btnPaint").addEventListener("click",()=>{if(!pt())return Yn(null);ni("paint")});L("btnDress").addEventListener("click",()=>ni("dress"));L("btnSound").addEventListener("click",()=>{S.dispatch({type:"settings/sound",on:!S.get().soundOn}),C.click()});document.addEventListener("gesturestart",e=>e.preventDefault());document.addEventListener("contextmenu",e=>e.preventDefault());const fp=new Set;document.addEventListener("pointerdown",e=>{fp.add(e.pointerId)},!0);for(const e of["pointerup","pointercancel"])document.addEventListener(e,t=>{fp.delete(t.pointerId)},!0);Y2({base:"/cozy-preview/",safeNow:()=>fp.size===0});window.__store=S;window.__shelfCache=()=>zn.size;P7({get:()=>S.get(),dispatch:e=>S.dispatch(e),subscribe:e=>S.subscribe(e),canDrift:()=>R==="house"&&tp(),speaks:()=>!k||Re===ee||k.speaksNeeds,layer:X,menuAfter:L("btnSound"),afterPaint:()=>{za(),Ba()}});window.__items=Object.fromEntries(Mn.filter(e=>e.img).map(e=>[e.kind,{w:e.w,h:Xe(e),cat:e.cat,holdable:e.holdable,svg:e.img.includes(".svg")}]));window.__cam={get:()=>ie,set:Je};window.__yieldNudges=za;window.__myPres=()=>ye();window.__playDropPolish=Mf;window.__takenSeats=ti;window.__applyPlayDrop=(e,t,n,s)=>{const o=S.get(),i=s?o.rooms[o.currentRoom].items.find(a=>a.id===s)??null:null;np(e,t,n,i)};window.__applyAvatarPlayDrop=(e,t,n)=>{const s=S.get(),o=n?s.rooms[s.currentRoom].items.find(i=>i.id===n)??null:null;jl(e,t,o)};window.__phoneShowKids=()=>dt();window.__avatar={richAvatars:qr,randomLook2:xl,look2FromLegacy:oa,legacyFromLook2:$l,sanitizeLook2:_a,handsFor:zl};window.__frameHouseKid=()=>Ts(!0);window.__layoutNameTags=()=>Sm();window.__lie={bedArt:El,lieBedKinds:rw,lieOffset:Cr,lieSpot:fw,box(e){const t=de[e];return t?{w:t.w,h:Xe(t)}:null}};window.__paint=()=>{Rt()};const ge=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function pt(){return!k||Re===ee||k.canEdit(me)}function Yn(e){C.pop();const t=L("houseTag");t.classList.add("show"),t.classList.remove("wiggle"),t.offsetWidth,t.classList.add("wiggle"),window.clearTimeout(al),al=window.setTimeout(()=>{R==="house"&&k&&!document.body.classList.contains("own-house")||t.classList.remove("show")},2e3),e&&(e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope")),F("🔒 Look-only house: ask the owner to unlock it!",1800)}const ye=()=>k?.myPresence()??null,bs=()=>k?k.players.get(k.pid)?.look??null:null;function Rn(e,t){if(e===mt){const n=bs();if(!n||!k)return;k.setLook(Ma({...n,...t})),Rt(),R==="street"&&ta(),R==="park"&&_o(),R==="ranch"&&xs();return}S.dispatch({type:"char/update",id:e,patch:t})}function nt(e){k?.setPresence(e)}function pp(e,t,n){const s=[];return k?.presence.forEach((o,i)=>{i!==k.pid&&o.where==="house"&&o.houseId===e&&o.room===t&&s.push(o)}),ey(n,s,{minX:80,maxX:he-80,minY:wo+60,maxY:Ce-20})}function KS(e){const t=ye();if(t&&t.where==="house"){const n=t.houseId?pp(t.houseId,e,t):t;nt({...t,room:e,x:n.x,y:n.y})}}function t2(e){Re=e,f1(e),Ne=null,setTimeout(()=>Q2.update());for(const t of Object.keys(ga))delete ga[t];ze=e===ee?e.get().characters[0]?.id??null:mt,ko(),Ut()}function hp(e,t,n,s){return`<div class="inner">${xt(e,n,s)}</div><div class="nametag">${ge(t)}</div>`}let Vc=!1;function XS(){if(Vc||!k||R!=="house")return;const e=k,t=ye();if(!t||t.where!=="house"||t.houseId!==me)return;const n=dn(e.pid,t);if(!n)return;let s=!1;if(e.presence.forEach((a,r)=>{if(r===e.pid||a.where!=="house"||a.houseId!==me||a.room!==t.room)return;const l=dn(r,a);l&&l.item===n.item&&l.n===n.n&&r<e.pid&&(s=!0)}),!s)return;const o=S.get().rooms[S.get().currentRoom]?.items??[],i=o.find(a=>da(a.kind)&&Math.hypot(a.x-t.x,a.y-t.y)<420)??o.find(a=>da(a.kind))??o.find(a=>a.id===n.item)??null;Vc=!0;try{jl(t.x,t.y,i)}finally{Vc=!1}}function Rt(){const e=new Set;if(k&&Re!==ee&&R==="house"){const n=S.get().currentRoom,s=[...k.presence.entries()],o=ye();o&&s.push([k.pid,o]);for(const[i,a]of s){const r=k.players.get(i);if(!r||a.where!=="house"||a.houseId!==me||a.room!==n)continue;e.add(i);let l=no.get(i);(!l||!l.isConnected)&&(l=document.createElement("div"),l.className="char avatar "+(i===k.pid?"mine":"other"),l.dataset.pid=i,X.appendChild(l),no.set(i,l),i===k.pid?JS(l):l.addEventListener("pointerdown",w=>{w.preventDefault(),w.stopPropagation()}));const c=r.look,d=dn(i,a),f=d?.pose??null,h=ea(S.get())===i,u=JSON.stringify(c)+r.nickname+(f||"")+(h?"h":"");if(l.dataset.look!==u){const w=l.querySelector(".bubble");l.innerHTML=hp(c,r.nickname,f,h),w&&l.appendChild(w),l.dataset.look=u}l.classList.toggle("holding",h);const y=go[c.size]??1,m=At(n,d,a);Mo(l,m.x,m.y,Bs*y,_n*y);const v=d&&S.get().rooms[n].items.find(w=>w.id===d.item);if(l.style.zIndex=String(v?1e3+v.z+1+d.n:5e3+Math.round(a.y)),l.classList.toggle("flipped",a.flip),l.classList.toggle("pose-sit",f==="sit"),l.classList.toggle("pose-lie",f==="lie"),l.classList.toggle("pose-lie-r",f==="lie"&&!!v?.flip),Pa(l,c,i===k.pid),h){const w=ym(c,f);w?Q1("avatar",i,l,w,m.y):U1("avatar",i)}}}const t=ea(S.get());k&&R==="house"&&t&&e.has(t)||V1("avatar");for(const[n,s]of no)(!e.has(n)||!s.isConnected)&&(e.has(n)||s.remove(),no.delete(n));Fl(),Lo(),Zl(),ks(),XS(),za(),Ba()}function JS(e){e.addEventListener("pointerdown",t=>{if(t.preventDefault(),t.stopPropagation(),Gt||!k)return;const n=ye();if(!n||n.where!=="house")return;const s=Qe(t.clientX,t.clientY),o=At(S.get().currentRoom,dn(k.pid,n),n),i={x:o.x-s.x,y:o.y-s.y};let a=o.x,r=!1;e.classList.add("lifted"),C.pick(),wa=!0,Jn(t,{onMove(l){const c=Qe(l.clientX,l.clientY),d=ye();if(!d||d.where!=="house"||(Math.hypot(c.x-s.x,c.y-s.y)>6&&(r=!0),!r))return;const f=Math.max(40,Math.min(he-40,c.x+i.x)),h=Math.max(wo+40,Math.min(Ce,c.y+i.y)),u=Math.abs(f-a)>3?f<a:d.flip;Math.abs(f-a)>3&&(a=f),Jr(d,f,h,u,null),Rt(),tl(S.get()),Se.isPlay()&&(ya=el(l.clientX,l.clientY)?.id??null)},onUp(l){wa=!1,ya=null,e.classList.remove("lifted");const c=ye();if(!r||!c||c.where!=="house"){C.click();return}const d=Qe(l.clientX,l.clientY),f=Math.max(40,Math.min(he-40,d.x+i.x)),h=Math.max(wo+40,Math.min(Ce,d.y+i.y));if(Se.isPlay()){const u=T1(l.clientX,l.clientY)??el(l.clientX,l.clientY);jl(f,h,u)}else Jr(c,f,h,c.flip,null);Rt(),tl(S.get()),C.drop(),et(e),requestAnimationFrame(()=>Ts(!0))}})})}function eT(e){return e.kind==="text"?e.v:(e.kind==="phrase"?Ui:C0)[e.v]??""}function Ba(){const e=document.body.classList.contains("phone")?".bubble":".bubble, .nametag, .need-bubble.show",t=document.querySelectorAll(e),n=Y.getBoundingClientRect();if(!n.width)return;const s=yt()||1,o=4;t.forEach(i=>{i.style.marginLeft="0px",i.style.marginTop="0px";const a=i.getBoundingClientRect();if(!a.width||!a.height)return;let r=0,l=0;a.width>=n.width-o*2||a.left<n.left+o?r=n.left+o-a.left:a.right>n.right-o&&(r=n.right-o-a.right),a.top<n.top+o?l=n.top+o-a.top:a.bottom>n.bottom-o&&(l=n.bottom-o-a.bottom),r&&(i.style.marginLeft=r/s+"px"),l&&(i.style.marginTop=l/s+"px")})}const pi=Ba,tT=230,nT=88;function lr(){if(document.body.classList.contains("phone")){L("nudgeL")?.classList.remove("yield"),L("nudgeR")?.classList.remove("yield");return}const e=yt()||1,t=L("layer")||X;for(const n of["nudgeL","nudgeR"]){const s=L(n);if(!s||s.classList.contains("off")||s.offsetParent===null){s?.classList.remove("yield");continue}const o=s.getBoundingClientRect(),i=s.classList.contains("yield")?(tT-nT)*e:0,a=o.top+i,r=o.bottom+i;let l=!1;for(const c of t.querySelectorAll(".char .inner, .need-bubble.show")){const d=c.getBoundingClientRect();if(!(d.width<2||d.height<2)&&d.left<o.right-2&&d.right>o.left+2&&d.top<r-2&&d.bottom>a+2){l=!0;break}}s.classList.toggle("yield",l)}}function za(){lr(),requestAnimationFrame(()=>{lr(),requestAnimationFrame(lr)}),window.setTimeout(lr,50)}function sT(e,t){const n=R==="street"?document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`):R==="park"?document.querySelector(`#pavatars .savatar[data-pid="${e}"]`):R==="ranch"?document.querySelector(`#ravatars .savatar[data-pid="${e}"]`):R==="gameroom"?document.querySelector(`#gavatars .savatar[data-pid="${e}"]`):no.get(e),s=n?[n]:[];for(const o of s){o.querySelector(".bubble")?.remove();const i=document.createElement("div");i.className="bubble"+(t.kind==="emote"?" emote":""),i.textContent=eT(t),o.appendChild(i),pi(),setTimeout(()=>i.classList.add("out"),4600),setTimeout(()=>i.remove(),5e3)}e!==k?.pid&&C.click()}function Gl(){const e=ye();if(!k||!e)return 0;let t=0;return k.presence.forEach(n=>{vv(e,n)&&t++}),t}function Lo(){const e=Gl();L("btnChat").classList.toggle("glow",e>0),Yl();const t=document.getElementById("chatNear");t&&(t.textContent=e?`${e} friend${e>1?"s":""} nearby can hear you`:"Walk closer to a friend to talk!",L("chatTray").classList.toggle("nobody",!e))}function n2(){const e=L("chatTray");if(!k)return;const t=document.body.classList.contains("phone"),n=`<div class="phrases">${Ui.map((a,r)=>`<button data-phrase="${r}">${ge(a)}</button>`).join("")}</div>`,s=k.settings.freeChat?`<form class="typed" id="chatForm"><input id="chatInput" maxlength="${$f}" autocomplete="off" autocorrect="on" enterkeyhint="send" placeholder="Type a message…"/><button type="submit">Send</button></form><div class="chatWarn" id="chatWarn"></div>`:'<div class="presetsOnly">Picking from the bubbles above 💬</div>',o=t?'<button type="button" class="chatMore" data-chat="more">more</button>':"";e.innerHTML=`<div class="chatHead"><span id="chatNear"></span><button class="close" data-chat="close">✕</button></div>
    <div class="emotes">${C0.map((a,r)=>`<button data-emote="${r}">${a}</button>`).join("")}</div>
    ${o}
    <div class="chatExtra${t?" hidden":""}">${n}${s}</div>`,Lo(),document.getElementById("chatForm")?.addEventListener("submit",a=>{a.preventDefault();const r=L("chatInput"),l=lv(r.value);if(!l.ok){L("chatWarn").textContent=Sl[l.reason]??"",C.pop();return}if(!Gl()){F("Walk closer to a friend to talk!");return}k.say({kind:"text",v:l.text}),r.value="",L("chatWarn").textContent="",r.blur()})}L("chatTray").addEventListener("click",e=>{const t=e.target;if(!k)return;if(t.closest('[data-chat="close"]')){L("chatTray").classList.add("hidden");return}const n=t.closest('[data-chat="more"]');if(n){const i=L("chatTray").querySelector(".chatExtra");i?.classList.toggle("hidden"),n.textContent=i&&!i.classList.contains("hidden")?"less":"more";return}const s=t.closest("[data-emote]"),o=t.closest("[data-phrase]");if(!(!s&&!o)){if(!Gl()){F("Walk closer to a friend to talk!");return}k.say(s?{kind:"emote",v:+s.dataset.emote}:{kind:"phrase",v:+o.dataset.phrase}),C.click()}});L("btnChat").addEventListener("click",()=>{L("chatTray").classList.toggle("hidden")||(n2(),C.swish())});function $n(){const e=document.body.classList,n=!!k&&Re!==ee&&R==="house"?k.houses.get(me):void 0,s=!!n&&n.meta.ownerId===k.pid;if(e.toggle("mode-hood",!!k),e.toggle("view-street",R!=="house"),e.toggle("view-park",R==="park"),e.toggle("view-ranch",R==="ranch"),e.toggle("view-map",R==="street"),e.toggle("view-gameroom",R==="gameroom"),e.toggle("in-barn",R==="ranch"&&qe),e.toggle("mode-play",R==="house"&&Se.isPlay()),Sp(),c2(),e.toggle("own-house",s),e.toggle("locked",!!n&&!pt()),e.toggle("has-hood",!!Tl()),Yl(),n){const o=k.players.get(n.meta.ownerId)?.nickname??"";L("houseTag").innerHTML=`${n.meta.locked?"🔒 ":""}<b>${ge(n.meta.name)}</b>${s?" · yours":o?" · "+ge(o):""}`;const i=L("lockIco");i&&(i.innerHTML=n.meta.locked?zt.lockOn:zt.lockOff);const a=n.meta.locked?"Unlock my house":"Lock my house";L("btnLock").setAttribute("aria-label",n.meta.locked?"Unlock my house":"Lock my house");const r=L("lockLabel");r&&(r.textContent=a)}Lo(),oT(),document.body.classList.contains("phone")&&b1()}let Uc="",al=0;function oT(){const e=L("houseTag"),t=!!k&&R==="house"&&!document.body.classList.contains("own-house");if(R!=="house"||!k){Uc="",e.classList.remove("show");return}if(t){e.classList.add("show");return}const n=me||"solo";Uc!==n&&(Uc=n,e.classList.add("show"),window.clearTimeout(al),al=window.setTimeout(()=>e.classList.remove("show"),2e3))}L("btnLock").addEventListener("click",()=>{const e=k?.houses.get(me);!e||e.meta.ownerId!==k.pid||(k.lock(e.meta.id,!e.meta.locked),C.click(),F(e.meta.locked?"Unlocked: friends can decorate!":"Locked: friends can look but not change things"))});const Mt=new Map;let Uu="",Zd=0,Ze={w:Un,h:Qn,portrait:!1};function iT(){return document.body.classList.contains("phone-portrait")?!0:document.body.classList.contains("phone")?!1:window.innerHeight>=window.innerWidth*1.25}function s2(){const e=L("street"),t=Ze.portrait&&!document.body.classList.contains("phone")?24:0,n=Math.max(1,e.clientWidth-t),s=Math.max(1,e.clientHeight-t);return Math.min(n/Ze.w,s/Ze.h)}function aT(e){const t=L("street"),n=L("mapWorld"),s=Ze.w*e,o=Ze.h*e;n.style.marginLeft=Math.max(0,Math.floor((t.clientWidth-s)/2))+"px",n.style.marginTop=Math.max(0,Math.floor((t.clientHeight-o)/2))+"px",t.scrollLeft=0,t.scrollTop=0,o2()}function o2(){const e=L("street"),t=L("mapWorld"),n=4,s=e.clientWidth-n,o=e.clientHeight-n,i=t.offsetLeft,a=t.offsetTop;t.querySelectorAll(".mapSign").forEach(r=>{r.style.transform="translateX(-50%)";const l=r.offsetWidth,c=r.offsetHeight,d=i+r.offsetLeft-l/2,f=a+r.offsetTop;let h=0,u=0;d<n&&(h=n-d),d+l+h>s&&(h-=d+l+h-s),f<n&&(u=n-f),f+c+u>o&&(u-=f+c+u-o),rT(r,h,u,i,a,n,s,o)})}function rT(e,t,n,s,o,i,a,r){const l=[...e.parentElement.querySelectorAll(".mapMail")],c=()=>{const f=e.offsetWidth,h=e.offsetHeight,u=s+e.offsetLeft-f/2+t,y=o+e.offsetTop+n;return{left:u,top:y,right:u+f,bottom:y+h,width:f,height:h}};for(let f=0;f<6;f++){const h=c(),u=l.find(_=>{const P=s+_.offsetLeft,$=o+_.offsetTop,x=P+_.offsetWidth,D=$+_.offsetHeight;return h.right>P+2&&h.left<x-2&&h.bottom>$+2&&h.top<D-2});if(!u)break;const y=s+u.offsetLeft,m=o+u.offsetTop,v=m+u.offsetHeight,w=c(),g=v+4-w.top,b=w.bottom-(m-4);w.top+g+w.height<=r?n+=g:w.top-b>=i?n-=b:t-=Math.min(w.right,y+u.offsetWidth)-Math.max(w.left,y)+6}const d=c();d.left<i&&(t+=i-d.left),d.right>a&&(t-=d.right-a),d.top<i&&(n+=i-d.top),d.bottom>r&&(n-=d.bottom-r),e.style.transform=Math.abs(t)>.5||Math.abs(n)>.5?`translate(calc(-50% + ${t.toFixed(1)}px), ${n.toFixed(1)}px)`:"translateX(-50%)"}document.fonts?.ready.then(()=>{R==="street"&&o2()});function lT(){return k?[...k.houses.values()].map(e=>e.meta).sort((e,t)=>e.slot-t.slot):[]}function cT(e){const s=Math.round(97.5),o=Math.max(1,Math.ceil(e/(e===1?1:2))),i=158,a=318,l=a+(o-1)*i+s/2+108,c=Math.max(1020,l+78),d=Math.max(l,Math.min(c-88,Math.round(c*.74))),f=e===1?[280]:[150,410],h=e===1?1:2,u=Array.from({length:e},(y,m)=>({x:f[m%h],y:a+Math.floor(m/h)*i}));return{w:560,h:c,hw:104,hh:s,houses:u,square:{x:280,y:d},park:{x:96,y:122},club:{x:280,y:116},ranch:{x:458,y:120}}}function Qu(e,t,n,s){return!e||e.mine||!Mm()?"":`<button class="mapKnock" data-knock="${e.id}" aria-label="Knock at ${ge(e.name)} for a treat" style="left:${s(t)};top:${s(n)}"><span>🎃</span></button>`}const Nu=new Map;function i2(){const e=L("street");let t=document.getElementById("candyBucket");if(!Mm()){t?.remove();return}t||(t=document.createElement("div"),t.id="candyBucket",t.className="candyBucket",t.setAttribute("aria-live","polite"),e.appendChild(t));const n=xm(localStorage);t.innerHTML=`<span class="pail">🎃</span><b>${n}</b>`,t.setAttribute("aria-label",`${Pm(n,"treat")} in your bucket`)}function dT(e){const{treat:t}=XL(localStorage);i2(),et(e),C.pop();const n=document.createElement("span");n.className="treatPop",n.textContent=t,e.appendChild(n),setTimeout(()=>n.remove(),900);const s=document.getElementById("candyBucket");s&&et(s),k&&k.knock(e.dataset.knock)}function so(e=!1){if(R!=="street")return;const t=L("mapWorld"),n=lT(),s=k?n.map(h=>({id:h.id,name:h.name,style:h.style,locked:h.locked,mine:h.ownerId===k.pid,lit:!!k.players.get(h.ownerId)?.online})):Zd?Array.from({length:Zd},(h,u)=>({id:"fake"+u,name:["Reagan","Quinn","Chloe","Sloane","Cada","Emma","Olivia","Charlotte","Amelia","Sophia","Isabella","Mia"][u%12]+"'s House",style:u,locked:u===3,mine:u===0,lit:u%3!==1})):[null],o=iT()?cT(Math.max(1,s.length)):null;Ze=o?{w:o.w,h:o.h,portrait:!0}:{w:Un,h:Qn,portrait:!1},document.body.classList.toggle("map-tall",!!o&&!document.body.classList.contains("phone"));const i=s2(),a=(Ze.portrait?"P":"L")+Ze.w+"x"+Ze.h+":"+i.toFixed(3)+JSON.stringify(n)+(k?n.map(h=>(k.players.get(h.ownerId)?.online?1:0)+(Qc(h.id)?"u":"")).join("")+k.pid:"solo");if(!e&&a===Uu&&t.querySelector("#mapFaces")){ta();return}Uu=a,t.style.width=Ze.w*i+"px",t.style.height=Ze.h*i+"px",t.style.setProperty("--sc",String(i)),t.innerHTML=`<div class="mapClip">${o?ny(o.w,o.h):ty()}</div>`;const r=t.querySelector(".mapClip");mo(r,o?"map-portrait":"map");const l=h=>h*i+"px";Mt.clear();const c=s.length;let d="",f="";if(o){const{hw:h,hh:u}=o,y=34,m=40;s.forEach((b,_)=>{const P=o.houses[_]??o.houses[0],$=b?`house:${b.id}`:"home",x=b?b.name:"My House";Mt.set(b?"house:"+b.id:"home",{x:P.x,y:P.y-u/2-8});const D=!!(b&&Qc(b.id)),W=P.x<o.w/2,Q=W?Math.max(4,P.x-h/2-y-8):Math.min(o.w-y-4,P.x+h/2+8),q=Math.max(4,Math.min(o.h-m-4,P.y-u*.42));d+=`<button class="mapSpot mapHouse ${b?.mine||!b?"mine":""}" data-go="${$}" aria-label="${ge(x)}" style="left:${l(P.x-h/2)};top:${l(P.y-u/2)};width:${l(h)};height:${l(u)}">${Wr(b?b.style:0,{lit:b?b.lit:!0})}${b?.locked?'<span class="lockBadge">🔒</span>':""}${b?.mine||!b?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${D?"up":""}" data-mail="${b?b.id:"home"}" aria-label="${ge(x)} mailbox" style="left:${l(Q)};top:${l(q)};width:${l(y)};height:${l(m)}">${dh(D)}</button>${Qu(b,W?P.x+h/2-30:P.x-h/2-10,P.y+u*.12,l)}`,f+=`<div class="mapSign ${b?.mine||!b?"mine":""}" style="left:${l(P.x)};top:${l(P.y+u/2+2)}">${ge(x)}</div>`});const v=(b,_,P,$,x,D,W,Q,q)=>{d+=`<button class="mapSpot ${b}" data-go="${_}" aria-label="${P}" style="left:${l(x-W/2)};top:${l(D-Q/2)};width:${l(W)};height:${l(Q)}">${$}</button>`,f+=`<div class="mapSign place" style="left:${l(x)};top:${l(D+q)}">${P==="The Park"?"Park":P==="Rainbow Ranch"?"Rainbow Ranch":"Clubhouse"}</div>`};v("mapPark","park","The Park",Bp,o.park.x,o.park.y,148,126,68),v("mapRanch","ranch","Rainbow Ranch",zp,o.ranch.x,o.ranch.y,156,128,72),v("mapClub","gameroom","The Clubhouse",Dp,o.club.x,o.club.y,146,120,68),Mt.set("park",{x:o.park.x,y:o.park.y-78}),Mt.set("ranch",{x:o.ranch.x,y:o.ranch.y-80}),Mt.set("barn",{x:o.ranch.x,y:o.ranch.y+8}),Mt.set("gameroom",{x:o.club.x,y:o.club.y-74}),Mt.set("square",o.square);const w=[{x:o.park.x,y:o.park.y,r:90},{x:o.ranch.x,y:o.ranch.y,r:96},{x:o.club.x,y:o.club.y,r:88},{x:o.square.x,y:o.square.y,r:70},...o.houses.map(b=>({x:b.x,y:b.y,r:78}))],g=o.w/2;r.insertAdjacentHTML("beforeend",Op(w,(b,_)=>Math.abs(b-g)<34,o.w,o.h)+iy(o.w,o.h,w)+d+'<div class="mapFaces" id="mapFaces"></div>')}else{const h=t.querySelector("#mapRoad"),u=h.getTotalLength(),y=Array.from({length:160},(_,P)=>h.getPointAtLength(u*P/159)),m=(_,P)=>y.some($=>Math.hypot($.x-_,$.y-P)<50),v=Gd(),w=c>8?80:94,g=w*300/320,b=a2(h,c,v);s.forEach((_,P)=>{const $=b[P],x=_?`house:${_.id}`:"home",D=_?_.name:"My House";Mt.set(_?"house:"+_.id:"home",{x:$.x,y:$.y-g/2-4});const W=!!(_&&Qc(_.id)),Q=34,q=40,se=14/i,Me=Math.max(4,Math.min(Un-Q-4,$.x+w/2+se)),Ke=Math.max(4,Math.min(Qn-q-4,$.y-g*.22));d+=`<button class="mapSpot mapHouse ${_?.mine||!_?"mine":""}" data-go="${x}" aria-label="${ge(D)}" style="left:${l($.x-w/2)};top:${l($.y-g/2)};width:${l(w)};height:${l(g)}">${Wr(_?_.style:0,{lit:_?_.lit:!0})}${_?.locked?'<span class="lockBadge">🔒</span>':""}${_?.mine||!_?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${W?"up":""}" data-mail="${_?_.id:"home"}" aria-label="${ge(D)} mailbox" style="left:${l(Me)};top:${l(Ke)};width:${l(Q)};height:${l(q)}">${dh(W)}</button>${Qu(_,Math.max(4,$.x-w/2-40/i),$.y-g*.05,l)}`,f+=`<div class="mapSign ${_?.mine||!_?"mine":""}" style="left:${l($.x)};top:${l($.y+g/2-2)}">${ge(D)}</div>`}),d+=`<button class="mapSpot mapPark" data-go="park" aria-label="The Park" style="left:${l(os.x-100)};top:${l(os.y-85)};width:${l(200)};height:${l(170)}">${Bp}</button>`,f+=`<div class="mapSign place" style="left:${l(os.x)};top:${l(os.y+70)}">Park</div>`,d+=`<button class="mapSpot mapRanch" data-go="ranch" aria-label="Rainbow Ranch" style="left:${l(un.x-110)};top:${l(un.y-90)};width:${l(220)};height:${l(180)}">${zp}</button>`,f+=`<div class="mapSign place" style="left:${l(un.x)};top:${l(un.y+78)}">Rainbow Ranch</div>`,d+=`<button class="mapSpot mapClub" data-go="gameroom" aria-label="The Clubhouse" style="left:${l(is.x-95)};top:${l(is.y-78)};width:${l(190)};height:${l(156)}">${Dp}</button>`,f+=`<div class="mapSign place" style="left:${l(is.x)};top:${l(is.y+82)}">Clubhouse</div>`,Mt.set("park",{x:os.x,y:os.y-60}),Mt.set("ranch",{x:un.x-30,y:un.y-60}),Mt.set("barn",{x:un.x+10,y:un.y+10}),Mt.set("gameroom",{x:is.x,y:is.y-52}),r.insertAdjacentHTML("beforeend",Op(v,m)+d+'<div class="mapFaces" id="mapFaces"></div>')}t.insertAdjacentHTML("beforeend",f),i2(),ta(),aT(i),ta()}const Gd=()=>[{x:os.x,y:os.y,r:115},{x:un.x,y:un.y,r:125},{x:mn.x,y:mn.y,r:100},{x:is.x,y:is.y,r:90}];function a2(e,t,n){const s=e.getTotalLength(),o=[];for(let i=0;i<t;i++){const a=t===1?.2:.05+.75*i/(t-1),r=e.getPointAtLength(s*a),l=e.getPointAtLength(Math.min(s,s*a+3));let c=-(l.y-r.y),d=l.x-r.x;const f=Math.hypot(c,d)||1;c/=f,d/=f;const h=[1,-1].map(m=>({x:r.x+c*72*m,y:r.y+d*72*m})).map(m=>({...m,score:Math.min(...n.map(v=>Math.hypot(v.x-m.x,v.y-m.y)-v.r),m.x-50,Un-50-m.x,m.y-60,Qn-40-m.y)})),u=i%2?h:[h[1],h[0]],y=u[0].score>0||u[0].score>=u[1].score?u[0]:u[1];y.x=Math.max(60,Math.min(Un-60,y.x)),y.y=Math.max(62,Math.min(Qn-72,y.y)),n.push({x:y.x,y:y.y,r:70}),o.push({x:y.x,y:y.y})}return o}window.__mapFake=e=>{Zd=e,so(!0)};window.__mapLayout=e=>{const t=document.querySelector("#mapRoad");if(!t)return null;const n=a2(t,e,Gd());let s=1e9,o=1e9,i=!0;return n.forEach((a,r)=>{n.forEach((l,c)=>{c>r&&(s=Math.min(s,Math.hypot(a.x-l.x,a.y-l.y)))}),Gd().forEach(l=>{o=Math.min(o,Math.hypot(a.x-l.x,a.y-l.y)-l.r)}),(a.x<55||a.x>Un-55||a.y<60||a.y>Qn-70)&&(i=!1)}),{n:e,minHouse:s,minSpot:o,inside:i}};function r2(e){return e.where==="house"&&e.houseId?{kind:"house",houseId:e.houseId,room:e.room}:e.where==="park"||e.where==="ranch"||e.where==="barn"||e.where==="gameroom"?{kind:e.where}:{kind:"square"}}const fT=e=>e.kind==="house"?"house:"+e.houseId:e.kind;function ta(){const e=document.getElementById("mapFaces");if(!e||R!=="street")return;const t=s2(),n=new Set,s=[];if(k){const i=[...k.presence.entries()],a=ye();a&&i.push([k.pid,a]);for(const[r,l]of i){const c=k.players.get(r);c&&s.push({key:r,look:c.look,name:c.nickname,mine:r===k.pid,place:r2(l)})}}else{const i=ee.get().characters[0];i&&s.push({key:"solo",look:Ma(i),name:"You",mine:!0,place:{kind:"square"}})}const o=new Map;for(const i of s){const a=fT(i.place);o.has(a)||o.set(a,[]),o.get(a).push(i)}for(const[i,a]of o)a.sort((r,l)=>r.mine?-1:l.mine?1:r.name.localeCompare(l.name)),a.forEach((r,l)=>{let c,d;const f=Mt.get("square")??{x:mn.x,y:mn.y};if(i==="square")if(Ze.portrait){const w=Math.floor(l/3),g=l%3,b=Math.min(3,a.length-w*3);c=f.x+(g-(b-1)/2)*176,d=f.y+w*112}else if(a.length===1)c=mn.x,d=mn.y;else{const m=-Math.PI/2+l*(Math.PI*2/a.length);c=mn.x+Math.cos(m)*78,d=mn.y+Math.sin(m)*78}else{const m=Mt.get(i)??f,v=Ze.portrait?2:3,w=Ze.portrait?150:64,g=Math.floor(l/v),b=l%v,_=Math.min(v,a.length-g*v);c=m.x+(b-(_-1)/2)*w,d=m.y-g*(Ze.portrait?108:64)}Ze.portrait&&(c=Math.max(100,Math.min(Ze.w-100,c)),d=Math.max(48,Math.min(Ze.h-84,d))),{fx:c,fy:d}=hT(c,d,t),n.add(r.key);let h=e.querySelector(`.mapFace[data-pid="${r.key}"]`);h||(h=document.createElement("button"),h.className="mapFace "+(r.mine?"mine":"other"),h.dataset.pid=r.key,h.setAttribute("aria-label",r.mine?"You":r.name),e.appendChild(h));const u=JSON.stringify(r.look)+r.name;if(h.dataset.look!==u){const m=h.querySelector(".bubble");h.innerHTML=`<span class="face">${nf(xt(r.look))}</span><span class="fname">${ge(r.mine?"You":r.name)}</span>`,m&&h.appendChild(m),h.dataset.look=u}h.dataset.place=i;const y=Ze.portrait?62:46;h.style.left=(c-y/2)*t+"px",h.style.top=(d-y/2)*t+"px",h.style.width=h.style.height=y*t+"px"});e.querySelectorAll(".mapFace").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),Lo()}const pT=54;function hT(e,t,n){const s=document.querySelector("#mapWorld .mapFaces");if(!s)return{fx:e,fy:t};const o=s.getBoundingClientRect(),i=[...document.querySelectorAll("#mapWorld .mapMail, #mapWorld .mapKnock")].map(u=>u.getBoundingClientRect()).filter(u=>u.width>0).map(u=>({x:(u.left+u.width/2-o.left)/n,y:(u.top+u.height/2-o.top)/n})),a=pT/n,r=(u,y)=>!i.some(m=>Math.abs(m.x-u)<a&&Math.abs(m.y-y)<a);if(r(e,t))return{fx:e,fy:t};const l=a+.5,c=[e,...i.flatMap(u=>[u.x-l,u.x+l])],d=[t,...i.flatMap(u=>[u.y-l,u.y+l])];let f=null,h=1e9;for(const u of c)for(const y of d){if(u<24/n||u>Ze.w-24/n||y<24/n||y>Ze.h-24/n||!r(u,y))continue;const m=Math.hypot(u-e,y-t);m<h&&(h=m,f={fx:u,fy:y})}return f&&(e=f.fx,t=f.fy),{fx:e,fy:t}}function up(){L("mapWorld").classList.remove("zoomIn")}function l2(e,t){up(),C.swish(),uT(e)}function Da(e){Xn()||(e.classList.remove("sceneIn"),e.offsetWidth,e.classList.add("sceneIn"),setTimeout(()=>e.classList.remove("sceneIn"),260))}function uT(e){e.kind==="house"?f2(e.houseId,e.room):e.kind==="home"?d2():e.kind==="park"?xT():e.kind==="ranch"?ka(!1):e.kind==="barn"?ka(!0):e.kind==="gameroom"&&LT()}function gT(e){const t=k?.presence.get(e);if(!k||!t)return;const n=r2(t),s=k.players.get(e)?.nickname??"your friend";if(n.kind==="square"){F(`${s} is on the map too! 👋`),C.pop();return}document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`),l2(n),setTimeout(()=>{const o=ye();if(!o||!k)return;const i=t.x+(t.x>300?-110:110);if(n.kind==="house"&&o.where==="house")nt({...o,x:i,y:t.y}),Rt(),Ql(i-G/2);else if((n.kind==="park"||n.kind==="ranch"||n.kind==="barn")&&o.where===n.kind){an({...o,x:i,y:Math.max(ro,Math.min(qn,t.y)),flip:i>t.x});const a=n.kind==="park"?Ds():fn(),r=L(n.kind==="park"?"parkScroll":"ranchScroll");requestAnimationFrame(()=>{r.scrollLeft=t.x*a-r.clientWidth/2,dt()})}else if(n.kind==="gameroom"&&o.where==="gameroom"){const a=ci();a||an({where:"gameroom",x:i,y:Math.max(ro,Math.min(qn,t.y)),flip:i>t.x});const r=Os(),l=L("grScroll"),c=a?.x??t.x;requestAnimationFrame(()=>{l.scrollLeft=c*r-l.clientWidth/2,dt()})}F(`You found ${s}! 💕`)},420)}function Qc(e){if(!k)return!1;const t=k.houses.get(e);return!!t&&t.meta.ownerId===k.pid&&ff(t.confirmed.mailbox)>0}let cr=0;function c2(){v1();const e=document.getElementById("mailCue"),t=k?.myHouseId()??"",n=k&&t?ff(k.houses.get(t)?.confirmed.mailbox):0;if(!k||R!=="street"||n<=0){n<=0&&(cr=0),e?.classList.remove("show");return}cr!==n&&(cr=n,e?.classList.add("show"),window.setTimeout(()=>{cr===n&&e?.classList.remove("show")},8e3))}function Yl(){const e=k?.myHouseId()??"",t=k&&e?ff(k.houses.get(e)?.confirmed.mailbox):0,n=L("menuBadge");n.textContent=t>9?"9+":String(t),n.classList.toggle("on",t>0);const s=document.getElementById("mailNew");s&&(s.textContent=t>0?t===1?"1 new":t+" new":"",s.classList.toggle("on",t>0));const o=k?k.presence.size:0,i=L("mapBadge");i.textContent=o>9?"9+":String(o),i.classList.toggle("on",o>0),L("btnMap").setAttribute("aria-label",o>0?`Map, ${Pm(o,"friend")} online`:"Map");const a=Gl(),r=L("chatBadge");r.textContent=a>9?"9+":String(a),r.classList.toggle("on",a>0)}function rl(e){e&&document.querySelectorAll(".toast").forEach(t=>t.remove()),L("menuPop").classList.toggle("hidden",!e),L("btnMenu").setAttribute("aria-expanded",e?"true":"false"),L("btnPhoto").classList.toggle("ok",R==="house"),e&&Yl(),mT()}L("btnPhoto").addEventListener("click",()=>{rl(!1),requestAnimationFrame(()=>requestAnimationFrame(()=>{jL(Y,()=>C.click())}))});function mT(){const e=L("houseTag");if(e.style.top="",!e.classList.contains("show")||L("menuPop").classList.contains("hidden"))return;const t=document.querySelector(".menuCard");if(!t)return;const n=L("stageWrap").getBoundingClientRect(),s=t.getBoundingClientRect(),o=e.getBoundingClientRect();if(!(o.top<s.bottom-2&&o.bottom>s.top+2&&o.left<s.right-2&&o.right>s.left+2))return;const a=s.bottom-n.top+8;a+o.height<n.height-8?e.style.top=a+"px":e.style.top=Math.max(8,n.height-o.height-10)+"px"}L("btnMenu").addEventListener("click",()=>{rl(L("menuPop").classList.contains("hidden")),C.click()});L("menuPop").addEventListener("click",e=>{const t=e.target;if(t.id==="menuPop"||t.closest("#menuClose")){rl(!1);return}t.closest(".menuRow")&&rl(!1)});L("btnStudio").addEventListener("click",()=>B1());L("btnMail").addEventListener("click",()=>{const e=k?.myHouseId();e?gp(e):F("Join a street to send letters!")});L("secrets").addEventListener("click",()=>{if(R!=="house"){F("Surprises are hiding in your house!");return}Se.isPlay()&&L("modeDecorate").click(),Bt="secrets",Ut(),F("Surprises are in your drawer!")});function gp(e){if(!k||e==="home"||!k.houses.has(e)){F("Join a street to send letters!");return}const t=k.houses.get(e);Mr.open(e,t.meta.name,t.meta.ownerId===k.pid,t.confirmed.mailbox?.letters??[]),C.click()}L("mapWorld").addEventListener("click",e=>{const t=e.target;if(R!=="street")return;const n=t.closest(".mapKnock");if(n){dT(n);return}const s=t.closest(".mapMail");if(s){gp(s.dataset.mail||"home");return}const o=t.closest(".mapFace");if(o){o.classList.contains("mine")?(et(o),C.pop(),F("That's you! Tap a place to go there")):gT(o.dataset.pid);return}const i=t.closest("[data-go]");if(!i)return;const a=i.dataset.go;l2(a.startsWith("house:")?{kind:"house",houseId:a.slice(6)}:{kind:a})});function Eo(){up(),Om(),L("street").classList.add("hidden"),L("park").classList.add("hidden"),L("ranch").classList.add("hidden"),L("gameroom").classList.add("hidden"),_r()?.close(),L("chatTray").classList.add("hidden"),L("sheet").classList.add("hidden")}function No(){up(),Ue=null,Pt=[],qe=!1,k?nt({where:"street",x:600,y:540,flip:!1}):Wt=null,Eo(),R="street",L("street").classList.remove("hidden"),L("streetTitle").textContent=k?"Our Neighborhood":"My Map",$n(),so(!0);const e=L("mapWorld");e.style.transformOrigin="50% 50%",e.classList.remove("zoomIn","mapIn"),Xn()||(e.offsetWidth,e.classList.add("mapIn")),C.swish()}function d2(){if(k){const e=k.myHouseId();e&&k.houses.has(e)&&f2(e);return}Eo(),R="house",Wt=null,Se.sync(!0),$n(),ko(),Da(L("stageWrap")),C.sparkle(),Ps()}function f2(e,t="living"){if(!k||!k.houses.has(e))return;me=e,R="house",qe=!1,Se.sync(e===k.myHouseId());let n=Xr.get(e);n||(n=Sv(k,e,{get:()=>ee.get().soundOn,set:s=>ee.dispatch({type:"settings/sound",on:s})}),Xr.set(e,n)),n.dispatch({type:"room/switch",room:t});{const s=pp(e,t,{x:900+Math.random()*300,y:540});nt({where:"house",houseId:e,room:t,x:s.x,y:s.y,flip:!1})}Eo(),t2(n),Da(L("stageWrap")),C.sparkle(),Ps()}function mp(){k?.close(),k=null,Xr=new Map,R="house",me="",Wt=null,Ue=null,Pt=[],qe=!1,L("elsewhere").classList.add("hidden"),Eo(),Se.sync(!0),t2(ee),$n()}L("btnMap").addEventListener("click",()=>{if(R==="street"){C.pop();return}No()});L("btnHome").addEventListener("click",()=>{if(R==="house"&&(!k||me===k.myHouseId())){C.pop();return}d2()});L("phoneOk").addEventListener("click",()=>{L("phoneNote").classList.add("hidden"),C.click()});L("elsewhereGo").addEventListener("click",()=>{C.click(),k?.connect()});L("btnSolo").addEventListener("click",()=>{mp(),F("Playing in your own house 🏠")});window.addEventListener("resize",()=>{R==="street"&&so(!0),R==="park"&&bp(),R==="ranch"&&Lp(),R==="gameroom"&&Ff(),dt()});function yp(e){k=e,Xr=new Map,e.on("players",()=>{k===e&&(R==="street"?so():R==="park"?_o():R==="ranch"?(xs(),Sp()):R==="gameroom"?Xi():(Rt(),$n()),ba==="dress"&&gn())}),e.on("houses",()=>{k===e&&(R==="street"?so():R==="house"&&!e.houses.has(me)&&(F("That house is gone now"),No()))}),e.on("houseMeta",n=>{k!==e||n!==me||R!=="house"||(Ne=null,$n(),Tt(S.get()),Ut(),pt()||L("sheet").classList.add("hidden"))}),e.on("pres",()=>{k===e&&(R==="street"?ta():R==="park"?_o():R==="ranch"?xs():R==="gameroom"?Xi():Rt())}),e.on("art",(n,s)=>{if(!(k!==e||!s||typeof s!="object")){for(const[o,i]of Object.entries(s)){e1(o,i);const a=Lr.get(o);a&&(Lr.delete(o),R==="house"&&a.houseId===me&&H1(a.room,o,a.frame,a.x))}R==="house"&&n===me&&Tt(S.get())}}),e.on("artFail",(n,s,o)=>{k===e&&(Lr.delete(s),o==="full"?F("Your walls are full of art! Take one down to hang a new one."):o==="streetfull"?F("The street is full of art! Take one down to hang a new one."):o==="slow"?F("So much art! Wait a moment, then hang it again."):o==="locked"&&F("This house is closed right now. Paint at home!"))}),e.on("ranch",()=>{k===e&&R==="ranch"&&nc(!0)}),e.on("ranchFail",n=>{k===e&&Kd(n)}),e.on("noride",()=>{if(k!==e)return;const n=ye();if(n?.ride!==void 0){const{ride:s,...o}=n;nt(o),xs()}F("Someone is riding that horse!")}),e.on("fx",(n,s)=>{k===e&&ZT(n,s)}),e.on("bubble",(n,s)=>{k===e&&sT(n,s)}),e.on("knocked",(n,s)=>{if(k!==e)return;const o=Date.now();(Nu.get(s)??0)>o-2e4||(Nu.set(s,o),F(JL(s)))}),e.on("sayFail",n=>F(n==="presetsOnly"?"Typing is off. Pick a bubble!":Sl[n]||"Couldn't send that. Try again!")),e.on("mailbox",()=>{k===e&&(R==="street"&&so(!0),c2(),Mr.refresh(),Yl())}),e.on("mailFail",n=>{k===e&&Mr.fail(n)}),e.on("settings",()=>{k===e&&(L("chatTray").classList.contains("hidden")||n2(),Mr.refresh())}),e.on("removed",()=>{F("A grown-up took this iPad off the street");const n=e.cfg;Hn({url:n.url,code:n.code,id:n.id,parentKey:n.parentKey}),mp()}),e.on("status",n=>{k===e&&(document.body.classList.toggle("reconnecting",n!=="online"&&!e.replaced),(n==="online"||n==="connecting")&&L("elsewhere").classList.add("hidden"))}),e.on("replaced",()=>{k===e&&L("elsewhere").classList.remove("hidden")}),e.on("table",()=>{if(k===e){if(R==="gameroom"){const n=ci(),s=ye();n&&s?.where==="gameroom"&&Math.hypot(s.x-n.x,s.y-n.y)>40&&nt({where:"gameroom",x:n.x,y:Math.max(ro,Math.min(qn,n.y)),flip:s.flip}),Xi()}_r()?.refresh()}}),e.on("tblFail",(n,s)=>{k===e&&_r()?.fail(n,s)}),e.on("welcome",()=>{if(k===e)if(R==="street")so(!0);else if(R==="park"||R==="ranch"){const n=ye();n&&nt(n),R==="park"?bp():Lp(),dt()}else if(R==="gameroom"){const n=ye();n&&nt(n),Ff(),dt(),_r()?.refresh()}else e.houses.has(me)?ko():No()}),e.on("reset",(n,s,o)=>{if(k!==e)return;const i=W7(s,o);i&&F(i)});const t=U7(5e3);e.on("act",(n,s,o,i)=>{if(k!==e||R!=="house"||n!==me||!o||o===e.pid||s.type!=="item/move"&&s.type!=="item/delete"||s.room!==S.get().currentRoom||!t(o+":"+s.id))return;const a=V7(e.players.get(o)?.nickname??"",s,de[i]?.name??"");a&&F(a,2e3)}),No()}async function yT(){$n();const e=Tl(),t=Zo();if(!e||!t?.token||t.url!==e)return;const n=new Pl(t),s=await n.connect();s==="ok"?yp(n):(n.close(),s!=="closed"&&F("Couldn't reach the street. Playing at home!"))}function Yt(e,t,n=""){const s=document.createElement("div");s.className="sheet hoodSheet "+n,s.innerHTML=`<div class="card">${e}</div>`,document.body.appendChild(s),C.swish();const o=()=>s.remove();return s.addEventListener("click",i=>{const a=i.target;if(a===s||a.closest('[data-m="close"]'))return o();t(a,o,s)}),{root:s,close:o}}const Kt='<button class="close" data-m="close">✕</button>';L("btnHood").addEventListener("click",()=>wT());function wT(){const e=Tl();if(!e){Yt(`${Kt}<h2>Neighborhood</h2><p class="hint">The street isn't open yet. Ask a grown-up to set it up!</p>`,()=>{});return}const t=Zo()?.url===e?Zo():null;Yt(`${Kt}<h2>Neighborhood</h2><div class="bigBtns">
      ${t?.token?`<button class="big go" data-m="go">${zt.street}<span>Go to my street</span></button>`:`<button class="big go" data-m="join">${zt.street}<span>Join a friend's street</span></button>`}
      <button class="big grown" data-m="create">${zt.shield}<span>${t?.parentKey?"Grown-ups":"Grown-ups: start a street"}</span></button></div>`,async(n,s)=>{const o=n.closest("[data-m]")?.dataset.m;if(o==="go"){s();const i=new Pl(t),a=await i.connect();a==="ok"?yp(i):(i.close(),F(a.startsWith("badtoken")?"Let's join again. Tap your name!":"Couldn't reach the street. Try again!"))}o==="join"&&(s(),na(e)),o==="create"&&(s(),await Z0()&&(t?.parentKey?Kl():bT(e)))})}async function bT(e){let t;try{t=await kv(e)}catch{F("Couldn't create a street right now");return}Hn({url:e,code:t.code,id:t.id,parentKey:t.parentKey}),Yt(`${Kt}<h2>Your street is ready!</h2><p class="hint">Kids join with this code (you can pick your own on the grown-up screen):</p><div class="code" id="newCode">${t.code}</div>
    <p class="hint small">Grown-up key (keep it private; it opens the grown-up screen on another device):<br><b class="key" id="parentKey">${t.parentKey}</b></p>
    <div class="bigBtns"><button class="big grown" data-m="setup">${zt.shield}<span>Add kids' names &amp; code</span></button>
    <button class="big go" data-m="joinhere">${zt.street}<span>Join on this iPad</span></button></div>`,(n,s)=>{n.closest('[data-m="joinhere"]')&&(s(),wp(e,t.code)),n.closest('[data-m="setup"]')&&(s(),Kl())})}function na(e,t=""){const n=Yt(`${Kt}<h2>Join a street</h2><p class="hint">Type the code a grown-up gave you</p>
    <form id="codeForm" class="codeForm"><input id="codeInput" maxlength="${_f}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="CODE"/><button type="submit" class="go">Next</button></form>
    <p class="err">${ge(t)}</p>`,()=>{}),s=n.root.querySelector("#codeInput");setTimeout(()=>s.focus(),50),s.addEventListener("input",()=>{s.value=Or(s.value)}),n.root.querySelector("#codeForm").addEventListener("submit",o=>{o.preventDefault();const i=Or(s.value);if(!Eb(i)){n.close(),na(e,"Hmm, that code doesn't look right. Check it and try again!");return}n.close(),wp(e,i)})}async function wp(e,t,n=""){let s;try{s=await _v(e,t)}catch{na(e,"Couldn't reach the street. Try again!");return}if("slow"in s){na(e,"Too many tries. Ask a grown-up and try again in a few minutes.");return}if(!s.exists){na(e,"Hmm, we couldn't find that street. Check the code with a grown-up.");return}window.__lastLookupId=s.id,vT(e,t,s.id,s.roster,n)}function vT(e,t,n,s,o=""){if(s.length){Yt(`${Kt}<h2>Who are you?</h2>${o?`<p class="err">${ge(o)}</p>`:s.every(i=>i.claimed)?`<p class="err" id="allSignedIn">${Q7}</p>`:'<p class="hint">Tap your name</p>'}<div class="nicks roster">${s.map((i,a)=>`<button data-nick="${a}" ${i.claimed?"disabled":""}>${ge(i.name)}${i.claimed?"<small>signed in</small>":""}</button>`).join("")}</div>
      <p class="hint small">Not on the list? Ask a grown-up to add your name.</p>`,(i,a)=>{const r=i.closest("[data-nick]");if(!r||r.disabled)return;a();const l=s[+r.dataset.nick];l.hasHouse?p2(e,t,n,l.name,void 0):qu(e,t,n,l.name)},"wide");return}Yt(`${Kt}<h2>Pick your street name</h2>${o?`<p class="err">${ge(o)}</p>`:""}<div class="nicks">${th.map((i,a)=>`<button data-nick="${a}">${ge(i)}</button>`).join("")}</div>`,(i,a)=>{const r=i.closest("[data-nick]");r&&(a(),qu(e,t,n,th[+r.dataset.nick]))},"wide")}function qu(e,t,n,s){Yt(`${Kt}<h2>Hi, ${ge(s)}!</h2><p class="hint">What should your house on the street be?</p>
    <div class="bigBtns"><button class="big go" data-m="bring">${Wr(2)}<span>Bring my house</span></button>
    <button class="big" data-m="fresh">${Wr(5)}<span>Start a new one</span></button></div>`,(o,i)=>{const a=o.closest("[data-m]")?.dataset.m;a&&(i(),p2(e,t,n,s,a==="bring"))})}function kT(e,t){const n=e.myHouseId();if(!n)return;let s=0;for(const o of O1(t)){const i=mE(o);i&&s++<Vi&&e.saveArt(n,o,i)}s>Vi&&F(`Your first ${Vi} paintings came along. The rest stay safe on this iPad!`)}async function p2(e,t,n,s,o){const i=ee.get(),a=i.characters[0],r=Ma(a??{});let l;if(o&&(l=i,a)){const{reduce:y}=await Cs(()=>p(()=>Promise.resolve().then(()=>eb),void 0));l=y(i,{type:"char/delete",id:a.id})}const c=Zo(),d={url:e,code:t,id:n,parentKey:c?.id===n||c?.code===t?c.parentKey:void 0},f=i.dog?{name:i.dog.name,breed:i.dog.breed}:null,h=new Pl(d),u=await h.connect({nickname:s,look:r,house:l,dog:f});if(u==="ok"){Hn(h.cfg),yp(h),F(`Welcome to the street, ${s}!`),l&&kT(h,l),PL()&&(AL(),ze=mt,ni("dress"));return}h.close(),u.startsWith("nickname")?wp(e,t,u.endsWith("notOnList")?"That name is not on the list anymore.":"That name is already signed in on another iPad. Ask a grown-up!"):F(u==="full"?"That street is full right now. Try again later!":"Couldn't join right now. Try again in a minute!")}L("btnParent").addEventListener("click",async()=>{await Z0()&&Kl()});const _T={codeTaken:"That code is already used by another street. Try adding a number!",badCode:"Codes are 4–16 letters or numbers.",badName:"Use a first name only (letters).",rosterFull:`Up to ${Sb} names.`,nameInUse:"Remove that player first.",codeFixed:"This street's code can't be changed."};async function Kl(){const e=Zo();if(!e)return;if(!e.parentKey){const l=Yt(`${Kt}<h2>Grown-up key</h2><p class="hint">Enter the key you got when the street was made</p><form id="keyForm" class="codeForm"><input id="keyInput" autocomplete="off" spellcheck="false"/><button class="go">OK</button></form>`,()=>{});l.root.querySelector("#keyForm").addEventListener("submit",c=>{c.preventDefault(),e.parentKey=l.root.querySelector("#keyInput").value.trim(),Hn(e),k&&(k.cfg.parentKey=e.parentKey),l.close(),Kl()});return}let t=k;t||(t=new Pl({...e,token:void 0}),await t.connect());const n=t,s=l=>a.root.querySelector(l).value;let o=[];const i=l=>{const c=l.trim().replace(/\s+/g," "),d=o.find(f=>f.toLowerCase()===c.toLowerCase());if(d){F(N7(d));return}n.parent({op:"rosterAdd",name:l})},a=Yt(`${Kt}<h2>Grown-up screen</h2><div id="parentBody"><p class="hint">Loading…</p></div>`,async l=>{const c=l.closest("[data-p]");if(!c)return;const d=c.dataset.p;if(d==="free"&&n.parent({op:"freeChat",on:c.dataset.on!=="1"}),d==="freeMail"&&n.parent({op:"freeMail",on:c.dataset.on!=="1"}),d==="rename"&&n.parent({op:"rename",houseId:c.dataset.hid,name:s(`input[data-hid="${c.dataset.hid}"]`)}),d==="add"&&i(c.dataset.name??s("#rosterInput")),d==="unname"&&n.parent({op:"rosterRemove",name:c.dataset.name}),d==="unclaim"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent="Tap again";return}n.parent({op:"unclaim",name:c.dataset.name})}if(d==="setcode"&&n.parent({op:"setCode",code:s("#codeEdit")}),d==="remove"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent="Tap again to remove";return}n.parent({op:"remove",pid:c.dataset.pid})}if(d==="mailClear"||d==="mailClearAll"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent=d==="mailClearAll"?"Tap again to clear every mailbox":c.dataset.id?"Tap again":"Tap again to clear this mailbox";return}d==="mailClearAll"?n.parent({op:"mailClearAll"}):n.parent({op:"mailClear",houseId:c.dataset.hid,...c.dataset.id?{id:c.dataset.id}:{}})}if(d==="leave"){if(c.dataset.sure!=="1"){c.dataset.sure="1",c.textContent="Tap again: forget this street here";return}Hn(null),a.close(),mp(),F("This iPad left the street")}},"wide parent");a.root.addEventListener("submit",l=>{l.preventDefault();const c=l.target.id;c==="rosterForm"&&i(s("#rosterInput")),c==="codeForm2"&&n.parent({op:"setCode",code:s("#codeEdit")})});const r=l=>{const c=new Date(l);return Number.isFinite(c.getTime())?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()]+" "+c.getDate()+", "+c.getFullYear():""};n.on("parentInfo",l=>{const c=a.root.querySelector("#parentBody");if(!c)return;const d=Zo();d&&d.code!==l.code&&(d.code=l.code,Hn(d)),n.cfg.code=l.code;const f=l.roster??[];o=f.map(b=>b.name);const h=new Set(f.map(b=>b.name.toLowerCase())),u=Tb.filter(b=>!h.has(b.toLowerCase())),y=f[0]?.name??"Reagan",m=Array.isArray(l.mail)?l.mail:[],v=m.some(b=>b.letters&&b.letters.length),w=D0(l.settings),g=m.map(b=>`<div class="pMailHouse"><div class="pMailName">${ge(b.name||"House")}</div>${(b.letters||[]).slice().reverse().map(_=>`<div class="pLetter"><b>${ge(_.from)}</b><span class="pWhen">${ge(r(_.at))}</span><p>${ge(_.text)}</p><button type="button" class="danger" data-p="mailClear" data-hid="${ge(b.houseId)}" data-id="${ge(_.id)}">Clear</button></div>`).join("")||'<p class="hint">No letters.</p>'}${(b.letters||[]).length?`<button type="button" class="danger" data-p="mailClear" data-hid="${ge(b.houseId)}">Clear this mailbox</button>`:""}</div>`).join("");c.innerHTML=`${l.note?`<p class="err" id="pNote">${ge(_T[l.note]??l.note)}</p>`:""}
      <div class="pRow"><div><div class="label">Invite code</div><div class="code small" id="pCode">${ge(l.code)}</div></div>
        <div><div class="label">Free typing</div><button class="toggle ${l.settings.freeChat?"on":""}" data-p="free" data-on="${l.settings.freeChat?1:0}" id="pFree">${l.settings.freeChat?"On":"Off (presets only)"}</button><p class="hint small">Chat bubbles. Off means preset phrases only.</p></div>
        <div><div class="label">Let kids type their own letters</div><button class="toggle ${w?"on":""}" data-p="freeMail" data-on="${w?1:0}" id="pFreeMail">${w?"On":"Off (presets only)"}</button><p class="hint small">Letters only. Off means preset phrases only.</p></div></div>
      <div class="label">Letters</div><div id="parentMail">${g||'<p class="hint">No letters right now.</p>'}${v?'<button type="button" class="danger" data-p="mailClearAll" id="mailClearAll">Clear every mailbox</button>':""}</div>
      <form class="pAdd" id="codeForm2"><input id="codeEdit" maxlength="${_f}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="e.g. ${ge(Or(y))}7"/><button data-p="setcode" type="button">Use this code</button></form>
      <p class="hint small">Tip: a word plus a number (like ${ge(Or(y))}7) is easy to remember and harder to guess. Not case-sensitive.</p>
      <div class="label">Kids' names (sign-in list)</div>
      <div class="roster">${f.map(b=>`<span class="rName ${b.claimed?"claimed":""}"><b>${ge(b.name)}</b>${b.claimed?`<i>signed in</i><button data-p="unclaim" data-name="${ge(b.name)}">Reset</button>`:b.hasHouse?"<i>not signed in</i>":`<button class="x" data-p="unname" data-name="${ge(b.name)}" aria-label="Remove name">×</button>`}</span>`).join("")||'<p class="hint">No names yet: kids pick a fun nickname instead.</p>'}</div>
      <form class="pAdd" id="rosterForm"><input id="rosterInput" maxlength="20" autocomplete="off" placeholder="First name"/><button data-p="add" type="button">Add</button></form>
      ${u.length?`<div class="sugg">${u.map(b=>`<button data-p="add" data-name="${b}">+ ${b}</button>`).join("")}</div>`:""}
      <div class="label">Houses</div>${l.houses.map(b=>`<div class="pHouse"><input data-hid="${b.id}" value="${ge(b.name)}" maxlength="24"/><button data-p="rename" data-hid="${b.id}">Rename</button></div>`).join("")||'<p class="hint">No houses yet.</p>'}
      <div class="label">Players</div>${l.players.map(b=>`<div class="pPlayer"><span class="dot ${b.online?"on":""}"></span>${ge(b.nickname)}<button class="danger" data-p="remove" data-pid="${b.pid}">Remove</button></div>`).join("")||'<p class="hint">Nobody has joined yet.</p>'}
      <p class="hint small">Letters stay on the server for up to 30 days. They are filtered, and only a first name is stored. You can clear them here, or turn off “Let kids type their own letters” so new letters use preset phrases. Chat bubbles are only relayed to kids standing nearby and are not saved. No emails or last names. "Reset" signs a name out of its iPad so it can sign in again on another one (her house stays).</p>
      <button class="danger wideBtn" data-p="leave">Forget this street on this device</button>`}),n.on("error",l=>{l==="badkey"&&(F("That grown-up key didn't work"),e.parentKey=void 0,Hn(e),a.close())}),n.parent({op:"info"})}let Wt=null;function Ds(){return L("park").clientHeight/Pf}const $T=()=>{const e=ee.get();return e.characters.find(t=>t.id===e.dog?.owner)??e.characters[0]},xn=()=>k?ye():Wt;function an(e){k?nt(e):Wt=e,R==="ranch"?xs():R==="gameroom"?Xi():_o()}function vs(e="park"){if(k){const n=[],s=[...k.presence.entries()],o=ye();o&&s.push([k.pid,o]);for(const[i,a]of s){const r=k.players.get(i);r&&a.where===e&&n.push({key:i,look:r.look,name:r.nickname,p:a,mine:i===k.pid,dog:r.dog??null})}return n}const t=$T();return Wt&&Wt.where===e?[{key:"solo",look:Ma(t??{}),name:"",p:Wt,mine:!0,dog:ee.get().dog??null}]:[]}function bp(){const e=Ds(),t=L("parkWorld"),n=s=>s*e+"px";t.style.width=xf*e+"px",t.style.height=Pf*e+"px",t.style.setProperty("--sc",String(e)),t.innerHTML=$4()+dd.map((s,o)=>s.kind==="swing"?`<div class="swing" data-swing="${o}" style="left:${n(s.x-30)};top:${n(en)};width:${n(60)};height:${n(240)}">${x4}</div>`:"").join("")+dd.map((s,o)=>`<button class="pspot k-${s.kind}" data-spot="${o}" aria-label="${s.kind}" style="left:${n(s.x-50)};top:${n(s.y-(s.kind==="swing"?70:55))};width:${n(100)};height:${n(s.kind==="swing"?90:65)}"></button>`).join("")+`<button class="pspot slide" data-act="slide" aria-label="Slide" style="left:${n(be.ladder-45)};top:${n(be.top.y-30)};width:${n(130)};height:${n(560-be.top.y+30)}"></button><button class="pspot pond" data-act="splash" aria-label="Pond" style="left:${n(1235)};top:${n(462)};width:${n(370)};height:${n(105)}"></button><button class="pspot gate" data-act="exit" aria-label="Back to the street" style="left:${n(25)};top:${n(240)};width:${n(180)};height:${n(260)}"></button><div class="ripples" id="ripples"></div><button class="ball" id="ball" aria-label="Ball">${M4}</button><div class="savatars" id="pavatars"></div>`,mo(t,"park"),ll(),_o(),dt()}const ju=2400;function _o(){const e=document.getElementById("pavatars");if(!e||R!=="park")return;const t=Ds(),n=new Set,s=new Set;for(const o of vs()){n.add(o.key);let i=e.querySelector(`.savatar[data-pid="${o.key}"]`);i||(i=document.createElement("div"),i.className="savatar "+(o.mine?"mine":"other"),i.dataset.pid=o.key,e.appendChild(i),o.mine&&h2(i));const a=JSON.stringify(o.look)+o.name;if(i.dataset.look!==a){const f=i.querySelector(".bubble");i.innerHTML=o.name?hp(o.look,o.name):`<div class="inner">${xt(o.look)}</div>`,f&&i.appendChild(f),i.dataset.look=a}const r=(go[o.look.size]??1)*t*.95,l=Bs*r,c=_n*r;Dl(i,o.p.x*t-l/2+"px",o.p.y*t-c+"px"),i.style.width=l+"px",i.style.height=c+"px",i.style.zIndex=String(100+Math.round(o.p.y)),i.classList.toggle("flipped",o.p.flip),Pa(i,o.look,o.mine);const d=o.p.pose??"";i.dataset.pose!==d&&(i.classList.remove("pose-sit","pose-swing","pose-slide"),i.offsetWidth,d==="slide"&&(i.style.setProperty("--sx",(be.top.x-be.bottom.x)*t+"px"),i.style.setProperty("--sy",(be.top.y-be.bottom.y)*t+"px")),d&&i.classList.add("pose-"+d),i.dataset.pose=d),d==="swing"?(i.style.transformOrigin=`50% ${(en-o.p.y)*t+c}px`,i.style.animationDelay=-(Date.now()%ju)/1e3+"s",s.add(o.p.spot??-1)):(i.style.transformOrigin="",i.style.animationDelay="")}e.querySelectorAll(".savatar").forEach(o=>{n.has(o.dataset.pid)||o.remove()}),document.querySelectorAll("#parkWorld .swing").forEach(o=>{const i=s.has(+o.dataset.swing);i&&!o.classList.contains("swinging")&&(o.style.animationDelay=-(Date.now()%ju)/1e3+"s"),o.classList.toggle("swinging",i)}),Lo()}function h2(e){e.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();const n=xn();if(!n||n.where!=="park"&&n.where!=="ranch"&&n.where!=="barn")return;const s=n.where!=="park",o=n.where;Pt=[];const i=L(s?"ranchScroll":"parkScroll"),a=s?fn():Ds(),r=o==="barn"?rf:s?$a:xf,l=b=>{const _=L(s?"ranchWorld":"parkWorld").getBoundingClientRect();return{x:(b.clientX-_.left)/a,y:(b.clientY-_.top)/a}},c=l(t),d={x:n.x-c.x,y:n.y-c.y};let f=t,h=0,u=n.x,y=!1;const m=b=>{const _=l(b),P=xn();if(!P)return;const $=Math.max(60,Math.min(r-60,_.x+d.x)),x=Math.max(470,Math.min(590,_.y+d.y));if(!y&&Math.hypot($-P.x,x-P.y)<6)return;y=!0;const D=Math.abs($-u)>3?$<u:P.flip;Math.abs($-u)>3&&(u=$),an(o==="barn"?{where:"barn",x:$,y:x,flip:D}:s?{where:"ranch",x:$,y:x,flip:D,...P.ride!==void 0?{ride:P.ride}:{}}:{where:"park",x:$,y:x,flip:D})},v=()=>{const b=i.getBoundingClientRect(),_=f.clientX<b.left+70?-10:f.clientX>b.right-70?10:0;_&&y&&(i.scrollLeft+=_,m(f)),h=requestAnimationFrame(v)};h=requestAnimationFrame(v),e.classList.add("lifted"),C.pick();const w=b=>{b.pointerId===t.pointerId&&(f=b,m(b))},g=b=>{b.pointerId===t.pointerId&&(cancelAnimationFrame(h),window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",g),e.classList.remove("lifted"),C.drop())};window.addEventListener("pointermove",w),window.addEventListener("pointerup",g)})}L("parkWorld").addEventListener("pointerdown",e=>{e.target.closest(".pspot, .ball, .pet")&&e.stopPropagation()});L("parkWorld").addEventListener("click",e=>{const t=e.target,n=xn();if(!n)return;if(t.closest("#ball")){Ue||C.boing(),ET();return}const s=t.closest("[data-spot]");if(s){const i=+s.dataset.spot,a=dd[i];if(n.spot===i&&n.pose){an({where:"park",x:a.x,y:Math.min(590,a.y+40),flip:n.flip}),C.drop();return}if(vs().some(r=>!r.mine&&r.p.spot===i&&r.p.pose)){F("Someone is already there!"),C.pop();return}an({where:"park",x:a.x,y:a.y,flip:n.flip,pose:a.kind==="swing"?"swing":"sit",spot:i}),a.kind==="swing"?C.boing():C.drop();return}const o=t.closest("[data-act]")?.dataset.act;if(o==="slide"&&(an({where:"park",x:be.bottom.x,y:be.bottom.y,flip:!1,pose:"slide"}),C.swish(),setTimeout(()=>{const i=xn();i?.pose==="slide"&&an({where:"park",x:i.x,y:i.y,flip:i.flip})},1500)),o==="splash"){const i=L("parkWorld").getBoundingClientRect(),a=(e.clientX-i.left)/Ds();u2(a),k?.fx({k:"splash",x:a})}o==="exit"&&g2()});function u2(e){const t=document.getElementById("ripples");if(!t||R!=="park")return;const n=Ds();for(let s=0;s<2;s++){const o=document.createElement("div");o.className="ripple";const i=(120+s*70)*n;Object.assign(o.style,{left:e*n-i/2+"px",top:512*n-i*.18+"px",width:i+"px",height:i*.36+"px",animationDelay:s*.15+"s"}),t.appendChild(o),setTimeout(()=>o.remove(),1400)}for(let s=0;s<6;s++){const o=document.createElement("div");o.className="drop",Object.assign(o.style,{left:e*n+"px",top:505*n+"px"}),o.style.setProperty("--dx",(s-2.5)*14+"px"),t.appendChild(o),setTimeout(()=>o.remove(),900)}C.splash()}function xT(){Eo(),Pt=[],qe=!1,R="park",L("park").classList.remove("hidden"),Da(L("park"));const e={where:"park",x:290,y:548,flip:!1};k?nt(e):Wt=e,L("streetTitle").textContent="The Park",$n(),bp(),requestAnimationFrame(()=>{const t=L("parkScroll");t.scrollLeft=0,dt()}),C.sparkle()}function g2(){No()}function MT(){return oc()&&!document.body.classList.contains("phone")}function Fu(){return oc()?520:280}function LT(){Eo(),Pt=[],qe=!1,R="gameroom",L("gameroom").classList.remove("hidden");const e=ci(),t=e?{where:"gameroom",x:e.x,y:Math.max(ro,Math.min(qn,e.y)),flip:!1}:{where:"gameroom",x:Fu(),y:560,flip:!1};k?nt(t):Wt=t,L("streetTitle").textContent="The Clubhouse",$n(),Ff(),requestAnimationFrame(()=>{const n=Os(),s=L("grScroll"),o=e?.x??(MT()?l1/2:Fu());s.scrollLeft=Math.max(0,o*n-s.clientWidth/2),dt(),V2()}),Da(L("gameroom")),C.sparkle()}L("btnLeavePark").addEventListener("click",()=>{R==="ranch"&&qe?ka(!1):g2()});let ds={x:2620,y:565},Ue=null;function ll(e=!1){const t=document.getElementById("ball");if(!t)return;const n=Ds(),s=34*n;e||t.classList.remove("flying"),t.style.left=ds.x*n-s/2+"px",t.style.top=ds.y*n-s+"px",t.style.width=t.style.height=s+"px"}function ET(){if(Ue)return;const e=gt.x0+40+Math.random()*(gt.x1-gt.x0-80),t=gt.y0+25+Math.random()*(gt.y1-gt.y0-35);m2(k?k.pid:"solo",e,t),k?.fx({k:"ball",x:e,y:t})}function m2(e,t,n){if(R!=="park")return;const s=document.getElementById("ball");ds={x:t,y:n},Ue={thrower:e,phase:"fly",dog:null,until:performance.now()+12e3},s&&(s.classList.remove("flying"),s.offsetWidth,s.classList.add("flying"),ll(!0)),C.boing(),setTimeout(()=>{Ue?.phase==="fly"&&(Ue.phase="chase",document.getElementById("ball")?.classList.remove("flying"),fs.size||(Ue=null))},650)}function ST(e){if(!k)return Wt;const t=e===k.pid?ye():k.presence.get(e);return t&&t.where==="park"?t:null}const fs=new Map,Nc=e=>(t,n,s,o,i)=>{t.style.left=(n-o/2)*e+"px",t.style.top=(s-i)*e+"px",t.style.width=o*e+"px",t.style.height=i*e+"px"};function TT(){const e=[];if(R==="house"){const t=S.get(),n={box:X,place:Mo,z:s=>String(4e3+Math.round(s)),scale:1};if(k&&Re!==ee){const s=[...k.presence.entries()],o=ye();o&&s.push([k.pid,o]);for(const[i,a]of s){const r=k.players.get(i)?.dog;if(r&&a.where==="house"&&a.houseId===me&&a.room===t.currentRoom){const l=At(t.currentRoom,dn(i,a),a);e.push({key:i,dog:r,x:l.x,y:l.y,flip:a.flip,...n})}}}else if(t.dog){const s=t.characters.find(o=>o.id===t.dog.owner)??t.characters[0];if(s&&s.room===t.currentRoom){const o=At(s.room,Ct(s),s);e.push({key:"solo",dog:t.dog,x:o.x,y:o.y,flip:s.flip,...n})}}}else if(R==="park"){const t=document.getElementById("pavatars");if(!t)return e;const n=Ds();for(const s of vs())s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Nc(n),z:o=>String(Math.round(o)-200),scale:.95})}else if(R==="ranch"){const t=document.getElementById("ravatars");if(!t)return e;const n=fn();for(const s of vs(qe?"barn":"ranch"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Nc(n),z:o=>String(100+Math.round(o)),scale:.95,riding:s.p.ride!==void 0})}else if(R==="gameroom"){const t=document.getElementById("gavatars");if(!t)return e;const n=Os();for(const s of vs("gameroom"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Nc(n),z:o=>String(Math.round(o)-200),scale:.95})}return e}let Zu=performance.now();function PT(e,t){const n=new Set;for(const s of TT()){if(CT(s.key))continue;n.add(s.key);let o=fs.get(s.key);const i=s.flip?1:-1,a=!s.riding&&R==="house"&&S.get().currentRoom==="backyard",r=s.riding?200:78;let l=a?Lh.x:s.x+i*r;s.riding?l=Math.max(50,Math.min($a-50,l)):R==="house"&&!a&&(l=$2(l,46));const c=a?Lh.y:Math.min(595,s.y+(s.riding?28:6));if(!o||o.box!==s.box||!o.el.isConnected){o?.el.remove();const _=document.createElement("div");_.className="pet pet-dog",_.dataset.dog=s.key,s.box.appendChild(_),AT(_,s.key),o={el:_,box:s.box,x:l,y:c,flip:s.flip,pose:"",look:"",idle:1,trickUntil:0,sitTrick:!1},fs.set(s.key,o)}let d=l,f=c,h=s.riding?980:320;if(Ue&&e>Ue.until&&(Ue=null,ll()),Ue&&R==="park"){if(Ue.phase==="chase")d=ds.x,f=ds.y,h=950,Math.hypot(o.x-d,o.y-f)<28&&(Ue.phase="carry",Ue.dog=s.key,C.woof());else if(Ue.phase==="carry"&&Ue.dog===s.key){const _=ST(Ue.thrower)??{x:(gt.x0+gt.x1)/2,y:540};d=_.x+60,f=Math.min(590,_.y+6),h=750,ds={x:o.x+(o.flip?-40:40),y:o.y-30*s.scale},Math.hypot(o.x-d,o.y-f)<26&&(ds={x:_.x+70,y:Math.min(590,_.y+12)},Ue=null,Sr(o,"♥"),C.sparkle()),ll()}}const u=e<o.trickUntil,y=d-o.x,m=f-o.y,v=Math.hypot(y,m);let w=!1;if(v>(Ue?4:10)&&!u){const _=Xn()?v:Math.min(v,h*t);o.x+=y/v*_,o.y+=m/v*_,w=!0,Math.abs(y)>1.5&&(o.flip=y<0),o.idle=0}else o.idle+=t,!u&&o.idle>.3&&Math.abs(s.x-o.x)>4&&(o.flip=s.x<o.x);const g=u&&o.sitTrick?"sit":w?"stand":o.idle>.9?"sit":"stand",b=g+s.dog.breed;if(o.pose+o.look!==g+b){for(const _ of[...o.el.children])_.matches(".bubble, .kennelBtn")||_.remove();o.el.insertAdjacentHTML("afterbegin",`<div class="inner">${fa(s.dog.breed,g,ca(s.dog.breed,g))}</div>`),o.pose=g,o.look=b}o.el.dataset.name=s.dog.name,o.el.classList.toggle("walking",w),o.el.classList.toggle("flipped",o.flip),s.place(o.el,o.x,o.y,92*s.scale,71*s.scale),o.el.style.zIndex=s.z(o.y+1),k2(o.el,s.key,!1)}for(const[s,o]of fs)n.has(s)||(o.el.remove(),fs.delete(s))}function Sr(e,t){e.el.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.el.appendChild(n),pi(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const Gu=new Map;function y2(e,t){const n=fs.get(e);if(!n)return;const s=n.el.dataset.name??"";n.trickUntil=performance.now()+1400,n.sitTrick=t===0,n.el.classList.remove("spin","hop"),n.el.offsetWidth,t===0&&(Sr(n,`${s} sits! 🐾`),C.pop()),t===1&&(n.el.classList.add("spin"),Sr(n,"Wheee! ✨"),C.spin()),t===2&&(n.el.classList.add("hop"),Sr(n,"Woof! Woof!"),C.woof())}function AT(e,t){e.addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault()}),e.addEventListener("click",n=>{n.stopPropagation();const s=(Gu.get(t)??0)%3;Gu.set(t,s+1),y2(t,s),k&&k.fx({k:"trick",owner:t,v:s})})}function Xl(e){const t=e?.dogKennel?.item;if(!t||!e)return null;for(const n of Object.values(e.rooms)){const s=n.items.find(o=>o.id===t&&o.kind==="kennel");if(s)return s}return null}function RT(e){if(e==="solo")return ee.get();if(!k)return null;const t=k.players.get(e)?.houseId;return t?k.view(t):null}function CT(e){return!!Xl(RT(e))}function vp(){if(k){const e=k.myHouseId();return e?k.view(e):null}return ee.get()}function w2(){if(R!=="house")return null;const e=S.get(),t=Xl(e);if(!t||!e.rooms[e.currentRoom]?.items.some(n=>n.id===t.id))return null;if(k&&Re!==ee){const n=k.houses.get(me)?.meta.ownerId,s=n?k.players.get(n)?.dog??null:null;return!n||!s?null:{key:n,dog:s,item:t}}return e.dog?{key:"solo",dog:e.dog,item:t}:null}function IT(){const e=vp();if(!e)return null;const t=dl()?S.get().currentRoom:null;let n=null,s=null;for(const[o,i]of Object.entries(e.rooms))for(const a of i.items)a.kind==="kennel"&&((!n||a.z>=n.z)&&(n=a),o===t&&(!s||a.z>=s.z)&&(s=a));return s??n}function dr(e){if(!$p()){F("Adopt a dog first!");return}Di({type:"dog/kennel",item:e}),e?(C.pop(),F("Rest well, puppy!")):(C.woof(),F("Come on, puppy!"))}function kp(e){if(!$p()){F("Adopt a dog first!");return}const t=Xl(vp());if(e===void 0){if(t){dr(null);return}const n=IT();if(!n){F("Put a dog kennel down first!");return}dr(n.id);return}t?.id===e?dr(null):dr(e)}function b2(e){const t=S.get(),n=t.rooms[t.currentRoom]?.items.find(s=>s.id===e);if(n){if(n.kind==="kennel"){dl()&&kp(n.id);return}n.kind==="cat-tower"&&jT()}}function OT(e,t){const n=S.get(),s=n.rooms[n.currentRoom]?.items.find(i=>i.id===t);if(!s)return;if(s.art){C.click(),$E(Yr(s.frame??0,n1(s.art),!1));return}const o=Vv(s.kind);if(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),C.click(),o==="kennel"||o==="tower"){b2(t);return}if(r0(s.kind)){CL();const i=!s.on;S.dispatch({type:"item/power",room:n.currentRoom,id:t,on:i}),i&&hs(s.kind)==="tv"&&HT(s),ks();return}if(!g7(s.kind,t,n.soundOn,ks)){if(o==="open"){e.classList.toggle("opened"),ks();return}if(o==="lamp"){e.classList.toggle("lamp-on");return}if(o==="sit"&&v2(s),o==="swing"&&WT(s),o!=="sit"&&(da(s.kind)||ln(s.kind)||Nn(s.kind))){const i=S.get().currentRoom;if(k&&R==="house"){const a=ye();a&&a.where==="house"&&jl(s.x,s.y,s)}else{const a=S.get(),r=a.characters.find(l=>l.id===ze&&l.room===i)??a.characters.find(l=>l.room===i);r&&np(r.id,s.x,s.y,s)}Ts(!1)}}}const Yu={dance:Be*2,sway:Be*4,watch:Be*5,warm:Be*3,hug:Be*2,bounce:Be,bathe:Be*3,nibble:Be,...f7},BT={dance:"<span>♪</span><span>♫</span>",sway:"<span>♪</span>",hug:"<span>♥</span>",bathe:'<span class="bub"></span><span class="bub"></span><span class="bub"></span>',nibble:"<span>✦</span>",...p7},fr={stereo:"<span>♪</span><span>♫</span><span>♪</span>",musicbox:"<span>♪</span><span>♩</span>",tv:'<span class="glow"></span>',fire:'<span class="glow"></span><span class="ember"></span><span class="ember"></span>',tub:'<span class="bub"></span><span class="bub"></span><span class="bub"></span><span class="bub"></span>',fridge:'<span class="food">🍓</span><span class="food">🧁</span>',...h7},qc=new Map;let jc=0;setInterval(()=>{document.hidden||ks()},1e3);function ks(){jc||(jc=requestAnimationFrame(()=>{jc=0,zT()}))}function Xs(e,t,n){let s=e.querySelector(":scope > .ambFx");if(!t){s?.remove();return}s||(s=document.createElement("i"),s.className="ambFx",s.setAttribute("aria-hidden","true"),e.appendChild(s)),s.dataset.k!==n&&(s.innerHTML=t,s.dataset.k=n,s.className="ambFx fx-"+n)}function Ku(e,t,n){const s=t?t.kind+"|"+t.item:"",o=e.dataset.amb||"";if(o!==s){if(o&&e.classList.remove("amb-"+o.split("|")[0],"amb-l","amb-r"),o.startsWith("bathe|")&&!t&&(e.classList.add("amb-sparkle"),setTimeout(()=>e.classList.remove("amb-sparkle"),1200)),!t){delete e.dataset.amb,Xs(e,null,"");return}e.dataset.amb=s,e.style.setProperty("--amb-delay",oo(t.phase,Yu[t.kind],n)+"ms"),e.style.setProperty("--amb-period",Yu[t.kind]+"ms"),e.classList.add("amb-"+t.kind,t.face<0?"amb-l":"amb-r"),Xs(e,BT[t.kind]??null,t.kind)}}function zT(){const e=S.get(),t=e.rooms[e.currentRoom];if(R!=="house"||!t){jh(null);return}const n=Date.now(),s=new Set;for(const m of t.items){if(hs(m.kind)!=="musicbox")continue;if(!m.on){qc.delete(m.id);continue}const v=qc.get(m.id)??(qc.set(m.id,n),setTimeout(ks,Wp+60),n);n-v>=Wp&&s.add(m.id)}const o=new Set;X.querySelectorAll(".item.opened").forEach(m=>{m.dataset.id&&o.add(m.dataset.id)});const i=t.items.map(m=>{const v=de[m.kind];return{id:m.id,kind:m.kind,x:m.x,y:m.y,on:!!m.on,w:v?op(v,Ge(m)).w:200}}),a=[],r=new Map;for(const m of e.characters){const v=Zt.get(m.id);if(m.room!==e.currentRoom||!v||v.classList.contains("lifted"))continue;const w=Ct(m)?.pose;a.push({id:m.id,x:m.x,y:m.y,seated:w==="sit",lying:w==="lie"}),r.set(m.id,v)}if(k&&Re!==ee){const m=[...k.presence.entries()],v=ye();v&&m.push([k.pid,v]);for(const[w,g]of m){const b=no.get(w);if(!b||!b.isConnected||g.where!=="house"||g.houseId!==me||g.room!==e.currentRoom||b.classList.contains("lifted"))continue;const _=dn(w,g)?.pose;a.push({id:"p:"+w,x:g.x,y:g.y,seated:_==="sit",lying:_==="lie"}),r.set("p:"+w,b)}}const l=m7(n),c=yy(i,a,{fridgesOpen:o,musicBoxDone:s,keysPlaying:l}),d=zL(i,c);if(d)for(const m of d.dancers){const v=c.get(m);v&&c.set(m,{...v,phase:0,face:v.face})}for(const m of[...Zt.values(),...no.values()])[...r.values()].includes(m)||Ku(m,void 0,n);r.forEach((m,v)=>Ku(m,c.get(v),n));const f=new Set([...c.values()].filter(m=>m.kind==="bathe").map(m=>m.item));let h=null;for(const m of t.items){const v=X.querySelector(`.item[data-id="${m.id}"]`);if(!v)continue;const w=hs(m.kind),g=!!m.on&&!!w&&!s.has(m.id);if(v.classList.toggle("amb-on",g),g)v.dataset.amb=w,v.style.getPropertyValue("--amb-delay")||v.style.setProperty("--amb-delay",oo(0,Be,n)+"ms"),w==="stereo"?h="stereo":w==="musicbox"&&!h&&(h="musicbox"),Xs(v,fr[w],w);else if(Nn(m.kind)&&f.has(m.id))Xs(v,fr.tub,"tub");else if(si(m.kind)&&o.has(m.id))Xs(v,fr.fridge,"fridge");else{const b=y7(m.kind,m.id,c,l,o,f.size>0);v.classList.toggle("soc-ducky",b==="ducky"),b?Xs(v,fr[b]||null,b):(delete v.dataset.amb,Xs(v,null,""))}}DT(d,n),jh(h);const u=new Map;for(const m of a)u.set(m.id,{el:r.get(m.id),d:m});const y=e.baby&&e.baby.room===e.currentRoom&&!e.baby.holder?{x:e.baby.x,y:e.baby.y}:null;b7({layer:X,roomW:St,seed:me||"local",now:n,reduced:Xn(),dolls:u,baby:y},c)}let Fc="";function DT(e,t){const n=L("partyFx"),s=!!e&&R==="house";document.body.classList.toggle("party-on",s),n.classList.toggle("on",s),s?(n.style.setProperty("--px",e.x/he*100+"%"),Fc!==e.stereo&&(n.style.setProperty("--amb-delay",oo(0,Be,t)+"ms"),Fc=e.stereo)):Fc="";const o=new Set(s?e.toys:[]);X.querySelectorAll(".item").forEach(c=>{const d=o.has(c.dataset.id||"");d!==c.classList.contains("party-bounce")&&(c.classList.toggle("party-bounce",d),d&&c.style.setProperty("--amb-delay",oo(0,Be,t)+"ms"))});const i=s?X.querySelector(`.item[data-id="${e.stereo}"]`):null,a=Yf.getBoundingClientRect(),r=a.width?he/a.width:1,l=i?.getBoundingClientRect();X.querySelectorAll(".pet").forEach(c=>{let d=!1;if(l){const f=c.getBoundingClientRect();d=Math.hypot((f.left+f.width/2-l.left-l.width/2)*r,(f.bottom-l.bottom)*r*1.5)<=BL&&!c.classList.contains("leap")&&!c.classList.contains("curl")}d!==c.classList.contains("party-hop")&&(c.classList.toggle("party-hop",d),d&&c.style.setProperty("--amb-delay",oo(.5,Be*2,t)+"ms"))})}function HT(e){const t=S.get();if(k&&R==="house"){const s=ye();if(!s||s.where!=="house"||s.seat)return}else{const s=t.characters.find(o=>o.id===ze&&o.room===t.currentRoom)??t.characters.find(o=>o.room===t.currentRoom);if(!s||s.seat)return}const n=t.rooms[t.currentRoom].items.filter(s=>Kn(s.kind)?.pose==="sit"&&Math.abs(s.x-e.x)<520).sort((s,o)=>Math.abs(s.x-e.x)-Math.abs(o.x-e.x))[0];n&&v2(n)}let Ht=null,Bi=!1;function cl(){X.querySelectorAll(".item.swinging").forEach(e=>{(!Ht||e.dataset.id!==Ht.item)&&e.classList.remove("swinging")}),Ht&&X.querySelector(`.item[data-id="${Ht.item}"]`)?.classList.add("swinging")}function WT(e){const t=S.get(),n=t.characters.find(i=>i.id===ze&&i.room===t.currentRoom)??t.characters.find(i=>i.room===t.currentRoom);if(!n)return;if(Ht?.id===n.id&&Ht.item===e.id){Ht=null,Bi=!0,S.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x+70,y:Math.max(e.y,520)}),Bi=!1,cl();return}const s=de[e.kind],o=e.y-(s?Xe(s)*Ge(e)*.26:40);Ht={id:n.id,item:e.id},Bi=!0,S.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x,y:o}),Bi=!1,cl()}function v2(e){const t=ql(e);if(!t)return;if(k&&R==="house"){const i=ye();if(!i||i.where!=="house")return;if(!k.speaksSit){const r="p:"+k.pid,l=vn.get(r)?.item===e.id,c=Math.max(wo+40,t.footY-8);l?vn.delete(r):vn.set(r,{item:e.id,pose:t&&Kn(e.kind).pose,n:0});const{seat:d,...f}=i;nt({...f,x:e.x,y:c,flip:!1}),Rt();return}const a=Wo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:ti(void 0,k.pid),alreadyOn:i.seat?.id===e.id?e.id:null});if(a.toast){F(a.toast),C.pop();return}if(!a.moved)return;Jr(i,a.x,a.y,!1,a.seat?{id:a.seat.item,pose:a.seat.pose,n:a.seat.n}:null),Rt(),Ts(!1);return}const n=S.get(),s=n.characters.find(i=>i.id===ze&&i.room===n.currentRoom)??n.characters.find(i=>i.room===n.currentRoom);if(!s)return;const o=Wo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:ti(s.id),alreadyOn:s.seat?.item===e.id?e.id:null});if(o.toast){F(o.toast),C.pop();return}o.moved&&(Ji(s.id,n.currentRoom,o.x,o.y,o.seat),Ts(!1))}function k2(e,t,n){const s=k?t===k.pid:t==="solo";let o=e.querySelector(".kennelBtn");if(!s){o?.remove();return}o||(o=document.createElement("button"),o.type="button",o.className="kennelBtn",o.addEventListener("pointerdown",i=>{i.stopPropagation(),i.preventDefault()}),o.addEventListener("click",i=>{i.stopPropagation(),i.preventDefault(),kp()}),e.appendChild(o)),o.textContent=n?"Out":"Kennel",VT(o)}function VT(e){if(R!=="house"){e.style.left=e.style.right=e.style.top=e.style.bottom=e.style.transform="";return}const t=e.parentElement;if(!t)return;const n=Y.getBoundingClientRect().width/Y.offsetWidth||1,s=Y.getBoundingClientRect(),o=4,i={l:s.left+o,t:s.top+o,r:s.right-o,b:s.bottom-o},a=X.querySelector(".char")?.getBoundingClientRect(),r=X.querySelector('.item[data-kind="sofa"]')?.getBoundingClientRect(),l=[...X.querySelectorAll(".pet-cat, .item")].map(H=>H.getBoundingClientRect()).filter(H=>H.width>2&&H.height>2),c=(H,U)=>!!U&&H.left<U.right-1&&H.right>U.left+1&&H.top<U.bottom-1&&H.bottom>U.top+1,d=(H,U)=>c(H,U)?Math.max(0,Math.min(H.right,U.right)-Math.max(H.left,U.left))*Math.max(0,Math.min(H.bottom,U.bottom)-Math.max(H.top,U.top)):0,f=H=>{let U=0;H.left<i.l&&(U+=(i.l-H.left)*8),H.right>i.r&&(U+=(H.right-i.r)*8),H.top<i.t&&(U+=(i.t-H.top)*8),H.bottom>i.b&&(U+=(H.bottom-i.b)*8),U+=d(H,a)*4,U+=d(H,r)*4;for(const st of l)U+=d(H,st)*4;return U},h=t.getBoundingClientRect(),u=!a||h.left+h.width/2<=a.left+a.width/2,y=H=>({left:H?"0px":"auto",right:H?"auto":"0px",top:"46%",bottom:"auto",transform:H?"translate(-108%, -50%)":"translate(108%, -50%)"}),m=[y(u),y(!u),{left:"50%",right:"auto",top:"0px",bottom:"auto",transform:"translate(-50%, -115%)"}];let v=m[0],w=1/0;for(const H of m){Object.assign(e.style,H);const U=f(e.getBoundingClientRect());U<w&&(w=U,v=H)}Object.assign(e.style,v);let g=e.getBoundingClientRect(),b=0,_=0;g.left<i.l&&(b+=i.l-g.left),g.right>i.r&&(b-=g.right-i.r),g.top<i.t&&(_+=i.t-g.top),g.bottom>i.b&&(_-=g.bottom-i.b);const P=H=>{if(!H)return;const U=()=>new DOMRect(g.left+b,g.top+_,g.width,g.height);if(!c(U(),H))return;const st=Math.min(U().bottom,H.bottom)-Math.max(U().top,H.top),ht=H.bottom+4-U().top,Fe=H.top-4-U().bottom,De=pn=>U().top+pn>=i.t&&U().bottom+pn<=i.b;if(st<g.height*.5&&De(ht)){_+=ht;return}if(st<g.height*.5&&De(Fe)){_+=Fe;return}const Pe=H.left-i.l,bt=i.r-H.right,vt=H===r?a:r,Hs=(pn,ic)=>{if(!vt)return!1;const Ws=ic?pn-g.width:pn,hi=new DOMRect(Ws,U().top,g.width,g.height);return c(hi,vt)};bt>=g.width+4&&!Hs(H.right+4,!1)?b+=H.right+4-U().left:Pe>=g.width+4&&!Hs(H.left-4,!0)?b+=H.left-4-U().right:De(ht)?_+=ht:De(Fe)&&(_+=Fe)};P(a),P(r);const $=t.querySelector(".inner")?.getBoundingClientRect(),x=$&&$.width>2?$:h,D=X.querySelector(".pet-cat")?.getBoundingClientRect(),W=X.querySelector('.item[data-kind="sandbox"]')?.getBoundingClientRect(),Q=X.querySelector('.item[data-kind="yard-bench"]')?.getBoundingClientRect(),q=[...X.querySelectorAll('.item[data-kind="yard-swing"], .item[data-kind="picnic-blanket"], .item[data-kind="lemonade-cart"], .item[data-kind="tulip-bed"]')].map(H=>H.getBoundingClientRect()),se=Y.querySelector(".yardDoor"),Me=se?[se,se.querySelector(".yardHintLabel"),se.querySelector(".doorArt")].map(H=>H?.getBoundingClientRect()):[],Ke=document.getElementById("secrets"),Ie=Ke&&Ke.offsetParent?Ke.getBoundingClientRect():void 0,I=Ie&&Ie.width>2&&Ie.left<i.r&&Ie.right>i.l&&Ie.top<i.b&&Ie.bottom>i.t?Ie:void 0,B=I?new DOMRect(I.left-8,I.top-8,I.width+16,I.height+16):void 0,te=[a,r,D,W,Q,B,...q,...Me].filter(H=>!!H&&H.width>2&&H.height>2),V=new DOMRect(g.left+b,g.top+_,g.width,g.height),N=x.left+x.width/2,Z=x.top+x.height/2,ue=H=>Math.hypot(H.left+H.width/2-N,H.top+H.height/2-Z),Te=H=>{const U=Math.min(H.right,x.right)-Math.max(H.left,x.left),st=Math.min(H.bottom,x.bottom)-Math.max(H.top,x.top);return U>1&&st>1},ke=H=>H.left>=i.l-.5&&H.right<=i.r+.5&&H.top>=i.t-.5&&H.bottom<=i.b+.5&&te.every(U=>!c(H,U))&&!Te(H);let je=V;if(!ke(V)||ue(V)>150){const H=[],U=(Fe,De)=>{let Pe=Fe,bt=De;Pe<i.l&&(Pe=i.l),bt<i.t&&(bt=i.t),Pe+g.width>i.r&&(Pe=Math.max(i.l,i.r-g.width)),bt+g.height>i.b&&(bt=Math.max(i.t,i.b-g.height)),H.push(new DOMRect(Pe,bt,g.width,g.height))};U(x.left+(x.width-g.width)/2,x.top-g.height-8),U(x.right-g.width,x.top-g.height-6),U(x.left,x.top-g.height-6),a&&U(a.right+6,x.top-g.height-8),Q&&U(Q.left-g.width-6,Q.top-g.height-6),a&&Q&&U(a.right+6,Q.top-g.height-6),a&&(U(a.left-12,a.top-g.height-8),U(i.l,a.top-g.height-10),U(a.left+(a.width-g.width)/2,a.top-g.height-8)),U(i.r-g.width,x.top-g.height-6),U(x.right+8,x.top+(x.height-g.height)/2),U(x.left-g.width-8,x.top+(x.height-g.height)/2),U(V.left,V.top);for(const Fe of[g.width*.65,g.width*1.05,88,120,155])for(let De=0;De<8;De++){const Pe=De*Math.PI/4;U(N+Math.cos(Pe)*Fe-g.width/2,Z+Math.sin(Pe)*Fe-g.height/2)}const st=Fe=>{let De=1/0,Pe=null;for(const bt of H){if(!ke(bt)||ue(bt)>Fe)continue;const vt=ue(bt);vt<De&&(De=vt,Pe=bt)}return Pe},ht=st(170)??st(360);if(ht)je=ht;else if(!ke(V)){let Fe=null,De=1/0;for(const Pe of H){if(Pe.left<i.l-.5||Pe.right>i.r+.5||Pe.top<i.t-.5||Pe.bottom>i.b+.5)continue;const vt=(Te(Pe)?1e4:0)+te.reduce((Hs,pn)=>Hs+d(Pe,pn),0)+ue(Pe);vt<De&&(De=vt,Fe=Pe)}Fe&&(je=Fe)}}b+=je.left-V.left,_+=je.top-V.top,(b||_)&&(e.style.transform=`${e.style.transform} translate(${(b/n).toFixed(1)}px, ${(_/n).toFixed(1)}px)`)}function UT(e,t){e.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.appendChild(n),pi(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const zi=new Map;function QT(){const e=new Set,t=w2();if(t){e.add(t.key);const n=Rv(t.dog.name,Date.now()),s=de[t.item.kind],i=(s?xo(s,t.item.y):Math.min(t.item.y,Ce-h1))-(n==="peek"?24:2);let a=zi.get(t.key);if(!a||!a.el.isConnected){a?.el.remove();const l=document.createElement("div");l.className="pet pet-dog kenneled",l.dataset.dog="kennel:"+t.key,X.appendChild(l),l.addEventListener("pointerdown",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),c.preventDefault())}),l.addEventListener("click",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),UT(l,`${l.dataset.name??"Puppy"} is resting`))}),a={el:l,pose:"",look:"",x:t.item.x,y:i},zi.set(t.key,a)}const r=n==="rest"?"sleep":"sit";if(a.pose!==r||a.look!==n+t.dog.breed){for(const l of[...a.el.children])l.matches(".bubble, .kennelBtn")||l.remove();a.el.insertAdjacentHTML("afterbegin",`<div class="inner">${fa(t.dog.breed,r,ca(t.dog.breed,r))}</div>${n==="rest"?'<div class="zzz"><b>Zzz</b><i>z</i><i>z</i><i>z</i></div>':""}`),a.pose=r,a.look=n+t.dog.breed}a.el.dataset.name=t.dog.name,a.el.classList.toggle("rest",n==="rest"),a.el.classList.toggle("peek",n==="peek"),a.x=t.item.x,a.y=i,Mo(a.el,t.item.x,i,100,77),a.el.style.zIndex=String(1e3+t.item.z+1),k2(a.el,t.key,!0)}for(const[n,s]of zi)e.has(n)||(s.el.remove(),zi.delete(n))}let fe=null,pr="",Zc=0,_p=0,Tr={x:0,perch:0,leap:!1};const NT=562;function _2(e){return(e.rooms[e.currentRoom]?.items.filter(n=>n.kind==="cat-tower")??[]).reduce((n,s)=>!n||s.z>=n.z?s:n,null)}function Xu(e){return e==="cat-bed"||e==="pet-bed"||e==="dog-bed"||e==="pack:cat-bed"||/(?:^|:)cat-bed$|(?:^|:)pet-bed$/.test(e)}function qT(e){const t=e.rooms[e.currentRoom]?.items??[],n=t.filter(a=>Xu(a.kind)),s=t.filter(a=>a.kind==="bed"),o=(n.length?n:s).reduce((a,r)=>!a||r.z>=a.z?r:a,null);if(!o)return null;const i=de[o.kind];return{x:o.x,y:o.y,h:i?Xe(i)*Ge(o):80,pet:Xu(o.kind)}}function jT(){const e=S.get();!e.cat||e.cat.room!==e.currentRoom||!_2(e)||(_p=performance.now()+900,C.boing(),k?.fx({k:"leap"}))}function FT(){const e=S.get(),t=R==="house"?e.cat:null;if(!t||t.room!==e.currentRoom){fe&&(fe.remove(),fe=null,pr="",Zc=0);return}(!fe||!fe.isConnected)&&(fe=document.createElement("div"),fe.className="pet pet-cat",X.appendChild(fe),pr="",fe.addEventListener("pointerdown",$=>{$.stopPropagation(),$.preventDefault()}),fe.addEventListener("click",$=>{$.stopPropagation(),x2(),k&&k.fx({k:"purr"})}));const n=_2(e),s=n?null:qT(e),o=n?de[n.kind]:void 0,i=n&&o?Xe(o)*Ge(n):0,a=Cv(t,Date.now(),n?{x:n.x}:null,s?{x:s.x}:null,Xn()),r=!!n&&performance.now()<_p,l=r?2:a.perch,c=r&&n?n.x:a.x,d=r?"play":a.mood,f=d==="walk"?"stand":d==="nap"?"nap":"sit",h=f+t.coat+(l?"p":"");if(h!==pr){const $=[...fe.querySelectorAll(".bubble, .heart")];fe.innerHTML=`<div class="inner">${Yo(t.coat,f,Go(t.coat,f))}</div>${f==="nap"?'<div class="zzz"><i>z</i><i>z</i><i>z</i></div>':""}`;for(const x of $)fe.appendChild(x);pr=h}if(l>0&&Zc===0){fe.classList.add("hop");const $=fe;setTimeout(()=>$.classList.remove("hop"),420)}Zc=l,fe.dataset.name=t.name,fe.dataset.mood=d,fe.dataset.perch=String(l),fe.dataset.leap=r?"1":"0",fe.dataset.curl=a.curl?"1":"0",fe.classList.toggle("walking",d==="walk"),fe.classList.toggle("groom",d==="groom"),fe.classList.toggle("play",d==="play"&&!r),fe.classList.toggle("leap",r),fe.classList.toggle("flipped",a.flip),fe.classList.toggle("curl",a.curl===1),X.querySelectorAll(".item.toy-live").forEach($=>$.classList.remove("toy-live")),n&&d==="play"&&l&&!r&&X.querySelector(`.item[data-id="${n.id}"]`)?.classList.add("toy-live");const u=window.__pinCat,y=!!(u&&Number.isFinite(u.x)),m=y&&Number.isFinite(u.y)?u.y:NT,v=!y&&l&&n?Av(n.y,i,l):!y&&a.curl&&s?s.y-s.h*(s.pet?.38:.2):m,w=e.currentRoom==="backyard"&&!l,g=!y&&l?92:w?115:128,b=!y&&l?110:w?135:150,_=y?u.x:e.currentRoom==="backyard"?ms.x:$2(c,b/2),P=!y&&e.currentRoom==="backyard"&&!l?ms.y:v;Mo(fe,_,P,b,g),fe.style.zIndex=String(4e3+Math.round(P)),Tr={x:_,perch:l,leap:r}}function $2(e,t){const n=S.get().currentRoom,s=n==="backyard"?ug:n==="living"?hg:null;if(!s)return e;const o=s.x-s.w/2-t-16,i=s.x+s.w/2+t+16;return e<=o||e>=i?e:e<s.x?o:i}function x2(){if(!fe)return;C.purr(),setTimeout(()=>C.meow(),250),fe.querySelector(".bubble")?.remove();const e=document.createElement("div");e.className="bubble petBubble",e.textContent=`${fe.dataset.name} purrs ♥`,fe.appendChild(e),pi(),setTimeout(()=>e.classList.add("out"),1500),setTimeout(()=>e.remove(),1900),fe.classList.remove("happy"),fe.offsetWidth,fe.classList.add("happy");for(let t=0;t<5;t++){const n=document.createElement("div");n.className="heart",n.textContent="♥",n.style.left=20+Math.random()*60+"%",n.style.animationDelay=t*.12+"s",n.style.color=["#ff6b9a","#ff8fab","#e879c6"][t%3],fe.appendChild(n),setTimeout(()=>n.remove(),1800)}}function ZT(e,t){if(t.k==="zoo"||t.k==="apple"||t.k==="honk"||t.k==="hen"){pP(t);return}t.k==="trick"?y2(t.owner,t.v):t.k==="purr"?R==="house"&&x2():t.k==="leap"?R==="house"&&(_p=performance.now()+900):t.k==="ball"?m2(e,t.x,t.y):t.k==="splash"&&u2(t.x)}function M2(e){const t=Math.min(.05,Math.max(0,(e-Zu)/1e3));Zu=e;try{PT(e,t),QT(),FT(),uP(e,t),FE(t),Sm()}catch{}requestAnimationFrame(M2)}function GT(){return k?k.view(k.myHouseId())?.cat??null:ee.get().cat??null}function $p(){return k?k.players.get(k.pid)?.dog??null:ee.get().dog??null}function Di(e){if(k){const t=k.myHouseId();t&&k.dispatch(t,e)}else ee.dispatch(e)}const dl=()=>R==="house"&&(!k||Re===ee||me===k.myHouseId());function YT(e="cat"){const t=GT(),n=$p(),s=ee.get().characters,o={tab:e,coat:t?.coat??0,catName:t?.name??"",breed:n?.breed??0,dogName:n?.name??"",owner:n?.owner??s[0]?.id,err:"",bye:!1},i=Yt("",(l,c)=>{const d=u=>l.closest(`[${u}]`)?.getAttribute(u);if(d("data-pt")){o.tab=d("data-pt"),o.err="",o.bye=!1,r();return}if(d("data-coat")!=null){o.coat=+d("data-coat"),C.click(),r();return}if(d("data-breed")!=null){o.breed=+d("data-breed"),C.click(),r();return}if(d("data-cname")){o.catName=d("data-cname"),C.click(),r();return}if(d("data-dname")){o.dogName=d("data-dname"),C.click(),r();return}if(d("data-owner")){o.owner=d("data-owner"),C.click(),r();return}const f=d("data-pa");if(!f)return;const h=(i.root.querySelector("#petName")?.value??"").trim();if(f==="adoptCat"||f==="adoptDog"){const u=h||(f==="adoptCat"?o.catName:o.dogName),y=z0(u);if(!y){o.err=u?"Hmm, try a different name!":"Pick a name first!",C.pop(),r();return}if(f==="adoptCat"){const m=dl(),v={name:y,coat:o.coat,room:m?S.get().currentRoom:t?.room??"living",x:m?Math.max(200,Math.min(he-200,ie+G/2)):t?.x??1200};Di({type:"cat/set",cat:v}),C.meow(),c(),F(t?`${y} looks great! 🐱`:m?`${y} moved in! 🐱`:`${y} is waiting at your house! 🐱`)}else{const m=k?{name:y,breed:o.breed}:{name:y,breed:o.breed,owner:o.owner};k?(k.setDog(m),R==="park"&&_o()):ee.dispatch({type:"dog/set",dog:m}),C.woof(),c(),F(n?`${y} looks great! 🐶`:`${y} is your new best friend! 🐶`)}return}if(f==="callCat"){Di({type:"cat/move",room:S.get().currentRoom,x:Math.max(200,Math.min(he-200,ie+G/2))}),C.meow(),c();return}if(f==="kennelDog"){kp(),c();return}if(f==="bye"){if(!o.bye){o.bye=!0,r();return}o.tab==="cat"?Di({type:"cat/set",cat:null}):(Di({type:"dog/kennel",item:null}),k?k.setDog(null):ee.dispatch({type:"dog/set",dog:null}));const u=o.tab==="cat"?t?.name:n?.name;c(),F(`${u||"They"} went to live with a kind friend 💛`);return}},"wide pets"),a=i.root.querySelector(".card");function r(){const l=o.tab==="cat",c=l?t:n,d=l?mv:yv,f=l?o.catName:o.dogName,h=i.root.querySelector("#petName")?.value??"";a.innerHTML=`${Kt}<h2>Pets</h2>
      <div class="petTabs"><button data-pt="cat" class="${l?"on":""}">🐱 Cat</button><button data-pt="dog" class="${l?"":"on"}">🐶 Dog</button></div>
      <p class="hint small">${l?k?"Your cat lives in your house. Friends can see her when they visit!":"Your cat lives in your house. She naps, purrs, and plays!":k?"Your dog follows you everywhere: the street, friends' houses, and the park!":"Your dog follows you around the house and to the park!"}</p>
      <div class="petRow"><div class="petPreview">${l?Yo(o.coat,"sit",Go(o.coat,"sit")):fa(o.breed,"stand",ca(o.breed,"stand"))}</div>
        <div class="swatches">${(l?pd:hd).map((u,y)=>`<button ${l?"data-coat":"data-breed"}="${y}" class="${y===(l?o.coat:o.breed)?"on":""}"><div>${l?Yo(y,"sit",Go(y,"sit")):fa(y,"stand",ca(y,"stand"))}</div><span>${u.name}</span></button>`).join("")}</div></div>
      <div class="label">Name</div>
      <div class="nameChips">${d.map(u=>`<button ${l?"data-cname":"data-dname"}="${u}" class="${u===f?"on":""}">${u}</button>`).join("")}</div>
      <input id="petName" class="petName" maxlength="14" autocomplete="off" placeholder="…or type a name" value="${ge(h)}"/>
      ${o.err?`<p class="err" id="petErr">${ge(o.err)}</p>`:""}
      ${!l&&!k&&s.length>1?`<div class="label">Who does your dog follow?</div><div class="walkers">${s.map(u=>`<button data-owner="${u.id}" class="${u.id===o.owner?"on":""}">${xt(u)}</button>`).join("")}</div>`:""}
      <div class="petBtns"><button class="go" data-pa="${l?"adoptCat":"adoptDog"}" id="adoptBtn">${c?"Save":"Adopt! 💛"}</button>
        ${l&&t&&dl()?'<button data-pa="callCat" id="callCat">Here, kitty!</button>':""}
        ${!l&&n?`<button data-pa="kennelDog" id="kennelDog">${Xl(vp())?"Come, puppy!":"Kennel"}</button>`:""}
        ${c?`<button class="danger" data-pa="bye">${o.bye?"Tap again to say goodbye":"Find a new home"}</button>`:""}</div>`}r()}L("btnPets").addEventListener("click",()=>YT(R==="house"?"cat":"dog"));requestAnimationFrame(M2);window.__pets=()=>{const e=w2(),t=e?zi.get(e.key):void 0;return{dogs:[...fs.keys()],dogPos:Object.fromEntries([...fs].map(([n,s])=>[n,{x:Math.round(s.x),y:Math.round(s.y)}])),cat:fe?{mood:fe.dataset.mood,name:fe.dataset.name,perch:Tr.perch,x:Math.round(Tr.x),leap:Tr.leap,curl:fe.dataset.curl==="1"}:null,kennel:e&&t?{x:Math.round(t.x),y:Math.round(t.y),pose:t.pose,name:e.dog.name,item:e.item.id}:null,dogKennel:S.get().dogKennel??null,fetch:Ue?.phase??null,ball:ds,view:R}};function fn(){return L("ranch").clientHeight/Aa}let Pt=[];const va=e=>String(100+Math.round(e)),L2=220,KT=L2*130/160,E2=156,XT=E2*130/160,JT=.6,eP=3.5,tP=3,Ju=[46.3,46.3,48.7,49.7,53],nP=[0,0,0,0,0],sP=4,oP=16,Yd=10,_s=new Map,Pr=new Map;function fl(e,t,n=Yd){const s=(e-$t.x)/($t.rx+n),o=(t-$t.y)/($t.ry+n);return s*s+o*o<1}function Gc(e,t,n,s){for(let o=0;o<=18;o++){const i=o/18;if(fl(e+(n-e)*i,t+(s-t)*i))return!0}return!1}function pl(e,t){return{x:Math.max(70,Math.min(Mp()-70,e)),y:Math.max(ro,Math.min(qn,t))}}function iP(e,t){const n=pl(t.x,t.y);if(fl(n.x,n.y,6))return null;if(!Gc(e.x,e.y,n.x,n.y))return[n];const s=$t.x-$t.rx-Yd-28,o=$t.x+$t.rx+Yd+28;let i=null,a=1/0;for(const r of[ro+1,qn-2]){const l=[];let c=e.x,d=e.y;const f=(v,w)=>{const g=pl(v,w);l.push(g),c=g.x,d=g.y};Gc(c,d,c,r)&&f(c<$t.x?s:o,d),Math.abs(d-r)>3&&f(c,r),Math.abs(c-n.x)>3&&f(n.x,r),l.push(n);let h=!0,u=e.x,y=e.y,m=0;for(const v of l){if(Gc(u,y,v.x,v.y)||fl(v.x,v.y,4)){h=!1;break}m+=Math.hypot(v.x-u,v.y-y),u=v.x,y=v.y}h&&m<a&&(i=l,a=m)}return i}function S2(e,t){const n=xn();if(!n)return;const s={x:Math.max(60,Math.min(Mp()-60,e)),y:Math.max(ro,Math.min(qn,t))};if(n.ride!==void 0&&n.where==="ranch"){const o=iP(n,s);if(!o){F("The horse won't splash through the pond!"),C.pop();return}Pt=o}else Pt=[s]}function aP(e){if(e.look2)return RL(e.look2);const t=e.pants,n="#5a3d5c",s=(o,i,a,r)=>`<path class="${o}" d="${i}" fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/><path class="${o} cloth" d="${i}" fill="none" stroke="${t}" stroke-width="${r}" stroke-linecap="round"/>`;return`<svg class="rideleg" viewBox="0 0 160 130">${s("thigh","M66 56 L102 66",13,8)}${s("shin","M102 68 L106 104",12,7.2)}<circle class="knee" cx="102" cy="67" r="6.2" fill="${t}" stroke="${n}" stroke-width="3.5"/><ellipse class="shoe" cx="116" cy="106" rx="11" ry="5.2" fill="${n}"/></svg>`}function $s(){return document.body.classList.contains("phone")&&document.body.classList.contains("phone-portrait")&&!qe}function Jl(){if(!$s())return d0.map((t,n)=>n);const e=[0,2,4];for(const t of vs("ranch")){const n=t.p.ride;n!==void 0&&e.indexOf(n)<0&&e.push(n)}return e}function As(e){if(!$s())return d0[e];const t=Jl(),n=t.indexOf(e),s=t.length,o=n<0?0:n,i=xp().w/2,a=2400+i+18,r=3080-i-18;return s<=1?Math.round((a+r)/2):Math.round(a+(r-a)*o/(s-1))}function xp(){return $s()?{w:131,h:106}:{w:150,h:122}}function hl(e,t,n){const s=fn(),{w:o,h:i}=xp();e.style.left=(t-o/2)*s+"px",e.style.top=(n-i)*s+"px",e.style.width=o*s+"px",e.style.height=i*s+"px",e.style.zIndex=va(n)}function rP(){if(R!=="ranch"||qe||!document.body.classList.contains("phone"))return;const e=new Set(Jl());document.querySelectorAll("#ranchWorld .horse").forEach(t=>{const n=+t.dataset.horse;t.classList.toggle("stallOff",$s()&&!e.has(n)),!(!e.has(n)||_s.has(n)||t.classList.contains("away"))&&hl(t,As(n),lo)})}function lP(e,t,n){if(_s.has(e)||Math.hypot(t-As(e),n-lo)<26)return;_s.set(e,{x:t,y:n});const s=document.querySelector(`#ranchWorld .horse[data-horse="${e}"]`);s&&(s.classList.add("trotting"),s.classList.remove("away"),s.classList.toggle("flipped",As(e)<t),hl(s,t,n))}function cP(e,t,n){const s=n?-1:1;for(const o of[s*118,-s*118,s*160,-s*78])for(const i of[0,30,-26,48]){const a=pl(e+o,t+i);if(!(Math.hypot(a.x-e,a.y-t)<50)&&!fl(a.x,a.y,8))return a}return pl(e,t)}let e0=0,T2=0;const ec=()=>k?k.now():Date.now(),tc=()=>df(k?k.ranch.plots:ee.get().garden),Ha=()=>cf(k?k.players.get(k.pid)?.basket:ee.get().basket),Mp=()=>qe?rf:$a,P2=()=>qe?"barn":"ranch",A2=()=>{const e=new Map;for(const t of vs("ranch"))t.p.ride!==void 0&&e.set(t.p.ride,t);return e};function Kd(e){const t={taken:"A friend just planted there!",wet:"Already watered 💧",notReady:"Still growing! 🌱",full:"Your basket is full!",slow:"The hen is laying… try again!",none:"Your basket has none left",nohouse:"Go home to put it in your room"};t[e]&&(F(t[e]),C.pop())}function qo(e){if(k){const o=td(tc(),Ha(),e,ec(),e.op==="egg"?e0:0);return typeof o=="string"?(Kd(o),!1):(e.op==="egg"&&(e0=Date.now()),k.ranchOp(e),!0)}const t=ee.get(),n=Date.now(),s=td(df(t.garden),cf(t.basket),e,n,t.lastEgg??0);return typeof s=="string"?(Kd(s),!1):(ee.dispatch({type:"ranch/op",op:e,now:n}),nc(!0),Sp(),!0)}function ka(e=!1){const t=R==="ranch"&&qe&&!e;Eo(),L("ranch").classList.remove("hidden"),Ue=null,Pt=[],R="ranch",qe=e;const n=e?{where:"barn",x:170,y:560,flip:!1}:{where:"ranch",x:t?Xc:130,y:t?520:565,flip:!1};k?nt(n):Wt=n,L("streetTitle").textContent=e?"The Barn":"Rainbow Ranch",$n(),Lp(),requestAnimationFrame(()=>{const s=L("ranchScroll"),o=fn();s.scrollLeft=t?Math.max(0,Xc*o-s.clientWidth/2):0,Jd()}),setTimeout(Jd,650),Da(L("ranch")),e?C.swish():C.sparkle()}L("btnHopOff").addEventListener("click",()=>R2());function Lp(){const e=fn(),t=L("ranchWorld"),n=o=>o*e+"px",s=(o,i,a,r)=>`left:${n(o-a/2)};top:${n(i-r)};width:${n(a)};height:${n(r)};z-index:${va(i)}`;if(t.style.width=Mp()*e+"px",t.style.height=Aa*e+"px",t.style.setProperty("--sc",String(e)),qe){t.innerHTML=M9()+`<div class="sceneArtHost" id="ranchArt"></div><button class="rprop barnExit" data-r="exit" aria-label="Go outside" style="${s(127,444,206,244)}"><span class="exitHint"><span>Outside ☀️</span></span></button>`+Js.map((o,i)=>`<button class="animal" data-animal="${i}" aria-label="${zm[i].name}" style="${s(lf[i],qy+30,128,107)}">${kd(i,Cd(i))}</button>`).join("")+[300,1244].map(o=>["carrot","apple","hay"].map((i,a)=>`<button class="bucket" data-feed="${i}" aria-label="${i} bucket" style="${s(o+a*56,592,54,62)}">${w9(i)}</button>`).join("")).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',mo(L("ranchArt"),"barn",t),xs(),dt();return}t.innerHTML=f9()+'<div class="sceneArtHost" id="ranchArt"></div>'+p9().replace("<svg ",`<svg style="z-index:${va(h9)}" `)+`<button class="rprop barnDoor" data-r="barn" aria-label="Go into the barn" style="${s(Xc,472,150,150)}"><span class="doorHint"><span>Petting zoo inside! 🐐</span></span></button><button class="rprop windmill" data-r="mill" aria-label="Windmill" style="${s(1540,478,150,240)}">${_9}</button><button class="rprop henHouse" data-r="egg" aria-label="Hen house" style="${s(715,482,180,170)}">${qi("hen-house",u9)}</button><button class="rprop tractor" data-r="honk" aria-label="Tractor" style="${s(900,580,170,130)}">${qi("tractor",g9)}</button><button class="rprop appleTree" data-r="apple" aria-label="Apple tree" style="${s(2085,482,240,300)}">${qi("apple-tree",m9)}</button>`+jy.map((o,i)=>{const a=xp();return`<button class="horse${$s()&&Jl().indexOf(i)<0?" stallOff":""}" data-horse="${i}" aria-label="${Gr[i].name} horse" style="${s(As(i),lo,a.w,a.h)}">${Bf(i,!1,Nf(i))}</button>`}).join("")+Array.from({length:Jc},(o,i)=>`<button class="plot" data-plot="${i}" aria-label="Garden plot" style="${s(Zy(i),594,66,86)}"></button>`).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',mo(L("ranchArt"),"ranch",t),nc(!0),xs(),dt()}const hr=[];function nc(e=!1){if(R!=="ranch"||qe)return;const t=tc(),n=ec();document.querySelectorAll("#ranchWorld .plot").forEach(s=>{const o=+s.dataset.plot,i=t[o]??null,a=Ll(i,n),r=JSON.stringify(i)+a;!e&&hr[o]===r||(hr[o]!==void 0&&hr[o]!==r&&a>0&&(s.classList.remove("grow"),s.offsetWidth,s.classList.add("grow")),hr[o]=r,s.innerHTML=Wm(i,a,o),s.dataset.stage=i?String(a):"empty")})}function xs(){const e=document.getElementById("ravatars");if(!e||R!=="ranch")return;const t=fn(),n=new Set,s=new Set;let o=!1;for(const i of vs(P2())){n.add(i.key);let a=e.querySelector(`.savatar[data-pid="${i.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(i.mine?"mine":"other"),a.dataset.pid=i.key,e.appendChild(a),i.mine&&h2(a));const r=JSON.stringify(i.look)+i.name;if(a.dataset.look!==r){const u=a.querySelector(".bubble");a.innerHTML=i.name?hp(i.look,i.name):`<div class="inner">${xt(i.look)}</div>`,u&&a.appendChild(u),a.dataset.look=r,a.dataset.ride=""}const l=i.p.ride,c=(go[i.look.size]??1)*t*.95*(l!==void 0?JT:1),d=Bs*c,f=_n*c;if(a.dataset.ride!==String(l??"")&&(a.querySelector(".mount")?.remove(),l!==void 0&&a.insertAdjacentHTML("afterbegin",`<div class="mount" data-mount="${l}">${Bf(l,!0,Nf(l,!0))}${aP(i.look)}</div>`),a.dataset.ride=String(l??"")),a.classList.toggle("riding",l!==void 0),l!==void 0){s.add(l),i.mine&&(o=!0),Pr.set(l,{x:i.p.x,y:i.p.y});const u=$s()?E2:L2,y=$s()?XT:KT,m=u*t,v=y*t,w=a.querySelector(".mount"),g=!!w.querySelector("img.horsesprite");w.classList.toggle("painted",g),w.style.width=m+"px",w.style.height=v+"px";const b=l??0,_=g?nP[b]??0:0,P=(i.p.flip?-_:_)/160*m;w.style.left=(d-m)/2+P+"px",w.style.top=f-v+"px";const $=Number(a.querySelector(".shirt")?.getAttribute("data-hem")??126),x=g?Ju[b]??Ju[0]:Number(w.querySelector(".saddle")?.getAttribute("data-top")??43);w.dataset.saddleTop=String(x);const D=($+eP/2)/160*f,W=f-v+(x-tP/2)/130*v;a.style.setProperty("--lift",D-W+"px");const Q=w.querySelector(".rideleg");Q&&(Q.style.left="0",Q.style.top="0",Q.style.width="100%",Q.style.height="100%",g?(Q.style.transformOrigin="48% 38%",Q.style.transform=`translate(${sP/160*100}%, ${oP/130*100}%) rotate(22deg)`):(Q.style.transformOrigin="",Q.style.transform=""))}else a.style.removeProperty("--lift");const h=parseFloat(a.dataset.lx??"NaN");Number.isFinite(h)&&Math.abs(h-i.p.x)>2&&(a.classList.add("moving"),clearTimeout(+(a.dataset.mt??0)),a.dataset.mt=String(window.setTimeout(()=>a.classList.remove("moving"),260))),a.dataset.lx=String(i.p.x),Dl(a,i.p.x*t-d/2+"px",i.p.y*t-f+"px"),a.style.width=d+"px",a.style.height=f+"px",a.style.zIndex=va(i.p.y),a.classList.toggle("flipped",i.p.flip),Pa(a,i.look,i.mine)}if(e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),document.body.classList.contains("phone")){const i=new Set(Jl());document.querySelectorAll("#ranchWorld .horse").forEach(a=>{a.classList.toggle("stallOff",$s()&&!i.has(+a.dataset.horse))})}document.querySelectorAll("#ranchWorld .horse").forEach(i=>{const a=+i.dataset.horse;s.has(a)?(i.classList.add("away"),_s.delete(a)):i.classList.remove("away")});for(const[i,a]of[...Pr])s.has(i)||(lP(i,a.x,a.y),Pr.delete(i));document.body.classList.toggle("riding",o),Lo()}function dP(e){const t=xn();if(!t||t.where!=="ranch")return;const n=A2().get(e);if(n&&!n.mine){F("Someone is riding!"),C.pop();return}if(t.ride!==void 0){if(n?.mine||t.ride===e){R2();return}S2(As(e),Math.min(qn,lo+8));return}Pt=[],_s.delete(e),an({where:"ranch",x:As(e),y:Math.min(qn,lo+8),flip:!1,ride:e}),C.neigh(),F(`You're riding ${Gr[e].name}! Tap the ground to gallop 🐴`)}function R2(){const e=xn();if(!e||e.ride===void 0)return;const t=e.ride,{ride:n,...s}=e;Pt=[];const o=cP(s.x,s.y,s.flip);Pr.set(t,{x:s.x,y:s.y}),an({...s,x:o.x,y:o.y}),C.drop()}function Ep(e,t){const n=e<Js.length?document.querySelector(`#ranchWorld .animal[data-animal="${e}"]`):document.querySelector(`#ranchWorld .horse[data-horse="${e-Js.length}"]:not(.away)`)??document.querySelector(`#ravatars .mount[data-mount="${e-Js.length}"]`);if(!n||R!=="ranch")return;const s=e>=Js.length,o=s?{say:"Neigh! ♥",snd:"neigh"}:zm[e];n.classList.remove("hop","munch"),n.offsetWidth,n.classList.add(t?"munch":"hop"),setTimeout(()=>n.classList.remove("hop","munch"),1400),n.querySelector(".abubble")?.remove();const i=document.createElement("div");i.className="bubble petBubble abubble",i.textContent=t?`Yum! Munch munch ${t===1?"🥕":t===2?"🍎":"🌾"}`:o.say,n.appendChild(i),pi(),setTimeout(()=>i.classList.add("out"),1400),setTimeout(()=>i.remove(),1800);for(let a=0;a<(t?6:4);a++){const r=document.createElement("div");r.className="heart",r.textContent="♥",r.style.left=15+Math.random()*70+"%",r.style.animationDelay=a*.12+"s",r.style.color=["#ff6b9a","#ff8fab","#e879c6","#b197fc"][a%4],n.appendChild(r),setTimeout(()=>r.remove(),1900)}C[o.snd]?.(),t&&setTimeout(()=>C.munch(),250)}function C2(){const e=document.querySelector("#ranchWorld .henHouse");e&&(e.classList.remove("lay"),e.offsetWidth,e.classList.add("lay"),C.cluck())}function fP(){const e=document.querySelector("#ranchWorld .henHouse"),t=L("basketChip");if(!e)return;const n=e.getBoundingClientRect(),s=t.getBoundingClientRect(),o=document.createElement("div");o.className="flyEgg",o.innerHTML=ua,document.body.appendChild(o),Object.assign(o.style,{left:n.left+n.width/2-18+"px",top:n.top+n.height*.6+"px"}),requestAnimationFrame(()=>{o.style.left=s.left+s.width/2-18+"px",o.style.top=s.top+"px",o.style.transform="scale(.6) rotate(200deg)"}),setTimeout(()=>{o.remove(),t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")},650)}function I2(e){const t=document.getElementById("rfx");if(!t||R!=="ranch")return;const n=fn(),[s,o]=iu[e]??iu[0],i=1965+s,a=182+o,r=i+(e%2?26:-22),l=575+e*4,c=document.createElement("button");c.className="fallenApple",c.dataset.feed="apple",c.setAttribute("aria-label","Apple"),c.innerHTML=Dm;const d=32*n;Object.assign(c.style,{width:d+"px",height:d+"px",left:i*n-d/2+"px",top:a*n-d/2+"px",zIndex:va(l)}),t.appendChild(c),requestAnimationFrame(()=>{c.style.left=r*n-d/2+"px",c.style.top=l*n-d+"px",c.classList.add("fallen")});const f=document.querySelector("#ranchWorld .appleTree");f?.classList.remove("shake"),f?.offsetWidth,f?.classList.add("shake"),C.boing(),setTimeout(()=>c.remove(),12e3)}function O2(){const e=document.querySelector("#ranchWorld .tractor");e?.classList.remove("bounce"),e?.offsetWidth,e?.classList.add("bounce"),C.honk()}function pP(e){e.k==="zoo"?Ep(e.a,e.f):e.k==="apple"?I2(e.v):e.k==="honk"?O2():e.k==="hen"&&C2()}function t0(e,t){const n=document.elementFromPoint(e,t);if(!n)return null;const s=n.closest("[data-animal]");if(s)return+s.dataset.animal;const o=n.closest(".horse:not(.away)");if(o)return Js.length+ +o.dataset.horse;const i=n.closest(".savatar.riding");return i?.dataset.ride?Js.length+ +i.dataset.ride:null}function Xd(e,t,n){e.preventDefault(),e.stopPropagation();const s=document.createElement("div");s.className="feedGhost",s.innerHTML=Hm[t],document.body.appendChild(s);const o=y=>{s.style.left=y.clientX-30+"px",s.style.top=y.clientY-50+"px"};o(e),C.pick();let i=0;const a=e.clientX,r=e.clientY;n instanceof HTMLElement&&(n.style.visibility="hidden");let l=e.clientX,c=0;const d=L("ranchScroll"),f=()=>{const y=d.getBoundingClientRect(),m=l<y.left+60?-12:l>y.right-60?12:0;m&&i>12&&R==="ranch"&&(d.scrollLeft+=m),c=requestAnimationFrame(f)};c=requestAnimationFrame(f);const h=y=>{if(y.pointerId!==e.pointerId)return;l=y.clientX,i=Math.max(i,Math.hypot(y.clientX-a,y.clientY-r)),o(y),document.querySelectorAll(".feedHover").forEach(v=>v.classList.remove("feedHover")),t0(y.clientX,y.clientY)!==null&&document.elementFromPoint(y.clientX,y.clientY)?.closest(".animal, .horse, .savatar")?.classList.add("feedHover")},u=y=>{if(y.pointerId!==e.pointerId)return;cancelAnimationFrame(c),window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",u),s.remove(),T2=Date.now(),document.querySelectorAll(".feedHover").forEach(w=>w.classList.remove("feedHover"));const m=t0(y.clientX,y.clientY);if(m===null){n instanceof HTMLElement&&(n.style.visibility=""),i<12?F("Drag the food onto an animal! 🥕"):C.drop();return}if(n==="basket"&&!qo({op:"use",kind:"carrot"}))return;n instanceof HTMLElement&&n.remove();const v=Fy.indexOf(t);Ep(m,v),k?.fx({k:"zoo",a:m,f:v})};window.addEventListener("pointermove",h),window.addEventListener("pointerup",u)}L("ranchWorld").addEventListener("pointerdown",e=>{const t=e.target,n=t.closest(".bucket");if(n)return Xd(e,n.dataset.feed,"bucket");const s=t.closest(".fallenApple");if(s)return Xd(e,"apple",s);t.closest(".rprop, .animal, .horse, .plot, .pet")&&e.stopPropagation()});L("ranchWorld").addEventListener("click",e=>{const t=e.target;if(!xn()||R!=="ranch"||Date.now()-T2<400)return;const s=t.closest("[data-animal]");if(s){const f=+s.dataset.animal;Ep(f,0),k?.fx({k:"zoo",a:f,f:0});return}const o=t.closest("[data-horse]");if(o){dP(+o.dataset.horse);return}const i=t.closest("[data-r]")?.dataset.r;if(i==="egg"){C2(),qo({op:"egg"})&&(fP(),C.pickup());return}if(i==="honk"){O2(),k?.fx({k:"honk"});return}if(i==="apple"){const f=Math.floor(Math.random()*4);I2(f),k?.fx({k:"apple",v:f});return}if(i==="barn"){ka(!0);return}if(i==="exit"){ka(!1);return}if(i==="mill"){const f=t.closest(".windmill");f?.classList.remove("whirl"),f?.offsetWidth,f?.classList.add("whirl"),C.swish();return}const a=t.closest("[data-plot]");if(a){hP(+a.dataset.plot,a);return}if(t.closest(".bucket, .fallenApple, .savatar, .pet"))return;const r=L("ranchWorld").getBoundingClientRect(),l=fn(),c=(e.clientX-r.left)/l,d=(e.clientY-r.top)/l;d<400||S2(c,d)});function hP(e,t){const n=tc()[e]??null,s=Ll(n,ec());if(document.querySelector(".seedPick")?.remove(),!n){const o=document.createElement("div");o.className="seedPick",o.innerHTML=`<button data-seed="carrot">${Vl}<span>Carrot</span></button><button data-seed="flower">${qf()}<span>Flower</span></button>`,t.parentElement.appendChild(o),o.style.left=t.offsetLeft+t.offsetWidth/2+"px",o.style.top=t.offsetTop-8+"px",o.addEventListener("pointerdown",i=>i.stopPropagation()),o.addEventListener("click",i=>{i.stopPropagation();const a=i.target.closest("[data-seed]")?.dataset.seed;o.remove(),a&&qo({op:"plant",i:e,seed:a})&&(C.plant(),F("Planted! Now tap it to water 💧"))}),setTimeout(()=>o.remove(),6e3);return}if(!n.wet){qo({op:"water",i:e})&&(C.water(),t.classList.remove("watering"),t.offsetWidth,t.classList.add("watering"));return}if(s<3){F("Still growing! 🌱"),C.pop();return}qo({op:"pick",i:e})&&(C.pickup(),F(n.seed==="carrot"?"A carrot for your basket! 🥕":"Pretty flowers for your basket! 🌸"))}let n0=0;function uP(e,t){if(R!=="ranch")return;const n=Date.now();if(document.querySelectorAll("#ranchWorld .animal").forEach(s=>{const o=+s.dataset.animal,i=fn(),a=n/5200+o*1.7,r=(qe?lf:Ny)[o]+Math.sin(a)*32;s.style.left=(r-s.offsetWidth/i/2)*i+"px",s.classList.toggle("flipped",Math.cos(a)<0),s.classList.toggle("walking",Math.abs(Math.cos(a))>.35)}),e-n0>1e3&&(n0=e,nc()),Pt.length){const s=xn();if(!s||s.where!==P2())Pt=[];else{const o=Pt[0],i=s.ride!==void 0?720:300,a=o.x-s.x,r=o.y-s.y,l=Math.hypot(a,r);if(l<6)Pt.shift();else{const c=Math.min(l,i*t),d={...s,x:s.x+a/l*c,y:s.y+r/l*c,flip:Math.abs(a)>2?a<0:s.flip};an(d);const f=fn(),h=L("ranchScroll"),u=d.x*f-h.scrollLeft;u>-40&&u<h.clientWidth+40&&(u<h.clientWidth*.2||u>h.clientWidth*.8)&&(h.scrollLeft=d.x*f-h.clientWidth/2)}}}for(const[s,o]of _s){const i=document.querySelector(`#ranchWorld .horse[data-horse="${s}"]`);if(!i||i.classList.contains("away")){_s.delete(s);continue}const a=As(s)-o.x,r=lo-o.y,l=Math.hypot(a,r);if(l<8){_s.delete(s),i.classList.remove("trotting","flipped"),hl(i,As(s),lo);continue}const c=Math.min(l,460*t);o.x+=a/l*c,o.y+=r/l*c,i.classList.add("trotting"),i.classList.toggle("flipped",a<0),hl(i,o.x,o.y)}}function Sp(){const e=document.getElementById("basketChip");if(!e)return;const t=R==="house"&&(!k||Re===ee||me===k.myHouseId()),n=Ha(),o=n.egg+n.carrot+n.flower>0&&(R==="ranch"||t);e.classList.toggle("hidden",!o),e.classList.toggle("inHouse",R==="house"),o&&(e.innerHTML=`<span class="bIcon">${qi("basket",b9)}</span><span class="bcount" data-kind="egg">${ua}<b>${n.egg}</b></span><span class="bcount" data-kind="carrot">${Vl}<b>${n.carrot}</b></span><span class="bcount" data-kind="flower">${qf()}<b>${n.flower}</b></span>`)}L("basketChip").addEventListener("pointerdown",e=>{e.target.closest('.bcount[data-kind="carrot"]')&&R==="ranch"&&Ha().carrot>0&&Xd(e,"carrot","basket")});L("basketChip").addEventListener("click",()=>gP());function gP(){const e=R==="house"&&(!k||Re===ee||me===k.myHouseId()),t={egg:["Eggs",ua],carrot:["Carrots",Vl],flower:["Flowers",qf()]},n=Yt("",(o,i)=>{const a=o.closest("[data-take]")?.dataset.take;if(!a)return;if(!e){F("Take it home to put it in your room! 🏠");return}const r="r"+Math.random().toString(36).slice(2,10),l=Math.max(120,Math.min(he-120,ie+G/2+(Math.random()-.5)*300));qo({op:"take",kind:a,id:r,room:S.get().currentRoom,x:l})&&(C.drop(),i(),F("It's in your room! Drag it to a hand to carry it ✋"))},"basketSheet"),s=Ha();n.root.querySelector(".card").innerHTML=`${Kt}<h2>My Basket</h2><p class="hint small">${e?"Tap one to put it in your room.":"Collect eggs, carrots and flowers at Rainbow Ranch, then take them home!"}</p>
    <div class="basketRows">${f0.map(o=>`<button class="bRow" data-take="${o}" ${s[o]?"":"disabled"}>${t[o][1]}<b>${s[o]}</b><span>${t[o][0]}</span></button>`).join("")}</div>`}window.__ranch=()=>({view:R,inBarn:qe,plots:tc().map(e=>e?{seed:e.seed,stage:Ll(e,ec()),wet:!!e.wet}:null),basket:Ha(),me:xn(),ridden:[...A2().keys()]});function mP(){const e=()=>{const s=document.getElementById("phoneNote");if(s&&!s.classList.contains("hidden")&&getComputedStyle(s).display!=="none"){const o=()=>{$r||!s.classList.contains("hidden")&&getComputedStyle(s).display!=="none"||(s.classList.add("hidden"),$r=!0,window.removeEventListener("resize",o),Se.hint())};L("phoneOk").addEventListener("click",()=>setTimeout(o,0),{once:!0}),window.addEventListener("resize",o);return}$r=!0,Se.hint()};if(Oi.kind==="none"){e();return}F9();const t=Yt(Z9(Oi.kind,Oi.entries),(s,o)=>{s.closest("#wnGo")&&(C.sparkle(),o())},"whatsNew "+Oi.kind);t.root.querySelector(".card").insertAdjacentHTML("afterbegin",Kt);const n=new MutationObserver(()=>{t.root.isConnected||(n.disconnect(),e())});n.observe(document.body,{childList:!0})}setTimeout(mP,500);window.__whatsnew=Oi;window.__hood=()=>k;window.__hood_url=()=>Tl();window.__ui=()=>({view:R,currentHouseId:me,mode:k?"hood":"solo",play:Se.mode()});QE({hood:()=>k,view:()=>R,solo:()=>Wt,myPres:ye,setPres:an,toast:F,refreshNear:Lo,sfx:C,goMap:No,soloLook:()=>{const e=ee.get();return{look:Ma(e.characters[0]??{}),dog:e.dog??null}}});function B2(e){const t=new Set;for(const n of Object.values(e.rooms))for(const s of n.items)t.add(s.kind);for(const n of e.characters)n.held.left&&t.add(n.held.left.kind),n.held.right&&t.add(n.held.right.kind);return e.baby&&t.add("baby"),[...t]}let ur=null,Tp=()=>!1;function z2(e){return ur||(ur=Cs(()=>p(()=>Promise.resolve().then(()=>Rl),void 0)).then(t=>(Tp=t.hasArt,t.boot(location.search,B2(S.get())))).then(t=>{for(let n=0;n<t.length;n++)if(de[t[n]]){ko();break}Z1()}),ur)}function yP(e){const t=new Set(e),n=S.get();let s=!1;for(const o of n.rooms[n.currentRoom].items){const i=de[o.kind];if(!t.has(o.kind)||!i||o.art)continue;const a=X.querySelector(`.item[data-id="${o.id}"] .inner`);!a||a.querySelector("img.artimg")||(a.innerHTML=Vt(i,!0),s=!0)}on(n),Fl(),s&&Z1()}let s0=null;function wP(){if(s0)return;const e=Ss.filter(t=>t.kind!=="people"&&t.icon&&de[t.icon]).map(t=>t.icon);s0=Cs(()=>p(()=>Promise.resolve().then(()=>Rl),void 0)).then(t=>t.loadArtKinds(e)).then(()=>Y1(),()=>{})}for(const e of["cats","shelf"])document.getElementById(e)?.addEventListener("pointerdown",wP,{once:!0,passive:!0});function bP(){return Cs(()=>p(()=>Promise.resolve().then(()=>Rl),void 0)).then(e=>e.boot(location.search,B2(S.get()))).then(e=>{yP(e.filter(t=>!!de[t]))})}t4();A5();hE();$7();Y7(e=>e==="backyard"?m5():null);L("scenery").addEventListener("click",e=>{const t=e.target.closest("[data-yard-go]");t&&ip(t.dataset.yardGo==="backyard"?"backyard":"living")});const vP=iE(L("skyMount"));window.__sky=vP;Zl=b4({layer:X,stageWrap:L("stageWrap"),get:()=>S.get(),dispatch:e=>S.dispatch(e),clock:()=>k&&Re!==ee?k.now():Date.now(),canSend:()=>!k||Re===ee||!!k.speaksBaby,owner:()=>tp(),inHouse:()=>R==="house",play:()=>Se.isPlay(),editable:()=>pt(),toRoom:Qe,box:e=>{const t=de[e.kind];return t?{id:e.id,kind:e.kind,x:e.x,footY:xo(t,e.y),flip:!!e.flip,scale:Ge(e),w:t.w,h:Xe(t),z:e.z}:null},holderId:()=>k&&Re!==ee&&k.pid?k.pid:ze||S.get().characters[0]?.id||"c1",holderSpot:e=>{const t=S.get(),n=k&&Re!==ee&&k.pid?k.pid:ze||t.characters[0]?.id||"",s=e||n,o=(a,r,l,c,d,f)=>{const h=c?.pose==="sit"||c?.pose==="lie"?c.pose:null,u=h==="lie"?t.rooms[t.currentRoom]?.items.find(m=>m.id===c?.item):void 0,y=d&&/^#[0-9a-fA-F]{6}$/.test(d)?d:"#f1c27d";return{x:a.x,y:a.y,flip:r,scale:l>0?l:1,pose:h,lieFlip:!!(h==="lie"&&u?.flip),skin:y,chibi:!!f}},i=t.characters.find(a=>a.id===s&&a.room===t.currentRoom);if(i){const a=Ct(i);return o(At(t.currentRoom,a,i),i.flip,go[i.size]??1,a,i.look2&&i.look2.skin||i.skin,!!i.look2)}if(k&&R==="house"){const a=s===k.pid?ye():k.presence.get(s);if(a&&a.where==="house"&&a.houseId===me&&a.room===t.currentRoom){const r=dn(s,a),l=k.players.get(s)?.look,c=l?.size??"kid";return o(At(t.currentRoom,r,a),a.flip,go[c]??1,r,l?.look2&&l.look2.skin||l?.skin||"#f1c27d",!!l?.look2)}}return null},holderHere:e=>{if(!e)return!1;if(S.get().characters.some(s=>s.id===e))return!0;if(!k||Re===ee)return!1;const n=e===k.pid?ye():k.presence.get(e);return!!(n&&n.where==="house"&&n.houseId===me)},occupied:()=>ti(void 0,k?.pid,!0),locked:()=>Yn(null),seatAt:(e,t,n)=>At(e,t,n)}).render;y1=()=>Zl();ko();Ut();zs();kP();zs();sc();E1();vr();fi.matches?Ps():zs();requestAnimationFrame(()=>{zs(),sc(),Nl()});function kP(){if(!Gf)return;const e=yd(),t=S.get().characters[0];if(!t)return;const n=e==="door";if(S.dispatch({type:"char/update",id:t.id,patch:{...Ix(),flip:n?vd.flip:bd.flip}}),S.dispatch({type:"cat/set",cat:{name:"Clover",coat:3,room:n?"living":"backyard",x:n?Ur:ms.x}}),S.dispatch({type:"dog/set",dog:{name:"Sunny",breed:3,owner:t.id}}),!S.get().rooms.backyard.items.some(s=>s.kind==="yard-swing"))for(const s of Ox)S.dispatch({type:"item/add",room:"backyard",item:{id:"yp-"+s.kind,kind:s.kind,x:s.x,y:s.y,flip:!1,z:1,scale:s.scale??1}});if(e!=="sheet"){const s=n?vd:bd;S.dispatch({type:"char/move",id:t.id,room:n?"living":"backyard",x:s.x,y:s.y}),S.dispatch({type:"room/switch",room:n?"living":"backyard"})}window.__pinCat=n?{x:Ur}:{x:ms.x,y:ms.y},e==="play"?L("modePlay").click():(e==="decorate"||e==="door")&&L("modeDecorate").click(),e==="sheet"&&document.body.insertAdjacentHTML("beforeend",v5()),e==="compare"&&document.body.insertAdjacentHTML("beforeend",_5()),document.body.dataset.yard="ready"}function _P(e){const t=S.get(),n=e==="backyard"?bd:vd;Ht=null;const s=t.characters.find(o=>o.id===ze&&o.room===t.currentRoom)??t.characters.find(o=>o.room===t.currentRoom);if(s&&(S.dispatch({type:"char/update",id:s.id,patch:{flip:n.flip}}),S.dispatch({type:"char/move",id:s.id,room:e,x:n.x,y:n.y})),Gf&&t.cat&&(S.dispatch({type:"cat/move",room:e,x:e==="backyard"?ms.x:Ur}),window.__pinCat=e==="backyard"?{x:ms.x,y:ms.y}:{x:Ur}),S.dispatch({type:"room/switch",room:e}),k&&Re!==ee){const o=ye();if(o&&o.where==="house"){const i=o.houseId?pp(o.houseId,e,n):n;nt({...o,room:e,x:i.x,y:i.y,flip:n.flip})}}requestAnimationFrame(()=>sc())}function Pp(){const e=S.get(),t=k&&ye(),n=t&&t.where==="house"?t.x:e.characters.find(o=>o.room===e.currentRoom)?.x;if(n===void 0)return;const s=D2(e,n,ie);Math.abs(s-ie)>.5&&Je(s)}function D2(e,t,n){if(G>=1e3||document.body.classList.contains("phone")||e.currentRoom==="backyard")return n;n=ei(n);const s=90;let o=null;for(const i of e.rooms[e.currentRoom]?.items??[]){const a=de[i.kind];if(!a||a.wall)continue;const r=a.w*Ge(i),l=i.x-r/2,c=i.x+r/2;if(r<160||r>G-2*s||!(l<n&&c>n||l<n+G&&c>n+G))continue;const f=ei(l<n?l-16:c+16-G);t-s<f||t+s>f+G||l<f-1||c>f+G+1||(!o||r>o.w)&&(o={cam:f,w:r})}return e.currentRoom==="living"?$P(e,t,o?o.cam:n,s):o?o.cam:n}function $P(e,t,n,s){let a=(e.rooms.living?.items??[]).flatMap(r=>{const l=de[r.kind];if(!l||l.wall)return[];const c=l.w*Ge(r);return c>=60?[{l:r.x-c/2,r:r.x+c/2,w:c}]:[]}).filter(r=>r.r>n&&r.l<n+G);if(!a.some(r=>r.l<n+8||r.r>n+G-8))return n;for(a.sort((r,l)=>l.w-r.w);a.length;){const r=Math.max(Math.max(...a.map(c=>c.r))+8-G,t+s-G),l=Math.min(Math.min(...a.map(c=>c.l))-8,t-s);if(r<=l){const c=ei(Math.min(l,Math.max(r,n)));if(c>=r-1&&c<=l+1)return c}a=a.slice(0,-1)}return n}function sc(){if(S.get().currentRoom==="backyard"){Je(wd),ps();return}if(!Gf||yd()==="sheet"||yd()==="compare")return;const e=S.get().characters.find(t=>t.room===S.get().currentRoom);e&&Je(e.x-G/2),ps()}function ps(){if(vo||Y.getBoundingClientRect().width<20)return;const t=yt()||parseFloat(Y.style.getPropertyValue("--yard-sc"))||1;Y.style.setProperty("--yard-sc",String(t));const n=[...Y.querySelectorAll(".yardDoor")];for(const y of n){y.style.minWidth="",y.style.transform="";const m=y.querySelector(".yardHintLabel");if(!m)continue;m.style.transform="",m.style.translate="";const v=m.querySelector("span");v&&(v.style.transform="");const w=Math.max(13,16/t);m.style.fontSize=w+"px",m.style.lineHeight="1";const g=38/t;m.style.height=g+"px";const b=3/t,_=Math.max(0,(g-b*2-w)/2);m.style.padding=`${_.toFixed(2)}px ${(14/t).toFixed(2)}px`}const s=n[0];if(!s)return;const o=s.querySelector(".doorArt"),i=s.querySelector(".yardHintLabel"),a=6,r=()=>{const y=Y.getBoundingClientRect(),m=s.getBoundingClientRect(),v=o?.getBoundingClientRect(),w=i?.getBoundingClientRect(),g=[m,v,w].filter(x=>!!x&&x.width>2&&x.height>2),b=Math.min(...g.map(x=>x.top)),_=Math.max(...g.map(x=>x.bottom));let P=y.left+a,$=y.right-a;for(const x of["nudgeL","nudgeR"]){const D=L(x);if(!D||D.classList.contains("off")||D.offsetParent===null)continue;const W=D.getBoundingClientRect();if(W.width<2||W.height<2)continue;const Q=se=>se.top<W.bottom-1&&se.bottom>W.top+1,q=[m,v].some(se=>se&&se.width>2&&Q(se));!q&&(b>=W.bottom-1||_<=W.top+1)||(x==="nudgeL"&&q?P=Math.max(P,W.right+8):x==="nudgeR"&&q&&($=Math.min($,W.left-8)))}return{leftLimit:P,rightLimit:$,doorR:m,artR:v,hintR:w}};let l=0,c=0;for(;l++<4;){const{leftLimit:y,rightLimit:m,doorR:v,artR:w}=r();let g=0;const b=Math.min(v.left,w&&w.width>2?w.left:v.left),_=Math.max(v.right,w&&w.width>2?w.right:v.right);if(b<y&&(g+=y-b),_+g>m&&(g-=_+g-m),Math.abs(g)<.5)break;c+=g,s.style.transform=`translate(${(c/t).toFixed(1)}px, 0)`}if(!i){zu(s);return}const d=i.querySelector("span");if(d){const y=document.createRange();y.selectNodeContents(d);const m=y.getBoundingClientRect(),v=i.getBoundingClientRect(),w=(v.top+v.bottom-(m.top+m.bottom))/2,g=d;m.height>2&&Math.abs(w)>=.1?g.style.transform=`translateY(${(w/t).toFixed(2)}px)`:g.style.transform=""}const f=i.getBoundingClientRect(),h=Y.getBoundingClientRect();let u=0;if(S.get().currentRoom==="backyard"&&o){const y=o.getBoundingClientRect();y.width>2&&(u+=(y.left+y.right)/2-(f.left+f.right)/2)}f.left+u<h.left+a?u+=h.left+a-(f.left+u):f.right+u>h.right-a&&(u-=f.right+u-(h.right-a)),Math.abs(u)>.5?i.style.translate=`calc(-50% + ${(u/t).toFixed(1)}px) 0`:i.style.translate="",zu(s)}z2(S.get().currentRoom);const H2=()=>{const e=Ol().size,t=Vr.length,n=L("secrets"),s=n.querySelector(".secCount");s&&(s.textContent=`${e}/${t}`),n.setAttribute("aria-label",`Surprises, ${e} of ${t}`),_1()};function oc(){return window.innerHeight>window.innerWidth+40}function W2(e,t){for(const q of e)q.style.transform="";if(!oc()||!e.length)return;const n=t&&t.clientWidth>20?t.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth};if(n.width<20)return;const s=8,o=Math.max(n.left,0)+s,i=Math.min(n.right,window.innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,window.innerHeight)-s,l=Math.max(40,i-o),c=Math.max(40,r-a),f=e.map(q=>q.getBoundingClientRect()).filter(q=>q.width>2&&q.height>2);if(!f.length)return;const h=Math.min(...f.map(q=>q.left)),u=Math.max(...f.map(q=>q.right)),y=Math.min(...f.map(q=>q.top)),m=Math.max(...f.map(q=>q.bottom)),v=Math.max(1,u-h),w=Math.max(1,m-y),g=Math.min(1,l/v,c/w);if(g>.995&&h>=o-1&&u<=i+1&&y>=a-1&&m<=r+1)return;const _=e[0].getScreenCTM(),P=_&&Math.hypot(_.a,_.b)||1,$=(h+u)/2,x=(y+m)/2,D=w*g,W=(o+i)/2,Q=y>=a&&m<=r?x:Math.min(Math.max(x,a+D/2),r-D/2);for(const q of e){const se=q.getBoundingClientRect(),Me=(se.left+se.right)/2,Ke=(se.top+se.bottom)/2,Ie=W+(Me-$)*g,I=Q+(Ke-x)*g;q.style.transformBox="fill-box",q.style.transformOrigin="center",q.style.transform=`translate(${((Ie-Me)/P).toFixed(2)}px, ${((I-Ke)/P).toFixed(2)}px) scale(${g.toFixed(3)})`}}function V2(){if(R!=="gameroom")return;const e=document.getElementById("grScroll");W2([...document.querySelectorAll(".neonSignArt")],e)}function Jd(){R!=="ranch"||qe||(document.querySelectorAll(".ranchSignArt").forEach(e=>{e.style.transform=""}),dt(),U2(),Ap())}function Ap(){if(R!=="ranch"||qe)return;const e=document.getElementById("ranchScroll");if(!e)return;const t=e.getBoundingClientRect();document.querySelectorAll(".ranchSignArt").forEach(n=>{const s=n.getBoundingClientRect(),o=Math.min(t.right,innerWidth),i=Math.max(0,t.left-s.left)+Math.max(0,s.right-o);n.style.visibility=s.width>20&&i<8?"visible":"hidden"})}L("ranchScroll").addEventListener("scroll",()=>{R==="ranch"&&!qe&&Ap()},{passive:!0});function U2(){const e=document.querySelector(".doorHint"),t=document.getElementById("ranchScroll");if(!e||!t)return;e.style.transform="translateX(-50%)";const n=t.getBoundingClientRect(),s=8,o=Math.max(n.left,0)+s,i=Math.min(n.right,innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,innerHeight)-s,l=e.getBoundingClientRect();let c=0;l.right>i&&(c-=l.right-i),l.left+c<o&&(c+=o-(l.left+c));let d=0;const f=t.querySelector(".savatar");if(f){const h=f.getBoundingClientRect(),y=f.querySelector(".nametag")?.getBoundingClientRect(),m=!!(y&&y.width>4&&y.height>4),v=m?Math.min(h.top,y.top):h.top,w=m?Math.min(h.left,y.left):h.left,g=m?Math.max(h.right,y.right):h.right,b=l.left+c;l.right+c>w-6&&b<g+6&&l.bottom+d>v-6&&l.top<h.top+h.height*.72&&(d+=v-48-(l.bottom+d))}if(l.top+d<a&&(d+=a-(l.top+d)),document.body.classList.contains("phone-portrait")){const h=document.querySelector(".ranchSign .ranchSignArt");if(h){const u=h.getBoundingClientRect(),y=l.left+c,m=l.right+c,v=l.top+d,w=l.bottom+d;if(u.width>20&&u.height>u.width*.7&&m>u.left+4&&y<u.right-4&&w>u.top+4&&v<u.bottom-4){let b=u.top-16-w;v+b<a&&(b+=a-(v+b));const P=f?.querySelector(".nametag")?.getBoundingClientRect(),$=w+b;!(P&&P.width>4&&P.height>4&&$>P.top-12&&m>P.left-6&&y<P.right+6)&&$<=r&&(d+=b)}}}(c||d)&&(e.style.transform=`translate(calc(-50% + ${c.toFixed(1)}px), ${d.toFixed(1)}px)`)}const Q2=D4({world:Yf,roomW:he,roomH:Ce,currentRoom:()=>S.get().currentRoom,sparkle:()=>C.sparkle(),tap:()=>C.click(),onFound:(e,t)=>{if(H2(),t){const n=L("secrets");n.classList.remove("pulse"),n.offsetWidth,n.classList.add("pulse"),setTimeout(()=>F("🎁 A secret surprise appeared in your drawer!"),1400),Ut()}}});S.subscribe((e,t)=>{(t.type==="room/switch"||t.type==="game/reset")&&Q2.update()});H2();window.__eggs=()=>({found:[...Ol()]});yT();const ef={restored:"The saved house had a hiccup, so we opened the last good copy.",unreadable:"We couldn't open the saved house, so we started a new one. The old one is kept safely on this iPad.",full:"This iPad is out of room, so new changes can't be saved yet. Your house is safe for now. To free space, delete old photos or apps in Settings › General › iPad Storage."},Yc=ee.trouble(),o0=[Yc?ef[Yc]:"",ee.fullAtStart&&Yc!=="full"?ef.full:""].filter(Boolean).join(" ");o0&&F0(o0);ee.onTrouble(e=>F0(ef[e]));
