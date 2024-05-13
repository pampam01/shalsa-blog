document.addEventListener("astro:page-load",()=>{var e=document.querySelectorAll("pre");e.forEach(function(t){var o=document.createElement("div");o.className="code-container";var n=document.createElement("button");n.className="copy",n.innerHTML='<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',n.style.width="30px",n.style.height="30px",n.style.borderRadius="4px",n.style.color="#fff",n.style.border="none",n.style.zIndex=100,o.appendChild(n),t.parentNode.insertBefore(o,t),o.style.position="relative",n.style.position="absolute",n.style.top="15px",n.style.right="15px",n.addEventListener("click",function(){var r=t.textContent;navigator.clipboard.writeText(r).then(function(){console.log("复制成功"),n.innerHTML='<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 12.5L10.167 17L19.5 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>',setTimeout(()=>{n.innerHTML='<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>'},1500)},function(i){console.error("复制失败",i)})})})});document.addEventListener("astro:page-load",()=>{const e=document.getElementById("menuToggle"),t=document.getElementById("menu");e?.addEventListener("click",function(){this.checked?t?.classList.add("open"):t?.classList.remove("open")})});document.addEventListener("astro:page-load",()=>{const e=s=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s)},t=localStorage.getItem("theme");if(t)e(t);else{const s=window.matchMedia("(prefers-color-scheme: dracula)").matches?"dracula":"winter";e(s)}const o=document.getElementById("themeLabel1"),n=document.getElementById("themeToggle1"),r=document.getElementById("themeLabel2"),i=document.getElementById("themeToggle2"),l=()=>{const u=localStorage.getItem("theme")==="dracula";n.checked=u,i.checked=u};l(),o.classList.add("swap"),o.classList.add("swap-rotate"),r.classList.add("swap"),r.classList.add("swap-rotate");const f=()=>{const u=localStorage.getItem("theme")==="winter"?"dracula":"winter";e(u),l()};n.addEventListener("click",f),i.addEventListener("click",f)});const Q="astro:before-preparation",ee="astro:after-preparation",te="astro:before-swap",ne="astro:after-swap",oe=e=>document.dispatchEvent(new Event(e));class F extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,r,i,l,f,s,u){super(t,o),this.from=n,this.to=r,this.direction=i,this.navigationType=l,this.sourceElement=f,this.info=s,this.newDocument=u,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class re extends F{formData;loader;constructor(t,o,n,r,i,l,f,s,u){super(Q,{cancelable:!0},t,o,n,r,i,l,f),this.formData=s,this.loader=u.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class se extends F{direction;viewTransition;swap;constructor(t,o,n){super(te,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ie(e,t,o,n,r,i,l,f){const s=new re(e,t,o,n,r,i,window.document,l,f);return document.dispatchEvent(s)&&(await s.loader(),s.defaultPrevented||(oe(ee),s.navigationType!=="traverse"&&P({scrollX,scrollY}))),s}async function ae(e,t,o){const n=new se(e,t,o);return document.dispatchEvent(n),n.swap(),n}const ce=history.pushState.bind(history),A=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...e},""))},C=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),X=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let x,w,L=!1,Y;const $=e=>document.dispatchEvent(new Event(e)),j=()=>$("astro:page-load"),le=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},g="data-astro-transition-persist",q="data-astro-transition",U="data-astro-transition-fallback";let M,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(A({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function ue(e,t){try{const o=await fetch(e,t),r=(o.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:r}}catch{return null}}function G(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function de(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=t.getAttribute("type");if(o&&o!=="module"&&o!=="text/javascript")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(l=>{n.onload=n.onerror=l});e=e.then(()=>i)}n.setAttribute(r.name,r.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const W=(e,t,o,n,r)=>{const i=X(t,e),l=document.title;document.title=n;let f=!1;if(e.href!==location.href&&!r)if(o.history==="replace"){const s=history.state;A({...o.state,index:s.index,scrollX:s.scrollX,scrollY:s.scrollY},"",e.href)}else ce({...o.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(document.title=l,x=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),f=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const s=history.state;location.href=e.href,history.state||(A(s,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else f||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function fe(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${g}="${o.getAttribute(g)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>n.addEventListener(i,r)),document.head.append(n)}))}return t}async function V(e,t,o,n){const r=(a,d)=>{const h=a.getAttribute(g),v=h&&d.head.querySelector(`[${g}="${h}"]`);if(v)return v;if(a.matches("link[rel=stylesheet]")){const T=a.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${T}"]`)}return null},i=()=>{const a=document.activeElement;if(a?.closest(`[${g}]`)){if(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement){const d=a.selectionStart,h=a.selectionEnd;return{activeElement:a,start:d,end:h}}return{activeElement:a}}else return{activeElement:null}},l=({activeElement:a,start:d,end:h})=>{a&&(a.focus(),(a instanceof HTMLInputElement||a instanceof HTMLTextAreaElement)&&(a.selectionStart=d,a.selectionEnd=h))},f=a=>{const d=a.dataset.astroTransitionPersistProps;return d==null||d==="false"},s=a=>{const d=document.documentElement,h=[...d.attributes].filter(({name:c})=>(d.removeAttribute(c),c.startsWith("data-astro-")));[...a.newDocument.documentElement.attributes,...h].forEach(({name:c,value:m})=>d.setAttribute(c,m));for(const c of document.scripts)for(const m of a.newDocument.scripts)if(!m.hasAttribute("data-astro-rerun")&&(!c.src&&c.textContent===m.textContent||c.src&&c.type===m.type&&c.src===m.src)){m.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const m=r(c,a.newDocument);m?m.remove():c.remove()}document.head.append(...a.newDocument.head.children);const v=document.body,T=i();document.body.replaceWith(a.newDocument.body);for(const c of v.querySelectorAll(`[${g}]`)){const m=c.getAttribute(g),b=document.querySelector(`[${g}="${m}"]`);b&&(b.replaceWith(c),b.localName==="astro-island"&&f(c)&&(c.setAttribute("ssr",""),c.setAttribute("props",b.getAttribute("props"))))}l(T)};async function u(a){function d(c){const m=c.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(U,a);const T=document.getAnimations().filter(c=>!h.includes(c)&&!d(c));return Promise.all(T.map(c=>c.finished))}if(!L)document.documentElement.setAttribute(q,e.direction),n==="animate"&&await u("old");else throw new DOMException("Transition was skipped");const y=document.title,p=await ae(e,w,s);W(p.to,p.from,t,y,o),$(ne),n==="animate"&&!L&&u("new").then(()=>Y())}async function K(e,t,o,n,r){if(!D()||location.origin!==o.origin){location.href=o.href;return}const i=r?"traverse":n.history==="replace"?"replace":"push";if(i!=="traverse"&&P({scrollX,scrollY}),X(t,o)&&(e!=="back"&&o.hash||e==="back"&&t.hash)){W(o,t,n,document.title,r);return}const l=await ie(t,o,e,i,n.sourceElement,n.info,n.formData,f);if(l.defaultPrevented){location.href=o.href;return}async function f(s){const u=s.to.href,y={};if(s.formData){y.method="POST";const d=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");y.body=d?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const p=await ue(u,y);if(p===null){s.preventDefault();return}if(p.redirected&&(s.to=new URL(p.redirected)),M??=new DOMParser,s.newDocument=M.parseFromString(p.html,p.mediaType),s.newDocument.querySelectorAll("noscript").forEach(d=>d.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const a=fe(s.newDocument);a.length&&await Promise.all(a)}if(L=!1,C)w=document.startViewTransition(async()=>await V(l,n,r));else{const s=(async()=>{await new Promise(u=>setTimeout(u)),await V(l,n,r,G())})();w={updateCallbackDone:s,ready:s,finished:new Promise(u=>Y=u),skipTransition:()=>{L=!0}}}w.ready.then(async()=>{await de(),j(),le()}),w.finished.then(()=>{document.documentElement.removeAttribute(q),document.documentElement.removeAttribute(U)}),await w.ready}async function N(e,t){await K("forward",x,new URL(e,location.href),t??{})}function me(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>E?"forward":"back";E=o,K(n,x,new URL(location.href),{},t)}const O=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(C||G()!=="none")if(x=new URL(location.href),addEventListener("popstate",me),addEventListener("load",j),"onscrollend"in window)addEventListener("scrollend",O);else{let e,t,o,n;const r=()=>{if(n!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&o===scrollX){clearInterval(e),e=void 0,O();return}else t=scrollY,o=scrollX};addEventListener("scroll",()=>{e===void 0&&(n=history.state.index,t=scrollY,o=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const Z=new Set,S=new WeakSet;let I,z,_=!1;function he(e){_||(_=!0,I??=e?.prefetchAll??!1,z??=e?.defaultStrategy??"hover",pe(),ge(),we(),ve())}function pe(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{k(t.target,"tap")&&R(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function ge(){let e;document.body.addEventListener("focusin",n=>{k(n.target,"hover")&&t(n)},{passive:!0}),document.body.addEventListener("focusout",o,{passive:!0}),H(()=>{for(const n of document.getElementsByTagName("a"))S.has(n)||k(n,"hover")&&(S.add(n),n.addEventListener("mouseenter",t,{passive:!0}),n.addEventListener("mouseleave",o,{passive:!0}))});function t(n){const r=n.target.href;e&&clearTimeout(e),e=setTimeout(()=>{R(r,{with:"fetch"})},80)}function o(){e&&(clearTimeout(e),e=0)}}function we(){let e;H(()=>{for(const t of document.getElementsByTagName("a"))S.has(t)||k(t,"viewport")&&(S.add(t),e??=ye(),e.observe(t))})}function ye(){const e=new WeakMap;return new IntersectionObserver((t,o)=>{for(const n of t){const r=n.target,i=e.get(r);n.isIntersecting?(i&&clearTimeout(i),e.set(r,setTimeout(()=>{o.unobserve(r),e.delete(r),R(r.href,{with:"link"})},300))):i&&(clearTimeout(i),e.delete(r))}})}function ve(){H(()=>{for(const e of document.getElementsByTagName("a"))k(e,"load")&&R(e.href,{with:"link"})})}function R(e,t){const o=t?.ignoreSlowConnection??!1;if(!Te(e,o))return;if(Z.add(e),(t?.with??"link")==="link"){const r=document.createElement("link");r.rel="prefetch",r.setAttribute("href",e),document.head.append(r)}else fetch(e).catch(r=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(r)})}function Te(e,t){if(!navigator.onLine||!t&&J())return!1;try{const o=new URL(e,location.href);return location.origin===o.origin&&(location.pathname!==o.pathname||location.search!==o.search)&&!Z.has(e)}catch{}return!1}function k(e,t){if(e?.tagName!=="A")return!1;const o=e.dataset.astroPrefetch;return o==="false"?!1:t==="tap"&&(o!=null||I)&&J()?!0:o==null&&I||o===""?t===z:o===t}function J(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function be(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function B(e){return e.dataset.astroReload!==void 0}(C||be()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(n,location.href).origin;B(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),N(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||B(t))return;const o=t,n=e.submitter,r=new FormData(o,n);let i=n?.getAttribute("formaction")??o.action??location.pathname;const l=n?.getAttribute("formmethod")??o.method;if(l==="dialog"||location.origin!==new URL(i,location.href).origin)return;const f={sourceElement:n??o};if(l==="get"){const s=new URLSearchParams(r),u=new URL(i);u.search=s.toString(),i=u.toString()}else f.formData=r;e.preventDefault(),N(i,f)}),he({prefetchAll:!0}));
