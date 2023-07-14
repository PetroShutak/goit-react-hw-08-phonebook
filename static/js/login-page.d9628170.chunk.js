"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[88],{8569:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(5861),a=n(9439),i=n(4687),o=n.n(i),s=n(2791),u=n(9434),d=n(9273),c=n(3736),l=n(7426),m=n(4554),p=n(9164),x=n(890),h=n(1087),f=n(184),v=function(){var e=(0,u.I0)(),t=(0,s.useState)(""),n=(0,a.Z)(t,2),i=n[0],v=n[1],b=(0,s.useState)(""),g=(0,a.Z)(b,2),Z=g[0],w=g[1],k=(0,s.useState)(""),W=(0,a.Z)(k,2),S=W[0],j=W[1],y=function(){var t=(0,r.Z)(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),i&&Z){t.next=4;break}return j("Please fill in all fields"),t.abrupt("return");case 4:return t.prev=4,t.next=7,e((0,d.Ib)({email:i,password:Z}));case 7:v(""),w(""),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),j("Invalid email or password");case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}();return(0,f.jsx)(p.Z,{maxWidth:"sm",children:(0,f.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"5rem"},children:[(0,f.jsx)(x.Z,{variant:"h4",gutterBottom:!0,children:"Login"}),S&&(0,f.jsx)(x.Z,{variant:"body2",color:"error",gutterBottom:!0,children:S}),(0,f.jsxs)(m.Z,{component:"form",onSubmit:y,autoComplete:"on",sx:{display:"flex",flexDirection:"column",width:"100%",maxWidth:"400px","& .MuiTextField-root":{marginBottom:"1rem"}},children:[(0,f.jsx)(l.Z,{type:"email",name:"email",value:i,onChange:function(e){v(e.target.value)},label:"Email",placeholder:"Enter email",required:!0}),(0,f.jsx)(l.Z,{type:"password",name:"password",value:Z,onChange:function(e){w(e.target.value)},label:"Password",placeholder:"Enter password",required:!0}),(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,f.jsx)(c.Z,{type:"submit",variant:"contained",sx:{width:"40%"},children:"Login"}),(0,f.jsx)(h.rU,{to:"/register",children:"Don't have an account? Sign Up"})]})]})]})})},b=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(v,{})})}},9164:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(4942),a=n(3366),i=n(7462),o=n(2791),s=n(8182),u=n(1122),d=n(1217),c=n(4419),l=n(7078),m=n(3457),p=n(5080),x=n(184),h=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,p.Z)(),v=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:f})},g=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,i=e.maxWidth,o={root:["root",i&&"maxWidth".concat((0,u.Z)(String(i))),r&&"fixed",a&&"disableGutters"]};return(0,c.Z)(o,(function(e){return(0,d.Z)(t,e)}),n)};var Z=n(4036),w=n(6934),k=n(1402),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,u=e.useThemeProps,d=void 0===u?b:u,c=e.componentName,l=void 0===c?"MuiContainer":c,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=o.forwardRef((function(e,t){var n=d(e),r=n.className,o=n.component,u=void 0===o?"div":o,c=n.disableGutters,p=void 0!==c&&c,f=n.fixed,v=void 0!==f&&f,b=n.maxWidth,Z=void 0===b?"lg":b,w=(0,a.Z)(n,h),k=(0,i.Z)({},n,{component:u,disableGutters:p,fixed:v,maxWidth:Z}),W=g(k,l);return(0,x.jsx)(m,(0,i.Z)({as:u,ownerState:k,className:(0,s.Z)(W.root,r),ref:t},w))}));return p}({createStyledComponent:(0,w.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),S=W}}]);
//# sourceMappingURL=login-page.d9628170.chunk.js.map