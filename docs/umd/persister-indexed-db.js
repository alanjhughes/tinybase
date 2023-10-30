var t,e;t=this,e=function(t){"use strict";const e=Promise,a=setInterval,s=clearInterval,n=t=>null==t,o=(t,e,a)=>n(t)?a?.():e(t),r=t=>new e(t),c=async t=>e.all(t),i=(t,e)=>t.map(e),d=(t,...e)=>t.push(...e),y=Object,l=t=>y.getPrototypeOf(t),u=y.keys,w=y.freeze,p=t=>(t=>!n(t)&&o(l(t),(t=>t==y.prototype||n(l(t))),(()=>!0)))(t)&&0==(t=>u(t).length)(t),h=t=>new Map(t),f=(t,e)=>t?.get(e),v=(t,e,a)=>{return n(a)?(s=t,o=e,s?.delete(o),t):t?.set(e,a);var s,o},g=(t,e,a)=>{var s,n;return s=t,n=e,s?.has(n)||v(t,e,a()),f(t,e)},b=h(),A=h(),S=globalThis.window,x=["t","v"],j={keyPath:"k"},m=async(t,e)=>{const a=((e,a)=>i(y.entries(e),(([e,a])=>D(t,"put",{k:e,v:a}))))(e);i(await D(t,"getAllKeys"),(s=>((t,e)=>!n(((t,e)=>o(t,(t=>t[e])))(t,e)))(e,s)?0:d(a,D(t,"delete",s)))),await c(a)},D=async(t,e,a)=>r(((s,n)=>{const o=t[e](a);o.onsuccess=()=>s(o.result),o.onerror=()=>n(`objectStore.${e} error`)}));t.createIndexedDbPersister=(t,e,l=1,u)=>{const h=async(t,a=[],s=0)=>r(((n,o)=>{const r=S.indexedDB.open(e,s?2:void 0);r.onupgradeneeded=()=>s&&i(x,(t=>{try{r.result.createObjectStore(t,j)}catch{}})),r.onsuccess=async()=>{try{const e=r.result.transaction(x,"readwrite"),s=await c(i(x,(async(s,n)=>await t(e.objectStore(s),a[n]))));r.result.close(),n(s)}catch(t){o(t)}},r.onerror=()=>o("indexedDB.open error")}));return((t,e,a,s,r,c,[i,y]=[],l=[])=>{let u,h,S,x=0,j=0;g(b,l,(()=>0)),g(A,l,(()=>[]));const m=async t=>(2!=x&&(x=1,await D.schedule((async()=>{await t(),x=0}))),D),D={load:async(a,s)=>await m((async()=>{try{t.setContent(await e())}catch{t.setContent([a,s])}})),startAutoLoad:async(a={},n={})=>(D.stopAutoLoad(),await D.load(a,n),j=1,S=s((async(a,s)=>{if(s){const e=s();await m((async()=>t.setTransactionChanges(e)))}else await m((async()=>{try{t.setContent(a?.()??await e())}catch(t){c?.(t)}}))})),D),stopAutoLoad:()=>(j&&(r(S),S=void 0,j=0),D),save:async e=>(1!=x&&(x=2,await D.schedule((async()=>{try{await a(t.getContent,e)}catch(t){c?.(t)}x=0}))),D),startAutoSave:async()=>(await D.stopAutoSave().save(),u=t.addDidFinishTransactionListener(((t,e)=>{const[a,s]=e();p(a)&&p(s)||D.save((()=>[a,s]))})),D),stopAutoSave:()=>(o(u,t.delListener),u=void 0,D),schedule:async(...t)=>(d(f(A,l),...t),await(async()=>{if(!f(b,l)){for(v(b,l,1);!n((t=f(A,l),h=t.shift()));)try{await h()}catch(t){c?.(t)}v(b,l,0)}var t})(),D),getStore:()=>t,destroy:()=>D.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return i&&(D[i]=()=>y),w(D)})(t,(async()=>await h((async t=>((t=[])=>y.fromEntries(t))(i(await D(t,"getAll"),(({k:t,v:e})=>[t,e])))))),(async t=>await h((async(t,e)=>await m(t,e)),t(),1)),(t=>a(t,1e3*l)),(t=>s(t)),u,["getDbName",e])},t.objectStoreMatch=m},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).TinyBasePersisterIndexedDb={});
