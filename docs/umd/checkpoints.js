var e,t;e=this,t=function(e){"use strict";const t=(e,t)=>e.includes(t),n=(e,t)=>e.forEach(t),s=e=>e.length,o=e=>0==s(e),r=(e,...t)=>e.push(...t),l=e=>e.pop(),i=e=>e.shift(),c=e=>null==e,d=(e,t,n)=>c(e)?n?.():t(e),a=(e,t)=>e?.has(t)??!1,u=e=>c(e)||0==(e=>e.size)(e),h=(e,t)=>e?.forEach(t),p=(e,t)=>e?.delete(t),f=e=>new Map(e),C=(e,t)=>e?.get(t),g=(e,t,n)=>c(n)?(p(e,t),e):e?.set(t,n),k=(e,t,n)=>(a(e,t)||g(e,t,n()),C(e,t)),v=(e,t,n,o,r=0)=>d((n?k:C)(e,t[r],r>s(t)-2?n:f),(l=>{if(r>s(t)-2)return o?.(l)&&g(e,t[r]),l;const i=v(l,t,n,o,r+1);return u(l)&&g(e,t[r]),i})),y=e=>new Set(Array.isArray(e)||c(e)?e:[e]),L=/^\d+$/,w=Object.freeze,b=(e=>{const b=new WeakMap;return e=>(b.has(e)||b.set(e,(e=>{let b,S,T,x=100,z=f(),E=f(),V=1;const j=f(),m=f(),[A,B,I]=(e=>{let t;const[o,l]=(()=>{const e=[];let t=0;return[n=>(n?i(e):null)??""+t++,t=>{L.test(t)&&s(e)<1e3&&r(e,t)}]})(),a=f();return[(e,n,s,r=[],l=(()=>[]))=>{t??=_;const i=o(1);var c,d;return g(a,i,[e,n,s,r,l]),c=v(n,s??[""],y),d=i,c?.add(d),i},(e,o,...l)=>n(((e,t=[""])=>{const o=[],l=(e,i)=>i==s(t)?r(o,e):null===t[i]?h(e,(e=>l(e,i+1))):n([t[i],null],(t=>l(C(e,t),i+1)));return l(e,0),o})(e,o),(e=>h(e,(e=>C(a,e)[0](t,...o??[],...l))))),e=>d(C(a,e),(([,t,n])=>(v(t,n??[""],void 0,(t=>(p(t,e),u(t)?1:0))),g(a,e),l(e),n))),e=>d(C(a,e),(([e,,o=[],r,l])=>{const i=(...d)=>{const a=s(d);a==s(o)?e(t,...d,...l(d)):c(o[a])?n(r[a]?.(...d)??[],(e=>i(...d,e))):i(...d,o[a])};i()}))]})(),M=f(),F=f(),O=[],W=[],$=(t,n)=>{V=0,e.transaction((()=>{const[s,o]=C(M,n);h(s,((n,s)=>h(n,((n,o)=>h(n,((n,r)=>((e,t,n,s,o)=>c(o)?e.delCell(t,n,s,!0):e.setCell(t,n,s,o))(e,s,o,r,n[t]))))))),h(o,((n,s)=>((e,t,n)=>c(n)?e.delValue(t):e.setValue(t,n))(e,s,n[t])))})),V=1},q=e=>{g(M,e),g(F,e),B(m,[e])},D=(e,t)=>n(((e,t)=>e.splice(0,t))(e,t??s(e)),q),G=()=>D(O,s(O)-x),H=()=>d(b,(()=>{r(O,b),G(),D(W),b=void 0,T=1})),J=()=>{b=l(O),T=1},K=e.addCellListener(null,null,null,((e,t,n,s,o,r)=>{if(V){H();const e=k(z,t,f),l=k(e,n,f),i=k(l,s,(()=>[r,void 0]));i[1]=o,i[0]===o&&u(g(l,s))&&u(g(e,n))&&u(g(z,t))&&J(),U()}})),N=e.addValueListener(null,((e,t,n,s)=>{if(V){H();const e=k(E,t,(()=>[s,void 0]));e[1]=n,e[0]===n&&u(g(E,t))&&J(),U()}})),P=(e="")=>(c(b)&&(b=""+S++,g(M,b,[z,E]),Y(b,e),z=f(),E=f(),T=1),b),Q=()=>{o(O)||(((e,...t)=>{e.unshift(...t)})(W,P()),$(0,b),b=l(O),T=1)},R=()=>{o(W)||(r(O,b),b=i(W),$(1,b),T=1)},U=()=>{T&&(B(j),T=0)},X=e=>{const t=P(e);return U(),t},Y=(e,t)=>(Z(e)&&C(F,e)!==t&&(g(F,e,t),B(m,[e])),_),Z=e=>a(M,e),_={setSize:e=>(x=e,G(),_),addCheckpoint:X,setCheckpoint:Y,getStore:()=>e,getCheckpointIds:()=>[[...O],b,[...W]],forEachCheckpoint:e=>{return t=e,h(F,((e,n)=>t(n,e)));var t},hasCheckpoint:Z,getCheckpoint:e=>C(F,e),goBackward:()=>(Q(),U(),_),goForward:()=>(R(),U(),_),goTo:e=>{const n=t(O,e)?Q:t(W,e)?R:null;for(;!c(n)&&e!=b;)n();return U(),_},addCheckpointIdsListener:e=>A(e,j),addCheckpointListener:(e,t)=>A(t,m,[e]),delListener:e=>(I(e),_),clear:()=>(D(O),D(W),c(b)||q(b),b=void 0,S=0,X(),_),destroy:()=>{e.delListener(K),e.delListener(N)},getListenerStats:()=>({})};return w(_.clear())})(e)),b.get(e))})();e.createCheckpoints=b},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseCheckpoints={});
