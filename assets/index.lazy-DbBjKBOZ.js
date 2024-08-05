const __vite__fileDeps=["assets/item-list-D4LXgOzr.js","assets/index-DpRGBXpY.js","assets/index-V_ReCgnX.css","assets/item-list-DYkmKyU8.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{f as k,u as y,a as g,j as t,B as p,c as w,r as F,p as A,U as J,T as O,L as T,g as S,b as $,d as K,e as d,h as Q,i as X,k as Y,l as tt,S as et,G as P,I as ot,A as st,_ as nt,m as rt,n as at}from"./index-DpRGBXpY.js";var f={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844"};const G={orientation:"horizontal"},ct=w((e,{borderWidth:s})=>({group:{"--button-border-width":F(s)}})),C=k((e,s)=>{const o=y("ButtonGroup",G,e),{className:c,style:a,classNames:r,styles:u,unstyled:i,orientation:n,vars:l,borderWidth:m,variant:h,mod:x,...L}=y("ButtonGroup",G,e),v=g({name:"ButtonGroup",props:o,classes:f,className:c,style:a,classNames:r,styles:u,unstyled:i,vars:l,varsResolver:ct,rootSelector:"group"});return t.jsx(p,{...v("group"),ref:s,variant:h,mod:[{"data-orientation":n},x],role:"group",...L})});C.classes=f;C.displayName="@mantine/core/ButtonGroup";const lt={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${F(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},it={},dt=w((e,{radius:s,color:o,gradient:c,variant:a,size:r,justify:u,autoContrast:i})=>{const n=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:c,variant:a||"filled",autoContrast:i});return{root:{"--button-justify":u,"--button-height":S(r,"button-height"),"--button-padding-x":S(r,"button-padding-x"),"--button-fz":r!=null&&r.includes("compact")?$(r.replace("compact-","")):$(r),"--button-radius":s===void 0?void 0:K(s),"--button-bg":o||a?n.background:void 0,"--button-hover":o||a?n.hover:void 0,"--button-color":n.color,"--button-bd":o||a?n.border:void 0,"--button-hover-color":o||a?n.hoverColor:void 0}}}),j=A((e,s)=>{const o=y("Button",it,e),{style:c,vars:a,className:r,color:u,disabled:i,children:n,leftSection:l,rightSection:m,fullWidth:h,variant:x,radius:L,loading:v,loaderProps:I,gradient:Ct,classNames:U,styles:V,unstyled:N,"data-disabled":E,autoContrast:Rt,mod:M,...W}=o,b=g({name:"Button",props:o,classes:f,className:r,style:c,classNames:U,styles:V,unstyled:N,vars:a,varsResolver:dt}),Z=!!l,H=!!m;return t.jsxs(J,{ref:s,...b("root",{active:!i&&!v&&!E}),unstyled:N,variant:x,disabled:i||v,mod:[{disabled:i||E,loading:v,block:h,"with-left-section":Z,"with-right-section":H},M],...W,children:[t.jsx(O,{mounted:!!v,transition:lt,duration:150,children:q=>t.jsx(p,{component:"span",...b("loader",{style:q}),"aria-hidden":!0,children:t.jsx(T,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...I})})}),t.jsxs("span",{...b("inner"),children:[l&&t.jsx(p,{component:"span",...b("section"),mod:{position:"left"},children:l}),t.jsx(p,{component:"span",mod:{loading:v},...b("label"),children:n}),m&&t.jsx(p,{component:"span",...b("section"),mod:{position:"right"},children:m})]})]})});j.classes=f;j.displayName="@mantine/core/Button";j.Group=C;var z={root:"m_4451eb3a"};const ut={},R=A((e,s)=>{const o=y("Center",ut,e),{classNames:c,className:a,style:r,styles:u,unstyled:i,vars:n,inline:l,mod:m,...h}=o,x=g({name:"Center",props:o,classes:z,className:a,style:r,classNames:c,styles:u,unstyled:i,vars:n});return t.jsx(p,{ref:s,mod:[{inline:l},m],...x("root"),...h})});R.classes=z;R.displayName="@mantine/core/Center";var D={root:"m_7485cace"};const mt={},pt=w((e,{size:s,fluid:o})=>({root:{"--container-size":o?void 0:S(s,"container-size")}})),B=k((e,s)=>{const o=y("Container",mt,e),{classNames:c,className:a,style:r,styles:u,unstyled:i,vars:n,fluid:l,mod:m,...h}=o,x=g({name:"Container",classes:D,props:o,className:a,style:r,classNames:c,styles:u,unstyled:i,vars:n,varsResolver:pt});return t.jsx(p,{ref:s,mod:[{fluid:l},m],...x("root"),...h})});B.classes=D;B.displayName="@mantine/core/Container";const ht=({title:e,titleId:s,...o},c)=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:c,"aria-labelledby":s,...o},e?d.createElement("title",{id:s},e):null,d.createElement("path",{style:{fill:"currentcolor"},d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"})),xt=d.forwardRef(ht),vt=({title:e,titleId:s,...o},c)=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:c,"aria-labelledby":s,...o},e?d.createElement("title",{id:s},e):null,d.createElement("path",{style:{fill:"currentcolor"},d:"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"})),bt=d.forwardRef(vt),yt=({itemListRef:e,className:s})=>{const[o,c]=Q(X),[a,r]=d.useState(!1),{t:u}=Y(),i=tt(n=>{c(l=>{l.name=n.target.value})},200);return t.jsxs(et,{className:s,children:[t.jsxs(P,{children:[t.jsx(ot,{placeholder:u("search.placeholder"),flex:1,defaultValue:o.name,radius:8,size:"md",onChange:i}),t.jsx(st,{variant:"transparent",onClick:()=>r(n=>!n),children:a?t.jsx(bt,{}):t.jsx(xt,{})})]}),t.jsx(p,{children:t.jsx(O,{mounted:a,transition:"slide-down",duration:400,timingFunction:"ease",children:n=>t.jsx(P,{style:n,children:t.jsx(j,{variant:"subtle",size:"compact-xs",onClick:()=>{var l;return(l=e==null?void 0:e.current)==null?void 0:l.resetOrder()},children:u("search.options.clearOrder")})})})})]})},gt="_container_1ojxe_1",ft="_content_1ojxe_13",jt="_searchbox_1ojxe_17",_={container:gt,content:ft,searchbox:jt},_t=d.lazy(()=>nt(()=>import("./item-list-D4LXgOzr.js"),__vite__mapDeps([0,1,2,3])));function St(){const e=d.useRef(null);return t.jsxs(B,{fluid:!0,className:_.container,children:[t.jsx(yt,{className:_.searchbox,itemListRef:e}),t.jsx(at,{type:"auto",className:_.content,children:t.jsx(d.Suspense,{fallback:t.jsx(R,{mt:"xl",children:t.jsx(T,{size:"lg",type:"dots"})}),children:t.jsx(_t,{ref:e})})})]})}const wt=St,Lt=rt("/")({component:wt});export{Lt as Route};
