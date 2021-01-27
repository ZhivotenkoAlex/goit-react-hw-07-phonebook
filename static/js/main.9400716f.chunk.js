(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={form:"NameForm_form__-MRV4",container:"NameForm_container__lO4b1",label:"NameForm_label__RaiAb",input:"NameForm_input__1k-x0",button:"NameForm_button__3qDyw"}},15:function(t,e,n){t.exports={container:"ContactList_container__2Ue1T",name:"ContactList_name__2tMOL",button:"ContactList_button__29KBr"}},43:function(t,e,n){t.exports={label:"Filter_label__e-15E"}},44:function(t,e,n){t.exports={container:"Container_container__1W9pF"}},52:function(t,e,n){},89:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(18),i=n.n(o),u=(n(52),n(15)),b=n.n(u),s=n(9),l=n(16),j=n.n(l),O=n(3),d=Object(O.b)("phonebook/addContactRequest"),f=Object(O.b)("phonebook/addContactSuccsess"),h=Object(O.b)("phonebook/addContactError"),m=Object(O.b)("phonebook/deleteContactRequest"),p=Object(O.b)("phonebook/deleteContactSuccsess"),x=Object(O.b)("phonebook/deleteContactError"),v=Object(O.b)("phonebook/fetchContactRequest"),_=Object(O.b)("phonebook/fetchContactSuccsess"),C=Object(O.b)("phonebook/fetchContactError"),N=Object(O.b)("phonebook/changeFilter");j.a.defaults.baseURL="http://localhost:4000";var k=n(19),g=function(t){return t.contacts.items},y=function(t){return t.contacts.filter},w=function(t){return t.contacts.error},F=Object(k.a)([g,y],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){var e=t.name;return e&&e.toLowerCase().includes(n)}))})),L=n(41),S=n(25),E=n(42),R=n.n(E);function A(){var t=Object(L.a)(["\n  display: block;\n  margin: 0 auto;"]);return A=function(){return t},t}var q=Object(S.css)(A());var M=function(){return Object(c.jsx)(R.a,{color:"#4a4a4a",loading:!0,css:q,size:150})};var T=function(){var t=Object(s.c)(F),e=Object(s.c)(w),n=Object(s.b)(),r=function(t){return n((e=t,function(t){t(m()),j.a.delete("./Contactlist/".concat(e)).then((function(){return t(p(e))})).catch((function(e){return t(x(e))}))}));var e};return Object(a.useEffect)((function(){n((function(t){t(v()),j.a.get("/Contactlist").then((function(e){var n=e.data;return t(_(n))})).catch((function(e){return t(C(e))}))}))}),[n]),t.length>0&&!e?Object(c.jsx)("ul",{children:t.map((function(t){var e=t.id,n=t.name,a=t.phone;return Object(c.jsxs)("li",{className:b.a.container,children:[Object(c.jsx)("p",{className:b.a.name,children:n}),Object(c.jsx)("p",{className:b.a.name,children:a}),Object(c.jsx)("button",{className:b.a.button,type:"button",onClick:function(){return r(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))}):0!==t.length||e?e?Object(c.jsxs)("div",{children:[e&&Object(c.jsx)("h2",{children:e.message}),Object(c.jsx)("p",{children:"\u0429\u0430 \u0433\u043b\u044f\u043d\u0443.\u041d\u0430\u0432\u0435\u0440\u043d\u043e\u0435 \u0441\u043d\u043e\u0432\u0430 \u043a\u043e\u0442 \u043f\u0440\u043e\u0432\u043e\u0434\u0430 \u043f\u043e\u0433\u0440\u044b\u0437!"})]}):Object(c.jsx)(M,{}):Object(c.jsxs)("div",{children:[Object(c.jsx)(M,{}),Object(c.jsx)("p",{children:"\u041d\u0443 \u0434\u0430\u0432\u0430\u0439 \u043f\u043e\u0434\u043e\u0436\u0435\u043c!"})]})},z=n(30),B=n(27),D=n.n(B),J=n(12),P=n.n(J);function U(){var t=Object(s.c)(g),e=Object(s.b)(),n=Object(a.useState)(""),r=Object(z.a)(n,2),o=r[0],i=r[1],u=Object(a.useState)(""),b=Object(z.a)(u,2),l=b[0],O=b[1],m=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":i(c);break;case"phone":O(c);break;default:return}},p=D.a.generate(),x=D.a.generate();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("form",{className:P.a.form,onSubmit:function(n){n.preventDefault(),!function(e){return t.find((function(t){return t.name&&t.name.toLowerCase()===e.toLowerCase()}))}(o)?!function(e){return t.find((function(t){return t.phone===e}))}(l)?""===o.trim()||""===l.trim()?alert("All of inputs must be not empty"):e(function(t,e){return function(n){var c={name:t,phone:e};n(d()),j.a.post("/Contactlist",c).then((function(t){var e=t.data;return n(f(e))})).catch((function(t){return n(h(t))}))}}(o,l)):alert("".concat(l," is already added.")):alert("".concat(o," is already added.")),i(""),O("")},children:Object(c.jsxs)("div",{className:P.a.container,children:[Object(c.jsxs)("label",{className:P.a.label,children:["Name",Object(c.jsx)("input",{type:"text",name:"name",value:o,onChange:m,id:p})]}),Object(c.jsxs)("label",{className:P.a.label,children:["Phone",Object(c.jsx)("input",{type:"text",name:"phone",value:l,onChange:m,id:x})]}),Object(c.jsx)("button",{className:P.a.button,type:"submit",children:"Add contact"})]})})})}var I=n(43),K=n.n(I);function V(){var t=Object(s.c)(y),e=Object(s.b)();return Object(c.jsxs)("label",{className:K.a.label,children:["Name filter",Object(c.jsx)("input",{type:"text",value:t,onChange:function(t){return e(N(t.target.value))}})]})}var W=n(44),G=n.n(W);var H=function(t){var e=t.children;return Object(c.jsx)("div",{className:G.a.container,children:e})};n(89);function Q(){return Object(c.jsxs)(H,{children:[Object(c.jsx)("h1",{className:"title",children:" Phonebook "}),Object(c.jsx)("h2",{className:"subtitle",children:"Add new contact"}),Object(c.jsx)(U,{}),Object(c.jsx)("h2",{className:"subtitle",children:"Find contact"}),Object(c.jsx)(V,{}),Object(c.jsx)("h2",{className:"subtitle",children:"Contact list"}),Object(c.jsx)(T,{})]})}var X,Y,Z,$=n(46),tt=n(21),et=n(45),nt=n.n(et),ct=n(10),at=n(4),rt=n(5),ot=Object(O.c)([],(X={},Object(at.a)(X,_,(function(t,e){return e.payload})),Object(at.a)(X,f,(function(t,e){var n=e.payload;return[].concat(Object(tt.a)(t),[n])})),Object(at.a)(X,p,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),X)),it=Object(O.c)(!1,(Y={},Object(at.a)(Y,v,(function(){return!0})),Object(at.a)(Y,_,(function(){return!1})),Object(at.a)(Y,C,(function(){return!1})),Object(at.a)(Y,d,(function(){return!0})),Object(at.a)(Y,f,(function(){return!1})),Object(at.a)(Y,h,(function(){return!1})),Object(at.a)(Y,m,(function(){return!0})),Object(at.a)(Y,p,(function(){return!1})),Object(at.a)(Y,x,(function(){return!1})),Y)),ut=Object(O.c)("",Object(at.a)({},N,(function(t,e){return e.payload}))),bt=Object(O.c)(null,(Z={},Object(at.a)(Z,C,(function(t,e){return e.payload})),Object(at.a)(Z,v,(function(){return null})),Object(at.a)(Z,d,(function(){return null})),Object(at.a)(Z,m,(function(){return null})),Object(at.a)(Z,x,(function(t,e){return e.payload})),Object(at.a)(Z,h,(function(t,e){return e.payload})),Z)),st=Object(rt.c)({items:ot,filter:ut,loading:it,error:bt}),lt=[].concat(Object(tt.a)(Object(O.d)({serializableCheck:{ignoredActions:[ct.a,ct.f,ct.b,ct.c,ct.d,ct.e]}})),[nt.a]),jt=Object(O.a)({reducer:{contacts:st},middleware:lt,devTools:!1});i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{store:jt,children:Object(c.jsx)($.a,{children:Object(c.jsx)(Q,{})})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.9400716f.chunk.js.map