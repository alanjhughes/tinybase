var e,t;e=this,t=function(e){"use strict";const t=e=>typeof e,n=t(""),s=t(!0),r=t(0),o=t(t),a="Listener",i="Result",l="Ids",d="Row",c=d+l,u="Sorted"+d+l,f="Cell",h=f+l,g=(e,t)=>e.every(t),v=(e,t)=>e.forEach(t),w=e=>R(e,((e,t)=>e+t),0),y=e=>e.length,L=e=>0==y(e),R=(e,t,n)=>e.reduce(t,n),p=(e,...t)=>e.push(...t),T=Math.max,b=Math.min,m=isFinite,C=e=>null==e,Q=(e,t,n)=>C(e)?n?.():t(e),S=e=>t(e)==o,x=e=>Array.isArray(e),I=()=>{},E=e=>e.size,M=(e,t)=>e?.has(t)??!1,j=e=>C(e)||0==E(e),D=e=>[...e?.values()??[]],k=e=>e.clear(),z=(e,t)=>e?.forEach(t),A=(e,t)=>e?.delete(t),F=e=>new Map(e),B=(e,t)=>e?.get(t),O=(e,t)=>z(e,((e,n)=>t(n,e))),W=(e,t,n)=>C(n)?(A(e,t),e):e?.set(t,n),q=(e,t,n)=>(M(e,t)||W(e,t,n()),B(e,t)),G=(e,t,n,s,r=0)=>Q((n?q:B)(e,t[r],r>y(t)-2?n:F),(o=>{if(r>y(t)-2)return s?.(o)&&W(e,t[r]),o;const a=G(o,t,n,s,r+1);return j(o)&&W(e,t[r]),a})),H=e=>new Set(x(e)||C(e)?e:[e]),J=(e,t)=>e?.add(t),K=F([["avg",[(e,t)=>w(e)/t,(e,t,n)=>e+(t-e)/(n+1),(e,t,n)=>e+(e-t)/(n-1),(e,t,n,s)=>e+(t-n)/s]],["max",[e=>T(...e),(e,t)=>T(t,e),(e,t)=>t==e?void 0:e,(e,t,n)=>n==e?void 0:T(t,e)]],["min",[e=>b(...e),(e,t)=>b(t,e),(e,t)=>t==e?void 0:e,(e,t,n)=>n==e?void 0:b(t,e)]],["sum",[e=>w(e),(e,t)=>e+t,(e,t)=>e-t,(e,t,n)=>e-n+t]]]),N=Object,P=N.freeze,U=(e=>{const o=new WeakMap;return e=>(o.has(e)||o.set(e,(e=>{const o=e.createStore,[l,w,R,T,b,,,U,,V,X,Y,Z]=((e,t,n)=>{const s=e.hasRow,r=F(),o=F(),a=F(),i=F(),l=F(),d=(t,n,...s)=>{const r=q(l,t,H);return v(s,(t=>J(r,t)&&n&&e.callListener(t))),s},c=(t,...n)=>Q(B(l,t),(s=>{v(L(n)?D(s):n,(t=>{e.delListener(t),A(s,t)})),j(s)&&W(l,t)})),u=(e,t)=>{W(r,e,t),M(o,e)||(W(o,e,!0),W(a,e,F()),W(i,e,F()))},f=e=>{W(r,e),W(o,e),W(a,e),W(i,e),c(e)};return[()=>e,()=>{return e=r,[...e?.keys()??[]];var e},e=>O(o,e),e=>M(o,e),e=>B(r,e),e=>B(o,e),(e,t)=>W(o,e,t),u,(t,r,o,l,f)=>{u(t,r);const h=F(),w=F(),L=B(a,t),R=B(i,t),p=t=>{const o=n=>e.getCell(r,t,n),a=B(L,t),i=s(r,t)?n(l(o,t)):void 0;var d,c;if(a===i||x(a)&&x(i)&&(c=i,y(d=a)===y(c)&&g(d,((e,t)=>c[t]===e)))||W(h,t,[a,i]),!C(f)){const e=B(R,t),n=s(r,t)?f(o,t):void 0;e!=n&&W(w,t,n)}},T=e=>{o((()=>{z(h,(([,e],t)=>W(L,t,e))),z(w,((e,t)=>W(R,t,e)))}),h,w,L,R,e),k(h),k(w)};O(L,p),e.hasTable(r)&&v(e.getRowIds(r),(e=>{M(L,e)||p(e)})),T(!0),c(t),d(t,0,e.addRowListener(r,null,((e,t,n)=>p(n))),e.addTableListener(r,(()=>T())))},f,()=>O(l,f),d,c]})(e,0,I),$=o(),_=o(),ee=F(),te=(e,t,...n)=>v(n,(n=>J(q(q(ee,t,F),e,H),n))),ne=e=>{Q(B(ee,e),(e=>{O(e,((e,t)=>z(t,(t=>e.delListener(t))))),k(e)})),v([_,$],(t=>t.delTable(e)))},se=(e,t,n)=>te(t,e,t.addStartTransactionListener(n.startTransaction),t.addDidFinishTransactionListener((()=>n.finishTransaction()))),re={setQueryDefinition:(o,a,i)=>{U(o,a),ne(o);const l=[],d=[[null,[a,null,null,[],F()]]],c=[],u=[],f=[];i({select:(e,t)=>{const n=S(e)?[y(l)+"",e]:[C(t)?e:t,n=>n(e,t)];return p(l,n),{as:e=>n[0]=e}},join:(e,t,n)=>{const s=C(n)||S(t)?null:t,r=C(s)?t:n,o=[e,[e,s,S(r)?r:e=>e(r),[],F()]];return p(d,o),{as:e=>o[0]=e}},where:(e,t,n)=>p(c,S(e)?e:C(n)?n=>n(e)===t:s=>s(e,t)===n),group:(e,t,n,s,r)=>{const o=[e,[e,S(t)?[t,n,s,r]:B(K,t)??[(e,t)=>t]]];return p(u,o),{as:e=>o[0]=e}},having:(e,t)=>p(f,S(e)?e:n=>n(e)===t)});const h=F(l);if(j(h))return re;const w=F(d);O(w,((e,[,t])=>Q(B(w,t),(({3:t})=>C(e)?0:p(t,e)))));const R=F(u);let T=$;if(j(R)&&L(f))T=_;else{se(o,T,_);const e=F();O(R,((t,[n,s])=>J(q(e,n,H),[t,s])));const a=H();O(h,(t=>M(e,t)?0:J(a,t)));const i=F(),l=(a,i,l,d)=>Q(a,(([c,u,h,v])=>{O(i,((o,[a])=>{const i=q(c,o,F),u=B(i,l),f=d?void 0:a;if(u!==f){const a=H([[u,f]]),d=E(i);W(i,l,f),z(B(e,o),(([e,o])=>{const l=((e,t,n,s,r,o=!1)=>{if(j(n))return;const[a,i,l,d]=r;return o||=C(e),z(s,(([n,s])=>{o||(e=C(n)?i?.(e,s,t++):C(s)?l?.(e,n,t--):d?.(e,s,n,t),o||=C(e))})),o?a(D(n),E(n)):e})(v[e],d,i,a,o);v[e]=C((e=>{const o=t(e);return(e=>e==n||e==s)(o)||o==r&&m(e)?o:void 0})(l))?null:l}))}})),j(u)||!g(f,(e=>e((e=>v[e]))))?_.delRow(o,h):C(h)?a[2]=_.addRow(o,v):_.setRow(o,h,v)}));te(T,o,T.addRowListener(o,null,((t,n,s,r)=>{const d=[],c=[],u=F(),f=T.hasRow(o,s);let h=!f;z(a,(e=>{const[t,n,a]=r(o,s,e);p(d,n),p(c,a),h||=t})),O(e,(e=>{const[t,,n]=r(o,s,e);(h||t)&&W(u,e,[n])})),h&&l(G(i,d,void 0,(([,e])=>(A(e,s),j(e)))),u,s,1),f&&l(G(i,c,(()=>{const e={};return z(a,(t=>e[t]=T.getCell(o,s,t))),[F(),H(),void 0,e]}),(([,e])=>{J(e,s)})),u,s)})))}se(o,e,T);const b=(t,n,s,r)=>{const i=t=>e.getCell(n,s,t);v(r,(n=>{const[s,,r,a,l]=B(w,n),d=r?.(i,t),[c,u]=B(l,t)??[];d!=c&&(C(u)||Z(o,u),W(l,t,C(d)?null:[d,...Y(o,1,e.addRowListener(s,d,(()=>b(t,s,d,a))))]))})),(t=>{const n=(n,s)=>e.getCell(...C(s)?[a,t,n]:n===a?[a,t,s]:[B(w,n)?.[0],B(B(w,n)?.[4],t)?.[0],s]);T.transaction((()=>g(c,(e=>e(n)))?O(h,((e,s)=>((e,t,n,s,r)=>C(r)?e.delCell(t,n,s,!0):e.setCell(t,n,s,r))(T,o,t,e,s(n,t)))):T.delRow(o,t)))})(t)},{3:x}=B(w,null);return T.transaction((()=>Y(o,1,e.addRowListener(a,null,((t,n,s)=>{e.hasRow(a,s)?b(s,a,s,x):(T.delRow(o,s),z(w,(({4:e})=>Q(B(e,s),(([,t])=>{Z(o,t),W(e,s)})))))}))))),re},delQueryDefinition:e=>(ne(e),V(e),re),getStore:l,getQueryIds:w,forEachQuery:R,hasQuery:T,getTableId:b,delListener:e=>(_.delListener(e),re),destroy:X,getListenerStats:()=>{const{tables:e,tableIds:t,transaction:n,...s}=_.getListenerStats();return s}};var oe,ae;return oe={Table:[1,1],[c]:[0,1],[u]:[0,5],[d]:[1,2],[h]:[0,2],[f]:[1,3]},ae=([e,t],n)=>{v(e?["get","has","forEach"]:["get"],(e=>re[e+i+n]=(...t)=>_[e+n](...t))),re["add"+i+n+a]=(...e)=>{return _["add"+n+a](...(s=e,0,r=t,s.slice(0,r)),((n,...s)=>e[t](re,...s)));var s,r}},((e,t)=>{e.map(t)})(N.entries(oe),(([e,t])=>ae(t,e))),P(re)})(e)),o.get(e))})();e.createQueries=U},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TinyBaseQueries={});
