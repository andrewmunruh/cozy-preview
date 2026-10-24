(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const r0="modulepreload",l0=function(e){return"/cozy-preview/"+e},Md={},f=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(n.map(l=>{if(l=l0(l),l in Md)return;Md[l]=!0;const c=l.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${p}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":r0,c||(d.as="script"),d.crossOrigin="",d.href=l,r&&d.setAttribute("nonce",r),document.head.appendChild(d),c)return new Promise((g,h)=>{d.addEventListener("load",g),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return i.then(a=>{for(const r of a||[])r.status==="rejected"&&o(r.reason);return t().catch(o)})},ao="#5a3d5c",Y=(e=4)=>`stroke="${ao}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,Ur=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],Sn=1e3,zn=700,Qr="M 30 660 C 150 640, 200 540, 330 545 S 540 650, 690 600 S 925 470, 850 375 S 640 330, 520 355 S 270 385, 250 285 S 330 145, 480 150 S 700 200, 790 150",Hn={x:115,y:170},ln={x:880,y:120},cn={x:600,y:480},On={x:400,y:260},pf=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="22" rx="20" ry="6" fill="#000" opacity=".1"/><rect x="-5" y="2" width="10" height="20" rx="4" fill="#c99366" ${Y(3)}/><circle cx="0" cy="-10" r="20" fill="${s}" ${Y(3)}/><circle cx="-12" cy="-2" r="12" fill="${s}" ${Y(3)}/><circle cx="12" cy="-3" r="13" fill="${s}" ${Y(3)}/><circle cx="-5" cy="-16" r="5" fill="#fff" opacity=".35"/></g>`,fs=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})" fill="#fff"><ellipse cx="0" cy="10" rx="46" ry="22"/><ellipse cx="-36" cy="16" rx="28" ry="16"/><ellipse cx="38" cy="14" rx="30" ry="18"/><ellipse cx="10" cy="2" rx="24" ry="18"/></g>`,Ki=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">${[0,72,144,216,288].map(i=>`<circle cx="${(Math.cos(i*Math.PI/180)*8).toFixed(1)}" cy="${(Math.sin(i*Math.PI/180)*8).toFixed(1)}" r="6.5" fill="${n}" ${Y(2)}/>`).join("")}<circle r="4.5" fill="#ffd43b" ${Y(2)}/></g>`,Wn=(e,t,n)=>`<g transform="translate(${e} ${t})">${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*4}" cy="${Math.sin(s*Math.PI/180)*4}" r="3.6" fill="${n}"/>`).join("")}<circle r="2.6" fill="#ffd43b"/></g>`;function c0(){return`<svg class="mapBg" viewBox="0 0 ${Sn} ${zn}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${Sn}" height="${zn}" rx="34" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="160" cy="420" rx="150" ry="90"/><ellipse cx="760" cy="250" rx="170" ry="70"/><ellipse cx="480" cy="640" rx="140" ry="50"/><ellipse cx="930" cy="600" rx="90" ry="110"/></g>
  <g fill="#93d78e" opacity=".7"><ellipse cx="420" cy="260" rx="70" ry="30"/><ellipse cx="80" cy="560" rx="60" ry="26"/><ellipse cx="700" cy="420" rx="50" ry="22"/></g>
  <!-- pond -->
  <ellipse cx="120" cy="470" rx="72" ry="40" fill="#8ecae6" ${Y()}/><ellipse cx="108" cy="462" rx="42" ry="16" fill="#bde6f7"/><path d="M150 480 q8 -6 16 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <!-- side paths to the park and the ranch -->
  <path d="M250 285 Q190 250 150 215" fill="none" stroke="${ao}" stroke-width="30" stroke-linecap="round"/><path d="M250 285 Q190 250 150 215" fill="none" stroke="#f2dcb8" stroke-width="22" stroke-linecap="round"/>
  <!-- the street -->
  <path d="${Qr}" fill="none" stroke="${ao}" stroke-width="58" stroke-linecap="round"/>
  <path id="mapRoad" d="${Qr}" fill="none" stroke="#f2dcb8" stroke-width="48" stroke-linecap="round"/>
  <path d="${Qr}" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="18 16" stroke-linecap="round" opacity=".9"/>
  <!-- town square -->
  <g transform="translate(${cn.x} ${cn.y})"><circle r="74" fill="#f7e6c8" ${Y()}/><circle r="74" fill="none" stroke="#e6cfa6" stroke-width="10" stroke-dasharray="10 12" transform="scale(.82)"/>
    <circle r="30" fill="#bde6f7" ${Y()}/><circle r="13" fill="#fff6e6" ${Y(3)}/><path d="M0 -13 Q-8 -32 -16 -20 M0 -13 Q8 -32 16 -20 M0 -13 V-34" fill="none" stroke="#74c0fc" stroke-width="4" stroke-linecap="round"/>
    ${Wn(-52,-40,"#ff8fab")}${Wn(54,-38,"#b197fc")}${Wn(-56,40,"#ffd43b")}${Wn(52,44,"#ff8fab")}</g>
  ${[[60,330,"#ff8fab"],[300,470,"#b197fc"],[430,560,"#ffd43b"],[760,520,"#ff8fab"],[950,260,"#b197fc"],[600,260,"#ffd43b"],[380,90,"#ff8fab"],[40,120,"#b197fc"],[960,420,"#ffd43b"],[840,640,"#b197fc"],[210,620,"#ff8fab"]].map(([e,t,n])=>Wn(+e,+t,String(n))+Wn(+e+14,+t+8,String(n))).join("")}
  </svg>`}function Ld(e,t,n=Sn,s=zn){const i=[];let o=7;const a=()=>(o=(o*9301+49297)%233280)/233280;for(let r=0;r<260&&i.length<34;r++){const l=30+a()*(n-60),c=40+a()*(s-70);t(l,c)||e.some(p=>Math.hypot(p.x-l,p.y-c)<p.r)||(e.push({x:l,y:c,r:46}),i.push(pf(l,c,.75+a()*.45,["#5cc985","#4fbf7a","#78d39a"][r%3])))}return`<svg class="mapTrees" viewBox="0 0 ${n} ${s}" xmlns="http://www.w3.org/2000/svg">${i.join("")}</svg>`}function d0(e,t){const n=e/2,s=`M ${n} 36 C ${n-36} ${t*.28}, ${n+28} ${t*.48}, ${n-8} ${t*.68} S ${n+18} ${t*.86}, ${n} ${t-28}`;return`<svg class="mapBg" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="${t}" rx="28" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="${e*.22}" cy="${t*.22}" rx="90" ry="48"/><ellipse cx="${e*.78}" cy="${t*.42}" rx="80" ry="40"/><ellipse cx="${e*.3}" cy="${t*.72}" rx="100" ry="46"/></g>
  <ellipse cx="78" cy="${t*.58}" rx="46" ry="28" fill="#8ecae6" ${Y()}/><ellipse cx="70" cy="${t*.56}" rx="24" ry="10" fill="#bde6f7"/>
  <path d="${s}" fill="none" stroke="${ao}" stroke-width="44" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#f2dcb8" stroke-width="34" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" stroke-linecap="round" opacity=".9"/>
  ${[[40,250,"#ff8fab"],[500,280,"#b197fc"],[70,520,"#ffd43b"],[490,640,"#ff8fab"],[50,860,"#74c0fc"],[500,980,"#ffd43b"]].map(([i,o,a])=>Wn(+i,+o,String(a))+Wn(+i+16,+o+10,String(a))).join("")}
  </svg>`}const p0=(e,t,n=1,s="#4fbf7a")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="10" rx="28" ry="8" fill="#000" opacity=".08"/><circle cx="-14" cy="-2" r="16" fill="${s}" ${Y(3)}/><circle cx="14" cy="0" r="18" fill="${s}" ${Y(3)}/><circle cx="0" cy="-12" r="14" fill="${s}" ${Y(3)}/><circle cx="-4" cy="-16" r="4" fill="#fff" opacity=".28"/></g>`,f0=(e,t,n="#ff8fab")=>`<g transform="translate(${e} ${t})"><ellipse cx="-7" cy="-2" rx="8" ry="5" fill="${n}" ${Y(2)} transform="rotate(-24)"/><ellipse cx="7" cy="-2" rx="8" ry="5" fill="${n}" ${Y(2)} transform="rotate(24)"/><ellipse cx="-6" cy="4" rx="6" ry="4" fill="#b197fc" ${Y(1.6)} transform="rotate(18)"/><ellipse cx="6" cy="4" rx="6" ry="4" fill="#b197fc" ${Y(1.6)} transform="rotate(-18)"/><path d="M0 -6 V8" ${Y(2)}/></g>`;function g0(e,t,n){const s=e/2,i=(d,g,h)=>g>t*.4&&g<t-28&&Math.abs(d-s)>52&&!n.some(m=>Math.hypot(m.x-d,m.y-g)<m.r+h),o=[.07,.15,.22,.78,.85,.93],a=[.46,.54,.62,.7,.78,.86,.93],r=["#ff8fab","#b197fc","#ffd43b","#74c0fc","#69db7c"],l=[];let c=0;a.forEach((d,g)=>{o.forEach((h,m)=>{const b=Math.round(e*h+((g+m)%2?8:-6)),_=Math.round(t*d);if((g+m)%3===0){if(!i(b,_,34))return;l.push(p0(b,_,.85+m%2*.15,["#4fbf7a","#5cc985","#3dae6a"][(g+m)%3]))}else{if(!i(b,_,18))return;const y=r[(g*2+m)%r.length];l.push(Ki(b,_,y,.85)),(g+m)%2===0&&i(b+18,_+12,14)&&l.push(Ki(b+18,_+12,r[(g+m+2)%r.length],.7))}c++})});const p=[[e*.2,t*.5],[e*.8,t*.66],[e*.18,t*.84]];for(const[d,g]of p)i(d,g,16)&&l.push(f0(Math.round(d),Math.round(g),c%2?"#ffd43b":"#ff8fab"));return`<svg class="mapMeadowFill" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">${l.join("")}</svg>`}const h0=`<svg class="mapSkyArt" viewBox="0 0 900 200" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
  ${fs(280,28,1.05)}${fs(430,8,.8)}${fs(560,36,.95)}
  ${fs(250,88,.75)}${fs(390,108,1.05)}${fs(540,96,.85)}${fs(640,78,.7)}
  <g fill="none" stroke-linecap="round">
    ${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M300 ${118+t*6} A70 48 0 0 1 430 ${112+t*6}" stroke="${e}" stroke-width="5"/>`).join("")}
  </g>
</svg>`,u0=`<svg class="mapMeadowArt" viewBox="0 0 900 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
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
  ${[[48,188,"#ff8fab",.85],[120,176,"#ffd43b",.7],[200,198,"#b197fc",.9],[280,172,"#ff8fab",.75],[360,204,"#74c0fc",.8],[450,178,"#ffd43b",.85],[530,200,"#ff8fab",.75],[620,174,"#b197fc",.8],[700,196,"#69db7c",.7],[790,180,"#ffd43b",.85]].map(([e,t,n,s])=>Ki(+e,+t,String(n),+s)).join("")}
  ${[[80,248,"#ff8fab"],[160,268,"#b197fc"],[250,242,"#ffd43b"],[340,274,"#ff8fab"],[430,250,"#74c0fc"],[520,270,"#b197fc"],[610,246,"#ffd43b"],[700,272,"#ff8fab"],[790,252,"#69db7c"]].map(([e,t,n])=>Ki(+e,+t,String(n),1.05)).join("")}
  ${[[110,304,"#ffd43b"],[230,292,"#ff8fab"],[360,308,"#b197fc"],[490,294,"#74c0fc"],[620,306,"#ff8fab"],[750,296,"#ffd43b"]].map(([e,t,n])=>Ki(+e,+t,String(n),.9)).join("")}
</svg>`,Ed=`<svg viewBox="0 0 200 170"><ellipse class="parkLawn" cx="100" cy="100" rx="94" ry="62" fill="#7fd68a" ${Y()}/>
  <ellipse cx="62" cy="120" rx="30" ry="14" fill="#8ecae6" ${Y(3)}/>
  <path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" stroke="#ff6b6b" stroke-width="7" stroke-linecap="round"/><path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" ${Y(2)}/>
  <path d="M112 62 V100 M134 62 V100" ${Y(2.5)}/><rect x="104" y="98" width="16" height="7" rx="3" fill="#ffd43b" ${Y(2.5)}/><rect x="126" y="98" width="16" height="7" rx="3" fill="#74c0fc" ${Y(2.5)}/>
  ${pf(40,66,1)}
  <path d="M150 128 L176 88 H186 L162 132 Z" fill="#b197fc" ${Y(3)}/><path d="M178 88 V132" ${Y(4)}/>
</svg>`,Cd=`<svg viewBox="0 0 220 180"><ellipse class="ranchGrass" cx="110" cy="132" rx="104" ry="44" fill="#a6e3a0" ${Y()}/>
  ${Ur.map((e,t)=>`<path d="M${20+t*7} 120 A${90-t*7} ${84-t*7} 0 0 1 ${200-t*7} 120" fill="none" stroke="${e}" stroke-width="7"/>`).join("")}
  <path d="M60 140 V82 L80 58 H140 L160 82 V140 Z" fill="#ef5b5b" ${Y(4)}/>
  <path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${ao}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  ${Ur.map((e,t)=>`<path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${e}" stroke-width="1.3" transform="translate(0 ${-3+t*1.2})"/>`).join("")}
  <rect x="88" y="100" width="44" height="40" rx="3" fill="#d94848" ${Y(3)}/><path d="M88 100 L132 140 M132 100 L88 140" stroke="#fff6e6" stroke-width="3"/>
  <rect x="94" y="70" width="32" height="18" rx="4" fill="#fff6e6" ${Y(3)}/>
  <path d="M10 150 H52 M168 150 H212 M14 140 V158 M30 140 V158 M46 140 V158 M174 140 V158 M190 140 V158 M206 140 V158" stroke="#fff6e6" stroke-width="5" stroke-linecap="round"/><path d="M10 150 H52 M168 150 H212" ${Y(1.5)}/>
  <g transform="translate(178 122) scale(.42)"><ellipse cx="0" cy="0" rx="34" ry="18" fill="#fff" ${Y(5)}/><path d="M24 -8 L40 -34 L54 -26 L36 2 Z" fill="#fff" ${Y(5)}/>${Ur.slice(0,4).map((e,t)=>`<path d="M38 ${-34+t*5} q-14 4 -20 14" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round"/>`).join("")}<path d="M-20 14 V34 M20 14 V34" ${Y(6)}/></g>
</svg>`,Sd=`<svg viewBox="0 0 190 156">
  <ellipse cx="95" cy="118" rx="88" ry="32" fill="#ffd0e6" ${Y()}/>
  <path d="M28 108 V62 L95 28 L162 62 V108 Z" fill="#fff0f6" ${Y(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="#ff6b9a" ${Y(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="none" stroke="#ffd43b" stroke-width="3" stroke-dasharray="6 5"/>
  <rect x="78" y="78" width="34" height="30" rx="4" fill="#ff8ec8" ${Y(3)}/>
  <path d="M95 86 C90 80 82 82 86 90 C90 96 95 100 95 100 C95 100 100 96 104 90 C108 82 100 80 95 86 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  <rect x="42" y="74" width="22" height="16" rx="3" fill="#66d9e8" ${Y(2)}/><rect x="126" y="74" width="22" height="16" rx="3" fill="#d0bfff" ${Y(2)}/>
  ${[36,52,68,84,100,116,132,148].map((e,t)=>`<circle class="clubBulb" cx="${e}" cy="58" r="3.2" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" ${Y(1.4)}/>`).join("")}
  <circle cx="154" cy="48" r="3" fill="#fff" opacity=".9"/><circle cx="40" cy="44" r="2.4" fill="#fff" opacity=".85"/>
</svg>`,pc=`<svg viewBox="0 0 48 48"><path d="M6 12 L17 8 L31 13 L42 9 V36 L31 40 L17 35 L6 39 Z" fill="#fff3b0" ${Y(3)}/><path d="M17 8 V35 M31 13 V40" ${Y(2.5)}/><path d="M9 30 Q16 22 22 27 T38 18" fill="none" stroke="#ff8fab" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="36" cy="18" r="4" fill="#ff6b6b" ${Y(2)}/></svg>`,fc=e=>e.indexOf("data-chibi")>=0?e.replace('viewBox="0 0 200 320"','viewBox="24 0 152 168"'):e.replace('viewBox="0 0 100 160"','viewBox="14 2 72 74"'),tr=e=>String(e||"").replace(/^pack:/,"").toLowerCase(),m0={"cute-speaker":"stereo","cc-record-player":"stereo","retro-radio":"stereo","music-box":"musicbox",tv:"tv",fireplace:"fire","brick-fireplace":"fire","wc-woodstove":"fire",woodstove:"fire","wc-stone-hearth":"fire","fire-pit":"fire"};function Cs(e){return m0[tr(e)]??null}function ff(e){return Cs(e)!==null}function y0(e){const t=tr(e);return t==="ball"||t==="beach-ball"||t==="balloon"?"bounce":t==="teddy"||/plush/.test(t)?"hug":null}const gf=e=>/(^|-)tub$/.test(tr(e)),hf=e=>/fridge$/.test(tr(e)),w0={stereo:220,musicbox:160,tv:280,fire:230},b0=70,v0=130,k0=.4,_0=6,zd=2e4,Gt=900,$0=["stereo","tv","fire","musicbox"];function x0(e,t){let n=2166136261;const s=e+"|"+t;for(let i=0;i<s.length;i++)n^=s.charCodeAt(i),n=Math.imul(n,16777619);return(n>>>0)%1e3/1e3}const Pd=(e,t)=>Math.hypot(e.x-t.x,(e.y-t.y)*1.5);function M0(e,t,n={}){const s=new Map,i=[...t].sort((r,l)=>r.id<l.id?-1:r.id>l.id?1:0),o=e.filter(r=>r.on&&Cs(r.kind)&&!(Cs(r.kind)==="musicbox"&&n.musicBoxDone?.has(r.id))),a=[];for(const r of i){if(r.lying)continue;let l=null;for(const c of $0){for(const p of o){if(Cs(p.kind)!==c)continue;const d=Pd(r,p);if(d>w0[c]||r.seated&&c!=="tv"&&c!=="musicbox")continue;const g=c==="stereo"?"dance":c==="tv"?"watch":c==="fire"?"warm":"sway";(!l||d<l.d||d===l.d&&p.id<l.it.id)&&(l={c:r,it:p,d,kind:g})}if(l)break}if(!l&&!r.seated)for(const c of e){const p=y0(c.kind);let d=null,g=Pd(r,c);p&&g<=b0?d=p:hf(c.kind)&&n.fridgesOpen?.has(c.id)&&g<=v0?d="nibble":gf(c.kind)&&Math.abs(r.x-c.x)<=(c.w??240)*k0&&Math.abs(r.y-c.y)<=40&&(d="bathe"),d&&(!l||g<l.d||g===l.d&&c.id<l.it.id)&&(l={c:r,it:c,d:g,kind:d})}l&&a.push(l)}a.sort((r,l)=>r.d-l.d||(r.c.id<l.c.id?-1:1));for(const r of a.slice(0,_0))s.set(r.c.id,{kind:r.kind,item:r.it.id,phase:x0(r.it.id,r.c.id),face:r.it.x<r.c.x?-1:1});return s}function uf(e,t,n){return-((n+e*t)%t)}const Nt=e=>"preview:"+e,L0=400,nr=["#ffe0c4","#f6d2b5","#f1c27d","#e0ac69","#c9956c","#c68642","#a86b3c","#8d5524","#5c3a1e","#3d2914"],sr=["#2b1d16","#5b3a29","#a0522d","#f4d58d","#ff8fab","#8ecae6","#b388d6","#ff9f43","#1d1416","#c8602a","#7a4b32","#f7f1e8"],gc=["#5a321c","#3f9b52","#3d7ec4","#c48a3a","#7b4fb8"],zt=["#ff7aa8","#ffd166","#5aa9e6","#80ed99","#c9a0dc","#ff9f68","#ffffff","#5a3d5c","#ff8f7a","#7ec8c3","#f7f3ee","#f4a3c8","#6b8e4e","#e8d5b5","#ef6b6b","#3d4a6b"],ir=["short","bob","buns","topbun","pixie","long","wavy","puffs","afro","curlybob","coily","boxbraids","braids","sidebraid","crown","pony","sidepony","pigtails","lowbun","locs","halfup","bangs","sidebangs","wavybob"],or=["classic","stripes","hoodie","sweater","tank","puff","ruffle","button","jersey","cardigan","bib","raincoat"],ar=["pants","jeans","shorts","skirt","tutu","leggings","overalls","joggers"],rr=["","twirl","sundress","party","pinafore","jumper","ballet","nightgown","raindress"],lr=["classic","sneakers","lightup","boots","rainboots","sandals","maryjanes","slippers"],cr=["round","big","sleepy","sparkle","soft","bright"],li=["glasses","square","sunnies","bow","bigbow","headband","flower","cap","beanie","sunhat","catears","earmuffs"],E0=new Set(ir),C0=new Set(or),S0=new Set(ar),z0=new Set(rr),P0=new Set(lr),T0=new Set(cr),B0=new Set(li),R0=new Set(["short","pixie","coily","afro","bangs"]),A0=new Set(["buns","puffs"]),D0=new Set(["topbun","lowbun"]),I0={hair:"buns",hairC:"#5b3a29",skin:"#f1c27d",eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"pants",bottomC:"#5aa9e6",dress:"",dressC:"#ff7aa8",shoes:"classic",shoesC:"#5a3d5c",accC:"#ffd166"};function H0(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Ks(e,t){return typeof e=="string"&&t.has(e)}function kn(e,t){if(typeof e!="string")return null;const n=e.trim().toLowerCase();for(let s=0;s<t.length;s++)if(t[s]===n)return t[s];return null}function $o(e){if(!H0(e))return null;let t=0;try{t=JSON.stringify(e).length}catch{return null}if(t>L0)return null;const n={v:1};Ks(e.hair,E0)&&(n.hair=e.hair);const s=kn(e.hairC,sr);s&&(n.hairC=s);const i=kn(e.skin,nr);i&&(n.skin=i),Ks(e.eyes,T0)&&(n.eyes=e.eyes);const o=kn(e.eyeC,gc);o&&(n.eyeC=o),(e.freckles===!0||e.freckles===!1)&&(n.freckles=e.freckles),(e.blush===!0||e.blush===!1)&&(n.blush=e.blush),Ks(e.top,C0)&&(n.top=e.top);const a=kn(e.topC,zt);a&&(n.topC=a),Ks(e.bottom,S0)&&(n.bottom=e.bottom);const r=kn(e.bottomC,zt);r&&(n.bottomC=r),Ks(e.dress,z0)&&(n.dress=e.dress);const l=kn(e.dressC,zt);l&&(n.dressC=l),Ks(e.shoes,P0)&&(n.shoes=e.shoes);const c=kn(e.shoesC,zt);if(c&&(n.shoesC=c),Array.isArray(e.acc)){const d=[];for(let g=0;g<e.acc.length&&d.length<2;g++){const h=e.acc[g];typeof h=="string"&&B0.has(h)&&d.indexOf(h)<0&&d.push(h)}n.acc=d}const p=kn(e.accC,zt);return p&&(n.accC=p),n}function Zs(e){const t=I0,n=e??{};return{v:1,hair:n.hair??t.hair,hairC:n.hairC??t.hairC,skin:n.skin??t.skin,eyes:n.eyes??t.eyes,eyeC:n.eyeC??t.eyeC,freckles:n.freckles??t.freckles,blush:n.blush??t.blush,top:n.top??t.top,topC:n.topC??t.topC,bottom:n.bottom??t.bottom,bottomC:n.bottomC??t.bottomC,dress:n.dress??t.dress,dressC:n.dressC??t.dressC,shoes:n.shoes??t.shoes,shoesC:n.shoesC??t.shoesC,acc:n.acc?n.acc.slice():[],accC:n.accC??t.accC}}function Td(e){const t=/^#([0-9a-f]{6})$/i.exec(e.trim());if(!t){const s=/^#([0-9a-f]{3})$/i.exec(e.trim());return s?[parseInt(s[1][0]+s[1][0],16),parseInt(s[1][1]+s[1][1],16),parseInt(s[1][2]+s[1][2],16)]:null}const n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function Ao(e,t){const n=kn(e,t);if(n)return n;const s=Td(e);if(!s)return t[0];let i=t[0],o=1e12;for(let a=0;a<t.length;a++){const r=Td(t[a]);if(!r)continue;const l=(s[0]-r[0])*(s[0]-r[0])+(s[1]-r[1])*(s[1]-r[1])+(s[2]-r[2])*(s[2]-r[2]);l<o&&(o=l,i=t[a])}return i}function O0(e){return R0.has(e)?0:A0.has(e)?2:D0.has(e)?3:1}function W0(e){for(let t=0;t<e.length;t++){const n=e[t];if(n==="glasses"||n==="square"||n==="sunnies")return 2}for(let t=0;t<e.length;t++){const n=e[t];if(n==="cap"||n==="beanie"||n==="sunhat")return 3}for(let t=0;t<e.length;t++){const n=e[t];if(n==="bow"||n==="bigbow")return 1}return 0}function dr(e){const t=Zs(e),n=t.dress!=="";return{skin:t.skin,hair:t.hairC,hairStyle:O0(t.hair),shirt:n?t.dressC:t.topC,pants:n?t.dressC:t.bottomC,acc:W0(t.acc)}}const V0=["short","bob","buns","topbun"];function _a(e){const t=typeof e.hairStyle=="number"&&e.hairStyle>=0&&e.hairStyle<=3?Math.round(e.hairStyle):0,n=e.acc===1?["bow"]:e.acc===2?["glasses"]:e.acc===3?["cap"]:[],s=Ao(String(e.shirt??""),zt);return{v:1,hair:V0[t],hairC:Ao(String(e.hair??""),sr),skin:Ao(String(e.skin??""),nr),eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:s,bottom:"pants",bottomC:Ao(String(e.pants??""),zt),dress:"",dressC:s,shoes:"classic",shoesC:"#5a3d5c",acc:n,accC:"#ffd166"}}function ro(e){const t=$o(e)??{},n=Zs(t);return{...dr(n),look2:n}}const U0=new Set(["glasses","square","sunnies"]),Q0=new Set(["bow","bigbow","flower","headband"]),q0=new Set(["cap","beanie","sunhat","catears","earmuffs"]);function $a(e){return U0.has(e)?"face":Q0.has(e)?"bow":q0.has(e)?"hat":"other"}function Ke(e,t){return t[Math.floor(e()*t.length)]}function pr(e=Math.random){const t=e()<.38,n=e();let s=[];if(n<.22)s=[];else if(n<.68)s=[Ke(e,li)];else{const i=Ke(e,li),o=li.filter(a=>$a(a)!==$a(i));s=[i,Ke(e,o)]}return{v:1,hair:Ke(e,ir),hairC:Ke(e,sr),skin:Ke(e,nr),eyes:Ke(e,cr),eyeC:Ke(e,gc),freckles:e()<.4,blush:e()<.85,top:Ke(e,or),topC:Ke(e,zt),bottom:Ke(e,ar),bottomC:Ke(e,zt),dress:t?Ke(e,rr.filter(i=>i!=="")):"",dressC:Ke(e,zt),shoes:Ke(e,lr),shoesC:Ke(e,zt),acc:s,accC:Ke(e,zt)}}function Z0(e,t=Math.random){const n=e.characters[0];if(!n)return e;const s=pr(t),i=dr(s),o=e.characters.slice();return o[0]={...n,...i,look2:s},{...e,characters:o}}function N0(e){return[e.skin,e.hair,e.hairStyle,e.shirt,e.pants,e.acc,e.look2?JSON.stringify(e.look2):""].join("|")}const xo=3600,zs=470,Pn=590,ks=["goat","sheep","piglet","chicks","bunny","cow"],F0=[1085,1215,1345,1470,1600,1735],j0=520,hc=1900,uc=[600,800,1e3,1200,1400,1600],yl=435,G0=["Chestnut","Snowy","Midnight","Sunny","Rainbow"],mf=[2470,2600,2730,2860,2990],Ps=540,Y0=["pet","carrot","apple","hay"],wl=6,K0=e=>3175+e*68,X0=8e4,bl=20,J0=1500,yf=["egg","carrot","flower"],eu={egg:"ranch-egg",carrot:"ranch-carrot",flower:"ranch-bouquet"},tu=()=>({egg:0,carrot:0,flower:0}),nu=(e,t,n)=>Number.isInteger(e)&&e>=t&&e<=n?e:null;function mc(e){const t=tu();if(!e||typeof e!="object")return t;for(const n of yf)t[n]=nu(e[n],0,bl)??0;return t}function yc(e){const t=Array(wl).fill(null);if(Array.isArray(e))for(let n=0;n<wl;n++){const s=e[n];if(!s||s.seed!=="carrot"&&s.seed!=="flower")continue;const i=Number(s.at),o=Number(s.wet);Number.isFinite(i)&&Number.isFinite(o)&&(t[n]={seed:s.seed,at:i,wet:o})}return t}function fr(e,t){if(!e||!e.wet)return 0;const n=(t-e.wet)/X0;return n>=1?3:n>=.4?2:1}function vl(e,t,n,s,i=0){const o=e.slice(),a={...t};switch(n.op){case"plant":return o[n.i]?"taken":(o[n.i]={seed:n.seed,at:s,wet:0},{plots:o,basket:a,garden:!0});case"water":{const r=o[n.i];return r?r.wet?"wet":(o[n.i]={...r,wet:s},{plots:o,basket:a,garden:!0}):"empty"}case"pick":{const r=o[n.i];return r?fr(r,s)<3?"notReady":a[r.seed]>=bl?"full":(a[r.seed]++,o[n.i]=null,{plots:o,basket:a,garden:!0,got:r.seed}):"empty"}case"egg":return s-i<J0?"slow":a.egg>=bl?"full":(a.egg++,{plots:o,basket:a,garden:!1,got:"egg"});case"use":return a.carrot<=0?"none":(a.carrot--,{plots:o,basket:a,garden:!1});case"take":return a[n.kind]<=0?"none":(a[n.kind]--,{plots:o,basket:a,garden:!1})}}const Un=80,su=30*24*60*60*1e3,iu=5,wf=6,Rn=["#ffd6e8","#fff3b0","#d8f5e8","#e6d6ff","#d6efff"],ou=/^m[A-Za-z0-9]{4,40}$/,au=/^[A-Za-z0-9:_\/.-]{1,80}$/;function qr(e,t=Date.now()){const n=Math.floor((t-e)/864e5);return n<=0?"today":n===1?"yesterday":n<7?"a few days ago":"a while ago"}function ru(e,t=Date.now()){const n=e?.letters;if(!Array.isArray(n))return null;const s=[];for(const o of n.slice(-30*2)){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!ou.test(a.id)||typeof a.from!="string")continue;const r=a.from.normalize("NFC").replace(/\s+/g," ").trim();if(!r||r.length>24||typeof a.fromPid!="string"||!au.test(a.fromPid)||typeof a.text!="string"||a.text.length>Un||typeof a.at!="number"||!Number.isFinite(a.at)||t-a.at>su||a.at>t+864e5||!Number.isInteger(a.color)||a.color<0||a.color>=iu||!Number.isInteger(a.sticker)||a.sticker<0||a.sticker>=wf)continue;const l=a.text.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(l.length>Un)continue;const c={id:a.id,from:r,fromPid:a.fromPid,text:l,color:a.color,sticker:a.sticker,at:a.at};a.read===!0&&(c.read=!0),s.push(c)}const i=s.slice(-30);return i.length?{letters:i}:null}function wc(e){return e?.letters.filter(t=>!t.read&&t.text).length??0}const lu=/^[A-Za-z0-9:_\/.-]{1,80}$/,bf=/crib|bassinet|high-?chair|cat-bed|pet-bed|dog-bed|kennel|tulip|flower|toadstool|mobile/,Zr={bed:{head:{x:.24,y:.42},pillow:{x:.1,y:.27,w:.22,h:.18},mattress:{x:.36,y:.34,w:.36,h:.16},clip:"starter"},"wooden-bed":{head:{x:.22,y:.53},pillow:{x:.12,y:.36,w:.24,h:.18},mattress:{x:.38,y:.46,w:.32,h:.16},clip:"wooden"},"checker-bed":{head:{x:.16,y:.45},pillow:{x:.08,y:.26,w:.22,h:.22},mattress:{x:.38,y:.4,w:.32,h:.16},clip:"checker"},"bunk-bed":{head:{x:.11,y:.62},pillow:{x:.05,y:.52,w:.18,h:.14},mattress:{x:.22,y:.56,w:.36,h:.14},clip:"bunk"},"canopy-bed":{head:{x:.38,y:.52},pillow:{x:.28,y:.46,w:.24,h:.14},mattress:{x:.48,y:.48,w:.28,h:.16},clip:"canopy"},"cc-heart-bed":{head:{x:.22,y:.67},pillow:{x:.12,y:.58,w:.26,h:.16},mattress:{x:.36,y:.64,w:.36,h:.16},clip:"heart"},"cc-canopy-daybed":{head:{x:.37,y:.58},pillow:{x:.26,y:.5,w:.26,h:.16},mattress:{x:.48,y:.54,w:.3,h:.16},clip:"daybed"},"wc-plaid-bed":{head:{x:.24,y:.26},pillow:{x:.08,y:.14,w:.3,h:.2},mattress:{x:.36,y:.18,w:.3,h:.18},clip:"wooden"}},cu=["bed","pack:wooden-bed","pack:checker-bed","pack:bunk-bed","pack:canopy-bed","pack:cc-heart-bed","pack:cc-canopy-daybed","pack:wc-plaid-bed"];function vf(e){return e==="bed"||/bunk/.test(e)||/daybed/.test(e)?!0:/(^|[-_:])bed$/.test(e)}function du(){return cu.slice()}function gr(e){const t=String(e||"").toLowerCase();if(!t||bf.test(t)||!vf(t))return null;const n=t.replace(/^pack:/,"");return Zr[n]||Zr[t]||Zr.bed}const pu={head:{x:55.0733,y:59.7445},chest:{x:60,y:114},hip:{x:60,y:138},classic:{x:60,y:52.8}},Bd=48,Rd=138.24;function kf(e,t){const n=-90*Math.PI/180,s=Math.cos(n),i=Math.sin(n),o=e-Bd,a=t-Rd,r=Bd+s*o-i*a,l=Rd+i*o+s*a;return{x:r-60,y:l-192}}function xa(e,t){const n=pu[e],s=kf(n.x,n.y);return{x:t?-s.x:s.x,y:s.y}}const Ad=120,Nr=192,fu=.26;function gu(e,t,n,s,i=1){const o=i>0?i:1;if(n==="lie"&&s){const r=-t*o+210.24,l=-e*o+186.24;return{x:-Ad*o/2+r,y:-Nr*o+l}}if(n==="lie"){const r=kf(e,t);return{x:r.x*o,y:r.y*o}}const a=n==="sit"?fu*Nr*o:0;return{x:(e-Ad/2)*o,y:(t-Nr)*o+a}}function hu(e,t,n,s,i){const o=gr(e);if(!o||t<1||n<1)return null;const a=xa("head",!1),r=(o.head.x-.5)*t-a.x,l=(o.head.y-1)*n-a.y,c=xa(s,i);return{x:.5+((i?-r:r)+c.x)/t,y:1+(l+c.y)/n}}function Ns(e){const t=String(e||"").toLowerCase();return!t||bf.test(t)?null:vf(t)?{pose:"lie",spots:[{dx:0,dy:0}]}:/sofa|couch|loveseat/.test(t)?{pose:"sit",spots:[{dx:-.18,dy:-.33},{dx:.18,dy:-.33}]}:/armchair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/bench|window-seat/.test(t)?{pose:"sit",spots:[{dx:-.22,dy:-.3},{dx:.22,dy:-.3}]}:/ottoman/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/stool|rocker/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.38}]}:/chair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.48}]}:null}function _f(e){const t=Ns(e.kind);if(!t)return[];const n=e.scale||1,s=t.pose==="lie"?gr(e.kind):null;if(s){const i=e.w*n,o=e.h*n,a=xa("head",!1),r=(s.head.x-.5)*i-a.x,l=(s.head.y-1)*o-a.y;return[{x:e.x+(e.flip?-r:r),y:e.footY+l,pose:"lie",n:0}]}return t.spots.map((i,o)=>{const a=i.dx*e.w*n,r=i.dy*e.h*n,l=o===1?1:0;return{x:e.x+(e.flip?-a:a),y:e.footY+r,pose:t.pose,n:l}})}function lo(e){const t=(r,l)=>({x:r,y:l,seat:null,toast:null,moved:!0});if(e.mode!=="play")return t(e.releaseX,e.releaseY);const n=e.piece;if(!n)return e.via==="drag"?t(e.releaseX,e.releaseY):{x:e.releaseX,y:e.releaseY,seat:null,toast:null,moved:!1};if(e.via==="tap"&&e.alreadyOn===n.id)return t(n.x,n.footY);const s=new Set(e.occupied.filter(r=>r.item===n.id).map(r=>r.n)),i=_f(n).filter(r=>!s.has(r.n));if(!i.length)return e.via==="tap"?{x:e.releaseX,y:e.releaseY,seat:null,toast:"Someone is already there!",moved:!1}:t(e.releaseX,e.releaseY);let o=i[0],a=1/0;for(const r of i){const l=(r.x-e.releaseX)**2+(r.y-e.releaseY)**2;l<a&&(o=r,a=l)}return{x:o.x,y:o.y,seat:{item:n.id,pose:o.pose,n:o.n},toast:null,moved:!0}}const uu={sofa:260,armchair:150,bed:300,chair:100,stool:90,rocker:190,"yard-bench":140,"bar-stool":52.8,"bunk-bed":294,"canopy-bed":294,"cc-bubble-chair":142,"cc-canopy-daybed":276,"cc-dryer-chair":164,"cc-heart-bed":236,"cc-mani-chair":188,"cc-mushroom-stool":112,"cc-scallop-loveseat":248,"checker-bed":196,"cloud-sofa":212,"comfy-armchair":161.7,"cream-sofa":234.6,"egg-chair":126,"fancy-sofa":234.6,"gaming-chair":101.4,"lattice-bench":147,"puffy-stool":46.9,"rocking-chair":137.2,"salon-chair":111.8,"swivel-stool":46.2,"waiting-bench":166.6,"wash-chair":186.2,"wood-armchair":127.4,"wood-stool":46.2,"wooden-bed":235.2};function Ma(e){const t=String(e||"").toLowerCase().replace(/^pack:/,"");return uu[t]??320}const Mo=540;function bc(e,t,n,s=2400){const i=Math.max(0,t)/2+70,o=40;let a=n<e-8?-1:1,r=e+a*i;return(r<o||r>s-o)&&(a=-a,r=e+a*i),r<o&&(r=o),r>s-o&&(r=s-o),{x:r,y:Mo}}function vc(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.item!="string"||!lu.test(t.item)||t.pose!=="sit"&&t.pose!=="lie"||t.n!==0&&t.n!==1?null:{item:t.item,pose:t.pose,n:t.n}}function kl(e,t){if(!e)return null;const n=vc(e);return!n||!t?.some(s=>s&&s.id===n.item)?null:n}const _l=45e3,mu=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Dd=/^[A-Za-z0-9:_\/.-]{1,80}$/,yu=/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u,Id=["feed","burp","change","rock"];function Ts(e){const t=String(e||"").toLowerCase();return!t||/mobile/.test(t)?null:/bassinet/.test(t)?"bassinet":t==="crib"||/(^|[-_:])crib$/.test(t)?"crib":null}function wu(e){return e===2?"Cozy":"Happy"}function bu(e){return e+1}function vu(e){return mu.indexOf(e)>=0}function ku(e){const t=typeof e=="number"&&Number.isFinite(e)?Math.round(e):2;return t<=2?2:t>=4?4:3}function $f(e){if(!e||typeof e!="object")return;const t=e,n={};let s=!1;for(let i=0;i<Id.length;i++){const o=Id[i],a=t[o];typeof a=="number"&&Number.isFinite(a)&&(n[o]=a,s=!0)}return s?n:void 0}function tn(e){const t={name:e.name,mood:e.mood,spot:e.spot,x:e.x,y:e.y,room:e.room,since:e.since};(e.spot==="crib"||e.spot==="bassinet")&&e.bed&&(t.bed=e.bed),e.spot==="mat"&&e.seat&&(t.seat=e.seat),e.spot==="arms"&&e.holder&&(t.holder=e.holder);const n=$f(e.at);return n&&(t.at=n),t}function kc(e,t){return JSON.stringify(e)===JSON.stringify(t)}function _u(e,t){if(!e||typeof e!="object")return null;const n=e,s=String(n.name??"").normalize("NFC").replace(/\s+/g," ").trim();if(!yu.test(s)||(s.match(/\d/g)||[]).length>2)return null;let i=n.spot==="crib"||n.spot==="bassinet"||n.spot==="arms"||n.spot==="mat"?n.spot:"mat";const o=vu(n.room)?n.room:"nursery",a=typeof n.x=="number"&&Number.isFinite(n.x)?Math.max(0,Math.min(2400,n.x)):700,r=typeof n.y=="number"&&Number.isFinite(n.y)?Math.max(0,Math.min(600,n.y)):540,l=typeof n.since=="number"&&Number.isFinite(n.since)?n.since:0,c=ku(n.mood);let p=typeof n.bed=="string"&&Dd.test(n.bed)?n.bed:void 0,d=vc(n.seat)??void 0,g=typeof n.holder=="string"&&Dd.test(n.holder)?n.holder:void 0;if(t){const h=t[o]?.items??[];if(i==="crib"||i==="bassinet"){let m=!1;for(let b=0;b<h.length;b++){const _=h[b];_&&_.id===p&&Ts(String(_.kind||""))===i&&(m=!0)}m||(i="mat",p=void 0)}if(d){let m=!1;for(let b=0;b<h.length;b++)h[b]&&h[b].id===d.item&&(m=!0);m||(d=void 0)}}return i!=="crib"&&i!=="bassinet"&&(p=void 0),i!=="mat"&&(d=void 0),i!=="arms"&&(g=void 0),i==="arms"&&!g&&(i="mat"),tn({name:s,mood:c,spot:i,bed:p,seat:d,holder:g,x:a,y:r,room:o,at:$f(n.at),since:l})}function $u(e,t){const n=e.nursery?.items??[];for(let s=0;s<n.length;s++){const i=n[s];if(!i||!i.id||Ts(String(i.kind||""))!=="crib")continue;const o=typeof i.x=="number"&&Number.isFinite(i.x)?i.x:1170,a=typeof i.y=="number"&&Number.isFinite(i.y)?i.y:480;return tn({name:"Bean",mood:2,spot:"crib",bed:i.id,x:o,y:a,room:"nursery",since:t})}return tn({name:"Bean",mood:2,spot:"mat",x:700,y:540,room:"nursery",since:t})}function xu(e,t,n){const s=Math.min(4,e.mood+1);return tn({...e,mood:s,at:{...e.at||{},[t]:n},since:n})}function Mu(e,t){if(!e.since){const o=tn({...e,since:t});return kc(o,e)?null:o}if(e.mood<=2)return null;const n=Math.floor((t-e.since)/_l);if(n<1)return null;const s=Math.min(n,e.mood-2),i=e.mood-s;return tn({...e,mood:i,since:e.since+s*_l})}function $l(e,t,n,s,i){const o=tn(t?{...e,spot:"arms",holder:t,room:n,x:s,y:i,bed:void 0,seat:void 0}:{...e,spot:"mat",room:n,x:s,y:i,bed:void 0,seat:void 0,holder:void 0});return kc(o,e)?e:o}function Lu(e,t,n,s){let i=t.spot==="crib"||t.spot==="bassinet"?t.spot:"mat",o,a;if(i==="crib"||i==="bassinet"){let l=!1;for(let c=0;c<n.length;c++){const p=n[c];p&&p.id===t.bed&&Ts(p.kind)===i&&(l=!0)}l&&t.bed?o=t.bed:i="mat"}if(i==="mat"&&t.seat){let l=null;for(let d=0;d<n.length;d++)n[d]&&n[d].id===t.seat.item&&(l=n[d]);const c=l?Ns(l.kind):null;let p=!1;for(let d=0;d<s.length;d++)s[d].item===t.seat.item&&s[d].n===t.seat.n&&(p=!0);l&&c&&c.pose===t.seat.pose&&!p&&(a=t.seat)}const r=tn({...e,spot:i,room:t.room,x:t.x,y:t.y,bed:o,seat:a,holder:void 0});return kc(r,e)?e:r}function Eu(e,t,n,s){const i=e.spot==="mat"&&e.seat?.item===t,o=!!n&&(e.spot==="crib"||e.spot==="bassinet")&&e.bed===t;return!i&&!o?e:tn({...e,spot:"mat",x:s?s.x:e.x,y:s?s.y:Mo,bed:void 0,seat:void 0,holder:void 0})}function xf(e,t){const n=t.scale||1,s=t.w*n,i=t.h*n,o=Ts(e);let a=o==="bassinet"?0:-.02*s;const r=o==="bassinet"?-.52*i:-.46*i;return t.flip&&(a=-a),{x:t.x+a,y:t.footY+r}}function Cu(e){const t=(i,o)=>({x:i,y:o,spot:"mat",bed:null,seat:null});if(e.mode!=="play"||!e.piece)return t(e.releaseX,e.releaseY);const n=Ts(e.piece.kind);if(n){const i=xf(e.piece.kind,e.piece);return{x:i.x,y:i.y,spot:n,bed:e.piece.id,seat:null}}const s=lo({mode:"play",via:"drag",releaseX:e.releaseX,releaseY:e.releaseY,piece:e.piece,occupied:e.occupied});return s.seat?{x:s.x,y:s.y,spot:"mat",bed:null,seat:s.seat}:t(e.releaseX,e.releaseY)}function Su(e,t=2400){const s=t-40>40?t-40:40;let i=e;return i>=40||(i=40),i>s&&(i=s),{x:i,y:Mo}}function zu(e,t){return!e||e.spot!=="mat"||!e.seat||e.room!==t?null:{item:e.seat.item,n:e.seat.n}}const co=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Mf=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Pt=2400,En=600,Lf=1e3,$i=(Pt-Lf)/2,Ss=[.75,.875,1,1.25,1.5];function Bs(e){if(typeof e!="number"||!Number.isFinite(e))return 1;let t=1,n=1/0;for(const s of Ss){const i=Math.abs(e-s);i<n&&(n=i,t=s)}return t}function Ge(e){return(e?.scale||1)*Bs(e?.size)}function Ef(e,t){const n=Bs(t);if(n===1){if(e.size==null)return e;const{size:s,...i}=e;return i}return e.size===n?e:{...e,size:n}}const xi=8,Pu=/^[A-Za-z0-9:_\/.-]{1,80}$/;function _c(e){const t=e?.dogKennel;if(!t||typeof t!="object"||typeof t.item!="string"||!Pu.test(t.item))return null;const n=e.rooms;if(!n)return null;for(const s of Object.values(n))if(s?.items?.some(i=>i&&i.id===t.item&&i.kind==="kennel"))return{item:t.item};return null}function Tu(e,t){return _c({dogKennel:{item:t},rooms:e.rooms})!==null}const q=(e,t,n,s,i=1)=>({id:e+"-"+s,kind:e,x:t+$i,y:n,flip:!1,z:s,scale:i});function Fn(){return{version:3,houseId:"local",currentRoom:"living",rooms:{living:{wallpaper:"#ffd6e0",floor:"#e8b98a",pattern:1,items:[q("sofa",470,470,1),q("lamp",230,470,2),q("plant",760,480,3),q("rug",480,530,0),q("picture",470,200,4),q("cat",600,520,5),q("window",-350,230,6),q("armchair",-300,480,7),q("bookshelf",1250,470,8),q("tree",1500,480,9),q("clock",1100,170,10)]},bedroom:{wallpaper:"#d9ccff",floor:"#f2d0a4",pattern:2,items:[q("bed",450,480,1),q("window",750,230,2),q("teddy",330,500,3),q("stars",300,180,4),q("tub",1350,480,5),q("lamp",-250,470,6),q("flowers",-150,500,7)]},salon:{wallpaper:"#ffe0f0",floor:"#f6d6ff",pattern:2,items:[q("rug",470,540,0),q("mirror",470,150,1),q("vanity",470,480,2),q("perfume",400,345,3),q("polish",450,345,4),q("hairdryer",560,340,5),q("stool",470,545,6),q("lamp",200,470,7),q("flowers",780,480,8),q("picture",780,200,9),q("chair",-250,490,10),q("mirror",-250,170,11),q("plant",1300,480,12)]},kitchen:{wallpaper:"#cdf3dc",floor:"#ffe7a8",pattern:3,items:[q("fridge",200,470,1),q("table",520,500,2),q("cake",520,395,3),q("stove",800,470,4),q("chair",380,500,5),q("chair",660,500,6),q("juice",470,395,7),q("plant",-300,480,8),q("fish",1300,480,9)]},nursery:{wallpaper:"#d6f3ff",floor:"#f3ddc4",pattern:1,items:[q("cloud-rug",480,545,0),q("crib",470,480,1),q("crib-mobile",470,155,2),q("rocker",780,490,3)]},bathroom:{wallpaper:"#d4f4fb",floor:"#f7e7d4",pattern:3,items:[q("bath-mat",180,560,0),q("shower-curtain",-40,520,1),q("soaking-tub",160,500,2),q("rubber-ducky",300,545,3),q("bath-toilet",480,500,4),q("sink-vanity",700,500,5),q("bath-mirror",700,175,6),q("towel-bar",940,200,7)]},backyard:{wallpaper:"#c5ecff",floor:"#b6e3a8",pattern:0,items:[{id:"yard-bench-1",kind:"yard-bench",x:1122,y:372,flip:!1,z:1,scale:1},{id:"tulip-bed-2",kind:"tulip-bed",x:946,y:580,flip:!1,z:2,scale:1}]}},characters:[ts({id:"c1",skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6",room:"living",x:330+$i,y:540})],soundOn:!0,dogKennel:null}}function ts(e){return{skin:"#f1c27d",hair:"#5b3a29",hairStyle:0,shirt:"#ff7aa8",pants:"#5aa9e6",size:"kid",acc:0,room:"living",x:Pt/2,y:540,flip:!1,held:{left:null,right:null},...e}}const gs=(e,t,n)=>Math.max(t,Math.min(n,e)),Si=e=>e.items.reduce((t,n)=>Math.max(t,n.z),0),Bu=e=>e.items.reduce((t,n)=>Math.min(t,n.z),0);function Do(e,t,n){return{...e,characters:e.characters.map(s=>s.id===t?n(s):s)}}function Ru(e,t,n){const s=e.baby;if(!t||!s||s.spot!=="arms"||s.holder!==t.id||n===s.room)return e;const i=t.room===s.room?t.x:s.x,o=t.room===s.room?t.y:Mo,a=$l(s,null,s.room,i,o);return!a||a===s?e:{...e,baby:a}}function po(e){if(!e.seat)return e;const{seat:t,...n}=e;return n}let La=null;function Cf(){const e=La;return La=null,e}function Io(e,t,n,s){if(!e.baby)return e;const i=s?bc(s.x,Ma(s.kind)*Ge(s),e.baby.x):null,o=Eu(e.baby,t,n,i);return o===e.baby?e:{...e,baby:o}}function Ho(e,t,n){n&&(La={id:t,x:n.x,kind:n.kind,scale:Ge(n)});let s=!1;const i=e.characters.map(o=>{if(o.seat?.item!==t)return o;if(s=!0,!n)return po(o);const a=bc(n.x,Ma(n.kind)*Ge(n),o.x),{seat:r,...l}=o;return{...l,x:a.x,y:a.y}});return s?{...e,characters:i}:e}function Au(e,t,n,s){if(!s){const o=kl(e.seat,t);return o?e.seat===o?e:{...e,seat:o}:po(e)}const i=kl(n,t);return i?{...e,seat:i}:po(e)}function Xe(e,t,n){const s=e.rooms[t];if(!s)return e;const i=n(s);return i===s?e:{...e,rooms:{...e.rooms,[t]:i}}}function Du(e){const t=new Set;let n=!1;const s=e.map(i=>{if(!t.has(i.id))return t.add(i.id),i;n=!0;const o=String(i.id).replace(/-d\d+$/,"").replace(/[^A-Za-z0-9:_/.-]/g,"").slice(0,72)||"item";let a=2,r=(o+"-d"+a).slice(0,80);for(;t.has(r);)a+=1,r=(o+"-d"+a).slice(0,80);return t.add(r),{...i,id:r}});return n?s:e}function Iu(e){let t=!1;const n={...e.rooms};for(const s of co){const i=e.rooms[s];if(!i||!Array.isArray(i.items))continue;const o=Du(i.items);o!==i.items&&(n[s]={...i,items:o},t=!0)}return t?{...e,rooms:n}:e}function Sf(e){if(!e||!e.rooms)return e;const t=Fn().rooms,n=e.rooms;let s=!1;for(const o of co){const a=n[o];(!a||typeof a!="object"||!Array.isArray(a.items))&&(s=!0)}const i=s?(()=>{const o={...n};for(const a of co){const r=n[a];(!r||typeof r!="object"||!Array.isArray(r.items))&&(o[a]=t[a])}return{...e,rooms:o}})():e;return Iu(i)}function Ea(e,t){switch(La=null,t.type){case"room/switch":return e.rooms[t.room]?{...e,currentRoom:t.room}:e;case"item/add":return Xe(e,t.room,n=>n.items.length>=80||n.items.some(s=>s.id===t.item.id)?n:{...n,items:[...n.items,{...t.item,z:Si(n)+1}]});case"item/move":{const n=e.rooms[t.room]?.items.find(i=>i.id===t.id)??null,s=Xe(e,t.room,i=>({...i,items:i.items.map(o=>o.id===t.id?{...o,x:gs(t.x,0,Pt),y:gs(t.y,40,En)}:o)}));return t.stand?Io(Ho(s,t.id,n),t.id,!1,n):s}case"item/flip":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return Io(Ho(Xe(e,t.room,s=>({...s,items:s.items.map(i=>i.id===t.id?{...i,flip:!i.flip}:i)})),t.id,n),t.id,!1,n)}case"item/size":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||Bs(n.size)===Bs(t.size)?e:Xe(e,t.room,s=>({...s,items:s.items.map(i=>i.id===t.id?Ef(i,t.size):i)}))}case"item/power":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||!ff(n.kind)||!!n.on==!!t.on?e:Xe(e,t.room,s=>({...s,items:s.items.map(i=>{if(i.id!==t.id)return i;if(t.on)return{...i,on:!0};const{on:o,...a}=i;return a})}))}case"item/front":return Xe(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:Si(n)+1}:s)}));case"item/back":return Xe(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:Bu(n)-1}:s)}));case"item/delete":{const n=e.rooms[t.room]?.items.find(a=>a.id===t.id)??null,s=n?.kind==="kennel",i=Ho(Xe(e,t.room,a=>({...a,items:a.items.filter(r=>r.id!==t.id)})),t.id,n),o=s&&e.dogKennel?.item===t.id?{...i,dogKennel:null}:i;return Io(o,t.id,!0,n)}case"room/wallpaper":return Xe(e,t.room,n=>({...n,wallpaper:t.color}));case"room/floor":return Xe(e,t.room,n=>({...n,floor:t.color}));case"room/pattern":return Xe(e,t.room,n=>({...n,pattern:t.pattern,wallTile:null}));case"room/wallTile":return Xe(e,t.room,n=>({...n,wallTile:t.tile}));case"room/floorTile":return Xe(e,t.room,n=>({...n,floorTile:t.tile}));case"char/add":return e.characters.length>=xi||e.characters.some(n=>n.id===t.char.id)?e:{...e,characters:[...e.characters,t.char]};case"char/update":return Do(e,t.id,n=>{const{look2:s,...i}=t.patch,o={...n,...i};return"look2"in t.patch&&(s?o.look2=s:delete o.look2),o});case"char/move":{if(!e.rooms[t.room])return e;const n=e.characters.find(i=>i.id===t.id),s=Do(e,t.id,i=>{const o={...i,room:t.room,x:gs(t.x,0,Pt),y:gs(t.y,60,En)};return Au(o,e.rooms[t.room].items,t.seat,"seat"in t)});return Ru(s,n,t.room)}case"char/delete":{const n=e.characters.find(i=>i.id===t.id);if(!n)return e;let s={...e,characters:e.characters.filter(i=>i.id!==t.id)};if(["left","right"].forEach((i,o)=>{const a=n.held[i];a&&(s=Xe(s,n.room,r=>({...r,items:[...r.items,{...a,x:n.x+(o?40:-40),y:n.y,z:Si(r)+1}]})))}),s.baby?.spot==="arms"&&s.baby.holder===t.id){const i=$l(s.baby,null,s.baby.room,s.baby.x,s.baby.y);i&&i!==s.baby&&(s={...s,baby:i})}return s}case"char/hold":{const n=e.characters.find(r=>r.id===t.id),s=e.rooms[t.room]?.items.find(r=>r.id===t.itemId);if(!n||!s||n.held[t.hand]||n.room!==t.room)return e;const i=Ho(Xe(e,t.room,r=>({...r,items:r.items.filter(l=>l.id!==t.itemId)})),t.itemId,s),o=Do(i,t.id,r=>({...r,held:{...r.held,[t.hand]:s}})),a=s.kind==="kennel"&&e.dogKennel?.item===t.itemId?{...o,dogKennel:null}:o;return Io(a,t.itemId,!0,s)}case"char/release":{const n=e.characters.find(o=>o.id===t.id),s=n?.held[t.hand];if(!n||!s)return e;const i=Do(e,t.id,o=>({...o,held:{...o.held,[t.hand]:null}}));return Xe(i,n.room,o=>({...o,items:[...o.items,{...s,x:gs(t.x,0,Pt),y:gs(t.y,40,En),z:Si(o)+1}]}))}case"cat/set":return{...e,cat:t.cat};case"cat/move":return e.cat&&e.rooms[t.room]?{...e,cat:{...e.cat,room:t.room,x:gs(t.x,100,Pt-100)}}:e;case"dog/set":return{...e,dog:t.dog};case"dog/kennel":return t.item===null?e.dogKennel?{...e,dogKennel:null}:e:!Tu(e,t.item)||e.dogKennel?.item===t.item?e:{...e,dogKennel:{item:t.item}};case"ranch/op":{const n=t.op;if(n.op==="take"){const o=e.rooms[n.room];if(o&&o.items.some(a=>a.id===n.id))return e}const s=vl(yc(e.garden),mc(e.basket),t.op,t.now,e.lastEgg??0);if(typeof s=="string")return e;let i={...e,garden:s.plots,basket:s.basket,lastEgg:t.op.op==="egg"?t.now:e.lastEgg};if(t.op.op==="take"&&i.rooms[t.op.room]){const o=t.op;i=Xe(i,o.room,a=>a.items.length>=80?a:{...a,items:[...a.items,{id:o.id,kind:eu[o.kind],x:o.x,y:560,flip:!1,z:Si(a)+1,scale:1}]})}return i}case"settings/sound":return{...e,soundOn:t.on};case"game/reset":return Fn();case"baby/meet":return e.baby?e:{...e,baby:$u(e.rooms,t.now)};case"baby/name":return!e.baby||!t.name||t.name===e.baby.name?e:{...e,baby:tn({...e.baby,name:t.name})};case"baby/care":{if(!e.baby)return e;const n=xu(e.baby,t.care,t.now);return n===e.baby?e:{...e,baby:n}}case"baby/hold":{if(!e.baby)return e;const n=$l(e.baby,t.holder,t.room,t.x,t.y);return!n||n===e.baby?e:{...e,baby:n}}case"baby/place":{if(!e.baby||!e.rooms[t.room])return e;const n=e.characters.filter(i=>i.room===t.room&&i.seat).map(i=>({item:i.seat.item,n:i.seat.n})),s=Lu(e.baby,t,e.rooms[t.room].items,n);return s===e.baby?e:{...e,baby:s}}case"baby/ease":{if(!e.baby)return e;const n=Mu(e.baby,t.now);return n?{...e,baby:n}:e}}}const Hd=Nt("cozy-house"),Hu=Nt("cozy-house-v1");function $c(e){if(!e||typeof e!="object"||!e.rooms)return Fn();let t=e;if(t.version===1){const d=h=>(Number(h)||0)+$i,g={};for(const[h,m]of Object.entries(t.rooms))g[h]={...m,items:(m.items??[]).map(b=>({...b,x:d(b.x)}))};t={...t,version:2,rooms:g,character:{...t.character,x:d(t.character?.x)}}}if(t.version===2){const d=t.character??{};t={...t,version:3,characters:[ts({...d,id:"c1",size:"kid",acc:0,held:{left:null,right:null}})]},delete t.character}if(t.version!==3)return Fn();const n=Fn(),s=(Array.isArray(t.characters)?t.characters:[]).slice(0,xi).map((d,g)=>{const h=d?.look2,m=ts({...d,id:String(d.id??"c"+(g+1)),held:{left:d.held?.left??null,right:d.held?.right??null}});if(delete m.look2,h!=null){const b=$o(h);b&&(m.look2=b)}return m}),i=Sf({...n,...t,rooms:{...n.rooms,...t.rooms},characters:s}),o=Od(i),a=_c(o),r=a===i.dogKennel?i:{...i,dogKennel:a},l=ru(r.mailbox);let c=o===i?r:{...r,characters:o.characters};if(l)c={...c,mailbox:l};else if(c.mailbox){const{mailbox:d,...g}=c;c=g}const p=_u(c.baby,c.rooms);if(p)c={...c,baby:p};else if("baby"in c){const{baby:d,...g}=c;c=g}return Od(Ou(c))}function Od(e){let t=!1;const n=e.characters.map(s=>{const i=kl(vc(s.seat),e.rooms[s.room]?.items);return i?s.seat?.item===i.item&&s.seat.pose===i.pose&&s.seat.n===i.n?s:{...s,seat:i}:s.seat?(t=!0,po(s)):s});return!t&&n.every((s,i)=>s===e.characters[i])?e:{...e,characters:n}}function Ou(e){const t=e.currentRoom,n=Mf.includes(t),s=a=>co.includes(a);let i=!1;const o=e.characters.map(a=>{const r=a.room;return!s(r)||!n&&r===t?(i=!0,{...a,room:"living"}):a});return n&&!i?e:{...e,currentRoom:n?e.currentRoom:"living",characters:o}}function zf(){let e,t=!1;try{const i=localStorage.getItem(Hd)??localStorage.getItem(Hu);i?e=$c(JSON.parse(i)):(t=!0,e=Fn(),typeof navigator<"u"&&!navigator.webdriver&&(e=Z0(e)))}catch{e=Fn()}const n=[];let s;return{get:()=>e,subscribe(i){n.push(i)},dispatch(i){e=Ea(e,i),n.forEach(o=>o(e,i)),clearTimeout(s),s=window.setTimeout(()=>{try{localStorage.setItem(Hd,JSON.stringify(e))}catch{}},250)},born:t}}const Wu=Object.freeze(Object.defineProperty({__proto__:null,ITEM_SIZE_STEPS:Ss,MAX_CHARS:xi,ROOM_H:En,ROOM_IDS:co,ROOM_W:Pt,SCENE_ROOMS:Mf,V1_OFFSET:$i,V1_ROOM_W:Lf,applyItemSize:Ef,createStore:zf,drawnScale:Ge,ensureRooms:Sf,initialState:Fn,itemSizeOf:Bs,migrate:$c,newCharacter:ts,reduce:Ea,standChar:po,takeClearedFurniture:Cf,validKennel:_c},Symbol.toStringTag,{value:"Module"}));function xl(e,t){for(let n=e.length-1;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}const Pf=4,Wd=7,Vu=30;function Uu(){const e=[];let t=0;for(let n=0;n<Pf;n++){e.push({id:t++,c:n,v:0});for(let s=1;s<=9;s++)for(let i=0;i<2;i++)e.push({id:t++,c:n,v:s});for(const s of["skip","rev","d2"])for(let i=0;i<2;i++)e.push({id:t++,c:n,v:s})}for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"wild"});for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"w4"});return e}const Ml=e=>e.discard[e.discard.length-1],zi=(e,t)=>t.c===4||t.c===e.color||t.v===Ml(e).v&&Ml(e).c!==4,An=(e,t,n=1)=>{const s=e.hands.length;return((t+e.dir*n)%s+s)%s};function Ll(e,t,n,s){const i=[];for(let o=0;o<n&&e.hands[t].length<Vu;o++){if(!e.deck.length){const r=e.discard.pop();if(e.deck=xl(e.discard.map(l=>l),s),e.discard=[r],!e.deck.length)break}const a=e.deck.pop();e.hands[t].push(a),i.push(a)}return e.hands[t].length>1&&(e.slay[t]=!1),i}function Qu(e,t){if(e.owe!==null&&e.hands[e.owe]?.length===1&&!e.slay[e.owe]){const n=e.owe;return e.owe=null,{victim:n,vdrew:Ll(e,n,2,t).length}}return e.owe=null,{}}const Vd=e=>{const t=[0,0,0,0];return e.forEach(n=>{n.c<4&&t[n.c]++}),t.indexOf(Math.max(...t))},qu={id:"slay",name:"Slay",minPlayers:2,maxPlayers:6,setup(e,t){const n=xl(Uu(),t),s=Array.from({length:e},()=>n.splice(-Wd,Wd));let i=n.length-1;for(;typeof n[i].v!="number";)i--;const o=n.splice(i,1)[0];return{deck:n,discard:[o],hands:s,color:o.c,turn:Math.floor(t()*e),dir:1,drawn:null,slay:s.map(()=>!1),owe:null,winner:null,ev:{n:0,p:-1,k:"start",card:o}}},cleanMove(e){return!e||typeof e!="object"?null:e.k==="play"&&Number.isInteger(e.id)&&e.id>=0&&e.id<108?{k:"play",id:e.id,...Number.isInteger(e.color)&&e.color>=0&&e.color<Pf?{color:e.color}:{}}:e.k==="draw"||e.k==="pass"||e.k==="slay"?{k:e.k}:null},legal(e,t,n){if(e.winner!==null)return!1;if(n.k==="slay")return e.hands[t].length<=2&&!e.slay[t];if(t!==e.turn)return!1;if(n.k==="draw")return e.drawn===null;if(n.k==="pass")return e.drawn!==null;const s=e.hands[t].find(i=>i.id===n.id);return!s||e.drawn!==null&&s.id!==e.drawn||s.c===4&&n.color===void 0?!1:zi(e,s)},apply(e,t,n,s){const i=e.ev.n+1;if(n.k==="slay")return e.slay[t]=!0,e.owe===t&&(e.owe=null),e.ev={n:i,p:t,k:"slay"},e;const o=Qu(e,s);if(n.k==="draw"){const p=Ll(e,t,1,s),d=p[0];if(d&&zi(e,d))e.drawn=d.id,e.ev={n:i,p:t,k:"draw",drew:1,...o};else{if(e.drawn=null,e.ev={n:i,p:t,k:"draw",drew:p.length,...o},e.stuck=p.length?0:(e.stuck??0)+1,(e.stuck??0)>=e.hands.length){const g=Math.min(...e.hands.map(h=>h.length));return e.winner=e.hands.findIndex(h=>h.length===g),e.turn=-1,e}e.turn=An(e,t)}return e}if(n.k==="pass")return e.drawn=null,e.turn=An(e,t),e.ev={n:i,p:t,k:"pass",...o},e;e.stuck=0;const a=e.hands[t],r=a.splice(a.findIndex(p=>p.id===n.id),1)[0];e.discard.push(r),e.drawn=null,e.color=r.c===4?n.color:r.c;const l={n:i,p:t,k:"play",card:r,color:e.color,...o};if(!a.length)return e.winner=t,e.turn=-1,e.ev=l,e;a.length===1&&!e.slay[t]&&(e.owe=t);const c=e.hands.length===2;if(r.v==="rev")e.dir=e.dir===1?-1:1,e.turn=c?t:An(e,t);else if(r.v==="skip")l.skipped=An(e,t),e.turn=An(e,t,2);else if(r.v==="d2"||r.v==="w4"){const p=An(e,t);l.skipped=p;const d=r.v==="d2"?2:4;l.drew=Ll(e,p,d,s).length,e.turn=An(e,t,2)}else e.turn=An(e,t);return e.ev=l,e},turn:e=>e.winner!==null?-1:e.turn,winner:e=>e.winner,view(e,t){return{top:Ml(e),color:e.color,turn:e.winner!==null?-1:e.turn,dir:e.dir,deck:e.deck.length,counts:e.hands.map(n=>n.length),slay:e.slay,winner:e.winner,ev:e.ev,...t!==null&&e.hands[t]?{hand:e.hands[t],drawn:t===e.turn?e.drawn:null}:{}}},autoMove(e,t){if(t!==e.turn)return null;if(e.drawn!==null){const s=e.hands[t].find(i=>i.id===e.drawn);return s&&zi(e,s)?{k:"play",id:s.id,...s.c===4?{color:Vd(e.hands[t])}:{}}:{k:"pass"}}const n=e.hands[t].find(s=>zi(e,s)&&s.c!==4)??e.hands[t].find(s=>zi(e,s));return n?{k:"play",id:n.id,...n.c===4?{color:Vd(e.hands[t])}:{}}:{k:"draw"}},removePlayer(e,t,n){if(e.hands.length<=2)return null;const s=e.turn===t;return e.deck.unshift(...e.hands[t]),xl(e.deck,n),e.hands.splice(t,1),e.slay.splice(t,1),e.owe===t?e.owe=null:e.owe!==null&&e.owe>t&&e.owe--,e.turn>t&&e.turn--,s&&(e.drawn=null,e.dir===-1?e.turn=((t-1)%e.hands.length+e.hands.length)%e.hands.length:e.turn=t%e.hands.length),e.ev={n:e.ev.n+1,p:t,k:"left"},e}},El=7,aa=6,Zu=(e,t,n)=>{const s=e[t][n];for(const[i,o]of[[1,0],[0,1],[1,1],[1,-1]]){const a=[[t,n]];for(const r of[1,-1])for(let l=1;l<4;l++){const c=t+i*l*r,p=n+o*l*r;if(c<0||c>=El||p<0||p>=aa||e[c][p]!==s)break;a.push([c,p])}if(a.length>=4)return a}return null},Nu={id:"four",name:"Four in a Row",minPlayers:2,maxPlayers:2,setup:(e,t)=>({b:Array.from({length:El},()=>[]),turn:t()<.5?0:1,winner:null,draw:!1,line:null,last:null,n:0}),cleanMove:e=>e&&Number.isInteger(e.col)&&e.col>=0&&e.col<El?{col:e.col}:null,legal:(e,t,n)=>e.winner===null&&!e.draw&&t===e.turn&&e.b[n.col].length<aa,apply(e,t,n){e.b[n.col].push(t);const s=e.b[n.col].length-1;e.last={col:n.col,row:s,p:t},e.n++;const i=Zu(e.b,n.col,s);return i?(e.winner=t,e.line=i,e.turn=-1):e.b.every(o=>o.length>=aa)?(e.draw=!0,e.turn=-1):e.turn=1-t,e},turn:e=>e.turn,winner:e=>e.winner,view:e=>e,autoMove:(e,t)=>{if(t!==e.turn)return null;const s=[3,2,4,1,5,0,6].find(i=>e.b[i].length<aa);return s===void 0?null:{col:s}},removePlayer:()=>null},Tf={slay:qu,four:Nu},hr=2600,fo=[{game:"slay",seats:6,x:720},{game:"four",seats:2,x:1500},{game:"slay",seats:4,x:2150}],Fu=2e4,ju="winter",Gu="Winter Cheer",Yu={[ju]:Gu},Ku=["pack:wc-holiday-tree","pack:wc-gingerbread","pack:wc-gingerbread-village","pack:wc-bauble-garland","pack:wc-stocking-row","pack:wc-cane-lamp","pack:wc-star-topper","pack:wc-poinsettia","pack:wc-holly","pack:wc-nutcracker","pack:wc-reindeer","pack:wc-sleigh-planter"],Xu=["Berry Wreath","Birch Log Basket","Cabin Picture","Cabin Planks","Candy Cane Lamp","Candy Stripe","Cinnamon Roll Tray","Cocoa Cart","Cocoa Pot","Cookie Oven","Cookie Plate","Cozy Red Plaid","Cozy Sock Hamper","Decorated Holiday Tree","Frosted Pine","Frosty Bookcase","Frosty Dots","Fur-Trim Bench","Gingerbread Cottage","Gingerbread Village","Holly Sprig","Ice Skates","Ice-Blue Wardrobe","Knit Pom Rug","Knit Stocking Row","Knit-Blanket Armchair","LED Candle Trio","Lantern","Log Bench","Marshmallow Jar","Mint Pine Sprigs","Mitten Ottoman","Mittens on a Line","Mug Tree Shelf","Mug of Cocoa","Nutcracker Friend","Penguin Plush","Penguin Plush Chair","Peppermint Counter","Peppermint Swirl Rug","Peppermint Tiles","Pinecone Garland","Pinecone Side Table","Plaid Cabin Sofa","Poinsettia Pot","Polar Bear Plush","Red Plaid Quilt Bed","Reindeer Plush","Ribbon Bauble Garland","Sled Coffee Table","Sleigh Planter","Snow Globe","Snow Knit Carpet","Snow-Globe Lamp","Snowflake Mobile","Snowflake Nightstand","Snowflake Sky","Snowman Buddy","Snowshoes","Snowy Window Art","Snowy Window Seat","Star Tree Topper","Stone Hearth Fireplace","Twinkle Light String","Twinkle-Light Floor Lamp","Winter Cheer","Woodstove","Wrapped Present Stack"],Ju=["A-Frame Swing","Acorn Friend","Alarm Clock","Apple","Apple Tree","Arc Floor Lamp","Arc Lamp","Arched Mirror","Arched Shelf","Armchair","Autumn Wreath","Baby Blocks","Baby Bottle","Bakery Shelf","Ball","Balloons","Bananas","Bar Stool","Bassinet","Bath Mat","Bath Mirror","Bath Stool","Bathtub","Beach Ball","Bean Bag","Bed","Berry Basket","Big Leaf Plant","Big Monitor","Big Wardrobe","Birdbath","Birdhouse","Birdie","Blanket Basket","Blocks","Boba Buddy","Book Stack","Books","Bookshelf","Box Stack","Bread","Brush & Comb","Bubble Aquarium","Bubble Bath","Bubble Chair","Bubble-Gum Rug","Bubbly Fountain","Bubbly Plant","Bud Vase","Bulletin Board","Bunk Bed","Bunny","Bunny Plush","Bunny Slippers","Butterfly Bush","Cactus","Cactus Buddy","Cada's Mouse","Cake","Candle Jar","Canopy Bed","Canopy Daybed","Cat Bed","Cat Tower","Caterpillar Plush","Chair","Changing Table","Checker Rug","Checkered Bed","Chick","Chloe's Star Lamp","Clock","Clothes Rail","Clothesline","Cloud Beanbag","Cloud Lamp","Cloud Rug","Cloud Shelf","Cocoa Doll","Cocoa Mug","Coffee Table","Comfy Chair","Cookie Jar","Cooking Pot","Cottage Heart Pouf","Cottage Heart Rug","Counter","Cozy Fireplace","Cozy Lights","Cozy Mug","Cozy Nightstand","Cozy Reading Nook","Cozy Snake Plant","Cozy Teapot","Cream Jars","Cream Sofa","Crib","Crib Mobile","Cubby Shelf","Cube Shelf","Cupcake","Cupcake Stand","Curtains","Curvy Yellow Desk","Cute Keyboard","Cute Speaker","Daisy Pot","Daisy Rug","Desk","Desk Lamp","Desk Mic","Dino Plushie","Dish Cabinet","Dish Rack","Dog Kennel","Doll House","Donut","Dresser","Droplet Buddy","Egg Pan","Fairy-Light Garland","Fairy-Light Shelf","Fan","Fancy Sofa","Fiddle-Leaf Fig","Fig Tree","Fire Pit","Fireplace","Fish Bowl","Fish Tank","Floor Cushion","Flower Cart","Flower Floor Lamp","Flower Kettle","Flower Lamp","Flowers","Foot Spa","Fresh Egg","Fridge","Frog Plush","Fruit Bowl","Game Controller","Gaming Chair","Garden Bench","Garden Carrot","Garden Gnome","Glass Cabinet","Globe","Globe Pendants","Glossy Hair Dryer","Glow Mirror","Gold Floor Mirror","Guinea Pig","Hair Dryer","Hair-Dryer Chair","Hair-Wash Chair","Hammock","Hamster House","Hamster Pal","Hanging Lamp","Hanging Lantern","Hanging Plant","Hanging Vine Planter","Happy Fridge","Headphones","Heart Headboard Bed","Heart Pouf","Heart Rug","Heart Wall Clock","Heart Wall Light","Heart-Leaf Plant","Hedge Row","Herb Box","High Chair","Honey Doll","Ice Cream","Jewelry Box","Juice","Kettle","Kitchen Counter","Knit Cushion","Ladder Shelf","Lamp","Landscape Art","Lattice Bench","Laundry Hamper","Lava Lamp","Lemon Tree","Lemonade Cart","Lemonade Cup","Lighted Vanity","Lilac Curtain","Lily Pond","Little Rocking Horse","Little Slide","Little Sprout","Lotion Bottles","Macaron Jar","Macrame Swing Chair","Mani-Pedi Chair","Manicure Table","Microwave","Milk","Milk & Cookies","Mini Fridge","Mini Greenhouse","Mini Tree","Mint Fridge","Mint Pebble Rug","Mirror","Mixer","Moon and Stars","Moon Night-Light","Moving Box","Mushroom Stool","Music Box","Nail Dryer","Nail Polish","Nail Polish Rack","Night Light","Nightstand","Nursery Cloud Rug","Nursery Dresser","Nursery Lamp","Pancakes","Pantry","Paper Lantern","Pastel Range","Pastel Wardrobe","Patio Lights","Patio Umbrella","Pendant Lamp","Perfume","Perfume Bottle","Perfume Tray","Pet Bowl","Petal Coffee Table","Phone on a Stand","Piano","Picket Gate","Picnic Basket","Picnic Blanket","Picnic Table","Picture","Piggy Bank","Pillow","Pin Board","Pink Vanity","Pinwheel","Pizza","Plant","Plant Stand","Plant Wall","Play Mat","Play Tent","Polish Bottle","Popcorn","Pothos Plant","Pouf","Puffy Cloud Sofa","Puffy Stool","Puppy","Quinn's Cookie Pup","Radio","Rain Barrel","Rainbow Art","Rainbow Rug","Ranch Flowers","Rattle","Reagan's Frame","Reception Desk","Record Player","Ribbon Mirror","Ribbon Tray","Rice Cooker","Ring Light","Robot","Rocker","Rocking Chair","Rocking Horse","Rose Doll","Round Breakfast Table","Round Side Table","Round Woven Rug","Rubber Ducky","Rug","Runner Rug","Salon Chair","Sandbox","Scallop Curtains","Scalloped Loveseat","Seesaw","Shelf","Shower Curtain","Sink","Sink Vanity","Sloane's Rainbow Snail","Snake Plant","Soaking Tub","Soap Dish","Sofa","Sparkle Wall Light","Spice Rack","Splash Pool","Spray Bottle","Sprinkler","Stacking Rings","Star Dresser","Star Lamp","Star Mobile","Stars","Stepping Stones","Sticker Board","Story Pillow","Stove","String Lights","Striped Runner","Succulents","Sun Lounger","Sunny Art","Sunny Bean Bag","Sunny Cloud Rug","Sunny Shelf","Swing Chair","Swivel Stool","Table","Tassel Rug","Teapot","Teapot Set","Teddy","Tiered Tray","Toadstool Light","Toaster","Toilet","Towel Bar","Towel Cart","Towel Stack","Toy Bin","Toy Car","Toy cat","Toy Chest","Toy Train","Trailing Plant Shelf","Tulip Bed","Tulip Vase","Turtle","TV","TV Stand","Unicorn Plushie","Utensil Rail","Vanity","Vanity Stool","Vegetable Patch","Vlog Camera","Wagon","Waiting Bench","Wall Shelf","Wardrobe","Water-Drop Lamp","Watermelon","Wavy Floor Lamp","Window","Window Seat","Wood Armchair","Wood Bookshelf","Wood Coffee Table","Wood Desk","Wood Dresser","Wood Stool","Wood Wall Clock","Wooden Bed","Yard Sign",...Xu],em=4,xc=16,Ca=e=>String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,""),tm=e=>e.length>=em&&e.length<=xc&&/^[A-Z0-9]+$/.test(e),nm=12,sm=["Cada","Chloe","Quinn","Reagan","Sloane"],im=460,om=320,Ud=["Sunny Bunny","Bubbly Panda","Sparkle Kitty","Happy Hippo","Cozy Koala","Jolly Jelly","Zippy Fox","Dreamy Deer","Giggly Goose","Peachy Pup","Minty Mouse","Rainbow Duck","Cuddly Cub","Starry Owl","Bouncy Frog","Lucky Lamb","Snuggly Seal","Twinkle Tiger","Berry Bear","Cloudy Llama","Pebble Penguin","Honey Hedgehog","Marshmallow Moose","Cupcake Cat"],Xi=["Hi!","Come over!","I love your house!","Let's play!","Follow me!","Look at this!","Want a snack?","Nice!","Yes!","No thanks","Hehe","Be right back","Bye!","Let's decorate!","Wanna race?","So cute!"],Bf=["👋","😀","😂","😍","😮","😢","🎉","⭐","❤️","👍","🍕","🐱","🌈","🎶","💤","✨"],Mc=60,am={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i","+":"t"},Fr=["fuck","fuk","fck","shit","sht","bitch","btch","bastard","asshole","ass","dick","cock","pussy","cunt","whore","slut","damn","crap","piss","fag","faggot","retard","nigger","nigga","porn","sex","sexy","nude","naked","boob","boobs","penis","vagina","kill","suicide","stupid","idiot","dumb","hate","loser","shutup","wtf","stfu","gtfo","bs"],rm=["zero","oh","one","two","three","four","five","six","seven","eight","nine","ten"],lm=[/\bmy\s+(real\s+)?(full\s+|last\s+|sur)?name\s+is\b/i,/\bi\s*live\s+(at|on|in)\b/i,/\bmy\s+(address|addy|phone|number|cell|email|e-mail|school|password|pass|insta|snap|tiktok|discord)\b/i,/\b(password|passcode|zip\s*code|postcode)\b/i,/\b(snapchat|instagram|tiktok|discord|whatsapp|kik|telegram|facebook|messenger|youtube\.com)\b/i],cm=/(https?:|www\.|\b[a-z0-9-]+\s*(\.|\(dot\)|\sdot\s)\s*(com|net|org|io|co|me|ly|gg|tv|app|xyz|us|uk|ca|de|link|site|info)\b)/i,dm=/\S+\s*(@|\(at\)|\sat\s)\s*\S+\s*(\.|\sdot\s)\s*\w{2,}/i,pm=/@\w/,fm=/\b\d{1,6}\s+([a-z]+\s+){0,3}(street|st|road|rd|avenue|ave|lane|ln|drive|dr|court|ct|blvd|boulevard|way|place|pl|circle|cir|terrace|parkway|pkwy|highway|hwy|apt|apartment|unit)\b/i;function gm(e,t=Mc){if(typeof e!="string")return{ok:!1,reason:"empty"};const n=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(!n)return{ok:!1,reason:"empty"};if(n.length>t)return{ok:!1,reason:"long"};if(cm.test(n))return{ok:!1,reason:"link"};if(dm.test(n)||pm.test(n))return{ok:!1,reason:"contact"};if((n.match(/\d/g)??[]).length>=5||/\d[\d\s().\-]{4,}\d/.test(n)||fm.test(n))return{ok:!1,reason:"contact"};const i=n.toLowerCase().split(/[^a-z]+/).filter(Boolean);let o=0;for(const c of i)if(o=rm.includes(c)?o+1:0,o>=4)return{ok:!1,reason:"contact"};if(lm.some(c=>c.test(n)))return{ok:!1,reason:"personal"};const a=n.toLowerCase().replace(/[0-9@$!+]/g,c=>am[c]??c),r=a.split(/[^a-z]+/).filter(Boolean),l=a.replace(/[^a-z]/g,"").replace(/(.)\1{2,}/g,"$1$1");return r.some(c=>Fr.includes(c)||Fr.includes(c.replace(/(.)\1+/g,"$1")))||Fr.filter(c=>c.length>=5).some(c=>l.includes(c))?{ok:!1,reason:"words"}:{ok:!0,text:n}}const hm={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t",8:"b","@":"a",$:"s","!":"i","+":"t",v:"u","|":"k","<":"k","#":"h"};function um(e){return/^f+u+c+k+$/.test(e)||/^f+u+k+$/.test(e)||/^f+c+k+$/.test(e)||/^s+h+i+t+$/.test(e)||/^s+h+t+$/.test(e)||/^b+i+t+c+h+$/.test(e)||/^b+t+c+h+$/.test(e)||/^a+s+h+o+l+e+$/.test(e)||/^d+u+m+b+a+s+$/.test(e)||/^n+i+g{2,}e+r+$/.test(e)||/^n+i+g{2,}a+$/.test(e)||/^f+a+g+$/.test(e)||/^f+a+g+o+t+$/.test(e)||/^r+e+t+a+r+d+$/.test(e)||/^k+y+s+$/.test(e)}function mm(e){return/^c+u+n+t+$/.test(e)||/^a+h+o+l+e+$/.test(e)||/^k+i+k+e+$/.test(e)||/^c+h+i+n+k+$/.test(e)||/^s+p+i+c+$/.test(e)||/^c+o{2,}n+$/.test(e)||/^w+e+t+b+a+c+k+$/.test(e)||/^t+r+a+n+y+$/.test(e)||/^t+r+a+n+i+$/.test(e)||/^d+y+k+e+$/.test(e)||/^b+e+a+n+e+r+$/.test(e)||/^g+o{2,}k+$/.test(e)||/^r+a+g+h+e+a+d+$/.test(e)||/^t+o+w+e+l+h+e+a+d+$/.test(e)||/^h+e+i+l+h+i+t+l+e+r+$/.test(e)}const ym=new Set(["spicy","spices","spicing","spicey","spicier","spiciest","cocky","chinking","spicer","gooky","slutty","twatt"]);function wm(e,t){if(!/^[a-z]+$/.test(e)||t&&ym.has(e))return!1;const n=[e],s=["ing","in","ers","er","ed","es","y","s"];for(let i=0;i<s.length;i++){const o=s[i];e.endsWith(o)&&e.length>o.length+2&&n.push(e.slice(0,-o.length))}for(let i=0;i<n.length;i++)if(um(n[i])||t&&mm(n[i]))return!0;return!1}function bm(e){if(!e.includes("*"))return[e];const t=e.split("*").length-1,n=e.replace(/\*/g,""),s=n?[n]:[];if(t<1||t>3)return s;const i=e.split(""),o=[];for(let r=0;r<i.length;r++)i[r]==="*"&&o.push(r);const a=r=>{if(r===o.length){s.push(i.join(""));return}for(let l=97;l<=122;l++)i[o[r]]=String.fromCharCode(l),a(r+1)};return a(0),s}const Qd=["mother","sonofa","horse","bull","dip"],qd=["face","head","you"];function ci(e,t){const n=e.replace(/ph(?=u+c+k)/g,"f").replace(/ph(?=u+k)/g,"f");if(wm(n,t)||/^w+t+f+$/.test(n)||/^s+t+f+u+$/.test(n))return!0;for(let s=0;s<Qd.length;s++){const i=Qd[s];if(n.startsWith(i)&&n.length>i.length+2&&ci(n.slice(i.length),t))return!0}for(let s=0;s<qd.length;s++){const i=vm(n,qd[s]);if(i&&ci(i,t))return!0}return!!(n.length>4&&n.endsWith("s")&&!n.endsWith("ss")&&ci(n.slice(0,-1),t))}function vm(e,t){let n=e.length;for(let s=t.length-1;s>=0;s--){const i=t[s];if(n===0||e[n-1]!==i)return null;for(;n>0&&e[n-1]===i;)n--}return n<=2?null:e.slice(0,n)}function Sa(e){let t="";for(let n=0;n<e.length;n++)t+=hm[e[n]]??e[n];return t}const km={ѕ:"s",һ:"h",с:"c",а:"a",е:"e",о:"o",р:"p",і:"i",х:"x",у:"y",к:"k"};function _m(e){const n=e.replace(/[\u00ad\u0336\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").normalize("NFKC").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase();let s="";for(let i=0;i<n.length;i++)s+=km[n[i]]??n[i];return s}const $m=new Set(["it","its","it's","is","as","a","i","uh","oh","so","he","she","hi","um","umm","hmm","hm","ah","eh","er","ow","ha","hey","yo","ok","yeah","yes","no","nah","wow","ho","ooh","ahh","uhh","ohh"]);function go(e){return e>="a"&&e<="z"||e>="0"&&e<="9"||"@$!+*v|#<".includes(e)}function Zd(e,t){let n=t;for(;n<e.length&&e[n]==="!";)n++;if(n>=e.length||!go(e[n])||e[n]==="!")return null;const s=e[n];let i=n+1;for(;i<e.length&&e[i]==="!";)i++;return i<e.length&&go(e[i])?null:{ch:s,end:i}}function xm(e,t){const n=e.length,s=" .-_~";let i=0;for(;i<n;){if(i>0&&go(e[i-1])){i++;continue}const o=Zd(e,i);if(!o){i++;continue}const a=[o.ch];let r=o.end;for(;r<n&&s.includes(e[r]);){const l=Zd(e,r+1);if(!l)break;a.push(l.ch),r=l.end}if(a.length>=2){const l=Sa(a.join("")).replace(/\*/g,"");if(ci(l,t))return!0}i=Math.max(i+1,r)}return!1}function Rs(e){return e.replace(/^!+/,"").replace(/!+$/,"")}function za(e){return Sa(Rs(e)).replace(/\*/g,"")}function Rf(e){return/[0-9@$!+*|#<]/.test(Rs(e))}function Mm(e){return Rs(e).length===1}function Lm(e){const t=Rs(e);return t.length<2||Rf(e)?!1:/^sh+$/.test(t)||$m.has(t)}function Em(e){let t="space";for(let n=0;n<e.length;n++){const s=e[n];if(!(s===" "||s==="	"||s===`
`||s==="\r")){if(s==="-"){t="hyphen";continue}return"punct"}}return t}function Cm(e){const t=[];let n=0,s="";for(;n<e.length;){if(!go(e[n])){s+=e[n],n++;continue}let i=n+1;for(;i<e.length&&go(e[i]);)i++;t.push({text:e.slice(n,i),gap:t.length===0?"start":Em(s)}),s="",n=i}return t}function Sm(e){const t=[Sa(e)];if(e.charAt(0)==="!"||e.charAt(e.length-1)==="!"){const n=e.replace(/^!+/,"").replace(/!+$/,"");n&&n!==e&&t.push(Sa(n))}return t}function zm(e){for(let t=0;t<e.length;t++){if(!/^k+i+l+$/.test(e[t]))continue;const n=e[t+1]||"",s=e[t+2]||"";if(/^y+o+u+r+s+e+l+f+$/.test(n)||/^u+r+s+e+l+f+$/.test(n)||/^u+r+$/.test(n)&&/^s+e+l+f+$/.test(s))return!0}return!1}function Pm(e,t,n){if(Rs(e[n].text)!=="coon")return!1;const s=n>0?t[n-1]:"",i=t[n+1]||"";return s==="maine"||i==="cat"}function Tm(e,t,n){return n===t+1&&e[n].gap==="space"&&/^a+$/.test(za(e[t].text))&&/^h+o+l+e+$/.test(za(e[n].text))}function Bm(e,t,n){return Rs(e[n].text)!=="dyke"?!1:n>0&&Rs(e[n-1].text)==="van"}function Rm(e){for(let t=0;t<e.length-1;t++)if(/^h+e+i+l+$/.test(e[t])&&/^h+i+t+l+e+r+$/.test(e[t+1]))return!0;return!1}function Am(e,t=!0){const n=_m(e);if(xm(n,t))return!0;const s=Cm(n),i=s.map(a=>Sm(a.text)),o=s.map(a=>za(a.text));if(zm(o)||t&&Rm(o))return!0;for(let a=0;a<i.length;a++)if(!(t&&(Pm(s,o,a)||Bm(s,o,a))))for(let r=0;r<i[a].length;r++){const l=bm(i[a][r]);for(let c=0;c<l.length;c++)if(ci(l[c].replace(/\*/g,""),t))return!0}for(let a=0;a<s.length;a++){let r="",l=0,c=!1,p=!1;for(let d=a;d<s.length&&d<a+8;d++){if(d>a){const g=s[d].gap,h=s[d-1].text;if(g==="punct"||g==="start"||h.endsWith("!")||s[d].text.startsWith("!")||g!=="space"&&g!=="hyphen")break}if(r+=za(s[d].text),Mm(s[d].text)&&l++,Lm(s[d].text)&&(c=!0),Rf(s[d].text)&&(p=!0),d!==a&&!(c&&l<2&&!p)&&ci(r,t)){if(t&&Tm(s,a,d))break;return!0}}}return!1}function Af(e,t,n,s=!1){if(typeof e!="string")return{ok:!1,reason:"empty"};const i=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return i?i.length>t?{ok:!1,reason:"long"}:Am(i,!s)?{ok:!1,reason:n}:{ok:!0,text:i}:{ok:!1,reason:"empty"}}function Dm(e,t=Mc){return Af(e,t,"words")}const ur={long:"That is a bit long!",link:"No links, please!",contact:"Keep numbers and contact info secret!",personal:"Keep personal info secret!",words:"Let's use kind words!",mail:"Oops, try different words!",empty:""},Df={};for(const e of["АA","аa","ВB","вb","ЕE","еe","КK","кk","МM","мm","НH","нh","ОO","оo","РP","рp","СC","сc","ТT","тt","УY","уy","ХX","хx","ІI","іi","ЈJ","јj","ЅS","ѕs","ЁE","ёe","ЇI","їi","ΑA","ΕE","ΖZ","ΗH","ΙI","ΚK","ΜM","ΝN","ΟO","ΡP","ΤT","ΥY","ΧX","αa","εe","ζz","ιi","κk","νv","οo","ρp","τt","υu","χx"])Df[e[0]]=e[1];function Im(e){let t="";for(const n of e)t+=Df[n]??n;return t}function Hm(e){return Im(String(e).normalize("NFKC")).replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff\p{M}]/gu,"").replace(/[\p{Extended_Pictographic}\p{S}\p{P}]+/gu,"").replace(/\s+/g," ").trim()}function Om(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(()=>{const e=[...new Set(Ju.map(t=>Hm(t)).filter(t=>t.length>=2))].sort((t,n)=>n.length-t.length);return new RegExp(`(^|[^A-Za-z])(?:${e.map(Om).join("|")})(?![A-Za-z])`,"gi")})();const Nd=(e,t,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(t,Math.min(n,e)):null,Wm=(e,t,n=80)=>typeof e=="string"&&e.length<=n&&t.test(e)?e:null,Vm=/^#[0-9a-fA-F]{3,8}$/,Um=["little","kid","adult"];function Qm(e){if(!e||typeof e!="object")return null;const t={};for(const n of["skin","hair","shirt","pants"])if(n in e){const s=Wm(e[n],Vm,9);if(!s)return null;t[n]=s}if("hairStyle"in e){const n=Nd(e.hairStyle,0,3);if(n===null)return null;t.hairStyle=Math.round(n)}if("acc"in e){const n=Nd(e.acc,0,3);if(n===null)return null;t.acc=Math.round(n)}if("size"in e){if(!Um.includes(e.size))return null;t.size=e.size}if("flip"in e){if(typeof e.flip!="boolean")return null;t.flip=e.flip}return"look2"in e&&(t.look2=$o(e.look2)??null),Object.keys(t).length?t:null}function Lo(e){const t=ts({id:"x"}),n=Qm({skin:e?.skin,hair:e?.hair,hairStyle:e?.hairStyle,shirt:e?.shirt,pants:e?.pants,size:e?.size,acc:e?.acc})??{},s=o=>n[o]??t[o],i={skin:s("skin"),hair:s("hair"),hairStyle:s("hairStyle"),shirt:s("shirt"),pants:s("pants"),size:s("size"),acc:s("acc")};if(e&&typeof e=="object"&&"look2"in e){const o=$o(e.look2);o&&(i.look2=o)}return i}const Fd=4,qm=["Mittens","Luna","Biscuit","Pumpkin","Whiskers","Mochi","Pepper","Noodle","Ginger","Socks"],Zm=["Buddy","Coco","Max","Daisy","Peanut","Rocket","Bella","Waffles","Scout","Honey"];function If(e){const t=String(e??"").normalize("NFC").replace(/\s+/g," ").trim();return!/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u.test(t)||(t.match(/\d/g)??[]).length>2?null:gm(t).ok?t:null}function Nm(e,t=[]){return Af(e,Un,"mail")}function Hf(e){return typeof e.freeMail=="boolean"?e.freeMail:e.freeChat}const Lc=2900,Cl=[{kind:"swing",x:430,y:500},{kind:"swing",x:570,y:500},{kind:"blanket",x:1730,y:548},{kind:"blanket",x:1850,y:548},{kind:"bench",x:2025,y:512},{kind:"bench",x:2105,y:512},{kind:"bench",x:2225,y:512},{kind:"bench",x:2305,y:512}],he={top:{x:905,y:330},bottom:{x:1110,y:545},ladder:850},lt={x0:2440,x1:2840,y0:470,y1:585},Fm=(e,t)=>e.where===t.where&&(e.where!=="house"||e.houseId===t.houseId&&e.room===t.room),jm=(e,t)=>Fm(e,t)&&Math.abs(e.x-t.x)<=im&&Math.abs(e.y-t.y)<=om;function Oo(e){try{return $c(e)}catch{return e}}const Sl=Nt("cozy-hood"),ui=()=>{try{return JSON.parse(localStorage.getItem(Sl)??"null")}catch{return null}},Cn=e=>{e?localStorage.setItem(Sl,JSON.stringify(e)):localStorage.removeItem(Sl)};function mr(){const e=new URLSearchParams(location.search).get("hood");return e?e.replace(/\/$/,""):"https://cozy-hood-preview.andrewmunruh.workers.dev".replace(/\/$/,"")}async function Gm(e){const t=await fetch(e+"/api/create",{method:"POST"});if(!t.ok)throw new Error("create failed "+t.status);return t.json()}async function Ym(e,t){const n=await fetch(`${e}/api/hood/${encodeURIComponent(t)}`);if(n.status===429)return{slow:!0};if(!n.ok)throw new Error("lookup failed");return n.json()}const jd=e=>e.type==="item/move"?"im:"+e.id:e.type==="char/move"?"cm:"+e.id:e.type==="item/size"?"is:"+("id"in e?e.id:""):null;class yr{constructor(t){this.cfg=t,this.ws=null,this.pid="",this.settings={freeChat:!0},this.players=new Map,this.houses=new Map,this.presence=new Map,this.status="offline",this.speaksSit=!1,this.speaksBaby=!1,this.speaksAmb=!1,this.replaced=!1,this.ranch={plots:[],skew:0},this.tables=new Map,this.handlers=new Map,this.cid=1,this.flushT=0,this.presT=0,this.lastPres=null,this.presDirty=!1,this.closedByUs=!1,this.retry=0,this.retryT=0,this.epoch=0,this.stableT=0,this.outbox=[]}on(t,n){(this.handlers.get(t)??this.handlers.set(t,[]).get(t)).push(n)}emit(t,...n){this.handlers.get(t)?.forEach(s=>s(...n))}send(t){return this.ws?.readyState!==WebSocket.OPEN?!1:(this.ws.send(JSON.stringify(t)),!0)}reliable(t){this.send(t)||(t.t==="lock"?this.outbox=this.outbox.filter(n=>!(n.t==="lock"&&n.houseId===t.houseId)):(t.t==="look"||t.t==="dog")&&(this.outbox=this.outbox.filter(n=>n.t!==t.t)),this.outbox.push(t),this.outbox.length>8&&this.outbox.splice(0,this.outbox.length-8))}flushOutbox(){if(this.ws?.readyState!==WebSocket.OPEN||!this.outbox.length)return;const t=this.outbox;this.outbox=[];for(const n of t)this.send(n)||this.outbox.push(n)}scheduleRetry(){if(this.closedByUs||this.replaced||!this.cfg.token||this.retryT)return;const t=this.epoch,n=Math.min(15e3,400*2**Math.min(this.retry,6));this.retry++,this.retryT=window.setTimeout(()=>{this.retryT=0,!(t!==this.epoch||this.closedByUs||this.replaced||!this.cfg.token)&&this.connect()},n)}armStable(){this.stableT&&clearTimeout(this.stableT),this.stableT=window.setTimeout(()=>{this.stableT=0,this.retry=0},1e4)}clearStable(){this.stableT&&(clearTimeout(this.stableT),this.stableT=0)}connect(t){this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.closedByUs=!1,this.replaced=!1,this.status="connecting",this.emit("status",this.status);const n=this.ws;return new Promise(s=>{let i=!1;const o=r=>{i||(i=!0,s(r))},a=new WebSocket(this.cfg.url.replace(/^http/,"ws")+"/ws/"+encodeURIComponent(this.cfg.id??this.cfg.code));if(this.ws=a,n&&n!==a)try{n.close()}catch{}a.onopen=()=>{t&&!this.cfg.token?this.send({t:"join",...t,v:Fd,pet:1,mail:1,sit:1,fit:1,baby:1,amb:1}):this.cfg.token?this.send({t:"hello",token:this.cfg.token,v:Fd,pet:1,mail:1,sit:1,fit:1,baby:1,amb:1}):o("notoken")},a.onmessage=r=>{const l=JSON.parse(r.data);this.handle(l),l.t==="welcome"&&(this.armStable(),o("ok")),l.t==="error"&&o(l.code+(l.msg?":"+l.msg:"")),l.t==="removed"&&o("removed")},a.onclose=r=>{if(this.ws===a){if(this.clearStable(),this.ws=null,this.status="offline",o("closed"),r.code===4e3){this.replaced=!0,this.emit("status",this.status),this.emit("replaced");return}this.emit("status",this.status),this.scheduleRetry()}},a.onerror=()=>{}})}close(){this.closedByUs=!0,this.replaced=!1,this.epoch++,this.outbox=[],this.clearStable(),this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.presT&&(clearTimeout(this.presT),this.presT=0);try{this.ws?.close()}catch{}this.ws=null,this.status="offline",clearInterval(this.flushT)}handle(t){switch(t.t){case"joined":this.cfg.token=t.token,this.cfg.pid=t.pid,Cn(this.cfg);break;case"welcome":this.pid=t.pid,this.settings=t.settings,this.status="online",this.speaksSit=t.sit===1,this.speaksBaby=t.baby===1,this.speaksAmb=t.amb===1,this.players=new Map(t.players.map(n=>[n.pid,n]));{const n=this.houses;this.houses=new Map;for(const s of t.houses){const{state:i,...o}=s,a=n.get(s.id);this.houses.set(s.id,{meta:o,confirmed:Oo(i),pending:a?a.pending.filter(r=>!r.sent):[],view:null})}}this.presence=new Map(Object.entries(t.presence)),this.presence.delete(this.pid),t.ranch&&(this.ranch={plots:t.ranch.plots,skew:t.ranch.now-Date.now()});{const n=new Map;for(const s of t.tables??[])n.set(s.tb,this.stampTable(s));this.tables=n}clearInterval(this.flushT),this.flushT=window.setInterval(()=>this.flush(),60),this.lastPres&&(this.presDirty=!0),this.flushPres(),this.flushOutbox(),this.emit("welcome"),this.emit("status",this.status);break;case"act":{const n=this.houses.get(t.houseId);if(!n)return;n.confirmed=Ea(Oo(n.confirmed),t.action);const s=t.by===this.pid&&n.pending[0]?.cid===t.cid;s&&n.pending.shift(),n.view=null,s||this.emit("act",t.houseId,t.action);break}case"nack":{const n=this.houses.get(t.houseId);if(!n)return;n.pending=n.pending.filter(s=>s.cid!==t.cid),t.state&&(n.confirmed=Oo(t.state)),n.view=null,this.emit("reset",t.houseId,t.reason);break}case"pres":t.pid!==this.pid&&(t.p?this.presence.set(t.pid,t.p):this.presence.delete(t.pid),this.emit("pres",t.pid));break;case"players":this.players=new Map(t.players.map(n=>[n.pid,n])),this.emit("players");break;case"house":{const{state:n,...s}=t.house;this.houses.set(s.id,{meta:s,confirmed:Oo(n),pending:[],view:null}),this.emit("houses");break}case"houseMeta":{const n=this.houses.get(t.meta.id);n&&(n.meta=t.meta,this.emit("houses"),this.emit("houseMeta",t.meta.id));break}case"houseGone":this.houses.delete(t.houseId),this.emit("houses"),this.emit("houseGone",t.houseId);break;case"settings":this.settings=t.settings,this.emit("settings");break;case"bubble":this.emit("bubble",t.pid,t.b);break;case"fx":this.emit("fx",t.pid,t.fx);break;case"ranch":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch");break;case"ranchFail":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch"),this.emit("ranchFail",t.reason);break;case"noride":this.emit("noride",t.ride);break;case"table":{const n=this.stampTable(t.table);this.tables.set(n.tb,n),this.emit("table",n);break}case"tblFail":this.emit("tblFail",t.tb,t.reason);break;case"sayFail":this.emit("sayFail",t.reason);break;case"mailbox":{const n=this.houses.get(t.houseId);if(!n)return;if(t.mailbox?.letters?.length)n.confirmed={...n.confirmed,mailbox:t.mailbox};else{const{mailbox:s,...i}=n.confirmed;n.confirmed=i}n.view=null,this.emit("mailbox",t.houseId);break}case"mailFail":this.emit("mailFail",t.reason);break;case"parentInfo":this.emit("parentInfo",t);break;case"error":this.emit("error",t.code),t.code==="badtoken"&&(this.cfg.token=void 0,this.cfg.pid=void 0,Cn(this.cfg));break;case"removed":this.closedByUs=!0,this.emit("removed");break}}stampTable(t){const n=this.tables.get(t.tb),s=n&&n.away===t.away&&n.receivedAt?n.receivedAt:Date.now();return{...t,receivedAt:s}}view(t){const n=this.houses.get(t);return n?n.view??=n.pending.reduce((s,i)=>Ea(s,i.action),n.confirmed):null}myHouseId(){return this.players.get(this.pid)?.houseId??""}canEdit(t){const n=this.houses.get(t);return!!n&&(!n.meta.locked||n.meta.ownerId===this.pid)}dispatch(t,n){const s=this.houses.get(t);if(!s)return;const i=jd(n),o=s.pending[s.pending.length-1];i&&o&&!o.sent&&jd(o.action)===i?o.action=n:s.pending.push({cid:this.cid++,action:n,sent:!1}),s.view=null}flush(){for(const[t,n]of this.houses)for(const s of n.pending)!s.sent&&this.send({t:"act",houseId:t,cid:s.cid,action:s.action})&&(s.sent=!0);this.flushPres()}setPresence(t){this.lastPres=t,this.presDirty=!0,this.presT||this.flushPres()}flushPres(){if(!(!this.presDirty||!this.lastPres)){if(!this.send({t:"pres",p:this.lastPres})){!this.closedByUs&&!this.presT&&(this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90));return}this.presDirty=!1,this.presT&&clearTimeout(this.presT),this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90)}}myPresence(){return this.lastPres}say(t){this.reliable({t:"say",b:t})}lock(t,n){this.reliable({t:"lock",houseId:t,locked:n})}setLook(t){this.reliable({t:"look",look:t});const n=this.players.get(this.pid);n&&(n.look=t)}setDog(t){this.reliable({t:"dog",dog:t});const n=this.players.get(this.pid);n&&(n.dog=t)}fx(t){this.reliable({t:"fx",fx:t})}ranchOp(t){this.reliable({t:"ranch",o:t})}tbl(t){this.reliable({t:"tbl",...t})}sendMail(t,n,s,i){this.reliable({t:"mail",op:"send",houseId:t,text:n,color:s,sticker:i})}readMail(t,n){this.reliable({t:"mail",op:"read",houseId:t,id:n})}dropMail(t,n){this.reliable({t:"mail",op:"drop",houseId:t,id:n})}now(){return Date.now()+this.ranch.skew}parent(t){this.cfg.parentKey&&this.reliable({t:"parent",key:this.cfg.parentKey,...t})}}function Km(e,t,n,s="living"){let i=s;const o=[],a=()=>({...e.view(t),currentRoom:i,soundOn:n.get()}),r=l=>{if(e.houses.has(t)){const c=a();o.forEach(p=>p(c,l))}};return e.on("act",(l,c)=>{l===t&&r(c)}),e.on("reset",l=>{l===t&&r({type:"game/reset"})}),{houseId:t,get:a,subscribe(l){o.push(l)},dispatch(l){if(l.type==="room/switch")i=l.room;else if(l.type==="settings/sound")n.set(l.on);else{if(l.type==="game/reset")return;if(!e.canEdit(t)||l.type.startsWith("baby/")&&!e.speaksBaby||l.type==="item/power"&&!e.speaksAmb)return;e.dispatch(t,l)}r(l)}}}const et="#5a3d5c",oe=`stroke="${et}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,zl=[{name:"Tabby",body:"#ffb26b",stripe:"#e8893a",belly:"#ffe3c4"},{name:"Smokey",body:"#b9b6c9",stripe:"#8f8ba3",belly:"#ecebf3"},{name:"Tuxedo",body:"#4f4660",stripe:"",belly:"#ffffff"},{name:"Calico",body:"#fff6ec",stripe:"",belly:"#fff6ec"}],Pl=[{name:"Pup",body:"#f2d0a4",ear:"#b07d54",snout:"#fbe7cc"},{name:"Poodle",body:"#fff0f6",ear:"#ffc8dd",snout:"#fff7fb"},{name:"Dachshund",body:"#c07a45",ear:"#7d4a26",snout:"#d99a68"},{name:"Golden",body:"#f4b860",ear:"#e09a3e",snout:"#fbd9a0"},{name:"Spotty",body:"#ffffff",ear:"#4a3f52",snout:"#ffffff"}],Xm=(e,t,n,s=!1)=>s?`<path d="M${e-3} ${n} q3 3 6 0 M${t-3} ${n} q3 3 6 0" fill="none" ${oe} stroke-width="2.5"/>`:`<circle cx="${e}" cy="${n}" r="2.8" fill="${et}"/><circle cx="${t}" cy="${n}" r="2.8" fill="${et}"/><circle cx="${e+.9}" cy="${n-.9}" r=".9" fill="#fff"/><circle cx="${t+.9}" cy="${n-.9}" r=".9" fill="#fff"/>`,Tl=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9bb5" opacity=".75"/>`;function mi(e,t="stand"){const n=zl[e]??zl[0],s="#ffb3c6",i=(o,a,r,l)=>`
    <path d="M${o-13} ${a-8} L${o-10} ${a-25} L${o-1} ${a-13} Z" fill="${n.body}" ${oe}/><path d="M${o-10.5} ${a-11} L${o-9.5} ${a-20} L${o-4} ${a-13} Z" fill="${s}"/>
    <path d="M${o+1} ${a-13} L${o+11} ${a-26} L${o+13} ${a-7} Z" fill="${e===3?"#f4a259":n.body}" ${oe}/><path d="M${o+4} ${a-13} L${o+10} ${a-21} L${o+11} ${a-11} Z" fill="${s}"/>
    <circle cx="${o}" cy="${a}" r="${r}" fill="${n.body}" ${oe}/>
    ${e===3?`<path d="M${o+2} ${a-r+1} a${r} ${r} 0 0 1 ${r-3} ${r-2} q-6 2 -${r-3} -${r-3}z" fill="#f4a259"/>`:""}
    ${e===2?`<ellipse cx="${o+2}" cy="${a+7}" rx="9" ry="7" fill="#fff"/>`:""}
    ${n.stripe?`<path d="M${o-4} ${a-r+2} v5 M${o+2} ${a-r+1} v6 M${o+8} ${a-r+3} v4" ${oe} stroke="${n.stripe}" stroke-width="2.5"/>`:""}
    ${Xm(o-4,o+7,a,l)}
    <path d="M${o+3} ${a+4} l-2.5 -2 h5 z" fill="#ff8fab"/><path d="M${o+.5} ${a+6} q2.5 2.5 5 0" fill="none" ${oe} stroke-width="2"/>
    ${Tl(o-8,a+5)}${Tl(o+12,a+5)}
    <path d="M${o+r-2} ${a+3} l9 -2 M${o+r-2} ${a+6} l9 2" ${oe} stroke-width="1.6"/>`;return t==="nap"?`<svg viewBox="0 0 120 100" class="catsvg nap">
    <g class="breathe"><path class="tail" d="M28 84 Q22 96 64 94" fill="none" stroke="${et}" stroke-width="11" stroke-linecap="round"/><path d="M28 84 Q22 96 64 94" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="58" cy="76" rx="36" ry="18" fill="${n.body}" ${oe}/>
    ${e===3?'<ellipse cx="44" cy="72" rx="12" ry="8" fill="#f4a259"/><ellipse cx="66" cy="70" rx="9" ry="6" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M44 62 q3 6 0 12 M56 61 q3 6 0 12 M68 62 q3 6 0 11" fill="none" ${oe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    ${i(90,76,15,!0)}</g></svg>`:t==="sit"?`<svg viewBox="0 0 120 100" class="catsvg sit">
    <path class="tail" d="M50 92 Q18 96 24 70" fill="none" stroke="${et}" stroke-width="11" stroke-linecap="round"/><path class="tail" d="M50 92 Q18 96 24 70" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="64" cy="70" rx="20" ry="25" fill="${n.body}" ${oe}/>
    <ellipse cx="70" cy="74" rx="10" ry="15" fill="${n.belly}"/>
    ${e===3?'<ellipse cx="54" cy="66" rx="9" ry="12" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M50 60 q5 2 4 8 M49 72 q5 2 4 8" fill="none" ${oe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    <rect x="62" y="74" width="9" height="21" rx="4.5" fill="${n.body}" ${oe}/><rect x="74" y="74" width="9" height="21" rx="4.5" fill="${n.body}" ${oe}/>
    ${e===2?'<ellipse cx="66.5" cy="93" rx="4" ry="2.5" fill="#fff"/><ellipse cx="78.5" cy="93" rx="4" ry="2.5" fill="#fff"/>':""}
    ${i(72,36,17,!1)}</svg>`:`<svg viewBox="0 0 120 100" class="catsvg stand">
    <path class="tail" d="M32 58 Q8 54 12 26" fill="none" stroke="${et}" stroke-width="11" stroke-linecap="round"/><path class="tail" d="M32 58 Q8 54 12 26" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <rect class="leg b" x="34" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${oe}/><rect class="leg a" x="74" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${oe}/>
    <ellipse cx="58" cy="58" rx="32" ry="17" fill="${n.body}" ${oe}/>
    <ellipse cx="64" cy="66" rx="20" ry="7" fill="${n.belly}"/>
    ${e===3?'<ellipse cx="46" cy="52" rx="12" ry="9" fill="#f4a259"/><ellipse cx="68" cy="50" rx="9" ry="7" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M44 43 q3 6 0 12 M56 42 q3 6 0 12 M68 43 q3 6 0 11" fill="none" ${oe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    <rect class="leg a" x="44" y="64" width="9" height="30" rx="4.5" fill="${n.body}" ${oe}/><rect class="leg b" x="84" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${oe}/>
    ${e===2?'<ellipse cx="48.5" cy="92" rx="4" ry="2.5" fill="#fff"/><ellipse cx="88.5" cy="92" rx="4" ry="2.5" fill="#fff"/>':""}
    ${i(90,40,17,!1)}</svg>`}function ho(e,t="stand"){const n=Pl[e]??Pl[0],s=t==="sleep",i=e===2,o=e===1,a=e===3,r=e===4,l=i?66:58,c=i?70:62,p=94-c,d=i?102:92,g=i?50:40,h=(x,R)=>o?`<rect class="leg ${R}" x="${x+2}" y="${c}" width="6" height="${p}" rx="3" fill="${n.body}" ${oe}/><circle class="leg ${R}" cx="${x+5}" cy="91" r="6" fill="${n.body}" ${oe}/>`:`<rect class="leg ${R}" x="${x}" y="${c}" width="10" height="${p}" rx="5" fill="${n.body}" ${oe}/>`,m=o?`<circle cx="44" cy="58" r="15" fill="${n.body}" ${oe}/><circle cx="70" cy="56" r="17" fill="${n.body}" ${oe}/><ellipse cx="57" cy="58" rx="22" ry="12" fill="${n.body}"/>`:`<ellipse cx="${i?62:58}" cy="${l}" rx="${i?42:32}" ry="${i?13:17}" fill="${n.body}" ${oe}/>`,b=r?`<circle cx="46" cy="54" r="5" fill="${et}"/><circle cx="64" cy="62" r="4" fill="${et}"/><circle cx="72" cy="50" r="3.5" fill="${et}"/><circle cx="38" cy="64" r="3" fill="${et}"/>`:"",_=o?`<g class="tail"><path d="M30 52 L22 38" ${oe}/><circle cx="21" cy="34" r="7" fill="${n.body}" ${oe}/></g>`:a?`<path class="tail" d="M30 52 Q10 50 14 30 Q20 40 30 46" fill="${n.body}" ${oe}/>`:`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${et}" stroke-width="9" stroke-linecap="round"/>`,y=!o&&!a?`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`:"",u=`
    ${o?`<circle cx="${d-2}" cy="${g-16}" r="10" fill="${n.body}" ${oe}/>`:""}
    <circle cx="${d}" cy="${g}" r="17" fill="${n.body}" ${oe}/>
    ${r?`<circle cx="${d-6}" cy="${g-8}" r="4" fill="${et}"/>`:""}
    <ellipse cx="${d+13}" cy="${g+7}" rx="11" ry="8" fill="${n.snout}" ${oe}/>
    <circle cx="${d+22}" cy="${g+4}" r="4" fill="${et}"/>
    <path d="M${d+14} ${g+12} q4 3 8 0" fill="none" ${oe} stroke-width="2"/>
    ${s?"":`<path class="tongue" d="M${d+16} ${g+13} q2 7 6 0" fill="#ff8fab" ${oe} stroke-width="2"/>`}
    ${s?`<path d="M${d+2} ${g-4} q3 3 6 0" fill="none" ${oe} stroke-width="2.4"/>`:`<circle cx="${d+5}" cy="${g-3}" r="3" fill="${et}"/><circle cx="${d+6}" cy="${g-4}" r="1" fill="#fff"/>`}
    ${Tl(d+2,g+8)}
    ${o?`<circle cx="${d-9}" cy="${g+8}" r="9" fill="${n.ear}" ${oe}/>`:`<ellipse class="ear" cx="${d-9}" cy="${g+4}" rx="7" ry="${a||i?14:12}" fill="${n.ear}" ${oe} transform="rotate(12 ${d-9} ${g+4})"/>`}
    <path d="M${d-12} ${g+14} q10 6 20 2" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round"/><circle cx="${d-1}" cy="${g+19}" r="3" fill="#ffd166" ${oe} stroke-width="1.5"/>`,k=o?`<g class="tail"><path d="M42 86 L28 80" ${oe}/><circle cx="25" cy="78" r="7" fill="${n.body}" ${oe}/></g>`:`<path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${et}" stroke-width="9" stroke-linecap="round"/><path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`;return t==="sit"||t==="sleep"?`<svg viewBox="0 0 130 100" class="dogsvg ${s?"sleep":"sit"}">${k}
    <ellipse cx="60" cy="70" rx="22" ry="24" fill="${n.body}" ${oe}/>${r?`<circle cx="54" cy="66" r="5" fill="${et}"/><circle cx="64" cy="80" r="4" fill="${et}"/>`:""}
    ${h(62,"a")}${h(74,"b")}<g transform="translate(-22 -2)">${u}</g></svg>`:`<svg viewBox="0 0 130 100" class="dogsvg stand">${_}${y}
    ${h(i?30:34,"b")}${h(i?82:72,"a")}
    ${m}${b}
    ${h(i?42:46,"a")}${h(i?94:84,"b")}
    ${u}</svg>`}const Of=e=>{let t=2166136261;for(const n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},ys=(e,t)=>{let n=(e^Math.imul(t,2654435761))>>>0;return n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),n^=n>>>16,(n>>>0)/4294967296},Gd=18,Jm={1:.35,2:.6};function e1(e,t,n){return e-t*Jm[n]}function t1(e,t){const s=Math.floor(t/1e3/2.8);return ys(Of(e||"pup"),s)<.62?"rest":"peek"}function n1(e,t,n,s,i=!1){const o=Of(e.name+":"+e.coat+":"+e.room+":"+Math.round(e.x)+(n?":t"+Math.round(n.x):"")),a=t/1e3,r=Math.floor(a/Gd),l=a-r*Gd;if(!n){const y=le=>Math.max(160,Math.min(2240,e.x+(ys(o,le)-.5)*760)),u=y(r-1);let k=y(r);const x=ys(o+7,r),R=x<.45?"nap":x<.75?"sit":"groom",H=!!(s&&R==="nap"&&ys(o+13,r)<.72);H&&s&&(k=Math.max(160,Math.min(2240,s.x)));const I=Math.abs(k-u),X=Math.min(5,I/110);return l<X&&!i?{x:u+(k-u)*(l/X),mood:"walk",flip:k<u,perch:0,curl:0}:{x:k,mood:R,flip:k<u,perch:0,curl:H?1:0}}const c=Math.max(160,Math.min(2240,n.x)),p=ys(o+5,r)<.45?2:1,d=Math.max(160,Math.min(2240,c+(ys(o,r)-.5)*420)),g=Math.abs(c-d),h=Math.min(4.2,Math.max(.6,g/160)),m=c<d;if(l<h&&!i)return{x:d+(c-d)*(l/h),mood:"walk",flip:m,perch:0,curl:0};const b=ys(o+11,r),_=b<.34?"nap":b<.67?"sit":"play";return{x:c,mood:_,flip:m,perch:p,curl:0}}const Pa="#5a3d5c",Re=`stroke="${Pa}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,Pi=[`<svg viewBox="0 0 48 48"><path d="M24 40 C16 32 6 26 10 16 C14 8 24 12 24 20 C24 12 34 8 38 16 C42 26 32 32 24 40 Z" fill="#ff6b9a" ${Re}/></svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l5 12 13 1 -10 8 3 13 -11 -7 -11 7 3 -13 -10 -8 13 -1z" fill="#ffd166" ${Re}/></svg>`,`<svg viewBox="0 0 48 48"><circle cx="24" cy="22" r="6" fill="#ff8fab" ${Re}/>${[0,60,120,180,240,300].map(e=>`<circle cx="${24+Math.cos(e*Math.PI/180)*12}" cy="${22+Math.sin(e*Math.PI/180)*12}" r="5" fill="#ffd166" ${Re}/>`).join("")}<path d="M24 34 V44" ${Re}/></svg>`,`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="14" ry="10" fill="#ffb26b" ${Re}/><circle cx="34" cy="20" r="8" fill="#ffc46b" ${Re}/><path d="M28 14 L30 6 L36 14" fill="#ffb26b" ${Re}/><circle cx="32" cy="19" r="1.4" fill="${Pa}"/><circle cx="37" cy="19" r="1.4" fill="${Pa}"/></svg>`,`<svg viewBox="0 0 48 48">${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M8 ${30-t*4} Q24 ${10-t*3} 40 ${30-t*4}" fill="none" stroke="${e}" stroke-width="4"/>`).join("")}</svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l3 10 10 1 -8 6 3 10 -8 -5 -8 5 3 -10 -8 -6 10 -1z" fill="#fff3b0" ${Re}/><circle cx="12" cy="34" r="3" fill="#ff8fab" ${Re}/><circle cx="36" cy="36" r="2.4" fill="#bde0fe" ${Re}/></svg>`];function Yd(e){const t=e?`<g class="flag"><path d="M30 16 V6" ${Re}/><path d="M30 6 H42 L38 11 L42 16 H30 Z" fill="#ff6b6b" ${Re}/></g>`:`<g class="flag"><path d="M18 28 H28" ${Re}/><path d="M18 22 H28 L25 25 L28 28 H18 Z" fill="#ffd166" ${Re}/></g>`;return`<svg viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="68" rx="18" ry="3" fill="#000" opacity=".12"/>
    <rect x="30" y="40" width="5" height="26" rx="2" fill="#c99366" ${Re}/>
    <path d="M8 40 V22 Q8 8 32 8 Q56 8 56 22 V40 Z" fill="#8ecae6" ${Re}/>
    <path d="M8 28 H56" ${Re}/>
    <rect x="14" y="32" width="36" height="16" rx="4" fill="#fff6e6" ${Re}/>
    <circle cx="32" cy="40" r="3" fill="${Pa}"/>
    ${t}
  </svg>`}function s1(e,t=[]){const n=Nm(e,t);return n.ok?{ok:!0,text:n.text}:{ok:!1,msg:n.reason==="empty"?"Write a little note!":ur[n.reason]||"Oops, try different words!"}}const i1={...ur,empty:"Write a little note!",slow:"Let's wait a moment!",full:"This mailbox is full!",notyours:"Only she can open her mail.",nohouse:"That house is not on the street.",gone:"That letter is already gone.",toobig:"The mailbox is too full!",presetsOnly:"Typing is turned off: pick a phrase!",unread:"She still has your letters! Wait until she reads them."};function o1(e){return i1[e]||"Let's try that again!"}function a1(e){let t="",n="",s=!1,i="",o=0,a=0,r=-1,l="",c="";const p=()=>document.getElementById("mailCue");p()?.addEventListener("click",()=>{e.openOwn()});function d(){t="",n="",document.getElementById("mailSheet")?.remove()}function g(){let y=document.getElementById("mailSheet");return y||(y=document.createElement("div"),y.id="mailSheet",y.className="sheet mailSheet",y.innerHTML='<div class="card" id="mailCard"></div>',document.body.appendChild(y),y.addEventListener("click",u=>{const k=u.target;if(k===y||k.closest('[data-m="close"]')){d();return}m(k)}),y.addEventListener("input",u=>{const k=u.target;if(k.id!=="mailText")return;const x=document.getElementById("mailCount");x&&(x.textContent=`${k.value.length}/${Un}`)})),y}function h(){if(!t)return;const y=g().querySelector("#mailText")?.value??"",u=e.mine(t),k=e.lettersOf(t),x=e.houseName(t),R=g().querySelector("#mailCard");if(n&&u&&!s){const I=k.find(X=>X.id===n);if(I&&I.text){b(I);return}n=""}if(s||!u){const I=e.freeType(),X=i?`Reply to ${e.houseName(i)||"your friend"}`:u?"Leave a letter":`Letter for ${x}`,le=I?`<textarea id="mailText" class="mailBox" maxlength="${Un}" placeholder="Hi! Come play!"></textarea>
        <div class="mailCount" id="mailCount">0/${Un}</div>`:`<h3>Phrase</h3><div class="phrases mailPhrases">${Xi.map((G,pe)=>`<button type="button" data-phrase="${pe}" class="${pe===r?"on":""}">${ft(G)}</button>`).join("")}</div>`;R.innerHTML=`<button class="close" data-m="close">✕</button><h2>${ft(X)}</h2>
        <p class="hint">${I?"A short note. Your name goes on it for you.":"Pick a phrase. Your name goes on it for you."}</p>
        ${le}
        <h3>Paper</h3><div class="mailRow">${Rn.map((G,pe)=>`<button class="swatch ${pe===o?"on":""}" data-color="${pe}" style="background:${G}" aria-label="Paper ${pe+1}"></button>`).join("")}</div>
        <h3>Sticker</h3><div class="mailRow">${Pi.slice(0,wf).map((G,pe)=>`<button class="stick ${pe===a?"on":""}" data-sticker="${pe}" aria-label="Sticker ${pe+1}">${G}</button>`).join("")}</div>
        ${l?`<p class="mailErr" id="mailErr">${ft(l)}</p>`:""}
        <button class="mailSend" id="mailSend" type="button">Send</button>
        ${u&&k.length?'<button class="mailRow" data-act="back" type="button" style="margin-top:8px">Back to my mail</button>':""}`;const ce=g().querySelector("#mailText");if(ce&&y){ce.value=y;const G=document.getElementById("mailCount");G&&(G.textContent=`${y.length}/${Un}`)}return}const H=k.length?k.slice().reverse().map(I=>I.text?`<button type="button" class="letter ${I.read?"":"fresh"}" data-letter="${ft(I.id)}" style="background:${Rn[I.color]??Rn[0]}">
        <span class="sticker">${Pi[I.sticker]??Pi[0]}</span>
        <span class="who">${ft(I.from)}</span><span class="when">${ft(qr(I.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${Re}/><path d="M4 8 L40 24 L76 8" fill="${Rn[I.color]??"#fff"}" ${Re}/></svg>
      </button>`:`<div class="letter" style="background:${Rn[I.color]??Rn[0]}"><span class="who">Your letter</span><span class="when">${ft(qr(I.at))}</span><span class="statusChip ${I.read?"read":""}">${I.read?"Read":"Delivered"}</span></div>`).join(""):'<p class="hint">No letters yet. Your flag pops up when one arrives!</p>';R.innerHTML=`<button class="close" data-m="close">✕</button><h2>${ft(x)} mailbox</h2>${H}
      <div class="mailRow"><button type="button" data-act="write">Write a letter</button></div>
      ${l?`<p class="mailErr">${ft(l)}</p>`:""}`}function m(y){const u=y.closest(".mailPhrases [data-phrase]");if(u){r=+u.dataset.phrase,l="",h();return}const k=y.closest("[data-color]");if(k){o=+k.dataset.color,h();return}const x=y.closest("[data-sticker]");if(x){a=+x.dataset.sticker,h();return}if(y.closest("#mailSend"))return _();const R=y.closest("[data-act]")?.dataset.act;if(R==="write"){s=!0,i="",n="",l="",h();return}if(R==="back"){s=!1,i="",n="",l="",h();return}if(R==="reply"){const ce=e.houseOf(y.closest("[data-from]")?.dataset.from??"");if(!ce){e.toast("They are not on the street anymore.");return}i=ce,s=!0,n="",l="",t=ce,h();return}if(R==="drop"){const ce=y.closest("[data-id]")?.dataset.id??"";if(c!==ce){c=ce,e.toast("Tap again to throw it away");return}c="",e.drop(t,ce);return}const H=y.closest("[data-letter]");if(!H)return;const I=H.dataset.letter,le=e.lettersOf(t).find(ce=>ce.id===I);le&&(!e.mine(t)||!le.text||(le.read||e.read(t,I),n=I,b(le)))}function b(y){const u=r1(y.text),k=g().querySelector("#mailCard");k.innerHTML=`<button class="close" data-m="close">✕</button>
      <div class="letter open read" style="background:${Rn[y.color]??Rn[0]}" data-id="${ft(y.id)}" data-from="${ft(y.fromPid)}">
        <span class="sticker">${Pi[y.sticker]??Pi[0]}</span>
        <span class="who">${ft(y.from)}</span><span class="when">${ft(qr(y.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${Re}/><path class="flap" d="M4 8 L40 24 L76 8" fill="#fff" ${Re}/></svg>
        <p class="words">${ft(u??"")}</p>
        <span class="mailRow"><button type="button" data-act="reply">Reply</button><button type="button" class="throw" data-act="drop">${c===y.id?"Tap again":"Throw away"}</button></span>
      </div>
      <button type="button" data-act="back">All my mail</button>
      ${l?`<p class="mailErr">${ft(l)}</p>`:""}`}function _(){let y="";if(e.freeType()){const k=g().querySelector("#mailText")?.value??"",x=s1(k);if(!x.ok){l=x.msg,h();const R=g().querySelector("#mailText");R&&(R.value=k);return}y=x.text}else{if(r<0||r>=Xi.length){l="Pick a phrase!",h();return}y=Xi[r]}const u=i||t;l="",e.send(u,y,o,a),e.toast("On its way!"),e.mine(u)?(s=!1,i="",t=u,h()):d()}return{open(y,u,k,x){t=y,n="",s=!k,i="",l="",c="",o=0,a=0,r=-1,h()},fail(y){l=o1(y),t?h():e.toast(l)},refresh(){t&&h()},syncCue(y){p()?.classList.toggle("show",y)}}}function r1(e){if(!e)return null;const t=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return!t||t.length>Un?null:t}function ft(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const Wf=()=>Nt("cozy-play");function l1(){try{return localStorage.getItem(Wf())==="play"?"play":"decorate"}catch{return"decorate"}}function c1(e){try{localStorage.setItem(Wf(),e)}catch{}}function d1(e){return e==="kennel"?"kennel":e==="cat-tower"?"tower":e==="yard-swing"?"swing":e==="lamp"||/(^|:)lamp|starlamp|light/.test(e)?"lamp":e==="fridge"||e==="stove"||e==="vanity"||e==="bookshelf"||e==="window"||e==="mirror"||e==="tv"||/fridge|stove|cabinet|drawer|vanity/.test(e)?"open":Ns(e)?"sit":"wiggle"}const p1='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 22 V12 a3 3 0 0 1 6 0 V22" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M24 22 V10 a3 3 0 0 1 6 0 V24" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M30 24 V14 a3 3 0 0 1 6 0 V26" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M14 22 V16 a3 3 0 0 0-6 0 V28 c0 8 6 14 16 14 h4 c8 0 12-5 12-12 V26" fill="#ffe0b8" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M34 8 l1.2 3 3 .4 -2.2 2 .6 3 -2.6-1.6 -2.6 1.6 .6-3 -2.2-2 3-.4z" fill="#ffd166" stroke="#5a3d5c" stroke-width="1.4"/></svg>',f1='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34 L22 22 L30 30 L18 42 Q10 42 10 34 Z" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M22 22 L32 12 L38 18 L28 28 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 12 L36 6 L42 12 L38 18" fill="#c9a0dc" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M14 36 h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M8 14 l2 1 M40 34 l2 2 M8 40 l3 -1" stroke="#5a3d5c" stroke-width="2" stroke-linecap="round"/></svg>';function g1(e,t){let n="decorate";const s=e.querySelector("#modePlay"),i=e.querySelector("#modeDecorate");s.querySelector(".modeIco").innerHTML=p1,i.querySelector(".modeIco").innerHTML=f1;const o=()=>{const c=n==="play";document.body.classList.toggle("mode-play",c),s.classList.toggle("on",c),i.classList.toggle("on",!c),s.setAttribute("aria-pressed",c?"true":"false"),i.setAttribute("aria-pressed",c?"false":"true")},a=(c,p)=>{n=c,p&&c1(c),o(),t.onChange?.()};e.addEventListener("pointerdown",c=>c.stopPropagation()),e.addEventListener("click",c=>{const p=c.target.closest("[data-mode]");if(!p)return;const d=p.dataset.mode==="play"?"play":"decorate";a(d,t.ownHouse())}),o();let r=!1;return{mode:()=>n,isPlay:()=>n==="play",sync(c){a(c?l1():"play",!1)},hint:()=>{if(r||!document.body.classList.contains("phone"))return;const c=Nt("cozy-mode-hint");try{if(localStorage.getItem(c)){r=!0;return}}catch{r=!0;return}r=!0;const p=document.createElement("p");p.className="modeHint",p.textContent="Play: tap things! Decorate: move things!",e.appendChild(p);let d=!1;const g=()=>{if(!d){d=!0,p.remove(),window.removeEventListener("pointerdown",g);try{localStorage.setItem(c,"1")}catch{}}};window.setTimeout(g,2800),p.addEventListener("click",g),window.addEventListener("pointerdown",g)}}}const Vf=new Map;let Uf=!1;function yi(){return Uf}function h1(e){Uf=e}function As(e){return Vf.get(e)}function u1(e,t){Vf.set(e,t)}const m1=!0;let Wo=null;function y1(e){const t=new URLSearchParams(e.replace(/^\?/,"")).get("art");t==="v1"?Wo=!1:t==="v2"?Wo=!0:Wo=null;const n=Wo??m1;return h1(n),n}const Ta=Object.assign({"../../assets/art/any/armchair.webp":()=>f(()=>import("./armchair-DNUcj0LU.js"),[]).then(e=>e.default),"../../assets/art/any/ball.webp":()=>f(()=>import("./ball-CLPa09gM.js"),[]).then(e=>e.default),"../../assets/art/any/balloon.webp":()=>f(()=>import("./balloon-DUDI6dkT.js"),[]).then(e=>e.default),"../../assets/art/any/bookshelf.webp":()=>f(()=>import("./bookshelf-Cc9ub96u.js"),[]).then(e=>e.default),"../../assets/art/any/chair.webp":()=>f(()=>import("./chair-D596uoKG.js"),[]).then(e=>e.default),"../../assets/art/any/clock.webp":()=>f(()=>import("./clock-fvC-SFdk.js"),[]).then(e=>e.default),"../../assets/art/any/lamp.webp":()=>f(()=>import("./lamp-lkxZMSWs.js"),[]).then(e=>e.default),"../../assets/art/any/picture.webp":()=>f(()=>import("./picture-CnQHfmcC.js"),[]).then(e=>e.default),"../../assets/art/any/plant.webp":()=>f(()=>import("./plant-CsffKA5j.js"),[]).then(e=>e.default),"../../assets/art/any/rug.webp":()=>f(()=>import("./rug-BT3hv8Ty.js"),[]).then(e=>e.default),"../../assets/art/any/sofa.webp":()=>f(()=>import("./sofa-6tZenqTj.js"),[]).then(e=>e.default),"../../assets/art/any/table.webp":()=>f(()=>import("./table-CIvQSSIA.js"),[]).then(e=>e.default),"../../assets/art/any/tv.webp":()=>f(()=>import("./tv-BKQjbyQq.js"),[]).then(e=>e.default),"../../assets/art/any/window.webp":()=>f(()=>import("./window-CtZMy52w.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mat.webp":()=>f(()=>import("./bath-mat-CGqMmSpc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mirror.webp":()=>f(()=>import("./bath-mirror-0G_LD9ek.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-stool.webp":()=>f(()=>import("./bath-stool-Cxq0W4Pr.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-toilet.webp":()=>f(()=>import("./bath-toilet-D3I7IIUo.js"),[]).then(e=>e.default),"../../assets/art/bathroom/laundry-hamper.webp":()=>f(()=>import("./laundry-hamper-BkR0Wz0-.js"),[]).then(e=>e.default),"../../assets/art/bathroom/rubber-ducky.webp":()=>f(()=>import("./rubber-ducky-B3u_V1zb.js"),[]).then(e=>e.default),"../../assets/art/bathroom/shower-curtain.webp":()=>f(()=>import("./shower-curtain-CfLothKE.js"),[]).then(e=>e.default),"../../assets/art/bathroom/sink-vanity.webp":()=>f(()=>import("./sink-vanity-avyqYHvc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soaking-tub.webp":()=>f(()=>import("./soaking-tub-C4H_s4uu.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soap-dish.webp":()=>f(()=>import("./soap-dish-Dp5i3rho.js"),[]).then(e=>e.default),"../../assets/art/bathroom/towel-bar.webp":()=>f(()=>import("./towel-bar-B_pk-phm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/bed.webp":()=>f(()=>import("./bed-Cl9DoI6l.js"),[]).then(e=>e.default),"../../assets/art/bedroom/mirror.webp":()=>f(()=>import("./mirror-BmFhe6_i.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~alarm-clock.webp":()=>f(()=>import("./pack~alarm-clock-DsMqTNwb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bedtime-snack.webp":()=>f(()=>import("./pack~bedtime-snack-CwkMDndV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-monitor.webp":()=>f(()=>import("./pack~big-monitor-D9xBH6Uo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-wardrobe.webp":()=>f(()=>import("./pack~big-wardrobe-HcZmD6rX.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~book-stack.webp":()=>f(()=>import("./pack~book-stack-BRgispDw.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bubble-bath.webp":()=>f(()=>import("./pack~bubble-bath-COKGg9Dp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunk-bed.webp":()=>f(()=>import("./pack~bunk-bed-DlPI8ODZ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunny-slippers.webp":()=>f(()=>import("./pack~bunny-slippers-l0Ai2DZM.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~canopy-bed.webp":()=>f(()=>import("./pack~canopy-bed-CnOUh6Bv.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cat-bed.webp":()=>f(()=>import("./pack~cat-bed-jijdjakI.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~caterpillar-plush.webp":()=>f(()=>import("./pack~caterpillar-plush-C0OwOmuR.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-canopy-daybed.webp":()=>f(()=>import("./pack~cc-canopy-daybed-DydxR9An.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-beanbag.webp":()=>f(()=>import("./pack~cc-cloud-beanbag-BBONqsoo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-lamp.webp":()=>f(()=>import("./pack~cc-cloud-lamp-BmZ472wV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-fairy-garland.webp":()=>f(()=>import("./pack~cc-fairy-garland-BHwDj5iz.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-heart-bed.webp":()=>f(()=>import("./pack~cc-heart-bed-C77MyR5W.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-jewel-box.webp":()=>f(()=>import("./pack~cc-jewel-box-sQHP3Cwa.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-reading-nook.webp":()=>f(()=>import("./pack~cc-reading-nook-CsNeycvH.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-star-dresser.webp":()=>f(()=>import("./pack~cc-star-dresser-DA2R4QIn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-window-seat.webp":()=>f(()=>import("./pack~cc-window-seat-C48Rguem.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~checker-bed.webp":()=>f(()=>import("./pack~checker-bed-DRGxzSHq.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~clothes-rail.webp":()=>f(()=>import("./pack~clothes-rail-C3j6Nz76.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-rug.webp":()=>f(()=>import("./pack~cloud-rug-DojbAFjK.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-shelf.webp":()=>f(()=>import("./pack~cloud-shelf-AnKv1aGf.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cork-board.webp":()=>f(()=>import("./pack~cork-board-DfnUAUG4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~curvy-desk.webp":()=>f(()=>import("./pack~curvy-desk-BYWcXROd.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~daisy-pot.webp":()=>f(()=>import("./pack~daisy-pot-B0c7zAXE.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk-mic.webp":()=>f(()=>import("./pack~desk-mic-rqXd4kwj.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk.webp":()=>f(()=>import("./pack~desk-CCYyeXW4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dino-plush.webp":()=>f(()=>import("./pack~dino-plush-DkHbQcgG.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~doll-house.webp":()=>f(()=>import("./pack~doll-house-YDCKziqJ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dresser.webp":()=>f(()=>import("./pack~dresser-C6nwNjAN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~egg-chair.webp":()=>f(()=>import("./pack~egg-chair-DU7fUuJW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~floor-fan.webp":()=>f(()=>import("./pack~floor-fan-BLpz7F62.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~frog-plush.webp":()=>f(()=>import("./pack~frog-plush-H14K3f0H.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~game-controller.webp":()=>f(()=>import("./pack~game-controller-D3oYYAQ-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~gaming-chair.webp":()=>f(()=>import("./pack~gaming-chair-ZBwgVPrD.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~guinea-pig.webp":()=>f(()=>import("./pack~guinea-pig-DPIqea0G.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-cage.webp":()=>f(()=>import("./pack~hamster-cage-B96Cssh7.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-pet.webp":()=>f(()=>import("./pack~hamster-pet-Cvf204rb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~headphones.webp":()=>f(()=>import("./pack~headphones-CQB9V8aN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~heart-rug.webp":()=>f(()=>import("./pack~heart-rug-Bv8hxzxL.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~keyboard.webp":()=>f(()=>import("./pack~keyboard-DeZ4vIwp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~lava-lamp.webp":()=>f(()=>import("./pack~lava-lamp-CHXJUd92.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~moon-night-light.webp":()=>f(()=>import("./pack~moon-night-light-BM_Yu-aW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~nightstand.webp":()=>f(()=>import("./pack~nightstand-Coz5lz4g.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~paper-lantern.webp":()=>f(()=>import("./pack~paper-lantern-KLCCw2t-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~pastel-wardrobe.webp":()=>f(()=>import("./pack~pastel-wardrobe-BGo5v24q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~phone-stand.webp":()=>f(()=>import("./pack~phone-stand-DkITkIic.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~piggy-bank.webp":()=>f(()=>import("./pack~piggy-bank-BvruDXQr.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~plant-stand.webp":()=>f(()=>import("./pack~plant-stand-PN6YMQ3-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~play-tent.webp":()=>f(()=>import("./pack~play-tent-CAn9y4lt.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~star-mobile.webp":()=>f(()=>import("./pack~star-mobile-C65pHL5x.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-chest.webp":()=>f(()=>import("./pack~toy-chest-CCoXCM2Q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-robot.webp":()=>f(()=>import("./pack~toy-robot-C4w9ruxo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-train.webp":()=>f(()=>import("./pack~toy-train-CCY6v45R.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~unicorn-plush.webp":()=>f(()=>import("./pack~unicorn-plush-BQM30sq1.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~vlog-camera.webp":()=>f(()=>import("./pack~vlog-camera-fqu7FuU4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wardrobe.webp":()=>f(()=>import("./pack~wardrobe-I04Doflm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-dresser.webp":()=>f(()=>import("./pack~wh-dresser-AB8z2u9d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-nightstand.webp":()=>f(()=>import("./pack~wh-nightstand-CNei9R8d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wood-desk.webp":()=>f(()=>import("./pack~wood-desk-BovaaQew.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wooden-bed.webp":()=>f(()=>import("./pack~wooden-bed-DRuaOxAn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/stars.webp":()=>f(()=>import("./stars-B-_1Uhi4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/story-pillow.webp":()=>f(()=>import("./story-pillow-C53joZXs.js"),[]).then(e=>e.default),"../../assets/art/bedroom/teddy.webp":()=>f(()=>import("./teddy-BfWdCSac.js"),[]).then(e=>e.default),"../../assets/art/bedroom/tub.webp":()=>f(()=>import("./tub-jBZNDbL2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bakery-shelf.webp":()=>f(()=>import("./pack~cc-bakery-shelf-DxlB9xOk.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-breakfast-table.webp":()=>f(()=>import("./pack~cc-breakfast-table-D2YPezZT.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bubble-chair.webp":()=>f(()=>import("./pack~cc-bubble-chair-DKb4WvKy.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-cupcake-stand.webp":()=>f(()=>import("./pack~cc-cupcake-stand-DmYK-4Hu.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-dryer-chair.webp":()=>f(()=>import("./pack~cc-dryer-chair-DmzzPwrg.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-flower-kettle.webp":()=>f(()=>import("./pack~cc-flower-kettle-DnNFg1vb.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-light-vanity.webp":()=>f(()=>import("./pack~cc-light-vanity-C4kTfQ4w.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-macaron-jar.webp":()=>f(()=>import("./pack~cc-macaron-jar-C4jd-6MZ.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mani-chair.webp":()=>f(()=>import("./pack~cc-mani-chair-B1M7wSax.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mint-fridge.webp":()=>f(()=>import("./pack~cc-mint-fridge-CYM93gwH.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-pastel-range.webp":()=>f(()=>import("./pack~cc-pastel-range-BaKvL1x2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-perfume-tray.webp":()=>f(()=>import("./pack~cc-perfume-tray-C9m1uuTm.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-ribbon-mirror.webp":()=>f(()=>import("./pack~cc-ribbon-mirror-CP3Id1P-.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-teapot-set.webp":()=>f(()=>import("./pack~cc-teapot-set-Sh3-x8eW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~arched-shelf.webp":()=>f(()=>import("./pack~arched-shelf-ZP2zbvbL.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~blob-rug.webp":()=>f(()=>import("./pack~blob-rug-Du4wSYaf.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bubbly-plant.webp":()=>f(()=>import("./pack~bubbly-plant-DOKimOCX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bud-vase.webp":()=>f(()=>import("./pack~bud-vase-DRTVK3rW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~comb-brush.webp":()=>f(()=>import("./pack~comb-brush-CpdahK7E.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~cream-jars.webp":()=>f(()=>import("./pack~cream-jars-DoeDfhN_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~drop-lamp.webp":()=>f(()=>import("./pack~drop-lamp-B0mzhGoX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~droplet-buddy.webp":()=>f(()=>import("./pack~droplet-buddy-OBcFFQmI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~fancy-sofa.webp":()=>f(()=>import("./pack~fancy-sofa-DSJSLwz5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~flower-cart.webp":()=>f(()=>import("./pack~flower-cart-B48k2LJX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~foot-spa.webp":()=>f(()=>import("./pack~foot-spa-5A9PVZa7.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~globe-pendants.webp":()=>f(()=>import("./pack~globe-pendants-DXxO-0g2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~glow-mirror.webp":()=>f(()=>import("./pack~glow-mirror-trAPPG0M.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~gold-floor-mirror.webp":()=>f(()=>import("./pack~gold-floor-mirror-Bo5QJcuJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~hair-dryer.webp":()=>f(()=>import("./pack~hair-dryer-DBGDeUp2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-plant.webp":()=>f(()=>import("./pack~heart-plant-CdQWzJHX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-pouf.webp":()=>f(()=>import("./pack~heart-pouf-C0i-NFoI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lilac-curtain.webp":()=>f(()=>import("./pack~lilac-curtain-ByvXUGIT.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lotion-trio.webp":()=>f(()=>import("./pack~lotion-trio-BIg_qrq8.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~mani-lamp.webp":()=>f(()=>import("./pack~mani-lamp-Dv5eyP_r.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~nail-table.webp":()=>f(()=>import("./pack~nail-table-Ca5Z7Wb-.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pebble-rug.webp":()=>f(()=>import("./pack~pebble-rug-DcjYEmIt.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~perfume-bottle.webp":()=>f(()=>import("./pack~perfume-bottle-DxCufYl9.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-fountain.webp":()=>f(()=>import("./pack~pink-fountain-CFCu_fWX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-vanity.webp":()=>f(()=>import("./pack~pink-vanity-BaqHZ_Qs.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-bottle.webp":()=>f(()=>import("./pack~polish-bottle-B2ILiK2Y.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-rack.webp":()=>f(()=>import("./pack~polish-rack-Ba4IBkd5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~reception-desk.webp":()=>f(()=>import("./pack~reception-desk-ChKYb2Ag.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~salon-chair.webp":()=>f(()=>import("./pack~salon-chair-DX6P6E4d.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~scent-candle.webp":()=>f(()=>import("./pack~scent-candle-BZ7OX3YS.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~spray-bottle.webp":()=>f(()=>import("./pack~spray-bottle-Df4-NEdU.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~star-wall-sign.webp":()=>f(()=>import("./pack~star-wall-sign-10ikD7wM.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~swivel-stool.webp":()=>f(()=>import("./pack~swivel-stool-DSUqmRKW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~tiered-tray.webp":()=>f(()=>import("./pack~tiered-tray-2DKLkfK_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-cart.webp":()=>f(()=>import("./pack~towel-cart-ZvOFIu7o.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-stack.webp":()=>f(()=>import("./pack~towel-stack-EDHTj1IJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~vine-planter.webp":()=>f(()=>import("./pack~vine-planter-CBs6XXFi.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~waiting-bench.webp":()=>f(()=>import("./pack~waiting-bench-C-tKIfsJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~wash-chair.webp":()=>f(()=>import("./pack~wash-chair-eJoH6ils.js"),[]).then(e=>e.default),"../../assets/art/kitchen/apple.webp":()=>f(()=>import("./apple-BDa0Ipjl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/berry-basket.webp":()=>f(()=>import("./berry-basket-z1Rm1ypn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/cake.webp":()=>f(()=>import("./cake-kY0uEn3b.js"),[]).then(e=>e.default),"../../assets/art/kitchen/donut.webp":()=>f(()=>import("./donut-DBMhrMrO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/fridge.webp":()=>f(()=>import("./fridge-DC5W3m5V.js"),[]).then(e=>e.default),"../../assets/art/kitchen/juice.webp":()=>f(()=>import("./juice-BHz3g6Oh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bananas.webp":()=>f(()=>import("./pack~bananas-CGvoV_mG.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bar-stool.webp":()=>f(()=>import("./pack~bar-stool-kZw0EBoe.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bread-loaf.webp":()=>f(()=>import("./pack~bread-loaf-C2hAdBjQ.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~chick.webp":()=>f(()=>import("./pack~chick-DFs7qQ4S.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~china-hutch.webp":()=>f(()=>import("./pack~china-hutch-BrAJJu-B.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cocoa-mug.webp":()=>f(()=>import("./pack~cocoa-mug-C6QGwvvz.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cookie-jar.webp":()=>f(()=>import("./pack~cookie-jar-CFA4F-rC.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cooking-pot.webp":()=>f(()=>import("./pack~cooking-pot-CqkD438y.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cupcake.webp":()=>f(()=>import("./pack~cupcake-CaukIYeh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~dish-rack.webp":()=>f(()=>import("./pack~dish-rack-fSH4Nxjb.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~fruit-bowl.webp":()=>f(()=>import("./pack~fruit-bowl-BHMKWhLB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~frying-pan.webp":()=>f(()=>import("./pack~frying-pan-CpIkYvtj.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~happy-fridge.webp":()=>f(()=>import("./pack~happy-fridge-C0JgsuQs.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~herb-box.webp":()=>f(()=>import("./pack~herb-box-BPkYhHVn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~high-chair.webp":()=>f(()=>import("./pack~high-chair-CwJcZkT4.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~ice-cream.webp":()=>f(()=>import("./pack~ice-cream-Bvngp9VY.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kettle.webp":()=>f(()=>import("./pack~kettle-BbInY_9a.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-counter.webp":()=>f(()=>import("./pack~kitchen-counter-JZQyi4vS.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-sink.webp":()=>f(()=>import("./pack~kitchen-sink-DNNgCqX_.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~lemon-tree.webp":()=>f(()=>import("./pack~lemon-tree-DB7EFLYH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~microwave.webp":()=>f(()=>import("./pack~microwave-CEveiPpI.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~milk-bottle.webp":()=>f(()=>import("./pack~milk-bottle-CUQviIWU.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pancakes.webp":()=>f(()=>import("./pack~pancakes-B3g8r9_b.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pantry-shelf.webp":()=>f(()=>import("./pack~pantry-shelf-CBvTqzJO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pendant-lamp.webp":()=>f(()=>import("./pack~pendant-lamp-863t-y_9.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pet-bowl.webp":()=>f(()=>import("./pack~pet-bowl-BVx7MJ3n.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~rice-cooker.webp":()=>f(()=>import("./pack~rice-cooker-CR0R_fMt.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~runner-rug.webp":()=>f(()=>import("./pack~runner-rug-khpV9koB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~spice-rack.webp":()=>f(()=>import("./pack~spice-rack-Bb2fECLl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~stand-mixer.webp":()=>f(()=>import("./pack~stand-mixer-Cc12hcA3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~teapot.webp":()=>f(()=>import("./pack~teapot-DbGmGSk-.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~toaster.webp":()=>f(()=>import("./pack~toaster-C7Q5keZK.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~utensil-rail.webp":()=>f(()=>import("./pack~utensil-rail-5WZRpD_3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~watermelon-slice.webp":()=>f(()=>import("./pack~watermelon-slice-C52sVm4c.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pizza.webp":()=>f(()=>import("./pizza-D-Cud-mH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/stove.webp":()=>f(()=>import("./stove-D_-V6Kzg.js"),[]).then(e=>e.default),"../../assets/art/living/bunny.webp":()=>f(()=>import("./bunny-CObFAG48.js"),[]).then(e=>e.default),"../../assets/art/living/cactus.webp":()=>f(()=>import("./cactus-ZhSDibna.js"),[]).then(e=>e.default),"../../assets/art/living/cat-tower.webp":()=>f(()=>import("./cat-tower-D8zuZTAN.js"),[]).then(e=>e.default),"../../assets/art/living/cat.webp":()=>f(()=>import("./cat-D3BztbTL.js"),[]).then(e=>e.default),"../../assets/art/living/dog.webp":()=>f(()=>import("./dog-CaRYped2.js"),[]).then(e=>e.default),"../../assets/art/living/egg~cada-mouse.webp":()=>f(()=>import("./egg~cada-mouse-qwyybszI.js"),[]).then(e=>e.default),"../../assets/art/living/egg~chloe-starlamp.webp":()=>f(()=>import("./egg~chloe-starlamp-CdRast8x.js"),[]).then(e=>e.default),"../../assets/art/living/egg~quinn-pup.webp":()=>f(()=>import("./egg~quinn-pup-CJe2EZ7X.js"),[]).then(e=>e.default),"../../assets/art/living/egg~reagan-frame.webp":()=>f(()=>import("./egg~reagan-frame-ldfvmD0a.js"),[]).then(e=>e.default),"../../assets/art/living/egg~sloane-snail.webp":()=>f(()=>import("./egg~sloane-snail-r5qvwW98.js"),[]).then(e=>e.default),"../../assets/art/living/fish.webp":()=>f(()=>import("./fish-maRwHAJ7.js"),[]).then(e=>e.default),"../../assets/art/living/floor-cushion.webp":()=>f(()=>import("./floor-cushion-xmeTGRs4.js"),[]).then(e=>e.default),"../../assets/art/living/flowers.webp":()=>f(()=>import("./flowers-CRQe1ixJ.js"),[]).then(e=>e.default),"../../assets/art/living/kennel.webp":()=>f(()=>import("./kennel-5tTNQe8j.js"),[]).then(e=>e.default),"../../assets/art/living/pack~acorn-friend.webp":()=>f(()=>import("./pack~acorn-friend-DRuBUVCM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~aquarium.webp":()=>f(()=>import("./pack~aquarium-YU79BMEH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~arc-floor-lamp.webp":()=>f(()=>import("./pack~arc-floor-lamp-DXBWn_jm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bean-bag.webp":()=>f(()=>import("./pack~bean-bag-B14zGXUJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bird-cage.webp":()=>f(()=>import("./pack~bird-cage-BG5Oo83y.js"),[]).then(e=>e.default),"../../assets/art/living/pack~blanket-basket.webp":()=>f(()=>import("./pack~blanket-basket-D9HUE-PH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~box-stack.webp":()=>f(()=>import("./pack~box-stack-DlrNN9pK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~brick-fireplace.webp":()=>f(()=>import("./pack~brick-fireplace-WBAkEMcM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~building-blocks.webp":()=>f(()=>import("./pack~building-blocks-B9tOTAc-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bulletin-board.webp":()=>f(()=>import("./pack~bulletin-board-BanI9ESo.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cactus-buddy.webp":()=>f(()=>import("./pack~cactus-buddy-XIo1SKh4.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-cottage-aquarium.webp":()=>f(()=>import("./pack~cc-cottage-aquarium-BEaUEbqv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-fairy-shelf.webp":()=>f(()=>import("./pack~cc-fairy-shelf-Dm4QJ5ID.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-flower-lamp.webp":()=>f(()=>import("./pack~cc-flower-lamp-69A_4yj-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-clock.webp":()=>f(()=>import("./pack~cc-heart-clock-BG6oca1G.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-pouf.webp":()=>f(()=>import("./pack~cc-heart-pouf-ryX-n2Mr.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-rug.webp":()=>f(()=>import("./pack~cc-heart-rug-Cv9FadVw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-macrame-swing.webp":()=>f(()=>import("./pack~cc-macrame-swing-CaIFr-gR.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-mushroom-stool.webp":()=>f(()=>import("./pack~cc-mushroom-stool-D7K_Q0GF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-petal-table.webp":()=>f(()=>import("./pack~cc-petal-table-C9vJSQzw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-plant-wall.webp":()=>f(()=>import("./pack~cc-plant-wall-DF5W5IvZ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-record-player.webp":()=>f(()=>import("./pack~cc-record-player-PdVEHYb8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-curtains.webp":()=>f(()=>import("./pack~cc-scallop-curtains-Vt3j-c2C.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-loveseat.webp":()=>f(()=>import("./pack~cc-scallop-loveseat-D_1065-V.js"),[]).then(e=>e.default),"../../assets/art/living/pack~checker-rug.webp":()=>f(()=>import("./pack~checker-rug-Wy0CMZSF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cloud-sofa.webp":()=>f(()=>import("./pack~cloud-sofa-DpVszcfk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~coffee-table.webp":()=>f(()=>import("./pack~coffee-table-K_hB0tW1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~comfy-armchair.webp":()=>f(()=>import("./pack~comfy-armchair-DnTSpyVq.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cream-sofa.webp":()=>f(()=>import("./pack~cream-sofa-uxsQUYph.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cubby-shelf.webp":()=>f(()=>import("./pack~cubby-shelf-B9YB2weQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cube-shelf.webp":()=>f(()=>import("./pack~cube-shelf-Do0yoJlP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cute-speaker.webp":()=>f(()=>import("./pack~cute-speaker-CENJbaPd.js"),[]).then(e=>e.default),"../../assets/art/living/pack~daisy-rug.webp":()=>f(()=>import("./pack~daisy-rug-CDZ68mcS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~desk-lamp.webp":()=>f(()=>import("./pack~desk-lamp-luSxwyT9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fiddle-leaf-fig.webp":()=>f(()=>import("./pack~fiddle-leaf-fig-COblJUVe.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fireplace.webp":()=>f(()=>import("./pack~fireplace-BvqJ4MHf.js"),[]).then(e=>e.default),"../../assets/art/living/pack~flower-lamp.webp":()=>f(()=>import("./pack~flower-lamp-CJJ-dlUk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~glass-cabinet.webp":()=>f(()=>import("./pack~glass-cabinet-SVsj9HQm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~globe.webp":()=>f(()=>import("./pack~globe-Dzwb85OX.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-lantern.webp":()=>f(()=>import("./pack~hanging-lantern-ja5xkGId.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-planter.webp":()=>f(()=>import("./pack~hanging-planter-1gi5Hm9x.js"),[]).then(e=>e.default),"../../assets/art/living/pack~heart-light.webp":()=>f(()=>import("./pack~heart-light-DC4iBLQP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~knit-cushion.webp":()=>f(()=>import("./pack~knit-cushion-Cc4lRuF-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ladder-shelf.webp":()=>f(()=>import("./pack~ladder-shelf-CaRkqiRJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~landscape-art.webp":()=>f(()=>import("./pack~landscape-art-BKlaJPEw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~lattice-bench.webp":()=>f(()=>import("./pack~lattice-bench-B9WpfEX6.js"),[]).then(e=>e.default),"../../assets/art/living/pack~leaf-wreath.webp":()=>f(()=>import("./pack~leaf-wreath-uVfnSIfS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~monstera-plant.webp":()=>f(()=>import("./pack~monstera-plant-B_coetMK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~moving-box.webp":()=>f(()=>import("./pack~moving-box-DHeeeIdL.js"),[]).then(e=>e.default),"../../assets/art/living/pack~piano.webp":()=>f(()=>import("./pack~piano-Yyj5R1RA.js"),[]).then(e=>e.default),"../../assets/art/living/pack~popcorn.webp":()=>f(()=>import("./pack~popcorn-BuLbtFAV.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pothos-plant.webp":()=>f(()=>import("./pack~pothos-plant-DzlDgqg0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pouf.webp":()=>f(()=>import("./pack~pouf-BTaH4suE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~puffy-stool.webp":()=>f(()=>import("./pack~puffy-stool-B-6LB9NQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-rug.webp":()=>f(()=>import("./pack~rainbow-rug-EDbn-dZ1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-wall-art.webp":()=>f(()=>import("./pack~rainbow-wall-art-BK2LQVaU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~retro-radio.webp":()=>f(()=>import("./pack~retro-radio-WYNMXhqc.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ring-light.webp":()=>f(()=>import("./pack~ring-light-B6vjhEQO.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-chair.webp":()=>f(()=>import("./pack~rocking-chair-CQ0WHDK5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-horse.webp":()=>f(()=>import("./pack~rocking-horse-C6dNjXKJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~round-rug.webp":()=>f(()=>import("./pack~round-rug-BZ0FhUPv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~side-table-round.webp":()=>f(()=>import("./pack~side-table-round-DoF65A6c.js"),[]).then(e=>e.default),"../../assets/art/living/pack~snake-plant.webp":()=>f(()=>import("./pack~snake-plant-BmYEkWGH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sprout-pot.webp":()=>f(()=>import("./pack~sprout-pot-DiXUsL4M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~star-lamp.webp":()=>f(()=>import("./pack~star-lamp-6-4l-lps.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sticker-board.webp":()=>f(()=>import("./pack~sticker-board-Crwbck5M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~string-lights.webp":()=>f(()=>import("./pack~string-lights-Cas7h1DK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~stripe-runner.webp":()=>f(()=>import("./pack~stripe-runner-CuXUhFNW.js"),[]).then(e=>e.default),"../../assets/art/living/pack~succulent-trio.webp":()=>f(()=>import("./pack~succulent-trio-Do8O7eY8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sunny-art.webp":()=>f(()=>import("./pack~sunny-art-h82-3Sd5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-bean-bag.webp":()=>f(()=>import("./pack~sv-bean-bag-CT3er5We.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-cloud-rug.webp":()=>f(()=>import("./pack~sv-cloud-rug-DmAgh1BY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-wall-shelf.webp":()=>f(()=>import("./pack~sv-wall-shelf-CcIezwct.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tassel-rug.webp":()=>f(()=>import("./pack~tassel-rug-DZANcJOt.js"),[]).then(e=>e.default),"../../assets/art/living/pack~throw-pillow.webp":()=>f(()=>import("./pack~throw-pillow-CO9pMMz-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~toy-car.webp":()=>f(()=>import("./pack~toy-car-VuveyeLU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~trailing-plant.webp":()=>f(()=>import("./pack~trailing-plant-ejZgP7bb.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tulip-vase.webp":()=>f(()=>import("./pack~tulip-vase-CcpvFlG9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~turtle.webp":()=>f(()=>import("./pack~turtle-Bn1sANuv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tv-stand.webp":()=>f(()=>import("./pack~tv-stand-CnWFCgTD.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-clock.webp":()=>f(()=>import("./pack~wall-clock-BhhKLuq0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-shelf.webp":()=>f(()=>import("./pack~wall-shelf-1JASyKwJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wavy-floor-lamp.webp":()=>f(()=>import("./pack~wavy-floor-lamp-B53r_e3m.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-arc-floor-lamp.webp":()=>f(()=>import("./pack~wh-arc-floor-lamp-BXaC16sM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-book-stack.webp":()=>f(()=>import("./pack~wh-book-stack-t51h0scM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-fiddle-leaf-fig.webp":()=>f(()=>import("./pack~wh-fiddle-leaf-fig-BIG8VejE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-pendant-lamp.webp":()=>f(()=>import("./pack~wh-pendant-lamp-E0Vxk-T2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-snake-plant.webp":()=>f(()=>import("./pack~wh-snake-plant-BhAMe7Q2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-string-lights.webp":()=>f(()=>import("./pack~wh-string-lights-DQyga6dY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-armchair.webp":()=>f(()=>import("./pack~wood-armchair-FBkbAvXv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-bookshelf.webp":()=>f(()=>import("./pack~wood-bookshelf-DPZ9BD1s.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-coffee-table.webp":()=>f(()=>import("./pack~wood-coffee-table-wKKy_41i.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-stool.webp":()=>f(()=>import("./pack~wood-stool-Bp9UA7Rn.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-bouquet.webp":()=>f(()=>import("./ranch-bouquet-Ds6Pxbb7.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-carrot.webp":()=>f(()=>import("./ranch-carrot-DEktCamx.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-egg.webp":()=>f(()=>import("./ranch-egg-DANU-mnz.js"),[]).then(e=>e.default),"../../assets/art/living/tree.webp":()=>f(()=>import("./tree-BEoke6pN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-bottle.webp":()=>f(()=>import("./baby-bottle-eH02ZpRF.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-shelf.webp":()=>f(()=>import("./baby-shelf-BnBA4LnN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby.webp":()=>f(()=>import("./baby-G3Mhmbzp.js"),[]).then(e=>e.default),"../../assets/art/nursery/bassinet.webp":()=>f(()=>import("./bassinet-Dcb727Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/blocks.webp":()=>f(()=>import("./blocks-C_dNzrHE.js"),[]).then(e=>e.default),"../../assets/art/nursery/bunny-plush.webp":()=>f(()=>import("./bunny-plush-CReNy0hM.js"),[]).then(e=>e.default),"../../assets/art/nursery/changing-table.webp":()=>f(()=>import("./changing-table-8B47rw6t.js"),[]).then(e=>e.default),"../../assets/art/nursery/cloud-rug.webp":()=>f(()=>import("./cloud-rug-CnOFLK5B.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib-mobile.webp":()=>f(()=>import("./crib-mobile-C5s-3ue5.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib.webp":()=>f(()=>import("./crib-CGm5_7n1.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-cocoa.webp":()=>f(()=>import("./doll-cocoa-BpjP2qgw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-honey.webp":()=>f(()=>import("./doll-honey-DFaB2lOw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-rose.webp":()=>f(()=>import("./doll-rose-BRjLLFSK.js"),[]).then(e=>e.default),"../../assets/art/nursery/moon-art.webp":()=>f(()=>import("./moon-art-D58c34zl.js"),[]).then(e=>e.default),"../../assets/art/nursery/music-box.webp":()=>f(()=>import("./music-box-BFejHRIi.js"),[]).then(e=>e.default),"../../assets/art/nursery/night-light.webp":()=>f(()=>import("./night-light-CE5H5B5n.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-curtains.webp":()=>f(()=>import("./nursery-curtains-B23Kt1ZB.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-dresser.webp":()=>f(()=>import("./nursery-dresser-C2NMk5Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-lamp.webp":()=>f(()=>import("./nursery-lamp-kB1hvqKc.js"),[]).then(e=>e.default),"../../assets/art/nursery/play-mat.webp":()=>f(()=>import("./play-mat-BiJMY-uv.js"),[]).then(e=>e.default),"../../assets/art/nursery/rattle.webp":()=>f(()=>import("./rattle-D2HX4sEW.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocker.webp":()=>f(()=>import("./rocker-BI-azLzU.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocking-horse.webp":()=>f(()=>import("./rocking-horse-DqsQLxfe.js"),[]).then(e=>e.default),"../../assets/art/nursery/stacking-rings.webp":()=>f(()=>import("./stacking-rings-CDdBQ47A.js"),[]).then(e=>e.default),"../../assets/art/nursery/toy-bin.webp":()=>f(()=>import("./toy-bin-alXY-1yk.js"),[]).then(e=>e.default),"../../assets/art/salon/hairdryer.webp":()=>f(()=>import("./hairdryer-T-lQmTcl.js"),[]).then(e=>e.default),"../../assets/art/salon/perfume.webp":()=>f(()=>import("./perfume-DfvRZm2S.js"),[]).then(e=>e.default),"../../assets/art/salon/polish.webp":()=>f(()=>import("./polish-CXaer2Bw.js"),[]).then(e=>e.default),"../../assets/art/salon/ribbon-tray.webp":()=>f(()=>import("./ribbon-tray-CTIaqA2-.js"),[]).then(e=>e.default),"../../assets/art/salon/stool.webp":()=>f(()=>import("./stool-CUwUwak6.js"),[]).then(e=>e.default),"../../assets/art/salon/vanity.webp":()=>f(()=>import("./vanity-BVbX2a77.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~arched-mirror.webp":()=>f(()=>import("./pack~arched-mirror-sCVjVNZ2.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~boba-cup.webp":()=>f(()=>import("./pack~boba-cup-BpOopnbk.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~mini-fridge.webp":()=>f(()=>import("./pack~mini-fridge-Bz5tI6Y7.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~apple-tree.webp":()=>f(()=>import("./pack~apple-tree-C3QlGloI.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~cozy-mug.webp":()=>f(()=>import("./pack~cozy-mug-BnfHOl91.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~fire-pit.webp":()=>f(()=>import("./pack~fire-pit-CRZJkqqE.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~mini-greenhouse.webp":()=>f(()=>import("./pack~mini-greenhouse-Br8akUdc.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~picnic-basket.webp":()=>f(()=>import("./pack~picnic-basket-COs0Y3zn.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~sale-sign.webp":()=>f(()=>import("./pack~sale-sign-BseEiyKa.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-kitchen-counter.webp":()=>f(()=>import("./pack~wh-kitchen-counter-CxgMV92B.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-teapot.webp":()=>f(()=>import("./pack~wh-teapot-ApJalB1d.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-bauble-garland.webp":()=>f(()=>import("./pack~wc-bauble-garland-BS872JcY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-berry-wreath.webp":()=>f(()=>import("./pack~wc-berry-wreath-DVV9MTc6.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-birch-basket.webp":()=>f(()=>import("./pack~wc-birch-basket-BG8oUtxN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cabin-picture.webp":()=>f(()=>import("./pack~wc-cabin-picture-D8rQKKtK.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-candle-trio.webp":()=>f(()=>import("./pack~wc-candle-trio-B31yzqPC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cane-lamp.webp":()=>f(()=>import("./pack~wc-cane-lamp-UTO0nZql.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cinnamon-tray.webp":()=>f(()=>import("./pack~wc-cinnamon-tray-Cf5bYwPY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-cart.webp":()=>f(()=>import("./pack~wc-cocoa-cart-BrV30F2C.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-mug.webp":()=>f(()=>import("./pack~wc-cocoa-mug-CuYF_PaO.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-pot.webp":()=>f(()=>import("./pack~wc-cocoa-pot-DQ72uD3S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-oven.webp":()=>f(()=>import("./pack~wc-cookie-oven-BjGR4uSY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-plate.webp":()=>f(()=>import("./pack~wc-cookie-plate-BL4xbKJ8.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frost-bookcase.webp":()=>f(()=>import("./pack~wc-frost-bookcase-ZuAQpRxg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frosted-pine.webp":()=>f(()=>import("./pack~wc-frosted-pine-BXtEGG7O.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-fur-bench.webp":()=>f(()=>import("./pack~wc-fur-bench-DxlUyCxG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread-village.webp":()=>f(()=>import("./pack~wc-gingerbread-village-BSiu2hp-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread.webp":()=>f(()=>import("./pack~wc-gingerbread-BRxJDmPf.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-globe-lamp.webp":()=>f(()=>import("./pack~wc-globe-lamp-D7wlZ9-V.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holiday-tree.webp":()=>f(()=>import("./pack~wc-holiday-tree-DyKJPhVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holly.webp":()=>f(()=>import("./pack~wc-holly-EcLJkkKT.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-skates.webp":()=>f(()=>import("./pack~wc-ice-skates-DgS-2YH3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-wardrobe.webp":()=>f(()=>import("./pack~wc-ice-wardrobe-D3zrHXz4.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-knit-armchair.webp":()=>f(()=>import("./pack~wc-knit-armchair-BmhTXUUC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-lantern.webp":()=>f(()=>import("./pack~wc-lantern-ph0Ia33S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-log-bench.webp":()=>f(()=>import("./pack~wc-log-bench-D3yNeXrb.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-marshmallow-jar.webp":()=>f(()=>import("./pack~wc-marshmallow-jar-D5Ztz0iN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-line.webp":()=>f(()=>import("./pack~wc-mitten-line-Ci3Kmp5r.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-ottoman.webp":()=>f(()=>import("./pack~wc-mitten-ottoman-DB5mhikk.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mug-shelf.webp":()=>f(()=>import("./pack~wc-mug-shelf-CCpd1wVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-nutcracker.webp":()=>f(()=>import("./pack~wc-nutcracker-CgbCT2qv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-chair.webp":()=>f(()=>import("./pack~wc-penguin-chair-vB1NvNe-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-plush.webp":()=>f(()=>import("./pack~wc-penguin-plush-C-Ne4Dxi.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-counter.webp":()=>f(()=>import("./pack~wc-peppermint-counter-BTPfnOd_.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-rug.webp":()=>f(()=>import("./pack~wc-peppermint-rug-CGd8vlnV.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-garland.webp":()=>f(()=>import("./pack~wc-pinecone-garland-DMA6H6aW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-table.webp":()=>f(()=>import("./pack~wc-pinecone-table-CcVoxsAa.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-bed.webp":()=>f(()=>import("./pack~wc-plaid-bed-D_HMoB7K.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-sofa.webp":()=>f(()=>import("./pack~wc-plaid-sofa-DOYDgV7y.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-poinsettia.webp":()=>f(()=>import("./pack~wc-poinsettia-Duqpulvr.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-polar-plush.webp":()=>f(()=>import("./pack~wc-polar-plush-Bzs7ScmG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pom-rug.webp":()=>f(()=>import("./pack~wc-pom-rug-Bs5AyRsW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-present-stack.webp":()=>f(()=>import("./pack~wc-present-stack-CNmQKSu2.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-reindeer.webp":()=>f(()=>import("./pack~wc-reindeer-DwfFEqVn.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sled-table.webp":()=>f(()=>import("./pack~wc-sled-table-De30wycC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sleigh-planter.webp":()=>f(()=>import("./pack~wc-sleigh-planter-CRfX9J_0.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-globe.webp":()=>f(()=>import("./pack~wc-snow-globe-BQQApiF3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-mobile.webp":()=>f(()=>import("./pack~wc-snow-mobile-wJ-9gloW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-nightstand.webp":()=>f(()=>import("./pack~wc-snow-nightstand-CBsj30cl.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-window.webp":()=>f(()=>import("./pack~wc-snow-window-D3bSRYDd.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowman.webp":()=>f(()=>import("./pack~wc-snowman-BekK-aTM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowshoes.webp":()=>f(()=>import("./pack~wc-snowshoes-CrVHwfcR.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sock-hamper.webp":()=>f(()=>import("./pack~wc-sock-hamper-DkaXaCbw.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-star-topper.webp":()=>f(()=>import("./pack~wc-star-topper-B-l5aKYW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stocking-row.webp":()=>f(()=>import("./pack~wc-stocking-row-C4vslf6n.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stone-hearth.webp":()=>f(()=>import("./pack~wc-stone-hearth-4EAifiID.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-lamp.webp":()=>f(()=>import("./pack~wc-twinkle-lamp--9BNC_tg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-string.webp":()=>f(()=>import("./pack~wc-twinkle-string-jHZReebI.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-window-seat.webp":()=>f(()=>import("./pack~wc-window-seat-CuMHYvCM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-woodstove.webp":()=>f(()=>import("./pack~wc-woodstove-BH7aoOI1.js"),[]).then(e=>e.default)});function Ec(e){const t=e.split("/").pop()||"";if(t.length<6||t.slice(-5).toLowerCase()!==".webp")return null;const n=decodeURIComponent(t.slice(0,-5)).replace(/~/g,":");return!n||n.startsWith("_")?null:n}const Qf=new Set;for(const e in Ta){const t=Ec(e);t&&Qf.add(t)}function w1(e){return Qf.has(e)}const jr=new Map;function b1(e){for(const t in Ta)if(Ec(t)===e)return Ta[t]}function v1(e){const t=jr.get(e);if(t)return t;const n=b1(e);if(!n)return Promise.resolve(null);const s=n().then(i=>(u1(e,i),e)).catch(()=>(jr.delete(e),null));return jr.set(e,s),s}function wr(e){const t=[...new Set(e)];return Promise.all(t.map(v1)).then(n=>n.filter(s=>s!==null))}function k1(){const e=[];for(const t in Ta){const n=Ec(t);n&&e.push(n)}return wr(e)}function _1(e,t=[]){return y1(e)?wr(t):Promise.resolve([])}const Cc=Object.freeze(Object.defineProperty({__proto__:null,boot:_1,hasArt:w1,loadAllArt:k1,loadArtKinds:wr},Symbol.toStringTag,{value:"Module"})),$e="#5a3d5c",Qe=`stroke="${$e}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,Vo=[{body:"#ffd6e0",roof:"#ff7aa8",door:"#8fd3ff",trim:"#fff6e6"},{body:"#d9f2ff",roof:"#5aa9e6",door:"#ffd166",trim:"#ffffff"},{body:"#e3f9d9",roof:"#5cc985",door:"#ff9f68",trim:"#fffbe6"},{body:"#fff1b8",roof:"#ff9f43",door:"#c9a0dc",trim:"#ffffff"},{body:"#eadcff",roof:"#9b7bd8",door:"#80ed99",trim:"#fff6fb"},{body:"#ffe0c7",roof:"#e07a5f",door:"#5fb0d8",trim:"#fffaf0"},{body:"#d8f5ef",roof:"#2fb3a3",door:"#ff8fab",trim:"#ffffff"},{body:"#fde2f3",roof:"#e879c6",door:"#ffd166",trim:"#fff"}];function Ba(e,t={}){const n=Vo[(e%Vo.length+Vo.length)%Vo.length],s=e%2===1,i=t.lit?"#fff3b0":"#cfe8ff",o=s?`<path d="M22 138 Q22 36 160 30 Q298 36 298 138 Z" fill="${n.roof}" ${Qe}/><path d="M60 110 Q70 60 120 50" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`:`<path d="M14 140 L160 26 L306 140 Z" fill="${n.roof}" ${Qe}/><path d="M70 110 L140 56" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`;return`<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="160" cy="294" rx="150" ry="8" fill="#000" opacity=".12"/>
  <rect x="${s?232:220}" y="${s?36:44}" width="30" height="56" rx="6" fill="${n.trim}" ${Qe}/>
  <rect x="44" y="124" width="232" height="168" rx="20" fill="${n.body}" ${Qe}/>
  ${o}
  <g class="houseWin" fill="${i}"><circle cx="160" cy="${s?92:98}" r="18" ${Qe}/><rect x="62" y="160" width="62" height="58" rx="18" ${Qe}/><rect x="196" y="160" width="62" height="58" rx="18" ${Qe}/></g>
  <path d="M160 ${s?74:80} V${s?110:116} M142 ${s?92:98} H178" ${Qe}/>
  <path d="M93 160 V218 M62 189 H124" ${Qe}/><path d="M227 160 V218 M196 189 H258" ${Qe}/>
  <rect x="56" y="216" width="74" height="16" rx="8" fill="${n.trim}" ${Qe}/><rect x="190" y="216" width="74" height="16" rx="8" fill="${n.trim}" ${Qe}/>
  <circle cx="72" cy="212" r="7" fill="#ff8fab" ${Qe}/><circle cx="92" cy="208" r="7" fill="#ffd166" ${Qe}/><circle cx="112" cy="212" r="7" fill="#ff8fab" ${Qe}/>
  <circle cx="208" cy="212" r="7" fill="#c9a0dc" ${Qe}/><circle cx="228" cy="208" r="7" fill="#80ed99" ${Qe}/><circle cx="248" cy="212" r="7" fill="#c9a0dc" ${Qe}/>
  <path d="M132 292 V226 Q132 196 160 196 Q188 196 188 226 V292 Z" fill="${n.door}" ${Qe}/>
  <circle cx="176" cy="250" r="5" fill="${$e}"/><path d="M146 222 Q160 212 174 222" stroke="#fff" stroke-width="5" fill="none" opacity=".6" stroke-linecap="round"/>
  <rect x="118" y="286" width="84" height="10" rx="5" fill="${n.trim}" ${Qe}/>
</svg>`}const St={street:`<svg viewBox="0 0 48 48"><circle cx="16" cy="15" r="7" fill="#ffd166" stroke="${$e}" stroke-width="3"/><circle cx="32" cy="15" r="7" fill="#ff8fab" stroke="${$e}" stroke-width="3"/><circle cx="13.5" cy="14.5" r="1.2" fill="${$e}"/><circle cx="18.5" cy="14.5" r="1.2" fill="${$e}"/><circle cx="29.5" cy="14.5" r="1.2" fill="${$e}"/><circle cx="34.5" cy="14.5" r="1.2" fill="${$e}"/><path d="M13 18 q3 2.2 6 0 M29 18 q3 2.2 6 0" fill="none" stroke="${$e}" stroke-width="1.6" stroke-linecap="round"/><path d="M8 40 Q16 28 24 33 Q32 38 40 28" fill="none" stroke="#5cc985" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="36" r="2.2" fill="#fff" stroke="${$e}" stroke-width="1.5"/><circle cx="32" cy="32" r="2.2" fill="#fff" stroke="${$e}" stroke-width="1.5"/></svg>`,home:`<svg viewBox="0 0 48 48"><path d="M8 22 L24 8 L40 22 V40 H8 Z" fill="#ffd166" stroke="${$e}" stroke-width="3" stroke-linejoin="round"/><path d="M20 40 V28 H28 V40" fill="#fff" stroke="${$e}" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="20" r="2.4" fill="${$e}"/></svg>`,lockOn:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q33 7 33 16 V22" fill="none" stroke="${$e}" stroke-width="4"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#ffd166" stroke="${$e}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${$e}"/></svg>`,lockOff:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q31 7 32.5 13" fill="none" stroke="${$e}" stroke-width="4" stroke-linecap="round"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#b6f0a8" stroke="${$e}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${$e}"/></svg>`,chat:`<svg viewBox="0 0 48 48"><path d="M8 12 Q8 6 14 6 H34 Q40 6 40 12 V26 Q40 32 34 32 H22 L13 40 V32 Q8 32 8 26 Z" fill="#fff3b0" stroke="${$e}" stroke-width="3" stroke-linejoin="round"/><circle cx="17" cy="19" r="2.5" fill="${$e}"/><circle cx="24" cy="19" r="2.5" fill="${$e}"/><circle cx="31" cy="19" r="2.5" fill="${$e}"/></svg>`,shield:`<svg viewBox="0 0 48 48"><path d="M24 5 L39 11 V23 Q39 36 24 43 Q9 36 9 23 V11 Z" fill="#c9a0dc" stroke="${$e}" stroke-width="3" stroke-linejoin="round"/><path d="M17 24 L22 29 L31 19" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,solo:`<svg viewBox="0 0 48 48"><path d="M8 24 L24 9 L40 24 V41 H8 Z" fill="#ffd166" stroke="${$e}" stroke-width="3" stroke-linejoin="round"/><rect x="19" y="28" width="10" height="13" rx="4" fill="#fff" stroke="${$e}" stroke-width="2.5"/><path d="M33 7 l2 4 4 .5 -3 3 .7 4 -3.7-2 -3.7 2 .7-4 -3-3 4-.5z" fill="#ff8fab" stroke="${$e}" stroke-width="1.5"/></svg>`};function Z(e,t=2600){const n=document.createElement("div");n.className="toast",n.textContent=e,(document.getElementById("toastLane")??document.body).appendChild(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+400)}function qf(){return new Promise(e=>{let t=0,n=0,s="",i=0;const o=document.createElement("div");o.className="sheet adult",o.innerHTML='<div class="card adultCard"></div>',document.body.appendChild(o);const a=o.firstElementChild,r=()=>{t=6+Math.floor(Math.random()*4),n=3+Math.floor(Math.random()*7),s="",l()},l=()=>{a.innerHTML=`<button class="close" data-k="x">✕</button><h2>Grown-ups only</h2><p class="q" data-q="${t*n}">What is ${t} × ${n}?</p>
        <div class="ans">${s||"&nbsp;"}</div>
        <div class="pad">${[1,2,3,4,5,6,7,8,9,"⌫",0,"OK"].map(p=>`<button data-k="${p}">${p}</button>`).join("")}</div>`},c=p=>{o.remove(),e(p)};a.addEventListener("click",p=>{const d=p.target.closest("[data-k]")?.dataset.k;if(d){if(d==="x")return c(!1);if(d==="⌫")s=s.slice(0,-1);else if(d==="OK"){if(+s===t*n)return c(!0);if(++i>=3)return c(!1);a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),400),r();return}else s.length<3&&(s+=d);l()}}),o.addEventListener("click",p=>{p.target===o&&c(!1)}),r()})}let bn=null,Sc=!0;const $1=e=>{Sc=e};function ge(e,t,n="sine",s=0,i=.15){if(Sc)try{bn??=new(window.AudioContext||window.webkitAudioContext),bn.state==="suspended"&&bn.resume().catch(()=>{});const o=bn.createOscillator(),a=bn.createGain(),r=bn.currentTime,l=Math.max(40,e*(.94+Math.random()*.12));o.type=n,o.frequency.setValueAtTime(l,r),s&&o.frequency.exponentialRampToValueAtTime(Math.max(40,l*s),r+t);const c=Math.min(.02,Math.max(.008,t*.22));if(a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),r+c),a.gain.exponentialRampToValueAtTime(.001,r+Math.max(t,c+.02)),n==="square"||n==="sawtooth"){const p=bn.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(1400,r),p.Q.setValueAtTime(.7,r),o.connect(p).connect(a).connect(bn.destination)}else o.connect(a).connect(bn.destination);o.start(r),o.stop(r+t+.02)}catch{}}const z={pick:()=>ge(520,.12,"sine",1.6),drop:()=>{ge(380,.1,"triangle",.7),setTimeout(()=>ge(620,.08,"sine"),60)},pop:()=>ge(800,.15,"square",.3,.08),click:()=>ge(660,.07,"triangle"),swish:()=>ge(300,.25,"sine",2.5,.1),meow:()=>{ge(700,.12,"triangle",1.3,.1),setTimeout(()=>ge(900,.22,"triangle",.6,.1),110)},purr:()=>[0,90,180,270,360].forEach(e=>setTimeout(()=>ge(70,.09,"sawtooth",1,.05),e)),woof:()=>{ge(260,.09,"square",.6,.09),setTimeout(()=>ge(220,.12,"square",.5,.09),130)},spin:()=>ge(400,.35,"sine",2.2,.08),boing:()=>ge(200,.3,"sine",3,.1),splash:()=>[0,50,110].forEach((e,t)=>setTimeout(()=>ge(900-t*200,.12,"triangle",.4,.06),e)),moo:()=>{ge(160,.5,"sawtooth",.8,.07),setTimeout(()=>ge(140,.45,"sawtooth",.85,.06),380)},baa:()=>[0,90,180].forEach(e=>setTimeout(()=>ge(420,.1,"sawtooth",.95,.05),e)),bleat:()=>[0,70,140,210].forEach(e=>setTimeout(()=>ge(520,.07,"square",1.05,.04),e)),oink:()=>{ge(300,.12,"square",.6,.07),setTimeout(()=>ge(330,.12,"square",.55,.07),160)},peep:()=>[0,120,240].forEach((e,t)=>setTimeout(()=>ge(1800+t*150,.07,"sine",1.2,.08),e)),squeak:()=>ge(1400,.1,"sine",1.5,.08),neigh:()=>{ge(700,.5,"sawtooth",.6,.05),[0,60,120,180,240].forEach(e=>setTimeout(()=>ge(620-e,.06,"triangle",1,.04),300+e))},honk:()=>{ge(330,.18,"square",1,.07),setTimeout(()=>ge(330,.25,"square",1,.07),230)},munch:()=>[0,110,220,330].forEach(e=>setTimeout(()=>ge(180+Math.random()*60,.05,"square",.6,.05),e)),cluck:()=>[0,100,180].forEach((e,t)=>setTimeout(()=>ge(600+t*80,.06,"square",.8,.05),e)),plant:()=>{ge(260,.1,"triangle",.6),setTimeout(()=>ge(520,.1,"sine"),90)},water:()=>[0,60,120,180,240].forEach((e,t)=>setTimeout(()=>ge(1200-t*120,.08,"sine",.7,.05),e)),pickup:()=>[660,880,990].forEach((e,t)=>setTimeout(()=>ge(e,.1,"triangle"),t*60)),sparkle:()=>[880,1100,1320].forEach((e,t)=>setTimeout(()=>ge(e,.12),t*70))},Kd=new Map;function x1(e,t){const n=(e?"s":"o")+(t?"f":"n"),s=Kd.get(n);if(s)return s;const a=`<svg viewBox="0 0 200 260" aria-hidden="true">
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
  </svg>`;return Kd.set(n,a),a}const Ji="#5a3d5c";function br(e){return e&&/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():"#f1c27d"}const Uo={x:60,y:118,w:56,h:40};function M1(e,t,n){return n==="lie"&&e==="over"?null:t&&n==="lie"?{d:"M72 172 C36 200 40 228 88 220",sleeve:"M72 172 C52 186 44 196 42 204",hx:88,hy:220}:t&&n==="sit"?e==="under"?{d:"M72 172 C40 190 46 220 108 228",sleeve:"M72 172 C56 178 46 184 42 188",hx:108,hy:228}:{d:"M128 172 C154 192 150 214 118 208",sleeve:"M128 172 C142 180 148 186 150 190",hx:118,hy:208}:t?e==="under"?{d:"M72 172 C40 196 48 222 112 214",sleeve:"M72 172 C56 178 46 184 42 188",hx:112,hy:214}:{d:"M128 172 C158 180 154 200 124 196",sleeve:"M128 172 C144 178 150 184 154 188",hx:124,hy:196}:n==="lie"?{d:"M22 84 C10 112 14 136 46 130",sleeve:"",hx:46,hy:130}:e==="under"?{d:"M22 84 C14 104 12 128 44 130",sleeve:"",hx:44,hy:130}:{d:"M78 84 C90 98 86 118 64 114",sleeve:"",hx:64,hy:114}}function L1(e,t,n){const s=`M${e-8} ${t-1} Q${e-9} ${t-11} ${e} ${t-11} Q${e+9} ${t-11} ${e+9} ${t} Q${e+9} ${t+9} ${e} ${t+10} Q${e-9} ${t+9} ${e-8} ${t-1} Z`,i=`<ellipse cx="${e+8}" cy="${t-2}" rx="3.2" ry="5" fill="${n}" stroke="${Ji}" stroke-width="3.4" transform="rotate(-24 ${e+8} ${t-2})"/>`;return`<path class="cradle-hand" data-cx="${e}" data-cy="${t}" d="${s}" fill="${n}" stroke="${Ji}" stroke-width="3.9"/>${i}`}function Eo(e,t,n,s,i){const o=M1(e,t,s);if(!o)return"";const a=br(n),r=i&&/^#[0-9a-fA-F]{6}$/.test(i)?i.toLowerCase():"",l='fill="none" stroke-linecap="round" stroke-linejoin="round"',c=t?16:12,p=t?20.2:15.5;let d=`<path d="${o.d}" ${l} stroke="${Ji}" stroke-width="${p}"/><path d="${o.d}" ${l} stroke="${a}" stroke-width="${c}"/>`;t&&o.sleeve&&r&&(d+=`<path d="${o.sleeve}" ${l} stroke="${Ji}" stroke-width="29"/><path d="${o.sleeve}" ${l} stroke="${r}" stroke-width="22"/>`);const g=t?L1(o.hx,o.hy,a):`<circle class="cradle-hand" data-cx="${o.hx}" data-cy="${o.hy}" cx="${o.hx}" cy="${o.hy}" r="7" fill="${a}" stroke="${Ji}" stroke-width="3.5"/>`;return`<g class="arm cradle">${d}${g}</g>`}const Qo=110,Ti=148,Xd=80,Jd=57,E1=60,C1=133,S1=42,z1=30,P1=60,T1=129,qo=["feed","burp","change","rock"],Gr=["Bean","Pip","Mochi","Bunny","Dot","Sunny"];function B1(e){let t=null,n=null,s=null,i=!1,o=Number.NaN,a=0,r=0,l=!1,c=!1;const p=typeof navigator<"u"&&!!navigator.webdriver;function d(P,B,N,V,U){P.style.left=(B-V/2)/Pt*100+"%",P.style.top=(N-U)/En*100+"%",P.style.width=V/Pt*100+"%",P.style.height=U/En*100+"%"}function g(P){const B=P.scale&&P.scale>0?P.scale:1,N=P.pose==="sit"||P.pose==="lie"?P.pose:null,V=P.chibi&&P.pose!=="sit"&&P.pose!=="lie",U=V?Uo.x:P.chibi?P1:E1,j=V?Uo.y:P.chibi?T1:C1,fe=V?Uo.w:P.chibi?S1:Xd,Le=V?Uo.h:P.chibi?z1:Jd,me=gu(U,j,N,!!P.lieFlip,B),He=N==="lie"?me.x:P.flip?-me.x:me.x,A=fe*B,O=Le*B;return{x:P.x+He,y:P.y+me.y+O/2,w:A,h:O}}function h(P,B){let N=null,V=0;for(let U=0;U<qo.length;U++){const j=qo[U],fe=P.at?.[j]??0;fe>0&&B-fe>=0&&B-fe<1100&&fe>=V&&(N=j,V=fe)}return N}function m(P){if(P.mood<=2||!e.canSend()){window.clearTimeout(a),o=Number.NaN;return}if(o===P.since)return;window.clearTimeout(a),o=P.since;const B=Math.max(0,P.since+_l-e.clock());a=window.setTimeout(()=>{o=Number.NaN;const N=e.get().baby;!N||N.mood<=2||!e.canSend()||e.dispatch({type:"baby/ease",now:e.clock()})},B)}function b(P,B){window.clearTimeout(r);let N=0;for(let V=0;V<qo.length;V++){const U=P.at?.[qo[V]]??0;B-U>=0&&B-U<1100&&U>N&&(N=U)}N&&(r=window.setTimeout(()=>qe(),Math.max(0,1100-(B-N))))}function _(P,B){if(typeof document.elementsFromPoint!="function")return null;const N=document.elementsFromPoint(P,B),V=e.get(),U=V.rooms[V.currentRoom]?.items??[];for(let j=0;j<N.length;j++){const fe=N[j];if(!fe||typeof fe.closest!="function"||fe.closest(".baby, .babyCare, .babyMeet"))continue;const Le=fe.closest(".item");if(!Le)continue;const me=Le.dataset.id||"";for(let He=0;He<U.length;He++){const A=U[He];if(A.id===me&&(Ts(A.kind)||e.box(A)))return A}}return null}function y(P){P.addEventListener("pointerdown",B=>{if(B.button!==0)return;const N=e.get().baby;if(!N)return;if(B.preventDefault(),B.stopPropagation(),N.spot==="arms"&&N.holder&&N.holder!==e.holderId()&&e.holderHere(N.holder)){Z("Someone is cuddling!");return}if(!e.editable()){e.locked();return}if(!e.canSend())return;const V=e.owner(),U=V,j=B.clientX,fe=B.clientY,Le=B.pointerId;let me=!1;const He=O=>{if(O.pointerId!==Le||(Math.hypot(O.clientX-j,O.clientY-fe)>6&&(me=!0),!U||!me))return;i=!0;const Ye=e.toRoom(O.clientX,O.clientY);d(P,Ye.x,Ye.y,Qo,Ti)},A=O=>{if(O.pointerId!==Le)return;window.removeEventListener("pointermove",He),window.removeEventListener("pointerup",A),window.removeEventListener("pointercancel",A);const Ye=i&&me&&U;if(i=!1,O.type==="pointercancel"){qe();return}if(Ye){const pt=document.elementFromPoint(O.clientX,O.clientY)?.closest(".tab[data-room]");if(pt&&pt.dataset.room){const Ci=pt.dataset.room,a0=e.toRoom(O.clientX,O.clientY),xd=Su(a0.x,Pt);Ci!==e.get().currentRoom&&e.dispatch({type:"room/switch",room:Ci}),e.dispatch({type:"baby/place",room:Ci,x:xd.x,y:xd.y,spot:"mat",bed:null,seat:null,now:e.clock()}),z.drop();return}const ds=e.toRoom(O.clientX,O.clientY),on=_(O.clientX,O.clientY),Vr=on?e.box(on):null,ps=Cu({mode:e.play()?"play":"decorate",releaseX:Math.max(0,Math.min(Pt,ds.x)),releaseY:Math.max(0,Math.min(En,ds.y)),piece:Vr,occupied:e.occupied()});e.dispatch({type:"baby/place",room:e.get().currentRoom,x:ps.x,y:ps.y,spot:ps.spot,bed:ps.bed,seat:ps.seat,now:e.clock()}),z.drop();return}if(me){qe();return}const at=e.get().baby;if(!at)return;if(at.spot==="arms"&&at.holder===e.holderId()){const pt=e.toRoom(O.clientX,O.clientY);e.dispatch({type:"baby/hold",holder:null,room:e.get().currentRoom,x:Math.max(0,Math.min(Pt,pt.x)),y:Math.max(40,Math.min(En,pt.y)),now:e.clock()}),z.drop();return}const Oe=e.holderSpot(),Be=Oe?g(Oe):null,Ee=Be?Be.x:at.x,dt=Be?Math.max(40,Be.y):at.y;e.dispatch({type:"baby/hold",holder:e.holderId(),room:e.get().currentRoom,x:Ee,y:dt,now:e.clock()}),z.pick()};window.addEventListener("pointermove",He),window.addEventListener("pointerup",A),window.addEventListener("pointercancel",A)})}function u(){return t&&t.isConnected||(t=document.createElement("div"),t.className="baby",t.dataset.baby="1",t.innerHTML='<div class="hit"></div><div class="babySpin"><div class="babyRock"><div class="babyInner"></div></div></div><div class="babyZzz" hidden>z z z</div><div class="babyBurp" hidden><i></i></div>',e.layer.appendChild(t),y(t)),t}function k(P,B){const N=P.querySelector(".babyWord");N&&(N.textContent=wu(B));const V=P.querySelectorAll(".babyBlossom"),U=bu(B);for(let fe=0;fe<V.length;fe++)V[fe].classList.toggle("on",fe<U);const j=P.querySelector(".babyMeter");j&&(j.dataset.mood=String(B))}function x(P){const B=If(P);if(!B){Z("Try another name!");return}const N=e.get().baby;!N||N.name===B||(e.dispatch({type:"baby/name",name:B}),z.click())}function R(P){n=document.createElement("div"),n.className="babyCare",n.dataset.babyCare="1";const B=[];for(let U=0;U<5;U++)B.push('<i class="babyBlossom"></i>');const N=[];for(let U=0;U<Gr.length;U++)N.push(`<button type="button" data-preset="${Gr[U]}">${Gr[U]}</button>`);n.innerHTML=`<p class="babyWord"></p><span class="babyMeter"><span class="babyBlossoms">${B.join("")}</span></span>
      <button type="button" data-care="feed">Bottle</button>
      <button type="button" data-care="burp">Burp</button>
      <button type="button" data-care="change">Diaper</button>
      <button type="button" data-care="rock">Rock</button>
      <button type="button" data-baby-name-open>Name</button>
      <div class="babyNames" hidden>
        <input type="text" maxlength="14" autocomplete="off" enterkeyhint="done" aria-label="Baby name" value="">
        ${N.join("")}
      </div>`,k(n,P.mood),n.addEventListener("pointerdown",U=>U.stopPropagation()),n.addEventListener("click",U=>{const j=U.target,fe=j.closest("[data-care]");if(fe&&fe.dataset.care){if(!e.editable()){e.locked();return}if(!e.canSend())return;const me=fe.dataset.care;e.dispatch({type:"baby/care",care:me,now:e.clock()}),me==="rock"?z.purr():me==="feed"?z.sparkle():z.click();return}if(j.closest("[data-baby-name-open]")){if(!e.owner())return;c=!c;const me=n?.querySelector(".babyNames");me&&(me.hidden=!c);const He=n?.querySelector("input");c&&He&&(He.value=e.get().baby?.name??"",He.focus());return}const Le=j.closest("[data-preset]");if(Le&&e.owner()){x(Le.dataset.preset||"");return}}),n.querySelector("input")?.addEventListener("keydown",U=>{U.key==="Enter"&&(U.preventDefault(),x(U.target.value))}),e.stageWrap.appendChild(n)}function H(P,B){if(!e.play()){I();return}const N=n&&document.activeElement&&n.contains(document.activeElement);if((!n||!n.isConnected)&&R(P),!n)return;n.hidden=!1,k(n,P.mood);const V=n.querySelector("[data-baby-name-open]");V&&(V.hidden=!B);const U=n.querySelector(".babyNames");U&&(U.hidden=!B||!c);const j=n.querySelector("input");j&&!N&&(j.value=P.name),X()}function I(){c=!1,n&&(n.remove(),n=null),X()}function X(){const P=!!(n&&n.isConnected&&!n.hidden),B=document.body.classList.contains("baby-card");document.body.classList.toggle("baby-card",P),B!==P&&window.dispatchEvent(new Event("resize"))}function le(P){if(!P||p){s&&(s.remove(),s=null);return}if(s&&s.isConnected){s.hidden=!1;return}s=document.createElement("button"),s.type="button",s.className="babyMeet",s.textContent="Meet the baby",s.addEventListener("pointerdown",B=>B.stopPropagation()),s.addEventListener("click",()=>{if(!e.editable()){e.locked();return}!e.canSend()||e.get().baby||(e.dispatch({type:"baby/meet",now:e.clock()}),z.sparkle())}),e.stageWrap.appendChild(s)}function ce(){const P=e.get().rooms.nursery?.items??[];for(let B=0;B<P.length;B++)if(Ts(P[B].kind)==="crib")return!0;return!1}function G(P,B){P.classList.remove("baby-lie","baby-lie-r","baby-cradle","cradle-lie","flipped");const N=e.get().currentRoom;if((B.spot==="crib"||B.spot==="bassinet")&&B.bed){const V=e.get().rooms[B.room]?.items.find(j=>j.id===B.bed)??null,U=V?e.box(V):null;if(V&&U){const j=xf(V.kind,U);d(P,j.x,j.y+Ti/2,Qo,Ti),P.style.zIndex=String(1e3+V.z+1),P.classList.add("baby-lie"),V.flip&&P.classList.add("baby-lie-r");return}}if(B.spot==="arms"){const V=B.holder?e.holderSpot(B.holder):null,U=V?g(V):null,j=U?U.x:B.x,fe=U?U.y:B.y,Le=U?U.w:Xd,me=U?U.h:Jd;d(P,j,fe,Le,me),P.style.zIndex=String(5e3+Math.round(V?V.y:B.y)+2),P.classList.add("baby-cradle"),P.style.setProperty("--spin-w",(me/Le*100).toFixed(4)+"%"),P.style.setProperty("--spin-h",(Le/me*100).toFixed(4)+"%"),V&&V.pose==="lie"&&P.classList.add("cradle-lie"),V&&(V.pose==="lie"?V.lieFlip:V.flip)&&P.classList.add("flipped");return}if(B.spot==="mat"&&B.seat){const V=e.seatAt(N,B.seat,B);d(P,V.x,V.y,Qo,Ti);const U=e.get().rooms[N]?.items.find(j=>j.id===B.seat?.item);P.style.zIndex=String(1e3+(U?.z??0)+1),B.seat.pose==="lie"&&(P.classList.add("baby-lie"),U?.flip&&P.classList.add("baby-lie-r"));return}d(P,B.x,B.y,Qo,Ti),P.style.zIndex=String(5e3+Math.round(B.y))}function pe(P){if(P.spot!=="arms"||!P.holder)return!1;const B=e.get().characters.find(N=>N.id===P.holder);return!!B&&B.room!==P.room}function sn(P){i||!pe(P)||!e.canSend()||!e.editable()||e.dispatch({type:"baby/hold",holder:null,room:P.room,x:P.x,y:Mo,now:e.clock()})}function Ht(P){if(i||pe(P)||P.spot!=="arms"||P.holder!==e.holderId()||!e.canSend()||!e.editable())return;const B=e.holderSpot();if(!B)return;const N=e.get().currentRoom;if(P.room===N)return;const V=g(B);e.dispatch({type:"baby/hold",holder:P.holder,room:N,x:V.x,y:Math.max(40,V.y),now:e.clock()})}function qe(){const P=e.get(),B=P.baby,N=!!B&&B.spot==="arms"&&!!B.holder&&!!e.holderSpot(B.holder),V=!!B&&B.spot==="arms"&&B.holder===e.holderId()&&!!e.holderSpot(),U=!!(B&&e.inHouse()&&(B.room===P.currentRoom||N||V));if(!B||!U){t&&(t.remove(),t=null),i=!1,I(),window.clearTimeout(a),o=Number.NaN;const Ee=!p&&!B&&e.inHouse()&&e.owner()&&e.editable()&&e.canSend()&&P.currentRoom==="nursery"&&ce();le(Ee);return}le(!1),yi()&&!As("baby")&&!l&&(l=!0,wr(["baby"]).then(()=>qe()));const j=u(),fe=e.clock(),Le=h(B,fe),me=Le==="rock",He=Le==="change",A=!me&&!He&&yi()?As("baby"):"",O=j.querySelector(".babyInner"),Ye=(A||"svg")+(me?"s":"")+(He?"f":"");O&&j.dataset.look!==Ye&&(O.innerHTML=A?`<img class="artimg" alt="" draggable="false" src="${A}">`:x1(me,He),j.dataset.look=Ye),j.dataset.babySpot=B.spot,j.dataset.babyMood=String(B.mood),j.dataset.babyName=B.name,j.classList.toggle("is-feed",Le==="feed"),j.classList.toggle("is-burp",Le==="burp"),j.classList.toggle("is-change",Le==="change"),j.classList.toggle("is-rock",Le==="rock");const at=j.querySelector(".babyZzz"),Oe=j.querySelector(".babyBurp"),Be=(B.spot==="crib"||B.spot==="bassinet")&&!Le;at&&(at.hidden=!Be),Oe&&(Oe.hidden=Le!=="burp"),i&&j.isConnected||G(j,B),H(B,e.owner()),m(B),b(B,fe),sn(B),Ht(B)}return{render:qe}}const R1={hip:0,head:3,armL:26,armR:-22,legL:-76,legR:76,legLLift:8,legRLift:8},A1={hip:0,head:-8,armL:18,armR:-12,legL:-4,legR:6,legLLift:0,legRLift:0};function vr(e){return e==="sit"?R1:e==="lie"?A1:null}const Ne="#5a3d5c",te=(e=4)=>`stroke="${Ne}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,zc=600,jt=250,hs=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})">
  <rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${te()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${te()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${te()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${te()}/>
  <circle cx="-18" cy="-78" r="9" fill="#fff" opacity=".35"/></g>`,D1=(e,t,n)=>`<g transform="translate(${e} ${t})"><path d="M0 0 V-16" ${te(3)}/>${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*6}" cy="${-20+Math.sin(s*Math.PI/180)*6}" r="5" fill="${n}" ${te(2)}/>`).join("")}<circle cx="0" cy="-20" r="4" fill="#ffd166" ${te(2)}/></g>`,ep=e=>`<g transform="translate(${e} 0)">
  <rect x="-80" y="452" width="160" height="12" rx="6" fill="#ff9f68" ${te()}/><rect x="-80" y="470" width="160" height="12" rx="6" fill="#ff9f68" ${te()}/>
  <rect x="-70" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${te(3)}/><rect x="60" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${te(3)}/>
  <rect x="-86" y="490" width="172" height="14" rx="7" fill="#ffb385" ${te()}/></g>`;function I1(){const e=Lc,t=Array.from({length:Math.floor((lt.x1-lt.x0+40)/34)},(n,s)=>`<path d="M${lt.x0-20+s*34} 470 V428 l8 -10 l8 10 V470 Z" fill="#fff6e6" ${te(3)}/>`).join("");return`<svg class="parkScene" viewBox="0 0 ${e} ${zc}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="pkSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#eaf7ff"/></linearGradient>
  <pattern id="pkCheck" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#fff"/><rect width="15" height="15" fill="#ff8fab"/><rect x="15" y="15" width="15" height="15" fill="#ff8fab"/></pattern></defs>
  <rect width="${e}" height="440" fill="url(#pkSky)"/>
  ${[180,900,1600,2300].map((n,s)=>`<g transform="translate(${n} ${70+s%2*30})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <circle cx="${e-220}" cy="90" r="46" fill="#ffe066" ${te(4)}/>
  <path d="M-50 360 Q500 220 1100 340 T2300 330 T${e+100} 350 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#9fe0aa"/><path d="M0 410 H${e}" ${te(4)}/>
  <path d="M0 560 Q700 520 1400 565 T${e} 545 V600 H0 Z" fill="#f6e3c3" opacity=".9"/>
  ${hs(260,390,.9)}${hs(720,380,1.05,"#4fbf7a")}${hs(1230,385,.8)}${hs(1640,380,1,"#4fbf7a")}${hs(1990,388,.85)}${hs(2380,380,.95)}${hs(2860,390,.9,"#4fbf7a")}
  ${[[300,470,"#ff8fab"],[690,455,"#c9a0dc"],[1210,470,"#ffd166"],[1960,450,"#8ecae6"],[2390,470,"#ff8fab"],[1580,590,"#c9a0dc"],[140,585,"#ffd166"]].map(([n,s,i])=>D1(+n,+s,String(i))).join("")}
  <!-- gate back to the street -->
  <g><rect x="40" y="300" width="22" height="200" rx="6" fill="#c99366" ${te()}/><rect x="168" y="300" width="22" height="200" rx="6" fill="#c99366" ${te()}/>
    <path d="M30 312 Q115 240 200 312" fill="none" stroke="${Ne}" stroke-width="16" stroke-linecap="round"/><path d="M30 312 Q115 240 200 312" fill="none" stroke="#ff9f68" stroke-width="9" stroke-linecap="round"/>
    <rect x="62" y="252" width="106" height="36" rx="12" fill="#fff6e6" ${te(3)}/><text x="115" y="278" text-anchor="middle" font-size="22" font-weight="900" fill="${Ne}" font-family="Nunito, system-ui, sans-serif">PARK</text></g>
  <!-- swing set (seats are separate so they can swing) -->
  <g><path d="M350 ${jt} L310 500 M350 ${jt} L390 500 M650 ${jt} L610 500 M650 ${jt} L690 500" stroke="${Ne}" stroke-width="14" stroke-linecap="round"/>
    <path d="M350 ${jt} L310 500 M350 ${jt} L390 500 M650 ${jt} L610 500 M650 ${jt} L690 500" stroke="#8ecae6" stroke-width="7" stroke-linecap="round"/>
    <rect x="330" y="${jt-10}" width="340" height="20" rx="10" fill="#ff8fab" ${te()}/></g>
  <!-- slide -->
  <g><path d="M${he.ladder-20} 560 V${he.top.y} M${he.ladder+30} 560 V${he.top.y}" stroke="${Ne}" stroke-width="12" stroke-linecap="round"/>
    <path d="M${he.ladder-20} 560 V${he.top.y} M${he.ladder+30} 560 V${he.top.y}" stroke="#c9a0dc" stroke-width="6" stroke-linecap="round"/>
    ${[380,420,460,500,540].map(n=>`<path d="M${he.ladder-20} ${n} H${he.ladder+30}" ${te(5)}/>`).join("")}
    <rect x="${he.ladder-30}" y="${he.top.y-14}" width="100" height="18" rx="8" fill="#ffd166" ${te()}/>
    <path d="M${he.ladder+60} ${he.top.y-10} C 1000 ${he.top.y} 1010 520 ${he.bottom.x+40} 548 L${he.bottom.x+40} 572 C 990 548 975 ${he.top.y+30} ${he.ladder+60} ${he.top.y+14} Z" fill="#ffd166" ${te()}/>
    <path d="M${he.ladder+70} ${he.top.y-2} C 990 ${he.top.y+8} 1000 525 ${he.bottom.x+30} 552" fill="none" stroke="#fff3b0" stroke-width="6" stroke-linecap="round"/></g>
  <!-- splash pond -->
  <g class="pondArt"><ellipse cx="1420" cy="515" rx="185" ry="52" fill="#8ecae6" ${te()}/><ellipse cx="1420" cy="510" rx="150" ry="36" fill="#b5e3f5"/>
    <ellipse cx="1340" cy="520" rx="24" ry="9" fill="#80ed99" ${te(3)}/><ellipse cx="1500" cy="505" rx="20" ry="8" fill="#80ed99" ${te(3)}/>
    <g transform="translate(1440 500)"><ellipse cx="0" cy="0" rx="20" ry="12" fill="#ffd166" ${te(3)}/><circle cx="16" cy="-12" r="9" fill="#ffd166" ${te(3)}/><path d="M24 -12 l8 2 l-8 3 z" fill="#ff9f68" ${te(2)}/><circle cx="18" cy="-14" r="1.8" fill="${Ne}"/></g></g>
  <!-- picnic blanket -->
  <g><path d="M1670 530 L1910 530 L1940 580 L1640 580 Z" fill="url(#pkCheck)" ${te()}/>
    <g transform="translate(1915 520)"><rect x="-26" y="-20" width="52" height="32" rx="8" fill="#e6b88a" ${te(3)}/><path d="M-18 -20 Q0 -46 18 -20" fill="none" ${te(4)}/><circle cx="-10" cy="-24" r="7" fill="#ff6b6b" ${te(2)}/></g></g>
  ${ep(2065)}${ep(2265)}
  <!-- dog area -->
  <g>${t}<path d="M${lt.x0-20} 440 H${lt.x1+20}" ${te(3)}/>
    <g transform="translate(${lt.x0+10} 380)"><rect x="-6" y="0" width="12" height="70" fill="#c99366" ${te(3)}/><rect x="-55" y="-34" width="110" height="38" rx="10" fill="#fff6e6" ${te(3)}/>
      <text x="0" y="-8" text-anchor="middle" font-size="20" font-weight="900" fill="${Ne}" font-family="Nunito, system-ui, sans-serif">DOGS 🐾</text></g>
    <g transform="translate(${lt.x1-30} 470)"><path d="M-50 0 V-60 L0 -100 L50 -60 V0 Z" fill="#ff8fab" ${te()}/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="${Ne}" stroke-width="14" stroke-linecap="round"/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="#c9a0dc" stroke-width="8" stroke-linecap="round"/><path d="M-20 0 V-30 a20 20 0 0 1 40 0 V0 Z" fill="#5a3d5c"/></g>
    <g transform="translate(${lt.x0+120} 500)"><rect x="-12" y="-30" width="24" height="34" rx="8" fill="#ff6b6b" ${te(3)}/><rect x="-18" y="-18" width="36" height="8" rx="4" fill="#ff6b6b" ${te(3)}/><circle cx="0" cy="-32" r="10" fill="#ff6b6b" ${te(3)}/></g></g>
  </svg>`}const H1=`<svg viewBox="0 0 60 240" preserveAspectRatio="none"><path d="M10 0 V222 M50 0 V222" stroke="${Ne}" stroke-width="4"/><rect x="0" y="216" width="60" height="14" rx="6" fill="#ff9f68" ${te(3)}/></svg>`,O1=`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#ffd166" ${te(3)}/><path d="M6 16 Q20 24 34 16 M8 27 Q20 19 32 27" fill="none" stroke="#fff" stroke-width="3"/></svg>`,W1=`<svg viewBox="0 0 48 48"><rect x="20" y="28" width="8" height="14" rx="3" fill="#c99366" stroke="${Ne}" stroke-width="3"/><circle cx="24" cy="20" r="13" fill="#5cc985" stroke="${Ne}" stroke-width="3"/><circle cx="19" cy="16" r="3" fill="#fff" opacity=".5"/></svg>`,Zf=`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="31" rx="10" ry="8" fill="#ff8fab" stroke="${Ne}" stroke-width="3"/><circle cx="13" cy="20" r="4.5" fill="#ff8fab" stroke="${Ne}" stroke-width="3"/><circle cx="20" cy="13" r="4.5" fill="#ff8fab" stroke="${Ne}" stroke-width="3"/><circle cx="28" cy="13" r="4.5" fill="#ff8fab" stroke="${Ne}" stroke-width="3"/><circle cx="35" cy="20" r="4.5" fill="#ff8fab" stroke="${Ne}" stroke-width="3"/></svg>`,V1=`<svg viewBox="0 0 48 48"><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="${Ne}" stroke-width="4" stroke-linecap="round"/><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="#ff9f68" stroke-width="2"/><path d="M16 40 V26 M24 40 V22 M32 40 V26" stroke="${Ne}" stroke-width="3" stroke-linecap="round"/></svg>`,vt="#5a3d5c",ke=`stroke="${vt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Yr=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="3" fill="${vt}"/><circle cx="${t}" cy="${n}" r="3" fill="${vt}"/><circle cx="${e+1}" cy="${n-1}" r="1" fill="#fff"/><circle cx="${t+1}" cy="${n-1}" r="1" fill="#fff"/>`,Kr=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/><ellipse cx="${t}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/>`,Zo='<ellipse cx="50" cy="97" rx="34" ry="3" fill="#000" opacity=".12"/>',U1=`<svg viewBox="0 0 40 30"><path d="M4 30 V16 Q4 2 20 2 Q36 2 36 16 V30 Z" fill="#3b2a3d" ${ke}/><circle cx="14" cy="18" r="1.6" fill="#fff" opacity=".8"/><circle cx="22" cy="18" r="1.6" fill="#fff" opacity=".8"/></svg>`,Q1=`<svg viewBox="0 0 48 30"><path d="M4 27 Q10 22 22 23 L42 23 Q46 27 42 28 H6 Z" fill="#cdeccf" ${ke}/><circle cx="26" cy="15" r="11" fill="#ffb3c6" ${ke}/><path d="M26 15 m-5 0 a5 5 0 1 1 5 5" fill="none" ${ke}/><path d="M8 23 L5 13 M12 23 L12 13" ${ke}/></svg>`,q1=`<svg viewBox="0 0 30 30"><path d="M15 2 l3.6 8 8.4 1 -6.3 5.8 1.8 8.4 -7.5 -4.4 -7.5 4.4 1.8 -8.4 L3 11 l8.4 -1z" fill="#fff3b0" ${ke}/></svg>`,Z1=`<svg viewBox="0 0 30 22"><ellipse cx="15" cy="13" rx="13" ry="8" fill="#e6b88a" ${ke}/><circle cx="10" cy="11" r="1.8" fill="${vt}"/><circle cx="18" cy="14" r="1.8" fill="${vt}"/><circle cx="16" cy="9" r="1.5" fill="${vt}"/></svg>`,N1=`<svg viewBox="0 0 30 28"><path d="M15 26 C3 18 1 10 6 5 C10 1 14 4 15 7 C16 4 20 1 24 5 C29 10 27 18 15 26 Z" fill="#ffc8dd" ${ke}/></svg>`,Ra=[{name:"Cada",room:"living",x:150,y:382,w:40,h:30,taps:3,spot:U1,hello:"Squeak! Hi Cada!",item:{kind:"egg:cada-mouse",name:"Cada's Mouse",cat:"secrets",w:80,holdable:!0,svg:`${Zo}<path d="M78 74 Q96 68 92 52" stroke="#ff9bb5" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="28" ry="18" fill="#d6d6e8" ${ke}/><circle cx="28" cy="40" r="13" fill="#d6d6e8" ${ke}/><circle cx="62" cy="38" r="13" fill="#d6d6e8" ${ke}/><circle cx="28" cy="40" r="7" fill="#ffc8dd"/><circle cx="62" cy="38" r="7" fill="#ffc8dd"/><circle cx="45" cy="56" r="20" fill="#e4e4f2" ${ke}/>${Yr(38,52,54)}<circle cx="45" cy="64" r="3" fill="#ff8fab"/>${Kr(32,58,62)}<text x="50" y="96" font-size="11" font-weight="900" text-anchor="middle" fill="${vt}">C</text>`}},{name:"Sloane",room:"living",x:2290,y:383,w:48,h:30,taps:3,spot:Q1,hello:"Hi Sloane! ✨",item:{kind:"egg:sloane-snail",name:"Sloane's Rainbow Snail",cat:"secrets",w:110,holdable:!0,svg:`${Zo}<path d="M6 92 Q14 80 36 82 L84 82 Q94 90 84 94 H10 Z" fill="#cdeccf" ${ke}/><circle cx="56" cy="52" r="32" fill="#ff8fab" ${ke}/><circle cx="56" cy="52" r="24" fill="#ffd166"/><circle cx="56" cy="52" r="17" fill="#80ed99"/><circle cx="56" cy="52" r="10" fill="#8ecae6"/><circle cx="56" cy="52" r="4" fill="#c9a0dc"/><circle cx="56" cy="52" r="32" fill="none" ${ke}/><path d="M14 82 L8 60 M24 82 L24 60" ${ke}/><circle cx="8" cy="58" r="4" fill="${vt}"/><circle cx="24" cy="58" r="4" fill="${vt}"/>${Kr(14,30,76)}`}},{name:"Chloe",room:"bedroom",x:2230,y:92,w:30,h:30,taps:5,spot:q1,item:{kind:"egg:chloe-starlamp",name:"Chloe's Star Lamp",cat:"secrets",w:100,holdable:!0,svg:`${Zo}<circle cx="50" cy="38" r="34" fill="#fff3b0" opacity=".6"/><path d="M50 6 l8 17 19 2.5 -14 13 4 19 -17 -9.5 -17 9.5 4 -19 -14 -13 19 -2.5z" fill="#ffd166" ${ke}/>${Yr(43,57,38)}<path d="M45 46 q5 4 10 0" ${ke} fill="none"/><rect x="46" y="66" width="8" height="22" rx="4" fill="#c9a0dc" ${ke}/><ellipse cx="50" cy="90" rx="22" ry="6" fill="#b388d6" ${ke}/><text x="50" y="93" font-size="8" font-weight="900" text-anchor="middle" fill="#fff">CHLOE</text>`}},{name:"Quinn",room:"kitchen",x:80,y:588,w:30,h:22,taps:4,spot:Z1,hello:"Woof! Hi Quinn!",item:{kind:"egg:quinn-pup",name:"Quinn's Cookie Pup",cat:"secrets",w:110,holdable:!0,svg:`${Zo}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#e6b88a" ${ke}/><circle cx="50" cy="44" r="27" fill="#f2d0a4" ${ke}/><ellipse cx="24" cy="46" rx="10" ry="17" fill="#b07d54" ${ke}/><ellipse cx="76" cy="46" rx="10" ry="17" fill="#b07d54" ${ke}/>${Yr(41,59,42)}<ellipse cx="50" cy="53" rx="5" ry="4" fill="${vt}"/>${Kr(34,66,54)}<circle cx="84" cy="80" r="10" fill="#e6b88a" ${ke}/><circle cx="81" cy="78" r="1.8" fill="${vt}"/><circle cx="87" cy="82" r="1.8" fill="${vt}"/><text x="50" y="30" font-size="10" font-weight="900" text-anchor="middle" fill="${vt}">Q</text>`}},{name:"Reagan",room:"salon",x:2300,y:352,w:30,h:28,taps:5,spot:N1,item:{kind:"egg:reagan-frame",name:"Reagan's Frame",cat:"secrets",w:120,wall:!0,svg:`<rect x="8" y="10" width="84" height="84" rx="16" fill="#ff8fab" ${ke}/><rect x="18" y="20" width="64" height="64" rx="10" fill="#fff3f7" ${ke}/><text x="50" y="72" font-size="52" font-weight="900" text-anchor="middle" fill="#e879c6" stroke="${vt}" stroke-width="2.5">R</text><circle cx="14" cy="16" r="6" fill="#ffd166" ${ke}/><circle cx="86" cy="88" r="6" fill="#ffd166" ${ke}/><path d="M76 24 l2 4 4 .5 -3 3 .7 4 -3.7 -2 -3.7 2 .7 -4 -3 -3 4 -.5z" fill="#ffd166"/>`}}],F1=Ra.map(e=>({...e.item,rooms:["any"],secret:e.name})),Nf=Nt("cozy-secrets"),kr=()=>{try{return new Set(JSON.parse(localStorage.getItem(Nf)??"[]"))}catch{return new Set}},j1=e=>localStorage.setItem(Nf,JSON.stringify([...e]));function G1(e){const t=document.createElement("div");t.className="eggs",e.world.appendChild(t);const n=new Map;for(const i of Ra){const o=document.createElement("div");o.className="eggspot",o.dataset.egg=i.name,o.style.left=(i.x-i.w/2)/e.roomW*100+"%",o.style.top=(i.y-i.h)/e.roomH*100+"%",o.style.width=i.w/e.roomW*100+"%",o.style.height=i.h/e.roomH*100+"%",o.innerHTML=i.spot,t.appendChild(o),o.addEventListener("pointerdown",a=>a.stopPropagation()),o.addEventListener("click",a=>{a.stopPropagation();const r=Date.now(),l=n.get(i.name)??{n:0,t:0};if(l.n=r-l.t<1500?l.n+1:1,l.t=r,n.set(i.name,l),o.classList.remove("poke"),o.offsetWidth,o.classList.add("poke"),e.tap(),l.n<i.taps)return;l.n=0;const c=kr(),p=!c.has(i.name);c.add(i.name),j1(c),Y1(i,o),e.sparkle(),e.onFound(i.name,p)})}const s=()=>{const i=e.currentRoom();t.querySelectorAll(".eggspot").forEach(o=>{o.style.display=Ra.find(a=>a.name===o.dataset.egg).room===i?"":"none"})};return s(),{update:s}}function Y1(e,t){if(e.hello){const s=document.createElement("div");s.className="eggpop",s.innerHTML=`<div class="eggcritter"><svg viewBox="0 0 100 100">${e.item.svg}</svg></div><div class="bubble">${e.hello}</div>`,t.appendChild(s),setTimeout(()=>s.remove(),3200)}const n=document.createElement("div");n.className="eggbanner",n.innerHTML=`<span class="sp">✨</span><span class="nm">${[...e.name].map((s,i)=>`<i style="animation-delay:${i*70}ms">${s}</i>`).join("")}</span><span class="sp">✨</span>`,document.body.appendChild(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3100),Ff()}function Ff(e=70){const t=["#ff8fab","#ffd166","#8ecae6","#80ed99","#c9a0dc","#ff9f68"],n=document.createElement("div");n.className="confetti",document.body.appendChild(n);for(let s=0;s<e;s++){const i=document.createElement("i");i.style.left=Math.random()*100+"vw",i.style.background=t[s%t.length],i.style.animationDelay=Math.random()*.5+"s",i.style.animationDuration=1.6+Math.random()*1.2+"s",i.style.setProperty("--r",Math.random()*720-360+"deg"),i.style.setProperty("--dx",Math.random()*160-80+"px"),s%3===0&&(i.style.borderRadius="50%"),n.appendChild(i)}setTimeout(()=>n.remove(),3600)}const K1=`[
  {
    "type": "item",
    "slug": "comfy-armchair",
    "name": "Comfy Chair",
    "room": "living",
    "category": "furniture",
    "tag": "furniture",
    "size": "large",
    "svg": "living/comfy-armchair.svg",
    "png": "living/comfy-armchair.png",
    "widthUnits": 161.7,
    "heightUnits": 162.5,
    "gameW": 161.7,
    "viewBox": [
      1.0,
      2.5,
      98.0,
      98.5
    ],
    "pngPx": [
      1082,
      1088
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
    "png": "living/daisy-rug.png",
    "widthUnits": 306.0,
    "heightUnits": 108.0,
    "gameW": 306.0,
    "viewBox": [
      -1.0,
      64.0,
      102.0,
      36.0
    ],
    "pngPx": [
      2048,
      723
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
    "png": "living/monstera-plant.png",
    "widthUnits": 158.2,
    "heightUnits": 145.6,
    "gameW": 158.2,
    "viewBox": [
      -6.5,
      -3.0,
      113.0,
      104.0
    ],
    "pngPx": [
      1059,
      974
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
    "png": "bedroom/canopy-bed.png",
    "widthUnits": 294.0,
    "heightUnits": 294.0,
    "gameW": 294.0,
    "viewBox": [
      1.0,
      3.0,
      98.0,
      98.0
    ],
    "pngPx": [
      1968,
      1968
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
    "png": "bedroom/cat-bed.png",
    "widthUnits": 112.8,
    "heightUnits": 91.2,
    "gameW": 112.8,
    "viewBox": [
      3.0,
      25.0,
      94.0,
      76.0
    ],
    "pngPx": [
      755,
      610
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
    "png": "bedroom/moon-night-light.png",
    "widthUnits": 57.7,
    "heightUnits": 70.0,
    "gameW": 57.7,
    "holdable": true,
    "viewBox": [
      7.0,
      1.0,
      82.5,
      100.0
    ],
    "pngPx": [
      386,
      468
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
    "png": "bedroom/dino-plush.png",
    "widthUnits": 78.3,
    "heightUnits": 90.9,
    "gameW": 78.3,
    "holdable": true,
    "viewBox": [
      11.0,
      0.0,
      87.0,
      101.0
    ],
    "pngPx": [
      524,
      608
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
    "png": "kitchen/happy-fridge.png",
    "widthUnits": 132.6,
    "heightUnits": 170.0,
    "gameW": 132.6,
    "viewBox": [
      11.0,
      1.0,
      78.0,
      100.0
    ],
    "pngPx": [
      887,
      1138
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
    "png": "kitchen/toaster.png",
    "widthUnits": 70.4,
    "heightUnits": 73.6,
    "gameW": 70.4,
    "holdable": true,
    "viewBox": [
      9.0,
      9.0,
      88.0,
      92.0
    ],
    "pngPx": [
      471,
      493
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
    "png": "kitchen/fruit-bowl.png",
    "widthUnits": 75.2,
    "heightUnits": 70.0,
    "gameW": 75.2,
    "holdable": true,
    "viewBox": [
      3.0,
      13.5,
      94.0,
      87.5
    ],
    "pngPx": [
      503,
      468
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
    "png": "living/coffee-table.png",
    "widthUnits": 159.8,
    "heightUnits": 102.0,
    "gameW": 159.8,
    "viewBox": [
      3.0,
      41.0,
      94.0,
      60.0
    ],
    "pngPx": [
      1070,
      683
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
    "png": "living/bean-bag.png",
    "widthUnits": 112.8,
    "heightUnits": 87.6,
    "gameW": 112.8,
    "viewBox": [
      3.0,
      28.0,
      94.0,
      73.0
    ],
    "pngPx": [
      755,
      586
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
    "png": "living/pouf.png",
    "widthUnits": 62.4,
    "heightUnits": 52.0,
    "gameW": 62.4,
    "viewBox": [
      11.0,
      36.0,
      78.0,
      65.0
    ],
    "pngPx": [
      418,
      348
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
    "png": "living/rocking-chair.png",
    "widthUnits": 137.2,
    "heightUnits": 136.5,
    "gameW": 137.2,
    "viewBox": [
      1.0,
      3.5,
      98.0,
      97.5
    ],
    "pngPx": [
      918,
      914
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
    "png": "living/cubby-shelf.png",
    "widthUnits": 159.8,
    "heightUnits": 125.8,
    "gameW": 159.8,
    "viewBox": [
      3.0,
      27.0,
      94.0,
      74.0
    ],
    "pngPx": [
      1070,
      842
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
    "png": "living/piano.png",
    "widthUnits": 186.2,
    "heightUnits": 174.8,
    "gameW": 186.2,
    "viewBox": [
      1.0,
      9.0,
      98.0,
      92.0
    ],
    "pngPx": [
      1246,
      1170
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
    "png": "living/fireplace.png",
    "widthUnits": 204.0,
    "heightUnits": 180.0,
    "gameW": 204.0,
    "viewBox": [
      -1.0,
      11.0,
      102.0,
      90.0
    ],
    "pngPx": [
      1365,
      1205
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
    "png": "living/tv-stand.png",
    "widthUnits": 176.4,
    "heightUnits": 90.0,
    "gameW": 176.4,
    "viewBox": [
      1.0,
      51.0,
      98.0,
      50.0
    ],
    "pngPx": [
      1181,
      602
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
    "png": "living/arc-floor-lamp.png",
    "widthUnits": 135.0,
    "heightUnits": 146.2,
    "gameW": 135.0,
    "viewBox": [
      3.0,
      3.5,
      90.0,
      97.5
    ],
    "pngPx": [
      904,
      978
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
    "png": "living/string-lights.png",
    "widthUnits": 262.6,
    "heightUnits": 68.9,
    "gameW": 262.6,
    "wall": true,
    "viewBox": [
      -0.5,
      17.5,
      101.0,
      26.5
    ],
    "pngPx": [
      1758,
      461
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
    "png": "living/tassel-rug.png",
    "widthUnits": 294.0,
    "heightUnits": 100.5,
    "gameW": 294.0,
    "viewBox": [
      1.0,
      67.0,
      98.0,
      33.5
    ],
    "pngPx": [
      1968,
      673
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
    "png": "living/rainbow-rug.png",
    "widthUnits": 254.8,
    "heightUnits": 66.3,
    "gameW": 254.8,
    "viewBox": [
      1.0,
      68.5,
      98.0,
      25.5
    ],
    "pngPx": [
      1705,
      444
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
    "png": "living/rainbow-wall-art.png",
    "widthUnits": 130.2,
    "heightUnits": 67.2,
    "gameW": 130.2,
    "wall": true,
    "viewBox": [
      -3.5,
      27.0,
      108.5,
      56.0
    ],
    "pngPx": [
      871,
      450
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
    "png": "living/wall-shelf.png",
    "widthUnits": 156.8,
    "heightUnits": 100.0,
    "gameW": 156.8,
    "wall": true,
    "viewBox": [
      1.0,
      14.5,
      98.0,
      62.5
    ],
    "pngPx": [
      1049,
      669
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
    "png": "living/globe.png",
    "widthUnits": 49.7,
    "heightUnits": 63.7,
    "gameW": 49.7,
    "holdable": true,
    "viewBox": [
      9.0,
      10.0,
      71.0,
      91.0
    ],
    "pngPx": [
      333,
      426
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
    "png": "living/tulip-vase.png",
    "widthUnits": 44.8,
    "heightUnits": 76.4,
    "gameW": 44.8,
    "holdable": true,
    "viewBox": [
      22.0,
      5.5,
      56.0,
      95.5
    ],
    "pngPx": [
      300,
      511
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
    "png": "living/fiddle-leaf-fig.png",
    "widthUnits": 118.8,
    "heightUnits": 195.7,
    "gameW": 118.8,
    "viewBox": [
      18.5,
      -2.0,
      62.5,
      103.0
    ],
    "pngPx": [
      795,
      1310
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
    "png": "living/hanging-planter.png",
    "widthUnits": 67.0,
    "heightUnits": 98.0,
    "gameW": 67.0,
    "wall": true,
    "viewBox": [
      17.0,
      -2.5,
      67.0,
      98.0
    ],
    "pngPx": [
      448,
      656
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
    "png": "living/snake-plant.png",
    "widthUnits": 68.2,
    "heightUnits": 103.4,
    "gameW": 68.2,
    "viewBox": [
      19.0,
      7.0,
      62.0,
      94.0
    ],
    "pngPx": [
      456,
      692
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
    "png": "living/succulent-trio.png",
    "widthUnits": 81.0,
    "heightUnits": 66.2,
    "gameW": 81.0,
    "holdable": true,
    "viewBox": [
      5.0,
      27.5,
      90.0,
      73.5
    ],
    "pngPx": [
      542,
      443
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
    "png": "living/throw-pillow.png",
    "widthUnits": 53.4,
    "heightUnits": 52.2,
    "gameW": 53.4,
    "holdable": true,
    "viewBox": [
      5.5,
      14.0,
      89.0,
      87.0
    ],
    "pngPx": [
      357,
      349
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
    "png": "living/blanket-basket.png",
    "widthUnits": 77.4,
    "heightUnits": 72.9,
    "gameW": 77.4,
    "viewBox": [
      7.0,
      20.0,
      86.0,
      81.0
    ],
    "pngPx": [
      518,
      488
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
    "png": "living/building-blocks.png",
    "widthUnits": 69.0,
    "heightUnits": 63.0,
    "gameW": 69.0,
    "holdable": true,
    "viewBox": [
      5.0,
      17.0,
      92.0,
      84.0
    ],
    "pngPx": [
      462,
      422
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
    "png": "living/toy-car.png",
    "widthUnits": 65.8,
    "heightUnits": 54.6,
    "gameW": 65.8,
    "holdable": true,
    "viewBox": [
      3.0,
      23.0,
      94.0,
      78.0
    ],
    "pngPx": [
      440,
      365
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
    "png": "living/rocking-horse.png",
    "widthUnits": 128.7,
    "heightUnits": 127.4,
    "gameW": 128.7,
    "viewBox": [
      0.5,
      3.0,
      99.0,
      98.0
    ],
    "pngPx": [
      861,
      853
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
    "png": "living/popcorn.png",
    "widthUnits": 41.8,
    "heightUnits": 50.9,
    "gameW": 41.8,
    "holdable": true,
    "viewBox": [
      12.0,
      8.5,
      76.0,
      92.5
    ],
    "pngPx": [
      280,
      341
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
    "png": "living/bird-cage.png",
    "widthUnits": 99.0,
    "heightUnits": 111.7,
    "gameW": 99.0,
    "viewBox": [
      5.0,
      -0.5,
      90.0,
      101.5
    ],
    "pngPx": [
      663,
      748
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
    "png": "living/turtle.png",
    "widthUnits": 67.9,
    "heightUnits": 46.2,
    "gameW": 67.9,
    "holdable": true,
    "viewBox": [
      1.0,
      35.0,
      97.0,
      66.0
    ],
    "pngPx": [
      454,
      309
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
    "png": "living/aquarium.png",
    "widthUnits": 163.2,
    "heightUnits": 134.4,
    "gameW": 163.2,
    "viewBox": [
      -1.0,
      17.0,
      102.0,
      84.0
    ],
    "pngPx": [
      1092,
      900
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
    "png": "bedroom/bunk-bed.png",
    "widthUnits": 294.0,
    "heightUnits": 300.0,
    "gameW": 294.0,
    "viewBox": [
      1.0,
      1.0,
      98.0,
      100.0
    ],
    "pngPx": [
      1968,
      2008
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
    "png": "bedroom/dresser.png",
    "widthUnits": 141.0,
    "heightUnits": 126.0,
    "gameW": 141.0,
    "viewBox": [
      3.0,
      17.0,
      94.0,
      84.0
    ],
    "pngPx": [
      944,
      843
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
    "png": "bedroom/nightstand.png",
    "widthUnits": 69.7,
    "heightUnits": 59.5,
    "gameW": 69.7,
    "viewBox": [
      9.0,
      31.0,
      82.0,
      70.0
    ],
    "pngPx": [
      466,
      398
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
    "png": "bedroom/wardrobe.png",
    "widthUnits": 150.5,
    "heightUnits": 178.5,
    "gameW": 150.5,
    "viewBox": [
      7.0,
      -1.0,
      86.0,
      102.0
    ],
    "pngPx": [
      1007,
      1195
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
    "png": "bedroom/desk.png",
    "widthUnits": 166.6,
    "heightUnits": 166.6,
    "gameW": 166.6,
    "viewBox": [
      1.0,
      3.0,
      98.0,
      98.0
    ],
    "pngPx": [
      1115,
      1115
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
    "png": "bedroom/toy-chest.png",
    "widthUnits": 126.0,
    "heightUnits": 114.8,
    "gameW": 126.0,
    "viewBox": [
      5.0,
      19.0,
      90.0,
      82.0
    ],
    "pngPx": [
      843,
      768
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
    "png": "bedroom/play-tent.png",
    "widthUnits": 180.0,
    "heightUnits": 200.0,
    "gameW": 180.0,
    "viewBox": [
      5.0,
      1.0,
      90.0,
      100.0
    ],
    "pngPx": [
      1205,
      1339
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
    "png": "bedroom/egg-chair.png",
    "widthUnits": 126.0,
    "heightUnits": 154.5,
    "gameW": 126.0,
    "viewBox": [
      9.0,
      -2.0,
      84.0,
      103.0
    ],
    "pngPx": [
      843,
      1034
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
    "png": "bedroom/alarm-clock.png",
    "widthUnits": 40.7,
    "heightUnits": 51.2,
    "gameW": 40.7,
    "holdable": true,
    "viewBox": [
      13.0,
      8.0,
      74.0,
      93.0
    ],
    "pngPx": [
      272,
      343
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
    "png": "bedroom/lava-lamp.png",
    "widthUnits": 33.0,
    "heightUnits": 50.0,
    "gameW": 33.0,
    "holdable": true,
    "viewBox": [
      17.0,
      1.0,
      66.0,
      100.0
    ],
    "pngPx": [
      221,
      335
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
    "png": "bedroom/paper-lantern.png",
    "widthUnits": 91.8,
    "heightUnits": 98.5,
    "gameW": 91.8,
    "wall": true,
    "viewBox": [
      -1.0,
      -2.5,
      102.0,
      109.5
    ],
    "pngPx": [
      614,
      659
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
    "png": "bedroom/heart-rug.png",
    "widthUnits": 217.8,
    "heightUnits": 77.0,
    "gameW": 217.8,
    "viewBox": [
      0.5,
      65.0,
      99.0,
      35.0
    ],
    "pngPx": [
      1458,
      515
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
    "png": "bedroom/cloud-rug.png",
    "widthUnits": 258.7,
    "heightUnits": 98.8,
    "gameW": 258.7,
    "viewBox": [
      1.5,
      63.0,
      99.5,
      38.0
    ],
    "pngPx": [
      1731,
      661
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
    "png": "bedroom/cloud-shelf.png",
    "widthUnits": 118.2,
    "heightUnits": 60.6,
    "gameW": 118.2,
    "wall": true,
    "viewBox": [
      0.5,
      20.5,
      98.5,
      50.5
    ],
    "pngPx": [
      791,
      406
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
    "png": "bedroom/star-mobile.png",
    "widthUnits": 102.3,
    "heightUnits": 105.1,
    "gameW": 102.3,
    "wall": true,
    "viewBox": [
      3.5,
      -2.5,
      93.0,
      95.5
    ],
    "pngPx": [
      685,
      703
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
    "png": "bedroom/cork-board.png",
    "widthUnits": 127.4,
    "heightUnits": 98.8,
    "gameW": 127.4,
    "wall": true,
    "viewBox": [
      1.0,
      11.0,
      98.0,
      76.0
    ],
    "pngPx": [
      853,
      661
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
    "png": "bedroom/bunny-slippers.png",
    "widthUnits": 54.0,
    "heightUnits": 45.6,
    "gameW": 54.0,
    "holdable": true,
    "viewBox": [
      5.0,
      25.0,
      90.0,
      76.0
    ],
    "pngPx": [
      361,
      305
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
    "png": "bedroom/book-stack.png",
    "widthUnits": 47.3,
    "heightUnits": 38.5,
    "gameW": 47.3,
    "holdable": true,
    "viewBox": [
      7.0,
      31.0,
      86.0,
      70.0
    ],
    "pngPx": [
      317,
      258
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
    "png": "bedroom/piggy-bank.png",
    "widthUnits": 52.8,
    "heightUnits": 51.6,
    "gameW": 52.8,
    "holdable": true,
    "viewBox": [
      9.0,
      15.0,
      88.0,
      86.0
    ],
    "pngPx": [
      353,
      345
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
    "png": "bedroom/doll-house.png",
    "widthUnits": 109.2,
    "heightUnits": 131.6,
    "gameW": 109.2,
    "viewBox": [
      11.0,
      7.0,
      78.0,
      94.0
    ],
    "pngPx": [
      731,
      881
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
    "png": "bedroom/toy-robot.png",
    "widthUnits": 60.2,
    "heightUnits": 72.4,
    "gameW": 60.2,
    "holdable": true,
    "viewBox": [
      7.0,
      -2.5,
      86.0,
      103.5
    ],
    "pngPx": [
      403,
      485
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
    "png": "bedroom/unicorn-plush.png",
    "widthUnits": 66.3,
    "heightUnits": 90.1,
    "gameW": 66.3,
    "holdable": true,
    "viewBox": [
      11.0,
      -5.0,
      78.0,
      106.0
    ],
    "pngPx": [
      444,
      603
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
    "png": "bedroom/toy-train.png",
    "widthUnits": 114.4,
    "heightUnits": 115.0,
    "gameW": 114.4,
    "viewBox": [
      1.0,
      -3.5,
      104.0,
      104.5
    ],
    "pngPx": [
      766,
      770
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
    "png": "bedroom/plant-stand.png",
    "widthUnits": 78.1,
    "heightUnits": 107.8,
    "gameW": 78.1,
    "viewBox": [
      14.5,
      3.0,
      71.0,
      98.0
    ],
    "pngPx": [
      523,
      721
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
    "png": "bedroom/daisy-pot.png",
    "widthUnits": 37.7,
    "heightUnits": 57.2,
    "gameW": 37.7,
    "holdable": true,
    "viewBox": [
      21.0,
      13.0,
      58.0,
      88.0
    ],
    "pngPx": [
      252,
      383
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
    "png": "bedroom/hamster-cage.png",
    "widthUnits": 112.8,
    "heightUnits": 119.4,
    "gameW": 112.8,
    "viewBox": [
      3.0,
      1.5,
      94.0,
      99.5
    ],
    "pngPx": [
      755,
      799
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
    "png": "bedroom/guinea-pig.png",
    "widthUnits": 51.6,
    "heightUnits": 41.7,
    "gameW": 51.6,
    "holdable": true,
    "viewBox": [
      9.0,
      31.5,
      86.0,
      69.5
    ],
    "pngPx": [
      345,
      279
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
    "png": "kitchen/kitchen-counter.png",
    "widthUnits": 166.6,
    "heightUnits": 146.2,
    "gameW": 166.6,
    "viewBox": [
      1.0,
      15.0,
      98.0,
      86.0
    ],
    "pngPx": [
      1115,
      978
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
    "png": "kitchen/kitchen-sink.png",
    "widthUnits": 166.6,
    "heightUnits": 162.3,
    "gameW": 166.6,
    "viewBox": [
      1.0,
      5.5,
      98.0,
      95.5
    ],
    "pngPx": [
      1115,
      1086
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
    "png": "kitchen/bar-stool.png",
    "widthUnits": 52.8,
    "heightUnits": 68.8,
    "gameW": 52.8,
    "viewBox": [
      17.0,
      15.0,
      66.0,
      86.0
    ],
    "pngPx": [
      353,
      460
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
    "png": "kitchen/high-chair.png",
    "widthUnits": 88.0,
    "heightUnits": 99.0,
    "gameW": 88.0,
    "viewBox": [
      7.0,
      11.0,
      80.0,
      90.0
    ],
    "pngPx": [
      589,
      663
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
    "png": "kitchen/china-hutch.png",
    "widthUnits": 164.5,
    "heightUnits": 171.5,
    "gameW": 164.5,
    "viewBox": [
      3.0,
      3.0,
      94.0,
      98.0
    ],
    "pngPx": [
      1101,
      1148
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
    "png": "kitchen/pantry-shelf.png",
    "widthUnits": 137.6,
    "heightUnits": 153.6,
    "gameW": 137.6,
    "viewBox": [
      7.0,
      5.0,
      86.0,
      96.0
    ],
    "pngPx": [
      921,
      1028
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
    "png": "kitchen/microwave.png",
    "widthUnits": 89.3,
    "heightUnits": 70.3,
    "gameW": 89.3,
    "viewBox": [
      3.0,
      27.0,
      94.0,
      74.0
    ],
    "pngPx": [
      598,
      471
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
    "png": "kitchen/kettle.png",
    "widthUnits": 49.2,
    "heightUnits": 56.4,
    "gameW": 49.2,
    "holdable": true,
    "viewBox": [
      15.0,
      7.0,
      82.0,
      94.0
    ],
    "pngPx": [
      329,
      377
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
    "png": "kitchen/rice-cooker.png",
    "widthUnits": 55.9,
    "heightUnits": 53.0,
    "gameW": 55.9,
    "holdable": true,
    "viewBox": [
      7.0,
      19.5,
      86.0,
      81.5
    ],
    "pngPx": [
      374,
      355
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
    "png": "kitchen/stand-mixer.png",
    "widthUnits": 64.5,
    "heightUnits": 67.5,
    "gameW": 64.5,
    "viewBox": [
      7.0,
      11.0,
      86.0,
      90.0
    ],
    "pngPx": [
      432,
      452
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
    "png": "kitchen/pendant-lamp.png",
    "widthUnits": 78.0,
    "heightUnits": 103.5,
    "gameW": 78.0,
    "wall": true,
    "viewBox": [
      11.0,
      -2.5,
      78.0,
      103.5
    ],
    "pngPx": [
      522,
      693
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
    "png": "kitchen/runner-rug.png",
    "widthUnits": 207.2,
    "heightUnits": 105.0,
    "gameW": 207.2,
    "viewBox": [
      13.0,
      63.0,
      74.0,
      37.5
    ],
    "pngPx": [
      1387,
      703
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
    "png": "kitchen/utensil-rail.png",
    "widthUnits": 127.4,
    "heightUnits": 94.2,
    "gameW": 127.4,
    "wall": true,
    "viewBox": [
      1.0,
      7.0,
      98.0,
      72.5
    ],
    "pngPx": [
      853,
      630
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
    "png": "kitchen/spice-rack.png",
    "widthUnits": 107.8,
    "heightUnits": 56.7,
    "gameW": 107.8,
    "wall": true,
    "viewBox": [
      1.0,
      25.5,
      98.0,
      51.5
    ],
    "pngPx": [
      721,
      379
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
    "png": "kitchen/cookie-jar.png",
    "widthUnits": 43.8,
    "heightUnits": 54.0,
    "gameW": 43.8,
    "holdable": true,
    "viewBox": [
      13.5,
      11.0,
      73.0,
      90.0
    ],
    "pngPx": [
      293,
      361
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
    "png": "kitchen/teapot.png",
    "widthUnits": 55.5,
    "heightUnits": 43.8,
    "gameW": 55.5,
    "holdable": true,
    "viewBox": [
      5.0,
      28.0,
      92.5,
      73.0
    ],
    "pngPx": [
      371,
      293
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
    "png": "kitchen/cocoa-mug.png",
    "widthUnits": 33.8,
    "heightUnits": 36.6,
    "gameW": 33.8,
    "holdable": true,
    "viewBox": [
      15.0,
      9.5,
      84.5,
      91.5
    ],
    "pngPx": [
      226,
      245
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
    "png": "kitchen/cooking-pot.png",
    "widthUnits": 73.5,
    "heightUnits": 66.0,
    "gameW": 73.5,
    "holdable": true,
    "viewBox": [
      1.0,
      13.0,
      98.0,
      88.0
    ],
    "pngPx": [
      492,
      442
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
    "png": "kitchen/frying-pan.png",
    "widthUnits": 80.4,
    "heightUnits": 40.4,
    "gameW": 80.4,
    "holdable": true,
    "viewBox": [
      3.0,
      50.5,
      100.5,
      50.5
    ],
    "pngPx": [
      538,
      270
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
    "png": "kitchen/herb-box.png",
    "widthUnits": 110.0,
    "heightUnits": 83.6,
    "gameW": 110.0,
    "viewBox": [
      0.0,
      25.0,
      100.0,
      76.0
    ],
    "pngPx": [
      736,
      560
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
    "png": "kitchen/lemon-tree.png",
    "widthUnits": 79.8,
    "heightUnits": 120.0,
    "gameW": 79.8,
    "viewBox": [
      18.0,
      1.0,
      66.5,
      100.0
    ],
    "pngPx": [
      534,
      803
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
    "png": "kitchen/bananas.png",
    "widthUnits": 44.5,
    "heightUnits": 42.5,
    "gameW": 44.5,
    "holdable": true,
    "viewBox": [
      14.0,
      17.0,
      89.0,
      85.0
    ],
    "pngPx": [
      298,
      284
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
    "png": "kitchen/watermelon-slice.png",
    "widthUnits": 45.0,
    "heightUnits": 34.0,
    "gameW": 45.0,
    "holdable": true,
    "viewBox": [
      5.0,
      33.0,
      90.0,
      68.0
    ],
    "pngPx": [
      301,
      228
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
    "png": "kitchen/pancakes.png",
    "widthUnits": 56.4,
    "heightUnits": 47.1,
    "gameW": 56.4,
    "holdable": true,
    "viewBox": [
      3.0,
      22.5,
      94.0,
      78.5
    ],
    "pngPx": [
      377,
      315
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
    "png": "kitchen/ice-cream.png",
    "widthUnits": 18.4,
    "heightUnits": 39.8,
    "gameW": 18.4,
    "holdable": true,
    "viewBox": [
      27.0,
      -0.5,
      46.0,
      99.5
    ],
    "pngPx": [
      123,
      266
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
    "png": "kitchen/milk-bottle.png",
    "widthUnits": 23.2,
    "heightUnits": 37.6,
    "gameW": 23.2,
    "holdable": true,
    "viewBox": [
      21.0,
      7.0,
      58.0,
      94.0
    ],
    "pngPx": [
      155,
      252
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
    "png": "kitchen/bread-loaf.png",
    "widthUnits": 48.4,
    "heightUnits": 44.0,
    "gameW": 48.4,
    "holdable": true,
    "viewBox": [
      6.0,
      21.0,
      88.0,
      80.0
    ],
    "pngPx": [
      324,
      294
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
    "png": "kitchen/cupcake.png",
    "widthUnits": 32.9,
    "heightUnits": 44.8,
    "gameW": 32.9,
    "holdable": true,
    "viewBox": [
      13.5,
      1.5,
      73.0,
      99.5
    ],
    "pngPx": [
      220,
      300
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
    "png": "kitchen/dish-rack.png",
    "widthUnits": 76.5,
    "heightUnits": 67.6,
    "gameW": 76.5,
    "viewBox": [
      5.0,
      21.5,
      90.0,
      79.5
    ],
    "pngPx": [
      512,
      452
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
    "png": "kitchen/pet-bowl.png",
    "widthUnits": 49.5,
    "heightUnits": 34.4,
    "gameW": 49.5,
    "holdable": true,
    "viewBox": [
      5.0,
      38.5,
      90.0,
      62.5
    ],
    "pngPx": [
      331,
      230
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
    "png": "kitchen/chick.png",
    "widthUnits": 37.4,
    "heightUnits": 37.6,
    "gameW": 37.4,
    "holdable": true,
    "viewBox": [
      8.5,
      17.5,
      83.0,
      83.5
    ],
    "pngPx": [
      250,
      252
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
    "png": "living/retro-radio.png",
    "widthUnits": 63.0,
    "heightUnits": 70.0,
    "gameW": 63.0,
    "holdable": true,
    "viewBox": [
      5.0,
      1.0,
      90.0,
      100.0
    ],
    "pngPx": [
      422,
      468
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
    "png": "bedroom/floor-fan.png",
    "widthUnits": 52.8,
    "heightUnits": 78.4,
    "gameW": 52.8,
    "viewBox": [
      17.0,
      3.0,
      66.0,
      98.0
    ],
    "pngPx": [
      353,
      525
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
    "png": "bedroom/bedtime-snack.png",
    "widthUnits": 56.4,
    "heightUnits": 44.4,
    "gameW": 56.4,
    "holdable": true,
    "viewBox": [
      3.0,
      27.0,
      94.0,
      74.0
    ],
    "pngPx": [
      377,
      297
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
    "svg": "packs/welcome-home/wood-bookshelf.svg",
    "png": "packs/welcome-home/wood-bookshelf.png"
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
    "svg": "packs/welcome-home/lattice-bench.svg",
    "png": "packs/welcome-home/lattice-bench.png"
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
    "svg": "packs/welcome-home/wood-coffee-table.svg",
    "png": "packs/welcome-home/wood-coffee-table.png"
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
    "svg": "packs/welcome-home/wood-desk.svg",
    "png": "packs/welcome-home/wood-desk.png"
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
    "svg": "packs/welcome-home/big-wardrobe.svg",
    "png": "packs/welcome-home/big-wardrobe.png"
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
    "svg": "packs/welcome-home/glass-cabinet.svg",
    "png": "packs/welcome-home/glass-cabinet.png"
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
    "svg": "packs/welcome-home/ladder-shelf.svg",
    "png": "packs/welcome-home/ladder-shelf.png"
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
    "png": "packs/welcome-home/moving-box.png",
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
    "svg": "packs/welcome-home/box-stack.svg",
    "png": "packs/welcome-home/box-stack.png"
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
    "svg": "packs/welcome-home/wh-fiddle-leaf-fig.svg",
    "png": "packs/welcome-home/wh-fiddle-leaf-fig.png"
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
    "svg": "packs/welcome-home/apple-tree.svg",
    "png": "packs/welcome-home/apple-tree.png"
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
    "svg": "packs/welcome-home/mini-greenhouse.svg",
    "png": "packs/welcome-home/mini-greenhouse.png"
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
    "svg": "packs/welcome-home/brick-fireplace.svg",
    "png": "packs/welcome-home/brick-fireplace.png"
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
    "png": "packs/welcome-home/wh-string-lights.png",
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
    "svg": "packs/welcome-home/wh-pendant-lamp.svg",
    "png": "packs/welcome-home/wh-pendant-lamp.png"
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
    "svg": "packs/welcome-home/wh-arc-floor-lamp.svg",
    "png": "packs/welcome-home/wh-arc-floor-lamp.png"
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
    "svg": "packs/welcome-home/cream-sofa.svg",
    "png": "packs/welcome-home/cream-sofa.png"
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
    "svg": "packs/welcome-home/wooden-bed.svg",
    "png": "packs/welcome-home/wooden-bed.png"
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
    "png": "packs/welcome-home/bulletin-board.png",
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
    "png": "packs/welcome-home/landscape-art.png",
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
    "svg": "packs/welcome-home/sale-sign.svg",
    "png": "packs/welcome-home/sale-sign.png"
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
    "svg": "packs/welcome-home/fire-pit.svg",
    "png": "packs/welcome-home/fire-pit.png"
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
    "svg": "packs/welcome-home/hanging-lantern.svg",
    "png": "packs/welcome-home/hanging-lantern.png"
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
    "svg": "packs/welcome-home/round-rug.svg",
    "png": "packs/welcome-home/round-rug.png"
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
    "svg": "packs/welcome-home/stripe-runner.svg",
    "png": "packs/welcome-home/stripe-runner.png"
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
    "svg": "packs/welcome-home/wood-armchair.svg",
    "png": "packs/welcome-home/wood-armchair.png"
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
    "svg": "packs/welcome-home/wh-nightstand.svg",
    "png": "packs/welcome-home/wh-nightstand.png"
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
    "svg": "packs/welcome-home/wh-kitchen-counter.svg",
    "png": "packs/welcome-home/wh-kitchen-counter.png"
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
    "svg": "packs/welcome-home/wood-stool.svg",
    "png": "packs/welcome-home/wood-stool.png"
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
    "svg": "packs/welcome-home/wh-dresser.svg",
    "png": "packs/welcome-home/wh-dresser.png"
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
    "svg": "packs/welcome-home/wh-snake-plant.svg",
    "png": "packs/welcome-home/wh-snake-plant.png"
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
    "png": "packs/welcome-home/sprout-pot.png",
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
    "png": "packs/welcome-home/trailing-plant.png",
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
    "png": "packs/welcome-home/acorn-friend.png",
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
    "png": "packs/welcome-home/wh-teapot.png",
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
    "png": "packs/welcome-home/cozy-mug.png",
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
    "png": "packs/welcome-home/wh-book-stack.png",
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
    "png": "packs/welcome-home/knit-cushion.png",
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
    "png": "packs/welcome-home/picnic-basket.png",
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
    "svg": "packs/welcome-home/leaf-wreath.svg",
    "png": "packs/welcome-home/leaf-wreath.png"
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
    "png": "packs/welcome-home/wall-clock.png",
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
    "svg": "packs/sunny-vibes/ring-light.svg",
    "png": "packs/sunny-vibes/ring-light.png"
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
    "png": "packs/sunny-vibes/phone-stand.png",
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
    "svg": "packs/sunny-vibes/gaming-chair.svg",
    "png": "packs/sunny-vibes/gaming-chair.png"
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
    "svg": "packs/sunny-vibes/curvy-desk.svg",
    "png": "packs/sunny-vibes/curvy-desk.png"
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
    "svg": "packs/sunny-vibes/cloud-sofa.svg",
    "png": "packs/sunny-vibes/cloud-sofa.png"
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
    "svg": "packs/sunny-vibes/arched-mirror.svg",
    "png": "packs/sunny-vibes/arched-mirror.png"
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
    "svg": "packs/sunny-vibes/clothes-rail.svg",
    "png": "packs/sunny-vibes/clothes-rail.png"
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
    "svg": "packs/sunny-vibes/cube-shelf.svg",
    "png": "packs/sunny-vibes/cube-shelf.png"
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
    "svg": "packs/sunny-vibes/big-monitor.svg",
    "png": "packs/sunny-vibes/big-monitor.png"
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
    "png": "packs/sunny-vibes/keyboard.png",
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
    "png": "packs/sunny-vibes/vlog-camera.png",
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
    "png": "packs/sunny-vibes/desk-mic.png",
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
    "svg": "packs/sunny-vibes/star-lamp.svg",
    "png": "packs/sunny-vibes/star-lamp.png"
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
    "svg": "packs/sunny-vibes/flower-lamp.svg",
    "png": "packs/sunny-vibes/flower-lamp.png"
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
    "png": "packs/sunny-vibes/boba-cup.png",
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
    "svg": "packs/sunny-vibes/mini-fridge.svg",
    "png": "packs/sunny-vibes/mini-fridge.png"
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
    "svg": "packs/sunny-vibes/bubble-bath.svg",
    "png": "packs/sunny-vibes/bubble-bath.png"
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
    "svg": "packs/sunny-vibes/checker-rug.svg",
    "png": "packs/sunny-vibes/checker-rug.png"
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
    "svg": "packs/sunny-vibes/sv-cloud-rug.svg",
    "png": "packs/sunny-vibes/sv-cloud-rug.png"
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
    "png": "packs/sunny-vibes/caterpillar-plush.png",
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
    "png": "packs/sunny-vibes/frog-plush.png",
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
    "png": "packs/sunny-vibes/hamster-pet.png",
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
    "png": "packs/sunny-vibes/sunny-art.png",
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
    "svg": "packs/sunny-vibes/pothos-plant.svg",
    "png": "packs/sunny-vibes/pothos-plant.png"
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
    "png": "packs/sunny-vibes/cactus-buddy.png",
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
    "svg": "packs/sunny-vibes/checker-bed.svg",
    "png": "packs/sunny-vibes/checker-bed.png"
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
    "svg": "packs/sunny-vibes/puffy-stool.svg",
    "png": "packs/sunny-vibes/puffy-stool.png"
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
    "svg": "packs/sunny-vibes/sv-wall-shelf.svg",
    "png": "packs/sunny-vibes/sv-wall-shelf.png"
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
    "png": "packs/sunny-vibes/headphones.png",
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
    "png": "packs/sunny-vibes/game-controller.png",
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
    "svg": "packs/sunny-vibes/heart-light.svg",
    "png": "packs/sunny-vibes/heart-light.png"
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
    "svg": "packs/sunny-vibes/sv-bean-bag.svg",
    "png": "packs/sunny-vibes/sv-bean-bag.png"
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
    "png": "packs/sunny-vibes/cute-speaker.png",
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
    "svg": "packs/sunny-vibes/wavy-floor-lamp.svg",
    "png": "packs/sunny-vibes/wavy-floor-lamp.png"
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
    "svg": "packs/sunny-vibes/pastel-wardrobe.svg",
    "png": "packs/sunny-vibes/pastel-wardrobe.png"
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
    "png": "packs/sunny-vibes/desk-lamp.png",
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
    "svg": "packs/sunny-vibes/side-table-round.svg",
    "png": "packs/sunny-vibes/side-table-round.png"
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
    "png": "packs/sunny-vibes/sticker-board.png",
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
    "svg": "packs/glossy/salon-chair.svg",
    "png": "packs/glossy/salon-chair.png"
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
    "svg": "packs/glossy/wash-chair.svg",
    "png": "packs/glossy/wash-chair.png"
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
    "svg": "packs/glossy/glow-mirror.svg",
    "png": "packs/glossy/glow-mirror.png"
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
    "svg": "packs/glossy/pink-vanity.svg",
    "png": "packs/glossy/pink-vanity.png"
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
    "svg": "packs/glossy/polish-rack.svg",
    "png": "packs/glossy/polish-rack.png"
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
    "png": "packs/glossy/polish-bottle.png",
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
    "png": "packs/glossy/cream-jars.png",
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
    "svg": "packs/glossy/lotion-trio.svg",
    "png": "packs/glossy/lotion-trio.png"
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
    "png": "packs/glossy/hair-dryer.png",
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
    "svg": "packs/glossy/towel-cart.svg",
    "png": "packs/glossy/towel-cart.png"
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
    "svg": "packs/glossy/nail-table.svg",
    "png": "packs/glossy/nail-table.png"
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
    "svg": "packs/glossy/arched-shelf.svg",
    "png": "packs/glossy/arched-shelf.png"
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
    "svg": "packs/glossy/pink-fountain.svg",
    "png": "packs/glossy/pink-fountain.png"
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
    "svg": "packs/glossy/fancy-sofa.svg",
    "png": "packs/glossy/fancy-sofa.png"
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
    "svg": "packs/glossy/lilac-curtain.svg",
    "png": "packs/glossy/lilac-curtain.png"
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
    "svg": "packs/glossy/reception-desk.svg",
    "png": "packs/glossy/reception-desk.png"
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
    "svg": "packs/glossy/bubbly-plant.svg",
    "png": "packs/glossy/bubbly-plant.png"
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
    "svg": "packs/glossy/vine-planter.svg",
    "png": "packs/glossy/vine-planter.png"
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
    "png": "packs/glossy/droplet-buddy.png",
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
    "svg": "packs/glossy/flower-cart.svg",
    "png": "packs/glossy/flower-cart.png"
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
    "svg": "packs/glossy/globe-pendants.svg",
    "png": "packs/glossy/globe-pendants.png"
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
    "svg": "packs/glossy/drop-lamp.svg",
    "png": "packs/glossy/drop-lamp.png"
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
    "svg": "packs/glossy/gold-floor-mirror.svg",
    "png": "packs/glossy/gold-floor-mirror.png"
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
    "svg": "packs/glossy/heart-pouf.svg",
    "png": "packs/glossy/heart-pouf.png"
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
    "svg": "packs/glossy/swivel-stool.svg",
    "png": "packs/glossy/swivel-stool.png"
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
    "png": "packs/glossy/spray-bottle.png",
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
    "png": "packs/glossy/comb-brush.png",
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
    "png": "packs/glossy/towel-stack.png",
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
    "svg": "packs/glossy/blob-rug.svg",
    "png": "packs/glossy/blob-rug.png"
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
    "svg": "packs/glossy/pebble-rug.svg",
    "png": "packs/glossy/pebble-rug.png"
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
    "png": "packs/glossy/heart-plant.png",
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
    "png": "packs/glossy/bud-vase.png",
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
    "png": "packs/glossy/perfume-bottle.png",
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
    "png": "packs/glossy/scent-candle.png",
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
    "svg": "packs/glossy/foot-spa.svg",
    "png": "packs/glossy/foot-spa.png"
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
    "png": "packs/glossy/mani-lamp.png",
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
    "png": "packs/glossy/tiered-tray.png",
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
    "svg": "packs/glossy/star-wall-sign.svg",
    "png": "packs/glossy/star-wall-sign.png"
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
    "svg": "packs/glossy/waiting-bench.svg",
    "png": "packs/glossy/waiting-bench.png"
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
    "png": "packs/cottage/cc-scallop-loveseat.png",
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
    "png": "packs/cottage/cc-heart-pouf.png",
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
    "png": "packs/cottage/cc-flower-lamp.png",
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
    "png": "packs/cottage/cc-petal-table.png",
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
    "png": "packs/cottage/cc-heart-rug.png",
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
    "png": "packs/cottage/cc-record-player.png",
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
    "png": "packs/cottage/cc-macrame-swing.png",
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
    "png": "packs/cottage/cc-fairy-shelf.png",
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
    "png": "packs/cottage/cc-canopy-daybed.png",
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
    "png": "packs/cottage/cc-star-dresser.png",
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
    "png": "packs/cottage/cc-heart-bed.png",
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
    "png": "packs/cottage/cc-fairy-garland.png",
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
    "png": "packs/cottage/cc-cloud-beanbag.png",
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
    "png": "packs/cottage/cc-jewel-box.png",
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
    "png": "packs/cottage/cc-cloud-lamp.png",
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
    "png": "packs/cottage/cc-window-seat.png",
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
    "png": "packs/cottage/cc-pastel-range.png",
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
    "png": "packs/cottage/cc-mint-fridge.png",
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
    "png": "packs/cottage/cc-cupcake-stand.png",
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
    "png": "packs/cottage/cc-teapot-set.png",
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
    "png": "packs/cottage/cc-bakery-shelf.png",
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
    "png": "packs/cottage/cc-breakfast-table.png",
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
    "png": "packs/cottage/cc-macaron-jar.png",
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
    "png": "packs/cottage/cc-flower-kettle.png",
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
    "png": "packs/cottage/cc-light-vanity.png",
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
    "png": "packs/cottage/cc-bubble-chair.png",
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
    "png": "packs/cottage/cc-mani-chair.png",
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
    "png": "packs/cottage/cc-ribbon-mirror.png",
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
    "png": "packs/cottage/cc-perfume-tray.png",
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
    "png": "packs/cottage/cc-dryer-chair.png",
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
    "png": "packs/cottage/cc-heart-clock.png",
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
    "png": "packs/cottage/cc-scallop-curtains.png",
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
    "png": "packs/cottage/cc-mushroom-stool.png",
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
    "png": "packs/cottage/cc-plant-wall.png",
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
    "png": "packs/cottage/cc-cottage-aquarium.png",
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
    "png": "packs/cottage/cc-reading-nook.png",
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
  }
]`,X1=`[
  {
    "slug": "leafy-cream",
    "name": "Leafy Cream",
    "type": "wallpaper",
    "pack": "welcome-home",
    "svg": "welcome-home/leafy-cream.svg",
    "png": "welcome-home/leafy-cream.png"
  },
  {
    "slug": "orange-gingham",
    "name": "Orange Gingham",
    "type": "wallpaper",
    "pack": "welcome-home",
    "svg": "welcome-home/orange-gingham.svg",
    "png": "welcome-home/orange-gingham.png"
  },
  {
    "slug": "wood-panel",
    "name": "Wood Panel",
    "type": "wallpaper",
    "pack": "welcome-home",
    "svg": "welcome-home/wood-panel.svg",
    "png": "welcome-home/wood-panel.png"
  },
  {
    "slug": "wood-planks",
    "name": "Wood Planks",
    "type": "floor",
    "pack": "welcome-home",
    "svg": "welcome-home/wood-planks.svg",
    "png": "welcome-home/wood-planks.png"
  },
  {
    "slug": "terracotta-tiles",
    "name": "Terracotta Tiles",
    "type": "floor",
    "pack": "welcome-home",
    "svg": "welcome-home/terracotta-tiles.svg",
    "png": "welcome-home/terracotta-tiles.png"
  },
  {
    "slug": "sunny-stars",
    "name": "Sunny Stars",
    "type": "wallpaper",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/sunny-stars.svg",
    "png": "sunny-vibes/sunny-stars.png"
  },
  {
    "slug": "mint-checks",
    "name": "Mint Checks",
    "type": "wallpaper",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/mint-checks.svg",
    "png": "sunny-vibes/mint-checks.png"
  },
  {
    "slug": "sky-clouds",
    "name": "Sky Clouds",
    "type": "wallpaper",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/sky-clouds.svg",
    "png": "sunny-vibes/sky-clouds.png"
  },
  {
    "slug": "butter-check-floor",
    "name": "Butter Check Floor",
    "type": "floor",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/butter-check-floor.svg",
    "png": "sunny-vibes/butter-check-floor.png"
  },
  {
    "slug": "sky-tiles",
    "name": "Sky Tiles",
    "type": "floor",
    "pack": "sunny-vibes",
    "svg": "sunny-vibes/sky-tiles.svg",
    "png": "sunny-vibes/sky-tiles.png"
  },
  {
    "slug": "pink-hearts",
    "name": "Pink Hearts",
    "type": "wallpaper",
    "pack": "glossy",
    "svg": "glossy/pink-hearts.svg",
    "png": "glossy/pink-hearts.png"
  },
  {
    "slug": "lilac-stripes",
    "name": "Lilac Stripes",
    "type": "wallpaper",
    "pack": "glossy",
    "svg": "glossy/lilac-stripes.svg",
    "png": "glossy/lilac-stripes.png"
  },
  {
    "slug": "mint-bubbles",
    "name": "Mint Bubbles",
    "type": "wallpaper",
    "pack": "glossy",
    "svg": "glossy/mint-bubbles.svg",
    "png": "glossy/mint-bubbles.png"
  },
  {
    "slug": "pink-check-floor",
    "name": "Pink Check Floor",
    "type": "floor",
    "pack": "glossy",
    "svg": "glossy/pink-check-floor.svg",
    "png": "glossy/pink-check-floor.png"
  },
  {
    "slug": "lilac-terrazzo",
    "name": "Lilac Terrazzo",
    "type": "floor",
    "pack": "glossy",
    "svg": "glossy/lilac-terrazzo.svg",
    "png": "glossy/lilac-terrazzo.png"
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
    "svg": "cottage/cc-lilac-gingham.svg",
    "png": "cottage/cc-lilac-gingham.png"
  },
  {
    "slug": "cc-peach-scallops",
    "name": "Peach Scallops",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-peach-scallops.svg",
    "png": "cottage/cc-peach-scallops.png"
  },
  {
    "slug": "cc-mint-florals",
    "name": "Mint Florals",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-mint-florals.svg",
    "png": "cottage/cc-mint-florals.png"
  },
  {
    "slug": "cc-pink-plaid",
    "name": "Pink Plaid",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-pink-plaid.svg",
    "png": "cottage/cc-pink-plaid.png"
  },
  {
    "slug": "cc-butter-polka",
    "name": "Butter Polka",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-butter-polka.svg",
    "png": "cottage/cc-butter-polka.png"
  },
  {
    "slug": "cc-lavender-lattice",
    "name": "Lavender Lattice",
    "type": "wallpaper",
    "pack": "cottage",
    "svg": "cottage/cc-lavender-lattice.svg",
    "png": "cottage/cc-lavender-lattice.png"
  },
  {
    "slug": "cc-rose-herringbone",
    "name": "Rose Herringbone",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-rose-herringbone.svg",
    "png": "cottage/cc-rose-herringbone.png"
  },
  {
    "slug": "cc-cream-hex",
    "name": "Cream Hex Tiles",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-cream-hex.svg",
    "png": "cottage/cc-cream-hex.png"
  },
  {
    "slug": "cc-rag-planks",
    "name": "Pastel Rag Rug",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-rag-planks.svg",
    "png": "cottage/cc-rag-planks.png"
  },
  {
    "slug": "cc-mint-checks",
    "name": "Mint Gingham Floor",
    "type": "floor",
    "pack": "cottage",
    "svg": "cottage/cc-mint-checks.svg",
    "png": "cottage/cc-mint-checks.png"
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
`,J1="/cozy-preview/assets/alarm-clock-DOVobLzL.png",e2="/cozy-preview/assets/alarm-clock-BCd1-e86.svg",t2="/cozy-preview/assets/bedtime-snack-COvX4Nqo.png",n2="/cozy-preview/assets/bedtime-snack-BoNDQqOK.svg",s2="/cozy-preview/assets/book-stack-BlyqbTA1.png",i2="/cozy-preview/assets/book-stack-upnp1NwG.svg",o2="/cozy-preview/assets/bunk-bed-COiQly1s.png",a2="/cozy-preview/assets/bunk-bed-YZiRWNFR.svg",r2="/cozy-preview/assets/bunny-slippers-DajXa_JK.png",l2="/cozy-preview/assets/bunny-slippers-PNucIc_Q.svg",c2="/cozy-preview/assets/canopy-bed-Db9GIfyT.png",d2="/cozy-preview/assets/canopy-bed-BwWkRhe2.svg",p2="/cozy-preview/assets/cat-bed-ChP4s69B.png",f2="/cozy-preview/assets/cat-bed-B8ULFbHc.svg",g2="/cozy-preview/assets/cloud-rug-Bv3GScgR.png",h2="/cozy-preview/assets/cloud-rug-CFl6aZc5.svg",u2="/cozy-preview/assets/cloud-shelf-BAmU3DSp.png",m2="/cozy-preview/assets/cloud-shelf-DF5b_IoZ.svg",y2="/cozy-preview/assets/cork-board-B8yw-MFd.png",w2="/cozy-preview/assets/cork-board-Bj5OuLbv.svg",b2="/cozy-preview/assets/daisy-pot-BQDVlAug.png",v2="/cozy-preview/assets/daisy-pot-Cy8SrSS6.svg",k2="/cozy-preview/assets/desk-UTaBcI2Q.png",_2="/cozy-preview/assets/desk-2rRtV3Vk.svg",$2="/cozy-preview/assets/dino-plush-yhz7rVZD.png",x2="/cozy-preview/assets/dino-plush-Dq_qccf0.svg",M2="/cozy-preview/assets/doll-house-DfYMaHqJ.png",L2="/cozy-preview/assets/doll-house-BrC3RiST.svg",E2="/cozy-preview/assets/dresser-jJcAkDG_.png",C2="/cozy-preview/assets/dresser-__9TGuYc.svg",S2="/cozy-preview/assets/egg-chair-DobnnZdC.png",z2="/cozy-preview/assets/egg-chair-CtiaqWNQ.svg",P2="/cozy-preview/assets/floor-fan-C2R5oDHp.png",T2="/cozy-preview/assets/floor-fan-Dt9SIAmB.svg",B2="/cozy-preview/assets/guinea-pig-BzHyXlGo.png",R2="/cozy-preview/assets/guinea-pig-CwLeNU_S.svg",A2="/cozy-preview/assets/hamster-cage-zv59jo6b.png",D2="/cozy-preview/assets/hamster-cage-lQ6r7saV.svg",I2="/cozy-preview/assets/heart-rug-DYGPCKpT.png",H2="/cozy-preview/assets/heart-rug-CBDvH6Q6.svg",O2="/cozy-preview/assets/lava-lamp-Df-lJpLx.png",W2="/cozy-preview/assets/lava-lamp-DEuHvlco.svg",V2="/cozy-preview/assets/moon-night-light-JPI5SkUV.png",U2="/cozy-preview/assets/moon-night-light-CAKsjYZv.svg",Q2="/cozy-preview/assets/nightstand-D3WOPlqw.png",q2="/cozy-preview/assets/nightstand-Bgsh0YUi.svg",Z2="/cozy-preview/assets/paper-lantern-mpw1jXzL.png",N2="/cozy-preview/assets/paper-lantern-CErOGyrT.svg",F2="/cozy-preview/assets/piggy-bank-DaSktUUA.png",j2="/cozy-preview/assets/piggy-bank-DsHrmOcp.svg",G2="/cozy-preview/assets/plant-stand-BpU338ra.png",Y2="/cozy-preview/assets/plant-stand-DDyIDaL0.svg",K2="/cozy-preview/assets/play-tent-ih6xOGXC.png",X2="/cozy-preview/assets/play-tent-Bsawe52j.svg",J2="/cozy-preview/assets/star-mobile-Bqyd_ikl.png",ey="/cozy-preview/assets/star-mobile-DzOGs-Jo.svg",ty="/cozy-preview/assets/toy-chest-DhEoVFj0.png",ny="/cozy-preview/assets/toy-chest-6iPrDiZH.svg",sy="/cozy-preview/assets/toy-robot-Bfkjfj_6.png",iy="/cozy-preview/assets/toy-robot-OaCEwmDT.svg",oy="/cozy-preview/assets/toy-train-DILjZiya.png",ay="/cozy-preview/assets/toy-train-D5GqAnpy.svg",ry="/cozy-preview/assets/unicorn-plush-5YQqQjND.png",ly="/cozy-preview/assets/unicorn-plush-C0W1eEs9.svg",cy="/cozy-preview/assets/wardrobe-sJcJSWZ2.png",dy="/cozy-preview/assets/wardrobe-Dn492IK0.svg",py="/cozy-preview/assets/bananas-D4irRkGy.png",fy="/cozy-preview/assets/bananas-aPQwdEVo.svg",gy="/cozy-preview/assets/bar-stool-xbwaa01H.png",hy="/cozy-preview/assets/bar-stool-DWxhX1Ah.svg",uy="/cozy-preview/assets/bread-loaf-DKmR5wPN.png",my="/cozy-preview/assets/bread-loaf-C9cEAYcl.svg",yy="/cozy-preview/assets/chick-DCnoMwEt.png",wy="/cozy-preview/assets/chick-BTEVfgqU.svg",by="/cozy-preview/assets/china-hutch-K3xtlmqi.png",vy="/cozy-preview/assets/china-hutch-BTmMY6rg.svg",ky="/cozy-preview/assets/cocoa-mug-BmqSzNJ6.png",_y="/cozy-preview/assets/cocoa-mug-CraNCc9b.svg",$y="/cozy-preview/assets/cookie-jar-CZsO9PSp.png",xy="/cozy-preview/assets/cookie-jar-ripj0oyT.svg",My="/cozy-preview/assets/cooking-pot-BSKPlqyT.png",Ly="/cozy-preview/assets/cooking-pot-BWtfOm9f.svg",Ey="/cozy-preview/assets/cupcake-KO1KLKav.png",Cy="/cozy-preview/assets/cupcake-DFCw42xb.svg",Sy="/cozy-preview/assets/dish-rack-DICSEn5E.png",zy="/cozy-preview/assets/dish-rack-BpVmmU6k.svg",Py="/cozy-preview/assets/fruit-bowl-BL5EkaC8.png",Ty="/cozy-preview/assets/fruit-bowl-Dw9lsB3B.svg",By="/cozy-preview/assets/frying-pan-BocrLcES.png",Ry="/cozy-preview/assets/frying-pan-CTBY6MC_.svg",Ay="/cozy-preview/assets/happy-fridge-BTbpm-W1.png",Dy="/cozy-preview/assets/happy-fridge-D7ENuEJs.svg",Iy="/cozy-preview/assets/herb-box-DFtC2qBN.png",Hy="/cozy-preview/assets/herb-box-CdRxefnV.svg",Oy="/cozy-preview/assets/high-chair-DZCqRJV8.png",Wy="/cozy-preview/assets/high-chair-BQtLYlq4.svg",Vy="/cozy-preview/assets/ice-cream-CLLMXjn9.png",Uy="/cozy-preview/assets/ice-cream-DydSyNXx.svg",Qy="/cozy-preview/assets/kettle-DScYOeEK.png",qy="/cozy-preview/assets/kettle-D1nuAiG_.svg",Zy="/cozy-preview/assets/kitchen-counter-cZcDRQIw.png",Ny="/cozy-preview/assets/kitchen-counter-C8sTAZ-V.svg",Fy="/cozy-preview/assets/kitchen-sink-DrP43iga.png",jy="/cozy-preview/assets/kitchen-sink-CYjDcd1n.svg",Gy="/cozy-preview/assets/lemon-tree-BwA7W0cM.png",Yy="/cozy-preview/assets/lemon-tree-CZz-Vy3P.svg",Ky="/cozy-preview/assets/microwave-BJRDd-L-.png",Xy="/cozy-preview/assets/microwave-lopm-FCT.svg",Jy="/cozy-preview/assets/milk-bottle-D7UB6VD8.png",ew="/cozy-preview/assets/milk-bottle-DxcUA6XT.svg",tw="/cozy-preview/assets/pancakes-CbisCK-C.png",nw="/cozy-preview/assets/pancakes-CLqxnc5R.svg",sw="/cozy-preview/assets/pantry-shelf-DI_CgvVD.png",iw="/cozy-preview/assets/pantry-shelf-Azdxpmzd.svg",ow="/cozy-preview/assets/pendant-lamp-BhZanag5.png",aw="/cozy-preview/assets/pendant-lamp-fZv6y1p0.svg",rw="/cozy-preview/assets/pet-bowl-Oe3KGELz.png",lw="/cozy-preview/assets/pet-bowl-ETL_EOAP.svg",cw="/cozy-preview/assets/rice-cooker-DUTXsBbb.png",dw="/cozy-preview/assets/rice-cooker-JX0L4bi2.svg",pw="/cozy-preview/assets/runner-rug-AYIsQudU.png",fw="/cozy-preview/assets/runner-rug-BbUgZFy4.svg",gw="/cozy-preview/assets/spice-rack-8ll-6Q2f.png",hw="/cozy-preview/assets/spice-rack-D9kAw-vT.svg",uw="/cozy-preview/assets/stand-mixer-CP2fpC-Q.png",mw="/cozy-preview/assets/stand-mixer-CZrLn00l.svg",yw="/cozy-preview/assets/teapot-iFnJNGiA.png",ww="/cozy-preview/assets/teapot-CtPOJzEm.svg",bw="/cozy-preview/assets/toaster-T2WkZkdo.png",vw="/cozy-preview/assets/toaster-CNk0hJDw.svg",kw="/cozy-preview/assets/utensil-rail-_vjcgBpy.png",_w="/cozy-preview/assets/utensil-rail-B0QkGP3A.svg",$w="/cozy-preview/assets/watermelon-slice-yHBcfKGj.png",xw="/cozy-preview/assets/watermelon-slice-VzvgalD5.svg",Mw="/cozy-preview/assets/aquarium-rYRAu69m.png",Lw="/cozy-preview/assets/aquarium-BlhJ9UCr.svg",Ew="/cozy-preview/assets/arc-floor-lamp-CBq3G9j8.png",Cw="/cozy-preview/assets/arc-floor-lamp-DL5cEVzq.svg",Sw="/cozy-preview/assets/bean-bag-CMLYRsbz.png",zw="/cozy-preview/assets/bean-bag-CauyDuZQ.svg",Pw="/cozy-preview/assets/bird-cage-qj5P0te2.png",Tw="/cozy-preview/assets/bird-cage-xqeVahX7.svg",Bw="/cozy-preview/assets/blanket-basket-5IQiUSS2.png",Rw="/cozy-preview/assets/blanket-basket-B4LREUo9.svg",Aw="/cozy-preview/assets/building-blocks-CzqAFUNB.png",Dw="/cozy-preview/assets/building-blocks-DbtoodPT.svg",Iw="/cozy-preview/assets/coffee-table-iKZ20Gpy.png",Hw="/cozy-preview/assets/coffee-table-ZYO2ApH6.svg",Ow="/cozy-preview/assets/comfy-armchair-U_SI3sk9.png",Ww="/cozy-preview/assets/comfy-armchair-tjNYbfgO.svg",Vw="/cozy-preview/assets/cubby-shelf-B0De91CO.png",Uw="/cozy-preview/assets/cubby-shelf-CLzTUpiz.svg",Qw="/cozy-preview/assets/daisy-rug-BqSOjPlJ.png",qw="/cozy-preview/assets/daisy-rug-CvOlxjsu.svg",Zw="/cozy-preview/assets/fiddle-leaf-fig-DnvG8l2j.png",Nw="/cozy-preview/assets/fiddle-leaf-fig-DiUNW4Q_.svg",Fw="/cozy-preview/assets/fireplace-C9azNipx.png",jw="/cozy-preview/assets/fireplace-CqxIMN3Z.svg",Gw="/cozy-preview/assets/globe-C-L7vS0t.png",Yw="/cozy-preview/assets/globe-DN0sih3W.svg",Kw="/cozy-preview/assets/hanging-planter-DGgUXZpP.png",Xw="/cozy-preview/assets/hanging-planter-M9IHqztp.svg",Jw="/cozy-preview/assets/monstera-plant-BbGZQtOh.png",eb="/cozy-preview/assets/monstera-plant-CLmuB_RM.svg",tb="/cozy-preview/assets/piano-DpS7nvdq.png",nb="/cozy-preview/assets/piano-Y0KQ4rD2.svg",sb="/cozy-preview/assets/popcorn-CFk12JbR.png",ib="/cozy-preview/assets/popcorn-BD2d8sUH.svg",ob="/cozy-preview/assets/pouf-DY0Vcx75.png",ab="/cozy-preview/assets/pouf-as0li8On.svg",rb="/cozy-preview/assets/rainbow-rug-DwzLb6aY.png",lb="/cozy-preview/assets/rainbow-rug-C5ZVauOA.svg",cb="/cozy-preview/assets/rainbow-wall-art--5LLrrQJ.png",db="/cozy-preview/assets/rainbow-wall-art-CCXUPPen.svg",pb="/cozy-preview/assets/retro-radio-BIX4GYkL.png",fb="/cozy-preview/assets/retro-radio-B3T98xMQ.svg",gb="/cozy-preview/assets/rocking-chair-CDLlJFiP.png",hb="/cozy-preview/assets/rocking-chair-BgoIQu5H.svg",ub="/cozy-preview/assets/rocking-horse-Iz-CpscK.png",mb="/cozy-preview/assets/rocking-horse-1WLLV43R.svg",yb="/cozy-preview/assets/snake-plant-DgPna4k9.png",wb="/cozy-preview/assets/snake-plant-BGDwPcMj.svg",bb="/cozy-preview/assets/string-lights-nDUZa5m1.png",vb="/cozy-preview/assets/string-lights-DGC0Ni2I.svg",kb="/cozy-preview/assets/succulent-trio-VYNH-o5B.png",_b="/cozy-preview/assets/succulent-trio-uPD-ljlL.svg",$b="/cozy-preview/assets/tassel-rug-BBXtknxh.png",xb="/cozy-preview/assets/tassel-rug-DolXtxfQ.svg",Mb="/cozy-preview/assets/throw-pillow-BjuGXMYA.png",Lb="/cozy-preview/assets/throw-pillow-qWyWQ9cT.svg",Eb="/cozy-preview/assets/toy-car-Bwrt0-AT.png",Cb="/cozy-preview/assets/toy-car-CTJy5H4V.svg",Sb="/cozy-preview/assets/tulip-vase-CpQUgXPR.png",zb="/cozy-preview/assets/tulip-vase-o2vjI1Hg.svg",Pb="/cozy-preview/assets/turtle-Bf8_yRql.png",Tb="/cozy-preview/assets/turtle-B9Y6NDSv.svg",Bb="/cozy-preview/assets/tv-stand-DnwT-hn4.png",Rb="/cozy-preview/assets/tv-stand-CcLHFc1J.svg",Ab="/cozy-preview/assets/wall-shelf-Bs6mROe1.png",Db="/cozy-preview/assets/wall-shelf-CCWuZ6Xl.svg",Ib="/cozy-preview/assets/cc-bakery-shelf-dMrnZVB3.png",Hb="/cozy-preview/assets/cc-bakery-shelf-BxdhLTTC.svg",Ob="/cozy-preview/assets/cc-breakfast-table-DwHbMV2p.png",Wb="/cozy-preview/assets/cc-breakfast-table-DwaO0eFy.svg",Vb="/cozy-preview/assets/cc-bubble-chair-DuDi-bRz.png",Ub="/cozy-preview/assets/cc-bubble-chair-DncHA7F-.svg",Qb="/cozy-preview/assets/cc-canopy-daybed-CAZpSo2a.png",qb="/cozy-preview/assets/cc-canopy-daybed-CVbt6QDr.svg",Zb="/cozy-preview/assets/cc-cloud-beanbag-BYcBLKf9.png",Nb="/cozy-preview/assets/cc-cloud-beanbag-SM0m-3qY.svg",Fb="/cozy-preview/assets/cc-cloud-lamp-v0UO1VrK.png",jb="/cozy-preview/assets/cc-cloud-lamp-BWwxoCux.svg",Gb="/cozy-preview/assets/cc-cottage-aquarium-XYuN1CnR.png",Yb="/cozy-preview/assets/cc-cottage-aquarium-iY2D26Vq.svg",Kb="/cozy-preview/assets/cc-cupcake-stand-jKA3zoCC.png",Xb="/cozy-preview/assets/cc-cupcake-stand-B08kdXZL.svg",Jb="/cozy-preview/assets/cc-dryer-chair-CP8q6yyq.png",ev="/cozy-preview/assets/cc-dryer-chair-DQmosxUz.svg",tv="/cozy-preview/assets/cc-fairy-garland-B4DVLP6L.png",nv="/cozy-preview/assets/cc-fairy-garland-BncKvkRL.svg",sv="/cozy-preview/assets/cc-fairy-shelf-DSmhC08i.png",iv="/cozy-preview/assets/cc-fairy-shelf-CE6x7J1w.svg",ov="/cozy-preview/assets/cc-flower-kettle-DZFkbEk5.png",av="/cozy-preview/assets/cc-flower-kettle-ZTbAh26L.svg",rv="/cozy-preview/assets/cc-flower-lamp-hc1e4xxL.png",lv="/cozy-preview/assets/cc-flower-lamp-CS2T2S89.svg",cv="/cozy-preview/assets/cc-heart-bed-BtOx4_a4.png",dv="/cozy-preview/assets/cc-heart-bed-76-z9nJg.svg",pv="/cozy-preview/assets/cc-heart-clock-CLtzUj8w.png",fv="/cozy-preview/assets/cc-heart-clock-ByixSFru.svg",gv="/cozy-preview/assets/cc-heart-pouf-C3vCLnoM.png",hv="/cozy-preview/assets/cc-heart-pouf-DH5J2s2J.svg",uv="/cozy-preview/assets/cc-heart-rug-CpvyM_wf.png",mv="/cozy-preview/assets/cc-heart-rug-Jwmh-m0j.svg",yv="/cozy-preview/assets/cc-jewel-box-DZ6IxYiU.png",wv="/cozy-preview/assets/cc-jewel-box-qMbIQmo4.svg",bv="/cozy-preview/assets/cc-light-vanity-BxKLJiVW.png",vv="/cozy-preview/assets/cc-light-vanity-DD4uQJ_7.svg",kv="/cozy-preview/assets/cc-macaron-jar-NI43JiPM.png",_v="/cozy-preview/assets/cc-macaron-jar-A0sT-Lvj.svg",$v="/cozy-preview/assets/cc-macrame-swing-x8sop4y4.png",xv="/cozy-preview/assets/cc-macrame-swing-qIcoPp0o.svg",Mv="/cozy-preview/assets/cc-mani-chair-C1J_zCFX.png",Lv="/cozy-preview/assets/cc-mani-chair-7AWb60tv.svg",Ev="/cozy-preview/assets/cc-mint-fridge-7zQk2-Kj.png",Cv="/cozy-preview/assets/cc-mint-fridge-Cc87e_gW.svg",Sv="/cozy-preview/assets/cc-mushroom-stool-DeoO7P27.png",zv="/cozy-preview/assets/cc-mushroom-stool-B9-y9WNf.svg",Pv="/cozy-preview/assets/cc-pastel-range-CXu-Gr6f.png",Tv="/cozy-preview/assets/cc-pastel-range-D6cjzJTl.svg",Bv="/cozy-preview/assets/cc-perfume-tray-DkUHaA_i.png",Rv="/cozy-preview/assets/cc-perfume-tray-DN4chcIn.svg",Av="/cozy-preview/assets/cc-petal-table-DadCDnSy.png",Dv="/cozy-preview/assets/cc-petal-table-QrNho7KH.svg",Iv="/cozy-preview/assets/cc-plant-wall-CCxqRxsH.png",Hv="/cozy-preview/assets/cc-plant-wall-BMii8_kR.svg",Ov="/cozy-preview/assets/cc-reading-nook-Eq4Eh0MW.png",Wv="/cozy-preview/assets/cc-reading-nook-wiDgasP8.svg",Vv="/cozy-preview/assets/cc-record-player-LmfaPaE5.png",Uv="/cozy-preview/assets/cc-record-player-BoxZhHLy.svg",Qv="/cozy-preview/assets/cc-ribbon-mirror-BEsGok51.png",qv="/cozy-preview/assets/cc-ribbon-mirror-DiCje_iy.svg",Zv="/cozy-preview/assets/cc-scallop-curtains-Cvab-FzV.png",Nv="/cozy-preview/assets/cc-scallop-curtains-Bzhy2peV.svg",Fv="/cozy-preview/assets/cc-scallop-loveseat-CR3Z2O-W.png",jv="/cozy-preview/assets/cc-scallop-loveseat-Dfi7dg3b.svg",Gv="/cozy-preview/assets/cc-star-dresser-b15t-WLI.png",Yv="/cozy-preview/assets/cc-star-dresser-2wqSnsip.svg",Kv="/cozy-preview/assets/cc-teapot-set-ygQBLdbl.png",Xv="/cozy-preview/assets/cc-teapot-set-DnZlJvn7.svg",Jv="/cozy-preview/assets/cc-window-seat-D-Rfuuwm.png",e4="/cozy-preview/assets/cc-window-seat-BCOise4Z.svg",t4="/cozy-preview/assets/arched-shelf-Dt4oWiBK.png",n4="/cozy-preview/assets/arched-shelf-XtiqRVaT.svg",s4="/cozy-preview/assets/blob-rug-Ckw1kSsa.png",i4="/cozy-preview/assets/blob-rug-Deh5k10s.svg",o4="/cozy-preview/assets/bubbly-plant-CV9ioei6.png",a4="/cozy-preview/assets/bubbly-plant-CFTOJd5Y.svg",r4="/cozy-preview/assets/bud-vase-Bzj5qGgr.png",l4="/cozy-preview/assets/bud-vase-Dup4WQ5y.svg",c4="/cozy-preview/assets/comb-brush-CfTGGk1L.png",d4="/cozy-preview/assets/comb-brush-oPJeQv0v.svg",p4="/cozy-preview/assets/cream-jars-dLRXypJR.png",f4="/cozy-preview/assets/cream-jars-D6bxrnJR.svg",g4="/cozy-preview/assets/drop-lamp-DWqiPjZB.png",h4="/cozy-preview/assets/drop-lamp-CJg63ZKz.svg",u4="/cozy-preview/assets/droplet-buddy-DCjbvrlK.png",m4="/cozy-preview/assets/droplet-buddy-DTpHggFh.svg",y4="/cozy-preview/assets/fancy-sofa-BRlr2j8I.png",w4="/cozy-preview/assets/fancy-sofa-kq2L0ob5.svg",b4="/cozy-preview/assets/flower-cart-C3W7v2RD.png",v4="/cozy-preview/assets/flower-cart-BWgfg0s_.svg",k4="/cozy-preview/assets/foot-spa-HwiSNgdS.png",_4="/cozy-preview/assets/foot-spa-DdA5_fj_.svg",$4="/cozy-preview/assets/globe-pendants-ChKRw_Bp.png",x4="/cozy-preview/assets/globe-pendants-DNV5WnAO.svg",M4="/cozy-preview/assets/glow-mirror-D4P3UibJ.png",L4="/cozy-preview/assets/glow-mirror-C_dTGwQc.svg",E4="/cozy-preview/assets/gold-floor-mirror-CSYqaszS.png",C4="/cozy-preview/assets/gold-floor-mirror-jfPQepmr.svg",S4="/cozy-preview/assets/hair-dryer-_nFRnXBv.png",z4="/cozy-preview/assets/hair-dryer-CAkhCf7J.svg",P4="/cozy-preview/assets/heart-plant-CN47o4my.png",T4="/cozy-preview/assets/heart-plant-fSU4uLVy.svg",B4="/cozy-preview/assets/heart-pouf-b76ZFT07.png",R4="/cozy-preview/assets/heart-pouf-BMVPBVKJ.svg",A4="/cozy-preview/assets/lilac-curtain-94MUZIqr.png",D4="/cozy-preview/assets/lilac-curtain-D_mFsZKu.svg",I4="/cozy-preview/assets/lotion-trio-wGXg7qdC.png",H4="/cozy-preview/assets/lotion-trio-D3lKwvho.svg",O4="/cozy-preview/assets/mani-lamp-B6MLP1xK.png",W4="/cozy-preview/assets/mani-lamp-B4SmvhvS.svg",V4="/cozy-preview/assets/nail-table-CP0_pEA8.png",U4="/cozy-preview/assets/nail-table-C3FitmuG.svg",Q4="/cozy-preview/assets/pebble-rug-BgHMxQ6Q.png",q4="/cozy-preview/assets/pebble-rug-DHBZUggl.svg",Z4="/cozy-preview/assets/perfume-bottle-F_MkREQh.png",N4="/cozy-preview/assets/perfume-bottle-BcNXSWTW.svg",F4="/cozy-preview/assets/pink-fountain-DtB69ljQ.png",j4="/cozy-preview/assets/pink-fountain-DQ3CIetr.svg",G4="/cozy-preview/assets/pink-vanity-CPmOesS7.png",Y4="/cozy-preview/assets/pink-vanity-qE3SwdD6.svg",K4="/cozy-preview/assets/polish-bottle-B2f4PsGZ.png",X4="/cozy-preview/assets/polish-bottle-VWed8EQ-.svg",J4="/cozy-preview/assets/polish-rack-ANlncwDe.png",e6="/cozy-preview/assets/polish-rack-8Ph2n2nM.svg",t6="/cozy-preview/assets/reception-desk-DnhqgkHu.png",n6="/cozy-preview/assets/reception-desk-D4Gevx64.svg",s6="/cozy-preview/assets/salon-chair-Bl31ZE_E.png",i6="/cozy-preview/assets/salon-chair-Wj2sOSW8.svg",o6="/cozy-preview/assets/scent-candle-BYUsO9s1.png",a6="/cozy-preview/assets/scent-candle-BEUE-6Uv.svg",r6="/cozy-preview/assets/spray-bottle-DJKZeNmL.png",l6="/cozy-preview/assets/spray-bottle-Bc8iuceJ.svg",c6="/cozy-preview/assets/star-wall-sign-D_9XhB91.png",d6="/cozy-preview/assets/star-wall-sign-DvenTqvU.svg",p6="/cozy-preview/assets/swivel-stool-BGAwWXNX.png",f6="/cozy-preview/assets/swivel-stool-P-Egqq_Z.svg",g6="/cozy-preview/assets/tiered-tray-CGuVyK1K.png",h6="/cozy-preview/assets/tiered-tray-DLnZTsUF.svg",u6="/cozy-preview/assets/towel-cart-5At-syZP.png",m6="/cozy-preview/assets/towel-cart-DJmR97UL.svg",y6="/cozy-preview/assets/towel-stack-D-pX5koc.png",w6="/cozy-preview/assets/towel-stack-C1qplZ4T.svg",b6="/cozy-preview/assets/vine-planter-mviuZvkw.png",v6="/cozy-preview/assets/vine-planter-Duhx9OMZ.svg",k6="/cozy-preview/assets/waiting-bench-DXbi7ObC.png",_6="/cozy-preview/assets/waiting-bench-BQuoXbE3.svg",$6="/cozy-preview/assets/wash-chair-CJo64U_O.png",x6="/cozy-preview/assets/wash-chair-sdgNnj79.svg",M6="/cozy-preview/assets/arched-mirror-2vakzmQ8.png",L6="/cozy-preview/assets/arched-mirror-ClJgTBd9.svg",E6="/cozy-preview/assets/big-monitor-BRiCdofl.png",C6="/cozy-preview/assets/big-monitor-jx5PnUa_.svg",S6="/cozy-preview/assets/boba-cup-Dn_S1oAa.png",z6="/cozy-preview/assets/boba-cup-CwUerXNm.svg",P6="/cozy-preview/assets/bubble-bath-D4AZavWB.png",T6="/cozy-preview/assets/bubble-bath-8VwrkImA.svg",B6="/cozy-preview/assets/cactus-buddy-D_lAS12Y.png",R6="/cozy-preview/assets/cactus-buddy-D3uacuVA.svg",A6="/cozy-preview/assets/caterpillar-plush-vK3r58Ch.png",D6="/cozy-preview/assets/caterpillar-plush-BhR8Pydf.svg",I6="/cozy-preview/assets/checker-bed-DD4Ra6RV.png",H6="/cozy-preview/assets/checker-bed-mtuxfPje.svg",O6="/cozy-preview/assets/checker-rug-C9Gs09p_.png",W6="/cozy-preview/assets/checker-rug-CmSO3Y4j.svg",V6="/cozy-preview/assets/clothes-rail-CJ8Du1xN.png",U6="/cozy-preview/assets/clothes-rail-BY-f9coz.svg",Q6="/cozy-preview/assets/cloud-sofa-3eVlcAzs.png",q6="/cozy-preview/assets/cloud-sofa-CZS1Y5s-.svg",Z6="/cozy-preview/assets/cube-shelf-DPFNgFhk.png",N6="/cozy-preview/assets/cube-shelf-DoI0tLGL.svg",F6="/cozy-preview/assets/curvy-desk-BxyVtcg3.png",j6="/cozy-preview/assets/curvy-desk-eWCvec1f.svg",G6="/cozy-preview/assets/cute-speaker-Cy7ml0bm.png",Y6="/cozy-preview/assets/cute-speaker-DrVF9uns.svg",K6="/cozy-preview/assets/desk-lamp-B39R5SBQ.png",X6="/cozy-preview/assets/desk-lamp-C-VtrE1V.svg",J6="/cozy-preview/assets/desk-mic-C-4XirP6.png",ek="/cozy-preview/assets/desk-mic-BqYzh6ma.svg",tk="/cozy-preview/assets/flower-lamp-DyDRXGpR.png",nk="/cozy-preview/assets/flower-lamp-Dpz6tQ2x.svg",sk="/cozy-preview/assets/frog-plush-NmeU5sHZ.png",ik="/cozy-preview/assets/frog-plush-BhkTrE24.svg",ok="/cozy-preview/assets/game-controller-B6phnmU4.png",ak="/cozy-preview/assets/game-controller-6gvwykQG.svg",rk="/cozy-preview/assets/gaming-chair-B7ZnwG2W.png",lk="/cozy-preview/assets/gaming-chair-BCyGMzy0.svg",ck="/cozy-preview/assets/hamster-pet-C09aLs5N.png",dk="/cozy-preview/assets/hamster-pet-LBcghoJj.svg",pk="/cozy-preview/assets/headphones-MRHfNh-e.png",fk="/cozy-preview/assets/headphones-Cjjqt_92.svg",gk="/cozy-preview/assets/heart-light-B6LXGE4j.png",hk="/cozy-preview/assets/heart-light-DfDwRHju.svg",uk="/cozy-preview/assets/keyboard-Dvxz1PEW.png",mk="/cozy-preview/assets/keyboard-Cbtwvtj1.svg",yk="/cozy-preview/assets/mini-fridge-DgYceOBW.png",wk="/cozy-preview/assets/mini-fridge-qdNm4NKf.svg",bk="/cozy-preview/assets/pastel-wardrobe-CFIOdtrx.png",vk="/cozy-preview/assets/pastel-wardrobe-BubkWAN2.svg",kk="/cozy-preview/assets/phone-stand-CWfRuwT_.png",_k="/cozy-preview/assets/phone-stand-VLW-DsK-.svg",$k="/cozy-preview/assets/pothos-plant-mnKAaH_K.png",xk="/cozy-preview/assets/pothos-plant-C1I15M9a.svg",Mk="/cozy-preview/assets/puffy-stool-B5z3sd2l.png",Lk="/cozy-preview/assets/puffy-stool-CwjoblCa.svg",Ek="/cozy-preview/assets/ring-light-BoqM9Lks.png",Ck="/cozy-preview/assets/ring-light-CdxNAXA6.svg",Sk="/cozy-preview/assets/side-table-round-x1NbWzDq.png",zk="/cozy-preview/assets/side-table-round-rCsBU0YO.svg",Pk="/cozy-preview/assets/star-lamp-Bocs3YRP.png",Tk="/cozy-preview/assets/star-lamp-CHKQnzvB.svg",Bk="/cozy-preview/assets/sticker-board-CMn2BF_D.png",Rk="/cozy-preview/assets/sticker-board-LUm1_I_P.svg",Ak="/cozy-preview/assets/sunny-art-372bwMLG.png",Dk="/cozy-preview/assets/sunny-art-C25M7k02.svg",Ik="/cozy-preview/assets/sv-bean-bag-DlsJBRMG.png",Hk="/cozy-preview/assets/sv-bean-bag-DdsCYd4e.svg",Ok="/cozy-preview/assets/sv-cloud-rug-Bo5aP_HP.png",Wk="/cozy-preview/assets/sv-cloud-rug-BvczSj77.svg",Vk="/cozy-preview/assets/sv-wall-shelf-C61Y5OFn.png",Uk="/cozy-preview/assets/sv-wall-shelf-BtJLzNMg.svg",Qk="/cozy-preview/assets/vlog-camera-DAiD7LSW.png",qk="/cozy-preview/assets/vlog-camera-CBd28A7P.svg",Zk="/cozy-preview/assets/wavy-floor-lamp-1BJBLV8q.png",Nk="/cozy-preview/assets/wavy-floor-lamp-Iy8llzr8.svg",Fk="/cozy-preview/assets/acorn-friend-SMoU5de2.png",jk="/cozy-preview/assets/acorn-friend-BsLiZ2Z_.svg",Gk="/cozy-preview/assets/apple-tree-CN7tYao3.png",Yk="/cozy-preview/assets/apple-tree-DGIUIjY1.svg",Kk="/cozy-preview/assets/big-wardrobe-DcZpROWW.png",Xk="/cozy-preview/assets/big-wardrobe-BnfnkPXl.svg",Jk="/cozy-preview/assets/box-stack-DBdO-RRV.png",e_="/cozy-preview/assets/box-stack-ji13G2mP.svg",t_="/cozy-preview/assets/brick-fireplace-CxelyhgA.png",n_="/cozy-preview/assets/brick-fireplace-BGCbiSK5.svg",s_="/cozy-preview/assets/bulletin-board-BWUCktvK.png",i_="/cozy-preview/assets/bulletin-board-DqA69wQH.svg",o_="/cozy-preview/assets/cozy-mug-DGMQRJK7.png",a_="/cozy-preview/assets/cozy-mug-CFJEPRKb.svg",r_="/cozy-preview/assets/cream-sofa-Dzaz9Eg9.png",l_="/cozy-preview/assets/cream-sofa-CB4EWIDp.svg",c_="/cozy-preview/assets/fire-pit-FhRYTkJU.png",d_="/cozy-preview/assets/fire-pit-DTyRokIj.svg",p_="/cozy-preview/assets/glass-cabinet-C1Dud5Om.png",f_="/cozy-preview/assets/glass-cabinet-BCHExP4F.svg",g_="/cozy-preview/assets/hanging-lantern-5_A0FrVU.png",h_="/cozy-preview/assets/hanging-lantern-DZbXB8L1.svg",u_="/cozy-preview/assets/knit-cushion-CeEpuawZ.png",m_="/cozy-preview/assets/knit-cushion-DUewI6rR.svg",y_="/cozy-preview/assets/ladder-shelf-kDBx9ho_.png",w_="/cozy-preview/assets/ladder-shelf-DXYDmQiE.svg",b_="/cozy-preview/assets/landscape-art-CXy-fkYO.png",v_="/cozy-preview/assets/landscape-art-CdCqCPL2.svg",k_="/cozy-preview/assets/lattice-bench-BQ7wYgqI.png",__="/cozy-preview/assets/lattice-bench-D3zCZTQp.svg",$_="/cozy-preview/assets/leaf-wreath-01dJ9WfP.png",x_="/cozy-preview/assets/leaf-wreath-DUjq1MWh.svg",M_="/cozy-preview/assets/mini-greenhouse-DLsY7-VZ.png",L_="/cozy-preview/assets/mini-greenhouse-CGE5F9A_.svg",E_="/cozy-preview/assets/moving-box-DszcEI-k.png",C_="/cozy-preview/assets/moving-box-CZXbXcJO.svg",S_="/cozy-preview/assets/picnic-basket-CYmGfWoy.png",z_="/cozy-preview/assets/picnic-basket-D72DCNRY.svg",P_="/cozy-preview/assets/round-rug-DZTiY9p2.png",T_="/cozy-preview/assets/round-rug-D8ePosbv.svg",B_="/cozy-preview/assets/sale-sign-CLwCvavX.png",R_="/cozy-preview/assets/sale-sign-CXWpgQt5.svg",A_="/cozy-preview/assets/sprout-pot-BlPwmBjK.png",D_="/cozy-preview/assets/sprout-pot-BbXk09mS.svg",I_="/cozy-preview/assets/stripe-runner-CWfHHL2f.png",H_="/cozy-preview/assets/stripe-runner-ClycKEW5.svg",O_="/cozy-preview/assets/trailing-plant-BBqKhPvp.png",W_="/cozy-preview/assets/trailing-plant-NbG7dy8O.svg",V_="/cozy-preview/assets/wall-clock-ItDQFPVO.png",U_="/cozy-preview/assets/wall-clock-CDC1o6eG.svg",Q_="/cozy-preview/assets/wh-arc-floor-lamp-Dg8j_uAI.png",q_="/cozy-preview/assets/wh-arc-floor-lamp-BKVes2Fd.svg",Z_="/cozy-preview/assets/wh-book-stack-9oDTUUnY.png",N_="/cozy-preview/assets/wh-book-stack-DjDFey2h.svg",F_="/cozy-preview/assets/wh-dresser-DhrzqcZ2.png",j_="/cozy-preview/assets/wh-dresser-Y-jnNt5q.svg",G_="/cozy-preview/assets/wh-fiddle-leaf-fig-Bt0Bc12k.png",Y_="/cozy-preview/assets/wh-fiddle-leaf-fig-B0-kGmHI.svg",K_="/cozy-preview/assets/wh-kitchen-counter-BWikwkWo.png",X_="/cozy-preview/assets/wh-kitchen-counter-BtBenu6u.svg",J_="/cozy-preview/assets/wh-nightstand-BXusZ0A4.png",e8="/cozy-preview/assets/wh-nightstand-DPUoV5aO.svg",t8="/cozy-preview/assets/wh-pendant-lamp-DbfSrUho.png",n8="/cozy-preview/assets/wh-pendant-lamp-DBg4p7hi.svg",s8="/cozy-preview/assets/wh-snake-plant-kt_6Tus5.png",i8="/cozy-preview/assets/wh-snake-plant-Cj3bHF25.svg",o8="/cozy-preview/assets/wh-string-lights-CWVP27K_.png",a8="/cozy-preview/assets/wh-string-lights-C3JVBkgW.svg",r8="/cozy-preview/assets/wh-teapot-BclPHtYN.png",l8="/cozy-preview/assets/wh-teapot-kevlW5hN.svg",c8="/cozy-preview/assets/wood-armchair-BoX1llWe.png",d8="/cozy-preview/assets/wood-armchair-DNVhKBWe.svg",p8="/cozy-preview/assets/wood-bookshelf-CfgOK-7q.png",f8="/cozy-preview/assets/wood-bookshelf-CvT7GAuI.svg",g8="/cozy-preview/assets/wood-coffee-table-DmAJknnU.png",h8="/cozy-preview/assets/wood-coffee-table-CuAR_7Kr.svg",u8="/cozy-preview/assets/wood-desk-S1h5jwM2.png",m8="/cozy-preview/assets/wood-desk-DPCJq_XQ.svg",y8="/cozy-preview/assets/wood-stool-BWBID67e.png",w8="/cozy-preview/assets/wood-stool-CV7YeZwC.svg",b8="/cozy-preview/assets/wooden-bed-511IemjK.png",v8="/cozy-preview/assets/wooden-bed-Qj-sf8yq.svg",k8="/cozy-preview/assets/wc-bauble-garland-PlBim-j0.webp",_8="/cozy-preview/assets/wc-berry-wreath-BtfH1PGe.webp",$8="/cozy-preview/assets/wc-birch-basket-vRxqyB3J.webp",x8="/cozy-preview/assets/wc-cabin-picture-B-lavF1R.webp",M8="/cozy-preview/assets/wc-candle-trio-CjQ7YYcj.webp",L8="/cozy-preview/assets/wc-cane-lamp-OhwvqNa-.webp",E8="/cozy-preview/assets/wc-cinnamon-tray-CxLrtplK.webp",C8="/cozy-preview/assets/wc-cocoa-cart-BkMzGgs0.webp",S8="/cozy-preview/assets/wc-cocoa-mug-qa2xzTYd.webp",z8="/cozy-preview/assets/wc-cocoa-pot-bLgiaNKD.webp",P8="/cozy-preview/assets/wc-cookie-oven-D2Ud1EPt.webp",T8="/cozy-preview/assets/wc-cookie-plate-RhDZYroJ.webp",B8="/cozy-preview/assets/wc-frost-bookcase-BMd6DAXH.webp",R8="/cozy-preview/assets/wc-frosted-pine-BupMG4GK.webp",A8="/cozy-preview/assets/wc-fur-bench-B1nXjHAR.webp",D8="/cozy-preview/assets/wc-gingerbread-village-8pOXPPCY.webp",I8="/cozy-preview/assets/wc-gingerbread-PGlclkJ_.webp",H8="/cozy-preview/assets/wc-globe-lamp-DUCVl_3A.webp",O8="/cozy-preview/assets/wc-holiday-tree-CO0SBlqY.webp",W8="/cozy-preview/assets/wc-holly-CD8teo0a.webp",V8="/cozy-preview/assets/wc-ice-skates-D49y8YK1.webp",U8="/cozy-preview/assets/wc-ice-wardrobe-Dliflqpp.webp",Q8="/cozy-preview/assets/wc-knit-armchair-84rhSw_8.webp",q8="/cozy-preview/assets/wc-lantern-81B3e5fN.webp",Z8="/cozy-preview/assets/wc-log-bench-qQ1zT34_.webp",N8="/cozy-preview/assets/wc-marshmallow-jar-DeWRr-zf.webp",F8="/cozy-preview/assets/wc-mitten-line-sg-sweCl.webp",j8="/cozy-preview/assets/wc-mitten-ottoman-H5qkjso6.webp",G8="/cozy-preview/assets/wc-mug-shelf-DlWrwZYo.webp",Y8="/cozy-preview/assets/wc-nutcracker-BGZe5tYy.webp",K8="/cozy-preview/assets/wc-penguin-chair-CDM1eIxo.webp",X8="/cozy-preview/assets/wc-penguin-plush-C8B27KcB.webp",J8="/cozy-preview/assets/wc-peppermint-counter-CPl6TA0h.webp",e3="/cozy-preview/assets/wc-peppermint-rug-3nakY_gB.webp",t3="/cozy-preview/assets/wc-pinecone-garland-s7ZWASw2.webp",n3="/cozy-preview/assets/wc-pinecone-table-DlJvjB-2.webp",s3="/cozy-preview/assets/wc-plaid-bed-eAhWKZdO.webp",i3="/cozy-preview/assets/wc-plaid-sofa-kvF30vEn.webp",o3="/cozy-preview/assets/wc-poinsettia-C-S-MDMu.webp",a3="/cozy-preview/assets/wc-polar-plush-BUVRTt7t.webp",r3="/cozy-preview/assets/wc-pom-rug-B-JF-heA.webp",l3="/cozy-preview/assets/wc-present-stack-Do2pEHLF.webp",c3="/cozy-preview/assets/wc-reindeer-CbKEp6CE.webp",d3="/cozy-preview/assets/wc-sled-table-Bd2cST9J.webp",p3="/cozy-preview/assets/wc-sleigh-planter-Bfcxvgbk.webp",f3="/cozy-preview/assets/wc-snow-globe-BcGMsnmh.webp",g3="/cozy-preview/assets/wc-snow-mobile-F06-kuT7.webp",h3="/cozy-preview/assets/wc-snow-nightstand-D6RhLncP.webp",u3="/cozy-preview/assets/wc-snow-window-dOxdYTSk.webp",m3="/cozy-preview/assets/wc-snowman-gxLBKnIO.webp",y3="/cozy-preview/assets/wc-snowshoes-CZcMT0Qx.webp",w3="/cozy-preview/assets/wc-sock-hamper-mesU3CG3.webp",b3="/cozy-preview/assets/wc-star-topper-c4tXfpV6.webp",v3="/cozy-preview/assets/wc-stocking-row-Dz0-4wTi.webp",k3="/cozy-preview/assets/wc-stone-hearth-1blXXfiH.webp",_3="/cozy-preview/assets/wc-twinkle-lamp-CYcQjW3A.webp",$3="/cozy-preview/assets/wc-twinkle-string-Olg29poj.webp",x3="/cozy-preview/assets/wc-window-seat-B7CwlRjl.webp",M3="/cozy-preview/assets/wc-woodstove-Cf0xJFnD.webp",L3="/cozy-preview/assets/cc-butter-polka-DGTIwtTO.png",E3="/cozy-preview/assets/cc-butter-polka-CmiHLPHI.svg",C3="/cozy-preview/assets/cc-cream-hex-DMlsmhhY.png",S3="/cozy-preview/assets/cc-cream-hex-Bkf3o84Z.svg",z3="/cozy-preview/assets/cc-lavender-lattice-D6QyuSPi.png",P3="/cozy-preview/assets/cc-lavender-lattice-DhxILx5n.svg",T3="/cozy-preview/assets/cc-lilac-gingham-C8gKChr3.png",B3="/cozy-preview/assets/cc-lilac-gingham-C-WPjvD8.svg",R3="/cozy-preview/assets/cc-mint-checks-Bj1xaUgE.png",A3="/cozy-preview/assets/cc-mint-checks-BKmyOLlr.svg",D3="/cozy-preview/assets/cc-mint-florals-DubHlfkl.png",I3="/cozy-preview/assets/cc-mint-florals-Dz8qRBHw.svg",H3="/cozy-preview/assets/cc-peach-scallops-3xV_Pu-6.png",O3="/cozy-preview/assets/cc-peach-scallops-GPn_mXbS.svg",W3="/cozy-preview/assets/cc-pink-plaid-C9HKdB4f.png",V3="/cozy-preview/assets/cc-pink-plaid-VgppBwax.svg",U3="/cozy-preview/assets/cc-rag-planks-B67vRZlX.png",Q3="/cozy-preview/assets/cc-rag-planks-C5Hombhc.svg",q3="/cozy-preview/assets/cc-rose-herringbone-Cmke3vGv.png",Z3="/cozy-preview/assets/cc-rose-herringbone-CQRix6_f.svg",N3="/cozy-preview/assets/lilac-stripes-DcsSoVwO.png",F3="/cozy-preview/assets/lilac-stripes-yb9DhjTf.svg",j3="/cozy-preview/assets/lilac-terrazzo-DOghNP_d.png",G3="/cozy-preview/assets/lilac-terrazzo-8CaN2qhK.svg",Y3="/cozy-preview/assets/mint-bubbles-DtsYAubK.png",K3="/cozy-preview/assets/mint-bubbles-BIQM5a2P.svg",X3="/cozy-preview/assets/pink-check-floor-DjPuYxlq.png",J3="/cozy-preview/assets/pink-check-floor-Cy9k3Fal.svg",e$="/cozy-preview/assets/pink-hearts-DP4TxPV5.png",t$="/cozy-preview/assets/pink-hearts-BpVCT-98.svg",n$="/cozy-preview/assets/cloud-sky-CbZL0zcC.svg",s$="/cozy-preview/assets/pastel-planks-BAcEss7w.svg",i$="/cozy-preview/assets/soft-carpet-BSwTSDW1.svg",o$="/cozy-preview/assets/star-sprinkle-5bH7qjW0.svg",a$="/cozy-preview/assets/tiny-hearts-C-RHlg1h.svg",r$="/cozy-preview/assets/butter-check-floor-yLFbEdi4.png",l$="/cozy-preview/assets/butter-check-floor-C8HdmZ0P.svg",c$="/cozy-preview/assets/mint-checks-7rTweT19.png",d$="/cozy-preview/assets/mint-checks-rWbOdhfH.svg",p$="/cozy-preview/assets/sky-clouds-9-shWk3w.png",f$="/cozy-preview/assets/sky-clouds-DUJlygwI.svg",g$="/cozy-preview/assets/sky-tiles-Cu-Ga741.png",h$="/cozy-preview/assets/sky-tiles-xxuodD5m.svg",u$="/cozy-preview/assets/sunny-stars-Bc3CbIvZ.png",m$="/cozy-preview/assets/sunny-stars-C6fsFX70.svg",y$="/cozy-preview/assets/leafy-cream-Cv5o-u-w.png",w$="/cozy-preview/assets/leafy-cream-WIcyLI1T.svg",b$="/cozy-preview/assets/orange-gingham-BjUerG-F.png",v$="/cozy-preview/assets/orange-gingham-CVNizWBt.svg",k$="/cozy-preview/assets/terracotta-tiles-dXqpLLce.png",_$="/cozy-preview/assets/terracotta-tiles-j3yOSRI7.svg",$$="/cozy-preview/assets/wood-panel-BGEVUu4R.png",x$="/cozy-preview/assets/wood-panel-Dob8WRpW.svg",M$="/cozy-preview/assets/wood-planks-vE8-OOXo.png",L$="/cozy-preview/assets/wood-planks-4TUYjAkF.svg",E$="/cozy-preview/assets/wc-cabin-planks-Icu9n6YO.webp",C$="/cozy-preview/assets/wc-candy-stripe-cOBsT1Xj.webp",S$="/cozy-preview/assets/wc-frosty-dots-DmQgGwJW.webp",z$="/cozy-preview/assets/wc-mint-pine-5FYK_dVo.webp",P$="/cozy-preview/assets/wc-peppermint-tiles-ChaNg2gF.webp",T$="/cozy-preview/assets/wc-red-plaid-CcQ3BMhN.webp",B$="/cozy-preview/assets/wc-snow-knit-DEFXSv74.webp",R$="/cozy-preview/assets/wc-snowflake-sky-DrRAdoDP.webp",tp={small:80,medium:150,large:260},A$={"welcome-home":"Welcome Home","sunny-vibes":"Sunny Vibes",glossy:"Glossy",cottage:"Cozy Cottage",...Yu},jf=e=>A$[e]??e.replace(/[-_]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()),D$=Object.assign({"../assets/items/manifest.json":K1,"../assets/patterns/manifest.json":X1}),np=Object.assign({"../assets/items/bedroom/alarm-clock.png":J1,"../assets/items/bedroom/alarm-clock.svg":e2,"../assets/items/bedroom/bedtime-snack.png":t2,"../assets/items/bedroom/bedtime-snack.svg":n2,"../assets/items/bedroom/book-stack.png":s2,"../assets/items/bedroom/book-stack.svg":i2,"../assets/items/bedroom/bunk-bed.png":o2,"../assets/items/bedroom/bunk-bed.svg":a2,"../assets/items/bedroom/bunny-slippers.png":r2,"../assets/items/bedroom/bunny-slippers.svg":l2,"../assets/items/bedroom/canopy-bed.png":c2,"../assets/items/bedroom/canopy-bed.svg":d2,"../assets/items/bedroom/cat-bed.png":p2,"../assets/items/bedroom/cat-bed.svg":f2,"../assets/items/bedroom/cloud-rug.png":g2,"../assets/items/bedroom/cloud-rug.svg":h2,"../assets/items/bedroom/cloud-shelf.png":u2,"../assets/items/bedroom/cloud-shelf.svg":m2,"../assets/items/bedroom/cork-board.png":y2,"../assets/items/bedroom/cork-board.svg":w2,"../assets/items/bedroom/daisy-pot.png":b2,"../assets/items/bedroom/daisy-pot.svg":v2,"../assets/items/bedroom/desk.png":k2,"../assets/items/bedroom/desk.svg":_2,"../assets/items/bedroom/dino-plush.png":$2,"../assets/items/bedroom/dino-plush.svg":x2,"../assets/items/bedroom/doll-house.png":M2,"../assets/items/bedroom/doll-house.svg":L2,"../assets/items/bedroom/dresser.png":E2,"../assets/items/bedroom/dresser.svg":C2,"../assets/items/bedroom/egg-chair.png":S2,"../assets/items/bedroom/egg-chair.svg":z2,"../assets/items/bedroom/floor-fan.png":P2,"../assets/items/bedroom/floor-fan.svg":T2,"../assets/items/bedroom/guinea-pig.png":B2,"../assets/items/bedroom/guinea-pig.svg":R2,"../assets/items/bedroom/hamster-cage.png":A2,"../assets/items/bedroom/hamster-cage.svg":D2,"../assets/items/bedroom/heart-rug.png":I2,"../assets/items/bedroom/heart-rug.svg":H2,"../assets/items/bedroom/lava-lamp.png":O2,"../assets/items/bedroom/lava-lamp.svg":W2,"../assets/items/bedroom/moon-night-light.png":V2,"../assets/items/bedroom/moon-night-light.svg":U2,"../assets/items/bedroom/nightstand.png":Q2,"../assets/items/bedroom/nightstand.svg":q2,"../assets/items/bedroom/paper-lantern.png":Z2,"../assets/items/bedroom/paper-lantern.svg":N2,"../assets/items/bedroom/piggy-bank.png":F2,"../assets/items/bedroom/piggy-bank.svg":j2,"../assets/items/bedroom/plant-stand.png":G2,"../assets/items/bedroom/plant-stand.svg":Y2,"../assets/items/bedroom/play-tent.png":K2,"../assets/items/bedroom/play-tent.svg":X2,"../assets/items/bedroom/star-mobile.png":J2,"../assets/items/bedroom/star-mobile.svg":ey,"../assets/items/bedroom/toy-chest.png":ty,"../assets/items/bedroom/toy-chest.svg":ny,"../assets/items/bedroom/toy-robot.png":sy,"../assets/items/bedroom/toy-robot.svg":iy,"../assets/items/bedroom/toy-train.png":oy,"../assets/items/bedroom/toy-train.svg":ay,"../assets/items/bedroom/unicorn-plush.png":ry,"../assets/items/bedroom/unicorn-plush.svg":ly,"../assets/items/bedroom/wardrobe.png":cy,"../assets/items/bedroom/wardrobe.svg":dy,"../assets/items/kitchen/bananas.png":py,"../assets/items/kitchen/bananas.svg":fy,"../assets/items/kitchen/bar-stool.png":gy,"../assets/items/kitchen/bar-stool.svg":hy,"../assets/items/kitchen/bread-loaf.png":uy,"../assets/items/kitchen/bread-loaf.svg":my,"../assets/items/kitchen/chick.png":yy,"../assets/items/kitchen/chick.svg":wy,"../assets/items/kitchen/china-hutch.png":by,"../assets/items/kitchen/china-hutch.svg":vy,"../assets/items/kitchen/cocoa-mug.png":ky,"../assets/items/kitchen/cocoa-mug.svg":_y,"../assets/items/kitchen/cookie-jar.png":$y,"../assets/items/kitchen/cookie-jar.svg":xy,"../assets/items/kitchen/cooking-pot.png":My,"../assets/items/kitchen/cooking-pot.svg":Ly,"../assets/items/kitchen/cupcake.png":Ey,"../assets/items/kitchen/cupcake.svg":Cy,"../assets/items/kitchen/dish-rack.png":Sy,"../assets/items/kitchen/dish-rack.svg":zy,"../assets/items/kitchen/fruit-bowl.png":Py,"../assets/items/kitchen/fruit-bowl.svg":Ty,"../assets/items/kitchen/frying-pan.png":By,"../assets/items/kitchen/frying-pan.svg":Ry,"../assets/items/kitchen/happy-fridge.png":Ay,"../assets/items/kitchen/happy-fridge.svg":Dy,"../assets/items/kitchen/herb-box.png":Iy,"../assets/items/kitchen/herb-box.svg":Hy,"../assets/items/kitchen/high-chair.png":Oy,"../assets/items/kitchen/high-chair.svg":Wy,"../assets/items/kitchen/ice-cream.png":Vy,"../assets/items/kitchen/ice-cream.svg":Uy,"../assets/items/kitchen/kettle.png":Qy,"../assets/items/kitchen/kettle.svg":qy,"../assets/items/kitchen/kitchen-counter.png":Zy,"../assets/items/kitchen/kitchen-counter.svg":Ny,"../assets/items/kitchen/kitchen-sink.png":Fy,"../assets/items/kitchen/kitchen-sink.svg":jy,"../assets/items/kitchen/lemon-tree.png":Gy,"../assets/items/kitchen/lemon-tree.svg":Yy,"../assets/items/kitchen/microwave.png":Ky,"../assets/items/kitchen/microwave.svg":Xy,"../assets/items/kitchen/milk-bottle.png":Jy,"../assets/items/kitchen/milk-bottle.svg":ew,"../assets/items/kitchen/pancakes.png":tw,"../assets/items/kitchen/pancakes.svg":nw,"../assets/items/kitchen/pantry-shelf.png":sw,"../assets/items/kitchen/pantry-shelf.svg":iw,"../assets/items/kitchen/pendant-lamp.png":ow,"../assets/items/kitchen/pendant-lamp.svg":aw,"../assets/items/kitchen/pet-bowl.png":rw,"../assets/items/kitchen/pet-bowl.svg":lw,"../assets/items/kitchen/rice-cooker.png":cw,"../assets/items/kitchen/rice-cooker.svg":dw,"../assets/items/kitchen/runner-rug.png":pw,"../assets/items/kitchen/runner-rug.svg":fw,"../assets/items/kitchen/spice-rack.png":gw,"../assets/items/kitchen/spice-rack.svg":hw,"../assets/items/kitchen/stand-mixer.png":uw,"../assets/items/kitchen/stand-mixer.svg":mw,"../assets/items/kitchen/teapot.png":yw,"../assets/items/kitchen/teapot.svg":ww,"../assets/items/kitchen/toaster.png":bw,"../assets/items/kitchen/toaster.svg":vw,"../assets/items/kitchen/utensil-rail.png":kw,"../assets/items/kitchen/utensil-rail.svg":_w,"../assets/items/kitchen/watermelon-slice.png":$w,"../assets/items/kitchen/watermelon-slice.svg":xw,"../assets/items/living/aquarium.png":Mw,"../assets/items/living/aquarium.svg":Lw,"../assets/items/living/arc-floor-lamp.png":Ew,"../assets/items/living/arc-floor-lamp.svg":Cw,"../assets/items/living/bean-bag.png":Sw,"../assets/items/living/bean-bag.svg":zw,"../assets/items/living/bird-cage.png":Pw,"../assets/items/living/bird-cage.svg":Tw,"../assets/items/living/blanket-basket.png":Bw,"../assets/items/living/blanket-basket.svg":Rw,"../assets/items/living/building-blocks.png":Aw,"../assets/items/living/building-blocks.svg":Dw,"../assets/items/living/coffee-table.png":Iw,"../assets/items/living/coffee-table.svg":Hw,"../assets/items/living/comfy-armchair.png":Ow,"../assets/items/living/comfy-armchair.svg":Ww,"../assets/items/living/cubby-shelf.png":Vw,"../assets/items/living/cubby-shelf.svg":Uw,"../assets/items/living/daisy-rug.png":Qw,"../assets/items/living/daisy-rug.svg":qw,"../assets/items/living/fiddle-leaf-fig.png":Zw,"../assets/items/living/fiddle-leaf-fig.svg":Nw,"../assets/items/living/fireplace.png":Fw,"../assets/items/living/fireplace.svg":jw,"../assets/items/living/globe.png":Gw,"../assets/items/living/globe.svg":Yw,"../assets/items/living/hanging-planter.png":Kw,"../assets/items/living/hanging-planter.svg":Xw,"../assets/items/living/monstera-plant.png":Jw,"../assets/items/living/monstera-plant.svg":eb,"../assets/items/living/piano.png":tb,"../assets/items/living/piano.svg":nb,"../assets/items/living/popcorn.png":sb,"../assets/items/living/popcorn.svg":ib,"../assets/items/living/pouf.png":ob,"../assets/items/living/pouf.svg":ab,"../assets/items/living/rainbow-rug.png":rb,"../assets/items/living/rainbow-rug.svg":lb,"../assets/items/living/rainbow-wall-art.png":cb,"../assets/items/living/rainbow-wall-art.svg":db,"../assets/items/living/retro-radio.png":pb,"../assets/items/living/retro-radio.svg":fb,"../assets/items/living/rocking-chair.png":gb,"../assets/items/living/rocking-chair.svg":hb,"../assets/items/living/rocking-horse.png":ub,"../assets/items/living/rocking-horse.svg":mb,"../assets/items/living/snake-plant.png":yb,"../assets/items/living/snake-plant.svg":wb,"../assets/items/living/string-lights.png":bb,"../assets/items/living/string-lights.svg":vb,"../assets/items/living/succulent-trio.png":kb,"../assets/items/living/succulent-trio.svg":_b,"../assets/items/living/tassel-rug.png":$b,"../assets/items/living/tassel-rug.svg":xb,"../assets/items/living/throw-pillow.png":Mb,"../assets/items/living/throw-pillow.svg":Lb,"../assets/items/living/toy-car.png":Eb,"../assets/items/living/toy-car.svg":Cb,"../assets/items/living/tulip-vase.png":Sb,"../assets/items/living/tulip-vase.svg":zb,"../assets/items/living/turtle.png":Pb,"../assets/items/living/turtle.svg":Tb,"../assets/items/living/tv-stand.png":Bb,"../assets/items/living/tv-stand.svg":Rb,"../assets/items/living/wall-shelf.png":Ab,"../assets/items/living/wall-shelf.svg":Db,"../assets/items/packs/cottage/cc-bakery-shelf.png":Ib,"../assets/items/packs/cottage/cc-bakery-shelf.svg":Hb,"../assets/items/packs/cottage/cc-breakfast-table.png":Ob,"../assets/items/packs/cottage/cc-breakfast-table.svg":Wb,"../assets/items/packs/cottage/cc-bubble-chair.png":Vb,"../assets/items/packs/cottage/cc-bubble-chair.svg":Ub,"../assets/items/packs/cottage/cc-canopy-daybed.png":Qb,"../assets/items/packs/cottage/cc-canopy-daybed.svg":qb,"../assets/items/packs/cottage/cc-cloud-beanbag.png":Zb,"../assets/items/packs/cottage/cc-cloud-beanbag.svg":Nb,"../assets/items/packs/cottage/cc-cloud-lamp.png":Fb,"../assets/items/packs/cottage/cc-cloud-lamp.svg":jb,"../assets/items/packs/cottage/cc-cottage-aquarium.png":Gb,"../assets/items/packs/cottage/cc-cottage-aquarium.svg":Yb,"../assets/items/packs/cottage/cc-cupcake-stand.png":Kb,"../assets/items/packs/cottage/cc-cupcake-stand.svg":Xb,"../assets/items/packs/cottage/cc-dryer-chair.png":Jb,"../assets/items/packs/cottage/cc-dryer-chair.svg":ev,"../assets/items/packs/cottage/cc-fairy-garland.png":tv,"../assets/items/packs/cottage/cc-fairy-garland.svg":nv,"../assets/items/packs/cottage/cc-fairy-shelf.png":sv,"../assets/items/packs/cottage/cc-fairy-shelf.svg":iv,"../assets/items/packs/cottage/cc-flower-kettle.png":ov,"../assets/items/packs/cottage/cc-flower-kettle.svg":av,"../assets/items/packs/cottage/cc-flower-lamp.png":rv,"../assets/items/packs/cottage/cc-flower-lamp.svg":lv,"../assets/items/packs/cottage/cc-heart-bed.png":cv,"../assets/items/packs/cottage/cc-heart-bed.svg":dv,"../assets/items/packs/cottage/cc-heart-clock.png":pv,"../assets/items/packs/cottage/cc-heart-clock.svg":fv,"../assets/items/packs/cottage/cc-heart-pouf.png":gv,"../assets/items/packs/cottage/cc-heart-pouf.svg":hv,"../assets/items/packs/cottage/cc-heart-rug.png":uv,"../assets/items/packs/cottage/cc-heart-rug.svg":mv,"../assets/items/packs/cottage/cc-jewel-box.png":yv,"../assets/items/packs/cottage/cc-jewel-box.svg":wv,"../assets/items/packs/cottage/cc-light-vanity.png":bv,"../assets/items/packs/cottage/cc-light-vanity.svg":vv,"../assets/items/packs/cottage/cc-macaron-jar.png":kv,"../assets/items/packs/cottage/cc-macaron-jar.svg":_v,"../assets/items/packs/cottage/cc-macrame-swing.png":$v,"../assets/items/packs/cottage/cc-macrame-swing.svg":xv,"../assets/items/packs/cottage/cc-mani-chair.png":Mv,"../assets/items/packs/cottage/cc-mani-chair.svg":Lv,"../assets/items/packs/cottage/cc-mint-fridge.png":Ev,"../assets/items/packs/cottage/cc-mint-fridge.svg":Cv,"../assets/items/packs/cottage/cc-mushroom-stool.png":Sv,"../assets/items/packs/cottage/cc-mushroom-stool.svg":zv,"../assets/items/packs/cottage/cc-pastel-range.png":Pv,"../assets/items/packs/cottage/cc-pastel-range.svg":Tv,"../assets/items/packs/cottage/cc-perfume-tray.png":Bv,"../assets/items/packs/cottage/cc-perfume-tray.svg":Rv,"../assets/items/packs/cottage/cc-petal-table.png":Av,"../assets/items/packs/cottage/cc-petal-table.svg":Dv,"../assets/items/packs/cottage/cc-plant-wall.png":Iv,"../assets/items/packs/cottage/cc-plant-wall.svg":Hv,"../assets/items/packs/cottage/cc-reading-nook.png":Ov,"../assets/items/packs/cottage/cc-reading-nook.svg":Wv,"../assets/items/packs/cottage/cc-record-player.png":Vv,"../assets/items/packs/cottage/cc-record-player.svg":Uv,"../assets/items/packs/cottage/cc-ribbon-mirror.png":Qv,"../assets/items/packs/cottage/cc-ribbon-mirror.svg":qv,"../assets/items/packs/cottage/cc-scallop-curtains.png":Zv,"../assets/items/packs/cottage/cc-scallop-curtains.svg":Nv,"../assets/items/packs/cottage/cc-scallop-loveseat.png":Fv,"../assets/items/packs/cottage/cc-scallop-loveseat.svg":jv,"../assets/items/packs/cottage/cc-star-dresser.png":Gv,"../assets/items/packs/cottage/cc-star-dresser.svg":Yv,"../assets/items/packs/cottage/cc-teapot-set.png":Kv,"../assets/items/packs/cottage/cc-teapot-set.svg":Xv,"../assets/items/packs/cottage/cc-window-seat.png":Jv,"../assets/items/packs/cottage/cc-window-seat.svg":e4,"../assets/items/packs/glossy/arched-shelf.png":t4,"../assets/items/packs/glossy/arched-shelf.svg":n4,"../assets/items/packs/glossy/blob-rug.png":s4,"../assets/items/packs/glossy/blob-rug.svg":i4,"../assets/items/packs/glossy/bubbly-plant.png":o4,"../assets/items/packs/glossy/bubbly-plant.svg":a4,"../assets/items/packs/glossy/bud-vase.png":r4,"../assets/items/packs/glossy/bud-vase.svg":l4,"../assets/items/packs/glossy/comb-brush.png":c4,"../assets/items/packs/glossy/comb-brush.svg":d4,"../assets/items/packs/glossy/cream-jars.png":p4,"../assets/items/packs/glossy/cream-jars.svg":f4,"../assets/items/packs/glossy/drop-lamp.png":g4,"../assets/items/packs/glossy/drop-lamp.svg":h4,"../assets/items/packs/glossy/droplet-buddy.png":u4,"../assets/items/packs/glossy/droplet-buddy.svg":m4,"../assets/items/packs/glossy/fancy-sofa.png":y4,"../assets/items/packs/glossy/fancy-sofa.svg":w4,"../assets/items/packs/glossy/flower-cart.png":b4,"../assets/items/packs/glossy/flower-cart.svg":v4,"../assets/items/packs/glossy/foot-spa.png":k4,"../assets/items/packs/glossy/foot-spa.svg":_4,"../assets/items/packs/glossy/globe-pendants.png":$4,"../assets/items/packs/glossy/globe-pendants.svg":x4,"../assets/items/packs/glossy/glow-mirror.png":M4,"../assets/items/packs/glossy/glow-mirror.svg":L4,"../assets/items/packs/glossy/gold-floor-mirror.png":E4,"../assets/items/packs/glossy/gold-floor-mirror.svg":C4,"../assets/items/packs/glossy/hair-dryer.png":S4,"../assets/items/packs/glossy/hair-dryer.svg":z4,"../assets/items/packs/glossy/heart-plant.png":P4,"../assets/items/packs/glossy/heart-plant.svg":T4,"../assets/items/packs/glossy/heart-pouf.png":B4,"../assets/items/packs/glossy/heart-pouf.svg":R4,"../assets/items/packs/glossy/lilac-curtain.png":A4,"../assets/items/packs/glossy/lilac-curtain.svg":D4,"../assets/items/packs/glossy/lotion-trio.png":I4,"../assets/items/packs/glossy/lotion-trio.svg":H4,"../assets/items/packs/glossy/mani-lamp.png":O4,"../assets/items/packs/glossy/mani-lamp.svg":W4,"../assets/items/packs/glossy/nail-table.png":V4,"../assets/items/packs/glossy/nail-table.svg":U4,"../assets/items/packs/glossy/pebble-rug.png":Q4,"../assets/items/packs/glossy/pebble-rug.svg":q4,"../assets/items/packs/glossy/perfume-bottle.png":Z4,"../assets/items/packs/glossy/perfume-bottle.svg":N4,"../assets/items/packs/glossy/pink-fountain.png":F4,"../assets/items/packs/glossy/pink-fountain.svg":j4,"../assets/items/packs/glossy/pink-vanity.png":G4,"../assets/items/packs/glossy/pink-vanity.svg":Y4,"../assets/items/packs/glossy/polish-bottle.png":K4,"../assets/items/packs/glossy/polish-bottle.svg":X4,"../assets/items/packs/glossy/polish-rack.png":J4,"../assets/items/packs/glossy/polish-rack.svg":e6,"../assets/items/packs/glossy/reception-desk.png":t6,"../assets/items/packs/glossy/reception-desk.svg":n6,"../assets/items/packs/glossy/salon-chair.png":s6,"../assets/items/packs/glossy/salon-chair.svg":i6,"../assets/items/packs/glossy/scent-candle.png":o6,"../assets/items/packs/glossy/scent-candle.svg":a6,"../assets/items/packs/glossy/spray-bottle.png":r6,"../assets/items/packs/glossy/spray-bottle.svg":l6,"../assets/items/packs/glossy/star-wall-sign.png":c6,"../assets/items/packs/glossy/star-wall-sign.svg":d6,"../assets/items/packs/glossy/swivel-stool.png":p6,"../assets/items/packs/glossy/swivel-stool.svg":f6,"../assets/items/packs/glossy/tiered-tray.png":g6,"../assets/items/packs/glossy/tiered-tray.svg":h6,"../assets/items/packs/glossy/towel-cart.png":u6,"../assets/items/packs/glossy/towel-cart.svg":m6,"../assets/items/packs/glossy/towel-stack.png":y6,"../assets/items/packs/glossy/towel-stack.svg":w6,"../assets/items/packs/glossy/vine-planter.png":b6,"../assets/items/packs/glossy/vine-planter.svg":v6,"../assets/items/packs/glossy/waiting-bench.png":k6,"../assets/items/packs/glossy/waiting-bench.svg":_6,"../assets/items/packs/glossy/wash-chair.png":$6,"../assets/items/packs/glossy/wash-chair.svg":x6,"../assets/items/packs/sunny-vibes/arched-mirror.png":M6,"../assets/items/packs/sunny-vibes/arched-mirror.svg":L6,"../assets/items/packs/sunny-vibes/big-monitor.png":E6,"../assets/items/packs/sunny-vibes/big-monitor.svg":C6,"../assets/items/packs/sunny-vibes/boba-cup.png":S6,"../assets/items/packs/sunny-vibes/boba-cup.svg":z6,"../assets/items/packs/sunny-vibes/bubble-bath.png":P6,"../assets/items/packs/sunny-vibes/bubble-bath.svg":T6,"../assets/items/packs/sunny-vibes/cactus-buddy.png":B6,"../assets/items/packs/sunny-vibes/cactus-buddy.svg":R6,"../assets/items/packs/sunny-vibes/caterpillar-plush.png":A6,"../assets/items/packs/sunny-vibes/caterpillar-plush.svg":D6,"../assets/items/packs/sunny-vibes/checker-bed.png":I6,"../assets/items/packs/sunny-vibes/checker-bed.svg":H6,"../assets/items/packs/sunny-vibes/checker-rug.png":O6,"../assets/items/packs/sunny-vibes/checker-rug.svg":W6,"../assets/items/packs/sunny-vibes/clothes-rail.png":V6,"../assets/items/packs/sunny-vibes/clothes-rail.svg":U6,"../assets/items/packs/sunny-vibes/cloud-sofa.png":Q6,"../assets/items/packs/sunny-vibes/cloud-sofa.svg":q6,"../assets/items/packs/sunny-vibes/cube-shelf.png":Z6,"../assets/items/packs/sunny-vibes/cube-shelf.svg":N6,"../assets/items/packs/sunny-vibes/curvy-desk.png":F6,"../assets/items/packs/sunny-vibes/curvy-desk.svg":j6,"../assets/items/packs/sunny-vibes/cute-speaker.png":G6,"../assets/items/packs/sunny-vibes/cute-speaker.svg":Y6,"../assets/items/packs/sunny-vibes/desk-lamp.png":K6,"../assets/items/packs/sunny-vibes/desk-lamp.svg":X6,"../assets/items/packs/sunny-vibes/desk-mic.png":J6,"../assets/items/packs/sunny-vibes/desk-mic.svg":ek,"../assets/items/packs/sunny-vibes/flower-lamp.png":tk,"../assets/items/packs/sunny-vibes/flower-lamp.svg":nk,"../assets/items/packs/sunny-vibes/frog-plush.png":sk,"../assets/items/packs/sunny-vibes/frog-plush.svg":ik,"../assets/items/packs/sunny-vibes/game-controller.png":ok,"../assets/items/packs/sunny-vibes/game-controller.svg":ak,"../assets/items/packs/sunny-vibes/gaming-chair.png":rk,"../assets/items/packs/sunny-vibes/gaming-chair.svg":lk,"../assets/items/packs/sunny-vibes/hamster-pet.png":ck,"../assets/items/packs/sunny-vibes/hamster-pet.svg":dk,"../assets/items/packs/sunny-vibes/headphones.png":pk,"../assets/items/packs/sunny-vibes/headphones.svg":fk,"../assets/items/packs/sunny-vibes/heart-light.png":gk,"../assets/items/packs/sunny-vibes/heart-light.svg":hk,"../assets/items/packs/sunny-vibes/keyboard.png":uk,"../assets/items/packs/sunny-vibes/keyboard.svg":mk,"../assets/items/packs/sunny-vibes/mini-fridge.png":yk,"../assets/items/packs/sunny-vibes/mini-fridge.svg":wk,"../assets/items/packs/sunny-vibes/pastel-wardrobe.png":bk,"../assets/items/packs/sunny-vibes/pastel-wardrobe.svg":vk,"../assets/items/packs/sunny-vibes/phone-stand.png":kk,"../assets/items/packs/sunny-vibes/phone-stand.svg":_k,"../assets/items/packs/sunny-vibes/pothos-plant.png":$k,"../assets/items/packs/sunny-vibes/pothos-plant.svg":xk,"../assets/items/packs/sunny-vibes/puffy-stool.png":Mk,"../assets/items/packs/sunny-vibes/puffy-stool.svg":Lk,"../assets/items/packs/sunny-vibes/ring-light.png":Ek,"../assets/items/packs/sunny-vibes/ring-light.svg":Ck,"../assets/items/packs/sunny-vibes/side-table-round.png":Sk,"../assets/items/packs/sunny-vibes/side-table-round.svg":zk,"../assets/items/packs/sunny-vibes/star-lamp.png":Pk,"../assets/items/packs/sunny-vibes/star-lamp.svg":Tk,"../assets/items/packs/sunny-vibes/sticker-board.png":Bk,"../assets/items/packs/sunny-vibes/sticker-board.svg":Rk,"../assets/items/packs/sunny-vibes/sunny-art.png":Ak,"../assets/items/packs/sunny-vibes/sunny-art.svg":Dk,"../assets/items/packs/sunny-vibes/sv-bean-bag.png":Ik,"../assets/items/packs/sunny-vibes/sv-bean-bag.svg":Hk,"../assets/items/packs/sunny-vibes/sv-cloud-rug.png":Ok,"../assets/items/packs/sunny-vibes/sv-cloud-rug.svg":Wk,"../assets/items/packs/sunny-vibes/sv-wall-shelf.png":Vk,"../assets/items/packs/sunny-vibes/sv-wall-shelf.svg":Uk,"../assets/items/packs/sunny-vibes/vlog-camera.png":Qk,"../assets/items/packs/sunny-vibes/vlog-camera.svg":qk,"../assets/items/packs/sunny-vibes/wavy-floor-lamp.png":Zk,"../assets/items/packs/sunny-vibes/wavy-floor-lamp.svg":Nk,"../assets/items/packs/welcome-home/acorn-friend.png":Fk,"../assets/items/packs/welcome-home/acorn-friend.svg":jk,"../assets/items/packs/welcome-home/apple-tree.png":Gk,"../assets/items/packs/welcome-home/apple-tree.svg":Yk,"../assets/items/packs/welcome-home/big-wardrobe.png":Kk,"../assets/items/packs/welcome-home/big-wardrobe.svg":Xk,"../assets/items/packs/welcome-home/box-stack.png":Jk,"../assets/items/packs/welcome-home/box-stack.svg":e_,"../assets/items/packs/welcome-home/brick-fireplace.png":t_,"../assets/items/packs/welcome-home/brick-fireplace.svg":n_,"../assets/items/packs/welcome-home/bulletin-board.png":s_,"../assets/items/packs/welcome-home/bulletin-board.svg":i_,"../assets/items/packs/welcome-home/cozy-mug.png":o_,"../assets/items/packs/welcome-home/cozy-mug.svg":a_,"../assets/items/packs/welcome-home/cream-sofa.png":r_,"../assets/items/packs/welcome-home/cream-sofa.svg":l_,"../assets/items/packs/welcome-home/fire-pit.png":c_,"../assets/items/packs/welcome-home/fire-pit.svg":d_,"../assets/items/packs/welcome-home/glass-cabinet.png":p_,"../assets/items/packs/welcome-home/glass-cabinet.svg":f_,"../assets/items/packs/welcome-home/hanging-lantern.png":g_,"../assets/items/packs/welcome-home/hanging-lantern.svg":h_,"../assets/items/packs/welcome-home/knit-cushion.png":u_,"../assets/items/packs/welcome-home/knit-cushion.svg":m_,"../assets/items/packs/welcome-home/ladder-shelf.png":y_,"../assets/items/packs/welcome-home/ladder-shelf.svg":w_,"../assets/items/packs/welcome-home/landscape-art.png":b_,"../assets/items/packs/welcome-home/landscape-art.svg":v_,"../assets/items/packs/welcome-home/lattice-bench.png":k_,"../assets/items/packs/welcome-home/lattice-bench.svg":__,"../assets/items/packs/welcome-home/leaf-wreath.png":$_,"../assets/items/packs/welcome-home/leaf-wreath.svg":x_,"../assets/items/packs/welcome-home/mini-greenhouse.png":M_,"../assets/items/packs/welcome-home/mini-greenhouse.svg":L_,"../assets/items/packs/welcome-home/moving-box.png":E_,"../assets/items/packs/welcome-home/moving-box.svg":C_,"../assets/items/packs/welcome-home/picnic-basket.png":S_,"../assets/items/packs/welcome-home/picnic-basket.svg":z_,"../assets/items/packs/welcome-home/round-rug.png":P_,"../assets/items/packs/welcome-home/round-rug.svg":T_,"../assets/items/packs/welcome-home/sale-sign.png":B_,"../assets/items/packs/welcome-home/sale-sign.svg":R_,"../assets/items/packs/welcome-home/sprout-pot.png":A_,"../assets/items/packs/welcome-home/sprout-pot.svg":D_,"../assets/items/packs/welcome-home/stripe-runner.png":I_,"../assets/items/packs/welcome-home/stripe-runner.svg":H_,"../assets/items/packs/welcome-home/trailing-plant.png":O_,"../assets/items/packs/welcome-home/trailing-plant.svg":W_,"../assets/items/packs/welcome-home/wall-clock.png":V_,"../assets/items/packs/welcome-home/wall-clock.svg":U_,"../assets/items/packs/welcome-home/wh-arc-floor-lamp.png":Q_,"../assets/items/packs/welcome-home/wh-arc-floor-lamp.svg":q_,"../assets/items/packs/welcome-home/wh-book-stack.png":Z_,"../assets/items/packs/welcome-home/wh-book-stack.svg":N_,"../assets/items/packs/welcome-home/wh-dresser.png":F_,"../assets/items/packs/welcome-home/wh-dresser.svg":j_,"../assets/items/packs/welcome-home/wh-fiddle-leaf-fig.png":G_,"../assets/items/packs/welcome-home/wh-fiddle-leaf-fig.svg":Y_,"../assets/items/packs/welcome-home/wh-kitchen-counter.png":K_,"../assets/items/packs/welcome-home/wh-kitchen-counter.svg":X_,"../assets/items/packs/welcome-home/wh-nightstand.png":J_,"../assets/items/packs/welcome-home/wh-nightstand.svg":e8,"../assets/items/packs/welcome-home/wh-pendant-lamp.png":t8,"../assets/items/packs/welcome-home/wh-pendant-lamp.svg":n8,"../assets/items/packs/welcome-home/wh-snake-plant.png":s8,"../assets/items/packs/welcome-home/wh-snake-plant.svg":i8,"../assets/items/packs/welcome-home/wh-string-lights.png":o8,"../assets/items/packs/welcome-home/wh-string-lights.svg":a8,"../assets/items/packs/welcome-home/wh-teapot.png":r8,"../assets/items/packs/welcome-home/wh-teapot.svg":l8,"../assets/items/packs/welcome-home/wood-armchair.png":c8,"../assets/items/packs/welcome-home/wood-armchair.svg":d8,"../assets/items/packs/welcome-home/wood-bookshelf.png":p8,"../assets/items/packs/welcome-home/wood-bookshelf.svg":f8,"../assets/items/packs/welcome-home/wood-coffee-table.png":g8,"../assets/items/packs/welcome-home/wood-coffee-table.svg":h8,"../assets/items/packs/welcome-home/wood-desk.png":u8,"../assets/items/packs/welcome-home/wood-desk.svg":m8,"../assets/items/packs/welcome-home/wood-stool.png":y8,"../assets/items/packs/welcome-home/wood-stool.svg":w8,"../assets/items/packs/welcome-home/wooden-bed.png":b8,"../assets/items/packs/welcome-home/wooden-bed.svg":v8,"../assets/items/packs/winter/wc-bauble-garland.webp":k8,"../assets/items/packs/winter/wc-berry-wreath.webp":_8,"../assets/items/packs/winter/wc-birch-basket.webp":$8,"../assets/items/packs/winter/wc-cabin-picture.webp":x8,"../assets/items/packs/winter/wc-candle-trio.webp":M8,"../assets/items/packs/winter/wc-cane-lamp.webp":L8,"../assets/items/packs/winter/wc-cinnamon-tray.webp":E8,"../assets/items/packs/winter/wc-cocoa-cart.webp":C8,"../assets/items/packs/winter/wc-cocoa-mug.webp":S8,"../assets/items/packs/winter/wc-cocoa-pot.webp":z8,"../assets/items/packs/winter/wc-cookie-oven.webp":P8,"../assets/items/packs/winter/wc-cookie-plate.webp":T8,"../assets/items/packs/winter/wc-frost-bookcase.webp":B8,"../assets/items/packs/winter/wc-frosted-pine.webp":R8,"../assets/items/packs/winter/wc-fur-bench.webp":A8,"../assets/items/packs/winter/wc-gingerbread-village.webp":D8,"../assets/items/packs/winter/wc-gingerbread.webp":I8,"../assets/items/packs/winter/wc-globe-lamp.webp":H8,"../assets/items/packs/winter/wc-holiday-tree.webp":O8,"../assets/items/packs/winter/wc-holly.webp":W8,"../assets/items/packs/winter/wc-ice-skates.webp":V8,"../assets/items/packs/winter/wc-ice-wardrobe.webp":U8,"../assets/items/packs/winter/wc-knit-armchair.webp":Q8,"../assets/items/packs/winter/wc-lantern.webp":q8,"../assets/items/packs/winter/wc-log-bench.webp":Z8,"../assets/items/packs/winter/wc-marshmallow-jar.webp":N8,"../assets/items/packs/winter/wc-mitten-line.webp":F8,"../assets/items/packs/winter/wc-mitten-ottoman.webp":j8,"../assets/items/packs/winter/wc-mug-shelf.webp":G8,"../assets/items/packs/winter/wc-nutcracker.webp":Y8,"../assets/items/packs/winter/wc-penguin-chair.webp":K8,"../assets/items/packs/winter/wc-penguin-plush.webp":X8,"../assets/items/packs/winter/wc-peppermint-counter.webp":J8,"../assets/items/packs/winter/wc-peppermint-rug.webp":e3,"../assets/items/packs/winter/wc-pinecone-garland.webp":t3,"../assets/items/packs/winter/wc-pinecone-table.webp":n3,"../assets/items/packs/winter/wc-plaid-bed.webp":s3,"../assets/items/packs/winter/wc-plaid-sofa.webp":i3,"../assets/items/packs/winter/wc-poinsettia.webp":o3,"../assets/items/packs/winter/wc-polar-plush.webp":a3,"../assets/items/packs/winter/wc-pom-rug.webp":r3,"../assets/items/packs/winter/wc-present-stack.webp":l3,"../assets/items/packs/winter/wc-reindeer.webp":c3,"../assets/items/packs/winter/wc-sled-table.webp":d3,"../assets/items/packs/winter/wc-sleigh-planter.webp":p3,"../assets/items/packs/winter/wc-snow-globe.webp":f3,"../assets/items/packs/winter/wc-snow-mobile.webp":g3,"../assets/items/packs/winter/wc-snow-nightstand.webp":h3,"../assets/items/packs/winter/wc-snow-window.webp":u3,"../assets/items/packs/winter/wc-snowman.webp":m3,"../assets/items/packs/winter/wc-snowshoes.webp":y3,"../assets/items/packs/winter/wc-sock-hamper.webp":w3,"../assets/items/packs/winter/wc-star-topper.webp":b3,"../assets/items/packs/winter/wc-stocking-row.webp":v3,"../assets/items/packs/winter/wc-stone-hearth.webp":k3,"../assets/items/packs/winter/wc-twinkle-lamp.webp":_3,"../assets/items/packs/winter/wc-twinkle-string.webp":$3,"../assets/items/packs/winter/wc-window-seat.webp":x3,"../assets/items/packs/winter/wc-woodstove.webp":M3}),sp=Object.assign({"../assets/patterns/cottage/cc-butter-polka.png":L3,"../assets/patterns/cottage/cc-butter-polka.svg":E3,"../assets/patterns/cottage/cc-cream-hex.png":C3,"../assets/patterns/cottage/cc-cream-hex.svg":S3,"../assets/patterns/cottage/cc-lavender-lattice.png":z3,"../assets/patterns/cottage/cc-lavender-lattice.svg":P3,"../assets/patterns/cottage/cc-lilac-gingham.png":T3,"../assets/patterns/cottage/cc-lilac-gingham.svg":B3,"../assets/patterns/cottage/cc-mint-checks.png":R3,"../assets/patterns/cottage/cc-mint-checks.svg":A3,"../assets/patterns/cottage/cc-mint-florals.png":D3,"../assets/patterns/cottage/cc-mint-florals.svg":I3,"../assets/patterns/cottage/cc-peach-scallops.png":H3,"../assets/patterns/cottage/cc-peach-scallops.svg":O3,"../assets/patterns/cottage/cc-pink-plaid.png":W3,"../assets/patterns/cottage/cc-pink-plaid.svg":V3,"../assets/patterns/cottage/cc-rag-planks.png":U3,"../assets/patterns/cottage/cc-rag-planks.svg":Q3,"../assets/patterns/cottage/cc-rose-herringbone.png":q3,"../assets/patterns/cottage/cc-rose-herringbone.svg":Z3,"../assets/patterns/glossy/lilac-stripes.png":N3,"../assets/patterns/glossy/lilac-stripes.svg":F3,"../assets/patterns/glossy/lilac-terrazzo.png":j3,"../assets/patterns/glossy/lilac-terrazzo.svg":G3,"../assets/patterns/glossy/mint-bubbles.png":Y3,"../assets/patterns/glossy/mint-bubbles.svg":K3,"../assets/patterns/glossy/pink-check-floor.png":X3,"../assets/patterns/glossy/pink-check-floor.svg":J3,"../assets/patterns/glossy/pink-hearts.png":e$,"../assets/patterns/glossy/pink-hearts.svg":t$,"../assets/patterns/nursery/cloud-sky.svg":n$,"../assets/patterns/nursery/pastel-planks.svg":s$,"../assets/patterns/nursery/soft-carpet.svg":i$,"../assets/patterns/nursery/star-sprinkle.svg":o$,"../assets/patterns/nursery/tiny-hearts.svg":a$,"../assets/patterns/sunny-vibes/butter-check-floor.png":r$,"../assets/patterns/sunny-vibes/butter-check-floor.svg":l$,"../assets/patterns/sunny-vibes/mint-checks.png":c$,"../assets/patterns/sunny-vibes/mint-checks.svg":d$,"../assets/patterns/sunny-vibes/sky-clouds.png":p$,"../assets/patterns/sunny-vibes/sky-clouds.svg":f$,"../assets/patterns/sunny-vibes/sky-tiles.png":g$,"../assets/patterns/sunny-vibes/sky-tiles.svg":h$,"../assets/patterns/sunny-vibes/sunny-stars.png":u$,"../assets/patterns/sunny-vibes/sunny-stars.svg":m$,"../assets/patterns/welcome-home/leafy-cream.png":y$,"../assets/patterns/welcome-home/leafy-cream.svg":w$,"../assets/patterns/welcome-home/orange-gingham.png":b$,"../assets/patterns/welcome-home/orange-gingham.svg":v$,"../assets/patterns/welcome-home/terracotta-tiles.png":k$,"../assets/patterns/welcome-home/terracotta-tiles.svg":_$,"../assets/patterns/welcome-home/wood-panel.png":$$,"../assets/patterns/welcome-home/wood-panel.svg":x$,"../assets/patterns/welcome-home/wood-planks.png":M$,"../assets/patterns/welcome-home/wood-planks.svg":L$,"../assets/patterns/winter/wc-cabin-planks.webp":E$,"../assets/patterns/winter/wc-candy-stripe.webp":C$,"../assets/patterns/winter/wc-frosty-dots.webp":S$,"../assets/patterns/winter/wc-mint-pine.webp":z$,"../assets/patterns/winter/wc-peppermint-tiles.webp":P$,"../assets/patterns/winter/wc-red-plaid.webp":T$,"../assets/patterns/winter/wc-snow-knit.webp":B$,"../assets/patterns/winter/wc-snowflake-sky.webp":R$});function I$(e,t){if(!e||!e.trim())return[];try{const n=JSON.parse(e);return(Array.isArray(n)?n:[...Array.isArray(n?.items)?n.items:[],...Array.isArray(n?.patterns)?n.patterns:[]]).filter(i=>i&&typeof i.slug=="string"&&i.slug.trim())}catch(n){return console.warn(`[packs] ${t} is not valid JSON; ignoring`,n),[]}}const Gf=Object.entries(D$).flatMap(([e,t])=>I$(t,e)),H$=["svg","png","webp","SVG","PNG","WEBP"];function Yf(e,t,n,s){for(const o of H$){const a=e[`../assets/${t}/${n}/${s}.${o}`];if(a)return a}const i=Object.keys(e).find(o=>o.split("/").pop().replace(/\.\w+$/,"")===s);return i?e[i]:void 0}const ip={furniture:"furniture",appliance:"furniture",appliances:"furniture",seating:"furniture",storage:"furniture",bed:"furniture",table:"furniture",decor:"decor",rug:"decor",rugs:"decor",lighting:"decor",light:"decor",lamp:"decor",toy:"decor",toys:"decor","wall-art":"decor",art:"decor",beauty:"decor",plant:"plants",plants:"plants",flower:"plants",flowers:"plants",food:"food",drink:"food",drinks:"food",snack:"food",pet:"pets",pets:"pets",animal:"pets",animals:"pets"};function O$(e){const t=typeof e=="string"?e.trim().toLowerCase():"";return ip[t]??ip[t.replace(/s$/,"")]??"decor"}const di=(e,t)=>typeof e=="string"&&e.trim()?e.trim().toLowerCase():t,Kf=e=>["wallpaper","floor"].includes(di(e.type,"")),op=new Set,W$=Gf.filter(e=>!Kf(e)).flatMap(e=>{const t=di(e.room,"any"),n=e.slug.trim();if(op.has(n))return[];op.add(n);const i=[e.svg,e.png].filter(h=>typeof h=="string").map(h=>np["../assets/items/"+h.replace(/^\.?\//,"")]).find(Boolean)??Yf(np,"items",t,n);if(!i)return console.warn(`[packs] no image for items/${t}/${n}`),[];const o=di(e.pack,""),a=di(e.size,"medium"),r=O$(e.category),l=typeof e.gameW=="number"&&e.gameW>20&&e.gameW<800?e.gameW:tp[a]??tp.medium,c=typeof e.widthUnits=="number"&&typeof e.heightUnits=="number"&&e.widthUnits>0&&e.heightUnits>0?e.heightUnits/e.widthUnits:1,p=Math.round(l*Math.min(4,Math.max(.2,c))),d=typeof e.holdable=="boolean"?e.holdable:a!=="large"&&r!=="furniture",g=e.tag==="lighting"||/lamp|light|lantern|candle/i.test(n);return[{kind:`pack:${n}`,name:e.name||n,cat:r,rooms:[t],w:l,h:p,wall:e.wall===!0||void 0,svg:"",img:i,pack:o||void 0,holdable:d,light:g||void 0}]}),Bl=Gf.filter(Kf).flatMap(e=>{const t=di(e.pack,"extra"),n=e.slug.trim(),i=[e.svg,e.png].filter(o=>typeof o=="string").map(o=>sp["../assets/patterns/"+o.replace(/^\.?\//,"")]).find(Boolean)??Yf(sp,"patterns",t,n);return i?[{id:`${t}/${n}`,name:e.name||n,pack:t,kind:di(e.type,"wallpaper"),url:i}]:(console.warn(`[packs] no image for patterns/${t}/${n}`),[])}),ap=Object.fromEntries(Bl.map(e=>[e.id,e])),$n="#5a3d5c",T=`stroke="${$n}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Xf=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="2.4" fill="${$n}"/><circle cx="${t}" cy="${n}" r="2.4" fill="${$n}"/><circle cx="${e+.8}" cy="${n-.8}" r=".8" fill="#fff"/><circle cx="${t+.8}" cy="${n-.8}" r=".8" fill="#fff"/>`,Jf=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/><ellipse cx="${t}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/>`,Je='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>';function Xr(e,t,n){return`${Je}<ellipse cx="50" cy="78" rx="28" ry="16" fill="${t}" ${T}/><path d="M24 62 Q50 48 76 62 V78 Q50 92 24 78 Z" fill="${t}" ${T}/>
    <circle cx="50" cy="40" r="18" fill="${e}" ${T}/>${Xf(43,57,40)}${Jf(38,62,48)}<path d="M46 50 q4 3 8 0" fill="none" ${T}/>
    <path d="M38 26 Q50 16 62 26" fill="${n}" ${T}/><circle cx="50" cy="24" r="3" fill="${n}" ${T}/>`}const eg=[{kind:"crib",name:"Crib",cat:"furniture",w:260,svg:`${Je}<rect x="8" y="28" width="84" height="58" rx="10" fill="#fff" ${T}/><path d="M8 42 H92 M20 28 V86 M36 28 V86 M50 28 V86 M64 28 V86 M80 28 V86" ${T}/><rect x="6" y="22" width="88" height="12" rx="6" fill="#9ad7f5" ${T}/><rect x="14" y="48" width="72" height="16" rx="6" fill="#ffe0ec"/><ellipse cx="32" cy="56" rx="8" ry="5" fill="#fff" ${T}/><ellipse cx="50" cy="56" rx="8" ry="5" fill="#c9e7ff" ${T}/>`},{kind:"bassinet",name:"Bassinet",cat:"furniture",w:170,svg:`${Je}<path d="M18 78 Q8 78 10 64 L22 36 H78 L90 64 Q92 78 82 78 Z" fill="#fff" ${T}/><ellipse cx="50" cy="36" rx="32" ry="10" fill="#fff" ${T}/><path d="M22 40 Q50 52 78 40" fill="#ffe0ec" ${T}/><ellipse cx="50" cy="44" rx="16" ry="7" fill="#fff"/><path d="M30 78 L22 94 M70 78 L78 94" ${T}/><ellipse cx="50" cy="90" rx="28" ry="4" fill="none" ${T}/><path d="M14 22 Q50 4 86 22" fill="none" stroke="#9ad7f5" stroke-width="6" stroke-linecap="round"/>`},{kind:"rocker",name:"Rocker",cat:"furniture",w:190,svg:`${Je}<path d="M16 88 Q50 98 84 88" fill="none" ${T}/><path d="M28 84 Q50 74 72 84" fill="#c9a0dc" ${T}/><rect x="30" y="28" width="40" height="36" rx="12" fill="#e4ccf2" ${T}/><path d="M22 48 Q18 70 30 80 H70 Q82 70 78 48 Z" fill="#f6e6ff" ${T}/><rect x="36" y="58" width="28" height="12" rx="6" fill="#ffc8dd" ${T}/><circle cx="50" cy="40" r="6" fill="#fff" opacity=".7"/>`},{kind:"changing-table",name:"Changing Table",cat:"furniture",w:230,svg:`${Je}<rect x="8" y="36" width="84" height="16" rx="8" fill="#fff" ${T}/><rect x="14" y="40" width="72" height="8" rx="4" fill="#ffd6e8"/><rect x="16" y="52" width="28" height="32" rx="6" fill="#bde0fe" ${T}/><rect x="56" y="52" width="28" height="32" rx="6" fill="#c9f0d8" ${T}/><path d="M22 60 H38 M22 68 H38 M62 60 H78 M62 68 H78" ${T}/><rect x="18" y="84" width="8" height="10" rx="2" fill="${$n}"/><rect x="74" y="84" width="8" height="10" rx="2" fill="${$n}"/><rect x="34" y="22" width="18" height="12" rx="3" fill="#ffe0ec" ${T}/><rect x="54" y="24" width="16" height="10" rx="3" fill="#fff6d8" ${T}/>`},{kind:"toy-bin",name:"Toy Bin",cat:"furniture",w:150,svg:`${Je}<path d="M14 40 H86 L78 90 H22 Z" fill="#ffd166" ${T}/><rect x="10" y="32" width="80" height="14" rx="7" fill="#ffe08a" ${T}/><circle cx="36" cy="58" r="8" fill="#ff8fab" ${T}/><rect x="50" y="50" width="16" height="16" rx="3" fill="#8ecae6" ${T}/><circle cx="62" cy="70" r="6" fill="#90e0a8" ${T}/>`},{kind:"baby-shelf",name:"Bookshelf",cat:"furniture",w:150,svg:`${Je}<rect x="14" y="8" width="72" height="84" rx="8" fill="#f3d2b5" ${T}/><path d="M14 36 H86 M14 64 H86" ${T}/><rect x="22" y="14" width="8" height="18" rx="2" fill="#ff8fab" ${T}/><rect x="32" y="18" width="8" height="14" rx="2" fill="#8ecae6" ${T}/><rect x="44" y="14" width="8" height="18" rx="2" fill="#ffd166" ${T}/><rect x="58" y="16" width="8" height="16" rx="2" fill="#90e0a8" ${T}/><circle cx="34" cy="50" r="7" fill="#ffadad" ${T}/><rect x="50" y="44" width="18" height="14" rx="3" fill="#c9a0dc" ${T}/><ellipse cx="40" cy="78" rx="14" ry="8" fill="#fff" ${T}/>`},{kind:"doll-rose",name:"Rose Doll",cat:"decor",w:80,svg:Xr("#f6d3b0","#ffc2d4","#ff8fab")},{kind:"doll-honey",name:"Honey Doll",cat:"decor",w:80,svg:Xr("#e0ac69","#cdeffd","#ffd166")},{kind:"doll-cocoa",name:"Cocoa Doll",cat:"decor",w:80,svg:Xr("#8d5524","#d8f3dc","#c9a0dc")},{kind:"crib-mobile",name:"Crib Mobile",cat:"decor",w:150,wall:!0,svg:`<path d="M50 6 V22" ${T}/><ellipse cx="50" cy="28" rx="28" ry="8" fill="#fff" ${T}/><path d="M28 32 V48 M50 36 V58 M72 32 V48" ${T}/><circle cx="28" cy="56" r="8" fill="#ffd166" ${T}/><circle cx="50" cy="68" r="9" fill="#ff8fab" ${T}/><path d="M72 56 l6 4 -6 4 -6 -4 z" fill="#8ecae6" ${T}/><circle cx="28" cy="54" r="2" fill="#fff"/><circle cx="50" cy="66" r="2" fill="#fff"/>`},{kind:"night-light",name:"Night Light",cat:"decor",w:70,svg:`${Je}<circle cx="50" cy="46" r="22" fill="#fff6c8" ${T}/><circle cx="50" cy="46" r="12" fill="#ffe08a"/><path d="M50 18 V10 M30 26 L24 20 M70 26 L76 20 M24 46 H14 M86 46 H76" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/><rect x="40" y="70" width="20" height="16" rx="4" fill="#c9a0dc" ${T}/><circle cx="50" cy="78" r="3" fill="#ff8fab"/>`},{kind:"bunny-plush",name:"Bunny Plush",cat:"decor",w:90,svg:`${Je}<ellipse cx="34" cy="28" rx="8" ry="18" fill="#fff" ${T}/><ellipse cx="66" cy="28" rx="8" ry="18" fill="#fff" ${T}/><ellipse cx="34" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="66" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="50" cy="74" rx="26" ry="18" fill="#fff" ${T}/><circle cx="50" cy="50" r="20" fill="#fff" ${T}/>${Xf(43,57,50)}<path d="M47 58 l3 3 3 -3" fill="none" ${T}/>${Jf(38,62,58)}`},{kind:"stacking-rings",name:"Stacking Rings",cat:"decor",w:70,svg:`${Je}<ellipse cx="50" cy="86" rx="26" ry="7" fill="#ff8fab" ${T}/><ellipse cx="50" cy="74" rx="20" ry="6" fill="#ffd166" ${T}/><ellipse cx="50" cy="64" rx="15" ry="5" fill="#8ecae6" ${T}/><ellipse cx="50" cy="56" rx="10" ry="4" fill="#90e0a8" ${T}/><rect x="46" y="28" width="8" height="40" rx="4" fill="#c9a0dc" ${T}/><circle cx="50" cy="24" r="7" fill="#ffb3c6" ${T}/>`},{kind:"rattle",name:"Rattle",cat:"decor",w:60,svg:`${Je}<circle cx="38" cy="40" r="20" fill="#ffd166" ${T}/><circle cx="32" cy="34" r="5" fill="#fff" opacity=".7"/><rect x="50" y="52" width="10" height="28" rx="5" fill="#ff8fab" ${T} transform="rotate(-20 55 66)"/><circle cx="68" cy="82" r="8" fill="#8ecae6" ${T}/>`},{kind:"baby-bottle",name:"Baby Bottle",cat:"food",w:55,svg:`${Je}<rect x="36" y="8" width="28" height="12" rx="4" fill="#c9a0dc" ${T}/><rect x="42" y="18" width="16" height="8" fill="#fff" ${T}/><path d="M30 30 H70 L66 88 Q50 96 34 88 Z" fill="#e7f6ff" ${T}/><path d="M32 48 H68 L66 80 Q50 88 34 80 Z" fill="#fff" opacity=".85"/><rect x="34" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="46" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="58" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/>`},{kind:"blocks",name:"Baby Blocks",cat:"decor",w:90,svg:`${Je}<rect x="14" y="58" width="28" height="28" rx="4" fill="#ff8fab" ${T}/><rect x="40" y="46" width="28" height="28" rx="4" fill="#ffd166" ${T}/><rect x="28" y="28" width="26" height="26" rx="4" fill="#8ecae6" ${T}/><path d="M20 72 H36 M48 60 H62 M34 42 H48" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"rocking-horse",name:"Little Rocking Horse",cat:"decor",w:180,svg:`${Je}<path d="M12 86 Q50 98 88 82" fill="none" ${T}/><ellipse cx="48" cy="62" rx="26" ry="14" fill="#e6b88a" ${T}/><path d="M62 58 L84 40 Q92 36 90 48 L74 64 Z" fill="#f0d0b0" ${T}/><circle cx="82" cy="42" r="3" fill="${$n}"/><path d="M70 36 L76 24 L84 34" fill="#ff8fab" ${T}/><rect x="36" y="48" width="16" height="8" rx="3" fill="#c9a0dc" ${T}/><path d="M30 70 L22 84 M58 72 L66 86" ${T}/>`},{kind:"music-box",name:"Music Box",cat:"decor",w:80,svg:`${Je}<rect x="22" y="40" width="56" height="46" rx="8" fill="#f6d6ff" ${T}/><path d="M22 40 L50 22 L78 40" fill="#e4ccf2" ${T}/><circle cx="50" cy="64" r="10" fill="#fff" ${T}/><path d="M50 58 V70 M44 64 H56" ${T}/><circle cx="50" cy="30" r="4" fill="#ffd166" ${T}/>`},{kind:"cloud-rug",name:"Nursery Cloud Rug",cat:"decor",w:340,svg:`<ellipse cx="50" cy="78" rx="46" ry="16" fill="#e7f6ff" ${T}/><circle cx="28" cy="70" r="16" fill="#f4fbff" ${T}/><circle cx="50" cy="62" r="18" fill="#fff" ${T}/><circle cx="72" cy="70" r="16" fill="#f4fbff" ${T}/><ellipse cx="50" cy="78" rx="30" ry="8" fill="#d6f0ff"/>`},{kind:"play-mat",name:"Play Mat",cat:"decor",w:300,svg:`<rect x="6" y="62" width="88" height="30" rx="14" fill="#ffe0ec" ${T}/><path d="M50 70 C42 62 30 64 34 74 C38 82 50 88 50 88 C50 88 62 82 66 74 C70 64 58 62 50 70 Z" fill="#ff8fab" ${T}/><circle cx="22" cy="76" r="5" fill="#ffd166" ${T}/><circle cx="78" cy="76" r="5" fill="#8ecae6" ${T}/>`},{kind:"moon-art",name:"Moon and Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M58 18 A28 28 0 1 0 58 78 A18 18 0 1 1 58 18 Z" fill="#fff3b0" ${T}/><path d="M22 30 l3 7 7 1 -5 5 1 7 -6 -4 -6 4 1 -7 -5 -5 7 -1 z" fill="#ffd166" ${T}/><path d="M78 58 l2 5 5 1 -4 4 1 5 -4 -3 -4 3 1 -5 -4 -4 5 -1 z" fill="#c9e7ff" ${T}/>`},{kind:"nursery-dresser",name:"Nursery Dresser",cat:"furniture",w:170,svg:`${Je}<rect x="14" y="22" width="72" height="68" rx="8" fill="#f6e2c4" ${T}/><path d="M14 44 H86 M14 66 H86" ${T}/><circle cx="50" cy="34" r="3" fill="${$n}"/><circle cx="50" cy="55" r="3" fill="${$n}"/><circle cx="50" cy="76" r="3" fill="${$n}"/><rect x="30" y="10" width="18" height="12" rx="3" fill="#ffc2d4" ${T}/><rect x="52" y="12" width="16" height="10" rx="3" fill="#c9e7ff" ${T}/>`},{kind:"nursery-lamp",name:"Nursery Lamp",cat:"decor",w:80,svg:`${Je}<path d="M28 42 L36 12 H64 L72 42 Z" fill="#fff6c8" ${T}/><rect x="46" y="42" width="8" height="40" rx="4" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="88" rx="20" ry="6" fill="#b388d6" ${T}/><circle cx="46" cy="24" r="3" fill="#fff" opacity=".85"/><path d="M34 20 q6 -8 4 -2" fill="none" stroke="#ffd166" stroke-width="2"/>`},{kind:"nursery-curtains",name:"Curtains",cat:"decor",w:180,wall:!0,svg:`<rect x="16" y="10" width="68" height="50" rx="6" fill="#cfefff" ${T}/><path d="M50 10 V60 M16 34 H84" ${T}/><path d="M8 8 Q18 28 10 92" fill="#ffd6e8" ${T}/><path d="M92 8 Q82 28 90 92" fill="#ffd6e8" ${T}/><rect x="6" y="6" width="88" height="8" rx="3" fill="#f3d2b5" ${T}/>`}],nt="#5a3d5c",v=(e=3.5)=>`stroke="${nt}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function be(e,t,n){const s=Math.round(t*.62);return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="3.4" fill="${nt}" opacity=".08"/><ellipse cx="${e}" cy="${(n+1.2).toFixed(1)}" rx="${s}" ry="1.55" fill="${nt}" opacity=".12"/>`}function ee(e,t=2.2){return`<path d="${e}" fill="none" stroke="#fff" stroke-width="${t}" stroke-linecap="round" opacity=".75"/>`}function ot(e,t=1.15){return`<path d="${e}" fill="none" stroke="${nt}" stroke-width="${t}" stroke-linecap="round" opacity=".2"/>`}function Pc(e,t,n=".7"){return`<radialGradient id="${e}" cx="40%" cy="40%" r="60%"><stop offset="0" stop-color="${t}" stop-opacity="${n}"/><stop offset="1" stop-color="${t}" stop-opacity="0"/></radialGradient>`}function Tc(e,t,n){return`<linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${n}"/></linearGradient>`}function V$(){return typeof location>"u"?!1:/(?:^|[?&])yard=1(?:&|$)/.test(location.search)}function Rl(){return typeof location>"u"?"":new URLSearchParams(location.search).get("shot")||""}const U$={v:1,hair:"pigtails",hairC:"#a0522d",skin:"#f6d2b5",eyes:"big",eyeC:"#5a321c",freckles:!0,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"skirt",bottomC:"#c9a0dc",dress:"sundress",dressC:"#ff8fab",shoes:"maryjanes",shoesC:"#ffd166",acc:["bow"],accC:"#ff7aa8"},Q$=()=>ro(U$),Al=864,Dl={x:1084,y:578,flip:!0},jn={x:1184,y:255},rp={x:1146,y:578},Il={x:940,y:540,flip:!0},Aa=1160,tg={x:824,y:398,w:96,h:230},ng={x:996,y:372,w:82,h:196},q$=[{kind:"yard-swing",x:1266,y:580,scale:132/280},{kind:"lemonade-cart",x:1254,y:471},{kind:"sandbox",x:940,y:482},{kind:"picnic-blanket",x:939,y:420}];function ve(e){return{kind:e.kind,name:e.name,cat:e.cat,w:e.w,h:e.h,vb:e.vb,wall:e.wall,holdable:e.holdable??!1,rooms:["backyard"],svg:e.svg}}const Z$=ve({kind:"yard-swing",name:"A-Frame Swing",cat:"furniture",w:280,h:215,vb:"0 0 130 100",svg:`${be(65,54,96)}
    <path d="M34 18 L50 18 L20 94 H4 Z" fill="#f3d2aa" ${v()}/>
    <path d="M42 24 L50 18 L18 70 H28 Z" fill="#d4a373"/>
    <path d="M80 18 L96 18 L126 94 H110 Z" fill="#e7c49a" ${v()}/>
    <path d="M108 22 L96 18 L126 94 H118 Z" fill="#c99366"/>
    ${ot("M16 50 l8 28 M112 48 l8 30")}
    <rect x="22" y="6" width="86" height="14" rx="2" fill="#f6e0c4" ${v()}/>
    <rect x="86" y="9" width="18" height="8" rx="1" fill="#d4a373"/>
    <rect x="28" y="16" width="74" height="4" fill="#e7c49a"/>
    ${ee("M28 10 h30")}
    <g class="swingSeat">
      <rect x="48" y="74" width="34" height="7" rx="1" fill="#f3d2aa" ${v(2.2)}/>
      <rect x="72" y="76" width="8" height="4" fill="#d4a373"/>
      <path d="M54 20 V78 M76 20 V78" fill="none" ${v(2.2)}/>
      ${ee("M52 76 h14")}
    </g>`}),N$=ve({kind:"sandbox",name:"Sandbox",cat:"furniture",w:120,h:54,vb:"0 0 160 72",svg:`${be(80,64,68)}
    <path d="M108 38 L146 26 L146 52 L108 64 Z" fill="#e7c49a" ${v()}/>
    <path d="M126 36 L142 28 L142 48 L126 56 Z" fill="#c99366"/>
    <path d="M12 40 H108 V64 H12 Z" fill="#f3d2aa" ${v()}/>
    <path d="M12 40 L36 18 L146 18 L108 40 Z" fill="#f6e0c4" ${v()}/>
    <path d="M112 20 L142 20 L108 38 L90 38 Z" fill="#d4a373"/>
    <path d="M34 36 L52 24 L122 24 L100 36 Z" fill="#ffe08a" ${v(2.2)}/>
    <path d="M98 26 L118 26 L100 34 L86 34 Z" fill="#f0c36a"/>
    ${ot("M48 30 q8 2 6 5 M68 28 q10 2 8 6 M58 34 h16")}
    <path d="M76 30 L100 36 L94 48 L70 42 Z" fill="#d7e6f2" ${v(2.2)}/>
    <path d="M88 34 L98 38 L94 44 L84 40 Z" fill="#b7c9d6"/>
    <path d="M52 8 L64 4 L90 34 L78 38 Z" fill="#f0d2b0" ${v()}/>
    <path d="M64 8 L72 6 L90 32 L82 34 Z" fill="#d4a373"/>
    <path d="M46 2 H66 V9 H46 Z" fill="#c99366" ${v(2)}/>
    ${ee("M18 44 h26")}
    ${ee("M44 22 h22")}`}),F$=ve({kind:"little-slide",name:"Little Slide",cat:"furniture",w:150,h:188,vb:"0 0 110 140",svg:`${be(56,44,134)}
    <path d="M50 34 H72 C94 36 102 56 98 82 L92 122 H70 L76 84 C78 60 72 46 52 44 Z" fill="#ffb3c6" ${v()}/>
    <path d="M72 38 C94 42 104 62 100 86 L94 122 H86 L92 86 C94 64 86 48 72 46 Z" fill="#e45d88"/>
    <rect x="14" y="34" width="8" height="96" rx="2" fill="#f3d2aa" ${v()}/>
    <rect x="36" y="34" width="8" height="96" rx="2" fill="#e7c49a" ${v()}/>
    <rect x="40" y="40" width="3" height="84" fill="#c99366"/>
    <rect x="14" y="52" width="30" height="5" rx="1" fill="#f6e0c4" ${v(2.2)}/>
    <rect x="14" y="70" width="30" height="5" rx="1" fill="#f6e0c4" ${v(2.2)}/>
    <rect x="14" y="88" width="30" height="5" rx="1" fill="#f6e0c4" ${v(2.2)}/>
    <rect x="14" y="106" width="30" height="5" rx="1" fill="#f6e0c4" ${v(2.2)}/>
    <rect x="6" y="18" width="56" height="22" rx="3" fill="#f3d2aa" ${v()}/>
    <rect x="6" y="34" width="56" height="6" fill="#d4a373"/>
    <path d="M48 20 H62 V40 H48 Z" fill="#c99366"/>
    ${ee("M12 24 h22")}
    <rect x="12" y="6" width="5" height="16" rx="1" fill="#f0d2b0" ${v(2.2)}/>
    <rect x="40" y="6" width="5" height="16" rx="1" fill="#e7c49a" ${v(2.2)}/>
    <path d="M14 8 H43" fill="none" ${v(2.2)}/>
    <rect x="80" y="116" width="7" height="16" rx="1" fill="#f3d2aa" ${v(2)}/>
    ${ee("M58 42 C74 48 86 66 86 88")}
    ${ot("M80 64 q4 16 2 28")}`}),j$=ve({kind:"yard-bench",name:"Garden Bench",cat:"furniture",w:140,h:100,vb:"0 0 140 100",svg:`${be(70,58,96)}
    <rect x="10" y="8" width="12" height="86" rx="2" fill="#f3d2aa" ${v()}/>
    <rect x="118" y="8" width="12" height="86" rx="2" fill="#e7c49a" ${v()}/>
    <rect x="124" y="12" width="5" height="76" fill="#c99366"/>
    <rect x="28" y="52" width="10" height="42" rx="2" fill="#f0d2b0" ${v()}/>
    <rect x="102" y="52" width="10" height="42" rx="2" fill="#d4a373" ${v()}/>
    <rect x="108" y="56" width="3" height="32" fill="#c99366"/>
    <rect x="18" y="10" width="104" height="8" rx="1" fill="#f6e0c4" ${v(2.2)}/>
    <rect x="18" y="20" width="104" height="8" rx="1" fill="#f3d2aa" ${v(2.2)}/>
    <rect x="18" y="30" width="104" height="8" rx="1" fill="#f3d2aa" ${v(2.2)}/>
    <rect x="18" y="40" width="104" height="8" rx="1" fill="#e7c49a" ${v(2.2)}/>
    <rect x="18" y="48" width="104" height="7" rx="1" fill="#f6e0c4" ${v(2.2)}/>
    <rect x="18" y="57" width="104" height="7" rx="1" fill="#f3d2aa" ${v(2.2)}/>
    <rect x="18" y="66" width="104" height="7" rx="1" fill="#e7c49a" ${v(2.2)}/>
    <rect x="108" y="12" width="10" height="5" fill="#d4a373"/>
    <rect x="108" y="22" width="10" height="5" fill="#c99366"/>
    <rect x="108" y="50" width="10" height="4" fill="#d4a373"/>
    <rect x="108" y="68" width="10" height="4" fill="#c99366"/>
    <path d="M10 46 H40 V56 H10 Z" fill="#f6e0c4" ${v()}/>
    <path d="M100 46 H130 V56 H100 Z" fill="#e7c49a" ${v()}/>
    <path d="M116 48 H128 V54 H116 Z" fill="#c99366"/>
    ${ee("M22 13 h28")}
    ${ee("M14 48 h16")}
    ${ot("M36 24 h48 M36 34 h44 M34 52 h52 M34 62 h46")}`}),G$=ve({kind:"lemonade-cart",name:"Lemonade Cart",cat:"furniture",w:108,h:121,vb:"0 0 100 112",svg:`${be(50,40,106)}
    <circle cx="30" cy="96" r="11" fill="${nt}" ${v(2.2)}/><circle cx="30" cy="96" r="4.5" fill="#ffd166"/>
    <circle cx="72" cy="96" r="11" fill="${nt}" ${v(2.2)}/><circle cx="72" cy="96" r="4.5" fill="#ffd166"/>
    <rect x="18" y="92" width="66" height="5" rx="2" fill="#c99366" ${v(2)}/>
    <rect x="16" y="46" width="68" height="46" rx="3" fill="#fff6ea" ${v()}/>
    <rect x="66" y="50" width="14" height="38" fill="#f0d2a4"/>
    ${ot("M28 56 v28 M42 56 v28 M56 56 v28")}
    ${ee("M20 52 v16")}
    <rect x="12" y="38" width="76" height="12" rx="2" fill="#ffe08a" ${v()}/>
    <rect x="66" y="40" width="18" height="8" fill="#f0c45c"/>
    <path d="M14 40 L22 14 H80 L88 40 Z" fill="#ff8fab" ${v()}/>
    <path d="M34 16 L38 40 H50 L46 15 Z" fill="#fff4f7"/>
    <path d="M58 15 L62 40 H74 L70 15 Z" fill="#fff4f7"/>
    <path d="M72 16 H80 L88 40 H76 Z" fill="#e45d88"/>
    ${ee("M26 20 h18")}
    <path d="M28 52 H44 L42 72 H30 Z" fill="#fff" ${v(2)}/>
    <path d="M30 58 H42 L41 72 H31 Z" fill="#ffe566"/>
    <path d="M28 54 L22 58 L28 62 Z" fill="#fff" ${v(2)}/>
    <path d="M44 56 Q52 60 44 70" fill="none" ${v(2)}/>
    <path d="M56 60 H68 L66 72 H58 Z" fill="#fff" ${v(2)}/>
    <path d="M58 64 H66 L65 72 H59 Z" fill="#ffe566"/>
    <circle cx="78" cy="64" r="7" fill="#ffe566" ${v(2)}/>
    <path d="M78 58 v12 M72 64 h12" fill="none" stroke="#e0a83a" stroke-width="1.3"/>`}),Y$=ve({kind:"sun-lounger",name:"Sun Lounger",cat:"furniture",w:168,h:86,vb:"0 0 170 90",svg:`${be(86,68,84)}
    <path d="M16 66 H28 L32 82 H12 Z" fill="#f3d2aa" ${v()}/>
    <path d="M126 64 H140 L146 82 H120 Z" fill="#d4a373" ${v()}/>
    <path d="M136 68 H142 L146 80 H138 Z" fill="#c99366"/>
    <path d="M12 52 H156 V64 H12 Z" fill="#f3d2aa" ${v()}/>
    <path d="M122 54 H154 V62 H122 Z" fill="#d4a373"/>
    <path d="M28 34 H36 L42 52 H32 Z" fill="#e7c49a" ${v()}/>
    <path d="M50 44 H150 L154 58 H54 Z" fill="#ffd4e2" ${v()}/>
    <path d="M128 48 H150 L154 58 H132 Z" fill="#e888a8"/>
    <path d="M18 6 L60 48 L48 58 L8 16 Z" fill="#ffb3c6" ${v()}/>
    <path d="M38 34 L54 48 L48 56 L30 42 Z" fill="#e45d88"/>
    <ellipse cx="22" cy="14" rx="11" ry="7" fill="#fff" ${v(2.2)}/>
    <path d="M22 8 H30 A7 7 0 0 1 30 20 H22 Z" fill="#ffd0e0"/>
    ${ee("M22 12 L50 40")}
    ${ot("M26 22 L52 46")}`}),K$=ve({kind:"splash-pool",name:"Splash Pool",cat:"furniture",w:176,h:96,vb:"0 0 170 96",svg:`<defs>${Tc("ydpoolW","#f3fbff","#7ec8e3")}</defs>
    ${be(85,72,90)}
    <ellipse cx="85" cy="58" rx="74" ry="28" fill="#8ecae6" ${v()}/>
    <path d="M22 52 Q40 34 78 40" fill="none" stroke="#ff8fab" stroke-width="16" stroke-linecap="round"/>
    <path d="M100 36 Q138 38 152 58" fill="none" stroke="#ffd166" stroke-width="14" stroke-linecap="round"/>
    <path d="M18 66 C22 82 50 90 85 90 C120 90 152 82 154 66 C148 78 120 84 85 84 C50 84 24 78 18 66 Z" fill="#5aa9c6"/>
    <ellipse cx="85" cy="54" rx="48" ry="16" fill="url(#ydpoolW)" ${v(2.2)}/>
    ${ee("M36 50 q20 -10 36 0")}
    <circle cx="128" cy="48" r="4" fill="#fff" ${v(1.6)}/>
    <circle cx="128" cy="48" r="1.6" fill="#8ecae6"/>
    <path d="M70 46 q3 -8 1 0 M96 42 q4 -9 1 1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`}),X$=ve({kind:"picket-gate",name:"Picket Gate",cat:"furniture",w:110,h:150,vb:"0 0 100 136",svg:`${be(50,38,130)}
    <rect x="6" y="16" width="12" height="110" rx="2" fill="#f7fff8" ${v()}/>
    <rect x="82" y="16" width="12" height="110" rx="2" fill="#e7f6ea" ${v()}/>
    <rect x="88" y="20" width="5" height="100" fill="#c5e0c8"/>
    <rect x="4" y="40" width="16" height="6" rx="1" fill="#c99366" ${v(2)}/>
    <rect x="4" y="96" width="16" height="6" rx="1" fill="#c99366" ${v(2)}/>
    <rect x="16" y="38" width="68" height="8" rx="2" fill="#fff" ${v(2.2)}/>
    <rect x="16" y="86" width="68" height="8" rx="2" fill="#fff" ${v(2.2)}/>
    <path d="M20 90 L28 98 L80 46 L72 38 Z" fill="#f7fff8" ${v(2.2)}/>
    <path d="M26 30 L32 14 L38 30 V112 H26 Z" fill="#fff" ${v(2.2)}/>
    <path d="M44 30 L50 14 L56 30 V112 H44 Z" fill="#f7fff8" ${v(2.2)}/>
    <path d="M62 30 L68 14 L74 30 V112 H62 Z" fill="#e7f6ea" ${v(2.2)}/>
    <path d="M68 22 L74 16 L74 108 H68 Z" fill="#c5e0c8"/>
    ${ee("M28 36 v20")}
    <rect x="74" y="60" width="16" height="5" rx="1" fill="#c99366" ${v(2)}/>
    <circle cx="86" cy="62" r="2.6" fill="#ffd166" ${v(1.8)}/>`});function J$(){let e="";for(let t=0;t<6;t++)for(let n=0;n<13;n++)(t+n)%2===0&&(e+=`<rect x="${n*15-6}" y="${t*10}" width="15" height="10" fill="#ff8fab"/>`);return e}const e5=ve({kind:"picnic-blanket",name:"Picnic Blanket",cat:"decor",w:110,h:36,vb:"0 0 180 59",svg:`<defs><clipPath id="ydging"><path d="M22 20 L156 12 L174 44 L36 52 Z"/></clipPath></defs>
    ${be(96,74,54)}
    <path d="M22 20 L156 12 L174 44 L36 52 Z" fill="#fff0f5" ${v()}/>
    <g clip-path="url(#ydging)">${J$()}</g>
    <path d="M148 14 L170 42 L160 46 L138 18 Z" fill="#e45d88"/>
    <path d="M96 30 L128 26 L134 42 L100 46 Z" fill="#f3d2aa" ${v(2)}/>
    <path d="M120 28 L128 26 L134 42 L126 43 Z" fill="#c99366"/>
    <path d="M104 30 Q114 14 126 28" fill="none" ${v(2.2)}/>
    ${ot("M104 34 h22 M104 38 h24",1)}
    ${ee("M34 26 l28 -3")}`});function Bi(e,t,n,s){return`<path d="M${e-1.5} ${t+16} H${e+1.5} V${t+40} H${e-1.5} Z" fill="#3d9a68"/>
    <path d="M${e} ${t+24} C${e-16} ${t+18} ${e-14} ${t+36} ${e-1} ${t+34}" fill="#74c69d" ${v(1.6)}/>
    <path d="M${e} ${t+22} C${e+16} ${t+16} ${e+12} ${t+36} ${e+1} ${t+32}" fill="#52b788"/>
    <path d="M${e} ${t+18} C${e-10} ${t+8} ${e-8} ${t} ${e} ${t+6} C${e+8} ${t} ${e+10} ${t+8} ${e} ${t+18} Z" fill="${n}" ${v(1.8)}/>
    <path d="M${e+1} ${t+6} C${e+7} ${t+4} ${e+8} ${t+13} ${e+1} ${t+15} Z" fill="${s}"/>`}const t5=ve({kind:"tulip-bed",name:"Tulip Bed",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`${be(70,56,86)}
    <path d="M10 56 H130 L120 82 H20 Z" fill="#f0d2b0" ${v()}/>
    <path d="M96 58 H126 L118 78 H92 Z" fill="#d4a373"/>
    <path d="M16 56 Q70 42 124 56 Q70 64 16 56 Z" fill="#c4a484" ${v(2.2)}/>
    ${ee("M22 60 h24")}
    ${Bi(32,16,"#ff8fab","#e45d88")}
    ${Bi(54,8,"#ffd166","#e0a83a")}
    ${Bi(76,4,"#ff7096","#e04578")}
    ${Bi(98,12,"#fff","#ffd0e0")}
    ${Bi(118,18,"#c9a0dc","#b388d6")}`}),n5=ve({kind:"birdbath",name:"Birdbath",cat:"decor",w:84,h:126,vb:"0 0 80 120",svg:`<defs>${Tc("ydbathW","#f3fbff","#8ecae6")}</defs>
    ${be(40,28,114)}
    <ellipse cx="40" cy="106" rx="20" ry="7" fill="#e7eef2" ${v()}/>
    <path d="M30 46 H50 C56 70 58 86 52 104 H28 C22 86 24 70 30 46 Z" fill="#f4f7f8" ${v()}/>
    <path d="M42 52 H50 C54 72 54 88 50 100 H44 Z" fill="#c5d0d6"/>
    ${ee("M33 62 v22")}
    <ellipse cx="40" cy="40" rx="32" ry="13" fill="#f7fafb" ${v()}/>
    <path d="M40 28 C66 28 72 38 72 42 C72 52 58 54 40 54 C60 54 68 48 68 42 C68 36 58 32 40 34 Z" fill="#d5dee4"/>
    <ellipse cx="40" cy="38" rx="22" ry="7" fill="url(#ydbathW)" ${v(2.2)}/>
    ${ee("M22 36 q10 -4 18 0")}
    <path d="M48 30 L40 24 L42 34 Z" fill="#f0c45c" ${v(1.6)}/>
    <ellipse cx="56" cy="28" rx="11" ry="6" fill="#ffd166" ${v(1.8)}/>
    <circle cx="66" cy="24" r="4.5" fill="#ffe08a" ${v(1.6)}/>
    <path d="M70 24 L77 26 L70 28 Z" fill="#e07a3f"/>
    <circle cx="67" cy="23" r="1" fill="${nt}"/>
    <path d="M54 32 V40 M60 32 V40" fill="none" stroke="#c99366" stroke-width="1.4" stroke-linecap="round"/>`}),s5=ve({kind:"lily-pond",name:"Lily Pond",cat:"decor",w:170,h:90,vb:"0 0 170 90",svg:`<defs>${Tc("ydpondW","#eaf6ff","#5aa9e6")}</defs>
    ${be(85,70,84)}
    <ellipse cx="85" cy="54" rx="74" ry="28" fill="#c4a484" ${v()}/>
    <path d="M85 30 C142 32 158 48 158 56 C158 72 126 82 85 82 C124 80 150 68 150 56 C150 44 126 36 85 36 Z" fill="#a88462"/>
    <ellipse cx="85" cy="52" rx="62" ry="20" fill="url(#ydpondW)" ${v(2.2)}/>
    ${ee("M40 46 q24 -8 42 2")}
    <path fill="#95d5b2" ${v(2)} fill-rule="evenodd" d="M58 54 m-16 0 a16 7 0 1 0 32 0 a16 7 0 1 0 -32 0 M58 50 L72 54 L58 58 Z"/>
    <path d="M66 50 L74 54 L66 56 Z" fill="#3d9a68"/>
    <path fill="#74c69d" ${v(2)} fill-rule="evenodd" d="M112 48 m-18 0 a18 8 0 1 0 36 0 a18 8 0 1 0 -36 0 M112 42 L128 48 L112 54 Z"/>
    <path d="M40 58 q-4 -16 2 -22 q6 8 2 16" fill="#52b788" ${v(1.6)}/>
    <path d="M108 40 l2 -8 l4 6 l4 -7 l2 8 l-4 3 z" fill="#ff8fab" ${v(1.6)}/>
    <path d="M112 36 l3 -6 l2 5 l3 -5 l1 6 z" fill="#fff" ${v(1.4)}/>
    <circle cx="112" cy="40" r="2.4" fill="#ffd166"/>`});function Ri(e,t,n,s,i=10){return`<path d="M${e} ${t-i-8} V${t-i}" fill="none" ${v(2.2)}/>
    <rect x="${e-4}" y="${t-i-2}" width="8" height="5" rx="1" fill="#c99366" ${v(1.8)}/>
    <circle cx="${e}" cy="${t}" r="${i}" fill="${n}" ${v()}/>
    <path d="M${e+1} ${t-i+3} H${e+i-1} V${t+i-3} H${e+2} Z" fill="${s}"/>
    ${ee(`M${e-i+3} ${t-2} q2 -3 4 0`)}`}const i5=ve({kind:"patio-lights",name:"Patio Lights",cat:"decor",w:190,h:70,vb:"0 0 180 70",wall:!0,svg:`<path d="M8 12 Q50 32 90 12 Q130 32 172 14" fill="none" ${v()}/>
    ${Ri(28,40,"#fff6c8","#f0c45c")}
    ${Ri(64,46,"#ffc2d4","#e45d88")}
    ${Ri(100,36,"#fff1c2","#f0c45c")}
    ${Ri(136,46,"#c9f1ff","#7eb4dc")}
    ${Ri(164,34,"#ffd0e8","#e888a8",8)}`}),o5=ve({kind:"toadstool-light",name:"Toadstool Light",cat:"decor",w:70,h:84,vb:"0 0 80 96",svg:`<defs>${Pc("ydtoadG","#ffe7a0",".9")}</defs>
    ${be(40,26,90)}
    <ellipse cx="40" cy="70" rx="18" ry="8" fill="url(#ydtoadG)"/>
    <path d="M32 58 H48 L52 84 H28 Z" fill="#fff7f8" ${v()}/>
    <path d="M42 60 H48 L50 82 H43 Z" fill="#f0d8cc"/>
    <path d="M6 58 Q40 8 74 58 Q40 74 6 58 Z" fill="#ff8fab" ${v()}/>
    <path d="M44 22 Q66 16 72 54 Q52 66 44 52 Z" fill="#e45d88"/>
    ${ee("M18 48 q16 -12 26 -2")}
    <circle cx="26" cy="48" r="5" fill="#fff" ${v(2)}/>
    <circle cx="44" cy="40" r="6" fill="#fff" ${v(2)}/>
    <circle cx="36" cy="56" r="3.5" fill="#fff" ${v(2)}/>
    <path d="M22 52 h6 M40 46 h8" fill="none" stroke="#ffd0e0" stroke-width="1.2" stroke-linecap="round"/>`}),a5=ve({kind:"stepping-stones",name:"Stepping Stones",cat:"decor",w:160,h:64,vb:"0 0 160 70",svg:`${be(80,66,64)}
    <path d="M8 40 L24 28 L50 32 L54 50 L30 58 L10 52 Z" fill="#f7f4ef" ${v()}/>
    <path d="M34 36 L50 32 L54 50 L36 54 Z" fill="#d9d3cc"/>
    <path d="M56 44 L78 32 L108 36 L112 56 L80 64 L58 58 Z" fill="#f4f1ec" ${v()}/>
    <path d="M86 40 L108 36 L112 56 L90 58 Z" fill="#d4cdc4"/>
    <path d="M110 30 L128 20 L154 28 L150 48 L124 52 L108 42 Z" fill="#e7e2dc" ${v()}/>
    <path d="M132 26 L152 28 L148 46 L130 44 Z" fill="#d0c9c2"/>
    ${ee("M16 38 q8 -4 14 0")}
    ${ot("M22 44 h12 M72 48 h16 M124 36 h12")}`}),r5=ve({kind:"pinwheel",name:"Pinwheel",cat:"decor",w:56,h:90,vb:"0 0 70 100",holdable:!0,svg:`${be(35,16,96)}
    <rect x="31" y="44" width="6" height="50" rx="2" fill="#c99366" ${v()}/>
    <rect x="34" y="48" width="3" height="42" fill="#c99366"/>
    <path d="M34 40 L34 8 Q54 16 48 36 Z" fill="#ff8fab" ${v(2.2)}/>
    <path d="M42 18 Q50 28 36 34 Z" fill="#e45d88"/>
    <path d="M34 40 L62 32 Q58 54 40 50 Z" fill="#ffd166" ${v(2.2)}/>
    <path d="M54 38 Q58 48 42 46 Z" fill="#e0a83a"/>
    <path d="M34 40 L34 72 Q14 64 20 44 Z" fill="#8ecae6" ${v(2.2)}/>
    <path d="M26 58 Q16 50 32 46 Z" fill="#5aa9d6"/>
    <path d="M34 40 L6 48 Q12 26 28 30 Z" fill="#c9a0dc" ${v(2.2)}/>
    <path d="M16 36 Q14 28 28 34 Z" fill="#b388d6"/>
    <circle cx="34" cy="40" r="5" fill="#fff" ${v(2.2)}/>
    <circle cx="34" cy="40" r="1.8" fill="${nt}"/>`}),l5=ve({kind:"rain-barrel",name:"Rain Barrel",cat:"decor",w:86,h:108,vb:"0 0 80 110",svg:`${be(40,30,104)}
    <path d="M22 30 C12 48 12 78 22 98 H58 C68 78 68 48 58 30 Z" fill="#8ecae6" ${v()}/>
    <path d="M46 34 C58 48 60 76 54 96 H58 C66 76 66 50 56 32 Z" fill="#5aa9c6"/>
    ${ot("M28 40 v48 M36 36 v54 M44 38 v50")}
    ${ee("M24 42 v24")}
    <ellipse cx="40" cy="30" rx="20" ry="8" fill="#bde0fe" ${v()}/>
    <ellipse cx="46" cy="30" rx="10" ry="5" fill="#7eb4dc"/>
    <path d="M16 48 H64" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <path d="M14 74 H66" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <rect x="56" y="78" width="14" height="7" rx="2" fill="#d7ecff" ${v(2)}/>
    <path d="M70 81 h6" fill="none" ${v(2)}/>
    <path d="M34 18 q6 -8 12 0" fill="none" stroke="#7eb4dc" stroke-width="2.2" stroke-linecap="round"/>`}),c5=ve({kind:"butterfly-bush",name:"Butterfly Bush",cat:"plants",w:120,h:130,vb:"0 0 100 120",svg:`${be(50,40,114)}
    <ellipse cx="32" cy="86" rx="22" ry="18" fill="#95d5b2" ${v(2.2)}/>
    <ellipse cx="70" cy="84" rx="24" ry="20" fill="#3d9a68" ${v(2.2)}/>
    <ellipse cx="50" cy="78" rx="36" ry="28" fill="#74c69d" ${v()}/>
    <path d="M18 90 Q50 108 84 88 Q68 100 50 102 Q30 100 18 90 Z" fill="#3d9a68"/>
    ${ee("M24 68 q14 -8 26 2")}
    ${ot("M28 80 q4 6 0 10 M46 72 q5 8 0 12 M66 78 q4 6 0 10")}
    <path d="M30 62 C28 44 32 26 35 24 C39 28 40 46 38 62 Z" fill="#c9a0dc" ${v(1.8)}/>
    <circle cx="33" cy="36" r="2.2" fill="#f7ecff"/><circle cx="36" cy="46" r="2.2" fill="#b388d6"/><circle cx="33" cy="54" r="2" fill="#f7ecff"/>
    <path d="M46 58 C44 36 50 14 53 12 C57 16 58 40 54 58 Z" fill="#b388d6" ${v(1.8)}/>
    <circle cx="50" cy="28" r="2.4" fill="#f7ecff"/><circle cx="53" cy="40" r="2.4" fill="#c9a0dc"/><circle cx="50" cy="50" r="2.2" fill="#f7ecff"/>
    <path d="M62 60 C62 42 68 28 71 26 C75 30 76 46 72 60 Z" fill="#a78bfa" ${v(1.8)}/>
    <circle cx="67" cy="38" r="2.2" fill="#f7ecff"/><circle cx="70" cy="48" r="2" fill="#c9a0dc"/>
    <path d="M14 26 C4 14 2 24 10 32 C14 36 18 32 18 28 Z" fill="#ff8fab" ${v(1.6)}/>
    <path d="M20 24 C30 12 34 24 26 34 C22 38 20 30 20 26 Z" fill="#c9a0dc" ${v(1.6)}/>
    <path d="M12 30 C6 36 6 46 14 46 C18 44 20 36 18 30 Z" fill="#ffd166" ${v(1.6)}/>
    <path d="M22 30 C30 36 32 46 24 48 C20 44 18 36 20 30 Z" fill="#8ecae6" ${v(1.6)}/>
    <ellipse cx="18" cy="32" rx="2" ry="7" fill="${nt}"/>
    <path d="M16 26 Q12 18 10 14 M20 26 Q24 18 28 14" fill="none" stroke="${nt}" stroke-width="1.3" stroke-linecap="round"/>`}),d5=ve({kind:"hedge-row",name:"Hedge Row",cat:"plants",w:190,h:96,vb:"0 0 180 96",svg:`${be(90,78,90)}
    <path d="M16 84 C28 70 40 62 52 66 C62 52 78 50 90 62 C102 50 118 52 128 66 C140 58 156 64 164 74 L164 86 L16 86 Z" fill="#2f7d52"/>
    <path d="M10 82 L10 60 C10 50 18 46 26 50 C32 34 46 32 54 48 C60 30 76 28 84 46 C92 28 108 28 116 46 C124 30 140 32 148 48 C156 36 166 42 170 54 L170 82 Z" fill="#74c69d" ${v()}/>
    <path d="M148 46 C160 38 170 50 170 70 L170 82 L140 82 L146 58 Z" fill="#52b788"/>
    <path d="M22 64 C40 54 58 58 70 50 C84 60 100 48 116 56 C128 48 146 56 158 64" fill="none" stroke="#95d5b2" stroke-width="6" stroke-linecap="round" opacity=".85"/>
    <path d="M14 68 C48 78 132 76 166 66 L168 82 L12 82 Z" fill="#3d9a68"/>
    ${ot("M28 58 q3 5 0 8 M48 54 q3 6 0 9 M70 52 q3 6 1 9 M94 52 q3 6 0 10 M118 54 q3 6 0 9 M142 56 q3 5 0 8")}
    ${ee("M18 58 q10 -4 16 1")}
    ${ee("M58 42 q12 -4 16 2")}`}),p5=ve({kind:"lemonade-cup",name:"Lemonade Cup",cat:"food",w:52,h:70,vb:"0 0 70 90",holdable:!0,svg:`${be(35,22,84)}
    <path d="M18 32 H52 L46 76 H24 Z" fill="#fff" ${v()}/>
    <path d="M40 34 H50 L46 74 H40 Z" fill="#f0e6d8"/>
    <path d="M20 44 H50 L46 76 H24 Z" fill="#ffe566"/>
    <path d="M40 46 H48 L46 74 H40 Z" fill="#f0c45c"/>
    <ellipse cx="35" cy="44" rx="15" ry="6" fill="#fff3a0" ${v(2)}/>
    <ellipse cx="35" cy="32" rx="17" ry="7" fill="#fff" ${v()}/>
    <path d="M40 42 L48 16 H58" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="20" cy="30" r="8" fill="#ffe566" ${v(1.8)}/>
    <path d="M20 23 v14 M14 30 h12" fill="none" stroke="#fff" stroke-width="1.4"/>
    <path d="M16 26 q4 4 8 0 M16 34 q4 -4 8 0" fill="none" stroke="#e0a83a" stroke-width="1.2"/>
    ${ee("M24 38 v14")}`}),f5=ve({kind:"picnic-table",name:"Picnic Table",cat:"furniture",w:180,h:110,vb:"0 0 160 100",svg:`${be(80,68,96)}
    <rect x="18" y="62" width="124" height="10" rx="2" fill="#e7c49a" ${v()}/>
    <rect x="118" y="64" width="20" height="7" fill="#c99366"/>
    <rect x="28" y="70" width="8" height="24" rx="1" fill="#f3d2aa" ${v(2)}/>
    <rect x="124" y="70" width="8" height="24" rx="1" fill="#d4a373" ${v(2)}/>
    <rect x="8" y="78" width="40" height="8" rx="2" fill="#f6e0c4" ${v(2)}/>
    <rect x="112" y="78" width="40" height="8" rx="2" fill="#e7c49a" ${v(2)}/>
    <rect x="22" y="36" width="116" height="14" rx="2" fill="#f6e0c4" ${v()}/>
    <rect x="110" y="38" width="24" height="10" fill="#d4a373"/>
    <rect x="36" y="48" width="8" height="18" fill="#f3d2aa" ${v(2)}/>
    <rect x="116" y="48" width="8" height="18" fill="#d4a373" ${v(2)}/>
    ${ee("M28 40 h36")}
    ${ot("M40 42 h50 M34 66 h70")}`}),g5=ve({kind:"seesaw",name:"Seesaw",cat:"furniture",w:200,h:80,vb:"0 0 180 80",svg:`${be(90,74,76)}
    <path d="M78 58 H102 L96 74 H84 Z" fill="#f3d2aa" ${v()}/>
    <path d="M94 60 H100 L96 72 H92 Z" fill="#c99366"/>
    <rect x="10" y="40" width="160" height="12" rx="3" fill="#ffd166" ${v()} transform="rotate(-8 90 46)"/>
    <rect x="130" y="28" width="28" height="8" fill="#e0a83a"/>
    <rect x="16" y="34" width="28" height="10" rx="2" fill="#ff8fab" ${v(2)}/>
    <rect x="136" y="22" width="28" height="10" rx="2" fill="#8ecae6" ${v(2)}/>
    ${ee("M24 44 h40")}`}),h5=ve({kind:"wagon",name:"Wagon",cat:"furniture",w:130,h:90,vb:"0 0 130 90",svg:`${be(64,50,86)}
    <circle cx="36" cy="74" r="12" fill="${nt}" ${v(2)}/><circle cx="36" cy="74" r="5" fill="#ffd166"/>
    <circle cx="96" cy="74" r="12" fill="${nt}" ${v(2)}/><circle cx="96" cy="74" r="5" fill="#ffd166"/>
    <path d="M22 40 H108 L100 68 H30 Z" fill="#e45d88" ${v()}/>
    <path d="M86 42 H106 L100 66 H84 Z" fill="#c93b68"/>
    <rect x="28" y="28" width="76" height="14" rx="3" fill="#ff8fab" ${v()}/>
    <path d="M108 36 H122 L118 58" fill="none" ${v(2.4)}/>
    ${ee("M32 46 h28")}
    ${ot("M40 54 h40")}`}),u5=ve({kind:"birdhouse",name:"Birdhouse",cat:"decor",w:70,h:120,vb:"0 0 80 130",svg:`${be(40,22,124)}
    <rect x="34" y="70" width="12" height="50" rx="2" fill="#d4a373" ${v()}/>
    <rect x="40" y="74" width="5" height="42" fill="#c99366"/>
    <path d="M12 62 L40 28 L68 62 Z" fill="#e45d88" ${v()}/>
    <path d="M40 32 L66 60 H52 Z" fill="#c93b68"/>
    <rect x="18" y="60" width="44" height="36" rx="3" fill="#f6e0c4" ${v()}/>
    <rect x="48" y="64" width="10" height="28" fill="#e7c49a"/>
    <circle cx="40" cy="76" r="7" fill="#5a3d5c"/>
    <rect x="36" y="86" width="14" height="4" rx="1" fill="#d4a373" ${v(1.6)}/>
    ${ee("M22 66 h12")}`}),m5=ve({kind:"sprinkler",name:"Sprinkler",cat:"decor",w:80,h:70,vb:"0 0 100 80",svg:`${be(50,28,76)}
    <ellipse cx="50" cy="66" rx="22" ry="8" fill="#74c69d" ${v()}/>
    <rect x="44" y="40" width="12" height="26" rx="3" fill="#8ecae6" ${v()}/>
    <circle cx="50" cy="36" r="8" fill="#ffd166" ${v()}/>
    <path d="M50 28 C30 16 18 20 12 10" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 28 C70 14 84 18 90 8" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 26 C40 8 58 4 50 2" fill="none" stroke="#c9ecff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="12" cy="10" r="2.2" fill="#c9ecff"/><circle cx="90" cy="8" r="2.2" fill="#c9ecff"/><circle cx="50" cy="2" r="2.2" fill="#fff"/>
    ${ee("M46 44 v10")}`}),y5=ve({kind:"beach-ball",name:"Beach Ball",cat:"decor",w:70,h:70,vb:"0 0 80 80",svg:`${be(40,26,76)}
    <circle cx="40" cy="40" r="28" fill="#fff" ${v()}/>
    <path d="M40 12 A28 28 0 0 1 66 32 L40 40 Z" fill="#ff8fab"/>
    <path d="M66 48 A28 28 0 0 1 40 68 L40 40 Z" fill="#ffd166"/>
    <path d="M24 64 A28 28 0 0 1 14 36 L40 40 Z" fill="#8ecae6"/>
    <path d="M18 28 A28 28 0 0 1 40 12 L40 40 Z" fill="#b7e4c7"/>
    <circle cx="40" cy="40" r="5" fill="#fff" ${v(2)}/>
    ${ee("M28 24 q6 -4 10 2")}`}),w5=ve({kind:"patio-umbrella",name:"Patio Umbrella",cat:"furniture",w:150,h:180,vb:"0 0 120 150",svg:`${be(60,36,144)}
    <path d="M10 58 Q60 18 110 58 L98 64 Q60 32 22 64 Z" fill="#ffb3c6" ${v()}/>
    <path d="M60 22 L108 56 L96 62 Z" fill="#e45d88"/>
    <path d="M28 40 Q44 30 60 36 Q76 28 96 42" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <rect x="56" y="58" width="8" height="78" rx="2" fill="#f3d2aa" ${v()}/>
    <rect x="60" y="62" width="3" height="70" fill="#d4a373"/>
    <rect x="40" y="128" width="40" height="8" rx="2" fill="#e7c49a" ${v(2)}/>
    ${ee("M24 50 q16 -8 24 0")}`}),b5=ve({kind:"veggie-patch",name:"Vegetable Patch",cat:"plants",w:150,h:80,vb:"0 0 150 80",svg:`${be(75,62,76)}
    <rect x="8" y="28" width="134" height="44" rx="4" fill="#c99366" ${v()}/>
    <rect x="16" y="34" width="118" height="32" fill="#8d6e4c"/>
    <path d="M36 48 C36 36 48 34 48 46 C48 34 60 36 58 48 Z" fill="#74c69d" ${v(2)}/>
    <path d="M78 50 C78 38 90 36 90 48 C90 36 102 38 100 50 Z" fill="#52b788" ${v(2)}/>
    <path d="M112 52 L120 30 L128 52 Z" fill="#ff922b" ${v(2)}/>
    <path d="M118 32 Q124 22 130 28" fill="none" stroke="#2f7d52" stroke-width="2" stroke-linecap="round"/>
    ${ee("M18 36 h24")}`}),v5=ve({kind:"hammock",name:"Hammock",cat:"furniture",w:190,h:110,vb:"0 0 170 100",svg:`${be(85,70,96)}
    <rect x="8" y="18" width="10" height="74" rx="2" fill="#d4a373" ${v()}/>
    <rect x="152" y="18" width="10" height="74" rx="2" fill="#c99366" ${v()}/>
    <path d="M18 28 Q85 78 152 28" fill="none" stroke="#5a3d5c" stroke-width="2"/>
    <path d="M18 36 Q85 88 152 36 L152 48 Q85 96 18 48 Z" fill="#8ecae6" ${v()}/>
    <path d="M120 40 Q140 62 150 44 L150 54 Q136 74 112 52 Z" fill="#5fb0d8"/>
    ${ee("M36 46 q24 10 30 4")}
    ${ot("M40 58 q30 16 50 4")}`}),k5=ve({kind:"garden-gnome",name:"Garden Gnome",cat:"decor",w:64,h:100,vb:"0 0 70 110",svg:`${be(35,22,104)}
    <path d="M18 78 H52 L48 100 H22 Z" fill="#3d7ec4" ${v()}/>
    <path d="M40 80 H50 L48 98 H42 Z" fill="#2c5f96"/>
    <circle cx="35" cy="62" r="16" fill="#f6d2b5" ${v()}/>
    <path d="M20 66 Q35 78 50 66 Q46 74 35 76 Q24 74 20 66 Z" fill="#fff"/>
    <circle cx="29" cy="60" r="2" fill="${nt}"/><circle cx="41" cy="60" r="2" fill="${nt}"/>
    <path d="M16 52 L35 18 L54 52 Z" fill="#e45d88" ${v()}/>
    <path d="M35 22 L52 50 H42 Z" fill="#c93b68"/>
    <ellipse cx="35" cy="52" rx="16" ry="4" fill="#ff8fab" ${v(2)}/>
    ${ee("M22 40 l8 -8")}`}),Co=[Z$,N$,F$,j$,G$,Y$,K$,X$,e5,t5,n5,s5,i5,o5,a5,r5,l5,c5,d5,p5,f5,g5,h5,u5,m5,y5,w5,b5,v5,k5];function _5(e,t){for(const n of Co)t[n.kind]||(e.push(n),t[n.kind]=n)}function Jr(e,t,n){return`<g>
    <ellipse cx="${e-22*n}" cy="${t}" rx="${26*n}" ry="${14*n}" fill="#fff"/>
    <ellipse cx="${e+18*n}" cy="${t-2*n}" rx="${30*n}" ry="${16*n}" fill="#fff"/>
    <ellipse cx="${e}" cy="${t+4*n}" rx="${34*n}" ry="${13*n}" fill="#fff"/>
  </g>`}function $5(e,t,n,s,i){const a=l=>`<rect x="${e-2}" y="${l}" width="${t-e+12+4}" height="8" rx="3" fill="#fff" ${v(2.2)}/><rect x="${(t-40).toFixed(1)}" y="${l+1}" width="30" height="6" rx="2" fill="#d5ead8"/>`;let r=a(n+26)+a(s-28);for(let l=e;l<=t;l+=i)r+=`<path d="M${l} ${n+12} L${l+12/2} ${n} L${l+12} ${n+12} V${s} H${l} Z" fill="#f7fff8" ${v(2.2)}/>`,r+=`<path d="M${(l+12*.58).toFixed(1)} ${n+10} H${l+12-1} V${s-4} H${(l+12*.58).toFixed(1)} Z" fill="#d5ead8"/>`,r+=`<path d="M${l+2} ${n+18} v22" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".75" fill="none"/>`;return r}function x5(e,t){const s=150+46*t,i=372-s;return`<g id="yardTree">
    <rect x="${e-14*t}" y="${s}" width="${28*t}" height="${i}" rx="${6*t}" fill="#e7b98a" ${v()}/>
    <rect x="${e+4*t}" y="${s+8*t}" width="${8*t}" height="${i-16*t}" fill="#c99366"/>
    ${ot(`M${e-4*t} ${s+28*t} v${36*t}`)}
    ${ee(`M${e-8*t} ${s+16*t} v${22*t}`)}
    <ellipse cx="${e+8*t}" cy="${150+18*t}" rx="${78*t}" ry="${46*t}" fill="#2f7d52"/>
    <ellipse cx="${e-48*t}" cy="${150+10*t}" rx="${36*t}" ry="${30*t}" fill="#245e3e"/>
    <ellipse cx="${e-34*t}" cy="${150+16*t}" rx="${42*t}" ry="${34*t}" fill="#95d5b2" ${v(2.2)}/>
    <ellipse cx="${e}" cy="150" rx="${68*t}" ry="${50*t}" fill="#74c69d" ${v()}/>
    <ellipse cx="${e+40*t}" cy="${150+8*t}" rx="${40*t}" ry="${36*t}" fill="#3d9a68" ${v(2.2)}/>
    <ellipse cx="${e-8*t}" cy="${150-6*t}" rx="${28*t}" ry="${20*t}" fill="#b7e4c7" opacity=".95"/>
    ${ot(`M${e-20*t} ${150+8*t} q${8*t} ${6*t} 0 ${12*t} M${e+10*t} ${150-4*t} q${8*t} ${6*t} 2 ${12*t} M${e+28*t} ${150+12*t} q${6*t} ${5*t} 0 ${10*t}`)}
    ${ee(`M${e-36*t} ${150-18*t} q${16*t} -8 ${28*t} 2`)}
  </g>`}function M5(){return`<svg class="yardWorld" viewBox="0 0 2400 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ydsky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6eb6e8"/>
        <stop offset=".48" stop-color="#c5e6fb"/>
        <stop offset="1" stop-color="#fff3df"/>
      </linearGradient>
      ${Pc("ydsun","#ffe566",".55")}
    </defs>
    <rect width="2400" height="430" fill="url(#ydsky)"/>
    <circle id="ydSunGlow" cx="1180" cy="68" r="62" fill="url(#ydsun)"/>
    <circle id="ydSun" cx="1180" cy="68" r="30" fill="#ffe566"/>
    <circle cx="1170" cy="58" r="8" fill="#fff" opacity=".8"/>
    ${Jr(980,96,1.05)}${Jr(1320,78,.85)}${Jr(1500,120,.7)}
    <rect y="360" width="2400" height="240" fill="#c6ef9a"/>
    <rect y="360" width="2400" height="28" fill="#e7f8c8"/>
    <rect y="520" width="2400" height="80" fill="#9ed67a"/>
    <path d="M1040 470 q30 -12 16 -6 M1200 510 q28 -12 14 -4 M1360 548 q24 -10 12 -4" fill="none" stroke="#3d9a68" stroke-width="1.2" stroke-linecap="round" opacity=".22"/>
    ${$5(846,2118,258,372,24)}
    ${x5(1184,.8)}
    <path d="M840 120 H1076 L1054 152 H862 Z" fill="#ffb3c6" ${v()}/>
    <path d="M960 126 H1064 L1046 148 H976 Z" fill="#e45d88"/>
    ${ee("M876 132 h56")}
    <rect x="864" y="150" width="196" height="222" rx="4" fill="#fff6ea" ${v()}/>
    <rect x="1044" y="156" width="12" height="210" fill="#f0dcc4"/>
    ${ot("M880 174 H1000 M880 202 H1000 M880 230 H990 M880 294 H1000 M880 334 H980")}
    <rect x="884" y="180" width="44" height="36" rx="4" fill="#c9ecff" ${v(2.2)}/>
    <rect x="912" y="184" width="12" height="28" fill="#8ecae6"/>
    <path d="M906 180 V216 M884 198 H928" fill="none" ${v(2.2)}/>
    ${ee("M890 188 h12")}
  </svg>`}function L5(e,t,n,s,i){const o=(600-t)/600*100,a=(n/2400*100).toFixed(3),r=(s/600*100).toFixed(3);return i==="right"?`right:${((2400-(e+n/2))/2400*100).toFixed(3)}%;bottom:${o.toFixed(3)}%;width:${a}%;height:${r}%`:`left:${((e-n/2)/2400*100).toFixed(3)}%;bottom:${o.toFixed(3)}%;width:${a}%;height:${r}%`}function E5(){return`<svg class="doorArt" viewBox="0 0 100 230">
    <rect x="4" y="2" width="92" height="226" rx="3" fill="#f3d2aa" ${v()}/>
    <rect x="76" y="6" width="16" height="218" fill="#d4a373"/>
    <rect x="14" y="12" width="72" height="206" rx="2" fill="#f6e9ff" ${v(2.2)}/>
    <rect x="70" y="16" width="12" height="198" fill="#d4b4e6"/>
    <rect x="24" y="22" width="52" height="42" rx="3" fill="#c9ecff" ${v(2.2)}/>
    <rect x="60" y="26" width="12" height="34" fill="#8ecae6"/>
    <path d="M50 22 V64 M24 43 H76" fill="none" ${v(2.2)}/>
    ${ee("M28 28 h18")}
    <rect x="24" y="76" width="52" height="56" rx="3" fill="#f7ecff" ${v(2.2)}/>
    <rect x="62" y="80" width="10" height="48" fill="#e0c8f0"/>
    ${ee("M28 84 v22")}
    <rect x="24" y="144" width="52" height="56" rx="3" fill="#f7ecff" ${v(2.2)}/>
    <rect x="62" y="148" width="10" height="48" fill="#e0c8f0"/>
    <circle cx="64" cy="126" r="4.2" fill="#ffd166" ${v(2.2)}/>
    <rect x="10" y="214" width="80" height="10" rx="2" fill="#e7c49a" ${v(2.2)}/>
  </svg>`}function C5(e){const t=e==="living"?tg:ng,n=e==="living"?"backyard":"living",s=e==="living"?"Backyard":"Back inside",i=e==="yard"?"right":"left";return`<button type="button" class="yardDoor" data-yard-go="${n}" aria-label="${s}" style="${L5(t.x,t.y,t.w,t.h,i)}">${E5()}<span class="yardHintLabel"><span>${s}</span></span></button>`}function Bc(e,t){const n=e.replace(/[&<>]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[s]);return`<figure class="ysCard"><div class="ysArt">${t}</div><figcaption>${n}</figcaption></figure>`}function S5(){return`<div class="yardSheet" data-yard-sheet="1"><h1>Backyard pieces</h1><div class="ysGrid">${Co.map(t=>Bc(t.name,hn(t))).join("")}</div></div>`}function z5(e,t){return Bc(e,`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${t}</svg>`)}function P5(){const e=(r,l)=>be(r,l,96.4),t=`
    ${e(50,40)}
    <path d="M18 58 V30 Q18 18 32 18 H68 Q82 18 82 30 V58 Z" fill="#ffb7cc" ${v()}/>
    <path d="M56 24 H76 Q80 24 80 32 V52 H56 Z" fill="#e888a8"/>
    <circle cx="34" cy="38" r="3.4" fill="#ff8fab" ${v(2)}/><circle cx="33" cy="37" r="1.1" fill="#fff"/>
    <circle cx="50" cy="36" r="3.4" fill="#ff8fab" ${v(2)}/><circle cx="49" cy="35" r="1.1" fill="#fff"/>
    <circle cx="66" cy="38" r="3.4" fill="#e45d88" ${v(2)}/><circle cx="65" cy="37" r="1.1" fill="#fff"/>
    <rect x="4" y="44" width="20" height="38" rx="10" fill="#ff7096" ${v()}/>
    <ellipse cx="14" cy="44" rx="12" ry="9" fill="#ff9ab6" ${v()}/>
    <ellipse cx="9" cy="41" rx="4" ry="2.4" fill="#fff" opacity=".7"/>
    <rect x="76" y="44" width="20" height="38" rx="10" fill="#e04878" ${v()}/>
    <ellipse cx="86" cy="44" rx="12" ry="9" fill="#e45d88" ${v()}/>
    <rect x="20" y="64" width="60" height="16" rx="6" fill="#ff8fab" ${v()}/>
    <rect x="22" y="56" width="28" height="22" rx="7" fill="#ffe0ea" ${v(2.4)}/>
    <rect x="50" y="56" width="28" height="22" rx="7" fill="#ffc2d4" ${v(2.4)}/>
    <rect x="66" y="58" width="10" height="18" rx="4" fill="#e888a8"/>
    <path d="M26 60 h20 M54 60 h16 M26 74 h20 M54 74 h16" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <path d="M50 58 v18" fill="none" stroke="#e45d88" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="26" y="46" width="20" height="16" rx="5" fill="#fff" ${v(2.2)}/>
    <path d="M33 52 c-2.2 -3.2 -6.4 -.4 -3.4 2.6 c1 1.2 3.4 2.6 3.4 2.6 c0 0 2.4 -1.4 3.4 -2.6 c3 -3 -1.2 -5.8 -3.4 -2.6 z" fill="#ff8fab"/>
    <path d="M41 56 c-1.4 -2 -4.2 0 -2.2 1.8 c.7 .8 2.2 1.6 2.2 1.6 c0 0 1.5 -.8 2.2 -1.6 c2 -1.8 -.8 -3.8 -2.2 -1.8 z" fill="#7eb4dc"/>
    <rect x="16" y="84" width="7" height="10" rx="2" fill="${nt}"/>
    <rect x="77" y="84" width="7" height="10" rx="2" fill="${nt}"/>`,n=`
    <defs>${Pc("a2lamp-glow","#ffd56a",".95")}</defs>
    ${e(50,22)}
    <path d="M34 8 L42 8 L37 40 L24 40 Z" fill="#fff6d4"/>
    <path d="M42 8 L50 8 L50 40 L37 40 Z" fill="#ffe08a"/>
    <path d="M50 8 L58 8 L63 40 L50 40 Z" fill="#f0c45c"/>
    <path d="M58 8 L66 8 L76 40 L63 40 Z" fill="#e0a83a"/>
    <path d="M24 40 L34 8 H66 L76 40 Z" fill="none" ${v()}/>
    <path d="M42 8 L37 40 M50 8 V40 M58 8 L63 40" fill="none" stroke="${nt}" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="50" cy="36" rx="20" ry="10" fill="url(#a2lamp-glow)"/>
    <rect x="46" y="40" width="8" height="42" rx="3" fill="#e4ccf2" ${v()}/>
    <rect x="50" y="44" width="4" height="34" rx="2" fill="#c49ad4"/>
    <ellipse cx="50" cy="88" rx="20" ry="6" fill="#d4b4e6" ${v()}/>
    <ellipse cx="60" cy="90" rx="8" ry="3" fill="#b888c8"/>
    <ellipse cx="42" cy="86" rx="6" ry="2" fill="#fff" opacity=".55"/>`,s=`
    ${e(50,30)}
    <ellipse cx="30" cy="40" rx="14" ry="22" fill="#b7ebc8" ${v()} transform="rotate(-30 30 40)"/>
    <path d="M34 28 C30 40 32 52 44 58" fill="#52b078"/>
    <ellipse cx="72" cy="42" rx="13" ry="20" fill="#3d9a68" ${v()} transform="rotate(26 72 42)"/>
    <path d="M50 66 C40 44 42 18 50 6 C58 18 60 44 50 66 Z" fill="#d8f6e4" ${v()}/>
    <path d="M54 18 C60 32 58 48 50 58 C56 44 58 28 54 18 Z" fill="#52b078"/>
    <path d="M50 14 V52" fill="none" stroke="#2f7a52" stroke-width="1.4" stroke-linecap="round" opacity=".55"/>
    <path d="M40 60 C34 50 24 48 22 38 C32 44 38 54 42 64 Z" fill="#74c69d" ${v(2.2)}/>
    <path d="M28 64 H74 L68 94 H34 Z" fill="#e8845a" ${v()}/>
    <path d="M58 66 H72 L68 92 H60 Z" fill="#c45c38"/>
    <rect x="22" y="58" width="58" height="10" rx="4" fill="#f0a078" ${v()}/>
    <rect x="56" y="60" width="20" height="6" rx="3" fill="#d47848"/>
    <ellipse cx="50" cy="65" rx="20" ry="3" fill="#a86a42" opacity=".4"/>
    <path d="M28 62 h14" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".65"/>`,i=Object.fromEntries(Co.map(r=>[r.kind,r])),o=(r,l,c)=>z5(r,l)+Bc(i[c].name,hn(i[c]));return`<div class="yardSheet yardCompare" data-yard-compare="1"><h1>House style and the yard</h1><p class="ysNote">Sofa, lamp, and plant are the approved refresh. Swing, cart, and birdbath use the same light.</p><div class="ysPair">${o("Sofa",t,"yard-swing")+o("Lamp",n,"lemonade-cart")+o("Plant",s,"birdbath")}</div></div>`}const Qi="#5a3d5c",Q=`stroke="${Qi}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,ra='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>',sg=[{kind:"soaking-tub",name:"Soaking Tub",cat:"furniture",w:250,h:200,vb:"0 0 120 96",svg:`<ellipse cx="60" cy="92" rx="48" ry="3.2" fill="#000" opacity=".12"/><rect x="18" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${Q}/><rect x="92" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${Q}/><path d="M14 58 Q8 58 10 46 L22 28 H98 L110 46 Q112 58 106 58 Z" fill="#fff" ${Q}/><ellipse cx="60" cy="30" rx="44" ry="14" fill="#fff" ${Q}/><ellipse cx="60" cy="32" rx="34" ry="9" fill="#d7f3ff"/><path d="M28 34 Q60 42 92 34" fill="none" stroke="#b9e6f8" stroke-width="4"/><rect x="96" y="8" width="8" height="22" rx="4" fill="#f7d27a" ${Q}/><path d="M100 28 Q112 34 104 44" fill="none" ${Q}/><circle cx="104" cy="46" r="3.2" fill="#a8d4ea" ${Q}/><ellipse cx="46" cy="30" rx="8" ry="3" fill="#fff" opacity=".7"/>`},{kind:"bath-toilet",name:"Toilet",cat:"furniture",w:120,h:160,vb:"0 0 100 134",svg:`<ellipse cx="50" cy="128" rx="34" ry="4" fill="#000" opacity=".12"/><rect x="28" y="8" width="44" height="36" rx="8" fill="#fff" ${Q}/><rect x="34" y="16" width="32" height="16" rx="4" fill="#e7f6ff"/><rect x="46" y="42" width="8" height="10" fill="#f4f7fb" ${Q}/><ellipse cx="50" cy="78" rx="36" ry="22" fill="#fff" ${Q}/><ellipse cx="50" cy="74" rx="24" ry="14" fill="#d7f3ff" ${Q}/><path d="M18 70 Q50 58 82 70" fill="#fff" ${Q}/><rect x="40" y="96" width="20" height="24" rx="4" fill="#f7f4ef" ${Q}/>`},{kind:"sink-vanity",name:"Sink Vanity",cat:"furniture",w:210,h:190,vb:"0 0 110 100",svg:`<ellipse cx="55" cy="96" rx="46" ry="3.2" fill="#000" opacity=".12"/><rect x="10" y="48" width="90" height="42" rx="8" fill="#f6e2c4" ${Q}/><path d="M55 48 V90" ${Q}/><circle cx="28" cy="70" r="3" fill="${Qi}"/><circle cx="82" cy="70" r="3" fill="${Qi}"/><rect x="16" y="90" width="8" height="6" rx="2" fill="${Qi}"/><rect x="86" y="90" width="8" height="6" rx="2" fill="${Qi}"/><ellipse cx="55" cy="44" rx="40" ry="12" fill="#fff" ${Q}/><ellipse cx="55" cy="44" rx="26" ry="7" fill="#d7f3ff"/><rect x="50" y="10" width="10" height="28" rx="4" fill="#f7d27a" ${Q}/><path d="M55 36 Q70 40 66 48" fill="none" ${Q}/><rect x="8" y="40" width="94" height="8" rx="3" fill="#f3d2b5" ${Q}/>`},{kind:"bath-mirror",name:"Bath Mirror",cat:"decor",w:120,h:160,wall:!0,vb:"0 0 90 120",svg:`<path d="M45 8 C70 8 82 28 82 58 C82 92 68 112 45 112 C22 112 8 92 8 58 C8 28 20 8 45 8 Z" fill="#f7d27a" ${Q}/><ellipse cx="45" cy="60" rx="26" ry="40" fill="#d7f4ff" ${Q}/><path d="M30 36 l8 -8 M28 52 l18 -16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="38" y="2" width="14" height="8" rx="3" fill="#f28fa6" ${Q}/>`},{kind:"towel-bar",name:"Towel Bar",cat:"decor",w:170,h:116,wall:!0,vb:"0 0 150 102",svg:`<rect x="10" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${Q}/><rect x="130" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${Q}/><rect x="14" y="16" width="122" height="8" rx="4" fill="#c98d55" ${Q}/><path d="M26 24 H124 V70 Q75 100 26 70 Z" fill="#f7d7e4" ${Q}/><path d="M75 24 V88" stroke="#f28fa6" stroke-width="3"/><path d="M40 36 H110" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"bath-mat",name:"Bath Mat",cat:"decor",w:230,h:120,vb:"0 0 160 84",svg:`<ellipse cx="80" cy="78" rx="70" ry="5" fill="#000" opacity=".1"/><rect x="12" y="22" width="136" height="48" rx="18" fill="#f28fa6" ${Q}/><rect x="24" y="32" width="112" height="28" rx="12" fill="#f7d7e4"/><path d="M40 46 H120 M40 54 H120" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`},{kind:"rubber-ducky",name:"Rubber Ducky",cat:"decor",w:80,svg:`${ra}<ellipse cx="48" cy="68" rx="30" ry="26" fill="#f7d27a" ${Q}/><circle cx="68" cy="40" r="18" fill="#ffe9a8" ${Q}/><path d="M82 38 H98 Q102 44 92 48 H82 Z" fill="#f28fa6" ${Q}/><ellipse cx="36" cy="74" rx="12" ry="8" fill="#f3c15a"/>`},{kind:"shower-curtain",name:"Shower Curtain",cat:"decor",w:150,h:260,holdable:!1,vb:"0 0 90 156",svg:`<rect x="8" y="8" width="74" height="8" rx="3" fill="#c98d55" ${Q}/><circle cx="22" cy="16" r="3" fill="#f7d27a" ${Q}/><circle cx="40" cy="16" r="3" fill="#f7d27a" ${Q}/><circle cx="58" cy="16" r="3" fill="#f7d27a" ${Q}/><circle cx="72" cy="16" r="3" fill="#f7d27a" ${Q}/><path d="M12 18 Q8 80 16 146 H40 Q30 80 36 18 Z" fill="#d7f4ff" ${Q}/><path d="M36 18 Q34 80 46 146 H74 Q84 80 78 18 Z" fill="#f7d7e4" ${Q}/><path d="M24 40 Q18 70 26 100 M58 40 Q66 70 58 110" fill="none" stroke="#fff" stroke-width="3" opacity=".65"/>`},{kind:"soap-dish",name:"Soap Dish",cat:"decor",w:90,svg:`${ra}<ellipse cx="50" cy="78" rx="34" ry="12" fill="#fff" ${Q}/><ellipse cx="50" cy="74" rx="26" ry="7" fill="#e7f6ff"/><rect x="28" y="48" width="44" height="22" rx="8" fill="#f7d7e4" ${Q}/><path d="M36 56 H64" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"laundry-hamper",name:"Laundry Hamper",cat:"furniture",w:140,h:160,vb:"0 0 100 114",svg:`<ellipse cx="50" cy="108" rx="36" ry="4" fill="#000" opacity=".12"/><path d="M18 40 H82 L74 100 H26 Z" fill="#b9a0dc" ${Q}/><path d="M24 58 H76 M26 74 H74" stroke="#fff" stroke-width="3" opacity=".55"/><ellipse cx="50" cy="40" rx="34" ry="10" fill="#c9b6e8" ${Q}/><path d="M22 36 Q50 18 78 36" fill="#f7d7e4" ${Q}/><path d="M40 28 Q50 40 62 26" fill="none" stroke="#f28fa6" stroke-width="4" stroke-linecap="round"/>`},{kind:"bath-stool",name:"Bath Stool",cat:"furniture",w:110,svg:`${ra}<ellipse cx="50" cy="58" rx="36" ry="12" fill="#f6e2c4" ${Q}/><ellipse cx="50" cy="54" rx="28" ry="7" fill="#fff6ea"/><path d="M22 64 L16 92 M78 64 L84 92 M36 66 L34 92 M64 66 L66 92" ${Q}/><path d="M18 90 H34 M66 90 H84" ${Q}/>`}],T5=[{kind:"floor-cushion",name:"Floor Cushion",cat:"decor",w:150,h:136,vb:"0 0 130 118",svg:`<ellipse cx="65" cy="112" rx="50" ry="4" fill="#000" opacity=".12"/><ellipse cx="65" cy="68" rx="52" ry="40" fill="#f28fa6" ${Q}/><ellipse cx="65" cy="58" rx="40" ry="24" fill="#f7d7e4"/><path d="M38 64 Q65 82 92 64" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"story-pillow",name:"Story Pillow",cat:"decor",w:120,h:100,vb:"0 0 110 92",svg:`<ellipse cx="55" cy="86" rx="40" ry="4" fill="#000" opacity=".12"/><rect x="14" y="28" width="82" height="52" rx="18" fill="#a8d4ea" ${Q}/><path d="M55 40 l6 12 13 2 -10 8 2 13 -11 -7 -11 7 2 -13 -10 -8 13 -2 z" fill="#f7d27a" ${Q}/>`},{kind:"berry-basket",name:"Berry Basket",cat:"food",w:100,svg:`${ra}<path d="M22 48 H78 L70 88 H30 Z" fill="#f3d2b5" ${Q}/><path d="M30 58 H70 M32 70 H68 M34 80 H66" ${Q}/><circle cx="40" cy="40" r="10" fill="#f28fa6" ${Q}/><circle cx="58" cy="36" r="10" fill="#c94b6a" ${Q}/><circle cx="70" cy="48" r="8" fill="#b9a0dc" ${Q}/><path d="M34 36 Q40 28 46 36" fill="none" stroke="#7dce8a" stroke-width="3"/>`},{kind:"ribbon-tray",name:"Ribbon Tray",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`<ellipse cx="70" cy="84" rx="52" ry="4" fill="#000" opacity=".12"/><rect x="16" y="40" width="108" height="36" rx="12" fill="#fff" ${Q}/><rect x="22" y="46" width="96" height="22" rx="8" fill="#f7d7e4"/><rect x="36" y="28" width="16" height="22" rx="5" fill="#a8d4ea" ${Q}/><rect x="58" y="22" width="14" height="28" rx="5" fill="#f7d27a" ${Q}/><path d="M96 24 Q110 16 112 32 Q100 28 104 40 Q92 34 96 24 Z" fill="#f28fa6" ${Q}/>`}],Se="#5a3d5c",L=`stroke="${Se}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Xs=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="3" fill="${Se}"/><circle cx="${t}" cy="${n}" r="3" fill="${Se}"/><circle cx="${e+1}" cy="${n-1}" r="1" fill="#fff"/><circle cx="${t+1}" cy="${n-1}" r="1" fill="#fff"/>`,No=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/><ellipse cx="${t}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/>`,Ce='<ellipse cx="50" cy="97" rx="38" ry="3" fill="#000" opacity=".12"/>',wn=[{kind:"sofa",name:"Sofa",cat:"furniture",w:260,svg:`${Ce}<rect x="6" y="40" width="88" height="40" rx="16" fill="#ff8fab" ${L}/><rect x="16" y="28" width="68" height="30" rx="12" fill="#ffb3c6" ${L}/><rect x="2" y="48" width="18" height="38" rx="9" fill="#ff7096" ${L}/><rect x="80" y="48" width="18" height="38" rx="9" fill="#ff7096" ${L}/><rect x="20" y="60" width="60" height="18" rx="8" fill="#ffc2d1" ${L}/><rect x="14" y="86" width="6" height="10" rx="2" fill="${Se}"/><rect x="80" y="86" width="6" height="10" rx="2" fill="${Se}"/>`},{kind:"armchair",name:"Armchair",cat:"furniture",w:150,svg:`${Ce}<rect x="18" y="20" width="64" height="50" rx="20" fill="#8ecae6" ${L}/><rect x="6" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${L}/><rect x="72" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${L}/><rect x="24" y="58" width="52" height="24" rx="10" fill="#b8e0f2" ${L}/><rect x="20" y="86" width="6" height="10" rx="2" fill="${Se}"/><rect x="74" y="86" width="6" height="10" rx="2" fill="${Se}"/>`},{kind:"bed",name:"Bed",cat:"furniture",w:300,svg:`${Ce}<rect x="4" y="22" width="18" height="72" rx="8" fill="#c99366" ${L}/><rect x="80" y="44" width="16" height="50" rx="7" fill="#c99366" ${L}/><rect x="14" y="54" width="76" height="30" rx="10" fill="#fff" ${L}/><rect x="40" y="50" width="54" height="36" rx="12" fill="#a78bfa" ${L}/><circle cx="56" cy="64" r="3" fill="#fff"/><circle cx="72" cy="72" r="3" fill="#fff"/><circle cx="84" cy="60" r="3" fill="#fff"/><rect x="18" y="42" width="24" height="16" rx="8" fill="#fde2e4" ${L}/>`},{kind:"table",name:"Table",cat:"furniture",w:200,svg:`${Ce}<rect x="4" y="30" width="92" height="14" rx="7" fill="#f4a261" ${L}/><rect x="14" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${L}/><rect x="76" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${L}/><path d="M8 40 h84" stroke="#fff" stroke-width="2" opacity=".5"/>`},{kind:"chair",name:"Chair",cat:"furniture",w:100,svg:`${Ce}<rect x="22" y="6" width="56" height="50" rx="14" fill="#90e0a8" ${L}/><rect x="16" y="52" width="68" height="14" rx="7" fill="#5cc985" ${L}/><rect x="22" y="64" width="9" height="32" rx="4" fill="#5cc985" ${L}/><rect x="69" y="64" width="9" height="32" rx="4" fill="#5cc985" ${L}/><circle cx="50" cy="30" r="8" fill="#fff" opacity=".6"/>`},{kind:"lamp",name:"Lamp",cat:"furniture",w:90,svg:`${Ce}<path d="M24 40 L34 6 H66 L76 40 Z" fill="#ffd166" ${L}/><rect x="46" y="40" width="8" height="48" rx="4" fill="#c9a0dc" ${L}/><ellipse cx="50" cy="92" rx="22" ry="6" fill="#b388d6" ${L}/><circle cx="44" cy="20" r="3" fill="#fff" opacity=".8"/>`},{kind:"fridge",name:"Fridge",cat:"furniture",w:150,svg:`${Ce}<rect x="16" y="4" width="68" height="90" rx="14" fill="#bde0fe" ${L}/><path d="M16 38 H84" ${L}/><rect x="70" y="14" width="5" height="16" rx="2" fill="${Se}"/><rect x="70" y="46" width="5" height="22" rx="2" fill="${Se}"/><circle cx="32" cy="22" r="5" fill="#ff8fab" ${L}/><rect x="28" y="54" width="12" height="12" rx="3" fill="#ffd166" ${L}/>`},{kind:"stove",name:"Stove",cat:"furniture",w:170,svg:`${Ce}<rect x="8" y="26" width="84" height="68" rx="12" fill="#ffadad" ${L}/><rect x="8" y="18" width="84" height="14" rx="6" fill="#ffd6a5" ${L}/><rect x="20" y="46" width="60" height="36" rx="8" fill="#5a3d5c" opacity=".85"/><rect x="26" y="52" width="48" height="8" rx="4" fill="#fff" opacity=".25"/><circle cx="22" cy="38" r="3" fill="${Se}"/><circle cx="36" cy="38" r="3" fill="${Se}"/><circle cx="78" cy="38" r="3" fill="${Se}"/>`},{kind:"bookshelf",name:"Shelf",cat:"furniture",w:170,svg:`${Ce}<rect x="10" y="4" width="80" height="90" rx="10" fill="#d4a373" ${L}/><path d="M10 34 H90 M10 64 H90" ${L}/><rect x="18" y="12" width="8" height="22" rx="2" fill="#ff8fab" ${L}/><rect x="28" y="16" width="8" height="18" rx="2" fill="#8ecae6" ${L}/><rect x="38" y="12" width="8" height="22" rx="2" fill="#ffd166" ${L}/><rect x="60" y="42" width="8" height="22" rx="2" fill="#90e0a8" ${L}/><rect x="70" y="46" width="8" height="18" rx="2" fill="#c9a0dc" ${L}/><circle cx="34" cy="80" r="8" fill="#ffadad" ${L}/>`},{kind:"tub",name:"Bathtub",cat:"furniture",w:240,svg:`${Ce}<circle cx="30" cy="40" r="7" fill="#bde0fe" ${L}/><circle cx="44" cy="34" r="9" fill="#e0f2ff" ${L}/><circle cx="60" cy="40" r="7" fill="#bde0fe" ${L}/><path d="M4 48 H96 V62 Q96 90 70 90 H30 Q4 90 4 62 Z" fill="#fff" ${L}/><rect x="2" y="44" width="96" height="10" rx="5" fill="#ffc8dd" ${L}/><rect x="22" y="88" width="8" height="8" rx="2" fill="${Se}"/><rect x="70" y="88" width="8" height="8" rx="2" fill="${Se}"/>`},{kind:"rug",name:"Rug",cat:"decor",w:320,svg:`<ellipse cx="50" cy="82" rx="48" ry="14" fill="#ffc8dd" ${L}/><ellipse cx="50" cy="82" rx="34" ry="9" fill="#bde0fe" ${L}/><ellipse cx="50" cy="82" rx="18" ry="4.5" fill="#fff" ${L}/>`},{kind:"picture",name:"Picture",cat:"decor",w:130,wall:!0,svg:`<rect x="10" y="20" width="80" height="64" rx="8" fill="#ffd166" ${L}/><rect x="18" y="28" width="64" height="48" rx="4" fill="#bde0fe"/><circle cx="66" cy="40" r="7" fill="#fff3b0"/><path d="M18 76 L38 50 L52 64 L62 54 L82 76 Z" fill="#90e0a8" ${L}/>`},{kind:"window",name:"Window",cat:"decor",w:180,wall:!0,svg:`<rect class="winGlass" x="12" y="8" width="76" height="76" rx="38" fill="#a2d2ff" ${L}/><g class="winDay"><circle cx="34" cy="32" r="8" fill="#fff" opacity=".7"/></g><g class="winNight"><circle cx="62" cy="28" r="7" fill="#fff6d8"/><circle cx="28" cy="24" r="1.4" fill="#fff"/><circle cx="44" cy="20" r="1.1" fill="#fff"/><circle cx="70" cy="42" r="1.2" fill="#fff"/><circle cx="36" cy="46" r="1" fill="#fff"/></g><path d="M50 8 V84 M12 50 H88" ${L}/><path d="M4 8 Q20 40 10 90 M96 8 Q80 40 90 90" stroke="#ff8fab" stroke-width="9" fill="none" stroke-linecap="round"/>`},{kind:"clock",name:"Clock",cat:"decor",w:90,wall:!0,svg:`<circle cx="50" cy="50" r="38" fill="#fff" ${L}/><circle cx="50" cy="50" r="30" fill="#fff3b0"/><path d="M50 50 V28 M50 50 L64 58" ${L}/><circle cx="50" cy="50" r="3" fill="${Se}"/>${No(30,70,66)}`},{kind:"stars",name:"Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M30 20 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2z" fill="#ffd166" ${L}/><path d="M70 40 l4 8 9 1 -6 6 1 9 -8 -4 -8 4 1 -9 -6 -6 9 -1z" fill="#ffadad" ${L}/><path d="M40 66 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="#a2d2ff" ${L}/>`},{kind:"balloon",name:"Balloons",cat:"decor",w:110,svg:`<path d="M38 52 Q44 74 50 96 M64 46 Q58 72 50 96" stroke="${Se}" stroke-width="2" fill="none"/><ellipse cx="36" cy="32" rx="18" ry="22" fill="#ff8fab" ${L}/><ellipse cx="66" cy="28" rx="18" ry="22" fill="#a2d2ff" ${L}/><ellipse cx="30" cy="24" rx="4" ry="7" fill="#fff" opacity=".6"/>`},{kind:"teddy",name:"Teddy",cat:"decor",w:100,svg:`${Ce}<circle cx="26" cy="22" r="10" fill="#d4a373" ${L}/><circle cx="74" cy="22" r="10" fill="#d4a373" ${L}/><ellipse cx="50" cy="72" rx="28" ry="24" fill="#d4a373" ${L}/><circle cx="50" cy="38" r="26" fill="#e6b88a" ${L}/>${Xs(40,60,36)}<ellipse cx="50" cy="48" rx="8" ry="6" fill="#fff3e0"/><circle cx="50" cy="46" r="2.5" fill="${Se}"/>${No(32,68,46)}`},{kind:"ball",name:"Ball",cat:"decor",w:70,svg:`${Ce}<circle cx="50" cy="58" r="36" fill="#ffd166" ${L}/><path d="M18 46 Q50 66 82 46 M26 82 Q50 60 74 82" stroke="#ff7096" stroke-width="7" fill="none"/>`},{kind:"tv",name:"TV",cat:"decor",w:170,svg:`${Ce}<rect x="6" y="14" width="88" height="62" rx="14" fill="#c9a0dc" ${L}/><rect x="16" y="22" width="68" height="46" rx="8" fill="#a2d2ff"/><path d="M30 6 L44 14 M70 6 L56 14" ${L}/><rect x="36" y="78" width="28" height="16" rx="4" fill="#b388d6" ${L}/>${Xs(42,58,42)}<path d="M44 52 q6 5 12 0" ${L} fill="none"/>`},{kind:"plant",name:"Plant",cat:"plants",w:110,svg:`${Ce}<ellipse cx="34" cy="38" rx="12" ry="26" fill="#74c69d" ${L} transform="rotate(-25 34 38)"/><ellipse cx="66" cy="38" rx="12" ry="26" fill="#52b788" ${L} transform="rotate(25 66 38)"/><ellipse cx="50" cy="30" rx="12" ry="28" fill="#95d5b2" ${L}/><path d="M24 62 H76 L70 94 H30 Z" fill="#ff9f68" ${L}/><rect x="20" y="58" width="60" height="10" rx="5" fill="#ffb385" ${L}/>`},{kind:"cactus",name:"Cactus",cat:"plants",w:80,svg:`${Ce}<rect x="36" y="12" width="28" height="64" rx="14" fill="#80ed99" ${L}/><path d="M36 50 H24 a8 8 0 0 1 -8 -8 V34" fill="none" stroke="${Se}" stroke-width="3.5"/><rect x="12" y="26" width="12" height="22" rx="6" fill="#80ed99" ${L}/><circle cx="50" cy="12" r="6" fill="#ff8fab" ${L}/>${Xs(44,56,40)}<path d="M28 74 H72 L66 96 H34 Z" fill="#c9a0dc" ${L}/>`},{kind:"flowers",name:"Flowers",cat:"plants",w:90,svg:`${Ce}<path d="M50 70 V30 M50 60 Q30 50 30 30 M50 60 Q70 50 70 30" stroke="#52b788" stroke-width="4" fill="none"/><circle cx="50" cy="26" r="10" fill="#ff8fab" ${L}/><circle cx="30" cy="28" r="9" fill="#ffd166" ${L}/><circle cx="70" cy="28" r="9" fill="#a2d2ff" ${L}/><circle cx="50" cy="26" r="3" fill="#fff"/><path d="M32 66 H68 L62 96 H38 Z" fill="#a2d2ff" ${L}/>`},{kind:"tree",name:"Mini Tree",cat:"plants",w:140,svg:`${Ce}<rect x="44" y="54" width="12" height="30" rx="4" fill="#b07d54" ${L}/><circle cx="50" cy="36" r="30" fill="#52b788" ${L}/><circle cx="38" cy="30" r="5" fill="#ff8fab"/><circle cx="62" cy="40" r="5" fill="#ff8fab"/><circle cx="52" cy="22" r="5" fill="#ff8fab"/><path d="M28 80 H72 L66 96 H34 Z" fill="#ffd166" ${L}/>`},{kind:"cake",name:"Cake",cat:"food",w:100,svg:`<rect x="16" y="50" width="68" height="40" rx="10" fill="#ffc8dd" ${L}/><path d="M16 58 q8 10 17 0 q8 10 17 0 q8 10 17 0 q8 10 17 0" fill="#fff" ${L}/><rect x="46" y="28" width="8" height="22" rx="3" fill="#a2d2ff" ${L}/><path d="M50 14 q6 8 0 12 q-6 -4 0 -12" fill="#ffd166" ${L}/><ellipse cx="50" cy="92" rx="40" ry="5" fill="#fff" ${L}/>`},{kind:"apple",name:"Apple",cat:"food",w:60,svg:`<path d="M50 30 C20 18 8 50 22 74 C32 92 44 90 50 86 C56 90 68 92 78 74 C92 50 80 18 50 30 Z" fill="#ff6b6b" ${L}/><path d="M50 30 Q52 16 58 10" ${L} fill="none"/><ellipse cx="64" cy="18" rx="9" ry="5" fill="#80ed99" ${L} transform="rotate(-20 64 18)"/><ellipse cx="34" cy="46" rx="5" ry="9" fill="#fff" opacity=".5"/>`},{kind:"donut",name:"Donut",cat:"food",w:70,svg:`<circle cx="50" cy="58" r="36" fill="#e9c46a" ${L}/><path d="M18 52 Q20 26 50 24 Q80 26 82 52 Q76 62 66 56 Q56 66 46 58 Q34 66 24 58 Z" fill="#ff8fab" ${L}/><circle cx="50" cy="52" r="10" fill="#fff" ${L}/><rect x="30" y="36" width="6" height="3" rx="1.5" fill="#a2d2ff" transform="rotate(30 33 37)"/><rect x="64" y="38" width="6" height="3" rx="1.5" fill="#ffd166"/><rect x="56" y="30" width="6" height="3" rx="1.5" fill="#80ed99" transform="rotate(-30 59 31)"/>`},{kind:"pizza",name:"Pizza",cat:"food",w:80,svg:`<path d="M10 20 Q50 6 90 20 L50 94 Z" fill="#ffd166" ${L}/><path d="M10 20 Q50 6 90 20 L86 28 Q50 16 14 28 Z" fill="#e9a96a" ${L}/><circle cx="42" cy="38" r="7" fill="#ff6b6b" ${L}/><circle cx="62" cy="44" r="6" fill="#ff6b6b" ${L}/><circle cx="50" cy="62" r="6" fill="#ff6b6b" ${L}/>`},{kind:"juice",name:"Juice",cat:"food",w:55,svg:`<path d="M24 26 H76 L70 92 H30 Z" fill="#fff" ${L}/><path d="M27 44 H73 L70 92 H30 Z" fill="#ffb347"/><path d="M24 26 H76 L70 92 H30 Z" fill="none" ${L}/><path d="M58 30 L66 4" stroke="#ff8fab" stroke-width="6" stroke-linecap="round"/><circle cx="40" cy="60" r="4" fill="#fff" opacity=".6"/>`},{kind:"cat",name:"Toy cat",cat:"pets",w:110,svg:`${Ce}<path d="M78 80 Q98 70 90 50" stroke="#ffb347" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="30" ry="20" fill="#ffb347" ${L}/><path d="M22 30 L26 8 L40 22 M78 30 L74 8 L60 22" fill="#ffb347" ${L}/><circle cx="50" cy="42" r="28" fill="#ffc46b" ${L}/>${Xs(40,60,40)}<path d="M46 50 q4 4 8 0" ${L} fill="none"/>${No(32,68,50)}`},{kind:"dog",name:"Puppy",cat:"pets",w:120,svg:`${Ce}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#f5ebe0" ${L}/><circle cx="50" cy="42" r="28" fill="#fff" ${L}/><ellipse cx="22" cy="44" rx="10" ry="18" fill="#b07d54" ${L}/><ellipse cx="78" cy="44" rx="10" ry="18" fill="#b07d54" ${L}/><circle cx="60" cy="34" r="8" fill="#e6b88a" opacity=".7"/>${Xs(40,60,40)}<ellipse cx="50" cy="52" rx="5" ry="4" fill="${Se}"/><path d="M50 56 v6" ${L}/>`},{kind:"bunny",name:"Bunny",cat:"pets",w:90,svg:`${Ce}<ellipse cx="36" cy="22" rx="8" ry="20" fill="#fff" ${L}/><ellipse cx="64" cy="22" rx="8" ry="20" fill="#fff" ${L}/><ellipse cx="36" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="64" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="50" cy="76" rx="28" ry="20" fill="#fff" ${L}/><circle cx="50" cy="52" r="22" fill="#fff" ${L}/>${Xs(42,58,50)}<path d="M47 58 l3 3 3 -3" ${L} fill="none"/>${No(36,64,58)}`},{kind:"fish",name:"Fish Bowl",cat:"pets",w:100,svg:`${Ce}<circle cx="50" cy="54" r="40" fill="#cdeffd" ${L}/><path d="M14 46 H86" stroke="#8ecae6" stroke-width="3"/><path d="M60 64 l14 -8 v16 z" fill="#ff9f68" ${L}/><ellipse cx="46" cy="64" rx="16" ry="11" fill="#ffb347" ${L}/><circle cx="40" cy="62" r="2.5" fill="${Se}"/><circle cx="32" cy="38" r="3" fill="#fff" opacity=".8"/><rect x="24" y="10" width="52" height="8" rx="4" fill="#cdeffd" ${L}/>`},{kind:"kennel",name:"Dog Kennel",cat:"pets",w:210,h:175,holdable:!1,vb:"0 0 120 100",svg:`<ellipse cx="60" cy="97" rx="48" ry="3.2" fill="#000" opacity=".12"/><path d="M14 50 L60 12 L106 50 Z" fill="#ff8fab" ${L}/><path d="M28 46 L60 22 L92 46 Z" fill="#ffd6e4"/><rect x="20" y="46" width="80" height="50" rx="10" fill="#fff6ea" ${L}/><path d="M20 56 H100" stroke="#ffc2d4" stroke-width="7"/><path d="M34 96 V58 Q60 36 86 58 V96 Z" fill="#f3e4ff" ${L}/><path d="M40 96 V64 Q60 46 80 64 V96 Z" fill="#ffe8c7"/><circle cx="86" cy="64" r="8" fill="#bde0fe" ${L}/><circle cx="84" cy="62" r="2.2" fill="#fff" opacity=".9"/><path d="M28 62 l2.4 2.4 2.4-2.4 2.4 2.4 2.4-2.4-2.4-2.4-2.4 2.4z" fill="#ff8fab" ${L}/><circle cx="30" cy="90" r="3.2" fill="#fff" ${L}/><rect x="32" y="88.4" width="14" height="3.4" rx="1.7" fill="#fff" ${L}/><circle cx="48" cy="90" r="3.2" fill="#fff" ${L}/>`},{kind:"cat-tower",name:"Cat Tower",cat:"pets",w:150,h:225,holdable:!1,vb:"0 0 100 150",svg:`<ellipse cx="50" cy="146" rx="36" ry="3.4" fill="#000" opacity=".12"/><rect x="44" y="30" width="12" height="104" rx="6" fill="#c9a0dc" ${L}/><ellipse cx="50" cy="136" rx="34" ry="10" fill="#ffc8dd" ${L}/><ellipse cx="50" cy="132" rx="26" ry="6" fill="#fff6ea"/><ellipse cx="50" cy="102" rx="30" ry="8" fill="#bde0fe" ${L}/><ellipse cx="50" cy="98" rx="22" ry="4" fill="#fff" opacity=".8"/><ellipse cx="50" cy="64" rx="28" ry="8" fill="#ffd166" ${L}/><ellipse cx="50" cy="60" rx="20" ry="4" fill="#fff6d0"/><circle cx="50" cy="22" r="8" fill="#ff8fab" ${L}/><circle cx="47" cy="19" r="2.2" fill="#fff" opacity=".75"/><g class="dangle"><circle cx="22" cy="126" r="8" fill="#ffb3c6" ${L}/><path d="M22 126 q12 5 7 16" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/></g><circle cx="80" cy="92" r="3.4" fill="#ffd166" ${L}/>`},{kind:"vanity",name:"Vanity",cat:"furniture",w:230,svg:`${Ce}<ellipse cx="50" cy="26" rx="24" ry="22" fill="#fff" ${L}/><ellipse cx="50" cy="26" rx="18" ry="16" fill="#cdeffd"/><path d="M38 18 l6 -6 M42 26 l10 -10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="12" r="3" fill="#ffd166" ${L}/><circle cx="74" cy="12" r="3" fill="#ffd166" ${L}/><rect x="6" y="48" width="88" height="14" rx="7" fill="#ffc8dd" ${L}/><rect x="10" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${L}/><rect x="62" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${L}/><circle cx="24" cy="75" r="3" fill="${Se}"/><circle cx="76" cy="75" r="3" fill="${Se}"/><rect x="12" y="90" width="6" height="7" rx="2" fill="${Se}"/><rect x="82" y="90" width="6" height="7" rx="2" fill="${Se}"/>`},{kind:"stool",name:"Vanity Stool",cat:"furniture",w:90,svg:`${Ce}<ellipse cx="50" cy="48" rx="34" ry="14" fill="#c9a0dc" ${L}/><ellipse cx="50" cy="44" rx="28" ry="9" fill="#e4ccf2"/><path d="M28 58 L22 94 M72 58 L78 94 M50 62 V94" ${L}/><ellipse cx="50" cy="78" rx="22" ry="4" fill="none" ${L}/>`},{kind:"perfume",name:"Perfume",cat:"decor",w:50,svg:`<rect x="40" y="8" width="20" height="14" rx="5" fill="#ffd166" ${L}/><rect x="46" y="20" width="8" height="10" fill="#fff" ${L}/><path d="M20 50 Q20 30 50 30 Q80 30 80 50 V80 Q80 94 66 94 H34 Q20 94 20 80 Z" fill="#ff8fab" ${L}/><ellipse cx="36" cy="52" rx="5" ry="10" fill="#fff" opacity=".6"/><path d="M50 56 l4 8 8 1 -6 6 2 8 -8 -4 -8 4 2 -8 -6 -6 8 -1z" fill="#fff" opacity=".8"/>`},{kind:"polish",name:"Nail Polish",cat:"decor",w:40,svg:`<rect x="38" y="4" width="24" height="40" rx="8" fill="${Se}"/><path d="M24 54 Q24 42 36 42 H64 Q76 42 76 54 V84 Q76 96 64 96 H36 Q24 96 24 84 Z" fill="#b388d6" ${L}/><ellipse cx="38" cy="62" rx="5" ry="12" fill="#fff" opacity=".55"/>`},{kind:"hairdryer",name:"Hair Dryer",cat:"decor",w:90,svg:`<path d="M60 52 L70 92 Q70 96 64 96 H58 Q52 96 52 90 L46 56 Z" fill="#a2d2ff" ${L}/><rect x="6" y="20" width="62" height="40" rx="20" fill="#bde0fe" ${L}/><ellipse cx="82" cy="40" rx="12" ry="20" fill="#ffc8dd" ${L}/><ellipse cx="82" cy="40" rx="6" ry="11" fill="#fff" ${L}/><circle cx="24" cy="40" r="7" fill="#fff" opacity=".7"/>`},{kind:"mirror",name:"Mirror",cat:"decor",w:120,wall:!0,svg:`<path d="M50 6 C74 6 88 24 88 50 C88 76 72 94 50 94 C28 94 12 76 12 50 C12 24 26 6 50 6 Z" fill="#ffd166" ${L}/><ellipse cx="50" cy="50" rx="30" ry="36" fill="#e0f4ff" ${L}/><path d="M36 34 l10 -10 M36 46 l20 -20" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="6" r="6" fill="#ff8fab" ${L}/>`}],is={sofa:["living"],armchair:["living"],lamp:["living","bedroom"],tv:["living"],rug:["living","bedroom"],picture:["living","bedroom"],bookshelf:["living","bedroom"],bed:["bedroom"],teddy:["bedroom"],stars:["bedroom"],tub:["bedroom"],balloon:["any"],clock:["any"],window:["any"],ball:["any"],vanity:["salon"],stool:["salon"],perfume:["salon"],polish:["salon"],hairdryer:["salon"],mirror:["salon","bedroom"],fridge:["kitchen"],stove:["kitchen"],table:["kitchen","living"],chair:["kitchen","living"]};for(const e of eg)is[e.kind]=["nursery"];for(const e of Co)is[e.kind]=["backyard"];for(const e of sg)is[e.kind]=["bathroom"];is["floor-cushion"]=["living"];is["story-pillow"]=["bedroom"];is["berry-basket"]=["kitchen"];is["ribbon-tray"]=["salon"];wn.push(...eg,...Co,...sg,...T5);for(const e of wn)e.rooms=is[e.kind]??(["food"].includes(e.cat)?["kitchen"]:["any"]);const B5=new Set(["rug","tv","tree"]);for(const e of wn)e.holdable??=!e.wall&&e.cat!=="furniture"&&e.w<=150&&!B5.has(e.kind);const R5=[{kind:"ranch-egg",name:"Fresh Egg",cat:"ranch",w:50,holdable:!0,rooms:["any"],svg:`${Ce}<path d="M50 30 C70 30 80 62 80 74 C80 90 66 96 50 96 C34 96 20 90 20 74 C20 62 30 30 50 30 Z" fill="#fff6e6" ${L}/><ellipse cx="40" cy="52" rx="6" ry="9" fill="#fff"/>`},{kind:"ranch-carrot",name:"Garden Carrot",cat:"ranch",w:70,holdable:!0,rooms:["any"],svg:`${Ce}<path d="M30 40 L78 34 L40 96 Z" fill="#ff922b" ${L}/><path d="M44 50 l10 -2 M42 64 l8 -2 M44 78 l6 -1" ${L}/><path d="M72 36 Q80 14 92 14 M72 36 Q68 14 76 4 M72 36 Q90 30 96 36" fill="none" stroke="#40c057" stroke-width="7" stroke-linecap="round"/>`},{kind:"ranch-bouquet",name:"Ranch Flowers",cat:"ranch",w:80,holdable:!0,rooms:["any"],svg:`${Ce}<path d="M50 94 L40 50 M50 94 L50 44 M50 94 L62 50" stroke="#40c057" stroke-width="5" stroke-linecap="round"/><path d="M36 78 L64 78 L56 96 L44 96 Z" fill="#c9a0dc" ${L}/>${[[38,40,"#ff8fab"],[50,30,"#ffd43b"],[64,40,"#74c0fc"],[44,52,"#ff922b"],[58,52,"#c9a0dc"]].map(([e,t,n])=>`<circle cx="${e}" cy="${t}" r="9" fill="${n}" ${L}/><circle cx="${e}" cy="${t}" r="3" fill="#fff3b0"/>`).join("")}`}];wn.push(...W$,...F1,...R5);const Me=Object.fromEntries(wn.map(e=>[e.kind,e])),eo=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ct=e=>e.h??e.w,Rc=e=>e.img?`<img class="packimg" src="${eo(e.img)}" alt="${eo(e.name)}" draggable="false" />`:`<svg viewBox="${e.vb??"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg">${e.svg}</svg>`,hn=(e,t=!1)=>{const n=yi()?As(e.kind):void 0;if(!n)return Rc(e);const s=t&&!e.wall?'<i class="artshade" aria-hidden="true"></i>':"",i=e.kind==="window"?'<i class="artnight" aria-hidden="true"></i>':"";return`${s}${i}<img class="packimg artimg" data-kind="${eo(e.kind)}" src="${eo(n)}" alt="${eo(e.name)}" draggable="false" />`},A5='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="22" width="56" height="56" rx="14" fill="#fff6ea" stroke="#5a3d5c" stroke-width="4"/></svg>',D5=(e,t)=>e.img&&/\.webp(?:$|\?)/i.test(e.img)?A5:Rc(e);let lp=!1;function I5(){lp||typeof window>"u"||(lp=!0,window.addEventListener("error",e=>{const t=e.target;if(!(t instanceof HTMLImageElement)||!t.classList.contains("artimg")||t.dataset.fell==="1")return;const n=Me[t.dataset.kind||""];if(!n)return;t.dataset.fell="1",t.parentElement?.querySelector(".artshade")?.remove(),t.parentElement?.querySelector(".artnight")?.remove();const s=document.createElement("div");s.innerHTML=Rc(n);const i=s.firstElementChild;i&&t.replaceWith(i)},!0))}const cp=new WeakMap;function H5(e){const t=cp.get(e);if(t)return t;if(!e.complete||!e.naturalWidth)return null;const n=document.createElement("canvas");n.width=e.naturalWidth,n.height=e.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0});if(!s)return null;try{s.drawImage(e,0,0)}catch{return null}const i=s.getImageData(0,0,n.width,n.height).data;return cp.set(e,i),i}function O5(e,t,n){const s=e.getBoundingClientRect();if(s.width<1||s.height<1||!e.naturalWidth)return null;let i=(t-s.left)/s.width;const o=(n-s.top)/s.height;e.closest(".flipped")&&(i=1-i);const a=e.naturalWidth,r=e.naturalHeight,l=Math.min(s.width/a,s.height/r),c=a*l,p=r*l,d=(s.width-c)*.5,g=s.height-p,h=(i*s.width-d)/l,m=(o*s.height-g)/l;return h<0||m<0||h>=a||m>=r?null:{x:h,y:m}}function Ac(e,t,n){const s=H5(e),i=s&&O5(e,t,n);if(!s||!i)return!s;const o=Math.floor(i.x),r=(Math.floor(i.y)*e.naturalWidth+o)*4+3;return s[r]>24}function W5(e,t){const n=[];try{for(let s=0;s<12;s++){const i=document.elementFromPoint(e,t);if(!i)return null;const o=i.closest("img.artimg");if(o&&!Ac(o,e,t)){n.push(o),o.style.pointerEvents="none";continue}return i}return null}finally{for(let s=0;s<n.length;s++)n[s].style.pointerEvents=""}}const V5="var(--line)",U5=1.4,rt='fill="#3a1d3c" opacity=".14"',Hl='fill="#3a1d3c" opacity=".22"',pn={l:[72,172],r:[128,172]},_s={l:[50,233],r:[150,233]},Q5={l:[88,238],r:[112,238]};function D(e=3){return`stroke="${V5}" stroke-width="${(e*U5).toFixed(2)}" stroke-linejoin="round" stroke-linecap="round"`}function $(e){const n=(Math.round(e*10)/10).toFixed(1);return n.endsWith(".0")?n.slice(0,-2):n}function Ol(e,t,n,s,i){const o=i*Math.PI/180,a=e-n,r=t-s,l=Math.cos(o),c=Math.sin(o);return{x:n+a*l-r*c,y:s+a*c+r*l}}function to(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),i=(n>>16&255)*(1-t),o=(n>>8&255)*(1-t),a=(n&255)*(1-t);return"#"+s(i)+s(o)+s(a)}function dp(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),i=n>>16&255,o=n>>8&255,a=n&255;return"#"+s(i+(255-i)*t)+s(o+(255-o)*t)+s(a+(255-a)*t)}function Wl(e,t,n,s,i=0){const o=e[0],a=e[1],r=e[0]===t[0]&&e[1]===t[1]?t[0]+.01:t[0],l=t[1],c=r-o,p=l-a,d=Math.hypot(c,p)||1,g=-p/d,h=c/d,m=(o+r)/2+g*i,b=(a+l)/2+h*i,_=n/2,y=s/2,u=(_+y)/2*1.04,k=[o+g*_,a+h*_],x=[r+g*y,l+h*y],R=[r-g*y,l-h*y],H=[o-g*_,a-h*_];return`M${$(k[0])} ${$(k[1])} Q${$(m+g*u)} ${$(b+h*u)} ${$(x[0])} ${$(x[1])} A${$(y)} ${$(y)} 0 0 1 ${$(R[0])} ${$(R[1])} Q${$(m-g*u)} ${$(b-h*u)} ${$(H[0])} ${$(H[1])} A${$(_)} ${$(_)} 0 0 1 ${$(k[0])} ${$(k[1])} Z`}function _r(e,t,n,s,i){const o=[],a=(t-e)/s;for(let r=0;r<s;r++){const l=e+r*a,c=l+a;o.push(`Q${$((l+c)/2)} ${$(n+i)} ${$(c)} ${$(n)}`)}return o.join(" ")}function Vl(e,t,n,s,i,o=0){const a=[];for(let r=0;r<s;r++){const l=o+2*Math.PI*r/s,c=o+2*Math.PI*(r+1)/s,p=(l+c)/2,d=e+n*Math.cos(l),g=t+n*Math.sin(l),h=e+n*Math.cos(c),m=t+n*Math.sin(c),b=e+(n+i)*Math.cos(p),_=t+(n+i)*Math.sin(p);r===0&&a.push(`M${$(d)} ${$(g)}`),a.push(`Q${$(b)} ${$(_)} ${$(h)} ${$(m)}`)}return a.join(" ")+" Z"}function $s(e,t,n,s){const i=e==="arm"?pn[t]:Q5[t],o=e==="arm"?t==="l"?s.armL:s.armR:t==="l"?s.legL:s.legR,a=e==="leg"?t==="l"?s.legLLift:s.legRLift:0,r=o||a?` transform="translate(0 ${$(-a)}) rotate(${$(o)} ${i[0]} ${i[1]})"`:"";return`<g class="${e} ${t}${e==="arm"?" hang":""}"${r} style="transform-box:view-box;transform-origin:${i[0]}px ${i[1]}px">${n}</g>`}const Gn="var(--line)";function xn(e,t=.8,n=2.2){return e.map(s=>`<path d="${s}" fill="none" stroke="var(--hair-shade)" stroke-width="${n}" stroke-linecap="round" opacity="${t}"/>`).join("")}function qi(e,t=.32){return e.map(n=>`<path d="${n}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity="${t}"/>`).join("")}function Dn(){return'<path d="M54 72 Q62 44 92 38 Q70 50 63 74 Z" fill="#fff" opacity=".45"/><path d="M60 64 Q70 48 86 42" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/><path d="M104 37 Q130 38 145 58 Q128 46 106 43 Z" fill="#fff" opacity=".3"/><circle cx="72" cy="50" r="2" fill="#fff" opacity=".85"/>'}function Lt(e,t,n){return n?`<path d="${e}" fill="url(#${t}h)"/>`:""}const pp="M34 112 Q28 28 100 28 Q172 28 166 112 Q164 146 146 156 L54 156 Q36 146 34 112 Z";function Ot(e,t){return`<path d="${pp}" fill="var(--hair)" ${D(3.2)}/>${Lt(pp,e,t)}`}function el(e,t,n,s,i,o,a=10){const r=Vl(e+2,t+3,n,12,7,s+.1),l=Vl(e,t,n-1,12,7,s);let c=`<path d="${r}" fill="var(--hair-shade)" ${D(3.2)}/><path d="${l}" fill="var(--hair)" ${D(3.2)}/>${Lt(l,i,o)}`;for(let p=0;p<a;p++){const d=p*2.5+s,g=(n-6)*Math.sqrt((p+.5)/a),h=e+g*Math.cos(d),m=t+g*Math.sin(d);c+=`<path d="M${$(h-4)} ${$(m+1)} q1 -5 4.5 -4.5 q3.5 1 2.5 4.5" fill="none" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>`,m<t-2&&h<e+6&&(c+=`<path d="M${$(h-2.5)} ${$(m-2.5)} q2 -2 3.5 -1" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>`)}return c+=`<ellipse cx="${$(e-10)}" cy="${$(t-12)}" rx="6" ry="3.4" fill="#fff" opacity=".55" transform="rotate(-35 ${$(e-10)} ${$(t-12)})"/>`,c+=`<path d="M${$(e-16)} ${$(t-6)} Q${$(e-6)} ${$(t-18)} ${$(e+4)} ${$(t-14)}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>`,c}function xs(e,t,n,s=6,i=[],o=7){let a=`<path d="M${e} ${t-6} V${n}" stroke="${Gn}" stroke-width="${$(2*s+4.6)}" stroke-linecap="round"/><path d="M${e} ${t-6} V${n}" stroke="var(--hair)" stroke-width="${$(2*s)}" stroke-linecap="round"/>`,r=t,l=0;for(;r<n;){const c=l%2?1:-1;a+=`<path d="M${$(e-c)} ${$(r-4)} Q${$(e+c*s*1.05)} ${$(r-2)} ${$(e+c*s*.55)} ${$(r+4)} Q${$(e)} ${$(r+5.5)} ${$(e-c*1.4)} ${$(r+1)}" fill="none" stroke="var(--hair-shade)" stroke-width="1.7" stroke-linecap="round"/>`,c>0&&(a+=`<path d="M${$(e+1)} ${$(r-2)} q2.2 -.5 3 1.4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>`),r+=o,l++}for(let c=0;c<i.length;c++){const p=i[c];a+=`<rect x="${$(e-6.2)}" y="${p-4}" width="12.4" height="8" rx="2.6" fill="var(--acc)" stroke="${Gn}" stroke-width="2"/><rect x="${$(e-4)}" y="${p-2.5}" width="2.6" height="4.5" rx="1" fill="#fff" opacity=".6"/>`}return a+=`<path d="M${e-4} ${n+2} q2 5 4 6 q2 -1 4 -6" fill="var(--hair)" stroke="${Gn}" stroke-width="2"/>`,a}function Da(e,t,n,s=5.5){let i=`<path d="M${e} ${t} V${n}" stroke="${Gn}" stroke-width="${$(2*s+4)}" stroke-linecap="round"/><path d="M${e} ${t} V${n}" stroke="var(--hair)" stroke-width="${$(2*s)}" stroke-linecap="round"/>`;for(let o=t+8;o<n;o+=16)i+=`<path d="M${$(e-s*.7)} ${o} Q${e} ${o+5} ${$(e+s*.7)} ${o}" fill="none" stroke="var(--hair-shade)" stroke-width="1.6" opacity=".8"/>`;return i+=`<circle cx="${e}" cy="${n+3}" r="${$(s*.55)}" fill="var(--hair)" stroke="${Gn}" stroke-width="2"/>`,i}function tl(e,t,n,s){return`<path d="${e}" fill="var(--hair)" ${D(3)}/>${Lt(e,t,n)}${xn(s)}${qi(s.slice(0,2),.45)}`}function Js(e,t,n){return`<ellipse cx="${e}" cy="${t}" rx="8" ry="5.5" fill="var(--acc)" ${D(2.4)} transform="rotate(${n} ${e} ${t})"/><ellipse cx="${e-1}" cy="${t-2}" rx="2.4" ry="1.3" fill="#fff" opacity=".6" transform="rotate(${n} ${e-1} ${t-2})"/>`}const In='<path d="M42 104 Q44 76 70 66 Q86 74 100 58 Q114 74 130 66 Q156 76 158 104" fill="none" stroke="#3a1d3c" stroke-width="9" opacity=".12"/>';function ig(e){return e==="puffs"||e==="coily"?"puffs":e==="afro"?"afro":e==="braids"?"braids":e==="boxbraids"?"box":e==="locs"?"locs":e==="sidebraid"?"sidebraid":e==="crown"?"crown":e==="pony"?"pony":e==="sidepony"?"sidepony":e==="pigtails"?"pigtails":e==="halfup"?"halfup":e==="buns"?"buns":e==="topbun"?"topbun":e==="lowbun"?"lowbun":e==="long"?"long":e==="wavy"||e==="wavybob"?e==="wavy"?"wavy":"bob":e==="bob"||e==="curlybob"||e==="sidebangs"?"bob":e==="pixie"?"pixie":(e==="bangs"||e==="short")&&e==="bangs"?"bangs":"short"}function q5(e,t,n){const s=ig(e);if(s==="puffs"){const i=e==="coily"?26:30;return el(48,52,i,0,t,n,12)+el(152,52,i,.3,t,n,12)+`<path d="M42 112 Q38 48 100 44 Q162 48 158 112 Q154 144 100 146 Q46 144 42 112 Z" fill="var(--hair)" ${D(3.2)}/>`+Js(66,68,-35)+Js(134,68,35)}if(s==="afro")return el(100,78,78,.2,t,n,14);if(s==="braids")return Ot(t,n)+xs(34,108,230,5.4,[196])+xs(166,108,230,5.4,[196]);if(s==="box")return Ot(t,n)+xs(30,110,228,5,[200],10)+xs(170,110,228,5,[200],10);if(s==="locs")return Ot(t,n)+Da(32,112,236)+Da(168,112,236);if(s==="sidebraid")return Ot(t,n);if(s==="pony"||s==="sidepony"||s==="halfup"){const i=s==="sidepony"?"M118 78 Q150 70 158 120 Q164 160 150 200 Q136 188 138 160 Q132 120 124 96 Z":"M126 40 Q178 28 180 92 Q184 132 168 168 Q160 196 174 220 Q148 212 145 182 Q140 156 152 124 Q160 90 132 64 Z",o=s==="halfup"?70:s==="sidepony"?86:44;return Ot(t,n)+tl(i,t,n,s==="sidepony"?["M130 96 Q150 120 146 160","M138 110 Q154 140 148 180"]:["M146 56 Q170 88 160 130","M156 66 Q176 100 166 140","M150 150 Q148 180 160 206"])+Js(s==="sidepony"?124:128,o,s==="sidepony"?-20:25)}if(s==="pigtails")return Ot(t,n)+tl("M40 100 Q22 120 28 168 Q34 200 48 214 Q58 196 52 160 Q58 124 56 108 Z",t,n,["M40 120 Q32 150 40 184"])+tl("M160 100 Q178 120 172 168 Q166 200 152 214 Q142 196 148 160 Q142 124 144 108 Z",t,n,["M160 120 Q168 150 160 184"])+Js(52,96,20)+Js(148,96,-20);if(s==="buns"){let i="";for(const o of[52,148])i+=`<circle cx="${o}" cy="44" r="24" fill="var(--hair)" ${D(3.2)}/>${n?`<circle cx="${o}" cy="44" r="24" fill="url(#${t}h)"/>`:""}`,i+=xn([`M${o-14} 48 Q${o-14} 28 ${o} 26 Q${o+16} 30 ${o+14} 48`,`M${o-8} 54 Q${o+8} 56 ${o+12} 48`]),i+=`<path d="M${o-12} 34 Q${o-4} 24 ${o+4} 26" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>`;return i+Ot(t,n)}if(s==="topbun")return`<circle cx="100" cy="30" r="26" fill="var(--hair)" ${D(3.2)}/>${n?`<circle cx="100" cy="30" r="26" fill="url(#${t}h)"/>`:""}<path d="M82 28 Q100 12 118 28" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/>${xn(["M86 36 Q100 24 114 36","M90 42 Q100 34 110 42"])}${Ot(t,n)}`;if(s==="lowbun")return Ot(t,n)+`<circle cx="100" cy="168" r="22" fill="var(--hair)" ${D(3)}/>${n?`<circle cx="100" cy="168" r="22" fill="url(#${t}h)"/>`:""}${Js(100,148,0)}`;if(s==="long"||s==="wavy"){const i=s==="wavy"?"M36 108 Q28 160 40 210 Q52 250 46 286 Q70 270 78 230 Q60 180 58 140 Q52 120 48 108 Z M164 108 Q172 160 160 210 Q148 250 154 286 Q130 270 122 230 Q140 180 142 140 Q148 120 152 108 Z":"M38 110 Q30 170 36 240 Q42 280 34 300 L70 292 Q64 240 66 180 Q62 140 56 112 Z M162 110 Q170 170 164 240 Q158 280 166 300 L130 292 Q136 240 134 180 Q138 140 144 112 Z";return`<path d="${i}" fill="var(--hair)" ${D(3)}/>${Lt(i,t,n)}${Ot(t,n)}`}if(s==="bob"){const i=e==="curlybob"?"M30 120 Q24 170 48 196 Q70 210 100 206 Q130 210 152 196 Q176 170 170 120 Q150 150 100 156 Q50 150 30 120 Z":"M32 116 Q26 168 50 190 Q78 204 100 200 Q122 204 150 190 Q174 168 168 116 Q150 148 100 154 Q50 148 32 116 Z";return`<path d="${i}" fill="var(--hair)" ${D(3.2)}/>${Lt(i,t,n)}${Ot(t,n)}`}return Ot(t,n)}function Z5(e,t,n){const s=ig(e),i='<path d="M100 34 V56" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>';if(s==="puffs"||s==="braids"||s==="box"||s==="locs"||s==="afro"||s==="bangs"){const a=s==="afro"?"M48 100 Q52 48 100 40 Q148 48 152 100 Q140 78 100 70 Q60 78 48 100 Z":s==="bangs"?"M40 108 Q36 40 100 34 Q164 40 160 108 L150 96 Q130 108 100 100 Q70 108 50 96 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q154 74 130 62 Q112 70 100 52 Q88 70 70 62 Q46 74 40 106 Z";let r=In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}${i}`;return r+=xn(["M84 44 Q70 52 60 70","M116 44 Q130 52 140 70","M92 40 Q80 48 74 58","M108 40 Q120 48 126 58","M76 42 Q58 56 52 82","M124 42 Q142 56 148 82"]),r+=qi(["M90 36 Q78 42 70 52","M112 36 Q124 42 132 52"]),s==="puffs"?(r+=`<path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="${Gn}" stroke-width="7" stroke-linecap="round"/><path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`,r+=`<path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="${Gn}" stroke-width="7" stroke-linecap="round"/><path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`):s==="braids"||s==="box"?(r+=xs(48,114,200,5,[156],s==="box"?10:7),r+=xs(152,114,200,5,[156],s==="box"?10:7)):s==="locs"&&(r+=Da(46,116,210,4.6)+Da(154,116,210,4.6)),r+Dn()}if(s==="sidebraid"){const a="M40 108 Q36 36 100 32 Q164 36 160 100 Q140 78 100 70 Q70 80 40 108 Z";return In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}${xn(["M70 46 Q86 60 96 74","M120 44 Q136 58 146 74"])}${xs(150,100,210,5.6,[168],7)}${Dn()}`}if(s==="crown"){const a="M40 106 Q36 36 100 32 Q164 36 160 106 Q150 80 100 74 Q50 80 40 106 Z";let r="";for(let l=0;l<7;l++){const c=58+l*14;r+=`<path d="M${c} 58 Q${c+7} 46 ${c+14} 58" fill="none" stroke="var(--hair-shade)" stroke-width="3.2" stroke-linecap="round"/>`}return In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}${r}${Dn()}`}if(s==="pony"||s==="sidepony"||s==="halfup"||s==="pigtails"){const a=s==="sidepony"?"M40 108 Q34 36 100 32 Q166 34 160 108 Q150 86 120 78 Q90 90 60 74 Q48 90 40 108 Z":"M40 108 Q34 34 100 32 Q166 34 160 108 Q156 84 144 72 Q128 86 104 80 Q86 78 72 68 Q60 84 48 84 Q42 94 40 108 Z";let r=In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}`;return r+=`<path d="M40 104 Q36 120 44 132 Q46 116 50 106 Z" fill="var(--hair)" ${D(2.4)}/><path d="M160 104 Q164 120 156 132 Q154 116 150 106 Z" fill="var(--hair)" ${D(2.4)}/>`,r+=xn(["M70 46 Q90 60 104 74","M128 46 Q140 60 146 74","M96 40 Q110 56 116 66"]),r+=qi(["M76 42 Q92 52 100 62"]),r+Dn()}if(s==="buns"||s==="topbun"||s==="lowbun"){const a=s==="topbun"?"M44 108 Q40 50 100 46 Q160 50 156 108 Q148 82 100 74 Q52 82 44 108 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q152 80 138 70 Q126 80 112 76 Q104 82 100 74 Q96 82 88 76 Q74 80 62 70 Q48 80 40 106 Z";let r=In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}`;if(r+=xn(["M80 42 Q72 56 68 68","M120 42 Q128 56 132 68","M100 36 Q98 56 100 70","M90 38 Q84 56 86 72","M110 38 Q116 56 114 72"]),r+=qi(["M86 38 Q80 46 78 54","M114 38 Q120 46 122 54"]),s==="buns")for(const[l,c]of[[42,1],[158,-1]]){const p=`M${l} 100 q${-8*c} 14 ${-2*c} 24 q${5*c} 8 ${-1*c} 14`;r+=`<path d="${p}" fill="none" stroke="${Gn}" stroke-width="7" stroke-linecap="round"/><path d="${p}" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`}return r+Dn()}if(s==="long"||s==="wavy"||s==="bob"){const a=e==="sidebangs"||e==="wavybob"?"M38 108 Q34 40 70 36 Q100 34 112 48 Q90 70 48 78 Q36 90 38 108 Z M112 48 Q140 36 164 50 Q166 100 150 108 Q130 80 112 70 Z":"M40 108 Q34 36 100 32 Q166 36 160 108 Q152 78 128 68 Q112 78 100 60 Q88 78 72 68 Q48 78 40 108 Z";return In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}${xn(["M78 46 Q68 64 64 80","M122 46 Q132 64 136 80","M100 38 V64"])}${qi(["M88 40 Q80 50 76 60"])}${Dn()}`}if(s==="pixie"){const a="M48 104 Q44 48 100 40 Q140 46 150 78 Q156 100 140 108 Q120 86 100 90 Q70 84 52 104 Z";return In+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${Lt(a,t,n)}${xn(["M70 56 Q86 70 96 84","M118 52 Q132 66 138 82"])}${Dn()}`}const o="M46 106 Q42 46 100 38 Q158 46 154 106 Q140 80 100 76 Q60 80 46 106 Z";return In+`<path d="${o}" fill="var(--hair)" ${D(3.2)}/>${Lt(o,t,n)}${i}${Dn()}`}const wi="var(--line)";function Dc(e){return Math.abs(e.legL)>=40||Math.abs(e.legR)>=40}function Ds(e,t,n,s=[]){const i=s.map(o=>`<path d="${o}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/>`).join("");return(n?`<path d="${e}" fill="url(#${t}c)"/>`:"")+i}function Ul(e,t,n){const s=(n+7).toFixed(1);return`<path d="${e}" fill="none" stroke="${wi}" stroke-width="${s}" stroke-linecap="round"/><path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`}function Ic(e,t,n){return $s("arm",e,t,n).replace('class="arm ','class="arm sleeve ')}function la(e,t,n=!1){const[s,i]=pn[e],o=e==="l"?-1:1;let a=Ul(`M${s} ${i} L${s+7*o} ${i+20}`,"var(--top)",22);return n&&(a+=`<path d="M${s+7*o-12} ${i+17} H${s+7*o+12}" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round" opacity=".9" transform="rotate(${-18*o} ${s+7*o} ${i+17})"/>`),Ic(e,a,t)}function no(e,t,n=!0){const[s,i]=pn[e],[o,a]=_s[e],r=e==="l"?-1:1,l=(s+o)/2+6*r;let c=Ul(`M${s-2*r} ${i-2} Q${l} ${(i+a)/2-6} ${o-r} ${a-16}`,"var(--top)",21);return n&&(c+=Ul(`M${o-3*r} ${a-17} L${o-r} ${a-13}`,"var(--top-trim)",20)),Ic(e,c,t)}function Ql(e,t,n=!1){const[s,i]=pn[e],o=e==="l"?-1:1,a=s+4*o,r=i+8;let l=`<path d="${Vl(a,r,13,9,3.2)}" fill="var(--top)" ${D(2.8)}/>`;return l+=`<ellipse cx="${a-4*o}" cy="${r-5}" rx="5" ry="3" fill="#fff" opacity=".45"/>`,n&&(l+=`<path d="M${a-11} ${r+13} ${_r(a-11,a+11,r+13,4,3)}" fill="none" stroke="#fff" stroke-width="2.4"/>`),Ic(e,l,t)}function Vt(e,t){return e("l",t)+e("r",t)}const fp="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 228 Q100 236 64 228 Z";function us(e,t,n,s,i,o,a="",r=[],l=!1){const c=`<path d="${t}" fill="var(--top)" ${D(3)}/>${Ds(t,s,i,r)}${a}`;return`<g class="shirt" data-hem="${o}">${l?c+n:n+c}</g>`}function N5(e,t,n,s,i){if(t.dress)return"";const o=t.top;if(o==="hoodie"){const l="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L139 230 Q100 240 61 230 Z",c=`<path d="M120 162 Q132 164 134 170 L139 230 Q128 233 123 233 Z" ${rt}/><path d="M72 172 Q76 164 86 163" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" opacity=".38"/><path d="M78 159 Q100 182 122 159 Q120 152 100 152 Q80 152 78 159 Z" fill="var(--top-trim)" ${D(2.8)}/><path d="M92 172 v18 M108 172 v18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="92" cy="191" r="2.6" fill="#fff" ${D(1.8)}/><circle cx="108" cy="191" r="2.6" fill="#fff" ${D(1.8)}/><path d="M78 202 H122 L127 222 H73 Z" fill="var(--top)" ${D(2.6)}/><path d="M78 202 H122 L124 210 H76 Z" ${rt}/><path d="M61 226 Q100 236 139 226 L139 234 Q100 244 61 234 Z" fill="var(--top-trim)" ${D(2.8)}/>`;return us(e,l,Vt(no,e),n,s,i,c,["M74 196 q-2 12 2 22","M126 190 q2 14 0 26"])}if(o==="stripes"||o==="jersey"){const l="M68 168 Q74 158 92 158 H108 Q126 158 132 168 L135 232 Q100 238 65 232 Z",c=`${n}st`,p=o==="jersey"?'<path d="M70 176 H130 L128 188 H72 Z" fill="var(--top-trim)"/><path d="M68 210 H132 L130 222 H70 Z" fill="var(--top-trim)"/>':[166,179,192,205,218,231].map(m=>`<rect x="60" y="${m}" width="80" height="6" fill="var(--top-trim)"/>`).join(""),d=o==="jersey"?'<path d="M86 160 L100 176 L114 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/>':'<path d="M84 159 Q100 172 116 159" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',g=s?`<path d="${l}" fill="url(#${n}c)"/>`:"";return`<g class="shirt" data-hem="${i}"><defs><clipPath id="${c}"><path d="${l}"/></clipPath></defs>${Vt(m=>la(m,e,!0),e)}<path d="${l}" fill="var(--top)"/><g clip-path="url(#${c})">${g}<path d="M118 160 L135 168 L138 236 H120 Z" ${rt}/>${p}</g><path d="${l}" fill="none" ${D(3)}/>${d}<path d="M78 198 q-2 12 1 24" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/><path d="M122 190 q2 14 0 28" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/></g>`}if(o==="sweater"||o==="cardigan"){const l=o==="cardigan"?"M68 168 Q74 158 92 158 H108 Q126 158 132 168 L134 232 H108 L100 210 L92 232 H66 Z":"M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 234 Q100 242 64 234 Z",c=`<path d="M118 166 L134 174 L136 230 Q120 236 112 228 Z" ${rt}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M64 226 Q100 236 136 226" fill="none" stroke="var(--top-trim)" stroke-width="6" stroke-linecap="round"/>`,p=o==="cardigan"?[186,202,218].map(d=>`<circle cx="100" cy="${d}" r="2.4" fill="var(--top-trim)" ${D(1.4)}/>`).join(""):"";return us(e,l,Vt(no,e),n,s,i,c+p,["M80 190 q-2 16 0 28","M120 188 q2 16 0 30"])}if(o==="tank"||o==="bib"){const l=o==="bib"?"M78 168 H122 L126 228 H74 Z":"M78 168 Q86 160 96 164 H104 Q114 160 122 168 L128 226 H72 Z",c=`<path d="M110 172 H126 L128 226 H114 Z" ${rt}/><path d="M82 176 Q84 168 92 166" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".35"/>`,p=o==="bib"?`${c}<path d="M86 150 L78 168 M114 150 L122 168" stroke="${wi}" stroke-width="8" stroke-linecap="round"/><path d="M86 150 L78 168 M114 150 L122 168" stroke="var(--top)" stroke-width="4.5" stroke-linecap="round"/><rect x="90" y="176" width="20" height="16" rx="3" fill="var(--top-trim)" ${D(1.6)}/>`:`${c}<path d="M84 166 Q100 176 116 166" fill="none" stroke="var(--top-trim)" stroke-width="4"/>`;return us(e,l,"",n,s,i,p,["M88 190 q2 14 0 24"])}if(o==="puff"||o==="ruffle"){const l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L132 222 H68 Z",c=`<path d="M100 172 l-8 -5 v10 z M100 172 l8 -5 v10 z" fill="var(--top-trim)" ${D(1.8)}/><path d="M97 174 l-4 10 M103 174 l4 10" stroke="var(--top-trim)" stroke-width="2.6" stroke-linecap="round"/>`,p=(o==="ruffle"?`<path d="M68 166 Q74 178 82 166 Q90 180 100 166 Q110 180 118 166 Q126 180 132 166" fill="var(--top-trim)" ${D(2)}/>`:c)+`<path d="M118 162 Q128 164 130 170 L132 222 H120 Z" ${rt}/><path d="M74 176 Q76 168 84 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return us(e,l,Vt(Ql,e),n,s,i,p,["M86 190 q2 10 0 20","M116 188 q-2 12 0 22"],!0)}if(o==="button"){const l=fp,c=[180,196,212].map(d=>`<circle cx="100" cy="${d}" r="2.6" fill="#fff" ${D(1.6)}/>`).join(""),p=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${rt}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M100 164 V226" stroke="#fff" stroke-width="2" opacity=".7"/>${c}<path d="M82 160 Q100 172 118 160" fill="var(--top)" ${D(2.2)}/>`;return us(e,l,Vt(d=>la(d,e,!1),e),n,s,i,p,["M78 196 q-1 12 2 20"])}if(o==="raincoat"){const l="M62 168 Q70 156 92 156 H108 Q130 156 138 168 L146 240 Q100 252 54 240 Z",c=`<path d="M120 164 L142 176 L146 236 Q124 244 116 232 Z" ${rt}/><path d="M72 176 Q76 166 88 164" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M70 156 Q100 176 130 156" fill="none" stroke="var(--top-trim)" stroke-width="6"/><circle cx="100" cy="196" r="4" fill="var(--top-trim)" ${D(1.8)}/><path d="M78 214 H122" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round"/>`;return us(e,l,Vt(no,e),n,s,i,c,["M76 190 q-4 18 -2 36","M124 188 q4 18 2 36"])}const a=fp,r=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${rt}/><path d="M84 160 Q100 172 116 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return us(e,a,Vt(l=>la(l,e,!1),e),n,s,i,r,["M78 196 q-2 12 1 22","M122 194 q2 14 -1 24"])}function gp(e,t,n,s,i,o=!1,a=16){const r=e==="l"?88:112,l=e==="l"?-1:1,c=`M${r-a/2} 226 Q${r-a/2+l} ${n-20} ${r-a/2+2*l} ${n} H${r+a/2} Q${r+a/2} ${n-30} ${r+a/2-l} 226 Z`;let p=`<path d="${c}" fill="var(--bottom)" ${D(2.8)}/>`;return p+=Ds(c,s,i,[`M${r-4*l} 240 Q${r} ${(226+n)/2} ${r+3*l} ${n-14}`]),e==="r"?p+=`<path d="M${r+1} 230 H${r+a/2} L${r+a/2} ${n} H${r+4} Z" ${rt}/>`:p+=`<path d="M${r-2} 238 Q${r-6} ${(226+n)/2} ${r-2} ${n-10}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".3"/>`,o&&(p+=`<path d="M${r-a/2-1} ${n-8} H${r+a/2+1} V${n+1} H${r-a/2-1} Z" fill="var(--bottom-trim)" ${D(2)}/>`),$s("leg",e,p,t)}function F5(e,t,n,s){if(t.dress)return'<g data-layer="bottom"></g>';const i=t.bottom;if(Dc(e)&&(i==="skirt"||i==="tutu"||i==="overalls"))return`<g data-layer="bottom"><path class="skirt" d="${i==="tutu"?"M52 216 H148 L160 248 Q100 260 40 248 Z":"M62 218 H138 L152 252 Q100 264 48 252 Z"}" fill="var(--bottom)" ${D(3)}/></g>`;if(i==="skirt"){const g="M68 222 H132 L146 262 Q100 274 54 262 Z";return`<g data-layer="bottom"><path class="skirt" d="${g}" fill="var(--bottom)" ${D(3)}/>${Ds(g,n,s,["M82 234 L76 258","M100 232 V266","M118 234 L126 258"])}<path d="M114 224 H132 L146 262 Q130 268 118 266 Z" ${rt}/><path d="M72 228 Q66 246 64 258" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".3"/><path d="M84 236 v10 M116 236 v10" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3" opacity=".55"/></g>`}if(i==="tutu")return'<g data-layer="bottom"></g>';if(i==="overalls"){const g="M66 220 H134 L139 264 H106 L100 254 L94 264 H61 Z";return`<g data-layer="bottom"><g class="leg" style="transform-box:view-box;transform-origin:100px 238px"><path d="${g}" fill="var(--bottom)" ${D(3)}/>${Ds(g,n,s,["M78 232 Q74 248 72 260","M122 230 Q128 248 132 260"])}<path d="M118 222 H134 L139 264 H122 Z" ${rt}/><path d="M64 258 H95 M105 258 H138" stroke="var(--bottom-trim)" stroke-width="4"/></g></g>`}const a=i==="shorts"?256:292,r=i==="joggers"||i==="jeans",l=i==="leggings"?12:i==="shorts"?18:16,c=gp("l",e,a,n,s,r,l)+gp("r",e,a,n,s,r,l),p=i==="jeans"?'<path d="M88 232 V286 M112 232 V286" stroke="#c9a24a" stroke-width="1.4" stroke-dasharray="2 3" opacity=".7"/>':"";return`<g data-layer="bottom">${`<path d="M70 220 H130 V230 H70 Z" fill="var(--bottom)" ${D(2.4)}/>`}${c}${p}</g>`}function j5(e,t,n,s){if(t.dress)return'<g data-layer="bottom-over"></g>';const i=t.bottom;if(i==="overalls"){const o="M78 180 H122 L124 228 H76 Z";return`<g data-layer="bottom-over"><path d="M80 176 L72 164 M120 176 L128 164" stroke="${wi}" stroke-width="12" stroke-linecap="round"/><path d="M80 176 L72 164 M120 176 L128 164" stroke="var(--bottom)" stroke-width="7.5" stroke-linecap="round"/><path d="${o}" fill="var(--bottom)" ${D(3)}/>${Ds(o,n,s,["M86 200 q14 6 28 0"])}<path d="M88 190 H112 V206 Q100 212 88 206 Z" fill="var(--bottom-trim)" ${D(2.4)}/><circle cx="82" cy="186" r="3.6" fill="#fff" ${D(2)}/><circle cx="118" cy="186" r="3.6" fill="#fff" ${D(2)}/><path d="M66 222 H134 L135 230 H65 Z" fill="var(--bottom)" ${D(3)}/><path d="M108 180 H122 L124 228 H110 Z" ${rt}/><path d="M82 182 v12" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/></g>`}if(i==="tutu"){if(Dc(e))return`<g data-layer="bottom-over"><path class="skirt" d="M58 220 H142 L154 246 Q100 256 46 246 Z" fill="var(--bottom)" ${D(2.4)}/></g>`;let o="";const a=[[266,50,150,8],[256,56,144,7],[246,64,136,6]];for(let l=0;l<a.length;l++){const[c,p,d,g]=a[l],h=`M${p+8} ${c-22} H${d-8} L${d} ${c} ${_r(d,p,c,6,g)} Z`;o+=`<path class="skirt" d="${h}" fill="var(--bottom)" ${D(2.4)}/>`,o+=`<path d="M${d-20} ${c-16} L${d-6} ${c-2}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".2"/>`}const r="M66 214 H134 V224 H66 Z";return`<g data-layer="bottom-over">${o}<path d="${r}" fill="var(--bottom-trim)" ${D(2.6)}/>${Ds(r,n,s)}</g>`}return'<g data-layer="bottom-over"></g>'}function hp(e,t){return`<path d="M${e} ${t+2} c-3 -5 -9 -1 -5 3 l5 4 l5 -4 c4 -4 -2 -8 -5 -3z" fill="var(--top-trim)" opacity=".85"/>`}function G5(e,t,n,s,i){const o=t.dress;if(!o)return"";const a=`${n}dr`;let r="M72 210 H128 L150 268 Q100 282 50 268 Z",l="M72 168 Q78 158 94 158 H106 Q122 158 128 168 L130 214 H70 Z",c="",p=Vt(m=>Ql(m,e,!0),e),d=!0;o==="sundress"?(r="M76 214 H124 L140 266 Q100 276 60 266 Z",c='<path d="M78 166 Q100 180 122 166" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',p="",d=!1):o==="party"?c=[[64,236],[86,228],[108,234],[130,242],[76,254],[100,250],[122,258],[92,188]].map(([b,_])=>hp(b,_)).join("")+`<path d="M100 214 l-10 -6 v12 z M100 214 l10 -6 v12 z" fill="var(--top-trim)" ${D(1.8)}/><path d="M52 262 Q100 276 148 262" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="1 5" opacity=".85"/>`:o==="pinafore"?(l="M80 176 H120 L122 214 H78 Z",c='<path d="M86 158 L80 178 M114 158 L120 178" stroke="var(--top)" stroke-width="5" stroke-linecap="round"/>',p="",d=!1,r="M74 212 H126 L142 264 Q100 274 58 264 Z"):o==="jumper"?(c=`<path d="M84 160 Q100 174 116 160" fill="var(--top-trim)" ${D(2)}/>`,p=Vt(m=>la(m,e,!0),e),d=!1):o==="ballet"?(r="M78 214 H122 L132 250 Q100 258 68 250 Z",c=`<path d="M70 248 ${_r(70,130,248,5,5)}" fill="none" stroke="#fff" stroke-width="2"/>`,p=Vt(Ql,e)):o==="nightgown"?(r="M80 214 H120 L132 270 Q100 278 68 270 Z",c='<path d="M88 164 Q100 176 112 164" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>',p=Vt(no,e),d=!1):o==="raindress"?(r="M70 212 H130 L148 268 Q100 280 52 268 Z",c='<path d="M76 168 Q100 186 124 168" fill="none" stroke="var(--top-trim)" stroke-width="5"/><circle cx="100" cy="198" r="3.4" fill="var(--top-trim)"/>',p=Vt(no,e),d=!1):(r="M70 214 H130 L152 266 Q100 280 48 266 Z",l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L131 216 H69 Z",c=[[66,236],[86,228],[110,232],[132,240],[76,254],[100,248],[124,258],[56,260],[144,262],[96,266],[84,182],[114,190],[100,200]].map(([b,_])=>hp(b,_)).join("")+`<path d="M112 214 H130 L152 266 Q138 271 128 272 Z" ${rt}/><path d="M118 162 L130 168 L131 216 H120 Z" ${rt}/><path d="M50 262 Q100 276 150 262" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round" opacity=".9"/><path d="M60 226 Q56 244 54 258" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".3"/><path d="M68 210 H132 V220 H68 Z" fill="var(--top-trim)" ${D(2.6)}/><path d="M100 215 l-13 -8 v16 z M100 215 l13 -8 v16 z" fill="var(--top-trim)" ${D(2.2)}/><circle cx="100" cy="215" r="3.6" fill="var(--top-trim)" ${D(2)}/><path d="M97 218 l-5 14 M103 218 l5 14" stroke="var(--top-trim)" stroke-width="3" stroke-linecap="round"/><path d="M80 158 Q78 172 94 170 Q99 166 100 162 Q101 166 106 170 Q122 172 120 158 Q100 164 80 158 Z" fill="#fff" ${D(2.4)}/>`),Dc(e)&&(r="M68 214 H132 L150 250 Q100 262 50 250 Z");const g=`${r} ${l}`,h=`<path class="skirt" d="${r}" fill="var(--top)" ${D(3)}/><path d="${l}" fill="var(--top)" ${D(3)}/><g clip-path="url(#${a})">${Ds(g,n,s,["M80 226 Q74 248 70 266","M120 226 Q126 248 130 266"])}${c}</g>`;return`<g class="shirt" data-hem="${i}"><defs><clipPath id="${a}"><path d="${g}"/></clipPath></defs>${d?h+p:p+h}</g>`}function Y5(e,t,n,s){const i=e==="l"?`<g transform="translate(${2*s} 0) scale(-1 1)">${n}</g>`:n;return $s("leg",e,i,t)}function K5(e,t){const n=t.shoes;let s="";for(const i of["l","r"]){const o=i==="l"?87:113;let a="";if(n==="sneakers"||n==="lightup"){const r=n==="lightup"?`<circle cx="${o-4}" cy="292" r="2.2" fill="#ff8fab"/><circle cx="${o+4}" cy="296" r="2.2" fill="#8ecae6"/><circle cx="${o}" cy="300" r="2" fill="#ffd166"/>`:"";a=`<path d="M${o} 270 V286" fill="none" stroke="var(--sock)" stroke-width="16" stroke-linecap="round"/><path d="M${o-14} 296 Q${o-14} 284 ${o} 284 Q${o+14} 284 ${o+16} 296 Q${o+22} 298 ${o+22} 304 Q${o+22} 310 ${o+12} 310 H${o-14} Q${o-18} 310 ${o-16} 302 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${o-12} 304 H${o+18}" stroke="var(--shoe-trim)" stroke-width="3.5" stroke-linecap="round"/><path d="M${o-6} 290 l5 2 M${o-6} 295 l6 2" stroke="${wi}" stroke-width="1.8" stroke-linecap="round"/>${r}`}else if(n==="boots"||n==="rainboots"){const r=n==="rainboots"?248:258,l=n==="boots"?[[-6,272],[5,268],[-2,284],[7,290],[-8,294]].map(([c,p])=>`<circle cx="${o+c}" cy="${p}" r="2.6" fill="#fff" opacity=".9"/>`).join(""):"";a=`<path d="M${o-14} ${r} H${o+14} V296 Q${o+22} 298 ${o+22} 304 Q${o+22} 310 ${o+10} 310 H${o-14} Q${o-18} 310 ${o-16} 302 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${o-16} ${r-4} H${o+16} V${r+8} H${o-16} Z" fill="var(--shoe)" ${D(2.6)}/>`+l+(n==="rainboots"?`<path d="M${o-12} ${r+16} H${o+12}" stroke="var(--shoe-trim)" stroke-width="4" stroke-linecap="round"/>`:`<path d="M${o-6} ${r+14} V292" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".45"/>`)}else n==="maryjanes"?a=`<path d="M${o} 266 V290" fill="none" stroke="var(--sock)" stroke-width="15" stroke-linecap="round"/><path d="M${o-12} 274 ${_r(o-12,o+12,274,4,4)} L${o+12} 268 H${o-12} Z" fill="var(--sock)" ${D(2)}/><path d="M${o-13} 298 Q${o-13} 290 ${o} 290 Q${o+13} 290 ${o+14} 298 Q${o+20} 300 ${o+20} 304 Q${o+20} 309 ${o+8} 309 H${o-12} Q${o-16} 309 ${o-14} 302 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${o-10} 294 H${o+12}" stroke="${wi}" stroke-width="2"/><circle cx="${o+8}" cy="294" r="2.2" fill="var(--acc)"/>`:n==="sandals"?a=`<path d="M${o-12} 298 Q${o-12} 286 ${o} 286 Q${o+12} 286 ${o+14} 296 Q${o+18} 298 ${o+18} 302 Q${o+18} 306 ${o+8} 306 H${o-12} Q${o-16} 306 ${o-14} 300 Z" fill="var(--skin)" ${D(2.4)}/><path d="M${o-14} 304 H${o+18}" stroke="var(--shoe)" stroke-width="5" stroke-linecap="round"/><path d="M${o-8} 292 H${o+10} M${o+2} 300 L${o+8} 290" stroke="var(--shoe)" stroke-width="4" stroke-linecap="round"/><circle cx="${o+2}" cy="293" r="3" fill="var(--shoe-trim)" ${D(1.4)}/>`:n==="slippers"?a=`<path d="M${o-14} 292 Q${o-14} 280 ${o} 278 Q${o+16} 280 ${o+18} 294 Q${o+22} 296 ${o+20} 304 H${o-14} Q${o-18} 304 ${o-16} 296 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${o-6} 286 q6 -4 12 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>`:a=`<ellipse cx="${o+2}" cy="304" rx="16" ry="7" fill="var(--shoe)" ${D(2.6)}/>`;s+=Y5(i,e,a,o)}return`<g data-layer="shoes">${s}</g>`}const og=new Set(["cap","beanie","sunhat"]),X5=new Set(["catears","earmuffs"]);function ag(e){return e==="afro"?28:e==="topbun"?20:e==="puffs"||e==="coily"?16:e==="buns"||e==="curlybob"?12:e==="long"||e==="wavy"||e==="wavybob"?8:0}function Ai(e,t,n){if(!og.has(t)&&!X5.has(t))return n;const s=ag(e);return s?`<g data-hat="${t}" transform="translate(0 ${$(-s)})">${n}</g>`:n}function J5(e,t,n){let s="";for(let l=0;l<n.length;l++)og.has(n[l])&&(s=n[l]);if(!s)return"";const i=ag(t),o=(s==="beanie"?58:s==="cap"?64:62)-i,a=Math.min(70,o),r=t==="afro"||t==="puffs"||t==="coily"?92:78;return`<mask id="${e}hm" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" data-brim="${$(a)}"><rect x="-30" y="-50" width="260" height="420" fill="#fff"/><rect x="${$(100-r)}" y="-50" width="${$(r*2)}" height="${$(a+50)}" fill="#000"/></mask>`}function nl(e,t,n){return`<g transform="translate(${e} ${t}) scale(${n})"><path d="M0 0 C-8 -14 -30 -14 -28 0 C-30 14 -8 14 0 0 Z" fill="var(--acc)" ${D(2.6)}/><path d="M0 0 C8 -14 30 -14 28 0 C30 14 8 14 0 0 Z" fill="var(--acc)" ${D(2.6)}/><rect x="-6" y="-7" width="12" height="14" rx="4" fill="var(--acc2)" ${D(2.2)}/></g>`}function ex(e){return`<g data-layer="accessory">${e.acc.map(n=>n==="glasses"?'<circle cx="76" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="124" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="76" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><circle cx="124" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3.2"/><path d="M58 108 L42 104 M142 108 L158 104" stroke="var(--frame)" stroke-width="3.2" stroke-linecap="round"/>':n==="square"?'<rect x="58" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><rect x="108" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><path d="M92 112 H108" stroke="var(--frame)" stroke-width="3.2"/>':n==="sunnies"?'<path d="M56 104 H94 Q96 122 76 122 Q56 122 56 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M106 104 H144 Q146 122 124 122 Q104 122 106 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3"/>':n==="bow"?nl(100,78,.7):n==="bigbow"?nl(100,70,1.15):n==="headband"?`<path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="${wi}" stroke-width="12" stroke-linecap="round"/><path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round"/>${nl(100,32,.85)}`:n==="flower"?`<g transform="translate(138 78)">${[0,60,120,180,240,300].map(s=>`<ellipse cx="0" cy="-8" rx="5" ry="8" fill="var(--acc)" ${D(1.6)} transform="rotate(${s})"/>`).join("")}<circle r="4.5" fill="var(--acc2)" ${D(1.6)}/></g>`:n==="cap"?Ai(e.hair,"cap",`<path d="M54 64 Q56 20 100 16 Q144 20 146 64 Q128 54 100 56 Q72 54 54 64 Z" fill="var(--acc)" ${D(3)}/><path d="M48 56 Q100 66 152 56 L156 62 Q100 70 44 62 Z" fill="var(--acc)" ${D(3)}/><circle cx="100" cy="18" r="4.5" fill="#fff" ${D(2)}/>`):n==="beanie"?Ai(e.hair,"beanie",`<path d="M50 66 Q48 14 100 8 Q152 14 150 66 Q128 56 100 58 Q72 56 50 66 Z" fill="var(--acc)" ${D(3)}/><path d="M50 58 H150" stroke="var(--acc2)" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="8" r="7" fill="var(--acc2)" ${D(2.4)}/>`):n==="sunhat"?Ai(e.hair,"sunhat",`<path d="M66 56 Q68 22 100 18 Q132 22 134 56 Q118 48 100 50 Q82 48 66 56 Z" fill="var(--acc)" ${D(3)}/><path d="M18 56 Q100 68 182 56 Q170 64 100 66 Q30 64 18 56 Z" fill="var(--acc)" ${D(3)}/><path d="M72 46 Q100 38 128 46" fill="none" stroke="var(--acc2)" stroke-width="4"/>`):n==="catears"?Ai(e.hair,"catears",`<path d="M58 62 L70 18 L86 60 Z" fill="var(--acc)" ${D(2.6)}/><path d="M114 60 L130 18 L142 62 Z" fill="var(--acc)" ${D(2.6)}/><path d="M64 54 L72 30 L80 52 Z" fill="var(--acc2)"/><path d="M120 52 L128 30 L136 54 Z" fill="var(--acc2)"/>`):n==="earmuffs"?Ai(e.hair,"earmuffs",`<path d="M44 68 Q48 26 100 22 Q152 26 156 68" fill="none" stroke="var(--acc)" stroke-width="6"/><circle cx="34" cy="86" r="14" fill="var(--acc)" ${D(2.8)}/><circle cx="166" cy="86" r="14" fill="var(--acc)" ${D(2.8)}/><circle cx="34" cy="86" r="6" fill="var(--acc2)"/><circle cx="166" cy="86" r="6" fill="var(--acc2)"/>`):"").join("")}</g>`}const tx=[{hip:1.5,head:4,armL:3,armR:-2,legL:0,legR:-3,legLLift:0,legRLift:0},{hip:-2,head:-5,armL:1,armR:-7,legL:4,legR:0,legLLift:2,legRLift:0},{hip:0,head:3,armL:2,armR:-2,legL:0,legR:0,legLLift:0,legRLift:0},{hip:-1.5,head:-4,armL:4,armR:-1,legL:5,legR:0,legLLift:3,legRLift:0}],nx={puffs:0,afro:0,pony:1,sidepony:1,pigtails:1,halfup:1,braids:2,boxbraids:2,locs:2,sidebraid:2,crown:2,buns:3,topbun:3,lowbun:3};function Hc(e){const t=e.hair||"buns";let n=nx[t];if(n===void 0){let s=0;for(let i=0;i<t.length;i++)s=(s+t.charCodeAt(i))%4;n=s}return tx[n]}function sx(e){const t=(n,s,i,o,a)=>{const r=Ol(n,s,i,o,a),l=Ol(r.x,r.y,100,238,e.hip);return{x:l.x/2,y:l.y/2}};return{left:t(_s.l[0],_s.l[1],pn.l[0],pn.l[1],e.armL),right:t(_s.r[0],_s.r[1],pn.r[0],pn.r[1],e.armR)}}function ix(e){const t=Ol(100,244,100,238,e.hip);return Math.round(t.y/2*10)/10}function Oc(e){const t=parseInt(e.slice(1),16);return(t>>16&255)+(t>>8&255)+(t&255)}function ox(e){const t=to(e,.32);return Oc(t)<80?"#5a3a2c":t}function ax(e){return Oc(e)<140?"#3b2340":to(e,.12)}let up=0;function rx(){return up+=1,"a"+up.toString(36)}function vs(e,t){return t.hip?`<g transform="rotate(${$(t.hip)} 100 238)">${e}</g>`:e}function Di(e,t,n=!1){const s=t.head?`<g transform="rotate(${$(t.head)} 100 158)">${e}</g>`:e;return vs(`<g${n?' class="dollhead" data-dollhead="1"':' class="dollhead"'}>${s}</g>`,t)}function lx(e,t,n){let s=`<defs><radialGradient id="${e}b"><stop offset="0" style="stop-color:var(--blush)" stop-opacity=".62"/><stop offset=".55" style="stop-color:var(--blush)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--blush)" stop-opacity="0"/></radialGradient>`;return s+=`<radialGradient id="${e}s"><stop offset="0" stop-color="#3a1d3c" stop-opacity=".3"/><stop offset=".6" stop-color="#3a1d3c" stop-opacity=".12"/><stop offset="1" stop-color="#3a1d3c" stop-opacity="0"/></radialGradient>`,s+=`<radialGradient id="${e}k" cx=".42" cy=".36" r=".75"><stop offset=".55" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".16"/></radialGradient>`,t&&(s+=`<linearGradient id="${e}i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f1020" stop-opacity=".62"/><stop offset=".5" stop-color="#1f1020" stop-opacity=".05"/><stop offset=".62" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient>`,s+=`<linearGradient id="${e}c" gradientUnits="userSpaceOnUse" x1="58" y1="0" x2="146" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".26"/><stop offset=".32" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".2"/></linearGradient>`,s+=`<radialGradient id="${e}h" cx=".38" cy=".28" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".14"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1f1020" stop-opacity=".28"/></radialGradient>`),s+n+"</defs>"}function mp(e){const t=e==="l"?-1:1,n=pn[e][0],s=pn[e][1],i=_s[e][0],o=_s[e][1],a=i-t,r=o-7,l=-t;let c=`<path d="${Wl([n,s],[a,r],18,13,-3*t)}" fill="var(--skin)" ${D(3)}/>`;return c+=`<path class="hand" d="M${$(i-8)} ${$(o-4)} Q${$(i-8)} ${$(o-10)} ${$(i)} ${$(o-10)} Q${$(i+8)} ${$(o-10)} ${$(i+8)} ${$(o-3)} Q${$(i+8.5)} ${$(o+9)} ${$(i)} ${$(o+9.5)} Q${$(i-8.5)} ${$(o+9)} ${$(i-8)} ${$(o-4)} Z" fill="var(--skin)" ${D(2.8)}/>`,c+=`<ellipse cx="${$(i+7*l)}" cy="${$(o-1)}" rx="3.4" ry="5" fill="var(--skin)" ${D(2.4)} transform="rotate(${-20*l} ${$(i+7*l)} ${$(o-1)})"/>`,c+=`<path d="M${$(i-3*l)} ${$(o+3)} v4 M${$(i+.5*l)} ${$(o+3.5)} v4" stroke="var(--line)" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>`,c+=`<ellipse cx="${$(i-3*l)}" cy="${$(o-5)}" rx="3" ry="1.8" fill="#fff" opacity=".35"/>`,c}function yp(e){const t=e==="l"?-1:1,n=e==="l"?88:112;let s=`<path d="${Wl([n,234],[n+t,294],21,15,1.5*t)}" fill="var(--skin)" ${D(3)}/>`;return s+=`<path d="${Wl([n+5*t,244],[n+5*t,290],6,4)}" ${rt}/>`,s+=`<ellipse cx="${$(n+.5*t)}" cy="268" rx="4.5" ry="2.6" fill="#3a1d3c" opacity=".12"/>`,s+=`<path d="M${n-4} 265 q4 -2.5 8 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".35"/>`,s}function wp(e,t,n,s,i,o){const a=n?-1:1,r=i==="big"||i==="bright"?1.08:i==="soft"?.94:1,l=(y,u)=>`${$(e+y*r)} ${$(t+u*r)}`,c=13.5*r,p=17*r;let d="";if(o&&i!=="soft"){const y=[.35,.95,1.57,2.2,2.8];for(let u=0;u<y.length;u++){const k=y[u];d+=`<path d="M${$(e+5.5*Math.cos(k)*r)} ${$(t+(4+6.5*Math.sin(k))*r)} L${$(e+11.5*Math.cos(k)*r)} ${$(t+(2+14*Math.sin(k))*r)}" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity=".28"/>`}}const g=i==="soft"?2:2.6,h=i==="soft"?"":`<path d="M${l(-16*a,-8)} q${$(-6*a*r)} -2 ${$(-9*a*r)} ${$(-9*r)} M${l(-17*a,-2)} q${$(-6*a*r)} ${$(-.5*r)} ${$(-10*a*r)} ${$(-5*r)} M${l(-12*a,-15)} q${$(-3*a*r)} ${$(-4*r)} ${$(-4*a*r)} ${$(-9*r)}" fill="none" stroke="var(--lash)" stroke-width="2.2" stroke-linecap="round"/>`,m=i==="sparkle"||i==="bright"?`<path d="M${l(-9*a,-8)} l.7 1.6 1.6 .7 -1.6 .7 -.7 1.6 -.7 -1.6 -1.6 -.7 1.6 -.7 Z" fill="#fff" opacity=".9"/>`:"",b=o?`<ellipse cx="${e}" cy="${$(t+r)}" rx="${$(c)}" ry="${$(p)}" fill="url(#${s}i)"/>`:"",_=i==="sleepy"?`<path d="M${l(-17,-4)} Q${e} ${$(t+r)} ${l(17,-4)} L${l(18,-16)} Q${e} ${$(t-20*r)} ${l(-18,-16)} Z" fill="var(--skin)"/>`:"";return`<path d="M${l(-16,-2)} Q${l(-16,-20)} ${l(0,-20)} Q${l(16,-20)} ${l(16,-2)} Q${l(16,19)} ${l(0,19)} Q${l(-16,19)} ${l(-16,-2)} Z" fill="#fff"/><path d="M${l(-15,-4)} Q${e} ${$(t-21*r)} ${l(15,-4)} Q${e} ${$(t-14*r)} ${l(-15,-4)} Z" fill="#3a1d3c" opacity=".12"/><ellipse data-iris="1" cx="${e}" cy="${$(t+r)}" rx="${$(c)}" ry="${$(p)}" fill="var(--eye)"/>${b}${d}<ellipse cx="${e}" cy="${$(t+3*r)}" rx="${$(7*r)}" ry="${$(9*r)}" fill="#1f1020" opacity=".8"/><ellipse cx="${e}" cy="${$(t+r)}" rx="${$(11.3*r)}" ry="${$(14.8*r)}" fill="none" stroke="#fff" stroke-width="1" opacity=".22"/><ellipse cx="${e}" cy="${$(t+r)}" rx="${$(c)}" ry="${$(p)}" fill="none" stroke="#1f1020" stroke-width="2" opacity=".55"/><path d="M${l(-9,12)} Q${e} ${$(t+19.5*r)} ${l(9,12)} Q${e} ${$(t+15.5*r)} ${l(-9,12)} Z" fill="#fff" opacity=".5"/><ellipse cx="${$(e-6*a*r)}" cy="${$(t-6*r)}" rx="${$(5.8*r)}" ry="${$(6.8*r)}" fill="#fff" transform="rotate(${-15*a} ${$(e-6*a*r)} ${$(t-6*r)})"/><circle cx="${$(e+6*a*r)}" cy="${$(t+8*r)}" r="${$(2.8*r)}" fill="#fff"/><circle cx="${$(e-4*a*r)}" cy="${$(t+10*r)}" r="${$(1.3*r)}" fill="#fff" opacity=".85"/><path d="M${l(7*a,-10)} l${$(r)} ${$(2.4*r)} ${$(2.4*r)} ${$(r)} ${$(-2.4*r)} ${$(r)} ${$(-r)} ${$(2.4*r)} ${$(-r)} ${$(-2.4*r)} ${$(-2.4*r)} ${$(-r)} ${$(2.4*r)} ${$(-r)} Z" fill="#fff"/>`+m+_+`<path d="M${l(-17,-1)} Q${l(-16,-21)} ${l(0,-21)} Q${l(16,-21)} ${l(17,-3)} Q${l(14.5,-18.6)} ${l(0,-18.8)} Q${l(-14.5,-18.6)} ${l(-15.5,-1)} Z" fill="var(--lash)" stroke="var(--lash)" stroke-width="${g}" stroke-linejoin="round"/>`+h+`<path d="M${l(-11,-23)} Q${e} ${$(t-27*r)} ${l(11,-23)}" fill="none" stroke="var(--line)" stroke-width="1.3" stroke-linecap="round" opacity=".22"/><path d="M${l(-5,20.5)} Q${e} ${$(t+22*r)} ${l(5,20.5)}" fill="none" stroke="var(--lash)" stroke-width="1.3" stroke-linecap="round" opacity=".28"/>`}function cx(e,t,n,s=!1){const i=e.blush?`<ellipse cx="64" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><ellipse cx="136" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><path d="M60 133 l3 -3 M66 134 l3 -3 M132 133 l3 -3 M138 134 l3 -3" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>`:"";let o="";if(e.freckles){const a=[[58,132],[64,136],[70,131],[130,131],[136,136],[142,132]];for(let r=0;r<a.length;r++)o+=`<circle cx="${a[r][0]}" cy="${a[r][1]}" r="1.5" fill="var(--freckle)" opacity=".7"/>`}return i+o+'<path data-brow="l" d="M64 86 Q74 80 85 84" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/><path data-brow="r" d="M115 84 Q126 80 136 86" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/>'+wp(76,112,!1,t,s?"sleepy":e.eyes,n)+wp(124,112,!0,t,s?"sleepy":e.eyes,n)+'<path d="M98 131 q2 1.8 4 0" fill="none" stroke="var(--line)" stroke-width="2" stroke-linecap="round" opacity=".55"/><ellipse cx="101.5" cy="128.5" rx="1.6" ry="1" fill="#fff" opacity=".6"/><path d="M92 140 Q100 147.5 108 140" fill="none" stroke="var(--line)" stroke-width="2.8" stroke-linecap="round"/><path d="M96 142.6 Q100 145.4 104 142.6 Q100 144 96 142.6 Z" fill="#ff8fa8"/>'}function dx(e){const t="M40 102 Q38 38 100 38 Q162 38 160 102 Q160 140 132 153 Q116 160 100 160 Q84 160 68 153 Q40 140 40 102 Z";return`<ellipse cx="39" cy="114" rx="9" ry="11" fill="var(--skin)" ${D(3)}/><ellipse cx="161" cy="114" rx="9" ry="11" fill="var(--skin)" ${D(3)}/><ellipse cx="40" cy="115" rx="4" ry="6" ${Hl}/><ellipse cx="160" cy="115" rx="4" ry="6" ${Hl}/><path d="${t}" fill="var(--skin)" ${D(3.2)}/><path d="${t}" fill="url(#${e}k)"/>`}function px(){return`<path d="M91 146 h18 v22 q-9 5 -18 0 Z" fill="var(--skin)" ${D(3)}/><path d="M91 150 h18 v9 q-9 6 -18 0 Z" ${Hl}/><path d="M70 168 Q74 160 92 160 H108 Q126 160 130 168 L134 236 Q100 244 66 236 Z" fill="var(--skin)" ${D(3)}/>`}function fx(e,t){const n=Zs(e),s=t?.pose??Hc(n),i=t?.rich!==!1,o=t?.uid??rx(),a=ix(s),r=n.shoesC,l=r.toLowerCase()==="#ffffff"?n.dress?n.dressC:n.topC:dp(r,.28),c=n.dress?n.dressC:n.topC,p=Oc(c)>700?"#8fdcc0":to(c,.18),d=["--line:#5a3d5c",`--skin:${n.skin}`,`--hair:${n.hairC}`,`--hair-shade:${ox(n.hairC)}`,`--brow:${ax(n.hairC)}`,`--eye:${n.eyeC}`,"--lash:#3b2340","--blush:#ff6f91",`--freckle:${to(n.skin,.35)}`,`--top:${c}`,`--top-trim:${p}`,`--bottom:${n.dress?n.dressC:n.bottomC}`,`--bottom-trim:${to(n.dress?n.dressC:n.bottomC,.16)}`,`--shoe:${r}`,`--shoe-trim:${l}`,"--sock:#ffffff",`--acc:${n.accC}`,`--acc2:${dp(n.accC,.18)}`,"--frame:#6e4a5e"].join(";"),g=$s("leg","l",yp("l"),s)+$s("leg","r",yp("r"),s),h=$s("arm","l",`<g class="hand">${mp("l")}</g>`,s)+$s("arm","r",`<g class="hand">${mp("r")}</g>`,s),m=`<g data-layer="body">${g}${vs(px()+h,s)}${Di(dx(o),s,!0)}</g>`,b=n.dress?G5(s,n,o,i,a):N5(s,n,o,i,a),_=`<g class="shadow"><ellipse cx="100" cy="308" rx="52" ry="9" fill="url(#${o}s)"/><ellipse cx="87" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/><ellipse cx="113" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/></g>`,y=J5(o,n.hair,n.acc),u=y?` mask="url(#${o}hm)"`:"",k=[`<g data-layer="hair-back">${Di(`<g${u}>${q5(n.hair,o,i)}</g>`,s)}</g>`,m,K5(s,n),vs(F5(s,n,o,i),s),vs(b,s),vs(j5(s,n,o,i),s),`<g data-layer="face">${Di(cx(n,o,i,t?.poseName==="lie"),s)}</g>`,`<g data-layer="hair-front">${Di(`<g${u}>${Z5(n.hair,o,i)}</g>`,s)}</g>`,Di(ex(n),s)],x=t?.poseName==="sit"||t?.poseName==="lie"?t.poseName:null;t?.holding&&k.splice(6,0,vs(Eo("under",!0,n.skin,x,c),s));const R=k.join(""),H=n.dress||n.top;return`<svg${t?.poseName?` data-pose="${t.poseName}"`:""} data-chibi="1" data-hair="${n.hair}" data-top="${H}" viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="${d}">${lx(o,i,y)}${_}${R}</svg>`}function gx(e,t){const n=Zs(e),s=vr(t)??Hc(n),i=t==="sit"||t==="lie"?t:null,o=n.dress?n.dressC:n.topC;return`<svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">${vs(Eo("over",!0,n.skin,i,o),s)}</svg>`}function Wc(){try{return typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(&)")}catch{return!1}}function So(e,t,n){const s=!!(t&&t.look2);e.classList.toggle("chibi",s);const i=s&&Wc();e.classList.toggle("chibi-move",s&&(i||n)),e.classList.toggle("chibi-bob",s&&!i&&!n)}const tt="#5a3d5c",ye=`stroke="${tt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,hx=["little","kid","adult"],Is={little:.78,kid:1,adult:1.28},Zi={left:{x:15,y:113},right:{x:85,y:113}};function $r(e,t){return e.look2?sx(t??Hc(e.look2)):t?{left:{x:22,y:96},right:{x:78,y:96}}:Zi}function rg(e,t){return e===1?`<path d="M62 16 L76 8 L76 26 Z M62 16 L50 6 L48 24 Z" fill="#ff7aa8" stroke="${tt}" stroke-width="3" stroke-linejoin="round"/><circle cx="62" cy="16" r="5" fill="#ffd166" stroke="${tt}" stroke-width="3"/>`:e===2?`<circle cx="40" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${tt}" stroke-width="3"/><circle cx="60" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${tt}" stroke-width="3"/><path d="M49 48 h2" stroke="${tt}" stroke-width="3"/>`:e===3?`<path d="M20 30 Q22 8 50 8 Q78 8 80 30 Z" fill="${t}" stroke="${tt}" stroke-width="3.5" stroke-linejoin="round"/><path d="M60 28 Q84 26 92 32 Q80 36 60 34 Z" fill="${t}" stroke="${tt}" stroke-width="3.5" stroke-linejoin="round"/><circle cx="50" cy="9" r="4" fill="#fff" stroke="${tt}" stroke-width="3"/>`:""}function Ia(e,t,n){return n?e===1?`<path d="M20 40 Q16 86 30 92 L70 92 Q84 86 80 40 Z" fill="${t}" ${ye}/>`:e===2?`<circle cx="18" cy="34" r="12" fill="${t}" ${ye}/><circle cx="82" cy="34" r="12" fill="${t}" ${ye}/>`:e===3?`<circle cx="50" cy="8" r="13" fill="${t}" ${ye}/>`:"":e===3?`<path d="M22 42 Q20 14 50 12 Q80 14 78 42 Q66 26 50 30 Q34 26 22 42 Z" fill="${t}" ${ye}/>`:`<path d="M21 46 Q18 12 50 12 Q82 12 79 46 Q72 30 58 28 Q50 36 36 30 Q26 34 21 46 Z" fill="${t}" ${ye}/>`}function wt(e,t,n){const s=vr(t);return e.look2?fx(e.look2,{rich:Wc(),pose:s??void 0,poseName:t||void 0,holding:n}):t==="sit"||t==="lie"?ux(e,t,n):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
  <ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${Ia(e.hairStyle,e.hair,!0)}
  <rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${tt}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${tt}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(12 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(-12 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${ye}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${ye}/>
  <circle cx="50" cy="44" r="30" fill="${e.skin}" ${ye}/>
  ${Ia(e.hairStyle,e.hair,!1)}
  <ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${tt}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${tt}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${ye} fill="none"/>
  ${rg(e.acc??0,e.shirt)}
  <circle class="hand hang" cx="${Zi.left.x}" cy="${Zi.left.y}" r="6" fill="${e.skin}" ${ye}/><circle class="hand hang" cx="${Zi.right.x}" cy="${Zi.right.y}" r="6" fill="${e.skin}" ${ye}/>
  ${n?Eo("under",!1,br(e.skin),null):""}
</svg>`}function lg(e,t){const n=t==="sit"||t==="lie"?t:null;return n==="lie"?"":e.look2?gx(e.look2,t):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${Eo("over",!1,br(e.skin),n)}</svg>`}function ux(e,t,n){const s=t==="sit"?`<rect class="leg" x="34" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${ye} transform="rotate(-68 40 112)"/>
  <rect class="leg" x="53" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${ye} transform="rotate(68 60 112)"/>`:`<rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>`,i=t==="lie"?`<path d="M34 48 Q40 52 46 48" fill="none" ${ye}/><path d="M54 48 Q60 52 66 48" fill="none" ${ye}/>`:`<ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${tt}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${tt}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>`,o=`<ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${Ia(e.hairStyle,e.hair,!0)}
  ${s}
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${tt}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${tt}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(28 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(-28 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${ye}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${ye}/>
  <g class="dollhead">
  <circle class="dollhead" data-dollhead="1" cx="50" cy="44" r="30" fill="${e.skin}" ${ye}/>
  ${Ia(e.hairStyle,e.hair,!1)}
  ${i}
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${ye} fill="none"/>
  ${rg(e.acc??0,e.shirt)}
  </g>
  <circle class="hand hang" cx="22" cy="96" r="6" fill="${e.skin}" ${ye}/><circle class="hand hang" cx="78" cy="96" r="6" fill="${e.skin}" ${ye}/>
  ${n?Eo("under",!1,br(e.skin),t):""}`;return`<svg data-pose="${t}" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${o}</svg>`}const mx=[{id:"hair",name:"Hair"},{id:"face",name:"Face"},{id:"clothes",name:"Clothes"},{id:"shoes",name:"Shoes"},{id:"extras",name:"Extras"}],yx={short:"Short",pixie:"Pixie",coily:"Coily",afro:"Afro",bangs:"Bangs",bob:"Bob",wavybob:"Wavy bob",curlybob:"Curly bob",sidebangs:"Side bangs",long:"Long",wavy:"Wavy",braids:"Braids",boxbraids:"Box braids",locs:"Locs",sidebraid:"Side braid",crown:"Crown",pony:"Ponytail",sidepony:"Side pony",pigtails:"Pigtails",halfup:"Half-up",buns:"Buns",puffs:"Puffs",topbun:"Top bun",lowbun:"Low bun"},wx={classic:"Tee",stripes:"Stripes",hoodie:"Hoodie",sweater:"Sweater",tank:"Tank",puff:"Puff",ruffle:"Ruffle",button:"Buttons",jersey:"Jersey",cardigan:"Cardigan",bib:"Bib",raincoat:"Raincoat"},bx={pants:"Pants",jeans:"Jeans",shorts:"Shorts",skirt:"Skirt",tutu:"Tutu",leggings:"Leggings",overalls:"Overalls",joggers:"Joggers"},vx={"":"No dress",twirl:"Twirl",sundress:"Sundress",party:"Party",pinafore:"Pinafore",jumper:"Jumper",ballet:"Ballet",nightgown:"Nightgown",raindress:"Rain"},kx={classic:"Classic",sneakers:"Sneakers",lightup:"Light-up",boots:"Boots",rainboots:"Rain boots",sandals:"Sandals",maryjanes:"Mary Janes",slippers:"Slippers"},_x={round:"Round",big:"Big",sleepy:"Sleepy",sparkle:"Sparkle",soft:"Soft",bright:"Bright"},$x={glasses:"Glasses",square:"Square",sunnies:"Sunnies",bow:"Bow",bigbow:"Big bow",headband:"Headband",flower:"Flower",cap:"Cap",beanie:"Beanie",sunhat:"Sun hat",catears:"Cat ears",earmuffs:"Earmuffs"},xx={little:"Little",kid:"Kid",adult:"Grown-up"};let ni="hair";function vn(e,t,n,s){return`<button type="button" class="avOpt${s?" on":""}" data-act="${e}" data-v="${t}">${n}</button>`}function ca(e,t,n){return`<button type="button" class="avSw${n?" on":""}" style="background:${t}" data-act="${e}" data-v="${t}" aria-label="Color"></button>`}function ms(e){return`<div class="avGrid">${e}</div>`}function Ii(e,t){return`<div class="avColors">${zt.map(n=>ca(e,n,n===t)).join("")}</div>`}function Mx(e,t,n,s){const i=Zs(e.look2),o=e.id==="__me",a=ni==="hair"?`<h3>Style</h3>${ms(ir.map(c=>vn("av-hair",c,yx[c],i.hair===c)).join(""))}<h3>Color</h3><div class="avColors">${sr.map(c=>ca("av-hairC",c,i.hairC===c)).join("")}</div>`:ni==="face"?`<h3>Skin</h3><div class="avColors">${nr.map(c=>ca("av-skin",c,i.skin===c)).join("")}</div><h3>Eyes</h3>${ms(cr.map(c=>vn("av-eyes",c,_x[c],i.eyes===c)).join(""))}<h3>Eye color</h3><div class="avColors">${gc.map(c=>ca("av-eyeC",c,i.eyeC===c)).join("")}</div><div class="avToggles">${vn("av-freckles",i.freckles?"0":"1","Freckles",i.freckles)}${vn("av-blush",i.blush?"0":"1","Blush",i.blush)}</div>`:ni==="clothes"?`<h3>Top</h3>${ms(or.map(c=>vn("av-top",c,wx[c],!i.dress&&i.top===c)).join(""))}${Ii("av-topC",i.topC)}<h3>Bottom</h3>${ms(ar.map(c=>vn("av-bottom",c,bx[c],!i.dress&&i.bottom===c)).join(""))}${Ii("av-bottomC",i.bottomC)}<h3>Dress</h3>${ms(rr.map(c=>vn("av-dress",c,vx[c],i.dress===c)).join(""))}${Ii("av-dressC",i.dressC)}`:ni==="shoes"?`<h3>Shoes</h3>${ms(lr.map(c=>vn("av-shoes",c,kx[c],i.shoes===c)).join(""))}${Ii("av-shoesC",i.shoesC)}`:`<h3>Extras</h3><p class="avHint">Pick up to two</p>${ms(li.map(c=>vn("av-acc",c,$x[c],i.acc.indexOf(c)>=0)).join(""))}${Ii("av-accC",i.accC)}`,r=hx.map(c=>`<button type="button" class="avOpt sz${c===e.size?" on":""}" data-act="size" data-v="${c}">${xx[c]}</button>`).join(""),l=o?'<div class="meNote">This is you!</div>':`<button type="button" class="del${n?" sure":""}" data-act="delc">${s}<span>${n?"Tap again":""}</span></button>`;return`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${t}<div class="dress avLook"><div class="avStageWrap"><div class="avStage chibi-move">${wt(e)}</div>${l}<div class="avSizes">${r}</div></div><div class="avSide"><div class="avTabs">${mx.map(c=>`<button type="button" class="avTab${c.id===ni?" on":""}" data-act="av-tab" data-v="${c.id}">${c.name}</button>`).join("")}</div><div class="avPane">${a}</div><div class="avBar"><button type="button" class="avSurprise" data-act="av-surprise">🎲 Surprise me</button><button type="button" class="avDone" data-act="close">Done</button></div></div></div>`}function Lx(e,t,n){if(t==="av-tab")return(n==="hair"||n==="face"||n==="clothes"||n==="shoes"||n==="extras")&&(ni=n),null;const s=Zs(e);if(t==="av-hair"&&ir.indexOf(n)>=0)return{...s,hair:n};if(t==="av-hairC")return{...s,hairC:n};if(t==="av-skin")return{...s,skin:n};if(t==="av-eyes"&&cr.indexOf(n)>=0)return{...s,eyes:n};if(t==="av-eyeC")return{...s,eyeC:n};if(t==="av-freckles")return{...s,freckles:n==="1"};if(t==="av-blush")return{...s,blush:n==="1"};if(t==="av-top"&&or.indexOf(n)>=0)return{...s,top:n,dress:""};if(t==="av-topC")return{...s,topC:n};if(t==="av-bottom"&&ar.indexOf(n)>=0)return{...s,bottom:n,dress:""};if(t==="av-bottomC")return{...s,bottomC:n};if(t==="av-dress"&&rr.indexOf(n)>=0)return{...s,dress:n};if(t==="av-dressC")return{...s,dressC:n};if(t==="av-shoes"&&lr.indexOf(n)>=0)return{...s,shoes:n};if(t==="av-shoesC")return{...s,shoesC:n};if(t==="av-accC")return{...s,accC:n};if(t==="av-acc"&&li.indexOf(n)>=0){const i=n,o=s.acc.slice(),a=o.indexOf(i);if(a>=0)o.splice(a,1);else{const r=$a(i),l=o.filter(c=>$a(c)!==r);return l.push(i),{...s,acc:l.slice(0,2)}}return{...s,acc:o}}return null}function Ex(){try{return typeof navigator<"u"&&navigator.webdriver&&!window.__forceAvatarIntro?!1:localStorage.getItem(Nt("avatar-intro"))!=="1"}catch{return!1}}function Cx(){try{localStorage.setItem(Nt("avatar-intro"),"1")}catch{}}const da="#5a3d5c";function sl(e,t,n,s,i){return`<path class="${e}" d="${t}" fill="none" stroke="${da}" stroke-width="${s}" stroke-linecap="round"/><path class="${e} cloth" d="${t}" fill="none" stroke="${n}" stroke-width="${i}" stroke-linecap="round"/>`}function Sx(e){const t=Zs(e),n=t.skin,s=t.dress!=="",i=s||t.bottom==="skirt"||t.bottom==="tutu",o=i?n:t.bottomC,a=t.shoesC,r=s||t.bottom==="skirt"||t.bottom==="tutu";let l="";if(r){const g=s?t.dressC:t.bottomC;l+=`<path class="dress" d="M75 46 L89 46 L91 53 L73 53 Z" fill="${g}" stroke="${da}" stroke-width="1.1" stroke-linejoin="round"/>`}l+=sl("thigh","M76 44 Q83 48 88 54",o,6.2,4.8),l+=`<circle class="knee" cx="88" cy="56" r="2.3" fill="${o}" stroke="${da}" stroke-width="1.1"/>`;const c=t.shoes==="boots"||t.shoes==="rainboots";l+=sl("shin",c?"M88 58 Q90 64 91 68":"M88 58 Q90 65 91 70",i?n:o,5.8,4.4),!c&&(t.shoes==="sneakers"||t.shoes==="maryjanes"||t.shoes==="lightup")&&(l+=sl("shin","M90 66 Q90.6 68 91 70","#ffffff",5.4,4));const p=t.shoes==="sandals"?n:a,d=c?66:69;return l+=`<path class="shoe" d="M90 ${d} Q90 ${d-2} 94 ${d-2} Q99 ${d-2} 100 ${d+1} Q100 ${d+5} 95 ${d+5} Q90 ${d+5} 90 ${d+2} Z" fill="${p}" stroke="${da}" stroke-width="1.1" stroke-linejoin="round"/>`,t.shoes==="sandals"&&(l+=`<path d="M90 ${d+5} L100 ${d+5}" stroke="${a}" stroke-width="1.3" stroke-linecap="round"/>`,l+=`<path d="M93 ${d} L97 ${d+3}" stroke="${a}" stroke-width="1.1" stroke-linecap="round"/>`),`<svg class="rideleg" viewBox="0 0 160 130">${l}</svg>`}let Ve=null,Yt=null,pi=null,Hi=null,rn=0,pa=0;const il=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99,880],ql=[[4,-1,5,4,2,-1,3,-1],[2,3,4,-1,3,2,0,-1],[5,-1,7,6,5,-1,4,-1],[3,2,1,-1,2,-1,0,-1]],bp=[130.81,98,110,98];function cg(){try{return Ve??=new(window.AudioContext||window.webkitAudioContext),Yt||(Yt=Ve.createGain(),Yt.gain.value=.5,Yt.connect(Ve.destination)),Ve.state==="suspended"&&Ve.resume().catch(()=>{}),!0}catch{return!1}}function Fo(e,t,n,s,i){if(!Ve||!Yt)return;const o=Ve.createOscillator(),a=Ve.createGain();o.type=s,o.frequency.setValueAtTime(e,t),a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(i,t+.03),a.gain.exponentialRampToValueAtTime(5e-4,t+n),o.connect(a).connect(Yt),o.start(t),o.stop(t+n+.05)}function zx(){if(!Ve||!pi)return;if(!Sc||document.hidden){rn=Ve.currentTime+.1;return}const e=Gt/2e3*(pi==="musicbox"?1.35:1);for(rn<Ve.currentTime&&(rn=Ve.currentTime+.05);rn<Ve.currentTime+.4;){const t=Math.floor(pa/8)%ql.length,n=pa%8,s=ql[t][n];pi==="musicbox"?s>=0&&Fo(il[Math.min(il.length-1,s+3)]*2,rn,.9,"sine",.05):(s>=0&&Fo(il[s],rn,.5,"triangle",.045),n===0&&Fo(bp[t],rn,1.6,"sine",.06),n===4&&Fo(bp[t]*1.5,rn,1,"sine",.035)),pa++,rn+=e}}function vp(e){if(e!==pi){if(pi=e,!pi){if(Hi&&(clearInterval(Hi),Hi=null),Yt&&Ve){const t=Yt.gain;t.cancelScheduledValues(Ve.currentTime),t.setValueAtTime(t.value,Ve.currentTime),t.linearRampToValueAtTime(1e-4,Ve.currentTime+.4)}return}!cg()||!Ve||!Yt||(Yt.gain.cancelScheduledValues(Ve.currentTime),Yt.gain.setValueAtTime(.5,Ve.currentTime+.42),pa=Math.floor(Date.now()/(Gt/2))%(ql.length*8),rn=Ve.currentTime+.45,Hi||(Hi=setInterval(zx,120)))}}function Px(){cg()}const Tx=/rug|lamp|light|plant|curtain|clock|window|lantern/;function Bx(e){if(e.cat==="plants")return!0;const t=`${e.name} ${e.kind??""}`.toLowerCase();return Tx.test(t)}const dg=new Set(["pack:ring-light","pack:desk-lamp",...Ku]);function pg(e){const t=e.rooms??[];return t.includes("backyard")&&!t.includes("any")}function Rx(e,t){if(t==="nursery"&&e.kind&&dg.has(e.kind))return!1;if(t==="backyard")return pg(e);if(t==="all"||!t)return!0;const n=e.rooms;return!n||n.length===0||n.includes(t)?!0:n.includes("any")?e.cat==="decor"||e.cat==="furniture"?Bx(e):!0:!1}function Ax(e,t,n,s,i){return e.secret&&!(i&&i.has(e.secret))||!s&&n==="backyard"&&!pg(e)||n==="nursery"&&e.kind&&dg.has(e.kind)?!1:t.startsWith("pack:")?e.pack===t.slice(5):e.cat!==t?!1:Rx(e,s?"all":n)}function Dx(e){const t=e.scale;let n=0;e.overflowR>1&&e.overflowL>1?n=-e.overflowL:e.overflowR>1?n=e.overflowR:e.overflowL>1&&(n=-e.overflowL);const s=e.cam+n/t,i=Math.max(0,Math.min(e.maxCam,s)),o=s-i,a=e.nudgeX&&Math.abs(o)>.5?e.kidX-o:e.kidX;return{cam:i,kidX:a}}function Ix(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function Hx(e,t=3){const n=[...e].sort((r,l)=>r.x-l.x||r.id.localeCompare(l.id)),s=[],i=[],o=(r,l,c)=>s.some(p=>p.lane===c&&Math.abs(p.x-r)<(p.w+l)/2+8),a=[];for(const r of n){let l=-1;for(let c=0;c<t;c++)if(!o(r.x,r.w,c)){l=c;break}l<0?a.push(r):(s.push({x:r.x,w:r.w,lane:l}),i.push({id:r.id,lane:l,initials:!1}))}for(const r of a){const l=Math.min(r.w,44);let c=0;for(let p=0;p<t;p++)if(!o(r.x,l,p)){c=p;break}s.push({x:r.x,w:l,lane:c}),i.push({id:r.id,lane:c,initials:!0})}return i}let Ox=0;function fg(e=document){const t=[...e.querySelectorAll(".nametag")].filter(i=>{const o=i.getBoundingClientRect();return o.width>2&&o.height>2});if(!t.length)return;const n=t.map(i=>{i.dataset.tagId||(i.dataset.tagId="tg"+(++Ox).toString(36)),i.dataset.full||(i.dataset.full=(i.textContent||"").trim()),i.classList.contains("is-initials")||(i.dataset.fullW=String(i.getBoundingClientRect().width));const o=i.getBoundingClientRect(),a=Number(i.dataset.fullW)||o.width;return{id:i.dataset.tagId,x:o.left+o.width/2,w:a}}),s=new Map(Hx(n).map(i=>[i.id,i]));for(const i of t){const o=s.get(i.dataset.tagId||"");if(!o)continue;const a=i.dataset.full||"",r=o.initials?Ix(a):a;i.textContent!==r&&(i.textContent=r),i.classList.toggle("is-initials",o.initials),i.style.setProperty("--tag-lane",String(o.lane))}}function xr(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Wx(e){!e||xr()||(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),window.setTimeout(()=>e.classList.remove("wiggle"),480))}function Vx(){document.addEventListener("pointerup",e=>{if(xr())return;const t=e.target?.closest("button");t&&(t.classList.remove("spring"),t.offsetWidth,t.classList.add("spring"))},!0)}const gg="#5a3d5c",kt=`stroke="${gg}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,Ux={living:"#ff8fab",bedroom:"#c9a0dc",kitchen:"#8fd6a6",salon:"#f0a0d8",nursery:"#9ad7f5",bathroom:"#7ec8d6",backyard:"#80ed99"};function Qx(e){const t=Ux[e]??"#ffb3c6";return`<div class="sceneWin builtin-window" aria-hidden="true"><svg viewBox="0 0 160 180">
    <path d="M18 20 H142 V150 H18 Z" fill="#fff6ea" ${kt}/>
    <path d="M28 30 H132 V118 H28 Z" fill="#b9e3ff" ${kt}/>
    <path d="M80 30 V118 M28 74 H132" ${kt} stroke-width="3"/>
    <circle cx="48" cy="52" r="10" fill="#fff" opacity=".85"/>
    <ellipse cx="108" cy="48" rx="16" ry="8" fill="#fff" opacity=".8"/>
    <path d="M40 118 Q58 96 70 118 Q90 100 112 118" fill="#7dce8a" stroke="${gg}" stroke-width="3"/>
    <rect x="96" y="86" width="8" height="32" rx="3" fill="#6b4a32" ${kt} stroke-width="2"/>
    <circle cx="100" cy="80" r="12" fill="#5cc985" ${kt} stroke-width="2"/>
    <path d="M8 16 Q6 80 16 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <path d="M152 16 Q154 80 144 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <rect x="46" y="146" width="68" height="12" rx="4" fill="#ffe7c2" ${kt}/>
  </svg></div>`}function qx(){return`<div class="sceneRug" aria-hidden="true"><svg viewBox="0 0 200 80">
    <ellipse cx="100" cy="48" rx="92" ry="24" fill="#ffc8dd" ${kt}/>
    <ellipse cx="100" cy="48" rx="64" ry="15" fill="#bde0fe" ${kt} stroke-width="3"/>
    <ellipse cx="100" cy="48" rx="28" ry="7" fill="#fff6ea"/>
  </svg></div>
  <div class="sceneLamp" aria-hidden="true"><svg viewBox="0 0 80 160">
    <path d="M18 52 L30 8 H50 L62 52 Z" fill="#ffd166" ${kt}/>
    <rect x="36" y="52" width="8" height="78" rx="4" fill="#c9a0dc" ${kt}/>
    <ellipse cx="40" cy="136" rx="26" ry="8" fill="#b388d6" ${kt}/>
    <circle cx="34" cy="28" r="4" fill="#fff" opacity=".8"/>
  </svg></div>
  <div class="scenePlant" aria-hidden="true"><svg viewBox="0 0 90 140">
    <path d="M45 128 C45 90 18 78 20 48 C40 58 44 80 45 128" fill="#5cc985" ${kt}/>
    <path d="M45 128 C45 92 74 70 78 40 C58 54 50 82 45 128" fill="#80ed99" ${kt}/>
    <path d="M45 128 C40 96 28 88 22 70" fill="none" stroke="#3d9a62" stroke-width="3"/>
    <path d="M30 132 H62 L56 118 H36 Z" fill="#e07a5f" ${kt}/>
    <ellipse cx="46" cy="126" rx="16" ry="5" fill="#c4634a"/>
  </svg></div>`}function Zx(e,t){return t==="backyard"?[]:[{id:e("rug"),kind:"rug",x:1152,y:540,flip:!1,z:0,scale:1},{id:e("lamp"),kind:"lamp",x:804,y:470,flip:!1,z:0,scale:1},{id:e("plant"),kind:"plant",x:1584,y:480,flip:!1,z:0,scale:1}]}let ws="",hg=null;function Nx(e){hg=e,ws=""}function Fx(e,t,n){const s=hg?.(t,n);if(s!=null){const r="custom|"+t;if(r===ws&&e.childElementCount)return;ws=r,e.innerHTML=s,e.dataset.room=t;return}if(t==="backyard"){const r="yard|"+t;if(r===ws&&e.childElementCount)return;ws=r,e.innerHTML="",e.dataset.room=t;return}const i=n.length===0,o=n.some(r=>/window|curtain/i.test(r.kind)),a=t+(i?"|e":"")+(o?"|w":"");a===ws&&e.childElementCount||(ws=a,e.innerHTML=(o?"":Qx(t))+(i?qx():""),e.dataset.room=t)}const Ae="#5a3d5c",E=(e=4)=>`stroke="${Ae}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,zo=600,en=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],dn=(e,t,n=3)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="${Ae}"/><circle cx="${e+1}" cy="${t-1}" r="${n/3}" fill="#fff"/>`,Ms=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="5" ry="3" fill="#ff9bb5" opacity=".75"/>`,jx=(e,t,n,s)=>en.map((i,o)=>`<path d="M${e-n+o*s} ${t} A${n-o*s} ${n-o*s} 0 0 1 ${e+n-o*s} ${t}" fill="none" stroke="${i}" stroke-width="${s}"/>`).join(""),Gx=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${E()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${E()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${E()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${E()}/></g>`,Ln=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-46" y="-50" width="92" height="50" rx="14" fill="#f5d27a" ${E()}/>
  <path d="M-30 -42 V-8 M0 -44 V-6 M30 -42 V-8" stroke="#d9a93f" stroke-width="4" stroke-linecap="round"/><path d="M-46 -26 H46" stroke="#c98a2e" stroke-width="5"/></g>`,Yx=(e,t,n)=>{const s=Array.from({length:Math.floor((t-e)/70)+1},(i,o)=>`<rect x="${e+o*70-7}" y="${n-58}" width="14" height="64" rx="5" fill="#fff6e6" ${E(3)}/>`).join("");return`<rect x="${e}" y="${n-46}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${E(3)}/><rect x="${e}" y="${n-22}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${E(3)}/>${s}`};function Kx(){const e=xo;return`<svg class="parkScene ranchScene" viewBox="0 0 ${e} ${zo}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="rcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c7e8ff"/><stop offset="1" stop-color="#fff4fb"/></linearGradient></defs>
  <rect width="${e}" height="440" fill="url(#rcSky)"/>
  <g opacity=".55">${jx(1900,430,620,26)}</g>
  ${[160,820,1500,2300,3e3].map((t,n)=>`<g transform="translate(${t} ${70+n%2*34})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <g transform="translate(${e-200} 92)"><circle r="48" fill="#ffe066" ${E()}/>${dn(-15,-6,4)}${dn(13,-6,4)}<path d="M-14 12 Q0 24 14 12" fill="none" ${E(3)}/>${Ms(-26,8)}${Ms(26,8)}</g>
  <path d="M-50 370 Q600 230 1300 350 T2600 330 T${e+100} 360 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#a6e3a0"/><path d="M0 410 H${e}" ${E()}/>
  <path d="M0 566 Q900 530 1800 570 T${e} 552 V600 H0 Z" fill="#f2dcb8" opacity=".9"/>
  ${Gx(3560,400,.8,"#4fbf7a")}
  <!-- entrance gate with a rainbow arch -->
  <g class="ranchSign"><g class="ranchSignArt"><rect x="40" y="290" width="24" height="210" rx="6" fill="#c99366" ${E()}/><rect x="196" y="290" width="24" height="210" rx="6" fill="#c99366" ${E()}/>
    <path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${Ae}" stroke-width="44" stroke-linecap="round"/>
    ${en.map((t,n)=>`<path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${t}" stroke-width="${36-n*6}" stroke-linecap="round"/>`).join("")}
    <rect x="22" y="250" width="216" height="40" rx="14" fill="#fff6e6" ${E(3)}/><text x="130" y="277" text-anchor="middle" font-size="19" font-weight="900" fill="${Ae}" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  <!-- red barn with rainbow trim and banner -->
  <g transform="translate(270 0)">
    <path d="M0 470 V250 L60 180 H270 L330 250 V470 Z" fill="#ef5b5b" ${E(5)}/>
    <path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${Ae}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    ${en.map((t,n)=>`<path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${t}" stroke-width="3" transform="translate(0 ${-7+n*2.8})" stroke-linejoin="round"/>`).join("")}
    <rect x="115" y="215" width="100" height="56" rx="10" fill="#fff6e6" ${E(4)}/><path d="M115 215 L215 271 M215 215 L115 271" stroke="#ef5b5b" stroke-width="6"/>
    <rect x="95" y="330" width="140" height="140" rx="8" fill="#fff6e6" ${E(4)}/><rect x="108" y="342" width="56" height="128" fill="#d94848" ${E(3)}/><rect x="166" y="342" width="56" height="128" fill="#d94848" ${E(3)}/>
    <path d="M108 342 L164 470 M164 342 L108 470 M166 342 L222 470 M222 342 L166 470" stroke="#fff6e6" stroke-width="6"/>
    <g class="barnBanner" transform="translate(165 300)"><g class="ranchSignArt">${en.map((t,n)=>`<rect x="${-120+n*40}" y="-16" width="40" height="30" fill="${t}"/>`).join("")}<rect x="-120" y="-16" width="240" height="30" fill="none" ${E(3)}/>
      <text x="0" y="6" text-anchor="middle" font-size="18" font-weight="900" fill="#fff" stroke="${Ae}" stroke-width="4" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  </g>
  ${Ln(640,560,.8)}${Ln(1950,470,.7)}${Ln(1880,470,.55)}${Ln(3115,470,.7)}${Ln(3115,425,.55)}
  <!-- the petting zoo moved into the barn: a sign by the barn door, sunflowers where the pen was -->
  ${Array.from({length:6},(t,n)=>{const s=1030+n*66,i=70+n%3*18;return`<g transform="translate(${s} 470)"><path d="M0 0 V-${i}" stroke="#40c057" stroke-width="6" stroke-linecap="round"/><ellipse cx="${n%2?9:-9}" cy="-${i/2}" rx="11" ry="5" fill="#69db7c" ${E(2.5)}/>${[0,45,90,135,180,225,270,315].map(o=>`<ellipse cx="${Math.cos(o*Math.PI/180)*14}" cy="${-i+Math.sin(o*Math.PI/180)*14}" rx="8" ry="5" transform="rotate(${o} ${Math.cos(o*Math.PI/180)*14} ${-i+Math.sin(o*Math.PI/180)*14})" fill="#ffd43b" ${E(2)}/>`).join("")}<circle cy="-${i}" r="10" fill="#a0522d" ${E(2.5)}/></g>`}).join("")}
  <!-- pond -->
  <ellipse cx="${ht.x}" cy="${ht.y}" rx="${ht.rx}" ry="${ht.ry}" fill="#8ecae6" ${E()}/><ellipse cx="${ht.x-15}" cy="${ht.y-6}" rx="70" ry="16" fill="#bde6f7"/>
  <!-- paddock fence + HORSES sign are their own depth layer (paddockFenceSVG) -->
  <!-- garden -->
  <rect x="3140" y="520" width="420" height="70" rx="20" fill="#b07d54" ${E()}/>
  <rect x="3260" y="430" width="160" height="40" rx="12" fill="#fff6e6" ${E(3)}/><text x="3340" y="458" text-anchor="middle" font-size="21" font-weight="900" fill="${Ae}" font-family="Nunito, system-ui, sans-serif">GARDEN</text>
  <path d="M3340 470 V500" ${E(5)}/>
  </svg>`}function Xx(){return`<svg class="fenceLayer" viewBox="0 0 ${xo} ${zo}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  ${Yx(2400,3080,470)}
  <rect x="2640" y="380" width="180" height="40" rx="12" fill="#fff6e6" ${E(3)}/><text x="2730" y="408" text-anchor="middle" font-size="21" font-weight="900" fill="${Ae}" font-family="Nunito, system-ui, sans-serif">HORSES</text>
  </svg>`}const ug=[{name:"Goat",say:"Meh-eh-eh!",snd:"bleat"},{name:"Sheep",say:"Baa!",snd:"baa"},{name:"Piglet",say:"Oink oink!",snd:"oink"},{name:"Chicks",say:"Peep peep!",snd:"peep"},{name:"Bunny",say:"*wiggle wiggle*",snd:"squeak"},{name:"Cow",say:"Moooo!",snd:"moo"}],jo=(e,t,n,s=94)=>e.map((i,o)=>`<rect class="leg ${o%2?"b":"a"}" x="${i}" y="${t}" width="9" height="${s-t}" rx="4" fill="${n}" ${E(3)}/>`).join("");function Zl(e){switch(e){case 0:return`<svg viewBox="0 0 120 100">${jo([32,44,70,82],60,"#efe6dc")}<path class="tail" d="M24 50 l-8 -10" ${E(5)}/>
      <ellipse cx="58" cy="56" rx="34" ry="17" fill="#f4ede5" ${E()}/><g class="head"><path d="M86 30 l-6 -16 l10 10 Z M96 30 l2 -17 l5 13 Z" fill="#c9b8a8" ${E(3)}/>
      <ellipse cx="94" cy="40" rx="14" ry="16" fill="#f4ede5" ${E()}/><ellipse class="ear" cx="80" cy="36" rx="9" ry="4" fill="#e8d6c4" ${E(3)}/>${dn(98,36)}<path d="M98 56 q2 8 6 0" fill="#e8d6c4" ${E(3)}/>${Ms(102,46)}<circle cx="106" cy="44" r="2" fill="${Ae}"/></g></svg>`;case 1:return`<svg viewBox="0 0 120 100">${jo([36,48,70,80],62,"#5a4a5c")}
      ${[[40,50],[56,44],[72,48],[86,56],[70,64],[48,64],[34,60]].map(([t,n])=>`<circle cx="${t}" cy="${n}" r="15" fill="#fff" ${E(3)}/>`).join("")}<ellipse cx="60" cy="55" rx="30" ry="14" fill="#fff"/>
      <g class="head"><ellipse cx="96" cy="46" rx="13" ry="15" fill="#6b5a6e" ${E()}/><circle cx="92" cy="32" r="8" fill="#fff" ${E(3)}/><ellipse class="ear" cx="82" cy="44" rx="8" ry="4" fill="#6b5a6e" ${E(3)}/>
      <circle cx="99" cy="42" r="3.2" fill="#fff"/><circle cx="99.5" cy="42" r="1.8" fill="${Ae}"/>${Ms(102,52)}</g></svg>`;case 2:return`<svg viewBox="0 0 120 100">${jo([38,50,66,78],66,"#ffadc6")}<path class="tail" d="M28 54 q-10 -4 -6 -12 q6 0 2 8" fill="none" ${E(3)}/>
      <ellipse cx="58" cy="60" rx="32" ry="20" fill="#ffc2d4" ${E()}/><g class="head"><circle cx="90" cy="52" r="16" fill="#ffc2d4" ${E()}/><path d="M80 38 l2 -12 l9 8 Z" fill="#ffadc6" ${E(3)}/>
      <ellipse cx="104" cy="56" rx="7" ry="8" fill="#ff9bb8" ${E(3)}/><circle cx="102" cy="54" r="1.6" fill="${Ae}"/><circle cx="106" cy="57" r="1.6" fill="${Ae}"/>${dn(92,46)}${Ms(90,60)}</g></svg>`;case 3:return`<svg viewBox="0 0 120 100">${[[30,72,1],[62,66,1.15],[92,74,.95]].map(([t,n,s])=>`<g transform="translate(${t} ${n}) scale(${s})"><path d="M-4 16 v8 M4 16 v8" stroke="#ff9f43" stroke-width="3" stroke-linecap="round"/>
      <circle cx="0" cy="4" r="14" fill="#ffe066" ${E(3)}/><path d="M-8 2 q-6 4 0 8" fill="#ffd43b" ${E(2)}/><g class="head"><circle cx="5" cy="-8" r="9" fill="#ffe066" ${E(3)}/><path d="M13 -9 l7 2 l-7 3 Z" fill="#ff9f43" ${E(2)}/>${dn(7,-10,2.2)}</g></g>`).join("")}</svg>`;case 4:return`<svg viewBox="0 0 120 100"><circle class="tail" cx="30" cy="68" r="8" fill="#fff" ${E(3)}/><ellipse cx="56" cy="72" rx="28" ry="20" fill="#f6eef9" ${E()}/><ellipse cx="74" cy="90" rx="12" ry="5" fill="#f6eef9" ${E(3)}/>
      <g class="head"><ellipse class="ear" cx="78" cy="26" rx="7" ry="20" fill="#f6eef9" ${E(3)} transform="rotate(-12 78 26)"/><ellipse cx="78" cy="26" rx="3" ry="13" fill="#ffc2d4" transform="rotate(-12 78 26)"/>
      <ellipse cx="90" cy="28" rx="7" ry="20" fill="#f6eef9" ${E(3)} transform="rotate(10 90 28)"/><circle cx="86" cy="56" r="17" fill="#f6eef9" ${E()}/>${dn(92,52)}<circle cx="102" cy="58" r="2.5" fill="#ff8fab"/>${Ms(90,63)}</g></svg>`;default:return`<svg viewBox="0 0 120 100">${jo([30,42,72,84],62,"#fff")}<path class="tail" d="M20 50 q-6 14 0 26" fill="none" ${E(3)}/>
      <rect x="18" y="38" width="80" height="34" rx="16" fill="#fff" ${E()}/><path d="M30 40 q10 8 4 20 q-10 -2 -10 -14 Z M60 42 q14 2 10 18 q-12 4 -14 -8 Z" fill="${Ae}"/><ellipse cx="60" cy="74" rx="8" ry="5" fill="#ffadc6" ${E(2)}/>
      <g class="head"><path d="M90 24 l-8 -8 M108 24 l8 -8" stroke="#f5d27a" stroke-width="5" stroke-linecap="round"/><rect x="86" y="22" width="26" height="30" rx="12" fill="#fff" ${E()}/>
      <ellipse cx="100" cy="52" rx="14" ry="10" fill="#ffc2d4" ${E(3)}/><circle cx="95" cy="52" r="1.8" fill="${Ae}"/><circle cx="105" cy="52" r="1.8" fill="${Ae}"/>${dn(94,34)}${dn(106,34)}
      <ellipse class="ear" cx="82" cy="30" rx="7" ry="4" fill="#fff" ${E(3)}/></g></svg>`}}const ht={x:2265,y:520,rx:110,ry:34},Jx=476,Ha=[{name:"Chestnut",body:"#c97b45",mane:"#7a3f22",sock:"#fff6e6"},{name:"Snowy",body:"#fdf8f3",mane:"#d9cdc4",sock:"#e9ddd2"},{name:"Midnight",body:"#4a3f52",mane:"#2a2230",sock:"#6b5e74"},{name:"Sunny",body:"#f2c96b",mane:"#fff6e0",sock:"#fff6e0"},{name:"Rainbow Pony",body:"#fff0fa",mane:"rainbow",sock:"#ffd6ec"}];function Vc(e,t=!1){const n=Ha[e]??Ha[0],s=n.mane==="rainbow",i=s?en.map((r,l)=>{const c=124-l*1.6,p=14+l*2.4;return`<path d="M${c.toFixed(1)} ${p.toFixed(1)} q-6.5 2 -4.5 ${6+l*.35}" fill="none" stroke="${r}" stroke-width="5.5" stroke-linecap="round"/>`}).join(""):`<path d="M106 20 q-14 6 -18 30 q8 -6 10 -2 q4 -12 14 -18 Z" fill="${n.mane}" ${E(3)}/>`,o=s?`<g class="tail">${en.map((r,l)=>`<path d="M30 58 q-18 ${8+l*3} -14 ${36+l}" fill="none" stroke="${r}" stroke-width="6" stroke-linecap="round"/>`).join("")}</g>`:`<path class="tail" d="M30 56 q-20 10 -14 44 q10 -10 8 -20 q6 -10 10 -18 Z" fill="${n.mane}" ${E(3)}/>`,a=(r,l)=>`<g class="leg ${l}"><rect x="${r}" y="78" width="12" height="44" rx="5" fill="${n.body}" ${E(3)}/><rect x="${r}" y="110" width="12" height="12" rx="4" fill="${n.sock}" ${E(3)}/></g>`;return`<svg viewBox="0 0 160 130" class="horsesvg">${o}${a(40,"a")}${a(56,"b")}${a(96,"b")}${a(112,"a")}
    <ellipse cx="80" cy="68" rx="50" ry="24" fill="${n.body}" ${E()}/>
    ${t||s?`<path class="saddle" data-top="43" d="M64 46 q16 -6 32 0 l-2 22 q-14 4 -28 0 Z" fill="${s?"#b197fc":"#e8590c"}" ${E(3)}/>`:""}
    <g class="head"><path d="M108 66 L114 30 Q118 16 132 18 L148 36 Q152 46 142 48 L130 46 L128 70 Z" fill="${n.body}" ${E()}/>
    <path d="M114 22 l2 -14 l8 12 Z" fill="${n.body}" ${E(3)}/>${i}
    ${dn(130,30,3.4)}<circle cx="146" cy="42" r="2" fill="${Ae}"/>${Ms(136,40)}
    ${s?`<path d="M120 14 l4 -14 l4 14 Z" fill="#ffd43b" ${E(2)}/>`:""}</g>
    ${s?'<g fill="#fff" opacity=".9"><path d="M60 60 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z"/><path d="M92 74 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z"/></g>':""}</svg>`}const e7=`<svg viewBox="0 0 180 170"><path d="M10 70 L90 14 L170 70" fill="#ffa94d" ${E(5)}/>
  <rect x="24" y="66" width="132" height="84" rx="8" fill="#fff6e6" ${E()}/>${en.map((e,t)=>`<rect x="${24+t*22}" y="66" width="22" height="10" fill="${e}"/>`).join("")}
  <rect x="24" y="66" width="132" height="10" fill="none" ${E(3)}/><circle cx="90" cy="108" r="22" fill="#5a3d5c"/>
  <path d="M60 150 l-12 16 M120 150 l12 16" ${E(5)}/>
  <g class="hen"><ellipse cx="90" cy="118" rx="20" ry="14" fill="#fff" ${E(3)}/><circle cx="104" cy="104" r="10" fill="#fff" ${E(3)}/><path d="M100 94 q3 -8 8 0" fill="#ff6b6b" ${E(2)}/>
  <path d="M113 104 l7 2 -7 3 Z" fill="#ffa94d" ${E(2)}/>${dn(106,102,2)}</g>
  <text x="90" y="54" text-anchor="middle" font-size="16" font-weight="900" fill="${Ae}" font-family="Nunito, system-ui, sans-serif">EGGS</text></svg>`,t7=`<svg viewBox="0 0 170 130"><rect x="80" y="30" width="54" height="50" rx="8" fill="#bde6f7" ${E()}/><rect x="74" y="24" width="66" height="10" rx="4" fill="#ff6b6b" ${E(3)}/>
  <rect x="20" y="62" width="130" height="34" rx="12" fill="#ff6b6b" ${E()}/><rect x="28" y="40" width="10" height="24" rx="3" fill="#868e96" ${E(3)}/>
  <circle cx="122" cy="98" r="28" fill="${Ae}"/><circle cx="122" cy="98" r="13" fill="#ffd43b" ${E(3)}/><circle cx="44" cy="106" r="18" fill="${Ae}"/><circle cx="44" cy="106" r="8" fill="#ffd43b" ${E(3)}/>
  <circle cx="26" cy="76" r="5" fill="#fff3b0" ${E(2)}/></svg>`,n7=`<svg viewBox="0 0 240 300"><rect x="104" y="160" width="32" height="140" rx="10" fill="#c99366" ${E()}/>
  <circle cx="120" cy="110" r="90" fill="#5cc985" ${E()}/><circle cx="62" cy="140" r="50" fill="#5cc985" ${E()}/><circle cx="180" cy="140" r="52" fill="#5cc985" ${E()}/>
  ${[[80,90],[150,70],[175,140],[100,150],[130,115],[60,140]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="11" fill="#ff6b6b" ${E(3)}/><path d="M${e} ${t-10} q2 -6 6 -7" fill="none" ${E(2)}/>`).join("")}</svg>`,kp=[[80,90],[150,70],[175,140],[100,150]],mg=`<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="14" fill="#ff6b6b" ${E(3)}/><path d="M20 10 q2 -6 6 -7" fill="none" ${E(2.5)}/><ellipse cx="27" cy="8" rx="5" ry="3" fill="#5cc985" ${E(2)}/><circle cx="14" cy="18" r="3" fill="#fff" opacity=".6"/></svg>`,Mr=`<svg viewBox="0 0 40 40"><path d="M12 14 L32 10 L16 36 Z" fill="#ff922b" ${E(3)}/><path d="M18 18 l5 -1 M17 24 l4 -1" ${E(2)}/><path d="M30 10 q4 -8 8 -6 M30 10 q-2 -8 2 -10 M30 10 q6 -2 8 2" fill="none" stroke="#40c057" stroke-width="4" stroke-linecap="round"/></svg>`,s7=`<svg viewBox="0 0 40 40"><path d="M6 34 Q20 4 34 34 Z" fill="#f5d27a" ${E(3)}/><path d="M14 30 L18 14 M20 32 V10 M26 30 L22 14" stroke="#d9a93f" stroke-width="2.5" stroke-linecap="round"/></svg>`,uo=`<svg viewBox="0 0 40 40"><path d="M20 4 C30 4 34 20 34 26 C34 34 28 38 20 38 C12 38 6 34 6 26 C6 20 10 4 20 4 Z" fill="#fff6e6" ${E(3)}/><circle cx="15" cy="16" r="3" fill="#fff"/></svg>`,Uc=(e="#ff8fab")=>`<svg viewBox="0 0 40 40"><path d="M20 38 V20" stroke="#40c057" stroke-width="4" stroke-linecap="round"/>${[0,72,144,216,288].map(t=>`<circle cx="${20+Math.cos(t*Math.PI/180)*8}" cy="${14+Math.sin(t*Math.PI/180)*8}" r="7" fill="${e}" ${E(2.5)}/>`).join("")}<circle cx="20" cy="14" r="5" fill="#ffd43b" ${E(2)}/></svg>`,yg={carrot:Mr,apple:mg,hay:s7},i7=e=>`<svg viewBox="0 0 80 90"><g transform="translate(14 0) scale(1.3)">${yg[e].replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g>
  <path d="M10 40 H70 L62 86 H18 Z" fill="${e==="carrot"?"#74c0fc":e==="apple"?"#ffa8c5":"#b2f2bb"}" ${E(4)}/><path d="M12 52 H68" stroke="#fff" stroke-width="4" opacity=".6"/></svg>`,o7=`<svg viewBox="0 0 60 50"><path d="M12 22 Q30 -6 48 22" fill="none" stroke="${Ae}" stroke-width="7" stroke-linecap="round"/><path d="M12 22 Q30 -6 48 22" fill="none" stroke="#e0a96d" stroke-width="3" stroke-linecap="round"/>
  <path d="M4 22 H56 L50 46 H10 Z" fill="#e0a96d" ${E(3.5)}/><path d="M12 30 H48 M14 38 H46" stroke="#b5793d" stroke-width="3"/></svg>`,_p=["#ff8fab","#c9a0dc","#ffd43b","#74c0fc","#ff922b"];function wg(e,t,n){const s=`<ellipse cx="35" cy="76" rx="30" ry="11" fill="${e?.wet?"#7a4b2e":"#9c6b46"}" ${E(3)}/>`;if(!e)return`<svg viewBox="0 0 70 90">${s}<path d="M20 74 q4 -3 8 0 M36 78 q4 -3 8 0" stroke="#b5875f" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;const i=_p[n%_p.length];let o="";t===0&&(o=`<circle cx="27" cy="72" r="3" fill="#f2dcb8" ${E(1.5)}/><circle cx="36" cy="75" r="3" fill="#f2dcb8" ${E(1.5)}/><circle cx="44" cy="71" r="3" fill="#f2dcb8" ${E(1.5)}/>`),t===1&&(o=`<path d="M35 72 V58" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="29" cy="57" rx="7" ry="4" fill="#69db7c" ${E(2)}/><ellipse cx="41" cy="55" rx="7" ry="4" fill="#69db7c" ${E(2)}/>`),t===2&&(o=`<path d="M35 72 V40 M35 60 Q22 54 20 42 M35 56 Q48 50 50 38" stroke="#40c057" stroke-width="4" fill="none" stroke-linecap="round"/>${e.seed==="flower"?`<circle cx="35" cy="38" r="7" fill="#b2f2bb" ${E(2)}/>`:""}`),t===3&&(o=e.seed==="carrot"?`<path d="M26 74 L44 72 L35 86 Z" fill="#ff922b" ${E(2.5)}/><path d="M35 72 Q24 50 22 38 M35 72 Q36 48 36 34 M35 72 Q46 50 50 40" stroke="#40c057" stroke-width="5" fill="none" stroke-linecap="round"/>`:`<path d="M35 72 V34" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="54" rx="8" ry="4" fill="#69db7c" ${E(2)}/>${[0,72,144,216,288].map(l=>`<circle cx="${35+Math.cos(l*Math.PI/180)*10}" cy="${28+Math.sin(l*Math.PI/180)*10}" r="8" fill="${i}" ${E(2.5)}/>`).join("")}<circle cx="35" cy="28" r="6" fill="#ffd43b" ${E(2)}/>`);const a=e.wet?"":`<g class="needWater"><path d="M56 18 q6 10 0 14 q-6 -4 0 -14 Z" fill="#74c0fc" ${E(2)}/></g>`,r=t===3?`<g class="ready"><path d="M58 20 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#ffd43b" ${E(1.5)}/></g>`:"";return`<svg viewBox="0 0 70 90">${s}${o}${a}${r}</svg>`}const a7=`<svg viewBox="0 0 48 48">${en.map((e,t)=>`<path d="M${6+t*2.6} 38 A${18-t*2.6} ${18-t*2.6} 0 0 1 ${42-t*2.6} 38" fill="none" stroke="${e}" stroke-width="3"/>`).join("")}<path d="M4 38 H44" ${E(3)}/></svg>`,r7=`<svg viewBox="0 0 48 48"><path d="M10 34 Q24 22 38 34" fill="none" ${E(4)}/><path d="M24 30 V8 M16 16 L24 8 L32 16" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40 H40" ${E(4)}/></svg>`,l7=`<svg viewBox="0 0 200 320"><path d="M70 310 L84 120 H116 L130 310 Z" fill="#fff6e6" ${E(4)}/><path d="M78 200 H122 M74 260 H126" ${E(3)}/><rect x="88" y="262" width="24" height="48" rx="10" fill="#b197fc" ${E(3)}/>
  <path d="M78 124 L100 92 L122 124 Z" fill="#ff8fab" ${E(4)}/>
  <g class="sails" style="transform-origin:100px 110px">${[0,90,180,270].map(e=>`<g transform="rotate(${e} 100 110)"><path d="M100 110 L104 30 L126 30 L118 104 Z" fill="${["#ffd43b","#74c0fc","#ff8fab","#69db7c"][e/90]}" ${E(3)}/><path d="M108 40 H122 M107 58 H121 M106 76 H120" ${E(2)}/></g>`).join("")}<circle cx="100" cy="110" r="10" fill="#ffa94d" ${E(3)}/></g></svg>`,c7=["GOAT","SHEEP","PIGLET","CHICKS","BUNNY","COW"],d7=e=>`<g class="lantern" style="transform-origin:${e}px 146px"><path d="M${e} 146 V178" ${E(3)}/><circle cx="${e}" cy="204" r="34" fill="#fff3b0" opacity=".45"/>
  <path d="M${e-14} 182 H${e+14} L${e+11} 226 H${e-11} Z" fill="#ffe066" ${E(3)}/><rect x="${e-17}" y="176" width="34" height="8" rx="3" fill="#495057" ${E(2.5)}/><rect x="${e-15}" y="224" width="30" height="7" rx="3" fill="#495057" ${E(2.5)}/><ellipse cx="${e}" cy="205" rx="5" ry="9" fill="#ff922b"/></g>`;function p7(){const e=hc,t=Array.from({length:Math.ceil(e/64)},(i,o)=>`<path d="M${o*64} 146 V440" stroke="#d4895f" stroke-width="3"/>`).join(""),n=Array.from({length:Math.ceil(e/46)},(i,o)=>{const a=o*46,r=160+Math.sin(o/3.1)*8;return`<path d="M${a} ${r} L${a+40} ${r} L${a+20} ${r+30} Z" fill="${en[o%6]}" ${E(2.5)}/>`}).join(""),s=uc.map((i,o)=>`<g><rect x="${i-96}" y="318" width="192" height="122" rx="6" fill="#f0c49a" ${E(4)}/>
    <path d="M${i-96} 350 H${i+96} M${i-96} 384 H${i+96} M${i-96} 412 H${i+96}" stroke="#d9a074" stroke-width="3"/><path d="M${i-96} 318 L${i+96} 440 M${i+96} 318 L${i-96} 440" stroke="#e0aa7e" stroke-width="7" opacity=".7"/>
    <rect x="${i-54}" y="284" width="108" height="30" rx="10" fill="#fff6e6" ${E(3)}/><text x="${i}" y="305" text-anchor="middle" font-size="17" font-weight="900" fill="${Ae}" font-family="Nunito, system-ui, sans-serif">${c7[o]}</text></g>`).join("");return`<svg class="parkScene ranchScene barnScene" viewBox="0 0 ${e} ${zo}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="440" fill="#e8a87c"/>${t}
  <!-- hay loft -->
  <rect width="${e}" height="128" fill="#c98a5e"/>${Array.from({length:Math.ceil(e/64)},(i,o)=>`<path d="M${o*64+32} 0 V128" stroke="#b5764d" stroke-width="3"/>`).join("")}
  ${[120,260,420,980,1130,1290,1640,1790].map((i,o)=>Ln(i,126,o%3===1?.72:.85)).join("")}${[190,1060,1720].map(i=>Ln(i,82,.7)).join("")}
  <rect x="0" y="126" width="${e}" height="24" fill="#a8653a" ${E(4)}/>
  ${[0,1,2,3,4,5,6].map(i=>`<path d="M${120+i*280} 150 L${180+i*280} 210" stroke="#a8653a" stroke-width="12" stroke-linecap="round"/><path d="M${120+i*280} 150 L${180+i*280} 210" ${E(2)}/>`).join("")}
  <!-- ladder up to the loft -->
  <g transform="translate(1840 0)"><path d="M-22 150 L-30 440 M22 150 L30 440" stroke="#c99366" stroke-width="10" stroke-linecap="round"/>${[190,240,290,340,390].map(i=>`<path d="M${-22-(i-150)*.028} ${i} H${22+(i-150)*.028}" stroke="#c99366" stroke-width="8" stroke-linecap="round"/>`).join("")}</g>
  <!-- rainbow bunting + big rainbow banner -->
  <path d="M0 160 Q${e/2} 176 ${e} 160" fill="none" ${E(2)}/>${n}
  <g transform="translate(${e/2+60} 236)">${en.map((i,o)=>`<rect x="${-180+o*60}" y="-26" width="60" height="44" fill="${i}"/>`).join("")}<rect x="-180" y="-26" width="360" height="44" rx="4" fill="none" ${E(4)}/>
    <path d="M-180 -26 L-200 -4 L-180 18 M180 -26 L200 -4 L180 18" fill="#ff8fab" ${E(3)}/>
    <text x="0" y="6" text-anchor="middle" font-size="26" font-weight="900" fill="#fff" stroke="${Ae}" stroke-width="5" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g>
  <!-- round windows with daylight -->
  ${[440,1720].map(i=>`<circle cx="${i}" cy="236" r="34" fill="#c7e8ff" ${E(4)}/><path d="M${i-34} 236 H${i+34} M${i} 202 V270" ${E(3)}/>`).join("")}
  ${s}
  <!-- the big door (back outside) -->
  <rect x="24" y="200" width="206" height="244" rx="10" fill="#b5703f" ${E(4)}/>
  <rect x="38" y="214" width="178" height="230" fill="#c7e8ff"/><path d="M38 360 Q120 330 216 352 V444 H38 Z" fill="#a6e3a0"/><circle cx="180" cy="250" r="16" fill="#ffe066"/>
  <path d="M38 214 H216 V444 M38 214 V444" fill="none" ${E(4)}/>
  <!-- straw floor -->
  <rect x="0" y="438" width="${e}" height="162" fill="#f2d58a"/><path d="M0 440 H${e}" ${E(4)}/>
  ${Array.from({length:70},(i,o)=>{const a=o*137%e,r=470+o*53%120;return`<path d="M${a} ${r} l${14+o%3*4} ${o%2?-4:4}" stroke="#d9a93f" stroke-width="3" stroke-linecap="round"/>`}).join("")}
  <!-- feed station -->
  <g transform="translate(356 0)"><rect x="-70" y="456" width="140" height="34" rx="12" fill="#fff6e6" ${E(3)}/><text x="0" y="480" text-anchor="middle" font-size="16" font-weight="900" fill="${Ae}" font-family="Nunito, system-ui, sans-serif">FOOD 🥕🍎🌾</text></g>
  ${Ln(1790,590,.8)}${Ln(1700,600,.65)}
  ${[290,660,1330,1590].map(d7).join("")}
  </svg>`}const bi=600,Ut="#5a3d5c",ne=(e=4)=>`stroke="${Ut}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function Po(e){const t=fo[e].seats,n=t<=2?140:t===4?110:100,s=(t-1)/2;return Array.from({length:t},(i,o)=>({x:fo[e].x+(o-s)*n,y:558-Math.abs(o-s)*8}))}const $p=["#ff7eb3","#ffd43b","#66d9e8","#d0bfff","#fff"],an=(e,t,n=1,s="#fff")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -9 L2.2 -2.4 L9 -2.2 L3.4 2.2 L5.4 9 L0 4.6 L-5.4 9 L-3.4 2.2 L-9 -2.2 L-2.2 -2.4 Z" fill="${s}" stroke="${Ut}" stroke-width="1.2" stroke-linejoin="round"/>`;function xp(e,t,n,s){const i=`<path d="M36 ${t} Q ${e/2} ${t+n+8} ${e-36} ${t}" fill="none" stroke="${Ut}" stroke-width="3"/>`,o=Array.from({length:s},(a,r)=>{const l=s===1?.5:r/(s-1),c=48+l*(e-96),p=t+Math.sin(l*Math.PI)*n,d=$p[r%$p.length];return`<g class="bulb" style="animation-delay:-${r%8*.22}s"><line x1="${c}" y1="${p-16}" x2="${c}" y2="${p-6}" stroke="${Ut}" stroke-width="2"/><circle cx="${c}" cy="${p}" r="7.5" fill="${d}" ${ne(2)}/><circle cx="${c-2}" cy="${p-2}" r="2.2" fill="#fff" opacity=".85"/></g>`}).join("");return i+o}const Oi=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">
  <ellipse cx="0" cy="22" rx="42" ry="12" fill="#000" opacity=".12"/>
  <path d="M-40 10 Q-48 -22 -10 -28 Q10 -46 34 -18 Q50 2 34 18 Q8 32 -24 20 Q-42 16 -40 10 Z" fill="${n}" ${ne(3)}/>
  <path d="M-18 -6 Q-4 -20 14 -4" fill="none" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/>
  <circle cx="16" cy="6" r="4" fill="#fff" opacity=".35"/>
</g>`,Mp=(e,t,n)=>`<g transform="translate(${e} ${t})">
  <ellipse cx="0" cy="16" rx="28" ry="9" fill="#000" opacity=".12"/>
  <ellipse cx="0" cy="4" rx="30" ry="20" fill="${n}" ${ne(3)}/>
  <ellipse cx="-6" cy="-2" rx="12" ry="7" fill="#fff" opacity=".35"/>
  <path d="M0 -16 V-28" ${ne(3)}/><circle cy="-32" r="6" fill="#ffd43b" ${ne(2)}/>
</g>`;function Wi(e,t,n,s,i,o=""){return`<g class="photoFrame${o}" transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-40" y="-52" width="80" height="104" rx="6" fill="#fff" ${ne(3.5)}/>
    <rect x="-32" y="-44" width="64" height="72" rx="4" fill="${s}"/>
    ${i}
    <rect x="-10" y="-58" width="20" height="10" rx="2" fill="#ffe8a3" opacity=".85" transform="rotate(-8)"/>
  </g>`}function Go(e,t,n,s,i){return`<g transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-28" y="-34" width="56" height="68" rx="3" fill="#fff" ${ne(3)}/>
    <rect x="-22" y="-28" width="44" height="40" fill="${s}"/>
    ${i}
  </g>`}function Yo(e,t,n,s){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="36" rx="26" ry="8" fill="#000" opacity=".12"/>
    <path d="M-18 36 L-12 -2 H12 L18 36 Z" fill="${n}" ${ne(3)}/>
    <ellipse cx="0" cy="0" rx="16" ry="6" fill="#c9a27a" ${ne(2)}/>
    <ellipse cx="-16" cy="-16" rx="16" ry="22" fill="${s}" ${ne(3)} transform="rotate(-18)"/>
    <ellipse cx="16" cy="-18" rx="16" ry="22" fill="${s}" ${ne(3)} transform="rotate(16)"/>
    <ellipse cx="0" cy="-28" rx="14" ry="20" fill="${s}" ${ne(3)}/>
    <circle cx="0" cy="-36" r="6" fill="#ff8ec8" ${ne(2)}/>
  </g>`}function f7(e,t){return`<g transform="translate(${e} ${t})">
    <ellipse cx="28" cy="118" rx="32" ry="8" fill="#000" opacity=".12"/>
    <rect width="56" height="118" rx="10" fill="#e7fbff" ${ne()}/>
    <rect y="52" width="56" height="8" fill="#d0f4ff" ${ne(2)}/>
    <rect x="44" y="18" width="6" height="22" rx="3" fill="#ffd43b" ${ne(2)}/>
    <rect x="44" y="70" width="6" height="28" rx="3" fill="#ffd43b" ${ne(2)}/>
    <rect x="8" y="12" width="28" height="22" rx="4" fill="#fff" ${ne(2)}/>
    <circle cx="16" cy="22" r="4" fill="#ff8ec8"/><circle cx="28" cy="24" r="3" fill="#ffd43b"/>
    <path d="M18 78 C14 72 8 74 12 82 C15 88 18 90 18 90 C18 90 21 88 24 82 C28 74 22 72 18 78 Z" fill="#ff4d94" ${ne(1.5)}/>
  </g>`}function g7(e,t,n){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="6" rx="34" ry="9" fill="#000" opacity=".1"/>
    <path d="M-46 -16 C-50 -86 -26 -108 0 -110 C26 -108 50 -86 46 -16 Z" fill="#fff6fb" ${ne()}/>
    <path d="M-32 -20 C-34 -74 -16 -90 0 -92 C16 -90 34 -74 32 -20 Z" fill="${n}"/>
    <ellipse cx="0" cy="-10" rx="40" ry="16" fill="${n}" ${ne()}/>
    <ellipse cx="-8" cy="-16" rx="14" ry="6" fill="#fff" opacity=".4"/>
    <path d="M-22 -2 L-26 16 M22 -2 L26 16" fill="none" stroke="${Ut}" stroke-width="4" stroke-linecap="round"/>
  </g>`}function h7(e){const t=fo[e],n=t.game==="four"?"Four":"Slay",s=t.game==="four"?"#7ad7ea":e===0?"#ff8ec8":"#e0b0ff",i=t.game==="four"?"#b8f2ff":e===0?"#ffd0e6":"#ead9ff",o=t.seats>=6?250:t.seats>=4?200:150;return`${Po(e).map(r=>g7(r.x,r.y,i)).join("")}
  <g transform="translate(${t.x} 500)">
    <ellipse cx="0" cy="28" rx="${o+18}" ry="20" fill="#000" opacity=".1"/>
    <rect x="-18" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ne(3)}/>
    <rect x="4" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ne(3)}/>
    <ellipse cx="0" cy="-4" rx="${o}" ry="30" fill="${s}" stroke="#ffd43b" stroke-width="6"/>
    <ellipse cx="0" cy="-4" rx="${o-16}" ry="18" fill="none" stroke="#fff" stroke-width="3" opacity=".45"/>
    <ellipse cx="${-o*.25}" cy="-12" rx="${o*.35}" ry="8" fill="#fff" opacity=".28"/>
    <text x="0" y="4" text-anchor="middle" font-size="22" font-weight="900" fill="#fff" stroke="${Ut}" stroke-width="4" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${n}</text>
  </g>`}const Vi=(e,t,n=1,s="#ff4d94")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 4 C-6 -4 -14 -2 -10 6 C-7 12 0 16 0 16 C0 16 7 12 10 6 C14 -2 6 -4 0 4 Z" fill="${s}" stroke="${Ut}" stroke-width="1.6" stroke-linejoin="round"/>`;function u7(){const e=hr,t=[[120,200],[260,250],[640,210],[900,250],[1180,190],[1560,230],[1860,180],[2100,240],[2420,200],[2520,280]];return`<svg class="grScene" viewBox="0 0 ${e} ${bi}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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
  <rect width="${e}" height="${bi}" fill="url(#grWall)"/>
  <rect y="390" width="${e}" height="80" fill="#fff6fb" opacity=".45"/>
  ${Array.from({length:8},(n,s)=>`<rect x="${40+s*330}" y="400" width="280" height="62" rx="8" fill="none" stroke="#fff" stroke-width="3" opacity=".55"/>`).join("")}
  <rect y="468" width="${e}" height="132" fill="url(#grFloor)"/>
  <rect y="464" width="${e}" height="12" fill="#ffd43b" ${ne(3)}/>
  ${[720,1500,2150].map((n,s)=>`<ellipse cx="${n}" cy="548" rx="${s===1?210:280}" ry="42" fill="${s===1?"#d8f6ff":s===0?"#ffe0f0":"#f3e8ff"}" stroke="#fff" stroke-width="4" opacity=".8"/>`).join("")}
  ${xp(e,28,22,28)}
  ${xp(e,78,16,18)}
  ${t.map(([n,s],i)=>an(n,s,.7+i%3*.28,i%2?"#fff":"#ffd43b")).join("")}

  <g transform="translate(1180 70)">
    <rect x="20" y="20" width="220" height="150" rx="16" fill="url(#grSky)" ${ne()}/>
    <path d="M20 70 H240 M130 20 V170" ${ne(3)}/>
    <circle cx="78" cy="48" r="14" fill="#ffd43b" ${ne(2)}/>
    <path d="M8 36 Q20 90 8 150" fill="#ff8ec8" ${ne(3)}/><path d="M252 36 Q240 90 252 150" fill="#d0bfff" ${ne(3)}/>
  </g>

  <g class="neonSign" transform="translate(560 168)">
    <g class="neonSignArt">
    <rect x="-228" y="-58" width="456" height="108" rx="28" fill="#2b1430" ${ne(5)}/>
    <rect class="neonRing" x="-214" y="-44" width="428" height="80" rx="22" fill="none" stroke="#ff4d94" stroke-width="4"/>
    <path d="M-150 8 C-162 -14 -186 -8 -174 12 C-166 26 -150 36 -150 36 C-150 36 -134 26 -126 12 C-114 -8 -138 -14 -150 8 Z" fill="#ff4d94" stroke="#ffd0ea" stroke-width="2"/>
    <text x="6" y="16" text-anchor="middle" font-size="40" font-weight="900" fill="#ff7eb3" stroke="#fff6fb" stroke-width="2" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">SLAY CLUB</text>
    </g>
  </g>

  ${Wi(500,340,-6,"#ffe0f0",`${Vi(0,8,1.4)}${an(-18,-16,.7,"#ffd43b")}${an(18,-10,.55,"#66d9e8")}`," frameAtHead")}
  ${Wi(270,196,-8,"#ffe0f0",`${Vi(0,8,1.4)}${an(-18,-16,.7,"#ffd43b")}${an(18,-10,.55,"#66d9e8")}`," framePhone")}
  ${Wi(980,240,5,"#e7fbff",`<ellipse cx="0" cy="6" rx="16" ry="12" fill="#fff" ${ne(2)}/><path d="M-6 6 Q0 -8 6 6" fill="none" stroke="${Ut}" stroke-width="2"/><path d="M0 18 V28 M-12 24 H12" ${ne(2)}/>`)}
  ${Wi(1680,255,-4,"#fff3c4",`${an(0,2,1.5,"#ffd43b")}`)}
  ${Wi(2360,245,6,"#f3e8ff",`${Vi(0,4,1.3,"#d0bfff")}`)}
  ${Go(400,300,8,"#fff0f6",Vi(0,-4,1.1))}
  ${Go(820,310,-7,"#e7fbff",an(0,-6,1,"#66d9e8"))}
  ${Go(1900,300,9,"#fff6e6",an(0,-6,1,"#ffd43b"))}
  ${Go(2280,320,-8,"#ffe0f0",Vi(0,-4,1))}

  <g class="disco" transform="translate(1288 36)">
    <line y1="0" y2="22" stroke="${Ut}" stroke-width="3"/>
    <circle cy="44" r="26" fill="url(#disco)" ${ne(3)}/>
    <path d="M-14 36 L0 56 L14 36 M-8 48 H8" fill="none" stroke="#fff" stroke-width="2.5"/>
    ${an(-30,20,.45)}${an(32,28,.4,"#ffd43b")}
  </g>

  <g transform="translate(86 292)">
    <rect width="78" height="168" rx="12" fill="#ff8ec8" ${ne()}/>
    <rect x="8" y="10" width="62" height="36" rx="8" fill="#fff6e6" ${ne(2)}/>
    <text x="39" y="34" text-anchor="middle" font-size="16" font-weight="900" fill="${Ut}" font-family="Nunito, ui-rounded, system-ui, sans-serif">MAP</text>
    <circle cx="62" cy="96" r="5" fill="#ffd43b" ${ne(2)}/>
    <rect x="22" y="118" width="34" height="8" rx="3" fill="#fff" opacity=".45"/>
  </g>

  ${Yo(40,400,"#ffd43b","#8ce99a")}
  ${Yo(1080,392,"#ff8ec8","#69db7c")}
  ${Yo(1600,400,"#d0bfff","#8ce99a")}
  ${Yo(2520,396,"#66d9e8","#69db7c")}
  ${f7(200,348)}
  <g transform="translate(2420 360)">
    <rect width="130" height="100" rx="14" fill="#fff6fb" ${ne()}/>
    <rect y="28" width="130" height="10" fill="#ffd0e6" ${ne(2)}/>
    <circle cx="28" cy="64" r="12" fill="#ffd43b" ${ne(2)}/><circle cx="64" cy="66" r="10" fill="#ff8ec8" ${ne(2)}/><rect x="86" y="52" width="28" height="22" rx="6" fill="#66d9e8" ${ne(2)}/>
    <text x="65" y="20" text-anchor="middle" font-size="13" font-weight="900" fill="${Ut}" font-family="Nunito, ui-rounded, system-ui, sans-serif">SNACKS</text>
  </g>

  ${Oi(330,455,"#ff8ec8",1.05)}
  ${Oi(1120,468,"#d0bfff")}
  ${Oi(1360,470,"#8ce4f2",.9)}
  ${Oi(1780,462,"#ffd43b")}
  ${Mp(1480,500,"#ffb3d9")}
  ${Mp(2e3,505,"#c9b3ff")}
  ${Oi(2550,468,"#ff8ec8",.85)}

  ${fo.map((n,s)=>h7(s)).join("")}
  </svg>`}const m7=`<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="10" fill="#2b1430" stroke="${Ut}" stroke-width="3"/><path d="M24 32 C16 26 12 22 14 17 C16 13 21 14 24 18 C27 14 32 13 34 17 C36 22 32 26 24 32 Z" fill="#ff4d94" stroke="#ffd0ea" stroke-width="1.5"/><circle cx="10" cy="8" r="2.2" fill="#ffd43b"/><circle cx="24" cy="5" r="2.2" fill="#66d9e8"/><circle cx="38" cy="8" r="2.2" fill="#d0bfff"/></svg>`,W="#5a3d5c",y7=`<svg viewBox="0 0 120 100"><rect x="0" y="62" width="120" height="38" rx="14" fill="#9fe0aa" stroke="${W}" stroke-width="3"/>
  <path d="M18 70 L30 22 L42 70 M78 70 L90 22 L102 70" fill="none" stroke="#8ecae6" stroke-width="5" stroke-linecap="round"/><path d="M26 22 H94" stroke="#ff8fab" stroke-width="7" stroke-linecap="round"/>
  <path d="M50 22 V54 M66 22 V54" stroke="${W}" stroke-width="2.5"/><rect x="45" y="52" width="26" height="7" rx="3" fill="#ff9f68" stroke="${W}" stroke-width="2.5"/>
  <circle cx="104" cy="14" r="9" fill="#ffd166" stroke="${W}" stroke-width="3"/></svg>`,bg=`<svg viewBox="0 0 120 100"><path d="M20 50 L60 16 L100 50" fill="#ff8fab" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><rect x="28" y="48" width="64" height="44" rx="6" fill="#fff6e6" stroke="${W}" stroke-width="4"/>
  <rect x="52" y="64" width="16" height="28" rx="4" fill="#c9a0dc" stroke="${W}" stroke-width="3"/><rect x="34" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${W}" stroke-width="3"/><rect x="73" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${W}" stroke-width="3"/></svg>`,Qc=`<svg viewBox="0 0 120 100"><path d="M40 18 L24 28 L14 46 L30 52 L34 44 V88 H86 V44 L90 52 L106 46 L96 28 L80 18 Q60 34 40 18 Z" fill="#8ecae6" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><circle cx="60" cy="58" r="7" fill="#fff3b0" stroke="${W}" stroke-width="3"/></svg>`,ue=e=>`<div class="wnArt">${e}</div>`,vg=`<svg viewBox="0 0 120 100"><rect x="16" y="58" width="74" height="24" rx="10" fill="#fff" stroke="${W}" stroke-width="4"/><circle cx="32" cy="70" r="7" fill="#ff8fab" stroke="${W}" stroke-width="3"/><circle cx="52" cy="70" r="7" fill="#ffe066" stroke="${W}" stroke-width="3"/><circle cx="72" cy="70" r="7" fill="#8ecae6" stroke="${W}" stroke-width="3"/><path d="M86 46 l14 -16 8 8 -14 16z" fill="#ffd166" stroke="${W}" stroke-width="3" stroke-linejoin="round"/><rect x="78" y="44" width="12" height="24" rx="4" fill="#c9a0dc" stroke="${W}" stroke-width="3"/></svg>`,w7=`<svg viewBox="0 0 120 100">${en.map((e,t)=>`<path d="M${12+t*6} 84 A${48-t*6} ${48-t*6} 0 0 1 ${108-t*6} 84" fill="none" stroke="${e}" stroke-width="6"/>`).join("")}
  <path d="M38 92 V62 L60 44 L82 62 V92 Z" fill="#ef5b5b" stroke="${W}" stroke-width="3.5" stroke-linejoin="round"/><rect x="52" y="70" width="16" height="22" fill="#fff6e6" stroke="${W}" stroke-width="3"/></svg>`,b7=`<svg viewBox="0 0 120 100"><g transform="translate(22 8) scale(1.9)">${uo.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g><g transform="translate(52 22) scale(1.4)">${uo.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g></svg>`,Nl=(e,t,n,s)=>`<g transform="translate(${t} ${n}) scale(${s})">${e.replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}</g>`,v7=`<svg viewBox="0 0 120 100"><circle cx="60" cy="50" r="40" fill="#fff" stroke="${W}" stroke-width="4"/>${Nl(fc(wt({skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6"})).replace('viewBox="14 2 72 74"','viewBox="0 0 100 160"'),26,12,.68)}<circle cx="60" cy="50" r="40" fill="none" stroke="#ff6b9a" stroke-width="5"/></svg>`,k7=`<svg viewBox="0 0 120 100"><rect x="8" y="28" width="104" height="64" rx="16" fill="#fff0f6" stroke="${W}" stroke-width="4"/><path d="M8 40 L60 12 L112 40" fill="#ff6b9a" stroke="${W}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M60 58 C52 48 40 50 46 60 C50 68 60 74 60 74 C60 74 70 68 74 60 C80 50 68 48 60 58 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  ${[18,34,50,66,82,98].map((e,t)=>`<circle cx="${e}" cy="24" r="4" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" stroke="${W}" stroke-width="1.5"/>`).join("")}</svg>`,_7=`<svg viewBox="0 0 120 100"><rect x="28" y="8" width="64" height="84" rx="12" fill="#fff" stroke="${W}" stroke-width="4"/><rect x="28" y="8" width="64" height="84" rx="12" fill="none" stroke="#ff7eb3" stroke-width="6"/><path d="M48 36 L54 24 L60 34 L68 20 L76 34 L82 24 L88 36 Z" fill="#ffd43b" stroke="${W}" stroke-width="2" stroke-linejoin="round"/><text x="60" y="78" text-anchor="middle" font-size="22" font-weight="900" fill="#ff4d94" font-family="Nunito, ui-rounded, system-ui, sans-serif">SLAY</text></svg>`,$7=`<svg viewBox="0 0 120 100"><rect x="10" y="16" width="100" height="72" rx="14" fill="#fff6fb" stroke="${W}" stroke-width="4"/>
  <path d="M36 58 C28 48 18 50 24 60 C28 68 36 74 36 74 C36 74 44 68 48 60 C54 50 44 48 36 58 Z" fill="#ff4d94" stroke="${W}" stroke-width="2"/>
  <path d="M78 28 L82 40 H94 L84 48 L88 60 L78 52 L68 60 L72 48 L62 40 H74 Z" fill="#66d9e8" stroke="${W}" stroke-width="2"/></svg>`,kg=`<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="22" rx="6" fill="#fff" stroke="${W}" stroke-width="3"/><path d="M6 26 H42 M14 18 V40 M22 18 V40 M30 18 V40 M36 18 V40" stroke="${W}" stroke-width="2.4"/><rect x="4" y="12" width="40" height="8" rx="4" fill="#9ad7f5" stroke="${W}" stroke-width="3"/><ellipse cx="20" cy="32" rx="5" ry="3" fill="#ffe0ec"/><ellipse cx="30" cy="32" rx="5" ry="3" fill="#c9e7ff"/></svg>`,x7=`<svg viewBox="0 0 120 100"><ellipse cx="60" cy="72" rx="50" ry="20" fill="#ffc2d4" stroke="${W}" stroke-width="4"/><ellipse cx="60" cy="72" rx="32" ry="11" fill="#fff" stroke="${W}" stroke-width="3"/><path d="M60 58 C50 46 36 48 42 60 C48 70 60 78 60 78 C60 78 72 70 78 60 C84 48 70 46 60 58 Z" fill="#ff4d94" stroke="${W}" stroke-width="3"/><path d="M22 40 Q28 28 36 36" fill="none" stroke="#7dce8a" stroke-width="4" stroke-linecap="round"/><circle cx="22" cy="38" r="5" fill="#ffd166" stroke="${W}" stroke-width="2"/></svg>`,M7=`<svg viewBox="0 0 120 100"><path d="M16 50 L60 14 L104 50" fill="#ff8fab" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><rect x="26" y="48" width="68" height="40" rx="10" fill="#fff6ea" stroke="${W}" stroke-width="4"/><path d="M42 88 V60 Q60 44 78 60 V88" fill="#ffe8c7" stroke="${W}" stroke-width="3"/><circle cx="82" cy="64" r="7" fill="#bde0fe" stroke="${W}" stroke-width="3"/><circle cx="80" cy="62" r="2" fill="#fff"/></svg>`,L7=`<svg viewBox="0 0 120 100"><rect x="28" y="38" width="64" height="42" rx="8" fill="#8ecae6" stroke="${W}" stroke-width="4"/><path d="M28 44 L60 68 L92 44" fill="none" stroke="${W}" stroke-width="4"/><path d="M76 30 V16" stroke="${W}" stroke-width="4" stroke-linecap="round"/><path d="M76 16 H96 L90 23 L96 30 H76 Z" fill="#ff6b6b" stroke="${W}" stroke-width="3"/></svg>`,E7=`<svg viewBox="0 0 120 100"><rect x="8" y="32" width="48" height="40" rx="14" fill="#fff3b0" stroke="${W}" stroke-width="4"/><rect x="64" y="32" width="48" height="40" rx="14" fill="#fff" stroke="${W}" stroke-width="4"/><path d="M26 44 L40 52 L26 60 Z" fill="${W}"/><circle cx="88" cy="52" r="6" fill="#ff8fab" stroke="${W}" stroke-width="3"/></svg>`,C7=`<svg viewBox="0 0 120 100"><rect x="16" y="18" width="36" height="58" rx="6" fill="#fff" stroke="${W}" stroke-width="4"/><rect x="62" y="24" width="42" height="52" rx="6" fill="#e7f6ff" stroke="${W}" stroke-width="4"/><circle cx="34" cy="66" r="2.4" fill="${W}"/><circle cx="83" cy="66" r="2.4" fill="${W}"/></svg>`,_g=`<svg viewBox="0 0 120 100"><rect x="28" y="16" width="64" height="72" rx="16" fill="#fff" stroke="${W}" stroke-width="4"/><path d="M40 36 H80 M40 52 H80 M40 68 H80" fill="none" stroke="${W}" stroke-width="5" stroke-linecap="round"/><circle cx="92" cy="24" r="12" fill="#ff6b9a" stroke="${W}" stroke-width="3"/><text x="92" y="29" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" font-family="Nunito, ui-rounded, system-ui, sans-serif">1</text></svg>`,S7=`<svg viewBox="0 0 120 100"><rect x="6" y="10" width="108" height="80" rx="18" fill="#2a2158" stroke="${W}" stroke-width="4"/><circle cx="34" cy="42" r="14" fill="#ffd166" stroke="${W}" stroke-width="3"/><path d="M78 28 a16 16 0 1 0 0 32 a12 12 0 1 1 0 -32z" fill="#fff6e4" stroke="${W}" stroke-width="3"/><circle cx="92" cy="30" r="2" fill="#fff"/><circle cx="70" cy="24" r="1.6" fill="#fff"/><circle cx="100" cy="48" r="1.6" fill="#fff"/></svg>`,z7=`<svg viewBox="0 0 120 100"><circle cx="60" cy="52" r="34" fill="#fff6e4" stroke="${W}" stroke-width="4"/><path d="M60 52 V32 M60 52 L76 60" stroke="${W}" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="52" r="3" fill="${W}"/><path d="M28 22 l4 6 M92 22 l-4 6" stroke="#ffb15c" stroke-width="4" stroke-linecap="round"/></svg>`,$g=`<svg viewBox="0 0 120 100"><path d="M60 18 L72 46 H96 L78 62 L84 90 L60 74 L36 90 L42 62 L24 46 H48 Z" fill="#ffd166" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><path d="M60 48 L28 92 H92 Z" fill="#2f6b4f" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><rect x="52" y="88" width="16" height="8" rx="2" fill="#c44558" stroke="${W}" stroke-width="3"/></svg>`,xg=[{v:10,title:"Winter Cheer!",lines:[{art:ue($g),text:"The <b>Winter Cheer</b> pack is in your drawer!"}]},{v:9,title:"Everything's tidied into the Menu!",lines:[{art:ue(_g),text:"Everything's tidied into the <b>Menu</b>!"},{art:ue(S7),text:"The world follows the <b>clock</b>: morning, day, golden evening, and night."},{art:ue(z7),text:"Tap the <b>sun</b> and the <b>moon</b>. <b>Auto</b> follows the clock."}]},{v:8,title:"Make your look!",lines:[{art:ue(L7),text:"Leave a <b>letter</b> in a friend's mailbox!"},{art:ue(E7),text:"Tap <b>Play</b> or <b>Decorate</b>!"},{art:ue(Qc),text:"<b>Make your look!</b> New hair, clothes, and colors."},{art:ue(C7),text:"Update every iPad to see the <b>new outfits</b>!"}]},{v:7,title:"New Nursery!",lines:[{art:ue(kg),text:"A new <b>Nursery</b> room, with a <b>crib</b> and a rocker!"},{art:ue(x7),text:"The <b>Cozy Cottage</b> furniture pack is in your drawer!"},{art:ue(M7),text:"A <b>dog kennel</b> and a <b>cat tower</b> for your pets!"}]},{v:6,title:"The clubhouse is open!",lines:[{art:ue(k7),text:"A glam <b>clubhouse</b> on the map!"},{art:ue(_7),text:"Play <b>Slay</b> with friends at a table!"},{art:ue($7),text:"Line up <b>hearts</b> or <b>stars</b>!"}]},{v:5,title:"Your house looks even cozier!",lines:[{art:ue(vg),text:"Wallpaper and floors show their <b>real patterns</b> when you paint!"},{art:ue(mi(0,"sit")),text:"Your cat is <b>big and cozy</b>, just like the toy cat."},{art:ue(bg),text:"Tap <b>home</b> to come back from the map, the park, or the ranch."}]},{v:4,title:"A map of our neighborhood!",lines:[{art:ue(pc),text:"Tap the <b>map</b> to go anywhere!"},{art:ue(v7),text:"Tap a friend's face to <b>find her</b>."},{art:ue(Zl(0)),text:"The petting zoo is inside the <b>barn</b> now!"}]},{v:3,title:"Rainbow Ranch is open!",lines:[{art:ue(w7),text:"Visit <b>Rainbow Ranch</b>!"},{art:ue(Zl(1)),text:"Pet and feed animals at the <b>petting zoo</b>."},{art:ue(`<svg viewBox="0 0 160 130">${Nl(Vc(4),0,0,1)}</svg>`),text:"Ride <b>horses</b> and the <b>rainbow pony</b>!"},{art:ue(b7),text:"Collect <b>eggs</b> from the hens."},{art:ue(`<svg viewBox="0 0 70 90">${Nl(wg({seed:"carrot",wet:1},3,0),0,0,1)}</svg>`),text:"Grow carrots and flowers in the <b>garden</b>."}]},{v:2,title:"What's new!",lines:[{art:ue(y7),text:"A new <b>park</b>! Swing, slide and splash with friends."},{art:ue(mi(3,"sit")),text:"Adopt a <b>cat</b>! She lives in your house."},{art:ue(ho(3,"stand")),text:"Adopt a <b>dog</b>! Take it to the park to play fetch."}]}],Mg=xg[0].v,Lg={v:Mg,title:"Welcome to your cozy house!",lines:[{art:ue(bg),text:"Drag furniture into your rooms."},{art:ue(Qc),text:"Dress up your friends."},{art:ue(mi(0,"sit")),text:"Tap the paw to adopt a pet!"}]},Eg=Nt("cozy-whatsnew"),P7=1;function T7(){try{const e=Number(localStorage.getItem(Eg)),t=["cozy-house","cozy-house-v1","cozy-hood"].some(i=>localStorage.getItem(Nt(i))!==null);if(!e&&!t)return{kind:"welcome",entries:[Lg]};const n=e||P7,s=xg.filter(i=>i.v>n).slice(0,3);return s.length?{kind:"news",entries:s}:{kind:"none",entries:[]}}catch{return{kind:"none",entries:[]}}}function B7(){try{localStorage.setItem(Eg,String(Mg))}catch{}}function R7(e,t){const n=e==="welcome"?Lg.title:t[0].title,s=t.flatMap(i=>i.lines).slice(0,5);return`<div class="wnBadge">${e==="welcome"?Zf:t[0].v>=10?$g:t[0].v>=9?_g:t[0].v>=8?Qc:t[0].v>=7?kg:t[0].v>=6?m7:t[0].v>=5?vg:t[0].v>=4?pc:t[0].v>=3?a7:W1}</div>
    <h2 class="wnTitle">${n}</h2>
    <div class="wnList ${s.length>3?"many":""}">${s.map((i,o)=>`<div class="wnLine" style="animation-delay:${.15+o*.18}s">${i.art}<p>${i.text}</p></div>`).join("")}</div>
    <button class="wnGo" id="wnGo">Let's play!</button>`}const Cg="cozy-sky",Fl={tint:"#fff6e4",body:"#ffe9f0",pageA:"#ffe0ec",pageB:"#e6ddff",spot:"#fff6fa",fieldA:"#c9f2c7",fieldB:"#8fd18a",win:"#a2d2ff",win2:"#b9e3ff",house:"#fff3b0",mapTint:"#ffffff"},Lp={tint:"#e7b4cc",body:"#f6dce8",pageA:"#ffd0e6",pageB:"#e6d2f8",spot:"#fff0f6",fieldA:"#f6d0e2",fieldB:"#dcc8f0",win:"#f6c6de",win2:"#e4d0f8",house:"#ffe0ee",mapTint:"#f3c4dc"},Ep={tint:"#ffb38a",body:"#ffe4dc",pageA:"#ffe0d6",pageB:"#f0d8ea",spot:"#fff6ee",fieldA:"#d4eec4",fieldB:"#a3cb8a",win:"#ffc48a",win2:"#ffd4b0",house:"#ffc56a",mapTint:"#ffb38a"},si={tint:"#2a2350",body:"#14182c",pageA:"#1c1748",pageB:"#101832",spot:"#2c2458",fieldA:"#1a2458",fieldB:"#0c1028",win:"#1a245c",win2:"#12183a",house:"#ffe9a0",mapTint:"#102044"},Ko=[{m:0,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...si},{m:5*60,opacity:.7,map:.78,glow:.95,stars:.95,glass:1,phase:"night",...si},{m:5*60+35,opacity:.42,map:.34,glow:.55,stars:.42,glass:.8,phase:"dawn",...Lp},{m:6*60+25,opacity:.14,map:.16,glow:.28,stars:.08,glass:.9,phase:"dawn",...Lp},{m:7*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Fl},{m:16*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Fl},{m:17*60+5,opacity:.08,map:.1,glow:.4,stars:.02,glass:.55,phase:"golden",...Ep},{m:18*60+10,opacity:.18,map:.2,glow:.62,stars:.06,glass:.82,phase:"golden",...Ep},{m:19*60+5,opacity:.52,map:.68,glow:.9,stars:.55,glass:1,phase:"night",...si},{m:20*60+10,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...si},{m:24*60,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...si}],A7={phase:"day",opacity:0,map:0,glow:0,stars:0,glass:0,...Fl},D7={phase:"night",opacity:.7,map:.78,glow:1,stars:1,glass:1,...si};function Cp(e){const t=e.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function Ft(e,t,n){const s=Cp(e),i=Cp(t),o=a=>Math.round(s[a]+(i[a]-s[a])*n).toString(16).padStart(2,"0");return"#"+o(0)+o(1)+o(2)}const Ui=(e,t,n)=>e+(t-e)*n;function I7(e){const t=e.getHours()*60+e.getMinutes()+e.getSeconds()/60;let n=0;for(;n<Ko.length-2&&t>=Ko[n+1].m;)n++;const s=Ko[n],i=Ko[n+1],o=Math.max(1,i.m-s.m),a=Math.max(0,Math.min(1,(t-s.m)/o));return{phase:a<.5?s.phase:i.phase,opacity:Ui(s.opacity,i.opacity,a),map:Ui(s.map,i.map,a),glow:Ui(s.glow,i.glow,a),stars:Ui(s.stars,i.stars,a),glass:Ui(s.glass,i.glass,a),tint:Ft(s.tint,i.tint,a),body:Ft(s.body,i.body,a),pageA:Ft(s.pageA,i.pageA,a),pageB:Ft(s.pageB,i.pageB,a),spot:Ft(s.spot,i.spot,a),fieldA:Ft(s.fieldA,i.fieldA,a),fieldB:Ft(s.fieldB,i.fieldB,a),win:Ft(s.win,i.win,a),win2:Ft(s.win2,i.win2,a),house:Ft(s.house,i.house,a),mapTint:Ft(s.mapTint,i.mapTint,a)}}function Sp(e,t){return t==="day"?A7:t==="night"?D7:I7(e)}function H7(e){return e==="day"||e==="night"||e==="auto"}function O7(e,t=!1){return t?!0:e==="lamp"||e==="window"||e==="stars"||e==="tv"||/lamp|light|lantern|candle|string-lights|night-light/i.test(e)}function zp(){try{if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches)return!0}catch{}if(typeof navigator>"u")return!1;const e=navigator.hardwareConcurrency;if(typeof e=="number"&&e>0&&e<=2)return!0;const t=navigator.deviceMemory;return typeof t=="number"&&t>0&&t<=2}const Pp={day:"night",night:"auto",auto:"day"},Tp={day:"Day",night:"Night",auto:"Auto"},Sg='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><g fill="none" stroke="#ffb15c" stroke-width="3" stroke-linecap="round"><path d="M24 7 V13 M24 35 V41 M7 24 H13 M35 24 H41 M12 12 L16 16 M32 32 L36 36 M36 12 L32 16 M16 32 L12 36"/></g></svg>',W7='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 8 a14 14 0 1 0 0 32 a11 11 0 1 1 0 -32z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="3"/><circle cx="14" cy="16" r="1.7" fill="#ffd166"/><circle cx="18" cy="28" r="1.2" fill="#fff"/><circle cx="11" cy="24" r="1" fill="#fff"/></svg>',V7='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="28" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M34 8 a9 9 0 1 0 0 18 a7 7 0 1 1 0 -18z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="2.5"/><circle cx="14" cy="16" r="1.3" fill="#ffd166"/></svg>',U7={day:Sg,night:W7,auto:V7},Q7="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)";function q7(){if(document.getElementById("skyInk"))return;const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.id="skyInk",e.setAttribute("aria-hidden","true"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.style.cssText="position:fixed;left:0;top:0;width:0;height:0;overflow:hidden;pointer-events:none",e.innerHTML=`
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
  `,document.head.appendChild(t)}function Z7(e){q7();const t=zp();let n=F7(),s=null,i=Sp(new Date,n),o=0;e.innerHTML=`<button type="button" class="skyBtn" aria-label="Day. Tap for night.">${Sg}</button>`;const a=e.querySelector("button"),r=h=>{i=h;const m=document.documentElement,b=Math.max(0,Math.min(1,h.glow));m.style.setProperty("--sky-opacity",h.opacity.toFixed(3)),m.style.setProperty("--sky-map-opacity",h.map.toFixed(3)),m.style.setProperty("--sky-glow",b.toFixed(3)),m.style.setProperty("--sky-stars",h.stars.toFixed(3)),m.style.setProperty("--sky-glass",h.glass.toFixed(3)),m.style.setProperty("--sky-tint",h.tint),m.style.setProperty("--sky-body",h.body),m.style.setProperty("--sky-page-a",h.pageA),m.style.setProperty("--sky-page-b",h.pageB),m.style.setProperty("--sky-spot",h.spot),m.style.setProperty("--sky-field-a",h.fieldA),m.style.setProperty("--sky-field-b",h.fieldB),m.style.setProperty("--sky-win",h.win),m.style.setProperty("--sky-win-2",h.win2),m.style.setProperty("--sky-house-win",h.house),m.style.setProperty("--sky-map-tint",h.mapTint),m.style.setProperty("--sky-glow-soft",`rgba(255, 186, 80, ${(b*.72).toFixed(3)})`),m.style.setProperty("--sky-glow-hot",`rgba(255, 220, 120, ${(b*.96).toFixed(3)})`),m.style.setProperty("--sky-glow-clear","rgba(255, 186, 80, 0)"),m.style.setProperty("--sky-glow-wash",`rgba(255, 170, 70, ${(b*.55).toFixed(3)})`),m.style.setProperty("--sky-glow-map",`rgba(255, 196, 110, ${(b*.7).toFixed(3)})`);const _=h.phase==="golden"?.24:h.phase==="dawn"?.22:0,y=h.phase==="golden"?"186, 110, 52":"140, 62, 18";m.style.setProperty("--sky-shadow",`rgba(${y}, ${_.toFixed(3)})`);const u=h.phase==="night"?.55:h.phase==="golden"?.08:h.phase==="dawn"?.16:0;m.style.setProperty("--sky-vig",`rgba(12, 10, 32, ${u.toFixed(3)})`);const k=h.phase==="golden"?"255, 196, 80":h.phase==="dawn"?"255, 214, 230":"255, 246, 214";m.style.setProperty("--sky-orb",`rgba(${k}, ${Math.min(1,h.glass).toFixed(3)})`),m.dataset.sky=h.phase,m.dataset.skyChoice=n,m.classList.toggle("sky-static",t),m.classList.toggle("sky-live",!t),a.innerHTML=U7[n],a.setAttribute("aria-label",`${Tp[n]}. Tap for ${Tp[Pp[n]].toLowerCase()}.`)},l=()=>Sp(s??new Date,n),c=()=>r(l()),p=()=>{o&&clearInterval(o),o=window.setInterval(()=>{s||c()},t?6e4:1e3)},d=h=>{n=h;try{localStorage.setItem(Nt(Cg),n)}catch{}c()};a.addEventListener("click",()=>d(Pp[n])),document.documentElement.classList.toggle("sky-static",t),c(),p();const g=document.getElementById("mapWorld");g&&N7(g);try{matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",()=>{const m=zp();document.documentElement.classList.toggle("sky-static",m),document.documentElement.classList.toggle("sky-live",!m)})}catch{}try{matchMedia(Q7).addEventListener?.("change",()=>fa())}catch{}return window.addEventListener("resize",()=>fa()),new MutationObserver(()=>fa()).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{choice:()=>n,look:()=>i,setChoice(h){d(h)},freeze(h){s=h,c()}}}function fa(){const e=document.getElementById("skyMount"),t=document.getElementById("menuDaySlot");e&&t&&e.parentElement!==t&&t.appendChild(e),t&&(t.hidden=!1),e&&(e.style.left="",e.style.top="")}function N7(e){const t=document.createElement("div");t.className="skyTint",t.setAttribute("aria-hidden","true");const n=document.createElement("div");n.className="skyLamps",n.setAttribute("aria-hidden","true");const s=document.createElement("div");s.className="skyBits",s.setAttribute("aria-hidden","true"),s.innerHTML='<i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i>';const i=()=>{e.contains(t)||e.appendChild(t),e.contains(n)||e.appendChild(n),e.contains(s)||e.appendChild(s)};i(),new MutationObserver(i).observe(e,{childList:!0})}function F7(){try{const e=localStorage.getItem(Nt(Cg));if(H7(e))return e}catch{}return"auto"}const ii=[{name:"Pink",fill:"#ff7eb3",ink:"#9d174d"},{name:"Lilac",fill:"#c9b3ff",ink:"#5f3dc4"},{name:"Aqua",fill:"#66d9e8",ink:"#0b7285"},{name:"Gold",fill:"#ffd43b",ink:"#e67700"}],gt="#5a3d5c",ol=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Bp=e=>typeof e=="number"?e:{skip:10,rev:11,d2:12,wild:13,w4:14}[e]??0,Rp=e=>typeof e.v=="number"?String(e.v):e.v==="skip"?"✕":e.v==="rev"?"↻":e.v==="d2"?"+2":e.v==="w4"?"+4":"♛",j7=e=>e.v==="skip"?"Nope":e.v==="rev"?"Flip":e.v==="d2"?"+2":e.v==="wild"||e.v==="w4"?"Crown":"",bs=(e,t,n=1,s="#ffd43b")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -6 L1.4 -1.4 L6 -1 L1.6 1.4 L3 6 L0 3 L-3 6 L-1.6 1.4 L-6 -1 L-1.4 -1.4 Z" fill="${s}" stroke="${gt}" stroke-width="1" stroke-linejoin="round"/>`,ga=(e,t,n=1)=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 1.2 C-2.2 -1.6 -5.2 -0.6 -3.6 2.2 C-2.4 4 0 5.2 0 5.2 C0 5.2 2.4 4 3.6 2.2 C5.2 -0.6 2.2 -1.6 0 1.2 Z" fill="#ff4d94" stroke="${gt}" stroke-width="1"/>`;function G7(e){return e.v==="wild"||e.v==="w4"?`<g transform="translate(14 28)">
      <path d="M4 26 L10 8 L18 16 L24 2 L30 16 L38 8 L44 26 Z" fill="#ffd43b" stroke="${gt}" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="4" y="26" width="40" height="8" rx="2" fill="#ffd43b" stroke="${gt}" stroke-width="2.2"/>
      <circle cx="10" cy="8" r="2.4" fill="#ff7eb3"/><circle cx="24" cy="3" r="2.4" fill="#66d9e8"/><circle cx="38" cy="8" r="2.4" fill="#d0bfff"/>
      ${bs(-2,0,.7)}${bs(46,4,.65,"#fff")}${bs(22,-4,.55,"#ff7eb3")}
    </g>${e.v==="w4"?`<text x="35" y="78" text-anchor="middle" font-size="16" font-weight="900" fill="${gt}" font-family="Nunito, ui-rounded, system-ui, sans-serif">+4</text>`:""}`:e.v==="d2"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff" stroke="${gt}" stroke-width="2.4"/>
      ${ga(14,8,1.35)}${ga(32,8,1.35)}
      <path d="M12 26 Q23 34 34 26" fill="none" stroke="${gt}" stroke-width="2.4" stroke-linecap="round"/>
      ${ga(40,22,.8)}
    </g>`:e.v==="rev"?`<g fill="none" stroke="${gt}" stroke-width="3.2" stroke-linecap="round">
      <path d="M16 40 C42 22 54 52 34 60 C16 68 12 46 30 40"/>
      <path d="M14 38 L22 30 L24 42" stroke-linejoin="round"/>
    </g>${bs(48,28,.85)}${bs(20,62,.6,"#ff7eb3")}${bs(50,58,.55,"#66d9e8")}`:e.v==="skip"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff6d8" stroke="${gt}" stroke-width="2.4"/>
      <rect x="8" y="12" width="14" height="9" rx="3" fill="#2b1430"/><rect x="24" y="12" width="14" height="9" rx="3" fill="#2b1430"/>
      <path d="M22 16.5 H24 M5 14 H2 M41 14 H44" stroke="${gt}" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 27 Q23 32 34 27" fill="none" stroke="${gt}" stroke-width="2.2" stroke-linecap="round"/>
    </g>`:""}function jl(e){const t=e.c===4,n=t?{fill:"#fff8ee",ink:gt}:ii[e.c]??ii[0],s=typeof e.v=="number",i=j7(e),o=t?'<rect x="2" y="2" width="66" height="96" rx="13" fill="#fff8ee" stroke="#ff7eb3" stroke-width="4"/><rect x="5" y="5" width="60" height="90" rx="11" fill="none" stroke="#d0bfff" stroke-width="2"/><rect x="7.5" y="7.5" width="55" height="85" rx="9" fill="none" stroke="#66d9e8" stroke-width="1.6"/><rect x="9.5" y="9.5" width="51" height="81" rx="8" fill="none" stroke="#ffd43b" stroke-width="1.6"/>':`<rect x="2" y="2" width="66" height="96" rx="13" fill="${n.fill}" stroke="${gt}" stroke-width="3"/><rect x="6" y="6" width="58" height="88" rx="10" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>`,a='<ellipse cx="24" cy="20" rx="16" ry="8" fill="#fff" opacity=".38"/>',r=`fill="${n.ink}" stroke="#fff" stroke-width="3" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif"`,l=`<text x="8" y="16" font-size="13" font-weight="900" ${r}>${Rp(e)}</text>`+(s?`<text x="62" y="94" font-size="13" font-weight="900" text-anchor="end" ${r}>${Rp(e)}</text>`:""),c=s?`<text x="35" y="68" text-anchor="middle" font-size="48" font-weight="900" fill="${n.ink}" stroke="#fff" stroke-width="6" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${e.v}</text>`:`${G7(e)}${i?`<text x="35" y="92" text-anchor="middle" font-size="12" font-weight="900" ${r}>${i}</text>`:""}`;return`<svg viewBox="0 0 70 100">${o}${a}${l}${c}</svg>`}const Y7=[[18,28],[40,28],[29,46],[18,64],[40,64],[29,78]].map(([e,t])=>ga(e,t,.9)).join(""),K7=`<svg viewBox="0 0 70 100"><rect x="2" y="2" width="66" height="96" rx="13" fill="#ff4d94" stroke="${gt}" stroke-width="3"/>
  <rect x="7" y="7" width="56" height="86" rx="10" fill="none" stroke="#ffd43b" stroke-width="3"/>
  <rect x="11" y="11" width="48" height="78" rx="8" fill="#ff7eb3"/>
  ${Y7}
  <circle cx="35" cy="50" r="14" fill="#fff6fb" stroke="${gt}" stroke-width="2.4"/>
  ${bs(35,50,1.15,"#ffd43b")}
</svg>`,zg=(e,t)=>{if(t.turn<0||t.drawn!=null&&e.id!==t.drawn)return!1;const n=t.top;return e.c===4||e.c===t.color||e.v===n.v&&n.c!==4};let Gl=null,Et=null,ei=-1,Ap=-1;function Dp(e,t){Gl=e;const n=t.table,s=n.view;if(!s||!s.top){e.innerHTML="";return}n.tb!==Ap&&(Et=null,ei=-1,Ap=n.tb);const i=n.you,o=i!==null&&Array.isArray(s.hand)?s.hand.slice():[];Et!==null&&!o.some(u=>u.id===Et)&&(Et=null);const a=s.ev;let r=null;if(a&&a.n!==ei&&ei>=0&&a.k==="play"&&a.card){const u=e.querySelector(`[data-card="${a.card.id}"]`)||e.querySelector(`[data-p="${a.p}"]`);u&&(r=u.getBoundingClientRect())}const c=n.phase==="play"&&s.turn>=0,p=c&&i!==null&&s.turn===i,d=i!==null&&o.length<=2&&o.length>0&&!s.slay?.[i]&&p,g=p&&s.drawn==null&&n.phase==="play",h=p&&s.drawn!=null&&n.phase==="play",m=o.sort((u,k)=>u.c-k.c||Bp(u.v)-Bp(k.v)),b=c?n.players[s.turn]:"",_=c?p?"Your turn!":`${ol(t.name(b))}'s turn`:"",y=ii[s.color]??ii[0];if(e.innerHTML=`<div class="slayFelt">
    ${_?`<div class="whose ${p?"yours":""}" id="whoseTurn">${_}<span class="slayDir" aria-hidden="true">${s.dir===1?"→":"←"}</span></div>`:""}
    <div class="slayOpps">${n.players.map((u,k)=>k===i?"":`<div class="slayOpp ${s.turn===k?"isTurn":""}" data-p="${k}" data-count="${s.counts?.[k]??0}"><span class="chipFace">${t.face(u)}</span><b>${ol(t.name(u))}</b><span class="cnt">${s.counts?.[k]??0}</span>${t.away(u)?'<i class="awayBadge">away</i>':""}${s.slay?.[k]?"<em>SLAY!</em>":""}</div>`).join("")}</div>
    <div class="slayPile">
      <button type="button" id="slayDeck" class="slayDeck" ${g?"":"disabled"} aria-label="Draw a card">${K7}<span>${s.deck??0}</span></button>
      <div id="slayDiscard" class="slayDiscard" data-top="${s.top.id}">${jl(s.top)}</div>
      <div class="nowColor" data-color="${s.color}" style="background:${y.fill}" aria-label="${y.name}"></div>
    </div>
    ${i===null?'<p class="watching">You are watching</p>':""}
    ${Et!==null?`<div id="crownPick" class="crownPick"><p>Pick a color for your Crown!</p><div class="crownRow">${ii.map((u,k)=>`<button type="button" data-color="${k}" aria-label="${u.name}" style="background:${u.fill}"><span>${u.name}</span></button>`).join("")}</div></div>`:""}
    <div id="slayHand" class="slayHand ${p?"isTurn":""}">${m.map(u=>{const k=p&&n.phase==="play"&&zg(u,s),x=k?"can":p?"dim":"wait",R=typeof u.v=="number"?ii[u.c].name+" "+u.v:u.v==="wild"?"Crown":u.v==="w4"?"Crown plus 4":u.v==="d2"?"plus 2":u.v==="rev"?"Flip":"Nope";return`<button type="button" class="slayCard ${x} ${u.id===s.drawn?"justDrew":""} ${u.id===Et?"picked":""}" data-card="${u.id}" data-c="${u.c}" data-v="${u.v}" aria-label="${ol(R)}" ${k?"":"disabled"}>${jl(u)}</button>`}).join("")}</div>
    ${c&&i!==null?`<button type="button" id="slayCall" class="slayCall ${d?"ready":""}" ${d?"":"disabled"}>SLAY!</button>`:""}
    <button type="button" id="slayPass" class="slayPass ${h?"":"hidden"}" ${h?"":"disabled"}>Pass</button>
  </div>`,a&&a.n!==ei){const u=ei;if(ei=a.n,u>=0){if(a.k==="play"&&a.card){const k=e.querySelector("#slayDiscard");k&&X7(r,a.card,k.getBoundingClientRect()),a.card.v==="skip"?t.toast("Nope!"):a.card.v==="rev"?t.toast("Flip!"):a.card.v==="d2"?t.toast("+2!"):a.card.v==="w4"&&t.toast("Crown +4!"),t.sfx.swish()}a.vdrew&&t.toast("Forgot to say SLAY! Draw 2"),a.k==="slay"&&t.sfx.sparkle()}}}function X7(e,t,n){const s=document.createElement("div");s.className="flyCard",s.innerHTML=jl(t);const i=e?.width||70,o=e?.height||100;Object.assign(s.style,{left:(e?.left??innerWidth/2)+"px",top:(e?.top??80)+"px",width:i+"px",height:o+"px"}),document.body.appendChild(s),requestAnimationFrame(()=>{s.style.left=n.left+"px",s.style.top=n.top+"px",s.style.width=Math.max(n.width,70)+"px",s.style.height=Math.max(n.height,96)+"px"}),setTimeout(()=>s.remove(),560)}const J7={id:"slay",render:Dp,handle(e,t){const n=t.table.view,s=t.table.you;if(!n||t.table.phase!=="play"||s===null)return!1;const i=n.hand??[];if(e.closest("#slayCall"))return i.length<=2&&i.length>0&&!n.slay?.[s]&&(t.move({k:"slay"}),t.sfx.sparkle()),!0;if(e.closest("#slayDeck"))return n.turn===s&&n.drawn==null&&(Et=null,t.move({k:"draw"}),t.sfx.click()),!0;if(e.closest("#slayPass"))return n.turn===s&&n.drawn!=null&&(Et=null,t.move({k:"pass"}),t.sfx.click()),!0;const o=e.closest("#crownPick [data-color]");if(o&&Et!==null)return t.move({k:"play",id:Et,color:+o.dataset.color}),Et=null,t.sfx.sparkle(),!0;const a=e.closest("#slayHand [data-card]");if(!a||a.hasAttribute("disabled"))return!!a;const r=+a.dataset.card,l=i.find(c=>c.id===r);return!l||n.turn!==s||!zg(l,n)||(l.c===4?(Et=r,t.sfx.pop(),Gl&&Dp(Gl,t)):(Et=null,t.move({k:"play",id:r}),t.sfx.click())),!0}},Pg="#5a3d5c",Ip=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),eM=`<svg viewBox="0 0 48 48"><path d="M24 42 C8 30 2 22 7 13 C11 6 20 8 24 16 C28 8 37 6 41 13 C46 22 40 30 24 42 Z" fill="#ff4d94" stroke="${Pg}" stroke-width="3" stroke-linejoin="round"/><path d="M16 16 Q20 12 22 18" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>`,tM=`<svg viewBox="0 0 48 48"><path d="M24 3 L29 17 H44 L32 26 L37 42 L24 33 L11 42 L16 26 L4 17 H19 Z" fill="#66d9e8" stroke="${Pg}" stroke-width="3" stroke-linejoin="round"/><path d="M24 12 L26 18 H22 Z" fill="#fff" opacity=".8"/></svg>`,nM={id:"four",render(e,t){const n=t.table,s=n.view;if(!s||!Array.isArray(s.b)){e.innerHTML="";return}const i=n.you,o=i!==null&&s.turn===i&&n.phase==="play",a=new Set((s.line??[]).map(([b,_])=>b+":"+_)),r=s.last;let l="";for(let b=0;b<7;b++){const _=s.b[b];let y="";for(let k=5;k>=0;k--){const x=k<_.length?_[k]:null,R=a.has(b+":"+k)?" hot":"",H=r&&r.col===b&&r.row===k?" just":"";y+=`<span class="fourCell${x===0?" heart":x===1?" star":""}${R}${H}">${x===0?eM:x===1?tM:""}</span>`}const u=o&&_.length<6;l+=`<button type="button" class="fourCol" data-col="${b}" ${u?"":"disabled"} aria-label="Drop in column ${b+1}">${y}<span class="dropHint">${u?"▼":""}</span></button>`}const c=n.phase==="play"&&s.turn>=0,p=c?n.players[s.turn]:"",d=c?o?"Your turn!":`${Ip(t.name(p))}'s turn`:"",g=i===0?"You are <b>pink hearts</b>":i===1?"You are <b>aqua stars</b>":"Pink hearts and aqua stars",h=b=>b===0?"♥":"★",m=n.players.map((b,_)=>`<div class="playerChip ${s.turn===_?"isTurn":""}"><span class="chipFace">${t.face(b)}</span><b>${Ip(t.name(b))} ${h(_)}</b>${t.away(b)?'<i class="awayBadge">away</i>':""}</div>`).join("");e.innerHTML=`<div class="fourPlay">
      ${d?`<div class="whose ${o?"yours":""}" id="whoseTurn">${d}</div>`:""}
      <div class="fourChips">${m}</div>
      <p class="fourLegend">${g}</p>
      <div class="fourBoard" id="fourBoard">${l}</div>
    </div>`},handle(e,t){const n=e.closest(".fourCol");if(!n)return!1;const s=t.table.view,i=t.table.you;if(n.hasAttribute("disabled")||!s||i===null||s.turn!==i||t.table.phase!=="play")return!0;const o=+n.dataset.col;return!Number.isInteger(o)||s.b[o].length>=6||(t.move({col:o}),t.sfx.click()),!0}},Hp={slay:J7,four:nM},Xo=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),sM={notHere:"Come into the clubhouse first!",taken:"Someone is sitting there!",playing:"You are already in this game!",playingElsewhere:"Finish your other game first!",notHost:"Waiting for the host…",needMore:"Play with friends on your street",tooMany:"That table is full!",notPlaying:"The game has not started!",notPlayer:"Sit down to play!",illegal:"You can't play that!",notAway:"She is still here!",tooSoon:"Give her a moment!",notSeated:"You are not at this table!",noMove:"No move to play!"};function iM(e){const t=document.getElementById("tableOverlay");let n=null,s="",i=0;const o=y=>y.away==null?0:y.away+Math.max(0,Date.now()-(y.receivedAt??Date.now())),a=()=>{i&&(clearInterval(i),i=0)},r=y=>{const u=!!y&&y.phase==="play"&&y.away!=null&&n!==null;u&&!i&&(i=window.setInterval(()=>d(),1e3)),u||a()},l=()=>e.hood(),c=()=>{const y=l();return!y||n===null?null:y.tables.get(n)??null},p=y=>{const u=l();return{table:y,me:u.pid,name:k=>u.players.get(k)?.nickname??"friend",face:k=>{const x=u.players.get(k)?.look;return x?fc(wt(x)):""},move:k=>u.tbl({op:"move",tb:y.tb,m:k}),away:k=>{if(k===u.pid)return!1;const x=u.players.get(k);if(x&&!x.online)return!0;const R=u.presence.get(k);return!R||R.where!=="gameroom"},toast:e.toast,sfx:e.sfx}};t.addEventListener("click",y=>{const u=y.target;if(u.closest("#tblBack")){h(),e.sfx.swish();return}if(u.closest("#tblLeave")){m();return}if(u.closest("#tblStart")){b();return}if(u.closest("#tblNudge")){_();return}const k=c();k&&Hp[k.game]?.handle(u,p(k))});function d(){const y=l(),u=c();if(!y||!u){t.classList.add("hidden"),t.innerHTML="",a();return}const k=Tf[u.game],x=y.pid,R=u.seats.includes(x),H=u.seats.filter(Boolean).length,I=u.phase==="play"&&u.you!==null&&u.view&&u.view.turn===u.you,X=u.view?.winPid??null;let le="";if(u.phase==="over"){const P=X?y.players.get(X)?.nickname??"Friend":"";u.game==="slay"?le=X?X===x?"You slayed!":`${Xo(P)} slayed!`:"It's a tie!":le=u.view?.draw||!X?"It's a tie!":X===x?"You got four!":`${Xo(P)} got four!`;const B=u.tb+":"+u.seq;X===x&&s!==B&&(s=B,e.confetti(),e.sfx.sparkle())}const ce=o(u),G=u.phase==="play"&&R&&ce>=Fu&&u.you!==null&&!!u.view&&u.view.turn!==u.you&&u.view.turn>=0,pe=u.phase!=="play"&&u.host===x&&H>=k.minPlayers&&H<=k.maxPlayers,sn=R&&u.phase==="lobby"&&u.host!==x&&H>=k.minPlayers,Ht=R&&u.phase==="lobby"&&H<k.minPlayers;t.classList.remove("hidden"),t.dataset.tb=String(u.tb),t.dataset.phase=u.phase,t.dataset.game=u.game,t.dataset.you=u.you===null?"":String(u.you),t.innerHTML=`<div class="tblCard ${I?"yourTurn":""} game-${u.game}">
      <div class="tblTop"><h2>${Xo(k.name)}</h2><div class="seatDots">${u.seats.map(P=>`<i class="${P?"on":""} ${P===x?"me":""}"></i>`).join("")}</div></div>
      ${le?`<div class="winWrap"><div class="winBanner" id="winBanner">${le}</div></div>`:""}
      <div id="tblStage"></div>
      <div class="tblBar">
        ${pe?'<button type="button" id="tblStart">Start</button>':""}
        ${sn?'<p class="tblWait">Waiting for the host…</p>':""}
        ${G?'<button type="button" id="tblNudge">Play for her</button>':""}
        <button type="button" id="tblBack">Back to room</button>
        <button type="button" id="tblLeave">Leave table</button>
      </div>
      ${Ht?'<p class="tblWait" id="needFriend">Play with friends on your street</p>':""}
    </div>`;const qe=t.querySelector("#tblStage");u.phase==="lobby"||!u.view?qe.innerHTML=g(u,y,x):Hp[u.game]?.render(qe,p(u)),r(u)}function g(y,u,k){return`<div class="lobby">${y.seats.map((x,R)=>`<div class="lobbySeat ${x?"filled":""} ${x===k?"me":""}">
      <span>${R+1}</span><b>${x?Xo(u.players.get(x)?.nickname??"friend"):"Empty"}</b>
      ${x&&x===y.host?"<i>host</i>":""}${x===k?"<i>you</i>":""}
    </div>`).join("")}</div>`}function h(){n=null,a(),t.classList.add("hidden"),t.innerHTML=""}function m(){const y=l(),u=c();y&&u&&u.seats.includes(y.pid)&&y.tbl({op:"leave",tb:u.tb}),e.sfx.click(),h()}function b(){const y=l(),u=c();y&&u&&(y.tbl({op:"start",tb:u.tb}),e.sfx.sparkle())}function _(){const y=l(),u=c();y&&u&&(y.tbl({op:"nudge",tb:u.tb}),e.sfx.click())}return{open(y){n=y,d()},close:h,refresh:d,fail(y,u){e.toast(sM[u]||"Try that again!"),e.sfx.pop(),n===y&&d()},isOpen:()=>n}}const oM=120,aM=192,rM=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);let J=null,Yn=null,Mn=null,Op=!1;const Tg=960,lM=e=>!!e&&!document.body.classList.contains("phone")&&e.clientHeight>e.clientWidth+40,os=()=>{const e=document.getElementById("gameroom"),t=e?.clientHeight||600;return lM(e)?Math.min(t/bi,e.clientWidth/Tg):t/bi},ha=()=>Yn;function Mi(){const e=J?.hood();if(!e)return null;for(const[t,n]of e.tables){const s=n.seats.indexOf(e.pid);if(s>=0){const i=Po(Number(t))[s];return{tb:Number(t),seat:s,x:i.x,y:i.y}}}return null}function cM(){const e=J?.hood();if(!e)return!1;for(const[t,n]of e.players)if(t!==e.pid&&n.online)return!0;return!1}function dM(e){if(J=e,Yn=iM({hood:e.hood,toast:e.toast,confetti:()=>Ff(),sfx:e.sfx}),Op)return Yn;Op=!0;const t=document.getElementById("grWorld");return t.addEventListener("click",fM),t.addEventListener("pointerdown",n=>{n.target.closest(".grChair, .grTable, .grDoor, .pet")&&n.stopPropagation()}),Yn}function qc(){if(!J)return;const e=os(),t=document.getElementById("grWorld"),n=a=>a*e+"px";t.style.width=hr*e+"px",t.style.height=bi*e+"px",t.style.setProperty("--sc",String(e));const s=document.getElementById("gameroom"),i=(s?.clientHeight||0)-6-bi*e;t.style.marginTop=i>1?Math.round(i*.55)+"px":"";let o=u7();o+=`<button class="grDoor" data-gr="map" aria-label="Back to the map" style="left:${n(78)};top:${n(268)};width:${n(86)};height:${n(170)}"></button>`,fo.forEach((a,r)=>{const l=a.seats>=6?560:a.seats>=4?440:340;o+=`<button class="grTable" data-tb="${r}" aria-label="${Tf[a.game].name} table" style="left:${n(a.x-l/2)};top:${n(456)};width:${n(l)};height:${n(70)}"></button>`,Po(r).forEach((c,p)=>{const d=76*e,g=72*e,h=Math.max(d,44),m=Math.max(g,44),b=(c.x-38)*e-(h-d)/2,_=(c.y-16)*e-(m-g)/2;o+=`<button class="grChair" data-tb="${r}" data-seat="${p}" aria-label="Empty chair" style="left:${b}px;top:${_}px;width:${h}px;height:${m}px"></button>`})}),o+='<div class="savatars" id="gavatars"></div>',t.innerHTML=o,so()}function so(){if(!J||J.view()!=="gameroom")return;const e=document.getElementById("gavatars");if(!e)return;const t=os(),n=new Set;for(const o of pM()){n.add(o.key);let a=e.querySelector(`.savatar[data-pid="${o.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(o.mine?"mine":"other"),a.dataset.pid=o.key,e.appendChild(a),o.mine&&uM(a));const r=JSON.stringify(o.look)+o.name+(o.away?":away":"");if(a.dataset.look!==r){const g=a.querySelector(".bubble");a.innerHTML=`<div class="inner">${wt(o.look)}</div>${o.name?`<div class="nametag">${rM(o.name)}${o.away?'<i class="awayBadge">away</i>':""}</div>`:""}`,g&&a.appendChild(g),a.dataset.look=r}const l=(Is[o.look.size]??1)*t*.95,c=oM*l,p=aM*l,d=o.seated?o.y-8:o.y;a.style.left=o.x*t-c/2+"px",a.style.top=d*t-p+"px",a.style.width=c+"px",a.style.height=p+"px",a.style.zIndex=String(100+Math.round(o.y)),a.classList.toggle("flipped",o.flip),a.classList.toggle("away",o.away),a.classList.toggle("seated",o.seated),So(a,o.look,o.mine)}e.querySelectorAll(".savatar").forEach(o=>{n.has(o.dataset.pid)||o.remove()}),J.refreshNear();const s=J.hood();document.querySelectorAll("#grWorld .grChair").forEach(o=>{const a=s?.tables.get(+o.dataset.tb)?.seats[+o.dataset.seat];o.classList.toggle("taken",!!a);const r=a?s.players.get(a)?.nickname:"";o.setAttribute("aria-label",r?r+" is sitting":"Empty chair")});const i=document.getElementById("grSolo");i&&i.classList.toggle("hidden",cM())}function pM(){const e=[],t=J.hood();if(t){const n=new Map;for(const[a,r]of t.tables)r.seats.forEach((l,c)=>{l&&n.set(l,Po(Number(a))[c])});const s=[...t.presence.entries()],i=J.myPres();i&&s.push([t.pid,i]);const o=new Set;for(const[a,r]of s){if(r.where!=="gameroom")continue;const l=t.players.get(a);if(!l)continue;o.add(a);const c=n.get(a);e.push({key:a,look:l.look,name:l.nickname,x:c?.x??r.x,y:c?.y??r.y,flip:r.flip,mine:a===t.pid,away:!1,seated:!!c})}for(const[a,r]of n){if(o.has(a))continue;const l=t.players.get(a);l&&e.push({key:a,look:l.look,name:l.nickname,x:r.x,y:r.y,flip:!1,mine:!1,away:!0,seated:!0})}}else{const n=J.solo();if(n?.where==="gameroom"){const s=J.soloLook();e.push({key:"solo",look:s.look,name:"",x:n.x,y:n.y,flip:n.flip,mine:!0,away:!1,seated:!1})}}return e}function fM(e){if(!J||J.view()!=="gameroom")return;const t=e.target,n=t.closest(".savatar");if(n){const c=J.hood(),p=n.dataset.pid;if(c&&p){for(const[d,g]of c.tables)if(g.seats.includes(p)){Yn?.open(Number(d));return}}return}if(t.closest('[data-gr="map"]')){J.goMap();return}const s=t.closest(".grChair");if(s){gM(+s.dataset.tb,+s.dataset.seat);return}const i=t.closest(".grTable");if(i){if(!J.hood()){Bg();return}Yn?.open(+i.dataset.tb),J.sfx.click();return}if(t.closest(".pet")||Mi())return;const o=document.getElementById("grWorld").getBoundingClientRect(),a=os(),r=(e.clientX-o.left)/a,l=(e.clientY-o.top)/a;l<430||(Mn={x:Math.max(60,Math.min(hr-60,r)),y:Math.max(470,Math.min(590,l))})}function gM(e,t){if(!J)return;const n=J.hood();if(!n){Bg();return}const s=n.tables.get(e)?.seats[t];if(s&&s!==n.pid){J.toast((n.players.get(s)?.nickname??"Someone")+" is sitting there!"),J.sfx.pop(),Yn?.open(e);return}Mn=null,n.tbl({op:"sit",tb:e,seat:t});const i=Po(e)[t];J.setPres({where:"gameroom",x:i.x,y:Math.max(470,Math.min(590,i.y)),flip:!1}),Yn?.open(e),J.sfx.click()}function Bg(){if(!J)return;const e=document.getElementById("grSolo");e&&(e.classList.remove("hidden"),e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),J.toast("Play with friends on your street"),J.sfx.pop()}function hM(e){if(!J||J.view()!=="gameroom"||!Mn)return;if(Mi()){Mn=null;return}const t=J.hood()?J.myPres():J.solo();if(!t||t.where!=="gameroom"){Mn=null;return}const n=Mn.x-t.x,s=Mn.y-t.y,i=Math.hypot(n,s);if(i<4){Mn=null;return}const o=Math.min(i,300*e),a={where:"gameroom",x:t.x+n/i*o,y:t.y+s/i*o,flip:Math.abs(n)>2?n<0:t.flip};J.setPres(a);const r=os(),l=document.getElementById("grScroll"),c=a.x*r-l.scrollLeft;(c<l.clientWidth*.22||c>l.clientWidth*.78)&&(l.scrollLeft=a.x*r-l.clientWidth/2)}function uM(e){e.addEventListener("pointerdown",t=>{if(!J||Mi())return;const n=J.hood()?J.myPres():J.solo();if(!n||n.where!=="gameroom")return;t.preventDefault(),t.stopPropagation(),Mn=null;const s=os(),i=document.getElementById("grWorld"),o=document.getElementById("grScroll"),a=y=>{const u=i.getBoundingClientRect();return{x:(y.clientX-u.left)/s,y:(y.clientY-u.top)/s}},r=a(t),l={x:n.x-r.x,y:n.y-r.y};let c=t,p=0,d=n.x,g=!1;const h=y=>{const u=J.hood()?J.myPres():J.solo();if(!u||u.where!=="gameroom")return;const k=a(y),x=Math.max(60,Math.min(hr-60,k.x+l.x)),R=Math.max(470,Math.min(590,k.y+l.y));if(!g&&Math.hypot(x-u.x,R-u.y)<6)return;g=!0;const H=Math.abs(x-d)>3?x<d:u.flip;Math.abs(x-d)>3&&(d=x),J.setPres({where:"gameroom",x,y:R,flip:H})},m=()=>{const y=o.getBoundingClientRect(),u=c.clientX<y.left+70?-12:c.clientX>y.right-70?12:0;u&&g&&(o.scrollLeft+=u,h(c)),p=requestAnimationFrame(m)};p=requestAnimationFrame(m),e.classList.add("lifted"),J.sfx.pick();const b=y=>{y.pointerId===t.pointerId&&(c=y,h(y))},_=y=>{y.pointerId===t.pointerId&&(cancelAnimationFrame(p),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",_),e.classList.remove("lifted"),g&&J.sfx.drop())};window.addEventListener("pointermove",b),window.addEventListener("pointerup",_)})}const Ni=T7(),K=zf();K.born&&typeof navigator<"u"&&!navigator.webdriver&&!K.get().baby&&K.dispatch({type:"baby/meet",now:Date.now()});let De=K;const Rg=[],Wp=new WeakSet;function Ag(e){Wp.has(e)||(Wp.add(e),e.subscribe((t,n)=>{De===e&&Rg.forEach(s=>s(t,n))}))}Ag(K);const C={get:()=>De.get(),dispatch(e){De.dispatch(e)},subscribe:e=>{Rg.push(e)}},_e=Pt,Ue=En,vi=390;let re=1e3;const Hs=()=>Math.max(0,_e-re),Dg=375,Ig=(e,t)=>e.wall?Math.min(t,Dg):t,Hg=12,Fs=(e,t)=>e.wall?t:Math.min(t,Ue-Hg),as=120,un=192,Zc=[{id:"living",name:"Living Room",color:"#ff8fab"},{id:"bedroom",name:"Bedroom",color:"#b388d6"},{id:"kitchen",name:"Kitchen",color:"#5cc985"},{id:"salon",name:"Salon",color:"#f0a0d8"},{id:"nursery",name:"Nursery",color:"#9ad7f5"},{id:"bathroom",name:"Bathroom",color:"#7ec8d6"}],Og=e=>Zc.find(t=>t.id===e)?.color??"#ccc",Nc=V$();_5(wn,Me);const ki=[{id:"__people",name:"People",icon:"",kind:"people"},...["furniture","decor","plants","food","pets"].map((e,t)=>({id:e,name:e,icon:["armchair","balloon","flowers","donut","cat"][t],kind:"cat"}))];ki.push({id:"secrets",name:"Secrets",icon:"egg:chloe-starlamp",kind:"cat"});for(const e of wn)ki.some(t=>t.kind==="cat"&&t.id===e.cat)||ki.push({id:e.cat,name:e.cat,icon:e.kind,kind:"cat"});for(const e of wn)e.pack&&!ki.some(t=>t.id==="pack:"+e.pack)&&ki.push({id:"pack:"+e.pack,name:jf(e.pack),icon:e.kind,kind:"pack"});const al=e=>wn.filter(t=>Ax(t,e,C.get().currentRoom,Fc==="all",kr())),mM=["#ffd6e0","#d9ccff","#cdf3dc","#cfe8ff","#fff1b8","#ffe0c7","#ffffff","#f6c1ff"],yM=["#e8b98a","#f2d0a4","#c99366","#ffe7a8","#bfe3d0","#d6d6f5","#ffc8dd","#9fb4c7"],Wt={paint:'<svg viewBox="0 0 48 48"><path d="M10 30 L28 12 L36 20 L18 38 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M28 12 L34 6 L42 14 L36 20" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><circle cx="12" cy="40" r="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/></svg>',shirt:'<svg viewBox="0 0 48 48"><path d="M16 8 L6 16 L11 24 L15 21 V42 H33 V21 L37 24 L42 16 L32 8 Q24 14 16 8 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',soundOn:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 17 Q37 24 32 31 M36 12 Q45 24 36 36" fill="none" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ddd" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M33 19 L43 29 M43 19 L33 29" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',flip:'<svg viewBox="0 0 48 48"><path d="M24 6 V42" stroke="#5a3d5c" stroke-width="3" stroke-dasharray="4 4"/><path d="M18 12 L6 36 H18 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M30 12 L42 36 H30 Z" fill="#fff" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',front:'<svg viewBox="0 0 48 48"><rect x="6" y="6" width="22" height="22" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="18" y="18" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',back:'<svg viewBox="0 0 48 48"><rect x="18" y="18" width="24" height="24" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="6" y="6" width="22" height="22" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',trash:'<svg viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="28" rx="5" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3"/><rect x="8" y="9" width="32" height="7" rx="3.5" fill="#ffadad" stroke="#5a3d5c" stroke-width="3"/><path d="M20 21 V35 M28 21 V35" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',smaller:'<svg viewBox="0 0 48 48"><rect x="16" y="16" width="16" height="16" rx="4" fill="#bde0fe" stroke="#5a3d5c" stroke-width="3"/><path d="M8 24 H14 M34 24 H40" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',bigger:'<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M24 6 V11 M24 37 V42 M6 24 H11 M37 24 H42" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>'},wM='<svg viewBox="0 0 48 48"><circle cx="17" cy="18" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><circle cx="32" cy="20" r="7" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3"/><path d="M5 42 Q6 28 17 28 Q28 28 29 42 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M24 42 Q25 30 32 30 Q42 30 43 42 Z" fill="#c9a0dc" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',bM='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 15 H37 M11 24 H37 M11 33 H37" fill="none" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',vM='<svg class="mailGlyph" viewBox="0 0 48 48" aria-hidden="true"><g transform="translate(0 2)"><rect x="6" y="14" width="36" height="24" rx="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/><path d="M6 16 L24 30 L42 16" fill="none" stroke="#5a3d5c" stroke-width="3"/><path d="M34 12 V6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M34 6 H44 L40 10 L44 14 H34 Z" fill="#ff6b6b" stroke="#5a3d5c" stroke-width="2"/></g></svg>',Wg='<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#fff3b0" stroke="#5a3d5c" stroke-width="3"/><path d="M24 15 V33 M15 24 H33" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',kM=document.getElementById("app");kM.innerHTML=`
<div class="top">
  <div class="tabs" id="tabs"></div>
  <div class="minimap" id="minimap" aria-label="Room map"><div class="mmWall" id="mmWall"></div><div class="mmFloor" id="mmFloor"></div><div id="mmDots"></div><div class="mmView" id="mmView"></div></div>
  <div class="streetTitle" id="streetTitle">Our Neighborhood</div>
  <div class="tools">
    <button class="round hoodOnly" id="btnChat" aria-label="Talk">${St.chat}<span class="badge" id="chatBadge"></span></button>
    <button class="round homeBtn" id="btnHome" aria-label="Home">${St.home}</button>
    <button class="round barnOnly" id="btnLeavePark" aria-label="Go outside">${V1}</button>
    <button class="round rideOnly" id="btnHopOff" aria-label="Hop off the horse">${r7}</button>
    <button class="round mapBtn" id="btnMap" aria-label="Map">${pc}<span class="badge" id="mapBadge"></span></button>
    <button class="round" id="btnMenu" aria-label="Menu" aria-expanded="false">${bM}<span class="badge" id="menuBadge"></span></button>
  </div>
</div>
<div class="menuPop hidden" id="menuPop">
  <div class="menuCard" role="dialog" aria-label="Menu">
    <button type="button" class="close" id="menuClose" aria-label="Close">✕</button>
    <p class="menuGroup">My stuff</p>
    <button type="button" class="menuRow" id="btnPets" aria-label="Pets"><span class="mIco">${Zf}</span><span class="mLabel">Pets</span></button>
    <button type="button" class="menuRow" id="btnDress" aria-label="Characters"><span class="mIco">${Wt.shirt}</span><span class="mLabel">Characters</span></button>
    <button type="button" class="menuRow" id="btnPaint" aria-label="Colors"><span class="mIco">${Wt.paint}</span><span class="mLabel">Wall &amp; floor colors</span></button>
    <button type="button" class="menuRow" id="secrets" aria-label="Surprises, 0 of 5"><span class="mIco secGift">🎁</span><span class="mLabel"><span class="secWord">Surprises </span><span class="secCount">0/5</span></span></button>
    <p class="menuGroup houseGroup">House</p>
    <button type="button" class="menuRow lockRow" id="btnLock" aria-label="Lock house"><span class="mIco" id="lockIco">${St.lockOff}</span><span class="mLabel" id="lockLabel">Lock my house</span></button>
    <button type="button" class="menuRow mailRow" id="btnMail" aria-label="Mailbox"><span class="mIco">${vM}</span><span class="mLabel">Mailbox</span><span class="menuNew" id="mailNew"></span></button>
    <!-- Day / Night / Auto. The clock stays on Auto until she taps. -->
    <div id="menuDaySlot" class="menuSlot" hidden></div>
    <p class="menuGroup streetGroup">Street</p>
    <button type="button" class="menuRow grownRow" id="btnParent" aria-label="Grown-ups"><span class="mIco">${St.shield}</span><span class="mLabel">Grown-ups</span></button>
    <button type="button" class="menuRow soloLeave" id="btnSolo" aria-label="Play in my own house"><span class="mIco">${St.solo}</span><span class="mLabel">Play in my own house</span></button>
    <button type="button" class="menuRow friendRow" id="btnHood" aria-label="Friends"><span class="mIco">${St.street}</span><span class="mLabel">Friends</span></button>
    <p class="menuGroup">This iPad</p>
    <button type="button" class="menuRow" id="btnSound" aria-label="Sound"><span class="mIco" id="soundIco"></span><span class="mLabel">Sound</span></button>
  </div>
</div>
<div class="stageWrap" id="stageWrap">
  <div class="stage" id="stage">
    <div class="world" id="world">
      <div class="wall" id="wall"></div><div class="floor" id="floor"></div><div class="baseboard"></div>
      <div class="scenery" id="scenery"></div>
      <div class="layer" id="layer"></div>
      <div class="toolbar hidden" id="toolbar">
        <button data-a="smaller" aria-label="Smaller">${Wt.smaller}</button><button data-a="bigger" aria-label="Bigger">${Wt.bigger}</button><button data-a="flip" aria-label="Flip">${Wt.flip}</button><button data-a="front" aria-label="Bring forward">${Wt.front}</button><button data-a="back" aria-label="Send back">${Wt.back}</button><button data-a="delete" class="danger" aria-label="Put away">${Wt.trash}</button>
      </div>
    </div>
    <button class="nudge left" id="nudgeL" aria-label="Look left"><svg viewBox="0 0 40 40"><path d="M24 10 L14 20 L24 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="nudge right" id="nudgeR" aria-label="Look right"><svg viewBox="0 0 40 40"><path d="M16 10 L26 20 L16 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </div>
  <div class="bin" id="bin">${Wt.trash}</div>
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
<div class="street mapView hidden" id="street"><div class="mapSky">${h0}</div><div class="mapMeadow">${u0}</div><button class="mailCue" id="mailCue" type="button">You've got mail!</button><div class="mapWorld" id="mapWorld"></div></div>
<div class="chatTray hidden" id="chatTray"></div>
<div class="sheet hidden" id="sheet"><div class="card" id="card"></div></div>
<div class="fx" id="fx"></div>
<div id="toastLane"></div>
<div class="phoneNote" id="phoneNote"><div class="card"><h2>Turn sideways</h2><p>Turn your phone sideways for more room to play!</p><button class="phoneOk" id="phoneOk" type="button">OK!</button></div></div>
<div class="elsewhere hidden" id="elsewhere"><div class="card"><h2>You're playing on another screen</h2><p>This screen can rest. Your house is safe.</p><button class="playHere" id="elsewhereGo" type="button">Tap to play here!</button></div></div>
<div id="skyMount"></div>`;const M=e=>document.getElementById(e);document.body.classList.add("is-preview"),document.body.insertAdjacentHTML("beforeend",'<div class="previewRibbon">PREVIEW</div>');const F=M("stage"),Vg=M("world"),se=M("layer"),xe=M("toolbar"),ua=M("bin");let st=null,Pe=C.get().characters[0]?.id??null,Ct="furniture",Fc="",Yl="",_M=Date.now()%1e5;const Kl=e=>`${e}-${Date.now().toString(36)}${(++_M).toString(36)}${Math.random().toString(36).slice(2,5)}`,ut="__me";let w=null,S="house",Ie=!1,ze="",Oa=new Map,Ug=!1,Qg=()=>{};const Te=g1(M("modeToggle"),{ownHouse:()=>!w||!ze||ze===w.myHouseId(),onChange:()=>{Ug&&(Li.matches?ns():rs()),Qg()}}),ma=a1({send:(e,t,n,s)=>w?.sendMail(e,t,n,s),read:(e,t)=>w?.readMail(e,t),drop:(e,t)=>w?.dropMail(e,t),houseOf:e=>[...w?.players.values()??[]].find(t=>t.pid===e)?.houseId??"",houseName:e=>w?.houses.get(e)?.meta.name??"My House",lettersOf:e=>w?.houses.get(e)?.confirmed.mailbox?.letters??[],mine:e=>!!w&&w.houses.get(e)?.meta.ownerId===w.pid,toast:Z,openOwn:()=>{const e=w?.myHouseId();e&&ld(e)},freeType:()=>!w||Hf(w.settings)});Te.sync(!0);const Ls=new Map,Wa={};let ae=$i,fi=0;Ug=!0;let mo=null;const Lr=()=>{cancelAnimationFrame(fi),mo=null},jc=e=>Math.max(0,Math.min(Hs(),e));function Fe(e){ae=jc(e),Wa[C.get().currentRoom]=ae,Vg.style.transform=`translate3d(${-ae}px,0,0)`,M("nudgeL").classList.toggle("off",ae<=1),M("nudgeR").classList.toggle("off",ae>=Hs()-1);const t=M("mmView");t.style.left=ae/_e*100+"%",t.style.width=re/_e*100+"%",st&&dh(C.get())}function Er(e){cancelAnimationFrame(fi),e=jc(e),mo=e;const t=()=>{const n=e-ae;if(Math.abs(n)<.5){Fe(e),mo=null;return}Fe(ae+n*.18),fi=requestAnimationFrame(t)};fi=requestAnimationFrame(t)}const yt=()=>F.getBoundingClientRect().width/re,$M="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)",Li=window.matchMedia($M);function xM(){const e=Li.matches;document.body.classList.toggle("phone",e),document.body.classList.toggle("phone-portrait",e&&window.matchMedia("(orientation: portrait)").matches);const t=M("stageWrap");for(const n of[M("nudgeL"),M("nudgeR")]){const s=e?t:F;n.parentElement!==s&&s.appendChild(n)}}function qg(){const e=document.querySelector(".top");if(!e)return;const t=e.getBoundingClientRect(),n=document.body.classList.contains("phone")?t.bottom:t.height;document.documentElement.style.setProperty("--chrome-h",Math.ceil(n)+"px"),Zg()}function Zg(){const e=document.querySelector(".top");if(!e)return;const t=Math.ceil(e.getBoundingClientRect().bottom+16)+"px",n=document.getElementById("mailCue");n&&(n.style.top=t);const s=document.getElementById("toastLane");s&&(s.style.top=t)}function MM(){const e=document.documentElement,t=document.getElementById("app");if(!(document.body.classList.contains("phone")&&!document.body.classList.contains("phone-portrait"))){t.style.top="",t.style.height="",t.style.bottom="",e.style.removeProperty("--vvh"),e.style.removeProperty("--vvt");return}const s=window.visualViewport,i=Math.round(s?s.height:window.innerHeight),o=Math.round(s?s.offsetTop:0);e.style.setProperty("--vvh",i+"px"),e.style.setProperty("--vvt",o+"px"),t.style.top=o+"px",t.style.height=i+"px",t.style.bottom="auto"}function rs(){xM(),MM(),qg();const e=M("stageWrap"),t=document.body.classList.contains("phone"),n=e.clientWidth,s=e.clientHeight,i=Math.max(1,s-Kc());if(t?s>n*.85:s>n+40){const r=n/Math.max(1,s);re=Math.round(Math.max(480,Math.min(860,Ue*r)))}else if(t){const r=n/Math.max(1,i);re=Math.round(Math.max(480,Math.min(_e,Ue*r)))}else re=1e3;re=Gc(re),F.style.width=re+"px",F.style.height=Ue+"px";const a=Math.min(n/re,i/Ue);if(Kg(a),F.style.setProperty("--yard-sc",String(a||1)),t&&F.style.setProperty("--fit",String(yt())),Ng(),ae>Hs())Fe(ae);else{const r=M("mmView");r.style.left=ae/_e*100+"%",r.style.width=re/_e*100+"%"}it(),!t&&S==="house"&&Os(!1),AM(),S==="ranch"&&requestAnimationFrame(dc),S==="gameroom"&&requestAnimationFrame(s0),Ei(),t&&S==="ranch"&&aL(),Fg(),Te.hint(),Or(),Nn()}function Ng(){const e=M("stageWrap"),t=document.body.classList.contains("phone")&&S==="house";for(const n of[M("nudgeL"),M("nudgeR")]){if(!t||n.parentElement!==e){n.style.marginTop="",n.style.left="",n.style.right="",n.style.top="";continue}const s=F.getBoundingClientRect(),i=e.getBoundingClientRect(),o=(s.top+s.bottom)/2-i.top;n.style.top=o+"px",n.style.marginTop=-n.offsetHeight/2+"px",n.style.left="",n.style.right=""}}function Fg(){document.body.classList.remove("secrets-chrome"),M("secrets")?.classList.remove("compact")}function it(e=0){if(!document.body.classList.contains("phone"))return;if(S==="house"){jg();return}const t=S==="park"?"parkScroll":S==="ranch"?"ranchScroll":S==="gameroom"?"grScroll":"";if(!t)return;const n=document.getElementById(t);if(!n||n.clientWidth<20){e<8&&requestAnimationFrame(()=>it(e+1));return}const s=n.querySelector(".savatar.mine")??n.querySelector(".savatar");if(!s){e<8&&requestAnimationFrame(()=>it(e+1));return}EM(n,[s,...s.querySelectorAll(".nametag")])&&e<8?requestAnimationFrame(()=>it(e+1)):LM()}function LM(){Wr()&&(S==="gameroom"&&n0([...document.querySelectorAll(".neonSignArt")],document.getElementById("grScroll")),S==="ranch"&&!Ie&&(i0(),$d()))}function EM(e,t){const s=e.getBoundingClientRect(),i=Math.min(s.right,window.innerWidth)-8,o=Math.max(s.left,0)+8;let a=0,r=0;for(const c of t){const p=c.getBoundingClientRect();p.width<2||p.height<2||(a=Math.max(a,p.right-i),r=Math.max(r,o-p.left))}if(a<=1&&r<=1)return!1;const l=e.scrollLeft;return a>1&&r>1?e.scrollLeft-=r:a>1?e.scrollLeft+=a:e.scrollLeft-=r,Math.abs(e.scrollLeft-l)>.5}function jg(){Os(!1)}function Vp(e){let t=0;for(const n of e){const s=Me[n.kind];!s||s.wall||(t=Math.max(t,s.w*Ge(n)))}return t}function CM(){if(S!=="house"||!Te.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return 0;const e=C.get().rooms,t=C.get().currentRoom;let n=Vp(e[t]?.items??[]);if(t==="backyard")for(const s of Object.keys(e))s!=="backyard"&&(n=Math.max(n,Vp(e[s].items)));return n<40?0:Math.min(_e,Math.ceil(n/.55))}function Gc(e){const t=CM();return t&&e<t?t:e}function SM(){const e=Gc(re);if(e<=re+.5)return;re=e,F.style.width=re+"px";const t=M("stageWrap"),n=Math.max(1,t.clientHeight-Kc()),s=Math.min(t.clientWidth/re,n/Ue);if(Kg(s),document.body.classList.contains("phone")&&F.style.setProperty("--fit",String(s)),ae>Hs())Fe(ae);else{const i=M("mmView");i.style.left=ae/_e*100+"%",i.style.width=re/_e*100+"%"}}let yo=null,wo=!1;function zM(){if(S!=="house"||!Te.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return null;const e=C.get();if(e.currentRoom==="backyard")return null;let t=null,n=yo;if(w&&De!==K){const a=we();a&&a.where==="house"&&a.room===e.currentRoom&&(t=$t(e.currentRoom,Tn(w.pid,a),a).x,n||(n=Tn(w.pid,a)?.item??null))}if(t===null){const a=e.characters.find(r=>r.id===Pe&&r.room===e.currentRoom)??e.characters.find(r=>r.room===e.currentRoom);if(!a)return null;t=$t(e.currentRoom,Mt(a),a).x,n||(n=Mt(a)?.item??null)}if(!n)return null;const s=e.rooms[e.currentRoom].items.find(a=>a.id===n),i=s&&Me[s.kind];if(!s||!i)return null;const o=i.w*Ge(s)/2;return{minX:Math.min(t-100,s.x-o),maxX:Math.max(t+100,s.x+o)}}function Os(e){if(S!=="house"||Ws)return;if(C.get().currentRoom==="backyard"){Math.abs(ae-Al)>.5&&Fe(Al),Nn();return}if(wo)return;const t=zM();if(t){const _=t.maxX-t.minX;let y=ae;_+20*2>re?y=t.minX-20:(t.minX-20<y&&(y=t.minX-20),t.maxX+20>y+re&&(y=t.maxX+20-re)),y=Math.max(0,Math.min(Hs(),y)),Math.abs(y-ae)>.5&&Fe(y),Nn();return}const n=document.querySelector("#layer .char.avatar.mine")??document.querySelector("#layer .char");if(!n)return;const s=yt()||1,i=F.getBoundingClientRect(),o=8;let a=Math.min(i.right,window.innerWidth)-o,r=Math.max(i.left,0)+o;for(const b of["nudgeL","nudgeR"]){const _=M(b);if(!_||_.classList.contains("off")||_.offsetParent===null)continue;const y=_.getBoundingClientRect();y.width<2||y.height<2||(b==="nudgeL"?r=Math.max(r,y.right+6):a=Math.min(a,y.left-6))}a-r<48&&(a=Math.min(i.right,window.innerWidth)-o,r=Math.max(i.left,0)+o);const l=[n,...n.querySelectorAll(".nametag")];let c=0,p=0,d=1/0,g=-1/0;for(const b of l){const _=b.getBoundingClientRect();_.width<2||_.height<2||(c=Math.max(c,_.right-a),p=Math.max(p,r-_.left),d=Math.min(d,_.left),g=Math.max(g,_.right))}if(document.body.classList.contains("phone-portrait")&&d<1/0){const b=(d+g)/2-(r+a)/2;if(Math.abs(b)>3){Fe(ae+b/s),Nn();return}}const h=PM(n),m=Dx({cam:ae,maxCam:Hs(),kidX:h,overflowL:p,overflowR:c,scale:s,nudgeX:e});Math.abs(m.cam-ae)>.5&&Fe(m.cam),e&&Math.abs(m.kidX-h)>.5&&TM(n,m.kidX),Nn()}function PM(e){if(e.dataset.pid&&w){const t=e.dataset.pid===w.pid?we():w.presence.get(e.dataset.pid);if(t&&t.where==="house")return t.x}return C.get().characters.find(t=>t.id===e.dataset.cid)?.x??0}function TM(e,t){if(e.dataset.pid&&w&&e.classList.contains("mine")){const i=we();if(!i||i.where!=="house")return;je({...i,x:t}),xt();return}const n=e.dataset.cid;if(!n)return;const s=C.get().characters.find(i=>i.id===n);s&&C.dispatch({type:"char/move",id:n,room:C.get().currentRoom,x:t,y:s.y})}const BM={living:"Living",bedroom:"Bed",kitchen:"Kitchen",salon:"Salon",nursery:"Nursery",bathroom:"Bath"};function Gg(){const e=S==="house",t=document.body.classList.contains("phone-portrait"),n=e&&!Te.isPlay(),s=e&&re+1<_e,i=e&&(t?n:n||s);document.body.classList.toggle("show-minimap",i)}const RM='<svg class="tabIco" width="14" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6 L8 1 L15 6 V11 H1 Z" fill="currentColor"/></svg>';function Yg(){return document.body.classList.contains("phone")}function AM(){const e=Yg()?"c":"f";Gg(),e!==Yl&&(Yl=e,oh(C.get()))}function Yc(){Li.matches?ns():rs()}window.addEventListener("resize",Yc);window.addEventListener("resize",()=>requestAnimationFrame(Xc));M("tabs").addEventListener("scroll",Xc,{passive:!0});Li.addEventListener("change",Yc);let Up="",rl=!1;function Qp(){const e=M("stageWrap"),t=document.querySelector(".top"),n=document.querySelector(".tools"),s=r=>r?r.clientWidth+"x"+r.clientHeight:"0",i=window.visualViewport,o=i?Math.round(i.offsetTop)+"x"+Math.round(i.height)+"x"+Math.round(i.width):"",a=document.body.classList.contains("baby-card")?"c":"";return o+" "+s(e)+" "+s(t)+" "+s(n)+a}function Kc(){const e=document.body;if(!e.classList.contains("baby-card")||!e.classList.contains("phone")||e.classList.contains("phone-portrait"))return 0;const t=document.querySelector(".babyCare"),n=t&&!t.hidden?t.getBoundingClientRect().height:0;return Math.ceil(8+(n>8?n:72)+8)}function Kg(e){const t=Kc(),n=M("stageWrap").clientHeight;F.style.left="",t>0?F.style.top=t+Math.max(0,n-t)/2+"px":F.style.top="",F.style.transform=`translate(-50%,-50%) scale(${e})`}function Xg(){const e=M("modeToggle"),t=document.querySelector(".tools"),n=document.getElementById("modeDock"),s=document.querySelector(".drawerTop");if(!e||!t||!n||!s)return!1;const i=document.body.classList.contains("phone"),o=i&&!document.body.classList.contains("phone-portrait"),a=o?t:i?n:s,r=e.parentElement===a;return n.hidden=!i||o,r?!1:(o?t.insertBefore(e,t.firstChild):i?n.appendChild(e):s.insertBefore(e,s.firstChild),!0)}function DM(){if(C.get().currentRoom==="backyard"||!document.body.classList.contains("phone-portrait")||!document.body.classList.contains("mode-play")||S!=="house")return;const e=M("stageWrap"),t=e.clientWidth,n=e.clientHeight;if(t<20||n<20||!(n>t*.85))return;const s=Math.min(_e,Gc(Math.max(280,Math.min(860,Math.round(Ue*t/n)))));if(Math.abs(s-re)<2)return;re=s,F.style.width=re+"px",F.style.height=Ue+"px";const i=Math.min(t/re,n/Ue);if(F.style.transform=`translate(-50%,-50%) scale(${i})`,F.style.setProperty("--fit",String(yt())),ae>Hs())Fe(ae);else{const o=M("mmView");o.style.left=ae/_e*100+"%",o.style.width=re/_e*100+"%"}Ng(),Gg()}function ns(){if(rl||!Li.matches)return;const e=Xg(),t=Qp()+(document.body.classList.contains("mode-play")?"p":"d");if(!(!e&&t===Up)){rl=!0;try{rs(),DM(),it(),Up=Qp()+(document.body.classList.contains("mode-play")?"p":"d")}finally{rl=!1}}}if(typeof ResizeObserver<"u"){const e=new ResizeObserver(()=>ns()),t=document.querySelector(".top");t&&e.observe(t),e.observe(M("stageWrap"));const n=document.querySelector(".tools");n&&e.observe(n)}window.visualViewport&&(window.visualViewport.addEventListener("resize",()=>ns()),window.visualViewport.addEventListener("scroll",()=>ns()));F.addEventListener("scroll",()=>{F.scrollLeft=0,F.scrollTop=0});const Rt=(e,t)=>{const n=F.getBoundingClientRect();return{x:(e-n.left)/n.width*re+ae,y:(t-n.top)/n.height*Ue}},Xl=(e,t)=>{const n=F.getBoundingClientRect();return e>n.left&&e<n.right&&t>n.top&&t<n.bottom},qp=(e,t)=>{const n=ua.getBoundingClientRect();return e>n.left-20&&e<n.right+20&&t>n.top-20&&t<n.bottom+20},To=e=>Is[e.size]??1,fn=new Map;function Jg(){return!w||De===K?!0:w.houses.get(ze)?.meta.ownerId===w.pid}function Cr(e){const t=Me[e.kind];return!t||!Ns(e.kind)?null:{id:e.id,kind:e.kind,x:e.x,footY:Fs(t,e.y),flip:!!e.flip,scale:Ge(e),w:t.w,h:ct(t)}}function $t(e,t,n){if(!t)return n;const s=C.get().rooms[e]?.items.find(a=>a.id===t.item),i=s&&Cr(s);if(!i)return n;const o=_f(i).find(a=>a.n===t.n);return o?{x:o.x,y:o.y}:n}function bo(e,t,n=!1){const s=C.get(),i=[];for(const o of s.characters){if(o.id===e||o.room!==s.currentRoom)continue;const a=Mt(o);a&&i.push({item:a.item,n:a.n})}if(!n){const o=zu(s.baby,s.currentRoom);o&&i.push(o)}if(w&&S==="house"){const o=(r,l)=>{if(r===t||l.where!=="house"||l.houseId!==ze||l.room!==s.currentRoom)return;const c=Tn(r,l);c&&i.push({item:c.item,n:c.n})};w.presence.forEach((r,l)=>o(l,r));const a=we();a&&w.pid!==t&&o(w.pid,a)}return i}function eh(e,t){t?fn.set(e,t):fn.delete(e)}function Fi(e,t,n,s,i){const a=!w||De===K||!!w?.speaksSit;a?fn.delete("c:"+e):eh("c:"+e,i),a?C.dispatch({type:"char/move",id:e,room:t,x:n,y:s,seat:i}):C.dispatch({type:"char/move",id:e,room:t,x:n,y:s})}function ya(e,t,n,s,i){const{seat:o,...a}=e;if(w&&!w.speaksSit){eh("p:"+w.pid,i?{item:i.id,pose:i.pose,n:i.n}:null),je({...a,x:t,y:n,flip:s});return}w&&fn.delete("p:"+w.pid),je(i?{...a,x:t,y:n,flip:s,seat:i}:{...a,x:t,y:n,flip:s})}function Mt(e){return e.seat?e.seat:fn.get("c:"+e.id)??null}function Tn(e,t){return t.seat?{item:t.seat.id,pose:t.seat.pose,n:t.seat.n}:fn.get("p:"+e)??null}function Va(e,t){const n=C.get(),s=document.elementsFromPoint(e,t),i=new Set;for(let o=0;o<s.length;o++){const a=s[o];if(!a||!a.closest)continue;const r=a.closest(".item");if(!r)continue;const l=r.dataset.id;if(!l||i.has(l))continue;i.add(l);const c=n.rooms[n.currentRoom].items.find(p=>p.id===l);if(c&&Ns(c.kind))return c}return null}function IM(e){const t=gr(e);if(t)return"k-bed k-bed-"+t.clip;const n=e.toLowerCase();return/sofa|couch|loveseat/.test(n)?"k-sofa":/bench/.test(n)?"k-bench":/chair|stool|rocker/.test(n)?"k-chair":""}function HM(){const e=C.get(),t=new Map,n=(s,i)=>{const o=t.get(s);t.set(s,o===void 0?i:Math.max(o,i))};for(const s of e.characters){const i=s.room===e.currentRoom?Mt(s):null;i&&n(i.item,i.n)}if(w&&S==="house"){const s=(o,a)=>{const r=a.where==="house"&&a.houseId===ze&&a.room===e.currentRoom?Tn(o,a):null;r&&n(r.item,r.n)};w.presence.forEach((o,a)=>s(a,o));const i=we();i&&s(w.pid,i)}return t}function OM(e,t){const n=To(e),s=$r(e,vr(Mt(e)?.pose))[t];let i=s.x;e.flip&&(i=100-i);const o=$t(e.room,Mt(e),e);return{x:o.x+(i-50)/100*as*n,y:o.y-un*n+s.y/160*un*n}}function th(e){const t=C.get();let n=null;for(const s of t.characters){if(s.room!==t.currentRoom)continue;const i=To(s),o=$t(s.room,Mt(s),s),a=Math.abs(e.x-o.x)<as*i/2+25&&e.y>o.y-un*i-25&&e.y<o.y+20;for(const r of["left","right"]){if(s.held[r])continue;const l=OM(s,r),c=Math.hypot(e.x-l.x,e.y-l.y);(a||c<75)&&(!n||c<n.d)&&(n={c:s,hand:r,d:c})}}return n}const nh=["none","radial-gradient(circle, rgba(255,255,255,.55) 7px, transparent 8px)","repeating-linear-gradient(90deg, rgba(255,255,255,.4) 0 26px, transparent 26px 52px)","linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%), linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%)"],sh="repeating-linear-gradient(90deg, rgba(90,61,92,.08) 0 3px, transparent 3px 125px), linear-gradient(rgba(0,0,0,.06), transparent 50%)",Jl=e=>`url('${e.replace(/'/g,"%27")}')`;function ih(e){const t=e.rooms[e.currentRoom],n=M("wall"),s=M("floor"),i=t.wallTile?ap[t.wallTile]:void 0;n.style.backgroundColor=t.wallpaper,i?(n.style.backgroundImage=Jl(i.url),n.style.backgroundSize="220px auto",n.style.backgroundPosition="0 0"):(n.style.backgroundImage=nh[t.pattern]??"none",n.style.backgroundSize=t.pattern===1?"44px 44px":t.pattern===3?"60px 60px":"auto",n.style.backgroundPosition=t.pattern===3?"0 0, 30px 30px":"0 0");const o=t.floorTile?ap[t.floorTile]:void 0;s.style.backgroundColor=t.floor,s.style.backgroundImage=o?`${Jl(o.url)}, linear-gradient(rgba(0,0,0,.06), transparent 50%)`:sh,s.style.backgroundSize=o?"180px auto, auto":"auto",M("mmWall").style.background=t.wallpaper,M("mmFloor").style.background=t.floor,ah(e)}function Ua(e){const n=e.rooms[e.currentRoom].items.filter(i=>Me[i.kind]).map(i=>{const o=Me[i.kind];return`<i style="left:${i.x/_e*100}%;top:${(Fs(o,i.y)-ct(o)*Ge(i)/2)/Ue*100}%"></i>`}).join(""),s=e.characters.filter(i=>i.room===e.currentRoom).map(i=>{const o=$t(e.currentRoom,Mt(i),i);return`<b style="left:${o.x/_e*100}%;top:${(o.y-90)/Ue*100}%;background:${i.shirt}"></b>`}).join("");M("mmDots").innerHTML=n+s}function oh(e){const t=Yg();Yl=t?"c":"f",document.body.classList.toggle("tabs-compact",t),M("tabs").innerHTML=Zc.map(n=>{const s=t?BM[n.id]??n.name:n.name;return`<button class="tab ${e.currentRoom===n.id||e.currentRoom==="backyard"&&n.id==="living"?"on":""}" data-room="${n.id}" style="--c:${n.color}" aria-label="${n.name}">${t?RM:""}${s}</button>`}).join(""),requestAnimationFrame(()=>{WM(),Xc()})}function Xc(){const e=document.getElementById("tabs");if(!e)return;const t=e.scrollWidth-e.clientWidth;e.classList.toggle("fadeL",t>2&&e.scrollLeft>2),e.classList.toggle("fadeR",t>2&&e.scrollLeft<t-2)}function WM(){const e=document.getElementById("tabs"),t=e?.querySelector(".tab.on");if(!e||!t||e.scrollWidth<=e.clientWidth+2)return;const n=t.offsetLeft-e.offsetLeft,s=n+t.offsetWidth;n<e.scrollLeft+24?e.scrollLeft=Math.max(0,n-24):s>e.scrollLeft+e.clientWidth-24&&(e.scrollLeft=s-e.clientWidth+24)}function js(e,t,n,s,i){e.style.left=(t-s/2)/_e*100+"%",e.style.top=(n-i)/Ue*100+"%",e.style.width=s/_e*100+"%",e.style.height=i/Ue*100+"%"}function Jc(e,t){let n=e.w*t,s=ct(e)*t;if((e.kind==="kennel"||e.kind==="cat-tower")&&document.body.classList.contains("phone")){const i=Math.max(.2,yt()||1),o=44*_e/(Math.max(1,re)*i),a=44/i;n<o&&(n=o),s<a&&(s=a)}return{w:n,h:s}}function Kt(e){const t=e.rooms[e.currentRoom],n=new Set;for(const s of t.items){const i=Me[s.kind];if(!i)continue;n.add(s.id);let o=se.querySelector(`.item[data-id="${s.id}"]`);o||(o=document.createElement("div"),o.className="item",o.dataset.id=s.id,o.innerHTML=`<div class="inner">${hn(i,!0)}</div>`,se.appendChild(o),o.addEventListener("pointerdown",l=>e9(o,l))),o.dataset.kind=s.kind,o.classList.toggle("is-light",O7(s.kind,!!i.light));const a=Jc(i,Ge(s));js(o,s.x,Fs(i,s.y),a.w,a.h);const r=1e3+s.z;o.style.zIndex=String(r),o.style.setProperty("--iz",String(r)),o.classList.toggle("flipped",s.flip),o.classList.toggle("sel",st===s.id)}se.querySelectorAll(".item").forEach(s=>{n.has(s.dataset.id)||s.remove()}),ah(e),ZM(),ed(),dh(e),Ua(e),qs()}function ed(){const e=C.get(),t=HM(),n=new Set;t.forEach((s,i)=>{const o=e.rooms[e.currentRoom]?.items.find(g=>g.id===i),a=o&&Me[o.kind],r=o&&IM(o.kind);if(!o||!a||!r)return;n.add(i);let l=se.querySelector(`.seatFront[data-id="${i}"]`);l||(l=document.createElement("div"),l.className="seatFront",l.dataset.id=i,se.appendChild(l));const c=se.querySelector(`.item[data-id="${i}"] .inner`),p=l.querySelector(".inner");(!p||c&&p.innerHTML!==c.innerHTML)&&(l.innerHTML=`<div class="inner">${c?c.innerHTML:hn(a,!0)}</div>`),l.className="seatFront "+r+(o.flip?" flipped":"");const d=Jc(a,Ge(o));js(l,o.x,Fs(a,o.y),d.w,d.h),l.style.zIndex=String(1e3+o.z+3)}),se.querySelectorAll(".seatFront").forEach(s=>{n.has(s.dataset.id||"")||s.remove()})}let Ws=!1,Zp=0;function td(e){performance.now()-Zp<80||(Zp=performance.now(),vL(e))}function VM(e,t){const n=F.querySelector(".yardDoor");if(!n)return null;const s=i=>{if(!i)return!1;const o=i.getBoundingClientRect();return o.width>2&&o.height>2&&e>=o.left&&e<=o.right&&t>=o.top&&t<=o.bottom};return s(n.querySelector(".yardHintLabel"))||s(n.querySelector(".doorArt"))||s(n)?n:null}function UM(e){e.addEventListener("pointerdown",t=>{if(t.button!==0)return;t.stopPropagation();const n=e.dataset.yardGo==="backyard"?"backyard":"living",s=t.clientX,i=t.clientY,o=t.pointerId;Ws=!0;const a=r=>{r.pointerId===o&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),Ws=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-i)>14||(r.preventDefault(),r.stopPropagation(),td(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)})}F.addEventListener("pointerdown",e=>{if(e.button!==0)return;const t=VM(e.clientX,e.clientY);if(!t||e.target instanceof Node&&t.contains(e.target))return;e.stopPropagation(),e.preventDefault();const n=t.dataset.yardGo==="backyard"?"backyard":"living",s=e.clientX,i=e.clientY,o=e.pointerId;Ws=!0;const a=r=>{r.pointerId===o&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),Ws=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-i)>14||(r.preventDefault(),r.stopPropagation(),td(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)},!0);function QM(e,t){return e.width>2&&t.width>2&&e.left<t.right-1&&e.right>t.left+1&&e.top<t.bottom-1&&e.bottom>t.top+1}function Np(e){const t=e.getBoundingClientRect();let n=0;se.querySelectorAll(".item").forEach(s=>{if(s.classList.contains("is-light"))return;const i=Me[s.dataset.kind||""];if(!i||i.wall||!QM(s.getBoundingClientRect(),t))return;const o=parseInt(s.style.zIndex||"0",10)||0;o>n&&(n=o)}),e.style.zIndex=n?String(n+2):"2"}function ah(e){const t=e.rooms[e.currentRoom];Fx(M("scenery"),e.currentRoom,t.items),M("scenery").querySelectorAll(".yardDoor").forEach(i=>i.remove());const n=e.currentRoom==="living"?"backyard":e.currentRoom==="backyard"?"living":"",s=se.querySelector(".yardDoor");if(!n)se.querySelectorAll(".yardDoor").forEach(i=>i.remove());else if(!s||s.dataset.yardGo!==n){se.querySelectorAll(".yardDoor").forEach(o=>o.remove()),se.insertAdjacentHTML("beforeend",C5(n==="backyard"?"living":"yard"));const i=se.querySelector(".yardDoor");i&&UM(i)}F.classList.toggle("room-yard",e.currentRoom==="backyard"),Ya(),Ws||Nn()}const Tt=new Map;function qM(e){const t=To(e),n=as*t,s=un*t,i=$r(e,vr(Mt(e)?.pose)),o=e.look2?.85:1;return["left","right"].map(a=>{const r=e.held[a],l=r&&Me[r.kind];if(!r||!l)return"";const c=Ge(r),p=Math.min(.7,120*t/Math.max(l.w,ct(l))/c)*o,d=l.w*c*p,g=ct(l)*c*p,h=i[a].x/100*n,m=i[a].y/160*s;return`<div class="held ${r.flip?"flipped":""}" data-hand="${a}" style="left:${(h-d/2)/n*100}%;top:${(m-g*.62)/s*100}%;width:${d/n*100}%;height:${g/s*100}%"><div class="inner">${hn(l)}</div></div>`}).join("")}function ZM(){let e=se.querySelector("#skyPuddles");e||(e=document.createElement("div"),e.id="skyPuddles",e.className="skyPuddles"),se.appendChild(e);const t=[...se.querySelectorAll(".item.is-light")];for(;e.children.length>t.length;)e.lastElementChild.remove();for(;e.children.length<t.length;)e.appendChild(document.createElement("i"));t.forEach((n,s)=>{const i=e.children[s],o=parseFloat(n.style.left),a=parseFloat(n.style.top),r=parseFloat(n.style.width),l=parseFloat(n.style.height),c=n.dataset.kind==="window"||n.dataset.kind==="tv";i.style.left=o-.6*r+"%",i.style.top=a-(c?.38:.5)*l+"%",i.style.width=2.2*r+"%",i.style.height=2*l+"%",i.style.zIndex=String(parseInt(n.style.zIndex||"1000",10))})}let Sr=()=>{};function io(e){const t=e.baby;return t&&t.spot==="arms"&&t.holder?t.holder:""}const Qn=new Map;function rh(e){for(const[t,n]of Qn)t.indexOf(e+":")===0&&(n.remove(),Qn.delete(t))}function lh(e,t){const n=e+":"+t,s=Qn.get(n);s&&(s.remove(),Qn.delete(n))}function ch(e,t,n,s,i){const o=e+":"+t;for(const[r,l]of Qn)r.indexOf(e+":")===0&&r!==o&&(l.remove(),Qn.delete(r));let a=Qn.get(o);if((!a||!a.isConnected)&&(a=document.createElement("div"),a.className="cradle-front",a.dataset.for=t,a.innerHTML='<div class="inner"></div>',se.appendChild(a),Qn.set(o,a)),a.dataset.arm!==s){const r=a.querySelector(".inner");r&&(r.innerHTML=s),a.dataset.arm=s}a.style.left=n.style.left,a.style.top=n.style.top,a.style.width=n.style.width,a.style.height=n.style.height,a.style.zIndex=String(5e3+Math.round(i)+4),a.classList.toggle("flipped",n.classList.contains("flipped")),a.classList.toggle("pose-sit",n.classList.contains("pose-sit")),a.classList.toggle("pose-lie",n.classList.contains("pose-lie")),a.classList.toggle("pose-lie-r",n.classList.contains("pose-lie-r"))}function Xt(e){const t=e.characters.filter(n=>n.room===e.currentRoom);for(const[n,s]of Tt)t.some(i=>i.id===n)||(s.remove(),Tt.delete(n));for(const n of t){let s=Tt.get(n.id);s||(s=document.createElement("div"),s.className="char",s.dataset.cid=n.id,s.innerHTML='<div class="inner"></div><div class="hands"></div>',se.appendChild(s),Tt.set(n.id,s),s9(s));const i=Mt(n),o=i?.pose??null,a=io(e)===n.id,r=N0(n)+(o||"")+(a?"h":"");s.dataset.look!==r&&(s.querySelector(".inner").innerHTML=wt(n,o,a),s.dataset.look=r),s.classList.toggle("holding",a);const l=JSON.stringify([n.held.left?.id,n.held.left?.flip,n.held.right?.id,n.held.right?.flip,n.size,o]);s.dataset.held!==l&&(s.querySelector(".hands").innerHTML=qM(n),s.dataset.held=l);const c=To(n),p=$t(e.currentRoom,i,n);if(js(s,p.x,p.y,as*c,un*c),s.style.zIndex=String(i?1e3+(e.rooms[e.currentRoom].items.find(g=>g.id===i.item)?.z??0)+1+i.n:5e3+Math.round(n.y)),s.classList.toggle("flipped",n.flip),s.classList.toggle("pose-sit",o==="sit"),s.classList.toggle("pose-lie",o==="lie"),s.classList.toggle("pose-lie-r",o==="lie"&&!!e.rooms[e.currentRoom].items.find(g=>g.id===i?.item)?.flip),s.classList.toggle("active",n.id===Pe),So(s,n,n.id===Pe),s.classList.toggle("pose-swing",Bt?.id===n.id),a){const g=lg(n,o);g?ch("doll",n.id,s,g,p.y):lh("doll",n.id)}const d=$r(n);s.style.setProperty("--hx-l",d.left.x+"%"),s.style.setProperty("--hx-r",d.right.x+"%")}(io(e)===""||!t.some(n=>n.id===io(e)))&&rh("doll"),qs(),Ua(e),Sr()}function Jo(){const e=F.getBoundingClientRect(),t=e.width/Math.max(1,re),n=6,i=document.body.classList.contains("phone")?1/Math.max(.2,t):1,o=xe.offsetWidth,a=xe.offsetHeight,r=parseFloat(xe.style.left)/100*_e,l=parseFloat(xe.style.top)/100*Ue,c=xe.classList.contains("below"),p=r,d=c?l+a/2:l-a/2,g=i*o/2,h=i*a/2,m=x=>e.left+(n+x-ae)*t,b=x=>e.top+(n+x)*t,_=m(p-g),y=m(p+g),u=b(d-h),k=b(d+h);return{left:_,right:y,top:u,bottom:k,width:y-_,height:k-u}}function NM(){const e=F.getBoundingClientRect(),t=4;let n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t,i=Math.max(e.top,0)+t,o=Math.min(e.bottom,window.innerHeight)-t;for(const a of["nudgeL","nudgeR"]){const r=M(a);if(!r||r.classList.contains("off")||r.offsetParent===null)continue;const l=r.getBoundingClientRect();l.width<2||l.height<2||(a==="nudgeL"?n=Math.max(n,l.right+4):s=Math.min(s,l.left-4))}return s-n<48&&(n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t),{left:n,right:s,top:i,bottom:o}}function ea(e,t){xe.style.left=e/_e*100+"%",xe.style.top=t/Ue*100+"%"}function dh(e){const t=st&&e.rooms[e.currentRoom].items.find(b=>b.id===st);if(Te.isPlay()||!t||!Me[t.kind]){xe.classList.add("hidden"),xe.classList.remove("below"),xe.style.maxWidth="";return}const n=Me[t.kind],s=Fs(n,t.y),i=s-ct(n)*Ge(t),o=12;xe.classList.remove("hidden"),xe.style.maxWidth="",xe.classList.remove("below"),ea(t.x,i-o);const a=NM();Jo().top<a.top&&(xe.classList.add("below"),ea(t.x,s+o));let r=Jo();const l=a.right-a.left;if(r.width>l-2&&l>60){const b=xe.offsetWidth*((l-8)/Math.max(1,r.width));xe.style.maxWidth=Math.max(76,b)+"px",!xe.classList.contains("below")&&Jo().top<a.top&&(xe.classList.add("below"),ea(t.x,s+o)),r=Jo()}let c=0,p=0;if(r.left<a.left&&(c=a.left-r.left),r.right+c>a.right&&(c=a.right-r.right),r.width>a.right-a.left&&(c=(a.left+a.right)/2-(r.left+r.right)/2),r.top<a.top&&(p=a.top-r.top),r.bottom+p>a.bottom&&(p=a.bottom-r.bottom),Math.abs(c)>=.5||Math.abs(p)>=.5){const b=F.getBoundingClientRect().width/Math.max(1,re)||1,_=parseFloat(xe.style.left)/100*_e+c/b,y=parseFloat(xe.style.top)/100*Ue+p/b;ea(_,y)}const d=Bs(t.size),g=Ss.indexOf(d),h=xe.querySelector('[data-a="smaller"]'),m=xe.querySelector('[data-a="bigger"]');h&&(h.disabled=g<=0),m&&(m.disabled=g>=Ss.length-1)}function ph(e){const t=M("soundIco");t&&(t.innerHTML=e.soundOn?Wt.soundOn:Wt.soundOff),M("btnSound").setAttribute("aria-label",e.soundOn?"Sound on":"Sound off"),$1(e.soundOn)}function Vs(){const e=C.get();se.innerHTML="",Tt.clear(),oh(e),ih(e),Kt(e),Xt(e),ph(e);const t=e.characters.find(i=>i.room===e.currentRoom),n=w&&we(),s=n&&n.where==="house"?n.x:t?.x;Lr(),Fe(Wa[e.currentRoom]??jc(s!==void 0?s-re/2:$i)),xt(),mn(),document.body.classList.contains("phone")&&S==="house"&&requestAnimationFrame(()=>jg())}const Fp=200,FM=2,Qa=[];let ec=0,wa=!1,ll=0;const fh=new Map;function tc(e){const t=document.getElementById("shelf");if(!t)return!1;const n=t.getBoundingClientRect();if(n.width<2||n.height<2)return!1;const s=e.getBoundingClientRect();return s.right>n.left-Fp&&s.left<n.right+Fp&&s.bottom>n.top-8&&s.top<n.bottom+8}const jM=3,qa=new Map;function nc(e,t){const n=(qa.get(t)||0)+1;if(qa.set(t,n),delete e.dataset.shelfq,n>=jM){delete e.dataset.artq;return}setTimeout(nd,300*n)}function oi(){ec--,!wa&&gh()}function jp(e,t){const n=document.createElement("div");n.innerHTML=hn(t);const s=n.querySelector("img.artimg");if(!s){delete e.dataset.artq,oi();return}const i=qa.get(t.kind)||0;if(i>0){const l=s.getAttribute("src")||"";s.setAttribute("src",l+(l.indexOf("?")>=0?"&":"?")+"retry="+i)}let o=!1;const a=l=>{if(!o){if(o=!0,l){const c=Array.prototype.slice.call(n.childNodes);if(fh.set(t.kind,c),qa.delete(t.kind),e.isConnected&&e.dataset.artq==="1"){delete e.dataset.artq,e.innerHTML="";for(let p=0;p<c.length;p++)e.appendChild(c[p])}else{const p=document.querySelector(`#shelf button.thing[data-artq="1"][data-kind="${CSS.escape(t.kind)}"]`);if(p){delete p.dataset.artq,p.innerHTML="";for(let d=0;d<c.length;d++)p.appendChild(c[d])}}}else e.isConnected&&e.dataset.artq==="1"&&nc(e,t.kind);oi()}},r=()=>{typeof s.decode=="function"?s.decode().then(()=>a(!0),()=>a(!0)):a(!0)};s.onload=r,s.onerror=()=>a(!1),s.complete&&s.naturalWidth>0&&r()}function gh(){if(!wa){for(wa=!0;ec<FM&&Qa.length;){const e=Qa.shift();if(!e||!e.isConnected||e.dataset.artq!=="1")continue;if(!tc(e)){delete e.dataset.shelfq;continue}const t=e.dataset.kind||"",n=Me[t];if(!n){delete e.dataset.artq;continue}if(ec++,As(t)){jp(e,n);continue}f(()=>Promise.resolve().then(()=>Cc),void 0).then(s=>s.loadArtKinds([t])).then(()=>{if(!e.isConnected||e.dataset.artq!=="1"){oi();return}if(!As(t)){nc(e,t),oi();return}if(!tc(e)){delete e.dataset.shelfq,oi();return}jp(e,n)},()=>{e.isConnected&&e.dataset.artq==="1"&&nc(e,t),oi()})}wa=!1}}function GM(){const e=document.getElementById("shelf");if(!e||!yi())return;const t=e.querySelectorAll('button.thing[data-artq="1"]');for(let n=0;n<t.length;n++){const s=t[n];s.dataset.shelfq!=="1"&&tc(s)&&(s.dataset.shelfq="1",Qa.push(s))}gh()}function nd(){ll||(ll=requestAnimationFrame(()=>{ll=0,GM()}))}function YM(){const e=document.getElementById("shelf");!e||e.dataset.artscroll==="1"||(e.dataset.artscroll="1",e.addEventListener("scroll",nd,{passive:!0}))}function hh(){const e=document.getElementById("shelf");if(!e||!yi())return;const t=e.querySelectorAll("button.thing[data-kind]");for(let n=0;n<t.length;n++){const s=t[n],i=s.dataset.kind||"";s.querySelector("img.artimg")||!(_d(i)||As(i))||(s.dataset.artq="1")}nd()}function uh(){if(Ct==="__people"){Dt();return}hh()}function KM(e){const t=Cf();if(!w)return;const n=we();if(!n||n.where!=="house"||!n.seat)return;let s="";if(e.type==="item/flip"||e.type==="item/delete")s=e.id;else if(e.type==="item/move"&&e.stand)s=e.id;else if(e.type==="char/hold")s=e.itemId;else return;if(!s||n.seat.id!==s||e.room!==n.room)return;const i=t&&t.id===s?t:null,o=i?Ma(i.kind)*(i.scale||1):Ma("bed"),a=bc(i?i.x:n.x,o,n.x);fn.delete("p:"+w.pid);const{seat:r,...l}=n;je({...l,x:a.x,y:a.y})}C.subscribe((e,t)=>{switch(KM(t),t.type){case"room/switch":{const n=F.classList.contains("room-yard");w&&De!==K&&l9(t.room),Vs(),Dt(),(t.room==="backyard"||n||Te.isPlay()&&Math.min(window.innerWidth,window.innerHeight)<500)&&rs(),e0(t.room);break}case"item/add":Kt(e),SM(),yL();break;case"game/reset":Vs();break;case"room/wallpaper":case"room/floor":case"room/pattern":case"room/wallTile":case"room/floorTile":ih(e);break;case"char/update":case"char/move":t.type==="char/move"&&Bt&&!ji&&t.id===Bt.id&&(Bt=null),Xt(e),ed(),Ya(),S==="ranch"?es():S==="park"&&Qs();break;case"char/add":case"char/delete":case"char/hold":case"char/release":Kt(e),Xt(e),xt(),Ct==="__people"&&Dt();break;case"item/move":case"item/flip":case"item/delete":case"item/size":Kt(e),Xt(e),xt();break;case"baby/meet":case"baby/name":case"baby/care":case"baby/hold":case"baby/place":case"baby/ease":Xt(e),xt();break;case"settings/sound":ph(e);break;default:Kt(e)}});function mt(e){if(!e)return;const t=e.querySelector(":scope > .inner")??e;t.classList.remove("bounce"),t.offsetWidth,t.classList.add("bounce")}function sd(e,t,n=7){const s=M("fx"),i=["#ffd166","#ff8fab","#8ecae6","#80ed99","#c9a0dc"];for(let o=0;o<n;o++){const a=document.createElement("div");a.className="spark";const r=Math.PI*2*o/n+Math.random()*.5,l=40+Math.random()*30;a.style.left=e+"px",a.style.top=t+"px",a.style.background=i[o%i.length],a.style.setProperty("--dx",Math.cos(r)*l+"px"),a.style.setProperty("--dy",Math.sin(r)*l+"px"),s.appendChild(a),setTimeout(()=>a.remove(),650)}}const zr=e=>{const t=e?.getBoundingClientRect();t&&sd(t.left+t.width/2,t.top+t.height/2)};function id(e,t){sd(e,t,10),z.pop()}function Za(e){Tt.forEach((t,n)=>{t.classList.toggle("hold-target",!!e&&e.c.id===n),t.dataset.hand=e&&e.c.id===n?e.hand:""})}function mh(e,t){C.dispatch({type:"char/hold",id:e.c.id,hand:e.hand,room:e.c.room,itemId:t}),st=null,Kt(C.get());const n=Tt.get(e.c.id);mt(n),zr(n?.querySelector(`.held[data-hand="${e.hand}"]`)),z.sparkle()}const gn=new Map;let Qt=!1,Na=0;const od=()=>[...gn.values()].reduce((e,t)=>e+t,0)/gn.size;F.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&(gn.set(e.pointerId,e.clientX),gn.size>=2&&(Qt=!0,Na=od(),Lr(),xe.classList.add("hidden")))},!0);window.addEventListener("pointermove",e=>{if(gn.has(e.pointerId)&&(gn.set(e.pointerId,e.clientX),Qt&&gn.size>=2)){const t=od();Fe(ae-(t-Na)/yt()),Na=t}},!0);const yh=e=>{gn.delete(e.pointerId),gn.size<2&&Qt&&(gn.size===0?Qt=!1:Na=od())};window.addEventListener("pointerup",yh,!0);window.addEventListener("pointercancel",yh,!0);const ti=80;function XM(e,t){const n=F.getBoundingClientRect();return t<n.top-40||t>n.bottom+10?0:e<n.left+ti?-Math.min(1,(n.left+ti-e)/ti)*16:e>n.right-ti?Math.min(1,(e-(n.right-ti))/ti)*16:0}function ls(e,t){let n=e,s=0;const i=()=>{const r=Qt?0:XM(n.clientX,n.clientY);if(r){const l=ae;Fe(ae+r),ae!==l&&t.onMove(n)}s=requestAnimationFrame(i)};t.edgeScroll!==!1&&(s=requestAnimationFrame(i));const o=r=>{r.pointerId===e.pointerId&&(r.preventDefault(),n=r,Qt||t.onMove(r))},a=r=>{r.pointerId===e.pointerId&&(cancelAnimationFrame(s),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),t.onUp(r))};window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a)}function JM(e){return new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,button:e.button,buttons:e.buttons,isPrimary:e.isPrimary})}function e9(e,t){const n=t.target,s=n&&n.closest?n.closest("img.artimg"):null;if(s&&!Ac(s,t.clientX,t.clientY)){const i=W5(t.clientX,t.clientY),o=i?.closest(".item"),a=i?.closest(".char");o&&o!==e?(t.stopPropagation(),sc(o,t)):a&&(t.stopPropagation(),a.dispatchEvent(JM(t)));return}sc(e,t)}function t9(e,t){if(t.preventDefault(),t.stopPropagation(),Qt)return;const n=e.dataset.id,s=t.clientX,i=t.clientY;ls(t,{edgeScroll:!1,onMove(){},onUp(o){Math.hypot(o.clientX-s,o.clientY-i)>6||H9(e,n)}})}function sc(e,t,n=!1){if(t.preventDefault(),t.stopPropagation(),Qt)return;if(Te.isPlay()){t9(e,t);return}if(!It()){Bn(e);return}const s=C.get(),i=s.currentRoom,o=e.dataset.id,a=s.rooms[i].items.find(g=>g.id===o);if(!a)return;const r=Me[a.kind],l=Rt(t.clientX,t.clientY),c={x:a.x-l.x,y:a.y-l.y};let p=n,d=null;st=o,C.dispatch({type:"item/front",room:i,id:o}),e.classList.add("lifted"),z.pick(),ls(t,{onMove(g){const h=Rt(g.clientX,g.clientY);Math.hypot(h.x-l.x,h.y-l.y)>6&&(p=!0),p&&(xe.classList.add("hidden"),ua.classList.add("show")),ua.classList.toggle("hot",qp(g.clientX,g.clientY));const m=r.w*Ge(a)/2;C.dispatch({type:"item/move",room:i,id:o,x:Math.max(m*.6,Math.min(_e-m*.6,h.x+c.x)),y:Ig(r,h.y+c.y),...p?{stand:!0}:{}}),p&&xe.classList.add("hidden"),d=p&&r.holdable?th(h):null,Za(d)},onUp(g){if(e.classList.remove("lifted"),ua.classList.remove("show","hot"),Za(null),p&&qp(g.clientX,g.clientY)){st=null,C.dispatch({type:"item/delete",room:i,id:o}),id(g.clientX,g.clientY);return}if(p&&d){mh(d,o);return}p?(z.drop(),mt(e)):(z.click(),Dh(o),Wx(e)),Kt(C.get())}})}function n9(e,t,n){if(n.preventDefault(),n.stopPropagation(),Qt||Te.isPlay())return;const s=e.dataset.cid,i=t.dataset.hand,o=C.get().characters.find(p=>p.id===s),a=o?.held[i];if(!o||!a)return;const r=t.getBoundingClientRect(),l=Rt(r.left+r.width/2,r.bottom);C.dispatch({type:"char/release",id:s,hand:i,x:l.x,y:l.y});const c=se.querySelector(`.item[data-id="${a.id}"]`);c&&sc(c,n,!0)}function s9(e){e.addEventListener("pointerdown",t=>{const n=t.target.closest(".held"),s=n?.querySelector("img.artimg"),i=!!s&&!Ac(s,t.clientX,t.clientY);if(n&&!i){if(Te.isPlay()){t.preventDefault(),t.stopPropagation();return}if(!It()){t.stopPropagation(),Bn(e);return}return n9(e,n,t)}if(t.preventDefault(),t.stopPropagation(),Qt||Te.isPlay()&&!Jg())return;if(!It()){Bn(e);return}st=null,Kt(C.get());const o=e.dataset.cid;Pe=o;const a=C.get(),r=a.characters.find(h=>h.id===o);if(!r)return;const l=Rt(t.clientX,t.clientY),c=$t(a.currentRoom,Mt(r),r),p={x:c.x-l.x,y:c.y-l.y};let d=c.x,g=!1;e.classList.add("lifted"),z.pick(),Xt(C.get()),wo=!0,ls(t,{onMove(h){const m=Rt(h.clientX,h.clientY),b=m.x+p.x;if(Math.hypot(m.x-l.x,m.y-l.y)>6&&(g=!0),!g)return;const _=C.get().characters.find(u=>u.id===o);if(!_)return;if(Math.abs(b-d)>3){const u=b<d;u!==_.flip&&C.dispatch({type:"char/update",id:o,patch:{flip:u}}),d=b}const y=Math.max(vi+40,m.y+p.y);Fi(o,a.currentRoom,b,y,null),Te.isPlay()&&(yo=Va(h.clientX,h.clientY)?.id??null),document.querySelectorAll(".tab").forEach(u=>u.classList.remove("drop")),document.elementFromPoint(h.clientX,h.clientY)?.closest(".tab:not(.on)")?.classList.add("drop")},onUp(h){wo=!1,yo=null,e.classList.remove("lifted"),document.querySelectorAll(".tab").forEach(k=>k.classList.remove("drop"));const m=document.elementFromPoint(h.clientX,h.clientY)?.closest("[data-room]"),b=C.get().characters.find(k=>k.id===o);if(!g||!b){z.click();return}if(m&&m.dataset.room!==a.currentRoom){const k=m.getBoundingClientRect();sd(k.left+k.width/2,k.top+k.height/2,9),z.swish(),Fi(o,m.dataset.room,b.x,b.y,null);return}const _=Rt(h.clientX,h.clientY),y=_.x+p.x,u=Math.max(vi+40,_.y+p.y);if(Te.isPlay()){const k=Va(h.clientX,h.clientY),x=lo({mode:"play",via:"drag",releaseX:y,releaseY:u,piece:k?Cr(k):null,occupied:bo(o)});Fi(o,a.currentRoom,x.x,x.y,x.seat)}else Fi(o,a.currentRoom,y,u,null);z.drop(),mt(e),requestAnimationFrame(()=>Os(!0))}})})}function i9(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Te.isPlay()){n.stopPropagation();return}if(!It()){Bn(e);return}const s=document.createElement("div");s.className="ghost",s.innerHTML=hn(t),document.body.appendChild(s);const i=Math.max(1,60/(Math.max(t.w,ct(t))*yt())),o=t.w*yt()*i,a=ct(t)*yt()*i;s.style.width=o+"px",s.style.height=a+"px";let r=null;const l=d=>{s.style.left=d.clientX-o/2+"px",s.style.top=d.clientY-a*.8+"px",r=t.holdable&&Xl(d.clientX,d.clientY)?th(Rt(d.clientX,d.clientY)):null,Za(r)};l(n),z.pick(),e.classList.add("pressed");const c=n.clientX,p=n.clientY;ls(n,{onMove:l,onUp(d){s.remove(),e.classList.remove("pressed"),Za(null);const g=C.get().currentRoom,h=Math.hypot(d.clientX-c,d.clientY-p)<8;let m,b;if(h)m=ae+380+Math.random()*240,b=t.wall?Math.min(Dg,200+ct(t)/2):500+Math.random()*40;else if(Xl(d.clientX,d.clientY)){const u=Rt(d.clientX,d.clientY);m=u.x,b=Ig(t,u.y+ct(t)*.2)}else return;const _={id:Kl(t.kind.replace(/[^a-z0-9-]/gi,"")),kind:t.kind,x:m,y:b,flip:!1,z:0,scale:1};if(g!=="backyard"&&C.get().rooms[g].items.length===0){const u=Zx(k=>Kl(k),g);for(let k=0;k<u.length;k++)C.dispatch({type:"item/add",room:g,item:u[k]})}if(C.dispatch({type:"item/add",room:g,item:_}),!h&&r){mh(r,_.id);return}st=_.id,Kt(C.get());const y=se.querySelector(`.item[data-id="${_.id}"]`);mt(y),zr(y),z.sparkle()}})})}function o9(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Te.isPlay())return;if(!It()){Bn(e);return}const s=C.get().characters.find(g=>g.id===t);if(!s)return;const i=To(s),o=as*i*yt(),a=un*i*yt(),r=document.createElement("div");r.className="ghost",r.innerHTML=wt(s),r.style.width=o+"px",r.style.height=a+"px",document.body.appendChild(r);const l=g=>{r.style.left=g.clientX-o/2+"px",r.style.top=g.clientY-a*.85+"px"},c=n.clientX,p=n.clientY;let d=!1;r.style.visibility="hidden",ls(n,{onMove(g){Math.hypot(g.clientX-c,g.clientY-p)>8&&(d=!0,r.style.visibility=""),l(g)},onUp(g){if(r.remove(),!d){z.click(),Pe=t,_i("dress");return}if(!Xl(g.clientX,g.clientY))return;const h=Rt(g.clientX,g.clientY),m=C.get().currentRoom;C.dispatch({type:"char/move",id:t,room:m,x:h.x,y:Math.max(vi+40,h.y+un*i*.15)}),Pe=t,Xt(C.get());const b=Tt.get(t);mt(b),zr(b),z.sparkle()}})})}function wh(){if(!It())return Bn(null),null;const e=C.get();if(e.characters.length>=xi)return null;const t=Kl("c"),n=pr();C.dispatch({type:"char/add",char:ts({id:t,...dr(n),look2:n,room:e.currentRoom,x:ae+300+Math.random()*400,y:520+Math.random()*40})}),Pe=t,Xt(C.get());const s=Tt.get(t);return mt(s),zr(s),z.sparkle(),t}function a9(){return Fc==="all"?"all":C.get().currentRoom}function Dt(){const e=C.get().currentRoom,t=a9(),n=Zc.find(l=>l.id===e)?.name??"This room",s=t==="all";M("roomFilter").innerHTML=`<button class="rf ${s?"on":""}" data-rf="${s?"room":"all"}">${s?"Just "+n:"All rooms"}</button>`;const i=al("secrets").length>0,o=ki.filter(l=>l.id!=="secrets"&&(l.kind==="people"||l.kind==="pack"&&e!=="backyard"||al(l.id).length));!(Ct==="secrets"&&i)&&!o.some(l=>l.id===Ct)&&(Ct=o[1]?.id??"__people"),M("cats").innerHTML=o.map(l=>`<button class="cat ${l.kind} ${l.id===Ct?"on":""}" data-cat="${l.id}" aria-label="${l.name}" title="${l.name}">${l.kind==="people"?wM:l.kind==="pack"?`<span class="packicon">${hn(Me[l.icon])}</span><span class="packname">${l.name}</span>`:hn(Me[l.icon])}</button>`).join("")+(i?`<button class="cat secretTab ${Ct==="secrets"?"on":""}" data-cat="secrets" aria-label="Secrets" title="Secrets">🎁</button>`:"");const a=M("shelf");if(Qa.length=0,a.innerHTML="",!It()){a.innerHTML='<div class="empty locked">🔒 This house is look-only right now</div>';return}if(Ct==="__people"){const l=C.get(),c=Us();if(c){const p=document.createElement("button");p.className="thing person me",p.setAttribute("aria-label","Me"),p.innerHTML=`<div class="face">${wt(c)}</div><span class="meStar">★</span>`,p.addEventListener("click",()=>{z.click(),Pe=ut,_i("dress")}),a.appendChild(p)}for(const p of l.characters){const d=document.createElement("button");d.className="thing person",d.setAttribute("aria-label","Character"),d.innerHTML=`<div class="face">${wt(p)}</div><span class="where" style="background:${Og(p.room)}"></span>`,a.appendChild(d),o9(d,p.id)}if(l.characters.length<xi){const p=document.createElement("button");p.className="thing add",p.setAttribute("aria-label","New character"),p.innerHTML=Wg,p.addEventListener("click",()=>{wh()&&(Dt(),_i("dress"))}),a.appendChild(p)}return}const r=al(Ct);r.length||(a.innerHTML='<div class="empty">Nothing here yet!</div>');for(const l of r){const c=document.createElement("button");c.className="thing",c.setAttribute("aria-label",l.name),c.dataset.kind=l.kind;const p=yi()&&As(l.kind)?fh.get(l.kind):void 0;if(p)for(let d=0;d<p.length;d++)c.appendChild(p[d]);else c.innerHTML=D5(l,_d(l.kind));a.appendChild(c),i9(c,l)}a.scrollLeft=0,ad(),YM(),hh()}function ad(){const e=document.querySelector(".drawerTop"),t=document.getElementById("drawerBar");!e||!t||t.classList.toggle("more",e.scrollWidth-e.clientWidth-e.scrollLeft>6)}document.querySelector(".drawerTop").addEventListener("scroll",ad,{passive:!0});window.addEventListener("resize",ad);function Gp(e,t,n){return`<div class="sw">${e.map(s=>`<button class="dot ${s===t?"on":""}" style="background:${s}" data-act="${n}" data-v="${s}"></button>`).join("")}</div>`}let vo=null,ai=!1;function r9(e){if(e===ut){const n=Us();if(!n||n.look2)return;Vn(ut,ro(_a(n)));return}const t=C.get().characters.find(n=>n.id===e);!t||t.look2||Vn(e,{...ro(_a(t)),size:t.size})}function _n(){const e=C.get(),t=M("card");if(vo==="paint"){t.classList.remove("avCard");const n=e.rooms[e.currentRoom],s=Bl.filter(a=>a.kind==="wallpaper"),i=Bl.filter(a=>a.kind==="floor"),o=(a,r,l,c)=>`<button class="dot pat tile ${a.id===r?"on":""}" data-act="${l}" data-v="${a.id}" title="${a.name} (${jf(a.pack)})" style="background-color:${c};background-image:${Jl(a.url)};background-size:48px auto"></button>`;t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Paint the room</h2>
      <h3>Walls</h3>${Gp(mM,n.wallpaper,"wall")}
      <h3>Wallpaper</h3><div class="sw">${nh.map((a,r)=>`<button class="dot pat ${!n.wallTile&&r===n.pattern?"on":""}" data-act="pat" data-v="${r}" style="background-color:${n.wallpaper};background-image:${a};background-size:${r===1?"16px 16px":r===3?"20px 20px":"auto"}"></button>`).join("")}${s.map(a=>o(a,n.wallTile,"wtile",n.wallpaper)).join("")}</div>
      <h3>Floor</h3>${Gp(yM,n.floor,"floor")}
      ${i.length?`<h3>Floor style</h3><div class="sw"><button class="dot pat ${n.floorTile?"":"on"}" data-act="ftile" data-v="" style="background-color:${n.floor};background-image:${sh}"></button>${i.map(a=>o(a,n.floorTile,"ftile",n.floor)).join("")}</div>`:""}`}else if(vo==="dress"){t.classList.add("avCard");let n=e,s=Us(),i=s?ts({id:ut,...s}):null,o=Pe===ut&&i?i:n.characters.find(r=>r.id===Pe)??i??n.characters[0];o&&!o.look2&&r9(o.id),n=C.get(),s=Us(),i=s?ts({id:ut,...s}):null,o=Pe===ut&&i?i:n.characters.find(r=>r.id===Pe)??i??n.characters[0];const a=`<div class="picker">${i?`<button class="pk me ${o?.id===ut?"on":""}" data-act="pickc" data-v="${ut}"><div class="face">${wt(i)}</div><span class="meStar">★</span></button>`:""}${n.characters.map(r=>`<button class="pk ${r.id===o?.id?"on":""}" data-act="pickc" data-v="${r.id}"><div class="face">${wt(r)}</div><span class="where" style="background:${Og(r.room)}"></span></button>`).join("")}${n.characters.length<xi?`<button class="pk add" data-act="newc">${Wg}</button>`:""}</div>`;if(!o){t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${a}<div class="dress"><p class="hint">Tap + to make someone new!</p></div>`;return}Pe=o.id,t.innerHTML=Mx(o,a,ai,Wt.trash)}}function _i(e){vo=e,ai=!1,_n(),M("sheet").classList.remove("hidden"),z.swish()}M("sheet").addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(e.target===M("sheet")||t?.dataset.act==="close"){M("sheet").classList.add("hidden"),vo=null,z.click(),Ct==="__people"&&Dt();return}if(!t)return;const n=C.get(),s=n.currentRoom,i=t.dataset.v,o=Pe??"",a=t.dataset.act;if(a!=="delc"&&(ai=!1),a&&a.indexOf("av-")===0){const r=o===ut?Us():C.get().characters.find(p=>p.id===o);if(a==="av-surprise"){Vn(o,{...ro(pr()),size:r?.size??"kid"}),z.sparkle(),_n(),mt(document.querySelector(".avStage"));return}const l=r?.look2??_a(r??{}),c=Lx(l,a,i??"");if(!c){z.click(),_n();return}Vn(o,{...ro(c),size:r?.size??"kid"}),z.sparkle(),_n(),mt(document.querySelector(".avStage"));return}switch(a){case"wall":C.dispatch({type:"room/wallpaper",room:s,color:i});break;case"floor":C.dispatch({type:"room/floor",room:s,color:i});break;case"pat":C.dispatch({type:"room/pattern",room:s,pattern:+i});break;case"wtile":C.dispatch({type:"room/wallTile",room:s,tile:i});break;case"ftile":C.dispatch({type:"room/floorTile",room:s,tile:i||null});break;case"skin":case"hair":case"shirt":case"pants":Vn(o,{[a]:i});break;case"hs":Vn(o,{hairStyle:+i});break;case"acc":Vn(o,{acc:+i});break;case"size":{const r=o===ut?Us():C.get().characters.find(l=>l.id===o);Vn(o,{size:i,...r?.look2?{look2:r.look2}:{}}),Xt(C.get());break}case"pickc":Pe=i,Xt(C.get()),z.click(),_n();return;case"newc":if(!wh())return;break;case"delc":if(o===ut||!It())return;if(!ai){ai=!0,z.click(),_n();return}ai=!1;{const l=Tt.get(o)?.getBoundingClientRect();C.dispatch({type:"char/delete",id:o}),l?id(l.left+l.width/2,l.top+l.height/2):z.pop()}Pe=C.get().characters[0]?.id??null,_n();return}z.sparkle(),_n(),mt(document.querySelector(".preview"))});M("tabs").addEventListener("click",e=>{const t=e.target.closest("[data-room]");if(!t)return;const n=t.dataset.room;n!==C.get().currentRoom&&(st=null,z.swish(),F.classList.remove("swap"),F.offsetWidth,F.classList.add("swap"),C.dispatch({type:"room/switch",room:n}))});M("cats").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");t&&(Ct=t.dataset.cat,z.click(),Dt())});M("roomFilter").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");if(t){Ct=t.dataset.cat,z.click(),Dt();return}const n=e.target.closest("[data-rf]");n&&(Fc=n.dataset.rf==="all"?"all":"",z.click(),Dt())});xe.addEventListener("pointerdown",e=>e.stopPropagation());xe.addEventListener("click",e=>{const t=e.target.closest("[data-a]");if(!t||!st)return;if(!It()){Bn(null);return}const n=C.get().currentRoom,s=st,i=se.querySelector(`.item[data-id="${s}"]`);switch(t.dataset.a){case"smaller":case"bigger":{const o=C.get().rooms[n].items.find(l=>l.id===s);if(!o)break;const a=Ss.indexOf(Bs(o.size)),r=t.dataset.a==="smaller"?a-1:a+1;if(r<0||r>=Ss.length)break;C.dispatch({type:"item/size",room:n,id:s,size:Ss[r]}),z.click(),mt(i);break}case"flip":C.dispatch({type:"item/flip",room:n,id:s}),z.swish(),mt(i);break;case"front":C.dispatch({type:"item/front",room:n,id:s}),z.click(),mt(i);break;case"back":C.dispatch({type:"item/back",room:n,id:s}),z.click(),mt(i);break;case"delete":{const o=i?.getBoundingClientRect();st=null,C.dispatch({type:"item/delete",room:n,id:s}),o&&id(o.left+o.width/2,o.top+o.height/2);break}}});F.addEventListener("pointerdown",e=>{if(e.target.closest(".nudge"))return;Lr();const t=e.clientX,n=ae;let s=!1,i=0,o=e.clientX,a=performance.now();ls(e,{edgeScroll:!1,onMove(r){if(Math.abs(r.clientX-t)>6&&(s=!0),!s)return;const l=performance.now();i=(r.clientX-o)/Math.max(1,l-a),o=r.clientX,a=l,Fe(n-(r.clientX-t)/yt())},onUp(){if(!s){st&&(st=null,Kt(C.get()));return}if(Qt)return;let r=-i*16/yt();const l=()=>{Math.abs(r)<.3||(Fe(ae+r),r*=.92,fi=requestAnimationFrame(l))};fi=requestAnimationFrame(l)}})});F.addEventListener("wheel",e=>{e.preventDefault(),Lr(),Fe(ae+(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)/yt())},{passive:!1});M("nudgeL").addEventListener("pointerdown",e=>{e.stopPropagation(),z.swish(),Er((mo??ae)-re*.6)});M("nudgeR").addEventListener("pointerdown",e=>{e.stopPropagation(),z.swish(),Er((mo??ae)+re*.6)});const Yp=M("minimap");Yp.addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault();const t=n=>{const s=Yp.getBoundingClientRect();Er((n.clientX-s.left)/s.width*_e-re/2)};t(e),z.click(),ls(e,{edgeScroll:!1,onMove:t,onUp(){}})});M("btnPaint").addEventListener("click",()=>{if(!It())return Bn(null);_i("paint")});M("btnDress").addEventListener("click",()=>_i("dress"));M("btnSound").addEventListener("click",()=>{C.dispatch({type:"settings/sound",on:!C.get().soundOn}),z.click()});document.addEventListener("gesturestart",e=>e.preventDefault());document.addEventListener("contextmenu",e=>e.preventDefault());"serviceWorker"in navigator&&navigator.serviceWorker.register("/cozy-preview/sw.js");window.__store=C;window.__items=Object.fromEntries(wn.filter(e=>e.img).map(e=>[e.kind,{w:e.w,h:ct(e),cat:e.cat,holdable:e.holdable,svg:e.img.includes(".svg")}]));window.__cam={get:()=>ae,set:Fe};window.__phoneShowKids=()=>it();window.__avatar={richAvatars:Wc,randomLook2:pr,look2FromLegacy:_a,legacyFromLook2:dr,sanitizeLook2:$o,handsFor:$r};window.__frameHouseKid=()=>Os(!0);window.__layoutNameTags=()=>fg();window.__lie={bedArt:gr,lieBedKinds:du,lieOffset:xa,lieSpot:hu,box(e){const t=Me[e];return t?{w:t.w,h:ct(t)}:null}};window.__paint=()=>{xt()};const de=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function It(){return!w||De===K||w.canEdit(ze)}function Bn(e){z.pop();const t=M("houseTag");t.classList.add("show"),t.classList.remove("wiggle"),t.offsetWidth,t.classList.add("wiggle"),window.clearTimeout(Fa),Fa=window.setTimeout(()=>{S==="house"&&w&&!document.body.classList.contains("own-house")||t.classList.remove("show")},2e3),e&&(e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope")),Z("🔒 Look-only house: ask the owner to unlock it!",1800)}const we=()=>w?.myPresence()??null,Us=()=>w?w.players.get(w.pid)?.look??null:null;function Vn(e,t){if(e===ut){const n=Us();if(!n||!w)return;w.setLook(Lo({...n,...t})),xt(),S==="street"&&ja(),S==="park"&&Qs(),S==="ranch"&&es();return}C.dispatch({type:"char/update",id:e,patch:t})}function je(e){w?.setPresence(e)}function l9(e){const t=we();t&&t.where==="house"&&je({...t,room:e})}function bh(e){De=e,Ag(e),st=null,setTimeout(()=>o0.update());for(const t of Object.keys(Wa))delete Wa[t];Pe=e===K?e.get().characters[0]?.id??null:ut,Vs(),Dt()}function rd(e,t,n,s){return`<div class="inner">${wt(e,n,s)}</div><div class="nametag">${de(t)}</div>`}function xt(){const e=new Set;if(w&&De!==K&&S==="house"){const n=C.get().currentRoom,s=[...w.presence.entries()],i=we();i&&s.push([w.pid,i]);for(const[o,a]of s){const r=w.players.get(o);if(!r||a.where!=="house"||a.houseId!==ze||a.room!==n)continue;e.add(o);let l=Ls.get(o);(!l||!l.isConnected)&&(l=document.createElement("div"),l.className="char avatar "+(o===w.pid?"mine":"other"),l.dataset.pid=o,se.appendChild(l),Ls.set(o,l),o===w.pid?c9(l):l.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation()}));const c=r.look,p=Tn(o,a),d=p?.pose??null,g=io(C.get())===o,h=JSON.stringify(c)+r.nickname+(d||"")+(g?"h":"");if(l.dataset.look!==h){const y=l.querySelector(".bubble");l.innerHTML=rd(c,r.nickname,d,g),y&&l.appendChild(y),l.dataset.look=h}l.classList.toggle("holding",g);const m=Is[c.size]??1,b=$t(n,p,a);js(l,b.x,b.y,as*m,un*m);const _=p&&C.get().rooms[n].items.find(y=>y.id===p.item);if(l.style.zIndex=String(_?1e3+_.z+1+p.n:5e3+Math.round(a.y)),l.classList.toggle("flipped",a.flip),l.classList.toggle("pose-sit",d==="sit"),l.classList.toggle("pose-lie",d==="lie"),l.classList.toggle("pose-lie-r",d==="lie"&&!!_?.flip),So(l,c,o===w.pid),g){const y=lg(c,d);y?ch("avatar",o,l,y,b.y):lh("avatar",o)}}}const t=io(C.get());w&&S==="house"&&t&&e.has(t)||rh("avatar");for(const[n,s]of Ls)(!e.has(n)||!s.isConnected)&&(e.has(n)||s.remove(),Ls.delete(n));ed(),Gs(),Sr(),qs()}function c9(e){e.addEventListener("pointerdown",t=>{if(t.preventDefault(),t.stopPropagation(),Qt||!w)return;const n=we();if(!n||n.where!=="house")return;const s=Rt(t.clientX,t.clientY),i=$t(C.get().currentRoom,Tn(w.pid,n),n),o={x:i.x-s.x,y:i.y-s.y};let a=i.x,r=!1;e.classList.add("lifted"),z.pick(),wo=!0,ls(t,{onMove(l){const c=Rt(l.clientX,l.clientY),p=we();if(!p||p.where!=="house"||(Math.hypot(c.x-s.x,c.y-s.y)>6&&(r=!0),!r))return;const d=Math.max(40,Math.min(_e-40,c.x+o.x)),g=Math.max(vi+40,Math.min(Ue,c.y+o.y)),h=Math.abs(d-a)>3?d<a:p.flip;Math.abs(d-a)>3&&(a=d),ya(p,d,g,h,null),xt(),Ua(C.get()),Te.isPlay()&&(yo=Va(l.clientX,l.clientY)?.id??null)},onUp(l){wo=!1,yo=null,e.classList.remove("lifted");const c=we();if(!r||!c||c.where!=="house"){z.click();return}const p=Rt(l.clientX,l.clientY),d=Math.max(40,Math.min(_e-40,p.x+o.x)),g=Math.max(vi+40,Math.min(Ue,p.y+o.y));if(Te.isPlay()){const h=Va(l.clientX,l.clientY),m=lo({mode:"play",via:"drag",releaseX:d,releaseY:g,piece:h?Cr(h):null,occupied:bo(void 0,w.pid)}),b=m.seat?{id:m.seat.item,pose:m.seat.pose,n:m.seat.n}:null;ya(c,m.x,m.y,c.flip,b)}else ya(c,d,g,c.flip,null);xt(),Ua(C.get()),z.drop(),mt(e),requestAnimationFrame(()=>Os(!0))}})})}function d9(e){return e.kind==="text"?e.v:(e.kind==="phrase"?Xi:Bf)[e.v]??""}function Ei(){const e=document.querySelectorAll(".bubble");if(!document.body.classList.contains("phone")){e.forEach(s=>{(s.style.marginLeft||s.style.marginTop)&&(s.style.marginLeft="",s.style.marginTop="")});return}const t=F.getBoundingClientRect(),n=yt()||1;e.forEach(s=>{s.style.marginLeft="0px",s.style.marginTop="0px";const i=s.getBoundingClientRect();let o=0;i.width>=t.width-8||i.left<t.left+4?o=t.left+4-i.left:i.right>t.right-4&&(o=t.right-4-i.right);let a=0;i.top<t.top+4?a=t.top+4-i.top:i.bottom>t.bottom-4&&(a=t.bottom-4-i.bottom),o&&(s.style.marginLeft=o/n+"px"),a&&(s.style.marginTop=a/n+"px")})}function p9(e,t){const n=S==="street"?document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`):S==="park"?document.querySelector(`#pavatars .savatar[data-pid="${e}"]`):S==="ranch"?document.querySelector(`#ravatars .savatar[data-pid="${e}"]`):S==="gameroom"?document.querySelector(`#gavatars .savatar[data-pid="${e}"]`):Ls.get(e),s=n?[n]:[];for(const i of s){i.querySelector(".bubble")?.remove();const o=document.createElement("div");o.className="bubble"+(t.kind==="emote"?" emote":""),o.textContent=d9(t),i.appendChild(o),Ei(),setTimeout(()=>o.classList.add("out"),4600),setTimeout(()=>o.remove(),5e3)}e!==w?.pid&&z.click()}function Pr(){const e=we();if(!w||!e)return 0;let t=0;return w.presence.forEach(n=>{jm(e,n)&&t++}),t}function Gs(){const e=Pr();M("btnChat").classList.toggle("glow",e>0),Tr();const t=document.getElementById("chatNear");t&&(t.textContent=e?`${e} friend${e>1?"s":""} nearby can hear you`:"Walk closer to a friend to talk!",M("chatTray").classList.toggle("nobody",!e))}function vh(){const e=M("chatTray");if(!w)return;const t=document.body.classList.contains("phone"),n=`<div class="phrases">${Xi.map((a,r)=>`<button data-phrase="${r}">${de(a)}</button>`).join("")}</div>`,s=w.settings.freeChat?`<form class="typed" id="chatForm"><input id="chatInput" maxlength="${Mc}" autocomplete="off" autocorrect="on" enterkeyhint="send" placeholder="Type a message…"/><button type="submit">Send</button></form><div class="chatWarn" id="chatWarn"></div>`:'<div class="presetsOnly">Picking from the bubbles above 💬</div>',i=t?'<button type="button" class="chatMore" data-chat="more">more</button>':"";e.innerHTML=`<div class="chatHead"><span id="chatNear"></span><button class="close" data-chat="close">✕</button></div>
    <div class="emotes">${Bf.map((a,r)=>`<button data-emote="${r}">${a}</button>`).join("")}</div>
    ${i}
    <div class="chatExtra${t?" hidden":""}">${n}${s}</div>`,Gs(),document.getElementById("chatForm")?.addEventListener("submit",a=>{a.preventDefault();const r=M("chatInput"),l=Dm(r.value);if(!l.ok){M("chatWarn").textContent=ur[l.reason]??"",z.pop();return}if(!Pr()){Z("Walk closer to a friend to talk!");return}w.say({kind:"text",v:l.text}),r.value="",M("chatWarn").textContent="",r.blur()})}M("chatTray").addEventListener("click",e=>{const t=e.target;if(!w)return;if(t.closest('[data-chat="close"]')){M("chatTray").classList.add("hidden");return}const n=t.closest('[data-chat="more"]');if(n){const o=M("chatTray").querySelector(".chatExtra");o?.classList.toggle("hidden"),n.textContent=o&&!o.classList.contains("hidden")?"less":"more";return}const s=t.closest("[data-emote]"),i=t.closest("[data-phrase]");if(!(!s&&!i)){if(!Pr()){Z("Walk closer to a friend to talk!");return}w.say(s?{kind:"emote",v:+s.dataset.emote}:{kind:"phrase",v:+i.dataset.phrase}),z.click()}});M("btnChat").addEventListener("click",()=>{M("chatTray").classList.toggle("hidden")||(vh(),z.swish())});function mn(){const e=document.body.classList,n=!!w&&De!==K&&S==="house"?w.houses.get(ze):void 0,s=!!n&&n.meta.ownerId===w.pid;if(e.toggle("mode-hood",!!w),e.toggle("view-street",S!=="house"),e.toggle("view-park",S==="park"),e.toggle("view-ranch",S==="ranch"),e.toggle("view-map",S==="street"),e.toggle("view-gameroom",S==="gameroom"),e.toggle("in-barn",S==="ranch"&&Ie),e.toggle("mode-play",S==="house"&&Te.isPlay()),kd(),Lh(),e.toggle("own-house",s),e.toggle("locked",!!n&&!It()),e.toggle("has-hood",!!mr()),Tr(),n){const i=w.players.get(n.meta.ownerId)?.nickname??"";M("houseTag").innerHTML=`${n.meta.locked?"🔒 ":""}<b>${de(n.meta.name)}</b>${s?" · yours":i?" · "+de(i):""}`;const o=M("lockIco");o&&(o.innerHTML=n.meta.locked?St.lockOn:St.lockOff);const a=n.meta.locked?"Unlock my house":"Lock my house";M("btnLock").setAttribute("aria-label",n.meta.locked?"Unlock house":"Lock house");const r=M("lockLabel");r&&(r.textContent=a)}Gs(),f9(),document.body.classList.contains("phone")&&qg()}let cl="",Fa=0;function f9(){const e=M("houseTag"),t=!!w&&S==="house"&&!document.body.classList.contains("own-house");if(S!=="house"||!w){cl="",e.classList.remove("show");return}if(t){e.classList.add("show");return}const n=ze||"solo";cl!==n&&(cl=n,e.classList.add("show"),window.clearTimeout(Fa),Fa=window.setTimeout(()=>e.classList.remove("show"),2e3))}M("btnLock").addEventListener("click",()=>{const e=w?.houses.get(ze);!e||e.meta.ownerId!==w.pid||(w.lock(e.meta.id,!e.meta.locked),z.click(),Z(e.meta.locked?"Unlocked: friends can decorate!":"Locked: friends can look but not change things"))});const bt=new Map;let Kp="",ic=0,Ze={w:Sn,h:zn,portrait:!1};function g9(){return document.body.classList.contains("phone-portrait")}function kh(){const e=M("street"),t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);return Math.min(t/Ze.w,n/Ze.h)}function h9(e){const t=M("street"),n=M("mapWorld"),s=Ze.w*e,i=Ze.h*e;n.style.marginLeft=Math.max(0,Math.floor((t.clientWidth-s)/2))+"px",n.style.marginTop=Math.max(0,Math.floor((t.clientHeight-i)/2))+"px",t.scrollLeft=0,t.scrollTop=0,_h()}function _h(){const e=M("street"),t=M("mapWorld"),n=4,s=e.clientWidth-n,i=e.clientHeight-n,o=t.offsetLeft,a=t.offsetTop;t.querySelectorAll(".mapSign").forEach(r=>{r.style.transform="translateX(-50%)";const l=r.offsetWidth,c=r.offsetHeight,p=o+r.offsetLeft-l/2,d=a+r.offsetTop;let g=0,h=0;p<n&&(g=n-p),p+l+g>s&&(g-=p+l+g-s),d<n&&(h=n-d),d+c+h>i&&(h-=d+c+h-i),u9(r,g,h,o,a,n,s,i)})}function u9(e,t,n,s,i,o,a,r){const l=[...e.parentElement.querySelectorAll(".mapMail")],c=()=>{const d=e.offsetWidth,g=e.offsetHeight,h=s+e.offsetLeft-d/2+t,m=i+e.offsetTop+n;return{left:h,top:m,right:h+d,bottom:m+g,width:d,height:g}};for(let d=0;d<6;d++){const g=c(),h=l.find(x=>{const R=s+x.offsetLeft,H=i+x.offsetTop,I=R+x.offsetWidth,X=H+x.offsetHeight;return g.right>R+2&&g.left<I-2&&g.bottom>H+2&&g.top<X-2});if(!h)break;const m=s+h.offsetLeft,b=i+h.offsetTop,_=b+h.offsetHeight,y=c(),u=_+4-y.top,k=y.bottom-(b-4);y.top+u+y.height<=r?n+=u:y.top-k>=o?n-=k:t-=Math.min(y.right,m+h.offsetWidth)-Math.max(y.left,m)+6}const p=c();p.left<o&&(t+=o-p.left),p.right>a&&(t-=p.right-a),p.top<o&&(n+=o-p.top),p.bottom>r&&(n-=p.bottom-r),e.style.transform=Math.abs(t)>.5||Math.abs(n)>.5?`translate(calc(-50% + ${t.toFixed(1)}px), ${n.toFixed(1)}px)`:"translateX(-50%)"}document.fonts?.ready.then(()=>{S==="street"&&_h()});function m9(){return w?[...w.houses.values()].map(e=>e.meta).sort((e,t)=>e.slot-t.slot):[]}function y9(e){const s=Math.round(97.5),i=Math.max(1,Math.ceil(e/(e===1?1:2))),o=158,a=318,l=a+(i-1)*o+s/2+108,c=Math.max(1020,l+78),p=Math.max(l,Math.min(c-88,Math.round(c*.74))),d=e===1?[280]:[150,410],g=e===1?1:2,h=Array.from({length:e},(m,b)=>({x:d[b%g],y:a+Math.floor(b/g)*o}));return{w:560,h:c,hw:104,hh:s,houses:h,square:{x:280,y:p},park:{x:96,y:122},club:{x:280,y:116},ranch:{x:458,y:120}}}function Es(e=!1){if(S!=="street")return;const t=M("mapWorld"),n=m9(),s=w?n.map(g=>({id:g.id,name:g.name,style:g.style,locked:g.locked,mine:g.ownerId===w.pid,lit:!!w.players.get(g.ownerId)?.online})):ic?Array.from({length:ic},(g,h)=>({id:"fake"+h,name:["Reagan","Quinn","Chloe","Sloane","Cada","Emma","Olivia","Charlotte","Amelia","Sophia","Isabella","Mia"][h%12]+"'s House",style:h,locked:h===3,mine:h===0,lit:h%3!==1})):[null],i=g9()?y9(Math.max(1,s.length)):null;Ze=i?{w:i.w,h:i.h,portrait:!0}:{w:Sn,h:zn,portrait:!1};const o=kh(),a=(Ze.portrait?"P":"L")+Ze.w+"x"+Ze.h+":"+o.toFixed(3)+JSON.stringify(n)+(w?n.map(g=>(w.players.get(g.ownerId)?.online?1:0)+(dl(g.id)?"u":"")).join("")+w.pid:"solo");if(!e&&a===Kp&&t.querySelector("#mapFaces")){ja();return}Kp=a,t.style.width=Ze.w*o+"px",t.style.height=Ze.h*o+"px",t.style.setProperty("--sc",String(o)),t.innerHTML=`<div class="mapClip">${i?d0(i.w,i.h):c0()}</div>`;const r=t.querySelector(".mapClip"),l=g=>g*o+"px";bt.clear();const c=s.length;let p="",d="";if(i){const{hw:g,hh:h}=i,m=34,b=40;s.forEach((k,x)=>{const R=i.houses[x]??i.houses[0],H=k?`house:${k.id}`:"home",I=k?k.name:"My House";bt.set(k?"house:"+k.id:"home",{x:R.x,y:R.y-h/2-8});const X=!!(k&&dl(k.id)),ce=R.x<i.w/2?Math.max(4,R.x-g/2-m-8):Math.min(i.w-m-4,R.x+g/2+8),G=Math.max(4,Math.min(i.h-b-4,R.y-h*.42));p+=`<button class="mapSpot mapHouse ${k?.mine||!k?"mine":""}" data-go="${H}" aria-label="${de(I)}" style="left:${l(R.x-g/2)};top:${l(R.y-h/2)};width:${l(g)};height:${l(h)}">${Ba(k?k.style:0,{lit:k?k.lit:!0})}${k?.locked?'<span class="lockBadge">🔒</span>':""}${k?.mine||!k?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${X?"up":""}" data-mail="${k?k.id:"home"}" aria-label="${de(I)} mailbox" style="left:${l(ce)};top:${l(G)};width:${l(m)};height:${l(b)}">${Yd(X)}</button>`,d+=`<div class="mapSign ${k?.mine||!k?"mine":""}" style="left:${l(R.x)};top:${l(R.y+h/2+2)}">${de(I)}</div>`});const _=(k,x,R,H,I,X,le,ce,G)=>{p+=`<button class="mapSpot ${k}" data-go="${x}" aria-label="${R}" style="left:${l(I-le/2)};top:${l(X-ce/2)};width:${l(le)};height:${l(ce)}">${H}</button>`,d+=`<div class="mapSign place" style="left:${l(I)};top:${l(X+G)}">${R==="The park"?"Park":R==="Rainbow Ranch"?"Rainbow Ranch":"Clubhouse"}</div>`};_("mapPark","park","The park",Ed,i.park.x,i.park.y,148,126,68),_("mapRanch","ranch","Rainbow Ranch",Cd,i.ranch.x,i.ranch.y,156,128,72),_("mapClub","gameroom","The clubhouse",Sd,i.club.x,i.club.y,146,120,68),bt.set("park",{x:i.park.x,y:i.park.y-78}),bt.set("ranch",{x:i.ranch.x,y:i.ranch.y-80}),bt.set("barn",{x:i.ranch.x,y:i.ranch.y+8}),bt.set("gameroom",{x:i.club.x,y:i.club.y-74}),bt.set("square",i.square);const y=[{x:i.park.x,y:i.park.y,r:90},{x:i.ranch.x,y:i.ranch.y,r:96},{x:i.club.x,y:i.club.y,r:88},{x:i.square.x,y:i.square.y,r:70},...i.houses.map(k=>({x:k.x,y:k.y,r:78}))],u=i.w/2;r.insertAdjacentHTML("beforeend",Ld(y,(k,x)=>Math.abs(k-u)<34,i.w,i.h)+g0(i.w,i.h,y)+p+'<div class="mapFaces" id="mapFaces"></div>')}else{const g=t.querySelector("#mapRoad"),h=g.getTotalLength(),m=Array.from({length:160},(x,R)=>g.getPointAtLength(h*R/159)),b=(x,R)=>m.some(H=>Math.hypot(H.x-x,H.y-R)<50),_=oc(),y=c>8?80:94,u=y*300/320,k=$h(g,c,_);s.forEach((x,R)=>{const H=k[R],I=x?`house:${x.id}`:"home",X=x?x.name:"My House";bt.set(x?"house:"+x.id:"home",{x:H.x,y:H.y-u/2-4});const le=!!(x&&dl(x.id)),ce=34,G=40,pe=14/o,sn=Math.max(4,Math.min(Sn-ce-4,H.x+y/2+pe)),Ht=Math.max(4,Math.min(zn-G-4,H.y-u*.22));p+=`<button class="mapSpot mapHouse ${x?.mine||!x?"mine":""}" data-go="${I}" aria-label="${de(X)}" style="left:${l(H.x-y/2)};top:${l(H.y-u/2)};width:${l(y)};height:${l(u)}">${Ba(x?x.style:0,{lit:x?x.lit:!0})}${x?.locked?'<span class="lockBadge">🔒</span>':""}${x?.mine||!x?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${le?"up":""}" data-mail="${x?x.id:"home"}" aria-label="${de(X)} mailbox" style="left:${l(sn)};top:${l(Ht)};width:${l(ce)};height:${l(G)}">${Yd(le)}</button>`,d+=`<div class="mapSign ${x?.mine||!x?"mine":""}" style="left:${l(H.x)};top:${l(H.y+u/2-2)}">${de(X)}</div>`}),p+=`<button class="mapSpot mapPark" data-go="park" aria-label="The park" style="left:${l(Hn.x-100)};top:${l(Hn.y-85)};width:${l(200)};height:${l(170)}">${Ed}</button>`,d+=`<div class="mapSign place" style="left:${l(Hn.x)};top:${l(Hn.y+70)}">Park</div>`,p+=`<button class="mapSpot mapRanch" data-go="ranch" aria-label="Rainbow Ranch" style="left:${l(ln.x-110)};top:${l(ln.y-90)};width:${l(220)};height:${l(180)}">${Cd}</button>`,d+=`<div class="mapSign place" style="left:${l(ln.x)};top:${l(ln.y+78)}">Rainbow Ranch</div>`,p+=`<button class="mapSpot mapClub" data-go="gameroom" aria-label="The clubhouse" style="left:${l(On.x-95)};top:${l(On.y-78)};width:${l(190)};height:${l(156)}">${Sd}</button>`,d+=`<div class="mapSign place" style="left:${l(On.x)};top:${l(On.y+82)}">Clubhouse</div>`,bt.set("park",{x:Hn.x,y:Hn.y-60}),bt.set("ranch",{x:ln.x-30,y:ln.y-60}),bt.set("barn",{x:ln.x+10,y:ln.y+10}),bt.set("gameroom",{x:On.x,y:On.y-52}),r.insertAdjacentHTML("beforeend",Ld(_,b)+p+'<div class="mapFaces" id="mapFaces"></div>')}t.insertAdjacentHTML("beforeend",d),ja(),h9(o)}const oc=()=>[{x:Hn.x,y:Hn.y,r:115},{x:ln.x,y:ln.y,r:125},{x:cn.x,y:cn.y,r:100},{x:On.x,y:On.y,r:90}];function $h(e,t,n){const s=e.getTotalLength(),i=[];for(let o=0;o<t;o++){const a=t===1?.2:.05+.75*o/(t-1),r=e.getPointAtLength(s*a),l=e.getPointAtLength(Math.min(s,s*a+3));let c=-(l.y-r.y),p=l.x-r.x;const d=Math.hypot(c,p)||1;c/=d,p/=d;const g=[1,-1].map(b=>({x:r.x+c*72*b,y:r.y+p*72*b})).map(b=>({...b,score:Math.min(...n.map(_=>Math.hypot(_.x-b.x,_.y-b.y)-_.r),b.x-50,Sn-50-b.x,b.y-60,zn-40-b.y)})),h=o%2?g:[g[1],g[0]],m=h[0].score>0||h[0].score>=h[1].score?h[0]:h[1];m.x=Math.max(60,Math.min(Sn-60,m.x)),m.y=Math.max(62,Math.min(zn-72,m.y)),n.push({x:m.x,y:m.y,r:70}),i.push({x:m.x,y:m.y})}return i}window.__mapFake=e=>{ic=e,Es(!0)};window.__mapLayout=e=>{const t=document.querySelector("#mapRoad");if(!t)return null;const n=$h(t,e,oc());let s=1e9,i=1e9,o=!0;return n.forEach((a,r)=>{n.forEach((l,c)=>{c>r&&(s=Math.min(s,Math.hypot(a.x-l.x,a.y-l.y)))}),oc().forEach(l=>{i=Math.min(i,Math.hypot(a.x-l.x,a.y-l.y)-l.r)}),(a.x<55||a.x>Sn-55||a.y<60||a.y>zn-70)&&(o=!1)}),{n:e,minHouse:s,minSpot:i,inside:o}};function xh(e){return e.where==="house"&&e.houseId?{kind:"house",houseId:e.houseId,room:e.room}:e.where==="park"||e.where==="ranch"||e.where==="barn"||e.where==="gameroom"?{kind:e.where}:{kind:"square"}}const w9=e=>e.kind==="house"?"house:"+e.houseId:e.kind;function ja(){const e=document.getElementById("mapFaces");if(!e||S!=="street")return;const t=kh(),n=new Set,s=[];if(w){const o=[...w.presence.entries()],a=we();a&&o.push([w.pid,a]);for(const[r,l]of o){const c=w.players.get(r);c&&s.push({key:r,look:c.look,name:c.nickname,mine:r===w.pid,place:xh(l)})}}else{const o=K.get().characters[0];o&&s.push({key:"solo",look:Lo(o),name:"You",mine:!0,place:{kind:"square"}})}const i=new Map;for(const o of s){const a=w9(o.place);i.has(a)||i.set(a,[]),i.get(a).push(o)}for(const[o,a]of i)a.sort((r,l)=>r.mine?-1:l.mine?1:r.name.localeCompare(l.name)),a.forEach((r,l)=>{let c,p;const d=bt.get("square")??{x:cn.x,y:cn.y};if(o==="square")if(Ze.portrait){const y=Math.floor(l/3),u=l%3,k=Math.min(3,a.length-y*3);c=d.x+(u-(k-1)/2)*176,p=d.y+y*112}else if(a.length===1)c=cn.x,p=cn.y;else{const b=-Math.PI/2+l*(Math.PI*2/a.length);c=cn.x+Math.cos(b)*78,p=cn.y+Math.sin(b)*78}else{const b=bt.get(o)??d,_=Ze.portrait?2:3,y=Ze.portrait?150:64,u=Math.floor(l/_),k=l%_,x=Math.min(_,a.length-u*_);c=b.x+(k-(x-1)/2)*y,p=b.y-u*(Ze.portrait?108:64)}Ze.portrait&&(c=Math.max(100,Math.min(Ze.w-100,c)),p=Math.max(48,Math.min(Ze.h-84,p))),n.add(r.key);let g=e.querySelector(`.mapFace[data-pid="${r.key}"]`);g||(g=document.createElement("button"),g.className="mapFace "+(r.mine?"mine":"other"),g.dataset.pid=r.key,g.setAttribute("aria-label",r.mine?"You":r.name),e.appendChild(g));const h=JSON.stringify(r.look)+r.name;if(g.dataset.look!==h){const b=g.querySelector(".bubble");g.innerHTML=`<span class="face">${fc(wt(r.look))}</span><span class="fname">${de(r.mine?"You":r.name)}</span>`,b&&g.appendChild(b),g.dataset.look=h}g.dataset.place=o;const m=Ze.portrait?62:46;g.style.left=(c-m/2)*t+"px",g.style.top=(p-m/2)*t+"px",g.style.width=g.style.height=m*t+"px"});e.querySelectorAll(".mapFace").forEach(o=>{n.has(o.dataset.pid)||o.remove()}),Gs()}function Mh(e,t){const n=M("mapWorld");if(t&&!n.classList.contains("zoomIn")){const s=t.getBoundingClientRect(),i=n.getBoundingClientRect();n.style.transformOrigin=`${s.left+s.width/2-i.left}px ${s.top+s.height/2-i.top}px`,n.classList.remove("mapIn"),n.classList.add("zoomIn"),z.swish(),setTimeout(()=>{n.classList.remove("zoomIn"),Xp(e)},360)}else Xp(e)}function Bo(e){e.classList.remove("sceneIn"),e.offsetWidth,e.classList.add("sceneIn"),setTimeout(()=>e.classList.remove("sceneIn"),600)}function Xp(e){e.kind==="house"?Ch(e.houseId,e.room):e.kind==="home"?Eh():e.kind==="park"?E9():e.kind==="ranch"?_o(!1):e.kind==="barn"?_o(!0):e.kind==="gameroom"&&S9()}function b9(e){const t=w?.presence.get(e);if(!w||!t)return;const n=xh(t),s=w.players.get(e)?.nickname??"your friend";if(n.kind==="square"){Z(`${s} is on the map too! 👋`);return}const i=document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`)??void 0;Mh(n,i),setTimeout(()=>{const o=we();if(!o||!w)return;const a=t.x+(t.x>300?-110:110);if(n.kind==="house"&&o.where==="house")je({...o,x:a,y:t.y}),xt(),Er(a-re/2);else if((n.kind==="park"||n.kind==="ranch"||n.kind==="barn")&&o.where===n.kind){Jt({...o,x:a,y:Math.max(zs,Math.min(Pn,t.y)),flip:a>t.x});const r=n.kind==="park"?cs():nn(),l=M(n.kind==="park"?"parkScroll":"ranchScroll");requestAnimationFrame(()=>{l.scrollLeft=t.x*r-l.clientWidth/2,it()})}else if(n.kind==="gameroom"&&o.where==="gameroom"){const r=Mi();r||Jt({where:"gameroom",x:a,y:Math.max(zs,Math.min(Pn,t.y)),flip:a>t.x});const l=os(),c=M("grScroll"),p=r?.x??t.x;requestAnimationFrame(()=>{c.scrollLeft=p*l-c.clientWidth/2,it()})}Z(`You found ${s}! 💕`)},420)}function dl(e){if(!w)return!1;const t=w.houses.get(e);return!!t&&t.meta.ownerId===w.pid&&wc(t.confirmed.mailbox)>0}let ta=0;function Lh(){Zg();const e=document.getElementById("mailCue"),t=w?.myHouseId()??"",n=w&&t?wc(w.houses.get(t)?.confirmed.mailbox):0;if(!w||S!=="street"||n<=0){n<=0&&(ta=0),e?.classList.remove("show");return}ta!==n&&(ta=n,e?.classList.add("show"),window.setTimeout(()=>{ta===n&&e?.classList.remove("show")},8e3))}function Tr(){const e=w?.myHouseId()??"",t=w&&e?wc(w.houses.get(e)?.confirmed.mailbox):0,n=M("menuBadge");n.textContent=t>9?"9+":String(t),n.classList.toggle("on",t>0);const s=document.getElementById("mailNew");s&&(s.textContent=t>0?t===1?"1 new":t+" new":"",s.classList.toggle("on",t>0));const i=w?w.presence.size:0,o=M("mapBadge");o.textContent=i>9?"9+":String(i),o.classList.toggle("on",i>0),M("btnMap").setAttribute("aria-label",i>0?`Map, ${i} friends online`:"Map");const a=Pr(),r=M("chatBadge");r.textContent=a>9?"9+":String(a),r.classList.toggle("on",a>0)}function ac(e){e&&document.querySelectorAll(".toast").forEach(t=>t.remove()),M("menuPop").classList.toggle("hidden",!e),M("btnMenu").setAttribute("aria-expanded",e?"true":"false"),e&&Tr(),v9()}function v9(){const e=M("houseTag");if(e.style.top="",!e.classList.contains("show")||M("menuPop").classList.contains("hidden"))return;const t=document.querySelector(".menuCard");if(!t)return;const n=M("stageWrap").getBoundingClientRect(),s=t.getBoundingClientRect(),i=e.getBoundingClientRect();if(!(i.top<s.bottom-2&&i.bottom>s.top+2&&i.left<s.right-2&&i.right>s.left+2))return;const a=s.bottom-n.top+8;a+i.height<n.height-8?e.style.top=a+"px":e.style.top=Math.max(8,n.height-i.height-10)+"px"}M("btnMenu").addEventListener("click",()=>{ac(M("menuPop").classList.contains("hidden")),z.click()});M("menuPop").addEventListener("click",e=>{const t=e.target;if(t.id==="menuPop"||t.closest("#menuClose")){ac(!1);return}t.closest(".menuRow")&&ac(!1)});M("btnMail").addEventListener("click",()=>{const e=w?.myHouseId();e?ld(e):Z("Join a street to send letters!")});M("secrets").addEventListener("click",()=>{if(S!=="house"){Z("Surprises are hiding in your house!");return}Te.isPlay()&&M("modeDecorate").click(),Ct="secrets",Dt(),Z("Surprises are in your drawer!")});function ld(e){if(!w||e==="home"||!w.houses.has(e)){Z("Join a street to send letters!");return}const t=w.houses.get(e);ma.open(e,t.meta.name,t.meta.ownerId===w.pid,t.confirmed.mailbox?.letters??[]),z.click()}M("mapWorld").addEventListener("click",e=>{const t=e.target;if(S!=="street")return;const n=t.closest(".mapMail");if(n){ld(n.dataset.mail||"home");return}const s=t.closest(".mapFace");if(s){s.classList.contains("mine")?(mt(s),z.pop(),Z("That's you! Tap a place to go there")):b9(s.dataset.pid);return}const i=t.closest("[data-go]");if(!i)return;const o=i.dataset.go;Mh(o.startsWith("house:")?{kind:"house",houseId:o.slice(6)}:{kind:o},i)});function Ys(){M("street").classList.add("hidden"),M("park").classList.add("hidden"),M("ranch").classList.add("hidden"),M("gameroom").classList.add("hidden"),ha()?.close(),M("chatTray").classList.add("hidden"),M("sheet").classList.add("hidden")}function gi(){We=null,_t=[],Ie=!1,w?je({where:"street",x:600,y:540,flip:!1}):At=null,Ys(),S="street",M("street").classList.remove("hidden"),M("streetTitle").textContent=w?"Our Neighborhood":"My Map",mn(),Es(!0);const e=M("mapWorld");e.style.transformOrigin="50% 50%",e.classList.remove("zoomIn","mapIn"),e.offsetWidth,e.classList.add("mapIn"),z.swish()}function Eh(){if(w){const e=w.myHouseId();e&&w.houses.has(e)&&Ch(e);return}Ys(),S="house",At=null,Te.sync(!0),mn(),Vs(),Bo(M("stageWrap")),z.sparkle(),ns()}function Ch(e,t="living"){if(!w||!w.houses.has(e))return;ze=e,S="house",Ie=!1,Te.sync(e===w.myHouseId());let n=Oa.get(e);n||(n=Km(w,e,{get:()=>K.get().soundOn,set:s=>K.dispatch({type:"settings/sound",on:s})}),Oa.set(e,n)),n.dispatch({type:"room/switch",room:t}),je({where:"house",houseId:e,room:t,x:900+Math.random()*300,y:540,flip:!1}),Ys(),bh(n),Bo(M("stageWrap")),z.sparkle(),ns()}function cd(){w?.close(),w=null,Oa=new Map,S="house",ze="",At=null,We=null,_t=[],Ie=!1,M("elsewhere").classList.add("hidden"),Ys(),Te.sync(!0),bh(K),mn()}M("btnMap").addEventListener("click",()=>{if(S==="street"){z.pop();return}gi()});M("btnHome").addEventListener("click",()=>{if(S==="house"&&(!w||ze===w.myHouseId())){z.pop();return}Eh()});M("phoneOk").addEventListener("click",()=>{M("phoneNote").classList.add("hidden"),z.click()});M("elsewhereGo").addEventListener("click",()=>{z.click(),w?.connect()});M("btnSolo").addEventListener("click",()=>{cd(),Z("Playing in your own house 🏠")});window.addEventListener("resize",()=>{S==="street"&&Es(!0),S==="park"&&fd(),S==="ranch"&&bd(),S==="gameroom"&&qc(),it()});function dd(e){w=e,Oa=new Map,e.on("players",()=>{w===e&&(S==="street"?Es():S==="park"?Qs():S==="ranch"?(es(),kd()):S==="gameroom"?so():(xt(),mn()),vo==="dress"&&_n())}),e.on("houses",()=>{w===e&&(S==="street"?Es():S==="house"&&!e.houses.has(ze)&&(Z("That house is gone now"),gi()))}),e.on("houseMeta",t=>{w!==e||t!==ze||S!=="house"||(st=null,mn(),Kt(C.get()),Dt(),It()||M("sheet").classList.add("hidden"))}),e.on("pres",()=>{w===e&&(S==="street"?ja():S==="park"?Qs():S==="ranch"?es():S==="gameroom"?so():xt())}),e.on("ranch",()=>{w===e&&S==="ranch"&&Hr(!0)}),e.on("ranchFail",t=>{w===e&&lc(t)}),e.on("noride",()=>{if(w!==e)return;const t=we();if(t?.ride!==void 0){const{ride:n,...s}=t;je(s),es()}Z("Someone is riding that horse!")}),e.on("fx",(t,n)=>{w===e&&Y9(t,n)}),e.on("bubble",(t,n)=>{w===e&&p9(t,n)}),e.on("sayFail",t=>Z(t==="presetsOnly"?"Typing is turned off: pick a bubble!":ur[t]||"Couldn't send that")),e.on("mailbox",()=>{w===e&&(S==="street"&&Es(!0),Lh(),ma.refresh(),Tr())}),e.on("mailFail",t=>{w===e&&ma.fail(t)}),e.on("settings",()=>{w===e&&(M("chatTray").classList.contains("hidden")||vh(),ma.refresh())}),e.on("removed",()=>{Z("A grown-up took this iPad off the street");const t=e.cfg;Cn({url:t.url,code:t.code,id:t.id,parentKey:t.parentKey}),cd()}),e.on("status",t=>{w===e&&(document.body.classList.toggle("reconnecting",t!=="online"&&!e.replaced),(t==="online"||t==="connecting")&&M("elsewhere").classList.add("hidden"))}),e.on("replaced",()=>{w===e&&M("elsewhere").classList.remove("hidden")}),e.on("table",()=>{if(w===e){if(S==="gameroom"){const t=Mi(),n=we();t&&n?.where==="gameroom"&&Math.hypot(n.x-t.x,n.y-t.y)>40&&je({where:"gameroom",x:t.x,y:Math.max(zs,Math.min(Pn,t.y)),flip:n.flip}),so()}ha()?.refresh()}}),e.on("tblFail",(t,n)=>{w===e&&ha()?.fail(t,n)}),e.on("welcome",()=>{if(w===e)if(S==="street")Es(!0);else if(S==="park"||S==="ranch"){const t=we();t&&je(t),S==="park"?fd():bd(),it()}else if(S==="gameroom"){const t=we();t&&je(t),qc(),it(),ha()?.refresh()}else e.houses.has(ze)?Vs():gi()}),e.on("reset",(t,n)=>{w===e&&n==="cuddling"&&Z("Someone is cuddling!")}),gi()}async function k9(){mn();const e=mr(),t=ui();if(!e||!t?.token||t.url!==e)return;const n=new yr(t),s=await n.connect();s==="ok"?dd(n):(n.close(),s!=="closed"&&Z("Couldn't reach the street. Playing at home!"))}function qt(e,t,n=""){const s=document.createElement("div");s.className="sheet hoodSheet "+n,s.innerHTML=`<div class="card">${e}</div>`,document.body.appendChild(s),z.swish();const i=()=>s.remove();return s.addEventListener("click",o=>{const a=o.target;if(a===s||a.closest('[data-m="close"]'))return i();t(a,i,s)}),{root:s,close:i}}const Zt='<button class="close" data-m="close">✕</button>';M("btnHood").addEventListener("click",()=>_9());function _9(){const e=mr();if(!e){qt(`${Zt}<h2>Neighborhood</h2><p class="hint">The street isn't open yet. Ask a grown-up to set it up!</p>`,()=>{});return}const t=ui()?.url===e?ui():null;qt(`${Zt}<h2>Neighborhood</h2><div class="bigBtns">
      ${t?.token?`<button class="big go" data-m="go">${St.street}<span>Go to my street</span></button>`:`<button class="big go" data-m="join">${St.street}<span>Join a friend's street</span></button>`}
      <button class="big grown" data-m="create">${St.shield}<span>${t?.parentKey?"Grown-ups":"Grown-ups: start a street"}</span></button></div>`,async(n,s)=>{const i=n.closest("[data-m]")?.dataset.m;if(i==="go"){s();const o=new yr(t),a=await o.connect();a==="ok"?dd(o):(o.close(),Z(a.startsWith("badtoken")?"Please join again":"Couldn't reach the street"))}i==="join"&&(s(),oo(e)),i==="create"&&(s(),await qf()&&(t?.parentKey?Br():$9(e)))})}async function $9(e){let t;try{t=await Gm(e)}catch{Z("Couldn't create a street right now");return}Cn({url:e,code:t.code,id:t.id,parentKey:t.parentKey}),qt(`${Zt}<h2>Your street is ready!</h2><p class="hint">Kids join with this code (you can pick your own on the grown-up screen):</p><div class="code" id="newCode">${t.code}</div>
    <p class="hint small">Grown-up key (keep it private; it opens the grown-up screen on another device):<br><b class="key" id="parentKey">${t.parentKey}</b></p>
    <div class="bigBtns"><button class="big grown" data-m="setup">${St.shield}<span>Add kids' names &amp; code</span></button>
    <button class="big go" data-m="joinhere">${St.street}<span>Join on this iPad</span></button></div>`,(n,s)=>{n.closest('[data-m="joinhere"]')&&(s(),pd(e,t.code)),n.closest('[data-m="setup"]')&&(s(),Br())})}function oo(e,t=""){const n=qt(`${Zt}<h2>Join a street</h2><p class="hint">Type the code a grown-up gave you</p>
    <form id="codeForm" class="codeForm"><input id="codeInput" maxlength="${xc}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="CODE"/><button type="submit" class="go">Next</button></form>
    <p class="err">${de(t)}</p>`,()=>{}),s=n.root.querySelector("#codeInput");setTimeout(()=>s.focus(),50),s.addEventListener("input",()=>{s.value=Ca(s.value)}),n.root.querySelector("#codeForm").addEventListener("submit",i=>{i.preventDefault();const o=Ca(s.value);if(!tm(o)){n.close(),oo(e,"That code looks wrong. Try again!");return}n.close(),pd(e,o)})}async function pd(e,t,n=""){let s;try{s=await Ym(e,t)}catch{oo(e,"Couldn't reach the street. Try again!");return}if("slow"in s){oo(e,"Too many tries. Ask a grown-up and try again in a few minutes.");return}if(!s.exists){oo(e,"Hmm, we couldn't find that street.");return}window.__lastLookupId=s.id,x9(e,t,s.id,s.roster,n)}function x9(e,t,n,s,i=""){if(s.length){qt(`${Zt}<h2>Who are you?</h2>${i?`<p class="err">${de(i)}</p>`:'<p class="hint">Tap your name</p>'}<div class="nicks roster">${s.map((o,a)=>`<button data-nick="${a}" ${o.claimed?"disabled":""}>${de(o.name)}${o.claimed?"<small>signed in</small>":""}</button>`).join("")}</div>
      <p class="hint small">Not on the list? Ask a grown-up to add your name.</p>`,(o,a)=>{const r=o.closest("[data-nick]");if(!r||r.disabled)return;a();const l=s[+r.dataset.nick];l.hasHouse?Sh(e,t,n,l.name,void 0):Jp(e,t,n,l.name)},"wide");return}qt(`${Zt}<h2>Pick your street name</h2>${i?`<p class="err">${de(i)}</p>`:""}<div class="nicks">${Ud.map((o,a)=>`<button data-nick="${a}">${de(o)}</button>`).join("")}</div>`,(o,a)=>{const r=o.closest("[data-nick]");r&&(a(),Jp(e,t,n,Ud[+r.dataset.nick]))},"wide")}function Jp(e,t,n,s){qt(`${Zt}<h2>Hi, ${de(s)}!</h2><p class="hint">What should your house on the street be?</p>
    <div class="bigBtns"><button class="big go" data-m="bring">${Ba(2)}<span>Bring my house</span></button>
    <button class="big" data-m="fresh">${Ba(5)}<span>Start a new one</span></button></div>`,(i,o)=>{const a=i.closest("[data-m]")?.dataset.m;a&&(o(),Sh(e,t,n,s,a==="bring"))})}async function Sh(e,t,n,s,i){const o=K.get(),a=o.characters[0],r=Lo(a??{});let l;if(i&&(l=o,a)){const{reduce:m}=await f(async()=>{const{reduce:b}=await Promise.resolve().then(()=>Wu);return{reduce:b}},void 0);l=m(o,{type:"char/delete",id:a.id})}const c=ui(),p={url:e,code:t,id:n,parentKey:c?.id===n||c?.code===t?c.parentKey:void 0},d=o.dog?{name:o.dog.name,breed:o.dog.breed}:null,g=new yr(p),h=await g.connect({nickname:s,look:r,house:l,dog:d});if(h==="ok"){Cn(g.cfg),dd(g),Z(`Welcome to the street, ${s}!`),Ex()&&(Cx(),Pe=ut,_i("dress"));return}g.close(),h.startsWith("nickname")?pd(e,t,h.endsWith("notOnList")?"That name is not on the list anymore.":"That name is already signed in on another iPad. Ask a grown-up!"):Z(h==="full"?"That street is full":"Couldn't join right now")}M("btnParent").addEventListener("click",async()=>{await qf()&&Br()});const M9={codeTaken:"That code is already used by another street. Try adding a number!",badCode:"Codes are 4–16 letters or numbers.",badName:"Use a first name only (letters).",rosterFull:`Up to ${nm} names.`,nameInUse:"Remove that player first.",codeFixed:"This street's code can't be changed."};async function Br(){const e=ui();if(!e)return;if(!e.parentKey){const a=qt(`${Zt}<h2>Grown-up key</h2><p class="hint">Enter the key you got when the street was made</p><form id="keyForm" class="codeForm"><input id="keyInput" autocomplete="off" spellcheck="false"/><button class="go">OK</button></form>`,()=>{});a.root.querySelector("#keyForm").addEventListener("submit",r=>{r.preventDefault(),e.parentKey=a.root.querySelector("#keyInput").value.trim(),Cn(e),w&&(w.cfg.parentKey=e.parentKey),a.close(),Br()});return}let t=w;t||(t=new yr({...e,token:void 0}),await t.connect());const n=t,s=a=>i.root.querySelector(a).value,i=qt(`${Zt}<h2>Grown-up screen</h2><div id="parentBody"><p class="hint">Loading…</p></div>`,async a=>{const r=a.closest("[data-p]");if(!r)return;const l=r.dataset.p;if(l==="free"&&n.parent({op:"freeChat",on:r.dataset.on!=="1"}),l==="freeMail"&&n.parent({op:"freeMail",on:r.dataset.on!=="1"}),l==="rename"&&n.parent({op:"rename",houseId:r.dataset.hid,name:s(`input[data-hid="${r.dataset.hid}"]`)}),l==="add"&&n.parent({op:"rosterAdd",name:r.dataset.name??s("#rosterInput")}),l==="unname"&&n.parent({op:"rosterRemove",name:r.dataset.name}),l==="unclaim"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent="Tap again";return}n.parent({op:"unclaim",name:r.dataset.name})}if(l==="setcode"&&n.parent({op:"setCode",code:s("#codeEdit")}),l==="remove"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent="Tap again to remove";return}n.parent({op:"remove",pid:r.dataset.pid})}if(l==="mailClear"||l==="mailClearAll"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent=l==="mailClearAll"?"Tap again to clear every mailbox":r.dataset.id?"Tap again":"Tap again to clear this mailbox";return}l==="mailClearAll"?n.parent({op:"mailClearAll"}):n.parent({op:"mailClear",houseId:r.dataset.hid,...r.dataset.id?{id:r.dataset.id}:{}})}if(l==="leave"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent="Tap again: forget this street here";return}Cn(null),i.close(),cd(),Z("This iPad left the street")}},"wide parent");i.root.addEventListener("submit",a=>{a.preventDefault();const r=a.target.id;r==="rosterForm"&&n.parent({op:"rosterAdd",name:s("#rosterInput")}),r==="codeForm2"&&n.parent({op:"setCode",code:s("#codeEdit")})});const o=a=>{const r=new Date(a);return Number.isFinite(r.getTime())?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()]+" "+r.getDate()+", "+r.getFullYear():""};n.on("parentInfo",a=>{const r=i.root.querySelector("#parentBody");if(!r)return;const l=ui();l&&l.code!==a.code&&(l.code=a.code,Cn(l)),n.cfg.code=a.code;const c=a.roster??[],p=new Set(c.map(y=>y.name.toLowerCase())),d=sm.filter(y=>!p.has(y.toLowerCase())),g=c[0]?.name??"Reagan",h=Array.isArray(a.mail)?a.mail:[],m=h.some(y=>y.letters&&y.letters.length),b=Hf(a.settings),_=h.map(y=>`<div class="pMailHouse"><div class="pMailName">${de(y.name||"House")}</div>${(y.letters||[]).slice().reverse().map(u=>`<div class="pLetter"><b>${de(u.from)}</b><span class="pWhen">${de(o(u.at))}</span><p>${de(u.text)}</p><button type="button" class="danger" data-p="mailClear" data-hid="${de(y.houseId)}" data-id="${de(u.id)}">Clear</button></div>`).join("")||'<p class="hint">No letters.</p>'}${(y.letters||[]).length?`<button type="button" class="danger" data-p="mailClear" data-hid="${de(y.houseId)}">Clear this mailbox</button>`:""}</div>`).join("");r.innerHTML=`${a.note?`<p class="err" id="pNote">${de(M9[a.note]??a.note)}</p>`:""}
      <div class="pRow"><div><div class="label">Invite code</div><div class="code small" id="pCode">${de(a.code)}</div></div>
        <div><div class="label">Free typing</div><button class="toggle ${a.settings.freeChat?"on":""}" data-p="free" data-on="${a.settings.freeChat?1:0}" id="pFree">${a.settings.freeChat?"On":"Off (presets only)"}</button><p class="hint small">Chat bubbles. Off means preset phrases only.</p></div>
        <div><div class="label">Let kids type their own letters</div><button class="toggle ${b?"on":""}" data-p="freeMail" data-on="${b?1:0}" id="pFreeMail">${b?"On":"Off (presets only)"}</button><p class="hint small">Letters only. Off means preset phrases only.</p></div></div>
      <div class="label">Letters</div><div id="parentMail">${_||'<p class="hint">No letters right now.</p>'}${m?'<button type="button" class="danger" data-p="mailClearAll" id="mailClearAll">Clear every mailbox</button>':""}</div>
      <form class="pAdd" id="codeForm2"><input id="codeEdit" maxlength="${xc}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="e.g. ${de(Ca(g))}7"/><button data-p="setcode" type="button">Use this code</button></form>
      <p class="hint small">Tip: a word plus a number (like ${de(Ca(g))}7) is easy to remember and harder to guess. Not case-sensitive.</p>
      <div class="label">Kids' names (sign-in list)</div>
      <div class="roster">${c.map(y=>`<span class="rName ${y.claimed?"claimed":""}"><b>${de(y.name)}</b>${y.claimed?`<i>signed in</i><button data-p="unclaim" data-name="${de(y.name)}">Reset</button>`:y.hasHouse?"<i>not signed in</i>":`<button class="x" data-p="unname" data-name="${de(y.name)}" aria-label="Remove name">×</button>`}</span>`).join("")||'<p class="hint">No names yet: kids pick a fun nickname instead.</p>'}</div>
      <form class="pAdd" id="rosterForm"><input id="rosterInput" maxlength="20" autocomplete="off" placeholder="First name"/><button data-p="add" type="button">Add</button></form>
      ${d.length?`<div class="sugg">${d.map(y=>`<button data-p="add" data-name="${y}">+ ${y}</button>`).join("")}</div>`:""}
      <div class="label">Houses</div>${a.houses.map(y=>`<div class="pHouse"><input data-hid="${y.id}" value="${de(y.name)}" maxlength="24"/><button data-p="rename" data-hid="${y.id}">Rename</button></div>`).join("")||'<p class="hint">No houses yet.</p>'}
      <div class="label">Players</div>${a.players.map(y=>`<div class="pPlayer"><span class="dot ${y.online?"on":""}"></span>${de(y.nickname)}<button class="danger" data-p="remove" data-pid="${y.pid}">Remove</button></div>`).join("")||'<p class="hint">Nobody has joined yet.</p>'}
      <p class="hint small">Letters stay on the server for up to 30 days. They are filtered, and only a first name is stored. You can clear them here, or turn off “Let kids type their own letters” so new letters use preset phrases. Chat bubbles are only relayed to kids standing nearby and are not saved. No emails or last names. "Reset" signs a name out of its iPad so it can sign in again on another one (her house stays).</p>
      <button class="danger wideBtn" data-p="leave">Forget this street on this device</button>`}),n.on("error",a=>{a==="badkey"&&(Z("That grown-up key didn't work"),e.parentKey=void 0,Cn(e),i.close())}),n.parent({op:"info"})}let At=null;function cs(){return M("park").clientHeight/zc}const L9=()=>{const e=K.get();return e.characters.find(t=>t.id===e.dog?.owner)??e.characters[0]},yn=()=>w?we():At;function Jt(e){w?je(e):At=e,S==="ranch"?es():S==="gameroom"?so():Qs()}function Kn(e="park"){if(w){const n=[],s=[...w.presence.entries()],i=we();i&&s.push([w.pid,i]);for(const[o,a]of s){const r=w.players.get(o);r&&a.where===e&&n.push({key:o,look:r.look,name:r.nickname,p:a,mine:o===w.pid,dog:r.dog??null})}return n}const t=L9();return At&&At.where===e?[{key:"solo",look:Lo(t??{}),name:"",p:At,mine:!0,dog:K.get().dog??null}]:[]}function fd(){const e=cs(),t=M("parkWorld"),n=s=>s*e+"px";t.style.width=Lc*e+"px",t.style.height=zc*e+"px",t.style.setProperty("--sc",String(e)),t.innerHTML=I1()+Cl.map((s,i)=>s.kind==="swing"?`<div class="swing" data-swing="${i}" style="left:${n(s.x-30)};top:${n(jt)};width:${n(60)};height:${n(240)}">${H1}</div>`:"").join("")+Cl.map((s,i)=>`<button class="pspot k-${s.kind}" data-spot="${i}" aria-label="${s.kind}" style="left:${n(s.x-50)};top:${n(s.y-(s.kind==="swing"?70:55))};width:${n(100)};height:${n(s.kind==="swing"?90:65)}"></button>`).join("")+`<button class="pspot slide" data-act="slide" aria-label="Slide" style="left:${n(he.ladder-45)};top:${n(he.top.y-30)};width:${n(130)};height:${n(560-he.top.y+30)}"></button><button class="pspot pond" data-act="splash" aria-label="Pond" style="left:${n(1235)};top:${n(462)};width:${n(370)};height:${n(105)}"></button><button class="pspot gate" data-act="exit" aria-label="Back to the street" style="left:${n(25)};top:${n(240)};width:${n(180)};height:${n(260)}"></button><div class="ripples" id="ripples"></div><button class="ball" id="ball" aria-label="Ball">${O1}</button><div class="savatars" id="pavatars"></div>`,Ga(),Qs(),it()}const ef=2400;function Qs(){const e=document.getElementById("pavatars");if(!e||S!=="park")return;const t=cs(),n=new Set,s=new Set;for(const i of Kn()){n.add(i.key);let o=e.querySelector(`.savatar[data-pid="${i.key}"]`);o||(o=document.createElement("div"),o.className="savatar "+(i.mine?"mine":"other"),o.dataset.pid=i.key,e.appendChild(o),i.mine&&zh(o));const a=JSON.stringify(i.look)+i.name;if(o.dataset.look!==a){const d=o.querySelector(".bubble");o.innerHTML=i.name?rd(i.look,i.name):`<div class="inner">${wt(i.look)}</div>`,d&&o.appendChild(d),o.dataset.look=a}const r=(Is[i.look.size]??1)*t*.95,l=as*r,c=un*r;o.style.left=i.p.x*t-l/2+"px",o.style.top=i.p.y*t-c+"px",o.style.width=l+"px",o.style.height=c+"px",o.style.zIndex=String(100+Math.round(i.p.y)),o.classList.toggle("flipped",i.p.flip),So(o,i.look,i.mine);const p=i.p.pose??"";o.dataset.pose!==p&&(o.classList.remove("pose-sit","pose-swing","pose-slide"),o.offsetWidth,p==="slide"&&(o.style.setProperty("--sx",(he.top.x-he.bottom.x)*t+"px"),o.style.setProperty("--sy",(he.top.y-he.bottom.y)*t+"px")),p&&o.classList.add("pose-"+p),o.dataset.pose=p),p==="swing"?(o.style.transformOrigin=`50% ${(jt-i.p.y)*t+c}px`,o.style.animationDelay=-(Date.now()%ef)/1e3+"s",s.add(i.p.spot??-1)):(o.style.transformOrigin="",o.style.animationDelay="")}e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),document.querySelectorAll("#parkWorld .swing").forEach(i=>{const o=s.has(+i.dataset.swing);o&&!i.classList.contains("swinging")&&(i.style.animationDelay=-(Date.now()%ef)/1e3+"s"),i.classList.toggle("swinging",o)}),Gs()}function zh(e){e.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();const n=yn();if(!n||n.where!=="park"&&n.where!=="ranch"&&n.where!=="barn")return;const s=n.where!=="park",i=n.where;_t=[];const o=M(s?"ranchScroll":"parkScroll"),a=s?nn():cs(),r=i==="barn"?hc:s?xo:Lc,l=k=>{const x=M(s?"ranchWorld":"parkWorld").getBoundingClientRect();return{x:(k.clientX-x.left)/a,y:(k.clientY-x.top)/a}},c=l(t),p={x:n.x-c.x,y:n.y-c.y};let d=t,g=0,h=n.x,m=!1;const b=k=>{const x=l(k),R=yn();if(!R)return;const H=Math.max(60,Math.min(r-60,x.x+p.x)),I=Math.max(470,Math.min(590,x.y+p.y));if(!m&&Math.hypot(H-R.x,I-R.y)<6)return;m=!0;const X=Math.abs(H-h)>3?H<h:R.flip;Math.abs(H-h)>3&&(h=H),Jt(i==="barn"?{where:"barn",x:H,y:I,flip:X}:s?{where:"ranch",x:H,y:I,flip:X,...R.ride!==void 0?{ride:R.ride}:{}}:{where:"park",x:H,y:I,flip:X})},_=()=>{const k=o.getBoundingClientRect(),x=d.clientX<k.left+70?-10:d.clientX>k.right-70?10:0;x&&m&&(o.scrollLeft+=x,b(d)),g=requestAnimationFrame(_)};g=requestAnimationFrame(_),e.classList.add("lifted"),z.pick();const y=k=>{k.pointerId===t.pointerId&&(d=k,b(k))},u=k=>{k.pointerId===t.pointerId&&(cancelAnimationFrame(g),window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",u),e.classList.remove("lifted"),z.drop())};window.addEventListener("pointermove",y),window.addEventListener("pointerup",u)})}M("parkWorld").addEventListener("pointerdown",e=>{e.target.closest(".pspot, .ball, .pet")&&e.stopPropagation()});M("parkWorld").addEventListener("click",e=>{const t=e.target,n=yn();if(!n)return;if(t.closest("#ball")){z9();return}const s=t.closest("[data-spot]");if(s){const o=+s.dataset.spot,a=Cl[o];if(n.spot===o&&n.pose){Jt({where:"park",x:a.x,y:Math.min(590,a.y+40),flip:n.flip});return}if(Kn().some(r=>!r.mine&&r.p.spot===o&&r.p.pose)){Z("Someone is already there!");return}Jt({where:"park",x:a.x,y:a.y,flip:n.flip,pose:a.kind==="swing"?"swing":"sit",spot:o}),a.kind==="swing"?z.boing():z.drop();return}const i=t.closest("[data-act]")?.dataset.act;if(i==="slide"&&(Jt({where:"park",x:he.bottom.x,y:he.bottom.y,flip:!1,pose:"slide"}),z.swish(),setTimeout(()=>{const o=yn();o?.pose==="slide"&&Jt({where:"park",x:o.x,y:o.y,flip:o.flip})},1500)),i==="splash"){const o=M("parkWorld").getBoundingClientRect(),a=(e.clientX-o.left)/cs();Ph(a),w?.fx({k:"splash",x:a})}i==="exit"&&Th()});function Ph(e){const t=document.getElementById("ripples");if(!t||S!=="park")return;const n=cs();for(let s=0;s<2;s++){const i=document.createElement("div");i.className="ripple";const o=(120+s*70)*n;Object.assign(i.style,{left:e*n-o/2+"px",top:512*n-o*.18+"px",width:o+"px",height:o*.36+"px",animationDelay:s*.15+"s"}),t.appendChild(i),setTimeout(()=>i.remove(),1400)}for(let s=0;s<6;s++){const i=document.createElement("div");i.className="drop",Object.assign(i.style,{left:e*n+"px",top:505*n+"px"}),i.style.setProperty("--dx",(s-2.5)*14+"px"),t.appendChild(i),setTimeout(()=>i.remove(),900)}z.splash()}function E9(){Ys(),_t=[],Ie=!1,S="park",M("park").classList.remove("hidden"),Bo(M("park"));const e={where:"park",x:290,y:548,flip:!1};w?je(e):At=e,M("streetTitle").textContent="The Park",mn(),fd(),requestAnimationFrame(()=>{const t=M("parkScroll");t.scrollLeft=0,it()}),z.sparkle()}function Th(){gi()}function C9(){return Wr()&&!document.body.classList.contains("phone")}function tf(){return Wr()?520:280}function S9(){Ys(),_t=[],Ie=!1,S="gameroom",M("gameroom").classList.remove("hidden");const e=Mi(),t=e?{where:"gameroom",x:e.x,y:Math.max(zs,Math.min(Pn,e.y)),flip:!1}:{where:"gameroom",x:tf(),y:560,flip:!1};w?je(t):At=t,M("streetTitle").textContent="The Clubhouse",mn(),qc(),requestAnimationFrame(()=>{const n=os(),s=M("grScroll"),i=e?.x??(C9()?60+Tg/2:tf());s.scrollLeft=Math.max(0,i*n-s.clientWidth/2),it(),s0()}),Bo(M("gameroom")),z.sparkle()}M("btnLeavePark").addEventListener("click",()=>{S==="ranch"&&Ie?_o(!1):Th()});let qn={x:2620,y:565},We=null;function Ga(e=!1){const t=document.getElementById("ball");if(!t)return;const n=cs(),s=34*n;e||t.classList.remove("flying"),t.style.left=qn.x*n-s/2+"px",t.style.top=qn.y*n-s+"px",t.style.width=t.style.height=s+"px"}function z9(){if(We)return;const e=lt.x0+40+Math.random()*(lt.x1-lt.x0-80),t=lt.y0+25+Math.random()*(lt.y1-lt.y0-35);Bh(w?w.pid:"solo",e,t),w?.fx({k:"ball",x:e,y:t})}function Bh(e,t,n){if(S!=="park")return;const s=document.getElementById("ball");qn={x:t,y:n},We={thrower:e,phase:"fly",dog:null,until:performance.now()+12e3},s&&(s.classList.remove("flying"),s.offsetWidth,s.classList.add("flying"),Ga(!0)),z.boing(),setTimeout(()=>{We?.phase==="fly"&&(We.phase="chase",document.getElementById("ball")?.classList.remove("flying"),Zn.size||(We=null))},650)}function P9(e){if(!w)return At;const t=e===w.pid?we():w.presence.get(e);return t&&t.where==="park"?t:null}const Zn=new Map,pl=e=>(t,n,s,i,o)=>{t.style.left=(n-i/2)*e+"px",t.style.top=(s-o)*e+"px",t.style.width=i*e+"px",t.style.height=o*e+"px"};function T9(){const e=[];if(S==="house"){const t=C.get(),n={box:se,place:js,z:s=>String(4e3+Math.round(s)),scale:1};if(w&&De!==K){const s=[...w.presence.entries()],i=we();i&&s.push([w.pid,i]);for(const[o,a]of s){const r=w.players.get(o)?.dog;if(r&&a.where==="house"&&a.houseId===ze&&a.room===t.currentRoom){const l=$t(t.currentRoom,Tn(o,a),a);e.push({key:o,dog:r,x:l.x,y:l.y,flip:a.flip,...n})}}}else if(t.dog){const s=t.characters.find(i=>i.id===t.dog.owner)??t.characters[0];if(s&&s.room===t.currentRoom){const i=$t(s.room,Mt(s),s);e.push({key:"solo",dog:t.dog,x:i.x,y:i.y,flip:s.flip,...n})}}}else if(S==="park"){const t=document.getElementById("pavatars");if(!t)return e;const n=cs();for(const s of Kn())s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:pl(n),z:i=>String(Math.round(i)-200),scale:.95})}else if(S==="ranch"){const t=document.getElementById("ravatars");if(!t)return e;const n=nn();for(const s of Kn(Ie?"barn":"ranch"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:pl(n),z:i=>String(100+Math.round(i)),scale:.95,riding:s.p.ride!==void 0})}else if(S==="gameroom"){const t=document.getElementById("gavatars");if(!t)return e;const n=os();for(const s of Kn("gameroom"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:pl(n),z:i=>String(Math.round(i)-200),scale:.95})}return e}let nf=performance.now();function B9(e,t){const n=new Set;for(const s of T9()){if(D9(s.key))continue;n.add(s.key);let i=Zn.get(s.key);const o=s.flip?1:-1,a=!s.riding&&S==="house"&&C.get().currentRoom==="backyard",r=s.riding?200:78;let l=a?rp.x:s.x+o*r;s.riding?l=Math.max(50,Math.min(xo-50,l)):S==="house"&&!a&&(l=Wh(l,46));const c=a?rp.y:Math.min(595,s.y+(s.riding?28:6));if(!i||i.box!==s.box||!i.el.isConnected){i?.el.remove();const x=document.createElement("div");x.className="pet pet-dog",x.dataset.dog=s.key,s.box.appendChild(x),R9(x,s.key),i={el:x,box:s.box,x:l,y:c,flip:s.flip,pose:"",look:"",idle:1,trickUntil:0,sitTrick:!1},Zn.set(s.key,i)}let p=l,d=c,g=s.riding?980:320;if(We&&e>We.until&&(We=null,Ga()),We&&S==="park"){if(We.phase==="chase")p=qn.x,d=qn.y,g=950,Math.hypot(i.x-p,i.y-d)<28&&(We.phase="carry",We.dog=s.key,z.woof());else if(We.phase==="carry"&&We.dog===s.key){const x=P9(We.thrower)??{x:(lt.x0+lt.x1)/2,y:540};p=x.x+60,d=Math.min(590,x.y+6),g=750,qn={x:i.x+(i.flip?-40:40),y:i.y-30*s.scale},Math.hypot(i.x-p,i.y-d)<26&&(qn={x:x.x+70,y:Math.min(590,x.y+12)},We=null,ba(i,"♥"),z.sparkle()),Ga()}}const h=e<i.trickUntil,m=p-i.x,b=d-i.y,_=Math.hypot(m,b);let y=!1;if(_>(We?4:10)&&!h){const x=xr()?_:Math.min(_,g*t);i.x+=m/_*x,i.y+=b/_*x,y=!0,Math.abs(m)>1.5&&(i.flip=m<0),i.idle=0}else i.idle+=t,!h&&i.idle>.3&&Math.abs(s.x-i.x)>4&&(i.flip=s.x<i.x);const u=h&&i.sitTrick?"sit":y?"stand":i.idle>.9?"sit":"stand",k=u+s.dog.breed;if(i.pose+i.look!==u+k){for(const x of[...i.el.children])x.matches(".bubble, .kennelBtn")||x.remove();i.el.insertAdjacentHTML("afterbegin",`<div class="inner">${ho(s.dog.breed,u)}</div>`),i.pose=u,i.look=k}i.el.dataset.name=s.dog.name,i.el.classList.toggle("walking",y),i.el.classList.toggle("flipped",i.flip),s.place(i.el,i.x,i.y,92*s.scale,71*s.scale),i.el.style.zIndex=s.z(i.y+1),Hh(i.el,s.key,!1)}for(const[s,i]of Zn)n.has(s)||(i.el.remove(),Zn.delete(s))}function ba(e,t){e.el.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.el.appendChild(n),Ei(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const sf=new Map;function Rh(e,t){const n=Zn.get(e);if(!n)return;const s=n.el.dataset.name??"";n.trickUntil=performance.now()+1400,n.sitTrick=t===0,n.el.classList.remove("spin","hop"),n.el.offsetWidth,t===0&&(ba(n,`${s} sits! 🐾`),z.pop()),t===1&&(n.el.classList.add("spin"),ba(n,"Wheee! ✨"),z.spin()),t===2&&(n.el.classList.add("hop"),ba(n,"Woof! Woof!"),z.woof())}function R9(e,t){e.addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault()}),e.addEventListener("click",n=>{n.stopPropagation();const s=(sf.get(t)??0)%3;sf.set(t,s+1),Rh(t,s),w&&w.fx({k:"trick",owner:t,v:s})})}function Rr(e){const t=e?.dogKennel?.item;if(!t||!e)return null;for(const n of Object.values(e.rooms)){const s=n.items.find(i=>i.id===t&&i.kind==="kennel");if(s)return s}return null}function A9(e){if(e==="solo")return K.get();if(!w)return null;const t=w.players.get(e)?.houseId;return t?w.view(t):null}function D9(e){return!!Rr(A9(e))}function gd(){if(w){const e=w.myHouseId();return e?w.view(e):null}return K.get()}function Ah(){if(S!=="house")return null;const e=C.get(),t=Rr(e);if(!t||!e.rooms[e.currentRoom]?.items.some(n=>n.id===t.id))return null;if(w&&De!==K){const n=w.houses.get(ze)?.meta.ownerId,s=n?w.players.get(n)?.dog??null:null;return!n||!s?null:{key:n,dog:s,item:t}}return e.dog?{key:"solo",dog:e.dog,item:t}:null}function I9(){const e=gd();if(!e)return null;const t=Ka()?C.get().currentRoom:null;let n=null,s=null;for(const[i,o]of Object.entries(e.rooms))for(const a of o.items)a.kind==="kennel"&&((!n||a.z>=n.z)&&(n=a),i===t&&(!s||a.z>=s.z)&&(s=a));return s??n}function na(e){if(!md()){Z("Adopt a dog first!");return}Yi({type:"dog/kennel",item:e}),e?(z.pop(),Z("Rest well, puppy!")):(z.woof(),Z("Come on, puppy!"))}function hd(e){if(!md()){Z("Adopt a dog first!");return}const t=Rr(gd());if(e===void 0){if(t){na(null);return}const n=I9();if(!n){Z("Put a dog kennel down first!");return}na(n.id);return}t?.id===e?na(null):na(e)}function Dh(e){const t=C.get(),n=t.rooms[t.currentRoom]?.items.find(s=>s.id===e);if(n){if(n.kind==="kennel"){Ka()&&hd(n.id);return}n.kind==="cat-tower"&&j9()}}function H9(e,t){const n=C.get(),s=n.rooms[n.currentRoom]?.items.find(o=>o.id===t);if(!s)return;const i=d1(s.kind);if(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),z.click(),i==="kennel"||i==="tower"){Dh(t);return}if(ff(s.kind)){Px();const o=!s.on;C.dispatch({type:"item/power",room:n.currentRoom,id:t,on:o}),o&&Cs(s.kind)==="tv"&&V9(s),qs();return}if(i==="open"){e.classList.toggle("opened"),qs();return}if(i==="lamp"){e.classList.toggle("lamp-on");return}i==="sit"&&Ih(s),i==="swing"&&U9(s)}const of={dance:Gt*2,sway:Gt*4,watch:Gt*5,warm:Gt*3,hug:Gt*2,bounce:Gt,bathe:Gt*3,nibble:Gt},O9={dance:"<span>♪</span><span>♫</span>",sway:"<span>♪</span>",hug:"<span>♥</span>",bathe:'<span class="bub"></span><span class="bub"></span><span class="bub"></span>',nibble:"<span>✦</span>"},fl={stereo:"<span>♪</span><span>♫</span><span>♪</span>",musicbox:"<span>♪</span><span>♩</span>",tv:'<span class="glow"></span>',fire:'<span class="glow"></span><span class="ember"></span><span class="ember"></span>',tub:'<span class="bub"></span><span class="bub"></span><span class="bub"></span><span class="bub"></span>',fridge:'<span class="food">🍓</span><span class="food">🧁</span>'},gl=new Map;let hl=0;setInterval(()=>qs(),1e3);function qs(){hl||(hl=requestAnimationFrame(()=>{hl=0,W9()}))}function ri(e,t,n){let s=e.querySelector(":scope > .ambFx");if(!t){s?.remove();return}s||(s=document.createElement("i"),s.className="ambFx",s.setAttribute("aria-hidden","true"),e.appendChild(s)),s.dataset.k!==n&&(s.innerHTML=t,s.dataset.k=n,s.className="ambFx fx-"+n)}function af(e,t,n){const s=t?t.kind+"|"+t.item:"",i=e.dataset.amb||"";if(i!==s){if(i&&e.classList.remove("amb-"+i.split("|")[0],"amb-l","amb-r"),i.startsWith("bathe|")&&!t&&(e.classList.add("amb-sparkle"),setTimeout(()=>e.classList.remove("amb-sparkle"),1200)),!t){delete e.dataset.amb,ri(e,null,"");return}e.dataset.amb=s,e.style.setProperty("--amb-delay",uf(t.phase,of[t.kind],n)+"ms"),e.style.setProperty("--amb-period",of[t.kind]+"ms"),e.classList.add("amb-"+t.kind,t.face<0?"amb-l":"amb-r"),ri(e,O9[t.kind]??null,t.kind)}}function W9(){const e=C.get(),t=e.rooms[e.currentRoom];if(S!=="house"||!t){vp(null);return}const n=Date.now(),s=new Set;for(const d of t.items){if(Cs(d.kind)!=="musicbox")continue;if(!d.on){gl.delete(d.id);continue}const g=gl.get(d.id)??(gl.set(d.id,n),setTimeout(qs,zd+60),n);n-g>=zd&&s.add(d.id)}const i=new Set;se.querySelectorAll(".item.opened").forEach(d=>{d.dataset.id&&i.add(d.dataset.id)});const o=t.items.map(d=>{const g=Me[d.kind];return{id:d.id,kind:d.kind,x:d.x,y:d.y,on:!!d.on,w:g?Jc(g,Ge(d)).w:200}}),a=[],r=new Map;for(const d of e.characters){const g=Tt.get(d.id);if(d.room!==e.currentRoom||!g||g.classList.contains("lifted"))continue;const h=Mt(d)?.pose;a.push({id:d.id,x:d.x,y:d.y,seated:h==="sit",lying:h==="lie"}),r.set(d.id,g)}if(w&&De!==K){const d=[...w.presence.entries()],g=we();g&&d.push([w.pid,g]);for(const[h,m]of d){const b=Ls.get(h);if(!b||!b.isConnected||m.where!=="house"||m.houseId!==ze||m.room!==e.currentRoom||b.classList.contains("lifted"))continue;const _=Tn(h,m)?.pose;a.push({id:"p:"+h,x:m.x,y:m.y,seated:_==="sit",lying:_==="lie"}),r.set("p:"+h,b)}}const l=M0(o,a,{fridgesOpen:i,musicBoxDone:s});for(const d of[...Tt.values(),...Ls.values()])[...r.values()].includes(d)||af(d,void 0,n);r.forEach((d,g)=>af(d,l.get(g),n));const c=new Set([...l.values()].filter(d=>d.kind==="bathe").map(d=>d.item));let p=null;for(const d of t.items){const g=se.querySelector(`.item[data-id="${d.id}"]`);if(!g)continue;const h=Cs(d.kind),m=!!d.on&&!!h&&!s.has(d.id);g.classList.toggle("amb-on",m),m?(g.dataset.amb=h,g.style.getPropertyValue("--amb-delay")||g.style.setProperty("--amb-delay",uf(0,Gt,n)+"ms"),h==="stereo"?p="stereo":h==="musicbox"&&!p&&(p="musicbox"),ri(g,fl[h],h)):gf(d.kind)&&c.has(d.id)?ri(g,fl.tub,"tub"):hf(d.kind)&&i.has(d.id)?ri(g,fl.fridge,"fridge"):(delete g.dataset.amb,ri(g,null,""))}vp(p)}function V9(e){const t=C.get();if(w&&S==="house"){const s=we();if(!s||s.where!=="house"||s.seat)return}else{const s=t.characters.find(i=>i.id===Pe&&i.room===t.currentRoom)??t.characters.find(i=>i.room===t.currentRoom);if(!s||s.seat)return}const n=t.rooms[t.currentRoom].items.filter(s=>Ns(s.kind)?.pose==="sit"&&Math.abs(s.x-e.x)<520).sort((s,i)=>Math.abs(s.x-e.x)-Math.abs(i.x-e.x))[0];n&&Ih(n)}let Bt=null,ji=!1;function Ya(){se.querySelectorAll(".item.swinging").forEach(e=>{(!Bt||e.dataset.id!==Bt.item)&&e.classList.remove("swinging")}),Bt&&se.querySelector(`.item[data-id="${Bt.item}"]`)?.classList.add("swinging")}function U9(e){const t=C.get(),n=t.characters.find(o=>o.id===Pe&&o.room===t.currentRoom)??t.characters.find(o=>o.room===t.currentRoom);if(!n)return;if(Bt?.id===n.id&&Bt.item===e.id){Bt=null,ji=!0,C.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x+70,y:Math.max(e.y,520)}),ji=!1,Ya();return}const s=Me[e.kind],i=e.y-(s?ct(s)*Ge(e)*.26:40);Bt={id:n.id,item:e.id},ji=!0,C.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x,y:i}),ji=!1,Ya()}function Ih(e){const t=Cr(e);if(!t)return;if(w&&S==="house"){const o=we();if(!o||o.where!=="house")return;if(!w.speaksSit){const r="p:"+w.pid,l=fn.get(r)?.item===e.id,c=Math.max(vi+40,t.footY-8);l?fn.delete(r):fn.set(r,{item:e.id,pose:t&&Ns(e.kind).pose,n:0});const{seat:p,...d}=o;je({...d,x:e.x,y:c,flip:!1}),xt();return}const a=lo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:bo(void 0,w.pid),alreadyOn:o.seat?.id===e.id?e.id:null});if(a.toast){Z(a.toast),z.pop();return}if(!a.moved)return;ya(o,a.x,a.y,!1,a.seat?{id:a.seat.item,pose:a.seat.pose,n:a.seat.n}:null),xt(),Os(!1);return}const n=C.get(),s=n.characters.find(o=>o.id===Pe&&o.room===n.currentRoom)??n.characters.find(o=>o.room===n.currentRoom);if(!s)return;const i=lo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:bo(s.id),alreadyOn:s.seat?.item===e.id?e.id:null});if(i.toast){Z(i.toast),z.pop();return}i.moved&&(Fi(s.id,n.currentRoom,i.x,i.y,i.seat),Os(!1))}function Hh(e,t,n){const s=w?t===w.pid:t==="solo";let i=e.querySelector(".kennelBtn");if(!s){i?.remove();return}i||(i=document.createElement("button"),i.type="button",i.className="kennelBtn",i.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault()}),i.addEventListener("click",o=>{o.stopPropagation(),o.preventDefault(),hd()}),e.appendChild(i)),i.textContent=n?"Out":"Kennel",Q9(i)}function Q9(e){if(S!=="house"){e.style.left=e.style.right=e.style.top=e.style.bottom=e.style.transform="";return}const t=e.parentElement;if(!t)return;const n=F.getBoundingClientRect().width/F.offsetWidth||1,s=F.getBoundingClientRect(),i=4,o={l:s.left+i,t:s.top+i,r:s.right-i,b:s.bottom-i},a=se.querySelector(".char")?.getBoundingClientRect(),r=se.querySelector('.item[data-kind="sofa"]')?.getBoundingClientRect(),l=[...se.querySelectorAll(".pet-cat, .item")].map(A=>A.getBoundingClientRect()).filter(A=>A.width>2&&A.height>2),c=(A,O)=>!!O&&A.left<O.right-1&&A.right>O.left+1&&A.top<O.bottom-1&&A.bottom>O.top+1,p=(A,O)=>c(A,O)?Math.max(0,Math.min(A.right,O.right)-Math.max(A.left,O.left))*Math.max(0,Math.min(A.bottom,O.bottom)-Math.max(A.top,O.top)):0,d=A=>{let O=0;A.left<o.l&&(O+=(o.l-A.left)*8),A.right>o.r&&(O+=(A.right-o.r)*8),A.top<o.t&&(O+=(o.t-A.top)*8),A.bottom>o.b&&(O+=(A.bottom-o.b)*8),O+=p(A,a)*4,O+=p(A,r)*4;for(const Ye of l)O+=p(A,Ye)*4;return O},g=t.getBoundingClientRect(),h=!a||g.left+g.width/2<=a.left+a.width/2,m=A=>({left:A?"0px":"auto",right:A?"auto":"0px",top:"46%",bottom:"auto",transform:A?"translate(-108%, -50%)":"translate(108%, -50%)"}),b=[m(h),m(!h),{left:"50%",right:"auto",top:"0px",bottom:"auto",transform:"translate(-50%, -115%)"}];let _=b[0],y=1/0;for(const A of b){Object.assign(e.style,A);const O=d(e.getBoundingClientRect());O<y&&(y=O,_=A)}Object.assign(e.style,_);let u=e.getBoundingClientRect(),k=0,x=0;u.left<o.l&&(k+=o.l-u.left),u.right>o.r&&(k-=u.right-o.r),u.top<o.t&&(x+=o.t-u.top),u.bottom>o.b&&(x-=u.bottom-o.b);const R=A=>{if(!A)return;const O=()=>new DOMRect(u.left+k,u.top+x,u.width,u.height);if(!c(O(),A))return;const Ye=Math.min(O().bottom,A.bottom)-Math.max(O().top,A.top),at=A.bottom+4-O().top,Oe=A.top-4-O().bottom,Be=on=>O().top+on>=o.t&&O().bottom+on<=o.b;if(Ye<u.height*.5&&Be(at)){x+=at;return}if(Ye<u.height*.5&&Be(Oe)){x+=Oe;return}const Ee=A.left-o.l,dt=o.r-A.right,pt=A===r?a:r,ds=(on,Vr)=>{if(!pt)return!1;const ps=Vr?on-u.width:on,Ci=new DOMRect(ps,O().top,u.width,u.height);return c(Ci,pt)};dt>=u.width+4&&!ds(A.right+4,!1)?k+=A.right+4-O().left:Ee>=u.width+4&&!ds(A.left-4,!0)?k+=A.left-4-O().right:Be(at)?x+=at:Be(Oe)&&(x+=Oe)};R(a),R(r);const H=t.querySelector(".inner")?.getBoundingClientRect(),I=H&&H.width>2?H:g,X=se.querySelector(".pet-cat")?.getBoundingClientRect(),le=se.querySelector('.item[data-kind="sandbox"]')?.getBoundingClientRect(),ce=se.querySelector('.item[data-kind="yard-bench"]')?.getBoundingClientRect(),G=[...se.querySelectorAll('.item[data-kind="yard-swing"], .item[data-kind="picnic-blanket"], .item[data-kind="lemonade-cart"], .item[data-kind="tulip-bed"]')].map(A=>A.getBoundingClientRect()),pe=F.querySelector(".yardDoor"),sn=pe?[pe,pe.querySelector(".yardHintLabel"),pe.querySelector(".doorArt")].map(A=>A?.getBoundingClientRect()):[],Ht=document.getElementById("secrets"),qe=Ht&&Ht.offsetParent?Ht.getBoundingClientRect():void 0,P=qe&&qe.width>2&&qe.left<o.r&&qe.right>o.l&&qe.top<o.b&&qe.bottom>o.t?qe:void 0,B=P?new DOMRect(P.left-8,P.top-8,P.width+16,P.height+16):void 0,N=[a,r,X,le,ce,B,...G,...sn].filter(A=>!!A&&A.width>2&&A.height>2),V=new DOMRect(u.left+k,u.top+x,u.width,u.height),U=I.left+I.width/2,j=I.top+I.height/2,fe=A=>Math.hypot(A.left+A.width/2-U,A.top+A.height/2-j),Le=A=>{const O=Math.min(A.right,I.right)-Math.max(A.left,I.left),Ye=Math.min(A.bottom,I.bottom)-Math.max(A.top,I.top);return O>1&&Ye>1},me=A=>A.left>=o.l-.5&&A.right<=o.r+.5&&A.top>=o.t-.5&&A.bottom<=o.b+.5&&N.every(O=>!c(A,O))&&!Le(A);let He=V;if(!me(V)||fe(V)>150){const A=[],O=(Oe,Be)=>{let Ee=Oe,dt=Be;Ee<o.l&&(Ee=o.l),dt<o.t&&(dt=o.t),Ee+u.width>o.r&&(Ee=Math.max(o.l,o.r-u.width)),dt+u.height>o.b&&(dt=Math.max(o.t,o.b-u.height)),A.push(new DOMRect(Ee,dt,u.width,u.height))};O(I.left+(I.width-u.width)/2,I.top-u.height-8),O(I.right-u.width,I.top-u.height-6),O(I.left,I.top-u.height-6),a&&O(a.right+6,I.top-u.height-8),ce&&O(ce.left-u.width-6,ce.top-u.height-6),a&&ce&&O(a.right+6,ce.top-u.height-6),a&&(O(a.left-12,a.top-u.height-8),O(o.l,a.top-u.height-10),O(a.left+(a.width-u.width)/2,a.top-u.height-8)),O(o.r-u.width,I.top-u.height-6),O(I.right+8,I.top+(I.height-u.height)/2),O(I.left-u.width-8,I.top+(I.height-u.height)/2),O(V.left,V.top);for(const Oe of[u.width*.65,u.width*1.05,88,120,155])for(let Be=0;Be<8;Be++){const Ee=Be*Math.PI/4;O(U+Math.cos(Ee)*Oe-u.width/2,j+Math.sin(Ee)*Oe-u.height/2)}const Ye=Oe=>{let Be=1/0,Ee=null;for(const dt of A){if(!me(dt)||fe(dt)>Oe)continue;const pt=fe(dt);pt<Be&&(Be=pt,Ee=dt)}return Ee},at=Ye(170)??Ye(360);if(at)He=at;else if(!me(V)){let Oe=null,Be=1/0;for(const Ee of A){if(Ee.left<o.l-.5||Ee.right>o.r+.5||Ee.top<o.t-.5||Ee.bottom>o.b+.5)continue;const pt=(Le(Ee)?1e4:0)+N.reduce((ds,on)=>ds+p(Ee,on),0)+fe(Ee);pt<Be&&(Be=pt,Oe=Ee)}Oe&&(He=Oe)}}k+=He.left-V.left,x+=He.top-V.top,(k||x)&&(e.style.transform=`${e.style.transform} translate(${(k/n).toFixed(1)}px, ${(x/n).toFixed(1)}px)`)}function q9(e,t){e.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.appendChild(n),Ei(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const Gi=new Map;function Z9(){const e=new Set,t=Ah();if(t){e.add(t.key);const n=t1(t.dog.name,Date.now()),s=Me[t.item.kind],o=(s?Fs(s,t.item.y):Math.min(t.item.y,Ue-Hg))-(n==="peek"?24:2);let a=Gi.get(t.key);if(!a||!a.el.isConnected){a?.el.remove();const l=document.createElement("div");l.className="pet pet-dog kenneled",l.dataset.dog="kennel:"+t.key,se.appendChild(l),l.addEventListener("pointerdown",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),c.preventDefault())}),l.addEventListener("click",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),q9(l,`${l.dataset.name??"Puppy"} is resting`))}),a={el:l,pose:"",look:"",x:t.item.x,y:o},Gi.set(t.key,a)}const r=n==="rest"?"sleep":"sit";if(a.pose!==r||a.look!==n+t.dog.breed){for(const l of[...a.el.children])l.matches(".bubble, .kennelBtn")||l.remove();a.el.insertAdjacentHTML("afterbegin",`<div class="inner">${ho(t.dog.breed,r)}</div>${n==="rest"?'<div class="zzz"><b>Zzz</b><i>z</i><i>z</i><i>z</i></div>':""}`),a.pose=r,a.look=n+t.dog.breed}a.el.dataset.name=t.dog.name,a.el.classList.toggle("rest",n==="rest"),a.el.classList.toggle("peek",n==="peek"),a.x=t.item.x,a.y=o,js(a.el,t.item.x,o,100,77),a.el.style.zIndex=String(1e3+t.item.z+1),Hh(a.el,t.key,!0)}for(const[n,s]of Gi)e.has(n)||(s.el.remove(),Gi.delete(n))}let ie=null,sa="",ul=0,ud=0,va={x:0,perch:0,leap:!1};const N9=562;function Oh(e){return(e.rooms[e.currentRoom]?.items.filter(n=>n.kind==="cat-tower")??[]).reduce((n,s)=>!n||s.z>=n.z?s:n,null)}function rf(e){return e==="cat-bed"||e==="pet-bed"||e==="dog-bed"||e==="pack:cat-bed"||/(?:^|:)cat-bed$|(?:^|:)pet-bed$/.test(e)}function F9(e){const t=e.rooms[e.currentRoom]?.items??[],n=t.filter(a=>rf(a.kind)),s=t.filter(a=>a.kind==="bed"),i=(n.length?n:s).reduce((a,r)=>!a||r.z>=a.z?r:a,null);if(!i)return null;const o=Me[i.kind];return{x:i.x,y:i.y,h:o?ct(o)*Ge(i):80,pet:rf(i.kind)}}function j9(){const e=C.get();!e.cat||e.cat.room!==e.currentRoom||!Oh(e)||(ud=performance.now()+900,z.boing(),w?.fx({k:"leap"}))}function G9(){const e=C.get(),t=S==="house"?e.cat:null;if(!t||t.room!==e.currentRoom){ie&&(ie.remove(),ie=null,sa="",ul=0);return}(!ie||!ie.isConnected)&&(ie=document.createElement("div"),ie.className="pet pet-cat",se.appendChild(ie),sa="",ie.addEventListener("pointerdown",H=>{H.stopPropagation(),H.preventDefault()}),ie.addEventListener("click",H=>{H.stopPropagation(),Vh(),w&&w.fx({k:"purr"})}));const n=Oh(e),s=n?null:F9(e),i=n?Me[n.kind]:void 0,o=n&&i?ct(i)*Ge(n):0,a=n1(t,Date.now(),n?{x:n.x}:null,s?{x:s.x}:null,xr()),r=!!n&&performance.now()<ud,l=r?2:a.perch,c=r&&n?n.x:a.x,p=r?"play":a.mood,d=p==="walk"?"stand":p==="nap"?"nap":"sit",g=d+t.coat+(l?"p":"");if(g!==sa){const H=[...ie.querySelectorAll(".bubble, .heart")];ie.innerHTML=`<div class="inner">${mi(t.coat,d)}</div>${d==="nap"?'<div class="zzz"><i>z</i><i>z</i><i>z</i></div>':""}`;for(const I of H)ie.appendChild(I);sa=g}if(l>0&&ul===0){ie.classList.add("hop");const H=ie;setTimeout(()=>H.classList.remove("hop"),420)}ul=l,ie.dataset.name=t.name,ie.dataset.mood=p,ie.dataset.perch=String(l),ie.dataset.leap=r?"1":"0",ie.dataset.curl=a.curl?"1":"0",ie.classList.toggle("walking",p==="walk"),ie.classList.toggle("groom",p==="groom"),ie.classList.toggle("play",p==="play"&&!r),ie.classList.toggle("leap",r),ie.classList.toggle("flipped",a.flip),ie.classList.toggle("curl",a.curl===1),se.querySelectorAll(".item.toy-live").forEach(H=>H.classList.remove("toy-live")),n&&p==="play"&&l&&!r&&se.querySelector(`.item[data-id="${n.id}"]`)?.classList.add("toy-live");const h=window.__pinCat,m=!!(h&&Number.isFinite(h.x)),b=m&&Number.isFinite(h.y)?h.y:N9,_=!m&&l&&n?e1(n.y,o,l):!m&&a.curl&&s?s.y-s.h*(s.pet?.38:.2):b,y=e.currentRoom==="backyard"&&!l,u=!m&&l?92:y?115:128,k=!m&&l?110:y?135:150,x=m?h.x:e.currentRoom==="backyard"?jn.x:Wh(c,k/2),R=!m&&e.currentRoom==="backyard"&&!l?jn.y:_;js(ie,x,R,k,u),ie.style.zIndex=String(4e3+Math.round(R)),va={x,perch:l,leap:r}}function Wh(e,t){const n=C.get().currentRoom,s=n==="backyard"?ng:n==="living"?tg:null;if(!s)return e;const i=s.x-s.w/2-t-16,o=s.x+s.w/2+t+16;return e<=i||e>=o?e:e<s.x?i:o}function Vh(){if(!ie)return;z.purr(),setTimeout(()=>z.meow(),250),ie.querySelector(".bubble")?.remove();const e=document.createElement("div");e.className="bubble petBubble",e.textContent=`${ie.dataset.name} purrs ♥`,ie.appendChild(e),Ei(),setTimeout(()=>e.classList.add("out"),1500),setTimeout(()=>e.remove(),1900),ie.classList.remove("happy"),ie.offsetWidth,ie.classList.add("happy");for(let t=0;t<5;t++){const n=document.createElement("div");n.className="heart",n.textContent="♥",n.style.left=20+Math.random()*60+"%",n.style.animationDelay=t*.12+"s",n.style.color=["#ff6b9a","#ff8fab","#e879c6"][t%3],ie.appendChild(n),setTimeout(()=>n.remove(),1800)}}function Y9(e,t){if(t.k==="zoo"||t.k==="apple"||t.k==="honk"||t.k==="hen"){pL(t);return}t.k==="trick"?Rh(t.owner,t.v):t.k==="purr"?S==="house"&&Vh():t.k==="leap"?S==="house"&&(ud=performance.now()+900):t.k==="ball"?Bh(e,t.x,t.y):t.k==="splash"&&Ph(t.x)}function Uh(e){const t=Math.min(.05,Math.max(0,(e-nf)/1e3));nf=e;try{B9(e,t),Z9(),G9(),gL(e,t),hM(t),fg()}catch{}requestAnimationFrame(Uh)}function K9(){return w?w.view(w.myHouseId())?.cat??null:K.get().cat??null}function md(){return w?w.players.get(w.pid)?.dog??null:K.get().dog??null}function Yi(e){if(w){const t=w.myHouseId();t&&w.dispatch(t,e)}else K.dispatch(e)}const Ka=()=>S==="house"&&(!w||De===K||ze===w.myHouseId());function X9(e="cat"){const t=K9(),n=md(),s=K.get().characters,i={tab:e,coat:t?.coat??0,catName:t?.name??"",breed:n?.breed??0,dogName:n?.name??"",owner:n?.owner??s[0]?.id,err:"",bye:!1},o=qt("",(l,c)=>{const p=h=>l.closest(`[${h}]`)?.getAttribute(h);if(p("data-pt")){i.tab=p("data-pt"),i.err="",i.bye=!1,r();return}if(p("data-coat")!=null){i.coat=+p("data-coat"),z.click(),r();return}if(p("data-breed")!=null){i.breed=+p("data-breed"),z.click(),r();return}if(p("data-cname")){i.catName=p("data-cname"),z.click(),r();return}if(p("data-dname")){i.dogName=p("data-dname"),z.click(),r();return}if(p("data-owner")){i.owner=p("data-owner"),z.click(),r();return}const d=p("data-pa");if(!d)return;const g=(o.root.querySelector("#petName")?.value??"").trim();if(d==="adoptCat"||d==="adoptDog"){const h=g||(d==="adoptCat"?i.catName:i.dogName),m=If(h);if(!m){i.err=h?"Hmm, try a different name!":"Pick a name first!",z.pop(),r();return}if(d==="adoptCat"){const b=Ka(),_={name:m,coat:i.coat,room:b?C.get().currentRoom:t?.room??"living",x:b?Math.max(200,Math.min(_e-200,ae+re/2)):t?.x??1200};Yi({type:"cat/set",cat:_}),z.meow(),c(),Z(t?`${m} looks great! 🐱`:b?`${m} moved in! 🐱`:`${m} is waiting at your house! 🐱`)}else{const b=w?{name:m,breed:i.breed}:{name:m,breed:i.breed,owner:i.owner};w?(w.setDog(b),S==="park"&&Qs()):K.dispatch({type:"dog/set",dog:b}),z.woof(),c(),Z(n?`${m} looks great! 🐶`:`${m} is your new best friend! 🐶`)}return}if(d==="callCat"){Yi({type:"cat/move",room:C.get().currentRoom,x:Math.max(200,Math.min(_e-200,ae+re/2))}),z.meow(),c();return}if(d==="kennelDog"){hd(),c();return}if(d==="bye"){if(!i.bye){i.bye=!0,r();return}i.tab==="cat"?Yi({type:"cat/set",cat:null}):(Yi({type:"dog/kennel",item:null}),w?w.setDog(null):K.dispatch({type:"dog/set",dog:null})),c(),Z("They went to live with a kind friend 💛");return}},"wide pets"),a=o.root.querySelector(".card");function r(){const l=i.tab==="cat",c=l?t:n,p=l?qm:Zm,d=l?i.catName:i.dogName,g=o.root.querySelector("#petName")?.value??"";a.innerHTML=`${Zt}<h2>Pets</h2>
      <div class="petTabs"><button data-pt="cat" class="${l?"on":""}">🐱 Cat</button><button data-pt="dog" class="${l?"":"on"}">🐶 Dog</button></div>
      <p class="hint small">${l?w?"Your cat lives in your house. Friends can see her when they visit!":"Your cat lives in your house. She naps, purrs, and plays!":w?"Your dog follows you everywhere: the street, friends' houses, and the park!":"Your dog follows you around the house and to the park!"}</p>
      <div class="petRow"><div class="petPreview">${l?mi(i.coat,"sit"):ho(i.breed,"stand")}</div>
        <div class="swatches">${(l?zl:Pl).map((h,m)=>`<button ${l?"data-coat":"data-breed"}="${m}" class="${m===(l?i.coat:i.breed)?"on":""}"><div>${l?mi(m,"sit"):ho(m,"stand")}</div><span>${h.name}</span></button>`).join("")}</div></div>
      <div class="label">Name</div>
      <div class="nameChips">${p.map(h=>`<button ${l?"data-cname":"data-dname"}="${h}" class="${h===d?"on":""}">${h}</button>`).join("")}</div>
      <input id="petName" class="petName" maxlength="14" autocomplete="off" placeholder="…or type a name" value="${de(g)}"/>
      ${i.err?`<p class="err" id="petErr">${de(i.err)}</p>`:""}
      ${!l&&!w&&s.length>1?`<div class="label">Who does your dog follow?</div><div class="walkers">${s.map(h=>`<button data-owner="${h.id}" class="${h.id===i.owner?"on":""}">${wt(h)}</button>`).join("")}</div>`:""}
      <div class="petBtns"><button class="go" data-pa="${l?"adoptCat":"adoptDog"}" id="adoptBtn">${c?"Save":"Adopt! 💛"}</button>
        ${l&&t&&Ka()?'<button data-pa="callCat" id="callCat">Here, kitty!</button>':""}
        ${!l&&n?`<button data-pa="kennelDog" id="kennelDog">${Rr(gd())?"Come, puppy!":"Kennel"}</button>`:""}
        ${c?`<button class="danger" data-pa="bye">${i.bye?"Tap again to say goodbye":"Find a new home"}</button>`:""}</div>`}r()}M("btnPets").addEventListener("click",()=>X9(S==="house"?"cat":"dog"));requestAnimationFrame(Uh);window.__pets=()=>{const e=Ah(),t=e?Gi.get(e.key):void 0;return{dogs:[...Zn.keys()],dogPos:Object.fromEntries([...Zn].map(([n,s])=>[n,{x:Math.round(s.x),y:Math.round(s.y)}])),cat:ie?{mood:ie.dataset.mood,name:ie.dataset.name,perch:va.perch,x:Math.round(va.x),leap:va.leap,curl:ie.dataset.curl==="1"}:null,kennel:e&&t?{x:Math.round(t.x),y:Math.round(t.y),pose:t.pose,name:e.dog.name,item:e.item.id}:null,dogKennel:C.get().dogKennel??null,fetch:We?.phase??null,ball:qn,view:S}};function nn(){return M("ranch").clientHeight/zo}let _t=[];const ko=e=>String(100+Math.round(e)),Qh=220,J9=Qh*130/160,qh=156,eL=qh*130/160,tL=.6,nL=3.5,sL=3,rc=10,Xn=new Map,ka=new Map;function Xa(e,t,n=rc){const s=(e-ht.x)/(ht.rx+n),i=(t-ht.y)/(ht.ry+n);return s*s+i*i<1}function ml(e,t,n,s){for(let i=0;i<=18;i++){const o=i/18;if(Xa(e+(n-e)*o,t+(s-t)*o))return!0}return!1}function Ja(e,t){return{x:Math.max(70,Math.min(wd()-70,e)),y:Math.max(zs,Math.min(Pn,t))}}function iL(e,t){const n=Ja(t.x,t.y);if(Xa(n.x,n.y,6))return null;if(!ml(e.x,e.y,n.x,n.y))return[n];const s=ht.x-ht.rx-rc-28,i=ht.x+ht.rx+rc+28;let o=null,a=1/0;for(const r of[zs+1,Pn-2]){const l=[];let c=e.x,p=e.y;const d=(_,y)=>{const u=Ja(_,y);l.push(u),c=u.x,p=u.y};ml(c,p,c,r)&&d(c<ht.x?s:i,p),Math.abs(p-r)>3&&d(c,r),Math.abs(c-n.x)>3&&d(n.x,r),l.push(n);let g=!0,h=e.x,m=e.y,b=0;for(const _ of l){if(ml(h,m,_.x,_.y)||Xa(_.x,_.y,4)){g=!1;break}b+=Math.hypot(_.x-h,_.y-m),h=_.x,m=_.y}g&&b<a&&(o=l,a=b)}return o}function Zh(e,t){const n=yn();if(!n)return;const s={x:Math.max(60,Math.min(wd()-60,e)),y:Math.max(zs,Math.min(Pn,t))};if(n.ride!==void 0&&n.where==="ranch"){const i=iL(n,s);if(!i){Z("The horse won't splash through the pond!"),z.pop();return}_t=i}else _t=[s]}function oL(e){if(e.look2)return Sx(e.look2);const t=e.pants,n="#5a3d5c",s=(i,o,a,r)=>`<path class="${i}" d="${o}" fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/><path class="${i} cloth" d="${o}" fill="none" stroke="${t}" stroke-width="${r}" stroke-linecap="round"/>`;return`<svg class="rideleg" viewBox="0 0 160 130">${s("thigh","M66 56 L102 66",13,8)}${s("shin","M102 68 L106 104",12,7.2)}<circle class="knee" cx="102" cy="67" r="6.2" fill="${t}" stroke="${n}" stroke-width="3.5"/><ellipse class="shoe" cx="116" cy="106" rx="11" ry="5.2" fill="${n}"/></svg>`}function Jn(){return document.body.classList.contains("phone")&&document.body.classList.contains("phone-portrait")&&!Ie}function Ar(){if(!Jn())return mf.map((t,n)=>n);const e=[0,2,4];for(const t of Kn("ranch")){const n=t.p.ride;n!==void 0&&e.indexOf(n)<0&&e.push(n)}return e}function ss(e){if(!Jn())return mf[e];const t=Ar(),n=t.indexOf(e),s=t.length,i=n<0?0:n,o=yd().w/2,a=2400+o+18,r=3080-o-18;return s<=1?Math.round((a+r)/2):Math.round(a+(r-a)*i/(s-1))}function yd(){return Jn()?{w:131,h:106}:{w:150,h:122}}function er(e,t,n){const s=nn(),{w:i,h:o}=yd();e.style.left=(t-i/2)*s+"px",e.style.top=(n-o)*s+"px",e.style.width=i*s+"px",e.style.height=o*s+"px",e.style.zIndex=ko(n)}function aL(){if(S!=="ranch"||Ie||!document.body.classList.contains("phone"))return;const e=new Set(Ar());document.querySelectorAll("#ranchWorld .horse").forEach(t=>{const n=+t.dataset.horse;t.classList.toggle("stallOff",Jn()&&!e.has(n)),!(!e.has(n)||Xn.has(n)||t.classList.contains("away"))&&er(t,ss(n),Ps)})}function rL(e,t,n){if(Xn.has(e)||Math.hypot(t-ss(e),n-Ps)<26)return;Xn.set(e,{x:t,y:n});const s=document.querySelector(`#ranchWorld .horse[data-horse="${e}"]`);s&&(s.classList.add("trotting"),s.classList.remove("away"),s.classList.toggle("flipped",ss(e)<t),er(s,t,n))}function lL(e,t,n){const s=n?-1:1;for(const i of[s*118,-s*118,s*160,-s*78])for(const o of[0,30,-26,48]){const a=Ja(e+i,t+o);if(!(Math.hypot(a.x-e,a.y-t)<50)&&!Xa(a.x,a.y,8))return a}return Ja(e,t)}let lf=0,Nh=0;const Dr=()=>w?w.now():Date.now(),Ir=()=>yc(w?w.ranch.plots:K.get().garden),Ro=()=>mc(w?w.players.get(w.pid)?.basket:K.get().basket),wd=()=>Ie?hc:xo,Fh=()=>Ie?"barn":"ranch",jh=()=>{const e=new Map;for(const t of Kn("ranch"))t.p.ride!==void 0&&e.set(t.p.ride,t);return e};function lc(e){const t={taken:"A friend just planted there!",wet:"Already watered 💧",notReady:"Still growing! 🌱",full:"Your basket is full!",slow:"The hen is laying… try again!",none:"Your basket has none left",nohouse:"Go home to put it in your room"};t[e]&&(Z(t[e]),z.pop())}function hi(e){if(w){const i=vl(Ir(),Ro(),e,Dr(),e.op==="egg"?lf:0);return typeof i=="string"?(lc(i),!1):(e.op==="egg"&&(lf=Date.now()),w.ranchOp(e),!0)}const t=K.get(),n=Date.now(),s=vl(yc(t.garden),mc(t.basket),e,n,t.lastEgg??0);return typeof s=="string"?(lc(s),!1):(K.dispatch({type:"ranch/op",op:e,now:n}),Hr(!0),kd(),!0)}function _o(e=!1){const t=S==="ranch"&&Ie&&!e;Ys(),M("ranch").classList.remove("hidden"),We=null,_t=[],S="ranch",Ie=e;const n=e?{where:"barn",x:170,y:560,flip:!1}:{where:"ranch",x:t?yl:130,y:t?520:565,flip:!1};w?je(n):At=n,M("streetTitle").textContent=e?"The Barn":"Rainbow Ranch",mn(),bd(),requestAnimationFrame(()=>{const s=M("ranchScroll"),i=nn();s.scrollLeft=t?Math.max(0,yl*i-s.clientWidth/2):0,dc()}),setTimeout(dc,650),Bo(M("ranch")),e?z.swish():z.sparkle()}M("btnHopOff").addEventListener("click",()=>Gh());function bd(){const e=nn(),t=M("ranchWorld"),n=i=>i*e+"px",s=(i,o,a,r)=>`left:${n(i-a/2)};top:${n(o-r)};width:${n(a)};height:${n(r)};z-index:${ko(o)}`;if(t.style.width=wd()*e+"px",t.style.height=zo*e+"px",t.style.setProperty("--sc",String(e)),Ie){t.innerHTML=p7()+`<button class="rprop barnExit" data-r="exit" aria-label="Go outside" style="${s(127,444,206,244)}"><span class="exitHint"><span>Outside ☀️</span></span></button>`+ks.map((i,o)=>`<button class="animal" data-animal="${o}" aria-label="${ug[o].name}" style="${s(uc[o],j0+30,128,107)}">${Zl(o)}</button>`).join("")+[300,1244].map(i=>["carrot","apple","hay"].map((o,a)=>`<button class="bucket" data-feed="${o}" aria-label="${o} bucket" style="${s(i+a*56,592,54,62)}">${i7(o)}</button>`).join("")).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',es(),it();return}t.innerHTML=Kx()+Xx().replace("<svg ",`<svg style="z-index:${ko(Jx)}" `)+`<button class="rprop barnDoor" data-r="barn" aria-label="Go into the barn" style="${s(yl,472,150,150)}"><span class="doorHint"><span>Petting zoo inside! 🐐</span></span></button><button class="rprop windmill" data-r="mill" aria-label="Windmill" style="${s(1540,478,150,240)}">${l7}</button><button class="rprop henHouse" data-r="egg" aria-label="Hen house" style="${s(715,482,180,170)}">${e7}</button><button class="rprop tractor" data-r="honk" aria-label="Tractor" style="${s(900,580,170,130)}">${t7}</button><button class="rprop appleTree" data-r="apple" aria-label="Apple tree" style="${s(2085,482,240,300)}">${n7}</button>`+G0.map((i,o)=>{const a=yd();return`<button class="horse${Jn()&&Ar().indexOf(o)<0?" stallOff":""}" data-horse="${o}" aria-label="${Ha[o].name} horse" style="${s(ss(o),Ps,a.w,a.h)}">${Vc(o)}</button>`}).join("")+Array.from({length:wl},(i,o)=>`<button class="plot" data-plot="${o}" aria-label="Garden plot" style="${s(K0(o),594,66,86)}"></button>`).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',Hr(!0),es(),it()}const ia=[];function Hr(e=!1){if(S!=="ranch"||Ie)return;const t=Ir(),n=Dr();document.querySelectorAll("#ranchWorld .plot").forEach(s=>{const i=+s.dataset.plot,o=t[i]??null,a=fr(o,n),r=JSON.stringify(o)+a;!e&&ia[i]===r||(ia[i]!==void 0&&ia[i]!==r&&a>0&&(s.classList.remove("grow"),s.offsetWidth,s.classList.add("grow")),ia[i]=r,s.innerHTML=wg(o,a,i),s.dataset.stage=o?String(a):"empty")})}function es(){const e=document.getElementById("ravatars");if(!e||S!=="ranch")return;const t=nn(),n=new Set,s=new Set;let i=!1;for(const o of Kn(Fh())){n.add(o.key);let a=e.querySelector(`.savatar[data-pid="${o.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(o.mine?"mine":"other"),a.dataset.pid=o.key,e.appendChild(a),o.mine&&zh(a));const r=JSON.stringify(o.look)+o.name;if(a.dataset.look!==r){const h=a.querySelector(".bubble");a.innerHTML=o.name?rd(o.look,o.name):`<div class="inner">${wt(o.look)}</div>`,h&&a.appendChild(h),a.dataset.look=r,a.dataset.ride=""}const l=o.p.ride,c=(Is[o.look.size]??1)*t*.95*(l!==void 0?tL:1),p=as*c,d=un*c;if(a.dataset.ride!==String(l??"")&&(a.querySelector(".mount")?.remove(),l!==void 0&&a.insertAdjacentHTML("afterbegin",`<div class="mount" data-mount="${l}">${Vc(l,!0)}${oL(o.look)}</div>`),a.dataset.ride=String(l??"")),a.classList.toggle("riding",l!==void 0),l!==void 0){s.add(l),o.mine&&(i=!0),ka.set(l,{x:o.p.x,y:o.p.y});const h=Jn()?qh:Qh,m=Jn()?eL:J9,b=h*t,_=m*t,y=a.querySelector(".mount");y.style.width=b+"px",y.style.height=_+"px",y.style.left=(p-b)/2+"px",y.style.top=d-_+"px";const u=Number(a.querySelector(".shirt")?.getAttribute("data-hem")??126),k=Number(y.querySelector(".saddle")?.getAttribute("data-top")??43),x=(u+nL/2)/160*d,R=d-_+(k-sL/2)/130*_;a.style.setProperty("--lift",x-R+"px");const H=y.querySelector(".rideleg");H&&(H.style.left="0",H.style.top="0",H.style.width="100%",H.style.height="100%")}else a.style.removeProperty("--lift");const g=parseFloat(a.dataset.lx??"NaN");Number.isFinite(g)&&Math.abs(g-o.p.x)>2&&(a.classList.add("moving"),clearTimeout(+(a.dataset.mt??0)),a.dataset.mt=String(window.setTimeout(()=>a.classList.remove("moving"),260))),a.dataset.lx=String(o.p.x),a.style.left=o.p.x*t-p/2+"px",a.style.top=o.p.y*t-d+"px",a.style.width=p+"px",a.style.height=d+"px",a.style.zIndex=ko(o.p.y),a.classList.toggle("flipped",o.p.flip),So(a,o.look,o.mine)}if(e.querySelectorAll(".savatar").forEach(o=>{n.has(o.dataset.pid)||o.remove()}),document.body.classList.contains("phone")){const o=new Set(Ar());document.querySelectorAll("#ranchWorld .horse").forEach(a=>{a.classList.toggle("stallOff",Jn()&&!o.has(+a.dataset.horse))})}document.querySelectorAll("#ranchWorld .horse").forEach(o=>{const a=+o.dataset.horse;s.has(a)?(o.classList.add("away"),Xn.delete(a)):o.classList.remove("away")});for(const[o,a]of[...ka])s.has(o)||(rL(o,a.x,a.y),ka.delete(o));document.body.classList.toggle("riding",i),Gs()}function cL(e){const t=yn();if(!t||t.where!=="ranch")return;const n=jh().get(e);if(n&&!n.mine){Z("Someone is riding!"),z.pop();return}if(t.ride!==void 0){if(n?.mine||t.ride===e){Gh();return}Zh(ss(e),Math.min(Pn,Ps+8));return}_t=[],Xn.delete(e),Jt({where:"ranch",x:ss(e),y:Math.min(Pn,Ps+8),flip:!1,ride:e}),z.neigh(),Z(`You're riding ${Ha[e].name}! Tap the ground to gallop 🐴`)}function Gh(){const e=yn();if(!e||e.ride===void 0)return;const t=e.ride,{ride:n,...s}=e;_t=[];const i=lL(s.x,s.y,s.flip);ka.set(t,{x:s.x,y:s.y}),Jt({...s,x:i.x,y:i.y}),z.drop()}function vd(e,t){const n=e<ks.length?document.querySelector(`#ranchWorld .animal[data-animal="${e}"]`):document.querySelector(`#ranchWorld .horse[data-horse="${e-ks.length}"]:not(.away)`)??document.querySelector(`#ravatars .mount[data-mount="${e-ks.length}"]`);if(!n||S!=="ranch")return;const s=e>=ks.length,i=s?{say:"Neigh! ♥",snd:"neigh"}:ug[e];n.classList.remove("hop","munch"),n.offsetWidth,n.classList.add(t?"munch":"hop"),setTimeout(()=>n.classList.remove("hop","munch"),1400),n.querySelector(".abubble")?.remove();const o=document.createElement("div");o.className="bubble petBubble abubble",o.textContent=t?`Yum! Munch munch ${t===1?"🥕":t===2?"🍎":"🌾"}`:i.say,n.appendChild(o),Ei(),setTimeout(()=>o.classList.add("out"),1400),setTimeout(()=>o.remove(),1800);for(let a=0;a<(t?6:4);a++){const r=document.createElement("div");r.className="heart",r.textContent="♥",r.style.left=15+Math.random()*70+"%",r.style.animationDelay=a*.12+"s",r.style.color=["#ff6b9a","#ff8fab","#e879c6","#b197fc"][a%4],n.appendChild(r),setTimeout(()=>r.remove(),1900)}z[i.snd]?.(),t&&setTimeout(()=>z.munch(),250)}function Yh(){const e=document.querySelector("#ranchWorld .henHouse");e&&(e.classList.remove("lay"),e.offsetWidth,e.classList.add("lay"),z.cluck())}function dL(){const e=document.querySelector("#ranchWorld .henHouse"),t=M("basketChip");if(!e)return;const n=e.getBoundingClientRect(),s=t.getBoundingClientRect(),i=document.createElement("div");i.className="flyEgg",i.innerHTML=uo,document.body.appendChild(i),Object.assign(i.style,{left:n.left+n.width/2-18+"px",top:n.top+n.height*.6+"px"}),requestAnimationFrame(()=>{i.style.left=s.left+s.width/2-18+"px",i.style.top=s.top+"px",i.style.transform="scale(.6) rotate(200deg)"}),setTimeout(()=>{i.remove(),t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")},650)}function Kh(e){const t=document.getElementById("rfx");if(!t||S!=="ranch")return;const n=nn(),[s,i]=kp[e]??kp[0],o=1965+s,a=182+i,r=o+(e%2?26:-22),l=575+e*4,c=document.createElement("button");c.className="fallenApple",c.dataset.feed="apple",c.setAttribute("aria-label","Apple"),c.innerHTML=mg;const p=32*n;Object.assign(c.style,{width:p+"px",height:p+"px",left:o*n-p/2+"px",top:a*n-p/2+"px",zIndex:ko(l)}),t.appendChild(c),requestAnimationFrame(()=>{c.style.left=r*n-p/2+"px",c.style.top=l*n-p+"px",c.classList.add("fallen")});const d=document.querySelector("#ranchWorld .appleTree");d?.classList.remove("shake"),d?.offsetWidth,d?.classList.add("shake"),z.boing(),setTimeout(()=>c.remove(),12e3)}function Xh(){const e=document.querySelector("#ranchWorld .tractor");e?.classList.remove("bounce"),e?.offsetWidth,e?.classList.add("bounce"),z.honk()}function pL(e){e.k==="zoo"?vd(e.a,e.f):e.k==="apple"?Kh(e.v):e.k==="honk"?Xh():e.k==="hen"&&Yh()}function cf(e,t){const n=document.elementFromPoint(e,t);if(!n)return null;const s=n.closest("[data-animal]");if(s)return+s.dataset.animal;const i=n.closest(".horse:not(.away)");if(i)return ks.length+ +i.dataset.horse;const o=n.closest(".savatar.riding");return o?.dataset.ride?ks.length+ +o.dataset.ride:null}function cc(e,t,n){e.preventDefault(),e.stopPropagation();const s=document.createElement("div");s.className="feedGhost",s.innerHTML=yg[t],document.body.appendChild(s);const i=m=>{s.style.left=m.clientX-30+"px",s.style.top=m.clientY-50+"px"};i(e),z.pick();let o=0;const a=e.clientX,r=e.clientY;n instanceof HTMLElement&&(n.style.visibility="hidden");let l=e.clientX,c=0;const p=M("ranchScroll"),d=()=>{const m=p.getBoundingClientRect(),b=l<m.left+60?-12:l>m.right-60?12:0;b&&o>12&&S==="ranch"&&(p.scrollLeft+=b),c=requestAnimationFrame(d)};c=requestAnimationFrame(d);const g=m=>{if(m.pointerId!==e.pointerId)return;l=m.clientX,o=Math.max(o,Math.hypot(m.clientX-a,m.clientY-r)),i(m),document.querySelectorAll(".feedHover").forEach(_=>_.classList.remove("feedHover")),cf(m.clientX,m.clientY)!==null&&document.elementFromPoint(m.clientX,m.clientY)?.closest(".animal, .horse, .savatar")?.classList.add("feedHover")},h=m=>{if(m.pointerId!==e.pointerId)return;cancelAnimationFrame(c),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",h),s.remove(),Nh=Date.now(),document.querySelectorAll(".feedHover").forEach(y=>y.classList.remove("feedHover"));const b=cf(m.clientX,m.clientY);if(b===null){n instanceof HTMLElement&&(n.style.visibility=""),o<12?Z("Drag the food onto an animal! 🥕"):z.drop();return}if(n==="basket"&&!hi({op:"use",kind:"carrot"}))return;n instanceof HTMLElement&&n.remove();const _=Y0.indexOf(t);vd(b,_),w?.fx({k:"zoo",a:b,f:_})};window.addEventListener("pointermove",g),window.addEventListener("pointerup",h)}M("ranchWorld").addEventListener("pointerdown",e=>{const t=e.target,n=t.closest(".bucket");if(n)return cc(e,n.dataset.feed,"bucket");const s=t.closest(".fallenApple");if(s)return cc(e,"apple",s);t.closest(".rprop, .animal, .horse, .plot, .pet")&&e.stopPropagation()});M("ranchWorld").addEventListener("click",e=>{const t=e.target;if(!yn()||S!=="ranch"||Date.now()-Nh<400)return;const s=t.closest("[data-animal]");if(s){const d=+s.dataset.animal;vd(d,0),w?.fx({k:"zoo",a:d,f:0});return}const i=t.closest("[data-horse]");if(i){cL(+i.dataset.horse);return}const o=t.closest("[data-r]")?.dataset.r;if(o==="egg"){Yh(),hi({op:"egg"})&&(dL(),z.pickup());return}if(o==="honk"){Xh(),w?.fx({k:"honk"});return}if(o==="apple"){const d=Math.floor(Math.random()*4);Kh(d),w?.fx({k:"apple",v:d});return}if(o==="barn"){_o(!0);return}if(o==="exit"){_o(!1);return}if(o==="mill"){const d=t.closest(".windmill");d?.classList.remove("whirl"),d?.offsetWidth,d?.classList.add("whirl"),z.swish();return}const a=t.closest("[data-plot]");if(a){fL(+a.dataset.plot,a);return}if(t.closest(".bucket, .fallenApple, .savatar, .pet"))return;const r=M("ranchWorld").getBoundingClientRect(),l=nn(),c=(e.clientX-r.left)/l,p=(e.clientY-r.top)/l;p<400||Zh(c,p)});function fL(e,t){const n=Ir()[e]??null,s=fr(n,Dr());if(document.querySelector(".seedPick")?.remove(),!n){const i=document.createElement("div");i.className="seedPick",i.innerHTML=`<button data-seed="carrot">${Mr}<span>Carrot</span></button><button data-seed="flower">${Uc()}<span>Flower</span></button>`,t.parentElement.appendChild(i),i.style.left=t.offsetLeft+t.offsetWidth/2+"px",i.style.top=t.offsetTop-8+"px",i.addEventListener("pointerdown",o=>o.stopPropagation()),i.addEventListener("click",o=>{o.stopPropagation();const a=o.target.closest("[data-seed]")?.dataset.seed;i.remove(),a&&hi({op:"plant",i:e,seed:a})&&(z.plant(),Z("Planted! Now tap it to water 💧"))}),setTimeout(()=>i.remove(),6e3);return}if(!n.wet){hi({op:"water",i:e})&&(z.water(),t.classList.remove("watering"),t.offsetWidth,t.classList.add("watering"));return}if(s<3){Z("Still growing! 🌱"),z.pop();return}hi({op:"pick",i:e})&&(z.pickup(),Z(n.seed==="carrot"?"A carrot for your basket! 🥕":"Pretty flowers for your basket! 🌸"))}let df=0;function gL(e,t){if(S!=="ranch")return;const n=Date.now();if(document.querySelectorAll("#ranchWorld .animal").forEach(s=>{const i=+s.dataset.animal,o=nn(),a=n/5200+i*1.7,r=(Ie?uc:F0)[i]+Math.sin(a)*32;s.style.left=(r-s.offsetWidth/o/2)*o+"px",s.classList.toggle("flipped",Math.cos(a)<0),s.classList.toggle("walking",Math.abs(Math.cos(a))>.35)}),e-df>1e3&&(df=e,Hr()),_t.length){const s=yn();if(!s||s.where!==Fh())_t=[];else{const i=_t[0],o=s.ride!==void 0?720:300,a=i.x-s.x,r=i.y-s.y,l=Math.hypot(a,r);if(l<6)_t.shift();else{const c=Math.min(l,o*t),p={...s,x:s.x+a/l*c,y:s.y+r/l*c,flip:Math.abs(a)>2?a<0:s.flip};Jt(p);const d=nn(),g=M("ranchScroll"),h=p.x*d-g.scrollLeft;h>-40&&h<g.clientWidth+40&&(h<g.clientWidth*.2||h>g.clientWidth*.8)&&(g.scrollLeft=p.x*d-g.clientWidth/2)}}}for(const[s,i]of Xn){const o=document.querySelector(`#ranchWorld .horse[data-horse="${s}"]`);if(!o||o.classList.contains("away")){Xn.delete(s);continue}const a=ss(s)-i.x,r=Ps-i.y,l=Math.hypot(a,r);if(l<8){Xn.delete(s),o.classList.remove("trotting","flipped"),er(o,ss(s),Ps);continue}const c=Math.min(l,460*t);i.x+=a/l*c,i.y+=r/l*c,o.classList.add("trotting"),o.classList.toggle("flipped",a<0),er(o,i.x,i.y)}}function kd(){const e=document.getElementById("basketChip");if(!e)return;const t=S==="house"&&(!w||De===K||ze===w.myHouseId()),n=Ro(),i=n.egg+n.carrot+n.flower>0&&(S==="ranch"||t);e.classList.toggle("hidden",!i),e.classList.toggle("inHouse",S==="house"),i&&(e.innerHTML=`<span class="bIcon">${o7}</span><span class="bcount" data-kind="egg">${uo}<b>${n.egg}</b></span><span class="bcount" data-kind="carrot">${Mr}<b>${n.carrot}</b></span><span class="bcount" data-kind="flower">${Uc()}<b>${n.flower}</b></span>`)}M("basketChip").addEventListener("pointerdown",e=>{e.target.closest('.bcount[data-kind="carrot"]')&&S==="ranch"&&Ro().carrot>0&&cc(e,"carrot","basket")});M("basketChip").addEventListener("click",()=>hL());function hL(){const e=S==="house"&&(!w||De===K||ze===w.myHouseId()),t={egg:["Eggs",uo],carrot:["Carrots",Mr],flower:["Flowers",Uc()]},n=qt("",(i,o)=>{const a=i.closest("[data-take]")?.dataset.take;if(!a)return;if(!e){Z("Take it home to put it in your room! 🏠");return}const r="r"+Math.random().toString(36).slice(2,10),l=Math.max(120,Math.min(_e-120,ae+re/2+(Math.random()-.5)*300));hi({op:"take",kind:a,id:r,room:C.get().currentRoom,x:l})&&(z.drop(),o(),Z("It's in your room! Drag it to a hand to carry it ✋"))},"basketSheet"),s=Ro();n.root.querySelector(".card").innerHTML=`${Zt}<h2>My Basket</h2><p class="hint small">${e?"Tap one to put it in your room.":"Collect eggs, carrots and flowers at Rainbow Ranch, then take them home!"}</p>
    <div class="basketRows">${yf.map(i=>`<button class="bRow" data-take="${i}" ${s[i]?"":"disabled"}>${t[i][1]}<b>${s[i]}</b><span>${t[i][0]}</span></button>`).join("")}</div>`}window.__ranch=()=>({view:S,inBarn:Ie,plots:Ir().map(e=>e?{seed:e.seed,stage:fr(e,Dr()),wet:!!e.wet}:null),basket:Ro(),me:yn(),ridden:[...jh().keys()]});function uL(){if(Ni.kind==="none")return;B7(),qt(R7(Ni.kind,Ni.entries),(t,n)=>{t.closest("#wnGo")&&(z.sparkle(),n())},"whatsNew "+Ni.kind).root.querySelector(".card").insertAdjacentHTML("afterbegin",Zt)}setTimeout(uL,500);window.__whatsnew=Ni;window.__hood=()=>w;window.__hood_url=()=>mr();window.__ui=()=>({view:S,currentHouseId:ze,mode:w?"hood":"solo",play:Te.mode()});dM({hood:()=>w,view:()=>S,solo:()=>At,myPres:we,setPres:Jt,toast:Z,refreshNear:Gs,sfx:z,goMap:gi,soloLook:()=>{const e=K.get();return{look:Lo(e.characters[0]??{}),dog:e.dog??null}}});function Jh(e){const t=new Set;for(const n of Object.values(e.rooms))for(const s of n.items)t.add(s.kind);for(const n of e.characters)n.held.left&&t.add(n.held.left.kind),n.held.right&&t.add(n.held.right.kind);return e.baby&&t.add("baby"),[...t]}let oa=null,_d=()=>!1;function e0(e){return oa||(oa=f(()=>Promise.resolve().then(()=>Cc),void 0).then(t=>(_d=t.hasArt,t.boot(location.search,Jh(C.get())))).then(t=>{for(let n=0;n<t.length;n++)if(Me[t[n]]){Vs();break}uh()}),oa)}function mL(e){const t=new Set(e),n=C.get();let s=!1;for(const i of n.rooms[n.currentRoom].items){const o=Me[i.kind];if(!t.has(i.kind)||!o)continue;const a=se.querySelector(`.item[data-id="${i.id}"] .inner`);!a||a.querySelector("img.artimg")||(a.innerHTML=hn(o,!0),s=!0)}s&&(Tt.forEach(i=>{delete i.dataset.held}),Xt(n),uh())}function yL(){return f(()=>Promise.resolve().then(()=>Cc),void 0).then(e=>e.boot(location.search,Jh(C.get()))).then(e=>{mL(e.filter(t=>!!Me[t]))})}I5();Vx();Nx(e=>e==="backyard"?M5():null);M("scenery").addEventListener("click",e=>{const t=e.target.closest("[data-yard-go]");t&&td(t.dataset.yardGo==="backyard"?"backyard":"living")});const wL=Z7(M("skyMount"));window.__sky=wL;Sr=B1({layer:se,stageWrap:M("stageWrap"),get:()=>C.get(),dispatch:e=>C.dispatch(e),clock:()=>w&&De!==K?w.now():Date.now(),canSend:()=>!w||De===K||!!w.speaksBaby,owner:()=>Jg(),inHouse:()=>S==="house",play:()=>Te.isPlay(),editable:()=>It(),toRoom:Rt,box:e=>{const t=Me[e.kind];return t?{id:e.id,kind:e.kind,x:e.x,footY:Fs(t,e.y),flip:!!e.flip,scale:Ge(e),w:t.w,h:ct(t),z:e.z}:null},holderId:()=>w&&De!==K&&w.pid?w.pid:Pe||C.get().characters[0]?.id||"c1",holderSpot:e=>{const t=C.get(),n=w&&De!==K&&w.pid?w.pid:Pe||t.characters[0]?.id||"",s=e||n,i=(a,r,l,c,p,d)=>{const g=c?.pose==="sit"||c?.pose==="lie"?c.pose:null,h=g==="lie"?t.rooms[t.currentRoom]?.items.find(b=>b.id===c?.item):void 0,m=p&&/^#[0-9a-fA-F]{6}$/.test(p)?p:"#f1c27d";return{x:a.x,y:a.y,flip:r,scale:l>0?l:1,pose:g,lieFlip:!!(g==="lie"&&h?.flip),skin:m,chibi:!!d}},o=t.characters.find(a=>a.id===s&&a.room===t.currentRoom);if(o){const a=Mt(o);return i($t(t.currentRoom,a,o),o.flip,Is[o.size]??1,a,o.look2&&o.look2.skin||o.skin,!!o.look2)}if(w&&S==="house"){const a=s===w.pid?we():w.presence.get(s);if(a&&a.where==="house"&&a.houseId===ze&&a.room===t.currentRoom){const r=Tn(s,a),l=w.players.get(s)?.look,c=l?.size??"kid";return i($t(t.currentRoom,r,a),a.flip,Is[c]??1,r,l?.look2&&l.look2.skin||l?.skin||"#f1c27d",!!l?.look2)}}return null},holderHere:e=>{if(!e)return!1;if(C.get().characters.some(s=>s.id===e))return!0;if(!w||De===K)return!1;const n=e===w.pid?we():w.presence.get(e);return!!(n&&n.where==="house"&&n.houseId===ze)},occupied:()=>bo(void 0,w?.pid,!0),locked:()=>Bn(null),seatAt:(e,t,n)=>$t(e,t,n)}).render;Qg=()=>Sr();Vs();Dt();rs();bL();rs();Or();Xg();fa();Li.matches?ns():rs();requestAnimationFrame(()=>{rs(),Or(),Yc()});function bL(){if(!Nc)return;const e=Rl(),t=C.get().characters[0];if(!t)return;const n=e==="door";if(C.dispatch({type:"char/update",id:t.id,patch:{...Q$(),flip:n?Il.flip:Dl.flip}}),C.dispatch({type:"cat/set",cat:{name:"Clover",coat:3,room:n?"living":"backyard",x:n?Aa:jn.x}}),C.dispatch({type:"dog/set",dog:{name:"Sunny",breed:3,owner:t.id}}),!C.get().rooms.backyard.items.some(s=>s.kind==="yard-swing"))for(const s of q$)C.dispatch({type:"item/add",room:"backyard",item:{id:"yp-"+s.kind,kind:s.kind,x:s.x,y:s.y,flip:!1,z:1,scale:s.scale??1}});if(e!=="sheet"){const s=n?Il:Dl;C.dispatch({type:"char/move",id:t.id,room:n?"living":"backyard",x:s.x,y:s.y}),C.dispatch({type:"room/switch",room:n?"living":"backyard"})}window.__pinCat=n?{x:Aa}:{x:jn.x,y:jn.y},e==="play"?M("modePlay").click():(e==="decorate"||e==="door")&&M("modeDecorate").click(),e==="sheet"&&document.body.insertAdjacentHTML("beforeend",S5()),e==="compare"&&document.body.insertAdjacentHTML("beforeend",P5()),document.body.dataset.yard="ready"}function vL(e){const t=C.get(),n=e==="backyard"?Dl:Il;Bt=null;const s=t.characters.find(i=>i.id===Pe&&i.room===t.currentRoom)??t.characters.find(i=>i.room===t.currentRoom);if(s&&(C.dispatch({type:"char/update",id:s.id,patch:{flip:n.flip}}),C.dispatch({type:"char/move",id:s.id,room:e,x:n.x,y:n.y})),Nc&&t.cat&&(C.dispatch({type:"cat/move",room:e,x:e==="backyard"?jn.x:Aa}),window.__pinCat=e==="backyard"?{x:jn.x,y:jn.y}:{x:Aa}),C.dispatch({type:"room/switch",room:e}),w&&De!==K){const i=we();i&&i.where==="house"&&je({...i,room:e,x:n.x,y:n.y,flip:n.flip})}requestAnimationFrame(()=>Or())}function Or(){if(C.get().currentRoom==="backyard"){Fe(Al),Nn();return}if(!Nc||Rl()==="sheet"||Rl()==="compare")return;const e=C.get().characters.find(t=>t.room===C.get().currentRoom);e&&Fe(e.x-re/2),Nn()}function Nn(){if(Ws||F.getBoundingClientRect().width<20)return;const t=yt()||parseFloat(F.style.getPropertyValue("--yard-sc"))||1;F.style.setProperty("--yard-sc",String(t));const n=[...F.querySelectorAll(".yardDoor")];for(const m of n){m.style.minWidth="",m.style.transform="";const b=m.querySelector(".yardHintLabel");if(!b)continue;b.style.transform="",b.style.translate="";const _=b.querySelector("span");_&&(_.style.transform="");const y=Math.max(13,16/t);b.style.fontSize=y+"px",b.style.lineHeight="1";const u=38/t;b.style.height=u+"px";const k=3/t,x=Math.max(0,(u-k*2-y)/2);b.style.padding=`${x.toFixed(2)}px ${(14/t).toFixed(2)}px`}const s=n[0];if(!s)return;const i=s.querySelector(".doorArt"),o=s.querySelector(".yardHintLabel"),a=6,r=()=>{const m=F.getBoundingClientRect(),b=s.getBoundingClientRect(),_=i?.getBoundingClientRect(),y=o?.getBoundingClientRect(),u=[b,_,y].filter(I=>!!I&&I.width>2&&I.height>2),k=Math.min(...u.map(I=>I.top)),x=Math.max(...u.map(I=>I.bottom));let R=m.left+a,H=m.right-a;for(const I of["nudgeL","nudgeR"]){const X=M(I);if(!X||X.classList.contains("off")||X.offsetParent===null)continue;const le=X.getBoundingClientRect();if(le.width<2||le.height<2)continue;const ce=pe=>pe.top<le.bottom-1&&pe.bottom>le.top+1,G=[b,_].some(pe=>pe&&pe.width>2&&ce(pe));!G&&(k>=le.bottom-1||x<=le.top+1)||(I==="nudgeL"&&G?R=Math.max(R,le.right+8):I==="nudgeR"&&G&&(H=Math.min(H,le.left-8)))}return{leftLimit:R,rightLimit:H,doorR:b,artR:_,hintR:y}};let l=0,c=0;for(;l++<4;){const{leftLimit:m,rightLimit:b,doorR:_,artR:y}=r();let u=0;const k=Math.min(_.left,y&&y.width>2?y.left:_.left),x=Math.max(_.right,y&&y.width>2?y.right:_.right);if(k<m&&(u+=m-k),x+u>b&&(u-=x+u-b),Math.abs(u)<.5)break;c+=u,s.style.transform=`translate(${(c/t).toFixed(1)}px, 0)`}if(!o){Np(s);return}const p=o.querySelector("span");if(p){const m=document.createRange();m.selectNodeContents(p);const b=m.getBoundingClientRect(),_=o.getBoundingClientRect(),y=(_.top+_.bottom-(b.top+b.bottom))/2,u=p;b.height>2&&Math.abs(y)>=.1?u.style.transform=`translateY(${(y/t).toFixed(2)}px)`:u.style.transform=""}const d=o.getBoundingClientRect(),g=F.getBoundingClientRect();let h=0;if(C.get().currentRoom==="backyard"&&i){const m=i.getBoundingClientRect();m.width>2&&(h+=(m.left+m.right)/2-(d.left+d.right)/2)}d.left+h<g.left+a?h+=g.left+a-(d.left+h):d.right+h>g.right-a&&(h-=d.right+h-(g.right-a)),Math.abs(h)>.5?o.style.translate=`calc(-50% + ${(h/t).toFixed(1)}px) 0`:o.style.translate="",Np(s)}e0(C.get().currentRoom);const t0=()=>{const e=kr().size,t=Ra.length,n=M("secrets"),s=n.querySelector(".secCount");s&&(s.textContent=`${e}/${t}`),n.setAttribute("aria-label",`Surprises, ${e} of ${t}`),Fg()};function Wr(){return window.innerHeight>window.innerWidth+40}function n0(e,t){for(const G of e)G.style.transform="";if(!Wr()||!e.length)return;const n=t&&t.clientWidth>20?t.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth};if(n.width<20)return;const s=8,i=Math.max(n.left,0)+s,o=Math.min(n.right,window.innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,window.innerHeight)-s,l=Math.max(40,o-i),c=Math.max(40,r-a),d=e.map(G=>G.getBoundingClientRect()).filter(G=>G.width>2&&G.height>2);if(!d.length)return;const g=Math.min(...d.map(G=>G.left)),h=Math.max(...d.map(G=>G.right)),m=Math.min(...d.map(G=>G.top)),b=Math.max(...d.map(G=>G.bottom)),_=Math.max(1,h-g),y=Math.max(1,b-m),u=Math.min(1,l/_,c/y);if(u>.995&&g>=i-1&&h<=o+1&&m>=a-1&&b<=r+1)return;const x=e[0].getScreenCTM(),R=x&&Math.hypot(x.a,x.b)||1,H=(g+h)/2,I=(m+b)/2,X=y*u,le=(i+o)/2,ce=m>=a&&b<=r?I:Math.min(Math.max(I,a+X/2),r-X/2);for(const G of e){const pe=G.getBoundingClientRect(),sn=(pe.left+pe.right)/2,Ht=(pe.top+pe.bottom)/2,qe=le+(sn-H)*u,P=ce+(Ht-I)*u;G.style.transformBox="fill-box",G.style.transformOrigin="center",G.style.transform=`translate(${((qe-sn)/R).toFixed(2)}px, ${((P-Ht)/R).toFixed(2)}px) scale(${u.toFixed(3)})`}}function s0(){if(S!=="gameroom")return;const e=document.getElementById("grScroll");n0([...document.querySelectorAll(".neonSignArt")],e)}function dc(){S!=="ranch"||Ie||(document.querySelectorAll(".ranchSignArt").forEach(e=>{e.style.transform=""}),it(),i0(),$d())}function $d(){if(S!=="ranch"||Ie)return;const e=document.getElementById("ranchScroll");if(!e)return;const t=e.getBoundingClientRect();document.querySelectorAll(".ranchSignArt").forEach(n=>{const s=n.getBoundingClientRect(),i=Math.min(t.right,innerWidth),o=Math.max(0,t.left-s.left)+Math.max(0,s.right-i);n.style.visibility=s.width>20&&o<8?"visible":"hidden"})}M("ranchScroll").addEventListener("scroll",()=>{S==="ranch"&&!Ie&&$d()},{passive:!0});function i0(){const e=document.querySelector(".doorHint"),t=document.getElementById("ranchScroll");if(!e||!t)return;e.style.transform="translateX(-50%)";const n=t.getBoundingClientRect(),s=8,i=Math.max(n.left,0)+s,o=Math.min(n.right,innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,innerHeight)-s,l=e.getBoundingClientRect();let c=0;l.right>o&&(c-=l.right-o),l.left+c<i&&(c+=i-(l.left+c));let p=0;const d=t.querySelector(".savatar");if(d){const g=d.getBoundingClientRect(),m=d.querySelector(".nametag")?.getBoundingClientRect(),b=!!(m&&m.width>4&&m.height>4),_=b?Math.min(g.top,m.top):g.top,y=b?Math.min(g.left,m.left):g.left,u=b?Math.max(g.right,m.right):g.right,k=l.left+c;l.right+c>y-6&&k<u+6&&l.bottom+p>_-6&&l.top<g.top+g.height*.72&&(p+=_-48-(l.bottom+p))}if(l.top+p<a&&(p+=a-(l.top+p)),document.body.classList.contains("phone-portrait")){const g=document.querySelector(".ranchSign .ranchSignArt");if(g){const h=g.getBoundingClientRect(),m=l.left+c,b=l.right+c,_=l.top+p,y=l.bottom+p;if(h.width>20&&h.height>h.width*.7&&b>h.left+4&&m<h.right-4&&y>h.top+4&&_<h.bottom-4){let k=h.top-16-y;_+k<a&&(k+=a-(_+k));const R=d?.querySelector(".nametag")?.getBoundingClientRect(),H=y+k;!(R&&R.width>4&&R.height>4&&H>R.top-12&&b>R.left-6&&m<R.right+6)&&H<=r&&(p+=k)}}}(c||p)&&(e.style.transform=`translate(calc(-50% + ${c.toFixed(1)}px), ${p.toFixed(1)}px)`)}const o0=G1({world:Vg,roomW:_e,roomH:Ue,currentRoom:()=>C.get().currentRoom,sparkle:()=>z.sparkle(),tap:()=>z.click(),onFound:(e,t)=>{if(t0(),t){const n=M("secrets");n.classList.remove("pulse"),n.offsetWidth,n.classList.add("pulse"),setTimeout(()=>Z("🎁 A secret surprise appeared in your drawer!"),1400),Dt()}}});C.subscribe((e,t)=>{(t.type==="room/switch"||t.type==="game/reset")&&o0.update()});t0();window.__eggs=()=>({found:[...kr()]});k9();
