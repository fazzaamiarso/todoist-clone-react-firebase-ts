import{r as d,k as m,Q as n,j as o}from"./vendor.3fc7063a.js";import{M as c,T as i}from"./TaskItem.a55c71ec.js";import{T as l,l as t}from"./index.9ad73d2c.js";import{P as p}from"./PageHelmet.cf62f30f.js";const k=()=>{const{tasks:a}=d.exports.useContext(l),s=a.filter(e=>e.completed===!1).filter(e=>e.due!==""&&t(e.due)!==t(new Date().toDateString())).sort((e,r)=>t(e.due)-t(r.due));return m(n,{children:[o(p,{title:"Upcoming: Todoist Clone"}),o(c,{projectName:"Upcoming",projectId:"",children:s.length===0?[]:s.map(e=>o(i,{taskName:e.taskName,completed:e.completed,id:e.id,due:e.due},e.id))})]})};export{k as default};
