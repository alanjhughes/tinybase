var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",s=",",n=t(""),i=(a,t)=>a.repeat(t),o=Promise,c=setInterval,r=clearInterval,l=a=>null==a,y=(a,t,e)=>l(a)?e?.():t(a),w=a=>t(a)==n,E=(a,t,e)=>a.slice(t,e),u=a=>a.length,d=async a=>o.all(a),f=(a,t="")=>a.join(t),p=(a,t)=>a.map(t),T=a=>0==u(a),v=(a,t)=>a.filter(t),m=(a,...t)=>a.push(...t),A=(a,t)=>a?.has(t)??!1,L=a=>[...a?.values()??[]],h=(a,t)=>a?.delete(t),N=Object,O=a=>N.getPrototypeOf(a),R=N.keys,S=N.freeze,g=(a=[])=>N.fromEntries(a),C=(...a)=>N.assign({},...a),D=(a,t)=>p(N.entries(a),(([a,e])=>t(e,a))),b=a=>N.values(a),I=a=>u(R(a)),F=a=>(a=>!l(a)&&y(O(a),(a=>a==N.prototype||l(O(a))),(()=>!0)))(a)&&0==I(a),M=a=>new Map(a),P=a=>[...a?.keys()??[]],$=(a,t)=>a?.get(t),_=(a,t)=>p([...a?.entries()??[]],(([a,e])=>t(e,a))),B=(a,t,e)=>l(e)?(h(a,t),a):a?.set(t,e),j=(a,t,e)=>(A(a,t)||B(a,t,e()),$(a,t)),x=(a,t,e,s=B)=>(D(t,((t,s)=>e(a,s,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>((a,t)=>!l(((a,t)=>y(a,(a=>a[t])))(a,t)))(t,e)?0:s(a,e))),a),H=a=>new Set(Array.isArray(a)||l(a)?a:[a]),W=(a,t)=>a?.add(t),k="_",q="_id",J=a=>`"${a.replace(/"/g,'""')}"`,U="FROM pragma_table_",Y="WHERE",z=(a,t,e)=>{const n=M();return[async()=>x(n,g(await d(p(await a("SELECT name "+U+"list WHERE schema='main'AND type='table'AND name IN("+K(t)+")",t),(async({name:t})=>[t,g(p(await a("SELECT name,type "+U+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>B(n,t,x(j(n,t,M),e,((a,t,e)=>{e!=$(a,t)&&B(a,t,e)}),((a,t)=>B(a,t))))),((a,t)=>B(n,t))),async(t,e)=>((a,t)=>!l($($(n,a),t)))(t,e)?g(v(p(await a("SELECT*FROM"+J(t)),(a=>{return[a[e],(t={...a},s=e,delete t[s],t)];var t,s})),(([a,t])=>!l(a)&&!F(t)))):{},async(t,e,i,o,c,r=!1)=>{const y=H();D(i??{},(a=>p(R(a??{}),(a=>W(y,a)))));const w=L(y);if(!r&&c&&T(w)&&A(n,t))return await a("DROP TABLE"+J(t)),void B(n,t);if(T(w)||A(n,t)){const s=$(n,t),i=H(P(s));await d([...p(w,(async e=>{h(i,e)||(await a(`ALTER TABLE${J(t)}ADD${J(e)}`),B(s,e,""))})),...!r&&o?p(L(i),(async n=>{n!=e&&(await a(`ALTER TABLE${J(t)}DROP${J(n)}`),B(s,n))})):[]])}else await a(`CREATE TABLE${J(t)}(${J(e)} PRIMARY KEY ON CONFLICT REPLACE${f(p(w,(a=>s+J(a))))});`),B(n,t,M([[e,""],...p(w,(a=>[a,""]))]));if(r)l(i)?await a("DELETE FROM"+J(t)+"WHERE 1"):await d(D(i,(async(s,n)=>{l(s)?await a("DELETE FROM"+J(t)+Y+J(e)+"=?",[n]):T(w)||await G(a,t,e,R(s),[n,...b(s)])})));else if(T(w))A(n,t)&&await a("DELETE FROM"+J(t)+"WHERE 1");else{const s=v(P($(n,t)),(a=>a!=e)),o=[],c=[];D(i??{},((a,t)=>{m(o,t,...p(s,(t=>a?.[t]))),m(c,t)})),await G(a,t,e,s,o),await a("DELETE FROM"+J(t)+Y+J(e)+"NOT IN("+K(c)+")",c)}},async t=>{let s;await a("BEGIN");try{s=await t()}catch(a){e?.(a)}return await a("END"),s}]},G=async(a,t,e,n,o)=>await a("INSERT INTO"+J(t)+"("+J(e)+f(p(n,(a=>s+J(a))))+")VALUES"+E(i(`,(?${i(",?",u(n))})`,u(o)/(u(n)+1)),1)+"ON CONFLICT("+J(e)+")DO UPDATE SET"+f(p(n,(a=>J(a)+"=excluded."+J(a))),s),o),K=a=>f(p(a,(()=>"?")),s),V=JSON.parse,Q=M(),X=M(),Z=(a,t,e,s,n,i,[o,c]=[],r=[])=>{let w,E,u,d=0,f=0;j(Q,r,(()=>0)),j(X,r,(()=>[]));const p=async a=>(2!=d&&(d=1,await T.schedule((async()=>{await a(),d=0}))),T),T={load:async(e,s)=>await p((async()=>{try{a.setContent(await t())}catch{a.setContent([e,s])}})),startAutoLoad:async(e={},n={})=>(T.stopAutoLoad(),await T.load(e,n),f=1,u=s((async(e,s)=>{if(s){const t=s();await p((async()=>a.setTransactionChanges(t)))}else await p((async()=>{try{a.setContent(e?.()??await t())}catch(a){i?.(a)}}))})),T),stopAutoLoad:()=>(f&&(n(u),u=void 0,f=0),T),save:async t=>(1!=d&&(d=2,await T.schedule((async()=>{try{await e(a.getContent,t)}catch(a){i?.(a)}d=0}))),T),startAutoSave:async()=>(await T.stopAutoSave().save(),w=a.addDidFinishTransactionListener(((a,t)=>{const[e,s]=t();F(e)&&F(s)||T.save((()=>[e,s]))})),T),stopAutoSave:()=>(y(w,a.delListener),w=void 0,T),schedule:async(...a)=>(m($(X,r),...a),await(async()=>{if(!$(Q,r)){for(B(Q,r,1);!l((a=$(X,r),E=a.shift()));)try{await E()}catch(a){i?.(a)}B(Q,r,0)}var a})(),T),getStore:()=>a,destroy:()=>T.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return o&&(T[o]=()=>c),S(T)},aa="store",ta=(a,t,e,s,n,[i],o,c)=>{const[r,l,y,w]=z(t,o,n);return Z(a,(async()=>await w((async()=>(await r(),V((await l(i,q))[k]?.[aa]??"null"))))),(async a=>await w((async()=>{var t;await r(),await y(i,q,{[k]:{[aa]:(t=a()??null,JSON.stringify(t,((a,t)=>t instanceof Map?N.fromEntries([...t]):t)))}},!0,!0)}))),e,s,n,["getDb",c],c)},ea=(a,t,e,s,n,[i,o,[c,r,y]],w,E)=>{const[u,f,p,T]=z(t,w,n),m=async(a,t)=>await d(_(o,(async([e,s,n,i],o)=>{const c=a[o];t&&void 0===c||await p(e,s,c,n,i,t)}))),A=async(a,t)=>r?await p(y,q,{[k]:a},!0,!0,t):null;return Z(a,(async()=>await T((async()=>{await u();const a=await(async()=>g(v(await d(_(i,(async([a,t],e)=>[a,await f(e,t)]))),(a=>!F(a[1])))))(),t=await(async()=>c?(await f(y,q))[k]:{})();return F(a)&&l(t)?void 0:[a,t]}))),(async(a,t)=>await T((async()=>{if(await u(),l(t)){const[t,e]=a();await m(t),await A(e)}else{const[a,e]=t();await m(a,!0),await A(e,!0)}}))),e,s,n,["getDb",E],E)},sa="json",na="autoLoadIntervalSeconds",ia="rowIdColumnName",oa="tableId",ca="tableName",ra={mode:sa,[na]:1},la={load:0,save:0,[ca]:e+"_values"},ya=(a,t,e,s)=>{const n=M();return D(a,((a,i)=>{const o=E(b(C(t,w(a)?{[e]:a}:a)),0,I(t));l(o[0])||s(i,o[0])||B(n,i,o)})),n},wa="pragma ",Ea="data_version",ua="schema_version",da=(a,t,s,n,i,o,l,y)=>{let u,d;const[f,p,T,v]=(a=>{const t=(a=>C(ra,w(a)?{storeTableName:a}:a??{}))(a),s=t[na];if(t.mode==sa){const{storeTableName:a=e}=t;return[1,s,[a],H(a)]}const{tables:{load:n={},save:i={}}={},values:o={}}=t,c=E(b(C(la,o)),0,I(la)),r=c[2],l=H(r);return[0,s,[ya(n,{[oa]:null,[ia]:q},oa,(a=>W(l,a)&&a==r)),ya(i,{[ca]:null,[ia]:q,deleteEmptyColumns:0,deleteEmptyTable:0},ca,((a,t)=>W(l,t)&&t==r)),c],l]})(t);return(f?ta:ea)(a,o?async(a,t)=>(o(a,t),await s(a,t)):s,(a=>[c((async()=>{try{const t=(await s(wa+Ea))[0][Ea],e=(await s(wa+ua))[0][ua];t==(u??=t)&&e==(d??=e)||(a(),u=t,d=e)}catch{}}),1e3*p),n((t=>v.has(t)?a():0))]),(([a,t])=>{r(a),u=d=null,i(t)}),l,T,L(v),y)},fa="change";a.createSqlite3Persister=(a,t,e,s,n)=>da(a,e,(async(a,e=[])=>{return await(s=(s,n)=>t.all(a,e,((a,t)=>a?n(a):s(t))),new o(s));var s}),(a=>{const e=(t,e,s)=>a(s);return t.on(fa,e),e}),(a=>t.off(fa,a)),s,n,t)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterSqlite3={});
