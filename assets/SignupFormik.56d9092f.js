import{ao as p,ap as h,k as r,Q as g,j as e,aq as b,ar as f,aa as o,a4 as x,as as y,W as w,h as F}from"./vendor.3fc7063a.js";import{c as q,a as i,F as N,b as S,I as t,g as j}from"./FirebaseAuthError.ace3ff90.js";import{b as v,c as k}from"./index.9ad73d2c.js";import{P as C}from"./PageHelmet.cf62f30f.js";const H=q({password:i().min(6,"Password at least 6 characters").required("Required"),email:i().email("Invalid email address").required("Required"),firstName:i().max(15).required("Required"),lastName:i().max(15).required("Required")}),A=()=>{const n=p();let d=h();return r(g,{children:[e(C,{title:"Todoist Clone Firebase"}),r(b,{centerContent:!0,display:"flex",alignItems:"center",justifyContent:"center",minH:"100vh",py:2,pb:32,children:[e(f,{as:"h2",pb:"8",children:"Signup"}),e(N,{initialValues:{email:"",password:"",firstName:"",lastName:""},onSubmit:async({email:s,password:c,firstName:l,lastName:m})=>{try{const a=await v(s,c);a.user.isAnonymous||await k(a.user.uid,{email:s,firstName:l,lastName:m,id:a.user.uid}),d("/app/inbox",{replace:!0}),n({description:`Welcome aboard ${l}!`,status:"info",duration:9e3,isClosable:!0})}catch(a){const u=j(a.code);n({description:u,status:"error",duration:9e3,isClosable:!0})}},validationSchema:H,children:s=>r(o,{as:S,spacing:4,children:[e(t,{name:"firstName",label:"First Name",placeholder:"John",type:"text"}),e(t,{name:"lastName",label:"Last Name",placeholder:"Doe",type:"text"}),e(t,{name:"email",label:"Email",placeholder:"example@email.com",type:"email"}),e(t,{name:"password",label:"Password",placeholder:"",type:"password"}),r(x,{children:["Already have an account?",e(y,{as:w,to:"/login",color:"blue",fontWeight:"500",ml:4,children:"Login here"})]}),e(o,{w:"full",pt:4,children:e(F,{type:"submit",isLoading:s.isSubmitting,isFullWidth:!0,colorScheme:"blue",children:"Signup"})})]})})]})]})};export{A as default};