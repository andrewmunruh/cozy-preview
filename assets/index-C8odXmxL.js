(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const zh="modulepreload",Sh=function(e){return"/cozy-preview/"+e},id={},p=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(n.map(l=>{if(l=Sh(l),l in id)return;id[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":zh,c||(f.as="script"),f.crossOrigin="",f.href=l,r&&f.setAttribute("nonce",r),document.head.appendChild(f),c)return new Promise((g,h)=>{f.addEventListener("load",g),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return o.then(a=>{for(const r of a||[])r.status==="rejected"&&i(r.reason);return t().catch(i)})},Ko="#5a3d5c",Y=(e=4)=>`stroke="${Ko}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,Sr=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],Mn=1e3,Ln=700,Pr="M 30 660 C 150 640, 200 540, 330 545 S 540 650, 690 600 S 925 470, 850 375 S 640 330, 520 355 S 270 385, 250 285 S 330 145, 480 150 S 700 200, 790 150",Bn={x:115,y:170},sn={x:880,y:120},on={x:600,y:480},Rn={x:400,y:260},Ip=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="22" rx="20" ry="6" fill="#000" opacity=".1"/><rect x="-5" y="2" width="10" height="20" rx="4" fill="#c99366" ${Y(3)}/><circle cx="0" cy="-10" r="20" fill="${s}" ${Y(3)}/><circle cx="-12" cy="-2" r="12" fill="${s}" ${Y(3)}/><circle cx="12" cy="-3" r="13" fill="${s}" ${Y(3)}/><circle cx="-5" cy="-16" r="5" fill="#fff" opacity=".35"/></g>`,ls=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})" fill="#fff"><ellipse cx="0" cy="10" rx="46" ry="22"/><ellipse cx="-36" cy="16" rx="28" ry="16"/><ellipse cx="38" cy="14" rx="30" ry="18"/><ellipse cx="10" cy="2" rx="24" ry="18"/></g>`,Vo=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">${[0,72,144,216,288].map(o=>`<circle cx="${(Math.cos(o*Math.PI/180)*8).toFixed(1)}" cy="${(Math.sin(o*Math.PI/180)*8).toFixed(1)}" r="6.5" fill="${n}" ${Y(2)}/>`).join("")}<circle r="4.5" fill="#ffd43b" ${Y(2)}/></g>`,An=(e,t,n)=>`<g transform="translate(${e} ${t})">${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*4}" cy="${Math.sin(s*Math.PI/180)*4}" r="3.6" fill="${n}"/>`).join("")}<circle r="2.6" fill="#ffd43b"/></g>`;function Ph(){return`<svg class="mapBg" viewBox="0 0 ${Mn} ${Ln}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${Mn}" height="${Ln}" rx="34" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="160" cy="420" rx="150" ry="90"/><ellipse cx="760" cy="250" rx="170" ry="70"/><ellipse cx="480" cy="640" rx="140" ry="50"/><ellipse cx="930" cy="600" rx="90" ry="110"/></g>
  <g fill="#93d78e" opacity=".7"><ellipse cx="420" cy="260" rx="70" ry="30"/><ellipse cx="80" cy="560" rx="60" ry="26"/><ellipse cx="700" cy="420" rx="50" ry="22"/></g>
  <!-- pond -->
  <ellipse cx="120" cy="470" rx="72" ry="40" fill="#8ecae6" ${Y()}/><ellipse cx="108" cy="462" rx="42" ry="16" fill="#bde6f7"/><path d="M150 480 q8 -6 16 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <!-- side paths to the park and the ranch -->
  <path d="M250 285 Q190 250 150 215" fill="none" stroke="${Ko}" stroke-width="30" stroke-linecap="round"/><path d="M250 285 Q190 250 150 215" fill="none" stroke="#f2dcb8" stroke-width="22" stroke-linecap="round"/>
  <!-- the street -->
  <path d="${Pr}" fill="none" stroke="${Ko}" stroke-width="58" stroke-linecap="round"/>
  <path id="mapRoad" d="${Pr}" fill="none" stroke="#f2dcb8" stroke-width="48" stroke-linecap="round"/>
  <path d="${Pr}" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="18 16" stroke-linecap="round" opacity=".9"/>
  <!-- town square -->
  <g transform="translate(${on.x} ${on.y})"><circle r="74" fill="#f7e6c8" ${Y()}/><circle r="74" fill="none" stroke="#e6cfa6" stroke-width="10" stroke-dasharray="10 12" transform="scale(.82)"/>
    <circle r="30" fill="#bde6f7" ${Y()}/><circle r="13" fill="#fff6e6" ${Y(3)}/><path d="M0 -13 Q-8 -32 -16 -20 M0 -13 Q8 -32 16 -20 M0 -13 V-34" fill="none" stroke="#74c0fc" stroke-width="4" stroke-linecap="round"/>
    ${An(-52,-40,"#ff8fab")}${An(54,-38,"#b197fc")}${An(-56,40,"#ffd43b")}${An(52,44,"#ff8fab")}</g>
  ${[[60,330,"#ff8fab"],[300,470,"#b197fc"],[430,560,"#ffd43b"],[760,520,"#ff8fab"],[950,260,"#b197fc"],[600,260,"#ffd43b"],[380,90,"#ff8fab"],[40,120,"#b197fc"],[960,420,"#ffd43b"],[840,640,"#b197fc"],[210,620,"#ff8fab"]].map(([e,t,n])=>An(+e,+t,String(n))+An(+e+14,+t+8,String(n))).join("")}
  </svg>`}function ad(e,t,n=Mn,s=Ln){const o=[];let i=7;const a=()=>(i=(i*9301+49297)%233280)/233280;for(let r=0;r<260&&o.length<34;r++){const l=30+a()*(n-60),c=40+a()*(s-70);t(l,c)||e.some(d=>Math.hypot(d.x-l,d.y-c)<d.r)||(e.push({x:l,y:c,r:46}),o.push(Ip(l,c,.75+a()*.45,["#5cc985","#4fbf7a","#78d39a"][r%3])))}return`<svg class="mapTrees" viewBox="0 0 ${n} ${s}" xmlns="http://www.w3.org/2000/svg">${o.join("")}</svg>`}function Th(e,t){const n=e/2,s=`M ${n} 36 C ${n-36} ${t*.28}, ${n+28} ${t*.48}, ${n-8} ${t*.68} S ${n+18} ${t*.86}, ${n} ${t-28}`;return`<svg class="mapBg" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="${t}" rx="28" fill="#a6e3a0"/>
  <g fill="#b6f0c8"><ellipse cx="${e*.22}" cy="${t*.22}" rx="90" ry="48"/><ellipse cx="${e*.78}" cy="${t*.42}" rx="80" ry="40"/><ellipse cx="${e*.3}" cy="${t*.72}" rx="100" ry="46"/></g>
  <ellipse cx="78" cy="${t*.58}" rx="46" ry="28" fill="#8ecae6" ${Y()}/><ellipse cx="70" cy="${t*.56}" rx="24" ry="10" fill="#bde6f7"/>
  <path d="${s}" fill="none" stroke="${Ko}" stroke-width="44" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#f2dcb8" stroke-width="34" stroke-linecap="round"/>
  <path d="${s}" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="14 12" stroke-linecap="round" opacity=".9"/>
  ${[[40,250,"#ff8fab"],[500,280,"#b197fc"],[70,520,"#ffd43b"],[490,640,"#ff8fab"],[50,860,"#74c0fc"],[500,980,"#ffd43b"]].map(([o,i,a])=>An(+o,+i,String(a))+An(+o+16,+i+10,String(a))).join("")}
  </svg>`}const Bh=(e,t,n=1,s="#4fbf7a")=>`<g transform="translate(${e} ${t}) scale(${n})"><ellipse cx="0" cy="10" rx="28" ry="8" fill="#000" opacity=".08"/><circle cx="-14" cy="-2" r="16" fill="${s}" ${Y(3)}/><circle cx="14" cy="0" r="18" fill="${s}" ${Y(3)}/><circle cx="0" cy="-12" r="14" fill="${s}" ${Y(3)}/><circle cx="-4" cy="-16" r="4" fill="#fff" opacity=".28"/></g>`,Rh=(e,t,n="#ff8fab")=>`<g transform="translate(${e} ${t})"><ellipse cx="-7" cy="-2" rx="8" ry="5" fill="${n}" ${Y(2)} transform="rotate(-24)"/><ellipse cx="7" cy="-2" rx="8" ry="5" fill="${n}" ${Y(2)} transform="rotate(24)"/><ellipse cx="-6" cy="4" rx="6" ry="4" fill="#b197fc" ${Y(1.6)} transform="rotate(18)"/><ellipse cx="6" cy="4" rx="6" ry="4" fill="#b197fc" ${Y(1.6)} transform="rotate(-18)"/><path d="M0 -6 V8" ${Y(2)}/></g>`;function Ah(e,t,n){const s=e/2,o=(f,g,h)=>g>t*.4&&g<t-28&&Math.abs(f-s)>52&&!n.some(m=>Math.hypot(m.x-f,m.y-g)<m.r+h),i=[.07,.15,.22,.78,.85,.93],a=[.46,.54,.62,.7,.78,.86,.93],r=["#ff8fab","#b197fc","#ffd43b","#74c0fc","#69db7c"],l=[];let c=0;a.forEach((f,g)=>{i.forEach((h,m)=>{const b=Math.round(e*h+((g+m)%2?8:-6)),_=Math.round(t*f);if((g+m)%3===0){if(!o(b,_,34))return;l.push(Bh(b,_,.85+m%2*.15,["#4fbf7a","#5cc985","#3dae6a"][(g+m)%3]))}else{if(!o(b,_,18))return;const y=r[(g*2+m)%r.length];l.push(Vo(b,_,y,.85)),(g+m)%2===0&&o(b+18,_+12,14)&&l.push(Vo(b+18,_+12,r[(g+m+2)%r.length],.7))}c++})});const d=[[e*.2,t*.5],[e*.8,t*.66],[e*.18,t*.84]];for(const[f,g]of d)o(f,g,16)&&l.push(Rh(Math.round(f),Math.round(g),c%2?"#ffd43b":"#ff8fab"));return`<svg class="mapMeadowFill" viewBox="0 0 ${e} ${t}" xmlns="http://www.w3.org/2000/svg">${l.join("")}</svg>`}const Dh=`<svg class="mapSkyArt" viewBox="0 0 900 200" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
  ${ls(280,28,1.05)}${ls(430,8,.8)}${ls(560,36,.95)}
  ${ls(250,88,.75)}${ls(390,108,1.05)}${ls(540,96,.85)}${ls(640,78,.7)}
  <g fill="none" stroke-linecap="round">
    ${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M300 ${118+t*6} A70 48 0 0 1 430 ${112+t*6}" stroke="${e}" stroke-width="5"/>`).join("")}
  </g>
</svg>`,Ih=`<svg class="mapMeadowArt" viewBox="0 0 900 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
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
  ${[[48,188,"#ff8fab",.85],[120,176,"#ffd43b",.7],[200,198,"#b197fc",.9],[280,172,"#ff8fab",.75],[360,204,"#74c0fc",.8],[450,178,"#ffd43b",.85],[530,200,"#ff8fab",.75],[620,174,"#b197fc",.8],[700,196,"#69db7c",.7],[790,180,"#ffd43b",.85]].map(([e,t,n,s])=>Vo(+e,+t,String(n),+s)).join("")}
  ${[[80,248,"#ff8fab"],[160,268,"#b197fc"],[250,242,"#ffd43b"],[340,274,"#ff8fab"],[430,250,"#74c0fc"],[520,270,"#b197fc"],[610,246,"#ffd43b"],[700,272,"#ff8fab"],[790,252,"#69db7c"]].map(([e,t,n])=>Vo(+e,+t,String(n),1.05)).join("")}
  ${[[110,304,"#ffd43b"],[230,292,"#ff8fab"],[360,308,"#b197fc"],[490,294,"#74c0fc"],[620,306,"#ff8fab"],[750,296,"#ffd43b"]].map(([e,t,n])=>Vo(+e,+t,String(n),.9)).join("")}
</svg>`,rd=`<svg viewBox="0 0 200 170"><ellipse class="parkLawn" cx="100" cy="100" rx="94" ry="62" fill="#7fd68a" ${Y()}/>
  <ellipse cx="62" cy="120" rx="30" ry="14" fill="#8ecae6" ${Y(3)}/>
  <path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" stroke="#ff6b6b" stroke-width="7" stroke-linecap="round"/><path d="M96 60 L80 120 M96 60 L112 120 M150 60 L134 120 M150 60 L166 120 M92 60 H154" fill="none" ${Y(2)}/>
  <path d="M112 62 V100 M134 62 V100" ${Y(2.5)}/><rect x="104" y="98" width="16" height="7" rx="3" fill="#ffd43b" ${Y(2.5)}/><rect x="126" y="98" width="16" height="7" rx="3" fill="#74c0fc" ${Y(2.5)}/>
  ${Ip(40,66,1)}
  <path d="M150 128 L176 88 H186 L162 132 Z" fill="#b197fc" ${Y(3)}/><path d="M178 88 V132" ${Y(4)}/>
</svg>`,ld=`<svg viewBox="0 0 220 180"><ellipse class="ranchGrass" cx="110" cy="132" rx="104" ry="44" fill="#a6e3a0" ${Y()}/>
  ${Sr.map((e,t)=>`<path d="M${20+t*7} 120 A${90-t*7} ${84-t*7} 0 0 1 ${200-t*7} 120" fill="none" stroke="${e}" stroke-width="7"/>`).join("")}
  <path d="M60 140 V82 L80 58 H140 L160 82 V140 Z" fill="#ef5b5b" ${Y(4)}/>
  <path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${Ko}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  ${Sr.map((e,t)=>`<path d="M56 84 L80 54 H140 L164 84" fill="none" stroke="${e}" stroke-width="1.3" transform="translate(0 ${-3+t*1.2})"/>`).join("")}
  <rect x="88" y="100" width="44" height="40" rx="3" fill="#d94848" ${Y(3)}/><path d="M88 100 L132 140 M132 100 L88 140" stroke="#fff6e6" stroke-width="3"/>
  <rect x="94" y="70" width="32" height="18" rx="4" fill="#fff6e6" ${Y(3)}/>
  <path d="M10 150 H52 M168 150 H212 M14 140 V158 M30 140 V158 M46 140 V158 M174 140 V158 M190 140 V158 M206 140 V158" stroke="#fff6e6" stroke-width="5" stroke-linecap="round"/><path d="M10 150 H52 M168 150 H212" ${Y(1.5)}/>
  <g transform="translate(178 122) scale(.42)"><ellipse cx="0" cy="0" rx="34" ry="18" fill="#fff" ${Y(5)}/><path d="M24 -8 L40 -34 L54 -26 L36 2 Z" fill="#fff" ${Y(5)}/>${Sr.slice(0,4).map((e,t)=>`<path d="M38 ${-34+t*5} q-14 4 -20 14" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round"/>`).join("")}<path d="M-20 14 V34 M20 14 V34" ${Y(6)}/></g>
</svg>`,cd=`<svg viewBox="0 0 190 156">
  <ellipse cx="95" cy="118" rx="88" ry="32" fill="#ffd0e6" ${Y()}/>
  <path d="M28 108 V62 L95 28 L162 62 V108 Z" fill="#fff0f6" ${Y(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="#ff6b9a" ${Y(4)}/>
  <path d="M22 66 L95 22 L168 66" fill="none" stroke="#ffd43b" stroke-width="3" stroke-dasharray="6 5"/>
  <rect x="78" y="78" width="34" height="30" rx="4" fill="#ff8ec8" ${Y(3)}/>
  <path d="M95 86 C90 80 82 82 86 90 C90 96 95 100 95 100 C95 100 100 96 104 90 C108 82 100 80 95 86 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  <rect x="42" y="74" width="22" height="16" rx="3" fill="#66d9e8" ${Y(2)}/><rect x="126" y="74" width="22" height="16" rx="3" fill="#d0bfff" ${Y(2)}/>
  ${[36,52,68,84,100,116,132,148].map((e,t)=>`<circle class="clubBulb" cx="${e}" cy="58" r="3.2" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" ${Y(1.4)}/>`).join("")}
  <circle cx="154" cy="48" r="3" fill="#fff" opacity=".9"/><circle cx="40" cy="44" r="2.4" fill="#fff" opacity=".85"/>
</svg>`,jl=`<svg viewBox="0 0 48 48"><path d="M6 12 L17 8 L31 13 L42 9 V36 L31 40 L17 35 L6 39 Z" fill="#fff3b0" ${Y(3)}/><path d="M17 8 V35 M31 13 V40" ${Y(2.5)}/><path d="M9 30 Q16 22 22 27 T38 18" fill="none" stroke="#ff8fab" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4"/><circle cx="36" cy="18" r="4" fill="#ff6b6b" ${Y(2)}/></svg>`,Gl=e=>e.indexOf("data-chibi")>=0?e.replace('viewBox="0 0 200 320"','viewBox="24 0 152 168"'):e.replace('viewBox="0 0 100 160"','viewBox="14 2 72 74"'),qt=e=>"preview:"+e,Hh=400,Za=["#ffe0c4","#f6d2b5","#f1c27d","#e0ac69","#c9956c","#c68642","#a86b3c","#8d5524","#5c3a1e","#3d2914"],Na=["#2b1d16","#5b3a29","#a0522d","#f4d58d","#ff8fab","#8ecae6","#b388d6","#ff9f43","#1d1416","#c8602a","#7a4b32","#f7f1e8"],Yl=["#5a321c","#3f9b52","#3d7ec4","#c48a3a","#7b4fb8"],Ct=["#ff7aa8","#ffd166","#5aa9e6","#80ed99","#c9a0dc","#ff9f68","#ffffff","#5a3d5c","#ff8f7a","#7ec8c3","#f7f3ee","#f4a3c8","#6b8e4e","#e8d5b5","#ef6b6b","#3d4a6b"],Fa=["short","bob","buns","topbun","pixie","long","wavy","puffs","afro","curlybob","coily","boxbraids","braids","sidebraid","crown","pony","sidepony","pigtails","lowbun","locs","halfup","bangs","sidebangs","wavybob"],ja=["classic","stripes","hoodie","sweater","tank","puff","ruffle","button","jersey","cardigan","bib","raincoat"],Ga=["pants","jeans","shorts","skirt","tutu","leggings","overalls","joggers"],Ya=["","twirl","sundress","party","pinafore","jumper","ballet","nightgown","raindress"],Ka=["classic","sneakers","lightup","boots","rainboots","sandals","maryjanes","slippers"],Xa=["round","big","sleepy","sparkle","soft","bright"],Js=["glasses","square","sunnies","bow","bigbow","headband","flower","cap","beanie","sunhat","catears","earmuffs"],Oh=new Set(Fa),Wh=new Set(ja),Uh=new Set(Ga),Vh=new Set(Ya),Qh=new Set(Ka),qh=new Set(Xa),Zh=new Set(Js),Nh=new Set(["short","pixie","coily","afro","bangs"]),Fh=new Set(["buns","puffs"]),jh=new Set(["topbun","lowbun"]),Gh={hair:"buns",hairC:"#5b3a29",skin:"#f1c27d",eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"pants",bottomC:"#5aa9e6",dress:"",dressC:"#ff7aa8",shoes:"classic",shoesC:"#5a3d5c",accC:"#ffd166"};function Yh(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Qs(e,t){return typeof e=="string"&&t.has(e)}function yn(e,t){if(typeof e!="string")return null;const n=e.trim().toLowerCase();for(let s=0;s<t.length;s++)if(t[s]===n)return t[s];return null}function gi(e){if(!Yh(e))return null;let t=0;try{t=JSON.stringify(e).length}catch{return null}if(t>Hh)return null;const n={v:1};Qs(e.hair,Oh)&&(n.hair=e.hair);const s=yn(e.hairC,Na);s&&(n.hairC=s);const o=yn(e.skin,Za);o&&(n.skin=o),Qs(e.eyes,qh)&&(n.eyes=e.eyes);const i=yn(e.eyeC,Yl);i&&(n.eyeC=i),(e.freckles===!0||e.freckles===!1)&&(n.freckles=e.freckles),(e.blush===!0||e.blush===!1)&&(n.blush=e.blush),Qs(e.top,Wh)&&(n.top=e.top);const a=yn(e.topC,Ct);a&&(n.topC=a),Qs(e.bottom,Uh)&&(n.bottom=e.bottom);const r=yn(e.bottomC,Ct);r&&(n.bottomC=r),Qs(e.dress,Vh)&&(n.dress=e.dress);const l=yn(e.dressC,Ct);l&&(n.dressC=l),Qs(e.shoes,Qh)&&(n.shoes=e.shoes);const c=yn(e.shoesC,Ct);if(c&&(n.shoesC=c),Array.isArray(e.acc)){const f=[];for(let g=0;g<e.acc.length&&f.length<2;g++){const h=e.acc[g];typeof h=="string"&&Zh.has(h)&&f.indexOf(h)<0&&f.push(h)}n.acc=f}const d=yn(e.accC,Ct);return d&&(n.accC=d),n}function Hs(e){const t=Gh,n=e??{};return{v:1,hair:n.hair??t.hair,hairC:n.hairC??t.hairC,skin:n.skin??t.skin,eyes:n.eyes??t.eyes,eyeC:n.eyeC??t.eyeC,freckles:n.freckles??t.freckles,blush:n.blush??t.blush,top:n.top??t.top,topC:n.topC??t.topC,bottom:n.bottom??t.bottom,bottomC:n.bottomC??t.bottomC,dress:n.dress??t.dress,dressC:n.dressC??t.dressC,shoes:n.shoes??t.shoes,shoesC:n.shoesC??t.shoesC,acc:n.acc?n.acc.slice():[],accC:n.accC??t.accC}}function dd(e){const t=/^#([0-9a-f]{6})$/i.exec(e.trim());if(!t){const s=/^#([0-9a-f]{3})$/i.exec(e.trim());return s?[parseInt(s[1][0]+s[1][0],16),parseInt(s[1][1]+s[1][1],16),parseInt(s[1][2]+s[1][2],16)]:null}const n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function Mi(e,t){const n=yn(e,t);if(n)return n;const s=dd(e);if(!s)return t[0];let o=t[0],i=1e12;for(let a=0;a<t.length;a++){const r=dd(t[a]);if(!r)continue;const l=(s[0]-r[0])*(s[0]-r[0])+(s[1]-r[1])*(s[1]-r[1])+(s[2]-r[2])*(s[2]-r[2]);l<i&&(i=l,o=t[a])}return o}function Kh(e){return Nh.has(e)?0:Fh.has(e)?2:jh.has(e)?3:1}function Xh(e){for(let t=0;t<e.length;t++){const n=e[t];if(n==="glasses"||n==="square"||n==="sunnies")return 2}for(let t=0;t<e.length;t++){const n=e[t];if(n==="cap"||n==="beanie"||n==="sunhat")return 3}for(let t=0;t<e.length;t++){const n=e[t];if(n==="bow"||n==="bigbow")return 1}return 0}function Ja(e){const t=Hs(e),n=t.dress!=="";return{skin:t.skin,hair:t.hairC,hairStyle:Kh(t.hair),shirt:n?t.dressC:t.topC,pants:n?t.dressC:t.bottomC,acc:Xh(t.acc)}}const Jh=["short","bob","buns","topbun"];function da(e){const t=typeof e.hairStyle=="number"&&e.hairStyle>=0&&e.hairStyle<=3?Math.round(e.hairStyle):0,n=e.acc===1?["bow"]:e.acc===2?["glasses"]:e.acc===3?["cap"]:[],s=Mi(String(e.shirt??""),Ct);return{v:1,hair:Jh[t],hairC:Mi(String(e.hair??""),Na),skin:Mi(String(e.skin??""),Za),eyes:"round",eyeC:"#5a321c",freckles:!1,blush:!0,top:"classic",topC:s,bottom:"pants",bottomC:Mi(String(e.pants??""),Ct),dress:"",dressC:s,shoes:"classic",shoesC:"#5a3d5c",acc:n,accC:"#ffd166"}}function Xo(e){const t=gi(e)??{},n=Hs(t);return{...Ja(n),look2:n}}const e0=new Set(["glasses","square","sunnies"]),t0=new Set(["bow","bigbow","flower","headband"]),n0=new Set(["cap","beanie","sunhat","catears","earmuffs"]);function pa(e){return e0.has(e)?"face":t0.has(e)?"bow":n0.has(e)?"hat":"other"}function Ge(e,t){return t[Math.floor(e()*t.length)]}function er(e=Math.random){const t=e()<.38,n=e();let s=[];if(n<.22)s=[];else if(n<.68)s=[Ge(e,Js)];else{const o=Ge(e,Js),i=Js.filter(a=>pa(a)!==pa(o));s=[o,Ge(e,i)]}return{v:1,hair:Ge(e,Fa),hairC:Ge(e,Na),skin:Ge(e,Za),eyes:Ge(e,Xa),eyeC:Ge(e,Yl),freckles:e()<.4,blush:e()<.85,top:Ge(e,ja),topC:Ge(e,Ct),bottom:Ge(e,Ga),bottomC:Ge(e,Ct),dress:t?Ge(e,Ya.filter(o=>o!=="")):"",dressC:Ge(e,Ct),shoes:Ge(e,Ka),shoesC:Ge(e,Ct),acc:s,accC:Ge(e,Ct)}}function s0(e,t=Math.random){const n=e.characters[0];if(!n)return e;const s=er(t),o=Ja(s),i=e.characters.slice();return i[0]={...n,...o,look2:s},{...e,characters:i}}function o0(e){return[e.skin,e.hair,e.hairStyle,e.shirt,e.pants,e.acc,e.look2?JSON.stringify(e.look2):""].join("|")}const hi=3600,xs=470,En=590,ys=["goat","sheep","piglet","chicks","bunny","cow"],i0=[1085,1215,1345,1470,1600,1735],a0=520,Kl=1900,Xl=[600,800,1e3,1200,1400,1600],tl=435,r0=["Chestnut","Snowy","Midnight","Sunny","Rainbow"],Hp=[2470,2600,2730,2860,2990],Ms=540,l0=["pet","carrot","apple","hay"],nl=6,c0=e=>3175+e*68,d0=8e4,sl=20,p0=1500,Op=["egg","carrot","flower"],f0={egg:"ranch-egg",carrot:"ranch-carrot",flower:"ranch-bouquet"},g0=()=>({egg:0,carrot:0,flower:0}),h0=(e,t,n)=>Number.isInteger(e)&&e>=t&&e<=n?e:null;function Jl(e){const t=g0();if(!e||typeof e!="object")return t;for(const n of Op)t[n]=h0(e[n],0,sl)??0;return t}function ec(e){const t=Array(nl).fill(null);if(Array.isArray(e))for(let n=0;n<nl;n++){const s=e[n];if(!s||s.seed!=="carrot"&&s.seed!=="flower")continue;const o=Number(s.at),i=Number(s.wet);Number.isFinite(o)&&Number.isFinite(i)&&(t[n]={seed:s.seed,at:o,wet:i})}return t}function tr(e,t){if(!e||!e.wet)return 0;const n=(t-e.wet)/d0;return n>=1?3:n>=.4?2:1}function ol(e,t,n,s,o=0){const i=e.slice(),a={...t};switch(n.op){case"plant":return i[n.i]?"taken":(i[n.i]={seed:n.seed,at:s,wet:0},{plots:i,basket:a,garden:!0});case"water":{const r=i[n.i];return r?r.wet?"wet":(i[n.i]={...r,wet:s},{plots:i,basket:a,garden:!0}):"empty"}case"pick":{const r=i[n.i];return r?tr(r,s)<3?"notReady":a[r.seed]>=sl?"full":(a[r.seed]++,i[n.i]=null,{plots:i,basket:a,garden:!0,got:r.seed}):"empty"}case"egg":return s-o<p0?"slow":a.egg>=sl?"full":(a.egg++,{plots:i,basket:a,garden:!1,got:"egg"});case"use":return a.carrot<=0?"none":(a.carrot--,{plots:i,basket:a,garden:!1});case"take":return a[n.kind]<=0?"none":(a[n.kind]--,{plots:i,basket:a,garden:!1})}}const In=80,u0=30*24*60*60*1e3,m0=5,Wp=6,zn=["#ffd6e8","#fff3b0","#d8f5e8","#e6d6ff","#d6efff"],y0=/^m[A-Za-z0-9]{4,40}$/,w0=/^[A-Za-z0-9:_\/.-]{1,80}$/;function Tr(e,t=Date.now()){const n=Math.floor((t-e)/864e5);return n<=0?"today":n===1?"yesterday":n<7?"a few days ago":"a while ago"}function b0(e,t=Date.now()){const n=e?.letters;if(!Array.isArray(n))return null;const s=[];for(const i of n.slice(-30*2)){if(!i||typeof i!="object")continue;const a=i;if(typeof a.id!="string"||!y0.test(a.id)||typeof a.from!="string")continue;const r=a.from.normalize("NFC").replace(/\s+/g," ").trim();if(!r||r.length>24||typeof a.fromPid!="string"||!w0.test(a.fromPid)||typeof a.text!="string"||a.text.length>In||typeof a.at!="number"||!Number.isFinite(a.at)||t-a.at>u0||a.at>t+864e5||!Number.isInteger(a.color)||a.color<0||a.color>=m0||!Number.isInteger(a.sticker)||a.sticker<0||a.sticker>=Wp)continue;const l=a.text.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(l.length>In)continue;const c={id:a.id,from:r,fromPid:a.fromPid,text:l,color:a.color,sticker:a.sticker,at:a.at};a.read===!0&&(c.read=!0),s.push(c)}const o=s.slice(-30);return o.length?{letters:o}:null}function tc(e){return e?.letters.filter(t=>!t.read&&t.text).length??0}const v0=/^[A-Za-z0-9:_\/.-]{1,80}$/,Up=/crib|bassinet|high-?chair|cat-bed|pet-bed|dog-bed|kennel|tulip|flower|toadstool|mobile/,Br={bed:{head:{x:.24,y:.42},pillow:{x:.1,y:.27,w:.22,h:.18},mattress:{x:.36,y:.34,w:.36,h:.16},clip:"starter"},"wooden-bed":{head:{x:.22,y:.53},pillow:{x:.12,y:.36,w:.24,h:.18},mattress:{x:.38,y:.46,w:.32,h:.16},clip:"wooden"},"checker-bed":{head:{x:.16,y:.45},pillow:{x:.08,y:.26,w:.22,h:.22},mattress:{x:.38,y:.4,w:.32,h:.16},clip:"checker"},"bunk-bed":{head:{x:.11,y:.62},pillow:{x:.05,y:.52,w:.18,h:.14},mattress:{x:.22,y:.56,w:.36,h:.14},clip:"bunk"},"canopy-bed":{head:{x:.38,y:.52},pillow:{x:.28,y:.46,w:.24,h:.14},mattress:{x:.48,y:.48,w:.28,h:.16},clip:"canopy"},"cc-heart-bed":{head:{x:.22,y:.67},pillow:{x:.12,y:.58,w:.26,h:.16},mattress:{x:.36,y:.64,w:.36,h:.16},clip:"heart"},"cc-canopy-daybed":{head:{x:.37,y:.58},pillow:{x:.26,y:.5,w:.26,h:.16},mattress:{x:.48,y:.54,w:.3,h:.16},clip:"daybed"},"wc-plaid-bed":{head:{x:.24,y:.26},pillow:{x:.08,y:.14,w:.3,h:.2},mattress:{x:.36,y:.18,w:.3,h:.18},clip:"wooden"}},k0=["bed","pack:wooden-bed","pack:checker-bed","pack:bunk-bed","pack:canopy-bed","pack:cc-heart-bed","pack:cc-canopy-daybed","pack:wc-plaid-bed"];function Vp(e){return e==="bed"||/bunk/.test(e)||/daybed/.test(e)?!0:/(^|[-_:])bed$/.test(e)}function _0(){return k0.slice()}function nr(e){const t=String(e||"").toLowerCase();if(!t||Up.test(t)||!Vp(t))return null;const n=t.replace(/^pack:/,"");return Br[n]||Br[t]||Br.bed}const $0={head:{x:55.0733,y:59.7445},chest:{x:60,y:114},hip:{x:60,y:138},classic:{x:60,y:52.8}},pd=48,fd=138.24;function Qp(e,t){const n=-90*Math.PI/180,s=Math.cos(n),o=Math.sin(n),i=e-pd,a=t-fd,r=pd+s*i-o*a,l=fd+o*i+s*a;return{x:r-60,y:l-192}}function fa(e,t){const n=$0[e],s=Qp(n.x,n.y);return{x:t?-s.x:s.x,y:s.y}}const gd=120,Rr=192,x0=.26;function M0(e,t,n,s,o=1){const i=o>0?o:1;if(n==="lie"&&s){const r=-t*i+210.24,l=-e*i+186.24;return{x:-gd*i/2+r,y:-Rr*i+l}}if(n==="lie"){const r=Qp(e,t);return{x:r.x*i,y:r.y*i}}const a=n==="sit"?x0*Rr*i:0;return{x:(e-gd/2)*i,y:(t-Rr)*i+a}}function L0(e,t,n,s,o){const i=nr(e);if(!i||t<1||n<1)return null;const a=fa("head",!1),r=(i.head.x-.5)*t-a.x,l=(i.head.y-1)*n-a.y,c=fa(s,o);return{x:.5+((o?-r:r)+c.x)/t,y:1+(l+c.y)/n}}function go(e){const t=String(e||"").toLowerCase();return!t||Up.test(t)?null:Vp(t)?{pose:"lie",spots:[{dx:0,dy:0}]}:/sofa|couch|loveseat/.test(t)?{pose:"sit",spots:[{dx:-.18,dy:-.33},{dx:.18,dy:-.33}]}:/armchair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/bench|window-seat/.test(t)?{pose:"sit",spots:[{dx:-.22,dy:-.3},{dx:.22,dy:-.3}]}:/ottoman/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.32}]}:/stool|rocker/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.38}]}:/chair/.test(t)?{pose:"sit",spots:[{dx:0,dy:-.48}]}:null}function qp(e){const t=go(e.kind);if(!t)return[];const n=e.scale||1,s=t.pose==="lie"?nr(e.kind):null;if(s){const o=e.w*n,i=e.h*n,a=fa("head",!1),r=(s.head.x-.5)*o-a.x,l=(s.head.y-1)*i-a.y;return[{x:e.x+(e.flip?-r:r),y:e.footY+l,pose:"lie",n:0}]}return t.spots.map((o,i)=>{const a=o.dx*e.w*n,r=o.dy*e.h*n,l=i===1?1:0;return{x:e.x+(e.flip?-a:a),y:e.footY+r,pose:t.pose,n:l}})}function Jo(e){const t=(r,l)=>({x:r,y:l,seat:null,toast:null,moved:!0});if(e.mode!=="play")return t(e.releaseX,e.releaseY);const n=e.piece;if(!n)return e.via==="drag"?t(e.releaseX,e.releaseY):{x:e.releaseX,y:e.releaseY,seat:null,toast:null,moved:!1};if(e.via==="tap"&&e.alreadyOn===n.id)return t(n.x,n.footY);const s=new Set(e.occupied.filter(r=>r.item===n.id).map(r=>r.n)),o=qp(n).filter(r=>!s.has(r.n));if(!o.length)return e.via==="tap"?{x:e.releaseX,y:e.releaseY,seat:null,toast:"Someone is already there!",moved:!1}:t(e.releaseX,e.releaseY);let i=o[0],a=1/0;for(const r of o){const l=(r.x-e.releaseX)**2+(r.y-e.releaseY)**2;l<a&&(i=r,a=l)}return{x:i.x,y:i.y,seat:{item:n.id,pose:i.pose,n:i.n},toast:null,moved:!0}}const E0={sofa:260,armchair:150,bed:300,chair:100,stool:90,rocker:190,"yard-bench":140,"bar-stool":52.8,"bunk-bed":294,"canopy-bed":294,"cc-bubble-chair":142,"cc-canopy-daybed":276,"cc-dryer-chair":164,"cc-heart-bed":236,"cc-mani-chair":188,"cc-mushroom-stool":112,"cc-scallop-loveseat":248,"checker-bed":196,"cloud-sofa":212,"comfy-armchair":161.7,"cream-sofa":234.6,"egg-chair":126,"fancy-sofa":234.6,"gaming-chair":101.4,"lattice-bench":147,"puffy-stool":46.9,"rocking-chair":137.2,"salon-chair":111.8,"swivel-stool":46.2,"waiting-bench":166.6,"wash-chair":186.2,"wood-armchair":127.4,"wood-stool":46.2,"wooden-bed":235.2};function ga(e){const t=String(e||"").toLowerCase().replace(/^pack:/,"");return E0[t]??320}const ui=540;function nc(e,t,n,s=2400){const o=Math.max(0,t)/2+70,i=40;let a=n<e-8?-1:1,r=e+a*o;return(r<i||r>s-i)&&(a=-a,r=e+a*o),r<i&&(r=i),r>s-i&&(r=s-i),{x:r,y:ui}}function sc(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.item!="string"||!v0.test(t.item)||t.pose!=="sit"&&t.pose!=="lie"||t.n!==0&&t.n!==1?null:{item:t.item,pose:t.pose,n:t.n}}function il(e,t){if(!e)return null;const n=sc(e);return!n||!t?.some(s=>s&&s.id===n.item)?null:n}const al=45e3,C0=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],hd=/^[A-Za-z0-9:_\/.-]{1,80}$/,z0=/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u,ud=["feed","burp","change","rock"];function Ls(e){const t=String(e||"").toLowerCase();return!t||/mobile/.test(t)?null:/bassinet/.test(t)?"bassinet":t==="crib"||/(^|[-_:])crib$/.test(t)?"crib":null}function S0(e){return e===2?"Cozy":"Happy"}function P0(e){return e+1}function T0(e){return C0.indexOf(e)>=0}function B0(e){const t=typeof e=="number"&&Number.isFinite(e)?Math.round(e):2;return t<=2?2:t>=4?4:3}function Zp(e){if(!e||typeof e!="object")return;const t=e,n={};let s=!1;for(let o=0;o<ud.length;o++){const i=ud[o],a=t[i];typeof a=="number"&&Number.isFinite(a)&&(n[i]=a,s=!0)}return s?n:void 0}function Xt(e){const t={name:e.name,mood:e.mood,spot:e.spot,x:e.x,y:e.y,room:e.room,since:e.since};(e.spot==="crib"||e.spot==="bassinet")&&e.bed&&(t.bed=e.bed),e.spot==="mat"&&e.seat&&(t.seat=e.seat),e.spot==="arms"&&e.holder&&(t.holder=e.holder);const n=Zp(e.at);return n&&(t.at=n),t}function oc(e,t){return JSON.stringify(e)===JSON.stringify(t)}function R0(e,t){if(!e||typeof e!="object")return null;const n=e,s=String(n.name??"").normalize("NFC").replace(/\s+/g," ").trim();if(!z0.test(s)||(s.match(/\d/g)||[]).length>2)return null;let o=n.spot==="crib"||n.spot==="bassinet"||n.spot==="arms"||n.spot==="mat"?n.spot:"mat";const i=T0(n.room)?n.room:"nursery",a=typeof n.x=="number"&&Number.isFinite(n.x)?Math.max(0,Math.min(2400,n.x)):700,r=typeof n.y=="number"&&Number.isFinite(n.y)?Math.max(0,Math.min(600,n.y)):540,l=typeof n.since=="number"&&Number.isFinite(n.since)?n.since:0,c=B0(n.mood);let d=typeof n.bed=="string"&&hd.test(n.bed)?n.bed:void 0,f=sc(n.seat)??void 0,g=typeof n.holder=="string"&&hd.test(n.holder)?n.holder:void 0;if(t){const h=t[i]?.items??[];if(o==="crib"||o==="bassinet"){let m=!1;for(let b=0;b<h.length;b++){const _=h[b];_&&_.id===d&&Ls(String(_.kind||""))===o&&(m=!0)}m||(o="mat",d=void 0)}if(f){let m=!1;for(let b=0;b<h.length;b++)h[b]&&h[b].id===f.item&&(m=!0);m||(f=void 0)}}return o!=="crib"&&o!=="bassinet"&&(d=void 0),o!=="mat"&&(f=void 0),o!=="arms"&&(g=void 0),o==="arms"&&!g&&(o="mat"),Xt({name:s,mood:c,spot:o,bed:d,seat:f,holder:g,x:a,y:r,room:i,at:Zp(n.at),since:l})}function A0(e,t){const n=e.nursery?.items??[];for(let s=0;s<n.length;s++){const o=n[s];if(!o||!o.id||Ls(String(o.kind||""))!=="crib")continue;const i=typeof o.x=="number"&&Number.isFinite(o.x)?o.x:1170,a=typeof o.y=="number"&&Number.isFinite(o.y)?o.y:480;return Xt({name:"Bean",mood:2,spot:"crib",bed:o.id,x:i,y:a,room:"nursery",since:t})}return Xt({name:"Bean",mood:2,spot:"mat",x:700,y:540,room:"nursery",since:t})}function D0(e,t,n){const s=Math.min(4,e.mood+1);return Xt({...e,mood:s,at:{...e.at||{},[t]:n},since:n})}function I0(e,t){if(!e.since){const i=Xt({...e,since:t});return oc(i,e)?null:i}if(e.mood<=2)return null;const n=Math.floor((t-e.since)/al);if(n<1)return null;const s=Math.min(n,e.mood-2),o=e.mood-s;return Xt({...e,mood:o,since:e.since+s*al})}function rl(e,t,n,s,o){const i=Xt(t?{...e,spot:"arms",holder:t,room:n,x:s,y:o,bed:void 0,seat:void 0}:{...e,spot:"mat",room:n,x:s,y:o,bed:void 0,seat:void 0,holder:void 0});return oc(i,e)?e:i}function H0(e,t,n,s){let o=t.spot==="crib"||t.spot==="bassinet"?t.spot:"mat",i,a;if(o==="crib"||o==="bassinet"){let l=!1;for(let c=0;c<n.length;c++){const d=n[c];d&&d.id===t.bed&&Ls(d.kind)===o&&(l=!0)}l&&t.bed?i=t.bed:o="mat"}if(o==="mat"&&t.seat){let l=null;for(let f=0;f<n.length;f++)n[f]&&n[f].id===t.seat.item&&(l=n[f]);const c=l?go(l.kind):null;let d=!1;for(let f=0;f<s.length;f++)s[f].item===t.seat.item&&s[f].n===t.seat.n&&(d=!0);l&&c&&c.pose===t.seat.pose&&!d&&(a=t.seat)}const r=Xt({...e,spot:o,room:t.room,x:t.x,y:t.y,bed:i,seat:a,holder:void 0});return oc(r,e)?e:r}function O0(e,t,n,s){const o=e.spot==="mat"&&e.seat?.item===t,i=!!n&&(e.spot==="crib"||e.spot==="bassinet")&&e.bed===t;return!o&&!i?e:Xt({...e,spot:"mat",x:s?s.x:e.x,y:s?s.y:ui,bed:void 0,seat:void 0,holder:void 0})}function Np(e,t){const n=t.scale||1,s=t.w*n,o=t.h*n,i=Ls(e);let a=i==="bassinet"?0:-.02*s;const r=i==="bassinet"?-.52*o:-.46*o;return t.flip&&(a=-a),{x:t.x+a,y:t.footY+r}}function W0(e){const t=(o,i)=>({x:o,y:i,spot:"mat",bed:null,seat:null});if(e.mode!=="play"||!e.piece)return t(e.releaseX,e.releaseY);const n=Ls(e.piece.kind);if(n){const o=Np(e.piece.kind,e.piece);return{x:o.x,y:o.y,spot:n,bed:e.piece.id,seat:null}}const s=Jo({mode:"play",via:"drag",releaseX:e.releaseX,releaseY:e.releaseY,piece:e.piece,occupied:e.occupied});return s.seat?{x:s.x,y:s.y,spot:"mat",bed:null,seat:s.seat}:t(e.releaseX,e.releaseY)}function U0(e,t=2400){const s=t-40>40?t-40:40;let o=e;return o>=40||(o=40),o>s&&(o=s),{x:o,y:ui}}function V0(e,t){return!e||e.spot!=="mat"||!e.seat||e.room!==t?null:{item:e.seat.item,n:e.seat.n}}const ei=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],Fp=["living","bedroom","kitchen","salon","nursery","bathroom","backyard"],zt=2400,$n=600,jp=1e3,ho=(zt-jp)/2,$s=[.75,.875,1,1.25,1.5];function Es(e){if(typeof e!="number"||!Number.isFinite(e))return 1;let t=1,n=1/0;for(const s of $s){const o=Math.abs(e-s);o<n&&(n=o,t=s)}return t}function nt(e){return(e?.scale||1)*Es(e?.size)}function Gp(e,t){const n=Es(t);if(n===1){if(e.size==null)return e;const{size:s,...o}=e;return o}return e.size===n?e:{...e,size:n}}const uo=8,Q0=/^[A-Za-z0-9:_\/.-]{1,80}$/;function ic(e){const t=e?.dogKennel;if(!t||typeof t!="object"||typeof t.item!="string"||!Q0.test(t.item))return null;const n=e.rooms;if(!n)return null;for(const s of Object.values(n))if(s?.items?.some(o=>o&&o.id===t.item&&o.kind==="kennel"))return{item:t.item};return null}function q0(e,t){return ic({dogKennel:{item:t},rooms:e.rooms})!==null}const q=(e,t,n,s,o=1)=>({id:e+"-"+s,kind:e,x:t+ho,y:n,flip:!1,z:s,scale:o});function Vn(){return{version:3,houseId:"local",currentRoom:"living",rooms:{living:{wallpaper:"#ffd6e0",floor:"#e8b98a",pattern:1,items:[q("sofa",470,470,1),q("lamp",230,470,2),q("plant",760,480,3),q("rug",480,530,0),q("picture",470,200,4),q("cat",600,520,5),q("window",-350,230,6),q("armchair",-300,480,7),q("bookshelf",1250,470,8),q("tree",1500,480,9),q("clock",1100,170,10)]},bedroom:{wallpaper:"#d9ccff",floor:"#f2d0a4",pattern:2,items:[q("bed",450,480,1),q("window",750,230,2),q("teddy",330,500,3),q("stars",300,180,4),q("tub",1350,480,5),q("lamp",-250,470,6),q("flowers",-150,500,7)]},salon:{wallpaper:"#ffe0f0",floor:"#f6d6ff",pattern:2,items:[q("rug",470,540,0),q("mirror",470,150,1),q("vanity",470,480,2),q("perfume",400,345,3),q("polish",450,345,4),q("hairdryer",560,340,5),q("stool",470,545,6),q("lamp",200,470,7),q("flowers",780,480,8),q("picture",780,200,9),q("chair",-250,490,10),q("mirror",-250,170,11),q("plant",1300,480,12)]},kitchen:{wallpaper:"#cdf3dc",floor:"#ffe7a8",pattern:3,items:[q("fridge",200,470,1),q("table",520,500,2),q("cake",520,395,3),q("stove",800,470,4),q("chair",380,500,5),q("chair",660,500,6),q("juice",470,395,7),q("plant",-300,480,8),q("fish",1300,480,9)]},nursery:{wallpaper:"#d6f3ff",floor:"#f3ddc4",pattern:1,items:[q("cloud-rug",480,545,0),q("crib",470,480,1),q("crib-mobile",470,155,2),q("rocker",780,490,3)]},bathroom:{wallpaper:"#d4f4fb",floor:"#f7e7d4",pattern:3,items:[q("bath-mat",180,560,0),q("shower-curtain",-40,520,1),q("soaking-tub",160,500,2),q("rubber-ducky",300,545,3),q("bath-toilet",480,500,4),q("sink-vanity",700,500,5),q("bath-mirror",700,175,6),q("towel-bar",940,200,7)]},backyard:{wallpaper:"#c5ecff",floor:"#b6e3a8",pattern:0,items:[{id:"yard-bench-1",kind:"yard-bench",x:1122,y:372,flip:!1,z:1,scale:1},{id:"tulip-bed-2",kind:"tulip-bed",x:946,y:580,flip:!1,z:2,scale:1}]}},characters:[Yn({id:"c1",skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6",room:"living",x:330+ho,y:540})],soundOn:!0,dogKennel:null}}function Yn(e){return{skin:"#f1c27d",hair:"#5b3a29",hairStyle:0,shirt:"#ff7aa8",pants:"#5aa9e6",size:"kid",acc:0,room:"living",x:zt/2,y:540,flip:!1,held:{left:null,right:null},...e}}const cs=(e,t,n)=>Math.max(t,Math.min(n,e)),vo=e=>e.items.reduce((t,n)=>Math.max(t,n.z),0),Z0=e=>e.items.reduce((t,n)=>Math.min(t,n.z),0);function Li(e,t,n){return{...e,characters:e.characters.map(s=>s.id===t?n(s):s)}}function N0(e,t,n){const s=e.baby;if(!t||!s||s.spot!=="arms"||s.holder!==t.id||n===s.room)return e;const o=t.room===s.room?t.x:s.x,i=t.room===s.room?t.y:ui,a=rl(s,null,s.room,o,i);return!a||a===s?e:{...e,baby:a}}function ti(e){if(!e.seat)return e;const{seat:t,...n}=e;return n}let ha=null;function Yp(){const e=ha;return ha=null,e}function Ei(e,t,n,s){if(!e.baby)return e;const o=s?nc(s.x,ga(s.kind)*nt(s),e.baby.x):null,i=O0(e.baby,t,n,o);return i===e.baby?e:{...e,baby:i}}function Ci(e,t,n){n&&(ha={id:t,x:n.x,kind:n.kind,scale:nt(n)});let s=!1;const o=e.characters.map(i=>{if(i.seat?.item!==t)return i;if(s=!0,!n)return ti(i);const a=nc(n.x,ga(n.kind)*nt(n),i.x),{seat:r,...l}=i;return{...l,x:a.x,y:a.y}});return s?{...e,characters:o}:e}function F0(e,t,n,s){if(!s){const i=il(e.seat,t);return i?e.seat===i?e:{...e,seat:i}:ti(e)}const o=il(n,t);return o?{...e,seat:o}:ti(e)}function it(e,t,n){const s=e.rooms[t];if(!s)return e;const o=n(s);return o===s?e:{...e,rooms:{...e.rooms,[t]:o}}}function j0(e){const t=new Set;let n=!1;const s=e.map(o=>{if(!t.has(o.id))return t.add(o.id),o;n=!0;const i=String(o.id).replace(/-d\d+$/,"").replace(/[^A-Za-z0-9:_/.-]/g,"").slice(0,72)||"item";let a=2,r=(i+"-d"+a).slice(0,80);for(;t.has(r);)a+=1,r=(i+"-d"+a).slice(0,80);return t.add(r),{...o,id:r}});return n?s:e}function G0(e){let t=!1;const n={...e.rooms};for(const s of ei){const o=e.rooms[s];if(!o||!Array.isArray(o.items))continue;const i=j0(o.items);i!==o.items&&(n[s]={...o,items:i},t=!0)}return t?{...e,rooms:n}:e}function Kp(e){if(!e||!e.rooms)return e;const t=Vn().rooms,n=e.rooms;let s=!1;for(const i of ei){const a=n[i];(!a||typeof a!="object"||!Array.isArray(a.items))&&(s=!0)}const o=s?(()=>{const i={...n};for(const a of ei){const r=n[a];(!r||typeof r!="object"||!Array.isArray(r.items))&&(i[a]=t[a])}return{...e,rooms:i}})():e;return G0(o)}function ua(e,t){switch(ha=null,t.type){case"room/switch":return e.rooms[t.room]?{...e,currentRoom:t.room}:e;case"item/add":return it(e,t.room,n=>n.items.length>=80||n.items.some(s=>s.id===t.item.id)?n:{...n,items:[...n.items,{...t.item,z:vo(n)+1}]});case"item/move":{const n=e.rooms[t.room]?.items.find(o=>o.id===t.id)??null,s=it(e,t.room,o=>({...o,items:o.items.map(i=>i.id===t.id?{...i,x:cs(t.x,0,zt),y:cs(t.y,40,$n)}:i)}));return t.stand?Ei(Ci(s,t.id,n),t.id,!1,n):s}case"item/flip":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return Ei(Ci(it(e,t.room,s=>({...s,items:s.items.map(o=>o.id===t.id?{...o,flip:!o.flip}:o)})),t.id,n),t.id,!1,n)}case"item/size":{const n=e.rooms[t.room]?.items.find(s=>s.id===t.id)??null;return!n||Es(n.size)===Es(t.size)?e:it(e,t.room,s=>({...s,items:s.items.map(o=>o.id===t.id?Gp(o,t.size):o)}))}case"item/front":return it(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:vo(n)+1}:s)}));case"item/back":return it(e,t.room,n=>({...n,items:n.items.map(s=>s.id===t.id?{...s,z:Z0(n)-1}:s)}));case"item/delete":{const n=e.rooms[t.room]?.items.find(a=>a.id===t.id)??null,s=n?.kind==="kennel",o=Ci(it(e,t.room,a=>({...a,items:a.items.filter(r=>r.id!==t.id)})),t.id,n),i=s&&e.dogKennel?.item===t.id?{...o,dogKennel:null}:o;return Ei(i,t.id,!0,n)}case"room/wallpaper":return it(e,t.room,n=>({...n,wallpaper:t.color}));case"room/floor":return it(e,t.room,n=>({...n,floor:t.color}));case"room/pattern":return it(e,t.room,n=>({...n,pattern:t.pattern,wallTile:null}));case"room/wallTile":return it(e,t.room,n=>({...n,wallTile:t.tile}));case"room/floorTile":return it(e,t.room,n=>({...n,floorTile:t.tile}));case"char/add":return e.characters.length>=uo||e.characters.some(n=>n.id===t.char.id)?e:{...e,characters:[...e.characters,t.char]};case"char/update":return Li(e,t.id,n=>{const{look2:s,...o}=t.patch,i={...n,...o};return"look2"in t.patch&&(s?i.look2=s:delete i.look2),i});case"char/move":{if(!e.rooms[t.room])return e;const n=e.characters.find(o=>o.id===t.id),s=Li(e,t.id,o=>{const i={...o,room:t.room,x:cs(t.x,0,zt),y:cs(t.y,60,$n)};return F0(i,e.rooms[t.room].items,t.seat,"seat"in t)});return N0(s,n,t.room)}case"char/delete":{const n=e.characters.find(o=>o.id===t.id);if(!n)return e;let s={...e,characters:e.characters.filter(o=>o.id!==t.id)};if(["left","right"].forEach((o,i)=>{const a=n.held[o];a&&(s=it(s,n.room,r=>({...r,items:[...r.items,{...a,x:n.x+(i?40:-40),y:n.y,z:vo(r)+1}]})))}),s.baby?.spot==="arms"&&s.baby.holder===t.id){const o=rl(s.baby,null,s.baby.room,s.baby.x,s.baby.y);o&&o!==s.baby&&(s={...s,baby:o})}return s}case"char/hold":{const n=e.characters.find(r=>r.id===t.id),s=e.rooms[t.room]?.items.find(r=>r.id===t.itemId);if(!n||!s||n.held[t.hand]||n.room!==t.room)return e;const o=Ci(it(e,t.room,r=>({...r,items:r.items.filter(l=>l.id!==t.itemId)})),t.itemId,s),i=Li(o,t.id,r=>({...r,held:{...r.held,[t.hand]:s}})),a=s.kind==="kennel"&&e.dogKennel?.item===t.itemId?{...i,dogKennel:null}:i;return Ei(a,t.itemId,!0,s)}case"char/release":{const n=e.characters.find(i=>i.id===t.id),s=n?.held[t.hand];if(!n||!s)return e;const o=Li(e,t.id,i=>({...i,held:{...i.held,[t.hand]:null}}));return it(o,n.room,i=>({...i,items:[...i.items,{...s,x:cs(t.x,0,zt),y:cs(t.y,40,$n),z:vo(i)+1}]}))}case"cat/set":return{...e,cat:t.cat};case"cat/move":return e.cat&&e.rooms[t.room]?{...e,cat:{...e.cat,room:t.room,x:cs(t.x,100,zt-100)}}:e;case"dog/set":return{...e,dog:t.dog};case"dog/kennel":return t.item===null?e.dogKennel?{...e,dogKennel:null}:e:!q0(e,t.item)||e.dogKennel?.item===t.item?e:{...e,dogKennel:{item:t.item}};case"ranch/op":{const n=t.op;if(n.op==="take"){const i=e.rooms[n.room];if(i&&i.items.some(a=>a.id===n.id))return e}const s=ol(ec(e.garden),Jl(e.basket),t.op,t.now,e.lastEgg??0);if(typeof s=="string")return e;let o={...e,garden:s.plots,basket:s.basket,lastEgg:t.op.op==="egg"?t.now:e.lastEgg};if(t.op.op==="take"&&o.rooms[t.op.room]){const i=t.op;o=it(o,i.room,a=>a.items.length>=80?a:{...a,items:[...a.items,{id:i.id,kind:f0[i.kind],x:i.x,y:560,flip:!1,z:vo(a)+1,scale:1}]})}return o}case"settings/sound":return{...e,soundOn:t.on};case"game/reset":return Vn();case"baby/meet":return e.baby?e:{...e,baby:A0(e.rooms,t.now)};case"baby/name":return!e.baby||!t.name||t.name===e.baby.name?e:{...e,baby:Xt({...e.baby,name:t.name})};case"baby/care":{if(!e.baby)return e;const n=D0(e.baby,t.care,t.now);return n===e.baby?e:{...e,baby:n}}case"baby/hold":{if(!e.baby)return e;const n=rl(e.baby,t.holder,t.room,t.x,t.y);return!n||n===e.baby?e:{...e,baby:n}}case"baby/place":{if(!e.baby||!e.rooms[t.room])return e;const n=e.characters.filter(o=>o.room===t.room&&o.seat).map(o=>({item:o.seat.item,n:o.seat.n})),s=H0(e.baby,t,e.rooms[t.room].items,n);return s===e.baby?e:{...e,baby:s}}case"baby/ease":{if(!e.baby)return e;const n=I0(e.baby,t.now);return n?{...e,baby:n}:e}}}const md=qt("cozy-house"),Y0=qt("cozy-house-v1");function ac(e){if(!e||typeof e!="object"||!e.rooms)return Vn();let t=e;if(t.version===1){const f=h=>(Number(h)||0)+ho,g={};for(const[h,m]of Object.entries(t.rooms))g[h]={...m,items:(m.items??[]).map(b=>({...b,x:f(b.x)}))};t={...t,version:2,rooms:g,character:{...t.character,x:f(t.character?.x)}}}if(t.version===2){const f=t.character??{};t={...t,version:3,characters:[Yn({...f,id:"c1",size:"kid",acc:0,held:{left:null,right:null}})]},delete t.character}if(t.version!==3)return Vn();const n=Vn(),s=(Array.isArray(t.characters)?t.characters:[]).slice(0,uo).map((f,g)=>{const h=f?.look2,m=Yn({...f,id:String(f.id??"c"+(g+1)),held:{left:f.held?.left??null,right:f.held?.right??null}});if(delete m.look2,h!=null){const b=gi(h);b&&(m.look2=b)}return m}),o=Kp({...n,...t,rooms:{...n.rooms,...t.rooms},characters:s}),i=yd(o),a=ic(i),r=a===o.dogKennel?o:{...o,dogKennel:a},l=b0(r.mailbox);let c=i===o?r:{...r,characters:i.characters};if(l)c={...c,mailbox:l};else if(c.mailbox){const{mailbox:f,...g}=c;c=g}const d=R0(c.baby,c.rooms);if(d)c={...c,baby:d};else if("baby"in c){const{baby:f,...g}=c;c=g}return yd(K0(c))}function yd(e){let t=!1;const n=e.characters.map(s=>{const o=il(sc(s.seat),e.rooms[s.room]?.items);return o?s.seat?.item===o.item&&s.seat.pose===o.pose&&s.seat.n===o.n?s:{...s,seat:o}:s.seat?(t=!0,ti(s)):s});return!t&&n.every((s,o)=>s===e.characters[o])?e:{...e,characters:n}}function K0(e){const t=e.currentRoom,n=Fp.includes(t),s=a=>ei.includes(a);let o=!1;const i=e.characters.map(a=>{const r=a.room;return!s(r)||!n&&r===t?(o=!0,{...a,room:"living"}):a});return n&&!o?e:{...e,currentRoom:n?e.currentRoom:"living",characters:i}}function Xp(){let e,t=!1;try{const o=localStorage.getItem(md)??localStorage.getItem(Y0);o?e=ac(JSON.parse(o)):(t=!0,e=Vn(),typeof navigator<"u"&&!navigator.webdriver&&(e=s0(e)))}catch{e=Vn()}const n=[];let s;return{get:()=>e,subscribe(o){n.push(o)},dispatch(o){e=ua(e,o),n.forEach(i=>i(e,o)),clearTimeout(s),s=window.setTimeout(()=>{try{localStorage.setItem(md,JSON.stringify(e))}catch{}},250)},born:t}}const X0=Object.freeze(Object.defineProperty({__proto__:null,ITEM_SIZE_STEPS:$s,MAX_CHARS:uo,ROOM_H:$n,ROOM_IDS:ei,ROOM_W:zt,SCENE_ROOMS:Fp,V1_OFFSET:ho,V1_ROOM_W:jp,applyItemSize:Gp,createStore:Xp,drawnScale:nt,ensureRooms:Kp,initialState:Vn,itemSizeOf:Es,migrate:ac,newCharacter:Yn,reduce:ua,standChar:ti,takeClearedFurniture:Yp,validKennel:ic},Symbol.toStringTag,{value:"Module"}));function ll(e,t){for(let n=e.length-1;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}const Jp=4,wd=7,J0=30;function eu(){const e=[];let t=0;for(let n=0;n<Jp;n++){e.push({id:t++,c:n,v:0});for(let s=1;s<=9;s++)for(let o=0;o<2;o++)e.push({id:t++,c:n,v:s});for(const s of["skip","rev","d2"])for(let o=0;o<2;o++)e.push({id:t++,c:n,v:s})}for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"wild"});for(let n=0;n<4;n++)e.push({id:t++,c:4,v:"w4"});return e}const cl=e=>e.discard[e.discard.length-1],ko=(e,t)=>t.c===4||t.c===e.color||t.v===cl(e).v&&cl(e).c!==4,Sn=(e,t,n=1)=>{const s=e.hands.length;return((t+e.dir*n)%s+s)%s};function dl(e,t,n,s){const o=[];for(let i=0;i<n&&e.hands[t].length<J0;i++){if(!e.deck.length){const r=e.discard.pop();if(e.deck=ll(e.discard.map(l=>l),s),e.discard=[r],!e.deck.length)break}const a=e.deck.pop();e.hands[t].push(a),o.push(a)}return e.hands[t].length>1&&(e.slay[t]=!1),o}function tu(e,t){if(e.owe!==null&&e.hands[e.owe]?.length===1&&!e.slay[e.owe]){const n=e.owe;return e.owe=null,{victim:n,vdrew:dl(e,n,2,t).length}}return e.owe=null,{}}const bd=e=>{const t=[0,0,0,0];return e.forEach(n=>{n.c<4&&t[n.c]++}),t.indexOf(Math.max(...t))},nu={id:"slay",name:"Slay",minPlayers:2,maxPlayers:6,setup(e,t){const n=ll(eu(),t),s=Array.from({length:e},()=>n.splice(-wd,wd));let o=n.length-1;for(;typeof n[o].v!="number";)o--;const i=n.splice(o,1)[0];return{deck:n,discard:[i],hands:s,color:i.c,turn:Math.floor(t()*e),dir:1,drawn:null,slay:s.map(()=>!1),owe:null,winner:null,ev:{n:0,p:-1,k:"start",card:i}}},cleanMove(e){return!e||typeof e!="object"?null:e.k==="play"&&Number.isInteger(e.id)&&e.id>=0&&e.id<108?{k:"play",id:e.id,...Number.isInteger(e.color)&&e.color>=0&&e.color<Jp?{color:e.color}:{}}:e.k==="draw"||e.k==="pass"||e.k==="slay"?{k:e.k}:null},legal(e,t,n){if(e.winner!==null)return!1;if(n.k==="slay")return e.hands[t].length<=2&&!e.slay[t];if(t!==e.turn)return!1;if(n.k==="draw")return e.drawn===null;if(n.k==="pass")return e.drawn!==null;const s=e.hands[t].find(o=>o.id===n.id);return!s||e.drawn!==null&&s.id!==e.drawn||s.c===4&&n.color===void 0?!1:ko(e,s)},apply(e,t,n,s){const o=e.ev.n+1;if(n.k==="slay")return e.slay[t]=!0,e.owe===t&&(e.owe=null),e.ev={n:o,p:t,k:"slay"},e;const i=tu(e,s);if(n.k==="draw"){const d=dl(e,t,1,s),f=d[0];if(f&&ko(e,f))e.drawn=f.id,e.ev={n:o,p:t,k:"draw",drew:1,...i};else{if(e.drawn=null,e.ev={n:o,p:t,k:"draw",drew:d.length,...i},e.stuck=d.length?0:(e.stuck??0)+1,(e.stuck??0)>=e.hands.length){const g=Math.min(...e.hands.map(h=>h.length));return e.winner=e.hands.findIndex(h=>h.length===g),e.turn=-1,e}e.turn=Sn(e,t)}return e}if(n.k==="pass")return e.drawn=null,e.turn=Sn(e,t),e.ev={n:o,p:t,k:"pass",...i},e;e.stuck=0;const a=e.hands[t],r=a.splice(a.findIndex(d=>d.id===n.id),1)[0];e.discard.push(r),e.drawn=null,e.color=r.c===4?n.color:r.c;const l={n:o,p:t,k:"play",card:r,color:e.color,...i};if(!a.length)return e.winner=t,e.turn=-1,e.ev=l,e;a.length===1&&!e.slay[t]&&(e.owe=t);const c=e.hands.length===2;if(r.v==="rev")e.dir=e.dir===1?-1:1,e.turn=c?t:Sn(e,t);else if(r.v==="skip")l.skipped=Sn(e,t),e.turn=Sn(e,t,2);else if(r.v==="d2"||r.v==="w4"){const d=Sn(e,t);l.skipped=d;const f=r.v==="d2"?2:4;l.drew=dl(e,d,f,s).length,e.turn=Sn(e,t,2)}else e.turn=Sn(e,t);return e.ev=l,e},turn:e=>e.winner!==null?-1:e.turn,winner:e=>e.winner,view(e,t){return{top:cl(e),color:e.color,turn:e.winner!==null?-1:e.turn,dir:e.dir,deck:e.deck.length,counts:e.hands.map(n=>n.length),slay:e.slay,winner:e.winner,ev:e.ev,...t!==null&&e.hands[t]?{hand:e.hands[t],drawn:t===e.turn?e.drawn:null}:{}}},autoMove(e,t){if(t!==e.turn)return null;if(e.drawn!==null){const s=e.hands[t].find(o=>o.id===e.drawn);return s&&ko(e,s)?{k:"play",id:s.id,...s.c===4?{color:bd(e.hands[t])}:{}}:{k:"pass"}}const n=e.hands[t].find(s=>ko(e,s)&&s.c!==4)??e.hands[t].find(s=>ko(e,s));return n?{k:"play",id:n.id,...n.c===4?{color:bd(e.hands[t])}:{}}:{k:"draw"}},removePlayer(e,t,n){if(e.hands.length<=2)return null;const s=e.turn===t;return e.deck.unshift(...e.hands[t]),ll(e.deck,n),e.hands.splice(t,1),e.slay.splice(t,1),e.owe===t?e.owe=null:e.owe!==null&&e.owe>t&&e.owe--,e.turn>t&&e.turn--,s&&(e.drawn=null,e.dir===-1?e.turn=((t-1)%e.hands.length+e.hands.length)%e.hands.length:e.turn=t%e.hands.length),e.ev={n:e.ev.n+1,p:t,k:"left"},e}},pl=7,Gi=6,su=(e,t,n)=>{const s=e[t][n];for(const[o,i]of[[1,0],[0,1],[1,1],[1,-1]]){const a=[[t,n]];for(const r of[1,-1])for(let l=1;l<4;l++){const c=t+o*l*r,d=n+i*l*r;if(c<0||c>=pl||d<0||d>=Gi||e[c][d]!==s)break;a.push([c,d])}if(a.length>=4)return a}return null},ou={id:"four",name:"Four in a Row",minPlayers:2,maxPlayers:2,setup:(e,t)=>({b:Array.from({length:pl},()=>[]),turn:t()<.5?0:1,winner:null,draw:!1,line:null,last:null,n:0}),cleanMove:e=>e&&Number.isInteger(e.col)&&e.col>=0&&e.col<pl?{col:e.col}:null,legal:(e,t,n)=>e.winner===null&&!e.draw&&t===e.turn&&e.b[n.col].length<Gi,apply(e,t,n){e.b[n.col].push(t);const s=e.b[n.col].length-1;e.last={col:n.col,row:s,p:t},e.n++;const o=su(e.b,n.col,s);return o?(e.winner=t,e.line=o,e.turn=-1):e.b.every(i=>i.length>=Gi)?(e.draw=!0,e.turn=-1):e.turn=1-t,e},turn:e=>e.turn,winner:e=>e.winner,view:e=>e,autoMove:(e,t)=>{if(t!==e.turn)return null;const s=[3,2,4,1,5,0,6].find(o=>e.b[o].length<Gi);return s===void 0?null:{col:s}},removePlayer:()=>null},ef={slay:nu,four:ou},sr=2600,ni=[{game:"slay",seats:6,x:720},{game:"four",seats:2,x:1500},{game:"slay",seats:4,x:2150}],iu=2e4,au="winter",ru="Winter Cheer",lu={[au]:ru},cu=["pack:wc-holiday-tree","pack:wc-gingerbread","pack:wc-gingerbread-village","pack:wc-bauble-garland","pack:wc-stocking-row","pack:wc-cane-lamp","pack:wc-star-topper","pack:wc-poinsettia","pack:wc-holly","pack:wc-nutcracker","pack:wc-reindeer","pack:wc-sleigh-planter"],du=["Berry Wreath","Birch Log Basket","Cabin Picture","Cabin Planks","Candy Cane Lamp","Candy Stripe","Cinnamon Roll Tray","Cocoa Cart","Cocoa Pot","Cookie Oven","Cookie Plate","Cozy Red Plaid","Cozy Sock Hamper","Decorated Holiday Tree","Frosted Pine","Frosty Bookcase","Frosty Dots","Fur-Trim Bench","Gingerbread Cottage","Gingerbread Village","Holly Sprig","Ice Skates","Ice-Blue Wardrobe","Knit Pom Rug","Knit Stocking Row","Knit-Blanket Armchair","LED Candle Trio","Lantern","Log Bench","Marshmallow Jar","Mint Pine Sprigs","Mitten Ottoman","Mittens on a Line","Mug Tree Shelf","Mug of Cocoa","Nutcracker Friend","Penguin Plush","Penguin Plush Chair","Peppermint Counter","Peppermint Swirl Rug","Peppermint Tiles","Pinecone Garland","Pinecone Side Table","Plaid Cabin Sofa","Poinsettia Pot","Polar Bear Plush","Red Plaid Quilt Bed","Reindeer Plush","Ribbon Bauble Garland","Sled Coffee Table","Sleigh Planter","Snow Globe","Snow Knit Carpet","Snow-Globe Lamp","Snowflake Mobile","Snowflake Nightstand","Snowflake Sky","Snowman Buddy","Snowshoes","Snowy Window Art","Snowy Window Seat","Star Tree Topper","Stone Hearth Fireplace","Twinkle Light String","Twinkle-Light Floor Lamp","Winter Cheer","Woodstove","Wrapped Present Stack"],pu=["A-Frame Swing","Acorn Friend","Alarm Clock","Apple","Apple Tree","Arc Floor Lamp","Arc Lamp","Arched Mirror","Arched Shelf","Armchair","Autumn Wreath","Baby Blocks","Baby Bottle","Bakery Shelf","Ball","Balloons","Bananas","Bar Stool","Bassinet","Bath Mat","Bath Mirror","Bath Stool","Bathtub","Beach Ball","Bean Bag","Bed","Berry Basket","Big Leaf Plant","Big Monitor","Big Wardrobe","Birdbath","Birdhouse","Birdie","Blanket Basket","Blocks","Boba Buddy","Book Stack","Books","Bookshelf","Box Stack","Bread","Brush & Comb","Bubble Aquarium","Bubble Bath","Bubble Chair","Bubble-Gum Rug","Bubbly Fountain","Bubbly Plant","Bud Vase","Bulletin Board","Bunk Bed","Bunny","Bunny Plush","Bunny Slippers","Butterfly Bush","Cactus","Cactus Buddy","Cada's Mouse","Cake","Candle Jar","Canopy Bed","Canopy Daybed","Cat Bed","Cat Tower","Caterpillar Plush","Chair","Changing Table","Checker Rug","Checkered Bed","Chick","Chloe's Star Lamp","Clock","Clothes Rail","Clothesline","Cloud Beanbag","Cloud Lamp","Cloud Rug","Cloud Shelf","Cocoa Doll","Cocoa Mug","Coffee Table","Comfy Chair","Cookie Jar","Cooking Pot","Cottage Heart Pouf","Cottage Heart Rug","Counter","Cozy Fireplace","Cozy Lights","Cozy Mug","Cozy Nightstand","Cozy Reading Nook","Cozy Snake Plant","Cozy Teapot","Cream Jars","Cream Sofa","Crib","Crib Mobile","Cubby Shelf","Cube Shelf","Cupcake","Cupcake Stand","Curtains","Curvy Yellow Desk","Cute Keyboard","Cute Speaker","Daisy Pot","Daisy Rug","Desk","Desk Lamp","Desk Mic","Dino Plushie","Dish Cabinet","Dish Rack","Dog Kennel","Doll House","Donut","Dresser","Droplet Buddy","Egg Pan","Fairy-Light Garland","Fairy-Light Shelf","Fan","Fancy Sofa","Fiddle-Leaf Fig","Fig Tree","Fire Pit","Fireplace","Fish Bowl","Fish Tank","Floor Cushion","Flower Cart","Flower Floor Lamp","Flower Kettle","Flower Lamp","Flowers","Foot Spa","Fresh Egg","Fridge","Frog Plush","Fruit Bowl","Game Controller","Gaming Chair","Garden Bench","Garden Carrot","Garden Gnome","Glass Cabinet","Globe","Globe Pendants","Glossy Hair Dryer","Glow Mirror","Gold Floor Mirror","Guinea Pig","Hair Dryer","Hair-Dryer Chair","Hair-Wash Chair","Hammock","Hamster House","Hamster Pal","Hanging Lamp","Hanging Lantern","Hanging Plant","Hanging Vine Planter","Happy Fridge","Headphones","Heart Headboard Bed","Heart Pouf","Heart Rug","Heart Wall Clock","Heart Wall Light","Heart-Leaf Plant","Hedge Row","Herb Box","High Chair","Honey Doll","Ice Cream","Jewelry Box","Juice","Kettle","Kitchen Counter","Knit Cushion","Ladder Shelf","Lamp","Landscape Art","Lattice Bench","Laundry Hamper","Lava Lamp","Lemon Tree","Lemonade Cart","Lemonade Cup","Lighted Vanity","Lilac Curtain","Lily Pond","Little Rocking Horse","Little Slide","Little Sprout","Lotion Bottles","Macaron Jar","Macrame Swing Chair","Mani-Pedi Chair","Manicure Table","Microwave","Milk","Milk & Cookies","Mini Fridge","Mini Greenhouse","Mini Tree","Mint Fridge","Mint Pebble Rug","Mirror","Mixer","Moon and Stars","Moon Night-Light","Moving Box","Mushroom Stool","Music Box","Nail Dryer","Nail Polish","Nail Polish Rack","Night Light","Nightstand","Nursery Cloud Rug","Nursery Dresser","Nursery Lamp","Pancakes","Pantry","Paper Lantern","Pastel Range","Pastel Wardrobe","Patio Lights","Patio Umbrella","Pendant Lamp","Perfume","Perfume Bottle","Perfume Tray","Pet Bowl","Petal Coffee Table","Phone on a Stand","Piano","Picket Gate","Picnic Basket","Picnic Blanket","Picnic Table","Picture","Piggy Bank","Pillow","Pin Board","Pink Vanity","Pinwheel","Pizza","Plant","Plant Stand","Plant Wall","Play Mat","Play Tent","Polish Bottle","Popcorn","Pothos Plant","Pouf","Puffy Cloud Sofa","Puffy Stool","Puppy","Quinn's Cookie Pup","Radio","Rain Barrel","Rainbow Art","Rainbow Rug","Ranch Flowers","Rattle","Reagan's Frame","Reception Desk","Record Player","Ribbon Mirror","Ribbon Tray","Rice Cooker","Ring Light","Robot","Rocker","Rocking Chair","Rocking Horse","Rose Doll","Round Breakfast Table","Round Side Table","Round Woven Rug","Rubber Ducky","Rug","Runner Rug","Salon Chair","Sandbox","Scallop Curtains","Scalloped Loveseat","Seesaw","Shelf","Shower Curtain","Sink","Sink Vanity","Sloane's Rainbow Snail","Snake Plant","Soaking Tub","Soap Dish","Sofa","Sparkle Wall Light","Spice Rack","Splash Pool","Spray Bottle","Sprinkler","Stacking Rings","Star Dresser","Star Lamp","Star Mobile","Stars","Stepping Stones","Sticker Board","Story Pillow","Stove","String Lights","Striped Runner","Succulents","Sun Lounger","Sunny Art","Sunny Bean Bag","Sunny Cloud Rug","Sunny Shelf","Swing Chair","Swivel Stool","Table","Tassel Rug","Teapot","Teapot Set","Teddy","Tiered Tray","Toadstool Light","Toaster","Toilet","Towel Bar","Towel Cart","Towel Stack","Toy Bin","Toy Car","Toy cat","Toy Chest","Toy Train","Trailing Plant Shelf","Tulip Bed","Tulip Vase","Turtle","TV","TV Stand","Unicorn Plushie","Utensil Rail","Vanity","Vanity Stool","Vegetable Patch","Vlog Camera","Wagon","Waiting Bench","Wall Shelf","Wardrobe","Water-Drop Lamp","Watermelon","Wavy Floor Lamp","Window","Window Seat","Wood Armchair","Wood Bookshelf","Wood Coffee Table","Wood Desk","Wood Dresser","Wood Stool","Wood Wall Clock","Wooden Bed","Yard Sign",...du],fu=4,rc=16,ma=e=>String(e??"").toUpperCase().replace(/[^A-Z0-9]/g,""),gu=e=>e.length>=fu&&e.length<=rc&&/^[A-Z0-9]+$/.test(e),hu=12,uu=["Cada","Chloe","Quinn","Reagan","Sloane"],mu=460,yu=320,vd=["Sunny Bunny","Bubbly Panda","Sparkle Kitty","Happy Hippo","Cozy Koala","Jolly Jelly","Zippy Fox","Dreamy Deer","Giggly Goose","Peachy Pup","Minty Mouse","Rainbow Duck","Cuddly Cub","Starry Owl","Bouncy Frog","Lucky Lamb","Snuggly Seal","Twinkle Tiger","Berry Bear","Cloudy Llama","Pebble Penguin","Honey Hedgehog","Marshmallow Moose","Cupcake Cat"],Qo=["Hi!","Come over!","I love your house!","Let's play!","Follow me!","Look at this!","Want a snack?","Nice!","Yes!","No thanks","Hehe","Be right back","Bye!","Let's decorate!","Wanna race?","So cute!"],tf=["👋","😀","😂","😍","😮","😢","🎉","⭐","❤️","👍","🍕","🐱","🌈","🎶","💤","✨"],lc=60,wu={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t","@":"a",$:"s","!":"i","+":"t"},Ar=["fuck","fuk","fck","shit","sht","bitch","btch","bastard","asshole","ass","dick","cock","pussy","cunt","whore","slut","damn","crap","piss","fag","faggot","retard","nigger","nigga","porn","sex","sexy","nude","naked","boob","boobs","penis","vagina","kill","suicide","stupid","idiot","dumb","hate","loser","shutup","wtf","stfu","gtfo","bs"],bu=["zero","oh","one","two","three","four","five","six","seven","eight","nine","ten"],vu=[/\bmy\s+(real\s+)?(full\s+|last\s+|sur)?name\s+is\b/i,/\bi\s*live\s+(at|on|in)\b/i,/\bmy\s+(address|addy|phone|number|cell|email|e-mail|school|password|pass|insta|snap|tiktok|discord)\b/i,/\b(password|passcode|zip\s*code|postcode)\b/i,/\b(snapchat|instagram|tiktok|discord|whatsapp|kik|telegram|facebook|messenger|youtube\.com)\b/i],ku=/(https?:|www\.|\b[a-z0-9-]+\s*(\.|\(dot\)|\sdot\s)\s*(com|net|org|io|co|me|ly|gg|tv|app|xyz|us|uk|ca|de|link|site|info)\b)/i,_u=/\S+\s*(@|\(at\)|\sat\s)\s*\S+\s*(\.|\sdot\s)\s*\w{2,}/i,$u=/@\w/,xu=/\b\d{1,6}\s+([a-z]+\s+){0,3}(street|st|road|rd|avenue|ave|lane|ln|drive|dr|court|ct|blvd|boulevard|way|place|pl|circle|cir|terrace|parkway|pkwy|highway|hwy|apt|apartment|unit)\b/i;function Mu(e,t=lc){if(typeof e!="string")return{ok:!1,reason:"empty"};const n=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();if(!n)return{ok:!1,reason:"empty"};if(n.length>t)return{ok:!1,reason:"long"};if(ku.test(n))return{ok:!1,reason:"link"};if(_u.test(n)||$u.test(n))return{ok:!1,reason:"contact"};if((n.match(/\d/g)??[]).length>=5||/\d[\d\s().\-]{4,}\d/.test(n)||xu.test(n))return{ok:!1,reason:"contact"};const o=n.toLowerCase().split(/[^a-z]+/).filter(Boolean);let i=0;for(const c of o)if(i=bu.includes(c)?i+1:0,i>=4)return{ok:!1,reason:"contact"};if(vu.some(c=>c.test(n)))return{ok:!1,reason:"personal"};const a=n.toLowerCase().replace(/[0-9@$!+]/g,c=>wu[c]??c),r=a.split(/[^a-z]+/).filter(Boolean),l=a.replace(/[^a-z]/g,"").replace(/(.)\1{2,}/g,"$1$1");return r.some(c=>Ar.includes(c)||Ar.includes(c.replace(/(.)\1+/g,"$1")))||Ar.filter(c=>c.length>=5).some(c=>l.includes(c))?{ok:!1,reason:"words"}:{ok:!0,text:n}}const Lu={0:"o",1:"i",3:"e",4:"a",5:"s",7:"t",8:"b","@":"a",$:"s","!":"i","+":"t",v:"u","|":"k","<":"k","#":"h"};function Eu(e){return/^f+u+c+k+$/.test(e)||/^f+u+k+$/.test(e)||/^f+c+k+$/.test(e)||/^s+h+i+t+$/.test(e)||/^s+h+t+$/.test(e)||/^b+i+t+c+h+$/.test(e)||/^b+t+c+h+$/.test(e)||/^a+s+h+o+l+e+$/.test(e)||/^d+u+m+b+a+s+$/.test(e)||/^n+i+g{2,}e+r+$/.test(e)||/^n+i+g{2,}a+$/.test(e)||/^f+a+g+$/.test(e)||/^f+a+g+o+t+$/.test(e)||/^r+e+t+a+r+d+$/.test(e)||/^k+y+s+$/.test(e)}function Cu(e){return/^c+u+n+t+$/.test(e)||/^a+h+o+l+e+$/.test(e)||/^k+i+k+e+$/.test(e)||/^c+h+i+n+k+$/.test(e)||/^s+p+i+c+$/.test(e)||/^c+o{2,}n+$/.test(e)||/^w+e+t+b+a+c+k+$/.test(e)||/^t+r+a+n+y+$/.test(e)||/^t+r+a+n+i+$/.test(e)||/^d+y+k+e+$/.test(e)||/^b+e+a+n+e+r+$/.test(e)||/^g+o{2,}k+$/.test(e)||/^r+a+g+h+e+a+d+$/.test(e)||/^t+o+w+e+l+h+e+a+d+$/.test(e)||/^h+e+i+l+h+i+t+l+e+r+$/.test(e)}const zu=new Set(["spicy","spices","spicing","spicey","spicier","spiciest","cocky","chinking","spicer","gooky","slutty","twatt"]);function Su(e,t){if(!/^[a-z]+$/.test(e)||t&&zu.has(e))return!1;const n=[e],s=["ing","in","ers","er","ed","es","y","s"];for(let o=0;o<s.length;o++){const i=s[o];e.endsWith(i)&&e.length>i.length+2&&n.push(e.slice(0,-i.length))}for(let o=0;o<n.length;o++)if(Eu(n[o])||t&&Cu(n[o]))return!0;return!1}function Pu(e){if(!e.includes("*"))return[e];const t=e.split("*").length-1,n=e.replace(/\*/g,""),s=n?[n]:[];if(t<1||t>3)return s;const o=e.split(""),i=[];for(let r=0;r<o.length;r++)o[r]==="*"&&i.push(r);const a=r=>{if(r===i.length){s.push(o.join(""));return}for(let l=97;l<=122;l++)o[i[r]]=String.fromCharCode(l),a(r+1)};return a(0),s}const kd=["mother","sonofa","horse","bull","dip"],_d=["face","head","you"];function eo(e,t){const n=e.replace(/ph(?=u+c+k)/g,"f").replace(/ph(?=u+k)/g,"f");if(Su(n,t)||/^w+t+f+$/.test(n)||/^s+t+f+u+$/.test(n))return!0;for(let s=0;s<kd.length;s++){const o=kd[s];if(n.startsWith(o)&&n.length>o.length+2&&eo(n.slice(o.length),t))return!0}for(let s=0;s<_d.length;s++){const o=Tu(n,_d[s]);if(o&&eo(o,t))return!0}return!!(n.length>4&&n.endsWith("s")&&!n.endsWith("ss")&&eo(n.slice(0,-1),t))}function Tu(e,t){let n=e.length;for(let s=t.length-1;s>=0;s--){const o=t[s];if(n===0||e[n-1]!==o)return null;for(;n>0&&e[n-1]===o;)n--}return n<=2?null:e.slice(0,n)}function ya(e){let t="";for(let n=0;n<e.length;n++)t+=Lu[e[n]]??e[n];return t}const Bu={ѕ:"s",һ:"h",с:"c",а:"a",е:"e",о:"o",р:"p",і:"i",х:"x",у:"y",к:"k"};function Ru(e){const n=e.replace(/[\u00ad\u0336\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").normalize("NFKC").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase();let s="";for(let o=0;o<n.length;o++)s+=Bu[n[o]]??n[o];return s}const Au=new Set(["it","its","it's","is","as","a","i","uh","oh","so","he","she","hi","um","umm","hmm","hm","ah","eh","er","ow","ha","hey","yo","ok","yeah","yes","no","nah","wow","ho","ooh","ahh","uhh","ohh"]);function si(e){return e>="a"&&e<="z"||e>="0"&&e<="9"||"@$!+*v|#<".includes(e)}function $d(e,t){let n=t;for(;n<e.length&&e[n]==="!";)n++;if(n>=e.length||!si(e[n])||e[n]==="!")return null;const s=e[n];let o=n+1;for(;o<e.length&&e[o]==="!";)o++;return o<e.length&&si(e[o])?null:{ch:s,end:o}}function Du(e,t){const n=e.length,s=" .-_~";let o=0;for(;o<n;){if(o>0&&si(e[o-1])){o++;continue}const i=$d(e,o);if(!i){o++;continue}const a=[i.ch];let r=i.end;for(;r<n&&s.includes(e[r]);){const l=$d(e,r+1);if(!l)break;a.push(l.ch),r=l.end}if(a.length>=2){const l=ya(a.join("")).replace(/\*/g,"");if(eo(l,t))return!0}o=Math.max(o+1,r)}return!1}function Cs(e){return e.replace(/^!+/,"").replace(/!+$/,"")}function wa(e){return ya(Cs(e)).replace(/\*/g,"")}function nf(e){return/[0-9@$!+*|#<]/.test(Cs(e))}function Iu(e){return Cs(e).length===1}function Hu(e){const t=Cs(e);return t.length<2||nf(e)?!1:/^sh+$/.test(t)||Au.has(t)}function Ou(e){let t="space";for(let n=0;n<e.length;n++){const s=e[n];if(!(s===" "||s==="	"||s===`
`||s==="\r")){if(s==="-"){t="hyphen";continue}return"punct"}}return t}function Wu(e){const t=[];let n=0,s="";for(;n<e.length;){if(!si(e[n])){s+=e[n],n++;continue}let o=n+1;for(;o<e.length&&si(e[o]);)o++;t.push({text:e.slice(n,o),gap:t.length===0?"start":Ou(s)}),s="",n=o}return t}function Uu(e){const t=[ya(e)];if(e.charAt(0)==="!"||e.charAt(e.length-1)==="!"){const n=e.replace(/^!+/,"").replace(/!+$/,"");n&&n!==e&&t.push(ya(n))}return t}function Vu(e){for(let t=0;t<e.length;t++){if(!/^k+i+l+$/.test(e[t]))continue;const n=e[t+1]||"",s=e[t+2]||"";if(/^y+o+u+r+s+e+l+f+$/.test(n)||/^u+r+s+e+l+f+$/.test(n)||/^u+r+$/.test(n)&&/^s+e+l+f+$/.test(s))return!0}return!1}function Qu(e,t,n){if(Cs(e[n].text)!=="coon")return!1;const s=n>0?t[n-1]:"",o=t[n+1]||"";return s==="maine"||o==="cat"}function qu(e,t,n){return n===t+1&&e[n].gap==="space"&&/^a+$/.test(wa(e[t].text))&&/^h+o+l+e+$/.test(wa(e[n].text))}function Zu(e,t,n){return Cs(e[n].text)!=="dyke"?!1:n>0&&Cs(e[n-1].text)==="van"}function Nu(e){for(let t=0;t<e.length-1;t++)if(/^h+e+i+l+$/.test(e[t])&&/^h+i+t+l+e+r+$/.test(e[t+1]))return!0;return!1}function Fu(e,t=!0){const n=Ru(e);if(Du(n,t))return!0;const s=Wu(n),o=s.map(a=>Uu(a.text)),i=s.map(a=>wa(a.text));if(Vu(i)||t&&Nu(i))return!0;for(let a=0;a<o.length;a++)if(!(t&&(Qu(s,i,a)||Zu(s,i,a))))for(let r=0;r<o[a].length;r++){const l=Pu(o[a][r]);for(let c=0;c<l.length;c++)if(eo(l[c].replace(/\*/g,""),t))return!0}for(let a=0;a<s.length;a++){let r="",l=0,c=!1,d=!1;for(let f=a;f<s.length&&f<a+8;f++){if(f>a){const g=s[f].gap,h=s[f-1].text;if(g==="punct"||g==="start"||h.endsWith("!")||s[f].text.startsWith("!")||g!=="space"&&g!=="hyphen")break}if(r+=wa(s[f].text),Iu(s[f].text)&&l++,Hu(s[f].text)&&(c=!0),nf(s[f].text)&&(d=!0),f!==a&&!(c&&l<2&&!d)&&eo(r,t)){if(t&&qu(s,a,f))break;return!0}}}return!1}function sf(e,t,n,s=!1){if(typeof e!="string")return{ok:!1,reason:"empty"};const o=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return o?o.length>t?{ok:!1,reason:"long"}:Fu(o,!s)?{ok:!1,reason:n}:{ok:!0,text:o}:{ok:!1,reason:"empty"}}function ju(e,t=lc){return sf(e,t,"words")}const or={long:"That is a bit long!",link:"No links, please!",contact:"Keep numbers and contact info secret!",personal:"Keep personal info secret!",words:"Let's use kind words!",mail:"Oops, try different words!",empty:""},of={};for(const e of["АA","аa","ВB","вb","ЕE","еe","КK","кk","МM","мm","НH","нh","ОO","оo","РP","рp","СC","сc","ТT","тt","УY","уy","ХX","хx","ІI","іi","ЈJ","јj","ЅS","ѕs","ЁE","ёe","ЇI","їi","ΑA","ΕE","ΖZ","ΗH","ΙI","ΚK","ΜM","ΝN","ΟO","ΡP","ΤT","ΥY","ΧX","αa","εe","ζz","ιi","κk","νv","οo","ρp","τt","υu","χx"])of[e[0]]=e[1];function Gu(e){let t="";for(const n of e)t+=of[n]??n;return t}function Yu(e){return Gu(String(e).normalize("NFKC")).replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff\p{M}]/gu,"").replace(/[\p{Extended_Pictographic}\p{S}\p{P}]+/gu,"").replace(/\s+/g," ").trim()}function Ku(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(()=>{const e=[...new Set(pu.map(t=>Yu(t)).filter(t=>t.length>=2))].sort((t,n)=>n.length-t.length);return new RegExp(`(^|[^A-Za-z])(?:${e.map(Ku).join("|")})(?![A-Za-z])`,"gi")})();const xd=(e,t,n)=>typeof e=="number"&&Number.isFinite(e)?Math.max(t,Math.min(n,e)):null,Xu=(e,t,n=80)=>typeof e=="string"&&e.length<=n&&t.test(e)?e:null,Ju=/^#[0-9a-fA-F]{3,8}$/,em=["little","kid","adult"];function tm(e){if(!e||typeof e!="object")return null;const t={};for(const n of["skin","hair","shirt","pants"])if(n in e){const s=Xu(e[n],Ju,9);if(!s)return null;t[n]=s}if("hairStyle"in e){const n=xd(e.hairStyle,0,3);if(n===null)return null;t.hairStyle=Math.round(n)}if("acc"in e){const n=xd(e.acc,0,3);if(n===null)return null;t.acc=Math.round(n)}if("size"in e){if(!em.includes(e.size))return null;t.size=e.size}if("flip"in e){if(typeof e.flip!="boolean")return null;t.flip=e.flip}return"look2"in e&&(t.look2=gi(e.look2)??null),Object.keys(t).length?t:null}function mi(e){const t=Yn({id:"x"}),n=tm({skin:e?.skin,hair:e?.hair,hairStyle:e?.hairStyle,shirt:e?.shirt,pants:e?.pants,size:e?.size,acc:e?.acc})??{},s=i=>n[i]??t[i],o={skin:s("skin"),hair:s("hair"),hairStyle:s("hairStyle"),shirt:s("shirt"),pants:s("pants"),size:s("size"),acc:s("acc")};if(e&&typeof e=="object"&&"look2"in e){const i=gi(e.look2);i&&(o.look2=i)}return o}const Md=4,nm=["Mittens","Luna","Biscuit","Pumpkin","Whiskers","Mochi","Pepper","Noodle","Ginger","Socks"],sm=["Buddy","Coco","Max","Daisy","Peanut","Rocket","Bella","Waffles","Scout","Honey"];function af(e){const t=String(e??"").normalize("NFC").replace(/\s+/g," ").trim();return!/^[\p{L}\p{N}][\p{L}\p{N}' -]{0,13}$/u.test(t)||(t.match(/\d/g)??[]).length>2?null:Mu(t).ok?t:null}function om(e,t=[]){return sf(e,In,"mail")}function rf(e){return typeof e.freeMail=="boolean"?e.freeMail:e.freeChat}const cc=2900,fl=[{kind:"swing",x:430,y:500},{kind:"swing",x:570,y:500},{kind:"blanket",x:1730,y:548},{kind:"blanket",x:1850,y:548},{kind:"bench",x:2025,y:512},{kind:"bench",x:2105,y:512},{kind:"bench",x:2225,y:512},{kind:"bench",x:2305,y:512}],he={top:{x:905,y:330},bottom:{x:1110,y:545},ladder:850},rt={x0:2440,x1:2840,y0:470,y1:585},im=(e,t)=>e.where===t.where&&(e.where!=="house"||e.houseId===t.houseId&&e.room===t.room),am=(e,t)=>im(e,t)&&Math.abs(e.x-t.x)<=mu&&Math.abs(e.y-t.y)<=yu;function zi(e){try{return ac(e)}catch{return e}}const gl=qt("cozy-hood"),io=()=>{try{return JSON.parse(localStorage.getItem(gl)??"null")}catch{return null}},xn=e=>{e?localStorage.setItem(gl,JSON.stringify(e)):localStorage.removeItem(gl)};function ir(){const e=new URLSearchParams(location.search).get("hood");return e?e.replace(/\/$/,""):"https://cozy-hood-preview.andrewmunruh.workers.dev".replace(/\/$/,"")}async function rm(e){const t=await fetch(e+"/api/create",{method:"POST"});if(!t.ok)throw new Error("create failed "+t.status);return t.json()}async function lm(e,t){const n=await fetch(`${e}/api/hood/${encodeURIComponent(t)}`);if(n.status===429)return{slow:!0};if(!n.ok)throw new Error("lookup failed");return n.json()}const Ld=e=>e.type==="item/move"?"im:"+e.id:e.type==="char/move"?"cm:"+e.id:e.type==="item/size"?"is:"+("id"in e?e.id:""):null;class ar{constructor(t){this.cfg=t,this.ws=null,this.pid="",this.settings={freeChat:!0},this.players=new Map,this.houses=new Map,this.presence=new Map,this.status="offline",this.speaksSit=!1,this.speaksBaby=!1,this.replaced=!1,this.ranch={plots:[],skew:0},this.tables=new Map,this.handlers=new Map,this.cid=1,this.flushT=0,this.presT=0,this.lastPres=null,this.presDirty=!1,this.closedByUs=!1,this.retry=0,this.retryT=0,this.epoch=0,this.stableT=0,this.outbox=[]}on(t,n){(this.handlers.get(t)??this.handlers.set(t,[]).get(t)).push(n)}emit(t,...n){this.handlers.get(t)?.forEach(s=>s(...n))}send(t){return this.ws?.readyState!==WebSocket.OPEN?!1:(this.ws.send(JSON.stringify(t)),!0)}reliable(t){this.send(t)||(t.t==="lock"?this.outbox=this.outbox.filter(n=>!(n.t==="lock"&&n.houseId===t.houseId)):(t.t==="look"||t.t==="dog")&&(this.outbox=this.outbox.filter(n=>n.t!==t.t)),this.outbox.push(t),this.outbox.length>8&&this.outbox.splice(0,this.outbox.length-8))}flushOutbox(){if(this.ws?.readyState!==WebSocket.OPEN||!this.outbox.length)return;const t=this.outbox;this.outbox=[];for(const n of t)this.send(n)||this.outbox.push(n)}scheduleRetry(){if(this.closedByUs||this.replaced||!this.cfg.token||this.retryT)return;const t=this.epoch,n=Math.min(15e3,400*2**Math.min(this.retry,6));this.retry++,this.retryT=window.setTimeout(()=>{this.retryT=0,!(t!==this.epoch||this.closedByUs||this.replaced||!this.cfg.token)&&this.connect()},n)}armStable(){this.stableT&&clearTimeout(this.stableT),this.stableT=window.setTimeout(()=>{this.stableT=0,this.retry=0},1e4)}clearStable(){this.stableT&&(clearTimeout(this.stableT),this.stableT=0)}connect(t){this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.closedByUs=!1,this.replaced=!1,this.status="connecting",this.emit("status",this.status);const n=this.ws;return new Promise(s=>{let o=!1;const i=r=>{o||(o=!0,s(r))},a=new WebSocket(this.cfg.url.replace(/^http/,"ws")+"/ws/"+encodeURIComponent(this.cfg.id??this.cfg.code));if(this.ws=a,n&&n!==a)try{n.close()}catch{}a.onopen=()=>{t&&!this.cfg.token?this.send({t:"join",...t,v:Md,pet:1,mail:1,sit:1,fit:1,baby:1}):this.cfg.token?this.send({t:"hello",token:this.cfg.token,v:Md,pet:1,mail:1,sit:1,fit:1,baby:1}):i("notoken")},a.onmessage=r=>{const l=JSON.parse(r.data);this.handle(l),l.t==="welcome"&&(this.armStable(),i("ok")),l.t==="error"&&i(l.code+(l.msg?":"+l.msg:"")),l.t==="removed"&&i("removed")},a.onclose=r=>{if(this.ws===a){if(this.clearStable(),this.ws=null,this.status="offline",i("closed"),r.code===4e3){this.replaced=!0,this.emit("status",this.status),this.emit("replaced");return}this.emit("status",this.status),this.scheduleRetry()}},a.onerror=()=>{}})}close(){this.closedByUs=!0,this.replaced=!1,this.epoch++,this.outbox=[],this.clearStable(),this.retryT&&(clearTimeout(this.retryT),this.retryT=0),this.presT&&(clearTimeout(this.presT),this.presT=0);try{this.ws?.close()}catch{}this.ws=null,this.status="offline",clearInterval(this.flushT)}handle(t){switch(t.t){case"joined":this.cfg.token=t.token,this.cfg.pid=t.pid,xn(this.cfg);break;case"welcome":this.pid=t.pid,this.settings=t.settings,this.status="online",this.speaksSit=t.sit===1,this.speaksBaby=t.baby===1,this.players=new Map(t.players.map(n=>[n.pid,n]));{const n=this.houses;this.houses=new Map;for(const s of t.houses){const{state:o,...i}=s,a=n.get(s.id);this.houses.set(s.id,{meta:i,confirmed:zi(o),pending:a?a.pending.filter(r=>!r.sent):[],view:null})}}this.presence=new Map(Object.entries(t.presence)),this.presence.delete(this.pid),t.ranch&&(this.ranch={plots:t.ranch.plots,skew:t.ranch.now-Date.now()});{const n=new Map;for(const s of t.tables??[])n.set(s.tb,this.stampTable(s));this.tables=n}clearInterval(this.flushT),this.flushT=window.setInterval(()=>this.flush(),60),this.lastPres&&(this.presDirty=!0),this.flushPres(),this.flushOutbox(),this.emit("welcome"),this.emit("status",this.status);break;case"act":{const n=this.houses.get(t.houseId);if(!n)return;n.confirmed=ua(zi(n.confirmed),t.action);const s=t.by===this.pid&&n.pending[0]?.cid===t.cid;s&&n.pending.shift(),n.view=null,s||this.emit("act",t.houseId,t.action);break}case"nack":{const n=this.houses.get(t.houseId);if(!n)return;n.pending=n.pending.filter(s=>s.cid!==t.cid),t.state&&(n.confirmed=zi(t.state)),n.view=null,this.emit("reset",t.houseId,t.reason);break}case"pres":t.pid!==this.pid&&(t.p?this.presence.set(t.pid,t.p):this.presence.delete(t.pid),this.emit("pres",t.pid));break;case"players":this.players=new Map(t.players.map(n=>[n.pid,n])),this.emit("players");break;case"house":{const{state:n,...s}=t.house;this.houses.set(s.id,{meta:s,confirmed:zi(n),pending:[],view:null}),this.emit("houses");break}case"houseMeta":{const n=this.houses.get(t.meta.id);n&&(n.meta=t.meta,this.emit("houses"),this.emit("houseMeta",t.meta.id));break}case"houseGone":this.houses.delete(t.houseId),this.emit("houses"),this.emit("houseGone",t.houseId);break;case"settings":this.settings=t.settings,this.emit("settings");break;case"bubble":this.emit("bubble",t.pid,t.b);break;case"fx":this.emit("fx",t.pid,t.fx);break;case"ranch":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch");break;case"ranchFail":this.ranch={plots:t.plots,skew:t.now-Date.now()},this.emit("ranch"),this.emit("ranchFail",t.reason);break;case"noride":this.emit("noride",t.ride);break;case"table":{const n=this.stampTable(t.table);this.tables.set(n.tb,n),this.emit("table",n);break}case"tblFail":this.emit("tblFail",t.tb,t.reason);break;case"sayFail":this.emit("sayFail",t.reason);break;case"mailbox":{const n=this.houses.get(t.houseId);if(!n)return;if(t.mailbox?.letters?.length)n.confirmed={...n.confirmed,mailbox:t.mailbox};else{const{mailbox:s,...o}=n.confirmed;n.confirmed=o}n.view=null,this.emit("mailbox",t.houseId);break}case"mailFail":this.emit("mailFail",t.reason);break;case"parentInfo":this.emit("parentInfo",t);break;case"error":this.emit("error",t.code),t.code==="badtoken"&&(this.cfg.token=void 0,this.cfg.pid=void 0,xn(this.cfg));break;case"removed":this.closedByUs=!0,this.emit("removed");break}}stampTable(t){const n=this.tables.get(t.tb),s=n&&n.away===t.away&&n.receivedAt?n.receivedAt:Date.now();return{...t,receivedAt:s}}view(t){const n=this.houses.get(t);return n?n.view??=n.pending.reduce((s,o)=>ua(s,o.action),n.confirmed):null}myHouseId(){return this.players.get(this.pid)?.houseId??""}canEdit(t){const n=this.houses.get(t);return!!n&&(!n.meta.locked||n.meta.ownerId===this.pid)}dispatch(t,n){const s=this.houses.get(t);if(!s)return;const o=Ld(n),i=s.pending[s.pending.length-1];o&&i&&!i.sent&&Ld(i.action)===o?i.action=n:s.pending.push({cid:this.cid++,action:n,sent:!1}),s.view=null}flush(){for(const[t,n]of this.houses)for(const s of n.pending)!s.sent&&this.send({t:"act",houseId:t,cid:s.cid,action:s.action})&&(s.sent=!0);this.flushPres()}setPresence(t){this.lastPres=t,this.presDirty=!0,this.presT||this.flushPres()}flushPres(){if(!(!this.presDirty||!this.lastPres)){if(!this.send({t:"pres",p:this.lastPres})){!this.closedByUs&&!this.presT&&(this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90));return}this.presDirty=!1,this.presT&&clearTimeout(this.presT),this.presT=window.setTimeout(()=>{this.presT=0,this.flushPres()},90)}}myPresence(){return this.lastPres}say(t){this.reliable({t:"say",b:t})}lock(t,n){this.reliable({t:"lock",houseId:t,locked:n})}setLook(t){this.reliable({t:"look",look:t});const n=this.players.get(this.pid);n&&(n.look=t)}setDog(t){this.reliable({t:"dog",dog:t});const n=this.players.get(this.pid);n&&(n.dog=t)}fx(t){this.reliable({t:"fx",fx:t})}ranchOp(t){this.reliable({t:"ranch",o:t})}tbl(t){this.reliable({t:"tbl",...t})}sendMail(t,n,s,o){this.reliable({t:"mail",op:"send",houseId:t,text:n,color:s,sticker:o})}readMail(t,n){this.reliable({t:"mail",op:"read",houseId:t,id:n})}dropMail(t,n){this.reliable({t:"mail",op:"drop",houseId:t,id:n})}now(){return Date.now()+this.ranch.skew}parent(t){this.cfg.parentKey&&this.reliable({t:"parent",key:this.cfg.parentKey,...t})}}function cm(e,t,n,s="living"){let o=s;const i=[],a=()=>({...e.view(t),currentRoom:o,soundOn:n.get()}),r=l=>{if(e.houses.has(t)){const c=a();i.forEach(d=>d(c,l))}};return e.on("act",(l,c)=>{l===t&&r(c)}),e.on("reset",l=>{l===t&&r({type:"game/reset"})}),{houseId:t,get:a,subscribe(l){i.push(l)},dispatch(l){if(l.type==="room/switch")o=l.room;else if(l.type==="settings/sound")n.set(l.on);else{if(l.type==="game/reset")return;if(!e.canEdit(t)||l.type.startsWith("baby/")&&!e.speaksBaby)return;e.dispatch(t,l)}r(l)}}}const Ke="#5a3d5c",oe=`stroke="${Ke}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,hl=[{name:"Tabby",body:"#ffb26b",stripe:"#e8893a",belly:"#ffe3c4"},{name:"Smokey",body:"#b9b6c9",stripe:"#8f8ba3",belly:"#ecebf3"},{name:"Tuxedo",body:"#4f4660",stripe:"",belly:"#ffffff"},{name:"Calico",body:"#fff6ec",stripe:"",belly:"#fff6ec"}],ul=[{name:"Pup",body:"#f2d0a4",ear:"#b07d54",snout:"#fbe7cc"},{name:"Poodle",body:"#fff0f6",ear:"#ffc8dd",snout:"#fff7fb"},{name:"Dachshund",body:"#c07a45",ear:"#7d4a26",snout:"#d99a68"},{name:"Golden",body:"#f4b860",ear:"#e09a3e",snout:"#fbd9a0"},{name:"Spotty",body:"#ffffff",ear:"#4a3f52",snout:"#ffffff"}],dm=(e,t,n,s=!1)=>s?`<path d="M${e-3} ${n} q3 3 6 0 M${t-3} ${n} q3 3 6 0" fill="none" ${oe} stroke-width="2.5"/>`:`<circle cx="${e}" cy="${n}" r="2.8" fill="${Ke}"/><circle cx="${t}" cy="${n}" r="2.8" fill="${Ke}"/><circle cx="${e+.9}" cy="${n-.9}" r=".9" fill="#fff"/><circle cx="${t+.9}" cy="${n-.9}" r=".9" fill="#fff"/>`,ml=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="4" ry="2.4" fill="#ff9bb5" opacity=".75"/>`;function ao(e,t="stand"){const n=hl[e]??hl[0],s="#ffb3c6",o=(i,a,r,l)=>`
    <path d="M${i-13} ${a-8} L${i-10} ${a-25} L${i-1} ${a-13} Z" fill="${n.body}" ${oe}/><path d="M${i-10.5} ${a-11} L${i-9.5} ${a-20} L${i-4} ${a-13} Z" fill="${s}"/>
    <path d="M${i+1} ${a-13} L${i+11} ${a-26} L${i+13} ${a-7} Z" fill="${e===3?"#f4a259":n.body}" ${oe}/><path d="M${i+4} ${a-13} L${i+10} ${a-21} L${i+11} ${a-11} Z" fill="${s}"/>
    <circle cx="${i}" cy="${a}" r="${r}" fill="${n.body}" ${oe}/>
    ${e===3?`<path d="M${i+2} ${a-r+1} a${r} ${r} 0 0 1 ${r-3} ${r-2} q-6 2 -${r-3} -${r-3}z" fill="#f4a259"/>`:""}
    ${e===2?`<ellipse cx="${i+2}" cy="${a+7}" rx="9" ry="7" fill="#fff"/>`:""}
    ${n.stripe?`<path d="M${i-4} ${a-r+2} v5 M${i+2} ${a-r+1} v6 M${i+8} ${a-r+3} v4" ${oe} stroke="${n.stripe}" stroke-width="2.5"/>`:""}
    ${dm(i-4,i+7,a,l)}
    <path d="M${i+3} ${a+4} l-2.5 -2 h5 z" fill="#ff8fab"/><path d="M${i+.5} ${a+6} q2.5 2.5 5 0" fill="none" ${oe} stroke-width="2"/>
    ${ml(i-8,a+5)}${ml(i+12,a+5)}
    <path d="M${i+r-2} ${a+3} l9 -2 M${i+r-2} ${a+6} l9 2" ${oe} stroke-width="1.6"/>`;return t==="nap"?`<svg viewBox="0 0 120 100" class="catsvg nap">
    <g class="breathe"><path class="tail" d="M28 84 Q22 96 64 94" fill="none" stroke="${Ke}" stroke-width="11" stroke-linecap="round"/><path d="M28 84 Q22 96 64 94" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="58" cy="76" rx="36" ry="18" fill="${n.body}" ${oe}/>
    ${e===3?'<ellipse cx="44" cy="72" rx="12" ry="8" fill="#f4a259"/><ellipse cx="66" cy="70" rx="9" ry="6" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M44 62 q3 6 0 12 M56 61 q3 6 0 12 M68 62 q3 6 0 11" fill="none" ${oe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    ${o(90,76,15,!0)}</g></svg>`:t==="sit"?`<svg viewBox="0 0 120 100" class="catsvg sit">
    <path class="tail" d="M50 92 Q18 96 24 70" fill="none" stroke="${Ke}" stroke-width="11" stroke-linecap="round"/><path class="tail" d="M50 92 Q18 96 24 70" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="64" cy="70" rx="20" ry="25" fill="${n.body}" ${oe}/>
    <ellipse cx="70" cy="74" rx="10" ry="15" fill="${n.belly}"/>
    ${e===3?'<ellipse cx="54" cy="66" rx="9" ry="12" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M50 60 q5 2 4 8 M49 72 q5 2 4 8" fill="none" ${oe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    <rect x="62" y="74" width="9" height="21" rx="4.5" fill="${n.body}" ${oe}/><rect x="74" y="74" width="9" height="21" rx="4.5" fill="${n.body}" ${oe}/>
    ${e===2?'<ellipse cx="66.5" cy="93" rx="4" ry="2.5" fill="#fff"/><ellipse cx="78.5" cy="93" rx="4" ry="2.5" fill="#fff"/>':""}
    ${o(72,36,17,!1)}</svg>`:`<svg viewBox="0 0 120 100" class="catsvg stand">
    <path class="tail" d="M32 58 Q8 54 12 26" fill="none" stroke="${Ke}" stroke-width="11" stroke-linecap="round"/><path class="tail" d="M32 58 Q8 54 12 26" fill="none" stroke="${n.body}" stroke-width="6" stroke-linecap="round"/>
    <rect class="leg b" x="34" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${oe}/><rect class="leg a" x="74" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${oe}/>
    <ellipse cx="58" cy="58" rx="32" ry="17" fill="${n.body}" ${oe}/>
    <ellipse cx="64" cy="66" rx="20" ry="7" fill="${n.belly}"/>
    ${e===3?'<ellipse cx="46" cy="52" rx="12" ry="9" fill="#f4a259"/><ellipse cx="68" cy="50" rx="9" ry="7" fill="#5a4a52"/>':""}
    ${n.stripe?`<path d="M44 43 q3 6 0 12 M56 42 q3 6 0 12 M68 43 q3 6 0 11" fill="none" ${oe} stroke="${n.stripe}" stroke-width="3"/>`:""}
    <rect class="leg a" x="44" y="64" width="9" height="30" rx="4.5" fill="${n.body}" ${oe}/><rect class="leg b" x="84" y="62" width="9" height="32" rx="4.5" fill="${n.body}" ${oe}/>
    ${e===2?'<ellipse cx="48.5" cy="92" rx="4" ry="2.5" fill="#fff"/><ellipse cx="88.5" cy="92" rx="4" ry="2.5" fill="#fff"/>':""}
    ${o(90,40,17,!1)}</svg>`}function oi(e,t="stand"){const n=ul[e]??ul[0],s=t==="sleep",o=e===2,i=e===1,a=e===3,r=e===4,l=o?66:58,c=o?70:62,d=94-c,f=o?102:92,g=o?50:40,h=(x,R)=>i?`<rect class="leg ${R}" x="${x+2}" y="${c}" width="6" height="${d}" rx="3" fill="${n.body}" ${oe}/><circle class="leg ${R}" cx="${x+5}" cy="91" r="6" fill="${n.body}" ${oe}/>`:`<rect class="leg ${R}" x="${x}" y="${c}" width="10" height="${d}" rx="5" fill="${n.body}" ${oe}/>`,m=i?`<circle cx="44" cy="58" r="15" fill="${n.body}" ${oe}/><circle cx="70" cy="56" r="17" fill="${n.body}" ${oe}/><ellipse cx="57" cy="58" rx="22" ry="12" fill="${n.body}"/>`:`<ellipse cx="${o?62:58}" cy="${l}" rx="${o?42:32}" ry="${o?13:17}" fill="${n.body}" ${oe}/>`,b=r?`<circle cx="46" cy="54" r="5" fill="${Ke}"/><circle cx="64" cy="62" r="4" fill="${Ke}"/><circle cx="72" cy="50" r="3.5" fill="${Ke}"/><circle cx="38" cy="64" r="3" fill="${Ke}"/>`:"",_=i?`<g class="tail"><path d="M30 52 L22 38" ${oe}/><circle cx="21" cy="34" r="7" fill="${n.body}" ${oe}/></g>`:a?`<path class="tail" d="M30 52 Q10 50 14 30 Q20 40 30 46" fill="${n.body}" ${oe}/>`:`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${Ke}" stroke-width="9" stroke-linecap="round"/>`,y=!i&&!a?`<path class="tail" d="M30 52 Q16 44 18 30" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`:"",u=`
    ${i?`<circle cx="${f-2}" cy="${g-16}" r="10" fill="${n.body}" ${oe}/>`:""}
    <circle cx="${f}" cy="${g}" r="17" fill="${n.body}" ${oe}/>
    ${r?`<circle cx="${f-6}" cy="${g-8}" r="4" fill="${Ke}"/>`:""}
    <ellipse cx="${f+13}" cy="${g+7}" rx="11" ry="8" fill="${n.snout}" ${oe}/>
    <circle cx="${f+22}" cy="${g+4}" r="4" fill="${Ke}"/>
    <path d="M${f+14} ${g+12} q4 3 8 0" fill="none" ${oe} stroke-width="2"/>
    ${s?"":`<path class="tongue" d="M${f+16} ${g+13} q2 7 6 0" fill="#ff8fab" ${oe} stroke-width="2"/>`}
    ${s?`<path d="M${f+2} ${g-4} q3 3 6 0" fill="none" ${oe} stroke-width="2.4"/>`:`<circle cx="${f+5}" cy="${g-3}" r="3" fill="${Ke}"/><circle cx="${f+6}" cy="${g-4}" r="1" fill="#fff"/>`}
    ${ml(f+2,g+8)}
    ${i?`<circle cx="${f-9}" cy="${g+8}" r="9" fill="${n.ear}" ${oe}/>`:`<ellipse class="ear" cx="${f-9}" cy="${g+4}" rx="7" ry="${a||o?14:12}" fill="${n.ear}" ${oe} transform="rotate(12 ${f-9} ${g+4})"/>`}
    <path d="M${f-12} ${g+14} q10 6 20 2" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round"/><circle cx="${f-1}" cy="${g+19}" r="3" fill="#ffd166" ${oe} stroke-width="1.5"/>`,k=i?`<g class="tail"><path d="M42 86 L28 80" ${oe}/><circle cx="25" cy="78" r="7" fill="${n.body}" ${oe}/></g>`:`<path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${Ke}" stroke-width="9" stroke-linecap="round"/><path class="tail" d="M42 88 Q24 90 24 74" fill="none" stroke="${n.body}" stroke-width="4.5" stroke-linecap="round"/>`;return t==="sit"||t==="sleep"?`<svg viewBox="0 0 130 100" class="dogsvg ${s?"sleep":"sit"}">${k}
    <ellipse cx="60" cy="70" rx="22" ry="24" fill="${n.body}" ${oe}/>${r?`<circle cx="54" cy="66" r="5" fill="${Ke}"/><circle cx="64" cy="80" r="4" fill="${Ke}"/>`:""}
    ${h(62,"a")}${h(74,"b")}<g transform="translate(-22 -2)">${u}</g></svg>`:`<svg viewBox="0 0 130 100" class="dogsvg stand">${_}${y}
    ${h(o?30:34,"b")}${h(o?82:72,"a")}
    ${m}${b}
    ${h(o?42:46,"a")}${h(o?94:84,"b")}
    ${u}</svg>`}const lf=e=>{let t=2166136261;for(const n of e)t^=n.charCodeAt(0),t=Math.imul(t,16777619);return t>>>0},gs=(e,t)=>{let n=(e^Math.imul(t,2654435761))>>>0;return n^=n>>>15,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),n^=n>>>16,(n>>>0)/4294967296},Ed=18,pm={1:.35,2:.6};function fm(e,t,n){return e-t*pm[n]}function gm(e,t){const s=Math.floor(t/1e3/2.8);return gs(lf(e||"pup"),s)<.62?"rest":"peek"}function hm(e,t,n,s,o=!1){const i=lf(e.name+":"+e.coat+":"+e.room+":"+Math.round(e.x)+(n?":t"+Math.round(n.x):"")),a=t/1e3,r=Math.floor(a/Ed),l=a-r*Ed;if(!n){const y=le=>Math.max(160,Math.min(2240,e.x+(gs(i,le)-.5)*760)),u=y(r-1);let k=y(r);const x=gs(i+7,r),R=x<.45?"nap":x<.75?"sit":"groom",H=!!(s&&R==="nap"&&gs(i+13,r)<.72);H&&s&&(k=Math.max(160,Math.min(2240,s.x)));const I=Math.abs(k-u),K=Math.min(5,I/110);return l<K&&!o?{x:u+(k-u)*(l/K),mood:"walk",flip:k<u,perch:0,curl:0}:{x:k,mood:R,flip:k<u,perch:0,curl:H?1:0}}const c=Math.max(160,Math.min(2240,n.x)),d=gs(i+5,r)<.45?2:1,f=Math.max(160,Math.min(2240,c+(gs(i,r)-.5)*420)),g=Math.abs(c-f),h=Math.min(4.2,Math.max(.6,g/160)),m=c<f;if(l<h&&!o)return{x:f+(c-f)*(l/h),mood:"walk",flip:m,perch:0,curl:0};const b=gs(i+11,r),_=b<.34?"nap":b<.67?"sit":"play";return{x:c,mood:_,flip:m,perch:d,curl:0}}const ba="#5a3d5c",Be=`stroke="${ba}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`,_o=[`<svg viewBox="0 0 48 48"><path d="M24 40 C16 32 6 26 10 16 C14 8 24 12 24 20 C24 12 34 8 38 16 C42 26 32 32 24 40 Z" fill="#ff6b9a" ${Be}/></svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l5 12 13 1 -10 8 3 13 -11 -7 -11 7 3 -13 -10 -8 13 -1z" fill="#ffd166" ${Be}/></svg>`,`<svg viewBox="0 0 48 48"><circle cx="24" cy="22" r="6" fill="#ff8fab" ${Be}/>${[0,60,120,180,240,300].map(e=>`<circle cx="${24+Math.cos(e*Math.PI/180)*12}" cy="${22+Math.sin(e*Math.PI/180)*12}" r="5" fill="#ffd166" ${Be}/>`).join("")}<path d="M24 34 V44" ${Be}/></svg>`,`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="30" rx="14" ry="10" fill="#ffb26b" ${Be}/><circle cx="34" cy="20" r="8" fill="#ffc46b" ${Be}/><path d="M28 14 L30 6 L36 14" fill="#ffb26b" ${Be}/><circle cx="32" cy="19" r="1.4" fill="${ba}"/><circle cx="37" cy="19" r="1.4" fill="${ba}"/></svg>`,`<svg viewBox="0 0 48 48">${["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7"].map((e,t)=>`<path d="M8 ${30-t*4} Q24 ${10-t*3} 40 ${30-t*4}" fill="none" stroke="${e}" stroke-width="4"/>`).join("")}</svg>`,`<svg viewBox="0 0 48 48"><path d="M24 6 l3 10 10 1 -8 6 3 10 -8 -5 -8 5 3 -10 -8 -6 10 -1z" fill="#fff3b0" ${Be}/><circle cx="12" cy="34" r="3" fill="#ff8fab" ${Be}/><circle cx="36" cy="36" r="2.4" fill="#bde0fe" ${Be}/></svg>`];function Cd(e){const t=e?`<g class="flag"><path d="M30 16 V6" ${Be}/><path d="M30 6 H42 L38 11 L42 16 H30 Z" fill="#ff6b6b" ${Be}/></g>`:`<g class="flag"><path d="M18 28 H28" ${Be}/><path d="M18 22 H28 L25 25 L28 28 H18 Z" fill="#ffd166" ${Be}/></g>`;return`<svg viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="68" rx="18" ry="3" fill="#000" opacity=".12"/>
    <rect x="30" y="40" width="5" height="26" rx="2" fill="#c99366" ${Be}/>
    <path d="M8 40 V22 Q8 8 32 8 Q56 8 56 22 V40 Z" fill="#8ecae6" ${Be}/>
    <path d="M8 28 H56" ${Be}/>
    <rect x="14" y="32" width="36" height="16" rx="4" fill="#fff6e6" ${Be}/>
    <circle cx="32" cy="40" r="3" fill="${ba}"/>
    ${t}
  </svg>`}function um(e,t=[]){const n=om(e,t);return n.ok?{ok:!0,text:n.text}:{ok:!1,msg:n.reason==="empty"?"Write a little note!":or[n.reason]||"Oops, try different words!"}}const mm={...or,empty:"Write a little note!",slow:"Let's wait a moment!",full:"This mailbox is full!",notyours:"Only she can open her mail.",nohouse:"That house is not on the street.",gone:"That letter is already gone.",toobig:"The mailbox is too full!",presetsOnly:"Typing is turned off: pick a phrase!",unread:"She still has your letters! Wait until she reads them."};function ym(e){return mm[e]||"Let's try that again!"}function wm(e){let t="",n="",s=!1,o="",i=0,a=0,r=-1,l="",c="";const d=()=>document.getElementById("mailCue");d()?.addEventListener("click",()=>{e.openOwn()});function f(){t="",n="",document.getElementById("mailSheet")?.remove()}function g(){let y=document.getElementById("mailSheet");return y||(y=document.createElement("div"),y.id="mailSheet",y.className="sheet mailSheet",y.innerHTML='<div class="card" id="mailCard"></div>',document.body.appendChild(y),y.addEventListener("click",u=>{const k=u.target;if(k===y||k.closest('[data-m="close"]')){f();return}m(k)}),y.addEventListener("input",u=>{const k=u.target;if(k.id!=="mailText")return;const x=document.getElementById("mailCount");x&&(x.textContent=`${k.value.length}/${In}`)})),y}function h(){if(!t)return;const y=g().querySelector("#mailText")?.value??"",u=e.mine(t),k=e.lettersOf(t),x=e.houseName(t),R=g().querySelector("#mailCard");if(n&&u&&!s){const I=k.find(K=>K.id===n);if(I&&I.text){b(I);return}n=""}if(s||!u){const I=e.freeType(),K=o?`Reply to ${e.houseName(o)||"your friend"}`:u?"Leave a letter":`Letter for ${x}`,le=I?`<textarea id="mailText" class="mailBox" maxlength="${In}" placeholder="Hi! Come play!"></textarea>
        <div class="mailCount" id="mailCount">0/${In}</div>`:`<h3>Phrase</h3><div class="phrases mailPhrases">${Qo.map((G,pe)=>`<button type="button" data-phrase="${pe}" class="${pe===r?"on":""}">${pt(G)}</button>`).join("")}</div>`;R.innerHTML=`<button class="close" data-m="close">✕</button><h2>${pt(K)}</h2>
        <p class="hint">${I?"A short note. Your name goes on it for you.":"Pick a phrase. Your name goes on it for you."}</p>
        ${le}
        <h3>Paper</h3><div class="mailRow">${zn.map((G,pe)=>`<button class="swatch ${pe===i?"on":""}" data-color="${pe}" style="background:${G}" aria-label="Paper ${pe+1}"></button>`).join("")}</div>
        <h3>Sticker</h3><div class="mailRow">${_o.slice(0,Wp).map((G,pe)=>`<button class="stick ${pe===a?"on":""}" data-sticker="${pe}" aria-label="Sticker ${pe+1}">${G}</button>`).join("")}</div>
        ${l?`<p class="mailErr" id="mailErr">${pt(l)}</p>`:""}
        <button class="mailSend" id="mailSend" type="button">Send</button>
        ${u&&k.length?'<button class="mailRow" data-act="back" type="button" style="margin-top:8px">Back to my mail</button>':""}`;const ce=g().querySelector("#mailText");if(ce&&y){ce.value=y;const G=document.getElementById("mailCount");G&&(G.textContent=`${y.length}/${In}`)}return}const H=k.length?k.slice().reverse().map(I=>I.text?`<button type="button" class="letter ${I.read?"":"fresh"}" data-letter="${pt(I.id)}" style="background:${zn[I.color]??zn[0]}">
        <span class="sticker">${_o[I.sticker]??_o[0]}</span>
        <span class="who">${pt(I.from)}</span><span class="when">${pt(Tr(I.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${Be}/><path d="M4 8 L40 24 L76 8" fill="${zn[I.color]??"#fff"}" ${Be}/></svg>
      </button>`:`<div class="letter" style="background:${zn[I.color]??zn[0]}"><span class="who">Your letter</span><span class="when">${pt(Tr(I.at))}</span><span class="statusChip ${I.read?"read":""}">${I.read?"Read":"Delivered"}</span></div>`).join(""):'<p class="hint">No letters yet. Your flag pops up when one arrives!</p>';R.innerHTML=`<button class="close" data-m="close">✕</button><h2>${pt(x)} mailbox</h2>${H}
      <div class="mailRow"><button type="button" data-act="write">Write a letter</button></div>
      ${l?`<p class="mailErr">${pt(l)}</p>`:""}`}function m(y){const u=y.closest(".mailPhrases [data-phrase]");if(u){r=+u.dataset.phrase,l="",h();return}const k=y.closest("[data-color]");if(k){i=+k.dataset.color,h();return}const x=y.closest("[data-sticker]");if(x){a=+x.dataset.sticker,h();return}if(y.closest("#mailSend"))return _();const R=y.closest("[data-act]")?.dataset.act;if(R==="write"){s=!0,o="",n="",l="",h();return}if(R==="back"){s=!1,o="",n="",l="",h();return}if(R==="reply"){const ce=e.houseOf(y.closest("[data-from]")?.dataset.from??"");if(!ce){e.toast("They are not on the street anymore.");return}o=ce,s=!0,n="",l="",t=ce,h();return}if(R==="drop"){const ce=y.closest("[data-id]")?.dataset.id??"";if(c!==ce){c=ce,e.toast("Tap again to throw it away");return}c="",e.drop(t,ce);return}const H=y.closest("[data-letter]");if(!H)return;const I=H.dataset.letter,le=e.lettersOf(t).find(ce=>ce.id===I);le&&(!e.mine(t)||!le.text||(le.read||e.read(t,I),n=I,b(le)))}function b(y){const u=bm(y.text),k=g().querySelector("#mailCard");k.innerHTML=`<button class="close" data-m="close">✕</button>
      <div class="letter open read" style="background:${zn[y.color]??zn[0]}" data-id="${pt(y.id)}" data-from="${pt(y.fromPid)}">
        <span class="sticker">${_o[y.sticker]??_o[0]}</span>
        <span class="who">${pt(y.from)}</span><span class="when">${pt(Tr(y.at))}</span>
        <svg class="envelope" viewBox="0 0 80 36"><path d="M4 8 H76 V32 H4 Z" fill="#fff" ${Be}/><path class="flap" d="M4 8 L40 24 L76 8" fill="#fff" ${Be}/></svg>
        <p class="words">${pt(u??"")}</p>
        <span class="mailRow"><button type="button" data-act="reply">Reply</button><button type="button" class="throw" data-act="drop">${c===y.id?"Tap again":"Throw away"}</button></span>
      </div>
      <button type="button" data-act="back">All my mail</button>
      ${l?`<p class="mailErr">${pt(l)}</p>`:""}`}function _(){let y="";if(e.freeType()){const k=g().querySelector("#mailText")?.value??"",x=um(k);if(!x.ok){l=x.msg,h();const R=g().querySelector("#mailText");R&&(R.value=k);return}y=x.text}else{if(r<0||r>=Qo.length){l="Pick a phrase!",h();return}y=Qo[r]}const u=o||t;l="",e.send(u,y,i,a),e.toast("On its way!"),e.mine(u)?(s=!1,o="",t=u,h()):f()}return{open(y,u,k,x){t=y,n="",s=!k,o="",l="",c="",i=0,a=0,r=-1,h()},fail(y){l=ym(y),t?h():e.toast(l)},refresh(){t&&h()},syncCue(y){d()?.classList.toggle("show",y)}}}function bm(e){if(!e)return null;const t=e.normalize("NFKC").replace(/[\u0000-\u001f\u007f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/g,"").replace(/\s+/g," ").trim();return!t||t.length>In?null:t}function pt(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const cf=()=>qt("cozy-play");function vm(){try{return localStorage.getItem(cf())==="play"?"play":"decorate"}catch{return"decorate"}}function km(e){try{localStorage.setItem(cf(),e)}catch{}}function _m(e){return e==="kennel"?"kennel":e==="cat-tower"?"tower":e==="yard-swing"?"swing":e==="lamp"||/(^|:)lamp|starlamp|light/.test(e)?"lamp":e==="fridge"||e==="stove"||e==="vanity"||e==="bookshelf"||e==="window"||e==="mirror"||e==="tv"||/fridge|stove|cabinet|drawer|vanity/.test(e)?"open":go(e)?"sit":"wiggle"}const $m='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 22 V12 a3 3 0 0 1 6 0 V22" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M24 22 V10 a3 3 0 0 1 6 0 V24" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M30 24 V14 a3 3 0 0 1 6 0 V26" fill="#fff6e6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M14 22 V16 a3 3 0 0 0-6 0 V28 c0 8 6 14 16 14 h4 c8 0 12-5 12-12 V26" fill="#ffe0b8" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M34 8 l1.2 3 3 .4 -2.2 2 .6 3 -2.6-1.6 -2.6 1.6 .6-3 -2.2-2 3-.4z" fill="#ffd166" stroke="#5a3d5c" stroke-width="1.4"/></svg>',xm='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 34 L22 22 L30 30 L18 42 Q10 42 10 34 Z" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M22 22 L32 12 L38 18 L28 28 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 12 L36 6 L42 12 L38 18" fill="#c9a0dc" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M14 36 h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M8 14 l2 1 M40 34 l2 2 M8 40 l3 -1" stroke="#5a3d5c" stroke-width="2" stroke-linecap="round"/></svg>';function Mm(e,t){let n="decorate";const s=e.querySelector("#modePlay"),o=e.querySelector("#modeDecorate");s.querySelector(".modeIco").innerHTML=$m,o.querySelector(".modeIco").innerHTML=xm;const i=()=>{const c=n==="play";document.body.classList.toggle("mode-play",c),s.classList.toggle("on",c),o.classList.toggle("on",!c),s.setAttribute("aria-pressed",c?"true":"false"),o.setAttribute("aria-pressed",c?"false":"true")},a=(c,d)=>{n=c,d&&km(c),i(),t.onChange?.()};e.addEventListener("pointerdown",c=>c.stopPropagation()),e.addEventListener("click",c=>{const d=c.target.closest("[data-mode]");if(!d)return;const f=d.dataset.mode==="play"?"play":"decorate";a(f,t.ownHouse())}),i();let r=!1;return{mode:()=>n,isPlay:()=>n==="play",sync(c){a(c?vm():"play",!1)},hint:()=>{if(r||!document.body.classList.contains("phone"))return;const c=qt("cozy-mode-hint");try{if(localStorage.getItem(c)){r=!0;return}}catch{r=!0;return}r=!0;const d=document.createElement("p");d.className="modeHint",d.textContent="Play: tap things! Decorate: move things!",e.appendChild(d);let f=!1;const g=()=>{if(!f){f=!0,d.remove(),window.removeEventListener("pointerdown",g);try{localStorage.setItem(c,"1")}catch{}}};window.setTimeout(g,2800),d.addEventListener("click",g),window.addEventListener("pointerdown",g)}}}const df=new Map;let pf=!1;function ro(){return pf}function Lm(e){pf=e}function zs(e){return df.get(e)}function Em(e,t){df.set(e,t)}const Cm=!0;let Si=null;function zm(e){const t=new URLSearchParams(e.replace(/^\?/,"")).get("art");t==="v1"?Si=!1:t==="v2"?Si=!0:Si=null;const n=Si??Cm;return Lm(n),n}const va=Object.assign({"../../assets/art/any/armchair.webp":()=>p(()=>import("./armchair-DNUcj0LU.js"),[]).then(e=>e.default),"../../assets/art/any/ball.webp":()=>p(()=>import("./ball-CLPa09gM.js"),[]).then(e=>e.default),"../../assets/art/any/balloon.webp":()=>p(()=>import("./balloon-DUDI6dkT.js"),[]).then(e=>e.default),"../../assets/art/any/bookshelf.webp":()=>p(()=>import("./bookshelf-Cc9ub96u.js"),[]).then(e=>e.default),"../../assets/art/any/chair.webp":()=>p(()=>import("./chair-D596uoKG.js"),[]).then(e=>e.default),"../../assets/art/any/clock.webp":()=>p(()=>import("./clock-fvC-SFdk.js"),[]).then(e=>e.default),"../../assets/art/any/lamp.webp":()=>p(()=>import("./lamp-lkxZMSWs.js"),[]).then(e=>e.default),"../../assets/art/any/picture.webp":()=>p(()=>import("./picture-CnQHfmcC.js"),[]).then(e=>e.default),"../../assets/art/any/plant.webp":()=>p(()=>import("./plant-CsffKA5j.js"),[]).then(e=>e.default),"../../assets/art/any/rug.webp":()=>p(()=>import("./rug-BT3hv8Ty.js"),[]).then(e=>e.default),"../../assets/art/any/sofa.webp":()=>p(()=>import("./sofa-6tZenqTj.js"),[]).then(e=>e.default),"../../assets/art/any/table.webp":()=>p(()=>import("./table-CIvQSSIA.js"),[]).then(e=>e.default),"../../assets/art/any/tv.webp":()=>p(()=>import("./tv-BKQjbyQq.js"),[]).then(e=>e.default),"../../assets/art/any/window.webp":()=>p(()=>import("./window-CtZMy52w.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mat.webp":()=>p(()=>import("./bath-mat-CGqMmSpc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-mirror.webp":()=>p(()=>import("./bath-mirror-0G_LD9ek.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-stool.webp":()=>p(()=>import("./bath-stool-Cxq0W4Pr.js"),[]).then(e=>e.default),"../../assets/art/bathroom/bath-toilet.webp":()=>p(()=>import("./bath-toilet-D3I7IIUo.js"),[]).then(e=>e.default),"../../assets/art/bathroom/laundry-hamper.webp":()=>p(()=>import("./laundry-hamper-BkR0Wz0-.js"),[]).then(e=>e.default),"../../assets/art/bathroom/rubber-ducky.webp":()=>p(()=>import("./rubber-ducky-B3u_V1zb.js"),[]).then(e=>e.default),"../../assets/art/bathroom/shower-curtain.webp":()=>p(()=>import("./shower-curtain-CfLothKE.js"),[]).then(e=>e.default),"../../assets/art/bathroom/sink-vanity.webp":()=>p(()=>import("./sink-vanity-avyqYHvc.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soaking-tub.webp":()=>p(()=>import("./soaking-tub-C4H_s4uu.js"),[]).then(e=>e.default),"../../assets/art/bathroom/soap-dish.webp":()=>p(()=>import("./soap-dish-Dp5i3rho.js"),[]).then(e=>e.default),"../../assets/art/bathroom/towel-bar.webp":()=>p(()=>import("./towel-bar-B_pk-phm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/bed.webp":()=>p(()=>import("./bed-Cl9DoI6l.js"),[]).then(e=>e.default),"../../assets/art/bedroom/mirror.webp":()=>p(()=>import("./mirror-BmFhe6_i.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~alarm-clock.webp":()=>p(()=>import("./pack~alarm-clock-DsMqTNwb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bedtime-snack.webp":()=>p(()=>import("./pack~bedtime-snack-CwkMDndV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-monitor.webp":()=>p(()=>import("./pack~big-monitor-D9xBH6Uo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~big-wardrobe.webp":()=>p(()=>import("./pack~big-wardrobe-HcZmD6rX.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~book-stack.webp":()=>p(()=>import("./pack~book-stack-BRgispDw.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bubble-bath.webp":()=>p(()=>import("./pack~bubble-bath-COKGg9Dp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunk-bed.webp":()=>p(()=>import("./pack~bunk-bed-DlPI8ODZ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~bunny-slippers.webp":()=>p(()=>import("./pack~bunny-slippers-l0Ai2DZM.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~canopy-bed.webp":()=>p(()=>import("./pack~canopy-bed-CnOUh6Bv.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cat-bed.webp":()=>p(()=>import("./pack~cat-bed-jijdjakI.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~caterpillar-plush.webp":()=>p(()=>import("./pack~caterpillar-plush-C0OwOmuR.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-canopy-daybed.webp":()=>p(()=>import("./pack~cc-canopy-daybed-DydxR9An.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-beanbag.webp":()=>p(()=>import("./pack~cc-cloud-beanbag-BBONqsoo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-cloud-lamp.webp":()=>p(()=>import("./pack~cc-cloud-lamp-BmZ472wV.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-fairy-garland.webp":()=>p(()=>import("./pack~cc-fairy-garland-BHwDj5iz.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-heart-bed.webp":()=>p(()=>import("./pack~cc-heart-bed-C77MyR5W.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-jewel-box.webp":()=>p(()=>import("./pack~cc-jewel-box-sQHP3Cwa.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-reading-nook.webp":()=>p(()=>import("./pack~cc-reading-nook-CsNeycvH.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-star-dresser.webp":()=>p(()=>import("./pack~cc-star-dresser-DA2R4QIn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cc-window-seat.webp":()=>p(()=>import("./pack~cc-window-seat-C48Rguem.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~checker-bed.webp":()=>p(()=>import("./pack~checker-bed-DRGxzSHq.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~clothes-rail.webp":()=>p(()=>import("./pack~clothes-rail-C3j6Nz76.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-rug.webp":()=>p(()=>import("./pack~cloud-rug-DojbAFjK.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cloud-shelf.webp":()=>p(()=>import("./pack~cloud-shelf-AnKv1aGf.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~cork-board.webp":()=>p(()=>import("./pack~cork-board-DfnUAUG4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~curvy-desk.webp":()=>p(()=>import("./pack~curvy-desk-BYWcXROd.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~daisy-pot.webp":()=>p(()=>import("./pack~daisy-pot-B0c7zAXE.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk-mic.webp":()=>p(()=>import("./pack~desk-mic-rqXd4kwj.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~desk.webp":()=>p(()=>import("./pack~desk-CCYyeXW4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dino-plush.webp":()=>p(()=>import("./pack~dino-plush-DkHbQcgG.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~doll-house.webp":()=>p(()=>import("./pack~doll-house-YDCKziqJ.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~dresser.webp":()=>p(()=>import("./pack~dresser-C6nwNjAN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~egg-chair.webp":()=>p(()=>import("./pack~egg-chair-DU7fUuJW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~floor-fan.webp":()=>p(()=>import("./pack~floor-fan-BLpz7F62.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~frog-plush.webp":()=>p(()=>import("./pack~frog-plush-H14K3f0H.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~game-controller.webp":()=>p(()=>import("./pack~game-controller-D3oYYAQ-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~gaming-chair.webp":()=>p(()=>import("./pack~gaming-chair-ZBwgVPrD.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~guinea-pig.webp":()=>p(()=>import("./pack~guinea-pig-DPIqea0G.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-cage.webp":()=>p(()=>import("./pack~hamster-cage-B96Cssh7.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~hamster-pet.webp":()=>p(()=>import("./pack~hamster-pet-Cvf204rb.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~headphones.webp":()=>p(()=>import("./pack~headphones-CQB9V8aN.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~heart-rug.webp":()=>p(()=>import("./pack~heart-rug-Bv8hxzxL.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~keyboard.webp":()=>p(()=>import("./pack~keyboard-DeZ4vIwp.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~lava-lamp.webp":()=>p(()=>import("./pack~lava-lamp-CHXJUd92.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~moon-night-light.webp":()=>p(()=>import("./pack~moon-night-light-BM_Yu-aW.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~nightstand.webp":()=>p(()=>import("./pack~nightstand-Coz5lz4g.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~paper-lantern.webp":()=>p(()=>import("./pack~paper-lantern-KLCCw2t-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~pastel-wardrobe.webp":()=>p(()=>import("./pack~pastel-wardrobe-BGo5v24q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~phone-stand.webp":()=>p(()=>import("./pack~phone-stand-DkITkIic.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~piggy-bank.webp":()=>p(()=>import("./pack~piggy-bank-BvruDXQr.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~plant-stand.webp":()=>p(()=>import("./pack~plant-stand-PN6YMQ3-.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~play-tent.webp":()=>p(()=>import("./pack~play-tent-CAn9y4lt.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~star-mobile.webp":()=>p(()=>import("./pack~star-mobile-C65pHL5x.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-chest.webp":()=>p(()=>import("./pack~toy-chest-CCoXCM2Q.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-robot.webp":()=>p(()=>import("./pack~toy-robot-C4w9ruxo.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~toy-train.webp":()=>p(()=>import("./pack~toy-train-CCY6v45R.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~unicorn-plush.webp":()=>p(()=>import("./pack~unicorn-plush-BQM30sq1.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~vlog-camera.webp":()=>p(()=>import("./pack~vlog-camera-fqu7FuU4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wardrobe.webp":()=>p(()=>import("./pack~wardrobe-I04Doflm.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-dresser.webp":()=>p(()=>import("./pack~wh-dresser-AB8z2u9d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wh-nightstand.webp":()=>p(()=>import("./pack~wh-nightstand-CNei9R8d.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wood-desk.webp":()=>p(()=>import("./pack~wood-desk-BovaaQew.js"),[]).then(e=>e.default),"../../assets/art/bedroom/pack~wooden-bed.webp":()=>p(()=>import("./pack~wooden-bed-DRuaOxAn.js"),[]).then(e=>e.default),"../../assets/art/bedroom/stars.webp":()=>p(()=>import("./stars-B-_1Uhi4.js"),[]).then(e=>e.default),"../../assets/art/bedroom/story-pillow.webp":()=>p(()=>import("./story-pillow-C53joZXs.js"),[]).then(e=>e.default),"../../assets/art/bedroom/teddy.webp":()=>p(()=>import("./teddy-BfWdCSac.js"),[]).then(e=>e.default),"../../assets/art/bedroom/tub.webp":()=>p(()=>import("./tub-jBZNDbL2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bakery-shelf.webp":()=>p(()=>import("./pack~cc-bakery-shelf-DxlB9xOk.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-breakfast-table.webp":()=>p(()=>import("./pack~cc-breakfast-table-D2YPezZT.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-bubble-chair.webp":()=>p(()=>import("./pack~cc-bubble-chair-DKb4WvKy.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-cupcake-stand.webp":()=>p(()=>import("./pack~cc-cupcake-stand-DmYK-4Hu.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-dryer-chair.webp":()=>p(()=>import("./pack~cc-dryer-chair-DmzzPwrg.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-flower-kettle.webp":()=>p(()=>import("./pack~cc-flower-kettle-DnNFg1vb.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-light-vanity.webp":()=>p(()=>import("./pack~cc-light-vanity-C4kTfQ4w.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-macaron-jar.webp":()=>p(()=>import("./pack~cc-macaron-jar-C4jd-6MZ.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mani-chair.webp":()=>p(()=>import("./pack~cc-mani-chair-B1M7wSax.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-mint-fridge.webp":()=>p(()=>import("./pack~cc-mint-fridge-CYM93gwH.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-pastel-range.webp":()=>p(()=>import("./pack~cc-pastel-range-BaKvL1x2.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-perfume-tray.webp":()=>p(()=>import("./pack~cc-perfume-tray-C9m1uuTm.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-ribbon-mirror.webp":()=>p(()=>import("./pack~cc-ribbon-mirror-CP3Id1P-.js"),[]).then(e=>e.default),"../../assets/art/cottage/pack~cc-teapot-set.webp":()=>p(()=>import("./pack~cc-teapot-set-Sh3-x8eW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~arched-shelf.webp":()=>p(()=>import("./pack~arched-shelf-ZP2zbvbL.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~blob-rug.webp":()=>p(()=>import("./pack~blob-rug-Du4wSYaf.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bubbly-plant.webp":()=>p(()=>import("./pack~bubbly-plant-DOKimOCX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~bud-vase.webp":()=>p(()=>import("./pack~bud-vase-DRTVK3rW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~comb-brush.webp":()=>p(()=>import("./pack~comb-brush-CpdahK7E.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~cream-jars.webp":()=>p(()=>import("./pack~cream-jars-DoeDfhN_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~drop-lamp.webp":()=>p(()=>import("./pack~drop-lamp-B0mzhGoX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~droplet-buddy.webp":()=>p(()=>import("./pack~droplet-buddy-OBcFFQmI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~fancy-sofa.webp":()=>p(()=>import("./pack~fancy-sofa-DSJSLwz5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~flower-cart.webp":()=>p(()=>import("./pack~flower-cart-B48k2LJX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~foot-spa.webp":()=>p(()=>import("./pack~foot-spa-5A9PVZa7.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~globe-pendants.webp":()=>p(()=>import("./pack~globe-pendants-DXxO-0g2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~glow-mirror.webp":()=>p(()=>import("./pack~glow-mirror-trAPPG0M.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~gold-floor-mirror.webp":()=>p(()=>import("./pack~gold-floor-mirror-Bo5QJcuJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~hair-dryer.webp":()=>p(()=>import("./pack~hair-dryer-DBGDeUp2.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-plant.webp":()=>p(()=>import("./pack~heart-plant-CdQWzJHX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~heart-pouf.webp":()=>p(()=>import("./pack~heart-pouf-C0i-NFoI.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lilac-curtain.webp":()=>p(()=>import("./pack~lilac-curtain-ByvXUGIT.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~lotion-trio.webp":()=>p(()=>import("./pack~lotion-trio-BIg_qrq8.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~mani-lamp.webp":()=>p(()=>import("./pack~mani-lamp-Dv5eyP_r.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~nail-table.webp":()=>p(()=>import("./pack~nail-table-Ca5Z7Wb-.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pebble-rug.webp":()=>p(()=>import("./pack~pebble-rug-DcjYEmIt.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~perfume-bottle.webp":()=>p(()=>import("./pack~perfume-bottle-DxCufYl9.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-fountain.webp":()=>p(()=>import("./pack~pink-fountain-CFCu_fWX.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~pink-vanity.webp":()=>p(()=>import("./pack~pink-vanity-BaqHZ_Qs.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-bottle.webp":()=>p(()=>import("./pack~polish-bottle-B2ILiK2Y.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~polish-rack.webp":()=>p(()=>import("./pack~polish-rack-Ba4IBkd5.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~reception-desk.webp":()=>p(()=>import("./pack~reception-desk-ChKYb2Ag.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~salon-chair.webp":()=>p(()=>import("./pack~salon-chair-DX6P6E4d.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~scent-candle.webp":()=>p(()=>import("./pack~scent-candle-BZ7OX3YS.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~spray-bottle.webp":()=>p(()=>import("./pack~spray-bottle-Df4-NEdU.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~star-wall-sign.webp":()=>p(()=>import("./pack~star-wall-sign-10ikD7wM.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~swivel-stool.webp":()=>p(()=>import("./pack~swivel-stool-DSUqmRKW.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~tiered-tray.webp":()=>p(()=>import("./pack~tiered-tray-2DKLkfK_.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-cart.webp":()=>p(()=>import("./pack~towel-cart-ZvOFIu7o.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~towel-stack.webp":()=>p(()=>import("./pack~towel-stack-EDHTj1IJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~vine-planter.webp":()=>p(()=>import("./pack~vine-planter-CBs6XXFi.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~waiting-bench.webp":()=>p(()=>import("./pack~waiting-bench-C-tKIfsJ.js"),[]).then(e=>e.default),"../../assets/art/glossy/pack~wash-chair.webp":()=>p(()=>import("./pack~wash-chair-eJoH6ils.js"),[]).then(e=>e.default),"../../assets/art/kitchen/apple.webp":()=>p(()=>import("./apple-BDa0Ipjl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/berry-basket.webp":()=>p(()=>import("./berry-basket-z1Rm1ypn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/cake.webp":()=>p(()=>import("./cake-kY0uEn3b.js"),[]).then(e=>e.default),"../../assets/art/kitchen/donut.webp":()=>p(()=>import("./donut-DBMhrMrO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/fridge.webp":()=>p(()=>import("./fridge-DC5W3m5V.js"),[]).then(e=>e.default),"../../assets/art/kitchen/juice.webp":()=>p(()=>import("./juice-BHz3g6Oh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bananas.webp":()=>p(()=>import("./pack~bananas-CGvoV_mG.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bar-stool.webp":()=>p(()=>import("./pack~bar-stool-kZw0EBoe.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~bread-loaf.webp":()=>p(()=>import("./pack~bread-loaf-C2hAdBjQ.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~chick.webp":()=>p(()=>import("./pack~chick-DFs7qQ4S.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~china-hutch.webp":()=>p(()=>import("./pack~china-hutch-BrAJJu-B.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cocoa-mug.webp":()=>p(()=>import("./pack~cocoa-mug-C6QGwvvz.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cookie-jar.webp":()=>p(()=>import("./pack~cookie-jar-CFA4F-rC.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cooking-pot.webp":()=>p(()=>import("./pack~cooking-pot-CqkD438y.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~cupcake.webp":()=>p(()=>import("./pack~cupcake-CaukIYeh.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~dish-rack.webp":()=>p(()=>import("./pack~dish-rack-fSH4Nxjb.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~fruit-bowl.webp":()=>p(()=>import("./pack~fruit-bowl-BHMKWhLB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~frying-pan.webp":()=>p(()=>import("./pack~frying-pan-CpIkYvtj.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~happy-fridge.webp":()=>p(()=>import("./pack~happy-fridge-C0JgsuQs.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~herb-box.webp":()=>p(()=>import("./pack~herb-box-BPkYhHVn.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~high-chair.webp":()=>p(()=>import("./pack~high-chair-CwJcZkT4.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~ice-cream.webp":()=>p(()=>import("./pack~ice-cream-Bvngp9VY.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kettle.webp":()=>p(()=>import("./pack~kettle-BbInY_9a.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-counter.webp":()=>p(()=>import("./pack~kitchen-counter-JZQyi4vS.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~kitchen-sink.webp":()=>p(()=>import("./pack~kitchen-sink-DNNgCqX_.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~lemon-tree.webp":()=>p(()=>import("./pack~lemon-tree-DB7EFLYH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~microwave.webp":()=>p(()=>import("./pack~microwave-CEveiPpI.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~milk-bottle.webp":()=>p(()=>import("./pack~milk-bottle-CUQviIWU.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pancakes.webp":()=>p(()=>import("./pack~pancakes-B3g8r9_b.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pantry-shelf.webp":()=>p(()=>import("./pack~pantry-shelf-CBvTqzJO.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pendant-lamp.webp":()=>p(()=>import("./pack~pendant-lamp-863t-y_9.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~pet-bowl.webp":()=>p(()=>import("./pack~pet-bowl-BVx7MJ3n.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~rice-cooker.webp":()=>p(()=>import("./pack~rice-cooker-CR0R_fMt.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~runner-rug.webp":()=>p(()=>import("./pack~runner-rug-khpV9koB.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~spice-rack.webp":()=>p(()=>import("./pack~spice-rack-Bb2fECLl.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~stand-mixer.webp":()=>p(()=>import("./pack~stand-mixer-Cc12hcA3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~teapot.webp":()=>p(()=>import("./pack~teapot-DbGmGSk-.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~toaster.webp":()=>p(()=>import("./pack~toaster-C7Q5keZK.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~utensil-rail.webp":()=>p(()=>import("./pack~utensil-rail-5WZRpD_3.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pack~watermelon-slice.webp":()=>p(()=>import("./pack~watermelon-slice-C52sVm4c.js"),[]).then(e=>e.default),"../../assets/art/kitchen/pizza.webp":()=>p(()=>import("./pizza-D-Cud-mH.js"),[]).then(e=>e.default),"../../assets/art/kitchen/stove.webp":()=>p(()=>import("./stove-D_-V6Kzg.js"),[]).then(e=>e.default),"../../assets/art/living/bunny.webp":()=>p(()=>import("./bunny-CObFAG48.js"),[]).then(e=>e.default),"../../assets/art/living/cactus.webp":()=>p(()=>import("./cactus-ZhSDibna.js"),[]).then(e=>e.default),"../../assets/art/living/cat-tower.webp":()=>p(()=>import("./cat-tower-D8zuZTAN.js"),[]).then(e=>e.default),"../../assets/art/living/cat.webp":()=>p(()=>import("./cat-D3BztbTL.js"),[]).then(e=>e.default),"../../assets/art/living/dog.webp":()=>p(()=>import("./dog-CaRYped2.js"),[]).then(e=>e.default),"../../assets/art/living/egg~cada-mouse.webp":()=>p(()=>import("./egg~cada-mouse-qwyybszI.js"),[]).then(e=>e.default),"../../assets/art/living/egg~chloe-starlamp.webp":()=>p(()=>import("./egg~chloe-starlamp-CdRast8x.js"),[]).then(e=>e.default),"../../assets/art/living/egg~quinn-pup.webp":()=>p(()=>import("./egg~quinn-pup-CJe2EZ7X.js"),[]).then(e=>e.default),"../../assets/art/living/egg~reagan-frame.webp":()=>p(()=>import("./egg~reagan-frame-ldfvmD0a.js"),[]).then(e=>e.default),"../../assets/art/living/egg~sloane-snail.webp":()=>p(()=>import("./egg~sloane-snail-r5qvwW98.js"),[]).then(e=>e.default),"../../assets/art/living/fish.webp":()=>p(()=>import("./fish-maRwHAJ7.js"),[]).then(e=>e.default),"../../assets/art/living/floor-cushion.webp":()=>p(()=>import("./floor-cushion-xmeTGRs4.js"),[]).then(e=>e.default),"../../assets/art/living/flowers.webp":()=>p(()=>import("./flowers-CRQe1ixJ.js"),[]).then(e=>e.default),"../../assets/art/living/kennel.webp":()=>p(()=>import("./kennel-5tTNQe8j.js"),[]).then(e=>e.default),"../../assets/art/living/pack~acorn-friend.webp":()=>p(()=>import("./pack~acorn-friend-DRuBUVCM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~aquarium.webp":()=>p(()=>import("./pack~aquarium-YU79BMEH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~arc-floor-lamp.webp":()=>p(()=>import("./pack~arc-floor-lamp-DXBWn_jm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bean-bag.webp":()=>p(()=>import("./pack~bean-bag-B14zGXUJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bird-cage.webp":()=>p(()=>import("./pack~bird-cage-BG5Oo83y.js"),[]).then(e=>e.default),"../../assets/art/living/pack~blanket-basket.webp":()=>p(()=>import("./pack~blanket-basket-D9HUE-PH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~box-stack.webp":()=>p(()=>import("./pack~box-stack-DlrNN9pK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~brick-fireplace.webp":()=>p(()=>import("./pack~brick-fireplace-WBAkEMcM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~building-blocks.webp":()=>p(()=>import("./pack~building-blocks-B9tOTAc-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~bulletin-board.webp":()=>p(()=>import("./pack~bulletin-board-BanI9ESo.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cactus-buddy.webp":()=>p(()=>import("./pack~cactus-buddy-XIo1SKh4.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-cottage-aquarium.webp":()=>p(()=>import("./pack~cc-cottage-aquarium-BEaUEbqv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-fairy-shelf.webp":()=>p(()=>import("./pack~cc-fairy-shelf-Dm4QJ5ID.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-flower-lamp.webp":()=>p(()=>import("./pack~cc-flower-lamp-69A_4yj-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-clock.webp":()=>p(()=>import("./pack~cc-heart-clock-BG6oca1G.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-pouf.webp":()=>p(()=>import("./pack~cc-heart-pouf-ryX-n2Mr.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-heart-rug.webp":()=>p(()=>import("./pack~cc-heart-rug-Cv9FadVw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-macrame-swing.webp":()=>p(()=>import("./pack~cc-macrame-swing-CaIFr-gR.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-mushroom-stool.webp":()=>p(()=>import("./pack~cc-mushroom-stool-D7K_Q0GF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-petal-table.webp":()=>p(()=>import("./pack~cc-petal-table-C9vJSQzw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-plant-wall.webp":()=>p(()=>import("./pack~cc-plant-wall-DF5W5IvZ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-record-player.webp":()=>p(()=>import("./pack~cc-record-player-PdVEHYb8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-curtains.webp":()=>p(()=>import("./pack~cc-scallop-curtains-Vt3j-c2C.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cc-scallop-loveseat.webp":()=>p(()=>import("./pack~cc-scallop-loveseat-D_1065-V.js"),[]).then(e=>e.default),"../../assets/art/living/pack~checker-rug.webp":()=>p(()=>import("./pack~checker-rug-Wy0CMZSF.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cloud-sofa.webp":()=>p(()=>import("./pack~cloud-sofa-DpVszcfk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~coffee-table.webp":()=>p(()=>import("./pack~coffee-table-K_hB0tW1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~comfy-armchair.webp":()=>p(()=>import("./pack~comfy-armchair-DnTSpyVq.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cream-sofa.webp":()=>p(()=>import("./pack~cream-sofa-uxsQUYph.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cubby-shelf.webp":()=>p(()=>import("./pack~cubby-shelf-B9YB2weQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cube-shelf.webp":()=>p(()=>import("./pack~cube-shelf-Do0yoJlP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~cute-speaker.webp":()=>p(()=>import("./pack~cute-speaker-CENJbaPd.js"),[]).then(e=>e.default),"../../assets/art/living/pack~daisy-rug.webp":()=>p(()=>import("./pack~daisy-rug-CDZ68mcS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~desk-lamp.webp":()=>p(()=>import("./pack~desk-lamp-luSxwyT9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fiddle-leaf-fig.webp":()=>p(()=>import("./pack~fiddle-leaf-fig-COblJUVe.js"),[]).then(e=>e.default),"../../assets/art/living/pack~fireplace.webp":()=>p(()=>import("./pack~fireplace-BvqJ4MHf.js"),[]).then(e=>e.default),"../../assets/art/living/pack~flower-lamp.webp":()=>p(()=>import("./pack~flower-lamp-CJJ-dlUk.js"),[]).then(e=>e.default),"../../assets/art/living/pack~glass-cabinet.webp":()=>p(()=>import("./pack~glass-cabinet-SVsj9HQm.js"),[]).then(e=>e.default),"../../assets/art/living/pack~globe.webp":()=>p(()=>import("./pack~globe-Dzwb85OX.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-lantern.webp":()=>p(()=>import("./pack~hanging-lantern-ja5xkGId.js"),[]).then(e=>e.default),"../../assets/art/living/pack~hanging-planter.webp":()=>p(()=>import("./pack~hanging-planter-1gi5Hm9x.js"),[]).then(e=>e.default),"../../assets/art/living/pack~heart-light.webp":()=>p(()=>import("./pack~heart-light-DC4iBLQP.js"),[]).then(e=>e.default),"../../assets/art/living/pack~knit-cushion.webp":()=>p(()=>import("./pack~knit-cushion-Cc4lRuF-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ladder-shelf.webp":()=>p(()=>import("./pack~ladder-shelf-CaRkqiRJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~landscape-art.webp":()=>p(()=>import("./pack~landscape-art-BKlaJPEw.js"),[]).then(e=>e.default),"../../assets/art/living/pack~lattice-bench.webp":()=>p(()=>import("./pack~lattice-bench-B9WpfEX6.js"),[]).then(e=>e.default),"../../assets/art/living/pack~leaf-wreath.webp":()=>p(()=>import("./pack~leaf-wreath-uVfnSIfS.js"),[]).then(e=>e.default),"../../assets/art/living/pack~monstera-plant.webp":()=>p(()=>import("./pack~monstera-plant-B_coetMK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~moving-box.webp":()=>p(()=>import("./pack~moving-box-DHeeeIdL.js"),[]).then(e=>e.default),"../../assets/art/living/pack~piano.webp":()=>p(()=>import("./pack~piano-Yyj5R1RA.js"),[]).then(e=>e.default),"../../assets/art/living/pack~popcorn.webp":()=>p(()=>import("./pack~popcorn-BuLbtFAV.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pothos-plant.webp":()=>p(()=>import("./pack~pothos-plant-DzlDgqg0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~pouf.webp":()=>p(()=>import("./pack~pouf-BTaH4suE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~puffy-stool.webp":()=>p(()=>import("./pack~puffy-stool-B-6LB9NQ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-rug.webp":()=>p(()=>import("./pack~rainbow-rug-EDbn-dZ1.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rainbow-wall-art.webp":()=>p(()=>import("./pack~rainbow-wall-art-BK2LQVaU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~retro-radio.webp":()=>p(()=>import("./pack~retro-radio-WYNMXhqc.js"),[]).then(e=>e.default),"../../assets/art/living/pack~ring-light.webp":()=>p(()=>import("./pack~ring-light-B6vjhEQO.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-chair.webp":()=>p(()=>import("./pack~rocking-chair-CQ0WHDK5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~rocking-horse.webp":()=>p(()=>import("./pack~rocking-horse-C6dNjXKJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~round-rug.webp":()=>p(()=>import("./pack~round-rug-BZ0FhUPv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~side-table-round.webp":()=>p(()=>import("./pack~side-table-round-DoF65A6c.js"),[]).then(e=>e.default),"../../assets/art/living/pack~snake-plant.webp":()=>p(()=>import("./pack~snake-plant-BmYEkWGH.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sprout-pot.webp":()=>p(()=>import("./pack~sprout-pot-DiXUsL4M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~star-lamp.webp":()=>p(()=>import("./pack~star-lamp-6-4l-lps.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sticker-board.webp":()=>p(()=>import("./pack~sticker-board-Crwbck5M.js"),[]).then(e=>e.default),"../../assets/art/living/pack~string-lights.webp":()=>p(()=>import("./pack~string-lights-Cas7h1DK.js"),[]).then(e=>e.default),"../../assets/art/living/pack~stripe-runner.webp":()=>p(()=>import("./pack~stripe-runner-CuXUhFNW.js"),[]).then(e=>e.default),"../../assets/art/living/pack~succulent-trio.webp":()=>p(()=>import("./pack~succulent-trio-Do8O7eY8.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sunny-art.webp":()=>p(()=>import("./pack~sunny-art-h82-3Sd5.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-bean-bag.webp":()=>p(()=>import("./pack~sv-bean-bag-CT3er5We.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-cloud-rug.webp":()=>p(()=>import("./pack~sv-cloud-rug-DmAgh1BY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~sv-wall-shelf.webp":()=>p(()=>import("./pack~sv-wall-shelf-CcIezwct.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tassel-rug.webp":()=>p(()=>import("./pack~tassel-rug-DZANcJOt.js"),[]).then(e=>e.default),"../../assets/art/living/pack~throw-pillow.webp":()=>p(()=>import("./pack~throw-pillow-CO9pMMz-.js"),[]).then(e=>e.default),"../../assets/art/living/pack~toy-car.webp":()=>p(()=>import("./pack~toy-car-VuveyeLU.js"),[]).then(e=>e.default),"../../assets/art/living/pack~trailing-plant.webp":()=>p(()=>import("./pack~trailing-plant-ejZgP7bb.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tulip-vase.webp":()=>p(()=>import("./pack~tulip-vase-CcpvFlG9.js"),[]).then(e=>e.default),"../../assets/art/living/pack~turtle.webp":()=>p(()=>import("./pack~turtle-Bn1sANuv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~tv-stand.webp":()=>p(()=>import("./pack~tv-stand-CnWFCgTD.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-clock.webp":()=>p(()=>import("./pack~wall-clock-BhhKLuq0.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wall-shelf.webp":()=>p(()=>import("./pack~wall-shelf-1JASyKwJ.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wavy-floor-lamp.webp":()=>p(()=>import("./pack~wavy-floor-lamp-B53r_e3m.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-arc-floor-lamp.webp":()=>p(()=>import("./pack~wh-arc-floor-lamp-BXaC16sM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-book-stack.webp":()=>p(()=>import("./pack~wh-book-stack-t51h0scM.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-fiddle-leaf-fig.webp":()=>p(()=>import("./pack~wh-fiddle-leaf-fig-BIG8VejE.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-pendant-lamp.webp":()=>p(()=>import("./pack~wh-pendant-lamp-E0Vxk-T2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-snake-plant.webp":()=>p(()=>import("./pack~wh-snake-plant-BhAMe7Q2.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wh-string-lights.webp":()=>p(()=>import("./pack~wh-string-lights-DQyga6dY.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-armchair.webp":()=>p(()=>import("./pack~wood-armchair-FBkbAvXv.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-bookshelf.webp":()=>p(()=>import("./pack~wood-bookshelf-DPZ9BD1s.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-coffee-table.webp":()=>p(()=>import("./pack~wood-coffee-table-wKKy_41i.js"),[]).then(e=>e.default),"../../assets/art/living/pack~wood-stool.webp":()=>p(()=>import("./pack~wood-stool-Bp9UA7Rn.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-bouquet.webp":()=>p(()=>import("./ranch-bouquet-Ds6Pxbb7.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-carrot.webp":()=>p(()=>import("./ranch-carrot-DEktCamx.js"),[]).then(e=>e.default),"../../assets/art/living/ranch-egg.webp":()=>p(()=>import("./ranch-egg-DANU-mnz.js"),[]).then(e=>e.default),"../../assets/art/living/tree.webp":()=>p(()=>import("./tree-BEoke6pN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-bottle.webp":()=>p(()=>import("./baby-bottle-eH02ZpRF.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby-shelf.webp":()=>p(()=>import("./baby-shelf-BnBA4LnN.js"),[]).then(e=>e.default),"../../assets/art/nursery/baby.webp":()=>p(()=>import("./baby-G3Mhmbzp.js"),[]).then(e=>e.default),"../../assets/art/nursery/bassinet.webp":()=>p(()=>import("./bassinet-Dcb727Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/blocks.webp":()=>p(()=>import("./blocks-C_dNzrHE.js"),[]).then(e=>e.default),"../../assets/art/nursery/bunny-plush.webp":()=>p(()=>import("./bunny-plush-CReNy0hM.js"),[]).then(e=>e.default),"../../assets/art/nursery/changing-table.webp":()=>p(()=>import("./changing-table-8B47rw6t.js"),[]).then(e=>e.default),"../../assets/art/nursery/cloud-rug.webp":()=>p(()=>import("./cloud-rug-CnOFLK5B.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib-mobile.webp":()=>p(()=>import("./crib-mobile-C5s-3ue5.js"),[]).then(e=>e.default),"../../assets/art/nursery/crib.webp":()=>p(()=>import("./crib-CGm5_7n1.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-cocoa.webp":()=>p(()=>import("./doll-cocoa-BpjP2qgw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-honey.webp":()=>p(()=>import("./doll-honey-DFaB2lOw.js"),[]).then(e=>e.default),"../../assets/art/nursery/doll-rose.webp":()=>p(()=>import("./doll-rose-BRjLLFSK.js"),[]).then(e=>e.default),"../../assets/art/nursery/moon-art.webp":()=>p(()=>import("./moon-art-D58c34zl.js"),[]).then(e=>e.default),"../../assets/art/nursery/music-box.webp":()=>p(()=>import("./music-box-BFejHRIi.js"),[]).then(e=>e.default),"../../assets/art/nursery/night-light.webp":()=>p(()=>import("./night-light-CE5H5B5n.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-curtains.webp":()=>p(()=>import("./nursery-curtains-B23Kt1ZB.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-dresser.webp":()=>p(()=>import("./nursery-dresser-C2NMk5Ie.js"),[]).then(e=>e.default),"../../assets/art/nursery/nursery-lamp.webp":()=>p(()=>import("./nursery-lamp-kB1hvqKc.js"),[]).then(e=>e.default),"../../assets/art/nursery/play-mat.webp":()=>p(()=>import("./play-mat-BiJMY-uv.js"),[]).then(e=>e.default),"../../assets/art/nursery/rattle.webp":()=>p(()=>import("./rattle-D2HX4sEW.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocker.webp":()=>p(()=>import("./rocker-BI-azLzU.js"),[]).then(e=>e.default),"../../assets/art/nursery/rocking-horse.webp":()=>p(()=>import("./rocking-horse-DqsQLxfe.js"),[]).then(e=>e.default),"../../assets/art/nursery/stacking-rings.webp":()=>p(()=>import("./stacking-rings-CDdBQ47A.js"),[]).then(e=>e.default),"../../assets/art/nursery/toy-bin.webp":()=>p(()=>import("./toy-bin-alXY-1yk.js"),[]).then(e=>e.default),"../../assets/art/salon/hairdryer.webp":()=>p(()=>import("./hairdryer-T-lQmTcl.js"),[]).then(e=>e.default),"../../assets/art/salon/perfume.webp":()=>p(()=>import("./perfume-DfvRZm2S.js"),[]).then(e=>e.default),"../../assets/art/salon/polish.webp":()=>p(()=>import("./polish-CXaer2Bw.js"),[]).then(e=>e.default),"../../assets/art/salon/ribbon-tray.webp":()=>p(()=>import("./ribbon-tray-CTIaqA2-.js"),[]).then(e=>e.default),"../../assets/art/salon/stool.webp":()=>p(()=>import("./stool-CUwUwak6.js"),[]).then(e=>e.default),"../../assets/art/salon/vanity.webp":()=>p(()=>import("./vanity-BVbX2a77.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~arched-mirror.webp":()=>p(()=>import("./pack~arched-mirror-sCVjVNZ2.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~boba-cup.webp":()=>p(()=>import("./pack~boba-cup-BpOopnbk.js"),[]).then(e=>e.default),"../../assets/art/sunny-vibes/pack~mini-fridge.webp":()=>p(()=>import("./pack~mini-fridge-Bz5tI6Y7.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~apple-tree.webp":()=>p(()=>import("./pack~apple-tree-C3QlGloI.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~cozy-mug.webp":()=>p(()=>import("./pack~cozy-mug-BnfHOl91.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~fire-pit.webp":()=>p(()=>import("./pack~fire-pit-CRZJkqqE.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~mini-greenhouse.webp":()=>p(()=>import("./pack~mini-greenhouse-Br8akUdc.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~picnic-basket.webp":()=>p(()=>import("./pack~picnic-basket-COs0Y3zn.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~sale-sign.webp":()=>p(()=>import("./pack~sale-sign-BseEiyKa.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-kitchen-counter.webp":()=>p(()=>import("./pack~wh-kitchen-counter-CxgMV92B.js"),[]).then(e=>e.default),"../../assets/art/welcome-home/pack~wh-teapot.webp":()=>p(()=>import("./pack~wh-teapot-ApJalB1d.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-bauble-garland.webp":()=>p(()=>import("./pack~wc-bauble-garland-BS872JcY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-berry-wreath.webp":()=>p(()=>import("./pack~wc-berry-wreath-DVV9MTc6.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-birch-basket.webp":()=>p(()=>import("./pack~wc-birch-basket-BG8oUtxN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cabin-picture.webp":()=>p(()=>import("./pack~wc-cabin-picture-D8rQKKtK.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-candle-trio.webp":()=>p(()=>import("./pack~wc-candle-trio-B31yzqPC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cane-lamp.webp":()=>p(()=>import("./pack~wc-cane-lamp-UTO0nZql.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cinnamon-tray.webp":()=>p(()=>import("./pack~wc-cinnamon-tray-Cf5bYwPY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-cart.webp":()=>p(()=>import("./pack~wc-cocoa-cart-BrV30F2C.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-mug.webp":()=>p(()=>import("./pack~wc-cocoa-mug-CuYF_PaO.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cocoa-pot.webp":()=>p(()=>import("./pack~wc-cocoa-pot-DQ72uD3S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-oven.webp":()=>p(()=>import("./pack~wc-cookie-oven-BjGR4uSY.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-cookie-plate.webp":()=>p(()=>import("./pack~wc-cookie-plate-BL4xbKJ8.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frost-bookcase.webp":()=>p(()=>import("./pack~wc-frost-bookcase-ZuAQpRxg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-frosted-pine.webp":()=>p(()=>import("./pack~wc-frosted-pine-BXtEGG7O.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-fur-bench.webp":()=>p(()=>import("./pack~wc-fur-bench-DxlUyCxG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread-village.webp":()=>p(()=>import("./pack~wc-gingerbread-village-BSiu2hp-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-gingerbread.webp":()=>p(()=>import("./pack~wc-gingerbread-BRxJDmPf.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-globe-lamp.webp":()=>p(()=>import("./pack~wc-globe-lamp-D7wlZ9-V.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holiday-tree.webp":()=>p(()=>import("./pack~wc-holiday-tree-DyKJPhVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-holly.webp":()=>p(()=>import("./pack~wc-holly-EcLJkkKT.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-skates.webp":()=>p(()=>import("./pack~wc-ice-skates-DgS-2YH3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-ice-wardrobe.webp":()=>p(()=>import("./pack~wc-ice-wardrobe-D3zrHXz4.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-knit-armchair.webp":()=>p(()=>import("./pack~wc-knit-armchair-BmhTXUUC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-lantern.webp":()=>p(()=>import("./pack~wc-lantern-ph0Ia33S.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-log-bench.webp":()=>p(()=>import("./pack~wc-log-bench-D3yNeXrb.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-marshmallow-jar.webp":()=>p(()=>import("./pack~wc-marshmallow-jar-D5Ztz0iN.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-line.webp":()=>p(()=>import("./pack~wc-mitten-line-Ci3Kmp5r.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mitten-ottoman.webp":()=>p(()=>import("./pack~wc-mitten-ottoman-DB5mhikk.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-mug-shelf.webp":()=>p(()=>import("./pack~wc-mug-shelf-CCpd1wVv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-nutcracker.webp":()=>p(()=>import("./pack~wc-nutcracker-CgbCT2qv.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-chair.webp":()=>p(()=>import("./pack~wc-penguin-chair-vB1NvNe-.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-penguin-plush.webp":()=>p(()=>import("./pack~wc-penguin-plush-C-Ne4Dxi.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-counter.webp":()=>p(()=>import("./pack~wc-peppermint-counter-BTPfnOd_.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-peppermint-rug.webp":()=>p(()=>import("./pack~wc-peppermint-rug-CGd8vlnV.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-garland.webp":()=>p(()=>import("./pack~wc-pinecone-garland-DMA6H6aW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pinecone-table.webp":()=>p(()=>import("./pack~wc-pinecone-table-CcVoxsAa.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-bed.webp":()=>p(()=>import("./pack~wc-plaid-bed-D_HMoB7K.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-plaid-sofa.webp":()=>p(()=>import("./pack~wc-plaid-sofa-DOYDgV7y.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-poinsettia.webp":()=>p(()=>import("./pack~wc-poinsettia-Duqpulvr.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-polar-plush.webp":()=>p(()=>import("./pack~wc-polar-plush-Bzs7ScmG.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-pom-rug.webp":()=>p(()=>import("./pack~wc-pom-rug-Bs5AyRsW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-present-stack.webp":()=>p(()=>import("./pack~wc-present-stack-CNmQKSu2.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-reindeer.webp":()=>p(()=>import("./pack~wc-reindeer-DwfFEqVn.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sled-table.webp":()=>p(()=>import("./pack~wc-sled-table-De30wycC.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sleigh-planter.webp":()=>p(()=>import("./pack~wc-sleigh-planter-CRfX9J_0.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-globe.webp":()=>p(()=>import("./pack~wc-snow-globe-BQQApiF3.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-mobile.webp":()=>p(()=>import("./pack~wc-snow-mobile-wJ-9gloW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-nightstand.webp":()=>p(()=>import("./pack~wc-snow-nightstand-CBsj30cl.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snow-window.webp":()=>p(()=>import("./pack~wc-snow-window-D3bSRYDd.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowman.webp":()=>p(()=>import("./pack~wc-snowman-BekK-aTM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-snowshoes.webp":()=>p(()=>import("./pack~wc-snowshoes-CrVHwfcR.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-sock-hamper.webp":()=>p(()=>import("./pack~wc-sock-hamper-DkaXaCbw.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-star-topper.webp":()=>p(()=>import("./pack~wc-star-topper-B-l5aKYW.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stocking-row.webp":()=>p(()=>import("./pack~wc-stocking-row-C4vslf6n.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-stone-hearth.webp":()=>p(()=>import("./pack~wc-stone-hearth-4EAifiID.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-lamp.webp":()=>p(()=>import("./pack~wc-twinkle-lamp--9BNC_tg.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-twinkle-string.webp":()=>p(()=>import("./pack~wc-twinkle-string-jHZReebI.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-window-seat.webp":()=>p(()=>import("./pack~wc-window-seat-CuMHYvCM.js"),[]).then(e=>e.default),"../../assets/art/winter/pack~wc-woodstove.webp":()=>p(()=>import("./pack~wc-woodstove-BH7aoOI1.js"),[]).then(e=>e.default)});function dc(e){const t=e.split("/").pop()||"";if(t.length<6||t.slice(-5).toLowerCase()!==".webp")return null;const n=decodeURIComponent(t.slice(0,-5)).replace(/~/g,":");return!n||n.startsWith("_")?null:n}const ff=new Set;for(const e in va){const t=dc(e);t&&ff.add(t)}function Sm(e){return ff.has(e)}const Dr=new Map;function Pm(e){for(const t in va)if(dc(t)===e)return va[t]}function Tm(e){const t=Dr.get(e);if(t)return t;const n=Pm(e);if(!n)return Promise.resolve(null);const s=n().then(o=>(Em(e,o),e)).catch(()=>(Dr.delete(e),null));return Dr.set(e,s),s}function rr(e){const t=[...new Set(e)];return Promise.all(t.map(Tm)).then(n=>n.filter(s=>s!==null))}function Bm(){const e=[];for(const t in va){const n=dc(t);n&&e.push(n)}return rr(e)}function Rm(e,t=[]){return zm(e)?rr(t):Promise.resolve([])}const pc=Object.freeze(Object.defineProperty({__proto__:null,boot:Rm,hasArt:Sm,loadAllArt:Bm,loadArtKinds:rr},Symbol.toStringTag,{value:"Module"})),_e="#5a3d5c",Ve=`stroke="${_e}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,Pi=[{body:"#ffd6e0",roof:"#ff7aa8",door:"#8fd3ff",trim:"#fff6e6"},{body:"#d9f2ff",roof:"#5aa9e6",door:"#ffd166",trim:"#ffffff"},{body:"#e3f9d9",roof:"#5cc985",door:"#ff9f68",trim:"#fffbe6"},{body:"#fff1b8",roof:"#ff9f43",door:"#c9a0dc",trim:"#ffffff"},{body:"#eadcff",roof:"#9b7bd8",door:"#80ed99",trim:"#fff6fb"},{body:"#ffe0c7",roof:"#e07a5f",door:"#5fb0d8",trim:"#fffaf0"},{body:"#d8f5ef",roof:"#2fb3a3",door:"#ff8fab",trim:"#ffffff"},{body:"#fde2f3",roof:"#e879c6",door:"#ffd166",trim:"#fff"}];function ka(e,t={}){const n=Pi[(e%Pi.length+Pi.length)%Pi.length],s=e%2===1,o=t.lit?"#fff3b0":"#cfe8ff",i=s?`<path d="M22 138 Q22 36 160 30 Q298 36 298 138 Z" fill="${n.roof}" ${Ve}/><path d="M60 110 Q70 60 120 50" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`:`<path d="M14 140 L160 26 L306 140 Z" fill="${n.roof}" ${Ve}/><path d="M70 110 L140 56" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/>`;return`<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="160" cy="294" rx="150" ry="8" fill="#000" opacity=".12"/>
  <rect x="${s?232:220}" y="${s?36:44}" width="30" height="56" rx="6" fill="${n.trim}" ${Ve}/>
  <rect x="44" y="124" width="232" height="168" rx="20" fill="${n.body}" ${Ve}/>
  ${i}
  <g class="houseWin" fill="${o}"><circle cx="160" cy="${s?92:98}" r="18" ${Ve}/><rect x="62" y="160" width="62" height="58" rx="18" ${Ve}/><rect x="196" y="160" width="62" height="58" rx="18" ${Ve}/></g>
  <path d="M160 ${s?74:80} V${s?110:116} M142 ${s?92:98} H178" ${Ve}/>
  <path d="M93 160 V218 M62 189 H124" ${Ve}/><path d="M227 160 V218 M196 189 H258" ${Ve}/>
  <rect x="56" y="216" width="74" height="16" rx="8" fill="${n.trim}" ${Ve}/><rect x="190" y="216" width="74" height="16" rx="8" fill="${n.trim}" ${Ve}/>
  <circle cx="72" cy="212" r="7" fill="#ff8fab" ${Ve}/><circle cx="92" cy="208" r="7" fill="#ffd166" ${Ve}/><circle cx="112" cy="212" r="7" fill="#ff8fab" ${Ve}/>
  <circle cx="208" cy="212" r="7" fill="#c9a0dc" ${Ve}/><circle cx="228" cy="208" r="7" fill="#80ed99" ${Ve}/><circle cx="248" cy="212" r="7" fill="#c9a0dc" ${Ve}/>
  <path d="M132 292 V226 Q132 196 160 196 Q188 196 188 226 V292 Z" fill="${n.door}" ${Ve}/>
  <circle cx="176" cy="250" r="5" fill="${_e}"/><path d="M146 222 Q160 212 174 222" stroke="#fff" stroke-width="5" fill="none" opacity=".6" stroke-linecap="round"/>
  <rect x="118" y="286" width="84" height="10" rx="5" fill="${n.trim}" ${Ve}/>
</svg>`}const Et={street:`<svg viewBox="0 0 48 48"><circle cx="16" cy="15" r="7" fill="#ffd166" stroke="${_e}" stroke-width="3"/><circle cx="32" cy="15" r="7" fill="#ff8fab" stroke="${_e}" stroke-width="3"/><circle cx="13.5" cy="14.5" r="1.2" fill="${_e}"/><circle cx="18.5" cy="14.5" r="1.2" fill="${_e}"/><circle cx="29.5" cy="14.5" r="1.2" fill="${_e}"/><circle cx="34.5" cy="14.5" r="1.2" fill="${_e}"/><path d="M13 18 q3 2.2 6 0 M29 18 q3 2.2 6 0" fill="none" stroke="${_e}" stroke-width="1.6" stroke-linecap="round"/><path d="M8 40 Q16 28 24 33 Q32 38 40 28" fill="none" stroke="#5cc985" stroke-width="4" stroke-linecap="round"/><circle cx="16" cy="36" r="2.2" fill="#fff" stroke="${_e}" stroke-width="1.5"/><circle cx="32" cy="32" r="2.2" fill="#fff" stroke="${_e}" stroke-width="1.5"/></svg>`,home:`<svg viewBox="0 0 48 48"><path d="M8 22 L24 8 L40 22 V40 H8 Z" fill="#ffd166" stroke="${_e}" stroke-width="3" stroke-linejoin="round"/><path d="M20 40 V28 H28 V40" fill="#fff" stroke="${_e}" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="20" r="2.4" fill="${_e}"/></svg>`,lockOn:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q33 7 33 16 V22" fill="none" stroke="${_e}" stroke-width="4"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#ffd166" stroke="${_e}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${_e}"/></svg>`,lockOff:`<svg viewBox="0 0 48 48"><path d="M15 22 V16 Q15 7 24 7 Q31 7 32.5 13" fill="none" stroke="${_e}" stroke-width="4" stroke-linecap="round"/><rect x="10" y="21" width="28" height="21" rx="7" fill="#b6f0a8" stroke="${_e}" stroke-width="3"/><circle cx="24" cy="31" r="3.5" fill="${_e}"/></svg>`,chat:`<svg viewBox="0 0 48 48"><path d="M8 12 Q8 6 14 6 H34 Q40 6 40 12 V26 Q40 32 34 32 H22 L13 40 V32 Q8 32 8 26 Z" fill="#fff3b0" stroke="${_e}" stroke-width="3" stroke-linejoin="round"/><circle cx="17" cy="19" r="2.5" fill="${_e}"/><circle cx="24" cy="19" r="2.5" fill="${_e}"/><circle cx="31" cy="19" r="2.5" fill="${_e}"/></svg>`,shield:`<svg viewBox="0 0 48 48"><path d="M24 5 L39 11 V23 Q39 36 24 43 Q9 36 9 23 V11 Z" fill="#c9a0dc" stroke="${_e}" stroke-width="3" stroke-linejoin="round"/><path d="M17 24 L22 29 L31 19" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,solo:`<svg viewBox="0 0 48 48"><path d="M8 24 L24 9 L40 24 V41 H8 Z" fill="#ffd166" stroke="${_e}" stroke-width="3" stroke-linejoin="round"/><rect x="19" y="28" width="10" height="13" rx="4" fill="#fff" stroke="${_e}" stroke-width="2.5"/><path d="M33 7 l2 4 4 .5 -3 3 .7 4 -3.7-2 -3.7 2 .7-4 -3-3 4-.5z" fill="#ff8fab" stroke="${_e}" stroke-width="1.5"/></svg>`};function Z(e,t=2600){const n=document.createElement("div");n.className="toast",n.textContent=e,(document.getElementById("toastLane")??document.body).appendChild(n),setTimeout(()=>n.classList.add("out"),t),setTimeout(()=>n.remove(),t+400)}function gf(){return new Promise(e=>{let t=0,n=0,s="",o=0;const i=document.createElement("div");i.className="sheet adult",i.innerHTML='<div class="card adultCard"></div>',document.body.appendChild(i);const a=i.firstElementChild,r=()=>{t=6+Math.floor(Math.random()*4),n=3+Math.floor(Math.random()*7),s="",l()},l=()=>{a.innerHTML=`<button class="close" data-k="x">✕</button><h2>Grown-ups only</h2><p class="q" data-q="${t*n}">What is ${t} × ${n}?</p>
        <div class="ans">${s||"&nbsp;"}</div>
        <div class="pad">${[1,2,3,4,5,6,7,8,9,"⌫",0,"OK"].map(d=>`<button data-k="${d}">${d}</button>`).join("")}</div>`},c=d=>{i.remove(),e(d)};a.addEventListener("click",d=>{const f=d.target.closest("[data-k]")?.dataset.k;if(f){if(f==="x")return c(!1);if(f==="⌫")s=s.slice(0,-1);else if(f==="OK"){if(+s===t*n)return c(!0);if(++o>=3)return c(!1);a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),400),r();return}else s.length<3&&(s+=f);l()}}),i.addEventListener("click",d=>{d.target===i&&c(!1)}),r()})}let un=null,hf=!0;const Am=e=>{hf=e};function ge(e,t,n="sine",s=0,o=.15){if(hf)try{un??=new(window.AudioContext||window.webkitAudioContext),un.state==="suspended"&&un.resume().catch(()=>{});const i=un.createOscillator(),a=un.createGain(),r=un.currentTime,l=Math.max(40,e*(.94+Math.random()*.12));i.type=n,i.frequency.setValueAtTime(l,r),s&&i.frequency.exponentialRampToValueAtTime(Math.max(40,l*s),r+t);const c=Math.min(.02,Math.max(.008,t*.22));if(a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,o),r+c),a.gain.exponentialRampToValueAtTime(.001,r+Math.max(t,c+.02)),n==="square"||n==="sawtooth"){const d=un.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(1400,r),d.Q.setValueAtTime(.7,r),i.connect(d).connect(a).connect(un.destination)}else i.connect(a).connect(un.destination);i.start(r),i.stop(r+t+.02)}catch{}}const S={pick:()=>ge(520,.12,"sine",1.6),drop:()=>{ge(380,.1,"triangle",.7),setTimeout(()=>ge(620,.08,"sine"),60)},pop:()=>ge(800,.15,"square",.3,.08),click:()=>ge(660,.07,"triangle"),swish:()=>ge(300,.25,"sine",2.5,.1),meow:()=>{ge(700,.12,"triangle",1.3,.1),setTimeout(()=>ge(900,.22,"triangle",.6,.1),110)},purr:()=>[0,90,180,270,360].forEach(e=>setTimeout(()=>ge(70,.09,"sawtooth",1,.05),e)),woof:()=>{ge(260,.09,"square",.6,.09),setTimeout(()=>ge(220,.12,"square",.5,.09),130)},spin:()=>ge(400,.35,"sine",2.2,.08),boing:()=>ge(200,.3,"sine",3,.1),splash:()=>[0,50,110].forEach((e,t)=>setTimeout(()=>ge(900-t*200,.12,"triangle",.4,.06),e)),moo:()=>{ge(160,.5,"sawtooth",.8,.07),setTimeout(()=>ge(140,.45,"sawtooth",.85,.06),380)},baa:()=>[0,90,180].forEach(e=>setTimeout(()=>ge(420,.1,"sawtooth",.95,.05),e)),bleat:()=>[0,70,140,210].forEach(e=>setTimeout(()=>ge(520,.07,"square",1.05,.04),e)),oink:()=>{ge(300,.12,"square",.6,.07),setTimeout(()=>ge(330,.12,"square",.55,.07),160)},peep:()=>[0,120,240].forEach((e,t)=>setTimeout(()=>ge(1800+t*150,.07,"sine",1.2,.08),e)),squeak:()=>ge(1400,.1,"sine",1.5,.08),neigh:()=>{ge(700,.5,"sawtooth",.6,.05),[0,60,120,180,240].forEach(e=>setTimeout(()=>ge(620-e,.06,"triangle",1,.04),300+e))},honk:()=>{ge(330,.18,"square",1,.07),setTimeout(()=>ge(330,.25,"square",1,.07),230)},munch:()=>[0,110,220,330].forEach(e=>setTimeout(()=>ge(180+Math.random()*60,.05,"square",.6,.05),e)),cluck:()=>[0,100,180].forEach((e,t)=>setTimeout(()=>ge(600+t*80,.06,"square",.8,.05),e)),plant:()=>{ge(260,.1,"triangle",.6),setTimeout(()=>ge(520,.1,"sine"),90)},water:()=>[0,60,120,180,240].forEach((e,t)=>setTimeout(()=>ge(1200-t*120,.08,"sine",.7,.05),e)),pickup:()=>[660,880,990].forEach((e,t)=>setTimeout(()=>ge(e,.1,"triangle"),t*60)),sparkle:()=>[880,1100,1320].forEach((e,t)=>setTimeout(()=>ge(e,.12),t*70))},zd=new Map;function Dm(e,t){const n=(e?"s":"o")+(t?"f":"n"),s=zd.get(n);if(s)return s;const a=`<svg viewBox="0 0 200 260" aria-hidden="true">
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
  </svg>`;return zd.set(n,a),a}const qo="#5a3d5c";function lr(e){return e&&/^#[0-9a-fA-F]{6}$/.test(e)?e.toLowerCase():"#f1c27d"}const Ti={x:60,y:118,w:56,h:40};function Im(e,t,n){return n==="lie"&&e==="over"?null:t&&n==="lie"?{d:"M72 172 C36 200 40 228 88 220",sleeve:"M72 172 C52 186 44 196 42 204",hx:88,hy:220}:t&&n==="sit"?e==="under"?{d:"M72 172 C40 190 46 220 108 228",sleeve:"M72 172 C56 178 46 184 42 188",hx:108,hy:228}:{d:"M128 172 C154 192 150 214 118 208",sleeve:"M128 172 C142 180 148 186 150 190",hx:118,hy:208}:t?e==="under"?{d:"M72 172 C40 196 48 222 112 214",sleeve:"M72 172 C56 178 46 184 42 188",hx:112,hy:214}:{d:"M128 172 C158 180 154 200 124 196",sleeve:"M128 172 C144 178 150 184 154 188",hx:124,hy:196}:n==="lie"?{d:"M22 84 C10 112 14 136 46 130",sleeve:"",hx:46,hy:130}:e==="under"?{d:"M22 84 C14 104 12 128 44 130",sleeve:"",hx:44,hy:130}:{d:"M78 84 C90 98 86 118 64 114",sleeve:"",hx:64,hy:114}}function Hm(e,t,n){const s=`M${e-8} ${t-1} Q${e-9} ${t-11} ${e} ${t-11} Q${e+9} ${t-11} ${e+9} ${t} Q${e+9} ${t+9} ${e} ${t+10} Q${e-9} ${t+9} ${e-8} ${t-1} Z`,o=`<ellipse cx="${e+8}" cy="${t-2}" rx="3.2" ry="5" fill="${n}" stroke="${qo}" stroke-width="3.4" transform="rotate(-24 ${e+8} ${t-2})"/>`;return`<path class="cradle-hand" data-cx="${e}" data-cy="${t}" d="${s}" fill="${n}" stroke="${qo}" stroke-width="3.9"/>${o}`}function yi(e,t,n,s,o){const i=Im(e,t,s);if(!i)return"";const a=lr(n),r=o&&/^#[0-9a-fA-F]{6}$/.test(o)?o.toLowerCase():"",l='fill="none" stroke-linecap="round" stroke-linejoin="round"',c=t?16:12,d=t?20.2:15.5;let f=`<path d="${i.d}" ${l} stroke="${qo}" stroke-width="${d}"/><path d="${i.d}" ${l} stroke="${a}" stroke-width="${c}"/>`;t&&i.sleeve&&r&&(f+=`<path d="${i.sleeve}" ${l} stroke="${qo}" stroke-width="29"/><path d="${i.sleeve}" ${l} stroke="${r}" stroke-width="22"/>`);const g=t?Hm(i.hx,i.hy,a):`<circle class="cradle-hand" data-cx="${i.hx}" data-cy="${i.hy}" cx="${i.hx}" cy="${i.hy}" r="7" fill="${a}" stroke="${qo}" stroke-width="3.5"/>`;return`<g class="arm cradle">${f}${g}</g>`}const Bi=110,$o=148,Sd=80,Pd=57,Om=60,Wm=133,Um=42,Vm=30,Qm=60,qm=129,Ri=["feed","burp","change","rock"],Ir=["Bean","Pip","Mochi","Bunny","Dot","Sunny"];function Zm(e){let t=null,n=null,s=null,o=!1,i=Number.NaN,a=0,r=0,l=!1,c=!1;const d=typeof navigator<"u"&&!!navigator.webdriver;function f(P,B,N,U,V){P.style.left=(B-U/2)/zt*100+"%",P.style.top=(N-V)/$n*100+"%",P.style.width=U/zt*100+"%",P.style.height=V/$n*100+"%"}function g(P){const B=P.scale&&P.scale>0?P.scale:1,N=P.pose==="sit"||P.pose==="lie"?P.pose:null,U=P.chibi&&P.pose!=="sit"&&P.pose!=="lie",V=U?Ti.x:P.chibi?Qm:Om,j=U?Ti.y:P.chibi?qm:Wm,fe=U?Ti.w:P.chibi?Um:Sd,Me=U?Ti.h:P.chibi?Vm:Pd,me=M0(V,j,N,!!P.lieFlip,B),He=N==="lie"?me.x:P.flip?-me.x:me.x,A=fe*B,O=Me*B;return{x:P.x+He,y:P.y+me.y+O/2,w:A,h:O}}function h(P,B){let N=null,U=0;for(let V=0;V<Ri.length;V++){const j=Ri[V],fe=P.at?.[j]??0;fe>0&&B-fe>=0&&B-fe<1100&&fe>=U&&(N=j,U=fe)}return N}function m(P){if(P.mood<=2||!e.canSend()){window.clearTimeout(a),i=Number.NaN;return}if(i===P.since)return;window.clearTimeout(a),i=P.since;const B=Math.max(0,P.since+al-e.clock());a=window.setTimeout(()=>{i=Number.NaN;const N=e.get().baby;!N||N.mood<=2||!e.canSend()||e.dispatch({type:"baby/ease",now:e.clock()})},B)}function b(P,B){window.clearTimeout(r);let N=0;for(let U=0;U<Ri.length;U++){const V=P.at?.[Ri[U]]??0;B-V>=0&&B-V<1100&&V>N&&(N=V)}N&&(r=window.setTimeout(()=>Qe(),Math.max(0,1100-(B-N))))}function _(P,B){if(typeof document.elementsFromPoint!="function")return null;const N=document.elementsFromPoint(P,B),U=e.get(),V=U.rooms[U.currentRoom]?.items??[];for(let j=0;j<N.length;j++){const fe=N[j];if(!fe||typeof fe.closest!="function"||fe.closest(".baby, .babyCare, .babyMeet"))continue;const Me=fe.closest(".item");if(!Me)continue;const me=Me.dataset.id||"";for(let He=0;He<V.length;He++){const A=V[He];if(A.id===me&&(Ls(A.kind)||e.box(A)))return A}}return null}function y(P){P.addEventListener("pointerdown",B=>{if(B.button!==0)return;const N=e.get().baby;if(!N)return;if(B.preventDefault(),B.stopPropagation(),N.spot==="arms"&&N.holder&&N.holder!==e.holderId()&&e.holderHere(N.holder)){Z("Someone is cuddling!");return}if(!e.editable()){e.locked();return}if(!e.canSend())return;const U=e.owner(),V=U,j=B.clientX,fe=B.clientY,Me=B.pointerId;let me=!1;const He=O=>{if(O.pointerId!==Me||(Math.hypot(O.clientX-j,O.clientY-fe)>6&&(me=!0),!V||!me))return;o=!0;const je=e.toRoom(O.clientX,O.clientY);f(P,je.x,je.y,Bi,$o)},A=O=>{if(O.pointerId!==Me)return;window.removeEventListener("pointermove",He),window.removeEventListener("pointerup",A),window.removeEventListener("pointercancel",A);const je=o&&me&&V;if(o=!1,O.type==="pointercancel"){Qe();return}if(je){const dt=document.elementFromPoint(O.clientX,O.clientY)?.closest(".tab[data-room]");if(dt&&dt.dataset.room){const bo=dt.dataset.room,Ch=e.toRoom(O.clientX,O.clientY),od=U0(Ch.x,zt);bo!==e.get().currentRoom&&e.dispatch({type:"room/switch",room:bo}),e.dispatch({type:"baby/place",room:bo,x:od.x,y:od.y,spot:"mat",bed:null,seat:null,now:e.clock()}),S.drop();return}const as=e.toRoom(O.clientX,O.clientY),tn=_(O.clientX,O.clientY),zr=tn?e.box(tn):null,rs=W0({mode:e.play()?"play":"decorate",releaseX:Math.max(0,Math.min(zt,as.x)),releaseY:Math.max(0,Math.min($n,as.y)),piece:zr,occupied:e.occupied()});e.dispatch({type:"baby/place",room:e.get().currentRoom,x:rs.x,y:rs.y,spot:rs.spot,bed:rs.bed,seat:rs.seat,now:e.clock()}),S.drop();return}if(me){Qe();return}const ot=e.get().baby;if(!ot)return;if(ot.spot==="arms"&&ot.holder===e.holderId()){const dt=e.toRoom(O.clientX,O.clientY);e.dispatch({type:"baby/hold",holder:null,room:e.get().currentRoom,x:Math.max(0,Math.min(zt,dt.x)),y:Math.max(40,Math.min($n,dt.y)),now:e.clock()}),S.drop();return}const Oe=e.holderSpot(),Te=Oe?g(Oe):null,Le=Te?Te.x:ot.x,ct=Te?Math.max(40,Te.y):ot.y;e.dispatch({type:"baby/hold",holder:e.holderId(),room:e.get().currentRoom,x:Le,y:ct,now:e.clock()}),S.pick()};window.addEventListener("pointermove",He),window.addEventListener("pointerup",A),window.addEventListener("pointercancel",A)})}function u(){return t&&t.isConnected||(t=document.createElement("div"),t.className="baby",t.dataset.baby="1",t.innerHTML='<div class="hit"></div><div class="babySpin"><div class="babyRock"><div class="babyInner"></div></div></div><div class="babyZzz" hidden>z z z</div><div class="babyBurp" hidden><i></i></div>',e.layer.appendChild(t),y(t)),t}function k(P,B){const N=P.querySelector(".babyWord");N&&(N.textContent=S0(B));const U=P.querySelectorAll(".babyBlossom"),V=P0(B);for(let fe=0;fe<U.length;fe++)U[fe].classList.toggle("on",fe<V);const j=P.querySelector(".babyMeter");j&&(j.dataset.mood=String(B))}function x(P){const B=af(P);if(!B){Z("Try another name!");return}const N=e.get().baby;!N||N.name===B||(e.dispatch({type:"baby/name",name:B}),S.click())}function R(P){n=document.createElement("div"),n.className="babyCare",n.dataset.babyCare="1";const B=[];for(let V=0;V<5;V++)B.push('<i class="babyBlossom"></i>');const N=[];for(let V=0;V<Ir.length;V++)N.push(`<button type="button" data-preset="${Ir[V]}">${Ir[V]}</button>`);n.innerHTML=`<p class="babyWord"></p><span class="babyMeter"><span class="babyBlossoms">${B.join("")}</span></span>
      <button type="button" data-care="feed">Bottle</button>
      <button type="button" data-care="burp">Burp</button>
      <button type="button" data-care="change">Diaper</button>
      <button type="button" data-care="rock">Rock</button>
      <button type="button" data-baby-name-open>Name</button>
      <div class="babyNames" hidden>
        <input type="text" maxlength="14" autocomplete="off" enterkeyhint="done" aria-label="Baby name" value="">
        ${N.join("")}
      </div>`,k(n,P.mood),n.addEventListener("pointerdown",V=>V.stopPropagation()),n.addEventListener("click",V=>{const j=V.target,fe=j.closest("[data-care]");if(fe&&fe.dataset.care){if(!e.editable()){e.locked();return}if(!e.canSend())return;const me=fe.dataset.care;e.dispatch({type:"baby/care",care:me,now:e.clock()}),me==="rock"?S.purr():me==="feed"?S.sparkle():S.click();return}if(j.closest("[data-baby-name-open]")){if(!e.owner())return;c=!c;const me=n?.querySelector(".babyNames");me&&(me.hidden=!c);const He=n?.querySelector("input");c&&He&&(He.value=e.get().baby?.name??"",He.focus());return}const Me=j.closest("[data-preset]");if(Me&&e.owner()){x(Me.dataset.preset||"");return}}),n.querySelector("input")?.addEventListener("keydown",V=>{V.key==="Enter"&&(V.preventDefault(),x(V.target.value))}),e.stageWrap.appendChild(n)}function H(P,B){if(!e.play()){I();return}const N=n&&document.activeElement&&n.contains(document.activeElement);if((!n||!n.isConnected)&&R(P),!n)return;n.hidden=!1,k(n,P.mood);const U=n.querySelector("[data-baby-name-open]");U&&(U.hidden=!B);const V=n.querySelector(".babyNames");V&&(V.hidden=!B||!c);const j=n.querySelector("input");j&&!N&&(j.value=P.name),K()}function I(){c=!1,n&&(n.remove(),n=null),K()}function K(){const P=!!(n&&n.isConnected&&!n.hidden),B=document.body.classList.contains("baby-card");document.body.classList.toggle("baby-card",P),B!==P&&window.dispatchEvent(new Event("resize"))}function le(P){if(!P||d){s&&(s.remove(),s=null);return}if(s&&s.isConnected){s.hidden=!1;return}s=document.createElement("button"),s.type="button",s.className="babyMeet",s.textContent="Meet the baby",s.addEventListener("pointerdown",B=>B.stopPropagation()),s.addEventListener("click",()=>{if(!e.editable()){e.locked();return}!e.canSend()||e.get().baby||(e.dispatch({type:"baby/meet",now:e.clock()}),S.sparkle())}),e.stageWrap.appendChild(s)}function ce(){const P=e.get().rooms.nursery?.items??[];for(let B=0;B<P.length;B++)if(Ls(P[B].kind)==="crib")return!0;return!1}function G(P,B){P.classList.remove("baby-lie","baby-lie-r","baby-cradle","cradle-lie","flipped");const N=e.get().currentRoom;if((B.spot==="crib"||B.spot==="bassinet")&&B.bed){const U=e.get().rooms[B.room]?.items.find(j=>j.id===B.bed)??null,V=U?e.box(U):null;if(U&&V){const j=Np(U.kind,V);f(P,j.x,j.y+$o/2,Bi,$o),P.style.zIndex=String(1e3+U.z+1),P.classList.add("baby-lie"),U.flip&&P.classList.add("baby-lie-r");return}}if(B.spot==="arms"){const U=B.holder?e.holderSpot(B.holder):null,V=U?g(U):null,j=V?V.x:B.x,fe=V?V.y:B.y,Me=V?V.w:Sd,me=V?V.h:Pd;f(P,j,fe,Me,me),P.style.zIndex=String(5e3+Math.round(U?U.y:B.y)+2),P.classList.add("baby-cradle"),P.style.setProperty("--spin-w",(me/Me*100).toFixed(4)+"%"),P.style.setProperty("--spin-h",(Me/me*100).toFixed(4)+"%"),U&&U.pose==="lie"&&P.classList.add("cradle-lie"),U&&(U.pose==="lie"?U.lieFlip:U.flip)&&P.classList.add("flipped");return}if(B.spot==="mat"&&B.seat){const U=e.seatAt(N,B.seat,B);f(P,U.x,U.y,Bi,$o);const V=e.get().rooms[N]?.items.find(j=>j.id===B.seat?.item);P.style.zIndex=String(1e3+(V?.z??0)+1),B.seat.pose==="lie"&&(P.classList.add("baby-lie"),V?.flip&&P.classList.add("baby-lie-r"));return}f(P,B.x,B.y,Bi,$o),P.style.zIndex=String(5e3+Math.round(B.y))}function pe(P){if(P.spot!=="arms"||!P.holder)return!1;const B=e.get().characters.find(N=>N.id===P.holder);return!!B&&B.room!==P.room}function en(P){o||!pe(P)||!e.canSend()||!e.editable()||e.dispatch({type:"baby/hold",holder:null,room:P.room,x:P.x,y:ui,now:e.clock()})}function Dt(P){if(o||pe(P)||P.spot!=="arms"||P.holder!==e.holderId()||!e.canSend()||!e.editable())return;const B=e.holderSpot();if(!B)return;const N=e.get().currentRoom;if(P.room===N)return;const U=g(B);e.dispatch({type:"baby/hold",holder:P.holder,room:N,x:U.x,y:Math.max(40,U.y),now:e.clock()})}function Qe(){const P=e.get(),B=P.baby,N=!!B&&B.spot==="arms"&&!!B.holder&&!!e.holderSpot(B.holder),U=!!B&&B.spot==="arms"&&B.holder===e.holderId()&&!!e.holderSpot(),V=!!(B&&e.inHouse()&&(B.room===P.currentRoom||N||U));if(!B||!V){t&&(t.remove(),t=null),o=!1,I(),window.clearTimeout(a),i=Number.NaN;const Le=!d&&!B&&e.inHouse()&&e.owner()&&e.editable()&&e.canSend()&&P.currentRoom==="nursery"&&ce();le(Le);return}le(!1),ro()&&!zs("baby")&&!l&&(l=!0,rr(["baby"]).then(()=>Qe()));const j=u(),fe=e.clock(),Me=h(B,fe),me=Me==="rock",He=Me==="change",A=!me&&!He&&ro()?zs("baby"):"",O=j.querySelector(".babyInner"),je=(A||"svg")+(me?"s":"")+(He?"f":"");O&&j.dataset.look!==je&&(O.innerHTML=A?`<img class="artimg" alt="" draggable="false" src="${A}">`:Dm(me,He),j.dataset.look=je),j.dataset.babySpot=B.spot,j.dataset.babyMood=String(B.mood),j.dataset.babyName=B.name,j.classList.toggle("is-feed",Me==="feed"),j.classList.toggle("is-burp",Me==="burp"),j.classList.toggle("is-change",Me==="change"),j.classList.toggle("is-rock",Me==="rock");const ot=j.querySelector(".babyZzz"),Oe=j.querySelector(".babyBurp"),Te=(B.spot==="crib"||B.spot==="bassinet")&&!Me;ot&&(ot.hidden=!Te),Oe&&(Oe.hidden=Me!=="burp"),o&&j.isConnected||G(j,B),H(B,e.owner()),m(B),b(B,fe),en(B),Dt(B)}return{render:Qe}}const Nm={hip:0,head:3,armL:26,armR:-22,legL:-76,legR:76,legLLift:8,legRLift:8},Fm={hip:0,head:-8,armL:18,armR:-12,legL:-4,legR:6,legLLift:0,legRLift:0};function cr(e){return e==="sit"?Nm:e==="lie"?Fm:null}const Ze="#5a3d5c",te=(e=4)=>`stroke="${Ze}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,fc=600,Nt=250,ds=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})">
  <rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${te()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${te()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${te()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${te()}/>
  <circle cx="-18" cy="-78" r="9" fill="#fff" opacity=".35"/></g>`,jm=(e,t,n)=>`<g transform="translate(${e} ${t})"><path d="M0 0 V-16" ${te(3)}/>${[0,72,144,216,288].map(s=>`<circle cx="${Math.cos(s*Math.PI/180)*6}" cy="${-20+Math.sin(s*Math.PI/180)*6}" r="5" fill="${n}" ${te(2)}/>`).join("")}<circle cx="0" cy="-20" r="4" fill="#ffd166" ${te(2)}/></g>`,Td=e=>`<g transform="translate(${e} 0)">
  <rect x="-80" y="452" width="160" height="12" rx="6" fill="#ff9f68" ${te()}/><rect x="-80" y="470" width="160" height="12" rx="6" fill="#ff9f68" ${te()}/>
  <rect x="-70" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${te(3)}/><rect x="60" y="500" width="10" height="34" rx="4" fill="#8d6e63" ${te(3)}/>
  <rect x="-86" y="490" width="172" height="14" rx="7" fill="#ffb385" ${te()}/></g>`;function Gm(){const e=cc,t=Array.from({length:Math.floor((rt.x1-rt.x0+40)/34)},(n,s)=>`<path d="M${rt.x0-20+s*34} 470 V428 l8 -10 l8 10 V470 Z" fill="#fff6e6" ${te(3)}/>`).join("");return`<svg class="parkScene" viewBox="0 0 ${e} ${fc}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="pkSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff"/><stop offset="1" stop-color="#eaf7ff"/></linearGradient>
  <pattern id="pkCheck" width="30" height="30" patternUnits="userSpaceOnUse"><rect width="30" height="30" fill="#fff"/><rect width="15" height="15" fill="#ff8fab"/><rect x="15" y="15" width="15" height="15" fill="#ff8fab"/></pattern></defs>
  <rect width="${e}" height="440" fill="url(#pkSky)"/>
  ${[180,900,1600,2300].map((n,s)=>`<g transform="translate(${n} ${70+s%2*30})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <circle cx="${e-220}" cy="90" r="46" fill="#ffe066" ${te(4)}/>
  <path d="M-50 360 Q500 220 1100 340 T2300 330 T${e+100} 350 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#9fe0aa"/><path d="M0 410 H${e}" ${te(4)}/>
  <path d="M0 560 Q700 520 1400 565 T${e} 545 V600 H0 Z" fill="#f6e3c3" opacity=".9"/>
  ${ds(260,390,.9)}${ds(720,380,1.05,"#4fbf7a")}${ds(1230,385,.8)}${ds(1640,380,1,"#4fbf7a")}${ds(1990,388,.85)}${ds(2380,380,.95)}${ds(2860,390,.9,"#4fbf7a")}
  ${[[300,470,"#ff8fab"],[690,455,"#c9a0dc"],[1210,470,"#ffd166"],[1960,450,"#8ecae6"],[2390,470,"#ff8fab"],[1580,590,"#c9a0dc"],[140,585,"#ffd166"]].map(([n,s,o])=>jm(+n,+s,String(o))).join("")}
  <!-- gate back to the street -->
  <g><rect x="40" y="300" width="22" height="200" rx="6" fill="#c99366" ${te()}/><rect x="168" y="300" width="22" height="200" rx="6" fill="#c99366" ${te()}/>
    <path d="M30 312 Q115 240 200 312" fill="none" stroke="${Ze}" stroke-width="16" stroke-linecap="round"/><path d="M30 312 Q115 240 200 312" fill="none" stroke="#ff9f68" stroke-width="9" stroke-linecap="round"/>
    <rect x="62" y="252" width="106" height="36" rx="12" fill="#fff6e6" ${te(3)}/><text x="115" y="278" text-anchor="middle" font-size="22" font-weight="900" fill="${Ze}" font-family="Nunito, system-ui, sans-serif">PARK</text></g>
  <!-- swing set (seats are separate so they can swing) -->
  <g><path d="M350 ${Nt} L310 500 M350 ${Nt} L390 500 M650 ${Nt} L610 500 M650 ${Nt} L690 500" stroke="${Ze}" stroke-width="14" stroke-linecap="round"/>
    <path d="M350 ${Nt} L310 500 M350 ${Nt} L390 500 M650 ${Nt} L610 500 M650 ${Nt} L690 500" stroke="#8ecae6" stroke-width="7" stroke-linecap="round"/>
    <rect x="330" y="${Nt-10}" width="340" height="20" rx="10" fill="#ff8fab" ${te()}/></g>
  <!-- slide -->
  <g><path d="M${he.ladder-20} 560 V${he.top.y} M${he.ladder+30} 560 V${he.top.y}" stroke="${Ze}" stroke-width="12" stroke-linecap="round"/>
    <path d="M${he.ladder-20} 560 V${he.top.y} M${he.ladder+30} 560 V${he.top.y}" stroke="#c9a0dc" stroke-width="6" stroke-linecap="round"/>
    ${[380,420,460,500,540].map(n=>`<path d="M${he.ladder-20} ${n} H${he.ladder+30}" ${te(5)}/>`).join("")}
    <rect x="${he.ladder-30}" y="${he.top.y-14}" width="100" height="18" rx="8" fill="#ffd166" ${te()}/>
    <path d="M${he.ladder+60} ${he.top.y-10} C 1000 ${he.top.y} 1010 520 ${he.bottom.x+40} 548 L${he.bottom.x+40} 572 C 990 548 975 ${he.top.y+30} ${he.ladder+60} ${he.top.y+14} Z" fill="#ffd166" ${te()}/>
    <path d="M${he.ladder+70} ${he.top.y-2} C 990 ${he.top.y+8} 1000 525 ${he.bottom.x+30} 552" fill="none" stroke="#fff3b0" stroke-width="6" stroke-linecap="round"/></g>
  <!-- splash pond -->
  <g class="pondArt"><ellipse cx="1420" cy="515" rx="185" ry="52" fill="#8ecae6" ${te()}/><ellipse cx="1420" cy="510" rx="150" ry="36" fill="#b5e3f5"/>
    <ellipse cx="1340" cy="520" rx="24" ry="9" fill="#80ed99" ${te(3)}/><ellipse cx="1500" cy="505" rx="20" ry="8" fill="#80ed99" ${te(3)}/>
    <g transform="translate(1440 500)"><ellipse cx="0" cy="0" rx="20" ry="12" fill="#ffd166" ${te(3)}/><circle cx="16" cy="-12" r="9" fill="#ffd166" ${te(3)}/><path d="M24 -12 l8 2 l-8 3 z" fill="#ff9f68" ${te(2)}/><circle cx="18" cy="-14" r="1.8" fill="${Ze}"/></g></g>
  <!-- picnic blanket -->
  <g><path d="M1670 530 L1910 530 L1940 580 L1640 580 Z" fill="url(#pkCheck)" ${te()}/>
    <g transform="translate(1915 520)"><rect x="-26" y="-20" width="52" height="32" rx="8" fill="#e6b88a" ${te(3)}/><path d="M-18 -20 Q0 -46 18 -20" fill="none" ${te(4)}/><circle cx="-10" cy="-24" r="7" fill="#ff6b6b" ${te(2)}/></g></g>
  ${Td(2065)}${Td(2265)}
  <!-- dog area -->
  <g>${t}<path d="M${rt.x0-20} 440 H${rt.x1+20}" ${te(3)}/>
    <g transform="translate(${rt.x0+10} 380)"><rect x="-6" y="0" width="12" height="70" fill="#c99366" ${te(3)}/><rect x="-55" y="-34" width="110" height="38" rx="10" fill="#fff6e6" ${te(3)}/>
      <text x="0" y="-8" text-anchor="middle" font-size="20" font-weight="900" fill="${Ze}" font-family="Nunito, system-ui, sans-serif">DOGS 🐾</text></g>
    <g transform="translate(${rt.x1-30} 470)"><path d="M-50 0 V-60 L0 -100 L50 -60 V0 Z" fill="#ff8fab" ${te()}/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="${Ze}" stroke-width="14" stroke-linecap="round"/><path d="M-62 -54 L0 -108 L62 -54" fill="none" stroke="#c9a0dc" stroke-width="8" stroke-linecap="round"/><path d="M-20 0 V-30 a20 20 0 0 1 40 0 V0 Z" fill="#5a3d5c"/></g>
    <g transform="translate(${rt.x0+120} 500)"><rect x="-12" y="-30" width="24" height="34" rx="8" fill="#ff6b6b" ${te(3)}/><rect x="-18" y="-18" width="36" height="8" rx="4" fill="#ff6b6b" ${te(3)}/><circle cx="0" cy="-32" r="10" fill="#ff6b6b" ${te(3)}/></g></g>
  </svg>`}const Ym=`<svg viewBox="0 0 60 240" preserveAspectRatio="none"><path d="M10 0 V222 M50 0 V222" stroke="${Ze}" stroke-width="4"/><rect x="0" y="216" width="60" height="14" rx="6" fill="#ff9f68" ${te(3)}/></svg>`,Km=`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#ffd166" ${te(3)}/><path d="M6 16 Q20 24 34 16 M8 27 Q20 19 32 27" fill="none" stroke="#fff" stroke-width="3"/></svg>`,Xm=`<svg viewBox="0 0 48 48"><rect x="20" y="28" width="8" height="14" rx="3" fill="#c99366" stroke="${Ze}" stroke-width="3"/><circle cx="24" cy="20" r="13" fill="#5cc985" stroke="${Ze}" stroke-width="3"/><circle cx="19" cy="16" r="3" fill="#fff" opacity=".5"/></svg>`,uf=`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="31" rx="10" ry="8" fill="#ff8fab" stroke="${Ze}" stroke-width="3"/><circle cx="13" cy="20" r="4.5" fill="#ff8fab" stroke="${Ze}" stroke-width="3"/><circle cx="20" cy="13" r="4.5" fill="#ff8fab" stroke="${Ze}" stroke-width="3"/><circle cx="28" cy="13" r="4.5" fill="#ff8fab" stroke="${Ze}" stroke-width="3"/><circle cx="35" cy="20" r="4.5" fill="#ff8fab" stroke="${Ze}" stroke-width="3"/></svg>`,Jm=`<svg viewBox="0 0 48 48"><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="${Ze}" stroke-width="4" stroke-linecap="round"/><path d="M8 40 V20 Q24 4 40 20 V40" fill="none" stroke="#ff9f68" stroke-width="2"/><path d="M16 40 V26 M24 40 V22 M32 40 V26" stroke="${Ze}" stroke-width="3" stroke-linecap="round"/></svg>`,bt="#5a3d5c",ve=`stroke="${bt}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Hr=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="3" fill="${bt}"/><circle cx="${t}" cy="${n}" r="3" fill="${bt}"/><circle cx="${e+1}" cy="${n-1}" r="1" fill="#fff"/><circle cx="${t+1}" cy="${n-1}" r="1" fill="#fff"/>`,Or=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/><ellipse cx="${t}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/>`,Ai='<ellipse cx="50" cy="97" rx="34" ry="3" fill="#000" opacity=".12"/>',e1=`<svg viewBox="0 0 40 30"><path d="M4 30 V16 Q4 2 20 2 Q36 2 36 16 V30 Z" fill="#3b2a3d" ${ve}/><circle cx="14" cy="18" r="1.6" fill="#fff" opacity=".8"/><circle cx="22" cy="18" r="1.6" fill="#fff" opacity=".8"/></svg>`,t1=`<svg viewBox="0 0 48 30"><path d="M4 27 Q10 22 22 23 L42 23 Q46 27 42 28 H6 Z" fill="#cdeccf" ${ve}/><circle cx="26" cy="15" r="11" fill="#ffb3c6" ${ve}/><path d="M26 15 m-5 0 a5 5 0 1 1 5 5" fill="none" ${ve}/><path d="M8 23 L5 13 M12 23 L12 13" ${ve}/></svg>`,n1=`<svg viewBox="0 0 30 30"><path d="M15 2 l3.6 8 8.4 1 -6.3 5.8 1.8 8.4 -7.5 -4.4 -7.5 4.4 1.8 -8.4 L3 11 l8.4 -1z" fill="#fff3b0" ${ve}/></svg>`,s1=`<svg viewBox="0 0 30 22"><ellipse cx="15" cy="13" rx="13" ry="8" fill="#e6b88a" ${ve}/><circle cx="10" cy="11" r="1.8" fill="${bt}"/><circle cx="18" cy="14" r="1.8" fill="${bt}"/><circle cx="16" cy="9" r="1.5" fill="${bt}"/></svg>`,o1=`<svg viewBox="0 0 30 28"><path d="M15 26 C3 18 1 10 6 5 C10 1 14 4 15 7 C16 4 20 1 24 5 C29 10 27 18 15 26 Z" fill="#ffc8dd" ${ve}/></svg>`,_a=[{name:"Cada",room:"living",x:150,y:382,w:40,h:30,taps:3,spot:e1,hello:"Squeak! Hi Cada!",item:{kind:"egg:cada-mouse",name:"Cada's Mouse",cat:"secrets",w:80,holdable:!0,svg:`${Ai}<path d="M78 74 Q96 68 92 52" stroke="#ff9bb5" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="28" ry="18" fill="#d6d6e8" ${ve}/><circle cx="28" cy="40" r="13" fill="#d6d6e8" ${ve}/><circle cx="62" cy="38" r="13" fill="#d6d6e8" ${ve}/><circle cx="28" cy="40" r="7" fill="#ffc8dd"/><circle cx="62" cy="38" r="7" fill="#ffc8dd"/><circle cx="45" cy="56" r="20" fill="#e4e4f2" ${ve}/>${Hr(38,52,54)}<circle cx="45" cy="64" r="3" fill="#ff8fab"/>${Or(32,58,62)}<text x="50" y="96" font-size="11" font-weight="900" text-anchor="middle" fill="${bt}">C</text>`}},{name:"Sloane",room:"living",x:2290,y:383,w:48,h:30,taps:3,spot:t1,hello:"Hi Sloane! ✨",item:{kind:"egg:sloane-snail",name:"Sloane's Rainbow Snail",cat:"secrets",w:110,holdable:!0,svg:`${Ai}<path d="M6 92 Q14 80 36 82 L84 82 Q94 90 84 94 H10 Z" fill="#cdeccf" ${ve}/><circle cx="56" cy="52" r="32" fill="#ff8fab" ${ve}/><circle cx="56" cy="52" r="24" fill="#ffd166"/><circle cx="56" cy="52" r="17" fill="#80ed99"/><circle cx="56" cy="52" r="10" fill="#8ecae6"/><circle cx="56" cy="52" r="4" fill="#c9a0dc"/><circle cx="56" cy="52" r="32" fill="none" ${ve}/><path d="M14 82 L8 60 M24 82 L24 60" ${ve}/><circle cx="8" cy="58" r="4" fill="${bt}"/><circle cx="24" cy="58" r="4" fill="${bt}"/>${Or(14,30,76)}`}},{name:"Chloe",room:"bedroom",x:2230,y:92,w:30,h:30,taps:5,spot:n1,item:{kind:"egg:chloe-starlamp",name:"Chloe's Star Lamp",cat:"secrets",w:100,holdable:!0,svg:`${Ai}<circle cx="50" cy="38" r="34" fill="#fff3b0" opacity=".6"/><path d="M50 6 l8 17 19 2.5 -14 13 4 19 -17 -9.5 -17 9.5 4 -19 -14 -13 19 -2.5z" fill="#ffd166" ${ve}/>${Hr(43,57,38)}<path d="M45 46 q5 4 10 0" ${ve} fill="none"/><rect x="46" y="66" width="8" height="22" rx="4" fill="#c9a0dc" ${ve}/><ellipse cx="50" cy="90" rx="22" ry="6" fill="#b388d6" ${ve}/><text x="50" y="93" font-size="8" font-weight="900" text-anchor="middle" fill="#fff">CHLOE</text>`}},{name:"Quinn",room:"kitchen",x:80,y:588,w:30,h:22,taps:4,spot:s1,hello:"Woof! Hi Quinn!",item:{kind:"egg:quinn-pup",name:"Quinn's Cookie Pup",cat:"secrets",w:110,holdable:!0,svg:`${Ai}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#e6b88a" ${ve}/><circle cx="50" cy="44" r="27" fill="#f2d0a4" ${ve}/><ellipse cx="24" cy="46" rx="10" ry="17" fill="#b07d54" ${ve}/><ellipse cx="76" cy="46" rx="10" ry="17" fill="#b07d54" ${ve}/>${Hr(41,59,42)}<ellipse cx="50" cy="53" rx="5" ry="4" fill="${bt}"/>${Or(34,66,54)}<circle cx="84" cy="80" r="10" fill="#e6b88a" ${ve}/><circle cx="81" cy="78" r="1.8" fill="${bt}"/><circle cx="87" cy="82" r="1.8" fill="${bt}"/><text x="50" y="30" font-size="10" font-weight="900" text-anchor="middle" fill="${bt}">Q</text>`}},{name:"Reagan",room:"salon",x:2300,y:352,w:30,h:28,taps:5,spot:o1,item:{kind:"egg:reagan-frame",name:"Reagan's Frame",cat:"secrets",w:120,wall:!0,svg:`<rect x="8" y="10" width="84" height="84" rx="16" fill="#ff8fab" ${ve}/><rect x="18" y="20" width="64" height="64" rx="10" fill="#fff3f7" ${ve}/><text x="50" y="72" font-size="52" font-weight="900" text-anchor="middle" fill="#e879c6" stroke="${bt}" stroke-width="2.5">R</text><circle cx="14" cy="16" r="6" fill="#ffd166" ${ve}/><circle cx="86" cy="88" r="6" fill="#ffd166" ${ve}/><path d="M76 24 l2 4 4 .5 -3 3 .7 4 -3.7 -2 -3.7 2 .7 -4 -3 -3 4 -.5z" fill="#ffd166"/>`}}],i1=_a.map(e=>({...e.item,rooms:["any"],secret:e.name})),mf=qt("cozy-secrets"),dr=()=>{try{return new Set(JSON.parse(localStorage.getItem(mf)??"[]"))}catch{return new Set}},a1=e=>localStorage.setItem(mf,JSON.stringify([...e]));function r1(e){const t=document.createElement("div");t.className="eggs",e.world.appendChild(t);const n=new Map;for(const o of _a){const i=document.createElement("div");i.className="eggspot",i.dataset.egg=o.name,i.style.left=(o.x-o.w/2)/e.roomW*100+"%",i.style.top=(o.y-o.h)/e.roomH*100+"%",i.style.width=o.w/e.roomW*100+"%",i.style.height=o.h/e.roomH*100+"%",i.innerHTML=o.spot,t.appendChild(i),i.addEventListener("pointerdown",a=>a.stopPropagation()),i.addEventListener("click",a=>{a.stopPropagation();const r=Date.now(),l=n.get(o.name)??{n:0,t:0};if(l.n=r-l.t<1500?l.n+1:1,l.t=r,n.set(o.name,l),i.classList.remove("poke"),i.offsetWidth,i.classList.add("poke"),e.tap(),l.n<o.taps)return;l.n=0;const c=dr(),d=!c.has(o.name);c.add(o.name),a1(c),l1(o,i),e.sparkle(),e.onFound(o.name,d)})}const s=()=>{const o=e.currentRoom();t.querySelectorAll(".eggspot").forEach(i=>{i.style.display=_a.find(a=>a.name===i.dataset.egg).room===o?"":"none"})};return s(),{update:s}}function l1(e,t){if(e.hello){const s=document.createElement("div");s.className="eggpop",s.innerHTML=`<div class="eggcritter"><svg viewBox="0 0 100 100">${e.item.svg}</svg></div><div class="bubble">${e.hello}</div>`,t.appendChild(s),setTimeout(()=>s.remove(),3200)}const n=document.createElement("div");n.className="eggbanner",n.innerHTML=`<span class="sp">✨</span><span class="nm">${[...e.name].map((s,o)=>`<i style="animation-delay:${o*70}ms">${s}</i>`).join("")}</span><span class="sp">✨</span>`,document.body.appendChild(n),setTimeout(()=>n.classList.add("out"),2600),setTimeout(()=>n.remove(),3100),yf()}function yf(e=70){const t=["#ff8fab","#ffd166","#8ecae6","#80ed99","#c9a0dc","#ff9f68"],n=document.createElement("div");n.className="confetti",document.body.appendChild(n);for(let s=0;s<e;s++){const o=document.createElement("i");o.style.left=Math.random()*100+"vw",o.style.background=t[s%t.length],o.style.animationDelay=Math.random()*.5+"s",o.style.animationDuration=1.6+Math.random()*1.2+"s",o.style.setProperty("--r",Math.random()*720-360+"deg"),o.style.setProperty("--dx",Math.random()*160-80+"px"),s%3===0&&(o.style.borderRadius="50%"),n.appendChild(o)}setTimeout(()=>n.remove(),3600)}const c1=`[
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
]`,d1=`[
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
`,p1="/cozy-preview/assets/alarm-clock-DOVobLzL.png",f1="/cozy-preview/assets/alarm-clock-BCd1-e86.svg",g1="/cozy-preview/assets/bedtime-snack-COvX4Nqo.png",h1="/cozy-preview/assets/bedtime-snack-BoNDQqOK.svg",u1="/cozy-preview/assets/book-stack-BlyqbTA1.png",m1="/cozy-preview/assets/book-stack-upnp1NwG.svg",y1="/cozy-preview/assets/bunk-bed-COiQly1s.png",w1="/cozy-preview/assets/bunk-bed-YZiRWNFR.svg",b1="/cozy-preview/assets/bunny-slippers-DajXa_JK.png",v1="/cozy-preview/assets/bunny-slippers-PNucIc_Q.svg",k1="/cozy-preview/assets/canopy-bed-Db9GIfyT.png",_1="/cozy-preview/assets/canopy-bed-BwWkRhe2.svg",$1="/cozy-preview/assets/cat-bed-ChP4s69B.png",x1="/cozy-preview/assets/cat-bed-B8ULFbHc.svg",M1="/cozy-preview/assets/cloud-rug-Bv3GScgR.png",L1="/cozy-preview/assets/cloud-rug-CFl6aZc5.svg",E1="/cozy-preview/assets/cloud-shelf-BAmU3DSp.png",C1="/cozy-preview/assets/cloud-shelf-DF5b_IoZ.svg",z1="/cozy-preview/assets/cork-board-B8yw-MFd.png",S1="/cozy-preview/assets/cork-board-Bj5OuLbv.svg",P1="/cozy-preview/assets/daisy-pot-BQDVlAug.png",T1="/cozy-preview/assets/daisy-pot-Cy8SrSS6.svg",B1="/cozy-preview/assets/desk-UTaBcI2Q.png",R1="/cozy-preview/assets/desk-2rRtV3Vk.svg",A1="/cozy-preview/assets/dino-plush-yhz7rVZD.png",D1="/cozy-preview/assets/dino-plush-Dq_qccf0.svg",I1="/cozy-preview/assets/doll-house-DfYMaHqJ.png",H1="/cozy-preview/assets/doll-house-BrC3RiST.svg",O1="/cozy-preview/assets/dresser-jJcAkDG_.png",W1="/cozy-preview/assets/dresser-__9TGuYc.svg",U1="/cozy-preview/assets/egg-chair-DobnnZdC.png",V1="/cozy-preview/assets/egg-chair-CtiaqWNQ.svg",Q1="/cozy-preview/assets/floor-fan-C2R5oDHp.png",q1="/cozy-preview/assets/floor-fan-Dt9SIAmB.svg",Z1="/cozy-preview/assets/guinea-pig-BzHyXlGo.png",N1="/cozy-preview/assets/guinea-pig-CwLeNU_S.svg",F1="/cozy-preview/assets/hamster-cage-zv59jo6b.png",j1="/cozy-preview/assets/hamster-cage-lQ6r7saV.svg",G1="/cozy-preview/assets/heart-rug-DYGPCKpT.png",Y1="/cozy-preview/assets/heart-rug-CBDvH6Q6.svg",K1="/cozy-preview/assets/lava-lamp-Df-lJpLx.png",X1="/cozy-preview/assets/lava-lamp-DEuHvlco.svg",J1="/cozy-preview/assets/moon-night-light-JPI5SkUV.png",e2="/cozy-preview/assets/moon-night-light-CAKsjYZv.svg",t2="/cozy-preview/assets/nightstand-D3WOPlqw.png",n2="/cozy-preview/assets/nightstand-Bgsh0YUi.svg",s2="/cozy-preview/assets/paper-lantern-mpw1jXzL.png",o2="/cozy-preview/assets/paper-lantern-CErOGyrT.svg",i2="/cozy-preview/assets/piggy-bank-DaSktUUA.png",a2="/cozy-preview/assets/piggy-bank-DsHrmOcp.svg",r2="/cozy-preview/assets/plant-stand-BpU338ra.png",l2="/cozy-preview/assets/plant-stand-DDyIDaL0.svg",c2="/cozy-preview/assets/play-tent-ih6xOGXC.png",d2="/cozy-preview/assets/play-tent-Bsawe52j.svg",p2="/cozy-preview/assets/star-mobile-Bqyd_ikl.png",f2="/cozy-preview/assets/star-mobile-DzOGs-Jo.svg",g2="/cozy-preview/assets/toy-chest-DhEoVFj0.png",h2="/cozy-preview/assets/toy-chest-6iPrDiZH.svg",u2="/cozy-preview/assets/toy-robot-Bfkjfj_6.png",m2="/cozy-preview/assets/toy-robot-OaCEwmDT.svg",y2="/cozy-preview/assets/toy-train-DILjZiya.png",w2="/cozy-preview/assets/toy-train-D5GqAnpy.svg",b2="/cozy-preview/assets/unicorn-plush-5YQqQjND.png",v2="/cozy-preview/assets/unicorn-plush-C0W1eEs9.svg",k2="/cozy-preview/assets/wardrobe-sJcJSWZ2.png",_2="/cozy-preview/assets/wardrobe-Dn492IK0.svg",$2="/cozy-preview/assets/bananas-D4irRkGy.png",x2="/cozy-preview/assets/bananas-aPQwdEVo.svg",M2="/cozy-preview/assets/bar-stool-xbwaa01H.png",L2="/cozy-preview/assets/bar-stool-DWxhX1Ah.svg",E2="/cozy-preview/assets/bread-loaf-DKmR5wPN.png",C2="/cozy-preview/assets/bread-loaf-C9cEAYcl.svg",z2="/cozy-preview/assets/chick-DCnoMwEt.png",S2="/cozy-preview/assets/chick-BTEVfgqU.svg",P2="/cozy-preview/assets/china-hutch-K3xtlmqi.png",T2="/cozy-preview/assets/china-hutch-BTmMY6rg.svg",B2="/cozy-preview/assets/cocoa-mug-BmqSzNJ6.png",R2="/cozy-preview/assets/cocoa-mug-CraNCc9b.svg",A2="/cozy-preview/assets/cookie-jar-CZsO9PSp.png",D2="/cozy-preview/assets/cookie-jar-ripj0oyT.svg",I2="/cozy-preview/assets/cooking-pot-BSKPlqyT.png",H2="/cozy-preview/assets/cooking-pot-BWtfOm9f.svg",O2="/cozy-preview/assets/cupcake-KO1KLKav.png",W2="/cozy-preview/assets/cupcake-DFCw42xb.svg",U2="/cozy-preview/assets/dish-rack-DICSEn5E.png",V2="/cozy-preview/assets/dish-rack-BpVmmU6k.svg",Q2="/cozy-preview/assets/fruit-bowl-BL5EkaC8.png",q2="/cozy-preview/assets/fruit-bowl-Dw9lsB3B.svg",Z2="/cozy-preview/assets/frying-pan-BocrLcES.png",N2="/cozy-preview/assets/frying-pan-CTBY6MC_.svg",F2="/cozy-preview/assets/happy-fridge-BTbpm-W1.png",j2="/cozy-preview/assets/happy-fridge-D7ENuEJs.svg",G2="/cozy-preview/assets/herb-box-DFtC2qBN.png",Y2="/cozy-preview/assets/herb-box-CdRxefnV.svg",K2="/cozy-preview/assets/high-chair-DZCqRJV8.png",X2="/cozy-preview/assets/high-chair-BQtLYlq4.svg",J2="/cozy-preview/assets/ice-cream-CLLMXjn9.png",ey="/cozy-preview/assets/ice-cream-DydSyNXx.svg",ty="/cozy-preview/assets/kettle-DScYOeEK.png",ny="/cozy-preview/assets/kettle-D1nuAiG_.svg",sy="/cozy-preview/assets/kitchen-counter-cZcDRQIw.png",oy="/cozy-preview/assets/kitchen-counter-C8sTAZ-V.svg",iy="/cozy-preview/assets/kitchen-sink-DrP43iga.png",ay="/cozy-preview/assets/kitchen-sink-CYjDcd1n.svg",ry="/cozy-preview/assets/lemon-tree-BwA7W0cM.png",ly="/cozy-preview/assets/lemon-tree-CZz-Vy3P.svg",cy="/cozy-preview/assets/microwave-BJRDd-L-.png",dy="/cozy-preview/assets/microwave-lopm-FCT.svg",py="/cozy-preview/assets/milk-bottle-D7UB6VD8.png",fy="/cozy-preview/assets/milk-bottle-DxcUA6XT.svg",gy="/cozy-preview/assets/pancakes-CbisCK-C.png",hy="/cozy-preview/assets/pancakes-CLqxnc5R.svg",uy="/cozy-preview/assets/pantry-shelf-DI_CgvVD.png",my="/cozy-preview/assets/pantry-shelf-Azdxpmzd.svg",yy="/cozy-preview/assets/pendant-lamp-BhZanag5.png",wy="/cozy-preview/assets/pendant-lamp-fZv6y1p0.svg",by="/cozy-preview/assets/pet-bowl-Oe3KGELz.png",vy="/cozy-preview/assets/pet-bowl-ETL_EOAP.svg",ky="/cozy-preview/assets/rice-cooker-DUTXsBbb.png",_y="/cozy-preview/assets/rice-cooker-JX0L4bi2.svg",$y="/cozy-preview/assets/runner-rug-AYIsQudU.png",xy="/cozy-preview/assets/runner-rug-BbUgZFy4.svg",My="/cozy-preview/assets/spice-rack-8ll-6Q2f.png",Ly="/cozy-preview/assets/spice-rack-D9kAw-vT.svg",Ey="/cozy-preview/assets/stand-mixer-CP2fpC-Q.png",Cy="/cozy-preview/assets/stand-mixer-CZrLn00l.svg",zy="/cozy-preview/assets/teapot-iFnJNGiA.png",Sy="/cozy-preview/assets/teapot-CtPOJzEm.svg",Py="/cozy-preview/assets/toaster-T2WkZkdo.png",Ty="/cozy-preview/assets/toaster-CNk0hJDw.svg",By="/cozy-preview/assets/utensil-rail-_vjcgBpy.png",Ry="/cozy-preview/assets/utensil-rail-B0QkGP3A.svg",Ay="/cozy-preview/assets/watermelon-slice-yHBcfKGj.png",Dy="/cozy-preview/assets/watermelon-slice-VzvgalD5.svg",Iy="/cozy-preview/assets/aquarium-rYRAu69m.png",Hy="/cozy-preview/assets/aquarium-BlhJ9UCr.svg",Oy="/cozy-preview/assets/arc-floor-lamp-CBq3G9j8.png",Wy="/cozy-preview/assets/arc-floor-lamp-DL5cEVzq.svg",Uy="/cozy-preview/assets/bean-bag-CMLYRsbz.png",Vy="/cozy-preview/assets/bean-bag-CauyDuZQ.svg",Qy="/cozy-preview/assets/bird-cage-qj5P0te2.png",qy="/cozy-preview/assets/bird-cage-xqeVahX7.svg",Zy="/cozy-preview/assets/blanket-basket-5IQiUSS2.png",Ny="/cozy-preview/assets/blanket-basket-B4LREUo9.svg",Fy="/cozy-preview/assets/building-blocks-CzqAFUNB.png",jy="/cozy-preview/assets/building-blocks-DbtoodPT.svg",Gy="/cozy-preview/assets/coffee-table-iKZ20Gpy.png",Yy="/cozy-preview/assets/coffee-table-ZYO2ApH6.svg",Ky="/cozy-preview/assets/comfy-armchair-U_SI3sk9.png",Xy="/cozy-preview/assets/comfy-armchair-tjNYbfgO.svg",Jy="/cozy-preview/assets/cubby-shelf-B0De91CO.png",ew="/cozy-preview/assets/cubby-shelf-CLzTUpiz.svg",tw="/cozy-preview/assets/daisy-rug-BqSOjPlJ.png",nw="/cozy-preview/assets/daisy-rug-CvOlxjsu.svg",sw="/cozy-preview/assets/fiddle-leaf-fig-DnvG8l2j.png",ow="/cozy-preview/assets/fiddle-leaf-fig-DiUNW4Q_.svg",iw="/cozy-preview/assets/fireplace-C9azNipx.png",aw="/cozy-preview/assets/fireplace-CqxIMN3Z.svg",rw="/cozy-preview/assets/globe-C-L7vS0t.png",lw="/cozy-preview/assets/globe-DN0sih3W.svg",cw="/cozy-preview/assets/hanging-planter-DGgUXZpP.png",dw="/cozy-preview/assets/hanging-planter-M9IHqztp.svg",pw="/cozy-preview/assets/monstera-plant-BbGZQtOh.png",fw="/cozy-preview/assets/monstera-plant-CLmuB_RM.svg",gw="/cozy-preview/assets/piano-DpS7nvdq.png",hw="/cozy-preview/assets/piano-Y0KQ4rD2.svg",uw="/cozy-preview/assets/popcorn-CFk12JbR.png",mw="/cozy-preview/assets/popcorn-BD2d8sUH.svg",yw="/cozy-preview/assets/pouf-DY0Vcx75.png",ww="/cozy-preview/assets/pouf-as0li8On.svg",bw="/cozy-preview/assets/rainbow-rug-DwzLb6aY.png",vw="/cozy-preview/assets/rainbow-rug-C5ZVauOA.svg",kw="/cozy-preview/assets/rainbow-wall-art--5LLrrQJ.png",_w="/cozy-preview/assets/rainbow-wall-art-CCXUPPen.svg",$w="/cozy-preview/assets/retro-radio-BIX4GYkL.png",xw="/cozy-preview/assets/retro-radio-B3T98xMQ.svg",Mw="/cozy-preview/assets/rocking-chair-CDLlJFiP.png",Lw="/cozy-preview/assets/rocking-chair-BgoIQu5H.svg",Ew="/cozy-preview/assets/rocking-horse-Iz-CpscK.png",Cw="/cozy-preview/assets/rocking-horse-1WLLV43R.svg",zw="/cozy-preview/assets/snake-plant-DgPna4k9.png",Sw="/cozy-preview/assets/snake-plant-BGDwPcMj.svg",Pw="/cozy-preview/assets/string-lights-nDUZa5m1.png",Tw="/cozy-preview/assets/string-lights-DGC0Ni2I.svg",Bw="/cozy-preview/assets/succulent-trio-VYNH-o5B.png",Rw="/cozy-preview/assets/succulent-trio-uPD-ljlL.svg",Aw="/cozy-preview/assets/tassel-rug-BBXtknxh.png",Dw="/cozy-preview/assets/tassel-rug-DolXtxfQ.svg",Iw="/cozy-preview/assets/throw-pillow-BjuGXMYA.png",Hw="/cozy-preview/assets/throw-pillow-qWyWQ9cT.svg",Ow="/cozy-preview/assets/toy-car-Bwrt0-AT.png",Ww="/cozy-preview/assets/toy-car-CTJy5H4V.svg",Uw="/cozy-preview/assets/tulip-vase-CpQUgXPR.png",Vw="/cozy-preview/assets/tulip-vase-o2vjI1Hg.svg",Qw="/cozy-preview/assets/turtle-Bf8_yRql.png",qw="/cozy-preview/assets/turtle-B9Y6NDSv.svg",Zw="/cozy-preview/assets/tv-stand-DnwT-hn4.png",Nw="/cozy-preview/assets/tv-stand-CcLHFc1J.svg",Fw="/cozy-preview/assets/wall-shelf-Bs6mROe1.png",jw="/cozy-preview/assets/wall-shelf-CCWuZ6Xl.svg",Gw="/cozy-preview/assets/cc-bakery-shelf-dMrnZVB3.png",Yw="/cozy-preview/assets/cc-bakery-shelf-BxdhLTTC.svg",Kw="/cozy-preview/assets/cc-breakfast-table-DwHbMV2p.png",Xw="/cozy-preview/assets/cc-breakfast-table-DwaO0eFy.svg",Jw="/cozy-preview/assets/cc-bubble-chair-DuDi-bRz.png",eb="/cozy-preview/assets/cc-bubble-chair-DncHA7F-.svg",tb="/cozy-preview/assets/cc-canopy-daybed-CAZpSo2a.png",nb="/cozy-preview/assets/cc-canopy-daybed-CVbt6QDr.svg",sb="/cozy-preview/assets/cc-cloud-beanbag-BYcBLKf9.png",ob="/cozy-preview/assets/cc-cloud-beanbag-SM0m-3qY.svg",ib="/cozy-preview/assets/cc-cloud-lamp-v0UO1VrK.png",ab="/cozy-preview/assets/cc-cloud-lamp-BWwxoCux.svg",rb="/cozy-preview/assets/cc-cottage-aquarium-XYuN1CnR.png",lb="/cozy-preview/assets/cc-cottage-aquarium-iY2D26Vq.svg",cb="/cozy-preview/assets/cc-cupcake-stand-jKA3zoCC.png",db="/cozy-preview/assets/cc-cupcake-stand-B08kdXZL.svg",pb="/cozy-preview/assets/cc-dryer-chair-CP8q6yyq.png",fb="/cozy-preview/assets/cc-dryer-chair-DQmosxUz.svg",gb="/cozy-preview/assets/cc-fairy-garland-B4DVLP6L.png",hb="/cozy-preview/assets/cc-fairy-garland-BncKvkRL.svg",ub="/cozy-preview/assets/cc-fairy-shelf-DSmhC08i.png",mb="/cozy-preview/assets/cc-fairy-shelf-CE6x7J1w.svg",yb="/cozy-preview/assets/cc-flower-kettle-DZFkbEk5.png",wb="/cozy-preview/assets/cc-flower-kettle-ZTbAh26L.svg",bb="/cozy-preview/assets/cc-flower-lamp-hc1e4xxL.png",vb="/cozy-preview/assets/cc-flower-lamp-CS2T2S89.svg",kb="/cozy-preview/assets/cc-heart-bed-BtOx4_a4.png",_b="/cozy-preview/assets/cc-heart-bed-76-z9nJg.svg",$b="/cozy-preview/assets/cc-heart-clock-CLtzUj8w.png",xb="/cozy-preview/assets/cc-heart-clock-ByixSFru.svg",Mb="/cozy-preview/assets/cc-heart-pouf-C3vCLnoM.png",Lb="/cozy-preview/assets/cc-heart-pouf-DH5J2s2J.svg",Eb="/cozy-preview/assets/cc-heart-rug-CpvyM_wf.png",Cb="/cozy-preview/assets/cc-heart-rug-Jwmh-m0j.svg",zb="/cozy-preview/assets/cc-jewel-box-DZ6IxYiU.png",Sb="/cozy-preview/assets/cc-jewel-box-qMbIQmo4.svg",Pb="/cozy-preview/assets/cc-light-vanity-BxKLJiVW.png",Tb="/cozy-preview/assets/cc-light-vanity-DD4uQJ_7.svg",Bb="/cozy-preview/assets/cc-macaron-jar-NI43JiPM.png",Rb="/cozy-preview/assets/cc-macaron-jar-A0sT-Lvj.svg",Ab="/cozy-preview/assets/cc-macrame-swing-x8sop4y4.png",Db="/cozy-preview/assets/cc-macrame-swing-qIcoPp0o.svg",Ib="/cozy-preview/assets/cc-mani-chair-C1J_zCFX.png",Hb="/cozy-preview/assets/cc-mani-chair-7AWb60tv.svg",Ob="/cozy-preview/assets/cc-mint-fridge-7zQk2-Kj.png",Wb="/cozy-preview/assets/cc-mint-fridge-Cc87e_gW.svg",Ub="/cozy-preview/assets/cc-mushroom-stool-DeoO7P27.png",Vb="/cozy-preview/assets/cc-mushroom-stool-B9-y9WNf.svg",Qb="/cozy-preview/assets/cc-pastel-range-CXu-Gr6f.png",qb="/cozy-preview/assets/cc-pastel-range-D6cjzJTl.svg",Zb="/cozy-preview/assets/cc-perfume-tray-DkUHaA_i.png",Nb="/cozy-preview/assets/cc-perfume-tray-DN4chcIn.svg",Fb="/cozy-preview/assets/cc-petal-table-DadCDnSy.png",jb="/cozy-preview/assets/cc-petal-table-QrNho7KH.svg",Gb="/cozy-preview/assets/cc-plant-wall-CCxqRxsH.png",Yb="/cozy-preview/assets/cc-plant-wall-BMii8_kR.svg",Kb="/cozy-preview/assets/cc-reading-nook-Eq4Eh0MW.png",Xb="/cozy-preview/assets/cc-reading-nook-wiDgasP8.svg",Jb="/cozy-preview/assets/cc-record-player-LmfaPaE5.png",ev="/cozy-preview/assets/cc-record-player-BoxZhHLy.svg",tv="/cozy-preview/assets/cc-ribbon-mirror-BEsGok51.png",nv="/cozy-preview/assets/cc-ribbon-mirror-DiCje_iy.svg",sv="/cozy-preview/assets/cc-scallop-curtains-Cvab-FzV.png",ov="/cozy-preview/assets/cc-scallop-curtains-Bzhy2peV.svg",iv="/cozy-preview/assets/cc-scallop-loveseat-CR3Z2O-W.png",av="/cozy-preview/assets/cc-scallop-loveseat-Dfi7dg3b.svg",rv="/cozy-preview/assets/cc-star-dresser-b15t-WLI.png",lv="/cozy-preview/assets/cc-star-dresser-2wqSnsip.svg",cv="/cozy-preview/assets/cc-teapot-set-ygQBLdbl.png",dv="/cozy-preview/assets/cc-teapot-set-DnZlJvn7.svg",pv="/cozy-preview/assets/cc-window-seat-D-Rfuuwm.png",fv="/cozy-preview/assets/cc-window-seat-BCOise4Z.svg",gv="/cozy-preview/assets/arched-shelf-Dt4oWiBK.png",hv="/cozy-preview/assets/arched-shelf-XtiqRVaT.svg",uv="/cozy-preview/assets/blob-rug-Ckw1kSsa.png",mv="/cozy-preview/assets/blob-rug-Deh5k10s.svg",yv="/cozy-preview/assets/bubbly-plant-CV9ioei6.png",wv="/cozy-preview/assets/bubbly-plant-CFTOJd5Y.svg",bv="/cozy-preview/assets/bud-vase-Bzj5qGgr.png",vv="/cozy-preview/assets/bud-vase-Dup4WQ5y.svg",kv="/cozy-preview/assets/comb-brush-CfTGGk1L.png",_v="/cozy-preview/assets/comb-brush-oPJeQv0v.svg",$v="/cozy-preview/assets/cream-jars-dLRXypJR.png",xv="/cozy-preview/assets/cream-jars-D6bxrnJR.svg",Mv="/cozy-preview/assets/drop-lamp-DWqiPjZB.png",Lv="/cozy-preview/assets/drop-lamp-CJg63ZKz.svg",Ev="/cozy-preview/assets/droplet-buddy-DCjbvrlK.png",Cv="/cozy-preview/assets/droplet-buddy-DTpHggFh.svg",zv="/cozy-preview/assets/fancy-sofa-BRlr2j8I.png",Sv="/cozy-preview/assets/fancy-sofa-kq2L0ob5.svg",Pv="/cozy-preview/assets/flower-cart-C3W7v2RD.png",Tv="/cozy-preview/assets/flower-cart-BWgfg0s_.svg",Bv="/cozy-preview/assets/foot-spa-HwiSNgdS.png",Rv="/cozy-preview/assets/foot-spa-DdA5_fj_.svg",Av="/cozy-preview/assets/globe-pendants-ChKRw_Bp.png",Dv="/cozy-preview/assets/globe-pendants-DNV5WnAO.svg",Iv="/cozy-preview/assets/glow-mirror-D4P3UibJ.png",Hv="/cozy-preview/assets/glow-mirror-C_dTGwQc.svg",Ov="/cozy-preview/assets/gold-floor-mirror-CSYqaszS.png",Wv="/cozy-preview/assets/gold-floor-mirror-jfPQepmr.svg",Uv="/cozy-preview/assets/hair-dryer-_nFRnXBv.png",Vv="/cozy-preview/assets/hair-dryer-CAkhCf7J.svg",Qv="/cozy-preview/assets/heart-plant-CN47o4my.png",qv="/cozy-preview/assets/heart-plant-fSU4uLVy.svg",Zv="/cozy-preview/assets/heart-pouf-b76ZFT07.png",Nv="/cozy-preview/assets/heart-pouf-BMVPBVKJ.svg",Fv="/cozy-preview/assets/lilac-curtain-94MUZIqr.png",jv="/cozy-preview/assets/lilac-curtain-D_mFsZKu.svg",Gv="/cozy-preview/assets/lotion-trio-wGXg7qdC.png",Yv="/cozy-preview/assets/lotion-trio-D3lKwvho.svg",Kv="/cozy-preview/assets/mani-lamp-B6MLP1xK.png",Xv="/cozy-preview/assets/mani-lamp-B4SmvhvS.svg",Jv="/cozy-preview/assets/nail-table-CP0_pEA8.png",e4="/cozy-preview/assets/nail-table-C3FitmuG.svg",t4="/cozy-preview/assets/pebble-rug-BgHMxQ6Q.png",n4="/cozy-preview/assets/pebble-rug-DHBZUggl.svg",s4="/cozy-preview/assets/perfume-bottle-F_MkREQh.png",o4="/cozy-preview/assets/perfume-bottle-BcNXSWTW.svg",i4="/cozy-preview/assets/pink-fountain-DtB69ljQ.png",a4="/cozy-preview/assets/pink-fountain-DQ3CIetr.svg",r4="/cozy-preview/assets/pink-vanity-CPmOesS7.png",l4="/cozy-preview/assets/pink-vanity-qE3SwdD6.svg",c4="/cozy-preview/assets/polish-bottle-B2f4PsGZ.png",d4="/cozy-preview/assets/polish-bottle-VWed8EQ-.svg",p4="/cozy-preview/assets/polish-rack-ANlncwDe.png",f4="/cozy-preview/assets/polish-rack-8Ph2n2nM.svg",g4="/cozy-preview/assets/reception-desk-DnhqgkHu.png",h4="/cozy-preview/assets/reception-desk-D4Gevx64.svg",u4="/cozy-preview/assets/salon-chair-Bl31ZE_E.png",m4="/cozy-preview/assets/salon-chair-Wj2sOSW8.svg",y4="/cozy-preview/assets/scent-candle-BYUsO9s1.png",w4="/cozy-preview/assets/scent-candle-BEUE-6Uv.svg",b4="/cozy-preview/assets/spray-bottle-DJKZeNmL.png",v4="/cozy-preview/assets/spray-bottle-Bc8iuceJ.svg",k4="/cozy-preview/assets/star-wall-sign-D_9XhB91.png",_4="/cozy-preview/assets/star-wall-sign-DvenTqvU.svg",$4="/cozy-preview/assets/swivel-stool-BGAwWXNX.png",x4="/cozy-preview/assets/swivel-stool-P-Egqq_Z.svg",M4="/cozy-preview/assets/tiered-tray-CGuVyK1K.png",L4="/cozy-preview/assets/tiered-tray-DLnZTsUF.svg",E4="/cozy-preview/assets/towel-cart-5At-syZP.png",C4="/cozy-preview/assets/towel-cart-DJmR97UL.svg",z4="/cozy-preview/assets/towel-stack-D-pX5koc.png",S4="/cozy-preview/assets/towel-stack-C1qplZ4T.svg",P4="/cozy-preview/assets/vine-planter-mviuZvkw.png",T4="/cozy-preview/assets/vine-planter-Duhx9OMZ.svg",B4="/cozy-preview/assets/waiting-bench-DXbi7ObC.png",R4="/cozy-preview/assets/waiting-bench-BQuoXbE3.svg",A4="/cozy-preview/assets/wash-chair-CJo64U_O.png",D4="/cozy-preview/assets/wash-chair-sdgNnj79.svg",I4="/cozy-preview/assets/arched-mirror-2vakzmQ8.png",H4="/cozy-preview/assets/arched-mirror-ClJgTBd9.svg",O4="/cozy-preview/assets/big-monitor-BRiCdofl.png",W4="/cozy-preview/assets/big-monitor-jx5PnUa_.svg",U4="/cozy-preview/assets/boba-cup-Dn_S1oAa.png",V4="/cozy-preview/assets/boba-cup-CwUerXNm.svg",Q4="/cozy-preview/assets/bubble-bath-D4AZavWB.png",q4="/cozy-preview/assets/bubble-bath-8VwrkImA.svg",Z4="/cozy-preview/assets/cactus-buddy-D_lAS12Y.png",N4="/cozy-preview/assets/cactus-buddy-D3uacuVA.svg",F4="/cozy-preview/assets/caterpillar-plush-vK3r58Ch.png",j4="/cozy-preview/assets/caterpillar-plush-BhR8Pydf.svg",G4="/cozy-preview/assets/checker-bed-DD4Ra6RV.png",Y4="/cozy-preview/assets/checker-bed-mtuxfPje.svg",K4="/cozy-preview/assets/checker-rug-C9Gs09p_.png",X4="/cozy-preview/assets/checker-rug-CmSO3Y4j.svg",J4="/cozy-preview/assets/clothes-rail-CJ8Du1xN.png",e6="/cozy-preview/assets/clothes-rail-BY-f9coz.svg",t6="/cozy-preview/assets/cloud-sofa-3eVlcAzs.png",n6="/cozy-preview/assets/cloud-sofa-CZS1Y5s-.svg",s6="/cozy-preview/assets/cube-shelf-DPFNgFhk.png",o6="/cozy-preview/assets/cube-shelf-DoI0tLGL.svg",i6="/cozy-preview/assets/curvy-desk-BxyVtcg3.png",a6="/cozy-preview/assets/curvy-desk-eWCvec1f.svg",r6="/cozy-preview/assets/cute-speaker-Cy7ml0bm.png",l6="/cozy-preview/assets/cute-speaker-DrVF9uns.svg",c6="/cozy-preview/assets/desk-lamp-B39R5SBQ.png",d6="/cozy-preview/assets/desk-lamp-C-VtrE1V.svg",p6="/cozy-preview/assets/desk-mic-C-4XirP6.png",f6="/cozy-preview/assets/desk-mic-BqYzh6ma.svg",g6="/cozy-preview/assets/flower-lamp-DyDRXGpR.png",h6="/cozy-preview/assets/flower-lamp-Dpz6tQ2x.svg",u6="/cozy-preview/assets/frog-plush-NmeU5sHZ.png",m6="/cozy-preview/assets/frog-plush-BhkTrE24.svg",y6="/cozy-preview/assets/game-controller-B6phnmU4.png",w6="/cozy-preview/assets/game-controller-6gvwykQG.svg",b6="/cozy-preview/assets/gaming-chair-B7ZnwG2W.png",v6="/cozy-preview/assets/gaming-chair-BCyGMzy0.svg",k6="/cozy-preview/assets/hamster-pet-C09aLs5N.png",_6="/cozy-preview/assets/hamster-pet-LBcghoJj.svg",$6="/cozy-preview/assets/headphones-MRHfNh-e.png",x6="/cozy-preview/assets/headphones-Cjjqt_92.svg",M6="/cozy-preview/assets/heart-light-B6LXGE4j.png",L6="/cozy-preview/assets/heart-light-DfDwRHju.svg",E6="/cozy-preview/assets/keyboard-Dvxz1PEW.png",C6="/cozy-preview/assets/keyboard-Cbtwvtj1.svg",z6="/cozy-preview/assets/mini-fridge-DgYceOBW.png",S6="/cozy-preview/assets/mini-fridge-qdNm4NKf.svg",P6="/cozy-preview/assets/pastel-wardrobe-CFIOdtrx.png",T6="/cozy-preview/assets/pastel-wardrobe-BubkWAN2.svg",B6="/cozy-preview/assets/phone-stand-CWfRuwT_.png",R6="/cozy-preview/assets/phone-stand-VLW-DsK-.svg",A6="/cozy-preview/assets/pothos-plant-mnKAaH_K.png",D6="/cozy-preview/assets/pothos-plant-C1I15M9a.svg",I6="/cozy-preview/assets/puffy-stool-B5z3sd2l.png",H6="/cozy-preview/assets/puffy-stool-CwjoblCa.svg",O6="/cozy-preview/assets/ring-light-BoqM9Lks.png",W6="/cozy-preview/assets/ring-light-CdxNAXA6.svg",U6="/cozy-preview/assets/side-table-round-x1NbWzDq.png",V6="/cozy-preview/assets/side-table-round-rCsBU0YO.svg",Q6="/cozy-preview/assets/star-lamp-Bocs3YRP.png",q6="/cozy-preview/assets/star-lamp-CHKQnzvB.svg",Z6="/cozy-preview/assets/sticker-board-CMn2BF_D.png",N6="/cozy-preview/assets/sticker-board-LUm1_I_P.svg",F6="/cozy-preview/assets/sunny-art-372bwMLG.png",j6="/cozy-preview/assets/sunny-art-C25M7k02.svg",G6="/cozy-preview/assets/sv-bean-bag-DlsJBRMG.png",Y6="/cozy-preview/assets/sv-bean-bag-DdsCYd4e.svg",K6="/cozy-preview/assets/sv-cloud-rug-Bo5aP_HP.png",X6="/cozy-preview/assets/sv-cloud-rug-BvczSj77.svg",J6="/cozy-preview/assets/sv-wall-shelf-C61Y5OFn.png",ek="/cozy-preview/assets/sv-wall-shelf-BtJLzNMg.svg",tk="/cozy-preview/assets/vlog-camera-DAiD7LSW.png",nk="/cozy-preview/assets/vlog-camera-CBd28A7P.svg",sk="/cozy-preview/assets/wavy-floor-lamp-1BJBLV8q.png",ok="/cozy-preview/assets/wavy-floor-lamp-Iy8llzr8.svg",ik="/cozy-preview/assets/acorn-friend-SMoU5de2.png",ak="/cozy-preview/assets/acorn-friend-BsLiZ2Z_.svg",rk="/cozy-preview/assets/apple-tree-CN7tYao3.png",lk="/cozy-preview/assets/apple-tree-DGIUIjY1.svg",ck="/cozy-preview/assets/big-wardrobe-DcZpROWW.png",dk="/cozy-preview/assets/big-wardrobe-BnfnkPXl.svg",pk="/cozy-preview/assets/box-stack-DBdO-RRV.png",fk="/cozy-preview/assets/box-stack-ji13G2mP.svg",gk="/cozy-preview/assets/brick-fireplace-CxelyhgA.png",hk="/cozy-preview/assets/brick-fireplace-BGCbiSK5.svg",uk="/cozy-preview/assets/bulletin-board-BWUCktvK.png",mk="/cozy-preview/assets/bulletin-board-DqA69wQH.svg",yk="/cozy-preview/assets/cozy-mug-DGMQRJK7.png",wk="/cozy-preview/assets/cozy-mug-CFJEPRKb.svg",bk="/cozy-preview/assets/cream-sofa-Dzaz9Eg9.png",vk="/cozy-preview/assets/cream-sofa-CB4EWIDp.svg",kk="/cozy-preview/assets/fire-pit-FhRYTkJU.png",_k="/cozy-preview/assets/fire-pit-DTyRokIj.svg",$k="/cozy-preview/assets/glass-cabinet-C1Dud5Om.png",xk="/cozy-preview/assets/glass-cabinet-BCHExP4F.svg",Mk="/cozy-preview/assets/hanging-lantern-5_A0FrVU.png",Lk="/cozy-preview/assets/hanging-lantern-DZbXB8L1.svg",Ek="/cozy-preview/assets/knit-cushion-CeEpuawZ.png",Ck="/cozy-preview/assets/knit-cushion-DUewI6rR.svg",zk="/cozy-preview/assets/ladder-shelf-kDBx9ho_.png",Sk="/cozy-preview/assets/ladder-shelf-DXYDmQiE.svg",Pk="/cozy-preview/assets/landscape-art-CXy-fkYO.png",Tk="/cozy-preview/assets/landscape-art-CdCqCPL2.svg",Bk="/cozy-preview/assets/lattice-bench-BQ7wYgqI.png",Rk="/cozy-preview/assets/lattice-bench-D3zCZTQp.svg",Ak="/cozy-preview/assets/leaf-wreath-01dJ9WfP.png",Dk="/cozy-preview/assets/leaf-wreath-DUjq1MWh.svg",Ik="/cozy-preview/assets/mini-greenhouse-DLsY7-VZ.png",Hk="/cozy-preview/assets/mini-greenhouse-CGE5F9A_.svg",Ok="/cozy-preview/assets/moving-box-DszcEI-k.png",Wk="/cozy-preview/assets/moving-box-CZXbXcJO.svg",Uk="/cozy-preview/assets/picnic-basket-CYmGfWoy.png",Vk="/cozy-preview/assets/picnic-basket-D72DCNRY.svg",Qk="/cozy-preview/assets/round-rug-DZTiY9p2.png",qk="/cozy-preview/assets/round-rug-D8ePosbv.svg",Zk="/cozy-preview/assets/sale-sign-CLwCvavX.png",Nk="/cozy-preview/assets/sale-sign-CXWpgQt5.svg",Fk="/cozy-preview/assets/sprout-pot-BlPwmBjK.png",jk="/cozy-preview/assets/sprout-pot-BbXk09mS.svg",Gk="/cozy-preview/assets/stripe-runner-CWfHHL2f.png",Yk="/cozy-preview/assets/stripe-runner-ClycKEW5.svg",Kk="/cozy-preview/assets/trailing-plant-BBqKhPvp.png",Xk="/cozy-preview/assets/trailing-plant-NbG7dy8O.svg",Jk="/cozy-preview/assets/wall-clock-ItDQFPVO.png",e_="/cozy-preview/assets/wall-clock-CDC1o6eG.svg",t_="/cozy-preview/assets/wh-arc-floor-lamp-Dg8j_uAI.png",n_="/cozy-preview/assets/wh-arc-floor-lamp-BKVes2Fd.svg",s_="/cozy-preview/assets/wh-book-stack-9oDTUUnY.png",o_="/cozy-preview/assets/wh-book-stack-DjDFey2h.svg",i_="/cozy-preview/assets/wh-dresser-DhrzqcZ2.png",a_="/cozy-preview/assets/wh-dresser-Y-jnNt5q.svg",r_="/cozy-preview/assets/wh-fiddle-leaf-fig-Bt0Bc12k.png",l_="/cozy-preview/assets/wh-fiddle-leaf-fig-B0-kGmHI.svg",c_="/cozy-preview/assets/wh-kitchen-counter-BWikwkWo.png",d_="/cozy-preview/assets/wh-kitchen-counter-BtBenu6u.svg",p_="/cozy-preview/assets/wh-nightstand-BXusZ0A4.png",f_="/cozy-preview/assets/wh-nightstand-DPUoV5aO.svg",g_="/cozy-preview/assets/wh-pendant-lamp-DbfSrUho.png",h_="/cozy-preview/assets/wh-pendant-lamp-DBg4p7hi.svg",u_="/cozy-preview/assets/wh-snake-plant-kt_6Tus5.png",m_="/cozy-preview/assets/wh-snake-plant-Cj3bHF25.svg",y_="/cozy-preview/assets/wh-string-lights-CWVP27K_.png",w_="/cozy-preview/assets/wh-string-lights-C3JVBkgW.svg",b_="/cozy-preview/assets/wh-teapot-BclPHtYN.png",v_="/cozy-preview/assets/wh-teapot-kevlW5hN.svg",k_="/cozy-preview/assets/wood-armchair-BoX1llWe.png",__="/cozy-preview/assets/wood-armchair-DNVhKBWe.svg",$_="/cozy-preview/assets/wood-bookshelf-CfgOK-7q.png",x_="/cozy-preview/assets/wood-bookshelf-CvT7GAuI.svg",M_="/cozy-preview/assets/wood-coffee-table-DmAJknnU.png",L_="/cozy-preview/assets/wood-coffee-table-CuAR_7Kr.svg",E_="/cozy-preview/assets/wood-desk-S1h5jwM2.png",C_="/cozy-preview/assets/wood-desk-DPCJq_XQ.svg",z_="/cozy-preview/assets/wood-stool-BWBID67e.png",S_="/cozy-preview/assets/wood-stool-CV7YeZwC.svg",P_="/cozy-preview/assets/wooden-bed-511IemjK.png",T_="/cozy-preview/assets/wooden-bed-Qj-sf8yq.svg",B_="/cozy-preview/assets/wc-bauble-garland-PlBim-j0.webp",R_="/cozy-preview/assets/wc-berry-wreath-BtfH1PGe.webp",A_="/cozy-preview/assets/wc-birch-basket-vRxqyB3J.webp",D_="/cozy-preview/assets/wc-cabin-picture-B-lavF1R.webp",I_="/cozy-preview/assets/wc-candle-trio-CjQ7YYcj.webp",H_="/cozy-preview/assets/wc-cane-lamp-OhwvqNa-.webp",O_="/cozy-preview/assets/wc-cinnamon-tray-CxLrtplK.webp",W_="/cozy-preview/assets/wc-cocoa-cart-BkMzGgs0.webp",U_="/cozy-preview/assets/wc-cocoa-mug-qa2xzTYd.webp",V_="/cozy-preview/assets/wc-cocoa-pot-bLgiaNKD.webp",Q_="/cozy-preview/assets/wc-cookie-oven-D2Ud1EPt.webp",q_="/cozy-preview/assets/wc-cookie-plate-RhDZYroJ.webp",Z_="/cozy-preview/assets/wc-frost-bookcase-BMd6DAXH.webp",N_="/cozy-preview/assets/wc-frosted-pine-BupMG4GK.webp",F_="/cozy-preview/assets/wc-fur-bench-B1nXjHAR.webp",j_="/cozy-preview/assets/wc-gingerbread-village-8pOXPPCY.webp",G_="/cozy-preview/assets/wc-gingerbread-PGlclkJ_.webp",Y_="/cozy-preview/assets/wc-globe-lamp-DUCVl_3A.webp",K_="/cozy-preview/assets/wc-holiday-tree-CO0SBlqY.webp",X_="/cozy-preview/assets/wc-holly-CD8teo0a.webp",J_="/cozy-preview/assets/wc-ice-skates-D49y8YK1.webp",e8="/cozy-preview/assets/wc-ice-wardrobe-Dliflqpp.webp",t8="/cozy-preview/assets/wc-knit-armchair-84rhSw_8.webp",n8="/cozy-preview/assets/wc-lantern-81B3e5fN.webp",s8="/cozy-preview/assets/wc-log-bench-qQ1zT34_.webp",o8="/cozy-preview/assets/wc-marshmallow-jar-DeWRr-zf.webp",i8="/cozy-preview/assets/wc-mitten-line-sg-sweCl.webp",a8="/cozy-preview/assets/wc-mitten-ottoman-H5qkjso6.webp",r8="/cozy-preview/assets/wc-mug-shelf-DlWrwZYo.webp",l8="/cozy-preview/assets/wc-nutcracker-BGZe5tYy.webp",c8="/cozy-preview/assets/wc-penguin-chair-CDM1eIxo.webp",d8="/cozy-preview/assets/wc-penguin-plush-C8B27KcB.webp",p8="/cozy-preview/assets/wc-peppermint-counter-CPl6TA0h.webp",f8="/cozy-preview/assets/wc-peppermint-rug-3nakY_gB.webp",g8="/cozy-preview/assets/wc-pinecone-garland-s7ZWASw2.webp",h8="/cozy-preview/assets/wc-pinecone-table-DlJvjB-2.webp",u8="/cozy-preview/assets/wc-plaid-bed-eAhWKZdO.webp",m8="/cozy-preview/assets/wc-plaid-sofa-kvF30vEn.webp",y8="/cozy-preview/assets/wc-poinsettia-C-S-MDMu.webp",w8="/cozy-preview/assets/wc-polar-plush-BUVRTt7t.webp",b8="/cozy-preview/assets/wc-pom-rug-B-JF-heA.webp",v8="/cozy-preview/assets/wc-present-stack-Do2pEHLF.webp",k8="/cozy-preview/assets/wc-reindeer-CbKEp6CE.webp",_8="/cozy-preview/assets/wc-sled-table-Bd2cST9J.webp",$8="/cozy-preview/assets/wc-sleigh-planter-Bfcxvgbk.webp",x8="/cozy-preview/assets/wc-snow-globe-BcGMsnmh.webp",M8="/cozy-preview/assets/wc-snow-mobile-F06-kuT7.webp",L8="/cozy-preview/assets/wc-snow-nightstand-D6RhLncP.webp",E8="/cozy-preview/assets/wc-snow-window-dOxdYTSk.webp",C8="/cozy-preview/assets/wc-snowman-gxLBKnIO.webp",z8="/cozy-preview/assets/wc-snowshoes-CZcMT0Qx.webp",S8="/cozy-preview/assets/wc-sock-hamper-mesU3CG3.webp",P8="/cozy-preview/assets/wc-star-topper-c4tXfpV6.webp",T8="/cozy-preview/assets/wc-stocking-row-Dz0-4wTi.webp",B8="/cozy-preview/assets/wc-stone-hearth-1blXXfiH.webp",R8="/cozy-preview/assets/wc-twinkle-lamp-CYcQjW3A.webp",A8="/cozy-preview/assets/wc-twinkle-string-Olg29poj.webp",D8="/cozy-preview/assets/wc-window-seat-B7CwlRjl.webp",I8="/cozy-preview/assets/wc-woodstove-Cf0xJFnD.webp",H8="/cozy-preview/assets/cc-butter-polka-DGTIwtTO.png",O8="/cozy-preview/assets/cc-butter-polka-CmiHLPHI.svg",W8="/cozy-preview/assets/cc-cream-hex-DMlsmhhY.png",U8="/cozy-preview/assets/cc-cream-hex-Bkf3o84Z.svg",V8="/cozy-preview/assets/cc-lavender-lattice-D6QyuSPi.png",Q8="/cozy-preview/assets/cc-lavender-lattice-DhxILx5n.svg",q8="/cozy-preview/assets/cc-lilac-gingham-C8gKChr3.png",Z8="/cozy-preview/assets/cc-lilac-gingham-C-WPjvD8.svg",N8="/cozy-preview/assets/cc-mint-checks-Bj1xaUgE.png",F8="/cozy-preview/assets/cc-mint-checks-BKmyOLlr.svg",j8="/cozy-preview/assets/cc-mint-florals-DubHlfkl.png",G8="/cozy-preview/assets/cc-mint-florals-Dz8qRBHw.svg",Y8="/cozy-preview/assets/cc-peach-scallops-3xV_Pu-6.png",K8="/cozy-preview/assets/cc-peach-scallops-GPn_mXbS.svg",X8="/cozy-preview/assets/cc-pink-plaid-C9HKdB4f.png",J8="/cozy-preview/assets/cc-pink-plaid-VgppBwax.svg",e$="/cozy-preview/assets/cc-rag-planks-B67vRZlX.png",t$="/cozy-preview/assets/cc-rag-planks-C5Hombhc.svg",n$="/cozy-preview/assets/cc-rose-herringbone-Cmke3vGv.png",s$="/cozy-preview/assets/cc-rose-herringbone-CQRix6_f.svg",o$="/cozy-preview/assets/lilac-stripes-DcsSoVwO.png",i$="/cozy-preview/assets/lilac-stripes-yb9DhjTf.svg",a$="/cozy-preview/assets/lilac-terrazzo-DOghNP_d.png",r$="/cozy-preview/assets/lilac-terrazzo-8CaN2qhK.svg",l$="/cozy-preview/assets/mint-bubbles-DtsYAubK.png",c$="/cozy-preview/assets/mint-bubbles-BIQM5a2P.svg",d$="/cozy-preview/assets/pink-check-floor-DjPuYxlq.png",p$="/cozy-preview/assets/pink-check-floor-Cy9k3Fal.svg",f$="/cozy-preview/assets/pink-hearts-DP4TxPV5.png",g$="/cozy-preview/assets/pink-hearts-BpVCT-98.svg",h$="/cozy-preview/assets/cloud-sky-CbZL0zcC.svg",u$="/cozy-preview/assets/pastel-planks-BAcEss7w.svg",m$="/cozy-preview/assets/soft-carpet-BSwTSDW1.svg",y$="/cozy-preview/assets/star-sprinkle-5bH7qjW0.svg",w$="/cozy-preview/assets/tiny-hearts-C-RHlg1h.svg",b$="/cozy-preview/assets/butter-check-floor-yLFbEdi4.png",v$="/cozy-preview/assets/butter-check-floor-C8HdmZ0P.svg",k$="/cozy-preview/assets/mint-checks-7rTweT19.png",_$="/cozy-preview/assets/mint-checks-rWbOdhfH.svg",$$="/cozy-preview/assets/sky-clouds-9-shWk3w.png",x$="/cozy-preview/assets/sky-clouds-DUJlygwI.svg",M$="/cozy-preview/assets/sky-tiles-Cu-Ga741.png",L$="/cozy-preview/assets/sky-tiles-xxuodD5m.svg",E$="/cozy-preview/assets/sunny-stars-Bc3CbIvZ.png",C$="/cozy-preview/assets/sunny-stars-C6fsFX70.svg",z$="/cozy-preview/assets/leafy-cream-Cv5o-u-w.png",S$="/cozy-preview/assets/leafy-cream-WIcyLI1T.svg",P$="/cozy-preview/assets/orange-gingham-BjUerG-F.png",T$="/cozy-preview/assets/orange-gingham-CVNizWBt.svg",B$="/cozy-preview/assets/terracotta-tiles-dXqpLLce.png",R$="/cozy-preview/assets/terracotta-tiles-j3yOSRI7.svg",A$="/cozy-preview/assets/wood-panel-BGEVUu4R.png",D$="/cozy-preview/assets/wood-panel-Dob8WRpW.svg",I$="/cozy-preview/assets/wood-planks-vE8-OOXo.png",H$="/cozy-preview/assets/wood-planks-4TUYjAkF.svg",O$="/cozy-preview/assets/wc-cabin-planks-Icu9n6YO.webp",W$="/cozy-preview/assets/wc-candy-stripe-cOBsT1Xj.webp",U$="/cozy-preview/assets/wc-frosty-dots-DmQgGwJW.webp",V$="/cozy-preview/assets/wc-mint-pine-5FYK_dVo.webp",Q$="/cozy-preview/assets/wc-peppermint-tiles-ChaNg2gF.webp",q$="/cozy-preview/assets/wc-red-plaid-CcQ3BMhN.webp",Z$="/cozy-preview/assets/wc-snow-knit-DEFXSv74.webp",N$="/cozy-preview/assets/wc-snowflake-sky-DrRAdoDP.webp",Bd={small:80,medium:150,large:260},F$={"welcome-home":"Welcome Home","sunny-vibes":"Sunny Vibes",glossy:"Glossy",cottage:"Cozy Cottage",...lu},wf=e=>F$[e]??e.replace(/[-_]+/g," ").replace(/\b\w/g,t=>t.toUpperCase()),j$=Object.assign({"../assets/items/manifest.json":c1,"../assets/patterns/manifest.json":d1}),Rd=Object.assign({"../assets/items/bedroom/alarm-clock.png":p1,"../assets/items/bedroom/alarm-clock.svg":f1,"../assets/items/bedroom/bedtime-snack.png":g1,"../assets/items/bedroom/bedtime-snack.svg":h1,"../assets/items/bedroom/book-stack.png":u1,"../assets/items/bedroom/book-stack.svg":m1,"../assets/items/bedroom/bunk-bed.png":y1,"../assets/items/bedroom/bunk-bed.svg":w1,"../assets/items/bedroom/bunny-slippers.png":b1,"../assets/items/bedroom/bunny-slippers.svg":v1,"../assets/items/bedroom/canopy-bed.png":k1,"../assets/items/bedroom/canopy-bed.svg":_1,"../assets/items/bedroom/cat-bed.png":$1,"../assets/items/bedroom/cat-bed.svg":x1,"../assets/items/bedroom/cloud-rug.png":M1,"../assets/items/bedroom/cloud-rug.svg":L1,"../assets/items/bedroom/cloud-shelf.png":E1,"../assets/items/bedroom/cloud-shelf.svg":C1,"../assets/items/bedroom/cork-board.png":z1,"../assets/items/bedroom/cork-board.svg":S1,"../assets/items/bedroom/daisy-pot.png":P1,"../assets/items/bedroom/daisy-pot.svg":T1,"../assets/items/bedroom/desk.png":B1,"../assets/items/bedroom/desk.svg":R1,"../assets/items/bedroom/dino-plush.png":A1,"../assets/items/bedroom/dino-plush.svg":D1,"../assets/items/bedroom/doll-house.png":I1,"../assets/items/bedroom/doll-house.svg":H1,"../assets/items/bedroom/dresser.png":O1,"../assets/items/bedroom/dresser.svg":W1,"../assets/items/bedroom/egg-chair.png":U1,"../assets/items/bedroom/egg-chair.svg":V1,"../assets/items/bedroom/floor-fan.png":Q1,"../assets/items/bedroom/floor-fan.svg":q1,"../assets/items/bedroom/guinea-pig.png":Z1,"../assets/items/bedroom/guinea-pig.svg":N1,"../assets/items/bedroom/hamster-cage.png":F1,"../assets/items/bedroom/hamster-cage.svg":j1,"../assets/items/bedroom/heart-rug.png":G1,"../assets/items/bedroom/heart-rug.svg":Y1,"../assets/items/bedroom/lava-lamp.png":K1,"../assets/items/bedroom/lava-lamp.svg":X1,"../assets/items/bedroom/moon-night-light.png":J1,"../assets/items/bedroom/moon-night-light.svg":e2,"../assets/items/bedroom/nightstand.png":t2,"../assets/items/bedroom/nightstand.svg":n2,"../assets/items/bedroom/paper-lantern.png":s2,"../assets/items/bedroom/paper-lantern.svg":o2,"../assets/items/bedroom/piggy-bank.png":i2,"../assets/items/bedroom/piggy-bank.svg":a2,"../assets/items/bedroom/plant-stand.png":r2,"../assets/items/bedroom/plant-stand.svg":l2,"../assets/items/bedroom/play-tent.png":c2,"../assets/items/bedroom/play-tent.svg":d2,"../assets/items/bedroom/star-mobile.png":p2,"../assets/items/bedroom/star-mobile.svg":f2,"../assets/items/bedroom/toy-chest.png":g2,"../assets/items/bedroom/toy-chest.svg":h2,"../assets/items/bedroom/toy-robot.png":u2,"../assets/items/bedroom/toy-robot.svg":m2,"../assets/items/bedroom/toy-train.png":y2,"../assets/items/bedroom/toy-train.svg":w2,"../assets/items/bedroom/unicorn-plush.png":b2,"../assets/items/bedroom/unicorn-plush.svg":v2,"../assets/items/bedroom/wardrobe.png":k2,"../assets/items/bedroom/wardrobe.svg":_2,"../assets/items/kitchen/bananas.png":$2,"../assets/items/kitchen/bananas.svg":x2,"../assets/items/kitchen/bar-stool.png":M2,"../assets/items/kitchen/bar-stool.svg":L2,"../assets/items/kitchen/bread-loaf.png":E2,"../assets/items/kitchen/bread-loaf.svg":C2,"../assets/items/kitchen/chick.png":z2,"../assets/items/kitchen/chick.svg":S2,"../assets/items/kitchen/china-hutch.png":P2,"../assets/items/kitchen/china-hutch.svg":T2,"../assets/items/kitchen/cocoa-mug.png":B2,"../assets/items/kitchen/cocoa-mug.svg":R2,"../assets/items/kitchen/cookie-jar.png":A2,"../assets/items/kitchen/cookie-jar.svg":D2,"../assets/items/kitchen/cooking-pot.png":I2,"../assets/items/kitchen/cooking-pot.svg":H2,"../assets/items/kitchen/cupcake.png":O2,"../assets/items/kitchen/cupcake.svg":W2,"../assets/items/kitchen/dish-rack.png":U2,"../assets/items/kitchen/dish-rack.svg":V2,"../assets/items/kitchen/fruit-bowl.png":Q2,"../assets/items/kitchen/fruit-bowl.svg":q2,"../assets/items/kitchen/frying-pan.png":Z2,"../assets/items/kitchen/frying-pan.svg":N2,"../assets/items/kitchen/happy-fridge.png":F2,"../assets/items/kitchen/happy-fridge.svg":j2,"../assets/items/kitchen/herb-box.png":G2,"../assets/items/kitchen/herb-box.svg":Y2,"../assets/items/kitchen/high-chair.png":K2,"../assets/items/kitchen/high-chair.svg":X2,"../assets/items/kitchen/ice-cream.png":J2,"../assets/items/kitchen/ice-cream.svg":ey,"../assets/items/kitchen/kettle.png":ty,"../assets/items/kitchen/kettle.svg":ny,"../assets/items/kitchen/kitchen-counter.png":sy,"../assets/items/kitchen/kitchen-counter.svg":oy,"../assets/items/kitchen/kitchen-sink.png":iy,"../assets/items/kitchen/kitchen-sink.svg":ay,"../assets/items/kitchen/lemon-tree.png":ry,"../assets/items/kitchen/lemon-tree.svg":ly,"../assets/items/kitchen/microwave.png":cy,"../assets/items/kitchen/microwave.svg":dy,"../assets/items/kitchen/milk-bottle.png":py,"../assets/items/kitchen/milk-bottle.svg":fy,"../assets/items/kitchen/pancakes.png":gy,"../assets/items/kitchen/pancakes.svg":hy,"../assets/items/kitchen/pantry-shelf.png":uy,"../assets/items/kitchen/pantry-shelf.svg":my,"../assets/items/kitchen/pendant-lamp.png":yy,"../assets/items/kitchen/pendant-lamp.svg":wy,"../assets/items/kitchen/pet-bowl.png":by,"../assets/items/kitchen/pet-bowl.svg":vy,"../assets/items/kitchen/rice-cooker.png":ky,"../assets/items/kitchen/rice-cooker.svg":_y,"../assets/items/kitchen/runner-rug.png":$y,"../assets/items/kitchen/runner-rug.svg":xy,"../assets/items/kitchen/spice-rack.png":My,"../assets/items/kitchen/spice-rack.svg":Ly,"../assets/items/kitchen/stand-mixer.png":Ey,"../assets/items/kitchen/stand-mixer.svg":Cy,"../assets/items/kitchen/teapot.png":zy,"../assets/items/kitchen/teapot.svg":Sy,"../assets/items/kitchen/toaster.png":Py,"../assets/items/kitchen/toaster.svg":Ty,"../assets/items/kitchen/utensil-rail.png":By,"../assets/items/kitchen/utensil-rail.svg":Ry,"../assets/items/kitchen/watermelon-slice.png":Ay,"../assets/items/kitchen/watermelon-slice.svg":Dy,"../assets/items/living/aquarium.png":Iy,"../assets/items/living/aquarium.svg":Hy,"../assets/items/living/arc-floor-lamp.png":Oy,"../assets/items/living/arc-floor-lamp.svg":Wy,"../assets/items/living/bean-bag.png":Uy,"../assets/items/living/bean-bag.svg":Vy,"../assets/items/living/bird-cage.png":Qy,"../assets/items/living/bird-cage.svg":qy,"../assets/items/living/blanket-basket.png":Zy,"../assets/items/living/blanket-basket.svg":Ny,"../assets/items/living/building-blocks.png":Fy,"../assets/items/living/building-blocks.svg":jy,"../assets/items/living/coffee-table.png":Gy,"../assets/items/living/coffee-table.svg":Yy,"../assets/items/living/comfy-armchair.png":Ky,"../assets/items/living/comfy-armchair.svg":Xy,"../assets/items/living/cubby-shelf.png":Jy,"../assets/items/living/cubby-shelf.svg":ew,"../assets/items/living/daisy-rug.png":tw,"../assets/items/living/daisy-rug.svg":nw,"../assets/items/living/fiddle-leaf-fig.png":sw,"../assets/items/living/fiddle-leaf-fig.svg":ow,"../assets/items/living/fireplace.png":iw,"../assets/items/living/fireplace.svg":aw,"../assets/items/living/globe.png":rw,"../assets/items/living/globe.svg":lw,"../assets/items/living/hanging-planter.png":cw,"../assets/items/living/hanging-planter.svg":dw,"../assets/items/living/monstera-plant.png":pw,"../assets/items/living/monstera-plant.svg":fw,"../assets/items/living/piano.png":gw,"../assets/items/living/piano.svg":hw,"../assets/items/living/popcorn.png":uw,"../assets/items/living/popcorn.svg":mw,"../assets/items/living/pouf.png":yw,"../assets/items/living/pouf.svg":ww,"../assets/items/living/rainbow-rug.png":bw,"../assets/items/living/rainbow-rug.svg":vw,"../assets/items/living/rainbow-wall-art.png":kw,"../assets/items/living/rainbow-wall-art.svg":_w,"../assets/items/living/retro-radio.png":$w,"../assets/items/living/retro-radio.svg":xw,"../assets/items/living/rocking-chair.png":Mw,"../assets/items/living/rocking-chair.svg":Lw,"../assets/items/living/rocking-horse.png":Ew,"../assets/items/living/rocking-horse.svg":Cw,"../assets/items/living/snake-plant.png":zw,"../assets/items/living/snake-plant.svg":Sw,"../assets/items/living/string-lights.png":Pw,"../assets/items/living/string-lights.svg":Tw,"../assets/items/living/succulent-trio.png":Bw,"../assets/items/living/succulent-trio.svg":Rw,"../assets/items/living/tassel-rug.png":Aw,"../assets/items/living/tassel-rug.svg":Dw,"../assets/items/living/throw-pillow.png":Iw,"../assets/items/living/throw-pillow.svg":Hw,"../assets/items/living/toy-car.png":Ow,"../assets/items/living/toy-car.svg":Ww,"../assets/items/living/tulip-vase.png":Uw,"../assets/items/living/tulip-vase.svg":Vw,"../assets/items/living/turtle.png":Qw,"../assets/items/living/turtle.svg":qw,"../assets/items/living/tv-stand.png":Zw,"../assets/items/living/tv-stand.svg":Nw,"../assets/items/living/wall-shelf.png":Fw,"../assets/items/living/wall-shelf.svg":jw,"../assets/items/packs/cottage/cc-bakery-shelf.png":Gw,"../assets/items/packs/cottage/cc-bakery-shelf.svg":Yw,"../assets/items/packs/cottage/cc-breakfast-table.png":Kw,"../assets/items/packs/cottage/cc-breakfast-table.svg":Xw,"../assets/items/packs/cottage/cc-bubble-chair.png":Jw,"../assets/items/packs/cottage/cc-bubble-chair.svg":eb,"../assets/items/packs/cottage/cc-canopy-daybed.png":tb,"../assets/items/packs/cottage/cc-canopy-daybed.svg":nb,"../assets/items/packs/cottage/cc-cloud-beanbag.png":sb,"../assets/items/packs/cottage/cc-cloud-beanbag.svg":ob,"../assets/items/packs/cottage/cc-cloud-lamp.png":ib,"../assets/items/packs/cottage/cc-cloud-lamp.svg":ab,"../assets/items/packs/cottage/cc-cottage-aquarium.png":rb,"../assets/items/packs/cottage/cc-cottage-aquarium.svg":lb,"../assets/items/packs/cottage/cc-cupcake-stand.png":cb,"../assets/items/packs/cottage/cc-cupcake-stand.svg":db,"../assets/items/packs/cottage/cc-dryer-chair.png":pb,"../assets/items/packs/cottage/cc-dryer-chair.svg":fb,"../assets/items/packs/cottage/cc-fairy-garland.png":gb,"../assets/items/packs/cottage/cc-fairy-garland.svg":hb,"../assets/items/packs/cottage/cc-fairy-shelf.png":ub,"../assets/items/packs/cottage/cc-fairy-shelf.svg":mb,"../assets/items/packs/cottage/cc-flower-kettle.png":yb,"../assets/items/packs/cottage/cc-flower-kettle.svg":wb,"../assets/items/packs/cottage/cc-flower-lamp.png":bb,"../assets/items/packs/cottage/cc-flower-lamp.svg":vb,"../assets/items/packs/cottage/cc-heart-bed.png":kb,"../assets/items/packs/cottage/cc-heart-bed.svg":_b,"../assets/items/packs/cottage/cc-heart-clock.png":$b,"../assets/items/packs/cottage/cc-heart-clock.svg":xb,"../assets/items/packs/cottage/cc-heart-pouf.png":Mb,"../assets/items/packs/cottage/cc-heart-pouf.svg":Lb,"../assets/items/packs/cottage/cc-heart-rug.png":Eb,"../assets/items/packs/cottage/cc-heart-rug.svg":Cb,"../assets/items/packs/cottage/cc-jewel-box.png":zb,"../assets/items/packs/cottage/cc-jewel-box.svg":Sb,"../assets/items/packs/cottage/cc-light-vanity.png":Pb,"../assets/items/packs/cottage/cc-light-vanity.svg":Tb,"../assets/items/packs/cottage/cc-macaron-jar.png":Bb,"../assets/items/packs/cottage/cc-macaron-jar.svg":Rb,"../assets/items/packs/cottage/cc-macrame-swing.png":Ab,"../assets/items/packs/cottage/cc-macrame-swing.svg":Db,"../assets/items/packs/cottage/cc-mani-chair.png":Ib,"../assets/items/packs/cottage/cc-mani-chair.svg":Hb,"../assets/items/packs/cottage/cc-mint-fridge.png":Ob,"../assets/items/packs/cottage/cc-mint-fridge.svg":Wb,"../assets/items/packs/cottage/cc-mushroom-stool.png":Ub,"../assets/items/packs/cottage/cc-mushroom-stool.svg":Vb,"../assets/items/packs/cottage/cc-pastel-range.png":Qb,"../assets/items/packs/cottage/cc-pastel-range.svg":qb,"../assets/items/packs/cottage/cc-perfume-tray.png":Zb,"../assets/items/packs/cottage/cc-perfume-tray.svg":Nb,"../assets/items/packs/cottage/cc-petal-table.png":Fb,"../assets/items/packs/cottage/cc-petal-table.svg":jb,"../assets/items/packs/cottage/cc-plant-wall.png":Gb,"../assets/items/packs/cottage/cc-plant-wall.svg":Yb,"../assets/items/packs/cottage/cc-reading-nook.png":Kb,"../assets/items/packs/cottage/cc-reading-nook.svg":Xb,"../assets/items/packs/cottage/cc-record-player.png":Jb,"../assets/items/packs/cottage/cc-record-player.svg":ev,"../assets/items/packs/cottage/cc-ribbon-mirror.png":tv,"../assets/items/packs/cottage/cc-ribbon-mirror.svg":nv,"../assets/items/packs/cottage/cc-scallop-curtains.png":sv,"../assets/items/packs/cottage/cc-scallop-curtains.svg":ov,"../assets/items/packs/cottage/cc-scallop-loveseat.png":iv,"../assets/items/packs/cottage/cc-scallop-loveseat.svg":av,"../assets/items/packs/cottage/cc-star-dresser.png":rv,"../assets/items/packs/cottage/cc-star-dresser.svg":lv,"../assets/items/packs/cottage/cc-teapot-set.png":cv,"../assets/items/packs/cottage/cc-teapot-set.svg":dv,"../assets/items/packs/cottage/cc-window-seat.png":pv,"../assets/items/packs/cottage/cc-window-seat.svg":fv,"../assets/items/packs/glossy/arched-shelf.png":gv,"../assets/items/packs/glossy/arched-shelf.svg":hv,"../assets/items/packs/glossy/blob-rug.png":uv,"../assets/items/packs/glossy/blob-rug.svg":mv,"../assets/items/packs/glossy/bubbly-plant.png":yv,"../assets/items/packs/glossy/bubbly-plant.svg":wv,"../assets/items/packs/glossy/bud-vase.png":bv,"../assets/items/packs/glossy/bud-vase.svg":vv,"../assets/items/packs/glossy/comb-brush.png":kv,"../assets/items/packs/glossy/comb-brush.svg":_v,"../assets/items/packs/glossy/cream-jars.png":$v,"../assets/items/packs/glossy/cream-jars.svg":xv,"../assets/items/packs/glossy/drop-lamp.png":Mv,"../assets/items/packs/glossy/drop-lamp.svg":Lv,"../assets/items/packs/glossy/droplet-buddy.png":Ev,"../assets/items/packs/glossy/droplet-buddy.svg":Cv,"../assets/items/packs/glossy/fancy-sofa.png":zv,"../assets/items/packs/glossy/fancy-sofa.svg":Sv,"../assets/items/packs/glossy/flower-cart.png":Pv,"../assets/items/packs/glossy/flower-cart.svg":Tv,"../assets/items/packs/glossy/foot-spa.png":Bv,"../assets/items/packs/glossy/foot-spa.svg":Rv,"../assets/items/packs/glossy/globe-pendants.png":Av,"../assets/items/packs/glossy/globe-pendants.svg":Dv,"../assets/items/packs/glossy/glow-mirror.png":Iv,"../assets/items/packs/glossy/glow-mirror.svg":Hv,"../assets/items/packs/glossy/gold-floor-mirror.png":Ov,"../assets/items/packs/glossy/gold-floor-mirror.svg":Wv,"../assets/items/packs/glossy/hair-dryer.png":Uv,"../assets/items/packs/glossy/hair-dryer.svg":Vv,"../assets/items/packs/glossy/heart-plant.png":Qv,"../assets/items/packs/glossy/heart-plant.svg":qv,"../assets/items/packs/glossy/heart-pouf.png":Zv,"../assets/items/packs/glossy/heart-pouf.svg":Nv,"../assets/items/packs/glossy/lilac-curtain.png":Fv,"../assets/items/packs/glossy/lilac-curtain.svg":jv,"../assets/items/packs/glossy/lotion-trio.png":Gv,"../assets/items/packs/glossy/lotion-trio.svg":Yv,"../assets/items/packs/glossy/mani-lamp.png":Kv,"../assets/items/packs/glossy/mani-lamp.svg":Xv,"../assets/items/packs/glossy/nail-table.png":Jv,"../assets/items/packs/glossy/nail-table.svg":e4,"../assets/items/packs/glossy/pebble-rug.png":t4,"../assets/items/packs/glossy/pebble-rug.svg":n4,"../assets/items/packs/glossy/perfume-bottle.png":s4,"../assets/items/packs/glossy/perfume-bottle.svg":o4,"../assets/items/packs/glossy/pink-fountain.png":i4,"../assets/items/packs/glossy/pink-fountain.svg":a4,"../assets/items/packs/glossy/pink-vanity.png":r4,"../assets/items/packs/glossy/pink-vanity.svg":l4,"../assets/items/packs/glossy/polish-bottle.png":c4,"../assets/items/packs/glossy/polish-bottle.svg":d4,"../assets/items/packs/glossy/polish-rack.png":p4,"../assets/items/packs/glossy/polish-rack.svg":f4,"../assets/items/packs/glossy/reception-desk.png":g4,"../assets/items/packs/glossy/reception-desk.svg":h4,"../assets/items/packs/glossy/salon-chair.png":u4,"../assets/items/packs/glossy/salon-chair.svg":m4,"../assets/items/packs/glossy/scent-candle.png":y4,"../assets/items/packs/glossy/scent-candle.svg":w4,"../assets/items/packs/glossy/spray-bottle.png":b4,"../assets/items/packs/glossy/spray-bottle.svg":v4,"../assets/items/packs/glossy/star-wall-sign.png":k4,"../assets/items/packs/glossy/star-wall-sign.svg":_4,"../assets/items/packs/glossy/swivel-stool.png":$4,"../assets/items/packs/glossy/swivel-stool.svg":x4,"../assets/items/packs/glossy/tiered-tray.png":M4,"../assets/items/packs/glossy/tiered-tray.svg":L4,"../assets/items/packs/glossy/towel-cart.png":E4,"../assets/items/packs/glossy/towel-cart.svg":C4,"../assets/items/packs/glossy/towel-stack.png":z4,"../assets/items/packs/glossy/towel-stack.svg":S4,"../assets/items/packs/glossy/vine-planter.png":P4,"../assets/items/packs/glossy/vine-planter.svg":T4,"../assets/items/packs/glossy/waiting-bench.png":B4,"../assets/items/packs/glossy/waiting-bench.svg":R4,"../assets/items/packs/glossy/wash-chair.png":A4,"../assets/items/packs/glossy/wash-chair.svg":D4,"../assets/items/packs/sunny-vibes/arched-mirror.png":I4,"../assets/items/packs/sunny-vibes/arched-mirror.svg":H4,"../assets/items/packs/sunny-vibes/big-monitor.png":O4,"../assets/items/packs/sunny-vibes/big-monitor.svg":W4,"../assets/items/packs/sunny-vibes/boba-cup.png":U4,"../assets/items/packs/sunny-vibes/boba-cup.svg":V4,"../assets/items/packs/sunny-vibes/bubble-bath.png":Q4,"../assets/items/packs/sunny-vibes/bubble-bath.svg":q4,"../assets/items/packs/sunny-vibes/cactus-buddy.png":Z4,"../assets/items/packs/sunny-vibes/cactus-buddy.svg":N4,"../assets/items/packs/sunny-vibes/caterpillar-plush.png":F4,"../assets/items/packs/sunny-vibes/caterpillar-plush.svg":j4,"../assets/items/packs/sunny-vibes/checker-bed.png":G4,"../assets/items/packs/sunny-vibes/checker-bed.svg":Y4,"../assets/items/packs/sunny-vibes/checker-rug.png":K4,"../assets/items/packs/sunny-vibes/checker-rug.svg":X4,"../assets/items/packs/sunny-vibes/clothes-rail.png":J4,"../assets/items/packs/sunny-vibes/clothes-rail.svg":e6,"../assets/items/packs/sunny-vibes/cloud-sofa.png":t6,"../assets/items/packs/sunny-vibes/cloud-sofa.svg":n6,"../assets/items/packs/sunny-vibes/cube-shelf.png":s6,"../assets/items/packs/sunny-vibes/cube-shelf.svg":o6,"../assets/items/packs/sunny-vibes/curvy-desk.png":i6,"../assets/items/packs/sunny-vibes/curvy-desk.svg":a6,"../assets/items/packs/sunny-vibes/cute-speaker.png":r6,"../assets/items/packs/sunny-vibes/cute-speaker.svg":l6,"../assets/items/packs/sunny-vibes/desk-lamp.png":c6,"../assets/items/packs/sunny-vibes/desk-lamp.svg":d6,"../assets/items/packs/sunny-vibes/desk-mic.png":p6,"../assets/items/packs/sunny-vibes/desk-mic.svg":f6,"../assets/items/packs/sunny-vibes/flower-lamp.png":g6,"../assets/items/packs/sunny-vibes/flower-lamp.svg":h6,"../assets/items/packs/sunny-vibes/frog-plush.png":u6,"../assets/items/packs/sunny-vibes/frog-plush.svg":m6,"../assets/items/packs/sunny-vibes/game-controller.png":y6,"../assets/items/packs/sunny-vibes/game-controller.svg":w6,"../assets/items/packs/sunny-vibes/gaming-chair.png":b6,"../assets/items/packs/sunny-vibes/gaming-chair.svg":v6,"../assets/items/packs/sunny-vibes/hamster-pet.png":k6,"../assets/items/packs/sunny-vibes/hamster-pet.svg":_6,"../assets/items/packs/sunny-vibes/headphones.png":$6,"../assets/items/packs/sunny-vibes/headphones.svg":x6,"../assets/items/packs/sunny-vibes/heart-light.png":M6,"../assets/items/packs/sunny-vibes/heart-light.svg":L6,"../assets/items/packs/sunny-vibes/keyboard.png":E6,"../assets/items/packs/sunny-vibes/keyboard.svg":C6,"../assets/items/packs/sunny-vibes/mini-fridge.png":z6,"../assets/items/packs/sunny-vibes/mini-fridge.svg":S6,"../assets/items/packs/sunny-vibes/pastel-wardrobe.png":P6,"../assets/items/packs/sunny-vibes/pastel-wardrobe.svg":T6,"../assets/items/packs/sunny-vibes/phone-stand.png":B6,"../assets/items/packs/sunny-vibes/phone-stand.svg":R6,"../assets/items/packs/sunny-vibes/pothos-plant.png":A6,"../assets/items/packs/sunny-vibes/pothos-plant.svg":D6,"../assets/items/packs/sunny-vibes/puffy-stool.png":I6,"../assets/items/packs/sunny-vibes/puffy-stool.svg":H6,"../assets/items/packs/sunny-vibes/ring-light.png":O6,"../assets/items/packs/sunny-vibes/ring-light.svg":W6,"../assets/items/packs/sunny-vibes/side-table-round.png":U6,"../assets/items/packs/sunny-vibes/side-table-round.svg":V6,"../assets/items/packs/sunny-vibes/star-lamp.png":Q6,"../assets/items/packs/sunny-vibes/star-lamp.svg":q6,"../assets/items/packs/sunny-vibes/sticker-board.png":Z6,"../assets/items/packs/sunny-vibes/sticker-board.svg":N6,"../assets/items/packs/sunny-vibes/sunny-art.png":F6,"../assets/items/packs/sunny-vibes/sunny-art.svg":j6,"../assets/items/packs/sunny-vibes/sv-bean-bag.png":G6,"../assets/items/packs/sunny-vibes/sv-bean-bag.svg":Y6,"../assets/items/packs/sunny-vibes/sv-cloud-rug.png":K6,"../assets/items/packs/sunny-vibes/sv-cloud-rug.svg":X6,"../assets/items/packs/sunny-vibes/sv-wall-shelf.png":J6,"../assets/items/packs/sunny-vibes/sv-wall-shelf.svg":ek,"../assets/items/packs/sunny-vibes/vlog-camera.png":tk,"../assets/items/packs/sunny-vibes/vlog-camera.svg":nk,"../assets/items/packs/sunny-vibes/wavy-floor-lamp.png":sk,"../assets/items/packs/sunny-vibes/wavy-floor-lamp.svg":ok,"../assets/items/packs/welcome-home/acorn-friend.png":ik,"../assets/items/packs/welcome-home/acorn-friend.svg":ak,"../assets/items/packs/welcome-home/apple-tree.png":rk,"../assets/items/packs/welcome-home/apple-tree.svg":lk,"../assets/items/packs/welcome-home/big-wardrobe.png":ck,"../assets/items/packs/welcome-home/big-wardrobe.svg":dk,"../assets/items/packs/welcome-home/box-stack.png":pk,"../assets/items/packs/welcome-home/box-stack.svg":fk,"../assets/items/packs/welcome-home/brick-fireplace.png":gk,"../assets/items/packs/welcome-home/brick-fireplace.svg":hk,"../assets/items/packs/welcome-home/bulletin-board.png":uk,"../assets/items/packs/welcome-home/bulletin-board.svg":mk,"../assets/items/packs/welcome-home/cozy-mug.png":yk,"../assets/items/packs/welcome-home/cozy-mug.svg":wk,"../assets/items/packs/welcome-home/cream-sofa.png":bk,"../assets/items/packs/welcome-home/cream-sofa.svg":vk,"../assets/items/packs/welcome-home/fire-pit.png":kk,"../assets/items/packs/welcome-home/fire-pit.svg":_k,"../assets/items/packs/welcome-home/glass-cabinet.png":$k,"../assets/items/packs/welcome-home/glass-cabinet.svg":xk,"../assets/items/packs/welcome-home/hanging-lantern.png":Mk,"../assets/items/packs/welcome-home/hanging-lantern.svg":Lk,"../assets/items/packs/welcome-home/knit-cushion.png":Ek,"../assets/items/packs/welcome-home/knit-cushion.svg":Ck,"../assets/items/packs/welcome-home/ladder-shelf.png":zk,"../assets/items/packs/welcome-home/ladder-shelf.svg":Sk,"../assets/items/packs/welcome-home/landscape-art.png":Pk,"../assets/items/packs/welcome-home/landscape-art.svg":Tk,"../assets/items/packs/welcome-home/lattice-bench.png":Bk,"../assets/items/packs/welcome-home/lattice-bench.svg":Rk,"../assets/items/packs/welcome-home/leaf-wreath.png":Ak,"../assets/items/packs/welcome-home/leaf-wreath.svg":Dk,"../assets/items/packs/welcome-home/mini-greenhouse.png":Ik,"../assets/items/packs/welcome-home/mini-greenhouse.svg":Hk,"../assets/items/packs/welcome-home/moving-box.png":Ok,"../assets/items/packs/welcome-home/moving-box.svg":Wk,"../assets/items/packs/welcome-home/picnic-basket.png":Uk,"../assets/items/packs/welcome-home/picnic-basket.svg":Vk,"../assets/items/packs/welcome-home/round-rug.png":Qk,"../assets/items/packs/welcome-home/round-rug.svg":qk,"../assets/items/packs/welcome-home/sale-sign.png":Zk,"../assets/items/packs/welcome-home/sale-sign.svg":Nk,"../assets/items/packs/welcome-home/sprout-pot.png":Fk,"../assets/items/packs/welcome-home/sprout-pot.svg":jk,"../assets/items/packs/welcome-home/stripe-runner.png":Gk,"../assets/items/packs/welcome-home/stripe-runner.svg":Yk,"../assets/items/packs/welcome-home/trailing-plant.png":Kk,"../assets/items/packs/welcome-home/trailing-plant.svg":Xk,"../assets/items/packs/welcome-home/wall-clock.png":Jk,"../assets/items/packs/welcome-home/wall-clock.svg":e_,"../assets/items/packs/welcome-home/wh-arc-floor-lamp.png":t_,"../assets/items/packs/welcome-home/wh-arc-floor-lamp.svg":n_,"../assets/items/packs/welcome-home/wh-book-stack.png":s_,"../assets/items/packs/welcome-home/wh-book-stack.svg":o_,"../assets/items/packs/welcome-home/wh-dresser.png":i_,"../assets/items/packs/welcome-home/wh-dresser.svg":a_,"../assets/items/packs/welcome-home/wh-fiddle-leaf-fig.png":r_,"../assets/items/packs/welcome-home/wh-fiddle-leaf-fig.svg":l_,"../assets/items/packs/welcome-home/wh-kitchen-counter.png":c_,"../assets/items/packs/welcome-home/wh-kitchen-counter.svg":d_,"../assets/items/packs/welcome-home/wh-nightstand.png":p_,"../assets/items/packs/welcome-home/wh-nightstand.svg":f_,"../assets/items/packs/welcome-home/wh-pendant-lamp.png":g_,"../assets/items/packs/welcome-home/wh-pendant-lamp.svg":h_,"../assets/items/packs/welcome-home/wh-snake-plant.png":u_,"../assets/items/packs/welcome-home/wh-snake-plant.svg":m_,"../assets/items/packs/welcome-home/wh-string-lights.png":y_,"../assets/items/packs/welcome-home/wh-string-lights.svg":w_,"../assets/items/packs/welcome-home/wh-teapot.png":b_,"../assets/items/packs/welcome-home/wh-teapot.svg":v_,"../assets/items/packs/welcome-home/wood-armchair.png":k_,"../assets/items/packs/welcome-home/wood-armchair.svg":__,"../assets/items/packs/welcome-home/wood-bookshelf.png":$_,"../assets/items/packs/welcome-home/wood-bookshelf.svg":x_,"../assets/items/packs/welcome-home/wood-coffee-table.png":M_,"../assets/items/packs/welcome-home/wood-coffee-table.svg":L_,"../assets/items/packs/welcome-home/wood-desk.png":E_,"../assets/items/packs/welcome-home/wood-desk.svg":C_,"../assets/items/packs/welcome-home/wood-stool.png":z_,"../assets/items/packs/welcome-home/wood-stool.svg":S_,"../assets/items/packs/welcome-home/wooden-bed.png":P_,"../assets/items/packs/welcome-home/wooden-bed.svg":T_,"../assets/items/packs/winter/wc-bauble-garland.webp":B_,"../assets/items/packs/winter/wc-berry-wreath.webp":R_,"../assets/items/packs/winter/wc-birch-basket.webp":A_,"../assets/items/packs/winter/wc-cabin-picture.webp":D_,"../assets/items/packs/winter/wc-candle-trio.webp":I_,"../assets/items/packs/winter/wc-cane-lamp.webp":H_,"../assets/items/packs/winter/wc-cinnamon-tray.webp":O_,"../assets/items/packs/winter/wc-cocoa-cart.webp":W_,"../assets/items/packs/winter/wc-cocoa-mug.webp":U_,"../assets/items/packs/winter/wc-cocoa-pot.webp":V_,"../assets/items/packs/winter/wc-cookie-oven.webp":Q_,"../assets/items/packs/winter/wc-cookie-plate.webp":q_,"../assets/items/packs/winter/wc-frost-bookcase.webp":Z_,"../assets/items/packs/winter/wc-frosted-pine.webp":N_,"../assets/items/packs/winter/wc-fur-bench.webp":F_,"../assets/items/packs/winter/wc-gingerbread-village.webp":j_,"../assets/items/packs/winter/wc-gingerbread.webp":G_,"../assets/items/packs/winter/wc-globe-lamp.webp":Y_,"../assets/items/packs/winter/wc-holiday-tree.webp":K_,"../assets/items/packs/winter/wc-holly.webp":X_,"../assets/items/packs/winter/wc-ice-skates.webp":J_,"../assets/items/packs/winter/wc-ice-wardrobe.webp":e8,"../assets/items/packs/winter/wc-knit-armchair.webp":t8,"../assets/items/packs/winter/wc-lantern.webp":n8,"../assets/items/packs/winter/wc-log-bench.webp":s8,"../assets/items/packs/winter/wc-marshmallow-jar.webp":o8,"../assets/items/packs/winter/wc-mitten-line.webp":i8,"../assets/items/packs/winter/wc-mitten-ottoman.webp":a8,"../assets/items/packs/winter/wc-mug-shelf.webp":r8,"../assets/items/packs/winter/wc-nutcracker.webp":l8,"../assets/items/packs/winter/wc-penguin-chair.webp":c8,"../assets/items/packs/winter/wc-penguin-plush.webp":d8,"../assets/items/packs/winter/wc-peppermint-counter.webp":p8,"../assets/items/packs/winter/wc-peppermint-rug.webp":f8,"../assets/items/packs/winter/wc-pinecone-garland.webp":g8,"../assets/items/packs/winter/wc-pinecone-table.webp":h8,"../assets/items/packs/winter/wc-plaid-bed.webp":u8,"../assets/items/packs/winter/wc-plaid-sofa.webp":m8,"../assets/items/packs/winter/wc-poinsettia.webp":y8,"../assets/items/packs/winter/wc-polar-plush.webp":w8,"../assets/items/packs/winter/wc-pom-rug.webp":b8,"../assets/items/packs/winter/wc-present-stack.webp":v8,"../assets/items/packs/winter/wc-reindeer.webp":k8,"../assets/items/packs/winter/wc-sled-table.webp":_8,"../assets/items/packs/winter/wc-sleigh-planter.webp":$8,"../assets/items/packs/winter/wc-snow-globe.webp":x8,"../assets/items/packs/winter/wc-snow-mobile.webp":M8,"../assets/items/packs/winter/wc-snow-nightstand.webp":L8,"../assets/items/packs/winter/wc-snow-window.webp":E8,"../assets/items/packs/winter/wc-snowman.webp":C8,"../assets/items/packs/winter/wc-snowshoes.webp":z8,"../assets/items/packs/winter/wc-sock-hamper.webp":S8,"../assets/items/packs/winter/wc-star-topper.webp":P8,"../assets/items/packs/winter/wc-stocking-row.webp":T8,"../assets/items/packs/winter/wc-stone-hearth.webp":B8,"../assets/items/packs/winter/wc-twinkle-lamp.webp":R8,"../assets/items/packs/winter/wc-twinkle-string.webp":A8,"../assets/items/packs/winter/wc-window-seat.webp":D8,"../assets/items/packs/winter/wc-woodstove.webp":I8}),Ad=Object.assign({"../assets/patterns/cottage/cc-butter-polka.png":H8,"../assets/patterns/cottage/cc-butter-polka.svg":O8,"../assets/patterns/cottage/cc-cream-hex.png":W8,"../assets/patterns/cottage/cc-cream-hex.svg":U8,"../assets/patterns/cottage/cc-lavender-lattice.png":V8,"../assets/patterns/cottage/cc-lavender-lattice.svg":Q8,"../assets/patterns/cottage/cc-lilac-gingham.png":q8,"../assets/patterns/cottage/cc-lilac-gingham.svg":Z8,"../assets/patterns/cottage/cc-mint-checks.png":N8,"../assets/patterns/cottage/cc-mint-checks.svg":F8,"../assets/patterns/cottage/cc-mint-florals.png":j8,"../assets/patterns/cottage/cc-mint-florals.svg":G8,"../assets/patterns/cottage/cc-peach-scallops.png":Y8,"../assets/patterns/cottage/cc-peach-scallops.svg":K8,"../assets/patterns/cottage/cc-pink-plaid.png":X8,"../assets/patterns/cottage/cc-pink-plaid.svg":J8,"../assets/patterns/cottage/cc-rag-planks.png":e$,"../assets/patterns/cottage/cc-rag-planks.svg":t$,"../assets/patterns/cottage/cc-rose-herringbone.png":n$,"../assets/patterns/cottage/cc-rose-herringbone.svg":s$,"../assets/patterns/glossy/lilac-stripes.png":o$,"../assets/patterns/glossy/lilac-stripes.svg":i$,"../assets/patterns/glossy/lilac-terrazzo.png":a$,"../assets/patterns/glossy/lilac-terrazzo.svg":r$,"../assets/patterns/glossy/mint-bubbles.png":l$,"../assets/patterns/glossy/mint-bubbles.svg":c$,"../assets/patterns/glossy/pink-check-floor.png":d$,"../assets/patterns/glossy/pink-check-floor.svg":p$,"../assets/patterns/glossy/pink-hearts.png":f$,"../assets/patterns/glossy/pink-hearts.svg":g$,"../assets/patterns/nursery/cloud-sky.svg":h$,"../assets/patterns/nursery/pastel-planks.svg":u$,"../assets/patterns/nursery/soft-carpet.svg":m$,"../assets/patterns/nursery/star-sprinkle.svg":y$,"../assets/patterns/nursery/tiny-hearts.svg":w$,"../assets/patterns/sunny-vibes/butter-check-floor.png":b$,"../assets/patterns/sunny-vibes/butter-check-floor.svg":v$,"../assets/patterns/sunny-vibes/mint-checks.png":k$,"../assets/patterns/sunny-vibes/mint-checks.svg":_$,"../assets/patterns/sunny-vibes/sky-clouds.png":$$,"../assets/patterns/sunny-vibes/sky-clouds.svg":x$,"../assets/patterns/sunny-vibes/sky-tiles.png":M$,"../assets/patterns/sunny-vibes/sky-tiles.svg":L$,"../assets/patterns/sunny-vibes/sunny-stars.png":E$,"../assets/patterns/sunny-vibes/sunny-stars.svg":C$,"../assets/patterns/welcome-home/leafy-cream.png":z$,"../assets/patterns/welcome-home/leafy-cream.svg":S$,"../assets/patterns/welcome-home/orange-gingham.png":P$,"../assets/patterns/welcome-home/orange-gingham.svg":T$,"../assets/patterns/welcome-home/terracotta-tiles.png":B$,"../assets/patterns/welcome-home/terracotta-tiles.svg":R$,"../assets/patterns/welcome-home/wood-panel.png":A$,"../assets/patterns/welcome-home/wood-panel.svg":D$,"../assets/patterns/welcome-home/wood-planks.png":I$,"../assets/patterns/welcome-home/wood-planks.svg":H$,"../assets/patterns/winter/wc-cabin-planks.webp":O$,"../assets/patterns/winter/wc-candy-stripe.webp":W$,"../assets/patterns/winter/wc-frosty-dots.webp":U$,"../assets/patterns/winter/wc-mint-pine.webp":V$,"../assets/patterns/winter/wc-peppermint-tiles.webp":Q$,"../assets/patterns/winter/wc-red-plaid.webp":q$,"../assets/patterns/winter/wc-snow-knit.webp":Z$,"../assets/patterns/winter/wc-snowflake-sky.webp":N$});function G$(e,t){if(!e||!e.trim())return[];try{const n=JSON.parse(e);return(Array.isArray(n)?n:[...Array.isArray(n?.items)?n.items:[],...Array.isArray(n?.patterns)?n.patterns:[]]).filter(o=>o&&typeof o.slug=="string"&&o.slug.trim())}catch(n){return console.warn(`[packs] ${t} is not valid JSON; ignoring`,n),[]}}const bf=Object.entries(j$).flatMap(([e,t])=>G$(t,e)),Y$=["svg","png","webp","SVG","PNG","WEBP"];function vf(e,t,n,s){for(const i of Y$){const a=e[`../assets/${t}/${n}/${s}.${i}`];if(a)return a}const o=Object.keys(e).find(i=>i.split("/").pop().replace(/\.\w+$/,"")===s);return o?e[o]:void 0}const Dd={furniture:"furniture",appliance:"furniture",appliances:"furniture",seating:"furniture",storage:"furniture",bed:"furniture",table:"furniture",decor:"decor",rug:"decor",rugs:"decor",lighting:"decor",light:"decor",lamp:"decor",toy:"decor",toys:"decor","wall-art":"decor",art:"decor",beauty:"decor",plant:"plants",plants:"plants",flower:"plants",flowers:"plants",food:"food",drink:"food",drinks:"food",snack:"food",pet:"pets",pets:"pets",animal:"pets",animals:"pets"};function K$(e){const t=typeof e=="string"?e.trim().toLowerCase():"";return Dd[t]??Dd[t.replace(/s$/,"")]??"decor"}const to=(e,t)=>typeof e=="string"&&e.trim()?e.trim().toLowerCase():t,kf=e=>["wallpaper","floor"].includes(to(e.type,"")),Id=new Set,X$=bf.filter(e=>!kf(e)).flatMap(e=>{const t=to(e.room,"any"),n=e.slug.trim();if(Id.has(n))return[];Id.add(n);const o=[e.svg,e.png].filter(h=>typeof h=="string").map(h=>Rd["../assets/items/"+h.replace(/^\.?\//,"")]).find(Boolean)??vf(Rd,"items",t,n);if(!o)return console.warn(`[packs] no image for items/${t}/${n}`),[];const i=to(e.pack,""),a=to(e.size,"medium"),r=K$(e.category),l=typeof e.gameW=="number"&&e.gameW>20&&e.gameW<800?e.gameW:Bd[a]??Bd.medium,c=typeof e.widthUnits=="number"&&typeof e.heightUnits=="number"&&e.widthUnits>0&&e.heightUnits>0?e.heightUnits/e.widthUnits:1,d=Math.round(l*Math.min(4,Math.max(.2,c))),f=typeof e.holdable=="boolean"?e.holdable:a!=="large"&&r!=="furniture",g=e.tag==="lighting"||/lamp|light|lantern|candle/i.test(n);return[{kind:`pack:${n}`,name:e.name||n,cat:r,rooms:[t],w:l,h:d,wall:e.wall===!0||void 0,svg:"",img:o,pack:i||void 0,holdable:f,light:g||void 0}]}),yl=bf.filter(kf).flatMap(e=>{const t=to(e.pack,"extra"),n=e.slug.trim(),o=[e.svg,e.png].filter(i=>typeof i=="string").map(i=>Ad["../assets/patterns/"+i.replace(/^\.?\//,"")]).find(Boolean)??vf(Ad,"patterns",t,n);return o?[{id:`${t}/${n}`,name:e.name||n,pack:t,kind:to(e.type,"wallpaper"),url:o}]:(console.warn(`[packs] no image for patterns/${t}/${n}`),[])}),Hd=Object.fromEntries(yl.map(e=>[e.id,e])),bn="#5a3d5c",T=`stroke="${bn}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,_f=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="2.4" fill="${bn}"/><circle cx="${t}" cy="${n}" r="2.4" fill="${bn}"/><circle cx="${e+.8}" cy="${n-.8}" r=".8" fill="#fff"/><circle cx="${t+.8}" cy="${n-.8}" r=".8" fill="#fff"/>`,$f=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/><ellipse cx="${t}" cy="${n}" rx="3.2" ry="2" fill="#ff9bb5" opacity=".75"/>`,Ye='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>';function Wr(e,t,n){return`${Ye}<ellipse cx="50" cy="78" rx="28" ry="16" fill="${t}" ${T}/><path d="M24 62 Q50 48 76 62 V78 Q50 92 24 78 Z" fill="${t}" ${T}/>
    <circle cx="50" cy="40" r="18" fill="${e}" ${T}/>${_f(43,57,40)}${$f(38,62,48)}<path d="M46 50 q4 3 8 0" fill="none" ${T}/>
    <path d="M38 26 Q50 16 62 26" fill="${n}" ${T}/><circle cx="50" cy="24" r="3" fill="${n}" ${T}/>`}const xf=[{kind:"crib",name:"Crib",cat:"furniture",w:260,svg:`${Ye}<rect x="8" y="28" width="84" height="58" rx="10" fill="#fff" ${T}/><path d="M8 42 H92 M20 28 V86 M36 28 V86 M50 28 V86 M64 28 V86 M80 28 V86" ${T}/><rect x="6" y="22" width="88" height="12" rx="6" fill="#9ad7f5" ${T}/><rect x="14" y="48" width="72" height="16" rx="6" fill="#ffe0ec"/><ellipse cx="32" cy="56" rx="8" ry="5" fill="#fff" ${T}/><ellipse cx="50" cy="56" rx="8" ry="5" fill="#c9e7ff" ${T}/>`},{kind:"bassinet",name:"Bassinet",cat:"furniture",w:170,svg:`${Ye}<path d="M18 78 Q8 78 10 64 L22 36 H78 L90 64 Q92 78 82 78 Z" fill="#fff" ${T}/><ellipse cx="50" cy="36" rx="32" ry="10" fill="#fff" ${T}/><path d="M22 40 Q50 52 78 40" fill="#ffe0ec" ${T}/><ellipse cx="50" cy="44" rx="16" ry="7" fill="#fff"/><path d="M30 78 L22 94 M70 78 L78 94" ${T}/><ellipse cx="50" cy="90" rx="28" ry="4" fill="none" ${T}/><path d="M14 22 Q50 4 86 22" fill="none" stroke="#9ad7f5" stroke-width="6" stroke-linecap="round"/>`},{kind:"rocker",name:"Rocker",cat:"furniture",w:190,svg:`${Ye}<path d="M16 88 Q50 98 84 88" fill="none" ${T}/><path d="M28 84 Q50 74 72 84" fill="#c9a0dc" ${T}/><rect x="30" y="28" width="40" height="36" rx="12" fill="#e4ccf2" ${T}/><path d="M22 48 Q18 70 30 80 H70 Q82 70 78 48 Z" fill="#f6e6ff" ${T}/><rect x="36" y="58" width="28" height="12" rx="6" fill="#ffc8dd" ${T}/><circle cx="50" cy="40" r="6" fill="#fff" opacity=".7"/>`},{kind:"changing-table",name:"Changing Table",cat:"furniture",w:230,svg:`${Ye}<rect x="8" y="36" width="84" height="16" rx="8" fill="#fff" ${T}/><rect x="14" y="40" width="72" height="8" rx="4" fill="#ffd6e8"/><rect x="16" y="52" width="28" height="32" rx="6" fill="#bde0fe" ${T}/><rect x="56" y="52" width="28" height="32" rx="6" fill="#c9f0d8" ${T}/><path d="M22 60 H38 M22 68 H38 M62 60 H78 M62 68 H78" ${T}/><rect x="18" y="84" width="8" height="10" rx="2" fill="${bn}"/><rect x="74" y="84" width="8" height="10" rx="2" fill="${bn}"/><rect x="34" y="22" width="18" height="12" rx="3" fill="#ffe0ec" ${T}/><rect x="54" y="24" width="16" height="10" rx="3" fill="#fff6d8" ${T}/>`},{kind:"toy-bin",name:"Toy Bin",cat:"furniture",w:150,svg:`${Ye}<path d="M14 40 H86 L78 90 H22 Z" fill="#ffd166" ${T}/><rect x="10" y="32" width="80" height="14" rx="7" fill="#ffe08a" ${T}/><circle cx="36" cy="58" r="8" fill="#ff8fab" ${T}/><rect x="50" y="50" width="16" height="16" rx="3" fill="#8ecae6" ${T}/><circle cx="62" cy="70" r="6" fill="#90e0a8" ${T}/>`},{kind:"baby-shelf",name:"Bookshelf",cat:"furniture",w:150,svg:`${Ye}<rect x="14" y="8" width="72" height="84" rx="8" fill="#f3d2b5" ${T}/><path d="M14 36 H86 M14 64 H86" ${T}/><rect x="22" y="14" width="8" height="18" rx="2" fill="#ff8fab" ${T}/><rect x="32" y="18" width="8" height="14" rx="2" fill="#8ecae6" ${T}/><rect x="44" y="14" width="8" height="18" rx="2" fill="#ffd166" ${T}/><rect x="58" y="16" width="8" height="16" rx="2" fill="#90e0a8" ${T}/><circle cx="34" cy="50" r="7" fill="#ffadad" ${T}/><rect x="50" y="44" width="18" height="14" rx="3" fill="#c9a0dc" ${T}/><ellipse cx="40" cy="78" rx="14" ry="8" fill="#fff" ${T}/>`},{kind:"doll-rose",name:"Rose Doll",cat:"decor",w:80,svg:Wr("#f6d3b0","#ffc2d4","#ff8fab")},{kind:"doll-honey",name:"Honey Doll",cat:"decor",w:80,svg:Wr("#e0ac69","#cdeffd","#ffd166")},{kind:"doll-cocoa",name:"Cocoa Doll",cat:"decor",w:80,svg:Wr("#8d5524","#d8f3dc","#c9a0dc")},{kind:"crib-mobile",name:"Crib Mobile",cat:"decor",w:150,wall:!0,svg:`<path d="M50 6 V22" ${T}/><ellipse cx="50" cy="28" rx="28" ry="8" fill="#fff" ${T}/><path d="M28 32 V48 M50 36 V58 M72 32 V48" ${T}/><circle cx="28" cy="56" r="8" fill="#ffd166" ${T}/><circle cx="50" cy="68" r="9" fill="#ff8fab" ${T}/><path d="M72 56 l6 4 -6 4 -6 -4 z" fill="#8ecae6" ${T}/><circle cx="28" cy="54" r="2" fill="#fff"/><circle cx="50" cy="66" r="2" fill="#fff"/>`},{kind:"night-light",name:"Night Light",cat:"decor",w:70,svg:`${Ye}<circle cx="50" cy="46" r="22" fill="#fff6c8" ${T}/><circle cx="50" cy="46" r="12" fill="#ffe08a"/><path d="M50 18 V10 M30 26 L24 20 M70 26 L76 20 M24 46 H14 M86 46 H76" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/><rect x="40" y="70" width="20" height="16" rx="4" fill="#c9a0dc" ${T}/><circle cx="50" cy="78" r="3" fill="#ff8fab"/>`},{kind:"bunny-plush",name:"Bunny Plush",cat:"decor",w:90,svg:`${Ye}<ellipse cx="34" cy="28" rx="8" ry="18" fill="#fff" ${T}/><ellipse cx="66" cy="28" rx="8" ry="18" fill="#fff" ${T}/><ellipse cx="34" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="66" cy="30" rx="3" ry="10" fill="#ffc8dd"/><ellipse cx="50" cy="74" rx="26" ry="18" fill="#fff" ${T}/><circle cx="50" cy="50" r="20" fill="#fff" ${T}/>${_f(43,57,50)}<path d="M47 58 l3 3 3 -3" fill="none" ${T}/>${$f(38,62,58)}`},{kind:"stacking-rings",name:"Stacking Rings",cat:"decor",w:70,svg:`${Ye}<ellipse cx="50" cy="86" rx="26" ry="7" fill="#ff8fab" ${T}/><ellipse cx="50" cy="74" rx="20" ry="6" fill="#ffd166" ${T}/><ellipse cx="50" cy="64" rx="15" ry="5" fill="#8ecae6" ${T}/><ellipse cx="50" cy="56" rx="10" ry="4" fill="#90e0a8" ${T}/><rect x="46" y="28" width="8" height="40" rx="4" fill="#c9a0dc" ${T}/><circle cx="50" cy="24" r="7" fill="#ffb3c6" ${T}/>`},{kind:"rattle",name:"Rattle",cat:"decor",w:60,svg:`${Ye}<circle cx="38" cy="40" r="20" fill="#ffd166" ${T}/><circle cx="32" cy="34" r="5" fill="#fff" opacity=".7"/><rect x="50" y="52" width="10" height="28" rx="5" fill="#ff8fab" ${T} transform="rotate(-20 55 66)"/><circle cx="68" cy="82" r="8" fill="#8ecae6" ${T}/>`},{kind:"baby-bottle",name:"Baby Bottle",cat:"food",w:55,svg:`${Ye}<rect x="36" y="8" width="28" height="12" rx="4" fill="#c9a0dc" ${T}/><rect x="42" y="18" width="16" height="8" fill="#fff" ${T}/><path d="M30 30 H70 L66 88 Q50 96 34 88 Z" fill="#e7f6ff" ${T}/><path d="M32 48 H68 L66 80 Q50 88 34 80 Z" fill="#fff" opacity=".85"/><rect x="34" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="46" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/><rect x="58" y="40" width="8" height="4" rx="1" fill="#9ad7f5"/>`},{kind:"blocks",name:"Baby Blocks",cat:"decor",w:90,svg:`${Ye}<rect x="14" y="58" width="28" height="28" rx="4" fill="#ff8fab" ${T}/><rect x="40" y="46" width="28" height="28" rx="4" fill="#ffd166" ${T}/><rect x="28" y="28" width="26" height="26" rx="4" fill="#8ecae6" ${T}/><path d="M20 72 H36 M48 60 H62 M34 42 H48" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"rocking-horse",name:"Little Rocking Horse",cat:"decor",w:180,svg:`${Ye}<path d="M12 86 Q50 98 88 82" fill="none" ${T}/><ellipse cx="48" cy="62" rx="26" ry="14" fill="#e6b88a" ${T}/><path d="M62 58 L84 40 Q92 36 90 48 L74 64 Z" fill="#f0d0b0" ${T}/><circle cx="82" cy="42" r="3" fill="${bn}"/><path d="M70 36 L76 24 L84 34" fill="#ff8fab" ${T}/><rect x="36" y="48" width="16" height="8" rx="3" fill="#c9a0dc" ${T}/><path d="M30 70 L22 84 M58 72 L66 86" ${T}/>`},{kind:"music-box",name:"Music Box",cat:"decor",w:80,svg:`${Ye}<rect x="22" y="40" width="56" height="46" rx="8" fill="#f6d6ff" ${T}/><path d="M22 40 L50 22 L78 40" fill="#e4ccf2" ${T}/><circle cx="50" cy="64" r="10" fill="#fff" ${T}/><path d="M50 58 V70 M44 64 H56" ${T}/><circle cx="50" cy="30" r="4" fill="#ffd166" ${T}/>`},{kind:"cloud-rug",name:"Nursery Cloud Rug",cat:"decor",w:340,svg:`<ellipse cx="50" cy="78" rx="46" ry="16" fill="#e7f6ff" ${T}/><circle cx="28" cy="70" r="16" fill="#f4fbff" ${T}/><circle cx="50" cy="62" r="18" fill="#fff" ${T}/><circle cx="72" cy="70" r="16" fill="#f4fbff" ${T}/><ellipse cx="50" cy="78" rx="30" ry="8" fill="#d6f0ff"/>`},{kind:"play-mat",name:"Play Mat",cat:"decor",w:300,svg:`<rect x="6" y="62" width="88" height="30" rx="14" fill="#ffe0ec" ${T}/><path d="M50 70 C42 62 30 64 34 74 C38 82 50 88 50 88 C50 88 62 82 66 74 C70 64 58 62 50 70 Z" fill="#ff8fab" ${T}/><circle cx="22" cy="76" r="5" fill="#ffd166" ${T}/><circle cx="78" cy="76" r="5" fill="#8ecae6" ${T}/>`},{kind:"moon-art",name:"Moon and Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M58 18 A28 28 0 1 0 58 78 A18 18 0 1 1 58 18 Z" fill="#fff3b0" ${T}/><path d="M22 30 l3 7 7 1 -5 5 1 7 -6 -4 -6 4 1 -7 -5 -5 7 -1 z" fill="#ffd166" ${T}/><path d="M78 58 l2 5 5 1 -4 4 1 5 -4 -3 -4 3 1 -5 -4 -4 5 -1 z" fill="#c9e7ff" ${T}/>`},{kind:"nursery-dresser",name:"Nursery Dresser",cat:"furniture",w:170,svg:`${Ye}<rect x="14" y="22" width="72" height="68" rx="8" fill="#f6e2c4" ${T}/><path d="M14 44 H86 M14 66 H86" ${T}/><circle cx="50" cy="34" r="3" fill="${bn}"/><circle cx="50" cy="55" r="3" fill="${bn}"/><circle cx="50" cy="76" r="3" fill="${bn}"/><rect x="30" y="10" width="18" height="12" rx="3" fill="#ffc2d4" ${T}/><rect x="52" y="12" width="16" height="10" rx="3" fill="#c9e7ff" ${T}/>`},{kind:"nursery-lamp",name:"Nursery Lamp",cat:"decor",w:80,svg:`${Ye}<path d="M28 42 L36 12 H64 L72 42 Z" fill="#fff6c8" ${T}/><rect x="46" y="42" width="8" height="40" rx="4" fill="#c9a0dc" ${T}/><ellipse cx="50" cy="88" rx="20" ry="6" fill="#b388d6" ${T}/><circle cx="46" cy="24" r="3" fill="#fff" opacity=".85"/><path d="M34 20 q6 -8 4 -2" fill="none" stroke="#ffd166" stroke-width="2"/>`},{kind:"nursery-curtains",name:"Curtains",cat:"decor",w:180,wall:!0,svg:`<rect x="16" y="10" width="68" height="50" rx="6" fill="#cfefff" ${T}/><path d="M50 10 V60 M16 34 H84" ${T}/><path d="M8 8 Q18 28 10 92" fill="#ffd6e8" ${T}/><path d="M92 8 Q82 28 90 92" fill="#ffd6e8" ${T}/><rect x="6" y="6" width="88" height="8" rx="3" fill="#f3d2b5" ${T}/>`}],Je="#5a3d5c",v=(e=3.5)=>`stroke="${Je}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function we(e,t,n){const s=Math.round(t*.62);return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="3.4" fill="${Je}" opacity=".08"/><ellipse cx="${e}" cy="${(n+1.2).toFixed(1)}" rx="${s}" ry="1.55" fill="${Je}" opacity=".12"/>`}function ee(e,t=2.2){return`<path d="${e}" fill="none" stroke="#fff" stroke-width="${t}" stroke-linecap="round" opacity=".75"/>`}function st(e,t=1.15){return`<path d="${e}" fill="none" stroke="${Je}" stroke-width="${t}" stroke-linecap="round" opacity=".2"/>`}function gc(e,t,n=".7"){return`<radialGradient id="${e}" cx="40%" cy="40%" r="60%"><stop offset="0" stop-color="${t}" stop-opacity="${n}"/><stop offset="1" stop-color="${t}" stop-opacity="0"/></radialGradient>`}function hc(e,t,n){return`<linearGradient id="${e}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t}"/><stop offset="1" stop-color="${n}"/></linearGradient>`}function J$(){return typeof location>"u"?!1:/(?:^|[?&])yard=1(?:&|$)/.test(location.search)}function wl(){return typeof location>"u"?"":new URLSearchParams(location.search).get("shot")||""}const e3={v:1,hair:"pigtails",hairC:"#a0522d",skin:"#f6d2b5",eyes:"big",eyeC:"#5a321c",freckles:!0,blush:!0,top:"classic",topC:"#ff7aa8",bottom:"skirt",bottomC:"#c9a0dc",dress:"sundress",dressC:"#ff8fab",shoes:"maryjanes",shoesC:"#ffd166",acc:["bow"],accC:"#ff7aa8"},t3=()=>Xo(e3),bl=864,vl={x:1084,y:578,flip:!0},Qn={x:1184,y:255},Od={x:1146,y:578},kl={x:940,y:540,flip:!0},$a=1160,Mf={x:824,y:398,w:96,h:230},Lf={x:996,y:372,w:82,h:196},n3=[{kind:"yard-swing",x:1266,y:580,scale:132/280},{kind:"lemonade-cart",x:1254,y:471},{kind:"sandbox",x:940,y:482},{kind:"picnic-blanket",x:939,y:420}];function be(e){return{kind:e.kind,name:e.name,cat:e.cat,w:e.w,h:e.h,vb:e.vb,wall:e.wall,holdable:e.holdable??!1,rooms:["backyard"],svg:e.svg}}const s3=be({kind:"yard-swing",name:"A-Frame Swing",cat:"furniture",w:280,h:215,vb:"0 0 130 100",svg:`${we(65,54,96)}
    <path d="M34 18 L50 18 L20 94 H4 Z" fill="#f3d2aa" ${v()}/>
    <path d="M42 24 L50 18 L18 70 H28 Z" fill="#d4a373"/>
    <path d="M80 18 L96 18 L126 94 H110 Z" fill="#e7c49a" ${v()}/>
    <path d="M108 22 L96 18 L126 94 H118 Z" fill="#c99366"/>
    ${st("M16 50 l8 28 M112 48 l8 30")}
    <rect x="22" y="6" width="86" height="14" rx="2" fill="#f6e0c4" ${v()}/>
    <rect x="86" y="9" width="18" height="8" rx="1" fill="#d4a373"/>
    <rect x="28" y="16" width="74" height="4" fill="#e7c49a"/>
    ${ee("M28 10 h30")}
    <g class="swingSeat">
      <rect x="48" y="74" width="34" height="7" rx="1" fill="#f3d2aa" ${v(2.2)}/>
      <rect x="72" y="76" width="8" height="4" fill="#d4a373"/>
      <path d="M54 20 V78 M76 20 V78" fill="none" ${v(2.2)}/>
      ${ee("M52 76 h14")}
    </g>`}),o3=be({kind:"sandbox",name:"Sandbox",cat:"furniture",w:120,h:54,vb:"0 0 160 72",svg:`${we(80,64,68)}
    <path d="M108 38 L146 26 L146 52 L108 64 Z" fill="#e7c49a" ${v()}/>
    <path d="M126 36 L142 28 L142 48 L126 56 Z" fill="#c99366"/>
    <path d="M12 40 H108 V64 H12 Z" fill="#f3d2aa" ${v()}/>
    <path d="M12 40 L36 18 L146 18 L108 40 Z" fill="#f6e0c4" ${v()}/>
    <path d="M112 20 L142 20 L108 38 L90 38 Z" fill="#d4a373"/>
    <path d="M34 36 L52 24 L122 24 L100 36 Z" fill="#ffe08a" ${v(2.2)}/>
    <path d="M98 26 L118 26 L100 34 L86 34 Z" fill="#f0c36a"/>
    ${st("M48 30 q8 2 6 5 M68 28 q10 2 8 6 M58 34 h16")}
    <path d="M76 30 L100 36 L94 48 L70 42 Z" fill="#d7e6f2" ${v(2.2)}/>
    <path d="M88 34 L98 38 L94 44 L84 40 Z" fill="#b7c9d6"/>
    <path d="M52 8 L64 4 L90 34 L78 38 Z" fill="#f0d2b0" ${v()}/>
    <path d="M64 8 L72 6 L90 32 L82 34 Z" fill="#d4a373"/>
    <path d="M46 2 H66 V9 H46 Z" fill="#c99366" ${v(2)}/>
    ${ee("M18 44 h26")}
    ${ee("M44 22 h22")}`}),i3=be({kind:"little-slide",name:"Little Slide",cat:"furniture",w:150,h:188,vb:"0 0 110 140",svg:`${we(56,44,134)}
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
    ${st("M80 64 q4 16 2 28")}`}),a3=be({kind:"yard-bench",name:"Garden Bench",cat:"furniture",w:140,h:100,vb:"0 0 140 100",svg:`${we(70,58,96)}
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
    ${st("M36 24 h48 M36 34 h44 M34 52 h52 M34 62 h46")}`}),r3=be({kind:"lemonade-cart",name:"Lemonade Cart",cat:"furniture",w:108,h:121,vb:"0 0 100 112",svg:`${we(50,40,106)}
    <circle cx="30" cy="96" r="11" fill="${Je}" ${v(2.2)}/><circle cx="30" cy="96" r="4.5" fill="#ffd166"/>
    <circle cx="72" cy="96" r="11" fill="${Je}" ${v(2.2)}/><circle cx="72" cy="96" r="4.5" fill="#ffd166"/>
    <rect x="18" y="92" width="66" height="5" rx="2" fill="#c99366" ${v(2)}/>
    <rect x="16" y="46" width="68" height="46" rx="3" fill="#fff6ea" ${v()}/>
    <rect x="66" y="50" width="14" height="38" fill="#f0d2a4"/>
    ${st("M28 56 v28 M42 56 v28 M56 56 v28")}
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
    <path d="M78 58 v12 M72 64 h12" fill="none" stroke="#e0a83a" stroke-width="1.3"/>`}),l3=be({kind:"sun-lounger",name:"Sun Lounger",cat:"furniture",w:168,h:86,vb:"0 0 170 90",svg:`${we(86,68,84)}
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
    ${st("M26 22 L52 46")}`}),c3=be({kind:"splash-pool",name:"Splash Pool",cat:"furniture",w:176,h:96,vb:"0 0 170 96",svg:`<defs>${hc("ydpoolW","#f3fbff","#7ec8e3")}</defs>
    ${we(85,72,90)}
    <ellipse cx="85" cy="58" rx="74" ry="28" fill="#8ecae6" ${v()}/>
    <path d="M22 52 Q40 34 78 40" fill="none" stroke="#ff8fab" stroke-width="16" stroke-linecap="round"/>
    <path d="M100 36 Q138 38 152 58" fill="none" stroke="#ffd166" stroke-width="14" stroke-linecap="round"/>
    <path d="M18 66 C22 82 50 90 85 90 C120 90 152 82 154 66 C148 78 120 84 85 84 C50 84 24 78 18 66 Z" fill="#5aa9c6"/>
    <ellipse cx="85" cy="54" rx="48" ry="16" fill="url(#ydpoolW)" ${v(2.2)}/>
    ${ee("M36 50 q20 -10 36 0")}
    <circle cx="128" cy="48" r="4" fill="#fff" ${v(1.6)}/>
    <circle cx="128" cy="48" r="1.6" fill="#8ecae6"/>
    <path d="M70 46 q3 -8 1 0 M96 42 q4 -9 1 1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`}),d3=be({kind:"picket-gate",name:"Picket Gate",cat:"furniture",w:110,h:150,vb:"0 0 100 136",svg:`${we(50,38,130)}
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
    <circle cx="86" cy="62" r="2.6" fill="#ffd166" ${v(1.8)}/>`});function p3(){let e="";for(let t=0;t<6;t++)for(let n=0;n<13;n++)(t+n)%2===0&&(e+=`<rect x="${n*15-6}" y="${t*10}" width="15" height="10" fill="#ff8fab"/>`);return e}const f3=be({kind:"picnic-blanket",name:"Picnic Blanket",cat:"decor",w:110,h:36,vb:"0 0 180 59",svg:`<defs><clipPath id="ydging"><path d="M22 20 L156 12 L174 44 L36 52 Z"/></clipPath></defs>
    ${we(96,74,54)}
    <path d="M22 20 L156 12 L174 44 L36 52 Z" fill="#fff0f5" ${v()}/>
    <g clip-path="url(#ydging)">${p3()}</g>
    <path d="M148 14 L170 42 L160 46 L138 18 Z" fill="#e45d88"/>
    <path d="M96 30 L128 26 L134 42 L100 46 Z" fill="#f3d2aa" ${v(2)}/>
    <path d="M120 28 L128 26 L134 42 L126 43 Z" fill="#c99366"/>
    <path d="M104 30 Q114 14 126 28" fill="none" ${v(2.2)}/>
    ${st("M104 34 h22 M104 38 h24",1)}
    ${ee("M34 26 l28 -3")}`});function xo(e,t,n,s){return`<path d="M${e-1.5} ${t+16} H${e+1.5} V${t+40} H${e-1.5} Z" fill="#3d9a68"/>
    <path d="M${e} ${t+24} C${e-16} ${t+18} ${e-14} ${t+36} ${e-1} ${t+34}" fill="#74c69d" ${v(1.6)}/>
    <path d="M${e} ${t+22} C${e+16} ${t+16} ${e+12} ${t+36} ${e+1} ${t+32}" fill="#52b788"/>
    <path d="M${e} ${t+18} C${e-10} ${t+8} ${e-8} ${t} ${e} ${t+6} C${e+8} ${t} ${e+10} ${t+8} ${e} ${t+18} Z" fill="${n}" ${v(1.8)}/>
    <path d="M${e+1} ${t+6} C${e+7} ${t+4} ${e+8} ${t+13} ${e+1} ${t+15} Z" fill="${s}"/>`}const g3=be({kind:"tulip-bed",name:"Tulip Bed",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`${we(70,56,86)}
    <path d="M10 56 H130 L120 82 H20 Z" fill="#f0d2b0" ${v()}/>
    <path d="M96 58 H126 L118 78 H92 Z" fill="#d4a373"/>
    <path d="M16 56 Q70 42 124 56 Q70 64 16 56 Z" fill="#c4a484" ${v(2.2)}/>
    ${ee("M22 60 h24")}
    ${xo(32,16,"#ff8fab","#e45d88")}
    ${xo(54,8,"#ffd166","#e0a83a")}
    ${xo(76,4,"#ff7096","#e04578")}
    ${xo(98,12,"#fff","#ffd0e0")}
    ${xo(118,18,"#c9a0dc","#b388d6")}`}),h3=be({kind:"birdbath",name:"Birdbath",cat:"decor",w:84,h:126,vb:"0 0 80 120",svg:`<defs>${hc("ydbathW","#f3fbff","#8ecae6")}</defs>
    ${we(40,28,114)}
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
    <circle cx="67" cy="23" r="1" fill="${Je}"/>
    <path d="M54 32 V40 M60 32 V40" fill="none" stroke="#c99366" stroke-width="1.4" stroke-linecap="round"/>`}),u3=be({kind:"lily-pond",name:"Lily Pond",cat:"decor",w:170,h:90,vb:"0 0 170 90",svg:`<defs>${hc("ydpondW","#eaf6ff","#5aa9e6")}</defs>
    ${we(85,70,84)}
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
    <circle cx="112" cy="40" r="2.4" fill="#ffd166"/>`});function Mo(e,t,n,s,o=10){return`<path d="M${e} ${t-o-8} V${t-o}" fill="none" ${v(2.2)}/>
    <rect x="${e-4}" y="${t-o-2}" width="8" height="5" rx="1" fill="#c99366" ${v(1.8)}/>
    <circle cx="${e}" cy="${t}" r="${o}" fill="${n}" ${v()}/>
    <path d="M${e+1} ${t-o+3} H${e+o-1} V${t+o-3} H${e+2} Z" fill="${s}"/>
    ${ee(`M${e-o+3} ${t-2} q2 -3 4 0`)}`}const m3=be({kind:"patio-lights",name:"Patio Lights",cat:"decor",w:190,h:70,vb:"0 0 180 70",wall:!0,svg:`<path d="M8 12 Q50 32 90 12 Q130 32 172 14" fill="none" ${v()}/>
    ${Mo(28,40,"#fff6c8","#f0c45c")}
    ${Mo(64,46,"#ffc2d4","#e45d88")}
    ${Mo(100,36,"#fff1c2","#f0c45c")}
    ${Mo(136,46,"#c9f1ff","#7eb4dc")}
    ${Mo(164,34,"#ffd0e8","#e888a8",8)}`}),y3=be({kind:"toadstool-light",name:"Toadstool Light",cat:"decor",w:70,h:84,vb:"0 0 80 96",svg:`<defs>${gc("ydtoadG","#ffe7a0",".9")}</defs>
    ${we(40,26,90)}
    <ellipse cx="40" cy="70" rx="18" ry="8" fill="url(#ydtoadG)"/>
    <path d="M32 58 H48 L52 84 H28 Z" fill="#fff7f8" ${v()}/>
    <path d="M42 60 H48 L50 82 H43 Z" fill="#f0d8cc"/>
    <path d="M6 58 Q40 8 74 58 Q40 74 6 58 Z" fill="#ff8fab" ${v()}/>
    <path d="M44 22 Q66 16 72 54 Q52 66 44 52 Z" fill="#e45d88"/>
    ${ee("M18 48 q16 -12 26 -2")}
    <circle cx="26" cy="48" r="5" fill="#fff" ${v(2)}/>
    <circle cx="44" cy="40" r="6" fill="#fff" ${v(2)}/>
    <circle cx="36" cy="56" r="3.5" fill="#fff" ${v(2)}/>
    <path d="M22 52 h6 M40 46 h8" fill="none" stroke="#ffd0e0" stroke-width="1.2" stroke-linecap="round"/>`}),w3=be({kind:"stepping-stones",name:"Stepping Stones",cat:"decor",w:160,h:64,vb:"0 0 160 70",svg:`${we(80,66,64)}
    <path d="M8 40 L24 28 L50 32 L54 50 L30 58 L10 52 Z" fill="#f7f4ef" ${v()}/>
    <path d="M34 36 L50 32 L54 50 L36 54 Z" fill="#d9d3cc"/>
    <path d="M56 44 L78 32 L108 36 L112 56 L80 64 L58 58 Z" fill="#f4f1ec" ${v()}/>
    <path d="M86 40 L108 36 L112 56 L90 58 Z" fill="#d4cdc4"/>
    <path d="M110 30 L128 20 L154 28 L150 48 L124 52 L108 42 Z" fill="#e7e2dc" ${v()}/>
    <path d="M132 26 L152 28 L148 46 L130 44 Z" fill="#d0c9c2"/>
    ${ee("M16 38 q8 -4 14 0")}
    ${st("M22 44 h12 M72 48 h16 M124 36 h12")}`}),b3=be({kind:"pinwheel",name:"Pinwheel",cat:"decor",w:56,h:90,vb:"0 0 70 100",holdable:!0,svg:`${we(35,16,96)}
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
    <circle cx="34" cy="40" r="1.8" fill="${Je}"/>`}),v3=be({kind:"rain-barrel",name:"Rain Barrel",cat:"decor",w:86,h:108,vb:"0 0 80 110",svg:`${we(40,30,104)}
    <path d="M22 30 C12 48 12 78 22 98 H58 C68 78 68 48 58 30 Z" fill="#8ecae6" ${v()}/>
    <path d="M46 34 C58 48 60 76 54 96 H58 C66 76 66 50 56 32 Z" fill="#5aa9c6"/>
    ${st("M28 40 v48 M36 36 v54 M44 38 v50")}
    ${ee("M24 42 v24")}
    <ellipse cx="40" cy="30" rx="20" ry="8" fill="#bde0fe" ${v()}/>
    <ellipse cx="46" cy="30" rx="10" ry="5" fill="#7eb4dc"/>
    <path d="M16 48 H64" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <path d="M14 74 H66" fill="none" stroke="#c99366" stroke-width="4" stroke-linecap="round"/>
    <rect x="56" y="78" width="14" height="7" rx="2" fill="#d7ecff" ${v(2)}/>
    <path d="M70 81 h6" fill="none" ${v(2)}/>
    <path d="M34 18 q6 -8 12 0" fill="none" stroke="#7eb4dc" stroke-width="2.2" stroke-linecap="round"/>`}),k3=be({kind:"butterfly-bush",name:"Butterfly Bush",cat:"plants",w:120,h:130,vb:"0 0 100 120",svg:`${we(50,40,114)}
    <ellipse cx="32" cy="86" rx="22" ry="18" fill="#95d5b2" ${v(2.2)}/>
    <ellipse cx="70" cy="84" rx="24" ry="20" fill="#3d9a68" ${v(2.2)}/>
    <ellipse cx="50" cy="78" rx="36" ry="28" fill="#74c69d" ${v()}/>
    <path d="M18 90 Q50 108 84 88 Q68 100 50 102 Q30 100 18 90 Z" fill="#3d9a68"/>
    ${ee("M24 68 q14 -8 26 2")}
    ${st("M28 80 q4 6 0 10 M46 72 q5 8 0 12 M66 78 q4 6 0 10")}
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
    <ellipse cx="18" cy="32" rx="2" ry="7" fill="${Je}"/>
    <path d="M16 26 Q12 18 10 14 M20 26 Q24 18 28 14" fill="none" stroke="${Je}" stroke-width="1.3" stroke-linecap="round"/>`}),_3=be({kind:"hedge-row",name:"Hedge Row",cat:"plants",w:190,h:96,vb:"0 0 180 96",svg:`${we(90,78,90)}
    <path d="M16 84 C28 70 40 62 52 66 C62 52 78 50 90 62 C102 50 118 52 128 66 C140 58 156 64 164 74 L164 86 L16 86 Z" fill="#2f7d52"/>
    <path d="M10 82 L10 60 C10 50 18 46 26 50 C32 34 46 32 54 48 C60 30 76 28 84 46 C92 28 108 28 116 46 C124 30 140 32 148 48 C156 36 166 42 170 54 L170 82 Z" fill="#74c69d" ${v()}/>
    <path d="M148 46 C160 38 170 50 170 70 L170 82 L140 82 L146 58 Z" fill="#52b788"/>
    <path d="M22 64 C40 54 58 58 70 50 C84 60 100 48 116 56 C128 48 146 56 158 64" fill="none" stroke="#95d5b2" stroke-width="6" stroke-linecap="round" opacity=".85"/>
    <path d="M14 68 C48 78 132 76 166 66 L168 82 L12 82 Z" fill="#3d9a68"/>
    ${st("M28 58 q3 5 0 8 M48 54 q3 6 0 9 M70 52 q3 6 1 9 M94 52 q3 6 0 10 M118 54 q3 6 0 9 M142 56 q3 5 0 8")}
    ${ee("M18 58 q10 -4 16 1")}
    ${ee("M58 42 q12 -4 16 2")}`}),$3=be({kind:"lemonade-cup",name:"Lemonade Cup",cat:"food",w:52,h:70,vb:"0 0 70 90",holdable:!0,svg:`${we(35,22,84)}
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
    ${ee("M24 38 v14")}`}),x3=be({kind:"picnic-table",name:"Picnic Table",cat:"furniture",w:180,h:110,vb:"0 0 160 100",svg:`${we(80,68,96)}
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
    ${st("M40 42 h50 M34 66 h70")}`}),M3=be({kind:"seesaw",name:"Seesaw",cat:"furniture",w:200,h:80,vb:"0 0 180 80",svg:`${we(90,74,76)}
    <path d="M78 58 H102 L96 74 H84 Z" fill="#f3d2aa" ${v()}/>
    <path d="M94 60 H100 L96 72 H92 Z" fill="#c99366"/>
    <rect x="10" y="40" width="160" height="12" rx="3" fill="#ffd166" ${v()} transform="rotate(-8 90 46)"/>
    <rect x="130" y="28" width="28" height="8" fill="#e0a83a"/>
    <rect x="16" y="34" width="28" height="10" rx="2" fill="#ff8fab" ${v(2)}/>
    <rect x="136" y="22" width="28" height="10" rx="2" fill="#8ecae6" ${v(2)}/>
    ${ee("M24 44 h40")}`}),L3=be({kind:"wagon",name:"Wagon",cat:"furniture",w:130,h:90,vb:"0 0 130 90",svg:`${we(64,50,86)}
    <circle cx="36" cy="74" r="12" fill="${Je}" ${v(2)}/><circle cx="36" cy="74" r="5" fill="#ffd166"/>
    <circle cx="96" cy="74" r="12" fill="${Je}" ${v(2)}/><circle cx="96" cy="74" r="5" fill="#ffd166"/>
    <path d="M22 40 H108 L100 68 H30 Z" fill="#e45d88" ${v()}/>
    <path d="M86 42 H106 L100 66 H84 Z" fill="#c93b68"/>
    <rect x="28" y="28" width="76" height="14" rx="3" fill="#ff8fab" ${v()}/>
    <path d="M108 36 H122 L118 58" fill="none" ${v(2.4)}/>
    ${ee("M32 46 h28")}
    ${st("M40 54 h40")}`}),E3=be({kind:"birdhouse",name:"Birdhouse",cat:"decor",w:70,h:120,vb:"0 0 80 130",svg:`${we(40,22,124)}
    <rect x="34" y="70" width="12" height="50" rx="2" fill="#d4a373" ${v()}/>
    <rect x="40" y="74" width="5" height="42" fill="#c99366"/>
    <path d="M12 62 L40 28 L68 62 Z" fill="#e45d88" ${v()}/>
    <path d="M40 32 L66 60 H52 Z" fill="#c93b68"/>
    <rect x="18" y="60" width="44" height="36" rx="3" fill="#f6e0c4" ${v()}/>
    <rect x="48" y="64" width="10" height="28" fill="#e7c49a"/>
    <circle cx="40" cy="76" r="7" fill="#5a3d5c"/>
    <rect x="36" y="86" width="14" height="4" rx="1" fill="#d4a373" ${v(1.6)}/>
    ${ee("M22 66 h12")}`}),C3=be({kind:"sprinkler",name:"Sprinkler",cat:"decor",w:80,h:70,vb:"0 0 100 80",svg:`${we(50,28,76)}
    <ellipse cx="50" cy="66" rx="22" ry="8" fill="#74c69d" ${v()}/>
    <rect x="44" y="40" width="12" height="26" rx="3" fill="#8ecae6" ${v()}/>
    <circle cx="50" cy="36" r="8" fill="#ffd166" ${v()}/>
    <path d="M50 28 C30 16 18 20 12 10" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 28 C70 14 84 18 90 8" fill="none" stroke="#8ecae6" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 26 C40 8 58 4 50 2" fill="none" stroke="#c9ecff" stroke-width="3" stroke-linecap="round"/>
    <circle cx="12" cy="10" r="2.2" fill="#c9ecff"/><circle cx="90" cy="8" r="2.2" fill="#c9ecff"/><circle cx="50" cy="2" r="2.2" fill="#fff"/>
    ${ee("M46 44 v10")}`}),z3=be({kind:"beach-ball",name:"Beach Ball",cat:"decor",w:70,h:70,vb:"0 0 80 80",svg:`${we(40,26,76)}
    <circle cx="40" cy="40" r="28" fill="#fff" ${v()}/>
    <path d="M40 12 A28 28 0 0 1 66 32 L40 40 Z" fill="#ff8fab"/>
    <path d="M66 48 A28 28 0 0 1 40 68 L40 40 Z" fill="#ffd166"/>
    <path d="M24 64 A28 28 0 0 1 14 36 L40 40 Z" fill="#8ecae6"/>
    <path d="M18 28 A28 28 0 0 1 40 12 L40 40 Z" fill="#b7e4c7"/>
    <circle cx="40" cy="40" r="5" fill="#fff" ${v(2)}/>
    ${ee("M28 24 q6 -4 10 2")}`}),S3=be({kind:"patio-umbrella",name:"Patio Umbrella",cat:"furniture",w:150,h:180,vb:"0 0 120 150",svg:`${we(60,36,144)}
    <path d="M10 58 Q60 18 110 58 L98 64 Q60 32 22 64 Z" fill="#ffb3c6" ${v()}/>
    <path d="M60 22 L108 56 L96 62 Z" fill="#e45d88"/>
    <path d="M28 40 Q44 30 60 36 Q76 28 96 42" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <rect x="56" y="58" width="8" height="78" rx="2" fill="#f3d2aa" ${v()}/>
    <rect x="60" y="62" width="3" height="70" fill="#d4a373"/>
    <rect x="40" y="128" width="40" height="8" rx="2" fill="#e7c49a" ${v(2)}/>
    ${ee("M24 50 q16 -8 24 0")}`}),P3=be({kind:"veggie-patch",name:"Vegetable Patch",cat:"plants",w:150,h:80,vb:"0 0 150 80",svg:`${we(75,62,76)}
    <rect x="8" y="28" width="134" height="44" rx="4" fill="#c99366" ${v()}/>
    <rect x="16" y="34" width="118" height="32" fill="#8d6e4c"/>
    <path d="M36 48 C36 36 48 34 48 46 C48 34 60 36 58 48 Z" fill="#74c69d" ${v(2)}/>
    <path d="M78 50 C78 38 90 36 90 48 C90 36 102 38 100 50 Z" fill="#52b788" ${v(2)}/>
    <path d="M112 52 L120 30 L128 52 Z" fill="#ff922b" ${v(2)}/>
    <path d="M118 32 Q124 22 130 28" fill="none" stroke="#2f7d52" stroke-width="2" stroke-linecap="round"/>
    ${ee("M18 36 h24")}`}),T3=be({kind:"hammock",name:"Hammock",cat:"furniture",w:190,h:110,vb:"0 0 170 100",svg:`${we(85,70,96)}
    <rect x="8" y="18" width="10" height="74" rx="2" fill="#d4a373" ${v()}/>
    <rect x="152" y="18" width="10" height="74" rx="2" fill="#c99366" ${v()}/>
    <path d="M18 28 Q85 78 152 28" fill="none" stroke="#5a3d5c" stroke-width="2"/>
    <path d="M18 36 Q85 88 152 36 L152 48 Q85 96 18 48 Z" fill="#8ecae6" ${v()}/>
    <path d="M120 40 Q140 62 150 44 L150 54 Q136 74 112 52 Z" fill="#5fb0d8"/>
    ${ee("M36 46 q24 10 30 4")}
    ${st("M40 58 q30 16 50 4")}`}),B3=be({kind:"garden-gnome",name:"Garden Gnome",cat:"decor",w:64,h:100,vb:"0 0 70 110",svg:`${we(35,22,104)}
    <path d="M18 78 H52 L48 100 H22 Z" fill="#3d7ec4" ${v()}/>
    <path d="M40 80 H50 L48 98 H42 Z" fill="#2c5f96"/>
    <circle cx="35" cy="62" r="16" fill="#f6d2b5" ${v()}/>
    <path d="M20 66 Q35 78 50 66 Q46 74 35 76 Q24 74 20 66 Z" fill="#fff"/>
    <circle cx="29" cy="60" r="2" fill="${Je}"/><circle cx="41" cy="60" r="2" fill="${Je}"/>
    <path d="M16 52 L35 18 L54 52 Z" fill="#e45d88" ${v()}/>
    <path d="M35 22 L52 50 H42 Z" fill="#c93b68"/>
    <ellipse cx="35" cy="52" rx="16" ry="4" fill="#ff8fab" ${v(2)}/>
    ${ee("M22 40 l8 -8")}`}),wi=[s3,o3,i3,a3,r3,l3,c3,d3,f3,g3,h3,u3,m3,y3,w3,b3,v3,k3,_3,$3,x3,M3,L3,E3,C3,z3,S3,P3,T3,B3];function R3(e,t){for(const n of wi)t[n.kind]||(e.push(n),t[n.kind]=n)}function Ur(e,t,n){return`<g>
    <ellipse cx="${e-22*n}" cy="${t}" rx="${26*n}" ry="${14*n}" fill="#fff"/>
    <ellipse cx="${e+18*n}" cy="${t-2*n}" rx="${30*n}" ry="${16*n}" fill="#fff"/>
    <ellipse cx="${e}" cy="${t+4*n}" rx="${34*n}" ry="${13*n}" fill="#fff"/>
  </g>`}function A3(e,t,n,s,o){const a=l=>`<rect x="${e-2}" y="${l}" width="${t-e+12+4}" height="8" rx="3" fill="#fff" ${v(2.2)}/><rect x="${(t-40).toFixed(1)}" y="${l+1}" width="30" height="6" rx="2" fill="#d5ead8"/>`;let r=a(n+26)+a(s-28);for(let l=e;l<=t;l+=o)r+=`<path d="M${l} ${n+12} L${l+12/2} ${n} L${l+12} ${n+12} V${s} H${l} Z" fill="#f7fff8" ${v(2.2)}/>`,r+=`<path d="M${(l+12*.58).toFixed(1)} ${n+10} H${l+12-1} V${s-4} H${(l+12*.58).toFixed(1)} Z" fill="#d5ead8"/>`,r+=`<path d="M${l+2} ${n+18} v22" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".75" fill="none"/>`;return r}function D3(e,t){const s=150+46*t,o=372-s;return`<g id="yardTree">
    <rect x="${e-14*t}" y="${s}" width="${28*t}" height="${o}" rx="${6*t}" fill="#e7b98a" ${v()}/>
    <rect x="${e+4*t}" y="${s+8*t}" width="${8*t}" height="${o-16*t}" fill="#c99366"/>
    ${st(`M${e-4*t} ${s+28*t} v${36*t}`)}
    ${ee(`M${e-8*t} ${s+16*t} v${22*t}`)}
    <ellipse cx="${e+8*t}" cy="${150+18*t}" rx="${78*t}" ry="${46*t}" fill="#2f7d52"/>
    <ellipse cx="${e-48*t}" cy="${150+10*t}" rx="${36*t}" ry="${30*t}" fill="#245e3e"/>
    <ellipse cx="${e-34*t}" cy="${150+16*t}" rx="${42*t}" ry="${34*t}" fill="#95d5b2" ${v(2.2)}/>
    <ellipse cx="${e}" cy="150" rx="${68*t}" ry="${50*t}" fill="#74c69d" ${v()}/>
    <ellipse cx="${e+40*t}" cy="${150+8*t}" rx="${40*t}" ry="${36*t}" fill="#3d9a68" ${v(2.2)}/>
    <ellipse cx="${e-8*t}" cy="${150-6*t}" rx="${28*t}" ry="${20*t}" fill="#b7e4c7" opacity=".95"/>
    ${st(`M${e-20*t} ${150+8*t} q${8*t} ${6*t} 0 ${12*t} M${e+10*t} ${150-4*t} q${8*t} ${6*t} 2 ${12*t} M${e+28*t} ${150+12*t} q${6*t} ${5*t} 0 ${10*t}`)}
    ${ee(`M${e-36*t} ${150-18*t} q${16*t} -8 ${28*t} 2`)}
  </g>`}function I3(){return`<svg class="yardWorld" viewBox="0 0 2400 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ydsky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6eb6e8"/>
        <stop offset=".48" stop-color="#c5e6fb"/>
        <stop offset="1" stop-color="#fff3df"/>
      </linearGradient>
      ${gc("ydsun","#ffe566",".55")}
    </defs>
    <rect width="2400" height="430" fill="url(#ydsky)"/>
    <circle id="ydSunGlow" cx="1180" cy="68" r="62" fill="url(#ydsun)"/>
    <circle id="ydSun" cx="1180" cy="68" r="30" fill="#ffe566"/>
    <circle cx="1170" cy="58" r="8" fill="#fff" opacity=".8"/>
    ${Ur(980,96,1.05)}${Ur(1320,78,.85)}${Ur(1500,120,.7)}
    <rect y="360" width="2400" height="240" fill="#c6ef9a"/>
    <rect y="360" width="2400" height="28" fill="#e7f8c8"/>
    <rect y="520" width="2400" height="80" fill="#9ed67a"/>
    <path d="M1040 470 q30 -12 16 -6 M1200 510 q28 -12 14 -4 M1360 548 q24 -10 12 -4" fill="none" stroke="#3d9a68" stroke-width="1.2" stroke-linecap="round" opacity=".22"/>
    ${A3(846,2118,258,372,24)}
    ${D3(1184,.8)}
    <path d="M840 120 H1076 L1054 152 H862 Z" fill="#ffb3c6" ${v()}/>
    <path d="M960 126 H1064 L1046 148 H976 Z" fill="#e45d88"/>
    ${ee("M876 132 h56")}
    <rect x="864" y="150" width="196" height="222" rx="4" fill="#fff6ea" ${v()}/>
    <rect x="1044" y="156" width="12" height="210" fill="#f0dcc4"/>
    ${st("M880 174 H1000 M880 202 H1000 M880 230 H990 M880 294 H1000 M880 334 H980")}
    <rect x="884" y="180" width="44" height="36" rx="4" fill="#c9ecff" ${v(2.2)}/>
    <rect x="912" y="184" width="12" height="28" fill="#8ecae6"/>
    <path d="M906 180 V216 M884 198 H928" fill="none" ${v(2.2)}/>
    ${ee("M890 188 h12")}
  </svg>`}function H3(e,t,n,s,o){const i=(600-t)/600*100,a=(n/2400*100).toFixed(3),r=(s/600*100).toFixed(3);return o==="right"?`right:${((2400-(e+n/2))/2400*100).toFixed(3)}%;bottom:${i.toFixed(3)}%;width:${a}%;height:${r}%`:`left:${((e-n/2)/2400*100).toFixed(3)}%;bottom:${i.toFixed(3)}%;width:${a}%;height:${r}%`}function O3(){return`<svg class="doorArt" viewBox="0 0 100 230">
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
  </svg>`}function W3(e){const t=e==="living"?Mf:Lf,n=e==="living"?"backyard":"living",s=e==="living"?"Backyard":"Back inside",o=e==="yard"?"right":"left";return`<button type="button" class="yardDoor" data-yard-go="${n}" aria-label="${s}" style="${H3(t.x,t.y,t.w,t.h,o)}">${O3()}<span class="yardHintLabel"><span>${s}</span></span></button>`}function uc(e,t){const n=e.replace(/[&<>]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[s]);return`<figure class="ysCard"><div class="ysArt">${t}</div><figcaption>${n}</figcaption></figure>`}function U3(){return`<div class="yardSheet" data-yard-sheet="1"><h1>Backyard pieces</h1><div class="ysGrid">${wi.map(t=>uc(t.name,dn(t))).join("")}</div></div>`}function V3(e,t){return uc(e,`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">${t}</svg>`)}function Q3(){const e=(r,l)=>we(r,l,96.4),t=`
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
    <rect x="16" y="84" width="7" height="10" rx="2" fill="${Je}"/>
    <rect x="77" y="84" width="7" height="10" rx="2" fill="${Je}"/>`,n=`
    <defs>${gc("a2lamp-glow","#ffd56a",".95")}</defs>
    ${e(50,22)}
    <path d="M34 8 L42 8 L37 40 L24 40 Z" fill="#fff6d4"/>
    <path d="M42 8 L50 8 L50 40 L37 40 Z" fill="#ffe08a"/>
    <path d="M50 8 L58 8 L63 40 L50 40 Z" fill="#f0c45c"/>
    <path d="M58 8 L66 8 L76 40 L63 40 Z" fill="#e0a83a"/>
    <path d="M24 40 L34 8 H66 L76 40 Z" fill="none" ${v()}/>
    <path d="M42 8 L37 40 M50 8 V40 M58 8 L63 40" fill="none" stroke="${Je}" stroke-width="2" stroke-linecap="round"/>
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
    <path d="M28 62 h14" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity=".65"/>`,o=Object.fromEntries(wi.map(r=>[r.kind,r])),i=(r,l,c)=>V3(r,l)+uc(o[c].name,dn(o[c]));return`<div class="yardSheet yardCompare" data-yard-compare="1"><h1>House style and the yard</h1><p class="ysNote">Sofa, lamp, and plant are the approved refresh. Swing, cart, and birdbath use the same light.</p><div class="ysPair">${i("Sofa",t,"yard-swing")+i("Lamp",n,"lemonade-cart")+i("Plant",s,"birdbath")}</div></div>`}const Bo="#5a3d5c",Q=`stroke="${Bo}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,Yi='<ellipse cx="50" cy="97" rx="36" ry="3" fill="#000" opacity=".12"/>',Ef=[{kind:"soaking-tub",name:"Soaking Tub",cat:"furniture",w:250,h:200,vb:"0 0 120 96",svg:`<ellipse cx="60" cy="92" rx="48" ry="3.2" fill="#000" opacity=".12"/><rect x="18" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${Q}/><rect x="92" y="78" width="10" height="12" rx="3" fill="#c9a0dc" ${Q}/><path d="M14 58 Q8 58 10 46 L22 28 H98 L110 46 Q112 58 106 58 Z" fill="#fff" ${Q}/><ellipse cx="60" cy="30" rx="44" ry="14" fill="#fff" ${Q}/><ellipse cx="60" cy="32" rx="34" ry="9" fill="#d7f3ff"/><path d="M28 34 Q60 42 92 34" fill="none" stroke="#b9e6f8" stroke-width="4"/><rect x="96" y="8" width="8" height="22" rx="4" fill="#f7d27a" ${Q}/><path d="M100 28 Q112 34 104 44" fill="none" ${Q}/><circle cx="104" cy="46" r="3.2" fill="#a8d4ea" ${Q}/><ellipse cx="46" cy="30" rx="8" ry="3" fill="#fff" opacity=".7"/>`},{kind:"bath-toilet",name:"Toilet",cat:"furniture",w:120,h:160,vb:"0 0 100 134",svg:`<ellipse cx="50" cy="128" rx="34" ry="4" fill="#000" opacity=".12"/><rect x="28" y="8" width="44" height="36" rx="8" fill="#fff" ${Q}/><rect x="34" y="16" width="32" height="16" rx="4" fill="#e7f6ff"/><rect x="46" y="42" width="8" height="10" fill="#f4f7fb" ${Q}/><ellipse cx="50" cy="78" rx="36" ry="22" fill="#fff" ${Q}/><ellipse cx="50" cy="74" rx="24" ry="14" fill="#d7f3ff" ${Q}/><path d="M18 70 Q50 58 82 70" fill="#fff" ${Q}/><rect x="40" y="96" width="20" height="24" rx="4" fill="#f7f4ef" ${Q}/>`},{kind:"sink-vanity",name:"Sink Vanity",cat:"furniture",w:210,h:190,vb:"0 0 110 100",svg:`<ellipse cx="55" cy="96" rx="46" ry="3.2" fill="#000" opacity=".12"/><rect x="10" y="48" width="90" height="42" rx="8" fill="#f6e2c4" ${Q}/><path d="M55 48 V90" ${Q}/><circle cx="28" cy="70" r="3" fill="${Bo}"/><circle cx="82" cy="70" r="3" fill="${Bo}"/><rect x="16" y="90" width="8" height="6" rx="2" fill="${Bo}"/><rect x="86" y="90" width="8" height="6" rx="2" fill="${Bo}"/><ellipse cx="55" cy="44" rx="40" ry="12" fill="#fff" ${Q}/><ellipse cx="55" cy="44" rx="26" ry="7" fill="#d7f3ff"/><rect x="50" y="10" width="10" height="28" rx="4" fill="#f7d27a" ${Q}/><path d="M55 36 Q70 40 66 48" fill="none" ${Q}/><rect x="8" y="40" width="94" height="8" rx="3" fill="#f3d2b5" ${Q}/>`},{kind:"bath-mirror",name:"Bath Mirror",cat:"decor",w:120,h:160,wall:!0,vb:"0 0 90 120",svg:`<path d="M45 8 C70 8 82 28 82 58 C82 92 68 112 45 112 C22 112 8 92 8 58 C8 28 20 8 45 8 Z" fill="#f7d27a" ${Q}/><ellipse cx="45" cy="60" rx="26" ry="40" fill="#d7f4ff" ${Q}/><path d="M30 36 l8 -8 M28 52 l18 -16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="38" y="2" width="14" height="8" rx="3" fill="#f28fa6" ${Q}/>`},{kind:"towel-bar",name:"Towel Bar",cat:"decor",w:170,h:116,wall:!0,vb:"0 0 150 102",svg:`<rect x="10" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${Q}/><rect x="130" y="8" width="10" height="28" rx="4" fill="#f3d2b5" ${Q}/><rect x="14" y="16" width="122" height="8" rx="4" fill="#c98d55" ${Q}/><path d="M26 24 H124 V70 Q75 100 26 70 Z" fill="#f7d7e4" ${Q}/><path d="M75 24 V88" stroke="#f28fa6" stroke-width="3"/><path d="M40 36 H110" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"bath-mat",name:"Bath Mat",cat:"decor",w:230,h:120,vb:"0 0 160 84",svg:`<ellipse cx="80" cy="78" rx="70" ry="5" fill="#000" opacity=".1"/><rect x="12" y="22" width="136" height="48" rx="18" fill="#f28fa6" ${Q}/><rect x="24" y="32" width="112" height="28" rx="12" fill="#f7d7e4"/><path d="M40 46 H120 M40 54 H120" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>`},{kind:"rubber-ducky",name:"Rubber Ducky",cat:"decor",w:80,svg:`${Yi}<ellipse cx="48" cy="68" rx="30" ry="26" fill="#f7d27a" ${Q}/><circle cx="68" cy="40" r="18" fill="#ffe9a8" ${Q}/><path d="M82 38 H98 Q102 44 92 48 H82 Z" fill="#f28fa6" ${Q}/><ellipse cx="36" cy="74" rx="12" ry="8" fill="#f3c15a"/>`},{kind:"shower-curtain",name:"Shower Curtain",cat:"decor",w:150,h:260,holdable:!1,vb:"0 0 90 156",svg:`<rect x="8" y="8" width="74" height="8" rx="3" fill="#c98d55" ${Q}/><circle cx="22" cy="16" r="3" fill="#f7d27a" ${Q}/><circle cx="40" cy="16" r="3" fill="#f7d27a" ${Q}/><circle cx="58" cy="16" r="3" fill="#f7d27a" ${Q}/><circle cx="72" cy="16" r="3" fill="#f7d27a" ${Q}/><path d="M12 18 Q8 80 16 146 H40 Q30 80 36 18 Z" fill="#d7f4ff" ${Q}/><path d="M36 18 Q34 80 46 146 H74 Q84 80 78 18 Z" fill="#f7d7e4" ${Q}/><path d="M24 40 Q18 70 26 100 M58 40 Q66 70 58 110" fill="none" stroke="#fff" stroke-width="3" opacity=".65"/>`},{kind:"soap-dish",name:"Soap Dish",cat:"decor",w:90,svg:`${Yi}<ellipse cx="50" cy="78" rx="34" ry="12" fill="#fff" ${Q}/><ellipse cx="50" cy="74" rx="26" ry="7" fill="#e7f6ff"/><rect x="28" y="48" width="44" height="22" rx="8" fill="#f7d7e4" ${Q}/><path d="M36 56 H64" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`},{kind:"laundry-hamper",name:"Laundry Hamper",cat:"furniture",w:140,h:160,vb:"0 0 100 114",svg:`<ellipse cx="50" cy="108" rx="36" ry="4" fill="#000" opacity=".12"/><path d="M18 40 H82 L74 100 H26 Z" fill="#b9a0dc" ${Q}/><path d="M24 58 H76 M26 74 H74" stroke="#fff" stroke-width="3" opacity=".55"/><ellipse cx="50" cy="40" rx="34" ry="10" fill="#c9b6e8" ${Q}/><path d="M22 36 Q50 18 78 36" fill="#f7d7e4" ${Q}/><path d="M40 28 Q50 40 62 26" fill="none" stroke="#f28fa6" stroke-width="4" stroke-linecap="round"/>`},{kind:"bath-stool",name:"Bath Stool",cat:"furniture",w:110,svg:`${Yi}<ellipse cx="50" cy="58" rx="36" ry="12" fill="#f6e2c4" ${Q}/><ellipse cx="50" cy="54" rx="28" ry="7" fill="#fff6ea"/><path d="M22 64 L16 92 M78 64 L84 92 M36 66 L34 92 M64 66 L66 92" ${Q}/><path d="M18 90 H34 M66 90 H84" ${Q}/>`}],q3=[{kind:"floor-cushion",name:"Floor Cushion",cat:"decor",w:150,h:136,vb:"0 0 130 118",svg:`<ellipse cx="65" cy="112" rx="50" ry="4" fill="#000" opacity=".12"/><ellipse cx="65" cy="68" rx="52" ry="40" fill="#f28fa6" ${Q}/><ellipse cx="65" cy="58" rx="40" ry="24" fill="#f7d7e4"/><path d="M38 64 Q65 82 92 64" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>`},{kind:"story-pillow",name:"Story Pillow",cat:"decor",w:120,h:100,vb:"0 0 110 92",svg:`<ellipse cx="55" cy="86" rx="40" ry="4" fill="#000" opacity=".12"/><rect x="14" y="28" width="82" height="52" rx="18" fill="#a8d4ea" ${Q}/><path d="M55 40 l6 12 13 2 -10 8 2 13 -11 -7 -11 7 2 -13 -10 -8 13 -2 z" fill="#f7d27a" ${Q}/>`},{kind:"berry-basket",name:"Berry Basket",cat:"food",w:100,svg:`${Yi}<path d="M22 48 H78 L70 88 H30 Z" fill="#f3d2b5" ${Q}/><path d="M30 58 H70 M32 70 H68 M34 80 H66" ${Q}/><circle cx="40" cy="40" r="10" fill="#f28fa6" ${Q}/><circle cx="58" cy="36" r="10" fill="#c94b6a" ${Q}/><circle cx="70" cy="48" r="8" fill="#b9a0dc" ${Q}/><path d="M34 36 Q40 28 46 36" fill="none" stroke="#7dce8a" stroke-width="3"/>`},{kind:"ribbon-tray",name:"Ribbon Tray",cat:"decor",w:140,h:90,vb:"0 0 140 90",svg:`<ellipse cx="70" cy="84" rx="52" ry="4" fill="#000" opacity=".12"/><rect x="16" y="40" width="108" height="36" rx="12" fill="#fff" ${Q}/><rect x="22" y="46" width="96" height="22" rx="8" fill="#f7d7e4"/><rect x="36" y="28" width="16" height="22" rx="5" fill="#a8d4ea" ${Q}/><rect x="58" y="22" width="14" height="28" rx="5" fill="#f7d27a" ${Q}/><path d="M96 24 Q110 16 112 32 Q100 28 104 40 Q92 34 96 24 Z" fill="#f28fa6" ${Q}/>`}],ze="#5a3d5c",L=`stroke="${ze}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,qs=(e,t,n)=>`<circle cx="${e}" cy="${n}" r="3" fill="${ze}"/><circle cx="${t}" cy="${n}" r="3" fill="${ze}"/><circle cx="${e+1}" cy="${n-1}" r="1" fill="#fff"/><circle cx="${t+1}" cy="${n-1}" r="1" fill="#fff"/>`,Di=(e,t,n)=>`<ellipse cx="${e}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/><ellipse cx="${t}" cy="${n}" rx="4" ry="2.5" fill="#ff9bb5" opacity=".7"/>`,Ee='<ellipse cx="50" cy="97" rx="38" ry="3" fill="#000" opacity=".12"/>',hn=[{kind:"sofa",name:"Sofa",cat:"furniture",w:260,svg:`${Ee}<rect x="6" y="40" width="88" height="40" rx="16" fill="#ff8fab" ${L}/><rect x="16" y="28" width="68" height="30" rx="12" fill="#ffb3c6" ${L}/><rect x="2" y="48" width="18" height="38" rx="9" fill="#ff7096" ${L}/><rect x="80" y="48" width="18" height="38" rx="9" fill="#ff7096" ${L}/><rect x="20" y="60" width="60" height="18" rx="8" fill="#ffc2d1" ${L}/><rect x="14" y="86" width="6" height="10" rx="2" fill="${ze}"/><rect x="80" y="86" width="6" height="10" rx="2" fill="${ze}"/>`},{kind:"armchair",name:"Armchair",cat:"furniture",w:150,svg:`${Ee}<rect x="18" y="20" width="64" height="50" rx="20" fill="#8ecae6" ${L}/><rect x="6" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${L}/><rect x="72" y="46" width="22" height="40" rx="10" fill="#5fb0d8" ${L}/><rect x="24" y="58" width="52" height="24" rx="10" fill="#b8e0f2" ${L}/><rect x="20" y="86" width="6" height="10" rx="2" fill="${ze}"/><rect x="74" y="86" width="6" height="10" rx="2" fill="${ze}"/>`},{kind:"bed",name:"Bed",cat:"furniture",w:300,svg:`${Ee}<rect x="4" y="22" width="18" height="72" rx="8" fill="#c99366" ${L}/><rect x="80" y="44" width="16" height="50" rx="7" fill="#c99366" ${L}/><rect x="14" y="54" width="76" height="30" rx="10" fill="#fff" ${L}/><rect x="40" y="50" width="54" height="36" rx="12" fill="#a78bfa" ${L}/><circle cx="56" cy="64" r="3" fill="#fff"/><circle cx="72" cy="72" r="3" fill="#fff"/><circle cx="84" cy="60" r="3" fill="#fff"/><rect x="18" y="42" width="24" height="16" rx="8" fill="#fde2e4" ${L}/>`},{kind:"table",name:"Table",cat:"furniture",w:200,svg:`${Ee}<rect x="4" y="30" width="92" height="14" rx="7" fill="#f4a261" ${L}/><rect x="14" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${L}/><rect x="76" y="42" width="10" height="54" rx="5" fill="#e07a3f" ${L}/><path d="M8 40 h84" stroke="#fff" stroke-width="2" opacity=".5"/>`},{kind:"chair",name:"Chair",cat:"furniture",w:100,svg:`${Ee}<rect x="22" y="6" width="56" height="50" rx="14" fill="#90e0a8" ${L}/><rect x="16" y="52" width="68" height="14" rx="7" fill="#5cc985" ${L}/><rect x="22" y="64" width="9" height="32" rx="4" fill="#5cc985" ${L}/><rect x="69" y="64" width="9" height="32" rx="4" fill="#5cc985" ${L}/><circle cx="50" cy="30" r="8" fill="#fff" opacity=".6"/>`},{kind:"lamp",name:"Lamp",cat:"furniture",w:90,svg:`${Ee}<path d="M24 40 L34 6 H66 L76 40 Z" fill="#ffd166" ${L}/><rect x="46" y="40" width="8" height="48" rx="4" fill="#c9a0dc" ${L}/><ellipse cx="50" cy="92" rx="22" ry="6" fill="#b388d6" ${L}/><circle cx="44" cy="20" r="3" fill="#fff" opacity=".8"/>`},{kind:"fridge",name:"Fridge",cat:"furniture",w:150,svg:`${Ee}<rect x="16" y="4" width="68" height="90" rx="14" fill="#bde0fe" ${L}/><path d="M16 38 H84" ${L}/><rect x="70" y="14" width="5" height="16" rx="2" fill="${ze}"/><rect x="70" y="46" width="5" height="22" rx="2" fill="${ze}"/><circle cx="32" cy="22" r="5" fill="#ff8fab" ${L}/><rect x="28" y="54" width="12" height="12" rx="3" fill="#ffd166" ${L}/>`},{kind:"stove",name:"Stove",cat:"furniture",w:170,svg:`${Ee}<rect x="8" y="26" width="84" height="68" rx="12" fill="#ffadad" ${L}/><rect x="8" y="18" width="84" height="14" rx="6" fill="#ffd6a5" ${L}/><rect x="20" y="46" width="60" height="36" rx="8" fill="#5a3d5c" opacity=".85"/><rect x="26" y="52" width="48" height="8" rx="4" fill="#fff" opacity=".25"/><circle cx="22" cy="38" r="3" fill="${ze}"/><circle cx="36" cy="38" r="3" fill="${ze}"/><circle cx="78" cy="38" r="3" fill="${ze}"/>`},{kind:"bookshelf",name:"Shelf",cat:"furniture",w:170,svg:`${Ee}<rect x="10" y="4" width="80" height="90" rx="10" fill="#d4a373" ${L}/><path d="M10 34 H90 M10 64 H90" ${L}/><rect x="18" y="12" width="8" height="22" rx="2" fill="#ff8fab" ${L}/><rect x="28" y="16" width="8" height="18" rx="2" fill="#8ecae6" ${L}/><rect x="38" y="12" width="8" height="22" rx="2" fill="#ffd166" ${L}/><rect x="60" y="42" width="8" height="22" rx="2" fill="#90e0a8" ${L}/><rect x="70" y="46" width="8" height="18" rx="2" fill="#c9a0dc" ${L}/><circle cx="34" cy="80" r="8" fill="#ffadad" ${L}/>`},{kind:"tub",name:"Bathtub",cat:"furniture",w:240,svg:`${Ee}<circle cx="30" cy="40" r="7" fill="#bde0fe" ${L}/><circle cx="44" cy="34" r="9" fill="#e0f2ff" ${L}/><circle cx="60" cy="40" r="7" fill="#bde0fe" ${L}/><path d="M4 48 H96 V62 Q96 90 70 90 H30 Q4 90 4 62 Z" fill="#fff" ${L}/><rect x="2" y="44" width="96" height="10" rx="5" fill="#ffc8dd" ${L}/><rect x="22" y="88" width="8" height="8" rx="2" fill="${ze}"/><rect x="70" y="88" width="8" height="8" rx="2" fill="${ze}"/>`},{kind:"rug",name:"Rug",cat:"decor",w:320,svg:`<ellipse cx="50" cy="82" rx="48" ry="14" fill="#ffc8dd" ${L}/><ellipse cx="50" cy="82" rx="34" ry="9" fill="#bde0fe" ${L}/><ellipse cx="50" cy="82" rx="18" ry="4.5" fill="#fff" ${L}/>`},{kind:"picture",name:"Picture",cat:"decor",w:130,wall:!0,svg:`<rect x="10" y="20" width="80" height="64" rx="8" fill="#ffd166" ${L}/><rect x="18" y="28" width="64" height="48" rx="4" fill="#bde0fe"/><circle cx="66" cy="40" r="7" fill="#fff3b0"/><path d="M18 76 L38 50 L52 64 L62 54 L82 76 Z" fill="#90e0a8" ${L}/>`},{kind:"window",name:"Window",cat:"decor",w:180,wall:!0,svg:`<rect class="winGlass" x="12" y="8" width="76" height="76" rx="38" fill="#a2d2ff" ${L}/><g class="winDay"><circle cx="34" cy="32" r="8" fill="#fff" opacity=".7"/></g><g class="winNight"><circle cx="62" cy="28" r="7" fill="#fff6d8"/><circle cx="28" cy="24" r="1.4" fill="#fff"/><circle cx="44" cy="20" r="1.1" fill="#fff"/><circle cx="70" cy="42" r="1.2" fill="#fff"/><circle cx="36" cy="46" r="1" fill="#fff"/></g><path d="M50 8 V84 M12 50 H88" ${L}/><path d="M4 8 Q20 40 10 90 M96 8 Q80 40 90 90" stroke="#ff8fab" stroke-width="9" fill="none" stroke-linecap="round"/>`},{kind:"clock",name:"Clock",cat:"decor",w:90,wall:!0,svg:`<circle cx="50" cy="50" r="38" fill="#fff" ${L}/><circle cx="50" cy="50" r="30" fill="#fff3b0"/><path d="M50 50 V28 M50 50 L64 58" ${L}/><circle cx="50" cy="50" r="3" fill="${ze}"/>${Di(30,70,66)}`},{kind:"stars",name:"Stars",cat:"decor",w:140,wall:!0,svg:`<path d="M30 20 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2z" fill="#ffd166" ${L}/><path d="M70 40 l4 8 9 1 -6 6 1 9 -8 -4 -8 4 1 -9 -6 -6 9 -1z" fill="#ffadad" ${L}/><path d="M40 66 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1z" fill="#a2d2ff" ${L}/>`},{kind:"balloon",name:"Balloons",cat:"decor",w:110,svg:`<path d="M38 52 Q44 74 50 96 M64 46 Q58 72 50 96" stroke="${ze}" stroke-width="2" fill="none"/><ellipse cx="36" cy="32" rx="18" ry="22" fill="#ff8fab" ${L}/><ellipse cx="66" cy="28" rx="18" ry="22" fill="#a2d2ff" ${L}/><ellipse cx="30" cy="24" rx="4" ry="7" fill="#fff" opacity=".6"/>`},{kind:"teddy",name:"Teddy",cat:"decor",w:100,svg:`${Ee}<circle cx="26" cy="22" r="10" fill="#d4a373" ${L}/><circle cx="74" cy="22" r="10" fill="#d4a373" ${L}/><ellipse cx="50" cy="72" rx="28" ry="24" fill="#d4a373" ${L}/><circle cx="50" cy="38" r="26" fill="#e6b88a" ${L}/>${qs(40,60,36)}<ellipse cx="50" cy="48" rx="8" ry="6" fill="#fff3e0"/><circle cx="50" cy="46" r="2.5" fill="${ze}"/>${Di(32,68,46)}`},{kind:"ball",name:"Ball",cat:"decor",w:70,svg:`${Ee}<circle cx="50" cy="58" r="36" fill="#ffd166" ${L}/><path d="M18 46 Q50 66 82 46 M26 82 Q50 60 74 82" stroke="#ff7096" stroke-width="7" fill="none"/>`},{kind:"tv",name:"TV",cat:"decor",w:170,svg:`${Ee}<rect x="6" y="14" width="88" height="62" rx="14" fill="#c9a0dc" ${L}/><rect x="16" y="22" width="68" height="46" rx="8" fill="#a2d2ff"/><path d="M30 6 L44 14 M70 6 L56 14" ${L}/><rect x="36" y="78" width="28" height="16" rx="4" fill="#b388d6" ${L}/>${qs(42,58,42)}<path d="M44 52 q6 5 12 0" ${L} fill="none"/>`},{kind:"plant",name:"Plant",cat:"plants",w:110,svg:`${Ee}<ellipse cx="34" cy="38" rx="12" ry="26" fill="#74c69d" ${L} transform="rotate(-25 34 38)"/><ellipse cx="66" cy="38" rx="12" ry="26" fill="#52b788" ${L} transform="rotate(25 66 38)"/><ellipse cx="50" cy="30" rx="12" ry="28" fill="#95d5b2" ${L}/><path d="M24 62 H76 L70 94 H30 Z" fill="#ff9f68" ${L}/><rect x="20" y="58" width="60" height="10" rx="5" fill="#ffb385" ${L}/>`},{kind:"cactus",name:"Cactus",cat:"plants",w:80,svg:`${Ee}<rect x="36" y="12" width="28" height="64" rx="14" fill="#80ed99" ${L}/><path d="M36 50 H24 a8 8 0 0 1 -8 -8 V34" fill="none" stroke="${ze}" stroke-width="3.5"/><rect x="12" y="26" width="12" height="22" rx="6" fill="#80ed99" ${L}/><circle cx="50" cy="12" r="6" fill="#ff8fab" ${L}/>${qs(44,56,40)}<path d="M28 74 H72 L66 96 H34 Z" fill="#c9a0dc" ${L}/>`},{kind:"flowers",name:"Flowers",cat:"plants",w:90,svg:`${Ee}<path d="M50 70 V30 M50 60 Q30 50 30 30 M50 60 Q70 50 70 30" stroke="#52b788" stroke-width="4" fill="none"/><circle cx="50" cy="26" r="10" fill="#ff8fab" ${L}/><circle cx="30" cy="28" r="9" fill="#ffd166" ${L}/><circle cx="70" cy="28" r="9" fill="#a2d2ff" ${L}/><circle cx="50" cy="26" r="3" fill="#fff"/><path d="M32 66 H68 L62 96 H38 Z" fill="#a2d2ff" ${L}/>`},{kind:"tree",name:"Mini Tree",cat:"plants",w:140,svg:`${Ee}<rect x="44" y="54" width="12" height="30" rx="4" fill="#b07d54" ${L}/><circle cx="50" cy="36" r="30" fill="#52b788" ${L}/><circle cx="38" cy="30" r="5" fill="#ff8fab"/><circle cx="62" cy="40" r="5" fill="#ff8fab"/><circle cx="52" cy="22" r="5" fill="#ff8fab"/><path d="M28 80 H72 L66 96 H34 Z" fill="#ffd166" ${L}/>`},{kind:"cake",name:"Cake",cat:"food",w:100,svg:`<rect x="16" y="50" width="68" height="40" rx="10" fill="#ffc8dd" ${L}/><path d="M16 58 q8 10 17 0 q8 10 17 0 q8 10 17 0 q8 10 17 0" fill="#fff" ${L}/><rect x="46" y="28" width="8" height="22" rx="3" fill="#a2d2ff" ${L}/><path d="M50 14 q6 8 0 12 q-6 -4 0 -12" fill="#ffd166" ${L}/><ellipse cx="50" cy="92" rx="40" ry="5" fill="#fff" ${L}/>`},{kind:"apple",name:"Apple",cat:"food",w:60,svg:`<path d="M50 30 C20 18 8 50 22 74 C32 92 44 90 50 86 C56 90 68 92 78 74 C92 50 80 18 50 30 Z" fill="#ff6b6b" ${L}/><path d="M50 30 Q52 16 58 10" ${L} fill="none"/><ellipse cx="64" cy="18" rx="9" ry="5" fill="#80ed99" ${L} transform="rotate(-20 64 18)"/><ellipse cx="34" cy="46" rx="5" ry="9" fill="#fff" opacity=".5"/>`},{kind:"donut",name:"Donut",cat:"food",w:70,svg:`<circle cx="50" cy="58" r="36" fill="#e9c46a" ${L}/><path d="M18 52 Q20 26 50 24 Q80 26 82 52 Q76 62 66 56 Q56 66 46 58 Q34 66 24 58 Z" fill="#ff8fab" ${L}/><circle cx="50" cy="52" r="10" fill="#fff" ${L}/><rect x="30" y="36" width="6" height="3" rx="1.5" fill="#a2d2ff" transform="rotate(30 33 37)"/><rect x="64" y="38" width="6" height="3" rx="1.5" fill="#ffd166"/><rect x="56" y="30" width="6" height="3" rx="1.5" fill="#80ed99" transform="rotate(-30 59 31)"/>`},{kind:"pizza",name:"Pizza",cat:"food",w:80,svg:`<path d="M10 20 Q50 6 90 20 L50 94 Z" fill="#ffd166" ${L}/><path d="M10 20 Q50 6 90 20 L86 28 Q50 16 14 28 Z" fill="#e9a96a" ${L}/><circle cx="42" cy="38" r="7" fill="#ff6b6b" ${L}/><circle cx="62" cy="44" r="6" fill="#ff6b6b" ${L}/><circle cx="50" cy="62" r="6" fill="#ff6b6b" ${L}/>`},{kind:"juice",name:"Juice",cat:"food",w:55,svg:`<path d="M24 26 H76 L70 92 H30 Z" fill="#fff" ${L}/><path d="M27 44 H73 L70 92 H30 Z" fill="#ffb347"/><path d="M24 26 H76 L70 92 H30 Z" fill="none" ${L}/><path d="M58 30 L66 4" stroke="#ff8fab" stroke-width="6" stroke-linecap="round"/><circle cx="40" cy="60" r="4" fill="#fff" opacity=".6"/>`},{kind:"cat",name:"Toy cat",cat:"pets",w:110,svg:`${Ee}<path d="M78 80 Q98 70 90 50" stroke="#ffb347" stroke-width="8" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="76" rx="30" ry="20" fill="#ffb347" ${L}/><path d="M22 30 L26 8 L40 22 M78 30 L74 8 L60 22" fill="#ffb347" ${L}/><circle cx="50" cy="42" r="28" fill="#ffc46b" ${L}/>${qs(40,60,40)}<path d="M46 50 q4 4 8 0" ${L} fill="none"/>${Di(32,68,50)}`},{kind:"dog",name:"Puppy",cat:"pets",w:120,svg:`${Ee}<ellipse cx="56" cy="76" rx="30" ry="20" fill="#f5ebe0" ${L}/><circle cx="50" cy="42" r="28" fill="#fff" ${L}/><ellipse cx="22" cy="44" rx="10" ry="18" fill="#b07d54" ${L}/><ellipse cx="78" cy="44" rx="10" ry="18" fill="#b07d54" ${L}/><circle cx="60" cy="34" r="8" fill="#e6b88a" opacity=".7"/>${qs(40,60,40)}<ellipse cx="50" cy="52" rx="5" ry="4" fill="${ze}"/><path d="M50 56 v6" ${L}/>`},{kind:"bunny",name:"Bunny",cat:"pets",w:90,svg:`${Ee}<ellipse cx="36" cy="22" rx="8" ry="20" fill="#fff" ${L}/><ellipse cx="64" cy="22" rx="8" ry="20" fill="#fff" ${L}/><ellipse cx="36" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="64" cy="24" rx="3" ry="12" fill="#ffc8dd"/><ellipse cx="50" cy="76" rx="28" ry="20" fill="#fff" ${L}/><circle cx="50" cy="52" r="22" fill="#fff" ${L}/>${qs(42,58,50)}<path d="M47 58 l3 3 3 -3" ${L} fill="none"/>${Di(36,64,58)}`},{kind:"fish",name:"Fish Bowl",cat:"pets",w:100,svg:`${Ee}<circle cx="50" cy="54" r="40" fill="#cdeffd" ${L}/><path d="M14 46 H86" stroke="#8ecae6" stroke-width="3"/><path d="M60 64 l14 -8 v16 z" fill="#ff9f68" ${L}/><ellipse cx="46" cy="64" rx="16" ry="11" fill="#ffb347" ${L}/><circle cx="40" cy="62" r="2.5" fill="${ze}"/><circle cx="32" cy="38" r="3" fill="#fff" opacity=".8"/><rect x="24" y="10" width="52" height="8" rx="4" fill="#cdeffd" ${L}/>`},{kind:"kennel",name:"Dog Kennel",cat:"pets",w:210,h:175,holdable:!1,vb:"0 0 120 100",svg:`<ellipse cx="60" cy="97" rx="48" ry="3.2" fill="#000" opacity=".12"/><path d="M14 50 L60 12 L106 50 Z" fill="#ff8fab" ${L}/><path d="M28 46 L60 22 L92 46 Z" fill="#ffd6e4"/><rect x="20" y="46" width="80" height="50" rx="10" fill="#fff6ea" ${L}/><path d="M20 56 H100" stroke="#ffc2d4" stroke-width="7"/><path d="M34 96 V58 Q60 36 86 58 V96 Z" fill="#f3e4ff" ${L}/><path d="M40 96 V64 Q60 46 80 64 V96 Z" fill="#ffe8c7"/><circle cx="86" cy="64" r="8" fill="#bde0fe" ${L}/><circle cx="84" cy="62" r="2.2" fill="#fff" opacity=".9"/><path d="M28 62 l2.4 2.4 2.4-2.4 2.4 2.4 2.4-2.4-2.4-2.4-2.4 2.4z" fill="#ff8fab" ${L}/><circle cx="30" cy="90" r="3.2" fill="#fff" ${L}/><rect x="32" y="88.4" width="14" height="3.4" rx="1.7" fill="#fff" ${L}/><circle cx="48" cy="90" r="3.2" fill="#fff" ${L}/>`},{kind:"cat-tower",name:"Cat Tower",cat:"pets",w:150,h:225,holdable:!1,vb:"0 0 100 150",svg:`<ellipse cx="50" cy="146" rx="36" ry="3.4" fill="#000" opacity=".12"/><rect x="44" y="30" width="12" height="104" rx="6" fill="#c9a0dc" ${L}/><ellipse cx="50" cy="136" rx="34" ry="10" fill="#ffc8dd" ${L}/><ellipse cx="50" cy="132" rx="26" ry="6" fill="#fff6ea"/><ellipse cx="50" cy="102" rx="30" ry="8" fill="#bde0fe" ${L}/><ellipse cx="50" cy="98" rx="22" ry="4" fill="#fff" opacity=".8"/><ellipse cx="50" cy="64" rx="28" ry="8" fill="#ffd166" ${L}/><ellipse cx="50" cy="60" rx="20" ry="4" fill="#fff6d0"/><circle cx="50" cy="22" r="8" fill="#ff8fab" ${L}/><circle cx="47" cy="19" r="2.2" fill="#fff" opacity=".75"/><g class="dangle"><circle cx="22" cy="126" r="8" fill="#ffb3c6" ${L}/><path d="M22 126 q12 5 7 16" fill="none" stroke="#ff8fab" stroke-width="3.2" stroke-linecap="round"/></g><circle cx="80" cy="92" r="3.4" fill="#ffd166" ${L}/>`},{kind:"vanity",name:"Vanity",cat:"furniture",w:230,svg:`${Ee}<ellipse cx="50" cy="26" rx="24" ry="22" fill="#fff" ${L}/><ellipse cx="50" cy="26" rx="18" ry="16" fill="#cdeffd"/><path d="M38 18 l6 -6 M42 26 l10 -10" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="12" r="3" fill="#ffd166" ${L}/><circle cx="74" cy="12" r="3" fill="#ffd166" ${L}/><rect x="6" y="48" width="88" height="14" rx="7" fill="#ffc8dd" ${L}/><rect x="10" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${L}/><rect x="62" y="60" width="28" height="30" rx="6" fill="#ffe0ec" ${L}/><circle cx="24" cy="75" r="3" fill="${ze}"/><circle cx="76" cy="75" r="3" fill="${ze}"/><rect x="12" y="90" width="6" height="7" rx="2" fill="${ze}"/><rect x="82" y="90" width="6" height="7" rx="2" fill="${ze}"/>`},{kind:"stool",name:"Vanity Stool",cat:"furniture",w:90,svg:`${Ee}<ellipse cx="50" cy="48" rx="34" ry="14" fill="#c9a0dc" ${L}/><ellipse cx="50" cy="44" rx="28" ry="9" fill="#e4ccf2"/><path d="M28 58 L22 94 M72 58 L78 94 M50 62 V94" ${L}/><ellipse cx="50" cy="78" rx="22" ry="4" fill="none" ${L}/>`},{kind:"perfume",name:"Perfume",cat:"decor",w:50,svg:`<rect x="40" y="8" width="20" height="14" rx="5" fill="#ffd166" ${L}/><rect x="46" y="20" width="8" height="10" fill="#fff" ${L}/><path d="M20 50 Q20 30 50 30 Q80 30 80 50 V80 Q80 94 66 94 H34 Q20 94 20 80 Z" fill="#ff8fab" ${L}/><ellipse cx="36" cy="52" rx="5" ry="10" fill="#fff" opacity=".6"/><path d="M50 56 l4 8 8 1 -6 6 2 8 -8 -4 -8 4 2 -8 -6 -6 8 -1z" fill="#fff" opacity=".8"/>`},{kind:"polish",name:"Nail Polish",cat:"decor",w:40,svg:`<rect x="38" y="4" width="24" height="40" rx="8" fill="${ze}"/><path d="M24 54 Q24 42 36 42 H64 Q76 42 76 54 V84 Q76 96 64 96 H36 Q24 96 24 84 Z" fill="#b388d6" ${L}/><ellipse cx="38" cy="62" rx="5" ry="12" fill="#fff" opacity=".55"/>`},{kind:"hairdryer",name:"Hair Dryer",cat:"decor",w:90,svg:`<path d="M60 52 L70 92 Q70 96 64 96 H58 Q52 96 52 90 L46 56 Z" fill="#a2d2ff" ${L}/><rect x="6" y="20" width="62" height="40" rx="20" fill="#bde0fe" ${L}/><ellipse cx="82" cy="40" rx="12" ry="20" fill="#ffc8dd" ${L}/><ellipse cx="82" cy="40" rx="6" ry="11" fill="#fff" ${L}/><circle cx="24" cy="40" r="7" fill="#fff" opacity=".7"/>`},{kind:"mirror",name:"Mirror",cat:"decor",w:120,wall:!0,svg:`<path d="M50 6 C74 6 88 24 88 50 C88 76 72 94 50 94 C28 94 12 76 12 50 C12 24 26 6 50 6 Z" fill="#ffd166" ${L}/><ellipse cx="50" cy="50" rx="30" ry="36" fill="#e0f4ff" ${L}/><path d="M36 34 l10 -10 M36 46 l20 -20" stroke="#fff" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="6" r="6" fill="#ff8fab" ${L}/>`}],es={sofa:["living"],armchair:["living"],lamp:["living","bedroom"],tv:["living"],rug:["living","bedroom"],picture:["living","bedroom"],bookshelf:["living","bedroom"],bed:["bedroom"],teddy:["bedroom"],stars:["bedroom"],tub:["bedroom"],balloon:["any"],clock:["any"],window:["any"],ball:["any"],vanity:["salon"],stool:["salon"],perfume:["salon"],polish:["salon"],hairdryer:["salon"],mirror:["salon","bedroom"],fridge:["kitchen"],stove:["kitchen"],table:["kitchen","living"],chair:["kitchen","living"]};for(const e of xf)es[e.kind]=["nursery"];for(const e of wi)es[e.kind]=["backyard"];for(const e of Ef)es[e.kind]=["bathroom"];es["floor-cushion"]=["living"];es["story-pillow"]=["bedroom"];es["berry-basket"]=["kitchen"];es["ribbon-tray"]=["salon"];hn.push(...xf,...wi,...Ef,...q3);for(const e of hn)e.rooms=es[e.kind]??(["food"].includes(e.cat)?["kitchen"]:["any"]);const Z3=new Set(["rug","tv","tree"]);for(const e of hn)e.holdable??=!e.wall&&e.cat!=="furniture"&&e.w<=150&&!Z3.has(e.kind);const N3=[{kind:"ranch-egg",name:"Fresh Egg",cat:"ranch",w:50,holdable:!0,rooms:["any"],svg:`${Ee}<path d="M50 30 C70 30 80 62 80 74 C80 90 66 96 50 96 C34 96 20 90 20 74 C20 62 30 30 50 30 Z" fill="#fff6e6" ${L}/><ellipse cx="40" cy="52" rx="6" ry="9" fill="#fff"/>`},{kind:"ranch-carrot",name:"Garden Carrot",cat:"ranch",w:70,holdable:!0,rooms:["any"],svg:`${Ee}<path d="M30 40 L78 34 L40 96 Z" fill="#ff922b" ${L}/><path d="M44 50 l10 -2 M42 64 l8 -2 M44 78 l6 -1" ${L}/><path d="M72 36 Q80 14 92 14 M72 36 Q68 14 76 4 M72 36 Q90 30 96 36" fill="none" stroke="#40c057" stroke-width="7" stroke-linecap="round"/>`},{kind:"ranch-bouquet",name:"Ranch Flowers",cat:"ranch",w:80,holdable:!0,rooms:["any"],svg:`${Ee}<path d="M50 94 L40 50 M50 94 L50 44 M50 94 L62 50" stroke="#40c057" stroke-width="5" stroke-linecap="round"/><path d="M36 78 L64 78 L56 96 L44 96 Z" fill="#c9a0dc" ${L}/>${[[38,40,"#ff8fab"],[50,30,"#ffd43b"],[64,40,"#74c0fc"],[44,52,"#ff922b"],[58,52,"#c9a0dc"]].map(([e,t,n])=>`<circle cx="${e}" cy="${t}" r="9" fill="${n}" ${L}/><circle cx="${e}" cy="${t}" r="3" fill="#fff3b0"/>`).join("")}`}];hn.push(...X$,...i1,...N3);const Ce=Object.fromEntries(hn.map(e=>[e.kind,e])),Zo=e=>e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),lt=e=>e.h??e.w,mc=e=>e.img?`<img class="packimg" src="${Zo(e.img)}" alt="${Zo(e.name)}" draggable="false" />`:`<svg viewBox="${e.vb??"0 0 100 100"}" xmlns="http://www.w3.org/2000/svg">${e.svg}</svg>`,dn=(e,t=!1)=>{const n=ro()?zs(e.kind):void 0;if(!n)return mc(e);const s=t&&!e.wall?'<i class="artshade" aria-hidden="true"></i>':"",o=e.kind==="window"?'<i class="artnight" aria-hidden="true"></i>':"";return`${s}${o}<img class="packimg artimg" data-kind="${Zo(e.kind)}" src="${Zo(n)}" alt="${Zo(e.name)}" draggable="false" />`},F3='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="22" y="22" width="56" height="56" rx="14" fill="#fff6ea" stroke="#5a3d5c" stroke-width="4"/></svg>',j3=(e,t)=>e.img&&/\.webp(?:$|\?)/i.test(e.img)?F3:mc(e);let Wd=!1;function G3(){Wd||typeof window>"u"||(Wd=!0,window.addEventListener("error",e=>{const t=e.target;if(!(t instanceof HTMLImageElement)||!t.classList.contains("artimg")||t.dataset.fell==="1")return;const n=Ce[t.dataset.kind||""];if(!n)return;t.dataset.fell="1",t.parentElement?.querySelector(".artshade")?.remove(),t.parentElement?.querySelector(".artnight")?.remove();const s=document.createElement("div");s.innerHTML=mc(n);const o=s.firstElementChild;o&&t.replaceWith(o)},!0))}const Ud=new WeakMap;function Y3(e){const t=Ud.get(e);if(t)return t;if(!e.complete||!e.naturalWidth)return null;const n=document.createElement("canvas");n.width=e.naturalWidth,n.height=e.naturalHeight;const s=n.getContext("2d",{willReadFrequently:!0});if(!s)return null;try{s.drawImage(e,0,0)}catch{return null}const o=s.getImageData(0,0,n.width,n.height).data;return Ud.set(e,o),o}function K3(e,t,n){const s=e.getBoundingClientRect();if(s.width<1||s.height<1||!e.naturalWidth)return null;let o=(t-s.left)/s.width;const i=(n-s.top)/s.height;e.closest(".flipped")&&(o=1-o);const a=e.naturalWidth,r=e.naturalHeight,l=Math.min(s.width/a,s.height/r),c=a*l,d=r*l,f=(s.width-c)*.5,g=s.height-d,h=(o*s.width-f)/l,m=(i*s.height-g)/l;return h<0||m<0||h>=a||m>=r?null:{x:h,y:m}}function yc(e,t,n){const s=Y3(e),o=s&&K3(e,t,n);if(!s||!o)return!s;const i=Math.floor(o.x),r=(Math.floor(o.y)*e.naturalWidth+i)*4+3;return s[r]>24}function X3(e,t){const n=[];try{for(let s=0;s<12;s++){const o=document.elementFromPoint(e,t);if(!o)return null;const i=o.closest("img.artimg");if(i&&!yc(i,e,t)){n.push(i),i.style.pointerEvents="none";continue}return o}return null}finally{for(let s=0;s<n.length;s++)n[s].style.pointerEvents=""}}const J3="var(--line)",e5=1.4,at='fill="#3a1d3c" opacity=".14"',_l='fill="#3a1d3c" opacity=".22"',rn={l:[72,172],r:[128,172]},ws={l:[50,233],r:[150,233]},t5={l:[88,238],r:[112,238]};function D(e=3){return`stroke="${J3}" stroke-width="${(e*e5).toFixed(2)}" stroke-linejoin="round" stroke-linecap="round"`}function $(e){const n=(Math.round(e*10)/10).toFixed(1);return n.endsWith(".0")?n.slice(0,-2):n}function $l(e,t,n,s,o){const i=o*Math.PI/180,a=e-n,r=t-s,l=Math.cos(i),c=Math.sin(i);return{x:n+a*l-r*c,y:s+a*c+r*l}}function No(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),o=(n>>16&255)*(1-t),i=(n>>8&255)*(1-t),a=(n&255)*(1-t);return"#"+s(o)+s(i)+s(a)}function Vd(e,t){const n=parseInt(e.slice(1),16),s=r=>Math.max(0,Math.min(255,Math.round(r))).toString(16).padStart(2,"0"),o=n>>16&255,i=n>>8&255,a=n&255;return"#"+s(o+(255-o)*t)+s(i+(255-i)*t)+s(a+(255-a)*t)}function xl(e,t,n,s,o=0){const i=e[0],a=e[1],r=e[0]===t[0]&&e[1]===t[1]?t[0]+.01:t[0],l=t[1],c=r-i,d=l-a,f=Math.hypot(c,d)||1,g=-d/f,h=c/f,m=(i+r)/2+g*o,b=(a+l)/2+h*o,_=n/2,y=s/2,u=(_+y)/2*1.04,k=[i+g*_,a+h*_],x=[r+g*y,l+h*y],R=[r-g*y,l-h*y],H=[i-g*_,a-h*_];return`M${$(k[0])} ${$(k[1])} Q${$(m+g*u)} ${$(b+h*u)} ${$(x[0])} ${$(x[1])} A${$(y)} ${$(y)} 0 0 1 ${$(R[0])} ${$(R[1])} Q${$(m-g*u)} ${$(b-h*u)} ${$(H[0])} ${$(H[1])} A${$(_)} ${$(_)} 0 0 1 ${$(k[0])} ${$(k[1])} Z`}function pr(e,t,n,s,o){const i=[],a=(t-e)/s;for(let r=0;r<s;r++){const l=e+r*a,c=l+a;i.push(`Q${$((l+c)/2)} ${$(n+o)} ${$(c)} ${$(n)}`)}return i.join(" ")}function Ml(e,t,n,s,o,i=0){const a=[];for(let r=0;r<s;r++){const l=i+2*Math.PI*r/s,c=i+2*Math.PI*(r+1)/s,d=(l+c)/2,f=e+n*Math.cos(l),g=t+n*Math.sin(l),h=e+n*Math.cos(c),m=t+n*Math.sin(c),b=e+(n+o)*Math.cos(d),_=t+(n+o)*Math.sin(d);r===0&&a.push(`M${$(f)} ${$(g)}`),a.push(`Q${$(b)} ${$(_)} ${$(h)} ${$(m)}`)}return a.join(" ")+" Z"}function bs(e,t,n,s){const o=e==="arm"?rn[t]:t5[t],i=e==="arm"?t==="l"?s.armL:s.armR:t==="l"?s.legL:s.legR,a=e==="leg"?t==="l"?s.legLLift:s.legRLift:0,r=i||a?` transform="translate(0 ${$(-a)}) rotate(${$(i)} ${o[0]} ${o[1]})"`:"";return`<g class="${e} ${t}${e==="arm"?" hang":""}"${r} style="transform-box:view-box;transform-origin:${o[0]}px ${o[1]}px">${n}</g>`}const qn="var(--line)";function vn(e,t=.8,n=2.2){return e.map(s=>`<path d="${s}" fill="none" stroke="var(--hair-shade)" stroke-width="${n}" stroke-linecap="round" opacity="${t}"/>`).join("")}function Ro(e,t=.32){return e.map(n=>`<path d="${n}" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity="${t}"/>`).join("")}function Pn(){return'<path d="M54 72 Q62 44 92 38 Q70 50 63 74 Z" fill="#fff" opacity=".45"/><path d="M60 64 Q70 48 86 42" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/><path d="M104 37 Q130 38 145 58 Q128 46 106 43 Z" fill="#fff" opacity=".3"/><circle cx="72" cy="50" r="2" fill="#fff" opacity=".85"/>'}function xt(e,t,n){return n?`<path d="${e}" fill="url(#${t}h)"/>`:""}const Qd="M34 112 Q28 28 100 28 Q172 28 166 112 Q164 146 146 156 L54 156 Q36 146 34 112 Z";function It(e,t){return`<path d="${Qd}" fill="var(--hair)" ${D(3.2)}/>${xt(Qd,e,t)}`}function Vr(e,t,n,s,o,i,a=10){const r=Ml(e+2,t+3,n,12,7,s+.1),l=Ml(e,t,n-1,12,7,s);let c=`<path d="${r}" fill="var(--hair-shade)" ${D(3.2)}/><path d="${l}" fill="var(--hair)" ${D(3.2)}/>${xt(l,o,i)}`;for(let d=0;d<a;d++){const f=d*2.5+s,g=(n-6)*Math.sqrt((d+.5)/a),h=e+g*Math.cos(f),m=t+g*Math.sin(f);c+=`<path d="M${$(h-4)} ${$(m+1)} q1 -5 4.5 -4.5 q3.5 1 2.5 4.5" fill="none" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>`,m<t-2&&h<e+6&&(c+=`<path d="M${$(h-2.5)} ${$(m-2.5)} q2 -2 3.5 -1" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>`)}return c+=`<ellipse cx="${$(e-10)}" cy="${$(t-12)}" rx="6" ry="3.4" fill="#fff" opacity=".55" transform="rotate(-35 ${$(e-10)} ${$(t-12)})"/>`,c+=`<path d="M${$(e-16)} ${$(t-6)} Q${$(e-6)} ${$(t-18)} ${$(e+4)} ${$(t-14)}" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".5"/>`,c}function vs(e,t,n,s=6,o=[],i=7){let a=`<path d="M${e} ${t-6} V${n}" stroke="${qn}" stroke-width="${$(2*s+4.6)}" stroke-linecap="round"/><path d="M${e} ${t-6} V${n}" stroke="var(--hair)" stroke-width="${$(2*s)}" stroke-linecap="round"/>`,r=t,l=0;for(;r<n;){const c=l%2?1:-1;a+=`<path d="M${$(e-c)} ${$(r-4)} Q${$(e+c*s*1.05)} ${$(r-2)} ${$(e+c*s*.55)} ${$(r+4)} Q${$(e)} ${$(r+5.5)} ${$(e-c*1.4)} ${$(r+1)}" fill="none" stroke="var(--hair-shade)" stroke-width="1.7" stroke-linecap="round"/>`,c>0&&(a+=`<path d="M${$(e+1)} ${$(r-2)} q2.2 -.5 3 1.4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".4"/>`),r+=i,l++}for(let c=0;c<o.length;c++){const d=o[c];a+=`<rect x="${$(e-6.2)}" y="${d-4}" width="12.4" height="8" rx="2.6" fill="var(--acc)" stroke="${qn}" stroke-width="2"/><rect x="${$(e-4)}" y="${d-2.5}" width="2.6" height="4.5" rx="1" fill="#fff" opacity=".6"/>`}return a+=`<path d="M${e-4} ${n+2} q2 5 4 6 q2 -1 4 -6" fill="var(--hair)" stroke="${qn}" stroke-width="2"/>`,a}function xa(e,t,n,s=5.5){let o=`<path d="M${e} ${t} V${n}" stroke="${qn}" stroke-width="${$(2*s+4)}" stroke-linecap="round"/><path d="M${e} ${t} V${n}" stroke="var(--hair)" stroke-width="${$(2*s)}" stroke-linecap="round"/>`;for(let i=t+8;i<n;i+=16)o+=`<path d="M${$(e-s*.7)} ${i} Q${e} ${i+5} ${$(e+s*.7)} ${i}" fill="none" stroke="var(--hair-shade)" stroke-width="1.6" opacity=".8"/>`;return o+=`<circle cx="${e}" cy="${n+3}" r="${$(s*.55)}" fill="var(--hair)" stroke="${qn}" stroke-width="2"/>`,o}function Qr(e,t,n,s){return`<path d="${e}" fill="var(--hair)" ${D(3)}/>${xt(e,t,n)}${vn(s)}${Ro(s.slice(0,2),.45)}`}function Zs(e,t,n){return`<ellipse cx="${e}" cy="${t}" rx="8" ry="5.5" fill="var(--acc)" ${D(2.4)} transform="rotate(${n} ${e} ${t})"/><ellipse cx="${e-1}" cy="${t-2}" rx="2.4" ry="1.3" fill="#fff" opacity=".6" transform="rotate(${n} ${e-1} ${t-2})"/>`}const Tn='<path d="M42 104 Q44 76 70 66 Q86 74 100 58 Q114 74 130 66 Q156 76 158 104" fill="none" stroke="#3a1d3c" stroke-width="9" opacity=".12"/>';function Cf(e){return e==="puffs"||e==="coily"?"puffs":e==="afro"?"afro":e==="braids"?"braids":e==="boxbraids"?"box":e==="locs"?"locs":e==="sidebraid"?"sidebraid":e==="crown"?"crown":e==="pony"?"pony":e==="sidepony"?"sidepony":e==="pigtails"?"pigtails":e==="halfup"?"halfup":e==="buns"?"buns":e==="topbun"?"topbun":e==="lowbun"?"lowbun":e==="long"?"long":e==="wavy"||e==="wavybob"?e==="wavy"?"wavy":"bob":e==="bob"||e==="curlybob"||e==="sidebangs"?"bob":e==="pixie"?"pixie":(e==="bangs"||e==="short")&&e==="bangs"?"bangs":"short"}function n5(e,t,n){const s=Cf(e);if(s==="puffs"){const o=e==="coily"?26:30;return Vr(48,52,o,0,t,n,12)+Vr(152,52,o,.3,t,n,12)+`<path d="M42 112 Q38 48 100 44 Q162 48 158 112 Q154 144 100 146 Q46 144 42 112 Z" fill="var(--hair)" ${D(3.2)}/>`+Zs(66,68,-35)+Zs(134,68,35)}if(s==="afro")return Vr(100,78,78,.2,t,n,14);if(s==="braids")return It(t,n)+vs(34,108,230,5.4,[196])+vs(166,108,230,5.4,[196]);if(s==="box")return It(t,n)+vs(30,110,228,5,[200],10)+vs(170,110,228,5,[200],10);if(s==="locs")return It(t,n)+xa(32,112,236)+xa(168,112,236);if(s==="sidebraid")return It(t,n);if(s==="pony"||s==="sidepony"||s==="halfup"){const o=s==="sidepony"?"M118 78 Q150 70 158 120 Q164 160 150 200 Q136 188 138 160 Q132 120 124 96 Z":"M126 40 Q178 28 180 92 Q184 132 168 168 Q160 196 174 220 Q148 212 145 182 Q140 156 152 124 Q160 90 132 64 Z",i=s==="halfup"?70:s==="sidepony"?86:44;return It(t,n)+Qr(o,t,n,s==="sidepony"?["M130 96 Q150 120 146 160","M138 110 Q154 140 148 180"]:["M146 56 Q170 88 160 130","M156 66 Q176 100 166 140","M150 150 Q148 180 160 206"])+Zs(s==="sidepony"?124:128,i,s==="sidepony"?-20:25)}if(s==="pigtails")return It(t,n)+Qr("M40 100 Q22 120 28 168 Q34 200 48 214 Q58 196 52 160 Q58 124 56 108 Z",t,n,["M40 120 Q32 150 40 184"])+Qr("M160 100 Q178 120 172 168 Q166 200 152 214 Q142 196 148 160 Q142 124 144 108 Z",t,n,["M160 120 Q168 150 160 184"])+Zs(52,96,20)+Zs(148,96,-20);if(s==="buns"){let o="";for(const i of[52,148])o+=`<circle cx="${i}" cy="44" r="24" fill="var(--hair)" ${D(3.2)}/>${n?`<circle cx="${i}" cy="44" r="24" fill="url(#${t}h)"/>`:""}`,o+=vn([`M${i-14} 48 Q${i-14} 28 ${i} 26 Q${i+16} 30 ${i+14} 48`,`M${i-8} 54 Q${i+8} 56 ${i+12} 48`]),o+=`<path d="M${i-12} 34 Q${i-4} 24 ${i+4} 26" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".45"/>`;return o+It(t,n)}if(s==="topbun")return`<circle cx="100" cy="30" r="26" fill="var(--hair)" ${D(3.2)}/>${n?`<circle cx="100" cy="30" r="26" fill="url(#${t}h)"/>`:""}<path d="M82 28 Q100 12 118 28" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/>${vn(["M86 36 Q100 24 114 36","M90 42 Q100 34 110 42"])}${It(t,n)}`;if(s==="lowbun")return It(t,n)+`<circle cx="100" cy="168" r="22" fill="var(--hair)" ${D(3)}/>${n?`<circle cx="100" cy="168" r="22" fill="url(#${t}h)"/>`:""}${Zs(100,148,0)}`;if(s==="long"||s==="wavy"){const o=s==="wavy"?"M36 108 Q28 160 40 210 Q52 250 46 286 Q70 270 78 230 Q60 180 58 140 Q52 120 48 108 Z M164 108 Q172 160 160 210 Q148 250 154 286 Q130 270 122 230 Q140 180 142 140 Q148 120 152 108 Z":"M38 110 Q30 170 36 240 Q42 280 34 300 L70 292 Q64 240 66 180 Q62 140 56 112 Z M162 110 Q170 170 164 240 Q158 280 166 300 L130 292 Q136 240 134 180 Q138 140 144 112 Z";return`<path d="${o}" fill="var(--hair)" ${D(3)}/>${xt(o,t,n)}${It(t,n)}`}if(s==="bob"){const o=e==="curlybob"?"M30 120 Q24 170 48 196 Q70 210 100 206 Q130 210 152 196 Q176 170 170 120 Q150 150 100 156 Q50 150 30 120 Z":"M32 116 Q26 168 50 190 Q78 204 100 200 Q122 204 150 190 Q174 168 168 116 Q150 148 100 154 Q50 148 32 116 Z";return`<path d="${o}" fill="var(--hair)" ${D(3.2)}/>${xt(o,t,n)}${It(t,n)}`}return It(t,n)}function s5(e,t,n){const s=Cf(e),o='<path d="M100 34 V56" stroke="var(--hair-shade)" stroke-width="2.2" stroke-linecap="round"/>';if(s==="puffs"||s==="braids"||s==="box"||s==="locs"||s==="afro"||s==="bangs"){const a=s==="afro"?"M48 100 Q52 48 100 40 Q148 48 152 100 Q140 78 100 70 Q60 78 48 100 Z":s==="bangs"?"M40 108 Q36 40 100 34 Q164 40 160 108 L150 96 Q130 108 100 100 Q70 108 50 96 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q154 74 130 62 Q112 70 100 52 Q88 70 70 62 Q46 74 40 106 Z";let r=Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}${o}`;return r+=vn(["M84 44 Q70 52 60 70","M116 44 Q130 52 140 70","M92 40 Q80 48 74 58","M108 40 Q120 48 126 58","M76 42 Q58 56 52 82","M124 42 Q142 56 148 82"]),r+=Ro(["M90 36 Q78 42 70 52","M112 36 Q124 42 132 52"]),s==="puffs"?(r+=`<path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="${qn}" stroke-width="7" stroke-linecap="round"/><path d="M44 96 q-6 4 -2 10 q4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`,r+=`<path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="${qn}" stroke-width="7" stroke-linecap="round"/><path d="M156 96 q6 4 2 10 q-4 4 0 8" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`):s==="braids"||s==="box"?(r+=vs(48,114,200,5,[156],s==="box"?10:7),r+=vs(152,114,200,5,[156],s==="box"?10:7)):s==="locs"&&(r+=xa(46,116,210,4.6)+xa(154,116,210,4.6)),r+Pn()}if(s==="sidebraid"){const a="M40 108 Q36 36 100 32 Q164 36 160 100 Q140 78 100 70 Q70 80 40 108 Z";return Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}${vn(["M70 46 Q86 60 96 74","M120 44 Q136 58 146 74"])}${vs(150,100,210,5.6,[168],7)}${Pn()}`}if(s==="crown"){const a="M40 106 Q36 36 100 32 Q164 36 160 106 Q150 80 100 74 Q50 80 40 106 Z";let r="";for(let l=0;l<7;l++){const c=58+l*14;r+=`<path d="M${c} 58 Q${c+7} 46 ${c+14} 58" fill="none" stroke="var(--hair-shade)" stroke-width="3.2" stroke-linecap="round"/>`}return Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}${r}${Pn()}`}if(s==="pony"||s==="sidepony"||s==="halfup"||s==="pigtails"){const a=s==="sidepony"?"M40 108 Q34 36 100 32 Q166 34 160 108 Q150 86 120 78 Q90 90 60 74 Q48 90 40 108 Z":"M40 108 Q34 34 100 32 Q166 34 160 108 Q156 84 144 72 Q128 86 104 80 Q86 78 72 68 Q60 84 48 84 Q42 94 40 108 Z";let r=Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}`;return r+=`<path d="M40 104 Q36 120 44 132 Q46 116 50 106 Z" fill="var(--hair)" ${D(2.4)}/><path d="M160 104 Q164 120 156 132 Q154 116 150 106 Z" fill="var(--hair)" ${D(2.4)}/>`,r+=vn(["M70 46 Q90 60 104 74","M128 46 Q140 60 146 74","M96 40 Q110 56 116 66"]),r+=Ro(["M76 42 Q92 52 100 62"]),r+Pn()}if(s==="buns"||s==="topbun"||s==="lowbun"){const a=s==="topbun"?"M44 108 Q40 50 100 46 Q160 50 156 108 Q148 82 100 74 Q52 82 44 108 Z":"M40 106 Q36 36 100 32 Q164 36 160 106 Q152 80 138 70 Q126 80 112 76 Q104 82 100 74 Q96 82 88 76 Q74 80 62 70 Q48 80 40 106 Z";let r=Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}`;if(r+=vn(["M80 42 Q72 56 68 68","M120 42 Q128 56 132 68","M100 36 Q98 56 100 70","M90 38 Q84 56 86 72","M110 38 Q116 56 114 72"]),r+=Ro(["M86 38 Q80 46 78 54","M114 38 Q120 46 122 54"]),s==="buns")for(const[l,c]of[[42,1],[158,-1]]){const d=`M${l} 100 q${-8*c} 14 ${-2*c} 24 q${5*c} 8 ${-1*c} 14`;r+=`<path d="${d}" fill="none" stroke="${qn}" stroke-width="7" stroke-linecap="round"/><path d="${d}" fill="none" stroke="var(--hair)" stroke-width="3.6" stroke-linecap="round"/>`}return r+Pn()}if(s==="long"||s==="wavy"||s==="bob"){const a=e==="sidebangs"||e==="wavybob"?"M38 108 Q34 40 70 36 Q100 34 112 48 Q90 70 48 78 Q36 90 38 108 Z M112 48 Q140 36 164 50 Q166 100 150 108 Q130 80 112 70 Z":"M40 108 Q34 36 100 32 Q166 36 160 108 Q152 78 128 68 Q112 78 100 60 Q88 78 72 68 Q48 78 40 108 Z";return Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}${vn(["M78 46 Q68 64 64 80","M122 46 Q132 64 136 80","M100 38 V64"])}${Ro(["M88 40 Q80 50 76 60"])}${Pn()}`}if(s==="pixie"){const a="M48 104 Q44 48 100 40 Q140 46 150 78 Q156 100 140 108 Q120 86 100 90 Q70 84 52 104 Z";return Tn+`<path d="${a}" fill="var(--hair)" ${D(3.2)}/>${xt(a,t,n)}${vn(["M70 56 Q86 70 96 84","M118 52 Q132 66 138 82"])}${Pn()}`}const i="M46 106 Q42 46 100 38 Q158 46 154 106 Q140 80 100 76 Q60 80 46 106 Z";return Tn+`<path d="${i}" fill="var(--hair)" ${D(3.2)}/>${xt(i,t,n)}${o}${Pn()}`}const lo="var(--line)";function wc(e){return Math.abs(e.legL)>=40||Math.abs(e.legR)>=40}function Ss(e,t,n,s=[]){const o=s.map(i=>`<path d="${i}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/>`).join("");return(n?`<path d="${e}" fill="url(#${t}c)"/>`:"")+o}function Ll(e,t,n){const s=(n+7).toFixed(1);return`<path d="${e}" fill="none" stroke="${lo}" stroke-width="${s}" stroke-linecap="round"/><path d="${e}" fill="none" stroke="${t}" stroke-width="${n}" stroke-linecap="round"/>`}function bc(e,t,n){return bs("arm",e,t,n).replace('class="arm ','class="arm sleeve ')}function Ki(e,t,n=!1){const[s,o]=rn[e],i=e==="l"?-1:1;let a=Ll(`M${s} ${o} L${s+7*i} ${o+20}`,"var(--top)",22);return n&&(a+=`<path d="M${s+7*i-12} ${o+17} H${s+7*i+12}" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round" opacity=".9" transform="rotate(${-18*i} ${s+7*i} ${o+17})"/>`),bc(e,a,t)}function Fo(e,t,n=!0){const[s,o]=rn[e],[i,a]=ws[e],r=e==="l"?-1:1,l=(s+i)/2+6*r;let c=Ll(`M${s-2*r} ${o-2} Q${l} ${(o+a)/2-6} ${i-r} ${a-16}`,"var(--top)",21);return n&&(c+=Ll(`M${i-3*r} ${a-17} L${i-r} ${a-13}`,"var(--top-trim)",20)),bc(e,c,t)}function El(e,t,n=!1){const[s,o]=rn[e],i=e==="l"?-1:1,a=s+4*i,r=o+8;let l=`<path d="${Ml(a,r,13,9,3.2)}" fill="var(--top)" ${D(2.8)}/>`;return l+=`<ellipse cx="${a-4*i}" cy="${r-5}" rx="5" ry="3" fill="#fff" opacity=".45"/>`,n&&(l+=`<path d="M${a-11} ${r+13} ${pr(a-11,a+11,r+13,4,3)}" fill="none" stroke="#fff" stroke-width="2.4"/>`),bc(e,l,t)}function Ot(e,t){return e("l",t)+e("r",t)}const qd="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 228 Q100 236 64 228 Z";function ps(e,t,n,s,o,i,a="",r=[],l=!1){const c=`<path d="${t}" fill="var(--top)" ${D(3)}/>${Ss(t,s,o,r)}${a}`;return`<g class="shirt" data-hem="${i}">${l?c+n:n+c}</g>`}function o5(e,t,n,s,o){if(t.dress)return"";const i=t.top;if(i==="hoodie"){const l="M66 168 Q72 158 92 158 H108 Q128 158 134 168 L139 230 Q100 240 61 230 Z",c=`<path d="M120 162 Q132 164 134 170 L139 230 Q128 233 123 233 Z" ${at}/><path d="M72 172 Q76 164 86 163" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" opacity=".38"/><path d="M78 159 Q100 182 122 159 Q120 152 100 152 Q80 152 78 159 Z" fill="var(--top-trim)" ${D(2.8)}/><path d="M92 172 v18 M108 172 v18" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="92" cy="191" r="2.6" fill="#fff" ${D(1.8)}/><circle cx="108" cy="191" r="2.6" fill="#fff" ${D(1.8)}/><path d="M78 202 H122 L127 222 H73 Z" fill="var(--top)" ${D(2.6)}/><path d="M78 202 H122 L124 210 H76 Z" ${at}/><path d="M61 226 Q100 236 139 226 L139 234 Q100 244 61 234 Z" fill="var(--top-trim)" ${D(2.8)}/>`;return ps(e,l,Ot(Fo,e),n,s,o,c,["M74 196 q-2 12 2 22","M126 190 q2 14 0 26"])}if(i==="stripes"||i==="jersey"){const l="M68 168 Q74 158 92 158 H108 Q126 158 132 168 L135 232 Q100 238 65 232 Z",c=`${n}st`,d=i==="jersey"?'<path d="M70 176 H130 L128 188 H72 Z" fill="var(--top-trim)"/><path d="M68 210 H132 L130 222 H70 Z" fill="var(--top-trim)"/>':[166,179,192,205,218,231].map(m=>`<rect x="60" y="${m}" width="80" height="6" fill="var(--top-trim)"/>`).join(""),f=i==="jersey"?'<path d="M86 160 L100 176 L114 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/>':'<path d="M84 159 Q100 172 116 159" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',g=s?`<path d="${l}" fill="url(#${n}c)"/>`:"";return`<g class="shirt" data-hem="${o}"><defs><clipPath id="${c}"><path d="${l}"/></clipPath></defs>${Ot(m=>Ki(m,e,!0),e)}<path d="${l}" fill="var(--top)"/><g clip-path="url(#${c})">${g}<path d="M118 160 L135 168 L138 236 H120 Z" ${at}/>${d}</g><path d="${l}" fill="none" ${D(3)}/>${f}<path d="M78 198 q-2 12 1 24" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/><path d="M122 190 q2 14 0 28" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".22"/></g>`}if(i==="sweater"||i==="cardigan"){const l=i==="cardigan"?"M68 168 Q74 158 92 158 H108 Q126 158 132 168 L134 232 H108 L100 210 L92 232 H66 Z":"M66 168 Q72 158 92 158 H108 Q128 158 134 168 L136 234 Q100 242 64 234 Z",c=`<path d="M118 166 L134 174 L136 230 Q120 236 112 228 Z" ${at}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M64 226 Q100 236 136 226" fill="none" stroke="var(--top-trim)" stroke-width="6" stroke-linecap="round"/>`,d=i==="cardigan"?[186,202,218].map(f=>`<circle cx="100" cy="${f}" r="2.4" fill="var(--top-trim)" ${D(1.4)}/>`).join(""):"";return ps(e,l,Ot(Fo,e),n,s,o,c+d,["M80 190 q-2 16 0 28","M120 188 q2 16 0 30"])}if(i==="tank"||i==="bib"){const l=i==="bib"?"M78 168 H122 L126 228 H74 Z":"M78 168 Q86 160 96 164 H104 Q114 160 122 168 L128 226 H72 Z",c=`<path d="M110 172 H126 L128 226 H114 Z" ${at}/><path d="M82 176 Q84 168 92 166" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".35"/>`,d=i==="bib"?`${c}<path d="M86 150 L78 168 M114 150 L122 168" stroke="${lo}" stroke-width="8" stroke-linecap="round"/><path d="M86 150 L78 168 M114 150 L122 168" stroke="var(--top)" stroke-width="4.5" stroke-linecap="round"/><rect x="90" y="176" width="20" height="16" rx="3" fill="var(--top-trim)" ${D(1.6)}/>`:`${c}<path d="M84 166 Q100 176 116 166" fill="none" stroke="var(--top-trim)" stroke-width="4"/>`;return ps(e,l,"",n,s,o,d,["M88 190 q2 14 0 24"])}if(i==="puff"||i==="ruffle"){const l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L132 222 H68 Z",c=`<path d="M100 172 l-8 -5 v10 z M100 172 l8 -5 v10 z" fill="var(--top-trim)" ${D(1.8)}/><path d="M97 174 l-4 10 M103 174 l4 10" stroke="var(--top-trim)" stroke-width="2.6" stroke-linecap="round"/>`,d=(i==="ruffle"?`<path d="M68 166 Q74 178 82 166 Q90 180 100 166 Q110 180 118 166 Q126 180 132 166" fill="var(--top-trim)" ${D(2)}/>`:c)+`<path d="M118 162 Q128 164 130 170 L132 222 H120 Z" ${at}/><path d="M74 176 Q76 168 84 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return ps(e,l,Ot(El,e),n,s,o,d,["M86 190 q2 10 0 20","M116 188 q-2 12 0 22"],!0)}if(i==="button"){const l=qd,c=[180,196,212].map(f=>`<circle cx="100" cy="${f}" r="2.6" fill="#fff" ${D(1.6)}/>`).join(""),d=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${at}/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M100 164 V226" stroke="#fff" stroke-width="2" opacity=".7"/>${c}<path d="M82 160 Q100 172 118 160" fill="var(--top)" ${D(2.2)}/>`;return ps(e,l,Ot(f=>Ki(f,e,!1),e),n,s,o,d,["M78 196 q-1 12 2 20"])}if(i==="raincoat"){const l="M62 168 Q70 156 92 156 H108 Q130 156 138 168 L146 240 Q100 252 54 240 Z",c=`<path d="M120 164 L142 176 L146 236 Q124 244 116 232 Z" ${at}/><path d="M72 176 Q76 166 88 164" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/><path d="M70 156 Q100 176 130 156" fill="none" stroke="var(--top-trim)" stroke-width="6"/><circle cx="100" cy="196" r="4" fill="var(--top-trim)" ${D(1.8)}/><path d="M78 214 H122" stroke="var(--top-trim)" stroke-width="4" stroke-linecap="round"/>`;return ps(e,l,Ot(Fo,e),n,s,o,c,["M76 190 q-4 18 -2 36","M124 188 q4 18 2 36"])}const a=qd,r=`<path d="M118 168 L134 176 L136 228 Q118 234 112 224 Z" ${at}/><path d="M84 160 Q100 172 116 160" fill="none" stroke="var(--top-trim)" stroke-width="5"/><path d="M74 176 Q78 168 86 166" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".38"/>`;return ps(e,a,Ot(l=>Ki(l,e,!1),e),n,s,o,r,["M78 196 q-2 12 1 22","M122 194 q2 14 -1 24"])}function Zd(e,t,n,s,o,i=!1,a=16){const r=e==="l"?88:112,l=e==="l"?-1:1,c=`M${r-a/2} 226 Q${r-a/2+l} ${n-20} ${r-a/2+2*l} ${n} H${r+a/2} Q${r+a/2} ${n-30} ${r+a/2-l} 226 Z`;let d=`<path d="${c}" fill="var(--bottom)" ${D(2.8)}/>`;return d+=Ss(c,s,o,[`M${r-4*l} 240 Q${r} ${(226+n)/2} ${r+3*l} ${n-14}`]),e==="r"?d+=`<path d="M${r+1} 230 H${r+a/2} L${r+a/2} ${n} H${r+4} Z" ${at}/>`:d+=`<path d="M${r-2} 238 Q${r-6} ${(226+n)/2} ${r-2} ${n-10}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".3"/>`,i&&(d+=`<path d="M${r-a/2-1} ${n-8} H${r+a/2+1} V${n+1} H${r-a/2-1} Z" fill="var(--bottom-trim)" ${D(2)}/>`),bs("leg",e,d,t)}function i5(e,t,n,s){if(t.dress)return'<g data-layer="bottom"></g>';const o=t.bottom;if(wc(e)&&(o==="skirt"||o==="tutu"||o==="overalls"))return`<g data-layer="bottom"><path class="skirt" d="${o==="tutu"?"M52 216 H148 L160 248 Q100 260 40 248 Z":"M62 218 H138 L152 252 Q100 264 48 252 Z"}" fill="var(--bottom)" ${D(3)}/></g>`;if(o==="skirt"){const g="M68 222 H132 L146 262 Q100 274 54 262 Z";return`<g data-layer="bottom"><path class="skirt" d="${g}" fill="var(--bottom)" ${D(3)}/>${Ss(g,n,s,["M82 234 L76 258","M100 232 V266","M118 234 L126 258"])}<path d="M114 224 H132 L146 262 Q130 268 118 266 Z" ${at}/><path d="M72 228 Q66 246 64 258" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".3"/><path d="M84 236 v10 M116 236 v10" stroke="#fff" stroke-width="1.6" stroke-dasharray="3 3" opacity=".55"/></g>`}if(o==="tutu")return'<g data-layer="bottom"></g>';if(o==="overalls"){const g="M66 220 H134 L139 264 H106 L100 254 L94 264 H61 Z";return`<g data-layer="bottom"><g class="leg" style="transform-box:view-box;transform-origin:100px 238px"><path d="${g}" fill="var(--bottom)" ${D(3)}/>${Ss(g,n,s,["M78 232 Q74 248 72 260","M122 230 Q128 248 132 260"])}<path d="M118 222 H134 L139 264 H122 Z" ${at}/><path d="M64 258 H95 M105 258 H138" stroke="var(--bottom-trim)" stroke-width="4"/></g></g>`}const a=o==="shorts"?256:292,r=o==="joggers"||o==="jeans",l=o==="leggings"?12:o==="shorts"?18:16,c=Zd("l",e,a,n,s,r,l)+Zd("r",e,a,n,s,r,l),d=o==="jeans"?'<path d="M88 232 V286 M112 232 V286" stroke="#c9a24a" stroke-width="1.4" stroke-dasharray="2 3" opacity=".7"/>':"";return`<g data-layer="bottom">${`<path d="M70 220 H130 V230 H70 Z" fill="var(--bottom)" ${D(2.4)}/>`}${c}${d}</g>`}function a5(e,t,n,s){if(t.dress)return'<g data-layer="bottom-over"></g>';const o=t.bottom;if(o==="overalls"){const i="M78 180 H122 L124 228 H76 Z";return`<g data-layer="bottom-over"><path d="M80 176 L72 164 M120 176 L128 164" stroke="${lo}" stroke-width="12" stroke-linecap="round"/><path d="M80 176 L72 164 M120 176 L128 164" stroke="var(--bottom)" stroke-width="7.5" stroke-linecap="round"/><path d="${i}" fill="var(--bottom)" ${D(3)}/>${Ss(i,n,s,["M86 200 q14 6 28 0"])}<path d="M88 190 H112 V206 Q100 212 88 206 Z" fill="var(--bottom-trim)" ${D(2.4)}/><circle cx="82" cy="186" r="3.6" fill="#fff" ${D(2)}/><circle cx="118" cy="186" r="3.6" fill="#fff" ${D(2)}/><path d="M66 222 H134 L135 230 H65 Z" fill="var(--bottom)" ${D(3)}/><path d="M108 180 H122 L124 228 H110 Z" ${at}/><path d="M82 182 v12" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".4"/></g>`}if(o==="tutu"){if(wc(e))return`<g data-layer="bottom-over"><path class="skirt" d="M58 220 H142 L154 246 Q100 256 46 246 Z" fill="var(--bottom)" ${D(2.4)}/></g>`;let i="";const a=[[266,50,150,8],[256,56,144,7],[246,64,136,6]];for(let l=0;l<a.length;l++){const[c,d,f,g]=a[l],h=`M${d+8} ${c-22} H${f-8} L${f} ${c} ${pr(f,d,c,6,g)} Z`;i+=`<path class="skirt" d="${h}" fill="var(--bottom)" ${D(2.4)}/>`,i+=`<path d="M${f-20} ${c-16} L${f-6} ${c-2}" fill="none" stroke="#3a1d3c" stroke-width="2.4" stroke-linecap="round" opacity=".2"/>`}const r="M66 214 H134 V224 H66 Z";return`<g data-layer="bottom-over">${i}<path d="${r}" fill="var(--bottom-trim)" ${D(2.6)}/>${Ss(r,n,s)}</g>`}return'<g data-layer="bottom-over"></g>'}function Nd(e,t){return`<path d="M${e} ${t+2} c-3 -5 -9 -1 -5 3 l5 4 l5 -4 c4 -4 -2 -8 -5 -3z" fill="var(--top-trim)" opacity=".85"/>`}function r5(e,t,n,s,o){const i=t.dress;if(!i)return"";const a=`${n}dr`;let r="M72 210 H128 L150 268 Q100 282 50 268 Z",l="M72 168 Q78 158 94 158 H106 Q122 158 128 168 L130 214 H70 Z",c="",d=Ot(m=>El(m,e,!0),e),f=!0;i==="sundress"?(r="M76 214 H124 L140 266 Q100 276 60 266 Z",c='<path d="M78 166 Q100 180 122 166" fill="none" stroke="var(--top-trim)" stroke-width="5"/>',d="",f=!1):i==="party"?c=[[64,236],[86,228],[108,234],[130,242],[76,254],[100,250],[122,258],[92,188]].map(([b,_])=>Nd(b,_)).join("")+`<path d="M100 214 l-10 -6 v12 z M100 214 l10 -6 v12 z" fill="var(--top-trim)" ${D(1.8)}/><path d="M52 262 Q100 276 148 262" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray="1 5" opacity=".85"/>`:i==="pinafore"?(l="M80 176 H120 L122 214 H78 Z",c='<path d="M86 158 L80 178 M114 158 L120 178" stroke="var(--top)" stroke-width="5" stroke-linecap="round"/>',d="",f=!1,r="M74 212 H126 L142 264 Q100 274 58 264 Z"):i==="jumper"?(c=`<path d="M84 160 Q100 174 116 160" fill="var(--top-trim)" ${D(2)}/>`,d=Ot(m=>Ki(m,e,!0),e),f=!1):i==="ballet"?(r="M78 214 H122 L132 250 Q100 258 68 250 Z",c=`<path d="M70 248 ${pr(70,130,248,5,5)}" fill="none" stroke="#fff" stroke-width="2"/>`,d=Ot(El,e)):i==="nightgown"?(r="M80 214 H120 L132 270 Q100 278 68 270 Z",c='<path d="M88 164 Q100 176 112 164" fill="none" stroke="#fff" stroke-width="3" opacity=".7"/>',d=Ot(Fo,e),f=!1):i==="raindress"?(r="M70 212 H130 L148 268 Q100 280 52 268 Z",c='<path d="M76 168 Q100 186 124 168" fill="none" stroke="var(--top-trim)" stroke-width="5"/><circle cx="100" cy="198" r="3.4" fill="var(--top-trim)"/>',d=Ot(Fo,e),f=!1):(r="M70 214 H130 L152 266 Q100 280 48 266 Z",l="M70 168 Q76 158 92 158 H108 Q124 158 130 168 L131 216 H69 Z",c=[[66,236],[86,228],[110,232],[132,240],[76,254],[100,248],[124,258],[56,260],[144,262],[96,266],[84,182],[114,190],[100,200]].map(([b,_])=>Nd(b,_)).join("")+`<path d="M112 214 H130 L152 266 Q138 271 128 272 Z" ${at}/><path d="M118 162 L130 168 L131 216 H120 Z" ${at}/><path d="M50 262 Q100 276 150 262" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round" opacity=".9"/><path d="M60 226 Q56 244 54 258" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".3"/><path d="M68 210 H132 V220 H68 Z" fill="var(--top-trim)" ${D(2.6)}/><path d="M100 215 l-13 -8 v16 z M100 215 l13 -8 v16 z" fill="var(--top-trim)" ${D(2.2)}/><circle cx="100" cy="215" r="3.6" fill="var(--top-trim)" ${D(2)}/><path d="M97 218 l-5 14 M103 218 l5 14" stroke="var(--top-trim)" stroke-width="3" stroke-linecap="round"/><path d="M80 158 Q78 172 94 170 Q99 166 100 162 Q101 166 106 170 Q122 172 120 158 Q100 164 80 158 Z" fill="#fff" ${D(2.4)}/>`),wc(e)&&(r="M68 214 H132 L150 250 Q100 262 50 250 Z");const g=`${r} ${l}`,h=`<path class="skirt" d="${r}" fill="var(--top)" ${D(3)}/><path d="${l}" fill="var(--top)" ${D(3)}/><g clip-path="url(#${a})">${Ss(g,n,s,["M80 226 Q74 248 70 266","M120 226 Q126 248 130 266"])}${c}</g>`;return`<g class="shirt" data-hem="${o}"><defs><clipPath id="${a}"><path d="${g}"/></clipPath></defs>${f?h+d:d+h}</g>`}function l5(e,t,n,s){const o=e==="l"?`<g transform="translate(${2*s} 0) scale(-1 1)">${n}</g>`:n;return bs("leg",e,o,t)}function c5(e,t){const n=t.shoes;let s="";for(const o of["l","r"]){const i=o==="l"?87:113;let a="";if(n==="sneakers"||n==="lightup"){const r=n==="lightup"?`<circle cx="${i-4}" cy="292" r="2.2" fill="#ff8fab"/><circle cx="${i+4}" cy="296" r="2.2" fill="#8ecae6"/><circle cx="${i}" cy="300" r="2" fill="#ffd166"/>`:"";a=`<path d="M${i} 270 V286" fill="none" stroke="var(--sock)" stroke-width="16" stroke-linecap="round"/><path d="M${i-14} 296 Q${i-14} 284 ${i} 284 Q${i+14} 284 ${i+16} 296 Q${i+22} 298 ${i+22} 304 Q${i+22} 310 ${i+12} 310 H${i-14} Q${i-18} 310 ${i-16} 302 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${i-12} 304 H${i+18}" stroke="var(--shoe-trim)" stroke-width="3.5" stroke-linecap="round"/><path d="M${i-6} 290 l5 2 M${i-6} 295 l6 2" stroke="${lo}" stroke-width="1.8" stroke-linecap="round"/>${r}`}else if(n==="boots"||n==="rainboots"){const r=n==="rainboots"?248:258,l=n==="boots"?[[-6,272],[5,268],[-2,284],[7,290],[-8,294]].map(([c,d])=>`<circle cx="${i+c}" cy="${d}" r="2.6" fill="#fff" opacity=".9"/>`).join(""):"";a=`<path d="M${i-14} ${r} H${i+14} V296 Q${i+22} 298 ${i+22} 304 Q${i+22} 310 ${i+10} 310 H${i-14} Q${i-18} 310 ${i-16} 302 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${i-16} ${r-4} H${i+16} V${r+8} H${i-16} Z" fill="var(--shoe)" ${D(2.6)}/>`+l+(n==="rainboots"?`<path d="M${i-12} ${r+16} H${i+12}" stroke="var(--shoe-trim)" stroke-width="4" stroke-linecap="round"/>`:`<path d="M${i-6} ${r+14} V292" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".45"/>`)}else n==="maryjanes"?a=`<path d="M${i} 266 V290" fill="none" stroke="var(--sock)" stroke-width="15" stroke-linecap="round"/><path d="M${i-12} 274 ${pr(i-12,i+12,274,4,4)} L${i+12} 268 H${i-12} Z" fill="var(--sock)" ${D(2)}/><path d="M${i-13} 298 Q${i-13} 290 ${i} 290 Q${i+13} 290 ${i+14} 298 Q${i+20} 300 ${i+20} 304 Q${i+20} 309 ${i+8} 309 H${i-12} Q${i-16} 309 ${i-14} 302 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${i-10} 294 H${i+12}" stroke="${lo}" stroke-width="2"/><circle cx="${i+8}" cy="294" r="2.2" fill="var(--acc)"/>`:n==="sandals"?a=`<path d="M${i-12} 298 Q${i-12} 286 ${i} 286 Q${i+12} 286 ${i+14} 296 Q${i+18} 298 ${i+18} 302 Q${i+18} 306 ${i+8} 306 H${i-12} Q${i-16} 306 ${i-14} 300 Z" fill="var(--skin)" ${D(2.4)}/><path d="M${i-14} 304 H${i+18}" stroke="var(--shoe)" stroke-width="5" stroke-linecap="round"/><path d="M${i-8} 292 H${i+10} M${i+2} 300 L${i+8} 290" stroke="var(--shoe)" stroke-width="4" stroke-linecap="round"/><circle cx="${i+2}" cy="293" r="3" fill="var(--shoe-trim)" ${D(1.4)}/>`:n==="slippers"?a=`<path d="M${i-14} 292 Q${i-14} 280 ${i} 278 Q${i+16} 280 ${i+18} 294 Q${i+22} 296 ${i+20} 304 H${i-14} Q${i-18} 304 ${i-16} 296 Z" fill="var(--shoe)" ${D(2.8)}/><path d="M${i-6} 286 q6 -4 12 0" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".6"/>`:a=`<ellipse cx="${i+2}" cy="304" rx="16" ry="7" fill="var(--shoe)" ${D(2.6)}/>`;s+=l5(o,e,a,i)}return`<g data-layer="shoes">${s}</g>`}const zf=new Set(["cap","beanie","sunhat"]),d5=new Set(["catears","earmuffs"]);function Sf(e){return e==="afro"?28:e==="topbun"?20:e==="puffs"||e==="coily"?16:e==="buns"||e==="curlybob"?12:e==="long"||e==="wavy"||e==="wavybob"?8:0}function Lo(e,t,n){if(!zf.has(t)&&!d5.has(t))return n;const s=Sf(e);return s?`<g data-hat="${t}" transform="translate(0 ${$(-s)})">${n}</g>`:n}function p5(e,t,n){let s="";for(let l=0;l<n.length;l++)zf.has(n[l])&&(s=n[l]);if(!s)return"";const o=Sf(t),i=(s==="beanie"?58:s==="cap"?64:62)-o,a=Math.min(70,i),r=t==="afro"||t==="puffs"||t==="coily"?92:78;return`<mask id="${e}hm" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" data-brim="${$(a)}"><rect x="-30" y="-50" width="260" height="420" fill="#fff"/><rect x="${$(100-r)}" y="-50" width="${$(r*2)}" height="${$(a+50)}" fill="#000"/></mask>`}function qr(e,t,n){return`<g transform="translate(${e} ${t}) scale(${n})"><path d="M0 0 C-8 -14 -30 -14 -28 0 C-30 14 -8 14 0 0 Z" fill="var(--acc)" ${D(2.6)}/><path d="M0 0 C8 -14 30 -14 28 0 C30 14 8 14 0 0 Z" fill="var(--acc)" ${D(2.6)}/><rect x="-6" y="-7" width="12" height="14" rx="4" fill="var(--acc2)" ${D(2.2)}/></g>`}function f5(e){return`<g data-layer="accessory">${e.acc.map(n=>n==="glasses"?'<circle cx="76" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="124" cy="113" r="18" fill="#fff" opacity=".12"/><circle cx="76" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><circle cx="124" cy="113" r="18" fill="none" stroke="var(--frame)" stroke-width="3.4"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3.2"/><path d="M58 108 L42 104 M142 108 L158 104" stroke="var(--frame)" stroke-width="3.2" stroke-linecap="round"/>':n==="square"?'<rect x="58" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><rect x="108" y="98" width="34" height="28" rx="6" fill="#fff" opacity=".1" stroke="var(--frame)" stroke-width="3.4"/><path d="M92 112 H108" stroke="var(--frame)" stroke-width="3.2"/>':n==="sunnies"?'<path d="M56 104 H94 Q96 122 76 122 Q56 122 56 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M106 104 H144 Q146 122 124 122 Q104 122 106 104 Z" fill="#3a2a40" opacity=".72" stroke="var(--frame)" stroke-width="3"/><path d="M94 110 H106" stroke="var(--frame)" stroke-width="3"/>':n==="bow"?qr(100,78,.7):n==="bigbow"?qr(100,70,1.15):n==="headband"?`<path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="${lo}" stroke-width="12" stroke-linecap="round"/><path d="M40 96 Q42 40 100 34 Q158 40 160 96" fill="none" stroke="var(--acc)" stroke-width="7" stroke-linecap="round"/>${qr(100,32,.85)}`:n==="flower"?`<g transform="translate(138 78)">${[0,60,120,180,240,300].map(s=>`<ellipse cx="0" cy="-8" rx="5" ry="8" fill="var(--acc)" ${D(1.6)} transform="rotate(${s})"/>`).join("")}<circle r="4.5" fill="var(--acc2)" ${D(1.6)}/></g>`:n==="cap"?Lo(e.hair,"cap",`<path d="M54 64 Q56 20 100 16 Q144 20 146 64 Q128 54 100 56 Q72 54 54 64 Z" fill="var(--acc)" ${D(3)}/><path d="M48 56 Q100 66 152 56 L156 62 Q100 70 44 62 Z" fill="var(--acc)" ${D(3)}/><circle cx="100" cy="18" r="4.5" fill="#fff" ${D(2)}/>`):n==="beanie"?Lo(e.hair,"beanie",`<path d="M50 66 Q48 14 100 8 Q152 14 150 66 Q128 56 100 58 Q72 56 50 66 Z" fill="var(--acc)" ${D(3)}/><path d="M50 58 H150" stroke="var(--acc2)" stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="8" r="7" fill="var(--acc2)" ${D(2.4)}/>`):n==="sunhat"?Lo(e.hair,"sunhat",`<path d="M66 56 Q68 22 100 18 Q132 22 134 56 Q118 48 100 50 Q82 48 66 56 Z" fill="var(--acc)" ${D(3)}/><path d="M18 56 Q100 68 182 56 Q170 64 100 66 Q30 64 18 56 Z" fill="var(--acc)" ${D(3)}/><path d="M72 46 Q100 38 128 46" fill="none" stroke="var(--acc2)" stroke-width="4"/>`):n==="catears"?Lo(e.hair,"catears",`<path d="M58 62 L70 18 L86 60 Z" fill="var(--acc)" ${D(2.6)}/><path d="M114 60 L130 18 L142 62 Z" fill="var(--acc)" ${D(2.6)}/><path d="M64 54 L72 30 L80 52 Z" fill="var(--acc2)"/><path d="M120 52 L128 30 L136 54 Z" fill="var(--acc2)"/>`):n==="earmuffs"?Lo(e.hair,"earmuffs",`<path d="M44 68 Q48 26 100 22 Q152 26 156 68" fill="none" stroke="var(--acc)" stroke-width="6"/><circle cx="34" cy="86" r="14" fill="var(--acc)" ${D(2.8)}/><circle cx="166" cy="86" r="14" fill="var(--acc)" ${D(2.8)}/><circle cx="34" cy="86" r="6" fill="var(--acc2)"/><circle cx="166" cy="86" r="6" fill="var(--acc2)"/>`):"").join("")}</g>`}const g5=[{hip:1.5,head:4,armL:3,armR:-2,legL:0,legR:-3,legLLift:0,legRLift:0},{hip:-2,head:-5,armL:1,armR:-7,legL:4,legR:0,legLLift:2,legRLift:0},{hip:0,head:3,armL:2,armR:-2,legL:0,legR:0,legLLift:0,legRLift:0},{hip:-1.5,head:-4,armL:4,armR:-1,legL:5,legR:0,legLLift:3,legRLift:0}],h5={puffs:0,afro:0,pony:1,sidepony:1,pigtails:1,halfup:1,braids:2,boxbraids:2,locs:2,sidebraid:2,crown:2,buns:3,topbun:3,lowbun:3};function vc(e){const t=e.hair||"buns";let n=h5[t];if(n===void 0){let s=0;for(let o=0;o<t.length;o++)s=(s+t.charCodeAt(o))%4;n=s}return g5[n]}function u5(e){const t=(n,s,o,i,a)=>{const r=$l(n,s,o,i,a),l=$l(r.x,r.y,100,238,e.hip);return{x:l.x/2,y:l.y/2}};return{left:t(ws.l[0],ws.l[1],rn.l[0],rn.l[1],e.armL),right:t(ws.r[0],ws.r[1],rn.r[0],rn.r[1],e.armR)}}function m5(e){const t=$l(100,244,100,238,e.hip);return Math.round(t.y/2*10)/10}function kc(e){const t=parseInt(e.slice(1),16);return(t>>16&255)+(t>>8&255)+(t&255)}function y5(e){const t=No(e,.32);return kc(t)<80?"#5a3a2c":t}function w5(e){return kc(e)<140?"#3b2340":No(e,.12)}let Fd=0;function b5(){return Fd+=1,"a"+Fd.toString(36)}function ms(e,t){return t.hip?`<g transform="rotate(${$(t.hip)} 100 238)">${e}</g>`:e}function Eo(e,t,n=!1){const s=t.head?`<g transform="rotate(${$(t.head)} 100 158)">${e}</g>`:e;return ms(`<g${n?' class="dollhead" data-dollhead="1"':' class="dollhead"'}>${s}</g>`,t)}function v5(e,t,n){let s=`<defs><radialGradient id="${e}b"><stop offset="0" style="stop-color:var(--blush)" stop-opacity=".62"/><stop offset=".55" style="stop-color:var(--blush)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--blush)" stop-opacity="0"/></radialGradient>`;return s+=`<radialGradient id="${e}s"><stop offset="0" stop-color="#3a1d3c" stop-opacity=".3"/><stop offset=".6" stop-color="#3a1d3c" stop-opacity=".12"/><stop offset="1" stop-color="#3a1d3c" stop-opacity="0"/></radialGradient>`,s+=`<radialGradient id="${e}k" cx=".42" cy=".36" r=".75"><stop offset=".55" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".16"/></radialGradient>`,t&&(s+=`<linearGradient id="${e}i" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f1020" stop-opacity=".62"/><stop offset=".5" stop-color="#1f1020" stop-opacity=".05"/><stop offset=".62" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".55"/></linearGradient>`,s+=`<linearGradient id="${e}c" gradientUnits="userSpaceOnUse" x1="58" y1="0" x2="146" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".26"/><stop offset=".32" stop-color="#fff" stop-opacity="0"/><stop offset=".62" stop-color="#3a1d3c" stop-opacity="0"/><stop offset="1" stop-color="#3a1d3c" stop-opacity=".2"/></linearGradient>`,s+=`<radialGradient id="${e}h" cx=".38" cy=".28" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".14"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#1f1020" stop-opacity=".28"/></radialGradient>`),s+n+"</defs>"}function jd(e){const t=e==="l"?-1:1,n=rn[e][0],s=rn[e][1],o=ws[e][0],i=ws[e][1],a=o-t,r=i-7,l=-t;let c=`<path d="${xl([n,s],[a,r],18,13,-3*t)}" fill="var(--skin)" ${D(3)}/>`;return c+=`<path class="hand" d="M${$(o-8)} ${$(i-4)} Q${$(o-8)} ${$(i-10)} ${$(o)} ${$(i-10)} Q${$(o+8)} ${$(i-10)} ${$(o+8)} ${$(i-3)} Q${$(o+8.5)} ${$(i+9)} ${$(o)} ${$(i+9.5)} Q${$(o-8.5)} ${$(i+9)} ${$(o-8)} ${$(i-4)} Z" fill="var(--skin)" ${D(2.8)}/>`,c+=`<ellipse cx="${$(o+7*l)}" cy="${$(i-1)}" rx="3.4" ry="5" fill="var(--skin)" ${D(2.4)} transform="rotate(${-20*l} ${$(o+7*l)} ${$(i-1)})"/>`,c+=`<path d="M${$(o-3*l)} ${$(i+3)} v4 M${$(o+.5*l)} ${$(i+3.5)} v4" stroke="var(--line)" stroke-width="1.5" stroke-linecap="round" opacity=".45"/>`,c+=`<ellipse cx="${$(o-3*l)}" cy="${$(i-5)}" rx="3" ry="1.8" fill="#fff" opacity=".35"/>`,c}function Gd(e){const t=e==="l"?-1:1,n=e==="l"?88:112;let s=`<path d="${xl([n,234],[n+t,294],21,15,1.5*t)}" fill="var(--skin)" ${D(3)}/>`;return s+=`<path d="${xl([n+5*t,244],[n+5*t,290],6,4)}" ${at}/>`,s+=`<ellipse cx="${$(n+.5*t)}" cy="268" rx="4.5" ry="2.6" fill="#3a1d3c" opacity=".12"/>`,s+=`<path d="M${n-4} 265 q4 -2.5 8 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".35"/>`,s}function Yd(e,t,n,s,o,i){const a=n?-1:1,r=o==="big"||o==="bright"?1.08:o==="soft"?.94:1,l=(y,u)=>`${$(e+y*r)} ${$(t+u*r)}`,c=13.5*r,d=17*r;let f="";if(i&&o!=="soft"){const y=[.35,.95,1.57,2.2,2.8];for(let u=0;u<y.length;u++){const k=y[u];f+=`<path d="M${$(e+5.5*Math.cos(k)*r)} ${$(t+(4+6.5*Math.sin(k))*r)} L${$(e+11.5*Math.cos(k)*r)} ${$(t+(2+14*Math.sin(k))*r)}" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity=".28"/>`}}const g=o==="soft"?2:2.6,h=o==="soft"?"":`<path d="M${l(-16*a,-8)} q${$(-6*a*r)} -2 ${$(-9*a*r)} ${$(-9*r)} M${l(-17*a,-2)} q${$(-6*a*r)} ${$(-.5*r)} ${$(-10*a*r)} ${$(-5*r)} M${l(-12*a,-15)} q${$(-3*a*r)} ${$(-4*r)} ${$(-4*a*r)} ${$(-9*r)}" fill="none" stroke="var(--lash)" stroke-width="2.2" stroke-linecap="round"/>`,m=o==="sparkle"||o==="bright"?`<path d="M${l(-9*a,-8)} l.7 1.6 1.6 .7 -1.6 .7 -.7 1.6 -.7 -1.6 -1.6 -.7 1.6 -.7 Z" fill="#fff" opacity=".9"/>`:"",b=i?`<ellipse cx="${e}" cy="${$(t+r)}" rx="${$(c)}" ry="${$(d)}" fill="url(#${s}i)"/>`:"",_=o==="sleepy"?`<path d="M${l(-17,-4)} Q${e} ${$(t+r)} ${l(17,-4)} L${l(18,-16)} Q${e} ${$(t-20*r)} ${l(-18,-16)} Z" fill="var(--skin)"/>`:"";return`<path d="M${l(-16,-2)} Q${l(-16,-20)} ${l(0,-20)} Q${l(16,-20)} ${l(16,-2)} Q${l(16,19)} ${l(0,19)} Q${l(-16,19)} ${l(-16,-2)} Z" fill="#fff"/><path d="M${l(-15,-4)} Q${e} ${$(t-21*r)} ${l(15,-4)} Q${e} ${$(t-14*r)} ${l(-15,-4)} Z" fill="#3a1d3c" opacity=".12"/><ellipse data-iris="1" cx="${e}" cy="${$(t+r)}" rx="${$(c)}" ry="${$(d)}" fill="var(--eye)"/>${b}${f}<ellipse cx="${e}" cy="${$(t+3*r)}" rx="${$(7*r)}" ry="${$(9*r)}" fill="#1f1020" opacity=".8"/><ellipse cx="${e}" cy="${$(t+r)}" rx="${$(11.3*r)}" ry="${$(14.8*r)}" fill="none" stroke="#fff" stroke-width="1" opacity=".22"/><ellipse cx="${e}" cy="${$(t+r)}" rx="${$(c)}" ry="${$(d)}" fill="none" stroke="#1f1020" stroke-width="2" opacity=".55"/><path d="M${l(-9,12)} Q${e} ${$(t+19.5*r)} ${l(9,12)} Q${e} ${$(t+15.5*r)} ${l(-9,12)} Z" fill="#fff" opacity=".5"/><ellipse cx="${$(e-6*a*r)}" cy="${$(t-6*r)}" rx="${$(5.8*r)}" ry="${$(6.8*r)}" fill="#fff" transform="rotate(${-15*a} ${$(e-6*a*r)} ${$(t-6*r)})"/><circle cx="${$(e+6*a*r)}" cy="${$(t+8*r)}" r="${$(2.8*r)}" fill="#fff"/><circle cx="${$(e-4*a*r)}" cy="${$(t+10*r)}" r="${$(1.3*r)}" fill="#fff" opacity=".85"/><path d="M${l(7*a,-10)} l${$(r)} ${$(2.4*r)} ${$(2.4*r)} ${$(r)} ${$(-2.4*r)} ${$(r)} ${$(-r)} ${$(2.4*r)} ${$(-r)} ${$(-2.4*r)} ${$(-2.4*r)} ${$(-r)} ${$(2.4*r)} ${$(-r)} Z" fill="#fff"/>`+m+_+`<path d="M${l(-17,-1)} Q${l(-16,-21)} ${l(0,-21)} Q${l(16,-21)} ${l(17,-3)} Q${l(14.5,-18.6)} ${l(0,-18.8)} Q${l(-14.5,-18.6)} ${l(-15.5,-1)} Z" fill="var(--lash)" stroke="var(--lash)" stroke-width="${g}" stroke-linejoin="round"/>`+h+`<path d="M${l(-11,-23)} Q${e} ${$(t-27*r)} ${l(11,-23)}" fill="none" stroke="var(--line)" stroke-width="1.3" stroke-linecap="round" opacity=".22"/><path d="M${l(-5,20.5)} Q${e} ${$(t+22*r)} ${l(5,20.5)}" fill="none" stroke="var(--lash)" stroke-width="1.3" stroke-linecap="round" opacity=".28"/>`}function k5(e,t,n,s=!1){const o=e.blush?`<ellipse cx="64" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><ellipse cx="136" cy="135" rx="16" ry="10" fill="url(#${t}b)"/><path d="M60 133 l3 -3 M66 134 l3 -3 M132 133 l3 -3 M138 134 l3 -3" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".75"/>`:"";let i="";if(e.freckles){const a=[[58,132],[64,136],[70,131],[130,131],[136,136],[142,132]];for(let r=0;r<a.length;r++)i+=`<circle cx="${a[r][0]}" cy="${a[r][1]}" r="1.5" fill="var(--freckle)" opacity=".7"/>`}return o+i+'<path data-brow="l" d="M64 86 Q74 80 85 84" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/><path data-brow="r" d="M115 84 Q126 80 136 86" fill="none" stroke="var(--brow)" stroke-width="3.2" stroke-linecap="round"/>'+Yd(76,112,!1,t,s?"sleepy":e.eyes,n)+Yd(124,112,!0,t,s?"sleepy":e.eyes,n)+'<path d="M98 131 q2 1.8 4 0" fill="none" stroke="var(--line)" stroke-width="2" stroke-linecap="round" opacity=".55"/><ellipse cx="101.5" cy="128.5" rx="1.6" ry="1" fill="#fff" opacity=".6"/><path d="M92 140 Q100 147.5 108 140" fill="none" stroke="var(--line)" stroke-width="2.8" stroke-linecap="round"/><path d="M96 142.6 Q100 145.4 104 142.6 Q100 144 96 142.6 Z" fill="#ff8fa8"/>'}function _5(e){const t="M40 102 Q38 38 100 38 Q162 38 160 102 Q160 140 132 153 Q116 160 100 160 Q84 160 68 153 Q40 140 40 102 Z";return`<ellipse cx="39" cy="114" rx="9" ry="11" fill="var(--skin)" ${D(3)}/><ellipse cx="161" cy="114" rx="9" ry="11" fill="var(--skin)" ${D(3)}/><ellipse cx="40" cy="115" rx="4" ry="6" ${_l}/><ellipse cx="160" cy="115" rx="4" ry="6" ${_l}/><path d="${t}" fill="var(--skin)" ${D(3.2)}/><path d="${t}" fill="url(#${e}k)"/>`}function $5(){return`<path d="M91 146 h18 v22 q-9 5 -18 0 Z" fill="var(--skin)" ${D(3)}/><path d="M91 150 h18 v9 q-9 6 -18 0 Z" ${_l}/><path d="M70 168 Q74 160 92 160 H108 Q126 160 130 168 L134 236 Q100 244 66 236 Z" fill="var(--skin)" ${D(3)}/>`}function x5(e,t){const n=Hs(e),s=t?.pose??vc(n),o=t?.rich!==!1,i=t?.uid??b5(),a=m5(s),r=n.shoesC,l=r.toLowerCase()==="#ffffff"?n.dress?n.dressC:n.topC:Vd(r,.28),c=n.dress?n.dressC:n.topC,d=kc(c)>700?"#8fdcc0":No(c,.18),f=["--line:#5a3d5c",`--skin:${n.skin}`,`--hair:${n.hairC}`,`--hair-shade:${y5(n.hairC)}`,`--brow:${w5(n.hairC)}`,`--eye:${n.eyeC}`,"--lash:#3b2340","--blush:#ff6f91",`--freckle:${No(n.skin,.35)}`,`--top:${c}`,`--top-trim:${d}`,`--bottom:${n.dress?n.dressC:n.bottomC}`,`--bottom-trim:${No(n.dress?n.dressC:n.bottomC,.16)}`,`--shoe:${r}`,`--shoe-trim:${l}`,"--sock:#ffffff",`--acc:${n.accC}`,`--acc2:${Vd(n.accC,.18)}`,"--frame:#6e4a5e"].join(";"),g=bs("leg","l",Gd("l"),s)+bs("leg","r",Gd("r"),s),h=bs("arm","l",`<g class="hand">${jd("l")}</g>`,s)+bs("arm","r",`<g class="hand">${jd("r")}</g>`,s),m=`<g data-layer="body">${g}${ms($5()+h,s)}${Eo(_5(i),s,!0)}</g>`,b=n.dress?r5(s,n,i,o,a):o5(s,n,i,o,a),_=`<g class="shadow"><ellipse cx="100" cy="308" rx="52" ry="9" fill="url(#${i}s)"/><ellipse cx="87" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/><ellipse cx="113" cy="307" rx="15" ry="3.6" fill="#3a1d3c" opacity=".16"/></g>`,y=p5(i,n.hair,n.acc),u=y?` mask="url(#${i}hm)"`:"",k=[`<g data-layer="hair-back">${Eo(`<g${u}>${n5(n.hair,i,o)}</g>`,s)}</g>`,m,c5(s,n),ms(i5(s,n,i,o),s),ms(b,s),ms(a5(s,n,i,o),s),`<g data-layer="face">${Eo(k5(n,i,o,t?.poseName==="lie"),s)}</g>`,`<g data-layer="hair-front">${Eo(`<g${u}>${s5(n.hair,i,o)}</g>`,s)}</g>`,Eo(f5(n),s)],x=t?.poseName==="sit"||t?.poseName==="lie"?t.poseName:null;t?.holding&&k.splice(6,0,ms(yi("under",!0,n.skin,x,c),s));const R=k.join(""),H=n.dress||n.top;return`<svg${t?.poseName?` data-pose="${t.poseName}"`:""} data-chibi="1" data-hair="${n.hair}" data-top="${H}" viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg" style="${f}">${v5(i,o,y)}${_}${R}</svg>`}function M5(e,t){const n=Hs(e),s=cr(t)??vc(n),o=t==="sit"||t==="lie"?t:null,i=n.dress?n.dressC:n.topC;return`<svg viewBox="0 0 200 320" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">${ms(yi("over",!0,n.skin,o,i),s)}</svg>`}function _c(){try{return typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(&)")}catch{return!1}}function bi(e,t,n){const s=!!(t&&t.look2);e.classList.toggle("chibi",s);const o=s&&_c();e.classList.toggle("chibi-move",s&&(o||n)),e.classList.toggle("chibi-bob",s&&!o&&!n)}const Xe="#5a3d5c",ye=`stroke="${Xe}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`,L5=["little","kid","adult"],Ps={little:.78,kid:1,adult:1.28},Ao={left:{x:15,y:113},right:{x:85,y:113}};function fr(e,t){return e.look2?u5(t??vc(e.look2)):t?{left:{x:22,y:96},right:{x:78,y:96}}:Ao}function Pf(e,t){return e===1?`<path d="M62 16 L76 8 L76 26 Z M62 16 L50 6 L48 24 Z" fill="#ff7aa8" stroke="${Xe}" stroke-width="3" stroke-linejoin="round"/><circle cx="62" cy="16" r="5" fill="#ffd166" stroke="${Xe}" stroke-width="3"/>`:e===2?`<circle cx="40" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${Xe}" stroke-width="3"/><circle cx="60" cy="48" r="9" fill="#fff" fill-opacity=".35" stroke="${Xe}" stroke-width="3"/><path d="M49 48 h2" stroke="${Xe}" stroke-width="3"/>`:e===3?`<path d="M20 30 Q22 8 50 8 Q78 8 80 30 Z" fill="${t}" stroke="${Xe}" stroke-width="3.5" stroke-linejoin="round"/><path d="M60 28 Q84 26 92 32 Q80 36 60 34 Z" fill="${t}" stroke="${Xe}" stroke-width="3.5" stroke-linejoin="round"/><circle cx="50" cy="9" r="4" fill="#fff" stroke="${Xe}" stroke-width="3"/>`:""}function Ma(e,t,n){return n?e===1?`<path d="M20 40 Q16 86 30 92 L70 92 Q84 86 80 40 Z" fill="${t}" ${ye}/>`:e===2?`<circle cx="18" cy="34" r="12" fill="${t}" ${ye}/><circle cx="82" cy="34" r="12" fill="${t}" ${ye}/>`:e===3?`<circle cx="50" cy="8" r="13" fill="${t}" ${ye}/>`:"":e===3?`<path d="M22 42 Q20 14 50 12 Q80 14 78 42 Q66 26 50 30 Q34 26 22 42 Z" fill="${t}" ${ye}/>`:`<path d="M21 46 Q18 12 50 12 Q82 12 79 46 Q72 30 58 28 Q50 36 36 30 Q26 34 21 46 Z" fill="${t}" ${ye}/>`}function yt(e,t,n){const s=cr(t);return e.look2?x5(e.look2,{rich:_c(),pose:s??void 0,poseName:t||void 0,holding:n}):t==="sit"||t==="lie"?E5(e,t,n):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
  <ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${Ma(e.hairStyle,e.hair,!0)}
  <rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${Xe}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${Xe}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(12 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(-12 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${ye}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${ye}/>
  <circle cx="50" cy="44" r="30" fill="${e.skin}" ${ye}/>
  ${Ma(e.hairStyle,e.hair,!1)}
  <ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${Xe}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${Xe}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${ye} fill="none"/>
  ${Pf(e.acc??0,e.shirt)}
  <circle class="hand hang" cx="${Ao.left.x}" cy="${Ao.left.y}" r="6" fill="${e.skin}" ${ye}/><circle class="hand hang" cx="${Ao.right.x}" cy="${Ao.right.y}" r="6" fill="${e.skin}" ${ye}/>
  ${n?yi("under",!1,lr(e.skin),null):""}
</svg>`}function Tf(e,t){const n=t==="sit"||t==="lie"?t:null;return n==="lie"?"":e.look2?M5(e.look2,t):`<svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${yi("over",!1,lr(e.skin),n)}</svg>`}function E5(e,t,n){const s=t==="sit"?`<rect class="leg" x="34" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${ye} transform="rotate(-68 40 112)"/>
  <rect class="leg" x="53" y="108" width="13" height="28" rx="6" fill="${e.pants}" ${ye} transform="rotate(68 60 112)"/>`:`<rect class="leg" x="34" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>
  <rect class="leg" x="53" y="118" width="13" height="34" rx="6" fill="${e.pants}" ${ye}/>`,o=t==="lie"?`<path d="M34 48 Q40 52 46 48" fill="none" ${ye}/><path d="M54 48 Q60 52 66 48" fill="none" ${ye}/>`:`<ellipse cx="40" cy="48" rx="3.5" ry="4.5" fill="${Xe}"/><ellipse cx="60" cy="48" rx="3.5" ry="4.5" fill="${Xe}"/>
  <circle cx="41" cy="46.5" r="1.3" fill="#fff"/><circle cx="61" cy="46.5" r="1.3" fill="#fff"/>`,i=`<ellipse class="shadow" cx="50" cy="156" rx="28" ry="4" fill="#000" opacity=".12"/>
  ${Ma(e.hairStyle,e.hair,!0)}
  ${s}
  <ellipse class="foot" cx="40" cy="152" rx="10" ry="5" fill="${Xe}"/><ellipse class="foot" cx="60" cy="152" rx="10" ry="5" fill="${Xe}"/>
  <rect class="arm hang" x="16" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(28 22 82)"/>
  <rect class="arm hang" x="72" y="80" width="12" height="34" rx="6" fill="${e.skin}" ${ye} transform="rotate(-28 78 82)"/>
  <path class="shirt" data-hem="126" d="M28 82 Q28 74 40 74 H60 Q72 74 72 82 L74 126 H26 Z" fill="${e.shirt}" ${ye}/>
  <circle cx="50" cy="96" r="5" fill="#fff" opacity=".7"/>
  <rect x="44" y="64" width="12" height="12" fill="${e.skin}" ${ye}/>
  <g class="dollhead">
  <circle class="dollhead" data-dollhead="1" cx="50" cy="44" r="30" fill="${e.skin}" ${ye}/>
  ${Ma(e.hairStyle,e.hair,!1)}
  ${o}
  <ellipse cx="32" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/><ellipse cx="68" cy="58" rx="5" ry="3" fill="#ff8fab" opacity=".6"/>
  <path d="M44 60 Q50 66 56 60" ${ye} fill="none"/>
  ${Pf(e.acc??0,e.shirt)}
  </g>
  <circle class="hand hang" cx="22" cy="96" r="6" fill="${e.skin}" ${ye}/><circle class="hand hang" cx="78" cy="96" r="6" fill="${e.skin}" ${ye}/>
  ${n?yi("under",!1,lr(e.skin),t):""}`;return`<svg data-pose="${t}" viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">${i}</svg>`}const C5=[{id:"hair",name:"Hair"},{id:"face",name:"Face"},{id:"clothes",name:"Clothes"},{id:"shoes",name:"Shoes"},{id:"extras",name:"Extras"}],z5={short:"Short",pixie:"Pixie",coily:"Coily",afro:"Afro",bangs:"Bangs",bob:"Bob",wavybob:"Wavy bob",curlybob:"Curly bob",sidebangs:"Side bangs",long:"Long",wavy:"Wavy",braids:"Braids",boxbraids:"Box braids",locs:"Locs",sidebraid:"Side braid",crown:"Crown",pony:"Ponytail",sidepony:"Side pony",pigtails:"Pigtails",halfup:"Half-up",buns:"Buns",puffs:"Puffs",topbun:"Top bun",lowbun:"Low bun"},S5={classic:"Tee",stripes:"Stripes",hoodie:"Hoodie",sweater:"Sweater",tank:"Tank",puff:"Puff",ruffle:"Ruffle",button:"Buttons",jersey:"Jersey",cardigan:"Cardigan",bib:"Bib",raincoat:"Raincoat"},P5={pants:"Pants",jeans:"Jeans",shorts:"Shorts",skirt:"Skirt",tutu:"Tutu",leggings:"Leggings",overalls:"Overalls",joggers:"Joggers"},T5={"":"No dress",twirl:"Twirl",sundress:"Sundress",party:"Party",pinafore:"Pinafore",jumper:"Jumper",ballet:"Ballet",nightgown:"Nightgown",raindress:"Rain"},B5={classic:"Classic",sneakers:"Sneakers",lightup:"Light-up",boots:"Boots",rainboots:"Rain boots",sandals:"Sandals",maryjanes:"Mary Janes",slippers:"Slippers"},R5={round:"Round",big:"Big",sleepy:"Sleepy",sparkle:"Sparkle",soft:"Soft",bright:"Bright"},A5={glasses:"Glasses",square:"Square",sunnies:"Sunnies",bow:"Bow",bigbow:"Big bow",headband:"Headband",flower:"Flower",cap:"Cap",beanie:"Beanie",sunhat:"Sun hat",catears:"Cat ears",earmuffs:"Earmuffs"},D5={little:"Little",kid:"Kid",adult:"Grown-up"};let js="hair";function mn(e,t,n,s){return`<button type="button" class="avOpt${s?" on":""}" data-act="${e}" data-v="${t}">${n}</button>`}function Xi(e,t,n){return`<button type="button" class="avSw${n?" on":""}" style="background:${t}" data-act="${e}" data-v="${t}" aria-label="Color"></button>`}function fs(e){return`<div class="avGrid">${e}</div>`}function Co(e,t){return`<div class="avColors">${Ct.map(n=>Xi(e,n,n===t)).join("")}</div>`}function I5(e,t,n,s){const o=Hs(e.look2),i=e.id==="__me",a=js==="hair"?`<h3>Style</h3>${fs(Fa.map(c=>mn("av-hair",c,z5[c],o.hair===c)).join(""))}<h3>Color</h3><div class="avColors">${Na.map(c=>Xi("av-hairC",c,o.hairC===c)).join("")}</div>`:js==="face"?`<h3>Skin</h3><div class="avColors">${Za.map(c=>Xi("av-skin",c,o.skin===c)).join("")}</div><h3>Eyes</h3>${fs(Xa.map(c=>mn("av-eyes",c,R5[c],o.eyes===c)).join(""))}<h3>Eye color</h3><div class="avColors">${Yl.map(c=>Xi("av-eyeC",c,o.eyeC===c)).join("")}</div><div class="avToggles">${mn("av-freckles",o.freckles?"0":"1","Freckles",o.freckles)}${mn("av-blush",o.blush?"0":"1","Blush",o.blush)}</div>`:js==="clothes"?`<h3>Top</h3>${fs(ja.map(c=>mn("av-top",c,S5[c],!o.dress&&o.top===c)).join(""))}${Co("av-topC",o.topC)}<h3>Bottom</h3>${fs(Ga.map(c=>mn("av-bottom",c,P5[c],!o.dress&&o.bottom===c)).join(""))}${Co("av-bottomC",o.bottomC)}<h3>Dress</h3>${fs(Ya.map(c=>mn("av-dress",c,T5[c],o.dress===c)).join(""))}${Co("av-dressC",o.dressC)}`:js==="shoes"?`<h3>Shoes</h3>${fs(Ka.map(c=>mn("av-shoes",c,B5[c],o.shoes===c)).join(""))}${Co("av-shoesC",o.shoesC)}`:`<h3>Extras</h3><p class="avHint">Pick up to two</p>${fs(Js.map(c=>mn("av-acc",c,A5[c],o.acc.indexOf(c)>=0)).join(""))}${Co("av-accC",o.accC)}`,r=L5.map(c=>`<button type="button" class="avOpt sz${c===e.size?" on":""}" data-act="size" data-v="${c}">${D5[c]}</button>`).join(""),l=i?'<div class="meNote">This is you!</div>':`<button type="button" class="del${n?" sure":""}" data-act="delc">${s}<span>${n?"Tap again":""}</span></button>`;return`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${t}<div class="dress avLook"><div class="avStageWrap"><div class="avStage chibi-move">${yt(e)}</div>${l}<div class="avSizes">${r}</div></div><div class="avSide"><div class="avTabs">${C5.map(c=>`<button type="button" class="avTab${c.id===js?" on":""}" data-act="av-tab" data-v="${c.id}">${c.name}</button>`).join("")}</div><div class="avPane">${a}</div><div class="avBar"><button type="button" class="avSurprise" data-act="av-surprise">🎲 Surprise me</button><button type="button" class="avDone" data-act="close">Done</button></div></div></div>`}function H5(e,t,n){if(t==="av-tab")return(n==="hair"||n==="face"||n==="clothes"||n==="shoes"||n==="extras")&&(js=n),null;const s=Hs(e);if(t==="av-hair"&&Fa.indexOf(n)>=0)return{...s,hair:n};if(t==="av-hairC")return{...s,hairC:n};if(t==="av-skin")return{...s,skin:n};if(t==="av-eyes"&&Xa.indexOf(n)>=0)return{...s,eyes:n};if(t==="av-eyeC")return{...s,eyeC:n};if(t==="av-freckles")return{...s,freckles:n==="1"};if(t==="av-blush")return{...s,blush:n==="1"};if(t==="av-top"&&ja.indexOf(n)>=0)return{...s,top:n,dress:""};if(t==="av-topC")return{...s,topC:n};if(t==="av-bottom"&&Ga.indexOf(n)>=0)return{...s,bottom:n,dress:""};if(t==="av-bottomC")return{...s,bottomC:n};if(t==="av-dress"&&Ya.indexOf(n)>=0)return{...s,dress:n};if(t==="av-dressC")return{...s,dressC:n};if(t==="av-shoes"&&Ka.indexOf(n)>=0)return{...s,shoes:n};if(t==="av-shoesC")return{...s,shoesC:n};if(t==="av-accC")return{...s,accC:n};if(t==="av-acc"&&Js.indexOf(n)>=0){const o=n,i=s.acc.slice(),a=i.indexOf(o);if(a>=0)i.splice(a,1);else{const r=pa(o),l=i.filter(c=>pa(c)!==r);return l.push(o),{...s,acc:l.slice(0,2)}}return{...s,acc:i}}return null}function O5(){try{return typeof navigator<"u"&&navigator.webdriver&&!window.__forceAvatarIntro?!1:localStorage.getItem(qt("avatar-intro"))!=="1"}catch{return!1}}function W5(){try{localStorage.setItem(qt("avatar-intro"),"1")}catch{}}const Ji="#5a3d5c";function Zr(e,t,n,s,o){return`<path class="${e}" d="${t}" fill="none" stroke="${Ji}" stroke-width="${s}" stroke-linecap="round"/><path class="${e} cloth" d="${t}" fill="none" stroke="${n}" stroke-width="${o}" stroke-linecap="round"/>`}function U5(e){const t=Hs(e),n=t.skin,s=t.dress!=="",o=s||t.bottom==="skirt"||t.bottom==="tutu",i=o?n:t.bottomC,a=t.shoesC,r=s||t.bottom==="skirt"||t.bottom==="tutu";let l="";if(r){const g=s?t.dressC:t.bottomC;l+=`<path class="dress" d="M75 46 L89 46 L91 53 L73 53 Z" fill="${g}" stroke="${Ji}" stroke-width="1.1" stroke-linejoin="round"/>`}l+=Zr("thigh","M76 44 Q83 48 88 54",i,6.2,4.8),l+=`<circle class="knee" cx="88" cy="56" r="2.3" fill="${i}" stroke="${Ji}" stroke-width="1.1"/>`;const c=t.shoes==="boots"||t.shoes==="rainboots";l+=Zr("shin",c?"M88 58 Q90 64 91 68":"M88 58 Q90 65 91 70",o?n:i,5.8,4.4),!c&&(t.shoes==="sneakers"||t.shoes==="maryjanes"||t.shoes==="lightup")&&(l+=Zr("shin","M90 66 Q90.6 68 91 70","#ffffff",5.4,4));const d=t.shoes==="sandals"?n:a,f=c?66:69;return l+=`<path class="shoe" d="M90 ${f} Q90 ${f-2} 94 ${f-2} Q99 ${f-2} 100 ${f+1} Q100 ${f+5} 95 ${f+5} Q90 ${f+5} 90 ${f+2} Z" fill="${d}" stroke="${Ji}" stroke-width="1.1" stroke-linejoin="round"/>`,t.shoes==="sandals"&&(l+=`<path d="M90 ${f+5} L100 ${f+5}" stroke="${a}" stroke-width="1.3" stroke-linecap="round"/>`,l+=`<path d="M93 ${f} L97 ${f+3}" stroke="${a}" stroke-width="1.1" stroke-linecap="round"/>`),`<svg class="rideleg" viewBox="0 0 160 130">${l}</svg>`}const V5=/rug|lamp|light|plant|curtain|clock|window|lantern/;function Q5(e){if(e.cat==="plants")return!0;const t=`${e.name} ${e.kind??""}`.toLowerCase();return V5.test(t)}const Bf=new Set(["pack:ring-light","pack:desk-lamp",...cu]);function Rf(e){const t=e.rooms??[];return t.includes("backyard")&&!t.includes("any")}function q5(e,t){if(t==="nursery"&&e.kind&&Bf.has(e.kind))return!1;if(t==="backyard")return Rf(e);if(t==="all"||!t)return!0;const n=e.rooms;return!n||n.length===0||n.includes(t)?!0:n.includes("any")?e.cat==="decor"||e.cat==="furniture"?Q5(e):!0:!1}function Z5(e,t,n,s,o){return e.secret&&!(o&&o.has(e.secret))||!s&&n==="backyard"&&!Rf(e)||n==="nursery"&&e.kind&&Bf.has(e.kind)?!1:t.startsWith("pack:")?e.pack===t.slice(5):e.cat!==t?!1:q5(e,s?"all":n)}function N5(e){const t=e.scale;let n=0;e.overflowR>1&&e.overflowL>1?n=-e.overflowL:e.overflowR>1?n=e.overflowR:e.overflowL>1&&(n=-e.overflowL);const s=e.cam+n/t,o=Math.max(0,Math.min(e.maxCam,s)),i=s-o,a=e.nudgeX&&Math.abs(i)>.5?e.kidX-i:e.kidX;return{cam:o,kidX:a}}function F5(e){const t=e.trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function j5(e,t=3){const n=[...e].sort((r,l)=>r.x-l.x||r.id.localeCompare(l.id)),s=[],o=[],i=(r,l,c)=>s.some(d=>d.lane===c&&Math.abs(d.x-r)<(d.w+l)/2+8),a=[];for(const r of n){let l=-1;for(let c=0;c<t;c++)if(!i(r.x,r.w,c)){l=c;break}l<0?a.push(r):(s.push({x:r.x,w:r.w,lane:l}),o.push({id:r.id,lane:l,initials:!1}))}for(const r of a){const l=Math.min(r.w,44);let c=0;for(let d=0;d<t;d++)if(!i(r.x,l,d)){c=d;break}s.push({x:r.x,w:l,lane:c}),o.push({id:r.id,lane:c,initials:!0})}return o}let G5=0;function Af(e=document){const t=[...e.querySelectorAll(".nametag")].filter(o=>{const i=o.getBoundingClientRect();return i.width>2&&i.height>2});if(!t.length)return;const n=t.map(o=>{o.dataset.tagId||(o.dataset.tagId="tg"+(++G5).toString(36)),o.dataset.full||(o.dataset.full=(o.textContent||"").trim()),o.classList.contains("is-initials")||(o.dataset.fullW=String(o.getBoundingClientRect().width));const i=o.getBoundingClientRect(),a=Number(o.dataset.fullW)||i.width;return{id:o.dataset.tagId,x:i.left+i.width/2,w:a}}),s=new Map(j5(n).map(o=>[o.id,o]));for(const o of t){const i=s.get(o.dataset.tagId||"");if(!i)continue;const a=o.dataset.full||"",r=i.initials?F5(a):a;o.textContent!==r&&(o.textContent=r),o.classList.toggle("is-initials",i.initials),o.style.setProperty("--tag-lane",String(i.lane))}}function gr(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Y5(e){!e||gr()||(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),window.setTimeout(()=>e.classList.remove("wiggle"),480))}function K5(){document.addEventListener("pointerup",e=>{if(gr())return;const t=e.target?.closest("button");t&&(t.classList.remove("spring"),t.offsetWidth,t.classList.add("spring"))},!0)}const Df="#5a3d5c",vt=`stroke="${Df}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`,X5={living:"#ff8fab",bedroom:"#c9a0dc",kitchen:"#8fd6a6",salon:"#f0a0d8",nursery:"#9ad7f5",bathroom:"#7ec8d6",backyard:"#80ed99"};function J5(e){const t=X5[e]??"#ffb3c6";return`<div class="sceneWin builtin-window" aria-hidden="true"><svg viewBox="0 0 160 180">
    <path d="M18 20 H142 V150 H18 Z" fill="#fff6ea" ${vt}/>
    <path d="M28 30 H132 V118 H28 Z" fill="#b9e3ff" ${vt}/>
    <path d="M80 30 V118 M28 74 H132" ${vt} stroke-width="3"/>
    <circle cx="48" cy="52" r="10" fill="#fff" opacity=".85"/>
    <ellipse cx="108" cy="48" rx="16" ry="8" fill="#fff" opacity=".8"/>
    <path d="M40 118 Q58 96 70 118 Q90 100 112 118" fill="#7dce8a" stroke="${Df}" stroke-width="3"/>
    <rect x="96" y="86" width="8" height="32" rx="3" fill="#6b4a32" ${vt} stroke-width="2"/>
    <circle cx="100" cy="80" r="12" fill="#5cc985" ${vt} stroke-width="2"/>
    <path d="M8 16 Q6 80 16 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <path d="M152 16 Q154 80 144 154" fill="none" stroke="${t}" stroke-width="16" stroke-linecap="round"/>
    <rect x="46" y="146" width="68" height="12" rx="4" fill="#ffe7c2" ${vt}/>
  </svg></div>`}function ex(){return`<div class="sceneRug" aria-hidden="true"><svg viewBox="0 0 200 80">
    <ellipse cx="100" cy="48" rx="92" ry="24" fill="#ffc8dd" ${vt}/>
    <ellipse cx="100" cy="48" rx="64" ry="15" fill="#bde0fe" ${vt} stroke-width="3"/>
    <ellipse cx="100" cy="48" rx="28" ry="7" fill="#fff6ea"/>
  </svg></div>
  <div class="sceneLamp" aria-hidden="true"><svg viewBox="0 0 80 160">
    <path d="M18 52 L30 8 H50 L62 52 Z" fill="#ffd166" ${vt}/>
    <rect x="36" y="52" width="8" height="78" rx="4" fill="#c9a0dc" ${vt}/>
    <ellipse cx="40" cy="136" rx="26" ry="8" fill="#b388d6" ${vt}/>
    <circle cx="34" cy="28" r="4" fill="#fff" opacity=".8"/>
  </svg></div>
  <div class="scenePlant" aria-hidden="true"><svg viewBox="0 0 90 140">
    <path d="M45 128 C45 90 18 78 20 48 C40 58 44 80 45 128" fill="#5cc985" ${vt}/>
    <path d="M45 128 C45 92 74 70 78 40 C58 54 50 82 45 128" fill="#80ed99" ${vt}/>
    <path d="M45 128 C40 96 28 88 22 70" fill="none" stroke="#3d9a62" stroke-width="3"/>
    <path d="M30 132 H62 L56 118 H36 Z" fill="#e07a5f" ${vt}/>
    <ellipse cx="46" cy="126" rx="16" ry="5" fill="#c4634a"/>
  </svg></div>`}function tx(e,t){return t==="backyard"?[]:[{id:e("rug"),kind:"rug",x:1152,y:540,flip:!1,z:0,scale:1},{id:e("lamp"),kind:"lamp",x:804,y:470,flip:!1,z:0,scale:1},{id:e("plant"),kind:"plant",x:1584,y:480,flip:!1,z:0,scale:1}]}let hs="",If=null;function nx(e){If=e,hs=""}function sx(e,t,n){const s=If?.(t,n);if(s!=null){const r="custom|"+t;if(r===hs&&e.childElementCount)return;hs=r,e.innerHTML=s,e.dataset.room=t;return}if(t==="backyard"){const r="yard|"+t;if(r===hs&&e.childElementCount)return;hs=r,e.innerHTML="",e.dataset.room=t;return}const o=n.length===0,i=n.some(r=>/window|curtain/i.test(r.kind)),a=t+(o?"|e":"")+(i?"|w":"");a===hs&&e.childElementCount||(hs=a,e.innerHTML=(i?"":J5(t))+(o?ex():""),e.dataset.room=t)}const Re="#5a3d5c",E=(e=4)=>`stroke="${Re}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`,vi=600,Kt=["#ff6b6b","#ffa94d","#ffd43b","#69db7c","#4dabf7","#b197fc"],an=(e,t,n=3)=>`<circle cx="${e}" cy="${t}" r="${n}" fill="${Re}"/><circle cx="${e+1}" cy="${t-1}" r="${n/3}" fill="#fff"/>`,ks=(e,t)=>`<ellipse cx="${e}" cy="${t}" rx="5" ry="3" fill="#ff9bb5" opacity=".75"/>`,ox=(e,t,n,s)=>Kt.map((o,i)=>`<path d="M${e-n+i*s} ${t} A${n-i*s} ${n-i*s} 0 0 1 ${e+n-i*s} ${t}" fill="none" stroke="${o}" stroke-width="${s}"/>`).join(""),ix=(e,t,n=1,s="#5cc985")=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-12" y="-10" width="24" height="70" rx="8" fill="#c99366" ${E()}/>
  <circle cx="0" cy="-60" r="58" fill="${s}" ${E()}/><circle cx="-30" cy="-40" r="34" fill="${s}" ${E()}/><circle cx="32" cy="-38" r="36" fill="${s}" ${E()}/></g>`,_n=(e,t,n=1)=>`<g transform="translate(${e} ${t}) scale(${n})"><rect x="-46" y="-50" width="92" height="50" rx="14" fill="#f5d27a" ${E()}/>
  <path d="M-30 -42 V-8 M0 -44 V-6 M30 -42 V-8" stroke="#d9a93f" stroke-width="4" stroke-linecap="round"/><path d="M-46 -26 H46" stroke="#c98a2e" stroke-width="5"/></g>`,ax=(e,t,n)=>{const s=Array.from({length:Math.floor((t-e)/70)+1},(o,i)=>`<rect x="${e+i*70-7}" y="${n-58}" width="14" height="64" rx="5" fill="#fff6e6" ${E(3)}/>`).join("");return`<rect x="${e}" y="${n-46}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${E(3)}/><rect x="${e}" y="${n-22}" width="${t-e}" height="11" rx="5" fill="#fff6e6" ${E(3)}/>${s}`};function rx(){const e=hi;return`<svg class="parkScene ranchScene" viewBox="0 0 ${e} ${vi}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="rcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c7e8ff"/><stop offset="1" stop-color="#fff4fb"/></linearGradient></defs>
  <rect width="${e}" height="440" fill="url(#rcSky)"/>
  <g opacity=".55">${ox(1900,430,620,26)}</g>
  ${[160,820,1500,2300,3e3].map((t,n)=>`<g transform="translate(${t} ${70+n%2*34})"><ellipse cx="0" cy="0" rx="70" ry="24" fill="#fff"/><ellipse cx="40" cy="-14" rx="40" ry="22" fill="#fff"/><ellipse cx="-36" cy="-8" rx="30" ry="18" fill="#fff"/></g>`).join("")}
  <g transform="translate(${e-200} 92)"><circle r="48" fill="#ffe066" ${E()}/>${an(-15,-6,4)}${an(13,-6,4)}<path d="M-14 12 Q0 24 14 12" fill="none" ${E(3)}/>${ks(-26,8)}${ks(26,8)}</g>
  <path d="M-50 370 Q600 230 1300 350 T2600 330 T${e+100} 360 V460 H-50 Z" fill="#b6f0c8"/>
  <rect x="0" y="410" width="${e}" height="190" fill="#a6e3a0"/><path d="M0 410 H${e}" ${E()}/>
  <path d="M0 566 Q900 530 1800 570 T${e} 552 V600 H0 Z" fill="#f2dcb8" opacity=".9"/>
  ${ix(3560,400,.8,"#4fbf7a")}
  <!-- entrance gate with a rainbow arch -->
  <g class="ranchSign"><g class="ranchSignArt"><rect x="40" y="290" width="24" height="210" rx="6" fill="#c99366" ${E()}/><rect x="196" y="290" width="24" height="210" rx="6" fill="#c99366" ${E()}/>
    <path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${Re}" stroke-width="44" stroke-linecap="round"/>
    ${Kt.map((t,n)=>`<path d="M18 312 A112 100 0 0 1 242 312" fill="none" stroke="${t}" stroke-width="${36-n*6}" stroke-linecap="round"/>`).join("")}
    <rect x="22" y="250" width="216" height="40" rx="14" fill="#fff6e6" ${E(3)}/><text x="130" y="277" text-anchor="middle" font-size="19" font-weight="900" fill="${Re}" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  <!-- red barn with rainbow trim and banner -->
  <g transform="translate(270 0)">
    <path d="M0 470 V250 L60 180 H270 L330 250 V470 Z" fill="#ef5b5b" ${E(5)}/>
    <path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${Re}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
    ${Kt.map((t,n)=>`<path d="M-10 254 L60 172 H270 L340 254" fill="none" stroke="${t}" stroke-width="3" transform="translate(0 ${-7+n*2.8})" stroke-linejoin="round"/>`).join("")}
    <rect x="115" y="215" width="100" height="56" rx="10" fill="#fff6e6" ${E(4)}/><path d="M115 215 L215 271 M215 215 L115 271" stroke="#ef5b5b" stroke-width="6"/>
    <rect x="95" y="330" width="140" height="140" rx="8" fill="#fff6e6" ${E(4)}/><rect x="108" y="342" width="56" height="128" fill="#d94848" ${E(3)}/><rect x="166" y="342" width="56" height="128" fill="#d94848" ${E(3)}/>
    <path d="M108 342 L164 470 M164 342 L108 470 M166 342 L222 470 M222 342 L166 470" stroke="#fff6e6" stroke-width="6"/>
    <g class="barnBanner" transform="translate(165 300)"><g class="ranchSignArt">${Kt.map((t,n)=>`<rect x="${-120+n*40}" y="-16" width="40" height="30" fill="${t}"/>`).join("")}<rect x="-120" y="-16" width="240" height="30" fill="none" ${E(3)}/>
      <text x="0" y="6" text-anchor="middle" font-size="18" font-weight="900" fill="#fff" stroke="${Re}" stroke-width="4" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g></g>
  </g>
  ${_n(640,560,.8)}${_n(1950,470,.7)}${_n(1880,470,.55)}${_n(3115,470,.7)}${_n(3115,425,.55)}
  <!-- the petting zoo moved into the barn: a sign by the barn door, sunflowers where the pen was -->
  ${Array.from({length:6},(t,n)=>{const s=1030+n*66,o=70+n%3*18;return`<g transform="translate(${s} 470)"><path d="M0 0 V-${o}" stroke="#40c057" stroke-width="6" stroke-linecap="round"/><ellipse cx="${n%2?9:-9}" cy="-${o/2}" rx="11" ry="5" fill="#69db7c" ${E(2.5)}/>${[0,45,90,135,180,225,270,315].map(i=>`<ellipse cx="${Math.cos(i*Math.PI/180)*14}" cy="${-o+Math.sin(i*Math.PI/180)*14}" rx="8" ry="5" transform="rotate(${i} ${Math.cos(i*Math.PI/180)*14} ${-o+Math.sin(i*Math.PI/180)*14})" fill="#ffd43b" ${E(2)}/>`).join("")}<circle cy="-${o}" r="10" fill="#a0522d" ${E(2.5)}/></g>`}).join("")}
  <!-- pond -->
  <ellipse cx="${gt.x}" cy="${gt.y}" rx="${gt.rx}" ry="${gt.ry}" fill="#8ecae6" ${E()}/><ellipse cx="${gt.x-15}" cy="${gt.y-6}" rx="70" ry="16" fill="#bde6f7"/>
  <!-- paddock fence + HORSES sign are their own depth layer (paddockFenceSVG) -->
  <!-- garden -->
  <rect x="3140" y="520" width="420" height="70" rx="20" fill="#b07d54" ${E()}/>
  <rect x="3260" y="430" width="160" height="40" rx="12" fill="#fff6e6" ${E(3)}/><text x="3340" y="458" text-anchor="middle" font-size="21" font-weight="900" fill="${Re}" font-family="Nunito, system-ui, sans-serif">GARDEN</text>
  <path d="M3340 470 V500" ${E(5)}/>
  </svg>`}function lx(){return`<svg class="fenceLayer" viewBox="0 0 ${hi} ${vi}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  ${ax(2400,3080,470)}
  <rect x="2640" y="380" width="180" height="40" rx="12" fill="#fff6e6" ${E(3)}/><text x="2730" y="408" text-anchor="middle" font-size="21" font-weight="900" fill="${Re}" font-family="Nunito, system-ui, sans-serif">HORSES</text>
  </svg>`}const Hf=[{name:"Goat",say:"Meh-eh-eh!",snd:"bleat"},{name:"Sheep",say:"Baa!",snd:"baa"},{name:"Piglet",say:"Oink oink!",snd:"oink"},{name:"Chicks",say:"Peep peep!",snd:"peep"},{name:"Bunny",say:"*wiggle wiggle*",snd:"squeak"},{name:"Cow",say:"Moooo!",snd:"moo"}],Ii=(e,t,n,s=94)=>e.map((o,i)=>`<rect class="leg ${i%2?"b":"a"}" x="${o}" y="${t}" width="9" height="${s-t}" rx="4" fill="${n}" ${E(3)}/>`).join("");function Cl(e){switch(e){case 0:return`<svg viewBox="0 0 120 100">${Ii([32,44,70,82],60,"#efe6dc")}<path class="tail" d="M24 50 l-8 -10" ${E(5)}/>
      <ellipse cx="58" cy="56" rx="34" ry="17" fill="#f4ede5" ${E()}/><g class="head"><path d="M86 30 l-6 -16 l10 10 Z M96 30 l2 -17 l5 13 Z" fill="#c9b8a8" ${E(3)}/>
      <ellipse cx="94" cy="40" rx="14" ry="16" fill="#f4ede5" ${E()}/><ellipse class="ear" cx="80" cy="36" rx="9" ry="4" fill="#e8d6c4" ${E(3)}/>${an(98,36)}<path d="M98 56 q2 8 6 0" fill="#e8d6c4" ${E(3)}/>${ks(102,46)}<circle cx="106" cy="44" r="2" fill="${Re}"/></g></svg>`;case 1:return`<svg viewBox="0 0 120 100">${Ii([36,48,70,80],62,"#5a4a5c")}
      ${[[40,50],[56,44],[72,48],[86,56],[70,64],[48,64],[34,60]].map(([t,n])=>`<circle cx="${t}" cy="${n}" r="15" fill="#fff" ${E(3)}/>`).join("")}<ellipse cx="60" cy="55" rx="30" ry="14" fill="#fff"/>
      <g class="head"><ellipse cx="96" cy="46" rx="13" ry="15" fill="#6b5a6e" ${E()}/><circle cx="92" cy="32" r="8" fill="#fff" ${E(3)}/><ellipse class="ear" cx="82" cy="44" rx="8" ry="4" fill="#6b5a6e" ${E(3)}/>
      <circle cx="99" cy="42" r="3.2" fill="#fff"/><circle cx="99.5" cy="42" r="1.8" fill="${Re}"/>${ks(102,52)}</g></svg>`;case 2:return`<svg viewBox="0 0 120 100">${Ii([38,50,66,78],66,"#ffadc6")}<path class="tail" d="M28 54 q-10 -4 -6 -12 q6 0 2 8" fill="none" ${E(3)}/>
      <ellipse cx="58" cy="60" rx="32" ry="20" fill="#ffc2d4" ${E()}/><g class="head"><circle cx="90" cy="52" r="16" fill="#ffc2d4" ${E()}/><path d="M80 38 l2 -12 l9 8 Z" fill="#ffadc6" ${E(3)}/>
      <ellipse cx="104" cy="56" rx="7" ry="8" fill="#ff9bb8" ${E(3)}/><circle cx="102" cy="54" r="1.6" fill="${Re}"/><circle cx="106" cy="57" r="1.6" fill="${Re}"/>${an(92,46)}${ks(90,60)}</g></svg>`;case 3:return`<svg viewBox="0 0 120 100">${[[30,72,1],[62,66,1.15],[92,74,.95]].map(([t,n,s])=>`<g transform="translate(${t} ${n}) scale(${s})"><path d="M-4 16 v8 M4 16 v8" stroke="#ff9f43" stroke-width="3" stroke-linecap="round"/>
      <circle cx="0" cy="4" r="14" fill="#ffe066" ${E(3)}/><path d="M-8 2 q-6 4 0 8" fill="#ffd43b" ${E(2)}/><g class="head"><circle cx="5" cy="-8" r="9" fill="#ffe066" ${E(3)}/><path d="M13 -9 l7 2 l-7 3 Z" fill="#ff9f43" ${E(2)}/>${an(7,-10,2.2)}</g></g>`).join("")}</svg>`;case 4:return`<svg viewBox="0 0 120 100"><circle class="tail" cx="30" cy="68" r="8" fill="#fff" ${E(3)}/><ellipse cx="56" cy="72" rx="28" ry="20" fill="#f6eef9" ${E()}/><ellipse cx="74" cy="90" rx="12" ry="5" fill="#f6eef9" ${E(3)}/>
      <g class="head"><ellipse class="ear" cx="78" cy="26" rx="7" ry="20" fill="#f6eef9" ${E(3)} transform="rotate(-12 78 26)"/><ellipse cx="78" cy="26" rx="3" ry="13" fill="#ffc2d4" transform="rotate(-12 78 26)"/>
      <ellipse cx="90" cy="28" rx="7" ry="20" fill="#f6eef9" ${E(3)} transform="rotate(10 90 28)"/><circle cx="86" cy="56" r="17" fill="#f6eef9" ${E()}/>${an(92,52)}<circle cx="102" cy="58" r="2.5" fill="#ff8fab"/>${ks(90,63)}</g></svg>`;default:return`<svg viewBox="0 0 120 100">${Ii([30,42,72,84],62,"#fff")}<path class="tail" d="M20 50 q-6 14 0 26" fill="none" ${E(3)}/>
      <rect x="18" y="38" width="80" height="34" rx="16" fill="#fff" ${E()}/><path d="M30 40 q10 8 4 20 q-10 -2 -10 -14 Z M60 42 q14 2 10 18 q-12 4 -14 -8 Z" fill="${Re}"/><ellipse cx="60" cy="74" rx="8" ry="5" fill="#ffadc6" ${E(2)}/>
      <g class="head"><path d="M90 24 l-8 -8 M108 24 l8 -8" stroke="#f5d27a" stroke-width="5" stroke-linecap="round"/><rect x="86" y="22" width="26" height="30" rx="12" fill="#fff" ${E()}/>
      <ellipse cx="100" cy="52" rx="14" ry="10" fill="#ffc2d4" ${E(3)}/><circle cx="95" cy="52" r="1.8" fill="${Re}"/><circle cx="105" cy="52" r="1.8" fill="${Re}"/>${an(94,34)}${an(106,34)}
      <ellipse class="ear" cx="82" cy="30" rx="7" ry="4" fill="#fff" ${E(3)}/></g></svg>`}}const gt={x:2265,y:520,rx:110,ry:34},cx=476,La=[{name:"Chestnut",body:"#c97b45",mane:"#7a3f22",sock:"#fff6e6"},{name:"Snowy",body:"#fdf8f3",mane:"#d9cdc4",sock:"#e9ddd2"},{name:"Midnight",body:"#4a3f52",mane:"#2a2230",sock:"#6b5e74"},{name:"Sunny",body:"#f2c96b",mane:"#fff6e0",sock:"#fff6e0"},{name:"Rainbow Pony",body:"#fff0fa",mane:"rainbow",sock:"#ffd6ec"}];function $c(e,t=!1){const n=La[e]??La[0],s=n.mane==="rainbow",o=s?Kt.map((r,l)=>{const c=124-l*1.6,d=14+l*2.4;return`<path d="M${c.toFixed(1)} ${d.toFixed(1)} q-6.5 2 -4.5 ${6+l*.35}" fill="none" stroke="${r}" stroke-width="5.5" stroke-linecap="round"/>`}).join(""):`<path d="M106 20 q-14 6 -18 30 q8 -6 10 -2 q4 -12 14 -18 Z" fill="${n.mane}" ${E(3)}/>`,i=s?`<g class="tail">${Kt.map((r,l)=>`<path d="M30 58 q-18 ${8+l*3} -14 ${36+l}" fill="none" stroke="${r}" stroke-width="6" stroke-linecap="round"/>`).join("")}</g>`:`<path class="tail" d="M30 56 q-20 10 -14 44 q10 -10 8 -20 q6 -10 10 -18 Z" fill="${n.mane}" ${E(3)}/>`,a=(r,l)=>`<g class="leg ${l}"><rect x="${r}" y="78" width="12" height="44" rx="5" fill="${n.body}" ${E(3)}/><rect x="${r}" y="110" width="12" height="12" rx="4" fill="${n.sock}" ${E(3)}/></g>`;return`<svg viewBox="0 0 160 130" class="horsesvg">${i}${a(40,"a")}${a(56,"b")}${a(96,"b")}${a(112,"a")}
    <ellipse cx="80" cy="68" rx="50" ry="24" fill="${n.body}" ${E()}/>
    ${t||s?`<path class="saddle" data-top="43" d="M64 46 q16 -6 32 0 l-2 22 q-14 4 -28 0 Z" fill="${s?"#b197fc":"#e8590c"}" ${E(3)}/>`:""}
    <g class="head"><path d="M108 66 L114 30 Q118 16 132 18 L148 36 Q152 46 142 48 L130 46 L128 70 Z" fill="${n.body}" ${E()}/>
    <path d="M114 22 l2 -14 l8 12 Z" fill="${n.body}" ${E(3)}/>${o}
    ${an(130,30,3.4)}<circle cx="146" cy="42" r="2" fill="${Re}"/>${ks(136,40)}
    ${s?`<path d="M120 14 l4 -14 l4 14 Z" fill="#ffd43b" ${E(2)}/>`:""}</g>
    ${s?'<g fill="#fff" opacity=".9"><path d="M60 60 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z"/><path d="M92 74 l1.5 4 4 1.5 -4 1.5 -1.5 4 -1.5 -4 -4 -1.5 4 -1.5 Z"/></g>':""}</svg>`}const dx=`<svg viewBox="0 0 180 170"><path d="M10 70 L90 14 L170 70" fill="#ffa94d" ${E(5)}/>
  <rect x="24" y="66" width="132" height="84" rx="8" fill="#fff6e6" ${E()}/>${Kt.map((e,t)=>`<rect x="${24+t*22}" y="66" width="22" height="10" fill="${e}"/>`).join("")}
  <rect x="24" y="66" width="132" height="10" fill="none" ${E(3)}/><circle cx="90" cy="108" r="22" fill="#5a3d5c"/>
  <path d="M60 150 l-12 16 M120 150 l12 16" ${E(5)}/>
  <g class="hen"><ellipse cx="90" cy="118" rx="20" ry="14" fill="#fff" ${E(3)}/><circle cx="104" cy="104" r="10" fill="#fff" ${E(3)}/><path d="M100 94 q3 -8 8 0" fill="#ff6b6b" ${E(2)}/>
  <path d="M113 104 l7 2 -7 3 Z" fill="#ffa94d" ${E(2)}/>${an(106,102,2)}</g>
  <text x="90" y="54" text-anchor="middle" font-size="16" font-weight="900" fill="${Re}" font-family="Nunito, system-ui, sans-serif">EGGS</text></svg>`,px=`<svg viewBox="0 0 170 130"><rect x="80" y="30" width="54" height="50" rx="8" fill="#bde6f7" ${E()}/><rect x="74" y="24" width="66" height="10" rx="4" fill="#ff6b6b" ${E(3)}/>
  <rect x="20" y="62" width="130" height="34" rx="12" fill="#ff6b6b" ${E()}/><rect x="28" y="40" width="10" height="24" rx="3" fill="#868e96" ${E(3)}/>
  <circle cx="122" cy="98" r="28" fill="${Re}"/><circle cx="122" cy="98" r="13" fill="#ffd43b" ${E(3)}/><circle cx="44" cy="106" r="18" fill="${Re}"/><circle cx="44" cy="106" r="8" fill="#ffd43b" ${E(3)}/>
  <circle cx="26" cy="76" r="5" fill="#fff3b0" ${E(2)}/></svg>`,fx=`<svg viewBox="0 0 240 300"><rect x="104" y="160" width="32" height="140" rx="10" fill="#c99366" ${E()}/>
  <circle cx="120" cy="110" r="90" fill="#5cc985" ${E()}/><circle cx="62" cy="140" r="50" fill="#5cc985" ${E()}/><circle cx="180" cy="140" r="52" fill="#5cc985" ${E()}/>
  ${[[80,90],[150,70],[175,140],[100,150],[130,115],[60,140]].map(([e,t])=>`<circle cx="${e}" cy="${t}" r="11" fill="#ff6b6b" ${E(3)}/><path d="M${e} ${t-10} q2 -6 6 -7" fill="none" ${E(2)}/>`).join("")}</svg>`,Kd=[[80,90],[150,70],[175,140],[100,150]],Of=`<svg viewBox="0 0 40 40"><circle cx="20" cy="23" r="14" fill="#ff6b6b" ${E(3)}/><path d="M20 10 q2 -6 6 -7" fill="none" ${E(2.5)}/><ellipse cx="27" cy="8" rx="5" ry="3" fill="#5cc985" ${E(2)}/><circle cx="14" cy="18" r="3" fill="#fff" opacity=".6"/></svg>`,hr=`<svg viewBox="0 0 40 40"><path d="M12 14 L32 10 L16 36 Z" fill="#ff922b" ${E(3)}/><path d="M18 18 l5 -1 M17 24 l4 -1" ${E(2)}/><path d="M30 10 q4 -8 8 -6 M30 10 q-2 -8 2 -10 M30 10 q6 -2 8 2" fill="none" stroke="#40c057" stroke-width="4" stroke-linecap="round"/></svg>`,gx=`<svg viewBox="0 0 40 40"><path d="M6 34 Q20 4 34 34 Z" fill="#f5d27a" ${E(3)}/><path d="M14 30 L18 14 M20 32 V10 M26 30 L22 14" stroke="#d9a93f" stroke-width="2.5" stroke-linecap="round"/></svg>`,ii=`<svg viewBox="0 0 40 40"><path d="M20 4 C30 4 34 20 34 26 C34 34 28 38 20 38 C12 38 6 34 6 26 C6 20 10 4 20 4 Z" fill="#fff6e6" ${E(3)}/><circle cx="15" cy="16" r="3" fill="#fff"/></svg>`,xc=(e="#ff8fab")=>`<svg viewBox="0 0 40 40"><path d="M20 38 V20" stroke="#40c057" stroke-width="4" stroke-linecap="round"/>${[0,72,144,216,288].map(t=>`<circle cx="${20+Math.cos(t*Math.PI/180)*8}" cy="${14+Math.sin(t*Math.PI/180)*8}" r="7" fill="${e}" ${E(2.5)}/>`).join("")}<circle cx="20" cy="14" r="5" fill="#ffd43b" ${E(2)}/></svg>`,Wf={carrot:hr,apple:Of,hay:gx},hx=e=>`<svg viewBox="0 0 80 90"><g transform="translate(14 0) scale(1.3)">${Wf[e].replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g>
  <path d="M10 40 H70 L62 86 H18 Z" fill="${e==="carrot"?"#74c0fc":e==="apple"?"#ffa8c5":"#b2f2bb"}" ${E(4)}/><path d="M12 52 H68" stroke="#fff" stroke-width="4" opacity=".6"/></svg>`,ux=`<svg viewBox="0 0 60 50"><path d="M12 22 Q30 -6 48 22" fill="none" stroke="${Re}" stroke-width="7" stroke-linecap="round"/><path d="M12 22 Q30 -6 48 22" fill="none" stroke="#e0a96d" stroke-width="3" stroke-linecap="round"/>
  <path d="M4 22 H56 L50 46 H10 Z" fill="#e0a96d" ${E(3.5)}/><path d="M12 30 H48 M14 38 H46" stroke="#b5793d" stroke-width="3"/></svg>`,Xd=["#ff8fab","#c9a0dc","#ffd43b","#74c0fc","#ff922b"];function Uf(e,t,n){const s=`<ellipse cx="35" cy="76" rx="30" ry="11" fill="${e?.wet?"#7a4b2e":"#9c6b46"}" ${E(3)}/>`;if(!e)return`<svg viewBox="0 0 70 90">${s}<path d="M20 74 q4 -3 8 0 M36 78 q4 -3 8 0" stroke="#b5875f" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`;const o=Xd[n%Xd.length];let i="";t===0&&(i=`<circle cx="27" cy="72" r="3" fill="#f2dcb8" ${E(1.5)}/><circle cx="36" cy="75" r="3" fill="#f2dcb8" ${E(1.5)}/><circle cx="44" cy="71" r="3" fill="#f2dcb8" ${E(1.5)}/>`),t===1&&(i=`<path d="M35 72 V58" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="29" cy="57" rx="7" ry="4" fill="#69db7c" ${E(2)}/><ellipse cx="41" cy="55" rx="7" ry="4" fill="#69db7c" ${E(2)}/>`),t===2&&(i=`<path d="M35 72 V40 M35 60 Q22 54 20 42 M35 56 Q48 50 50 38" stroke="#40c057" stroke-width="4" fill="none" stroke-linecap="round"/>${e.seed==="flower"?`<circle cx="35" cy="38" r="7" fill="#b2f2bb" ${E(2)}/>`:""}`),t===3&&(i=e.seed==="carrot"?`<path d="M26 74 L44 72 L35 86 Z" fill="#ff922b" ${E(2.5)}/><path d="M35 72 Q24 50 22 38 M35 72 Q36 48 36 34 M35 72 Q46 50 50 40" stroke="#40c057" stroke-width="5" fill="none" stroke-linecap="round"/>`:`<path d="M35 72 V34" stroke="#40c057" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="54" rx="8" ry="4" fill="#69db7c" ${E(2)}/>${[0,72,144,216,288].map(l=>`<circle cx="${35+Math.cos(l*Math.PI/180)*10}" cy="${28+Math.sin(l*Math.PI/180)*10}" r="8" fill="${o}" ${E(2.5)}/>`).join("")}<circle cx="35" cy="28" r="6" fill="#ffd43b" ${E(2)}/>`);const a=e.wet?"":`<g class="needWater"><path d="M56 18 q6 10 0 14 q-6 -4 0 -14 Z" fill="#74c0fc" ${E(2)}/></g>`,r=t===3?`<g class="ready"><path d="M58 20 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 Z" fill="#ffd43b" ${E(1.5)}/></g>`:"";return`<svg viewBox="0 0 70 90">${s}${i}${a}${r}</svg>`}const mx=`<svg viewBox="0 0 48 48">${Kt.map((e,t)=>`<path d="M${6+t*2.6} 38 A${18-t*2.6} ${18-t*2.6} 0 0 1 ${42-t*2.6} 38" fill="none" stroke="${e}" stroke-width="3"/>`).join("")}<path d="M4 38 H44" ${E(3)}/></svg>`,yx=`<svg viewBox="0 0 48 48"><path d="M10 34 Q24 22 38 34" fill="none" ${E(4)}/><path d="M24 30 V8 M16 16 L24 8 L32 16" fill="none" stroke="#ff6b6b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40 H40" ${E(4)}/></svg>`,wx=`<svg viewBox="0 0 200 320"><path d="M70 310 L84 120 H116 L130 310 Z" fill="#fff6e6" ${E(4)}/><path d="M78 200 H122 M74 260 H126" ${E(3)}/><rect x="88" y="262" width="24" height="48" rx="10" fill="#b197fc" ${E(3)}/>
  <path d="M78 124 L100 92 L122 124 Z" fill="#ff8fab" ${E(4)}/>
  <g class="sails" style="transform-origin:100px 110px">${[0,90,180,270].map(e=>`<g transform="rotate(${e} 100 110)"><path d="M100 110 L104 30 L126 30 L118 104 Z" fill="${["#ffd43b","#74c0fc","#ff8fab","#69db7c"][e/90]}" ${E(3)}/><path d="M108 40 H122 M107 58 H121 M106 76 H120" ${E(2)}/></g>`).join("")}<circle cx="100" cy="110" r="10" fill="#ffa94d" ${E(3)}/></g></svg>`,bx=["GOAT","SHEEP","PIGLET","CHICKS","BUNNY","COW"],vx=e=>`<g class="lantern" style="transform-origin:${e}px 146px"><path d="M${e} 146 V178" ${E(3)}/><circle cx="${e}" cy="204" r="34" fill="#fff3b0" opacity=".45"/>
  <path d="M${e-14} 182 H${e+14} L${e+11} 226 H${e-11} Z" fill="#ffe066" ${E(3)}/><rect x="${e-17}" y="176" width="34" height="8" rx="3" fill="#495057" ${E(2.5)}/><rect x="${e-15}" y="224" width="30" height="7" rx="3" fill="#495057" ${E(2.5)}/><ellipse cx="${e}" cy="205" rx="5" ry="9" fill="#ff922b"/></g>`;function kx(){const e=Kl,t=Array.from({length:Math.ceil(e/64)},(o,i)=>`<path d="M${i*64} 146 V440" stroke="#d4895f" stroke-width="3"/>`).join(""),n=Array.from({length:Math.ceil(e/46)},(o,i)=>{const a=i*46,r=160+Math.sin(i/3.1)*8;return`<path d="M${a} ${r} L${a+40} ${r} L${a+20} ${r+30} Z" fill="${Kt[i%6]}" ${E(2.5)}/>`}).join(""),s=Xl.map((o,i)=>`<g><rect x="${o-96}" y="318" width="192" height="122" rx="6" fill="#f0c49a" ${E(4)}/>
    <path d="M${o-96} 350 H${o+96} M${o-96} 384 H${o+96} M${o-96} 412 H${o+96}" stroke="#d9a074" stroke-width="3"/><path d="M${o-96} 318 L${o+96} 440 M${o+96} 318 L${o-96} 440" stroke="#e0aa7e" stroke-width="7" opacity=".7"/>
    <rect x="${o-54}" y="284" width="108" height="30" rx="10" fill="#fff6e6" ${E(3)}/><text x="${o}" y="305" text-anchor="middle" font-size="17" font-weight="900" fill="${Re}" font-family="Nunito, system-ui, sans-serif">${bx[i]}</text></g>`).join("");return`<svg class="parkScene ranchScene barnScene" viewBox="0 0 ${e} ${vi}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="${e}" height="440" fill="#e8a87c"/>${t}
  <!-- hay loft -->
  <rect width="${e}" height="128" fill="#c98a5e"/>${Array.from({length:Math.ceil(e/64)},(o,i)=>`<path d="M${i*64+32} 0 V128" stroke="#b5764d" stroke-width="3"/>`).join("")}
  ${[120,260,420,980,1130,1290,1640,1790].map((o,i)=>_n(o,126,i%3===1?.72:.85)).join("")}${[190,1060,1720].map(o=>_n(o,82,.7)).join("")}
  <rect x="0" y="126" width="${e}" height="24" fill="#a8653a" ${E(4)}/>
  ${[0,1,2,3,4,5,6].map(o=>`<path d="M${120+o*280} 150 L${180+o*280} 210" stroke="#a8653a" stroke-width="12" stroke-linecap="round"/><path d="M${120+o*280} 150 L${180+o*280} 210" ${E(2)}/>`).join("")}
  <!-- ladder up to the loft -->
  <g transform="translate(1840 0)"><path d="M-22 150 L-30 440 M22 150 L30 440" stroke="#c99366" stroke-width="10" stroke-linecap="round"/>${[190,240,290,340,390].map(o=>`<path d="M${-22-(o-150)*.028} ${o} H${22+(o-150)*.028}" stroke="#c99366" stroke-width="8" stroke-linecap="round"/>`).join("")}</g>
  <!-- rainbow bunting + big rainbow banner -->
  <path d="M0 160 Q${e/2} 176 ${e} 160" fill="none" ${E(2)}/>${n}
  <g transform="translate(${e/2+60} 236)">${Kt.map((o,i)=>`<rect x="${-180+i*60}" y="-26" width="60" height="44" fill="${o}"/>`).join("")}<rect x="-180" y="-26" width="360" height="44" rx="4" fill="none" ${E(4)}/>
    <path d="M-180 -26 L-200 -4 L-180 18 M180 -26 L200 -4 L180 18" fill="#ff8fab" ${E(3)}/>
    <text x="0" y="6" text-anchor="middle" font-size="26" font-weight="900" fill="#fff" stroke="${Re}" stroke-width="5" paint-order="stroke" font-family="Nunito, system-ui, sans-serif">RAINBOW RANCH</text></g>
  <!-- round windows with daylight -->
  ${[440,1720].map(o=>`<circle cx="${o}" cy="236" r="34" fill="#c7e8ff" ${E(4)}/><path d="M${o-34} 236 H${o+34} M${o} 202 V270" ${E(3)}/>`).join("")}
  ${s}
  <!-- the big door (back outside) -->
  <rect x="24" y="200" width="206" height="244" rx="10" fill="#b5703f" ${E(4)}/>
  <rect x="38" y="214" width="178" height="230" fill="#c7e8ff"/><path d="M38 360 Q120 330 216 352 V444 H38 Z" fill="#a6e3a0"/><circle cx="180" cy="250" r="16" fill="#ffe066"/>
  <path d="M38 214 H216 V444 M38 214 V444" fill="none" ${E(4)}/>
  <!-- straw floor -->
  <rect x="0" y="438" width="${e}" height="162" fill="#f2d58a"/><path d="M0 440 H${e}" ${E(4)}/>
  ${Array.from({length:70},(o,i)=>{const a=i*137%e,r=470+i*53%120;return`<path d="M${a} ${r} l${14+i%3*4} ${i%2?-4:4}" stroke="#d9a93f" stroke-width="3" stroke-linecap="round"/>`}).join("")}
  <!-- feed station -->
  <g transform="translate(356 0)"><rect x="-70" y="456" width="140" height="34" rx="12" fill="#fff6e6" ${E(3)}/><text x="0" y="480" text-anchor="middle" font-size="16" font-weight="900" fill="${Re}" font-family="Nunito, system-ui, sans-serif">FOOD 🥕🍎🌾</text></g>
  ${_n(1790,590,.8)}${_n(1700,600,.65)}
  ${[290,660,1330,1590].map(vx).join("")}
  </svg>`}const Ea=600,Wt="#5a3d5c",ne=(e=4)=>`stroke="${Wt}" stroke-width="${e}" stroke-linejoin="round" stroke-linecap="round"`;function ki(e){const t=ni[e].seats,n=t<=2?140:t===4?110:100,s=(t-1)/2;return Array.from({length:t},(o,i)=>({x:ni[e].x+(i-s)*n,y:558-Math.abs(i-s)*8}))}const Jd=["#ff7eb3","#ffd43b","#66d9e8","#d0bfff","#fff"],nn=(e,t,n=1,s="#fff")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -9 L2.2 -2.4 L9 -2.2 L3.4 2.2 L5.4 9 L0 4.6 L-5.4 9 L-3.4 2.2 L-9 -2.2 L-2.2 -2.4 Z" fill="${s}" stroke="${Wt}" stroke-width="1.2" stroke-linejoin="round"/>`;function ep(e,t,n,s){const o=`<path d="M36 ${t} Q ${e/2} ${t+n+8} ${e-36} ${t}" fill="none" stroke="${Wt}" stroke-width="3"/>`,i=Array.from({length:s},(a,r)=>{const l=s===1?.5:r/(s-1),c=48+l*(e-96),d=t+Math.sin(l*Math.PI)*n,f=Jd[r%Jd.length];return`<g class="bulb" style="animation-delay:-${r%8*.22}s"><line x1="${c}" y1="${d-16}" x2="${c}" y2="${d-6}" stroke="${Wt}" stroke-width="2"/><circle cx="${c}" cy="${d}" r="7.5" fill="${f}" ${ne(2)}/><circle cx="${c-2}" cy="${d-2}" r="2.2" fill="#fff" opacity=".85"/></g>`}).join("");return o+i}const zo=(e,t,n,s=1)=>`<g transform="translate(${e} ${t}) scale(${s})">
  <ellipse cx="0" cy="22" rx="42" ry="12" fill="#000" opacity=".12"/>
  <path d="M-40 10 Q-48 -22 -10 -28 Q10 -46 34 -18 Q50 2 34 18 Q8 32 -24 20 Q-42 16 -40 10 Z" fill="${n}" ${ne(3)}/>
  <path d="M-18 -6 Q-4 -20 14 -4" fill="none" stroke="#fff" stroke-width="4" opacity=".55" stroke-linecap="round"/>
  <circle cx="16" cy="6" r="4" fill="#fff" opacity=".35"/>
</g>`,tp=(e,t,n)=>`<g transform="translate(${e} ${t})">
  <ellipse cx="0" cy="16" rx="28" ry="9" fill="#000" opacity=".12"/>
  <ellipse cx="0" cy="4" rx="30" ry="20" fill="${n}" ${ne(3)}/>
  <ellipse cx="-6" cy="-2" rx="12" ry="7" fill="#fff" opacity=".35"/>
  <path d="M0 -16 V-28" ${ne(3)}/><circle cy="-32" r="6" fill="#ffd43b" ${ne(2)}/>
</g>`;function So(e,t,n,s,o,i=""){return`<g class="photoFrame${i}" transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-40" y="-52" width="80" height="104" rx="6" fill="#fff" ${ne(3.5)}/>
    <rect x="-32" y="-44" width="64" height="72" rx="4" fill="${s}"/>
    ${o}
    <rect x="-10" y="-58" width="20" height="10" rx="2" fill="#ffe8a3" opacity=".85" transform="rotate(-8)"/>
  </g>`}function Hi(e,t,n,s,o){return`<g transform="translate(${e} ${t}) rotate(${n})">
    <rect x="-28" y="-34" width="56" height="68" rx="3" fill="#fff" ${ne(3)}/>
    <rect x="-22" y="-28" width="44" height="40" fill="${s}"/>
    ${o}
  </g>`}function Oi(e,t,n,s){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="36" rx="26" ry="8" fill="#000" opacity=".12"/>
    <path d="M-18 36 L-12 -2 H12 L18 36 Z" fill="${n}" ${ne(3)}/>
    <ellipse cx="0" cy="0" rx="16" ry="6" fill="#c9a27a" ${ne(2)}/>
    <ellipse cx="-16" cy="-16" rx="16" ry="22" fill="${s}" ${ne(3)} transform="rotate(-18)"/>
    <ellipse cx="16" cy="-18" rx="16" ry="22" fill="${s}" ${ne(3)} transform="rotate(16)"/>
    <ellipse cx="0" cy="-28" rx="14" ry="20" fill="${s}" ${ne(3)}/>
    <circle cx="0" cy="-36" r="6" fill="#ff8ec8" ${ne(2)}/>
  </g>`}function _x(e,t){return`<g transform="translate(${e} ${t})">
    <ellipse cx="28" cy="118" rx="32" ry="8" fill="#000" opacity=".12"/>
    <rect width="56" height="118" rx="10" fill="#e7fbff" ${ne()}/>
    <rect y="52" width="56" height="8" fill="#d0f4ff" ${ne(2)}/>
    <rect x="44" y="18" width="6" height="22" rx="3" fill="#ffd43b" ${ne(2)}/>
    <rect x="44" y="70" width="6" height="28" rx="3" fill="#ffd43b" ${ne(2)}/>
    <rect x="8" y="12" width="28" height="22" rx="4" fill="#fff" ${ne(2)}/>
    <circle cx="16" cy="22" r="4" fill="#ff8ec8"/><circle cx="28" cy="24" r="3" fill="#ffd43b"/>
    <path d="M18 78 C14 72 8 74 12 82 C15 88 18 90 18 90 C18 90 21 88 24 82 C28 74 22 72 18 78 Z" fill="#ff4d94" ${ne(1.5)}/>
  </g>`}function $x(e,t,n){return`<g transform="translate(${e} ${t})">
    <ellipse cx="0" cy="6" rx="34" ry="9" fill="#000" opacity=".1"/>
    <path d="M-46 -16 C-50 -86 -26 -108 0 -110 C26 -108 50 -86 46 -16 Z" fill="#fff6fb" ${ne()}/>
    <path d="M-32 -20 C-34 -74 -16 -90 0 -92 C16 -90 34 -74 32 -20 Z" fill="${n}"/>
    <ellipse cx="0" cy="-10" rx="40" ry="16" fill="${n}" ${ne()}/>
    <ellipse cx="-8" cy="-16" rx="14" ry="6" fill="#fff" opacity=".4"/>
    <path d="M-22 -2 L-26 16 M22 -2 L26 16" fill="none" stroke="${Wt}" stroke-width="4" stroke-linecap="round"/>
  </g>`}function xx(e){const t=ni[e],n=t.game==="four"?"Four":"Slay",s=t.game==="four"?"#7ad7ea":e===0?"#ff8ec8":"#e0b0ff",o=t.game==="four"?"#b8f2ff":e===0?"#ffd0e6":"#ead9ff",i=t.seats>=6?250:t.seats>=4?200:150;return`${ki(e).map(r=>$x(r.x,r.y,o)).join("")}
  <g transform="translate(${t.x} 500)">
    <ellipse cx="0" cy="28" rx="${i+18}" ry="20" fill="#000" opacity=".1"/>
    <rect x="-18" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ne(3)}/>
    <rect x="4" y="8" width="14" height="36" rx="4" fill="#e7c8a0" ${ne(3)}/>
    <ellipse cx="0" cy="-4" rx="${i}" ry="30" fill="${s}" stroke="#ffd43b" stroke-width="6"/>
    <ellipse cx="0" cy="-4" rx="${i-16}" ry="18" fill="none" stroke="#fff" stroke-width="3" opacity=".45"/>
    <ellipse cx="${-i*.25}" cy="-12" rx="${i*.35}" ry="8" fill="#fff" opacity=".28"/>
    <text x="0" y="4" text-anchor="middle" font-size="22" font-weight="900" fill="#fff" stroke="${Wt}" stroke-width="4" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${n}</text>
  </g>`}const Po=(e,t,n=1,s="#ff4d94")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 4 C-6 -4 -14 -2 -10 6 C-7 12 0 16 0 16 C0 16 7 12 10 6 C14 -2 6 -4 0 4 Z" fill="${s}" stroke="${Wt}" stroke-width="1.6" stroke-linejoin="round"/>`;function Mx(){const e=sr,t=[[120,200],[260,250],[640,210],[900,250],[1180,190],[1560,230],[1860,180],[2100,240],[2420,200],[2520,280]];return`<svg class="grScene" viewBox="0 0 ${e} ${Ea}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
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
  <rect width="${e}" height="${Ea}" fill="url(#grWall)"/>
  <rect y="390" width="${e}" height="80" fill="#fff6fb" opacity=".45"/>
  ${Array.from({length:8},(n,s)=>`<rect x="${40+s*330}" y="400" width="280" height="62" rx="8" fill="none" stroke="#fff" stroke-width="3" opacity=".55"/>`).join("")}
  <rect y="468" width="${e}" height="132" fill="url(#grFloor)"/>
  <rect y="464" width="${e}" height="12" fill="#ffd43b" ${ne(3)}/>
  ${[720,1500,2150].map((n,s)=>`<ellipse cx="${n}" cy="548" rx="${s===1?210:280}" ry="42" fill="${s===1?"#d8f6ff":s===0?"#ffe0f0":"#f3e8ff"}" stroke="#fff" stroke-width="4" opacity=".8"/>`).join("")}
  ${ep(e,28,22,28)}
  ${ep(e,78,16,18)}
  ${t.map(([n,s],o)=>nn(n,s,.7+o%3*.28,o%2?"#fff":"#ffd43b")).join("")}

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

  ${So(500,340,-6,"#ffe0f0",`${Po(0,8,1.4)}${nn(-18,-16,.7,"#ffd43b")}${nn(18,-10,.55,"#66d9e8")}`," frameAtHead")}
  ${So(424,186,-8,"#ffe0f0",`${Po(0,8,1.4)}${nn(-18,-16,.7,"#ffd43b")}${nn(18,-10,.55,"#66d9e8")}`," framePhone")}
  ${So(980,240,5,"#e7fbff",`<ellipse cx="0" cy="6" rx="16" ry="12" fill="#fff" ${ne(2)}/><path d="M-6 6 Q0 -8 6 6" fill="none" stroke="${Wt}" stroke-width="2"/><path d="M0 18 V28 M-12 24 H12" ${ne(2)}/>`)}
  ${So(1680,255,-4,"#fff3c4",`${nn(0,2,1.5,"#ffd43b")}`)}
  ${So(2360,245,6,"#f3e8ff",`${Po(0,4,1.3,"#d0bfff")}`)}
  ${Hi(400,300,8,"#fff0f6",Po(0,-4,1.1))}
  ${Hi(820,310,-7,"#e7fbff",nn(0,-6,1,"#66d9e8"))}
  ${Hi(1900,300,9,"#fff6e6",nn(0,-6,1,"#ffd43b"))}
  ${Hi(2280,320,-8,"#ffe0f0",Po(0,-4,1))}

  <g class="disco" transform="translate(1288 36)">
    <line y1="0" y2="22" stroke="${Wt}" stroke-width="3"/>
    <circle cy="44" r="26" fill="url(#disco)" ${ne(3)}/>
    <path d="M-14 36 L0 56 L14 36 M-8 48 H8" fill="none" stroke="#fff" stroke-width="2.5"/>
    ${nn(-30,20,.45)}${nn(32,28,.4,"#ffd43b")}
  </g>

  <g transform="translate(86 292)">
    <rect width="78" height="168" rx="12" fill="#ff8ec8" ${ne()}/>
    <rect x="8" y="10" width="62" height="36" rx="8" fill="#fff6e6" ${ne(2)}/>
    <text x="39" y="34" text-anchor="middle" font-size="16" font-weight="900" fill="${Wt}" font-family="Nunito, ui-rounded, system-ui, sans-serif">MAP</text>
    <circle cx="62" cy="96" r="5" fill="#ffd43b" ${ne(2)}/>
    <rect x="22" y="118" width="34" height="8" rx="3" fill="#fff" opacity=".45"/>
  </g>

  ${Oi(40,400,"#ffd43b","#8ce99a")}
  ${Oi(1080,392,"#ff8ec8","#69db7c")}
  ${Oi(1600,400,"#d0bfff","#8ce99a")}
  ${Oi(2520,396,"#66d9e8","#69db7c")}
  ${_x(200,348)}
  <g transform="translate(2420 360)">
    <rect width="130" height="100" rx="14" fill="#fff6fb" ${ne()}/>
    <rect y="28" width="130" height="10" fill="#ffd0e6" ${ne(2)}/>
    <circle cx="28" cy="64" r="12" fill="#ffd43b" ${ne(2)}/><circle cx="64" cy="66" r="10" fill="#ff8ec8" ${ne(2)}/><rect x="86" y="52" width="28" height="22" rx="6" fill="#66d9e8" ${ne(2)}/>
    <text x="65" y="20" text-anchor="middle" font-size="13" font-weight="900" fill="${Wt}" font-family="Nunito, ui-rounded, system-ui, sans-serif">SNACKS</text>
  </g>

  ${zo(330,455,"#ff8ec8",1.05)}
  ${zo(1120,468,"#d0bfff")}
  ${zo(1360,470,"#8ce4f2",.9)}
  ${zo(1780,462,"#ffd43b")}
  ${tp(1480,500,"#ffb3d9")}
  ${tp(2e3,505,"#c9b3ff")}
  ${zo(2550,468,"#ff8ec8",.85)}

  ${ni.map((n,s)=>xx(s)).join("")}
  </svg>`}const Lx=`<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="28" rx="10" fill="#2b1430" stroke="${Wt}" stroke-width="3"/><path d="M24 32 C16 26 12 22 14 17 C16 13 21 14 24 18 C27 14 32 13 34 17 C36 22 32 26 24 32 Z" fill="#ff4d94" stroke="#ffd0ea" stroke-width="1.5"/><circle cx="10" cy="8" r="2.2" fill="#ffd43b"/><circle cx="24" cy="5" r="2.2" fill="#66d9e8"/><circle cx="38" cy="8" r="2.2" fill="#d0bfff"/></svg>`,W="#5a3d5c",Ex=`<svg viewBox="0 0 120 100"><rect x="0" y="62" width="120" height="38" rx="14" fill="#9fe0aa" stroke="${W}" stroke-width="3"/>
  <path d="M18 70 L30 22 L42 70 M78 70 L90 22 L102 70" fill="none" stroke="#8ecae6" stroke-width="5" stroke-linecap="round"/><path d="M26 22 H94" stroke="#ff8fab" stroke-width="7" stroke-linecap="round"/>
  <path d="M50 22 V54 M66 22 V54" stroke="${W}" stroke-width="2.5"/><rect x="45" y="52" width="26" height="7" rx="3" fill="#ff9f68" stroke="${W}" stroke-width="2.5"/>
  <circle cx="104" cy="14" r="9" fill="#ffd166" stroke="${W}" stroke-width="3"/></svg>`,Vf=`<svg viewBox="0 0 120 100"><path d="M20 50 L60 16 L100 50" fill="#ff8fab" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><rect x="28" y="48" width="64" height="44" rx="6" fill="#fff6e6" stroke="${W}" stroke-width="4"/>
  <rect x="52" y="64" width="16" height="28" rx="4" fill="#c9a0dc" stroke="${W}" stroke-width="3"/><rect x="34" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${W}" stroke-width="3"/><rect x="73" y="58" width="13" height="13" rx="3" fill="#bfe6ff" stroke="${W}" stroke-width="3"/></svg>`,Mc=`<svg viewBox="0 0 120 100"><path d="M40 18 L24 28 L14 46 L30 52 L34 44 V88 H86 V44 L90 52 L106 46 L96 28 L80 18 Q60 34 40 18 Z" fill="#8ecae6" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><circle cx="60" cy="58" r="7" fill="#fff3b0" stroke="${W}" stroke-width="3"/></svg>`,ue=e=>`<div class="wnArt">${e}</div>`,Qf=`<svg viewBox="0 0 120 100"><rect x="16" y="58" width="74" height="24" rx="10" fill="#fff" stroke="${W}" stroke-width="4"/><circle cx="32" cy="70" r="7" fill="#ff8fab" stroke="${W}" stroke-width="3"/><circle cx="52" cy="70" r="7" fill="#ffe066" stroke="${W}" stroke-width="3"/><circle cx="72" cy="70" r="7" fill="#8ecae6" stroke="${W}" stroke-width="3"/><path d="M86 46 l14 -16 8 8 -14 16z" fill="#ffd166" stroke="${W}" stroke-width="3" stroke-linejoin="round"/><rect x="78" y="44" width="12" height="24" rx="4" fill="#c9a0dc" stroke="${W}" stroke-width="3"/></svg>`,Cx=`<svg viewBox="0 0 120 100">${Kt.map((e,t)=>`<path d="M${12+t*6} 84 A${48-t*6} ${48-t*6} 0 0 1 ${108-t*6} 84" fill="none" stroke="${e}" stroke-width="6"/>`).join("")}
  <path d="M38 92 V62 L60 44 L82 62 V92 Z" fill="#ef5b5b" stroke="${W}" stroke-width="3.5" stroke-linejoin="round"/><rect x="52" y="70" width="16" height="22" fill="#fff6e6" stroke="${W}" stroke-width="3"/></svg>`,zx=`<svg viewBox="0 0 120 100"><g transform="translate(22 8) scale(1.9)">${ii.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g><g transform="translate(52 22) scale(1.4)">${ii.replace('<svg viewBox="0 0 40 40">',"").replace("</svg>","")}</g></svg>`,zl=(e,t,n,s)=>`<g transform="translate(${t} ${n}) scale(${s})">${e.replace(/^<svg[^>]*>/,"").replace(/<\/svg>$/,"")}</g>`,Sx=`<svg viewBox="0 0 120 100"><circle cx="60" cy="50" r="40" fill="#fff" stroke="${W}" stroke-width="4"/>${zl(Gl(yt({skin:"#f1c27d",hair:"#5b3a29",hairStyle:2,shirt:"#ff7aa8",pants:"#5aa9e6"})).replace('viewBox="14 2 72 74"','viewBox="0 0 100 160"'),26,12,.68)}<circle cx="60" cy="50" r="40" fill="none" stroke="#ff6b9a" stroke-width="5"/></svg>`,Px=`<svg viewBox="0 0 120 100"><rect x="8" y="28" width="104" height="64" rx="16" fill="#fff0f6" stroke="${W}" stroke-width="4"/><path d="M8 40 L60 12 L112 40" fill="#ff6b9a" stroke="${W}" stroke-width="4" stroke-linejoin="round"/>
  <path d="M60 58 C52 48 40 50 46 60 C50 68 60 74 60 74 C60 74 70 68 74 60 C80 50 68 48 60 58 Z" fill="#ff4d94" stroke="#fff" stroke-width="1.5"/>
  ${[18,34,50,66,82,98].map((e,t)=>`<circle cx="${e}" cy="24" r="4" fill="${["#ff7eb3","#ffd43b","#66d9e8","#d0bfff"][t%4]}" stroke="${W}" stroke-width="1.5"/>`).join("")}</svg>`,Tx=`<svg viewBox="0 0 120 100"><rect x="28" y="8" width="64" height="84" rx="12" fill="#fff" stroke="${W}" stroke-width="4"/><rect x="28" y="8" width="64" height="84" rx="12" fill="none" stroke="#ff7eb3" stroke-width="6"/><path d="M48 36 L54 24 L60 34 L68 20 L76 34 L82 24 L88 36 Z" fill="#ffd43b" stroke="${W}" stroke-width="2" stroke-linejoin="round"/><text x="60" y="78" text-anchor="middle" font-size="22" font-weight="900" fill="#ff4d94" font-family="Nunito, ui-rounded, system-ui, sans-serif">SLAY</text></svg>`,Bx=`<svg viewBox="0 0 120 100"><rect x="10" y="16" width="100" height="72" rx="14" fill="#fff6fb" stroke="${W}" stroke-width="4"/>
  <path d="M36 58 C28 48 18 50 24 60 C28 68 36 74 36 74 C36 74 44 68 48 60 C54 50 44 48 36 58 Z" fill="#ff4d94" stroke="${W}" stroke-width="2"/>
  <path d="M78 28 L82 40 H94 L84 48 L88 60 L78 52 L68 60 L72 48 L62 40 H74 Z" fill="#66d9e8" stroke="${W}" stroke-width="2"/></svg>`,qf=`<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="22" rx="6" fill="#fff" stroke="${W}" stroke-width="3"/><path d="M6 26 H42 M14 18 V40 M22 18 V40 M30 18 V40 M36 18 V40" stroke="${W}" stroke-width="2.4"/><rect x="4" y="12" width="40" height="8" rx="4" fill="#9ad7f5" stroke="${W}" stroke-width="3"/><ellipse cx="20" cy="32" rx="5" ry="3" fill="#ffe0ec"/><ellipse cx="30" cy="32" rx="5" ry="3" fill="#c9e7ff"/></svg>`,Rx=`<svg viewBox="0 0 120 100"><ellipse cx="60" cy="72" rx="50" ry="20" fill="#ffc2d4" stroke="${W}" stroke-width="4"/><ellipse cx="60" cy="72" rx="32" ry="11" fill="#fff" stroke="${W}" stroke-width="3"/><path d="M60 58 C50 46 36 48 42 60 C48 70 60 78 60 78 C60 78 72 70 78 60 C84 48 70 46 60 58 Z" fill="#ff4d94" stroke="${W}" stroke-width="3"/><path d="M22 40 Q28 28 36 36" fill="none" stroke="#7dce8a" stroke-width="4" stroke-linecap="round"/><circle cx="22" cy="38" r="5" fill="#ffd166" stroke="${W}" stroke-width="2"/></svg>`,Ax=`<svg viewBox="0 0 120 100"><path d="M16 50 L60 14 L104 50" fill="#ff8fab" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><rect x="26" y="48" width="68" height="40" rx="10" fill="#fff6ea" stroke="${W}" stroke-width="4"/><path d="M42 88 V60 Q60 44 78 60 V88" fill="#ffe8c7" stroke="${W}" stroke-width="3"/><circle cx="82" cy="64" r="7" fill="#bde0fe" stroke="${W}" stroke-width="3"/><circle cx="80" cy="62" r="2" fill="#fff"/></svg>`,Dx=`<svg viewBox="0 0 120 100"><rect x="28" y="38" width="64" height="42" rx="8" fill="#8ecae6" stroke="${W}" stroke-width="4"/><path d="M28 44 L60 68 L92 44" fill="none" stroke="${W}" stroke-width="4"/><path d="M76 30 V16" stroke="${W}" stroke-width="4" stroke-linecap="round"/><path d="M76 16 H96 L90 23 L96 30 H76 Z" fill="#ff6b6b" stroke="${W}" stroke-width="3"/></svg>`,Ix=`<svg viewBox="0 0 120 100"><rect x="8" y="32" width="48" height="40" rx="14" fill="#fff3b0" stroke="${W}" stroke-width="4"/><rect x="64" y="32" width="48" height="40" rx="14" fill="#fff" stroke="${W}" stroke-width="4"/><path d="M26 44 L40 52 L26 60 Z" fill="${W}"/><circle cx="88" cy="52" r="6" fill="#ff8fab" stroke="${W}" stroke-width="3"/></svg>`,Hx=`<svg viewBox="0 0 120 100"><rect x="16" y="18" width="36" height="58" rx="6" fill="#fff" stroke="${W}" stroke-width="4"/><rect x="62" y="24" width="42" height="52" rx="6" fill="#e7f6ff" stroke="${W}" stroke-width="4"/><circle cx="34" cy="66" r="2.4" fill="${W}"/><circle cx="83" cy="66" r="2.4" fill="${W}"/></svg>`,Zf=`<svg viewBox="0 0 120 100"><rect x="28" y="16" width="64" height="72" rx="16" fill="#fff" stroke="${W}" stroke-width="4"/><path d="M40 36 H80 M40 52 H80 M40 68 H80" fill="none" stroke="${W}" stroke-width="5" stroke-linecap="round"/><circle cx="92" cy="24" r="12" fill="#ff6b9a" stroke="${W}" stroke-width="3"/><text x="92" y="29" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" font-family="Nunito, ui-rounded, system-ui, sans-serif">1</text></svg>`,Ox=`<svg viewBox="0 0 120 100"><rect x="6" y="10" width="108" height="80" rx="18" fill="#2a2158" stroke="${W}" stroke-width="4"/><circle cx="34" cy="42" r="14" fill="#ffd166" stroke="${W}" stroke-width="3"/><path d="M78 28 a16 16 0 1 0 0 32 a12 12 0 1 1 0 -32z" fill="#fff6e4" stroke="${W}" stroke-width="3"/><circle cx="92" cy="30" r="2" fill="#fff"/><circle cx="70" cy="24" r="1.6" fill="#fff"/><circle cx="100" cy="48" r="1.6" fill="#fff"/></svg>`,Wx=`<svg viewBox="0 0 120 100"><circle cx="60" cy="52" r="34" fill="#fff6e4" stroke="${W}" stroke-width="4"/><path d="M60 52 V32 M60 52 L76 60" stroke="${W}" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="52" r="3" fill="${W}"/><path d="M28 22 l4 6 M92 22 l-4 6" stroke="#ffb15c" stroke-width="4" stroke-linecap="round"/></svg>`,Nf=`<svg viewBox="0 0 120 100"><path d="M60 18 L72 46 H96 L78 62 L84 90 L60 74 L36 90 L42 62 L24 46 H48 Z" fill="#ffd166" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><path d="M60 48 L28 92 H92 Z" fill="#2f6b4f" stroke="${W}" stroke-width="4" stroke-linejoin="round"/><rect x="52" y="88" width="16" height="8" rx="2" fill="#c44558" stroke="${W}" stroke-width="3"/></svg>`,Ff=[{v:10,title:"Winter Cheer!",lines:[{art:ue(Nf),text:"The <b>Winter Cheer</b> pack is in your drawer!"}]},{v:9,title:"Everything's tidied into the Menu!",lines:[{art:ue(Zf),text:"Everything's tidied into the <b>Menu</b>!"},{art:ue(Ox),text:"The world follows the <b>clock</b>: morning, day, golden evening, and night."},{art:ue(Wx),text:"Tap the <b>sun</b> and the <b>moon</b>. <b>Auto</b> follows the clock."}]},{v:8,title:"Make your look!",lines:[{art:ue(Dx),text:"Leave a <b>letter</b> in a friend's mailbox!"},{art:ue(Ix),text:"Tap <b>Play</b> or <b>Decorate</b>!"},{art:ue(Mc),text:"<b>Make your look!</b> New hair, clothes, and colors."},{art:ue(Hx),text:"Update every iPad to see the <b>new outfits</b>!"}]},{v:7,title:"New Nursery!",lines:[{art:ue(qf),text:"A new <b>Nursery</b> room, with a <b>crib</b> and a rocker!"},{art:ue(Rx),text:"The <b>Cozy Cottage</b> furniture pack is in your drawer!"},{art:ue(Ax),text:"A <b>dog kennel</b> and a <b>cat tower</b> for your pets!"}]},{v:6,title:"The clubhouse is open!",lines:[{art:ue(Px),text:"A glam <b>clubhouse</b> on the map!"},{art:ue(Tx),text:"Play <b>Slay</b> with friends at a table!"},{art:ue(Bx),text:"Line up <b>hearts</b> or <b>stars</b>!"}]},{v:5,title:"Your house looks even cozier!",lines:[{art:ue(Qf),text:"Wallpaper and floors show their <b>real patterns</b> when you paint!"},{art:ue(ao(0,"sit")),text:"Your cat is <b>big and cozy</b>, just like the toy cat."},{art:ue(Vf),text:"Tap <b>home</b> to come back from the map, the park, or the ranch."}]},{v:4,title:"A map of our neighborhood!",lines:[{art:ue(jl),text:"Tap the <b>map</b> to go anywhere!"},{art:ue(Sx),text:"Tap a friend's face to <b>find her</b>."},{art:ue(Cl(0)),text:"The petting zoo is inside the <b>barn</b> now!"}]},{v:3,title:"Rainbow Ranch is open!",lines:[{art:ue(Cx),text:"Visit <b>Rainbow Ranch</b>!"},{art:ue(Cl(1)),text:"Pet and feed animals at the <b>petting zoo</b>."},{art:ue(`<svg viewBox="0 0 160 130">${zl($c(4),0,0,1)}</svg>`),text:"Ride <b>horses</b> and the <b>rainbow pony</b>!"},{art:ue(zx),text:"Collect <b>eggs</b> from the hens."},{art:ue(`<svg viewBox="0 0 70 90">${zl(Uf({seed:"carrot",wet:1},3,0),0,0,1)}</svg>`),text:"Grow carrots and flowers in the <b>garden</b>."}]},{v:2,title:"What's new!",lines:[{art:ue(Ex),text:"A new <b>park</b>! Swing, slide and splash with friends."},{art:ue(ao(3,"sit")),text:"Adopt a <b>cat</b>! She lives in your house."},{art:ue(oi(3,"stand")),text:"Adopt a <b>dog</b>! Take it to the park to play fetch."}]}],jf=Ff[0].v,Gf={v:jf,title:"Welcome to your cozy house!",lines:[{art:ue(Vf),text:"Drag furniture into your rooms."},{art:ue(Mc),text:"Dress up your friends."},{art:ue(ao(0,"sit")),text:"Tap the paw to adopt a pet!"}]},Yf=qt("cozy-whatsnew"),Ux=1;function Vx(){try{const e=Number(localStorage.getItem(Yf)),t=["cozy-house","cozy-house-v1","cozy-hood"].some(o=>localStorage.getItem(qt(o))!==null);if(!e&&!t)return{kind:"welcome",entries:[Gf]};const n=e||Ux,s=Ff.filter(o=>o.v>n).slice(0,3);return s.length?{kind:"news",entries:s}:{kind:"none",entries:[]}}catch{return{kind:"none",entries:[]}}}function Qx(){try{localStorage.setItem(Yf,String(jf))}catch{}}function qx(e,t){const n=e==="welcome"?Gf.title:t[0].title,s=t.flatMap(o=>o.lines).slice(0,5);return`<div class="wnBadge">${e==="welcome"?uf:t[0].v>=10?Nf:t[0].v>=9?Zf:t[0].v>=8?Mc:t[0].v>=7?qf:t[0].v>=6?Lx:t[0].v>=5?Qf:t[0].v>=4?jl:t[0].v>=3?mx:Xm}</div>
    <h2 class="wnTitle">${n}</h2>
    <div class="wnList ${s.length>3?"many":""}">${s.map((o,i)=>`<div class="wnLine" style="animation-delay:${.15+i*.18}s">${o.art}<p>${o.text}</p></div>`).join("")}</div>
    <button class="wnGo" id="wnGo">Let's play!</button>`}const Kf="cozy-sky",Sl={tint:"#fff6e4",body:"#ffe9f0",pageA:"#ffe0ec",pageB:"#e6ddff",spot:"#fff6fa",fieldA:"#c9f2c7",fieldB:"#8fd18a",win:"#a2d2ff",win2:"#b9e3ff",house:"#fff3b0",mapTint:"#ffffff"},np={tint:"#e7b4cc",body:"#f6dce8",pageA:"#ffd0e6",pageB:"#e6d2f8",spot:"#fff0f6",fieldA:"#f6d0e2",fieldB:"#dcc8f0",win:"#f6c6de",win2:"#e4d0f8",house:"#ffe0ee",mapTint:"#f3c4dc"},sp={tint:"#ffb38a",body:"#ffe4dc",pageA:"#ffe0d6",pageB:"#f0d8ea",spot:"#fff6ee",fieldA:"#d4eec4",fieldB:"#a3cb8a",win:"#ffc48a",win2:"#ffd4b0",house:"#ffc56a",mapTint:"#ffb38a"},Gs={tint:"#2a2350",body:"#14182c",pageA:"#1c1748",pageB:"#101832",spot:"#2c2458",fieldA:"#1a2458",fieldB:"#0c1028",win:"#1a245c",win2:"#12183a",house:"#ffe9a0",mapTint:"#102044"},Wi=[{m:0,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...Gs},{m:5*60,opacity:.7,map:.78,glow:.95,stars:.95,glass:1,phase:"night",...Gs},{m:5*60+35,opacity:.42,map:.34,glow:.55,stars:.42,glass:.8,phase:"dawn",...np},{m:6*60+25,opacity:.14,map:.16,glow:.28,stars:.08,glass:.9,phase:"dawn",...np},{m:7*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Sl},{m:16*60+15,opacity:0,map:0,glow:0,stars:0,glass:0,phase:"day",...Sl},{m:17*60+5,opacity:.08,map:.1,glow:.4,stars:.02,glass:.55,phase:"golden",...sp},{m:18*60+10,opacity:.18,map:.2,glow:.62,stars:.06,glass:.82,phase:"golden",...sp},{m:19*60+5,opacity:.52,map:.68,glow:.9,stars:.55,glass:1,phase:"night",...Gs},{m:20*60+10,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...Gs},{m:24*60,opacity:.7,map:.78,glow:1,stars:1,glass:1,phase:"night",...Gs}],Zx={phase:"day",opacity:0,map:0,glow:0,stars:0,glass:0,...Sl},Nx={phase:"night",opacity:.7,map:.78,glow:1,stars:1,glass:1,...Gs};function op(e){const t=e.replace("#","");return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}function Zt(e,t,n){const s=op(e),o=op(t),i=a=>Math.round(s[a]+(o[a]-s[a])*n).toString(16).padStart(2,"0");return"#"+i(0)+i(1)+i(2)}const To=(e,t,n)=>e+(t-e)*n;function Fx(e){const t=e.getHours()*60+e.getMinutes()+e.getSeconds()/60;let n=0;for(;n<Wi.length-2&&t>=Wi[n+1].m;)n++;const s=Wi[n],o=Wi[n+1],i=Math.max(1,o.m-s.m),a=Math.max(0,Math.min(1,(t-s.m)/i));return{phase:a<.5?s.phase:o.phase,opacity:To(s.opacity,o.opacity,a),map:To(s.map,o.map,a),glow:To(s.glow,o.glow,a),stars:To(s.stars,o.stars,a),glass:To(s.glass,o.glass,a),tint:Zt(s.tint,o.tint,a),body:Zt(s.body,o.body,a),pageA:Zt(s.pageA,o.pageA,a),pageB:Zt(s.pageB,o.pageB,a),spot:Zt(s.spot,o.spot,a),fieldA:Zt(s.fieldA,o.fieldA,a),fieldB:Zt(s.fieldB,o.fieldB,a),win:Zt(s.win,o.win,a),win2:Zt(s.win2,o.win2,a),house:Zt(s.house,o.house,a),mapTint:Zt(s.mapTint,o.mapTint,a)}}function ip(e,t){return t==="day"?Zx:t==="night"?Nx:Fx(e)}function jx(e){return e==="day"||e==="night"||e==="auto"}function Gx(e,t=!1){return t?!0:e==="lamp"||e==="window"||e==="stars"||e==="tv"||/lamp|light|lantern|candle|string-lights|night-light/i.test(e)}function ap(){try{if(typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches)return!0}catch{}if(typeof navigator>"u")return!1;const e=navigator.hardwareConcurrency;if(typeof e=="number"&&e>0&&e<=2)return!0;const t=navigator.deviceMemory;return typeof t=="number"&&t>0&&t<=2}const rp={day:"night",night:"auto",auto:"day"},lp={day:"Day",night:"Night",auto:"Auto"},Xf='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><g fill="none" stroke="#ffb15c" stroke-width="3" stroke-linecap="round"><path d="M24 7 V13 M24 35 V41 M7 24 H13 M35 24 H41 M12 12 L16 16 M32 32 L36 36 M36 12 L32 16 M16 32 L12 36"/></g></svg>',Yx='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M30 8 a14 14 0 1 0 0 32 a11 11 0 1 1 0 -32z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="3"/><circle cx="14" cy="16" r="1.7" fill="#ffd166"/><circle cx="18" cy="28" r="1.2" fill="#fff"/><circle cx="11" cy="24" r="1" fill="#fff"/></svg>',Kx='<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="28" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M34 8 a9 9 0 1 0 0 18 a7 7 0 1 1 0 -18z" fill="#fff6e4" stroke="#5a3d5c" stroke-width="2.5"/><circle cx="14" cy="16" r="1.3" fill="#ffd166"/></svg>',Xx={day:Xf,night:Yx,auto:Kx},Jx="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)";function e7(){if(document.getElementById("skyInk"))return;const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.id="skyInk",e.setAttribute("aria-hidden","true"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.style.cssText="position:fixed;left:0;top:0;width:0;height:0;overflow:hidden;pointer-events:none",e.innerHTML=`
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
  `,document.head.appendChild(t)}function t7(e){e7();const t=ap();let n=s7(),s=null,o=ip(new Date,n),i=0;e.innerHTML=`<button type="button" class="skyBtn" aria-label="Day. Tap for night.">${Xf}</button>`;const a=e.querySelector("button"),r=h=>{o=h;const m=document.documentElement,b=Math.max(0,Math.min(1,h.glow));m.style.setProperty("--sky-opacity",h.opacity.toFixed(3)),m.style.setProperty("--sky-map-opacity",h.map.toFixed(3)),m.style.setProperty("--sky-glow",b.toFixed(3)),m.style.setProperty("--sky-stars",h.stars.toFixed(3)),m.style.setProperty("--sky-glass",h.glass.toFixed(3)),m.style.setProperty("--sky-tint",h.tint),m.style.setProperty("--sky-body",h.body),m.style.setProperty("--sky-page-a",h.pageA),m.style.setProperty("--sky-page-b",h.pageB),m.style.setProperty("--sky-spot",h.spot),m.style.setProperty("--sky-field-a",h.fieldA),m.style.setProperty("--sky-field-b",h.fieldB),m.style.setProperty("--sky-win",h.win),m.style.setProperty("--sky-win-2",h.win2),m.style.setProperty("--sky-house-win",h.house),m.style.setProperty("--sky-map-tint",h.mapTint),m.style.setProperty("--sky-glow-soft",`rgba(255, 186, 80, ${(b*.72).toFixed(3)})`),m.style.setProperty("--sky-glow-hot",`rgba(255, 220, 120, ${(b*.96).toFixed(3)})`),m.style.setProperty("--sky-glow-clear","rgba(255, 186, 80, 0)"),m.style.setProperty("--sky-glow-wash",`rgba(255, 170, 70, ${(b*.55).toFixed(3)})`),m.style.setProperty("--sky-glow-map",`rgba(255, 196, 110, ${(b*.7).toFixed(3)})`);const _=h.phase==="golden"?.24:h.phase==="dawn"?.22:0,y=h.phase==="golden"?"186, 110, 52":"140, 62, 18";m.style.setProperty("--sky-shadow",`rgba(${y}, ${_.toFixed(3)})`);const u=h.phase==="night"?.55:h.phase==="golden"?.08:h.phase==="dawn"?.16:0;m.style.setProperty("--sky-vig",`rgba(12, 10, 32, ${u.toFixed(3)})`);const k=h.phase==="golden"?"255, 196, 80":h.phase==="dawn"?"255, 214, 230":"255, 246, 214";m.style.setProperty("--sky-orb",`rgba(${k}, ${Math.min(1,h.glass).toFixed(3)})`),m.dataset.sky=h.phase,m.dataset.skyChoice=n,m.classList.toggle("sky-static",t),m.classList.toggle("sky-live",!t),a.innerHTML=Xx[n],a.setAttribute("aria-label",`${lp[n]}. Tap for ${lp[rp[n]].toLowerCase()}.`)},l=()=>ip(s??new Date,n),c=()=>r(l()),d=()=>{i&&clearInterval(i),i=window.setInterval(()=>{s||c()},t?6e4:1e3)},f=h=>{n=h;try{localStorage.setItem(qt(Kf),n)}catch{}c()};a.addEventListener("click",()=>f(rp[n])),document.documentElement.classList.toggle("sky-static",t),c(),d();const g=document.getElementById("mapWorld");g&&n7(g);try{matchMedia("(prefers-reduced-motion: reduce)").addEventListener?.("change",()=>{const m=ap();document.documentElement.classList.toggle("sky-static",m),document.documentElement.classList.toggle("sky-live",!m)})}catch{}try{matchMedia(Jx).addEventListener?.("change",()=>ea())}catch{}return window.addEventListener("resize",()=>ea()),new MutationObserver(()=>ea()).observe(document.body,{attributes:!0,attributeFilter:["class"]}),{choice:()=>n,look:()=>o,setChoice(h){f(h)},freeze(h){s=h,c()}}}function ea(){const e=document.getElementById("skyMount"),t=document.getElementById("menuDaySlot");e&&t&&e.parentElement!==t&&t.appendChild(e),t&&(t.hidden=!1),e&&(e.style.left="",e.style.top="")}function n7(e){const t=document.createElement("div");t.className="skyTint",t.setAttribute("aria-hidden","true");const n=document.createElement("div");n.className="skyLamps",n.setAttribute("aria-hidden","true");const s=document.createElement("div");s.className="skyBits",s.setAttribute("aria-hidden","true"),s.innerHTML='<i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="star"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i><i class="fly"></i>';const o=()=>{e.contains(t)||e.appendChild(t),e.contains(n)||e.appendChild(n),e.contains(s)||e.appendChild(s)};o(),new MutationObserver(o).observe(e,{childList:!0})}function s7(){try{const e=localStorage.getItem(qt(Kf));if(jx(e))return e}catch{}return"auto"}const Ys=[{name:"Pink",fill:"#ff7eb3",ink:"#9d174d"},{name:"Lilac",fill:"#c9b3ff",ink:"#5f3dc4"},{name:"Aqua",fill:"#66d9e8",ink:"#0b7285"},{name:"Gold",fill:"#ffd43b",ink:"#e67700"}],ft="#5a3d5c",Nr=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),cp=e=>typeof e=="number"?e:{skip:10,rev:11,d2:12,wild:13,w4:14}[e]??0,dp=e=>typeof e.v=="number"?String(e.v):e.v==="skip"?"✕":e.v==="rev"?"↻":e.v==="d2"?"+2":e.v==="w4"?"+4":"♛",o7=e=>e.v==="skip"?"Nope":e.v==="rev"?"Flip":e.v==="d2"?"+2":e.v==="wild"||e.v==="w4"?"Crown":"",us=(e,t,n=1,s="#ffd43b")=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 -6 L1.4 -1.4 L6 -1 L1.6 1.4 L3 6 L0 3 L-3 6 L-1.6 1.4 L-6 -1 L-1.4 -1.4 Z" fill="${s}" stroke="${ft}" stroke-width="1" stroke-linejoin="round"/>`,ta=(e,t,n=1)=>`<path transform="translate(${e} ${t}) scale(${n})" d="M0 1.2 C-2.2 -1.6 -5.2 -0.6 -3.6 2.2 C-2.4 4 0 5.2 0 5.2 C0 5.2 2.4 4 3.6 2.2 C5.2 -0.6 2.2 -1.6 0 1.2 Z" fill="#ff4d94" stroke="${ft}" stroke-width="1"/>`;function i7(e){return e.v==="wild"||e.v==="w4"?`<g transform="translate(14 28)">
      <path d="M4 26 L10 8 L18 16 L24 2 L30 16 L38 8 L44 26 Z" fill="#ffd43b" stroke="${ft}" stroke-width="2.2" stroke-linejoin="round"/>
      <rect x="4" y="26" width="40" height="8" rx="2" fill="#ffd43b" stroke="${ft}" stroke-width="2.2"/>
      <circle cx="10" cy="8" r="2.4" fill="#ff7eb3"/><circle cx="24" cy="3" r="2.4" fill="#66d9e8"/><circle cx="38" cy="8" r="2.4" fill="#d0bfff"/>
      ${us(-2,0,.7)}${us(46,4,.65,"#fff")}${us(22,-4,.55,"#ff7eb3")}
    </g>${e.v==="w4"?`<text x="35" y="78" text-anchor="middle" font-size="16" font-weight="900" fill="${ft}" font-family="Nunito, ui-rounded, system-ui, sans-serif">+4</text>`:""}`:e.v==="d2"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff" stroke="${ft}" stroke-width="2.4"/>
      ${ta(14,8,1.35)}${ta(32,8,1.35)}
      <path d="M12 26 Q23 34 34 26" fill="none" stroke="${ft}" stroke-width="2.4" stroke-linecap="round"/>
      ${ta(40,22,.8)}
    </g>`:e.v==="rev"?`<g fill="none" stroke="${ft}" stroke-width="3.2" stroke-linecap="round">
      <path d="M16 40 C42 22 54 52 34 60 C16 68 12 46 30 40"/>
      <path d="M14 38 L22 30 L24 42" stroke-linejoin="round"/>
    </g>${us(48,28,.85)}${us(20,62,.6,"#ff7eb3")}${us(50,58,.55,"#66d9e8")}`:e.v==="skip"?`<g transform="translate(12 30)">
      <circle cx="23" cy="18" r="18" fill="#fff6d8" stroke="${ft}" stroke-width="2.4"/>
      <rect x="8" y="12" width="14" height="9" rx="3" fill="#2b1430"/><rect x="24" y="12" width="14" height="9" rx="3" fill="#2b1430"/>
      <path d="M22 16.5 H24 M5 14 H2 M41 14 H44" stroke="${ft}" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 27 Q23 32 34 27" fill="none" stroke="${ft}" stroke-width="2.2" stroke-linecap="round"/>
    </g>`:""}function Pl(e){const t=e.c===4,n=t?{fill:"#fff8ee",ink:ft}:Ys[e.c]??Ys[0],s=typeof e.v=="number",o=o7(e),i=t?'<rect x="2" y="2" width="66" height="96" rx="13" fill="#fff8ee" stroke="#ff7eb3" stroke-width="4"/><rect x="5" y="5" width="60" height="90" rx="11" fill="none" stroke="#d0bfff" stroke-width="2"/><rect x="7.5" y="7.5" width="55" height="85" rx="9" fill="none" stroke="#66d9e8" stroke-width="1.6"/><rect x="9.5" y="9.5" width="51" height="81" rx="8" fill="none" stroke="#ffd43b" stroke-width="1.6"/>':`<rect x="2" y="2" width="66" height="96" rx="13" fill="${n.fill}" stroke="${ft}" stroke-width="3"/><rect x="6" y="6" width="58" height="88" rx="10" fill="none" stroke="#fff" stroke-width="2" opacity=".7"/>`,a='<ellipse cx="24" cy="20" rx="16" ry="8" fill="#fff" opacity=".38"/>',r=`fill="${n.ink}" stroke="#fff" stroke-width="3" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif"`,l=`<text x="8" y="16" font-size="13" font-weight="900" ${r}>${dp(e)}</text>`+(s?`<text x="62" y="94" font-size="13" font-weight="900" text-anchor="end" ${r}>${dp(e)}</text>`:""),c=s?`<text x="35" y="68" text-anchor="middle" font-size="48" font-weight="900" fill="${n.ink}" stroke="#fff" stroke-width="6" paint-order="stroke" font-family="Nunito, ui-rounded, system-ui, sans-serif">${e.v}</text>`:`${i7(e)}${o?`<text x="35" y="92" text-anchor="middle" font-size="12" font-weight="900" ${r}>${o}</text>`:""}`;return`<svg viewBox="0 0 70 100">${i}${a}${l}${c}</svg>`}const a7=[[18,28],[40,28],[29,46],[18,64],[40,64],[29,78]].map(([e,t])=>ta(e,t,.9)).join(""),r7=`<svg viewBox="0 0 70 100"><rect x="2" y="2" width="66" height="96" rx="13" fill="#ff4d94" stroke="${ft}" stroke-width="3"/>
  <rect x="7" y="7" width="56" height="86" rx="10" fill="none" stroke="#ffd43b" stroke-width="3"/>
  <rect x="11" y="11" width="48" height="78" rx="8" fill="#ff7eb3"/>
  ${a7}
  <circle cx="35" cy="50" r="14" fill="#fff6fb" stroke="${ft}" stroke-width="2.4"/>
  ${us(35,50,1.15,"#ffd43b")}
</svg>`,Jf=(e,t)=>{if(t.turn<0||t.drawn!=null&&e.id!==t.drawn)return!1;const n=t.top;return e.c===4||e.c===t.color||e.v===n.v&&n.c!==4};let Tl=null,Mt=null,Ns=-1,pp=-1;function fp(e,t){Tl=e;const n=t.table,s=n.view;if(!s||!s.top){e.innerHTML="";return}n.tb!==pp&&(Mt=null,Ns=-1,pp=n.tb);const o=n.you,i=o!==null&&Array.isArray(s.hand)?s.hand.slice():[];Mt!==null&&!i.some(u=>u.id===Mt)&&(Mt=null);const a=s.ev;let r=null;if(a&&a.n!==Ns&&Ns>=0&&a.k==="play"&&a.card){const u=e.querySelector(`[data-card="${a.card.id}"]`)||e.querySelector(`[data-p="${a.p}"]`);u&&(r=u.getBoundingClientRect())}const c=n.phase==="play"&&s.turn>=0,d=c&&o!==null&&s.turn===o,f=o!==null&&i.length<=2&&i.length>0&&!s.slay?.[o]&&d,g=d&&s.drawn==null&&n.phase==="play",h=d&&s.drawn!=null&&n.phase==="play",m=i.sort((u,k)=>u.c-k.c||cp(u.v)-cp(k.v)),b=c?n.players[s.turn]:"",_=c?d?"Your turn!":`${Nr(t.name(b))}'s turn`:"",y=Ys[s.color]??Ys[0];if(e.innerHTML=`<div class="slayFelt">
    ${_?`<div class="whose ${d?"yours":""}" id="whoseTurn">${_}<span class="slayDir" aria-hidden="true">${s.dir===1?"→":"←"}</span></div>`:""}
    <div class="slayOpps">${n.players.map((u,k)=>k===o?"":`<div class="slayOpp ${s.turn===k?"isTurn":""}" data-p="${k}" data-count="${s.counts?.[k]??0}"><span class="chipFace">${t.face(u)}</span><b>${Nr(t.name(u))}</b><span class="cnt">${s.counts?.[k]??0}</span>${t.away(u)?'<i class="awayBadge">away</i>':""}${s.slay?.[k]?"<em>SLAY!</em>":""}</div>`).join("")}</div>
    <div class="slayPile">
      <button type="button" id="slayDeck" class="slayDeck" ${g?"":"disabled"} aria-label="Draw a card">${r7}<span>${s.deck??0}</span></button>
      <div id="slayDiscard" class="slayDiscard" data-top="${s.top.id}">${Pl(s.top)}</div>
      <div class="nowColor" data-color="${s.color}" style="background:${y.fill}" aria-label="${y.name}"></div>
    </div>
    ${o===null?'<p class="watching">You are watching</p>':""}
    ${Mt!==null?`<div id="crownPick" class="crownPick"><p>Pick a color for your Crown!</p><div class="crownRow">${Ys.map((u,k)=>`<button type="button" data-color="${k}" aria-label="${u.name}" style="background:${u.fill}"><span>${u.name}</span></button>`).join("")}</div></div>`:""}
    <div id="slayHand" class="slayHand ${d?"isTurn":""}">${m.map(u=>{const k=d&&n.phase==="play"&&Jf(u,s),x=k?"can":d?"dim":"wait",R=typeof u.v=="number"?Ys[u.c].name+" "+u.v:u.v==="wild"?"Crown":u.v==="w4"?"Crown plus 4":u.v==="d2"?"plus 2":u.v==="rev"?"Flip":"Nope";return`<button type="button" class="slayCard ${x} ${u.id===s.drawn?"justDrew":""} ${u.id===Mt?"picked":""}" data-card="${u.id}" data-c="${u.c}" data-v="${u.v}" aria-label="${Nr(R)}" ${k?"":"disabled"}>${Pl(u)}</button>`}).join("")}</div>
    ${c&&o!==null?`<button type="button" id="slayCall" class="slayCall ${f?"ready":""}" ${f?"":"disabled"}>SLAY!</button>`:""}
    <button type="button" id="slayPass" class="slayPass ${h?"":"hidden"}" ${h?"":"disabled"}>Pass</button>
  </div>`,a&&a.n!==Ns){const u=Ns;if(Ns=a.n,u>=0){if(a.k==="play"&&a.card){const k=e.querySelector("#slayDiscard");k&&l7(r,a.card,k.getBoundingClientRect()),a.card.v==="skip"?t.toast("Nope!"):a.card.v==="rev"?t.toast("Flip!"):a.card.v==="d2"?t.toast("+2!"):a.card.v==="w4"&&t.toast("Crown +4!"),t.sfx.swish()}a.vdrew&&t.toast("Forgot to say SLAY! Draw 2"),a.k==="slay"&&t.sfx.sparkle()}}}function l7(e,t,n){const s=document.createElement("div");s.className="flyCard",s.innerHTML=Pl(t);const o=e?.width||70,i=e?.height||100;Object.assign(s.style,{left:(e?.left??innerWidth/2)+"px",top:(e?.top??80)+"px",width:o+"px",height:i+"px"}),document.body.appendChild(s),requestAnimationFrame(()=>{s.style.left=n.left+"px",s.style.top=n.top+"px",s.style.width=Math.max(n.width,70)+"px",s.style.height=Math.max(n.height,96)+"px"}),setTimeout(()=>s.remove(),560)}const c7={id:"slay",render:fp,handle(e,t){const n=t.table.view,s=t.table.you;if(!n||t.table.phase!=="play"||s===null)return!1;const o=n.hand??[];if(e.closest("#slayCall"))return o.length<=2&&o.length>0&&!n.slay?.[s]&&(t.move({k:"slay"}),t.sfx.sparkle()),!0;if(e.closest("#slayDeck"))return n.turn===s&&n.drawn==null&&(Mt=null,t.move({k:"draw"}),t.sfx.click()),!0;if(e.closest("#slayPass"))return n.turn===s&&n.drawn!=null&&(Mt=null,t.move({k:"pass"}),t.sfx.click()),!0;const i=e.closest("#crownPick [data-color]");if(i&&Mt!==null)return t.move({k:"play",id:Mt,color:+i.dataset.color}),Mt=null,t.sfx.sparkle(),!0;const a=e.closest("#slayHand [data-card]");if(!a||a.hasAttribute("disabled"))return!!a;const r=+a.dataset.card,l=o.find(c=>c.id===r);return!l||n.turn!==s||!Jf(l,n)||(l.c===4?(Mt=r,t.sfx.pop(),Tl&&fp(Tl,t)):(Mt=null,t.move({k:"play",id:r}),t.sfx.click())),!0}},eg="#5a3d5c",gp=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),d7=`<svg viewBox="0 0 48 48"><path d="M24 42 C8 30 2 22 7 13 C11 6 20 8 24 16 C28 8 37 6 41 13 C46 22 40 30 24 42 Z" fill="#ff4d94" stroke="${eg}" stroke-width="3" stroke-linejoin="round"/><path d="M16 16 Q20 12 22 18" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity=".8"/></svg>`,p7=`<svg viewBox="0 0 48 48"><path d="M24 3 L29 17 H44 L32 26 L37 42 L24 33 L11 42 L16 26 L4 17 H19 Z" fill="#66d9e8" stroke="${eg}" stroke-width="3" stroke-linejoin="round"/><path d="M24 12 L26 18 H22 Z" fill="#fff" opacity=".8"/></svg>`,f7={id:"four",render(e,t){const n=t.table,s=n.view;if(!s||!Array.isArray(s.b)){e.innerHTML="";return}const o=n.you,i=o!==null&&s.turn===o&&n.phase==="play",a=new Set((s.line??[]).map(([b,_])=>b+":"+_)),r=s.last;let l="";for(let b=0;b<7;b++){const _=s.b[b];let y="";for(let k=5;k>=0;k--){const x=k<_.length?_[k]:null,R=a.has(b+":"+k)?" hot":"",H=r&&r.col===b&&r.row===k?" just":"";y+=`<span class="fourCell${x===0?" heart":x===1?" star":""}${R}${H}">${x===0?d7:x===1?p7:""}</span>`}const u=i&&_.length<6;l+=`<button type="button" class="fourCol" data-col="${b}" ${u?"":"disabled"} aria-label="Drop in column ${b+1}">${y}<span class="dropHint">${u?"▼":""}</span></button>`}const c=n.phase==="play"&&s.turn>=0,d=c?n.players[s.turn]:"",f=c?i?"Your turn!":`${gp(t.name(d))}'s turn`:"",g=o===0?"You are <b>pink hearts</b>":o===1?"You are <b>aqua stars</b>":"Pink hearts and aqua stars",h=b=>b===0?"♥":"★",m=n.players.map((b,_)=>`<div class="playerChip ${s.turn===_?"isTurn":""}"><span class="chipFace">${t.face(b)}</span><b>${gp(t.name(b))} ${h(_)}</b>${t.away(b)?'<i class="awayBadge">away</i>':""}</div>`).join("");e.innerHTML=`<div class="fourPlay">
      ${f?`<div class="whose ${i?"yours":""}" id="whoseTurn">${f}</div>`:""}
      <div class="fourChips">${m}</div>
      <p class="fourLegend">${g}</p>
      <div class="fourBoard" id="fourBoard">${l}</div>
    </div>`},handle(e,t){const n=e.closest(".fourCol");if(!n)return!1;const s=t.table.view,o=t.table.you;if(n.hasAttribute("disabled")||!s||o===null||s.turn!==o||t.table.phase!=="play")return!0;const i=+n.dataset.col;return!Number.isInteger(i)||s.b[i].length>=6||(t.move({col:i}),t.sfx.click()),!0}},hp={slay:c7,four:f7},Ui=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),g7={notHere:"Come into the clubhouse first!",taken:"Someone is sitting there!",playing:"You are already in this game!",playingElsewhere:"Finish your other game first!",notHost:"Waiting for the host…",needMore:"Play with friends on your street",tooMany:"That table is full!",notPlaying:"The game has not started!",notPlayer:"Sit down to play!",illegal:"You can't play that!",notAway:"She is still here!",tooSoon:"Give her a moment!",notSeated:"You are not at this table!",noMove:"No move to play!"};function h7(e){const t=document.getElementById("tableOverlay");let n=null,s="",o=0;const i=y=>y.away==null?0:y.away+Math.max(0,Date.now()-(y.receivedAt??Date.now())),a=()=>{o&&(clearInterval(o),o=0)},r=y=>{const u=!!y&&y.phase==="play"&&y.away!=null&&n!==null;u&&!o&&(o=window.setInterval(()=>f(),1e3)),u||a()},l=()=>e.hood(),c=()=>{const y=l();return!y||n===null?null:y.tables.get(n)??null},d=y=>{const u=l();return{table:y,me:u.pid,name:k=>u.players.get(k)?.nickname??"friend",face:k=>{const x=u.players.get(k)?.look;return x?Gl(yt(x)):""},move:k=>u.tbl({op:"move",tb:y.tb,m:k}),away:k=>{if(k===u.pid)return!1;const x=u.players.get(k);if(x&&!x.online)return!0;const R=u.presence.get(k);return!R||R.where!=="gameroom"},toast:e.toast,sfx:e.sfx}};t.addEventListener("click",y=>{const u=y.target;if(u.closest("#tblBack")){h(),e.sfx.swish();return}if(u.closest("#tblLeave")){m();return}if(u.closest("#tblStart")){b();return}if(u.closest("#tblNudge")){_();return}const k=c();k&&hp[k.game]?.handle(u,d(k))});function f(){const y=l(),u=c();if(!y||!u){t.classList.add("hidden"),t.innerHTML="",a();return}const k=ef[u.game],x=y.pid,R=u.seats.includes(x),H=u.seats.filter(Boolean).length,I=u.phase==="play"&&u.you!==null&&u.view&&u.view.turn===u.you,K=u.view?.winPid??null;let le="";if(u.phase==="over"){const P=K?y.players.get(K)?.nickname??"Friend":"";u.game==="slay"?le=K?K===x?"You slayed!":`${Ui(P)} slayed!`:"It's a tie!":le=u.view?.draw||!K?"It's a tie!":K===x?"You got four!":`${Ui(P)} got four!`;const B=u.tb+":"+u.seq;K===x&&s!==B&&(s=B,e.confetti(),e.sfx.sparkle())}const ce=i(u),G=u.phase==="play"&&R&&ce>=iu&&u.you!==null&&!!u.view&&u.view.turn!==u.you&&u.view.turn>=0,pe=u.phase!=="play"&&u.host===x&&H>=k.minPlayers&&H<=k.maxPlayers,en=R&&u.phase==="lobby"&&u.host!==x&&H>=k.minPlayers,Dt=R&&u.phase==="lobby"&&H<k.minPlayers;t.classList.remove("hidden"),t.dataset.tb=String(u.tb),t.dataset.phase=u.phase,t.dataset.game=u.game,t.dataset.you=u.you===null?"":String(u.you),t.innerHTML=`<div class="tblCard ${I?"yourTurn":""} game-${u.game}">
      <div class="tblTop"><h2>${Ui(k.name)}</h2><div class="seatDots">${u.seats.map(P=>`<i class="${P?"on":""} ${P===x?"me":""}"></i>`).join("")}</div></div>
      ${le?`<div class="winWrap"><div class="winBanner" id="winBanner">${le}</div></div>`:""}
      <div id="tblStage"></div>
      <div class="tblBar">
        ${pe?'<button type="button" id="tblStart">Start</button>':""}
        ${en?'<p class="tblWait">Waiting for the host…</p>':""}
        ${G?'<button type="button" id="tblNudge">Play for her</button>':""}
        <button type="button" id="tblBack">Back to room</button>
        <button type="button" id="tblLeave">Leave table</button>
      </div>
      ${Dt?'<p class="tblWait" id="needFriend">Play with friends on your street</p>':""}
    </div>`;const Qe=t.querySelector("#tblStage");u.phase==="lobby"||!u.view?Qe.innerHTML=g(u,y,x):hp[u.game]?.render(Qe,d(u)),r(u)}function g(y,u,k){return`<div class="lobby">${y.seats.map((x,R)=>`<div class="lobbySeat ${x?"filled":""} ${x===k?"me":""}">
      <span>${R+1}</span><b>${x?Ui(u.players.get(x)?.nickname??"friend"):"Empty"}</b>
      ${x&&x===y.host?"<i>host</i>":""}${x===k?"<i>you</i>":""}
    </div>`).join("")}</div>`}function h(){n=null,a(),t.classList.add("hidden"),t.innerHTML=""}function m(){const y=l(),u=c();y&&u&&u.seats.includes(y.pid)&&y.tbl({op:"leave",tb:u.tb}),e.sfx.click(),h()}function b(){const y=l(),u=c();y&&u&&(y.tbl({op:"start",tb:u.tb}),e.sfx.sparkle())}function _(){const y=l(),u=c();y&&u&&(y.tbl({op:"nudge",tb:u.tb}),e.sfx.click())}return{open(y){n=y,f()},close:h,refresh:f,fail(y,u){e.toast(g7[u]||"Try that again!"),e.sfx.pop(),n===y&&f()},isOpen:()=>n}}const u7=120,m7=192,y7=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);let J=null,Zn=null,kn=null,up=!1;const ts=()=>(document.getElementById("gameroom")?.clientHeight||600)/Ea,na=()=>Zn;function mo(){const e=J?.hood();if(!e)return null;for(const[t,n]of e.tables){const s=n.seats.indexOf(e.pid);if(s>=0){const o=ki(Number(t))[s];return{tb:Number(t),seat:s,x:o.x,y:o.y}}}return null}function w7(){const e=J?.hood();if(!e)return!1;for(const[t,n]of e.players)if(t!==e.pid&&n.online)return!0;return!1}function b7(e){if(J=e,Zn=h7({hood:e.hood,toast:e.toast,confetti:()=>yf(),sfx:e.sfx}),up)return Zn;up=!0;const t=document.getElementById("grWorld");return t.addEventListener("click",k7),t.addEventListener("pointerdown",n=>{n.target.closest(".grChair, .grTable, .grDoor, .pet")&&n.stopPropagation()}),Zn}function Lc(){if(!J)return;const e=ts(),t=document.getElementById("grWorld"),n=o=>o*e+"px";t.style.width=sr*e+"px",t.style.height=Ea*e+"px",t.style.setProperty("--sc",String(e));let s=Mx();s+=`<button class="grDoor" data-gr="map" aria-label="Back to the map" style="left:${n(78)};top:${n(268)};width:${n(86)};height:${n(170)}"></button>`,ni.forEach((o,i)=>{const a=o.seats>=6?560:o.seats>=4?440:340;s+=`<button class="grTable" data-tb="${i}" aria-label="${ef[o.game].name} table" style="left:${n(o.x-a/2)};top:${n(456)};width:${n(a)};height:${n(70)}"></button>`,ki(i).forEach((r,l)=>{const c=76*e,d=72*e,f=Math.max(c,44),g=Math.max(d,44),h=(r.x-38)*e-(f-c)/2,m=(r.y-16)*e-(g-d)/2;s+=`<button class="grChair" data-tb="${i}" data-seat="${l}" aria-label="Empty chair" style="left:${h}px;top:${m}px;width:${f}px;height:${g}px"></button>`})}),s+='<div class="savatars" id="gavatars"></div>',t.innerHTML=s,jo()}function jo(){if(!J||J.view()!=="gameroom")return;const e=document.getElementById("gavatars");if(!e)return;const t=ts(),n=new Set;for(const i of v7()){n.add(i.key);let a=e.querySelector(`.savatar[data-pid="${i.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(i.mine?"mine":"other"),a.dataset.pid=i.key,e.appendChild(a),i.mine&&x7(a));const r=JSON.stringify(i.look)+i.name+(i.away?":away":"");if(a.dataset.look!==r){const g=a.querySelector(".bubble");a.innerHTML=`<div class="inner">${yt(i.look)}</div>${i.name?`<div class="nametag">${y7(i.name)}${i.away?'<i class="awayBadge">away</i>':""}</div>`:""}`,g&&a.appendChild(g),a.dataset.look=r}const l=(Ps[i.look.size]??1)*t*.95,c=u7*l,d=m7*l,f=i.seated?i.y-8:i.y;a.style.left=i.x*t-c/2+"px",a.style.top=f*t-d+"px",a.style.width=c+"px",a.style.height=d+"px",a.style.zIndex=String(100+Math.round(i.y)),a.classList.toggle("flipped",i.flip),a.classList.toggle("away",i.away),a.classList.toggle("seated",i.seated),bi(a,i.look,i.mine)}e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),J.refreshNear();const s=J.hood();document.querySelectorAll("#grWorld .grChair").forEach(i=>{const a=s?.tables.get(+i.dataset.tb)?.seats[+i.dataset.seat];i.classList.toggle("taken",!!a);const r=a?s.players.get(a)?.nickname:"";i.setAttribute("aria-label",r?r+" is sitting":"Empty chair")});const o=document.getElementById("grSolo");o&&o.classList.toggle("hidden",w7())}function v7(){const e=[],t=J.hood();if(t){const n=new Map;for(const[a,r]of t.tables)r.seats.forEach((l,c)=>{l&&n.set(l,ki(Number(a))[c])});const s=[...t.presence.entries()],o=J.myPres();o&&s.push([t.pid,o]);const i=new Set;for(const[a,r]of s){if(r.where!=="gameroom")continue;const l=t.players.get(a);if(!l)continue;i.add(a);const c=n.get(a);e.push({key:a,look:l.look,name:l.nickname,x:c?.x??r.x,y:c?.y??r.y,flip:r.flip,mine:a===t.pid,away:!1,seated:!!c})}for(const[a,r]of n){if(i.has(a))continue;const l=t.players.get(a);l&&e.push({key:a,look:l.look,name:l.nickname,x:r.x,y:r.y,flip:!1,mine:!1,away:!0,seated:!0})}}else{const n=J.solo();if(n?.where==="gameroom"){const s=J.soloLook();e.push({key:"solo",look:s.look,name:"",x:n.x,y:n.y,flip:n.flip,mine:!0,away:!1,seated:!1})}}return e}function k7(e){if(!J||J.view()!=="gameroom")return;const t=e.target,n=t.closest(".savatar");if(n){const c=J.hood(),d=n.dataset.pid;if(c&&d){for(const[f,g]of c.tables)if(g.seats.includes(d)){Zn?.open(Number(f));return}}return}if(t.closest('[data-gr="map"]')){J.goMap();return}const s=t.closest(".grChair");if(s){_7(+s.dataset.tb,+s.dataset.seat);return}const o=t.closest(".grTable");if(o){if(!J.hood()){tg();return}Zn?.open(+o.dataset.tb),J.sfx.click();return}if(t.closest(".pet")||mo())return;const i=document.getElementById("grWorld").getBoundingClientRect(),a=ts(),r=(e.clientX-i.left)/a,l=(e.clientY-i.top)/a;l<430||(kn={x:Math.max(60,Math.min(sr-60,r)),y:Math.max(470,Math.min(590,l))})}function _7(e,t){if(!J)return;const n=J.hood();if(!n){tg();return}const s=n.tables.get(e)?.seats[t];if(s&&s!==n.pid){J.toast((n.players.get(s)?.nickname??"Someone")+" is sitting there!"),J.sfx.pop(),Zn?.open(e);return}kn=null,n.tbl({op:"sit",tb:e,seat:t});const o=ki(e)[t];J.setPres({where:"gameroom",x:o.x,y:Math.max(470,Math.min(590,o.y)),flip:!1}),Zn?.open(e),J.sfx.click()}function tg(){if(!J)return;const e=document.getElementById("grSolo");e&&(e.classList.remove("hidden"),e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump")),J.toast("Play with friends on your street"),J.sfx.pop()}function $7(e){if(!J||J.view()!=="gameroom"||!kn)return;if(mo()){kn=null;return}const t=J.hood()?J.myPres():J.solo();if(!t||t.where!=="gameroom"){kn=null;return}const n=kn.x-t.x,s=kn.y-t.y,o=Math.hypot(n,s);if(o<4){kn=null;return}const i=Math.min(o,300*e),a={where:"gameroom",x:t.x+n/o*i,y:t.y+s/o*i,flip:Math.abs(n)>2?n<0:t.flip};J.setPres(a);const r=ts(),l=document.getElementById("grScroll"),c=a.x*r-l.scrollLeft;(c<l.clientWidth*.22||c>l.clientWidth*.78)&&(l.scrollLeft=a.x*r-l.clientWidth/2)}function x7(e){e.addEventListener("pointerdown",t=>{if(!J||mo())return;const n=J.hood()?J.myPres():J.solo();if(!n||n.where!=="gameroom")return;t.preventDefault(),t.stopPropagation(),kn=null;const s=ts(),o=document.getElementById("grWorld"),i=document.getElementById("grScroll"),a=y=>{const u=o.getBoundingClientRect();return{x:(y.clientX-u.left)/s,y:(y.clientY-u.top)/s}},r=a(t),l={x:n.x-r.x,y:n.y-r.y};let c=t,d=0,f=n.x,g=!1;const h=y=>{const u=J.hood()?J.myPres():J.solo();if(!u||u.where!=="gameroom")return;const k=a(y),x=Math.max(60,Math.min(sr-60,k.x+l.x)),R=Math.max(470,Math.min(590,k.y+l.y));if(!g&&Math.hypot(x-u.x,R-u.y)<6)return;g=!0;const H=Math.abs(x-f)>3?x<f:u.flip;Math.abs(x-f)>3&&(f=x),J.setPres({where:"gameroom",x,y:R,flip:H})},m=()=>{const y=i.getBoundingClientRect(),u=c.clientX<y.left+70?-12:c.clientX>y.right-70?12:0;u&&g&&(i.scrollLeft+=u,h(c)),d=requestAnimationFrame(m)};d=requestAnimationFrame(m),e.classList.add("lifted"),J.sfx.pick();const b=y=>{y.pointerId===t.pointerId&&(c=y,h(y))},_=y=>{y.pointerId===t.pointerId&&(cancelAnimationFrame(d),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",_),e.classList.remove("lifted"),g&&J.sfx.drop())};window.addEventListener("pointermove",b),window.addEventListener("pointerup",_)})}const Do=Vx(),X=Xp();X.born&&typeof navigator<"u"&&!navigator.webdriver&&!X.get().baby&&X.dispatch({type:"baby/meet",now:Date.now()});let De=X;const ng=[],mp=new WeakSet;function sg(e){mp.has(e)||(mp.add(e),e.subscribe((t,n)=>{De===e&&ng.forEach(s=>s(t,n))}))}sg(X);const C={get:()=>De.get(),dispatch(e){De.dispatch(e)},subscribe:e=>{ng.push(e)}},ke=zt,Ue=$n,co=390;let ae=1e3;const Ts=()=>Math.max(0,ke-ae),og=375,ig=(e,t)=>e.wall?Math.min(t,og):t,ag=12,Os=(e,t)=>e.wall?t:Math.min(t,Ue-ag),ns=120,pn=192,Ec=[{id:"living",name:"Living Room",color:"#ff8fab"},{id:"bedroom",name:"Bedroom",color:"#b388d6"},{id:"kitchen",name:"Kitchen",color:"#5cc985"},{id:"salon",name:"Salon",color:"#f0a0d8"},{id:"nursery",name:"Nursery",color:"#9ad7f5"},{id:"bathroom",name:"Bathroom",color:"#7ec8d6"}],rg=e=>Ec.find(t=>t.id===e)?.color??"#ccc",Cc=J$();R3(hn,Ce);const po=[{id:"__people",name:"People",icon:"",kind:"people"},...["furniture","decor","plants","food","pets"].map((e,t)=>({id:e,name:e,icon:["armchair","balloon","flowers","donut","cat"][t],kind:"cat"}))];po.push({id:"secrets",name:"Secrets",icon:"egg:chloe-starlamp",kind:"cat"});for(const e of hn)po.some(t=>t.kind==="cat"&&t.id===e.cat)||po.push({id:e.cat,name:e.cat,icon:e.kind,kind:"cat"});for(const e of hn)e.pack&&!po.some(t=>t.id==="pack:"+e.pack)&&po.push({id:"pack:"+e.pack,name:wf(e.pack),icon:e.kind,kind:"pack"});const Fr=e=>hn.filter(t=>Z5(t,e,C.get().currentRoom,zc==="all",dr())),M7=["#ffd6e0","#d9ccff","#cdf3dc","#cfe8ff","#fff1b8","#ffe0c7","#ffffff","#f6c1ff"],L7=["#e8b98a","#f2d0a4","#c99366","#ffe7a8","#bfe3d0","#d6d6f5","#ffc8dd","#9fb4c7"],Ht={paint:'<svg viewBox="0 0 48 48"><path d="M10 30 L28 12 L36 20 L18 38 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M28 12 L34 6 L42 14 L36 20" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><circle cx="12" cy="40" r="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/></svg>',shirt:'<svg viewBox="0 0 48 48"><path d="M16 8 L6 16 L11 24 L15 21 V42 H33 V21 L37 24 L42 16 L32 8 Q24 14 16 8 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',soundOn:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ffd166" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M32 17 Q37 24 32 31 M36 12 Q45 24 36 36" fill="none" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 48 48"><path d="M8 18 H16 L26 9 V39 L16 30 H8 Z" fill="#ddd" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M33 19 L43 29 M43 19 L33 29" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',flip:'<svg viewBox="0 0 48 48"><path d="M24 6 V42" stroke="#5a3d5c" stroke-width="3" stroke-dasharray="4 4"/><path d="M18 12 L6 36 H18 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M30 12 L42 36 H30 Z" fill="#fff" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',front:'<svg viewBox="0 0 48 48"><rect x="6" y="6" width="22" height="22" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="18" y="18" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',back:'<svg viewBox="0 0 48 48"><rect x="18" y="18" width="24" height="24" rx="5" fill="#ddd" stroke="#5a3d5c" stroke-width="3"/><rect x="6" y="6" width="22" height="22" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/></svg>',trash:'<svg viewBox="0 0 48 48"><rect x="12" y="14" width="24" height="28" rx="5" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3"/><rect x="8" y="9" width="32" height="7" rx="3.5" fill="#ffadad" stroke="#5a3d5c" stroke-width="3"/><path d="M20 21 V35 M28 21 V35" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',smaller:'<svg viewBox="0 0 48 48"><rect x="16" y="16" width="16" height="16" rx="4" fill="#bde0fe" stroke="#5a3d5c" stroke-width="3"/><path d="M8 24 H14 M34 24 H40" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>',bigger:'<svg viewBox="0 0 48 48"><rect x="12" y="12" width="24" height="24" rx="5" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><path d="M24 6 V11 M24 37 V42 M6 24 H11 M37 24 H42" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/></svg>'},E7='<svg viewBox="0 0 48 48"><circle cx="17" cy="18" r="8" fill="#ffd166" stroke="#5a3d5c" stroke-width="3"/><circle cx="32" cy="20" r="7" fill="#ff8fab" stroke="#5a3d5c" stroke-width="3"/><path d="M5 42 Q6 28 17 28 Q28 28 29 42 Z" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/><path d="M24 42 Q25 30 32 30 Q42 30 43 42 Z" fill="#c9a0dc" stroke="#5a3d5c" stroke-width="3" stroke-linejoin="round"/></svg>',C7='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 15 H37 M11 24 H37 M11 33 H37" fill="none" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',z7='<svg class="mailGlyph" viewBox="0 0 48 48" aria-hidden="true"><g transform="translate(0 2)"><rect x="6" y="14" width="36" height="24" rx="4" fill="#8ecae6" stroke="#5a3d5c" stroke-width="3"/><path d="M6 16 L24 30 L42 16" fill="none" stroke="#5a3d5c" stroke-width="3"/><path d="M34 12 V6" stroke="#5a3d5c" stroke-width="3" stroke-linecap="round"/><path d="M34 6 H44 L40 10 L44 14 H34 Z" fill="#ff6b6b" stroke="#5a3d5c" stroke-width="2"/></g></svg>',lg='<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="19" fill="#fff3b0" stroke="#5a3d5c" stroke-width="3"/><path d="M24 15 V33 M15 24 H33" stroke="#5a3d5c" stroke-width="4" stroke-linecap="round"/></svg>',S7=document.getElementById("app");S7.innerHTML=`
<div class="top">
  <div class="tabs" id="tabs"></div>
  <div class="minimap" id="minimap" aria-label="Room map"><div class="mmWall" id="mmWall"></div><div class="mmFloor" id="mmFloor"></div><div id="mmDots"></div><div class="mmView" id="mmView"></div></div>
  <div class="streetTitle" id="streetTitle">Our Neighborhood</div>
  <div class="tools">
    <button class="round hoodOnly" id="btnChat" aria-label="Talk">${Et.chat}<span class="badge" id="chatBadge"></span></button>
    <button class="round" id="btnMenu" aria-label="Menu" aria-expanded="false">${C7}<span class="badge" id="menuBadge"></span></button>
    <button class="round homeBtn" id="btnHome" aria-label="Home">${Et.home}</button>
    <button class="round barnOnly" id="btnLeavePark" aria-label="Go outside">${Jm}</button>
    <button class="round rideOnly" id="btnHopOff" aria-label="Hop off the horse">${yx}</button>
    <button class="round mapBtn" id="btnMap" aria-label="Map">${jl}<span class="badge" id="mapBadge"></span></button>
  </div>
</div>
<div class="menuPop hidden" id="menuPop">
  <div class="menuCard" role="dialog" aria-label="Menu">
    <button type="button" class="close" id="menuClose" aria-label="Close">✕</button>
    <p class="menuGroup">My stuff</p>
    <button type="button" class="menuRow" id="btnPets" aria-label="Pets"><span class="mIco">${uf}</span><span class="mLabel">Pets</span></button>
    <button type="button" class="menuRow" id="btnDress" aria-label="Characters"><span class="mIco">${Ht.shirt}</span><span class="mLabel">Characters</span></button>
    <button type="button" class="menuRow" id="btnPaint" aria-label="Colors"><span class="mIco">${Ht.paint}</span><span class="mLabel">Wall &amp; floor colors</span></button>
    <button type="button" class="menuRow" id="secrets" aria-label="Surprises, 0 of 5"><span class="mIco secGift">🎁</span><span class="mLabel"><span class="secWord">Surprises </span><span class="secCount">0/5</span></span></button>
    <p class="menuGroup houseGroup">House</p>
    <button type="button" class="menuRow lockRow" id="btnLock" aria-label="Lock house"><span class="mIco" id="lockIco">${Et.lockOff}</span><span class="mLabel" id="lockLabel">Lock my house</span></button>
    <button type="button" class="menuRow mailRow" id="btnMail" aria-label="Mailbox"><span class="mIco">${z7}</span><span class="mLabel">Mailbox</span><span class="menuNew" id="mailNew"></span></button>
    <!-- Day / Night / Auto. The clock stays on Auto until she taps. -->
    <div id="menuDaySlot" class="menuSlot" hidden></div>
    <p class="menuGroup streetGroup">Street</p>
    <button type="button" class="menuRow grownRow" id="btnParent" aria-label="Grown-ups"><span class="mIco">${Et.shield}</span><span class="mLabel">Grown-ups</span></button>
    <button type="button" class="menuRow soloLeave" id="btnSolo" aria-label="Play in my own house"><span class="mIco">${Et.solo}</span><span class="mLabel">Play in my own house</span></button>
    <button type="button" class="menuRow friendRow" id="btnHood" aria-label="Friends"><span class="mIco">${Et.street}</span><span class="mLabel">Friends</span></button>
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
        <button data-a="smaller" aria-label="Smaller">${Ht.smaller}</button><button data-a="bigger" aria-label="Bigger">${Ht.bigger}</button><button data-a="flip" aria-label="Flip">${Ht.flip}</button><button data-a="front" aria-label="Bring forward">${Ht.front}</button><button data-a="back" aria-label="Send back">${Ht.back}</button><button data-a="delete" class="danger" aria-label="Put away">${Ht.trash}</button>
      </div>
    </div>
    <button class="nudge left" id="nudgeL" aria-label="Look left"><svg viewBox="0 0 40 40"><path d="M24 10 L14 20 L24 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <button class="nudge right" id="nudgeR" aria-label="Look right"><svg viewBox="0 0 40 40"><path d="M16 10 L26 20 L16 30" fill="none" stroke="#5a3d5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </div>
  <div class="bin" id="bin">${Ht.trash}</div>
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
<div class="street mapView hidden" id="street"><div class="mapSky">${Dh}</div><div class="mapMeadow">${Ih}</div><button class="mailCue" id="mailCue" type="button">You've got mail!</button><div class="mapWorld" id="mapWorld"></div></div>
<div class="chatTray hidden" id="chatTray"></div>
<div class="sheet hidden" id="sheet"><div class="card" id="card"></div></div>
<div class="fx" id="fx"></div>
<div id="toastLane"></div>
<div class="phoneNote" id="phoneNote"><div class="card"><h2>Turn sideways</h2><p>Turn your phone sideways for more room to play!</p><button class="phoneOk" id="phoneOk" type="button">OK!</button></div></div>
<div class="elsewhere hidden" id="elsewhere"><div class="card"><h2>You're playing on another screen</h2><p>This screen can rest. Your house is safe.</p><button class="playHere" id="elsewhereGo" type="button">Tap to play here!</button></div></div>
<div id="skyMount"></div>`;const M=e=>document.getElementById(e);document.body.classList.add("is-preview"),document.body.insertAdjacentHTML("beforeend",'<div class="previewRibbon">PREVIEW</div>');const F=M("stage"),cg=M("world"),re=M("layer"),xe=M("toolbar"),sa=M("bin");let et=null,Ae=C.get().characters[0]?.id??null,Lt="furniture",zc="",Bl="",P7=Date.now()%1e5;const Rl=e=>`${e}-${Date.now().toString(36)}${(++P7).toString(36)}${Math.random().toString(36).slice(2,5)}`,ht="__me";let w=null,z="house",Ie=!1,Pe="",Ca=new Map,dg=!1,pg=()=>{};const Se=Mm(M("modeToggle"),{ownHouse:()=>!w||!Pe||Pe===w.myHouseId(),onChange:()=>{dg&&(yo.matches?Kn():ss()),pg()}}),oa=wm({send:(e,t,n,s)=>w?.sendMail(e,t,n,s),read:(e,t)=>w?.readMail(e,t),drop:(e,t)=>w?.dropMail(e,t),houseOf:e=>[...w?.players.values()??[]].find(t=>t.pid===e)?.houseId??"",houseName:e=>w?.houses.get(e)?.meta.name??"My House",lettersOf:e=>w?.houses.get(e)?.confirmed.mailbox?.letters??[],mine:e=>!!w&&w.houses.get(e)?.meta.ownerId===w.pid,toast:Z,openOwn:()=>{const e=w?.myHouseId();e&&Vc(e)},freeType:()=>!w||rf(w.settings)});Se.sync(!0);const Io=new Map,za={};let ie=ho,no=0;dg=!0;let ai=null;const ur=()=>{cancelAnimationFrame(no),ai=null},Sc=e=>Math.max(0,Math.min(Ts(),e));function Ne(e){ie=Sc(e),za[C.get().currentRoom]=ie,cg.style.transform=`translate3d(${-ie}px,0,0)`,M("nudgeL").classList.toggle("off",ie<=1),M("nudgeR").classList.toggle("off",ie>=Ts()-1);const t=M("mmView");t.style.left=ie/ke*100+"%",t.style.width=ae/ke*100+"%",et&&Bg(C.get())}function mr(e){cancelAnimationFrame(no),e=Sc(e),ai=e;const t=()=>{const n=e-ie;if(Math.abs(n)<.5){Ne(e),ai=null;return}Ne(ie+n*.18),no=requestAnimationFrame(t)};no=requestAnimationFrame(t)}const mt=()=>F.getBoundingClientRect().width/ae,T7="(pointer: coarse) and (max-width: 600px), (pointer: coarse) and (orientation: landscape) and (max-height: 500px)",yo=window.matchMedia(T7);function B7(){const e=yo.matches;document.body.classList.toggle("phone",e),document.body.classList.toggle("phone-portrait",e&&window.matchMedia("(orientation: portrait)").matches);const t=M("stageWrap");for(const n of[M("nudgeL"),M("nudgeR")]){const s=e?t:F;n.parentElement!==s&&s.appendChild(n)}}function fg(){const e=document.querySelector(".top");if(!e)return;const t=e.getBoundingClientRect(),n=document.body.classList.contains("phone")?t.bottom:t.height;document.documentElement.style.setProperty("--chrome-h",Math.ceil(n)+"px"),gg()}function gg(){const e=document.querySelector(".top");if(!e)return;const t=Math.ceil(e.getBoundingClientRect().bottom+16)+"px",n=document.getElementById("mailCue");n&&(n.style.top=t);const s=document.getElementById("toastLane");s&&(s.style.top=t)}function R7(){const e=document.documentElement,t=document.getElementById("app");if(!(document.body.classList.contains("phone")&&!document.body.classList.contains("phone-portrait"))){t.style.top="",t.style.height="",t.style.bottom="",e.style.removeProperty("--vvh"),e.style.removeProperty("--vvt");return}const s=window.visualViewport,o=Math.round(s?s.height:window.innerHeight),i=Math.round(s?s.offsetTop:0);e.style.setProperty("--vvh",o+"px"),e.style.setProperty("--vvt",i+"px"),t.style.top=i+"px",t.style.height=o+"px",t.style.bottom="auto"}function ss(){B7(),R7(),fg();const e=M("stageWrap"),t=document.body.classList.contains("phone"),n=e.clientWidth,s=e.clientHeight,o=Math.max(1,s-Bc());if(t?s>n*.85:s>n+40){const r=n/Math.max(1,s);ae=Math.round(Math.max(480,Math.min(860,Ue*r)))}else if(t){const r=n/Math.max(1,o);ae=Math.round(Math.max(480,Math.min(ke,Ue*r)))}else ae=1e3;ae=Pc(ae),F.style.width=ae+"px",F.style.height=Ue+"px";const a=Math.min(n/ae,o/Ue);if(bg(a),F.style.setProperty("--yard-sc",String(a||1)),t&&F.style.setProperty("--fit",String(mt())),hg(),ie>Ts())Ne(ie);else{const r=M("mmView");r.style.left=ie/ke*100+"%",r.style.width=ae/ke*100+"%"}tt(),!t&&z==="house"&&Bs(!1),q7(),z==="ranch"&&requestAnimationFrame(Fl),z==="gameroom"&&requestAnimationFrame(Mh),wo(),t&&z==="ranch"&&p9(),ug(),Se.hint(),Cr(),Un()}function hg(){const e=M("stageWrap"),t=document.body.classList.contains("phone")&&z==="house";for(const n of[M("nudgeL"),M("nudgeR")]){if(!t||n.parentElement!==e){n.style.marginTop="",n.style.left="",n.style.right="",n.style.top="";continue}const s=F.getBoundingClientRect(),o=e.getBoundingClientRect(),i=(s.top+s.bottom)/2-o.top;n.style.top=i+"px",n.style.marginTop=-n.offsetHeight/2+"px",n.style.left="",n.style.right=""}}function ug(){document.body.classList.remove("secrets-chrome"),M("secrets")?.classList.remove("compact")}function tt(e=0){if(!document.body.classList.contains("phone"))return;if(z==="house"){mg();return}const t=z==="park"?"parkScroll":z==="ranch"?"ranchScroll":z==="gameroom"?"grScroll":"";if(!t)return;const n=document.getElementById(t);if(!n||n.clientWidth<20){e<8&&requestAnimationFrame(()=>tt(e+1));return}const s=n.querySelector(".savatar.mine")??n.querySelector(".savatar");if(!s){e<8&&requestAnimationFrame(()=>tt(e+1));return}D7(n,[s,...s.querySelectorAll(".nametag")])&&e<8?requestAnimationFrame(()=>tt(e+1)):A7()}function A7(){qa()&&(z==="gameroom"&&xh([...document.querySelectorAll(".neonSignArt")],document.getElementById("grScroll")),z==="ranch"&&!Ie&&(Lh(),sd()))}function D7(e,t){const s=e.getBoundingClientRect(),o=Math.min(s.right,window.innerWidth)-8,i=Math.max(s.left,0)+8;let a=0,r=0;for(const c of t){const d=c.getBoundingClientRect();d.width<2||d.height<2||(a=Math.max(a,d.right-o),r=Math.max(r,i-d.left))}if(a<=1&&r<=1)return!1;const l=e.scrollLeft;return a>1&&r>1?e.scrollLeft-=r:a>1?e.scrollLeft+=a:e.scrollLeft-=r,Math.abs(e.scrollLeft-l)>.5}function mg(){Bs(!1)}function yp(e){let t=0;for(const n of e){const s=Ce[n.kind];!s||s.wall||(t=Math.max(t,s.w*nt(n)))}return t}function I7(){if(z!=="house"||!Se.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return 0;const e=C.get().rooms,t=C.get().currentRoom;let n=yp(e[t]?.items??[]);if(t==="backyard")for(const s of Object.keys(e))s!=="backyard"&&(n=Math.max(n,yp(e[s].items)));return n<40?0:Math.min(ke,Math.ceil(n/.55))}function Pc(e){const t=I7();return t&&e<t?t:e}function H7(){const e=Pc(ae);if(e<=ae+.5)return;ae=e,F.style.width=ae+"px";const t=M("stageWrap"),n=Math.max(1,t.clientHeight-Bc()),s=Math.min(t.clientWidth/ae,n/Ue);if(bg(s),document.body.classList.contains("phone")&&F.style.setProperty("--fit",String(s)),ie>Ts())Ne(ie);else{const o=M("mmView");o.style.left=ie/ke*100+"%",o.style.width=ae/ke*100+"%"}}let ri=null,li=!1;function O7(){if(z!=="house"||!Se.isPlay()||Math.min(window.innerWidth,window.innerHeight)>=500)return null;const e=C.get();if(e.currentRoom==="backyard")return null;let t=null,n=ri;if(w&&De!==X){const a=$e();a&&a.where==="house"&&a.room===e.currentRoom&&(t=_t(e.currentRoom,Xn(w.pid,a),a).x,n||(n=Xn(w.pid,a)?.item??null))}if(t===null){const a=e.characters.find(r=>r.id===Ae&&r.room===e.currentRoom)??e.characters.find(r=>r.room===e.currentRoom);if(!a)return null;t=_t(e.currentRoom,Bt(a),a).x,n||(n=Bt(a)?.item??null)}if(!n)return null;const s=e.rooms[e.currentRoom].items.find(a=>a.id===n),o=s&&Ce[s.kind];if(!s||!o)return null;const i=o.w*nt(s)/2;return{minX:Math.min(t-100,s.x-i),maxX:Math.max(t+100,s.x+i)}}function Bs(e){if(z!=="house"||Rs)return;if(C.get().currentRoom==="backyard"){Math.abs(ie-bl)>.5&&Ne(bl),Un();return}if(li)return;const t=O7();if(t){const _=t.maxX-t.minX;let y=ie;_+20*2>ae?y=t.minX-20:(t.minX-20<y&&(y=t.minX-20),t.maxX+20>y+ae&&(y=t.maxX+20-ae)),y=Math.max(0,Math.min(Ts(),y)),Math.abs(y-ie)>.5&&Ne(y),Un();return}const n=document.querySelector("#layer .char.avatar.mine")??document.querySelector("#layer .char");if(!n)return;const s=mt()||1,o=F.getBoundingClientRect(),i=8;let a=Math.min(o.right,window.innerWidth)-i,r=Math.max(o.left,0)+i;for(const b of["nudgeL","nudgeR"]){const _=M(b);if(!_||_.classList.contains("off")||_.offsetParent===null)continue;const y=_.getBoundingClientRect();y.width<2||y.height<2||(b==="nudgeL"?r=Math.max(r,y.right+6):a=Math.min(a,y.left-6))}a-r<48&&(a=Math.min(o.right,window.innerWidth)-i,r=Math.max(o.left,0)+i);const l=[n,...n.querySelectorAll(".nametag")];let c=0,d=0,f=1/0,g=-1/0;for(const b of l){const _=b.getBoundingClientRect();_.width<2||_.height<2||(c=Math.max(c,_.right-a),d=Math.max(d,r-_.left),f=Math.min(f,_.left),g=Math.max(g,_.right))}if(document.body.classList.contains("phone-portrait")&&f<1/0){const b=(f+g)/2-(r+a)/2;if(Math.abs(b)>3){Ne(ie+b/s),Un();return}}const h=W7(n),m=N5({cam:ie,maxCam:Ts(),kidX:h,overflowL:d,overflowR:c,scale:s,nudgeX:e});Math.abs(m.cam-ie)>.5&&Ne(m.cam),e&&Math.abs(m.kidX-h)>.5&&U7(n,m.kidX),Un()}function W7(e){if(e.dataset.pid&&w){const t=e.dataset.pid===w.pid?$e():w.presence.get(e.dataset.pid);if(t&&t.where==="house")return t.x}return C.get().characters.find(t=>t.id===e.dataset.cid)?.x??0}function U7(e,t){if(e.dataset.pid&&w&&e.classList.contains("mine")){const o=$e();if(!o||o.where!=="house")return;Fe({...o,x:t}),$t();return}const n=e.dataset.cid;if(!n)return;const s=C.get().characters.find(o=>o.id===n);s&&C.dispatch({type:"char/move",id:n,room:C.get().currentRoom,x:t,y:s.y})}const V7={living:"Living",bedroom:"Bed",kitchen:"Kitchen",salon:"Salon",nursery:"Nursery",bathroom:"Bath"};function yg(){const e=z==="house",t=document.body.classList.contains("phone-portrait"),n=e&&!Se.isPlay(),s=e&&ae+1<ke,o=e&&(t?n:n||s);document.body.classList.toggle("show-minimap",o)}const Q7='<svg class="tabIco" width="14" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 6 L8 1 L15 6 V11 H1 Z" fill="currentColor"/></svg>';function wg(){return document.body.classList.contains("phone")}function q7(){const e=wg()?"c":"f";yg(),e!==Bl&&(Bl=e,Eg(C.get()))}function Tc(){yo.matches?Kn():ss()}window.addEventListener("resize",Tc);yo.addEventListener("change",Tc);let wp="",jr=!1;function bp(){const e=M("stageWrap"),t=document.querySelector(".top"),n=document.querySelector(".tools"),s=r=>r?r.clientWidth+"x"+r.clientHeight:"0",o=window.visualViewport,i=o?Math.round(o.offsetTop)+"x"+Math.round(o.height)+"x"+Math.round(o.width):"",a=document.body.classList.contains("baby-card")?"c":"";return i+" "+s(e)+" "+s(t)+" "+s(n)+a}function Bc(){const e=document.body;if(!e.classList.contains("baby-card")||!e.classList.contains("phone")||e.classList.contains("phone-portrait"))return 0;const t=document.querySelector(".babyCare"),n=t&&!t.hidden?t.getBoundingClientRect().height:0;return Math.ceil(8+(n>8?n:72)+8)}function bg(e){const t=Bc(),n=M("stageWrap").clientHeight;F.style.left="",t>0?F.style.top=t+Math.max(0,n-t)/2+"px":F.style.top="",F.style.transform=`translate(-50%,-50%) scale(${e})`}function vg(){const e=M("modeToggle"),t=document.querySelector(".tools"),n=document.getElementById("modeDock"),s=document.querySelector(".drawerTop");if(!e||!t||!n||!s)return!1;const o=document.body.classList.contains("phone"),i=o&&!document.body.classList.contains("phone-portrait"),a=i?t:o?n:s,r=e.parentElement===a;return n.hidden=!o||i,r?!1:(i?t.insertBefore(e,t.firstChild):o?n.appendChild(e):s.insertBefore(e,s.firstChild),!0)}function Z7(){if(C.get().currentRoom==="backyard"||!document.body.classList.contains("phone-portrait")||!document.body.classList.contains("mode-play")||z!=="house")return;const e=M("stageWrap"),t=e.clientWidth,n=e.clientHeight;if(t<20||n<20||!(n>t*.85))return;const s=Math.min(ke,Pc(Math.max(280,Math.min(860,Math.round(Ue*t/n)))));if(Math.abs(s-ae)<2)return;ae=s,F.style.width=ae+"px",F.style.height=Ue+"px";const o=Math.min(t/ae,n/Ue);if(F.style.transform=`translate(-50%,-50%) scale(${o})`,F.style.setProperty("--fit",String(mt())),ie>Ts())Ne(ie);else{const i=M("mmView");i.style.left=ie/ke*100+"%",i.style.width=ae/ke*100+"%"}hg(),yg()}function Kn(){if(jr||!yo.matches)return;const e=vg(),t=bp()+(document.body.classList.contains("mode-play")?"p":"d");if(!(!e&&t===wp)){jr=!0;try{ss(),Z7(),tt(),wp=bp()+(document.body.classList.contains("mode-play")?"p":"d")}finally{jr=!1}}}if(typeof ResizeObserver<"u"){const e=new ResizeObserver(()=>Kn()),t=document.querySelector(".top");t&&e.observe(t),e.observe(M("stageWrap"));const n=document.querySelector(".tools");n&&e.observe(n)}window.visualViewport&&(window.visualViewport.addEventListener("resize",()=>Kn()),window.visualViewport.addEventListener("scroll",()=>Kn()));F.addEventListener("scroll",()=>{F.scrollLeft=0,F.scrollTop=0});const Pt=(e,t)=>{const n=F.getBoundingClientRect();return{x:(e-n.left)/n.width*ae+ie,y:(t-n.top)/n.height*Ue}},Al=(e,t)=>{const n=F.getBoundingClientRect();return e>n.left&&e<n.right&&t>n.top&&t<n.bottom},vp=(e,t)=>{const n=sa.getBoundingClientRect();return e>n.left-20&&e<n.right+20&&t>n.top-20&&t<n.bottom+20},_i=e=>Ps[e.size]??1,ln=new Map;function kg(){return!w||De===X?!0:w.houses.get(Pe)?.meta.ownerId===w.pid}function yr(e){const t=Ce[e.kind];return!t||!go(e.kind)?null:{id:e.id,kind:e.kind,x:e.x,footY:Os(t,e.y),flip:!!e.flip,scale:nt(e),w:t.w,h:lt(t)}}function _t(e,t,n){if(!t)return n;const s=C.get().rooms[e]?.items.find(a=>a.id===t.item),o=s&&yr(s);if(!o)return n;const i=qp(o).find(a=>a.n===t.n);return i?{x:i.x,y:i.y}:n}function ci(e,t,n=!1){const s=C.get(),o=[];for(const i of s.characters){if(i.id===e||i.room!==s.currentRoom)continue;const a=Bt(i);a&&o.push({item:a.item,n:a.n})}if(!n){const i=V0(s.baby,s.currentRoom);i&&o.push(i)}if(w&&z==="house"){const i=(r,l)=>{if(r===t||l.where!=="house"||l.houseId!==Pe||l.room!==s.currentRoom)return;const c=Xn(r,l);c&&o.push({item:c.item,n:c.n})};w.presence.forEach((r,l)=>i(l,r));const a=$e();a&&w.pid!==t&&i(w.pid,a)}return o}function _g(e,t){t?ln.set(e,t):ln.delete(e)}function Ho(e,t,n,s,o){const a=!w||De===X||!!w?.speaksSit;a?ln.delete("c:"+e):_g("c:"+e,o),a?C.dispatch({type:"char/move",id:e,room:t,x:n,y:s,seat:o}):C.dispatch({type:"char/move",id:e,room:t,x:n,y:s})}function ia(e,t,n,s,o){const{seat:i,...a}=e;if(w&&!w.speaksSit){_g("p:"+w.pid,o?{item:o.id,pose:o.pose,n:o.n}:null),Fe({...a,x:t,y:n,flip:s});return}w&&ln.delete("p:"+w.pid),Fe(o?{...a,x:t,y:n,flip:s,seat:o}:{...a,x:t,y:n,flip:s})}function Bt(e){return e.seat?e.seat:ln.get("c:"+e.id)??null}function Xn(e,t){return t.seat?{item:t.seat.id,pose:t.seat.pose,n:t.seat.n}:ln.get("p:"+e)??null}function Sa(e,t){const n=C.get(),s=document.elementsFromPoint(e,t),o=new Set;for(let i=0;i<s.length;i++){const a=s[i];if(!a||!a.closest)continue;const r=a.closest(".item");if(!r)continue;const l=r.dataset.id;if(!l||o.has(l))continue;o.add(l);const c=n.rooms[n.currentRoom].items.find(d=>d.id===l);if(c&&go(c.kind))return c}return null}function N7(e){const t=nr(e);if(t)return"k-bed k-bed-"+t.clip;const n=e.toLowerCase();return/sofa|couch|loveseat/.test(n)?"k-sofa":/bench/.test(n)?"k-bench":/chair|stool|rocker/.test(n)?"k-chair":""}function F7(){const e=C.get(),t=new Map,n=(s,o)=>{const i=t.get(s);t.set(s,i===void 0?o:Math.max(i,o))};for(const s of e.characters){const o=s.room===e.currentRoom?Bt(s):null;o&&n(o.item,o.n)}if(w&&z==="house"){const s=(i,a)=>{const r=a.where==="house"&&a.houseId===Pe&&a.room===e.currentRoom?Xn(i,a):null;r&&n(r.item,r.n)};w.presence.forEach((i,a)=>s(a,i));const o=$e();o&&s(w.pid,o)}return t}function j7(e,t){const n=_i(e),s=fr(e,cr(Bt(e)?.pose))[t];let o=s.x;e.flip&&(o=100-o);const i=_t(e.room,Bt(e),e);return{x:i.x+(o-50)/100*ns*n,y:i.y-pn*n+s.y/160*pn*n}}function $g(e){const t=C.get();let n=null;for(const s of t.characters){if(s.room!==t.currentRoom)continue;const o=_i(s),i=_t(s.room,Bt(s),s),a=Math.abs(e.x-i.x)<ns*o/2+25&&e.y>i.y-pn*o-25&&e.y<i.y+20;for(const r of["left","right"]){if(s.held[r])continue;const l=j7(s,r),c=Math.hypot(e.x-l.x,e.y-l.y);(a||c<75)&&(!n||c<n.d)&&(n={c:s,hand:r,d:c})}}return n}const xg=["none","radial-gradient(circle, rgba(255,255,255,.55) 7px, transparent 8px)","repeating-linear-gradient(90deg, rgba(255,255,255,.4) 0 26px, transparent 26px 52px)","linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%), linear-gradient(45deg, rgba(255,255,255,.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.35) 75%)"],Mg="repeating-linear-gradient(90deg, rgba(90,61,92,.08) 0 3px, transparent 3px 125px), linear-gradient(rgba(0,0,0,.06), transparent 50%)",Dl=e=>`url('${e.replace(/'/g,"%27")}')`;function Lg(e){const t=e.rooms[e.currentRoom],n=M("wall"),s=M("floor"),o=t.wallTile?Hd[t.wallTile]:void 0;n.style.backgroundColor=t.wallpaper,o?(n.style.backgroundImage=Dl(o.url),n.style.backgroundSize="220px auto",n.style.backgroundPosition="0 0"):(n.style.backgroundImage=xg[t.pattern]??"none",n.style.backgroundSize=t.pattern===1?"44px 44px":t.pattern===3?"60px 60px":"auto",n.style.backgroundPosition=t.pattern===3?"0 0, 30px 30px":"0 0");const i=t.floorTile?Hd[t.floorTile]:void 0;s.style.backgroundColor=t.floor,s.style.backgroundImage=i?`${Dl(i.url)}, linear-gradient(rgba(0,0,0,.06), transparent 50%)`:Mg,s.style.backgroundSize=i?"180px auto, auto":"auto",M("mmWall").style.background=t.wallpaper,M("mmFloor").style.background=t.floor,zg(e)}function Pa(e){const n=e.rooms[e.currentRoom].items.filter(o=>Ce[o.kind]).map(o=>{const i=Ce[o.kind];return`<i style="left:${o.x/ke*100}%;top:${(Os(i,o.y)-lt(i)*nt(o)/2)/Ue*100}%"></i>`}).join(""),s=e.characters.filter(o=>o.room===e.currentRoom).map(o=>{const i=_t(e.currentRoom,Bt(o),o);return`<b style="left:${i.x/ke*100}%;top:${(i.y-90)/Ue*100}%;background:${o.shirt}"></b>`}).join("");M("mmDots").innerHTML=n+s}function Eg(e){const t=wg();Bl=t?"c":"f",document.body.classList.toggle("tabs-compact",t),M("tabs").innerHTML=Ec.map(n=>{const s=t?V7[n.id]??n.name:n.name;return`<button class="tab ${e.currentRoom===n.id||e.currentRoom==="backyard"&&n.id==="living"?"on":""}" data-room="${n.id}" style="--c:${n.color}" aria-label="${n.name}">${t?Q7:""}${s}</button>`}).join("")}function Ws(e,t,n,s,o){e.style.left=(t-s/2)/ke*100+"%",e.style.top=(n-o)/Ue*100+"%",e.style.width=s/ke*100+"%",e.style.height=o/Ue*100+"%"}function Cg(e,t){let n=e.w*t,s=lt(e)*t;if((e.kind==="kennel"||e.kind==="cat-tower")&&document.body.classList.contains("phone")){const o=Math.max(.2,mt()||1),i=44*ke/(Math.max(1,ae)*o),a=44/o;n<i&&(n=i),s<a&&(s=a)}return{w:n,h:s}}function Ft(e){const t=e.rooms[e.currentRoom],n=new Set;for(const s of t.items){const o=Ce[s.kind];if(!o)continue;n.add(s.id);let i=re.querySelector(`.item[data-id="${s.id}"]`);i||(i=document.createElement("div"),i.className="item",i.dataset.id=s.id,i.innerHTML=`<div class="inner">${dn(o,!0)}</div>`,re.appendChild(i),i.addEventListener("pointerdown",l=>lM(i,l))),i.dataset.kind=s.kind,i.classList.toggle("is-light",Gx(s.kind,!!o.light));const a=Cg(o,nt(s));Ws(i,s.x,Os(o,s.y),a.w,a.h);const r=1e3+s.z;i.style.zIndex=String(r),i.style.setProperty("--iz",String(r)),i.classList.toggle("flipped",s.flip),i.classList.toggle("sel",et===s.id)}re.querySelectorAll(".item").forEach(s=>{n.has(s.dataset.id)||s.remove()}),zg(e),J7(),Rc(),Bg(e),Pa(e)}function Rc(){const e=C.get(),t=F7(),n=new Set;t.forEach((s,o)=>{const i=e.rooms[e.currentRoom]?.items.find(g=>g.id===o),a=i&&Ce[i.kind],r=i&&N7(i.kind);if(!i||!a||!r)return;n.add(o);let l=re.querySelector(`.seatFront[data-id="${o}"]`);l||(l=document.createElement("div"),l.className="seatFront",l.dataset.id=o,re.appendChild(l));const c=re.querySelector(`.item[data-id="${o}"] .inner`),d=l.querySelector(".inner");(!d||c&&d.innerHTML!==c.innerHTML)&&(l.innerHTML=`<div class="inner">${c?c.innerHTML:dn(a,!0)}</div>`),l.className="seatFront "+r+(i.flip?" flipped":"");const f=Cg(a,nt(i));Ws(l,i.x,Os(a,i.y),f.w,f.h),l.style.zIndex=String(1e3+i.z+3)}),re.querySelectorAll(".seatFront").forEach(s=>{n.has(s.dataset.id||"")||s.remove()})}let Rs=!1,kp=0;function Ac(e){performance.now()-kp<80||(kp=performance.now(),M9(e))}function G7(e,t){const n=F.querySelector(".yardDoor");if(!n)return null;const s=o=>{if(!o)return!1;const i=o.getBoundingClientRect();return i.width>2&&i.height>2&&e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom};return s(n.querySelector(".yardHintLabel"))||s(n.querySelector(".doorArt"))||s(n)?n:null}function Y7(e){e.addEventListener("pointerdown",t=>{if(t.button!==0)return;t.stopPropagation();const n=e.dataset.yardGo==="backyard"?"backyard":"living",s=t.clientX,o=t.clientY,i=t.pointerId;Rs=!0;const a=r=>{r.pointerId===i&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),Rs=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-o)>14||(r.preventDefault(),r.stopPropagation(),Ac(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)})}F.addEventListener("pointerdown",e=>{if(e.button!==0)return;const t=G7(e.clientX,e.clientY);if(!t||e.target instanceof Node&&t.contains(e.target))return;e.stopPropagation(),e.preventDefault();const n=t.dataset.yardGo==="backyard"?"backyard":"living",s=e.clientX,o=e.clientY,i=e.pointerId;Rs=!0;const a=r=>{r.pointerId===i&&(window.removeEventListener("pointerup",a,!0),window.removeEventListener("pointercancel",a,!0),Rs=!1,r.type!=="pointercancel"&&(Math.hypot(r.clientX-s,r.clientY-o)>14||(r.preventDefault(),r.stopPropagation(),Ac(n))))};window.addEventListener("pointerup",a,!0),window.addEventListener("pointercancel",a,!0)},!0);function K7(e,t){return e.width>2&&t.width>2&&e.left<t.right-1&&e.right>t.left+1&&e.top<t.bottom-1&&e.bottom>t.top+1}function _p(e){const t=e.getBoundingClientRect();let n=0;re.querySelectorAll(".item").forEach(s=>{if(s.classList.contains("is-light"))return;const o=Ce[s.dataset.kind||""];if(!o||o.wall||!K7(s.getBoundingClientRect(),t))return;const i=parseInt(s.style.zIndex||"0",10)||0;i>n&&(n=i)}),e.style.zIndex=n?String(n+2):"2"}function zg(e){const t=e.rooms[e.currentRoom];sx(M("scenery"),e.currentRoom,t.items),M("scenery").querySelectorAll(".yardDoor").forEach(o=>o.remove());const n=e.currentRoom==="living"?"backyard":e.currentRoom==="backyard"?"living":"",s=re.querySelector(".yardDoor");if(!n)re.querySelectorAll(".yardDoor").forEach(o=>o.remove());else if(!s||s.dataset.yardGo!==n){re.querySelectorAll(".yardDoor").forEach(i=>i.remove()),re.insertAdjacentHTML("beforeend",W3(n==="backyard"?"living":"yard"));const o=re.querySelector(".yardDoor");o&&Y7(o)}F.classList.toggle("room-yard",e.currentRoom==="backyard"),Oa(),Rs||Un()}const jt=new Map;function X7(e){const t=_i(e),n=ns*t,s=pn*t,o=fr(e,cr(Bt(e)?.pose)),i=e.look2?.85:1;return["left","right"].map(a=>{const r=e.held[a],l=r&&Ce[r.kind];if(!r||!l)return"";const c=nt(r),d=Math.min(.7,120*t/Math.max(l.w,lt(l))/c)*i,f=l.w*c*d,g=lt(l)*c*d,h=o[a].x/100*n,m=o[a].y/160*s;return`<div class="held ${r.flip?"flipped":""}" data-hand="${a}" style="left:${(h-f/2)/n*100}%;top:${(m-g*.62)/s*100}%;width:${f/n*100}%;height:${g/s*100}%"><div class="inner">${dn(l)}</div></div>`}).join("")}function J7(){let e=re.querySelector("#skyPuddles");e||(e=document.createElement("div"),e.id="skyPuddles",e.className="skyPuddles"),re.appendChild(e);const t=[...re.querySelectorAll(".item.is-light")];for(;e.children.length>t.length;)e.lastElementChild.remove();for(;e.children.length<t.length;)e.appendChild(document.createElement("i"));t.forEach((n,s)=>{const o=e.children[s],i=parseFloat(n.style.left),a=parseFloat(n.style.top),r=parseFloat(n.style.width),l=parseFloat(n.style.height),c=n.dataset.kind==="window"||n.dataset.kind==="tv";o.style.left=i-.6*r+"%",o.style.top=a-(c?.38:.5)*l+"%",o.style.width=2.2*r+"%",o.style.height=2*l+"%",o.style.zIndex=String(parseInt(n.style.zIndex||"1000",10))})}let wr=()=>{};function Go(e){const t=e.baby;return t&&t.spot==="arms"&&t.holder?t.holder:""}const Hn=new Map;function Sg(e){for(const[t,n]of Hn)t.indexOf(e+":")===0&&(n.remove(),Hn.delete(t))}function Pg(e,t){const n=e+":"+t,s=Hn.get(n);s&&(s.remove(),Hn.delete(n))}function Tg(e,t,n,s,o){const i=e+":"+t;for(const[r,l]of Hn)r.indexOf(e+":")===0&&r!==i&&(l.remove(),Hn.delete(r));let a=Hn.get(i);if((!a||!a.isConnected)&&(a=document.createElement("div"),a.className="cradle-front",a.dataset.for=t,a.innerHTML='<div class="inner"></div>',re.appendChild(a),Hn.set(i,a)),a.dataset.arm!==s){const r=a.querySelector(".inner");r&&(r.innerHTML=s),a.dataset.arm=s}a.style.left=n.style.left,a.style.top=n.style.top,a.style.width=n.style.width,a.style.height=n.style.height,a.style.zIndex=String(5e3+Math.round(o)+4),a.classList.toggle("flipped",n.classList.contains("flipped")),a.classList.toggle("pose-sit",n.classList.contains("pose-sit")),a.classList.toggle("pose-lie",n.classList.contains("pose-lie")),a.classList.toggle("pose-lie-r",n.classList.contains("pose-lie-r"))}function Gt(e){const t=e.characters.filter(n=>n.room===e.currentRoom);for(const[n,s]of jt)t.some(o=>o.id===n)||(s.remove(),jt.delete(n));for(const n of t){let s=jt.get(n.id);s||(s=document.createElement("div"),s.className="char",s.dataset.cid=n.id,s.innerHTML='<div class="inner"></div><div class="hands"></div>',re.appendChild(s),jt.set(n.id,s),pM(s));const o=Bt(n),i=o?.pose??null,a=Go(e)===n.id,r=o0(n)+(i||"")+(a?"h":"");s.dataset.look!==r&&(s.querySelector(".inner").innerHTML=yt(n,i,a),s.dataset.look=r),s.classList.toggle("holding",a);const l=JSON.stringify([n.held.left?.id,n.held.left?.flip,n.held.right?.id,n.held.right?.flip,n.size,i]);s.dataset.held!==l&&(s.querySelector(".hands").innerHTML=X7(n),s.dataset.held=l);const c=_i(n),d=_t(e.currentRoom,o,n);if(Ws(s,d.x,d.y,ns*c,pn*c),s.style.zIndex=String(o?1e3+(e.rooms[e.currentRoom].items.find(g=>g.id===o.item)?.z??0)+1+o.n:5e3+Math.round(n.y)),s.classList.toggle("flipped",n.flip),s.classList.toggle("pose-sit",i==="sit"),s.classList.toggle("pose-lie",i==="lie"),s.classList.toggle("pose-lie-r",i==="lie"&&!!e.rooms[e.currentRoom].items.find(g=>g.id===o?.item)?.flip),s.classList.toggle("active",n.id===Ae),bi(s,n,n.id===Ae),s.classList.toggle("pose-swing",St?.id===n.id),a){const g=Tf(n,i);g?Tg("doll",n.id,s,g,d.y):Pg("doll",n.id)}const f=fr(n);s.style.setProperty("--hx-l",f.left.x+"%"),s.style.setProperty("--hx-r",f.right.x+"%")}(Go(e)===""||!t.some(n=>n.id===Go(e)))&&Sg("doll"),Pa(e),wr()}function Vi(){const e=F.getBoundingClientRect(),t=e.width/Math.max(1,ae),n=6,o=document.body.classList.contains("phone")?1/Math.max(.2,t):1,i=xe.offsetWidth,a=xe.offsetHeight,r=parseFloat(xe.style.left)/100*ke,l=parseFloat(xe.style.top)/100*Ue,c=xe.classList.contains("below"),d=r,f=c?l+a/2:l-a/2,g=o*i/2,h=o*a/2,m=x=>e.left+(n+x-ie)*t,b=x=>e.top+(n+x)*t,_=m(d-g),y=m(d+g),u=b(f-h),k=b(f+h);return{left:_,right:y,top:u,bottom:k,width:y-_,height:k-u}}function eM(){const e=F.getBoundingClientRect(),t=4;let n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t,o=Math.max(e.top,0)+t,i=Math.min(e.bottom,window.innerHeight)-t;for(const a of["nudgeL","nudgeR"]){const r=M(a);if(!r||r.classList.contains("off")||r.offsetParent===null)continue;const l=r.getBoundingClientRect();l.width<2||l.height<2||(a==="nudgeL"?n=Math.max(n,l.right+4):s=Math.min(s,l.left-4))}return s-n<48&&(n=Math.max(e.left,0)+t,s=Math.min(e.right,window.innerWidth)-t),{left:n,right:s,top:o,bottom:i}}function Qi(e,t){xe.style.left=e/ke*100+"%",xe.style.top=t/Ue*100+"%"}function Bg(e){const t=et&&e.rooms[e.currentRoom].items.find(b=>b.id===et);if(Se.isPlay()||!t||!Ce[t.kind]){xe.classList.add("hidden"),xe.classList.remove("below"),xe.style.maxWidth="";return}const n=Ce[t.kind],s=Os(n,t.y),o=s-lt(n)*nt(t),i=12;xe.classList.remove("hidden"),xe.style.maxWidth="",xe.classList.remove("below"),Qi(t.x,o-i);const a=eM();Vi().top<a.top&&(xe.classList.add("below"),Qi(t.x,s+i));let r=Vi();const l=a.right-a.left;if(r.width>l-2&&l>60){const b=xe.offsetWidth*((l-8)/Math.max(1,r.width));xe.style.maxWidth=Math.max(76,b)+"px",!xe.classList.contains("below")&&Vi().top<a.top&&(xe.classList.add("below"),Qi(t.x,s+i)),r=Vi()}let c=0,d=0;if(r.left<a.left&&(c=a.left-r.left),r.right+c>a.right&&(c=a.right-r.right),r.width>a.right-a.left&&(c=(a.left+a.right)/2-(r.left+r.right)/2),r.top<a.top&&(d=a.top-r.top),r.bottom+d>a.bottom&&(d=a.bottom-r.bottom),Math.abs(c)>=.5||Math.abs(d)>=.5){const b=F.getBoundingClientRect().width/Math.max(1,ae)||1,_=parseFloat(xe.style.left)/100*ke+c/b,y=parseFloat(xe.style.top)/100*Ue+d/b;Qi(_,y)}const f=Es(t.size),g=$s.indexOf(f),h=xe.querySelector('[data-a="smaller"]'),m=xe.querySelector('[data-a="bigger"]');h&&(h.disabled=g<=0),m&&(m.disabled=g>=$s.length-1)}function Rg(e){const t=M("soundIco");t&&(t.innerHTML=e.soundOn?Ht.soundOn:Ht.soundOff),M("btnSound").setAttribute("aria-label",e.soundOn?"Sound on":"Sound off"),Am(e.soundOn)}function As(){const e=C.get();re.innerHTML="",jt.clear(),Eg(e),Lg(e),Ft(e),Gt(e),Rg(e);const t=e.characters.find(o=>o.room===e.currentRoom),n=w&&$e(),s=n&&n.where==="house"?n.x:t?.x;ur(),Ne(za[e.currentRoom]??Sc(s!==void 0?s-ae/2:ho)),$t(),fn(),document.body.classList.contains("phone")&&z==="house"&&requestAnimationFrame(()=>mg())}const $p=200,tM=2,Ta=[];let Il=0,aa=!1,Gr=0;const Ag=new Map;function Hl(e){const t=document.getElementById("shelf");if(!t)return!1;const n=t.getBoundingClientRect();if(n.width<2||n.height<2)return!1;const s=e.getBoundingClientRect();return s.right>n.left-$p&&s.left<n.right+$p&&s.bottom>n.top-8&&s.top<n.bottom+8}const nM=3,Ba=new Map;function Ol(e,t){const n=(Ba.get(t)||0)+1;if(Ba.set(t,n),delete e.dataset.shelfq,n>=nM){delete e.dataset.artq;return}setTimeout(Dc,300*n)}function Ks(){Il--,!aa&&Dg()}function xp(e,t){const n=document.createElement("div");n.innerHTML=dn(t);const s=n.querySelector("img.artimg");if(!s){delete e.dataset.artq,Ks();return}const o=Ba.get(t.kind)||0;if(o>0){const l=s.getAttribute("src")||"";s.setAttribute("src",l+(l.indexOf("?")>=0?"&":"?")+"retry="+o)}let i=!1;const a=l=>{if(!i){if(i=!0,l){const c=Array.prototype.slice.call(n.childNodes);if(Ag.set(t.kind,c),Ba.delete(t.kind),e.isConnected&&e.dataset.artq==="1"){delete e.dataset.artq,e.innerHTML="";for(let d=0;d<c.length;d++)e.appendChild(c[d])}else{const d=document.querySelector(`#shelf button.thing[data-artq="1"][data-kind="${CSS.escape(t.kind)}"]`);if(d){delete d.dataset.artq,d.innerHTML="";for(let f=0;f<c.length;f++)d.appendChild(c[f])}}}else e.isConnected&&e.dataset.artq==="1"&&Ol(e,t.kind);Ks()}},r=()=>{typeof s.decode=="function"?s.decode().then(()=>a(!0),()=>a(!0)):a(!0)};s.onload=r,s.onerror=()=>a(!1),s.complete&&s.naturalWidth>0&&r()}function Dg(){if(!aa){for(aa=!0;Il<tM&&Ta.length;){const e=Ta.shift();if(!e||!e.isConnected||e.dataset.artq!=="1")continue;if(!Hl(e)){delete e.dataset.shelfq;continue}const t=e.dataset.kind||"",n=Ce[t];if(!n){delete e.dataset.artq;continue}if(Il++,zs(t)){xp(e,n);continue}p(()=>Promise.resolve().then(()=>pc),void 0).then(s=>s.loadArtKinds([t])).then(()=>{if(!e.isConnected||e.dataset.artq!=="1"){Ks();return}if(!zs(t)){Ol(e,t),Ks();return}if(!Hl(e)){delete e.dataset.shelfq,Ks();return}xp(e,n)},()=>{e.isConnected&&e.dataset.artq==="1"&&Ol(e,t),Ks()})}aa=!1}}function sM(){const e=document.getElementById("shelf");if(!e||!ro())return;const t=e.querySelectorAll('button.thing[data-artq="1"]');for(let n=0;n<t.length;n++){const s=t[n];s.dataset.shelfq!=="1"&&Hl(s)&&(s.dataset.shelfq="1",Ta.push(s))}Dg()}function Dc(){Gr||(Gr=requestAnimationFrame(()=>{Gr=0,sM()}))}function oM(){const e=document.getElementById("shelf");!e||e.dataset.artscroll==="1"||(e.dataset.artscroll="1",e.addEventListener("scroll",Dc,{passive:!0}))}function Ig(){const e=document.getElementById("shelf");if(!e||!ro())return;const t=e.querySelectorAll("button.thing[data-kind]");for(let n=0;n<t.length;n++){const s=t[n],o=s.dataset.kind||"";s.querySelector("img.artimg")||!(nd(o)||zs(o))||(s.dataset.artq="1")}Dc()}function Hg(){if(Lt==="__people"){Rt();return}Ig()}function iM(e){const t=Yp();if(!w)return;const n=$e();if(!n||n.where!=="house"||!n.seat)return;let s="";if(e.type==="item/flip"||e.type==="item/delete")s=e.id;else if(e.type==="item/move"&&e.stand)s=e.id;else if(e.type==="char/hold")s=e.itemId;else return;if(!s||n.seat.id!==s||e.room!==n.room)return;const o=t&&t.id===s?t:null,i=o?ga(o.kind)*(o.scale||1):ga("bed"),a=nc(o?o.x:n.x,i,n.x);ln.delete("p:"+w.pid);const{seat:r,...l}=n;Fe({...l,x:a.x,y:a.y})}C.subscribe((e,t)=>{switch(iM(t),t.type){case"room/switch":{const n=F.classList.contains("room-yard");w&&De!==X&&mM(t.room),As(),Rt(),(t.room==="backyard"||n||Se.isPlay()&&Math.min(window.innerWidth,window.innerHeight)<500)&&ss(),_h(t.room);break}case"item/add":Ft(e),H7(),_9();break;case"game/reset":As();break;case"room/wallpaper":case"room/floor":case"room/pattern":case"room/wallTile":case"room/floorTile":Lg(e);break;case"char/update":case"char/move":t.type==="char/move"&&St&&!Oo&&t.id===St.id&&(St=null),Gt(e),Rc(),Oa(),z==="ranch"?Gn():z==="park"&&Is();break;case"char/add":case"char/delete":case"char/hold":case"char/release":Ft(e),Gt(e),$t(),Lt==="__people"&&Rt();break;case"item/move":case"item/flip":case"item/delete":case"item/size":Ft(e),Gt(e),$t();break;case"baby/meet":case"baby/name":case"baby/care":case"baby/hold":case"baby/place":case"baby/ease":Gt(e),$t();break;case"settings/sound":Rg(e);break;default:Ft(e)}});function ut(e){if(!e)return;const t=e.querySelector(":scope > .inner")??e;t.classList.remove("bounce"),t.offsetWidth,t.classList.add("bounce")}function Ic(e,t,n=7){const s=M("fx"),o=["#ffd166","#ff8fab","#8ecae6","#80ed99","#c9a0dc"];for(let i=0;i<n;i++){const a=document.createElement("div");a.className="spark";const r=Math.PI*2*i/n+Math.random()*.5,l=40+Math.random()*30;a.style.left=e+"px",a.style.top=t+"px",a.style.background=o[i%o.length],a.style.setProperty("--dx",Math.cos(r)*l+"px"),a.style.setProperty("--dy",Math.sin(r)*l+"px"),s.appendChild(a),setTimeout(()=>a.remove(),650)}}const br=e=>{const t=e?.getBoundingClientRect();t&&Ic(t.left+t.width/2,t.top+t.height/2)};function Hc(e,t){Ic(e,t,10),S.pop()}function Ra(e){jt.forEach((t,n)=>{t.classList.toggle("hold-target",!!e&&e.c.id===n),t.dataset.hand=e&&e.c.id===n?e.hand:""})}function Og(e,t){C.dispatch({type:"char/hold",id:e.c.id,hand:e.hand,room:e.c.room,itemId:t}),et=null,Ft(C.get());const n=jt.get(e.c.id);ut(n),br(n?.querySelector(`.held[data-hand="${e.hand}"]`)),S.sparkle()}const cn=new Map;let Ut=!1,Aa=0;const Oc=()=>[...cn.values()].reduce((e,t)=>e+t,0)/cn.size;F.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&(cn.set(e.pointerId,e.clientX),cn.size>=2&&(Ut=!0,Aa=Oc(),ur(),xe.classList.add("hidden")))},!0);window.addEventListener("pointermove",e=>{if(cn.has(e.pointerId)&&(cn.set(e.pointerId,e.clientX),Ut&&cn.size>=2)){const t=Oc();Ne(ie-(t-Aa)/mt()),Aa=t}},!0);const Wg=e=>{cn.delete(e.pointerId),cn.size<2&&Ut&&(cn.size===0?Ut=!1:Aa=Oc())};window.addEventListener("pointerup",Wg,!0);window.addEventListener("pointercancel",Wg,!0);const Fs=80;function aM(e,t){const n=F.getBoundingClientRect();return t<n.top-40||t>n.bottom+10?0:e<n.left+Fs?-Math.min(1,(n.left+Fs-e)/Fs)*16:e>n.right-Fs?Math.min(1,(e-(n.right-Fs))/Fs)*16:0}function os(e,t){let n=e,s=0;const o=()=>{const r=Ut?0:aM(n.clientX,n.clientY);if(r){const l=ie;Ne(ie+r),ie!==l&&t.onMove(n)}s=requestAnimationFrame(o)};t.edgeScroll!==!1&&(s=requestAnimationFrame(o));const i=r=>{r.pointerId===e.pointerId&&(r.preventDefault(),n=r,Ut||t.onMove(r))},a=r=>{r.pointerId===e.pointerId&&(cancelAnimationFrame(s),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),t.onUp(r))};window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",a),window.addEventListener("pointercancel",a)}function rM(e){return new PointerEvent("pointerdown",{bubbles:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,pointerId:e.pointerId,pointerType:e.pointerType,button:e.button,buttons:e.buttons,isPrimary:e.isPrimary})}function lM(e,t){const n=t.target,s=n&&n.closest?n.closest("img.artimg"):null;if(s&&!yc(s,t.clientX,t.clientY)){const o=X3(t.clientX,t.clientY),i=o?.closest(".item"),a=o?.closest(".char");i&&i!==e?(t.stopPropagation(),Wl(i,t)):a&&(t.stopPropagation(),a.dispatchEvent(rM(t)));return}Wl(e,t)}function cM(e,t){if(t.preventDefault(),t.stopPropagation(),Ut)return;const n=e.dataset.id,s=t.clientX,o=t.clientY;os(t,{edgeScroll:!1,onMove(){},onUp(i){Math.hypot(i.clientX-s,i.clientY-o)>6||ZM(e,n)}})}function Wl(e,t,n=!1){if(t.preventDefault(),t.stopPropagation(),Ut)return;if(Se.isPlay()){cM(e,t);return}if(!At()){Cn(e);return}const s=C.get(),o=s.currentRoom,i=e.dataset.id,a=s.rooms[o].items.find(g=>g.id===i);if(!a)return;const r=Ce[a.kind],l=Pt(t.clientX,t.clientY),c={x:a.x-l.x,y:a.y-l.y};let d=n,f=null;et=i,C.dispatch({type:"item/front",room:o,id:i}),e.classList.add("lifted"),S.pick(),os(t,{onMove(g){const h=Pt(g.clientX,g.clientY);Math.hypot(h.x-l.x,h.y-l.y)>6&&(d=!0),d&&(xe.classList.add("hidden"),sa.classList.add("show")),sa.classList.toggle("hot",vp(g.clientX,g.clientY));const m=r.w*nt(a)/2;C.dispatch({type:"item/move",room:o,id:i,x:Math.max(m*.6,Math.min(ke-m*.6,h.x+c.x)),y:ig(r,h.y+c.y),...d?{stand:!0}:{}}),d&&xe.classList.add("hidden"),f=d&&r.holdable?$g(h):null,Ra(f)},onUp(g){if(e.classList.remove("lifted"),sa.classList.remove("show","hot"),Ra(null),d&&vp(g.clientX,g.clientY)){et=null,C.dispatch({type:"item/delete",room:o,id:i}),Hc(g.clientX,g.clientY);return}if(d&&f){Og(f,i);return}d?(S.drop(),ut(e)):(S.click(),ih(i),Y5(e)),Ft(C.get())}})}function dM(e,t,n){if(n.preventDefault(),n.stopPropagation(),Ut||Se.isPlay())return;const s=e.dataset.cid,o=t.dataset.hand,i=C.get().characters.find(d=>d.id===s),a=i?.held[o];if(!i||!a)return;const r=t.getBoundingClientRect(),l=Pt(r.left+r.width/2,r.bottom);C.dispatch({type:"char/release",id:s,hand:o,x:l.x,y:l.y});const c=re.querySelector(`.item[data-id="${a.id}"]`);c&&Wl(c,n,!0)}function pM(e){e.addEventListener("pointerdown",t=>{const n=t.target.closest(".held"),s=n?.querySelector("img.artimg"),o=!!s&&!yc(s,t.clientX,t.clientY);if(n&&!o){if(Se.isPlay()){t.preventDefault(),t.stopPropagation();return}if(!At()){t.stopPropagation(),Cn(e);return}return dM(e,n,t)}if(t.preventDefault(),t.stopPropagation(),Ut||Se.isPlay()&&!kg())return;if(!At()){Cn(e);return}et=null,Ft(C.get());const i=e.dataset.cid;Ae=i;const a=C.get(),r=a.characters.find(h=>h.id===i);if(!r)return;const l=Pt(t.clientX,t.clientY),c=_t(a.currentRoom,Bt(r),r),d={x:c.x-l.x,y:c.y-l.y};let f=c.x,g=!1;e.classList.add("lifted"),S.pick(),Gt(C.get()),li=!0,os(t,{onMove(h){const m=Pt(h.clientX,h.clientY),b=m.x+d.x;if(Math.hypot(m.x-l.x,m.y-l.y)>6&&(g=!0),!g)return;const _=C.get().characters.find(u=>u.id===i);if(!_)return;if(Math.abs(b-f)>3){const u=b<f;u!==_.flip&&C.dispatch({type:"char/update",id:i,patch:{flip:u}}),f=b}const y=Math.max(co+40,m.y+d.y);Ho(i,a.currentRoom,b,y,null),Se.isPlay()&&(ri=Sa(h.clientX,h.clientY)?.id??null),document.querySelectorAll(".tab").forEach(u=>u.classList.remove("drop")),document.elementFromPoint(h.clientX,h.clientY)?.closest(".tab:not(.on)")?.classList.add("drop")},onUp(h){li=!1,ri=null,e.classList.remove("lifted"),document.querySelectorAll(".tab").forEach(k=>k.classList.remove("drop"));const m=document.elementFromPoint(h.clientX,h.clientY)?.closest("[data-room]"),b=C.get().characters.find(k=>k.id===i);if(!g||!b){S.click();return}if(m&&m.dataset.room!==a.currentRoom){const k=m.getBoundingClientRect();Ic(k.left+k.width/2,k.top+k.height/2,9),S.swish(),Ho(i,m.dataset.room,b.x,b.y,null);return}const _=Pt(h.clientX,h.clientY),y=_.x+d.x,u=Math.max(co+40,_.y+d.y);if(Se.isPlay()){const k=Sa(h.clientX,h.clientY),x=Jo({mode:"play",via:"drag",releaseX:y,releaseY:u,piece:k?yr(k):null,occupied:ci(i)});Ho(i,a.currentRoom,x.x,x.y,x.seat)}else Ho(i,a.currentRoom,y,u,null);S.drop(),ut(e),requestAnimationFrame(()=>Bs(!0))}})})}function fM(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Se.isPlay()){n.stopPropagation();return}if(!At()){Cn(e);return}const s=document.createElement("div");s.className="ghost",s.innerHTML=dn(t),document.body.appendChild(s);const o=Math.max(1,60/(Math.max(t.w,lt(t))*mt())),i=t.w*mt()*o,a=lt(t)*mt()*o;s.style.width=i+"px",s.style.height=a+"px";let r=null;const l=f=>{s.style.left=f.clientX-i/2+"px",s.style.top=f.clientY-a*.8+"px",r=t.holdable&&Al(f.clientX,f.clientY)?$g(Pt(f.clientX,f.clientY)):null,Ra(r)};l(n),S.pick(),e.classList.add("pressed");const c=n.clientX,d=n.clientY;os(n,{onMove:l,onUp(f){s.remove(),e.classList.remove("pressed"),Ra(null);const g=C.get().currentRoom,h=Math.hypot(f.clientX-c,f.clientY-d)<8;let m,b;if(h)m=ie+380+Math.random()*240,b=t.wall?Math.min(og,200+lt(t)/2):500+Math.random()*40;else if(Al(f.clientX,f.clientY)){const u=Pt(f.clientX,f.clientY);m=u.x,b=ig(t,u.y+lt(t)*.2)}else return;const _={id:Rl(t.kind.replace(/[^a-z0-9-]/gi,"")),kind:t.kind,x:m,y:b,flip:!1,z:0,scale:1};if(g!=="backyard"&&C.get().rooms[g].items.length===0){const u=tx(k=>Rl(k),g);for(let k=0;k<u.length;k++)C.dispatch({type:"item/add",room:g,item:u[k]})}if(C.dispatch({type:"item/add",room:g,item:_}),!h&&r){Og(r,_.id);return}et=_.id,Ft(C.get());const y=re.querySelector(`.item[data-id="${_.id}"]`);ut(y),br(y),S.sparkle()}})})}function gM(e,t){e.addEventListener("pointerdown",n=>{if(n.preventDefault(),Se.isPlay())return;if(!At()){Cn(e);return}const s=C.get().characters.find(g=>g.id===t);if(!s)return;const o=_i(s),i=ns*o*mt(),a=pn*o*mt(),r=document.createElement("div");r.className="ghost",r.innerHTML=yt(s),r.style.width=i+"px",r.style.height=a+"px",document.body.appendChild(r);const l=g=>{r.style.left=g.clientX-i/2+"px",r.style.top=g.clientY-a*.85+"px"},c=n.clientX,d=n.clientY;let f=!1;r.style.visibility="hidden",os(n,{onMove(g){Math.hypot(g.clientX-c,g.clientY-d)>8&&(f=!0,r.style.visibility=""),l(g)},onUp(g){if(r.remove(),!f){S.click(),Ae=t,fo("dress");return}if(!Al(g.clientX,g.clientY))return;const h=Pt(g.clientX,g.clientY),m=C.get().currentRoom;C.dispatch({type:"char/move",id:t,room:m,x:h.x,y:Math.max(co+40,h.y+pn*o*.15)}),Ae=t,Gt(C.get());const b=jt.get(t);ut(b),br(b),S.sparkle()}})})}function Ug(){if(!At())return Cn(null),null;const e=C.get();if(e.characters.length>=uo)return null;const t=Rl("c"),n=er();C.dispatch({type:"char/add",char:Yn({id:t,...Ja(n),look2:n,room:e.currentRoom,x:ie+300+Math.random()*400,y:520+Math.random()*40})}),Ae=t,Gt(C.get());const s=jt.get(t);return ut(s),br(s),S.sparkle(),t}function hM(){return zc==="all"?"all":C.get().currentRoom}function Rt(){const e=C.get().currentRoom,t=hM(),n=Ec.find(l=>l.id===e)?.name??"This room",s=t==="all";M("roomFilter").innerHTML=`<button class="rf ${s?"on":""}" data-rf="${s?"room":"all"}">${s?"Just "+n:"All rooms"}</button>`;const o=Fr("secrets").length>0,i=po.filter(l=>l.id!=="secrets"&&(l.kind==="people"||l.kind==="pack"&&e!=="backyard"||Fr(l.id).length));!(Lt==="secrets"&&o)&&!i.some(l=>l.id===Lt)&&(Lt=i[1]?.id??"__people"),M("cats").innerHTML=i.map(l=>`<button class="cat ${l.kind} ${l.id===Lt?"on":""}" data-cat="${l.id}" aria-label="${l.name}" title="${l.name}">${l.kind==="people"?E7:l.kind==="pack"?`<span class="packicon">${dn(Ce[l.icon])}</span><span class="packname">${l.name}</span>`:dn(Ce[l.icon])}</button>`).join("")+(o?`<button class="cat secretTab ${Lt==="secrets"?"on":""}" data-cat="secrets" aria-label="Secrets" title="Secrets">🎁</button>`:"");const a=M("shelf");if(Ta.length=0,a.innerHTML="",!At()){a.innerHTML='<div class="empty locked">🔒 This house is look-only right now</div>';return}if(Lt==="__people"){const l=C.get(),c=Ds();if(c){const d=document.createElement("button");d.className="thing person me",d.setAttribute("aria-label","Me"),d.innerHTML=`<div class="face">${yt(c)}</div><span class="meStar">★</span>`,d.addEventListener("click",()=>{S.click(),Ae=ht,fo("dress")}),a.appendChild(d)}for(const d of l.characters){const f=document.createElement("button");f.className="thing person",f.setAttribute("aria-label","Character"),f.innerHTML=`<div class="face">${yt(d)}</div><span class="where" style="background:${rg(d.room)}"></span>`,a.appendChild(f),gM(f,d.id)}if(l.characters.length<uo){const d=document.createElement("button");d.className="thing add",d.setAttribute("aria-label","New character"),d.innerHTML=lg,d.addEventListener("click",()=>{Ug()&&(Rt(),fo("dress"))}),a.appendChild(d)}return}const r=Fr(Lt);r.length||(a.innerHTML='<div class="empty">Nothing here yet!</div>');for(const l of r){const c=document.createElement("button");c.className="thing",c.setAttribute("aria-label",l.name),c.dataset.kind=l.kind;const d=ro()&&zs(l.kind)?Ag.get(l.kind):void 0;if(d)for(let f=0;f<d.length;f++)c.appendChild(d[f]);else c.innerHTML=j3(l,nd(l.kind));a.appendChild(c),fM(c,l)}a.scrollLeft=0,Wc(),oM(),Ig()}function Wc(){const e=document.querySelector(".drawerTop"),t=document.getElementById("drawerBar");!e||!t||t.classList.toggle("more",e.scrollWidth-e.clientWidth-e.scrollLeft>6)}document.querySelector(".drawerTop").addEventListener("scroll",Wc,{passive:!0});window.addEventListener("resize",Wc);function Mp(e,t,n){return`<div class="sw">${e.map(s=>`<button class="dot ${s===t?"on":""}" style="background:${s}" data-act="${n}" data-v="${s}"></button>`).join("")}</div>`}let di=null,Xs=!1;function uM(e){if(e===ht){const n=Ds();if(!n||n.look2)return;Dn(ht,Xo(da(n)));return}const t=C.get().characters.find(n=>n.id===e);!t||t.look2||Dn(e,{...Xo(da(t)),size:t.size})}function wn(){const e=C.get(),t=M("card");if(di==="paint"){t.classList.remove("avCard");const n=e.rooms[e.currentRoom],s=yl.filter(a=>a.kind==="wallpaper"),o=yl.filter(a=>a.kind==="floor"),i=(a,r,l,c)=>`<button class="dot pat tile ${a.id===r?"on":""}" data-act="${l}" data-v="${a.id}" title="${a.name} (${wf(a.pack)})" style="background-color:${c};background-image:${Dl(a.url)};background-size:48px auto"></button>`;t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Paint the room</h2>
      <h3>Walls</h3>${Mp(M7,n.wallpaper,"wall")}
      <h3>Wallpaper</h3><div class="sw">${xg.map((a,r)=>`<button class="dot pat ${!n.wallTile&&r===n.pattern?"on":""}" data-act="pat" data-v="${r}" style="background-color:${n.wallpaper};background-image:${a};background-size:${r===1?"16px 16px":r===3?"20px 20px":"auto"}"></button>`).join("")}${s.map(a=>i(a,n.wallTile,"wtile",n.wallpaper)).join("")}</div>
      <h3>Floor</h3>${Mp(L7,n.floor,"floor")}
      ${o.length?`<h3>Floor style</h3><div class="sw"><button class="dot pat ${n.floorTile?"":"on"}" data-act="ftile" data-v="" style="background-color:${n.floor};background-image:${Mg}"></button>${o.map(a=>i(a,n.floorTile,"ftile",n.floor)).join("")}</div>`:""}`}else if(di==="dress"){t.classList.add("avCard");let n=e,s=Ds(),o=s?Yn({id:ht,...s}):null,i=Ae===ht&&o?o:n.characters.find(r=>r.id===Ae)??o??n.characters[0];i&&!i.look2&&uM(i.id),n=C.get(),s=Ds(),o=s?Yn({id:ht,...s}):null,i=Ae===ht&&o?o:n.characters.find(r=>r.id===Ae)??o??n.characters[0];const a=`<div class="picker">${o?`<button class="pk me ${i?.id===ht?"on":""}" data-act="pickc" data-v="${ht}"><div class="face">${yt(o)}</div><span class="meStar">★</span></button>`:""}${n.characters.map(r=>`<button class="pk ${r.id===i?.id?"on":""}" data-act="pickc" data-v="${r.id}"><div class="face">${yt(r)}</div><span class="where" style="background:${rg(r.room)}"></span></button>`).join("")}${n.characters.length<uo?`<button class="pk add" data-act="newc">${lg}</button>`:""}</div>`;if(!i){t.innerHTML=`<button class="close" data-act="close">✕</button><h2>Make your look!</h2>${a}<div class="dress"><p class="hint">Tap + to make someone new!</p></div>`;return}Ae=i.id,t.innerHTML=I5(i,a,Xs,Ht.trash)}}function fo(e){di=e,Xs=!1,wn(),M("sheet").classList.remove("hidden"),S.swish()}M("sheet").addEventListener("click",e=>{const t=e.target.closest("[data-act]");if(e.target===M("sheet")||t?.dataset.act==="close"){M("sheet").classList.add("hidden"),di=null,S.click(),Lt==="__people"&&Rt();return}if(!t)return;const n=C.get(),s=n.currentRoom,o=t.dataset.v,i=Ae??"",a=t.dataset.act;if(a!=="delc"&&(Xs=!1),a&&a.indexOf("av-")===0){const r=i===ht?Ds():C.get().characters.find(d=>d.id===i);if(a==="av-surprise"){Dn(i,{...Xo(er()),size:r?.size??"kid"}),S.sparkle(),wn(),ut(document.querySelector(".avStage"));return}const l=r?.look2??da(r??{}),c=H5(l,a,o??"");if(!c){S.click(),wn();return}Dn(i,{...Xo(c),size:r?.size??"kid"}),S.sparkle(),wn(),ut(document.querySelector(".avStage"));return}switch(a){case"wall":C.dispatch({type:"room/wallpaper",room:s,color:o});break;case"floor":C.dispatch({type:"room/floor",room:s,color:o});break;case"pat":C.dispatch({type:"room/pattern",room:s,pattern:+o});break;case"wtile":C.dispatch({type:"room/wallTile",room:s,tile:o});break;case"ftile":C.dispatch({type:"room/floorTile",room:s,tile:o||null});break;case"skin":case"hair":case"shirt":case"pants":Dn(i,{[a]:o});break;case"hs":Dn(i,{hairStyle:+o});break;case"acc":Dn(i,{acc:+o});break;case"size":{const r=i===ht?Ds():C.get().characters.find(l=>l.id===i);Dn(i,{size:o,...r?.look2?{look2:r.look2}:{}}),Gt(C.get());break}case"pickc":Ae=o,Gt(C.get()),S.click(),wn();return;case"newc":if(!Ug())return;break;case"delc":if(i===ht||!At())return;if(!Xs){Xs=!0,S.click(),wn();return}Xs=!1;{const l=jt.get(i)?.getBoundingClientRect();C.dispatch({type:"char/delete",id:i}),l?Hc(l.left+l.width/2,l.top+l.height/2):S.pop()}Ae=C.get().characters[0]?.id??null,wn();return}S.sparkle(),wn(),ut(document.querySelector(".preview"))});M("tabs").addEventListener("click",e=>{const t=e.target.closest("[data-room]");if(!t)return;const n=t.dataset.room;n!==C.get().currentRoom&&(et=null,S.swish(),F.classList.remove("swap"),F.offsetWidth,F.classList.add("swap"),C.dispatch({type:"room/switch",room:n}))});M("cats").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");t&&(Lt=t.dataset.cat,S.click(),Rt())});M("roomFilter").addEventListener("click",e=>{const t=e.target.closest("[data-cat]");if(t){Lt=t.dataset.cat,S.click(),Rt();return}const n=e.target.closest("[data-rf]");n&&(zc=n.dataset.rf==="all"?"all":"",S.click(),Rt())});xe.addEventListener("pointerdown",e=>e.stopPropagation());xe.addEventListener("click",e=>{const t=e.target.closest("[data-a]");if(!t||!et)return;if(!At()){Cn(null);return}const n=C.get().currentRoom,s=et,o=re.querySelector(`.item[data-id="${s}"]`);switch(t.dataset.a){case"smaller":case"bigger":{const i=C.get().rooms[n].items.find(l=>l.id===s);if(!i)break;const a=$s.indexOf(Es(i.size)),r=t.dataset.a==="smaller"?a-1:a+1;if(r<0||r>=$s.length)break;C.dispatch({type:"item/size",room:n,id:s,size:$s[r]}),S.click(),ut(o);break}case"flip":C.dispatch({type:"item/flip",room:n,id:s}),S.swish(),ut(o);break;case"front":C.dispatch({type:"item/front",room:n,id:s}),S.click(),ut(o);break;case"back":C.dispatch({type:"item/back",room:n,id:s}),S.click(),ut(o);break;case"delete":{const i=o?.getBoundingClientRect();et=null,C.dispatch({type:"item/delete",room:n,id:s}),i&&Hc(i.left+i.width/2,i.top+i.height/2);break}}});F.addEventListener("pointerdown",e=>{if(e.target.closest(".nudge"))return;ur();const t=e.clientX,n=ie;let s=!1,o=0,i=e.clientX,a=performance.now();os(e,{edgeScroll:!1,onMove(r){if(Math.abs(r.clientX-t)>6&&(s=!0),!s)return;const l=performance.now();o=(r.clientX-i)/Math.max(1,l-a),i=r.clientX,a=l,Ne(n-(r.clientX-t)/mt())},onUp(){if(!s){et&&(et=null,Ft(C.get()));return}if(Ut)return;let r=-o*16/mt();const l=()=>{Math.abs(r)<.3||(Ne(ie+r),r*=.92,no=requestAnimationFrame(l))};no=requestAnimationFrame(l)}})});F.addEventListener("wheel",e=>{e.preventDefault(),ur(),Ne(ie+(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)/mt())},{passive:!1});M("nudgeL").addEventListener("pointerdown",e=>{e.stopPropagation(),S.swish(),mr((ai??ie)-ae*.6)});M("nudgeR").addEventListener("pointerdown",e=>{e.stopPropagation(),S.swish(),mr((ai??ie)+ae*.6)});const Lp=M("minimap");Lp.addEventListener("pointerdown",e=>{e.stopPropagation(),e.preventDefault();const t=n=>{const s=Lp.getBoundingClientRect();mr((n.clientX-s.left)/s.width*ke-ae/2)};t(e),S.click(),os(e,{edgeScroll:!1,onMove:t,onUp(){}})});M("btnPaint").addEventListener("click",()=>{if(!At())return Cn(null);fo("paint")});M("btnDress").addEventListener("click",()=>fo("dress"));M("btnSound").addEventListener("click",()=>{C.dispatch({type:"settings/sound",on:!C.get().soundOn}),S.click()});document.addEventListener("gesturestart",e=>e.preventDefault());document.addEventListener("contextmenu",e=>e.preventDefault());"serviceWorker"in navigator&&navigator.serviceWorker.register("/cozy-preview/sw.js");window.__store=C;window.__items=Object.fromEntries(hn.filter(e=>e.img).map(e=>[e.kind,{w:e.w,h:lt(e),cat:e.cat,holdable:e.holdable,svg:e.img.includes(".svg")}]));window.__cam={get:()=>ie,set:Ne};window.__phoneShowKids=()=>tt();window.__avatar={richAvatars:_c,randomLook2:er,look2FromLegacy:da,legacyFromLook2:Ja,sanitizeLook2:gi,handsFor:fr};window.__frameHouseKid=()=>Bs(!0);window.__layoutNameTags=()=>Af();window.__lie={bedArt:nr,lieBedKinds:_0,lieOffset:fa,lieSpot:L0,box(e){const t=Ce[e];return t?{w:t.w,h:lt(t)}:null}};window.__paint=()=>{$t()};const de=e=>e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function At(){return!w||De===X||w.canEdit(Pe)}function Cn(e){S.pop();const t=M("houseTag");t.classList.add("show"),t.classList.remove("wiggle"),t.offsetWidth,t.classList.add("wiggle"),window.clearTimeout(Da),Da=window.setTimeout(()=>{z==="house"&&w&&!document.body.classList.contains("own-house")||t.classList.remove("show")},2e3),e&&(e.classList.remove("nope"),e.offsetWidth,e.classList.add("nope")),Z("🔒 Look-only house: ask the owner to unlock it!",1800)}const $e=()=>w?.myPresence()??null,Ds=()=>w?w.players.get(w.pid)?.look??null:null;function Dn(e,t){if(e===ht){const n=Ds();if(!n||!w)return;w.setLook(mi({...n,...t})),$t(),z==="street"&&Ia(),z==="park"&&Is(),z==="ranch"&&Gn();return}C.dispatch({type:"char/update",id:e,patch:t})}function Fe(e){w?.setPresence(e)}function mM(e){const t=$e();t&&t.where==="house"&&Fe({...t,room:e})}function Vg(e){De=e,sg(e),et=null,setTimeout(()=>Eh.update());for(const t of Object.keys(za))delete za[t];Ae=e===X?e.get().characters[0]?.id??null:ht,As(),Rt()}function Uc(e,t,n,s){return`<div class="inner">${yt(e,n,s)}</div><div class="nametag">${de(t)}</div>`}function $t(){const e=new Set;if(w&&De!==X&&z==="house"){const n=C.get().currentRoom,s=[...w.presence.entries()],o=$e();o&&s.push([w.pid,o]);for(const[i,a]of s){const r=w.players.get(i);if(!r||a.where!=="house"||a.houseId!==Pe||a.room!==n)continue;e.add(i);let l=Io.get(i);(!l||!l.isConnected)&&(l=document.createElement("div"),l.className="char avatar "+(i===w.pid?"mine":"other"),l.dataset.pid=i,re.appendChild(l),Io.set(i,l),i===w.pid?yM(l):l.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation()}));const c=r.look,d=Xn(i,a),f=d?.pose??null,g=Go(C.get())===i,h=JSON.stringify(c)+r.nickname+(f||"")+(g?"h":"");if(l.dataset.look!==h){const y=l.querySelector(".bubble");l.innerHTML=Uc(c,r.nickname,f,g),y&&l.appendChild(y),l.dataset.look=h}l.classList.toggle("holding",g);const m=Ps[c.size]??1,b=_t(n,d,a);Ws(l,b.x,b.y,ns*m,pn*m);const _=d&&C.get().rooms[n].items.find(y=>y.id===d.item);if(l.style.zIndex=String(_?1e3+_.z+1+d.n:5e3+Math.round(a.y)),l.classList.toggle("flipped",a.flip),l.classList.toggle("pose-sit",f==="sit"),l.classList.toggle("pose-lie",f==="lie"),l.classList.toggle("pose-lie-r",f==="lie"&&!!_?.flip),bi(l,c,i===w.pid),g){const y=Tf(c,f);y?Tg("avatar",i,l,y,b.y):Pg("avatar",i)}}}const t=Go(C.get());w&&z==="house"&&t&&e.has(t)||Sg("avatar");for(const[n,s]of Io)(!e.has(n)||!s.isConnected)&&(e.has(n)||s.remove(),Io.delete(n));Rc(),Us(),wr()}function yM(e){e.addEventListener("pointerdown",t=>{if(t.preventDefault(),t.stopPropagation(),Ut||!w)return;const n=$e();if(!n||n.where!=="house")return;const s=Pt(t.clientX,t.clientY),o=_t(C.get().currentRoom,Xn(w.pid,n),n),i={x:o.x-s.x,y:o.y-s.y};let a=o.x,r=!1;e.classList.add("lifted"),S.pick(),li=!0,os(t,{onMove(l){const c=Pt(l.clientX,l.clientY),d=$e();if(!d||d.where!=="house"||(Math.hypot(c.x-s.x,c.y-s.y)>6&&(r=!0),!r))return;const f=Math.max(40,Math.min(ke-40,c.x+i.x)),g=Math.max(co+40,Math.min(Ue,c.y+i.y)),h=Math.abs(f-a)>3?f<a:d.flip;Math.abs(f-a)>3&&(a=f),ia(d,f,g,h,null),$t(),Pa(C.get()),Se.isPlay()&&(ri=Sa(l.clientX,l.clientY)?.id??null)},onUp(l){li=!1,ri=null,e.classList.remove("lifted");const c=$e();if(!r||!c||c.where!=="house"){S.click();return}const d=Pt(l.clientX,l.clientY),f=Math.max(40,Math.min(ke-40,d.x+i.x)),g=Math.max(co+40,Math.min(Ue,d.y+i.y));if(Se.isPlay()){const h=Sa(l.clientX,l.clientY),m=Jo({mode:"play",via:"drag",releaseX:f,releaseY:g,piece:h?yr(h):null,occupied:ci(void 0,w.pid)}),b=m.seat?{id:m.seat.item,pose:m.seat.pose,n:m.seat.n}:null;ia(c,m.x,m.y,c.flip,b)}else ia(c,f,g,c.flip,null);$t(),Pa(C.get()),S.drop(),ut(e),requestAnimationFrame(()=>Bs(!0))}})})}function wM(e){return e.kind==="text"?e.v:(e.kind==="phrase"?Qo:tf)[e.v]??""}function wo(){const e=document.querySelectorAll(".bubble");if(!document.body.classList.contains("phone")){e.forEach(s=>{(s.style.marginLeft||s.style.marginTop)&&(s.style.marginLeft="",s.style.marginTop="")});return}const t=F.getBoundingClientRect(),n=mt()||1;e.forEach(s=>{s.style.marginLeft="0px",s.style.marginTop="0px";const o=s.getBoundingClientRect();let i=0;o.width>=t.width-8||o.left<t.left+4?i=t.left+4-o.left:o.right>t.right-4&&(i=t.right-4-o.right);let a=0;o.top<t.top+4?a=t.top+4-o.top:o.bottom>t.bottom-4&&(a=t.bottom-4-o.bottom),i&&(s.style.marginLeft=i/n+"px"),a&&(s.style.marginTop=a/n+"px")})}function bM(e,t){const n=z==="street"?document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`):z==="park"?document.querySelector(`#pavatars .savatar[data-pid="${e}"]`):z==="ranch"?document.querySelector(`#ravatars .savatar[data-pid="${e}"]`):z==="gameroom"?document.querySelector(`#gavatars .savatar[data-pid="${e}"]`):Io.get(e),s=n?[n]:[];for(const o of s){o.querySelector(".bubble")?.remove();const i=document.createElement("div");i.className="bubble"+(t.kind==="emote"?" emote":""),i.textContent=wM(t),o.appendChild(i),wo(),setTimeout(()=>i.classList.add("out"),4600),setTimeout(()=>i.remove(),5e3)}e!==w?.pid&&S.click()}function vr(){const e=$e();if(!w||!e)return 0;let t=0;return w.presence.forEach(n=>{am(e,n)&&t++}),t}function Us(){const e=vr();M("btnChat").classList.toggle("glow",e>0),kr();const t=document.getElementById("chatNear");t&&(t.textContent=e?`${e} friend${e>1?"s":""} nearby can hear you`:"Walk closer to a friend to talk!",M("chatTray").classList.toggle("nobody",!e))}function Qg(){const e=M("chatTray");if(!w)return;const t=document.body.classList.contains("phone"),n=`<div class="phrases">${Qo.map((a,r)=>`<button data-phrase="${r}">${de(a)}</button>`).join("")}</div>`,s=w.settings.freeChat?`<form class="typed" id="chatForm"><input id="chatInput" maxlength="${lc}" autocomplete="off" autocorrect="on" enterkeyhint="send" placeholder="Type a message…"/><button type="submit">Send</button></form><div class="chatWarn" id="chatWarn"></div>`:'<div class="presetsOnly">Picking from the bubbles above 💬</div>',o=t?'<button type="button" class="chatMore" data-chat="more">more</button>':"";e.innerHTML=`<div class="chatHead"><span id="chatNear"></span><button class="close" data-chat="close">✕</button></div>
    <div class="emotes">${tf.map((a,r)=>`<button data-emote="${r}">${a}</button>`).join("")}</div>
    ${o}
    <div class="chatExtra${t?" hidden":""}">${n}${s}</div>`,Us(),document.getElementById("chatForm")?.addEventListener("submit",a=>{a.preventDefault();const r=M("chatInput"),l=ju(r.value);if(!l.ok){M("chatWarn").textContent=or[l.reason]??"",S.pop();return}if(!vr()){Z("Walk closer to a friend to talk!");return}w.say({kind:"text",v:l.text}),r.value="",M("chatWarn").textContent="",r.blur()})}M("chatTray").addEventListener("click",e=>{const t=e.target;if(!w)return;if(t.closest('[data-chat="close"]')){M("chatTray").classList.add("hidden");return}const n=t.closest('[data-chat="more"]');if(n){const i=M("chatTray").querySelector(".chatExtra");i?.classList.toggle("hidden"),n.textContent=i&&!i.classList.contains("hidden")?"less":"more";return}const s=t.closest("[data-emote]"),o=t.closest("[data-phrase]");if(!(!s&&!o)){if(!vr()){Z("Walk closer to a friend to talk!");return}w.say(s?{kind:"emote",v:+s.dataset.emote}:{kind:"phrase",v:+o.dataset.phrase}),S.click()}});M("btnChat").addEventListener("click",()=>{M("chatTray").classList.toggle("hidden")||(Qg(),S.swish())});function fn(){const e=document.body.classList,n=!!w&&De!==X&&z==="house"?w.houses.get(Pe):void 0,s=!!n&&n.meta.ownerId===w.pid;if(e.toggle("mode-hood",!!w),e.toggle("view-street",z!=="house"),e.toggle("view-park",z==="park"),e.toggle("view-ranch",z==="ranch"),e.toggle("view-map",z==="street"),e.toggle("view-gameroom",z==="gameroom"),e.toggle("in-barn",z==="ranch"&&Ie),e.toggle("mode-play",z==="house"&&Se.isPlay()),td(),Gg(),e.toggle("own-house",s),e.toggle("locked",!!n&&!At()),e.toggle("has-hood",!!ir()),kr(),n){const o=w.players.get(n.meta.ownerId)?.nickname??"";M("houseTag").innerHTML=`${n.meta.locked?"🔒 ":""}<b>${de(n.meta.name)}</b>${s?" · yours":o?" · "+de(o):""}`;const i=M("lockIco");i&&(i.innerHTML=n.meta.locked?Et.lockOn:Et.lockOff);const a=n.meta.locked?"Unlock my house":"Lock my house";M("btnLock").setAttribute("aria-label",n.meta.locked?"Unlock house":"Lock house");const r=M("lockLabel");r&&(r.textContent=a)}Us(),vM(),document.body.classList.contains("phone")&&fg()}let Yr="",Da=0;function vM(){const e=M("houseTag"),t=!!w&&z==="house"&&!document.body.classList.contains("own-house");if(z!=="house"||!w){Yr="",e.classList.remove("show");return}if(t){e.classList.add("show");return}const n=Pe||"solo";Yr!==n&&(Yr=n,e.classList.add("show"),window.clearTimeout(Da),Da=window.setTimeout(()=>e.classList.remove("show"),2e3))}M("btnLock").addEventListener("click",()=>{const e=w?.houses.get(Pe);!e||e.meta.ownerId!==w.pid||(w.lock(e.meta.id,!e.meta.locked),S.click(),Z(e.meta.locked?"Unlocked: friends can decorate!":"Locked: friends can look but not change things"))});const wt=new Map;let Ep="",Ul=0,qe={w:Mn,h:Ln,portrait:!1};function kM(){return document.body.classList.contains("phone-portrait")}function qg(){const e=M("street"),t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);return Math.min(t/qe.w,n/qe.h)}function _M(e){const t=M("street"),n=M("mapWorld"),s=qe.w*e,o=qe.h*e;n.style.marginLeft=Math.max(0,Math.floor((t.clientWidth-s)/2))+"px",n.style.marginTop=Math.max(0,Math.floor((t.clientHeight-o)/2))+"px",t.scrollLeft=0,t.scrollTop=0,Zg()}function Zg(){const e=M("street"),t=M("mapWorld"),n=4,s=e.clientWidth-n,o=e.clientHeight-n,i=t.offsetLeft,a=t.offsetTop;t.querySelectorAll(".mapSign").forEach(r=>{r.style.transform="translateX(-50%)";const l=r.offsetWidth,c=r.offsetHeight,d=i+r.offsetLeft-l/2,f=a+r.offsetTop;let g=0,h=0;d<n&&(g=n-d),d+l+g>s&&(g-=d+l+g-s),f<n&&(h=n-f),f+c+h>o&&(h-=f+c+h-o),$M(r,g,h,i,a,n,s,o)})}function $M(e,t,n,s,o,i,a,r){const l=[...e.parentElement.querySelectorAll(".mapMail")],c=()=>{const f=e.offsetWidth,g=e.offsetHeight,h=s+e.offsetLeft-f/2+t,m=o+e.offsetTop+n;return{left:h,top:m,right:h+f,bottom:m+g,width:f,height:g}};for(let f=0;f<6;f++){const g=c(),h=l.find(x=>{const R=s+x.offsetLeft,H=o+x.offsetTop,I=R+x.offsetWidth,K=H+x.offsetHeight;return g.right>R+2&&g.left<I-2&&g.bottom>H+2&&g.top<K-2});if(!h)break;const m=s+h.offsetLeft,b=o+h.offsetTop,_=b+h.offsetHeight,y=c(),u=_+4-y.top,k=y.bottom-(b-4);y.top+u+y.height<=r?n+=u:y.top-k>=i?n-=k:t-=Math.min(y.right,m+h.offsetWidth)-Math.max(y.left,m)+6}const d=c();d.left<i&&(t+=i-d.left),d.right>a&&(t-=d.right-a),d.top<i&&(n+=i-d.top),d.bottom>r&&(n-=d.bottom-r),e.style.transform=Math.abs(t)>.5||Math.abs(n)>.5?`translate(calc(-50% + ${t.toFixed(1)}px), ${n.toFixed(1)}px)`:"translateX(-50%)"}document.fonts?.ready.then(()=>{z==="street"&&Zg()});function xM(){return w?[...w.houses.values()].map(e=>e.meta).sort((e,t)=>e.slot-t.slot):[]}function MM(e){const s=Math.round(97.5),o=Math.max(1,Math.ceil(e/(e===1?1:2))),i=158,a=318,l=a+(o-1)*i+s/2+108,c=Math.max(1020,l+78),d=Math.max(l,Math.min(c-88,Math.round(c*.74))),f=e===1?[280]:[150,410],g=e===1?1:2,h=Array.from({length:e},(m,b)=>({x:f[b%g],y:a+Math.floor(b/g)*i}));return{w:560,h:c,hw:104,hh:s,houses:h,square:{x:280,y:d},park:{x:96,y:122},club:{x:280,y:116},ranch:{x:458,y:120}}}function _s(e=!1){if(z!=="street")return;const t=M("mapWorld"),n=xM(),s=w?n.map(g=>({id:g.id,name:g.name,style:g.style,locked:g.locked,mine:g.ownerId===w.pid,lit:!!w.players.get(g.ownerId)?.online})):Ul?Array.from({length:Ul},(g,h)=>({id:"fake"+h,name:["Reagan","Quinn","Chloe","Sloane","Cada","Emma","Olivia","Charlotte","Amelia","Sophia","Isabella","Mia"][h%12]+"'s House",style:h,locked:h===3,mine:h===0,lit:h%3!==1})):[null],o=kM()?MM(Math.max(1,s.length)):null;qe=o?{w:o.w,h:o.h,portrait:!0}:{w:Mn,h:Ln,portrait:!1};const i=qg(),a=(qe.portrait?"P":"L")+qe.w+"x"+qe.h+":"+i.toFixed(3)+JSON.stringify(n)+(w?n.map(g=>(w.players.get(g.ownerId)?.online?1:0)+(Kr(g.id)?"u":"")).join("")+w.pid:"solo");if(!e&&a===Ep&&t.querySelector("#mapFaces")){Ia();return}Ep=a,t.style.width=qe.w*i+"px",t.style.height=qe.h*i+"px",t.style.setProperty("--sc",String(i)),t.innerHTML=`<div class="mapClip">${o?Th(o.w,o.h):Ph()}</div>`;const r=t.querySelector(".mapClip"),l=g=>g*i+"px";wt.clear();const c=s.length;let d="",f="";if(o){const{hw:g,hh:h}=o,m=34,b=40;s.forEach((k,x)=>{const R=o.houses[x]??o.houses[0],H=k?`house:${k.id}`:"home",I=k?k.name:"My House";wt.set(k?"house:"+k.id:"home",{x:R.x,y:R.y-h/2-8});const K=!!(k&&Kr(k.id)),ce=R.x<o.w/2?Math.max(4,R.x-g/2-m-8):Math.min(o.w-m-4,R.x+g/2+8),G=Math.max(4,Math.min(o.h-b-4,R.y-h*.42));d+=`<button class="mapSpot mapHouse ${k?.mine||!k?"mine":""}" data-go="${H}" aria-label="${de(I)}" style="left:${l(R.x-g/2)};top:${l(R.y-h/2)};width:${l(g)};height:${l(h)}">${ka(k?k.style:0,{lit:k?k.lit:!0})}${k?.locked?'<span class="lockBadge">🔒</span>':""}${k?.mine||!k?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${K?"up":""}" data-mail="${k?k.id:"home"}" aria-label="${de(I)} mailbox" style="left:${l(ce)};top:${l(G)};width:${l(m)};height:${l(b)}">${Cd(K)}</button>`,f+=`<div class="mapSign ${k?.mine||!k?"mine":""}" style="left:${l(R.x)};top:${l(R.y+h/2+2)}">${de(I)}</div>`});const _=(k,x,R,H,I,K,le,ce,G)=>{d+=`<button class="mapSpot ${k}" data-go="${x}" aria-label="${R}" style="left:${l(I-le/2)};top:${l(K-ce/2)};width:${l(le)};height:${l(ce)}">${H}</button>`,f+=`<div class="mapSign place" style="left:${l(I)};top:${l(K+G)}">${R==="The park"?"Park":R==="Rainbow Ranch"?"Rainbow Ranch":"Clubhouse"}</div>`};_("mapPark","park","The park",rd,o.park.x,o.park.y,148,126,68),_("mapRanch","ranch","Rainbow Ranch",ld,o.ranch.x,o.ranch.y,156,128,72),_("mapClub","gameroom","The clubhouse",cd,o.club.x,o.club.y,146,120,68),wt.set("park",{x:o.park.x,y:o.park.y-78}),wt.set("ranch",{x:o.ranch.x,y:o.ranch.y-80}),wt.set("barn",{x:o.ranch.x,y:o.ranch.y+8}),wt.set("gameroom",{x:o.club.x,y:o.club.y-74}),wt.set("square",o.square);const y=[{x:o.park.x,y:o.park.y,r:90},{x:o.ranch.x,y:o.ranch.y,r:96},{x:o.club.x,y:o.club.y,r:88},{x:o.square.x,y:o.square.y,r:70},...o.houses.map(k=>({x:k.x,y:k.y,r:78}))],u=o.w/2;r.insertAdjacentHTML("beforeend",ad(y,(k,x)=>Math.abs(k-u)<34,o.w,o.h)+Ah(o.w,o.h,y)+d+'<div class="mapFaces" id="mapFaces"></div>')}else{const g=t.querySelector("#mapRoad"),h=g.getTotalLength(),m=Array.from({length:160},(x,R)=>g.getPointAtLength(h*R/159)),b=(x,R)=>m.some(H=>Math.hypot(H.x-x,H.y-R)<50),_=Vl(),y=c>8?80:94,u=y*300/320,k=Ng(g,c,_);s.forEach((x,R)=>{const H=k[R],I=x?`house:${x.id}`:"home",K=x?x.name:"My House";wt.set(x?"house:"+x.id:"home",{x:H.x,y:H.y-u/2-4});const le=!!(x&&Kr(x.id)),ce=34,G=40,pe=14/i,en=Math.max(4,Math.min(Mn-ce-4,H.x+y/2+pe)),Dt=Math.max(4,Math.min(Ln-G-4,H.y-u*.22));d+=`<button class="mapSpot mapHouse ${x?.mine||!x?"mine":""}" data-go="${I}" aria-label="${de(K)}" style="left:${l(H.x-y/2)};top:${l(H.y-u/2)};width:${l(y)};height:${l(u)}">${ka(x?x.style:0,{lit:x?x.lit:!0})}${x?.locked?'<span class="lockBadge">🔒</span>':""}${x?.mine||!x?'<span class="homeBadge">★</span>':""}</button>
        <button class="mapMail ${le?"up":""}" data-mail="${x?x.id:"home"}" aria-label="${de(K)} mailbox" style="left:${l(en)};top:${l(Dt)};width:${l(ce)};height:${l(G)}">${Cd(le)}</button>`,f+=`<div class="mapSign ${x?.mine||!x?"mine":""}" style="left:${l(H.x)};top:${l(H.y+u/2-2)}">${de(K)}</div>`}),d+=`<button class="mapSpot mapPark" data-go="park" aria-label="The park" style="left:${l(Bn.x-100)};top:${l(Bn.y-85)};width:${l(200)};height:${l(170)}">${rd}</button>`,f+=`<div class="mapSign place" style="left:${l(Bn.x)};top:${l(Bn.y+70)}">Park</div>`,d+=`<button class="mapSpot mapRanch" data-go="ranch" aria-label="Rainbow Ranch" style="left:${l(sn.x-110)};top:${l(sn.y-90)};width:${l(220)};height:${l(180)}">${ld}</button>`,f+=`<div class="mapSign place" style="left:${l(sn.x)};top:${l(sn.y+78)}">Rainbow Ranch</div>`,d+=`<button class="mapSpot mapClub" data-go="gameroom" aria-label="The clubhouse" style="left:${l(Rn.x-95)};top:${l(Rn.y-78)};width:${l(190)};height:${l(156)}">${cd}</button>`,f+=`<div class="mapSign place" style="left:${l(Rn.x)};top:${l(Rn.y+82)}">Clubhouse</div>`,wt.set("park",{x:Bn.x,y:Bn.y-60}),wt.set("ranch",{x:sn.x-30,y:sn.y-60}),wt.set("barn",{x:sn.x+10,y:sn.y+10}),wt.set("gameroom",{x:Rn.x,y:Rn.y-52}),r.insertAdjacentHTML("beforeend",ad(_,b)+d+'<div class="mapFaces" id="mapFaces"></div>')}t.insertAdjacentHTML("beforeend",f),Ia(),_M(i)}const Vl=()=>[{x:Bn.x,y:Bn.y,r:115},{x:sn.x,y:sn.y,r:125},{x:on.x,y:on.y,r:100},{x:Rn.x,y:Rn.y,r:90}];function Ng(e,t,n){const s=e.getTotalLength(),o=[];for(let i=0;i<t;i++){const a=t===1?.2:.05+.75*i/(t-1),r=e.getPointAtLength(s*a),l=e.getPointAtLength(Math.min(s,s*a+3));let c=-(l.y-r.y),d=l.x-r.x;const f=Math.hypot(c,d)||1;c/=f,d/=f;const g=[1,-1].map(b=>({x:r.x+c*72*b,y:r.y+d*72*b})).map(b=>({...b,score:Math.min(...n.map(_=>Math.hypot(_.x-b.x,_.y-b.y)-_.r),b.x-50,Mn-50-b.x,b.y-60,Ln-40-b.y)})),h=i%2?g:[g[1],g[0]],m=h[0].score>0||h[0].score>=h[1].score?h[0]:h[1];m.x=Math.max(60,Math.min(Mn-60,m.x)),m.y=Math.max(62,Math.min(Ln-72,m.y)),n.push({x:m.x,y:m.y,r:70}),o.push({x:m.x,y:m.y})}return o}window.__mapFake=e=>{Ul=e,_s(!0)};window.__mapLayout=e=>{const t=document.querySelector("#mapRoad");if(!t)return null;const n=Ng(t,e,Vl());let s=1e9,o=1e9,i=!0;return n.forEach((a,r)=>{n.forEach((l,c)=>{c>r&&(s=Math.min(s,Math.hypot(a.x-l.x,a.y-l.y)))}),Vl().forEach(l=>{o=Math.min(o,Math.hypot(a.x-l.x,a.y-l.y)-l.r)}),(a.x<55||a.x>Mn-55||a.y<60||a.y>Ln-70)&&(i=!1)}),{n:e,minHouse:s,minSpot:o,inside:i}};function Fg(e){return e.where==="house"&&e.houseId?{kind:"house",houseId:e.houseId,room:e.room}:e.where==="park"||e.where==="ranch"||e.where==="barn"||e.where==="gameroom"?{kind:e.where}:{kind:"square"}}const LM=e=>e.kind==="house"?"house:"+e.houseId:e.kind;function Ia(){const e=document.getElementById("mapFaces");if(!e||z!=="street")return;const t=qg(),n=new Set,s=[];if(w){const i=[...w.presence.entries()],a=$e();a&&i.push([w.pid,a]);for(const[r,l]of i){const c=w.players.get(r);c&&s.push({key:r,look:c.look,name:c.nickname,mine:r===w.pid,place:Fg(l)})}}else{const i=X.get().characters[0];i&&s.push({key:"solo",look:mi(i),name:"You",mine:!0,place:{kind:"square"}})}const o=new Map;for(const i of s){const a=LM(i.place);o.has(a)||o.set(a,[]),o.get(a).push(i)}for(const[i,a]of o)a.sort((r,l)=>r.mine?-1:l.mine?1:r.name.localeCompare(l.name)),a.forEach((r,l)=>{let c,d;const f=wt.get("square")??{x:on.x,y:on.y};if(i==="square")if(qe.portrait){const y=Math.floor(l/3),u=l%3,k=Math.min(3,a.length-y*3);c=f.x+(u-(k-1)/2)*176,d=f.y+y*112}else if(a.length===1)c=on.x,d=on.y;else{const b=-Math.PI/2+l*(Math.PI*2/a.length);c=on.x+Math.cos(b)*78,d=on.y+Math.sin(b)*78}else{const b=wt.get(i)??f,_=qe.portrait?2:3,y=qe.portrait?150:64,u=Math.floor(l/_),k=l%_,x=Math.min(_,a.length-u*_);c=b.x+(k-(x-1)/2)*y,d=b.y-u*(qe.portrait?108:64)}qe.portrait&&(c=Math.max(100,Math.min(qe.w-100,c)),d=Math.max(48,Math.min(qe.h-84,d))),n.add(r.key);let g=e.querySelector(`.mapFace[data-pid="${r.key}"]`);g||(g=document.createElement("button"),g.className="mapFace "+(r.mine?"mine":"other"),g.dataset.pid=r.key,g.setAttribute("aria-label",r.mine?"You":r.name),e.appendChild(g));const h=JSON.stringify(r.look)+r.name;if(g.dataset.look!==h){const b=g.querySelector(".bubble");g.innerHTML=`<span class="face">${Gl(yt(r.look))}</span><span class="fname">${de(r.mine?"You":r.name)}</span>`,b&&g.appendChild(b),g.dataset.look=h}g.dataset.place=i;const m=qe.portrait?62:46;g.style.left=(c-m/2)*t+"px",g.style.top=(d-m/2)*t+"px",g.style.width=g.style.height=m*t+"px"});e.querySelectorAll(".mapFace").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),Us()}function jg(e,t){const n=M("mapWorld");if(t&&!n.classList.contains("zoomIn")){const s=t.getBoundingClientRect(),o=n.getBoundingClientRect();n.style.transformOrigin=`${s.left+s.width/2-o.left}px ${s.top+s.height/2-o.top}px`,n.classList.remove("mapIn"),n.classList.add("zoomIn"),S.swish(),setTimeout(()=>{n.classList.remove("zoomIn"),Cp(e)},360)}else Cp(e)}function $i(e){e.classList.remove("sceneIn"),e.offsetWidth,e.classList.add("sceneIn"),setTimeout(()=>e.classList.remove("sceneIn"),600)}function Cp(e){e.kind==="house"?Kg(e.houseId,e.room):e.kind==="home"?Yg():e.kind==="park"?AM():e.kind==="ranch"?fi(!1):e.kind==="barn"?fi(!0):e.kind==="gameroom"&&DM()}function EM(e){const t=w?.presence.get(e);if(!w||!t)return;const n=Fg(t),s=w.players.get(e)?.nickname??"your friend";if(n.kind==="square"){Z(`${s} is on the map too! 👋`);return}const o=document.querySelector(`#mapFaces .mapFace[data-pid="${e}"]`)??void 0;jg(n,o),setTimeout(()=>{const i=$e();if(!i||!w)return;const a=t.x+(t.x>300?-110:110);if(n.kind==="house"&&i.where==="house")Fe({...i,x:a,y:t.y}),$t(),mr(a-ae/2);else if((n.kind==="park"||n.kind==="ranch"||n.kind==="barn")&&i.where===n.kind){Yt({...i,x:a,y:Math.max(xs,Math.min(En,t.y)),flip:a>t.x});const r=n.kind==="park"?is():Jt(),l=M(n.kind==="park"?"parkScroll":"ranchScroll");requestAnimationFrame(()=>{l.scrollLeft=t.x*r-l.clientWidth/2,tt()})}else if(n.kind==="gameroom"&&i.where==="gameroom"){const r=mo();r||Yt({where:"gameroom",x:a,y:Math.max(xs,Math.min(En,t.y)),flip:a>t.x});const l=ts(),c=M("grScroll"),d=r?.x??t.x;requestAnimationFrame(()=>{c.scrollLeft=d*l-c.clientWidth/2,tt()})}Z(`You found ${s}! 💕`)},420)}function Kr(e){if(!w)return!1;const t=w.houses.get(e);return!!t&&t.meta.ownerId===w.pid&&tc(t.confirmed.mailbox)>0}let qi=0;function Gg(){gg();const e=document.getElementById("mailCue"),t=w?.myHouseId()??"",n=w&&t?tc(w.houses.get(t)?.confirmed.mailbox):0;if(!w||z!=="street"||n<=0){n<=0&&(qi=0),e?.classList.remove("show");return}qi!==n&&(qi=n,e?.classList.add("show"),window.setTimeout(()=>{qi===n&&e?.classList.remove("show")},8e3))}function kr(){const e=w?.myHouseId()??"",t=w&&e?tc(w.houses.get(e)?.confirmed.mailbox):0,n=M("menuBadge");n.textContent=t>9?"9+":String(t),n.classList.toggle("on",t>0);const s=document.getElementById("mailNew");s&&(s.textContent=t>0?t===1?"1 new":t+" new":"",s.classList.toggle("on",t>0));const o=w?w.presence.size:0,i=M("mapBadge");i.textContent=o>9?"9+":String(o),i.classList.toggle("on",o>0),M("btnMap").setAttribute("aria-label",o>0?`Map, ${o} friends online`:"Map");const a=vr(),r=M("chatBadge");r.textContent=a>9?"9+":String(a),r.classList.toggle("on",a>0)}function Ql(e){e&&document.querySelectorAll(".toast").forEach(t=>t.remove()),M("menuPop").classList.toggle("hidden",!e),M("btnMenu").setAttribute("aria-expanded",e?"true":"false"),e&&kr(),CM()}function CM(){const e=M("houseTag");if(e.style.top="",!e.classList.contains("show")||M("menuPop").classList.contains("hidden"))return;const t=document.querySelector(".menuCard");if(!t)return;const n=M("stageWrap").getBoundingClientRect(),s=t.getBoundingClientRect(),o=e.getBoundingClientRect();if(!(o.top<s.bottom-2&&o.bottom>s.top+2&&o.left<s.right-2&&o.right>s.left+2))return;const a=s.bottom-n.top+8;a+o.height<n.height-8?e.style.top=a+"px":e.style.top=Math.max(8,n.height-o.height-10)+"px"}M("btnMenu").addEventListener("click",()=>{Ql(M("menuPop").classList.contains("hidden")),S.click()});M("menuPop").addEventListener("click",e=>{const t=e.target;if(t.id==="menuPop"||t.closest("#menuClose")){Ql(!1);return}t.closest(".menuRow")&&Ql(!1)});M("btnMail").addEventListener("click",()=>{const e=w?.myHouseId();e?Vc(e):Z("Join a street to send letters!")});M("secrets").addEventListener("click",()=>{if(z!=="house"){Z("Surprises are hiding in your house!");return}Se.isPlay()&&M("modeDecorate").click(),Lt="secrets",Rt(),Z("Surprises are in your drawer!")});function Vc(e){if(!w||e==="home"||!w.houses.has(e)){Z("Join a street to send letters!");return}const t=w.houses.get(e);oa.open(e,t.meta.name,t.meta.ownerId===w.pid,t.confirmed.mailbox?.letters??[]),S.click()}M("mapWorld").addEventListener("click",e=>{const t=e.target;if(z!=="street")return;const n=t.closest(".mapMail");if(n){Vc(n.dataset.mail||"home");return}const s=t.closest(".mapFace");if(s){s.classList.contains("mine")?(ut(s),S.pop(),Z("That's you! Tap a place to go there")):EM(s.dataset.pid);return}const o=t.closest("[data-go]");if(!o)return;const i=o.dataset.go;jg(i.startsWith("house:")?{kind:"house",houseId:i.slice(6)}:{kind:i},o)});function Vs(){M("street").classList.add("hidden"),M("park").classList.add("hidden"),M("ranch").classList.add("hidden"),M("gameroom").classList.add("hidden"),na()?.close(),M("chatTray").classList.add("hidden"),M("sheet").classList.add("hidden")}function so(){We=null,kt=[],Ie=!1,w?Fe({where:"street",x:600,y:540,flip:!1}):Tt=null,Vs(),z="street",M("street").classList.remove("hidden"),M("streetTitle").textContent=w?"Our Neighborhood":"My Map",fn(),_s(!0);const e=M("mapWorld");e.style.transformOrigin="50% 50%",e.classList.remove("zoomIn","mapIn"),e.offsetWidth,e.classList.add("mapIn"),S.swish()}function Yg(){if(w){const e=w.myHouseId();e&&w.houses.has(e)&&Kg(e);return}Vs(),z="house",Tt=null,Se.sync(!0),fn(),As(),$i(M("stageWrap")),S.sparkle(),Kn()}function Kg(e,t="living"){if(!w||!w.houses.has(e))return;Pe=e,z="house",Ie=!1,Se.sync(e===w.myHouseId());let n=Ca.get(e);n||(n=cm(w,e,{get:()=>X.get().soundOn,set:s=>X.dispatch({type:"settings/sound",on:s})}),Ca.set(e,n)),n.dispatch({type:"room/switch",room:t}),Fe({where:"house",houseId:e,room:t,x:900+Math.random()*300,y:540,flip:!1}),Vs(),Vg(n),$i(M("stageWrap")),S.sparkle(),Kn()}function Qc(){w?.close(),w=null,Ca=new Map,z="house",Pe="",Tt=null,We=null,kt=[],Ie=!1,M("elsewhere").classList.add("hidden"),Vs(),Se.sync(!0),Vg(X),fn()}M("btnMap").addEventListener("click",()=>{if(z==="street"){S.pop();return}so()});M("btnHome").addEventListener("click",()=>{if(z==="house"&&(!w||Pe===w.myHouseId())){S.pop();return}Yg()});M("phoneOk").addEventListener("click",()=>{M("phoneNote").classList.add("hidden"),S.click()});M("elsewhereGo").addEventListener("click",()=>{S.click(),w?.connect()});M("btnSolo").addEventListener("click",()=>{Qc(),Z("Playing in your own house 🏠")});window.addEventListener("resize",()=>{z==="street"&&_s(!0),z==="park"&&Nc(),z==="ranch"&&Jc(),z==="gameroom"&&Lc(),tt()});function qc(e){w=e,Ca=new Map,e.on("players",()=>{w===e&&(z==="street"?_s():z==="park"?Is():z==="ranch"?(Gn(),td()):z==="gameroom"?jo():($t(),fn()),di==="dress"&&wn())}),e.on("houses",()=>{w===e&&(z==="street"?_s():z==="house"&&!e.houses.has(Pe)&&(Z("That house is gone now"),so()))}),e.on("houseMeta",t=>{w!==e||t!==Pe||z!=="house"||(et=null,fn(),Ft(C.get()),Rt(),At()||M("sheet").classList.add("hidden"))}),e.on("pres",()=>{w===e&&(z==="street"?Ia():z==="park"?Is():z==="ranch"?Gn():z==="gameroom"?jo():$t())}),e.on("ranch",()=>{w===e&&z==="ranch"&&Er(!0)}),e.on("ranchFail",t=>{w===e&&Zl(t)}),e.on("noride",()=>{if(w!==e)return;const t=$e();if(t?.ride!==void 0){const{ride:n,...s}=t;Fe(s),Gn()}Z("Someone is riding that horse!")}),e.on("fx",(t,n)=>{w===e&&t9(t,n)}),e.on("bubble",(t,n)=>{w===e&&bM(t,n)}),e.on("sayFail",t=>Z(t==="presetsOnly"?"Typing is turned off: pick a bubble!":or[t]||"Couldn't send that")),e.on("mailbox",()=>{w===e&&(z==="street"&&_s(!0),Gg(),oa.refresh(),kr())}),e.on("mailFail",t=>{w===e&&oa.fail(t)}),e.on("settings",()=>{w===e&&(M("chatTray").classList.contains("hidden")||Qg(),oa.refresh())}),e.on("removed",()=>{Z("A grown-up took this iPad off the street");const t=e.cfg;xn({url:t.url,code:t.code,id:t.id,parentKey:t.parentKey}),Qc()}),e.on("status",t=>{w===e&&(document.body.classList.toggle("reconnecting",t!=="online"&&!e.replaced),(t==="online"||t==="connecting")&&M("elsewhere").classList.add("hidden"))}),e.on("replaced",()=>{w===e&&M("elsewhere").classList.remove("hidden")}),e.on("table",()=>{if(w===e){if(z==="gameroom"){const t=mo(),n=$e();t&&n?.where==="gameroom"&&Math.hypot(n.x-t.x,n.y-t.y)>40&&Fe({where:"gameroom",x:t.x,y:Math.max(xs,Math.min(En,t.y)),flip:n.flip}),jo()}na()?.refresh()}}),e.on("tblFail",(t,n)=>{w===e&&na()?.fail(t,n)}),e.on("welcome",()=>{if(w===e)if(z==="street")_s(!0);else if(z==="park"||z==="ranch"){const t=$e();t&&Fe(t),z==="park"?Nc():Jc(),tt()}else if(z==="gameroom"){const t=$e();t&&Fe(t),Lc(),tt(),na()?.refresh()}else e.houses.has(Pe)?As():so()}),e.on("reset",(t,n)=>{w===e&&n==="cuddling"&&Z("Someone is cuddling!")}),so()}async function zM(){fn();const e=ir(),t=io();if(!e||!t?.token||t.url!==e)return;const n=new ar(t),s=await n.connect();s==="ok"?qc(n):(n.close(),s!=="closed"&&Z("Couldn't reach the street. Playing at home!"))}function Vt(e,t,n=""){const s=document.createElement("div");s.className="sheet hoodSheet "+n,s.innerHTML=`<div class="card">${e}</div>`,document.body.appendChild(s),S.swish();const o=()=>s.remove();return s.addEventListener("click",i=>{const a=i.target;if(a===s||a.closest('[data-m="close"]'))return o();t(a,o,s)}),{root:s,close:o}}const Qt='<button class="close" data-m="close">✕</button>';M("btnHood").addEventListener("click",()=>SM());function SM(){const e=ir();if(!e){Vt(`${Qt}<h2>Neighborhood</h2><p class="hint">The street isn't open yet. Ask a grown-up to set it up!</p>`,()=>{});return}const t=io()?.url===e?io():null;Vt(`${Qt}<h2>Neighborhood</h2><div class="bigBtns">
      ${t?.token?`<button class="big go" data-m="go">${Et.street}<span>Go to my street</span></button>`:`<button class="big go" data-m="join">${Et.street}<span>Join a friend's street</span></button>`}
      <button class="big grown" data-m="create">${Et.shield}<span>${t?.parentKey?"Grown-ups":"Grown-ups: start a street"}</span></button></div>`,async(n,s)=>{const o=n.closest("[data-m]")?.dataset.m;if(o==="go"){s();const i=new ar(t),a=await i.connect();a==="ok"?qc(i):(i.close(),Z(a.startsWith("badtoken")?"Please join again":"Couldn't reach the street"))}o==="join"&&(s(),Yo(e)),o==="create"&&(s(),await gf()&&(t?.parentKey?_r():PM(e)))})}async function PM(e){let t;try{t=await rm(e)}catch{Z("Couldn't create a street right now");return}xn({url:e,code:t.code,id:t.id,parentKey:t.parentKey}),Vt(`${Qt}<h2>Your street is ready!</h2><p class="hint">Kids join with this code (you can pick your own on the grown-up screen):</p><div class="code" id="newCode">${t.code}</div>
    <p class="hint small">Grown-up key (keep it private; it opens the grown-up screen on another device):<br><b class="key" id="parentKey">${t.parentKey}</b></p>
    <div class="bigBtns"><button class="big grown" data-m="setup">${Et.shield}<span>Add kids' names &amp; code</span></button>
    <button class="big go" data-m="joinhere">${Et.street}<span>Join on this iPad</span></button></div>`,(n,s)=>{n.closest('[data-m="joinhere"]')&&(s(),Zc(e,t.code)),n.closest('[data-m="setup"]')&&(s(),_r())})}function Yo(e,t=""){const n=Vt(`${Qt}<h2>Join a street</h2><p class="hint">Type the code a grown-up gave you</p>
    <form id="codeForm" class="codeForm"><input id="codeInput" maxlength="${rc}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="CODE"/><button type="submit" class="go">Next</button></form>
    <p class="err">${de(t)}</p>`,()=>{}),s=n.root.querySelector("#codeInput");setTimeout(()=>s.focus(),50),s.addEventListener("input",()=>{s.value=ma(s.value)}),n.root.querySelector("#codeForm").addEventListener("submit",o=>{o.preventDefault();const i=ma(s.value);if(!gu(i)){n.close(),Yo(e,"That code looks wrong. Try again!");return}n.close(),Zc(e,i)})}async function Zc(e,t,n=""){let s;try{s=await lm(e,t)}catch{Yo(e,"Couldn't reach the street. Try again!");return}if("slow"in s){Yo(e,"Too many tries. Ask a grown-up and try again in a few minutes.");return}if(!s.exists){Yo(e,"Hmm, we couldn't find that street.");return}window.__lastLookupId=s.id,TM(e,t,s.id,s.roster,n)}function TM(e,t,n,s,o=""){if(s.length){Vt(`${Qt}<h2>Who are you?</h2>${o?`<p class="err">${de(o)}</p>`:'<p class="hint">Tap your name</p>'}<div class="nicks roster">${s.map((i,a)=>`<button data-nick="${a}" ${i.claimed?"disabled":""}>${de(i.name)}${i.claimed?"<small>signed in</small>":""}</button>`).join("")}</div>
      <p class="hint small">Not on the list? Ask a grown-up to add your name.</p>`,(i,a)=>{const r=i.closest("[data-nick]");if(!r||r.disabled)return;a();const l=s[+r.dataset.nick];l.hasHouse?Xg(e,t,n,l.name,void 0):zp(e,t,n,l.name)},"wide");return}Vt(`${Qt}<h2>Pick your street name</h2>${o?`<p class="err">${de(o)}</p>`:""}<div class="nicks">${vd.map((i,a)=>`<button data-nick="${a}">${de(i)}</button>`).join("")}</div>`,(i,a)=>{const r=i.closest("[data-nick]");r&&(a(),zp(e,t,n,vd[+r.dataset.nick]))},"wide")}function zp(e,t,n,s){Vt(`${Qt}<h2>Hi, ${de(s)}!</h2><p class="hint">What should your house on the street be?</p>
    <div class="bigBtns"><button class="big go" data-m="bring">${ka(2)}<span>Bring my house</span></button>
    <button class="big" data-m="fresh">${ka(5)}<span>Start a new one</span></button></div>`,(o,i)=>{const a=o.closest("[data-m]")?.dataset.m;a&&(i(),Xg(e,t,n,s,a==="bring"))})}async function Xg(e,t,n,s,o){const i=X.get(),a=i.characters[0],r=mi(a??{});let l;if(o&&(l=i,a)){const{reduce:m}=await p(async()=>{const{reduce:b}=await Promise.resolve().then(()=>X0);return{reduce:b}},void 0);l=m(i,{type:"char/delete",id:a.id})}const c=io(),d={url:e,code:t,id:n,parentKey:c?.id===n||c?.code===t?c.parentKey:void 0},f=i.dog?{name:i.dog.name,breed:i.dog.breed}:null,g=new ar(d),h=await g.connect({nickname:s,look:r,house:l,dog:f});if(h==="ok"){xn(g.cfg),qc(g),Z(`Welcome to the street, ${s}!`),O5()&&(W5(),Ae=ht,fo("dress"));return}g.close(),h.startsWith("nickname")?Zc(e,t,h.endsWith("notOnList")?"That name is not on the list anymore.":"That name is already signed in on another iPad. Ask a grown-up!"):Z(h==="full"?"That street is full":"Couldn't join right now")}M("btnParent").addEventListener("click",async()=>{await gf()&&_r()});const BM={codeTaken:"That code is already used by another street. Try adding a number!",badCode:"Codes are 4–16 letters or numbers.",badName:"Use a first name only (letters).",rosterFull:`Up to ${hu} names.`,nameInUse:"Remove that player first.",codeFixed:"This street's code can't be changed."};async function _r(){const e=io();if(!e)return;if(!e.parentKey){const a=Vt(`${Qt}<h2>Grown-up key</h2><p class="hint">Enter the key you got when the street was made</p><form id="keyForm" class="codeForm"><input id="keyInput" autocomplete="off" spellcheck="false"/><button class="go">OK</button></form>`,()=>{});a.root.querySelector("#keyForm").addEventListener("submit",r=>{r.preventDefault(),e.parentKey=a.root.querySelector("#keyInput").value.trim(),xn(e),w&&(w.cfg.parentKey=e.parentKey),a.close(),_r()});return}let t=w;t||(t=new ar({...e,token:void 0}),await t.connect());const n=t,s=a=>o.root.querySelector(a).value,o=Vt(`${Qt}<h2>Grown-up screen</h2><div id="parentBody"><p class="hint">Loading…</p></div>`,async a=>{const r=a.closest("[data-p]");if(!r)return;const l=r.dataset.p;if(l==="free"&&n.parent({op:"freeChat",on:r.dataset.on!=="1"}),l==="freeMail"&&n.parent({op:"freeMail",on:r.dataset.on!=="1"}),l==="rename"&&n.parent({op:"rename",houseId:r.dataset.hid,name:s(`input[data-hid="${r.dataset.hid}"]`)}),l==="add"&&n.parent({op:"rosterAdd",name:r.dataset.name??s("#rosterInput")}),l==="unname"&&n.parent({op:"rosterRemove",name:r.dataset.name}),l==="unclaim"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent="Tap again";return}n.parent({op:"unclaim",name:r.dataset.name})}if(l==="setcode"&&n.parent({op:"setCode",code:s("#codeEdit")}),l==="remove"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent="Tap again to remove";return}n.parent({op:"remove",pid:r.dataset.pid})}if(l==="mailClear"||l==="mailClearAll"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent=l==="mailClearAll"?"Tap again to clear every mailbox":r.dataset.id?"Tap again":"Tap again to clear this mailbox";return}l==="mailClearAll"?n.parent({op:"mailClearAll"}):n.parent({op:"mailClear",houseId:r.dataset.hid,...r.dataset.id?{id:r.dataset.id}:{}})}if(l==="leave"){if(r.dataset.sure!=="1"){r.dataset.sure="1",r.textContent="Tap again: forget this street here";return}xn(null),o.close(),Qc(),Z("This iPad left the street")}},"wide parent");o.root.addEventListener("submit",a=>{a.preventDefault();const r=a.target.id;r==="rosterForm"&&n.parent({op:"rosterAdd",name:s("#rosterInput")}),r==="codeForm2"&&n.parent({op:"setCode",code:s("#codeEdit")})});const i=a=>{const r=new Date(a);return Number.isFinite(r.getTime())?["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r.getMonth()]+" "+r.getDate()+", "+r.getFullYear():""};n.on("parentInfo",a=>{const r=o.root.querySelector("#parentBody");if(!r)return;const l=io();l&&l.code!==a.code&&(l.code=a.code,xn(l)),n.cfg.code=a.code;const c=a.roster??[],d=new Set(c.map(y=>y.name.toLowerCase())),f=uu.filter(y=>!d.has(y.toLowerCase())),g=c[0]?.name??"Reagan",h=Array.isArray(a.mail)?a.mail:[],m=h.some(y=>y.letters&&y.letters.length),b=rf(a.settings),_=h.map(y=>`<div class="pMailHouse"><div class="pMailName">${de(y.name||"House")}</div>${(y.letters||[]).slice().reverse().map(u=>`<div class="pLetter"><b>${de(u.from)}</b><span class="pWhen">${de(i(u.at))}</span><p>${de(u.text)}</p><button type="button" class="danger" data-p="mailClear" data-hid="${de(y.houseId)}" data-id="${de(u.id)}">Clear</button></div>`).join("")||'<p class="hint">No letters.</p>'}${(y.letters||[]).length?`<button type="button" class="danger" data-p="mailClear" data-hid="${de(y.houseId)}">Clear this mailbox</button>`:""}</div>`).join("");r.innerHTML=`${a.note?`<p class="err" id="pNote">${de(BM[a.note]??a.note)}</p>`:""}
      <div class="pRow"><div><div class="label">Invite code</div><div class="code small" id="pCode">${de(a.code)}</div></div>
        <div><div class="label">Free typing</div><button class="toggle ${a.settings.freeChat?"on":""}" data-p="free" data-on="${a.settings.freeChat?1:0}" id="pFree">${a.settings.freeChat?"On":"Off (presets only)"}</button><p class="hint small">Chat bubbles. Off means preset phrases only.</p></div>
        <div><div class="label">Let kids type their own letters</div><button class="toggle ${b?"on":""}" data-p="freeMail" data-on="${b?1:0}" id="pFreeMail">${b?"On":"Off (presets only)"}</button><p class="hint small">Letters only. Off means preset phrases only.</p></div></div>
      <div class="label">Letters</div><div id="parentMail">${_||'<p class="hint">No letters right now.</p>'}${m?'<button type="button" class="danger" data-p="mailClearAll" id="mailClearAll">Clear every mailbox</button>':""}</div>
      <form class="pAdd" id="codeForm2"><input id="codeEdit" maxlength="${rc}" autocapitalize="characters" autocomplete="off" spellcheck="false" placeholder="e.g. ${de(ma(g))}7"/><button data-p="setcode" type="button">Use this code</button></form>
      <p class="hint small">Tip: a word plus a number (like ${de(ma(g))}7) is easy to remember and harder to guess. Not case-sensitive.</p>
      <div class="label">Kids' names (sign-in list)</div>
      <div class="roster">${c.map(y=>`<span class="rName ${y.claimed?"claimed":""}"><b>${de(y.name)}</b>${y.claimed?`<i>signed in</i><button data-p="unclaim" data-name="${de(y.name)}">Reset</button>`:y.hasHouse?"<i>not signed in</i>":`<button class="x" data-p="unname" data-name="${de(y.name)}" aria-label="Remove name">×</button>`}</span>`).join("")||'<p class="hint">No names yet: kids pick a fun nickname instead.</p>'}</div>
      <form class="pAdd" id="rosterForm"><input id="rosterInput" maxlength="20" autocomplete="off" placeholder="First name"/><button data-p="add" type="button">Add</button></form>
      ${f.length?`<div class="sugg">${f.map(y=>`<button data-p="add" data-name="${y}">+ ${y}</button>`).join("")}</div>`:""}
      <div class="label">Houses</div>${a.houses.map(y=>`<div class="pHouse"><input data-hid="${y.id}" value="${de(y.name)}" maxlength="24"/><button data-p="rename" data-hid="${y.id}">Rename</button></div>`).join("")||'<p class="hint">No houses yet.</p>'}
      <div class="label">Players</div>${a.players.map(y=>`<div class="pPlayer"><span class="dot ${y.online?"on":""}"></span>${de(y.nickname)}<button class="danger" data-p="remove" data-pid="${y.pid}">Remove</button></div>`).join("")||'<p class="hint">Nobody has joined yet.</p>'}
      <p class="hint small">Letters stay on the server for up to 30 days. They are filtered, and only a first name is stored. You can clear them here, or turn off “Let kids type their own letters” so new letters use preset phrases. Chat bubbles are only relayed to kids standing nearby and are not saved. No emails or last names. "Reset" signs a name out of its iPad so it can sign in again on another one (her house stays).</p>
      <button class="danger wideBtn" data-p="leave">Forget this street on this device</button>`}),n.on("error",a=>{a==="badkey"&&(Z("That grown-up key didn't work"),e.parentKey=void 0,xn(e),o.close())}),n.parent({op:"info"})}let Tt=null;function is(){return M("park").clientHeight/fc}const RM=()=>{const e=X.get();return e.characters.find(t=>t.id===e.dog?.owner)??e.characters[0]},gn=()=>w?$e():Tt;function Yt(e){w?Fe(e):Tt=e,z==="ranch"?Gn():z==="gameroom"?jo():Is()}function Nn(e="park"){if(w){const n=[],s=[...w.presence.entries()],o=$e();o&&s.push([w.pid,o]);for(const[i,a]of s){const r=w.players.get(i);r&&a.where===e&&n.push({key:i,look:r.look,name:r.nickname,p:a,mine:i===w.pid,dog:r.dog??null})}return n}const t=RM();return Tt&&Tt.where===e?[{key:"solo",look:mi(t??{}),name:"",p:Tt,mine:!0,dog:X.get().dog??null}]:[]}function Nc(){const e=is(),t=M("parkWorld"),n=s=>s*e+"px";t.style.width=cc*e+"px",t.style.height=fc*e+"px",t.style.setProperty("--sc",String(e)),t.innerHTML=Gm()+fl.map((s,o)=>s.kind==="swing"?`<div class="swing" data-swing="${o}" style="left:${n(s.x-30)};top:${n(Nt)};width:${n(60)};height:${n(240)}">${Ym}</div>`:"").join("")+fl.map((s,o)=>`<button class="pspot k-${s.kind}" data-spot="${o}" aria-label="${s.kind}" style="left:${n(s.x-50)};top:${n(s.y-(s.kind==="swing"?70:55))};width:${n(100)};height:${n(s.kind==="swing"?90:65)}"></button>`).join("")+`<button class="pspot slide" data-act="slide" aria-label="Slide" style="left:${n(he.ladder-45)};top:${n(he.top.y-30)};width:${n(130)};height:${n(560-he.top.y+30)}"></button><button class="pspot pond" data-act="splash" aria-label="Pond" style="left:${n(1235)};top:${n(462)};width:${n(370)};height:${n(105)}"></button><button class="pspot gate" data-act="exit" aria-label="Back to the street" style="left:${n(25)};top:${n(240)};width:${n(180)};height:${n(260)}"></button><div class="ripples" id="ripples"></div><button class="ball" id="ball" aria-label="Ball">${Km}</button><div class="savatars" id="pavatars"></div>`,Ha(),Is(),tt()}const Sp=2400;function Is(){const e=document.getElementById("pavatars");if(!e||z!=="park")return;const t=is(),n=new Set,s=new Set;for(const o of Nn()){n.add(o.key);let i=e.querySelector(`.savatar[data-pid="${o.key}"]`);i||(i=document.createElement("div"),i.className="savatar "+(o.mine?"mine":"other"),i.dataset.pid=o.key,e.appendChild(i),o.mine&&Jg(i));const a=JSON.stringify(o.look)+o.name;if(i.dataset.look!==a){const f=i.querySelector(".bubble");i.innerHTML=o.name?Uc(o.look,o.name):`<div class="inner">${yt(o.look)}</div>`,f&&i.appendChild(f),i.dataset.look=a}const r=(Ps[o.look.size]??1)*t*.95,l=ns*r,c=pn*r;i.style.left=o.p.x*t-l/2+"px",i.style.top=o.p.y*t-c+"px",i.style.width=l+"px",i.style.height=c+"px",i.style.zIndex=String(100+Math.round(o.p.y)),i.classList.toggle("flipped",o.p.flip),bi(i,o.look,o.mine);const d=o.p.pose??"";i.dataset.pose!==d&&(i.classList.remove("pose-sit","pose-swing","pose-slide"),i.offsetWidth,d==="slide"&&(i.style.setProperty("--sx",(he.top.x-he.bottom.x)*t+"px"),i.style.setProperty("--sy",(he.top.y-he.bottom.y)*t+"px")),d&&i.classList.add("pose-"+d),i.dataset.pose=d),d==="swing"?(i.style.transformOrigin=`50% ${(Nt-o.p.y)*t+c}px`,i.style.animationDelay=-(Date.now()%Sp)/1e3+"s",s.add(o.p.spot??-1)):(i.style.transformOrigin="",i.style.animationDelay="")}e.querySelectorAll(".savatar").forEach(o=>{n.has(o.dataset.pid)||o.remove()}),document.querySelectorAll("#parkWorld .swing").forEach(o=>{const i=s.has(+o.dataset.swing);i&&!o.classList.contains("swinging")&&(o.style.animationDelay=-(Date.now()%Sp)/1e3+"s"),o.classList.toggle("swinging",i)}),Us()}function Jg(e){e.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation();const n=gn();if(!n||n.where!=="park"&&n.where!=="ranch"&&n.where!=="barn")return;const s=n.where!=="park",o=n.where;kt=[];const i=M(s?"ranchScroll":"parkScroll"),a=s?Jt():is(),r=o==="barn"?Kl:s?hi:cc,l=k=>{const x=M(s?"ranchWorld":"parkWorld").getBoundingClientRect();return{x:(k.clientX-x.left)/a,y:(k.clientY-x.top)/a}},c=l(t),d={x:n.x-c.x,y:n.y-c.y};let f=t,g=0,h=n.x,m=!1;const b=k=>{const x=l(k),R=gn();if(!R)return;const H=Math.max(60,Math.min(r-60,x.x+d.x)),I=Math.max(470,Math.min(590,x.y+d.y));if(!m&&Math.hypot(H-R.x,I-R.y)<6)return;m=!0;const K=Math.abs(H-h)>3?H<h:R.flip;Math.abs(H-h)>3&&(h=H),Yt(o==="barn"?{where:"barn",x:H,y:I,flip:K}:s?{where:"ranch",x:H,y:I,flip:K,...R.ride!==void 0?{ride:R.ride}:{}}:{where:"park",x:H,y:I,flip:K})},_=()=>{const k=i.getBoundingClientRect(),x=f.clientX<k.left+70?-10:f.clientX>k.right-70?10:0;x&&m&&(i.scrollLeft+=x,b(f)),g=requestAnimationFrame(_)};g=requestAnimationFrame(_),e.classList.add("lifted"),S.pick();const y=k=>{k.pointerId===t.pointerId&&(f=k,b(k))},u=k=>{k.pointerId===t.pointerId&&(cancelAnimationFrame(g),window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",u),e.classList.remove("lifted"),S.drop())};window.addEventListener("pointermove",y),window.addEventListener("pointerup",u)})}M("parkWorld").addEventListener("pointerdown",e=>{e.target.closest(".pspot, .ball, .pet")&&e.stopPropagation()});M("parkWorld").addEventListener("click",e=>{const t=e.target,n=gn();if(!n)return;if(t.closest("#ball")){IM();return}const s=t.closest("[data-spot]");if(s){const i=+s.dataset.spot,a=fl[i];if(n.spot===i&&n.pose){Yt({where:"park",x:a.x,y:Math.min(590,a.y+40),flip:n.flip});return}if(Nn().some(r=>!r.mine&&r.p.spot===i&&r.p.pose)){Z("Someone is already there!");return}Yt({where:"park",x:a.x,y:a.y,flip:n.flip,pose:a.kind==="swing"?"swing":"sit",spot:i}),a.kind==="swing"?S.boing():S.drop();return}const o=t.closest("[data-act]")?.dataset.act;if(o==="slide"&&(Yt({where:"park",x:he.bottom.x,y:he.bottom.y,flip:!1,pose:"slide"}),S.swish(),setTimeout(()=>{const i=gn();i?.pose==="slide"&&Yt({where:"park",x:i.x,y:i.y,flip:i.flip})},1500)),o==="splash"){const i=M("parkWorld").getBoundingClientRect(),a=(e.clientX-i.left)/is();eh(a),w?.fx({k:"splash",x:a})}o==="exit"&&th()});function eh(e){const t=document.getElementById("ripples");if(!t||z!=="park")return;const n=is();for(let s=0;s<2;s++){const o=document.createElement("div");o.className="ripple";const i=(120+s*70)*n;Object.assign(o.style,{left:e*n-i/2+"px",top:512*n-i*.18+"px",width:i+"px",height:i*.36+"px",animationDelay:s*.15+"s"}),t.appendChild(o),setTimeout(()=>o.remove(),1400)}for(let s=0;s<6;s++){const o=document.createElement("div");o.className="drop",Object.assign(o.style,{left:e*n+"px",top:505*n+"px"}),o.style.setProperty("--dx",(s-2.5)*14+"px"),t.appendChild(o),setTimeout(()=>o.remove(),900)}S.splash()}function AM(){Vs(),kt=[],Ie=!1,z="park",M("park").classList.remove("hidden"),$i(M("park"));const e={where:"park",x:290,y:548,flip:!1};w?Fe(e):Tt=e,M("streetTitle").textContent="The Park",fn(),Nc(),requestAnimationFrame(()=>{const t=M("parkScroll");t.scrollLeft=0,tt()}),S.sparkle()}function th(){so()}function DM(){Vs(),kt=[],Ie=!1,z="gameroom",M("gameroom").classList.remove("hidden");const e=mo(),t=e?{where:"gameroom",x:e.x,y:Math.max(xs,Math.min(En,e.y)),flip:!1}:{where:"gameroom",x:qa()?520:280,y:560,flip:!1};w?Fe(t):Tt=t,M("streetTitle").textContent="The Clubhouse",fn(),Lc(),requestAnimationFrame(()=>{const n=ts(),s=M("grScroll"),o=e?.x??(qa()?520:280);s.scrollLeft=Math.max(0,o*n-s.clientWidth/2),tt(),Mh()}),$i(M("gameroom")),S.sparkle()}M("btnLeavePark").addEventListener("click",()=>{z==="ranch"&&Ie?fi(!1):th()});let On={x:2620,y:565},We=null;function Ha(e=!1){const t=document.getElementById("ball");if(!t)return;const n=is(),s=34*n;e||t.classList.remove("flying"),t.style.left=On.x*n-s/2+"px",t.style.top=On.y*n-s+"px",t.style.width=t.style.height=s+"px"}function IM(){if(We)return;const e=rt.x0+40+Math.random()*(rt.x1-rt.x0-80),t=rt.y0+25+Math.random()*(rt.y1-rt.y0-35);nh(w?w.pid:"solo",e,t),w?.fx({k:"ball",x:e,y:t})}function nh(e,t,n){if(z!=="park")return;const s=document.getElementById("ball");On={x:t,y:n},We={thrower:e,phase:"fly",dog:null,until:performance.now()+12e3},s&&(s.classList.remove("flying"),s.offsetWidth,s.classList.add("flying"),Ha(!0)),S.boing(),setTimeout(()=>{We?.phase==="fly"&&(We.phase="chase",document.getElementById("ball")?.classList.remove("flying"),Wn.size||(We=null))},650)}function HM(e){if(!w)return Tt;const t=e===w.pid?$e():w.presence.get(e);return t&&t.where==="park"?t:null}const Wn=new Map,Xr=e=>(t,n,s,o,i)=>{t.style.left=(n-o/2)*e+"px",t.style.top=(s-i)*e+"px",t.style.width=o*e+"px",t.style.height=i*e+"px"};function OM(){const e=[];if(z==="house"){const t=C.get(),n={box:re,place:Ws,z:s=>String(4e3+Math.round(s)),scale:1};if(w&&De!==X){const s=[...w.presence.entries()],o=$e();o&&s.push([w.pid,o]);for(const[i,a]of s){const r=w.players.get(i)?.dog;if(r&&a.where==="house"&&a.houseId===Pe&&a.room===t.currentRoom){const l=_t(t.currentRoom,Xn(i,a),a);e.push({key:i,dog:r,x:l.x,y:l.y,flip:a.flip,...n})}}}else if(t.dog){const s=t.characters.find(o=>o.id===t.dog.owner)??t.characters[0];if(s&&s.room===t.currentRoom){const o=_t(s.room,Bt(s),s);e.push({key:"solo",dog:t.dog,x:o.x,y:o.y,flip:s.flip,...n})}}}else if(z==="park"){const t=document.getElementById("pavatars");if(!t)return e;const n=is();for(const s of Nn())s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Xr(n),z:o=>String(Math.round(o)-200),scale:.95})}else if(z==="ranch"){const t=document.getElementById("ravatars");if(!t)return e;const n=Jt();for(const s of Nn(Ie?"barn":"ranch"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Xr(n),z:o=>String(100+Math.round(o)),scale:.95,riding:s.p.ride!==void 0})}else if(z==="gameroom"){const t=document.getElementById("gavatars");if(!t)return e;const n=ts();for(const s of Nn("gameroom"))s.dog&&e.push({key:s.key,dog:s.dog,x:s.p.x,y:s.p.y,flip:s.p.flip,box:t,place:Xr(n),z:o=>String(Math.round(o)-200),scale:.95})}return e}let Pp=performance.now();function WM(e,t){const n=new Set;for(const s of OM()){if(QM(s.key))continue;n.add(s.key);let o=Wn.get(s.key);const i=s.flip?1:-1,a=!s.riding&&z==="house"&&C.get().currentRoom==="backyard",r=s.riding?200:78;let l=a?Od.x:s.x+i*r;s.riding?l=Math.max(50,Math.min(hi-50,l)):z==="house"&&!a&&(l=lh(l,46));const c=a?Od.y:Math.min(595,s.y+(s.riding?28:6));if(!o||o.box!==s.box||!o.el.isConnected){o?.el.remove();const x=document.createElement("div");x.className="pet pet-dog",x.dataset.dog=s.key,s.box.appendChild(x),UM(x,s.key),o={el:x,box:s.box,x:l,y:c,flip:s.flip,pose:"",look:"",idle:1,trickUntil:0,sitTrick:!1},Wn.set(s.key,o)}let d=l,f=c,g=s.riding?980:320;if(We&&e>We.until&&(We=null,Ha()),We&&z==="park"){if(We.phase==="chase")d=On.x,f=On.y,g=950,Math.hypot(o.x-d,o.y-f)<28&&(We.phase="carry",We.dog=s.key,S.woof());else if(We.phase==="carry"&&We.dog===s.key){const x=HM(We.thrower)??{x:(rt.x0+rt.x1)/2,y:540};d=x.x+60,f=Math.min(590,x.y+6),g=750,On={x:o.x+(o.flip?-40:40),y:o.y-30*s.scale},Math.hypot(o.x-d,o.y-f)<26&&(On={x:x.x+70,y:Math.min(590,x.y+12)},We=null,ra(o,"♥"),S.sparkle()),Ha()}}const h=e<o.trickUntil,m=d-o.x,b=f-o.y,_=Math.hypot(m,b);let y=!1;if(_>(We?4:10)&&!h){const x=gr()?_:Math.min(_,g*t);o.x+=m/_*x,o.y+=b/_*x,y=!0,Math.abs(m)>1.5&&(o.flip=m<0),o.idle=0}else o.idle+=t,!h&&o.idle>.3&&Math.abs(s.x-o.x)>4&&(o.flip=s.x<o.x);const u=h&&o.sitTrick?"sit":y?"stand":o.idle>.9?"sit":"stand",k=u+s.dog.breed;if(o.pose+o.look!==u+k){for(const x of[...o.el.children])x.matches(".bubble, .kennelBtn")||x.remove();o.el.insertAdjacentHTML("afterbegin",`<div class="inner">${oi(s.dog.breed,u)}</div>`),o.pose=u,o.look=k}o.el.dataset.name=s.dog.name,o.el.classList.toggle("walking",y),o.el.classList.toggle("flipped",o.flip),s.place(o.el,o.x,o.y,92*s.scale,71*s.scale),o.el.style.zIndex=s.z(o.y+1),ah(o.el,s.key,!1)}for(const[s,o]of Wn)n.has(s)||(o.el.remove(),Wn.delete(s))}function ra(e,t){e.el.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.el.appendChild(n),wo(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const Tp=new Map;function sh(e,t){const n=Wn.get(e);if(!n)return;const s=n.el.dataset.name??"";n.trickUntil=performance.now()+1400,n.sitTrick=t===0,n.el.classList.remove("spin","hop"),n.el.offsetWidth,t===0&&(ra(n,`${s} sits! 🐾`),S.pop()),t===1&&(n.el.classList.add("spin"),ra(n,"Wheee! ✨"),S.spin()),t===2&&(n.el.classList.add("hop"),ra(n,"Woof! Woof!"),S.woof())}function UM(e,t){e.addEventListener("pointerdown",n=>{n.stopPropagation(),n.preventDefault()}),e.addEventListener("click",n=>{n.stopPropagation();const s=(Tp.get(t)??0)%3;Tp.set(t,s+1),sh(t,s),w&&w.fx({k:"trick",owner:t,v:s})})}function $r(e){const t=e?.dogKennel?.item;if(!t||!e)return null;for(const n of Object.values(e.rooms)){const s=n.items.find(o=>o.id===t&&o.kind==="kennel");if(s)return s}return null}function VM(e){if(e==="solo")return X.get();if(!w)return null;const t=w.players.get(e)?.houseId;return t?w.view(t):null}function QM(e){return!!$r(VM(e))}function Fc(){if(w){const e=w.myHouseId();return e?w.view(e):null}return X.get()}function oh(){if(z!=="house")return null;const e=C.get(),t=$r(e);if(!t||!e.rooms[e.currentRoom]?.items.some(n=>n.id===t.id))return null;if(w&&De!==X){const n=w.houses.get(Pe)?.meta.ownerId,s=n?w.players.get(n)?.dog??null:null;return!n||!s?null:{key:n,dog:s,item:t}}return e.dog?{key:"solo",dog:e.dog,item:t}:null}function qM(){const e=Fc();if(!e)return null;const t=Wa()?C.get().currentRoom:null;let n=null,s=null;for(const[o,i]of Object.entries(e.rooms))for(const a of i.items)a.kind==="kennel"&&((!n||a.z>=n.z)&&(n=a),o===t&&(!s||a.z>=s.z)&&(s=a));return s??n}function Zi(e){if(!Yc()){Z("Adopt a dog first!");return}Uo({type:"dog/kennel",item:e}),e?(S.pop(),Z("Rest well, puppy!")):(S.woof(),Z("Come on, puppy!"))}function jc(e){if(!Yc()){Z("Adopt a dog first!");return}const t=$r(Fc());if(e===void 0){if(t){Zi(null);return}const n=qM();if(!n){Z("Put a dog kennel down first!");return}Zi(n.id);return}t?.id===e?Zi(null):Zi(e)}function ih(e){const t=C.get(),n=t.rooms[t.currentRoom]?.items.find(s=>s.id===e);if(n){if(n.kind==="kennel"){Wa()&&jc(n.id);return}n.kind==="cat-tower"&&JM()}}function ZM(e,t){const n=C.get(),s=n.rooms[n.currentRoom]?.items.find(i=>i.id===t);if(!s)return;const o=_m(s.kind);if(e.classList.remove("wiggle"),e.offsetWidth,e.classList.add("wiggle"),S.click(),o==="kennel"||o==="tower"){ih(t);return}if(o==="lamp"){e.classList.toggle("lamp-on");return}if(o==="open"){e.classList.toggle("opened");return}o==="sit"&&FM(s),o==="swing"&&NM(s)}let St=null,Oo=!1;function Oa(){re.querySelectorAll(".item.swinging").forEach(e=>{(!St||e.dataset.id!==St.item)&&e.classList.remove("swinging")}),St&&re.querySelector(`.item[data-id="${St.item}"]`)?.classList.add("swinging")}function NM(e){const t=C.get(),n=t.characters.find(i=>i.id===Ae&&i.room===t.currentRoom)??t.characters.find(i=>i.room===t.currentRoom);if(!n)return;if(St?.id===n.id&&St.item===e.id){St=null,Oo=!0,C.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x+70,y:Math.max(e.y,520)}),Oo=!1,Oa();return}const s=Ce[e.kind],o=e.y-(s?lt(s)*nt(e)*.26:40);St={id:n.id,item:e.id},Oo=!0,C.dispatch({type:"char/move",id:n.id,room:t.currentRoom,x:e.x,y:o}),Oo=!1,Oa()}function FM(e){const t=yr(e);if(!t)return;if(w&&z==="house"){const i=$e();if(!i||i.where!=="house")return;if(!w.speaksSit){const r="p:"+w.pid,l=ln.get(r)?.item===e.id,c=Math.max(co+40,t.footY-8);l?ln.delete(r):ln.set(r,{item:e.id,pose:t&&go(e.kind).pose,n:0});const{seat:d,...f}=i;Fe({...f,x:e.x,y:c,flip:!1}),$t();return}const a=Jo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:ci(void 0,w.pid),alreadyOn:i.seat?.id===e.id?e.id:null});if(a.toast){Z(a.toast),S.pop();return}if(!a.moved)return;ia(i,a.x,a.y,!1,a.seat?{id:a.seat.item,pose:a.seat.pose,n:a.seat.n}:null),$t(),Bs(!1);return}const n=C.get(),s=n.characters.find(i=>i.id===Ae&&i.room===n.currentRoom)??n.characters.find(i=>i.room===n.currentRoom);if(!s)return;const o=Jo({mode:"play",via:"tap",releaseX:e.x,releaseY:t.footY,piece:t,occupied:ci(s.id),alreadyOn:s.seat?.item===e.id?e.id:null});if(o.toast){Z(o.toast),S.pop();return}o.moved&&(Ho(s.id,n.currentRoom,o.x,o.y,o.seat),Bs(!1))}function ah(e,t,n){const s=w?t===w.pid:t==="solo";let o=e.querySelector(".kennelBtn");if(!s){o?.remove();return}o||(o=document.createElement("button"),o.type="button",o.className="kennelBtn",o.addEventListener("pointerdown",i=>{i.stopPropagation(),i.preventDefault()}),o.addEventListener("click",i=>{i.stopPropagation(),i.preventDefault(),jc()}),e.appendChild(o)),o.textContent=n?"Out":"Kennel",jM(o)}function jM(e){if(z!=="house"){e.style.left=e.style.right=e.style.top=e.style.bottom=e.style.transform="";return}const t=e.parentElement;if(!t)return;const n=F.getBoundingClientRect().width/F.offsetWidth||1,s=F.getBoundingClientRect(),o=4,i={l:s.left+o,t:s.top+o,r:s.right-o,b:s.bottom-o},a=re.querySelector(".char")?.getBoundingClientRect(),r=re.querySelector('.item[data-kind="sofa"]')?.getBoundingClientRect(),l=[...re.querySelectorAll(".pet-cat, .item")].map(A=>A.getBoundingClientRect()).filter(A=>A.width>2&&A.height>2),c=(A,O)=>!!O&&A.left<O.right-1&&A.right>O.left+1&&A.top<O.bottom-1&&A.bottom>O.top+1,d=(A,O)=>c(A,O)?Math.max(0,Math.min(A.right,O.right)-Math.max(A.left,O.left))*Math.max(0,Math.min(A.bottom,O.bottom)-Math.max(A.top,O.top)):0,f=A=>{let O=0;A.left<i.l&&(O+=(i.l-A.left)*8),A.right>i.r&&(O+=(A.right-i.r)*8),A.top<i.t&&(O+=(i.t-A.top)*8),A.bottom>i.b&&(O+=(A.bottom-i.b)*8),O+=d(A,a)*4,O+=d(A,r)*4;for(const je of l)O+=d(A,je)*4;return O},g=t.getBoundingClientRect(),h=!a||g.left+g.width/2<=a.left+a.width/2,m=A=>({left:A?"0px":"auto",right:A?"auto":"0px",top:"46%",bottom:"auto",transform:A?"translate(-108%, -50%)":"translate(108%, -50%)"}),b=[m(h),m(!h),{left:"50%",right:"auto",top:"0px",bottom:"auto",transform:"translate(-50%, -115%)"}];let _=b[0],y=1/0;for(const A of b){Object.assign(e.style,A);const O=f(e.getBoundingClientRect());O<y&&(y=O,_=A)}Object.assign(e.style,_);let u=e.getBoundingClientRect(),k=0,x=0;u.left<i.l&&(k+=i.l-u.left),u.right>i.r&&(k-=u.right-i.r),u.top<i.t&&(x+=i.t-u.top),u.bottom>i.b&&(x-=u.bottom-i.b);const R=A=>{if(!A)return;const O=()=>new DOMRect(u.left+k,u.top+x,u.width,u.height);if(!c(O(),A))return;const je=Math.min(O().bottom,A.bottom)-Math.max(O().top,A.top),ot=A.bottom+4-O().top,Oe=A.top-4-O().bottom,Te=tn=>O().top+tn>=i.t&&O().bottom+tn<=i.b;if(je<u.height*.5&&Te(ot)){x+=ot;return}if(je<u.height*.5&&Te(Oe)){x+=Oe;return}const Le=A.left-i.l,ct=i.r-A.right,dt=A===r?a:r,as=(tn,zr)=>{if(!dt)return!1;const rs=zr?tn-u.width:tn,bo=new DOMRect(rs,O().top,u.width,u.height);return c(bo,dt)};ct>=u.width+4&&!as(A.right+4,!1)?k+=A.right+4-O().left:Le>=u.width+4&&!as(A.left-4,!0)?k+=A.left-4-O().right:Te(ot)?x+=ot:Te(Oe)&&(x+=Oe)};R(a),R(r);const H=t.querySelector(".inner")?.getBoundingClientRect(),I=H&&H.width>2?H:g,K=re.querySelector(".pet-cat")?.getBoundingClientRect(),le=re.querySelector('.item[data-kind="sandbox"]')?.getBoundingClientRect(),ce=re.querySelector('.item[data-kind="yard-bench"]')?.getBoundingClientRect(),G=[...re.querySelectorAll('.item[data-kind="yard-swing"], .item[data-kind="picnic-blanket"], .item[data-kind="lemonade-cart"], .item[data-kind="tulip-bed"]')].map(A=>A.getBoundingClientRect()),pe=F.querySelector(".yardDoor"),en=pe?[pe,pe.querySelector(".yardHintLabel"),pe.querySelector(".doorArt")].map(A=>A?.getBoundingClientRect()):[],Dt=document.getElementById("secrets"),Qe=Dt&&Dt.offsetParent?Dt.getBoundingClientRect():void 0,P=Qe&&Qe.width>2&&Qe.left<i.r&&Qe.right>i.l&&Qe.top<i.b&&Qe.bottom>i.t?Qe:void 0,B=P?new DOMRect(P.left-8,P.top-8,P.width+16,P.height+16):void 0,N=[a,r,K,le,ce,B,...G,...en].filter(A=>!!A&&A.width>2&&A.height>2),U=new DOMRect(u.left+k,u.top+x,u.width,u.height),V=I.left+I.width/2,j=I.top+I.height/2,fe=A=>Math.hypot(A.left+A.width/2-V,A.top+A.height/2-j),Me=A=>{const O=Math.min(A.right,I.right)-Math.max(A.left,I.left),je=Math.min(A.bottom,I.bottom)-Math.max(A.top,I.top);return O>1&&je>1},me=A=>A.left>=i.l-.5&&A.right<=i.r+.5&&A.top>=i.t-.5&&A.bottom<=i.b+.5&&N.every(O=>!c(A,O))&&!Me(A);let He=U;if(!me(U)||fe(U)>150){const A=[],O=(Oe,Te)=>{let Le=Oe,ct=Te;Le<i.l&&(Le=i.l),ct<i.t&&(ct=i.t),Le+u.width>i.r&&(Le=Math.max(i.l,i.r-u.width)),ct+u.height>i.b&&(ct=Math.max(i.t,i.b-u.height)),A.push(new DOMRect(Le,ct,u.width,u.height))};O(I.left+(I.width-u.width)/2,I.top-u.height-8),O(I.right-u.width,I.top-u.height-6),O(I.left,I.top-u.height-6),a&&O(a.right+6,I.top-u.height-8),ce&&O(ce.left-u.width-6,ce.top-u.height-6),a&&ce&&O(a.right+6,ce.top-u.height-6),a&&(O(a.left-12,a.top-u.height-8),O(i.l,a.top-u.height-10),O(a.left+(a.width-u.width)/2,a.top-u.height-8)),O(i.r-u.width,I.top-u.height-6),O(I.right+8,I.top+(I.height-u.height)/2),O(I.left-u.width-8,I.top+(I.height-u.height)/2),O(U.left,U.top);for(const Oe of[u.width*.65,u.width*1.05,88,120,155])for(let Te=0;Te<8;Te++){const Le=Te*Math.PI/4;O(V+Math.cos(Le)*Oe-u.width/2,j+Math.sin(Le)*Oe-u.height/2)}const je=Oe=>{let Te=1/0,Le=null;for(const ct of A){if(!me(ct)||fe(ct)>Oe)continue;const dt=fe(ct);dt<Te&&(Te=dt,Le=ct)}return Le},ot=je(170)??je(360);if(ot)He=ot;else if(!me(U)){let Oe=null,Te=1/0;for(const Le of A){if(Le.left<i.l-.5||Le.right>i.r+.5||Le.top<i.t-.5||Le.bottom>i.b+.5)continue;const dt=(Me(Le)?1e4:0)+N.reduce((as,tn)=>as+d(Le,tn),0)+fe(Le);dt<Te&&(Te=dt,Oe=Le)}Oe&&(He=Oe)}}k+=He.left-U.left,x+=He.top-U.top,(k||x)&&(e.style.transform=`${e.style.transform} translate(${(k/n).toFixed(1)}px, ${(x/n).toFixed(1)}px)`)}function GM(e,t){e.querySelector(".bubble")?.remove();const n=document.createElement("div");n.className="bubble petBubble",n.textContent=t,e.appendChild(n),wo(),setTimeout(()=>n.classList.add("out"),1300),setTimeout(()=>n.remove(),1700)}const Wo=new Map;function YM(){const e=new Set,t=oh();if(t){e.add(t.key);const n=gm(t.dog.name,Date.now()),s=Ce[t.item.kind],i=(s?Os(s,t.item.y):Math.min(t.item.y,Ue-ag))-(n==="peek"?24:2);let a=Wo.get(t.key);if(!a||!a.el.isConnected){a?.el.remove();const l=document.createElement("div");l.className="pet pet-dog kenneled",l.dataset.dog="kennel:"+t.key,re.appendChild(l),l.addEventListener("pointerdown",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),c.preventDefault())}),l.addEventListener("click",c=>{c.target.closest(".kennelBtn")||(c.stopPropagation(),GM(l,`${l.dataset.name??"Puppy"} is resting`))}),a={el:l,pose:"",look:"",x:t.item.x,y:i},Wo.set(t.key,a)}const r=n==="rest"?"sleep":"sit";if(a.pose!==r||a.look!==n+t.dog.breed){for(const l of[...a.el.children])l.matches(".bubble, .kennelBtn")||l.remove();a.el.insertAdjacentHTML("afterbegin",`<div class="inner">${oi(t.dog.breed,r)}</div>${n==="rest"?'<div class="zzz"><b>Zzz</b><i>z</i><i>z</i><i>z</i></div>':""}`),a.pose=r,a.look=n+t.dog.breed}a.el.dataset.name=t.dog.name,a.el.classList.toggle("rest",n==="rest"),a.el.classList.toggle("peek",n==="peek"),a.x=t.item.x,a.y=i,Ws(a.el,t.item.x,i,100,77),a.el.style.zIndex=String(1e3+t.item.z+1),ah(a.el,t.key,!0)}for(const[n,s]of Wo)e.has(n)||(s.el.remove(),Wo.delete(n))}let se=null,Ni="",Jr=0,Gc=0,la={x:0,perch:0,leap:!1};const KM=562;function rh(e){return(e.rooms[e.currentRoom]?.items.filter(n=>n.kind==="cat-tower")??[]).reduce((n,s)=>!n||s.z>=n.z?s:n,null)}function Bp(e){return e==="cat-bed"||e==="pet-bed"||e==="dog-bed"||e==="pack:cat-bed"||/(?:^|:)cat-bed$|(?:^|:)pet-bed$/.test(e)}function XM(e){const t=e.rooms[e.currentRoom]?.items??[],n=t.filter(a=>Bp(a.kind)),s=t.filter(a=>a.kind==="bed"),o=(n.length?n:s).reduce((a,r)=>!a||r.z>=a.z?r:a,null);if(!o)return null;const i=Ce[o.kind];return{x:o.x,y:o.y,h:i?lt(i)*nt(o):80,pet:Bp(o.kind)}}function JM(){const e=C.get();!e.cat||e.cat.room!==e.currentRoom||!rh(e)||(Gc=performance.now()+900,S.boing(),w?.fx({k:"leap"}))}function e9(){const e=C.get(),t=z==="house"?e.cat:null;if(!t||t.room!==e.currentRoom){se&&(se.remove(),se=null,Ni="",Jr=0);return}(!se||!se.isConnected)&&(se=document.createElement("div"),se.className="pet pet-cat",re.appendChild(se),Ni="",se.addEventListener("pointerdown",H=>{H.stopPropagation(),H.preventDefault()}),se.addEventListener("click",H=>{H.stopPropagation(),ch(),w&&w.fx({k:"purr"})}));const n=rh(e),s=n?null:XM(e),o=n?Ce[n.kind]:void 0,i=n&&o?lt(o)*nt(n):0,a=hm(t,Date.now(),n?{x:n.x}:null,s?{x:s.x}:null,gr()),r=!!n&&performance.now()<Gc,l=r?2:a.perch,c=r&&n?n.x:a.x,d=r?"play":a.mood,f=d==="walk"?"stand":d==="nap"?"nap":"sit",g=f+t.coat+(l?"p":"");if(g!==Ni){const H=[...se.querySelectorAll(".bubble, .heart")];se.innerHTML=`<div class="inner">${ao(t.coat,f)}</div>${f==="nap"?'<div class="zzz"><i>z</i><i>z</i><i>z</i></div>':""}`;for(const I of H)se.appendChild(I);Ni=g}if(l>0&&Jr===0){se.classList.add("hop");const H=se;setTimeout(()=>H.classList.remove("hop"),420)}Jr=l,se.dataset.name=t.name,se.dataset.mood=d,se.dataset.perch=String(l),se.dataset.leap=r?"1":"0",se.dataset.curl=a.curl?"1":"0",se.classList.toggle("walking",d==="walk"),se.classList.toggle("groom",d==="groom"),se.classList.toggle("play",d==="play"&&!r),se.classList.toggle("leap",r),se.classList.toggle("flipped",a.flip),se.classList.toggle("curl",a.curl===1),re.querySelectorAll(".item.toy-live").forEach(H=>H.classList.remove("toy-live")),n&&d==="play"&&l&&!r&&re.querySelector(`.item[data-id="${n.id}"]`)?.classList.add("toy-live");const h=window.__pinCat,m=!!(h&&Number.isFinite(h.x)),b=m&&Number.isFinite(h.y)?h.y:KM,_=!m&&l&&n?fm(n.y,i,l):!m&&a.curl&&s?s.y-s.h*(s.pet?.38:.2):b,y=e.currentRoom==="backyard"&&!l,u=!m&&l?92:y?115:128,k=!m&&l?110:y?135:150,x=m?h.x:e.currentRoom==="backyard"?Qn.x:lh(c,k/2),R=!m&&e.currentRoom==="backyard"&&!l?Qn.y:_;Ws(se,x,R,k,u),se.style.zIndex=String(4e3+Math.round(R)),la={x,perch:l,leap:r}}function lh(e,t){const n=C.get().currentRoom,s=n==="backyard"?Lf:n==="living"?Mf:null;if(!s)return e;const o=s.x-s.w/2-t-16,i=s.x+s.w/2+t+16;return e<=o||e>=i?e:e<s.x?o:i}function ch(){if(!se)return;S.purr(),setTimeout(()=>S.meow(),250),se.querySelector(".bubble")?.remove();const e=document.createElement("div");e.className="bubble petBubble",e.textContent=`${se.dataset.name} purrs ♥`,se.appendChild(e),wo(),setTimeout(()=>e.classList.add("out"),1500),setTimeout(()=>e.remove(),1900),se.classList.remove("happy"),se.offsetWidth,se.classList.add("happy");for(let t=0;t<5;t++){const n=document.createElement("div");n.className="heart",n.textContent="♥",n.style.left=20+Math.random()*60+"%",n.style.animationDelay=t*.12+"s",n.style.color=["#ff6b9a","#ff8fab","#e879c6"][t%3],se.appendChild(n),setTimeout(()=>n.remove(),1800)}}function t9(e,t){if(t.k==="zoo"||t.k==="apple"||t.k==="honk"||t.k==="hen"){m9(t);return}t.k==="trick"?sh(t.owner,t.v):t.k==="purr"?z==="house"&&ch():t.k==="leap"?z==="house"&&(Gc=performance.now()+900):t.k==="ball"?nh(e,t.x,t.y):t.k==="splash"&&eh(t.x)}function dh(e){const t=Math.min(.05,Math.max(0,(e-Pp)/1e3));Pp=e;try{WM(e,t),YM(),e9(),w9(e,t),$7(t),Af()}catch{}requestAnimationFrame(dh)}function n9(){return w?w.view(w.myHouseId())?.cat??null:X.get().cat??null}function Yc(){return w?w.players.get(w.pid)?.dog??null:X.get().dog??null}function Uo(e){if(w){const t=w.myHouseId();t&&w.dispatch(t,e)}else X.dispatch(e)}const Wa=()=>z==="house"&&(!w||De===X||Pe===w.myHouseId());function s9(e="cat"){const t=n9(),n=Yc(),s=X.get().characters,o={tab:e,coat:t?.coat??0,catName:t?.name??"",breed:n?.breed??0,dogName:n?.name??"",owner:n?.owner??s[0]?.id,err:"",bye:!1},i=Vt("",(l,c)=>{const d=h=>l.closest(`[${h}]`)?.getAttribute(h);if(d("data-pt")){o.tab=d("data-pt"),o.err="",o.bye=!1,r();return}if(d("data-coat")!=null){o.coat=+d("data-coat"),S.click(),r();return}if(d("data-breed")!=null){o.breed=+d("data-breed"),S.click(),r();return}if(d("data-cname")){o.catName=d("data-cname"),S.click(),r();return}if(d("data-dname")){o.dogName=d("data-dname"),S.click(),r();return}if(d("data-owner")){o.owner=d("data-owner"),S.click(),r();return}const f=d("data-pa");if(!f)return;const g=(i.root.querySelector("#petName")?.value??"").trim();if(f==="adoptCat"||f==="adoptDog"){const h=g||(f==="adoptCat"?o.catName:o.dogName),m=af(h);if(!m){o.err=h?"Hmm, try a different name!":"Pick a name first!",S.pop(),r();return}if(f==="adoptCat"){const b=Wa(),_={name:m,coat:o.coat,room:b?C.get().currentRoom:t?.room??"living",x:b?Math.max(200,Math.min(ke-200,ie+ae/2)):t?.x??1200};Uo({type:"cat/set",cat:_}),S.meow(),c(),Z(t?`${m} looks great! 🐱`:b?`${m} moved in! 🐱`:`${m} is waiting at your house! 🐱`)}else{const b=w?{name:m,breed:o.breed}:{name:m,breed:o.breed,owner:o.owner};w?(w.setDog(b),z==="park"&&Is()):X.dispatch({type:"dog/set",dog:b}),S.woof(),c(),Z(n?`${m} looks great! 🐶`:`${m} is your new best friend! 🐶`)}return}if(f==="callCat"){Uo({type:"cat/move",room:C.get().currentRoom,x:Math.max(200,Math.min(ke-200,ie+ae/2))}),S.meow(),c();return}if(f==="kennelDog"){jc(),c();return}if(f==="bye"){if(!o.bye){o.bye=!0,r();return}o.tab==="cat"?Uo({type:"cat/set",cat:null}):(Uo({type:"dog/kennel",item:null}),w?w.setDog(null):X.dispatch({type:"dog/set",dog:null})),c(),Z("They went to live with a kind friend 💛");return}},"wide pets"),a=i.root.querySelector(".card");function r(){const l=o.tab==="cat",c=l?t:n,d=l?nm:sm,f=l?o.catName:o.dogName,g=i.root.querySelector("#petName")?.value??"";a.innerHTML=`${Qt}<h2>Pets</h2>
      <div class="petTabs"><button data-pt="cat" class="${l?"on":""}">🐱 Cat</button><button data-pt="dog" class="${l?"":"on"}">🐶 Dog</button></div>
      <p class="hint small">${l?w?"Your cat lives in your house. Friends can see her when they visit!":"Your cat lives in your house. She naps, purrs, and plays!":w?"Your dog follows you everywhere: the street, friends' houses, and the park!":"Your dog follows you around the house and to the park!"}</p>
      <div class="petRow"><div class="petPreview">${l?ao(o.coat,"sit"):oi(o.breed,"stand")}</div>
        <div class="swatches">${(l?hl:ul).map((h,m)=>`<button ${l?"data-coat":"data-breed"}="${m}" class="${m===(l?o.coat:o.breed)?"on":""}"><div>${l?ao(m,"sit"):oi(m,"stand")}</div><span>${h.name}</span></button>`).join("")}</div></div>
      <div class="label">Name</div>
      <div class="nameChips">${d.map(h=>`<button ${l?"data-cname":"data-dname"}="${h}" class="${h===f?"on":""}">${h}</button>`).join("")}</div>
      <input id="petName" class="petName" maxlength="14" autocomplete="off" placeholder="…or type a name" value="${de(g)}"/>
      ${o.err?`<p class="err" id="petErr">${de(o.err)}</p>`:""}
      ${!l&&!w&&s.length>1?`<div class="label">Who does your dog follow?</div><div class="walkers">${s.map(h=>`<button data-owner="${h.id}" class="${h.id===o.owner?"on":""}">${yt(h)}</button>`).join("")}</div>`:""}
      <div class="petBtns"><button class="go" data-pa="${l?"adoptCat":"adoptDog"}" id="adoptBtn">${c?"Save":"Adopt! 💛"}</button>
        ${l&&t&&Wa()?'<button data-pa="callCat" id="callCat">Here, kitty!</button>':""}
        ${!l&&n?`<button data-pa="kennelDog" id="kennelDog">${$r(Fc())?"Come, puppy!":"Kennel"}</button>`:""}
        ${c?`<button class="danger" data-pa="bye">${o.bye?"Tap again to say goodbye":"Find a new home"}</button>`:""}</div>`}r()}M("btnPets").addEventListener("click",()=>s9(z==="house"?"cat":"dog"));requestAnimationFrame(dh);window.__pets=()=>{const e=oh(),t=e?Wo.get(e.key):void 0;return{dogs:[...Wn.keys()],dogPos:Object.fromEntries([...Wn].map(([n,s])=>[n,{x:Math.round(s.x),y:Math.round(s.y)}])),cat:se?{mood:se.dataset.mood,name:se.dataset.name,perch:la.perch,x:Math.round(la.x),leap:la.leap,curl:se.dataset.curl==="1"}:null,kennel:e&&t?{x:Math.round(t.x),y:Math.round(t.y),pose:t.pose,name:e.dog.name,item:e.item.id}:null,dogKennel:C.get().dogKennel??null,fetch:We?.phase??null,ball:On,view:z}};function Jt(){return M("ranch").clientHeight/vi}let kt=[];const pi=e=>String(100+Math.round(e)),ph=220,o9=ph*130/160,fh=156,i9=fh*130/160,a9=.6,r9=3.5,l9=3,ql=10,Fn=new Map,ca=new Map;function Ua(e,t,n=ql){const s=(e-gt.x)/(gt.rx+n),o=(t-gt.y)/(gt.ry+n);return s*s+o*o<1}function el(e,t,n,s){for(let o=0;o<=18;o++){const i=o/18;if(Ua(e+(n-e)*i,t+(s-t)*i))return!0}return!1}function Va(e,t){return{x:Math.max(70,Math.min(Xc()-70,e)),y:Math.max(xs,Math.min(En,t))}}function c9(e,t){const n=Va(t.x,t.y);if(Ua(n.x,n.y,6))return null;if(!el(e.x,e.y,n.x,n.y))return[n];const s=gt.x-gt.rx-ql-28,o=gt.x+gt.rx+ql+28;let i=null,a=1/0;for(const r of[xs+1,En-2]){const l=[];let c=e.x,d=e.y;const f=(_,y)=>{const u=Va(_,y);l.push(u),c=u.x,d=u.y};el(c,d,c,r)&&f(c<gt.x?s:o,d),Math.abs(d-r)>3&&f(c,r),Math.abs(c-n.x)>3&&f(n.x,r),l.push(n);let g=!0,h=e.x,m=e.y,b=0;for(const _ of l){if(el(h,m,_.x,_.y)||Ua(_.x,_.y,4)){g=!1;break}b+=Math.hypot(_.x-h,_.y-m),h=_.x,m=_.y}g&&b<a&&(i=l,a=b)}return i}function gh(e,t){const n=gn();if(!n)return;const s={x:Math.max(60,Math.min(Xc()-60,e)),y:Math.max(xs,Math.min(En,t))};if(n.ride!==void 0&&n.where==="ranch"){const o=c9(n,s);if(!o){Z("The horse won't splash through the pond!"),S.pop();return}kt=o}else kt=[s]}function d9(e){if(e.look2)return U5(e.look2);const t=e.pants,n="#5a3d5c",s=(o,i,a,r)=>`<path class="${o}" d="${i}" fill="none" stroke="${n}" stroke-width="${a}" stroke-linecap="round"/><path class="${o} cloth" d="${i}" fill="none" stroke="${t}" stroke-width="${r}" stroke-linecap="round"/>`;return`<svg class="rideleg" viewBox="0 0 160 130">${s("thigh","M66 56 L102 66",13,8)}${s("shin","M102 68 L106 104",12,7.2)}<circle class="knee" cx="102" cy="67" r="6.2" fill="${t}" stroke="${n}" stroke-width="3.5"/><ellipse class="shoe" cx="116" cy="106" rx="11" ry="5.2" fill="${n}"/></svg>`}function jn(){return document.body.classList.contains("phone")&&document.body.classList.contains("phone-portrait")&&!Ie}function xr(){if(!jn())return Hp.map((t,n)=>n);const e=[0,2,4];for(const t of Nn("ranch")){const n=t.p.ride;n!==void 0&&e.indexOf(n)<0&&e.push(n)}return e}function Jn(e){if(!jn())return Hp[e];const t=xr(),n=t.indexOf(e),s=t.length,o=n<0?0:n,i=Kc().w/2,a=2400+i+18,r=3080-i-18;return s<=1?Math.round((a+r)/2):Math.round(a+(r-a)*o/(s-1))}function Kc(){return jn()?{w:131,h:106}:{w:150,h:122}}function Qa(e,t,n){const s=Jt(),{w:o,h:i}=Kc();e.style.left=(t-o/2)*s+"px",e.style.top=(n-i)*s+"px",e.style.width=o*s+"px",e.style.height=i*s+"px",e.style.zIndex=pi(n)}function p9(){if(z!=="ranch"||Ie||!document.body.classList.contains("phone"))return;const e=new Set(xr());document.querySelectorAll("#ranchWorld .horse").forEach(t=>{const n=+t.dataset.horse;t.classList.toggle("stallOff",jn()&&!e.has(n)),!(!e.has(n)||Fn.has(n)||t.classList.contains("away"))&&Qa(t,Jn(n),Ms)})}function f9(e,t,n){if(Fn.has(e)||Math.hypot(t-Jn(e),n-Ms)<26)return;Fn.set(e,{x:t,y:n});const s=document.querySelector(`#ranchWorld .horse[data-horse="${e}"]`);s&&(s.classList.add("trotting"),s.classList.remove("away"),s.classList.toggle("flipped",Jn(e)<t),Qa(s,t,n))}function g9(e,t,n){const s=n?-1:1;for(const o of[s*118,-s*118,s*160,-s*78])for(const i of[0,30,-26,48]){const a=Va(e+o,t+i);if(!(Math.hypot(a.x-e,a.y-t)<50)&&!Ua(a.x,a.y,8))return a}return Va(e,t)}let Rp=0,hh=0;const Mr=()=>w?w.now():Date.now(),Lr=()=>ec(w?w.ranch.plots:X.get().garden),xi=()=>Jl(w?w.players.get(w.pid)?.basket:X.get().basket),Xc=()=>Ie?Kl:hi,uh=()=>Ie?"barn":"ranch",mh=()=>{const e=new Map;for(const t of Nn("ranch"))t.p.ride!==void 0&&e.set(t.p.ride,t);return e};function Zl(e){const t={taken:"A friend just planted there!",wet:"Already watered 💧",notReady:"Still growing! 🌱",full:"Your basket is full!",slow:"The hen is laying… try again!",none:"Your basket has none left",nohouse:"Go home to put it in your room"};t[e]&&(Z(t[e]),S.pop())}function oo(e){if(w){const o=ol(Lr(),xi(),e,Mr(),e.op==="egg"?Rp:0);return typeof o=="string"?(Zl(o),!1):(e.op==="egg"&&(Rp=Date.now()),w.ranchOp(e),!0)}const t=X.get(),n=Date.now(),s=ol(ec(t.garden),Jl(t.basket),e,n,t.lastEgg??0);return typeof s=="string"?(Zl(s),!1):(X.dispatch({type:"ranch/op",op:e,now:n}),Er(!0),td(),!0)}function fi(e=!1){const t=z==="ranch"&&Ie&&!e;Vs(),M("ranch").classList.remove("hidden"),We=null,kt=[],z="ranch",Ie=e;const n=e?{where:"barn",x:170,y:560,flip:!1}:{where:"ranch",x:t?tl:130,y:t?520:565,flip:!1};w?Fe(n):Tt=n,M("streetTitle").textContent=e?"The Barn":"Rainbow Ranch",fn(),Jc(),requestAnimationFrame(()=>{const s=M("ranchScroll"),o=Jt();s.scrollLeft=t?Math.max(0,tl*o-s.clientWidth/2):0,Fl()}),setTimeout(Fl,650),$i(M("ranch")),e?S.swish():S.sparkle()}M("btnHopOff").addEventListener("click",()=>yh());function Jc(){const e=Jt(),t=M("ranchWorld"),n=o=>o*e+"px",s=(o,i,a,r)=>`left:${n(o-a/2)};top:${n(i-r)};width:${n(a)};height:${n(r)};z-index:${pi(i)}`;if(t.style.width=Xc()*e+"px",t.style.height=vi*e+"px",t.style.setProperty("--sc",String(e)),Ie){t.innerHTML=kx()+`<button class="rprop barnExit" data-r="exit" aria-label="Go outside" style="${s(127,444,206,244)}"><span class="exitHint"><span>Outside ☀️</span></span></button>`+ys.map((o,i)=>`<button class="animal" data-animal="${i}" aria-label="${Hf[i].name}" style="${s(Xl[i],a0+30,128,107)}">${Cl(i)}</button>`).join("")+[300,1244].map(o=>["carrot","apple","hay"].map((i,a)=>`<button class="bucket" data-feed="${i}" aria-label="${i} bucket" style="${s(o+a*56,592,54,62)}">${hx(i)}</button>`).join("")).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',Gn(),tt();return}t.innerHTML=rx()+lx().replace("<svg ",`<svg style="z-index:${pi(cx)}" `)+`<button class="rprop barnDoor" data-r="barn" aria-label="Go into the barn" style="${s(tl,472,150,150)}"><span class="doorHint"><span>Petting zoo inside! 🐐</span></span></button><button class="rprop windmill" data-r="mill" aria-label="Windmill" style="${s(1540,478,150,240)}">${wx}</button><button class="rprop henHouse" data-r="egg" aria-label="Hen house" style="${s(715,482,180,170)}">${dx}</button><button class="rprop tractor" data-r="honk" aria-label="Tractor" style="${s(900,580,170,130)}">${px}</button><button class="rprop appleTree" data-r="apple" aria-label="Apple tree" style="${s(2085,482,240,300)}">${fx}</button>`+r0.map((o,i)=>{const a=Kc();return`<button class="horse${jn()&&xr().indexOf(i)<0?" stallOff":""}" data-horse="${i}" aria-label="${La[i].name} horse" style="${s(Jn(i),Ms,a.w,a.h)}">${$c(i)}</button>`}).join("")+Array.from({length:nl},(o,i)=>`<button class="plot" data-plot="${i}" aria-label="Garden plot" style="${s(c0(i),594,66,86)}"></button>`).join("")+'<div class="rfx" id="rfx"></div><div class="savatars" id="ravatars"></div>',Er(!0),Gn(),tt()}const Fi=[];function Er(e=!1){if(z!=="ranch"||Ie)return;const t=Lr(),n=Mr();document.querySelectorAll("#ranchWorld .plot").forEach(s=>{const o=+s.dataset.plot,i=t[o]??null,a=tr(i,n),r=JSON.stringify(i)+a;!e&&Fi[o]===r||(Fi[o]!==void 0&&Fi[o]!==r&&a>0&&(s.classList.remove("grow"),s.offsetWidth,s.classList.add("grow")),Fi[o]=r,s.innerHTML=Uf(i,a,o),s.dataset.stage=i?String(a):"empty")})}function Gn(){const e=document.getElementById("ravatars");if(!e||z!=="ranch")return;const t=Jt(),n=new Set,s=new Set;let o=!1;for(const i of Nn(uh())){n.add(i.key);let a=e.querySelector(`.savatar[data-pid="${i.key}"]`);a||(a=document.createElement("div"),a.className="savatar "+(i.mine?"mine":"other"),a.dataset.pid=i.key,e.appendChild(a),i.mine&&Jg(a));const r=JSON.stringify(i.look)+i.name;if(a.dataset.look!==r){const h=a.querySelector(".bubble");a.innerHTML=i.name?Uc(i.look,i.name):`<div class="inner">${yt(i.look)}</div>`,h&&a.appendChild(h),a.dataset.look=r,a.dataset.ride=""}const l=i.p.ride,c=(Ps[i.look.size]??1)*t*.95*(l!==void 0?a9:1),d=ns*c,f=pn*c;if(a.dataset.ride!==String(l??"")&&(a.querySelector(".mount")?.remove(),l!==void 0&&a.insertAdjacentHTML("afterbegin",`<div class="mount" data-mount="${l}">${$c(l,!0)}${d9(i.look)}</div>`),a.dataset.ride=String(l??"")),a.classList.toggle("riding",l!==void 0),l!==void 0){s.add(l),i.mine&&(o=!0),ca.set(l,{x:i.p.x,y:i.p.y});const h=jn()?fh:ph,m=jn()?i9:o9,b=h*t,_=m*t,y=a.querySelector(".mount");y.style.width=b+"px",y.style.height=_+"px",y.style.left=(d-b)/2+"px",y.style.top=f-_+"px";const u=Number(a.querySelector(".shirt")?.getAttribute("data-hem")??126),k=Number(y.querySelector(".saddle")?.getAttribute("data-top")??43),x=(u+r9/2)/160*f,R=f-_+(k-l9/2)/130*_;a.style.setProperty("--lift",x-R+"px");const H=y.querySelector(".rideleg");H&&(H.style.left="0",H.style.top="0",H.style.width="100%",H.style.height="100%")}else a.style.removeProperty("--lift");const g=parseFloat(a.dataset.lx??"NaN");Number.isFinite(g)&&Math.abs(g-i.p.x)>2&&(a.classList.add("moving"),clearTimeout(+(a.dataset.mt??0)),a.dataset.mt=String(window.setTimeout(()=>a.classList.remove("moving"),260))),a.dataset.lx=String(i.p.x),a.style.left=i.p.x*t-d/2+"px",a.style.top=i.p.y*t-f+"px",a.style.width=d+"px",a.style.height=f+"px",a.style.zIndex=pi(i.p.y),a.classList.toggle("flipped",i.p.flip),bi(a,i.look,i.mine)}if(e.querySelectorAll(".savatar").forEach(i=>{n.has(i.dataset.pid)||i.remove()}),document.body.classList.contains("phone")){const i=new Set(xr());document.querySelectorAll("#ranchWorld .horse").forEach(a=>{a.classList.toggle("stallOff",jn()&&!i.has(+a.dataset.horse))})}document.querySelectorAll("#ranchWorld .horse").forEach(i=>{const a=+i.dataset.horse;s.has(a)?(i.classList.add("away"),Fn.delete(a)):i.classList.remove("away")});for(const[i,a]of[...ca])s.has(i)||(f9(i,a.x,a.y),ca.delete(i));document.body.classList.toggle("riding",o),Us()}function h9(e){const t=gn();if(!t||t.where!=="ranch")return;const n=mh().get(e);if(n&&!n.mine){Z("Someone is riding!"),S.pop();return}if(t.ride!==void 0){if(n?.mine||t.ride===e){yh();return}gh(Jn(e),Math.min(En,Ms+8));return}kt=[],Fn.delete(e),Yt({where:"ranch",x:Jn(e),y:Math.min(En,Ms+8),flip:!1,ride:e}),S.neigh(),Z(`You're riding ${La[e].name}! Tap the ground to gallop 🐴`)}function yh(){const e=gn();if(!e||e.ride===void 0)return;const t=e.ride,{ride:n,...s}=e;kt=[];const o=g9(s.x,s.y,s.flip);ca.set(t,{x:s.x,y:s.y}),Yt({...s,x:o.x,y:o.y}),S.drop()}function ed(e,t){const n=e<ys.length?document.querySelector(`#ranchWorld .animal[data-animal="${e}"]`):document.querySelector(`#ranchWorld .horse[data-horse="${e-ys.length}"]:not(.away)`)??document.querySelector(`#ravatars .mount[data-mount="${e-ys.length}"]`);if(!n||z!=="ranch")return;const s=e>=ys.length,o=s?{say:"Neigh! ♥",snd:"neigh"}:Hf[e];n.classList.remove("hop","munch"),n.offsetWidth,n.classList.add(t?"munch":"hop"),setTimeout(()=>n.classList.remove("hop","munch"),1400),n.querySelector(".abubble")?.remove();const i=document.createElement("div");i.className="bubble petBubble abubble",i.textContent=t?`Yum! Munch munch ${t===1?"🥕":t===2?"🍎":"🌾"}`:o.say,n.appendChild(i),wo(),setTimeout(()=>i.classList.add("out"),1400),setTimeout(()=>i.remove(),1800);for(let a=0;a<(t?6:4);a++){const r=document.createElement("div");r.className="heart",r.textContent="♥",r.style.left=15+Math.random()*70+"%",r.style.animationDelay=a*.12+"s",r.style.color=["#ff6b9a","#ff8fab","#e879c6","#b197fc"][a%4],n.appendChild(r),setTimeout(()=>r.remove(),1900)}S[o.snd]?.(),t&&setTimeout(()=>S.munch(),250)}function wh(){const e=document.querySelector("#ranchWorld .henHouse");e&&(e.classList.remove("lay"),e.offsetWidth,e.classList.add("lay"),S.cluck())}function u9(){const e=document.querySelector("#ranchWorld .henHouse"),t=M("basketChip");if(!e)return;const n=e.getBoundingClientRect(),s=t.getBoundingClientRect(),o=document.createElement("div");o.className="flyEgg",o.innerHTML=ii,document.body.appendChild(o),Object.assign(o.style,{left:n.left+n.width/2-18+"px",top:n.top+n.height*.6+"px"}),requestAnimationFrame(()=>{o.style.left=s.left+s.width/2-18+"px",o.style.top=s.top+"px",o.style.transform="scale(.6) rotate(200deg)"}),setTimeout(()=>{o.remove(),t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump")},650)}function bh(e){const t=document.getElementById("rfx");if(!t||z!=="ranch")return;const n=Jt(),[s,o]=Kd[e]??Kd[0],i=1965+s,a=182+o,r=i+(e%2?26:-22),l=575+e*4,c=document.createElement("button");c.className="fallenApple",c.dataset.feed="apple",c.setAttribute("aria-label","Apple"),c.innerHTML=Of;const d=32*n;Object.assign(c.style,{width:d+"px",height:d+"px",left:i*n-d/2+"px",top:a*n-d/2+"px",zIndex:pi(l)}),t.appendChild(c),requestAnimationFrame(()=>{c.style.left=r*n-d/2+"px",c.style.top=l*n-d+"px",c.classList.add("fallen")});const f=document.querySelector("#ranchWorld .appleTree");f?.classList.remove("shake"),f?.offsetWidth,f?.classList.add("shake"),S.boing(),setTimeout(()=>c.remove(),12e3)}function vh(){const e=document.querySelector("#ranchWorld .tractor");e?.classList.remove("bounce"),e?.offsetWidth,e?.classList.add("bounce"),S.honk()}function m9(e){e.k==="zoo"?ed(e.a,e.f):e.k==="apple"?bh(e.v):e.k==="honk"?vh():e.k==="hen"&&wh()}function Ap(e,t){const n=document.elementFromPoint(e,t);if(!n)return null;const s=n.closest("[data-animal]");if(s)return+s.dataset.animal;const o=n.closest(".horse:not(.away)");if(o)return ys.length+ +o.dataset.horse;const i=n.closest(".savatar.riding");return i?.dataset.ride?ys.length+ +i.dataset.ride:null}function Nl(e,t,n){e.preventDefault(),e.stopPropagation();const s=document.createElement("div");s.className="feedGhost",s.innerHTML=Wf[t],document.body.appendChild(s);const o=m=>{s.style.left=m.clientX-30+"px",s.style.top=m.clientY-50+"px"};o(e),S.pick();let i=0;const a=e.clientX,r=e.clientY;n instanceof HTMLElement&&(n.style.visibility="hidden");let l=e.clientX,c=0;const d=M("ranchScroll"),f=()=>{const m=d.getBoundingClientRect(),b=l<m.left+60?-12:l>m.right-60?12:0;b&&i>12&&z==="ranch"&&(d.scrollLeft+=b),c=requestAnimationFrame(f)};c=requestAnimationFrame(f);const g=m=>{if(m.pointerId!==e.pointerId)return;l=m.clientX,i=Math.max(i,Math.hypot(m.clientX-a,m.clientY-r)),o(m),document.querySelectorAll(".feedHover").forEach(_=>_.classList.remove("feedHover")),Ap(m.clientX,m.clientY)!==null&&document.elementFromPoint(m.clientX,m.clientY)?.closest(".animal, .horse, .savatar")?.classList.add("feedHover")},h=m=>{if(m.pointerId!==e.pointerId)return;cancelAnimationFrame(c),window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",h),s.remove(),hh=Date.now(),document.querySelectorAll(".feedHover").forEach(y=>y.classList.remove("feedHover"));const b=Ap(m.clientX,m.clientY);if(b===null){n instanceof HTMLElement&&(n.style.visibility=""),i<12?Z("Drag the food onto an animal! 🥕"):S.drop();return}if(n==="basket"&&!oo({op:"use",kind:"carrot"}))return;n instanceof HTMLElement&&n.remove();const _=l0.indexOf(t);ed(b,_),w?.fx({k:"zoo",a:b,f:_})};window.addEventListener("pointermove",g),window.addEventListener("pointerup",h)}M("ranchWorld").addEventListener("pointerdown",e=>{const t=e.target,n=t.closest(".bucket");if(n)return Nl(e,n.dataset.feed,"bucket");const s=t.closest(".fallenApple");if(s)return Nl(e,"apple",s);t.closest(".rprop, .animal, .horse, .plot, .pet")&&e.stopPropagation()});M("ranchWorld").addEventListener("click",e=>{const t=e.target;if(!gn()||z!=="ranch"||Date.now()-hh<400)return;const s=t.closest("[data-animal]");if(s){const f=+s.dataset.animal;ed(f,0),w?.fx({k:"zoo",a:f,f:0});return}const o=t.closest("[data-horse]");if(o){h9(+o.dataset.horse);return}const i=t.closest("[data-r]")?.dataset.r;if(i==="egg"){wh(),oo({op:"egg"})&&(u9(),S.pickup());return}if(i==="honk"){vh(),w?.fx({k:"honk"});return}if(i==="apple"){const f=Math.floor(Math.random()*4);bh(f),w?.fx({k:"apple",v:f});return}if(i==="barn"){fi(!0);return}if(i==="exit"){fi(!1);return}if(i==="mill"){const f=t.closest(".windmill");f?.classList.remove("whirl"),f?.offsetWidth,f?.classList.add("whirl"),S.swish();return}const a=t.closest("[data-plot]");if(a){y9(+a.dataset.plot,a);return}if(t.closest(".bucket, .fallenApple, .savatar, .pet"))return;const r=M("ranchWorld").getBoundingClientRect(),l=Jt(),c=(e.clientX-r.left)/l,d=(e.clientY-r.top)/l;d<400||gh(c,d)});function y9(e,t){const n=Lr()[e]??null,s=tr(n,Mr());if(document.querySelector(".seedPick")?.remove(),!n){const o=document.createElement("div");o.className="seedPick",o.innerHTML=`<button data-seed="carrot">${hr}<span>Carrot</span></button><button data-seed="flower">${xc()}<span>Flower</span></button>`,t.parentElement.appendChild(o),o.style.left=t.offsetLeft+t.offsetWidth/2+"px",o.style.top=t.offsetTop-8+"px",o.addEventListener("pointerdown",i=>i.stopPropagation()),o.addEventListener("click",i=>{i.stopPropagation();const a=i.target.closest("[data-seed]")?.dataset.seed;o.remove(),a&&oo({op:"plant",i:e,seed:a})&&(S.plant(),Z("Planted! Now tap it to water 💧"))}),setTimeout(()=>o.remove(),6e3);return}if(!n.wet){oo({op:"water",i:e})&&(S.water(),t.classList.remove("watering"),t.offsetWidth,t.classList.add("watering"));return}if(s<3){Z("Still growing! 🌱"),S.pop();return}oo({op:"pick",i:e})&&(S.pickup(),Z(n.seed==="carrot"?"A carrot for your basket! 🥕":"Pretty flowers for your basket! 🌸"))}let Dp=0;function w9(e,t){if(z!=="ranch")return;const n=Date.now();if(document.querySelectorAll("#ranchWorld .animal").forEach(s=>{const o=+s.dataset.animal,i=Jt(),a=n/5200+o*1.7,r=(Ie?Xl:i0)[o]+Math.sin(a)*32;s.style.left=(r-s.offsetWidth/i/2)*i+"px",s.classList.toggle("flipped",Math.cos(a)<0),s.classList.toggle("walking",Math.abs(Math.cos(a))>.35)}),e-Dp>1e3&&(Dp=e,Er()),kt.length){const s=gn();if(!s||s.where!==uh())kt=[];else{const o=kt[0],i=s.ride!==void 0?720:300,a=o.x-s.x,r=o.y-s.y,l=Math.hypot(a,r);if(l<6)kt.shift();else{const c=Math.min(l,i*t),d={...s,x:s.x+a/l*c,y:s.y+r/l*c,flip:Math.abs(a)>2?a<0:s.flip};Yt(d);const f=Jt(),g=M("ranchScroll"),h=d.x*f-g.scrollLeft;h>-40&&h<g.clientWidth+40&&(h<g.clientWidth*.2||h>g.clientWidth*.8)&&(g.scrollLeft=d.x*f-g.clientWidth/2)}}}for(const[s,o]of Fn){const i=document.querySelector(`#ranchWorld .horse[data-horse="${s}"]`);if(!i||i.classList.contains("away")){Fn.delete(s);continue}const a=Jn(s)-o.x,r=Ms-o.y,l=Math.hypot(a,r);if(l<8){Fn.delete(s),i.classList.remove("trotting","flipped"),Qa(i,Jn(s),Ms);continue}const c=Math.min(l,460*t);o.x+=a/l*c,o.y+=r/l*c,i.classList.add("trotting"),i.classList.toggle("flipped",a<0),Qa(i,o.x,o.y)}}function td(){const e=document.getElementById("basketChip");if(!e)return;const t=z==="house"&&(!w||De===X||Pe===w.myHouseId()),n=xi(),o=n.egg+n.carrot+n.flower>0&&(z==="ranch"||t);e.classList.toggle("hidden",!o),e.classList.toggle("inHouse",z==="house"),o&&(e.innerHTML=`<span class="bIcon">${ux}</span><span class="bcount" data-kind="egg">${ii}<b>${n.egg}</b></span><span class="bcount" data-kind="carrot">${hr}<b>${n.carrot}</b></span><span class="bcount" data-kind="flower">${xc()}<b>${n.flower}</b></span>`)}M("basketChip").addEventListener("pointerdown",e=>{e.target.closest('.bcount[data-kind="carrot"]')&&z==="ranch"&&xi().carrot>0&&Nl(e,"carrot","basket")});M("basketChip").addEventListener("click",()=>b9());function b9(){const e=z==="house"&&(!w||De===X||Pe===w.myHouseId()),t={egg:["Eggs",ii],carrot:["Carrots",hr],flower:["Flowers",xc()]},n=Vt("",(o,i)=>{const a=o.closest("[data-take]")?.dataset.take;if(!a)return;if(!e){Z("Take it home to put it in your room! 🏠");return}const r="r"+Math.random().toString(36).slice(2,10),l=Math.max(120,Math.min(ke-120,ie+ae/2+(Math.random()-.5)*300));oo({op:"take",kind:a,id:r,room:C.get().currentRoom,x:l})&&(S.drop(),i(),Z("It's in your room! Drag it to a hand to carry it ✋"))},"basketSheet"),s=xi();n.root.querySelector(".card").innerHTML=`${Qt}<h2>My Basket</h2><p class="hint small">${e?"Tap one to put it in your room.":"Collect eggs, carrots and flowers at Rainbow Ranch, then take them home!"}</p>
    <div class="basketRows">${Op.map(o=>`<button class="bRow" data-take="${o}" ${s[o]?"":"disabled"}>${t[o][1]}<b>${s[o]}</b><span>${t[o][0]}</span></button>`).join("")}</div>`}window.__ranch=()=>({view:z,inBarn:Ie,plots:Lr().map(e=>e?{seed:e.seed,stage:tr(e,Mr()),wet:!!e.wet}:null),basket:xi(),me:gn(),ridden:[...mh().keys()]});function v9(){if(Do.kind==="none")return;Qx(),Vt(qx(Do.kind,Do.entries),(t,n)=>{t.closest("#wnGo")&&(S.sparkle(),n())},"whatsNew "+Do.kind).root.querySelector(".card").insertAdjacentHTML("afterbegin",Qt)}setTimeout(v9,500);window.__whatsnew=Do;window.__hood=()=>w;window.__hood_url=()=>ir();window.__ui=()=>({view:z,currentHouseId:Pe,mode:w?"hood":"solo",play:Se.mode()});b7({hood:()=>w,view:()=>z,solo:()=>Tt,myPres:$e,setPres:Yt,toast:Z,refreshNear:Us,sfx:S,goMap:so,soloLook:()=>{const e=X.get();return{look:mi(e.characters[0]??{}),dog:e.dog??null}}});function kh(e){const t=new Set;for(const n of Object.values(e.rooms))for(const s of n.items)t.add(s.kind);for(const n of e.characters)n.held.left&&t.add(n.held.left.kind),n.held.right&&t.add(n.held.right.kind);return e.baby&&t.add("baby"),[...t]}let ji=null,nd=()=>!1;function _h(e){return ji||(ji=p(()=>Promise.resolve().then(()=>pc),void 0).then(t=>(nd=t.hasArt,t.boot(location.search,kh(C.get())))).then(t=>{for(let n=0;n<t.length;n++)if(Ce[t[n]]){As();break}Hg()}),ji)}function k9(e){const t=new Set(e),n=C.get();let s=!1;for(const o of n.rooms[n.currentRoom].items){const i=Ce[o.kind];if(!t.has(o.kind)||!i)continue;const a=re.querySelector(`.item[data-id="${o.id}"] .inner`);!a||a.querySelector("img.artimg")||(a.innerHTML=dn(i,!0),s=!0)}s&&(jt.forEach(o=>{delete o.dataset.held}),Gt(n),Hg())}function _9(){return p(()=>Promise.resolve().then(()=>pc),void 0).then(e=>e.boot(location.search,kh(C.get()))).then(e=>{k9(e.filter(t=>!!Ce[t]))})}G3();K5();nx(e=>e==="backyard"?I3():null);M("scenery").addEventListener("click",e=>{const t=e.target.closest("[data-yard-go]");t&&Ac(t.dataset.yardGo==="backyard"?"backyard":"living")});const $9=t7(M("skyMount"));window.__sky=$9;wr=Zm({layer:re,stageWrap:M("stageWrap"),get:()=>C.get(),dispatch:e=>C.dispatch(e),clock:()=>w&&De!==X?w.now():Date.now(),canSend:()=>!w||De===X||!!w.speaksBaby,owner:()=>kg(),inHouse:()=>z==="house",play:()=>Se.isPlay(),editable:()=>At(),toRoom:Pt,box:e=>{const t=Ce[e.kind];return t?{id:e.id,kind:e.kind,x:e.x,footY:Os(t,e.y),flip:!!e.flip,scale:nt(e),w:t.w,h:lt(t),z:e.z}:null},holderId:()=>w&&De!==X&&w.pid?w.pid:Ae||C.get().characters[0]?.id||"c1",holderSpot:e=>{const t=C.get(),n=w&&De!==X&&w.pid?w.pid:Ae||t.characters[0]?.id||"",s=e||n,o=(a,r,l,c,d,f)=>{const g=c?.pose==="sit"||c?.pose==="lie"?c.pose:null,h=g==="lie"?t.rooms[t.currentRoom]?.items.find(b=>b.id===c?.item):void 0,m=d&&/^#[0-9a-fA-F]{6}$/.test(d)?d:"#f1c27d";return{x:a.x,y:a.y,flip:r,scale:l>0?l:1,pose:g,lieFlip:!!(g==="lie"&&h?.flip),skin:m,chibi:!!f}},i=t.characters.find(a=>a.id===s&&a.room===t.currentRoom);if(i){const a=Bt(i);return o(_t(t.currentRoom,a,i),i.flip,Ps[i.size]??1,a,i.look2&&i.look2.skin||i.skin,!!i.look2)}if(w&&z==="house"){const a=s===w.pid?$e():w.presence.get(s);if(a&&a.where==="house"&&a.houseId===Pe&&a.room===t.currentRoom){const r=Xn(s,a),l=w.players.get(s)?.look,c=l?.size??"kid";return o(_t(t.currentRoom,r,a),a.flip,Ps[c]??1,r,l?.look2&&l.look2.skin||l?.skin||"#f1c27d",!!l?.look2)}}return null},holderHere:e=>{if(!e)return!1;if(C.get().characters.some(s=>s.id===e))return!0;if(!w||De===X)return!1;const n=e===w.pid?$e():w.presence.get(e);return!!(n&&n.where==="house"&&n.houseId===Pe)},occupied:()=>ci(void 0,w?.pid,!0),locked:()=>Cn(null),seatAt:(e,t,n)=>_t(e,t,n)}).render;pg=()=>wr();As();Rt();ss();x9();ss();Cr();vg();ea();yo.matches?Kn():ss();requestAnimationFrame(()=>{ss(),Cr(),Tc()});function x9(){if(!Cc)return;const e=wl(),t=C.get().characters[0];if(!t)return;const n=e==="door";if(C.dispatch({type:"char/update",id:t.id,patch:{...t3(),flip:n?kl.flip:vl.flip}}),C.dispatch({type:"cat/set",cat:{name:"Clover",coat:3,room:n?"living":"backyard",x:n?$a:Qn.x}}),C.dispatch({type:"dog/set",dog:{name:"Sunny",breed:3,owner:t.id}}),!C.get().rooms.backyard.items.some(s=>s.kind==="yard-swing"))for(const s of n3)C.dispatch({type:"item/add",room:"backyard",item:{id:"yp-"+s.kind,kind:s.kind,x:s.x,y:s.y,flip:!1,z:1,scale:s.scale??1}});if(e!=="sheet"){const s=n?kl:vl;C.dispatch({type:"char/move",id:t.id,room:n?"living":"backyard",x:s.x,y:s.y}),C.dispatch({type:"room/switch",room:n?"living":"backyard"})}window.__pinCat=n?{x:$a}:{x:Qn.x,y:Qn.y},e==="play"?M("modePlay").click():(e==="decorate"||e==="door")&&M("modeDecorate").click(),e==="sheet"&&document.body.insertAdjacentHTML("beforeend",U3()),e==="compare"&&document.body.insertAdjacentHTML("beforeend",Q3()),document.body.dataset.yard="ready"}function M9(e){const t=C.get(),n=e==="backyard"?vl:kl;St=null;const s=t.characters.find(o=>o.id===Ae&&o.room===t.currentRoom)??t.characters.find(o=>o.room===t.currentRoom);if(s&&(C.dispatch({type:"char/update",id:s.id,patch:{flip:n.flip}}),C.dispatch({type:"char/move",id:s.id,room:e,x:n.x,y:n.y})),Cc&&t.cat&&(C.dispatch({type:"cat/move",room:e,x:e==="backyard"?Qn.x:$a}),window.__pinCat=e==="backyard"?{x:Qn.x,y:Qn.y}:{x:$a}),C.dispatch({type:"room/switch",room:e}),w&&De!==X){const o=$e();o&&o.where==="house"&&Fe({...o,room:e,x:n.x,y:n.y,flip:n.flip})}requestAnimationFrame(()=>Cr())}function Cr(){if(C.get().currentRoom==="backyard"){Ne(bl),Un();return}if(!Cc||wl()==="sheet"||wl()==="compare")return;const e=C.get().characters.find(t=>t.room===C.get().currentRoom);e&&Ne(e.x-ae/2),Un()}function Un(){if(Rs||F.getBoundingClientRect().width<20)return;const t=mt()||parseFloat(F.style.getPropertyValue("--yard-sc"))||1;F.style.setProperty("--yard-sc",String(t));const n=[...F.querySelectorAll(".yardDoor")];for(const m of n){m.style.minWidth="",m.style.transform="";const b=m.querySelector(".yardHintLabel");if(!b)continue;b.style.transform="",b.style.translate="";const _=b.querySelector("span");_&&(_.style.transform="");const y=Math.max(13,16/t);b.style.fontSize=y+"px",b.style.lineHeight="1";const u=38/t;b.style.height=u+"px";const k=3/t,x=Math.max(0,(u-k*2-y)/2);b.style.padding=`${x.toFixed(2)}px ${(14/t).toFixed(2)}px`}const s=n[0];if(!s)return;const o=s.querySelector(".doorArt"),i=s.querySelector(".yardHintLabel"),a=6,r=()=>{const m=F.getBoundingClientRect(),b=s.getBoundingClientRect(),_=o?.getBoundingClientRect(),y=i?.getBoundingClientRect(),u=[b,_,y].filter(I=>!!I&&I.width>2&&I.height>2),k=Math.min(...u.map(I=>I.top)),x=Math.max(...u.map(I=>I.bottom));let R=m.left+a,H=m.right-a;for(const I of["nudgeL","nudgeR"]){const K=M(I);if(!K||K.classList.contains("off")||K.offsetParent===null)continue;const le=K.getBoundingClientRect();if(le.width<2||le.height<2)continue;const ce=pe=>pe.top<le.bottom-1&&pe.bottom>le.top+1,G=[b,_].some(pe=>pe&&pe.width>2&&ce(pe));!G&&(k>=le.bottom-1||x<=le.top+1)||(I==="nudgeL"&&G?R=Math.max(R,le.right+8):I==="nudgeR"&&G&&(H=Math.min(H,le.left-8)))}return{leftLimit:R,rightLimit:H,doorR:b,artR:_,hintR:y}};let l=0,c=0;for(;l++<4;){const{leftLimit:m,rightLimit:b,doorR:_,artR:y}=r();let u=0;const k=Math.min(_.left,y&&y.width>2?y.left:_.left),x=Math.max(_.right,y&&y.width>2?y.right:_.right);if(k<m&&(u+=m-k),x+u>b&&(u-=x+u-b),Math.abs(u)<.5)break;c+=u,s.style.transform=`translate(${(c/t).toFixed(1)}px, 0)`}if(!i){_p(s);return}const d=i.querySelector("span");if(d){const m=document.createRange();m.selectNodeContents(d);const b=m.getBoundingClientRect(),_=i.getBoundingClientRect(),y=(_.top+_.bottom-(b.top+b.bottom))/2,u=d;b.height>2&&Math.abs(y)>=.1?u.style.transform=`translateY(${(y/t).toFixed(2)}px)`:u.style.transform=""}const f=i.getBoundingClientRect(),g=F.getBoundingClientRect();let h=0;if(C.get().currentRoom==="backyard"&&o){const m=o.getBoundingClientRect();m.width>2&&(h+=(m.left+m.right)/2-(f.left+f.right)/2)}f.left+h<g.left+a?h+=g.left+a-(f.left+h):f.right+h>g.right-a&&(h-=f.right+h-(g.right-a)),Math.abs(h)>.5?i.style.translate=`calc(-50% + ${(h/t).toFixed(1)}px) 0`:i.style.translate="",_p(s)}_h(C.get().currentRoom);const $h=()=>{const e=dr().size,t=_a.length,n=M("secrets"),s=n.querySelector(".secCount");s&&(s.textContent=`${e}/${t}`),n.setAttribute("aria-label",`Surprises, ${e} of ${t}`),ug()};function qa(){return window.innerHeight>window.innerWidth+40}function xh(e,t){for(const G of e)G.style.transform="";if(!qa()||!e.length)return;const n=t&&t.clientWidth>20?t.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth};if(n.width<20)return;const s=8,o=Math.max(n.left,0)+s,i=Math.min(n.right,window.innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,window.innerHeight)-s,l=Math.max(40,i-o),c=Math.max(40,r-a),f=e.map(G=>G.getBoundingClientRect()).filter(G=>G.width>2&&G.height>2);if(!f.length)return;const g=Math.min(...f.map(G=>G.left)),h=Math.max(...f.map(G=>G.right)),m=Math.min(...f.map(G=>G.top)),b=Math.max(...f.map(G=>G.bottom)),_=Math.max(1,h-g),y=Math.max(1,b-m),u=Math.min(1,l/_,c/y);if(u>.995&&g>=o-1&&h<=i+1&&m>=a-1&&b<=r+1)return;const x=e[0].getScreenCTM(),R=x&&Math.hypot(x.a,x.b)||1,H=(g+h)/2,I=(m+b)/2,K=y*u,le=(o+i)/2,ce=m>=a&&b<=r?I:Math.min(Math.max(I,a+K/2),r-K/2);for(const G of e){const pe=G.getBoundingClientRect(),en=(pe.left+pe.right)/2,Dt=(pe.top+pe.bottom)/2,Qe=le+(en-H)*u,P=ce+(Dt-I)*u;G.style.transformBox="fill-box",G.style.transformOrigin="center",G.style.transform=`translate(${((Qe-en)/R).toFixed(2)}px, ${((P-Dt)/R).toFixed(2)}px) scale(${u.toFixed(3)})`}}function Mh(){if(z!=="gameroom")return;const e=document.getElementById("grScroll");xh([...document.querySelectorAll(".neonSignArt")],e)}function Fl(){z!=="ranch"||Ie||(document.querySelectorAll(".ranchSignArt").forEach(e=>{e.style.transform=""}),tt(),Lh(),sd())}function sd(){if(z!=="ranch"||Ie)return;const e=document.getElementById("ranchScroll");if(!e)return;const t=e.getBoundingClientRect();document.querySelectorAll(".ranchSignArt").forEach(n=>{const s=n.getBoundingClientRect(),o=Math.min(t.right,innerWidth),i=Math.max(0,t.left-s.left)+Math.max(0,s.right-o);n.style.visibility=s.width>20&&i<8?"visible":"hidden"})}M("ranchScroll").addEventListener("scroll",()=>{z==="ranch"&&!Ie&&sd()},{passive:!0});function Lh(){const e=document.querySelector(".doorHint"),t=document.getElementById("ranchScroll");if(!e||!t)return;e.style.transform="translateX(-50%)";const n=t.getBoundingClientRect(),s=8,o=Math.max(n.left,0)+s,i=Math.min(n.right,innerWidth)-s,a=Math.max(n.top,0)+s,r=Math.min(n.bottom,innerHeight)-s,l=e.getBoundingClientRect();let c=0;l.right>i&&(c-=l.right-i),l.left+c<o&&(c+=o-(l.left+c));let d=0;const f=t.querySelector(".savatar");if(f){const g=f.getBoundingClientRect(),m=f.querySelector(".nametag")?.getBoundingClientRect(),b=!!(m&&m.width>4&&m.height>4),_=b?Math.min(g.top,m.top):g.top,y=b?Math.min(g.left,m.left):g.left,u=b?Math.max(g.right,m.right):g.right,k=l.left+c;l.right+c>y-6&&k<u+6&&l.bottom+d>_-6&&l.top<g.top+g.height*.72&&(d+=_-48-(l.bottom+d))}if(l.top+d<a&&(d+=a-(l.top+d)),document.body.classList.contains("phone-portrait")){const g=document.querySelector(".ranchSign .ranchSignArt");if(g){const h=g.getBoundingClientRect(),m=l.left+c,b=l.right+c,_=l.top+d,y=l.bottom+d;if(h.width>20&&h.height>h.width*.7&&b>h.left+4&&m<h.right-4&&y>h.top+4&&_<h.bottom-4){let k=h.top-16-y;_+k<a&&(k+=a-(_+k));const R=f?.querySelector(".nametag")?.getBoundingClientRect(),H=y+k;!(R&&R.width>4&&R.height>4&&H>R.top-12&&b>R.left-6&&m<R.right+6)&&H<=r&&(d+=k)}}}(c||d)&&(e.style.transform=`translate(calc(-50% + ${c.toFixed(1)}px), ${d.toFixed(1)}px)`)}const Eh=r1({world:cg,roomW:ke,roomH:Ue,currentRoom:()=>C.get().currentRoom,sparkle:()=>S.sparkle(),tap:()=>S.click(),onFound:(e,t)=>{if($h(),t){const n=M("secrets");n.classList.remove("pulse"),n.offsetWidth,n.classList.add("pulse"),setTimeout(()=>Z("🎁 A secret surprise appeared in your drawer!"),1400),Rt()}}});C.subscribe((e,t)=>{(t.type==="room/switch"||t.type==="game/reset")&&Eh.update()});$h();window.__eggs=()=>({found:[...dr()]});zM();
