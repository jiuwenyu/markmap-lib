import{d as t,e as n,k as a,s as e,f as s,S as r,y as c,z as i,A as o,B as l,C as u,o as f,D as v,m,n as d,E as p,F as h,p as g,q as k,G as w,H as j,P as y,M as x,Q as D,T as E,b,I as R,J as V,K as I,t as M,u as $,i as T,j as A,U as C,x as H,V as S,W as U,v as P,w as G}from"./client.e038c7a1.js";import{M as L,t as q,d as F}from"./markmap.f8cc1e31.js";import"./defineProperty.b786bad4.js";function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var N=C.document;function O(t){var n,a,e,s,r,M,$,T,A,C,P,G,q,F,J,O,z,B,K,Q,W,X,Y,Z;function _(n){t[8].call(null,n)}function tt(n){t[9].call(null,n)}var nt={content:t[2]};void 0!==t[1]&&(nt.el=t[1]),void 0!==t[3]&&(nt.onReset=t[3]);var at=new L({props:nt});return H.push((function(){return S(at,"el",_)})),H.push((function(){return S(at,"onReset",tt)})),{c:function(){n=c(),a=i("h1"),e=o("Markmap"),s=c(),r=i("div"),M=i("div"),$=i("div"),T=c(),A=i("div"),C=i("div"),l(at.$$.fragment),q=c(),F=i("div"),J=i("a"),O=o("Reset"),z=c(),B=i("a"),K=o("Download as SVG"),Q=c(),W=i("a"),X=o("Download as interactive HTML"),this.h()},l:function(t){u('[data-svelte="svelte-r18bnt"]',N.head).forEach(f),n=v(t),a=m(t,"H1",{});var c=d(a);e=p(c,"Markmap"),c.forEach(f),s=v(t),r=m(t,"DIV",{class:!0});var i=d(r);M=m(i,"DIV",{class:!0});var o=d(M);$=m(o,"DIV",{class:!0}),d($).forEach(f),o.forEach(f),T=v(i),A=m(i,"DIV",{class:!0});var l=d(A);C=m(l,"DIV",{class:!0});var g=d(C);h(at.$$.fragment,g),g.forEach(f),q=v(l),F=m(l,"DIV",{class:!0});var k=d(F);J=m(k,"A",{class:!0});var w=d(J);O=p(w,"Reset"),w.forEach(f),z=v(k),B=m(k,"A",{class:!0});var j=d(B);K=p(j,"Download as SVG"),j.forEach(f),Q=v(k),W=m(k,"A",{class:!0});var y=d(W);X=p(y,"Download as interactive HTML"),y.forEach(f),k.forEach(f),l.forEach(f),i.forEach(f),this.h()},h:function(){N.title="Try Markmap",g($,"class","editor svelte-jtiv17"),g(M,"class","flex-1 svelte-jtiv17"),g(C,"class","flex-1 mindmap svelte-jtiv17"),g(J,"class","svelte-jtiv17"),g(B,"class","svelte-jtiv17"),g(W,"class","svelte-jtiv17"),g(F,"class","buttons svelte-jtiv17"),g(A,"class","flex-1 d-flex flex-column svelte-jtiv17"),g(r,"class","d-flex svelte-jtiv17")},m:function(c,i,o){k(c,n,i),k(c,a,i),w(a,e),k(c,s,i),k(c,r,i),w(r,M),w(M,$),t[7]($),w(r,T),w(r,A),w(A,C),j(at,C,null),w(A,q),w(A,F),w(F,J),w(J,O),w(F,z),w(F,B),w(B,K),w(F,Q),w(F,W),w(W,X),Y=!0,o&&y(Z),Z=[x(J,"click",D((function(){E(t[3])&&t[3].apply(this,arguments)}))),x(B,"click",D(t[4])),x(W,"click",D(t[5]))]},p:function(n,a){var e=b(a,1)[0];t=n;var s={};4&e&&(s.content=t[2]),!P&&2&e&&(P=!0,s.el=t[1],U((function(){return P=!1}))),!G&&8&e&&(G=!0,s.onReset=t[3],U((function(){return G=!1}))),at.$set(s)},i:function(t){Y||(R(at.$$.fragment,t),Y=!0)},o:function(t){V(at.$$.fragment,t),Y=!1},d:function(e){e&&f(n),e&&f(a),e&&f(s),e&&f(r),t[7](null),I(at),y(Z)}}}function z(t,n){var a=document.createElement("a");a.download=t,a.href=n,a.click()}function B(t,n,a){var e,s,r,c,i;return M(P(G.mark((function t(){var n,s,i;return G.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(){a(2,c=r.getValue())},t.next=3,import("./codemirror.771582ca.js");case 3:return n=t.sent,s=n.default,t.next=7,import("./markdown.e2440b2a.js");case 7:(r=s(e,{lineNumbers:!0,mode:"markdown",value:"# fruits\n\n- banana\n- mango\n- melon\n- orange\n"})).on("change",F(i,500)),i();case 10:case"end":return t.stop()}}),t)})))),$(P(G.mark((function t(){return G.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=null;case 1:case"end":return t.stop()}}),t)})))),[e,s,c,i,function(){var t=s.outerHTML;z("markmap.svg","data:image/svg;utf8,"+encodeURIComponent(t))},function(){var t=q(c||""),n='<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n<script src="https://cdn.jsdelivr.net/npm/d3@5"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/markmap-lib@0.4/dist/view.min.js"><\/script>\n</head>\n<body>\n<svg id="mindmap"></svg>\n<script>markmap.markmap(\'svg#mindmap\', {/* data */}).fit()<\/script>\n</body>\n</html>\n'.replace("{/* data */}",JSON.stringify(t));z("markmap.html","data:text/html;utf8,"+encodeURIComponent(n))},r,function(t){H[t?"unshift":"push"]((function(){a(0,e=t)}))},function(t){a(1,s=t)},function(t){a(3,i=t)}]}var K=function(c){t(l,r);var i,o=(i=l,function(){var t,n=T(i);if(J()){var a=T(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return A(this,t)});function l(t){var r;return n(this,l),r=o.call(this),a(s(r),t,B,O,e,{}),r}return l}();export default K;