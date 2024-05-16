function mk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iT={exports:{}},zh={},sT={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u=Symbol.for("react.element"),gk=Symbol.for("react.portal"),yk=Symbol.for("react.fragment"),vk=Symbol.for("react.strict_mode"),_k=Symbol.for("react.profiler"),wk=Symbol.for("react.provider"),Ek=Symbol.for("react.context"),Ik=Symbol.for("react.forward_ref"),Tk=Symbol.for("react.suspense"),Sk=Symbol.for("react.memo"),bk=Symbol.for("react.lazy"),Ww=Symbol.iterator;function xk(t){return t===null||typeof t!="object"?null:(t=Ww&&t[Ww]||t["@@iterator"],typeof t=="function"?t:null)}var oT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aT=Object.assign,lT={};function fa(t,e,n){this.props=t,this.context=e,this.refs=lT,this.updater=n||oT}fa.prototype.isReactComponent={};fa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uT(){}uT.prototype=fa.prototype;function Cy(t,e,n){this.props=t,this.context=e,this.refs=lT,this.updater=n||oT}var ky=Cy.prototype=new uT;ky.constructor=Cy;aT(ky,fa.prototype);ky.isPureReactComponent=!0;var Hw=Array.isArray,cT=Object.prototype.hasOwnProperty,Ny={current:null},dT={key:!0,ref:!0,__self:!0,__source:!0};function hT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cT.call(e,r)&&!dT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$u,type:t,key:s,ref:o,props:i,_owner:Ny.current}}function Ak(t,e){return{$$typeof:$u,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dy(t){return typeof t=="object"&&t!==null&&t.$$typeof===$u}function Pk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gw=/\/+/g;function pp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Pk(""+t.key):e.toString(36)}function ld(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $u:case gk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pp(o,0):r,Hw(i)?(n="",t!=null&&(n=t.replace(Gw,"$&/")+"/"),ld(i,e,n,"",function(u){return u})):i!=null&&(Dy(i)&&(i=Ak(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+pp(s,a);o+=ld(s,e,n,l,i)}else if(l=xk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+pp(s,a++),o+=ld(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tc(t,e,n){if(t==null)return t;var r=[],i=0;return ld(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},ud={transition:null},Ck={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:ud,ReactCurrentOwner:Ny};ne.Children={map:Tc,forEach:function(t,e,n){Tc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tc(t,function(){e++}),e},toArray:function(t){return Tc(t,function(e){return e})||[]},only:function(t){if(!Dy(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=fa;ne.Fragment=yk;ne.Profiler=_k;ne.PureComponent=Cy;ne.StrictMode=vk;ne.Suspense=Tk;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ck;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=aT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ny.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cT.call(e,l)&&!dT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$u,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:Ek,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wk,_context:t},t.Consumer=t};ne.createElement=hT;ne.createFactory=function(t){var e=hT.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:Ik,render:t}};ne.isValidElement=Dy;ne.lazy=function(t){return{$$typeof:bk,_payload:{_status:-1,_result:t},_init:Rk}};ne.memo=function(t,e){return{$$typeof:Sk,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ud.transition;ud.transition={};try{t()}finally{ud.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ne.useContext=function(t){return Ut.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ne.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ne.useId=function(){return Ut.current.useId()};ne.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ne.useRef=function(t){return Ut.current.useRef(t)};ne.useState=function(t){return Ut.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Ut.current.useTransition()};ne.version="18.2.0";sT.exports=ne;var A=sT.exports;const ee=rT(A),kk=mk({__proto__:null,default:ee},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nk=A,Dk=Symbol.for("react.element"),Ok=Symbol.for("react.fragment"),Vk=Object.prototype.hasOwnProperty,Lk=Nk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mk={key:!0,ref:!0,__self:!0,__source:!0};function fT(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Vk.call(e,r)&&!Mk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Dk,type:t,key:s,ref:o,props:i,_owner:Lk.current}}zh.Fragment=Ok;zh.jsx=fT;zh.jsxs=fT;iT.exports=zh;var f=iT.exports,_m={},pT={exports:{}},un={},mT={exports:{}},gT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,G){var J=j.length;j.push(G);e:for(;0<J;){var Te=J-1>>>1,Oe=j[Te];if(0<i(Oe,G))j[Te]=G,j[J]=Oe,J=Te;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var G=j[0],J=j.pop();if(J!==G){j[0]=J;e:for(var Te=0,Oe=j.length,Lr=Oe>>>1;Te<Lr;){var hn=2*(Te+1)-1,La=j[hn],ar=hn+1,Gi=j[ar];if(0>i(La,J))ar<Oe&&0>i(Gi,La)?(j[Te]=Gi,j[ar]=J,Te=ar):(j[Te]=La,j[hn]=J,Te=hn);else if(ar<Oe&&0>i(Gi,J))j[Te]=Gi,j[ar]=J,Te=ar;else break e}}return G}function i(j,G){var J=j.sortIndex-G.sortIndex;return J!==0?J:j.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=j)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(j){if(v=!1,y(j),!_)if(n(l)!==null)_=!0,Ys(S);else{var G=n(u);G!==null&&Ge(E,G.startTime-j)}}function S(j,G){_=!1,v&&(v=!1,g(O),O=-1),p=!0;var J=h;try{for(y(G),d=n(l);d!==null&&(!(d.expirationTime>G)||j&&!ge());){var Te=d.callback;if(typeof Te=="function"){d.callback=null,h=d.priorityLevel;var Oe=Te(d.expirationTime<=G);G=t.unstable_now(),typeof Oe=="function"?d.callback=Oe:d===n(l)&&r(l),y(G)}else r(l);d=n(l)}if(d!==null)var Lr=!0;else{var hn=n(u);hn!==null&&Ge(E,hn.startTime-G),Lr=!1}return Lr}finally{d=null,h=J,p=!1}}var x=!1,C=null,O=-1,Y=5,$=-1;function ge(){return!(t.unstable_now()-$<Y)}function It(){if(C!==null){var j=t.unstable_now();$=j;var G=!0;try{G=C(!0,j)}finally{G?Ln():(x=!1,C=null)}}else x=!1}var Ln;if(typeof m=="function")Ln=function(){m(It)};else if(typeof MessageChannel<"u"){var Hi=new MessageChannel,fp=Hi.port2;Hi.port1.onmessage=It,Ln=function(){fp.postMessage(null)}}else Ln=function(){w(It,0)};function Ys(j){C=j,x||(x=!0,Ln())}function Ge(j,G){O=w(function(){j(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Ys(S))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var J=h;h=G;try{return j()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,G){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var J=h;h=j;try{return G()}finally{h=J}},t.unstable_scheduleCallback=function(j,G,J){var Te=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Te+J:Te):J=Te,j){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=J+Oe,j={id:c++,callback:G,priorityLevel:j,startTime:J,expirationTime:Oe,sortIndex:-1},J>Te?(j.sortIndex=J,e(u,j),n(l)===null&&j===n(u)&&(v?(g(O),O=-1):v=!0,Ge(E,J-Te))):(j.sortIndex=Oe,e(l,j),_||p||(_=!0,Ys(S))),j},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(j){var G=h;return function(){var J=h;h=G;try{return j.apply(this,arguments)}finally{h=J}}}})(gT);mT.exports=gT;var Fk=mT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yT=A,on=Fk;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vT=new Set,Fl={};function Us(t,e){Bo(t,e),Bo(t+"Capture",e)}function Bo(t,e){for(Fl[t]=e,t=0;t<e.length;t++)vT.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wm=Object.prototype.hasOwnProperty,jk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kw={},Qw={};function Uk(t){return wm.call(Qw,t)?!0:wm.call(Kw,t)?!1:jk.test(t)?Qw[t]=!0:(Kw[t]=!0,!1)}function $k(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bk(t,e,n,r){if(e===null||typeof e>"u"||$k(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){wt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];wt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){wt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){wt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){wt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){wt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){wt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){wt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){wt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oy=/[\-:]([a-z])/g;function Vy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oy,Vy);wt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oy,Vy);wt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oy,Vy);wt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){wt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});wt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){wt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ly(t,e,n,r){var i=wt.hasOwnProperty(e)?wt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bk(e,n,i,r)&&(n=null),r||i===null?Uk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=yT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sc=Symbol.for("react.element"),co=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),My=Symbol.for("react.strict_mode"),Em=Symbol.for("react.profiler"),_T=Symbol.for("react.provider"),wT=Symbol.for("react.context"),Fy=Symbol.for("react.forward_ref"),Im=Symbol.for("react.suspense"),Tm=Symbol.for("react.suspense_list"),jy=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),ET=Symbol.for("react.offscreen"),Yw=Symbol.iterator;function Ma(t){return t===null||typeof t!="object"?null:(t=Yw&&t[Yw]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,mp;function il(t){if(mp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mp=e&&e[1]||""}return`
`+mp+t}var gp=!1;function yp(t,e){if(!t||gp)return"";gp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?il(t):""}function zk(t){switch(t.tag){case 5:return il(t.type);case 16:return il("Lazy");case 13:return il("Suspense");case 19:return il("SuspenseList");case 0:case 2:case 15:return t=yp(t.type,!1),t;case 11:return t=yp(t.type.render,!1),t;case 1:return t=yp(t.type,!0),t;default:return""}}function Sm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ho:return"Fragment";case co:return"Portal";case Em:return"Profiler";case My:return"StrictMode";case Im:return"Suspense";case Tm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wT:return(t.displayName||"Context")+".Consumer";case _T:return(t._context.displayName||"Context")+".Provider";case Fy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jy:return e=t.displayName||null,e!==null?e:Sm(t.type)||"Memo";case Wr:e=t._payload,t=t._init;try{return Sm(t(e))}catch{}}return null}function qk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sm(e);case 8:return e===My?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function IT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wk(t){var e=IT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bc(t){t._valueTracker||(t._valueTracker=Wk(t))}function TT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=IT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bm(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ST(t,e){e=e.checked,e!=null&&Ly(t,"checked",e,!1)}function xm(t,e){ST(t,e);var n=pi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Am(t,e.type,n):e.hasOwnProperty("defaultValue")&&Am(t,e.type,pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Am(t,e,n){(e!=="number"||jd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var sl=Array.isArray;function Po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Pm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(sl(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pi(n)}}function bT(t,e){var n=pi(e.value),r=pi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function e0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xc,AT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xc=xc||document.createElement("div"),xc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hk=["Webkit","ms","Moz","O"];Object.keys(yl).forEach(function(t){Hk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yl[e]=yl[t]})});function PT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yl.hasOwnProperty(t)&&yl[t]?(""+e).trim():e+"px"}function RT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=PT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gk=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cm(t,e){if(e){if(Gk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function km(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nm=null;function Uy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dm=null,Ro=null,Co=null;function t0(t){if(t=qu(t)){if(typeof Dm!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Kh(e),Dm(t.stateNode,t.type,e))}}function CT(t){Ro?Co?Co.push(t):Co=[t]:Ro=t}function kT(){if(Ro){var t=Ro,e=Co;if(Co=Ro=null,t0(t),e)for(t=0;t<e.length;t++)t0(e[t])}}function NT(t,e){return t(e)}function DT(){}var vp=!1;function OT(t,e,n){if(vp)return t(e,n);vp=!0;try{return NT(t,e,n)}finally{vp=!1,(Ro!==null||Co!==null)&&(DT(),kT())}}function Ul(t,e){var n=t.stateNode;if(n===null)return null;var r=Kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Om=!1;if(_r)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){Om=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{Om=!1}function Kk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var vl=!1,Ud=null,$d=!1,Vm=null,Qk={onError:function(t){vl=!0,Ud=t}};function Yk(t,e,n,r,i,s,o,a,l){vl=!1,Ud=null,Kk.apply(Qk,arguments)}function Jk(t,e,n,r,i,s,o,a,l){if(Yk.apply(this,arguments),vl){if(vl){var u=Ud;vl=!1,Ud=null}else throw Error(k(198));$d||($d=!0,Vm=u)}}function $s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function VT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function n0(t){if($s(t)!==t)throw Error(k(188))}function Xk(t){var e=t.alternate;if(!e){if(e=$s(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return n0(i),t;if(s===r)return n0(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function LT(t){return t=Xk(t),t!==null?MT(t):null}function MT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=MT(t);if(e!==null)return e;t=t.sibling}return null}var FT=on.unstable_scheduleCallback,r0=on.unstable_cancelCallback,Zk=on.unstable_shouldYield,eN=on.unstable_requestPaint,ze=on.unstable_now,tN=on.unstable_getCurrentPriorityLevel,$y=on.unstable_ImmediatePriority,jT=on.unstable_UserBlockingPriority,Bd=on.unstable_NormalPriority,nN=on.unstable_LowPriority,UT=on.unstable_IdlePriority,qh=null,Xn=null;function rN(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(qh,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:oN,iN=Math.log,sN=Math.LN2;function oN(t){return t>>>=0,t===0?32:31-(iN(t)/sN|0)|0}var Ac=64,Pc=4194304;function ol(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ol(a):(s&=o,s!==0&&(r=ol(s)))}else o=n&~i,o!==0?r=ol(o):s!==0&&(r=ol(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function aN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=aN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Lm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $T(){var t=Ac;return Ac<<=1,!(Ac&4194240)&&(Ac=64),t}function _p(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function uN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function By(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function BT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zT,zy,qT,WT,HT,Mm=!1,Rc=[],ri=null,ii=null,si=null,$l=new Map,Bl=new Map,Gr=[],cN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i0(t,e){switch(t){case"focusin":case"focusout":ri=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":$l.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(e.pointerId)}}function ja(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qu(e),e!==null&&zy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dN(t,e,n,r,i){switch(e){case"focusin":return ri=ja(ri,t,e,n,r,i),!0;case"dragenter":return ii=ja(ii,t,e,n,r,i),!0;case"mouseover":return si=ja(si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $l.set(s,ja($l.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bl.set(s,ja(Bl.get(s)||null,t,e,n,r,i)),!0}return!1}function GT(t){var e=is(t.target);if(e!==null){var n=$s(e);if(n!==null){if(e=n.tag,e===13){if(e=VT(n),e!==null){t.blockedOn=e,HT(t.priority,function(){qT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nm=r,n.target.dispatchEvent(r),Nm=null}else return e=qu(n),e!==null&&zy(e),t.blockedOn=n,!1;e.shift()}return!0}function s0(t,e,n){cd(t)&&n.delete(e)}function hN(){Mm=!1,ri!==null&&cd(ri)&&(ri=null),ii!==null&&cd(ii)&&(ii=null),si!==null&&cd(si)&&(si=null),$l.forEach(s0),Bl.forEach(s0)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,Mm||(Mm=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,hN)))}function zl(t){function e(i){return Ua(i,t)}if(0<Rc.length){Ua(Rc[0],t);for(var n=1;n<Rc.length;n++){var r=Rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ri!==null&&Ua(ri,t),ii!==null&&Ua(ii,t),si!==null&&Ua(si,t),$l.forEach(e),Bl.forEach(e),n=0;n<Gr.length;n++)r=Gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)GT(n),n.blockedOn===null&&Gr.shift()}var ko=Rr.ReactCurrentBatchConfig,qd=!0;function fN(t,e,n,r){var i=ce,s=ko.transition;ko.transition=null;try{ce=1,qy(t,e,n,r)}finally{ce=i,ko.transition=s}}function pN(t,e,n,r){var i=ce,s=ko.transition;ko.transition=null;try{ce=4,qy(t,e,n,r)}finally{ce=i,ko.transition=s}}function qy(t,e,n,r){if(qd){var i=Fm(t,e,n,r);if(i===null)Rp(t,e,r,Wd,n),i0(t,r);else if(dN(i,t,e,n,r))r.stopPropagation();else if(i0(t,r),e&4&&-1<cN.indexOf(t)){for(;i!==null;){var s=qu(i);if(s!==null&&zT(s),s=Fm(t,e,n,r),s===null&&Rp(t,e,r,Wd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rp(t,e,r,null,n)}}var Wd=null;function Fm(t,e,n,r){if(Wd=null,t=Uy(r),t=is(t),t!==null)if(e=$s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=VT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wd=t,null}function KT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tN()){case $y:return 1;case jT:return 4;case Bd:case nN:return 16;case UT:return 536870912;default:return 16}default:return 16}}var Jr=null,Wy=null,dd=null;function QT(){if(dd)return dd;var t,e=Wy,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dd=i.slice(t,1<r?1-r:void 0)}function hd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cc(){return!0}function o0(){return!1}function cn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cc:o0,this.isPropagationStopped=o0,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cc)},persist:function(){},isPersistent:Cc}),e}var pa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hy=cn(pa),zu=Ne({},pa,{view:0,detail:0}),mN=cn(zu),wp,Ep,$a,Wh=Ne({},zu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$a&&($a&&t.type==="mousemove"?(wp=t.screenX-$a.screenX,Ep=t.screenY-$a.screenY):Ep=wp=0,$a=t),wp)},movementY:function(t){return"movementY"in t?t.movementY:Ep}}),a0=cn(Wh),gN=Ne({},Wh,{dataTransfer:0}),yN=cn(gN),vN=Ne({},zu,{relatedTarget:0}),Ip=cn(vN),_N=Ne({},pa,{animationName:0,elapsedTime:0,pseudoElement:0}),wN=cn(_N),EN=Ne({},pa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IN=cn(EN),TN=Ne({},pa,{data:0}),l0=cn(TN),SN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xN[t])?!!e[t]:!1}function Gy(){return AN}var PN=Ne({},zu,{key:function(t){if(t.key){var e=SN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gy,charCode:function(t){return t.type==="keypress"?hd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RN=cn(PN),CN=Ne({},Wh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u0=cn(CN),kN=Ne({},zu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gy}),NN=cn(kN),DN=Ne({},pa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ON=cn(DN),VN=Ne({},Wh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LN=cn(VN),MN=[9,13,27,32],Ky=_r&&"CompositionEvent"in window,_l=null;_r&&"documentMode"in document&&(_l=document.documentMode);var FN=_r&&"TextEvent"in window&&!_l,YT=_r&&(!Ky||_l&&8<_l&&11>=_l),c0=" ",d0=!1;function JT(t,e){switch(t){case"keyup":return MN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function XT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function jN(t,e){switch(t){case"compositionend":return XT(e);case"keypress":return e.which!==32?null:(d0=!0,c0);case"textInput":return t=e.data,t===c0&&d0?null:t;default:return null}}function UN(t,e){if(fo)return t==="compositionend"||!Ky&&JT(t,e)?(t=QT(),dd=Wy=Jr=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return YT&&e.locale!=="ko"?null:e.data;default:return null}}var $N={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$N[t.type]:e==="textarea"}function ZT(t,e,n,r){CT(r),e=Hd(e,"onChange"),0<e.length&&(n=new Hy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wl=null,ql=null;function BN(t){cS(t,0)}function Hh(t){var e=go(t);if(TT(e))return t}function zN(t,e){if(t==="change")return e}var eS=!1;if(_r){var Tp;if(_r){var Sp="oninput"in document;if(!Sp){var f0=document.createElement("div");f0.setAttribute("oninput","return;"),Sp=typeof f0.oninput=="function"}Tp=Sp}else Tp=!1;eS=Tp&&(!document.documentMode||9<document.documentMode)}function p0(){wl&&(wl.detachEvent("onpropertychange",tS),ql=wl=null)}function tS(t){if(t.propertyName==="value"&&Hh(ql)){var e=[];ZT(e,ql,t,Uy(t)),OT(BN,e)}}function qN(t,e,n){t==="focusin"?(p0(),wl=e,ql=n,wl.attachEvent("onpropertychange",tS)):t==="focusout"&&p0()}function WN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(ql)}function HN(t,e){if(t==="click")return Hh(e)}function GN(t,e){if(t==="input"||t==="change")return Hh(e)}function KN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:KN;function Wl(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wm.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function m0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g0(t,e){var n=m0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=m0(n)}}function nS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rS(){for(var t=window,e=jd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jd(t.document)}return e}function Qy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QN(t){var e=rS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nS(n.ownerDocument.documentElement,n)){if(r!==null&&Qy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=g0(n,s);var o=g0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YN=_r&&"documentMode"in document&&11>=document.documentMode,po=null,jm=null,El=null,Um=!1;function y0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Um||po==null||po!==jd(r)||(r=po,"selectionStart"in r&&Qy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),El&&Wl(El,r)||(El=r,r=Hd(jm,"onSelect"),0<r.length&&(e=new Hy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=po)))}function kc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mo={animationend:kc("Animation","AnimationEnd"),animationiteration:kc("Animation","AnimationIteration"),animationstart:kc("Animation","AnimationStart"),transitionend:kc("Transition","TransitionEnd")},bp={},iS={};_r&&(iS=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Gh(t){if(bp[t])return bp[t];if(!mo[t])return t;var e=mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iS)return bp[t]=e[n];return t}var sS=Gh("animationend"),oS=Gh("animationiteration"),aS=Gh("animationstart"),lS=Gh("transitionend"),uS=new Map,v0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){uS.set(t,e),Us(e,[t])}for(var xp=0;xp<v0.length;xp++){var Ap=v0[xp],JN=Ap.toLowerCase(),XN=Ap[0].toUpperCase()+Ap.slice(1);ki(JN,"on"+XN)}ki(sS,"onAnimationEnd");ki(oS,"onAnimationIteration");ki(aS,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(lS,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZN=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function _0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jk(r,e,void 0,t),t.currentTarget=null}function cS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;_0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;_0(i,a,u),s=l}}}if($d)throw t=Vm,$d=!1,Vm=null,t}function ye(t,e){var n=e[Wm];n===void 0&&(n=e[Wm]=new Set);var r=t+"__bubble";n.has(r)||(dS(e,t,2,!1),n.add(r))}function Pp(t,e,n){var r=0;e&&(r|=4),dS(n,t,r,e)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Hl(t){if(!t[Nc]){t[Nc]=!0,vT.forEach(function(n){n!=="selectionchange"&&(ZN.has(n)||Pp(n,!1,t),Pp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nc]||(e[Nc]=!0,Pp("selectionchange",!1,e))}}function dS(t,e,n,r){switch(KT(e)){case 1:var i=fN;break;case 4:i=pN;break;default:i=qy}n=i.bind(null,e,n,t),i=void 0,!Om||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}OT(function(){var u=s,c=Uy(n),d=[];e:{var h=uS.get(t);if(h!==void 0){var p=Hy,_=t;switch(t){case"keypress":if(hd(n)===0)break e;case"keydown":case"keyup":p=RN;break;case"focusin":_="focus",p=Ip;break;case"focusout":_="blur",p=Ip;break;case"beforeblur":case"afterblur":p=Ip;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=a0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=NN;break;case sS:case oS:case aS:p=wN;break;case lS:p=ON;break;case"scroll":p=mN;break;case"wheel":p=LN;break;case"copy":case"cut":case"paste":p=IN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=u0}var v=(e&4)!==0,w=!v&&t==="scroll",g=v?h!==null?h+"Capture":null:h;v=[];for(var m=u,y;m!==null;){y=m;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=Ul(m,g),E!=null&&v.push(Gl(m,E,y)))),w)break;m=m.return}0<v.length&&(h=new p(h,_,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Nm&&(_=n.relatedTarget||n.fromElement)&&(is(_)||_[wr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?is(_):null,_!==null&&(w=$s(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(v=a0,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=u0,E="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?h:go(p),y=_==null?h:go(_),h=new v(E,m+"leave",p,n,c),h.target=w,h.relatedTarget=y,E=null,is(c)===u&&(v=new v(g,m+"enter",_,n,c),v.target=y,v.relatedTarget=w,E=v),w=E,p&&_)t:{for(v=p,g=_,m=0,y=v;y;y=Js(y))m++;for(y=0,E=g;E;E=Js(E))y++;for(;0<m-y;)v=Js(v),m--;for(;0<y-m;)g=Js(g),y--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Js(v),g=Js(g)}v=null}else v=null;p!==null&&w0(d,h,p,v,!1),_!==null&&w!==null&&w0(d,w,_,v,!0)}}e:{if(h=u?go(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=zN;else if(h0(h))if(eS)S=GN;else{S=WN;var x=qN}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=HN);if(S&&(S=S(t,u))){ZT(d,S,n,c);break e}x&&x(t,h,u),t==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&Am(h,"number",h.value)}switch(x=u?go(u):window,t){case"focusin":(h0(x)||x.contentEditable==="true")&&(po=x,jm=u,El=null);break;case"focusout":El=jm=po=null;break;case"mousedown":Um=!0;break;case"contextmenu":case"mouseup":case"dragend":Um=!1,y0(d,n,c);break;case"selectionchange":if(YN)break;case"keydown":case"keyup":y0(d,n,c)}var C;if(Ky)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fo?JT(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(YT&&n.locale!=="ko"&&(fo||O!=="onCompositionStart"?O==="onCompositionEnd"&&fo&&(C=QT()):(Jr=c,Wy="value"in Jr?Jr.value:Jr.textContent,fo=!0)),x=Hd(u,O),0<x.length&&(O=new l0(O,t,null,n,c),d.push({event:O,listeners:x}),C?O.data=C:(C=XT(n),C!==null&&(O.data=C)))),(C=FN?jN(t,n):UN(t,n))&&(u=Hd(u,"onBeforeInput"),0<u.length&&(c=new l0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}cS(d,e)})}function Gl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ul(t,n),s!=null&&r.unshift(Gl(t,s,i)),s=Ul(t,e),s!=null&&r.push(Gl(t,s,i))),t=t.return}return r}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function w0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ul(n,s),l!=null&&o.unshift(Gl(n,l,a))):i||(l=Ul(n,s),l!=null&&o.push(Gl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var e2=/\r\n?/g,t2=/\u0000|\uFFFD/g;function E0(t){return(typeof t=="string"?t:""+t).replace(e2,`
`).replace(t2,"")}function Dc(t,e,n){if(e=E0(e),E0(t)!==e&&n)throw Error(k(425))}function Gd(){}var $m=null,Bm=null;function zm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qm=typeof setTimeout=="function"?setTimeout:void 0,n2=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,r2=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(t){return I0.resolve(null).then(t).catch(i2)}:qm;function i2(t){setTimeout(function(){throw t})}function Cp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zl(e)}function oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function T0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ma=Math.random().toString(36).slice(2),jn="__reactFiber$"+ma,Kl="__reactProps$"+ma,wr="__reactContainer$"+ma,Wm="__reactEvents$"+ma,s2="__reactListeners$"+ma,o2="__reactHandles$"+ma;function is(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T0(t);t!==null;){if(n=t[jn])return n;t=T0(t)}return e}t=n,n=t.parentNode}return null}function qu(t){return t=t[jn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Kh(t){return t[Kl]||null}var Hm=[],yo=-1;function Ni(t){return{current:t}}function Ee(t){0>yo||(t.current=Hm[yo],Hm[yo]=null,yo--)}function pe(t,e){yo++,Hm[yo]=t.current,t.current=e}var mi={},Rt=Ni(mi),Qt=Ni(!1),ws=mi;function zo(t,e){var n=t.type.contextTypes;if(!n)return mi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function Kd(){Ee(Qt),Ee(Rt)}function S0(t,e,n){if(Rt.current!==mi)throw Error(k(168));pe(Rt,e),pe(Qt,n)}function hS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,qk(t)||"Unknown",i));return Ne({},n,r)}function Qd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mi,ws=Rt.current,pe(Rt,t),pe(Qt,Qt.current),!0}function b0(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=hS(t,e,ws),r.__reactInternalMemoizedMergedChildContext=t,Ee(Qt),Ee(Rt),pe(Rt,t)):Ee(Qt),pe(Qt,n)}var ur=null,Qh=!1,kp=!1;function fS(t){ur===null?ur=[t]:ur.push(t)}function a2(t){Qh=!0,fS(t)}function Di(){if(!kp&&ur!==null){kp=!0;var t=0,e=ce;try{var n=ur;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,Qh=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),FT($y,Di),i}finally{ce=e,kp=!1}}return null}var vo=[],_o=0,Yd=null,Jd=0,fn=[],pn=0,Es=null,cr=1,dr="";function Qi(t,e){vo[_o++]=Jd,vo[_o++]=Yd,Yd=t,Jd=e}function pS(t,e,n){fn[pn++]=cr,fn[pn++]=dr,fn[pn++]=Es,Es=t;var r=cr;t=dr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var s=32-Cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-Cn(e)+i|n<<i|r,dr=s+t}else cr=1<<s|n<<i|r,dr=t}function Yy(t){t.return!==null&&(Qi(t,1),pS(t,1,0))}function Jy(t){for(;t===Yd;)Yd=vo[--_o],vo[_o]=null,Jd=vo[--_o],vo[_o]=null;for(;t===Es;)Es=fn[--pn],fn[pn]=null,dr=fn[--pn],fn[pn]=null,cr=fn[--pn],fn[pn]=null}var sn=null,nn=null,Se=!1,An=null;function mS(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function x0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,nn=oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:cr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,nn=null,!0):!1;default:return!1}}function Gm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Km(t){if(Se){var e=nn;if(e){var n=e;if(!x0(t,e)){if(Gm(t))throw Error(k(418));e=oi(n.nextSibling);var r=sn;e&&x0(t,e)?mS(r,n):(t.flags=t.flags&-4097|2,Se=!1,sn=t)}}else{if(Gm(t))throw Error(k(418));t.flags=t.flags&-4097|2,Se=!1,sn=t}}}function A0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Oc(t){if(t!==sn)return!1;if(!Se)return A0(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zm(t.type,t.memoizedProps)),e&&(e=nn)){if(Gm(t))throw gS(),Error(k(418));for(;e;)mS(t,e),e=oi(e.nextSibling)}if(A0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=sn?oi(t.stateNode.nextSibling):null;return!0}function gS(){for(var t=nn;t;)t=oi(t.nextSibling)}function qo(){nn=sn=null,Se=!1}function Xy(t){An===null?An=[t]:An.push(t)}var l2=Rr.ReactCurrentBatchConfig;function bn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Xd=Ni(null),Zd=null,wo=null,Zy=null;function ev(){Zy=wo=Zd=null}function tv(t){var e=Xd.current;Ee(Xd),t._currentValue=e}function Qm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function No(t,e){Zd=t,Zy=wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Zy!==t)if(t={context:t,memoizedValue:e,next:null},wo===null){if(Zd===null)throw Error(k(308));wo=t,Zd.dependencies={lanes:0,firstContext:t}}else wo=wo.next=t;return e}var ss=null;function nv(t){ss===null?ss=[t]:ss.push(t)}function yS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nv(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function rv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ai(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,nv(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function fd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,By(t,n)}}function P0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eh(t,e,n,r){var i=t.updateQueue;Hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(h=e,p=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=Ne({},d,h);break e;case 2:Hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ts|=o,t.lanes=o,t.memoizedState=d}}function R0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var _S=new yT.Component().refs;function Ym(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yh={isMounted:function(t){return(t=t._reactInternals)?$s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ui(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ai(t,s,i),e!==null&&(kn(e,t,i,r),fd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ui(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ai(t,s,i),e!==null&&(kn(e,t,i,r),fd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=ui(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ai(t,i,r),e!==null&&(kn(e,t,r,n),fd(e,t,r))}};function C0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wl(n,r)||!Wl(i,s):!0}function wS(t,e,n){var r=!1,i=mi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(i=Yt(e)?ws:Rt.current,r=e.contextTypes,s=(r=r!=null)?zo(t,i):mi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function k0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yh.enqueueReplaceState(e,e.state,null)}function Jm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_S,rv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=En(s):(s=Yt(e)?ws:Rt.current,i.context=zo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ym(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yh.enqueueReplaceState(i,i.state,null),eh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_S&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Vc(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function N0(t){var e=t._init;return e(t._payload)}function ES(t){function e(g,m){if(t){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=ci(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,y,E){return m===null||m.tag!==6?(m=Fp(y,g.mode,E),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,E){var S=y.type;return S===ho?c(g,m,y.props.children,E,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wr&&N0(S)===m.type)?(E=i(m,y.props),E.ref=Ba(g,m,y),E.return=g,E):(E=_d(y.type,y.key,y.props,null,g.mode,E),E.ref=Ba(g,m,y),E.return=g,E)}function u(g,m,y,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=jp(y,g.mode,E),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function c(g,m,y,E,S){return m===null||m.tag!==7?(m=ms(y,g.mode,E,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function d(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fp(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sc:return y=_d(m.type,m.key,m.props,null,g.mode,y),y.ref=Ba(g,null,m),y.return=g,y;case co:return m=jp(m,g.mode,y),m.return=g,m;case Wr:var E=m._init;return d(g,E(m._payload),y)}if(sl(m)||Ma(m))return m=ms(m,g.mode,y,null),m.return=g,m;Vc(g,m)}return null}function h(g,m,y,E){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sc:return y.key===S?l(g,m,y,E):null;case co:return y.key===S?u(g,m,y,E):null;case Wr:return S=y._init,h(g,m,S(y._payload),E)}if(sl(y)||Ma(y))return S!==null?null:c(g,m,y,E,null);Vc(g,y)}return null}function p(g,m,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(m,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Sc:return g=g.get(E.key===null?y:E.key)||null,l(m,g,E,S);case co:return g=g.get(E.key===null?y:E.key)||null,u(m,g,E,S);case Wr:var x=E._init;return p(g,m,y,x(E._payload),S)}if(sl(E)||Ma(E))return g=g.get(y)||null,c(m,g,E,S,null);Vc(m,E)}return null}function _(g,m,y,E){for(var S=null,x=null,C=m,O=m=0,Y=null;C!==null&&O<y.length;O++){C.index>O?(Y=C,C=null):Y=C.sibling;var $=h(g,C,y[O],E);if($===null){C===null&&(C=Y);break}t&&C&&$.alternate===null&&e(g,C),m=s($,m,O),x===null?S=$:x.sibling=$,x=$,C=Y}if(O===y.length)return n(g,C),Se&&Qi(g,O),S;if(C===null){for(;O<y.length;O++)C=d(g,y[O],E),C!==null&&(m=s(C,m,O),x===null?S=C:x.sibling=C,x=C);return Se&&Qi(g,O),S}for(C=r(g,C);O<y.length;O++)Y=p(C,g,O,y[O],E),Y!==null&&(t&&Y.alternate!==null&&C.delete(Y.key===null?O:Y.key),m=s(Y,m,O),x===null?S=Y:x.sibling=Y,x=Y);return t&&C.forEach(function(ge){return e(g,ge)}),Se&&Qi(g,O),S}function v(g,m,y,E){var S=Ma(y);if(typeof S!="function")throw Error(k(150));if(y=S.call(y),y==null)throw Error(k(151));for(var x=S=null,C=m,O=m=0,Y=null,$=y.next();C!==null&&!$.done;O++,$=y.next()){C.index>O?(Y=C,C=null):Y=C.sibling;var ge=h(g,C,$.value,E);if(ge===null){C===null&&(C=Y);break}t&&C&&ge.alternate===null&&e(g,C),m=s(ge,m,O),x===null?S=ge:x.sibling=ge,x=ge,C=Y}if($.done)return n(g,C),Se&&Qi(g,O),S;if(C===null){for(;!$.done;O++,$=y.next())$=d(g,$.value,E),$!==null&&(m=s($,m,O),x===null?S=$:x.sibling=$,x=$);return Se&&Qi(g,O),S}for(C=r(g,C);!$.done;O++,$=y.next())$=p(C,g,O,$.value,E),$!==null&&(t&&$.alternate!==null&&C.delete($.key===null?O:$.key),m=s($,m,O),x===null?S=$:x.sibling=$,x=$);return t&&C.forEach(function(It){return e(g,It)}),Se&&Qi(g,O),S}function w(g,m,y,E){if(typeof y=="object"&&y!==null&&y.type===ho&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sc:e:{for(var S=y.key,x=m;x!==null;){if(x.key===S){if(S=y.type,S===ho){if(x.tag===7){n(g,x.sibling),m=i(x,y.props.children),m.return=g,g=m;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Wr&&N0(S)===x.type){n(g,x.sibling),m=i(x,y.props),m.ref=Ba(g,x,y),m.return=g,g=m;break e}n(g,x);break}else e(g,x);x=x.sibling}y.type===ho?(m=ms(y.props.children,g.mode,E,y.key),m.return=g,g=m):(E=_d(y.type,y.key,y.props,null,g.mode,E),E.ref=Ba(g,m,y),E.return=g,g=E)}return o(g);case co:e:{for(x=y.key;m!==null;){if(m.key===x)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=jp(y,g.mode,E),m.return=g,g=m}return o(g);case Wr:return x=y._init,w(g,m,x(y._payload),E)}if(sl(y))return _(g,m,y,E);if(Ma(y))return v(g,m,y,E);Vc(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Fp(y,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return w}var Wo=ES(!0),IS=ES(!1),Wu={},Zn=Ni(Wu),Ql=Ni(Wu),Yl=Ni(Wu);function os(t){if(t===Wu)throw Error(k(174));return t}function iv(t,e){switch(pe(Yl,e),pe(Ql,t),pe(Zn,Wu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rm(e,t)}Ee(Zn),pe(Zn,e)}function Ho(){Ee(Zn),Ee(Ql),Ee(Yl)}function TS(t){os(Yl.current);var e=os(Zn.current),n=Rm(e,t.type);e!==n&&(pe(Ql,t),pe(Zn,n))}function sv(t){Ql.current===t&&(Ee(Zn),Ee(Ql))}var Re=Ni(0);function th(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Np=[];function ov(){for(var t=0;t<Np.length;t++)Np[t]._workInProgressVersionPrimary=null;Np.length=0}var pd=Rr.ReactCurrentDispatcher,Dp=Rr.ReactCurrentBatchConfig,Is=0,Ce=null,et=null,st=null,nh=!1,Il=!1,Jl=0,u2=0;function Tt(){throw Error(k(321))}function av(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function lv(t,e,n,r,i,s){if(Is=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pd.current=t===null||t.memoizedState===null?f2:p2,t=n(r,i),Il){s=0;do{if(Il=!1,Jl=0,25<=s)throw Error(k(301));s+=1,st=et=null,e.updateQueue=null,pd.current=m2,t=n(r,i)}while(Il)}if(pd.current=rh,e=et!==null&&et.next!==null,Is=0,st=et=Ce=null,nh=!1,e)throw Error(k(300));return t}function uv(){var t=Jl!==0;return Jl=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ce.memoizedState=st=t:st=st.next=t,st}function In(){if(et===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=st===null?Ce.memoizedState:st.next;if(e!==null)st=e,et=t;else{if(t===null)throw Error(k(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Ce.memoizedState=st=t:st=st.next=t}return st}function Xl(t,e){return typeof e=="function"?e(t):e}function Op(t){var e=In(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Is&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Ce.lanes|=c,Ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vp(t){var e=In(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function SS(){}function bS(t,e){var n=Ce,r=In(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Wt=!0),r=r.queue,cv(PS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Zl(9,AS.bind(null,n,r,i,e),void 0,null),at===null)throw Error(k(349));Is&30||xS(n,e,i)}return i}function xS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AS(t,e,n,r){e.value=n,e.getSnapshot=r,RS(e)&&CS(t)}function PS(t,e,n){return n(function(){RS(e)&&CS(t)})}function RS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function CS(t){var e=Er(t,1);e!==null&&kn(e,t,1,-1)}function D0(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xl,lastRenderedState:t},e.queue=t,t=t.dispatch=h2.bind(null,Ce,t),[e.memoizedState,t]}function Zl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kS(){return In().memoizedState}function md(t,e,n,r){var i=Fn();Ce.flags|=t,i.memoizedState=Zl(1|e,n,void 0,r===void 0?null:r)}function Jh(t,e,n,r){var i=In();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&av(r,o.deps)){i.memoizedState=Zl(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=Zl(1|e,n,s,r)}function O0(t,e){return md(8390656,8,t,e)}function cv(t,e){return Jh(2048,8,t,e)}function NS(t,e){return Jh(4,2,t,e)}function DS(t,e){return Jh(4,4,t,e)}function OS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function VS(t,e,n){return n=n!=null?n.concat([t]):null,Jh(4,4,OS.bind(null,e,t),n)}function dv(){}function LS(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&av(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MS(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&av(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function FS(t,e,n){return Is&21?(Nn(n,e)||(n=$T(),Ce.lanes|=n,Ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function c2(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Dp.transition;Dp.transition={};try{t(!1),e()}finally{ce=n,Dp.transition=r}}function jS(){return In().memoizedState}function d2(t,e,n){var r=ui(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},US(t))$S(e,n);else if(n=yS(t,e,n,r),n!==null){var i=Vt();kn(n,t,r,i),BS(n,e,r)}}function h2(t,e,n){var r=ui(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(US(t))$S(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(i.next=i,nv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yS(t,e,i,r),n!==null&&(i=Vt(),kn(n,t,r,i),BS(n,e,r))}}function US(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function $S(t,e){Il=nh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,By(t,n)}}var rh={readContext:En,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},f2={readContext:En,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:O0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,md(4194308,4,OS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return md(4194308,4,t,e)},useInsertionEffect:function(t,e){return md(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=d2.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:D0,useDebugValue:dv,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=D0(!1),e=t[0];return t=c2.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=Fn();if(Se){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),at===null)throw Error(k(349));Is&30||xS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,O0(PS.bind(null,r,s,t),[t]),r.flags|=2048,Zl(9,AS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=at.identifierPrefix;if(Se){var n=dr,r=cr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=u2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},p2={readContext:En,useCallback:LS,useContext:En,useEffect:cv,useImperativeHandle:VS,useInsertionEffect:NS,useLayoutEffect:DS,useMemo:MS,useReducer:Op,useRef:kS,useState:function(){return Op(Xl)},useDebugValue:dv,useDeferredValue:function(t){var e=In();return FS(e,et.memoizedState,t)},useTransition:function(){var t=Op(Xl)[0],e=In().memoizedState;return[t,e]},useMutableSource:SS,useSyncExternalStore:bS,useId:jS,unstable_isNewReconciler:!1},m2={readContext:En,useCallback:LS,useContext:En,useEffect:cv,useImperativeHandle:VS,useInsertionEffect:NS,useLayoutEffect:DS,useMemo:MS,useReducer:Vp,useRef:kS,useState:function(){return Vp(Xl)},useDebugValue:dv,useDeferredValue:function(t){var e=In();return et===null?e.memoizedState=t:FS(e,et.memoizedState,t)},useTransition:function(){var t=Vp(Xl)[0],e=In().memoizedState;return[t,e]},useMutableSource:SS,useSyncExternalStore:bS,useId:jS,unstable_isNewReconciler:!1};function Go(t,e){try{var n="",r=e;do n+=zk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g2=typeof WeakMap=="function"?WeakMap:Map;function zS(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sh||(sh=!0,lg=r),Xm(t,e)},n}function qS(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xm(t,e),typeof r!="function"&&(li===null?li=new Set([this]):li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function V0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new g2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=C2.bind(null,t,e,n),e.then(t,t))}function L0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function M0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,ai(n,e,1))),n.lanes|=1),t)}var y2=Rr.ReactCurrentOwner,Wt=!1;function kt(t,e,n,r){e.child=t===null?IS(e,null,n,r):Wo(e,t.child,n,r)}function F0(t,e,n,r,i){n=n.render;var s=e.ref;return No(e,i),r=lv(t,e,n,r,s,i),n=uv(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Se&&n&&Yy(e),e.flags|=1,kt(t,e,r,i),e.child)}function j0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_v(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,WS(t,e,s,r,i)):(t=_d(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(o,r)&&t.ref===e.ref)return Ir(t,e,i)}return e.flags|=1,t=ci(s,r),t.ref=e.ref,t.return=e,e.child=t}function WS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Wl(s,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,Ir(t,e,i)}return Zm(t,e,n,r,i)}function HS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Io,en),en|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Io,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Io,en),en|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Io,en),en|=r;return kt(t,e,i,n),e.child}function GS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zm(t,e,n,r,i){var s=Yt(n)?ws:Rt.current;return s=zo(e,s),No(e,i),n=lv(t,e,n,r,s,i),r=uv(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ir(t,e,i)):(Se&&r&&Yy(e),e.flags|=1,kt(t,e,n,i),e.child)}function U0(t,e,n,r,i){if(Yt(n)){var s=!0;Qd(e)}else s=!1;if(No(e,i),e.stateNode===null)gd(t,e),wS(e,n,r),Jm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=Yt(n)?ws:Rt.current,u=zo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&k0(e,o,r,u),Hr=!1;var h=e.memoizedState;o.state=h,eh(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Qt.current||Hr?(typeof c=="function"&&(Ym(e,n,c,r),l=e.memoizedState),(a=Hr||C0(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:bn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=Yt(n)?ws:Rt.current,l=zo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&k0(e,o,r,l),Hr=!1,h=e.memoizedState,o.state=h,eh(e,r,o,i);var _=e.memoizedState;a!==d||h!==_||Qt.current||Hr?(typeof p=="function"&&(Ym(e,n,p,r),_=e.memoizedState),(u=Hr||C0(e,n,u,r,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return eg(t,e,n,r,s,i)}function eg(t,e,n,r,i,s){GS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&b0(e,n,!1),Ir(t,e,s);r=e.stateNode,y2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wo(e,t.child,null,s),e.child=Wo(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&b0(e,n,!0),e.child}function KS(t){var e=t.stateNode;e.pendingContext?S0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&S0(t,e.context,!1),iv(t,e.containerInfo)}function $0(t,e,n,r,i){return qo(),Xy(i),e.flags|=256,kt(t,e,n,r),e.child}var tg={dehydrated:null,treeContext:null,retryLane:0};function ng(t){return{baseLanes:t,cachePool:null,transitions:null}}function QS(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Re,i&1),t===null)return Km(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ef(o,r,0,null),t=ms(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ng(n),e.memoizedState=tg,t):hv(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return v2(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ci(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ci(a,s):(s=ms(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ng(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tg,r}return s=t.child,t=s.sibling,r=ci(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hv(t,e){return e=ef({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lc(t,e,n,r){return r!==null&&Xy(r),Wo(e,t.child,null,n),t=hv(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function v2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lp(Error(k(422))),Lc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ef({mode:"visible",children:r.children},i,0,null),s=ms(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wo(e,t.child,null,o),e.child.memoizedState=ng(o),e.memoizedState=tg,s);if(!(e.mode&1))return Lc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=Lp(s,r,void 0),Lc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Wt||a){if(r=at,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),kn(r,t,i,-1))}return vv(),r=Lp(Error(k(421))),Lc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=k2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nn=oi(i.nextSibling),sn=e,Se=!0,An=null,t!==null&&(fn[pn++]=cr,fn[pn++]=dr,fn[pn++]=Es,cr=t.id,dr=t.overflow,Es=e),e=hv(e,r.children),e.flags|=4096,e)}function B0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qm(t.return,e,n)}function Mp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B0(t,n,e);else if(t.tag===19)B0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&th(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&th(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mp(e,!0,n,null,s);break;case"together":Mp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=ci(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ci(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _2(t,e,n){switch(e.tag){case 3:KS(e),qo();break;case 5:TS(e);break;case 1:Yt(e.type)&&Qd(e);break;case 4:iv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Xd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?QS(t,e,n):(pe(Re,Re.current&1),t=Ir(t,e,n),t!==null?t.sibling:null);pe(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,HS(t,e,n)}return Ir(t,e,n)}var JS,rg,XS,ZS;JS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rg=function(){};XS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,os(Zn.current);var s=null;switch(n){case"input":i=bm(t,i),r=bm(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Pm(t,i),r=Pm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gd)}Cm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ye("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ZS=function(t,e,n,r){n!==r&&(e.flags|=4)};function za(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function w2(t,e,n){var r=e.pendingProps;switch(Jy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return Yt(e.type)&&Kd(),St(e),null;case 3:return r=e.stateNode,Ho(),Ee(Qt),Ee(Rt),ov(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(dg(An),An=null))),rg(t,e),St(e),null;case 5:sv(e);var i=os(Yl.current);if(n=e.type,t!==null&&e.stateNode!=null)XS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return St(e),null}if(t=os(Zn.current),Oc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jn]=e,r[Kl]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<al.length;i++)ye(al[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Jw(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":Zw(r,s),ye("invalid",r)}Cm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dc(r.textContent,a,t),i=["children",""+a]):Fl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":bc(r),Xw(r,s,!0);break;case"textarea":bc(r),e0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jn]=e,t[Kl]=r,JS(t,e,!1,!1),e.stateNode=t;e:{switch(o=km(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<al.length;i++)ye(al[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Jw(t,r),i=bm(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Zw(t,r),i=Pm(t,r),ye("invalid",t);break;default:i=r}Cm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?RT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jl(t,l):typeof l=="number"&&jl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ye("scroll",t):l!=null&&Ly(t,s,l,o))}switch(n){case"input":bc(t),Xw(t,r,!1);break;case"textarea":bc(t),e0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Po(t,!!r.multiple,s,!1):r.defaultValue!=null&&Po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return St(e),null;case 6:if(t&&e.stateNode!=null)ZS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=os(Yl.current),os(Zn.current),Oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[jn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Dc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=e,e.stateNode=r}return St(e),null;case 13:if(Ee(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&nn!==null&&e.mode&1&&!(e.flags&128))gS(),qo(),e.flags|=98560,s=!1;else if(s=Oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[jn]=e}else qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),s=!1}else An!==null&&(dg(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?tt===0&&(tt=3):vv())),e.updateQueue!==null&&(e.flags|=4),St(e),null);case 4:return Ho(),rg(t,e),t===null&&Hl(e.stateNode.containerInfo),St(e),null;case 10:return tv(e.type._context),St(e),null;case 17:return Yt(e.type)&&Kd(),St(e),null;case 19:if(Ee(Re),s=e.memoizedState,s===null)return St(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)za(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=th(t),o!==null){for(e.flags|=128,za(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>Ko&&(e.flags|=128,r=!0,za(s,!1),e.lanes=4194304)}else{if(!r)if(t=th(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),za(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return St(e),null}else 2*ze()-s.renderingStartTime>Ko&&n!==1073741824&&(e.flags|=128,r=!0,za(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Re.current,pe(Re,r?n&1|2:n&1),e):(St(e),null);case 22:case 23:return yv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function E2(t,e){switch(Jy(e),e.tag){case 1:return Yt(e.type)&&Kd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),Ee(Qt),Ee(Rt),ov(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sv(e),null;case 13:if(Ee(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Re),null;case 4:return Ho(),null;case 10:return tv(e.type._context),null;case 22:case 23:return yv(),null;case 24:return null;default:return null}}var Mc=!1,xt=!1,I2=typeof WeakSet=="function"?WeakSet:Set,U=null;function Eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function ig(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var z0=!1;function T2(t,e){if($m=qd,t=rS(),Qy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bm={focusedElem:t,selectionRange:n},qd=!1,U=e;U!==null;)if(e=U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:bn(e.type,v),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(E){Ve(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,U=t;break}U=e.return}return _=z0,z0=!1,_}function Tl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ig(e,n,s)}i=i.next}while(i!==r)}}function Xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eb(t){var e=t.alternate;e!==null&&(t.alternate=null,eb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[Kl],delete e[Wm],delete e[s2],delete e[o2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tb(t){return t.tag===5||t.tag===3||t.tag===4}function q0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function og(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gd));else if(r!==4&&(t=t.child,t!==null))for(og(t,e,n),t=t.sibling;t!==null;)og(t,e,n),t=t.sibling}function ag(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ag(t,e,n),t=t.sibling;t!==null;)ag(t,e,n),t=t.sibling}var ft=null,xn=!1;function Mr(t,e,n){for(n=n.child;n!==null;)nb(t,e,n),n=n.sibling}function nb(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(qh,n)}catch{}switch(n.tag){case 5:xt||Eo(n,e);case 6:var r=ft,i=xn;ft=null,Mr(t,e,n),ft=r,xn=i,ft!==null&&(xn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(xn?(t=ft,n=n.stateNode,t.nodeType===8?Cp(t.parentNode,n):t.nodeType===1&&Cp(t,n),zl(t)):Cp(ft,n.stateNode));break;case 4:r=ft,i=xn,ft=n.stateNode.containerInfo,xn=!0,Mr(t,e,n),ft=r,xn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ig(n,e,o),i=i.next}while(i!==r)}Mr(t,e,n);break;case 1:if(!xt&&(Eo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}Mr(t,e,n);break;case 21:Mr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Mr(t,e,n),xt=r):Mr(t,e,n);break;default:Mr(t,e,n)}}function W0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I2),e.forEach(function(r){var i=N2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ft=a.stateNode,xn=!1;break e;case 3:ft=a.stateNode.containerInfo,xn=!0;break e;case 4:ft=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(ft===null)throw Error(k(160));nb(s,o,i),ft=null,xn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rb(e,t),e=e.sibling}function rb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Mn(t),r&4){try{Tl(3,t,t.return),Xh(3,t)}catch(v){Ve(t,t.return,v)}try{Tl(5,t,t.return)}catch(v){Ve(t,t.return,v)}}break;case 1:Sn(e,t),Mn(t),r&512&&n!==null&&Eo(n,n.return);break;case 5:if(Sn(e,t),Mn(t),r&512&&n!==null&&Eo(n,n.return),t.flags&32){var i=t.stateNode;try{jl(i,"")}catch(v){Ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ST(i,s),km(a,o);var u=km(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?RT(i,d):c==="dangerouslySetInnerHTML"?AT(i,d):c==="children"?jl(i,d):Ly(i,c,d,u)}switch(a){case"input":xm(i,s);break;case"textarea":bT(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Po(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Po(i,!!s.multiple,s.defaultValue,!0):Po(i,!!s.multiple,s.multiple?[]:"",!1))}i[Kl]=s}catch(v){Ve(t,t.return,v)}}break;case 6:if(Sn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ve(t,t.return,v)}}break;case 3:if(Sn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zl(e.containerInfo)}catch(v){Ve(t,t.return,v)}break;case 4:Sn(e,t),Mn(t);break;case 13:Sn(e,t),Mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(mv=ze())),r&4&&W0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||c,Sn(e,t),xt=u):Sn(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(d=U=c;U!==null;){switch(h=U,p=h.child,h.tag){case 0:case 11:case 14:case 15:Tl(4,h,h.return);break;case 1:Eo(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Ve(r,n,v)}}break;case 5:Eo(h,h.return);break;case 22:if(h.memoizedState!==null){G0(d);continue}}p!==null?(p.return=h,U=p):G0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=PT("display",o))}catch(v){Ve(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ve(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Sn(e,t),Mn(t),r&4&&W0(t);break;case 21:break;default:Sn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tb(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jl(i,""),r.flags&=-33);var s=q0(t);ag(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=q0(t);og(t,a,o);break;default:throw Error(k(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function S2(t,e,n){U=t,ib(t)}function ib(t,e,n){for(var r=(t.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||xt;a=Mc;var u=xt;if(Mc=o,(xt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==null?K0(i):l!==null?(l.return=o,U=l):K0(i);for(;s!==null;)U=s,ib(s),s=s.sibling;U=i,Mc=a,xt=u}H0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):H0(t)}}function H0(t){for(;U!==null;){var e=U;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&R0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}R0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&zl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}xt||e.flags&512&&sg(e)}catch(h){Ve(e,e.return,h)}}if(e===t){U=null;break}if(n=e.sibling,n!==null){n.return=e.return,U=n;break}U=e.return}}function G0(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var n=e.sibling;if(n!==null){n.return=e.return,U=n;break}U=e.return}}function K0(t){for(;U!==null;){var e=U;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xh(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{sg(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{sg(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){U=null;break}var a=e.sibling;if(a!==null){a.return=e.return,U=a;break}U=e.return}}var b2=Math.ceil,ih=Rr.ReactCurrentDispatcher,fv=Rr.ReactCurrentOwner,vn=Rr.ReactCurrentBatchConfig,oe=0,at=null,Ye=null,yt=0,en=0,Io=Ni(0),tt=0,eu=null,Ts=0,Zh=0,pv=0,Sl=null,qt=null,mv=0,Ko=1/0,lr=null,sh=!1,lg=null,li=null,Fc=!1,Xr=null,oh=0,bl=0,ug=null,yd=-1,vd=0;function Vt(){return oe&6?ze():yd!==-1?yd:yd=ze()}function ui(t){return t.mode&1?oe&2&&yt!==0?yt&-yt:l2.transition!==null?(vd===0&&(vd=$T()),vd):(t=ce,t!==0||(t=window.event,t=t===void 0?16:KT(t.type)),t):1}function kn(t,e,n,r){if(50<bl)throw bl=0,ug=null,Error(k(185));Bu(t,n,r),(!(oe&2)||t!==at)&&(t===at&&(!(oe&2)&&(Zh|=n),tt===4&&Kr(t,yt)),Jt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ko=ze()+500,Qh&&Di()))}function Jt(t,e){var n=t.callbackNode;lN(t,e);var r=zd(t,t===at?yt:0);if(r===0)n!==null&&r0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&r0(n),e===1)t.tag===0?a2(Q0.bind(null,t)):fS(Q0.bind(null,t)),r2(function(){!(oe&6)&&Di()}),n=null;else{switch(BT(r)){case 1:n=$y;break;case 4:n=jT;break;case 16:n=Bd;break;case 536870912:n=UT;break;default:n=Bd}n=hb(n,sb.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sb(t,e){if(yd=-1,vd=0,oe&6)throw Error(k(327));var n=t.callbackNode;if(Do()&&t.callbackNode!==n)return null;var r=zd(t,t===at?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ah(t,r);else{e=r;var i=oe;oe|=2;var s=ab();(at!==t||yt!==e)&&(lr=null,Ko=ze()+500,ps(t,e));do try{P2();break}catch(a){ob(t,a)}while(!0);ev(),ih.current=s,oe=i,Ye!==null?e=0:(at=null,yt=0,e=tt)}if(e!==0){if(e===2&&(i=Lm(t),i!==0&&(r=i,e=cg(t,i))),e===1)throw n=eu,ps(t,0),Kr(t,r),Jt(t,ze()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!x2(i)&&(e=ah(t,r),e===2&&(s=Lm(t),s!==0&&(r=s,e=cg(t,s))),e===1))throw n=eu,ps(t,0),Kr(t,r),Jt(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Yi(t,qt,lr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=mv+500-ze(),10<e)){if(zd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qm(Yi.bind(null,t,qt,lr),e);break}Yi(t,qt,lr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b2(r/1960))-r,10<r){t.timeoutHandle=qm(Yi.bind(null,t,qt,lr),r);break}Yi(t,qt,lr);break;case 5:Yi(t,qt,lr);break;default:throw Error(k(329))}}}return Jt(t,ze()),t.callbackNode===n?sb.bind(null,t):null}function cg(t,e){var n=Sl;return t.current.memoizedState.isDehydrated&&(ps(t,e).flags|=256),t=ah(t,e),t!==2&&(e=qt,qt=n,e!==null&&dg(e)),t}function dg(t){qt===null?qt=t:qt.push.apply(qt,t)}function x2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~pv,e&=~Zh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function Q0(t){if(oe&6)throw Error(k(327));Do();var e=zd(t,0);if(!(e&1))return Jt(t,ze()),null;var n=ah(t,e);if(t.tag!==0&&n===2){var r=Lm(t);r!==0&&(e=r,n=cg(t,r))}if(n===1)throw n=eu,ps(t,0),Kr(t,e),Jt(t,ze()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yi(t,qt,lr),Jt(t,ze()),null}function gv(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ko=ze()+500,Qh&&Di())}}function Ss(t){Xr!==null&&Xr.tag===0&&!(oe&6)&&Do();var e=oe;oe|=1;var n=vn.transition,r=ce;try{if(vn.transition=null,ce=1,t)return t()}finally{ce=r,vn.transition=n,oe=e,!(oe&6)&&Di()}}function yv(){en=Io.current,Ee(Io)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,n2(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Jy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kd();break;case 3:Ho(),Ee(Qt),Ee(Rt),ov();break;case 5:sv(r);break;case 4:Ho();break;case 13:Ee(Re);break;case 19:Ee(Re);break;case 10:tv(r.type._context);break;case 22:case 23:yv()}n=n.return}if(at=t,Ye=t=ci(t.current,null),yt=en=e,tt=0,eu=null,pv=Zh=Ts=0,qt=Sl=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ss=null}return t}function ob(t,e){do{var n=Ye;try{if(ev(),pd.current=rh,nh){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nh=!1}if(Is=0,st=et=Ce=null,Il=!1,Jl=0,fv.current=null,n===null||n.return===null){tt=1,eu=e,Ye=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=L0(o);if(p!==null){p.flags&=-257,M0(p,o,a,s,e),p.mode&1&&V0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){V0(s,u,e),vv();break e}l=Error(k(426))}}else if(Se&&a.mode&1){var w=L0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),M0(w,o,a,s,e),Xy(Go(l,a));break e}}s=l=Go(l,a),tt!==4&&(tt=2),Sl===null?Sl=[s]:Sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=zS(s,l,e);P0(s,g);break e;case 1:a=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(li===null||!li.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=qS(s,a,e);P0(s,E);break e}}s=s.return}while(s!==null)}ub(n)}catch(S){e=S,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function ab(){var t=ih.current;return ih.current=rh,t===null?rh:t}function vv(){(tt===0||tt===3||tt===2)&&(tt=4),at===null||!(Ts&268435455)&&!(Zh&268435455)||Kr(at,yt)}function ah(t,e){var n=oe;oe|=2;var r=ab();(at!==t||yt!==e)&&(lr=null,ps(t,e));do try{A2();break}catch(i){ob(t,i)}while(!0);if(ev(),oe=n,ih.current=r,Ye!==null)throw Error(k(261));return at=null,yt=0,tt}function A2(){for(;Ye!==null;)lb(Ye)}function P2(){for(;Ye!==null&&!Zk();)lb(Ye)}function lb(t){var e=db(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?ub(t):Ye=e,fv.current=null}function ub(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=E2(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,Ye=null;return}}else if(n=w2(n,e,en),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);tt===0&&(tt=5)}function Yi(t,e,n){var r=ce,i=vn.transition;try{vn.transition=null,ce=1,R2(t,e,n,r)}finally{vn.transition=i,ce=r}return null}function R2(t,e,n,r){do Do();while(Xr!==null);if(oe&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uN(t,s),t===at&&(Ye=at=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fc||(Fc=!0,hb(Bd,function(){return Do(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=ce;ce=1;var a=oe;oe|=4,fv.current=null,T2(t,n),rb(n,t),QN(Bm),qd=!!$m,Bm=$m=null,t.current=n,S2(n),eN(),oe=a,ce=o,vn.transition=s}else t.current=n;if(Fc&&(Fc=!1,Xr=t,oh=i),s=t.pendingLanes,s===0&&(li=null),rN(n.stateNode),Jt(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sh)throw sh=!1,t=lg,lg=null,t;return oh&1&&t.tag!==0&&Do(),s=t.pendingLanes,s&1?t===ug?bl++:(bl=0,ug=t):bl=0,Di(),null}function Do(){if(Xr!==null){var t=BT(oh),e=vn.transition,n=ce;try{if(vn.transition=null,ce=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,oh=0,oe&6)throw Error(k(331));var i=oe;for(oe|=4,U=t.current;U!==null;){var s=U,o=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Tl(8,c,s)}var d=c.child;if(d!==null)d.return=c,U=d;else for(;U!==null;){c=U;var h=c.sibling,p=c.return;if(eb(c),c===u){U=null;break}if(h!==null){h.return=p,U=h;break}U=p}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}U=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,U=o;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Tl(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,U=g;break e}U=s.return}}var m=t.current;for(U=m;U!==null;){o=U;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,U=y;else e:for(o=m;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xh(9,a)}}catch(S){Ve(a,a.return,S)}if(a===o){U=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,U=E;break e}U=a.return}}if(oe=i,Di(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(qh,t)}catch{}r=!0}return r}finally{ce=n,vn.transition=e}}return!1}function Y0(t,e,n){e=Go(n,e),e=zS(t,e,1),t=ai(t,e,1),e=Vt(),t!==null&&(Bu(t,1,e),Jt(t,e))}function Ve(t,e,n){if(t.tag===3)Y0(t,t,n);else for(;e!==null;){if(e.tag===3){Y0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(li===null||!li.has(r))){t=Go(n,t),t=qS(e,t,1),e=ai(e,t,1),t=Vt(),e!==null&&(Bu(e,1,t),Jt(e,t));break}}e=e.return}}function C2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(yt&n)===n&&(tt===4||tt===3&&(yt&130023424)===yt&&500>ze()-mv?ps(t,0):pv|=n),Jt(t,e)}function cb(t,e){e===0&&(t.mode&1?(e=Pc,Pc<<=1,!(Pc&130023424)&&(Pc=4194304)):e=1);var n=Vt();t=Er(t,e),t!==null&&(Bu(t,e,n),Jt(t,n))}function k2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cb(t,n)}function N2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),cb(t,n)}var db;db=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,_2(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Se&&e.flags&1048576&&pS(e,Jd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gd(t,e),t=e.pendingProps;var i=zo(e,Rt.current);No(e,n),i=lv(null,e,r,t,i,n);var s=uv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,Qd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rv(e),i.updater=Yh,e.stateNode=i,i._reactInternals=e,Jm(e,r,t,n),e=eg(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Yy(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=O2(r),t=bn(r,t),i){case 0:e=Zm(null,e,r,t,n);break e;case 1:e=U0(null,e,r,t,n);break e;case 11:e=F0(null,e,r,t,n);break e;case 14:e=j0(null,e,r,bn(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Zm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),U0(t,e,r,i,n);case 3:e:{if(KS(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vS(t,e),eh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Go(Error(k(423)),e),e=$0(t,e,r,n,i);break e}else if(r!==i){i=Go(Error(k(424)),e),e=$0(t,e,r,n,i);break e}else for(nn=oi(e.stateNode.containerInfo.firstChild),sn=e,Se=!0,An=null,n=IS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qo(),r===i){e=Ir(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return TS(e),t===null&&Km(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zm(r,i)?o=null:s!==null&&zm(r,s)&&(e.flags|=32),GS(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Km(e),null;case 13:return QS(t,e,n);case 4:return iv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wo(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),F0(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Xd,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Ir(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,No(e,n),i=En(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),j0(t,e,r,i,n);case 15:return WS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),gd(t,e),e.tag=1,Yt(r)?(t=!0,Qd(e)):t=!1,No(e,n),wS(e,r,i),Jm(e,r,i,n),eg(null,e,r,!0,t,n);case 19:return YS(t,e,n);case 22:return HS(t,e,n)}throw Error(k(156,e.tag))};function hb(t,e){return FT(t,e)}function D2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,r){return new D2(t,e,n,r)}function _v(t){return t=t.prototype,!(!t||!t.isReactComponent)}function O2(t){if(typeof t=="function")return _v(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fy)return 11;if(t===jy)return 14}return 2}function ci(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _d(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_v(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ho:return ms(n.children,i,s,e);case My:o=8,i|=8;break;case Em:return t=gn(12,n,e,i|2),t.elementType=Em,t.lanes=s,t;case Im:return t=gn(13,n,e,i),t.elementType=Im,t.lanes=s,t;case Tm:return t=gn(19,n,e,i),t.elementType=Tm,t.lanes=s,t;case ET:return ef(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _T:o=10;break e;case wT:o=9;break e;case Fy:o=11;break e;case jy:o=14;break e;case Wr:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=gn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ms(t,e,n,r){return t=gn(7,t,r,e),t.lanes=n,t}function ef(t,e,n,r){return t=gn(22,t,r,e),t.elementType=ET,t.lanes=n,t.stateNode={isHidden:!1},t}function Fp(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function jp(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function V2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_p(0),this.expirationTimes=_p(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_p(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wv(t,e,n,r,i,s,o,a,l){return t=new V2(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rv(s),t}function L2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function fb(t){if(!t)return mi;t=t._reactInternals;e:{if($s(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Yt(n))return hS(t,n,e)}return e}function pb(t,e,n,r,i,s,o,a,l){return t=wv(n,r,!0,t,i,s,o,a,l),t.context=fb(null),n=t.current,r=Vt(),i=ui(n),s=mr(r,i),s.callback=e??null,ai(n,s,i),t.current.lanes=i,Bu(t,i,r),Jt(t,r),t}function tf(t,e,n,r){var i=e.current,s=Vt(),o=ui(i);return n=fb(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ai(i,e,o),t!==null&&(kn(t,i,o,s),fd(t,i,o)),o}function lh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function J0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ev(t,e){J0(t,e),(t=t.alternate)&&J0(t,e)}function M2(){return null}var mb=typeof reportError=="function"?reportError:function(t){console.error(t)};function Iv(t){this._internalRoot=t}nf.prototype.render=Iv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));tf(t,e,null,null)};nf.prototype.unmount=Iv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ss(function(){tf(null,t,null,null)}),e[wr]=null}};function nf(t){this._internalRoot=t}nf.prototype.unstable_scheduleHydration=function(t){if(t){var e=WT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&GT(t)}};function Tv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function X0(){}function F2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=lh(o);s.call(u)}}var o=pb(e,r,t,0,null,!1,!1,"",X0);return t._reactRootContainer=o,t[wr]=o.current,Hl(t.nodeType===8?t.parentNode:t),Ss(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=lh(l);a.call(u)}}var l=wv(t,0,!1,null,null,!1,!1,"",X0);return t._reactRootContainer=l,t[wr]=l.current,Hl(t.nodeType===8?t.parentNode:t),Ss(function(){tf(e,l,n,r)}),l}function sf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=lh(o);a.call(l)}}tf(e,o,t,i)}else o=F2(n,e,t,i,r);return lh(o)}zT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ol(e.pendingLanes);n!==0&&(By(e,n|1),Jt(e,ze()),!(oe&6)&&(Ko=ze()+500,Di()))}break;case 13:Ss(function(){var r=Er(t,1);if(r!==null){var i=Vt();kn(r,t,1,i)}}),Ev(t,1)}};zy=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Vt();kn(e,t,134217728,n)}Ev(t,134217728)}};qT=function(t){if(t.tag===13){var e=ui(t),n=Er(t,e);if(n!==null){var r=Vt();kn(n,t,e,r)}Ev(t,e)}};WT=function(){return ce};HT=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Dm=function(t,e,n){switch(e){case"input":if(xm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kh(r);if(!i)throw Error(k(90));TT(r),xm(r,i)}}}break;case"textarea":bT(t,n);break;case"select":e=n.value,e!=null&&Po(t,!!n.multiple,e,!1)}};NT=gv;DT=Ss;var j2={usingClientEntryPoint:!1,Events:[qu,go,Kh,CT,kT,gv]},qa={findFiberByHostInstance:is,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U2={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=LT(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||M2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{qh=jc.inject(U2),Xn=jc}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j2;un.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tv(e))throw Error(k(200));return L2(t,e,null,n)};un.createRoot=function(t,e){if(!Tv(t))throw Error(k(299));var n=!1,r="",i=mb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wv(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,Hl(t.nodeType===8?t.parentNode:t),new Iv(e)};un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=LT(e),t=t===null?null:t.stateNode,t};un.flushSync=function(t){return Ss(t)};un.hydrate=function(t,e,n){if(!rf(e))throw Error(k(200));return sf(null,t,e,!0,n)};un.hydrateRoot=function(t,e,n){if(!Tv(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pb(e,null,t,1,n??null,i,!1,s,o),t[wr]=e.current,Hl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nf(e)};un.render=function(t,e,n){if(!rf(e))throw Error(k(200));return sf(null,t,e,!1,n)};un.unmountComponentAtNode=function(t){if(!rf(t))throw Error(k(40));return t._reactRootContainer?(Ss(function(){sf(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};un.unstable_batchedUpdates=gv;un.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rf(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return sf(t,e,n,!1,r)};un.version="18.2.0-next-9e3b772b8-20220608";function gb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gb)}catch(t){console.error(t)}}gb(),pT.exports=un;var $2=pT.exports,Z0=$2;_m.createRoot=Z0.createRoot,_m.hydrateRoot=Z0.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tu.apply(this,arguments)}var Zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zr||(Zr={}));const eE="popstate";function B2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return hg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uh(i)}return q2(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z2(){return Math.random().toString(36).substr(2,8)}function tE(t,e){return{usr:t.state,key:t.key,idx:e}}function hg(t,e,n,r){return n===void 0&&(n=null),tu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ga(e):e,{state:n,key:e&&e.key||r||z2()})}function uh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ga(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function q2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Zr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(tu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Zr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:g})}function h(w,g){a=Zr.Push;let m=hg(v.location,w,g);n&&n(m,w),u=c()+1;let y=tE(m,u),E=v.createHref(m);try{o.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(w,g){a=Zr.Replace;let m=hg(v.location,w,g);n&&n(m,w),u=c();let y=tE(m,u),E=v.createHref(m);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function _(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:uh(w);return We(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(eE,d),l=w,()=>{i.removeEventListener(eE,d),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let g=_(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(w){return o.go(w)}};return v}var nE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nE||(nE={}));function W2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ga(e):e,i=bv(r.pathname||"/",n);if(i==null)return null;let s=yb(t);H2(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tD(s[a],iD(i));return o}function yb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=di([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yb(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Z2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of vb(s.path))i(s,o,l)}),e}function vb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=vb(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function H2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G2=/^:[\w-]+$/,K2=3,Q2=2,Y2=1,J2=10,X2=-2,rE=t=>t==="*";function Z2(t,e){let n=t.split("/"),r=n.length;return n.some(rE)&&(r+=X2),e&&(r+=Q2),n.filter(i=>!rE(i)).reduce((i,s)=>i+(G2.test(s)?K2:s===""?Y2:J2),r)}function eD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:di([i,c.pathname]),pathnameBase:uD(di([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=di([i,c.pathnameBase]))}return s}function nD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[d];return p&&!_?u[h]=void 0:u[h]=sD(_||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iD(t){try{return decodeURI(t)}catch(e){return Sv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sD(t,e){try{return decodeURIComponent(t)}catch(n){return Sv(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function bv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function oD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ga(t):t;return{pathname:n?n.startsWith("/")?n:aD(n,e):e,search:cD(r),hash:dD(i)}}function aD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Up(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xv(t,e){let n=lD(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Av(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ga(t):(i=tu({},t),We(!i.pathname||!i.pathname.includes("?"),Up("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),Up("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),Up("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=oD(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const di=t=>t.join("/").replace(/\/\/+/g,"/"),uD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _b=["post","put","patch","delete"];new Set(_b);const fD=["get",..._b];new Set(fD);/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nu(){return nu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nu.apply(this,arguments)}const Pv=A.createContext(null),pD=A.createContext(null),Oi=A.createContext(null),of=A.createContext(null),Vi=A.createContext({outlet:null,matches:[],isDataRoute:!1}),wb=A.createContext(null);function mD(t,e){let{relative:n}=e===void 0?{}:e;ya()||We(!1);let{basename:r,navigator:i}=A.useContext(Oi),{hash:s,pathname:o,search:a}=Ib(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:di([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ya(){return A.useContext(of)!=null}function Li(){return ya()||We(!1),A.useContext(of).location}function Eb(t){A.useContext(Oi).static||A.useLayoutEffect(t)}function Mi(){let{isDataRoute:t}=A.useContext(Vi);return t?PD():gD()}function gD(){ya()||We(!1);let t=A.useContext(Pv),{basename:e,future:n,navigator:r}=A.useContext(Oi),{matches:i}=A.useContext(Vi),{pathname:s}=Li(),o=JSON.stringify(xv(i,n.v7_relativeSplatPath)),a=A.useRef(!1);return Eb(()=>{a.current=!0}),A.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Av(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:di([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function Ib(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(Oi),{matches:i}=A.useContext(Vi),{pathname:s}=Li(),o=JSON.stringify(xv(i,r.v7_relativeSplatPath));return A.useMemo(()=>Av(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function yD(t,e){return vD(t,e)}function vD(t,e,n,r){ya()||We(!1);let{navigator:i}=A.useContext(Oi),{matches:s}=A.useContext(Vi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Li(),c;if(e){var d;let w=typeof e=="string"?ga(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||We(!1),c=w}else c=u;let h=c.pathname||"/",p=l==="/"?h:h.slice(l.length)||"/",_=W2(t,{pathname:p}),v=TD(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:di([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:di([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?A.createElement(of.Provider,{value:{location:nu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Zr.Pop}},v):v}function _D(){let t=AD(),e=hD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:i},n):null,null)}const wD=A.createElement(_D,null);class ED extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(Vi.Provider,{value:this.props.routeContext},A.createElement(wb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ID(t){let{routeContext:e,match:n,children:r}=t,i=A.useContext(Pv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(Vi.Provider,{value:e},r)}function TD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||We(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:p}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let p,_=!1,v=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||wD,l&&(u<0&&h===0?(RD("route-fallback",!1),_=!0,w=null):u===h&&(_=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),m=()=>{let y;return p?y=v:_?y=w:d.route.Component?y=A.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,A.createElement(ID,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?A.createElement(ED,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Tb=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Tb||{}),ch=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ch||{});function SD(t){let e=A.useContext(Pv);return e||We(!1),e}function bD(t){let e=A.useContext(pD);return e||We(!1),e}function xD(t){let e=A.useContext(Vi);return e||We(!1),e}function Sb(t){let e=xD(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function AD(){var t;let e=A.useContext(wb),n=bD(ch.UseRouteError),r=Sb(ch.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function PD(){let{router:t}=SD(Tb.UseNavigateStable),e=Sb(ch.UseNavigateStable),n=A.useRef(!1);return Eb(()=>{n.current=!0}),A.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,nu({fromRouteId:e},s)))},[t,e])}const iE={};function RD(t,e,n){!e&&!iE[t]&&(iE[t]=!0)}function CD(t){let{to:e,replace:n,state:r,relative:i}=t;ya()||We(!1);let{future:s,static:o}=A.useContext(Oi),{matches:a}=A.useContext(Vi),{pathname:l}=Li(),u=Mi(),c=Av(e,xv(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return A.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function Zt(t){We(!1)}function kD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zr.Pop,navigator:s,static:o=!1,future:a}=t;ya()&&We(!1);let l=e.replace(/^\/*/,"/"),u=A.useMemo(()=>({basename:l,navigator:s,static:o,future:nu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ga(r));let{pathname:c="/",search:d="",hash:h="",state:p=null,key:_="default"}=r,v=A.useMemo(()=>{let w=bv(c,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:p,key:_},navigationType:i}},[l,c,d,h,p,_,i]);return v==null?null:A.createElement(Oi.Provider,{value:u},A.createElement(of.Provider,{children:n,value:v}))}function ND(t){let{children:e,location:n}=t;return yD(fg(e),n)}new Promise(()=>{});function fg(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,i)=>{if(!A.isValidElement(r))return;let s=[...e,i];if(r.type===A.Fragment){n.push.apply(n,fg(r.props.children,s));return}r.type!==Zt&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=fg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pg(){return pg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pg.apply(this,arguments)}function DD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function OD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VD(t,e){return t.button===0&&(!e||e==="_self")&&!OD(t)}const LD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MD="startTransition",sE=kk[MD];function FD(t){let{basename:e,children:n,future:r,window:i}=t,s=A.useRef();s.current==null&&(s.current=B2({window:i,v5Compat:!0}));let o=s.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=A.useCallback(d=>{u&&sE?sE(()=>l(d)):l(d)},[l,u]);return A.useLayoutEffect(()=>o.listen(c),[o,c]),A.createElement(kD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const jD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=A.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=DD(e,LD),{basename:p}=A.useContext(Oi),_,v=!1;if(typeof u=="string"&&UD.test(u)&&(_=u,jD))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=bv(E.pathname,p);E.origin===y.origin&&S!=null?u=S+E.search+E.hash:v=!0}catch{}let w=mD(u,{relative:i}),g=$D(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(y){r&&r(y),y.defaultPrevented||g(y)}return A.createElement("a",pg({},h,{href:_||w,onClick:v||s?r:m,ref:n,target:l}))});var oE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(oE||(oE={}));var aE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(aE||(aE={}));function $D(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Mi(),u=Li(),c=Ib(t,{relative:o});return A.useCallback(d=>{if(VD(d,n)){d.preventDefault();let h=r!==void 0?r:uh(u)===uh(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const BD="https://brighamdent.github.io/english-site/assets/graphic-E4Cn9u9v.png";var lE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bb(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new qD;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WD=function(t){const e=bb(t);return xb.encodeByteArray(e,!0)},dh=function(t){return WD(t).replace(/\./g,"")},Ab=function(t){try{return xb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function hh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!HD(n)||(t[n]=hh(t[n],e[n]));return t}function HD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=()=>GD().__FIREBASE_DEFAULTS__,QD=()=>{if(typeof process>"u"||typeof lE>"u")return;const t=lE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ab(t[1]);return e&&JSON.parse(e)},Rv=()=>{try{return KD()||QD()||YD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pb=()=>{var t;return(t=Rv())===null||t===void 0?void 0:t.config},JD=t=>{var e;return(e=Rv())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dh(JSON.stringify(n)),dh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Cv(){var t;const e=(t=Rv())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tO(){return typeof self=="object"&&self.self===self}function Rb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cb(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nO(){return!Cv()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ru(){try{return typeof indexedDB=="object"}catch{return!1}}function rO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO="FirebaseError";class Lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iO,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?sO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,a,r)}}function sO(t,e){return t.replace(oO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const oO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function aO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mg(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cE(s)&&cE(o)){if(!mg(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cE(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function To(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ll(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kb(t,e){const n=new lO(t,e);return n.subscribe.bind(n)}class lO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$p),i.error===void 0&&(i.error=$p),i.complete===void 0&&(i.complete=$p);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $p(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return t&&t._delegate?t._delegate:t}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hO(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dO(t){return t===Ji?void 0:t}function hO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=[];var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Nb={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},pO=Z.INFO,mO={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},gO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class af{constructor(e){this.name=e,this._logLevel=pO,this._logHandler=gO,this._userLogHandler=null,Nv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function yO(t){Nv.forEach(e=>{e.setLogLevel(t)})}function vO(t,e){for(const n of Nv){let r=null;e&&e.level&&(r=Nb[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Z[s].toLowerCase(),message:a,args:o,type:i.name})}}}const _O=(t,e)=>e.some(n=>t instanceof n);let dE,hE;function wO(){return dE||(dE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EO(){return hE||(hE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Db=new WeakMap,gg=new WeakMap,Ob=new WeakMap,Bp=new WeakMap,Dv=new WeakMap;function IO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Db.set(n,t)}).catch(()=>{}),Dv.set(e,t),e}function TO(t){if(gg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gg.set(t,e)}let yg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ob.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SO(t){yg=t(yg)}function bO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zp(this),e,...n);return Ob.set(r,e.sort?e.sort():[e]),hi(r)}:EO().includes(t)?function(...e){return t.apply(zp(this),e),hi(Db.get(this))}:function(...e){return hi(t.apply(zp(this),e))}}function xO(t){return typeof t=="function"?bO(t):(t instanceof IDBTransaction&&TO(t),_O(t,wO())?new Proxy(t,yg):t)}function hi(t){if(t instanceof IDBRequest)return IO(t);if(Bp.has(t))return Bp.get(t);const e=xO(t);return e!==t&&(Bp.set(t,e),Dv.set(e,t)),e}const zp=t=>Dv.get(t);function AO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hi(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hi(o.result),l.oldVersion,l.newVersion,hi(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const PO=["get","getKey","getAll","getAllKeys","count"],RO=["put","add","delete","clear"],qp=new Map;function fE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qp.get(e))return qp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qp.set(e,s),s}SO(t=>({...t,get:(e,n,r)=>fE(e,n)||t.get(e,n,r),has:(e,n)=>!!fE(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vg="@firebase/app",pE="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new af("@firebase/app"),NO="@firebase/app-compat",DO="@firebase/analytics-compat",OO="@firebase/analytics",VO="@firebase/app-check-compat",LO="@firebase/app-check",MO="@firebase/auth",FO="@firebase/auth-compat",jO="@firebase/database",UO="@firebase/database-compat",$O="@firebase/functions",BO="@firebase/functions-compat",zO="@firebase/installations",qO="@firebase/installations-compat",WO="@firebase/messaging",HO="@firebase/messaging-compat",GO="@firebase/performance",KO="@firebase/performance-compat",QO="@firebase/remote-config",YO="@firebase/remote-config-compat",JO="@firebase/storage",XO="@firebase/storage-compat",ZO="@firebase/firestore",eV="@firebase/firestore-compat",tV="firebase",nV="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="[DEFAULT]",rV={[vg]:"fire-core",[NO]:"fire-core-compat",[OO]:"fire-analytics",[DO]:"fire-analytics-compat",[LO]:"fire-app-check",[VO]:"fire-app-check-compat",[MO]:"fire-auth",[FO]:"fire-auth-compat",[jO]:"fire-rtdb",[UO]:"fire-rtdb-compat",[$O]:"fire-fn",[BO]:"fire-fn-compat",[zO]:"fire-iid",[qO]:"fire-iid-compat",[WO]:"fire-fcm",[HO]:"fire-fcm-compat",[GO]:"fire-perf",[KO]:"fire-perf-compat",[QO]:"fire-rc",[YO]:"fire-rc-compat",[JO]:"fire-gcs",[XO]:"fire-gcs-compat",[ZO]:"fire-fst",[eV]:"fire-fst-compat","fire-js":"fire-js",[tV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Map,iu=new Map;function fh(t,e){try{t.container.addComponent(e)}catch(n){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vb(t,e){t.container.addOrOverwriteComponent(e)}function vi(t){const e=t.name;if(iu.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of yi.values())fh(n,t);return!0}function Lb(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function iV(t,e,n=gi){Lb(t,e).clearInstance(n)}function sV(){iu.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gr=new Bs("app","Firebase",oV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aV=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=nV;function Ov(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=Pb()),!n)throw gr.create("no-options");const s=yi.get(i);if(s){if(mg(n,s.options)&&mg(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new fO(i);for(const l of iu.values())o.addComponent(l);const a=new aV(n,r,o);return yi.set(i,a),a}function lV(t=gi){const e=yi.get(t);if(!e&&t===gi&&Pb())return Ov();if(!e)throw gr.create("no-app",{appName:t});return e}function uV(){return Array.from(yi.values())}async function Mb(t){const e=t.name;yi.has(e)&&(yi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function er(t,e,n){var r;let i=(r=rV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(a.join(" "));return}vi(new nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Fb(t,e){if(t!==null&&typeof t!="function")throw gr.create("invalid-log-argument");vO(t,e)}function jb(t){yO(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV="firebase-heartbeat-database",dV=1,su="firebase-heartbeat-store";let Wp=null;function Ub(){return Wp||(Wp=AO(cV,dV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(su)}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Wp}async function hV(t){try{return await(await Ub()).transaction(su).objectStore(su).get($b(t))}catch(e){if(e instanceof Lt)bs.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bs.warn(n.message)}}}async function mE(t,e){try{const r=(await Ub()).transaction(su,"readwrite");await r.objectStore(su).put(e,$b(t)),await r.done}catch(n){if(n instanceof Lt)bs.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bs.warn(r.message)}}}function $b(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV=1024,pV=30*24*60*60*1e3;class mV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gE(),{heartbeatsToSend:r,unsentEntries:i}=gV(this._heartbeatsCache.heartbeats),s=dh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gE(){return new Date().toISOString().substring(0,10)}function gV(t,e=fV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ru()?rO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yE(t){return dh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){vi(new nr("platform-logger",e=>new CO(e),"PRIVATE")),vi(new nr("heartbeat",e=>new mV(e),"PRIVATE")),er(vg,pE,t),er(vg,pE,"esm2017"),er("fire-js","")}vV("");const _V=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Lt,SDK_VERSION:Fi,_DEFAULT_ENTRY_NAME:gi,_addComponent:fh,_addOrOverwriteComponent:Vb,_apps:yi,_clearComponents:sV,_components:iu,_getProvider:Lb,_registerComponent:vi,_removeServiceInstance:iV,deleteApp:Mb,getApp:lV,getApps:uV,initializeApp:Ov,onLog:Fb,registerVersion:er,setLogLevel:jb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,n){this._delegate=e,this.firebase=n,fh(e,new nr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Mb(this._delegate)))}_getService(e,n=gi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=gi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){fh(this._delegate,e)}_addOrOverwriteComponent(e){Vb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},vE=new Bs("app-compat","Firebase",EV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:er,setLogLevel:jb,onLog:Fb,apps:null,SDK_VERSION:Fi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:_V}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||gi,!uE(e,u))throw vE.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=Ov(u,c);if(uE(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(vi(u)&&u.type==="PUBLIC"){const h=(p=i())=>{if(typeof p[d]!="function")throw vE.create("invalid-app-argument",{appName:c});return p[d]()};u.serviceProps!==void 0&&hh(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(){const t=IV(wV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Bb,extendNamespace:e,createSubscribe:kb,ErrorFactory:Bs,deepExtend:hh});function e(n){hh(t,n)}return t}const TV=Bb();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=new af("@firebase/app-compat"),SV="@firebase/app-compat",bV="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(t){er(SV,bV,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(tO()&&self.firebase!==void 0){_E.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&_E.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const _n=TV;xV();var AV="firebase",PV="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.registerVersion(AV,PV,"app-compat");function Vv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Wa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Xs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function zb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CV=RV,kV=zb,qb=new Bs("auth","Firebase",zb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=new af("@firebase/auth");function NV(t,...e){ph.logLevel<=Z.WARN&&ph.warn(`Auth (${Fi}): ${t}`,...e)}function wd(t,...e){ph.logLevel<=Z.ERROR&&ph.error(`Auth (${Fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw Lv(t,...e)}function vt(t,...e){return Lv(t,...e)}function Wb(t,e,n){const r=Object.assign(Object.assign({},kV()),{[e]:n});return new Bs("auth","Firebase",r).create(e,{appName:t.name})}function _a(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),Wb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qb.create(t,...e)}function N(t,e,...n){if(!t)throw Lv(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wd(e),new Error(e)}function Dn(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mv(){return wE()==="http:"||wE()==="https:"}function wE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mv()||Rb()||"connection"in navigator)?navigator.onLine:!0}function OV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=eO()||kv()}get(){return DV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=new Hu(3e4,6e4);function $e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Be(t,e,n,r,i={}){return Gb(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=va(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Hb.fetch()(Kb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Gb(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VV),e);try{const i=new FV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ul(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ul(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ul(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wb(t,c,u);Et(t,c)}}catch(i){if(i instanceof Lt)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function Cr(t,e,n,r,i={}){const s=await Be(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Kb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fv(t.config,i):`${t.config.apiScheme}://${i}`}function MV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),LV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){return t!==void 0&&t.getResponse!==void 0}function IE(t){return t!==void 0&&t.enterprise!==void 0}class jV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UV(t){return(await Be(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function $V(t,e){return Be(t,"GET","/v2/recaptchaConfig",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BV(t,e){return Be(t,"POST","/v1/accounts:delete",e)}async function zV(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function qV(t,e){return Be(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WV(t,e=!1){const n=H(t),r=await n.getIdToken(e),i=lf(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xl(Hp(i.auth_time)),issuedAtTime:xl(Hp(i.iat)),expirationTime:xl(Hp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hp(t){return Number(t)*1e3}function lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wd("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ab(n);return i?JSON.parse(i):(wd("Failed to decode base64 JWT payload"),null)}catch(i){return wd("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function HV(t){const e=lf(t);return N(e,"internal-error"),N(typeof e.exp<"u","internal-error"),N(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lt&&GV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Tr(t,qV(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JV(s.providerUserInfo):[],a=YV(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qb(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function QV(t){const e=H(t);await au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JV(t){return t.map(e=>{var{providerId:n}=e,r=Vv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XV(t,e){const n=await Gb(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Kb(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZV(t,e){return Be(t,"POST","/v2/accounts:revokeToken",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken<"u","internal-error"),N(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HV(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new lu;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lu,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){N(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WV(this,e)}reload(){return QV(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await au(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Tr(this,BV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:S,providerData:x,stsTokenManager:C}=n;N(y&&C,e,"internal-error");const O=lu.fromJSON(this.name,C);N(typeof y=="string",e,"internal-error"),Fr(d,e.name),Fr(h,e.name),N(typeof E=="boolean",e,"internal-error"),N(typeof S=="boolean",e,"internal-error"),Fr(p,e.name),Fr(_,e.name),Fr(v,e.name),Fr(w,e.name),Fr(g,e.name),Fr(m,e.name);const Y=new gs({uid:y,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:S,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:O,createdAt:g,lastLoginAt:m});return x&&Array.isArray(x)&&(Y.providerData=x.map($=>Object.assign({},$))),w&&(Y._redirectEventId=w),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new lu;i.updateFromServerResponse(n);const s=new gs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await au(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new Map;function rn(t){Dn(t instanceof Function,"Expected a class definition");let e=TE.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,TE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yb.type="NONE";const Qo=Yb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t,e,n){return`firebase:${t}:${e}:${n}`}class Oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ys(this.userKey,i.apiKey,s),this.fullPersistenceKey=ys("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oo(rn(Qo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(Qo);const o=ys(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=gs._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Oo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Oo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ex(e))return"Blackberry";if(tx(e))return"Webos";if(jv(e))return"Safari";if((e.includes("chrome/")||Xb(e))&&!e.includes("edge/"))return"Chrome";if(Gu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jb(t=De()){return/firefox\//i.test(t)}function jv(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xb(t=De()){return/crios\//i.test(t)}function Zb(t=De()){return/iemobile/i.test(t)}function Gu(t=De()){return/android/i.test(t)}function ex(t=De()){return/blackberry/i.test(t)}function tx(t=De()){return/webos/i.test(t)}function wa(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eL(t=De()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function tL(t=De()){var e;return wa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nL(){return Cb()&&document.documentMode===10}function nx(t=De()){return wa(t)||Gu(t)||tx(t)||ex(t)||/windows phone/i.test(t)||Zb(t)}function rL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t,e=[]){let n;switch(t){case"Browser":n=SE(De());break;case"Worker":n=`${SE(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(t,e={}){return Be(t,"GET","/v2/passwordPolicy",$e(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=6;class aL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bE(this),this.idTokenSubscription=new bE(this),this.beforeStateQueue=new iL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sL(this),n=new aL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fe(t){return H(t)}class bE{constructor(e){this.auth=e,this.observer=null,this.addObserver=kb(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Uv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uL().appendChild(r)})}function ix(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cL="https://www.google.com/recaptcha/enterprise.js?render=",dL="recaptcha-enterprise",hL="NO_RECAPTCHA";class fL{constructor(e){this.type=dL,this.auth=Fe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{$V(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new jV(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;IE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(hL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&IE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Uv(cL+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xE(t,e,n,r=!1){const i=new fL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await xE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function pL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mL(t,e,n){const r=Fe(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=sx(e),{host:o,port:a}=gL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yL()}function sx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gL(t){const e=sx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:AE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:AE(o)}}}function AE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e){return Be(t,"POST","/v1/accounts:resetPassword",$e(t,e))}async function vL(t,e){return Be(t,"POST","/v1/accounts:update",e)}async function _L(t,e){return Be(t,"POST","/v1/accounts:signUp",e)}async function wL(t,e){return Be(t,"POST","/v1/accounts:update",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EL(t,e){return Cr(t,"POST","/v1/accounts:signInWithPassword",$e(t,e))}async function uf(t,e){return Be(t,"POST","/v1/accounts:sendOobCode",$e(t,e))}async function IL(t,e){return uf(t,e)}async function TL(t,e){return uf(t,e)}async function SL(t,e){return uf(t,e)}async function bL(t,e){return uf(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xL(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}async function AL(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends Ea{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,n,"signInWithPassword",EL);case"emailLink":return xL(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,r,"signUpPassword",_L);case"emailLink":return AL(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e){return Cr(t,"POST","/v1/accounts:signInWithIdp",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL="http://localhost";class rr extends Ea{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yr(e,n)}buildRequest(){const e={requestUri:PL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(t,e){return Be(t,"POST","/v1/accounts:sendVerificationCode",$e(t,e))}async function CL(t,e){return Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,e))}async function kL(t,e){const n=await Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,e));if(n.temporaryProof)throw ul(t,"account-exists-with-different-credential",n);return n}const NL={USER_NOT_FOUND:"user-not-found"};async function DL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",$e(t,n),NL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Ea{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return CL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return kL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return DL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new vs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VL(t){const e=To(ll(t)).link,n=e?To(ll(e)).deep_link_id:null,r=To(ll(t)).deep_link_id;return(r?To(ll(r)).link:null)||r||n||e||t}class cf{constructor(e){var n,r,i,s,o,a;const l=To(ll(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=OL((i=l.mode)!==null&&i!==void 0?i:null);N(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=VL(e);try{return new cf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,n){return cu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cf.parseLink(n);return N(r,"argument-error"),cu._fromEmailAndCode(e,r.code,r.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends kr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vo extends Ia{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),rr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),rr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Vo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ia{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ia{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL="http://localhost";class Yo extends Ea{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Yo(r,s)}static _create(e,n){return new Yo(e,n)}buildRequest(){return{requestUri:LL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML="saml.";class mh extends kr{constructor(e){N(e.startsWith(ML),"argument-error"),super(e)}static credentialFromResult(e){return mh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return mh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Yo.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Yo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ia{constructor(){super("twitter.com")}static credential(e,n){return rr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(t,e){return Cr(t,"POST","/v1/accounts:signUp",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gs._fromIdTokenResponse(e,r,i),o=PE(r);return new Tn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=PE(r);return new Tn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function PE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FL(t){var e;const n=Fe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Tn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ax(n,{returnSecureToken:!0}),i=await Tn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends Lt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gh(e,n,r,i)}}function lx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jL(t,e){const n=H(t);await df(!0,n,e);const{providerUserInfo:r}=await zV(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=ux(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function $v(t,e,n=!1){const r=await Tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tn._forOperation(t,"link",r)}async function df(t,e,n){await au(e);const r=ux(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Tr(t,lx(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=lf(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),Tn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e,n=!1){const r="signIn",i=await lx(t,r,e),s=await Tn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function hf(t,e){return dx(Fe(t),e)}async function hx(t,e){const n=H(t);return await df(!1,n,e.providerId),$v(n,e)}async function fx(t,e){return cx(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UL(t,e){return Cr(t,"POST","/v1/accounts:signInWithCustomToken",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $L(t,e){const n=Fe(t),r=await UL(n,{token:e,returnSecureToken:!0}),i=await Tn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Bv._fromServerResponse(e,n):"totpInfo"in n?zv._fromServerResponse(e,n):Et(e,"internal-error")}}class Bv extends Ku{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Bv(n)}}class zv extends Ku{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new zv(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t){const e=Fe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BL(t,e,n){const r=Fe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ff(r,i,n),await uu(r,i,"getOobCode",TL)}async function zL(t,e,n){await ox(H(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qv(t),r})}async function qL(t,e){await wL(H(t),{oobCode:e})}async function px(t,e){const n=H(t),r=await ox(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Ku._fromServerResponse(Fe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function WL(t,e){const{data:n}=await px(H(t),e);return n.email}async function HL(t,e,n){const r=Fe(t),o=await uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ax).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qv(t),l}),a=await Tn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function GL(t,e,n){return hf(H(t),ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(t,e,n){const r=Fe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){N(a.handleCodeInApp,r,"argument-error"),a&&ff(r,o,a)}s(i,n),await uu(r,i,"getOobCode",SL)}function QL(t,e){const n=cf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function YL(t,e,n){const r=H(t),i=ji.credentialWithLink(e,n||ou());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),hf(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JL(t,e){return Be(t,"POST","/v1/accounts:createAuthUri",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XL(t,e){const n=Mv()?ou():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await JL(H(t),r);return i||[]}async function ZL(t,e){const n=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ff(n.auth,i,e);const{email:s}=await IL(n.auth,i);s!==t.email&&await t.reload()}async function e4(t,e,n){const r=H(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ff(r.auth,s,n);const{email:o}=await bL(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(t,e){return Be(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n4(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=H(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Tr(r,t4(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function r4(t,e){return mx(H(t),e,null)}function i4(t,e){return mx(H(t),null,e)}async function mx(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Tr(t,vL(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=lf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Lo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new o4(s,i);case"github.com":return new a4(s,i);case"google.com":return new l4(s,i);case"twitter.com":return new u4(s,i,t.screenName||null);case"custom":case"anonymous":return new Lo(s,null);default:return new Lo(s,r,i)}}class Lo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class gx extends Lo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class o4 extends Lo{constructor(e,n){super(e,"facebook.com",n)}}class a4 extends gx{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class l4 extends Lo{constructor(e,n){super(e,"google.com",n)}}class u4 extends gx{constructor(e,n,r){super(e,"twitter.com",n,r)}}function c4(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:s4(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new as("enroll",e,n)}static _fromMfaPendingCredential(e){return new as("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return as._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return as._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Fe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Ku._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=as._fromMfaPendingCredential(i.mfaPendingCredential);return new Wv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Tn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),Tn._forOperation(n.user,n.operationType,u);default:Et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function d4(t,e){var n;const r=H(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Wv._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h4(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:start",$e(t,e))}function f4(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:finalize",$e(t,e))}function p4(t,e){return Be(t,"POST","/v2/accounts/mfaEnrollment:withdraw",$e(t,e))}class Hv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ku._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hv(e)}async getSession(){return as._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Tr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Tr(this.user,p4(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Gp=new WeakMap;function m4(t){const e=H(t);return Gp.has(e)||Gp.set(e,Hv._fromUser(e)),Gp.get(e)}const yh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yh,"1"),this.storage.removeItem(yh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(){const t=De();return jv(t)||wa(t)}const y4=1e3,v4=10;class vx extends yx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=g4()&&rL(),this.fallbackToPolling=nx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,v4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vx.type="LOCAL";const Gv=vx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x extends yx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_x.type="SESSION";const xs=_x;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Qu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function E4(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function I4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function S4(){return Kv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="firebaseLocalStorageDb",b4=1,vh="firebaseLocalStorage",Ex="fbase_key";class Yu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mf(t,e){return t.transaction([vh],e?"readwrite":"readonly").objectStore(vh)}function x4(){const t=indexedDB.deleteDatabase(wx);return new Yu(t).toPromise()}function _g(){const t=indexedDB.open(wx,b4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vh,{keyPath:Ex})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vh)?e(r):(r.close(),await x4(),e(await _g()))})})}async function RE(t,e,n){const r=mf(t,!0).put({[Ex]:e,value:n});return new Yu(r).toPromise()}async function A4(t,e){const n=mf(t,!1).get(e),r=await new Yu(n).toPromise();return r===void 0?null:r.value}function CE(t,e){const n=mf(t,!0).delete(e);return new Yu(n).toPromise()}const P4=800,R4=3;class Ix{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _g(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pf._getInstance(S4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await I4(),!this.activeServiceWorker)return;this.sender=new w4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _g();return await RE(e,yh,"1"),await CE(e,yh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>RE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>A4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>CE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mf(i,!1).getAll();return new Yu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ix.type="LOCAL";const du=Ix;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:start",$e(t,e))}function k4(t,e){return Be(t,"POST","/v2/accounts/mfaSignIn:finalize",$e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4=500,D4=6e4,Uc=1e12;class O4{constructor(e){this.auth=e,this.counter=Uc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new V4(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Uc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Uc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Uc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class V4{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=L4(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},D4)},N4))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function L4(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=ix("rcb"),M4=new Hu(3e4,6e4),F4="https://www.google.com/recaptcha/api.js?";class j4{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return N(U4(n),e,"argument-error"),this.shouldResolveImmediately(n)&&EE(Qe().grecaptcha)?Promise.resolve(Qe().grecaptcha):new Promise((r,i)=>{const s=Qe().setTimeout(()=>{i(vt(e,"network-request-failed"))},M4.get());Qe()[Kp]=()=>{Qe().clearTimeout(s),delete Qe()[Kp];const a=Qe().grecaptcha;if(!a||!EE(a)){i(vt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${F4}?${va({onload:Kp,render:"explicit",hl:n})}`;Uv(o).catch(()=>{clearTimeout(s),i(vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Qe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function U4(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class $4{async load(e){return new O4(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="recaptcha",B4={theme:"light",type:"image"};let z4=class{constructor(e,n,r=Object.assign({},B4)){this.parameters=r,this.type=Tx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new $4:new j4,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Qe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Mv()&&!Kv(),this.auth,"internal-error"),await q4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await UV(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function q4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function W4(t,e,n){const r=Fe(t),i=await gf(r,e,H(n));return new Qv(i,s=>hf(r,s))}async function H4(t,e,n){const r=H(t);await df(!1,r,"phone");const i=await gf(r.auth,e,H(n));return new Qv(i,s=>hx(r,s))}async function G4(t,e,n){const r=H(t),i=await gf(r.auth,e,H(n));return new Qv(i,s=>fx(r,s))}async function gf(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===Tx,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await h4(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await C4(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await RL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function K4(t,e){await $v(H(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=class Ed{constructor(e){this.providerId=Ed.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,n){return gf(this.auth,e,H(n))}static credential(e,n){return vs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Ed.credentialFromTaggedObject(n)}static credentialFromError(e){return Ed.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?vs._fromTokenResponse(n,r):null}};As.PROVIDER_ID="phone";As.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){return e?rn(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends Ea{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q4(t){return dx(t.auth,new Yv(t),t.bypassAuthState)}function Y4(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),cx(n,new Yv(t),t.bypassAuthState)}async function J4(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),$v(n,new Yv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q4;case"linkViaPopup":case"linkViaRedirect":return J4;case"reauthViaPopup":case"reauthViaRedirect":return Y4;default:Et(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4=new Hu(2e3,1e4);async function Z4(t,e,n){const r=Fe(t);_a(t,e,kr);const i=zs(r,n);return new hr(r,"signInViaPopup",e,i).executeNotNull()}async function eM(t,e,n){const r=H(t);_a(r.auth,e,kr);const i=zs(r.auth,n);return new hr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function tM(t,e,n){const r=H(t);_a(r.auth,e,kr);const i=zs(r.auth,n);return new hr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class hr extends Sx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X4.get())};e()}}hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM="pendingRedirect",Al=new Map;class rM extends Sx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const r=await iM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iM(t,e){const n=xx(e),r=bx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Jv(t,e){return bx(t)._set(xx(e),"true")}function sM(){Al.clear()}function Xv(t,e){Al.set(t._key(),e)}function bx(t){return rn(t._redirectPersistence)}function xx(t){return ys(nM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t,e,n){return aM(t,e,n)}async function aM(t,e,n){const r=Fe(t);_a(t,e,kr),await r._initializationPromise;const i=zs(r,n);return await Jv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function lM(t,e,n){return uM(t,e,n)}async function uM(t,e,n){const r=H(t);_a(r.auth,e,kr),await r.auth._initializationPromise;const i=zs(r.auth,n);await Jv(i,r.auth);const s=await Ax(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function cM(t,e,n){return dM(t,e,n)}async function dM(t,e,n){const r=H(t);_a(r.auth,e,kr),await r.auth._initializationPromise;const i=zs(r.auth,n);await df(!1,r,e.providerId),await Jv(i,r.auth);const s=await Ax(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function hM(t,e){return await Fe(t)._initializationPromise,yf(t,e,!1)}async function yf(t,e,n=!1){const r=Fe(t),i=zs(r,e),o=await new rM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Ax(t){const e=Qu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=10*60*1e3;class Px{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fM&&this.cachedEventUids.clear(),this.cachedEventUids.has(kE(e))}saveEventToCache(e){this.cachedEventUids.add(kE(e)),this.lastProcessedEventTime=Date.now()}}function kE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rx(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(t,e={}){return Be(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gM=/^https?/;async function yM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cx(t);for(const n of e)try{if(vM(n))return}catch{}Et(t,"unauthorized-domain")}function vM(t){const e=ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gM.test(n))return!1;if(mM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=new Hu(3e4,6e4);function NE(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wM(t){return new Promise((e,n)=>{var r,i,s;function o(){NE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NE(),n(vt(t,"network-request-failed"))},timeout:_M.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)o();else{const a=ix("iframefcb");return Qe()[a]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},Uv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Id=null,e})}let Id=null;function EM(t){return Id=Id||wM(t),Id}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=new Hu(5e3,15e3),TM="__/auth/iframe",SM="emulator/auth/iframe",bM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AM(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fv(e,SM):`https://${t.config.authDomain}/${TM}`,r={apiKey:e.apiKey,appName:t.name,v:Fi},i=xM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${va(r).slice(1)}`}async function PM(t){const e=await EM(t),n=Qe().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:AM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),a=Qe().setTimeout(()=>{s(o)},IM.get());function l(){Qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CM=500,kM=600,NM="_blank",DM="http://localhost";class DE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OM(t,e,n,r=CM,i=kM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=De().toLowerCase();n&&(a=Xb(u)?NM:n),Jb(u)&&(e=e||DM,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,_])=>`${h}${p}=${_},`,"");if(tL(u)&&a!=="_self")return VM(e||"",a),new DE(null);const d=window.open(e||"",a,c);N(d,t,"popup-blocked");try{d.focus()}catch{}return new DE(d)}function VM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="__/auth/handler",MM="emulator/auth/handler",FM=encodeURIComponent("fac");async function wg(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fi,eventId:i};if(e instanceof kr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ia){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${FM}=${encodeURIComponent(l)}`:"";return`${jM(t)}?${va(a).slice(1)}${u}`}function jM({config:t}){return t.emulator?Fv(t,MM):`https://${t.authDomain}/${LM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="webStorageSupport";class UM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xs,this._completeRedirectFn=yf,this._overrideRedirectResult=Xv}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wg(e,n,r,ou(),i);return OM(e,o,Qu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wg(e,n,r,ou(),i);return E4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PM(e),r=new Px(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qp,{type:Qp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qp];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nx()||jv()||wa()}}const $M=UM;class BM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Wn("unexpected MultiFactorSessionType")}}}class Zv extends BM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Zv(e)}_finalizeEnroll(e,n,r){return f4(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return k4(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kx{constructor(){}static assertion(e){return Zv._fromCredential(e)}}kx.FACTOR_ID="phone";var OE="@firebase/auth",VE="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WM(t){vi(new nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rx(t)},u=new lL(r,i,s,l);return pL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vi(new nr("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(r=>new zM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(OE,VE,qM(t)),er(OE,VE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=5*60;JD("authIdTokenMaxAge");WM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM=2e3;async function KM(t,e,n){var r;const{BuildInfo:i}=Ps();Dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await ZM(e.sessionId),o={};return wa()?o.ibi=i.packageName:Gu()?o.apn=i.packageName:Et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function QM(t){const{BuildInfo:e}=Ps(),n={};wa()?n.iosBundleId=e.packageName:Gu()?n.androidPackageName=e.packageName:Et(t,"operation-not-supported-in-this-environment"),await Cx(t,n)}function YM(t){const{cordova:e}=Ps();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,eL()?"_blank":"_system","location=yes"),n(i)})})}async function JM(t,e,n){const{cordova:r}=Ps();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(vt(t,"redirect-cancelled-by-user"))},GM))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Gu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function XM(t){var e,n,r,i,s,o,a,l,u,c;const d=Ps();N(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ZM(t){const e=eF(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function eF(t){if(Dn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF=20;class nF extends Px{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function rF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:oF(),postBody:null,tenantId:t.tenantId,error:vt(t,"no-auth-event")}}function iF(t,e){return Eg()._set(Ig(t),e)}async function LE(t){const e=await Eg()._get(Ig(t));return e&&await Eg()._remove(Ig(t)),e}function sF(t,e){var n,r;const i=lF(e);if(i.includes("/__/auth/callback")){const s=Td(i),o=s.firebaseError?aF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?vt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function oF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<tF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Eg(){return rn(Gv)}function Ig(t){return ys("authEvent",t.config.apiKey,t.name)}function aF(t){try{return JSON.parse(t)}catch{return null}}function lF(t){const e=Td(t),n=e.link?decodeURIComponent(e.link):void 0,r=Td(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Td(i).link||i||r||n||t}function Td(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return To(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=500;class cF{constructor(){this._redirectPersistence=xs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=yf,this._overrideRedirectResult=Xv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new nF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){XM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),sM(),await this._originValidation(e);const o=rF(e,r,i);await iF(e,o);const a=await KM(e,o,n),l=await YM(a);return JM(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ps(),o=setTimeout(async()=>{await LE(e),n.onEvent(ME())},uF),a=async c=>{clearTimeout(o);const d=await LE(e);let h=null;d&&(c!=null&&c.url)&&(h=sF(d,c.url)),n.onEvent(h||ME())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Ps().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const dF=cF;function ME(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:vt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(t,e){Fe(t)._logFramework(e)}var fF="@firebase/auth-compat",pF="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mF=1e3;function Pl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function gF(){return Pl()==="http:"||Pl()==="https:"}function Nx(t=De()){return!!((Pl()==="file:"||Pl()==="ionic:"||Pl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function yF(){return kv()||Cv()}function vF(){return Cb()&&(document==null?void 0:document.documentMode)===11}function _F(t=De()){return/Edge\/\d+/.test(t)}function wF(t=De()){return vF()||_F(t)}function Dx(){try{const t=self.localStorage,e=Qu();if(t)return t.setItem(e,"1"),t.removeItem(e),wF()?ru():!0}catch{return e_()&&ru()}return!1}function e_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Yp(){return(gF()||Rb()||Nx())&&!yF()&&Dx()&&!e_()}function Ox(){return Nx()&&typeof document<"u"}async function EF(){return Ox()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},mF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function IF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={LOCAL:"local",NONE:"none",SESSION:"session"},Ha=N,Vx="persistence";function TF(t,e){if(Ha(Object.values(tn).includes(e),t,"invalid-persistence-type"),kv()){Ha(e!==tn.SESSION,t,"unsupported-persistence-type");return}if(Cv()){Ha(e===tn.NONE,t,"unsupported-persistence-type");return}if(e_()){Ha(e===tn.NONE||e===tn.LOCAL&&ru(),t,"unsupported-persistence-type");return}Ha(e===tn.NONE||Dx(),t,"unsupported-persistence-type")}async function Tg(t){await t._initializationPromise;const e=Lx(),n=ys(Vx,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function SF(t,e){const n=Lx();if(!n)return[];const r=ys(Vx,t,e);switch(n.getItem(r)){case tn.NONE:return[Qo];case tn.LOCAL:return[du,xs];case tn.SESSION:return[xs];default:return[]}}function Lx(){var t;try{return((t=IF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bF=N;class ei{constructor(){this.browserResolver=rn($M),this.cordovaResolver=rn(dF),this.underlyingResolver=null,this._redirectPersistence=xs,this._completeRedirectFn=yf,this._overrideRedirectResult=Xv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ox()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return bF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await EF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){return t.unwrap()}function xF(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(t){return Fx(t)}function PF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new RF(t,d4(t,e))}else if(r){const i=Fx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Fx(t){const{_tokenResponse:e}=t instanceof Lt?t.customData:t;if(!e)return null;if(!(t instanceof Lt)&&"temporaryProof"in e&&"phoneNumber"in e)return As.credentialFromResult(t);const n=e.providerId;if(!n||n===Wa.PASSWORD)return null;let r;switch(n){case Wa.GOOGLE:r=$n;break;case Wa.FACEBOOK:r=Un;break;case Wa.GITHUB:r=Bn;break;case Wa.TWITTER:r=zn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Yo._create(n,a):rr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Vo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Lt?r.credentialFromError(t):r.credentialFromResult(t)}function Bt(t,e){return e.catch(n=>{throw n instanceof Lt&&PF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:AF(n),additionalUserInfo:c4(n),user:vf.getOrCreate(i)}})}async function Sg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Bt(t,n.confirm(r))}}class RF{constructor(e,n){this.resolver=n,this.auth=xF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bt(Mx(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vf=class cl{constructor(e){this._delegate=e,this.multiFactor=m4(e)}static getOrCreate(e){return cl.USER_MAP.has(e)||cl.USER_MAP.set(e,new cl(e)),cl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bt(this.auth,hx(this._delegate,e))}async linkWithPhoneNumber(e,n){return Sg(this.auth,H4(this._delegate,e,n))}async linkWithPopup(e){return Bt(this.auth,tM(this._delegate,e,ei))}async linkWithRedirect(e){return await Tg(Fe(this.auth)),cM(this._delegate,e,ei)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bt(this.auth,fx(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Sg(this.auth,G4(this._delegate,e,n))}reauthenticateWithPopup(e){return Bt(this.auth,eM(this._delegate,e,ei))}async reauthenticateWithRedirect(e){return await Tg(Fe(this.auth)),lM(this._delegate,e,ei)}sendEmailVerification(e){return ZL(this._delegate,e)}async unlink(e){return await jL(this._delegate,e),this}updateEmail(e){return r4(this._delegate,e)}updatePassword(e){return i4(this._delegate,e)}updatePhoneNumber(e){return K4(this._delegate,e)}updateProfile(e){return n4(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return e4(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};vf.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=N;class bg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ga(r,"invalid-api-key",{appName:e.name}),Ga(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ei:void 0;this._delegate=n.initialize({options:{persistence:CF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(CV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?vf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){mL(this._delegate,e,n)}applyActionCode(e){return qL(this._delegate,e)}checkActionCode(e){return px(this._delegate,e)}confirmPasswordReset(e,n){return zL(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Bt(this._delegate,HL(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return XL(this._delegate,e)}isSignInWithEmailLink(e){return QL(this._delegate,e)}async getRedirectResult(){Ga(Yp(),this._delegate,"operation-not-supported-in-this-environment");const e=await hM(this._delegate,ei);return e?Bt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){hF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=FE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=FE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return KL(this._delegate,e,n)}sendPasswordResetEmail(e,n){return BL(this._delegate,e,n||void 0)}async setPersistence(e){TF(this._delegate,e);let n;switch(e){case tn.SESSION:n=xs;break;case tn.LOCAL:n=await rn(du)._isAvailable()?du:Gv;break;case tn.NONE:n=Qo;break;default:return Et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bt(this._delegate,FL(this._delegate))}signInWithCredential(e){return Bt(this._delegate,hf(this._delegate,e))}signInWithCustomToken(e){return Bt(this._delegate,$L(this._delegate,e))}signInWithEmailAndPassword(e,n){return Bt(this._delegate,GL(this._delegate,e,n))}signInWithEmailLink(e,n){return Bt(this._delegate,YL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Sg(this._delegate,W4(this._delegate,e,n))}async signInWithPopup(e){return Ga(Yp(),this._delegate,"operation-not-supported-in-this-environment"),Bt(this._delegate,Z4(this._delegate,e,ei))}async signInWithRedirect(e){return Ga(Yp(),this._delegate,"operation-not-supported-in-this-environment"),await Tg(this._delegate),oM(this._delegate,e,ei)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return WL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}bg.Persistence=tn;function FE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&vf.getOrCreate(o)),error:e,complete:n}}function CF(t,e){const n=SF(t,e);if(typeof self<"u"&&!n.includes(du)&&n.push(du),typeof window<"u")for(const r of[Gv,xs])n.includes(r)||n.push(r);return n.includes(Qo)||n.push(Qo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(){this.providerId="phone",this._delegate=new As(Mx(_n.auth()))}static credential(e,n){return As.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}t_.PHONE_SIGN_IN_METHOD=As.PHONE_SIGN_IN_METHOD;t_.PROVIDER_ID=As.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=N;class NF{constructor(e,n,r=_n.app()){var i;kF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new z4(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DF="auth-compat";function OF(t){t.INTERNAL.registerComponent(new nr(DF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new bg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Xs.EMAIL_SIGNIN,PASSWORD_RESET:Xs.PASSWORD_RESET,RECOVER_EMAIL:Xs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Xs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Xs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Xs.VERIFY_EMAIL}},EmailAuthProvider:ji,FacebookAuthProvider:Un,GithubAuthProvider:Bn,GoogleAuthProvider:$n,OAuthProvider:Vo,SAMLAuthProvider:mh,PhoneAuthProvider:t_,PhoneMultiFactorGenerator:kx,RecaptchaVerifier:NF,TwitterAuthProvider:zn,Auth:bg,AuthCredential:Ea,Error:Lt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(fF,pF)}OF(_n);const VF=_n.initializeApp({apiKey:"AIzaSyBvrVJXjaK8YVYT03RBzG9lnvPu3Ulur0g",authDomain:"english-class-dev.firebaseapp.com",projectId:"english-class-dev",storageBucket:"english-class-dev.appspot.com",messagingSenderId:"1009105784509",appId:"1:1009105784509:web:c5d204e902a32da580f1d4",measurementId:"G-WJ0XPGWHX7"}),jr=VF.auth();var LF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,n_=n_||{},K=LF||self;function _f(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ju(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function MF(t){return Object.prototype.hasOwnProperty.call(t,Jp)&&t[Jp]||(t[Jp]=++FF)}var Jp="closure_uid_"+(1e9*Math.random()>>>0),FF=0;function jF(t,e,n){return t.call.apply(t.bind,arguments)}function UF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=jF:At=UF,At.apply(null,arguments)}function $c(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ui(){this.s=this.s,this.o=this.o}var $F=0;Ui.prototype.s=!1;Ui.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),$F!=0)&&MF(this)};Ui.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jx=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function r_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_f(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Pt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var BF=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};K.addEventListener("test",n,e),K.removeEventListener("test",n,e)}catch{}return t}();function hu(t){return/^[\s\xa0]*$/.test(t)}function wf(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function qn(t){return wf().indexOf(t)!=-1}function i_(t){return i_[" "](t),t}i_[" "]=function(){};function zF(t,e){var n=V3;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var qF=qn("Opera"),Jo=qn("Trident")||qn("MSIE"),Ux=qn("Edge"),xg=Ux||Jo,$x=qn("Gecko")&&!(wf().toLowerCase().indexOf("webkit")!=-1&&!qn("Edge"))&&!(qn("Trident")||qn("MSIE"))&&!qn("Edge"),WF=wf().toLowerCase().indexOf("webkit")!=-1&&!qn("Edge");function Bx(){var t=K.document;return t?t.documentMode:void 0}var Ag;e:{var Xp="",Zp=function(){var t=wf();if($x)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ux)return/Edge\/([\d\.]+)/.exec(t);if(Jo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(WF)return/WebKit\/(\S+)/.exec(t);if(qF)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zp&&(Xp=Zp?Zp[1]:""),Jo){var em=Bx();if(em!=null&&em>parseFloat(Xp)){Ag=String(em);break e}}Ag=Xp}var Pg;if(K.document&&Jo){var UE=Bx();Pg=UE||parseInt(Ag,10)||void 0}else Pg=void 0;var HF=Pg;function fu(t,e){if(Pt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($x){e:{try{i_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fu.$.h.call(this)}}ct(fu,Pt);var GF={2:"touch",3:"pen",4:"mouse"};fu.prototype.h=function(){fu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xu="closure_listenable_"+(1e6*Math.random()|0),KF=0;function QF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++KF,this.fa=this.ia=!1}function Ef(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function s_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function YF(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function zx(t){const e={};for(const n in t)e[n]=t[n];return e}const $E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qx(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<$E.length;s++)n=$E[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function If(t){this.src=t,this.g={},this.h=0}If.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Cg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new QF(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Rg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=jx(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ef(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var o_="closure_lm_"+(1e6*Math.random()|0),tm={};function Wx(t,e,n,r,i){if(r&&r.once)return Gx(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Wx(t,e[s],n,r,i);return null}return n=u_(n),t&&t[Xu]?t.O(e,n,Ju(r)?!!r.capture:!!r,i):Hx(t,e,n,!1,r,i)}function Hx(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ju(i)?!!i.capture:!!i,a=l_(t);if(a||(t[o_]=a=new If(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=JF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BF||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Qx(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JF(){function t(n){return e.call(t.src,t.listener,n)}const e=XF;return t}function Gx(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Gx(t,e[s],n,r,i);return null}return n=u_(n),t&&t[Xu]?t.P(e,n,Ju(r)?!!r.capture:!!r,i):Hx(t,e,n,!0,r,i)}function Kx(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Kx(t,e[s],n,r,i);else r=Ju(r)?!!r.capture:!!r,n=u_(n),t&&t[Xu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Cg(s,n,r,i),-1<n&&(Ef(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=l_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cg(e,n,r,i)),(n=-1<t?e[t]:null)&&a_(n))}function a_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xu])Rg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Qx(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=l_(e))?(Rg(n,t),n.h==0&&(n.src=null,e[o_]=null)):Ef(t)}}}function Qx(t){return t in tm?tm[t]:tm[t]="on"+t}function XF(t,e){if(t.fa)t=!0;else{e=new fu(e,this);var n=t.listener,r=t.la||t.src;t.ia&&a_(t),t=n.call(r,e)}return t}function l_(t){return t=t[o_],t instanceof If?t:null}var nm="__closure_events_fn_"+(1e9*Math.random()>>>0);function u_(t){return typeof t=="function"?t:(t[nm]||(t[nm]=function(e){return t.handleEvent(e)}),t[nm])}function ut(){Ui.call(this),this.i=new If(this),this.S=this,this.J=null}ct(ut,Ui);ut.prototype[Xu]=!0;ut.prototype.removeEventListener=function(t,e,n,r){Kx(this,t,e,n,r)};function _t(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Pt(e,t);else if(e instanceof Pt)e.target=e.target||t;else{var i=e;e=new Pt(r,t),qx(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bc(o,r,!0,e)&&i}if(o=e.g=t,i=Bc(o,r,!0,e)&&i,i=Bc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bc(o,r,!1,e)&&i}ut.prototype.N=function(){if(ut.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ef(n[r]);delete t.g[e],t.h--}}this.J=null};ut.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ut.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Rg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var c_=K.JSON.stringify;class ZF{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function e3(){var t=d_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class t3{constructor(){this.h=this.g=null}add(e,n){const r=Yx.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Yx=new ZF(()=>new n3,t=>t.reset());class n3{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function r3(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function i3(t){K.setTimeout(()=>{throw t},0)}let pu,mu=!1,d_=new t3,Jx=()=>{const t=K.Promise.resolve(void 0);pu=()=>{t.then(s3)}};var s3=()=>{for(var t;t=e3();){try{t.h.call(t.g)}catch(n){i3(n)}var e=Yx;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}mu=!1};function Tf(t,e){ut.call(this),this.h=t||1,this.g=e||K,this.j=At(this.qb,this),this.l=Date.now()}ct(Tf,ut);L=Tf.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_t(this,"tick"),this.ga&&(h_(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function h_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){Tf.$.N.call(this),h_(this),delete this.g};function f_(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Xx(t){t.g=f_(()=>{t.g=null,t.i&&(t.i=!1,Xx(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class o3 extends Ui{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xx(this)}N(){super.N(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gu(t){Ui.call(this),this.h=t,this.g={}}ct(gu,Ui);var BE=[];function Zx(t,e,n,r){Array.isArray(n)||(n&&(BE[0]=n.toString()),n=BE);for(var i=0;i<n.length;i++){var s=Wx(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eA(t){s_(t.g,function(e,n){this.g.hasOwnProperty(n)&&a_(e)},t),t.g={}}gu.prototype.N=function(){gu.$.N.call(this),eA(this)};gu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sf(){this.g=!0}Sf.prototype.Ea=function(){this.g=!1};function a3(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function l3(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function So(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+c3(t,n)+(r?" "+r:"")})}function u3(t,e){t.info(function(){return"TIMEOUT: "+e})}Sf.prototype.info=function(){};function c3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return c_(n)}catch{return e}}var qs={},zE=null;function bf(){return zE=zE||new ut}qs.Ta="serverreachability";function tA(t){Pt.call(this,qs.Ta,t)}ct(tA,Pt);function yu(t){const e=bf();_t(e,new tA(e))}qs.STAT_EVENT="statevent";function nA(t,e){Pt.call(this,qs.STAT_EVENT,t),this.stat=e}ct(nA,Pt);function Ot(t){const e=bf();_t(e,new nA(e,t))}qs.Ua="timingevent";function rA(t,e){Pt.call(this,qs.Ua,t),this.size=e}ct(rA,Pt);function Zu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var xf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},iA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function p_(){}p_.prototype.h=null;function qE(t){return t.h||(t.h=t.i())}function sA(){}var ec={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function m_(){Pt.call(this,"d")}ct(m_,Pt);function g_(){Pt.call(this,"c")}ct(g_,Pt);var kg;function Af(){}ct(Af,p_);Af.prototype.g=function(){return new XMLHttpRequest};Af.prototype.i=function(){return{}};kg=new Af;function tc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new gu(this),this.P=d3,t=xg?125:void 0,this.V=new Tf(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new oA}function oA(){this.i=null,this.g="",this.h=!1}var d3=45e3,aA={},Ng={};L=tc.prototype;L.setTimeout=function(t){this.P=t};function Dg(t,e,n){t.L=1,t.A=Rf(Sr(e)),t.u=n,t.S=!0,lA(t,null)}function lA(t,e){t.G=Date.now(),nc(t),t.B=Sr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),gA(n.i,"t",r),t.o=0,n=t.l.J,t.h=new oA,t.g=MA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new o3(At(t.Pa,t,t.g),t.O)),Zx(t.U,t.g,"readystatechange",t.nb),e=t.I?zx(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),yu(),a3(t.j,t.v,t.B,t.m,t.W,t.u)}L.nb=function(t){t=t.target;const e=this.M;e&&Hn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Hn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||xg||this.g&&(this.h.h||this.g.ja()||KE(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?yu(3):yu(2)),Pf(this);var n=this.g.da();this.ca=n;t:if(uA(this)){var r=KE(this.g);t="";var i=r.length,s=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),Rl(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,l3(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hu(a)){var u=a;break t}}u=null}if(n=u)So(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Og(this,n);else{this.i=!1,this.s=3,Ot(12),ls(this),Rl(this);break e}}this.S?(cA(this,c,o),xg&&this.i&&c==3&&(Zx(this.U,this.V,"tick",this.mb),this.V.start())):(So(this.j,this.m,o,null),Og(this,o)),c==4&&ls(this),this.i&&!this.J&&(c==4?DA(this.l,this):(this.i=!1,nc(this)))}else N3(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),ls(this),Rl(this)}}}catch{}finally{}};function uA(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function cA(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=h3(t,n),i==Ng){e==4&&(t.s=4,Ot(14),r=!1),So(t.j,t.m,null,"[Incomplete Response]");break}else if(i==aA){t.s=4,Ot(15),So(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else So(t.j,t.m,i,null),Og(t,i);uA(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),I_(e),e.M=!0,Ot(11))):(So(t.j,t.m,n,"[Invalid Chunked Response]"),ls(t),Rl(t))}L.mb=function(){if(this.g){var t=Hn(this.g),e=this.g.ja();this.o<e.length&&(Pf(this),cA(this,t,e),this.i&&t!=4&&nc(this))}};function h3(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ng:(n=Number(e.substring(n,r)),isNaN(n)?aA:(r+=1,r+n>e.length?Ng:(e=e.slice(r,r+n),t.o=r+n,e)))}L.cancel=function(){this.J=!0,ls(this)};function nc(t){t.Y=Date.now()+t.P,dA(t,t.P)}function dA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Zu(At(t.lb,t),e)}function Pf(t){t.C&&(K.clearTimeout(t.C),t.C=null)}L.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(u3(this.j,this.B),this.L!=2&&(yu(),Ot(17)),ls(this),this.s=2,Rl(this)):dA(this,this.Y-t)};function Rl(t){t.l.H==0||t.J||DA(t.l,t)}function ls(t){Pf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,h_(t.V),eA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Og(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Vg(n.i,t))){if(!t.K&&Vg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Eh(n),Df(n);else break e;E_(n),Ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Zu(At(n.ib,n),6e3));if(1>=_A(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else us(n,11)}else if((t.K||n.g==t)&&Eh(n),!hu(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(y_(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,_e(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=LA(r,r.J?r.pa:null,r.Y),o.K){wA(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Pf(a),nc(a)),r.g=o}else kA(r);0<n.j.length&&Of(n)}else u[0]!="stop"&&u[0]!="close"||us(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?us(n,7):w_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}yu(4)}catch{}}function f3(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function p3(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_f(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function hA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_f(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=p3(t),r=f3(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var fA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function m3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _s(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _s){this.h=t.h,_h(this,t.j),this.s=t.s,this.g=t.g,wh(this,t.m),this.l=t.l;var e=t.i,n=new vu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),WE(this,n),this.o=t.o}else t&&(e=String(t).match(fA))?(this.h=!1,_h(this,e[1]||"",!0),this.s=dl(e[2]||""),this.g=dl(e[3]||"",!0),wh(this,e[4]),this.l=dl(e[5]||"",!0),WE(this,e[6]||"",!0),this.o=dl(e[7]||"")):(this.h=!1,this.i=new vu(null,this.h))}_s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hl(e,HE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hl(e,HE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hl(n,n.charAt(0)=="/"?v3:y3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hl(n,w3)),t.join("")};function Sr(t){return new _s(t)}function _h(t,e,n){t.j=n?dl(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function WE(t,e,n){e instanceof vu?(t.i=e,E3(t.i,t.h)):(n||(e=hl(e,_3)),t.i=new vu(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function Rf(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function dl(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hl(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,g3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function g3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var HE=/[#\/\?@]/g,y3=/[#\?:]/g,v3=/[#\?]/g,_3=/[#\?@]/g,w3=/#/g;function vu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $i(t){t.g||(t.g=new Map,t.h=0,t.i&&m3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=vu.prototype;L.add=function(t,e){$i(this),this.i=null,t=Ta(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pA(t,e){$i(t),e=Ta(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mA(t,e){return $i(t),e=Ta(t,e),t.g.has(e)}L.forEach=function(t,e){$i(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){$i(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){$i(this);let e=[];if(typeof t=="string")mA(this,t)&&(e=e.concat(this.g.get(Ta(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return $i(this),this.i=null,t=Ta(this,t),mA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gA(t,e,n){pA(t,e),0<n.length&&(t.i=null,t.g.set(Ta(t,e),r_(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ta(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function E3(t,e){e&&!t.j&&($i(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(pA(this,r),gA(this,i,n))},t)),t.j=e}var I3=class{constructor(t,e){this.g=t,this.map=e}};function yA(t){this.l=t||T3,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ka&&K.g.Ka()&&K.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var T3=10;function vA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _A(t){return t.h?1:t.g?t.g.size:0}function Vg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function y_(t,e){t.g?t.g.add(e):t.h=e}function wA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yA.prototype.cancel=function(){if(this.i=EA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function EA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return r_(t.i)}var S3=class{stringify(t){return K.JSON.stringify(t,void 0)}parse(t){return K.JSON.parse(t,void 0)}};function b3(){this.g=new S3}function x3(t,e,n){const r=n||"";try{hA(t,function(i,s){let o=i;Ju(i)&&(o=c_(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function A3(t,e){const n=new Sf;if(K.Image){const r=new Image;r.onload=$c(zc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$c(zc,n,r,"TestLoadImage: error",!1,e),r.onabort=$c(zc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$c(zc,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Cf(t){this.l=t.ec||null,this.j=t.ob||!1}ct(Cf,p_);Cf.prototype.g=function(){return new kf(this.l,this.j)};Cf.prototype.i=function(t){return function(){return t}}({});function kf(t,e){ut.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=v_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(kf,ut);var v_=0;L=kf.prototype;L.open=function(t,e){if(this.readyState!=v_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_u(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||K).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rc(this)),this.readyState=v_};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_u(this)),this.g&&(this.readyState=3,_u(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof K.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;IA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function IA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rc(this):_u(this),this.readyState==3&&IA(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,rc(this))};L.Ya=function(t){this.g&&(this.response=t,rc(this))};L.ka=function(){this.g&&rc(this)};function rc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_u(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _u(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var P3=K.JSON.parse;function je(t){ut.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=TA,this.L=this.M=!1}ct(je,ut);var TA="",R3=/^https?$/i,C3=["POST","PUT"];L=je.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kg.g(),this.C=this.u?qE(this.u):qE(kg),this.g.onreadystatechange=At(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){GE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=K.FormData&&t instanceof K.FormData,!(0<=jx(C3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xA(this),0<this.B&&((this.L=k3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.ua,this)):this.A=f_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){GE(this,s)}};function k3(t){return Jo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof n_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_t(this,"timeout"),this.abort(8))};function GE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,SA(t),Nf(t)}function SA(t){t.F||(t.F=!0,_t(t,"complete"),_t(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_t(this,"complete"),_t(this,"abort"),Nf(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nf(this,!0)),je.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?bA(this):this.kb())};L.kb=function(){bA(this)};function bA(t){if(t.h&&typeof n_<"u"&&(!t.C[1]||Hn(t)!=4||t.da()!=2)){if(t.v&&Hn(t)==4)f_(t.La,0,t);else if(_t(t,"readystatechange"),Hn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(fA)[1]||null;!i&&K.self&&K.self.location&&(i=K.self.location.protocol.slice(0,-1)),r=!R3.test(i?i.toLowerCase():"")}n=r}if(n)_t(t,"complete"),_t(t,"success");else{t.m=6;try{var s=2<Hn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",SA(t)}}finally{Nf(t)}}}}function Nf(t,e){if(t.g){xA(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_t(t,"ready");try{n.onreadystatechange=r}catch{}}}function xA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Hn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),P3(e)}};function KE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case TA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function N3(t){const e={};t=(t.g&&2<=Hn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(hu(t[r]))continue;var n=r3(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}YF(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function AA(t){let e="";return s_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function __(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=AA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Ka(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function PA(t){this.Ga=0,this.j=[],this.l=new Sf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ka("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ka("baseRetryDelayMs",5e3,t),this.hb=Ka("retryDelaySeedMs",1e4,t),this.eb=Ka("forwardChannelMaxRetries",2,t),this.xa=Ka("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new yA(t&&t.concurrentRequestLimit),this.Ja=new b3,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=PA.prototype;L.ra=8;L.H=1;function w_(t){if(RA(t),t.H==3){var e=t.W++,n=Sr(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),ic(t,n),e=new tc(t,t.l,e),e.L=2,e.A=Rf(Sr(n)),n=!1,K.navigator&&K.navigator.sendBeacon)try{n=K.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&K.Image&&(new Image().src=e.A,n=!0),n||(e.g=MA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),nc(e)}VA(t)}function Df(t){t.g&&(I_(t),t.g.cancel(),t.g=null)}function RA(t){Df(t),t.u&&(K.clearTimeout(t.u),t.u=null),Eh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function Of(t){if(!vA(t.i)&&!t.m){t.m=!0;var e=t.Na;pu||Jx(),mu||(pu(),mu=!0),d_.add(e,t),t.C=0}}function D3(t,e){return _A(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Zu(At(t.Na,t,e),OA(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new tc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=zx(s),qx(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=CA(this,i,e),n=Sr(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),ic(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(AA(s)))+"&"+e:this.o&&__(n,this.o,s)),y_(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,Dg(i,n,null)):Dg(i,n,e),this.H=2}}else this.H==3&&(t?QE(this,t):this.j.length==0||vA(this.i)||QE(this))};function QE(t,e){var n;e?n=e.m:n=t.W++;const r=Sr(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),ic(t,r),t.o&&t.s&&__(r,t.o,t.s),n=new tc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=CA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),y_(t.i,n),Dg(n,r,e)}function ic(t,e){t.na&&s_(t.na,function(n,r){_e(e,r,n)}),t.h&&hA({},function(n,r){_e(e,r,n)})}function CA(t,e,n){n=Math.min(t.j.length,n);var r=t.h?At(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{x3(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pu||Jx(),mu||(pu(),mu=!0),d_.add(e,t),t.A=0}}function E_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Zu(At(t.Ma,t),OA(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,NA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Zu(At(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ot(10),Df(this),NA(this))};function I_(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function NA(t){t.g=new tc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Sr(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),ic(t,e),t.o&&t.s&&__(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Rf(Sr(e)),n.u=null,n.S=!0,lA(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Df(this),E_(this),Ot(19))};function Eh(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function DA(t,e){var n=null;if(t.g==e){Eh(t),I_(t),t.g=null;var r=2}else if(Vg(t.i,e))n=e.F,wA(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=bf(),_t(r,new rA(r,n)),Of(t)}else kA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&D3(t,e)||r==2&&E_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:us(t,5);break;case 4:us(t,10);break;case 3:us(t,6);break;default:us(t,2)}}}function OA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function us(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=At(t.pb,t);n||(n=new _s("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||_h(n,"https"),Rf(n)),A3(n.toString(),r)}else Ot(2);t.H=0,t.h&&t.h.za(e),VA(t),RA(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ot(2)):(this.l.info("Failed to ping google.com"),Ot(1))};function VA(t){if(t.H=0,t.ma=[],t.h){const e=EA(t.i);(e.length!=0||t.j.length!=0)&&(jE(t.ma,e),jE(t.ma,t.j),t.i.i.length=0,r_(t.j),t.j.length=0),t.h.ya()}}function LA(t,e,n){var r=n instanceof _s?Sr(n):new _s(n);if(r.g!="")e&&(r.g=e+"."+r.g),wh(r,r.m);else{var i=K.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new _s(null);r&&_h(s,r),e&&(s.g=e),i&&wh(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),ic(t,r),r}function MA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new je(new Cf({ob:n})):new je(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function FA(){}L=FA.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Ih(){if(Jo&&!(10<=Number(HF)))throw Error("Environmental error: no available transport.")}Ih.prototype.g=function(t,e){return new an(t,e)};function an(t,e){ut.call(this),this.g=new PA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sa(this)}ct(an,ut);an.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=LA(t,null,t.Y),Of(t)};an.prototype.close=function(){w_(this.g)};an.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=c_(t),t=n);e.j.push(new I3(e.fb++,t)),e.H==3&&Of(e)};an.prototype.N=function(){this.g.h=null,delete this.j,w_(this.g),delete this.g,an.$.N.call(this)};function jA(t){m_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(jA,m_);function UA(){g_.call(this),this.status=1}ct(UA,g_);function Sa(t){this.g=t}ct(Sa,FA);Sa.prototype.Ba=function(){_t(this.g,"a")};Sa.prototype.Aa=function(t){_t(this.g,new jA(t))};Sa.prototype.za=function(t){_t(this.g,new UA)};Sa.prototype.ya=function(){_t(this.g,"b")};function O3(){this.blockSize=-1}function On(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(On,O3);On.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rm(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}On.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)rm(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){rm(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){rm(this,r),i=0;break}}this.h=i,this.i+=e};On.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var V3={};function T_(t){return-128<=t&&128>t?zF(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function Gn(t){if(isNaN(t)||!isFinite(t))return Mo;if(0>t)return mt(Gn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Lg;return new de(e,0)}function $A(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return mt($A(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gn(Math.pow(e,8)),r=Mo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Gn(Math.pow(e,s)),r=r.R(s).add(Gn(o))):(r=r.R(n),r=r.add(Gn(o)))}return r}var Lg=4294967296,Mo=T_(0),Mg=T_(1),YE=T_(16777216);L=de.prototype;L.ea=function(){if(mn(this))return-mt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Lg+r)*e,e*=Lg}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fr(this))return"0";if(mn(this))return"-"+mt(this).toString(t);for(var e=Gn(Math.pow(t,6)),n=this,r="";;){var i=Sh(n,e).g;n=Th(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,fr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function fr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mn(t){return t.h==-1}L.X=function(t){return t=Th(this,t),mn(t)?-1:fr(t)?0:1};function mt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(Mg)}L.abs=function(){return mn(this)?mt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Th(t,e){return t.add(mt(e))}L.R=function(t){if(fr(this)||fr(t))return Mo;if(mn(this))return mn(t)?mt(this).R(mt(t)):mt(mt(this).R(t));if(mn(t))return mt(this.R(mt(t)));if(0>this.X(YE)&&0>t.X(YE))return Gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,qc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,qc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,qc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,qc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function qc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Qa(t,e){this.g=t,this.h=e}function Sh(t,e){if(fr(e))throw Error("division by zero");if(fr(t))return new Qa(Mo,Mo);if(mn(t))return e=Sh(mt(t),e),new Qa(mt(e.g),mt(e.h));if(mn(e))return e=Sh(t,mt(e)),new Qa(mt(e.g),e.h);if(30<t.g.length){if(mn(t)||mn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Mg,r=e;0>=r.X(t);)n=JE(n),r=JE(r);var i=Zs(n,1),s=Zs(r,1);for(r=Zs(r,2),n=Zs(n,2);!fr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Zs(r,1),n=Zs(n,1)}return e=Th(t,i.R(e)),new Qa(i,e)}for(i=Mo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Gn(n),o=s.R(e);mn(o)||0<o.X(t);)n-=r,s=Gn(n),o=s.R(e);fr(s)&&(s=Mg),i=i.add(s),t=Th(t,o)}return new Qa(i,t)}L.gb=function(t){return Sh(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function JE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function Zs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new de(i,t.h)}Ih.prototype.createWebChannel=Ih.prototype.g;an.prototype.send=an.prototype.u;an.prototype.open=an.prototype.m;an.prototype.close=an.prototype.close;xf.NO_ERROR=0;xf.TIMEOUT=8;xf.HTTP_ERROR=6;iA.COMPLETE="complete";sA.EventType=ec;ec.OPEN="a";ec.CLOSE="b";ec.ERROR="c";ec.MESSAGE="d";ut.prototype.listen=ut.prototype.O;je.prototype.listenOnce=je.prototype.P;je.prototype.getLastError=je.prototype.Sa;je.prototype.getLastErrorCode=je.prototype.Ia;je.prototype.getStatus=je.prototype.da;je.prototype.getResponseJson=je.prototype.Wa;je.prototype.getResponseText=je.prototype.ja;je.prototype.send=je.prototype.ha;je.prototype.setWithCredentials=je.prototype.Oa;On.prototype.digest=On.prototype.l;On.prototype.reset=On.prototype.reset;On.prototype.update=On.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=Gn;de.fromString=$A;var L3=function(){return new Ih},M3=function(){return bf()},im=xf,F3=iA,j3=qs,XE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Wc=sA,U3=je,$3=On,Fo=de,B3={};const ZE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new af("@firebase/firestore");function so(){return _i.logLevel}function z3(t){_i.setLogLevel(t)}function R(t,...e){if(_i.logLevel<=Z.DEBUG){const n=e.map(S_);_i.debug(`Firestore (${ba}): ${t}`,...n)}}function qe(t,...e){if(_i.logLevel<=Z.ERROR){const n=e.map(S_);_i.error(`Firestore (${ba}): ${t}`,...n)}}function Vn(t,...e){if(_i.logLevel<=Z.WARN){const n=e.map(S_);_i.warn(`Firestore (${ba}): ${t}`,...n)}}function S_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t="Unexpected state"){const e=`FIRESTORE (${ba}) INTERNAL ASSERTION FAILED: `+t;throw qe(e),new Error(e)}function q(t,e){t||M()}function q3(t,e){t||M()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class H3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class G3{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(q(typeof r.accessToken=="string"),new BA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string"),new ot(e)}}class K3{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Q3{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new K3(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Y3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class J3{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(q(typeof n.token=="string"),this.R=n.token,new Y3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=X3(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Q(t,e){return t<e?-1:t>e?1:0}function Xo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function qA(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Pe(0,0))}static max(){return new W(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends wu{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const Z3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends wu{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return Z3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(se.fromString(e))}static fromName(e){return new D(se.fromString(e).popFirst(5))}static empty(){return new D(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Fg(t){return t.fields.find(e=>e.kind===2)}function Xi(t){return t.fields.filter(e=>e.kind!==2)}bh.UNKNOWN_ID=-1;class Sd{constructor(e,n){this.fieldPath=e,this.kind=n}}class Eu{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Eu(0,ln.min())}}function WA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Pe(n+1,0):new Pe(n,r));return new ln(i,D.empty(),e)}function HA(t){return new ln(t.readTime,t.key,-1)}class ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ln(W.min(),D.empty(),-1)}static max(){return new ln(W.max(),D.empty(),-1)}}function b_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:Q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==GA)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Cl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=x_(r.target.error);this.V.reject(new Cl(e,i))}}static open(e,n,r,i){try{return new Vf(n,e.transaction(i,r))}catch(s){throw new Cl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new t5(n)}}class Pn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Pn.S(De())===12.2&&qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),Zi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ru())return!1;if(Pn.C())return!0;const e=De(),n=Pn.S(e),r=0<n&&n<10,i=Pn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=B3)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Cl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new P(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Cl(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Vf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),I.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class e5{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Zi(this.k.delete())}}class Cl extends P{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function zi(t){return t.name==="IndexedDbTransactionError"}class t5{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zi(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),Zi(this.store.add(e))}get(e){return Zi(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),Zi(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),Zi(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new I((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=x_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new e5(a),u=n(a.primaryKey,a.value,l);if(u instanceof I){const c=u.catch(d=>(l.done(),I.reject(d)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Zi(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=x_(r.target.error);n(i)}})}let eI=!1;function x_(t){const e=Pn.S(De());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eI||(eI=!0,setTimeout(()=>{throw r},0)),r}}return t}class n5{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){R("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{R("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){zi(n)?R("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Bi(n)}await this.ee(6e4)})}}class r5{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return R("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(R("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=HA(s);b_(o,r)>0&&(r=o)}),new ln(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ht._e=-1;function sc(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function QA(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tI(e)),e=i5(t.get(n),e);return tI(e)}function i5(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tI(t){return t+""}function Kn(t){const e=t.length;if(q(e>=2),e===2)return q(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&M(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:M()}s=o+2}return new se(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t,e){return[t,Mt(e)]}function YA(t,e,n){return[t,Mt(e),n]}const s5={},o5=["prefixPath","collectionGroup","readTime","documentId"],a5=["prefixPath","collectionGroup","documentId"],l5=["collectionGroup","readTime","prefixPath","documentId"],u5=["canonicalId","targetId"],c5=["targetId","path"],d5=["path","targetId"],h5=["collectionId","parent"],f5=["indexId","uid"],p5=["uid","sequenceNumber"],m5=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],g5=["indexId","uid","orderedDocumentKey"],y5=["userId","collectionPath","documentId"],v5=["userId","collectionPath","largestBatchId"],_5=["userId","collectionGroup","largestBatchId"],JA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],w5=[...JA,"documentOverlays"],XA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ZA=XA,E5=[...ZA,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends KA{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function dt(t,e){const n=V(t);return Pn.M(n.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function eP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hc(this.root,e,this.comparator,!0)}}class Hc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iI(this.data.getIterator())}getIteratorFrom(e){return new iI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new he(this.comparator);return n.data=e,n}}class iI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function eo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new he(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I5(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tP("Invalid base64 string: "+s):s}}(e);return new nt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const T5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(q(!!t),typeof t=="string"){let e=0;const n=T5.exec(t);if(q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ei(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function A_(t){const e=t.mapValue.fields.__previous_value__;return Lf(e)?A_(e):e}function Tu(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},xd={nullValue:"NULL_VALUE"};function Rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lf(t)?4:nP(t)?9007199254740991:10:M()}function ir(t,e){if(t===e)return!0;const n=Rs(t);if(n!==Rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tu(t).isEqual(Tu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wi(i.timestampValue),a=wi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ei(i.bytesValue).isEqual(Ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Iu(o)===Iu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xo(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rI(o)!==rI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ir(o[l],a[l])))return!1;return!0}(t,e);default:return M()}}function Su(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Rs(t),r=Rs(e);if(n!==r)return Q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Q(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return sI(t.timestampValue,e.timestampValue);case 4:return sI(Tu(t),Tu(e));case 5:return Q(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ei(s),l=Ei(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Q(a[u],l[u]);if(c!==0)return c}return Q(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Q(Le(s.latitude),Le(o.latitude));return a!==0?a:Q(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ti(a[u],l[u]);if(c)return c}return Q(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ti.mapValue&&o===ti.mapValue)return 0;if(s===ti.mapValue)return 1;if(o===ti.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const h=Q(l[d],c[d]);if(h!==0)return h;const p=Ti(a[l[d]],u[c[d]]);if(p!==0)return p}return Q(l.length,c.length)}(t.mapValue,e.mapValue);default:throw M()}}function sI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Q(t,e);const n=wi(t),r=wi(e),i=Q(n.seconds,r.seconds);return i!==0?i:Q(n.nanos,r.nanos)}function Zo(t){return Ug(t)}function Ug(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return D.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ug(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ug(n.fields[o])}`;return i+"}"}(t.mapValue):M()}function Cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $g(t){return!!t&&"integerValue"in t}function bu(t){return!!t&&"arrayValue"in t}function oI(t){return!!t&&"nullValue"in t}function aI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ad(t){return!!t&&"mapValue"in t}function kl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=kl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=kl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function nP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function b5(t){return"nullValue"in t?xd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Cs(Ii.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:M()}function x5(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Cs(Ii.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ti:M()}function lI(t,e){const n=Ti(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function uI(t,e){const n=Ti(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ad(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=kl(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=kl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ad(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ad(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ws(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(kl(this.value))}}function rP(t){const e=[];return Ws(t.fields,(n,r)=>{const i=new be([n]);if(Ad(r)){const s=rP(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new we(e,0,W.min(),W.min(),W.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new we(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new we(e,2,n,W.min(),W.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new we(e,3,n,W.min(),W.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.position=e,this.inclusive=n}}function cI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=Ti(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n="asc"){this.field=e,this.dir=n}}function A5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{}class te extends iP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new P5(e,n,r):n==="array-contains"?new k5(e,r):n==="in"?new cP(e,r):n==="not-in"?new N5(e,r):n==="array-contains-any"?new D5(e,r):new te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new R5(e,r):new C5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ti(n,this.value)):n!==null&&Rs(this.value)===Rs(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends iP{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ue(e,n)}matches(e){return ea(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ea(t){return t.op==="and"}function Bg(t){return t.op==="or"}function P_(t){return sP(t)&&ea(t)}function sP(t){for(const e of t.filters)if(e instanceof ue)return!1;return!0}function zg(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+Zo(t.value);if(P_(t))return t.filters.map(e=>zg(e)).join(",");{const e=t.filters.map(n=>zg(n)).join(",");return`${t.op}(${e})`}}function oP(t,e){return t instanceof te?function(r,i){return i instanceof te&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(t,e):t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&oP(o,i.filters[a]),!0):!1}(t,e):void M()}function aP(t,e){const n=t.filters.concat(e);return ue.create(n,t.op)}function lP(t){return t instanceof te?function(n){return`${n.field.canonicalString()} ${n.op} ${Zo(n.value)}`}(t):t instanceof ue?function(n){return n.op.toString()+" {"+n.getFilters().map(lP).join(" ,")+"}"}(t):"Filter"}class P5 extends te{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class R5 extends te{constructor(e,n){super(e,"in",n),this.keys=uP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class C5 extends te{constructor(e,n){super(e,"not-in",n),this.keys=uP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function uP(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class k5 extends te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bu(n)&&Su(n.arrayValue,this.value)}}class cP extends te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Su(this.value.arrayValue,n)}}class N5 extends te{constructor(e,n){super(e,"not-in",n)}matches(e){if(Su(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Su(this.value.arrayValue,n)}}class D5 extends te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Su(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function qg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new O5(t,e,n,r,i,s,o)}function ks(t){const e=V(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zo(r)).join(",")),e.ce=n}return e.ce}function oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!A5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dI(t.startAt,e.startAt)&&dI(t.endAt,e.endAt)}function xh(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ah(t,e){return t.filters.filter(n=>n instanceof te&&n.field.isEqual(e))}function hI(t,e,n){let r=xd,i=!0;for(const s of Ah(t,e)){let o=xd,a=!0;switch(s.op){case"<":case"<=":o=b5(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=xd}lI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];lI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function fI(t,e,n){let r=ti,i=!0;for(const s of Ah(t,e)){let o=ti,a=!0;switch(s.op){case">=":case">":o=x5(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=ti}uI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];uI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function dP(t,e,n,r,i,s,o,a){return new Nr(t,e,n,r,i,s,o,a)}function xa(t){return new Nr(t)}function pI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function R_(t){return t.collectionGroup!==null}function jo(t){const e=V(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new he(be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new xu(s,r))}),n.has(be.keyField().canonicalString())||e.le.push(new xu(be.keyField(),r))}return e.le}function Ft(t){const e=V(t);return e.he||(e.he=V5(e,jo(t))),e.he}function V5(t,e){if(t.limitType==="F")return qg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new xu(i.field,s)});const n=t.endAt?new Si(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Si(t.startAt.position,t.startAt.inclusive):null;return qg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wg(t,e){const n=t.filters.concat([e]);return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ph(t,e,n){return new Nr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return oc(Ft(t),Ft(e))&&t.limitType===e.limitType}function hP(t){return`${ks(Ft(t))}|lt:${t.limitType}`}function oo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>lP(i)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zo(i)).join(",")),`Target(${r})`}(Ft(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):D.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=cI(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,jo(r),i)||r.endAt&&!function(o,a,l){const u=cI(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,jo(r),i))}(t,e)}function fP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pP(t){return(e,n)=>{let r=!1;for(const i of jo(t)){const s=L5(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function L5(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ti(l,u):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return eP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M5=new me(D.comparator);function Kt(){return M5}const mP=new me(D.comparator);function fl(...t){let e=mP;for(const n of t)e=e.insert(n.key,n);return e}function gP(t){let e=mP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qn(){return Nl()}function yP(){return Nl()}function Nl(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const F5=new me(D.comparator),j5=new he(D.comparator);function X(...t){let e=j5;for(const n of t)e=e.add(n);return e}const U5=new he(Q);function C_(){return U5}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function _P(t){return{integerValue:""+t}}function wP(t,e){return QA(e)?_P(e):vP(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this._=void 0}}function $5(t,e,n){return t instanceof ta?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lf(s)&&(s=A_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ns?IP(t,e):t instanceof Ds?TP(t,e):function(i,s){const o=EP(i,s),a=mI(o)+mI(i.Ie);return $g(o)&&$g(i.Ie)?_P(a):vP(i.serializer,a)}(t,e)}function B5(t,e,n){return t instanceof Ns?IP(t,e):t instanceof Ds?TP(t,e):n}function EP(t,e){return t instanceof na?function(r){return $g(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ta extends Mf{}class Ns extends Mf{constructor(e){super(),this.elements=e}}function IP(t,e){const n=SP(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ds extends Mf{constructor(e){super(),this.elements=e}}function TP(t,e){let n=SP(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class na extends Mf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function mI(t){return Le(t.integerValue||t.doubleValue)}function SP(t){return bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n){this.field=e,this.transform=n}}function z5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof Ds&&i instanceof Ds?Xo(r.elements,i.elements,ir):r instanceof na&&i instanceof na?ir(r.Ie,i.Ie):r instanceof ta&&i instanceof ta}(t.transform,e.transform)}class q5{constructor(e,n){this.version=e,this.transformResults=n}}class xe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ff{}function bP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pa(t.key,xe.none()):new Aa(t.key,t.data,xe.none());{const n=t.data,r=gt.empty();let i=new he(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Gt(i.toArray()),xe.none())}}function W5(t,e,n){t instanceof Aa?function(i,s,o){const a=i.value.clone(),l=yI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!Pd(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=yI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(xP(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Dl(t,e,n,r){return t instanceof Aa?function(s,o,a,l){if(!Pd(s.precondition,o))return a;const u=s.value.clone(),c=vI(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,a,l){if(!Pd(s.precondition,o))return a;const u=vI(s.fieldTransforms,l,o),c=o.data;return c.setAll(xP(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Pd(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function H5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=EP(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function gI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xo(r,i,(s,o)=>z5(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends Ff{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends Ff{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yI(t,e,n){const r=new Map;q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,B5(o,a,n[i]))}return r}function vI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$5(s,o,e))}return r}class Pa extends Ff{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class k_ extends Ff{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&W5(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Dl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Dl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=yP();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=bP(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,(n,r)=>gI(n,r))&&Xo(this.baseMutations,e.baseMutations,(n,r)=>gI(n,r))}}class D_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){q(e.mutations.length===r.length);let i=function(){return F5}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new D_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,re;function AP(t){switch(t){default:return M();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function PP(t){if(t===void 0)return qe("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ke.OK:return T.OK;case Ke.CANCELLED:return T.CANCELLED;case Ke.UNKNOWN:return T.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return T.INTERNAL;case Ke.UNAVAILABLE:return T.UNAVAILABLE;case Ke.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ke.NOT_FOUND:return T.NOT_FOUND;case Ke.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ke.ABORTED:return T.ABORTED;case Ke.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ke.DATA_LOSS:return T.DATA_LOSS;default:return M()}}(re=Ke||(Ke={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5=new Fo([4294967295,4294967295],0);function _I(t){const e=RP().encode(t),n=new $3;return n.update(e),new Uint8Array(n.digest())}function wI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fo([n,r],0),new Fo([i,s],0)]}class V_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new pl(`Invalid padding: ${n}`);if(r<0)throw new pl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new pl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new pl(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Fo.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Fo.fromNumber(r)));return i.compare(K5)===1&&(i=new Fo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=_I(e),[r,i]=wI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new V_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=_I(e),[r,i]=wI(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class pl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(W.min(),i,new me(Q),Kt(),X())}}class dc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dc(r,n,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class CP{constructor(e,n){this.targetId=e,this.fe=n}}class kP{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class EI{constructor(){this.ge=0,this.pe=TI(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=X(),n=X(),r=X();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new dc(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=TI()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,q(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Q5{constructor(e){this.Le=e,this.ke=new Map,this.qe=Kt(),this.Qe=II(),this.Ke=new me(Q)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(xh(s))if(r===0){const o=new D(s.path);this.We(n,o,we.newNoDocument(o,W.min()))}else q(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ei(r).toUint8Array()}catch(l){if(l instanceof tP)return Vn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new V_(o,i,s)}catch(l){return Vn(l instanceof pl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&xh(a.target)){const l=new D(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,we.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=X();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new cc(e,n,this.Ke,this.qe,r);return this.qe=Kt(),this.Qe=II(),this.Ke=new me(Q),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new EI,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new he(Q),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new EI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function II(){return new me(D.comparator)}function TI(){return new me(D.comparator)}const Y5={asc:"ASCENDING",desc:"DESCENDING"},J5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X5={and:"AND",or:"OR"};class Z5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hg(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ej(t,e){return ra(t,e.toTimestamp())}function He(t){return q(!!t),W.fromTimestamp(function(n){const r=wi(n);return new Pe(r.seconds,r.nanos)}(t))}function L_(t,e){return function(r){return new se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function DP(t){const e=se.fromString(t);return q(BP(e)),e}function Au(t,e){return L_(t.databaseId,e.path)}function tr(t,e){const n=DP(e);if(n.get(1)!==t.databaseId.projectId)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(VP(n))}function Gg(t,e){return L_(t.databaseId,e)}function OP(t){const e=DP(t);return e.length===4?se.emptyPath():VP(e)}function Pu(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VP(t){return q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function SI(t,e,n){return{name:Au(t,e),fields:n.value.mapValue.fields}}function LP(t,e,n){const r=tr(t,e.name),i=He(e.updateTime),s=e.createTime?He(e.createTime):W.min(),o=new gt({mapValue:{fields:e.fields}}),a=we.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function tj(t,e){return"found"in e?function(r,i){q(!!i.found),i.found.name,i.found.updateTime;const s=tr(r,i.found.name),o=He(i.found.updateTime),a=i.found.createTime?He(i.found.createTime):W.min(),l=new gt({mapValue:{fields:i.found.fields}});return we.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){q(!!i.missing),q(!!i.readTime);const s=tr(r,i.missing),o=He(i.readTime);return we.newNoDocument(s,o)}(t,e):M()}function nj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(q(c===void 0||typeof c=="string"),nt.fromBase64String(c||"")):(q(c===void 0||c instanceof Uint8Array),nt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:PP(u.code);return new P(c,u.message||"")}(o);n=new kP(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tr(t,r.document.name),s=He(r.document.updateTime),o=r.document.createTime?He(r.document.createTime):W.min(),a=new gt({mapValue:{fields:r.document.fields}}),l=we.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Rd(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tr(t,r.document),s=r.readTime?He(r.readTime):W.min(),o=we.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Rd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tr(t,r.document),s=r.removedTargetIds||[];n=new Rd([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new G5(i,s),a=r.targetId;n=new CP(a,o)}}return n}function Ru(t,e){let n;if(e instanceof Aa)n={update:SI(t,e.key,e.value)};else if(e instanceof Pa)n={delete:Au(t,e.key)};else if(e instanceof Dr)n={update:SI(t,e.key,e.data),updateMask:lj(e.fieldMask)};else{if(!(e instanceof k_))return M();n={verify:Au(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof na)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ej(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M()}(t,e.precondition)),n}function Kg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(He(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)q(a.setToServerValue==="REQUEST_TIME"),l=new ta;else if("appendMissingElements"in a){const c=a.appendMissingElements.values||[];l=new Ns(c)}else if("removeAllFromArray"in a){const c=a.removeAllFromArray.values||[];l=new Ds(c)}else"increment"in a?l=new na(o,a.increment):M();const u=be.fromServerFormat(a.fieldPath);return new uc(u,l)}(t,i)):[];if(e.update){e.update.name;const i=tr(t,e.update.name),s=new gt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Gt(u.map(c=>be.fromServerFormat(c)))}(e.updateMask);return new Dr(i,s,o,n,r)}return new Aa(i,s,n,r)}if(e.delete){const i=tr(t,e.delete);return new Pa(i,n)}if(e.verify){const i=tr(t,e.verify);return new k_(i,n)}return M()}function rj(t,e){return t&&t.length>0?(q(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?He(i.updateTime):He(s);return o.isEqual(W.min())&&(o=He(s)),new q5(o,i.transformResults||[])}(n,e))):[]}function MP(t,e){return{documents:[Gg(t,e.path)]}}function FP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return $P(ue.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:ao(d.field),direction:sj(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Hg(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function jP(t){let e=OP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const h=UP(d);return h instanceof ue&&P_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(h=>function(_){return new xu(lo(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(d){let h;return h=typeof d=="object"?d.value:d,sc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(d){const h=!!d.before,p=d.values||[];return new Si(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const h=!d.before,p=d.values||[];return new Si(p,h)}(n.endAt)),dP(e,i,o,s,a,"F",l,u)}function ij(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=lo(n.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=lo(n.unaryFilter.field);return te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=lo(n.unaryFilter.field);return te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=lo(n.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(n){return te.create(lo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ue.create(n.compositeFilter.filters.map(r=>UP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(n.compositeFilter.op))}(t):M()}function sj(t){return Y5[t]}function oj(t){return J5[t]}function aj(t){return X5[t]}function ao(t){return{fieldPath:t.canonicalString()}}function lo(t){return be.fromServerFormat(t.fieldPath)}function $P(t){return t instanceof te?function(n){if(n.op==="=="){if(aI(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NAN"}};if(oI(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(aI(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NOT_NAN"}};if(oI(n.value))return{unaryFilter:{field:ao(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(n.field),op:oj(n.op),value:n.value}}}(t):t instanceof ue?function(n){const r=n.getFilters().map(i=>$P(i));return r.length===1?r[0]:{compositeFilter:{op:aj(n.op),filters:r}}}(t):M()}function lj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,i,s=W.min(),o=W.min(),a=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.ut=e}}function uj(t,e){let n;if(e.document)n=LP(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=Vs(e.noDocument.readTime);n=we.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return M();{const r=D.fromSegments(e.unknownDocument.path),i=Vs(e.unknownDocument.version);n=we.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Pe(i[0],i[1]);return W.fromTimestamp(s)}(e.readTime)),n}function bI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Rh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Au(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ra(s,o.version.toTimestamp()),createTime:ra(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Os(e.version)};else{if(!e.isUnknownDocument())return M();r.unknownDocument={path:n.path.toArray(),version:Os(e.version)}}return r}function Rh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Os(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Vs(t){const e=new Pe(t.seconds,t.nanoseconds);return W.fromTimestamp(e)}function es(t,e){const n=(e.baseMutations||[]).map(s=>Kg(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Kg(t.ut,s)),i=Pe.fromMillis(e.localWriteTimeMs);return new N_(e.batchId,i,n,r)}function ml(t){const e=Vs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Vs(t.lastLimboFreeSnapshotVersion):W.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return q(s.documents.length===1),Ft(xa(OP(s.documents[0])))}(t.query):function(s){return Ft(jP(s))}(t.query),new pr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,nt.fromBase64String(t.resumeToken))}function qP(t,e){const n=Os(e.snapshotVersion),r=Os(e.lastLimboFreeSnapshotVersion);let i;i=xh(e.target)?MP(t.ut,e.target):FP(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ks(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function M_(t){const e=jP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ph(e,e.limit,"L"):e}function sm(t,e){return new O_(e.largestBatchId,Kg(t.ut,e.overlayMutation))}function xI(t,e){const n=e.path.lastSegment();return[t,Mt(e.path.popLast()),n]}function AI(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Os(r.readTime),documentKey:Mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{getBundleMetadata(e,n){return PI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Vs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return PI(e).put(function(i){return{bundleId:i.id,createTime:Os(He(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return RI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:M_(s.bundledQuery),readTime:Vs(s.readTime)}}(r)})}saveNamedQuery(e,n){return RI(e).put(function(i){return{name:i.name,readTime:Os(He(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function PI(t){return dt(t,"bundles")}function RI(t){return dt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new jf(e,r)}getOverlay(e,n){return Ya(e).get(xI(this.userId,n)).next(r=>r?sm(this.serializer,r):null)}getOverlays(e,n){const r=Qn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new O_(n,o);i.push(this.lt(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Mt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ya(e).H("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Qn(),s=Mt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ya(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=sm(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Qn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ya(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,c)=>{const d=sm(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):c.done()}).next(()=>s)}lt(e,n){return Ya(e).put(function(i,s,o){const[a,l,u]=xI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ru(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function Ya(t){return dt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),Iu(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(Ei(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?nP(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):M()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),D.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}ts.St=new ts;function dj(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function CI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=dj(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class hj{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=CI(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=CI(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class fj{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class pj{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Ja{constructor(){this.Wt=new hj,this.Gt=new fj(this.Wt),this.zt=new pj(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ns(this.indexId,this.documentKey,this.arrayValue,r)}}function Ur(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=kI(t.arrayValue,e.arrayValue),n!==0?n:(n=kI(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function kI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.Jt=new he((n,r)=>be.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(q(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=Fg(e);if(n!==void 0&&!this.tn(n))return!1;const r=Xi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.nn(a,l)||!this.rn(this.Yt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new he(be.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Sd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Sd(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Sd(r.field,r.dir==="asc"?0:1)));return new bh(bh.UNKNOWN_ID,this.collectionId,n,Eu.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){var e,n;if(q(t instanceof te||t instanceof ue),t instanceof te){if(t instanceof cP){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>te.create(t.field,"==",s)))||[];return ue.create(i,"or")}return t}const r=t.filters.map(i=>WP(i));return ue.create(r,t.op)}function mj(t){if(t.getFilters().length===0)return[];const e=Jg(WP(t));return q(HP(e)),Qg(e)||Yg(e)?[e]:e.getFilters()}function Qg(t){return t instanceof te}function Yg(t){return t instanceof ue&&P_(t)}function HP(t){return Qg(t)||Yg(t)||function(n){if(n instanceof ue&&Bg(n)){for(const r of n.getFilters())if(!Qg(r)&&!Yg(r))return!1;return!0}return!1}(t)}function Jg(t){if(q(t instanceof te||t instanceof ue),t instanceof te)return t;if(t.filters.length===1)return Jg(t.filters[0]);const e=t.filters.map(r=>Jg(r));let n=ue.create(e,t.op);return n=Ch(n),HP(n)?n:(q(n instanceof ue),q(ea(n)),q(n.filters.length>1),n.filters.reduce((r,i)=>F_(r,i)))}function F_(t,e){let n;return q(t instanceof te||t instanceof ue),q(e instanceof te||e instanceof ue),n=t instanceof te?e instanceof te?function(i,s){return ue.create([i,s],"and")}(t,e):DI(t,e):e instanceof te?DI(e,t):function(i,s){if(q(i.filters.length>0&&s.filters.length>0),ea(i)&&ea(s))return aP(i,s.getFilters());const o=Bg(i)?i:s,a=Bg(i)?s:i,l=o.filters.map(u=>F_(u,a));return ue.create(l,"or")}(t,e),Ch(n)}function DI(t,e){if(ea(e))return aP(e,t.getFilters());{const n=e.filters.map(r=>F_(t,r));return ue.create(n,"or")}}function Ch(t){if(q(t instanceof te||t instanceof ue),t instanceof te)return t;const e=t.getFilters();if(e.length===1)return Ch(e[0]);if(sP(t))return t;const n=e.map(i=>Ch(i)),r=[];return n.forEach(i=>{i instanceof te?r.push(i):i instanceof ue&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ue.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gj{constructor(){this.on=new j_}addToCollectionParentIndex(e,n){return this.on.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(ln.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class j_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new he(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new he(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Uint8Array(0);class yj{constructor(e,n){this.user=e,this.databaseId=n,this._n=new j_,this.an=new qi(r=>ks(r),(r,i)=>oc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:Mt(i)};return OI(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[qA(n),""],!1,!0);return OI(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Kn(o.parent))}return r})}addFieldIndex(e,n){const r=Xa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=no(e);return s.next(a=>{o.put(AI(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Xa(e),i=no(e),s=to(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Xa(e),r=to(e),i=no(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return I.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new NI(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=to(e);let i=!0;const s=new Map;return I.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=X();const a=[];return I.forEach(s,(l,u)=>{R("IndexedDbIndexManager",`Using index ${function(y){return`id=${y.indexId}|cg=${y.collectionGroup}|f=${y.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${ks(n)}`);const c=function(y,E){const S=Fg(E);if(S===void 0)return null;for(const x of Ah(y,S.fieldPath))switch(x.op){case"array-contains-any":return x.value.arrayValue.values||[];case"array-contains":return[x.value]}return null}(u,l),d=function(y,E){const S=new Map;for(const x of Xi(E))for(const C of Ah(y,x.fieldPath))switch(C.op){case"==":case"in":S.set(x.fieldPath.canonicalString(),C.value);break;case"not-in":case"!=":return S.set(x.fieldPath.canonicalString(),C.value),Array.from(S.values())}return null}(u,l),h=function(y,E){const S=[];let x=!0;for(const C of Xi(E)){const O=C.kind===0?hI(y,C.fieldPath,y.startAt):fI(y,C.fieldPath,y.startAt);S.push(O.value),x&&(x=O.inclusive)}return new Si(S,x)}(u,l),p=function(y,E){const S=[];let x=!0;for(const C of Xi(E)){const O=C.kind===0?fI(y,C.fieldPath,y.endAt):hI(y,C.fieldPath,y.endAt);S.push(O.value),x&&(x=O.inclusive)}return new Si(S,x)}(u,l),_=this.ln(l,u,h),v=this.ln(l,u,p),w=this.hn(l,u,d),g=this.Pn(l.indexId,c,_,h.inclusive,v,p.inclusive,w);return I.forEach(g,m=>r.j(m,n.limit).next(y=>{y.forEach(E=>{const S=D.fromSegments(E.documentKey);o.has(S)||(o=o.add(S),a.push(S))})}))}).next(()=>a)}return I.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=mj(ue.create(e.filters,"and")).map(r=>qg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),c=[];for(let d=0;d<l;++d){const h=n?this.In(n[d/u]):Gc,p=this.Tn(e,h,r[d%u],i),_=this.En(e,h,s[d%u],o),v=a.map(w=>this.Tn(e,h,w,!0));c.push(...this.createRange(p,_,v))}return c}Tn(e,n,r,i){const s=new ns(e,D.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new ns(e,D.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new NI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return I.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new he(be.comparator),c=!1;for(const d of l.filters)for(const h of d.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(c?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new Ja;for(const i of Xi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);ts.St.ht(s,o)}return r.Ut()}In(e){const n=new Ja;return ts.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new Ja;return ts.St.ht(Cs(this.databaseId,n),r.jt(function(s){const o=Xi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new Ja);let s=0;for(const o of Xi(e)){const a=r[s++];for(const l of i)if(this.Rn(n,o.fieldPath)&&bu(a))i=this.Vn(i,o,a);else{const u=l.jt(o.kind);ts.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ja;l.seed(a.Ut()),ts.St.ht(o,l.jt(n.kind)),s.push(l)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof te&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Xa(e),i=no(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(c,d){const h=d?new Eu(d.sequenceNumber,new ln(Vs(d.readTime),new D(Kn(d.documentKey)),d.largestBatchId)):Eu.empty(),p=c.fields.map(([_,v])=>new Sd(be.fromServerFormat(_),v));return new bh(c.indexId,c.collectionGroup,p,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Q(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Xa(e),s=no(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,l=>s.put(AI(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,l=>this.gn(e,i,l).next(u=>{const c=this.pn(s,l);return u.isEqual(c)?I.resolve():this.yn(e,s,l,u,c)}))))})}wn(e,n,r,i){return to(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return to(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=to(e);let s=new he(Ur);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new ns(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new he(Ur);const i=this.dn(n,e);if(i==null)return r;const s=Fg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(bu(o))for(const a of o.arrayValue.values||[])r=r.add(new ns(n.indexId,e.key,this.In(a),i))}else r=r.add(new ns(n.indexId,e.key,Gc,i));return r}yn(e,n,r,i,s){R("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,c,d,h){const p=l.getIterator(),_=u.getIterator();let v=eo(p),w=eo(_);for(;v||w;){let g=!1,m=!1;if(v&&w){const y=c(v,w);y<0?m=!0:y>0&&(g=!0)}else v!=null?m=!0:g=!0;g?(d(w),w=eo(_)):m?(h(v),v=eo(p)):(v=eo(p),w=eo(_))}}(i,s,Ur,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),I.waitFor(o)}fn(e){let n=1;return no(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Ur(o,a)).filter((o,a,l)=>!a||Ur(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Ur(o,e),l=Ur(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&l<0)i.push(o),i.push(o.Ht());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Gc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Gc,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return Ur(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(VI)}getMinOffset(e,n){return I.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||M())).next(VI)}}function OI(t){return dt(t,"collectionParents")}function to(t){return dt(t,"indexEntries")}function Xa(t){return dt(t,"indexConfiguration")}function no(t){return dt(t,"indexState")}function VI(t){q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;b_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ln(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class zt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GP(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(c,d,h)=>(a++,h.delete()));s.push(l.next(()=>{q(a===1)}));const u=[];for(const c of n.mutations){const d=YA(e,c.key.path,n.batchId);s.push(i.delete(d)),u.push(c.key)}return I.waitFor(s).next(()=>u)}function kh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw M();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(41943040,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);class Uf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Uf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=uo(e),o=$r(e);return o.add({}).next(a=>{q(typeof a=="number");const l=new N_(a,n,r,i),u=function(p,_,v){const w=v.baseMutations.map(m=>Ru(p.ut,m)),g=v.mutations.map(m=>Ru(p.ut,m));return{userId:_,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:w,mutations:g}}(this.serializer,this.userId,l),c=[];let d=new he((h,p)=>Q(h.canonicalString(),p.canonicalString()));for(const h of i){const p=YA(this.userId,h.key.path,a);d=d.add(h.key.path.popLast()),c.push(o.put(u)),c.push(s.put(p,s5))}return d.forEach(h=>{c.push(this.indexManager.addToCollectionParentIndex(e,h))}),e.addOnCommittedListener(()=>{this.Dn[a]=l.keys()}),I.waitFor(c).next(()=>l)})}lookupMutationBatch(e,n){return $r(e).get(n).next(r=>r?(q(r.userId===this.userId),es(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?I.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return $r(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(q(a.batchId>=r),s=es(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return $r(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return $r(e).W("userMutationsIndex",n).next(r=>r.map(i=>es(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=bd(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return uo(e).Y({range:i},(o,a,l)=>{const[u,c,d]=o,h=Kn(c);if(u===this.userId&&n.path.isEqual(h))return $r(e).get(d).next(p=>{if(!p)throw M();q(p.userId===this.userId),s.push(es(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new he(Q);const i=[];return n.forEach(s=>{const o=bd(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=uo(e).Y({range:a},(u,c,d)=>{const[h,p,_]=u,v=Kn(p);h===this.userId&&s.path.isEqual(v)?r=r.add(_):d.done()});i.push(l)}),I.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=bd(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new he(Q);return uo(e).Y({range:o},(l,u,c)=>{const[d,h,p]=l,_=Kn(h);d===this.userId&&r.isPrefixOf(_)?_.length===i&&(a=a.add(p)):c.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push($r(e).get(s).next(o=>{if(o===null)throw M();q(o.userId===this.userId),r.push(es(this.serializer,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return GP(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return uo(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Kn(s[1]);i.push(l)}else a.done()}).next(()=>{q(i.length===0)})})}containsKey(e,n){return KP(e,this.userId,n)}Mn(e){return QP(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function KP(t,e,n){const r=bd(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return uo(t).Y({range:s,J:!0},(a,l,u)=>{const[c,d,h]=a;c===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function $r(t){return dt(t,"mutations")}function uo(t){return dt(t,"documentMutations")}function QP(t){return dt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ls(0)}static Nn(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Ls(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>W.fromTimestamp(new Pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ro(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(q(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ro(e).Y((o,a)=>{const l=ml(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ro(e).Y((r,i)=>{const s=ml(i);n(s)})}Bn(e){return MI(e).get("targetGlobalKey").next(n=>(q(n!==null),n))}Ln(e,n){return MI(e).put("targetGlobalKey",n)}kn(e,n){return ro(e).put(qP(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ks(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ro(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=ml(a);oc(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Qr(e);return n.forEach(o=>{const a=Mt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Qr(e);return I.forEach(n,s=>{const o=Mt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Qr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Qr(e);let s=X();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Kn(o[1]),c=new D(u);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Mt(n.path),i=IDBKeyRange.bound([r],[qA(r)],!1,!0);let s=0;return Qr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return ro(e).get(n).next(r=>r?ml(r):null)}}function ro(t){return dt(t,"targets")}function MI(t){return dt(t,"targetGlobal")}function Qr(t){return dt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI([t,e],[n,r]){const i=Q(t,n);return i===0?Q(e,r):i}class _j{constructor(e){this.Qn=e,this.buffer=new he(FI),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();FI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){R("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zi(n)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Bi(n)}await this.Gn(3e5)})}}class Ej{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Ht._e);const r=new _j(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(LI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),LI):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,l,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),so()<=Z.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function Ij(t,e){return new Ej(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(e,n){this.db=e,this.garbageCollector=Ij(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return Kc(e,r)}removeReference(e,n,r){return Kc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Kc(e,n)}Xn(e,n){return function(i,s){let o=!1;return QP(i).Z(a=>KP(i,a,s).next(l=>(l&&(o=!0),I.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,W.min()),Qr(e).delete(function(d){return[0,Mt(d.path)]}(o))))});i.push(l)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Kc(e,n)}Zn(e,n){const r=Qr(e);let i,s=Ht._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Ht._e&&n(new D(Kn(i)),s),s=u,i=l):s=Ht._e}).next(()=>{s!==Ht._e&&n(new D(Kn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kc(t,e){return Qr(t).put(function(r,i){return{targetId:0,path:Mt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ki(e).put(r)}removeEntry(e,n,r){return Ki(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Rh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=we.newInvalidDocument(n);return Ki(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Za(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:we.newInvalidDocument(n)};return Ki(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Za(n))},(i,s)=>{r={document:this.tr(n,s),size:kh(s)}}).next(()=>r)}getEntries(e,n){let r=Kt();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=Kt(),i=new me(D.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,kh(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return I.resolve();let i=new he($I);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Za(i.first()),Za(i.last())),o=i.getIterator();let a=o.getNext();return Ki(e).Y({index:"documentKeyIndex",range:s},(l,u,c)=>{const d=D.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&$I(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?c.U(Za(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Rh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ki(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let c=Kt();for(const d of u){const h=this.tr(D.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);h.isFoundDocument()&&(lc(n,h)||i.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,n,r,i){let s=Kt();const o=UI(n,r),a=UI(n,ln.max());return Ki(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,c)=>{const d=this.tr(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new bj(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return jI(e).get("remoteDocumentGlobalKey").next(n=>(q(!!n),n))}er(e,n){return jI(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=uj(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(W.min())))return r}return we.newInvalidDocument(e)}}function JP(t){return new Sj(t)}class bj extends YP{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new qi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new he((s,o)=>Q(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=bI(this._r.serializer,o);i=i.add(s.path.popLast());const u=kh(l);r+=u-a.size,n.push(this._r.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=bI(this._r.serializer,o.convertToNoDocument(W.min()));n.push(this._r.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function jI(t){return dt(t,"remoteDocumentGlobal")}function Ki(t){return dt(t,"remoteDocumentsV14")}function Za(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function UI(t,e){const n=e.documentKey.path.toArray();return[t,Rh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function $I(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Q(n[s],r[s]),i)return i;return i=Q(n.length,r.length),i||(i=Q(n[n.length-2],r[r.length-2]),i||Q(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Dl(r.mutation,i,Gt.empty(),Pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,n,r=X()){const i=Qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,X()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Kt();const o=Nl(),a=function(){return Nl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Dr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Dl(c.mutation,u,c.mutation.getFieldMask(),Pe.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new xj(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Nl();let i=new me((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=yP();c.forEach(h=>{if(!s.has(h)){const p=bP(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return D.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):R_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Qn());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,X())).next(c=>({batchId:a,changes:gP(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=fl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=fl();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,l=>{const u=function(d,h){return new Nr(h,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,h)=>{o=o.insert(d,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,we.newInvalidDocument(c)))});let a=fl();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Dl(c.mutation,u,Gt.empty(),Pe.now()),lc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return I.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:He(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:M_(i.bundledQuery),readTime:He(i.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(){this.overlays=new me(D.comparator),this.lr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qn();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Qn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Qn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Qn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new O_(n,r));let s=this.lr.get(n);s===void 0&&(s=X(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.hr=new he(it.Pr),this.Ir=new he(it.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new it(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new it(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new D(new se([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new D(new se([])),r=new it(n,e),i=new it(n,e+1);let s=X();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return D.comparator(e.key,n.key)||Q(e.gr,n.gr)}static Tr(e,n){return Q(e.gr,n.gr)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new he(it.Pr)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new N_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new he(Q);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),I.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new it(new D(s),0);let a=new he(Q);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),I.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){q(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return I.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new it(n,0),i=this.yr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e){this.Cr=e,this.docs=function(){return new me(D.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():we.newInvalidDocument(n))}getEntries(e,n){let r=Kt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():we.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Kt();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||b_(HA(c),r)<=0||(i.has(c.key)||lc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}vr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kj(this)}getSize(e){return I.resolve(this.size)}}class kj extends YP{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e){this.persistence=e,this.Fr=new qi(n=>ks(n),oc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Mr=0,this.Or=new U_,this.targetCount=0,this.Nr=Ls.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),I.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.kn(n),I.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ht(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Nj(this),this.indexManager=new gj,this.remoteDocumentCache=function(i){return new Cj(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new zP(n),this.Kr=new Aj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Pj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Rj(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new Dj(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return I.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Dj extends KA{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.Gr=new U_,this.zr=null}static jr(e){return new $f(e)}get Hr(){if(this.zr)return this.zr;throw M()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),I.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Hr,r=>{const i=D.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return I.or([()=>I.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e){this.serializer=e}N(e,n,r,i){const s=new Vf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nI,{unique:!0}),l.createObjectStore("documentMutations")}(e),BI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),BI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:W.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(c=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nI,{unique:!0});const d=u.store("mutations"),h=c.map(p=>d.put(p));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:y5});u.createIndex("collectionPathOverlayIndex",v5,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",_5,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:o5});u.createIndex("documentKeyIndex",a5),u.createIndex("collectionGroupIndex",l5)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:f5}).createIndex("sequenceNumberIndex",p5,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:m5}).createIndex("documentKeyIndex",g5,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=kh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,l=>{q(l.userId===s.userId);const u=es(this.serializer,l);return GP(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new se(o),u=function(d){return[0,Mt(d)]}(l);s.push(n.get(u).next(c=>c?I.resolve():(d=>n.put({targetId:0,path:Mt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>I.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:h5});const r=n.store("collectionParents"),i=new j_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Mt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const c=Kn(a);return s(c.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=ml(i),o=qP(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new D(se.fromString(d.document.name).popFirst(5)):d.noDocument?D.fromSegments(d.noDocument.path):d.unknownDocument?D.fromSegments(d.unknownDocument.path):M()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>I.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=JP(this.serializer),s=new ZP($f.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let c=(u=a.get(l.userId))!==null&&u!==void 0?u:X();es(this.serializer,l).keys().forEach(d=>c=c.add(d)),a.set(l.userId,c)}),I.forEach(a,(l,u)=>{const c=new ot(u),d=jf.ct(this.serializer,c),h=s.getIndexManager(c),p=Uf.ct(c,this.serializer,h,s.referenceDelegate);return new XP(i,p,d,h).recalculateAndSaveOverlaysForDocumentKeys(new jg(n,Ht._e),l).next()})})}}function BI(t){t.createObjectStore("targetDocuments",{keyPath:c5}).createIndex("documentTargetsIndex",d5,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",u5,{unique:!0}),t.createObjectStore("targetGlobal")}const om="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class $_{constructor(e,n,r,i,s,o,a,l,u,c,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=c,this.ai=d,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=h=>Promise.resolve(),!$_.D())throw new P(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Tj(this,i),this.Ii=n+"main",this.serializer=new zP(l),this.Ti=new Pn(this.Ii,this.ai,new Oj(this.serializer)),this.qr=new vj(this.referenceDelegate,this.serializer),this.remoteDocumentCache=JP(this.serializer),this.Kr=new cj,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,c===!1&&qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new P(T.FAILED_PRECONDITION,om);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new Ht(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Qc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(zi(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return el(e).get("owner").next(n=>I.resolve(this.wi(n)))}Si(e){return Qc(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=dt(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?I.resolve(!0):el(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new P(T.FAILED_PRECONDITION,om);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qc(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new jg(e,Ht._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Qc(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return Uf.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new yj(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return jf.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?E5:l===14?ZA:l===13?XA:l===12?w5:l===11?JA:void M()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new jg(a,this.Lr?this.Lr.next():Ht._e),n==="readwrite-primary"?this.fi(o).next(l=>!!l||this.gi(o)).next(l=>{if(!l)throw qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new P(T.FAILED_PRECONDITION,GA);return r(o)}).next(l=>this.yi(o).next(()=>l)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return el(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new P(T.FAILED_PRECONDITION,om)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return el(e).put("owner",n)}static D(){return Pn.D()}pi(e){const n=el(e);return n.get("owner").next(r=>this.wi(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;nO()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return qe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){qe("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function el(t){return dt(t,"owner")}function Qc(t){return dt(t,"clientMetadata")}function B_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new z_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Vj;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(so()<=Z.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",oo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),I.resolve()):(so()<=Z.DEBUG&&R("QueryEngine","Query:",oo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(so()<=Z.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",oo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(n))):I.resolve())}zi(e,n){if(pI(n))return I.resolve(null);let r=Ft(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ph(n,null,"F"),r=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=X(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Ph(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return pI(n)||i.isEqual(W.min())?I.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?I.resolve(null):(so()<=Z.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oo(n)),this.Xi(e,o,n,WA(i,-1)).next(a=>a))})}Yi(e,n){let r=new he(pP(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return so()<=Z.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",oo(n)),this.Gi.getDocumentsMatchingQuery(e,n,ln.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new me(Q),this.ns=new qi(s=>ks(s),oc),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XP(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function tR(t,e,n,r){return new Lj(t,e,n,r)}async function nR(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function Mj(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,h=d.keys();let p=I.resolve();return h.forEach(_=>{p=p.next(()=>c.getEntry(l,_)).next(v=>{const w=u.docVersions.get(_);q(w!==null),v.version.compareTo(w)<0&&(d.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=X();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rR(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Fj(t,e){const n=V(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(v,w,g){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Kt(),u=X();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(iR(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(W.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(d=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function iR(t,e,n){let r=X(),i=X();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Kt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function jj(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ia(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function sa(t,e,n){const r=V(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zi(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Nh(t,e,n){const r=V(t);let i=W.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=V(l),h=d.ns.get(c);return h!==void 0?I.resolve(d.ts.get(h)):d.qr.getTargetData(u,c)}(r,o,Ft(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:X())).next(a=>(aR(r,fP(e),a),{documents:a,ls:s})))}function sR(t,e){const n=V(t),r=V(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function oR(t,e){const n=V(t),r=n.rs.get(e)||W.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,WA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(aR(n,e,i),i))}function aR(t,e,n){let r=t.rs.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function Uj(t,e,n,r){const i=V(t);let s=X(),o=Kt();for(const u of n){const c=e.hs(u.metadata.name);u.document&&(s=s.add(c));const d=e.Ps(u);d.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(c,d)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),l=await ia(i,function(c){return Ft(xa(se.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>iR(u,a,o).next(c=>(a.apply(u),c)).next(c=>i.qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,c.us,c.cs)).next(()=>c.us)))}async function $j(t,e,n=X()){const r=await ia(t,Ft(M_(e.bundledQuery))),i=V(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=He(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(nt.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function zI(t,e){return`firestore_clients_${t}_${e}`}function qI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function am(t,e){return`firestore_targets_${t}_${e}`}class Dh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new P(i.error.code,i.error.message))),o?new Dh(e,n,i.state,s):(qe("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ol{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new P(r.error.code,r.error.message))),s?new Ol(e,r.state,i):(qe("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=C_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=QA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Oh(e,s):(qe("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class q_{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new q_(n.clientId,n.onlineState):(qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Xg{constructor(){this.activeTargetIds=C_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lm{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new me(Q),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=zI(this.persistenceKey,this.Rs),this.ws=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Xg),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.vs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(zI(this.persistenceKey,r));if(i){const s=Oh.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(am(this.persistenceKey,e));if(r){const i=Ol.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(am(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=Ht._e;if(s!=null)try{const a=JSON.parse(s);q(typeof a=="number"),o=a}catch(a){qe("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ht._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new Dh(this.currentUser,e,n,r),s=qI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=qI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=am(this.persistenceKey,e),s=new Ol(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return Oh.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Dh.Ts(new ot(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return Ol.Ts(i,n)}Ms(e){return q_.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=C_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class lR{constructor(){this.eo=new Xg,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc=null;function um(){return Yc===null?Yc=function(){return 268435456+Math.round(2147483648*Math.random())}():Yc++,"0x"+Yc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class Wj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=um(),l=this.So(n,r);R("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(R("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Vn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ba}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=zj[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=um();return new Promise((o,a)=>{const l=new U3;l.setWithCredentials(!0),l.listenOnce(F3.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case im.NO_ERROR:const c=l.getResponseJson();R(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case im.TIMEOUT:R(bt,`RPC '${e}' ${s} timed out`),a(new P(T.DEADLINE_EXCEEDED,"Request time out"));break;case im.HTTP_ERROR:const d=l.getStatus();if(R(bt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const _=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(g)>=0?g:T.UNKNOWN}(p.status);a(new P(_,p.message))}else a(new P(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(T.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{R(bt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(bt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=um(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L3(),a=M3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(bt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,p=!1;const _=new qj({co:w=>{p?R(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(R(bt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),R(bt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},lo:()=>d.close()}),v=(w,g,m)=>{w.listen(g,y=>{try{m(y)}catch(E){setTimeout(()=>{throw E},0)}})};return v(d,Wc.EventType.OPEN,()=>{p||R(bt,`RPC '${e}' stream ${i} transport opened.`)}),v(d,Wc.EventType.CLOSE,()=>{p||(p=!0,R(bt,`RPC '${e}' stream ${i} transport closed`),_.Ro())}),v(d,Wc.EventType.ERROR,w=>{p||(p=!0,Vn(bt,`RPC '${e}' stream ${i} transport errored:`,w),_.Ro(new P(T.UNAVAILABLE,"The operation could not be completed")))}),v(d,Wc.EventType.MESSAGE,w=>{var g;if(!p){const m=w.data[0];q(!!m);const y=m,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){R(bt,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let x=function(Y){const $=Ke[Y];if($!==void 0)return PP($)}(S),C=E.message;x===void 0&&(x=T.INTERNAL,C="Unknown error status: "+S+" with message "+E.message),p=!0,_.Ro(new P(x,C)),d.close()}else R(bt,`RPC '${e}' stream ${i} received:`,m),_.Vo(m)}}),v(a,j3.STAT_EVENT,w=>{w.stat===XE.PROXY?R(bt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===XE.NOPROXY&&R(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){return typeof window<"u"?window:null}function Cd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t){return new Z5(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new W_(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(qe(n.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new P(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hj extends cR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=nj(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?He(o.readTime):W.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Pu(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=xh(l)?{documents:MP(s,l)}:{query:FP(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=NP(s,o.resumeToken);const u=Hg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(W.min())>0){a.readTime=ra(s,o.snapshotVersion.toTimestamp());const u=Hg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=ij(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Pu(this.serializer),n.removeTarget=e,this.e_(n)}}class Gj extends cR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=rj(e.writeResults,e.commitTime),r=He(e.commitTime);return this.listener.I_(r,n)}return q(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Pu(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ru(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(T.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(T.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Qj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(qe(n),this.f_=!1):R("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Wi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=V(l);u.C_.add(4),await Ra(u),u.M_.set("Unknown"),u.C_.delete(4),await fc(u)}(this))})}),this.M_=new Qj(r,i)}}async function fc(t){if(Wi(t))for(const e of t.v_)await e(!0)}async function Ra(t){for(const e of t.v_)await e(!1)}function Bf(t,e){const n=V(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),K_(n)?G_(n):ka(n).Ho()&&H_(n,e))}function Cu(t,e){const n=V(t),r=ka(n);n.D_.delete(e),r.Ho()&&dR(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Wi(n)&&n.M_.set("Unknown"))}function H_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ka(t).u_(e)}function dR(t,e){t.x_.Oe(e),ka(t).c_(e)}function G_(t){t.x_=new Q5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ka(t).start(),t.M_.g_()}function K_(t){return Wi(t)&&!ka(t).jo()&&t.D_.size>0}function Wi(t){return V(t).C_.size===0}function hR(t){t.x_=void 0}async function Jj(t){t.D_.forEach((e,n)=>{H_(t,e)})}async function Xj(t,e){hR(t),K_(t)?(t.M_.w_(e),G_(t)):t.M_.set("Unknown")}async function Zj(t,e,n){if(t.M_.set("Online"),e instanceof kP&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vh(t,r)}else if(e instanceof Rd?t.x_.$e(e):e instanceof CP?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(W.min()))try{const r=await rR(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(nt.EMPTY_BYTE_STRING,c.snapshotVersion)),dR(s,l);const d=new pr(c.target,l,u,c.sequenceNumber);H_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Vh(t,r)}}async function Vh(t,e,n){if(!zi(e))throw e;t.C_.add(1),await Ra(t),t.M_.set("Offline"),n||(n=()=>rR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await fc(t)})}function fR(t,e){return e().catch(n=>Vh(t,n,e))}async function Ca(t){const e=V(t),n=bi(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;eU(e);)try{const i=await jj(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,tU(e,i)}catch(i){await Vh(e,i)}pR(e)&&mR(e)}function eU(t){return Wi(t)&&t.b_.length<10}function tU(t,e){t.b_.push(e);const n=bi(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function pR(t){return Wi(t)&&!bi(t).jo()&&t.b_.length>0}function mR(t){bi(t).start()}async function nU(t){bi(t).E_()}async function rU(t){const e=bi(t);for(const n of t.b_)e.P_(n.mutations)}async function iU(t,e,n){const r=t.b_.shift(),i=D_.from(r,e,n);await fR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ca(t)}async function sU(t,e){e&&bi(t).h_&&await async function(r,i){if(function(o){return AP(o)&&o!==T.ABORTED}(i.code)){const s=r.b_.shift();bi(r).Yo(),await fR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ca(r)}}(t,e),pR(t)&&mR(t)}async function HI(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Wi(n);n.C_.add(3),await Ra(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await fc(n)}async function Zg(t,e){const n=V(t);e?(n.C_.delete(2),await fc(n)):e||(n.C_.add(2),await Ra(n),n.M_.set("Unknown"))}function ka(t){return t.O_||(t.O_=function(n,r,i){const s=V(n);return s.A_(),new Hj(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:Jj.bind(null,t),Io:Xj.bind(null,t),a_:Zj.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),K_(t)?G_(t):t.M_.set("Unknown")):(await t.O_.stop(),hR(t))})),t.O_}function bi(t){return t.N_||(t.N_=function(n,r,i){const s=V(n);return s.A_(),new Gj(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:nU.bind(null,t),Io:sU.bind(null,t),T_:rU.bind(null,t),I_:iU.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ca(t)):(await t.N_.stop(),t.b_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Q_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Na(t,e){if(qe("AsyncQueue",`${e}: ${t}`),zi(t))return new P(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=fl(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new Uo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Uo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(){this.B_=new me(D.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):M():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oa{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oa(e,n,Uo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this.k_=void 0,this.listeners=[]}}class aU{constructor(){this.queries=new qi(e=>hP(e),ac),this.onlineState="Unknown",this.q_=new Set}}async function Y_(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new oU),i)try{s.k_=await n.onListen(r)}catch(o){const a=Na(o,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&X_(n)}async function J_(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lU(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&X_(n)}function uU(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function X_(t){t.q_.forEach(e=>{e.next()})}class Z_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=oa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.serializer=e}hs(e){return tr(this.serializer,e)}Ps(e){return e.metadata.exists?LP(this.serializer,e.document,!1):we.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return He(e)}}class dU{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=gR(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=se.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new KI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||X()).add(s);n.set(o,a)}}return n}async complete(){const e=await Uj(this.localStore,new KI(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await $j(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function gR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.key=e}}class vR{constructor(e){this.key=e}}class _R{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=X(),this.mutatedKeys=X(),this._a=pP(e),this.aa=new Uo(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new GI,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=lc(this.query,d)?d:null,_=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?_!==v&&(r.track({type:3,doc:p}),w=!0):this.ha(h,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,d)=>function(p,_){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return v(p)-v(_)}(c.type,d.type)||this._a(c.doc,d.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new oa(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new GI,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=X(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new vR(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new yR(r))}),n}da(e){this.ia=e.ls,this.oa=X();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return oa.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class hU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fU{constructor(e){this.key=e,this.Ra=!1}}class pU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new qi(a=>hP(a),ac),this.fa=new Map,this.ga=new Set,this.pa=new me(D.comparator),this.ya=new Map,this.wa=new U_,this.Sa={},this.ba=new Map,this.Da=Ls.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function mU(t,e){const n=iw(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await ia(n.localStore,Ft(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ew(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Bf(n.remoteStore,o)}return i}async function ew(t,e,n,r,i){t.va=(d,h,p)=>async function(v,w,g,m){let y=w.view.ca(g);y.Zi&&(y=await Nh(v.localStore,w.query,!1).then(({documents:C})=>w.view.ca(C,y)));const E=m&&m.targetChanges.get(w.targetId),S=m&&m.targetMismatches.get(w.targetId)!=null,x=w.view.applyChanges(y,v.isPrimaryClient,E,S);return ey(v,w.targetId,x.Ta),x.snapshot}(t,d,h,p);const s=await Nh(t.localStore,e,!0),o=new _R(e,s.ls),a=o.ca(s.documents),l=dc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ey(t,n,u.Ta);const c=new hU(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function gU(t,e){const n=V(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!ac(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await sa(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Cu(n.remoteStore,r.targetId),aa(n,r.targetId)}).catch(Bi)):(aa(n,r.targetId),await sa(n.localStore,r.targetId,!0))}async function yU(t,e,n){const r=sw(t);try{const i=await function(o,a){const l=V(o),u=Pe.now(),c=a.reduce((p,_)=>p.add(_.key),X());let d,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=Kt(),v=X();return l.ss.getEntries(p,c).next(w=>{_=w,_.forEach((g,m)=>{m.isValidDocument()||(v=v.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,_)).next(w=>{d=w;const g=[];for(const m of a){const y=H5(m,d.get(m.key).overlayedDocument);y!=null&&g.push(new Dr(m.key,y,rP(y.value.mapValue),xe.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{h=w;const g=w.applyToLocalDocumentSet(d,v);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:h.batchId,changes:gP(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new me(Q)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Or(r,i.changes),await Ca(r.remoteStore)}catch(i){const s=Na(i,"Failed to persist write");n.reject(s)}}async function wR(t,e){const n=V(t);try{const r=await Fj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?q(o.Ra):i.removedDocuments.size>0&&(q(o.Ra),o.Ra=!1))}),await Or(n,r,e)}catch(r){await Bi(r)}}function QI(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=V(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const h of d.listeners)h.Q_(a)&&(u=!0)}),u&&X_(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vU(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new me(D.comparator);o=o.insert(s,we.newNoDocument(s,W.min()));const a=X().add(s),l=new cc(W.min(),new Map,new me(Q),o,a);await wR(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),rw(r)}else await sa(r.localStore,e,!1).then(()=>aa(r,e,n)).catch(Bi)}async function _U(t,e){const n=V(t),r=e.batch.batchId;try{const i=await Mj(n.localStore,e);nw(n,r,null),tw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Or(n,i)}catch(i){await Bi(i)}}async function wU(t,e,n){const r=V(t);try{const i=await function(o,a){const l=V(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(q(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);nw(r,e,n),tw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Or(r,i)}catch(i){await Bi(i)}}async function EU(t,e){const n=V(t);Wi(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=V(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=Na(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function tw(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function nw(t,e,n){const r=V(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function aa(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||ER(t,r)})}function ER(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Cu(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),rw(t))}function ey(t,e,n){for(const r of n)r instanceof yR?(t.wa.addReference(r.key,e),IU(t,r)):r instanceof vR?(R("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||ER(t,r.key)):M()}function IU(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(R("SyncEngine","New document in limbo: "+n),t.ga.add(r),rw(t))}function rw(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new D(se.fromString(e)),r=t.Da.next();t.ya.set(r,new fU(n)),t.pa=t.pa.insert(n,r),Bf(t.remoteStore,new pr(Ft(xa(n.path)),r,"TargetPurposeLimboResolution",Ht._e))}}async function Or(t,e,n){const r=V(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=z_.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=V(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>I.forEach(u,h=>I.forEach(h.ki,p=>c.persistence.referenceDelegate.addReference(d,h.targetId,p)).next(()=>I.forEach(h.qi,p=>c.persistence.referenceDelegate.removeReference(d,h.targetId,p)))))}catch(d){if(!zi(d))throw d;R("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const h=d.targetId;if(!d.fromCache){const p=c.ts.get(h),_=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(_);c.ts=c.ts.insert(h,v)}}}(r.localStore,s))}async function TU(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await nR(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new P(T.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Or(n,r._s)}}function SU(t,e){const n=V(t),r=n.ya.get(e);if(r&&r.Ra)return X().add(r.key);{let i=X();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function bU(t,e){const n=V(t),r=await Nh(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&ey(n,e.targetId,i.Ta),i}async function xU(t,e){const n=V(t);return oR(n.localStore,e).then(r=>Or(n,r))}async function AU(t,e,n,r){const i=V(t),s=await function(a,l){const u=V(a),c=V(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>c.Cn(d,l).next(h=>h?u.localDocuments.getDocuments(d,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ca(i.remoteStore):n==="acknowledged"||n==="rejected"?(nw(i,e,r||null),tw(i,e),function(a,l){V(V(a).mutationQueue).Fn(l)}(i.localStore,e)):M(),await Or(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function PU(t,e){const n=V(t);if(iw(n),sw(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await YI(n,r.toArray());n.Ca=!0,await Zg(n.remoteStore,!0);for(const s of i)Bf(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(aa(n,o),sa(n.localStore,o,!0))),Cu(n.remoteStore,o)}),await i,await YI(n,r),function(o){const a=V(o);a.ya.forEach((l,u)=>{Cu(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new me(D.comparator)}(n),n.Ca=!1,await Zg(n.remoteStore,!1)}}async function YI(t,e,n){const r=V(t),i=[],s=[];for(const o of e){let a;const l=r.fa.get(o);if(l&&l.length!==0){a=await ia(r.localStore,Ft(l[0]));for(const u of l){const c=r.ma.get(u),d=await bU(r,c);d.snapshot&&s.push(d.snapshot)}}else{const u=await sR(r.localStore,o);a=await ia(r.localStore,u),await ew(r,IR(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function IR(t){return dP(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function RU(t){return function(n){return V(V(n).persistence).Bi()}(V(t).localStore)}async function CU(t,e,n,r){const i=V(t);if(i.Ca)return void R("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await oR(i.localStore,fP(s[0])),a=cc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",nt.EMPTY_BYTE_STRING);await Or(i,o,a);break}case"rejected":await sa(i.localStore,e,!0),aa(i,e,r);break;default:M()}}async function kU(t,e,n){const r=iw(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await sR(r.localStore,i),o=await ia(r.localStore,s);await ew(r,IR(s),o.targetId,!1,o.resumeToken),Bf(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await sa(r.localStore,i,!1).then(()=>{Cu(r.remoteStore,i),aa(r,i)}).catch(Bi)}}function iw(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vU.bind(null,e),e.Va.a_=lU.bind(null,e.eventManager),e.Va.Fa=uU.bind(null,e.eventManager),e}function sw(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_U.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wU.bind(null,e),e}function NU(t,e,n){const r=V(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(p,_){const v=V(p),w=He(_.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",g=>v.Kr.getBundleMetadata(g,_.id)).then(g=>!!g&&g.createTime.compareTo(w)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(p){return{taskState:"Success",documentsLoaded:p.totalDocuments,bytesLoaded:p.totalBytes,totalDocuments:p.totalDocuments,totalBytes:p.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(gR(l));const u=new dU(l,s.localStore,o.serializer);let c=await o.Ma();for(;c;){const h=await u.ea(c);h&&a._updateProgress(h),c=await o.Ma()}const d=await u.complete();return await Or(s,d.ra,void 0),await function(p,_){const v=V(p);return v.persistence.runTransaction("Save bundle","readwrite",w=>v.Kr.saveBundleMetadata(w,_))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.na)}catch(l){return Vn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ty{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tR(this.persistence,new eR,e.initialUser,this.serializer)}createPersistence(e){return new ZP($f.jr,this.serializer)}createSharedClientState(e){return new lR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TR extends ty{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await sw(this.xa.syncEngine),await Ca(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return tR(this.persistence,new eR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new wj(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new r5(n,this.persistence);return new n5(e.asyncQueue,r)}createPersistence(e){const n=B_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new $_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,uR(),Cd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new lR}}class DU extends TR{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof lm&&(this.sharedClientState.syncEngine={Ys:AU.bind(null,n),Zs:CU.bind(null,n),Xs:kU.bind(null,n),Bi:RU.bind(null,n),Js:xU.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await PU(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=uR();if(!lm.D(n))throw new P(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=B_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class ow{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>QI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TU.bind(null,this.syncEngine),await Zg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aU}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=function(s){return new Wj(s)}(e.databaseInfo);return function(s,o,a,l){return new Kj(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Yj(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>QI(this.syncEngine,n,0),function(){return WI.D()?new WI:new Bj}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new pU(i,s,o,a,l,u);return c&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=V(n);R("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ra(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):qe("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new lt,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new cU(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e===123)}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new P(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=V(i),a=Pu(o.serializer)+"/documents",l={documents:s.map(h=>Au(o.serializer,h))},u=await o.Co("BatchGetDocuments",a,l,s.length),c=new Map;u.forEach(h=>{const p=tj(o.serializer,h);c.set(p.key.toString(),p)});const d=[];return s.forEach(h=>{const p=c.get(h.toString());q(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new k_(i,this.precondition(i)))}),await async function(r,i){const s=V(r),o=Pu(s.serializer)+"/documents",a={writes:i.map(l=>Ru(s.serializer,l))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=W.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(W.min())?xe.exists(!1):xe.updateTime(n):xe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(W.min()))throw new P(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(n)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new W_(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new VU(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!sc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!AP(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ot.UNAUTHENTICATED,this.clientId=zA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Na(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kd(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ny(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aw(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>HI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>HI(e.remoteStore,s)),t._onlineComponents=e}function SR(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function aw(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await kd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SR(n))throw n;Vn("Error using user provided cache. Falling back to memory cache: "+n),await kd(t,new ty)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await kd(t,new ty);return t._offlineComponents}async function qf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await ny(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await ny(t,new ow))),t._onlineComponents}function bR(t){return aw(t).then(e=>e.persistence)}function lw(t){return aw(t).then(e=>e.localStore)}function xR(t){return qf(t).then(e=>e.remoteStore)}function uw(t){return qf(t).then(e=>e.syncEngine)}function FU(t){return qf(t).then(e=>e.datastore)}async function la(t){const e=await qf(t),n=e.eventManager;return n.onListen=mU.bind(null,e.syncEngine),n.onUnlisten=gU.bind(null,e.syncEngine),n}function jU(t){return t.asyncQueue.enqueue(async()=>{const e=await bR(t),n=await xR(t);return e.setNetworkEnabled(!0),function(i){const s=V(i);return s.C_.delete(0),fc(s)}(n)})}function UU(t){return t.asyncQueue.enqueue(async()=>{const e=await bR(t),n=await xR(t);return e.setNetworkEnabled(!1),async function(i){const s=V(i);s.C_.add(0),await Ra(s),s.M_.set("Offline")}(n)})}function $U(t,e){const n=new lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,c){const d=V(u);return d.persistence.runTransaction("read document","readonly",h=>d.localDocuments.getDocument(h,c))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new P(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Na(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await lw(t),e,n)),n.promise}function AR(t,e,n={}){const r=new lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new zf({next:h=>{o.enqueueAndForget(()=>J_(s,d));const p=h.docs.has(a);!p&&h.fromCache?u.reject(new P(T.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&l&&l.source==="server"?u.reject(new P(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new Z_(xa(a.path),c,{includeMetadataChanges:!0,J_:!0});return Y_(s,d)}(await la(t),t.asyncQueue,e,n,r)),r.promise}function BU(t,e){const n=new lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Nh(i,s,!0),l=new _R(s,a.ls),u=l.ca(a.documents),c=l.applyChanges(u,!1);o.resolve(c.snapshot)}catch(a){const l=Na(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await lw(t),e,n)),n.promise}function PR(t,e,n={}){const r=new lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new zf({next:h=>{o.enqueueAndForget(()=>J_(s,d)),h.fromCache&&l.source==="server"?u.reject(new P(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),d=new Z_(a,c,{includeMetadataChanges:!0,J_:!0});return Y_(s,d)}(await la(t),t.asyncQueue,e,n,r)),r.promise}function zU(t,e){const n=new zf(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){V(i).q_.add(s),s.next()}(await la(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){V(i).q_.delete(s)}(await la(t),n))}}function qU(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?RP().encode(o):o,function(c,d){return new OU(c,d)}(function(c,d){if(c instanceof Uint8Array)return JI(c,d);if(c instanceof ArrayBuffer)return JI(new Uint8Array(c),d);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,hc(e));t.asyncQueue.enqueueAndForget(async()=>{NU(await uw(t),i,r)})}function WU(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=V(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await lw(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t,e,n){if(!n)throw new P(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CR(t,e,n,r){if(e===!0&&r===!0)throw new P(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ZI(t){if(!D.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e1(t){if(D.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wf(t);throw new P(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function kR(t,e){if(e<=0)throw new P(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new P(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new P(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new P(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new P(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new t1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new t1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new W3;switch(r.type){case"firstParty":return new Q3(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new P(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=XI.get(n);r&&(R("ComponentProvider","Removing Datastore"),XI.delete(n),r.terminate())}(this),Promise.resolve()}}function HU(t,e,n,r={}){var i;const s=(t=ae(t,pc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ot.MOCK_USER;else{a=ZD(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ot(u)}t._authCredentials=new H3(new BA(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jt=class NR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new NR(this.firestore,e,this._query)}},ke=class DR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DR(this.firestore,e,this._key)}},fi=class OR extends jt{constructor(e,n,r){super(e,n,xa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new D(e))}withConverter(e){return new OR(this.firestore,e,this._path)}};function VR(t,e,...n){if(t=H(t),cw("collection","path",e),t instanceof pc){const r=se.fromString(e,...n);return e1(r),new fi(t,null,r)}{if(!(t instanceof ke||t instanceof fi))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return e1(r),new fi(t.firestore,null,r)}}function GU(t,e){if(t=ae(t,pc),cw("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new jt(t,null,function(r){return new Nr(se.emptyPath(),r)}(e))}function Lh(t,e,...n){if(t=H(t),arguments.length===1&&(e=zA.newId()),cw("doc","path",e),t instanceof pc){const r=se.fromString(e,...n);return ZI(r),new ke(t,null,new D(r))}{if(!(t instanceof ke||t instanceof fi))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return ZI(r),new ke(t.firestore,t instanceof fi?t.converter:null,new D(r))}}function LR(t,e){return t=H(t),e=H(e),(t instanceof ke||t instanceof fi)&&(e instanceof ke||e instanceof fi)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function MR(t,e){return t=H(t),e=H(e),t instanceof jt&&e instanceof jt&&t.firestore===e.firestore&&ac(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new W_(this,"async_queue_retry"),this.iu=()=>{const n=Cd();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Cd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Cd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new lt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!zi(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Q_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&M()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function ry(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class QU{constructor(){this._progressObserver={},this._taskCompletionResolver=new lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YU=-1;let Ue=class extends pc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new KU}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FR(this),this._firestoreClient.terminate()}};function ht(t){return t._firestoreClient||FR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function FR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new S5(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,RR(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new MU(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function JU(t,e){UR(t=ae(t,Ue));const n=ht(t);if(n._uninitializedComponentsProvider)throw new P(T.FAILED_PRECONDITION,"SDK cache is already specified.");Vn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new ow;return jR(n,i,new TR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function XU(t){UR(t=ae(t,Ue));const e=ht(t);if(e._uninitializedComponentsProvider)throw new P(T.FAILED_PRECONDITION,"SDK cache is already specified.");Vn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new ow;return jR(e,r,new DU(r,n.cacheSizeBytes))}function jR(t,e,n){const r=new lt;return t.asyncQueue.enqueue(async()=>{try{await kd(t,n),await ny(t,e),r.resolve()}catch(i){const s=i;if(!SR(s))throw s;Vn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function ZU(t){if(t._initialized&&!t._terminated)throw new P(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new lt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Pn.D())return Promise.resolve();const i=r+"main";await Pn.delete(i)}(B_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function e6(t){return function(n){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>EU(await uw(n),r)),r.promise}(ht(t=ae(t,Ue)))}function t6(t){return jU(ht(t=ae(t,Ue)))}function n6(t){return UU(ht(t=ae(t,Ue)))}function r6(t,e){const n=ht(t=ae(t,Ue)),r=new QU;return qU(n,t._databaseId,e,r),r}function i6(t,e){return WU(ht(t=ae(t,Ue)),e).then(n=>n?new jt(t,null,n.query):null)}function UR(t){if(t._initialized||t._terminated)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sr(nt.fromBase64String(e))}catch(n){throw new P(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sr(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6=/^__.*__$/;class o6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class $R{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Gf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Mh(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(BR(this.Iu)&&s6.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class a6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}pu(e,n,r,i=!1){return new Gf({Iu:e,methodName:n,gu:r,path:be.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gs(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new a6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kf(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);pw("Data must be an object, but it was:",o,r);const a=WR(r,o);let l,u;if(s.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=iy(e,d,n);if(!o.contains(h))throw new P(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);GR(c,h)||c.push(h)}l=new Gt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new o6(new gt(a),l,u)}class mc extends Hs{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function zR(t,e,n){return new Gf({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dw extends Hs{_toFieldTransform(e){return new uc(e.path,new ta)}isEqual(e){return e instanceof dw}}class l6 extends Hs{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=zR(this,e,!0),r=this.yu.map(s=>Ks(s,n)),i=new Ns(r);return new uc(e.path,i)}isEqual(e){return this===e}}class u6 extends Hs{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=zR(this,e,!0),r=this.yu.map(s=>Ks(s,n)),i=new Ds(r);return new uc(e.path,i)}isEqual(e){return this===e}}class c6 extends Hs{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new na(e.serializer,wP(e.serializer,this.wu));return new uc(e.path,n)}isEqual(e){return this===e}}function hw(t,e,n,r){const i=t.pu(1,e,n);pw("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();Ws(r,(l,u)=>{const c=mw(e,l,n);u=H(u);const d=i.Ru(c);if(u instanceof mc)s.push(c);else{const h=Ks(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new Gt(s);return new $R(o,a,i.fieldTransforms)}function fw(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[iy(e,r,n)],l=[i];if(s.length%2!=0)throw new P(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(iy(e,s[h])),l.push(s[h+1]);const u=[],c=gt.empty();for(let h=a.length-1;h>=0;--h)if(!GR(u,a[h])){const p=a[h];let _=l[h];_=H(_);const v=o.Ru(p);if(_ instanceof mc)u.push(p);else{const w=Ks(_,v);w!=null&&(u.push(p),c.set(p,w))}}const d=new Gt(u);return new $R(c,d,o.fieldTransforms)}function qR(t,e,n,r=!1){return Ks(n,t.pu(r?4:3,e))}function Ks(t,e){if(HR(t=H(t)))return pw("Unsupported field value:",e,t),WR(t,e);if(t instanceof Hs)return function(r,i){if(!BR(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ks(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=H(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Pe.fromDate(r);return{timestampValue:ra(i.serializer,s)}}if(r instanceof Pe){const s=new Pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ra(i.serializer,s)}}if(r instanceof Hf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sr)return{bytesValue:NP(i.serializer,r._byteString)};if(r instanceof ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:L_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Wf(r)}`)}(t,e)}function WR(t,e){const n={};return eP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(r,i)=>{const s=Ks(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function HR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Hf||t instanceof sr||t instanceof ke||t instanceof Hs)}function pw(t,e,n){if(!HR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Wf(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function iy(t,e,n){if((e=H(e))instanceof xi)return e._internalPath;if(typeof e=="string")return mw(t,e);throw Mh("Field path arguments must be of type string or ",t,!1,void 0,n)}const d6=new RegExp("[~\\*/\\[\\]]");function mw(t,e,n){if(e.search(d6)>=0)throw Mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xi(...e.split("."))._internalPath}catch{throw Mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(T.INVALID_ARGUMENT,a+t+l)}function GR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new h6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class h6 extends ku{data(){return super.data()}}function Qf(t,e){return typeof e=="string"?mw(t,e):e instanceof xi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gw{}class gc extends gw{}function Br(t,e,...n){let r=[];e instanceof gw&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof yw).length,a=s.filter(l=>l instanceof Yf).length;if(o>1||o>0&&a>0)throw new P(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yf extends gc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yf(e,n,r)}_apply(e){const n=this._parse(e);return YR(e._query,n),new jt(e.firestore,e.converter,Wg(e._query,n))}_parse(e){const n=Gs(e.firestore);return function(s,o,a,l,u,c,d){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new P(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){r1(d,c);const p=[];for(const _ of d)p.push(n1(l,s,_));h={arrayValue:{values:p}}}else h=n1(l,s,d)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||r1(d,c),h=qR(a,o,d,c==="in"||c==="not-in");return te.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function f6(t,e,n){const r=e,i=Qf("where",t);return Yf._create(i,r,n)}class yw extends gw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ue.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)YR(o,l),o=Wg(o,l)}(e._query,n),new jt(e.firestore,e.converter,Wg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vw extends gc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vw(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new P(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new P(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xu(s,o)}(e._query,this._field,this._direction);return new jt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Nr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function p6(t,e="asc"){const n=e,r=Qf("orderBy",t);return vw._create(r,n)}class Jf extends gc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Jf(e,n,r)}_apply(e){return new jt(e.firestore,e.converter,Ph(e._query,this._limit,this._limitType))}}function m6(t){return kR("limit",t),Jf._create("limit",t,"F")}function g6(t){return kR("limitToLast",t),Jf._create("limitToLast",t,"L")}class Xf extends gc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Xf(e,n,r)}_apply(e){const n=QR(e,this.type,this._docOrFields,this._inclusive);return new jt(e.firestore,e.converter,function(i,s){return new Nr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function y6(...t){return Xf._create("startAt",t,!0)}function v6(...t){return Xf._create("startAfter",t,!1)}class Zf extends gc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Zf(e,n,r)}_apply(e){const n=QR(e,this.type,this._docOrFields,this._inclusive);return new jt(e.firestore,e.converter,function(i,s){return new Nr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function _6(...t){return Zf._create("endBefore",t,!1)}function w6(...t){return Zf._create("endAt",t,!0)}function QR(t,e,n,r){if(n[0]=H(n[0]),n[0]instanceof ku)return function(s,o,a,l,u){if(!l)throw new P(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const c=[];for(const d of jo(s))if(d.field.isKeyField())c.push(Cs(o,l.key));else{const h=l.data.field(d.field);if(Lf(h))throw new P(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const p=d.field.canonicalString();throw new P(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}c.push(h)}return new Si(c,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Gs(t.firestore);return function(o,a,l,u,c,d){const h=o.explicitOrderBy;if(c.length>h.length)throw new P(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let _=0;_<c.length;_++){const v=c[_];if(h[_].field.isKeyField()){if(typeof v!="string")throw new P(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!R_(o)&&v.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const w=o.path.child(se.fromString(v));if(!D.isDocumentKey(w))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const g=new D(w);p.push(Cs(a,g))}else{const w=qR(l,u,v);p.push(w)}}return new Si(p,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function n1(t,e,n){if(typeof(n=H(n))=="string"){if(n==="")throw new P(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!R_(e)&&n.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!D.isDocumentKey(r))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cs(t,new D(r))}if(n instanceof ke)return Cs(t,n._key);throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wf(n)}.`)}function r1(t,e){if(!Array.isArray(t)||t.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _w{convertValue(e,n="none"){switch(Rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ws(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Hf(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=A_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tu(e));default:return null}}convertTimestamp(e){const n=wi(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);q(BP(r));const i=new Ii(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class E6 extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let br=class extends ku{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Vl=class extends br{data(e={}){return super.data(e)}},Ai=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vl(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:I6(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function I6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function JR(t,e){return t instanceof br&&e instanceof br?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ai&&e instanceof Ai&&t._firestore===e._firestore&&MR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(t){t=ae(t,ke);const e=ae(t.firestore,Ue);return AR(ht(e),t._key).then(n=>ww(e,t,n))}class Qs extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function S6(t){t=ae(t,ke);const e=ae(t.firestore,Ue),n=ht(e),r=new Qs(e);return $U(n,t._key).then(i=>new br(e,r,t._key,i,new cs(i!==null&&i.hasLocalMutations,!0),t.converter))}function b6(t){t=ae(t,ke);const e=ae(t.firestore,Ue);return AR(ht(e),t._key,{source:"server"}).then(n=>ww(e,t,n))}function x6(t){t=ae(t,jt);const e=ae(t.firestore,Ue),n=ht(e),r=new Qs(e);return KR(t._query),PR(n,t._query).then(i=>new Ai(e,r,t,i))}function A6(t){t=ae(t,jt);const e=ae(t.firestore,Ue),n=ht(e),r=new Qs(e);return BU(n,t._query).then(i=>new Ai(e,r,t,i))}function P6(t){t=ae(t,jt);const e=ae(t.firestore,Ue),n=ht(e),r=new Qs(e);return PR(n,t._query,{source:"server"}).then(i=>new Ai(e,r,t,i))}function i1(t,e,n){t=ae(t,ke);const r=ae(t.firestore,Ue),i=ep(t.converter,e,n);return yc(r,[Kf(Gs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xe.none())])}function s1(t,e,n,...r){t=ae(t,ke);const i=ae(t.firestore,Ue),s=Gs(i);let o;return o=typeof(e=H(e))=="string"||e instanceof xi?fw(s,"updateDoc",t._key,e,n,r):hw(s,"updateDoc",t._key,e),yc(i,[o.toMutation(t._key,xe.exists(!0))])}function R6(t){return yc(ae(t.firestore,Ue),[new Pa(t._key,xe.none())])}function C6(t,e){const n=ae(t.firestore,Ue),r=Lh(t),i=ep(t.converter,e);return yc(n,[Kf(Gs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function XR(t,...e){var n,r,i;t=H(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ry(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ry(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof ke)u=ae(t.firestore,Ue),c=xa(t._key.path),l={next:d=>{e[o]&&e[o](ww(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=ae(t,jt);u=ae(d.firestore,Ue),c=d._query;const h=new Qs(u);l={next:p=>{e[o]&&e[o](new Ai(u,h,d,p))},error:e[o+1],complete:e[o+2]},KR(t._query)}return function(h,p,_,v){const w=new zf(v),g=new Z_(p,w,_);return h.asyncQueue.enqueueAndForget(async()=>Y_(await la(h),g)),()=>{w.Na(),h.asyncQueue.enqueueAndForget(async()=>J_(await la(h),g))}}(ht(u),c,a,l)}function k6(t,e){return zU(ht(t=ae(t,Ue)),ry(e)?e:{next:e})}function yc(t,e){return function(r,i){const s=new lt;return r.asyncQueue.enqueueAndForget(async()=>yU(await uw(r),i,s)),s.promise}(ht(t),e)}function ww(t,e,n){const r=n.docs.get(e._key),i=new Qs(t);return new br(t,i,e._key,r,new cs(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N6={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D6=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Gs(e)}set(e,n,r){this._verifyNotCommitted();const i=Yr(e,this._firestore),s=ep(i.converter,n,r),o=Kf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,xe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Yr(e,this._firestore);let o;return o=typeof(n=H(n))=="string"||n instanceof xi?fw(this._dataReader,"WriteBatch.update",s._key,n,r,i):hw(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Yr(e,this._firestore);return this._mutations=this._mutations.concat(new Pa(n._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Yr(t,e){if((t=H(t)).firestore!==e)throw new P(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O6=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Gs(n)}get(n){const r=Yr(n,this._firestore),i=new E6(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return M();const o=s[0];if(o.isFoundDocument())return new ku(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new ku(this._firestore,i,r._key,null,r.converter);throw M()})}set(n,r,i){const s=Yr(n,this._firestore),o=ep(s.converter,r,i),a=Kf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Yr(n,this._firestore);let a;return a=typeof(r=H(r))=="string"||r instanceof xi?fw(this._dataReader,"Transaction.update",o._key,r,i,s):hw(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Yr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Yr(e,this._firestore),r=new Qs(this._firestore);return super.get(e).then(i=>new br(this._firestore,r,n._key,i._document,new cs(!1,!1),n.converter))}};function V6(t,e,n){t=ae(t,Ue);const r=Object.assign(Object.assign({},N6),n);return function(s){if(s.maxAttempts<1)throw new P(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new lt;return s.asyncQueue.enqueueAndForget(async()=>{const u=await FU(s);new LU(s.asyncQueue,u,a,o,l).run()}),l.promise}(ht(t),i=>e(new O6(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L6(){return new mc("deleteField")}function M6(){return new dw("serverTimestamp")}function F6(...t){return new l6("arrayUnion",t)}function j6(...t){return new u6("arrayRemove",t)}function U6(t){return new c6("increment",t)}(function(e,n=!0){(function(i){ba=i})(Fi),vi(new nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ue(new G3(r.getProvider("auth-internal")),new J3(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new P(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ii(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),er(ZE,"4.4.0",e),er(ZE,"4.4.0","esm2017")})();const $6="@firebase/firestore-compat",B6="0.3.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new P("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(){if(typeof Uint8Array>"u")throw new P("unimplemented","Uint8Arrays are not available in this environment.")}function a1(){if(!I5())throw new P("unimplemented","Blobs are unavailable in Firestore in this environment.")}let ZR=class sy{constructor(e){this._delegate=e}static fromBase64String(e){return a1(),new sy(sr.fromBase64String(e))}static fromUint8Array(e){return o1(),new sy(sr.fromUint8Array(e))}toBase64(){return a1(),this._delegate.toBase64()}toUint8Array(){return o1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){return z6(t,["next","error","complete"])}function z6(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q6{enableIndexedDbPersistence(e,n){return JU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return XU(e._delegate)}clearIndexedDbPersistence(e){return ZU(e._delegate)}}class eC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ii||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Vn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){HU(this._delegate,e,n,r)}enableNetwork(){return t6(this._delegate)}disableNetwork(){return n6(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,CR("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return e6(this._delegate)}onSnapshotsInSync(e){return k6(this._delegate,e)}get app(){if(!this._appCompat)throw new P("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ua(this,VR(this._delegate,e))}catch(n){throw Dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new yn(this,Lh(this._delegate,e))}catch(n){throw Dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nt(this,GU(this._delegate,e))}catch(n){throw Dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return V6(this._delegate,n=>e(new tC(this,n)))}batch(){return ht(this._delegate),new nC(new D6(this._delegate,e=>yc(this._delegate,e)))}loadBundle(e){return r6(this._delegate,e)}namedQuery(e){return i6(this._delegate,e).then(n=>n?new Nt(this,n):null)}}class tp extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new ZR(new sr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return yn.forKey(n,this.firestore,null)}}function W6(t){z3(t)}class tC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new tp(e)}get(e){const n=ds(e);return this._delegate.get(n).then(r=>new Nu(this._firestore,new br(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ds(e);return r?(Ew("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ds(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ds(e);return this._delegate.delete(n),this}}class nC{constructor(e){this._delegate=e}set(e,n,r){const i=ds(e);return r?(Ew("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ds(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ds(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ms{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Vl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Du(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ms.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ms(e,new tp(e),n),i.set(n,s)),s}}Ms.INSTANCES=new WeakMap;class yn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new tp(e)}static forPath(e,n,r){if(e.length%2!==0)throw new P("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new yn(n,new ke(n._delegate,r,new D(e)))}static forKey(e,n,r){return new yn(n,new ke(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ua(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ua(this.firestore,VR(this._delegate,e))}catch(n){throw Dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=H(e),e instanceof ke?LR(this._delegate,e):!1}set(e,n){n=Ew("DocumentReference.set",n);try{return n?i1(this._delegate,e,n):i1(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?s1(this._delegate,e):s1(this._delegate,e,n,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return R6(this._delegate)}onSnapshot(...e){const n=rC(e),r=iC(e,i=>new Nu(this.firestore,new br(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return XR(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=S6(this._delegate):(e==null?void 0:e.source)==="server"?n=b6(this._delegate):n=T6(this._delegate),n.then(r=>new Nu(this.firestore,new br(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new yn(this.firestore,e?this._delegate.withConverter(Ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(t,e,n){return t.message=t.message.replace(e,n),t}function rC(t){for(const e of t)if(typeof e=="object"&&!oy(e))return e;return{}}function iC(t,e){var n,r;let i;return oy(t[0])?i=t[0]:oy(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Nu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new yn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return JR(this._delegate,e._delegate)}}class Du extends Nu{data(e){const n=this._delegate.data(e);return this._delegate._converter||q3(n!==void 0),n}}class Nt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new tp(e)}where(e,n,r){try{return new Nt(this.firestore,Br(this._delegate,f6(e,n,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Nt(this.firestore,Br(this._delegate,p6(e,n)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nt(this.firestore,Br(this._delegate,m6(e)))}catch(n){throw Dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Nt(this.firestore,Br(this._delegate,g6(e)))}catch(n){throw Dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nt(this.firestore,Br(this._delegate,y6(...e)))}catch(n){throw Dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nt(this.firestore,Br(this._delegate,v6(...e)))}catch(n){throw Dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nt(this.firestore,Br(this._delegate,_6(...e)))}catch(n){throw Dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nt(this.firestore,Br(this._delegate,w6(...e)))}catch(n){throw Dt(n,"endAt()","Query.endAt()")}}isEqual(e){return MR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=A6(this._delegate):(e==null?void 0:e.source)==="server"?n=P6(this._delegate):n=x6(this._delegate),n.then(r=>new ay(this.firestore,new Ai(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=rC(e),r=iC(e,i=>new ay(this.firestore,new Ai(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return XR(this._delegate,n,r)}withConverter(e){return new Nt(this.firestore,e?this._delegate.withConverter(Ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class H6{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Du(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ay{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Nt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Du(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new H6(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Du(this._firestore,r))})}isEqual(e){return JR(this._delegate,e._delegate)}}class ua extends Nt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new yn(this.firestore,e):null}doc(e){try{return e===void 0?new yn(this.firestore,Lh(this._delegate)):new yn(this.firestore,Lh(this._delegate,e))}catch(n){throw Dt(n,"doc()","CollectionReference.doc()")}}add(e){return C6(this._delegate,e).then(n=>new yn(this.firestore,n))}isEqual(e){return LR(this._delegate,e._delegate)}withConverter(e){return new ua(this.firestore,e?this._delegate.withConverter(Ms.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ds(t){return ae(t,ke)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(...e){this._delegate=new xi(...e)}static documentId(){return new Iw(be.keyField().canonicalString())}isEqual(e){return e=H(e),e instanceof xi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._delegate=e}static serverTimestamp(){const e=M6();return e._methodName="FieldValue.serverTimestamp",new rs(e)}static delete(){const e=L6();return e._methodName="FieldValue.delete",new rs(e)}static arrayUnion(...e){const n=F6(...e);return n._methodName="FieldValue.arrayUnion",new rs(n)}static arrayRemove(...e){const n=j6(...e);return n._methodName="FieldValue.arrayRemove",new rs(n)}static increment(e){const n=U6(e);return n._methodName="FieldValue.increment",new rs(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G6={Firestore:eC,GeoPoint:Hf,Timestamp:Pe,Blob:ZR,Transaction:tC,WriteBatch:nC,DocumentReference:yn,DocumentSnapshot:Nu,Query:Nt,QueryDocumentSnapshot:Du,QuerySnapshot:ay,CollectionReference:ua,FieldPath:Iw,FieldValue:rs,setLogLevel:W6,CACHE_SIZE_UNLIMITED:YU};function K6(t,e){t.INTERNAL.registerComponent(new nr("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},G6)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q6(t){K6(t,(e,n)=>new eC(e,n,new q6)),t.registerVersion($6,B6)}Q6(_n);const sC=A.createContext(void 0);function Xt(){const t=A.useContext(sC);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}function Y6({children:t}){const[e,n]=A.useState(null),[r,i]=A.useState(!1),[s,o]=A.useState(!1),[a,l]=A.useState(null),[u,c]=A.useState(null),[d,h]=A.useState(!1),p=Li(),_=async()=>{try{const $=await fetch("http://worldtimeapi.org/api/ip");if(!$.ok)throw new Error(`HTTP error! status: ${$.status}`);return(await $.json()).unixtime}catch($){return console.error("Error fetching the Unix timestamp:",$),null}},v=()=>{e&&e.email&&_n.firestore().collection("Users").doc(e.email).onSnapshot(ge=>{if(ge.exists){const It=ge.data();It&&(o(It.subscribed??!1),l(It.subscriptionId??null),c(It))}else o(!1),l(null)},ge=>{console.error("Error listening to the document: ",ge)})},w=async()=>{u&&u.cancelAt&&e&&e.email&&u.cancelAt-1e5<=await _()&&_n.firestore().collection("Users").doc(e.email).update({subscribed:!1,cancelAt:null})},g=($,ge)=>jr.createUserWithEmailAndPassword($,ge),m=$=>_n.firestore().collection("Users").doc($).set({subscribed:!1,subscriptionId:"none",subscriptionItemId:"none",subscriptionType:"none"}),y=()=>{if(jr&&jr.currentUser)return jr.currentUser.sendEmailVerification()},E=($,ge)=>jr.signInWithEmailAndPassword($,ge),S=()=>(o(!1),jr.signOut()),x=$=>jr.sendPasswordResetEmail($),C=$=>{if(e)return e.verifyBeforeUpdateEmail($)},O=$=>{if(e)return e.updatePassword($)};A.useEffect(()=>jr.onAuthStateChanged(ge=>{n(ge),i(!1)}),[]),A.useEffect(()=>{_()},[e]),A.useEffect(()=>{console.log(`getDataEffect: ${d}`),v(),u&&w()},[p.pathname,e,d]);const Y={currentUser:e,loading:r,subscribed:s,subscriptionId:a,signup:g,createUserDoc:m,verify:y,login:E,logout:S,resetPassword:x,updatePassword:O,updateEmail:C,getUserData:v,data:u,getDataEffect:d,setGetDataEffect:h};return f.jsx(sC.Provider,{value:Y,children:!r&&t})}function J6(){const{subscribed:t}=Xt();return f.jsx("div",{children:f.jsxs("div",{className:"text-center items-center flex-col-reverse flex xl:ml-64 xl:flex-row mt-[5%] sm:m-5 ",children:[f.jsxs("div",{className:" flex items-center flex-col m-4 ",children:[f.jsx("h1",{className:"text-3xl sm:text-4xl text-center",children:"¡Empieza a hablar el ingles con confianza! "}),f.jsxs("div",{className:"hidden sm:block sm:flex justify-between w-[80%] m-5 text-3xl text-blue-200",children:[f.jsx("h1",{children:"LEER"}),f.jsx("h1",{children:"HABLAR"}),f.jsx("h1",{children:"ESCRIBIR"})]}),f.jsx(fe,{to:t?"/dashboard":"/pricing",className:" rounded-lg bg-blue-200 hover:bg-blue-300 text-3xl p-5 m-10",children:"EMPIEZA YA!"})]}),f.jsx("img",{className:" w-[60%] md:w-[40%] xl:w-[35%]",src:BD})]})})}function ly(t){const{data:e}=Xt(),n=[{plan:1,name:"Base",price:"600 MXN",classes:"Incluye 2 clases grupales por semana.",duration:"1 hora"},{plan:2,name:"Estudiante+",price:"900 MXN",classes:" 2 Clases grupales por semana",duration:"1 hora",bonus:"1 Clase privada al mes"},{plan:3,name:"Estudiante Privado",price:"1200 MXN",classes:"1 clase privada por semana",duration:"1 hora",bonus:"Un plan de aprendizaje personalizado"}];return f.jsx("div",{className:"flex flex-col items-center lg:flex-row justify-evenly",children:n.map((r,i)=>f.jsxs("div",{className:`flex flex-col justify-between items-center h-[400px] lg:h-[500px] m-4 w-[300px] text-center rounded-lg p-8
                         bg-white shadow-lg`,children:[f.jsx("div",{className:"h-20 border-b border-gray-300 w-full",children:f.jsx("h2",{className:" text-2xl ",children:r.name})}),f.jsx("h1",{className:"text-5xl",children:r.price}),f.jsxs("div",{className:"text-left",children:[f.jsx("p",{className:"mb-4",children:r.classes}),r.bonus&&f.jsx("p",{className:"border-t pt-3 border-gray-300",children:`Bono: ${r.bonus}`})]}),t.pricingPage&&f.jsx(fe,{className:"rounded bg-blue-200 hover:bg-blue-300 text-2xl p-3 flex justify-center items-center",to:"/payment",state:{data:n[i]},children:f.jsx("button",{children:"Seleccionar Plan"})}),t.manageSubscriptionPage&&f.jsx("div",{className:e&&r.name==e.subscriptionType?"rounded bg-gray-300 text-black/50 text-2xl p-3 flex justify-center items-center":"rounded bg-blue-200 hover:bg-blue-300 text-2xl p-3 flex justify-center items-center",children:f.jsx("button",{disabled:e?r.name==e.subscriptionType:!1,onClick:()=>t.handleChangeSubscription(r.plan),children:e&&r.name==e.subscriptionType?"Plan Actual":"Cambiar Plan"})})]}))})}function X6(){return f.jsxs("div",{children:[f.jsx("h1",{className:"text-lg lg:text-3xl text-center sm:m-2",children:"Precios flexibles para cualquier meta de aprendizaje!"}),f.jsx(ly,{pricingPage:!0})]})}const Z6="https://brighamdent.github.io/english-site/assets/portrait-QhbJbnYa.jpg";function e$(){const t="lg:m-3 text-lg text-center font-bold mt-6";return f.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-around lg:items-start",children:[f.jsx("h1",{className:"text-4xl  lg:hidden",children:"Quiénes Somos"}),f.jsx("div",{className:"bg-white rounded-lg shadow p-4 m-2",children:f.jsx("img",{className:"w-72 lg:w-[450px] ",src:Z6})}),f.jsxs("div",{className:" lg:text-start flex flex-col p-6 lg:p-0 text-center justify-around lg:pr-8 lg:pl-8 lg:w-[60%]",children:[f.jsx("h1",{className:"text-4xl  hidden lg:block text-center",children:"Quiénes Somos"}),f.jsx("h1",{className:t,children:"¡Bienvenidos a English Direct!"}),f.jsx("p",{children:"¡Hola a todos! Soy John, el fundador de English Direct, un apasionado profesor de inglés con más de cuatro años de experiencia enseñando. Soy originario de Arizona, Estados Unidos, y estoy emocionado de compartir mi amor por el inglés contigo a través de este espacio educativo."}),f.jsx("h1",{className:t,children:"¿Quién Soy?"}),f.jsx("p",{children:"Mi nombre es John, y mi viaje con los idiomas no ha sido solo como profesor, sino también como estudiante. Decidí aventurarme en el aprendizaje del español, lo que me ha brindado una perspectiva única sobre los desafíos y la emoción de dominar un nuevo idioma."}),f.jsx("h1",{className:t,children:"English Direct - Tu Destino para Aprender Inglés"}),f.jsx("p",{children:"Bienvenidos a English Direct, tu destino en línea para mejorar tus habilidades en inglés. He desarrollado un enfoque único y personalizado que se adapta a las necesidades individuales de cada estudiante. Mis métodos de enseñanza buscan hacer del aprendizaje del inglés una experiencia divertida, desafiante y gratificante."}),f.jsx("h1",{className:t,children:"Nuestra Misión"}),f.jsx("p",{className:"mb-3",children:"En English Direct, nuestra misión es brindarte las herramientas necesarias para que alcances tus metas lingüísticas. Creemos en un enfoque práctico y amigable para el aprendizaje del inglés, inspirado por mi propia travesía en el aprendizaje del español."}),f.jsx("p",{className:"mb-3",children:"Únete a nosotros en este emocionante viaje hacia la fluidez en inglés. ¡Estoy ansioso por ser parte de tu éxito!"}),f.jsx("p",{children:"¡Gracias por elegir English Direct!"})]})]})}function l1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?l1(Object(n),!0).forEach(function(r){rt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fh(t){"@babel/helpers - typeof";return Fh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fh(t)}function t$(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n$(t,e,n){return e&&u1(t.prototype,e),n&&u1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function rt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tw(t,e){return i$(t)||o$(t,e)||oC(t,e)||l$()}function vc(t){return r$(t)||s$(t)||oC(t)||a$()}function r$(t){if(Array.isArray(t))return uy(t)}function i$(t){if(Array.isArray(t))return t}function s$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function o$(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function oC(t,e){if(t){if(typeof t=="string")return uy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uy(t,e)}}function uy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function l$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c1=function(){},Sw={},aC={},lC=null,uC={mark:c1,measure:c1};try{typeof window<"u"&&(Sw=window),typeof document<"u"&&(aC=document),typeof MutationObserver<"u"&&(lC=MutationObserver),typeof performance<"u"&&(uC=performance)}catch{}var u$=Sw.navigator||{},d1=u$.userAgent,h1=d1===void 0?"":d1,Pi=Sw,Ie=aC,f1=lC,Jc=uC;Pi.document;var Vr=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",cC=~h1.indexOf("MSIE")||~h1.indexOf("Trident/"),Xc,Zc,ed,td,nd,xr="___FONT_AWESOME___",cy=16,dC="fa",hC="svg-inline--fa",Fs="data-fa-i2svg",dy="data-fa-pseudo-element",c$="data-fa-pseudo-element-pending",bw="data-prefix",xw="data-icon",p1="fontawesome-i2svg",d$="async",h$=["HTML","HEAD","STYLE","SCRIPT"],fC=function(){try{return!0}catch{return!1}}(),ve="classic",Me="sharp",Aw=[ve,Me];function _c(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var Ou=_c((Xc={},rt(Xc,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(Xc,Me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Xc)),Vu=_c((Zc={},rt(Zc,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(Zc,Me,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Zc)),Lu=_c((ed={},rt(ed,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(ed,Me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ed)),f$=_c((td={},rt(td,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(td,Me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),td)),p$=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,pC="fa-layers-text",m$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,g$=_c((nd={},rt(nd,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(nd,Me,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),nd)),mC=[1,2,3,4,5,6,7,8,9,10],y$=mC.concat([11,12,13,14,15,16,17,18,19,20]),v$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mu=new Set;Object.keys(Vu[ve]).map(Mu.add.bind(Mu));Object.keys(Vu[Me]).map(Mu.add.bind(Mu));var _$=[].concat(Aw,vc(Mu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hs.GROUP,hs.SWAP_OPACITY,hs.PRIMARY,hs.SECONDARY]).concat(mC.map(function(t){return"".concat(t,"x")})).concat(y$.map(function(t){return"w-".concat(t)})),Ll=Pi.FontAwesomeConfig||{};function w$(t){var e=Ie.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function E$(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ie&&typeof Ie.querySelector=="function"){var I$=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];I$.forEach(function(t){var e=Tw(t,2),n=e[0],r=e[1],i=E$(w$(n));i!=null&&(Ll[r]=i)})}var gC={styleDefault:"solid",familyDefault:"classic",cssPrefix:dC,replacementClass:hC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ll.familyPrefix&&(Ll.cssPrefix=Ll.familyPrefix);var ca=F(F({},gC),Ll);ca.autoReplaceSvg||(ca.observeMutations=!1);var z={};Object.keys(gC).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){ca[t]=n,Ml.forEach(function(r){return r(z)})},get:function(){return ca[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){ca.cssPrefix=e,Ml.forEach(function(n){return n(z)})},get:function(){return ca.cssPrefix}});Pi.FontAwesomeConfig=z;var Ml=[];function T$(t){return Ml.push(t),function(){Ml.splice(Ml.indexOf(t),1)}}var zr=cy,Yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function S$(t){if(!(!t||!Vr)){var e=Ie.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ie.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ie.head.insertBefore(e,r),t}}var b$="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fu(){for(var t=12,e="";t-- >0;)e+=b$[Math.random()*62|0];return e}function Da(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Pw(t){return t.classList?Da(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function x$(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(yC(t[n]),'" ')},"").trim()}function np(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Rw(t){return t.size!==Yn.size||t.x!==Yn.x||t.y!==Yn.y||t.rotate!==Yn.rotate||t.flipX||t.flipY}function A$(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function P$(t){var e=t.transform,n=t.width,r=n===void 0?cy:n,i=t.height,s=i===void 0?cy:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&cC?l+="translate(".concat(e.x/zr-r/2,"em, ").concat(e.y/zr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/zr,"em), calc(-50% + ").concat(e.y/zr,"em)) "):l+="translate(".concat(e.x/zr,"em, ").concat(e.y/zr,"em) "),l+="scale(".concat(e.size/zr*(e.flipX?-1:1),", ").concat(e.size/zr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var R$=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vC(){var t=dC,e=hC,n=z.cssPrefix,r=z.replacementClass,i=R$;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var m1=!1;function cm(){z.autoAddCss&&!m1&&(S$(vC()),m1=!0)}var C$={mixout:function(){return{dom:{css:vC,insertCss:cm}}},hooks:function(){return{beforeDOMElementCreation:function(){cm()},beforeI2svg:function(){cm()}}}},Ar=Pi||{};Ar[xr]||(Ar[xr]={});Ar[xr].styles||(Ar[xr].styles={});Ar[xr].hooks||(Ar[xr].hooks={});Ar[xr].shims||(Ar[xr].shims=[]);var Rn=Ar[xr],_C=[],k$=function t(){Ie.removeEventListener("DOMContentLoaded",t),jh=1,_C.map(function(e){return e()})},jh=!1;Vr&&(jh=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),jh||Ie.addEventListener("DOMContentLoaded",k$));function N$(t){Vr&&(jh?setTimeout(t,0):_C.push(t))}function wc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?yC(t):"<".concat(e," ").concat(x$(r),">").concat(s.map(wc).join(""),"</").concat(e,">")}function g1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var D$=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},dm=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?D$(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function O$(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function hy(t){var e=O$(t);return e.length===1?e[0].toString(16):null}function V$(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function y1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function fy(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=y1(e);typeof Rn.hooks.addPack=="function"&&!i?Rn.hooks.addPack(t,y1(e)):Rn.styles[t]=F(F({},Rn.styles[t]||{}),s),t==="fas"&&fy("fa",e)}var rd,id,sd,bo=Rn.styles,L$=Rn.shims,M$=(rd={},rt(rd,ve,Object.values(Lu[ve])),rt(rd,Me,Object.values(Lu[Me])),rd),Cw=null,wC={},EC={},IC={},TC={},SC={},F$=(id={},rt(id,ve,Object.keys(Ou[ve])),rt(id,Me,Object.keys(Ou[Me])),id);function j$(t){return~_$.indexOf(t)}function U$(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!j$(i)?i:null}var bC=function(){var e=function(s){return dm(bo,function(o,a,l){return o[l]=dm(a,s,{}),o},{})};wC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),EC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),SC=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in bo||z.autoFetchSvg,r=dm(L$,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});IC=r.names,TC=r.unicodes,Cw=rp(z.styleDefault,{family:z.familyDefault})};T$(function(t){Cw=rp(t.styleDefault,{family:z.familyDefault})});bC();function kw(t,e){return(wC[t]||{})[e]}function $$(t,e){return(EC[t]||{})[e]}function fs(t,e){return(SC[t]||{})[e]}function xC(t){return IC[t]||{prefix:null,iconName:null}}function B$(t){var e=TC[t],n=kw("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ri(){return Cw}var Nw=function(){return{prefix:null,iconName:null,rest:[]}};function rp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=Ou[r][t],s=Vu[r][t]||Vu[r][i],o=t in Rn.styles?t:null;return s||o||null}var v1=(sd={},rt(sd,ve,Object.keys(Lu[ve])),rt(sd,Me,Object.keys(Lu[Me])),sd);function ip(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},rt(e,ve,"".concat(z.cssPrefix,"-").concat(ve)),rt(e,Me,"".concat(z.cssPrefix,"-").concat(Me)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(u){return v1[ve].includes(u)}))&&(a=ve),(t.includes(s[Me])||t.some(function(u){return v1[Me].includes(u)}))&&(a=Me);var l=t.reduce(function(u,c){var d=U$(z.cssPrefix,c);if(bo[c]?(c=M$[a].includes(c)?f$[a][c]:c,o=c,u.prefix=c):F$[a].indexOf(c)>-1?(o=c,u.prefix=rp(c,{family:a})):d?u.iconName=d:c!==z.replacementClass&&c!==s[ve]&&c!==s[Me]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?xC(u.iconName):{},p=fs(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!bo.far&&bo.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Nw());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Me&&(bo.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=fs(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ri()||"fas"),l}var z$=function(){function t(){t$(this,t),this.definitions={}}return n$(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=F(F({},n.definitions[a]||{}),o[a]),fy(a,o[a]);var l=Lu[ve][a];l&&fy(l,o[a]),bC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),_1=[],xo={},$o={},q$=Object.keys($o);function W$(t,e){var n=e.mixoutsTo;return _1=t,xo={},Object.keys($o).forEach(function(r){q$.indexOf(r)===-1&&delete $o[r]}),_1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Fh(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){xo[o]||(xo[o]=[]),xo[o].push(s[o])})}r.provides&&r.provides($o)}),n}function py(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=xo[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function js(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=xo[t]||[];i.forEach(function(s){s.apply(null,n)})}function Pr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $o[t]?$o[t].apply(null,e):void 0}function my(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ri();if(e)return e=fs(n,e)||e,g1(AC.definitions,n,e)||g1(Rn.styles,n,e)}var AC=new z$,H$=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,js("noAuto")},G$={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vr?(js("beforeI2svg",e),Pr("pseudoElements2svg",e),Pr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,N$(function(){Q$({autoReplaceSvgRoot:n}),js("watch",e)})}},K$={icon:function(e){if(e===null)return null;if(Fh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:fs(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=rp(e[0]);return{prefix:r,iconName:fs(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(p$))){var i=ip(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ri(),iconName:fs(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ri();return{prefix:s,iconName:fs(s,e)||e}}}},dn={noAuto:H$,config:z,dom:G$,parse:K$,library:AC,findIconDefinition:my,toHtml:wc},Q$=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ie:n;(Object.keys(Rn.styles).length>0||z.autoFetchSvg)&&Vr&&z.autoReplaceSvg&&dn.dom.i2svg({node:r})};function sp(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return wc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Vr){var r=Ie.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Y$(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Rw(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=np(F(F({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function J$(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:o}),children:r}]}]}function Dw(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,p=h===void 0?!1:h,_=r.found?r:n,v=_.width,w=_.height,g=i==="fak",m=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),y={children:[],attributes:F(F({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};p&&(y.attributes[Fs]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Fu())},children:[l]}),delete y.attributes.title);var S=F(F({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:F(F({},E),d.styles)}),x=r.found&&n.found?Pr("generateAbstractMask",S)||{children:[],attributes:{}}:Pr("generateAbstractIcon",S)||{children:[],attributes:{}},C=x.children,O=x.attributes;return S.children=C,S.attributes=O,a?J$(S):Y$(S)}function w1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=F(F(F({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Fs]="");var c=F({},o.styles);Rw(i)&&(c.transform=P$({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=np(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function X$(t){var e=t.content,n=t.title,r=t.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=np(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hm=Rn.styles;function gy(t){var e=t[0],n=t[1],r=t.slice(4),i=Tw(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(hs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(hs.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(hs.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var Z$={found:!1,width:512,height:512};function e9(t,e){!fC&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function yy(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Ri()),new Promise(function(r,i){if(Pr("missingIconAbstract"),n==="fa"){var s=xC(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&hm[e]&&hm[e][t]){var o=hm[e][t];return r(gy(o))}e9(t,e),r(F(F({},Z$),{},{icon:z.showMissingIcons&&t?Pr("missingIconAbstract")||{}:{}}))})}var E1=function(){},vy=z.measurePerformance&&Jc&&Jc.mark&&Jc.measure?Jc:{mark:E1,measure:E1},gl='FA "6.5.1"',t9=function(e){return vy.mark("".concat(gl," ").concat(e," begins")),function(){return PC(e)}},PC=function(e){vy.mark("".concat(gl," ").concat(e," ends")),vy.measure("".concat(gl," ").concat(e),"".concat(gl," ").concat(e," begins"),"".concat(gl," ").concat(e," ends"))},Ow={begin:t9,end:PC},Nd=function(){};function I1(t){var e=t.getAttribute?t.getAttribute(Fs):null;return typeof e=="string"}function n9(t){var e=t.getAttribute?t.getAttribute(bw):null,n=t.getAttribute?t.getAttribute(xw):null;return e&&n}function r9(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function i9(){if(z.autoReplaceSvg===!0)return Dd.replace;var t=Dd[z.autoReplaceSvg];return t||Dd.replace}function s9(t){return Ie.createElementNS("http://www.w3.org/2000/svg",t)}function o9(t){return Ie.createElement(t)}function RC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?s9:o9:n;if(typeof t=="string")return Ie.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(RC(o,{ceFn:r}))}),i}function a9(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Dd={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(RC(i),n)}),n.getAttribute(Fs)===null&&z.keepOriginalSource){var r=Ie.createComment(a9(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Pw(n).indexOf(z.replacementClass))return Dd.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return wc(a)}).join(`
`);n.setAttribute(Fs,""),n.innerHTML=o}};function T1(t){t()}function CC(t,e){var n=typeof e=="function"?e:Nd;if(t.length===0)n();else{var r=T1;z.mutateApproach===d$&&(r=Pi.requestAnimationFrame||T1),r(function(){var i=i9(),s=Ow.begin("mutate");t.map(i),s(),n()})}}var Vw=!1;function kC(){Vw=!0}function _y(){Vw=!1}var Uh=null;function S1(t){if(f1&&z.observeMutations){var e=t.treeCallback,n=e===void 0?Nd:e,r=t.nodeCallback,i=r===void 0?Nd:r,s=t.pseudoElementsCallback,o=s===void 0?Nd:s,a=t.observeMutationsRoot,l=a===void 0?Ie:a;Uh=new f1(function(u){if(!Vw){var c=Ri();Da(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!I1(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&I1(d.target)&&~v$.indexOf(d.attributeName))if(d.attributeName==="class"&&n9(d.target)){var h=ip(Pw(d.target)),p=h.prefix,_=h.iconName;d.target.setAttribute(bw,p||c),_&&d.target.setAttribute(xw,_)}else r9(d.target)&&i(d.target)})}}),Vr&&Uh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l9(){Uh&&Uh.disconnect()}function u9(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function c9(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=ip(Pw(t));return i.prefix||(i.prefix=Ri()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=$$(i.prefix,t.innerText)||kw(i.prefix,hy(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function d9(t){var e=Da(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Fu()):(e["aria-hidden"]="true",e.focusable="false")),e}function h9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=c9(t),r=n.iconName,i=n.prefix,s=n.rest,o=d9(t),a=py("parseNodeAttributes",{},t),l=e.styleParser?u9(t):[];return F({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var f9=Rn.styles;function NC(t){var e=z.autoReplaceSvg==="nest"?b1(t,{styleParser:!1}):b1(t);return~e.extra.classes.indexOf(pC)?Pr("generateLayersText",t,e):Pr("generateSvgReplacementMutation",t,e)}var Ci=new Set;Aw.map(function(t){Ci.add("fa-".concat(t))});Object.keys(Ou[ve]).map(Ci.add.bind(Ci));Object.keys(Ou[Me]).map(Ci.add.bind(Ci));Ci=vc(Ci);function x1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vr)return Promise.resolve();var n=Ie.documentElement.classList,r=function(d){return n.add("".concat(p1,"-").concat(d))},i=function(d){return n.remove("".concat(p1,"-").concat(d))},s=z.autoFetchSvg?Ci:Aw.map(function(c){return"fa-".concat(c)}).concat(Object.keys(f9));s.includes("fa")||s.push("fa");var o=[".".concat(pC,":not([").concat(Fs,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Fs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Da(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ow.begin("onTree"),u=a.reduce(function(c,d){try{var h=NC(d);h&&c.push(h)}catch(p){fC||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){CC(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function p9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;NC(t).then(function(n){n&&CC([n],e)})}function m9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:my(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:my(i||{})),t(r,F(F({},n),{},{mask:i}))}}var g9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Yn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,p=n.titleId,_=p===void 0?null:p,v=n.classes,w=v===void 0?[]:v,g=n.attributes,m=g===void 0?{}:g,y=n.styles,E=y===void 0?{}:y;if(e){var S=e.prefix,x=e.iconName,C=e.icon;return sp(F({type:"icon"},e),function(){return js("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(h?m["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(_||Fu()):(m["aria-hidden"]="true",m.focusable="false")),Dw({icons:{main:gy(C),mask:l?gy(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:x,transform:F(F({},Yn),i),symbol:o,title:h,maskId:c,titleId:_,extra:{attributes:m,styles:E,classes:w}})})}},y9={mixout:function(){return{icon:m9(g9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=x1,n.nodeCallback=p9,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ie:r,s=n.callback,o=s===void 0?function(){}:s;return x1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(p,_){Promise.all([yy(i,a),c.iconName?yy(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=Tw(v,2),g=w[0],m=w[1];p([n,Dw({icons:{main:g,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=np(a);l.length>0&&(i.style=l);var u;return Rw(o)&&(u=Pr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},v9={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return sp({type:"layer"},function(){js("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(vc(s)).join(" ")},children:o}]})}}}},_9={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return sp({type:"counter",content:n},function(){return js("beforeDOMElementCreation",{content:n,params:r}),X$({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(vc(a))}})})}}}},w9={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Yn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return sp({type:"text",content:n},function(){return js("beforeDOMElementCreation",{content:n,params:r}),w1({content:n,transform:F(F({},Yn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(vc(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(cC){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,w1({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},E9=new RegExp('"',"ug"),A1=[1105920,1112319];function I9(t){var e=t.replace(E9,""),n=V$(e,0),r=n>=A1[0]&&n<=A1[1],i=e.length===2?e[0]===e[1]:!1;return{value:hy(i?e[0]:e),isSecondary:r||i}}function P1(t,e){var n="".concat(c$).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Da(t.children),o=s.filter(function(C){return C.getAttribute(dy)===e})[0],a=Pi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(m$),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Me:ve,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Vu[h][l[2].toLowerCase()]:g$[h][u],_=I9(d),v=_.value,w=_.isSecondary,g=l[0].startsWith("FontAwesome"),m=kw(p,v),y=m;if(g){var E=B$(v);E.iconName&&E.prefix&&(m=E.iconName,p=E.prefix)}if(m&&!w&&(!o||o.getAttribute(bw)!==p||o.getAttribute(xw)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var S=h9(),x=S.extra;x.attributes[dy]=e,yy(m,p).then(function(C){var O=Dw(F(F({},S),{},{icons:{main:C,mask:Nw()},prefix:p,iconName:y,extra:x,watchable:!0})),Y=Ie.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=O.map(function($){return wc($)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function T9(t){return Promise.all([P1(t,"::before"),P1(t,"::after")])}function S9(t){return t.parentNode!==document.head&&!~h$.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(dy)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function R1(t){if(Vr)return new Promise(function(e,n){var r=Da(t.querySelectorAll("*")).filter(S9).map(T9),i=Ow.begin("searchPseudoElements");kC(),Promise.all(r).then(function(){i(),_y(),e()}).catch(function(){i(),_y(),n()})})}var b9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=R1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ie:r;z.searchPseudoElements&&R1(i)}}},C1=!1,x9={mixout:function(){return{dom:{unwatch:function(){kC(),C1=!0}}}},hooks:function(){return{bootstrap:function(){S1(py("mutationObserverCallbacks",{}))},noAuto:function(){l9()},watch:function(n){var r=n.observeMutationsRoot;C1?_y():S1(py("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},k1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},A9={mixout:function(){return{parse:{transform:function(n){return k1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=k1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:h};return{tag:"g",attributes:F({},p.outer),children:[{tag:"g",attributes:F({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),p.path)}]}]}}}},fm={x:0,y:0,width:"100%",height:"100%"};function N1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function P9(t){return t.tag==="g"?t.children:[t]}var R9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ip(i.split(" ").map(function(o){return o.trim()})):Nw();return s.prefix||(s.prefix=Ri()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,p=A$({transform:l,containerWidth:d,iconWidth:u}),_={tag:"rect",attributes:F(F({},fm),{},{fill:"white"})},v=c.children?{children:c.children.map(N1)}:{},w={tag:"g",attributes:F({},p.inner),children:[N1(F({tag:c.tag,attributes:F(F({},c.attributes),p.path)},v))]},g={tag:"g",attributes:F({},p.outer),children:[w]},m="mask-".concat(a||Fu()),y="clip-".concat(a||Fu()),E={tag:"mask",attributes:F(F({},fm),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:P9(h)},E]};return r.push(S,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(m,")")},fm)}),{children:r,attributes:i}}}},C9={provides:function(e){var n=!1;Pi.matchMedia&&(n=Pi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:F(F({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},k9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},N9=[C$,y9,v9,_9,w9,b9,x9,A9,R9,C9,k9];W$(N9,{mixoutsTo:dn});dn.noAuto;dn.config;dn.library;dn.dom;var wy=dn.parse;dn.findIconDefinition;dn.toHtml;var D9=dn.icon;dn.layer;dn.text;dn.counter;var DC={exports:{}},O9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",V9=O9,L9=V9;function OC(){}function VC(){}VC.resetWarningCache=OC;var M9=function(){function t(r,i,s,o,a,l){if(l!==L9){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:VC,resetWarningCache:OC};return n.PropTypes=n,n};DC.exports=M9();var F9=DC.exports;const B=rT(F9);function D1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ni(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D1(Object(n),!0).forEach(function(r){Ao(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $h(t){"@babel/helpers - typeof";return $h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$h(t)}function Ao(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function U9(t,e){if(t==null)return{};var n=j9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ey(t){return $9(t)||B9(t)||z9(t)||q9()}function $9(t){if(Array.isArray(t))return Iy(t)}function B9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function z9(t,e){if(t){if(typeof t=="string")return Iy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Iy(t,e)}}function Iy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W9(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,p=t.inverse,_=t.border,v=t.listItem,w=t.flip,g=t.size,m=t.rotation,y=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":p,"fa-border":_,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Ao(e,"fa-".concat(g),typeof g<"u"&&g!==null),Ao(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),Ao(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Ao(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function H9(t){return t=t-0,t===t}function LC(t){return H9(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var G9=["style"];function K9(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Q9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=LC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[K9(i)]=s:e[i]=s,e},{})}function MC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return MC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Q9(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[LC(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=U9(n,G9);return i.attrs.style=ni(ni({},i.attrs.style),o),t.apply(void 0,[e.tag,ni(ni({},i.attrs),a)].concat(Ey(r)))}var FC=!1;try{FC=!0}catch{}function Y9(){if(!FC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function O1(t){if(t&&$h(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wy.icon)return wy.icon(t);if(t===null)return null;if(t&&$h(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function pm(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ao({},t,e):{}}var le=ee.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=O1(n),c=pm("classes",[].concat(Ey(W9(t)),Ey(s.split(" ")))),d=pm("transform",typeof t.transform=="string"?wy.transform(t.transform):t.transform),h=pm("mask",O1(r)),p=D9(u,ni(ni(ni(ni({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return Y9("Could not find icon",u),null;var _=p.abstract,v={ref:e};return Object.keys(t).forEach(function(w){le.defaultProps.hasOwnProperty(w)||(v[w]=t[w])}),J9(_[0],v)});le.displayName="FontAwesomeIcon";le.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};le.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var J9=MC.bind(null,ee.createElement);const V1="https://brighamdent.github.io/english-site/assets/longLogo-5fbk1_Oh.svg";var X9={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Z9={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},op={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},eB={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},tB={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},nB={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},rB={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},iB={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},ju={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},sB={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},Oa={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},oB={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},Lw={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function aB(){const{currentUser:t,subscribed:e}=Xt(),[n,r]=A.useState(!1),i=Li(),s=Mi(),o=()=>{r(!n)};return A.useEffect(()=>{r(!1)},[i.pathname]),f.jsxs("div",{className:"fixed z-50 w-full",children:[f.jsxs("div",{className:" top-0 p-2 bg-white drop-shadow-sm h-24 lg:h-16 px-4 text-2xl mb-10 sm:z-30",children:[f.jsx("div",{className:"flex justify-between",children:f.jsxs("div",{className:"flex text-right items-center pr-3 lg:hidden m-2",children:[f.jsx("button",{className:"text-[40px] p-4",onClick:o,children:n?f.jsx(le,{icon:oB}):f.jsx(le,{icon:Z9})}),f.jsx("img",{src:V1,className:"h-10 ml-2"})]})}),f.jsxs("div",{className:"hidden lg:flex justify-between items-center",children:[f.jsx("img",{src:V1,className:"h-12 cursor-pointer",onClick:()=>s("/")}),f.jsxs("div",{className:"flex justify-between w-[45%]",children:[f.jsx(fe,{className:"hover:border-b border-gray-300",to:"/",children:"Inicio"}),e?f.jsx(fe,{className:"hover:border-b border-gray-300",to:"dashboard",children:"Tus Clases"}):f.jsx(fe,{className:"hover:border-b border-gray-300",to:"/pricing",children:"Costo"}),f.jsx(fe,{className:"hover:border-b border-gray-300",to:"/about",children:"Quiénes Somos"})]}),t?f.jsx(fe,{className:"hover:border-b border-gray-300 text-sm",to:"/account",children:"Tu Cuenta"}):f.jsx(fe,{className:"hover:border-b border-gray-300 text-sm",to:"signup",children:"Iniciar Sesión/Registrarse"})]})]}),n&&f.jsxs("div",{className:" fixed w-[100vw] h-[calc(100vh-96px)] lg:h-[calc(100vh-48px)] text-2xl  text-left top-24 lg:top-12 lg:hidden",children:[f.jsxs("ul",{className:"p-4 bg-white z-20 sm:fixed left-0 sm:h-[100%] ",children:[f.jsx("li",{className:"p-2",children:f.jsx(fe,{to:"/",children:"Inicio"})}),e?f.jsx("li",{className:"p-2",children:f.jsx(fe,{to:"/dashboard",children:"Tus Clases"})}):f.jsx("li",{className:"p-2",children:f.jsx(fe,{to:"/pricing",children:"Costo"})}),f.jsx("li",{className:"p-2",children:f.jsx(fe,{to:"/about",children:"Quiénes Somos"})}),t?f.jsx("li",{className:"p-2",children:f.jsx(fe,{to:"/account",children:"Cuenta"})}):f.jsx("li",{className:"p-2",children:f.jsx(fe,{to:"/login",children:"Ingresa/Inscribirse"})})]}),f.jsx("div",{onClick:o,className:"fixed w-[100vw] h-full bg-black/50 z-10"})]})]})}function L1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?L1(Object(n),!0).forEach(function(r){jC(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Od(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Od=function(e){return typeof e}:Od=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Od(t)}function jC(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vd(t,e){return lB(t)||uB(t,e)||cB(t,e)||dB()}function lB(t){if(Array.isArray(t))return t}function uB(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function cB(t,e){if(t){if(typeof t=="string")return F1(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F1(t,e)}}function F1(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ty=function(e){var n=ee.useRef(e);return ee.useEffect(function(){n.current=e},[e]),n.current},da=function(e){return e!==null&&Od(e)==="object"},hB=function(e){return da(e)&&typeof e.then=="function"},fB=function(e){return da(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},j1="[object Object]",pB=function t(e,n){if(!da(e)||!da(n))return e===n;var r=Array.isArray(e),i=Array.isArray(n);if(r!==i)return!1;var s=Object.prototype.toString.call(e)===j1,o=Object.prototype.toString.call(n)===j1;if(s!==o)return!1;if(!s&&!r)return e===n;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(var u={},c=0;c<a.length;c+=1)u[a[c]]=!0;for(var d=0;d<l.length;d+=1)u[l[d]]=!0;var h=Object.keys(u);if(h.length!==a.length)return!1;var p=e,_=n,v=function(g){return t(p[g],_[g])};return h.every(v)},UC=function(e,n,r){return da(e)?Object.keys(e).reduce(function(i,s){var o=!da(n)||!pB(e[s],n[s]);return r.includes(s)?(o&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),i):o?M1(M1({},i||{}),{},jC({},s,e[s])):i},null):null},$C="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",U1=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$C;if(e===null||fB(e))return e;throw new Error(n)},mB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$C;if(hB(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(i){return U1(i,n)})};var r=U1(e,n);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},gB=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.4.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.4.0",url:"https://stripe.com/docs/stripe-js/react"}))},BC=ee.createContext(null);BC.displayName="CustomCheckoutSdkContext";var yB=function(e,n){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CustomCheckoutProvider> provider."));return e},vB=ee.createContext(null);vB.displayName="CustomCheckoutContext";B.any,B.shape({clientSecret:B.string.isRequired,elementsOptions:B.object}).isRequired;var Sy=function(e){var n=ee.useContext(BC),r=ee.useContext(ap);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?yB(n,e):zC(r,e)},ap=ee.createContext(null);ap.displayName="ElementsContext";var zC=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Mw=ee.createContext(null);Mw.displayName="CartElementContext";var _B=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},qC=function(e){var n=e.stripe,r=e.options,i=e.children,s=ee.useMemo(function(){return mB(n)},[n]),o=ee.useState(null),a=Vd(o,2),l=a[0],u=a[1],c=ee.useState(null),d=Vd(c,2),h=d[0],p=d[1],_=ee.useState(function(){return{stripe:s.tag==="sync"?s.stripe:null,elements:s.tag==="sync"?s.stripe.elements(r):null}}),v=Vd(_,2),w=v[0],g=v[1];ee.useEffect(function(){var E=!0,S=function(C){g(function(O){return O.stripe?O:{stripe:C,elements:C.elements(r)}})};return s.tag==="async"&&!w.stripe?s.stripePromise.then(function(x){x&&E&&S(x)}):s.tag==="sync"&&!w.stripe&&S(s.stripe),function(){E=!1}},[s,w,r]);var m=Ty(n);ee.useEffect(function(){m!==null&&m!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[m,n]);var y=Ty(r);return ee.useEffect(function(){if(w.elements){var E=UC(r,y,["clientSecret","fonts"]);E&&w.elements.update(E)}},[r,y,w.elements]),ee.useEffect(function(){gB(w.stripe)},[w.stripe]),ee.createElement(ap.Provider,{value:w},ee.createElement(Mw.Provider,{value:{cart:l,setCart:u,cartState:h,setCartState:p}},i))};qC.propTypes={stripe:B.any,options:B.object};var wB=function(e){var n=ee.useContext(ap);return zC(n,e)},EB={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},$1=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=ee.useContext(Mw);return n?EB:_B(r,e)},IB=function(){var e=wB("calls useElements()"),n=e.elements;return n},TB=function(){var e=Sy("calls useStripe()"),n=e.stripe;return n};B.func.isRequired;var Ct=function(e,n,r){var i=!!r,s=ee.useRef(r);ee.useEffect(function(){s.current=r},[r]),ee.useEffect(function(){if(!i||!e)return function(){};var o=function(){s.current&&s.current.apply(s,arguments)};return e.on(n,o),function(){e.off(n,o)}},[i,n,e,s])},SB=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Je=function(e,n){var r="".concat(SB(e),"Element"),i=function(l){var u=l.id,c=l.className,d=l.options,h=d===void 0?{}:d,p=l.onBlur,_=l.onFocus,v=l.onReady,w=l.onChange,g=l.onEscape,m=l.onClick,y=l.onLoadError,E=l.onLoaderStart,S=l.onNetworksChange,x=l.onCheckout,C=l.onLineItemClick,O=l.onConfirm,Y=l.onCancel,$=l.onShippingAddressChange,ge=l.onShippingRateChange,It=Sy("mounts <".concat(r,">")),Ln="elements"in It?It.elements:null,Hi="customCheckoutSdk"in It?It.customCheckoutSdk:null,fp=ee.useState(null),Ys=Vd(fp,2),Ge=Ys[0],j=Ys[1],G=ee.useRef(null),J=ee.useRef(null),Te=$1("mounts <".concat(r,">"),"customCheckoutSdk"in It),Oe=Te.setCart,Lr=Te.setCartState;Ct(Ge,"blur",p),Ct(Ge,"focus",_),Ct(Ge,"escape",g),Ct(Ge,"click",m),Ct(Ge,"loaderror",y),Ct(Ge,"loaderstart",E),Ct(Ge,"networkschange",S),Ct(Ge,"lineitemclick",C),Ct(Ge,"confirm",O),Ct(Ge,"cancel",Y),Ct(Ge,"shippingaddresschange",$),Ct(Ge,"shippingratechange",ge);var hn;e==="cart"?hn=function(qw){Lr(qw),v&&v(qw)}:v&&(e==="expressCheckout"?hn=v:hn=function(){v(Ge)}),Ct(Ge,"ready",hn);var La=e==="cart"?function(Ze){Lr(Ze),w&&w(Ze)}:w;Ct(Ge,"change",La);var ar=e==="cart"?function(Ze){Lr(Ze),x&&x(Ze)}:x;Ct(Ge,"checkout",ar),ee.useLayoutEffect(function(){if(G.current===null&&J.current!==null&&(Ln||Hi)){var Ze=null;Hi?Ze=Hi.createElement(e,h):Ln&&(Ze=Ln.create(e,h)),e==="cart"&&Oe&&Oe(Ze),G.current=Ze,j(Ze),Ze&&Ze.mount(J.current)}},[Ln,Hi,h,Oe]);var Gi=Ty(h);return ee.useEffect(function(){if(G.current){var Ze=UC(h,Gi,["paymentRequest"]);Ze&&G.current.update(Ze)}},[h,Gi]),ee.useLayoutEffect(function(){return function(){if(G.current&&typeof G.current.destroy=="function")try{G.current.destroy(),G.current=null}catch{}}},[]),ee.createElement("div",{id:u,className:c,ref:J})},s=function(l){var u=Sy("mounts <".concat(r,">"));$1("mounts <".concat(r,">"),"customCheckoutSdk"in u);var c=l.id,d=l.className;return ee.createElement("div",{id:c,className:d})},o=n?s:i;return o.propTypes={id:B.string,className:B.string,onChange:B.func,onBlur:B.func,onFocus:B.func,onReady:B.func,onEscape:B.func,onClick:B.func,onLoadError:B.func,onLoaderStart:B.func,onNetworksChange:B.func,onCheckout:B.func,onLineItemClick:B.func,onConfirm:B.func,onCancel:B.func,onShippingAddressChange:B.func,onShippingRateChange:B.func,options:B.object},o.displayName=r,o.__elementType=e,o},Xe=typeof window>"u",bB=ee.createContext(null);bB.displayName="EmbeddedCheckoutProviderContext";Je("auBankAccount",Xe);Je("card",Xe);var B1=Je("cardNumber",Xe),xB=Je("cardExpiry",Xe),AB=Je("cardCvc",Xe);Je("fpxBank",Xe);Je("iban",Xe);Je("idealBank",Xe);Je("p24Bank",Xe);Je("epsBank",Xe);Je("payment",Xe);Je("expressCheckout",Xe);Je("paymentRequestButton",Xe);Je("linkAuthentication",Xe);Je("address",Xe);Je("shippingAddress",Xe);Je("cart",Xe);Je("paymentMethodMessaging",Xe);Je("affirmMessage",Xe);Je("afterpayClearpayMessage",Xe);var WC="https://js.stripe.com/v3",PB=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,z1="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",RB=function(){for(var e=document.querySelectorAll('script[src^="'.concat(WC,'"]')),n=0;n<e.length;n++){var r=e[n];if(PB.test(r.src))return r}return null},q1=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(WC).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},CB=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.3.0",startTime:n})},tl=null,od=null,ad=null,kB=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},NB=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},DB=function(e){return tl!==null?tl:(tl=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(z1),window.Stripe){n(window.Stripe);return}try{var i=RB();if(i&&e)console.warn(z1);else if(!i)i=q1(e);else if(i&&ad!==null&&od!==null){var s;i.removeEventListener("load",ad),i.removeEventListener("error",od),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=q1(e)}ad=NB(n,r),od=kB(r),i.addEventListener("load",ad),i.addEventListener("error",od)}catch(o){r(o);return}}),tl.catch(function(n){return tl=null,Promise.reject(n)}))},OB=function(e,n,r){if(e===null)return null;var i=e.apply(void 0,n);return CB(i,r),i},nl,HC=!1,GC=function(){return nl||(nl=DB(null).catch(function(e){return nl=null,Promise.reject(e)}),nl)};Promise.resolve().then(function(){return GC()}).catch(function(t){HC||console.warn(t)});var VB=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];HC=!0;var i=Date.now();return GC().then(function(s){return OB(s,n,i)})};function KC(t,e){return function(){return t.apply(e,arguments)}}const{toString:LB}=Object.prototype,{getPrototypeOf:Fw}=Object,lp=(t=>e=>{const n=LB.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),or=t=>(t=t.toLowerCase(),e=>lp(e)===t),up=t=>e=>typeof e===t,{isArray:Va}=Array,Uu=up("undefined");function MB(t){return t!==null&&!Uu(t)&&t.constructor!==null&&!Uu(t.constructor)&&wn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const QC=or("ArrayBuffer");function FB(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&QC(t.buffer),e}const jB=up("string"),wn=up("function"),YC=up("number"),cp=t=>t!==null&&typeof t=="object",UB=t=>t===!0||t===!1,Ld=t=>{if(lp(t)!=="object")return!1;const e=Fw(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},$B=or("Date"),BB=or("File"),zB=or("Blob"),qB=or("FileList"),WB=t=>cp(t)&&wn(t.pipe),HB=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||wn(t.append)&&((e=lp(t))==="formdata"||e==="object"&&wn(t.toString)&&t.toString()==="[object FormData]"))},GB=or("URLSearchParams"),KB=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ec(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Va(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function JC(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const XC=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ZC=t=>!Uu(t)&&t!==XC;function by(){const{caseless:t}=ZC(this)&&this||{},e={},n=(r,i)=>{const s=t&&JC(e,i)||i;Ld(e[s])&&Ld(r)?e[s]=by(e[s],r):Ld(r)?e[s]=by({},r):Va(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ec(arguments[r],n);return e}const QB=(t,e,n,{allOwnKeys:r}={})=>(Ec(e,(i,s)=>{n&&wn(i)?t[s]=KC(i,n):t[s]=i},{allOwnKeys:r}),t),YB=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),JB=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},XB=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Fw(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ZB=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},ez=t=>{if(!t)return null;if(Va(t))return t;let e=t.length;if(!YC(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},tz=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Fw(Uint8Array)),nz=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},rz=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},iz=or("HTMLFormElement"),sz=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),W1=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),oz=or("RegExp"),ek=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ec(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},az=t=>{ek(t,(e,n)=>{if(wn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(wn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lz=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Va(t)?r(t):r(String(t).split(e)),n},uz=()=>{},cz=(t,e)=>(t=+t,Number.isFinite(t)?t:e),mm="abcdefghijklmnopqrstuvwxyz",H1="0123456789",tk={DIGIT:H1,ALPHA:mm,ALPHA_DIGIT:mm+mm.toUpperCase()+H1},dz=(t=16,e=tk.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function hz(t){return!!(t&&wn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const fz=t=>{const e=new Array(10),n=(r,i)=>{if(cp(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Va(r)?[]:{};return Ec(r,(o,a)=>{const l=n(o,i+1);!Uu(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},pz=or("AsyncFunction"),mz=t=>t&&(cp(t)||wn(t))&&wn(t.then)&&wn(t.catch),b={isArray:Va,isArrayBuffer:QC,isBuffer:MB,isFormData:HB,isArrayBufferView:FB,isString:jB,isNumber:YC,isBoolean:UB,isObject:cp,isPlainObject:Ld,isUndefined:Uu,isDate:$B,isFile:BB,isBlob:zB,isRegExp:oz,isFunction:wn,isStream:WB,isURLSearchParams:GB,isTypedArray:tz,isFileList:qB,forEach:Ec,merge:by,extend:QB,trim:KB,stripBOM:YB,inherits:JB,toFlatObject:XB,kindOf:lp,kindOfTest:or,endsWith:ZB,toArray:ez,forEachEntry:nz,matchAll:rz,isHTMLForm:iz,hasOwnProperty:W1,hasOwnProp:W1,reduceDescriptors:ek,freezeMethods:az,toObjectSet:lz,toCamelCase:sz,noop:uz,toFiniteNumber:cz,findKey:JC,global:XC,isContextDefined:ZC,ALPHABET:tk,generateString:dz,isSpecCompliantForm:hz,toJSONObject:fz,isAsyncFn:pz,isThenable:mz};function ie(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}b.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const nk=ie.prototype,rk={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{rk[t]={value:t}});Object.defineProperties(ie,rk);Object.defineProperty(nk,"isAxiosError",{value:!0});ie.from=(t,e,n,r,i,s)=>{const o=Object.create(nk);return b.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),ie.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const gz=null;function xy(t){return b.isPlainObject(t)||b.isArray(t)}function ik(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function G1(t,e,n){return t?t.concat(e).map(function(i,s){return i=ik(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function yz(t){return b.isArray(t)&&!t.some(xy)}const vz=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function dp(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!b.isUndefined(w[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(i))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if(b.isDate(_))return _.toISOString();if(!l&&b.isBlob(_))throw new ie("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(_)||b.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function c(_,v,w){let g=_;if(_&&!w&&typeof _=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),_=JSON.stringify(_);else if(b.isArray(_)&&yz(_)||(b.isFileList(_)||b.endsWith(v,"[]"))&&(g=b.toArray(_)))return v=ik(v),g.forEach(function(y,E){!(b.isUndefined(y)||y===null)&&e.append(o===!0?G1([v],E,s):o===null?v:v+"[]",u(y))}),!1}return xy(_)?!0:(e.append(G1(w,v,s),u(_)),!1)}const d=[],h=Object.assign(vz,{defaultVisitor:c,convertValue:u,isVisitable:xy});function p(_,v){if(!b.isUndefined(_)){if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(_),b.forEach(_,function(g,m){(!(b.isUndefined(g)||g===null)&&i.call(e,g,b.isString(m)?m.trim():m,v,h))===!0&&p(g,v?v.concat(m):[m])}),d.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return p(t),e}function K1(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function jw(t,e){this._pairs=[],t&&dp(t,this,e)}const sk=jw.prototype;sk.append=function(e,n){this._pairs.push([e,n])};sk.toString=function(e){const n=e?function(r){return e.call(this,r,K1)}:K1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function _z(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ok(t,e,n){if(!e)return t;const r=n&&n.encode||_z,i=n&&n.serialize;let s;if(i?s=i(e,n):s=b.isURLSearchParams(e)?e.toString():new jw(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Q1{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ak={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wz=typeof URLSearchParams<"u"?URLSearchParams:jw,Ez=typeof FormData<"u"?FormData:null,Iz=typeof Blob<"u"?Blob:null,Tz={isBrowser:!0,classes:{URLSearchParams:wz,FormData:Ez,Blob:Iz},protocols:["http","https","file","blob","url","data"]},lk=typeof window<"u"&&typeof document<"u",Sz=(t=>lk&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),bz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lk,hasStandardBrowserEnv:Sz,hasStandardBrowserWebWorkerEnv:bz},Symbol.toStringTag,{value:"Module"})),Jn={...xz,...Tz};function Az(t,e){return dp(t,new Jn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Jn.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Pz(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Rz(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function uk(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&b.isArray(i)?i.length:o,l?(b.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!b.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&b.isArray(i[o])&&(i[o]=Rz(i[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,i)=>{e(Pz(r),i,n,0)}),n}return null}function Cz(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Uw={transitional:ak,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=b.isObject(e);if(s&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return i&&i?JSON.stringify(uk(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Az(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return dp(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Cz(e)):e}],transformResponse:[function(e){const n=this.transitional||Uw.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ie.from(a,ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jn.classes.FormData,Blob:Jn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Uw.headers[t]={}});const $w=Uw,kz=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Nz=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&kz[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Y1=Symbol("internals");function rl(t){return t&&String(t).trim().toLowerCase()}function Md(t){return t===!1||t==null?t:b.isArray(t)?t.map(Md):String(t)}function Dz(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Oz=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function gm(t,e,n,r,i){if(b.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function Vz(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Lz(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class hp{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,u){const c=rl(l);if(!c)throw new Error("header name must be a non-empty string");const d=b.findKey(i,c);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||l]=Md(a))}const o=(a,l)=>b.forEach(a,(u,c)=>s(u,c,l));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Oz(e)?o(Nz(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=rl(e),e){const r=b.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Dz(i);if(b.isFunction(n))return n.call(this,i,r);if(b.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=rl(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||gm(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=rl(o),o){const a=b.findKey(r,o);a&&(!n||gm(r,r[a],a,n))&&(delete r[a],i=!0)}}return b.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||gm(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return b.forEach(this,(i,s)=>{const o=b.findKey(r,s);if(o){n[o]=Md(i),delete n[s];return}const a=e?Vz(s):String(s).trim();a!==s&&delete n[s],n[a]=Md(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Y1]=this[Y1]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=rl(o);r[a]||(Lz(i,o),r[a]=!0)}return b.isArray(e)?e.forEach(s):s(e),this}}hp.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(hp.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(hp);const vr=hp;function ym(t,e){const n=this||$w,r=e||n,i=vr.from(r.headers);let s=r.data;return b.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function ck(t){return!!(t&&t.__CANCEL__)}function Ic(t,e,n){ie.call(this,t??"canceled",ie.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(Ic,ie,{__CANCEL__:!0});function Mz(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Fz=Jn.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];b.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),b.isString(r)&&o.push("path="+r),b.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function jz(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Uz(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function dk(t,e){return t&&!jz(e)?Uz(t,e):e}const $z=Jn.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=b.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Bz(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function zz(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=r[s];o||(o=u),n[i]=l,r[i]=u;let d=s,h=0;for(;d!==i;)h+=n[d++],d=d%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),u-o<e)return;const p=c&&u-c;return p?Math.round(h*1e3/p):void 0}}function J1(t,e){let n=0;const r=zz(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),u=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&u?(o-s)/l:void 0,event:i};c[e?"download":"upload"]=!0,t(c)}}const qz=typeof XMLHttpRequest<"u",Wz=qz&&function(t){return new Promise(function(n,r){let i=t.data;const s=vr.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function u(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let c;if(b.isFormData(i)){if(Jn.hasStandardBrowserEnv||Jn.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((c=s.getContentType())!==!1){const[v,...w]=c?c.split(";").map(g=>g.trim()).filter(Boolean):[];s.setContentType([v||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(v+":"+w))}const h=dk(t.baseURL,t.url);d.open(t.method.toUpperCase(),ok(h,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function p(){if(!d)return;const v=vr.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),g={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:t,request:d};Mz(function(y){n(y),u()},function(y){r(y),u()},g),d=null}if("onloadend"in d?d.onloadend=p:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(p)},d.onabort=function(){d&&(r(new ie("Request aborted",ie.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new ie("Network Error",ie.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const g=t.transitional||ak;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new ie(w,g.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,t,d)),d=null},Jn.hasStandardBrowserEnv&&(a&&b.isFunction(a)&&(a=a(t)),a||a!==!1&&$z(h))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&Fz.read(t.xsrfCookieName);v&&s.set(t.xsrfHeaderName,v)}i===void 0&&s.setContentType(null),"setRequestHeader"in d&&b.forEach(s.toJSON(),function(w,g){d.setRequestHeader(g,w)}),b.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",J1(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",J1(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=v=>{d&&(r(!v||v.type?new Ic(null,t,d):v),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const _=Bz(h);if(_&&Jn.protocols.indexOf(_)===-1){r(new ie("Unsupported protocol "+_+":",ie.ERR_BAD_REQUEST,t));return}d.send(i||null)})},Ay={http:gz,xhr:Wz};b.forEach(Ay,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const X1=t=>`- ${t}`,Hz=t=>b.isFunction(t)||t===null||t===!1,hk={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!Hz(n)&&(r=Ay[(o=String(n)).toLowerCase()],r===void 0))throw new ie(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(X1).join(`
`):" "+X1(s[0]):"as no adapter specified";throw new ie("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ay};function vm(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ic(null,t)}function Z1(t){return vm(t),t.headers=vr.from(t.headers),t.data=ym.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),hk.getAdapter(t.adapter||$w.adapter)(t).then(function(r){return vm(t),r.data=ym.call(t,t.transformResponse,r),r.headers=vr.from(r.headers),r},function(r){return ck(r)||(vm(t),r&&r.response&&(r.response.data=ym.call(t,t.transformResponse,r.response),r.response.headers=vr.from(r.response.headers))),Promise.reject(r)})}const eT=t=>t instanceof vr?t.toJSON():t;function ha(t,e){e=e||{};const n={};function r(u,c,d){return b.isPlainObject(u)&&b.isPlainObject(c)?b.merge.call({caseless:d},u,c):b.isPlainObject(c)?b.merge({},c):b.isArray(c)?c.slice():c}function i(u,c,d){if(b.isUndefined(c)){if(!b.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function s(u,c){if(!b.isUndefined(c))return r(void 0,c)}function o(u,c){if(b.isUndefined(c)){if(!b.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function a(u,c,d){if(d in e)return r(u,c);if(d in t)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,c)=>i(eT(u),eT(c),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||i,h=d(t[c],e[c],c);b.isUndefined(h)&&d!==a||(n[c]=h)}),n}const fk="1.6.5",Bw={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Bw[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const tT={};Bw.transitional=function(e,n,r){function i(s,o){return"[Axios v"+fk+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ie(i(o," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!tT[o]&&(tT[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Gz(t,e,n){if(typeof t!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new ie("option "+s+" must be "+l,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+s,ie.ERR_BAD_OPTION)}}const Py={assertOptions:Gz,validators:Bw},qr=Py.validators;class Bh{constructor(e){this.defaults=e,this.interceptors={request:new Q1,response:new Q1}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ha(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Py.assertOptions(r,{silentJSONParsing:qr.transitional(qr.boolean),forcedJSONParsing:qr.transitional(qr.boolean),clarifyTimeoutError:qr.transitional(qr.boolean)},!1),i!=null&&(b.isFunction(i)?n.paramsSerializer={serialize:i}:Py.assertOptions(i,{encode:qr.function,serialize:qr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&b.merge(s.common,s[n.method]);s&&b.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=vr.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,h;if(!l){const _=[Z1.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),h=_.length,c=Promise.resolve(n);d<h;)c=c.then(_[d++],_[d++]);return c}h=a.length;let p=n;for(d=0;d<h;){const _=a[d++],v=a[d++];try{p=_(p)}catch(w){v.call(this,w);break}}try{c=Z1.call(this,p)}catch(_){return Promise.reject(_)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=ha(this.defaults,e);const n=dk(e.baseURL,e.url);return ok(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Bh.prototype[e]=function(n,r){return this.request(ha(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(ha(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Bh.prototype[e]=n(),Bh.prototype[e+"Form"]=n(!0)});const Fd=Bh;class zw{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Ic(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new zw(function(i){e=i}),cancel:e}}}const Kz=zw;function Qz(t){return function(n){return t.apply(null,n)}}function Yz(t){return b.isObject(t)&&t.isAxiosError===!0}const Ry={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ry).forEach(([t,e])=>{Ry[e]=t});const Jz=Ry;function pk(t){const e=new Fd(t),n=KC(Fd.prototype.request,e);return b.extend(n,Fd.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return pk(ha(t,i))},n}const Ae=pk($w);Ae.Axios=Fd;Ae.CanceledError=Ic;Ae.CancelToken=Kz;Ae.isCancel=ck;Ae.VERSION=fk;Ae.toFormData=dp;Ae.AxiosError=ie;Ae.Cancel=Ae.CanceledError;Ae.all=function(e){return Promise.all(e)};Ae.spread=Qz;Ae.isAxiosError=Yz;Ae.mergeConfig=ha;Ae.AxiosHeaders=vr;Ae.formToJSON=t=>uk(b.isHTMLForm(t)?new FormData(t):t);Ae.getAdapter=hk.getAdapter;Ae.HttpStatusCode=Jz;Ae.default=Ae;function Xz({plan:t,setSuccess:e,setLoading:n}){const{currentUser:r,getUserData:i}=Xt(),[s,o]=A.useState("");if(!r||!r.email)return;const a=_n.firestore().collection("Users").doc(r.email),l=TB(),u=IB(),c={showIcon:!0,style:{base:{color:"#000",fontSize:"25px",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',"::placeholder":{color:"#aab7c4"},iconColor:"#666EE8"},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},d=async h=>{if(h.preventDefault(),n(!0),o(""),!l||!u)return;const p=u.getElement(B1),_=h.target.firstName.value,v=h.target.lastName.value,w=`${_} ${v}`,{error:g,paymentMethod:m}=await l.createPaymentMethod({type:"card",card:p});if(g)console.log(g.message),o("There was an error processing your payment");else try{const{id:y}=m,E=await Ae.post("https://english-site-server.onrender.com/payment",{plan:t,id:y,name:w,email:r.email});if(E.data.success){console.log("Successful payment");const S=E.data.customerId,x=E.data.subscriptionId,C=E.data.subscriptionItemId,O=E.data.subscriptionType;console.log(E),e(!0),a.update({subscribed:!0,customerId:S,subscriptionId:x,subscriptionItemId:C,subscriptionType:O}).then(()=>{console.log("Subscription updated successfully"),i()}).catch(Y=>{console.error("Error updating subscription: ",Y)})}}catch(y){console.log("Error",y),o("There was an error processing your payment")}n(!1)};return f.jsxs("div",{children:[s&&f.jsxs("div",{className:"flex items-center bg-red-200 text-red-500 border border-red-500 w-[325px] md:w-[466px] rounded-md p-4 h-16 mb-2 md:mb-4",children:[f.jsx(le,{className:"mr-4",icon:op}),f.jsx("h1",{children:s}),f.jsx(le,{className:"ml-4 lg:ml-[15px]",onClick:()=>o(""),icon:ju})]}),f.jsxs("form",{className:"flex flex-col items-center",onSubmit:d,children:[f.jsxs("fieldset",{className:"md:mb-4 flex flex-col items-center md:flex-row",children:[f.jsxs("label",{className:"block text-left text-xl mb-2 md:mb-0",children:[f.jsx("h1",{className:"ml-2 mb-2",children:"Nombre"}),f.jsx("input",{className:"text-[25px] border-2 border-black/25 rounded-[10px] p-3 w-[325px] md:w-[225px]",type:"text",name:"firstName",required:!0})]}),f.jsxs("label",{className:"block text-xl text-left md:ml-4 mb-2 md:mb-0",children:[f.jsx("h1",{className:"ml-2 mb-2",children:"Apellido"}),f.jsx("input",{className:" text-[25px] border-2 border-black/25 rounded-[10px] pl-2 p-3 w-[325px] md:w-[225px]",type:"text",name:"lastName",required:!0})]})]}),f.jsx("fieldset",{children:f.jsxs("label",{className:"block text-left mb-4 w-[325px] md:w-[466px]",children:[f.jsx("h1",{className:"ml-2 mb-2 text-xl",children:"Numero de Tarjeta"}),f.jsx("div",{className:"bg-white flex items-center border-2 pl-2 border-black/25 rounded-[10px]",children:f.jsx(B1,{options:c})})]})}),f.jsxs("fieldset",{className:"mb-4 flex flex-col md:flex-row items-center",children:[f.jsxs("label",{className:"block text-left mb-2",children:[f.jsx("h1",{className:" ml-2 md:ml-0 mb-2 text-xl",children:"Fecha de Vencimiento"}),f.jsx("div",{className:"bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]",children:f.jsx(xB,{options:c})})]}),f.jsxs("label",{className:"block text-left md:ml-4 mb-2",children:[f.jsx("h1",{className:"ml-2 mb-2 text-xl",children:"CVC"}),f.jsx("div",{className:"bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]",children:f.jsx(AB,{options:c})})]})]}),f.jsx("button",{className:"w-[325px] md:w-[466px] rounded-[10px] bg-blue-200 hover:bg-blue-300 text-2xl p-3",type:"submit",disabled:!l,children:"Inciar Subscripcion"})]})]})}const Zz="pk_test_51OYENxA1KBKXgU2EmyAVe6BWuxbVNQyTx8YWk3YJpWziUdSsU9P5fEQxyfJ7IyHfOxCqjmuZ9SXKDvRcBEVbW0aw00QbswD3Ci",e8=VB(Zz);function t8({plan:t,success:e,setSuccess:n,loading:r,setLoading:i}){return f.jsx(qC,{options:{locale:"es"},stripe:e8,children:f.jsx(Xz,{plan:t,success:e,setSuccess:n,loading:r,setLoading:i})})}function n8({schedule:t,setSchedule:e,pricingStructure:n}){const r=i=>{i.preventDefault(),e(i.target.textContent)};return console.log(n),A.useEffect(()=>{console.log(t)},[t]),f.jsxs("div",{className:"md:w-[70%]flex flex-col items-center pl-4",children:[f.jsx("h1",{className:"hidden md:block text-3xl text-center mb-6",children:"Horarios Disponibles"}),n&&n.plan!=3?f.jsxs("ul",{className:"flex flex-col p-6",children:[f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes y Miercoles 6 PM (Principiante)"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes y Miercoles 7 PM (Intermedio)"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes y Miercoles 8 PM (Avanzado)"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 9 AM / Domingo 6 PM (Avanzado)"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 10 AM / y Domingo 7 PM (Principiante)"}),f.jsx("li",{onClick:r,className:"p-2 pb-4  text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 11 AM / y Domingo 8 PM (Intermedio)"})]}):f.jsxs("ul",{className:"flex flex-col p-6",children:[f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes 5 PM"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Miercoles 5 PM"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Jueves 6 PM"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Jueves 7 PM"}),f.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 8 AM"}),f.jsx("li",{onClick:r,className:"p-2 pb-4  text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 12 PM"})]})]})}function r8(){var h;const[t,e]=A.useState(!1),[n,r]=A.useState(!1),[i,s]=A.useState(""),{currentUser:o}=Xt(),l=(h=Li().state)==null?void 0:h.data,u=Mi();if(!o||!o.email)return;const c=_n.firestore().collection("Users").doc(o.email);A.useEffect(()=>{t==!0&&c.update({schedule:i})},[t]);const d=()=>{i?s(""):u("/pricing")};return f.jsxs("div",{className:"relative",children:[n&&f.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:f.jsx(le,{className:"fixed top-1/2 text-6xl",icon:Oa,spinPulse:!0})}),f.jsx("div",{children:t?f.jsxs("div",{className:"flex flex-col",children:[f.jsx("h1",{className:"text-2xl",children:"Felicidades, ya eres parte de English Direct! Nos vemos en tu primera clase."}),f.jsx(fe,{to:"/dashboard",className:" text-center rounded-lg bg-blue-200 text-3xl p-5 m-10",children:"EMPIEZA YA!"})]}):f.jsxs("div",{className:"flex flex-col md:flex-row justify-around items-center md:bg-white p-4 rounded-lg",children:[f.jsx(le,{className:" absolute text-3xl top-4 left-4 p-2 rounded-2xl hover:bg-gray-200",onClick:d,icon:nB}),f.jsxs("div",{className:"flex flex-col justify-between items-center  md:h-[450px] md:w-[300px] text-center md:p-8 md:border-r border-gray-300",children:[f.jsx("h2",{className:"text-3xl",children:l.name}),f.jsx("h1",{className:"text-6xl",children:l.price}),f.jsxs("div",{className:"hidden md:block",children:[f.jsx("p",{children:l.classes}),l.bonus&&f.jsx("p",{children:l.bonus})]})]}),i?f.jsxs("div",{className:"md:w-[70%]flex flex-col items-center pl-4",children:[f.jsx("h1",{className:"hidden md:block text-3xl text-center mb-6",children:"Finaliza tu inscripcion!"}),f.jsx(t8,{plan:l.plan,success:t,setSuccess:e,loading:n,setLoading:r})]}):f.jsx(n8,{schedule:i,setSchedule:s,pricingStructure:l})]})})]})}function i8(){const{signup:t,createUserDoc:e}=Xt(),[n,r]=A.useState(""),[i,s]=A.useState(!1),o=Mi(),a=async l=>{l.preventDefault(),s(!0);const u=l.target.email.value,c=l.target.password.value,d=l.target.passwordConfirm.value;if(c!=d)return s(!1),r("Passwords do not match");try{r(""),t(u,c),e(u),o("/pricing")}catch{r("Failed to create account"),s(!1)}s(!1)};return f.jsxs("div",{children:[i&&f.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:f.jsx(le,{className:"fixed top-1/2 text-6xl",icon:Oa,spinPulse:!0})}),f.jsxs("div",{className:"flex flex-col items-center  pt-12 pb-2 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[f.jsxs("div",{className:"mb-8",children:[f.jsx("h2",{className:"text-center mb-14 text-4xl",children:"Registrarse"}),n&&f.jsxs("div",{className:"text-lg flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-4",children:[f.jsx(le,{className:"mr-4",icon:op}),f.jsx("h1",{children:n}),f.jsx(le,{className:"ml-6 lg:ml-[100px]",onClick:()=>r(""),icon:ju})]}),f.jsxs("form",{onSubmit:a,children:[f.jsxs("div",{className:"flex flex-col",children:[f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Correo Electronico"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",required:!0})]})}),f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"password",required:!0})]})}),f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Confirmar Contraseña"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"passwordConfirm",required:!0})]})})]}),f.jsx("button",{disabled:i,className:"w-full bg-blue-200 hover:bg-blue-300 rounded-lg h-14",children:"Registrarse"})]})]}),f.jsxs("div",{className:"mb-2 text-xl",children:["¿Ya tienes cuenta?",f.jsx(fe,{className:"text-blue-600 hover:border-b border-blue-600/20 ",to:"/login",children:"Login"})]})]})]})}function s8(){return f.jsx("div",{children:f.jsx(i8,{})})}function o8(){const{login:t}=Xt(),[e,n]=A.useState(""),[r,i]=A.useState(!1),s=Mi(),o=async a=>{a.preventDefault(),i(!0);const l=a.target.email.value,u=a.target.password.value;try{n(""),t(l,u),s("/account")}catch{n("El nombre de usuario y la contraseña no coinciden.")}i(!1)};return f.jsxs("div",{children:[r&&f.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:f.jsx(le,{className:"fixed top-1/2 text-6xl",icon:Oa,spinPulse:!0})}),f.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[f.jsxs("div",{className:"mb-8",children:[f.jsx("h2",{className:"text-center mb-14 text-4xl ",children:"Iniciar Sesión"}),e&&f.jsxs("div",{className:"text-sm sm:text-lg flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-4 max-w-[330px] sm:max-w-[400px]",children:[f.jsx(le,{className:"mr-4",icon:op}),f.jsx("h1",{children:e}),f.jsx(le,{className:"ml-6 lg:ml-[10px]",onClick:()=>n(""),icon:ju})]}),f.jsxs("form",{onSubmit:o,children:[f.jsxs("div",{className:"flex flex-col",children:[f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Correo Electronico"}),f.jsx("input",{className:" border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",required:!0})]})}),f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"password",required:!0})]})})]}),f.jsx("button",{disabled:r,className:"w-full bg-blue-200 hover:bg-blue-300 rounded-lg h-14",children:"Iniciar Sesión"})]})]}),f.jsxs("div",{className:"mb-2 text-xl",children:[f.jsx("strong",{children:"¿No Tienes Cuenta? "}),f.jsx(fe,{className:"text-blue-600 hover:border-b border-blue-600/20",to:"/signup",children:"Registrarse"})]}),f.jsx("div",{className:"text-lg text-blue-600 hover:border-b border-blue-600/20",children:f.jsx(fe,{to:"/forgot-password",children:"¿Olvidaste tu contraseña?"})})]})]})}var a8={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function l8(){const[t,e]=A.useState(""),{currentUser:n,subscribed:r,logout:i,data:s}=Xt(),o=Mi(),a=async()=>{e("");try{i(),o("/login")}catch{e("Failed to log out")}};return f.jsxs("div",{className:"fixed z-0 top-24 text-2xl md:text-3xl lg:bg-white lg:rounded-2xl lg:p-6",children:[f.jsxs("div",{className:"bg-blue-200 max-w-[640px] lg:rounded-2xl rounded-bl-2xl rounded-br-2xl mb-5 p-6 pl-10 w-[100vw] p-5",children:[f.jsx("h1",{className:"text-lg md:text-xl border-b border-black/30 mb-4",children:"Tu Cuenta"}),t&&f.jsx("h1",{children:t}),n&&f.jsx("h1",{className:"mb-4",children:n.email}),r?f.jsxs("div",{className:"flex items-center",children:[f.jsx(le,{icon:Lw}),f.jsx("h1",{className:"text-xl md:text-2xl pl-5",children:s&&s.subscriptionType})]}):f.jsx("div",{className:"text-blue-600 text-lg",children:f.jsx(fe,{to:"/pricing",children:"Hazte estudiante hoy"})})]}),f.jsxs("div",{className:"p-2 lg:p-8",children:[f.jsx(fe,{to:"/update-profile",children:f.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 p-4",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx(le,{icon:a8}),f.jsx("h1",{className:"pl-5",children:"Actualizar Correo"})]}),f.jsx("h1",{className:"text-3xl",children:">"})]})}),f.jsx(fe,{to:"/change-password",children:f.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300  p-4",children:[f.jsxs("div",{className:"flex items-center ",children:[f.jsx(le,{icon:tB}),f.jsx("h1",{className:"pl-5",children:"Cambiar Contraseña"})]}),f.jsx("h1",{className:"text-3xl",children:">"})]})}),r&&f.jsx(fe,{to:"/manage-subscription",children:f.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 p-4",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx(le,{icon:rB}),f.jsx("h1",{className:"pl-5",children:"Administrar Subscripción"})]}),f.jsx("h1",{className:"text-3xl",children:">"})]})}),f.jsxs("div",{onClick:a,className:"flex justify-between items-center p-4 hover:cursor-pointer",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx(le,{icon:X9}),f.jsx("h1",{className:"pl-5",children:"Cerrar Sesión"})]}),f.jsx("h1",{className:"text-3xl",children:"x"})]})]})]})}function io({children:t}){const{currentUser:e,loading:n}=Xt();if(n==!1)return e?t:f.jsx(CD,{to:"/signup"})}function u8(){const{resetPassword:t}=Xt(),[e,n]=A.useState(""),[r,i]=A.useState(!1),[s,o]=A.useState(""),a=async l=>{l.preventDefault(),o("");const u=l.target.email.value;try{n(""),i(!0),t(u),o("Email sent, check your inbox to reset password.")}catch{n("Failed to reset password")}i(!1)};return f.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[f.jsxs("div",{className:"mb-8",children:[f.jsx("h2",{className:"text-center mb-14 text-3xl",children:"Restablecer Contraseña"}),e&&f.jsx("h1",{children:e}),s&&f.jsx("h1",{children:s}),f.jsxs("form",{onSubmit:a,children:[f.jsx("fieldset",{className:"mb-6 flex flex-col",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Correo Electronico"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",required:!0})]})}),f.jsx("button",{disabled:r,className:"w-full bg-blue-200 rounded-lg h-14",children:"Restablecer Contraseña"})]})]}),f.jsxs("div",{className:"mb-2 text-xl",children:[f.jsx("strong",{children:"¿No Tienes Cuenta? "}),f.jsx(fe,{className:"text-blue-600 ",to:"/signup",children:"Registrarse"})]})]})}function c8(){const{currentUser:t,logout:e,updateEmail:n}=Xt(),[r,i]=A.useState(""),[s,o]=A.useState(!1),[a,l]=A.useState(""),u=async c=>{c.preventDefault(),o(!0),i(""),l("");const d=c.target.email.value;if(t&&d!=t.email)try{n(d),l("Por favor dirigete al inbox para verificar tu nuevo correo y completar la actualizacion")}catch{i("Failed to update email"),console.log("Error",r)}o(!1)};return f.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[s&&f.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:f.jsx(le,{className:"fixed top-1/2 text-6xl",icon:Oa,spinPulse:!0})}),a?f.jsxs("div",{children:[f.jsx("h1",{className:"text-center text-lg mb-6",children:a}),f.jsx(fe,{className:"w-full",to:"/login",children:f.jsx("button",{onClick:async()=>await e(),className:"w-full bg-blue-200 rounded-lg h-14",children:"Iniciar Sesion"})})]}):f.jsxs("div",{children:[f.jsxs("div",{children:[f.jsx("h2",{className:"text-center mb-14 text-4xl ",children:"Actualizar Correo"}),a&&f.jsx("h1",{children:a}),r&&f.jsx("h1",{children:r}),f.jsxs("form",{onSubmit:u,children:[f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Email"}),t&&t.email&&f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",defaultValue:t.email})]})}),f.jsxs("div",{className:"flex justify-between",children:[f.jsx(fe,{className:"w-[48%]",to:"/account",children:f.jsx("button",{className:"w-full bg-blue-200 rounded-lg h-14",children:"Cancelar"})}),f.jsx("button",{className:"w-[48%] bg-blue-200 rounded-lg h-14",disabled:s,children:"Actualizar"})]})]})]}),f.jsx("div",{})]})]})}function d8(){const{data:t}=Xt();return f.jsxs("div",{className:"bg-white rounded-xl p-10 flex flex-col items-center",children:[f.jsx("h1",{className:"text-3xl mb-4 border-b border-gray-300 p-2",children:"Tus Clases"}),f.jsxs("div",{className:"flex items-center text-2xl mb-4",children:[f.jsx(le,{icon:Lw}),t&&f.jsx("h1",{className:"text-xl md:text-2xl pl-8",children:t.subscriptionType})]}),t&&f.jsx("h3",{className:"mb-4",children:t.schedule}),f.jsx("a",{href:"https://us06web.zoom.us/j/88265664418?pwd=Y1VQY2ZuVHVnMVNQSng5eUw3N1FUUT09",target:"_blank",rel:"noopener noreferrer",children:f.jsx("button",{className:"w-full bg-blue-200 hover:bg-blue-300 rounded-lg text-xl h-14 p-4",children:"Entrar la Clase"})})]})}function nT(t){const e=new Date(t*1e3),n=e.getMonth()+1,r=e.getDate(),i=e.getFullYear();return`${r}/${n}/${i}`}const h8=()=>{const{currentUser:t,subscriptionId:e,data:n,getDataEffect:r,setGetDataEffect:i}=Xt(),[s,o]=A.useState("");if(!t||!t.email)return;const a=_n.firestore().collection("Users").doc(t.email),[l,u]=A.useState(),[c,d]=A.useState(!1),[h,p]=A.useState(""),[_,v]=A.useState(!1),w=async()=>{o(""),p(""),v(!0),d(!1);try{const S=await Ae.post("http://localhost:4000/cancel-subscription",{subscriptionId:e}),x=S.data.cancelAt;console.log(x),S.data&&(console.log(S.data.message),a.update({cancelAt:x})),o("Subscripcion se cancelo con exito")}catch{console.log(e),console.log("Error while deleting"),p("Occurio un error, no se pudo cancelar")}v(!1),i(!r)},g=async()=>{o(""),p(""),v(!0),d(!1);try{await Ae.post("https://english-site-server.onrender.com/resume-subscription",{subscriptionId:e}),a.update({cancelAt:null})}catch(S){console.log(S),p("Ocurrio un error, no se pudo reanudar")}o("Subscripcion se reunudo con exito"),v(!1),i(!r)},m=async()=>{try{const S=await Ae.post("https://english-site-server.onrender.com/retrieve-data",{subscriptionId:e});u(S.data.subscription)}catch(S){console.log(S)}},y=async S=>{o(""),p(""),v(!0);try{const C=(await Ae.post("https://english-site-server.onrender.com/update-subscription",{subscriptionId:e,subscriptionItemId:n?n.subscriptionItemId:"",plan:S})).data.subscriptionType;a.update({subscriptionType:C}),console.log("Subscription was changed successfully"),o(`Subscripcion se actualizo a ${C} con exito`)}catch(x){console.log(x),p("There was an error while updating subscription")}d(!1),v(!1)},E=()=>{d(!c)};return A.useEffect(()=>{m()},[e]),f.jsxs("div",{className:"p-4 sm:bg-white rounded-lg mb-12",children:[_&&f.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:f.jsx(le,{className:"fixed top-1/2 text-6xl",icon:Oa,spinPulse:!0})}),f.jsxs("div",{className:"flex flex-col items-center",children:[s&&f.jsxs("div",{className:"flex items-center bg-green-200 text-green-500 border border-green-500 w-full rounded-md p-4 h-16 mb-5",children:[f.jsx(le,{className:"mr-4",icon:eB}),f.jsx("h1",{children:s}),f.jsx(le,{className:"ml-4 lg:ml-[600px]",onClick:()=>o(""),icon:ju})]}),h&&f.jsxs("div",{className:"flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-5",children:[f.jsx(le,{className:"mr-4",icon:op}),f.jsx("h1",{children:h}),f.jsx(le,{className:"ml-4 lg:ml-[600px]",onClick:()=>p(""),icon:ju})]}),f.jsx("h1",{className:"text-[23px] border-b border-gray-300 mb-4 text-center",children:"Administrar Subscripcion"}),n&&f.jsxs("div",{className:"flex text-[20px]",children:[f.jsx(le,{icon:Lw}),f.jsx("h1",{className:"ml-4",children:n.subscriptionType})]}),n&&!n.cancelAt&&l&&f.jsxs("h1",{className:"text-sm mb-4",children:["Tu subscripcion se renovara el"," ",nT(l.current_period_end)]}),n&&n.cancelAt&&f.jsxs("h1",{className:"text-sm mb-4",children:["Tu subscripcion se cancelara el ",nT(n.cancelAt)]}),f.jsxs("div",{className:" sm:bg-gray-100/50  w-full rounded-lg lg:hidden",children:[n&&!n.cancelAt&&f.jsxs("div",{className:"flex justify-between w-full p-4",onClick:E,children:[f.jsx("h1",{children:"Cambiar Plan"}),c?f.jsx(le,{icon:sB}):f.jsx(le,{icon:iB})]}),c&&f.jsx(ly,{handleChangeSubscription:y,manageSubscriptionPage:!0})]}),f.jsx("div",{className:"hidden bg-gray-100/50 lg:block rounded-lg p-2",children:f.jsx(ly,{handleChangeSubscription:y,manageSubscriptionPage:!0})}),n&&!n.cancelAt&&f.jsx("button",{className:"p-2 bg-red-400 rounded-lg h-10 m-4",onClick:w,children:"Cancel Subscription"}),n&&n.cancelAt&&f.jsx("button",{className:"p-2 bg-blue-200 hover:bg-blue-300 rounded-lg h-10 m-4",onClick:g,children:"Reanudar Subscripcion"})]})]})};function f8(){const{login:t,currentUser:e,updatePassword:n}=Xt(),[r,i]=A.useState(""),[s,o]=A.useState(!1),a=Mi(),l=async u=>{if(u.preventDefault(),!e||!e.email)return;const c=e.email,d=u.target.password.value,h=u.target.passwordNew.value,p=u.target.confirmPassword.value;if(h!=p)return i("Passwords do not match");try{i(""),o(!0),t(c,d),n(h),a("/account")}catch{i("Failed to log in")}o(!1)};return f.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[s&&f.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:f.jsx(le,{className:"fixed top-1/2 text-6xl",icon:Oa,spinPulse:!0})}),f.jsxs("div",{className:"mb-8",children:[f.jsx("h2",{className:"text-center mb-14 text-4xl ",children:"Cambiar Contraseña"}),r&&f.jsx("h1",{children:r}),f.jsxs("form",{onSubmit:l,children:[f.jsxs("div",{className:"flex flex-col",children:[f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{className:"block text-left",children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña Actual"}),f.jsx("input",{className:" border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"password",required:!0})]})}),f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña Nueva"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"passwordNew",required:!0})]})}),f.jsx("fieldset",{className:"mb-6",children:f.jsxs("label",{children:[f.jsx("h1",{className:"mb-2 text-xl",children:"Confirmar Contraseña Nueva"}),f.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"confirmPassword",required:!0})]})})]}),f.jsx("button",{disabled:s,className:"w-full bg-blue-200 rounded-lg h-14",children:"Cambiar Contraseña"})]})]}),f.jsx("div",{className:"text-lg text-blue-600",children:f.jsx(fe,{to:"/forgot-password",children:"¿Olvidaste tu contraseña?"})})]})}function p8(){return f.jsx(f.Fragment,{children:f.jsxs(Y6,{children:[f.jsx(aB,{}),f.jsx("div",{className:" pt-28 flex justify-center align-center ",children:f.jsxs(ND,{children:[f.jsx(Zt,{path:"/",element:f.jsx(J6,{})}),f.jsx(Zt,{path:"/pricing",element:f.jsx(X6,{})}),f.jsx(Zt,{path:"/about",element:f.jsx(e$,{})}),f.jsx(Zt,{path:"/payment",element:f.jsx(io,{children:f.jsx(r8,{})})}),f.jsx(Zt,{path:"/signup",element:f.jsx(s8,{})}),f.jsx(Zt,{path:"/login",element:f.jsx(o8,{})}),f.jsx(Zt,{path:"/account",element:f.jsx(io,{children:f.jsx(l8,{})})}),f.jsx(Zt,{path:"/update-profile",element:f.jsx(io,{children:f.jsx(c8,{})})}),f.jsx(Zt,{path:"/forgot-password",element:f.jsx(u8,{})}),f.jsx(Zt,{path:"/dashboard",element:f.jsx(io,{children:f.jsx(d8,{})})}),f.jsx(Zt,{path:"/manage-subscription",element:f.jsx(io,{children:f.jsx(h8,{})})}),f.jsx(Zt,{path:"/change-password",element:f.jsx(io,{children:f.jsx(f8,{})})})]})})]})})}_m.createRoot(document.getElementById("root")).render(f.jsx(ee.StrictMode,{children:f.jsx(FD,{children:f.jsx(p8,{})})}));
