import{s as w,i as Q,n as G,h as re,l as ge,B as X,c as O,a as E,u as q,g as B,b as P,C as x,e as z,k as Z}from"../chunks/scheduler.B0edO3JY.js";import{S as A,i as M,e as $,u as F,s as D,c as b,q as N,v as U,d as _,a as V,o as g,b as S,z as v,D as ae,l as j,E as oe,F as L,t as p,j as k,B as ve,f as C,h as I,m as T,k as W,C as pe,x as ie,p as ue,g as ce,G as J}from"../chunks/index.BIs59Lo2.js";import{w as ke,b as Y}from"../chunks/paths.pG5Cw7Tu.js";import{g as $e,t as fe}from"../chunks/config.DRfRa8uZ.js";import{g as H,a as me}from"../chunks/spread.CgU5AtxT.js";import{e as ee}from"../chunks/each.D6YF6ztN.js";const be=!0;async function Ne({url:r}){return{url:r.pathname}}const at=Object.freeze(Object.defineProperty({__proto__:null,load:Ne,prerender:be},Symbol.toStringTag,{value:"Module"})),Se=localStorage.getItem("color-scheme"),K=ke(Se??"dark");function Ee(){K.update(r=>{const e=r==="dark"?"light":"dark";return document.documentElement.setAttribute("color-scheme",e),localStorage.setItem("color-scheme",e),e})}function we(r){let e,n,l=fe+"",t,s,a=new Date().getFullYear()+"",o,c,i,f,h;return{c(){e=$("footer"),n=$("p"),t=F(l),s=F(" © "),o=F(a),c=D(),i=$("a"),f=$("img"),this.h()},l(u){e=b(u,"FOOTER",{class:!0});var m=N(e);n=b(m,"P",{class:!0});var d=N(n);t=U(d,l),s=U(d," © "),o=U(d,a),d.forEach(_),c=V(m),i=b(m,"A",{href:!0,class:!0});var y=N(i);f=b(y,"IMG",{src:!0,alt:!0,width:!0,height:!0}),y.forEach(_),m.forEach(_),this.h()},h(){g(n,"class","svelte-10w2ad4"),Q(f.src,h=`${Y}/${r[0]}`)||g(f,"src",h),g(f,"alt","github"),g(f,"width","32"),g(f,"height","32"),g(i,"href",$e),g(i,"class","me-2"),g(e,"class","svelte-10w2ad4")},m(u,m){S(u,e,m),v(e,n),v(n,t),v(n,s),v(n,o),v(e,c),v(e,i),v(i,f)},p(u,[m]){m&1&&!Q(f.src,h=`${Y}/${u[0]}`)&&g(f,"src",h)},i:G,o:G,d(u){u&&_(e)}}}function ye(r,e,n){let l,t;return re(r,K,s=>n(1,t=s)),r.$$.update=()=>{r.$$.dirty&2&&n(0,l=t==="dark"?"github-mark-white.svg":"github-mark.svg")},[l,t]}class Ce extends A{constructor(e){super(),M(this,e,ye,we,w,{})}}function Ie(r){const e=r-1;return e*e*e+1}function Te(r,{delay:e=0,duration:n=400,easing:l=ge}={}){const t=+getComputedStyle(r).opacity;return{delay:e,duration:n,easing:l,css:s=>`opacity: ${s*t}`}}function he(r,{delay:e=0,duration:n=400,easing:l=Ie,x:t=0,y:s=0,opacity:a=0}={}){const o=getComputedStyle(r),c=+o.opacity,i=o.transform==="none"?"":o.transform,f=c*(1-a),[h,u]=X(t),[m,d]=X(s);return{delay:e,duration:n,easing:l,css:(y,_e)=>`
			transform: ${i} translate(${(1-y)*h}${u}, ${(1-y)*m}${d});
			opacity: ${c-f*_e}`}}/**
 * @license lucide-svelte v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},te=We;function le(r,e,n){const l=r.slice();return l[10]=e[n][0],l[11]=e[n][1],l}function R(r){let e,n=[r[11]],l={};for(let t=0;t<n.length;t+=1)l=E(l,n[t]);return{c(){e=ae(r[10]),this.h()},l(t){e=oe(t,r[10],{}),N(e).forEach(_),this.h()},h(){L(e,l)},m(t,s){S(t,e,s)},p(t,s){L(e,l=H(n,[s&32&&t[11]]))},d(t){t&&_(e)}}}function se(r){let e=r[10],n,l=r[10]&&R(r);return{c(){l&&l.c(),n=j()},l(t){l&&l.l(t),n=j()},m(t,s){l&&l.m(t,s),S(t,n,s)},p(t,s){t[10]?e?w(e,t[10])?(l.d(1),l=R(t),e=t[10],l.c(),l.m(n.parentNode,n)):l.p(t,s):(l=R(t),e=t[10],l.c(),l.m(n.parentNode,n)):e&&(l.d(1),l=null,e=t[10])},d(t){t&&_(n),l&&l.d(t)}}}function Ae(r){let e,n,l,t,s,a=ee(r[5]),o=[];for(let u=0;u<a.length;u+=1)o[u]=se(le(r,a,u));const c=r[9].default,i=O(c,r,r[8],null);let f=[te,r[6],{width:r[2]},{height:r[2]},{stroke:r[1]},{"stroke-width":l=r[4]?Number(r[3])*24/Number(r[2]):r[3]},{class:t=`lucide-icon lucide lucide-${r[0]} ${r[7].class??""}`}],h={};for(let u=0;u<f.length;u+=1)h=E(h,f[u]);return{c(){e=ae("svg");for(let u=0;u<o.length;u+=1)o[u].c();n=j(),i&&i.c(),this.h()},l(u){e=oe(u,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var m=N(e);for(let d=0;d<o.length;d+=1)o[d].l(m);n=j(),i&&i.l(m),m.forEach(_),this.h()},h(){L(e,h)},m(u,m){S(u,e,m);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(e,null);v(e,n),i&&i.m(e,null),s=!0},p(u,[m]){if(m&32){a=ee(u[5]);let d;for(d=0;d<a.length;d+=1){const y=le(u,a,d);o[d]?o[d].p(y,m):(o[d]=se(y),o[d].c(),o[d].m(e,n))}for(;d<o.length;d+=1)o[d].d(1);o.length=a.length}i&&i.p&&(!s||m&256)&&q(i,c,u,u[8],s?P(c,u[8],m,null):B(u[8]),null),L(e,h=H(f,[te,m&64&&u[6],(!s||m&4)&&{width:u[2]},(!s||m&4)&&{height:u[2]},(!s||m&2)&&{stroke:u[1]},(!s||m&28&&l!==(l=u[4]?Number(u[3])*24/Number(u[2]):u[3]))&&{"stroke-width":l},(!s||m&129&&t!==(t=`lucide-icon lucide lucide-${u[0]} ${u[7].class??""}`))&&{class:t}]))},i(u){s||(p(i,u),s=!0)},o(u){k(i,u),s=!1},d(u){u&&_(e),ve(o,u),i&&i.d(u)}}}function Me(r,e,n){const l=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let t=x(e,l),{$$slots:s={},$$scope:a}=e,{name:o}=e,{color:c="currentColor"}=e,{size:i=24}=e,{strokeWidth:f=2}=e,{absoluteStrokeWidth:h=!1}=e,{iconNode:u}=e;return r.$$set=m=>{n(7,e=E(E({},e),z(m))),n(6,t=x(e,l)),"name"in m&&n(0,o=m.name),"color"in m&&n(1,c=m.color),"size"in m&&n(2,i=m.size),"strokeWidth"in m&&n(3,f=m.strokeWidth),"absoluteStrokeWidth"in m&&n(4,h=m.absoluteStrokeWidth),"iconNode"in m&&n(5,u=m.iconNode),"$$scope"in m&&n(8,a=m.$$scope)},e=z(e),[o,c,i,f,h,u,t,e,a,s]}class de extends A{constructor(e){super(),M(this,e,Me,Ae,w,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function ze(r){let e;const n=r[2].default,l=O(n,r,r[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&q(l,n,t,t[3],e?P(n,t[3],s,null):B(t[3]),null)},i(t){e||(p(l,t),e=!0)},o(t){k(l,t),e=!1},d(t){l&&l.d(t)}}}function De(r){let e,n;const l=[{name:"moon"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[ze]},$$scope:{ctx:r}};for(let s=0;s<l.length;s+=1)t=E(t,l[s]);return e=new de({props:t}),{c(){C(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,a){T(e,s,a),n=!0},p(s,[a]){const o=a&3?H(l,[l[0],a&2&&me(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){W(e,s)}}}function Ve(r,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];return r.$$set=a=>{n(1,e=E(E({},e),z(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=z(e),[s,e,l,t]}class je extends A{constructor(e){super(),M(this,e,Ve,De,w,{})}}function Oe(r){let e;const n=r[2].default,l=O(n,r,r[3],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&8)&&q(l,n,t,t[3],e?P(n,t[3],s,null):B(t[3]),null)},i(t){e||(p(l,t),e=!0)},o(t){k(l,t),e=!1},d(t){l&&l.d(t)}}}function qe(r){let e,n;const l=[{name:"sun"},r[1],{iconNode:r[0]}];let t={$$slots:{default:[Oe]},$$scope:{ctx:r}};for(let s=0;s<l.length;s+=1)t=E(t,l[s]);return e=new de({props:t}),{c(){C(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,a){T(e,s,a),n=!0},p(s,[a]){const o=a&3?H(l,[l[0],a&2&&me(s[1]),a&1&&{iconNode:s[0]}]):{};a&8&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){W(e,s)}}}function Be(r,e,n){let{$$slots:l={},$$scope:t}=e;const s=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];return r.$$set=a=>{n(1,e=E(E({},e),z(a))),"$$scope"in a&&n(3,t=a.$$scope)},e=z(e),[s,e,l,t]}class Pe extends A{constructor(e){super(),M(this,e,Be,qe,w,{})}}function Fe(r){let e,n,l,t,s="Dark",a,o;return n=new je({}),{c(){e=$("div"),C(n.$$.fragment),l=D(),t=$("span"),t.textContent=s,this.h()},l(c){e=b(c,"DIV",{class:!0});var i=N(e);I(n.$$.fragment,i),l=V(i),t=b(i,"SPAN",{"data-svelte-h":!0}),ce(t)!=="svelte-397x2m"&&(t.textContent=s),i.forEach(_),this.h()},h(){g(e,"class","svelte-114mtci")},m(c,i){S(c,e,i),T(n,e,null),v(e,l),v(e,t),o=!0},i(c){o||(p(n.$$.fragment,c),c&&(a||Z(()=>{a=J(e,he,{y:-10}),a.start()})),o=!0)},o(c){k(n.$$.fragment,c),o=!1},d(c){c&&_(e),W(n)}}}function Ue(r){let e,n,l,t,s="Light",a,o;return n=new Pe({}),{c(){e=$("div"),C(n.$$.fragment),l=D(),t=$("span"),t.textContent=s,this.h()},l(c){e=b(c,"DIV",{class:!0});var i=N(e);I(n.$$.fragment,i),l=V(i),t=b(i,"SPAN",{"data-svelte-h":!0}),ce(t)!=="svelte-30gjga"&&(t.textContent=s),i.forEach(_),this.h()},h(){g(e,"class","svelte-114mtci")},m(c,i){S(c,e,i),T(n,e,null),v(e,l),v(e,t),o=!0},i(c){o||(p(n.$$.fragment,c),c&&(a||Z(()=>{a=J(e,he,{y:10}),a.start()})),o=!0)},o(c){k(n.$$.fragment,c),o=!1},d(c){c&&_(e),W(n)}}}function Ge(r){let e,n,l,t,s,a;const o=[Ue,Fe],c=[];function i(f,h){return f[0]==="dark"?0:1}return n=i(r),l=c[n]=o[n](r),{c(){e=$("button"),l.c(),this.h()},l(f){e=b(f,"BUTTON",{"aria-label":!0,class:!0});var h=N(e);l.l(h),h.forEach(_),this.h()},h(){g(e,"aria-label","Toggle theme"),g(e,"class","svelte-114mtci")},m(f,h){S(f,e,h),c[n].m(e,null),t=!0,s||(a=pe(e,"click",Ee),s=!0)},p(f,[h]){let u=n;n=i(f),n!==u&&(ie(),k(c[u],1,1,()=>{c[u]=null}),ue(),l=c[n],l||(l=c[n]=o[n](f),l.c()),p(l,1),l.m(e,null))},i(f){t||(p(l),t=!0)},o(f){k(l),t=!1},d(f){f&&_(e),c[n].d(),s=!1,a()}}}function Le(r,e,n){let l;return re(r,K,t=>n(0,l=t)),[l]}class He extends A{constructor(e){super(),M(this,e,Le,Ge,w,{})}}function Re(r){let e,n,l,t=fe+"",s,a,o,c;return o=new He({}),{c(){e=$("nav"),n=$("a"),l=$("b"),s=F(t),a=D(),C(o.$$.fragment),this.h()},l(i){e=b(i,"NAV",{class:!0});var f=N(e);n=b(f,"A",{href:!0,class:!0});var h=N(n);l=b(h,"B",{});var u=N(l);s=U(u,t),u.forEach(_),h.forEach(_),a=V(f),I(o.$$.fragment,f),f.forEach(_),this.h()},h(){g(n,"href",Y+"/"),g(n,"class","title svelte-14w7ki2"),g(e,"class","svelte-14w7ki2")},m(i,f){S(i,e,f),v(e,n),v(n,l),v(l,s),v(e,a),T(o,e,null),c=!0},p:G,i(i){c||(p(o.$$.fragment,i),c=!0)},o(i){k(o.$$.fragment,i),c=!1},d(i){i&&_(e),W(o)}}}class Ye extends A{constructor(e){super(),M(this,e,null,Re,w,{})}}function ne(r){let e,n,l;const t=r[2].default,s=O(t,r,r[1],null);return{c(){e=$("div"),s&&s.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=N(e);s&&s.l(o),o.forEach(_),this.h()},h(){g(e,"class","transition svelte-vcdv4c")},m(a,o){S(a,e,o),s&&s.m(e,null),l=!0},p(a,o){s&&s.p&&(!l||o&2)&&q(s,t,a,a[1],l?P(t,a[1],o,null):B(a[1]),null)},i(a){l||(p(s,a),a&&(n||Z(()=>{n=J(e,Te,{}),n.start()})),l=!0)},o(a){k(s,a),l=!1},d(a){a&&_(e),s&&s.d(a)}}}function Ze(r){let e=r[0],n,l,t=ne(r);return{c(){t.c(),n=j()},l(s){t.l(s),n=j()},m(s,a){t.m(s,a),S(s,n,a),l=!0},p(s,[a]){a&1&&w(e,e=s[0])?(ie(),k(t,1,1,G),ue(),t=ne(s),t.c(),p(t,1),t.m(n.parentNode,n)):t.p(s,a)},i(s){l||(p(t),l=!0)},o(s){k(t),l=!1},d(s){s&&_(n),t.d(s)}}}function Je(r,e,n){let{$$slots:l={},$$scope:t}=e,{url:s}=e;return r.$$set=a=>{"url"in a&&n(0,s=a.url),"$$scope"in a&&n(1,t=a.$$scope)},[s,t,l]}class Ke extends A{constructor(e){super(),M(this,e,Je,Ze,w,{url:0})}}function Qe(r){let e;const n=r[3].default,l=O(n,r,r[4],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&16)&&q(l,n,t,t[4],e?P(n,t[4],s,null):B(t[4]),null)},i(t){e||(p(l,t),e=!0)},o(t){k(l,t),e=!1},d(t){l&&l.d(t)}}}function Xe(r){let e,n,l,t,s,a,o,c;return n=new Ye({}),s=new Ke({props:{url:r[0].url,$$slots:{default:[Qe]},$$scope:{ctx:r}}}),o=new Ce({}),{c(){e=$("div"),C(n.$$.fragment),l=D(),t=$("main"),C(s.$$.fragment),a=D(),C(o.$$.fragment),this.h()},l(i){e=b(i,"DIV",{class:!0});var f=N(e);I(n.$$.fragment,f),l=V(f),t=b(f,"MAIN",{class:!0});var h=N(t);I(s.$$.fragment,h),h.forEach(_),a=V(f),I(o.$$.fragment,f),f.forEach(_),this.h()},h(){g(t,"class","svelte-1sq3us8"),g(e,"class","layout svelte-1sq3us8")},m(i,f){S(i,e,f),T(n,e,null),v(e,l),v(e,t),T(s,t,null),v(e,a),T(o,e,null),c=!0},p(i,[f]){const h={};f&1&&(h.url=i[0].url),f&16&&(h.$$scope={dirty:f,ctx:i}),s.$set(h)},i(i){c||(p(n.$$.fragment,i),p(s.$$.fragment,i),p(o.$$.fragment,i),c=!0)},o(i){k(n.$$.fragment,i),k(s.$$.fragment,i),k(o.$$.fragment,i),c=!1},d(i){i&&_(e),W(n),W(s),W(o)}}}function xe(r,e,n){let{$$slots:l={},$$scope:t}=e,{data:s}=e;const a=!0,o="always";return r.$$set=c=>{"data"in c&&n(0,s=c.data),"$$scope"in c&&n(4,t=c.$$scope)},[s,a,o,l,t]}class ot extends A{constructor(e){super(),M(this,e,xe,Xe,w,{data:0,prerender:1,trailingSlash:2})}get prerender(){return this.$$.ctx[1]}get trailingSlash(){return this.$$.ctx[2]}}export{ot as component,at as universal};
