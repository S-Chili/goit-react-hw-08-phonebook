"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{277:function(e,o,a){a.r(o),a.d(o,{default:function(){return I}});var t=a(7902),n=a(179),r=a(2791),i=a(7462),s=a(3366),l=a(8182),c=a(4419),d=a(7630),v=a(1046),u=a(5527),m=a(5878),p=a(1217);function f(e){return(0,p.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var Z=a(184),g=["className","raised"],h=(0,d.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{overflow:"hidden"}})),C=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiCard"}),t=a.className,n=a.raised,r=void 0!==n&&n,d=(0,s.Z)(a,g),u=(0,i.Z)({},a,{raised:r}),m=function(e){var o=e.classes;return(0,c.Z)({root:["root"]},f,o)}(u);return(0,Z.jsx)(h,(0,i.Z)({className:(0,l.Z)(m.root,t),elevation:r?8:void 0,ref:o,ownerState:u},d))}));function M(e){return(0,p.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);var w=["className","component"],b=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),k=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiCardContent"}),t=a.className,n=a.component,r=void 0===n?"div":n,d=(0,s.Z)(a,w),u=(0,i.Z)({},a,{component:r}),m=function(e){var o=e.classes;return(0,c.Z)({root:["root"]},M,o)}(u);return(0,Z.jsx)(b,(0,i.Z)({as:r,className:(0,l.Z)(m.root,t),ownerState:u,ref:o},d))}));function x(e){return(0,p.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);var y=["children","className","component","image","src","style"],R=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState,t=a.isMediaComponent,n=a.isImageComponent;return[o.root,t&&o.media,n&&o.img]}})((function(e){var o=e.ownerState;return(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})})),j=["video","audio","picture","iframe","img"],N=["picture","img"],P=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiCardMedia"}),t=a.children,n=a.className,r=a.component,d=void 0===r?"div":r,u=a.image,m=a.src,p=a.style,f=(0,s.Z)(a,y),g=-1!==j.indexOf(d),h=!g&&u?(0,i.Z)({backgroundImage:'url("'.concat(u,'")')},p):p,C=(0,i.Z)({},a,{component:d,isMediaComponent:g,isImageComponent:-1!==N.indexOf(d)}),M=function(e){var o=e.classes,a={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,c.Z)(a,x,o)}(C);return(0,Z.jsx)(R,(0,i.Z)({className:(0,l.Z)(M.root,n),as:d,role:!g&&u?"img":void 0,ref:o,style:h,ownerState:C,src:g?u||m:void 0},f,{children:t}))})),S=a(890),q=a(8660),I=function(){return(0,Z.jsxs)(C,{sx:{maxWidth:345},children:[(0,Z.jsx)(P,{component:"img",alt:"mramor",height:"140",image:q}),(0,Z.jsxs)(k,{children:[(0,Z.jsx)(S.Z,{gutterBottom:!0,variant:"h5",component:"div",children:"PhoneBook"}),(0,Z.jsxs)(S.Z,{variant:"body2",color:"text.secondary",children:["Take advantage of the excellent opportunity - to have a place where you can store all your contacts - without losing them, a place - which will not take up a single MB in your device's memory. SAFETY and QUALITY are our main indicators. \u0421lick on the symbol ",(0,Z.jsx)(t.Z,{})," for quick registration, or on the symbol ",(0,Z.jsx)(n.Z,{})," for logging into the account. Pleasant use!"]})]})]})}},5527:function(e,o,a){a.d(o,{Z:function(){return h}});var t=a(3366),n=a(7462),r=a(2791),i=a(8182),s=a(4419),l=a(2065),c=a(7630),d=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},v=a(1046),u=a(5878),m=a(1217);function p(e){return(0,m.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=a(184),Z=["className","component","elevation","square","variant"],g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[o.root,o[a.variant],!a.square&&o.rounded,"elevation"===a.variant&&o["elevation".concat(a.elevation)]]}})((function(e){var o,a=e.theme,t=e.ownerState;return(0,n.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!t.square&&{borderRadius:a.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat((a.vars||a).palette.divider)},"elevation"===t.variant&&(0,n.Z)({boxShadow:(a.vars||a).shadows[t.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",d(t.elevation)),", ").concat((0,l.Fq)("#fff",d(t.elevation)),")")},a.vars&&{backgroundImage:null==(o=a.vars.overlays)?void 0:o[t.elevation]}))})),h=r.forwardRef((function(e,o){var a=(0,v.Z)({props:e,name:"MuiPaper"}),r=a.className,l=a.component,c=void 0===l?"div":l,d=a.elevation,u=void 0===d?1:d,m=a.square,h=void 0!==m&&m,C=a.variant,M=void 0===C?"elevation":C,w=(0,t.Z)(a,Z),b=(0,n.Z)({},a,{component:c,elevation:u,square:h,variant:M}),k=function(e){var o=e.square,a=e.elevation,t=e.variant,n=e.classes,r={root:["root",t,!o&&"rounded","elevation"===t&&"elevation".concat(a)]};return(0,s.Z)(r,p,n)}(b);return(0,f.jsx)(g,(0,n.Z)({as:c,ownerState:b,className:(0,i.Z)(k.root,r),ref:o},w))}))},8660:function(e,o,a){e.exports=a.p+"static/media/1654090338_26-celes-club-p-oboi-na-noutbuk-mramor-krasivie-28.756852db6aad72e68575.jpg"}}]);
//# sourceMappingURL=277.59430acd.chunk.js.map