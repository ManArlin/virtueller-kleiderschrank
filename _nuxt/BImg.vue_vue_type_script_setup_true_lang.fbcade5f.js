import{u as o}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import"./dom.ed296b52.js";import{d as E,v as a,j as s,o as G,n as L,N,u as v}from"./entry.08d5f432.js";const U=E({__name:"BImg",props:{alt:null,blank:{default:!1},blankColor:{default:"transparent"},block:{default:!1},center:{default:!1},fluid:{default:!1},lazy:{default:!1},fluidGrow:{default:!1},height:null,left:{default:!1},start:{default:!1},right:{default:!1},end:{default:!1},rounded:{type:[Boolean,String],default:!1},sizes:null,src:null,srcset:null,thumbnail:{default:!1},width:null},emits:["load"],setup(h,{emit:m}){const e=h,p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',g=o(a(e,"lazy")),r=o(a(e,"blank")),w=o(a(e,"block")),d=o(a(e,"center")),B=o(a(e,"fluid")),c=o(a(e,"fluidGrow")),b=o(a(e,"left")),k=o(a(e,"start")),y=o(a(e,"right")),z=o(a(e,"end")),A=o(a(e,"thumbnail")),S=s(()=>typeof e.srcset=="string"?e.srcset.split(",").filter(t=>t).join(","):Array.isArray(e.srcset)?e.srcset.filter(t=>t).join(","):void 0),x=s(()=>typeof e.sizes=="string"?e.sizes.split(",").filter(t=>t).join(","):Array.isArray(e.sizes)?e.sizes.filter(t=>t).join(","):void 0),u=s(()=>{const t=i=>i===void 0?void 0:typeof i=="number"?i:Number.parseInt(i,10)||void 0,l=t(e.width),n=t(e.height);if(r.value){if(l!==void 0&&n===void 0)return{height:l,width:l};if(l===void 0&&n!==void 0)return{height:n,width:n};if(l===void 0&&n===void 0)return{height:1,width:1}}return{width:l,height:n}}),_=s(()=>I(u.value.width,u.value.height,e.blankColor)),j=s(()=>({src:r.value?_.value:e.src,alt:e.alt,width:u.value.width||void 0,height:u.value.height||void 0,srcset:r.value?void 0:S.value,sizes:r.value?void 0:x.value,loading:g.value?"lazy":"eager"})),f=s(()=>b.value||k.value?"float-start":y.value||z.value?"float-end":d.value?"mx-auto":void 0),C=s(()=>({"img-thumbnail":A.value,"img-fluid":B.value||c.value,"w-100":c.value,rounded:e.rounded===""||e.rounded===!0,[`rounded-${e.rounded}`]:typeof e.rounded=="string"&&e.rounded!=="",[`${f.value}`]:f.value!==void 0,"d-block":w.value||d.value})),I=(t,l,n)=>`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(p.replace("%{w}",String(t)).replace("%{h}",String(l)).replace("%{f}",n))}`;return(t,l)=>(G(),L("img",N({class:v(C)},v(j),{onLoad:l[0]||(l[0]=n=>m("load",n))}),null,16))}});export{U as _};
