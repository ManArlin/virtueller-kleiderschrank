import{d as c,j as d,o,n as h,c as u,w as m,K as l,e as p,t as f,u as s,s as b,M as g,a as y,N as C}from"./entry.08d5f432.js";const _={role:"presentation"},B=["id","aria-describedby"],D={inheritAttrs:!1},v=c({...D,__name:"BDropdownGroup",props:{id:null,ariaDescribedby:null,header:null,headerClass:null,headerTag:{default:"header"},headerVariant:null},setup(a){const e=a,t=d(()=>e.id?`${e.id}_group_dd_header`:void 0),n=d(()=>e.headerTag==="header"?void 0:"heading"),i=d(()=>[e.headerClass,{[`text-${e.headerVariant}`]:e.headerVariant!==void 0}]);return(r,V)=>(o(),h("li",_,[(o(),u(g(a.headerTag),{id:s(t),class:b(["dropdown-header",s(i)]),role:s(n)},{default:m(()=>[l(r.$slots,"header",{},()=>[p(f(a.header),1)])]),_:3},8,["id","class","role"])),y("ul",C({id:a.id,role:"group",class:"list-unstyled"},r.$attrs,{"aria-describedby":a.ariaDescribedby||s(t)}),[l(r.$slots,"default")],16,B)]))}});export{v as default};
