var y=Object.defineProperty;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(n,t,e)=>t in n?y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,g=(n,t)=>{for(var e in t||(t={}))p.call(t,e)&&m(n,e,t[e]);if(l)for(var e of l(t))f.call(t,e)&&m(n,e,t[e]);return n};var v=(n,t)=>{var e={};for(var a in n)p.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(n!=null&&l)for(var a of l(n))t.indexOf(a)<0&&f.call(n,a)&&(e[a]=n[a]);return e};import{n as E,r as u,R as r,c as C,_ as S,s as N,a as b}from"./vendor.ea6036d3.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}};I();const d="react-inline-edit";class c extends u.exports.Component{constructor(){super(...arguments);this.confirmedValue=this.props.value,this.state={value:this.props.value,editing:!1},this.start=()=>{this.setState({editing:!0})},this.editing=t=>{this.setState({value:t})},this.confirm=()=>{const{onChange:t}=this.props,{value:e}=this.state;this.confirmedValue=e,this.setState({editing:!1}),t({target:{value:e}})},this.cancel=()=>{this.setState({editing:!1,value:this.confirmedValue})},this.handleDblClick=()=>{this.start()},this.handleInputChange=t=>{const{value:e}=t.target;this.editing(e)},this.handleInputKeyUp=t=>{const{key:e}=t;e==="Enter"&&this.confirm(),e==="Escape"&&this.cancel()}}shouldComponentUpdate(t){const{value:e}=t;return e!==this.props.value&&e!==this.confirmedValue&&(this.confirmedValue=e,this.setState({value:e})),!0}render(){const h=this.props,{className:t,onChange:e,children:a}=h,s=v(h,["className","onChange","children"]),{value:i,editing:o}=this.state;return r.createElement("div",g({"data-component":d,className:C(d,t)},s),r.createElement("label",{hidden:o,className:"is-label",onDoubleClick:this.handleDblClick},i),r.createElement(S,{hidden:!o,type:"text",value:i,onChange:this.handleInputChange,onKeyUp:this.handleInputKeyUp,onBlur:this.cancel}))}}c.displayName=d;c.version="__VERSION__";c.defaultProps={onChange:E};const V=N.div`
  width: 80%;
  margin: 30px auto 0;
`;var _=()=>{const[n,t]=u.exports.useState("Hello inline edit");return u.exports.useEffect(()=>{console.log("value changed:",n)},[n]),r.createElement(V,null,r.createElement(c,{value:n,onChange:e=>t(e.target.value)}))};b.render(r.createElement(r.StrictMode,null,r.createElement(_,null)),document.getElementById("root"));