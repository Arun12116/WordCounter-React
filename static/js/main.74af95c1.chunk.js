(this.webpackJsonpnewtodolist=this.webpackJsonpnewtodolist||[]).push([[0],{28:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),o=t(16),n=t.n(o),l=t(8),i=t(0),r=function(e){var a=Object(c.useState)(""),t=Object(l.a)(a,2),s=t[0],o=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"white"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){o(e.target.value)},id:"myBox",rows:"4"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=s.toUpperCase();o(e)},children:"Convert To Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=s.toLowerCase();o(e)},children:"Convert To LowerCase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){o(""),alert("are you sure")},children:"clear"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"black"},children:[Object(i.jsx)("h1",{children:"Your text Summery"}),Object(i.jsxs)("p",{children:[s.split(" ").length," words and ",s.length,"Character"]}),Object(i.jsxs)("p",{children:[.008*s.split("").length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{color:"blue",children:s})]})]})},d=t(7),b=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(d.b,{className:"navbar-brand",to:"TextForm",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"About",children:e.about})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Contact-us"})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]}),Object(i.jsxs)("div",{className:"form-check form-switch m-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",for:"flexSwitchCheckDefault",children:"DarkMode"})]})]})]})})})},h=function(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),a=Object(l.a)(e,2),t=a[0],s=a[1],o=Object(c.useState)("Enable  dark mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",style:t,children:[Object(i.jsx)("h2",{children:"About-us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:t,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:t,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:t,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("button",{className:"btn btn-primary m-3",onClick:function(){"black"===t.color?(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable light mode")):(s({color:"black",backgroundColor:"white"}),d("Enable dark mode"))},children:r})})]})})},j=t(2),m=function(){var e=Object(c.useState)("light"),a=Object(l.a)(e,2),t=a[0],s=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{title:"Home",about:"About-us",mode:t,togglemode:function(){"light"===t?(s("dark"),document.body.style.backgroundColor="grey"):(s("light"),document.body.style.backgroundColor="white")}}),Object(i.jsx)("div",{className:"container my-3"}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/textForm",children:Object(i.jsx)(r,{})})]})]})})};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.74af95c1.chunk.js.map