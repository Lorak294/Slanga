var O=Object.defineProperty;var G=(t,n,e)=>n in t?O(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(G(t,typeof n!="symbol"?n+"":n,e),e);function M(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function ct(){return Object.create(null)}function F(t){t.forEach(z)}function R(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function st(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function ot(t){return Object.keys(t).length===0}function U(t,...n){if(t==null){for(const i of n)i(void 0);return M}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(U(n,e))}function ut(t,n,e,i){if(t){const l=H(t,n,e,i);return t[0](l)}}function H(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const o=[],c=Math.max(n.dirty.length,l.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|l[s];return o}return n.dirty|l}return n.dirty}function _t(t,n,e,i,l,o){if(l){const c=H(n,e,i,o);t.p(c,l)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t){return t&&R(t.destroy)?t.destroy:M}let y=!1;function pt(){y=!0}function yt(){y=!1}function W(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&r.push(u)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const a=n[r].claim_order,u=(l>0&&n[e[l]].claim_order<=a?l+1:W(1,l,D=>n[e[D]].claim_order,a))-1;i[r]=e[u]+1;const w=u+1;e[w]=r,l=Math.max(w,l)}const o=[],c=[];let s=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(o.push(n[r-1]);s>=r;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<o.length&&c[r].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(c[r],u)}}function K(t,n){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function V(t,n,e){y&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function P(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function gt(){return T(" ")}function bt(){return T("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function X(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){for(const e in n)X(t,e,n[e])}function Et(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function S(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,l=!1){S(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const r=e(s);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const r=e(s);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function q(t,n,e,i){return C(t,l=>l.nodeName===n,l=>{const o=[];for(let c=0;c<l.attributes.length;c++){const s=l.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>l.removeAttribute(c))},()=>i(n))}function Nt(t,n,e){return q(t,n,e,j)}function wt(t,n,e){return q(t,n,e,P)}function Y(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function kt(t){return Y(t," ")}function k(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function At(t,n){const e=k(t,"HTML_TAG_START",0),i=k(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new A(n);S(t);const l=t.splice(e,i-e+1);x(l[0]),x(l[l.length-1]);const o=l.slice(1,l.length-1);for(const c of o)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(n,o)}function Lt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Mt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ht(t,n,e){t.classList.toggle(n,!!e)}function Z(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class ${constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=P(e.nodeName):this.e=j(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Q(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(x)}}class A extends ${constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],e)}}function jt(t,n){return new t(n)}let p;function g(t){p=t}function N(){if(!p)throw new Error("Function called outside component initialization");return p}function Pt(t){N().$$.on_mount.push(t)}function St(t){N().$$.after_update.push(t)}function Ct(){const t=N();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const o=Z(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],L=[];let d=[];const v=[],B=Promise.resolve();let E=!1;function tt(){E||(E=!0,B.then(et))}function qt(){return tt(),B}function nt(t){d.push(t)}function Bt(t){v.push(t)}const b=new Set;let _=0;function et(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const n=h[_];_++,g(n),it(n.$$)}}catch(n){throw h.length=0,_=0,n}for(g(null),h.length=0,_=0;L.length;)L.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];b.has(e)||(b.add(e),e())}d.length=0}while(h.length);for(;v.length;)v.pop()();E=!1,b.clear(),g(t)}function it(t){if(t.fragment!==null){t.update(),F(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(nt)}}function Dt(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{yt as $,ut as A,Et as B,K as C,_t as D,dt as E,ft as F,at as G,A as H,mt as I,Ht as J,xt as K,F as L,Ct as M,st as N,Bt as O,ct as P,et as Q,R,ot as S,nt as T,Dt as U,p as V,g as W,z as X,h as Y,tt as Z,pt as _,gt as a,St as b,kt as c,x as d,bt as e,j as f,Nt as g,Tt as h,V as i,X as j,Mt as k,T as l,Y as m,Lt as n,Pt as o,L as p,jt as q,I as r,rt as s,qt as t,P as u,wt as v,At as w,vt as x,M as y,ht as z};