function gC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function pT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mT={exports:{}},Qh={},gT={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=Symbol.for("react.element"),yC=Symbol.for("react.portal"),vC=Symbol.for("react.fragment"),_C=Symbol.for("react.strict_mode"),wC=Symbol.for("react.profiler"),EC=Symbol.for("react.provider"),IC=Symbol.for("react.context"),TC=Symbol.for("react.forward_ref"),bC=Symbol.for("react.suspense"),SC=Symbol.for("react.memo"),xC=Symbol.for("react.lazy"),gw=Symbol.iterator;function AC(t){return t===null||typeof t!="object"?null:(t=gw&&t[gw]||t["@@iterator"],typeof t=="function"?t:null)}var yT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vT=Object.assign,_T={};function Ta(t,e,n){this.props=t,this.context=e,this.refs=_T,this.updater=n||yT}Ta.prototype.isReactComponent={};Ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wT(){}wT.prototype=Ta.prototype;function Sy(t,e,n){this.props=t,this.context=e,this.refs=_T,this.updater=n||yT}var xy=Sy.prototype=new wT;xy.constructor=Sy;vT(xy,Ta.prototype);xy.isPureReactComponent=!0;var yw=Array.isArray,ET=Object.prototype.hasOwnProperty,Ay={current:null},IT={key:!0,ref:!0,__self:!0,__source:!0};function TT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ET.call(e,r)&&!IT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ku,type:t,key:s,ref:o,props:i,_owner:Ay.current}}function PC(t,e){return{$$typeof:Ku,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Py(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ku}function RC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vw=/\/+/g;function xp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?RC(""+t.key):e.toString(36)}function Id(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ku:case yC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xp(o,0):r,yw(i)?(n="",t!=null&&(n=t.replace(vw,"$&/")+"/"),Id(i,e,n,"",function(c){return c})):i!=null&&(Py(i)&&(i=PC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xp(s,a);o+=Id(s,e,n,l,i)}else if(l=AC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xp(s,a++),o+=Id(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bc(t,e,n){if(t==null)return t;var r=[],i=0;return Id(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Td={transition:null},CC={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Td,ReactCurrentOwner:Ay};function bT(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:Bc,forEach:function(t,e,n){Bc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bc(t,function(){e++}),e},toArray:function(t){return Bc(t,function(e){return e})||[]},only:function(t){if(!Py(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Ta;le.Fragment=vC;le.Profiler=wC;le.PureComponent=Sy;le.StrictMode=_C;le.Suspense=bC;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CC;le.act=bT;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ay.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ET.call(e,l)&&!IT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ku,type:t.type,key:i,ref:s,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:IC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:EC,_context:t},t.Consumer=t};le.createElement=TT;le.createFactory=function(t){var e=TT.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:TC,render:t}};le.isValidElement=Py;le.lazy=function(t){return{$$typeof:xC,_payload:{_status:-1,_result:t},_init:kC}};le.memo=function(t,e){return{$$typeof:SC,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Td.transition;Td.transition={};try{t()}finally{Td.transition=e}};le.unstable_act=bT;le.useCallback=function(t,e){return Qt.current.useCallback(t,e)};le.useContext=function(t){return Qt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};le.useEffect=function(t,e){return Qt.current.useEffect(t,e)};le.useId=function(){return Qt.current.useId()};le.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Qt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};le.useRef=function(t){return Qt.current.useRef(t)};le.useState=function(t){return Qt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Qt.current.useTransition()};le.version="18.3.1";gT.exports=le;var U=gT.exports;const ye=pT(U),NC=gC({__proto__:null,default:ye},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DC=U,OC=Symbol.for("react.element"),VC=Symbol.for("react.fragment"),LC=Object.prototype.hasOwnProperty,MC=DC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FC={key:!0,ref:!0,__self:!0,__source:!0};function ST(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LC.call(e,r)&&!FC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OC,type:t,key:s,ref:o,props:i,_owner:MC.current}}Qh.Fragment=VC;Qh.jsx=ST;Qh.jsxs=ST;mT.exports=Qh;var g=mT.exports,Tm={},xT={exports:{}},_n={},AT={exports:{}},PT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,re){var ie=K.length;K.push(re);e:for(;0<ie;){var de=ie-1>>>1,Ie=K[de];if(0<i(Ie,re))K[de]=re,K[ie]=Ie,ie=de;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var re=K[0],ie=K.pop();if(ie!==re){K[0]=ie;e:for(var de=0,Ie=K.length,Ze=Ie>>>1;de<Ze;){var pr=2*(de+1)-1,mr=K[pr],gr=pr+1,yr=K[gr];if(0>i(mr,ie))gr<Ie&&0>i(yr,mr)?(K[de]=yr,K[gr]=ie,de=gr):(K[de]=mr,K[pr]=ie,de=pr);else if(gr<Ie&&0>i(yr,ie))K[de]=yr,K[gr]=ie,de=gr;else break e}}return re}function i(K,re){var ie=K.sortIndex-re.sortIndex;return ie!==0?ie:K.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,p=3,y=!1,I=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(K){for(var re=n(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=K)r(c),re.sortIndex=re.expirationTime,e(l,re);else break;re=n(c)}}function N(K){if(b=!1,T(K),!I)if(n(l)!==null)I=!0,es(L);else{var re=n(c);re!==null&&pt(N,re.startTime-K)}}function L(K,re){I=!1,b&&(b=!1,E(_),_=-1),y=!0;var ie=p;try{for(T(re),h=n(l);h!==null&&(!(h.expirationTime>re)||K&&!k());){var de=h.callback;if(typeof de=="function"){h.callback=null,p=h.priorityLevel;var Ie=de(h.expirationTime<=re);re=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),T(re)}else r(l);h=n(l)}if(h!==null)var Ze=!0;else{var pr=n(c);pr!==null&&pt(N,pr.startTime-re),Ze=!1}return Ze}finally{h=null,p=ie,y=!1}}var F=!1,S=null,_=-1,x=5,A=-1;function k(){return!(t.unstable_now()-A<x)}function C(){if(S!==null){var K=t.unstable_now();A=K;var re=!0;try{re=S(!0,K)}finally{re?P():(F=!1,S=null)}}else F=!1}var P;if(typeof w=="function")P=function(){w(C)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,$e=Ft.port2;Ft.port1.onmessage=C,P=function(){$e.postMessage(null)}}else P=function(){R(C,0)};function es(K){S=K,F||(F=!0,P())}function pt(K,re){_=R(function(){K(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){I||y||(I=!0,es(L))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(K){switch(p){case 1:case 2:case 3:var re=3;break;default:re=p}var ie=p;p=re;try{return K()}finally{p=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ie=p;p=K;try{return re()}finally{p=ie}},t.unstable_scheduleCallback=function(K,re,ie){var de=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?de+ie:de):ie=de,K){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ie+Ie,K={id:d++,callback:re,priorityLevel:K,startTime:ie,expirationTime:Ie,sortIndex:-1},ie>de?(K.sortIndex=ie,e(c,K),n(l)===null&&K===n(c)&&(b?(E(_),_=-1):b=!0,pt(N,ie-de))):(K.sortIndex=Ie,e(l,K),I||y||(I=!0,es(L))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var re=p;return function(){var ie=p;p=re;try{return K.apply(this,arguments)}finally{p=ie}}}})(PT);AT.exports=PT;var jC=AT.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UC=U,yn=jC;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RT=new Set,tu={};function Qs(t,e){Yo(t,e),Yo(t+"Capture",e)}function Yo(t,e){for(tu[t]=e,t=0;t<e.length;t++)RT.add(e[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bm=Object.prototype.hasOwnProperty,BC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_w={},ww={};function zC(t){return bm.call(ww,t)?!0:bm.call(_w,t)?!1:BC.test(t)?ww[t]=!0:(_w[t]=!0,!1)}function $C(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qC(t,e,n,r){if(e===null||typeof e>"u"||$C(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pt[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pt[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pt[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ry=/[\-:]([a-z])/g;function ky(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ry,ky);Pt[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ry,ky);Pt[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ry,ky);Pt[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pt[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cy(t,e,n,r){var i=Pt.hasOwnProperty(e)?Pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qC(e,n,i,r)&&(n=null),r||i===null?zC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=UC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zc=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),Io=Symbol.for("react.fragment"),Ny=Symbol.for("react.strict_mode"),Sm=Symbol.for("react.profiler"),kT=Symbol.for("react.provider"),CT=Symbol.for("react.context"),Dy=Symbol.for("react.forward_ref"),xm=Symbol.for("react.suspense"),Am=Symbol.for("react.suspense_list"),Oy=Symbol.for("react.memo"),ri=Symbol.for("react.lazy"),NT=Symbol.for("react.offscreen"),Ew=Symbol.iterator;function il(t){return t===null||typeof t!="object"?null:(t=Ew&&t[Ew]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,Ap;function Tl(t){if(Ap===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ap=e&&e[1]||""}return`
`+Ap+t}var Pp=!1;function Rp(t,e){if(!t||Pp)return"";Pp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pp=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Tl(t):""}function WC(t){switch(t.tag){case 5:return Tl(t.type);case 16:return Tl("Lazy");case 13:return Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 2:case 15:return t=Rp(t.type,!1),t;case 11:return t=Rp(t.type.render,!1),t;case 1:return t=Rp(t.type,!0),t;default:return""}}function Pm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Io:return"Fragment";case Eo:return"Portal";case Sm:return"Profiler";case Ny:return"StrictMode";case xm:return"Suspense";case Am:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case CT:return(t.displayName||"Context")+".Consumer";case kT:return(t._context.displayName||"Context")+".Provider";case Dy:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oy:return e=t.displayName||null,e!==null?e:Pm(t.type)||"Memo";case ri:e=t._payload,t=t._init;try{return Pm(t(e))}catch{}}return null}function GC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pm(e);case 8:return e===Ny?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function DT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HC(t){var e=DT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $c(t){t._valueTracker||(t._valueTracker=HC(t))}function OT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=DT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rm(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Iw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function VT(t,e){e=e.checked,e!=null&&Cy(t,"checked",e,!1)}function km(t,e){VT(t,e);var n=Si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cm(t,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cm(t,e,n){(e!=="number"||Xd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bl=Array.isArray;function Mo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Nm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(bl(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Si(n)}}function LT(t,e){var n=Si(e.value),r=Si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Sw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function MT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?MT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qc,FT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qc=qc||document.createElement("div"),qc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nu(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KC=["Webkit","ms","Moz","O"];Object.keys(Vl).forEach(function(t){KC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vl[e]=Vl[t]})});function jT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vl.hasOwnProperty(t)&&Vl[t]?(""+e).trim():e+"px"}function UT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QC=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Om(t,e){if(e){if(QC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Vm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lm=null;function Vy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mm=null,Fo=null,jo=null;function xw(t){if(t=Ju(t)){if(typeof Mm!="function")throw Error($(280));var e=t.stateNode;e&&(e=ef(e),Mm(t.stateNode,t.type,e))}}function BT(t){Fo?jo?jo.push(t):jo=[t]:Fo=t}function zT(){if(Fo){var t=Fo,e=jo;if(jo=Fo=null,xw(t),e)for(t=0;t<e.length;t++)xw(e[t])}}function $T(t,e){return t(e)}function qT(){}var kp=!1;function WT(t,e,n){if(kp)return t(e,n);kp=!0;try{return $T(t,e,n)}finally{kp=!1,(Fo!==null||jo!==null)&&(qT(),zT())}}function ru(t,e){var n=t.stateNode;if(n===null)return null;var r=ef(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Fm=!1;if(Rr)try{var sl={};Object.defineProperty(sl,"passive",{get:function(){Fm=!0}}),window.addEventListener("test",sl,sl),window.removeEventListener("test",sl,sl)}catch{Fm=!1}function YC(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ll=!1,Zd=null,eh=!1,jm=null,JC={onError:function(t){Ll=!0,Zd=t}};function XC(t,e,n,r,i,s,o,a,l){Ll=!1,Zd=null,YC.apply(JC,arguments)}function ZC(t,e,n,r,i,s,o,a,l){if(XC.apply(this,arguments),Ll){if(Ll){var c=Zd;Ll=!1,Zd=null}else throw Error($(198));eh||(eh=!0,jm=c)}}function Ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function GT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Aw(t){if(Ys(t)!==t)throw Error($(188))}function e2(t){var e=t.alternate;if(!e){if(e=Ys(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Aw(i),t;if(s===r)return Aw(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function HT(t){return t=e2(t),t!==null?KT(t):null}function KT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=KT(t);if(e!==null)return e;t=t.sibling}return null}var QT=yn.unstable_scheduleCallback,Pw=yn.unstable_cancelCallback,t2=yn.unstable_shouldYield,n2=yn.unstable_requestPaint,et=yn.unstable_now,r2=yn.unstable_getCurrentPriorityLevel,Ly=yn.unstable_ImmediatePriority,YT=yn.unstable_UserBlockingPriority,th=yn.unstable_NormalPriority,i2=yn.unstable_LowPriority,JT=yn.unstable_IdlePriority,Yh=null,sr=null;function s2(t){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(Yh,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:l2,o2=Math.log,a2=Math.LN2;function l2(t){return t>>>=0,t===0?32:31-(o2(t)/a2|0)|0}var Wc=64,Gc=4194304;function Sl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Sl(a):(s&=o,s!==0&&(r=Sl(s)))}else o=n&~i,o!==0?r=Sl(o):s!==0&&(r=Sl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function u2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c2(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Un(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=u2(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Um(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function XT(){var t=Wc;return Wc<<=1,!(Wc&4194240)&&(Wc=64),t}function Cp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function d2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Un(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function My(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Un(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function ZT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eb,Fy,tb,nb,rb,Bm=!1,Hc=[],pi=null,mi=null,gi=null,iu=new Map,su=new Map,si=[],h2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rw(t,e){switch(t){case"focusin":case"focusout":pi=null;break;case"dragenter":case"dragleave":mi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":iu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(e.pointerId)}}function ol(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ju(e),e!==null&&Fy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function f2(t,e,n,r,i){switch(e){case"focusin":return pi=ol(pi,t,e,n,r,i),!0;case"dragenter":return mi=ol(mi,t,e,n,r,i),!0;case"mouseover":return gi=ol(gi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return iu.set(s,ol(iu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,su.set(s,ol(su.get(s)||null,t,e,n,r,i)),!0}return!1}function ib(t){var e=ms(t.target);if(e!==null){var n=Ys(e);if(n!==null){if(e=n.tag,e===13){if(e=GT(n),e!==null){t.blockedOn=e,rb(t.priority,function(){tb(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lm=r,n.target.dispatchEvent(r),Lm=null}else return e=Ju(n),e!==null&&Fy(e),t.blockedOn=n,!1;e.shift()}return!0}function kw(t,e,n){bd(t)&&n.delete(e)}function p2(){Bm=!1,pi!==null&&bd(pi)&&(pi=null),mi!==null&&bd(mi)&&(mi=null),gi!==null&&bd(gi)&&(gi=null),iu.forEach(kw),su.forEach(kw)}function al(t,e){t.blockedOn===e&&(t.blockedOn=null,Bm||(Bm=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,p2)))}function ou(t){function e(i){return al(i,t)}if(0<Hc.length){al(Hc[0],t);for(var n=1;n<Hc.length;n++){var r=Hc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pi!==null&&al(pi,t),mi!==null&&al(mi,t),gi!==null&&al(gi,t),iu.forEach(e),su.forEach(e),n=0;n<si.length;n++)r=si[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<si.length&&(n=si[0],n.blockedOn===null);)ib(n),n.blockedOn===null&&si.shift()}var Uo=jr.ReactCurrentBatchConfig,rh=!0;function m2(t,e,n,r){var i=we,s=Uo.transition;Uo.transition=null;try{we=1,jy(t,e,n,r)}finally{we=i,Uo.transition=s}}function g2(t,e,n,r){var i=we,s=Uo.transition;Uo.transition=null;try{we=4,jy(t,e,n,r)}finally{we=i,Uo.transition=s}}function jy(t,e,n,r){if(rh){var i=zm(t,e,n,r);if(i===null)Bp(t,e,r,ih,n),Rw(t,r);else if(f2(i,t,e,n,r))r.stopPropagation();else if(Rw(t,r),e&4&&-1<h2.indexOf(t)){for(;i!==null;){var s=Ju(i);if(s!==null&&eb(s),s=zm(t,e,n,r),s===null&&Bp(t,e,r,ih,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Bp(t,e,r,null,n)}}var ih=null;function zm(t,e,n,r){if(ih=null,t=Vy(r),t=ms(t),t!==null)if(e=Ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=GT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ih=t,null}function sb(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r2()){case Ly:return 1;case YT:return 4;case th:case i2:return 16;case JT:return 536870912;default:return 16}default:return 16}}var ui=null,Uy=null,Sd=null;function ob(){if(Sd)return Sd;var t,e=Uy,n=e.length,r,i="value"in ui?ui.value:ui.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sd=i.slice(t,1<r?1-r:void 0)}function xd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Kc(){return!0}function Cw(){return!1}function wn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Kc:Cw,this.isPropagationStopped=Cw,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kc)},persist:function(){},isPersistent:Kc}),e}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},By=wn(ba),Yu=ze({},ba,{view:0,detail:0}),y2=wn(Yu),Np,Dp,ll,Jh=ze({},Yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ll&&(ll&&t.type==="mousemove"?(Np=t.screenX-ll.screenX,Dp=t.screenY-ll.screenY):Dp=Np=0,ll=t),Np)},movementY:function(t){return"movementY"in t?t.movementY:Dp}}),Nw=wn(Jh),v2=ze({},Jh,{dataTransfer:0}),_2=wn(v2),w2=ze({},Yu,{relatedTarget:0}),Op=wn(w2),E2=ze({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),I2=wn(E2),T2=ze({},ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b2=wn(T2),S2=ze({},ba,{data:0}),Dw=wn(S2),x2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P2[t])?!!e[t]:!1}function zy(){return R2}var k2=ze({},Yu,{key:function(t){if(t.key){var e=x2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zy,charCode:function(t){return t.type==="keypress"?xd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C2=wn(k2),N2=ze({},Jh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ow=wn(N2),D2=ze({},Yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zy}),O2=wn(D2),V2=ze({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),L2=wn(V2),M2=ze({},Jh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F2=wn(M2),j2=[9,13,27,32],$y=Rr&&"CompositionEvent"in window,Ml=null;Rr&&"documentMode"in document&&(Ml=document.documentMode);var U2=Rr&&"TextEvent"in window&&!Ml,ab=Rr&&(!$y||Ml&&8<Ml&&11>=Ml),Vw=" ",Lw=!1;function lb(t,e){switch(t){case"keyup":return j2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ub(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function B2(t,e){switch(t){case"compositionend":return ub(e);case"keypress":return e.which!==32?null:(Lw=!0,Vw);case"textInput":return t=e.data,t===Vw&&Lw?null:t;default:return null}}function z2(t,e){if(To)return t==="compositionend"||!$y&&lb(t,e)?(t=ob(),Sd=Uy=ui=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ab&&e.locale!=="ko"?null:e.data;default:return null}}var $2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$2[t.type]:e==="textarea"}function cb(t,e,n,r){BT(r),e=sh(e,"onChange"),0<e.length&&(n=new By("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fl=null,au=null;function q2(t){Eb(t,0)}function Xh(t){var e=xo(t);if(OT(e))return t}function W2(t,e){if(t==="change")return e}var db=!1;if(Rr){var Vp;if(Rr){var Lp="oninput"in document;if(!Lp){var Fw=document.createElement("div");Fw.setAttribute("oninput","return;"),Lp=typeof Fw.oninput=="function"}Vp=Lp}else Vp=!1;db=Vp&&(!document.documentMode||9<document.documentMode)}function jw(){Fl&&(Fl.detachEvent("onpropertychange",hb),au=Fl=null)}function hb(t){if(t.propertyName==="value"&&Xh(au)){var e=[];cb(e,au,t,Vy(t)),WT(q2,e)}}function G2(t,e,n){t==="focusin"?(jw(),Fl=e,au=n,Fl.attachEvent("onpropertychange",hb)):t==="focusout"&&jw()}function H2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xh(au)}function K2(t,e){if(t==="click")return Xh(e)}function Q2(t,e){if(t==="input"||t==="change")return Xh(e)}function Y2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Y2;function lu(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bm.call(e,i)||!$n(t[i],e[i]))return!1}return!0}function Uw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bw(t,e){var n=Uw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uw(n)}}function fb(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fb(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pb(){for(var t=window,e=Xd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xd(t.document)}return e}function qy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J2(t){var e=pb(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fb(n.ownerDocument.documentElement,n)){if(r!==null&&qy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bw(n,s);var o=Bw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X2=Rr&&"documentMode"in document&&11>=document.documentMode,bo=null,$m=null,jl=null,qm=!1;function zw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qm||bo==null||bo!==Xd(r)||(r=bo,"selectionStart"in r&&qy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jl&&lu(jl,r)||(jl=r,r=sh($m,"onSelect"),0<r.length&&(e=new By("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bo)))}function Qc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var So={animationend:Qc("Animation","AnimationEnd"),animationiteration:Qc("Animation","AnimationIteration"),animationstart:Qc("Animation","AnimationStart"),transitionend:Qc("Transition","TransitionEnd")},Mp={},mb={};Rr&&(mb=document.createElement("div").style,"AnimationEvent"in window||(delete So.animationend.animation,delete So.animationiteration.animation,delete So.animationstart.animation),"TransitionEvent"in window||delete So.transitionend.transition);function Zh(t){if(Mp[t])return Mp[t];if(!So[t])return t;var e=So[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mb)return Mp[t]=e[n];return t}var gb=Zh("animationend"),yb=Zh("animationiteration"),vb=Zh("animationstart"),_b=Zh("transitionend"),wb=new Map,$w="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(t,e){wb.set(t,e),Qs(e,[t])}for(var Fp=0;Fp<$w.length;Fp++){var jp=$w[Fp],Z2=jp.toLowerCase(),eN=jp[0].toUpperCase()+jp.slice(1);Bi(Z2,"on"+eN)}Bi(gb,"onAnimationEnd");Bi(yb,"onAnimationIteration");Bi(vb,"onAnimationStart");Bi("dblclick","onDoubleClick");Bi("focusin","onFocus");Bi("focusout","onBlur");Bi(_b,"onTransitionEnd");Yo("onMouseEnter",["mouseout","mouseover"]);Yo("onMouseLeave",["mouseout","mouseover"]);Yo("onPointerEnter",["pointerout","pointerover"]);Yo("onPointerLeave",["pointerout","pointerover"]);Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tN=new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));function qw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZC(r,e,void 0,t),t.currentTarget=null}function Eb(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qw(i,a,c),s=l}}}if(eh)throw t=jm,eh=!1,jm=null,t}function Pe(t,e){var n=e[Qm];n===void 0&&(n=e[Qm]=new Set);var r=t+"__bubble";n.has(r)||(Ib(e,t,2,!1),n.add(r))}function Up(t,e,n){var r=0;e&&(r|=4),Ib(n,t,r,e)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function uu(t){if(!t[Yc]){t[Yc]=!0,RT.forEach(function(n){n!=="selectionchange"&&(tN.has(n)||Up(n,!1,t),Up(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yc]||(e[Yc]=!0,Up("selectionchange",!1,e))}}function Ib(t,e,n,r){switch(sb(e)){case 1:var i=m2;break;case 4:i=g2;break;default:i=jy}n=i.bind(null,e,n,t),i=void 0,!Fm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ms(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}WT(function(){var c=s,d=Vy(n),h=[];e:{var p=wb.get(t);if(p!==void 0){var y=By,I=t;switch(t){case"keypress":if(xd(n)===0)break e;case"keydown":case"keyup":y=C2;break;case"focusin":I="focus",y=Op;break;case"focusout":I="blur",y=Op;break;case"beforeblur":case"afterblur":y=Op;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Nw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=O2;break;case gb:case yb:case vb:y=I2;break;case _b:y=L2;break;case"scroll":y=y2;break;case"wheel":y=F2;break;case"copy":case"cut":case"paste":y=b2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ow}var b=(e&4)!==0,R=!b&&t==="scroll",E=b?p!==null?p+"Capture":null:p;b=[];for(var w=c,T;w!==null;){T=w;var N=T.stateNode;if(T.tag===5&&N!==null&&(T=N,E!==null&&(N=ru(w,E),N!=null&&b.push(cu(w,N,T)))),R)break;w=w.return}0<b.length&&(p=new y(p,I,null,n,d),h.push({event:p,listeners:b}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Lm&&(I=n.relatedTarget||n.fromElement)&&(ms(I)||I[kr]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(I=n.relatedTarget||n.toElement,y=c,I=I?ms(I):null,I!==null&&(R=Ys(I),I!==R||I.tag!==5&&I.tag!==6)&&(I=null)):(y=null,I=c),y!==I)){if(b=Nw,N="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=Ow,N="onPointerLeave",E="onPointerEnter",w="pointer"),R=y==null?p:xo(y),T=I==null?p:xo(I),p=new b(N,w+"leave",y,n,d),p.target=R,p.relatedTarget=T,N=null,ms(d)===c&&(b=new b(E,w+"enter",I,n,d),b.target=T,b.relatedTarget=R,N=b),R=N,y&&I)t:{for(b=y,E=I,w=0,T=b;T;T=lo(T))w++;for(T=0,N=E;N;N=lo(N))T++;for(;0<w-T;)b=lo(b),w--;for(;0<T-w;)E=lo(E),T--;for(;w--;){if(b===E||E!==null&&b===E.alternate)break t;b=lo(b),E=lo(E)}b=null}else b=null;y!==null&&Ww(h,p,y,b,!1),I!==null&&R!==null&&Ww(h,R,I,b,!0)}}e:{if(p=c?xo(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var L=W2;else if(Mw(p))if(db)L=Q2;else{L=H2;var F=G2}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=K2);if(L&&(L=L(t,c))){cb(h,L,n,d);break e}F&&F(t,p,c),t==="focusout"&&(F=p._wrapperState)&&F.controlled&&p.type==="number"&&Cm(p,"number",p.value)}switch(F=c?xo(c):window,t){case"focusin":(Mw(F)||F.contentEditable==="true")&&(bo=F,$m=c,jl=null);break;case"focusout":jl=$m=bo=null;break;case"mousedown":qm=!0;break;case"contextmenu":case"mouseup":case"dragend":qm=!1,zw(h,n,d);break;case"selectionchange":if(X2)break;case"keydown":case"keyup":zw(h,n,d)}var S;if($y)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else To?lb(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ab&&n.locale!=="ko"&&(To||_!=="onCompositionStart"?_==="onCompositionEnd"&&To&&(S=ob()):(ui=d,Uy="value"in ui?ui.value:ui.textContent,To=!0)),F=sh(c,_),0<F.length&&(_=new Dw(_,t,null,n,d),h.push({event:_,listeners:F}),S?_.data=S:(S=ub(n),S!==null&&(_.data=S)))),(S=U2?B2(t,n):z2(t,n))&&(c=sh(c,"onBeforeInput"),0<c.length&&(d=new Dw("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=S))}Eb(h,e)})}function cu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ru(t,n),s!=null&&r.unshift(cu(t,s,i)),s=ru(t,e),s!=null&&r.push(cu(t,s,i))),t=t.return}return r}function lo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ww(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ru(n,s),l!=null&&o.unshift(cu(n,l,a))):i||(l=ru(n,s),l!=null&&o.push(cu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nN=/\r\n?/g,rN=/\u0000|\uFFFD/g;function Gw(t){return(typeof t=="string"?t:""+t).replace(nN,`
`).replace(rN,"")}function Jc(t,e,n){if(e=Gw(e),Gw(t)!==e&&n)throw Error($(425))}function oh(){}var Wm=null,Gm=null;function Hm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Km=typeof setTimeout=="function"?setTimeout:void 0,iN=typeof clearTimeout=="function"?clearTimeout:void 0,Hw=typeof Promise=="function"?Promise:void 0,sN=typeof queueMicrotask=="function"?queueMicrotask:typeof Hw<"u"?function(t){return Hw.resolve(null).then(t).catch(oN)}:Km;function oN(t){setTimeout(function(){throw t})}function zp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ou(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ou(e)}function yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Sa=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Sa,du="__reactProps$"+Sa,kr="__reactContainer$"+Sa,Qm="__reactEvents$"+Sa,aN="__reactListeners$"+Sa,lN="__reactHandles$"+Sa;function ms(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kw(t);t!==null;){if(n=t[Qn])return n;t=Kw(t)}return e}t=n,n=t.parentNode}return null}function Ju(t){return t=t[Qn]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function ef(t){return t[du]||null}var Ym=[],Ao=-1;function zi(t){return{current:t}}function Ce(t){0>Ao||(t.current=Ym[Ao],Ym[Ao]=null,Ao--)}function Se(t,e){Ao++,Ym[Ao]=t.current,t.current=e}var xi={},Mt=zi(xi),sn=zi(!1),Rs=xi;function Jo(t,e){var n=t.type.contextTypes;if(!n)return xi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function on(t){return t=t.childContextTypes,t!=null}function ah(){Ce(sn),Ce(Mt)}function Qw(t,e,n){if(Mt.current!==xi)throw Error($(168));Se(Mt,e),Se(sn,n)}function Tb(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,GC(t)||"Unknown",i));return ze({},n,r)}function lh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xi,Rs=Mt.current,Se(Mt,t),Se(sn,sn.current),!0}function Yw(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Tb(t,e,Rs),r.__reactInternalMemoizedMergedChildContext=t,Ce(sn),Ce(Mt),Se(Mt,t)):Ce(sn),Se(sn,n)}var Er=null,tf=!1,$p=!1;function bb(t){Er===null?Er=[t]:Er.push(t)}function uN(t){tf=!0,bb(t)}function $i(){if(!$p&&Er!==null){$p=!0;var t=0,e=we;try{var n=Er;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Er=null,tf=!1}catch(i){throw Er!==null&&(Er=Er.slice(t+1)),QT(Ly,$i),i}finally{we=e,$p=!1}}return null}var Po=[],Ro=0,uh=null,ch=0,In=[],Tn=0,ks=null,Ir=1,Tr="";function os(t,e){Po[Ro++]=ch,Po[Ro++]=uh,uh=t,ch=e}function Sb(t,e,n){In[Tn++]=Ir,In[Tn++]=Tr,In[Tn++]=ks,ks=t;var r=Ir;t=Tr;var i=32-Un(r)-1;r&=~(1<<i),n+=1;var s=32-Un(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ir=1<<32-Un(e)+i|n<<i|r,Tr=s+t}else Ir=1<<s|n<<i|r,Tr=t}function Wy(t){t.return!==null&&(os(t,1),Sb(t,1,0))}function Gy(t){for(;t===uh;)uh=Po[--Ro],Po[Ro]=null,ch=Po[--Ro],Po[Ro]=null;for(;t===ks;)ks=In[--Tn],In[Tn]=null,Tr=In[--Tn],In[Tn]=null,Ir=In[--Tn],In[Tn]=null}var gn=null,pn=null,De=!1,Fn=null;function xb(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,pn=yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ks!==null?{id:Ir,overflow:Tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,pn=null,!0):!1;default:return!1}}function Jm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xm(t){if(De){var e=pn;if(e){var n=e;if(!Jw(t,e)){if(Jm(t))throw Error($(418));e=yi(n.nextSibling);var r=gn;e&&Jw(t,e)?xb(r,n):(t.flags=t.flags&-4097|2,De=!1,gn=t)}}else{if(Jm(t))throw Error($(418));t.flags=t.flags&-4097|2,De=!1,gn=t}}}function Xw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Xc(t){if(t!==gn)return!1;if(!De)return Xw(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hm(t.type,t.memoizedProps)),e&&(e=pn)){if(Jm(t))throw Ab(),Error($(418));for(;e;)xb(t,e),e=yi(e.nextSibling)}if(Xw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=gn?yi(t.stateNode.nextSibling):null;return!0}function Ab(){for(var t=pn;t;)t=yi(t.nextSibling)}function Xo(){pn=gn=null,De=!1}function Hy(t){Fn===null?Fn=[t]:Fn.push(t)}var cN=jr.ReactCurrentBatchConfig;function ul(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Zc(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zw(t){var e=t._init;return e(t._payload)}function Pb(t){function e(E,w){if(t){var T=E.deletions;T===null?(E.deletions=[w],E.flags|=16):T.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=Ei(E,w),E.index=0,E.sibling=null,E}function s(E,w,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<w?(E.flags|=2,w):T):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,T,N){return w===null||w.tag!==6?(w=Yp(T,E.mode,N),w.return=E,w):(w=i(w,T),w.return=E,w)}function l(E,w,T,N){var L=T.type;return L===Io?d(E,w,T.props.children,N,T.key):w!==null&&(w.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ri&&Zw(L)===w.type)?(N=i(w,T.props),N.ref=ul(E,w,T),N.return=E,N):(N=Dd(T.type,T.key,T.props,null,E.mode,N),N.ref=ul(E,w,T),N.return=E,N)}function c(E,w,T,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=Jp(T,E.mode,N),w.return=E,w):(w=i(w,T.children||[]),w.return=E,w)}function d(E,w,T,N,L){return w===null||w.tag!==7?(w=bs(T,E.mode,N,L),w.return=E,w):(w=i(w,T),w.return=E,w)}function h(E,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Yp(""+w,E.mode,T),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zc:return T=Dd(w.type,w.key,w.props,null,E.mode,T),T.ref=ul(E,null,w),T.return=E,T;case Eo:return w=Jp(w,E.mode,T),w.return=E,w;case ri:var N=w._init;return h(E,N(w._payload),T)}if(bl(w)||il(w))return w=bs(w,E.mode,T,null),w.return=E,w;Zc(E,w)}return null}function p(E,w,T,N){var L=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return L!==null?null:a(E,w,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case zc:return T.key===L?l(E,w,T,N):null;case Eo:return T.key===L?c(E,w,T,N):null;case ri:return L=T._init,p(E,w,L(T._payload),N)}if(bl(T)||il(T))return L!==null?null:d(E,w,T,N,null);Zc(E,T)}return null}function y(E,w,T,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(T)||null,a(w,E,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case zc:return E=E.get(N.key===null?T:N.key)||null,l(w,E,N,L);case Eo:return E=E.get(N.key===null?T:N.key)||null,c(w,E,N,L);case ri:var F=N._init;return y(E,w,T,F(N._payload),L)}if(bl(N)||il(N))return E=E.get(T)||null,d(w,E,N,L,null);Zc(w,N)}return null}function I(E,w,T,N){for(var L=null,F=null,S=w,_=w=0,x=null;S!==null&&_<T.length;_++){S.index>_?(x=S,S=null):x=S.sibling;var A=p(E,S,T[_],N);if(A===null){S===null&&(S=x);break}t&&S&&A.alternate===null&&e(E,S),w=s(A,w,_),F===null?L=A:F.sibling=A,F=A,S=x}if(_===T.length)return n(E,S),De&&os(E,_),L;if(S===null){for(;_<T.length;_++)S=h(E,T[_],N),S!==null&&(w=s(S,w,_),F===null?L=S:F.sibling=S,F=S);return De&&os(E,_),L}for(S=r(E,S);_<T.length;_++)x=y(S,E,_,T[_],N),x!==null&&(t&&x.alternate!==null&&S.delete(x.key===null?_:x.key),w=s(x,w,_),F===null?L=x:F.sibling=x,F=x);return t&&S.forEach(function(k){return e(E,k)}),De&&os(E,_),L}function b(E,w,T,N){var L=il(T);if(typeof L!="function")throw Error($(150));if(T=L.call(T),T==null)throw Error($(151));for(var F=L=null,S=w,_=w=0,x=null,A=T.next();S!==null&&!A.done;_++,A=T.next()){S.index>_?(x=S,S=null):x=S.sibling;var k=p(E,S,A.value,N);if(k===null){S===null&&(S=x);break}t&&S&&k.alternate===null&&e(E,S),w=s(k,w,_),F===null?L=k:F.sibling=k,F=k,S=x}if(A.done)return n(E,S),De&&os(E,_),L;if(S===null){for(;!A.done;_++,A=T.next())A=h(E,A.value,N),A!==null&&(w=s(A,w,_),F===null?L=A:F.sibling=A,F=A);return De&&os(E,_),L}for(S=r(E,S);!A.done;_++,A=T.next())A=y(S,E,_,A.value,N),A!==null&&(t&&A.alternate!==null&&S.delete(A.key===null?_:A.key),w=s(A,w,_),F===null?L=A:F.sibling=A,F=A);return t&&S.forEach(function(C){return e(E,C)}),De&&os(E,_),L}function R(E,w,T,N){if(typeof T=="object"&&T!==null&&T.type===Io&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case zc:e:{for(var L=T.key,F=w;F!==null;){if(F.key===L){if(L=T.type,L===Io){if(F.tag===7){n(E,F.sibling),w=i(F,T.props.children),w.return=E,E=w;break e}}else if(F.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===ri&&Zw(L)===F.type){n(E,F.sibling),w=i(F,T.props),w.ref=ul(E,F,T),w.return=E,E=w;break e}n(E,F);break}else e(E,F);F=F.sibling}T.type===Io?(w=bs(T.props.children,E.mode,N,T.key),w.return=E,E=w):(N=Dd(T.type,T.key,T.props,null,E.mode,N),N.ref=ul(E,w,T),N.return=E,E=N)}return o(E);case Eo:e:{for(F=T.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(E,w.sibling),w=i(w,T.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Jp(T,E.mode,N),w.return=E,E=w}return o(E);case ri:return F=T._init,R(E,w,F(T._payload),N)}if(bl(T))return I(E,w,T,N);if(il(T))return b(E,w,T,N);Zc(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,T),w.return=E,E=w):(n(E,w),w=Yp(T,E.mode,N),w.return=E,E=w),o(E)):n(E,w)}return R}var Zo=Pb(!0),Rb=Pb(!1),dh=zi(null),hh=null,ko=null,Ky=null;function Qy(){Ky=ko=hh=null}function Yy(t){var e=dh.current;Ce(dh),t._currentValue=e}function Zm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bo(t,e){hh=t,Ky=ko=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Ky!==t)if(t={context:t,memoizedValue:e,next:null},ko===null){if(hh===null)throw Error($(308));ko=t,hh.dependencies={lanes:0,firstContext:t}}else ko=ko.next=t;return e}var gs=null;function Jy(t){gs===null?gs=[t]:gs.push(t)}function kb(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ii=!1;function Xy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cb(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,Jy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Ad(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,My(t,n)}}function eE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fh(t,e,n,r){var i=t.updateQueue;ii=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,b=a;switch(p=e,y=n,b.tag){case 1:if(I=b.payload,typeof I=="function"){h=I.call(y,h,p);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=b.payload,p=typeof I=="function"?I.call(y,h,p):I,p==null)break e;h=ze({},h,p);break e;case 2:ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=h):d=d.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=h),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ns|=o,t.lanes=o,t.memoizedState=h}}function tE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Xu={},or=zi(Xu),hu=zi(Xu),fu=zi(Xu);function ys(t){if(t===Xu)throw Error($(174));return t}function Zy(t,e){switch(Se(fu,e),Se(hu,t),Se(or,Xu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dm(e,t)}Ce(or),Se(or,e)}function ea(){Ce(or),Ce(hu),Ce(fu)}function Nb(t){ys(fu.current);var e=ys(or.current),n=Dm(e,t.type);e!==n&&(Se(hu,t),Se(or,n))}function ev(t){hu.current===t&&(Ce(or),Ce(hu))}var je=zi(0);function ph(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qp=[];function tv(){for(var t=0;t<qp.length;t++)qp[t]._workInProgressVersionPrimary=null;qp.length=0}var Pd=jr.ReactCurrentDispatcher,Wp=jr.ReactCurrentBatchConfig,Cs=0,Ue=null,at=null,gt=null,mh=!1,Ul=!1,pu=0,dN=0;function Dt(){throw Error($(321))}function nv(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function rv(t,e,n,r,i,s){if(Cs=s,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pd.current=t===null||t.memoizedState===null?mN:gN,t=n(r,i),Ul){s=0;do{if(Ul=!1,pu=0,25<=s)throw Error($(301));s+=1,gt=at=null,e.updateQueue=null,Pd.current=yN,t=n(r,i)}while(Ul)}if(Pd.current=gh,e=at!==null&&at.next!==null,Cs=0,gt=at=Ue=null,mh=!1,e)throw Error($(300));return t}function iv(){var t=pu!==0;return pu=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ue.memoizedState=gt=t:gt=gt.next=t,gt}function Nn(){if(at===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=gt===null?Ue.memoizedState:gt.next;if(e!==null)gt=e,at=t;else{if(t===null)throw Error($(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},gt===null?Ue.memoizedState=gt=t:gt=gt.next=t}return gt}function mu(t,e){return typeof e=="function"?e(t):e}function Gp(t){var e=Nn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Cs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ue.lanes|=d,Ns|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,$n(r,e.memoizedState)||(en=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ue.lanes|=s,Ns|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hp(t){var e=Nn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$n(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Db(){}function Ob(t,e){var n=Ue,r=Nn(),i=e(),s=!$n(r.memoizedState,i);if(s&&(r.memoizedState=i,en=!0),r=r.queue,sv(Mb.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,gu(9,Lb.bind(null,n,r,i,e),void 0,null),vt===null)throw Error($(349));Cs&30||Vb(n,e,i)}return i}function Vb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lb(t,e,n,r){e.value=n,e.getSnapshot=r,Fb(e)&&jb(t)}function Mb(t,e,n){return n(function(){Fb(e)&&jb(t)})}function Fb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function jb(t){var e=Cr(t,1);e!==null&&Bn(e,t,1,-1)}function nE(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:t},e.queue=t,t=t.dispatch=pN.bind(null,Ue,t),[e.memoizedState,t]}function gu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ub(){return Nn().memoizedState}function Rd(t,e,n,r){var i=Hn();Ue.flags|=t,i.memoizedState=gu(1|e,n,void 0,r===void 0?null:r)}function nf(t,e,n,r){var i=Nn();r=r===void 0?null:r;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,r!==null&&nv(r,o.deps)){i.memoizedState=gu(e,n,s,r);return}}Ue.flags|=t,i.memoizedState=gu(1|e,n,s,r)}function rE(t,e){return Rd(8390656,8,t,e)}function sv(t,e){return nf(2048,8,t,e)}function Bb(t,e){return nf(4,2,t,e)}function zb(t,e){return nf(4,4,t,e)}function $b(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qb(t,e,n){return n=n!=null?n.concat([t]):null,nf(4,4,$b.bind(null,e,t),n)}function ov(){}function Wb(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nv(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gb(t,e){var n=Nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nv(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hb(t,e,n){return Cs&21?($n(n,e)||(n=XT(),Ue.lanes|=n,Ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function hN(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Wp.transition;Wp.transition={};try{t(!1),e()}finally{we=n,Wp.transition=r}}function Kb(){return Nn().memoizedState}function fN(t,e,n){var r=wi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qb(t))Yb(e,n);else if(n=kb(t,e,n,r),n!==null){var i=qt();Bn(n,t,r,i),Jb(n,e,r)}}function pN(t,e,n){var r=wi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qb(t))Yb(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(i.next=i,Jy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=kb(t,e,i,r),n!==null&&(i=qt(),Bn(n,t,r,i),Jb(n,e,r))}}function Qb(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function Yb(t,e){Ul=mh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,My(t,n)}}var gh={readContext:Cn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},mN={readContext:Cn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:rE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rd(4194308,4,$b.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rd(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rd(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fN.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:nE,useDebugValue:ov,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=nE(!1),e=t[0];return t=hN.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=Hn();if(De){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),vt===null)throw Error($(349));Cs&30||Vb(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rE(Mb.bind(null,r,s,t),[t]),r.flags|=2048,gu(9,Lb.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=vt.identifierPrefix;if(De){var n=Tr,r=Ir;n=(r&~(1<<32-Un(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gN={readContext:Cn,useCallback:Wb,useContext:Cn,useEffect:sv,useImperativeHandle:qb,useInsertionEffect:Bb,useLayoutEffect:zb,useMemo:Gb,useReducer:Gp,useRef:Ub,useState:function(){return Gp(mu)},useDebugValue:ov,useDeferredValue:function(t){var e=Nn();return Hb(e,at.memoizedState,t)},useTransition:function(){var t=Gp(mu)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Db,useSyncExternalStore:Ob,useId:Kb,unstable_isNewReconciler:!1},yN={readContext:Cn,useCallback:Wb,useContext:Cn,useEffect:sv,useImperativeHandle:qb,useInsertionEffect:Bb,useLayoutEffect:zb,useMemo:Gb,useReducer:Hp,useRef:Ub,useState:function(){return Hp(mu)},useDebugValue:ov,useDeferredValue:function(t){var e=Nn();return at===null?e.memoizedState=t:Hb(e,at.memoizedState,t)},useTransition:function(){var t=Hp(mu)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:Db,useSyncExternalStore:Ob,useId:Kb,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function eg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rf={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=wi(t),s=Ar(r,i);s.payload=e,n!=null&&(s.callback=n),e=vi(t,s,i),e!==null&&(Bn(e,t,i,r),Ad(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=wi(t),s=Ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vi(t,s,i),e!==null&&(Bn(e,t,i,r),Ad(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=wi(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),e=vi(t,i,r),e!==null&&(Bn(e,t,r,n),Ad(e,t,r))}};function iE(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!lu(n,r)||!lu(i,s):!0}function Xb(t,e,n){var r=!1,i=xi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=on(e)?Rs:Mt.current,r=e.contextTypes,s=(r=r!=null)?Jo(t,i):xi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rf.enqueueReplaceState(e,e.state,null)}function tg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=on(e)?Rs:Mt.current,i.context=Jo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rf.enqueueReplaceState(i,i.state,null),fh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",r=e;do n+=WC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ng(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vN=typeof WeakMap=="function"?WeakMap:Map;function Zb(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vh||(vh=!0,hg=r),ng(t,e)},n}function eS(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ng(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ng(t,e),typeof r!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function oE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NN.bind(null,t,e,n),e.then(t,t))}function aE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ar(-1,1),e.tag=2,vi(n,e,1))),n.lanes|=1),t)}var _N=jr.ReactCurrentOwner,en=!1;function Bt(t,e,n,r){e.child=t===null?Rb(e,null,n,r):Zo(e,t.child,n,r)}function uE(t,e,n,r,i){n=n.render;var s=e.ref;return Bo(e,i),r=rv(t,e,n,r,s,i),n=iv(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(De&&n&&Wy(e),e.flags|=1,Bt(t,e,r,i),e.child)}function cE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!pv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tS(t,e,s,r,i)):(t=Dd(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:lu,n(o,r)&&t.ref===e.ref)return Nr(t,e,i)}return e.flags|=1,t=Ei(s,r),t.ref=e.ref,t.return=e,e.child=t}function tS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(lu(s,r)&&t.ref===e.ref)if(en=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,Nr(t,e,i)}return rg(t,e,n,r,i)}function nS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(No,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(No,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(No,hn),hn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Se(No,hn),hn|=r;return Bt(t,e,i,n),e.child}function rS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rg(t,e,n,r,i){var s=on(n)?Rs:Mt.current;return s=Jo(e,s),Bo(e,i),n=rv(t,e,n,r,s,i),r=iv(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nr(t,e,i)):(De&&r&&Wy(e),e.flags|=1,Bt(t,e,n,i),e.child)}function dE(t,e,n,r,i){if(on(n)){var s=!0;lh(e)}else s=!1;if(Bo(e,i),e.stateNode===null)kd(t,e),Xb(e,n,r),tg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Cn(c):(c=on(n)?Rs:Mt.current,c=Jo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&sE(e,o,r,c),ii=!1;var p=e.memoizedState;o.state=p,fh(e,r,o,i),l=e.memoizedState,a!==r||p!==l||sn.current||ii?(typeof d=="function"&&(eg(e,n,d,r),l=e.memoizedState),(a=ii||iE(e,n,a,r,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Cb(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ln(e.type,a),o.props=c,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=on(n)?Rs:Mt.current,l=Jo(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&sE(e,o,r,l),ii=!1,p=e.memoizedState,o.state=p,fh(e,r,o,i);var I=e.memoizedState;a!==h||p!==I||sn.current||ii?(typeof y=="function"&&(eg(e,n,y,r),I=e.memoizedState),(c=ii||iE(e,n,c,r,p,I,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return ig(t,e,n,r,s,i)}function ig(t,e,n,r,i,s){rS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yw(e,n,!1),Nr(t,e,s);r=e.stateNode,_N.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zo(e,t.child,null,s),e.child=Zo(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=r.state,i&&Yw(e,n,!0),e.child}function iS(t){var e=t.stateNode;e.pendingContext?Qw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qw(t,e.context,!1),Zy(t,e.containerInfo)}function hE(t,e,n,r,i){return Xo(),Hy(i),e.flags|=256,Bt(t,e,n,r),e.child}var sg={dehydrated:null,treeContext:null,retryLane:0};function og(t){return{baseLanes:t,cachePool:null,transitions:null}}function sS(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Se(je,i&1),t===null)return Xm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=af(o,r,0,null),t=bs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=og(n),e.memoizedState=sg,t):av(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ei(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=bs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?og(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sg,r}return s=t.child,t=s.sibling,r=Ei(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function av(t,e){return e=af({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ed(t,e,n,r){return r!==null&&Hy(r),Zo(e,t.child,null,n),t=av(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kp(Error($(422))),ed(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=af({mode:"visible",children:r.children},i,0,null),s=bs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zo(e,t.child,null,o),e.child.memoizedState=og(o),e.memoizedState=sg,s);if(!(e.mode&1))return ed(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error($(419)),r=Kp(s,r,void 0),ed(t,e,o,r)}if(a=(o&t.childLanes)!==0,en||a){if(r=vt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cr(t,i),Bn(r,t,i,-1))}return fv(),r=Kp(Error($(421))),ed(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pn=yi(i.nextSibling),gn=e,De=!0,Fn=null,t!==null&&(In[Tn++]=Ir,In[Tn++]=Tr,In[Tn++]=ks,Ir=t.id,Tr=t.overflow,ks=e),e=av(e,r.children),e.flags|=4096,e)}function fE(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zm(t.return,e,n)}function Qp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function oS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fE(t,n,e);else if(t.tag===19)fE(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(je,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ph(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ph(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qp(e,!0,n,null,s);break;case"together":Qp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Ei(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ei(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EN(t,e,n){switch(e.tag){case 3:iS(e),Xo();break;case 5:Nb(e);break;case 1:on(e.type)&&lh(e);break;case 4:Zy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Se(dh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?sS(t,e,n):(Se(je,je.current&1),t=Nr(t,e,n),t!==null?t.sibling:null);Se(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,nS(t,e,n)}return Nr(t,e,n)}var aS,ag,lS,uS;aS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ag=function(){};lS=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ys(or.current);var s=null;switch(n){case"input":i=Rm(t,i),r=Rm(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=Nm(t,i),r=Nm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oh)}Om(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tu.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tu.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Pe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uS=function(t,e,n,r){n!==r&&(e.flags|=4)};function cl(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IN(t,e,n){var r=e.pendingProps;switch(Gy(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return on(e.type)&&ah(),Ot(e),null;case 3:return r=e.stateNode,ea(),Ce(sn),Ce(Mt),tv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(mg(Fn),Fn=null))),ag(t,e),Ot(e),null;case 5:ev(e);var i=ys(fu.current);if(n=e.type,t!==null&&e.stateNode!=null)lS(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Ot(e),null}if(t=ys(or.current),Xc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qn]=e,r[du]=s,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(i=0;i<xl.length;i++)Pe(xl[i],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Iw(r,s),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Pe("invalid",r);break;case"textarea":bw(r,s),Pe("invalid",r)}Om(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jc(r.textContent,a,t),i=["children",""+a]):tu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":$c(r),Tw(r,s,!0);break;case"textarea":$c(r),Sw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=MT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qn]=e,t[du]=r,aS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vm(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),i=r;break;case"iframe":case"object":case"embed":Pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<xl.length;i++)Pe(xl[i],t);i=r;break;case"source":Pe("error",t),i=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),i=r;break;case"details":Pe("toggle",t),i=r;break;case"input":Iw(t,r),i=Rm(t,r),Pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":bw(t,r),i=Nm(t,r),Pe("invalid",t);break;default:i=r}Om(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?UT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&FT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&nu(t,l):typeof l=="number"&&nu(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Pe("scroll",t):l!=null&&Cy(t,s,l,o))}switch(n){case"input":$c(t),Tw(t,r,!1);break;case"textarea":$c(t),Sw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)uS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=ys(fu.current),ys(or.current),Xc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(s=r.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Jc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Ot(e),null;case 13:if(Ce(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&pn!==null&&e.mode&1&&!(e.flags&128))Ab(),Xo(),e.flags|=98560,s=!1;else if(s=Xc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Qn]=e}else Xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Fn!==null&&(mg(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?lt===0&&(lt=3):fv())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return ea(),ag(t,e),t===null&&uu(e.stateNode.containerInfo),Ot(e),null;case 10:return Yy(e.type._context),Ot(e),null;case 17:return on(e.type)&&ah(),Ot(e),null;case 19:if(Ce(je),s=e.memoizedState,s===null)return Ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)cl(s,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ph(t),o!==null){for(e.flags|=128,cl(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&et()>na&&(e.flags|=128,r=!0,cl(s,!1),e.lanes=4194304)}else{if(!r)if(t=ph(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),cl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Ot(e),null}else 2*et()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,r=!0,cl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,n=je.current,Se(je,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return hv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?hn&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function TN(t,e){switch(Gy(e),e.tag){case 1:return on(e.type)&&ah(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),Ce(sn),Ce(Mt),tv(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ev(e),null;case 13:if(Ce(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(je),null;case 4:return ea(),null;case 10:return Yy(e.type._context),null;case 22:case 23:return hv(),null;case 24:return null;default:return null}}var td=!1,Lt=!1,bN=typeof WeakSet=="function"?WeakSet:Set,J=null;function Co(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function lg(t,e,n){try{n()}catch(r){We(t,e,r)}}var pE=!1;function SN(t,e){if(Wm=rh,t=pb(),qy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++d===r&&(l=o),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gm={focusedElem:t,selectionRange:n},rh=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var b=I.memoizedProps,R=I.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?b:Ln(e.type,b),R);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(N){We(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return I=pE,pE=!1,I}function Bl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lg(e,n,s)}i=i.next}while(i!==r)}}function sf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ug(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cS(t){var e=t.alternate;e!==null&&(t.alternate=null,cS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[du],delete e[Qm],delete e[aN],delete e[lN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dS(t){return t.tag===5||t.tag===3||t.tag===4}function mE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oh));else if(r!==4&&(t=t.child,t!==null))for(cg(t,e,n),t=t.sibling;t!==null;)cg(t,e,n),t=t.sibling}function dg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(dg(t,e,n),t=t.sibling;t!==null;)dg(t,e,n),t=t.sibling}var bt=null,Mn=!1;function Qr(t,e,n){for(n=n.child;n!==null;)hS(t,e,n),n=n.sibling}function hS(t,e,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(Yh,n)}catch{}switch(n.tag){case 5:Lt||Co(n,e);case 6:var r=bt,i=Mn;bt=null,Qr(t,e,n),bt=r,Mn=i,bt!==null&&(Mn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Mn?(t=bt,n=n.stateNode,t.nodeType===8?zp(t.parentNode,n):t.nodeType===1&&zp(t,n),ou(t)):zp(bt,n.stateNode));break;case 4:r=bt,i=Mn,bt=n.stateNode.containerInfo,Mn=!0,Qr(t,e,n),bt=r,Mn=i;break;case 0:case 11:case 14:case 15:if(!Lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lg(n,e,o),i=i.next}while(i!==r)}Qr(t,e,n);break;case 1:if(!Lt&&(Co(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,e,a)}Qr(t,e,n);break;case 21:Qr(t,e,n);break;case 22:n.mode&1?(Lt=(r=Lt)||n.memoizedState!==null,Qr(t,e,n),Lt=r):Qr(t,e,n);break;default:Qr(t,e,n)}}function gE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bN),e.forEach(function(r){var i=ON.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Mn=!1;break e;case 3:bt=a.stateNode.containerInfo,Mn=!0;break e;case 4:bt=a.stateNode.containerInfo,Mn=!0;break e}a=a.return}if(bt===null)throw Error($(160));hS(s,o,i),bt=null,Mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){We(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fS(e,t),e=e.sibling}function fS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),Gn(t),r&4){try{Bl(3,t,t.return),sf(3,t)}catch(b){We(t,t.return,b)}try{Bl(5,t,t.return)}catch(b){We(t,t.return,b)}}break;case 1:Vn(e,t),Gn(t),r&512&&n!==null&&Co(n,n.return);break;case 5:if(Vn(e,t),Gn(t),r&512&&n!==null&&Co(n,n.return),t.flags&32){var i=t.stateNode;try{nu(i,"")}catch(b){We(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&VT(i,s),Vm(a,o);var c=Vm(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?UT(i,h):d==="dangerouslySetInnerHTML"?FT(i,h):d==="children"?nu(i,h):Cy(i,d,h,c)}switch(a){case"input":km(i,s);break;case"textarea":LT(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Mo(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Mo(i,!!s.multiple,s.defaultValue,!0):Mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[du]=s}catch(b){We(t,t.return,b)}}break;case 6:if(Vn(e,t),Gn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){We(t,t.return,b)}}break;case 3:if(Vn(e,t),Gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ou(e.containerInfo)}catch(b){We(t,t.return,b)}break;case 4:Vn(e,t),Gn(t);break;case 13:Vn(e,t),Gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cv=et())),r&4&&gE(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Lt=(c=Lt)||d,Vn(e,t),Lt=c):Vn(e,t),Gn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(h=J=d;J!==null;){switch(p=J,y=p.child,p.tag){case 0:case 11:case 14:case 15:Bl(4,p,p.return);break;case 1:Co(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(b){We(r,n,b)}}break;case 5:Co(p,p.return);break;case 22:if(p.memoizedState!==null){vE(h);continue}}y!==null?(y.return=p,J=y):vE(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jT("display",o))}catch(b){We(t,t.return,b)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(b){We(t,t.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vn(e,t),Gn(t),r&4&&gE(t);break;case 21:break;default:Vn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dS(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nu(i,""),r.flags&=-33);var s=mE(t);dg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=mE(t);cg(t,a,o);break;default:throw Error($(161))}}catch(l){We(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xN(t,e,n){J=t,pS(t)}function pS(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||td;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=td;var c=Lt;if(td=o,(Lt=l)&&!c)for(J=i;J!==null;)o=J,l=o.child,o.tag===22&&o.memoizedState!==null?_E(i):l!==null?(l.return=o,J=l):_E(i);for(;s!==null;)J=s,pS(s),s=s.sibling;J=i,td=a,Lt=c}yE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):yE(t)}}function yE(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||sf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tE(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tE(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ou(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Lt||e.flags&512&&ug(e)}catch(p){We(e,e.return,p)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function vE(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function _E(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sf(4,e)}catch(l){We(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){We(e,i,l)}}var s=e.return;try{ug(e)}catch(l){We(e,s,l)}break;case 5:var o=e.return;try{ug(e)}catch(l){We(e,o,l)}}}catch(l){We(e,e.return,l)}if(e===t){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var AN=Math.ceil,yh=jr.ReactCurrentDispatcher,lv=jr.ReactCurrentOwner,xn=jr.ReactCurrentBatchConfig,pe=0,vt=null,ot=null,At=0,hn=0,No=zi(0),lt=0,yu=null,Ns=0,of=0,uv=0,zl=null,Zt=null,cv=0,na=1/0,wr=null,vh=!1,hg=null,_i=null,nd=!1,ci=null,_h=0,$l=0,fg=null,Cd=-1,Nd=0;function qt(){return pe&6?et():Cd!==-1?Cd:Cd=et()}function wi(t){return t.mode&1?pe&2&&At!==0?At&-At:cN.transition!==null?(Nd===0&&(Nd=XT()),Nd):(t=we,t!==0||(t=window.event,t=t===void 0?16:sb(t.type)),t):1}function Bn(t,e,n,r){if(50<$l)throw $l=0,fg=null,Error($(185));Qu(t,n,r),(!(pe&2)||t!==vt)&&(t===vt&&(!(pe&2)&&(of|=n),lt===4&&oi(t,At)),an(t,r),n===1&&pe===0&&!(e.mode&1)&&(na=et()+500,tf&&$i()))}function an(t,e){var n=t.callbackNode;c2(t,e);var r=nh(t,t===vt?At:0);if(r===0)n!==null&&Pw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pw(n),e===1)t.tag===0?uN(wE.bind(null,t)):bb(wE.bind(null,t)),sN(function(){!(pe&6)&&$i()}),n=null;else{switch(ZT(r)){case 1:n=Ly;break;case 4:n=YT;break;case 16:n=th;break;case 536870912:n=JT;break;default:n=th}n=IS(n,mS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mS(t,e){if(Cd=-1,Nd=0,pe&6)throw Error($(327));var n=t.callbackNode;if(zo()&&t.callbackNode!==n)return null;var r=nh(t,t===vt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wh(t,r);else{e=r;var i=pe;pe|=2;var s=yS();(vt!==t||At!==e)&&(wr=null,na=et()+500,Ts(t,e));do try{kN();break}catch(a){gS(t,a)}while(!0);Qy(),yh.current=s,pe=i,ot!==null?e=0:(vt=null,At=0,e=lt)}if(e!==0){if(e===2&&(i=Um(t),i!==0&&(r=i,e=pg(t,i))),e===1)throw n=yu,Ts(t,0),oi(t,r),an(t,et()),n;if(e===6)oi(t,r);else{if(i=t.current.alternate,!(r&30)&&!PN(i)&&(e=wh(t,r),e===2&&(s=Um(t),s!==0&&(r=s,e=pg(t,s))),e===1))throw n=yu,Ts(t,0),oi(t,r),an(t,et()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:as(t,Zt,wr);break;case 3:if(oi(t,r),(r&130023424)===r&&(e=cv+500-et(),10<e)){if(nh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){qt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Km(as.bind(null,t,Zt,wr),e);break}as(t,Zt,wr);break;case 4:if(oi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Un(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=et()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AN(r/1960))-r,10<r){t.timeoutHandle=Km(as.bind(null,t,Zt,wr),r);break}as(t,Zt,wr);break;case 5:as(t,Zt,wr);break;default:throw Error($(329))}}}return an(t,et()),t.callbackNode===n?mS.bind(null,t):null}function pg(t,e){var n=zl;return t.current.memoizedState.isDehydrated&&(Ts(t,e).flags|=256),t=wh(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&mg(e)),t}function mg(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function PN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$n(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oi(t,e){for(e&=~uv,e&=~of,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function wE(t){if(pe&6)throw Error($(327));zo();var e=nh(t,0);if(!(e&1))return an(t,et()),null;var n=wh(t,e);if(t.tag!==0&&n===2){var r=Um(t);r!==0&&(e=r,n=pg(t,r))}if(n===1)throw n=yu,Ts(t,0),oi(t,e),an(t,et()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,as(t,Zt,wr),an(t,et()),null}function dv(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(na=et()+500,tf&&$i())}}function Ds(t){ci!==null&&ci.tag===0&&!(pe&6)&&zo();var e=pe;pe|=1;var n=xn.transition,r=we;try{if(xn.transition=null,we=1,t)return t()}finally{we=r,xn.transition=n,pe=e,!(pe&6)&&$i()}}function hv(){hn=No.current,Ce(No)}function Ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,iN(n)),ot!==null)for(n=ot.return;n!==null;){var r=n;switch(Gy(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ah();break;case 3:ea(),Ce(sn),Ce(Mt),tv();break;case 5:ev(r);break;case 4:ea();break;case 13:Ce(je);break;case 19:Ce(je);break;case 10:Yy(r.type._context);break;case 22:case 23:hv()}n=n.return}if(vt=t,ot=t=Ei(t.current,null),At=hn=e,lt=0,yu=null,uv=of=Ns=0,Zt=zl=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}gs=null}return t}function gS(t,e){do{var n=ot;try{if(Qy(),Pd.current=gh,mh){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mh=!1}if(Cs=0,gt=at=Ue=null,Ul=!1,pu=0,lv.current=null,n===null||n.return===null){lt=1,yu=e,ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=At,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=aE(o);if(y!==null){y.flags&=-257,lE(y,o,a,s,e),y.mode&1&&oE(s,c,e),e=y,l=c;var I=e.updateQueue;if(I===null){var b=new Set;b.add(l),e.updateQueue=b}else I.add(l);break e}else{if(!(e&1)){oE(s,c,e),fv();break e}l=Error($(426))}}else if(De&&a.mode&1){var R=aE(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),lE(R,o,a,s,e),Hy(ta(l,a));break e}}s=l=ta(l,a),lt!==4&&(lt=2),zl===null?zl=[s]:zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=Zb(s,l,e);eE(s,E);break e;case 1:a=l;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_i===null||!_i.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=eS(s,a,e);eE(s,N);break e}}s=s.return}while(s!==null)}_S(n)}catch(L){e=L,ot===n&&n!==null&&(ot=n=n.return);continue}break}while(!0)}function yS(){var t=yh.current;return yh.current=gh,t===null?gh:t}function fv(){(lt===0||lt===3||lt===2)&&(lt=4),vt===null||!(Ns&268435455)&&!(of&268435455)||oi(vt,At)}function wh(t,e){var n=pe;pe|=2;var r=yS();(vt!==t||At!==e)&&(wr=null,Ts(t,e));do try{RN();break}catch(i){gS(t,i)}while(!0);if(Qy(),pe=n,yh.current=r,ot!==null)throw Error($(261));return vt=null,At=0,lt}function RN(){for(;ot!==null;)vS(ot)}function kN(){for(;ot!==null&&!t2();)vS(ot)}function vS(t){var e=ES(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?_S(t):ot=e,lv.current=null}function _S(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TN(n,e),n!==null){n.flags&=32767,ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,ot=null;return}}else if(n=IN(n,e,hn),n!==null){ot=n;return}if(e=e.sibling,e!==null){ot=e;return}ot=e=t}while(e!==null);lt===0&&(lt=5)}function as(t,e,n){var r=we,i=xn.transition;try{xn.transition=null,we=1,CN(t,e,n,r)}finally{xn.transition=i,we=r}return null}function CN(t,e,n,r){do zo();while(ci!==null);if(pe&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d2(t,s),t===vt&&(ot=vt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nd||(nd=!0,IS(th,function(){return zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=we;we=1;var a=pe;pe|=4,lv.current=null,SN(t,n),fS(n,t),J2(Gm),rh=!!Wm,Gm=Wm=null,t.current=n,xN(n),n2(),pe=a,we=o,xn.transition=s}else t.current=n;if(nd&&(nd=!1,ci=t,_h=i),s=t.pendingLanes,s===0&&(_i=null),s2(n.stateNode),an(t,et()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vh)throw vh=!1,t=hg,hg=null,t;return _h&1&&t.tag!==0&&zo(),s=t.pendingLanes,s&1?t===fg?$l++:($l=0,fg=t):$l=0,$i(),null}function zo(){if(ci!==null){var t=ZT(_h),e=xn.transition,n=we;try{if(xn.transition=null,we=16>t?16:t,ci===null)var r=!1;else{if(t=ci,ci=null,_h=0,pe&6)throw Error($(331));var i=pe;for(pe|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:Bl(8,d,s)}var h=d.child;if(h!==null)h.return=d,J=h;else for(;J!==null;){d=J;var p=d.sibling,y=d.return;if(cS(d),d===c){J=null;break}if(p!==null){p.return=y,J=p;break}J=y}}}var I=s.alternate;if(I!==null){var b=I.child;if(b!==null){I.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bl(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,J=E;break e}J=s.return}}var w=t.current;for(J=w;J!==null;){o=J;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,J=T;else e:for(o=w;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sf(9,a)}}catch(L){We(a,a.return,L)}if(a===o){J=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,J=N;break e}J=a.return}}if(pe=i,$i(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(Yh,t)}catch{}r=!0}return r}finally{we=n,xn.transition=e}}return!1}function EE(t,e,n){e=ta(n,e),e=Zb(t,e,1),t=vi(t,e,1),e=qt(),t!==null&&(Qu(t,1,e),an(t,e))}function We(t,e,n){if(t.tag===3)EE(t,t,n);else for(;e!==null;){if(e.tag===3){EE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_i===null||!_i.has(r))){t=ta(n,t),t=eS(e,t,1),e=vi(e,t,1),t=qt(),e!==null&&(Qu(e,1,t),an(e,t));break}}e=e.return}}function NN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,vt===t&&(At&n)===n&&(lt===4||lt===3&&(At&130023424)===At&&500>et()-cv?Ts(t,0):uv|=n),an(t,e)}function wS(t,e){e===0&&(t.mode&1?(e=Gc,Gc<<=1,!(Gc&130023424)&&(Gc=4194304)):e=1);var n=qt();t=Cr(t,e),t!==null&&(Qu(t,e,n),an(t,n))}function DN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wS(t,n)}function ON(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),wS(t,n)}var ES;ES=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,EN(t,e,n);en=!!(t.flags&131072)}else en=!1,De&&e.flags&1048576&&Sb(e,ch,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kd(t,e),t=e.pendingProps;var i=Jo(e,Mt.current);Bo(e,n),i=rv(null,e,r,t,i,n);var s=iv();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(r)?(s=!0,lh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xy(e),i.updater=rf,e.stateNode=i,i._reactInternals=e,tg(e,r,t,n),e=ig(null,e,r,!0,s,n)):(e.tag=0,De&&s&&Wy(e),Bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LN(r),t=Ln(r,t),i){case 0:e=rg(null,e,r,t,n);break e;case 1:e=dE(null,e,r,t,n);break e;case 11:e=uE(null,e,r,t,n);break e;case 14:e=cE(null,e,r,Ln(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),rg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),dE(t,e,r,i,n);case 3:e:{if(iS(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Cb(t,e),fh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ta(Error($(423)),e),e=hE(t,e,r,n,i);break e}else if(r!==i){i=ta(Error($(424)),e),e=hE(t,e,r,n,i);break e}else for(pn=yi(e.stateNode.containerInfo.firstChild),gn=e,De=!0,Fn=null,n=Rb(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xo(),r===i){e=Nr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return Nb(e),t===null&&Xm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Hm(r,i)?o=null:s!==null&&Hm(r,s)&&(e.flags|=32),rS(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&Xm(e),null;case 13:return sS(t,e,n);case 4:return Zy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zo(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),uE(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Se(dh,r._currentValue),r._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===i.children&&!sn.current){e=Nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ar(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Zm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bo(e,n),i=Cn(i),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),cE(t,e,r,i,n);case 15:return tS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),kd(t,e),e.tag=1,on(r)?(t=!0,lh(e)):t=!1,Bo(e,n),Xb(e,r,i),tg(e,r,i,n),ig(null,e,r,!0,t,n);case 19:return oS(t,e,n);case 22:return nS(t,e,n)}throw Error($(156,e.tag))};function IS(t,e){return QT(t,e)}function VN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,r){return new VN(t,e,n,r)}function pv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LN(t){if(typeof t=="function")return pv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dy)return 11;if(t===Oy)return 14}return 2}function Ei(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dd(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Io:return bs(n.children,i,s,e);case Ny:o=8,i|=8;break;case Sm:return t=bn(12,n,e,i|2),t.elementType=Sm,t.lanes=s,t;case xm:return t=bn(13,n,e,i),t.elementType=xm,t.lanes=s,t;case Am:return t=bn(19,n,e,i),t.elementType=Am,t.lanes=s,t;case NT:return af(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kT:o=10;break e;case CT:o=9;break e;case Dy:o=11;break e;case Oy:o=14;break e;case ri:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=bn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function bs(t,e,n,r){return t=bn(7,t,r,e),t.lanes=n,t}function af(t,e,n,r){return t=bn(22,t,r,e),t.elementType=NT,t.lanes=n,t.stateNode={isHidden:!1},t}function Yp(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Jp(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cp(0),this.expirationTimes=Cp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function mv(t,e,n,r,i,s,o,a,l){return t=new MN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xy(s),t}function FN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function TS(t){if(!t)return xi;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(on(n))return Tb(t,n,e)}return e}function bS(t,e,n,r,i,s,o,a,l){return t=mv(n,r,!0,t,i,s,o,a,l),t.context=TS(null),n=t.current,r=qt(),i=wi(n),s=Ar(r,i),s.callback=e??null,vi(n,s,i),t.current.lanes=i,Qu(t,i,r),an(t,r),t}function lf(t,e,n,r){var i=e.current,s=qt(),o=wi(i);return n=TS(n),e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vi(i,e,o),t!==null&&(Bn(t,i,o,s),Ad(t,i,o)),o}function Eh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function IE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gv(t,e){IE(t,e),(t=t.alternate)&&IE(t,e)}function jN(){return null}var SS=typeof reportError=="function"?reportError:function(t){console.error(t)};function yv(t){this._internalRoot=t}uf.prototype.render=yv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));lf(t,e,null,null)};uf.prototype.unmount=yv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){lf(null,t,null,null)}),e[kr]=null}};function uf(t){this._internalRoot=t}uf.prototype.unstable_scheduleHydration=function(t){if(t){var e=nb();t={blockedOn:null,target:t,priority:e};for(var n=0;n<si.length&&e!==0&&e<si[n].priority;n++);si.splice(n,0,t),n===0&&ib(t)}};function vv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function TE(){}function UN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Eh(o);s.call(c)}}var o=bS(e,r,t,0,null,!1,!1,"",TE);return t._reactRootContainer=o,t[kr]=o.current,uu(t.nodeType===8?t.parentNode:t),Ds(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Eh(l);a.call(c)}}var l=mv(t,0,!1,null,null,!1,!1,"",TE);return t._reactRootContainer=l,t[kr]=l.current,uu(t.nodeType===8?t.parentNode:t),Ds(function(){lf(e,l,n,r)}),l}function df(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Eh(o);a.call(l)}}lf(e,o,t,i)}else o=UN(n,e,t,i,r);return Eh(o)}eb=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sl(e.pendingLanes);n!==0&&(My(e,n|1),an(e,et()),!(pe&6)&&(na=et()+500,$i()))}break;case 13:Ds(function(){var r=Cr(t,1);if(r!==null){var i=qt();Bn(r,t,1,i)}}),gv(t,1)}};Fy=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=qt();Bn(e,t,134217728,n)}gv(t,134217728)}};tb=function(t){if(t.tag===13){var e=wi(t),n=Cr(t,e);if(n!==null){var r=qt();Bn(n,t,e,r)}gv(t,e)}};nb=function(){return we};rb=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Mm=function(t,e,n){switch(e){case"input":if(km(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ef(r);if(!i)throw Error($(90));OT(r),km(r,i)}}}break;case"textarea":LT(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};$T=dv;qT=Ds;var BN={usingClientEntryPoint:!1,Events:[Ju,xo,ef,BT,zT,dv]},dl={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zN={bundleType:dl.bundleType,version:dl.version,rendererPackageName:dl.rendererPackageName,rendererConfig:dl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=HT(t),t===null?null:t.stateNode},findFiberByHostInstance:dl.findFiberByHostInstance||jN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rd.isDisabled&&rd.supportsFiber)try{Yh=rd.inject(zN),sr=rd}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BN;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vv(e))throw Error($(200));return FN(t,e,null,n)};_n.createRoot=function(t,e){if(!vv(t))throw Error($(299));var n=!1,r="",i=SS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=mv(t,1,!1,null,null,n,!1,r,i),t[kr]=e.current,uu(t.nodeType===8?t.parentNode:t),new yv(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=HT(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Ds(t)};_n.hydrate=function(t,e,n){if(!cf(e))throw Error($(200));return df(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!vv(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=SS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bS(e,null,t,1,n??null,i,!1,s,o),t[kr]=e.current,uu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new uf(e)};_n.render=function(t,e,n){if(!cf(e))throw Error($(200));return df(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!cf(t))throw Error($(40));return t._reactRootContainer?(Ds(function(){df(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};_n.unstable_batchedUpdates=dv;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cf(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return df(t,e,n,!1,r)};_n.version="18.3.1-next-f1338f8080-20240426";function xS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xS)}catch(t){console.error(t)}}xS(),xT.exports=_n;var $N=xT.exports,bE=$N;Tm.createRoot=bE.createRoot,Tm.hydrateRoot=bE.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vu.apply(this,arguments)}var di;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(di||(di={}));const SE="popstate";function qN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return gg("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ih(i)}return GN(e,n,null,t)}function nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function AS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function WN(){return Math.random().toString(36).substr(2,8)}function xE(t,e){return{usr:t.state,key:t.key,idx:e}}function gg(t,e,n,r){return n===void 0&&(n=null),vu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xa(e):e,{state:n,key:e&&e.key||r||WN()})}function Ih(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function GN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=di.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(vu({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=di.Pop;let R=d(),E=R==null?null:R-c;c=R,l&&l({action:a,location:b.location,delta:E})}function p(R,E){a=di.Push;let w=gg(b.location,R,E);c=d()+1;let T=xE(w,c),N=b.createHref(w);try{o.pushState(T,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}s&&l&&l({action:a,location:b.location,delta:1})}function y(R,E){a=di.Replace;let w=gg(b.location,R,E);c=d();let T=xE(w,c),N=b.createHref(w);o.replaceState(T,"",N),s&&l&&l({action:a,location:b.location,delta:0})}function I(R){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof R=="string"?R:Ih(R);return w=w.replace(/ $/,"%20"),nt(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let b={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(SE,h),l=R,()=>{i.removeEventListener(SE,h),l=null}},createHref(R){return e(i,R)},createURL:I,encodeLocation(R){let E=I(R);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:p,replace:y,go(R){return o.go(R)}};return b}var AE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(AE||(AE={}));function HN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xa(e):e,i=_v(r.pathname||"/",n);if(i==null)return null;let s=PS(t);KN(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=oD(i);o=rD(s[a],l)}return o}function PS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(nt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ii([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),PS(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:tD(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of RS(s.path))i(s,o,l)}),e}function RS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const QN=/^:[\w-]+$/,YN=3,JN=2,XN=1,ZN=10,eD=-2,PE=t=>t==="*";function tD(t,e){let n=t.split("/"),r=n.length;return n.some(PE)&&(r+=eD),e&&(r+=JN),n.filter(i=>!PE(i)).reduce((i,s)=>i+(QN.test(s)?YN:s===""?XN:ZN),r)}function nD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",d=iD({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;s.push({params:r,pathname:Ii([i,d.pathname]),pathnameBase:cD(Ii([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Ii([i,d.pathnameBase]))}return s}function iD(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=sD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let b=a[h]||"";o=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const I=a[h];return y&&!I?c[p]=void 0:c[p]=(I||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function sD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),AS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function oD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return AS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _v(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function aD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xa(t):t;return{pathname:n?n.startsWith("/")?n:lD(n,e):e,search:dD(r),hash:hD(i)}}function lD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wv(t,e){let n=uD(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ev(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xa(t):(i=vu({},t),nt(!i.pathname||!i.pathname.includes("?"),Xp("?","pathname","search",i)),nt(!i.pathname||!i.pathname.includes("#"),Xp("#","pathname","hash",i)),nt(!i.search||!i.search.includes("#"),Xp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=aD(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Ii=t=>t.join("/").replace(/\/\/+/g,"/"),cD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kS=["post","put","patch","delete"];new Set(kS);const pD=["get",...kS];new Set(pD);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _u(){return _u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_u.apply(this,arguments)}const Iv=U.createContext(null),mD=U.createContext(null),qi=U.createContext(null),hf=U.createContext(null),Wi=U.createContext({outlet:null,matches:[],isDataRoute:!1}),CS=U.createContext(null);function gD(t,e){let{relative:n}=e===void 0?{}:e;Aa()||nt(!1);let{basename:r,navigator:i}=U.useContext(qi),{hash:s,pathname:o,search:a}=DS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ii([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Aa(){return U.useContext(hf)!=null}function Gi(){return Aa()||nt(!1),U.useContext(hf).location}function NS(t){U.useContext(qi).static||U.useLayoutEffect(t)}function Hi(){let{isDataRoute:t}=U.useContext(Wi);return t?RD():yD()}function yD(){Aa()||nt(!1);let t=U.useContext(Iv),{basename:e,future:n,navigator:r}=U.useContext(qi),{matches:i}=U.useContext(Wi),{pathname:s}=Gi(),o=JSON.stringify(wv(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return NS(()=>{a.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Ev(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Ii([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,s,t])}function DS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(qi),{matches:i}=U.useContext(Wi),{pathname:s}=Gi(),o=JSON.stringify(wv(i,r.v7_relativeSplatPath));return U.useMemo(()=>Ev(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function vD(t,e){return _D(t,e)}function _D(t,e,n,r){Aa()||nt(!1);let{navigator:i}=U.useContext(qi),{matches:s}=U.useContext(Wi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Gi(),d;if(e){var h;let R=typeof e=="string"?xa(e):e;l==="/"||(h=R.pathname)!=null&&h.startsWith(l)||nt(!1),d=R}else d=c;let p=d.pathname||"/",y=p;if(l!=="/"){let R=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(R.length).join("/")}let I=HN(t,{pathname:y}),b=bD(I&&I.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:Ii([l,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:Ii([l,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&b?U.createElement(hf.Provider,{value:{location:_u({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:di.Pop}},b):b}function wD(){let t=PD(),e=fD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const ED=U.createElement(wD,null);class ID extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Wi.Provider,{value:this.props.routeContext},U.createElement(CS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TD(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Iv);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Wi.Provider,{value:e},r)}function bD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||nt(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:p,errors:y}=n,I=h.route.loader&&p[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||I){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let y,I=!1,b=null,R=null;n&&(y=a&&h.route.id?a[h.route.id]:void 0,b=h.route.errorElement||ED,l&&(c<0&&p===0?(I=!0,R=null):c===p&&(I=!0,R=h.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,p+1)),w=()=>{let T;return y?T=b:I?T=R:h.route.Component?T=U.createElement(h.route.Component,null):h.route.element?T=h.route.element:T=d,U.createElement(TD,{match:h,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:T})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?U.createElement(ID,{location:n.location,revalidation:n.revalidation,component:b,error:y,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var OS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(OS||{}),Th=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Th||{});function SD(t){let e=U.useContext(Iv);return e||nt(!1),e}function xD(t){let e=U.useContext(mD);return e||nt(!1),e}function AD(t){let e=U.useContext(Wi);return e||nt(!1),e}function VS(t){let e=AD(),n=e.matches[e.matches.length-1];return n.route.id||nt(!1),n.route.id}function PD(){var t;let e=U.useContext(CS),n=xD(Th.UseRouteError),r=VS(Th.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function RD(){let{router:t}=SD(OS.UseNavigateStable),e=VS(Th.UseNavigateStable),n=U.useRef(!1);return NS(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,_u({fromRouteId:e},s)))},[t,e])}function kD(t){let{to:e,replace:n,state:r,relative:i}=t;Aa()||nt(!1);let{future:s,static:o}=U.useContext(qi),{matches:a}=U.useContext(Wi),{pathname:l}=Gi(),c=Hi(),d=Ev(e,wv(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:i}),[c,h,i,n,r]),null}function dn(t){nt(!1)}function CD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=di.Pop,navigator:s,static:o=!1,future:a}=t;Aa()&&nt(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:_u({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=xa(r));let{pathname:d="/",search:h="",hash:p="",state:y=null,key:I="default"}=r,b=U.useMemo(()=>{let R=_v(d,l);return R==null?null:{location:{pathname:R,search:h,hash:p,state:y,key:I},navigationType:i}},[l,d,h,p,y,I,i]);return b==null?null:U.createElement(qi.Provider,{value:c},U.createElement(hf.Provider,{children:n,value:b}))}function ND(t){let{children:e,location:n}=t;return vD(yg(e),n)}new Promise(()=>{});function yg(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,yg(r.props.children,s));return}r.type!==dn&&nt(!1),!r.props.index||!r.props.children||nt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=yg(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vg(){return vg=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vg.apply(this,arguments)}function DD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function OD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VD(t,e){return t.button===0&&(!e||e==="_self")&&!OD(t)}const LD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MD="6";try{window.__reactRouterVersion=MD}catch{}const FD="startTransition",RE=NC[FD];function jD(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=qN({window:i,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=U.useCallback(h=>{c&&RE?RE(()=>l(h)):l(h)},[l,c]);return U.useLayoutEffect(()=>o.listen(d),[o,d]),U.createElement(CD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const UD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:h}=e,p=DD(e,LD),{basename:y}=U.useContext(qi),I,b=!1;if(typeof c=="string"&&BD.test(c)&&(I=c,UD))try{let T=new URL(window.location.href),N=c.startsWith("//")?new URL(T.protocol+c):new URL(c),L=_v(N.pathname,y);N.origin===T.origin&&L!=null?c=L+N.search+N.hash:b=!0}catch{}let R=gD(c,{relative:i}),E=zD(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:h});function w(T){r&&r(T),T.defaultPrevented||E(T)}return U.createElement("a",vg({},p,{href:I||R,onClick:b||s?r:w,ref:n,target:l}))});var kE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(kE||(kE={}));var CE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(CE||(CE={}));function zD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Hi(),c=Gi(),d=DS(t,{relative:o});return U.useCallback(h=>{if(VD(h,n)){h.preventDefault();let p=r!==void 0?r:Ih(c)===Ih(d);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,d,r,i,n,t,s,o,a])}const $D="https://brighamdent.github.io/assets/graphic-TgKf272-.png";var NE={};/**
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
 */const LS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qD=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},MS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(p=64)),r.push(n[d],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new WD;const p=s<<2|a>>4;if(r.push(p),c!==64){const y=a<<4&240|c>>2;if(r.push(y),h!==64){const I=c<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class WD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const GD=function(t){const e=LS(t);return MS.encodeByteArray(e,!0)},bh=function(t){return GD(t).replace(/\./g,"")},FS=function(t){try{return MS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Sh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!HD(n)||(t[n]=Sh(t[n],e[n]));return t}function HD(t){return t!=="__proto__"}/**
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
 */function KD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QD=()=>KD().__FIREBASE_DEFAULTS__,YD=()=>{if(typeof process>"u"||typeof NE>"u")return;const t=NE.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&FS(t[1]);return e&&JSON.parse(e)},Tv=()=>{try{return QD()||YD()||JD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jS=()=>{var t;return(t=Tv())===null||t===void 0?void 0:t.config},XD=t=>{var e;return(e=Tv())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ZD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bh(JSON.stringify(n)),bh(JSON.stringify(o)),""].join(".")}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function bv(){var t;const e=(t=Tv())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function US(){return typeof self=="object"&&self.self===self}function BS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zS(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $S(){return!bv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wu(){try{return typeof indexedDB=="object"}catch{return!1}}function nO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const rO="FirebaseError";class Wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rO,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,r)}}function iO(t,e){return t.replace(sO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sO=/\{\$([^}]+)}/g;/**
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
 */function DE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Eu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(OE(s)&&OE(o)){if(!Eu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function OE(t){return t!==null&&typeof t=="object"}/**
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
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Do(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Al(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qS(t,e){const n=new aO(t,e);return n.subscribe.bind(n)}class aO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zp),i.error===void 0&&(i.error=Zp),i.complete===void 0&&(i.complete=Zp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zp(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ls="[DEFAULT]";/**
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
 */class uO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ZD;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dO(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cO(t){return t===ls?void 0:t}function dO(t){return t.instantiationMode==="EAGER"}/**
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
 */class WS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const xv=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const GS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},hO=ae.INFO,fO={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},pO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ff{constructor(e){this.name=e,this._logLevel=hO,this._logHandler=pO,this._userLogHandler=null,xv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function mO(t){xv.forEach(e=>{e.setLogLevel(t)})}function gO(t,e){for(const n of xv){let r=null;e&&e.level&&(r=GS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:i.name})}}}const yO=(t,e)=>e.some(n=>t instanceof n);let VE,LE;function vO(){return VE||(VE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _O(){return LE||(LE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HS=new WeakMap,_g=new WeakMap,KS=new WeakMap,em=new WeakMap,Av=new WeakMap;function wO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&HS.set(n,t)}).catch(()=>{}),Av.set(e,t),e}function EO(t){if(_g.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_g.set(t,e)}let wg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _g.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IO(t){wg=t(wg)}function TO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tm(this),e,...n);return KS.set(r,e.sort?e.sort():[e]),Ti(r)}:_O().includes(t)?function(...e){return t.apply(tm(this),e),Ti(HS.get(this))}:function(...e){return Ti(t.apply(tm(this),e))}}function bO(t){return typeof t=="function"?TO(t):(t instanceof IDBTransaction&&EO(t),yO(t,vO())?new Proxy(t,wg):t)}function Ti(t){if(t instanceof IDBRequest)return wO(t);if(em.has(t))return em.get(t);const e=bO(t);return e!==t&&(em.set(t,e),Av.set(e,t)),e}const tm=t=>Av.get(t);function SO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ti(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ti(o.result),l.oldVersion,l.newVersion,Ti(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const xO=["get","getKey","getAll","getAllKeys","count"],AO=["put","add","delete","clear"],nm=new Map;function ME(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nm.get(e))return nm.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return nm.set(e,s),s}IO(t=>({...t,get:(e,n,r)=>ME(e,n)||t.get(e,n,r),has:(e,n)=>!!ME(e,n)||t.has(e,n)}));/**
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
 */class PO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",Eg="0.10.3";/**
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
 */const Os=new ff("@firebase/app"),kO="@firebase/app-compat",CO="@firebase/analytics-compat",NO="@firebase/analytics",DO="@firebase/app-check-compat",OO="@firebase/app-check",VO="@firebase/auth",LO="@firebase/auth-compat",MO="@firebase/database",FO="@firebase/database-compat",jO="@firebase/functions",UO="@firebase/functions-compat",BO="@firebase/installations",zO="@firebase/installations-compat",$O="@firebase/messaging",qO="@firebase/messaging-compat",WO="@firebase/performance",GO="@firebase/performance-compat",HO="@firebase/remote-config",KO="@firebase/remote-config-compat",QO="@firebase/storage",YO="@firebase/storage-compat",JO="@firebase/firestore",XO="@firebase/vertexai-preview",ZO="@firebase/firestore-compat",eV="firebase",tV="10.12.0";/**
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
 */const Ai="[DEFAULT]",nV={[xh]:"fire-core",[kO]:"fire-core-compat",[NO]:"fire-analytics",[CO]:"fire-analytics-compat",[OO]:"fire-app-check",[DO]:"fire-app-check-compat",[VO]:"fire-auth",[LO]:"fire-auth-compat",[MO]:"fire-rtdb",[FO]:"fire-rtdb-compat",[jO]:"fire-fn",[UO]:"fire-fn-compat",[BO]:"fire-iid",[zO]:"fire-iid-compat",[$O]:"fire-fcm",[qO]:"fire-fcm-compat",[WO]:"fire-perf",[GO]:"fire-perf-compat",[HO]:"fire-rc",[KO]:"fire-rc-compat",[QO]:"fire-gcs",[YO]:"fire-gcs-compat",[JO]:"fire-fst",[ZO]:"fire-fst-compat",[XO]:"fire-vertex","fire-js":"fire-js",[eV]:"fire-js-all"};/**
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
 */const Pi=new Map,ra=new Map,ia=new Map;function Iu(t,e){try{t.container.addComponent(e)}catch(n){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function QS(t,e){t.container.addOrOverwriteComponent(e)}function Ri(t){const e=t.name;if(ia.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;ia.set(e,t);for(const n of Pi.values())Iu(n,t);for(const n of ra.values())Iu(n,t);return!0}function YS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rV(t,e,n=Ai){YS(t,e).clearInstance(n)}function JS(t){return t.options!==void 0}function Ke(t){return t.settings!==void 0}function iV(){ia.clear()}/**
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
 */const sV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new Js("app","Firebase",sV);/**
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
 */let XS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}};/**
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
 */class oV extends XS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,zn(xh,Eg,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Rv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw An.create("server-app-deleted")}}/**
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
 */const Ki=tV;function Pv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=jS()),!n)throw An.create("no-options");const s=Pi.get(i);if(s){if(Eu(n,s.options)&&Eu(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new WS(i);for(const l of ia.values())o.addComponent(l);const a=new XS(n,r,o);return Pi.set(i,a),a}function aV(t,e){if(US())throw An.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;JS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((d,h)=>Math.imul(31,d)+h.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw An.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=ra.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new WS(s);for(const c of ia.values())a.addComponent(c);const l=new oV(n,e,s,a);return ra.set(s,l),l}function lV(t=Ai){const e=Pi.get(t);if(!e&&t===Ai&&jS())return Pv();if(!e)throw An.create("no-app",{appName:t});return e}function uV(){return Array.from(Pi.values())}async function Rv(t){let e=!1;const n=t.name;Pi.has(n)?(e=!0,Pi.delete(n)):ra.has(n)&&t.decRefCount()<=0&&(ra.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function zn(t,e,n){var r;let i=(r=nV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(a.join(" "));return}Ri(new ur(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function ZS(t,e){if(t!==null&&typeof t!="function")throw An.create("invalid-log-argument");gO(t,e)}function ex(t){mO(t)}/**
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
 */const cV="firebase-heartbeat-database",dV=1,Tu="firebase-heartbeat-store";let rm=null;function tx(){return rm||(rm=SO(cV,dV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Tu)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),rm}async function hV(t){try{const n=(await tx()).transaction(Tu),r=await n.objectStore(Tu).get(nx(t));return await n.done,r}catch(e){if(e instanceof Wt)Os.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(n.message)}}}async function FE(t,e){try{const r=(await tx()).transaction(Tu,"readwrite");await r.objectStore(Tu).put(e,nx(t)),await r.done}catch(n){if(n instanceof Wt)Os.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Os.warn(r.message)}}}function nx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fV=1024,pV=30*24*60*60*1e3;class mV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jE();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jE(),{heartbeatsToSend:r,unsentEntries:i}=gV(this._heartbeatsCache.heartbeats),s=bh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function jE(){return new Date().toISOString().substring(0,10)}function gV(t,e=fV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),UE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),UE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wu()?nO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return FE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return FE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function UE(t){return bh(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vV(t){Ri(new ur("platform-logger",e=>new PO(e),"PRIVATE")),Ri(new ur("heartbeat",e=>new mV(e),"PRIVATE")),zn(xh,Eg,t),zn(xh,Eg,"esm2017"),zn("fire-js","")}vV("");const _V=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Wt,SDK_VERSION:Ki,_DEFAULT_ENTRY_NAME:Ai,_addComponent:Iu,_addOrOverwriteComponent:QS,_apps:Pi,_clearComponents:iV,_components:ia,_getProvider:YS,_isFirebaseApp:JS,_isFirebaseServerApp:Ke,_registerComponent:Ri,_removeServiceInstance:rV,_serverApps:ra,deleteApp:Rv,getApp:lV,getApps:uV,initializeApp:Pv,initializeServerApp:aV,onLog:ZS,registerVersion:zn,setLogLevel:ex},Symbol.toStringTag,{value:"Module"}));/**
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
 */class wV{constructor(e,n){this._delegate=e,this.firebase=n,Iu(e,new ur("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Rv(this._delegate)))}_getService(e,n=Ai){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ai){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Iu(this._delegate,e)}_addOrOverwriteComponent(e){QS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const EV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},BE=new Js("app-compat","Firebase",EV);/**
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
 */function IV(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:zn,setLogLevel:ex,onLog:ZS,apps:null,SDK_VERSION:Ki,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:_V}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||Ai,!DE(e,c))throw BE.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,d={}){const h=Pv(c,d);if(DE(e,h.name))return e[h.name];const p=new t(h,n);return e[h.name]=p,p}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const d=c.name,h=d.replace("-compat","");if(Ri(c)&&c.type==="PUBLIC"){const p=(y=i())=>{if(typeof y[h]!="function")throw BE.create("invalid-app-argument",{appName:d});return y[h]()};c.serviceProps!==void 0&&Sh(p,c.serviceProps),n[h]=p,t.prototype[h]=function(...y){return this._getService.bind(this,d).apply(this,c.multipleInstances?y:[])}}return c.type==="PUBLIC"?n[h]:null}function l(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function rx(){const t=IV(wV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:rx,extendNamespace:e,createSubscribe:qS,ErrorFactory:Js,deepExtend:Sh});function e(n){Sh(t,n)}return t}const TV=rx();/**
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
 */const zE=new ff("@firebase/app-compat"),bV="@firebase/app-compat",SV="0.2.33";/**
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
 */function xV(t){zn(bV,SV,t)}/**
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
 */if(US()&&self.firebase!==void 0){zE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&zE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Pn=TV;xV();var AV="firebase",PV="10.12.0";/**
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
 */Pn.registerVersion(AV,PV,"app-compat");function kv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const hl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},uo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function RV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function ix(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kV=RV,CV=ix,sx=new Js("auth","Firebase",ix());/**
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
 */const Ah=new ff("@firebase/auth");function NV(t,...e){Ah.logLevel<=ae.WARN&&Ah.warn(`Auth (${Ki}): ${t}`,...e)}function Od(t,...e){Ah.logLevel<=ae.ERROR&&Ah.error(`Auth (${Ki}): ${t}`,...e)}/**
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
 */function Rt(t,...e){throw Nv(t,...e)}function ut(t,...e){return Nv(t,...e)}function Cv(t,e,n){const r=Object.assign(Object.assign({},CV()),{[e]:n});return new Js("auth","Firebase",r).create(e,{appName:t.name})}function _t(t){return Cv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ra(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(t,"argument-error"),Cv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sx.create(t,...e)}function q(t,e,...n){if(!t)throw Nv(e,...n)}function er(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Od(e),new Error(e)}function qn(t,e){t||er(e)}/**
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
 */function bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dv(){return $E()==="http:"||$E()==="https:"}function $E(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dv()||BS()||"connection"in navigator)?navigator.onLine:!0}function OV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zu{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=tO()||Sv()}get(){return DV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ov(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ox{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LV=new Zu(3e4,6e4);function Je(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xe(t,e,n,r,i={}){return ax(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ox.fetch()(lx(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ax(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VV),e);try{const i=new FV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Pl(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Cv(t,d,c);Rt(t,d)}}catch(i){if(i instanceof Wt)throw i;Rt(t,"network-request-failed",{message:String(i)})}}async function Ur(t,e,n,r,i={}){const s=await Xe(t,e,n,r,i);return"mfaPendingCredential"in s&&Rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ov(t.config,i):`${t.config.apiScheme}://${i}`}function MV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),LV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function qE(t){return t!==void 0&&t.getResponse!==void 0}function WE(t){return t!==void 0&&t.enterprise!==void 0}class jV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function UV(t){return(await Xe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function BV(t,e){return Xe(t,"GET","/v2/recaptchaConfig",Je(t,e))}/**
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
 */async function zV(t,e){return Xe(t,"POST","/v1/accounts:delete",e)}async function $V(t,e){return Xe(t,"POST","/v1/accounts:update",e)}async function ux(t,e){return Xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ql(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qV(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=pf(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ql(im(i.auth_time)),issuedAtTime:ql(im(i.iat)),expirationTime:ql(im(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function im(t){return Number(t)*1e3}function pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Od("JWT malformed, contained fewer than 3 sections"),null;try{const i=FS(n);return i?JSON.parse(i):(Od("Failed to decode base64 JWT payload"),null)}catch(i){return Od("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function GE(t){const e=pf(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wt&&WV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ig{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ql(this.lastLoginAt),this.creationTime=ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Su(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Dr(t,ux(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?cx(s.providerUserInfo):[],a=KV(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ig(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function HV(t){const e=ne(t);await Su(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function cx(t){return t.map(e=>{var{providerId:n}=e,r=kv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QV(t,e){const n=await ax(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ox.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YV(t,e){return Xe(t,"POST","/v2/accounts:revokeToken",Je(t,e))}/**
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
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=GE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $o;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
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
 */function Yr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ig(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qV(this,e)}reload(){return HV(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Su(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await Dr(this,zV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:T,emailVerified:N,isAnonymous:L,providerData:F,stsTokenManager:S}=n;q(T&&S,e,"internal-error");const _=$o.fromJSON(this.name,S);q(typeof T=="string",e,"internal-error"),Yr(h,e.name),Yr(p,e.name),q(typeof N=="boolean",e,"internal-error"),q(typeof L=="boolean",e,"internal-error"),Yr(y,e.name),Yr(I,e.name),Yr(b,e.name),Yr(R,e.name),Yr(E,e.name),Yr(w,e.name);const x=new br({uid:T,auth:e,email:p,emailVerified:N,displayName:h,isAnonymous:L,photoURL:I,phoneNumber:y,tenantId:b,stsTokenManager:_,createdAt:E,lastLoginAt:w});return F&&Array.isArray(F)&&(x.providerData=F.map(A=>Object.assign({},A))),R&&(x._redirectEventId=R),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new $o;i.updateFromServerResponse(n);const s=new br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Su(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?cx(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new $o;a.updateFromIdToken(r);const l=new br({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ig(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const HE=new Map;function mn(t){qn(t instanceof Function,"Expected a class definition");let e=HE.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,HE.set(t,e),e)}/**
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
 */class dx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dx.type="NONE";const sa=dx;/**
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
 */function Ss(t,e,n){return`firebase:${t}:${e}:${n}`}class qo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qo(mn(sa),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||mn(sa);const o=Ss(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=br._fromJSON(e,d);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qo(s,e,r))}}/**
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
 */function KE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(px(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mx(e))return"Blackberry";if(gx(e))return"Webos";if(Vv(e))return"Safari";if((e.includes("chrome/")||fx(e))&&!e.includes("edge/"))return"Chrome";if(ec(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hx(t=Fe()){return/firefox\//i.test(t)}function Vv(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fx(t=Fe()){return/crios\//i.test(t)}function px(t=Fe()){return/iemobile/i.test(t)}function ec(t=Fe()){return/android/i.test(t)}function mx(t=Fe()){return/blackberry/i.test(t)}function gx(t=Fe()){return/webos/i.test(t)}function ka(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JV(t=Fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function XV(t=Fe()){var e;return ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZV(){return zS()&&document.documentMode===10}function yx(t=Fe()){return ka(t)||ec(t)||gx(t)||mx(t)||/windows phone/i.test(t)||px(t)}function eL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vx(t,e=[]){let n;switch(t){case"Browser":n=KE(Fe());break;case"Worker":n=`${KE(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
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
 */class tL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nL(t,e={}){return Xe(t,"GET","/v2/passwordPolicy",Je(t,e))}/**
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
 */const rL=6;class iL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new QE(this),this.idTokenSubscription=new QE(this),this.beforeStateQueue=new tL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ux(this,{idToken:e}),r=await br._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Su(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(_t(this));const n=e?ne(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nL(this),n=new iL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qe(t){return ne(t)}class QE{constructor(e){this.auth=e,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oL(t){tc=t}function Lv(t){return tc.loadJS(t)}function aL(){return tc.recaptchaV2Script}function lL(){return tc.recaptchaEnterpriseScript}function uL(){return tc.gapiScript}function _x(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cL="recaptcha-enterprise",dL="NO_RECAPTCHA";class hL{constructor(e){this.type=cL,this.auth=Qe(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{BV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new jV(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;WE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(dL)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&WE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lL();l.length!==0&&(l+=a),Lv(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function YE(t,e,n,r=!1){const i=new hL(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await YE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await YE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function fL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pL(t,e,n){const r=Qe(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wx(e),{host:o,port:a}=mL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gL()}function wx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mL(t){const e=wx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:JE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:JE(o)}}}function JE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ca{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(e){return er("not implemented")}_linkToIdToken(e,n){return er("not implemented")}_getReauthenticationResolver(e){return er("not implemented")}}/**
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
 */async function Ex(t,e){return Xe(t,"POST","/v1/accounts:resetPassword",Je(t,e))}async function yL(t,e){return Xe(t,"POST","/v1/accounts:update",e)}async function vL(t,e){return Xe(t,"POST","/v1/accounts:signUp",e)}async function _L(t,e){return Xe(t,"POST","/v1/accounts:update",Je(t,e))}/**
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
 */async function wL(t,e){return Ur(t,"POST","/v1/accounts:signInWithPassword",Je(t,e))}async function mf(t,e){return Xe(t,"POST","/v1/accounts:sendOobCode",Je(t,e))}async function EL(t,e){return mf(t,e)}async function IL(t,e){return mf(t,e)}async function TL(t,e){return mf(t,e)}async function bL(t,e){return mf(t,e)}/**
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
 */async function SL(t,e){return Ur(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}async function xL(t,e){return Ur(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}/**
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
 */class Au extends Ca{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Au(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Au(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xu(e,n,"signInWithPassword",wL);case"emailLink":return SL(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xu(e,r,"signUpPassword",vL);case"emailLink":return xL(e,{idToken:n,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pr(t,e){return Ur(t,"POST","/v1/accounts:signInWithIdp",Je(t,e))}/**
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
 */const AL="http://localhost";class cr extends Ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}buildRequest(){const e={requestUri:AL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
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
 */async function PL(t,e){return Xe(t,"POST","/v1/accounts:sendVerificationCode",Je(t,e))}async function RL(t,e){return Ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e))}async function kL(t,e){const n=await Ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e));if(n.temporaryProof)throw Pl(t,"account-exists-with-different-credential",n);return n}const CL={USER_NOT_FOUND:"user-not-found"};async function NL(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ur(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,n),CL)}/**
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
 */class xs extends Ca{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new xs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new xs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return RL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return kL(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return NL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new xs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function DL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OL(t){const e=Do(Al(t)).link,n=e?Do(Al(e)).deep_link_id:null,r=Do(Al(t)).deep_link_id;return(r?Do(Al(r)).link:null)||r||n||e||t}class gf{constructor(e){var n,r,i,s,o,a;const l=Do(Al(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=DL((i=l.mode)!==null&&i!==void 0?i:null);q(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OL(e);try{return new gf(n)}catch{return null}}}/**
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
 */class Qi{constructor(){this.providerId=Qi.PROVIDER_ID}static credential(e,n){return Au._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gf.parseLink(n);return q(r,"argument-error"),Au._fromEmailAndCode(e,r.code,r.tenantId)}}Qi.PROVIDER_ID="password";Qi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends Br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Wo extends Na{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return q("providerId"in n&&"signInMethod"in n,"argument-error"),cr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),cr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Wo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Wo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Wo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Yn extends Na{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Na{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */const VL="http://localhost";class oa extends Ca{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new oa(r,s)}static _create(e,n){return new oa(e,n)}buildRequest(){return{requestUri:VL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const LL="saml.";class Ph extends Br{constructor(e){q(e.startsWith(LL),"argument-error"),super(e)}static credentialFromResult(e){return Ph.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ph.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=oa.fromJSON(e);return q(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return oa._create(r,n)}catch{return null}}}/**
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
 */class Zn extends Na{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function Ix(t,e){return Ur(t,"POST","/v1/accounts:signUp",Je(t,e))}/**
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
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await br._fromIdTokenResponse(e,r,i),o=XE(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=XE(r);return new Dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function XE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function ML(t){var e;if(Ke(t.app))return Promise.reject(_t(t));const n=Qe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Dn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ix(n,{returnSecureToken:!0}),i=await Dn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Rh extends Wt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rh(e,n,r,i)}}function Tx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function bx(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function FL(t,e){const n=ne(t);await yf(!0,n,e);const{providerUserInfo:r}=await $V(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=bx(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Mv(t,e,n=!1){const r=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",r)}async function yf(t,e,n){await Su(e);const r=bx(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";q(r.has(n)===t,e.auth,i)}/**
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
 */async function Sx(t,e,n=!1){const{auth:r}=t;if(Ke(r.app))return Promise.reject(_t(r));const i="reauthenticate";try{const s=await Dr(t,Tx(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=pf(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),Dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Rt(r,"user-mismatch"),s}}/**
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
 */async function xx(t,e,n=!1){if(Ke(t.app))return Promise.reject(_t(t));const r="signIn",i=await Tx(t,r,e),s=await Dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vf(t,e){return xx(Qe(t),e)}async function Ax(t,e){const n=ne(t);return await yf(!1,n,e.providerId),Mv(n,e)}async function Px(t,e){return Sx(ne(t),e)}/**
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
 */async function jL(t,e){return Ur(t,"POST","/v1/accounts:signInWithCustomToken",Je(t,e))}/**
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
 */async function UL(t,e){if(Ke(t.app))return Promise.reject(_t(t));const n=Qe(t),r=await jL(n,{token:e,returnSecureToken:!0}),i=await Dn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class nc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Fv._fromServerResponse(e,n):"totpInfo"in n?jv._fromServerResponse(e,n):Rt(e,"internal-error")}}class Fv extends nc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Fv(n)}}class jv extends nc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new jv(n)}}/**
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
 */function _f(t,e,n){var r;q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Uv(t){const e=Qe(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BL(t,e,n){const r=Qe(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&_f(r,i,n),await xu(r,i,"getOobCode",IL)}async function zL(t,e,n){await Ex(ne(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uv(t),r})}async function $L(t,e){await _L(ne(t),{oobCode:e})}async function Rx(t,e){const n=ne(t),r=await Ex(n,{oobCode:e}),i=r.requestType;switch(q(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":q(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":q(r.mfaInfo,n,"internal-error");default:q(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=nc._fromServerResponse(Qe(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function qL(t,e){const{data:n}=await Rx(ne(t),e);return n.email}async function WL(t,e,n){if(Ke(t.app))return Promise.reject(_t(t));const r=Qe(t),o=await xu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ix).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Uv(t),l}),a=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function GL(t,e,n){return Ke(t.app)?Promise.reject(_t(t)):vf(ne(t),Qi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Uv(t),r})}/**
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
 */async function HL(t,e,n){const r=Qe(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){q(a.handleCodeInApp,r,"argument-error"),a&&_f(r,o,a)}s(i,n),await xu(r,i,"getOobCode",TL)}function KL(t,e){const n=gf.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function QL(t,e,n){if(Ke(t.app))return Promise.reject(_t(t));const r=ne(t),i=Qi.credentialWithLink(e,n||bu());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),vf(r,i)}/**
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
 */async function YL(t,e){return Xe(t,"POST","/v1/accounts:createAuthUri",Je(t,e))}/**
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
 */async function JL(t,e){const n=Dv()?bu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await YL(ne(t),r);return i||[]}async function XL(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&_f(n.auth,i,e);const{email:s}=await EL(n.auth,i);s!==t.email&&await t.reload()}async function ZL(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&_f(r.auth,s,n);const{email:o}=await bL(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function e4(t,e){return Xe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function t4(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Dr(r,e4(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function n4(t,e){const n=ne(t);return Ke(n.auth.app)?Promise.reject(_t(n.auth)):kx(n,e,null)}function r4(t,e){return kx(ne(t),null,e)}async function kx(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Dr(t,yL(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function i4(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=pf(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Go(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new s4(s,i);case"github.com":return new o4(s,i);case"google.com":return new a4(s,i);case"twitter.com":return new l4(s,i,t.screenName||null);case"custom":case"anonymous":return new Go(s,null);default:return new Go(s,r,i)}}class Go{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Cx extends Go{constructor(e,n,r,i){super(e,n,r),this.username=i}}class s4 extends Go{constructor(e,n){super(e,"facebook.com",n)}}class o4 extends Cx{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class a4 extends Go{constructor(e,n){super(e,"google.com",n)}}class l4 extends Cx{constructor(e,n,r){super(e,"twitter.com",n,r)}}function u4(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:i4(n)}/**
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
 */class vs{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new vs("enroll",e,n)}static _fromMfaPendingCredential(e){return new vs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return vs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return vs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Bv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Qe(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>nc._fromServerResponse(r,a));q(i.mfaPendingCredential,r,"internal-error");const o=vs._fromMfaPendingCredential(i.mfaPendingCredential);return new Bv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Dn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return q(n.user,r,"internal-error"),Dn._forOperation(n.user,n.operationType,c);default:Rt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function c4(t,e){var n;const r=ne(t),i=e;return q(e.customData.operationType,r,"argument-error"),q((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Bv._fromError(r,i)}/**
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
 */function d4(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:start",Je(t,e))}function h4(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Je(t,e))}function f4(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Je(t,e))}class zv{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>nc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new zv(e)}async getSession(){return vs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Dr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Dr(this.user,f4(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const sm=new WeakMap;function p4(t){const e=ne(t);return sm.has(e)||sm.set(e,zv._fromUser(e)),sm.get(e)}const kh="__sak";/**
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
 */class Nx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kh,"1"),this.storage.removeItem(kh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function m4(){const t=Fe();return Vv(t)||ka(t)}const g4=1e3,y4=10;class Dx extends Nx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=m4()&&eL(),this.fallbackToPolling=yx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,y4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},g4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dx.type="LOCAL";const $v=Dx;/**
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
 */class Ox extends Nx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ox.type="SESSION";const Vs=Ox;/**
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
 */function v4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await v4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wf.receivers=[];/**
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
 */function rc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=rc("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function w4(t){st().location.href=t}/**
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
 */function qv(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function E4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function T4(){return qv()?self:null}/**
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
 */const Vx="firebaseLocalStorageDb",b4=1,Ch="firebaseLocalStorage",Lx="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ef(t,e){return t.transaction([Ch],e?"readwrite":"readonly").objectStore(Ch)}function S4(){const t=indexedDB.deleteDatabase(Vx);return new ic(t).toPromise()}function Tg(){const t=indexedDB.open(Vx,b4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ch,{keyPath:Lx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ch)?e(r):(r.close(),await S4(),e(await Tg()))})})}async function ZE(t,e,n){const r=Ef(t,!0).put({[Lx]:e,value:n});return new ic(r).toPromise()}async function x4(t,e){const n=Ef(t,!1).get(e),r=await new ic(n).toPromise();return r===void 0?null:r.value}function eI(t,e){const n=Ef(t,!0).delete(e);return new ic(n).toPromise()}const A4=800,P4=3;class Mx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wf._getInstance(T4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await E4(),!this.activeServiceWorker)return;this.sender=new _4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tg();return await ZE(e,kh,"1"),await eI(e,kh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ZE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>x4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ef(i,!1).getAll();return new ic(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mx.type="LOCAL";const Pu=Mx;/**
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
 */function R4(t,e){return Xe(t,"POST","/v2/accounts/mfaSignIn:start",Je(t,e))}function k4(t,e){return Xe(t,"POST","/v2/accounts/mfaSignIn:finalize",Je(t,e))}/**
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
 */const C4=500,N4=6e4,id=1e12;class D4{constructor(e){this.auth=e,this.counter=id,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new O4(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||id;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||id;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||id;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class O4{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;q(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=V4(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},N4)},C4))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function V4(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const om=_x("rcb"),L4=new Zu(3e4,6e4);class M4{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=st().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return q(F4(n),e,"argument-error"),this.shouldResolveImmediately(n)&&qE(st().grecaptcha)?Promise.resolve(st().grecaptcha):new Promise((r,i)=>{const s=st().setTimeout(()=>{i(ut(e,"network-request-failed"))},L4.get());st()[om]=()=>{st().clearTimeout(s),delete st()[om];const a=st().grecaptcha;if(!a||!qE(a)){i(ut(e,"internal-error"));return}const l=a.render;a.render=(c,d)=>{const h=l(c,d);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${aL()}?${Pa({onload:om,render:"explicit",hl:n})}`;Lv(o).catch(()=>{clearTimeout(s),i(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=st().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function F4(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class j4{async load(e){return new D4(e)}clearedOneInstance(){}}/**
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
 */const Fx="recaptcha",U4={theme:"light",type:"image"};let B4=class{constructor(e,n,r=Object.assign({},U4)){this.parameters=r,this.type=Fx,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Qe(e),this.isInvisible=this.parameters.size==="invisible",q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new j4:new M4,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){q(!this.parameters.sitekey,this.auth,"argument-error"),q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=st()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){q(Dv()&&!qv(),this.auth,"internal-error"),await z4(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await UV(this.auth);q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function z4(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Wv{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=xs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function $4(t,e,n){if(Ke(t.app))return Promise.reject(_t(t));const r=Qe(t),i=await If(r,e,ne(n));return new Wv(i,s=>vf(r,s))}async function q4(t,e,n){const r=ne(t);await yf(!1,r,"phone");const i=await If(r.auth,e,ne(n));return new Wv(i,s=>Ax(r,s))}async function W4(t,e,n){const r=ne(t);if(Ke(r.auth.app))return Promise.reject(_t(r.auth));const i=await If(r.auth,e,ne(n));return new Wv(i,s=>Px(r,s))}async function If(t,e,n){var r;const i=await n.verify();try{q(typeof i=="string",t,"argument-error"),q(n.type===Fx,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return q(o.type==="enroll",t,"internal-error"),(await d4(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{q(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return q(a,t,"missing-multi-factor-info"),(await R4(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await PL(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function G4(t,e){const n=ne(t);if(Ke(n.auth.app))return Promise.reject(_t(n.auth));await Mv(n,e)}/**
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
 */let Ls=class Vd{constructor(e){this.providerId=Vd.PROVIDER_ID,this.auth=Qe(e)}verifyPhoneNumber(e,n){return If(this.auth,e,ne(n))}static credential(e,n){return xs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Vd.credentialFromTaggedObject(n)}static credentialFromError(e){return Vd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?xs._fromTokenResponse(n,r):null}};Ls.PROVIDER_ID="phone";Ls.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Xs(t,e){return e?mn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gv extends Ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function H4(t){return xx(t.auth,new Gv(t),t.bypassAuthState)}function K4(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Sx(n,new Gv(t),t.bypassAuthState)}async function Q4(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Mv(n,new Gv(t),t.bypassAuthState)}/**
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
 */class jx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return H4;case"linkViaPopup":case"linkViaRedirect":return Q4;case"reauthViaPopup":case"reauthViaRedirect":return K4;default:Rt(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y4=new Zu(2e3,1e4);async function J4(t,e,n){if(Ke(t.app))return Promise.reject(ut(t,"operation-not-supported-in-this-environment"));const r=Qe(t);Ra(t,e,Br);const i=Xs(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}async function X4(t,e,n){const r=ne(t);if(Ke(r.auth.app))return Promise.reject(ut(r.auth,"operation-not-supported-in-this-environment"));Ra(r.auth,e,Br);const i=Xs(r.auth,n);return new Sr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Z4(t,e,n){const r=ne(t);Ra(r.auth,e,Br);const i=Xs(r.auth,n);return new Sr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Sr extends jx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y4.get())};e()}}Sr.currentPopupAction=null;/**
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
 */const eM="pendingRedirect",Wl=new Map;class tM extends jx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await nM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nM(t,e){const n=Bx(e),r=Ux(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Hv(t,e){return Ux(t)._set(Bx(e),"true")}function rM(){Wl.clear()}function Kv(t,e){Wl.set(t._key(),e)}function Ux(t){return mn(t._redirectPersistence)}function Bx(t){return Ss(eM,t.config.apiKey,t.name)}/**
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
 */function iM(t,e,n){return sM(t,e,n)}async function sM(t,e,n){if(Ke(t.app))return Promise.reject(_t(t));const r=Qe(t);Ra(t,e,Br),await r._initializationPromise;const i=Xs(r,n);return await Hv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function oM(t,e,n){return aM(t,e,n)}async function aM(t,e,n){const r=ne(t);if(Ra(r.auth,e,Br),Ke(r.auth.app))return Promise.reject(_t(r.auth));await r.auth._initializationPromise;const i=Xs(r.auth,n);await Hv(i,r.auth);const s=await zx(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function lM(t,e,n){return uM(t,e,n)}async function uM(t,e,n){const r=ne(t);Ra(r.auth,e,Br),await r.auth._initializationPromise;const i=Xs(r.auth,n);await yf(!1,r,e.providerId),await Hv(i,r.auth);const s=await zx(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function cM(t,e){return await Qe(t)._initializationPromise,Tf(t,e,!1)}async function Tf(t,e,n=!1){if(Ke(t.app))return Promise.reject(_t(t));const r=Qe(t),i=Xs(r,e),o=await new tM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function zx(t){const e=rc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const dM=10*60*1e3;class $x{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qx(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dM&&this.cachedEventUids.clear(),this.cachedEventUids.has(tI(e))}saveEventToCache(e){this.cachedEventUids.add(tI(e)),this.lastProcessedEventTime=Date.now()}}function tI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qx(t);default:return!1}}/**
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
 */async function Wx(t,e={}){return Xe(t,"GET","/v1/projects",e)}/**
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
 */const fM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pM=/^https?/;async function mM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wx(t);for(const n of e)try{if(gM(n))return}catch{}Rt(t,"unauthorized-domain")}function gM(t){const e=bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pM.test(n))return!1;if(fM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const yM=new Zu(3e4,6e4);function nI(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vM(t){return new Promise((e,n)=>{var r,i,s;function o(){nI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nI(),n(ut(t,"network-request-failed"))},timeout:yM.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)o();else{const a=_x("iframefcb");return st()[a]=()=>{gapi.load?o():n(ut(t,"network-request-failed"))},Lv(`${uL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ld=null,e})}let Ld=null;function _M(t){return Ld=Ld||vM(t),Ld}/**
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
 */const wM=new Zu(5e3,15e3),EM="__/auth/iframe",IM="emulator/auth/iframe",TM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SM(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ov(e,IM):`https://${t.config.authDomain}/${EM}`,r={apiKey:e.apiKey,appName:t.name,v:Ki},i=bM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pa(r).slice(1)}`}async function xM(t){const e=await _M(t),n=st().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:SM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ut(t,"network-request-failed"),a=st().setTimeout(()=>{s(o)},wM.get());function l(){st().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const AM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PM=500,RM=600,kM="_blank",CM="http://localhost";class rI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NM(t,e,n,r=PM,i=RM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},AM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Fe().toLowerCase();n&&(a=fx(c)?kM:n),hx(c)&&(e=e||CM,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[y,I])=>`${p}${y}=${I},`,"");if(XV(c)&&a!=="_self")return DM(e||"",a),new rI(null);const h=window.open(e||"",a,d);q(h,t,"popup-blocked");try{h.focus()}catch{}return new rI(h)}function DM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OM="__/auth/handler",VM="emulator/auth/handler",LM=encodeURIComponent("fac");async function bg(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(e instanceof Br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(s||{}))o[d]=h}if(e instanceof Na){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${LM}=${encodeURIComponent(l)}`:"";return`${MM(t)}?${Pa(a).slice(1)}${c}`}function MM({config:t}){return t.emulator?Ov(t,VM):`https://${t.authDomain}/${OM}`}/**
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
 */const am="webStorageSupport";class FM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vs,this._completeRedirectFn=Tf,this._overrideRedirectResult=Kv}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bg(e,n,r,bu(),i);return NM(e,o,rc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bg(e,n,r,bu(),i);return w4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xM(e),r=new $x(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(am,{type:am},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[am];o!==void 0&&n(!!o),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yx()||Vv()||ka()}}const jM=FM;class UM{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return er("unexpected MultiFactorSessionType")}}}class Qv extends UM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Qv(e)}_finalizeEnroll(e,n,r){return h4(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return k4(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gx{constructor(){}static assertion(e){return Qv._fromCredential(e)}}Gx.FACTOR_ID="phone";var iI="@firebase/auth",sI="1.7.3";/**
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
 */class BM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $M(t){Ri(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vx(t)},c=new sL(r,i,s,l);return fL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new ur("auth-internal",e=>{const n=Qe(e.getProvider("auth").getImmediate());return(r=>new BM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(iI,sI,zM(t)),zn(iI,sI,"esm2017")}/**
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
 */const qM=5*60;XD("authIdTokenMaxAge");function WM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",WM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$M("Browser");/**
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
 */function Ms(){return window}/**
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
 */const GM=2e3;async function HM(t,e,n){var r;const{BuildInfo:i}=Ms();qn(e.sessionId,"AuthEvent did not contain a session ID");const s=await XM(e.sessionId),o={};return ka()?o.ibi=i.packageName:ec()?o.apn=i.packageName:Rt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,bg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function KM(t){const{BuildInfo:e}=Ms(),n={};ka()?n.iosBundleId=e.packageName:ec()?n.androidPackageName=e.packageName:Rt(t,"operation-not-supported-in-this-environment"),await Wx(t,n)}function QM(t){const{cordova:e}=Ms();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,JV()?"_blank":"_system","location=yes"),n(i)})})}async function YM(t,e,n){const{cordova:r}=Ms();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var h;s();const p=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(ut(t,"redirect-cancelled-by-user"))},GM))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),ec()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function JM(t){var e,n,r,i,s,o,a,l,c,d;const h=Ms();q(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),q(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),q(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),q(typeof((d=(c=h==null?void 0:h.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function XM(t){const e=ZM(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function ZM(t){if(qn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const eF=20;class tF extends $x{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function nF(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:sF(),postBody:null,tenantId:t.tenantId,error:ut(t,"no-auth-event")}}function rF(t,e){return Sg()._set(xg(t),e)}async function oI(t){const e=await Sg()._get(xg(t));return e&&await Sg()._remove(xg(t)),e}function iF(t,e){var n,r;const i=aF(e);if(i.includes("/__/auth/callback")){const s=Md(i),o=s.firebaseError?oF(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ut(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function sF(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<eF;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Sg(){return mn($v)}function xg(t){return Ss("authEvent",t.config.apiKey,t.name)}function oF(t){try{return JSON.parse(t)}catch{return null}}function aF(t){const e=Md(t),n=e.link?decodeURIComponent(e.link):void 0,r=Md(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Md(i).link||i||r||n||t}function Md(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Do(n.join("?"))}/**
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
 */const lF=500;class uF{constructor(){this._redirectPersistence=Vs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Tf,this._overrideRedirectResult=Kv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new tF(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){JM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),rM(),await this._originValidation(e);const o=nF(e,r,i);await rF(e,o);const a=await HM(e,o,n),l=await QM(a);return YM(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KM(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ms(),o=setTimeout(async()=>{await oI(e),n.onEvent(aI())},lF),a=async d=>{clearTimeout(o);const h=await oI(e);let p=null;h&&(d!=null&&d.url)&&(p=iF(h,d.url)),n.onEvent(p||aI())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;Ms().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&a({url:d}),typeof l=="function")try{l(d)}catch(h){console.error(h)}}}}const cF=uF;function aI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ut("no-auth-event")}}/**
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
 */function dF(t,e){Qe(t)._logFramework(e)}var hF="@firebase/auth-compat",fF="0.5.8";/**
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
 */const pF=1e3;function Gl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function mF(){return Gl()==="http:"||Gl()==="https:"}function Hx(t=Fe()){return!!((Gl()==="file:"||Gl()==="ionic:"||Gl()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function gF(){return Sv()||bv()}function yF(){return zS()&&(document==null?void 0:document.documentMode)===11}function vF(t=Fe()){return/Edge\/\d+/.test(t)}function _F(t=Fe()){return yF()||vF(t)}function Kx(){try{const t=self.localStorage,e=rc();if(t)return t.setItem(e,"1"),t.removeItem(e),_F()?wu():!0}catch{return Yv()&&wu()}return!1}function Yv(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function lm(){return(mF()||BS()||Hx())&&!gF()&&Kx()&&!Yv()}function Qx(){return Hx()&&typeof document<"u"}async function wF(){return Qx()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},pF);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function EF(){return typeof window<"u"?window:null}/**
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
 */const fn={LOCAL:"local",NONE:"none",SESSION:"session"},fl=q,Yx="persistence";function IF(t,e){if(fl(Object.values(fn).includes(e),t,"invalid-persistence-type"),Sv()){fl(e!==fn.SESSION,t,"unsupported-persistence-type");return}if(bv()){fl(e===fn.NONE,t,"unsupported-persistence-type");return}if(Yv()){fl(e===fn.NONE||e===fn.LOCAL&&wu(),t,"unsupported-persistence-type");return}fl(e===fn.NONE||Kx(),t,"unsupported-persistence-type")}async function Ag(t){await t._initializationPromise;const e=Jx(),n=Ss(Yx,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function TF(t,e){const n=Jx();if(!n)return[];const r=Ss(Yx,t,e);switch(n.getItem(r)){case fn.NONE:return[sa];case fn.LOCAL:return[Pu,Vs];case fn.SESSION:return[Vs];default:return[]}}function Jx(){var t;try{return((t=EF())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const bF=q;class hi{constructor(){this.browserResolver=mn(jM),this.cordovaResolver=mn(cF),this.underlyingResolver=null,this._redirectPersistence=Vs,this._completeRedirectFn=Tf,this._overrideRedirectResult=Kv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Qx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return bF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await wF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Xx(t){return t.unwrap()}function SF(t){return t.wrapped()}/**
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
 */function xF(t){return Zx(t)}function AF(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new PF(t,c4(t,e))}else if(r){const i=Zx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function Zx(t){const{_tokenResponse:e}=t instanceof Wt?t.customData:t;if(!e)return null;if(!(t instanceof Wt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ls.credentialFromResult(t);const n=e.providerId;if(!n||n===hl.PASSWORD)return null;let r;switch(n){case hl.GOOGLE:r=Jn;break;case hl.FACEBOOK:r=Yn;break;case hl.GITHUB:r=Xn;break;case hl.TWITTER:r=Zn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?oa._create(n,a):cr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Wo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Wt?r.credentialFromError(t):r.credentialFromResult(t)}function Jt(t,e){return e.catch(n=>{throw n instanceof Wt&&AF(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:xF(n),additionalUserInfo:u4(n),user:bf.getOrCreate(i)}})}async function Pg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Jt(t,n.confirm(r))}}class PF{constructor(e,n){this.resolver=n,this.auth=SF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Jt(Xx(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let bf=class Rl{constructor(e){this._delegate=e,this.multiFactor=p4(e)}static getOrCreate(e){return Rl.USER_MAP.has(e)||Rl.USER_MAP.set(e,new Rl(e)),Rl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Jt(this.auth,Ax(this._delegate,e))}async linkWithPhoneNumber(e,n){return Pg(this.auth,q4(this._delegate,e,n))}async linkWithPopup(e){return Jt(this.auth,Z4(this._delegate,e,hi))}async linkWithRedirect(e){return await Ag(Qe(this.auth)),lM(this._delegate,e,hi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Jt(this.auth,Px(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Pg(this.auth,W4(this._delegate,e,n))}reauthenticateWithPopup(e){return Jt(this.auth,X4(this._delegate,e,hi))}async reauthenticateWithRedirect(e){return await Ag(Qe(this.auth)),oM(this._delegate,e,hi)}sendEmailVerification(e){return XL(this._delegate,e)}async unlink(e){return await FL(this._delegate,e),this}updateEmail(e){return n4(this._delegate,e)}updatePassword(e){return r4(this._delegate,e)}updatePhoneNumber(e){return G4(this._delegate,e)}updateProfile(e){return t4(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return ZL(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};bf.USER_MAP=new WeakMap;/**
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
 */const pl=q;class Rg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;pl(r,"invalid-api-key",{appName:e.name}),pl(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?hi:void 0;this._delegate=n.initialize({options:{persistence:RF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(kV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?bf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){pL(this._delegate,e,n)}applyActionCode(e){return $L(this._delegate,e)}checkActionCode(e){return Rx(this._delegate,e)}confirmPasswordReset(e,n){return zL(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Jt(this._delegate,WL(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return JL(this._delegate,e)}isSignInWithEmailLink(e){return KL(this._delegate,e)}async getRedirectResult(){pl(lm(),this._delegate,"operation-not-supported-in-this-environment");const e=await cM(this._delegate,hi);return e?Jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){dF(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=lI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=lI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return HL(this._delegate,e,n)}sendPasswordResetEmail(e,n){return BL(this._delegate,e,n||void 0)}async setPersistence(e){IF(this._delegate,e);let n;switch(e){case fn.SESSION:n=Vs;break;case fn.LOCAL:n=await mn(Pu)._isAvailable()?Pu:$v;break;case fn.NONE:n=sa;break;default:return Rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Jt(this._delegate,ML(this._delegate))}signInWithCredential(e){return Jt(this._delegate,vf(this._delegate,e))}signInWithCustomToken(e){return Jt(this._delegate,UL(this._delegate,e))}signInWithEmailAndPassword(e,n){return Jt(this._delegate,GL(this._delegate,e,n))}signInWithEmailLink(e,n){return Jt(this._delegate,QL(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Pg(this._delegate,$4(this._delegate,e,n))}async signInWithPopup(e){return pl(lm(),this._delegate,"operation-not-supported-in-this-environment"),Jt(this._delegate,J4(this._delegate,e,hi))}async signInWithRedirect(e){return pl(lm(),this._delegate,"operation-not-supported-in-this-environment"),await Ag(this._delegate),iM(this._delegate,e,hi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return qL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Rg.Persistence=fn;function lI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&bf.getOrCreate(o)),error:e,complete:n}}function RF(t,e){const n=TF(t,e);if(typeof self<"u"&&!n.includes(Pu)&&n.push(Pu),typeof window<"u")for(const r of[$v,Vs])n.includes(r)||n.push(r);return n.includes(sa)||n.push(sa),n}/**
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
 */class Jv{constructor(){this.providerId="phone",this._delegate=new Ls(Xx(Pn.auth()))}static credential(e,n){return Ls.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Jv.PHONE_SIGN_IN_METHOD=Ls.PHONE_SIGN_IN_METHOD;Jv.PROVIDER_ID=Ls.PROVIDER_ID;/**
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
 */const kF=q;class CF{constructor(e,n,r=Pn.app()){var i;kF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new B4(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const NF="auth-compat";function DF(t){t.INTERNAL.registerComponent(new ur(NF,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Rg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:uo.EMAIL_SIGNIN,PASSWORD_RESET:uo.PASSWORD_RESET,RECOVER_EMAIL:uo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:uo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:uo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:uo.VERIFY_EMAIL}},EmailAuthProvider:Qi,FacebookAuthProvider:Yn,GithubAuthProvider:Xn,GoogleAuthProvider:Jn,OAuthProvider:Wo,SAMLAuthProvider:Ph,PhoneAuthProvider:Jv,PhoneMultiFactorGenerator:Gx,RecaptchaVerifier:CF,TwitterAuthProvider:Zn,Auth:Rg,AuthCredential:Ca,Error:Wt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(hF,fF)}DF(Pn);const OF=Pn.initializeApp({apiKey:"AIzaSyBvrVJXjaK8YVYT03RBzG9lnvPu3Ulur0g",authDomain:"english-class-dev.firebaseapp.com",projectId:"english-class-dev",storageBucket:"english-class-dev.appspot.com",messagingSenderId:"1009105784509",appId:"1:1009105784509:web:c5d204e902a32da580f1d4",measurementId:"G-WJ0XPGWHX7"}),Jr=OF.auth();var uI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,eA;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function x(){}x.prototype=_.prototype,S.D=_.prototype,S.prototype=new x,S.prototype.constructor=S,S.C=function(A,k,C){for(var P=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)P[Ft-2]=arguments[Ft];return _.prototype[k].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,x){x||(x=0);var A=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)A[k]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(k=0;16>k;++k)A[k]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=S.g[0],x=S.g[1],k=S.g[2];var C=S.g[3],P=_+(C^x&(k^C))+A[0]+3614090360&4294967295;_=x+(P<<7&4294967295|P>>>25),P=C+(k^_&(x^k))+A[1]+3905402710&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(x^C&(_^x))+A[2]+606105819&4294967295,k=C+(P<<17&4294967295|P>>>15),P=x+(_^k&(C^_))+A[3]+3250441966&4294967295,x=k+(P<<22&4294967295|P>>>10),P=_+(C^x&(k^C))+A[4]+4118548399&4294967295,_=x+(P<<7&4294967295|P>>>25),P=C+(k^_&(x^k))+A[5]+1200080426&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(x^C&(_^x))+A[6]+2821735955&4294967295,k=C+(P<<17&4294967295|P>>>15),P=x+(_^k&(C^_))+A[7]+4249261313&4294967295,x=k+(P<<22&4294967295|P>>>10),P=_+(C^x&(k^C))+A[8]+1770035416&4294967295,_=x+(P<<7&4294967295|P>>>25),P=C+(k^_&(x^k))+A[9]+2336552879&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(x^C&(_^x))+A[10]+4294925233&4294967295,k=C+(P<<17&4294967295|P>>>15),P=x+(_^k&(C^_))+A[11]+2304563134&4294967295,x=k+(P<<22&4294967295|P>>>10),P=_+(C^x&(k^C))+A[12]+1804603682&4294967295,_=x+(P<<7&4294967295|P>>>25),P=C+(k^_&(x^k))+A[13]+4254626195&4294967295,C=_+(P<<12&4294967295|P>>>20),P=k+(x^C&(_^x))+A[14]+2792965006&4294967295,k=C+(P<<17&4294967295|P>>>15),P=x+(_^k&(C^_))+A[15]+1236535329&4294967295,x=k+(P<<22&4294967295|P>>>10),P=_+(k^C&(x^k))+A[1]+4129170786&4294967295,_=x+(P<<5&4294967295|P>>>27),P=C+(x^k&(_^x))+A[6]+3225465664&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^x&(C^_))+A[11]+643717713&4294967295,k=C+(P<<14&4294967295|P>>>18),P=x+(C^_&(k^C))+A[0]+3921069994&4294967295,x=k+(P<<20&4294967295|P>>>12),P=_+(k^C&(x^k))+A[5]+3593408605&4294967295,_=x+(P<<5&4294967295|P>>>27),P=C+(x^k&(_^x))+A[10]+38016083&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^x&(C^_))+A[15]+3634488961&4294967295,k=C+(P<<14&4294967295|P>>>18),P=x+(C^_&(k^C))+A[4]+3889429448&4294967295,x=k+(P<<20&4294967295|P>>>12),P=_+(k^C&(x^k))+A[9]+568446438&4294967295,_=x+(P<<5&4294967295|P>>>27),P=C+(x^k&(_^x))+A[14]+3275163606&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^x&(C^_))+A[3]+4107603335&4294967295,k=C+(P<<14&4294967295|P>>>18),P=x+(C^_&(k^C))+A[8]+1163531501&4294967295,x=k+(P<<20&4294967295|P>>>12),P=_+(k^C&(x^k))+A[13]+2850285829&4294967295,_=x+(P<<5&4294967295|P>>>27),P=C+(x^k&(_^x))+A[2]+4243563512&4294967295,C=_+(P<<9&4294967295|P>>>23),P=k+(_^x&(C^_))+A[7]+1735328473&4294967295,k=C+(P<<14&4294967295|P>>>18),P=x+(C^_&(k^C))+A[12]+2368359562&4294967295,x=k+(P<<20&4294967295|P>>>12),P=_+(x^k^C)+A[5]+4294588738&4294967295,_=x+(P<<4&4294967295|P>>>28),P=C+(_^x^k)+A[8]+2272392833&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^x)+A[11]+1839030562&4294967295,k=C+(P<<16&4294967295|P>>>16),P=x+(k^C^_)+A[14]+4259657740&4294967295,x=k+(P<<23&4294967295|P>>>9),P=_+(x^k^C)+A[1]+2763975236&4294967295,_=x+(P<<4&4294967295|P>>>28),P=C+(_^x^k)+A[4]+1272893353&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^x)+A[7]+4139469664&4294967295,k=C+(P<<16&4294967295|P>>>16),P=x+(k^C^_)+A[10]+3200236656&4294967295,x=k+(P<<23&4294967295|P>>>9),P=_+(x^k^C)+A[13]+681279174&4294967295,_=x+(P<<4&4294967295|P>>>28),P=C+(_^x^k)+A[0]+3936430074&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^x)+A[3]+3572445317&4294967295,k=C+(P<<16&4294967295|P>>>16),P=x+(k^C^_)+A[6]+76029189&4294967295,x=k+(P<<23&4294967295|P>>>9),P=_+(x^k^C)+A[9]+3654602809&4294967295,_=x+(P<<4&4294967295|P>>>28),P=C+(_^x^k)+A[12]+3873151461&4294967295,C=_+(P<<11&4294967295|P>>>21),P=k+(C^_^x)+A[15]+530742520&4294967295,k=C+(P<<16&4294967295|P>>>16),P=x+(k^C^_)+A[2]+3299628645&4294967295,x=k+(P<<23&4294967295|P>>>9),P=_+(k^(x|~C))+A[0]+4096336452&4294967295,_=x+(P<<6&4294967295|P>>>26),P=C+(x^(_|~k))+A[7]+1126891415&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~x))+A[14]+2878612391&4294967295,k=C+(P<<15&4294967295|P>>>17),P=x+(C^(k|~_))+A[5]+4237533241&4294967295,x=k+(P<<21&4294967295|P>>>11),P=_+(k^(x|~C))+A[12]+1700485571&4294967295,_=x+(P<<6&4294967295|P>>>26),P=C+(x^(_|~k))+A[3]+2399980690&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~x))+A[10]+4293915773&4294967295,k=C+(P<<15&4294967295|P>>>17),P=x+(C^(k|~_))+A[1]+2240044497&4294967295,x=k+(P<<21&4294967295|P>>>11),P=_+(k^(x|~C))+A[8]+1873313359&4294967295,_=x+(P<<6&4294967295|P>>>26),P=C+(x^(_|~k))+A[15]+4264355552&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~x))+A[6]+2734768916&4294967295,k=C+(P<<15&4294967295|P>>>17),P=x+(C^(k|~_))+A[13]+1309151649&4294967295,x=k+(P<<21&4294967295|P>>>11),P=_+(k^(x|~C))+A[4]+4149444226&4294967295,_=x+(P<<6&4294967295|P>>>26),P=C+(x^(_|~k))+A[11]+3174756917&4294967295,C=_+(P<<10&4294967295|P>>>22),P=k+(_^(C|~x))+A[2]+718787259&4294967295,k=C+(P<<15&4294967295|P>>>17),P=x+(C^(k|~_))+A[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(k+(P<<21&4294967295|P>>>11))&4294967295,S.g[2]=S.g[2]+k&4294967295,S.g[3]=S.g[3]+C&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var x=_-this.blockSize,A=this.B,k=this.h,C=0;C<_;){if(k==0)for(;C<=x;)i(this,S,C),C+=this.blockSize;if(typeof S=="string"){for(;C<_;)if(A[k++]=S.charCodeAt(C++),k==this.blockSize){i(this,A),k=0;break}}else for(;C<_;)if(A[k++]=S[C++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var x=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=x&255,x/=256;for(this.u(S),S=Array(16),_=x=0;4>_;++_)for(var A=0;32>A;A+=8)S[x++]=this.g[_]>>>A&255;return S};function s(S,_){var x=a;return Object.prototype.hasOwnProperty.call(x,S)?x[S]:x[S]=_(S)}function o(S,_){this.h=_;for(var x=[],A=!0,k=S.length-1;0<=k;k--){var C=S[k]|0;A&&C==_||(x[k]=C,A=!1)}this.g=x}var a={};function l(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return h;if(0>S)return R(c(-S));for(var _=[],x=1,A=0;S>=x;A++)_[A]=S/x|0,x*=4294967296;return new o(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return R(d(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(_,8)),A=h,k=0;k<S.length;k+=8){var C=Math.min(8,S.length-k),P=parseInt(S.substring(k,k+C),_);8>C?(C=c(Math.pow(_,C)),A=A.j(C).add(c(P))):(A=A.j(x),A=A.add(c(P)))}return A}var h=l(0),p=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-R(this).m();for(var S=0,_=1,x=0;x<this.g.length;x++){var A=this.i(x);S+=(0<=A?A:4294967296+A)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(I(this))return"0";if(b(this))return"-"+R(this).toString(S);for(var _=c(Math.pow(S,6)),x=this,A="";;){var k=N(x,_).g;x=E(x,k.j(_));var C=((0<x.g.length?x.g[0]:x.h)>>>0).toString(S);if(x=k,I(x))return C+A;for(;6>C.length;)C="0"+C;A=C+A}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function I(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function b(S){return S.h==-1}t.l=function(S){return S=E(this,S),b(S)?-1:I(S)?0:1};function R(S){for(var _=S.g.length,x=[],A=0;A<_;A++)x[A]=~S.g[A];return new o(x,~S.h).add(p)}t.abs=function(){return b(this)?R(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),x=[],A=0,k=0;k<=_;k++){var C=A+(this.i(k)&65535)+(S.i(k)&65535),P=(C>>>16)+(this.i(k)>>>16)+(S.i(k)>>>16);A=P>>>16,C&=65535,P&=65535,x[k]=P<<16|C}return new o(x,x[x.length-1]&-2147483648?-1:0)};function E(S,_){return S.add(R(_))}t.j=function(S){if(I(this)||I(S))return h;if(b(this))return b(S)?R(this).j(R(S)):R(R(this).j(S));if(b(S))return R(this.j(R(S)));if(0>this.l(y)&&0>S.l(y))return c(this.m()*S.m());for(var _=this.g.length+S.g.length,x=[],A=0;A<2*_;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<S.g.length;k++){var C=this.i(A)>>>16,P=this.i(A)&65535,Ft=S.i(k)>>>16,$e=S.i(k)&65535;x[2*A+2*k]+=P*$e,w(x,2*A+2*k),x[2*A+2*k+1]+=C*$e,w(x,2*A+2*k+1),x[2*A+2*k+1]+=P*Ft,w(x,2*A+2*k+1),x[2*A+2*k+2]+=C*Ft,w(x,2*A+2*k+2)}for(A=0;A<_;A++)x[A]=x[2*A+1]<<16|x[2*A];for(A=_;A<2*_;A++)x[A]=0;return new o(x,0)};function w(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function T(S,_){this.g=S,this.h=_}function N(S,_){if(I(_))throw Error("division by zero");if(I(S))return new T(h,h);if(b(S))return _=N(R(S),_),new T(R(_.g),R(_.h));if(b(_))return _=N(S,R(_)),new T(R(_.g),_.h);if(30<S.g.length){if(b(S)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var x=p,A=_;0>=A.l(S);)x=L(x),A=L(A);var k=F(x,1),C=F(A,1);for(A=F(A,2),x=F(x,2);!I(A);){var P=C.add(A);0>=P.l(S)&&(k=k.add(x),C=P),A=F(A,1),x=F(x,1)}return _=E(S,k.j(_)),new T(k,_)}for(k=h;0<=S.l(_);){for(x=Math.max(1,Math.floor(S.m()/_.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),C=c(x),P=C.j(_);b(P)||0<P.l(S);)x-=A,C=c(x),P=C.j(_);I(C)&&(C=p),k=k.add(C),S=E(S,P)}return new T(k,S)}t.A=function(S){return N(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),x=[],A=0;A<_;A++)x[A]=this.i(A)&S.i(A);return new o(x,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),x=[],A=0;A<_;A++)x[A]=this.i(A)|S.i(A);return new o(x,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),x=[],A=0;A<_;A++)x[A]=this.i(A)^S.i(A);return new o(x,this.h^S.h)};function L(S){for(var _=S.g.length+1,x=[],A=0;A<_;A++)x[A]=S.i(A)<<1|S.i(A-1)>>>31;return new o(x,S.h)}function F(S,_){var x=_>>5;_%=32;for(var A=S.g.length-x,k=[],C=0;C<A;C++)k[C]=0<_?S.i(C+x)>>>_|S.i(C+x+1)<<32-_:S.i(C+x);return new o(k,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,eA=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,As=o}).apply(typeof uI<"u"?uI:typeof self<"u"?self:typeof window<"u"?window:{});var sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tA,nA,kl,rA,Fd,kg,iA,sA,oA;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,m){return u==Array.prototype||u==Object.prototype||(u[f]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof sd=="object"&&sd];for(var f=0;f<u.length;++f){var m=u[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var m=r;u=u.split(".");for(var v=0;v<u.length-1;v++){var D=u[v];if(!(D in m))break e;m=m[D]}u=u[u.length-1],v=m[u],f=f(v),f!=v&&f!=null&&e(m,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var m=0,v=!1,D={next:function(){if(!v&&m<u.length){var M=m++;return{value:f(M,u[M]),done:!1}}return v=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function c(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function d(u,f,m){return u.call.apply(u.bind,arguments)}function h(u,f,m){if(!u)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,v),u.apply(f,D)}}return function(){return u.apply(f,arguments)}}function p(u,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,p.apply(null,arguments)}function y(u,f){var m=Array.prototype.slice.call(arguments,1);return function(){var v=m.slice();return v.push.apply(v,arguments),u.apply(this,v)}}function I(u,f){function m(){}m.prototype=f.prototype,u.aa=f.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(v,D,M){for(var W=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)W[Te-2]=arguments[Te];return f.prototype[D].apply(v,W)}}function b(u){const f=u.length;if(0<f){const m=Array(f);for(let v=0;v<f;v++)m[v]=u[v];return m}return[]}function R(u,f){for(let m=1;m<arguments.length;m++){const v=arguments[m];if(l(v)){const D=u.length||0,M=v.length||0;u.length=D+M;for(let W=0;W<M;W++)u[D+W]=v[W]}else u.push(v)}}class E{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function w(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function N(u){return N[" "](u),u}N[" "]=function(){};var L=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function F(u,f,m){for(const v in u)f.call(m,u[v],v,u)}function S(u,f){for(const m in u)f.call(void 0,u[m],m,u)}function _(u){const f={};for(const m in u)f[m]=u[m];return f}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,f){let m,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(m in v)u[m]=v[m];for(let M=0;M<x.length;M++)m=x[M],Object.prototype.hasOwnProperty.call(v,m)&&(u[m]=v[m])}}function k(u){var f=1;u=u.split(":");const m=[];for(;0<f&&u.length;)m.push(u.shift()),f--;return u.length&&m.push(u.join(":")),m}function C(u){a.setTimeout(()=>{throw u},0)}function P(){var u=re;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class Ft{constructor(){this.h=this.g=null}add(f,m){const v=$e.get();v.set(f,m),this.h?this.h.next=v:this.g=v,this.h=v}}var $e=new E(()=>new es,u=>u.reset());class es{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,K=!1,re=new Ft,ie=()=>{const u=a.Promise.resolve(void 0);pt=()=>{u.then(de)}};var de=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(m){C(m)}var f=$e;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}K=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ze(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var pr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return u}();function mr(u,f){if(Ze.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,v=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(L){e:{try{N(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else m=="mouseover"?f=u.fromElement:m=="mouseout"&&(f=u.toElement);this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:gr[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&mr.aa.h.call(this)}}I(mr,Ze);var gr={2:"touch",3:"pen",4:"mouse"};mr.prototype.h=function(){mr.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var yr="closure_listenable_"+(1e6*Math.random()|0),jk=0;function Uk(u,f,m,v,D){this.listener=u,this.proxy=null,this.src=f,this.type=m,this.capture=!!v,this.ha=D,this.key=++jk,this.da=this.fa=!1}function bc(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Sc(u){this.src=u,this.g={},this.h=0}Sc.prototype.add=function(u,f,m,v,D){var M=u.toString();u=this.g[M],u||(u=this.g[M]=[],this.h++);var W=ip(u,f,v,D);return-1<W?(f=u[W],m||(f.fa=!1)):(f=new Uk(f,this.src,M,!!v,D),f.fa=m,u.push(f)),f};function rp(u,f){var m=f.type;if(m in u.g){var v=u.g[m],D=Array.prototype.indexOf.call(v,f,void 0),M;(M=0<=D)&&Array.prototype.splice.call(v,D,1),M&&(bc(f),u.g[m].length==0&&(delete u.g[m],u.h--))}}function ip(u,f,m,v){for(var D=0;D<u.length;++D){var M=u[D];if(!M.da&&M.listener==f&&M.capture==!!m&&M.ha==v)return D}return-1}var sp="closure_lm_"+(1e6*Math.random()|0),op={};function y0(u,f,m,v,D){if(Array.isArray(f)){for(var M=0;M<f.length;M++)y0(u,f[M],m,v,D);return null}return m=w0(m),u&&u[yr]?u.K(f,m,c(v)?!!v.capture:!!v,D):Bk(u,f,m,!1,v,D)}function Bk(u,f,m,v,D,M){if(!f)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,Te=lp(u);if(Te||(u[sp]=Te=new Sc(u)),m=Te.add(f,m,v,W,M),m.proxy)return m;if(v=zk(),m.proxy=v,v.src=u,v.listener=m,u.addEventListener)pr||(D=W),D===void 0&&(D=!1),u.addEventListener(f.toString(),v,D);else if(u.attachEvent)u.attachEvent(_0(f.toString()),v);else if(u.addListener&&u.removeListener)u.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return m}function zk(){function u(m){return f.call(u.src,u.listener,m)}const f=$k;return u}function v0(u,f,m,v,D){if(Array.isArray(f))for(var M=0;M<f.length;M++)v0(u,f[M],m,v,D);else v=c(v)?!!v.capture:!!v,m=w0(m),u&&u[yr]?(u=u.i,f=String(f).toString(),f in u.g&&(M=u.g[f],m=ip(M,m,v,D),-1<m&&(bc(M[m]),Array.prototype.splice.call(M,m,1),M.length==0&&(delete u.g[f],u.h--)))):u&&(u=lp(u))&&(f=u.g[f.toString()],u=-1,f&&(u=ip(f,m,v,D)),(m=-1<u?f[u]:null)&&ap(m))}function ap(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[yr])rp(f.i,u);else{var m=u.type,v=u.proxy;f.removeEventListener?f.removeEventListener(m,v,u.capture):f.detachEvent?f.detachEvent(_0(m),v):f.addListener&&f.removeListener&&f.removeListener(v),(m=lp(f))?(rp(m,u),m.h==0&&(m.src=null,f[sp]=null)):bc(u)}}}function _0(u){return u in op?op[u]:op[u]="on"+u}function $k(u,f){if(u.da)u=!0;else{f=new mr(f,this);var m=u.listener,v=u.ha||u.src;u.fa&&ap(u),u=m.call(v,f)}return u}function lp(u){return u=u[sp],u instanceof Sc?u:null}var up="__closure_events_fn_"+(1e9*Math.random()>>>0);function w0(u){return typeof u=="function"?u:(u[up]||(u[up]=function(f){return u.handleEvent(f)}),u[up])}function kt(){Ie.call(this),this.i=new Sc(this),this.M=this,this.F=null}I(kt,Ie),kt.prototype[yr]=!0,kt.prototype.removeEventListener=function(u,f,m,v){v0(this,u,f,m,v)};function jt(u,f){var m,v=u.F;if(v)for(m=[];v;v=v.F)m.push(v);if(u=u.M,v=f.type||f,typeof f=="string")f=new Ze(f,u);else if(f instanceof Ze)f.target=f.target||u;else{var D=f;f=new Ze(v,u),A(f,D)}if(D=!0,m)for(var M=m.length-1;0<=M;M--){var W=f.g=m[M];D=xc(W,v,!0,f)&&D}if(W=f.g=u,D=xc(W,v,!0,f)&&D,D=xc(W,v,!1,f)&&D,m)for(M=0;M<m.length;M++)W=f.g=m[M],D=xc(W,v,!1,f)&&D}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var m=u.g[f],v=0;v<m.length;v++)bc(m[v]);delete u.g[f],u.h--}}this.F=null},kt.prototype.K=function(u,f,m,v){return this.i.add(String(u),f,!1,m,v)},kt.prototype.L=function(u,f,m,v){return this.i.add(String(u),f,!0,m,v)};function xc(u,f,m,v){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,M=0;M<f.length;++M){var W=f[M];if(W&&!W.da&&W.capture==m){var Te=W.listener,Tt=W.ha||W.src;W.fa&&rp(u.i,W),D=Te.call(Tt,v)!==!1&&D}}return D&&!v.defaultPrevented}function E0(u,f,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(u,f||0)}function I0(u){u.g=E0(()=>{u.g=null,u.i&&(u.i=!1,I0(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class qk extends Ie{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:I0(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qa(u){Ie.call(this),this.h=u,this.g={}}I(qa,Ie);var T0=[];function b0(u){F(u.g,function(f,m){this.g.hasOwnProperty(m)&&ap(f)},u),u.g={}}qa.prototype.N=function(){qa.aa.N.call(this),b0(this)},qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cp=a.JSON.stringify,Wk=a.JSON.parse,Gk=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function dp(){}dp.prototype.h=null;function S0(u){return u.h||(u.h=u.i())}function x0(){}var Wa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hp(){Ze.call(this,"d")}I(hp,Ze);function fp(){Ze.call(this,"c")}I(fp,Ze);var ts={},A0=null;function Ac(){return A0=A0||new kt}ts.La="serverreachability";function P0(u){Ze.call(this,ts.La,u)}I(P0,Ze);function Ga(u){const f=Ac();jt(f,new P0(f))}ts.STAT_EVENT="statevent";function R0(u,f){Ze.call(this,ts.STAT_EVENT,u),this.stat=f}I(R0,Ze);function Ut(u){const f=Ac();jt(f,new R0(f,u))}ts.Ma="timingevent";function k0(u,f){Ze.call(this,ts.Ma,u),this.size=f}I(k0,Ze);function Ha(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},f)}function Ka(){this.g=!0}Ka.prototype.xa=function(){this.g=!1};function Hk(u,f,m,v,D,M){u.info(function(){if(u.g)if(M)for(var W="",Te=M.split("&"),Tt=0;Tt<Te.length;Tt++){var ge=Te[Tt].split("=");if(1<ge.length){var Ct=ge[0];ge=ge[1];var Nt=Ct.split("_");W=2<=Nt.length&&Nt[1]=="type"?W+(Ct+"="+ge+"&"):W+(Ct+"=redacted&")}}else W=null;else W=M;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+f+`
`+m+`
`+W})}function Kk(u,f,m,v,D,M,W){u.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+f+`
`+m+`
`+M+" "+W})}function io(u,f,m,v){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Yk(u,m)+(v?" "+v:"")})}function Qk(u,f){u.info(function(){return"TIMEOUT: "+f})}Ka.prototype.info=function(){};function Yk(u,f){if(!u.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var v=m[u];if(!(2>v.length)){var D=v[1];if(Array.isArray(D)&&!(1>D.length)){var M=D[0];if(M!="noop"&&M!="stop"&&M!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return cp(m)}catch{return f}}var Pc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},C0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pp;function Rc(){}I(Rc,dp),Rc.prototype.g=function(){return new XMLHttpRequest},Rc.prototype.i=function(){return{}},pp=new Rc;function Gr(u,f,m,v){this.j=u,this.i=f,this.l=m,this.R=v||1,this.U=new qa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new N0}function N0(){this.i=null,this.g="",this.h=!1}var D0={},mp={};function gp(u,f,m){u.L=1,u.v=Dc(vr(f)),u.m=m,u.P=!0,O0(u,null)}function O0(u,f){u.F=Date.now(),kc(u),u.A=vr(u.v);var m=u.A,v=u.R;Array.isArray(v)||(v=[String(v)]),K0(m.i,"t",v),u.C=0,m=u.j.J,u.h=new N0,u.g=hw(u.j,m?f:null,!u.m),0<u.O&&(u.M=new qk(p(u.Y,u,u.g),u.O)),f=u.U,m=u.g,v=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(T0[0]=D.toString()),D=T0);for(var M=0;M<D.length;M++){var W=y0(m,D[M],v||f.handleEvent,!1,f.h||f);if(!W)break;f.g[W.key]=W}f=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),Ga(),Hk(u.i,u.u,u.A,u.l,u.R,u.m)}Gr.prototype.ca=function(u){u=u.target;const f=this.M;f&&_r(u)==3?f.j():this.Y(u)},Gr.prototype.Y=function(u){try{if(u==this.g)e:{const Nt=_r(this.g);var f=this.g.Ba();const ao=this.g.Z();if(!(3>Nt)&&(Nt!=3||this.g&&(this.h.h||this.g.oa()||tw(this.g)))){this.J||Nt!=4||f==7||(f==8||0>=ao?Ga(3):Ga(2)),yp(this);var m=this.g.Z();this.X=m;t:if(V0(this)){var v=tw(this.g);u="";var D=v.length,M=_r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),Qa(this);var W="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,u+=this.h.i.decode(v[f],{stream:!(M&&f==D-1)});v.length=0,this.h.g+=u,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=m==200,Kk(this.i,this.u,this.A,this.l,this.R,Nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Tt=this.g;if((Te=Tt.g?Tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Te)){var ge=Te;break t}}ge=null}if(m=ge)io(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vp(this,m);else{this.o=!1,this.s=3,Ut(12),ns(this),Qa(this);break e}}if(this.P){m=!0;let On;for(;!this.J&&this.C<W.length;)if(On=Jk(this,W),On==mp){Nt==4&&(this.s=4,Ut(14),m=!1),io(this.i,this.l,null,"[Incomplete Response]");break}else if(On==D0){this.s=4,Ut(15),io(this.i,this.l,W,"[Invalid Chunk]"),m=!1;break}else io(this.i,this.l,On,null),vp(this,On);if(V0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Nt!=4||W.length!=0||this.h.h||(this.s=1,Ut(16),m=!1),this.o=this.o&&m,!m)io(this.i,this.l,W,"[Invalid Chunked Response]"),ns(this),Qa(this);else if(0<W.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),bp(Ct),Ct.M=!0,Ut(11))}}else io(this.i,this.l,W,null),vp(this,W);Nt==4&&ns(this),this.o&&!this.J&&(Nt==4?lw(this.j,this):(this.o=!1,kc(this)))}else pC(this.g),m==400&&0<W.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),ns(this),Qa(this)}}}catch{}finally{}};function V0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Jk(u,f){var m=u.C,v=f.indexOf(`
`,m);return v==-1?mp:(m=Number(f.substring(m,v)),isNaN(m)?D0:(v+=1,v+m>f.length?mp:(f=f.slice(v,v+m),u.C=v+m,f)))}Gr.prototype.cancel=function(){this.J=!0,ns(this)};function kc(u){u.S=Date.now()+u.I,L0(u,u.I)}function L0(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ha(p(u.ba,u),f)}function yp(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Gr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Qk(this.i,this.A),this.L!=2&&(Ga(),Ut(17)),ns(this),this.s=2,Qa(this)):L0(this,this.S-u)};function Qa(u){u.j.G==0||u.J||lw(u.j,u)}function ns(u){yp(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,b0(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function vp(u,f){try{var m=u.j;if(m.G!=0&&(m.g==u||_p(m.h,u))){if(!u.K&&_p(m.h,u)&&m.G==3){try{var v=m.Da.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Fc(m),Lc(m);else break e;Tp(m),Ut(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ha(p(m.Za,m),6e3));if(1>=j0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else is(m,11)}else if((u.K||m.g==u)&&Fc(m),!w(f))for(D=m.Da.g.parse(f),f=0;f<D.length;f++){let ge=D[f];if(m.T=ge[0],ge=ge[1],m.G==2)if(ge[0]=="c"){m.K=ge[1],m.ia=ge[2];const Ct=ge[3];Ct!=null&&(m.la=Ct,m.j.info("VER="+m.la));const Nt=ge[4];Nt!=null&&(m.Aa=Nt,m.j.info("SVER="+m.Aa));const ao=ge[5];ao!=null&&typeof ao=="number"&&0<ao&&(v=1.5*ao,m.L=v,m.j.info("backChannelRequestTimeoutMs_="+v)),v=m;const On=u.g;if(On){const Uc=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Uc){var M=v.h;M.g||Uc.indexOf("spdy")==-1&&Uc.indexOf("quic")==-1&&Uc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(wp(M,M.h),M.h=null))}if(v.D){const Sp=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Sp&&(v.ya=Sp,Ae(v.I,v.D,Sp))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),v=m;var W=u;if(v.qa=dw(v,v.J?v.ia:null,v.W),W.K){U0(v.h,W);var Te=W,Tt=v.L;Tt&&(Te.I=Tt),Te.B&&(yp(Te),kc(Te)),v.g=W}else ow(v);0<m.i.length&&Mc(m)}else ge[0]!="stop"&&ge[0]!="close"||is(m,7);else m.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?is(m,7):Ip(m):ge[0]!="noop"&&m.l&&m.l.ta(ge),m.v=0)}}Ga(4)}catch{}}var Xk=class{constructor(u,f){this.g=u,this.map=f}};function M0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function F0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function j0(u){return u.h?1:u.g?u.g.size:0}function _p(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function wp(u,f){u.g?u.g.add(f):u.h=f}function U0(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}M0.prototype.cancel=function(){if(this.i=B0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function B0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const m of u.g.values())f=f.concat(m.D);return f}return b(u.i)}function Zk(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],m=u.length,v=0;v<m;v++)f.push(u[v]);return f}f=[],m=0;for(v in u)f[m++]=u[v];return f}function eC(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var m=0;m<u;m++)f.push(m);return f}f=[],m=0;for(const v in u)f[m++]=v;return f}}}function z0(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var m=eC(u),v=Zk(u),D=v.length,M=0;M<D;M++)f.call(void 0,v[M],m&&m[M],u)}var $0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tC(u,f){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var v=u[m].indexOf("="),D=null;if(0<=v){var M=u[m].substring(0,v);D=u[m].substring(v+1)}else M=u[m];f(M,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function rs(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof rs){this.h=u.h,Cc(this,u.j),this.o=u.o,this.g=u.g,Nc(this,u.s),this.l=u.l;var f=u.i,m=new Xa;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),q0(this,m),this.m=u.m}else u&&(f=String(u).match($0))?(this.h=!1,Cc(this,f[1]||"",!0),this.o=Ya(f[2]||""),this.g=Ya(f[3]||"",!0),Nc(this,f[4]),this.l=Ya(f[5]||"",!0),q0(this,f[6]||"",!0),this.m=Ya(f[7]||"")):(this.h=!1,this.i=new Xa(null,this.h))}rs.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Ja(f,W0,!0),":");var m=this.g;return(m||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Ja(f,W0,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Ja(m,m.charAt(0)=="/"?iC:rC,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Ja(m,oC)),u.join("")};function vr(u){return new rs(u)}function Cc(u,f,m){u.j=m?Ya(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Nc(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function q0(u,f,m){f instanceof Xa?(u.i=f,aC(u.i,u.h)):(m||(f=Ja(f,sC)),u.i=new Xa(f,u.h))}function Ae(u,f,m){u.i.set(f,m)}function Dc(u){return Ae(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ya(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ja(u,f,m){return typeof u=="string"?(u=encodeURI(u).replace(f,nC),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function nC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var W0=/[#\/\?@]/g,rC=/[#\?:]/g,iC=/[#\?]/g,sC=/[#\?@]/g,oC=/#/g;function Xa(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function Hr(u){u.g||(u.g=new Map,u.h=0,u.i&&tC(u.i,function(f,m){u.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Xa.prototype,t.add=function(u,f){Hr(this),this.i=null,u=so(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(f),this.h+=1,this};function G0(u,f){Hr(u),f=so(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function H0(u,f){return Hr(u),f=so(u,f),u.g.has(f)}t.forEach=function(u,f){Hr(this),this.g.forEach(function(m,v){m.forEach(function(D){u.call(f,D,v,this)},this)},this)},t.na=function(){Hr(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let v=0;v<f.length;v++){const D=u[v];for(let M=0;M<D.length;M++)m.push(f[v])}return m},t.V=function(u){Hr(this);let f=[];if(typeof u=="string")H0(this,u)&&(f=f.concat(this.g.get(so(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)f=f.concat(u[m])}return f},t.set=function(u,f){return Hr(this),this.i=null,u=so(this,u),H0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function K0(u,f,m){G0(u,f),0<m.length&&(u.i=null,u.g.set(so(u,f),b(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var v=f[m];const M=encodeURIComponent(String(v)),W=this.V(v);for(v=0;v<W.length;v++){var D=M;W[v]!==""&&(D+="="+encodeURIComponent(String(W[v]))),u.push(D)}}return this.i=u.join("&")};function so(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function aC(u,f){f&&!u.j&&(Hr(u),u.i=null,u.g.forEach(function(m,v){var D=v.toLowerCase();v!=D&&(G0(this,v),K0(this,D,m))},u)),u.j=f}function lC(u,f){const m=new Ka;if(a.Image){const v=new Image;v.onload=y(Kr,m,"TestLoadImage: loaded",!0,f,v),v.onerror=y(Kr,m,"TestLoadImage: error",!1,f,v),v.onabort=y(Kr,m,"TestLoadImage: abort",!1,f,v),v.ontimeout=y(Kr,m,"TestLoadImage: timeout",!1,f,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=u}else f(!1)}function uC(u,f){const m=new Ka,v=new AbortController,D=setTimeout(()=>{v.abort(),Kr(m,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:v.signal}).then(M=>{clearTimeout(D),M.ok?Kr(m,"TestPingServer: ok",!0,f):Kr(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),Kr(m,"TestPingServer: error",!1,f)})}function Kr(u,f,m,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(m)}catch{}}function cC(){this.g=new Gk}function dC(u,f,m){const v=m||"";try{z0(u,function(D,M){let W=D;c(D)&&(W=cp(D)),f.push(v+M+"="+encodeURIComponent(W))})}catch(D){throw f.push(v+"type="+encodeURIComponent("_badmap")),D}}function Za(u){this.l=u.Ub||null,this.j=u.eb||!1}I(Za,dp),Za.prototype.g=function(){return new Oc(this.l,this.j)},Za.prototype.i=function(u){return function(){return u}}({});function Oc(u,f){kt.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Oc,kt),t=Oc.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,tl(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,el(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,tl(this)),this.g&&(this.readyState=3,tl(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Q0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Q0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?el(this):tl(this),this.readyState==3&&Q0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,el(this))},t.Qa=function(u){this.g&&(this.response=u,el(this))},t.ga=function(){this.g&&el(this)};function el(u){u.readyState=4,u.l=null,u.j=null,u.v=null,tl(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=f.next();return u.join(`\r
`)};function tl(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Oc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Y0(u){let f="";return F(u,function(m,v){f+=v,f+=":",f+=m,f+=`\r
`}),f}function Ep(u,f,m){e:{for(v in m){var v=!1;break e}v=!0}v||(m=Y0(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):Ae(u,f,m))}function qe(u){kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(qe,kt);var hC=/^https?$/i,fC=["POST","PUT"];t=qe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,m,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pp.g(),this.v=this.o?S0(this.o):S0(pp),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(M){J0(this,M);return}if(u=m||"",m=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)m.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())m.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(m.keys()).find(M=>M.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(fC,f,void 0))||v||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,W]of m)this.g.setRequestHeader(M,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ew(this),this.u=!0,this.g.send(u),this.u=!1}catch(M){J0(this,M)}};function J0(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,X0(u),Vc(u)}function X0(u){u.A||(u.A=!0,jt(u,"complete"),jt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,jt(this,"complete"),jt(this,"abort"),Vc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vc(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Z0(this):this.bb())},t.bb=function(){Z0(this)};function Z0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||_r(u)!=4||u.Z()!=2)){if(u.u&&_r(u)==4)E0(u.Ea,0,u);else if(jt(u,"readystatechange"),_r(u)==4){u.h=!1;try{const W=u.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var v;if(v=W===0){var D=String(u.D).match($0)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),v=!hC.test(D?D.toLowerCase():"")}m=v}if(m)jt(u,"complete"),jt(u,"success");else{u.m=6;try{var M=2<_r(u)?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.Z()+"]",X0(u)}}finally{Vc(u)}}}}function Vc(u,f){if(u.g){ew(u);const m=u.g,v=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||jt(u,"ready");try{m.onreadystatechange=v}catch{}}}function ew(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function _r(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<_r(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),Wk(f)}};function tw(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function pC(u){const f={};u=(u.g&&2<=_r(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<u.length;v++){if(w(u[v]))continue;var m=k(u[v]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const M=f[D]||[];f[D]=M,M.push(m)}S(f,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nl(u,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||f}function nw(u){this.Aa=0,this.i=[],this.j=new Ka,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nl("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nl("baseRetryDelayMs",5e3,u),this.cb=nl("retryDelaySeedMs",1e4,u),this.Wa=nl("forwardChannelMaxRetries",2,u),this.wa=nl("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new M0(u&&u.concurrentRequestLimit),this.Da=new cC,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nw.prototype,t.la=8,t.G=1,t.connect=function(u,f,m,v){Ut(0),this.W=u,this.H=f||{},m&&v!==void 0&&(this.H.OSID=m,this.H.OAID=v),this.F=this.X,this.I=dw(this,null,this.W),Mc(this)};function Ip(u){if(rw(u),u.G==3){var f=u.U++,m=vr(u.I);if(Ae(m,"SID",u.K),Ae(m,"RID",f),Ae(m,"TYPE","terminate"),rl(u,m),f=new Gr(u,u.j,f),f.L=2,f.v=Dc(vr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=hw(f.j,null),f.g.ea(f.v)),f.F=Date.now(),kc(f)}cw(u)}function Lc(u){u.g&&(bp(u),u.g.cancel(),u.g=null)}function rw(u){Lc(u),u.u&&(a.clearTimeout(u.u),u.u=null),Fc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Mc(u){if(!F0(u.h)&&!u.s){u.s=!0;var f=u.Ga;pt||ie(),K||(pt(),K=!0),re.add(f,u),u.B=0}}function mC(u,f){return j0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ha(p(u.Ga,u,f),uw(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new Gr(this,this.j,u);let M=this.o;if(this.S&&(M?(M=_(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(D.H=M,M=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var v=this.i[m];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=sw(this,D,f),m=vr(this.I),Ae(m,"RID",u),Ae(m,"CVER",22),this.D&&Ae(m,"X-HTTP-Session-Id",this.D),rl(this,m),M&&(this.O?f="headers="+encodeURIComponent(String(Y0(M)))+"&"+f:this.m&&Ep(m,this.m,M)),wp(this.h,D),this.Ua&&Ae(m,"TYPE","init"),this.P?(Ae(m,"$req",f),Ae(m,"SID","null"),D.T=!0,gp(D,m,null)):gp(D,m,f),this.G=2}}else this.G==3&&(u?iw(this,u):this.i.length==0||F0(this.h)||iw(this))};function iw(u,f){var m;f?m=f.l:m=u.U++;const v=vr(u.I);Ae(v,"SID",u.K),Ae(v,"RID",m),Ae(v,"AID",u.T),rl(u,v),u.m&&u.o&&Ep(v,u.m,u.o),m=new Gr(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),f&&(u.i=f.D.concat(u.i)),f=sw(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),wp(u.h,m),gp(m,v,f)}function rl(u,f){u.H&&F(u.H,function(m,v){Ae(f,v,m)}),u.l&&z0({},function(m,v){Ae(f,v,m)})}function sw(u,f,m){m=Math.min(u.i.length,m);var v=u.l?p(u.l.Na,u.l,u):null;e:{var D=u.i;let M=-1;for(;;){const W=["count="+m];M==-1?0<m?(M=D[0].g,W.push("ofs="+M)):M=0:W.push("ofs="+M);let Te=!0;for(let Tt=0;Tt<m;Tt++){let ge=D[Tt].g;const Ct=D[Tt].map;if(ge-=M,0>ge)M=Math.max(0,D[Tt].g-100),Te=!1;else try{dC(Ct,W,"req"+ge+"_")}catch{v&&v(Ct)}}if(Te){v=W.join("&");break e}}}return u=u.i.splice(0,m),f.D=u,v}function ow(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;pt||ie(),K||(pt(),K=!0),re.add(f,u),u.v=0}}function Tp(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ha(p(u.Fa,u),uw(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,aw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ha(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),Lc(this),aw(this))};function bp(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function aw(u){u.g=new Gr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=vr(u.qa);Ae(f,"RID","rpc"),Ae(f,"SID",u.K),Ae(f,"AID",u.T),Ae(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ae(f,"TO",u.ja),Ae(f,"TYPE","xmlhttp"),rl(u,f),u.m&&u.o&&Ep(f,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Dc(vr(f)),m.m=null,m.P=!0,O0(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Lc(this),Tp(this),Ut(19))};function Fc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function lw(u,f){var m=null;if(u.g==f){Fc(u),bp(u),u.g=null;var v=2}else if(_p(u.h,f))m=f.D,U0(u.h,f),v=1;else return;if(u.G!=0){if(f.o)if(v==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var D=u.B;v=Ac(),jt(v,new k0(v,m)),Mc(u)}else ow(u);else if(D=f.s,D==3||D==0&&0<f.X||!(v==1&&mC(u,f)||v==2&&Tp(u)))switch(m&&0<m.length&&(f=u.h,f.i=f.i.concat(m)),D){case 1:is(u,5);break;case 4:is(u,10);break;case 3:is(u,6);break;default:is(u,2)}}}function uw(u,f){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*f}function is(u,f){if(u.j.info("Error code "+f),f==2){var m=p(u.fb,u),v=u.Xa;const D=!v;v=new rs(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Cc(v,"https"),Dc(v),D?lC(v.toString(),m):uC(v.toString(),m)}else Ut(2);u.G=0,u.l&&u.l.sa(f),cw(u),rw(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function cw(u){if(u.G=0,u.ka=[],u.l){const f=B0(u.h);(f.length!=0||u.i.length!=0)&&(R(u.ka,f),R(u.ka,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.ra()}}function dw(u,f,m){var v=m instanceof rs?vr(m):new rs(m);if(v.g!="")f&&(v.g=f+"."+v.g),Nc(v,v.s);else{var D=a.location;v=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var M=new rs(null);v&&Cc(M,v),f&&(M.g=f),D&&Nc(M,D),m&&(M.l=m),v=M}return m=u.D,f=u.ya,m&&f&&Ae(v,m,f),Ae(v,"VER",u.la),rl(u,v),v}function hw(u,f,m){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new qe(new Za({eb:m})):new qe(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fw(){}t=fw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function jc(){}jc.prototype.g=function(u,f){return new un(u,f)};function un(u,f){kt.call(this),this.g=new nw(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!w(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!w(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new oo(this)}I(un,kt),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Ip(this.g)},un.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=cp(u),u=m);f.i.push(new Xk(f.Ya++,u)),f.G==3&&Mc(f)},un.prototype.N=function(){this.g.l=null,delete this.j,Ip(this.g),delete this.g,un.aa.N.call(this)};function pw(u){hp.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const m in f){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}I(pw,hp);function mw(){fp.call(this),this.status=1}I(mw,fp);function oo(u){this.g=u}I(oo,fw),oo.prototype.ua=function(){jt(this.g,"a")},oo.prototype.ta=function(u){jt(this.g,new pw(u))},oo.prototype.sa=function(u){jt(this.g,new mw)},oo.prototype.ra=function(){jt(this.g,"b")},jc.prototype.createWebChannel=jc.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,oA=function(){return new jc},sA=function(){return Ac()},iA=ts,kg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pc.NO_ERROR=0,Pc.TIMEOUT=8,Pc.HTTP_ERROR=6,Fd=Pc,C0.COMPLETE="complete",rA=C0,x0.EventType=Wa,Wa.OPEN="a",Wa.CLOSE="b",Wa.ERROR="c",Wa.MESSAGE="d",kt.prototype.listen=kt.prototype.K,kl=x0,nA=Za,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,tA=qe}).apply(typeof sd<"u"?sd:typeof self<"u"?self:typeof window<"u"?window:{});const cI="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Da="10.12.0";/**
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
 */const ki=new ff("@firebase/firestore");function go(){return ki.logLevel}function VF(t){ki.setLogLevel(t)}function z(t,...e){if(ki.logLevel<=ae.DEBUG){const n=e.map(Xv);ki.debug(`Firestore (${Da}): ${t}`,...n)}}function tt(t,...e){if(ki.logLevel<=ae.ERROR){const n=e.map(Xv);ki.error(`Firestore (${Da}): ${t}`,...n)}}function Wn(t,...e){if(ki.logLevel<=ae.WARN){const n=e.map(Xv);ki.warn(`Firestore (${Da}): ${t}`,...n)}}function Xv(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Da}) INTERNAL ASSERTION FAILED: `+t;throw tt(e),new Error(e)}function ee(t,e){t||Q()}function LF(t,e){t||Q()}function H(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class aA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MF{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class FF{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jF{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new aA(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new yt(e)}}class UF{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BF{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new UF(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $F{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.R=n.token,new zF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function aa(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function uA(t){return t+"\0"}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Me(0,0))}static max(){return new te(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ru{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ru.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ru?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Ru{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const WF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Ru{construct(e,n,r){return new Oe(e,n,r)}static isValidIdentifier(e){return WF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ue.fromString(e))}static fromName(e){return new G(ue.fromString(e).popFirst(5))}static empty(){return new G(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ue(e.slice()))}}/**
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
 */class Nh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Cg(t){return t.fields.find(e=>e.kind===2)}function us(t){return t.fields.filter(e=>e.kind!==2)}Nh.UNKNOWN_ID=-1;class jd{constructor(e,n){this.fieldPath=e,this.kind=n}}class ku{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ku(0,vn.min())}}function cA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new vn(i,G.empty(),e)}function dA(t){return new vn(t.readTime,t.key,-1)}class vn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vn(te.min(),G.empty(),-1)}static max(){return new vn(te.max(),G.empty(),-1)}}function Zv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const hA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==hA)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Sf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new wt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Hl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=e_(r.target.error);this.V.reject(new Hl(e,i))}}static open(e,n,r,i){try{return new Sf(n,e.transaction(i,r))}catch(s){throw new Hl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(z("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new HF(n)}}class ar{constructor(e,n,r){this.name=e,this.version=n,this.p=r,ar.S(Fe())===12.2&&tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return z("SimpleDb","Removing database:",e),cs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!wu())return!1;if(ar.C())return!0;const e=Fe(),n=ar.S(e),r=0<n&&n<10,i=pA(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(z("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Hl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Hl(e,o))},i.onupgradeneeded=s=>{z("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{z("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Sf.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(z("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function pA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class GF{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return cs(this.B.delete())}}class Hl extends B{constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ji(t){return t.name==="IndexedDbTransactionError"}class HF{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(z("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(z("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),cs(r)}add(e){return z("SimpleDb","ADD",this.store.name,e,e),cs(this.store.add(e))}get(e){return cs(this.store.get(e)).next(n=>(n===void 0&&(n=null),z("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return z("SimpleDb","DELETE",this.store.name,e),cs(this.store.delete(e))}count(){return z("SimpleDb","COUNT",this.store.name),cs(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){z("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=e_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new GF(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const d=c.catch(h=>(l.done(),O.reject(h)));r.push(d)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function cs(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=e_(r.target.error);n(i)}})}let dI=!1;function e_(t){const e=ar.S(Fe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return dI||(dI=!0,setTimeout(()=>{throw r},0)),r}}return t}class KF{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){z("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{z("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Ji(n)?z("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Yi(n)}await this.X(6e4)})}}class QF{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return z("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(z("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=dA(s);Zv(o,r)>0&&(r=o)}),new vn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class tn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tn.oe=-1;function sc(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function mA(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hI(e)),e=YF(t.get(n),e);return hI(e)}function YF(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function hI(t){return t+""}function tr(t){const e=t.length;if(ee(e>=2),e===2)return ee(t.charAt(0)===""&&t.charAt(1)===""),ue.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Q()}s=o+2}return new ue(r)}/**
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
 */const fI=["userId","batchId"];/**
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
 */function Ud(t,e){return[t,Gt(e)]}function gA(t,e,n){return[t,Gt(e),n]}const JF={},XF=["prefixPath","collectionGroup","readTime","documentId"],ZF=["prefixPath","collectionGroup","documentId"],e3=["collectionGroup","readTime","prefixPath","documentId"],t3=["canonicalId","targetId"],n3=["targetId","path"],r3=["path","targetId"],i3=["collectionId","parent"],s3=["indexId","uid"],o3=["uid","sequenceNumber"],a3=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],l3=["indexId","uid","orderedDocumentKey"],u3=["userId","collectionPath","documentId"],c3=["userId","collectionPath","largestBatchId"],d3=["userId","collectionGroup","largestBatchId"],yA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],h3=[...yA,"documentOverlays"],vA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_A=vA,wA=[..._A,"indexConfiguration","indexState","indexEntries"],f3=wA;/**
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
 */class Ng extends fA{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Et(t,e){const n=H(t);return ar.F(n._e,e)}/**
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
 */function pI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new od(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new od(this.root,e,this.comparator,!1)}getReverseIterator(){return new od(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new od(this.root,e,this.comparator,!0)}}class od{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??St.RED,this.left=i??St.EMPTY,this.right=s??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new St(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mI(this.data.getIterator())}getIteratorFrom(e){return new mI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class mI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function co(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new nn([])}unionWith(e){let n=new Ee(Oe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return aa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class IA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function p3(){return typeof atob<"u"}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IA("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const m3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(ee(!!t),typeof t=="string"){let e=0;const n=m3.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function xf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function t_(t){const e=t.mapValue.fields.__previous_value__;return xf(e)?t_(e):e}function Nu(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class g3{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Bd={nullValue:"NULL_VALUE"};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xf(t)?4:TA(t)?9007199254740991:10:Q()}function dr(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nu(t).isEqual(Nu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Or(i.timestampValue),a=Or(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ge(i.geoPointValue.latitude)===Ge(s.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ge(i.integerValue)===Ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ge(i.doubleValue),a=Ge(s.doubleValue);return o===a?Cu(o)===Cu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return aa(t.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pI(o)!==pI(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!dr(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function Du(t,e){return(t.values||[]).find(n=>dr(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=Fs(t),r=Fs(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ge(s.integerValue||s.doubleValue),l=Ge(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return gI(t.timestampValue,e.timestampValue);case 4:return gI(Nu(t),Nu(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ci(s),l=Ci(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=se(a[c],l[c]);if(d!==0)return d}return se(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=se(Ge(s.latitude),Ge(o.latitude));return a!==0?a:se(Ge(s.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const d=Di(a[c],l[c]);if(d)return d}return se(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===fi.mapValue&&o===fi.mapValue)return 0;if(s===fi.mapValue)return 1;if(o===fi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let h=0;h<l.length&&h<d.length;++h){const p=se(l[h],d[h]);if(p!==0)return p;const y=Di(a[l[h]],c[d[h]]);if(y!==0)return y}return se(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function gI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Or(t),r=Or(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function la(t){return Dg(t)}function Dg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Dg(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Dg(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function js(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Og(t){return!!t&&"integerValue"in t}function Ou(t){return!!t&&"arrayValue"in t}function yI(t){return!!t&&"nullValue"in t}function vI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zd(t){return!!t&&"mapValue"in t}function Kl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Kl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function TA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function y3(t){return"nullValue"in t?Bd:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?js(Ni.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Q()}function v3(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?js(Ni.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?fi:Q()}function _I(t,e){const n=Di(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function wI(t,e){const n=Di(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kl(n)}setAll(e){let n=Oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Kl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Kl(this.value))}}function bA(t){const e=[];return Zs(t.fields,(n,r)=>{const i=new Oe([n]);if(zd(r)){const s=bA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class ke{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,te.min(),te.min(),te.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new ke(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new ke(e,2,n,te.min(),te.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,te.min(),te.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oi{constructor(e,n){this.position=e,this.inclusive=n}}function EI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function II(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vu{constructor(e,n="asc"){this.field=e,this.dir=n}}function _3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class SA{}class ce extends SA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new w3(e,n,r):n==="array-contains"?new T3(e,r):n==="in"?new CA(e,r):n==="not-in"?new b3(e,r):n==="array-contains-any"?new S3(e,r):new ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new E3(e,r):new I3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _e extends SA{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new _e(e,n)}matches(e){return ua(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ua(t){return t.op==="and"}function Vg(t){return t.op==="or"}function n_(t){return xA(t)&&ua(t)}function xA(t){for(const e of t.filters)if(e instanceof _e)return!1;return!0}function Lg(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+la(t.value);if(n_(t))return t.filters.map(e=>Lg(e)).join(",");{const e=t.filters.map(n=>Lg(n)).join(",");return`${t.op}(${e})`}}function AA(t,e){return t instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&dr(r.value,i.value)}(t,e):t instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&AA(o,i.filters[a]),!0):!1}(t,e):void Q()}function PA(t,e){const n=t.filters.concat(e);return _e.create(n,t.op)}function RA(t){return t instanceof ce?function(n){return`${n.field.canonicalString()} ${n.op} ${la(n.value)}`}(t):t instanceof _e?function(n){return n.op.toString()+" {"+n.getFilters().map(RA).join(" ,")+"}"}(t):"Filter"}class w3 extends ce{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class E3 extends ce{constructor(e,n){super(e,"in",n),this.keys=kA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class I3 extends ce{constructor(e,n){super(e,"not-in",n),this.keys=kA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class T3 extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ou(n)&&Du(n.arrayValue,this.value)}}class CA extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Du(this.value.arrayValue,n)}}class b3 extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(Du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Du(this.value.arrayValue,n)}}class S3 extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Du(this.value.arrayValue,r))}}/**
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
 */class x3{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Mg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new x3(t,e,n,r,i,s,o)}function Us(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>la(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>la(r)).join(",")),e.ue=n}return e.ue}function oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!II(t.startAt,e.startAt)&&II(t.endAt,e.endAt)}function Dh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Oh(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function TI(t,e,n){let r=Bd,i=!0;for(const s of Oh(t,e)){let o=Bd,a=!0;switch(s.op){case"<":case"<=":o=y3(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Bd}_I({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];_I({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function bI(t,e,n){let r=fi,i=!0;for(const s of Oh(t,e)){let o=fi,a=!0;switch(s.op){case">=":case">":o=v3(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=fi}wI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];wI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class zr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function NA(t,e,n,r,i,s,o,a){return new zr(t,e,n,r,i,s,o,a)}function Oa(t){return new zr(t)}function SI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function r_(t){return t.collectionGroup!==null}function Ho(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ee(Oe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vu(s,r))}),n.has(Oe.keyField().canonicalString())||e.ce.push(new Vu(Oe.keyField(),r))}return e.ce}function Ht(t){const e=H(t);return e.le||(e.le=A3(e,Ho(t))),e.le}function A3(t,e){if(t.limitType==="F")return Mg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vu(i.field,s)});const n=t.endAt?new Oi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oi(t.startAt.position,t.startAt.inclusive):null;return Mg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fg(t,e){const n=t.filters.concat([e]);return new zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vh(t,e,n){return new zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return oc(Ht(t),Ht(e))&&t.limitType===e.limitType}function DA(t){return`${Us(Ht(t))}|lt:${t.limitType}`}function yo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>RA(i)).join(", ")}]`),sc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>la(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>la(i)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=EI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ho(r),i)||r.endAt&&!function(o,a,l){const c=EI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ho(r),i))}(t,e)}function OA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VA(t){return(e,n)=>{let r=!1;for(const i of Ho(t)){const s=P3(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function P3(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Di(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EA(this.inner)}size(){return this.innerSize}}/**
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
 */const R3=new xe(G.comparator);function rn(){return R3}const LA=new xe(G.comparator);function Cl(...t){let e=LA;for(const n of t)e=e.insert(n.key,n);return e}function MA(t){let e=LA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function nr(){return Ql()}function FA(){return Ql()}function Ql(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const k3=new xe(G.comparator),C3=new Ee(G.comparator);function oe(...t){let e=C3;for(const n of t)e=e.add(n);return e}const N3=new Ee(se);function i_(){return N3}/**
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
 */function jA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function UA(t){return{integerValue:""+t}}function BA(t,e){return mA(e)?UA(e):jA(t,e)}/**
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
 */class Af{constructor(){this._=void 0}}function D3(t,e,n){return t instanceof ca?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&xf(s)&&(s=t_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bs?$A(t,e):t instanceof zs?qA(t,e):function(i,s){const o=zA(i,s),a=xI(o)+xI(i.Pe);return Og(o)&&Og(i.Pe)?UA(a):jA(i.serializer,a)}(t,e)}function O3(t,e,n){return t instanceof Bs?$A(t,e):t instanceof zs?qA(t,e):n}function zA(t,e){return t instanceof da?function(r){return Og(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ca extends Af{}class Bs extends Af{constructor(e){super(),this.elements=e}}function $A(t,e){const n=WA(e);for(const r of t.elements)n.some(i=>dr(i,r))||n.push(r);return{arrayValue:{values:n}}}class zs extends Af{constructor(e){super(),this.elements=e}}function qA(t,e){let n=WA(e);for(const r of t.elements)n=n.filter(i=>!dr(i,r));return{arrayValue:{values:n}}}class da extends Af{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function xI(t){return Ge(t.integerValue||t.doubleValue)}function WA(t){return Ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class uc{constructor(e,n){this.field=e,this.transform=n}}function V3(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bs&&i instanceof Bs||r instanceof zs&&i instanceof zs?aa(r.elements,i.elements,dr):r instanceof da&&i instanceof da?dr(r.Pe,i.Pe):r instanceof ca&&i instanceof ca}(t.transform,e.transform)}class L3{constructor(e,n){this.version=e,this.transformResults=n}}class Ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $d(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Pf{}function GA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new La(t.key,Ve.none()):new Va(t.key,t.data,Ve.none());{const n=t.data,r=xt.empty();let i=new Ee(Oe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $r(t.key,r,new nn(i.toArray()),Ve.none())}}function M3(t,e,n){t instanceof Va?function(i,s,o){const a=i.value.clone(),l=PI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(i,s,o){if(!$d(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=PI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(HA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Yl(t,e,n,r){return t instanceof Va?function(s,o,a,l){if(!$d(s.precondition,o))return a;const c=s.value.clone(),d=RI(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(s,o,a,l){if(!$d(s.precondition,o))return a;const c=RI(s.fieldTransforms,l,o),d=o.data;return d.setAll(HA(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return $d(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function F3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=zA(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function AI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&aa(r,i,(s,o)=>V3(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends Pf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $r extends Pf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function HA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function PI(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,O3(o,a,n[i]))}return r}function RI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,D3(s,o,e))}return r}class La extends Pf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s_ extends Pf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class o_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&M3(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Yl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Yl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=GA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&aa(this.mutations,e.mutations,(n,r)=>AI(n,r))&&aa(this.baseMutations,e.baseMutations,(n,r)=>AI(n,r))}}class a_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=function(){return k3}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new a_(e,n,r,i)}}/**
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
 */class l_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class j3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,he;function KA(t){switch(t){default:return Q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function QA(t){if(t===void 0)return tt("GRPC error has no .code"),V.UNKNOWN;switch(t){case it.OK:return V.OK;case it.CANCELLED:return V.CANCELLED;case it.UNKNOWN:return V.UNKNOWN;case it.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case it.INTERNAL:return V.INTERNAL;case it.UNAVAILABLE:return V.UNAVAILABLE;case it.UNAUTHENTICATED:return V.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case it.NOT_FOUND:return V.NOT_FOUND;case it.ALREADY_EXISTS:return V.ALREADY_EXISTS;case it.PERMISSION_DENIED:return V.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case it.ABORTED:return V.ABORTED;case it.OUT_OF_RANGE:return V.OUT_OF_RANGE;case it.UNIMPLEMENTED:return V.UNIMPLEMENTED;case it.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(he=it||(it={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YA(){return new TextEncoder}/**
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
 */const U3=new As([4294967295,4294967295],0);function kI(t){const e=YA().encode(t),n=new eA;return n.update(e),new Uint8Array(n.digest())}function CI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new As([n,r],0),new As([i,s],0)]}class u_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Nl(`Invalid padding: ${n}`);if(r<0)throw new Nl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Nl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Nl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=As.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(As.fromNumber(r)));return i.compare(U3)===1&&(i=new As([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=kI(e),[r,i]=CI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new u_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=kI(e),[r,i]=CI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Nl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class cc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,dc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new cc(te.min(),i,new xe(se),rn(),oe())}}class dc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new dc(r,n,oe(),oe(),oe())}}/**
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
 */class qd{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class JA{constructor(e,n){this.targetId=e,this.me=n}}class XA{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class NI{constructor(){this.fe=0,this.ge=OI(),this.pe=ct.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new dc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=OI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class B3{constructor(e){this.Le=e,this.Be=new Map,this.ke=rn(),this.qe=DI(),this.Qe=new xe(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Dh(s))if(r===0){const o=new G(s.path);this.Ue(n,o,ke.newNoDocument(o,te.min()))}else ee(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ci(r).toUint8Array()}catch(l){if(l instanceof IA)return Wn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new u_(o,i,s)}catch(l){return Wn(l instanceof Nl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Dh(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ke.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=oe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new cc(e,n,this.Qe,this.ke,r);return this.ke=rn(),this.qe=DI(),this.Qe=new xe(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new NI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ee(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new NI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function DI(){return new xe(G.comparator)}function OI(){return new xe(G.comparator)}const z3={asc:"ASCENDING",desc:"DESCENDING"},$3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},q3={and:"AND",or:"OR"};class W3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jg(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function G3(t,e){return ha(t,e.toTimestamp())}function rt(t){return ee(!!t),te.fromTimestamp(function(n){const r=Or(n);return new Me(r.seconds,r.nanos)}(t))}function c_(t,e){return Ug(t,e).canonicalString()}function Ug(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function eP(t){const e=ue.fromString(t);return ee(cP(e)),e}function Lu(t,e){return c_(t.databaseId,e.path)}function lr(t,e){const n=eP(e);if(n.get(1)!==t.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(rP(n))}function tP(t,e){return c_(t.databaseId,e)}function nP(t){const e=eP(t);return e.length===4?ue.emptyPath():rP(e)}function Bg(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rP(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function VI(t,e,n){return{name:Lu(t,e),fields:n.value.mapValue.fields}}function iP(t,e,n){const r=lr(t,e.name),i=rt(e.updateTime),s=e.createTime?rt(e.createTime):te.min(),o=new xt({mapValue:{fields:e.fields}}),a=ke.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function H3(t,e){return"found"in e?function(r,i){ee(!!i.found),i.found.name,i.found.updateTime;const s=lr(r,i.found.name),o=rt(i.found.updateTime),a=i.found.createTime?rt(i.found.createTime):te.min(),l=new xt({mapValue:{fields:i.found.fields}});return ke.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){ee(!!i.missing),ee(!!i.readTime);const s=lr(r,i.missing),o=rt(i.readTime);return ke.newNoDocument(s,o)}(t,e):Q()}function K3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ee(d===void 0||typeof d=="string"),ct.fromBase64String(d||"")):(ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?V.UNKNOWN:QA(c.code);return new B(d,c.message||"")}(o);n=new XA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lr(t,r.document.name),s=rt(r.document.updateTime),o=r.document.createTime?rt(r.document.createTime):te.min(),a=new xt({mapValue:{fields:r.document.fields}}),l=ke.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new qd(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lr(t,r.document),s=r.readTime?rt(r.readTime):te.min(),o=ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lr(t,r.document),s=r.removedTargetIds||[];n=new qd([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new j3(i,s),a=r.targetId;n=new JA(a,o)}}return n}function Mu(t,e){let n;if(e instanceof Va)n={update:VI(t,e.key,e.value)};else if(e instanceof La)n={delete:Lu(t,e.key)};else if(e instanceof $r)n={update:VI(t,e.key,e.data),updateMask:ej(e.fieldMask)};else{if(!(e instanceof s_))return Q();n={verify:Lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof da)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:G3(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function zg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Ve.updateTime(rt(s.updateTime)):s.exists!==void 0?Ve.exists(s.exists):Ve.none()}(e.currentDocument):Ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)ee(a.setToServerValue==="REQUEST_TIME"),l=new ca;else if("appendMissingElements"in a){const d=a.appendMissingElements.values||[];l=new Bs(d)}else if("removeAllFromArray"in a){const d=a.removeAllFromArray.values||[];l=new zs(d)}else"increment"in a?l=new da(o,a.increment):Q();const c=Oe.fromServerFormat(a.fieldPath);return new uc(c,l)}(t,i)):[];if(e.update){e.update.name;const i=lr(t,e.update.name),s=new xt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new nn(c.map(d=>Oe.fromServerFormat(d)))}(e.updateMask);return new $r(i,s,o,n,r)}return new Va(i,s,n,r)}if(e.delete){const i=lr(t,e.delete);return new La(i,n)}if(e.verify){const i=lr(t,e.verify);return new s_(i,n)}return Q()}function Q3(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?rt(i.updateTime):rt(s);return o.isEqual(te.min())&&(o=rt(s)),new L3(o,i.transformResults||[])}(n,e))):[]}function sP(t,e){return{documents:[tP(t,e.path)]}}function oP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tP(t,i);const s=function(c){if(c.length!==0)return uP(_e.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:vo(p.field),direction:J3(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=jg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function aP(t){let e=nP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(h){const p=lP(h);return p instanceof _e&&n_(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(I){return new Vu(_o(I.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,sc(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,y=h.values||[];return new Oi(y,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,y=h.values||[];return new Oi(y,p)}(n.endAt)),NA(e,i,o,s,a,"F",l,c)}function Y3(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_o(n.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_o(n.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_o(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_o(n.unaryFilter.field);return ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return ce.create(_o(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _e.create(n.compositeFilter.filters.map(r=>lP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function J3(t){return z3[t]}function X3(t){return $3[t]}function Z3(t){return q3[t]}function vo(t){return{fieldPath:t.canonicalString()}}function _o(t){return Oe.fromServerFormat(t.fieldPath)}function uP(t){return t instanceof ce?function(n){if(n.op==="=="){if(vI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NAN"}};if(yI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NAN"}};if(yI(n.value))return{unaryFilter:{field:vo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(n.field),op:X3(n.op),value:n.value}}}(t):t instanceof _e?function(n){const r=n.getFilters().map(i=>uP(i));return r.length===1?r[0]:{compositeFilter:{op:Z3(n.op),filters:r}}}(t):Q()}function ej(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dP{constructor(e){this.ct=e}}function tj(t,e){let n;if(e.document)n=iP(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=qs(e.noDocument.readTime);n=ke.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=G.fromSegments(e.unknownDocument.path),i=qs(e.unknownDocument.version);n=ke.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Me(i[0],i[1]);return te.fromTimestamp(s)}(e.readTime)),n}function LI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Lh(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Lu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ha(s,o.version.toTimestamp()),createTime:ha(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:$s(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:n.path.toArray(),version:$s(e.version)}}return r}function Lh(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function $s(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function qs(t){const e=new Me(t.seconds,t.nanoseconds);return te.fromTimestamp(e)}function ds(t,e){const n=(e.baseMutations||[]).map(s=>zg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>zg(t.ct,s)),i=Me.fromMillis(e.localWriteTimeMs);return new o_(e.batchId,i,n,r)}function Dl(t){const e=qs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?qs(t.lastLimboFreeSnapshotVersion):te.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return ee(s.documents.length===1),Ht(Oa(nP(s.documents[0])))}(t.query):function(s){return Ht(aP(s))}(t.query),new xr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ct.fromBase64String(t.resumeToken))}function hP(t,e){const n=$s(e.snapshotVersion),r=$s(e.lastLimboFreeSnapshotVersion);let i;i=Dh(e.target)?sP(t.ct,e.target):oP(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Us(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function d_(t){const e=aP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vh(e,e.limit,"L"):e}function um(t,e){return new l_(e.largestBatchId,zg(t.ct,e.overlayMutation))}function MI(t,e){const n=e.path.lastSegment();return[t,Gt(e.path.popLast()),n]}function FI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:$s(r.readTime),documentKey:Gt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class nj{getBundleMetadata(e,n){return jI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:qs(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return jI(e).put(function(i){return{bundleId:i.id,createTime:$s(rt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return UI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:d_(s.bundledQuery),readTime:qs(s.readTime)}}(r)})}saveNamedQuery(e,n){return UI(e).put(function(i){return{name:i.name,readTime:$s(rt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function jI(t){return Et(t,"bundles")}function UI(t){return Et(t,"namedQueries")}/**
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
 */class Rf{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Rf(e,r)}getOverlay(e,n){return ml(e).get(MI(this.userId,n)).next(r=>r?um(this.serializer,r):null)}getOverlays(e,n){const r=nr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new l_(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Gt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ml(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=nr(),s=Gt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ml(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=um(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=nr();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ml(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,d)=>{const h=um(this.serializer,c);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return ml(e).put(function(i,s,o){const[a,l,c]=MI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Mu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ml(t){return Et(t,"documentOverlays")}/**
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
 */class hs{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Ge(e.integerValue));else if("doubleValue"in e){const r=Ge(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Cu(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=Or(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Ci(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?TA(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Q()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),G.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}hs.bt=new hs;function rj(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function BI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=rj(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class ij{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=BI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=BI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class sj{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class oj{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class gl{constructor(){this.Gt=new ij,this.zt=new sj(this.Gt),this.jt=new oj(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class fs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new fs(this.indexId,this.documentKey,this.arrayValue,r)}}function Xr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=zI(t.arrayValue,e.arrayValue),n!==0?n:(n=zI(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function zI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class $I{constructor(e){this.Yt=new Ee((n,r)=>Oe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(ee(e.collectionGroup===this.collectionId),this.en)return!1;const n=Cg(e);if(n!==void 0&&!this.nn(n))return!1;const r=us(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new Ee(Oe.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new jd(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new jd(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new jd(r.field,r.dir==="asc"?0:1)));return new Nh(Nh.UNKNOWN_ID,this.collectionId,n,ku.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function fP(t){var e,n;if(ee(t instanceof ce||t instanceof _e),t instanceof ce){if(t instanceof CA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ce.create(t.field,"==",s)))||[];return _e.create(i,"or")}return t}const r=t.filters.map(i=>fP(i));return _e.create(r,t.op)}function aj(t){if(t.getFilters().length===0)return[];const e=Wg(fP(t));return ee(pP(e)),$g(e)||qg(e)?[e]:e.getFilters()}function $g(t){return t instanceof ce}function qg(t){return t instanceof _e&&n_(t)}function pP(t){return $g(t)||qg(t)||function(n){if(n instanceof _e&&Vg(n)){for(const r of n.getFilters())if(!$g(r)&&!qg(r))return!1;return!0}return!1}(t)}function Wg(t){if(ee(t instanceof ce||t instanceof _e),t instanceof ce)return t;if(t.filters.length===1)return Wg(t.filters[0]);const e=t.filters.map(r=>Wg(r));let n=_e.create(e,t.op);return n=Mh(n),pP(n)?n:(ee(n instanceof _e),ee(ua(n)),ee(n.filters.length>1),n.filters.reduce((r,i)=>h_(r,i)))}function h_(t,e){let n;return ee(t instanceof ce||t instanceof _e),ee(e instanceof ce||e instanceof _e),n=t instanceof ce?e instanceof ce?function(i,s){return _e.create([i,s],"and")}(t,e):qI(t,e):e instanceof ce?qI(e,t):function(i,s){if(ee(i.filters.length>0&&s.filters.length>0),ua(i)&&ua(s))return PA(i,s.getFilters());const o=Vg(i)?i:s,a=Vg(i)?s:i,l=o.filters.map(c=>h_(c,a));return _e.create(l,"or")}(t,e),Mh(n)}function qI(t,e){if(ua(e))return PA(e,t.getFilters());{const n=e.filters.map(r=>h_(t,r));return _e.create(n,"or")}}function Mh(t){if(ee(t instanceof ce||t instanceof _e),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return Mh(e[0]);if(xA(t))return t;const n=e.map(i=>Mh(i)),r=[];return n.forEach(i=>{i instanceof ce?r.push(i):i instanceof _e&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:_e.create(r,t.op)}/**
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
 */class lj{constructor(){this._n=new f_}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(vn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(vn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class f_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(ue.comparator)).toArray()}}/**
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
 */const ad=new Uint8Array(0);class uj{constructor(e,n){this.databaseId=n,this.an=new f_,this.un=new Xi(r=>Us(r),(r,i)=>oc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Gt(i)};return WI(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[uA(n),""],!1,!0);return WI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(tr(o.parent))}return r})}addFieldIndex(e,n){const r=yl(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=fo(e);return s.next(a=>{o.put(FI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=yl(e),i=fo(e),s=ho(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=yl(e),r=ho(e),i=fo(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new $I(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ho(e);let i=!0;const s=new Map;return O.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=oe();const a=[];return O.forEach(s,(l,c)=>{z("IndexedDbIndexManager",`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${Us(n)}`);const d=function(T,N){const L=Cg(N);if(L===void 0)return null;for(const F of Oh(T,L.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),h=function(T,N){const L=new Map;for(const F of us(N))for(const S of Oh(T,F.fieldPath))switch(S.op){case"==":case"in":L.set(F.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return L.set(F.fieldPath.canonicalString(),S.value),Array.from(L.values())}return null}(c,l),p=function(T,N){const L=[];let F=!0;for(const S of us(N)){const _=S.kind===0?TI(T,S.fieldPath,T.startAt):bI(T,S.fieldPath,T.startAt);L.push(_.value),F&&(F=_.inclusive)}return new Oi(L,F)}(c,l),y=function(T,N){const L=[];let F=!0;for(const S of us(N)){const _=S.kind===0?bI(T,S.fieldPath,T.endAt):TI(T,S.fieldPath,T.endAt);L.push(_.value),F&&(F=_.inclusive)}return new Oi(L,F)}(c,l),I=this.hn(l,c,p),b=this.hn(l,c,y),R=this.Pn(l,c,h),E=this.In(l.indexId,d,I,p.inclusive,b,y.inclusive,R);return O.forEach(E,w=>r.G(w,n.limit).next(T=>{T.forEach(N=>{const L=G.fromSegments(N.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return O.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=aj(_e.create(e.filters,"and")).map(r=>Mg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),d=[];for(let h=0;h<l;++h){const p=n?this.Tn(n[h/c]):ad,y=this.En(e,p,r[h%c],i),I=this.dn(e,p,s[h%c],o),b=a.map(R=>this.En(e,p,R,!0));d.push(...this.createRange(y,I,b))}return d}En(e,n,r,i){const s=new fs(e,G.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new fs(e,G.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new $I(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return O.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new Ee(Oe.comparator),d=!1;for(const h of l.filters)for(const p of h.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:c=c.add(p.field));for(const h of l.orderBy)h.field.isKeyField()||(c=c.add(h.field));return c.size+(d?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new gl;for(const i of us(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);hs.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new gl;return hs.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new gl;return hs.bt.Pt(js(this.databaseId,n),r.Ht(function(s){const o=us(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new gl);let s=0;for(const o of us(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Ou(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);hs.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new gl;l.seed(a.Wt()),hs.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=yl(e),i=fo(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(d,h){const p=h?new ku(h.sequenceNumber,new vn(qs(h.readTime),new G(tr(h.documentKey)),h.largestBatchId)):ku.empty(),y=d.fields.map(([I,b])=>new jd(Oe.fromServerFormat(I),b));return new Nh(d.indexId,d.collectionGroup,y,p)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:se(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=yl(e),s=fo(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(FI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.pn(e,i,l).next(c=>{const d=this.yn(s,l);return c.isEqual(d)?O.resolve():this.wn(e,s,l,c,d)}))))})}Sn(e,n,r,i){return ho(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return ho(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=ho(e);let s=new Ee(Xr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new fs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new Ee(Xr);const i=this.An(n,e);if(i==null)return r;const s=Cg(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ou(o))for(const a of o.arrayValue.values||[])r=r.add(new fs(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new fs(n.indexId,e.key,ad,i));return r}wn(e,n,r,i,s){z("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,d,h,p){const y=l.getIterator(),I=c.getIterator();let b=co(y),R=co(I);for(;b||R;){let E=!1,w=!1;if(b&&R){const T=d(b,R);T<0?w=!0:T>0&&(E=!0)}else b!=null?w=!0:E=!0;E?(h(R),R=co(I)):w?(p(b),b=co(y)):(b=co(y),R=co(I))}}(i,s,Xr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),O.waitFor(o)}gn(e){let n=1;return fo(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Xr(o,a)).filter((o,a,l)=>!a||Xr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Xr(o,e),l=Xr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ad,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ad,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Xr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(GI)}getMinOffset(e,n){return O.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Q())).next(GI)}}function WI(t){return Et(t,"collectionParents")}function ho(t){return Et(t,"indexEntries")}function yl(t){return Et(t,"indexConfiguration")}function fo(t){return Et(t,"indexState")}function GI(t){ee(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Zv(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new vn(e.readTime,e.documentKey,n)}/**
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
 */const HI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function mP(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(d,h,p)=>(a++,p.delete()));s.push(l.next(()=>{ee(a===1)}));const c=[];for(const d of n.mutations){const h=gA(e,d.key.path,n.batchId);s.push(i.delete(h)),c.push(d.key)}return O.waitFor(s).next(()=>c)}function Fh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class kf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){ee(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new kf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=wo(e),o=Zr(e);return o.add({}).next(a=>{ee(typeof a=="number");const l=new o_(a,n,r,i),c=function(y,I,b){const R=b.baseMutations.map(w=>Mu(y.ct,w)),E=b.mutations.map(w=>Mu(y.ct,w));return{userId:I,batchId:b.batchId,localWriteTimeMs:b.localWriteTime.toMillis(),baseMutations:R,mutations:E}}(this.serializer,this.userId,l),d=[];let h=new Ee((p,y)=>se(p.canonicalString(),y.canonicalString()));for(const p of i){const y=gA(this.userId,p.key.path,a);h=h.add(p.key.path.popLast()),d.push(o.put(c)),d.push(s.put(y,JF))}return h.forEach(p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),O.waitFor(d).next(()=>l)})}lookupMutationBatch(e,n){return Zr(e).get(n).next(r=>r?(ee(r.userId===this.userId),ds(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?O.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Zr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(ee(a.batchId>=r),s=ds(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Zr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).U("userMutationsIndex",n).next(r=>r.map(i=>ds(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ud(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return wo(e).J({range:i},(o,a,l)=>{const[c,d,h]=o,p=tr(d);if(c===this.userId&&n.path.isEqual(p))return Zr(e).get(h).next(y=>{if(!y)throw Q();ee(y.userId===this.userId),s.push(ds(this.serializer,y))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(se);const i=[];return n.forEach(s=>{const o=Ud(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=wo(e).J({range:a},(c,d,h)=>{const[p,y,I]=c,b=tr(y);p===this.userId&&s.path.isEqual(b)?r=r.add(I):h.done()});i.push(l)}),O.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Ud(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ee(se);return wo(e).J({range:o},(l,c,d)=>{const[h,p,y]=l,I=tr(p);h===this.userId&&r.isPrefixOf(I)?I.length===i&&(a=a.add(y)):d.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Zr(e).get(s).next(o=>{if(o===null)throw Q();ee(o.userId===this.userId),r.push(ds(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return mP(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return wo(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=tr(s[1]);i.push(l)}else a.done()}).next(()=>{ee(i.length===0)})})}containsKey(e,n){return gP(e,this.userId,n)}xn(e){return yP(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function gP(t,e,n){const r=Ud(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return wo(t).J({range:s,H:!0},(a,l,c)=>{const[d,h,p]=a;d===e&&h===i&&(o=!0),c.done()}).next(()=>o)}function Zr(t){return Et(t,"mutations")}function wo(t){return Et(t,"documentMutations")}function yP(t){return Et(t,"mutationQueues")}/**
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
 */class Ws{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ws(0)}static Ln(){return new Ws(-1)}}/**
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
 */class cj{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new Ws(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>te.fromTimestamp(new Me(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>po(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(ee(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return po(e).J((o,a)=>{const l=Dl(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return po(e).J((r,i)=>{const s=Dl(i);n(s)})}Bn(e){return KI(e).get("targetGlobalKey").next(n=>(ee(n!==null),n))}kn(e,n){return KI(e).put("targetGlobalKey",n)}qn(e,n){return po(e).put(hP(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Us(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return po(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=Dl(a);oc(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ai(e);return n.forEach(o=>{const a=Gt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=ai(e);return O.forEach(n,s=>{const o=Gt(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ai(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ai(e);let s=oe();return i.J({range:r,H:!0},(o,a,l)=>{const c=tr(o[1]),d=new G(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const r=Gt(n.path),i=IDBKeyRange.bound([r],[uA(r)],!1,!0);let s=0;return ai(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return po(e).get(n).next(r=>r?Dl(r):null)}}function po(t){return Et(t,"targets")}function KI(t){return Et(t,"targetGlobal")}function ai(t){return Et(t,"targetDocuments")}/**
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
 */function QI([t,e],[n,r]){const i=se(t,n);return i===0?se(e,r):i}class dj{constructor(e){this.Kn=e,this.buffer=new Ee(QI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();QI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ji(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Yi(n)}await this.zn(3e5)})}}class fj{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(tn.oe);const r=new dj(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(HI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),HI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(c=Date.now(),go()<=ae.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function pj(t,e){return new fj(t,e)}/**
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
 */class mj{constructor(e,n){this.db=e,this.garbageCollector=pj(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return ld(e,r)}removeReference(e,n,r){return ld(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return ld(e,n)}er(e,n){return function(i,s){let o=!1;return yP(i).Y(a=>gP(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),ai(e).delete(function(h){return[0,Gt(h.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return ld(e,n)}Xn(e,n){const r=ai(e);let i,s=tn.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==tn.oe&&n(new G(tr(i)),s),s=c,i=l):s=tn.oe}).next(()=>{s!==tn.oe&&n(new G(tr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ld(t,e){return ai(t).put(function(r,i){return{targetId:0,path:Gt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class vP{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class gj{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ss(e).put(r)}removeEntry(e,n,r){return ss(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Lh(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return ss(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(vl(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return ss(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(vl(n))},(i,s)=>{r={document:this.nr(n,s),size:Fh(s)}}).next(()=>r)}getEntries(e,n){let r=rn();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=rn(),i=new xe(G.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Fh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return O.resolve();let i=new Ee(XI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(vl(i.first()),vl(i.last())),o=i.getIterator();let a=o.getNext();return ss(e).J({index:"documentKeyIndex",range:s},(l,c,d)=>{const h=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&XI(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?d.$(vl(a)):d.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Lh(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ss(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=rn();for(const h of c){const p=this.nr(G.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);p.isFoundDocument()&&(lc(n,p)||i.has(p.key))&&(d=d.insert(p.key,p))}return d})}getAllFromCollectionGroup(e,n,r,i){let s=rn();const o=JI(n,r),a=JI(n,vn.max());return ss(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,d)=>{const h=this.nr(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(h.key,h),s.size===i&&d.done()}).next(()=>s)}newChangeBuffer(e){return new yj(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return YI(e).get("remoteDocumentGlobalKey").next(n=>(ee(!!n),n))}tr(e,n){return YI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=tj(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return ke.newInvalidDocument(e)}}function _P(t){return new gj(t)}class yj extends vP{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Xi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ee((s,o)=>se(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=LI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=Fh(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=LI(this.ar.serializer,o.convertToNoDocument(te.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function YI(t){return Et(t,"remoteDocumentGlobal")}function ss(t){return Et(t,"remoteDocumentsV14")}function vl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function JI(t,e){const n=e.documentKey.path.toArray();return[t,Lh(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function XI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=se(n[s],r[s]),i)return i;return i=se(n.length,r.length),i||(i=se(n[n.length-2],r[r.length-2]),i||se(n[n.length-1],r[r.length-1]))}/**
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
 */class vj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class wP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Yl(r.mutation,i,nn.empty(),Me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Cl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=rn();const o=Ql(),a=function(){return Ql()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof $r)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Yl(d.mutation,c,d.mutation.getFieldMask(),Me.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var h;return a.set(c,new vj(d,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ql();let i=new xe((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||nn.empty();d=a.applyToLocalView(c,d),r.set(l,d);const h=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,h=FA();d.forEach(p=>{if(!s.has(p)){const y=GA(n.get(p),r.get(p));y!==null&&h.set(p,y),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):r_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(nr());let a=-1,l=s;return o.next(c=>O.forEach(c,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{l=l.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,oe())).next(d=>({batchId:a,changes:MA(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Cl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Cl();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(h,p){return new zr(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ke.newInvalidDocument(d)))});let a=Cl();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Yl(d.mutation,c,nn.empty(),Me.now()),lc(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class _j{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:d_(i.bundledQuery),readTime:rt(i.readTime)}}(n)),O.resolve()}}/**
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
 */class wj{constructor(){this.overlays=new xe(G.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=nr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=nr(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=nr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=nr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new l_(n,r));let s=this.hr.get(n);s===void 0&&(s=oe(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class p_{constructor(){this.Pr=new Ee(mt.Ir),this.Tr=new Ee(mt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new mt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new ue([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new ue([])),r=new mt(n,e),i=new mt(n,e+1);let s=oe();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||se(e.pr,n.pr)}static Er(e,n){return se(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class Ej{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ee(mt.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new mt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(se);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new mt(new G(s),0);let a=new Ee(se);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new mt(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ij{constructor(e){this.vr=e,this.docs=function(){return new xe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=rn();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Zv(dA(d),r)<=0||(i.has(d.key)||lc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tj(this)}getSize(e){return O.resolve(this.size)}}class Tj extends vP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class bj{constructor(e){this.persistence=e,this.Mr=new Xi(n=>Us(n),oc),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Or=0,this.Nr=new p_,this.targetCount=0,this.Lr=Ws.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
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
 */class EP{constructor(e,n){this.Br={},this.overlays={},this.kr=new tn(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new bj(this),this.indexManager=new lj,this.remoteDocumentCache=function(i){return new Ij(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new dP(n),this.$r=new _j(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Ej(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new Sj(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Sj extends fA{constructor(e){super(),this.currentSequenceNumber=e}}class Cf{constructor(e){this.persistence=e,this.zr=new p_,this.jr=null}static Hr(e){return new Cf(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class xj{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Sf("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fI,{unique:!0}),l.createObjectStore("documentMutations")}(e),ZI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),ZI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(d=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",fI,{unique:!0});const h=c.store("mutations"),p=d.map(y=>h.put(y));return O.waitFor(p)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:u3});c.createIndex("collectionPathOverlayIndex",c3,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",d3,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:XF});c.createIndex("documentKeyIndex",ZF),c.createIndex("collectionGroupIndex",e3)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:s3}).createIndex("sequenceNumberIndex",o3,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:a3}).createIndex("documentKeyIndex",l3,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Fh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{ee(l.userId===s.userId);const c=ds(this.serializer,l);return mP(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new ue(o),c=function(h){return[0,Gt(h)]}(l);s.push(n.get(c).next(d=>d?O.resolve():(h=>n.put({targetId:0,path:Gt(h),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:i3});const r=n.store("collectionParents"),i=new f_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Gt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new ue(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const d=tr(a);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=Dl(i),o=hP(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(h){return h.document?new G(ue.fromString(h.document.name).popFirst(5)):h.noDocument?G.fromSegments(h.noDocument.path):h.unknownDocument?G.fromSegments(h.unknownDocument.path):Q()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}si(e,n){const r=n.store("mutations"),i=_P(this.serializer),s=new EP(Cf.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let d=(c=a.get(l.userId))!==null&&c!==void 0?c:oe();ds(this.serializer,l).keys().forEach(h=>d=d.add(h)),a.set(l.userId,d)}),O.forEach(a,(l,c)=>{const d=new yt(c),h=Rf.lt(this.serializer,d),p=s.getIndexManager(d),y=kf.lt(d,this.serializer,p,s.referenceDelegate);return new wP(i,y,h,p).recalculateAndSaveOverlaysForDocumentKeys(new Ng(n,tn.oe),l).next()})})}}function ZI(t){t.createObjectStore("targetDocuments",{keyPath:n3}).createIndex("documentTargetsIndex",r3,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",t3,{unique:!0}),t.createObjectStore("targetGlobal")}const cm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class m_{constructor(e,n,r,i,s,o,a,l,c,d,h=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=d,this.ui=h,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=p=>Promise.resolve(),!m_.D())throw new B(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new mj(this,i),this.Ti=n+"main",this.serializer=new dP(l),this.Ei=new ar(this.Ti,this.ui,new xj(this.serializer)),this.Qr=new cj(this.referenceDelegate,this.serializer),this.remoteDocumentCache=_P(this.serializer),this.$r=new nj,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(V.FAILED_PRECONDITION,cm);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new tn(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ud(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ji(e))return z("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return z("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return _l(e).get("owner").next(n=>O.resolve(this.Si(n)))}bi(e){return ud(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Et(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?O.resolve(!0):_l(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new B(V.FAILED_PRECONDITION,cm);return!1}}return!(!this.networkEnabled||!this.inForeground)||ud(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&z("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Ng(e,tn.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>ud(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return kf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new uj(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Rf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){z("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?f3:l===15?wA:l===14?_A:l===13?vA:l===12?h3:l===11?yA:void Q()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new Ng(a,this.kr?this.kr.next():tn.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw tt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new B(V.FAILED_PRECONDITION,hA);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return _l(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(V.FAILED_PRECONDITION,cm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _l(e).put("owner",n)}static D(){return ar.D()}yi(e){const n=_l(e);return n.get("owner").next(r=>this.Si(r)?(z("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(tt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;$S()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return z("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){tt("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _l(t){return Et(t,"owner")}function ud(t){return Et(t,"clientMetadata")}function g_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class y_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new y_(e,n.fromCache,r,i)}}/**
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
 */class Aj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IP{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return $S()?8:pA(Fe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Aj;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(go()<=ae.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",yo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):(go()<=ae.DEBUG&&z("QueryEngine","Query:",yo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(go()<=ae.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",yo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):O.resolve())}ji(e,n){if(SI(n))return O.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vh(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Vh(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return SI(n)||i.isEqual(te.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):(go()<=ae.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yo(n)),this.es(e,o,n,cA(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ee(VA(e));return n.forEach((i,s)=>{lc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return go()<=ae.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",yo(n)),this.zi.getDocumentsMatchingQuery(e,n,vn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Pj{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new xe(se),this.rs=new Xi(s=>Us(s),oc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function TP(t,e,n,r){return new Pj(t,e,n,r)}async function bP(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function Rj(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,d){const h=c.batch,p=h.keys();let y=O.resolve();return p.forEach(I=>{y=y.next(()=>d.getEntry(l,I)).next(b=>{const R=c.docVersions.get(I);ee(R!==null),b.version.compareTo(R)<0&&(h.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),d.addEntry(b)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=oe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function SP(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function kj(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((d,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,h)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?y=y.withResumeToken(ct.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),i=i.insert(h,y),function(b,R,E){return b.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,y,d)&&a.push(n.Qr.updateTargetData(s,y))});let l=rn(),c=oe();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(xP(s,o,e.documentUpdates).next(d=>{l=d.cs,c=d.ls})),!r.isEqual(te.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function xP(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function Cj(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fa(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function pa(t,e,n){const r=H(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ji(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function jh(t,e,n){const r=H(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const h=H(l),p=h.rs.get(d);return p!==void 0?O.resolve(h.ns.get(p)):h.Qr.getTargetData(c,d)}(r,o,Ht(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(a=>(RP(r,OA(e),a),{documents:a,hs:s})))}function AP(t,e){const n=H(t),r=H(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function PP(t,e){const n=H(t),r=n.ss.get(e)||te.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,cA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(RP(n,e,i),i))}function RP(t,e,n){let r=t.ss.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function Nj(t,e,n,r){const i=H(t);let s=oe(),o=rn();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const h=e.Is(c);h.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(d,h)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await fa(i,function(d){return Ht(Oa(ue.fromString(`__bundle__/docs/${d}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>xP(c,a,o).next(d=>(a.apply(c),d)).next(d=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function Dj(t,e,n=oe()){const r=await fa(t,Ht(d_(e.bundledQuery))),i=H(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=rt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(ct.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function e1(t,e){return`firestore_clients_${t}_${e}`}function t1(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function dm(t,e){return`firestore_targets_${t}_${e}`}class Uh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new B(i.error.code,i.error.message))),o?new Uh(e,n,i.state,s):(tt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new B(r.error.code,r.error.message))),s?new Jl(e,r.state,i):(tt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=i_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=mA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Bh(e,s):(tt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class v_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new v_(n.clientId,n.onlineState):(tt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Gg{constructor(){this.activeTargetIds=i_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hm{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new xe(se),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=e1(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Gg),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(e1(this.persistenceKey,r));if(i){const s=Bh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(dm(this.persistenceKey,e));if(r){const i=Jl.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(dm(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return z("SharedClientState","READ",e,n),n}setItem(e,n){z("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){z("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(z("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=tn.oe;if(s!=null)try{const a=JSON.parse(s);ee(typeof a=="number"),o=a}catch(a){tt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==tn.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Uh(this.currentUser,e,n,r),s=t1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=t1(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=dm(this.persistenceKey,e),s=new Jl(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Bh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Uh.Es(new yt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return Jl.Es(i,n)}xs(e){return v_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);z("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=i_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class kP{constructor(){this.no=new Gg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Oj{io(e){}shutdown(){}}/**
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
 */class n1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let cd=null;function fm(){return cd===null?cd=function(){return 268435456+Math.round(2147483648*Math.random())}():cd++,"0x"+cd.toString(16)}/**
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
 */const Vj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Lj{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Vt="WebChannelConnection";class Mj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=fm(),l=this.vo(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(d=>(z("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw Wn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Da}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=Vj[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=fm();return new Promise((o,a)=>{const l=new tA;l.setWithCredentials(!0),l.listenOnce(rA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fd.NO_ERROR:const d=l.getResponseJson();z(Vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Fd.TIMEOUT:z(Vt,`RPC '${e}' ${s} timed out`),a(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Fd.HTTP_ERROR:const h=l.getStatus();if(z(Vt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const I=function(R){const E=R.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(y.status);a(new B(I,y.message))}else a(new B(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{z(Vt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(Vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=fm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oA(),a=sA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new nA({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");z(Vt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const h=o.createWebChannel(d,l);let p=!1,y=!1;const I=new Lj({lo:R=>{y?z(Vt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(z(Vt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),z(Vt,`RPC '${e}' stream ${i} sending:`,R),h.send(R))},ho:()=>h.close()}),b=(R,E,w)=>{R.listen(E,T=>{try{w(T)}catch(N){setTimeout(()=>{throw N},0)}})};return b(h,kl.EventType.OPEN,()=>{y||(z(Vt,`RPC '${e}' stream ${i} transport opened.`),I.mo())}),b(h,kl.EventType.CLOSE,()=>{y||(y=!0,z(Vt,`RPC '${e}' stream ${i} transport closed`),I.po())}),b(h,kl.EventType.ERROR,R=>{y||(y=!0,Wn(Vt,`RPC '${e}' stream ${i} transport errored:`,R),I.po(new B(V.UNAVAILABLE,"The operation could not be completed")))}),b(h,kl.EventType.MESSAGE,R=>{var E;if(!y){const w=R.data[0];ee(!!w);const T=w,N=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(N){z(Vt,`RPC '${e}' stream ${i} received error:`,N);const L=N.status;let F=function(x){const A=it[x];if(A!==void 0)return QA(A)}(L),S=N.message;F===void 0&&(F=V.INTERNAL,S="Unknown error status: "+L+" with message "+N.message),y=!0,I.po(new B(F,S)),h.close()}else z(Vt,`RPC '${e}' stream ${i} received:`,w),I.yo(w)}}),b(a,iA.STAT_EVENT,R=>{R.stat===kg.PROXY?z(Vt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===kg.NOPROXY&&z(Vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}/**
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
 */function CP(){return typeof window<"u"?window:null}function Wd(){return typeof document<"u"?document:null}/**
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
 */function hc(t){return new W3(t,!0)}/**
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
 */class __{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class NP{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new __(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(tt(n.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fj extends NP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=K3(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?rt(o.readTime):te.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Bg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Dh(l)?{documents:sP(s,l)}:{query:oP(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ZA(s,o.resumeToken);const c=jg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=ha(s,o.snapshotVersion.toTimestamp());const c=jg(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Y3(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Bg(this.serializer),n.removeTarget=e,this.i_(n)}}class jj extends NP{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Q3(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.A_(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Bg(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Mu(this.serializer,r))};this.i_(n)}}/**
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
 */class Uj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Ug(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,Ug(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Bj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(tt(n),this.y_=!1):z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class zj{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Zi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=H(l);c.M_.add(4),await Ma(c),c.N_.set("Unknown"),c.M_.delete(4),await fc(c)}(this))})}),this.N_=new Bj(r,i)}}async function fc(t){if(Zi(t))for(const e of t.x_)await e(!0)}async function Ma(t){for(const e of t.x_)await e(!1)}function Nf(t,e){const n=H(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),I_(n)?E_(n):ja(n).Xo()&&w_(n,e))}function ma(t,e){const n=H(t),r=ja(n);n.F_.delete(e),r.Xo()&&DP(n,e),n.F_.size===0&&(r.Xo()?r.n_():Zi(n)&&n.N_.set("Unknown"))}function w_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ja(t).P_(e)}function DP(t,e){t.L_.xe(e),ja(t).I_(e)}function E_(t){t.L_=new B3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ja(t).start(),t.N_.w_()}function I_(t){return Zi(t)&&!ja(t).Zo()&&t.F_.size>0}function Zi(t){return H(t).M_.size===0}function OP(t){t.L_=void 0}async function $j(t){t.N_.set("Online")}async function qj(t){t.F_.forEach((e,n)=>{w_(t,e)})}async function Wj(t,e){OP(t),I_(t)?(t.N_.D_(e),E_(t)):t.N_.set("Unknown")}async function Gj(t,e,n){if(t.N_.set("Online"),e instanceof XA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zh(t,r)}else if(e instanceof qd?t.L_.Ke(e):e instanceof JA?t.L_.He(e):t.L_.We(e),!n.isEqual(te.min()))try{const r=await SP(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),DP(s,l);const h=new xr(d.target,l,c,d.sequenceNumber);w_(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await zh(t,r)}}async function zh(t,e,n){if(!Ji(e))throw e;t.M_.add(1),await Ma(t),t.N_.set("Offline"),n||(n=()=>SP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await fc(t)})}function VP(t,e){return e().catch(n=>zh(t,n,e))}async function Fa(t){const e=H(t),n=Vi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Hj(e);)try{const i=await Cj(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,Kj(e,i)}catch(i){await zh(e,i)}LP(e)&&MP(e)}function Hj(t){return Zi(t)&&t.v_.length<10}function Kj(t,e){t.v_.push(e);const n=Vi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function LP(t){return Zi(t)&&!Vi(t).Zo()&&t.v_.length>0}function MP(t){Vi(t).start()}async function Qj(t){Vi(t).V_()}async function Yj(t){const e=Vi(t);for(const n of t.v_)e.d_(n.mutations)}async function Jj(t,e,n){const r=t.v_.shift(),i=a_.from(r,e,n);await VP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fa(t)}async function Xj(t,e){e&&Vi(t).E_&&await async function(r,i){if(function(o){return KA(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();Vi(r).t_(),await VP(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Fa(r)}}(t,e),LP(t)&&MP(t)}async function r1(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=Zi(n);n.M_.add(3),await Ma(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await fc(n)}async function Hg(t,e){const n=H(t);e?(n.M_.delete(2),await fc(n)):e||(n.M_.add(2),await Ma(n),n.N_.set("Unknown"))}function ja(t){return t.B_||(t.B_=function(n,r,i){const s=H(n);return s.f_(),new Fj(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:$j.bind(null,t),To:qj.bind(null,t),Ao:Wj.bind(null,t),h_:Gj.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),I_(t)?E_(t):t.N_.set("Unknown")):(await t.B_.stop(),OP(t))})),t.B_}function Vi(t){return t.k_||(t.k_=function(n,r,i){const s=H(n);return s.f_(),new jj(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Qj.bind(null,t),Ao:Xj.bind(null,t),R_:Yj.bind(null,t),A_:Jj.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Fa(t)):(await t.k_.stop(),t.v_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class T_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new T_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(t,e){if(tt("AsyncQueue",`${e}: ${t}`),Ji(t))return new B(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Cl(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class i1{constructor(){this.q_=new xe(G.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ga{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ga(e,n,Ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Zj{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class e5{constructor(){this.queries=new Xi(e=>DA(e),ac),this.onlineState="Unknown",this.z_=new Set}}async function b_(t,e){const n=H(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Zj,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ua(o,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&x_(n)}async function S_(t,e){const n=H(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function t5(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&x_(n)}function n5(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function x_(t){t.z_.forEach(e=>{e.next()})}var Kg,s1;(s1=Kg||(Kg={})).J_="default",s1.Cache="cache";class A_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ga(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ga.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Kg.Cache}}/**
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
 */class r5{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class o1{constructor(e){this.serializer=e}Ps(e){return lr(this.serializer,e)}Is(e){return e.metadata.exists?iP(this.serializer,e.document,!1):ke.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return rt(e)}}class i5{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=FP(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=ue.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new o1(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||oe()).add(s);n.set(o,a)}}return n}async complete(){const e=await Nj(this.localStore,new o1(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await Dj(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function FP(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class jP{constructor(e){this.key=e}}class UP{constructor(e){this.key=e}}class BP{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=oe(),this.mutatedKeys=oe(),this.Ia=VA(e),this.Ta=new Ko(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new i1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const p=i.get(d),y=lc(this.query,h)?h:null,I=!!p&&this.mutatedKeys.has(p.key),b=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;p&&y?p.data.isEqual(y.data)?I!==b&&(r.track({type:3,doc:y}),R=!0):this.Ra(p,y)||(r.track({type:2,doc:y}),R=!0,(l&&this.Ia(y,l)>0||c&&this.Ia(y,c)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),R=!0):p&&!y&&(r.track({type:1,doc:p}),R=!0,(l||c)&&(a=!0)),R&&(y?(o=o.add(y),s=b?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,h)=>function(y,I){const b=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return b(y)-b(I)}(d.type,h.type)||this.Ia(d.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new ga(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new i1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=oe(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new UP(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new jP(r))}),n}pa(e){this.la=e.hs,this.Pa=oe();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ga.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class s5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class o5{constructor(e){this.key=e,this.wa=!1}}class a5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Xi(a=>DA(a),ac),this.Da=new Map,this.Ca=new Set,this.va=new xe(G.comparator),this.Fa=new Map,this.Ma=new p_,this.xa={},this.Oa=new Map,this.Na=Ws.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function l5(t,e,n=!0){const r=Df(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await zP(r,e,n,!0),i}async function u5(t,e){const n=Df(t);await zP(n,e,!0,!1)}async function zP(t,e,n,r){const i=await fa(t.localStore,Ht(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await P_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Nf(t.remoteStore,i),a}async function P_(t,e,n,r,i){t.Ba=(h,p,y)=>async function(b,R,E,w){let T=R.view.da(E);T.Xi&&(T=await jh(b.localStore,R.query,!1).then(({documents:S})=>R.view.da(S,T)));const N=w&&w.targetChanges.get(R.targetId),L=w&&w.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(T,b.isPrimaryClient,N,L);return Qg(b,R.targetId,F.fa),F.snapshot}(t,h,p,y);const s=await jh(t.localStore,e,!0),o=new BP(e,s.hs),a=o.da(s.documents),l=dc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Qg(t,n,c.fa);const d=new s5(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function c5(t,e,n){const r=H(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ac(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pa(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ma(r.remoteStore,i.targetId),ya(r,i.targetId)}).catch(Yi)):(ya(r,i.targetId),await pa(r.localStore,i.targetId,!0))}async function d5(t,e){const n=H(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ma(n.remoteStore,r.targetId))}async function h5(t,e,n){const r=N_(t);try{const i=await function(o,a){const l=H(o),c=Me.now(),d=a.reduce((y,I)=>y.add(I.key),oe());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let I=rn(),b=oe();return l.os.getEntries(y,d).next(R=>{I=R,I.forEach((E,w)=>{w.isValidDocument()||(b=b.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,I)).next(R=>{h=R;const E=[];for(const w of a){const T=F3(w,h.get(w.key).overlayedDocument);T!=null&&E.push(new $r(w.key,T,bA(T.value.mapValue),Ve.exists(!0)))}return l.mutationQueue.addMutationBatch(y,c,E,a)}).next(R=>{p=R;const E=R.applyToLocalDocumentSet(h,b);return l.documentOverlayCache.saveOverlays(y,R.batchId,E)})}).then(()=>({batchId:p.batchId,changes:MA(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new xe(se)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await qr(r,i.changes),await Fa(r.remoteStore)}catch(i){const s=Ua(i,"Failed to persist write");n.reject(s)}}async function $P(t,e){const n=H(t);try{const r=await kj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ee(o.wa):i.removedDocuments.size>0&&(ee(o.wa),o.wa=!1))}),await qr(n,r,e)}catch(r){await Yi(r)}}function a1(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let c=!1;l.queries.forEach((d,h)=>{for(const p of h.U_)p.j_(a)&&(c=!0)}),c&&x_(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f5(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new xe(G.comparator);o=o.insert(s,ke.newNoDocument(s,te.min()));const a=oe().add(s),l=new cc(te.min(),new Map,new xe(se),o,a);await $P(r,l),r.va=r.va.remove(s),r.Fa.delete(e),C_(r)}else await pa(r.localStore,e,!1).then(()=>ya(r,e,n)).catch(Yi)}async function p5(t,e){const n=H(t),r=e.batch.batchId;try{const i=await Rj(n.localStore,e);k_(n,r,null),R_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qr(n,i)}catch(i){await Yi(i)}}async function m5(t,e,n){const r=H(t);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ee(h!==null),d=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);k_(r,e,n),R_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qr(r,i)}catch(i){await Yi(i)}}async function g5(t,e){const n=H(t);Zi(n.remoteStore)||z("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=H(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=Ua(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function R_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function k_(t,e,n){const r=H(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function ya(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||qP(t,r)})}function qP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ma(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),C_(t))}function Qg(t,e,n){for(const r of n)r instanceof jP?(t.Ma.addReference(r.key,e),y5(t,r)):r instanceof UP?(z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||qP(t,r.key)):Q()}function y5(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),C_(t))}function C_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new G(ue.fromString(e)),r=t.Na.next();t.Fa.set(r,new o5(n)),t.va=t.va.insert(n,r),Nf(t.remoteStore,new xr(Ht(Oa(n.path)),r,"TargetPurposeLimboResolution",tn.oe))}}async function qr(t,e,n){const r=H(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const d=y_.Ki(l.targetId,c);s.push(d)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const d=H(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,p=>O.forEach(p.qi,y=>d.persistence.referenceDelegate.addReference(h,p.targetId,y)).next(()=>O.forEach(p.Qi,y=>d.persistence.referenceDelegate.removeReference(h,p.targetId,y)))))}catch(h){if(!Ji(h))throw h;z("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const y=d.ns.get(p),I=y.snapshotVersion,b=y.withLastLimboFreeSnapshotVersion(I);d.ns=d.ns.insert(p,b)}}}(r.localStore,s))}async function v5(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await bP(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new B(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qr(n,r.us)}}function _5(t,e){const n=H(t),r=n.Fa.get(e);if(r&&r.wa)return oe().add(r.key);{let i=oe();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function w5(t,e){const n=H(t),r=await jh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&Qg(n,e.targetId,i.fa),i}async function E5(t,e){const n=H(t);return PP(n.localStore,e).then(r=>qr(n,r))}async function I5(t,e,n,r){const i=H(t),s=await function(a,l){const c=H(a),d=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",h=>d.vn(h,l).next(p=>p?c.localDocuments.getDocuments(h,p):O.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Fa(i.remoteStore):n==="acknowledged"||n==="rejected"?(k_(i,e,r||null),R_(i,e),function(a,l){H(H(a).mutationQueue).Mn(l)}(i.localStore,e)):Q(),await qr(i,s)):z("SyncEngine","Cannot apply mutation batch with id: "+e)}async function T5(t,e){const n=H(t);if(Df(n),N_(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await l1(n,r.toArray());n.La=!0,await Hg(n.remoteStore,!0);for(const s of i)Nf(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ya(n,o),pa(n.localStore,o,!0))),ma(n.remoteStore,o)}),await i,await l1(n,r),function(o){const a=H(o);a.Fa.forEach((l,c)=>{ma(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new xe(G.comparator)}(n),n.La=!1,await Hg(n.remoteStore,!1)}}async function l1(t,e,n){const r=H(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await fa(r.localStore,Ht(l[0]));for(const c of l){const d=r.ba.get(c),h=await w5(r,d);h.snapshot&&s.push(h.snapshot)}}else{const c=await AP(r.localStore,o);a=await fa(r.localStore,c),await P_(r,WP(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function WP(t){return NA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function b5(t){return function(n){return H(H(n).persistence).Bi()}(H(t).localStore)}async function S5(t,e,n,r){const i=H(t);if(i.La)return void z("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await PP(i.localStore,OA(s[0])),a=cc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ct.EMPTY_BYTE_STRING);await qr(i,o,a);break}case"rejected":await pa(i.localStore,e,!0),ya(i,e,r);break;default:Q()}}async function x5(t,e,n){const r=Df(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){z("SyncEngine","Adding an already active target "+i);continue}const s=await AP(r.localStore,i),o=await fa(r.localStore,s);await P_(r,WP(s),o.targetId,!1,o.resumeToken),Nf(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await pa(r.localStore,i,!1).then(()=>{ma(r.remoteStore,i),ya(r,i)}).catch(Yi)}}function Df(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=$P.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f5.bind(null,e),e.Sa.h_=t5.bind(null,e.eventManager),e.Sa.ka=n5.bind(null,e.eventManager),e}function N_(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=p5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m5.bind(null,e),e}function A5(t,e,n){const r=H(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(y,I){const b=H(y),R=rt(I.createTime);return b.persistence.runTransaction("hasNewerBundle","readonly",E=>b.$r.getBundleMetadata(E,I.id)).then(E=>!!E&&E.createTime.compareTo(R)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(FP(l));const c=new i5(l,s.localStore,o.serializer);let d=await o.qa();for(;d;){const p=await c._a(d);p&&a._updateProgress(p),d=await o.qa()}const h=await c.complete();return await qr(s,h.ca,void 0),await function(y,I){const b=H(y);return b.persistence.runTransaction("Save bundle","readwrite",R=>b.$r.saveBundleMetadata(R,I))}(s.localStore,l),a._completeWith(h.progress),Promise.resolve(h.ua)}catch(l){return Wn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Yg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return TP(this.persistence,new IP,e.initialUser,this.serializer)}createPersistence(e){return new EP(Cf.Hr,this.serializer)}createSharedClientState(e){return new kP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GP extends Yg{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await N_(this.Qa.syncEngine),await Fa(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return TP(this.persistence,new IP,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new hj(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new QF(n,this.persistence);return new KF(e.asyncQueue,r)}createPersistence(e){const n=g_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new m_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,CP(),Wd(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new kP}}class P5 extends GP{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof hm&&(this.sharedClientState.syncEngine={Zs:I5.bind(null,n),Xs:S5.bind(null,n),eo:x5.bind(null,n),Bi:b5.bind(null,n),Ys:E5.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await T5(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=CP();if(!hm.D(n))throw new B(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=g_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class D_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>a1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=v5.bind(null,this.syncEngine),await Hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e5}()}createDatastore(e){const n=hc(e.databaseInfo.databaseId),r=function(s){return new Mj(s)}(e.databaseInfo);return function(s,o,a,l){return new Uj(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new zj(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>a1(this.syncEngine,n,0),function(){return n1.D()?new n1:new Oj}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,d){const h=new a5(i,s,o,a,l,c);return d&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=H(r);z("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Ma(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function u1(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Of{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class R5{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new wt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new r5(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class k5{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=H(i),a={documents:s.map(h=>Lu(o.serializer,h))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),a,s.length),c=new Map;l.forEach(h=>{const p=H3(o.serializer,h);c.set(p.key.toString(),p)});const d=[];return s.forEach(h=>{const p=c.get(h.toString());ee(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new La(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new s_(i,this.precondition(i)))}),await async function(r,i){const s=H(r),o={writes:i.map(a=>Mu(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,ue.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(te.min())?Ve.exists(!1):Ve.updateTime(n):Ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(te.min()))throw new B(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ve.updateTime(n)}return Ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class C5{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new __(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new k5(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!sc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!KA(n)}return!1}}/**
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
 */class N5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=lA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ua(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await O_(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>r1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>r1(e.remoteStore,i)),t._onlineComponents=e}function HP(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function O_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!HP(n))throw n;Wn("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new Yg)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new Yg);return t._offlineComponents}async function Vf(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Jg(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Jg(t,new D_))),t._onlineComponents}function KP(t){return O_(t).then(e=>e.persistence)}function V_(t){return O_(t).then(e=>e.localStore)}function QP(t){return Vf(t).then(e=>e.remoteStore)}function L_(t){return Vf(t).then(e=>e.syncEngine)}function D5(t){return Vf(t).then(e=>e.datastore)}async function va(t){const e=await Vf(t),n=e.eventManager;return n.onListen=l5.bind(null,e.syncEngine),n.onUnlisten=c5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=u5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=d5.bind(null,e.syncEngine),n}function O5(t){return t.asyncQueue.enqueue(async()=>{const e=await KP(t),n=await QP(t);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s.M_.delete(0),fc(s)}(n)})}function V5(t){return t.asyncQueue.enqueue(async()=>{const e=await KP(t),n=await QP(t);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s.M_.add(0),await Ma(s),s.N_.set("Offline")}(n)})}function L5(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,d){const h=H(c);return h.persistence.runTransaction("read document","readonly",p=>h.localDocuments.getDocument(p,d))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new B(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ua(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await V_(t),e,n)),n.promise}function YP(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Of({next:p=>{o.enqueueAndForget(()=>S_(s,h));const y=p.docs.has(a);!y&&p.fromCache?c.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&l&&l.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new A_(Oa(a.path),d,{includeMetadataChanges:!0,ra:!0});return b_(s,h)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function M5(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await jh(i,s,!0),l=new BP(s,a.hs),c=l.da(a.documents),d=l.applyChanges(c,!1);o.resolve(d.snapshot)}catch(a){const l=Ua(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await V_(t),e,n)),n.promise}function JP(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const d=new Of({next:p=>{o.enqueueAndForget(()=>S_(s,h)),p.fromCache&&l.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new A_(a,d,{includeMetadataChanges:!0,ra:!0});return b_(s,h)}(await va(t),t.asyncQueue,e,n,r)),r.promise}function F5(t,e){const n=new Of(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.add(s),s.next()}(await va(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).z_.delete(s)}(await va(t),n))}}function j5(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?YA().encode(o):o,function(d,h){return new R5(d,h)}(function(d,h){if(d instanceof Uint8Array)return u1(d,h);if(d instanceof ArrayBuffer)return u1(new Uint8Array(d),h);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,hc(e));t.asyncQueue.enqueueAndForget(async()=>{A5(await L_(t),i,r)})}function U5(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=H(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await V_(t),e))}/**
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
 */function XP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const c1=new Map;/**
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
 */function M_(t,e,n){if(!n)throw new B(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZP(t,e,n,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function d1(t){if(!G.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function h1(t){if(G.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function me(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lf(t);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eR(t,e){if(e<=0)throw new B(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class f1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new MF;switch(r.type){case"firstParty":return new BF(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=c1.get(n);r&&(z("ComponentProvider","Removing Datastore"),c1.delete(n),r.terminate())}(this),Promise.resolve()}}function B5(t,e,n,r={}){var i;const s=(t=me(t,pc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=eO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(c)}t._authCredentials=new FF(new aA(a,l))}}/**
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
 */let Kt=class tR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tR(this.firestore,e,this._query)}},Be=class nR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nR(this.firestore,e,this._key)}},bi=class rR extends Kt{constructor(e,n,r){super(e,n,Oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new G(e))}withConverter(e){return new rR(this.firestore,e,this._path)}};function iR(t,e,...n){if(t=ne(t),M_("collection","path",e),t instanceof pc){const r=ue.fromString(e,...n);return h1(r),new bi(t,null,r)}{if(!(t instanceof Be||t instanceof bi))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return h1(r),new bi(t.firestore,null,r)}}function z5(t,e){if(t=me(t,pc),M_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Kt(t,null,function(r){return new zr(ue.emptyPath(),r)}(e))}function $h(t,e,...n){if(t=ne(t),arguments.length===1&&(e=lA.newId()),M_("doc","path",e),t instanceof pc){const r=ue.fromString(e,...n);return d1(r),new Be(t,null,new G(r))}{if(!(t instanceof Be||t instanceof bi))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return d1(r),new Be(t.firestore,t instanceof bi?t.converter:null,new G(r))}}function sR(t,e){return t=ne(t),e=ne(e),(t instanceof Be||t instanceof bi)&&(e instanceof Be||e instanceof bi)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function oR(t,e){return t=ne(t),e=ne(e),t instanceof Kt&&e instanceof Kt&&t.firestore===e.firestore&&ac(t._query,e._query)&&t.converter===e.converter}/**
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
 */class $5{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new __(this,"async_queue_retry"),this.hu=()=>{const n=Wd();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Wd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Wd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new wt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ji(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=T_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Xg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class q5{constructor(){this._progressObserver={},this._taskCompletionResolver=new wt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const W5=-1;let Ye=class extends pc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new $5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aR(this),this._firestoreClient.terminate()}};function It(t){return t._firestoreClient||aR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,d){return new g3(a,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,XP(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new N5(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function G5(t,e){uR(t=me(t,Ye));const n=It(t);if(n._uninitializedComponentsProvider)throw new B(V.FAILED_PRECONDITION,"SDK cache is already specified.");Wn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new D_;return lR(n,i,new GP(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function H5(t){uR(t=me(t,Ye));const e=It(t);if(e._uninitializedComponentsProvider)throw new B(V.FAILED_PRECONDITION,"SDK cache is already specified.");Wn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new D_;return lR(e,r,new P5(r,n.cacheSizeBytes))}function lR(t,e,n){const r=new wt;return t.asyncQueue.enqueue(async()=>{try{await Gd(t,n),await Jg(t,e),r.resolve()}catch(i){const s=i;if(!HP(s))throw s;Wn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function K5(t){if(t._initialized&&!t._terminated)throw new B(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new wt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!ar.D())return Promise.resolve();const i=r+"main";await ar.delete(i)}(g_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Q5(t){return function(n){const r=new wt;return n.asyncQueue.enqueueAndForget(async()=>g5(await L_(n),r)),r.promise}(It(t=me(t,Ye)))}function Y5(t){return O5(It(t=me(t,Ye)))}function J5(t){return V5(It(t=me(t,Ye)))}function X5(t,e){const n=It(t=me(t,Ye)),r=new q5;return j5(n,t._databaseId,e,r),r}function Z5(t,e){return U5(It(t=me(t,Ye)),e).then(n=>n?new Kt(t,null,n.query):null)}function uR(t){if(t._initialized||t._terminated)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hr(ct.fromBase64String(e))}catch(n){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hr(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Li=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let eo=class{constructor(e){this._methodName=e}};/**
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
 */class Mf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const eU=/^__.*__$/;class tU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}class cR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ff{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return qh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(dR(this.fu)&&eU.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class nU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hc(e)}Fu(e,n,r,i=!1){return new Ff({fu:e,methodName:n,vu:r,path:Oe.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function to(t){const e=t._freezeSettings(),n=hc(t._databaseId);return new nU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jf(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);q_("Data must be an object, but it was:",o,r);const a=pR(r,o);let l,c;if(s.merge)l=new nn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const p=Zg(e,h,n);if(!o.contains(p))throw new B(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);gR(d,p)||d.push(p)}l=new nn(d),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new tU(new xt(a),l,c)}class mc extends eo{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mc}}function hR(t,e,n){return new Ff({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class F_ extends eo{_toFieldTransform(e){return new uc(e.path,new ca)}isEqual(e){return e instanceof F_}}class j_ extends eo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=hR(this,e,!0),r=this.Mu.map(s=>no(s,n)),i=new Bs(r);return new uc(e.path,i)}isEqual(e){return e instanceof j_&&Eu(this.Mu,e.Mu)}}class U_ extends eo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=hR(this,e,!0),r=this.Mu.map(s=>no(s,n)),i=new zs(r);return new uc(e.path,i)}isEqual(e){return e instanceof U_&&Eu(this.Mu,e.Mu)}}class B_ extends eo{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new da(e.serializer,BA(e.serializer,this.xu));return new uc(e.path,n)}isEqual(e){return e instanceof B_&&this.xu===e.xu}}function z_(t,e,n,r){const i=t.Fu(1,e,n);q_("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();Zs(r,(l,c)=>{const d=W_(e,l,n);c=ne(c);const h=i.Su(d);if(c instanceof mc)s.push(d);else{const p=no(c,h);p!=null&&(s.push(d),o.set(d,p))}});const a=new nn(s);return new cR(o,a,i.fieldTransforms)}function $_(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Zg(e,r,n)],l=[i];if(s.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Zg(e,s[p])),l.push(s[p+1]);const c=[],d=xt.empty();for(let p=a.length-1;p>=0;--p)if(!gR(c,a[p])){const y=a[p];let I=l[p];I=ne(I);const b=o.Su(y);if(I instanceof mc)c.push(y);else{const R=no(I,b);R!=null&&(c.push(y),d.set(y,R))}}const h=new nn(c);return new cR(d,h,o.fieldTransforms)}function fR(t,e,n,r=!1){return no(n,t.Fu(r?4:3,e))}function no(t,e){if(mR(t=ne(t)))return q_("Unsupported field value:",e,t),pR(t,e);if(t instanceof eo)return function(r,i){if(!dR(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=no(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Me.fromDate(r);return{timestampValue:ha(i.serializer,s)}}if(r instanceof Me){const s=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(i.serializer,s)}}if(r instanceof Mf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hr)return{bytesValue:ZA(i.serializer,r._byteString)};if(r instanceof Be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:c_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Lf(r)}`)}(t,e)}function pR(t,e){const n={};return EA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zs(t,(r,i)=>{const s=no(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Mf||t instanceof hr||t instanceof Be||t instanceof eo)}function q_(t,e,n){if(!mR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lf(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Zg(t,e,n){if((e=ne(e))instanceof Li)return e._internalPath;if(typeof e=="string")return W_(t,e);throw qh("Field path arguments must be of type string or ",t,!1,void 0,n)}const rU=new RegExp("[~\\*/\\[\\]]");function W_(t,e,n){if(e.search(rU)>=0)throw qh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Li(...e.split("."))._internalPath}catch{throw qh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(V.INVALID_ARGUMENT,a+t+l)}function gR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iU extends Fu{data(){return super.data()}}function Uf(t,e){return typeof e=="string"?W_(t,e):e instanceof Li?e._internalPath:e._delegate._internalPath}/**
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
 */function yR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class G_{}class gc extends G_{}function ei(t,e,...n){let r=[];e instanceof G_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof H_).length,a=s.filter(l=>l instanceof Bf).length;if(o>1||o>0&&a>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bf extends gc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bf(e,n,r)}_apply(e){const n=this._parse(e);return _R(e._query,n),new Kt(e.firestore,e.converter,Fg(e._query,n))}_parse(e){const n=to(e.firestore);return function(s,o,a,l,c,d,h){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){m1(h,d);const y=[];for(const I of h)y.push(p1(l,s,I));p={arrayValue:{values:y}}}else p=p1(l,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||m1(h,d),p=fR(a,o,h,d==="in"||d==="not-in");return ce.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sU(t,e,n){const r=e,i=Uf("where",t);return Bf._create(i,r,n)}class H_ extends G_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new H_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:_e.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)_R(o,l),o=Fg(o,l)}(e._query,n),new Kt(e.firestore,e.converter,Fg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class K_ extends gc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new K_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vu(s,o)}(e._query,this._field,this._direction);return new Kt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new zr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function oU(t,e="asc"){const n=e,r=Uf("orderBy",t);return K_._create(r,n)}class zf extends gc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new zf(e,n,r)}_apply(e){return new Kt(e.firestore,e.converter,Vh(e._query,this._limit,this._limitType))}}function aU(t){return eR("limit",t),zf._create("limit",t,"F")}function lU(t){return eR("limitToLast",t),zf._create("limitToLast",t,"L")}class $f extends gc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new $f(e,n,r)}_apply(e){const n=vR(e,this.type,this._docOrFields,this._inclusive);return new Kt(e.firestore,e.converter,function(i,s){return new zr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function uU(...t){return $f._create("startAt",t,!0)}function cU(...t){return $f._create("startAfter",t,!1)}class qf extends gc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new qf(e,n,r)}_apply(e){const n=vR(e,this.type,this._docOrFields,this._inclusive);return new Kt(e.firestore,e.converter,function(i,s){return new zr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function dU(...t){return qf._create("endBefore",t,!1)}function hU(...t){return qf._create("endAt",t,!0)}function vR(t,e,n,r){if(n[0]=ne(n[0]),n[0]instanceof Fu)return function(s,o,a,l,c){if(!l)throw new B(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const d=[];for(const h of Ho(s))if(h.field.isKeyField())d.push(js(o,l.key));else{const p=l.data.field(h.field);if(xf(p))throw new B(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+h.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const y=h.field.canonicalString();throw new B(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}d.push(p)}return new Oi(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=to(t.firestore);return function(o,a,l,c,d,h){const p=o.explicitOrderBy;if(d.length>p.length)throw new B(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let I=0;I<d.length;I++){const b=d[I];if(p[I].field.isKeyField()){if(typeof b!="string")throw new B(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof b}`);if(!r_(o)&&b.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${b}' contains a slash.`);const R=o.path.child(ue.fromString(b));if(!G.isDocumentKey(R))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${R}' is not because it contains an odd number of segments.`);const E=new G(R);y.push(js(a,E))}else{const R=fR(l,c,b);y.push(R)}}return new Oi(y,h)}(t._query,t.firestore._databaseId,i,e,n,r)}}function p1(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r_(e)&&n.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!G.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return js(t,new G(r))}if(n instanceof Be)return js(t,n._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lf(n)}.`)}function m1(t,e){if(!Array.isArray(t)||t.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _R(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Q_{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Mf(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=t_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Nu(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);ee(cP(r));const i=new Ni(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Wf(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fU extends Q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new hr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}/**
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
 */class _s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Vr=class extends Fu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Xl=class extends Vr{data(e={}){return super.data(e)}},Mi=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _s(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xl(this._firestore,this._userDataWriter,r.key,r,new _s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Xl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Xl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new _s(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:pU(a.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function pU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}function wR(t,e){return t instanceof Vr&&e instanceof Vr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Mi&&e instanceof Mi&&t._firestore===e._firestore&&oR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function mU(t){t=me(t,Be);const e=me(t.firestore,Ye);return YP(It(e),t._key).then(n=>Y_(e,t,n))}class ro extends Q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new hr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function gU(t){t=me(t,Be);const e=me(t.firestore,Ye),n=It(e),r=new ro(e);return L5(n,t._key).then(i=>new Vr(e,r,t._key,i,new _s(i!==null&&i.hasLocalMutations,!0),t.converter))}function yU(t){t=me(t,Be);const e=me(t.firestore,Ye);return YP(It(e),t._key,{source:"server"}).then(n=>Y_(e,t,n))}function vU(t){t=me(t,Kt);const e=me(t.firestore,Ye),n=It(e),r=new ro(e);return yR(t._query),JP(n,t._query).then(i=>new Mi(e,r,t,i))}function _U(t){t=me(t,Kt);const e=me(t.firestore,Ye),n=It(e),r=new ro(e);return M5(n,t._query).then(i=>new Mi(e,r,t,i))}function wU(t){t=me(t,Kt);const e=me(t.firestore,Ye),n=It(e),r=new ro(e);return JP(n,t._query,{source:"server"}).then(i=>new Mi(e,r,t,i))}function g1(t,e,n){t=me(t,Be);const r=me(t.firestore,Ye),i=Wf(t.converter,e,n);return yc(r,[jf(to(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ve.none())])}function y1(t,e,n,...r){t=me(t,Be);const i=me(t.firestore,Ye),s=to(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Li?$_(s,"updateDoc",t._key,e,n,r):z_(s,"updateDoc",t._key,e),yc(i,[o.toMutation(t._key,Ve.exists(!0))])}function EU(t){return yc(me(t.firestore,Ye),[new La(t._key,Ve.none())])}function IU(t,e){const n=me(t.firestore,Ye),r=$h(t),i=Wf(t.converter,e);return yc(n,[jf(to(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ve.exists(!1))]).then(()=>r)}function ER(t,...e){var n,r,i;t=ne(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Xg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,d;if(t instanceof Be)c=me(t.firestore,Ye),d=Oa(t._key.path),l={next:h=>{e[o]&&e[o](Y_(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=me(t,Kt);c=me(h.firestore,Ye),d=h._query;const p=new ro(c);l={next:y=>{e[o]&&e[o](new Mi(c,p,h,y))},error:e[o+1],complete:e[o+2]},yR(t._query)}return function(p,y,I,b){const R=new Of(b),E=new A_(y,R,I);return p.asyncQueue.enqueueAndForget(async()=>b_(await va(p),E)),()=>{R.$a(),p.asyncQueue.enqueueAndForget(async()=>S_(await va(p),E))}}(It(c),d,a,l)}function TU(t,e){return F5(It(t=me(t,Ye)),Xg(e)?e:{next:e})}function yc(t,e){return function(r,i){const s=new wt;return r.asyncQueue.enqueueAndForget(async()=>h5(await L_(r),i,s)),s.promise}(It(t),e)}function Y_(t,e,n){const r=n.docs.get(e._key),i=new ro(t);return new Vr(t,i,e._key,r,new _s(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const bU={maxAttempts:5};/**
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
 */let SU=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=to(e)}set(e,n,r){this._verifyNotCommitted();const i=li(e,this._firestore),s=Wf(i.converter,n,r),o=jf(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=li(e,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof Li?$_(this._dataReader,"WriteBatch.update",s._key,n,r,i):z_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=li(e,this._firestore);return this._mutations=this._mutations.concat(new La(n._key,Ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function li(t,e){if((t=ne(t)).firestore!==e)throw new B(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let xU=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=to(n)}get(n){const r=li(n,this._firestore),i=new fU(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Q();const o=s[0];if(o.isFoundDocument())return new Fu(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Fu(this._firestore,i,r._key,null,r.converter);throw Q()})}set(n,r,i){const s=li(n,this._firestore),o=Wf(s.converter,r,i),a=jf(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=li(n,this._firestore);let a;return a=typeof(r=ne(r))=="string"||r instanceof Li?$_(this._dataReader,"Transaction.update",o._key,r,i,s):z_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=li(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=li(e,this._firestore),r=new ro(this._firestore);return super.get(e).then(i=>new Vr(this._firestore,r,n._key,i._document,new _s(!1,!1),n.converter))}};function AU(t,e,n){t=me(t,Ye);const r=Object.assign(Object.assign({},bU),n);return function(s){if(s.maxAttempts<1)throw new B(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new wt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await D5(s);new C5(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(It(t),i=>e(new xU(t,i)),r)}/**
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
 */function PU(){return new mc("deleteField")}function RU(){return new F_("serverTimestamp")}function kU(...t){return new j_("arrayUnion",t)}function CU(...t){return new U_("arrayRemove",t)}function NU(t){return new B_("increment",t)}(function(e,n=!0){(function(i){Da=i})(Ki),Ri(new ur("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ye(new jF(r.getProvider("auth-internal")),new $F(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),zn(cI,"4.6.2",e),zn(cI,"4.6.2","esm2017")})();const DU="@firebase/firestore-compat",OU="0.3.31";/**
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
 */function J_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new B("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function v1(){if(typeof Uint8Array>"u")throw new B("unimplemented","Uint8Arrays are not available in this environment.")}function _1(){if(!p3())throw new B("unimplemented","Blobs are unavailable in Firestore in this environment.")}let IR=class ey{constructor(e){this._delegate=e}static fromBase64String(e){return _1(),new ey(hr.fromBase64String(e))}static fromUint8Array(e){return v1(),new ey(hr.fromUint8Array(e))}toBase64(){return _1(),this._delegate.toBase64()}toUint8Array(){return v1(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function ty(t){return VU(t,["next","error","complete"])}function VU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class LU{enableIndexedDbPersistence(e,n){return G5(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return H5(e._delegate)}clearIndexedDbPersistence(e){return K5(e._delegate)}}class TR{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ni||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Wn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){B5(this._delegate,e,n,r)}enableNetwork(){return Y5(this._delegate)}disableNetwork(){return J5(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ZP("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Q5(this._delegate)}onSnapshotsInSync(e){return TU(this._delegate,e)}get app(){if(!this._appCompat)throw new B("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new _a(this,iR(this._delegate,e))}catch(n){throw $t(n,"collection()","Firestore.collection()")}}doc(e){try{return new Sn(this,$h(this._delegate,e))}catch(n){throw $t(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new zt(this,z5(this._delegate,e))}catch(n){throw $t(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return AU(this._delegate,n=>e(new bR(this,n)))}batch(){return It(this._delegate),new SR(new SU(this._delegate,e=>yc(this._delegate,e)))}loadBundle(e){return X5(this._delegate,e)}namedQuery(e){return Z5(this._delegate,e).then(n=>n?new zt(this,n):null)}}class Gf extends Q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new IR(new hr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Sn.forKey(n,this.firestore,null)}}function MU(t){VF(t)}class bR{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Gf(e)}get(e){const n=ws(e);return this._delegate.get(n).then(r=>new ju(this._firestore,new Vr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ws(e);return r?(J_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ws(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ws(e);return this._delegate.delete(n),this}}class SR{constructor(e){this._delegate=e}set(e,n,r){const i=ws(e);return r?(J_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ws(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ws(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Gs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Xl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Uu(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Gs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Gs(e,new Gf(e),n),i.set(n,s)),s}}Gs.INSTANCES=new WeakMap;class Sn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Gf(e)}static forPath(e,n,r){if(e.length%2!==0)throw new B("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Sn(n,new Be(n._delegate,r,new G(e)))}static forKey(e,n,r){return new Sn(n,new Be(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new _a(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new _a(this.firestore,iR(this._delegate,e))}catch(n){throw $t(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=ne(e),e instanceof Be?sR(this._delegate,e):!1}set(e,n){n=J_("DocumentReference.set",n);try{return n?g1(this._delegate,e,n):g1(this._delegate,e)}catch(r){throw $t(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?y1(this._delegate,e):y1(this._delegate,e,n,...r)}catch(i){throw $t(i,"updateDoc()","DocumentReference.update()")}}delete(){return EU(this._delegate)}onSnapshot(...e){const n=xR(e),r=AR(e,i=>new ju(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ER(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=gU(this._delegate):(e==null?void 0:e.source)==="server"?n=yU(this._delegate):n=mU(this._delegate),n.then(r=>new ju(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Sn(this.firestore,e?this._delegate.withConverter(Gs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function $t(t,e,n){return t.message=t.message.replace(e,n),t}function xR(t){for(const e of t)if(typeof e=="object"&&!ty(e))return e;return{}}function AR(t,e){var n,r;let i;return ty(t[0])?i=t[0]:ty(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ju{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Sn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return wR(this._delegate,e._delegate)}}class Uu extends ju{data(e){const n=this._delegate.data(e);return this._delegate._converter||LF(n!==void 0),n}}class zt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Gf(e)}where(e,n,r){try{return new zt(this.firestore,ei(this._delegate,sU(e,n,r)))}catch(i){throw $t(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new zt(this.firestore,ei(this._delegate,oU(e,n)))}catch(r){throw $t(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new zt(this.firestore,ei(this._delegate,aU(e)))}catch(n){throw $t(n,"limit()","Query.limit()")}}limitToLast(e){try{return new zt(this.firestore,ei(this._delegate,lU(e)))}catch(n){throw $t(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new zt(this.firestore,ei(this._delegate,uU(...e)))}catch(n){throw $t(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new zt(this.firestore,ei(this._delegate,cU(...e)))}catch(n){throw $t(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new zt(this.firestore,ei(this._delegate,dU(...e)))}catch(n){throw $t(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new zt(this.firestore,ei(this._delegate,hU(...e)))}catch(n){throw $t(n,"endAt()","Query.endAt()")}}isEqual(e){return oR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=_U(this._delegate):(e==null?void 0:e.source)==="server"?n=wU(this._delegate):n=vU(this._delegate),n.then(r=>new ny(this.firestore,new Mi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=xR(e),r=AR(e,i=>new ny(this.firestore,new Mi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ER(this._delegate,n,r)}withConverter(e){return new zt(this.firestore,e?this._delegate.withConverter(Gs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class FU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Uu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ny{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new zt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Uu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new FU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Uu(this._firestore,r))})}isEqual(e){return wR(this._delegate,e._delegate)}}class _a extends zt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Sn(this.firestore,e):null}doc(e){try{return e===void 0?new Sn(this.firestore,$h(this._delegate)):new Sn(this.firestore,$h(this._delegate,e))}catch(n){throw $t(n,"doc()","CollectionReference.doc()")}}add(e){return IU(this._delegate,e).then(n=>new Sn(this.firestore,n))}isEqual(e){return sR(this._delegate,e._delegate)}withConverter(e){return new _a(this.firestore,e?this._delegate.withConverter(Gs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ws(t){return me(t,Be)}/**
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
 */class X_{constructor(...e){this._delegate=new Li(...e)}static documentId(){return new X_(Oe.keyField().canonicalString())}isEqual(e){return e=ne(e),e instanceof Li?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ps{constructor(e){this._delegate=e}static serverTimestamp(){const e=RU();return e._methodName="FieldValue.serverTimestamp",new ps(e)}static delete(){const e=PU();return e._methodName="FieldValue.delete",new ps(e)}static arrayUnion(...e){const n=kU(...e);return n._methodName="FieldValue.arrayUnion",new ps(n)}static arrayRemove(...e){const n=CU(...e);return n._methodName="FieldValue.arrayRemove",new ps(n)}static increment(e){const n=NU(e);return n._methodName="FieldValue.increment",new ps(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const jU={Firestore:TR,GeoPoint:Mf,Timestamp:Me,Blob:IR,Transaction:bR,WriteBatch:SR,DocumentReference:Sn,DocumentSnapshot:ju,Query:zt,QueryDocumentSnapshot:Uu,QuerySnapshot:ny,CollectionReference:_a,FieldPath:X_,FieldValue:ps,setLogLevel:MU,CACHE_SIZE_UNLIMITED:W5};function UU(t,e){t.INTERNAL.registerComponent(new ur("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},jU)))}/**
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
 */function BU(t){UU(t,(e,n)=>new TR(e,n,new LU)),t.registerVersion(DU,OU)}BU(Pn);const PR=U.createContext(void 0);function ln(){const t=U.useContext(PR);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t}function zU({children:t}){const[e,n]=U.useState(null),[r,i]=U.useState(!1),[s,o]=U.useState(!1),[a,l]=U.useState(null),[c,d]=U.useState(null),[h,p]=U.useState(!1),y=Gi(),I=async()=>{try{const A=await fetch("http://worldtimeapi.org/api/ip");if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);return(await A.json()).unixtime}catch(A){return console.error("Error fetching the Unix timestamp:",A),null}},b=()=>{e&&e.email&&Pn.firestore().collection("Users").doc(e.email).onSnapshot(k=>{if(k.exists){const C=k.data();C&&(o(C.subscribed??!1),l(C.subscriptionId??null),d(C))}else o(!1),l(null)},k=>{console.error("Error listening to the document: ",k)})},R=async()=>{c&&c.cancelAt&&e&&e.email&&c.cancelAt-1e5<=await I()&&Pn.firestore().collection("Users").doc(e.email).update({subscribed:!1,cancelAt:null})},E=(A,k)=>Jr.createUserWithEmailAndPassword(A,k),w=A=>Pn.firestore().collection("Users").doc(A).set({subscribed:!1,subscriptionId:"none",subscriptionItemId:"none",subscriptionType:"none"}),T=()=>{if(Jr&&Jr.currentUser)return Jr.currentUser.sendEmailVerification()},N=(A,k)=>Jr.signInWithEmailAndPassword(A,k),L=()=>(o(!1),Jr.signOut()),F=A=>Jr.sendPasswordResetEmail(A),S=A=>{if(e)return e.verifyBeforeUpdateEmail(A)},_=A=>{if(e)return e.updatePassword(A)};U.useEffect(()=>Jr.onAuthStateChanged(k=>{n(k),i(!1)}),[]),U.useEffect(()=>{I()},[e]),U.useEffect(()=>{console.log(`getDataEffect: ${h}`),b(),c&&R()},[y.pathname,e,h]);const x={currentUser:e,loading:r,subscribed:s,subscriptionId:a,signup:E,createUserDoc:w,verify:T,login:N,logout:L,resetPassword:F,updatePassword:_,updateEmail:S,getUserData:b,data:c,getDataEffect:h,setGetDataEffect:p};return g.jsx(PR.Provider,{value:x,children:!r&&t})}function $U(){const{subscribed:t}=ln();return g.jsx("div",{children:g.jsxs("div",{className:"text-center items-center flex-col-reverse flex xl:ml-64 xl:flex-row mt-[5%] sm:m-5 ",children:[g.jsxs("div",{className:" flex items-center flex-col m-4 ",children:[g.jsx("h1",{className:"text-3xl sm:text-4xl text-center",children:"¡Empieza a hablar el ingles con confianza! "}),g.jsxs("div",{className:"hidden sm:block sm:flex justify-between w-[80%] m-5 text-3xl text-blue-200",children:[g.jsx("h1",{children:"LEER"}),g.jsx("h1",{children:"HABLAR"}),g.jsx("h1",{children:"ESCRIBIR"})]}),g.jsx(be,{to:t?"/dashboard":"/pricing",className:" rounded-lg bg-blue-200 hover:bg-blue-300 text-3xl p-5 m-10",children:"EMPIEZA YA!"})]}),g.jsx("img",{className:" w-[60%] md:w-[40%] xl:w-[35%]",src:$D})]})})}function ry(t){const{data:e}=ln(),n=[{plan:1,name:"Base",price:"600 MXN",classes:"Incluye 2 clases grupales por semana.",duration:"1 hora"},{plan:2,name:"Estudiante+",price:"900 MXN",classes:" 2 Clases grupales por semana",duration:"1 hora",bonus:"1 Clase privada al mes"},{plan:3,name:"Estudiante Privado",price:"1200 MXN",classes:"1 clase privada por semana",duration:"1 hora",bonus:"Un plan de aprendizaje personalizado"}];return g.jsx("div",{className:"flex flex-col items-center lg:flex-row justify-evenly",children:n.map((r,i)=>g.jsxs("div",{className:`flex flex-col justify-between items-center h-[400px] lg:h-[500px] m-4 w-[300px] text-center rounded-lg p-8
                         bg-white shadow-lg`,children:[g.jsx("div",{className:"h-20 border-b border-gray-300 w-full",children:g.jsx("h2",{className:" text-2xl ",children:r.name})}),g.jsx("h1",{className:"text-5xl",children:r.price}),g.jsxs("div",{className:"text-left",children:[g.jsx("p",{className:"mb-4",children:r.classes}),r.bonus&&g.jsx("p",{className:"border-t pt-3 border-gray-300",children:`Bono: ${r.bonus}`})]}),t.pricingPage&&g.jsx(be,{className:"rounded bg-blue-200 hover:bg-blue-300 text-2xl p-3 flex justify-center items-center",to:"/payment",state:{data:n[i]},children:g.jsx("button",{children:"Selectionar Plan"})}),t.manageSubscriptionPage&&g.jsx("div",{className:e&&r.name==e.subscriptionType?"rounded bg-gray-300 text-black/50 text-2xl p-3 flex justify-center items-center":"rounded bg-blue-200 hover:bg-blue-300 text-2xl p-3 flex justify-center items-center",children:g.jsx("button",{disabled:e?r.name==e.subscriptionType:!1,onClick:()=>t.handleChangeSubscription(r.plan),children:e&&r.name==e.subscriptionType?"Plan Actual":"Cambiar Plan"})})]}))})}function qU(){return g.jsxs("div",{children:[g.jsx("h1",{className:"text-lg lg:text-3xl text-center sm:m-2",children:"Precios flexibles para cualquier meta de aprendizaje!"}),g.jsx(ry,{pricingPage:!0})]})}const WU="https://brighamdent.github.io/assets/portrait-BCFsludh.jpg";function GU(){const t="lg:m-3 text-lg text-center font-bold mt-6";return g.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-around lg:items-start",children:[g.jsx("h1",{className:"text-4xl  lg:hidden",children:"Quiénes Somos"}),g.jsx("div",{className:"bg-white rounded-lg shadow p-4 m-2",children:g.jsx("img",{className:"w-72 lg:w-[450px] ",src:WU})}),g.jsxs("div",{className:" lg:text-start flex flex-col p-6 lg:p-0 text-center justify-around lg:pr-8 lg:pl-8 lg:w-[60%]",children:[g.jsx("h1",{className:"text-4xl  hidden lg:block text-center",children:"Quiénes Somos"}),g.jsx("h1",{className:t,children:"¡Bienvenidos a English Direct!"}),g.jsx("p",{children:"¡Hola a todos! Soy John, el fundador de English Direct, un apasionado profesor de inglés con más de cuatro años de experiencia enseñando. Soy originario de Arizona, Estados Unidos, y estoy emocionado de compartir mi amor por el inglés contigo a través de este espacio educativo."}),g.jsx("h1",{className:t,children:"¿Quién Soy?"}),g.jsx("p",{children:"Mi nombre es John, y mi viaje con los idiomas no ha sido solo como profesor, sino también como estudiante. Decidí aventurarme en el aprendizaje del español, lo que me ha brindado una perspectiva única sobre los desafíos y la emoción de dominar un nuevo idioma."}),g.jsx("h1",{className:t,children:"English Direct - Tu Destino para Aprender Inglés"}),g.jsx("p",{children:"Bienvenidos a English Direct, tu destino en línea para mejorar tus habilidades en inglés. He desarrollado un enfoque único y personalizado que se adapta a las necesidades individuales de cada estudiante. Mis métodos de enseñanza buscan hacer del aprendizaje del inglés una experiencia divertida, desafiante y gratificante."}),g.jsx("h1",{className:t,children:"Nuestra Misión"}),g.jsx("p",{className:"mb-3",children:"En English Direct, nuestra misión es brindarte las herramientas necesarias para que alcances tus metas lingüísticas. Creemos en un enfoque práctico y amigable para el aprendizaje del inglés, inspirado por mi propia travesía en el aprendizaje del español."}),g.jsx("p",{className:"mb-3",children:"Únete a nosotros en este emocionante viaje hacia la fluidez en inglés. ¡Estoy ansioso por ser parte de tu éxito!"}),g.jsx("p",{children:"¡Gracias por elegir English Direct!"})]})]})}function w1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?w1(Object(n),!0).forEach(function(r){dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Wh(t){"@babel/helpers - typeof";return Wh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wh(t)}function HU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function KU(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function QU(t,e,n){return e&&KU(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z_(t,e){return JU(t)||ZU(t,e)||RR(t,e)||t6()}function vc(t){return YU(t)||XU(t)||RR(t)||e6()}function YU(t){if(Array.isArray(t))return iy(t)}function JU(t){if(Array.isArray(t))return t}function XU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ZU(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function RR(t,e){if(t){if(typeof t=="string")return iy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return iy(t,e)}}function iy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function t6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var E1=function(){},e0={},kR={},CR=null,NR={mark:E1,measure:E1};try{typeof window<"u"&&(e0=window),typeof document<"u"&&(kR=document),typeof MutationObserver<"u"&&(CR=MutationObserver),typeof performance<"u"&&(NR=performance)}catch{}var n6=e0.navigator||{},I1=n6.userAgent,T1=I1===void 0?"":I1,Fi=e0,Ne=kR,b1=CR,dd=NR;Fi.document;var Wr=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",DR=~T1.indexOf("MSIE")||~T1.indexOf("Trident/"),hd,fd,pd,md,gd,Lr="___FONT_AWESOME___",sy=16,OR="fa",VR="svg-inline--fa",Hs="data-fa-i2svg",oy="data-fa-pseudo-element",r6="data-fa-pseudo-element-pending",t0="data-prefix",n0="data-icon",S1="fontawesome-i2svg",i6="async",s6=["HTML","HEAD","STYLE","SCRIPT"],LR=function(){try{return!0}catch{return!1}}(),Re="classic",He="sharp",r0=[Re,He];function _c(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Re]}})}var Bu=_c((hd={},dt(hd,Re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),dt(hd,He,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),hd)),zu=_c((fd={},dt(fd,Re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),dt(fd,He,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),fd)),$u=_c((pd={},dt(pd,Re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),dt(pd,He,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pd)),o6=_c((md={},dt(md,Re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),dt(md,He,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),md)),a6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,MR="fa-layers-text",l6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,u6=_c((gd={},dt(gd,Re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),dt(gd,He,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),gd)),FR=[1,2,3,4,5,6,7,8,9,10],c6=FR.concat([11,12,13,14,15,16,17,18,19,20]),d6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Es={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qu=new Set;Object.keys(zu[Re]).map(qu.add.bind(qu));Object.keys(zu[He]).map(qu.add.bind(qu));var h6=[].concat(r0,vc(qu),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Es.GROUP,Es.SWAP_OPACITY,Es.PRIMARY,Es.SECONDARY]).concat(FR.map(function(t){return"".concat(t,"x")})).concat(c6.map(function(t){return"w-".concat(t)})),Zl=Fi.FontAwesomeConfig||{};function f6(t){var e=Ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function p6(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ne&&typeof Ne.querySelector=="function"){var m6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];m6.forEach(function(t){var e=Z_(t,2),n=e[0],r=e[1],i=p6(f6(n));i!=null&&(Zl[r]=i)})}var jR={styleDefault:"solid",familyDefault:"classic",cssPrefix:OR,replacementClass:VR,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zl.familyPrefix&&(Zl.cssPrefix=Zl.familyPrefix);var wa=Y(Y({},jR),Zl);wa.autoReplaceSvg||(wa.observeMutations=!1);var Z={};Object.keys(jR).forEach(function(t){Object.defineProperty(Z,t,{enumerable:!0,set:function(n){wa[t]=n,eu.forEach(function(r){return r(Z)})},get:function(){return wa[t]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(e){wa.cssPrefix=e,eu.forEach(function(n){return n(Z)})},get:function(){return wa.cssPrefix}});Fi.FontAwesomeConfig=Z;var eu=[];function g6(t){return eu.push(t),function(){eu.splice(eu.indexOf(t),1)}}var ti=sy,rr={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function y6(t){if(!(!t||!Wr)){var e=Ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ne.head.insertBefore(e,r),t}}var v6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Wu(){for(var t=12,e="";t-- >0;)e+=v6[Math.random()*62|0];return e}function Ba(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function i0(t){return t.classList?Ba(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function UR(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _6(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(UR(t[n]),'" ')},"").trim()}function Hf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function s0(t){return t.size!==rr.size||t.x!==rr.x||t.y!==rr.y||t.rotate!==rr.rotate||t.flipX||t.flipY}function w6(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function E6(t){var e=t.transform,n=t.width,r=n===void 0?sy:n,i=t.height,s=i===void 0?sy:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&DR?l+="translate(".concat(e.x/ti-r/2,"em, ").concat(e.y/ti-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/ti,"em), calc(-50% + ").concat(e.y/ti,"em)) "):l+="translate(".concat(e.x/ti,"em, ").concat(e.y/ti,"em) "),l+="scale(".concat(e.size/ti*(e.flipX?-1:1),", ").concat(e.size/ti*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var I6=`:root, :host {
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
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function BR(){var t=OR,e=VR,n=Z.cssPrefix,r=Z.replacementClass,i=I6;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var x1=!1;function pm(){Z.autoAddCss&&!x1&&(y6(BR()),x1=!0)}var T6={mixout:function(){return{dom:{css:BR,insertCss:pm}}},hooks:function(){return{beforeDOMElementCreation:function(){pm()},beforeI2svg:function(){pm()}}}},Mr=Fi||{};Mr[Lr]||(Mr[Lr]={});Mr[Lr].styles||(Mr[Lr].styles={});Mr[Lr].hooks||(Mr[Lr].hooks={});Mr[Lr].shims||(Mr[Lr].shims=[]);var jn=Mr[Lr],zR=[],b6=function t(){Ne.removeEventListener("DOMContentLoaded",t),Gh=1,zR.map(function(e){return e()})},Gh=!1;Wr&&(Gh=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),Gh||Ne.addEventListener("DOMContentLoaded",b6));function S6(t){Wr&&(Gh?setTimeout(t,0):zR.push(t))}function wc(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?UR(t):"<".concat(e," ").concat(_6(r),">").concat(s.map(wc).join(""),"</").concat(e,">")}function A1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var mm=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=n,l,c,d;for(r===void 0?(l=1,d=e[s[0]]):(l=0,d=r);l<o;l++)c=s[l],d=a(d,e[c],c,e);return d};function x6(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ay(t){var e=x6(t);return e.length===1?e[0].toString(16):null}function A6(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function P1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function ly(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=P1(e);typeof jn.hooks.addPack=="function"&&!i?jn.hooks.addPack(t,P1(e)):jn.styles[t]=Y(Y({},jn.styles[t]||{}),s),t==="fas"&&ly("fa",e)}var yd,vd,_d,Oo=jn.styles,P6=jn.shims,R6=(yd={},dt(yd,Re,Object.values($u[Re])),dt(yd,He,Object.values($u[He])),yd),o0=null,$R={},qR={},WR={},GR={},HR={},k6=(vd={},dt(vd,Re,Object.keys(Bu[Re])),dt(vd,He,Object.keys(Bu[He])),vd);function C6(t){return~h6.indexOf(t)}function N6(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!C6(i)?i:null}var KR=function(){var e=function(s){return mm(Oo,function(o,a,l){return o[l]=mm(a,s,{}),o},{})};$R=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),qR=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),HR=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Oo||Z.autoFetchSvg,r=mm(P6,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});WR=r.names,GR=r.unicodes,o0=Kf(Z.styleDefault,{family:Z.familyDefault})};g6(function(t){o0=Kf(t.styleDefault,{family:Z.familyDefault})});KR();function a0(t,e){return($R[t]||{})[e]}function D6(t,e){return(qR[t]||{})[e]}function Is(t,e){return(HR[t]||{})[e]}function QR(t){return WR[t]||{prefix:null,iconName:null}}function O6(t){var e=GR[t],n=a0("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ji(){return o0}var l0=function(){return{prefix:null,iconName:null,rest:[]}};function Kf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Re:n,i=Bu[r][t],s=zu[r][t]||zu[r][i],o=t in jn.styles?t:null;return s||o||null}var R1=(_d={},dt(_d,Re,Object.keys($u[Re])),dt(_d,He,Object.keys($u[He])),_d);function Qf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},dt(e,Re,"".concat(Z.cssPrefix,"-").concat(Re)),dt(e,He,"".concat(Z.cssPrefix,"-").concat(He)),e),o=null,a=Re;(t.includes(s[Re])||t.some(function(c){return R1[Re].includes(c)}))&&(a=Re),(t.includes(s[He])||t.some(function(c){return R1[He].includes(c)}))&&(a=He);var l=t.reduce(function(c,d){var h=N6(Z.cssPrefix,d);if(Oo[d]?(d=R6[a].includes(d)?o6[a][d]:d,o=d,c.prefix=d):k6[a].indexOf(d)>-1?(o=d,c.prefix=Kf(d,{family:a})):h?c.iconName=h:d!==Z.replacementClass&&d!==s[Re]&&d!==s[He]&&c.rest.push(d),!i&&c.prefix&&c.iconName){var p=o==="fa"?QR(c.iconName):{},y=Is(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||y||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Oo.far&&Oo.fas&&!Z.autoFetchSvg&&(c.prefix="fas")}return c},l0());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===He&&(Oo.fass||Z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Is(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ji()||"fas"),l}var V6=function(){function t(){HU(this,t),this.definitions={}}return QU(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=Y(Y({},n.definitions[a]||{}),o[a]),ly(a,o[a]);var l=$u[Re][a];l&&ly(l,o[a]),KR()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[a]||(n[a]={}),d.length>0&&d.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),t}(),k1=[],Vo={},Qo={},L6=Object.keys(Qo);function M6(t,e){var n=e.mixoutsTo;return k1=t,Vo={},Object.keys(Qo).forEach(function(r){L6.indexOf(r)===-1&&delete Qo[r]}),k1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Wh(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Vo[o]||(Vo[o]=[]),Vo[o].push(s[o])})}r.provides&&r.provides(Qo)}),n}function uy(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Vo[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Vo[t]||[];i.forEach(function(s){s.apply(null,n)})}function Fr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qo[t]?Qo[t].apply(null,e):void 0}function cy(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ji();if(e)return e=Is(n,e)||e,A1(YR.definitions,n,e)||A1(jn.styles,n,e)}var YR=new V6,F6=function(){Z.autoReplaceSvg=!1,Z.observeMutations=!1,Ks("noAuto")},j6={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wr?(Ks("beforeI2svg",e),Fr("pseudoElements2svg",e),Fr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,S6(function(){B6({autoReplaceSvgRoot:n}),Ks("watch",e)})}},U6={icon:function(e){if(e===null)return null;if(Wh(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Is(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Kf(e[0]);return{prefix:r,iconName:Is(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Z.cssPrefix,"-"))>-1||e.match(a6))){var i=Qf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||ji(),iconName:Is(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=ji();return{prefix:s,iconName:Is(s,e)||e}}}},En={noAuto:F6,config:Z,dom:j6,parse:U6,library:YR,findIconDefinition:cy,toHtml:wc},B6=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ne:n;(Object.keys(jn.styles).length>0||Z.autoFetchSvg)&&Wr&&Z.autoReplaceSvg&&En.dom.i2svg({node:r})};function Yf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return wc(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Wr){var r=Ne.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function z6(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(s0(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};i.style=Hf(Y(Y({},s),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $6(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(Z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Y(Y({},i),{},{id:o}),children:r}]}]}function u0(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,d=t.titleId,h=t.extra,p=t.watchable,y=p===void 0?!1:p,I=r.found?r:n,b=I.width,R=I.height,E=i==="fak",w=[Z.replacementClass,s?"".concat(Z.cssPrefix,"-").concat(s):""].filter(function(x){return h.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(h.classes).join(" "),T={children:[],attributes:Y(Y({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(R)})},N=E&&!~h.classes.indexOf("fa-fw")?{width:"".concat(b/R*16*.0625,"em")}:{};y&&(T.attributes[Hs]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(d||Wu())},children:[l]}),delete T.attributes.title);var L=Y(Y({},T),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:Y(Y({},N),h.styles)}),F=r.found&&n.found?Fr("generateAbstractMask",L)||{children:[],attributes:{}}:Fr("generateAbstractIcon",L)||{children:[],attributes:{}},S=F.children,_=F.attributes;return L.children=S,L.attributes=_,a?$6(L):z6(L)}function C1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=Y(Y(Y({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(c[Hs]="");var d=Y({},o.styles);s0(i)&&(d.transform=E6({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var h=Hf(d);h.length>0&&(c.style=h);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function q6(t){var e=t.content,n=t.title,r=t.extra,i=Y(Y(Y({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Hf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var gm=jn.styles;function dy(t){var e=t[0],n=t[1],r=t.slice(4),i=Z_(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Es.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Es.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Es.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var W6={found:!1,width:512,height:512};function G6(t,e){!LR&&!Z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function hy(t,e){var n=e;return e==="fa"&&Z.styleDefault!==null&&(e=ji()),new Promise(function(r,i){if(Fr("missingIconAbstract"),n==="fa"){var s=QR(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&gm[e]&&gm[e][t]){var o=gm[e][t];return r(dy(o))}G6(t,e),r(Y(Y({},W6),{},{icon:Z.showMissingIcons&&t?Fr("missingIconAbstract")||{}:{}}))})}var N1=function(){},fy=Z.measurePerformance&&dd&&dd.mark&&dd.measure?dd:{mark:N1,measure:N1},Ol='FA "6.5.2"',H6=function(e){return fy.mark("".concat(Ol," ").concat(e," begins")),function(){return JR(e)}},JR=function(e){fy.mark("".concat(Ol," ").concat(e," ends")),fy.measure("".concat(Ol," ").concat(e),"".concat(Ol," ").concat(e," begins"),"".concat(Ol," ").concat(e," ends"))},c0={begin:H6,end:JR},Hd=function(){};function D1(t){var e=t.getAttribute?t.getAttribute(Hs):null;return typeof e=="string"}function K6(t){var e=t.getAttribute?t.getAttribute(t0):null,n=t.getAttribute?t.getAttribute(n0):null;return e&&n}function Q6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Z.replacementClass)}function Y6(){if(Z.autoReplaceSvg===!0)return Kd.replace;var t=Kd[Z.autoReplaceSvg];return t||Kd.replace}function J6(t){return Ne.createElementNS("http://www.w3.org/2000/svg",t)}function X6(t){return Ne.createElement(t)}function XR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?J6:X6:n;if(typeof t=="string")return Ne.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(XR(o,{ceFn:r}))}),i}function Z6(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Kd={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(XR(i),n)}),n.getAttribute(Hs)===null&&Z.keepOriginalSource){var r=Ne.createComment(Z6(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~i0(n).indexOf(Z.replacementClass))return Kd.replace(e);var i=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===Z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return wc(a)}).join(`
`);n.setAttribute(Hs,""),n.innerHTML=o}};function O1(t){t()}function ZR(t,e){var n=typeof e=="function"?e:Hd;if(t.length===0)n();else{var r=O1;Z.mutateApproach===i6&&(r=Fi.requestAnimationFrame||O1),r(function(){var i=Y6(),s=c0.begin("mutate");t.map(i),s(),n()})}}var d0=!1;function ek(){d0=!0}function py(){d0=!1}var Hh=null;function V1(t){if(b1&&Z.observeMutations){var e=t.treeCallback,n=e===void 0?Hd:e,r=t.nodeCallback,i=r===void 0?Hd:r,s=t.pseudoElementsCallback,o=s===void 0?Hd:s,a=t.observeMutationsRoot,l=a===void 0?Ne:a;Hh=new b1(function(c){if(!d0){var d=ji();Ba(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!D1(h.addedNodes[0])&&(Z.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&Z.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&D1(h.target)&&~d6.indexOf(h.attributeName))if(h.attributeName==="class"&&K6(h.target)){var p=Qf(i0(h.target)),y=p.prefix,I=p.iconName;h.target.setAttribute(t0,y||d),I&&h.target.setAttribute(n0,I)}else Q6(h.target)&&i(h.target)})}}),Wr&&Hh.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function e9(){Hh&&Hh.disconnect()}function t9(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function n9(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Qf(i0(t));return i.prefix||(i.prefix=ji()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=D6(i.prefix,t.innerText)||a0(i.prefix,ay(t.innerText))),!i.iconName&&Z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function r9(t){var e=Ba(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return Z.autoA11y&&(n?e["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(r||Wu()):(e["aria-hidden"]="true",e.focusable="false")),e}function i9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rr,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=n9(t),r=n.iconName,i=n.prefix,s=n.rest,o=r9(t),a=uy("parseNodeAttributes",{},t),l=e.styleParser?t9(t):[];return Y({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:rr,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var s9=jn.styles;function tk(t){var e=Z.autoReplaceSvg==="nest"?L1(t,{styleParser:!1}):L1(t);return~e.extra.classes.indexOf(MR)?Fr("generateLayersText",t,e):Fr("generateSvgReplacementMutation",t,e)}var Ui=new Set;r0.map(function(t){Ui.add("fa-".concat(t))});Object.keys(Bu[Re]).map(Ui.add.bind(Ui));Object.keys(Bu[He]).map(Ui.add.bind(Ui));Ui=vc(Ui);function M1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wr)return Promise.resolve();var n=Ne.documentElement.classList,r=function(h){return n.add("".concat(S1,"-").concat(h))},i=function(h){return n.remove("".concat(S1,"-").concat(h))},s=Z.autoFetchSvg?Ui:r0.map(function(d){return"fa-".concat(d)}).concat(Object.keys(s9));s.includes("fa")||s.push("fa");var o=[".".concat(MR,":not([").concat(Hs,"])")].concat(s.map(function(d){return".".concat(d,":not([").concat(Hs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Ba(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=c0.begin("onTree"),c=a.reduce(function(d,h){try{var p=tk(h);p&&d.push(p)}catch(y){LR||y.name==="MissingIcon"&&console.error(y)}return d},[]);return new Promise(function(d,h){Promise.all(c).then(function(p){ZR(p,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(p){l(),h(p)})})}function o9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tk(t).then(function(n){n&&ZR([n],e)})}function a9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:cy(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:cy(i||{})),t(r,Y(Y({},n),{},{mask:i}))}}var l9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?rr:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,c=n.maskId,d=c===void 0?null:c,h=n.title,p=h===void 0?null:h,y=n.titleId,I=y===void 0?null:y,b=n.classes,R=b===void 0?[]:b,E=n.attributes,w=E===void 0?{}:E,T=n.styles,N=T===void 0?{}:T;if(e){var L=e.prefix,F=e.iconName,S=e.icon;return Yf(Y({type:"icon"},e),function(){return Ks("beforeDOMElementCreation",{iconDefinition:e,params:n}),Z.autoA11y&&(p?w["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(I||Wu()):(w["aria-hidden"]="true",w.focusable="false")),u0({icons:{main:dy(S),mask:l?dy(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:L,iconName:F,transform:Y(Y({},rr),i),symbol:o,title:p,maskId:d,titleId:I,extra:{attributes:w,styles:N,classes:R}})})}},u9={mixout:function(){return{icon:a9(l9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=M1,n.nodeCallback=o9,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ne:r,s=n.callback,o=s===void 0?function(){}:s;return M1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,d=r.mask,h=r.maskId,p=r.extra;return new Promise(function(y,I){Promise.all([hy(i,a),d.iconName?hy(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var R=Z_(b,2),E=R[0],w=R[1];y([n,u0({icons:{main:E,mask:w},prefix:a,iconName:i,transform:l,symbol:c,maskId:h,title:s,titleId:o,extra:p,watchable:!0})])}).catch(I)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Hf(a);l.length>0&&(i.style=l);var c;return s0(o)&&(c=Fr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},c9={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Yf({type:"layer"},function(){Ks("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers")].concat(vc(s)).join(" ")},children:o}]})}}}},d9={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,h=d===void 0?{}:d;return Yf({type:"counter",content:n},function(){return Ks("beforeDOMElementCreation",{content:n,params:r}),q6({content:n.toString(),title:s,extra:{attributes:c,styles:h,classes:["".concat(Z.cssPrefix,"-layers-counter")].concat(vc(a))}})})}}}},h9={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?rr:i,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,h=d===void 0?{}:d,p=r.styles,y=p===void 0?{}:p;return Yf({type:"text",content:n},function(){return Ks("beforeDOMElementCreation",{content:n,params:r}),C1({content:n,transform:Y(Y({},rr),s),title:a,extra:{attributes:h,styles:y,classes:["".concat(Z.cssPrefix,"-layers-text")].concat(vc(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(DR){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();a=d.width/c,l=d.height/c}return Z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,C1({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},f9=new RegExp('"',"ug"),F1=[1105920,1112319];function p9(t){var e=t.replace(f9,""),n=A6(e,0),r=n>=F1[0]&&n<=F1[1],i=e.length===2?e[0]===e[1]:!1;return{value:ay(i?e[0]:e),isSecondary:r||i}}function j1(t,e){var n="".concat(r6).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Ba(t.children),o=s.filter(function(S){return S.getAttribute(oy)===e})[0],a=Fi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(l6),c=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var h=a.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?He:Re,y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?zu[p][l[2].toLowerCase()]:u6[p][c],I=p9(h),b=I.value,R=I.isSecondary,E=l[0].startsWith("FontAwesome"),w=a0(y,b),T=w;if(E){var N=O6(b);N.iconName&&N.prefix&&(w=N.iconName,y=N.prefix)}if(w&&!R&&(!o||o.getAttribute(t0)!==y||o.getAttribute(n0)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);var L=i9(),F=L.extra;F.attributes[oy]=e,hy(w,y).then(function(S){var _=u0(Y(Y({},L),{},{icons:{main:S,mask:l0()},prefix:y,iconName:T,extra:F,watchable:!0})),x=Ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(x,t.firstChild):t.appendChild(x),x.outerHTML=_.map(function(A){return wc(A)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function m9(t){return Promise.all([j1(t,"::before"),j1(t,"::after")])}function g9(t){return t.parentNode!==document.head&&!~s6.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(oy)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function U1(t){if(Wr)return new Promise(function(e,n){var r=Ba(t.querySelectorAll("*")).filter(g9).map(m9),i=c0.begin("searchPseudoElements");ek(),Promise.all(r).then(function(){i(),py(),e()}).catch(function(){i(),py(),n()})})}var y9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=U1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ne:r;Z.searchPseudoElements&&U1(i)}}},B1=!1,v9={mixout:function(){return{dom:{unwatch:function(){ek(),B1=!0}}}},hooks:function(){return{bootstrap:function(){V1(uy("mutationObserverCallbacks",{}))},noAuto:function(){e9()},watch:function(n){var r=n.observeMutationsRoot;B1?py():V1(uy("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},z1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},_9={mixout:function(){return{parse:{transform:function(n){return z1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=z1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(d)},p={transform:"translate(".concat(o/2*-1," -256)")},y={outer:a,inner:h,path:p};return{tag:"g",attributes:Y({},y.outer),children:[{tag:"g",attributes:Y({},y.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:Y(Y({},r.icon.attributes),y.path)}]}]}}}},ym={x:0,y:0,width:"100%",height:"100%"};function $1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function w9(t){return t.tag==="g"?t.children:[t]}var E9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Qf(i.split(" ").map(function(o){return o.trim()})):l0();return s.prefix||(s.prefix=ji()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,c=s.width,d=s.icon,h=o.width,p=o.icon,y=w6({transform:l,containerWidth:h,iconWidth:c}),I={tag:"rect",attributes:Y(Y({},ym),{},{fill:"white"})},b=d.children?{children:d.children.map($1)}:{},R={tag:"g",attributes:Y({},y.inner),children:[$1(Y({tag:d.tag,attributes:Y(Y({},d.attributes),y.path)},b))]},E={tag:"g",attributes:Y({},y.outer),children:[R]},w="mask-".concat(a||Wu()),T="clip-".concat(a||Wu()),N={tag:"mask",attributes:Y(Y({},ym),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,E]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:w9(p)},N]};return r.push(L,{tag:"rect",attributes:Y({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(w,")")},ym)}),{children:r,attributes:i}}}},I9={provides:function(e){var n=!1;Fi.matchMedia&&(n=Fi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:Y(Y({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=Y(Y({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:Y(Y({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:Y(Y({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Y(Y({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:Y(Y({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:Y(Y({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:Y(Y({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Y(Y({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},T9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},b9=[T6,u9,c9,d9,h9,y9,v9,_9,E9,I9,T9];M6(b9,{mixoutsTo:En});En.noAuto;En.config;En.library;En.dom;var my=En.parse;En.findIconDefinition;En.toHtml;var S9=En.icon;En.layer;En.text;En.counter;var nk={exports:{}},x9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",A9=x9,P9=A9;function rk(){}function ik(){}ik.resetWarningCache=rk;var R9=function(){function t(r,i,s,o,a,l){if(l!==P9){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ik,resetWarningCache:rk};return n.PropTypes=n,n};nk.exports=R9();var k9=nk.exports;const X=pT(k9);function q1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q1(Object(n),!0).forEach(function(r){Lo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Kh(t){"@babel/helpers - typeof";return Kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kh(t)}function Lo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function N9(t,e){if(t==null)return{};var n=C9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function gy(t){return D9(t)||O9(t)||V9(t)||L9()}function D9(t){if(Array.isArray(t))return yy(t)}function O9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function V9(t,e){if(t){if(typeof t=="string")return yy(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yy(t,e)}}function yy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function L9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M9(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,d=t.spinReverse,h=t.pulse,p=t.fixedWidth,y=t.inverse,I=t.border,b=t.listItem,R=t.flip,E=t.size,w=t.rotation,T=t.pull,N=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":h,"fa-fw":p,"fa-inverse":y,"fa-border":I,"fa-li":b,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},Lo(e,"fa-".concat(E),typeof E<"u"&&E!==null),Lo(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),Lo(e,"fa-pull-".concat(T),typeof T<"u"&&T!==null),Lo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(N).map(function(L){return N[L]?L:null}).filter(function(L){return L})}function F9(t){return t=t-0,t===t}function sk(t){return F9(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var j9=["style"];function U9(t){return t.charAt(0).toUpperCase()+t.slice(1)}function B9(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=sk(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[U9(i)]=s:e[i]=s,e},{})}function ok(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ok(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.attrs.className=d,delete e.attributes.class;break;case"style":l.attrs.style=B9(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[sk(c)]=d}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=N9(n,j9);return i.attrs.style=Kn(Kn({},i.attrs.style),o),t.apply(void 0,[e.tag,Kn(Kn({},i.attrs),a)].concat(gy(r)))}var ak=!1;try{ak=!0}catch{}function z9(){if(!ak&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function W1(t){if(t&&Kh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(my.icon)return my.icon(t);if(t===null)return null;if(t&&Kh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function vm(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Lo({},t,e):{}}var G1={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ve=ye.forwardRef(function(t,e){var n=Kn(Kn({},G1),t),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,d=W1(r),h=vm("classes",[].concat(gy(M9(n)),gy(o.split(" ")))),p=vm("transform",typeof n.transform=="string"?my.transform(n.transform):n.transform),y=vm("mask",W1(i)),I=S9(d,Kn(Kn(Kn(Kn({},h),p),y),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!I)return z9("Could not find icon",d),null;var b=I.abstract,R={ref:e};return Object.keys(n).forEach(function(E){G1.hasOwnProperty(E)||(R[E]=n[E])}),$9(b[0],R)});ve.displayName="FontAwesomeIcon";ve.propTypes={beat:X.bool,border:X.bool,beatFade:X.bool,bounce:X.bool,className:X.string,fade:X.bool,flash:X.bool,mask:X.oneOfType([X.object,X.array,X.string]),maskId:X.string,fixedWidth:X.bool,inverse:X.bool,flip:X.oneOf([!0,!1,"horizontal","vertical","both"]),icon:X.oneOfType([X.object,X.array,X.string]),listItem:X.bool,pull:X.oneOf(["right","left"]),pulse:X.bool,rotation:X.oneOf([0,90,180,270]),shake:X.bool,size:X.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:X.bool,spinPulse:X.bool,spinReverse:X.bool,symbol:X.oneOfType([X.bool,X.string]),title:X.string,titleId:X.string,transform:X.oneOfType([X.string,X.object]),swapOpacity:X.bool};var $9=ok.bind(null,ye.createElement);const H1="https://brighamdent.github.io/assets/longLogo-Dl9uTX86.svg";var q9={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},W9={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Jf={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},G9={prefix:"fas",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},H9={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},K9={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},Q9={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},Y9={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Gu={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},J9={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},za={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},X9={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]},h0={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function Z9(){const{currentUser:t,subscribed:e}=ln(),[n,r]=U.useState(!1),i=Gi(),s=Hi(),o=()=>{r(!n)};return U.useEffect(()=>{r(!1)},[i.pathname]),g.jsxs("div",{className:"fixed z-50 w-full",children:[g.jsxs("div",{className:" top-0 p-2 bg-white drop-shadow-sm h-24 lg:h-16 px-4 text-2xl mb-10 sm:z-30",children:[g.jsx("div",{className:"flex justify-between",children:g.jsxs("div",{className:"flex text-right items-center pr-3 lg:hidden m-2",children:[g.jsx("button",{className:"text-[40px] p-4",onClick:o,children:n?g.jsx(ve,{icon:X9}):g.jsx(ve,{icon:W9})}),g.jsx("img",{src:H1,className:"h-10 ml-2"})]})}),g.jsxs("div",{className:"hidden lg:flex justify-between items-center",children:[g.jsx("img",{src:H1,className:"h-12 cursor-pointer",onClick:()=>s("/")}),g.jsxs("div",{className:"flex justify-between w-[45%]",children:[g.jsx(be,{className:"hover:border-b border-gray-300",to:"/",children:"Inicio"}),e?g.jsx(be,{className:"hover:border-b border-gray-300",to:"dashboard",children:"Tus Clases"}):g.jsx(be,{className:"hover:border-b border-gray-300",to:"/pricing",children:"Costo"}),g.jsx(be,{className:"hover:border-b border-gray-300",to:"/about",children:"Quiénes Somos"})]}),t?g.jsx(be,{className:"hover:border-b border-gray-300 text-sm",to:"/account",children:"Tu Cuenta"}):g.jsx(be,{className:"hover:border-b border-gray-300 text-sm",to:"signup",children:"Iniciar Sesión/Registrarse"})]})]}),n&&g.jsxs("div",{className:" fixed w-[100vw] h-[calc(100vh-96px)] lg:h-[calc(100vh-48px)] text-2xl  text-left top-24 lg:top-12 lg:hidden",children:[g.jsxs("ul",{className:"p-4 bg-white z-20 sm:fixed left-0 sm:h-[100%] ",children:[g.jsx("li",{className:"p-2",children:g.jsx(be,{to:"/",children:"Inicio"})}),e?g.jsx("li",{className:"p-2",children:g.jsx(be,{to:"/dashboard",children:"Tus Clases"})}):g.jsx("li",{className:"p-2",children:g.jsx(be,{to:"/pricing",children:"Costo"})}),g.jsx("li",{className:"p-2",children:g.jsx(be,{to:"/about",children:"Quiénes Somos"})}),t?g.jsx("li",{className:"p-2",children:g.jsx(be,{to:"/account",children:"Cuenta"})}):g.jsx("li",{className:"p-2",children:g.jsx(be,{to:"/login",children:"Ingresa/Inscribirse"})})]}),g.jsx("div",{onClick:o,className:"fixed w-[100vw] h-full bg-black/50 z-10"})]})]})}function K1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Q1(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K1(Object(n),!0).forEach(function(r){lk(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qd(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Qd=function(e){return typeof e}:Qd=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qd(t)}function lk(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function uk(t,e){return eB(t)||tB(t,e)||nB(t,e)||rB()}function eB(t){if(Array.isArray(t))return t}function tB(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function nB(t,e){if(t){if(typeof t=="string")return Y1(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y1(t,e)}}function Y1(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cn=function(e,n,r){var i=!!r,s=ye.useRef(r);ye.useEffect(function(){s.current=r},[r]),ye.useEffect(function(){if(!i||!e)return function(){};var o=function(){s.current&&s.current.apply(s,arguments)};return e.on(n,o),function(){e.off(n,o)}},[i,n,e,s])},vy=function(e){var n=ye.useRef(e);return ye.useEffect(function(){n.current=e},[e]),n.current},Ea=function(e){return e!==null&&Qd(e)==="object"},iB=function(e){return Ea(e)&&typeof e.then=="function"},sB=function(e){return Ea(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},J1="[object Object]",oB=function t(e,n){if(!Ea(e)||!Ea(n))return e===n;var r=Array.isArray(e),i=Array.isArray(n);if(r!==i)return!1;var s=Object.prototype.toString.call(e)===J1,o=Object.prototype.toString.call(n)===J1;if(s!==o)return!1;if(!s&&!r)return e===n;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(var c={},d=0;d<a.length;d+=1)c[a[d]]=!0;for(var h=0;h<l.length;h+=1)c[l[h]]=!0;var p=Object.keys(c);if(p.length!==a.length)return!1;var y=e,I=n,b=function(E){return t(y[E],I[E])};return p.every(b)},ck=function(e,n,r){return Ea(e)?Object.keys(e).reduce(function(i,s){var o=!Ea(n)||!oB(e[s],n[s]);return r.includes(s)?(o&&console.warn("Unsupported prop change: options.".concat(s," is not a mutable property.")),i):o?Q1(Q1({},i||{}),{},lk({},s,e[s])):i},null):null},dk="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",X1=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dk;if(e===null||sB(e))return e;throw new Error(n)},aB=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:dk;if(iB(e))return{tag:"async",stripePromise:Promise.resolve(e).then(function(i){return X1(i,n)})};var r=X1(e,n);return r===null?{tag:"empty"}:{tag:"sync",stripe:r}},lB=function(e){!e||!e._registerWrapper||!e.registerAppInfo||(e._registerWrapper({name:"react-stripe-js",version:"2.7.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.7.0",url:"https://stripe.com/docs/stripe-js/react"}))},Xf=ye.createContext(null);Xf.displayName="ElementsContext";var hk=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},fk=function(e){var n=e.stripe,r=e.options,i=e.children,s=ye.useMemo(function(){return aB(n)},[n]),o=ye.useState(function(){return{stripe:s.tag==="sync"?s.stripe:null,elements:s.tag==="sync"?s.stripe.elements(r):null}}),a=uk(o,2),l=a[0],c=a[1];ye.useEffect(function(){var p=!0,y=function(b){c(function(R){return R.stripe?R:{stripe:b,elements:b.elements(r)}})};return s.tag==="async"&&!l.stripe?s.stripePromise.then(function(I){I&&p&&y(I)}):s.tag==="sync"&&!l.stripe&&y(s.stripe),function(){p=!1}},[s,l,r]);var d=vy(n);ye.useEffect(function(){d!==null&&d!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[d,n]);var h=vy(r);return ye.useEffect(function(){if(l.elements){var p=ck(r,h,["clientSecret","fonts"]);p&&l.elements.update(p)}},[r,h,l.elements]),ye.useEffect(function(){lB(l.stripe)},[l.stripe]),ye.createElement(Xf.Provider,{value:l},i)};fk.propTypes={stripe:X.any,options:X.object};var uB=function(e){var n=ye.useContext(Xf);return hk(n,e)},cB=function(){var e=uB("calls useElements()"),n=e.elements;return n};X.func.isRequired;var pk=ye.createContext(null);pk.displayName="CustomCheckoutSdkContext";var dB=function(e,n){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CustomCheckoutProvider> provider."));return e},hB=ye.createContext(null);hB.displayName="CustomCheckoutContext";X.any,X.shape({clientSecret:X.string.isRequired,elementsOptions:X.object}).isRequired;var _y=function(e){var n=ye.useContext(pk),r=ye.useContext(Xf);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?dB(n,e):hk(r,e)},fB=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},ht=function(e,n){var r="".concat(fB(e),"Element"),i=function(l){var c=l.id,d=l.className,h=l.options,p=h===void 0?{}:h,y=l.onBlur,I=l.onFocus,b=l.onReady,R=l.onChange,E=l.onEscape,w=l.onClick,T=l.onLoadError,N=l.onLoaderStart,L=l.onNetworksChange,F=l.onConfirm,S=l.onCancel,_=l.onShippingAddressChange,x=l.onShippingRateChange,A=_y("mounts <".concat(r,">")),k="elements"in A?A.elements:null,C="customCheckoutSdk"in A?A.customCheckoutSdk:null,P=ye.useState(null),Ft=uk(P,2),$e=Ft[0],es=Ft[1],pt=ye.useRef(null),K=ye.useRef(null);cn($e,"blur",y),cn($e,"focus",I),cn($e,"escape",E),cn($e,"click",w),cn($e,"loaderror",T),cn($e,"loaderstart",N),cn($e,"networkschange",L),cn($e,"confirm",F),cn($e,"cancel",S),cn($e,"shippingaddresschange",_),cn($e,"shippingratechange",x),cn($e,"change",R);var re;b&&(e==="expressCheckout"?re=b:re=function(){b($e)}),cn($e,"ready",re),ye.useLayoutEffect(function(){if(pt.current===null&&K.current!==null&&(k||C)){var de=null;C?de=C.createElement(e,p):k&&(de=k.create(e,p)),pt.current=de,es(de),de&&de.mount(K.current)}},[k,C,p]);var ie=vy(p);return ye.useEffect(function(){if(pt.current){var de=ck(p,ie,["paymentRequest"]);de&&pt.current.update(de)}},[p,ie]),ye.useLayoutEffect(function(){return function(){if(pt.current&&typeof pt.current.destroy=="function")try{pt.current.destroy(),pt.current=null}catch{}}},[]),ye.createElement("div",{id:c,className:d,ref:K})},s=function(l){_y("mounts <".concat(r,">"));var c=l.id,d=l.className;return ye.createElement("div",{id:c,className:d})},o=n?s:i;return o.propTypes={id:X.string,className:X.string,onChange:X.func,onBlur:X.func,onFocus:X.func,onReady:X.func,onEscape:X.func,onClick:X.func,onLoadError:X.func,onLoaderStart:X.func,onNetworksChange:X.func,onConfirm:X.func,onCancel:X.func,onShippingAddressChange:X.func,onShippingRateChange:X.func,options:X.object},o.displayName=r,o.__elementType=e,o},ft=typeof window>"u",pB=ye.createContext(null);pB.displayName="EmbeddedCheckoutProviderContext";var mB=function(){var e=_y("calls useStripe()"),n=e.stripe;return n};ht("auBankAccount",ft);ht("card",ft);var Z1=ht("cardNumber",ft),gB=ht("cardExpiry",ft),yB=ht("cardCvc",ft);ht("fpxBank",ft);ht("iban",ft);ht("idealBank",ft);ht("p24Bank",ft);ht("epsBank",ft);ht("payment",ft);ht("expressCheckout",ft);ht("paymentRequestButton",ft);ht("linkAuthentication",ft);ht("address",ft);ht("shippingAddress",ft);ht("paymentMethodMessaging",ft);ht("affirmMessage",ft);ht("afterpayClearpayMessage",ft);var mk="https://js.stripe.com/v3",vB=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,eT="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",_B=function(){for(var e=document.querySelectorAll('script[src^="'.concat(mk,'"]')),n=0;n<e.length;n++){var r=e[n];if(vB.test(r.src))return r}return null},tT=function(e){var n="",r=document.createElement("script");r.src="".concat(mk).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(r),r},wB=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"2.4.0",startTime:n})},wl=null,wd=null,Ed=null,EB=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},IB=function(e,n){return function(){window.Stripe?e(window.Stripe):n(new Error("Stripe.js not available"))}},TB=function(e){return wl!==null?wl:(wl=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(eT),window.Stripe){n(window.Stripe);return}try{var i=_B();if(i&&e)console.warn(eT);else if(!i)i=tT(e);else if(i&&Ed!==null&&wd!==null){var s;i.removeEventListener("load",Ed),i.removeEventListener("error",wd),(s=i.parentNode)===null||s===void 0||s.removeChild(i),i=tT(e)}Ed=IB(n,r),wd=EB(r),i.addEventListener("load",Ed),i.addEventListener("error",wd)}catch(o){r(o);return}}),wl.catch(function(n){return wl=null,Promise.reject(n)}))},bB=function(e,n,r){if(e===null)return null;var i=e.apply(void 0,n);return wB(i,r),i},El,gk=!1,yk=function(){return El||(El=TB(null).catch(function(e){return El=null,Promise.reject(e)}),El)};Promise.resolve().then(function(){return yk()}).catch(function(t){gk||console.warn(t)});var SB=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];gk=!0;var i=Date.now();return yk().then(function(s){return bB(s,n,i)})};function vk(t,e){return function(){return t.apply(e,arguments)}}const{toString:xB}=Object.prototype,{getPrototypeOf:f0}=Object,Zf=(t=>e=>{const n=xB.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),fr=t=>(t=t.toLowerCase(),e=>Zf(e)===t),ep=t=>e=>typeof e===t,{isArray:$a}=Array,Hu=ep("undefined");function AB(t){return t!==null&&!Hu(t)&&t.constructor!==null&&!Hu(t.constructor)&&Rn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const _k=fr("ArrayBuffer");function PB(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_k(t.buffer),e}const RB=ep("string"),Rn=ep("function"),wk=ep("number"),tp=t=>t!==null&&typeof t=="object",kB=t=>t===!0||t===!1,Yd=t=>{if(Zf(t)!=="object")return!1;const e=f0(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},CB=fr("Date"),NB=fr("File"),DB=fr("Blob"),OB=fr("FileList"),VB=t=>tp(t)&&Rn(t.pipe),LB=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Rn(t.append)&&((e=Zf(t))==="formdata"||e==="object"&&Rn(t.toString)&&t.toString()==="[object FormData]"))},MB=fr("URLSearchParams"),FB=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ec(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),$a(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function Ek(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Ik=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Tk=t=>!Hu(t)&&t!==Ik;function wy(){const{caseless:t}=Tk(this)&&this||{},e={},n=(r,i)=>{const s=t&&Ek(e,i)||i;Yd(e[s])&&Yd(r)?e[s]=wy(e[s],r):Yd(r)?e[s]=wy({},r):$a(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ec(arguments[r],n);return e}const jB=(t,e,n,{allOwnKeys:r}={})=>(Ec(e,(i,s)=>{n&&Rn(i)?t[s]=vk(i,n):t[s]=i},{allOwnKeys:r}),t),UB=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),BB=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},zB=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&f0(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},$B=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},qB=t=>{if(!t)return null;if($a(t))return t;let e=t.length;if(!wk(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},WB=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&f0(Uint8Array)),GB=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},HB=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},KB=fr("HTMLFormElement"),QB=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),nT=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),YB=fr("RegExp"),bk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ec(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},JB=t=>{bk(t,(e,n)=>{if(Rn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Rn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},XB=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return $a(t)?r(t):r(String(t).split(e)),n},ZB=()=>{},ez=(t,e)=>(t=+t,Number.isFinite(t)?t:e),_m="abcdefghijklmnopqrstuvwxyz",rT="0123456789",Sk={DIGIT:rT,ALPHA:_m,ALPHA_DIGIT:_m+_m.toUpperCase()+rT},tz=(t=16,e=Sk.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function nz(t){return!!(t&&Rn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const rz=t=>{const e=new Array(10),n=(r,i)=>{if(tp(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=$a(r)?[]:{};return Ec(r,(o,a)=>{const l=n(o,i+1);!Hu(l)&&(s[a]=l)}),e[i]=void 0,s}}return r};return n(t,0)},iz=fr("AsyncFunction"),sz=t=>t&&(tp(t)||Rn(t))&&Rn(t.then)&&Rn(t.catch),j={isArray:$a,isArrayBuffer:_k,isBuffer:AB,isFormData:LB,isArrayBufferView:PB,isString:RB,isNumber:wk,isBoolean:kB,isObject:tp,isPlainObject:Yd,isUndefined:Hu,isDate:CB,isFile:NB,isBlob:DB,isRegExp:YB,isFunction:Rn,isStream:VB,isURLSearchParams:MB,isTypedArray:WB,isFileList:OB,forEach:Ec,merge:wy,extend:jB,trim:FB,stripBOM:UB,inherits:BB,toFlatObject:zB,kindOf:Zf,kindOfTest:fr,endsWith:$B,toArray:qB,forEachEntry:GB,matchAll:HB,isHTMLForm:KB,hasOwnProperty:nT,hasOwnProp:nT,reduceDescriptors:bk,freezeMethods:JB,toObjectSet:XB,toCamelCase:QB,noop:ZB,toFiniteNumber:ez,findKey:Ek,global:Ik,isContextDefined:Tk,ALPHABET:Sk,generateString:tz,isSpecCompliantForm:nz,toJSONObject:rz,isAsyncFn:iz,isThenable:sz};function fe(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const xk=fe.prototype,Ak={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ak[t]={value:t}});Object.defineProperties(fe,Ak);Object.defineProperty(xk,"isAxiosError",{value:!0});fe.from=(t,e,n,r,i,s)=>{const o=Object.create(xk);return j.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),fe.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const oz=null;function Ey(t){return j.isPlainObject(t)||j.isArray(t)}function Pk(t){return j.endsWith(t,"[]")?t.slice(0,-2):t}function iT(t,e,n){return t?t.concat(e).map(function(i,s){return i=Pk(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function az(t){return j.isArray(t)&&!t.some(Ey)}const lz=j.toFlatObject(j,{},null,function(e){return/^is[A-Z]/.test(e)});function np(t,e,n){if(!j.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,R){return!j.isUndefined(R[b])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(e);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function c(I){if(I===null)return"";if(j.isDate(I))return I.toISOString();if(!l&&j.isBlob(I))throw new fe("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(I)||j.isTypedArray(I)?l&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function d(I,b,R){let E=I;if(I&&!R&&typeof I=="object"){if(j.endsWith(b,"{}"))b=r?b:b.slice(0,-2),I=JSON.stringify(I);else if(j.isArray(I)&&az(I)||(j.isFileList(I)||j.endsWith(b,"[]"))&&(E=j.toArray(I)))return b=Pk(b),E.forEach(function(T,N){!(j.isUndefined(T)||T===null)&&e.append(o===!0?iT([b],N,s):o===null?b:b+"[]",c(T))}),!1}return Ey(I)?!0:(e.append(iT(R,b,s),c(I)),!1)}const h=[],p=Object.assign(lz,{defaultVisitor:d,convertValue:c,isVisitable:Ey});function y(I,b){if(!j.isUndefined(I)){if(h.indexOf(I)!==-1)throw Error("Circular reference detected in "+b.join("."));h.push(I),j.forEach(I,function(E,w){(!(j.isUndefined(E)||E===null)&&i.call(e,E,j.isString(w)?w.trim():w,b,p))===!0&&y(E,b?b.concat(w):[w])}),h.pop()}}if(!j.isObject(t))throw new TypeError("data must be an object");return y(t),e}function sT(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function p0(t,e){this._pairs=[],t&&np(t,this,e)}const Rk=p0.prototype;Rk.append=function(e,n){this._pairs.push([e,n])};Rk.toString=function(e){const n=e?function(r){return e.call(this,r,sT)}:sT;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function uz(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kk(t,e,n){if(!e)return t;const r=n&&n.encode||uz,i=n&&n.serialize;let s;if(i?s=i(e,n):s=j.isURLSearchParams(e)?e.toString():new p0(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class oT{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){j.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ck={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cz=typeof URLSearchParams<"u"?URLSearchParams:p0,dz=typeof FormData<"u"?FormData:null,hz=typeof Blob<"u"?Blob:null,fz={isBrowser:!0,classes:{URLSearchParams:cz,FormData:dz,Blob:hz},protocols:["http","https","file","blob","url","data"]},Nk=typeof window<"u"&&typeof document<"u",pz=(t=>Nk&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),mz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",gz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nk,hasStandardBrowserEnv:pz,hasStandardBrowserWebWorkerEnv:mz},Symbol.toStringTag,{value:"Module"})),ir={...gz,...fz};function yz(t,e){return np(t,new ir.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return ir.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function vz(t){return j.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function _z(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Dk(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&j.isArray(i)?i.length:o,l?(j.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!j.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&j.isArray(i[o])&&(i[o]=_z(i[o])),!a)}if(j.isFormData(t)&&j.isFunction(t.entries)){const n={};return j.forEachEntry(t,(r,i)=>{e(vz(r),i,n,0)}),n}return null}function wz(t,e,n){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ic={transitional:Ck,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=j.isObject(e);if(s&&j.isHTMLForm(e)&&(e=new FormData(e)),j.isFormData(e))return i?JSON.stringify(Dk(e)):e;if(j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e))return e;if(j.isArrayBufferView(e))return e.buffer;if(j.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return yz(e,this.formSerializer).toString();if((a=j.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return np(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),wz(e)):e}],transformResponse:[function(e){const n=this.transitional||Ic.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&j.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?fe.from(a,fe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ir.classes.FormData,Blob:ir.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch"],t=>{Ic.headers[t]={}});const Ez=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Iz=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&Ez[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},aT=Symbol("internals");function Il(t){return t&&String(t).trim().toLowerCase()}function Jd(t){return t===!1||t==null?t:j.isArray(t)?t.map(Jd):String(t)}function Tz(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const bz=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function wm(t,e,n,r,i){if(j.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!j.isString(e)){if(j.isString(r))return e.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(e)}}function Sz(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function xz(t,e){const n=j.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class kn{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(a,l,c){const d=Il(l);if(!d)throw new Error("header name must be a non-empty string");const h=j.findKey(i,d);(!h||i[h]===void 0||c===!0||c===void 0&&i[h]!==!1)&&(i[h||l]=Jd(a))}const o=(a,l)=>j.forEach(a,(c,d)=>s(c,d,l));return j.isPlainObject(e)||e instanceof this.constructor?o(e,n):j.isString(e)&&(e=e.trim())&&!bz(e)?o(Iz(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=Il(e),e){const r=j.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Tz(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Il(e),e){const r=j.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||wm(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=Il(o),o){const a=j.findKey(r,o);a&&(!n||wm(r,r[a],a,n))&&(delete r[a],i=!0)}}return j.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||wm(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return j.forEach(this,(i,s)=>{const o=j.findKey(r,s);if(o){n[o]=Jd(i),delete n[s];return}const a=e?Sz(s):String(s).trim();a!==s&&delete n[s],n[a]=Jd(i),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[aT]=this[aT]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=Il(o);r[a]||(xz(i,o),r[a]=!0)}return j.isArray(e)?e.forEach(s):s(e),this}}kn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors(kn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});j.freezeMethods(kn);function Em(t,e){const n=this||Ic,r=e||n,i=kn.from(r.headers);let s=r.data;return j.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Ok(t){return!!(t&&t.__CANCEL__)}function Tc(t,e,n){fe.call(this,t??"canceled",fe.ERR_CANCELED,e,n),this.name="CanceledError"}j.inherits(Tc,fe,{__CANCEL__:!0});function Az(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new fe("Request failed with status code "+n.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Pz=ir.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];j.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),j.isString(r)&&o.push("path="+r),j.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Rz(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function kz(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Vk(t,e){return t&&!Rz(e)?kz(t,e):e}const Cz=ir.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=j.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Nz(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Dz(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),d=r[s];o||(o=c),n[i]=l,r[i]=c;let h=s,p=0;for(;h!==i;)p+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),c-o<e)return;const y=d&&c-d;return y?Math.round(p*1e3/y):void 0}}function lT(t,e){let n=0;const r=Dz(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a),c=s<=o;n=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:i};d[e?"download":"upload"]=!0,t(d)}}const Oz=typeof XMLHttpRequest<"u",Vz=Oz&&function(t){return new Promise(function(n,r){let i=t.data;const s=kn.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}let d;if(j.isFormData(i)){if(ir.hasStandardBrowserEnv||ir.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((d=s.getContentType())!==!1){const[b,...R]=d?d.split(";").map(E=>E.trim()).filter(Boolean):[];s.setContentType([b||"multipart/form-data",...R].join("; "))}}let h=new XMLHttpRequest;if(t.auth){const b=t.auth.username||"",R=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(b+":"+R))}const p=Vk(t.baseURL,t.url);h.open(t.method.toUpperCase(),kk(p,t.params,t.paramsSerializer),!0),h.timeout=t.timeout;function y(){if(!h)return;const b=kn.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:b,config:t,request:h};Az(function(T){n(T),c()},function(T){r(T),c()},E),h=null}if("onloadend"in h?h.onloadend=y:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(y)},h.onabort=function(){h&&(r(new fe("Request aborted",fe.ECONNABORTED,t,h)),h=null)},h.onerror=function(){r(new fe("Network Error",fe.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let R=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const E=t.transitional||Ck;t.timeoutErrorMessage&&(R=t.timeoutErrorMessage),r(new fe(R,E.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,t,h)),h=null},ir.hasStandardBrowserEnv&&(a&&j.isFunction(a)&&(a=a(t)),a||a!==!1&&Cz(p))){const b=t.xsrfHeaderName&&t.xsrfCookieName&&Pz.read(t.xsrfCookieName);b&&s.set(t.xsrfHeaderName,b)}i===void 0&&s.setContentType(null),"setRequestHeader"in h&&j.forEach(s.toJSON(),function(R,E){h.setRequestHeader(E,R)}),j.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),o&&o!=="json"&&(h.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&h.addEventListener("progress",lT(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",lT(t.onUploadProgress)),(t.cancelToken||t.signal)&&(l=b=>{h&&(r(!b||b.type?new Tc(null,t,h):b),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l)));const I=Nz(p);if(I&&ir.protocols.indexOf(I)===-1){r(new fe("Unsupported protocol "+I+":",fe.ERR_BAD_REQUEST,t));return}h.send(i||null)})},Iy={http:oz,xhr:Vz};j.forEach(Iy,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const uT=t=>`- ${t}`,Lz=t=>j.isFunction(t)||t===null||t===!1,Lk={getAdapter:t=>{t=j.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!Lz(n)&&(r=Iy[(o=String(n)).toLowerCase()],r===void 0))throw new fe(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(uT).join(`
`):" "+uT(s[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Iy};function Im(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Tc(null,t)}function cT(t){return Im(t),t.headers=kn.from(t.headers),t.data=Em.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Lk.getAdapter(t.adapter||Ic.adapter)(t).then(function(r){return Im(t),r.data=Em.call(t,t.transformResponse,r),r.headers=kn.from(r.headers),r},function(r){return Ok(r)||(Im(t),r&&r.response&&(r.response.data=Em.call(t,t.transformResponse,r.response),r.response.headers=kn.from(r.response.headers))),Promise.reject(r)})}const dT=t=>t instanceof kn?{...t}:t;function Ia(t,e){e=e||{};const n={};function r(c,d,h){return j.isPlainObject(c)&&j.isPlainObject(d)?j.merge.call({caseless:h},c,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function i(c,d,h){if(j.isUndefined(d)){if(!j.isUndefined(c))return r(void 0,c,h)}else return r(c,d,h)}function s(c,d){if(!j.isUndefined(d))return r(void 0,d)}function o(c,d){if(j.isUndefined(d)){if(!j.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,h){if(h in e)return r(c,d);if(h in t)return r(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,d)=>i(dT(c),dT(d),!0)};return j.forEach(Object.keys(Object.assign({},t,e)),function(d){const h=l[d]||i,p=h(t[d],e[d],d);j.isUndefined(p)&&h!==a||(n[d]=p)}),n}const Mk="1.6.8",m0={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{m0[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const hT={};m0.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Mk+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new fe(i(o," has been removed"+(n?" in "+n:"")),fe.ERR_DEPRECATED);return n&&!hT[o]&&(hT[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Mz(t,e,n){if(typeof t!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new fe("option "+s+" must be "+l,fe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new fe("Unknown option "+s,fe.ERR_BAD_OPTION)}}const Ty={assertOptions:Mz,validators:m0},ni=Ty.validators;class Ps{constructor(e){this.defaults=e,this.interceptors={request:new oT,response:new oT}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ia(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Ty.assertOptions(r,{silentJSONParsing:ni.transitional(ni.boolean),forcedJSONParsing:ni.transitional(ni.boolean),clarifyTimeoutError:ni.transitional(ni.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:Ty.assertOptions(i,{encode:ni.function,serialize:ni.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&j.merge(s.common,s[n.method]);s&&j.forEach(["delete","get","head","post","put","patch","common"],I=>{delete s[I]}),n.headers=kn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(l=l&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const c=[];this.interceptors.response.forEach(function(b){c.push(b.fulfilled,b.rejected)});let d,h=0,p;if(!l){const I=[cT.bind(this),void 0];for(I.unshift.apply(I,a),I.push.apply(I,c),p=I.length,d=Promise.resolve(n);h<p;)d=d.then(I[h++],I[h++]);return d}p=a.length;let y=n;for(h=0;h<p;){const I=a[h++],b=a[h++];try{y=I(y)}catch(R){b.call(this,R);break}}try{d=cT.call(this,y)}catch(I){return Promise.reject(I)}for(h=0,p=c.length;h<p;)d=d.then(c[h++],c[h++]);return d}getUri(e){e=Ia(this.defaults,e);const n=Vk(e.baseURL,e.url);return kk(n,e.params,e.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(e){Ps.prototype[e]=function(n,r){return this.request(Ia(r||{},{method:e,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Ia(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ps.prototype[e]=n(),Ps.prototype[e+"Form"]=n(!0)});class g0{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new Tc(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new g0(function(i){e=i}),cancel:e}}}function Fz(t){return function(n){return t.apply(null,n)}}function jz(t){return j.isObject(t)&&t.isAxiosError===!0}const by={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(by).forEach(([t,e])=>{by[e]=t});function Fk(t){const e=new Ps(t),n=vk(Ps.prototype.request,e);return j.extend(n,Ps.prototype,e,{allOwnKeys:!0}),j.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Fk(Ia(t,i))},n}const Le=Fk(Ic);Le.Axios=Ps;Le.CanceledError=Tc;Le.CancelToken=g0;Le.isCancel=Ok;Le.VERSION=Mk;Le.toFormData=np;Le.AxiosError=fe;Le.Cancel=Le.CanceledError;Le.all=function(e){return Promise.all(e)};Le.spread=Fz;Le.isAxiosError=jz;Le.mergeConfig=Ia;Le.AxiosHeaders=kn;Le.formToJSON=t=>Dk(j.isHTMLForm(t)?new FormData(t):t);Le.getAdapter=Lk.getAdapter;Le.HttpStatusCode=by;Le.default=Le;function Uz({plan:t,setSuccess:e,setLoading:n}){const{currentUser:r,getUserData:i}=ln(),[s,o]=U.useState("");if(!r||!r.email)return;const a=Pn.firestore().collection("Users").doc(r.email),l=mB(),c=cB(),d={showIcon:!0,style:{base:{color:"#000",fontSize:"25px",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',"::placeholder":{color:"#aab7c4"},iconColor:"#666EE8"},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},h=async p=>{if(p.preventDefault(),n(!0),o(""),!l||!c)return;const y=c.getElement(Z1),I=p.target.firstName.value,b=p.target.lastName.value,R=`${I} ${b}`,{error:E,paymentMethod:w}=await l.createPaymentMethod({type:"card",card:y});if(E)console.log(E.message),o("There was an error processing your payment");else try{const{id:T}=w,N=await Le.post("https://english-site-server.onrender.com/payment",{plan:t,id:T,name:R,email:r.email});if(N.data.success){console.log("Successful payment");const L=N.data.customerId,F=N.data.subscriptionId,S=N.data.subscriptionItemId,_=N.data.subscriptionType;console.log(N),e(!0),a.update({subscribed:!0,customerId:L,subscriptionId:F,subscriptionItemId:S,subscriptionType:_}).then(()=>{console.log("Subscription updated successfully"),i()}).catch(x=>{console.error("Error updating subscription: ",x)})}}catch(T){console.log("Error",T),o("There was an error processing your payment")}n(!1)};return g.jsxs("div",{children:[s&&g.jsxs("div",{className:"flex items-center bg-red-200 text-red-500 border border-red-500 w-[325px] md:w-[466px] rounded-md p-4 h-16 mb-2 md:mb-4",children:[g.jsx(ve,{className:"mr-4",icon:Jf}),g.jsx("h1",{children:s}),g.jsx(ve,{className:"ml-4 lg:ml-[15px]",onClick:()=>o(""),icon:Gu})]}),g.jsxs("form",{className:"flex flex-col items-center",onSubmit:h,children:[g.jsxs("fieldset",{className:"md:mb-4 flex flex-col items-center md:flex-row",children:[g.jsxs("label",{className:"block text-left text-xl mb-2 md:mb-0",children:[g.jsx("h1",{className:"ml-2 mb-2",children:"Nombre"}),g.jsx("input",{className:"text-[25px] border-2 border-black/25 rounded-[10px] p-3 w-[325px] md:w-[225px]",type:"text",name:"firstName",required:!0})]}),g.jsxs("label",{className:"block text-xl text-left md:ml-4 mb-2 md:mb-0",children:[g.jsx("h1",{className:"ml-2 mb-2",children:"Apellido"}),g.jsx("input",{className:" text-[25px] border-2 border-black/25 rounded-[10px] pl-2 p-3 w-[325px] md:w-[225px]",type:"text",name:"lastName",required:!0})]})]}),g.jsx("fieldset",{children:g.jsxs("label",{className:"block text-left mb-4 w-[325px] md:w-[466px]",children:[g.jsx("h1",{className:"ml-2 mb-2 text-xl",children:"Numero de Tarjeta"}),g.jsx("div",{className:"bg-white flex items-center border-2 pl-2 border-black/25 rounded-[10px]",children:g.jsx(Z1,{options:d})})]})}),g.jsxs("fieldset",{className:"mb-4 flex flex-col md:flex-row items-center",children:[g.jsxs("label",{className:"block text-left mb-2",children:[g.jsx("h1",{className:" ml-2 md:ml-0 mb-2 text-xl",children:"Fecha de Vencimiento"}),g.jsx("div",{className:"bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]",children:g.jsx(gB,{options:d})})]}),g.jsxs("label",{className:"block text-left md:ml-4 mb-2",children:[g.jsx("h1",{className:"ml-2 mb-2 text-xl",children:"CVC"}),g.jsx("div",{className:"bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]",children:g.jsx(yB,{options:d})})]})]}),g.jsx("button",{className:"w-[325px] md:w-[466px] rounded-[10px] bg-blue-200 hover:bg-blue-300 text-2xl p-3",type:"submit",disabled:!l,children:"Inciar Subscripcion"})]})]})}const Bz="pk_test_51OYENxA1KBKXgU2EmyAVe6BWuxbVNQyTx8YWk3YJpWziUdSsU9P5fEQxyfJ7IyHfOxCqjmuZ9SXKDvRcBEVbW0aw00QbswD3Ci",zz=SB(Bz);function $z({plan:t,success:e,setSuccess:n,loading:r,setLoading:i}){return g.jsx(fk,{options:{locale:"es"},stripe:zz,children:g.jsx(Uz,{plan:t,success:e,setSuccess:n,loading:r,setLoading:i})})}function qz({schedule:t,setSchedule:e,pricingStructure:n}){const r=i=>{i.preventDefault(),e(i.target.textContent)};return console.log(n),U.useEffect(()=>{console.log(t)},[t]),g.jsxs("div",{className:"md:w-[70%]flex flex-col items-center pl-4",children:[g.jsx("h1",{className:"hidden md:block text-3xl text-center mb-6",children:"Horarios Disponibles"}),n&&n.plan!=3?g.jsxs("ul",{className:"flex flex-col p-6",children:[g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes y Miercoles 6 PM (Principiante)"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes y Miercoles 7 PM (Intermedio)"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes y Miercoles 8 PM (Avanzado)"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 9 AM / Domingo 6 PM (Avanzado)"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 10 AM / y Domingo 7 PM (Principiante)"}),g.jsx("li",{onClick:r,className:"p-2 pb-4  text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 11 AM / y Domingo 8 PM (Intermedio)"})]}):g.jsxs("ul",{className:"flex flex-col p-6",children:[g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Lunes 5 PM"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Miercoles 5 PM"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Jueves 6 PM"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Jueves 7 PM"}),g.jsx("li",{onClick:r,className:"p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 8 AM"}),g.jsx("li",{onClick:r,className:"p-2 pb-4  text-xl hover:bg-gray-200 cursor-pointer",children:"Sabado 12 PM"})]})]})}function Wz(){var p;const[t,e]=U.useState(!1),[n,r]=U.useState(!1),[i,s]=U.useState(""),{currentUser:o}=ln(),l=(p=Gi().state)==null?void 0:p.data,c=Hi();if(!o||!o.email)return;const d=Pn.firestore().collection("Users").doc(o.email);U.useEffect(()=>{t==!0&&d.update({schedule:i})},[t]);const h=()=>{i?s(""):c("/pricing")};return g.jsxs("div",{className:"relative",children:[n&&g.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:g.jsx(ve,{className:"fixed top-1/2 text-6xl",icon:za,spinPulse:!0})}),g.jsx("div",{children:t?g.jsxs("div",{className:"flex flex-col",children:[g.jsx("h1",{className:"text-2xl",children:"Felicidades, ya eres parte de English Direct! Nos vemos en tu primera clase."}),g.jsx(be,{to:"/dashboard",className:" text-center rounded-lg bg-blue-200 text-3xl p-5 m-10",children:"EMPIEZA YA!"})]}):g.jsxs("div",{className:"flex flex-col md:flex-row justify-around items-center md:bg-white p-4 rounded-lg",children:[g.jsx(ve,{className:" absolute text-3xl top-4 left-4 p-2 rounded-2xl hover:bg-gray-200",onClick:h,icon:K9}),g.jsxs("div",{className:"flex flex-col justify-between items-center  md:h-[450px] md:w-[300px] text-center md:p-8 md:border-r border-gray-300",children:[g.jsx("h2",{className:"text-3xl",children:l.name}),g.jsx("h1",{className:"text-6xl",children:l.price}),g.jsxs("div",{className:"hidden md:block",children:[g.jsx("p",{children:l.classes}),l.bonus&&g.jsx("p",{children:l.bonus})]})]}),i?g.jsxs("div",{className:"md:w-[70%]flex flex-col items-center pl-4",children:[g.jsx("h1",{className:"hidden md:block text-3xl text-center mb-6",children:"Finaliza tu inscripcion!"}),g.jsx($z,{plan:l.plan,success:t,setSuccess:e,loading:n,setLoading:r})]}):g.jsx(qz,{schedule:i,setSchedule:s,pricingStructure:l})]})})]})}function Gz(){const{signup:t,createUserDoc:e}=ln(),[n,r]=U.useState(""),[i,s]=U.useState(!1),o=Hi(),a=async l=>{l.preventDefault(),s(!0);const c=l.target.email.value,d=l.target.password.value,h=l.target.passwordConfirm.value;if(d!=h)return s(!1),r("Passwords do not match");try{r(""),t(c,d),e(c),o("/pricing")}catch{r("Failed to create account"),s(!1)}s(!1)};return g.jsxs("div",{children:[i&&g.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:g.jsx(ve,{className:"fixed top-1/2 text-6xl",icon:za,spinPulse:!0})}),g.jsxs("div",{className:"flex flex-col items-center  pt-12 pb-2 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[g.jsxs("div",{className:"mb-8",children:[g.jsx("h2",{className:"text-center mb-14 text-4xl",children:"Registrarse"}),n&&g.jsxs("div",{className:"text-lg flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-4",children:[g.jsx(ve,{className:"mr-4",icon:Jf}),g.jsx("h1",{children:n}),g.jsx(ve,{className:"ml-6 lg:ml-[100px]",onClick:()=>r(""),icon:Gu})]}),g.jsxs("form",{onSubmit:a,children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Correo Electronico"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",required:!0})]})}),g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"password",required:!0})]})}),g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Confirmar Contraseña"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"passwordConfirm",required:!0})]})})]}),g.jsx("button",{disabled:i,className:"w-full bg-blue-200 hover:bg-blue-300 rounded-lg h-14",children:"Registrarse"})]})]}),g.jsxs("div",{className:"mb-2 text-xl",children:["¿Ya tienes cuenta?",g.jsx(be,{className:"text-blue-600 hover:border-b border-blue-600/20 ",to:"/login",children:"Login"})]})]})]})}function Hz(){return g.jsx("div",{children:g.jsx(Gz,{})})}function Kz(){const{login:t}=ln(),[e,n]=U.useState(""),[r,i]=U.useState(!1),s=Hi(),o=async a=>{a.preventDefault(),i(!0);const l=a.target.email.value,c=a.target.password.value;try{n(""),t(l,c),s("/account")}catch{n("El nombre de usuario y la contraseña no coinciden.")}i(!1)};return g.jsxs("div",{children:[r&&g.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:g.jsx(ve,{className:"fixed top-1/2 text-6xl",icon:za,spinPulse:!0})}),g.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[g.jsxs("div",{className:"mb-8",children:[g.jsx("h2",{className:"text-center mb-14 text-4xl ",children:"Iniciar Sesión"}),e&&g.jsxs("div",{className:"text-sm sm:text-lg flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-4 max-w-[330px] sm:max-w-[400px]",children:[g.jsx(ve,{className:"mr-4",icon:Jf}),g.jsx("h1",{children:e}),g.jsx(ve,{className:"ml-6 lg:ml-[10px]",onClick:()=>n(""),icon:Gu})]}),g.jsxs("form",{onSubmit:o,children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Correo Electronico"}),g.jsx("input",{className:" border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",required:!0})]})}),g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"password",required:!0})]})})]}),g.jsx("button",{disabled:r,className:"w-full bg-blue-200 hover:bg-blue-300 rounded-lg h-14",children:"Iniciar Sesión"})]})]}),g.jsxs("div",{className:"mb-2 text-xl",children:[g.jsx("strong",{children:"¿No Tienes Cuenta? "}),g.jsx(be,{className:"text-blue-600 hover:border-b border-blue-600/20",to:"/signup",children:"Registrarse"})]}),g.jsx("div",{className:"text-lg text-blue-600 hover:border-b border-blue-600/20",children:g.jsx(be,{to:"/forgot-password",children:"¿Olvidaste tu contraseña?"})})]})]})}var Qz={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function Yz(){const[t,e]=U.useState(""),{currentUser:n,subscribed:r,logout:i,data:s}=ln(),o=Hi(),a=async()=>{e("");try{i(),o("/login")}catch{e("Failed to log out")}};return g.jsxs("div",{className:"fixed z-0 top-24 text-2xl md:text-3xl lg:bg-white lg:rounded-2xl lg:p-6",children:[g.jsxs("div",{className:"bg-blue-200 max-w-[640px] lg:rounded-2xl rounded-bl-2xl rounded-br-2xl mb-5 p-6 pl-10 w-[100vw] p-5",children:[g.jsx("h1",{className:"text-lg md:text-xl border-b border-black/30 mb-4",children:"Tu Cuenta"}),t&&g.jsx("h1",{children:t}),n&&g.jsx("h1",{className:"mb-4",children:n.email}),r?g.jsxs("div",{className:"flex items-center",children:[g.jsx(ve,{icon:h0}),g.jsx("h1",{className:"text-xl md:text-2xl pl-5",children:s&&s.subscriptionType})]}):g.jsx("div",{className:"text-blue-600 text-lg",children:g.jsx(be,{to:"/pricing",children:"Hazte estudiante hoy"})})]}),g.jsxs("div",{className:"p-2 lg:p-8",children:[g.jsx(be,{to:"/update-profile",children:g.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 p-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(ve,{icon:Qz}),g.jsx("h1",{className:"pl-5",children:"Actualizar Correo"})]}),g.jsx("h1",{className:"text-3xl",children:">"})]})}),g.jsx(be,{to:"/change-password",children:g.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300  p-4",children:[g.jsxs("div",{className:"flex items-center ",children:[g.jsx(ve,{icon:H9}),g.jsx("h1",{className:"pl-5",children:"Cambiar Contraseña"})]}),g.jsx("h1",{className:"text-3xl",children:">"})]})}),r&&g.jsx(be,{to:"/manage-subscription",children:g.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 p-4",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(ve,{icon:Q9}),g.jsx("h1",{className:"pl-5",children:"Administrar Subscripción"})]}),g.jsx("h1",{className:"text-3xl",children:">"})]})}),g.jsxs("div",{onClick:a,className:"flex justify-between items-center p-4 hover:cursor-pointer",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx(ve,{icon:q9}),g.jsx("h1",{className:"pl-5",children:"Cerrar Sesión"})]}),g.jsx("h1",{className:"text-3xl",children:"x"})]})]})]})}function mo({children:t}){const{currentUser:e,loading:n}=ln();if(n==!1)return e?t:g.jsx(kD,{to:"/signup"})}function Jz(){const{resetPassword:t}=ln(),[e,n]=U.useState(""),[r,i]=U.useState(!1),[s,o]=U.useState(""),a=async l=>{l.preventDefault(),o("");const c=l.target.email.value;try{n(""),i(!0),t(c),o("Email sent, check your inbox to reset password.")}catch{n("Failed to reset password")}i(!1)};return g.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[g.jsxs("div",{className:"mb-8",children:[g.jsx("h2",{className:"text-center mb-14 text-3xl",children:"Restablecer Contraseña"}),e&&g.jsx("h1",{children:e}),s&&g.jsx("h1",{children:s}),g.jsxs("form",{onSubmit:a,children:[g.jsx("fieldset",{className:"mb-6 flex flex-col",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Correo Electronico"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",required:!0})]})}),g.jsx("button",{disabled:r,className:"w-full bg-blue-200 rounded-lg h-14",children:"Restablecer Contraseña"})]})]}),g.jsxs("div",{className:"mb-2 text-xl",children:[g.jsx("strong",{children:"¿No Tienes Cuenta? "}),g.jsx(be,{className:"text-blue-600 ",to:"/signup",children:"Registrarse"})]})]})}function Xz(){const{currentUser:t,logout:e,updateEmail:n}=ln(),[r,i]=U.useState(""),[s,o]=U.useState(!1),[a,l]=U.useState(""),c=async d=>{d.preventDefault(),o(!0),i(""),l("");const h=d.target.email.value;if(t&&h!=t.email)try{n(h),l("Por favor dirigete al inbox para verificar tu nuevo correo y completar la actualizacion")}catch{i("Failed to update email"),console.log("Error",r)}o(!1)};return g.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[s&&g.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:g.jsx(ve,{className:"fixed top-1/2 text-6xl",icon:za,spinPulse:!0})}),a?g.jsxs("div",{children:[g.jsx("h1",{className:"text-center text-lg mb-6",children:a}),g.jsx(be,{className:"w-full",to:"/login",children:g.jsx("button",{onClick:async()=>await e(),className:"w-full bg-blue-200 rounded-lg h-14",children:"Iniciar Sesion"})})]}):g.jsxs("div",{children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-center mb-14 text-4xl ",children:"Actualizar Correo"}),a&&g.jsx("h1",{children:a}),r&&g.jsx("h1",{children:r}),g.jsxs("form",{onSubmit:c,children:[g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Email"}),t&&t.email&&g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"email",name:"email",defaultValue:t.email})]})}),g.jsxs("div",{className:"flex justify-between",children:[g.jsx(be,{className:"w-[48%]",to:"/account",children:g.jsx("button",{className:"w-full bg-blue-200 rounded-lg h-14",children:"Cancelar"})}),g.jsx("button",{className:"w-[48%] bg-blue-200 rounded-lg h-14",disabled:s,children:"Actualizar"})]})]})]}),g.jsx("div",{})]})]})}function Zz(){const{data:t}=ln();return g.jsxs("div",{className:"bg-white rounded-xl p-10 flex flex-col items-center",children:[g.jsx("h1",{className:"text-3xl mb-4 border-b border-gray-300 p-2",children:"Tus Clases"}),g.jsxs("div",{className:"flex items-center text-2xl mb-4",children:[g.jsx(ve,{icon:h0}),t&&g.jsx("h1",{className:"text-xl md:text-2xl pl-8",children:t.subscriptionType})]}),t&&g.jsx("h3",{className:"mb-4",children:t.schedule}),g.jsx("a",{href:"https://us06web.zoom.us/j/88265664418?pwd=Y1VQY2ZuVHVnMVNQSng5eUw3N1FUUT09",target:"_blank",rel:"noopener noreferrer",children:g.jsx("button",{className:"w-full bg-blue-200 hover:bg-blue-300 rounded-lg text-xl h-14 p-4",children:"Entrar la Clase"})})]})}function fT(t){const e=new Date(t*1e3),n=e.getMonth()+1,r=e.getDate(),i=e.getFullYear();return`${r}/${n}/${i}`}const e8=()=>{const{currentUser:t,subscriptionId:e,data:n,getDataEffect:r,setGetDataEffect:i}=ln(),[s,o]=U.useState("");if(!t||!t.email)return;const a=Pn.firestore().collection("Users").doc(t.email),[l,c]=U.useState(),[d,h]=U.useState(!1),[p,y]=U.useState(""),[I,b]=U.useState(!1),R=async()=>{o(""),y(""),b(!0),h(!1);try{const L=await Le.post("http://localhost:4000/cancel-subscription",{subscriptionId:e}),F=L.data.cancelAt;console.log(F),L.data&&(console.log(L.data.message),a.update({cancelAt:F})),o("Subscripcion se cancelo con exito")}catch{console.log(e),console.log("Error while deleting"),y("Occurio un error, no se pudo cancelar")}b(!1),i(!r)},E=async()=>{o(""),y(""),b(!0),h(!1);try{await Le.post("https://english-site-server.onrender.com/resume-subscription",{subscriptionId:e}),a.update({cancelAt:null})}catch(L){console.log(L),y("Ocurrio un error, no se pudo reanudar")}o("Subscripcion se reunudo con exito"),b(!1),i(!r)},w=async()=>{try{const L=await Le.post("https://english-site-server.onrender.com/retrieve-data",{subscriptionId:e});c(L.data.subscription)}catch(L){console.log(L)}},T=async L=>{o(""),y(""),b(!0);try{const S=(await Le.post("https://english-site-server.onrender.com/update-subscription",{subscriptionId:e,subscriptionItemId:n?n.subscriptionItemId:"",plan:L})).data.subscriptionType;a.update({subscriptionType:S}),console.log("Subscription was changed successfully"),o(`Subscripcion se actualizo a ${S} con exito`)}catch(F){console.log(F),y("There was an error while updating subscription")}h(!1),b(!1)},N=()=>{h(!d)};return U.useEffect(()=>{w()},[e]),g.jsxs("div",{className:"p-4 sm:bg-white rounded-lg mb-12",children:[I&&g.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:g.jsx(ve,{className:"fixed top-1/2 text-6xl",icon:za,spinPulse:!0})}),g.jsxs("div",{className:"flex flex-col items-center",children:[s&&g.jsxs("div",{className:"flex items-center bg-green-200 text-green-500 border border-green-500 w-full rounded-md p-4 h-16 mb-5",children:[g.jsx(ve,{className:"mr-4",icon:G9}),g.jsx("h1",{children:s}),g.jsx(ve,{className:"ml-4 lg:ml-[600px]",onClick:()=>o(""),icon:Gu})]}),p&&g.jsxs("div",{className:"flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-5",children:[g.jsx(ve,{className:"mr-4",icon:Jf}),g.jsx("h1",{children:p}),g.jsx(ve,{className:"ml-4 lg:ml-[600px]",onClick:()=>y(""),icon:Gu})]}),g.jsx("h1",{className:"text-[23px] border-b border-gray-300 mb-4 text-center",children:"Administrar Subscripcion"}),n&&g.jsxs("div",{className:"flex text-[20px]",children:[g.jsx(ve,{icon:h0}),g.jsx("h1",{className:"ml-4",children:n.subscriptionType})]}),n&&!n.cancelAt&&l&&g.jsxs("h1",{className:"text-sm mb-4",children:["Tu subscripcion se renovara el"," ",fT(l.current_period_end)]}),n&&n.cancelAt&&g.jsxs("h1",{className:"text-sm mb-4",children:["Tu subscripcion se cancelara el ",fT(n.cancelAt)]}),g.jsxs("div",{className:" sm:bg-gray-100/50  w-full rounded-lg lg:hidden",children:[n&&!n.cancelAt&&g.jsxs("div",{className:"flex justify-between w-full p-4",onClick:N,children:[g.jsx("h1",{children:"Cambiar Plan"}),d?g.jsx(ve,{icon:J9}):g.jsx(ve,{icon:Y9})]}),d&&g.jsx(ry,{handleChangeSubscription:T,manageSubscriptionPage:!0})]}),g.jsx("div",{className:"hidden bg-gray-100/50 lg:block rounded-lg p-2",children:g.jsx(ry,{handleChangeSubscription:T,manageSubscriptionPage:!0})}),n&&!n.cancelAt&&g.jsx("button",{className:"p-2 bg-red-400 rounded-lg h-10 m-4",onClick:R,children:"Cancel Subscription"}),n&&n.cancelAt&&g.jsx("button",{className:"p-2 bg-blue-200 hover:bg-blue-300 rounded-lg h-10 m-4",onClick:E,children:"Reanudar Subscripcion"})]})]})};function t8(){const{login:t,currentUser:e,updatePassword:n}=ln(),[r,i]=U.useState(""),[s,o]=U.useState(!1),a=Hi(),l=async c=>{if(c.preventDefault(),!e||!e.email)return;const d=e.email,h=c.target.password.value,p=c.target.passwordNew.value,y=c.target.confirmPassword.value;if(p!=y)return i("Passwords do not match");try{i(""),o(!0),t(d,h),n(p),a("/account")}catch{i("Failed to log in")}o(!1)};return g.jsxs("div",{className:"flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]",children:[s&&g.jsx("div",{className:"fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center",children:g.jsx(ve,{className:"fixed top-1/2 text-6xl",icon:za,spinPulse:!0})}),g.jsxs("div",{className:"mb-8",children:[g.jsx("h2",{className:"text-center mb-14 text-4xl ",children:"Cambiar Contraseña"}),r&&g.jsx("h1",{children:r}),g.jsxs("form",{onSubmit:l,children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{className:"block text-left",children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña Actual"}),g.jsx("input",{className:" border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"password",required:!0})]})}),g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Contraseña Nueva"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"passwordNew",required:!0})]})}),g.jsx("fieldset",{className:"mb-6",children:g.jsxs("label",{children:[g.jsx("h1",{className:"mb-2 text-xl",children:"Confirmar Contraseña Nueva"}),g.jsx("input",{className:"border-2 border-black/25 rounded-[10px] h-14 p-6",type:"password",name:"confirmPassword",required:!0})]})})]}),g.jsx("button",{disabled:s,className:"w-full bg-blue-200 rounded-lg h-14",children:"Cambiar Contraseña"})]})]}),g.jsx("div",{className:"text-lg text-blue-600",children:g.jsx(be,{to:"/forgot-password",children:"¿Olvidaste tu contraseña?"})})]})}function n8(){return g.jsx(g.Fragment,{children:g.jsxs(zU,{children:[g.jsx(Z9,{}),g.jsx("div",{className:" pt-28 flex justify-center align-center ",children:g.jsxs(ND,{children:[g.jsx(dn,{path:"/",element:g.jsx($U,{})}),g.jsx(dn,{path:"/pricing",element:g.jsx(qU,{})}),g.jsx(dn,{path:"/about",element:g.jsx(GU,{})}),g.jsx(dn,{path:"/payment",element:g.jsx(mo,{children:g.jsx(Wz,{})})}),g.jsx(dn,{path:"/signup",element:g.jsx(Hz,{})}),g.jsx(dn,{path:"/login",element:g.jsx(Kz,{})}),g.jsx(dn,{path:"/account",element:g.jsx(mo,{children:g.jsx(Yz,{})})}),g.jsx(dn,{path:"/update-profile",element:g.jsx(mo,{children:g.jsx(Xz,{})})}),g.jsx(dn,{path:"/forgot-password",element:g.jsx(Jz,{})}),g.jsx(dn,{path:"/dashboard",element:g.jsx(mo,{children:g.jsx(Zz,{})})}),g.jsx(dn,{path:"/manage-subscription",element:g.jsx(mo,{children:g.jsx(e8,{})})}),g.jsx(dn,{path:"/change-password",element:g.jsx(mo,{children:g.jsx(t8,{})})})]})})]})})}Tm.createRoot(document.getElementById("root")).render(g.jsx(ye.StrictMode,{children:g.jsx(jD,{children:g.jsx(n8,{})})}));
