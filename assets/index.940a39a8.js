var we=Object.defineProperty,je=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var Y=(o,t,n)=>t in o?we(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n,T=(o,t)=>{for(var n in t||(t={}))He.call(t,n)&&Y(o,n,t[n]);if(K)for(var n of K(t))Ee.call(t,n)&&Y(o,n,t[n]);return o},S=(o,t)=>je(o,Ie(t));import{i as Oe,g as ze,O as Ne,b as B,w as _e,a as H,v as E,c as G,_ as J,m as Q,r as c,o as Ae,M as Z,B as X,y as ee,j as e,F as v,N as Fe,d as x,u as P,e as l,P as L,f as R,h as te,k as M,l as U,n as oe,p as Be,C as Le,q as Re,s as Me,t as Ue,x as $,z,I as q,A as O,D as $e,S as qe,E as We,G as ne,H as Ve,J as se,K as re,L as ae,Q as le,R as Ke,T as Ye,U as Ge,V as Je,W as Qe,X as Ze,Y as W,Z as ce,$ as ie,a0 as Xe,a1 as et,a2 as tt,a3 as ot,a4 as nt,a5 as st,a6 as rt,a7 as at,a8 as de,a9 as lt,aa as ue,ab as ct,ac as pe,ad as me,ae as he,af as it,ag as dt,ah as ut,ai as pt,aj as mt,ak as ht,al as gt,am as w,an as ft,ao as Ct,ap as xt,aq as yt}from"./vendor.f24883fb.js";const kt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};kt();const bt="modulepreload",ge={},Tt="/",V=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${Tt}${s}`,s in ge)return;ge[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":bt,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((u,p)=>{i.addEventListener("load",u),i.addEventListener("error",p)})})).then(()=>t())},St={apiKey:"AIzaSyCPiNcvNkZJp9dPKs3B12--TcdLPICI5Wc",authDomain:"todoist-clone-a2075.firebaseapp.com",projectId:"todoist-clone-a2075",storageBucket:"todoist-clone-a2075.appspot.com",messagingSenderId:"897620374690",appId:"1:897620374690:web:6a7c290ec46fc18eb7d3fb"};Oe(St);const vt=ze(),D=Ne(),fe=B(D,"tasks"),Ce=B(D,"projects");B(D,"users");const Dt=async({taskName:o,projectId:t,userId:n,due:s})=>{await G(fe,{taskName:o,projectId:t,userId:n,due:s,completed:!1,timestamp:H()})},xe=(o,t)=>J(E(D,"tasks",o),S(T({},t),{timestamp:H()})),Pt=o=>Q(E(D,"tasks",o)),Xt=async({name:o,userId:t,color:n})=>{await G(Ce,{name:o,userId:t,color:n,timestamp:H()})},ye=(o,t)=>J(E(D,"projects",o),S(T({},t),{timestamp:H()})),wt=o=>Q(E(D,"projects",o)),eo=(o,t)=>_e(E(D,"users",o),S(T({},t),{createdAt:H()})),y=c.exports.createContext({user:null,projects:[],tasks:[],showCompletedTasks:!1,toggleCompletedTasks:()=>{}}),jt=({children:o})=>{const[t,n]=c.exports.useState(null),[s,r]=c.exports.useState([]),[a,i]=c.exports.useState([]),[u,p]=c.exports.useState(!1);c.exports.useEffect(()=>{const m=Ae(vt,f=>{n(f)});return()=>m()},[]),c.exports.useEffect(()=>{if(!t)return;const m=Z(fe,X("userId","==",`${t.uid}`)),f=ee(m,C=>{const h=C.docs.map(k=>{if(!!k.exists)return S(T({},k.data()),{id:k.id})});i(h)});return()=>f()},[t]),c.exports.useEffect(()=>{if(!t)return;const m=Z(Ce,X("userId","==",`${t.uid}`)),f=ee(m,C=>{const h=C.docs.map(k=>{if(!!k.exists)return S(T({},k.data()),{id:k.id})});r(h.length===0?[]:h)});return()=>f()},[t]);const d={user:t,tasks:a,projects:s,showCompletedTasks:u,toggleCompletedTasks:()=>{p(!u)}};return e(y.Provider,{value:d,children:o})},It=({children:o,redirectTo:t})=>{const{user:n}=c.exports.useContext(y);return n?e(v,{children:o}):e(Fe,{to:t})},j=({btnType:o,text:t,isDisabled:n,onClick:s})=>e(x,S(T({},{bg:o==="primary"?"red.400":"gray.100",color:o==="primary"?"white":"black"}),{onClick:s,isDisabled:n,variant:o==="secondary"?"outline":"solid",size:"sm",children:t})),ke=({projectId:o,onSelectProject:t})=>{var d;const{projects:n}=c.exports.useContext(y),s=n.find(m=>m.id===o),[r,a]=c.exports.useState((d=s==null?void 0:s.name)!=null?d:""),{isOpen:i,onClose:u,onToggle:p}=P(),g=m=>{var f,C;u(),m.target instanceof HTMLButtonElement&&(a((f=m.target.dataset.name)!=null?f:""),t((C=m.target.dataset.id)!=null?C:""))};return l(L,{isLazy:!0,closeOnBlur:!0,isOpen:i,onClose:u,children:[e(R,{children:e(x,{leftIcon:r===""?e(te,{}):void 0,variant:"outline",size:"sm",onClick:p,children:r===""?"Inbox":r})}),e(M,{w:"max",_focus:{border:"1px",borderColor:"gray.300"},boxShadow:"md",children:l(U,{display:"flex",flexDir:"column",children:[e(x,{leftIcon:e(te,{}),"data-id":"","data-name":"Inbox",onClick:g,variant:"ghost",size:"sm",justifyContent:"flex-start",children:"Inbox"}),n.map(m=>l(x,{"data-id":m.id,"data-name":m.name,onClick:g,variant:"ghost",size:"sm",justifyContent:"flex-start",children:[e(oe,{as:"span",w:"7px",h:"7px",bg:m.color,borderRadius:"50%",mr:2}),m.name]},`${m.name}${Math.random()}`))]})})]})};const I=({icon:o,onClick:t,text:n})=>e(x,{leftIcon:o,onClick:t,variant:"ghost",justifyContent:"flex-start",size:"sm",children:n}),be=1e3*60*60*24,N=o=>new Date(o).getTime(),Te=o=>{let t;return typeof o=="string"&&(t=o),o instanceof Date&&(t=o.toDateString()),t===void 0?"":t===new Date(Date.now()-be).toDateString()?"Yesterday":t===new Date().toDateString()?"Today":t===new Date(Date.now()+be).toDateString()?"Tomorrow":t.split(" ").slice(1,3).join(" ")},Se=({onSelectDate:o,initialDate:t=""})=>{Re(["bottom","left"]);const[n,s]=c.exports.useState(()=>t===""?null:new Date(t)),{isOpen:r,onClose:a,onToggle:i}=P(),u=Te(n!=null?n:""),p=d=>{a(),s(d),o(d.toDateString())},g=()=>{a(),s(null),o("")};return l(L,{isLazy:!0,closeOnBlur:!0,placement:"auto-end",isOpen:r,onClose:a,children:[e(R,{children:e(x,{leftIcon:e(Me,{}),variant:"outline",size:"sm",onClick:i,children:n===null?"Schedule":u})}),e(M,{w:"max",_focus:{border:"1px",borderColor:"gray.300"},boxShadow:"md",children:l(U,{display:"flex",flexDir:"column",children:[e(Ht,{minDate:new Date,value:n,prev2Label:null,next2Label:null,onChange:p}),e(I,{text:"No Date",onClick:g,icon:e(Ue,{})})]})})]})},Ht=Be(Le)`
  border: none;
  font-size: 0.8rem;
  width: 225px;
`,Et=({onCloseEditor:o})=>{const{projectId:t}=$(),{user:n}=c.exports.useContext(y),[s,r]=c.exports.useState(""),[a,i]=c.exports.useState(""),[u,p]=c.exports.useState(t!=null?t:""),g=c.exports.useRef(null);c.exports.useEffect(()=>{var h;(h=g.current)==null||h.focus()},[]);const d=h=>{r(h.target.value)},m=h=>{i(h)},f=h=>{p(h)},C=async()=>{try{await Dt({taskName:s,projectId:u,userId:n.uid,due:a})}catch(h){console.log(h)}r("")};return l(z,{mt:2,children:[e(q,{placeholder:"Task name",value:s,onChange:d,ref:g}),l(O,{spacing:2,children:[e(Se,{onSelectDate:m}),e(ke,{projectId:u!=null?u:"",onSelectProject:f})]}),l(O,{mt:2,ml:4,spacing:2,children:[e(j,{btnType:"primary",text:"Add task",onClick:C,isDisabled:s===""}),e(j,{btnType:"secondary",text:"Cancel",onClick:o})]})]})},Ot=()=>{const{isOpen:o,onOpen:t,onClose:n}=P();return o?e(Et,{onCloseEditor:n}):e(x,{variant:"ghost",isFullWidth:!0,leftIcon:e($e,{}),color:"gray.400",justifyContent:"flex-start",_hover:{color:"red.400"},onClick:t,children:"Add task"})},zt=["red","violet","teal","blue","lightblue","gray","salmon","yellow","orange","green","limegreen","skyblue","lavender","magenta"],Nt=({onSelectColor:o,color:t})=>e(qe,{onChange:s=>{o(s.target.value)},value:t,size:"sm",textTransform:"capitalize",children:zt.map(s=>e("option",{value:s,children:s},s))}),_t=({isOpen:o,onClose:t,onUpdateProject:n,projectId:s})=>{const{projects:r}=c.exports.useContext(y),a=r.find(h=>h.id===s),[i,u]=c.exports.useState(a.name),[p,g]=c.exports.useState(a.color),d=i===a.name&&p===a.color;return l(We,{isOpen:o,onClose:t,isCentered:!0,children:[e(ne,{}),l(Ve,{children:[e(se,{children:"Edit project"}),l(re,{children:[l(z,{children:[e(ae,{children:"Name"}),e(q,{placeholder:"Project name",value:i,onChange:h=>{u(h.target.value)}})]}),l(z,{children:[e(ae,{children:"Color"}),e(Nt,{onSelectColor:h=>{g(h)},color:p})]})]}),l(le,{children:[e(j,{btnType:"secondary",text:"Cancel",onClick:t}),e(j,{btnType:"primary",text:"Save",onClick:()=>{t(),!d&&n({name:i,color:p})},isDisabled:i===""})]})]})]})},ve=({children:o})=>l(L,{isLazy:!0,closeOnBlur:!0,children:[e(R,{children:e(Ke,{icon:e(Ye,{}),"aria-label":"popover trigger",variant:"ghost"})}),e(M,{w:"max",_focus:{border:"1px",borderColor:"gray.300"},boxShadow:"md",children:e(U,{display:"flex",flexDir:"column",children:o})})]}),De=({onCloseDialog:o,isDialogOpen:t,onDeleteAction:n,deletedItemName:s})=>{const r=c.exports.useRef(null);return e(Ge,{isOpen:t,leastDestructiveRef:r,onClose:o,isCentered:!0,children:e(ne,{children:l(Je,{children:[e(se,{children:e(Qe,{fontSize:"xl",children:e(Ze,{})})}),l(re,{children:["Are you sure you want to delete"," ",e(W,{fontWeight:"bold",as:"span",children:s}),"?"]}),l(le,{children:[e(x,{ref:r,onClick:o,variant:"outline",size:"sm",children:"Cancel"}),e(x,{colorScheme:"red",onClick:n,ml:3,size:"sm",children:"Delete"})]})]})})})},At=({onDeleteProject:o,onOpenEditor:t,projectName:n})=>{const{showCompletedTasks:s,toggleCompletedTasks:r}=c.exports.useContext(y),{isOpen:a,onOpen:i,onClose:u}=P();return l(v,{children:[l(ve,{children:[e(I,{icon:e(ce,{}),text:"Edit project",onClick:t}),e(I,{icon:e(ie,{}),text:"Delete project",onClick:i}),e(I,{icon:s?e(Xe,{}):e(et,{}),text:s?"Hide completed tasks":"Show completed tasks",onClick:()=>{r()}})]}),e(De,{isDialogOpen:a,onCloseDialog:u,onDeleteAction:o,deletedItemName:n})]})},Ft=()=>{const{isEditing:o,getSubmitButtonProps:t,getCancelButtonProps:n}=rt();return o?l(O,{children:[e(x,S(T({},t()),{color:"white",bg:"red.400",size:"sm",children:"Save"})),l(x,S(T({},n()),{variant:"ghost",size:"sm",children:["Cancel"," "]}))]}):null},Bt=({initialValue:o,onChangeTitle:t})=>{let n=tt();const[s,r]=c.exports.useState(o);return c.exports.useEffect(()=>{r(o)},[n,o]),l(ot,{value:s,isPreviewFocusable:!0,submitOnBlur:!1,selectAllOnFocus:!1,onSubmit:u=>{u!==o&&t(u)},onChange:u=>{r(u)},fontSize:"xl",fontWeight:"bold",mb:4,children:[e(nt,{_hover:{background:"gray.300"}}),e(st,{mb:2}),e(Ft,{})]})},Lt=({projectName:o,projectId:t})=>{let n=at();const{isOpen:s,onOpen:r,onClose:a}=P();return l(de,{as:"header",children:[t===""?e(lt,{fontSize:"xl",mb:4,children:o}):e(Bt,{initialValue:o,onChangeTitle:async g=>{await ye(t,{name:g})}}),e(ue,{}),t!==""&&e(At,{onDeleteProject:async()=>{n("/app/inbox"),await wt(t)},onOpenEditor:r,projectName:o}),t!==""&&s&&e(_t,{isOpen:s,projectName:o,projectId:t,onClose:a,onUpdateProject:async g=>{a(),await ye(t,g)}})]})},_=({children:o,projectName:t,projectId:n})=>l(ct,{maxW:"3xl",w:"85%",mt:"5.5rem",children:[e(Lt,{projectName:t,projectId:n}),e(pe,{as:"ul",alignItems:"flex-start",children:o}),e(Ot,{})]}),Rt=({taskName:o,onDeleteTask:t,onOpenEditor:n})=>{const{isOpen:s,onOpen:r,onClose:a}=P();return l(v,{children:[l(ve,{children:[e(I,{icon:e(ce,{}),text:"Edit task",onClick:n}),e(I,{icon:e(ie,{}),text:"Delete task",onClick:r})]}),e(De,{isDialogOpen:s,onCloseDialog:a,onDeleteAction:t,deletedItemName:o})]})},Mt=({isCompleted:o,onToggleCompleted:t})=>l(oe,{border:o?"none":"1px",borderColor:"gray.400",borderRadius:"50%",w:"20px",h:"20px",cursor:"pointer",mr:"2",onClick:t,children:[!o&&e(me,{as:he,w:"20px",h:"20px",opacity:0,_hover:{opacity:".3",transition:"opacity .25s"}}),o&&e(me,{as:he,w:"20px",h:"20px",color:"gray.500"})]}),Ut=({onCloseEditor:o,taskName:t,due:n,onUpdateTask:s})=>{const{projectId:r}=$(),a=c.exports.useRef(null),[i,u]=c.exports.useState(t),[p,g]=c.exports.useState(n),[d,m]=c.exports.useState(r!=null?r:""),f=i===t&&p===n&&d===r;c.exports.useEffect(()=>{var b;(b=a.current)==null||b.focus()},[]);const C=b=>{u(b.target.value)},h=b=>{g(b)},k=b=>{m(b)},Pe=()=>{if(f)return;o(),s({taskName:i,due:p,projectId:d})};return l(z,{children:[e(q,{placeholder:"Task name",value:i,onChange:C,ref:a}),l(O,{spacing:2,children:[e(Se,{onSelectDate:h,initialDate:n}),e(ke,{projectId:d!=null?d:"",onSelectProject:k})]}),l(O,{mt:2,ml:4,children:[e(j,{btnType:"primary",text:"Save",onClick:Pe,isDisabled:i===""}),e(j,{btnType:"secondary",text:"Cancel",onClick:o})]})]})},A=({taskName:o,completed:t,id:n,due:s})=>{const r=it(),{isOpen:a,onClose:i,onOpen:u}=P(),p=Te(s);return l(de,{as:"li",w:"full",borderBottom:"1px",borderColor:"gray.200",children:[!a&&l(v,{children:[e(Mt,{isCompleted:t,onToggleCompleted:async()=>{try{await xe(n,{completed:!t})}catch(f){console.log(f)}}}),l(pe,{alignItems:"flex-start",spacing:"0",py:4,children:[e(W,{textDecor:t?"line-through":"none",color:t?"gray.400":"black",children:o}),s&&e(W,{color:"teal",fontSize:"xs",children:p})]}),e(ue,{})]}),!t&&!a&&e(Rt,{onDeleteTask:async()=>{await Pt(n)},onOpenEditor:u,taskName:o}),a&&e(Ut,{taskName:o,due:s,onCloseEditor:i,onUpdateTask:async f=>{try{await xe(n,f),r({description:"Update successful!",status:"success",duration:5e3})}catch(C){console.log(C)}}})]})},F=({title:o})=>e(dt,{children:e(ut,{children:e("title",{children:o})})}),$t=()=>{const{tasks:o}=c.exports.useContext(y),n=o.filter(s=>s.completed===!1).filter(s=>s.projectId==="");return l(v,{children:[e(F,{title:"Inbox: Todoist Clone"}),e(_,{projectName:"Inbox",projectId:"",children:n.length===0?[]:n.map(s=>e(A,{taskName:s.taskName,completed:s.completed,id:s.id,due:s.due},s.id))})]})},qt=()=>{var p,g;const{projectId:o}=$(),{projects:t,tasks:n,showCompletedTasks:s}=c.exports.useContext(y),r=(g=(p=t.find(d=>d.id===o))==null?void 0:p.name)!=null?g:"",a=n.sort(d=>d.completed?1:-1),u=(s?a:n.filter(d=>d.completed===!1)).filter(d=>d.projectId===o);return l(v,{children:[e(F,{title:`${r}: Todoist Clone`}),e(_,{projectName:r,projectId:o!=null?o:"",children:u.length===0?[]:u.map(d=>e(A,{id:d.id,completed:d.completed,taskName:d.taskName,due:d.due},d.id))})]})},Wt=()=>{const{tasks:o}=c.exports.useContext(y),t=new Date().toDateString(),n=o.filter(s=>s.due===t);return l(v,{children:[e(F,{title:"Today: Todoist Clone"}),e(_,{projectName:"Today",projectId:"",children:n.length===0?[]:n.map(s=>e(A,{taskName:s.taskName,completed:s.completed,id:s.id,due:s.due},s.id))})]})},Vt=()=>{const{tasks:o}=c.exports.useContext(y),s=o.filter(r=>r.completed===!1).filter(r=>r.due!==""&&N(r.due)!==N(new Date().toDateString())).sort((r,a)=>N(r.due)-N(a.due));return l(v,{children:[e(F,{title:"Upcoming: Todoist Clone"}),e(_,{projectName:"Upcoming",projectId:"",children:s.length===0?[]:s.map(r=>e(A,{taskName:r.taskName,completed:r.completed,id:r.id,due:r.due},r.id))})]})},Kt=c.exports.lazy(()=>V(()=>import("./LoginFormik.6e641570.js"),["assets/LoginFormik.6e641570.js","assets/vendor.f24883fb.js","assets/firebaseAuth.d6a38ea5.js","assets/FirebaseAuthError.c83be632.js"])),Yt=c.exports.lazy(()=>V(()=>import("./SignupFormik.493335b8.js"),["assets/SignupFormik.493335b8.js","assets/vendor.f24883fb.js","assets/FirebaseAuthError.c83be632.js","assets/firebaseAuth.d6a38ea5.js"])),Gt=c.exports.lazy(()=>V(()=>import("./Content.2969f2ae.js"),["assets/Content.2969f2ae.js","assets/vendor.f24883fb.js","assets/firebaseAuth.d6a38ea5.js"]));function Jt(){return e(pt,{theme:mt,children:e(c.exports.Suspense,{fallback:e(ht,{position:"fixed",top:"50%",left:"50%"}),children:l(gt,{children:[l(w,{path:"/",element:e(It,{redirectTo:"/login",children:e(Gt,{})}),children:[e(w,{path:"app/inbox",element:e($t,{})}),e(w,{path:"app/today",element:e(Wt,{})}),e(w,{path:"app/upcoming",element:e(Vt,{})}),e(w,{path:"projects/:projectId",element:e(qt,{})})]}),e(w,{path:"/login",element:e(Kt,{})}),e(w,{path:"/signup",element:e(Yt,{})})]})})})}ft.render(e(Ct.StrictMode,{children:e(xt,{children:l(jt,{children:[e(yt,{}),e(Jt,{})]})})}),document.getElementById("root"));export{j as A,F as P,Nt as S,y as T,vt as a,eo as b,Se as c,ke as d,Dt as e,Xt as f};
