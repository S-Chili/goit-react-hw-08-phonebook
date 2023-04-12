"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{277:function(e,o,a){a.r(o),a.d(o,{default:function(){return q}});var t=a(7902),n=a(179),r=a(2791),i=a(7462),s=a(3366),c=a(8182),d=a(4419),l=a(7630),v=a(1046),u=a(5527),m=a(5878),f=a(1217);function p(e){return(0,f.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var Z=a(184),g=["className","raised"],h=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{overflow:"hidden"}})),b=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiCard"}),t=a.className,n=a.raised,r=void 0!==n&&n,l=(0,s.Z)(a,g),u=(0,i.Z)({},a,{raised:r}),m=function(e){var o=e.classes;return(0,d.Z)({root:["root"]},p,o)}(u);return(0,Z.jsx)(h,(0,i.Z)({className:(0,c.Z)(m.root,t),elevation:r?8:void 0,ref:o,ownerState:u},l))}));function C(e){return(0,f.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);var M=["className","component"],w=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiCardContent"}),t=a.className,n=a.component,r=void 0===n?"div":n,l=(0,s.Z)(a,M),u=(0,i.Z)({},a,{component:r}),m=function(e){var o=e.classes;return(0,d.Z)({root:["root"]},C,o)}(u);return(0,Z.jsx)(w,(0,i.Z)({as:r,className:(0,c.Z)(m.root,t),ownerState:u,ref:o},l))}));function k(e){return(0,f.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);var y=["children","className","component","image","src","style"],R=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState,t=a.isMediaComponent,n=a.isImageComponent;return[o.root,t&&o.media,n&&o.img]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})})),j=["video","audio","picture","iframe","img"],N=["picture","img"],P=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiCardMedia"}),t=a.children,n=a.className,r=a.component,l=void 0===r?"div":r,u=a.image,m=a.src,f=a.style,p=(0,s.Z)(a,y),g=-1!==j.indexOf(l),h=!g&&u?(0,i.Z)({backgroundImage:'url("'.concat(u,'")')},f):f,b=(0,i.Z)({},a,{component:l,isMediaComponent:g,isImageComponent:-1!==N.indexOf(l)}),C=function(e){var o=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,d.Z)(a,k,o)}(b);return(0,Z.jsx)(R,(0,i.Z)({className:(0,c.Z)(C.root,n),as:l,role:!g&&u?"img":void 0,ref:o,style:h,ownerState:b,src:g?u||m:void 0},p,{children:t}))})),S=a(890),q=function(){return(0,Z.jsxs)(b,{sx:{maxWidth:345},children:[(0,Z.jsx)(P,{component:"img",alt:"green iguana",height:"140",image:"https://pixabay.com/get/g28e1b078a4614b87e1161f26cead0945636ee1ea0a4f67fe882e0667d7caf5c3dcd7fca528bcaf23c9b9dba06c222d4f9e442b500df305982765ef95d41a137a_1280.jpg"}),(0,Z.jsxs)(x,{children:[(0,Z.jsx)(S.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"PhoneBook"}),(0,Z.jsxs)(S.Z,{variant:"body2",color:"text.secondary",children:["Take advantage of the excellent opportunity - to have a place where you can store all your contacts - without losing them, a place - which will not take up a single MB in your device's memory. SAFETY and QUALITY are our main indicators. \u0421lick on the symbol ",(0,Z.jsx)(t.Z,{})," for quick registration, or on the symbol ",(0,Z.jsx)(n.Z,{})," for logging into the account. Pleasant use!"]})]})]})}},5527:function(e,o,a){a.d(o,{Z:function(){return h}});var t=a(3366),n=a(7462),r=a(2791),i=a(8182),s=a(4419),c=a(2065),d=a(7630),l=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},v=a(1046),u=a(5878),m=a(1217);function f(e){return(0,m.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=a(184),Z=["className","component","elevation","square","variant"],g=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[o.root,o[a.variant],!a.square&&o.rounded,"elevation"===a.variant&&o["elevation".concat(a.elevation)]]}})((function(e){var o,a=e.theme,t=e.ownerState;return(0,n.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!t.square&&{borderRadius:a.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat((a.vars||a).palette.divider)},"elevation"===t.variant&&(0,n.Z)({boxShadow:(a.vars||a).shadows[t.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",l(t.elevation)),", ").concat((0,c.Fq)("#fff",l(t.elevation)),")")},a.vars&&{backgroundImage:null==(o=a.vars.overlays)?void 0:o[t.elevation]}))})),h=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiPaper"}),r=a.className,c=a.component,d=void 0===c?"div":c,l=a.elevation,u=void 0===l?1:l,m=a.square,h=void 0!==m&&m,b=a.variant,C=void 0===b?"elevation":b,M=(0,t.Z)(a,Z),w=(0,n.Z)({},a,{component:d,elevation:u,square:h,variant:C}),x=function(e){var o=e.square,a=e.elevation,t=e.variant,n=e.classes,r={root:["root",t,!o&&"rounded","elevation"===t&&"elevation".concat(a)]};return(0,s.Z)(r,f,n)}(w);return(0,p.jsx)(g,(0,n.Z)({as:d,ownerState:w,className:(0,i.Z)(x.root,r),ref:o},M))}))}}]);
//# sourceMappingURL=277.59bcbd07.chunk.js.map