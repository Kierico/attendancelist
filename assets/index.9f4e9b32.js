import{j as f,r as c,R as p,a as h}from"./vendor.7be707dc.js";const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}};g();const r=f.exports.jsx,d=f.exports.jsxs;function y(o){return d("div",{className:"card",children:[r("strong",{children:o.name}),r("small",{children:o.time})]})}function x(){const[o,s]=c.exports.useState(""),[l,a]=c.exports.useState([]),[e,t]=c.exports.useState({});function i(){const n={name:o,time:new Date().toLocaleTimeString("pt-br",{hour:"2-digit",minute:"2-digit",second:"2-digit"})};a(u=>[...u,n])}return c.exports.useEffect(()=>{async function n(){const m=await(await fetch("https://api.github.com/users/kierico")).json();t({name:m.name,avatar:m.avatar_url})}n()},[]),d("div",{className:"container",children:[d("header",{children:[r("h1",{children:"Lista de Presen\xE7a"}),d("div",{children:[r("strong",{children:e.name}),r("img",{src:e.avatar,alt:"Foto de perfil"})]})]}),r("input",{type:"text",placeholder:"Digite o nome...",onChange:n=>s(n.target.value)}),r("button",{type:"button",onClick:i,children:"Adicionar"}),l.map(n=>r(y,{name:n.name,time:n.time},n.time))]})}p.render(r(h.StrictMode,{children:r(x,{})}),document.getElementById("root"));
