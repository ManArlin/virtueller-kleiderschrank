import{_ as E}from"./BFormCheckbox.vue_vue_type_script_setup_true_lang.7d64812c.js";import{u as o}from"./useBooleanish.b579a75e.js";import"./useBreadcrumb.ba721e02.js";import{c as G,d as J,s as h,o as L,e as T}from"./useFormCheck.1ff82694.js";import{u as g}from"./useId.cddc0adb.js";import"./dom.ed296b52.js";import{d as z,R,v as t,j as k,r as j,o as n,n as i,F as A,q as H,u as d,N as x,c as M,w as P,t as D,E as U}from"./entry.08d5f432.js";import"./resolveAriaInvalid.c4402722.js";import"./getId.5b118acc.js";const $=["id"],K=["innerHTML"],Q=["textContent"],le=z({__name:"BFormCheckboxGroup",props:{id:null,form:null,modelValue:{default:()=>[]},ariaInvalid:{default:void 0},autofocus:{default:!1},buttonVariant:{default:"secondary"},buttons:{default:!1},disabled:{default:!1},disabledField:{default:"disabled"},htmlField:{default:"html"},name:null,options:{default:()=>[]},plain:{default:!1},required:{default:!1},size:null,stacked:{default:!1},state:{default:void 0},switches:{default:!1},textField:{default:"text"},validated:{default:!1},valueField:{default:"value"}},emits:["input","update:modelValue","change"],setup(B,{emit:r}){const e=B,u=R(),f="BFormCheckbox",m=g(t(e,"id"),"checkbox"),_=g(t(e,"name"),"checkbox");o(t(e,"autofocus"));const y=o(t(e,"buttons")),v=o(t(e,"disabled"));o(t(e,"plain"));const F=o(t(e,"required")),V=o(t(e,"stacked")),C=o(t(e,"state")),N=o(t(e,"switches")),O=o(t(e,"validated")),c=k({get:()=>e.modelValue,set:s=>{if(JSON.stringify(s)===JSON.stringify(e.modelValue))return;const l=e.options.filter(a=>s.map(p=>JSON.stringify(p)).includes(JSON.stringify(typeof a=="string"?a:a[e.valueField]))).map(a=>typeof a=="string"?a:a[e.valueField]);r("input",l),r("update:modelValue",l),r("change",l)}}),S=k(()=>(u.first?h(u.first(),f,v.value):[]).concat(e.options.map(s=>L(s,e))).concat(u.default?h(u.default(),f,v.value):[]).map((s,l)=>T(s,l,e,_,m)).map(s=>({...s,props:{switch:N.value,...s.props}}))),b=j({required:t(F,"value"),ariaInvalid:t(e,"ariaInvalid"),state:t(C,"value"),validated:t(O,"value"),buttons:t(y,"value"),stacked:t(V,"value"),size:t(e,"size")}),q=G(b),w=J(b);return(s,l)=>(n(),i("div",x(d(q),{id:d(m),role:"group",class:[d(w),"bv-no-focus-ring"],tabindex:"-1"}),[(n(!0),i(A,null,H(d(S),(a,p)=>(n(),M(E,x({key:p,modelValue:d(c),"onUpdate:modelValue":l[0]||(l[0]=I=>U(c)?c.value=I:null)},a.props),{default:P(()=>[a.html?(n(),i("span",{key:0,innerHTML:a.html},null,8,K)):(n(),i("span",{key:1,textContent:D(a.text)},null,8,Q))]),_:2},1040,["modelValue"]))),128))],16,$))}});export{le as default};
