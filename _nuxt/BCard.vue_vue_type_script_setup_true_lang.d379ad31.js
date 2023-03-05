import{u as r}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import{c as y}from"./dom.ed296b52.js";import{_ as T}from"./BCardImg.vue_vue_type_script_setup_true_lang.283b9e8c.js";import{_ as L}from"./BCardHeader.vue_vue_type_script_setup_true_lang.940afeec.js";import{_ as N}from"./BCardBody.vue_vue_type_script_setup_true_lang.d4bf957a.js";import{_ as z}from"./BCardFooter.vue_vue_type_script_setup_true_lang.7628b971.js";import{d as D,R as P,v as i,j as l,o as n,c as s,w as g,u as e,K as d,I as B,N as u,S as m,e as f,t as c,s as W,M as j}from"./entry.08d5f432.js";const U=D({__name:"BCard",props:{align:null,bgVariant:null,bodyBgVariant:null,bodyClass:null,bodyTag:{default:"div"},bodyTextVariant:null,borderVariant:null,footer:null,footerBgVariant:null,footerBorderVariant:null,footerClass:null,footerHtml:{default:""},footerTag:{default:"div"},footerTextVariant:null,header:null,headerBgVariant:null,headerBorderVariant:null,headerClass:null,headerHtml:{default:""},headerTag:{default:"div"},headerTextVariant:null,imgAlt:null,imgBottom:{default:!1},imgEnd:{default:!1},imgHeight:null,imgLeft:{default:!1},imgRight:{default:!1},imgSrc:null,imgStart:{default:!1},imgTop:{default:!1},imgWidth:null,noBody:{default:!1},overlay:{default:!1},subtitle:null,subtitleTag:{default:"h6"},subtitleTextVariant:{default:"muted"},tag:{default:"div"},textVariant:null,title:null,titleTag:{default:"h4"},bodyText:{default:""}},setup(a){const t=a,h=P(),V=r(i(t,"imgBottom")),x=r(i(t,"imgEnd")),v=r(i(t,"imgLeft")),S=r(i(t,"imgRight")),$=r(i(t,"imgStart")),C=r(i(t,"noBody")),k=l(()=>!y(h.header)),H=l(()=>!y(h.footer)),A=l(()=>({[`text-${t.align}`]:t.align!==void 0,[`text-${t.textVariant}`]:t.textVariant!==void 0,[`bg-${t.bgVariant}`]:t.bgVariant!==void 0,[`border-${t.borderVariant}`]:t.borderVariant!==void 0,"flex-row":v.value||$.value,"flex-row-reverse":x.value||S.value})),R=l(()=>({bgVariant:t.headerBgVariant,borderVariant:t.headerBorderVariant,html:t.headerHtml,tag:t.headerTag,textVariant:t.headerTextVariant})),w=l(()=>({overlay:t.overlay,bodyBgVariant:t.bodyBgVariant,bodyTag:t.bodyTag,bodyTextVariant:t.bodyTextVariant,subtitle:t.subtitle,subtitleTag:t.subtitleTag,subtitleTextVariant:t.subtitleTextVariant,title:t.title,titleTag:t.titleTag})),E=l(()=>({bgVariant:t.footerBgVariant,borderVariant:t.footerBorderVariant,html:t.footerHtml,tag:t.footerTag,textVariant:t.footerTextVariant})),b=l(()=>({src:t.imgSrc,alt:t.imgAlt,height:t.imgHeight,width:t.imgWidth,bottom:t.imgBottom,end:t.imgEnd,left:t.imgLeft,right:t.imgRight,start:t.imgStart,top:t.imgTop}));return(o,F)=>(n(),s(j(a.tag),{class:W(["card",e(A)])},{default:g(()=>[e(V)?m("",!0):d(o.$slots,"img",{key:0},()=>[a.imgSrc?(n(),s(T,B(u({key:0},e(b))),null,16)):m("",!0)]),a.header||e(k)||a.headerHtml?(n(),s(L,u({key:1},e(R),{class:a.headerClass}),{default:g(()=>[d(o.$slots,"header",{},()=>[f(c(a.header),1)])]),_:3},16,["class"])):m("",!0),e(C)?d(o.$slots,"default",{key:3},()=>[f(c(a.bodyText),1)]):(n(),s(N,u({key:2},e(w),{class:a.bodyClass}),{default:g(()=>[d(o.$slots,"default",{},()=>[f(c(a.bodyText),1)])]),_:3},16,["class"])),a.footer||e(H)||a.footerHtml?(n(),s(z,u({key:4},e(E),{class:a.footerClass}),{default:g(()=>[d(o.$slots,"footer",{},()=>[f(c(a.footer),1)])]),_:3},16,["class"])):m("",!0),e(V)?d(o.$slots,"img",{key:5},()=>[a.imgSrc?(n(),s(T,B(u({key:0},e(b))),null,16)):m("",!0)]):m("",!0)]),_:3},8,["class"]))}});export{U as _};