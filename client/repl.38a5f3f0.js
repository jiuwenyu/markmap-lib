import{S as a,i as t,s,k as n,l as e,t as l,m as c,q as i,e as o,p as r,b as m,d,r as v,u as f,f as p,g as h,v as u,w as g,E as k,B as j,F as w,G as E,x as b,y,z as D,o as x,h as I,H as V,j as $,I as M,J as R}from"./client.5619b728.js";import{M as T,t as H,d as A}from"./markmap.94263f6f.js";const{document:C}=V;function S(a){let t,s,x,I,V,H,A,S,U,G,L,q,F,J,N,O,z,B,P,X,Y,K,Q,W;function Z(t){a[8].call(null,t)}function _(t){a[9].call(null,t)}let aa={content:a[2]};void 0!==a[1]&&(aa.el=a[1]),void 0!==a[3]&&(aa.onReset=a[3]);const ta=new T({props:aa});return $.push(()=>M(ta,"el",Z)),$.push(()=>M(ta,"onReset",_)),{c(){t=n(),s=e("h1"),x=l("Markmap"),I=n(),V=e("div"),H=e("div"),A=e("div"),S=n(),U=e("div"),G=e("div"),c(ta.$$.fragment),F=n(),J=e("div"),N=e("a"),O=l("Reset"),z=n(),B=e("a"),P=l("Download as SVG"),X=n(),Y=e("a"),K=l("Download as interactive HTML"),this.h()},l(a){i('[data-svelte="svelte-r18bnt"]',C.head).forEach(o),t=r(a),s=m(a,"H1",{});var n=d(s);x=v(n,"Markmap"),n.forEach(o),I=r(a),V=m(a,"DIV",{class:!0});var e=d(V);H=m(e,"DIV",{class:!0});var l=d(H);A=m(l,"DIV",{class:!0}),d(A).forEach(o),l.forEach(o),S=r(e),U=m(e,"DIV",{class:!0});var c=d(U);G=m(c,"DIV",{class:!0});var p=d(G);f(ta.$$.fragment,p),p.forEach(o),F=r(c),J=m(c,"DIV",{class:!0});var h=d(J);N=m(h,"A",{class:!0});var u=d(N);O=v(u,"Reset"),u.forEach(o),z=r(h),B=m(h,"A",{class:!0});var g=d(B);P=v(g,"Download as SVG"),g.forEach(o),X=r(h),Y=m(h,"A",{class:!0});var k=d(Y);K=v(k,"Download as interactive HTML"),k.forEach(o),h.forEach(o),c.forEach(o),e.forEach(o),this.h()},h(){C.title="Try Markmap",p(A,"class","editor svelte-jtiv17"),p(H,"class","flex-1 svelte-jtiv17"),p(G,"class","flex-1 mindmap svelte-jtiv17"),p(N,"class","svelte-jtiv17"),p(B,"class","svelte-jtiv17"),p(Y,"class","svelte-jtiv17"),p(J,"class","buttons svelte-jtiv17"),p(U,"class","flex-1 d-flex flex-column svelte-jtiv17"),p(V,"class","d-flex svelte-jtiv17")},m(n,e,l){h(n,t,e),h(n,s,e),u(s,x),h(n,I,e),h(n,V,e),u(V,H),u(H,A),a[7](A),u(V,S),u(V,U),u(U,G),g(ta,G,null),u(U,F),u(U,J),u(J,N),u(N,O),u(J,z),u(J,B),u(B,P),u(J,X),u(J,Y),u(Y,K),Q=!0,l&&k(W),W=[j(N,"click",w((function(){E(a[3])&&a[3].apply(this,arguments)}))),j(B,"click",w(a[4])),j(Y,"click",w(a[5]))]},p(t,[s]){a=t;const n={};4&s&&(n.content=a[2]),!L&&2&s&&(L=!0,n.el=a[1],R(()=>L=!1)),!q&&8&s&&(q=!0,n.onReset=a[3],R(()=>q=!1)),ta.$set(n)},i(a){Q||(b(ta.$$.fragment,a),Q=!0)},o(a){y(ta.$$.fragment,a),Q=!1},d(n){n&&o(t),n&&o(s),n&&o(I),n&&o(V),a[7](null),D(ta),k(W)}}}function U(a,t){const s=document.createElement("a");s.download=a,s.href=t,s.click()}function G(a,t,s){let n,e,l,c,i;return x(async()=>{const{default:a}=await import("./codemirror.4badf6b9.js");function t(){s(2,c=l.getValue())}await import("./markdown.d4267659.js"),l=a(n,{lineNumbers:!0,mode:"markdown",value:"# fruits\n\n- banana\n- mango\n- melon\n- orange\n"}),l.on("change",A(t,500)),t()}),I(async()=>{l=null}),[n,e,c,i,function(){const a=e.outerHTML;U("markmap.svg","data:image/svg;utf8,"+encodeURIComponent(a))},function(){const a=H(c||""),t='<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n<script src="https://cdn.jsdelivr.net/npm/d3@5"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/markmap-lib@0.4/dist/view.min.js"><\/script>\n</head>\n<body>\n<svg id="mindmap"></svg>\n<script>markmap.markmap(\'svg#mindmap\', {/* data */}).fit()<\/script>\n</body>\n</html>\n'.replace("{/* data */}",JSON.stringify(a));U("markmap.html","data:text/html;utf8,"+encodeURIComponent(t))},l,function(a){$[a?"unshift":"push"](()=>{s(0,n=a)})},function(a){e=a,s(1,e)},function(a){i=a,s(3,i)}]}export default class extends a{constructor(a){super(),t(this,a,G,S,s,{})}}
