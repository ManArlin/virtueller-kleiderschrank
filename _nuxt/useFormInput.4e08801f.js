import{u as b}from"./useId.cddc0adb.js";import"./dom.ed296b52.js";import{r as q}from"./resolveAriaInvalid.c4402722.js";import{k as z,v as I,l as c,Y as p,j as F,x,z as M}from"./entry.08d5f432.js";const _={ariaInvalid:{type:[Boolean,String],default:void 0},autocomplete:{type:String,required:!1},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},form:{type:String,required:!1},formatter:{type:Function,required:!1},id:{type:String,required:!1},lazy:{type:Boolean,default:!1},lazyFormatter:{type:Boolean,default:!1},list:{type:String,required:!1},modelValue:{type:[String,Number],default:""},name:{type:String,required:!1},number:{type:Boolean,default:!1},placeholder:{type:String,required:!1},plaintext:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},size:{type:String,required:!1},state:{type:Boolean,default:null},trim:{type:Boolean,default:!1}},C=(t,n)=>{const u=z();let r=null,f=!0;const m=b(I(t,"id"),"input"),d=(e,l,a=!1)=>(e=String(e),typeof t.formatter=="function"&&(!t.lazyFormatter||a)?(f=!1,t.formatter(e,l)):e),i=e=>t.trim?e.trim():t.number?Number.parseFloat(e):e,s=()=>{M(()=>{var e;t.autofocus&&((e=u.value)==null||e.focus())})};c(s),c(()=>{u.value&&(u.value.value=t.modelValue)}),p(s);const y=F(()=>{var e;return q(t.ariaInvalid,(e=t.state)!=null?e:void 0)}),g=e=>{const{value:l}=e.target,a=d(l,e);if(a===!1||e.defaultPrevented){e.preventDefault();return}if(t.lazy)return;const o=i(a);t.modelValue!==o&&(r=l,n("update:modelValue",o)),n("input",a)},V=e=>{const{value:l}=e.target,a=d(l,e);if(a===!1||e.defaultPrevented){e.preventDefault();return}if(!t.lazy)return;r=l,n("update:modelValue",a);const o=i(a);t.modelValue!==o&&n("change",a)},v=e=>{if(n("blur",e),!t.lazy&&!t.lazyFormatter)return;const{value:l}=e.target,a=d(l,e,!0);r=l,n("update:modelValue",a)},B=()=>{var e;t.disabled||(e=u.value)==null||e.focus()},S=()=>{var e;t.disabled||(e=u.value)==null||e.blur()};return x(()=>t.modelValue,e=>{!u.value||(u.value.value=r&&f?r:e,r=null,f=!0)}),{input:u,computedId:m,computedAriaInvalid:y,onInput:g,onChange:V,onBlur:v,focus:B,blur:S}};export{_ as C,C as u};