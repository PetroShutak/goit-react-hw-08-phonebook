"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[141],{1185:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,a,i,o,s=t(8379),c=t(9439),l=t(2791),d=t(9434),x=t(3634),u=t(5206),h=t(3736),m=t(7426),f=t(4554),p=t(890),v=function(n){return n.contacts.contacts},j=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},g=function(n){return n.filter},y=t(184),b=function(){var n=(0,l.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),i=(0,c.Z)(a,2),o=i[0],s=i[1],j=(0,d.v9)(v),g=(0,d.v9)(Z),b=function(n){var e=n.target,t=e.name,a=e.value;"name"===t?r(a):s(a)},C=(0,d.I0)(),w=function(){r(""),s("")};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(f.Z,{sx:{marginTop:"1rem",display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"400px",margin:"0 auto"},children:[g&&(0,y.jsx)(p.Z,{variant:"body2",color:"error",gutterBottom:!0,children:"Failed to load contacts. Please try again later."}),(0,y.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""!==t.trim()&&""!==o.trim()){if(j.some((function(n){return n.name.toLowerCase()===t.toLowerCase()})))return void u.Am.error("".concat(t," is already in contacts."));if(g)return void u.Am.error("Failed to load contacts. Please try again later.");C((0,x.uK)({name:t,number:o})),u.Am.success("".concat(t," added to contacts.")),w()}},style:{width:"100%"},children:[(0,y.jsx)(m.Z,{type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:b,required:!0,fullWidth:!0,margin:"normal"}),(0,y.jsx)(m.Z,{type:"tel",name:"number",label:"Number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:o,onChange:b,required:!0,fullWidth:!0,margin:"normal"}),(0,y.jsx)(h.Z,{type:"submit",variant:"contained",sx:{width:"40%"},children:"Add Contact"})]})]})})},C=t(3457),w=t(168),z=t(8789),k=z.ZP.div(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=z.ZP.div(a||(a=(0,w.Z)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 4px;\n"]))),L=z.ZP.div(i||(i=(0,w.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n"]))),P=(z.ZP.button(o||(o=(0,w.Z)(["\n  margin-left: 10px;\n"]))),(0,C.Z)(L)({justifyContent:"flex-end"})),I=(0,C.Z)(h.Z)({marginLeft:"10px"}),F=function(n){var e=n.contact,t=n.onCancel,r=(0,d.I0)();return(0,y.jsx)(k,{children:(0,y.jsxs)(A,{children:[(0,y.jsx)(p.Z,{variant:"body1",children:"Are you sure you want to delete this contact?"}),(0,y.jsxs)(P,{children:[(0,y.jsx)(I,{variant:"contained",color:"error",onClick:function(){r((0,x.GK)(e.id)),x.GK&&u.Am.success("".concat(e.name," deleted")),t()},children:"Delete"}),(0,y.jsx)(I,{variant:"contained",onClick:t,children:"Cancel"})]})]})})},S=t(501),B=t(2716),D=t(7247),M=function(n){var e=n.contact,t=(0,l.useState)(!1),r=(0,c.Z)(t,2),a=r[0],i=r[1];return(0,y.jsxs)(f.Z,{sx:{marginBottom:"10px",display:"flex"},children:[(0,y.jsxs)(f.Z,{sx:{flex:"1",display:"flex",alignItems:"center"},children:[(0,y.jsx)(S.Z,{sx:{marginRight:"5px"}}),(0,y.jsx)(p.Z,{variant:"h6",children:e.name})]}),(0,y.jsxs)(f.Z,{sx:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,y.jsx)(B.Z,{sx:{marginRight:"5px"}}),(0,y.jsx)(p.Z,{variant:"body1",children:e.number})]}),(0,y.jsx)(f.Z,{children:(0,y.jsx)(h.Z,{variant:"contained",color:"error",startIcon:(0,y.jsx)(D.Z,{}),onClick:function(){i(!0)},style:{position:"relative"},children:"Delete"})}),a&&(0,y.jsx)(F,{contact:e,onCancel:function(){i(!1)}})]})},_=t(7225),W=t(3239),K=t(5403),N=function(){var n=(0,d.I0)(),e=(0,d.v9)(v),t=(0,d.v9)(g),r=(0,d.v9)(j);if((0,l.useEffect)((function(){n((0,x.yF)())}),[n]),!e)return(0,y.jsx)(W.Z,{});var a=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,y.jsxs)(f.Z,{sx:{padding:"20px"},children:[(0,y.jsxs)(p.Z,{variant:"h5",sx:{marginBottom:"20px"},children:[(0,y.jsx)(K.Z,{sx:{marginRight:"10px"}}),"Contact List"]}),(0,y.jsx)(_.Z,{children:a.map((function(n){return(0,y.jsx)(M,{contact:n},n.id)}))}),r&&(0,y.jsxs)(f.Z,{sx:{display:"flex",justifyContent:"center",marginTop:"20px"},children:[(0,y.jsx)(W.Z,{size:20}),(0,y.jsx)(p.Z,{variant:"body2",sx:{marginLeft:"10px"},children:"Updating list..."})]})]})},R=t(4808),T=function(){var n=(0,d.I0)();return(0,y.jsxs)(f.Z,{sx:{marginBottom:"1rem",maxWidth:"300px"},children:[(0,y.jsx)(p.Z,{variant:"body1",gutterBottom:!0,children:"Find contacts by name:"}),(0,y.jsx)(m.Z,{type:"text",onChange:function(e){var t=e.target.value;n((0,R.Tv)(t))},placeholder:"search...",margin:"normal"})]})},V=function(){return(0,y.jsx)(s.Z,{hideFooter:!0,children:(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[(0,y.jsx)("section",{children:(0,y.jsx)(b,{})}),(0,y.jsx)("section",{children:(0,y.jsx)(T,{})}),(0,y.jsx)("section",{children:(0,y.jsx)(N,{})})]})})}},7247:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o},501:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");e.Z=o},2716:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");e.Z=o},5403:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=o}}]);
//# sourceMappingURL=contacts-page.d91a3144.chunk.js.map