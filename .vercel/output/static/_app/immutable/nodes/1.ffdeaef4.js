import{s as S,f as _,l as d,a as x,g as f,h as g,m as h,d as l,c as y,i as m,C as v,n as $,y as E,G as C}from"../chunks/scheduler.9428e398.js";import{S as q,i as G}from"../chunks/index.b8fe6288.js";import{d as H}from"../chunks/singletons.6d077386.js";const P=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),u=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=y(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(u,c)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function w(s,t,r){let o;return C(s,j,n=>r(0,o=n)),[o]}let D=class extends q{constructor(t){super(),G(this,t,w,k,S,{})}};export{D as component};