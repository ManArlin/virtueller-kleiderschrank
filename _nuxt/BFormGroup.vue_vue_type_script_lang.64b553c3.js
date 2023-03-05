import{u as v}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import{t as G,s as W,e as J,f as Q,I as Y,h as Z,R as H,g as ee,j as te,k as le}from"./dom.ed296b52.js";import{g as z}from"./getId.5b118acc.js";import{r as oe}from"./resolveAriaInvalid.c4402722.js";import{n as L}from"./normalizeSlot.942441ce.js";import{s as ae}from"./number.a61965f3.js";import{s as M}from"./props.ffd5d2f1.js";import{u as R}from"./useId.cddc0adb.js";import T from"./BCol.6618d65a.js";import{_ as V}from"./BFormInvalidFeedback.vue_vue_type_script_setup_true_lang.50a95e46.js";import{_ as O}from"./BFormRow.vue_vue_type_script_setup_true_lang.db459057.js";import{_ as j}from"./BFormText.vue_vue_type_script_setup_true_lang.6e44a164.js";import{_ as w}from"./BFormValidFeedback.vue_vue_type_script_setup_true_lang.5cfbeb0d.js";import{d as ie,v as g,k as se,j as S,x as ne,l as re,z as de,m as r}from"./entry.08d5f432.js";const P=e=>`\\${e}`,ce=e=>{const d=G(e),{length:_}=d,a=d.charCodeAt(0);return d.split("").reduce((l,c,f)=>{const t=d.charCodeAt(f);return t===0?`${l}\uFFFD`:t===127||t>=1&&t<=31||f===0&&t>=48&&t<=57||f===1&&t>=48&&t<=57&&a===45?l+P(`${t.toString(16)} `):f===0&&t===45&&_===1?l+P(c):t>=128||t===45||t===95||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?l+c:l+P(c)},"")},X=["input","select","textarea"],fe=X.map(e=>`${e}:not([disabled])`).join(),ue=[...X,"a","button","label"],be="label",me="invalid-feedback",pe="valid-feedback",ge="description",Se="default",ze=ie({components:{BCol:T,BFormInvalidFeedback:V,BFormRow:O,BFormText:j,BFormValidFeedback:w},props:{contentCols:{type:[Boolean,String,Number],required:!1},contentColsLg:{type:[Boolean,String,Number],required:!1},contentColsMd:{type:[Boolean,String,Number],required:!1},contentColsSm:{type:[Boolean,String,Number],required:!1},contentColsXl:{type:[Boolean,String,Number],required:!1},description:{type:[String],required:!1},disabled:{type:[Boolean,String],default:!1},feedbackAriaLive:{type:String,default:"assertive"},id:{type:String,required:!1},invalidFeedback:{type:String,required:!1},label:{type:String,required:!1},labelAlign:{type:[Boolean,String,Number],required:!1},labelAlignLg:{type:[Boolean,String,Number],required:!1},labelAlignMd:{type:[Boolean,String,Number],required:!1},labelAlignSm:{type:[Boolean,String,Number],required:!1},labelAlignXl:{type:[Boolean,String,Number],required:!1},labelClass:{type:[Array,Object,String],required:!1},labelCols:{type:[Boolean,String,Number],required:!1},labelColsLg:{type:[Boolean,String,Number],required:!1},labelColsMd:{type:[Boolean,String,Number],required:!1},labelColsSm:{type:[Boolean,String,Number],required:!1},labelColsXl:{type:[Boolean,String,Number],required:!1},labelFor:{type:String,required:!1},labelSize:{type:String,required:!1},labelSrOnly:{type:[Boolean,String],default:!1},state:{type:[Boolean,String],default:null},tooltip:{type:[Boolean,String],default:!1},validFeedback:{type:String,required:!1},validated:{type:[Boolean,String],default:!1},floating:{type:[Boolean,String],default:!1}},setup(e,{attrs:d}){const _=v(g(e,"disabled")),a=v(g(e,"labelSrOnly")),l=v(g(e,"state")),c=v(g(e,"tooltip")),f=v(g(e,"validated")),t=v(g(e,"floating")),b=null,y=["xs","sm","md","lg","xl"],E=(n,u)=>y.reduce((s,i)=>{const I=M(i==="xs"?"":i,`${u}Align`),o=n[I]||null;return o&&(i==="xs"?s.push(`text-${o}`):s.push(`text-${i}-${o}`)),s},[]),h=(n,u)=>y.reduce((s,i)=>{const I=M(i==="xs"?"":i,`${u}Cols`);let o=n[I];return o=o===""?!0:o||!1,typeof o!="boolean"&&o!=="auto"&&(o=ae(o,0),o=o>0?o:!1),o&&(i==="xs"?s.cols=o:s[i||(typeof o=="boolean"?"col":"cols")]=o),s},{}),C=se(),A=(n,u=null)=>{if(Y&&e.labelFor){const s=Z(`#${ce(e.labelFor)}`,C);if(s){const i="aria-describedby",I=(n||"").split(H),o=(u||"").split(H),D=(ee(s,i)||"").split(H).filter(k=>!o.includes(k)).concat(I).filter((k,U,K)=>K.indexOf(k)===U).filter(k=>k).join(" ").trim();D?te(s,i,D):le(s,i)}}},B=S(()=>h(e,"content")),F=S(()=>E(e,"label")),q=S(()=>h(e,"label")),N=S(()=>Object.keys(B.value).length>0||Object.keys(q.value).length>0),m=S(()=>typeof l.value=="boolean"?l.value:null),$=S(()=>{const n=m.value;return n===!0?"is-valid":n===!1?"is-invalid":null}),p=S(()=>oe(d.ariaInvalid,l.value));return ne(()=>b,(n,u)=>{n!==u&&A(n,u)}),re(()=>{de(()=>{A(b)})}),{disabledBoolean:_,labelSrOnlyBoolean:a,stateBoolean:l,tooltipBoolean:c,validatedBoolean:f,floatingBoolean:t,ariaDescribedby:b,computedAriaInvalid:p,contentColProps:B,isHorizontal:N,labelAlignClasses:F,labelColProps:q,onLegendClick:n=>{if(e.labelFor)return;const{target:u}=n,s=u?u.tagName:"";if(ue.indexOf(s)!==-1)return;const i=W(fe,C).filter(J);i.length===1&&Q(i[0])},stateClass:$}},render(){const e=this.$props,d=this.$slots,_=R(),a=!e.labelFor;let l=null;const c=L(be,{},d)||e.label,f=c?z("_BV_label_"):null;if(c||this.isHorizontal){const p=a?"legend":"label";if(this.labelSrOnlyBoolean)c&&(l=r(p,{class:"visually-hidden",id:f,for:e.labelFor||null},c)),this.isHorizontal?l=r(T,this.labelColProps,{default:()=>l}):l=r("div",{},[l]);else{const x={onClick:a?this.onLegendClick:null,...this.isHorizontal?this.labelColProps:{},tag:this.isHorizontal?p:null,id:f,for:e.labelFor||null,tabIndex:a?"-1":null,class:[this.isHorizontal?"col-form-label":"form-label",{"bv-no-focus-ring":a,"col-form-label":this.isHorizontal||a,"pt-0":!this.isHorizontal&&a,"d-block":!this.isHorizontal&&!a,[`col-form-label-${e.labelSize}`]:!!e.labelSize},this.labelAlignClasses,e.labelClass]};this.isHorizontal?l=r(T,x,{default:()=>c}):l=r(p,x,c)}}let t=null;const b=L(me,{},d)||this.invalidFeedback,y=b?z("_BV_feedback_invalid_"):void 0;b&&(t=r(V,{ariaLive:e.feedbackAriaLive,id:y,state:this.stateBoolean,tooltip:this.tooltipBoolean},{default:()=>b}));let E=null;const h=L(pe,{},d)||this.validFeedback,C=h?z("_BV_feedback_valid_"):void 0;h&&(E=r(w,{ariaLive:e.feedbackAriaLive,id:C,state:this.stateBoolean,tooltip:this.tooltipBoolean},{default:()=>h}));let A=null;const B=L(ge,{},d)||this.description,F=B?z("_BV_description_"):void 0;B&&(A=r(j,{id:F},{default:()=>B}));const q=this.ariaDescribedby=[F,this.stateBoolean===!1?y:null,this.stateBoolean===!0?C:null].filter(p=>p).join(" ")||null,N=[L(Se,{ariaDescribedby:q,descriptionId:F,id:_,labelId:f},d)||"",t,E,A];!this.isHorizontal&&this.floatingBoolean&&N.push(l);let m=r("div",{ref:"content",class:[{"form-floating":!this.isHorizontal&&this.floatingBoolean}]},N);this.isHorizontal&&(m=r(T,{ref:"content",...this.contentColProps},{default:()=>N}));const $={class:["mb-3",this.stateClass,{"was-validated":this.validatedBoolean}],id:R(g(e,"id")).value,disabled:a?this.disabledBoolean:null,role:a?null:"group","aria-invalid":this.computedAriaInvalid,"aria-labelledby":a&&this.isHorizontal?f:null};return this.isHorizontal&&!a?r(O,$,{default:()=>[l,m]}):r(a?"fieldset":"div",$,this.isHorizontal&&a?[r(O,null,{default:()=>[l,m]})]:this.isHorizontal||!this.floatingBoolean?[l,m]:[m])}});export{be as S,ze as _,me as a,pe as b,ge as c,Se as d};
