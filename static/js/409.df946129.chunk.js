"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[409],{409:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var a=n(439),s=n(791),r=n(434),c="ContactForm_contactForm__y0Rca",o="ContactForm_label__-cVXI",i="ContactForm_input__Bl93P",l="ContactForm_button__eSwX9",u=n(984),d=n(52),m=n(184),_=function(){var e=(0,s.useState)(""),t=(0,a.Z)(e,2),n=t[0],_=t[1],h=(0,s.useState)(""),p=(0,a.Z)(h,2),f=p[0],C=p[1],x=(0,r.v9)((function(e){return e.contacts.items})),b=(0,r.I0)(),j=function(e){switch(e.target.name){case"name":_(e.target.value);break;case"phone":C(e.target.value)}},v=function(){_(""),C("")};return(0,m.jsxs)("form",{className:c,onSubmit:function(e){if(e.preventDefault(),!x.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return v(),b((0,d.uK)({name:n,phone:f,id:(0,u.x0)()}));alert("".concat(n," is already in contacts"))},children:[(0,m.jsxs)("label",{className:o,children:["Name",(0,m.jsx)("input",{className:i,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,name:"name",value:n,onChange:j,placeholder:"Rosie Simpson"})]}),(0,m.jsxs)("label",{className:o,children:["Number",(0,m.jsx)("input",{className:i,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,name:"phone",value:f,onChange:j,placeholder:"459-12-56"})]}),(0,m.jsx)("button",{type:"submit",className:l,children:"Add contact"})]})},h=n(634),p="Filter_label__vEd1E",f="Filter_filter__vxThR",C=function(){var e=(0,r.v9)((function(e){return e.filter})),t=(0,r.I0)();return(0,m.jsxs)("label",{className:p,children:["Find contact by name",(0,m.jsx)("input",{type:"name",value:e,onChange:function(e){return t((0,h.M)(e.target.value))},className:f})]})},x="ContactItem_text__6hT0E",b="ContactItem_button__IRFBz",j=function(e){var t=e.id,n=e.name,a=e.phone,s=e.onDeleteContact;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("p",{className:x,children:[n,": ",a]}),(0,m.jsx)("button",{className:b,type:"submit",onClick:function(){return s(t)},children:"Delete"})]})},v="ContactList_contacts__jDmyV",N="ContactList_item__EZYHO",g="ContactList_loading__QJfkF",w="ContactList_contactsList__7leRd",F=n(643),y=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(F.Z1,{height:"40",width:"40",color:"blue",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})},L=function(){var e=(0,r.v9)((function(e){return e.contacts.items})),t=(0,r.v9)((function(e){return e.filter})),n=(0,r.v9)((function(e){return e.contacts.isLoading})),a=(0,r.I0)();(0,s.useEffect)((function(){a((0,d.yF)())}),[a]);var c=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),o=function(e){return a((0,d.GK)(e))};return n&&(0,m.jsxs)("div",{className:v,children:[n&&(0,m.jsxs)("div",{className:g,children:["Loading...",(0,m.jsx)(y,{})]}),(0,m.jsx)("ul",{className:w,children:c.map((function(e){var t=e.id,n=e.name,a=e.phone;return(0,m.jsx)("li",{className:N,children:(0,m.jsx)(j,{id:t,name:n,phone:a,onDeleteContact:o})},t)}))})]})},k="Contacts_phonebook__G9bQK",I="Contacts_title__LxdN4",Z="Contacts_contacts__gVK0J",A=function(){return(0,m.jsxs)("div",{className:k,children:[(0,m.jsx)("h2",{className:I,children:"Phonebook"}),(0,m.jsx)(_,{}),(0,m.jsx)("h3",{className:Z,children:"Contacts"}),(0,m.jsx)(C,{}),(0,m.jsx)(L,{})]})}}}]);
//# sourceMappingURL=409.df946129.chunk.js.map