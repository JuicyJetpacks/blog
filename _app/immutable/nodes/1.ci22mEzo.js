import{s as E,n as g,h as S}from"../chunks/scheduler.B0edO3JY.js";import{S as q,i as x,e as _,u as d,c as f,q as v,v as m,d as h,o as w,b as y,z as u,w as $}from"../chunks/index.BIs59Lo2.js";import{s as z}from"../chunks/entry.Bx8iZlgh.js";const C=()=>{const e=z;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},D={subscribe(e){return C().page.subscribe(e)}};function H(e){var b;let s,t,r=e[0].status+"",i,p,c=((b=e[0].error)==null?void 0:b.message)+"",l;return{c(){s=_("div"),t=_("h1"),i=d(r),p=d(": "),l=d(c),this.h()},l(a){s=f(a,"DIV",{class:!0});var o=v(s);t=f(o,"H1",{});var n=v(t);i=m(n,r),p=m(n,": "),l=m(n,c),n.forEach(h),o.forEach(h),this.h()},h(){w(s,"class","error svelte-2l8l59")},m(a,o){y(a,s,o),u(s,t),u(t,i),u(t,p),u(t,l)},p(a,[o]){var n;o&1&&r!==(r=a[0].status+"")&&$(i,r),o&1&&c!==(c=((n=a[0].error)==null?void 0:n.message)+"")&&$(l,c)},i:g,o:g,d(a){a&&h(s)}}}function I(e,s,t){let r;return S(e,D,i=>t(0,r=i)),[r]}let A=class extends q{constructor(s){super(),x(this,s,I,H,E,{})}};export{A as component};
