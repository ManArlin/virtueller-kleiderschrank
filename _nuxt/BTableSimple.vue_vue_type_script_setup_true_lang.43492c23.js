import{u as a}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import"./dom.ed296b52.js";import{d as V,v as s,j as d,o as i,n as b,K as c,s as l,u as t,a as C}from"./entry.08d5f432.js";const _=V({__name:"BTableSimple",props:{bordered:{default:!1},borderless:{default:!1},borderVariant:null,captionTop:{default:!1},dark:{default:!1},hover:{default:!1},responsive:{type:[Boolean,String],default:!1},stacked:{type:[Boolean,String],default:!1},striped:{default:!1},small:{default:!1},tableClass:null,tableVariant:null,stickyHeader:{default:!1}},setup(o){const e=o,p=a(s(e,"captionTop")),u=a(s(e,"borderless")),f=a(s(e,"bordered")),v=a(s(e,"dark")),k=a(s(e,"hover")),m=a(s(e,"small")),B=a(s(e,"striped")),y=a(s(e,"stickyHeader")),r=d(()=>["table","b-table",{"table-bordered":f.value,"table-borderless":u.value,[`border-${e.borderVariant}`]:e.borderVariant!==void 0,"caption-top":p.value,"table-dark":v.value,"table-hover":k.value,"b-table-stacked":typeof e.stacked=="boolean"&&e.stacked,[`b-table-stacked-${e.stacked}`]:typeof e.stacked=="string","table-striped":B.value,"table-sm":m.value,[`table-${e.tableVariant}`]:e.tableVariant!==void 0},e.tableClass]),h=d(()=>[{"table-responsive":e.responsive===!0,[`table-responsive-${e.responsive}`]:typeof e.responsive=="string","b-table-sticky-header":y.value}]);return(n,$)=>o.responsive?(i(),b("div",{key:1,class:l(t(h))},[C("table",{role:"table",class:l(t(r))},[c(n.$slots,"default")],2)],2)):(i(),b("table",{key:0,role:"table",class:l(t(r))},[c(n.$slots,"default")],2))}});export{_};