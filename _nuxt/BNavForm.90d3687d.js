import{d as i,j as r,o as d,c as n,w as m,K as f,N as u,W as p,u as c}from"./entry.08d5f432.js";import{_}from"./BForm.vue_vue_type_script_setup_true_lang.5a1e6f01.js";import"./useBooleanish.b579a75e.js";import"./dom.ed296b52.js";import"./useBreadcrumb.ba721e02.js";const B=i({__name:"BNavForm",props:{role:null,id:null,floating:{default:!1},novalidate:{default:!1},validated:{default:!1}},emits:["submit"],setup(a,{emit:o}){const t=a,s=r(()=>({floating:t.floating,role:t.role,id:t.id,novalidate:t.novalidate,validated:t.validated})),l=e=>o("submit",e);return(e,v)=>(d(),n(_,u(c(s),{class:"d-flex",onSubmit:p(l,["prevent"])}),{default:m(()=>[f(e.$slots,"default")]),_:3},16,["onSubmit"]))}});export{B as default};
