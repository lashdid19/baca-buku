import{b as e,S as t,i as r,s as n,R as o,c as s,m as i,n as a,t as d,a as c,d as l}from"./vendor.43f90970.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u={},p=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in u)return;u[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},m={root:!0,children:[{isIndex:!0,isPage:!0,path:"/index",id:"_index",component:()=>p((()=>import("./index.5be13a57.js")),["assets/index.5be13a57.js","assets/vendor.43f90970.js"]).then((e=>e.default))},{isDir:!0,children:[{isPage:!0,path:"/page/detail",id:"_page_detail",component:()=>p((()=>import("./detail.e91d9d64.js")),["assets/detail.e91d9d64.js","assets/vendor.43f90970.js"]).then((e=>e.default))},{isPage:!0,path:"/page/search",id:"_page_search",component:()=>p((()=>import("./search.3f7302bd.js")),["assets/search.3f7302bd.js","assets/vendor.43f90970.js"]).then((e=>e.default))}],isLayout:!0,path:"/page",id:"_page__layout",component:()=>p((()=>import("./_layout.e4e63031.js")),["assets/_layout.e4e63031.js","assets/vendor.43f90970.js"]).then((e=>e.default))}],path:"/"},{tree:f,routes:_}=e(m);function h(e){let t,r;return t=new o({props:{routes:_}}),{c(){s(t.$$.fragment)},m(e,n){i(t,e,n),r=!0},p:a,i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){c(t.$$.fragment,e),r=!1},d(e){l(t,e)}}}new class extends t{constructor(e){super(),r(this,e,null,h,n,{})}}({target:document.body});
