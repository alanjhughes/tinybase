var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,n="",r=t(n),s=t(t),i=(e,t)=>e.forEach(t),o=e=>c(e,((e,t)=>e+t),0),a=e=>e.length,c=(e,t,n)=>e.reduce(t,n),d=(e,...t)=>e.push(...t),l=Math.max,u=Math.min,f=isFinite,h=e=>null==e,v=(e,t,n)=>h(e)?n?.():t(e),g=e=>Array.isArray(e),M=()=>{},p=e=>e.size,y=(e,t)=>e?.has(t)??!1,m=e=>h(e)||0==p(e),b=e=>[...e?.values()??[]],L=e=>e.clear(),w=(e,t)=>e?.forEach(t),T=(e,t)=>e?.delete(t),x=e=>new Map(e),E=(e,t)=>e?.get(t),I=(e,t)=>w(e,((e,n)=>t(n,e))),R=(e,t,n)=>h(n)?(T(e,t),e):e?.set(t,n),S=(e,t,n)=>(y(e,t)||R(e,t,n()),E(e,t)),j=(e,t,n,r,s=0)=>v((n?S:E)(e,t[s],s>a(t)-2?n:x),(i=>{if(s>a(t)-2)return r?.(i)&&R(e,t[s]),i;const o=j(i,t,n,r,s+1);return m(i)&&R(e,t[s]),o})),k=x([["avg",[(e,t)=>o(e)/t,(e,t,n)=>e+(t-e)/(n+1),(e,t,n)=>e+(e-t)/(n-1),(e,t,n,r)=>e+(t-n)/r]],["max",[e=>l(...e),(e,t)=>l(t,e),(e,t)=>t==e?void 0:e,(e,t,n)=>n==e?void 0:l(t,e)]],["min",[e=>u(...e),(e,t)=>u(t,e),(e,t)=>t==e?void 0:e,(e,t,n)=>n==e?void 0:u(t,e)]],["sum",[e=>o(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,n)=>e-n+t]]]),z=e=>new Set(g(e)||h(e)?e:[e]),A=(e,t)=>e?.add(t),D=/^\d+$/,N=Object.freeze,B=(e=>{const o=new WeakMap;return e=>(o.has(e)||o.set(e,(e=>{const o=x(),[c,l,u,B,C,F,O,,W,$,q]=((e,t,r)=>{const s=e.hasRow,o=x(),c=x(),d=x(),l=x(),u=x(),f=(t,n,...r)=>{const s=S(u,t,z);return i(r,(t=>A(s,t)&&n&&e.callListener(t))),r},M=(t,...n)=>v(E(u,t),(r=>{i(0==a(n)?b(r):n,(t=>{e.delListener(t),T(r,t)})),m(r)&&R(u,t)})),p=(e,n)=>{R(o,e,n),y(c,e)||(R(c,e,t()),R(d,e,x()),R(l,e,x()))},j=e=>{R(o,e),R(c,e),R(d,e),R(l,e),M(e)};return[()=>e,()=>{return e=o,[...e?.keys()??[]];var e},e=>I(c,e),e=>y(c,e),e=>E(o,e),e=>E(c,e),(e,t)=>R(c,e,t),p,(t,r,o,c,u)=>{p(t,r);const v=x(),m=x(),b=E(d,t),T=E(l,t),S=t=>{const i=n=>e.getCell(r,t,n),o=E(b,t),d=s(r,t)?(l=c(i,t),isNaN(l)||h(l)||!0===l||!1===l||l===n?void 0:1*l):void 0;var l,f,M,p;if(o===d||g(o)&&g(d)&&(M=d,a(f=o)===a(M)&&(p=(e,t)=>M[t]===e,f.every(p)))||R(v,t,[o,d]),!h(u)){const e=E(T,t),n=s(r,t)?u(i,t):void 0;e!=n&&R(m,t,n)}},j=e=>{o((()=>{w(v,(([,e],t)=>R(b,t,e))),w(m,((e,t)=>R(T,t,e)))}),v,m,b,T,e),L(v),L(m)};I(b,S),e.hasTable(r)&&i(e.getRowIds(r),(e=>{y(b,e)||S(e)})),j(!0),M(t),f(t,0,e.addRowListener(r,null,((e,t,n)=>S(n))),e.addTableListener(r,(()=>j())))},j,()=>I(u,j),f,M]})(e,M),[G,H,J]=(e=>{let t;const[r,s]=(()=>{const e=[];let t=0;return[r=>(r?e.shift():null)??n+t++,t=>{D.test(t)&&a(e)<1e3&&d(e,t)}]})(),o=x();return[(e,s,i,a=[],c=(()=>[]))=>{t??=K;const d=r(1);return R(o,d,[e,s,i,a,c]),A(j(s,i??[n],z),d),d},(e,r,...s)=>i(((e,t=[n])=>{const r=[],s=(e,n)=>n==a(t)?d(r,e):null===t[n]?w(e,(e=>s(e,n+1))):i([t[n],null],(t=>s(E(e,t),n+1)));return s(e,0),r})(e,r),(e=>w(e,(e=>E(o,e)[0](t,...r??[],...s))))),e=>v(E(o,e),(([,t,r])=>(j(t,r??[n],void 0,(t=>(T(t,e),m(t)?1:0))),R(o,e),s(e),r))),e=>v(E(o,e),(([e,,n=[],r,s])=>{const o=(...c)=>{const d=a(c);d==a(n)?e(t,...c,...s(c)):h(n[d])?i(r[d]?.(...c)??[],(e=>o(...c,e))):o(...c,n[d])};o()}))]})(),K={setMetricDefinition:(e,n,i,a,c,d,l)=>{const u=t(i)==s?[i,c,d,l]:E(k,i)??E(k,"sum");return W(e,n,((t,n,r,s,i,a)=>{const c=F(e),d=p(s);a||=h(c),t();let l=((e,t,n,r,s,i=!1)=>{if(m(n))return;const[o,a,c,d]=s;return i||=h(e),w(r,(([n,r])=>{i||(e=h(n)?a?.(e,r,t++):h(r)?c?.(e,n,t--):d?.(e,r,n,t),i||=h(e))})),i?o(b(n),p(n)):e})(c,d,s,n,u,a);f(l)||(l=void 0),l!=c&&(O(e,l),H(o,[e],l,c))}),(1,t(v=a)==r?e=>e(v):v??(()=>1))),K;var v},delMetricDefinition:e=>($(e),K),getStore:c,getMetricIds:l,forEachMetric:u,hasMetric:B,getTableId:C,getMetric:F,addMetricListener:(e,t)=>G(t,o,[e]),delListener:e=>(J(e),K),destroy:q,getListenerStats:()=>({})};return N(K)})(e)),o.get(e))})();e.createMetrics=B},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseMetrics={});
