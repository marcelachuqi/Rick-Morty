(this.webpackJsonpmediacard=this.webpackJsonpmediacard||[]).push([[0],{15:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(16),o=c.n(s),r=c(14),i=c(2),l=(c(15),function(){return fetch("https://rickandmortyapi.com/documentation/#get-all-characters").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,species:e.species,image:e.image,id:e.id,planet:e.location.name,episodes:e.episode.length,status:e.status}}))}))}),j=c(7),d=c(0),u=function(e){return Object(d.jsx)(j.b,{className:"cartoon-link",to:"/cartoon/".concat(e.cartoon.id),children:Object(d.jsx)("li",{className:"cartoon-list-each",children:Object(d.jsxs)("div",{className:"cartoon-info",children:[Object(d.jsx)("img",{className:"cartoon-img",src:e.cartoon.image,alt:e.cartoon.name}),Object(d.jsxs)("h1",{children:[" ",e.cartoon.name," "]}),Object(d.jsxs)("p",{children:[" ",e.cartoon.species]})]})})})},m=function(e){var t=e.cartoons.map((function(e){return Object(d.jsx)(u,{cartoon:e},e.id)}));return Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"cartoon-list",children:t})})},b=c.p+"static/media/Logo.de13d484.png",h=function(e){return Object(d.jsxs)("form",{className:"form",children:[Object(d.jsx)("label",{htmlFor:"name",children:Object(d.jsx)("img",{className:"logo",src:b,alt:"logo"})}),Object(d.jsx)("input",{className:"filter",name:"name",type:"text",onChange:function(t){t.preventDefault(),e.handleChange({value:t.target.value,key:"name"})},value:e.cartoonFilter,placeholder:"Search a character"})]})},O=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.b,{className:"cartoon-link link-position",to:"/",children:"\u2190 Volver"}),Object(d.jsxs)("div",{className:"cartoon-detail",children:[Object(d.jsx)("img",{className:"logo",src:b,alt:"logo"}),Object(d.jsx)("img",{className:"cartoon-detail-img",src:e.cartoon.image,atl:e.cartoon.name}),Object(d.jsx)("h1",{children:e.cartoon.name}),Object(d.jsxs)("ul",{className:"cartoon-detail-list",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Status:"})," ",e.cartoon.status]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Specie:"})," ",e.cartoon.species]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Planet:"}),e.cartoon.planet]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Episodes:"})," ",e.cartoon.episodes]})]})]})]})},x=function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},g=function(e,t){localStorage.setItem(e,JSON.stringify(t))},p=c.p+"static/media/goback.17754509.png",f=c.p+"static/media/pagenotfound.27d4d955.png",N=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"not-found-img",src:f,alt:"notfound"}),Object(d.jsx)("p",{children:"\u26a0 Upss!...Parece que \xe9sta p\xe1gina no existe \u26a0"}),Object(d.jsx)(j.b,{className:"link-router",to:"/",children:Object(d.jsx)("p",{className:"cartoon-link-goback",children:"\u2190VOLVER"})})]})},k=function e(t){var c=Object(n.useState)(x("cartoons",[])),a=Object(r.a)(c,2),s=a[0],o=a[1],j=Object(n.useState)(x("cartoonFilter"," ")),u=Object(r.a)(j,2),b=u[0],f=u[1];Object(n.useEffect)((function(){0===s.length&&l().then((function(e){o(e)}))}),[]),Object(n.useEffect)((function(){g("cartoons",s)}),[s]),Object(n.useEffect)((function(){g("cartoons",s),g("cartoonFilter",b)}),[s,b]);var k=s.filter((function(e){return e.name.toUpperCase().includes(b.toUpperCase())})),v=function(){f("")};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsxs)(i.a,{exact:!0,path:"/",component:e,children:[Object(d.jsx)(h,{cartoonFilter:b,handleChange:function(e){"name"===e.key&&f(e.value)}}),0===k.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:['Upss! Parece que "',Object(d.jsx)("strong",{children:b}),'" no existe, intenta con otro personaje']}),Object(d.jsx)("img",{onClick:v,className:"go-back-img",src:p,alt:"goback"}),Object(d.jsx)("p",{onClick:v,className:"cartoon-link-goback",children:"\u2190go Back!"})]}):Object(d.jsx)(m,{cartoons:k})]}),Object(d.jsx)(i.a,{path:"/cartoon/:cartoonId",render:function(e){var t=parseInt(e.match.params.cartoonId),c=s.find((function(e){return e.id===t}));if(void 0!==c)return Object(d.jsx)(O,{cartoon:c})}}),Object(d.jsx)(i.a,{children:Object(d.jsx)(N,{})})]})})};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j.a,{children:Object(d.jsx)(k,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.703fe301.chunk.js.map