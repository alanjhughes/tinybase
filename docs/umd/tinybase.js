var e,t;e=this,t=function(e,t){"use strict";const s=e=>typeof e,n="",o=s(n),r=s(!0),a=s(0),i=s(s),l="type",c="default",d="utf8",u="Listener",h="Result",f="add",g="Ids",L="Table",w=L+"s",v=L+g,S="Row",p=S+g,R="Sorted"+S+g,y="Cell",I=y+g,T="Value",b=T+"s",m=T+g,C=e=>n+e,V=(e,t)=>e.includes(t),E=(e,t)=>e.every(t),k=(e,t)=>F(e)===F(t)&&E(e,((e,s)=>t[s]===e)),J=(e,t)=>E(e,((s,n)=>0==n||t(e[n-1],s)<=0)),M=(e,t)=>e.sort(t),x=(e,t)=>e.forEach(t),A=(e,t)=>e.map(t),D=e=>Q(e,((e,t)=>e+t),0),F=e=>e.length,P=e=>0==F(e),Q=(e,t,s)=>e.reduce(t,s),j=(e,t,s)=>e.slice(t,s),z=(e,...t)=>e.push(...t),N=e=>e.pop(),O=e=>e.shift(),W=e=>JSON.stringify(e,((e,t)=>G(t,Map)?Q([...t],((e,[t,s])=>(e[t]=s,e)),{}):t)),B=JSON.parse,q=Math.max,H=Math.min,$=isFinite,G=(e,t)=>e instanceof t,K=e=>null==e,U=(e,t,s)=>K(e)?s?.():t(e),X=e=>e==o||e==r,Y=e=>s(e)==i,Z=e=>Array.isArray(e),_=()=>{},ee=e=>e.size,te=(e,t)=>e?.has(t)??!1,se=e=>K(e)||0==ee(e),ne=e=>[...e?.values()??[]],oe=e=>e.clear(),re=(e,t)=>e?.forEach(t),ae=(e,t)=>e?.delete(t),ie=e=>new Map(e),le=e=>[...e?.keys()??[]],ce=(e,t)=>e?.get(t),de=(e,t)=>re(e,((e,s)=>t(s,e))),ue=(e,t,s)=>K(s)?(ae(e,t),e):e?.set(t,s),he=(e,t,s)=>(te(e,t)||ue(e,t,s()),ce(e,t)),fe=(e,t,s)=>{const n={},o=t??(e=>e);return re(e,((e,t)=>U(o(e),(e=>s?.(e)?0:n[t]=e)))),n},ge=(e,t)=>{const s=ie(),n=t??(e=>e);return re(e,((e,t)=>s.set(t,n(e)))),s},Le=e=>ge(e,ge),we=(e,t,s,n,o=0)=>U((s?he:ce)(e,t[o],o>F(t)-2?s:ie),(r=>{if(o>F(t)-2)return n?.(r)&&ue(e,t[o]),r;const a=we(r,t,s,n,o+1);return se(r)&&ue(e,t[o]),a})),ve=e=>{const t=s(e);return X(t)||t==a&&$(e)?t:void 0},Se=(e,t,s,n,o)=>K(o)?e.delCell(t,s,n,!0):e.setCell(t,s,n,o),pe=(e,t,s)=>K(s)?e.delValue(t):e.setValue(t,s),Re=e=>new Set(Z(e)||K(e)?e:[e]),ye=(e,t)=>e?.add(t),Ie=(e,t,s)=>{const n=e.hasRow,o=ie(),r=ie(),a=ie(),i=ie(),l=ie(),c=(t,s,...n)=>{const o=he(l,t,Re);return x(n,(t=>ye(o,t)&&s&&e.callListener(t))),n},d=(t,...s)=>U(ce(l,t),(n=>{x(P(s)?ne(n):s,(t=>{e.delListener(t),ae(n,t)})),se(n)&&ue(l,t)})),u=(e,s)=>{ue(o,e,s),te(r,e)||(ue(r,e,t()),ue(a,e,ie()),ue(i,e,ie()))},h=e=>{ue(o,e),ue(r,e),ue(a,e),ue(i,e),d(e)};return[()=>e,()=>le(o),e=>de(r,e),e=>te(r,e),e=>ce(o,e),e=>ce(r,e),(e,t)=>ue(r,e,t),u,(t,o,r,l,h)=>{u(t,o);const f=ie(),g=ie(),L=ce(a,t),w=ce(i,t),v=t=>{const r=s=>e.getCell(o,t,s),a=ce(L,t),i=n(o,t)?s(l(r,t)):void 0;if(a===i||Z(a)&&Z(i)&&k(a,i)||ue(f,t,[a,i]),!K(h)){const e=ce(w,t),s=n(o,t)?h(r,t):void 0;e!=s&&ue(g,t,s)}},S=e=>{r((()=>{re(f,(([,e],t)=>ue(L,t,e))),re(g,((e,t)=>ue(w,t,e)))}),f,g,L,w,e),oe(f),oe(g)};de(L,v),e.hasTable(o)&&x(e.getRowIds(o),(e=>{te(L,e)||v(e)})),S(!0),d(t),c(t,0,e.addRowListener(o,null,((e,t,s)=>v(s))),e.addTableListener(o,(()=>S())))},h,()=>de(l,h),c,d]},Te=(e,t)=>s(e)==o?t=>t(e):e??(()=>t??n),be=e=>{const t=new WeakMap;return s=>(t.has(s)||t.set(s,e(s)),t.get(s))},me=/^\d+$/,Ce=()=>{const e=[];let t=0;return[s=>(s?O(e):null)??n+t++,t=>{me.test(t)&&F(e)<1e3&&z(e,t)}]},Ve=e=>{let t;const[s,o]=Ce(),r=ie();return[(o,a,i,l=[],c=(()=>[]))=>{t??=e();const d=s(1);return ue(r,d,[o,a,i,l,c]),ye(we(a,i??[n],Re),d),d},(e,s,...o)=>x(((e,t=[n])=>{const s=[],o=(e,n)=>n==F(t)?z(s,e):null===t[n]?re(e,(e=>o(e,n+1))):x([t[n],null],(t=>o(ce(e,t),n+1)));return o(e,0),s})(e,s),(e=>re(e,(e=>ce(r,e)[0](t,...s??[],...o))))),e=>U(ce(r,e),(([,t,s])=>(we(t,s??[n],void 0,(t=>(ae(t,e),se(t)?1:0))),ue(r,e),o(e),s))),e=>U(ce(r,e),(([e,,s=[],n,o])=>{const r=(...a)=>{const i=F(a);i==F(s)?e(t,...a,...o(a)):K(s[i])?x(n[i]?.(...a)??[],(e=>r(...a,e))):r(...a,s[i])};r()}))]},Ee=Object,ke=Ee.keys,Je=Ee.isFrozen,Me=Ee.freeze,xe=e=>G(e,Ee)&&e.constructor==Ee,Ae=(e,t)=>!K(((e,t)=>U(e,(e=>e[t])))(e,t)),De=(e,t)=>delete e[t],Fe=(e,t)=>A(Ee.entries(e),(([e,s])=>t(s,e))),Pe=e=>xe(e)&&P(ke(e)),Qe=be((e=>{let t,s,o,r=100,a=ie(),i=ie(),l=1;const c=ie(),d=ie(),[u,h,f]=Ve((()=>Q)),g=ie(),L=ie(),w=[],v=[],S=(t,s)=>{l=0,e.transaction((()=>{const[n,o]=ce(g,s);re(n,((s,n)=>re(s,((s,o)=>re(s,((s,r)=>Se(e,n,o,r,s[t]))))))),re(o,((s,n)=>pe(e,n,s[t])))})),l=1},p=e=>{ue(g,e),ue(L,e),h(d,[e])},R=(e,t)=>x(((e,t)=>e.splice(0,t))(e,t??F(e)),p),y=()=>R(w,F(w)-r),I=()=>U(t,(()=>{z(w,t),y(),R(v),t=void 0,o=1})),T=()=>{t=N(w),o=1},b=e.addCellListener(null,null,null,((e,t,s,n,o,r)=>{if(l){I();const e=he(a,t,ie),i=he(e,s,ie),l=he(i,n,(()=>[r,void 0]));l[1]=o,l[0]===o&&se(ue(i,n))&&se(ue(e,s))&&se(ue(a,t))&&T(),J()}})),m=e.addValueListener(null,((e,t,s,n)=>{if(l){I();const e=he(i,t,(()=>[n,void 0]));e[1]=s,e[0]===s&&se(ue(i,t))&&T(),J()}})),C=(e="")=>(K(t)&&(t=n+s++,ue(g,t,[a,i]),A(t,e),a=ie(),i=ie(),o=1),t),E=()=>{P(w)||(((e,...t)=>{e.unshift(...t)})(v,C()),S(0,t),t=N(w),o=1)},k=()=>{P(v)||(z(w,t),t=O(v),S(1,t),o=1)},J=()=>{o&&(h(c),o=0)},M=e=>{const t=C(e);return J(),t},A=(e,t)=>(D(e)&&ce(L,e)!==t&&(ue(L,e,t),h(d,[e])),Q),D=e=>te(g,e),Q={setSize:e=>(r=e,y(),Q),addCheckpoint:M,setCheckpoint:A,getStore:()=>e,getCheckpointIds:()=>[[...w],t,[...v]],forEachCheckpoint:e=>de(L,e),hasCheckpoint:D,getCheckpoint:e=>ce(L,e),goBackward:()=>(E(),J(),Q),goForward:()=>(k(),J(),Q),goTo:e=>{const s=V(w,e)?E:V(v,e)?k:null;for(;!K(s)&&e!=t;)s();return J(),Q},addCheckpointIdsListener:e=>u(e,c),addCheckpointListener:(e,t)=>u(t,d,[e]),delListener:e=>(f(e),Q),clear:()=>(R(w),R(v),K(t)||p(t),t=void 0,s=0,M(),Q),destroy:()=>{e.delListener(b),e.delListener(m)},getListenerStats:()=>({})};return Me(Q.clear())})),je=(e,t)=>e<t?-1:1,ze=be((e=>{const t=ie(),s=ie(),[o,r,a,i,l,c,d,,u,h,f]=Ie(e,ie,(e=>K(e)?n:Z(e)?A(e,C):C(e))),[g,L,w]=Ve((()=>S)),v=(t,s,n)=>{const o=l(t);re(n,((t,n)=>s(n,(s=>re(t,(t=>s(t,(s=>e.forEachCell(o,t,s)))))))))},S={setIndexDefinition:(e,n,o,r,a,i=je)=>{const l=K(a)?void 0:([e],[t])=>a(e,t);return u(e,n,((n,o,a,u,h,f)=>{let g=0;const w=Re(),v=Re(),S=c(e);if(re(o,(([e,t],s)=>{const n=Re(e),o=Re(t);re(n,(e=>ae(o,e)?ae(n,e):0)),re(n,(e=>{ye(w,e),U(ce(S,e),(t=>{ae(t,s),se(t)&&(ue(S,e),g=1)}))})),re(o,(e=>{ye(w,e),te(S,e)||(ue(S,e,Re()),g=1),ye(ce(S,e),s),K(r)||ye(v,e)}))})),n(),se(h)||(f?de(S,(e=>ye(v,e))):de(a,(e=>U(ce(u,e),(e=>ye(v,e))))),re(v,(e=>{const t=(t,s)=>i(ce(h,t),ce(h,s),e),s=[...ce(S,e)];J(s,t)||(ue(S,e,Re(M(s,t))),ye(w,e))}))),(g||f)&&!K(l)){const t=[...S];J(t,l)||(d(e,ie(M(t,l))),g=1)}g&&L(t,[e]),re(w,(t=>L(s,[e,t])))}),Te(o),U(r,Te)),S},delIndexDefinition:e=>(h(e),S),getStore:o,getIndexIds:r,forEachIndex:e=>a(((t,s)=>e(t,(e=>v(t,e,s))))),forEachSlice:(e,t)=>v(e,t,c(e)),hasIndex:i,hasSlice:(e,t)=>te(c(e),t),getTableId:l,getSliceIds:e=>le(c(e)),getSliceRowIds:(e,t)=>ne(ce(c(e),t)),addSliceIdsListener:(e,s)=>g(s,t,[e]),addSliceRowIdsListener:(e,t,n)=>g(n,s,[e,t]),delListener:e=>(w(e),S),destroy:f,getListenerStats:()=>({})};return Me(S)})),Ne=ie([["avg",[(e,t)=>D(e)/t,(e,t,s)=>e+(t-e)/(s+1),(e,t,s)=>e+(e-t)/(s-1),(e,t,s,n)=>e+(t-s)/n]],["max",[e=>q(...e),(e,t)=>q(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:q(t,e)]],["min",[e=>H(...e),(e,t)=>H(t,e),(e,t)=>t==e?void 0:e,(e,t,s)=>s==e?void 0:H(t,e)]],["sum",[e=>D(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,s)=>e-s+t]]]),Oe=(e,t,s,n,o,r=!1)=>{if(se(s))return;const[a,i,l,c]=o;return r||=K(e),re(n,(([s,n])=>{r||(e=K(s)?i?.(e,n,t++):K(n)?l?.(e,s,t--):c?.(e,n,s,t),r||=K(e))})),r?a(ne(s),ee(s)):e},We=be((e=>{const t=ie(),[s,o,r,a,i,l,c,,d,u,h]=Ie(e,_,(e=>isNaN(e)||K(e)||!0===e||!1===e||e===n?void 0:1*e)),[f,g,L]=Ve((()=>w)),w={setMetricDefinition:(e,s,n,o,r,a,i)=>{const u=Y(n)?[n,r,a,i]:ce(Ne,n)??ce(Ne,"sum");return d(e,s,((s,n,o,r,a,i)=>{const d=l(e),h=ee(r);i||=K(d),s();let f=Oe(d,h,r,n,u,i);$(f)||(f=void 0),f!=d&&(c(e,f),g(t,[e],f,d))}),Te(o,1)),w},delMetricDefinition:e=>(u(e),w),getStore:s,getMetricIds:o,forEachMetric:r,hasMetric:a,getTableId:i,getMetric:l,addMetricListener:(e,s)=>f(s,t,[e]),delListener:e=>(L(e),w),destroy:h,getListenerStats:()=>({})};return Me(w)})),Be=(e,t,s,o,r)=>{let a,i,l=0;const c={load:async(s,o)=>{if(2!=l){l=1;const r=await t();K(r)||r==n?e.transaction((()=>e.setTables(s).setValues(o))):e.setJson(r),l=0}return c},startAutoLoad:async(e,t)=>(c.stopAutoLoad(),await c.load(e,t),o(c.load),c),stopAutoLoad:()=>(r(),c),save:async()=>(1!=l&&(l=2,await s(e.getJson()),l=0),c),startAutoSave:async()=>(await c.stopAutoSave().save(),a=e.addTablesListener(c.save),i=e.addValuesListener(c.save),c),stopAutoSave:()=>(U(a,e.delListener),U(i,e.delListener),c),getStore:()=>e,destroy:()=>c.stopAutoLoad().stopAutoSave(),getStats:()=>({})};return Me(c)},qe="storage",He=globalThis.window,$e=(e,t,s)=>{let n;return Be(e,(async()=>s.getItem(t)),(async e=>s.setItem(t,e)),(e=>{n=n=>{n.storageArea===s&&n.key===t&&e()},He.addEventListener(qe,n)}),(()=>{He.removeEventListener(qe,n),n=void 0}))},Ge=e=>e.headers.get("ETag"),Ke=be((e=>{const t=e.createStore,[s,o,r,a,i,,,l,,c,d,g,w]=Ie(e,(()=>!0),_),v=t(),T=t(),b=ie(),m=(e,t,...s)=>x(s,(s=>ye(he(he(b,t,ie),e,Re),s))),C=e=>{U(ce(b,e),(e=>{de(e,((e,t)=>re(t,(t=>e.delListener(t))))),oe(e)})),x([T,v],(t=>t.delTable(e)))},V=(e,t,s)=>m(t,e,t.addWillFinishTransactionListener(s.startTransaction),t.addDidFinishTransactionListener((()=>s.finishTransaction()))),k={setQueryDefinition:(t,s,o)=>{l(t,s),C(t);const r=[],a=[[null,[s,null,null,[],ie()]]],i=[],c=[],d=[];o({select:(e,t)=>{const s=Y(e)?[F(r)+n,e]:[K(t)?e:t,s=>s(e,t)];return z(r,s),{as:e=>s[0]=e}},join:(e,t,s)=>{const n=K(s)||Y(t)?null:t,o=K(n)?t:s,r=[e,[e,n,Y(o)?o:e=>e(o),[],ie()]];return z(a,r),{as:e=>r[0]=e}},where:(e,t,s)=>z(i,Y(e)?e:K(s)?s=>s(e)===t:n=>n(e,t)===s),group:(e,t,s,n,o)=>{const r=[e,[e,Y(t)?[t,s,n,o]:ce(Ne,t)??[(e,t)=>t]]];return z(c,r),{as:e=>r[0]=e}},having:(e,t)=>z(d,Y(e)?e:s=>s(e)===t)});const u=ie(r);if(se(u))return k;const h=ie(a);de(h,((e,[,t])=>U(ce(h,t),(({3:t})=>K(e)?0:z(t,e)))));const f=ie(c);let L=v;if(se(f)&&P(d))L=T;else{V(t,L,T);const e=ie();de(f,((t,[s,n])=>ye(he(e,s,Re),[t,n])));const s=Re();de(u,(t=>te(e,t)?0:ye(s,t)));const n=ie(),o=(s,n,o,r)=>U(s,(([a,i,l,c])=>{de(n,((t,[s])=>{const n=he(a,t,ie),i=ce(n,o),l=r?void 0:s;if(i!==l){const s=Re([[i,l]]),r=ee(n);ue(n,o,l),re(ce(e,t),(([e,t])=>{const o=Oe(c[e],r,n,s,t);c[e]=K(ve(o))?null:o}))}})),se(i)||!E(d,(e=>e((e=>c[e]))))?T.delRow(t,l):K(l)?s[2]=T.addRow(t,c):T.setRow(t,l,c)}));m(L,t,L.addRowListener(t,null,((r,a,i,l)=>{const c=[],d=[],u=ie(),h=L.hasRow(t,i);let f=!h;re(s,(e=>{const[s,n,o]=l(t,i,e);z(c,n),z(d,o),f||=s})),de(e,(e=>{const[s,,n]=l(t,i,e);(f||s)&&ue(u,e,[n])})),f&&o(we(n,c,void 0,(([,e])=>(ae(e,i),se(e)))),u,i,1),h&&o(we(n,d,(()=>{const e={};return re(s,(s=>e[s]=L.getCell(t,i,s))),[ie(),Re(),void 0,e]}),(([,e])=>{ye(e,i)})),u,i)})))}V(t,e,L);const S=(n,o,r,a)=>{const l=t=>e.getCell(o,r,t);x(a,(s=>{const[o,,r,a,i]=ce(h,s),c=r?.(l,n),[d,u]=ce(i,n)??[];c!=d&&(K(u)||w(t,u),ue(i,n,K(c)?null:[c,...g(t,1,e.addRowListener(o,c,(()=>S(n,o,c,a))))]))})),(n=>{const o=(t,o)=>e.getCell(...K(o)?[s,n,t]:t===s?[s,n,o]:[ce(h,t)?.[0],ce(ce(h,t)?.[4],n)?.[0],o]);L.transaction((()=>E(i,(e=>e(o)))?de(u,((e,s)=>Se(L,t,n,e,s(o,n)))):L.delRow(t,n)))})(n)},{3:p}=ce(h,null);return L.transaction((()=>g(t,1,e.addRowListener(s,null,((n,o,r)=>{e.hasRow(s,r)?S(r,s,r,p):(L.delRow(t,r),re(h,(({4:e})=>U(ce(e,r),(([,s])=>{w(t,s),ue(e,r)})))))}))))),k},delQueryDefinition:e=>(C(e),c(e),k),getStore:s,getQueryIds:o,forEachQuery:r,hasQuery:a,getTableId:i,delListener:e=>(T.delListener(e),k),destroy:d,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:s,...n}=T.getListenerStats();return n}};return Fe({[L]:[1,1],[p]:[0,1],[R]:[0,5],[S]:[1,2],[I]:[0,2],[y]:[1,3]},(([e,t],s)=>{x(e?["get","has","forEach"]:["get"],(e=>k[e+h+s]=(...t)=>T[e+s](...t))),k[f+h+s+u]=(...e)=>T[f+s+u](...j(e,0,t),((s,...n)=>e[t](k,...n)))})),Me(k)})),Ue=be((e=>{const t=ie(),s=ie(),o=ie(),r=ie(),[a,i,l,c,d,u,,,h,f,g]=Ie(e,(()=>[ie(),ie(),ie(),ie()]),(e=>K(e)?void 0:e+n)),[L,w,v]=Ve((()=>y)),S=(e,t,s)=>U(u(e),(([n,,o])=>{if(!te(o,t)){const r=Re();if(d(e)!=R(e))ye(r,t);else{let e=t;for(;!K(e)&&!te(r,e);)ye(r,e),e=ce(n,e)}if(s)return r;ue(o,t,r)}return ce(o,t)})),p=(e,t)=>U(u(e),(([,,e])=>ue(e,t))),R=e=>ce(t,e),y={setRelationshipDefinition:(e,n,a,i)=>(ue(t,e,a),h(e,n,((t,n)=>{const a=Re(),i=Re(),l=Re(),[c,d]=u(e);re(n,(([t,s],n)=>{K(t)||(ye(i,t),U(ce(d,t),(e=>{ae(e,n),se(e)&&ue(d,t)}))),K(s)||(ye(i,s),te(d,s)||ue(d,s,Re()),ye(ce(d,s),n)),ye(a,n),ue(c,n,s),de(ce(r,e),(t=>{te(S(e,t),n)&&ye(l,t)}))})),t(),re(a,(t=>w(s,[e,t]))),re(i,(t=>w(o,[e,t]))),re(l,(t=>{p(e,t),w(r,[e,t])}))}),Te(i)),y),delRelationshipDefinition:e=>(ue(t,e),f(e),y),getStore:a,getRelationshipIds:i,forEachRelationship:t=>l((s=>t(s,(t=>e.forEachRow(d(s),t))))),hasRelationship:c,getLocalTableId:d,getRemoteTableId:R,getRemoteRowId:(e,t)=>ce(u(e)?.[0],t),getLocalRowIds:(e,t)=>ne(ce(u(e)?.[1],t)),getLinkedRowIds:(e,t)=>K(u(e))?[t]:ne(S(e,t,!0)),addRemoteRowIdListener:(e,t,n)=>L(n,s,[e,t]),addLocalRowIdsListener:(e,t,s)=>L(s,o,[e,t]),addLinkedRowIdsListener:(e,t,s)=>(S(e,t),L(s,r,[e,t])),delListener:e=>(p(...v(e)),y),destroy:g,getListenerStats:()=>({})};return Me(y)})),Xe=e=>[e,e],Ye=()=>[ie(),ie()],Ze=(e,t,s,n=ue)=>(Fe(t,((t,n)=>s(e,n,t))),de(e,(s=>Ae(t,s)?0:n(e,s))),e),_e=(e,t,s)=>K(e)||!xe(e)||Pe(e)||Je(e)?(s?.(),!1):(Fe(e,((s,n)=>{t(s,n)||De(e,n)})),!Pe(e)),et=(e,t,s)=>ue(e,t,ce(e,t)==-s?void 0:s),tt=()=>{let e,t,s,n,o=0;const r=ie(),i=ie(),d=ie(),h=ie(),g=ie(),R=ie(),E=ie(),J=ie(),D=ie(),F=ie(),P=ie(),Q=ie(),N=Re(),O=ie(),q=ie(),H=ie(),$=Ye(),G=Ye(),Z=Ye(),_=Ye(),ee=Ye(),ne=Ye(),we=Ye(),Ie=Ye(),Te=Ye(),be=Ye(),me=Ye(),Ee=Ye(),ke=Ye(),Je=Ye(),[xe,Qe,ze,Ne]=Ve((()=>ts)),Oe=e=>{if(!_e(e,((e,t)=>V([l,c],t))))return!1;const t=e[l];return!(!X(t)&&t!=a||(ve(e[c])!=t&&De(e,c),0))},We=(t,s)=>(!e||te(D,s)||bt(s))&&_e(t,((e,t)=>Be(s,t,e)),(()=>bt(s))),Be=(e,t,s,n)=>_e(n?s:Ge(s,e,t),((n,o)=>U(qe(e,t,o,n),(e=>(s[o]=e,!0)),(()=>!1))),(()=>bt(e,t))),qe=(t,s,n,o)=>e?U(ce(ce(D,t),n),(e=>ve(o)!=e[l]?bt(t,s,n,o,e[c]):o),(()=>bt(t,s,n,o))):K(ve(o))?bt(t,s,n,o):o,He=(e,t)=>_e(t?e:Ke(e),((t,s)=>U($e(s,t),(t=>(e[s]=t,!0)),(()=>!1))),(()=>mt())),$e=(e,s)=>t?U(ce(P,e),(t=>ve(s)!=t[l]?mt(e,s,t[c]):s),(()=>mt(e,s))):K(ve(s))?mt(e,s):s,Ge=(e,t,s)=>(U(ce(F,t),(([n,o])=>{re(n,((t,s)=>{Ae(e,s)||(e[s]=t)})),re(o,(n=>{Ae(e,n)||bt(t,s,n)}))})),e),Ke=e=>(t&&(re(Q,((t,s)=>{Ae(e,s)||(e[s]=t)})),re(N,(t=>{Ae(e,t)||mt(t)}))),e),Ue=e=>Ze(D,e,((e,t,s)=>{const n=ie(),o=Re();Ze(he(D,t,ie),s,((e,t,s)=>{ue(e,t,s),U(s[c],(e=>ue(n,t,e)),(()=>ye(o,t)))})),ue(F,t,[n,o])}),((e,t)=>{ue(D,t),ue(F,t)})),st=e=>Ze(P,e,((e,t,s)=>{ue(P,t,s),U(s[c],(e=>ue(Q,t,e)),(()=>ye(N,t)))}),((e,t)=>{ue(P,t),ue(Q,t),ae(N,t)})),nt=e=>Pe(e)?Kt():Bt(e),ot=e=>Ze(q,e,((e,t,s)=>rt(t,s)),((e,t)=>gt(t))),rt=(e,t)=>Ze(he(q,e,(()=>(St(e,1),ie()))),t,((t,s,n)=>at(e,t,s,n)),((t,s)=>Lt(e,t,s))),at=(e,t,s,n,o)=>Ze(he(t,s,(()=>(pt(e,s,1),ie()))),n,((t,n,o)=>it(e,s,t,n,o)),((n,r)=>wt(e,t,s,n,r,o))),it=(e,t,s,n,o)=>{te(s,n)||Rt(e,t,n,1);const r=ce(s,n);o!==r&&(yt(e,t,n,r,o),ue(s,n,o))},lt=(e,t,s,n,o)=>U(ce(t,s),(t=>it(e,s,t,n,o)),(()=>at(e,t,s,Ge({[n]:o},e,s)))),ct=e=>Pe(e)?Ut():qt(e),dt=e=>Ze(H,e,((e,t,s)=>ut(t,s)),((e,t)=>vt(t))),ut=(e,t)=>{te(H,e)||It(e,1);const s=ce(H,e);t!==s&&(Tt(e,s,t),ue(H,e,t))},ht=(e,t)=>{const[s]=he(O,e,Ce),n=s(t);return te(ce(q,e),n)?ht(e,t):n},ft=e=>ce(q,e)??rt(e,{}),gt=e=>rt(e,{}),Lt=(e,t,s)=>{const[,n]=he(O,e,Ce);n(s),at(e,t,s,{},!0)},wt=(e,t,s,n,o,r)=>{const a=ce(ce(F,e)?.[0],o);if(!K(a)&&!r)return it(e,s,n,o,a);const i=t=>{yt(e,s,t,ce(n,t)),Rt(e,s,t,-1),ue(n,t)};K(a)?i(o):de(n,i),se(n)&&(pt(e,s,-1),se(ue(t,s))&&(St(e,-1),ue(q,e),ue(O,e)))},vt=e=>{const t=ce(Q,e);if(!K(t))return ut(e,t);Tt(e,ce(H,e)),It(e,-1),ue(H,e)},St=(e,t)=>et(r,e,t),pt=(e,t,s)=>et(he(i,e,ie),t,s),Rt=(e,t,s,n)=>et(he(he(d,e,ie),t,ie),s,n),yt=(e,t,s,n,o)=>he(he(he(h,e,ie),t,ie),s,(()=>[n,0]))[1]=o,It=(e,t)=>et(g,e,t),Tt=(e,t,s)=>he(R,e,(()=>[t,0]))[1]=s,bt=(e,t,s,n,o)=>(z(he(he(he(E,e,ie),t,ie),s,(()=>[])),n),o),mt=(e,t,s)=>(z(he(J,e,(()=>[])),t),s),Ct=(e,t,s)=>U(ce(ce(ce(h,e),t),s),(([e,t])=>[!0,e,t]),(()=>[!1,...Xe(zt(e,t,s))])),Vt=e=>U(ce(R,e),(([e,t])=>[!0,e,t]),(()=>[!1,...Xe(Wt(e))])),Et=e=>se(E)||se(Te[e])?0:re(e?ge(E,Le):E,((t,s)=>re(t,((t,n)=>re(t,((t,o)=>Qe(Te[e],[s,n,o],t))))))),kt=e=>se(J)||se(be[e])?0:re(e?ge(J):J,((t,s)=>Qe(be[e],[s],t))),Jt=(e,t,s)=>{if(!se(t))return Qe(e,s),1},Mt=e=>{const t=se(ee[e]),s=se(we[e])&&se(_[e])&&t&&se(G[e]),n=se(Ie[e])&&se(ne[e])&&se(Z[e])&&se($[e]);if(!s||!n){const o=e?[ge(r),Le(i),ge(d,Le),ge(h,Le)]:[r,i,d,h];if(!s){re(o[2],((t,s)=>re(t,((t,n)=>Jt(we[e],t,[s,n])))));const s=Re();re(o[1],((n,o)=>{Jt(_[e],n,[o])&&!t&&(Qe(ee[e],[o,null]),ye(s,o))})),t||re(o[3],((t,n)=>{if(!te(s,n)){const s=Re();re(t,(e=>re(e,(([t,n],o)=>n!==t?ye(s,o):ae(e,o))))),re(s,(t=>Qe(ee[e],[n,t])))}})),Jt(G[e],o[0])}if(!n){let t;re(o[3],((s,n)=>{let o;re(s,((s,r)=>{let a;re(s,(([s,i],l)=>{i!==s&&(Qe(Ie[e],[n,r,l],i,s,Ct),t=o=a=1)})),a&&Qe(ne[e],[n,r],Ct)})),o&&Qe(Z[e],[n],Ct)})),t&&Qe($[e],void 0,Ct)}}},xt=e=>{const t=se(Ee[e]),s=se(ke[e])&&se(me[e]);if(!t||!s){const n=e?[ge(g),ge(R)]:[g,R];if(t||Jt(Ee[e],n[0]),!s){let t;re(n[1],(([s,n],o)=>{n!==s&&(Qe(ke[e],[o],n,s,Vt),t=1)})),t&&Qe(me[e],void 0,Vt)}}},At=(e,...t)=>(Zt((()=>e(...A(t,C)))),ts),Dt=()=>fe(q,(e=>fe(e,fe))),Ft=()=>le(q),Pt=e=>le(ce(q,C(e))),Qt=(e,t,s,n=0,o)=>{return A(j(M((r=ce(q,C(e)),a=(e,s)=>[K(t)?s:ce(e,C(t)),s],A([...r?.entries()??[]],(([e,t])=>a(t,e)))),(([e],[t])=>je(e,t)*(s?-1:1))),n,K(o)?o:n+o),(([,e])=>e));var r,a},jt=(e,t)=>le(ce(ce(q,C(e)),C(t))),zt=(e,t,s)=>ce(ce(ce(q,C(e)),C(t)),C(s)),Nt=()=>fe(H),Ot=()=>le(H),Wt=e=>ce(H,C(e)),Bt=e=>At((()=>(e=>_e(e,We,bt))(e)?ot(e):0)),qt=e=>At((()=>He(e)?dt(e):0)),Ht=e=>{try{nt(B(e))}catch{}return ts},$t=t=>At((()=>{if((e=_e(t,(e=>_e(e,Oe))))&&(Ue(t),!se(q))){const e=Dt();Kt(),Bt(e)}})),Gt=e=>At((()=>{if(t=(e=>_e(e,Oe))(e)){const s=Nt();Yt(),Ut(),t=!0,st(e),qt(s)}})),Kt=()=>At((()=>ot({}))),Ut=()=>At((()=>dt({}))),Xt=()=>At((()=>{Ue({}),e=!1})),Yt=()=>At((()=>{st({}),t=!1})),Zt=(e,t)=>{if(-1==o)return;_t();const s=e();return es(t),s},_t=()=>(o++,ts),es=e=>(o>0&&(o--,0==o&&(s=!se(h),n=!se(R),o=1,Et(1),s&&Mt(1),kt(1),n&&xt(1),o=-1,e?.(fe(h,(e=>fe(e,(e=>fe(e,(e=>[...e]),(([e,t])=>e===t))),Pe)),Pe),fe(E,(e=>fe(e,fe))),fe(R,(e=>[...e]),(([e,t])=>e===t)),fe(J))&&(o=1,re(h,((e,t)=>re(e,((e,s)=>re(e,(([e],n)=>Se(ts,t,s,n,e))))))),re(R,(([e],t)=>pe(ts,t,e))),o=-1,s=n=!1),Qe(Je[0],void 0,s,n),Et(0),s&&Mt(0),kt(0),n&&xt(0),Qe(Je[1],void 0,s,n),o=0,x([r,i,d,h,E,g,R,J],oe))),ts),ts={getTables:Dt,getTableIds:Ft,getTable:e=>fe(ce(q,C(e)),fe),getRowIds:Pt,getSortedRowIds:Qt,getRow:(e,t)=>fe(ce(ce(q,C(e)),C(t))),getCellIds:jt,getCell:zt,getValues:Nt,getValueIds:Ot,getValue:Wt,hasTables:()=>!se(q),hasTable:e=>te(q,C(e)),hasRow:(e,t)=>te(ce(q,C(e)),C(t)),hasCell:(e,t,s)=>te(ce(ce(q,C(e)),C(t)),C(s)),hasValues:()=>!se(H),hasValue:e=>te(H,C(e)),getTablesJson:()=>W(q),getValuesJson:()=>W(H),getJson:()=>W([q,H]),getTablesSchemaJson:()=>W(D),getValuesSchemaJson:()=>W(P),getSchemaJson:()=>W([D,P]),setTables:Bt,setTable:(e,t)=>At((e=>We(t,e)?rt(e,t):0),e),setRow:(e,t,s)=>At(((e,t)=>Be(e,t,s)?at(e,ft(e),t,s):0),e,t),addRow:(e,t,s=!0)=>Zt((()=>{let n;return Be(e,n,t)&&(e=C(e),at(e,ft(e),n=ht(e,s?1:0),t)),n})),setPartialRow:(e,t,s)=>At(((e,t)=>{if(Be(e,t,s,1)){const n=ft(e);Fe(s,((s,o)=>lt(e,n,t,o,s)))}}),e,t),setCell:(e,t,s,n)=>At(((e,t,s)=>U(qe(e,t,s,Y(n)?n(zt(e,t,s)):n),(n=>lt(e,ft(e),t,s,n)))),e,t,s),setValues:qt,setPartialValues:e=>At((()=>He(e,1)?Fe(e,((e,t)=>ut(t,e))):0)),setValue:(e,t)=>At((e=>U($e(e,Y(t)?t(Wt(e)):t),(t=>ut(e,t)))),e),setTablesJson:Ht,setValuesJson:e=>{try{ct(B(e))}catch{}return ts},setJson:e=>{try{const[t,s]=B(e);nt(t),ct(s)}catch{Ht(e)}return ts},setTablesSchema:$t,setValuesSchema:Gt,setSchema:(e,t)=>At((()=>{$t(e),Gt(t)})),delTables:Kt,delTable:e=>At((e=>te(q,e)?gt(e):0),e),delRow:(e,t)=>At(((e,t)=>U(ce(q,e),(s=>te(s,t)?Lt(e,s,t):0))),e,t),delCell:(e,t,s,n)=>At(((e,t,s)=>U(ce(q,e),(o=>U(ce(o,t),(r=>te(r,s)?wt(e,o,t,r,s,n):0))))),e,t,s),delValues:Ut,delValue:e=>At((e=>te(H,e)?vt(e):0),e),delTablesSchema:Xt,delValuesSchema:Yt,delSchema:()=>At((()=>{Xt(),Yt()})),transaction:Zt,startTransaction:_t,finishTransaction:es,forEachTable:e=>re(q,((t,s)=>e(s,(e=>re(t,((t,s)=>e(s,(e=>de(t,e))))))))),forEachRow:(e,t)=>re(ce(q,C(e)),((e,s)=>t(s,(t=>de(e,t))))),forEachCell:(e,t,s)=>de(ce(ce(q,C(e)),C(t)),s),forEachValue:e=>de(H,e),addSortedRowIdsListener:(e,t,s,n,o,r,a)=>{let i=Qt(e,t,s,n,o);return xe((()=>{const a=Qt(e,t,s,n,o);k(a,i)||(i=a,r(ts,e,t,s,n,o,i))}),ee[a?1:0],[e,t],[Ft])},addWillFinishTransactionListener:e=>xe(e,Je[0]),addDidFinishTransactionListener:e=>xe(e,Je[1]),callListener:e=>(Ne(e),ts),delListener:e=>(ze(e),ts),getListenerStats:()=>({}),createStore:tt};return Fe({[w]:[0,$],[v]:[0,G],[L]:[1,Z,[Ft]],[p]:[1,_,[Ft]],[S]:[2,ne,[Ft,Pt]],[I]:[2,we,[Ft,Pt]],[y]:[3,Ie,[Ft,Pt,jt],e=>Xe(zt(...e))],InvalidCell:[3,Te],[b]:[0,me],[m]:[0,Ee],[T]:[1,ke,[Ot],e=>Xe(Wt(e[0]))],InvalidValue:[1,be]},(([e,t,s,n],o)=>{ts[f+o+u]=(...o)=>xe(o[e],t[o[e+1]?1:0],e>0?j(o,0,e):void 0,s,n)})),Me(ts)};e.createCheckpoints=Qe,e.createCustomPersister=Be,e.createFilePersister=(e,s)=>{let n;return Be(e,(async()=>{try{return await t.promises.readFile(s,d)}catch{}}),(async e=>{try{await t.promises.writeFile(s,e,d)}catch{}}),(e=>{n=t.watch(s,e)}),(()=>{n?.close(),n=void 0}))},e.createIndexes=ze,e.createLocalPersister=(e,t)=>$e(e,t,localStorage),e.createMetrics=We,e.createQueries=Ke,e.createRelationships=Ue,e.createRemotePersister=(e,t,s,n)=>{let o,r;return Be(e,(async()=>{const e=await fetch(t);return r=Ge(e),e.text()}),(async e=>await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:e})),(e=>{o=setInterval((async()=>{const s=await fetch(t,{method:"HEAD"}),n=Ge(s);K(r)||K(n)||n==r||(r=n,e())}),1e3*n)}),(()=>{U(o,clearInterval),o=void 0}))},e.createSessionPersister=(e,t)=>$e(e,t,sessionStorage),e.createStore=tt,e.defaultSorter=je},"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("fs")):"function"==typeof define&&define.amd?define(["exports","fs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBase={},e.fs);
