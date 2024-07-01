var cy=Object.defineProperty;var fy=(t,e,n)=>e in t?cy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Dt=(t,e,n)=>(fy(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ts(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rv={exports:{}},_u={},ov={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),dy=Symbol.for("react.portal"),hy=Symbol.for("react.fragment"),py=Symbol.for("react.strict_mode"),my=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),vy=Symbol.for("react.context"),_y=Symbol.for("react.forward_ref"),xy=Symbol.for("react.suspense"),yy=Symbol.for("react.memo"),Sy=Symbol.for("react.lazy"),op=Symbol.iterator;function Ey(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var sv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},av=Object.assign,lv={};function ns(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||sv}ns.prototype.isReactComponent={};ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uv(){}uv.prototype=ns.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=lv,this.updater=n||sv}var Sd=yd.prototype=new uv;Sd.constructor=yd;av(Sd,ns.prototype);Sd.isPureReactComponent=!0;var sp=Array.isArray,cv=Object.prototype.hasOwnProperty,Ed={current:null},fv={key:!0,ref:!0,__self:!0,__source:!0};function dv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)cv.call(e,i)&&!fv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:t,key:o,ref:s,props:r,_owner:Ed.current}}function My(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function Ty(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function Zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ty(""+t.key):e.toString(36)}function yl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xa:case dy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Zu(s,0):i,sp(r)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),yl(r,e,n,"",function(u){return u})):r!=null&&(Md(r)&&(r=My(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(ap,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",sp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Zu(o,a);s+=yl(o,e,n,l,r)}else if(l=Ey(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Zu(o,a++),s+=yl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return yl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function wy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Sl={transition:null},Ay={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:Ed};je.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=ns;je.Fragment=hy;je.Profiler=my;je.PureComponent=yd;je.StrictMode=py;je.Suspense=xy;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=av({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ed.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cv.call(e,l)&&!fv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:xa,type:t.type,key:r,ref:o,props:i,_owner:s}};je.createContext=function(t){return t={$$typeof:vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gy,_context:t},t.Consumer=t};je.createElement=dv;je.createFactory=function(t){var e=dv.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:_y,render:t}};je.isValidElement=Md;je.lazy=function(t){return{$$typeof:Sy,_payload:{_status:-1,_result:t},_init:wy}};je.memo=function(t,e){return{$$typeof:yy,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(t,e){return Qt.current.useCallback(t,e)};je.useContext=function(t){return Qt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Qt.current.useEffect(t,e)};je.useId=function(){return Qt.current.useId()};je.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Qt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};je.useRef=function(t){return Qt.current.useRef(t)};je.useState=function(t){return Qt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Qt.current.useTransition()};je.version="18.2.0";ov.exports=je;var L=ov.exports;const Ie=ts(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=L,Ry=Symbol.for("react.element"),by=Symbol.for("react.fragment"),Py=Object.prototype.hasOwnProperty,Ly=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dy={key:!0,ref:!0,__self:!0,__source:!0};function hv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Py.call(e,i)&&!Dy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ry,type:t,key:o,ref:s,props:r,_owner:Ly.current}}_u.Fragment=by;_u.jsx=hv;_u.jsxs=hv;rv.exports=_u;var X=rv.exports,of={},pv={exports:{}},yn={},mv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,G){var O=P.length;P.push(G);e:for(;0<O;){var U=O-1>>>1,F=P[U];if(0<r(F,G))P[U]=G,P[O]=F,O=U;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var G=P[0],O=P.pop();if(O!==G){P[0]=O;e:for(var U=0,F=P.length,ee=F>>>1;U<ee;){var ie=2*(U+1)-1,ne=P[ie],ue=ie+1,ge=P[ue];if(0>r(ne,O))ue<F&&0>r(ge,ne)?(P[U]=ge,P[ue]=O,U=ue):(P[U]=ne,P[ie]=O,U=ie);else if(ue<F&&0>r(ge,O))P[U]=ge,P[ue]=O,U=ue;else break e}}return G}function r(P,G){var O=P.sortIndex-G.sortIndex;return O!==0?O:P.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var G=n(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=P)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function y(P){if(x=!1,g(P),!_)if(n(l)!==null)_=!0,Z(E);else{var G=n(u);G!==null&&W(y,G.startTime-P)}}function E(P,G){_=!1,x&&(x=!1,f(b),b=-1),m=!0;var O=h;try{for(g(G),d=n(l);d!==null&&(!(d.expirationTime>G)||P&&!B());){var U=d.callback;if(typeof U=="function"){d.callback=null,h=d.priorityLevel;var F=U(d.expirationTime<=G);G=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(l)&&i(l),g(G)}else i(l);d=n(l)}if(d!==null)var ee=!0;else{var ie=n(u);ie!==null&&W(y,ie.startTime-G),ee=!1}return ee}finally{d=null,h=O,m=!1}}var T=!1,w=null,b=-1,S=5,A=-1;function B(){return!(t.unstable_now()-A<S)}function $(){if(w!==null){var P=t.unstable_now();A=P;var G=!0;try{G=w(!0,P)}finally{G?N():(T=!1,w=null)}}else T=!1}var N;if(typeof v=="function")N=function(){v($)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,H=z.port2;z.port1.onmessage=$,N=function(){H.postMessage(null)}}else N=function(){p($,0)};function Z(P){w=P,T||(T=!0,N())}function W(P,G){b=p(function(){P(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Z(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var O=h;h=G;try{return P()}finally{h=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,G){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var O=h;h=P;try{return G()}finally{h=O}},t.unstable_scheduleCallback=function(P,G,O){var U=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?U+O:U):O=U,P){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=O+F,P={id:c++,callback:G,priorityLevel:P,startTime:O,expirationTime:F,sortIndex:-1},O>U?(P.sortIndex=O,e(u,P),n(l)===null&&P===n(u)&&(x?(f(b),b=-1):x=!0,W(y,O-U))):(P.sortIndex=F,e(l,P),_||m||(_=!0,Z(E))),P},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(P){var G=h;return function(){var O=h;h=G;try{return P.apply(this,arguments)}finally{h=O}}}})(gv);mv.exports=gv;var Ny=mv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=L,_n=Ny;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,Ks={};function Xr(t,e){Bo(t,e),Bo(t+"Capture",e)}function Bo(t,e){for(Ks[t]=e,t=0;t<e.length;t++)_v.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,Uy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},up={};function Iy(t){return sf.call(up,t)?!0:sf.call(lp,t)?!1:Uy.test(t)?up[t]=!0:(lp[t]=!0,!1)}function Oy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fy(t,e,n,i){if(e===null||typeof e>"u"||Oy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,wd);Ft[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,wd);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,wd);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fy(e,n,r,i)&&(n=null),i||r===null?Iy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),_o=Symbol.for("react.portal"),xo=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),xv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),Rd=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Sv=Symbol.for("react.offscreen"),cp=Symbol.iterator;function ds(t){return t===null||typeof t!="object"?null:(t=cp&&t[cp]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Qu;function As(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Ju=!1;function ec(t,e){if(!t||Ju)return"";Ju=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ju=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function ky(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=ec(t.type,!1),t;case 11:return t=ec(t.type.render,!1),t;case 1:return t=ec(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xo:return"Fragment";case _o:return"Portal";case af:return"Profiler";case Cd:return"StrictMode";case lf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yv:return(t.displayName||"Context")+".Consumer";case xv:return(t._context.displayName||"Context")+".Provider";case Rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function By(t){var e=Ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=By(t))}function Mv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ev(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tv(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function df(t,e){Tv(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hf(t,e.type,n):e.hasOwnProperty("defaultValue")&&hf(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hf(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Do(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Cs(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function wv(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Av(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Av(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,Cv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hy=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(t){Hy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ns[e]=Ns[t]})});function Rv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ns.hasOwnProperty(t)&&Ns[t]?(""+e).trim():e+"px"}function bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Rv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gy=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(Gy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function Pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,No=null,Uo=null;function mp(t){if(t=Ea(t)){if(typeof xf!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Mu(e),xf(t.stateNode,t.type,e))}}function Pv(t){No?Uo?Uo.push(t):Uo=[t]:No=t}function Lv(){if(No){var t=No,e=Uo;if(Uo=No=null,mp(t),e)for(t=0;t<e.length;t++)mp(e[t])}}function Dv(t,e){return t(e)}function Nv(){}var tc=!1;function Uv(t,e,n){if(tc)return t(e,n);tc=!0;try{return Dv(t,e,n)}finally{tc=!1,(No!==null||Uo!==null)&&(Nv(),Lv())}}function Qs(t,e){var n=t.stateNode;if(n===null)return null;var i=Mu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var yf=!1;if(Ai)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){yf=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{yf=!1}function Vy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Us=!1,Ol=null,Fl=!1,Sf=null,Wy={onError:function(t){Us=!0,Ol=t}};function jy(t,e,n,i,r,o,s,a,l){Us=!1,Ol=null,Vy.apply(Wy,arguments)}function Xy(t,e,n,i,r,o,s,a,l){if(jy.apply(this,arguments),Us){if(Us){var u=Ol;Us=!1,Ol=null}else throw Error(oe(198));Fl||(Fl=!0,Sf=u)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gp(t){if($r(t)!==t)throw Error(oe(188))}function $y(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return gp(r),t;if(o===i)return gp(r),e;o=o.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Ov(t){return t=$y(t),t!==null?Fv(t):null}function Fv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fv(t);if(e!==null)return e;t=t.sibling}return null}var kv=_n.unstable_scheduleCallback,vp=_n.unstable_cancelCallback,Yy=_n.unstable_shouldYield,qy=_n.unstable_requestPaint,vt=_n.unstable_now,Ky=_n.unstable_getCurrentPriorityLevel,Ld=_n.unstable_ImmediatePriority,zv=_n.unstable_UserBlockingPriority,kl=_n.unstable_NormalPriority,Zy=_n.unstable_LowPriority,Bv=_n.unstable_IdlePriority,xu=null,ti=null;function Qy(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:tS,Jy=Math.log,eS=Math.LN2;function tS(t){return t>>>=0,t===0?32:31-(Jy(t)/eS|0)|0}var Oa=64,Fa=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Rs(a):(o&=s,o!==0&&(i=Rs(o)))}else s=n&~r,s!==0?i=Rs(s):o!==0&&(i=Rs(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function nS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Xn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=nS(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hv(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function rS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vv,Nd,Wv,jv,Xv,Mf=!1,ka=[],Zi=null,Qi=null,Ji=null,Js=new Map,ea=new Map,Wi=[],oS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _p(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function ps(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sS(t,e,n,i,r){switch(e){case"focusin":return Zi=ps(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=ps(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=ps(Ji,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Js.set(o,ps(Js.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ea.set(o,ps(ea.get(o)||null,t,e,n,i,r)),!0}return!1}function $v(t){var e=Rr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=Iv(n),e!==null){t.blockedOn=e,Xv(t.priority,function(){Wv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_f=i,n.target.dispatchEvent(i),_f=null}else return e=Ea(n),e!==null&&Nd(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){El(t)&&n.delete(e)}function aS(){Mf=!1,Zi!==null&&El(Zi)&&(Zi=null),Qi!==null&&El(Qi)&&(Qi=null),Ji!==null&&El(Ji)&&(Ji=null),Js.forEach(xp),ea.forEach(xp)}function ms(t,e){t.blockedOn===e&&(t.blockedOn=null,Mf||(Mf=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,aS)))}function ta(t){function e(r){return ms(r,t)}if(0<ka.length){ms(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&ms(Zi,t),Qi!==null&&ms(Qi,t),Ji!==null&&ms(Ji,t),Js.forEach(e),ea.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)$v(n),n.blockedOn===null&&Wi.shift()}var Io=Di.ReactCurrentBatchConfig,Bl=!0;function lS(t,e,n,i){var r=Ke,o=Io.transition;Io.transition=null;try{Ke=1,Ud(t,e,n,i)}finally{Ke=r,Io.transition=o}}function uS(t,e,n,i){var r=Ke,o=Io.transition;Io.transition=null;try{Ke=4,Ud(t,e,n,i)}finally{Ke=r,Io.transition=o}}function Ud(t,e,n,i){if(Bl){var r=Tf(t,e,n,i);if(r===null)dc(t,e,i,Hl,n),_p(t,i);else if(sS(r,t,e,n,i))i.stopPropagation();else if(_p(t,i),e&4&&-1<oS.indexOf(t)){for(;r!==null;){var o=Ea(r);if(o!==null&&Vv(o),o=Tf(t,e,n,i),o===null&&dc(t,e,i,Hl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else dc(t,e,i,null,n)}}var Hl=null;function Tf(t,e,n,i){if(Hl=null,t=Pd(i),t=Rr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function Yv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ky()){case Ld:return 1;case zv:return 4;case kl:case Zy:return 16;case Bv:return 536870912;default:return 16}default:return 16}}var Xi=null,Id=null,Ml=null;function qv(){if(Ml)return Ml;var t,e=Id,n=e.length,i,r="value"in Xi?Xi.value:Xi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return Ml=r.slice(t,1<i?1-i:void 0)}function Tl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function yp(){return!1}function Sn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?za:yp,this.isPropagationStopped=yp,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=Sn(is),Sa=ht({},is,{view:0,detail:0}),cS=Sn(Sa),ic,rc,gs,yu=ht({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gs&&(gs&&t.type==="mousemove"?(ic=t.screenX-gs.screenX,rc=t.screenY-gs.screenY):rc=ic=0,gs=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),Sp=Sn(yu),fS=ht({},yu,{dataTransfer:0}),dS=Sn(fS),hS=ht({},Sa,{relatedTarget:0}),oc=Sn(hS),pS=ht({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=Sn(pS),gS=ht({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vS=Sn(gS),_S=ht({},is,{data:0}),Ep=Sn(_S),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SS[t])?!!e[t]:!1}function Fd(){return ES}var MS=ht({},Sa,{key:function(t){if(t.key){var e=xS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fd,charCode:function(t){return t.type==="keypress"?Tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=Sn(MS),wS=ht({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Sn(wS),AS=ht({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fd}),CS=Sn(AS),RS=ht({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Sn(RS),PS=ht({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=Sn(PS),DS=[9,13,27,32],kd=Ai&&"CompositionEvent"in window,Is=null;Ai&&"documentMode"in document&&(Is=document.documentMode);var NS=Ai&&"TextEvent"in window&&!Is,Kv=Ai&&(!kd||Is&&8<Is&&11>=Is),Tp=" ",wp=!1;function Zv(t,e){switch(t){case"keyup":return DS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yo=!1;function US(t,e){switch(t){case"compositionend":return Qv(e);case"keypress":return e.which!==32?null:(wp=!0,Tp);case"textInput":return t=e.data,t===Tp&&wp?null:t;default:return null}}function IS(t,e){if(yo)return t==="compositionend"||!kd&&Zv(t,e)?(t=qv(),Ml=Id=Xi=null,yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var OS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OS[t.type]:e==="textarea"}function Jv(t,e,n,i){Pv(i),e=Gl(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Os=null,na=null;function FS(t){c_(t,0)}function Su(t){var e=Mo(t);if(Mv(e))return t}function kS(t,e){if(t==="change")return e}var e_=!1;if(Ai){var sc;if(Ai){var ac="oninput"in document;if(!ac){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),ac=typeof Cp.oninput=="function"}sc=ac}else sc=!1;e_=sc&&(!document.documentMode||9<document.documentMode)}function Rp(){Os&&(Os.detachEvent("onpropertychange",t_),na=Os=null)}function t_(t){if(t.propertyName==="value"&&Su(na)){var e=[];Jv(e,na,t,Pd(t)),Uv(FS,e)}}function zS(t,e,n){t==="focusin"?(Rp(),Os=e,na=n,Os.attachEvent("onpropertychange",t_)):t==="focusout"&&Rp()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Su(na)}function HS(t,e){if(t==="click")return Su(e)}function GS(t,e){if(t==="input"||t==="change")return Su(e)}function VS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:VS;function ia(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sf.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pp(t,e){var n=bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function n_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i_(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WS(t){var e=i_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n_(n.ownerDocument.documentElement,n)){if(i!==null&&zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Pp(n,o);var s=Pp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jS=Ai&&"documentMode"in document&&11>=document.documentMode,So=null,wf=null,Fs=null,Af=!1;function Lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||So==null||So!==Il(i)||(i=So,"selectionStart"in i&&zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fs&&ia(Fs,i)||(Fs=i,i=Gl(wf,"onSelect"),0<i.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=So)))}function Ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Eo={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},lc={},r_={};Ai&&(r_=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Eu(t){if(lc[t])return lc[t];if(!Eo[t])return t;var e=Eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r_)return lc[t]=e[n];return t}var o_=Eu("animationend"),s_=Eu("animationiteration"),a_=Eu("animationstart"),l_=Eu("transitionend"),u_=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){u_.set(t,e),Xr(e,[t])}for(var uc=0;uc<Dp.length;uc++){var cc=Dp[uc],XS=cc.toLowerCase(),$S=cc[0].toUpperCase()+cc.slice(1);dr(XS,"on"+$S)}dr(o_,"onAnimationEnd");dr(s_,"onAnimationIteration");dr(a_,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(l_,"onTransitionEnd");Bo("onMouseEnter",["mouseout","mouseover"]);Bo("onMouseLeave",["mouseout","mouseover"]);Bo("onPointerEnter",["pointerout","pointerover"]);Bo("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function Np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xy(i,e,void 0,t),t.currentTarget=null}function c_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Np(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Np(r,a,u),o=l}}}if(Fl)throw t=Sf,Fl=!1,Sf=null,t}function ot(t,e){var n=e[Lf];n===void 0&&(n=e[Lf]=new Set);var i=t+"__bubble";n.has(i)||(f_(e,t,2,!1),n.add(i))}function fc(t,e,n){var i=0;e&&(i|=4),f_(n,t,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[Ha]){t[Ha]=!0,_v.forEach(function(n){n!=="selectionchange"&&(YS.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,fc("selectionchange",!1,e))}}function f_(t,e,n,i){switch(Yv(e)){case 1:var r=lS;break;case 4:r=uS;break;default:r=Ud}n=r.bind(null,e,n,t),r=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function dc(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Rr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Uv(function(){var u=o,c=Pd(n),d=[];e:{var h=u_.get(t);if(h!==void 0){var m=Od,_=t;switch(t){case"keypress":if(Tl(n)===0)break e;case"keydown":case"keyup":m=TS;break;case"focusin":_="focus",m=oc;break;case"focusout":_="blur",m=oc;break;case"beforeblur":case"afterblur":m=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=CS;break;case o_:case s_:case a_:m=mS;break;case l_:m=bS;break;case"scroll":m=cS;break;case"wheel":m=LS;break;case"copy":case"cut":case"paste":m=vS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mp}var x=(e&4)!==0,p=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var v=u,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=Qs(v,f),y!=null&&x.push(oa(v,y,g)))),p)break;v=v.return}0<x.length&&(h=new m(h,_,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==_f&&(_=n.relatedTarget||n.fromElement)&&(Rr(_)||_[Ci]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Rr(_):null,_!==null&&(p=$r(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(x=Sp,y="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Mp,y="onPointerLeave",f="onPointerEnter",v="pointer"),p=m==null?h:Mo(m),g=_==null?h:Mo(_),h=new x(y,v+"leave",m,n,c),h.target=p,h.relatedTarget=g,y=null,Rr(c)===u&&(x=new x(f,v+"enter",_,n,c),x.target=g,x.relatedTarget=p,y=x),p=y,m&&_)t:{for(x=m,f=_,v=0,g=x;g;g=qr(g))v++;for(g=0,y=f;y;y=qr(y))g++;for(;0<v-g;)x=qr(x),v--;for(;0<g-v;)f=qr(f),g--;for(;v--;){if(x===f||f!==null&&x===f.alternate)break t;x=qr(x),f=qr(f)}x=null}else x=null;m!==null&&Up(d,h,m,x,!1),_!==null&&p!==null&&Up(d,p,_,x,!0)}}e:{if(h=u?Mo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var E=kS;else if(Ap(h))if(e_)E=GS;else{E=BS;var T=zS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=HS);if(E&&(E=E(t,u))){Jv(d,E,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&hf(h,"number",h.value)}switch(T=u?Mo(u):window,t){case"focusin":(Ap(T)||T.contentEditable==="true")&&(So=T,wf=u,Fs=null);break;case"focusout":Fs=wf=So=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Lp(d,n,c);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":Lp(d,n,c)}var w;if(kd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else yo?Zv(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Kv&&n.locale!=="ko"&&(yo||b!=="onCompositionStart"?b==="onCompositionEnd"&&yo&&(w=qv()):(Xi=c,Id="value"in Xi?Xi.value:Xi.textContent,yo=!0)),T=Gl(u,b),0<T.length&&(b=new Ep(b,t,null,n,c),d.push({event:b,listeners:T}),w?b.data=w:(w=Qv(n),w!==null&&(b.data=w)))),(w=NS?US(t,n):IS(t,n))&&(u=Gl(u,"onBeforeInput"),0<u.length&&(c=new Ep("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=w))}c_(d,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Qs(t,n),o!=null&&i.unshift(oa(t,o,r)),o=Qs(t,e),o!=null&&i.push(oa(t,o,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Qs(n,o),l!=null&&s.unshift(oa(n,l,a))):r||(l=Qs(n,o),l!=null&&s.push(oa(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var qS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function Ip(t){return(typeof t=="string"?t:""+t).replace(qS,`
`).replace(KS,"")}function Ga(t,e,n){if(e=Ip(e),Ip(t)!==e&&n)throw Error(oe(425))}function Vl(){}var Cf=null,Rf=null;function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pf=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,Op=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof Op<"u"?function(t){return Op.resolve(null).then(t).catch(JS)}:Pf;function JS(t){setTimeout(function(){throw t})}function hc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+rs,sa="__reactProps$"+rs,Ci="__reactContainer$"+rs,Lf="__reactEvents$"+rs,eE="__reactListeners$"+rs,tE="__reactHandles$"+rs;function Rr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fp(t);t!==null;){if(n=t[Jn])return n;t=Fp(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[Jn]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Mu(t){return t[sa]||null}var Df=[],To=-1;function hr(t){return{current:t}}function st(t){0>To||(t.current=Df[To],Df[To]=null,To--)}function it(t,e){To++,Df[To]=t.current,t.current=e}var ur={},Vt=hr(ur),nn=hr(!1),kr=ur;function Ho(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Wl(){st(nn),st(Vt)}function kp(t,e,n){if(Vt.current!==ur)throw Error(oe(168));it(Vt,e),it(nn,n)}function d_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,zy(t)||"Unknown",r));return ht({},n,i)}function jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,kr=Vt.current,it(Vt,t),it(nn,nn.current),!0}function zp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=d_(t,e,kr),i.__reactInternalMemoizedMergedChildContext=t,st(nn),st(Vt),it(Vt,t)):st(nn),it(nn,n)}var _i=null,Tu=!1,pc=!1;function h_(t){_i===null?_i=[t]:_i.push(t)}function nE(t){Tu=!0,h_(t)}function pr(){if(!pc&&_i!==null){pc=!0;var t=0,e=Ke;try{var n=_i;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Tu=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),kv(Ld,pr),r}finally{Ke=e,pc=!1}}return null}var wo=[],Ao=0,Xl=null,$l=0,Tn=[],wn=0,zr=null,Si=1,Ei="";function Mr(t,e){wo[Ao++]=$l,wo[Ao++]=Xl,Xl=t,$l=e}function p_(t,e,n){Tn[wn++]=Si,Tn[wn++]=Ei,Tn[wn++]=zr,zr=t;var i=Si;t=Ei;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var o=32-Xn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Si=1<<32-Xn(e)+r|n<<r|i,Ei=o+t}else Si=1<<o|n<<r|i,Ei=t}function Bd(t){t.return!==null&&(Mr(t,1),p_(t,1,0))}function Hd(t){for(;t===Xl;)Xl=wo[--Ao],wo[Ao]=null,$l=wo[--Ao],wo[Ao]=null;for(;t===zr;)zr=Tn[--wn],Tn[wn]=null,Ei=Tn[--wn],Tn[wn]=null,Si=Tn[--wn],Tn[wn]=null}var mn=null,pn=null,lt=!1,Hn=null;function m_(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(lt){var e=pn;if(e){var n=e;if(!Bp(t,e)){if(Nf(t))throw Error(oe(418));e=er(n.nextSibling);var i=mn;e&&Bp(t,e)?m_(i,n):(t.flags=t.flags&-4097|2,lt=!1,mn=t)}}else{if(Nf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,lt=!1,mn=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Va(t){if(t!==mn)return!1;if(!lt)return Hp(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bf(t.type,t.memoizedProps)),e&&(e=pn)){if(Nf(t))throw g_(),Error(oe(418));for(;e;)m_(t,e),e=er(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?er(t.stateNode.nextSibling):null;return!0}function g_(){for(var t=pn;t;)t=er(t.nextSibling)}function Go(){pn=mn=null,lt=!1}function Gd(t){Hn===null?Hn=[t]:Hn.push(t)}var iE=Di.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Yl=hr(null),ql=null,Co=null,Vd=null;function Wd(){Vd=Co=ql=null}function jd(t){var e=Yl.current;st(Yl),t._currentValue=e}function If(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Oo(t,e){ql=t,Vd=Co=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(Vd!==t)if(t={context:t,memoizedValue:e,next:null},Co===null){if(ql===null)throw Error(oe(308));Co=t,ql.dependencies={lanes:0,firstContext:t}}else Co=Co.next=t;return e}var br=null;function Xd(t){br===null?br=[t]:br.push(t)}function v_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}function Gp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;Hi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,x=a;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=ht({},d,h);break e;case 2:Hi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Hr|=s,t.lanes=s,t.memoizedState=d}}function Vp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var x_=new vv.Component().refs;function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ir(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=tr(t,o,r),e!==null&&($n(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ir(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=tr(t,o,r),e!==null&&($n(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=ir(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&($n(e,t,i,n),wl(e,t,i))}};function Wp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,o):!0}function y_(t,e,n){var i=!1,r=ur,o=e.contextType;return typeof o=="object"&&o!==null?o=Pn(o):(r=rn(e)?kr:Vt.current,i=e.contextTypes,o=(i=i!=null)?Ho(t,r):ur),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function jp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=x_,$d(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Pn(o):(o=rn(e)?kr:Vt.current,r.context=Ho(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Of(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===x_&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function S_(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=rr(f,v),f.index=0,f.sibling=null,f}function o(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,g,y){return v===null||v.tag!==6?(v=Sc(g,f.mode,y),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,y){var E=g.type;return E===xo?c(f,v,g.props.children,y,g.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bi&&Xp(E)===v.type)?(y=r(v,g.props),y.ref=vs(f,v,g),y.return=f,y):(y=Ll(g.type,g.key,g.props,null,f.mode,y),y.ref=vs(f,v,g),y.return=f,y)}function u(f,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ec(g,f.mode,y),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function c(f,v,g,y,E){return v===null||v.tag!==7?(v=Dr(g,f.mode,y,E),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sc(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Na:return g=Ll(v.type,v.key,v.props,null,f.mode,g),g.ref=vs(f,null,v),g.return=f,g;case _o:return v=Ec(v,f.mode,g),v.return=f,v;case Bi:var y=v._init;return d(f,y(v._payload),g)}if(Cs(v)||ds(v))return v=Dr(v,f.mode,g,null),v.return=f,v;Wa(f,v)}return null}function h(f,v,g,y){var E=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(f,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Na:return g.key===E?l(f,v,g,y):null;case _o:return g.key===E?u(f,v,g,y):null;case Bi:return E=g._init,h(f,v,E(g._payload),y)}if(Cs(g)||ds(g))return E!==null?null:c(f,v,g,y,null);Wa(f,g)}return null}function m(f,v,g,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(v,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Na:return f=f.get(y.key===null?g:y.key)||null,l(v,f,y,E);case _o:return f=f.get(y.key===null?g:y.key)||null,u(v,f,y,E);case Bi:var T=y._init;return m(f,v,g,T(y._payload),E)}if(Cs(y)||ds(y))return f=f.get(g)||null,c(v,f,y,E,null);Wa(v,y)}return null}function _(f,v,g,y){for(var E=null,T=null,w=v,b=v=0,S=null;w!==null&&b<g.length;b++){w.index>b?(S=w,w=null):S=w.sibling;var A=h(f,w,g[b],y);if(A===null){w===null&&(w=S);break}t&&w&&A.alternate===null&&e(f,w),v=o(A,v,b),T===null?E=A:T.sibling=A,T=A,w=S}if(b===g.length)return n(f,w),lt&&Mr(f,b),E;if(w===null){for(;b<g.length;b++)w=d(f,g[b],y),w!==null&&(v=o(w,v,b),T===null?E=w:T.sibling=w,T=w);return lt&&Mr(f,b),E}for(w=i(f,w);b<g.length;b++)S=m(w,f,b,g[b],y),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?b:S.key),v=o(S,v,b),T===null?E=S:T.sibling=S,T=S);return t&&w.forEach(function(B){return e(f,B)}),lt&&Mr(f,b),E}function x(f,v,g,y){var E=ds(g);if(typeof E!="function")throw Error(oe(150));if(g=E.call(g),g==null)throw Error(oe(151));for(var T=E=null,w=v,b=v=0,S=null,A=g.next();w!==null&&!A.done;b++,A=g.next()){w.index>b?(S=w,w=null):S=w.sibling;var B=h(f,w,A.value,y);if(B===null){w===null&&(w=S);break}t&&w&&B.alternate===null&&e(f,w),v=o(B,v,b),T===null?E=B:T.sibling=B,T=B,w=S}if(A.done)return n(f,w),lt&&Mr(f,b),E;if(w===null){for(;!A.done;b++,A=g.next())A=d(f,A.value,y),A!==null&&(v=o(A,v,b),T===null?E=A:T.sibling=A,T=A);return lt&&Mr(f,b),E}for(w=i(f,w);!A.done;b++,A=g.next())A=m(w,f,b,A.value,y),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?b:A.key),v=o(A,v,b),T===null?E=A:T.sibling=A,T=A);return t&&w.forEach(function($){return e(f,$)}),lt&&Mr(f,b),E}function p(f,v,g,y){if(typeof g=="object"&&g!==null&&g.type===xo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Na:e:{for(var E=g.key,T=v;T!==null;){if(T.key===E){if(E=g.type,E===xo){if(T.tag===7){n(f,T.sibling),v=r(T,g.props.children),v.return=f,f=v;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bi&&Xp(E)===T.type){n(f,T.sibling),v=r(T,g.props),v.ref=vs(f,T,g),v.return=f,f=v;break e}n(f,T);break}else e(f,T);T=T.sibling}g.type===xo?(v=Dr(g.props.children,f.mode,y,g.key),v.return=f,f=v):(y=Ll(g.type,g.key,g.props,null,f.mode,y),y.ref=vs(f,v,g),y.return=f,f=y)}return s(f);case _o:e:{for(T=g.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Ec(g,f.mode,y),v.return=f,f=v}return s(f);case Bi:return T=g._init,p(f,v,T(g._payload),y)}if(Cs(g))return _(f,v,g,y);if(ds(g))return x(f,v,g,y);Wa(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=Sc(g,f.mode,y),v.return=f,f=v),s(f)):n(f,v)}return p}var Vo=S_(!0),E_=S_(!1),Ma={},ni=hr(Ma),aa=hr(Ma),la=hr(Ma);function Pr(t){if(t===Ma)throw Error(oe(174));return t}function Yd(t,e){switch(it(la,e),it(aa,t),it(ni,Ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}st(ni),it(ni,e)}function Wo(){st(ni),st(aa),st(la)}function M_(t){Pr(la.current);var e=Pr(ni.current),n=mf(e,t.type);e!==n&&(it(aa,t),it(ni,n))}function qd(t){aa.current===t&&(st(ni),st(aa))}var ft=hr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mc=[];function Kd(){for(var t=0;t<mc.length;t++)mc[t]._workInProgressVersionPrimary=null;mc.length=0}var Al=Di.ReactCurrentDispatcher,gc=Di.ReactCurrentBatchConfig,Br=0,dt=null,wt=null,Pt=null,Ql=!1,ks=!1,ua=0,rE=0;function kt(){throw Error(oe(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,o){if(Br=o,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?lE:uE,t=n(i,r),ks){o=0;do{if(ks=!1,ua=0,25<=o)throw Error(oe(301));o+=1,Pt=wt=null,e.updateQueue=null,Al.current=cE,t=n(i,r)}while(ks)}if(Al.current=Jl,e=wt!==null&&wt.next!==null,Br=0,Pt=wt=dt=null,Ql=!1,e)throw Error(oe(300));return t}function Jd(){var t=ua!==0;return ua=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Ln(){if(wt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?dt.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(oe(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?dt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function ca(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,dt.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Yn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,dt.lanes|=o,Hr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Ln(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Yn(o,e.memoizedState)||(tn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function T_(){}function w_(t,e){var n=dt,i=Ln(),r=e(),o=!Yn(i.memoizedState,r);if(o&&(i.memoizedState=r,tn=!0),i=i.queue,eh(R_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,fa(9,C_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(oe(349));Br&30||A_(n,e,r)}return r}function A_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C_(t,e,n,i){e.value=n,e.getSnapshot=i,b_(e)&&P_(t)}function R_(t,e,n){return n(function(){b_(e)&&P_(t)})}function b_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function P_(t){var e=Ri(t,1);e!==null&&$n(e,t,1,-1)}function $p(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=aE.bind(null,dt,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function L_(){return Ln().memoizedState}function Cl(t,e,n,i){var r=Zn();dt.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function Au(t,e,n,i){var r=Ln();i=i===void 0?null:i;var o=void 0;if(wt!==null){var s=wt.memoizedState;if(o=s.destroy,i!==null&&Zd(i,s.deps)){r.memoizedState=fa(e,n,o,i);return}}dt.flags|=t,r.memoizedState=fa(1|e,n,o,i)}function Yp(t,e){return Cl(8390656,8,t,e)}function eh(t,e){return Au(2048,8,t,e)}function D_(t,e){return Au(4,2,t,e)}function N_(t,e){return Au(4,4,t,e)}function U_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I_(t,e,n){return n=n!=null?n.concat([t]):null,Au(4,4,U_.bind(null,e,t),n)}function th(){}function O_(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function F_(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function k_(t,e,n){return Br&21?(Yn(n,e)||(n=Hv(),dt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function oE(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=gc.transition;gc.transition={};try{t(!1),e()}finally{Ke=n,gc.transition=i}}function z_(){return Ln().memoizedState}function sE(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},B_(t))H_(e,n);else if(n=v_(t,e,n,i),n!==null){var r=Zt();$n(n,t,i,r),G_(n,e,i)}}function aE(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(t))H_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,s)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=v_(t,e,r,i),n!==null&&(r=Zt(),$n(n,t,i,r),G_(n,e,i))}}function B_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function H_(t,e){ks=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function G_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}var Jl={readContext:Pn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},lE={readContext:Pn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4194308,4,U_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sE.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:$p,useDebugValue:th,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=$p(!1),e=t[0];return t=oE.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Zn();if(lt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Lt===null)throw Error(oe(349));Br&30||A_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Yp(R_.bind(null,i,o,t),[t]),i.flags|=2048,fa(9,C_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Lt.identifierPrefix;if(lt){var n=Ei,i=Si;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uE={readContext:Pn,useCallback:O_,useContext:Pn,useEffect:eh,useImperativeHandle:I_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:F_,useReducer:vc,useRef:L_,useState:function(){return vc(ca)},useDebugValue:th,useDeferredValue:function(t){var e=Ln();return k_(e,wt.memoizedState,t)},useTransition:function(){var t=vc(ca)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:w_,useId:z_,unstable_isNewReconciler:!1},cE={readContext:Pn,useCallback:O_,useContext:Pn,useEffect:eh,useImperativeHandle:I_,useInsertionEffect:D_,useLayoutEffect:N_,useMemo:F_,useReducer:_c,useRef:L_,useState:function(){return _c(ca)},useDebugValue:th,useDeferredValue:function(t){var e=Ln();return wt===null?e.memoizedState=t:k_(e,wt.memoizedState,t)},useTransition:function(){var t=_c(ca)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:T_,useSyncExternalStore:w_,useId:z_,unstable_isNewReconciler:!1};function jo(t,e){try{var n="",i=e;do n+=ky(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fE=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tu||(tu=!0,Yf=i),kf(t,e)},n}function W_(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wE.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var dE=Di.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?E_(e,null,n,i):Vo(e,t.child,n,i)}function Qp(t,e,n,i,r){n=n.render;var o=e.ref;return Oo(e,r),i=Qd(t,e,n,i,o,r),n=Jd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(lt&&n&&Bd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Jp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!uh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,j_(t,e,o,i,r)):(t=Ll(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(s,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=rr(o,i),t.ref=e.ref,t.return=e,e.child=t}function j_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ia(o,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return zf(t,e,n,i,r)}function X_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(bo,hn),hn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(bo,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,it(bo,hn),hn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,it(bo,hn),hn|=i;return Yt(t,e,r,n),e.child}function $_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,i,r){var o=rn(n)?kr:Vt.current;return o=Ho(e,o),Oo(e,r),n=Qd(t,e,n,i,o,r),i=Jd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(lt&&i&&Bd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function em(t,e,n,i,r){if(rn(n)){var o=!0;jl(e)}else o=!1;if(Oo(e,r),e.stateNode===null)Rl(t,e),y_(e,n,i),Ff(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=rn(n)?kr:Vt.current,u=Ho(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&jp(e,s,i,u),Hi=!1;var h=e.memoizedState;s.state=h,Kl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||nn.current||Hi?(typeof c=="function"&&(Of(e,n,c,i),l=e.memoizedState),(a=Hi||Wp(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,__(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=rn(n)?kr:Vt.current,l=Ho(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&jp(e,s,i,l),Hi=!1,h=e.memoizedState,s.state=h,Kl(e,i,s,r);var _=e.memoizedState;a!==d||h!==_||nn.current||Hi?(typeof m=="function"&&(Of(e,n,m,i),_=e.memoizedState),(u=Hi||Wp(e,n,u,i,h,_,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Bf(t,e,n,i,o,r)}function Bf(t,e,n,i,r,o){$_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&zp(e,n,!1),bi(t,e,o);i=e.stateNode,dE.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Vo(e,t.child,null,o),e.child=Vo(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&zp(e,n,!0),e.child}function Y_(t){var e=t.stateNode;e.pendingContext?kp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kp(t,e.context,!1),Yd(t,e.containerInfo)}function tm(t,e,n,i,r){return Go(),Gd(r),e.flags|=256,Yt(t,e,n,i),e.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function q_(t,e,n){var i=e.pendingProps,r=ft.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bu(s,i,0,null),t=Dr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gf(n),e.memoizedState=Hf,t):nh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hE(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=rr(a,o):(o=Dr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Gf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Hf,i}return o=t.child,t=o.sibling,i=rr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,i){return i!==null&&Gd(i),Vo(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hE(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=xc(Error(oe(422))),ja(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=bu({mode:"visible",children:i.children},r,0,null),o=Dr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Vo(e,t.child,null,s),e.child.memoizedState=Gf(s),e.memoizedState=Hf,o);if(!(e.mode&1))return ja(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(oe(419)),i=xc(o,i,void 0),ja(t,e,s,i)}if(a=(s&t.childLanes)!==0,tn||a){if(i=Lt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ri(t,r),$n(i,t,r,-1))}return lh(),i=xc(Error(oe(421))),ja(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=AE.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,pn=er(r.nextSibling),mn=e,lt=!0,Hn=null,t!==null&&(Tn[wn++]=Si,Tn[wn++]=Ei,Tn[wn++]=zr,Si=t.id,Ei=t.overflow,zr=e),e=nh(e,i.children),e.flags|=4096,e)}function nm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),If(t.return,e,n)}function yc(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function K_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nm(t,n,e);else if(t.tag===19)nm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),yc(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}yc(e,!0,n,null,o);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pE(t,e,n){switch(e.tag){case 3:Y_(e),Go();break;case 5:M_(e);break;case 1:rn(e.type)&&jl(e);break;case 4:Yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?q_(t,e,n):(it(ft,ft.current&1),t=bi(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return K_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,X_(t,e,n)}return bi(t,e,n)}var Z_,Vf,Q_,J_;Z_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vf=function(){};Q_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ni.current);var o=null;switch(n){case"input":r=ff(t,r),i=ff(t,i),o=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),o=[];break;case"textarea":r=pf(t,r),i=pf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vl)}gf(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ks.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ks.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};J_=function(t,e,n,i){n!==i&&(e.flags|=4)};function _s(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mE(t,e,n){var i=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return rn(e.type)&&Wl(),zt(e),null;case 3:return i=e.stateNode,Wo(),st(nn),st(Vt),Kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Zf(Hn),Hn=null))),Vf(t,e),zt(e),null;case 5:qd(e);var r=Pr(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Q_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return zt(e),null}if(t=Pr(ni.current),Va(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Jn]=e,i[sa]=o,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<bs.length;r++)ot(bs[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":fp(i,o),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ot("invalid",i);break;case"textarea":hp(i,o),ot("invalid",i)}gf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ga(i.textContent,a,t),r=["children",""+a]):Ks.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ot("scroll",i)}switch(n){case"input":Ua(i),dp(i,o,!0);break;case"textarea":Ua(i),pp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Av(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Jn]=e,t[sa]=i,Z_(t,e,!1,!1),e.stateNode=t;e:{switch(s=vf(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<bs.length;r++)ot(bs[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":fp(t,i),r=ff(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),ot("invalid",t);break;case"textarea":hp(t,i),r=pf(t,i),ot("invalid",t);break;default:r=i}gf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?bv(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cv(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zs(t,l):typeof l=="number"&&Zs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ks.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ot("scroll",t):l!=null&&Ad(t,o,l,s))}switch(n){case"input":Ua(t),dp(t,i,!1);break;case"textarea":Ua(t),pp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Do(t,!!i.multiple,o,!1):i.defaultValue!=null&&Do(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)J_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Pr(la.current),Pr(ni.current),Va(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(o=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ga(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return zt(e),null;case 13:if(st(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&e.mode&1&&!(e.flags&128))g_(),Go(),e.flags|=98560,o=!1;else if(o=Va(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(oe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(oe(317));o[Jn]=e}else Go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),o=!1}else Hn!==null&&(Zf(Hn),Hn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?At===0&&(At=3):lh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Wo(),Vf(t,e),t===null&&ra(e.stateNode.containerInfo),zt(e),null;case 10:return jd(e.type._context),zt(e),null;case 17:return rn(e.type)&&Wl(),zt(e),null;case 19:if(st(ft),o=e.memoizedState,o===null)return zt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)_s(o,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Zl(t),s!==null){for(e.flags|=128,_s(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}o.tail!==null&&vt()>Xo&&(e.flags|=128,i=!0,_s(o,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_s(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!lt)return zt(e),null}else 2*vt()-o.renderingStartTime>Xo&&n!==1073741824&&(e.flags|=128,i=!0,_s(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=vt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function gE(t,e){switch(Hd(e),e.tag){case 1:return rn(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),st(nn),st(Vt),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(st(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ft),null;case 4:return Wo(),null;case 10:return jd(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Xa=!1,Gt=!1,vE=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Wf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var im=!1;function _E(t,e){if(Cf=Bl,t=i_(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},Bl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:zn(e.type,x),p);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=im,im=!1,_}function zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Wf(e,n,o)}r=r.next}while(r!==i)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function e0(t){var e=t.alternate;e!==null&&(t.alternate=null,e0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[sa],delete e[Lf],delete e[eE],delete e[tE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function t0(t){return t.tag===5||t.tag===3||t.tag===4}function rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(i!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var Nt=null,Bn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)n0(t,e,n),n=n.sibling}function n0(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:Gt||Ro(n,e);case 6:var i=Nt,r=Bn;Nt=null,Ii(t,e,n),Nt=i,Bn=r,Nt!==null&&(Bn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Bn?(t=Nt,n=n.stateNode,t.nodeType===8?hc(t.parentNode,n):t.nodeType===1&&hc(t,n),ta(t)):hc(Nt,n.stateNode));break;case 4:i=Nt,r=Bn,Nt=n.stateNode.containerInfo,Bn=!0,Ii(t,e,n),Nt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Wf(n,e,s),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Gt&&(Ro(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ii(t,e,n),Gt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vE),e.forEach(function(i){var r=CE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Bn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Bn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Nt===null)throw Error(oe(160));n0(o,s,r),Nt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i0(e,t),e=e.sibling}function i0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Kn(t),i&4){try{zs(3,t,t.return),Cu(3,t)}catch(x){mt(t,t.return,x)}try{zs(5,t,t.return)}catch(x){mt(t,t.return,x)}}break;case 1:Un(e,t),Kn(t),i&512&&n!==null&&Ro(n,n.return);break;case 5:if(Un(e,t),Kn(t),i&512&&n!==null&&Ro(n,n.return),t.flags&32){var r=t.stateNode;try{Zs(r,"")}catch(x){mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Tv(r,o),vf(a,s);var u=vf(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?bv(r,d):c==="dangerouslySetInnerHTML"?Cv(r,d):c==="children"?Zs(r,d):Ad(r,c,d,u)}switch(a){case"input":df(r,o);break;case"textarea":wv(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Do(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Do(r,!!o.multiple,o.defaultValue,!0):Do(r,!!o.multiple,o.multiple?[]:"",!1))}r[sa]=o}catch(x){mt(t,t.return,x)}}break;case 6:if(Un(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){mt(t,t.return,x)}}break;case 3:if(Un(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(x){mt(t,t.return,x)}break;case 4:Un(e,t),Kn(t);break;case 13:Un(e,t),Kn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(oh=vt())),i&4&&om(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,Un(e,t),Gt=u):Un(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(pe=t,c=t.child;c!==null;){for(d=pe=c;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:zs(4,h,h.return);break;case 1:Ro(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){mt(i,n,x)}}break;case 5:Ro(h,h.return);break;case 22:if(h.memoizedState!==null){am(d);continue}}m!==null?(m.return=h,pe=m):am(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rv("display",s))}catch(x){mt(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){mt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),Kn(t),i&4&&om(t);break;case 21:break;default:Un(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(t0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zs(r,""),i.flags&=-33);var o=rm(t);$f(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=rm(t);Xf(t,a,s);break;default:throw Error(oe(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xE(t,e,n){pe=t,r0(t)}function r0(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Xa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Xa;var u=Gt;if(Xa=s,(Gt=l)&&!u)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?lm(r):l!==null?(l.return=s,pe=l):lm(r);for(;o!==null;)pe=o,r0(o),o=o.sibling;pe=r,Xa=a,Gt=u}sm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,pe=o):sm(t)}}function sm(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Vp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Gt||e.flags&512&&jf(e)}catch(h){mt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function am(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function lm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var o=e.return;try{jf(e)}catch(l){mt(e,o,l)}break;case 5:var s=e.return;try{jf(e)}catch(l){mt(e,s,l)}}}catch(l){mt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var yE=Math.ceil,eu=Di.ReactCurrentDispatcher,ih=Di.ReactCurrentOwner,bn=Di.ReactCurrentBatchConfig,Xe=0,Lt=null,Mt=null,It=0,hn=0,bo=hr(0),At=0,da=null,Hr=0,Ru=0,rh=0,Bs=null,en=null,oh=0,Xo=1/0,vi=null,tu=!1,Yf=null,nr=null,$a=!1,$i=null,nu=0,Hs=0,qf=null,bl=-1,Pl=0;function Zt(){return Xe&6?vt():bl!==-1?bl:bl=vt()}function ir(t){return t.mode&1?Xe&2&&It!==0?It&-It:iE.transition!==null?(Pl===0&&(Pl=Hv()),Pl):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Yv(t.type)),t):1}function $n(t,e,n,i){if(50<Hs)throw Hs=0,qf=null,Error(oe(185));ya(t,n,i),(!(Xe&2)||t!==Lt)&&(t===Lt&&(!(Xe&2)&&(Ru|=n),At===4&&ji(t,It)),on(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Xo=vt()+500,Tu&&pr()))}function on(t,e){var n=t.callbackNode;iS(t,e);var i=zl(t,t===Lt?It:0);if(i===0)n!==null&&vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&vp(n),e===1)t.tag===0?nE(um.bind(null,t)):h_(um.bind(null,t)),QS(function(){!(Xe&6)&&pr()}),n=null;else{switch(Gv(i)){case 1:n=Ld;break;case 4:n=zv;break;case 16:n=kl;break;case 536870912:n=Bv;break;default:n=kl}n=d0(n,o0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function o0(t,e){if(bl=-1,Pl=0,Xe&6)throw Error(oe(327));var n=t.callbackNode;if(Fo()&&t.callbackNode!==n)return null;var i=zl(t,t===Lt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=iu(t,i);else{e=i;var r=Xe;Xe|=2;var o=a0();(Lt!==t||It!==e)&&(vi=null,Xo=vt()+500,Lr(t,e));do try{ME();break}catch(a){s0(t,a)}while(!0);Wd(),eu.current=o,Xe=r,Mt!==null?e=0:(Lt=null,It=0,e=At)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Kf(t,r))),e===1)throw n=da,Lr(t,0),ji(t,i),on(t,vt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!SE(r)&&(e=iu(t,i),e===2&&(o=Ef(t),o!==0&&(i=o,e=Kf(t,o))),e===1))throw n=da,Lr(t,0),ji(t,i),on(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Tr(t,en,vi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=oh+500-vt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Pf(Tr.bind(null,t,en,vi),e);break}Tr(t,en,vi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Xn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yE(i/1960))-i,10<i){t.timeoutHandle=Pf(Tr.bind(null,t,en,vi),i);break}Tr(t,en,vi);break;case 5:Tr(t,en,vi);break;default:throw Error(oe(329))}}}return on(t,vt()),t.callbackNode===n?o0.bind(null,t):null}function Kf(t,e){var n=Bs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=iu(t,e),t!==2&&(e=en,en=n,e!==null&&Zf(e)),t}function Zf(t){en===null?en=t:en.push.apply(en,t)}function SE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Yn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~rh,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function um(t){if(Xe&6)throw Error(oe(327));Fo();var e=zl(t,0);if(!(e&1))return on(t,vt()),null;var n=iu(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Kf(t,i))}if(n===1)throw n=da,Lr(t,0),ji(t,e),on(t,vt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,en,vi),on(t,vt()),null}function sh(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Xo=vt()+500,Tu&&pr())}}function Gr(t){$i!==null&&$i.tag===0&&!(Xe&6)&&Fo();var e=Xe;Xe|=1;var n=bn.transition,i=Ke;try{if(bn.transition=null,Ke=1,t)return t()}finally{Ke=i,bn.transition=n,Xe=e,!(Xe&6)&&pr()}}function ah(){hn=bo.current,st(bo)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZS(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Wl();break;case 3:Wo(),st(nn),st(Vt),Kd();break;case 5:qd(i);break;case 4:Wo();break;case 13:st(ft);break;case 19:st(ft);break;case 10:jd(i.type._context);break;case 22:case 23:ah()}n=n.return}if(Lt=t,Mt=t=rr(t.current,null),It=hn=e,At=0,da=null,rh=Ru=Hr=0,en=Bs=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}br=null}return t}function s0(t,e){do{var n=Mt;try{if(Wd(),Al.current=Jl,Ql){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(Br=0,Pt=wt=dt=null,ks=!1,ua=0,ih.current=null,n===null||n.return===null){At=1,da=e,Mt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Kp(s);if(m!==null){m.flags&=-257,Zp(m,s,a,o,e),m.mode&1&&qp(o,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){qp(o,u,e),lh();break e}l=Error(oe(426))}}else if(lt&&a.mode&1){var p=Kp(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Zp(p,s,a,o,e),Gd(jo(l,a));break e}}o=l=jo(l,a),At!==4&&(At=2),Bs===null?Bs=[o]:Bs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=V_(o,l,e);Gp(o,f);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nr===null||!nr.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=W_(o,a,e);Gp(o,y);break e}}o=o.return}while(o!==null)}u0(n)}catch(E){e=E,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function a0(){var t=eu.current;return eu.current=Jl,t===null?Jl:t}function lh(){(At===0||At===3||At===2)&&(At=4),Lt===null||!(Hr&268435455)&&!(Ru&268435455)||ji(Lt,It)}function iu(t,e){var n=Xe;Xe|=2;var i=a0();(Lt!==t||It!==e)&&(vi=null,Lr(t,e));do try{EE();break}catch(r){s0(t,r)}while(!0);if(Wd(),Xe=n,eu.current=i,Mt!==null)throw Error(oe(261));return Lt=null,It=0,At}function EE(){for(;Mt!==null;)l0(Mt)}function ME(){for(;Mt!==null&&!Yy();)l0(Mt)}function l0(t){var e=f0(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?u0(t):Mt=e,ih.current=null}function u0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gE(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=mE(n,e,hn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function Tr(t,e,n){var i=Ke,r=bn.transition;try{bn.transition=null,Ke=1,TE(t,e,n,i)}finally{bn.transition=r,Ke=i}return null}function TE(t,e,n,i){do Fo();while($i!==null);if(Xe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(rS(t,o),t===Lt&&(Mt=Lt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,d0(kl,function(){return Fo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=bn.transition,bn.transition=null;var s=Ke;Ke=1;var a=Xe;Xe|=4,ih.current=null,_E(t,n),i0(n,t),WS(Rf),Bl=!!Cf,Rf=Cf=null,t.current=n,xE(n),qy(),Xe=a,Ke=s,bn.transition=o}else t.current=n;if($a&&($a=!1,$i=t,nu=r),o=t.pendingLanes,o===0&&(nr=null),Qy(n.stateNode),on(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tu)throw tu=!1,t=Yf,Yf=null,t;return nu&1&&t.tag!==0&&Fo(),o=t.pendingLanes,o&1?t===qf?Hs++:(Hs=0,qf=t):Hs=0,pr(),null}function Fo(){if($i!==null){var t=Gv(nu),e=bn.transition,n=Ke;try{if(bn.transition=null,Ke=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,nu=0,Xe&6)throw Error(oe(331));var r=Xe;for(Xe|=4,pe=t.current;pe!==null;){var o=pe,s=o.child;if(pe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(pe=u;pe!==null;){var c=pe;switch(c.tag){case 0:case 11:case 15:zs(8,c,o)}var d=c.child;if(d!==null)d.return=c,pe=d;else for(;pe!==null;){c=pe;var h=c.sibling,m=c.return;if(e0(c),c===u){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var _=o.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,pe=s;else e:for(;pe!==null;){if(o=pe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zs(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,pe=f;break e}pe=o.return}}var v=t.current;for(pe=v;pe!==null;){s=pe;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,pe=g;else e:for(s=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(E){mt(a,a.return,E)}if(a===s){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Xe=r,pr(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(xu,t)}catch{}i=!0}return i}finally{Ke=n,bn.transition=e}}return!1}function cm(t,e,n){e=jo(n,e),e=V_(t,e,1),t=tr(t,e,1),e=Zt(),t!==null&&(ya(t,1,e),on(t,e))}function mt(t,e,n){if(t.tag===3)cm(t,t,n);else for(;e!==null;){if(e.tag===3){cm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=jo(n,t),t=W_(e,t,1),e=tr(e,t,1),t=Zt(),e!==null&&(ya(e,1,t),on(e,t));break}}e=e.return}}function wE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(It&n)===n&&(At===4||At===3&&(It&130023424)===It&&500>vt()-oh?Lr(t,0):rh|=n),on(t,e)}function c0(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=Zt();t=Ri(t,e),t!==null&&(ya(t,e,n),on(t,n))}function AE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function CE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),c0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,pE(t,e,n);tn=!!(t.flags&131072)}else tn=!1,lt&&e.flags&1048576&&p_(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=Ho(e,Vt.current);Oo(e,n),r=Qd(null,e,i,t,r,n);var o=Jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(o=!0,jl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$d(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,Ff(e,i,t,n),e=Bf(null,e,i,!0,o,n)):(e.tag=0,lt&&o&&Bd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=bE(i),t=zn(i,t),r){case 0:e=zf(null,e,i,t,n);break e;case 1:e=em(null,e,i,t,n);break e;case 11:e=Qp(null,e,i,t,n);break e;case 14:e=Jp(null,e,i,zn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),em(t,e,i,r,n);case 3:e:{if(Y_(e),t===null)throw Error(oe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,__(t,e),Kl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=jo(Error(oe(423)),e),e=tm(t,e,i,n,r);break e}else if(i!==r){r=jo(Error(oe(424)),e),e=tm(t,e,i,n,r);break e}else for(pn=er(e.stateNode.containerInfo.firstChild),mn=e,lt=!0,Hn=null,n=E_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Go(),i===r){e=bi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return M_(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,bf(i,r)?s=null:o!==null&&bf(i,o)&&(e.flags|=32),$_(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return q_(t,e,n);case 4:return Yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vo(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Qp(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,it(Yl,i._currentValue),i._currentValue=s,o!==null)if(Yn(o.value,s)){if(o.children===r.children&&!nn.current){e=bi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),If(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(oe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),If(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Oo(e,n),r=Pn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Jp(t,e,i,r,n);case 15:return j_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Rl(t,e),e.tag=1,rn(i)?(t=!0,jl(e)):t=!1,Oo(e,n),y_(e,i,r),Ff(e,i,r,n),Bf(null,e,i,!0,t,n);case 19:return K_(t,e,n);case 22:return X_(t,e,n)}throw Error(oe(156,e.tag))};function d0(t,e){return kv(t,e)}function RE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new RE(t,e,n,i)}function uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bE(t){if(typeof t=="function")return uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rd)return 11;if(t===bd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")uh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case xo:return Dr(n.children,r,o,e);case Cd:s=8,r|=8;break;case af:return t=Rn(12,n,e,r|2),t.elementType=af,t.lanes=o,t;case lf:return t=Rn(13,n,e,r),t.elementType=lf,t.lanes=o,t;case uf:return t=Rn(19,n,e,r),t.elementType=uf,t.lanes=o,t;case Sv:return bu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xv:s=10;break e;case yv:s=9;break e;case Rd:s=11;break e;case bd:s=14;break e;case Bi:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Rn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Dr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function bu(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Sv,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nc(0),this.expirationTimes=nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,o,s,a,l){return t=new PE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Rn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(o),t}function LE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function h0(t){if(!t)return ur;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(rn(n))return d_(t,n,e)}return e}function p0(t,e,n,i,r,o,s,a,l){return t=ch(n,i,!0,t,r,o,s,a,l),t.context=h0(null),n=t.current,i=Zt(),r=ir(n),o=Ti(i,r),o.callback=e??null,tr(n,o,r),t.current.lanes=r,ya(t,r,i),on(t,i),t}function Pu(t,e,n,i){var r=e.current,o=Zt(),s=ir(r);return n=h0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,s),t!==null&&($n(t,r,s,o),wl(t,r,s)),s}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){fm(t,e),(t=t.alternate)&&fm(t,e)}function DE(){return null}var m0=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}Lu.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Pu(t,e,null,null)};Lu.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Pu(null,t,null,null)}),e[Ci]=null}};function Lu(t){this._internalRoot=t}Lu.prototype.unstable_scheduleHydration=function(t){if(t){var e=jv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&$v(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function NE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=ru(s);o.call(u)}}var s=p0(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=s,t[Ci]=s.current,ra(t.nodeType===8?t.parentNode:t),Gr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ru(l);a.call(u)}}var l=ch(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[Ci]=l.current,ra(t.nodeType===8?t.parentNode:t),Gr(function(){Pu(e,l,n,i)}),l}function Nu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=ru(s);a.call(l)}}Pu(e,s,t,r)}else s=NE(n,e,t,r,i);return ru(s)}Vv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(Dd(e,n|1),on(e,vt()),!(Xe&6)&&(Xo=vt()+500,pr()))}break;case 13:Gr(function(){var i=Ri(t,1);if(i!==null){var r=Zt();$n(i,t,1,r)}}),fh(t,1)}};Nd=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=Zt();$n(e,t,134217728,n)}fh(t,134217728)}};Wv=function(t){if(t.tag===13){var e=ir(t),n=Ri(t,e);if(n!==null){var i=Zt();$n(n,t,e,i)}fh(t,e)}};jv=function(){return Ke};Xv=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};xf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Mu(i);if(!r)throw Error(oe(90));Mv(i),df(i,r)}}}break;case"textarea":wv(t,n);break;case"select":e=n.value,e!=null&&Do(t,!!n.multiple,e,!1)}};Dv=sh;Nv=Gr;var UE={usingClientEntryPoint:!1,Events:[Ea,Mo,Mu,Pv,Lv,sh]},xs={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},IE={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ov(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||DE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{xu=Ya.inject(IE),ti=Ya}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(oe(200));return LE(t,e,null,n)};yn.createRoot=function(t,e){if(!hh(t))throw Error(oe(299));var n=!1,i="",r=m0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,ra(t.nodeType===8?t.parentNode:t),new dh(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Ov(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Gr(t)};yn.hydrate=function(t,e,n){if(!Du(e))throw Error(oe(200));return Nu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=m0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=p0(e,null,t,1,n??null,r,!1,o,s),t[Ci]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Lu(e)};yn.render=function(t,e,n){if(!Du(e))throw Error(oe(200));return Nu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Du(t))throw Error(oe(40));return t._reactRootContainer?(Gr(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};yn.unstable_batchedUpdates=sh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Du(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Nu(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(t){console.error(t)}}g0(),pv.exports=yn;var v0=pv.exports;const Po=ts(v0);var hm=v0;of.createRoot=hm.createRoot,of.hydrateRoot=hm.hydrateRoot;function _0({contextId:t,render:e}){const n=Ie.useRef(null);return Ie.useEffect(()=>{if(!n.current)return;const i=n.current.getContext(t);if(i===null){console.error("Could not retrieve context!");return}let r;function o(s){e(s),r=requestAnimationFrame(()=>o(s))}return o(i),()=>{cancelAnimationFrame(r)}},[t,e]),n}const Ys=class Ys{constructor(e){Dt(this,"_context2D");Dt(this,"MousePos");this._context2D=e,this.MousePos={x:0,y:0},e.canvas.addEventListener("mousemove",n=>{this.MousePos=this.GetMousePosition(e.canvas,n)},!1)}static GetInstance(e){return this._instance?this._instance._context2D!==e&&(this._instance=new Ys(e),console.log("[Renderer2D]: New context2D instance")):(this._instance=new Ys(e),console.log("[Renderer2D]: Created renderer2D singleton")),this._instance}Width(){return this._context2D.canvas.width}Height(){return this._context2D.canvas.height}GetMousePosition(e,n){const i=e.getBoundingClientRect();return{x:n.clientX-i.left,y:n.clientY-i.top}}Clear(e="black"){this._context2D.fillStyle=e,this._context2D.fillRect(0,0,this.Width(),this.Height())}ClearPart(e,n,i,r,o){this._context2D.fillStyle=e,this._context2D.fillRect(n,i,r,o)}Translate(e,n){this._context2D.translate(e,n)}Rotate(e){this._context2D.rotate(e)}ToRadian(e){return e*Math.PI/180}Push(){this._context2D.save()}Pop(){this._context2D.restore()}ResetTransform(){this._context2D.setTransform(1,0,0,1,0,0)}Line(e,n,i,r,o="white",s=1){this._context2D.strokeStyle=o,this._context2D.lineWidth=s,this._context2D.beginPath(),this._context2D.moveTo(e,n),this._context2D.lineTo(i,r),this._context2D.stroke()}DrawFillRect(e,n,i,r,o="white"){this._context2D.fillStyle=o,this._context2D.fillRect(e,n,i,r)}DrawArc(e,n,i,r,o,s="white",a=1){this._context2D.strokeStyle=s,this._context2D.lineWidth=a,this._context2D.beginPath(),this._context2D.arc(e,n,i,r,o),this._context2D.stroke()}DrawFillText(e,n,i,r,o="white",s="Arial"){this._context2D.font=r+"px "+s,this._context2D.fillStyle=o,this._context2D.fillText(e,n,i)}DrawStrokeText(e,n,i,r,o="Arial"){this._context2D.font=r+"px "+o,this._context2D.strokeText(e,n,i)}Map(e,n,i,r,o){return r+(e-n)*(o-r)/(i-n)}ToInt(e){return Number.parseInt(e.toString())}ToBoolean(e){return e=="true"}LineStrip(e,n="white",i=1,r="round"){this._context2D.lineWidth=i,this._context2D.beginPath(),this._context2D.strokeStyle=n,this._context2D.lineJoin=r,this._context2D.moveTo(e[0].x,e[0].y);for(let o=1;o<e.length;o++)this._context2D.lineTo(e[o].x,e[o].y);this._context2D.stroke()}RectCircleStrip(e,n,i,r="white",o=50,s=1){const a=360/i.length;for(let l=0;l<i.length;l++){const u=l*a,c=0,d=0,h=o,m=c+h*Math.cos(this.ToRadian(u)),_=d+h*Math.sin(this.ToRadian(u));this.Translate(e,n),this.Translate(m,_),this.Rotate(this.ToRadian(u)),this.DrawFillRect(0,0,i[l],s,r),this.ResetTransform()}}};Dt(Ys,"_instance");let Qf=Ys;class OE{constructor(){Dt(this,"_freqBin",[20,60,250,500]);Dt(this,"_audioElement");this._audioElement=document.getElementById("audioElement")}}function un(t){if(this.size=t|0,this.size<=1||this.size&this.size-1)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=t<<1;for(var e=new Array(this.size*2),n=0;n<e.length;n+=2){const l=Math.PI*n/this.size;e[n]=Math.cos(l),e[n+1]=-Math.sin(l)}this.table=e;for(var i=0,r=1;this.size>r;r<<=1)i++;this._width=i%2===0?i-1:i,this._bitrev=new Array(1<<this._width);for(var o=0;o<this._bitrev.length;o++){this._bitrev[o]=0;for(var s=0;s<this._width;s+=2){var a=this._width-s-2;this._bitrev[o]|=(o>>>s&3)<<a}}this._out=null,this._data=null,this._inv=0}var FE=un;un.prototype.fromComplexArray=function(e,n){for(var i=n||new Array(e.length>>>1),r=0;r<e.length;r+=2)i[r>>>1]=e[r];return i};un.prototype.createComplexArray=function(){const e=new Array(this._csize);for(var n=0;n<e.length;n++)e[n]=0;return e};un.prototype.toComplexArray=function(e,n){for(var i=n||this.createComplexArray(),r=0;r<i.length;r+=2)i[r]=e[r>>>1],i[r+1]=0;return i};un.prototype.completeSpectrum=function(e){for(var n=this._csize,i=n>>>1,r=2;r<i;r+=2)e[n-r]=e[r],e[n-r+1]=-e[r+1]};un.prototype.transform=function(e,n){if(e===n)throw new Error("Input and output buffers must be different");this._out=e,this._data=n,this._inv=0,this._transform4(),this._out=null,this._data=null};un.prototype.realTransform=function(e,n){if(e===n)throw new Error("Input and output buffers must be different");this._out=e,this._data=n,this._inv=0,this._realTransform4(),this._out=null,this._data=null};un.prototype.inverseTransform=function(e,n){if(e===n)throw new Error("Input and output buffers must be different");this._out=e,this._data=n,this._inv=1,this._transform4();for(var i=0;i<e.length;i++)e[i]/=this.size;this._out=null,this._data=null};un.prototype._transform4=function(){var e=this._out,n=this._csize,i=this._width,r=1<<i,o=n/r<<1,s,a,l=this._bitrev;if(o===4)for(s=0,a=0;s<n;s+=o,a++){const x=l[a];this._singleTransform2(s,x,r)}else for(s=0,a=0;s<n;s+=o,a++){const x=l[a];this._singleTransform4(s,x,r)}var u=this._inv?-1:1,c=this.table;for(r>>=2;r>=2;r>>=2){o=n/r<<1;var d=o>>>2;for(s=0;s<n;s+=o)for(var h=s+d,m=s,_=0;m<h;m+=2,_+=r){const x=m,p=x+d,f=p+d,v=f+d,g=e[x],y=e[x+1],E=e[p],T=e[p+1],w=e[f],b=e[f+1],S=e[v],A=e[v+1],B=g,$=y,N=c[_],z=u*c[_+1],H=E*N-T*z,Z=E*z+T*N,W=c[2*_],P=u*c[2*_+1],G=w*W-b*P,O=w*P+b*W,U=c[3*_],F=u*c[3*_+1],ee=S*U-A*F,ie=S*F+A*U,ne=B+G,ue=$+O,ge=B-G,me=$-O,be=H+ee,Ye=Z+ie,Te=u*(H-ee),k=u*(Z-ie),qe=ne+be,_e=ue+Ye,he=ne-be,we=ue-Ye,Ve=ge+k,Ue=me-Te,Pe=ge-k,Oe=me+Te;e[x]=qe,e[x+1]=_e,e[p]=Ve,e[p+1]=Ue,e[f]=he,e[f+1]=we,e[v]=Pe,e[v+1]=Oe}}};un.prototype._singleTransform2=function(e,n,i){const r=this._out,o=this._data,s=o[n],a=o[n+1],l=o[n+i],u=o[n+i+1],c=s+l,d=a+u,h=s-l,m=a-u;r[e]=c,r[e+1]=d,r[e+2]=h,r[e+3]=m};un.prototype._singleTransform4=function(e,n,i){const r=this._out,o=this._data,s=this._inv?-1:1,a=i*2,l=i*3,u=o[n],c=o[n+1],d=o[n+i],h=o[n+i+1],m=o[n+a],_=o[n+a+1],x=o[n+l],p=o[n+l+1],f=u+m,v=c+_,g=u-m,y=c-_,E=d+x,T=h+p,w=s*(d-x),b=s*(h-p),S=f+E,A=v+T,B=g+b,$=y-w,N=f-E,z=v-T,H=g-b,Z=y+w;r[e]=S,r[e+1]=A,r[e+2]=B,r[e+3]=$,r[e+4]=N,r[e+5]=z,r[e+6]=H,r[e+7]=Z};un.prototype._realTransform4=function(){var e=this._out,n=this._csize,i=this._width,r=1<<i,o=n/r<<1,s,a,l=this._bitrev;if(o===4)for(s=0,a=0;s<n;s+=o,a++){const Me=l[a];this._singleRealTransform2(s,Me>>>1,r>>>1)}else for(s=0,a=0;s<n;s+=o,a++){const Me=l[a];this._singleRealTransform4(s,Me>>>1,r>>>1)}var u=this._inv?-1:1,c=this.table;for(r>>=2;r>=2;r>>=2){o=n/r<<1;var d=o>>>1,h=d>>>1,m=h>>>1;for(s=0;s<n;s+=o)for(var _=0,x=0;_<=m;_+=2,x+=r){var p=s+_,f=p+h,v=f+h,g=v+h,y=e[p],E=e[p+1],T=e[f],w=e[f+1],b=e[v],S=e[v+1],A=e[g],B=e[g+1],$=y,N=E,z=c[x],H=u*c[x+1],Z=T*z-w*H,W=T*H+w*z,P=c[2*x],G=u*c[2*x+1],O=b*P-S*G,U=b*G+S*P,F=c[3*x],ee=u*c[3*x+1],ie=A*F-B*ee,ne=A*ee+B*F,ue=$+O,ge=N+U,me=$-O,be=N-U,Ye=Z+ie,Te=W+ne,k=u*(Z-ie),qe=u*(W-ne),_e=ue+Ye,he=ge+Te,we=me+qe,Ve=be-k;if(e[p]=_e,e[p+1]=he,e[f]=we,e[f+1]=Ve,_===0){var Ue=ue-Ye,Pe=ge-Te;e[v]=Ue,e[v+1]=Pe;continue}if(_!==m){var Oe=me,et=-be,ut=ue,R=-ge,M=-u*qe,I=-u*k,re=-u*Te,te=-u*Ye,se=Oe+M,Se=et+I,ae=ut+te,q=R-re,Ae=s+h-_,Ee=s+d-_;e[Ae]=se,e[Ae+1]=Se,e[Ee]=ae,e[Ee+1]=q}}}};un.prototype._singleRealTransform2=function(e,n,i){const r=this._out,o=this._data,s=o[n],a=o[n+i],l=s+a,u=s-a;r[e]=l,r[e+1]=0,r[e+2]=u,r[e+3]=0};un.prototype._singleRealTransform4=function(e,n,i){const r=this._out,o=this._data,s=this._inv?-1:1,a=i*2,l=i*3,u=o[n],c=o[n+i],d=o[n+a],h=o[n+l],m=u+d,_=u-d,x=c+h,p=s*(c-h),f=m+x,v=_,g=-p,y=m-x,E=_,T=p;r[e]=f,r[e+1]=0,r[e+2]=v,r[e+3]=g,r[e+4]=y,r[e+5]=0,r[e+6]=E,r[e+7]=T};const kE=ts(FE);class zE extends OE{constructor(n=2**14){super();Dt(this,"_N");Dt(this,"_data");Dt(this,"_sampleRate");Dt(this,"_lastAudioSource");this._N=n,this._data=new Float32Array,this._sampleRate=0,this._lastAudioSource="",Qe.oncanplaythrough=async()=>{if(Qe.src===this._lastAudioSource)return;this._lastAudioSource=Qe.src;const o=await(await(await fetch(Qe.src)).blob()).arrayBuffer(),s=new AudioContext,a=await s.decodeAudioData(o);console.log(a),this._sampleRate=a.sampleRate,this._data=a.getChannelData(0),await s.close()}}GetPeakMaxArray(){if(Qe.paused||Qe.currentTime===0)return[];const n=Number.parseInt((this._audioElement.currentTime*this._sampleRate).toString()),i=new Float32Array(this._N);for(let a=0;a<this._N;a++){const l=a+n;i[a]=this._data[l]*(.54-.46*Math.cos(2*Math.PI*(a/(this._N-1))))}const r=new kE(this._N),o=r.createComplexArray();r.realTransform(o,i);const s=[];for(let a=0;a<this._N/2;a++){const l=a*this._sampleRate/this._N,u=o[a*2],c=o[a*2+1],d=Math.sqrt(u*u+c*c);for(let h=0;h<this._freqBin.length-1;h++)l>this._freqBin[h]&&l<=this._freqBin[h+1]&&s.push(d)}return s}}const Qe=document.getElementById("audioElement");function pm(t){const e=Math.floor(t/60),n=Math.floor(t%60);let i=`${e}`,r=`${n}`;return e<10&&(i=`0${i}`),n<10&&(r=`0${r}`),`${i}:${r}`}function mm(t){return t*Math.PI/180}function BE(t,e,n){(t>360||t<0||e>100||e<0||n>100||n<0)&&console.error(`The given HSV values are not in valid range!
`);const i=t,r=e/100,o=n/100,s=(a,l=(a+i/60)%6)=>o-o*r*Math.max(Math.min(l,4-l,1),0);return[s(5),s(3),s(1)]}const x0=new zE;function HE(t,e){for(let n=0;n<e.length;n++){const r=n*8+(t.Width()/2-e.length*8/2),o=t.Height(),s=e[n]*.25;t.DrawFillRect(r,o,8,-s,"cyan")}}function GE(t,e){if(!e.length)return;const n=8,i=e.reduce((o,s)=>o+s)/e.length,r=e.map(o=>o*.25);t.RectCircleStrip(t.Width()/2,t.Height()/2,r,"red",25+i,n)}function VE(t){const e=Qf.GetInstance(t);e.Clear("rgb(51, 51, 51)");const n=x0.GetPeakMaxArray();HE(e,n),GE(e,n)}function WE({width:t,height:e}){const n=_0({contextId:"2d",render:VE});return X.jsx("canvas",{id:"canvas2D",ref:n,width:t,height:e})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="156",jE=0,gm=1,XE=2,y0=1,$E=2,gi=3,cr=0,sn=1,xi=2,or=0,ko=1,vm=2,_m=3,xm=4,YE=5,go=100,qE=101,KE=102,ym=103,Sm=104,ZE=200,QE=201,JE=202,eM=203,S0=204,E0=205,tM=206,nM=207,iM=208,rM=209,oM=210,sM=0,aM=1,lM=2,Jf=3,uM=4,cM=5,fM=6,dM=7,M0=0,hM=1,pM=2,sr=0,mM=1,gM=2,vM=3,_M=4,xM=5,T0=300,$o=301,Yo=302,ed=303,td=304,Uu=306,nd=1e3,Wn=1001,id=1002,qt=1003,Em=1004,Mc=1005,An=1006,yM=1007,ha=1008,ar=1009,SM=1010,EM=1011,mh=1012,w0=1013,Yi=1014,qi=1015,pa=1016,A0=1017,C0=1018,Nr=1020,MM=1021,jn=1023,TM=1024,wM=1025,Ur=1026,qo=1027,AM=1028,R0=1029,CM=1030,b0=1031,P0=1033,Tc=33776,wc=33777,Ac=33778,Cc=33779,Mm=35840,Tm=35841,wm=35842,Am=35843,RM=36196,Cm=37492,Rm=37496,bm=37808,Pm=37809,Lm=37810,Dm=37811,Nm=37812,Um=37813,Im=37814,Om=37815,Fm=37816,km=37817,zm=37818,Bm=37819,Hm=37820,Gm=37821,Rc=36492,Vm=36494,Wm=36495,bM=36283,jm=36284,Xm=36285,$m=36286,L0=3e3,Ir=3001,PM=3200,LM=3201,DM=0,NM=1,Or="",at="srgb",ai="srgb-linear",Iu="display-p3",bc=7680,UM=519,IM=512,OM=513,FM=514,kM=515,zM=516,BM=517,HM=518,GM=519,Ym=35044,qm="300 es",rd=1035,Mi=2e3,ou=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Km=1234567;const Gs=Math.PI/180,ma=180/Math.PI;function ss(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function gh(t,e){return(t%e+e)%e}function VM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function WM(t,e,n){return t!==e?(n-t)/(e-t):0}function Vs(t,e,n){return(1-n)*t+n*e}function jM(t,e,n,i){return Vs(t,e,1-Math.exp(-n*i))}function XM(t,e=1){return e-Math.abs(gh(t,e*2)-e)}function $M(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function YM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function qM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function KM(t,e){return t+Math.random()*(e-t)}function ZM(t){return t*(.5-Math.random())}function QM(t){t!==void 0&&(Km=t);let e=Km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JM(t){return t*Gs}function e1(t){return t*ma}function od(t){return(t&t-1)===0&&t!==0}function t1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function su(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function n1(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),_=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*m,a*u);break;case"YXY":t.set(l*m,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Dl={DEG2RAD:Gs,RAD2DEG:ma,generateUUID:ss,clamp:Kt,euclideanModulo:gh,mapLinear:VM,inverseLerp:WM,lerp:Vs,damp:jM,pingpong:XM,smoothstep:$M,smootherstep:YM,randInt:qM,randFloat:KM,randFloatSpread:ZM,seededRandom:QM,degToRad:JM,radToDeg:e1,isPowerOfTwo:od,ceilPowerOfTwo:t1,floorPowerOfTwo:su,setQuaternionFromProperEuler:n1,normalize:Xt,denormalize:vo};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,o,s,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],f=r[6],v=r[1],g=r[4],y=r[7],E=r[2],T=r[5],w=r[8];return o[0]=s*x+a*v+l*E,o[3]=s*p+a*g+l*T,o[6]=s*f+a*y+l*w,o[1]=u*x+c*v+d*E,o[4]=u*p+c*g+d*T,o[7]=u*f+c*y+d*w,o[2]=h*x+m*v+_*E,o[5]=h*p+m*g+_*T,o[8]=h*f+m*y+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,m=u*o-s*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new ze;function D0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function au(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function i1(){const t=au("canvas");return t.style.display="block",t}const Zm={};function Ws(t){t in Zm||(Zm[t]=!0,console.warn(t))}function zo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const r1=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),o1=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function s1(t){return t.convertSRGBToLinear().applyMatrix3(o1)}function a1(t){return t.applyMatrix3(r1).convertLinearToSRGB()}const l1={[ai]:t=>t,[at]:t=>t.convertSRGBToLinear(),[Iu]:s1},u1={[ai]:t=>t,[at]:t=>t.convertLinearToSRGB(),[Iu]:a1},In={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return ai},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=l1[e],r=u1[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Kr;class N0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=au("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=au("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=zo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zo(n[i]/255)*255):n[i]=zo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c1=0;class U0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ss(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Dc(r[s].image)):o.push(Dc(r[s]))}else o=Dc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Dc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?N0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f1=0;class gn extends os{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=Wn,r=Wn,o=An,s=ha,a=jn,l=ar,u=gn.DEFAULT_ANISOTROPY,c=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=ss(),this.name="",this.source=new U0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ir?at:Or),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nd:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nd:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?Ir:L0}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ir?at:Or}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=T0;gn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,y=(m+1)/2,E=(f+1)/2,T=(c+h)/4,w=(d+x)/4,b=(_+p)/4;return g>y&&g>E?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=T/i,o=w/i):y>E?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=T/r,o=b/r):E<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(E),i=w/o,r=b/o),this.set(i,r,o,n),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(h-c)/v,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d1 extends os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ir?at:Or),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:An,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new U0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vr extends d1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class I0 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class h1 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],_=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||u!==m||c!==_){let p=1-a;const f=l*h+u*m+c*_+d*x,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const E=Math.sqrt(g),T=Math.atan2(E,f*v);p=Math.sin(p*T)/E,a=Math.sin(a*T)/E}const y=a*v;if(l=l*p+h*y,u=u*p+m*y,c=c*p+_*y,d=d*p+x*y,p===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],m=o[s+2],_=o[s+3];return e[n]=a*_+c*d+l*m-u*h,e[n+1]=l*_+c*h+u*d-a*m,e[n+2]=u*_+c*m+a*h-l*d,e[n+3]=c*_-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),_=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d-h*m*_;break;case"YXZ":this._x=h*c*d+u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d+h*m*_;break;case"ZXY":this._x=h*c*d-u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d-h*m*_;break;case"ZYX":this._x=h*c*d-u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d+h*m*_;break;case"YZX":this._x=h*c*d+u*m*_,this._y=u*m*d+h*c*_,this._z=u*c*_-h*m*d,this._w=u*c*d-h*m*_;break;case"XZY":this._x=h*c*d-u*m*_,this._y=u*m*d-h*c*_,this._z=u*c*_+h*m*d,this._w=u*c*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,c=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=u*l+h*-o+c*-a-d*-s,this.y=c*l+h*-s+d*-o-u*-a,this.z=d*l+h*-a+u*-s-c*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new Y,Qm=new Ta;class wa{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox),Zr.applyMatrix4(e.matrixWorld),this.union(Zr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)fi.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(fi)}else r.boundingBox===null&&r.computeBoundingBox(),Zr.copy(r.boundingBox),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),qa.subVectors(this.max,ys),Qr.subVectors(e.a,ys),Jr.subVectors(e.b,ys),eo.subVectors(e.c,ys),Oi.subVectors(Jr,Qr),Fi.subVectors(eo,Jr),xr.subVectors(Qr,eo);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-xr.z,xr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,xr.z,0,-xr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-xr.y,xr.x,0];return!Uc(n,Qr,Jr,eo,qa)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,Qr,Jr,eo,qa))?!1:(Ka.crossVectors(Oi,Fi),n=[Ka.x,Ka.y,Ka.z],Uc(n,Qr,Jr,eo,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],fi=new Y,Zr=new wa,Qr=new Y,Jr=new Y,eo=new Y,Oi=new Y,Fi=new Y,xr=new Y,ys=new Y,qa=new Y,Ka=new Y,yr=new Y;function Uc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){yr.fromArray(t,o);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=n.dot(yr),c=i.dot(yr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const p1=new wa,Ss=new Y,Ic=new Y;class vh{constructor(e=new Y,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):p1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const n=Ss.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(Ic)),this.expandByPoint(Ss.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new Y,Oc=new Y,Za=new Y,ki=new Y,Fc=new Y,Qa=new Y,kc=new Y;class m1{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(Oc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Za),a=ki.dot(this.direction),l=-ki.dot(Za),u=ki.lengthSq(),c=Math.abs(1-s*s);let d,h,m,_;if(c>0)if(d=s*l-a,h=s*a-l,_=o*c,d>=0)if(h>=-_)if(h<=_){const x=1/c;d*=x,h*=x,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Oc).addScaledVector(Za,h),m}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,o){Fc.subVectors(n,e),Qa.subVectors(i,e),kc.crossVectors(Fc,Qa);let s=this.direction.dot(kc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Qa.crossVectors(ki,Qa));if(l<0)return null;const u=a*this.direction.dot(Fc.cross(ki));if(u<0||l+u>s)return null;const c=-a*ki.dot(kc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,o,s,a,l,u,c,d,h,m,_,x,p){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,m,_,x,p)}set(e,n,i,r,o,s,a,l,u,c,d,h,m,_,x,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/to.setFromMatrixColumn(e,0).length(),o=1/to.setFromMatrixColumn(e,1).length(),s=1/to.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,m=s*d,_=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+_*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=_+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,_=u*c,x=u*d;n[0]=h+x*a,n[4]=_*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=m*a-_,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,_=u*c,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,m=s*d,_=a*c,x=a*d;n[0]=l*c,n[4]=_*u-m,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=m*u-_,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,m=s*u,_=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=s*c,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g1,e,v1)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),zi.crossVectors(i,fn),zi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),zi.crossVectors(i,fn)),zi.normalize(),Ja.crossVectors(fn,zi),r[0]=zi.x,r[4]=Ja.x,r[8]=fn.x,r[1]=zi.y,r[5]=Ja.y,r[9]=fn.y,r[2]=zi.z,r[6]=Ja.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],f=i[14],v=i[3],g=i[7],y=i[11],E=i[15],T=r[0],w=r[4],b=r[8],S=r[12],A=r[1],B=r[5],$=r[9],N=r[13],z=r[2],H=r[6],Z=r[10],W=r[14],P=r[3],G=r[7],O=r[11],U=r[15];return o[0]=s*T+a*A+l*z+u*P,o[4]=s*w+a*B+l*H+u*G,o[8]=s*b+a*$+l*Z+u*O,o[12]=s*S+a*N+l*W+u*U,o[1]=c*T+d*A+h*z+m*P,o[5]=c*w+d*B+h*H+m*G,o[9]=c*b+d*$+h*Z+m*O,o[13]=c*S+d*N+h*W+m*U,o[2]=_*T+x*A+p*z+f*P,o[6]=_*w+x*B+p*H+f*G,o[10]=_*b+x*$+p*Z+f*O,o[14]=_*S+x*N+p*W+f*U,o[3]=v*T+g*A+y*z+E*P,o[7]=v*w+g*B+y*H+E*G,o[11]=v*b+g*$+y*Z+E*O,o[15]=v*S+g*N+y*W+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],f=e[15];return _*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+x*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*c-o*l*c)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],f=e[15],v=d*p*u-x*h*u+x*l*m-a*p*m-d*l*f+a*h*f,g=_*h*u-c*p*u-_*l*m+s*p*m+c*l*f-s*h*f,y=c*x*u-_*d*u+_*a*m-s*x*m-c*a*f+s*d*f,E=_*d*l-c*x*l-_*a*h+s*x*h+c*a*p-s*d*p,T=n*v+i*g+r*y+o*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(x*h*o-d*p*o-x*r*m+i*p*m+d*r*f-i*h*f)*w,e[2]=(a*p*o-x*l*o+x*r*u-i*p*u-a*r*f+i*l*f)*w,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(c*p*o-_*h*o+_*r*m-n*p*m-c*r*f+n*h*f)*w,e[6]=(_*l*o-s*p*o-_*r*u+n*p*u+s*r*f-n*l*f)*w,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*m+n*l*m)*w,e[8]=y*w,e[9]=(_*d*o-c*x*o-_*i*m+n*x*m+c*i*f-n*d*f)*w,e[10]=(s*x*o-_*a*o+_*i*u-n*x*u-s*i*f+n*a*f)*w,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*m-n*a*m)*w,e[12]=E*w,e[13]=(c*x*r-_*d*r+_*i*h-n*x*h-c*i*p+n*d*p)*w,e[14]=(_*a*r-s*x*r-_*i*l+n*x*l+s*i*p-n*a*p)*w,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,m=o*c,_=o*d,x=s*c,p=s*d,f=a*d,v=l*u,g=l*c,y=l*d,E=i.x,T=i.y,w=i.z;return r[0]=(1-(x+f))*E,r[1]=(m+y)*E,r[2]=(_-g)*E,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(h+f))*T,r[6]=(p+v)*T,r[7]=0,r[8]=(_+g)*w,r[9]=(p-v)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=to.set(r[0],r[1],r[2]).length();const s=to.set(r[4],r[5],r[6]).length(),a=to.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/o,c=1/s,d=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,n.setFromRotationMatrix(On),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Mi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===Mi)m=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===ou)m=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Mi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*c;let _,x;if(a===Mi)_=(s+o)*d,x=-2*d;else if(a===ou)_=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const to=new Y,On=new Ot,g1=new Y(0,0,0),v1=new Y(1,1,1),zi=new Y,Ja=new Y,fn=new Y,Jm=new Ot,eg=new Ta;class Ou{constructor(e=0,n=0,i=0,r=Ou.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ou.DEFAULT_ORDER="XYZ";class O0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _1=0;const tg=new Y,no=new Ta,hi=new Ot,el=new Y,Es=new Y,x1=new Y,y1=new Ta,ng=new Y(1,0,0),ig=new Y(0,1,0),rg=new Y(0,0,1),S1={type:"added"},E1={type:"removed"};class vn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new Y,n=new Ou,i=new Ta,r=new Y(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ze}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new O0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,n){return no.setFromAxisAngle(e,n),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,n){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?el.copy(e):el.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Es,el,this.up):hi.lookAt(el,Es,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),no.setFromRotationMatrix(hi),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(S1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,x1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new Y(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new Y,pi=new Y,zc=new Y,mi=new Y,io=new Y,ro=new Y,og=new Y,Bc=new Y,Hc=new Y,Gc=new Y;let tl=!1;class Gn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Fn.subVectors(r,n),pi.subVectors(i,n),zc.subVectors(e,n);const s=Fn.dot(Fn),a=Fn.dot(pi),l=Fn.dot(zc),u=pi.dot(pi),c=pi.dot(zc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(u*l-a*c)*h,_=(s*c-a*l)*h;return o.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi),mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,n,i,r,o,s,a,l){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,mi),l.setScalar(0),l.addScaledVector(o,mi.x),l.addScaledVector(s,mi.y),l.addScaledVector(a,mi.z),l}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),pi.subVectors(e,n),Fn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Fn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;io.subVectors(r,i),ro.subVectors(o,i),Bc.subVectors(e,i);const l=io.dot(Bc),u=ro.dot(Bc);if(l<=0&&u<=0)return n.copy(i);Hc.subVectors(e,r);const c=io.dot(Hc),d=ro.dot(Hc);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(io,s);Gc.subVectors(e,o);const m=io.dot(Gc),_=ro.dot(Gc);if(_>=0&&m<=_)return n.copy(o);const x=m*u-l*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(ro,a);const p=c*_-m*d;if(p<=0&&d-c>=0&&m-_>=0)return og.subVectors(o,r),a=(d-c)/(d-c+(m-_)),n.copy(r).addScaledVector(og,a);const f=1/(p+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(io,s).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let M1=0;class Fu extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=ko,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=S0,this.blendDst=E0,this.blendEquation=go,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Jf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=UM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bc,this.stencilZFail=bc,this.stencilZPass=bc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=In.workingColorSpace){return this.r=e,this.g=n,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=In.workingColorSpace){if(e=gh(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Vc(s,o,e+1/3),this.g=Vc(s,o,e),this.b=Vc(s,o,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,n=at){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=at){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return In.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Kt(Ht.r*255,0,255))*65536+Math.round(Kt(Ht.g*255,0,255))*256+Math.round(Kt(Ht.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=In.workingColorSpace){In.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=In.workingColorSpace){return In.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=at){In.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==at?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kn),kn.h+=e,kn.s+=n,kn.l+=i,this.setHSL(kn.h,kn.s,kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kn),e.getHSL(nl);const i=Vs(kn.h,nl.h,n),r=Vs(kn.s,nl.s,n),o=Vs(kn.l,nl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new nt;nt.NAMES=F0;class lu extends Fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=M0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new Y,il=new Je;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ym,this.updateRange={offset:0,count:-1},this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ym&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class k0 extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z0 extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let T1=0;const Mn=new Ot,Wc=new vn,oo=new Y,dn=new wa,Ms=new wa,bt=new Y;class mr extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T1++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D0(e)?z0:k0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ri(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];dn.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(dn.min,Ms.min),dn.expandByPoint(bt),bt.addVectors(dn.max,Ms.max),dn.expandByPoint(bt)):(dn.expandByPoint(Ms.min),dn.expandByPoint(Ms.max))}dn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)bt.fromBufferAttribute(a,u),l&&(oo.fromBufferAttribute(e,u),bt.add(oo)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new Y,c[A]=new Y;const d=new Y,h=new Y,m=new Y,_=new Je,x=new Je,p=new Je,f=new Y,v=new Y;function g(A,B,$){d.fromArray(r,A*3),h.fromArray(r,B*3),m.fromArray(r,$*3),_.fromArray(s,A*2),x.fromArray(s,B*2),p.fromArray(s,$*2),h.sub(d),m.sub(d),x.sub(_),p.sub(_);const N=1/(x.x*p.y-p.x*x.y);isFinite(N)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(N),v.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(N),u[A].add(f),u[B].add(f),u[$].add(f),c[A].add(v),c[B].add(v),c[$].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,B=y.length;A<B;++A){const $=y[A],N=$.start,z=$.count;for(let H=N,Z=N+z;H<Z;H+=3)g(i[H+0],i[H+1],i[H+2])}const E=new Y,T=new Y,w=new Y,b=new Y;function S(A){w.fromArray(o,A*3),b.copy(w);const B=u[A];E.copy(B),E.sub(w.multiplyScalar(w.dot(B))).normalize(),T.crossVectors(b,B);const N=T.dot(c[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=N}for(let A=0,B=y.length;A<B;++A){const $=y[A],N=$.start,z=$.count;for(let H=N,Z=N+z;H<Z;H+=3)S(i[H+0]),S(i[H+1]),S(i[H+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new Y,o=new Y,s=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*c;for(let f=0;f<c;f++)h[_++]=u[m++]}return new ii(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sg=new Ot,Sr=new m1,rl=new vh,ag=new Y,so=new Y,ao=new Y,lo=new Y,jc=new Y,ol=new Y,sl=new Je,al=new Je,ll=new Je,lg=new Y,ug=new Y,cg=new Y,ul=new Y,cl=new Y;class ei extends vn{constructor(e=new mr,n=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ol.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(jc.fromBufferAttribute(d,e),s?ol.addScaledVector(jc,c):ol.addScaledVector(jc.sub(n),c))}n.add(ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(o),Sr.copy(e.ray).recast(e.near),!(rl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(rl,ag)===null||Sr.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(sg.copy(o).invert(),Sr.copy(e.ray).applyMatrix4(sg),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=s[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,E=g;y<E;y+=3){const T=a.getX(y),w=a.getX(y+1),b=a.getX(y+2);r=fl(this,f,e,i,u,c,d,T,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const v=a.getX(p),g=a.getX(p+1),y=a.getX(p+2);r=fl(this,s,e,i,u,c,d,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],f=s[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,E=g;y<E;y+=3){const T=y,w=y+1,b=y+2;r=fl(this,f,e,i,u,c,d,T,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,f=x;p<f;p+=3){const v=p,g=p+1,y=p+2;r=fl(this,s,e,i,u,c,d,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function w1(t,e,n,i,r,o,s,a){let l;if(e.side===sn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===cr,a),l===null)return null;cl.copy(a),cl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(cl);return u<n.near||u>n.far?null:{distance:u,point:cl.clone(),object:t}}function fl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,so),t.getVertexPosition(l,ao),t.getVertexPosition(u,lo);const c=w1(t,e,n,i,so,ao,lo,ul);if(c){r&&(sl.fromBufferAttribute(r,a),al.fromBufferAttribute(r,l),ll.fromBufferAttribute(r,u),c.uv=Gn.getInterpolation(ul,so,ao,lo,sl,al,ll,new Je)),o&&(sl.fromBufferAttribute(o,a),al.fromBufferAttribute(o,l),ll.fromBufferAttribute(o,u),c.uv1=Gn.getInterpolation(ul,so,ao,lo,sl,al,ll,new Je),c.uv2=c.uv1),s&&(lg.fromBufferAttribute(s,a),ug.fromBufferAttribute(s,l),cg.fromBufferAttribute(s,u),c.normal=Gn.getInterpolation(ul,so,ao,lo,lg,ug,cg,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};Gn.getNormal(so,ao,lo,d.normal),c.face=d}return c}class as extends mr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,s,o,0),_("z","y","x",1,-1,i,n,-e,s,o,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,o,4),_("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new ri(u,3)),this.setAttribute("normal",new ri(c,3)),this.setAttribute("uv",new ri(d,2));function _(x,p,f,v,g,y,E,T,w,b,S){const A=y/w,B=E/b,$=y/2,N=E/2,z=T/2,H=w+1,Z=b+1;let W=0,P=0;const G=new Y;for(let O=0;O<Z;O++){const U=O*B-N;for(let F=0;F<H;F++){const ee=F*A-$;G[x]=ee*v,G[p]=U*g,G[f]=z,u.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[f]=T>0?1:-1,c.push(G.x,G.y,G.z),d.push(F/w),d.push(1-O/b),W+=1}}for(let O=0;O<b;O++)for(let U=0;U<w;U++){const F=h+U+H*O,ee=h+U+H*(O+1),ie=h+(U+1)+H*(O+1),ne=h+(U+1)+H*O;l.push(F,ee,ne),l.push(ee,ie,ne),P+=6}a.addGroup(m,P,S),m+=P,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ko(t[n]);for(const r in i)e[r]=i[r]}return e}function A1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B0(t){return t.getRenderTarget()===null?t.outputColorSpace:ai}const C1={clone:Ko,merge:$t};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wr extends Fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=b1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends H0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const uo=-90,co=1;class P1 extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Cn(uo,co,e,n);r.layers=this.layers,this.add(r);const o=new Cn(uo,co,e,n);o.layers=this.layers,this.add(o);const s=new Cn(uo,co,e,n);s.layers=this.layers,this.add(s);const a=new Cn(uo,co,e,n);a.layers=this.layers,this.add(a);const l=new Cn(uo,co,e,n);l.layers=this.layers,this.add(l);const u=new Cn(uo,co,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ou)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,u]=this.children,c=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class G0 extends gn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:$o,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L1 extends Vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ir?at:Or),this.texture=new G0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:An}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),o=new Wr({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:or});o.uniforms.tEquirect.value=n;const s=new ei(r,o),a=n.minFilter;return n.minFilter===ha&&(n.minFilter=An),new P1(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Xc=new Y,D1=new Y,N1=new ze;class wr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Xc.subVectors(i,n).cross(D1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Xc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||N1.getNormalMatrix(e),r=this.coplanarPoint(Xc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new vh,dl=new Y;class V0{constructor(e=new wr,n=new wr,i=new wr,r=new wr,o=new wr,s=new wr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],f=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-o,h-u,p-m,y-f).normalize(),i[1].setComponents(l+o,h+u,p+m,y+f).normalize(),i[2].setComponents(l+s,h+c,p+_,y+v).normalize(),i[3].setComponents(l-s,h-c,p-_,y-v).normalize(),i[4].setComponents(l-a,h-d,p-x,y-g).normalize(),n===Mi)i[5].setComponents(l+a,h+d,p+x,y+g).normalize();else if(n===ou)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function U1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,c,d){const h=c.array,m=c.updateRange;t.bindBuffer(d,u),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(o(d.buffer,u,c),d.version=u.version)}return{get:s,remove:a,update:l}}class _h extends mr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,m=[],_=[],x=[],p=[];for(let f=0;f<c;f++){const v=f*h-s;for(let g=0;g<u;g++){const y=g*d-o;_.push(y,-v,0),x.push(0,0,1),p.push(g/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const g=v+u*f,y=v+u*(f+1),E=v+1+u*(f+1),T=v+1+u*f;m.push(g,y,T),m.push(y,E,T)}this.setIndex(m),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(x,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.width,e.height,e.widthSegments,e.heightSegments)}}var I1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,B1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uT="gl_FragColor = linearToOutputTexel( gl_FragColor );",cT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ST=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ET=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,DT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,OT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,YT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,qT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,KT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ZT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ow=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Aw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Bw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xw=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:I1,alphahash_pars_fragment:O1,alphamap_fragment:F1,alphamap_pars_fragment:k1,alphatest_fragment:z1,alphatest_pars_fragment:B1,aomap_fragment:H1,aomap_pars_fragment:G1,begin_vertex:V1,beginnormal_vertex:W1,bsdfs:j1,iridescence_fragment:X1,bumpmap_pars_fragment:$1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:Z1,color_fragment:Q1,color_pars_fragment:J1,color_pars_vertex:eT,color_vertex:tT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:rT,displacementmap_pars_vertex:oT,displacementmap_vertex:sT,emissivemap_fragment:aT,emissivemap_pars_fragment:lT,colorspace_fragment:uT,colorspace_pars_fragment:cT,envmap_fragment:fT,envmap_common_pars_fragment:dT,envmap_pars_fragment:hT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:AT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:vT,fog_fragment:_T,fog_pars_fragment:xT,gradientmap_pars_fragment:yT,lightmap_fragment:ST,lightmap_pars_fragment:ET,lights_lambert_fragment:MT,lights_lambert_pars_fragment:TT,lights_pars_begin:wT,lights_toon_fragment:CT,lights_toon_pars_fragment:RT,lights_phong_fragment:bT,lights_phong_pars_fragment:PT,lights_physical_fragment:LT,lights_physical_pars_fragment:DT,lights_fragment_begin:NT,lights_fragment_maps:UT,lights_fragment_end:IT,logdepthbuf_fragment:OT,logdepthbuf_pars_fragment:FT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:zT,map_fragment:BT,map_pars_fragment:HT,map_particle_fragment:GT,map_particle_pars_fragment:VT,metalnessmap_fragment:WT,metalnessmap_pars_fragment:jT,morphcolor_vertex:XT,morphnormal_vertex:$T,morphtarget_pars_vertex:YT,morphtarget_vertex:qT,normal_fragment_begin:KT,normal_fragment_maps:ZT,normal_pars_fragment:QT,normal_pars_vertex:JT,normal_vertex:ew,normalmap_pars_fragment:tw,clearcoat_normal_fragment_begin:nw,clearcoat_normal_fragment_maps:iw,clearcoat_pars_fragment:rw,iridescence_pars_fragment:ow,opaque_fragment:sw,packing:aw,premultiplied_alpha_fragment:lw,project_vertex:uw,dithering_fragment:cw,dithering_pars_fragment:fw,roughnessmap_fragment:dw,roughnessmap_pars_fragment:hw,shadowmap_pars_fragment:pw,shadowmap_pars_vertex:mw,shadowmap_vertex:gw,shadowmask_pars_fragment:vw,skinbase_vertex:_w,skinning_pars_vertex:xw,skinning_vertex:yw,skinnormal_vertex:Sw,specularmap_fragment:Ew,specularmap_pars_fragment:Mw,tonemapping_fragment:Tw,tonemapping_pars_fragment:ww,transmission_fragment:Aw,transmission_pars_fragment:Cw,uv_pars_fragment:Rw,uv_pars_vertex:bw,uv_vertex:Pw,worldpos_vertex:Lw,background_vert:Dw,background_frag:Nw,backgroundCube_vert:Uw,backgroundCube_frag:Iw,cube_vert:Ow,cube_frag:Fw,depth_vert:kw,depth_frag:zw,distanceRGBA_vert:Bw,distanceRGBA_frag:Hw,equirect_vert:Gw,equirect_frag:Vw,linedashed_vert:Ww,linedashed_frag:jw,meshbasic_vert:Xw,meshbasic_frag:$w,meshlambert_vert:Yw,meshlambert_frag:qw,meshmatcap_vert:Kw,meshmatcap_frag:Zw,meshnormal_vert:Qw,meshnormal_frag:Jw,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:rA,meshtoon_frag:oA,points_vert:sA,points_frag:aA,shadow_vert:lA,shadow_frag:uA,sprite_vert:cA,sprite_frag:fA},ce={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Qn.physical={uniforms:$t([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const hl={r:0,b:0,g:0};function dA(t,e,n,i,r,o,s){const a=new nt(0);let l=o===!0?0:1,u,c,d=null,h=0,m=null;function _(p,f){let v=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Uu)?(c===void 0&&(c=new ei(new as(1,1,1),new Wr({name:"BackgroundCubeMaterial",uniforms:Ko(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=g.colorSpace!==at,(d!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new ei(new _h(2,2),new Wr({name:"BackgroundMaterial",uniforms:Ko(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=g.colorSpace!==at,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function x(p,f){p.getRGB(hl,B0(t)),i.buffers.color.setClear(hl.r,hl.g,hl.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_}}function hA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function d(z,H,Z,W,P){let G=!1;if(s){const O=x(W,Z,H);u!==O&&(u=O,m(u.object)),G=f(z,W,Z,P),G&&v(z,W,Z,P)}else{const O=H.wireframe===!0;(u.geometry!==W.id||u.program!==Z.id||u.wireframe!==O)&&(u.geometry=W.id,u.program=Z.id,u.wireframe=O,G=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(G||c)&&(c=!1,b(z,H,Z,W),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(z){return i.isWebGL2?t.bindVertexArray(z):o.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?t.deleteVertexArray(z):o.deleteVertexArrayOES(z)}function x(z,H,Z){const W=Z.wireframe===!0;let P=a[z.id];P===void 0&&(P={},a[z.id]=P);let G=P[H.id];G===void 0&&(G={},P[H.id]=G);let O=G[W];return O===void 0&&(O=p(h()),G[W]=O),O}function p(z){const H=[],Z=[],W=[];for(let P=0;P<r;P++)H[P]=0,Z[P]=0,W[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:W,object:z,attributes:{},index:null}}function f(z,H,Z,W){const P=u.attributes,G=H.attributes;let O=0;const U=Z.getAttributes();for(const F in U)if(U[F].location>=0){const ie=P[F];let ne=G[F];if(ne===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(ne=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(ne=z.instanceColor)),ie===void 0||ie.attribute!==ne||ne&&ie.data!==ne.data)return!0;O++}return u.attributesNum!==O||u.index!==W}function v(z,H,Z,W){const P={},G=H.attributes;let O=0;const U=Z.getAttributes();for(const F in U)if(U[F].location>=0){let ie=G[F];ie===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(ie=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(ie=z.instanceColor));const ne={};ne.attribute=ie,ie&&ie.data&&(ne.data=ie.data),P[F]=ne,O++}u.attributes=P,u.attributesNum=O,u.index=W}function g(){const z=u.newAttributes;for(let H=0,Z=z.length;H<Z;H++)z[H]=0}function y(z){E(z,0)}function E(z,H){const Z=u.newAttributes,W=u.enabledAttributes,P=u.attributeDivisors;Z[z]=1,W[z]===0&&(t.enableVertexAttribArray(z),W[z]=1),P[z]!==H&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,H),P[z]=H)}function T(){const z=u.newAttributes,H=u.enabledAttributes;for(let Z=0,W=H.length;Z<W;Z++)H[Z]!==z[Z]&&(t.disableVertexAttribArray(Z),H[Z]=0)}function w(z,H,Z,W,P,G,O){O===!0?t.vertexAttribIPointer(z,H,Z,P,G):t.vertexAttribPointer(z,H,Z,W,P,G)}function b(z,H,Z,W){if(i.isWebGL2===!1&&(z.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const P=W.attributes,G=Z.getAttributes(),O=H.defaultAttributeValues;for(const U in G){const F=G[U];if(F.location>=0){let ee=P[U];if(ee===void 0&&(U==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),U==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor)),ee!==void 0){const ie=ee.normalized,ne=ee.itemSize,ue=n.get(ee);if(ue===void 0)continue;const ge=ue.buffer,me=ue.type,be=ue.bytesPerElement,Ye=i.isWebGL2===!0&&(me===t.INT||me===t.UNSIGNED_INT||ee.gpuType===w0);if(ee.isInterleavedBufferAttribute){const Te=ee.data,k=Te.stride,qe=ee.offset;if(Te.isInstancedInterleavedBuffer){for(let _e=0;_e<F.locationSize;_e++)E(F.location+_e,Te.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let _e=0;_e<F.locationSize;_e++)y(F.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let _e=0;_e<F.locationSize;_e++)w(F.location+_e,ne/F.locationSize,me,ie,k*be,(qe+ne/F.locationSize*_e)*be,Ye)}else{if(ee.isInstancedBufferAttribute){for(let Te=0;Te<F.locationSize;Te++)E(F.location+Te,ee.meshPerAttribute);z.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Te=0;Te<F.locationSize;Te++)y(F.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Te=0;Te<F.locationSize;Te++)w(F.location+Te,ne/F.locationSize,me,ie,ne*be,ne/F.locationSize*Te*be,Ye)}}else if(O!==void 0){const ie=O[U];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(F.location,ie);break;case 3:t.vertexAttrib3fv(F.location,ie);break;case 4:t.vertexAttrib4fv(F.location,ie);break;default:t.vertexAttrib1fv(F.location,ie)}}}}T()}function S(){$();for(const z in a){const H=a[z];for(const Z in H){const W=H[Z];for(const P in W)_(W[P].object),delete W[P];delete H[Z]}delete a[z]}}function A(z){if(a[z.id]===void 0)return;const H=a[z.id];for(const Z in H){const W=H[Z];for(const P in W)_(W[P].object),delete W[P];delete H[Z]}delete a[z.id]}function B(z){for(const H in a){const Z=a[H];if(Z[z.id]===void 0)continue;const W=Z[z.id];for(const P in W)_(W[P].object),delete W[P];delete Z[z.id]}}function $(){N(),c=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:y,disableUnusedAttributes:T}}function pA(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,c){t.drawArrays(o,u,c),n.update(c,o,1)}function l(u,c,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,u,c,d),n.update(c,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function mA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=s||e.has("OES_texture_float"),E=g&&y,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:T}}function gA(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new wr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||o&&!p)o?c(null):u();else{const v=o?0:i,g=v*4;let y=f.clippingState||null;l.value=y,y=c(_,h,g,m);for(let E=0;E!==g;++E)y[E]=n[E];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const f=m+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let g=0,y=m;g!==x;++g,y+=4)s.copy(d[g]).applyMatrix4(v,a),s.normal.toArray(p,y),p[y+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function vA(t){let e=new WeakMap;function n(s,a){return a===ed?s.mapping=$o:a===td&&(s.mapping=Yo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===ed||a===td)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new L1(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class _A extends H0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lo=4,fg=[.125,.215,.35,.446,.526,.582],Cr=20,$c=new _A,dg=new nt;let Yc=null;const Ar=(1+Math.sqrt(5))/2,fo=1/Ar,hg=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Ar,fo),new Y(0,Ar,-fo),new Y(fo,0,Ar),new Y(-fo,0,Ar),new Y(Ar,fo,0),new Y(-Ar,fo,0)];class pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Yc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yc),e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$o||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:pa,format:jn,colorSpace:ai,depthBuffer:!1},r=mg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xA(o)),this._blurMaterial=yA(o,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,i,r){const a=new Cn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(dg),c.toneMapping=sr,c.autoClear=!1;const m=new lu({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new ei(new as,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(dg),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const g=this._cubeSize;pl(r,v*g,f>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$o||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ei(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;pl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,$c)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=hg[(r-1)%hg.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new ei(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Cr-1),x=o/_,p=isFinite(o)?1+Math.floor(c*x):Cr;p>Cr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cr}`);const f=[];let v=0;for(let w=0;w<Cr;++w){const b=w/x,S=Math.exp(-b*b/2);f.push(S),w===0?v+=S:w<p&&(v+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const y=this._sizeLods[r],E=3*y*(r>g-Lo?r-g+Lo:0),T=4*(this._cubeSize-y);pl(n,E,T,3*y,2*y),l.setRenderTarget(n),l.render(d,$c)}}function xA(t){const e=[],n=[],i=[];let r=t;const o=t-Lo+1+fg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Lo?l=fg[s-t+Lo-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,_=6,x=3,p=2,f=1,v=new Float32Array(x*_*m),g=new Float32Array(p*_*m),y=new Float32Array(f*_*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,b=T>2?0:-1,S=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];v.set(S,x*_*T),g.set(h,p*_*T);const A=[T,T,T,T,T,T];y.set(A,f*_*T)}const E=new mr;E.setAttribute("position",new ii(v,x)),E.setAttribute("uv",new ii(g,p)),E.setAttribute("faceIndex",new ii(y,f)),e.push(E),r>Lo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function mg(t,e,n){const i=new Vr(t,e,n);return i.texture.mapping=Uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yA(t,e,n){const i=new Float32Array(Cr),r=new Y(0,1,0);return new Wr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function gg(){return new Wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function vg(){return new Wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function xh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ed||l===td,c=l===$o||l===Yo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new pg(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new pg(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function EA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MA(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,f=x.length;p<f;p++)e.update(x[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,y=v.length;g<y;g+=3){const E=v[g+0],T=v[g+1],w=v[g+2];h.push(E,T,T,w,w,E)}}else if(_!==void 0){const v=_.array;x=_.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const E=g+0,T=g+1,w=g+2;h.push(E,T,T,w,w,E)}}else return;const p=new(D0(h)?z0:k0)(h,1);p.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,p)}function c(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function TA(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function d(h,m,_){if(_===0)return;let x,p;if(r)x=t,p="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[p](o,m,a,h*l,_),n.update(m,o,_)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d}function wA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AA(t,e){return t[0]-e[0]}function CA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function RA(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new Ut,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=_!==void 0?_.length:0;let p=o.get(c);if(p===void 0||p.count!==x){let H=function(){N.dispose(),o.delete(c),c.removeEventListener("dispose",H)};var m=H;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let A=c.attributes.position.count*S,B=1;A>e.maxTextureSize&&(B=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const $=new Float32Array(A*B*4*x),N=new I0($,A,B,x);N.type=qi,N.needsUpdate=!0;const z=S*4;for(let Z=0;Z<x;Z++){const W=T[Z],P=w[Z],G=b[Z],O=A*B*4*Z;for(let U=0;U<W.count;U++){const F=U*z;g===!0&&(s.fromBufferAttribute(W,U),$[O+F+0]=s.x,$[O+F+1]=s.y,$[O+F+2]=s.z,$[O+F+3]=0),y===!0&&(s.fromBufferAttribute(P,U),$[O+F+4]=s.x,$[O+F+5]=s.y,$[O+F+6]=s.z,$[O+F+7]=0),E===!0&&(s.fromBufferAttribute(G,U),$[O+F+8]=s.x,$[O+F+9]=s.y,$[O+F+10]=s.z,$[O+F+11]=G.itemSize===4?s.w:1)}}p={count:x,texture:N,size:new Je(A,B)},o.set(c,p),c.addEventListener("dispose",H)}let f=0;for(let g=0;g<h.length;g++)f+=h[g];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[c.id];if(x===void 0||x.length!==_){x=[];for(let y=0;y<_;y++)x[y]=[y,0];i[c.id]=x}for(let y=0;y<_;y++){const E=x[y];E[0]=y,E[1]=h[y]}x.sort(CA);for(let y=0;y<8;y++)y<_&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(AA);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const E=a[y],T=E[0],w=E[1];T!==Number.MAX_SAFE_INTEGER&&w?(p&&c.getAttribute("morphTarget"+y)!==p[T]&&c.setAttribute("morphTarget"+y,p[T]),f&&c.getAttribute("morphNormal"+y)!==f[T]&&c.setAttribute("morphNormal"+y,f[T]),r[y]=w,v+=w):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const g=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function bA(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const j0=new gn,X0=new I0,$0=new h1,Y0=new G0,_g=[],xg=[],yg=new Float32Array(16),Sg=new Float32Array(9),Eg=new Float32Array(4);function ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=_g[r];if(o===void 0&&(o=new Float32Array(r),_g[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ku(t,e){let n=xg[e];n===void 0&&(n=new Int32Array(e),xg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function UA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Eg.set(i),t.uniformMatrix2fv(this.addr,!1,Eg),Rt(n,i)}}function IA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Sg.set(i),t.uniformMatrix3fv(this.addr,!1,Sg),Rt(n,i)}}function OA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;yg.set(i),t.uniformMatrix4fv(this.addr,!1,yg),Rt(n,i)}}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function HA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function jA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||j0,r)}function XA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$0,r)}function $A(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Y0,r)}function YA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||X0,r)}function qA(t){switch(t){case 5126:return PA;case 35664:return LA;case 35665:return DA;case 35666:return NA;case 35674:return UA;case 35675:return IA;case 35676:return OA;case 5124:case 35670:return FA;case 35667:case 35671:return kA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return YA}}function KA(t,e){t.uniform1fv(this.addr,e)}function ZA(t,e){const n=ls(e,this.size,2);t.uniform2fv(this.addr,n)}function QA(t,e){const n=ls(e,this.size,3);t.uniform3fv(this.addr,n)}function JA(t,e){const n=ls(e,this.size,4);t.uniform4fv(this.addr,n)}function eC(t,e){const n=ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tC(t,e){const n=ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nC(t,e){const n=ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iC(t,e){t.uniform1iv(this.addr,e)}function rC(t,e){t.uniform2iv(this.addr,e)}function oC(t,e){t.uniform3iv(this.addr,e)}function sC(t,e){t.uniform4iv(this.addr,e)}function aC(t,e){t.uniform1uiv(this.addr,e)}function lC(t,e){t.uniform2uiv(this.addr,e)}function uC(t,e){t.uniform3uiv(this.addr,e)}function cC(t,e){t.uniform4uiv(this.addr,e)}function fC(t,e,n){const i=this.cache,r=e.length,o=ku(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||j0,o[s])}function dC(t,e,n){const i=this.cache,r=e.length,o=ku(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||$0,o[s])}function hC(t,e,n){const i=this.cache,r=e.length,o=ku(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Y0,o[s])}function pC(t,e,n){const i=this.cache,r=e.length,o=ku(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),Rt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||X0,o[s])}function mC(t){switch(t){case 5126:return KA;case 35664:return ZA;case 35665:return QA;case 35666:return JA;case 35674:return eC;case 35675:return tC;case 35676:return nC;case 5124:case 35670:return iC;case 35667:case 35671:return rC;case 35668:case 35672:return oC;case 35669:case 35673:return sC;case 5125:return aC;case 36294:return lC;case 36295:return uC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return fC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return pC}}class gC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=qA(n.type)}}class vC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=mC(n.type)}}class _C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function Mg(t,e){t.seq.push(e),t.map[e.id]=e}function xC(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const o=qc.exec(i),s=qc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Mg(n,u===void 0?new gC(a,t,e):new vC(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new _C(a),Mg(n,d)),n=d}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);xC(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Tg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let yC=0;function SC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function EC(t){switch(t){case ai:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function wg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+SC(t.getShaderSource(e),s)}else return r}function MC(t,e){const n=EC(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function TC(t,e){let n;switch(e){case mM:n="Linear";break;case gM:n="Reinhard";break;case vM:n="OptimizedCineon";break;case _M:n="ACESFilmic";break;case xM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wC(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function AC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ps(t){return t!==""}function Ag(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(t){return t.replace(RC,PC)}const bC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function PC(t,e){let n=ke[e];if(n===void 0){const i=bC.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}const LC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(t){return t.replace(LC,DC)}function DC(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function bg(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===y0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$E?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function UC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $o:case Yo:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function OC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case M0:e="ENVMAP_BLENDING_MULTIPLY";break;case hM:e="ENVMAP_BLENDING_MIX";break;case pM:e="ENVMAP_BLENDING_ADD";break}return e}function FC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kC(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=NC(n),u=UC(n),c=IC(n),d=OC(n),h=FC(n),m=n.isWebGL2?"":wC(n),_=AC(o),x=r.createProgram();let p,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ps).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ps).join(`
`),f.length>0&&(f+=`
`)):(p=[bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),f=[m,bg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?ke.tonemapping_pars_fragment:"",n.toneMapping!==sr?TC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,MC("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ps).join(`
`)),s=sd(s),s=Ag(s,n),s=Cg(s,n),a=sd(a),a=Ag(a,n),a=Cg(a,n),s=Rg(s),a=Rg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=v+p+s,y=v+f+a,E=Tg(r,r.VERTEX_SHADER,g),T=Tg(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,E),r.attachShader(x,T),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),A=r.getShaderInfoLog(E).trim(),B=r.getShaderInfoLog(T).trim();let $=!0,N=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,T);else{const z=wg(r,E,"vertex"),H=wg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+z+`
`+H)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||B==="")&&(N=!1);N&&(this.diagnostics={runnable:$,programLog:S,vertexShader:{log:A,prefix:p},fragmentShader:{log:B,prefix:f}})}r.deleteShader(E),r.deleteShader(T);let w;this.getUniforms=function(){return w===void 0&&(w=new Nl(r,x)),w};let b;return this.getAttributes=function(){return b===void 0&&(b=CC(r,x)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let zC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HC(e),n.set(e,i)),i}}class HC{constructor(e){this.id=zC++,this.code=e,this.usedTimes=0}}function GC(t,e,n,i,r,o,s){const a=new O0,l=new BC,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function p(S,A,B,$,N){const z=$.fog,H=N.geometry,Z=S.isMeshStandardMaterial?$.environment:null,W=(S.isMeshStandardMaterial?n:e).get(S.envMap||Z),P=W&&W.mapping===Uu?W.image.height:null,G=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const O=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,U=O!==void 0?O.length:0;let F=0;H.morphAttributes.position!==void 0&&(F=1),H.morphAttributes.normal!==void 0&&(F=2),H.morphAttributes.color!==void 0&&(F=3);let ee,ie,ne,ue;if(G){const rt=Qn[G];ee=rt.vertexShader,ie=rt.fragmentShader}else ee=S.vertexShader,ie=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const ge=t.getRenderTarget(),me=N.isInstancedMesh===!0,be=!!S.map,Ye=!!S.matcap,Te=!!W,k=!!S.aoMap,qe=!!S.lightMap,_e=!!S.bumpMap,he=!!S.normalMap,we=!!S.displacementMap,Ve=!!S.emissiveMap,Ue=!!S.metalnessMap,Pe=!!S.roughnessMap,Oe=S.anisotropy>0,et=S.clearcoat>0,ut=S.iridescence>0,R=S.sheen>0,M=S.transmission>0,I=Oe&&!!S.anisotropyMap,re=et&&!!S.clearcoatMap,te=et&&!!S.clearcoatNormalMap,se=et&&!!S.clearcoatRoughnessMap,Se=ut&&!!S.iridescenceMap,ae=ut&&!!S.iridescenceThicknessMap,q=R&&!!S.sheenColorMap,Ae=R&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,Me=!!S.specularColorMap,xe=!!S.specularIntensityMap,ye=M&&!!S.transmissionMap,Be=M&&!!S.thicknessMap,tt=!!S.gradientMap,D=!!S.alphaMap,fe=S.alphaTest>0,K=!!S.alphaHash,le=!!S.extensions,de=!!H.attributes.uv1,$e=!!H.attributes.uv2,ct=!!H.attributes.uv3;let xt=sr;return S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(xt=t.toneMapping),{isWebGL2:c,shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ie,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:me,instancingColor:me&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ai,map:be,matcap:Ye,envMap:Te,envMapMode:Te&&W.mapping,envMapCubeUVHeight:P,aoMap:k,lightMap:qe,bumpMap:_e,normalMap:he,displacementMap:h&&we,emissiveMap:Ve,normalMapObjectSpace:he&&S.normalMapType===NM,normalMapTangentSpace:he&&S.normalMapType===DM,metalnessMap:Ue,roughnessMap:Pe,anisotropy:Oe,anisotropyMap:I,clearcoat:et,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:ut,iridescenceMap:Se,iridescenceThicknessMap:ae,sheen:R,sheenColorMap:q,sheenRoughnessMap:Ae,specularMap:Ee,specularColorMap:Me,specularIntensityMap:xe,transmission:M,transmissionMap:ye,thicknessMap:Be,gradientMap:tt,opaque:S.transparent===!1&&S.blending===ko,alphaMap:D,alphaTest:fe,alphaHash:K,combine:S.combine,mapUv:be&&x(S.map.channel),aoMapUv:k&&x(S.aoMap.channel),lightMapUv:qe&&x(S.lightMap.channel),bumpMapUv:_e&&x(S.bumpMap.channel),normalMapUv:he&&x(S.normalMap.channel),displacementMapUv:we&&x(S.displacementMap.channel),emissiveMapUv:Ve&&x(S.emissiveMap.channel),metalnessMapUv:Ue&&x(S.metalnessMap.channel),roughnessMapUv:Pe&&x(S.roughnessMap.channel),anisotropyMapUv:I&&x(S.anisotropyMap.channel),clearcoatMapUv:re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:q&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(S.sheenRoughnessMap.channel),specularMapUv:Ee&&x(S.specularMap.channel),specularColorMapUv:Me&&x(S.specularColorMap.channel),specularIntensityMapUv:xe&&x(S.specularIntensityMap.channel),transmissionMapUv:ye&&x(S.transmissionMap.channel),thicknessMapUv:Be&&x(S.thicknessMap.channel),alphaMapUv:D&&x(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||Oe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:$e,vertexUv3s:ct,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(be||D),fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:F,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&S.map.colorSpace===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xi,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)A.push(B),A.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(v(A,S),g(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=_[S.type];let B;if(A){const $=Qn[A];B=C1.clone($.uniforms)}else B=S.uniforms;return B}function E(S,A){let B;for(let $=0,N=u.length;$<N;$++){const z=u[$];if(z.cacheKey===A){B=z,++B.usedTimes;break}}return B===void 0&&(B=new kC(t,A,S,o),u.push(B)),B}function T(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:b}}function VC(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function WC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,_,x,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=x,f.group=p),e++,f}function a(d,h,m,_,x,p){const f=s(d,h,m,_,x,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,_,x,p){const f=s(d,h,m,_,x,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||WC),i.length>1&&i.sort(h||Pg),r.length>1&&r.sort(h||Pg)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function jC(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Lg,t.set(i,[s])):r>=o.length?(s=new Lg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function XC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new nt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function $C(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YC=0;function qC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function KC(t,e){const n=new XC,i=$C(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new Y);const o=new Y,s=new Ot,a=new Ot;function l(c,d){let h=0,m=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let x=0,p=0,f=0,v=0,g=0,y=0,E=0,T=0,w=0,b=0;c.sort(qC);const S=d===!0?Math.PI:1;for(let B=0,$=c.length;B<$;B++){const N=c[B],z=N.color,H=N.intensity,Z=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=z.r*H*S,m+=z.g*H*S,_+=z.b*H*S;else if(N.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(N.sh.coefficients[P],H);else if(N.isDirectionalLight){const P=n.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const G=N.shadow,O=i.get(N);O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,r.directionalShadow[x]=O,r.directionalShadowMap[x]=W,r.directionalShadowMatrix[x]=N.shadow.matrix,y++}r.directional[x]=P,x++}else if(N.isSpotLight){const P=n.get(N);P.position.setFromMatrixPosition(N.matrixWorld),P.color.copy(z).multiplyScalar(H*S),P.distance=Z,P.coneCos=Math.cos(N.angle),P.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),P.decay=N.decay,r.spot[f]=P;const G=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,G.updateMatrices(N),N.castShadow&&b++),r.spotLightMatrix[f]=G.matrix,N.castShadow){const O=i.get(N);O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,r.spotShadow[f]=O,r.spotShadowMap[f]=W,T++}f++}else if(N.isRectAreaLight){const P=n.get(N);P.color.copy(z).multiplyScalar(H),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=P,v++}else if(N.isPointLight){const P=n.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity*S),P.distance=N.distance,P.decay=N.decay,N.castShadow){const G=N.shadow,O=i.get(N);O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=W,r.pointShadowMatrix[p]=N.shadow.matrix,E++}r.point[p]=P,p++}else if(N.isHemisphereLight){const P=n.get(N);P.skyColor.copy(N.color).multiplyScalar(H*S),P.groundColor.copy(N.groundColor).multiplyScalar(H*S),r.hemi[g]=P,g++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==x||A.pointLength!==p||A.spotLength!==f||A.rectAreaLength!==v||A.hemiLength!==g||A.numDirectionalShadows!==y||A.numPointShadows!==E||A.numSpotShadows!==T||A.numSpotMaps!==w)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=T+w-b,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=b,A.directionalLength=x,A.pointLength=p,A.spotLength=f,A.rectAreaLength=v,A.hemiLength=g,A.numDirectionalShadows=y,A.numPointShadows=E,A.numSpotShadows=T,A.numSpotMaps=w,r.version=YC++)}function u(c,d){let h=0,m=0,_=0,x=0,p=0;const f=d.matrixWorldInverse;for(let v=0,g=c.length;v<g;v++){const y=c[v];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(f),h++}else if(y.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const E=r.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function Dg(t,e){const n=new KC(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function ZC(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Dg(t,e),n.set(o,[l])):s>=a.length?(l=new Dg(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class QC extends Fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JC extends Fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nR(t,e,n){let i=new V0;const r=new Je,o=new Je,s=new Ut,a=new QC({depthPacking:LM}),l=new JC,u={},c=n.maxTextureSize,d={[cr]:sn,[sn]:cr,[xi]:xi},h=new Wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:eR,fragmentShader:tR}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new mr;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ei(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y0;let f=this.type;this.render=function(E,T,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),B=t.state;B.setBlending(or),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=f!==gi&&this.type===gi,N=f===gi&&this.type!==gi;for(let z=0,H=E.length;z<H;z++){const Z=E[z],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const P=W.getFrameExtents();if(r.multiply(P),o.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/P.x),r.x=o.x*P.x,W.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/P.y),r.y=o.y*P.y,W.mapSize.y=o.y)),W.map===null||$===!0||N===!0){const O=this.type!==gi?{minFilter:qt,magFilter:qt}:{};W.map!==null&&W.map.dispose(),W.map=new Vr(r.x,r.y,O),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const G=W.getViewportCount();for(let O=0;O<G;O++){const U=W.getViewport(O);s.set(o.x*U.x,o.y*U.y,o.x*U.z,o.y*U.w),B.viewport(s),W.updateMatrices(Z,O),i=W.getFrustum(),y(T,w,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===gi&&v(W,w),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(b,S,A)};function v(E,T){const w=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,w,h,x,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,w,m,x,null)}function g(E,T,w,b){let S=null;const A=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)S=A;else if(S=w.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=S.uuid,$=T.uuid;let N=u[B];N===void 0&&(N={},u[B]=N);let z=N[$];z===void 0&&(z=S.clone(),N[$]=z),S=z}if(S.visible=T.visible,S.wireframe=T.wireframe,b===gi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=w}return S}function y(E,T,w,b,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const $=e.update(E),N=E.material;if(Array.isArray(N)){const z=$.groups;for(let H=0,Z=z.length;H<Z;H++){const W=z[H],P=N[W.materialIndex];if(P&&P.visible){const G=g(E,P,b,S);t.renderBufferDirect(w,null,$,G,E,W)}}}else if(N.visible){const z=g(E,N,b,S);t.renderBufferDirect(w,null,$,z,E,null)}}const B=E.children;for(let $=0,N=B.length;$<N;$++)y(B[$],T,w,b,S)}}function iR(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const fe=new Ut;let K=null;const le=new Ut(0,0,0,0);return{setMask:function(de){K!==de&&!D&&(t.colorMask(de,de,de,de),K=de)},setLocked:function(de){D=de},setClear:function(de,$e,ct,xt,Ui){Ui===!0&&(de*=xt,$e*=xt,ct*=xt),fe.set(de,$e,ct,xt),le.equals(fe)===!1&&(t.clearColor(de,$e,ct,xt),le.copy(fe))},reset:function(){D=!1,K=null,le.set(-1,0,0,0)}}}function o(){let D=!1,fe=null,K=null,le=null;return{setTest:function(de){de?ge(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(de){fe!==de&&!D&&(t.depthMask(de),fe=de)},setFunc:function(de){if(K!==de){switch(de){case sM:t.depthFunc(t.NEVER);break;case aM:t.depthFunc(t.ALWAYS);break;case lM:t.depthFunc(t.LESS);break;case Jf:t.depthFunc(t.LEQUAL);break;case uM:t.depthFunc(t.EQUAL);break;case cM:t.depthFunc(t.GEQUAL);break;case fM:t.depthFunc(t.GREATER);break;case dM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=de}},setLocked:function(de){D=de},setClear:function(de){le!==de&&(t.clearDepth(de),le=de)},reset:function(){D=!1,fe=null,K=null,le=null}}}function s(){let D=!1,fe=null,K=null,le=null,de=null,$e=null,ct=null,xt=null,Ui=null;return{setTest:function(rt){D||(rt?ge(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!D&&(t.stencilMask(rt),fe=rt)},setFunc:function(rt,qn,Wt){(K!==rt||le!==qn||de!==Wt)&&(t.stencilFunc(rt,qn,Wt),K=rt,le=qn,de=Wt)},setOp:function(rt,qn,Wt){($e!==rt||ct!==qn||xt!==Wt)&&(t.stencilOp(rt,qn,Wt),$e=rt,ct=qn,xt=Wt)},setLocked:function(rt){D=rt},setClear:function(rt){Ui!==rt&&(t.clearStencil(rt),Ui=rt)},reset:function(){D=!1,fe=null,K=null,le=null,de=null,$e=null,ct=null,xt=null,Ui=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,f=!1,v=null,g=null,y=null,E=null,T=null,w=null,b=null,S=!1,A=null,B=null,$=null,N=null,z=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(P)[1]),Z=W>=1):P.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),Z=W>=2);let G=null,O={};const U=t.getParameter(t.SCISSOR_BOX),F=t.getParameter(t.VIEWPORT),ee=new Ut().fromArray(U),ie=new Ut().fromArray(F);function ne(D,fe,K,le){const de=new Uint8Array(4),$e=t.createTexture();t.bindTexture(D,$e),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<K;ct++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(fe+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return $e}const ue={};ue[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ue[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ge(t.DEPTH_TEST),l.setFunc(Jf),we(!1),Ve(gm),ge(t.CULL_FACE),_e(or);function ge(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function me(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function be(D,fe){return m[D]!==fe?(t.bindFramebuffer(D,fe),m[D]=fe,i&&(D===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function Ye(D,fe){let K=x,le=!1;if(D)if(K=_.get(fe),K===void 0&&(K=[],_.set(fe,K)),D.isWebGLMultipleRenderTargets){const de=D.texture;if(K.length!==de.length||K[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,ct=de.length;$e<ct;$e++)K[$e]=t.COLOR_ATTACHMENT0+$e;K.length=de.length,le=!0}}else K[0]!==t.COLOR_ATTACHMENT0&&(K[0]=t.COLOR_ATTACHMENT0,le=!0);else K[0]!==t.BACK&&(K[0]=t.BACK,le=!0);le&&(n.isWebGL2?t.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Te(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const k={[go]:t.FUNC_ADD,[qE]:t.FUNC_SUBTRACT,[KE]:t.FUNC_REVERSE_SUBTRACT};if(i)k[ym]=t.MIN,k[Sm]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(k[ym]=D.MIN_EXT,k[Sm]=D.MAX_EXT)}const qe={[ZE]:t.ZERO,[QE]:t.ONE,[JE]:t.SRC_COLOR,[S0]:t.SRC_ALPHA,[oM]:t.SRC_ALPHA_SATURATE,[iM]:t.DST_COLOR,[tM]:t.DST_ALPHA,[eM]:t.ONE_MINUS_SRC_COLOR,[E0]:t.ONE_MINUS_SRC_ALPHA,[rM]:t.ONE_MINUS_DST_COLOR,[nM]:t.ONE_MINUS_DST_ALPHA};function _e(D,fe,K,le,de,$e,ct,xt){if(D===or){f===!0&&(me(t.BLEND),f=!1);return}if(f===!1&&(ge(t.BLEND),f=!0),D!==YE){if(D!==v||xt!==S){if((g!==go||T!==go)&&(t.blendEquation(t.FUNC_ADD),g=go,T=go),xt)switch(D){case ko:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vm:t.blendFunc(t.ONE,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ko:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,E=null,w=null,b=null,v=D,S=xt}return}de=de||fe,$e=$e||K,ct=ct||le,(fe!==g||de!==T)&&(t.blendEquationSeparate(k[fe],k[de]),g=fe,T=de),(K!==y||le!==E||$e!==w||ct!==b)&&(t.blendFuncSeparate(qe[K],qe[le],qe[$e],qe[ct]),y=K,E=le,w=$e,b=ct),v=D,S=!1}function he(D,fe){D.side===xi?me(t.CULL_FACE):ge(t.CULL_FACE);let K=D.side===sn;fe&&(K=!K),we(K),D.blending===ko&&D.transparent===!1?_e(or):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const le=D.stencilWrite;u.setTest(le),le&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(D){A!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),A=D)}function Ve(D){D!==jE?(ge(t.CULL_FACE),D!==B&&(D===gm?t.cullFace(t.BACK):D===XE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),B=D}function Ue(D){D!==$&&(Z&&t.lineWidth(D),$=D)}function Pe(D,fe,K){D?(ge(t.POLYGON_OFFSET_FILL),(N!==fe||z!==K)&&(t.polygonOffset(fe,K),N=fe,z=K)):me(t.POLYGON_OFFSET_FILL)}function Oe(D){D?ge(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function et(D){D===void 0&&(D=t.TEXTURE0+H-1),G!==D&&(t.activeTexture(D),G=D)}function ut(D,fe,K){K===void 0&&(G===null?K=t.TEXTURE0+H-1:K=G);let le=O[K];le===void 0&&(le={type:void 0,texture:void 0},O[K]=le),(le.type!==D||le.texture!==fe)&&(G!==K&&(t.activeTexture(K),G=K),t.bindTexture(D,fe||ue[D]),le.type=D,le.texture=fe)}function R(){const D=O[G];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(D){ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function xe(D){ie.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function ye(D,fe){let K=d.get(fe);K===void 0&&(K=new WeakMap,d.set(fe,K));let le=K.get(D);le===void 0&&(le=t.getUniformBlockIndex(fe,D.name),K.set(D,le))}function Be(D,fe){const le=d.get(fe).get(D);c.get(fe)!==le&&(t.uniformBlockBinding(fe,le,D.__bindingPointIndex),c.set(fe,le))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},G=null,O={},m={},_=new WeakMap,x=[],p=null,f=!1,v=null,g=null,y=null,E=null,T=null,w=null,b=null,S=!1,A=null,B=null,$=null,N=null,z=null,ee.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ge,disable:me,bindFramebuffer:be,drawBuffers:Ye,useProgram:Te,setBlending:_e,setMaterial:he,setFlipSided:we,setCullFace:Ve,setLineWidth:Ue,setPolygonOffset:Pe,setScissorTest:Oe,activeTexture:et,bindTexture:ut,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:Ae,texImage3D:Ee,updateUBOMapping:ye,uniformBlockBinding:Be,texStorage2D:ae,texStorage3D:q,texSubImage2D:re,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:Se,scissor:Me,viewport:xe,reset:tt}}function rR(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return f?new OffscreenCanvas(R,M):au("canvas")}function g(R,M,I,re){let te=1;if((R.width>re||R.height>re)&&(te=re/Math.max(R.width,R.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const se=M?su:Math.floor,Se=se(te*R.width),ae=se(te*R.height);x===void 0&&(x=v(Se,ae));const q=I?v(Se,ae):x;return q.width=Se,q.height=ae,q.getContext("2d").drawImage(R,0,0,Se,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+ae+")."),q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function y(R){return od(R.width)&&od(R.height)}function E(R){return a?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==qt&&R.minFilter!==An}function T(R,M){return R.generateMipmaps&&M&&R.minFilter!==qt&&R.minFilter!==An}function w(R){t.generateMipmap(R)}function b(R,M,I,re,te=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=M;return M===t.RED&&(I===t.FLOAT&&(se=t.R32F),I===t.HALF_FLOAT&&(se=t.R16F),I===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(se=t.R8UI),I===t.UNSIGNED_SHORT&&(se=t.R16UI),I===t.UNSIGNED_INT&&(se=t.R32UI),I===t.BYTE&&(se=t.R8I),I===t.SHORT&&(se=t.R16I),I===t.INT&&(se=t.R32I)),M===t.RG&&(I===t.FLOAT&&(se=t.RG32F),I===t.HALF_FLOAT&&(se=t.RG16F),I===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA&&(I===t.FLOAT&&(se=t.RGBA32F),I===t.HALF_FLOAT&&(se=t.RGBA16F),I===t.UNSIGNED_BYTE&&(se=re===at&&te===!1?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)),(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(R,M,I){return T(R,I)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===qt||R===Em||R===Mc?t.NEAREST:t.LINEAR}function B(R){const M=R.target;M.removeEventListener("dispose",B),N(M),M.isVideoTexture&&_.delete(M)}function $(R){const M=R.target;M.removeEventListener("dispose",$),H(M)}function N(R){const M=i.get(R);if(M.__webglInit===void 0)return;const I=R.source,re=p.get(I);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(R),Object.keys(re).length===0&&p.delete(I)}i.remove(R)}function z(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const I=R.source,re=p.get(I);delete re[M.__cacheKey],s.memory.textures--}function H(R){const M=R.texture,I=i.get(R),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(I.__webglFramebuffer[te]))for(let se=0;se<I.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(I.__webglFramebuffer[te][se]);else t.deleteFramebuffer(I.__webglFramebuffer[te]);I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer[te])}else{if(Array.isArray(I.__webglFramebuffer))for(let te=0;te<I.__webglFramebuffer.length;te++)t.deleteFramebuffer(I.__webglFramebuffer[te]);else t.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&t.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let te=0;te<I.__webglColorRenderbuffer.length;te++)I.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(I.__webglColorRenderbuffer[te]);I.__webglDepthRenderbuffer&&t.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const Se=i.get(M[te]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),s.memory.textures--),i.remove(M[te])}i.remove(M),i.remove(R)}let Z=0;function W(){Z=0}function P(){const R=Z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Z+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function O(R,M){const I=i.get(R);if(R.isVideoTexture&&et(R),R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(I,R,M);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+M)}function U(R,M){const I=i.get(R);if(R.version>0&&I.__version!==R.version){be(I,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+M)}function F(R,M){const I=i.get(R);if(R.version>0&&I.__version!==R.version){be(I,R,M);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const I=i.get(R);if(R.version>0&&I.__version!==R.version){Ye(I,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+M)}const ie={[nd]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[id]:t.MIRRORED_REPEAT},ne={[qt]:t.NEAREST,[Em]:t.NEAREST_MIPMAP_NEAREST,[Mc]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[yM]:t.LINEAR_MIPMAP_NEAREST,[ha]:t.LINEAR_MIPMAP_LINEAR},ue={[IM]:t.NEVER,[GM]:t.ALWAYS,[OM]:t.LESS,[kM]:t.LEQUAL,[FM]:t.EQUAL,[HM]:t.GEQUAL,[zM]:t.GREATER,[BM]:t.NOTEQUAL};function ge(R,M,I){if(I?(t.texParameteri(R,t.TEXTURE_WRAP_S,ie[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ie[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ie[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ne[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ne[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Wn||M.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==qt&&M.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===qt||M.minFilter!==Mc&&M.minFilter!==ha||M.type===qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===pa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function me(R,M){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",B));const re=M.source;let te=p.get(re);te===void 0&&(te={},p.set(re,te));const se=G(M);if(se!==R.__cacheKey){te[se]===void 0&&(te[se]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,I=!0),te[se].usedTimes++;const Se=te[R.__cacheKey];Se!==void 0&&(te[R.__cacheKey].usedTimes--,Se.usedTimes===0&&z(M)),R.__cacheKey=se,R.__webglTexture=te[se].texture}return I}function be(R,M,I){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const te=me(R,M),se=M.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+I);const Se=i.get(se);if(se.version!==Se.__version||te===!0){n.activeTexture(t.TEXTURE0+I),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ae=E(M)&&y(M.image)===!1;let q=g(M.image,ae,!1,c);q=ut(M,q);const Ae=y(q)||a,Ee=o.convert(M.format,M.colorSpace);let Me=o.convert(M.type),xe=b(M.internalFormat,Ee,Me,M.colorSpace,M.isVideoTexture);ge(re,M,Ae);let ye;const Be=M.mipmaps,tt=a&&M.isVideoTexture!==!0,D=Se.__version===void 0||te===!0,fe=S(M,q,Ae);if(M.isDepthTexture)xe=t.DEPTH_COMPONENT,a?M.type===qi?xe=t.DEPTH_COMPONENT32F:M.type===Yi?xe=t.DEPTH_COMPONENT24:M.type===Nr?xe=t.DEPTH24_STENCIL8:xe=t.DEPTH_COMPONENT16:M.type===qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ur&&xe===t.DEPTH_COMPONENT&&M.type!==mh&&M.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Yi,Me=o.convert(M.type)),M.format===qo&&xe===t.DEPTH_COMPONENT&&(xe=t.DEPTH_STENCIL,M.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Nr,Me=o.convert(M.type))),D&&(tt?n.texStorage2D(t.TEXTURE_2D,1,xe,q.width,q.height):n.texImage2D(t.TEXTURE_2D,0,xe,q.width,q.height,0,Ee,Me,null));else if(M.isDataTexture)if(Be.length>0&&Ae){tt&&D&&n.texStorage2D(t.TEXTURE_2D,fe,xe,Be[0].width,Be[0].height);for(let K=0,le=Be.length;K<le;K++)ye=Be[K],tt?n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye.width,ye.height,Ee,Me,ye.data):n.texImage2D(t.TEXTURE_2D,K,xe,ye.width,ye.height,0,Ee,Me,ye.data);M.generateMipmaps=!1}else tt?(D&&n.texStorage2D(t.TEXTURE_2D,fe,xe,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,q.width,q.height,Ee,Me,q.data)):n.texImage2D(t.TEXTURE_2D,0,xe,q.width,q.height,0,Ee,Me,q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&D&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,xe,Be[0].width,Be[0].height,q.depth);for(let K=0,le=Be.length;K<le;K++)ye=Be[K],M.format!==jn?Ee!==null?tt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,q.depth,Ee,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,xe,ye.width,ye.height,q.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,q.depth,Ee,Me,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,xe,ye.width,ye.height,q.depth,0,Ee,Me,ye.data)}else{tt&&D&&n.texStorage2D(t.TEXTURE_2D,fe,xe,Be[0].width,Be[0].height);for(let K=0,le=Be.length;K<le;K++)ye=Be[K],M.format!==jn?Ee!==null?tt?n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ye.width,ye.height,Ee,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,K,xe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?n.texSubImage2D(t.TEXTURE_2D,K,0,0,ye.width,ye.height,Ee,Me,ye.data):n.texImage2D(t.TEXTURE_2D,K,xe,ye.width,ye.height,0,Ee,Me,ye.data)}else if(M.isDataArrayTexture)tt?(D&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,xe,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Ee,Me,q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,q.width,q.height,q.depth,0,Ee,Me,q.data);else if(M.isData3DTexture)tt?(D&&n.texStorage3D(t.TEXTURE_3D,fe,xe,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Ee,Me,q.data)):n.texImage3D(t.TEXTURE_3D,0,xe,q.width,q.height,q.depth,0,Ee,Me,q.data);else if(M.isFramebufferTexture){if(D)if(tt)n.texStorage2D(t.TEXTURE_2D,fe,xe,q.width,q.height);else{let K=q.width,le=q.height;for(let de=0;de<fe;de++)n.texImage2D(t.TEXTURE_2D,de,xe,K,le,0,Ee,Me,null),K>>=1,le>>=1}}else if(Be.length>0&&Ae){tt&&D&&n.texStorage2D(t.TEXTURE_2D,fe,xe,Be[0].width,Be[0].height);for(let K=0,le=Be.length;K<le;K++)ye=Be[K],tt?n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ee,Me,ye):n.texImage2D(t.TEXTURE_2D,K,xe,Ee,Me,ye);M.generateMipmaps=!1}else tt?(D&&n.texStorage2D(t.TEXTURE_2D,fe,xe,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Me,q)):n.texImage2D(t.TEXTURE_2D,0,xe,Ee,Me,q);T(M,Ae)&&w(re),Se.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ye(R,M,I){if(M.image.length!==6)return;const re=me(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+I);const se=i.get(te);if(te.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+I),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,q=[];for(let K=0;K<6;K++)!Se&&!ae?q[K]=g(M.image[K],!1,!0,u):q[K]=ae?M.image[K].image:M.image[K],q[K]=ut(M,q[K]);const Ae=q[0],Ee=y(Ae)||a,Me=o.convert(M.format,M.colorSpace),xe=o.convert(M.type),ye=b(M.internalFormat,Me,xe,M.colorSpace),Be=a&&M.isVideoTexture!==!0,tt=se.__version===void 0||re===!0;let D=S(M,Ae,Ee);ge(t.TEXTURE_CUBE_MAP,M,Ee);let fe;if(Se){Be&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,D,ye,Ae.width,Ae.height);for(let K=0;K<6;K++){fe=q[K].mipmaps;for(let le=0;le<fe.length;le++){const de=fe[le];M.format!==jn?Me!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,de.width,de.height,Me,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,de.width,de.height,Me,xe,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ye,de.width,de.height,0,Me,xe,de.data)}}}else{fe=M.mipmaps,Be&&tt&&(fe.length>0&&D++,n.texStorage2D(t.TEXTURE_CUBE_MAP,D,ye,q[0].width,q[0].height));for(let K=0;K<6;K++)if(ae){Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,q[K].width,q[K].height,Me,xe,q[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ye,q[K].width,q[K].height,0,Me,xe,q[K].data);for(let le=0;le<fe.length;le++){const $e=fe[le].image[K].image;Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,$e.width,$e.height,Me,xe,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ye,$e.width,$e.height,0,Me,xe,$e.data)}}else{Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,xe,q[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ye,Me,xe,q[K]);for(let le=0;le<fe.length;le++){const de=fe[le];Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Me,xe,de.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ye,Me,xe,de.image[K])}}}T(M,Ee)&&w(t.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Te(R,M,I,re,te,se){const Se=o.convert(I.format,I.colorSpace),ae=o.convert(I.type),q=b(I.internalFormat,Se,ae,I.colorSpace);if(!i.get(M).__hasExternalTextures){const Ee=Math.max(1,M.width>>se),Me=Math.max(1,M.height>>se);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,se,q,Ee,Me,M.depth,0,Se,ae,null):n.texImage2D(te,se,q,Ee,Me,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Oe(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,te,i.get(I).__webglTexture,0,Pe(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,te,i.get(I).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(R,M,I){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let re=t.DEPTH_COMPONENT16;if(I||Oe(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===qi?re=t.DEPTH_COMPONENT32F:te.type===Yi&&(re=t.DEPTH_COMPONENT24));const se=Pe(M);Oe(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const re=Pe(M);I&&Oe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):Oe(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],Se=o.convert(se.format,se.colorSpace),ae=o.convert(se.type),q=b(se.internalFormat,Se,ae,se.colorSpace),Ae=Pe(M);I&&Oe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,q,M.width,M.height):Oe(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,te=Pe(M);if(M.depthTexture.format===Ur)Oe(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===qo)Oe(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function _e(R){const M=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");qe(M.__webglFramebuffer,R)}else if(I){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),k(M.__webglDepthbuffer[re],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),k(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,M,I){const re=i.get(R);M!==void 0&&Te(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&_e(R)}function we(R){const M=R.texture,I=i.get(R),re=i.get(M);R.addEventListener("dispose",$),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,s.memory.textures++);const te=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,Se=y(R)||a;if(te){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let q=0;q<M.mipmaps.length;q++)I.__webglFramebuffer[ae][q]=t.createFramebuffer()}else I.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)I.__webglFramebuffer[ae]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const ae=R.texture;for(let q=0,Ae=ae.length;q<Ae;q++){const Ee=i.get(ae[q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Oe(R)===!1){const ae=se?M:[M];I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<ae.length;q++){const Ae=ae[q];I.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[q]);const Ee=o.convert(Ae.format,Ae.colorSpace),Me=o.convert(Ae.type),xe=b(Ae.internalFormat,Ee,Me,Ae.colorSpace,R.isXRRenderTarget===!0),ye=Pe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,I.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),k(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ge(t.TEXTURE_CUBE_MAP,M,Se);for(let ae=0;ae<6;ae++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let q=0;q<M.mipmaps.length;q++)Te(I.__webglFramebuffer[ae][q],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,q);else Te(I.__webglFramebuffer[ae],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);T(M,Se)&&w(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const ae=R.texture;for(let q=0,Ae=ae.length;q<Ae;q++){const Ee=ae[q],Me=i.get(Ee);n.bindTexture(t.TEXTURE_2D,Me.__webglTexture),ge(t.TEXTURE_2D,Ee,Se),Te(I.__webglFramebuffer,R,Ee,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D,0),T(Ee,Se)&&w(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,re.__webglTexture),ge(ae,M,Se),a&&M.mipmaps&&M.mipmaps.length>0)for(let q=0;q<M.mipmaps.length;q++)Te(I.__webglFramebuffer[q],R,M,t.COLOR_ATTACHMENT0,ae,q);else Te(I.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ae,0);T(M,Se)&&w(ae),n.unbindTexture()}R.depthBuffer&&_e(R)}function Ve(R){const M=y(R)||a,I=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,te=I.length;re<te;re++){const se=I[re];if(T(se,M)){const Se=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(se).__webglTexture;n.bindTexture(Se,ae),w(Se),n.unbindTexture()}}}function Ue(R){if(a&&R.samples>0&&Oe(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],I=R.width,re=R.height;let te=t.COLOR_BUFFER_BIT;const se=[],Se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(R),q=R.isWebGLMultipleRenderTargets===!0;if(q)for(let Ae=0;Ae<M.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){se.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&se.push(Se);const Ee=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ee===!1&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),q&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]),Ee===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),q){const Me=i.get(M[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Me,0)}t.blitFramebuffer(0,0,I,re,0,0,I,re,te,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let Ae=0;Ae<M.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ae.__webglColorRenderbuffer[Ae]);const Ee=i.get(M[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(d,R.samples)}function Oe(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function et(R){const M=s.render.frame;_.get(R)!==M&&(_.set(R,M),R.update())}function ut(R,M){const I=R.colorSpace,re=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===rd||I!==ai&&I!==Or&&(I===at||I===Iu?a===!1?e.has("EXT_sRGB")===!0&&re===jn?(R.format=rd,R.minFilter=An,R.generateMipmaps=!1):M=N0.sRGBToLinear(M):(re!==jn||te!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}this.allocateTextureUnit=P,this.resetTextureUnits=W,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=ee,this.rebindTextures=he,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Oe}const oR=0,Tt=1;function sR(t,e,n){const i=n.isWebGL2;function r(o,s=Or){let a;const l=s===at||s===Iu?Tt:oR;if(o===ar)return t.UNSIGNED_BYTE;if(o===A0)return t.UNSIGNED_SHORT_4_4_4_4;if(o===C0)return t.UNSIGNED_SHORT_5_5_5_1;if(o===SM)return t.BYTE;if(o===EM)return t.SHORT;if(o===mh)return t.UNSIGNED_SHORT;if(o===w0)return t.INT;if(o===Yi)return t.UNSIGNED_INT;if(o===qi)return t.FLOAT;if(o===pa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===MM)return t.ALPHA;if(o===jn)return t.RGBA;if(o===TM)return t.LUMINANCE;if(o===wM)return t.LUMINANCE_ALPHA;if(o===Ur)return t.DEPTH_COMPONENT;if(o===qo)return t.DEPTH_STENCIL;if(o===rd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===AM)return t.RED;if(o===R0)return t.RED_INTEGER;if(o===CM)return t.RG;if(o===b0)return t.RG_INTEGER;if(o===P0)return t.RGBA_INTEGER;if(o===Tc||o===wc||o===Ac||o===Cc)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Mm||o===Tm||o===wm||o===Am)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Mm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Tm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===wm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Am)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===RM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Cm||o===Rm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Cm)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Rm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===bm||o===Pm||o===Lm||o===Dm||o===Nm||o===Um||o===Im||o===Om||o===Fm||o===km||o===zm||o===Bm||o===Hm||o===Gm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===bm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Pm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Lm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Dm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Nm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Um)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Im)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Om)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Fm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===km)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===zm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Bm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Hm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Gm)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Rc||o===Vm||o===Wm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Rc)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Vm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Wm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===bM||o===jm||o===Xm||o===$m)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Rc)return a.COMPRESSED_RED_RGTC1_EXT;if(o===jm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Xm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===$m)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Nr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class aR extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lR={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),f=this._getHandJoint(u,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,_=.005;u.inputState.pinching&&h>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ml;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class uR extends gn{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Ur,c!==Ur&&c!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ur&&(i=Yi),i===void 0&&c===qo&&(i=Nr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cR extends os{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,_=null;const x=n.getContextAttributes();let p=null,f=null;const v=[],g=[],y=new Cn;y.layers.enable(1),y.viewport=new Ut;const E=new Cn;E.layers.enable(2),E.viewport=new Ut;const T=[y,E],w=new aR;w.layers.enable(1),w.layers.enable(2);let b=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let F=v[U];return F===void 0&&(F=new Kc,v[U]=F),F.getTargetRaySpace()},this.getControllerGrip=function(U){let F=v[U];return F===void 0&&(F=new Kc,v[U]=F),F.getGripSpace()},this.getHand=function(U){let F=v[U];return F===void 0&&(F=new Kc,v[U]=F),F.getHandSpace()};function A(U){const F=g.indexOf(U.inputSource);if(F===-1)return;const ee=v[F];ee!==void 0&&(ee.update(U.inputSource,U.frame,u||s),ee.dispatchEvent({type:U.type,data:U.inputSource}))}function B(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",$);for(let U=0;U<v.length;U++){const F=g[U];F!==null&&(g[U]=null,v[U].disconnect(F))}b=null,S=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,O.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",B),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:m}),f=new Vr(m.framebufferWidth,m.framebufferHeight,{format:jn,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let F=null,ee=null,ie=null;x.depth&&(ie=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=x.stencil?qo:Ur,ee=x.stencil?Nr:Yi);const ne={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ne),r.updateRenderState({layers:[h]}),f=new Vr(h.textureWidth,h.textureHeight,{format:jn,type:ar,depthTexture:new uR(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const ue=e.properties.get(f);ue.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),O.setContext(r),O.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(U){for(let F=0;F<U.removed.length;F++){const ee=U.removed[F],ie=g.indexOf(ee);ie>=0&&(g[ie]=null,v[ie].disconnect(ee))}for(let F=0;F<U.added.length;F++){const ee=U.added[F];let ie=g.indexOf(ee);if(ie===-1){for(let ue=0;ue<v.length;ue++)if(ue>=g.length){g.push(ee),ie=ue;break}else if(g[ue]===null){g[ue]=ee,ie=ue;break}if(ie===-1)break}const ne=v[ie];ne&&ne.connect(ee)}}const N=new Y,z=new Y;function H(U,F,ee){N.setFromMatrixPosition(F.matrixWorld),z.setFromMatrixPosition(ee.matrixWorld);const ie=N.distanceTo(z),ne=F.projectionMatrix.elements,ue=ee.projectionMatrix.elements,ge=ne[14]/(ne[10]-1),me=ne[14]/(ne[10]+1),be=(ne[9]+1)/ne[5],Ye=(ne[9]-1)/ne[5],Te=(ne[8]-1)/ne[0],k=(ue[8]+1)/ue[0],qe=ge*Te,_e=ge*k,he=ie/(-Te+k),we=he*-Te;F.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(we),U.translateZ(he),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Ve=ge+he,Ue=me+he,Pe=qe-we,Oe=_e+(ie-we),et=be*me/Ue*Ve,ut=Ye*me/Ue*Ve;U.projectionMatrix.makePerspective(Pe,Oe,et,ut,Ve,Ue),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Z(U,F){F===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(F.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;w.near=E.near=y.near=U.near,w.far=E.far=y.far=U.far,(b!==w.near||S!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,S=w.far);const F=U.parent,ee=w.cameras;Z(w,F);for(let ie=0;ie<ee.length;ie++)Z(ee[ie],F);ee.length===2?H(w,y,E):w.projectionMatrix.copy(y.projectionMatrix),W(U,w,F)};function W(U,F,ee){ee===null?U.matrix.copy(F.matrixWorld):(U.matrix.copy(ee.matrixWorld),U.matrix.invert(),U.matrix.multiply(F.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(F.projectionMatrix),U.projectionMatrixInverse.copy(F.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ma*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let P=null;function G(U,F){if(c=F.getViewerPose(u||s),_=F,c!==null){const ee=c.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ie=!1;ee.length!==w.cameras.length&&(w.cameras.length=0,ie=!0);for(let ne=0;ne<ee.length;ne++){const ue=ee[ne];let ge=null;if(m!==null)ge=m.getViewport(ue);else{const be=d.getViewSubImage(h,ue);ge=be.viewport,ne===0&&(e.setRenderTargetTextures(f,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(f))}let me=T[ne];me===void 0&&(me=new Cn,me.layers.enable(ne),me.viewport=new Ut,T[ne]=me),me.matrix.fromArray(ue.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ue.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ge.x,ge.y,ge.width,ge.height),ne===0&&(w.matrix.copy(me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ie===!0&&w.cameras.push(me)}}for(let ee=0;ee<v.length;ee++){const ie=g[ee],ne=v[ee];ie!==null&&ne!==void 0&&ne.update(ie,F,u||s)}P&&P(U,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}const O=new W0;O.setAnimationLoop(G),this.setAnimationLoop=function(U){P=U},this.dispose=function(){}}}function fR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,B0(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,v,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),d(p,f)):f.isMeshPhongMaterial?(o(p,f),c(p,f)):f.isMeshStandardMaterial?(o(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(o(p,f),_(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),x(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,v,g):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===sn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===sn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*g,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,g){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=g*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function u(v,g){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",p));const E=g.program;i.updateUBOMapping(v,E);const T=e.render.frame;o[v.id]!==T&&(h(v),o[v.id]=T)}function c(v){const g=d();v.__bindingPointIndex=g;const y=t.createBuffer(),E=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,E,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],y=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,w=y.length;T<w;T++){const b=y[T];if(m(b,T,E)===!0){const S=b.__offset,A=Array.isArray(b.value)?b.value:[b.value];let B=0;for(let $=0;$<A.length;$++){const N=A[$],z=x(N);typeof N=="number"?(b.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,S+B,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=N.elements[0],b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=N.elements[0],b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=N.elements[0]):(N.toArray(b.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,b.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,y){const E=v.value;if(y[g]===void 0){if(typeof E=="number")y[g]=E;else{const T=Array.isArray(E)?E:[E],w=[];for(let b=0;b<T.length;b++)w.push(T[b].clone());y[g]=w}return!0}else if(typeof E=="number"){if(y[g]!==E)return y[g]=E,!0}else{const T=Array.isArray(y[g])?y[g]:[y[g]],w=Array.isArray(E)?E:[E];for(let b=0;b<T.length;b++){const S=T[b];if(S.equals(w[b])===!1)return S.copy(w[b]),!0}}return!1}function _(v){const g=v.uniforms;let y=0;const E=16;let T=0;for(let w=0,b=g.length;w<b;w++){const S=g[w],A={boundary:0,storage:0},B=Array.isArray(S.value)?S.value:[S.value];for(let $=0,N=B.length;$<N;$++){const z=B[$],H=x(z);A.boundary+=H.boundary,A.storage+=H.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,w>0){T=y%E;const $=E-T;T!==0&&$-A.boundary<0&&(y+=E-T,S.__offset=y)}y+=A.storage}return T=y%E,T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=s.indexOf(g.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class q0{constructor(e={}){const{canvas:n=i1(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=sr,this.toneMappingExposure=1;const g=this;let y=!1,E=0,T=0,w=null,b=-1,S=null;const A=new Ut,B=new Ut;let $=null;const N=new nt(0);let z=0,H=n.width,Z=n.height,W=1,P=null,G=null;const O=new Ut(0,0,H,Z),U=new Ut(0,0,H,Z);let F=!1;const ee=new V0;let ie=!1,ne=!1,ue=null;const ge=new Ot,me=new Je,be=new Y,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return w===null?W:1}let k=i;function qe(C,V){for(let Q=0;Q<C.length;Q++){const j=C[Q],J=n.getContext(j,V);if(J!==null)return J}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ph}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",le,!1),k===null){const V=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&V.shift(),k=qe(V,C),k===null)throw qe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _e,he,we,Ve,Ue,Pe,Oe,et,ut,R,M,I,re,te,se,Se,ae,q,Ae,Ee,Me,xe,ye,Be;function tt(){_e=new EA(k),he=new mA(k,_e,e),_e.init(he),xe=new sR(k,_e,he),we=new iR(k,_e,he),Ve=new wA(k),Ue=new VC,Pe=new rR(k,_e,we,Ue,he,xe,Ve),Oe=new vA(g),et=new SA(g),ut=new U1(k,he),ye=new hA(k,_e,ut,he),R=new MA(k,ut,Ve,ye),M=new bA(k,R,ut,Ve),Ae=new RA(k,he,Pe),Se=new gA(Ue),I=new GC(g,Oe,et,_e,he,ye,Se),re=new fR(g,Ue),te=new jC,se=new ZC(_e,he),q=new dA(g,Oe,et,we,M,h,l),ae=new nR(g,M,he),Be=new dR(k,Ve,he,we),Ee=new pA(k,_e,Ve,he),Me=new TA(k,_e,Ve,he),Ve.programs=I.programs,g.capabilities=he,g.extensions=_e,g.properties=Ue,g.renderLists=te,g.shadowMap=ae,g.state=we,g.info=Ve}tt();const D=new cR(g,k);this.xr=D,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(H,Z,!1))},this.getSize=function(C){return C.set(H,Z)},this.setSize=function(C,V,Q=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,Z=V,n.width=Math.floor(C*W),n.height=Math.floor(V*W),Q===!0&&(n.style.width=C+"px",n.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(H*W,Z*W).floor()},this.setDrawingBufferSize=function(C,V,Q){H=C,Z=V,W=Q,n.width=Math.floor(C*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,V,Q,j){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,V,Q,j),we.viewport(A.copy(O).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(U)},this.setScissor=function(C,V,Q,j){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,V,Q,j),we.scissor(B.copy(U).multiplyScalar(W).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(C){we.setScissorTest(F=C)},this.setOpaqueSort=function(C){P=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(C=!0,V=!0,Q=!0){let j=0;if(C){let J=!1;if(w!==null){const ve=w.texture.format;J=ve===P0||ve===b0||ve===R0}if(J){const ve=w.texture.type,Ce=ve===ar||ve===Yi||ve===mh||ve===Nr||ve===A0||ve===C0,De=q.getClearColor(),Ne=q.getClearAlpha(),He=De.r,Le=De.g,Fe=De.b;Ce?(m[0]=He,m[1]=Le,m[2]=Fe,m[3]=Ne,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=He,_[1]=Le,_[2]=Fe,_[3]=Ne,k.clearBufferiv(k.COLOR,0,_))}else j|=k.COLOR_BUFFER_BIT}V&&(j|=k.DEPTH_BUFFER_BIT),Q&&(j|=k.STENCIL_BUFFER_BIT),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",le,!1),te.dispose(),se.dispose(),Ue.dispose(),Oe.dispose(),et.dispose(),M.dispose(),ye.dispose(),Be.dispose(),I.dispose(),D.dispose(),D.removeEventListener("sessionstart",rt),D.removeEventListener("sessionend",qn),ue&&(ue.dispose(),ue=null),Wt.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ve.autoReset,V=ae.enabled,Q=ae.autoUpdate,j=ae.needsUpdate,J=ae.type;tt(),Ve.autoReset=C,ae.enabled=V,ae.autoUpdate=Q,ae.needsUpdate=j,ae.type=J}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const V=C.target;V.removeEventListener("dispose",de),$e(V)}function $e(C){ct(C),Ue.remove(C)}function ct(C){const V=Ue.get(C).programs;V!==void 0&&(V.forEach(function(Q){I.releaseProgram(Q)}),C.isShaderMaterial&&I.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Q,j,J,ve){V===null&&(V=Ye);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,De=sy(C,V,Q,j,J);we.setMaterial(j,Ce);let Ne=Q.index,He=1;if(j.wireframe===!0){if(Ne=R.getWireframeAttribute(Q),Ne===void 0)return;He=2}const Le=Q.drawRange,Fe=Q.attributes.position;let pt=Le.start*He,gt=(Le.start+Le.count)*He;ve!==null&&(pt=Math.max(pt,ve.start*He),gt=Math.min(gt,(ve.start+ve.count)*He)),Ne!==null?(pt=Math.max(pt,0),gt=Math.min(gt,Ne.count)):Fe!=null&&(pt=Math.max(pt,0),gt=Math.min(gt,Fe.count));const En=gt-pt;if(En<0||En===1/0)return;ye.setup(J,j,De,Q,Ne);let ui,yt=Ee;if(Ne!==null&&(ui=ut.get(Ne),yt=Me,yt.setIndex(ui)),J.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*Te()),yt.setMode(k.LINES)):yt.setMode(k.TRIANGLES);else if(J.isLine){let We=j.linewidth;We===void 0&&(We=1),we.setLineWidth(We*Te()),J.isLineSegments?yt.setMode(k.LINES):J.isLineLoop?yt.setMode(k.LINE_LOOP):yt.setMode(k.LINE_STRIP)}else J.isPoints?yt.setMode(k.POINTS):J.isSprite&&yt.setMode(k.TRIANGLES);if(J.isInstancedMesh)yt.renderInstances(pt,En,J.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,$u=Math.min(Q.instanceCount,We);yt.renderInstances(pt,En,$u)}else yt.render(pt,En)},this.compile=function(C,V){function Q(j,J,ve){j.transparent===!0&&j.side===xi&&j.forceSinglePass===!1?(j.side=sn,j.needsUpdate=!0,La(j,J,ve),j.side=cr,j.needsUpdate=!0,La(j,J,ve),j.side=xi):La(j,J,ve)}p=se.get(C),p.init(),v.push(p),C.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(g._useLegacyLights),C.traverse(function(j){const J=j.material;if(J)if(Array.isArray(J))for(let ve=0;ve<J.length;ve++){const Ce=J[ve];Q(Ce,C,j)}else Q(J,C,j)}),v.pop(),p=null};let xt=null;function Ui(C){xt&&xt(C)}function rt(){Wt.stop()}function qn(){Wt.start()}const Wt=new W0;Wt.setAnimationLoop(Ui),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(C){xt=C,D.setAnimationLoop(C),C===null?Wt.stop():Wt.start()},D.addEventListener("sessionstart",rt),D.addEventListener("sessionend",qn),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(V),V=D.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,V,w),p=se.get(C,v.length),p.init(),v.push(p),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(ge),ne=this.localClippingEnabled,ie=Se.init(this.clippingPlanes,ne),x=te.get(C,f.length),x.init(),f.push(x),Jh(C,V,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,G),this.info.render.frame++,ie===!0&&Se.beginShadows();const Q=p.state.shadowsArray;if(ae.render(Q,C,V),ie===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(x,C),p.setupLights(g._useLegacyLights),V.isArrayCamera){const j=V.cameras;for(let J=0,ve=j.length;J<ve;J++){const Ce=j[J];ep(x,C,Ce,Ce.viewport)}}else ep(x,C,V);w!==null&&(Pe.updateMultisampleRenderTarget(w),Pe.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(g,C,V),ye.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Jh(C,V,Q,j){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){j&&be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Ce=M.update(C),De=C.material;De.visible&&x.push(C,Ce,De,Q,be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const Ce=M.update(C),De=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),be.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),be.copy(Ce.boundingSphere.center)),be.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(De)){const Ne=Ce.groups;for(let He=0,Le=Ne.length;He<Le;He++){const Fe=Ne[He],pt=De[Fe.materialIndex];pt&&pt.visible&&x.push(C,Ce,pt,Q,be.z,Fe)}}else De.visible&&x.push(C,Ce,De,Q,be.z,null)}}const ve=C.children;for(let Ce=0,De=ve.length;Ce<De;Ce++)Jh(ve[Ce],V,Q,j)}function ep(C,V,Q,j){const J=C.opaque,ve=C.transmissive,Ce=C.transparent;p.setupLightsView(Q),ie===!0&&Se.setGlobalState(g.clippingPlanes,Q),ve.length>0&&oy(J,ve,V,Q),j&&we.viewport(A.copy(j)),J.length>0&&Pa(J,V,Q),ve.length>0&&Pa(ve,V,Q),Ce.length>0&&Pa(Ce,V,Q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function oy(C,V,Q,j){const J=he.isWebGL2;ue===null&&(ue=new Vr(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?pa:ar,minFilter:ha,samples:J?4:0})),g.getDrawingBufferSize(me),J?ue.setSize(me.x,me.y):ue.setSize(su(me.x),su(me.y));const ve=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(N),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear();const Ce=g.toneMapping;g.toneMapping=sr,Pa(C,Q,j),Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue);let De=!1;for(let Ne=0,He=V.length;Ne<He;Ne++){const Le=V[Ne],Fe=Le.object,pt=Le.geometry,gt=Le.material,En=Le.group;if(gt.side===xi&&Fe.layers.test(j.layers)){const ui=gt.side;gt.side=sn,gt.needsUpdate=!0,tp(Fe,Q,j,pt,gt,En),gt.side=ui,gt.needsUpdate=!0,De=!0}}De===!0&&(Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue)),g.setRenderTarget(ve),g.setClearColor(N,z),g.toneMapping=Ce}function Pa(C,V,Q){const j=V.isScene===!0?V.overrideMaterial:null;for(let J=0,ve=C.length;J<ve;J++){const Ce=C[J],De=Ce.object,Ne=Ce.geometry,He=j===null?Ce.material:j,Le=Ce.group;De.layers.test(Q.layers)&&tp(De,V,Q,Ne,He,Le)}}function tp(C,V,Q,j,J,ve){C.onBeforeRender(g,V,Q,j,J,ve),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(g,V,Q,j,C,ve),J.transparent===!0&&J.side===xi&&J.forceSinglePass===!1?(J.side=sn,J.needsUpdate=!0,g.renderBufferDirect(Q,V,j,J,C,ve),J.side=cr,J.needsUpdate=!0,g.renderBufferDirect(Q,V,j,J,C,ve),J.side=xi):g.renderBufferDirect(Q,V,j,J,C,ve),C.onAfterRender(g,V,Q,j,J,ve)}function La(C,V,Q){V.isScene!==!0&&(V=Ye);const j=Ue.get(C),J=p.state.lights,ve=p.state.shadowsArray,Ce=J.state.version,De=I.getParameters(C,J.state,ve,V,Q),Ne=I.getProgramCacheKey(De);let He=j.programs;j.environment=C.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(C.isMeshStandardMaterial?et:Oe).get(C.envMap||j.environment),He===void 0&&(C.addEventListener("dispose",de),He=new Map,j.programs=He);let Le=He.get(Ne);if(Le!==void 0){if(j.currentProgram===Le&&j.lightsStateVersion===Ce)return np(C,De),Le}else De.uniforms=I.getUniforms(C),C.onBuild(Q,De,g),C.onBeforeCompile(De,g),Le=I.acquireProgram(De,Ne),He.set(Ne,Le),j.uniforms=De.uniforms;const Fe=j.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=Se.uniform),np(C,De),j.needsLights=ly(C),j.lightsStateVersion=Ce,j.needsLights&&(Fe.ambientLightColor.value=J.state.ambient,Fe.lightProbe.value=J.state.probe,Fe.directionalLights.value=J.state.directional,Fe.directionalLightShadows.value=J.state.directionalShadow,Fe.spotLights.value=J.state.spot,Fe.spotLightShadows.value=J.state.spotShadow,Fe.rectAreaLights.value=J.state.rectArea,Fe.ltc_1.value=J.state.rectAreaLTC1,Fe.ltc_2.value=J.state.rectAreaLTC2,Fe.pointLights.value=J.state.point,Fe.pointLightShadows.value=J.state.pointShadow,Fe.hemisphereLights.value=J.state.hemi,Fe.directionalShadowMap.value=J.state.directionalShadowMap,Fe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Fe.spotShadowMap.value=J.state.spotShadowMap,Fe.spotLightMatrix.value=J.state.spotLightMatrix,Fe.spotLightMap.value=J.state.spotLightMap,Fe.pointShadowMap.value=J.state.pointShadowMap,Fe.pointShadowMatrix.value=J.state.pointShadowMatrix);const pt=Le.getUniforms(),gt=Nl.seqWithValue(pt.seq,Fe);return j.currentProgram=Le,j.uniformsList=gt,Le}function np(C,V){const Q=Ue.get(C);Q.outputColorSpace=V.outputColorSpace,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function sy(C,V,Q,j,J){V.isScene!==!0&&(V=Ye),Pe.resetTextureUnits();const ve=V.fog,Ce=j.isMeshStandardMaterial?V.environment:null,De=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ai,Ne=(j.isMeshStandardMaterial?et:Oe).get(j.envMap||Ce),He=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Le=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Fe=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,gt=!!Q.morphAttributes.color;let En=sr;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(En=g.toneMapping);const ui=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=ui!==void 0?ui.length:0,We=Ue.get(j),$u=p.state.lights;if(ie===!0&&(ne===!0||C!==S)){const cn=C===S&&j.id===b;Se.setState(j,C,cn)}let St=!1;j.version===We.__version?(We.needsLights&&We.lightsStateVersion!==$u.state.version||We.outputColorSpace!==De||J.isInstancedMesh&&We.instancing===!1||!J.isInstancedMesh&&We.instancing===!0||J.isSkinnedMesh&&We.skinning===!1||!J.isSkinnedMesh&&We.skinning===!0||J.isInstancedMesh&&We.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&We.instancingColor===!1&&J.instanceColor!==null||We.envMap!==Ne||j.fog===!0&&We.fog!==ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Se.numPlanes||We.numIntersection!==Se.numIntersection)||We.vertexAlphas!==He||We.vertexTangents!==Le||We.morphTargets!==Fe||We.morphNormals!==pt||We.morphColors!==gt||We.toneMapping!==En||he.isWebGL2===!0&&We.morphTargetsCount!==yt)&&(St=!0):(St=!0,We.__version=j.version);let vr=We.currentProgram;St===!0&&(vr=La(j,V,J));let ip=!1,fs=!1,Yu=!1;const jt=vr.getUniforms(),_r=We.uniforms;if(we.useProgram(vr.program)&&(ip=!0,fs=!0,Yu=!0),j.id!==b&&(b=j.id,fs=!0),ip||S!==C){jt.setValue(k,"projectionMatrix",C.projectionMatrix),jt.setValue(k,"viewMatrix",C.matrixWorldInverse);const cn=jt.map.cameraPosition;cn!==void 0&&cn.setValue(k,be.setFromMatrixPosition(C.matrixWorld)),he.logarithmicDepthBuffer&&jt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&jt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,fs=!0,Yu=!0)}if(J.isSkinnedMesh){jt.setOptional(k,J,"bindMatrix"),jt.setOptional(k,J,"bindMatrixInverse");const cn=J.skeleton;cn&&(he.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),jt.setValue(k,"boneTexture",cn.boneTexture,Pe),jt.setValue(k,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qu=Q.morphAttributes;if((qu.position!==void 0||qu.normal!==void 0||qu.color!==void 0&&he.isWebGL2===!0)&&Ae.update(J,Q,vr),(fs||We.receiveShadow!==J.receiveShadow)&&(We.receiveShadow=J.receiveShadow,jt.setValue(k,"receiveShadow",J.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_r.envMap.value=Ne,_r.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),fs&&(jt.setValue(k,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&ay(_r,Yu),ve&&j.fog===!0&&re.refreshFogUniforms(_r,ve),re.refreshMaterialUniforms(_r,j,W,Z,ue),Nl.upload(k,We.uniformsList,_r,Pe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Nl.upload(k,We.uniformsList,_r,Pe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&jt.setValue(k,"center",J.center),jt.setValue(k,"modelViewMatrix",J.modelViewMatrix),jt.setValue(k,"normalMatrix",J.normalMatrix),jt.setValue(k,"modelMatrix",J.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const cn=j.uniformsGroups;for(let Ku=0,uy=cn.length;Ku<uy;Ku++)if(he.isWebGL2){const rp=cn[Ku];Be.update(rp,vr),Be.bind(rp,vr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vr}function ay(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function ly(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,V,Q){Ue.get(C.texture).__webglTexture=V,Ue.get(C.depthTexture).__webglTexture=Q;const j=Ue.get(C);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=Q===void 0,j.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const Q=Ue.get(C);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Q=0){w=C,E=V,T=Q;let j=!0,J=null,ve=!1,Ce=!1;if(C){const Ne=Ue.get(C);Ne.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Ne.__webglFramebuffer===void 0?Pe.setupRenderTarget(C):Ne.__hasExternalTextures&&Pe.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ce=!0);const Le=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Le[V])?J=Le[V][Q]:J=Le[V],ve=!0):he.isWebGL2&&C.samples>0&&Pe.useMultisampledRTT(C)===!1?J=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(Le)?J=Le[Q]:J=Le,A.copy(C.viewport),B.copy(C.scissor),$=C.scissorTest}else A.copy(O).multiplyScalar(W).floor(),B.copy(U).multiplyScalar(W).floor(),$=F;if(we.bindFramebuffer(k.FRAMEBUFFER,J)&&he.drawBuffers&&j&&we.drawBuffers(C,J),we.viewport(A),we.scissor(B),we.setScissorTest($),ve){const Ne=Ue.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ne.__webglTexture,Q)}else if(Ce){const Ne=Ue.get(C.texture),He=V||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.__webglTexture,Q||0,He)}b=-1},this.readRenderTargetPixels=function(C,V,Q,j,J,ve,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){we.bindFramebuffer(k.FRAMEBUFFER,De);try{const Ne=C.texture,He=Ne.format,Le=Ne.type;if(He!==jn&&xe.convert(He)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Le===pa&&(_e.has("EXT_color_buffer_half_float")||he.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Le!==ar&&xe.convert(Le)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===qi&&(he.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-j&&Q>=0&&Q<=C.height-J&&k.readPixels(V,Q,j,J,xe.convert(He),xe.convert(Le),ve)}finally{const Ne=w!==null?Ue.get(w).__webglFramebuffer:null;we.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,V,Q=0){const j=Math.pow(2,-Q),J=Math.floor(V.image.width*j),ve=Math.floor(V.image.height*j);Pe.setTexture2D(V,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,C.x,C.y,J,ve),we.unbindTexture()},this.copyTextureToTexture=function(C,V,Q,j=0){const J=V.image.width,ve=V.image.height,Ce=xe.convert(Q.format),De=xe.convert(Q.type);Pe.setTexture2D(Q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment),V.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,C.x,C.y,J,ve,Ce,De,V.image.data):V.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ce,V.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,C.x,C.y,Ce,De,V.image),j===0&&Q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Q,j,J=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,De=C.max.z-C.min.z+1,Ne=xe.convert(j.format),He=xe.convert(j.type);let Le;if(j.isData3DTexture)Pe.setTexture3D(j,0),Le=k.TEXTURE_3D;else if(j.isDataArrayTexture)Pe.setTexture2DArray(j,0),Le=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),gt=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),ui=k.getParameter(k.UNPACK_SKIP_IMAGES),yt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,C.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,C.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?k.texSubImage3D(Le,J,V.x,V.y,V.z,ve,Ce,De,Ne,He,yt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Le,J,V.x,V.y,V.z,ve,Ce,De,Ne,yt.data)):k.texSubImage3D(Le,J,V.x,V.y,V.z,ve,Ce,De,Ne,He,yt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,gt),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ui),J===0&&j.generateMipmaps&&k.generateMipmap(Le),we.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),we.unbindTexture()},this.resetState=function(){E=0,T=0,w=null,we.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?Ir:L0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ir?at:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hR extends q0{}hR.prototype.isWebGL1Renderer=!0;class pR extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class yh extends mr{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const c=[],d=new Y,h=new Y,m=[],_=[],x=[],p=[];for(let f=0;f<=i;f++){const v=[],g=f/i;let y=0;f===0&&s===0?y=.5/n:f===i&&l===Math.PI&&(y=-.5/n);for(let E=0;E<=n;E++){const T=E/n;d.x=-e*Math.cos(r+T*o)*Math.sin(s+g*a),d.y=e*Math.cos(s+g*a),d.z=e*Math.sin(r+T*o)*Math.sin(s+g*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(T+y,1-g),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<n;v++){const g=c[f][v+1],y=c[f][v],E=c[f+1][v],T=c[f+1][v+1];(f!==0||s>0)&&m.push(g,y,T),(f!==i-1||l<Math.PI)&&m.push(y,E,T)}this.setIndex(m),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(x,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const qs=class qs{constructor(e){Dt(this,"_contextGL");Dt(this,"_renderer");Dt(this,"_camera");Dt(this,"_scene");Dt(this,"_cube");Dt(this,"_sphere");this._contextGL=e,this._renderer=new q0({antialias:!0,canvas:e.canvas}),this._camera=new Cn(90,this.Width()/this.Height(),.1,1e3),this._scene=new pR,this._cube=new ei(new as(1,1,1),new lu),this._sphere=new ei(new yh,new lu),this._camera.position.x=0,this._camera.position.y=50,this._camera.position.z=70,this._camera.rotation.set(Dl.degToRad(-45),Dl.degToRad(0),Dl.degToRad(0)),console.log("[RendererGL]: Constructor")}static GetInstance(e){return this._instance?this._instance._contextGL!==e&&(this._instance=new qs(e),console.log("[RendererGL]: New contextGL instance")):(this._instance=new qs(e),console.log("[RendererGL]: Created rendererGL singleton")),this._instance}Width(){return this._contextGL.canvas.width}Height(){return this._contextGL.canvas.height}SetClearColour(e,n,i,r){const o=new nt(e/255,n/255,i/255);this._renderer.setClearColor(o,r/255)}Resize(){this._camera.aspect=this.Width()/this.Height(),this._camera.updateProjectionMatrix(),this._renderer.setSize(this.Width(),this.Height())}RenderAndClearBuffers(){this.Resize(),this._renderer.render(this._scene,this._camera)}ClearScene(){this._scene.clear()}DrawMesh(e){this._scene.add(e)}GetCube(){const e=this._cube.clone();return e.material=e.material.clone(),e}GetSphere(){const e=this._sphere.clone();return e.material=e.material.clone(),e}};Dt(qs,"_instance");let ad=qs;function mR(t){const e=ad.GetInstance(t);e.SetClearColour(51,51,51,0),e.ClearScene();const n=x0.GetPeakMaxArray(),i=0,o=360-i,s=50,a=.125,l=[0,100,50],u=o/n.length;for(let c=0;c<n.length;c++){const d=c*u+i,h=0,m=0,_=s,x=h+_*Math.cos(mm(d)),p=m+_*Math.sin(mm(d)),f=e.GetCube(),v=n[c]*a;f.scale.y=v,f.position.x=x,f.position.y=v/2,f.position.z=p;const g=BE(c*((360-l[0])/n.length)+l[0],l[1],l[2]);f.material.color.setRGB(g[0],g[1],g[2]),e.DrawMesh(f)}if(n.length){let c=n.reduce((h,m)=>h+m)/n.length;c*=.25,c=Dl.clamp(c,0,s);const d=e.GetSphere();d.scale.setScalar(c),e.DrawMesh(d)}e.RenderAndClearBuffers()}function gR({width:t,height:e}){const n=_0({contextId:"webgl2",render:mR});return X.jsx("canvas",{id:"canvasGL",ref:n,width:t,height:e})}var K0={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var i=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var s=typeof o;if(s==="string"||s==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&i.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var l in o)e.call(o,l)&&o[l]&&i.push(l)}}}return i.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(K0);var vR=K0.exports;const Ge=ts(vR);function ld(){return ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ld.apply(this,arguments)}function Z0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ng(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function _R(t){var e=xR(t,"string");return typeof e=="symbol"?e:String(e)}function xR(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function yR(t,e,n){var i=L.useRef(t!==void 0),r=L.useState(e),o=r[0],s=r[1],a=t!==void 0,l=i.current;return i.current=a,!a&&l&&o!==e&&s(e),[a?t:o,L.useCallback(function(u){for(var c=arguments.length,d=new Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];n&&n.apply(void 0,[u].concat(d)),s(u)},[n])]}function Q0(t,e){return Object.keys(e).reduce(function(n,i){var r,o=n,s=o[Ng(i)],a=o[i],l=Z0(o,[Ng(i),i].map(_R)),u=e[i],c=yR(a,s,t[u]),d=c[0],h=c[1];return ld({},l,(r={},r[i]=d,r[u]=h,r))},t)}function ud(t,e){return ud=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ud(t,e)}function SR(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ud(t,e)}const J0=["xxl","xl","lg","md","sm","xs"],ex="xs",zu=L.createContext({prefixes:{},breakpoints:J0,minBreakpoint:ex});function Ze(t,e){const{prefixes:n}=L.useContext(zu);return t||n[e]||e}function Sh(){const{breakpoints:t}=L.useContext(zu);return t}function Eh(){const{minBreakpoint:t}=L.useContext(zu);return t}function tx(){const{dir:t}=L.useContext(zu);return t==="rtl"}function Aa(t){return t&&t.ownerDocument||document}function ER(t){var e=Aa(t);return e&&e.defaultView||window}function MR(t,e){return ER(t).getComputedStyle(t,e)}var TR=/([A-Z])/g;function wR(t){return t.replace(TR,"-$1").toLowerCase()}var AR=/^ms-/;function gl(t){return wR(t).replace(AR,"-ms-")}var CR=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function RR(t){return!!(t&&CR.test(t))}function wi(t,e){var n="",i="";if(typeof e=="string")return t.style.getPropertyValue(gl(e))||MR(t).getPropertyValue(gl(e));Object.keys(e).forEach(function(r){var o=e[r];!o&&o!==0?t.style.removeProperty(gl(r)):RR(r)?i+=r+"("+o+") ":n+=gl(r)+": "+o+";"}),i&&(n+="transform: "+i+";"),t.style.cssText+=";"+n}var nx={exports:{}},bR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PR=bR,LR=PR;function ix(){}function rx(){}rx.resetWarningCache=ix;var DR=function(){function t(i,r,o,s,a,l){if(l!==LR){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:rx,resetWarningCache:ix};return n.PropTypes=n,n};nx.exports=DR();var NR=nx.exports;const Re=ts(NR),Ug={disabled:!1},ox=Ie.createContext(null);var UR=function(e){return e.scrollTop},Ls="unmounted",Gi="exited",Vn="entering",yi="entered",ga="exiting",Ni=function(t){SR(e,t);function e(i,r){var o;o=t.call(this,i,r)||this;var s=r,a=s&&!s.isMounting?i.enter:i.appear,l;return o.appearStatus=null,i.in?a?(l=Gi,o.appearStatus=Vn):l=yi:i.unmountOnExit||i.mountOnEnter?l=Ls:l=Gi,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(r,o){var s=r.in;return s&&o.status===Ls?{status:Gi}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(r){var o=null;if(r!==this.props){var s=this.state.status;this.props.in?s!==Vn&&s!==yi&&(o=Vn):(s===Vn||s===yi)&&(o=ga)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var r=this.props.timeout,o,s,a;return o=s=a=r,r!=null&&typeof r!="number"&&(o=r.exit,s=r.enter,a=r.appear!==void 0?r.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(r,o){if(r===void 0&&(r=!1),o!==null)if(this.cancelNextCallback(),o===Vn){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:Po.findDOMNode(this);s&&UR(s)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Gi&&this.setState({status:Ls})},n.performEnter=function(r){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:r,l=this.props.nodeRef?[a]:[Po.findDOMNode(this),a],u=l[0],c=l[1],d=this.getTimeouts(),h=a?d.appear:d.enter;if(!r&&!s||Ug.disabled){this.safeSetState({status:yi},function(){o.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Vn},function(){o.props.onEntering(u,c),o.onTransitionEnd(h,function(){o.safeSetState({status:yi},function(){o.props.onEntered(u,c)})})})},n.performExit=function(){var r=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Po.findDOMNode(this);if(!o||Ug.disabled){this.safeSetState({status:Gi},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:ga},function(){r.props.onExiting(a),r.onTransitionEnd(s.exit,function(){r.safeSetState({status:Gi},function(){r.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(r,o){o=this.setNextCallback(o),this.setState(r,o)},n.setNextCallback=function(r){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,r(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(r,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Po.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}r!=null&&setTimeout(this.nextCallback,r)},n.render=function(){var r=this.state.status;if(r===Ls)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=Z0(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ie.createElement(ox.Provider,{value:null},typeof s=="function"?s(r,a):Ie.cloneElement(Ie.Children.only(s),a))},e}(Ie.Component);Ni.contextType=ox;Ni.propTypes={};function ho(){}Ni.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ho,onEntering:ho,onEntered:ho,onExit:ho,onExiting:ho,onExited:ho};Ni.UNMOUNTED=Ls;Ni.EXITED=Gi;Ni.ENTERING=Vn;Ni.ENTERED=yi;Ni.EXITING=ga;const us=!!(typeof window<"u"&&window.document&&window.document.createElement);var cd=!1,fd=!1;try{var Zc={get passive(){return cd=!0},get once(){return fd=cd=!0}};us&&(window.addEventListener("test",Zc,Zc),window.removeEventListener("test",Zc,!0))}catch{}function Mh(t,e,n,i){if(i&&typeof i!="boolean"&&!fd){var r=i.once,o=i.capture,s=n;!fd&&r&&(s=n.__once||function a(l){this.removeEventListener(e,a,o),n.call(this,l)},n.__once=s),t.addEventListener(e,s,cd?i:o)}t.addEventListener(e,n,i)}function dd(t,e,n,i){var r=i&&typeof i!="boolean"?i.capture:i;t.removeEventListener(e,n,r),n.__once&&t.removeEventListener(e,n.__once,r)}function Ki(t,e,n,i){return Mh(t,e,n,i),function(){dd(t,e,n,i)}}function IR(t,e,n,i){if(i===void 0&&(i=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,n,i),t.dispatchEvent(r)}}function OR(t){var e=wi(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function FR(t,e,n){n===void 0&&(n=5);var i=!1,r=setTimeout(function(){i||IR(t,"transitionend",!0)},e+n),o=Ki(t,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(r),o()}}function sx(t,e,n,i){n==null&&(n=OR(t)||0);var r=FR(t,n,i),o=Ki(t,"transitionend",e);return function(){r(),o()}}function Ig(t,e){const n=wi(t,e)||"",i=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*i}function Th(t,e){const n=Ig(t,"transitionDuration"),i=Ig(t,"transitionDelay"),r=sx(t,o=>{o.target===t&&(r(),e(o))},n+i)}function Ts(...t){return t.filter(e=>e!=null).reduce((e,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?n:function(...r){e.apply(this,r),n.apply(this,r)}},null)}function ax(t){t.offsetHeight}const Og=t=>!t||typeof t=="function"?t:e=>{t.current=e};function kR(t,e){const n=Og(t),i=Og(e);return r=>{n&&n(r),i&&i(r)}}function cs(t,e){return L.useMemo(()=>kR(t,e),[t,e])}function zR(t){return t&&"setState"in t?Po.findDOMNode(t):t??null}const wh=Ie.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,onExited:o,addEndListener:s,children:a,childRef:l,...u},c)=>{const d=L.useRef(null),h=cs(d,l),m=T=>{h(zR(T))},_=T=>w=>{T&&d.current&&T(d.current,w)},x=L.useCallback(_(t),[t]),p=L.useCallback(_(e),[e]),f=L.useCallback(_(n),[n]),v=L.useCallback(_(i),[i]),g=L.useCallback(_(r),[r]),y=L.useCallback(_(o),[o]),E=L.useCallback(_(s),[s]);return X.jsx(Ni,{ref:c,...u,onEnter:x,onEntered:f,onEntering:p,onExit:v,onExited:y,onExiting:g,addEndListener:E,nodeRef:d,children:typeof a=="function"?(T,w)=>a(T,{...w,ref:m}):Ie.cloneElement(a,{ref:m})})}),BR={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function HR(t,e){const n=`offset${t[0].toUpperCase()}${t.slice(1)}`,i=e[n],r=BR[t];return i+parseInt(wi(e,r[0]),10)+parseInt(wi(e,r[1]),10)}const GR={[Gi]:"collapse",[ga]:"collapsing",[Vn]:"collapsing",[yi]:"collapse show"},VR=Ie.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:i,onExiting:r,className:o,children:s,dimension:a="height",in:l=!1,timeout:u=300,mountOnEnter:c=!1,unmountOnExit:d=!1,appear:h=!1,getDimensionValue:m=HR,..._},x)=>{const p=typeof a=="function"?a():a,f=L.useMemo(()=>Ts(T=>{T.style[p]="0"},t),[p,t]),v=L.useMemo(()=>Ts(T=>{const w=`scroll${p[0].toUpperCase()}${p.slice(1)}`;T.style[p]=`${T[w]}px`},e),[p,e]),g=L.useMemo(()=>Ts(T=>{T.style[p]=null},n),[p,n]),y=L.useMemo(()=>Ts(T=>{T.style[p]=`${m(p,T)}px`,ax(T)},i),[i,m,p]),E=L.useMemo(()=>Ts(T=>{T.style[p]=null},r),[p,r]);return X.jsx(wh,{ref:x,addEndListener:Th,..._,"aria-expanded":_.role?l:null,onEnter:f,onEntering:v,onEntered:g,onExit:y,onExiting:E,childRef:s.ref,in:l,timeout:u,mountOnEnter:c,unmountOnExit:d,appear:h,children:(T,w)=>Ie.cloneElement(s,{...w,className:Ge(o,s.props.className,GR[T],p==="width"&&"collapse-horizontal")})})});function WR(t){const e=L.useRef(t);return L.useEffect(()=>{e.current=t},[t]),e}function _t(t){const e=WR(t);return L.useCallback(function(...n){return e.current&&e.current(...n)},[e])}function lx(){return L.useState(null)}function jR(t,e,n,i=!1){const r=_t(n);L.useEffect(()=>{const o=typeof t=="function"?t():t;return o.addEventListener(e,r,i),()=>o.removeEventListener(e,r,i)},[t])}function ux(){const t=L.useRef(!0),e=L.useRef(()=>t.current);return L.useEffect(()=>(t.current=!0,()=>{t.current=!1}),[]),e.current}function cx(t){const e=L.useRef(null);return L.useEffect(()=>{e.current=t}),e.current}const XR=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",$R=typeof document<"u",uu=$R||XR?L.useLayoutEffect:L.useEffect,YR=["as","disabled"];function qR(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function KR(t){return!t||t.trim()==="#"}function Ah({tagName:t,disabled:e,href:n,target:i,rel:r,role:o,onClick:s,tabIndex:a=0,type:l}){t||(n!=null||i!=null||r!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:l||"button",disabled:e},u];const c=h=>{if((e||t==="a"&&KR(n))&&h.preventDefault(),e){h.stopPropagation();return}s==null||s(h)},d=h=>{h.key===" "&&(h.preventDefault(),c(h))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:o??"button",disabled:void 0,tabIndex:e?void 0:a,href:n,target:t==="a"?i:void 0,"aria-disabled":e||void 0,rel:t==="a"?r:void 0,onClick:c,onKeyDown:d},u]}const fx=L.forwardRef((t,e)=>{let{as:n,disabled:i}=t,r=qR(t,YR);const[o,{tagName:s}]=Ah(Object.assign({tagName:n,disabled:i},r));return X.jsx(s,Object.assign({},r,o,{ref:e}))});fx.displayName="Button";const ZR=["onKeyDown"];function QR(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function JR(t){return!t||t.trim()==="#"}const dx=L.forwardRef((t,e)=>{let{onKeyDown:n}=t,i=QR(t,ZR);const[r]=Ah(Object.assign({tagName:"a"},i)),o=_t(s=>{r.onKeyDown(s),n==null||n(s)});return JR(i.href)||i.role==="button"?X.jsx("a",Object.assign({ref:e},i,r,{onKeyDown:o})):X.jsx("a",Object.assign({ref:e},i,{onKeyDown:n}))});dx.displayName="Anchor";const eb={[Vn]:"show",[yi]:"show"},Bu=L.forwardRef(({className:t,children:e,transitionClasses:n={},onEnter:i,...r},o)=>{const s={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...r},a=L.useCallback((l,u)=>{ax(l),i==null||i(l,u)},[i]);return X.jsx(wh,{ref:o,addEndListener:Th,...s,onEnter:a,childRef:e.ref,children:(l,u)=>L.cloneElement(e,{...u,className:Ge("fade",t,e.props.className,eb[l],n[l])})})});Bu.displayName="Fade";const tb={"aria-label":Re.string,onClick:Re.func,variant:Re.oneOf(["white"])},Ch=L.forwardRef(({className:t,variant:e,"aria-label":n="Close",...i},r)=>X.jsx("button",{ref:r,type:"button",className:Ge("btn-close",e&&`btn-close-${e}`,t),"aria-label":n,...i}));Ch.displayName="CloseButton";Ch.propTypes=tb;const hx=t=>L.forwardRef((e,n)=>X.jsx("div",{...e,ref:n,className:Ge(e.className,t)}));var nb=/-(.)/g;function ib(t){return t.replace(nb,function(e,n){return n.toUpperCase()})}const rb=t=>t[0].toUpperCase()+ib(t).slice(1);function li(t,{displayName:e=rb(t),Component:n,defaultProps:i}={}){const r=L.forwardRef(({className:o,bsPrefix:s,as:a=n||"div",...l},u)=>{const c={...i,...l},d=Ze(s,t);return X.jsx(a,{ref:u,className:Ge(o,d),...c})});return r.displayName=e,r}const Hu=L.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:i,active:r=!1,disabled:o=!1,className:s,...a},l)=>{const u=Ze(e,"btn"),[c,{tagName:d}]=Ah({tagName:t,disabled:o,...a}),h=d;return X.jsx(h,{...c,...a,ref:l,disabled:o,className:Ge(s,u,r&&"active",n&&`${u}-${n}`,i&&`${u}-${i}`,a.href&&o&&"disabled")})});Hu.displayName="Button";function ob(t){const e=L.useRef(t);return e.current=t,e}function px(t){const e=ob(t);L.useEffect(()=>()=>e.current(),[])}function sb(t,e){return L.Children.toArray(t).some(n=>L.isValidElement(n)&&n.type===e)}function ab({as:t,bsPrefix:e,className:n,...i}){e=Ze(e,"col");const r=Sh(),o=Eh(),s=[],a=[];return r.forEach(l=>{const u=i[l];delete i[l];let c,d,h;typeof u=="object"&&u!=null?{span:c,offset:d,order:h}=u:c=u;const m=l!==o?`-${l}`:"";c&&s.push(c===!0?`${e}${m}`:`${e}${m}-${c}`),h!=null&&a.push(`order${m}-${h}`),d!=null&&a.push(`offset${m}-${d}`)}),[{...i,className:Ge(n,...s,...a)},{as:t,bsPrefix:e,spans:s}]}const cu=L.forwardRef((t,e)=>{const[{className:n,...i},{as:r="div",bsPrefix:o,spans:s}]=ab(t);return X.jsx(r,{...i,ref:e,className:Ge(n,!s.length&&o)})});cu.displayName="Col";var lb=Function.prototype.bind.call(Function.prototype.call,[].slice);function Vi(t,e){return lb(t.querySelectorAll(e))}function ub(t,e,n){const i=L.useRef(t!==void 0),[r,o]=L.useState(e),s=t!==void 0,a=i.current;return i.current=s,!s&&a&&r!==e&&o(e),[s?t:r,L.useCallback((...l)=>{const[u,...c]=l;let d=n==null?void 0:n(u,...c);return o(u),d},[n])]}function cb(){const[,t]=L.useReducer(e=>!e,!1);return t}const Gu=L.createContext(null);var Fg=Object.prototype.hasOwnProperty;function kg(t,e,n){for(n of t.keys())if(js(n,e))return n}function js(t,e){var n,i,r;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((i=t.length)===e.length)for(;i--&&js(t[i],e[i]););return i===-1}if(n===Set){if(t.size!==e.size)return!1;for(i of t)if(r=i,r&&typeof r=="object"&&(r=kg(e,r),!r)||!e.has(r))return!1;return!0}if(n===Map){if(t.size!==e.size)return!1;for(i of t)if(r=i[0],r&&typeof r=="object"&&(r=kg(e,r),!r)||!js(i[1],e.get(r)))return!1;return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((i=t.byteLength)===e.byteLength)for(;i--&&t.getInt8(i)===e.getInt8(i););return i===-1}if(ArrayBuffer.isView(t)){if((i=t.byteLength)===e.byteLength)for(;i--&&t[i]===e[i];);return i===-1}if(!n||typeof t=="object"){i=0;for(n in t)if(Fg.call(t,n)&&++i&&!Fg.call(e,n)||!(n in e)||!js(t[n],e[n]))return!1;return Object.keys(e).length===i}}return t!==t&&e!==e}function fb(t){const e=ux();return[t[0],L.useCallback(n=>{if(e())return t[1](n)},[e,t[1]])]}var an="top",Dn="bottom",Nn="right",ln="left",Rh="auto",Ca=[an,Dn,Nn,ln],Zo="start",va="end",db="clippingParents",mx="viewport",ws="popper",hb="reference",zg=Ca.reduce(function(t,e){return t.concat([e+"-"+Zo,e+"-"+va])},[]),gx=[].concat(Ca,[Rh]).reduce(function(t,e){return t.concat([e,e+"-"+Zo,e+"-"+va])},[]),pb="beforeRead",mb="read",gb="afterRead",vb="beforeMain",_b="main",xb="afterMain",yb="beforeWrite",Sb="write",Eb="afterWrite",Mb=[pb,mb,gb,vb,_b,xb,yb,Sb,Eb];function oi(t){return t.split("-")[0]}function xn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function jr(t){var e=xn(t).Element;return t instanceof e||t instanceof Element}function si(t){var e=xn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function bh(t){if(typeof ShadowRoot>"u")return!1;var e=xn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var Fr=Math.max,fu=Math.min,Qo=Math.round;function hd(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function vx(){return!/^((?!chrome|android).)*safari/i.test(hd())}function Jo(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var i=t.getBoundingClientRect(),r=1,o=1;e&&si(t)&&(r=t.offsetWidth>0&&Qo(i.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Qo(i.height)/t.offsetHeight||1);var s=jr(t)?xn(t):window,a=s.visualViewport,l=!vx()&&n,u=(i.left+(l&&a?a.offsetLeft:0))/r,c=(i.top+(l&&a?a.offsetTop:0))/o,d=i.width/r,h=i.height/o;return{width:d,height:h,top:c,right:u+d,bottom:c+h,left:u,x:u,y:c}}function Ph(t){var e=Jo(t),n=t.offsetWidth,i=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-i)<=1&&(i=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:i}}function _x(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&bh(n)){var i=e;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function fr(t){return t?(t.nodeName||"").toLowerCase():null}function Pi(t){return xn(t).getComputedStyle(t)}function Tb(t){return["table","td","th"].indexOf(fr(t))>=0}function gr(t){return((jr(t)?t.ownerDocument:t.document)||window.document).documentElement}function Vu(t){return fr(t)==="html"?t:t.assignedSlot||t.parentNode||(bh(t)?t.host:null)||gr(t)}function Bg(t){return!si(t)||Pi(t).position==="fixed"?null:t.offsetParent}function wb(t){var e=/firefox/i.test(hd()),n=/Trident/i.test(hd());if(n&&si(t)){var i=Pi(t);if(i.position==="fixed")return null}var r=Vu(t);for(bh(r)&&(r=r.host);si(r)&&["html","body"].indexOf(fr(r))<0;){var o=Pi(r);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return r;r=r.parentNode}return null}function Ra(t){for(var e=xn(t),n=Bg(t);n&&Tb(n)&&Pi(n).position==="static";)n=Bg(n);return n&&(fr(n)==="html"||fr(n)==="body"&&Pi(n).position==="static")?e:n||wb(t)||e}function Lh(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Xs(t,e,n){return Fr(t,fu(e,n))}function Ab(t,e,n){var i=Xs(t,e,n);return i>n?n:i}function xx(){return{top:0,right:0,bottom:0,left:0}}function yx(t){return Object.assign({},xx(),t)}function Sx(t,e){return e.reduce(function(n,i){return n[i]=t,n},{})}var Cb=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,yx(typeof e!="number"?e:Sx(e,Ca))};function Rb(t){var e,n=t.state,i=t.name,r=t.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=oi(n.placement),l=Lh(a),u=[ln,Nn].indexOf(a)>=0,c=u?"height":"width";if(!(!o||!s)){var d=Cb(r.padding,n),h=Ph(o),m=l==="y"?an:ln,_=l==="y"?Dn:Nn,x=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],p=s[l]-n.rects.reference[l],f=Ra(o),v=f?l==="y"?f.clientHeight||0:f.clientWidth||0:0,g=x/2-p/2,y=d[m],E=v-h[c]-d[_],T=v/2-h[c]/2+g,w=Xs(y,T,E),b=l;n.modifiersData[i]=(e={},e[b]=w,e.centerOffset=w-T,e)}}function bb(t){var e=t.state,n=t.options,i=n.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=e.elements.popper.querySelector(r),!r)||_x(e.elements.popper,r)&&(e.elements.arrow=r))}const Pb={name:"arrow",enabled:!0,phase:"main",fn:Rb,effect:bb,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function es(t){return t.split("-")[1]}var Lb={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Db(t,e){var n=t.x,i=t.y,r=e.devicePixelRatio||1;return{x:Qo(n*r)/r||0,y:Qo(i*r)/r||0}}function Hg(t){var e,n=t.popper,i=t.popperRect,r=t.placement,o=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=t.isFixed,h=s.x,m=h===void 0?0:h,_=s.y,x=_===void 0?0:_,p=typeof c=="function"?c({x:m,y:x}):{x:m,y:x};m=p.x,x=p.y;var f=s.hasOwnProperty("x"),v=s.hasOwnProperty("y"),g=ln,y=an,E=window;if(u){var T=Ra(n),w="clientHeight",b="clientWidth";if(T===xn(n)&&(T=gr(n),Pi(T).position!=="static"&&a==="absolute"&&(w="scrollHeight",b="scrollWidth")),T=T,r===an||(r===ln||r===Nn)&&o===va){y=Dn;var S=d&&T===E&&E.visualViewport?E.visualViewport.height:T[w];x-=S-i.height,x*=l?1:-1}if(r===ln||(r===an||r===Dn)&&o===va){g=Nn;var A=d&&T===E&&E.visualViewport?E.visualViewport.width:T[b];m-=A-i.width,m*=l?1:-1}}var B=Object.assign({position:a},u&&Lb),$=c===!0?Db({x:m,y:x},xn(n)):{x:m,y:x};if(m=$.x,x=$.y,l){var N;return Object.assign({},B,(N={},N[y]=v?"0":"",N[g]=f?"0":"",N.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+x+"px)":"translate3d("+m+"px, "+x+"px, 0)",N))}return Object.assign({},B,(e={},e[y]=v?x+"px":"",e[g]=f?m+"px":"",e.transform="",e))}function Nb(t){var e=t.state,n=t.options,i=n.gpuAcceleration,r=i===void 0?!0:i,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:oi(e.placement),variation:es(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Hg(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Hg(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ub={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Nb,data:{}};var vl={passive:!0};function Ib(t){var e=t.state,n=t.instance,i=t.options,r=i.scroll,o=r===void 0?!0:r,s=i.resize,a=s===void 0?!0:s,l=xn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(c){c.addEventListener("scroll",n.update,vl)}),a&&l.addEventListener("resize",n.update,vl),function(){o&&u.forEach(function(c){c.removeEventListener("scroll",n.update,vl)}),a&&l.removeEventListener("resize",n.update,vl)}}const Ob={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ib,data:{}};var Fb={left:"right",right:"left",bottom:"top",top:"bottom"};function Ul(t){return t.replace(/left|right|bottom|top/g,function(e){return Fb[e]})}var kb={start:"end",end:"start"};function Gg(t){return t.replace(/start|end/g,function(e){return kb[e]})}function Dh(t){var e=xn(t),n=e.pageXOffset,i=e.pageYOffset;return{scrollLeft:n,scrollTop:i}}function Nh(t){return Jo(gr(t)).left+Dh(t).scrollLeft}function zb(t,e){var n=xn(t),i=gr(t),r=n.visualViewport,o=i.clientWidth,s=i.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;var u=vx();(u||!u&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a+Nh(t),y:l}}function Bb(t){var e,n=gr(t),i=Dh(t),r=(e=t.ownerDocument)==null?void 0:e.body,o=Fr(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=Fr(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+Nh(t),l=-i.scrollTop;return Pi(r||n).direction==="rtl"&&(a+=Fr(n.clientWidth,r?r.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function Uh(t){var e=Pi(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Ex(t){return["html","body","#document"].indexOf(fr(t))>=0?t.ownerDocument.body:si(t)&&Uh(t)?t:Ex(Vu(t))}function $s(t,e){var n;e===void 0&&(e=[]);var i=Ex(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),o=xn(i),s=r?[o].concat(o.visualViewport||[],Uh(i)?i:[]):i,a=e.concat(s);return r?a:a.concat($s(Vu(s)))}function pd(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Hb(t,e){var n=Jo(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Vg(t,e,n){return e===mx?pd(zb(t,n)):jr(e)?Hb(e,n):pd(Bb(gr(t)))}function Gb(t){var e=$s(Vu(t)),n=["absolute","fixed"].indexOf(Pi(t).position)>=0,i=n&&si(t)?Ra(t):t;return jr(i)?e.filter(function(r){return jr(r)&&_x(r,i)&&fr(r)!=="body"}):[]}function Vb(t,e,n,i){var r=e==="clippingParents"?Gb(t):[].concat(e),o=[].concat(r,[n]),s=o[0],a=o.reduce(function(l,u){var c=Vg(t,u,i);return l.top=Fr(c.top,l.top),l.right=fu(c.right,l.right),l.bottom=fu(c.bottom,l.bottom),l.left=Fr(c.left,l.left),l},Vg(t,s,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Mx(t){var e=t.reference,n=t.element,i=t.placement,r=i?oi(i):null,o=i?es(i):null,s=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(r){case an:l={x:s,y:e.y-n.height};break;case Dn:l={x:s,y:e.y+e.height};break;case Nn:l={x:e.x+e.width,y:a};break;case ln:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=r?Lh(r):null;if(u!=null){var c=u==="y"?"height":"width";switch(o){case Zo:l[u]=l[u]-(e[c]/2-n[c]/2);break;case va:l[u]=l[u]+(e[c]/2-n[c]/2);break}}return l}function _a(t,e){e===void 0&&(e={});var n=e,i=n.placement,r=i===void 0?t.placement:i,o=n.strategy,s=o===void 0?t.strategy:o,a=n.boundary,l=a===void 0?db:a,u=n.rootBoundary,c=u===void 0?mx:u,d=n.elementContext,h=d===void 0?ws:d,m=n.altBoundary,_=m===void 0?!1:m,x=n.padding,p=x===void 0?0:x,f=yx(typeof p!="number"?p:Sx(p,Ca)),v=h===ws?hb:ws,g=t.rects.popper,y=t.elements[_?v:h],E=Vb(jr(y)?y:y.contextElement||gr(t.elements.popper),l,c,s),T=Jo(t.elements.reference),w=Mx({reference:T,element:g,strategy:"absolute",placement:r}),b=pd(Object.assign({},g,w)),S=h===ws?b:T,A={top:E.top-S.top+f.top,bottom:S.bottom-E.bottom+f.bottom,left:E.left-S.left+f.left,right:S.right-E.right+f.right},B=t.modifiersData.offset;if(h===ws&&B){var $=B[r];Object.keys(A).forEach(function(N){var z=[Nn,Dn].indexOf(N)>=0?1:-1,H=[an,Dn].indexOf(N)>=0?"y":"x";A[N]+=$[H]*z})}return A}function Wb(t,e){e===void 0&&(e={});var n=e,i=n.placement,r=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?gx:l,c=es(i),d=c?a?zg:zg.filter(function(_){return es(_)===c}):Ca,h=d.filter(function(_){return u.indexOf(_)>=0});h.length===0&&(h=d);var m=h.reduce(function(_,x){return _[x]=_a(t,{placement:x,boundary:r,rootBoundary:o,padding:s})[oi(x)],_},{});return Object.keys(m).sort(function(_,x){return m[_]-m[x]})}function jb(t){if(oi(t)===Rh)return[];var e=Ul(t);return[Gg(t),e,Gg(e)]}function Xb(t){var e=t.state,n=t.options,i=t.name;if(!e.modifiersData[i]._skip){for(var r=n.mainAxis,o=r===void 0?!0:r,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,u=n.padding,c=n.boundary,d=n.rootBoundary,h=n.altBoundary,m=n.flipVariations,_=m===void 0?!0:m,x=n.allowedAutoPlacements,p=e.options.placement,f=oi(p),v=f===p,g=l||(v||!_?[Ul(p)]:jb(p)),y=[p].concat(g).reduce(function(ie,ne){return ie.concat(oi(ne)===Rh?Wb(e,{placement:ne,boundary:c,rootBoundary:d,padding:u,flipVariations:_,allowedAutoPlacements:x}):ne)},[]),E=e.rects.reference,T=e.rects.popper,w=new Map,b=!0,S=y[0],A=0;A<y.length;A++){var B=y[A],$=oi(B),N=es(B)===Zo,z=[an,Dn].indexOf($)>=0,H=z?"width":"height",Z=_a(e,{placement:B,boundary:c,rootBoundary:d,altBoundary:h,padding:u}),W=z?N?Nn:ln:N?Dn:an;E[H]>T[H]&&(W=Ul(W));var P=Ul(W),G=[];if(o&&G.push(Z[$]<=0),a&&G.push(Z[W]<=0,Z[P]<=0),G.every(function(ie){return ie})){S=B,b=!1;break}w.set(B,G)}if(b)for(var O=_?3:1,U=function(ne){var ue=y.find(function(ge){var me=w.get(ge);if(me)return me.slice(0,ne).every(function(be){return be})});if(ue)return S=ue,"break"},F=O;F>0;F--){var ee=U(F);if(ee==="break")break}e.placement!==S&&(e.modifiersData[i]._skip=!0,e.placement=S,e.reset=!0)}}const $b={name:"flip",enabled:!0,phase:"main",fn:Xb,requiresIfExists:["offset"],data:{_skip:!1}};function Wg(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function jg(t){return[an,Nn,Dn,ln].some(function(e){return t[e]>=0})}function Yb(t){var e=t.state,n=t.name,i=e.rects.reference,r=e.rects.popper,o=e.modifiersData.preventOverflow,s=_a(e,{elementContext:"reference"}),a=_a(e,{altBoundary:!0}),l=Wg(s,i),u=Wg(a,r,o),c=jg(l),d=jg(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}const qb={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Yb};function Kb(t,e,n){var i=oi(t),r=[ln,an].indexOf(i)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*r,[ln,Nn].indexOf(i)>=0?{x:a,y:s}:{x:s,y:a}}function Zb(t){var e=t.state,n=t.options,i=t.name,r=n.offset,o=r===void 0?[0,0]:r,s=gx.reduce(function(c,d){return c[d]=Kb(d,e.rects,o),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[i]=s}const Qb={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Zb};function Jb(t){var e=t.state,n=t.name;e.modifiersData[n]=Mx({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const e2={name:"popperOffsets",enabled:!0,phase:"read",fn:Jb,data:{}};function t2(t){return t==="x"?"y":"x"}function n2(t){var e=t.state,n=t.options,i=t.name,r=n.mainAxis,o=r===void 0?!0:r,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,d=n.padding,h=n.tether,m=h===void 0?!0:h,_=n.tetherOffset,x=_===void 0?0:_,p=_a(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),f=oi(e.placement),v=es(e.placement),g=!v,y=Lh(f),E=t2(y),T=e.modifiersData.popperOffsets,w=e.rects.reference,b=e.rects.popper,S=typeof x=="function"?x(Object.assign({},e.rects,{placement:e.placement})):x,A=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),B=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,$={x:0,y:0};if(T){if(o){var N,z=y==="y"?an:ln,H=y==="y"?Dn:Nn,Z=y==="y"?"height":"width",W=T[y],P=W+p[z],G=W-p[H],O=m?-b[Z]/2:0,U=v===Zo?w[Z]:b[Z],F=v===Zo?-b[Z]:-w[Z],ee=e.elements.arrow,ie=m&&ee?Ph(ee):{width:0,height:0},ne=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:xx(),ue=ne[z],ge=ne[H],me=Xs(0,w[Z],ie[Z]),be=g?w[Z]/2-O-me-ue-A.mainAxis:U-me-ue-A.mainAxis,Ye=g?-w[Z]/2+O+me+ge+A.mainAxis:F+me+ge+A.mainAxis,Te=e.elements.arrow&&Ra(e.elements.arrow),k=Te?y==="y"?Te.clientTop||0:Te.clientLeft||0:0,qe=(N=B==null?void 0:B[y])!=null?N:0,_e=W+be-qe-k,he=W+Ye-qe,we=Xs(m?fu(P,_e):P,W,m?Fr(G,he):G);T[y]=we,$[y]=we-W}if(a){var Ve,Ue=y==="x"?an:ln,Pe=y==="x"?Dn:Nn,Oe=T[E],et=E==="y"?"height":"width",ut=Oe+p[Ue],R=Oe-p[Pe],M=[an,ln].indexOf(f)!==-1,I=(Ve=B==null?void 0:B[E])!=null?Ve:0,re=M?ut:Oe-w[et]-b[et]-I+A.altAxis,te=M?Oe+w[et]+b[et]-I-A.altAxis:R,se=m&&M?Ab(re,Oe,te):Xs(m?re:ut,Oe,m?te:R);T[E]=se,$[E]=se-Oe}e.modifiersData[i]=$}}const i2={name:"preventOverflow",enabled:!0,phase:"main",fn:n2,requiresIfExists:["offset"]};function r2(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function o2(t){return t===xn(t)||!si(t)?Dh(t):r2(t)}function s2(t){var e=t.getBoundingClientRect(),n=Qo(e.width)/t.offsetWidth||1,i=Qo(e.height)/t.offsetHeight||1;return n!==1||i!==1}function a2(t,e,n){n===void 0&&(n=!1);var i=si(e),r=si(e)&&s2(e),o=gr(e),s=Jo(t,r,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&((fr(e)!=="body"||Uh(o))&&(a=o2(e)),si(e)?(l=Jo(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=Nh(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function l2(t){var e=new Map,n=new Set,i=[];t.forEach(function(o){e.set(o.name,o)});function r(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&r(l)}}),i.push(o)}return t.forEach(function(o){n.has(o.name)||r(o)}),i}function u2(t){var e=l2(t);return Mb.reduce(function(n,i){return n.concat(e.filter(function(r){return r.phase===i}))},[])}function c2(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function f2(t){var e=t.reduce(function(n,i){var r=n[i.name];return n[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,n},{});return Object.keys(e).map(function(n){return e[n]})}var Xg={placement:"bottom",modifiers:[],strategy:"absolute"};function $g(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function d2(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,i=n===void 0?[]:n,r=e.defaultOptions,o=r===void 0?Xg:r;return function(a,l,u){u===void 0&&(u=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xg,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],h=!1,m={state:c,setOptions:function(f){var v=typeof f=="function"?f(c.options):f;x(),c.options=Object.assign({},o,c.options,v),c.scrollParents={reference:jr(a)?$s(a):a.contextElement?$s(a.contextElement):[],popper:$s(l)};var g=u2(f2([].concat(i,c.options.modifiers)));return c.orderedModifiers=g.filter(function(y){return y.enabled}),_(),m.update()},forceUpdate:function(){if(!h){var f=c.elements,v=f.reference,g=f.popper;if($g(v,g)){c.rects={reference:a2(v,Ra(g),c.options.strategy==="fixed"),popper:Ph(g)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(A){return c.modifiersData[A.name]=Object.assign({},A.data)});for(var y=0;y<c.orderedModifiers.length;y++){if(c.reset===!0){c.reset=!1,y=-1;continue}var E=c.orderedModifiers[y],T=E.fn,w=E.options,b=w===void 0?{}:w,S=E.name;typeof T=="function"&&(c=T({state:c,options:b,name:S,instance:m})||c)}}}},update:c2(function(){return new Promise(function(p){m.forceUpdate(),p(c)})}),destroy:function(){x(),h=!0}};if(!$g(a,l))return m;m.setOptions(u).then(function(p){!h&&u.onFirstUpdate&&u.onFirstUpdate(p)});function _(){c.orderedModifiers.forEach(function(p){var f=p.name,v=p.options,g=v===void 0?{}:v,y=p.effect;if(typeof y=="function"){var E=y({state:c,name:f,instance:m,options:g}),T=function(){};d.push(E||T)}})}function x(){d.forEach(function(p){return p()}),d=[]}return m}}const h2=d2({defaultModifiers:[qb,e2,Ub,Ob,Qb,$b,i2,Pb]}),p2=["enabled","placement","strategy","modifiers"];function m2(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const g2={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},v2={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:t})=>()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const i=(e.getAttribute("aria-describedby")||"").split(",").filter(r=>r.trim()!==n.id);i.length?e.setAttribute("aria-describedby",i.join(",")):e.removeAttribute("aria-describedby")}},fn:({state:t})=>{var e;const{popper:n,reference:i}=t.elements,r=(e=n.getAttribute("role"))==null?void 0:e.toLowerCase();if(n.id&&r==="tooltip"&&"setAttribute"in i){const o=i.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(n.id)!==-1)return;i.setAttribute("aria-describedby",o?`${o},${n.id}`:n.id)}}},_2=[];function x2(t,e,n={}){let{enabled:i=!0,placement:r="bottom",strategy:o="absolute",modifiers:s=_2}=n,a=m2(n,p2);const l=L.useRef(s),u=L.useRef(),c=L.useCallback(()=>{var p;(p=u.current)==null||p.update()},[]),d=L.useCallback(()=>{var p;(p=u.current)==null||p.forceUpdate()},[]),[h,m]=fb(L.useState({placement:r,update:c,forceUpdate:d,attributes:{},styles:{popper:{},arrow:{}}})),_=L.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const f={},v={};Object.keys(p.elements).forEach(g=>{f[g]=p.styles[g],v[g]=p.attributes[g]}),m({state:p,styles:f,attributes:v,update:c,forceUpdate:d,placement:p.placement})}}),[c,d,m]),x=L.useMemo(()=>(js(l.current,s)||(l.current=s),l.current),[s]);return L.useEffect(()=>{!u.current||!i||u.current.setOptions({placement:r,strategy:o,modifiers:[...x,_,g2]})},[o,r,_,i,x]),L.useEffect(()=>{if(!(!i||t==null||e==null))return u.current=h2(t,e,Object.assign({},a,{placement:r,strategy:o,modifiers:[...x,v2,_]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,m(p=>Object.assign({},p,{attributes:{},styles:{popper:{}}})))}},[i,t,e]),h}function du(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}var y2=function(){},S2=y2;const E2=ts(S2),Yg=()=>{};function M2(t){return t.button===0}function T2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const Qc=t=>t&&("current"in t?t.current:t),qg={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function w2(t,e=Yg,{disabled:n,clickTrigger:i="click"}={}){const r=L.useRef(!1),o=L.useRef(!1),s=L.useCallback(u=>{const c=Qc(t);E2(!!c,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),r.current=!c||T2(u)||!M2(u)||!!du(c,u.target)||o.current,o.current=!1},[t]),a=_t(u=>{const c=Qc(t);c&&du(c,u.target)&&(o.current=!0)}),l=_t(u=>{r.current||e(u)});L.useEffect(()=>{var u,c;if(n||t==null)return;const d=Aa(Qc(t)),h=d.defaultView||window;let m=(u=h.event)!=null?u:(c=h.parent)==null?void 0:c.event,_=null;qg[i]&&(_=Ki(d,qg[i],a,!0));const x=Ki(d,i,s,!0),p=Ki(d,i,v=>{if(v===m){m=void 0;return}l(v)});let f=[];return"ontouchstart"in d.documentElement&&(f=[].slice.call(d.body.children).map(v=>Ki(v,"mousemove",Yg))),()=>{_==null||_(),x(),p(),f.forEach(v=>v())}},[t,n,i,s,a,l])}function A2(t){const e={};return Array.isArray(t)?(t==null||t.forEach(n=>{e[n.name]=n}),e):t||e}function C2(t={}){return Array.isArray(t)?t:Object.keys(t).map(e=>(t[e].name=e,t[e]))}function R2({enabled:t,enableEvents:e,placement:n,flip:i,offset:r,fixed:o,containerPadding:s,arrowElement:a,popperConfig:l={}}){var u,c,d,h,m;const _=A2(l.modifiers);return Object.assign({},l,{placement:n,enabled:t,strategy:o?"fixed":l.strategy,modifiers:C2(Object.assign({},_,{eventListeners:{enabled:e,options:(u=_.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},_.preventOverflow,{options:s?Object.assign({padding:s},(c=_.preventOverflow)==null?void 0:c.options):(d=_.preventOverflow)==null?void 0:d.options}),offset:{options:Object.assign({offset:r},(h=_.offset)==null?void 0:h.options)},arrow:Object.assign({},_.arrow,{enabled:!!a,options:Object.assign({},(m=_.arrow)==null?void 0:m.options,{element:a})}),flip:Object.assign({enabled:!!i},_.flip)}))})}const b2=["children"];function P2(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}const L2=()=>{};function Tx(t={}){const e=L.useContext(Gu),[n,i]=lx(),r=L.useRef(!1),{flip:o,offset:s,rootCloseEvent:a,fixed:l=!1,placement:u,popperConfig:c={},enableEventListeners:d=!0,usePopper:h=!!e}=t,m=(e==null?void 0:e.show)==null?!!t.show:e.show;m&&!r.current&&(r.current=!0);const _=T=>{e==null||e.toggle(!1,T)},{placement:x,setMenu:p,menuElement:f,toggleElement:v}=e||{},g=x2(v,f,R2({placement:u||x||"bottom-start",enabled:h,enableEvents:d??m,offset:s,flip:o,fixed:l,arrowElement:n,popperConfig:c})),y=Object.assign({ref:p||L2,"aria-labelledby":v==null?void 0:v.id},g.attributes.popper,{style:g.styles.popper}),E={show:m,placement:x,hasShown:r.current,toggle:e==null?void 0:e.toggle,popper:h?g:null,arrowProps:h?Object.assign({ref:i},g.attributes.arrow,{style:g.styles.arrow}):{}};return w2(f,_,{clickTrigger:a,disabled:!m}),[y,E]}const D2={usePopper:!0};function Ih(t){let{children:e}=t,n=P2(t,b2);const[i,r]=Tx(n);return X.jsx(X.Fragment,{children:e(i,r)})}Ih.displayName="DropdownMenu";Ih.defaultProps=D2;const hu={prefix:String(Math.round(Math.random()*1e10)),current:0,isSSR:!1},Oh=Ie.createContext(hu);let N2=!!(typeof window<"u"&&window.document&&window.document.createElement),Jc=new WeakMap;function U2(t=!1){let e=L.useContext(Oh),n=L.useRef(null);if(n.current===null&&!t){var i,r;let o=(i=Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||i===void 0||(r=i.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(o){let s=Jc.get(o);s==null?Jc.set(o,{id:e.current,state:o.memoizedState}):o.memoizedState!==s.state&&(e.current=s.id,Jc.delete(o))}n.current=++e.current}return n.current}function I2(t){let e=L.useContext(Oh);e===hu&&!N2&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=U2(!!t),i=`react-aria${e.prefix}`;return t||`${i}-${n}`}function O2(t){let e=Ie.useId(),[n]=L.useState(H2()),i=n?"react-aria":`react-aria${hu.prefix}`;return t||`${i}-${e}`}const F2=typeof Ie.useId=="function"?O2:I2;function k2(){return!1}function z2(){return!0}function B2(t){return()=>{}}function H2(){return typeof Ie.useSyncExternalStore=="function"?Ie.useSyncExternalStore(B2,k2,z2):L.useContext(Oh).isSSR}const wx=t=>{var e;return((e=t.getAttribute("role"))==null?void 0:e.toLowerCase())==="menu"},Kg=()=>{};function Ax(){const t=F2(),{show:e=!1,toggle:n=Kg,setToggle:i,menuElement:r}=L.useContext(Gu)||{},o=L.useCallback(a=>{n(!e,a)},[e,n]),s={id:t,ref:i||Kg,onClick:o,"aria-expanded":!!e};return r&&wx(r)&&(s["aria-haspopup"]=!0),[s,{show:e,toggle:n}]}function Cx({children:t}){const[e,n]=Ax();return X.jsx(X.Fragment,{children:t(e,n)})}Cx.displayName="DropdownToggle";const pu=L.createContext(null),Zg=(t,e=null)=>t!=null?String(t):e||null,Rx=L.createContext(null);Rx.displayName="NavContext";const G2="data-rr-ui-";function Fh(t){return`${G2}${t}`}const V2=["eventKey","disabled","onClick","active","as"];function W2(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function bx({key:t,href:e,active:n,disabled:i,onClick:r}){const o=L.useContext(pu),s=L.useContext(Rx),{activeKey:a}=s||{},l=Zg(t,e),u=n==null&&t!=null?Zg(a)===l:n;return[{onClick:_t(d=>{i||(r==null||r(d),o&&!d.isPropagationStopped()&&o(l,d))}),"aria-disabled":i||void 0,"aria-selected":u,[Fh("dropdown-item")]:""},{isActive:u}]}const Px=L.forwardRef((t,e)=>{let{eventKey:n,disabled:i,onClick:r,active:o,as:s=fx}=t,a=W2(t,V2);const[l]=bx({key:n,href:a.href,disabled:i,onClick:r,active:o});return X.jsx(s,Object.assign({},a,{ref:e},l))});Px.displayName="DropdownItem";const Lx=L.createContext(us?window:void 0);Lx.Provider;function Wu(){return L.useContext(Lx)}function Qg(){const t=cb(),e=L.useRef(null),n=L.useCallback(i=>{e.current=i,t()},[t]);return[e,n]}function ba({defaultShow:t,show:e,onSelect:n,onToggle:i,itemSelector:r=`* [${Fh("dropdown-item")}]`,focusFirstItemOnShow:o,placement:s="bottom-start",children:a}){const l=Wu(),[u,c]=ub(e,t,i),[d,h]=Qg(),m=d.current,[_,x]=Qg(),p=_.current,f=cx(u),v=L.useRef(null),g=L.useRef(!1),y=L.useContext(pu),E=L.useCallback((B,$,N=$==null?void 0:$.type)=>{c(B,{originalEvent:$,source:N})},[c]),T=_t((B,$)=>{n==null||n(B,$),E(!1,$,"select"),$.isPropagationStopped()||y==null||y(B,$)}),w=L.useMemo(()=>({toggle:E,placement:s,show:u,menuElement:m,toggleElement:p,setMenu:h,setToggle:x}),[E,s,u,m,p,h,x]);m&&f&&!u&&(g.current=m.contains(m.ownerDocument.activeElement));const b=_t(()=>{p&&p.focus&&p.focus()}),S=_t(()=>{const B=v.current;let $=o;if($==null&&($=d.current&&wx(d.current)?"keyboard":!1),$===!1||$==="keyboard"&&!/^key.+$/.test(B))return;const N=Vi(d.current,r)[0];N&&N.focus&&N.focus()});L.useEffect(()=>{u?S():g.current&&(g.current=!1,b())},[u,g,b,S]),L.useEffect(()=>{v.current=null});const A=(B,$)=>{if(!d.current)return null;const N=Vi(d.current,r);let z=N.indexOf(B)+$;return z=Math.max(0,Math.min(z,N.length)),N[z]};return jR(L.useCallback(()=>l.document,[l]),"keydown",B=>{var $,N;const{key:z}=B,H=B.target,Z=($=d.current)==null?void 0:$.contains(H),W=(N=_.current)==null?void 0:N.contains(H);if(/input|textarea/i.test(H.tagName)&&(z===" "||z!=="Escape"&&Z||z==="Escape"&&H.type==="search")||!Z&&!W||z==="Tab"&&(!d.current||!u))return;v.current=B.type;const G={originalEvent:B,source:B.type};switch(z){case"ArrowUp":{const O=A(H,-1);O&&O.focus&&O.focus(),B.preventDefault();return}case"ArrowDown":if(B.preventDefault(),!u)c(!0,G);else{const O=A(H,1);O&&O.focus&&O.focus()}return;case"Tab":Mh(H.ownerDocument,"keyup",O=>{var U;(O.key==="Tab"&&!O.target||!((U=d.current)!=null&&U.contains(O.target)))&&c(!1,G)},{once:!0});break;case"Escape":z==="Escape"&&(B.preventDefault(),B.stopPropagation()),c(!1,G);break}}),X.jsx(pu.Provider,{value:T,children:X.jsx(Gu.Provider,{value:w,children:a})})}ba.displayName="Dropdown";ba.Menu=Ih;ba.Toggle=Cx;ba.Item=Px;const kh=L.createContext({});kh.displayName="DropdownContext";const Dx=L.forwardRef(({bsPrefix:t,className:e,eventKey:n,disabled:i=!1,onClick:r,active:o,as:s=dx,...a},l)=>{const u=Ze(t,"dropdown-item"),[c,d]=bx({key:n,href:a.href,disabled:i,onClick:r,active:o});return X.jsx(s,{...a,...c,ref:l,className:Ge(e,u,d.isActive&&"active",i&&"disabled")})});Dx.displayName="DropdownItem";const zh=L.createContext(null);zh.displayName="InputGroupContext";const Yr=L.createContext(null);Yr.displayName="NavbarContext";function Nx(t,e){return t}const po=Re.oneOf(["start","end"]),j2=Re.oneOfType([po,Re.shape({sm:po}),Re.shape({md:po}),Re.shape({lg:po}),Re.shape({xl:po}),Re.shape({xxl:po}),Re.object]);function Ux(t,e,n){const i=n?"top-end":"top-start",r=n?"top-start":"top-end",o=n?"bottom-end":"bottom-start",s=n?"bottom-start":"bottom-end",a=n?"right-start":"left-start",l=n?"right-end":"left-end",u=n?"left-start":"right-start",c=n?"left-end":"right-end";let d=t?s:o;return e==="up"?d=t?r:i:e==="end"?d=t?c:u:e==="start"?d=t?l:a:e==="down-centered"?d="bottom":e==="up-centered"&&(d="top"),d}const Bh=L.forwardRef(({bsPrefix:t,className:e,align:n,rootCloseEvent:i,flip:r=!0,show:o,renderOnMount:s,as:a="div",popperConfig:l,variant:u,...c},d)=>{let h=!1;const m=L.useContext(Yr),_=Ze(t,"dropdown-menu"),{align:x,drop:p,isRTL:f}=L.useContext(kh);n=n||x;const v=L.useContext(zh),g=[];if(n)if(typeof n=="object"){const B=Object.keys(n);if(B.length){const $=B[0],N=n[$];h=N==="start",g.push(`${_}-${$}-${N}`)}}else n==="end"&&(h=!0);const y=Ux(h,p,f),[E,{hasShown:T,popper:w,show:b,toggle:S}]=Tx({flip:r,rootCloseEvent:i,show:o,usePopper:!m&&g.length===0,offset:[0,2],popperConfig:l,placement:y});if(E.ref=cs(Nx(d),E.ref),uu(()=>{b&&(w==null||w.update())},[b]),!T&&!s&&!v)return null;typeof a!="string"&&(E.show=b,E.close=()=>S==null?void 0:S(!1),E.align=n);let A=c.style;return w!=null&&w.placement&&(A={...c.style,...E.style},c["x-placement"]=w.placement),X.jsx(a,{...c,...E,style:A,...(g.length||m)&&{"data-bs-popper":"static"},className:Ge(e,_,b&&"show",h&&`${_}-end`,u&&`${_}-${u}`,...g)})});Bh.displayName="DropdownMenu";const Hh=L.forwardRef(({bsPrefix:t,split:e,className:n,childBsPrefix:i,as:r=Hu,...o},s)=>{const a=Ze(t,"dropdown-toggle"),l=L.useContext(Gu);i!==void 0&&(o.bsPrefix=i);const[u]=Ax();return u.ref=cs(u.ref,Nx(s)),X.jsx(r,{className:Ge(n,a,e&&`${a}-split`,(l==null?void 0:l.show)&&"show"),...u,...o})});Hh.displayName="DropdownToggle";const X2=li("dropdown-header",{defaultProps:{role:"heading"}}),$2=li("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),Y2=li("dropdown-item-text",{Component:"span"}),Ix=L.forwardRef((t,e)=>{const{bsPrefix:n,drop:i="down",show:r,className:o,align:s="start",onSelect:a,onToggle:l,focusFirstItemOnShow:u,as:c="div",navbar:d,autoClose:h=!0,...m}=Q0(t,{show:"onToggle"}),_=L.useContext(zh),x=Ze(n,"dropdown"),p=tx(),f=w=>h===!1?w==="click":h==="inside"?w!=="rootClose":h==="outside"?w!=="select":!0,v=_t((w,b)=>{b.originalEvent.currentTarget===document&&(b.source!=="keydown"||b.originalEvent.key==="Escape")&&(b.source="rootClose"),f(b.source)&&(l==null||l(w,b))}),y=Ux(s==="end",i,p),E=L.useMemo(()=>({align:s,drop:i,isRTL:p}),[s,i,p]),T={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return X.jsx(kh.Provider,{value:E,children:X.jsx(ba,{placement:y,show:r,onSelect:a,onToggle:v,focusFirstItemOnShow:u,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:_?m.children:X.jsx(c,{...m,ref:e,className:Ge(o,r&&"show",T[i])})})})});Ix.displayName="Dropdown";const q2=Object.assign(Ix,{Toggle:Hh,Menu:Bh,Item:Dx,ItemText:Y2,Divider:$2,Header:X2}),K2={id:Re.string,href:Re.string,onClick:Re.func,title:Re.node.isRequired,disabled:Re.bool,align:j2,menuRole:Re.string,renderMenuOnMount:Re.bool,rootCloseEvent:Re.string,menuVariant:Re.oneOf(["dark"]),flip:Re.bool,bsPrefix:Re.string,variant:Re.string,size:Re.string},Gh=L.forwardRef(({title:t,children:e,bsPrefix:n,rootCloseEvent:i,variant:r,size:o,menuRole:s,renderMenuOnMount:a,disabled:l,href:u,id:c,menuVariant:d,flip:h,...m},_)=>X.jsxs(q2,{ref:_,...m,children:[X.jsx(Hh,{id:c,href:u,size:o,variant:r,disabled:l,childBsPrefix:n,children:t}),X.jsx(Bh,{role:s,renderOnMount:a,rootCloseEvent:i,variant:d,flip:h,children:e})]}));Gh.displayName="DropdownButton";Gh.propTypes=K2;const Z2={type:Re.string,tooltip:Re.bool,as:Re.elementType},ju=L.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:i=!1,...r},o)=>X.jsx(t,{...r,ref:o,className:Ge(e,`${n}-${i?"tooltip":"feedback"}`)}));ju.displayName="Feedback";ju.propTypes=Z2;const Li=L.createContext({}),Vh=L.forwardRef(({id:t,bsPrefix:e,className:n,type:i="checkbox",isValid:r=!1,isInvalid:o=!1,as:s="input",...a},l)=>{const{controlId:u}=L.useContext(Li);return e=Ze(e,"form-check-input"),X.jsx(s,{...a,ref:l,type:i,id:t||u,className:Ge(n,e,r&&"is-valid",o&&"is-invalid")})});Vh.displayName="FormCheckInput";const mu=L.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...i},r)=>{const{controlId:o}=L.useContext(Li);return t=Ze(t,"form-check-label"),X.jsx("label",{...i,ref:r,htmlFor:n||o,className:Ge(e,t)})});mu.displayName="FormCheckLabel";const Ox=L.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:i=!1,reverse:r=!1,disabled:o=!1,isValid:s=!1,isInvalid:a=!1,feedbackTooltip:l=!1,feedback:u,feedbackType:c,className:d,style:h,title:m="",type:_="checkbox",label:x,children:p,as:f="input",...v},g)=>{e=Ze(e,"form-check"),n=Ze(n,"form-switch");const{controlId:y}=L.useContext(Li),E=L.useMemo(()=>({controlId:t||y}),[y,t]),T=!p&&x!=null&&x!==!1||sb(p,mu),w=X.jsx(Vh,{...v,type:_==="switch"?"checkbox":_,ref:g,isValid:s,isInvalid:a,disabled:o,as:f});return X.jsx(Li.Provider,{value:E,children:X.jsx("div",{style:h,className:Ge(d,T&&e,i&&`${e}-inline`,r&&`${e}-reverse`,_==="switch"&&n),children:p||X.jsxs(X.Fragment,{children:[w,T&&X.jsx(mu,{title:m,children:x}),u&&X.jsx(ju,{type:c,tooltip:l,children:u})]})})})});Ox.displayName="FormCheck";const gu=Object.assign(Ox,{Input:Vh,Label:mu}),Fx=L.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:i,id:r,className:o,isValid:s=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input",...d},h)=>{const{controlId:m}=L.useContext(Li);t=Ze(t,"form-control");let _;return l?_={[`${t}-plaintext`]:!0}:_={[t]:!0,[`${t}-${n}`]:n},X.jsx(c,{...d,type:e,size:i,ref:h,readOnly:u,id:r||m,className:Ge(o,_,s&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)})});Fx.displayName="FormControl";const Q2=Object.assign(Fx,{Feedback:ju}),J2=li("form-floating"),Wh=L.forwardRef(({controlId:t,as:e="div",...n},i)=>{const r=L.useMemo(()=>({controlId:t}),[t]);return X.jsx(Li.Provider,{value:r,children:X.jsx(e,{...n,ref:i})})});Wh.displayName="FormGroup";const kx=L.forwardRef(({as:t="label",bsPrefix:e,column:n=!1,visuallyHidden:i=!1,className:r,htmlFor:o,...s},a)=>{const{controlId:l}=L.useContext(Li);e=Ze(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const c=Ge(r,e,i&&"visually-hidden",n&&u);return o=o||l,n?X.jsx(cu,{ref:a,as:"label",className:c,htmlFor:o,...s}):X.jsx(t,{ref:a,className:c,htmlFor:o,...s})});kx.displayName="FormLabel";const Xu=L.forwardRef(({bsPrefix:t,className:e,id:n,...i},r)=>{const{controlId:o}=L.useContext(Li);return t=Ze(t,"form-range"),X.jsx("input",{...i,type:"range",ref:r,className:Ge(e,t),id:n||o})});Xu.displayName="FormRange";const zx=L.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:i,isValid:r=!1,isInvalid:o=!1,id:s,...a},l)=>{const{controlId:u}=L.useContext(Li);return t=Ze(t,"form-select"),X.jsx("select",{...a,size:n,ref:l,className:Ge(i,t,e&&`${t}-${e}`,r&&"is-valid",o&&"is-invalid"),id:s||u})});zx.displayName="FormSelect";const Bx=L.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:i,...r},o)=>(t=Ze(t,"form-text"),X.jsx(n,{...r,ref:o,className:Ge(e,t,i&&"text-muted")})));Bx.displayName="FormText";const Hx=L.forwardRef((t,e)=>X.jsx(gu,{...t,ref:e,type:"switch"}));Hx.displayName="Switch";const eP=Object.assign(Hx,{Input:gu.Input,Label:gu.Label}),vu=L.forwardRef(({bsPrefix:t,className:e,children:n,controlId:i,label:r,...o},s)=>(t=Ze(t,"form-floating"),X.jsxs(Wh,{ref:s,className:Ge(e,t),controlId:i,...o,children:[n,X.jsx("label",{htmlFor:i,children:r})]})));vu.displayName="FloatingLabel";const tP={_ref:Re.any,validated:Re.bool,as:Re.elementType},jh=L.forwardRef(({className:t,validated:e,as:n="form",...i},r)=>X.jsx(n,{...i,ref:r,className:Ge(t,e&&"was-validated")}));jh.displayName="Form";jh.propTypes=tP;const Ds=Object.assign(jh,{Group:Wh,Control:Q2,Floating:J2,Check:gu,Switch:eP,Label:kx,Text:Bx,Range:Xu,Select:zx,FloatingLabel:vu});var _l;function Jg(t){if((!_l&&_l!==0||t)&&us){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),_l=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return _l}function ef(t){t===void 0&&(t=Aa());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function nP(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const ev=Fh("modal-open");class Xh{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:i=!1}={}){this.handleContainerOverflow=n,this.isRTL=i,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return nP(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},i=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[i]:r.style[i]},e.scrollBarWidth&&(n[i]=`${parseInt(wi(r,i)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(ev,""),wi(r,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(ev),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const tf=(t,e)=>us?t==null?(e||Aa()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function iP(t,e){const n=Wu(),[i,r]=L.useState(()=>tf(t,n==null?void 0:n.document));if(!i){const o=tf(t);o&&r(o)}return L.useEffect(()=>{},[e,i]),L.useEffect(()=>{const o=tf(t);o!==i&&r(o)},[t,i]),i}function rP({children:t,in:e,onExited:n,mountOnEnter:i,unmountOnExit:r}){const o=L.useRef(null),s=L.useRef(e),a=_t(n);L.useEffect(()=>{e?s.current=!0:a(o.current)},[e,a]);const l=cs(o,t.ref),u=L.cloneElement(t,{ref:l});return e?u:r||!s.current&&i?null:u}function oP({in:t,onTransition:e}){const n=L.useRef(null),i=L.useRef(!0),r=_t(e);return uu(()=>{if(!n.current)return;let o=!1;return r({in:t,element:n.current,initial:i.current,isStale:()=>o}),()=>{o=!0}},[t,r]),uu(()=>(i.current=!1,()=>{i.current=!0}),[]),n}function sP({children:t,in:e,onExited:n,onEntered:i,transition:r}){const[o,s]=L.useState(!e);e&&o&&s(!1);const a=oP({in:!!e,onTransition:u=>{const c=()=>{u.isStale()||(u.in?i==null||i(u.element,u.initial):(s(!0),n==null||n(u.element)))};Promise.resolve(r(u)).then(c,d=>{throw u.in||s(!0),d})}}),l=cs(a,t.ref);return o&&!e?null:L.cloneElement(t,{ref:l})}function tv(t,e,n){return t?X.jsx(t,Object.assign({},n)):e?X.jsx(sP,Object.assign({},n,{transition:e})):X.jsx(rP,Object.assign({},n))}function aP(t){return t.code==="Escape"||t.keyCode===27}const lP=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function uP(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}let nf;function cP(t){return nf||(nf=new Xh({ownerDocument:t==null?void 0:t.document})),nf}function fP(t){const e=Wu(),n=t||cP(e),i=L.useRef({dialog:null,backdrop:null});return Object.assign(i.current,{add:()=>n.add(i.current),remove:()=>n.remove(i.current),isTopModal:()=>n.isTopModal(i.current),setDialogRef:L.useCallback(r=>{i.current.dialog=r},[]),setBackdropRef:L.useCallback(r=>{i.current.backdrop=r},[])})}const Gx=L.forwardRef((t,e)=>{let{show:n=!1,role:i="dialog",className:r,style:o,children:s,backdrop:a=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:c,transition:d,runTransition:h,backdropTransition:m,runBackdropTransition:_,autoFocus:x=!0,enforceFocus:p=!0,restoreFocus:f=!0,restoreFocusOptions:v,renderDialog:g,renderBackdrop:y=he=>X.jsx("div",Object.assign({},he)),manager:E,container:T,onShow:w,onHide:b=()=>{},onExit:S,onExited:A,onExiting:B,onEnter:$,onEntering:N,onEntered:z}=t,H=uP(t,lP);const Z=Wu(),W=iP(T),P=fP(E),G=ux(),O=cx(n),[U,F]=L.useState(!n),ee=L.useRef(null);L.useImperativeHandle(e,()=>P,[P]),us&&!O&&n&&(ee.current=ef(Z==null?void 0:Z.document)),n&&U&&F(!1);const ie=_t(()=>{if(P.add(),Ye.current=Ki(document,"keydown",me),be.current=Ki(document,"focus",()=>setTimeout(ue),!0),w&&w(),x){var he,we;const Ve=ef((he=(we=P.dialog)==null?void 0:we.ownerDocument)!=null?he:Z==null?void 0:Z.document);P.dialog&&Ve&&!du(P.dialog,Ve)&&(ee.current=Ve,P.dialog.focus())}}),ne=_t(()=>{if(P.remove(),Ye.current==null||Ye.current(),be.current==null||be.current(),f){var he;(he=ee.current)==null||he.focus==null||he.focus(v),ee.current=null}});L.useEffect(()=>{!n||!W||ie()},[n,W,ie]),L.useEffect(()=>{U&&ne()},[U,ne]),px(()=>{ne()});const ue=_t(()=>{if(!p||!G()||!P.isTopModal())return;const he=ef(Z==null?void 0:Z.document);P.dialog&&he&&!du(P.dialog,he)&&P.dialog.focus()}),ge=_t(he=>{he.target===he.currentTarget&&(u==null||u(he),a===!0&&b())}),me=_t(he=>{l&&aP(he)&&P.isTopModal()&&(c==null||c(he),he.defaultPrevented||b())}),be=L.useRef(),Ye=L.useRef(),Te=(...he)=>{F(!0),A==null||A(...he)};if(!W)return null;const k=Object.assign({role:i,ref:P.setDialogRef,"aria-modal":i==="dialog"?!0:void 0},H,{style:o,className:r,tabIndex:-1});let qe=g?g(k):X.jsx("div",Object.assign({},k,{children:L.cloneElement(s,{role:"document"})}));qe=tv(d,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:S,onExiting:B,onExited:Te,onEnter:$,onEntering:N,onEntered:z,children:qe});let _e=null;return a&&(_e=y({ref:P.setBackdropRef,onClick:ge}),_e=tv(m,_,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:_e})),X.jsx(X.Fragment,{children:Po.createPortal(X.jsxs(X.Fragment,{children:[_e,qe]}),W)})});Gx.displayName="Modal";const Vx=Object.assign(Gx,{Manager:Xh});function dP(t,e){return t.classList?t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function hP(t,e){t.classList?t.classList.add(e):dP(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}function nv(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function pP(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=nv(t.className,e):t.setAttribute("class",nv(t.className&&t.className.baseVal||"",e))}const mo={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Wx extends Xh{adjustAndStore(e,n,i){const r=n.style[e];n.dataset[e]=r,wi(n,{[e]:`${parseFloat(wi(n,e))+i}px`})}restore(e,n){const i=n.dataset[e];i!==void 0&&(delete n.dataset[e],wi(n,{[e]:i}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(hP(n,"modal-open"),!e.scrollBarWidth)return;const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Vi(n,mo.FIXED_CONTENT).forEach(o=>this.adjustAndStore(i,o,e.scrollBarWidth)),Vi(n,mo.STICKY_CONTENT).forEach(o=>this.adjustAndStore(r,o,-e.scrollBarWidth)),Vi(n,mo.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(r,o,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();pP(n,"modal-open");const i=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";Vi(n,mo.FIXED_CONTENT).forEach(o=>this.restore(i,o)),Vi(n,mo.STICKY_CONTENT).forEach(o=>this.restore(r,o)),Vi(n,mo.NAVBAR_TOGGLER).forEach(o=>this.restore(r,o))}}let rf;function jx(t){return rf||(rf=new Wx(t)),rf}const mP=li("modal-body"),$h=L.createContext({onHide(){}}),Yh=L.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:i,size:r,fullscreen:o,children:s,scrollable:a,...l},u)=>{t=Ze(t,"modal");const c=`${t}-dialog`,d=typeof o=="string"?`${t}-fullscreen-${o}`:`${t}-fullscreen`;return X.jsx("div",{...l,ref:u,className:Ge(c,e,r&&`${t}-${r}`,i&&`${c}-centered`,a&&`${c}-scrollable`,o&&d),children:X.jsx("div",{className:Ge(`${t}-content`,n),children:s})})});Yh.displayName="ModalDialog";const gP=li("modal-footer"),Xx=L.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:n=!1,onHide:i,children:r,...o},s)=>{const a=L.useContext($h),l=_t(()=>{a==null||a.onHide(),i==null||i()});return X.jsxs("div",{ref:s,...o,children:[r,n&&X.jsx(Ch,{"aria-label":t,variant:e,onClick:l})]})}),$x=L.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:i=!1,...r},o)=>(t=Ze(t,"modal-header"),X.jsx(Xx,{ref:o,...r,className:Ge(e,t),closeLabel:n,closeButton:i})));$x.displayName="ModalHeader";const vP=hx("h4"),_P=li("modal-title",{Component:vP});function xP(t){return X.jsx(Bu,{...t,timeout:null})}function yP(t){return X.jsx(Bu,{...t,timeout:null})}const Yx=L.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:i,contentClassName:r,children:o,dialogAs:s=Yh,"aria-labelledby":a,"aria-describedby":l,"aria-label":u,show:c=!1,animation:d=!0,backdrop:h=!0,keyboard:m=!0,onEscapeKeyDown:_,onShow:x,onHide:p,container:f,autoFocus:v=!0,enforceFocus:g=!0,restoreFocus:y=!0,restoreFocusOptions:E,onEntered:T,onExit:w,onExiting:b,onEnter:S,onEntering:A,onExited:B,backdropClassName:$,manager:N,...z},H)=>{const[Z,W]=L.useState({}),[P,G]=L.useState(!1),O=L.useRef(!1),U=L.useRef(!1),F=L.useRef(null),[ee,ie]=lx(),ne=cs(H,ie),ue=_t(p),ge=tx();t=Ze(t,"modal");const me=L.useMemo(()=>({onHide:ue}),[ue]);function be(){return N||jx({isRTL:ge})}function Ye(I){if(!us)return;const re=be().getScrollbarWidth()>0,te=I.scrollHeight>Aa(I).documentElement.clientHeight;W({paddingRight:re&&!te?Jg():void 0,paddingLeft:!re&&te?Jg():void 0})}const Te=_t(()=>{ee&&Ye(ee.dialog)});px(()=>{dd(window,"resize",Te),F.current==null||F.current()});const k=()=>{O.current=!0},qe=I=>{O.current&&ee&&I.target===ee.dialog&&(U.current=!0),O.current=!1},_e=()=>{G(!0),F.current=sx(ee.dialog,()=>{G(!1)})},he=I=>{I.target===I.currentTarget&&_e()},we=I=>{if(h==="static"){he(I);return}if(U.current||I.target!==I.currentTarget){U.current=!1;return}p==null||p()},Ve=I=>{m?_==null||_(I):(I.preventDefault(),h==="static"&&_e())},Ue=(I,re)=>{I&&Ye(I),S==null||S(I,re)},Pe=I=>{F.current==null||F.current(),w==null||w(I)},Oe=(I,re)=>{A==null||A(I,re),Mh(window,"resize",Te)},et=I=>{I&&(I.style.display=""),B==null||B(I),dd(window,"resize",Te)},ut=L.useCallback(I=>X.jsx("div",{...I,className:Ge(`${t}-backdrop`,$,!d&&"show")}),[d,$,t]),R={...n,...Z};R.display="block";const M=I=>X.jsx("div",{role:"dialog",...I,style:R,className:Ge(e,t,P&&`${t}-static`,!d&&"show"),onClick:h?we:void 0,onMouseUp:qe,"aria-label":u,"aria-labelledby":a,"aria-describedby":l,children:X.jsx(s,{...z,onMouseDown:k,className:i,contentClassName:r,children:o})});return X.jsx($h.Provider,{value:me,children:X.jsx(Vx,{show:c,ref:ne,backdrop:h,container:f,keyboard:!0,autoFocus:v,enforceFocus:g,restoreFocus:y,restoreFocusOptions:E,onEscapeKeyDown:Ve,onShow:x,onHide:p,onEnter:Ue,onEntering:Oe,onEntered:T,onExit:Pe,onExiting:b,onExited:et,manager:be(),transition:d?xP:void 0,backdropTransition:d?yP:void 0,renderBackdrop:ut,renderDialog:M})})});Yx.displayName="Modal";const xl=Object.assign(Yx,{Body:mP,Header:$x,Title:_P,Footer:gP,Dialog:Yh,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),qx=L.forwardRef(({bsPrefix:t,className:e,as:n,...i},r)=>{t=Ze(t,"navbar-brand");const o=n||(i.href?"a":"span");return X.jsx(o,{...i,ref:r,className:Ge(e,t)})});qx.displayName="NavbarBrand";const Kx=L.forwardRef(({children:t,bsPrefix:e,...n},i)=>{e=Ze(e,"navbar-collapse");const r=L.useContext(Yr);return X.jsx(VR,{in:!!(r&&r.expanded),...n,children:X.jsx("div",{ref:i,className:e,children:t})})});Kx.displayName="NavbarCollapse";const Zx=L.forwardRef(({bsPrefix:t,className:e,children:n,label:i="Toggle navigation",as:r="button",onClick:o,...s},a)=>{t=Ze(t,"navbar-toggler");const{onToggle:l,expanded:u}=L.useContext(Yr)||{},c=_t(d=>{o&&o(d),l&&l()});return r==="button"&&(s.type="button"),X.jsx(r,{...s,ref:a,onClick:c,"aria-label":i,className:Ge(e,t,!u&&"collapsed"),children:n||X.jsx("span",{className:`${t}-icon`})})});Zx.displayName="NavbarToggle";const md=new WeakMap,iv=(t,e)=>{if(!t||!e)return;const n=md.get(e)||new Map;md.set(e,n);let i=n.get(t);return i||(i=e.matchMedia(t),i.refCount=0,n.set(i.media,i)),i};function SP(t,e=typeof window>"u"?void 0:window){const n=iv(t,e),[i,r]=L.useState(()=>n?n.matches:!1);return uu(()=>{let o=iv(t,e);if(!o)return r(!1);let s=md.get(e);const a=()=>{r(o.matches)};return o.refCount++,o.addListener(a),a(),()=>{o.removeListener(a),o.refCount--,o.refCount<=0&&(s==null||s.delete(o.media)),o=void 0}},[t]),i}function EP(t){const e=Object.keys(t);function n(a,l){return a===l?l:a?`${a} and ${l}`:l}function i(a){return e[Math.min(e.indexOf(a)+1,e.length-1)]}function r(a){const l=i(a);let u=t[l];return typeof u=="number"?u=`${u-.2}px`:u=`calc(${u} - 0.2px)`,`(max-width: ${u})`}function o(a){let l=t[a];return typeof l=="number"&&(l=`${l}px`),`(min-width: ${l})`}function s(a,l,u){let c;typeof a=="object"?(c=a,u=l,l=!0):(l=l||!0,c={[a]:l});let d=L.useMemo(()=>Object.entries(c).reduce((h,[m,_])=>((_==="up"||_===!0)&&(h=n(h,o(m))),(_==="down"||_===!0)&&(h=n(h,r(m))),h),""),[JSON.stringify(c)]);return SP(d,u)}return s}const MP=EP({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),TP=li("offcanvas-body"),wP={[Vn]:"show",[yi]:"show"},Qx=L.forwardRef(({bsPrefix:t,className:e,children:n,in:i=!1,mountOnEnter:r=!1,unmountOnExit:o=!1,appear:s=!1,...a},l)=>(t=Ze(t,"offcanvas"),X.jsx(wh,{ref:l,addEndListener:Th,in:i,mountOnEnter:r,unmountOnExit:o,appear:s,...a,childRef:n.ref,children:(u,c)=>L.cloneElement(n,{...c,className:Ge(e,n.props.className,(u===Vn||u===ga)&&`${t}-toggling`,wP[u])})})));Qx.displayName="OffcanvasToggling";const Jx=L.forwardRef(({bsPrefix:t,className:e,closeLabel:n="Close",closeButton:i=!1,...r},o)=>(t=Ze(t,"offcanvas-header"),X.jsx(Xx,{ref:o,...r,className:Ge(e,t),closeLabel:n,closeButton:i})));Jx.displayName="OffcanvasHeader";const AP=hx("h5"),CP=li("offcanvas-title",{Component:AP});function RP(t){return X.jsx(Qx,{...t})}function bP(t){return X.jsx(Bu,{...t})}const ey=L.forwardRef(({bsPrefix:t,className:e,children:n,"aria-labelledby":i,placement:r="start",responsive:o,show:s=!1,backdrop:a=!0,keyboard:l=!0,scroll:u=!1,onEscapeKeyDown:c,onShow:d,onHide:h,container:m,autoFocus:_=!0,enforceFocus:x=!0,restoreFocus:p=!0,restoreFocusOptions:f,onEntered:v,onExit:g,onExiting:y,onEnter:E,onEntering:T,onExited:w,backdropClassName:b,manager:S,renderStaticNode:A=!1,...B},$)=>{const N=L.useRef();t=Ze(t,"offcanvas");const{onToggle:z}=L.useContext(Yr)||{},[H,Z]=L.useState(!1),W=MP(o||"xs","up");L.useEffect(()=>{Z(o?s&&!W:s)},[s,o,W]);const P=_t(()=>{z==null||z(),h==null||h()}),G=L.useMemo(()=>({onHide:P}),[P]);function O(){return S||(u?(N.current||(N.current=new Wx({handleContainerOverflow:!1})),N.current):jx())}const U=(ne,...ue)=>{ne&&(ne.style.visibility="visible"),E==null||E(ne,...ue)},F=(ne,...ue)=>{ne&&(ne.style.visibility=""),w==null||w(...ue)},ee=L.useCallback(ne=>X.jsx("div",{...ne,className:Ge(`${t}-backdrop`,b)}),[b,t]),ie=ne=>X.jsx("div",{...ne,...B,className:Ge(e,o?`${t}-${o}`:t,`${t}-${r}`),"aria-labelledby":i,children:n});return X.jsxs(X.Fragment,{children:[!H&&(o||A)&&ie({}),X.jsx($h.Provider,{value:G,children:X.jsx(Vx,{show:H,ref:$,backdrop:a,container:m,keyboard:l,autoFocus:_,enforceFocus:x&&!u,restoreFocus:p,restoreFocusOptions:f,onEscapeKeyDown:c,onShow:d,onHide:P,onEnter:U,onEntering:T,onEntered:v,onExit:g,onExiting:y,onExited:F,manager:O(),transition:RP,backdropTransition:bP,renderBackdrop:ee,renderDialog:ie})})]})});ey.displayName="Offcanvas";const PP=Object.assign(ey,{Body:TP,Header:Jx,Title:CP}),ty=L.forwardRef((t,e)=>{const n=L.useContext(Yr);return X.jsx(PP,{ref:e,show:!!(n!=null&&n.expanded),...t,renderStaticNode:!0})});ty.displayName="NavbarOffcanvas";const LP=li("navbar-text",{Component:"span"}),ny=L.forwardRef((t,e)=>{const{bsPrefix:n,expand:i=!0,variant:r="light",bg:o,fixed:s,sticky:a,className:l,as:u="nav",expanded:c,onToggle:d,onSelect:h,collapseOnSelect:m=!1,..._}=Q0(t,{expanded:"onToggle"}),x=Ze(n,"navbar"),p=L.useCallback((...g)=>{h==null||h(...g),m&&c&&(d==null||d(!1))},[h,m,c,d]);_.role===void 0&&u!=="nav"&&(_.role="navigation");let f=`${x}-expand`;typeof i=="string"&&(f=`${f}-${i}`);const v=L.useMemo(()=>({onToggle:()=>d==null?void 0:d(!c),bsPrefix:x,expanded:!!c,expand:i}),[x,c,i,d]);return X.jsx(Yr.Provider,{value:v,children:X.jsx(pu.Provider,{value:p,children:X.jsx(u,{ref:e,..._,className:Ge(l,x,i&&f,r&&`${x}-${r}`,o&&`bg-${o}`,a&&`sticky-${a}`,s&&`fixed-${s}`)})})})});ny.displayName="Navbar";const DP=Object.assign(ny,{Brand:qx,Collapse:Kx,Offcanvas:ty,Text:LP,Toggle:Zx}),iy=L.forwardRef(({bsPrefix:t,className:e,as:n="div",...i},r)=>{const o=Ze(t,"row"),s=Sh(),a=Eh(),l=`${o}-cols`,u=[];return s.forEach(c=>{const d=i[c];delete i[c];let h;d!=null&&typeof d=="object"?{cols:h}=d:h=d;const m=c!==a?`-${c}`:"";h!=null&&u.push(`${l}${m}-${h}`)}),X.jsx(n,{ref:r,...i,className:Ge(e,o,...u)})});iy.displayName="Row";function NP(t,e=J0,n=ex){const i=[];return Object.entries(t).forEach(([r,o])=>{o!=null&&(typeof o=="object"?e.forEach(s=>{const a=o[s];if(a!=null){const l=s!==n?`-${s}`:"";i.push(`${r}${l}-${a}`)}}):i.push(`${r}-${o}`))}),i}const ry=L.forwardRef(({as:t="div",bsPrefix:e,className:n,direction:i,gap:r,...o},s)=>{e=Ze(e,i==="horizontal"?"hstack":"vstack");const a=Sh(),l=Eh();return X.jsx(t,{...o,ref:s,className:Ge(n,e,...NP({gap:r},a,l))})});ry.displayName="Stack";function UP({open:t,close:e,enabledCanvas:n,setEnabledCanvas:i}){return X.jsxs(xl,{id:"settingsModal",show:t,onHide:e,fullscreen:!0,children:[X.jsx(xl.Header,{closeButton:!0,children:X.jsx(xl.Title,{children:"Modal"})}),X.jsx(xl.Body,{children:X.jsxs(iy,{children:[X.jsxs(cu,{xs:12,md:6,children:[X.jsx("h4",{children:"Visualiser Settings"}),X.jsx("hr",{}),X.jsx("h5",{children:"2D Visualiser"}),X.jsx(Ds.Check,{type:"radio",label:"Enabled",checked:n==="2d",onChange:r=>r.target.checked?i("2d"):i("webgl2")}),X.jsx("br",{}),X.jsx("h5",{children:"OpenGL Visualiser"}),X.jsx(Ds.Check,{type:"radio",label:"Enabled",checked:n==="webgl2",onChange:r=>r.target.checked?i("webgl2"):i("2d")})]}),X.jsxs(cu,{xs:12,md:6,children:[X.jsx("h4",{children:"Analyser Settings"}),X.jsx("hr",{}),X.jsx(vu,{label:"FFT Size",children:X.jsx(Ds.Control,{disabled:!0,type:"number",placeholder:"FFT Size",defaultValue:16384})}),X.jsx("br",{}),X.jsx(vu,{label:"Type",children:X.jsxs(Ds.Select,{placeholder:"Type",children:[X.jsx("option",{value:"FFT",children:"FFT Analyser"}),X.jsx("option",{disabled:!0,value:"WebAudioAPI",children:"WebAudioAPI Analyser"})]})}),X.jsx("br",{})]})]})})]})}function IP(){async function t(e){const n=e.target.files;if(!n)return;const i=[];for(let r=0;r<n.length;r++)i.push(n[r]);console.log(i),Qe.src=URL.createObjectURL(i[0]),await Qe.play()}return X.jsx(Ds.Control,{id:"uploadAudio",type:"file",accept:"audio/*",onChange:t})}var OP=["color","size","title"];function gd(){return gd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gd.apply(this,arguments)}function FP(t,e){if(t==null)return{};var n=kP(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function kP(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var qh=L.forwardRef(function(t,e){var n=t.color,i=t.size,r=t.title,o=FP(t,OP);return Ie.createElement("svg",gd({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:n},o),r?Ie.createElement("title",null,r):null,Ie.createElement("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"}))});qh.propTypes={color:Re.string,size:Re.oneOfType([Re.string,Re.number]),title:Re.string};qh.defaultProps={color:"currentColor",size:"1em",title:null};var zP=["color","size","title"];function vd(){return vd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vd.apply(this,arguments)}function BP(t,e){if(t==null)return{};var n=HP(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function HP(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var Kh=L.forwardRef(function(t,e){var n=t.color,i=t.size,r=t.title,o=BP(t,zP);return Ie.createElement("svg",vd({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:n},o),r?Ie.createElement("title",null,r):null,Ie.createElement("path",{d:"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"}))});Kh.propTypes={color:Re.string,size:Re.oneOfType([Re.string,Re.number]),title:Re.string};Kh.defaultProps={color:"currentColor",size:"1em",title:null};var GP=["color","size","title"];function _d(){return _d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_d.apply(this,arguments)}function VP(t,e){if(t==null)return{};var n=WP(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function WP(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var Zh=L.forwardRef(function(t,e){var n=t.color,i=t.size,r=t.title,o=VP(t,GP);return Ie.createElement("svg",_d({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:n},o),r?Ie.createElement("title",null,r):null,Ie.createElement("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"}))});Zh.propTypes={color:Re.string,size:Re.oneOfType([Re.string,Re.number]),title:Re.string};Zh.defaultProps={color:"currentColor",size:"1em",title:null};var jP=["color","size","title"];function xd(){return xd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xd.apply(this,arguments)}function XP(t,e){if(t==null)return{};var n=$P(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function $P(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var Qh=L.forwardRef(function(t,e){var n=t.color,i=t.size,r=t.title,o=XP(t,jP);return Ie.createElement("svg",xd({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:n},o),r?Ie.createElement("title",null,r):null,Ie.createElement("path",{d:"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"}),Ie.createElement("path",{d:"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"}),Ie.createElement("path",{d:"M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"}))});Qh.propTypes={color:Re.string,size:Re.oneOfType([Re.string,Re.number]),title:Re.string};Qh.defaultProps={color:"currentColor",size:"1em",title:null};function YP(){const[t,e]=Ie.useState(1);Ie.useEffect(()=>{Qe.onvolumechange=function(){e(Qe.volume)};const i=localStorage.getItem("volume");return i&&(Qe.volume=Number.parseInt(i)/100),()=>{Qe.onvolumechange=null,Qe.onpause=null,Qe.onplay=null}},[]);async function n(i){Qe.volume=Number.parseInt(i)/100,console.log(`Set volume to ${i}`),localStorage.setItem("volume",i)}return X.jsx(Gh,{id:"volumeButton",drop:"end",title:X.jsx(Qh,{size:"32"}),menuVariant:"dark",children:X.jsx("div",{className:"pe-3 d-flex flex-column justify-content-center",children:X.jsx(Xu,{id:"volumeRange",min:0,max:100,step:1,value:t*100,onChange:i=>n(i.target.value)})})})}function qP(){const[t,e]=Ie.useState("playing");L.useEffect(()=>{Qe.onpause=function(){e("paused")},Qe.onplay=function(){e("playing")}},[]);function n(){t==="playing"?Qe.pause():Qe.play()}return X.jsx(Hu,{id:"playPauseButton",onClick:n,children:t==="playing"?X.jsx(Kh,{size:"32"}):X.jsx(Zh,{size:"32"})})}function KP(){const[t,e]=Ie.useState(0),[n,i]=Ie.useState(0);Ie.useEffect(()=>(Qe.ondurationchange=function(){e(Qe.duration)},Qe.ontimeupdate=function(){i(Qe.currentTime)},()=>{Qe.ondurationchange=null,Qe.ontimeupdate=null}),[]);async function r(o){Qe.currentTime=Number.parseInt(o.target.value),Qe.paused&&await Qe.play()}return X.jsxs(ry,{id:"timeline",direction:"horizontal",gap:2,className:"px-3 py-2",children:[X.jsx("i",{className:"text-white",children:pm(n)}),X.jsx(Xu,{id:"timelineRange",min:0,max:Math.floor(t),step:1,value:Math.floor(n),onChange:r}),X.jsx("i",{className:"text-white",children:pm(t)})]})}function ZP({openSettings:t}){return X.jsxs("div",{id:"controlArea",className:"fixed-bottom bg-dark",children:[X.jsx(KP,{}),X.jsxs(DP,{id:"controls",bg:"dark",className:"p-3",children:[X.jsx(YP,{}),X.jsx("div",{className:"mx-auto",children:X.jsx(qP,{})}),X.jsx(Hu,{id:"settingsButton",onClick:t,children:X.jsx(qh,{size:"32"})})]})]})}function QP(){const[t,e]=Ie.useState({width:window.innerWidth,height:0});Ie.useEffect(()=>(window.onload=function(){window.dispatchEvent(new Event("resize"))},window.onresize=function(){e({width:window.innerWidth,height:window.innerHeight-document.getElementById("controlArea").clientHeight-document.getElementById("uploadAudio").clientHeight})},()=>{window.onload=null,window.onresize=null}),[]);const[n,i]=Ie.useState(!1);async function r(){i(!0)}async function o(){i(!1)}const[s,a]=Ie.useState("2d");return X.jsxs("main",{children:[X.jsx(UP,{open:n,close:o,enabledCanvas:s,setEnabledCanvas:a}),X.jsx(IP,{}),s==="2d"?X.jsx(WE,{width:t.width,height:t.height}):X.jsx(gR,{width:t.width,height:t.height}),X.jsx(ZP,{openSettings:r})]})}function JP(){return X.jsx(QP,{})}of.createRoot(document.getElementById("root")).render(X.jsx(Ie.StrictMode,{children:X.jsx(JP,{})}));