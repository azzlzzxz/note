import{d as p,S as w,b as y,o as s,c as i,A as r,_ as m,x as l,a as z,N as A,O as I,e as _,B as N,F as v,p as D,n as b,t as h,y as C,M as P,C as V,u as L,a3 as f,w as x,K as g,a4 as B,a5 as S,a6 as T,a7 as F,a8 as R,a9 as H,aa as j,ab as O,ac as K,ad as W,H as G,h as U,l as q,ae as J,af as Q,ag as X}from"./chunks/framework.a5035e6c.js";import{t as k}from"./chunks/theme.60b3df6e.js";const Y={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=azzlzzxz.azzlzzxz.github.io",onerror:"this.style.display='none'"},Z=p({__name:"MNavVisitor",setup(e){const t=w("DEV");return(n,a)=>y(t)?r("",!0):(s(),i("img",Y))}});const ee=m(Z,[["__scopeId","data-v-c62de4af"]]),te=e=>(A("data-v-1f6802d4"),e=e(),I(),e),ne={class:"copyright"},ae=te(()=>l("div",null,"如有转载或 CV 的请标注本站原文地址",-1)),oe={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=azzlzzxz.azzlzzxz.github.io",onerror:"this.style.display='none'"},se=p({__name:"MDocFooter",setup(e){const t=w("DEV");return(n,a)=>(s(),i("div",ne,[ae,l("div",null,[y(t)?r("",!0):(s(),i("img",oe)),z(" Copyright © 2021-present azzlzzxz ")])]))}});const ie=m(se,[["__scopeId","data-v-1f6802d4"]]),re=/[\u0000-\u001f]/g,ce=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,le=/[\u0300-\u036F]/g,M=e=>e.normalize("NFKD").replace(le,"").replace(re,"").replace(ce,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),de=["href"],ue={class:"box-header"},pe=["innerHTML"],_e={key:1,class:"icon"},fe=["src","alt"],me=["id"],ve={key:1,class:"desc"},he=p({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=_(()=>t.title?M(t.title):""),a=_(()=>typeof t.icon=="object"?t.icon.svg:""),u=_(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(o,Ie)=>{const $=N("Badge");return o.link?(s(),i("a",{key:0,class:"m-nav-link",href:o.link,target:"_blank",rel:"noreferrer"},[l("article",{class:b(["box",{"has-badge":u.value}])},[l("div",ue,[o.noIcon?r("",!0):(s(),i(v,{key:0},[a.value?(s(),i("div",{key:0,class:"icon",innerHTML:a.value},null,8,pe)):o.icon&&typeof o.icon=="string"?(s(),i("div",_e,[l("img",{src:y(D)(o.icon),alt:o.title,onerror:"this.parentElement.style.display='none'"},null,8,fe)])):r("",!0)],64)),o.title?(s(),i("h5",{key:1,id:n.value,class:b(["title",{"no-icon":o.noIcon}])},h(o.title),11,me)):r("",!0)]),u.value?(s(),C($,{key:0,class:"badge",type:u.value.type,text:u.value.text},null,8,["type","text"])):r("",!0),o.desc?(s(),i("p",ve,h(o.desc),1)):r("",!0)],2)],8,de)):r("",!0)}}});const ge=m(he,[["__scopeId","data-v-f6a1464b"]]),ye=["id"],be=["href"],ke={class:"m-nav-links"},we=p({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=_(()=>M(t.title));return(a,u)=>(s(),i(v,null,[a.title?(s(),i("h2",{key:0,id:n.value,tabindex:"-1"},[z(h(a.title)+" ",1),l("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,be)],8,ye)):r("",!0),l("div",ke,[(s(!0),i(v,null,P(a.items,o=>(s(),C(ge,V({noIcon:a.noIcon},o),null,16,["noIcon"]))),256))])],64))}});const ze=m(we,[["__scopeId","data-v-3a009e39"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));let c;const Ce={extends:k,Layout:()=>{var n;const e={},{frontmatter:t}=L();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),f(k.Layout,e,{"nav-bar-title-after":()=>f(ee),"doc-after":()=>f(ie)})},enhanceApp({app:e,router:t}){e.component("MNavLinks",ze),e.provide("DEV",!1),typeof window<"u"&&x(()=>t.route.data.relativePath,()=>Le(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Le(e){if(e){if(c)return;c=document.createElement("style"),c.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(c)}else{if(!c)return;c.remove(),c=void 0}}function E(e){if(e.extends){const t=E(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const d=E(Ce),Me=p({name:"VitePressApp",setup(){const{site:e}=L();return U(()=>{q(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),J(),Q(),X(),d.setup&&d.setup(),()=>f(d.Layout)}});async function Ee(){const e=Ae(),t=$e();t.provide(S,e);const n=T(e.route);return t.provide(F,n),t.component("Content",R),t.component("ClientOnly",H),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),d.enhanceApp&&await d.enhanceApp({app:t,router:e,siteData:j}),{app:t,router:e,data:n}}function $e(){return O(Me)}function Ae(){let e=g,t;return K(n=>{let a=W(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),g&&(e=!1),G(()=>import(a),[])},d.NotFound)}g&&Ee().then(({app:e,router:t,data:n})=>{t.go().then(()=>{B(t.route,n.site),e.mount("#app")})});export{Ee as createApp};
