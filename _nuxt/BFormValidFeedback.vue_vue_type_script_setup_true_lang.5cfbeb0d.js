import{u as o}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import"./dom.ed296b52.js";import{d as f,v as t,j as l,o as v,c as p,w as h,u as s,s as B,M as w,K as S,e as k,t as x}from"./entry.08d5f432.js";const A=f({__name:"BFormValidFeedback",props:{ariaLive:null,forceShow:{default:!1},id:null,role:null,text:null,state:{default:void 0},tag:{default:"div"},tooltip:{default:!1}},setup(e){const a=e,r=o(t(a,"forceShow")),c=o(t(a,"state")),i=o(t(a,"tooltip")),n=l(()=>r.value===!0||c.value===!0),u=l(()=>({"d-block":n.value,"valid-feedback":!i.value,"valid-tooltip":i.value})),d=l(()=>a.ariaLive?"true":void 0);return(m,C)=>(v(),p(w(e.tag),{id:e.id,role:e.role,"aria-live":e.ariaLive,"aria-atomic":s(d),class:B(s(u))},{default:h(()=>[S(m.$slots,"default",{},()=>[k(x(e.text),1)])]),_:3},8,["id","role","aria-live","aria-atomic","class"]))}});export{A as _};