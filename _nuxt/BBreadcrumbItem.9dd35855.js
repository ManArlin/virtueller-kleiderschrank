import"./dom.ed296b52.js";import{o as f}from"./object.6cb5f5ed.js";import{p as k}from"./props.ffd5d2f1.js";import{u as c}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import l,{BLINK_PROPS as v}from"./BLink.7b55f212.js";import{d as B,v as u,j as a,g as C,o as p,n as g,c as P,w as S,K as b,e as y,t as L,N as $,M as T,s as h}from"./entry.08d5f432.js";const m=f(v,["event","routerTag"]),D=B({components:{BLink:l},props:{...m,active:{type:[Boolean,String],default:!1},ariaCurrent:{type:String,default:"location"},disabled:{type:[Boolean,String],default:!1},text:{type:String,required:!1}},emits:["click"],setup(e,{emit:n}){const t=c(u(e,"active")),o=c(u(e,"disabled")),i=a(()=>({active:t.value})),r=a(()=>t.value?"span":l),d=a(()=>t.value?e.ariaCurrent:void 0);return{computedLinkProps:a(()=>r.value!=="span"?k(e,m):{}),computedClasses:i,computedTag:r,computedAriaCurrent:d,clicked:s=>{if(o.value||t.value){s.preventDefault(),s.stopImmediatePropagation();return}o.value||n("click",s)}}}});function I(e,n,t,o,i,r){return p(),g("li",{class:h(["breadcrumb-item",e.computedClasses])},[(p(),P(T(e.computedTag),$({"aria-current":e.computedAriaCurrent},e.computedLinkProps,{onClick:e.clicked}),{default:S(()=>[b(e.$slots,"default",{},()=>[y(L(e.text),1)])]),_:3},16,["aria-current","onClick"]))],2)}const E=C(D,[["render",I]]);export{E as default};
